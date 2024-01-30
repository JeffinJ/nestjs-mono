import { Controller, Get } from '@nestjs/common';
import { AppAService } from './app-a.service';

@Controller()
export class AppAController {
  constructor(private readonly appAService: AppAService) {}

  @Get()
  getHello(): string {
    return this.appAService.getHello();
  }
}
