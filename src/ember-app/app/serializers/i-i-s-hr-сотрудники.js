import { Serializer as СотрудникиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-hr-сотрудники';
import Физ_лицаSerializer from './i-i-s-hr-физ-лица';

export default Физ_лицаSerializer.extend(СотрудникиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
