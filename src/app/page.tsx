"use client"
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/nav-bar";
import Projects from "./components/projects";
import TechStack from "./components/technlogies";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <NavBar />
        <Hero/>
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
        </main>
    );
}