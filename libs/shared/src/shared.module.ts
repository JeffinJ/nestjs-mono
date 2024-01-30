import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { NatsModule } from './nats/nats.module';

@Module({
  providers: [SharedService],
  exports: [SharedService],
  imports: [NatsModule],
})
export class SharedModule {}
