import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length: 500})
    name: string;
    @Column({length: 255})
    email: string;
    @Column({length: 255})
    password: string;

    toResponseObject() {
        const {id, name, email} = this;
        return {id, name, email};
    }
}
