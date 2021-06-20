import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Commentary } from './Commentary'
import { Post } from './Post'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    age!: number

    @Column()
    @OneToMany(type => Post, post => post.user)
    posts!: Post[]

    @Column()
    @OneToMany(type => Commentary, commentary => commentary.user)
    commentarys!: Commentary[]
}
