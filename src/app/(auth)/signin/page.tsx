'use client'

import GoogleButton from "@/components/buttons/googleButton";
import PublicRoute from "@/components/guards/public-route";
import OrDivider from "@/components/or-divider";
import { spaceGroteskMedium, spaceGroteskRegular } from "@/fonts";
import { redirect } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';



export default function Page() {
    const [role, setRole] = useState<string | null>(null);
    const [email, setEmail] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);


    const handleSubmit = async () => {
        if (!email) {
            toast.error("Email is required", { theme: "dark" });

            return;
        }
        if (!role) {
            toast.error("Role not selected", { theme: "dark" });
            return;
        }
        if (role !== "YOUTUBER" && role !== "TALENT") {
            toast.error("Invalid role", { theme: "dark" });
            return;
        }

        setLoading(true);
        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    role
                })
            })
            if (!response.ok) {
                setLoading(false);
                toast.error("Something went wrong!", {
                    theme: 'dark'
                })
                return;
            }
            toast.success("Check your email for the login link", {
                theme: 'dark'
            })
            setLoading(false);
            localStorage.setItem("emailHold", email);
        } catch (error: any) {
            setLoading(false);
            console.log(error.message);
            return;
        }
        redirect("/auth-hold");
    }

    return (
        <PublicRoute>

            <main className="min-h-[90vh] flex flex-col items-center justify-center">
                <ToastContainer />
                <h1 className={`text-text  ${spaceGroteskRegular.className} heading tracking-tight mb-10`}>Welcome to Crimson</h1>
                <div className={`body ${spaceGroteskMedium.className}  md:w-80 w-60 `}>
                    <div className="tabs">
                        <input
                            className="input"
                            type="radio"
                            value="YOUTUBER"
                            name="role"
                            id="youtuber"
                            checked={role === 'YOUTUBER'}
                            onChange={(e) => setRole(e.target.value)} />
                        <label htmlFor="youtuber" className="label">Youtuber</label>
                        <input
                            className='input'
                            type="radio"
                            value="TALENT"
                            name="role"
                            id="talent"
                            checked={role === "TALENT"}
                            onChange={(e) => setRole(e.target.value)} />
                        <label htmlFor="talent" className="label">Talent</label>
                    </div>
                </div>


                <label className={`form-control  md:w-full w-60 max-w-xs ${spaceGroteskMedium.className}`}>
                    <div className="label">
                        <span className="label-text ">Enter your email address</span>
                    </div>
                    <input
                        type="text"
                        data-theme="light"
                        placeholder="sam@example.com"
                        className="input input-bordered w-full max-w-xs"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="label">
                        <span className="label-text-alt">If you don't have an account, we'll create one for you</span>
                    </div>
                    <button
                        className="btn btn-neutral hover:bg-[#eb244b] bg-primary text-base mt-3 disabled:bg-[#eb244b]" data-theme="light"
                        onClick={() => handleSubmit()}
                        disabled={loading}
                    >
                        {
                            !loading ? "Send me a login link" : <span className="loading loading-spinner" />
                        }
                    </button>
                </label>

                <>
                    <OrDivider />

                    <GoogleButton role={role} loading={loading} />
                </>

            </main>
        </PublicRoute>
    )
}