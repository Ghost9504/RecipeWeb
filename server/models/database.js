const mongoose=require("mongoose");
// mongoose.connect(process.env.MONGODB_URI,{useNewUriParser:true,useUnifieldTopology:true});
const dotenv =require("dotenv");
dotenv.config()


mongoose.connect(
    process.env.MONGODB_URI,
    {
        maxPoolSize:50,
        wtimeoutMS:2500,
        useNewUrlParser:true,
  
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})

const db=mongoose.connection;
db.on('error',console.error.bind(console,'connection errot : '));
db.once('open',function(){
console.log('Connected')
});

// Models
require('./Category');
require('./Recipe');