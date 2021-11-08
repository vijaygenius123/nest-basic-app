import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStudentDTO, StudentResponseDTO } from "./student.dto";
import { StudentsService } from "./students.service";

@Controller('students')
class StudentsController {

  constructor(private studentService: StudentsService) {

  }


  @Get('')
  getStudents(): StudentResponseDTO[]{
    return this.studentService.getStudents()
  }

  @Get('/:studentId')
  getStudent(@Param("studentId") studentId: string){
    return this.studentService.getStudent(studentId)
    //return 'Getting Student ' + studentId
  }

  @Post('')
  createStudent(@Body() body: CreateStudentDTO){
    //return 'Create Student'
  }

  @Put('/:studentId')
  updateStudent(@Param() studentId: string, @Body() body){
    return 'Update Student'
  }


}

export default StudentsController
