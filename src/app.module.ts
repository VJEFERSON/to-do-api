import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/TaskModule';
import { UserModule } from './user/UserModule';
import { TagModule } from './tag/TagModule';
import { ItemModule } from './item/ItemModule';

@Module({
  imports: [
    UserModule,
    TaskModule,
    TagModule,
    ItemModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'sublime',
      database: 'to-do-list-app',
      entities: [__dirname + '/**/*Entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
