import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackCaseRequest {
  type: string,
  comment: string,
  screenshot?: string
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}
  async execute(request: SubmitFeedbackCaseRequest, ) {
    const { type, comment, screenshot } = request;


    if (!type) {
      throw new Error("Type is required.")
    }

    if (!comment) {
        throw new Error("Type is required.")
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.")
    }

    await this.feedbacksRepository.create({
        type,
        comment,
        screenshot
    })

    await this.mailAdapter.sendMail({
      subject: 'Novo feedback',
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #000;">',
        `<p> Tipo de feedback: <strong>${type}</strong> </p>`,
        `<p>Comentário: <strong>${comment}</strong></p>`,
        '</div>'
      ].join('\n')
    })
  }
}