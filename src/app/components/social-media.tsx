import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => {

    const socialMedia = [
        { name: "GitHub", url: "https://github.com/marcomansomm", icon: <FaGithub /> },
        { name: "Instagram", url: "https://www.instagram.com/marcoantonio_1609/", icon: <FaInstagram /> },
        { name: "Linkedin", url: "https://www.linkedin.com/in/marcoantoniomanso/", icon: <FaLinkedin /> },

    ]
    
    return (
        <div>
            <ul className="flex flex row justify-center text-green">
                {socialMedia &&
                socialMedia.map(({ url, name, icon }, index) => (
                    <li
                        key={index}
                        className={`${index === socialMedia.length - 1 ? 'mb-1' : ''}`}
                    >
                    <a
                        href={url}
                        aria-label={name}
                        target="_blank"
                        rel="noreferrer"
                        className="block p-2 transition-transform hover:-translate-y-1 focus:-translate-y-1"
                    >
                        <span className="w-5 h-5">{icon}</span>
                    </a>
                    </li>
                ))}
            </ul>
        </div>
        
    );
};

export default SocialMedia;