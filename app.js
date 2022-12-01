require( 'dotenv' ).config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Static content
app.use( express.static( __dirname + '/public' ) );

// Handlebars
app.set( 'view engine', 'hbs' );
hbs.registerPartials( __dirname + '/views/partials' );

app.get( '/', ( req, res ) => {
  res.render('home', {
    user_name: 'Test User',
    page_title: 'Node Course',
  });
});

app.get( '/generic', ( req, res ) => {
  res.render('generic', {
    user_name: 'Test User',
    page_title: 'Node Course',
  });
});

app.get( '/elements', ( req, res ) => {
  res.render('elements', {
    user_name: 'Test User',
    page_title: 'Node Course',
  });
});

app.get( '*', ( req, res ) => {
  res.render('404');
});

app.listen( port, () => {
  console.log( `App listening on port ${ port }` );
});
