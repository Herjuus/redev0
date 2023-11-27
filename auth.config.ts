import GitHub from '@auth/core/providers/github';
import dotenv from 'dotenv';

dotenv.config(); // Corrected: Invoke dotenv.config as a function

console.log(process.env.GITHUB_CLIENT_ID);

export default {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ]
};