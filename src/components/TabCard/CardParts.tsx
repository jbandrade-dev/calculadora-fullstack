import Image from "next/image";
import { X } from "phosphor-react";
import { CardProps } from "../constType";

import { Text } from "../Text";

export function CardParts({ content }: CardProps) {

  return (
    <ul>
      {content.parts.map(part => {
        return (
          <article key={part.id}>
            {content.isDrawer && part.namePart === "Prateleira"
              ? null
              : content.moduleType === "Superior" && part.namePart === "Travessa"
                ? null
                :
                <li className="lineParts">
                  <Image src={part.icon} alt="" width={30} height={30} />

                  <Text className="itemLineParts flex-1 ml-4">
                    {part.namePart}
                  </Text>

                  <Text className="itemLineParts">
                    <span>{part.measurements.width}</span>
                    <X size={12} weight="bold" />
                    <span>{part.measurements.height}</span>
                  </Text>
                </li>
            }
          </article>
        )
      })}
    </ul>
  )
}

