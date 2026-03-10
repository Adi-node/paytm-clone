import { Router } from "express";
import { authMiddleware } from "../middleware";
import { accountModel } from "../db";


const accountRouter = Router();

accountRouter.get('/balance',authMiddleware,async (req,res) =>{
    try {
        const userId = req.userId;

        const account = await accountModel.findOne({userId}, 'balance');

        if(!account){
            return res.status(404).json({
                message: "Account not found"
            })
        }

        return res.status(200).json({
            balance: account.balance
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
})



export default accountRouter;