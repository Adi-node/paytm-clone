import { Router } from "express";
import z from "zod";
import { accountModel, userModel } from "../db";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { authMiddleware } from "../middleware";

const userRouter = Router();

userRouter.post('/signup',async (req,res) => {
    const bodyParser = z.object({
        userName:z.string().email().min(3).max(30),
        firstName:z.string(),
        lastName:z.string(),
        password:z.string()
    });

    try {
        const parsedBody = bodyParser.parse(req.body);
    
        const user = await userModel.findOne({userName:parsedBody.userName});
        if(user){
            res.status(411).json({
                message: 'Email already taken / Incorrect Inputs'
            });
            return;
        }
    
        const hashedPassward = await bcrypt.hash(parsedBody.password,5);
    
    
        const dbUser = await userModel.create({
            userName:parsedBody.userName,
            firstName:parsedBody.firstName,
            lastName:parsedBody.lastName,
            password:hashedPassward
        });
    
        const token = jwt.sign({userId:dbUser._id},process.env.JWT_SECRET);

        await accountModel.create({
            userId:dbUser._id,
            balance:1 + Math.random() * 100000
        })
    
        return res.status(200).json({
            message:'User created successfully',
            token
        });
    
    } catch (error) {
        res.status(500).json({
            message:"Internal server error"
        });
    }

});

userRouter.post('/signin',async (req,res) => {
    const bodyParser = z.object({
        userName:z.string().email(),
        password:z.string()
    });

    try {
        const parsedBody = bodyParser.parse(req.body);
    
        const dbUser = await userModel.findOne({userName:parsedBody.userName});
        if(!dbUser){
            res.status(411).json({
                message:"User not registered"
            });
            return;
        }
    
        const verifiedUser =await bcrypt.compare(parsedBody.password,dbUser.password);
        if(!verifiedUser){
            res.status(411).json({
                message:"Wrong Username or Password"
            });
            return;
        }
    
        const token = jwt.sign({userId:dbUser._id},process.env.JWT_SECRET);
    
        res.status(200).json({
            message:"User logged in successfully",
            token
        });
        return;
    } catch (error) {
        res.status(500).json({
            message:"Internal server error"
        });
    }
});

userRouter.put('/',authMiddleware,async (req,res) => {
    const bodyParser = z.object({
        firstName:z.string().optional(),
        lastName:z.string().optional(),
        password:z.string().optional()
    })

    try {
        const {success} = bodyParser.safeParse(req.body);
        if(!success){
            return res.status(411).json({
                message:'Error while updating credentials'
            })
        }
    
        const body = req.body;
    
        const dbUser = await userModel.findById(req.userId);
        if (!dbUser) return res.status(404).json({ message: "User not found" });
    
        if(body.firstName)dbUser.firstName = body.firstName;
        if(body.lastName)dbUser.lastName = body.lastName;
        if(body.password){
            const hash = await bcrypt.hash(body.password,5);
            dbUser.password = hash;
        }
    
        await dbUser.save();
    
        res.status(200).json({
            message:'Updated successfully'
        })
    
        return;
    } catch (error) {
        res.status(500).json({
            message:'Internal server error'
        })
    }


})

userRouter.get('/bulk',authMiddleware,async (req,res) =>{
    try {
        const filter = req.query.filter || "";
    
        if(filter == ""){
            return res.status(200).json({
                users:[]
            })
        }
    
        const userList =await userModel.find({$or:[
            {firstName:{
                "$regex":filter,
                "$options":"i"
            }},
            {lastName:{
                "$regex":filter,
                "$options":"i"
            }}
    
        ]});
    
        return res.status(200).json({
            users:userList.map(user =>({
                userName:user.userName,
                firstName:user.firstName,
                lastName:user.lastName,
                _id:user._id
    
            }))
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Internal server error'
        })
    }
})



export default userRouter;