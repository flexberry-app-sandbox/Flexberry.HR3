import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-r-отделы', 'Unit | Model | i-i-s-h-r-отделы', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
