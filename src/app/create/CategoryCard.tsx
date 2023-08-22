import { Card, CardFooter, Image } from '@nextui-org/react'

interface Props {
  item: {
    name: string
    description: string
    image: string
    types: {
      name: string
      description: string
      calorie: number
      protein: number
      fat: number
      prices: {
        sizes: {
          small: number | null
          medium: number | null
          large: number | null
        }
        liter: number | null
        kilo: null | null
        piece: null | null
      }
    }[]
  }
  handleOpen: (item: any) => void
}

export default function CategoryCard({ item, handleOpen }: Props) {
  return (
    <Card isFooterBlurred isPressable onPress={() => handleOpen(item)} className="h-[233px]">
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 h-full w-full object-cover"
        src={`/images/calories/${item.image}`}
      />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
        <div className="flex flex-col px-3">
          <h1 className="text- font-bold text-white/90">{item.name}</h1>
          <p className="text-tiny text-white/60">{item.description}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
