import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// --- DADOS REAIS DO CSV ---

const GERES_OPTIONS = [
  "I Geres", "II Geres", "III Geres", "IV Geres", "V Geres", 
  "VI Geres", "VII Geres", "VIII Geres", "IX Geres", "X Geres", 
  "XI Geres", "XII Geres"
];

const ITEMS_OPTIONS = [
  "CAF (CIRURGIA DE ALTA FREQUÊNCIA)",
  "CONSULTA - DISPOSITIVO INTRAUTERINO (DIU)",
  "CONSULTA - PÉ DIABÉTICO",
  "CONSULTA EM CARDIOLOGIA",
  "CONSULTA EM CIRURGIA GERAL",
  "CONSULTA EM CLÍNICA MÉDICA",
  "CONSULTA EM DERMATOLOGIA",
  "CONSULTA EM ENDOCRINOLOGIA",
  "CONSULTA EM GASTROENTEROLOGIA",
  "CONSULTA EM GINECOLOGIA",
  "CONSULTA EM NEUROLOGIA ADULTO",
  "CONSULTA EM OFTALMOLOGIA GERAL",
  "CONSULTA EM ORTOPEDIA",
  "CONSULTA EM OTORRINOLARINGOLOGIA",
  "CONSULTA EM PEDIATRIA",
  "CONSULTA EM PNEUMOLOGIA",
  "CONSULTA EM PSICOLOGIA",
  "CONSULTA EM PSIQUIATRIA",
  "CONSULTA EM UROLOGIA",
  "REABILITAÇÃO FÍSICA E FISIOTERAPIA ADULTO"
];

// Adicionei Unidades também, pois costuma ser o primeiro campo
const UNIDADES_OPTIONS = [
  "US 115 HOSPITAL GERAL DE AREIAS",
  "IMIP - INSTITUTO DE MEDICINA INTEGRAL",
  "PROCAPE",
  "REAL HOSPITAL PORTUGUES",
  "SEOPE",
  "CISAM - RECIFE",
  "HAM - HOSPITAL AGAMENON MAGALHAES"
];

interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "dropdown";
  placeholder?: string;
  optionsKey?: string; 
}

interface FormSectionProps {
  title: string;
  fields: FormFieldConfig[];
}

const FormSection = ({ title, fields }: FormSectionProps) => {

  const getOptions = (field: FormFieldConfig) => {
    // 1. Tenta identificar pelo TEXTO VISÍVEL (Label) + Nome
    // Convertemos tudo para minúsculo para facilitar a busca
    const textToCheck = (field.label + " " + field.name).toLowerCase();
    
    // Palavras-chave para GERES
    if (textToCheck.includes("geres") || textToCheck.includes("regional") || textToCheck.includes("desti")) {
      return GERES_OPTIONS;
    }
    
    // Palavras-chave para ITENS / ESPECIALIDADES
    if (textToCheck.includes("item") || textToCheck.includes("especialidade") || textToCheck.includes("agendamento")) {
      return ITEMS_OPTIONS;
    }

    // Palavras-chave para UNIDADES (Hospitais)
    if (textToCheck.includes("unidade") || textToCheck.includes("executante") || textToCheck.includes("hospital")) {
      return UNIDADES_OPTIONS;
    }

    // 2. MAPEAMENTO MANUAL DE EMERGÊNCIA (Caso os labels sejam genéricos)
    // Se o seu field1 for Unidade, field2 Item, field3 Geres, descomente abaixo:
    /*
    if (field.name === "field1") return UNIDADES_OPTIONS;
    if (field.name === "field2") return ITEMS_OPTIONS;
    if (field.name === "field3") return GERES_OPTIONS;
    */
    
    return []; 
  };

  return (
    <div className="form-section animate-fade-in">
      <h2 className="form-section-title">{title}</h2>
      <div className="form-grid">
        {fields.map((field) => {
          const options = getOptions(field);
          
          return (
            <div key={field.name} className="form-field">
              <Label htmlFor={field.name} className="form-label">
                {field.label}
              </Label>
              {field.type === "dropdown" ? (
                <Select>
                  <SelectTrigger id={field.name} className="w-full bg-background">
                    <SelectValue placeholder={field.placeholder || "Selecione..."} />
                  </SelectTrigger>
                  <SelectContent className="bg-popover max-h-60 overflow-y-auto">
                    {options.length > 0 ? (
                      options.map((option) => (
                        <SelectItem key={option} value={option}>
                          {option}
                        </SelectItem>
                      ))
                    ) : (
                      <SelectItem value="error" disabled className="text-muted-foreground">
                        (Sem opções automáticas para "{field.label}")
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="bg-background"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormSection;