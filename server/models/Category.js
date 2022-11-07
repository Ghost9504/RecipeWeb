const mongoose=require("mongoose");

const categorySchema=new mongoose.Schema({

    name:{
        type:String,
        required:'This is requied.'
    },
    image:{
        type:String,
        required:'This is requied.'
    }

});

module.exports=mongoose.model('Category',categorySchema);