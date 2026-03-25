"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, MapPin, Clock, Send, CheckCircle, ImagePlus, X } from "lucide-react";

export default function Contact() {
  const headingRef = useRef(null);
  const inView = useInView(headingRef, { once: true, margin: "-60px" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).slice(0, 5);
    setImages(files);
    const previews = files.map((f) => URL.createObjectURL(f));
    setImagePreviews(previews);
  };

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setImages(newImages);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("phone", form.phone);
    formData.append("email", form.email);
    formData.append("service", form.service);
    formData.append("message", form.message);
    images.forEach((img) => formData.append("images", img));

    try {
      const res = await fetch("/api/quote", { method: "POST", body: formData });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call us directly on 0428 631 931.");
      }
    } catch {
      setError("Could not send. Please call us on 0428 631 931.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-gray-50 border border-gray-200 hover:border-electric/50 focus:border-electric focus:outline-none focus:ring-2 focus:ring-electric/20 text-gray-900 placeholder-gray-400 font-rubik text-sm rounded-xl px-4 py-3 transition-colors duration-200";

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-electric/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-electric text-xs font-outfit font-semibold uppercase tracking-widest mb-4">
            Get In Touch
          </span>
          <h2 className="font-outfit font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4">
            Request a <span className="text-gold">Free Quote</span>
          </h2>
          <p className="font-rubik text-gray-500 text-base max-w-lg mx-auto">
            Fill in the form and we'll get back to you fast — usually within the hour. Or just call us directly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* Phone */}
            <div className="bg-white border border-electric/20 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <p className="font-rubik text-gray-500 text-xs uppercase tracking-wider">Call Us Direct</p>
                  <a
                    href="tel:0428631931"
                    className="font-outfit font-bold text-gray-900 text-xl hover:text-electric transition-colors cursor-pointer"
                  >
                    0428 631 931
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-rubik text-gray-500 text-xs uppercase tracking-wider mb-1">Service Area</p>
                  <p className="font-outfit font-semibold text-gray-900 text-sm">New South Wales</p>
                  <p className="font-rubik text-gray-500 text-sm mt-1 leading-relaxed">
                    Servicing Greater Sydney, Western Suburbs, Blue Mountains and surrounding NSW regions.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-electric/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-electric" />
                </div>
                <div>
                  <p className="font-rubik text-gray-500 text-xs uppercase tracking-wider mb-2">Hours</p>
                  <div className="space-y-1">
                    {[
                      ["Mon – Fri", "7:00am – 5:30pm", false],
                      ["Saturday", "8:00am – 2:00pm", false],
                      ["Emergency", "24/7 Available", true],
                    ].map(([day, time, isEmergency]) => (
                      <div key={String(day)} className="flex items-center justify-between gap-4">
                        <span className="font-rubik text-gray-500 text-xs">{day}</span>
                        <span className={`font-rubik text-xs font-medium ${isEmergency ? "text-emergency" : "text-gray-900"}`}>
                          {time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3 bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-10 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-outfit font-bold text-gray-900 text-2xl">Message Sent!</h3>
                <p className="font-rubik text-gray-500 text-sm max-w-xs">
                  Thanks! We'll be in touch very soon. For urgent jobs, call us directly on{" "}
                  <a href="tel:0428631931" className="text-electric font-semibold">0428 631 931</a>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-rubik text-gray-600 text-xs mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-rubik text-gray-600 text-xs mb-1.5 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="04xx xxx xxx"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block font-rubik text-gray-600 text-xs mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-rubik text-gray-600 text-xs mb-1.5 uppercase tracking-wider">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="ac-install">Air Con Installation</option>
                    <option value="ac-service">Air Con Servicing / Repairs</option>
                    <option value="electrical">Electrical Work</option>
                    <option value="emergency">Emergency Callout</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block font-rubik text-gray-600 text-xs mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us a bit about the job — location, size, any specific requirements..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Image upload */}
                <div>
                  <label className="block font-rubik text-gray-600 text-xs mb-1.5 uppercase tracking-wider">
                    Photos of the Job <span className="normal-case text-gray-400">(optional, up to 5)</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-200 hover:border-electric/40 rounded-xl transition-colors duration-200">
                    {imagePreviews.length > 0 ? (
                      <div className="p-3">
                        <div className="flex flex-wrap gap-2 mb-2">
                          {imagePreviews.map((src, i) => (
                            <div key={i} className="relative group">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={src}
                                alt={`Upload ${i + 1}`}
                                className="w-16 h-16 object-cover rounded-lg border border-gray-200"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(i)}
                                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-gray-900 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="w-3 h-3" />
                              </button>
                            </div>
                          ))}
                          {imagePreviews.length < 5 && (
                            <label
                              htmlFor="images"
                              className="w-16 h-16 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-electric/40 transition-colors"
                            >
                              <ImagePlus className="w-5 h-5 text-gray-400" />
                            </label>
                          )}
                        </div>
                        <p className="font-rubik text-gray-400 text-xs">{images.length} photo{images.length !== 1 ? "s" : ""} selected</p>
                      </div>
                    ) : (
                      <label htmlFor="images" className="flex flex-col items-center justify-center gap-2 py-6 cursor-pointer">
                        <ImagePlus className="w-8 h-8 text-gray-300" />
                        <p className="font-rubik text-gray-500 text-sm font-medium">Click to upload photos</p>
                        <p className="font-rubik text-gray-400 text-xs">JPG, PNG, HEIC up to 10MB each</p>
                      </label>
                    )}
                    <input
                      id="images"
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </div>
                </div>

                {error && (
                  <p className="font-rubik text-emergency text-sm bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-gray-900 font-outfit font-bold text-sm px-6 py-4 rounded-xl transition-all duration-200 btn-glow cursor-pointer shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send My Quote Request
                    </>
                  )}
                </button>

                <p className="font-rubik text-gray-400 text-xs text-center">
                  No spam. We'll only contact you about your quote.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
