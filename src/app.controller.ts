import { Controller, Get,Post,Body } from '@nestjs/common';
import { AppService } from './app.service';
import {SekolahDTO} from './sekolah.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getsekolah(): any {
    return this.appService.getdata();
  }
  @Post()
  createPost(@Body() sekolah:SekolahDTO){
    return this.appService.createData(sekolah);
  }
}
