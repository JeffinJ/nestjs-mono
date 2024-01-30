import { NestFactory } from '@nestjs/core';
import { AppAModule } from './app-a.module';

async function bootstrap() {
  const app = await NestFactory.create(AppAModule);
  await app.listen(3000);
}
bootstrap();
