/*
Here it's our publish, before I have deleted the autopublish package
publish is a method of transferring data from a server-side collection to a client-side collection
*/

Meteor.publish('tickets', function() {
  return Tickets.find();
});

// No time for that but it's very simple... :)
Meteor.publish('newtickets', function() {
  return Tickets.find({'status':'NEW'});
});

Meteor.publish('comments', function(ticketId) {
  return Comments.find({ticketId: ticketId});
});
