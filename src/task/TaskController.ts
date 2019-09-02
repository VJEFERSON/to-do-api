import { Controller, Get, Post, Body, Put, Delete, Param} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TaskService } from './TaskService';
import { TaskEntity } from '../entities/TaskEntity';
import { TaskDto } from './dtos/TaskDto';
import { CreateTaskDto } from './dtos/CreateTaskDto';

@Controller('tasks')
export class TaskController {

    constructor(private taskService: TaskService) {
    }

    @Get()
    findAll(): Observable<TaskEntity[]> {
        return this.taskService.findAll();
    }

    @Get(':id')
    findById(@Param() taskId: number): Promise<TaskEntity> {
        return this.taskService.findById(taskId);
    }

    @Post()
    create(@Body() createTaskDto: CreateTaskDto): Promise<TaskDto> {
        return this.taskService.create(createTaskDto);
    }

}
