'use client'

import { handleSearch } from '@/app/actions'
import SearchIcon from '@/svg/SearchIcon'
import { Input } from '@nextui-org/react'

export default function SearchBar() {
  return (
    <section>
      <form action={handleSearch}>
        <Input
          //   value={input}
          //   onChange={(e) => {
          //     setPrompt(e.target.value)
          //     handleInputChange(e)
          //   }}
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
        <button type="submit">Search</button>
      </form>
    </section>
  )
}
