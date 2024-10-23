import { Logo } from "@/components/ui/logo";
import { SignupForm } from "@/components/auth/signup-form";

import Link from "next/link";

export default function Page() {
    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <div className="w-[275px] mt-12 flex flex-col justify-center items-start max-[640px]:w-[80%]">
                <div className="w-[100%] flex justify-start items-center mb-5">
                    <Logo size={56}/>
                </div>

                <h1 className="text-lg font-semibold mb-5">Crie a sua conta</h1>

                <SignupForm />

                <div className="flex flex-col justify-center items-center gap-1 w-full md:flex-row">
                    <h3 className="text-gray-500 w-[60%] text-right max-[640px]:w-full max-[640px]:text-center">Já tem uma conta?</h3>
                    <Link className="text-white w-[40%] font-bold text-left max-[640px]:w-full max-[640px]:text-center" href="/signin">Entrar no Z</Link>
                </div>
            </div>
        </div>
        
    )
}