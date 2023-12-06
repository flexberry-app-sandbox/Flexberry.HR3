import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as АнкетыMixin
} from '../mixins/regenerated/models/i-i-s-hr-анкеты';

import Физ_лицаModel from './i-i-s-hr-физ-лица';

let Model = Физ_лицаModel.extend(АнкетыMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
