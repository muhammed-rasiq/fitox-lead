import User from "@/model/userModel";
import dbConnect from "@/lib/db";


export async function GET(){

    

    try {
        await dbConnect()

    const getLead = await User.find()

    return Response.json(getLead, { status: 200 })



} catch (error) {
    return Response.json({message:error.message})
}


}



