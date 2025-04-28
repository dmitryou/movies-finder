"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import Register from "@/components/Auth/Register";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function RegisterPage() {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user) router.push("/playlist"); // redirect to playlist if already logged in
    }, [user, router]);

    return (
        <>
            <HeaderOne />
            <main class="main">
                <Register />
            </main>

            <FooterOne />
        </>
    );
}
