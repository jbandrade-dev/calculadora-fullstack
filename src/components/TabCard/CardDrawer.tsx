import Image from "next/image"
import { X } from "phosphor-react"
import { CardProps } from "../constType"
import { Text } from "../Text"

export function CardDrawer({ content }: CardProps) {
  return (
    <ul>
      {content.drawers.map(drawer => {
        return (
          <li className="lineParts" key={drawer.id}>
            <Image src={drawer.icon} alt="" width={30} height={30} />

            <Text className="itemLineParts flex-1 ml-4">
              {drawer.namePart}
            </Text>

            <Text className="itemLineParts">
              <span>{drawer.measurements.width}</span>
              <X size={12} weight="bold" />
              <span>{drawer.measurements.height}</span>
            </Text>
          </li>
        )
      })}
    </ul>
  )
}