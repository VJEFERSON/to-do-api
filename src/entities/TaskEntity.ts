import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { ItemEntity } from './ItemEntity';
import { TagEntity } from './TagEntity';

@Entity()
export class TaskEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 500})
    title: string;
    @Column({length: 600})
    description: string;
    @Column({ default: false })
    completed: boolean;

    @OneToMany(type => ItemEntity, item => item.task)
    items: ItemEntity[];

    @OneToOne(type => TagEntity)
    @JoinColumn()
    tag: TagEntity;
}
