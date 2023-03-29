import { Context } from 'koa';
import Router from '@koa/router';
import axios, { AxiosResponse } from 'axios';
import { HABITICA_REQUEST_HEADERS } from '../constants/index';

const router = new Router();

router.get('/', (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = { message: 'Hello World' };
});

router.post('/', async (ctx: Context): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  try {
    const { data } = await axios.post(
      'https://habitica.com/api/v3/groups/party/quests/accept',
      {},
      { headers: HABITICA_REQUEST_HEADERS },
    );

    console.log(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error((error.response as AxiosResponse).data);
    } else {
      console.error(error);
    }
  }

  ctx.status = 200;
  ctx.body = '';
});

export default router;
