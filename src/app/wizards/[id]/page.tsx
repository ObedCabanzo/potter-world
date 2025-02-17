import { Metadata } from "next";
import { Wizard } from "../../../models/wizard";
import { Elixir } from "../../../models/elixir";
import { wizardService } from "../../../lib/api/apiServices";
import { linksMap } from "../../../data/links";
import CustomButton from "../../../components/customButton";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const param = await params;
    const wizard = await wizardService.getById(param.id);
    if (wizard && wizard.firstName) {
      return {
        title: wizard.firstName,
      };
    } else {
      return {
        title: "Not found",
      };
    }
  } catch (error) {
    return {
      title: "Not found",
    };
  }
}

export default async function WizardPage({
  params,
}: {
  params: { id: string };
}) {
  const param = await params;
  const wizard: Wizard | undefined = await wizardService
    .getById(param.id)
    .catch((error) => undefined);

  const handleUnknown = (value: string | undefined) => {
    return value ? value : "Unknown";
  };

  return (
    <>
      {wizard?.id && (
        <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
          <div>
            <h1 className="text-xl font-bold  ">{wizard.firstName} {wizard.lastName}</h1>

            {wizard.elixirs.length > 0 && (
              <h2 className="text-lg font-semibold mt-4">Elixirs</h2>
            )}
            <div className="flex flex-col mt-2 gap-2">
              {wizard.elixirs.map((elixir: Elixir) => (
                <div
                  className="flex gap-8 items-center justify-center"
                  key={`ingredient-${elixir.id}`}
                >
                  <p>{elixir.name}</p>
                  <CustomButton
                    url={`${linksMap["elixirs"].url}/${elixir.id}`}
                    text="View more"
                    trackText={`btn-view-elixir-${elixir.id}`}
                    className="px-4 py-2 bg-black rounded-lg text-white hover:bg-gray-800"
                    />
                
                </div>
              ))}
            </div>
            
            

          </div>
        </div>
      )}
      {wizard?.id === undefined && (
        <div className="flex flex-col gap-4 py-8 h-full w-full items-center justify-center text-center ">
          <h1 className="text-xl font-bold  ">Wizard not found</h1>
        </div>
      )}
      
    </>
  );
}
