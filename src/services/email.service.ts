import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs.config';
import type { EmailParams } from '../types/email';

export class EmailService {
  public static async sendEmail(params: EmailParams): Promise<void> {
    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          to_email: params.to,
          from_name: params.from_name,
          from_email: params.reply_to,
          subject: params.subject,
          message: params.message,
          phone: params.phone,
          reply_to: params.reply_to,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status !== 200) {
        throw new Error(`Email send failed with status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
}