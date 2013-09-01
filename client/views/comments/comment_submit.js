// add comment to our database (as our ticket submit)

Template.commentSubmit.events({
  'submit form': function(e, template) {
    e.preventDefault();

    var $content = $(e.target).find('[name=content]');
    var comment = {
      content: $content.val(),
      ticketId: template.data._id
    };

    Meteor.call('comment', comment, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        $content.val('');
      }
    });
  }
});
