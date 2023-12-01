import {ReactNode} from 'react';
import {DeviceContext, DeviceContextValue} from './DeviceContext';
import type {MediaWidth} from './types';
import {DEFAULT_MOBILE_MAX_WIDTH, DEFAULT_TABLET_MAX_WIDTH} from './constants';
import {useMatchMedia} from './useMatchMedia';

interface RequiredProps {
  mobileMaxWidth: MediaWidth;
  tabletMaxWidth: MediaWidth;
  children: ReactNode;
}

/**
 * `KELYSTY`: It is an interface that represents the props
 * that should be passed to the custom DeviceProvider component
 */
export type DeviceProviderProps = Partial<RequiredProps>;

/**
 * `KELYSTY`: It is a DeviceProvider, that constains current device state;
 */
export const DeviceProvider = ({
  mobileMaxWidth = DEFAULT_MOBILE_MAX_WIDTH,
  tabletMaxWidth = DEFAULT_TABLET_MAX_WIDTH,
  children,
}: DeviceProviderProps) => {
  const deviceContextValue: DeviceContextValue = useMatchMedia(mobileMaxWidth, tabletMaxWidth);

  return <DeviceContext.Provider value={deviceContextValue}>{children}</DeviceContext.Provider>;
};

DeviceProvider.displayName = 'DeviceProvider';
