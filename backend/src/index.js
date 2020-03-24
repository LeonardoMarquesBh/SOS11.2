const express = require('express');
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json()); /** vai la no corpo da requisicao e corverte o json em algo entendivel para a aplicacao! */
app.use(routes);



app.listen(5555);