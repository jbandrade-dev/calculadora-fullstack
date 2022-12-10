import { ReactNode, createContext, useState, FormEvent } from "react";
import { trpc } from "../utils/trpc";
import * as z from "zod";

interface ModulesContextType {
  handleSubmitModules: (data: NewModuleFormData) => void;
}

interface ModulesContextProviderProps {
  children: ReactNode;
}

export const newModuleFormValidationSchema = z.object({
  nameModule: z.string().min(1, "Nome do módulo"),
  moduleType: z.string().min(1, "Tipo de módulo"),
  frontType: z.string().min(1, "Tipo de frente"),
  knobType: z.string().min(1, "Tipo de puxador"),
  hingsType: z.string().min(1, "Tipo de dobradiça"),
  slideType: z.string().min(1, "Tipo de corrediça"),
  bottomType: z.string().min(1, "Fixação do fundo"),
  boxThickness: z.number().min(1, "Espessura de caixa"),
  frontThickness: z.number().min(1, "Espessura de frente"),
  bottomThickness: z.number().min(1, "Espessura de fundo"),
  boxWidth: z
    .number()
    .min(200, "O módulo precisa ter de no mínimo 5 milímetros.")
    .max(1000, "O módulo precisa ter de no máximo 60 milímetros."),
  boxHeight: z
    .number()
    .min(300, "O módulo precisa ter de no mínimo 5 milímetros.")
    .max(2700, "O módulo precisa ter de no máximo 60 milímetros."),
  boxDepth: z
    .number()
    .min(250, "O módulo precisa ter de no mínimo 5 milímetros.")
    .max(600, "O módulo precisa ter de no máximo 60 milímetros."),
});

export type NewModuleFormData = z.infer<typeof newModuleFormValidationSchema>;

export const ModulesContext = createContext({} as ModulesContextType);

export function ModulesContextProvider({
  children,
}: ModulesContextProviderProps) {
  const { mutateAsync: createModule } = trpc.createModule.useMutation();

  async function handleSubmitModules(data: NewModuleFormData) {
    try {
      const {
        nameModule,
        boxWidth,
        boxHeight,
        boxDepth,
        moduleType,
        frontType,
        knobType,
        hingsType,
        slideType,
        bottomType,
        boxThickness,
        frontThickness,
        bottomThickness,
      } = data;

      await createModule({
        nameModule,
        boxWidth,
        boxHeight,
        boxDepth,
        moduleType,
        frontType,
        knobType,
        hingsType,
        slideType,
        bottomType,
        boxThickness,
        frontThickness,
        bottomThickness,
      });
    } catch (err) {
      alert("Erro ao enviar o módulo, tente novamente!");
    }
  }

  

  return (
    <ModulesContext.Provider
      value={{
        handleSubmitModules,
      }}
    >
      {children}
    </ModulesContext.Provider>
  );
}
