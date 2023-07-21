var jwt = require("jsonwebtoken");
const JWT_SECRET = "Umarisgoodboy";

const fetchuser = (req, res, next) => {
  //get the user fro the jwt token
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "Please use valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please use valid token" });
  }
};

module.exports = fetchuser;
