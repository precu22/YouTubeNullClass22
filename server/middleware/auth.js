// import jwt from 'jsonwebtoken'

// const auth =(req,res,next)=>{
//     try {
//         const token = req.headers.authorization.split(" ")[1];

//         let decodeData= jwt.verify(token,process.env.JWT_SECRET)
//          req.userId=decodeData?.id
//         next();        
//     }catch(error){
//         res.status(400).json("Invalid Creadentials");
//     }
// }
// export default auth
//workable code ends here

//updated by precious on 22/07
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(403).json({ message: "Authorization token is required" });

    const isCustomAuth = token.length < 500; // Indicates it's a custom token, not a Google token

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Authentication failed" });
  }
};

export default auth;
//working ends here as of 3rd aug

//update on 3rd aug
// import jwt from 'jsonwebtoken';

// const auth = (req, res, next) => {
//   const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

//   console.log('Received token:', token);

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//     if (err) {
//       console.error('Token verification failed:', err);
//       return res.status(401).json({ message: 'Failed to authenticate token' });
//     }

//     req.userId = decoded.id;
//     next();
//   });
// };

// export default auth;
