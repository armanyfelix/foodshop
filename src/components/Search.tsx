'use client'

import { Button, Input } from '@nextui-org/react'
import { useChat } from 'ai/react'
import SearchIcon from './svg/SearchIcon'

interface Props {
  // messages: Array<{ role: string; content: string }>;
  // input: string;
  // handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function Search({}: Props) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/generate',
  })
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={handleInputChange}
          isClearable
          radius="lg"
          classNames={{
            label: 'text-black/50 dark:text-white/90',
            input: [
              'bg-transparent',
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
        <Button type="submit" color="primary" size="sm" className="ml-2 mt-4">
          Search
        </Button>
      </form>
      <div>
        {messages.map((m, index) => (
          <li key={index}>
            {m.role === 'user' ? 'Searching: ' : 'AI: '}
            {m.content}
          </li>
        ))}
      </div>
    </section>
  )
}
