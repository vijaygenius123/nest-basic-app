import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";

@Controller('students')
class StudentsController {

  @Get('')
  getStudents(){
    return 'All Students'
  }

  @Get('/:studentId')
  getStudent(@Param("studentId") studentId: string){
    return 'Getting Student ' + studentId
  }

  @Post('')
  createStudent(@Body() body){
    return 'Create Student'
  }

  @Put('/:studentId')
  updateStudent(@Param() studentId: string, @Body() body){
    return 'Update Student'
  }


}

export default StudentsController
