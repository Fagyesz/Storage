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
    database : 'storage' 
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
            title:'storage API',
            version: '1.0.0',
            description:'storage'
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
 * /resourcestorage:
 *   get:
 *     description: Get all animals
 *     responses:
 *       200:
 *         Description: Success
 */ 
app.get('/resourcestorage', function(req,res){
    connection.query('select * from resourcestorage', function (error, result, fields){
        if(error) throw error;
        res.json(result);
        
    })
})
/**
 * @swagger
 * /drystorage:
 *   get:
 *     description: Get all animals
 *     responses:
 *       200:
 *         Description: Success
 */ 
app.get('/drystorage', function(req,res){
    connection.query('select * from drystorage', function (error, result, fields){
        if(error) throw error;
        res.json(result);
        
    })
})
/**
 * @swagger
 * /basin:
 *   get:
 *     description: Get all animals
 *     responses:
 *       200:
 *         Description: Success
 */ 
app.get('/basin', function(req,res){
    connection.query('select * from basin', function (error, result, fields){
        if(error) throw error;
        res.json(result);
        
    })
})
/**
 * @swagger
 * /finalproduct:
 *   get:
 *     description: Get all animals
 *     responses:
 *       200:
 *         Description: Success
 */ 
app.get('/finalproduct', function(req,res){
    connection.query('select * from finalproduct', function (error, result, fields){
        if(error) throw error;
        res.json(result);
        
    })
})
/**
 * @swagger
 * /scrap:
 *   get:
 *     description: Get all animals
 *     responses:
 *       200:
 *         Description: Success
 */ 
app.get('/scrap', function(req,res){
    connection.query('select * from scrap', function (error, result, fields){
        if(error) throw error;
        res.json(result);
        
    })
})
/**
 * @swagger
 * /statistics:
 *   get:
 *     description: Get all animals
 *     responses:
 *       200:
 *         Description: Success
 */ 
app.get('/statistics', function(req,res){
    connection.query('select * from statistics', function (error, result, fields){
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
 *       200:
 *         Description: Success
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
 * /resourcestorage/post:
 *   post:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: butchered
 *       description: When is it butchered
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     responses:
 *       201:
 *         Description: Added
 *       200:
 *         Description: Success
 */
 app.post('/resourcestorage/post', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO resourcestorage SET ?', postData, function (error, result) {
       if (error) throw error;
       res.end(JSON.stringify(result));
     });
 });
 /**
 * @swagger
 * /drystorage/post:
 *   post:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int   
  *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string 
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: externalid
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *       201:
 *         Description: Added
 *       200:
 *         Description: Success
 */
 app.post('/drystorage/post', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO drystorage SET ?', postData, function (error, result) {
       if (error) throw error;
       res.end(JSON.stringify(result));
     });
 });
 /**
 * @swagger
 * /basin/post:
 *   post:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: marinadestart
 *       description: When is the marination starts
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: marinadeend
 *       description: When is the marination ends
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: smoking
 *       description: When is it smoked
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: rsid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int  
 *     
 *     responses:
 *       201:
 *         Description: Added
 *       200:
 *         Description: Success
 */
 app.post('/basin/post', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO basin SET ?', postData, function (error, result) {
       if (error) throw error;
       res.end(JSON.stringify(result));
     });
 });
  /**
 * @swagger
 * /finalproduct/post:
 *   post:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: rsid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Bid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Did
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: externalid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: Butchered
 *       description: Butchered time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: marinated
 *       description: When is the marination ends
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: smoked
 *       description: When is it smoked
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     
 *     responses:
 *       201:
 *         Description: Added
 *       200:
 *         Description: Success
 */
 app.post('/finalproduct/post', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO finalproduct SET ?', postData, function (error, result) {
       if (error) throw error;
       res.end(JSON.stringify(result));
     });
 });
 /**
 * @swagger
 * /scrap/post:
 *   post:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: time
 *       description: scrap time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: rsid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Did
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: bid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     
 *     responses:
 *       201:
 *         Description: Added
 *       200:
 *         Description: Success
 */
 app.post('/scrap/post', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO scrap SET ?', postData, function (error, result) {
       if (error) throw error;
       res.end(JSON.stringify(result));
     });
 });
   /**
 * @swagger
 * /statistics/post:
 *   post:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: rsid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Bid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Did
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: fpid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: butchered
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: marinated
 *       description: When is the marination ends
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: smoked
 *       description: When is it smoked
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: stated
 *       description: When is it stated
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     responses:
 *       201:
 *         Description: Added
 *       200:
 *         Description: Success
 */
 app.post('/statistics/post', function (req, res) {
    var postData  = req.body;
    connection.query('INSERT INTO statistics SET ?', postData, function (error, result) {
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
 * /resourcestorage/{id}:
 *   get:
 *     description: Get a resourcestorage by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *     responses:
 *       200:
 *         Description: Success
 */
app.get('/resourcestorage/:id', function (req, res) {    
    connection.query('select * from resourcestorage where id=?', [req.params.id], function (error, result) {
    if (error) throw error;
    res.end(JSON.stringify(result));
   });
});
/**
 * @swagger
 * /drystorage/{id}:
 *   get:
 *     description: Get a resourcestorage by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *     responses:
 *       200:
 *         Description: Success
 */
app.get('/drystorage/:id', function (req, res) {    
    connection.query('select * from drystorage where id=?', [req.params.id], function (error, result) {
    if (error) throw error;
    res.end(JSON.stringify(result));
   });
});
/**
 * @swagger
 * /basin/{id}:
 *   get:
 *     description: Get a resourcestorage by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *     responses:
 *       200:
 *         Description: Success
 */
app.get('/basin/:id', function (req, res) {    
    connection.query('select * from basin where id=?', [req.params.id], function (error, result) {
    if (error) throw error;
    res.end(JSON.stringify(result));
   });
});
/**
 * @swagger
 * /finalproduct/{id}:
 *   get:
 *     description: Get a resourcestorage by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *     responses:
 *       200:
 *         Description: Success
 */
app.get('/finalproduct/:id', function (req, res) {    
    connection.query('select * from finalproduct where id=?', [req.params.id], function (error, result) {
    if (error) throw error;
    res.end(JSON.stringify(result));
   });
});
/**
 * @swagger
 * /scrap/{id}:
 *   get:
 *     description: Get a resourcestorage by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *     responses:
 *       200:
 *         Description: Success
 */
app.get('/scrap/:id', function (req, res) {    
    connection.query('select * from scrap where id=?', [req.params.id], function (error, result) {
    if (error) throw error;
    res.end(JSON.stringify(result));
   });
});
/**
 * @swagger
 * /statistics/{id}:
 *   get:
 *     description: Get a resourcestorage by id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        type: integer
 *     responses:
 *       200:
 *         Description: Success
 */
app.get('/statistics/:id', function (req, res) {    
    connection.query('select * from statistics where id=?', [req.params.id], function (error, result) {
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
 * /resourcestorage/delete/{id}: 
 *   delete:
 *     description: Deletes a resourcestorage by id*   
 *     responses:       
 *       204:
 *         Description: Deleted    
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       type: integer             
 */
 app.delete('/resourcestorage/delete/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `resourcestorage` WHERE `id`=?', [req.params.id], function (error) {
       if (error) throw error;
       res.end('Törlés ok');
     });
 });
  /**
 * @swagger
 * /drystorage/delete/{id}: 
 *   delete:
 *     description: Deletes a resourcestorage by id*   
 *     responses:       
 *       204:
 *         Description: Deleted    
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       type: integer             
 */
 app.delete('/drystorage/delete/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `drystorage` WHERE `id`=?', [req.params.id], function (error) {
       if (error) throw error;
       res.end('Törlés ok');
     });
 });
  /**
 * @swagger
 * /basin/delete/{id}: 
 *   delete:
 *     description: Deletes a resourcestorage by id*   
 *     responses:       
 *       204:
 *         Description: Deleted    
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       type: integer             
 */
 app.delete('/basin/delete/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `basin` WHERE `id`=?', [req.params.id], function (error) {
       if (error) throw error;
       res.end('Törlés ok');
     });
 });
  /**
 * @swagger
 * /finalproduct/delete/{id}: 
 *   delete:
 *     description: Deletes a resourcestorage by id*   
 *     responses:       
 *       204:
 *         Description: Deleted    
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       type: integer             
 */
 app.delete('/finalproduct/delete/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `finalproduct` WHERE `id`=?', [req.params.id], function (error) {
       if (error) throw error;
       res.end('Törlés ok');
     });
 });
  /**
 * @swagger
 * /scrap/delete/{id}: 
 *   delete:
 *     description: Deletes a resourcestorage by id*   
 *     responses:       
 *       204:
 *         Description: Deleted    
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       type: integer             
 */
 app.delete('/scrap/delete/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `scrap` WHERE `id`=?', [req.params.id], function (error) {
       if (error) throw error;
       res.end('Törlés ok');
     });
 });
  /**
 * @swagger
 * /statistics/delete/{id}: 
 *   delete:
 *     description: Deletes a resourcestorage by id*   
 *     responses:       
 *       204:
 *         Description: Deleted    
 *   parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       type: integer             
 */
 app.delete('/statistics/delete/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `statistics` WHERE `id`=?', [req.params.id], function (error) {
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
 * /resourcestorage/put/{id}:
 *   parameters:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
*     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: butchered
 *       description: When is it butchered
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *   put:
 *     description: Updates a animal    
 *     responses:
 *       200:
 *         Description: Updated
 */


app.put('/resourcestorage/put/:id', function (req, res) {
    const {  name, weight, arrived, butchered,place } = req.body
    connection.query('UPDATE resourcestorage SET name = ?, weight = ?, place = ?, arrived = ?, butchered = ? WHERE id = ?', [name, weight,place, arrived, butchered, req.params.id] , (error, rows) => {        
        if(!error) {
            res.send(`RS with the Id: ${req.params.id} has been updated.`)
        } else {
            console.log(error)
        }
        console.log(req.body)
    })
    
})
  /**
 * @swagger   
 * /drystorage/put/{id}:
 *   parameters:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string   
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *   put:
 *     description: Updates a animal    
 *     responses:
 *       200:
 *         Description: Updated
 */
app.put('/drystorage/put/:id', function (req, res) {
    const {  name, weight, arrived, place } = req.body
    connection.query('UPDATE drystorage SET name = ?, weight = ?, place = ?, arrived = ? WHERE id = ?', [name, weight, place, arrived, req.params.id] , (error, rows) => {        
        if(!error) {
            res.send(`Drystorage with the Id: ${req.params.id} has been updated.`)
        } else {
            console.log(error)
        }
        console.log(req.body)
    })
    
})
  /**
 * @swagger   
 * /basin/put/{id}:
 *   parameters:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: marinadestart
 *       description: When is the marination starts
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: marinadeend
 *       description: When is the marination ends
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: smoking
 *       description: When is it smoked
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: rsid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int  
 *   put:
 *     description: Updates a animal    
 *     responses:
 *       200:
 *         Description: Updated
 */
app.put('/basin/put/:id', function (req, res) {
    const {  name, weight, arrived, place,marinadestart,marinadeend,smoking,rsid } = req.body
    connection.query('UPDATE basin SET name = ?, weight = ?, place = ?, arrived = ?, marinadestart = ?, marinadeend = ?, smoking= ?, rsid =? WHERE id = ?', [name, weight, place, arrived,marinadestart,marinadeend,smoking,rsid, req.params.id] , (error, rows) => {        
        if(!error) {
            res.send(`Basin with the Id: ${req.params.id} has been updated.`)
        } else {
            console.log(error)
        }
        console.log(req.body)
    })
    
})
  /**
 * @swagger   
 * /finalproduct/put/{id}:
 *   parameters:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: rsid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Bid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Did
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: ExternaliD
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: Butchered
 *       description: Butchered time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: marinated
 *       description: When is the marination ends
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: smoked
 *       description: When is it smoked
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *   put:
 *     description: Updates a animal    
 *     responses:
 *       200:
 *         Description: Updated
 */
app.put('/finalproduct/put/:id', function (req, res) {
    const {  rsid, bid, did,externalid, name,weight,place,arrived,butchered,marinated,smoked } = req.body
    connection.query('UPDATE finalproduct SET rsid = ?, bid = ?, did = ?,externalid = ?, name = ?, weight = ?, place = ?, arrived = ?, butchered = ?, marinated = ?, smoked = ? WHERE id = ?', [rsid, bid, did,externalid, name,weight,place,arrived,butchered,marinated,smoked, req.params.id] , (error, rows) => {        
        if(!error) {
            res.send(`FP with the Id: ${req.params.id} has been updated.`)
        } else {
            console.log(error)
        }
        console.log(req.body)
    })
    
})
  /**
 * @swagger   
 * /scrap/put/{id}:
 *   parameters:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: time
 *       description: scrap time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: rsid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Did
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: bid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *   put:
 *     description: Updates a animal    
 *     responses:
 *       200:
 *         Description: Updated
 */
app.put('/scrap/put/:id', function (req, res) {
    const {  name, weight,place, time, rsid,did,bid } = req.body
    connection.query('UPDATE scrap SET name = ?, weight = ?, place = ?, time = ?, rsid = ?, did = ?, bid = ? WHERE id = ?', [name, weight,place, time, rsid,did,bid, req.params.id] , (error, rows) => {        
        if(!error) {
            res.send(`Scrap with the Id: ${req.params.id} has been updated.`)
        } else {
            console.log(error)
        }
        console.log(req.body)
    })
    
})
  /**
 * @swagger   
 * /statistics/put/{id}:
 *   parameters:
 *     description: Add a MeatProduct
 *     parameters:
 *     - name: rsid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Bid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: Did
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: fpid
 *       description: Resource ID
 *       in: formData
 *       required: true
 *       type: int 
 *     - name: name
 *       description: Name of the meat
 *       in: formData
 *       required: true
 *       type: string
 *     - name: weight
 *       description: Meat weight
 *       in: formData
 *       required: true
 *       type: int    
 *     - name: arrived
 *       description: Arrived time
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: place
 *       description: Where the meat is from
 *       in: formData
 *       required: true
 *       type: string
 *     - name: marinated
 *       description: When is the marination ends
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: smoked
 *       description: When is it smoked
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *     - name: stated
 *       description: When is it stated
 *       in: formData
 *       required: true
 *       example: "2017-01-01"
 *       format: date
 *       pattern: "YYYY-MM-DD"
 *   put:
 *     description: Updates a animal    
 *     responses:
 *       200:
 *         Description: Updated
 */
app.put('/statistics/put/:id', function (req, res) {
    const {  fpid, rsid, bid, did,name, weight, place, arrived,butchered, marinated, smoked,stated } = req.body
    connection.query('UPDATE statistics SET fpid = ?, rsid = ?, bid = ?, did = ? , name = ? , weight = ? , place = ? , arrived = ?, butchered = ? , marinated = ? , smoked = ?, stated = ? WHERE id = ?', [fpid, rsid, bid, did,name, weight, place, arrived,butchered, marinated, smoked,stated, req.params.id] , (error, rows) => {        
        if(!error) {
            res.send(`Stat with the Id: ${req.params.id} has been updated.`)
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
  



