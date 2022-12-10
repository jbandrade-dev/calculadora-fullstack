import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Button } from "../Button";
import { NewProject } from "./NewProject";
import { ProjectsContext } from "../../contexts/ProjectsContext";

const newProjectFormValidationSchema = zod.object({
  nameProject: zod.string().min(1, "Nome do projeto"),
});

type NewProjectFormData = zod.infer<typeof newProjectFormValidationSchema>;

export function FormNewProject() {
  const { createNewProject } = useContext(ProjectsContext);
  const newProjectForm = useForm<NewProjectFormData>({
    resolver: zodResolver(newProjectFormValidationSchema),
  });

  const { handleSubmit } = newProjectForm;

  function handleCreateNewProject(data: NewProjectFormData) {
    createNewProject(data);
  }

  return (
    <FormProvider {...newProjectForm}>
      <form
        className="pc:col-span-4 w-full pc:h-screen mob:mb-2 px-6"
        onSubmit={handleSubmit(handleCreateNewProject)}
      >
        <NewProject />

        <Button
          className="py-2 bg-purple-600 rounded text-lg w-full transition-colors focus:ring-2 ring-white mt-4 uppercase"
          type="submit"
        >
          Novo Projeto
        </Button>
      </form>
    </FormProvider>
  );
}
