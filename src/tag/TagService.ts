import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { map } from 'rxjs/operators';
import _ = require('lodash');
import { CreateTagDto } from './dtos/CreateTagDto';
import { TagDto } from './dtos/TagDto';
import { TagEntity } from 'src/entities/TagEntity';
import { EditTagDto } from './dtos/EditTagDto';

@Injectable()
export class TagService {
    constructor(@InjectRepository(TagEntity) private readonly tagRepository: Repository<TagEntity>) {

    }

    public findAll(): Observable<TagEntity[]> {
        return from(this.tagRepository.find())
        .pipe(
            map((tags) => _.orderBy(tags, ['id'], ['asc'])));
    }

    public create(createUserDto: CreateTagDto): Promise<TagDto> {
        return this.tagRepository.save(createUserDto);
    }

    public edit(editTagDto: EditTagDto): Promise<TagDto> {
        return this.tagRepository.save(editTagDto);
    }

    public delete(tagId: number): void {
        this.tagRepository.delete(tagId);
    }

}
