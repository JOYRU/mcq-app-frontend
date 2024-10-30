const mongoose = require("mongoose") ; 


const mongodbURL = process.env.mongodbURL ; 

const connectDB = async() =>{
    try{
        await mongoose.connect(mongodbURL) ; 
        console.log('Connection to db Successfully established') ;
    }catch(error){
        console.log(error) ;
    }
    
}

 module.exports = {connectDB} ; 