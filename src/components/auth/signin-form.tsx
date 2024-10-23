'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SigninForm = () => {
    const router = useRouter();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEnterButton = () => {
        router.replace('/home');
    };

    return (
        <div className="flex flex-col justify-center items-center gap-5 w-full mb-10">
            <Input
                type="email"
                value={email}
                placeholder="Digite seu e-mail"
                onChange={setEmail}
            />
            <Input
                type="password"
                value={password}
                placeholder="Digite sua senha"
                onChange={setPassword}
            />

            <Button
                type="submit"
                label="Entrar"
                size={2}
                style={1}
                onClick={handleEnterButton}
            />
        </div>
    );
}