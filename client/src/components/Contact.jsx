import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import axios from '../api/axios';

// ← Replace these with your actual IDs
const SERVICE_ID  = 'service_9pzqhhf';
const TEMPLATE_ID = 'template_5d6nge9';
const PUBLIC_KEY  = '1tplrpzw9EJGQfqRG';

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // 1. Save to MongoDB
      await axios.post('/contact', form);

      // 2. Send email via EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:    form.name,
          from_email:   form.email,
          message:      form.message,
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setForm({ name: '', email: '', message: '' });

    } catch (err) {
      console.error('Error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-card/30 transition-colors duration-300">
      <div className="max-w-2xl mx-auto">

        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-gray-500 dark:text-gray-400">
            Have an opportunity or just want to say hi? My inbox is open!
          </p>
        </motion.div>

        <motion.form onSubmit={handleSubmit}
          className="bg-white dark:bg-card border border-gray-200 dark:border-gray-800 rounded-2xl p-8 flex flex-col gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}>

          <div>
            <label className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 block">Name</label>
            <input type="text" name="name" value={form.name}
              onChange={handleChange} required
              placeholder="Your name"
              className="w-full bg-gray-50 dark:bg-dark border border-gray-300
                         dark:border-gray-700 rounded-lg px-4 py-3
                         text-gray-900 dark:text-white placeholder-gray-400
                         dark:placeholder-gray-500 outline-none
                         focus:border-primary transition-colors" />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 block">Email</label>
            <input type="email" name="email" value={form.email}
              onChange={handleChange} required
              placeholder="your@email.com"
              className="w-full bg-gray-50 dark:bg-dark border border-gray-300
                         dark:border-gray-700 rounded-lg px-4 py-3
                         text-gray-900 dark:text-white placeholder-gray-400
                         dark:placeholder-gray-500 outline-none
                         focus:border-primary transition-colors" />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-300 text-sm font-medium mb-2 block">Message</label>
            <textarea name="message" value={form.message}
              onChange={handleChange} required rows={5}
              placeholder="Your message..."
              className="w-full bg-gray-50 dark:bg-dark border border-gray-300
                         dark:border-gray-700 rounded-lg px-4 py-3
                         text-gray-900 dark:text-white placeholder-gray-400
                         dark:placeholder-gray-500 outline-none
                         focus:border-primary transition-colors resize-none" />
          </div>

          <button type="submit" disabled={status === 'sending'}
            className="bg-primary text-white py-3 rounded-lg font-semibold
                       hover:bg-purple-700 transition-colors disabled:opacity-50
                       hover:scale-105 active:scale-95">
            {status === 'sending' ? 'Sending...' : 'Send Message 🚀'}
          </button>

          {status === 'success' && (
            <p className="text-green-400 text-center font-medium">
              ✅ Message sent! I'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-center">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}