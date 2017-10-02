import { moduleForModel, test } from 'ember-qunit';

moduleForModel('round-trip-flight-search', 'Unit | Model | round trip flight search', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
