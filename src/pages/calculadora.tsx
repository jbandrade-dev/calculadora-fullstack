import { Container } from "../components/Container";
import { FormNewModule } from "../components/FormNewModule";
import { Slide } from "../components/Slide";

export default function ModulesCalc() {
  return (
    <div className="">
      <Container>
        <div className="grid gap-6 wrapper pc:px-6 pc:grid-cols-12 mob:grid-cols-1 tablet:grid-cols-1">
          <div className="pc:col-span-4">
            <FormNewModule />
          </div>
          <div className="pc:col-span-8 pc:h-fit mob:mt-4 pc:mt-0 mob:px-6 tablet:px-6 pc:px-0">
            <Slide />
          </div>
        </div>
      </Container>
    </div>
  );
}
