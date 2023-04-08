import { local } from './env/local';
import { production } from './env/production';

const ENV = {
  LOCAL: 'local',
  PRODUCTION: 'production',
};

export const envConfig = () => {
  switch (process.env.NODE_ENV) {
    case ENV.LOCAL: {
      return local;
    }
    case ENV.PRODUCTION: {
      return production;
    }
    default: {
      return production;
    }
  }
};
