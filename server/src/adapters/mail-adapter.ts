export interface SendEmailData {
  subject: string,
  body: string
}

export interface MailerAdapter {
  sendMail: (data: SendEmailData) => Promise<void>;
}