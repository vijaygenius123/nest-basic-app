import { Controller, Get } from "@nestjs/common";

@Controller('students')
class StudentsController {

  @Get('')
  getStudents(){
    return 'All Students'
  }

}

export default StudentsController
