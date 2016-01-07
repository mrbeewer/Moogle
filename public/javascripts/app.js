var app = app || {};
var active = active || {};

$(document).ready(function() {
  console.log("Something");

  active.userCollection = new app.userCollection();
  active.loginView = new app.loginView({
    collection: active.userCollection
  });
});
