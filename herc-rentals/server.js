const express       = require('express'),
    dbOperation     = require('./dbFiles/dbOperation'),
    cors            = require('cors');



dbOperation.getEmployees().then(res => {
    console.log(res);
})
// const API_PORT = process.env.PORT || 3000;
// const app = express();

// app.use(cors());

// app.get('/api', function(req,res){
//     console.log('Called');
//     res.send({result: 'Hellooooooooo'});
// })

// app.get('/quit', function(req,res){
//     console.log('Called quit');
//     res.send({result: 'Byebye'});
// })


// app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));


