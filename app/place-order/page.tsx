"use client"

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, Calendar, MapPin, Phone, Mail, Building, User } from 'lucide-react';
import { sendEnergyFormEmail } from '@/lib/energyFormService';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

interface FormData {
  fullName: string;
  companyName: string;
  position: string;
  email: string;
  contactNumber: string;
  physicalAddress: string;
  services: string[];
  otherService: string;
  volumeRequirements: string;
  frequency: string;
  customFrequency: string;
  deliveryMethod: string;
  deliveryLocation: string;
  startDate: string;
  needsQuotation: string;
  hasExistingSupplier: string;
  budgetEstimate: string;
  additionalNotes: string;
  consent: boolean;
  termsAgreed: boolean;
}

interface FormErrors {
  fullName?: string;
  companyName?: string;
  email?: string;
  contactNumber?: string;
  physicalAddress?: string;
  services?: string;
  otherService?: string;
  consent?: string;
  termsAgreed?: string;
}

const serviceOptions: string[] = [
  'Gasoline ',
  'Diesel',
  'Jet Fuel',
  'Specialty Products',
 
  
];

const frequencyOptions: string[] = [
  'One-off',
  'Weekly',
  'Monthly',
  'Custom'
];

const deliveryMethods: string[] = [
  'Bulk delivery',
  'Cylinder delivery (for LNG)',
  'Client collection'
];

const VilgroEnergyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    position: '',
    email: '',
    contactNumber: '',
    physicalAddress: '',
    services: [],
    otherService: '',
    volumeRequirements: '',
    frequency: '',
    customFrequency: '',
    deliveryMethod: '',
    deliveryLocation: '',
    startDate: '',
    needsQuotation: '',
    hasExistingSupplier: '',
    budgetEstimate: '',
    additionalNotes: '',
    consent: false,
    termsAgreed: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    if (!formData.physicalAddress.trim()) newErrors.physicalAddress = 'Physical address is required';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
    if (formData.services.includes('Other') && !formData.otherService.trim()) {
      newErrors.otherService = 'Please specify the other service';
    }
    if (!formData.consent) newErrors.consent = 'Consent is required';
    if (!formData.termsAgreed) newErrors.termsAgreed = 'You must agree to terms and conditions';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSending(true);

    try {
      await sendEnergyFormEmail(formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  if (isSubmitted) {
    return (
     

      <div className="max-w-4xl mx-auto p-6 bg-white">
        <div className="text-center py-12">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Thank you for your interest in Vilgro's energy services. Our team will contact you shortly to confirm your requirements, share pricing, and outline next steps.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: '',
                companyName: '',
                position: '',
                email: '',
                contactNumber: '',
                physicalAddress: '',
                services: [],
                otherService: '',
                volumeRequirements: '',
                frequency: '',
                customFrequency: '',
                deliveryMethod: '',
                deliveryLocation: '',
                startDate: '',
                needsQuotation: '',
                hasExistingSupplier: '',
                budgetEstimate: '',
                additionalNotes: '',
                consent: false,
                termsAgreed: false
              });
            }}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (

    <>
          <Navigation/>
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-sm">
        {/* Left side: Background image */}
        <div
          className="w-full md:w-1/2 h-44 md:h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/truck4.jpeg')",
          }}
        ></div>

        {/* Right side: Content */}
        <div className="w-full md:w-1/2 px-6 py-12 md:py-20 text-center md:text-left bg-white">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Secure reliable energy.
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-500 mb-4">
            Fast, transparent, trusted.
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Let us power your operations with liquid fuels,<br />
            natural gas, or LIVS – delivered safely and efficiently<br />
            across South Africa!
          </p>
          {/* <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            START YOUR ORDER NOW
          </button> */}
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-gray border-t">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Your Order</h3>
              <p className="text-gray-600 text-sm">
                Fill in your details, product needs, and delivery requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get a Quote</h3>
              <p className="text-gray-600 text-sm">
                We'll assess your order and contact you with a tailored quote and timeline
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery or Collection</h3>
              <p className="text-gray-600 text-sm">
                Once approved, your energy is delivered or made ready for collection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Client Information */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Client Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name*
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name / Entity*
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.companyName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter company name"
                    />
                    {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Position / Title
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your position or title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address*
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Contact Number*
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.contactNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+27 12 345 6789"
                    />
                    {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Physical Address / Location of Operation*
                    </label>
                    <textarea
                      name="physicalAddress"
                      value={formData.physicalAddress}
                      onChange={handleInputChange}
                      rows={3}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.physicalAddress ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter complete address for logistics or service delivery"
                    />
                    {errors.physicalAddress && <p className="text-red-500 text-sm mt-1">{errors.physicalAddress}</p>}
                  </div>
                </div>
              </section>

              {/* Service Selection */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Service Selection</h2>
                <div className="space-y-4">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                      />
                      <span className="text-gray-700">{service}</span>
                    </label>
                  ))}
                  {errors.services && <p className="text-red-500 text-sm">{errors.services}</p>}
                  
                  {formData.services.includes('Other') && (
                    <div className="ml-8 mt-3">
                      <input
                        type="text"
                        name="otherService"
                        value={formData.otherService}
                        onChange={handleInputChange}
                        placeholder="Please specify the other service"
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.otherService ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {errors.otherService && <p className="text-red-500 text-sm mt-1">{errors.otherService}</p>}
                    </div>
                  )}
                </div>
              </section>

              {/* Order/Service Details */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order / Service Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Estimated Volume / Consumption Requirements
                    </label>
                    <textarea
                      name="volumeRequirements"
                      value={formData.volumeRequirements}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g. litres per month for diesel, cubic meters for gas, or tonnes for LNG"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Frequency of Supply Needed
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select an option</option>
                      {frequencyOptions.map((freq) => (
                        <option key={freq} value={freq}>{freq}</option>
                      ))}
                    </select>
                    {formData.frequency === 'Custom' && (
                      <input
                        type="text"
                        name="customFrequency"
                        value={formData.customFrequency}
                        onChange={handleInputChange}
                        placeholder="Please specify custom frequency"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-3"
                      />
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Method Required
                    </label>
                    <select
                      name="deliveryMethod"
                      value={formData.deliveryMethod}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Delivery method</option>
                      {deliveryMethods.map((method) => (
                        <option key={method} value={method}>{method}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Location (if different from business address)
                    </label>
                    <input
                      type="text"
                      name="deliveryLocation"
                      value={formData.deliveryLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Alternative delivery address"
                    />
                  </div>
                </div>
              </section>

              {/* Commercial Info */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Commercial Info <span className="text-gray-500 text-base font-normal">(Optional)</span></h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Do you require a quotation before placing an order?
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="needsQuotation"
                          value="Yes"
                          checked={formData.needsQuotation === 'Yes'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="needsQuotation"
                          value="No"
                          checked={formData.needsQuotation === 'No'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Do you have an existing supplier contract in place?
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasExistingSupplier"
                          value="Yes"
                          checked={formData.hasExistingSupplier === 'Yes'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Yes (and seeking alternative/backup)</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="hasExistingSupplier"
                          value="No"
                          checked={formData.hasExistingSupplier === 'No'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="ml-2 text-gray-700">No (this will be our first supply)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Estimate (Optional)
                    </label>
                    <input
                      type="text"
                      name="budgetEstimate"
                      value={formData.budgetEstimate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your estimated budget range"
                    />
                  </div>
                </div>
              </section>

              {/* Additional Notes */}
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Additional Notes</h2>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Any special requirements, tank sizes, safety considerations, or technical questions"
                />
              </section>

              {/* Consent */}
              {/* <section>
                <div className="space-y-4"> */}
                  {/* <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                    /> */}
                    {/* <span className="text-gray-700">
                      I consent to being contacted by the Vilgro team regarding this request.
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

                  <label className="flex items-start space-x-3"> */}
                    {/* <input
                      type="checkbox"
                      name="termsAgreed"
                      checked={formData.termsAgreed}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                    /> */}
                    {/* <span className="text-gray-700">
                      I agree to the{' '}
                      <a href="#" className="text-blue-600 hover:text-blue-800 underline">
                        terms of service and data policy
                      </a>
                      .
                    </span> */}
                  {/* </label> */}
                  {/* {errors.termsAgreed && <p className="text-red-500 text-sm">{errors.termsAgreed}</p>} */}
                {/* </div>
              </section> */}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSending}
                  className="bg-blue-600 text-white py-3 px-8 rounded-lg font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? 'SENDING...' : 'SUBMIT ORDER REQUEST'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default VilgroEnergyForm;