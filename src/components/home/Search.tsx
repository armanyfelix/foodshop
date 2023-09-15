'use client'

import { search } from '@/app/actions'
import SearchIcon from '@/svg/SearchIcon'
import { Button, Input, Spinner } from '@nextui-org/react'
import { useState } from 'react'
import SuggestionCard from './SuggestionCard'

export default function Search() {
  const [recipes, setRecipes] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  async function onSearch(fd: FormData) {
    setLoading(true)
    const data = await search(fd)
    if (data.code === 200) {
      setRecipes(data)
    }
    setLoading(false)
  }

  return (
    <section>
      <form action={onSearch} className="flex items-center">
        <Input
          name="search"
          isClearable
          size="lg"
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
              'rounded-l-2xl rounded-r-none',
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
        />
        <Button
          type="submit"
          variant="flat"
          size="lg"
          isDisabled={loading}
          isIconOnly
          className="rounded-l-none rounded-r-2xl shadow-xl"
        >
          <SearchIcon className="flex-shrink-0 text-black/50 text-slate-300 dark:text-white/90" />
        </Button>
      </form>
      <div className="py-10 text-center">
        {loading && <Spinner size="lg" />}
        {recipes.lengh
          ? recipes.map((recipe: any) => <SuggestionCard key={recipe.id} recipe={recipe} />)
          : ''}
      </div>
    </section>
  )
}
