import { combineReducers } from "../../../../Library/Caches/typescript/3.6/node_modules/redux";
import testReducer from "../../features/testarea/testReducer";

const rootReducer = combineReducers({
    test:testReducer
})

export default rootReducer;