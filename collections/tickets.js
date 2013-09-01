/*
Meteor collection for our tickets with some allow/deny for security
if you want to check the meteor collections you can run the command: meteor mongo
So it is a mongodb database, you can see the tickets collection with this command: db.tickets.find()
*/

Tickets = new Meteor.Collection('tickets');
Tickets.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Tickets.deny({
  update: function(userId, post, fieldNames) {
    // may only edit the status field:
    return (_.without(fieldNames, 'status').length > 0);
  }
});

Meteor.methods({
  ticket: function(ticketAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");

    // ensure the ticket has a summary
    if (!ticketAttributes.summary)
      throw new Meteor.Error(422, 'Please write a headline');

    // pick out the whitelisted keys
    // add author, date
    var ticket = _.extend(_.pick(ticketAttributes, 'summary', 'description', 'priority', 'status'), {
      userId: user._id,
      author: user.username,
      creationDate: new Date().getTime()
    });

    var ticketId = Tickets.insert(ticket);

    return ticketId;
  }
});
