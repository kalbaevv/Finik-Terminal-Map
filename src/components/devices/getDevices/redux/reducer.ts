/* Local dependencies */
import { GetDevicesActions } from './action';

export interface GetDevicesState {
  loading: boolean;
  error: null | Error;
}

export const initialGetDevicesState: GetDevicesState = {
  loading: false,
  error: null,
};

export default function getDevices(state = initialGetDevicesState, action: GetDevicesActions) {
  switch (action.type) {
    default:
      return state;
  }
}
