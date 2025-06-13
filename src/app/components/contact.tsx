import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Contact Me
            </h2>
            <div className="flex flex-col items-center gap-6">
                <div className="w-120 flex flex-col text-center items-center gap-2 transition ease border-[2.5px] border-green hover:border-white bg-transparent rounded-3xl hover:scale-[1.02] py-3">
                    <HiOutlineMail className="text-3xl text-green" />
                    <div>
                    <h4 className="text-lg font-semibold">Email</h4>
                    <h5 className="text-lg">marcoantonio16092003@gmail.com</h5>
                    <a
                        href="mailto:marcoantonio16092003@gmail.com"
                        target="_blank"
                        className="text-green transition ease decoration-1 hover:decoration-2"
                    >
                        {"Send a Message"}
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;