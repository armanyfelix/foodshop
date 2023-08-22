'use client'

import { Input } from '@nextui-org/react'
import { useState } from 'react'
import SearchIcon from '../../svg/SearchIcon'

interface Props {}

export default function Search({}: Props) {
  const [prompt, setPrompt] = useState<string>('')

  return (
    <div>
      <form>
        <Input
          onChange={(e) => setPrompt(e.target.value)}
          isClearable
          radius="lg"
          size="lg"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
              'w-full',
              'text-black/90 dark:text-white/90',
              'placeholder:text-default-700/50 dark:placeholder:text-white/60',
            ],
            innerWrapper: 'bg-transparent',
            inputWrapper: [
              'shadow-xl',
              'bg-default-200/50',
              'dark:bg-default/60',
              'backdrop-blur-xl',
              'backdrop-saturate-200',
              'hover:bg-default-200/70',
              'dark:hover:bg-default/70',
              'group-data-[focused=true]:bg-default-200/50',
              'dark:group-data-[focused=true]:bg-default/60',
              '!cursor-text',
            ],
          }}
          placeholder="What do you want to eat..."
          startContent={
            <SearchIcon className="pointer-events-none flex-shrink-0 text-black/50 text-slate-300 dark:text-white/90" />
          }
        />
        <button type="submit" className={`${prompt ? '' : 'hidden'}`}>
          Search
        </button>
      </form>
    </div>
  )
}
