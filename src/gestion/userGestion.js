import * as user from "../tables/user.js"

export function get(username,password){
    if(!user.get(username,password)){
        throw new Error("username/password invalide")
    }
    return user.get(username,password)
}