import app from './main';
import getEnvVariableOrThrow from './utils/getEnvVariableOrThrow';
import { createWebhook, deleteWebhook } from './utils/webhook';

const port = getEnvVariableOrThrow('WEBHOOK_PORT') || 3000;

app.listen(port, async () => {
  console.log(`Server is listening on port ${port}`);
  await deleteWebhook();
  await createWebhook();
});
