import User from "@/model/userModel";
import dbConnect from "@/lib/db";


export async function GET(){

    

    try {
        await dbConnect()

    const getLead = await User.find()
    
    if(getLead.length<0){
        return Response.json({message:'no leads'})
    }

    return Response.json(getLead, { status: 200 })



} catch (error) {
    return Response.json({message:error.message},{status:500})
}


}

export async function POST(req){

    const {LeadId,LeadStatus}= await req.json()

    try {

        await dbConnect()

        const lead = await User.findByIdAndUpdate(LeadId,{LeadStatus})

        return Response.json(lead,{status:201})



        
        
    } catch (error) {
        return Response.json({message:error.message})
    }
}



