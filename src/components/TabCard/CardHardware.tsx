import Image from "next/image";
import { CardProps } from "../constType";

import { Text } from "../Text";

export function CardHardware({ content }: CardProps) {
  return (
    <ul>
      {content.hardwares.map(hardware => {
        return (
          <article key={hardware.id}>
            {hardware.nameHardware === ""
              ? null
              :
              <li className="lineParts">
                <Image src={hardware.icon} alt="" width={30} height={30} />

                <Text className="itemLineParts flex-1 ml-4">
                  {hardware.nameHardware}
                </Text>

                <Text className="itemLineParts">
                  {hardware.measurements}
                </Text>
              </li>
            }
          </article>
        )
      })}
    </ul>
  )
}

