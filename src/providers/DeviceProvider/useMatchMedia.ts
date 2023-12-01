import {useCallback, useLayoutEffect, useMemo, useState} from 'react';
import {DeviceContextValue} from './DeviceContext';
import type {Device, DeviceToMediaQuery, MediaWidth} from './types';
import {getDefineDeviceList} from './getDefineDeviceList';
import {DEFAULT_DEVICE} from './constants';

/**
 * `KELYSTY`: It is an `inner hook` that uses window.matchMedia API in order to
 * determine the current device. It accepts 2 required params:
 * - `mobileMaxWidth` - top boundary of the mobile device
 * - `tabletMaxWidth` - top boundary of the tablet device
 *
 * It validates them and then use to create an array of devices' names
 * associated with calculated media queries based on passed widths. It adds
 * event listeners to window.matchMedia API in order to update the device
 * each time it cahnges; It returns a structure `DeviceContextValue`
 */
export const useMatchMedia = (
  mobileMaxWidth: MediaWidth,
  tabletMaxWidth: MediaWidth,
): DeviceContextValue => {
  if (mobileMaxWidth >= tabletMaxWidth) {
    throw new Error('Invalid max MediaWidths');
  }

  const [activeDevice, setActiveDevice] = useState<Device>(() => DEFAULT_DEVICE);

  // creating define device list for using matchMedia API
  const defineDeviceList: DeviceToMediaQuery[] = useMemo(
    () => getDefineDeviceList(mobileMaxWidth, tabletMaxWidth),
    [mobileMaxWidth, tabletMaxWidth],
  );

  // creating MediaQueryList for each device
  const mediaQueryLists: MediaQueryList[] = useMemo(
    () =>
      defineDeviceList.map((item) => {
        return window.matchMedia(item.mediaQuery);
      }),
    [defineDeviceList],
  );

  // function to get array of actual match statuses
  const getActualMatches = useCallback((): boolean[] => {
    return mediaQueryLists.map((list) => list.matches);
  }, [mediaQueryLists]);

  // function that gets actual values and transforms it
  // into verbal form such as 'desktop', 'table' or 'mobile'
  const renewValues = useCallback(() => {
    const matches: boolean[] = getActualMatches();
    const indexOfMatch = matches.indexOf(true);
    setActiveDevice(defineDeviceList[indexOfMatch].device);
  }, [getActualMatches, defineDeviceList]);

  useLayoutEffect(() => {
    mediaQueryLists.forEach((list) => {
      list.addEventListener('change', renewValues);
    });

    return () => {
      mediaQueryLists.forEach((list) => {
        list.removeEventListener('change', renewValues);
      });
    };
  }, [mediaQueryLists, renewValues]);

  const deviceContextValue: DeviceContextValue = useMemo(
    () => ({
      device: activeDevice,
      isDesktop: activeDevice === 'desktop',
      isTablet: activeDevice === 'tablet',
      isMobile: activeDevice === 'mobile',
    }),
    [activeDevice],
  );

  return deviceContextValue;
};
