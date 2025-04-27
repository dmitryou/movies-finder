"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import Login from "@/components/Auth/Login";
import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";

export default function LoginPage() {
    const { user } = useAuth();
    const router = useRouter();
    useEffect(() => {
        if (user) router.push("/playlist"); // redirect to playlist if already logged in
    }, [user, router]);
    const breadcrumb = {
        title: "My Account",
        links: [
            { name: "Home", href: "/" },
            { name: "Log In", href: "#" },
        ],
    };
    return (
        <>
            <HeaderOne data={{ breadcrumb }} />
            <main class="main">
                <Login />
            </main>
            <FooterOne />
        </>
    );
}
