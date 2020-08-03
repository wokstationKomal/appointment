var express = require('express');
var router = express.Router();
const ObjectId = require('mongodb').ObjectID;

router.get('/appoinments', (req, res, next) =>{
  req.collection.find({})
  .toArray()
  .then(results => res.json(results))
  .catch(error => res.send(error))
})

router.post('/appoinments', (req, res, next) => {
  const { appoinmentDate, name, email } = req.body;
  

  if(!appoinmentDate || !name || !email ) {
    return res.status(400).json({
      message: 'Appoinment date, name and email are required'
    });
  }
  const payload = { appoinmentDate, name, email };
  req.collection.insertOne(payload)
  .then(result => res.json(result.ops[0]))
  .catch(error => res.send(error))
})

router.delete('/appoinments/:id', (req, res, next) => {
  const { id } = req.params;
  const _id = ObjectId(id);

  req.collection.deleteOne({_id})
  .then(result => res.json(result))
  .catch(error => res.send(error));
  
})

module.exports = router;
