"use client"
import Box from "./components/box";
import Email from "./components/email";
import Hero from "./components/hero";
import NavBar from "./components/nav-bar.component";
import SocialMedia from "./components/social-media";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <NavBar />
        <Hero/>
        <Email />
        <SocialMedia />
        </main>
    );
}