import { Button, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import FoodCard from './FoodCard'

interface Item {
  name: string
  description: string
  image: string
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
    kilo: number | null
    piece: number | null
  }
}

interface Props {
  isOpen: boolean
  onClose: () => void
  calorie: {
    name: string
    description: string
    image: string
    types: {
      name: string
      description: string
      image: string
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
        kilo: number | null
        piece: number | null
      }
    }[]
  }
  type: Item
}

export default function AddFoodModal({ isOpen, onClose, calorie, type }: Props) {
  return (
    <Modal
      size="full"
      isOpen={isOpen}
      onClose={onClose}
      classNames={{
        closeButton: 'bg-black',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader
              className={`flex h-[240px] flex-col gap-1 bg-cover text-xl`}
              style={{ backgroundImage: `url(/images/calories/${calorie?.image})` }}
            >
              {calorie?.name}
              {/* <Image
                          shadow="sm"
                          // radius="lg"
                          width="100%"
                          alt={carbs?.title}
                          className="object-cov h-[240px] w-full"
                          src={carbs?.img}
                        /> */}
            </ModalHeader>
            <ModalBody className="pt-6">
              {calorie.types?.map((item: Item, index) => (
                <FoodCard key={`${item.name}_${index}`} item={item} />
              ))}
              {/* <Dropdown
                        showArrow
                        classNames={{
                          base: 'py-1 px-1 border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black',
                          arrow: 'bg-default-200',
                        }}
                      >
                        <DropdownTrigger>
                          <Button variant="bordered">
                            {!selectedValue
                              ? `Select a type of ${calorie?.name?.toLowerCase()}`
                              : selectedValue}
                          </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                          variant="faded"
                          selectionMode="single"
                          selectedKeys={selectedKeys}
                          onSelectionChange={setSelectedKeys}
                          aria-label="Dropdown menu with description"
                        >
                          <DropdownSection title={calorie?.name}>
                            {calorie?.types?.map((t: any) => (
                              <DropdownItem
                                key={t.name}
                                onClick={() => setType(t)}
                                description={t.description}
                                // startContent={
                                //   <CheckCircleIcon className={iconClasses} />
                                // }
                              >
                                {t.name}
                              </DropdownItem>
                            ))}
                          </DropdownSection>
                        </DropdownMenu>
                      </Dropdown> */}
              {type && (
                <div className="p-2">
                  <div className="mb-4">
                    <p>{type.description}</p>
                    {/* <h1 className="text-2xl">{type.price}</h1> */}
                  </div>
                  <Divider />
                  {/* <h3 className="mt-4">Nutrition</h3> */}
                  <div className="mt-4 flex h-full flex-col justify-center space-y-4">
                    <p>
                      <b>Calorie:</b> {type.calorie}
                    </p>
                    <p>
                      <b>Protein:</b> {type.protein}
                    </p>
                    <p>
                      <b>Fat:</b> {type.fat}
                    </p>
                  </div>
                  <div className="mx-auto flex w-64 items-center justify-between rounded-full bg-zinc-600">
                    <button className="h-14 w-14 rounded-full text-2xl ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800">
                      -
                    </button>
                    <span>5</span>
                    <button className="h-14 w-14 rounded-full text-2xl ease-in hover:bg-zinc-700 active:scale-105 active:bg-zinc-800">
                      +
                    </button>
                  </div>
                </div>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onClick={onClose}>
                Cancel
              </Button>
              <Button color="primary" onPress={onClose}>
                Add
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
