import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    emailjs
      .sendForm(
        'service_ov34rre',
        'template_sxhbgor',
        form.current,
        'zuwQVx0sjvAiNles5'
      )
      .then(
        (result) => {
          setSent(true);
          form.current.reset();
        },
        (err) => {
          setError('❌ Something went wrong. Please try again.');
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-24  text-text"
    >
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-12 text-primary font-sans"
        >
          Get in Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-primary">Contact Information</h2>
            <div className="space-y-4 text-muted">
              <div className="flex items-center gap-3">
                <Mail className="text-primary" size={20} />
                <span>bhargavasaiabhiany.b@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary" size={20} />
                <span>+91 7989104567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-primary" size={20} />
                <span>Hyderabad, India</span>
              </div>
            </div>
          </motion.div>
          {/* Contact Form */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {sent ? (
              <p className="text-green-500 text-lg font-medium">
                ✅ Your message has been sent successfully!
              </p>
            ) : (
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    required
                    className="w-full px-4 py-2 bg-bg border border-[color:var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    required
                    className="w-full px-4 py-2 bg-bg border border-[color:var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-bg border border-[color:var(--color-border)] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                {error && (
                  <p className="text-red-500 font-medium text-sm">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
} 