import type {DeviceToMediaQuery, MediaWidth} from './types';

/**
 * `KELYSTY`: This is an `inner helper function` that should not
 * be exposed (exported outwards); It accepts 2 required params:
 * - `mobileMaxWidth` - top boundary of the mobile device
 * - `tabletMaxWidth` - top boundary of the tablet device
 *
 * This methods accepts them and then uses to create a
 * `DefineDeviceList` - special structure that links devices' names
 * to their media queries and returns this structure;
 */
export const getDefineDeviceList = (
  mobileMaxWidth: MediaWidth,
  tabletMaxWidth: MediaWidth,
): DeviceToMediaQuery[] => {
  return [
    {device: 'desktop', mediaQuery: `(min-width: ${tabletMaxWidth + 1}px)`},
    {
      device: 'tablet',
      mediaQuery: `(min-width: ${mobileMaxWidth + 1}px) and (max-width: ${tabletMaxWidth}px)`,
    },
    {device: 'mobile', mediaQuery: `(max-width: ${mobileMaxWidth}px)`},
  ];
};
