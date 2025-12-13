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
import { Input } from "@/components/ui/input";

const columns = Array.from({ length: 15 }, (_, i) => `Coluna ${i + 1}`);
const integerColumns = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const CotasRecebidasPorGeres = () => {
  const [textValues, setTextValues] = useState<Record<number, string>>({});
  const [integerValues, setIntegerValues] = useState<Record<number, string>>({});

  const handleTextChange = (col: number, value: string) => {
    setTextValues(prev => ({ ...prev, [col]: value }));
  };

  const handleIntegerChange = (col: number, value: string) => {
    const numericValue = value.replace(/\D/g, "");
    setIntegerValues(prev => ({ ...prev, [col]: numericValue }));
  };

  const calculateSum = () => {
    return integerColumns.reduce((sum, col) => {
      const value = parseInt(integerValues[col] || "0", 10);
      return sum + (isNaN(value) ? 0 : value);
    }, 0);
  };

  const renderCell = (colIndex: number) => {
    const colNumber = colIndex + 1;

    // Colunas 1-2: Texto
    if (colNumber <= 2) {
      return (
        <Input
          type="text"
          value={textValues[colNumber] || ""}
          onChange={(e) => handleTextChange(colNumber, e.target.value)}
          placeholder="Texto"
          className="w-[120px]"
        />
      );
    }

    // Colunas 3-14: Inteiros
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

    // Coluna 15: Soma
    if (colNumber === 15) {
      return (
        <span className="font-bold">{calculateSum()}</span>
      );
    }

    return "—";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Cotas Recebidas por Geres</h1>
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col, index) => {
                  const colNumber = index + 1;
                  const isGray = colNumber === 15;
                  return (
                    <TableHead 
                      key={index} 
                      className={`whitespace-nowrap ${isGray ? 'bg-gray-500 text-white' : 'bg-blue-500 text-white'}`}
                    >
                      {col}
                    </TableHead>
                  );
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                {columns.map((_, index) => {
                  const colNumber = index + 1;
                  const isGray = colNumber === 15;
                  return (
                    <TableCell 
                      key={index} 
                      className={`whitespace-nowrap ${isGray ? 'bg-gray-100' : 'bg-blue-100'}`}
                    >
                      {renderCell(index)}
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