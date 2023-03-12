import getEnvVariableOrThrow from '../utils/getEnvVariableOrThrow';

const WEBHOOK_OPTIONS = {
  id: getEnvVariableOrThrow('WEBHOOK_ID'),
  enabled: true,
  url: getEnvVariableOrThrow('WEBHOOK_URL'),
  label: 'My Quest Webhook',
  type: 'questActivity',
  options: {
    questInvited: true,
  },
};

const HABITICA_REQUEST_HEADERS = {
  'x-client': `${getEnvVariableOrThrow('USER_ID')}-Auto Accept Script`,
  'x-api-user': getEnvVariableOrThrow('USER_ID'),
  'x-api-key': getEnvVariableOrThrow('API_TOKEN'),
};

export { WEBHOOK_OPTIONS, HABITICA_REQUEST_HEADERS };
