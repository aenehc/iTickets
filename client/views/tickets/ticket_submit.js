// We get inputs from our form and we call ticket for push up all of that in our database.
Template.ticketSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var ticket = {
      summary: $(e.target).find('[name=summary]').val(),
      description: $(e.target).find('[name=description]').val(),
      priority: $(e.target).find('[name=priority]').val(),
      status: 'NEW'
    }


    Meteor.call('ticket', ticket, function(error, id) {
      if (error)
        return alert(error.reason);

      Meteor.Router.to('/', ticket);
    });
  }
});
