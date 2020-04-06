import env from './env';

/*
* Export the URL root
*/
const urlRoots = {
  production: 'https://app.beaconcrm.org',
  staging: 'https://app.staging.beaconcrm.org',
  development: 'http://app.dev.beaconcrm.org',
};
export const host = urlRoots[env]; // eslint-disable-line
