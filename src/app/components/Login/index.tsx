"use client"

import { ChangeEvent, useState } from "react"

const Login = () =>{
    const [Username, SetUsername] = useState('')
    const [password, Setpassword] = useState('')
    console.log("Username:", Username);
    console.log("Password:", password);
    return(
        <form className="w-5/12 border p-4 items-center">

            <h2>LOGIN</h2>
            <input placeholder="Enter Username" type="text" required className="border-gray-500 rounded-md py-4 w-10/12 mt-4" onChange={(e:ChangeEvent<HTMLInputElement>)=>SetUsername(e.target.value)}/>
            <br/>
            <input placeholder="Enter Password" type="password" required className="border-gray-500 rounded-md py-4 w-10/12 mt-4" onChange={(e:ChangeEvent<HTMLInputElement>)=>Setpassword(e.target.value)}/>
            <br/>
            <button type="submit" className="border bg-green-500 text-white px-6 py-4 rounded-md">Submit</button>
        </form>
    )
}
export default Login