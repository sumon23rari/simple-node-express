const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
app.use(express.json());
// this called middleware
app.use(cors());
app.get('/', (req, res) => {
    res.send('wow i am learning node and express with fdnodemoning automatic dfdsf');
})
const users = [
    { id: 0, name: 'samsul', email: 'samsu01@gmail.com', phone: '34123423' },
    { id: 1, name: 'rakin', email: 'samsu01@gmail.com', phone: '34123423' },
    { id: 2, name: 'salman', email: 'samsu01@gmail.com', phone: '34123423' },
    { id: 3, name: 'shanura', email: 'samsu01@gmail.com', phone: '34123423' },
    { id: 4, name: 'lavu', email: 'samsu01@gmail.com', phone: '34123423' }
]
//use search parameter
app.get('/users', (req, res) => {
    const search = (req.query.search);
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})
// app .method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    console.log('hitting the', req.body);
    //res.send()
    //res.send(JSON.stringify(newUser));
    res.json(newUser);
})
//dynamic api
app.get('/users/:id', (req, res) => {
    const id = (req.params.id);
    const user = users[id];
    res.send(user);
})
app.get('/fuits', (req, res) => {
    res.send(["mangos", 'jackfruits', 'bananas'])
})
app.get('/fruits/mango/fazli', (req, res) => {
    res.send('yami yami fazi am tok marka');
})
app.listen(port, () => {
    console.log('Listening to port', port);
})