import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
    <header className="text-center mb-8">
      <p className="text-xl">Deixar seu feedback</p>
      <CloseButton />
    </header>
      <div className="flex items-center gap-2 mb-4 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button 
              key={key} 
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)} 
              className="bg-zinc-800 border-2 rounded-lg border-transparent flex flex-col flex-1 items-center gap-2 outline-none hover:border-brand-500 focus:border-brand-500 py-5 w-24"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <p>{value.title}</p>
            </button>
          );
        })}
      </div>
    </>
  )
}