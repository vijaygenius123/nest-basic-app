import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CreateStudentDTO, StudentResponseDTO } from "./student.dto";

@Controller('students')
class StudentsController {

  @Get('')
  getStudents(): StudentResponseDTO[]{
    return 'All Students'
  }

  @Get('/:studentId')
  getStudent(@Param("studentId") studentId: string): StudentResponseDTO{
    return 'Getting Student ' + studentId
  }

  @Post('')
  createStudent(@Body() body: CreateStudentDTO){
    return 'Create Student'
  }

  @Put('/:studentId')
  updateStudent(@Param() studentId: string, @Body() body){
    return 'Update Student'
  }


}

export default StudentsController
