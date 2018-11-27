import chat from './modules/chatReducer'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({chat});
export default rootReducer;