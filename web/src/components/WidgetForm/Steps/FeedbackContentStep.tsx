import { ArrowLeft } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '..';

import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../../ScreenshotButton';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });

    onFeedbackSent();
  }

  return (
    <>
      <header className="flex items-center gap-2 text-center">
        <button
          type="button"
          className="absolute left-4"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft />
        </button>
        <img
          src={feedbackTypeInfo.image.source}
          alt={feedbackTypeInfo.image.alt}
          className="h-6 w-6"
        />
        <p className="text-xl">{feedbackTypeInfo.title}</p>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-h-[106px] w-full min-w-[302px] resize-none rounded-md bg-transparent text-sm text-zinc-100 placeholder-zinc-400 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-700 focus:border-brand-500 focus:ring-1"
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className="mt-1 flex gap-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            screenshot={screenshot}
          />
          <button
            type="submit"
            disabled={comment.length === 0}
            className="flex flex-1 items-center justify-center rounded-md border-transparent bg-brand-500 p-2 text-sm transition-colors hover:bg-brand-300 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
