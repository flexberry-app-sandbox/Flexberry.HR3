import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as СотрудникиMixin
} from '../mixins/regenerated/models/i-i-s-hr-сотрудники';

import Физ_лицаModel from './i-i-s-hr-физ-лица';

let Model = Физ_лицаModel.extend(СотрудникиMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
