import { ChatTeardropDots } from 'phosphor-react';
import { useState } from 'react';

export function Widget() {
  const [isWidgetOpen, setWidget] = useState(false);

  function handleWidgetVisibility() {
    setWidget(!isWidgetOpen);
  }

  return (
    <>
    <button onClick={handleWidgetVisibility} className="bg-brand-500 text-white p-3 rounded-full overflow-hidden absolute bottom-4 right-4 flex items-center group">
      <ChatTeardropDots size="24" />
      <span className="max-w-0 group-hover:max-w-xs group-hover:pl-2 overflow-hidden transition-all ease-linear">
        Feedback
      </span>
    </button>
    <div>
      { isWidgetOpen ? 'open' : 'closed' }
    </div>
    </>
  )
}