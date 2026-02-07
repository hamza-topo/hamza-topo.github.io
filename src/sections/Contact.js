import React, { useState }  from 'react';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const
        handleSubmit = (event) => {
            event.preventDefault();
            // Here, you can   
            //implement your logic to send the form data, e.g., using a backend API
            console.log('Form submitted:', { name, email, message });
        };
    return (
        <div className='component'>
            {/* <form id="contact-form" onSubmit={handleSubmit}>
                <h3>Contact Form</h3>
                <fieldset>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"

                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="message">Message:</label>
                    <textarea

                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>

                </fieldset>
                <fieldset className='center'>
                    <button type="submit" className='btn-center'>Submit</button>
                </fieldset>
            </form> */}
        </div>

    )
}
