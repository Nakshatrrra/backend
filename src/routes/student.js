import { Router } from 'express';
import * as studentController from '@/controllers/student';
import * as studentValidations from '@/routes/validations/student';
import { isAuthenticated, validate } from '@/middleware';

const router = Router();

router.route('/')
  .get( studentController.getStudents)
  .post(isAuthenticated, validate(studentValidations.createStudentRules), studentController.createStudent);

  router.route('/export')
  .get( studentController.getStudents)
  

router.route('/update/:id')
.put(isAuthenticated, validate(studentValidations.updateStudentRules), studentController.updateStudent)

router.route('/:id')
  .get( studentController.getStudentById)
  .delete( studentController.deleteStudent);

  
export default router;
