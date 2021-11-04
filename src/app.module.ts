import { Module } from '@nestjs/common';
import { TeachersController } from './teachers/teachers.controller';
import StudentsController from "./students/students.controller";
@Module({
  imports: [],
  controllers: [StudentsController, TeachersController]
})
export class AppModule {}
