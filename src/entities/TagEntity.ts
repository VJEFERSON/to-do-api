import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ItemEntity } from './ItemEntity';

@Entity()
export class TagEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 200})
    tag: string;
    @Column({length: 300})
    description: string;
}
