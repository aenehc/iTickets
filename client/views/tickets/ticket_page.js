// request to our database for our current ticket and their comments (sorry for my fucking weird english)
Template.ticketPage.helpers({
  currentTicket: function() {
    return Tickets.findOne(Session.get('currentTicketId'));
  },
  comments: function() {
    return Comments.find({ticketId: this._id});
  }
});
