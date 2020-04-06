import Confirm from './component';
import createConfirmation from './createConfirmation';

const confirm = createConfirmation(Confirm);

export default (options = {}) => confirm(options);
