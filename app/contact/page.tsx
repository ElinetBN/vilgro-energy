"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail, ContactFormData } from "@/lib/emailService"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const result = await sendEmail(formData)
    
    if (result.success) {
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        message: "",
      })
      setSubmitStatus({
        success: true,
        message: "Thank you for your message. We'll get back to you soon!"
      })
    } else {
      setSubmitStatus({
        success: false,
        message: result.error || "Failed to send message. Please try again later."
      })
    }
    setIsSubmitting(false)
  }

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            {/* Drop us a message section */}
            <div className="bg-[#0d10c0] rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Drop us a message</h2>
              <p className="text-white text-lg leading-relaxed">
                At the heart of everything we do is service. Contact us, and we'll be ready to assist with your energy needs
              </p>
            </div>

            {/* Logo and Contact Info */}
            <div className="bg-[#0d10c0] rounded-2xl p-8 shadow-lg">
              <div className="space-y-4 text-white">
                <div>
                  <h3 className="font-semibold text-white mb-2">Location</h3>
                  <p>106 Johan Avenue, Dennehof, Sandton</p>
                  
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">Phone</h3>
                  <p>+27 (10) 003 7840</p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-2">Email</h3>
                  <p>info@vilgro.com | sales@vilgro.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Aligned Form Box */}
          <div className="flex items-end h-full">
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full">
              {submitStatus && (
                <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {submitStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block uppercase tracking-wide">
                    NAME
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 bg-white text-lg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 mb-2 block uppercase tracking-wide">
                      PHONE NUMBER
                    </Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 bg-white text-lg"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block uppercase tracking-wide">
                      EMAIL ADDRESS
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 bg-white text-lg"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block uppercase tracking-wide">
                    MESSAGE
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg focus:border-blue-500 focus:ring-0 bg-white text-lg resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'SENDING...' : 'SUBMIT'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}