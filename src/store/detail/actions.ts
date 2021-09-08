import { ActionType, createAction } from 'typesafe-actions';

export const setSellerTypeAction = createAction('@seller/SET_SELLER_TYPE_ACTION')<void>();

const actions = {
  setSellerTypeAction,
};

export type Actions = ActionType<typeof actions>;
