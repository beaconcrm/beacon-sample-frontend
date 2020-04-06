import env from './env';

/*
* Export the URL root
*/
const urlRoots = {
  production: 'https://api.beaconcrm.org/v1',
  staging: 'https://api.staging.beaconcrm.org/v1',
  development: 'http://api.dev.beaconcrm.org:3000/v1',
};
export const host = urlRoots[env]; // eslint-disable-line
