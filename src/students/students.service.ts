import { Injectable } from '@nestjs/common';
import { students } from "../db";
import { CreateStudentDTO, StudentResponseDTO } from "./student.dto";
import { v4 as uuid} from "uuid"


@Injectable()
export class StudentsService {
  private students = students

  getStudents(): StudentResponseDTO[]{
    return this.students
  }

  getStudent(id: string): StudentResponseDTO{
    return this.students.find(student => student.id === id)
  }

  createStudent(payload: CreateStudentDTO): StudentResponseDTO{
    let newStudent = {
      id: uuid(),
      ...payload
    }
    students.push(newStudent)
    return newStudent
  }

}
