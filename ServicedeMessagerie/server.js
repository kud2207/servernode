let express= require('express') //Inisiation de Express
let bodyParser = require('body-parser') //Variable d'ecoute du Form
let session = require('express-session') //Inisiation pour middleware (2)


let app = express() 



/*Nos Middleware*************************************************************/

// parse application/x-www-form-urlencoded
app.use('/assets', express.static('public'))// Apelle des variable static
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json

app.use(bodyParser.json())    //(2)
app.use(session({
   secret: 'azerrtyyuuii', //Id_code du Mildleware 
   resave: false,
   saveUninitialized: true, //false car on ne traite pas avec du HTTPS
   cookie: { secure: false }
 }))

 /*Creation du Milldeleware flash..js*******************************************/
 app.use(require('./middlewares/flash'))



/*Nos Route**********************************************************************/
app.set('view engine', 'ejs') //Inisilisation de EJS
 
 app.get('/' , (request, response) =>{

   console.log(request.session)

    response.render('pages/index') //sur '/' sa renvoie index.ejs
 
 })

 app.post('/', (request, response)=>{
      if(request.body.message === undefined || request.body.message === ' '){ //Ecoute le requestbody et envoie un message
        
        request.flash('error', `vous n'avez rien mis dans le champs`) //Var d'erreur
         response.redirect('/')
      }
 }) //Pour ecouter les eformation du form 



 app.listen(8080)

 /*
 npm i --save body-parser //pour instalation d'un milter ecouter le formulaire

 //express sessien pour creer ' Middleware' pour envoyer efficassement des msg de non remplisage de champs
          (+)$ npm install --save express-session
          (+)  (2) copy remove Id_code


 */