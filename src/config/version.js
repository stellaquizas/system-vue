/**
 * Application version information
 * This file is automatically updated during the build process
 */

export const VERSION = '0.1.0'
export const BUILD_DATE = new Date().toISOString()

export default {
  version: VERSION,
  buildDate: BUILD_DATE,
  versionString: `v${VERSION}`,
  displayVersion: function () {
    return `System Demo v${VERSION}`
  },
}
