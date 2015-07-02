Meteor.methods({
    insertScore: function(amount) {
        Scores.insert({amount: amount});
    }
});
