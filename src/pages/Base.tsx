import Header from "@/components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Lista exata extraída do arquivo BASE.csv
const BASE_COLUMNS = [
  "ANO",
  "MÊS",
  "SEMANA EPIDEMIOLÓGICA",
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Base de Dados (Cotas)</h1>
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