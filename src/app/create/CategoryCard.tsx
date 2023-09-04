import { Card, CardFooter, Image } from '@nextui-org/react'
import { Fragment } from 'react'

interface Props {
  currentTab: any
  handleOpen: (item: any) => void
}

export default function CategoryCard({ currentTab, handleOpen }: Props) {
  const categories = [
    {
      key: 'bread',
      name: 'Breads',
      type: 'grain',
      description: 'todo',
      image: 'grains/breads.jpg',
    },
    {
      key: 'tortilla',
      name: 'Tortillas',
      type: 'grain',
      description: 'todo',
      image: 'grains/tortillas.jpg',
    },
    {
      key: 'pasta',
      name: 'Pastas',
      type: 'grain',
      description: 'todo',
      image: 'grains/pastas.jpg',
    },
    {
      key: 'rice',
      name: 'Rices',
      type: 'grain',
      description: 'cdcs',
      image: 'grains/rices.jpg',
    },
  ]

  return (
    <section className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-4">
      {categories.map((c, i) => (
        <Fragment key={`${c.key}_${i}`}>
          {c.type === currentTab.key && (
            <Card isFooterBlurred isPressable onPress={() => handleOpen(c)} className="h-[233px]">
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 h-full w-full object-cover"
                src={`/images/${c.image}`}
              />
              <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
                <div className="flex flex-col px-3">
                  <h1 className="text- font-bold text-white/90">{c.name}</h1>
                  <p className="text-tiny text-white/60">{c.description}</p>
                </div>
              </CardFooter>
            </Card>
          )}
        </Fragment>
      ))}
    </section>
  )
}
