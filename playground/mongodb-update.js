const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server')
  const db = client.db('TodoApp')

  // db.collection('Todos').findOneAndUpdate({
  //  _id: new ObjectId('5bf57866cd6f1487a559a498')
  // }, {
  // $set: {
  //   completed: true
  // },
  // }, {
  // returnOriginal: false
  // }).then((result) => {
  // console.log(result);
  // })

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectId('5bf2de51f2bad51835456aae')
  }, {
    $set: {
      name: 'Bob'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })

  // client.close();
});
