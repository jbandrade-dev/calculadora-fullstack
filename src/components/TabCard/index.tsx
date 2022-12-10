import { Tab } from "@headlessui/react";
import { CardParts } from "./CardParts";
import { HeaderCard } from "./HeaderCard";
import { CardHardware } from "./CardHardware";
import { CardDrawer } from "./CardDrawer";
import { CardProps, classNames } from "../constType";


export function TabCard({ content }: CardProps) {

  return (
    <div className="w-full bg-gray-800 rounded px-2">
      <HeaderCard name={content.nameModule} moduleToDeleteId={content.id} />
      <div className="bg-gray-800">
        <Tab.Group>
          <Tab.List className="flex space-x-1">
            <Tab id="partsTab"
              className={({ selected }) =>
                classNames(
                  "w-full rounded py-2 text-lg leading-5 bg-black text-black",
                  "ring-white ring-opacity-60 ring-offset-1 focus:outline-none focus:ring-1",
                  selected
                    ? "bg-cyan-500 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <span>Peças</span>
            </Tab>

            <Tab id="hardwareTab"
              className={({ selected }) =>
                classNames(
                  "w-full rounded py-2 text-lg leading-5 bg-black text-black",
                  "ring-white ring-opacity-60 ring-offset-1 focus:outline-none focus:ring-1",
                  selected
                    ? "bg-cyan-500 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              <span className="">Ferragens</span>
            </Tab>

            <Tab id="drawersTab"
              className={({ selected }) =>
                classNames(
                  "w-full rounded py-2 text-lg leading-5 bg-black text-black",
                  "ring-white ring-opacity-60 ring-offset-1 focus:outline-none focus:ring-1",
                  selected
                    ? "bg-cyan-500 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white",
                  content.isDrawer
                    ? ""
                    : "hidden"
                )
              }
            >
              <span className="">Gavetas</span>
            </Tab>
          </Tab.List>

          <Tab.Panels className="rounded-b">
            <Tab.Panel id="cardParts"
              className={classNames(
                "mt-4 h-48",
                ""
              )}
            >
              <CardParts content={content} />
            </Tab.Panel>

            <Tab.Panel id="cardHardwares"
              className={classNames(
                "mt-4 h-48",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <CardHardware content={content} />
            </Tab.Panel>

            <Tab.Panel id="cardDrawers"
              className={classNames(
                "mt-4 h-48",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
              )}
            >
              <CardDrawer content={content} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}