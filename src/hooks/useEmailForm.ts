import { useState } from 'react';
import { EmailService } from '../services/email.service';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface UseEmailFormProps {
  emailSubject: string;
}

export const useEmailForm = ({ emailSubject }: UseEmailFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await EmailService.sendEmail({
        to: 'sales@eminenzint.com',
        from_name: formData.name,
        subject: emailSubject,
        message: formData.message,
        reply_to: formData.email,
        phone: formData.phone,
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    isSubmitting,
    submitStatus,
    handleSubmit,
    handleChange,
  };
};