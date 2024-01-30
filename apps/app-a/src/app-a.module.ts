import { Module } from '@nestjs/common';
import { AppAController } from './app-a.controller';
import { AppAService } from './app-a.service';

@Module({
  imports: [],
  controllers: [AppAController],
  providers: [AppAService],
})
export class AppAModule {}
