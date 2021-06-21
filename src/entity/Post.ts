import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, BaseEntity } from 'typeorm'
import { User } from './User'

@Entity()
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    description!: string

    @ManyToOne(() => User, user => user.posts)
    user!: User
}
