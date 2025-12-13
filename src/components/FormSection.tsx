import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FormFieldConfig {
  name: string;
  label: string;
  type: "text" | "dropdown";
  placeholder?: string;
}

interface FormSectionProps {
  title: string;
  fields: FormFieldConfig[];
}

const FormSection = ({ title, fields }: FormSectionProps) => {
  return (
    <div className="form-section animate-fade-in">
      <h2 className="form-section-title">{title}</h2>
      <div className="form-grid">
        {fields.map((field) => (
          <div key={field.name} className="form-field">
            <Label htmlFor={field.name} className="form-label">
              {field.label}
            </Label>
            {field.type === "dropdown" ? (
              <Select>
                <SelectTrigger id={field.name} className="w-full bg-background">
                  <SelectValue placeholder={field.placeholder || "Select an option"} />
                </SelectTrigger>
                <SelectContent className="bg-popover">
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                  <SelectItem value="option3">Option 3</SelectItem>
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
        ))}
      </div>
    </div>
  );
};

export default FormSection;
