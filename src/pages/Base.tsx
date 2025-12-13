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

const Base = () => {
  const [year, setYear] = useState<string>("");
  const [monthYear, setMonthYear] = useState({ month: "", year: "" });
  const [dateTime, setDateTime] = useState<string>("");

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
                {/* Column 1: Year only */}
                <TableCell className="whitespace-nowrap min-w-[120px]">
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
                </TableCell>

                {/* Column 2: Month and Year */}
                <TableCell className="whitespace-nowrap min-w-[200px]">
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
                </TableCell>

                {/* Columns 3-20: Generic */}
                {Array.from({ length: 18 }, (_, index) => (
                  <TableCell key={index + 2} className="whitespace-nowrap">
                    —
                  </TableCell>
                ))}

                {/* Column 21: Full DateTime */}
                <TableCell className="whitespace-nowrap min-w-[220px]">
                  <Input
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    className="w-[200px]"
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Base;
