import { Controller, Get, Post, Body, Put, Delete, Param} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TagEntity } from 'src/entities/TagEntity';
import { TagDto } from './dtos/TagDto';
import { CreateTagDto } from './dtos/CreateTagDto';
import { TagService } from './TagService';
import { EditTagDto } from './dtos/EditTagDto';

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

    @Put()
    edit(@Body() editTagDto: EditTagDto): Promise<TagDto> {
        return this.tagService.edit(editTagDto);
    }

    @Delete(':id')
    delete(@Param() tagId: number) {
        this.tagService.delete(tagId);
    }

}
