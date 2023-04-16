const path = require('path');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

require('dotenv').config();

const models = require('./models');
require('./models/User');
require('./models/Post');
require('./models/Comment');

var hbs = exphbs.create({
    partialsDir: 'views/partials',
    layoutsDir: "views/layouts/",
    defaultLayout: 'main',
    helpers: helpers
});



const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: process.env.sessSecret,
    cookie: {
        // Session will expire in 1 day
        expires: 1 * 24 * 60 * 60 * 1000,
        secure: false,
        httpOnly: true,
        samesite: 'strict'
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));



app.engine('handlebars', hbs.engine);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);


hbs.getPartials().then(function (partials) {
    console.log(partials);
});

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on port: ' + PORT + '...'));
});
