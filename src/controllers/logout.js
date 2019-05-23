const logout = (req, res) => {
  console.log("LOGOUT");
  const token = req.headers.cookie.split("=")[1];
  res.clearCookie("remindly");
  res.redirect(302, "/");
  // res.writeHead(302, {
  //   "set-cookie": `remindly=${token}; max-age=0; HttpOnly`,
  //   Location: "/"
  // });
  // res.end();
};

module.exports = logout;
