// utils/emailService.ts
import emailjs from '@emailjs/browser';

// Define types for our form data
export interface ContactFormData {
  name: string;
  phoneNumber: string;
  email: string;
  message: string;
}

export const sendEmail = async (
  formData: ContactFormData
): Promise<{ success: boolean; error?: string }> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone_number: formData.phoneNumber,
      message: formData.message,
    };

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_i7ypwkr',
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_gzqy8vm',
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'HSU9pLEF7KwdhfRSy' // ✅ pass public key here
    );

    return { success: true };
  } catch (error) {
    console.error('Message sent successfully:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send message',
    };
  }
};
