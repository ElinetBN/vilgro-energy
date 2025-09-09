// src/services/energyFormService.ts
import emailjs from '@emailjs/browser';

interface EnergyFormData {
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
}

export const sendEnergyFormEmail = async (formData: EnergyFormData): Promise<void> => {
  const templateParams = {
    fullName: formData.fullName,
    companyName: formData.companyName,
    position: formData.position,
    email: formData.email,
    contactNumber: formData.contactNumber,
    physicalAddress: formData.physicalAddress,
    services: formData.services.join(', '),
    otherService: formData.otherService,
    volumeRequirements: formData.volumeRequirements,
    frequency: formData.frequency === 'Custom' ? formData.customFrequency : formData.frequency,
    deliveryMethod: formData.deliveryMethod,
    deliveryLocation: formData.deliveryLocation,
    startDate: formData.startDate,
    needsQuotation: formData.needsQuotation,
    hasExistingSupplier: formData.hasExistingSupplier,
    budgetEstimate: formData.budgetEstimate,
    additionalNotes: formData.additionalNotes,
    submissionDate: new Date().toLocaleString(),
  };

  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_ENERGY_SERVICE_ID || 'service_i7ypwkr',
      process.env.NEXT_PUBLIC_EMAILJS_ENERGY_TEMPLATE_ID || 'template_gzqy8vm',
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'HSU9pLEF7KwdhfRSy'
    );
  } catch (error) {
    console.error('Failed to send energy form email:', error);
    throw new Error('Failed to submit the form. Please try again later.');
  }
};