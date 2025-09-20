import styles from './Contact.module.css';
import { useState } from 'react';
import contactImage from '../../assets/contact.png';
import { Link, useNavigate } from 'react-router-dom';
export default function Contact() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [errors, setErrors] = useState({})
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => {
        setIsPopupOpen(false);
        navigate('/');
    };
    const validate = () => {
        const newerror = {};
        if (!formData.name.trim()) newerror.name = "Name is required";
        if (!formData.email.includes('@')) newerror.email = "Email is required";
        if (formData.message.length<10) newerror.message = "Message is required";
        return newerror;
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }
        else {
            setErrors({});
            openPopup();
            // setFormData({ name: '', email: '', message: '' });
        }
    }



    return (
        <>
            <div className={styles.Container}>
                <div style={{ width: "50%", padding: "40px" }}>
                    <img className={styles.contactImage} src={contactImage}></img>
                </div>
                <form className={styles.FormContainer} onSubmit={onSubmit}>
                    <h2>Get in Touch</h2>
                    <input
                        value={formData.name}
                        className={styles.textInput}
                        type="text"
                        placeholder="Your Name"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {errors.name && <span className={styles.error}>{errors.name}</span>}
                    <input
                        value={formData.email}
                        className={styles.textInput}
                        type="email"
                        placeholder="Your Email"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    {errors.email && <span className={styles.error}>{errors.email} </span>}
                    <textarea
                        value={formData.message}
                        className={styles.textInput}
                        type="text"
                        placeholder="Your Message"
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                    {errors.message && <span className={styles.error}>{errors.message}</span>}
                    <button
                        disabled={!formData.name || !formData.email || !formData.message}
                        className={styles.submitBtn}
                        type='submit'>Submit
                    </button>

                    {isPopupOpen && (
                        <div className={styles.popupOverlay}>
                            <div className={styles.popupContent}>
                                <h6>Form submitted successfully</h6>
                                <button onClick={closePopup}>Close</button>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </>
    )
}




// Nice 🚀 you’ve done Profile, Counter, Todo already.

//     Here’s your next task → build a Contact Form with validation.

// 📝 Task: Contact Form

// Create a new page → Contact.jsx.

// Add a form with fields:

// Name(text)

// Email(email)

// Message(textarea)

// Submit button

// Requirements:

// When user types, store values in useState.

// On submit, check:

// Name cannot be empty.

// Email must contain @.

// Message must be at least 10 characters.

// If invalid → show error message under that field.

// If valid → show an alert(or console log) saying “Message sent!”.

// 🌟 Bonus(if you want extra challenge)

// Disable submit button if the form is invalid.

// Clear the form after successful submit.