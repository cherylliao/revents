import { combineReducers } from "../../../../Library/Caches/typescript/3.6/node_modules/redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";

const rootReducer = combineReducers({
    test:testReducer,
    events:eventReducer
})

export default rootReducer;