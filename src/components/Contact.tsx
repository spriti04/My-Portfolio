import React, { useState } from "react";
import emailjs from "@emailjs/browser";
function Contact () {

    const [ formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) =>{
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        };

    const sendEmail = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.send(
            "service_mt9mf4e",
            "template_n9m4zoj",
            {
                name: formData.name,
                email: formData.email,
                message: formData.message
            },
            "hsCnqxOeVX60j-AHt"
        )
        .then(() => {
            alert("Messsage Sent Successfully!");

            setFormData({
                name: "",
                email: "",
                message: ""
            });
        })
        .catch((error) => {
            console.log(error);
            alert("Failed To Send Message.");
        });
    };

    return (
        <section id="contact">
            <h2>Contact Me</h2>

            <div className="contact-container">
                <div className="contact-info">
                    <p>📧 pritimayeen3@gmail.com</p>
                    <p>📍 Odisha, India</p>
                </div>
                <form className="contact-form" onSubmit={sendEmail}>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                    />

                    <input 
                        type="email"
                        name="email"
                        placeholder="Your Email" 
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                    />

                    <textarea 
                        name="message"
                        placeholder="Your Message" 
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        autoComplete="off"
                        required
                    />

                    <button type="submit">
                        Send Message
                    </button>
                </form>
            </div>
            
        </section>
    );
}

export default Contact;