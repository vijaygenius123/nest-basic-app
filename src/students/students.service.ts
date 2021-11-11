import { Injectable } from "@nestjs/common";
import { students } from "../db";
import { CreateStudentDTO, StudentResponseDTO, UpdateStudentDTO } from "./student.dto";
import { v4 as uuid } from "uuid";


@Injectable()
export class StudentsService {
  private students = students;

  getStudents(): StudentResponseDTO[] {
    return this.students;
  }

  getStudent(id: string): StudentResponseDTO {
    return this.students.find(student => student.id === id);
  }

  createStudent(payload: CreateStudentDTO): StudentResponseDTO {
    let newStudent = {
      id: uuid(),
      ...payload
    };
    students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: UpdateStudentDTO, studentId: string): StudentResponseDTO {
    let updatedStudent: StudentResponseDTO;
    const updatedStudentList = this.students.map(student => {
      if (student.id === studentId) {
        updatedStudent = {
          id: student.id,
          ...
            payload
        };
        return student;
      } else
        return student;
    });
    this.students = updatedStudentList;
    return updatedStudent;
  }

}
