/**
 * `KELYSTY`: All designed themes that are available throughout the application;
 * 'Designed' means that styles for these ones had been created and provided
 * by developers (manually);
 */
export type DesignedTheme = 'light' | 'dark' | 'alternative';

/**
 * `KELYSTY`: This is a list of themes that are available throughout the
 * application; It extends DesignedTheme with the 'system' option;
 */
export type Theme = 'system' | DesignedTheme;
