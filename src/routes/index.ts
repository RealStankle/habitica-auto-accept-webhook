import { Context } from 'koa';
import Router from '@koa/router';
import axios, { AxiosResponse } from 'axios';
import { HABITICA_REQUEST_HEADERS } from '../constants/index';

const router = new Router();

router.get('/', (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = { message: 'Hello World' };
});

const acceptQuest = async (): Promise<string> => {
  try {
    const { data } = await axios.post(
      'https://habitica.com/api/v3/groups/party/quests/accept',
      {},
      { headers: HABITICA_REQUEST_HEADERS },
    );

    return JSON.stringify(data, null, 4);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return (error.response as AxiosResponse).data;
    } else {
      console.error(error);
      return 'No response!';
    }
  }
};

router.post('/', async (ctx: Context): Promise<void> => {
  console.log('10-second timeout has been started');
  await new Promise((resolve) => setTimeout(resolve, 10000));
  console.log('10-second timeout has been ended');

  const questAcceptResponse = await acceptQuest();

  console.log(questAcceptResponse);

  ctx.status = 200;
  ctx.body = '';
});

export default router;
