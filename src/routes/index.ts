import { Context } from 'koa';
import Router from '@koa/router';
import axios, { AxiosResponse } from 'axios';
import { HABITICA_REQUEST_HEADERS } from '../constants/index';

const router = new Router();

router.get('/', (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = { message: 'Hello World' };
});

const acceptQuest = async (): Promise<void> => {
  try {
    await axios.post(
      'https://habitica.com/api/v3/groups/party/quests/accept',
      {},
      { headers: HABITICA_REQUEST_HEADERS },
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error((error.response as AxiosResponse).data);
      return;
    }

    console.error(error);
  }
};

router.post('/', async (ctx: Context): Promise<void> => {
  await acceptQuest();

  ctx.status = 200;
  ctx.body = '';
});

export default router;
