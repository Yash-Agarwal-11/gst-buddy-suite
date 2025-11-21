import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { calculateGST, type GSTCalculation } from "@/lib/gstCalculator";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, TrendingDown, DollarSign, Receipt } from "lucide-react";

export const GSTCalculatorCard = () => {
  const [purchasePrice, setPurchasePrice] = useState<string>("100");
  const [sellingPrice, setSellingPrice] = useState<string>("125");
  const [gstPercent, setGstPercent] = useState<string>("18");
  const [result, setResult] = useState<GSTCalculation | null>(null);

  const handleCalculate = () => {
    const purchase = parseFloat(purchasePrice) || 0;
    const selling = parseFloat(sellingPrice) || 0;
    const gst = parseFloat(gstPercent) || 0;

    if (purchase >= 0 && selling >= 0 && gst >= 0) {
      const calculation = calculateGST(purchase, selling, gst);
      setResult(calculation);
    }
  };

  const handleReset = () => {
    setPurchasePrice("");
    setSellingPrice("");
    setGstPercent("");
    setResult(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg border-border/50">
        <CardHeader className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Calculator className="h-5 w-5 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl font-bold text-foreground">GST Calculator</CardTitle>
          </div>
          <CardDescription>Calculate Input GST, Output GST, GST Payable, and Profit</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="purchase" className="text-foreground font-medium">
                Purchase Price (₹)
              </Label>
              <Input
                id="purchase"
                type="number"
                placeholder="100"
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="selling" className="text-foreground font-medium">
                Selling Price (₹)
              </Label>
              <Input
                id="selling"
                type="number"
                placeholder="125"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                className="border-border/50 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="gst" className="text-foreground font-medium">
                GST Rate (%)
              </Label>
              <Input
                id="gst"
                type="number"
                placeholder="18"
                value={gstPercent}
                onChange={(e) => setGstPercent(e.target.value)}
                className="border-border/50 focus:border-primary"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleCalculate}
              className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              <Calculator className="mr-2 h-4 w-4" />
              Calculate
            </Button>
            <Button onClick={handleReset} variant="outline" className="border-border/50">
              Reset
            </Button>
          </div>

          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                <div className="grid gap-3 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 border border-blue-200 dark:border-blue-800"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">Input GST</p>
                        <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">₹{result.inputGST}</p>
                        <p className="text-xs text-blue-600/70 dark:text-blue-400/70 mt-1">GST on purchase</p>
                      </div>
                      <TrendingDown className="h-5 w-5 text-blue-500" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20 border border-teal-200 dark:border-teal-800"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium text-teal-600 dark:text-teal-400 mb-1">Output GST</p>
                        <p className="text-2xl font-bold text-teal-700 dark:text-teal-300">₹{result.outputGST}</p>
                        <p className="text-xs text-teal-600/70 dark:text-teal-400/70 mt-1">GST on sales</p>
                      </div>
                      <TrendingUp className="h-5 w-5 text-teal-500" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 border border-orange-200 dark:border-orange-800"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium text-orange-600 dark:text-orange-400 mb-1">GST Payable</p>
                        <p className="text-2xl font-bold text-orange-700 dark:text-orange-300">₹{result.gstPayable}</p>
                        <p className="text-xs text-orange-600/70 dark:text-orange-400/70 mt-1">Net GST to pay</p>
                      </div>
                      <Receipt className="h-5 w-5 text-orange-500" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border border-green-200 dark:border-green-800"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-xs font-medium text-green-600 dark:text-green-400 mb-1">Net Profit</p>
                        <p className="text-2xl font-bold text-green-700 dark:text-green-300">₹{result.profit}</p>
                        <p className="text-xs text-green-600/70 dark:text-green-400/70 mt-1">After GST deduction</p>
                      </div>
                      <DollarSign className="h-5 w-5 text-green-500" />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="p-4 rounded-lg bg-secondary/50 border border-border/50"
                >
                  <h4 className="text-sm font-semibold text-foreground mb-3">Transaction Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Purchase Cost:</span>
                      <span className="font-medium text-foreground">₹{result.totalPurchase}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Selling Amount:</span>
                      <span className="font-medium text-foreground">₹{result.totalSelling}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};
