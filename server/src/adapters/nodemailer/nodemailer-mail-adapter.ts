import nodemailer from 'nodemailer';
import { MailAdapter, SendEmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "19012a02244c46",
    pass: "d07bf107c6d705"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendEmailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Richard Manzoli <manzolidev@gmail.com>',
      subject,
      html: body
    })
  };
}