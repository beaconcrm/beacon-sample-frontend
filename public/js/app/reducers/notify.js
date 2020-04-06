import { NOTIFY_SHOW_MESSAGE } from 'constants/notify';


export default function (state = {}, action) {

  switch (action.type) {
    case NOTIFY_SHOW_MESSAGE:
      return {
        message: action.message,
        created_at: Date.now(),
      };
    default:
      return state;
  }

}
