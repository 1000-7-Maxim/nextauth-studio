import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
    try {
        const token = request.cookies.get("auth-token")?.value || "";
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY!) as any;
        //Returns the user ID from the decoded token payloa
        return decodedToken.id;
    } catch (error: any) {
        throw new Error(error.message);
    }
}