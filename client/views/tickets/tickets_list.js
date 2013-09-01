// Here it's for sort our list of ticket
Template.ticketsList.helpers({
  tickets: function() {
    return Tickets.find({}, {sort: {creationDate: -1}});
  }
});
