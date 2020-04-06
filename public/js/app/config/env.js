
const host = window.location.hostname;

const envs = {
  'admin.dev.beaconcrm.org': 'development',
  'admin.staging.beaconcrm.org': 'staging',
  'admin.beaconcrm.org': 'production',
};

const env = envs[host];
export default env;
