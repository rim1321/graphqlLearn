const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@graphql-learn-jvuql.mongodb.net/graphQl-learn?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const PORT = 3005;

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`connection error ${err}`));
dbConnection.once('open', () => console.log(`connected to db!`));

app.listen(PORT, err => {
    err ? console.log(err) : console.log('server started');
})
