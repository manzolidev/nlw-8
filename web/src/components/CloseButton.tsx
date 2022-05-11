import { X } from "phosphor-react";
import { Popover } from '@headlessui/react'

export function CloseButton() {
  return (
    <Popover.Button className="absolute top-5 right-5 text-zinc-500 hover:text-zinc-400" title="Fechar formulário">
      <X className="h-4 w-4" weight="bold" />
    </Popover.Button>
  )
}