"use client";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const templateParams = {
            senderName: name,
            senderEmail: email,
            message: message,
        };

        emailjs.send('service_8w3xpd3', 'template_wmik07a', templateParams, '7uruvpcqS_b9uQ8gX')
            .then((response) => {
                alert('Message sent successfully!');
                // Clear the form fields after successful submission
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                alert('Failed to send message.');
                console.error('Error sending message:', error);
            });
    };

    return (
        <section className="min-h-[80vh] flex items-center justify-center py-12">
            <div className="w-full max-w-md border border-white p-6 flex flex-col bg-[#1e1e1e] text-white">
                <h2 className="text-3xl font-bold text-green-500 mb-4 text-center">Let's work together</h2>
                <p className="mb-6 text-center">
                    <ul className="list-disc list-inside">
                        <li>I’m a freelance web developer looking to collaborate on exciting projects!</li>
                        <li>Feel free to contact me here. Please add the proper email ID while sending.</li>
                    </ul>
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-3 border border-gray-500 rounded bg-[#1e1e1e] text-white"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-3 border border-gray-500 rounded bg-[#1e1e1e] text-white"
                        required
                    />
                    <textarea
                        placeholder="Type your message here."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-3 border border-gray-500 rounded bg-[#1e1e1e] text-white"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-green-500 text-white py-2 rounded text-center"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
