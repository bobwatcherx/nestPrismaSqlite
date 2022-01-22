import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma:PrismaService){}

  getdata(): any {
    return this.prisma.post.findMany();
  }
  createData(sekolah  ){
    return this.prisma.post.create({
      data:{
        nama:sekolah.nama,
        kelas:parseInt(sekolah.kelas)
      }
    })
  }
}
