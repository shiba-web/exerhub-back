import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module, NotFoundException } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DB_PATH } from './env.constants';
import { ExercisesModule } from './exercises/exercises.module';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      type: 'sqlite',
      dbName: DB_PATH,
      autoLoadEntities: true,
      forceUndefined: true,
      findOneOrFailHandler: () => new NotFoundException(),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    ExercisesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
