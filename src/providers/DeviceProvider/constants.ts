import type {Device, MediaWidth} from './types';

/** `KELYSTY`: List of all available devices by default */
export const DEFAULT_DEVICES: Device[] = ['desktop', 'tablet', 'mobile'];

/** `KELYSTY`: Default device */
export const DEFAULT_DEVICE: Device = 'desktop';

/** `KELYSTY`: Default mobile max width in pixels */
export const DEFAULT_MOBILE_MAX_WIDTH: MediaWidth = 766;

/** `KELYSTY`: Default tablet max width in pixels  */
export const DEFAULT_TABLET_MAX_WIDTH: MediaWidth = 1199;
