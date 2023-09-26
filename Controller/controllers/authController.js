const dbAdminOperation = require("../../Model/operations/dbAdminOperation");

exports.getLoginPage = async (req, res, next) => {
  // Gets cookie from front end with Get request for the page.
  // req.get("Cookie") will only return not expired cookies
  // if (req.get("Cookie")) {
    // console.log(req.get("Cookie"));
    // console.log(req.cookies);
    // Output:
    // connect.sid=s%3AEc9Ke1LRkapkR1oCWsJhLAQ135sZJvip.FOzakumJ0zFCgJNOUdqtiG0j%2BCyRLGLTF0qrw5Rm88E; loggedIn=true
  // }

  res.render("login", {
    pagePath: "/login",
    renderTitle: "Login",
    selectedUser: res.locals.selectedUser,
  });
};

exports.postLoginPage = async (req, res, next) => {
  const {
    "entered-username": enteredUsername,
    "entered-password": enteredPassword,
  } = req.body;

  console.log(enteredUsername, enteredPassword);

  req.session.isLoggedIn = true;


  // Sets cookie upon post request to the front end.
  // loggedIn=true
  // It will expire 2023/09/25 00:00AM UTC
  // const expiryDate = new Date("2050-09-25T00:00:00Z").toUTCString();
  // res.setHeader("Set-Cookie", `loggedIn=true; Expires=${expiryDate}`);

  // Max-Age sets the expiry of the cookie in seconds
  // Even though this cookie will be invalid after 10 seconds
  // It will still stay in browser but will be deleted by browser eventually
  // const expirySecond = 10;
  // res.setHeader("Set-Cookie", `tenSeconds=true; Max-Age=${expirySecond}`);

  res.redirect("/");
};
