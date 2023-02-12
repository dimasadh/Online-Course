'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        profession: 'Admin Micro',
        role: "admin",
        email: "admin@email.com",
        password: await bcrypt.hash('admin123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Alex',
        profession: 'Back End Developer',
        role: "student",
        email: "alex@email.com",
        password: await bcrypt.hash('alex123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]); 
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
