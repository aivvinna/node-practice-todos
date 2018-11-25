const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// const Todo = mongoose.model('Todo', {
//   text: {
//     type: String
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// const newTodo = new Todo({
//   text: 'Cook dinner'
// })

// const newTodo = new Todo({
//   text: 'Do challenge',
//   completed: true,
//   completedAt: 1
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });

const User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

const newUser = new User({
  email: 'test@gmail.com'
})

newUser.save().then((doc) => {
  console.log('Saved user', doc);
}, (e) => {
  console.log('Unable to save user')
})
