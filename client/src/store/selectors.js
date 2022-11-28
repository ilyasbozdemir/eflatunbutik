import { createSelector } from 'reselect';

const domain = (state) => state;

export const selectLoginState = () => createSelector(
  domain,
  substate => substate.loginState,
);
