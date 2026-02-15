"use client";

import Link from "next/link";
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);


   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const form = e.currentTarget;
  setSending(true);

  const formData = new FormData(e.currentTarget);

  const payload = {
    name: String(formData.get("name") || ""),
    phone: String(formData.get("phone") || ""),
    email: String(formData.get("email") || ""),
    service: String(formData.get("service") || ""),
    message: String(formData.get("message") || ""),
  };

  const res = await fetch("/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  setSending(false);

  if (res.ok) {
    setSubmitted(true);
    form.reset();

    return;
  }

  const data = await res.json().catch(() => ({}));
  alert(data?.error || "Could not send. Please try again.");
};


    if (submitted) {
        return (
            <section id="quote" className="py-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4 max-w-2xl">
                    <div className="bg-slate-800 rounded-2xl p-12 shadow-2xl border border-slate-700">
                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold mb-4">Enquiry Received!</h2>
                        <p className="text-slate-300 text-lg mb-8">
                            Thanks! We'll be in touch with a quote shortly.
                        </p>
                       <Link
                        href="/"
                         className="w-full py-4 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 transition-all text-center block"
>
                             Back to Home
                        </Link>


                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="quote" className="py-20 bg-slate-900 text-slate-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Text */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Get a Free Quote
                        </h2>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                            Ready to start your project? Fill out the form below or give us a call, and we'll get back to you with a competitive quote and availability.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                                <p>Quick Response Times</p>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                                <p>Fully Insured & Accredited</p>
                            </div>
                            <div className="flex items-center gap-4 text-slate-300">
                                <div className="w-12 h-1 bg-orange-500 rounded-full"></div>
                                <p>Advanced Locating Equipment</p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl text-slate-900">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-slate-700">Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="0400 000 000"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="name@company.com"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-semibold text-slate-700">Service Required</label>
                                <select
                                    name="service"
                                    id="service"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                                >
                                    <option value="General Locating">General Utility Locating</option>
                                    <option value="GPR Scan">Ground Penetrating Radar (GPR)</option>
                                    <option value="Leak Detection">Acoustic Leak Detection</option>
                                    <option value="Other">Other / Unsure</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message / Property Address</label>
                                <textarea
                                    required
                                    name="message"
                                    id="message"
                                    rows={4}
                                    placeholder="Please describe your project..."
                                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 bg-orange-500 text-white font-bold rounded-lg shadow-lg hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Request Quote
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
