import { Controller, Get, Param } from "@nestjs/common";

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

}

export default StudentsController
