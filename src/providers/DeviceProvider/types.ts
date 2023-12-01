/**
 * `KELYSTY`: It is a list of devices that are
 * available throughout the application;
 */
export type Device = 'desktop' | 'tablet' | 'mobile';

/**
 * `KELYSTY`: It is a type that represents
 * information about the current device as boolean;
 */
export type IsDevice = boolean;

/**
 * `KELYSTY`: It is a type that represents a Media Width
 * points in pixels: provided `700` would be interpreted as `700px`
 */
export type MediaWidth = number;

/**
 * `KELYSTY`: It is a type that represents one
 * Media Query string
 */
export type MediaQuery = `(${string})`;

/**
 * `KELYSTY`: It is a type that represents a conjunction
 * of the specific device to it's sutisfying media query string;
 */
export interface DeviceToMediaQuery {
  device: Device;
  mediaQuery: MediaQuery;
}
