import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-h-r-сотрудники';

import Физ_лицаModel from './i-i-s-h-r-физ-лица';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-h-r-физ-лица';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = Физ_лицаModel.extend(СотрудникиMixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
