
import emailjs from "@emailjs/browser";
import { useRef } from "react";


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4z6q1wf', 'template_nms07pv', form.current, 'jXX87AbRhPixMWwIB')
            .then((result) => {
                console.log(result.text);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className="">
                <h2 className="text-4xl text-center mt-24" id='contacts'>Contact Me</h2>
                <div className="hero-content mx-auto flex-col lg:flex-row-reverse">
                    <div className="card w-full max-w-xl mx-auto">
                        <form
                            ref={form}
                            onSubmit={sendEmail}
                            className="card-body w-full space-y-2"
                        >
                            <div className="form-control w-full">
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Your Name"
                                    className="input input-bordered bg-black/10 w-full"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Your Email"
                                    className="input input-bordered bg-black/10 w-full"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <textarea
                                    name="message"
                                    className="textarea textarea-bordered h-40 bg-black/10"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Send Message" className="btn neon-button" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Contact;
