# TODO App - CRUD API (Create, Read, Update, Delete)

The standard structure of a to-do is going to be as follows:
```
Todo = {
  id: uuid
  title: string
  description: string
  completed: boolean
}
```

### Routes to Build
1. **POST** `/todo` : Create new todo
2. **GET** `/todo` : Get all todos (which are not completed)
3. **GET** `/todo/:todoId` : Get particular todo
4. **PUT** `/todo/:todoId` : Update todo as completed
5. **DELETE** `/todo/:todoId` : Delete todo

### Good to Haves 
1. Sign-In - `/signin` -> Should return a JWT Token
2. Authenticate all routes above mentioned routes

### Last Priority
1. Setup MongoDB and store todos there (instead of in-memory)
2. Setup Sign-In and Sign-Up

If login and sign up is being implemented along with a database then the data types are:
```
User = {
  email: string,
  password: string (with hashing - bcrypt or crypto)
}

Todo = {
  id: uuid
  title: string (100 characters)
  description: string (200 characters)
  completed: boolean
  user: userId (reference to user-collection)
}
```
