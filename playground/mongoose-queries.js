const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// const id = '5bfc003630072b7b0aa578b211';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then ((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then ((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


const userId = '5bfa9678a4708408d75f7359';

if (!ObjectID.isValid(userId)) {
  console.log('ID not valid');
}

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Id not found')
  }
  console.log(JSON.stringify(user, undefined, 2))
}).catch((e) => consolelog(e));
