import dotenv from 'dotenv';

dotenv.config();

const getEnvVariableOrThrow = (variable: string): string => {
  const envVariable = process.env[variable];

  if (!envVariable) {
    throw new Error(`You must provide ${variable} environment variable!`);
  } else {
    return envVariable;
  }
};

export default getEnvVariableOrThrow;
