import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const formulas = [
  {
    title: "Input GST",
    formula: "Purchase Price × (GST% / 100)",
    description: "GST paid on purchases",
  },
  {
    title: "Output GST",
    formula: "Selling Price × (GST% / 100)",
    description: "GST collected on sales",
  },
  {
    title: "GST Payable",
    formula: "Output GST - Input GST",
    description: "Net GST to be paid to government",
  },
  {
    title: "Profit",
    formula: "(Selling - Purchase) - GST Payable",
    description: "Net profit after GST",
  },
];

const example = {
  purchase: 100,
  selling: 125,
  gst: 18,
  inputGST: 18,
  outputGST: 22.5,
  gstPayable: 4.5,
  profit: 20.5,
};

export const GSTFormulaCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Card className="shadow-lg border-border/50">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-foreground">GST Calculation Guide</CardTitle>
          <CardDescription>Understanding GST formulas and calculations</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {formulas.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="p-4 rounded-lg bg-secondary/50 border border-border/50"
              >
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <code className="text-sm text-primary font-mono block mb-2">{item.formula}</code>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-lg">Sample Calculation</h3>
            <div className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Purchase Price:</span>
                  <span className="font-medium text-foreground">₹{example.purchase}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GST Rate:</span>
                  <span className="font-medium text-foreground">{example.gst}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Selling Price:</span>
                  <span className="font-medium text-foreground">₹{example.selling}</span>
                </div>
                <div className="h-px bg-border my-3" />
                <div className="flex justify-between text-primary">
                  <span className="font-medium">Input GST:</span>
                  <span className="font-semibold">₹{example.inputGST}</span>
                </div>
                <div className="flex justify-between text-primary">
                  <span className="font-medium">Output GST:</span>
                  <span className="font-semibold">₹{example.outputGST}</span>
                </div>
                <div className="flex justify-between text-accent">
                  <span className="font-medium">GST Payable:</span>
                  <span className="font-semibold">₹{example.gstPayable}</span>
                </div>
                <div className="flex justify-between text-success">
                  <span className="font-medium">Profit:</span>
                  <span className="font-semibold">₹{example.profit}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-foreground text-lg">Excel Sheet Reference</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 font-semibold text-foreground">Column</th>
                    <th className="text-left p-2 font-semibold text-foreground">Excel Formula</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="p-2">Input GST</td>
                    <td className="p-2 font-mono text-xs">=A2*(C2/100)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-2">Output GST</td>
                    <td className="p-2 font-mono text-xs">=B2*(C2/100)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-2">GST Payable</td>
                    <td className="p-2 font-mono text-xs">=E2-D2</td>
                  </tr>
                  <tr>
                    <td className="p-2">Profit</td>
                    <td className="p-2 font-mono text-xs">=(B2-A2)-F2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground italic">
              Where: A=Purchase Price, B=Selling Price, C=GST%, D=Input GST, E=Output GST, F=GST Payable
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
