import { Chat } from "phosphor-react";
import * as Popover from "@radix-ui/react-popover";
import { WidgetForm } from "../components/WidgetForm";
import { trpc } from "../utils/trpc";
import { FormNewProject } from "../components/FormNewProject";
import { Container } from "../components/Container";

export default function Home() {
  return (
    <Container>
      <FormNewProject />

      <div className="fixed w-10 bottom-8 right-8 z-50">
        <Popover.Root>
          <Popover.Portal>
            <Popover.Content align="end" sideOffset={16}>
              <WidgetForm />
            </Popover.Content>
          </Popover.Portal>

          <Popover.Trigger className="bg-violet-500 rounded-full h-12 w-12 flex items-center justify-center hover:bg-violet-600">
            <Chat className="text-white h-5 w-5" weight="bold" />
          </Popover.Trigger>
        </Popover.Root>
      </div>
    </Container>
  );
}








{
  /* <h1 className="text-4xl text-white font-bold">{data?.message}</h1> */
}
