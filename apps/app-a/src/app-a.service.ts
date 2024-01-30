import { Injectable } from '@nestjs/common';

@Injectable()
export class AppAService {
  getHello(): string {
    return 'Hello World from App A';
  }
}
