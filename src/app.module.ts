import { Module } from '@nestjs/common';
import { TeachersController } from './teachers/teachers.controller';
import { StudentsService } from './students/students.service';
import StudentsController from "./students/students.controller";
@Module({
  imports: [],
  controllers: [StudentsController, TeachersController],
  providers: [StudentsService]
})
export class AppModule {}
