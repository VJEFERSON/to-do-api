import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from '../entities/TaskEntity';
import { TaskController } from './TaskController';
import { TaskService } from './TaskService';

@Module({
    imports: [
        TypeOrmModule.forFeature([TaskEntity]),
    ],
    controllers: [
        TaskController,
    ],
    providers: [
        TaskService,
    ],
})
export class TaskModule { }
