import { Context } from 'koa';
import Router from '@koa/router';
import axios from 'axios';
import { HABITICA_REQUEST_HEADERS } from '../constants/index';

const router = new Router();

router.get('/', (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = { message: 'Hello World' };
});

router.post('/', async (ctx: Context): Promise<void> => {
  try {
    await axios.post(
      'https://habitica.com/api/v3/groups/party/quests/accept',
      {},
      { headers: HABITICA_REQUEST_HEADERS },
    );
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response && error.response.data);
      return;
    }

    console.error(error);
  }

  ctx.status = 200;
  ctx.body = '';
});

export default router;
