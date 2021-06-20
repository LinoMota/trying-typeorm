import { User } from './User'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Commentary {
    @PrimaryGeneratedColumn()
    id!: string

    @Column()
    description!: string

    @Column()
    @ManyToOne(type => User, user => user.commentarys)
    user!: User
}
