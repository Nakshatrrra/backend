import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class StudentDetails extends Model {}

  StudentDetails.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    student_college: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['placed', 'not_placed'],
      allowNull: false,
    },
    dsa_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    webd_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    react_score: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    interview_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    interview_company: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    interview_student_result: {
      type: DataTypes.ENUM,
      values: ['pass', 'fail', 'hold', 'didn\'t attempt'],
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'StudentDetails',
    tableName: 'student_details',
    timestamps: false, // Set to false if you do not want createdAt and updatedAt
    paranoid: false, // Set to false if you do not want deletedAt
  });

  return StudentDetails;
};
