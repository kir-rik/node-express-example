module.exports = function (req, res, next) {
  console.log("LOGGED. Session: ", req.session);
  next();
};
