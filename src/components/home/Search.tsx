'use client'

import { onSearch } from '@/app/actions'
import { Spinner } from '@nextui-org/react'
import { useState } from 'react'
import SearchBar from '../SearchBar'
import SuggestionCard from '../SuggestionCard'

export default function Search() {
  const [recipes, setRecipes] = useState<any>([])
  const [loading, setLoading] = useState(false)
  const [noResults, setNoResults] = useState(false)

  const handleSearch = async (fd: FormData) => {
    const data = await onSearch(fd)
    if (data.results && data.results.length > 0) {
      setRecipes(data.results)
    } else {
      setNoResults(true)
      setTimeout(() => {
        setNoResults(false)
      }, 5000)
    }
  }

  return (
    <section className="mx-auto w-full p-6 text-center">
      <SearchBar onSearch={handleSearch} setLoading={setLoading} />
      <div className=" mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:w-4/5 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.length
          ? recipes.map((recipe: any) => <SuggestionCard key={recipe.id} recipe={recipe} />)
          : ''}
      </div>
      {loading && <Spinner size="sm" />}
      {noResults && <h1 className="my-14 text-2xl font-bold">No results found :(</h1>}
    </section>
  )
}
