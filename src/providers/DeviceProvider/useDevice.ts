import {useContext} from 'react';
import {DeviceContext, type DeviceContextValue} from './DeviceContext';

/**
 * `KELYSTY`: It is the hook that is used to access the
 * current active device value;
 */
export const useDevice = (): DeviceContextValue => {
  return useContext(DeviceContext);
};
