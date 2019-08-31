import { Injectable } from '@nestjs/common';
import { Observable, from } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { map } from 'rxjs/operators';
import _ = require('lodash');
import { CreateItemDto } from './dtos/CreateItemDto';
import { ItemDto } from './dtos/ItemDto';
import { ItemEntity } from 'src/entities/ItemEntity';

@Injectable()
export class ItemService {
    constructor(@InjectRepository(ItemEntity) private readonly itemRepository: Repository<ItemEntity>) {

    }

    public findAll(): Observable<ItemEntity[]> {
        return from(this.itemRepository.find())
        .pipe(
            map((items) => _.orderBy(items, ['id'], ['asc'])));
    }

    public create(createItemDto: CreateItemDto): Promise<ItemDto> {
        return this.itemRepository.save(createItemDto);
    }

}
