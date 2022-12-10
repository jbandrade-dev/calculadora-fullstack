import { X } from "phosphor-react"
import { useContext } from "react"
import { ModulesContext } from "../../contexts/ModulesContext"

import { Button } from "../Button"
import { HeaderCardProps } from "../constType"
import { Text } from "../Text"

export function HeaderCard({ name, moduleToDeleteId }: HeaderCardProps) {
  const { deleteModule } = useContext(ModulesContext)

  function handleDeleteModule(id: string) {
    deleteModule(id)
  }

  return (
    <header className="flex items-center gap-4 justify-between py-2">
      <Text className="flex-1 text-sm uppercase">{name}</Text>

      <Button
        onClick={() => handleDeleteModule(moduleToDeleteId)}
        className="bg-red-500 w-fit flex py-0.5 px-0.5 rounded text-sm transition-colors focus:ring-2 ring-white" title="Deletar">
        <X size={12} />
      </Button>
    </header>
  )
}