import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {TaskEntity} from './TaskEntity';

@Entity()
export class ItemEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 500})
    description: string;
    @Column({ default: false })
    completed: boolean;

    @ManyToOne(type => TaskEntity, task => task.items)
    task: TaskEntity;
}
