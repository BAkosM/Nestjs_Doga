import {
  Controller,
  Get,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import db from './db';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async listCats() {
    const [rows] = await db.execute(
      'SELECT szem_szin, suly FROM macskak ORDER BY suly DESC'
    );

    return {
      macskak: rows,
    };
  }
}
