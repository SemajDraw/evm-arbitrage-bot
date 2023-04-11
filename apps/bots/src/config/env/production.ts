export const production: any = {
  HTTP: {
    PORT: 8081,
    HOST: process.env.HTTP_HOST,
    BASE_URL: process.env.HTTP_BASE_URL,
  },

  ALCHEMY: {
    URL: process.env.ALCHEMY_URL,
    API_KEY: process.env.ALCHEMY_API_KEY,
  },
};
