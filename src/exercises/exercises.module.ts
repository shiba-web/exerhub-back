import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesResolver } from './exercises.resolver';

@Module({
  providers: [ExercisesResolver, ExercisesService],
})
export class ExercisesModule {}
