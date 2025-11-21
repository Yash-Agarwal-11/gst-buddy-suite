import { GSTCalculatorCard } from "@/components/GSTCalculatorCard";
import { GSTFormulaCard } from "@/components/GSTFormulaCard";
import { motion } from "framer-motion";
import { Calculator } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
              <Calculator className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Radhey GST Calculator
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete GST calculation toolkit with formulas, examples, and interactive calculator
          </p>
        </motion.div>

        <div className="grid gap-6 lg:gap-8">
          <GSTCalculatorCard />
          <GSTFormulaCard />
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>Professional GST Calculator • Built with React, TypeScript & Tailwind CSS</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
