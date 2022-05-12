import { useState } from 'react';

import { FeedbackContentStep } from './Steps/FeedbackContentStep';
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep';

import bugImage from '../../assets/img/bug.svg';
import ideiaImage from '../../assets/img/idea.svg';
import thoughtImage from '../../assets/img/thought.svg';
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto',
    },
  },
  IDEIA: {
    title: 'Ideia',
    image: {
      source: ideiaImage,
      alt: 'Imagem de uma lampada',
    },
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImage,
      alt: 'Imagem de uma nuvem de pensamento',
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="relative flex w-[calc(100vw-2rem)] flex-col items-center rounded-2xl bg-zinc-900 p-4 shadow-lg md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {feedbackType ? (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackSent={() => setFeedbackSent(true)}
              onFeedbackRestartRequested={() => handleRestartFeedback()}
            />
          ) : (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          )}
        </>
      )}
      <footer className="mt-4 text-center text-xs text-zinc-400">
        Feito com ♥ pela{' '}
        <a
          href="https://www.rocketseat.com.br/"
          className="underline underline-offset-1"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
