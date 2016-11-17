var post = require('axios').post;
var config = require("../config");
var TOKEN_URL = "" + config.webAppUrl + '/api/tokens';
var log = require("../logger");

module.exports = function (password, username) {
  var params = {
    user: {
      email: username,
      password: password
    }
  };
  var email = params.user.email;
  return post(TOKEN_URL, params)
    .then(function (resp) {
      log("" + email + " logged in.");
      return resp.data.token.unencoded
    }, function (error) {
      log("Failed to log in user " + email + " " + TOKEN_URL);
      return Promise.reject(error);
    });
}
