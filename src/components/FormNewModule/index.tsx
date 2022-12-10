import { useContext, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

import { NewModule } from "./NewModule";
import { Button } from "../Button";
import {
  ModulesContext,
  NewModuleFormData,
  newModuleFormValidationSchema,
} from "../../contexts/ModulesContext";

// const newModuleFormValidationSchema = zod.object({
//   nameModule: zod.string().min(1, "Nome do módulo"),
//   moduleType: zod.string().min(1, "Tipo de módulo"),
//   frontType: zod.string().min(1, "Tipo de frente"),
//   knobType: zod.string().min(1, "Tipo de puxador"),
//   hingsType: zod.string().min(1, "Tipo de dobradiça"),
//   slideType: zod.string().min(1, "Tipo de corrediça"),
//   bottomType: zod.string().min(1, "Fixação do fundo"),
//   boxThickness: zod.number().min(1, "Espessura de caixa"),
//   frontThickness: zod.number().min(1, "Espessura de frente"),
//   bottomThickness: zod.number().min(1, "Espessura de fundo"),
//   boxWidth: zod
//     .number()
//     .min(200, "O módulo precisa ter de no mínimo 5 milímetros.")
//     .max(1000, "O módulo precisa ter de no máximo 60 milímetros."),
//   boxHeight: zod
//     .number()
//     .min(300, "O módulo precisa ter de no mínimo 5 milímetros.")
//     .max(2700, "O módulo precisa ter de no máximo 60 milímetros."),
//   boxDepth: zod
//     .number()
//     .min(250, "O módulo precisa ter de no mínimo 5 milímetros.")
//     .max(600, "O módulo precisa ter de no máximo 60 milímetros."),
// });

// type NewModuleFormData = zod.infer<typeof newModuleFormValidationSchema>;

export function FormNewModule() {
  const { handleSubmitModules } = useContext(ModulesContext);
  const newModuleForm = useForm<NewModuleFormData>({
    resolver: zodResolver(newModuleFormValidationSchema),
  });

  const { handleSubmit, watch, reset } = newModuleForm;

  // ainda preciso resetar o frontType quando o watch do moduleType mudar


  const moduleType = watch("moduleType");

  const onWatch = moduleType === "Gaveteiro" ? true : false;

  return (
    <FormProvider {...newModuleForm}>
      <form
        autoComplete="off"
        className="mob:px-6 tablet:px-6 pc:px-0 w-full mob:mb-2"
        onSubmit={handleSubmit(handleSubmitModules)}
      >
        <NewModule onWatch={onWatch} />
        <Button
          className="py-2 bg-purple-600 rounded text-lg w-full transition-colors mt-4 uppercase"
          type="submit"
        >
          Novo módulo
        </Button>
      </form>
    </FormProvider>
  );
}
