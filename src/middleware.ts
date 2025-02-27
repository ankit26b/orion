import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import getOrCreateDB from "./models/server/dbSetup";
import getOrCreateStorage from "./models/server/storageSetup";


export async function middleware(request: NextRequest){
    await Promise.all([
        getOrCreateDB(),
        getOrCreateStorage()
    ])
    return NextResponse.next()
}

export const config = {
    //match all req path expect for ones that st with-  -api  -_next/static  -_next/image  -favicon>
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}