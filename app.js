var restify = require('restify')
var server = restify.createServer()
const fs = require('fs')
const os = require('os');
//Accept parsers
server.use(restify.acceptParser(server.acceptable))
server.use(restify.bodyParser())

// Fake DB
var courses = {
  '001':{
    title:'Introduccion a JS',
    desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
    img: 'http://loremflickr.com/100/100'
  },
  '002':{
    title:'Introduccion a JS',
    desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
    img: 'http://loremflickr.com/100/100'
  },
  '003':{
    title:'Introduccion a JS',
    desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
    img: 'http://loremflickr.com/100/100'
  },
  '004':{
    title:'Introduccion a JS',
    desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
    img: 'http://loremflickr.com/100/100'
  },
  '005':{
    title:'Introduccion a JS',
    desc: 'Javascript es uno de los lenguajes de programacion mas populares y completos de la web',
    img: 'http://loremflickr.com/100/100'
  }
}
var teachers = {}


var totalCourses = Object.keys(courses).length

server.get('/courses/', function(req, res, next){
  res.setHeader('content-type', 'application/json')
  res.writeHead(200)
  res.end(JSON.stringify(courses))
  return next()
})

server.get('/courses/:id', function(req, res, next){
  var course = req.params.id
  var course = courses[course]
  res.setHeader('content-type', 'application/json')
  res.writeHead(200)
  res.end(JSON.stringify(course))
  return next()
})
server.post('/courses/new', function(req, res, next){
  totalCourses += 1
  var newCourse = {}
  courses[String(totalCourses)] = req.params
  res.setHeader('content-type', 'application/json')
  res.writeHead(200)
  res.end({success:'done'})
  return next()
})

server.listen(8080, function(){
  console.log('%s listening at %s', server.name, server.url);
})
