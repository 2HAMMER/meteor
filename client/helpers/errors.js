Errors = new Meteor.Collection(null);

throwErrors = function (message) {
    Errors.insert({message: message});
};