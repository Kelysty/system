import {createContext} from 'react';
import {DEFAULT_DEVICE} from './constants';
import type {Device, IsDevice} from './types';

/**
 * `KELYSTY`: It is an interface that represents the value
 * that should be passed to the Device Context
 */
export interface DeviceContextValue {
  device: Device;
  isDesktop: IsDevice;
  isTablet: IsDevice;
  isMobile: IsDevice;
}

/** `KELYSTY`: It is the initial value of the DeviceContext */
const initialDeviceContextValue: DeviceContextValue = {
  device: DEFAULT_DEVICE,
  isDesktop: DEFAULT_DEVICE === 'desktop',
  isTablet: DEFAULT_DEVICE === 'tablet',
  isMobile: DEFAULT_DEVICE === 'mobile',
};

/**
 * `KELYSTY`: It is the DeviceContext that will be used
 * and will be addressed to throughout the application;
 */
export const DeviceContext = createContext(initialDeviceContextValue);

DeviceContext.displayName = 'DeviceContext';
