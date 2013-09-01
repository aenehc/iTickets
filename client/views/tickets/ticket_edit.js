//I think it's enough explicit but it's the change status when you want to edit a ticket

Template.ticketEdit.helpers({
  ticket: function() {
    return Tickets.findOne(Session.get('currentTicketId'));
  }
});

Template.ticketEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentTicketId = Session.get('currentTicketId');

    var ticketProperties = {
      status: $(e.target).find('[name=status]').val()
    }

//put
    Tickets.update(currentTicketId, {$set: ticketProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Meteor.Router.to('ticketsList');
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this ticket?")) {
      var currentTicketId = Session.get('currentTicketId');
      Tickets.remove(currentTicketId);
      Meteor.Router.to('ticketsList');
    }
  }
});
