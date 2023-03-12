import axios from 'axios';
import { WEBHOOK_OPTIONS, HABITICA_REQUEST_HEADERS } from '../constants/index';

const createWebhook = async (): Promise<void> => {
  await axios.post(
    'https://habitica.com/api/v3/user/webhook',
    { ...WEBHOOK_OPTIONS },
    { headers: HABITICA_REQUEST_HEADERS },
  );
};

const deleteWebhook = async (): Promise<void> => {
  try {
    await axios.delete(
      `https://habitica.com/api/v3/user/webhook/${WEBHOOK_OPTIONS.id}`,
      { headers: HABITICA_REQUEST_HEADERS },
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.data.error === 'NotFound') {
        return;
      }
      throw error;
    } else {
      throw error;
    }
  }
};

export { createWebhook, deleteWebhook };
