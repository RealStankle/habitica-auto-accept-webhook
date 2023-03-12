import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

const env = dotenv.config();
dotenvExpand.expand(env);

const getEnvVariableOrThrow = (variable: string): string => {
  const envVariable = process.env[variable];

  if (!envVariable) {
    throw new Error(`You must provide ${variable} environment variable!`);
  } else {
    return envVariable;
  }
};

export default getEnvVariableOrThrow;
