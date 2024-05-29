export const up = (queryInterface, Sequelize) => {
  return queryInterface.createTable('student_details', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    student_college: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    status: {
      allowNull: false,
      type: Sequelize.ENUM('placed', 'not_placed'),
    },
    dsa_score: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    webd_score: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    react_score: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    interview_date: {
      allowNull: true,
      type: Sequelize.DATE,
    },
    interview_company: {
      allowNull: true,
      type: Sequelize.STRING,
    },
    interview_student_result: {
      allowNull: true,
      type: Sequelize.ENUM('pass', 'fail', 'hold', "didn't attempt"),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    }
  });
};

export const down = (queryInterface) => {
  return queryInterface.dropTable('student_details');
};
