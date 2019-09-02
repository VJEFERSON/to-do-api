import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from '../entities/TaskEntity';
import { map } from 'rxjs/operators';
import _ = require('lodash');
import { TaskDto } from './dtos/TaskDto';
import { CreateTaskDto } from './dtos/CreateTaskDto';
import { promises } from 'fs';

@Injectable()
export class TaskService {
    constructor(@InjectRepository(TaskEntity) private readonly taskRepository: Repository<TaskEntity>) {

    }

    public findAll(): Observable<TaskEntity[]> {
        return from(this.taskRepository.find())
        .pipe(
            map((tasks) => _.orderBy(tasks, ['id'], ['desc'])));
    }

    public findById(taskId: number): Promise<TaskEntity> {
        return this.taskRepository.findOne(taskId);
    }

    public create(createTaksDto: CreateTaskDto): Promise<TaskDto> {
        return this.taskRepository.save(createTaksDto);
    }

}
