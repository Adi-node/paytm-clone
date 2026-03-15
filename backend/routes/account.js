import { Router } from "express";
import mongoose from "mongoose";
import { authMiddleware } from "../middleware.js";
import { accountModel } from "../db.js";


const accountRouter = Router();

accountRouter.get('/balance',authMiddleware,async (req,res) =>{
    try {
        const userId = req.userId;

        const account = await accountModel.findOne({userId}).populate("userId","firstName");

        if(!account){
            return res.status(404).json({
                message: "Account not found"
            })
        }

        return res.status(200).json({
            balance: account.balance,
            firstName:account.userId.firstName
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})

accountRouter.post('/transfer', authMiddleware, async (req,res) =>{
    let session;
    try {
        session =await mongoose.startSession();
    
        session.startTransaction();
    
        const { amount,to } = req.body;
    
        const account =await accountModel.findOne({userId:req.userId}).session(session);
    
        if(!account || account.balance < amount){
            await session.abortTransaction();
            return res.status(400).json({
                message: 'Insufficient balance'
            })
        }
    
        const toAccount = await accountModel.findOne({userId:to}).session(session);
    
        if(!toAccount){
            await session.abortTransaction();
            return res.status(400).json({
                message: 'Invalid account'
            })
        }
    
        await accountModel.updateOne({userId:req.userId},{$inc:{balance:-amount}}).session(session);
        await accountModel.updateOne({userId:to},{$inc:{balance:amount}}).session(session);
    
        await session.commitTransaction();
    
        return res.status(200).json({
            message: 'Transfer successful'
        })
    } catch (error) {
        await session.abortTransaction();

        res.status(500).json({
            message: 'Transaction failed'
        })
    }finally{
        await session.endSession();
    }
})



export default accountRouter;