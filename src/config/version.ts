/**
 * Application version information
 * This file is automatically updated during the build process
 */

export const VERSION: string = '0.1.0'
export const BUILD_DATE: string = new Date().toISOString()

export default {
  version: VERSION,
  buildDate: BUILD_DATE,
  versionString: `v${VERSION}`,
  displayVersion: function (): string {
    return `System Demo v${VERSION}`
  },
}
