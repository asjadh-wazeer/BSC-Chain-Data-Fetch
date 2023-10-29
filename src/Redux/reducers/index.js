import { contributeAmountReducer, contributePriceReducer } from "./contribute";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  contributeAmount: contributeAmountReducer,
  contributePrice: contributePriceReducer,
});
export default allReducers;
