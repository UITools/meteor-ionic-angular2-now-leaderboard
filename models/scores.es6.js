Scores = new Meteor.Collection('scores');

if (Meteor.isClient) {
    @Service('ScoreService')
    @Inject(['$meteor'])
    class ScoreService {
        constructor($meteor) {
            this._collection = $meteor.collection(Scores).subscribe('scores');
        }

        findAll() {
            return this._collection
        }
    }
}

