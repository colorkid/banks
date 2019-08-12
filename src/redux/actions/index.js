import { ACTION_TYPE } from "../constants";

export const addBank = (bank) => {
  return {
    type: ACTION_TYPE.ADD_BANK,
    payload: bank
  }
}

export const removeBank = (bick) => {
  return {
    type: ACTION_TYPE.REMOVE_BANK,
    payload: bick
  }
}

export const updateBank = (bank) => {
  return {
    type: ACTION_TYPE.UPDATE_BANK,
    payload: bank
  }
}