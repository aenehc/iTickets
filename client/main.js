/*
the subscription as a funnel connecting the canonical data store and the client-side cache.
*/

Meteor.subscribe('tickets');
Meteor.subscribe('newtickets');

// Here, we want to make the subscription code reactive so that the subscription resets itself whenever the currentTicketId session variable changes.
Deps.autorun(function() {
  Meteor.subscribe('comments', Session.get('currentTicketId'));
});
