import emailjs from '@emailjs/browser';

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ghbhnrq', // Add your service ID here
  TEMPLATE_ID: 'template_bs64w7t', // Add your template ID here
  PUBLIC_KEY: 'VRwjEvs1B4ye4VG-0', // Add your public key here
} as const;

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);