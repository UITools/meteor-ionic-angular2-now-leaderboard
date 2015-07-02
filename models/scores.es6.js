Scores = new Meteor.Collection('scores');

if (Meteor.isClient) {
    @Service('ScoreService')
    @Inject(['$meteor'])
    class ScoreService {
        constructor($meteor) {
            this.$meteor = $meteor;
            this._collection = this.$meteor.collection(Scores).subscribe('scores');
        }

        findAll() {
            return this._collection
        }

        @MeteorMethod()
        insertScore(amount) {
            this.$meteor.call('insertScore', amount);
        }
    }
}

