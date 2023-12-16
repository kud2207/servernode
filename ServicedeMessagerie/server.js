let express= require('express') //Inisiation de Express

app = express() 
app.set('view engine', 'ejs') //Inisialisation de EJS

 
 app.get('/' , (request, response) =>{
    response.render('pages/index', {text: 'salut'})
 })

 app.listen(8080)