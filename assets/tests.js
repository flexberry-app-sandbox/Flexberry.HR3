'use strict';

define('ember-app/tests/acceptance/flexberry/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s h r анкеты l');

  (0, _qunit.test)('testing i-i-s-h-r-анкеты-l', function (assert) {
    var _this = this;

    visit('/i-i-s-h-r-анкеты-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s h r должности l');

  (0, _qunit.test)('testing i-i-s-h-r-должности-l', function (assert) {
    var _this = this;

    visit('/i-i-s-h-r-должности-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s h r контроль т з l');

  (0, _qunit.test)('testing i-i-s-h-r-контроль-т-з-l', function (assert) {
    var _this = this;

    visit('/i-i-s-h-r-контроль-т-з-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s h r отделы l');

  (0, _qunit.test)('testing i-i-s-h-r-отделы-l', function (assert) {
    var _this = this;

    visit('/i-i-s-h-r-отделы-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s h r сотрудники l');

  (0, _qunit.test)('testing i-i-s-h-r-сотрудники-l', function (assert) {
    var _this = this;

    visit('/i-i-s-h-r-сотрудники-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s h r физ лица l');

  (0, _qunit.test)('testing i-i-s-h-r-физ-лица-l', function (assert) {
    var _this = this;

    visit('/i-i-s-h-r-физ-лица-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hr анкеты l');

  (0, _qunit.test)('testing i-i-s-hr-анкеты-l', function (assert) {
    var _this = this;

    visit('/i-i-s-hr-анкеты-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hr должности l');

  (0, _qunit.test)('testing i-i-s-hr-должности-l', function (assert) {
    var _this = this;

    visit('/i-i-s-hr-должности-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hr контроль т з l');

  (0, _qunit.test)('testing i-i-s-hr-контроль-т-з-l', function (assert) {
    var _this = this;

    visit('/i-i-s-hr-контроль-т-з-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hr отделы l');

  (0, _qunit.test)('testing i-i-s-hr-отделы-l', function (assert) {
    var _this = this;

    visit('/i-i-s-hr-отделы-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hr сотрудники l');

  (0, _qunit.test)('testing i-i-s-hr-сотрудники-l', function (assert) {
    var _this = this;

    visit('/i-i-s-hr-сотрудники-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/acceptance/flexberry/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test', ['qunit', 'ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('[AGAT] Acceptance | i i s hr физ лица l');

  (0, _qunit.test)('testing i-i-s-hr-физ-лица-l', function (assert) {
    var _this = this;

    visit('/i-i-s-hr-физ-лица-l');

    checkOlvConfig('[data-test-component=flexberry-objectlistview]', null, assert, ['refreshButton', 'createNewButton', 'colsConfigButton']);

    andThen(function () {
      var listNotEmpty = find('.object-list-view-helper-column').length > 0;

      var controller = _this.application.__container__.lookup('controller:' + currentRouteName());
      var newFormRoute = controller.get('editFormRoute') + '.new';
      goToNewForm('[data-test-component=flexberry-objectlistview]', null, assert, newFormRoute);

      click('.close-button');

      if (listNotEmpty) {
        click('[data-test-component=flexberry-objectlistview] td.field:first');
      }
    });
  });
});
define('ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/forms/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/forms/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/en/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/en/translations.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/forms/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/forms/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('locales/ru/translations.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'locales/ru/translations.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('mixins/regenerated/serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mixins/regenerated/serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e/new.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e/new.js should pass ESLint\n\n');
  });

  QUnit.test('routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/application.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-offline.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-offline.js should pass ESLint\n\n');
  });

  QUnit.test('serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430.js should pass ESLint\n\n');
  });

  QUnit.test('services/offline-globals.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/offline-globals.js should pass ESLint\n\n');
  });

  QUnit.test('services/store.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/store.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('ember-app/tests/helpers/ember-i18n/test-helpers', ['ember-i18n/test-support/-private/t', 'ember-i18n/test-support/-private/assert-translation'], function (_t2, _assertTranslation2) {
  'use strict';

  // example usage: find(`.header:contains(${t('welcome_message')})`)
  Ember.Test.registerHelper('t', function (app, key, interpolations) {
    return (0, _t2.default)(app.__container__, key, interpolations);
  });

  // example usage: expectTranslation('.header', 'welcome_message');
  Ember.Test.registerHelper('expectTranslation', function (app, element, key, interpolations) {
    var text = (0, _t2.default)(app.__container__, key, interpolations);

    (0, _assertTranslation2.default)(element, key, text);
  });
});
define('ember-app/tests/helpers/ember-prop-types', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.createComponent = createComponent;

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

  var VERSION = Ember.VERSION;


  /**
   * Determine if we are on a version of Ember that includes Glimmer 2
   * @returns {Boolean} whether or not we are on Glimmer 2
   */
  function isGlimmer2() {
    var _VERSION$split = VERSION.split('.'),
        _VERSION$split2 = _slicedToArray(_VERSION$split, 2),
        major = _VERSION$split2[0],
        minor = _VERSION$split2[1];

    return parseInt(major) > 1 && parseInt(minor) > 9;
  }

  /**
   * Programitcally instantiate instance of component class
   * @param {Ember.Component} component - component class to instantiate
   * @returns {Ember.Component} instance of component class
   */
  function createComponent(component) {
    if (isGlimmer2()) {
      return component.create({ renderer: {} });
    }

    return component.create();
  }
});
define('ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember-app/tests/helpers/start-app', 'ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('ember-app/tests/helpers/start-app', ['exports', 'ember-app/app', 'ember-app/config/environment', 'ember-flexberry/test-support'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('ember-app/tests/test-helper', ['ember-app/app', 'ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/flexberry/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('acceptance/flexberry/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/flexberry/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test.js should pass ESLint\n\n');
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-анкеты-e', 'Unit | Controller | i-i-s-h-r-анкеты-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-анкеты-l', 'Unit | Controller | i-i-s-h-r-анкеты-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-должности-e', 'Unit | Controller | i-i-s-h-r-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-должности-l', 'Unit | Controller | i-i-s-h-r-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-контроль-т-з-e', 'Unit | Controller | i-i-s-h-r-контроль-т-з-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-контроль-т-з-l', 'Unit | Controller | i-i-s-h-r-контроль-т-з-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-отделы-e', 'Unit | Controller | i-i-s-h-r-отделы-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-отделы-l', 'Unit | Controller | i-i-s-h-r-отделы-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-сотрудники-e', 'Unit | Controller | i-i-s-h-r-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-сотрудники-l', 'Unit | Controller | i-i-s-h-r-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-физ-лица-e', 'Unit | Controller | i-i-s-h-r-физ-лица-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-h-r-физ-лица-l', 'Unit | Controller | i-i-s-h-r-физ-лица-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-анкеты-e', 'Unit | Controller | i-i-s-hr-анкеты-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-анкеты-l', 'Unit | Controller | i-i-s-hr-анкеты-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-должности-e', 'Unit | Controller | i-i-s-hr-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-должности-l', 'Unit | Controller | i-i-s-hr-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-контроль-т-з-e', 'Unit | Controller | i-i-s-hr-контроль-т-з-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-контроль-т-з-l', 'Unit | Controller | i-i-s-hr-контроль-т-з-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-отделы-e', 'Unit | Controller | i-i-s-hr-отделы-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-отделы-l', 'Unit | Controller | i-i-s-hr-отделы-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-сотрудники-e', 'Unit | Controller | i-i-s-hr-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-сотрудники-l', 'Unit | Controller | i-i-s-hr-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-физ-лица-e', 'Unit | Controller | i-i-s-hr-физ-лица-e', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:flexberry-file-view-dialog', 'controller:lookup-dialog', 'controller:filters-dialog', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit', 'service:lookup-events']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/controllers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:i-i-s-hr-физ-лица-l', 'Unit | Controller | i-i-s-hr-физ-лица-l', {
    // Specify the other units that are required for this test.
    needs: ['controller:advlimit-dialog', 'controller:colsconfig-dialog', 'controller:filters-dialog', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('ember-app/tests/unit/models/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-анкеты', 'Unit | Model | i-i-s-h-r-анкеты', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-должности', 'Unit | Model | i-i-s-h-r-должности', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-контроль-т-з', 'Unit | Model | i-i-s-h-r-контроль-т-з', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-отделы', 'Unit | Model | i-i-s-h-r-отделы', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-проверяемые', 'Unit | Model | i-i-s-h-r-проверяемые', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-сотрудники', 'Unit | Model | i-i-s-h-r-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-физ-лица', 'Unit | Model | i-i-s-h-r-физ-лица', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-анкеты', 'Unit | Model | i-i-s-hr-анкеты', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-должности', 'Unit | Model | i-i-s-hr-должности', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-контроль-т-з', 'Unit | Model | i-i-s-hr-контроль-т-з', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-отделы', 'Unit | Model | i-i-s-hr-отделы', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-проверяемые', 'Unit | Model | i-i-s-hr-проверяемые', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-сотрудники', 'Unit | Model | i-i-s-hr-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/models/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-физ-лица', 'Unit | Model | i-i-s-hr-физ-лица', {
    // Specify the other units that are required for this test.
    needs: ['model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many', 'service:syncer']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();

    // let store = this.store();
    assert.ok(!!model);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-анкеты-e', 'Unit | Route | i-i-s-h-r-анкеты-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-анкеты-l', 'Unit | Route | i-i-s-h-r-анкеты-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-должности-e', 'Unit | Route | i-i-s-h-r-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-должности-l', 'Unit | Route | i-i-s-h-r-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-контроль-т-з-e', 'Unit | Route | i-i-s-h-r-контроль-т-з-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-контроль-т-з-l', 'Unit | Route | i-i-s-h-r-контроль-т-з-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-отделы-e', 'Unit | Route | i-i-s-h-r-отделы-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-отделы-l', 'Unit | Route | i-i-s-h-r-отделы-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-сотрудники-e', 'Unit | Route | i-i-s-h-r-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-сотрудники-l', 'Unit | Route | i-i-s-h-r-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-физ-лица-e', 'Unit | Route | i-i-s-h-r-физ-лица-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-h-r-физ-лица-l', 'Unit | Route | i-i-s-h-r-физ-лица-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-анкеты-e', 'Unit | Route | i-i-s-hr-анкеты-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-анкеты-l', 'Unit | Route | i-i-s-hr-анкеты-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-должности-e', 'Unit | Route | i-i-s-hr-должности-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-должности-l', 'Unit | Route | i-i-s-hr-должности-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-контроль-т-з-e', 'Unit | Route | i-i-s-hr-контроль-т-з-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-контроль-т-з-l', 'Unit | Route | i-i-s-hr-контроль-т-з-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-отделы-e', 'Unit | Route | i-i-s-hr-отделы-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-отделы-l', 'Unit | Route | i-i-s-hr-отделы-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-сотрудники-e', 'Unit | Route | i-i-s-hr-сотрудники-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-сотрудники-l', 'Unit | Route | i-i-s-hr-сотрудники-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-e-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-физ-лица-e', 'Unit | Route | i-i-s-hr-физ-лица-e', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:detail-interaction', 'service:objectlistview-events', 'service:user-settings', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/routes/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-l-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:i-i-s-hr-физ-лица-l', 'Unit | Route | i-i-s-hr-физ-лица-l', {
    // Specify the other units that are required for this test.
    needs: ['service:cols-config-menu', 'service:form-load-time-tracker', 'service:objectlistview-events', 'service:app-state', 'service:adv-limit']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-h-r-\u0430\u043D\u043A\u0435\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-анкеты', 'Unit | Serializer | i-i-s-h-r-анкеты', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-h-r-анкеты', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-h-r-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-должности', 'Unit | Serializer | i-i-s-h-r-должности', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-h-r-должности', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-h-r-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-контроль-т-з', 'Unit | Serializer | i-i-s-h-r-контроль-т-з', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-h-r-контроль-т-з', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-h-r-\u043E\u0442\u0434\u0435\u043B\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-отделы', 'Unit | Serializer | i-i-s-h-r-отделы', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-h-r-отделы', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-h-r-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-проверяемые', 'Unit | Serializer | i-i-s-h-r-проверяемые', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-h-r-проверяемые', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-h-r-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-сотрудники', 'Unit | Serializer | i-i-s-h-r-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-h-r-сотрудники', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-h-r-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-h-r-физ-лица', 'Unit | Serializer | i-i-s-h-r-физ-лица', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-h-r-физ-лица', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hr-\u0430\u043D\u043A\u0435\u0442\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-анкеты', 'Unit | Serializer | i-i-s-hr-анкеты', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hr-анкеты', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hr-\u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-должности', 'Unit | Serializer | i-i-s-hr-должности', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hr-должности', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hr-\u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044C-\u0442-\u0437-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-контроль-т-з', 'Unit | Serializer | i-i-s-hr-контроль-т-з', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hr-контроль-т-з', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hr-\u043E\u0442\u0434\u0435\u043B\u044B-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-отделы', 'Unit | Serializer | i-i-s-hr-отделы', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hr-отделы', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hr-\u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u043C\u044B\u0435-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-проверяемые', 'Unit | Serializer | i-i-s-hr-проверяемые', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hr-проверяемые', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hr-\u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-сотрудники', 'Unit | Serializer | i-i-s-hr-сотрудники', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hr-сотрудники', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/tests/unit/serializers/i-i-s-hr-\u0444\u0438\u0437-\u043B\u0438\u0446\u0430-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForModel)('i-i-s-hr-физ-лица', 'Unit | Serializer | i-i-s-hr-физ-лица', {
    // Specify the other units that are required for this test.
    needs: ['serializer:i-i-s-hr-физ-лица', 'service:syncer', 'transform:file', 'transform:decimal', 'transform:guid', 'model:i-i-s-h-r-анкеты', 'model:i-i-s-h-r-должности', 'model:i-i-s-h-r-контроль-т-з', 'model:i-i-s-h-r-отделы', 'model:i-i-s-h-r-проверяемые', 'model:i-i-s-h-r-сотрудники', 'model:i-i-s-h-r-физ-лица', 'model:i-i-s-hr-анкеты', 'model:i-i-s-hr-должности', 'model:i-i-s-hr-контроль-т-з', 'model:i-i-s-hr-отделы', 'model:i-i-s-hr-проверяемые', 'model:i-i-s-hr-сотрудники', 'model:i-i-s-hr-физ-лица', 'validator:ds-error', 'validator:presence', 'validator:number', 'validator:date', 'validator:belongs-to', 'validator:has-many']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
define('ember-app/config/environment', [], function() {
  var prefix = 'ember-app';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
