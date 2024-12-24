import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react";


const Elements = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = () => {
        // e.preventDefault()
        if (!name || !email || !password) {
            alert("Please fill in all fields")
        } else {
            alert("Signup successful")
        }
    }

    return (
        <div className="h-screen bg-slate-200 flex items-center justify-center flex-col text-center">
            <form onSubmit={handleSubmit}>
                <Card className="flex items-center justify-center flex-col">
                    <CardHeader className="text-xl">
                        <CardTitle className="text-3xl">Signup</CardTitle>
                        <CardDescription>Fill in to continue</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col mx-4">
                        <input value={name} onChange={(e) => setName(e.target.value)} className="border rounded-lg p-3 mb-5 w-72" type="text" placeholder="Name" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg p-3 mb-5 w-72" type="text" placeholder="Email" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-lg p-3 mb-5 w-72" type="text" placeholder="Password" />
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <div className="flex pb-4 gap-3">
                            <Button variant="secondary"><FaGoogle />Google</Button>
                            <Button variant="secondary"><FaFacebookF />Facebook</Button>
                        </div>
                        <Button variant="default">Login</Button>
                    </CardFooter>
                </Card>
            </form>
        </div>
    )
}

export default Elements