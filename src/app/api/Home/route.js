import dbConnect from "@/lib/db";
import User from "@/model/userModel";

export async function POST(req){

    const {userName,password}=req.json()

    try {
        await dbConnect()

        const admin = await User.findOne({userName:userName,password:password})

        if(admin){
            return Response.json({message:'login successfull', admin})
        }

        return Response.json(
      { message: "Invalid username or password" },
      { status: 401 }
    );


            


    } catch (error) {

        return Response.json(
      { message: error.message },
      { status: 500 }
    );
  
        
    }


}