import { Metadata } from "next";
import { Wizard } from "../../models/wizard";
import WizardCard from "../../components/wizardCard";
import { wizardService } from "../../lib/api/apiServices";


export const metadata: Metadata = {
  title: "Wizards",
  description: "Explore the wizards of Hogwarts",
};

export default async function Page() {
  const wizards: Wizard[] | undefined = await wizardService.getAll().catch(error => undefined);

  return (
    <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center ">
      <h1 className="text-xl font-bold">Wizards </h1>

      {wizards &&
        wizards.map((wizard) => (
          <WizardCard wizard={wizard} key={`card-${wizard.id}`} />
        ))}
    </div>
  );
}
