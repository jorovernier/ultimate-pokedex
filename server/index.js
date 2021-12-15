require('dotenv').config();
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(express.json());
const massive = require('massive');
const session = require('express-session');

const {register, login, logout, userSession, editPic} = require('./controllers/userController');
const {addToTeam, getTeam, removeFromTeam, changeName} = require('./controllers/teamController');

app.use(express.static(`${__dirname}/../build`));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));

massive(CONNECTION_STRING).then(db => {
    console.log('Database connected!');
    app.set('db', db);
}).catch(err => console.log(err));

app.post('/auth/register', register);
app.post('/auth/login', login);
app.get('/auth/user_session', userSession);
app.delete('/auth/logout', logout);
app.put('/api/edit_profile_pic', editPic);

app.get('/api/get_team', getTeam);
app.post('/api/add_to_team', addToTeam);
app.post('/api/remove_from_team', removeFromTeam);
app.put('/api/change_name/:slot', changeName);

const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

let port = SERVER_PORT || 6001;
app.listen(port, () => console.log(`Listening on port ${port}.`));