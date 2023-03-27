import {Cookies} from "react-cookie";
import * as string_decoder from "string_decoder";

const cookies=new Cookies()
export const setCookie=(name:string,value:string,option?:any)=>{
    return cookies.set(name,value,{...option})
}
export const getCookie=(name:string)=>{
    return cookies.get(name)
}