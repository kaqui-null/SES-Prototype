import Header from "@/components/Header";
import FormSection from "@/components/FormSection";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const sectionOneFields = [
  { name: "field1", label: "Unidade Executante", type: "dropdown" as const, placeholder: "Selecione unidade" },
  { name: "field2", label: "Item de Agendamento", type: "dropdown" as const, placeholder: "Selecione item" },
  { name: "field3", label: "Cota total Unidade/Item", type: "text" as const},
  { name: "field4", label: "Fila Geres", type: "text" as const},
  { name: "field5", label: "Cota Programada (Fila)", type: "text" as const},
  { name: "field6", label: "Geres Receptora", type: "dropdown" as const, placeholder: "Selecione Geres"},
  { name: "field7", label: "Apoiador Responsável", type: "text" as const},
];

const sectionTwoFields = [
  { name: "field8", label: "Unidade Executante", type: "dropdown" as const, placeholder: "Selecione unidade" },
  { name: "field9", label: "Item de Agendamento", type: "dropdown" as const, placeholder: "Selecione item" },
  { name: "field10", label: "Geres Receptora", type: "dropdown" as const, placeholder: "Selecione Geres" },
  { name: "field11", label: "Remanejamento Entrada", type: "text" as const},
  { name: "field12", label: "Remanejamento Saída", type: "text" as const},
  { name: "field13", label: "Apoiador Responsável", type: "text" as const},
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
