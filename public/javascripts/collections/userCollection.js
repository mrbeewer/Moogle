var app = app || {};
var active = active || {};

app.userCollection = Backbone.Collection.extend({
  model: app.userModel,
  url: "/user",
  initialize: function() {
    var self = this;
    this.on('change', function() {
      console.log('Our Collection changed.');
      var view = new app.CollectionView({
        collection: self
      });
    });
    this.on('sync', function() {
      console.log('Our Collection synced with the API.');
      var view = new app.CollectionView({
        collection: self
      });
    });
    // get data from the API
    this.fetch();
    console.log("this");
    console.log(this);
  }
});
