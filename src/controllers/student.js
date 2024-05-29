import createError from 'http-errors';
import db from '@/database';

/**
 * POST /students
 * Create a new student
 */
export const createStudent = async (req, res, next) => {
  try {
    const student = await db.models.StudentDetails.create(req.body);
    return res.status(201).json(student);
  } catch (err) {
    next(err);
  }
};

/**
 * GET /students
 * Get all students
 */
export const getStudents = async (req, res, next) => {
  try {
    const students = await db.models.StudentDetails.findAll();
    return res.status(200).json(students);
  } catch (err) {
    next(err);
  }
};

/**
 * GET /students/:id
 * Get a student by ID
 */
export const getStudentById = async (req, res, next) => {
  try {
    const student = await db.models.StudentDetails.findByPk(req.params.id);
    if (!student) {
      return next(createError(404, 'Student not found'));
    }
    return res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};

/**
 * PUT /students/:id
 * Update a student by ID
 */
export const updateStudent = async (req, res, next) => {
  try {
    const student = await db.models.StudentDetails.findByPk(req.params.id);
    if (!student) {
      return next(createError(404, 'Student not found'));
    }
    await student.update(req.body);
    return res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};

/**
 * DELETE /students/:id
 * Delete a student by ID
 */
export const deleteStudent = async (req, res, next) => {
  try {
    const student = await db.models.StudentDetails.findByPk(req.params.id);
    if (!student) {
      return next(createError(404, 'Student not found'));
    }
    await student.destroy();
    return res.status(204).send();
  } catch (err) {
    next(err);
  }
};
