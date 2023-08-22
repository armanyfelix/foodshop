import {
  Button,
  Divider,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import FoodCard from './FoodCard'

interface Selected {
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
  main: {
    name: string
    description: string
    image: string
    types: Selected[]
  }
  selected: Selected
  setSelected: (selected: Selected) => void
}

export default function AddFoodModal({ isOpen, onClose, main, selected, setSelected }: Props) {
  return (
    <Modal
      size="full"
      isOpen={isOpen}
      scrollBehavior="inside"
      onClose={onClose}
      classNames={{
        closeButton: 'bg-white text-black m-3',
        base: 'bg-black',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader
              className={`flex  flex-col gap-1 bg-cover text-xl`}
              // style={{ backgroundImage: `url(/images/calories/${main?.image})` }}
            >
              {main?.name}
              {selected && (
                <Image
                  shadow="sm"
                  // radius="lg"
                  width="100%"
                  alt={selected.name}
                  className="mt-4 h-[240px] w-full object-cover"
                  src={`/images/calories/${main.name.toLowerCase()}/${selected.image}`}
                />
              )}
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {!selected &&
                  main.types?.map((type: Selected, index: any) => (
                    <FoodCard
                      key={`${type.name}_${index}`}
                      type={type}
                      categoryName={main.name}
                      setSelected={setSelected}
                    />
                  ))}
              </div>
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
              {selected && (
                <div className="p-2">
                  <div className="">
                    <h1 className="text-3xl font-bold ">{selected.name}</h1>
                    <p>{selected.description}</p>
                    {/* <h1 className="text-2xl">{type.price}</h1> */}
                  </div>
                  <Divider />
                  {/* <h3 className="mt-4">Nutrition</h3> */}
                  <div className="mt-4 flex h-full flex-col justify-center space-y-4">
                    <p>
                      <b>Calorie:</b> {selected.calorie}
                    </p>
                    <p>
                      <b>Protein:</b> {selected.protein}
                    </p>
                    <p>
                      <b>Fat:</b> {selected.fat}
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
              {selected && (
                <>
                  <Button color="danger" variant="light" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Add
                  </Button>
                </>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
