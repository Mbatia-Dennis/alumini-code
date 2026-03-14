/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-[#E0F7FA] flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full text-center z-10"
      >
        {/* Icon */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-gradient-to-br from-[#29B6F6] to-[#4DD0E1] shadow-lg shadow-cyan-200/50"
        >
          <Mail className="w-10 h-10 text-white" />
        </motion.div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#1A1F2C] mb-4">
          Something Amazing <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00B4D8] to-[#48CAE4]">
            Is Coming Soon
          </span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
          We're crafting an exceptional experience just for you. Join our waitlist to be the first to know when we launch.
        </p>

        {/* Form Container */}
        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="bg-white p-2 rounded-2xl shadow-xl shadow-cyan-100/50 flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 text-lg text-slate-700 bg-transparent border-none focus:ring-0 outline-none placeholder:text-slate-400"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] hover:from-[#0096C7] hover:to-[#00B4D8] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-md shadow-cyan-200/50 disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" />
                  ) : (
                    "Notify Me"
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-2xl shadow-xl shadow-cyan-100/50 flex flex-col items-center gap-3"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                <h3 className="text-xl font-bold text-slate-800">You're on the list!</h3>
                <p className="text-slate-500">We'll notify you as soon as we're ready.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-sm text-cyan-600 font-semibold hover:underline"
                >
                  Sign up another email
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-slate-400 text-sm font-medium"
        >
          No spam, ever. Unsubscribe at any time.
        </motion.p>
      </motion.div>

      {/* Bottom decorative bar or something similar to the image's subtle feel */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-50" />
    </div>
  );
}
