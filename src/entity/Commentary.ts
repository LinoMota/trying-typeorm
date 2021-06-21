import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity()
export class Commentary extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  description!: string

  @ManyToOne(() => User, user => user.commmentarys)
  user!: User
}
