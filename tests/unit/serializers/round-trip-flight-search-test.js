import {moduleForModel, test} from 'ember-qunit';

moduleForModel('round-trip-flight-search', 'Unit | Serializer | round trip flight search', {
  // Specify the other units that are required for this test.
  needs: ['serializer:round-trip-flight-search', 'model:solution', 'model:airline']
});

// Replace this with your real tests.
test('it serializes records', function (assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
