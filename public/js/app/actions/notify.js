/*
* A custom notify action. Note that usually, notifications should
* be dispatched as part of another action. This is for when
* you want it standalone.
*/
import { NOTIFY_SHOW_MESSAGE } from 'constants/notify';


export default options => ({
  type: NOTIFY_SHOW_MESSAGE,
  message: options.message,
});
