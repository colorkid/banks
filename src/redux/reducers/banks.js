import { ACTION_TYPE } from "../constants";

export const banks = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_BANK:
      return addBank(state, action.payload);
    case ACTION_TYPE.REMOVE_BANK:
      return removeBank(state);
    case ACTION_TYPE.REMOVE_BANK:
      return updateBank(state);    
    default:
      return state
  }
}

const addBank = (state, bank) => {
  return [...state, bank];
}

const removeBank = (state) => {
  return state;
}

const updateBank = (state) => {
  return state;
}