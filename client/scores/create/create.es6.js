@Component({selector: 'create-score-form'})
@View({templateUrl: 'client/scores/create/create.ng.html'})
@Inject(['ScoreService'])
class CreateScoreCtrl {
    constructor(ScoreService) {
        this.service = ScoreService;
        this.amount = '';
    }

    insertScore() {
        this.service.insertScore(this.amount);
        this.resetAmount();
    }

    resetAmount() {
        this.amount = '';
    }
}
