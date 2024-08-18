export default {
    timeMachine: {
        path: '/',
        controller: 'timeMachineController'
    },
    game : {
        path : "/olympics",
        controller : "gameController"
    },
    highscores : {
        path : "/halloffame",
        controller : "highscoreController"
    },
    curiosities : {
        path : "/cabinetofcuriosities",
        controller : "curiositiesController"
    },
    countries : {
        path : "/countries",
        controller : "chooseCountryController"
    },
    currentPath: {
        path: '',
        controller: ''
    }
};
