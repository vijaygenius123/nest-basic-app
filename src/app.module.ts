import { Module } from '@nestjs/common';
import StudentsController from "./students/students.controller";
@Module({
  imports: [],
  controllers: [StudentsController]
})
export class AppModule {}
