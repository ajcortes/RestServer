//Not necessary, but needed if you want suggestions to be displayed
//req = request ----- res = response
const { response, request } = require('express');

//Example route get
const usersGet = (req, res) => {

  const {q, nombre} = req.query;

  res.json({
    msg: 'get API - controller',
    q,
    nombre
  });
}

//Example route put
const usersPut = (req, res) => {

  const id = req.params.id;

  res.json({
    msg: 'put API - controller',
    id
  });
}

//Example route post
const usersPost = (req, res) => {

  const {nombre, edad} = req.body;

  res.json({
    msg: 'post API - controller',
    nombre,
    edad
  });
}

//Example route delete
const usersDelete = (req, res) => {
  res.json({
    msg: 'delete API - controller'
  });
}

module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete
}

