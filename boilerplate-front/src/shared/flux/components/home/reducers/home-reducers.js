import ACTION from '../constants';
import { fromJS } from 'immutable';
import { INITIAL_STATE } from '../flux-components-home';

export default function (state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case ACTION.TEST:
      return state.set('test', fromJS(action.payload));
    default:
      return state;
  }
}
