const express = require('express');
const cors = require('cors');

class Server{
  
  constructor(){
    this.app = express();
    this.port = process.env.PORT;
    this.usersPath = '/api/users';

    //Middlewares
    this.middlewares();

    //Routes
    this.routes();
  }

  middlewares(){
    //CORS
    this.app.use(cors());

    //Body Parser
    this.app.use(express.json());

    //Public folder
    this.app.use(express.static('public'));
  }

  routes(){
    this.app.use(this.usersPath, require('../routes/user.routes'));
  }

  start(){
    this.app.listen( this.port, () => {
      console.log(`Example app listening at http://localhost:${process.env.PORT}`)
    })
  }
}

module.exports = Server;