import { Camera, Trash } from 'phosphor-react';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { Loading } from './Loading';

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleScreenshotTook() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreenshotTook(base64Image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p1 rounded-me flex h-10 w-10 items-end justify-end border-transparent text-zinc-400"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180,
        }}
        onClick={() => onScreenshotTook(null)}
      >
        <Trash weight="fill" />
      </button>
    );
  }
  return (
    <button
      type="button"
      onClick={handleScreenshotTook}
      className="rounded-md border-transparent bg-zinc-800 p-2 text-sm transition-colors hover:bg-zinc-700  focus:outline-none focus:ring-1 focus:ring-brand-500 focus:ring-offset-2 focus:ring-offset-zinc-900"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="h-6 w-6" />}
    </button>
  );
}
