'use client'

import SearchIcon from '@/svg/SearchIcon'
import { Button, Input } from '@nextui-org/react'
import { useEffect } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

interface Props {
  onSearch: (e: FormData) => void
  setLoading: (loading: boolean) => void
}

export default function SearchBar({ onSearch, setLoading }: Props) {
  return (
    <form action={onSearch} className="mx-auto flex items-center md:w-2/3 lg:w-1/3">
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
      <SubmitButton setLoading={setLoading} />
    </form>
  )
}

function SubmitButton({ setLoading }: { setLoading: (loading: boolean) => void }) {
  const { pending } = useFormStatus()

  useEffect(() => {
    if (pending) {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [pending])

  return (
    <Button
      type="submit"
      variant="flat"
      size="lg"
      isDisabled={pending}
      isIconOnly
      className="rounded-l-none rounded-r-2xl shadow-xl"
    >
      <SearchIcon className="flex-shrink-0 text-black/50 text-slate-300 dark:text-white/90" />
    </Button>
  )
}
