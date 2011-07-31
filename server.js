var express = require('express');
var app = express.createServer();

app.set('view engine', 'ejs');

app.use(express.cookieParser());
app.use(express.session({ secret: "jugglingcats" }));

var characters=[
    {
        name: 'Ponyo',
        details: {
            intelligence: 85,
            funnyness: 40,
            kindness: 72,
            speed: 20,
            kprating: 9.5
        }
    },
    {
        name: 'Sosuke',
        details: {
            intelligence: 80,
            funnyness: 20,
            kindness: 70,
            speed: 22,
            kprating: 9.5
        }
    }
];

app.get('/', function(req, res){
    res.render("index", {characters: characters});
});

app.listen(process.env.C9_PORT);

console.log("server started on: "+process.env.C9_PORT);


