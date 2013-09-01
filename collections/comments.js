// Meteor collection for our comments

Comments = new Meteor.Collection('comments');
Meteor.methods({
  comment: function(commentAttributes) {
    var user = Meteor.user();
    var ticket = Tickets.findOne(commentAttributes.ticketId);
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to make comments");
    if (!commentAttributes.content)
      throw new Meteor.Error(422, 'Please write some content');
    if (!commentAttributes.ticketId)
      throw new Meteor.Error(422, 'You must comment on a ticket');
    comment = _.extend(_.pick(commentAttributes, 'ticketId', 'content'), {
      userId: user._id,
      author: user.username,
      creationDate: new Date().getTime()
    });


    return Comments.insert(comment);
  }
});




