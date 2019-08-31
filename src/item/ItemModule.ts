import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from 'src/entities/ItemEntity';
import { ItemController } from './ItemController';
import { ItemService } from './ItemService';

@Module({
    imports: [
        TypeOrmModule.forFeature([ItemEntity]),
    ],
    controllers: [
        ItemController,
    ],
    providers: [
        ItemService,
    ],
})
export class ItemModule { }
