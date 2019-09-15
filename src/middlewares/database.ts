import { createConnection } from 'typeorm';

export const database = () => ({
  before: async (_, next) => {
    await createConnection();
    next();
  },
});
