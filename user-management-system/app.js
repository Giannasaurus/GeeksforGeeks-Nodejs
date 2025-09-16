const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000

// middleware
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// sample users data
let users = [
    { userUniqueId: '1', username: 'Aditya Gupta', userEmail: 'aditya@gmail.com', userAge: '22' },
    { userUniqueId: '2', username: 'Vanshita Janswal', userEmail: 'vanshita@gmail.com', userAge: '21' },
    { userUniqueId: '3', username: 'Sachin Yadav', userEmail: 'sachin@gmail.com', userAge: '22' }
]

// [read] home route - display users
app.get('/', (req, res) => {
    res.render('home', { data: users })
})

// [create] add user route
app.post('/', (req, res) => {
    const newUser = {
        userUniqueId: req.body.userUniqueId,
        username: req.body.username,
        userEmail: req.body.userEmail,
        userAge: req.body.userAge
    }

    users.push(newUser)
    res.render('home', { data: users })
})

// [delete] delete user route
app.post('/delete', (req, res) => {
    const requestUserUniqueId = req.body.userUniqueId
    users = users.filter(user => user.userUniqueId !== requestUserUniqueId)
    res.render('home', { data: users })
})

// [update] update user route
app.post('/update', (req, res) => {
    users.forEach(user => {
        if (user.userUniqueId === req.body.userUniqueId) {
            user.username = req.body.username
            user.userEmail = req.body.userEmail
            user.userAge = req.body.userAge
        }
    })

    res.render('home', { data: users })
})

// start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost${PORT}`)
})