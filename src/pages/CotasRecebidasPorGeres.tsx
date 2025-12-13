import Header from "@/components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Colunas exatas baseadas na estrutura do relatório CSV
const COTAS_COLUMNS = [
  "UNIDADE EXECUTANTE",
  "ITEM DE AGENDAMENTO",
  "I Geres",
  "II Geres",
  "III Geres",
  "IV Geres",
  "V Geres",
  "VI Geres",
  "VII Geres",
  "VIII Geres",
  "IX Geres",
  "X Geres",
  "XI Geres",
  "XII Geres",
  "Total Geral"
];

const CotasRecebidasPorGeres = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Cotas Recebidas por Geres</h1>
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                {COTAS_COLUMNS.map((col, index) => {
                  // Lógica: A última coluna (Total Geral) fica cinza, o resto azul
                  const isTotal = col === "Total Geral";
                  
                  return (
                    <TableHead 
                      key={index} 
                      className={`whitespace-nowrap px-4 py-2 ${isTotal ? 'bg-gray-500 text-white font-bold' : 'bg-blue-500 text-white'}`}
                    >
                      {col}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {COTAS_COLUMNS.map((col, index) => {
                  const isTotal = col === "Total Geral";
                  return (
                    <TableCell 
                      key={index} 
                      className={`whitespace-nowrap border-b ${isTotal ? 'bg-gray-100 font-medium' : 'bg-blue-50'}`}
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

export default CotasRecebidasPorGeres;