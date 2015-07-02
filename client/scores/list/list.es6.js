@State({name: 'scoresList', url: '/', defaultRoute: true, html5Mode: true})
@Component('listScores')
@View({templateUrl: 'client/scores/list/list.ng.html'})
@Inject(['$meteor', 'ScoreService'])
class ScoresListCtrl {
    constructor($meteor, ScoreService) {
        this.scores = ScoreService.findAll();
    }
}
