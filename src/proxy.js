import { NextResponse } from "next/server";

export function proxy(req){


   console.log("🔥 MIDDLEWARE WORKING");
   console.log("PATH:", req.nextUrl.pathname);

    const role = req.cookies.get("role")?.value
     console.log("ROLE:", role);


    if(role!=='admin'){
        return NextResponse.redirect( new URL('/',req.url))
    }

    return NextResponse.next()

    
    
}

export const config = {
    matcher: ["/Lead/:path*"],
};