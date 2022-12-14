import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Redirect,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CatDto } from './cat.tdo';
import db from './db';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async index(@Query('szem_szin') szem_szin: string = "") {

    if (szem_szin != "") {
      const [ rows ] = await db.execute(
        'SELECT szem_szin, suly FROM macskak WHERE szem_szin = ?',
        [szem_szin]
        );
  
      return {
        macskak: rows
      };
    }else{
      const [ rows ] = await db.execute(
        'SELECT szem_szin, suly FROM macskak ORDER BY suly DESC'
        );

        return {
          macskak: rows
        };
    }
  }
  @Get('cats/new')
  @Render('new')
  newCats(){
    return {};
  }
  @Post('cats/new')
  @Redirect()
  async newCat(@Body() macska: CatDto) {
    const [result]: any = await db.execute(
      'INSERT INTO macskak (szem_szin, suly) VALUES (?, ?)',
      [macska.eye, macska.wgt],
    );
    return {
      url: '/',
    };
  }
}
