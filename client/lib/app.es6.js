angular.extend(window, angular2now);
angular2now.options({ controllerAs: 'vm'})

angular.module('leaderboard', ['angular-meteor']);

@Component({selector: 'leaderboard'})
@View({ templateUrl: 'client/app.ng.html'})
class Leaderboard {}

bootstrap(Leaderboard);