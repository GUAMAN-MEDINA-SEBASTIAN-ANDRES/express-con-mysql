import express from 'express';
import { createConnection } from 'mysql';
const app = express();
import { findOne } from './models/bookMysql';

const conexion = createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hola'
    
});
conexion.connect((error)=>{
    if(error){
        console.log('error');
    }else{
        console.log('conectado!!')
    }
});
app.get('/',(req, resp)=>{
    conexion.query("SELECT * FROM  books", function(error, rows){
      
        if(error){
            console.log('error query vacio')
        }else
        console.log('correcto query')
        console.log(rows)
        
        resp.status(200);
        resp.json(rows)
    })
});
app.get(('/booksMysql/find'),(req, res) => {
  
  const { query } = req;
  findOne({where: query}).then(books => {
    return res.json(books)
  });
});
app.listen(3000)