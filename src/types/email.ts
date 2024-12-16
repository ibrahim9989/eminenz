export interface EmailParams {
  to: string;
  from_name: string;
  subject: string;
  message: string;
  reply_to: string;
  phone?: string;
}

export interface EmailJSResponse {
  status: number;
  text: string;
}