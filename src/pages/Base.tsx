import Header from "@/components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const columns = Array.from({ length: 21 }, (_, i) => `Coluna ${i + 1}`);

const Base = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Base</h1>
        <div className="overflow-x-auto rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col, index) => {
                  const colNumber = index + 1;
                  const isRed = colNumber >= 15 && colNumber <= 20;
                  return (
                    <TableHead 
                      key={index} 
                      className={`whitespace-nowrap ${isRed ? 'bg-red-500 text-white' : 'bg-blue-500 text-white'}`}
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
                  const isRed = colNumber >= 15 && colNumber <= 20;
                  return (
                    <TableCell 
                      key={index} 
                      className={`whitespace-nowrap ${isRed ? 'bg-red-100' : 'bg-blue-100'}`}
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