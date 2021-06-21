import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, BaseEntity } from 'typeorm'
import { Commentary } from './Commentary'
import { Post } from './Post'

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    username!: string

    @Column()
    realname!: string

    @Column()
    phone!: string

    @Column()
    email!: string

    @Column()
    description!: string

    @Column('date', { nullable: false })
    birthdate!: Date

    @ManyToMany(() => User, user => user.friends)
    @JoinTable()
    friends!: User[]

    @OneToMany(() => Commentary, commentary => commentary.user)
    commmentarys!: Commentary[]

    @OneToMany(() => Post, post => post)
    posts!: Post[]
}
