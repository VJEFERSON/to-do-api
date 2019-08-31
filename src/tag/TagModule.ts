import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagEntity } from 'src/entities/TagEntity';
import { TagController } from './TagController';
import { TagService } from './TagService';

@Module({
    imports: [
        TypeOrmModule.forFeature([TagEntity]),
    ],
    controllers: [
        TagController,
    ],
    providers: [
        TagService,
    ],
})
export class TagModule { }
