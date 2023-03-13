import Koa from 'koa';
import { koaBody } from 'koa-body';

import router from '@routes/index';
import { guard } from '@middlewares/index';

const app = new Koa();

app.use(koaBody());
app.use(guard);
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
