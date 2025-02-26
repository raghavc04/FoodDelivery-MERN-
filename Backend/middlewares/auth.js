import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
  const {token } = req.headers;
  if (!token) {
    return res.json({ success:false, message: 'Not Authorized Login Again' });
  }
  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = token_decode.id;
    next();
    
  }catch{
    console.log('Token is not valid');  // handle error here if needed if needed
    return res.json({ success:false, message: 'Token is not valid' });
  }
}

export default authMiddleware;

