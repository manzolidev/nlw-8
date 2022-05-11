import { useState } from "react";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

import bugImage from '../../assets/img/bug.svg';
import ideiaImage from '../../assets/img/idea.svg';
import thoughtImage from '../../assets/img/thought.svg';

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImage,
      alt: 'Imagem de um inseto'
    }
  },
  IDEIA: {
    title: 'Ideia',
    image: {
      source: ideiaImage,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImage,
      alt: 'Imagem de uma nuvem de pensamento'
    }
  }
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function onFeedbackResetRequested() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 rounded-2xl relative flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      { feedbackType
        ? (
          <FeedbackContentStep feedbackType={feedbackType} onFeedbackResetRequested={onFeedbackResetRequested} />
        )
        : (
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}  />
        )
      }
      <footer className="text-xs text-center text-zinc-400 mt-4">
        Feito com ♥ pela <a href="https://www.rocketseat.com.br/" className="underline underline-offset-1">Rocketseat</a>
      </footer>
    </div>
  )
}