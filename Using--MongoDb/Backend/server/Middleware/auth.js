import jwt from "jsonwebtoken";
const config = "userToPagalhaibhai";

export const middlewarefunc = (req, res, next) => {
  //Get token from header
  const token = req.header("token");

  //check if not token
  if (!token) {
    return res
      .status(401)
      .json({
        msg:
          "No token,authorization denied, sorry but you are now allowed to go further, just pass VAlid credientials",
      });
  }
  //verify token
  try {
    const decoded = jwt.verify(token, config);
    req.username = decoded.username; //decoded.user because we have set user in payload
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
