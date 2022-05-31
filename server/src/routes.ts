import express from  'express';
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbacksUseCase } from './use-cases/submit-feedbacks-use-case';

export const router = express.Router();

router.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerAdapter = new NodemailerMailAdapter();

  const submitFeedbacksUseCase = new SubmitFeedbacksUseCase(
    prismaFeedbacksRepository, 
    nodemailerAdapter
  );

  await submitFeedbacksUseCase.execute({
    type, comment, screenshot
  });

  return res.status(201).send()
}); 

