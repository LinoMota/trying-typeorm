import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { User } from './entity/User'

createConnection().then(async connection => {
  const instance = new User()
  instance.phone = '92988536745'
  instance.realname = 'Lino Mota'
  instance.username = 'linomota0'
  instance.birthdate = new Date()
  instance.email = 'linomota0@gmail.com'
  instance.description = 'just a nice guy'
  await connection.getRepository(User).save(instance)
}).catch(error => console.log(error))
