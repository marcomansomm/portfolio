import SocialMedia from "./social-media";

const Footer = () => {
    return (
        <div>
            <SocialMedia />
            <footer className="text-green py-4">


                    
                <div className="container mx-auto text-center">
                    <p className="text-sm">
                    &copy; {new Date().getFullYear()} Marcoantonio Manso. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;