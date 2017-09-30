import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['class', 'numberOfAdult'],

  sortParam: ['smallestAmount'],


  maxConnection: 0,


  filteredSolutions: Ember.computed('model.solutions', 'model.solutions.@each.segments', 'maxConnection', function () {
    let filteredSolutions = [];
    let maxConnection = parseInt(this.get('maxConnection')) + 1;
    console.log(maxConnection);
    let originalSolutions = this.get('model.solutions');
    if (maxConnection !== undefined) {
      originalSolutions.forEach(solution => {
        solution.get('slices').forEach(slice => {
          if (slice.get('segments.length') <= maxConnection) {
            filteredSolutions.pushObject(solution)
          }
        });
      })
    }
    return filteredSolutions;
  }),

  sortedSolutions: Ember.computed.sort('filteredSolutions', 'sortParam')


});
