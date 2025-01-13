import { motion } from 'framer-motion';
import Link from "next/link";
import { Instagram, Linkedin, X } from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
}

const footerLinks: FooterLink[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Privacy & Policy",
    href: "/privacy",
  },
  {
    title: "Terms & Condition",
    href: "/terms",
  },
];

const rightLinks: FooterLink[] = [
  {
    title: "login",
    href: "/login",
  },
  {
    title: "categories",
    href: "/categories",
  },
  {
    title: "refund policy",
    href: "/refund",
  },
  {
    title: "gift card",
    href: "/gift-card",
  },
];

const Footer = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add newsletter signup logic here
  };

  return (
    <footer className="bg-navy-blue text-footer-text">
      <div className="container mx-auto px-6 py-20">
        {/* Email Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <form onSubmit={handleSubmit} className="relative">
            <label htmlFor="email-signup" className="sr-only">Email address</label>
            <input
              id="email-signup"
              type="email"
              placeholder="Email"
              required
              className="w-full bg-transparent border border-white/10 rounded-input px-6 py-4 text-footer-heading font-serif placeholder:text-footer-text/60 focus:outline-none focus:border-white/30"
            />
            <div className="mt-4">
              <button 
                type="submit"
                className="flex items-center gap-4 group"
                aria-label="Sign up for newsletter"
              >
                <span className="text-footer-heading font-serif">Sign me up</span>
                <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4 12H20M20 12L13 5M20 12L13 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Logo and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Logo */}
            <div>
              <div className="inline-block border-2 border-footer-text/20 rounded-lg p-4">
                <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                  <path d="M12 24H36M36 24L24 12M36 24L24 36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Step in text */}
            <h2 className="text-display font-serif">Step in to our world</h2>

            {/* Support Section */}
            <div className="space-y-4">
              <h3 className="text-sm tracking-wider opacity-80">NEED SUPPORT</h3>
              <p className="text-body-large opacity-60 max-w-md">
                We are just an email away. Drop us a line turers to ensure the highest. Be the first to receive innovative new product launches, perspectives and technologies.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <Link 
                href="#" 
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Discord"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </Link>
              <Link 
                href="#" 
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" aria-hidden="true" />
              </Link>
              <Link 
                href="#" 
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="X (Twitter)"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </Link>
              <Link 
                href="#" 
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-x-24 content-start"
          >
            <div className="space-y-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              {rightLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block opacity-60 hover:opacity-100 transition-opacity"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-8 border-t border-footer-text/10"
        >
          <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
            <p className="text-sm opacity-60">2024 BEWARE ALL RIGHTS RESERVED</p>
            <div className="flex gap-8 text-sm opacity-60">
              <Link href="/privacy" className="hover:opacity-100 transition-opacity uppercase">
                Privacy & Policy
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition-opacity uppercase">
                Terms & Condition
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 