export enum GetServiceActionTypes {
  GET_DEVICES_REQUEST = 'GET_DEVICES_REQUEST',
}

export interface GetDevicesRequest {
  type: GetServiceActionTypes.GET_DEVICES_REQUEST;
  id: string;
  acquiring?: boolean;
}

export type GetDevicesActions = GetDevicesRequest;

export function getDevices(id: string, acquiring = false): GetDevicesRequest {
  return {
    type: GetServiceActionTypes.GET_DEVICES_REQUEST,
    id,
    acquiring,
  };
}
