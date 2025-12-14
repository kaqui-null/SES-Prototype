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

// Lista exata extraída do arquivo BASE.csv
const BASE_COLUMNS = [
  "ANO",
  "MÊS",
  "ESPECIALIDADE",
  "UNIDADE EXECUTANTE",
  "ITEM DE AGENDAMENTO",
  "COTA TOTAL UNIDADE/ITEM",
  "FILA GERES",
  "COTA PROGRAMADA (FILA)",
  "GERES RECEPTORA",
  "REMANEJAMENTO ENTRADA",
  "REMANEJAMENTO SAÍDA",
  "APOIADOR RESPONSÁVEL",
  "UTILIZADO",
  "UTILIZADO x SALDO FINAL",
  "COTA 1° REMANEJMANETO",
  "*COTA FINAL GERES",
  "COTA DISPONÍVEL GERES",
  "TOTAL AGENDADOS",
  "*% PERDA PRIMÁRIA",
  "*% AGENDAMENTO POR COTA PROGRAMADA",
  "*% EXECUÇÃO POR COTA PROGRAMADA",
  "DATA/HORA"
];

const Base = () => {
  const [unidadeExecutante, setUnidadeExecutante] = useState<string>("");
  const [itemAgendamento, setItemAgendamento] = useState<string>("");
  const [geresReceptora, setGeresReceptora] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Base de Dados (Cotas)</h1>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Unidade Executante</label>
            <Select value={unidadeExecutante} onValueChange={setUnidadeExecutante}>
              <SelectTrigger className="w-[220px] bg-background">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="unidade1">Unidade 1</SelectItem>
                <SelectItem value="unidade2">Unidade 2</SelectItem>
                <SelectItem value="unidade3">Unidade 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">Item de Agendamento</label>
            <Select value={itemAgendamento} onValueChange={setItemAgendamento}>
              <SelectTrigger className="w-[220px] bg-background">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="todos">Todos</SelectItem>
                <SelectItem value="item1">Item 1</SelectItem>
                <SelectItem value="item2">Item 2</SelectItem>
                <SelectItem value="item3">Item 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-foreground">GERES Receptora</label>
            <Select value={geresReceptora} onValueChange={setGeresReceptora}>
              <SelectTrigger className="w-[220px] bg-background">
                <SelectValue placeholder="Selecione..." />
              </SelectTrigger>
              <SelectContent className="bg-background">
                <SelectItem value="todos">Todas</SelectItem>
                <SelectItem value="geres1">GERES I</SelectItem>
                <SelectItem value="geres2">GERES II</SelectItem>
                <SelectItem value="geres3">GERES III</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                {BASE_COLUMNS.map((col, index) => {
                  // Lógica: Se o nome começar com "*" ou for um KPI crítico, fica vermelho
                  const isRed = col.startsWith("*") || col.includes("TOTAL AGENDADOS") || col.includes("COTA DISPONÍVEL");
                  
                  return (
                    <TableHead 
                      key={index} 
                      className={`whitespace-nowrap px-4 py-2 ${isRed ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
                    >
                      {col}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* Exemplo de linha vazia para visualizar a estrutura */}
              <TableRow>
                {BASE_COLUMNS.map((col, index) => {
                  const isRed = col.startsWith("*") || col.includes("TOTAL AGENDADOS") || col.includes("COTA DISPONÍVEL");
                  return (
                    <TableCell 
                      key={index} 
                      className={`whitespace-nowrap border-b ${isRed ? 'bg-red-50' : 'bg-blue-50'}`}
                    >
                      —
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
};

export default Base;