'use client';

import { useState } from 'react';
import { sendEmail } from './actions';

export default function Contact() {
  const [status, setStatus] = useState({ success: false, error: false, message: '' });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await sendEmail(formData);

    if (result.error) {
      setStatus({ success: false, error: true, message: result.error });
    } else {
      setStatus({ success: true, error: false, message: "Your message has been sent successfully!" });
      (event.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-16 max-w-6xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-center md:text-left">Contact us</h1>
      <p className="text-lg text-gray-700 mb-12 md:text-left max-w-3xl">
        We welcome opportunities for collaboration, media inquiries, and speaking engagements. Please feel free to reach out through any of the channels below. We look forward to connecting with you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:max-w-none md:mx-0">
        {/* Email Card */}
        <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.452a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Email</h3>
            </div>
          </div>
          <div className="mt-4">
            <a href="mailto:contact@mideaststrategia.org" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              contact@mideaststrategia.org
            </a>
          </div>
        </div>

        {/* Twitter Card */}
        <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Twitter/X</h3>
            </div>
          </div>
          <div className="mt-4">
            <a href="https://twitter.com/nasertamimi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              @nasertamimi
            </a>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="bg-white border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">LinkedIn</h3>
            </div>
          </div>
          <div className="mt-4">
            <a href="https://www.linkedin.com/in/dr-naser-al-tamimi-1332a229/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
              View Profile
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
              <input type="text" name="name" id="name" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email</label>
              <input type="email" name="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your message (optional)</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"></textarea>
            </div>
            <div>
              <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                Submit
              </button>
            </div>
          </form>
          {status.message && (
            <p className={`mt-4 text-sm ${status.success ? 'text-green-600' : 'text-red-600'}`}>
              {status.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}