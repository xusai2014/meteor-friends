// FRIENDS INDEX
// -------------------------------------------------------
Meteor.publish('friends', function() {
  return Friends.find({userId: this.userId});
});

// FRIEND SHOW
// -------------------------------------------------------
Meteor.publish('friend', function(id) {
  check(id, String);
  return Friends.find({followingId: id});
});
// FRIEND NEW
//--------------------------------------------------------
Meteor.publish('getUserList', function() {
  return Meteor.users.find({}, {limit: 20});
});
