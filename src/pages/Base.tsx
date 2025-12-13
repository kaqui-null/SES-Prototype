import { useState } from "react";
import Header from "@/components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const columns = Array.from({ length: 21 }, (_, i) => `Coluna ${i + 1}`);

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 50 }, (_, i) => currentYear - 25 + i);
const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const integerColumns = [6, 7, 8, 10, 11, 13, 15, 16, 17];
const percentageColumns = [18, 19, 20];

const Base = () => {
  const [year, setYear] = useState<string>("");
  const [monthYear, setMonthYear] = useState({ month: "", year: "" });
  const [integerValues, setIntegerValues] = useState<Record<number, string>>({});
  const [percentageValues, setPercentageValues] = useState<Record<number, string>>({});
  const [dateTime, setDateTime] = useState({
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: ""
  });

  const handleIntegerChange = (col: number, value: string) => {
    const numericValue = value.replace(/\D/g, "");
    setIntegerValues(prev => ({ ...prev, [col]: numericValue }));
  };

  const handlePercentageChange = (col: number, value: string) => {
    const numericValue = value.replace(/[^\d.,]/g, "");
    setPercentageValues(prev => ({ ...prev, [col]: numericValue }));
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const renderCell = (colIndex: number) => {
    const colNumber = colIndex + 1;

    // Coluna 1: Apenas Ano
    if (colNumber === 1) {
      return (
        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Ano" />
          </SelectTrigger>
          <SelectContent>
            {years.map((y) => (
              <SelectItem key={y} value={y.toString()}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );
    }

    // Coluna 2: Mês e Ano
    if (colNumber === 2) {
      return (
        <div className="flex gap-2">
          <Select 
            value={monthYear.month} 
            onValueChange={(v) => setMonthYear(prev => ({ ...prev, month: v }))}
          >
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m, i) => (
                <SelectItem key={i} value={(i + 1).toString()}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select 
            value={monthYear.year} 
            onValueChange={(v) => setMonthYear(prev => ({ ...prev, year: v }))}
          >
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y.toString()}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    // Colunas de inteiros
    if (integerColumns.includes(colNumber)) {
      return (
        <Input
          type="text"
          inputMode="numeric"
          value={integerValues[colNumber] || ""}
          onChange={(e) => handleIntegerChange(colNumber, e.target.value)}
          placeholder="0"
          className="w-[80px]"
        />
      );
    }

    // Colunas de porcentagem
    if (percentageColumns.includes(colNumber)) {
      return (
        <div className="flex items-center gap-1">
          <Input
            type="text"
            inputMode="decimal"
            value={percentageValues[colNumber] || ""}
            onChange={(e) => handlePercentageChange(colNumber, e.target.value)}
            placeholder="0"
            className="w-[70px]"
          />
          <span className="text-muted-foreground">%</span>
        </div>
      );
    }

    // Coluna 21: Data e Hora (DD/MM/AAAA HH:MM)
    if (colNumber === 21) {
      return (
        <div className="flex gap-1 items-center">
          <Select value={dateTime.day} onValueChange={(v) => setDateTime(prev => ({ ...prev, day: v }))}>
            <SelectTrigger className="w-[60px]">
              <SelectValue placeholder="Dia" />
            </SelectTrigger>
            <SelectContent>
              {days.map((d) => (
                <SelectItem key={d} value={d.toString()}>
                  {d.toString().padStart(2, "0")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span>/</span>
          <Select value={dateTime.month} onValueChange={(v) => setDateTime(prev => ({ ...prev, month: v }))}>
            <SelectTrigger className="w-[60px]">
              <SelectValue placeholder="Mês" />
            </SelectTrigger>
            <SelectContent>
              {months.map((m, i) => (
                <SelectItem key={i} value={(i + 1).toString()}>
                  {(i + 1).toString().padStart(2, "0")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span>/</span>
          <Select value={dateTime.year} onValueChange={(v) => setDateTime(prev => ({ ...prev, year: v }))}>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="Ano" />
            </SelectTrigger>
            <SelectContent>
              {years.map((y) => (
                <SelectItem key={y} value={y.toString()}>
                  {y}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span className="mx-1">às</span>
          <Select value={dateTime.hour} onValueChange={(v) => setDateTime(prev => ({ ...prev, hour: v }))}>
            <SelectTrigger className="w-[60px]">
              <SelectValue placeholder="HH" />
            </SelectTrigger>
            <SelectContent>
              {hours.map((h) => (
                <SelectItem key={h} value={h.toString()}>
                  {h.toString().padStart(2, "0")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span>:</span>
          <Select value={dateTime.minute} onValueChange={(v) => setDateTime(prev => ({ ...prev, minute: v }))}>
            <SelectTrigger className="w-[60px]">
              <SelectValue placeholder="MM" />
            </SelectTrigger>
            <SelectContent>
              {minutes.map((m) => (
                <SelectItem key={m} value={m.toString()}>
                  {m.toString().padStart(2, "0")}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );
    }

    // Colunas genéricas
    return "—";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Base</h1>
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col, index) => (
                  <TableHead key={index} className="whitespace-nowrap">
                    {col}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {columns.map((_, index) => (
                  <TableCell key={index} className="whitespace-nowrap">
                    {renderCell(index)}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Base;
