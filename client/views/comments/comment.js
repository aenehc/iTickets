// for write a beautiful date :D
Template.comment.helpers({
  submittedText: function() {
    return new Date(this.creationDate).toString();
  }
});
