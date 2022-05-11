import { useState } from "react";

import { CloseButton } from "./CloseButton";

import bugImage from '../assets/img/bug.svg';
import ideiaImage from '../assets/img/idea.svg';
import thoughtImage from '../assets/img/thought.svg';

const feedbackTypes = {
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

type feedbackType = keyof typeof feedbackTypes;


export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<feedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 rounded-2xl relative flex flex-col items-center shadow-lg mb-4 w-[calc(100vw-2rem)] md:w-auto">
      <header className="text-center mb-8">
        <p className="text-xl">Deixe seu feedback</p>
        <CloseButton />
      </header>
      <div className="flex items-center gap-2 mb-12 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button 
              key={key} 
              onClick={() => setFeedbackType(key as feedbackType)} 
              className="bg-zinc-800 border-2 rounded-lg border-transparent flex flex-col flex-1 items-center gap-2 outline-none hover:border-brand-500 focus:border-brand-500 py-5 w-24"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <p>{value.title}</p>
            </button>
          );
        })}
      </div>
      <footer className="text-xs text-center text-zinc-400">
        Feito com ♥ pela <a href="https://www.rocketseat.com.br/" className="underline underline-offset-1">Rocketseat</a>
      </footer>
    </div>
  )
}