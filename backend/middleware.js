import jwt from 'jsonwebtoken';

export const authMiddleware = (req,res,next) => {
    const authHeader = req.get('Authorization');

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        res.status(403).json({
            message:'User logged out'
        })
        return;
    }

    const token = authHeader.substring(7);

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(403).json({
            message:'User logged out'
        })
    }
    
}