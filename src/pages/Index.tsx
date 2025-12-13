import Header from "@/components/Header";
import FormSection from "@/components/FormSection";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const sectionOneFields = [
  { name: "field1", label: "Category", type: "dropdown" as const, placeholder: "Select category" },
  { name: "field2", label: "Type", type: "dropdown" as const, placeholder: "Select type" },
  { name: "field3", label: "First Name", type: "text" as const, placeholder: "Enter first name" },
  { name: "field4", label: "Last Name", type: "text" as const, placeholder: "Enter last name" },
  { name: "field5", label: "Email Address", type: "text" as const, placeholder: "Enter email" },
  { name: "field6", label: "Status", type: "dropdown" as const, placeholder: "Select status" },
  { name: "field7", label: "Notes", type: "text" as const, placeholder: "Enter notes" },
];

const sectionTwoFields = [
  { name: "field8", label: "Department", type: "dropdown" as const, placeholder: "Select department" },
  { name: "field9", label: "Role", type: "dropdown" as const, placeholder: "Select role" },
  { name: "field10", label: "Location", type: "dropdown" as const, placeholder: "Select location" },
  { name: "field11", label: "Phone Number", type: "text" as const, placeholder: "Enter phone number" },
  { name: "field12", label: "Address", type: "text" as const, placeholder: "Enter address" },
  { name: "field13", label: "Additional Info", type: "text" as const, placeholder: "Enter additional info" },
];

const Index = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Your form has been submitted successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              DISTRIBUIÇÃO E REMANEJAMENTO DE COTAS
            </h1>
            <p className="mt-2 text-muted-foreground">
              Itens Unificados - Gestão de Cotas Nível Central
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormSection title="Liberação Agenda" fields={sectionOneFields} />
            <FormSection title="Movimentação Cota" fields={sectionTwoFields} />

            <div className="flex justify-end pt-4">
              <Button type="submit" size="lg" className="min-w-32">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Index;
