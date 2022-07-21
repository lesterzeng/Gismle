const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    // console.log(req.headers["authorization"]);
    const token = req.headers["authorization"].replace("Bearer ", "");

    if (token) {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      req.decoded = decoded;
      next();
    } else {
      return res.status(403).send({
        status: "error",
        message: "missing token",
      });
    }
  } catch (err) {
    return res.status(401).send({
      status: "error",
      message: "unauthorised",
    });
  }
};

module.exports = auth;
