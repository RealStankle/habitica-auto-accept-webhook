import { Context, Next } from 'koa';
import getEnvVariableOrThrow from '@utils/getEnvVariableOrThrow';

export const guard = async (ctx: Context, next: Next): Promise<Next | void> => {
  const { secret } = ctx.query;

  if (!secret || secret !== getEnvVariableOrThrow('WEBHOOK_SECRET')) {
    ctx.status = 400;
    ctx.body = 'You may have been clickjacked!';
    return;
  }

  return await next();
};
