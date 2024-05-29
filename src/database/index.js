import { Sequelize } from 'sequelize';

import * as config from '@/config/sequelize';

// import models
import userModel from './models/user';
import tweetModel from './models/tweet';
import studentModel from './models/student_details';

// Configuration
const env = process.env.NODE_ENV;
const sequelizeConfig = config[env];

// Create sequelize instance
const sequelize = new Sequelize(sequelizeConfig);

// Import all model files
const modelDefiners = [
  userModel,
  tweetModel,
  studentModel,
];

// eslint-disable-next-line no-restricted-syntax
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// Associations
Object.keys(sequelize.models)
  .forEach((modelName) => {
    if (sequelize.models[modelName].associate) {
      sequelize.models[modelName].associate(sequelize.models);
    }
  });

export default sequelize;
