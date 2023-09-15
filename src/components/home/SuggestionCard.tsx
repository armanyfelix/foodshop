'use client'

import { Card, CardFooter, Image } from '@nextui-org/react'

interface Props {
  recipe: any
}

export default function SuggestionCard({ recipe }: Props) {
  return (
    <Card isFooterBlurred className="group h-[300px]">
      {/* <CardHeader className="absolute top-1 z-10 flex-col items-start bg-black"> */}
      {/* <p className="text-tiny font-bold uppercase text-white/60">Your day your way</p> */}
      {/* <h4 className="text-xl font-medium text-white/90">{recipe.title}</h4> */}
      {/* </CardHeader> */}
      <Image
        removeWrapper
        alt="Rice Bowl"
        className="object- z-0 h-full w-full object-cover"
        src={recipe.image}
      />
      <CardFooter className="absolute bottom-0 z-10 border-t-1 border-zinc-100/50 bg-white/30 shadow-inner transition-colors group-hover:bg-black/60  dark:border-default-100 dark:bg-black/40">
        <div className="flex h-full flex-grow items-center gap-2">
          <div className="flex h-full flex-col">
            <h4 className="text-xl text-white/90 group-hover:hidden">{recipe.title}</h4>
            <p
              className="h-0 overflow-auto text-sm text-white/70 transition-height group-hover:h-[280px]"
              dangerouslySetInnerHTML={{ __html: String(recipe.summary) }}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
