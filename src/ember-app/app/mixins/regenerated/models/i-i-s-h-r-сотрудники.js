import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  дата_приема: DS.attr('date'),
  должности: DS.belongsTo('i-i-s-h-r-должности', { inverse: null, async: false }),
  отделы: DS.belongsTo('i-i-s-h-r-отделы', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-h-r-сотрудники.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, integer: true }),
    ],
  },
  дата_приема: {
    descriptionKey: 'models.i-i-s-h-r-сотрудники.validations.дата_приема.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
      validator('presence', true),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-h-r-сотрудники.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  отделы: {
    descriptionKey: 'models.i-i-s-h-r-сотрудники.validations.отделы.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-h-r-физ-лица'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникиE', 'i-i-s-h-r-сотрудники', {
    iD: attr('ID', { index: 0 }),
    дата_приема: attr('Дата_приема', { index: 1 }),
    фИО: attr('ФИО', { index: 2 }),
    контакты: attr('Контакты', { index: 3 }),
    образование: attr('Образование', { index: 4 }),
    опыт_работы: attr('Опыт_работы', { index: 5 }),
    должности: belongsTo('i-i-s-h-r-должности', 'Должности', {
      название: attr('Название', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'название' }),
    отделы: belongsTo('i-i-s-h-r-отделы', 'Отделы', {
      название: attr('Название', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'название' })
  });

  modelClass.defineProjection('СотрудникиL', 'i-i-s-h-r-сотрудники', {
    iD: attr('ID', { index: 0 }),
    дата_приема: attr('Дата_приема', { index: 1 }),
    фИО: attr('ФИО', { index: 2 }),
    контакты: attr('Контакты', { index: 3 }),
    образование: attr('Образование', { index: 4 }),
    опыт_работы: attr('Опыт_работы', { index: 5 }),
    должности: belongsTo('i-i-s-h-r-должности', 'Название', {
      название: attr('Название', { index: 6 })
    }, { index: -1, hidden: true }),
    отделы: belongsTo('i-i-s-h-r-отделы', 'Название', {
      название: attr('Название', { index: 7 })
    }, { index: -1, hidden: true })
  });
};
