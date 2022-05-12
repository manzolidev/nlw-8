import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({
  onFeedbackTypeChanged,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header className="mb-8 text-center">
        <p className="text-xl">Deixar seu feedback</p>
        <CloseButton />
      </header>
      <div className="mb-4 flex w-full items-center gap-2">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="flex w-24 flex-1 flex-col items-center gap-2 rounded-lg border-2 border-transparent bg-zinc-800 py-5 outline-none hover:border-brand-500 focus:border-brand-500"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <p>{value.title}</p>
            </button>
          );
        })}
      </div>
    </>
  );
}
