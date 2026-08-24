import mongoose from "mongoose";



const dbConnect = mongoose.connect((process.env.ConnectionString)).then(()=>{
    console.log('db connected')
}).catch((error)=>{
    console.log('db error',error)
})

export default dbConnect