import { useFormContext } from "react-hook-form";

export function NewProject() {
  const { register } = useFormContext();

  return (
    <div className="grid gap-2 grid-cols-12">
      <label htmlFor="nameProject">Nome:</label>
      <input
        id="nameProject"
        className="input"
        placeholder="Nome do projeto"
        {...register("nameProject")}
      />

      <label htmlFor="nameProject">Ambiente:</label>
      <input
        id="nameProject"
        className="input"
        placeholder="Nome do ambiente"
        {...register("ambientName")}
      />
    </div>
  );
}
