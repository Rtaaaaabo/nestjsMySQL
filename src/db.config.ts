import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { TaskEntity } from '.tasks/entities/task.entity';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'test_db',
  entities: [TaskEntity],
  synchronize: false,
};
