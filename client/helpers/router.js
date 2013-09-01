// all our routers and filters for secure (as used)

Meteor.Router.add({
  '/': 'ticketsList',
  '/tickets/:_id': {
    to: 'ticketPage',
    and: function(id) { Session.set('currentTicketId', id); }
  },
  '/tickets/:_id/edit': {
    to: 'ticketEdit',
    and: function(id) { Session.set('currentTicketId', id); }
  },
  '/submit': 'ticketSubmit'
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else
      return 'accessDenied';
  }
});
Meteor.Router.filter('requireLogin');
