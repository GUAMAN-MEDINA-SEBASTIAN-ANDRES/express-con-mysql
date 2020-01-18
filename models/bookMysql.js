
  import Sequelize, { STRING } from 'sequelize';

  const sequelize = new Sequelize('hola','root','', {
    host: 'localhost',
    dialect: 'mysql'
  });
  
  let books = sequelize.define('books', {
  
    title: STRING,
    author: STRING,
    editorial: STRING
  },
  {
      timestamps: false
  })
  
  export default books;