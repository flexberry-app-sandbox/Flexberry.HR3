import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-r-физ-лица', 'Unit | Serializer | i-i-s-h-r-физ-лица', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-h-r-физ-лица',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-h-r-анкеты',
    'model:i-i-s-h-r-должности',
    'model:i-i-s-h-r-контроль-т-з',
    'model:i-i-s-h-r-отделы',
    'model:i-i-s-h-r-проверяемые',
    'model:i-i-s-h-r-сотрудники',
    'model:i-i-s-h-r-физ-лица',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
