import jwt from "jsonwebtoken";
export const exportValidationData = (req, res, next) => {
  try {
    const token = req.headers["authorization"]?.split(" ")[1];
    console.log("token",token)
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = _id;
  } catch (error) {
    req.userId = null;
  }
  next();
};
