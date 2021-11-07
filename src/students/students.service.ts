import { Injectable } from '@nestjs/common';
import { students } from "../db";
import { StudentResponseDTO } from "./student.dto";


@Injectable()
export class StudentsService {
  private students = students

  getStudents(): StudentResponseDTO[]{
    return this.students
  }

}
