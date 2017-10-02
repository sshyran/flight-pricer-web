import { moduleForModel, test } from 'ember-qunit';

moduleForModel('segment', 'Unit | Serializer | segment', {
  // Specify the other units that are required for this test.
  needs: ['serializer:segment','model:leg']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
