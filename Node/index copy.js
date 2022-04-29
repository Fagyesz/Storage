var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const { Hash } = require("crypto");
var crypto = require("crypto");
//var securepassword= crypto.createHash('sha256').update('Password').digest("hex");


app.use(bodyParser.json())
var connection = mysql.createConnection({
    host     : 'localhost', 
    user     : 'root', 
    password : '', 
    database : 'restapi' 
  });

  connection.connect(function(err){
      if(err) throw err
      console.log('A csatlakozás sikerült...')
  })

  app.use( bodyParser.json());
  app.use( bodyParser.urlencoded({
      extended:true
  }));

  var server = app.listen(3000,  "127.0.0.1", function () {
 
    var host = server.address().address
    var port = server.address().port
   
    console.log("Figyeljük a következő URI-t http://%s:%s", host, port)
   
  });

const swaggerOptions={
    swaggerDefinition:{
        info:{
            title:'Animal API',
            version: '1.0.0',
            description:'animals'
        }
    },
    apis: ['index.js'],
    
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

/**
 * @swagger
 * /animals:
 *   get:
 *     description: Get all animals
 *     responses:
 *       200:
 *         Description: Success
 */ 
 app.get('/animals', function(req,res){
    connection.query('select * from animals', function (error, result, fields){
        if(error) throw error;
        res.json(result);
        
    })
})

/**
 * @swagger
 * /animals/post:
 *   post:
 *     description: Add a animal
 *     parameters:
 *     - name: Name
 *       description: Name of the animal
 *       in: formData
 *       required: true
 *       type: string
 *     - name: Class
 *       description: Class of the animal
 *       in: formData
 *       required: true
 *       type: string    
 *     - name: Legs
 *       description: The Number of legs in the animal
 *       in: formData
 *       required: true
 *       type: integer
 *     - name: Pet
 *       description: The animal can be a pet? (1 - true | 0 - false ) 
 *       in: formData
 *       required: true
 *       type: integer  
 *     responses:
 *       201:
 *         Description: Added
 */
 app.post('/animals/post', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO animals SET ?', postData, function (error, result) {
       if (error) throw error;
       res.end(JSON.stringify(result));
     });
 });
/**
 * @swagger
 * /animals/{id}:
 *   get:
 *     description: Get a animal by his/her id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *     responses:
 *       200:
 *         Description: Success
 */
 app.get('/animals/:id', function (req, res) {    
    connection.query('select * from animals where id=?', [req.params.id], function (error, result) {
    if (error) throw error;
    res.end(JSON.stringify(result));
   });
});

/**
 * @swagger
 * /animals/delete/{id}: 
 *   delete:
 *     description: Deletes a animal by his/her id*   
 *     responses:       
 *       204:
 *         Description: Deleted    
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       type: integer             
 */
 app.delete('/animals/delete/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `animals` WHERE `id`=?', [req.params.id], function (error) {
       if (error) throw error;
       res.end('Törlés ok');
     });
 });
/**
 * @swagger
 * /animals/put/{id}:
 *   parameters:
 *     - name: id
 *       description: Id of the animal
 *       in: path
 *       required: true
 *       type: integer
 *     - name: Name
 *       description: Name of the animal
 *       in: formData
 *       required: true
 *       type: string
 *     - name: Class
 *       description: Class of the animal
 *       in: formData
 *       required: true
 *       type: string    
 *     - name: Legs
 *       description: The Number of legs in the animal
 *       in: formData
 *       required: true
 *       type: integer
 *     - name: Pet
 *       description: The animal can be a pet? (1 - true | 0 - false ) 
 *       in: formData
 *       required: true
 *       type: integer 
 *   put:
 *     description: Updates a animal    
 *     responses:
 *       200:
 *         Description: Updated
 */
 app.put('/animals/put/:id', function (req, res) {
    const {  Name, Class, Legs, Pet } = req.body
    connection.query('UPDATE animals SET Name = ?, Class = ?, Legs = ?, Pet = ? WHERE id = ?', [Name, Class, Legs, Pet, req.params.id] , (error, rows) => {        
        if(!error) {
            res.send(`animal with the Id: ${req.params.id} has been updated.`)
        } else {
            console.log(error)
        }
        console.log(req.body)
    })
    
})
/**
 * @swagger
 * /users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         Description: Success
 */ 
 app.get('/users', function(req,res){
    connection.query('select * from users', function (error, result, fields){
        if(error) throw error;
        res.json(result);
        
    })
})
  



