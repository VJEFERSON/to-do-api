import { Controller, Get, Post, Body, Put, Delete, Param} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TagEntity } from 'src/entities/TagEntity';
import { TagDto } from './dtos/TagDto';
import { CreateTagDto } from './dtos/CreatetagDto';
import { TagService } from './TagService';

@Controller('tags')
export class TagController {

    constructor(private tagService: TagService) {
    }

    @Get()
    findAll(): Observable<TagEntity[]> {
        return this.tagService.findAll();
    }

    @Post()
    create(@Body() createTagDto: CreateTagDto): Promise<TagDto> {
        return this.tagService.create(createTagDto);
    }

}
