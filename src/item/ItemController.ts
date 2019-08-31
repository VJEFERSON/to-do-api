import { Controller, Get, Post, Body, Put, Delete, Param} from '@nestjs/common';
import { Observable } from 'rxjs';
import { TagEntity } from 'src/entities/TagEntity';
import { CreateItemDto } from './dtos/CreateItemDto';
import { ItemDto } from './dtos/ItemDto';
import { ItemEntity } from 'src/entities/ItemEntity';
import { ItemService } from './ItemService';

@Controller('items')
export class ItemController {

    constructor(private itemService: ItemService) {
    }

    @Get()
    findAll(): Observable<ItemEntity[]> {
        return this.itemService.findAll();
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<ItemDto> {
        return this.itemService.create(createItemDto);
    }

}
