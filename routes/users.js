var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let users = [
    {
      "id": 1,
      "name": "text user",
      "email": "text@gmail.com"
    },
    {
      "id": 2,
      "name": "anne hunter",
      "email": "anne@gmail.com"
    },
    {
      "id": 3,
      "name": "jale boser",
      "email": "jale@gmail.com"
    }
  ];
  res.send(users);
});

// POST API
router.post('/', (req, res) => {
  res.send('POST request')
})

// PUT API
router.put('/', (req, res) => {
  res.send('Update request')
})

// DELETE API
router.delete('/', (req, res) => {
  res.send('delete request')
})

module.exports = router;
