import { useFormContext } from "react-hook-form";

interface NewModuleProps {
  onWatch: boolean;
}

export function NewModule({ onWatch }: NewModuleProps) {
  const { register } = useFormContext();

  return (
    <article className="grid gap-2 grid-cols-12">
      <label htmlFor="nameModule">Nome:</label>
      <input
        id="nameModule"
        className="input backdrop:bg-gray-800"
        placeholder="Nome do módulo"
        {...register("nameModule")}
      />

      <label htmlFor="boxWidth">Largura:</label>
      <input
        id="boxWidth"
        className="input"
        placeholder="Largura em milímetros"
        min={200}
        max={1000}
        {...register("boxWidth", { valueAsNumber: true })}
      />

      <label htmlFor="boxHeight">Altura:</label>
      <input
        id="boxHeight"
        className="input w-full"
        placeholder="Altura em milímetros"
        min={300}
        max={2700}
        {...register("boxHeight", { valueAsNumber: true })}
      />

      <label htmlFor="boxDepth">Profundidade:</label>
      <input
        id="boxDepth"
        className="input"
        placeholder="Profundidade em milímetros"
        min={250}
        max={600}
        {...register("boxDepth", { valueAsNumber: true })}
      />

      <label htmlFor="moduleType">Módulo:</label>
      <select
        defaultValue={"DEFAULT"}
        id="moduleType"
        className="input"
        {...register("moduleType")}
      >
        <optgroup className="bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
          <option value="DEFAULT" disabled>
            Tipo de módulo
          </option>
          <option>Inferior</option>
          <option>Superior</option>
          <option>Gaveteiro</option>
        </optgroup>
      </select>

      <label htmlFor="frontType">Frente:</label>
      <select
        defaultValue={"DEFAULT"}
        id="frontType"
        className="input"
        {...register("frontType")}
      >
        <optgroup className="bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
          <option value="DEFAULT" disabled>
            Tipo de frente
          </option>
          <option className={onWatch ? "hidden" : ""}>1 porta</option>
          <option className={onWatch ? "hidden" : ""}>2 portas</option>
          <option className={onWatch ? "" : "hidden"}>2 gavetões</option>
          <option className={onWatch ? "" : "hidden"}>4 gavetas</option>
        </optgroup>
      </select>

      <label htmlFor="hingsType" className={onWatch ? "hidden" : ""}>
        Dobradiças:
      </label>
      <select
        defaultValue={"DEFAULT"}
        id="hingsType"
        className={onWatch ? "hidden" : "input"}
        {...register("hingsType")}
      >
        <optgroup className="bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
          <option value="DEFAULT" disabled>
            Tipo de dobradiça
          </option>
          <option className="">Reta</option>
          {/* <option className="">Curva</option> */}
        </optgroup>
      </select>

      <label htmlFor="slideType" className={onWatch ? "" : "hidden"}>
        Corrediças:
      </label>
      <select
        defaultValue={"DEFAULT"}
        id="slideType"
        className={onWatch ? "input" : "hidden"}
        {...register("slideType")}
      >
        <optgroup className="bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
          <option value="DEFAULT" disabled>
            Tipo de corrediça
          </option>
          <option className="">Telescópica</option>
          {/* <option className="">Telescópica Large</option> */}
        </optgroup>
      </select>

      <label htmlFor="knobType">Puxador:</label>
      <select
        defaultValue={"DEFAULT"}
        id="knobType"
        className="input"
        {...register("knobType")}
      >
        <optgroup className="bg-gray-800  absolute w-full overflow-auto rounded px-4">
          <option value="DEFAULT" disabled>
            Tipo de puxador
          </option>
          <option className="text-gray-100">Ponto</option>
          <option className="text-gray-100">Tubo</option>
          <option className="text-gray-100">Embutido</option>
          <option className="text-gray-100">Leve toque</option>
        </optgroup>
      </select>

      <label htmlFor="bottomType">Fixação fundo:</label>
      <select
        defaultValue={"DEFAULT"}
        id="bottomType"
        className="input"
        {...register("bottomType")}
      >
        <optgroup className="bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
          <option value="DEFAULT" disabled>
            Tipo de fixação
          </option>
          <option>Aparafusado</option>
          <option>Goivetado</option>
        </optgroup>
      </select>

      <label htmlFor="boxThickness">Caixa:</label>
      <select
        defaultValue={"DEFAULT"}
        id="boxThickness"
        className="input"
        {...register("boxThickness", { valueAsNumber: true })}
      >
        <optgroup className="bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
          <option value="DEFAULT" disabled>
            Chapa da caixa
          </option>
          <option>15</option>
          <option>18</option>
        </optgroup>
      </select>

      <label htmlFor="frontThickness">Frente:</label>
      <select
        defaultValue={"DEFAULT"}
        id="frontThickness"
        className="input"
        {...register("frontThickness", { valueAsNumber: true })}
      >
        <optgroup className="bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
          <option value="DEFAULT" disabled>
            Chapa da porta
          </option>
          <option>15</option>
          <option>18</option>
        </optgroup>
      </select>

      <label htmlFor="bottomThickness">Fundo:</label>
      <select
        defaultValue={"DEFAULT"}
        id="bottomThickness"
        className="input"
        {...register("bottomThickness", { valueAsNumber: true })}
      >
        <optgroup className="bg-gray-800 absolute mt-1 max-h-60 w-full overflow-auto rounded py-1">
          <option value="DEFAULT" disabled>
            Chapa do fundo
          </option>
          <option>3</option>
          <option>6</option>
          <option>9</option>
          <option>15</option>
        </optgroup>
      </select>
    </article>
  );
}
