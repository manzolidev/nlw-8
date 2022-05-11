import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";

import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType,
  onFeedbackResetRequested: () => void;
}


export function FeedbackContentStep({feedbackType, onFeedbackResetRequested}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  return (
    <>
      <header className="text-center mb-8 flex items-center gap-2">
        <button type="button" className="absolute left-4">
          <ArrowLeft onClick={onFeedbackResetRequested} />
        </button>
        <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="h-6 w-6" />
        <p className="text-xl">{feedbackTypeInfo.title}</p>
        <CloseButton />
      </header>
      <div>
        <form>
          <textarea
            className="bg-transparent resize-none min-w-[302px] w-full min-h-[106px] text-sm placeholder-zinc-400 text-zinc-100 rounded-md scrollbar-track-transparent scrollbar-thumb-zinc-700 scrollbar-thin focus:ring-1 focus:border-brand-500"
            placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
          />
        </form>
      </div>
    </>
  )
}