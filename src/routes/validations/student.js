import { body, param } from 'express-validator';

// Validation rules for creating a new student record
export const createStudentRules = [
  body('name').exists().withMessage('Name is required').isString().withMessage('Name must be a string'),
  body('student_college').exists().withMessage('Student college is required').isString().withMessage('Student college must be a string'),
  body('status').exists().withMessage('Status is required').isIn(['placed', 'not_placed']).withMessage('Status must be either placed or not_placed'),
  body('dsa_score').exists().withMessage('DSA score is required').isInt({ min: 0 }).withMessage('DSA score must be a non-negative integer'),
  body('webd_score').exists().withMessage('WebD score is required').isInt({ min: 0 }).withMessage('WebD score must be a non-negative integer'),
  body('react_score').exists().withMessage('React score is required').isInt({ min: 0 }).withMessage('React score must be a non-negative integer'),
  body('interview_date').optional().isISO8601().withMessage('Interview date must be a valid date'),
  body('interview_company').optional().isString().withMessage('Interview company must be a string'),
  body('interview_student_result').optional().isIn(['pass', 'fail', 'hold', "didn't attempt"]).withMessage('Interview result must be pass, fail, hold, or didn\'t attempt'),
];

// Validation rules for updating an existing student record
export const updateStudentRules = [
  param('id').isInt().withMessage('ID must be an integer'),
  body('name').optional().isString().withMessage('Name must be a string'),
  body('student_college').optional().isString().withMessage('Student college must be a string'),
  body('status').optional().isIn(['placed', 'not_placed']).withMessage('Status must be either placed or not_placed'),
  body('dsa_score').optional().isInt({ min: 0 }).withMessage('DSA score must be a non-negative integer'),
  body('webd_score').optional().isInt({ min: 0 }).withMessage('WebD score must be a non-negative integer'),
  body('react_score').optional().isInt({ min: 0 }).withMessage('React score must be a non-negative integer'),
  body('interview_date').optional().isISO8601().withMessage('Interview date must be a valid date'),
  body('interview_company').optional().isString().withMessage('Interview company must be a string'),
  body('interview_student_result').optional().isIn(['pass', 'fail', 'hold', "didn't attempt"]).withMessage('Interview result must be pass, fail, hold, or didn\'t attempt'),
];
