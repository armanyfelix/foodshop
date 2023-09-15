import { Card, CardBody } from '@nextui-org/react'

interface Props {
  result: any
}

export default function SearchResultCard({ result }: Props) {
  return (
    <Card isBlurred className="max-w-[610px] border-none bg-background/60 dark:bg-default-100/50" shadow="sm">
      <CardBody></CardBody>
    </Card>
  )
}
