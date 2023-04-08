export const production: any = {
  HTTP: {
    PORT: 8081,
    HOST: process.env.HTTP_HOST,
    BASE_URL: process.env.HTTP_BASE_URL,
  },
};
