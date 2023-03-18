import { Context } from 'koa';
import Router from '@koa/router';
import axios from 'axios';
import { HABITICA_REQUEST_HEADERS } from '../constants/index';

const router = new Router();

router.get('/', (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = { message: 'Hello World' };
});

const acceptQuest = async () => {
  try {
    const { data } = await axios.post(
      'https://habitica.com/api/v3/groups/party/quests/accept',
      {},
      { headers: HABITICA_REQUEST_HEADERS },
    );

    console.log(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response && error.response.data);
      return;
    }

    console.error(error);
  }
};

router.post('/', (ctx: Context): void => {
  setTimeout(acceptQuest, 30000);

  ctx.status = 200;
  ctx.body = '';
});

export default router;
