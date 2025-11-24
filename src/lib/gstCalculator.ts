/**
 * GST Calculator Utility
 * 
 * Formulas:
 * - Input GST = Purchase Price × (GST% / 100)
 * - Output GST = Selling Price × (GST% / 100)
 * - GST Payable = Output GST - Input GST
 * - Profit = (Selling Price - Purchase Price) - GST Payable
 */

export interface GSTCalculation {
  inputGST: number;
  outputGST: number;
  gstPayable: number;
  profit: number;
  totalPurchase: number;
  totalSelling: number;
}

export interface RetailCalculation {
  purchasePrice: number;
  profitMargin: number;
  baseSellingPrice: number;
  gstAmount: number;
  finalRetailPrice: number;
}

export function calculateGST(
  purchasePrice: number,
  sellingPrice: number,
  gstPercent: number,
  transport: number = 0
): GSTCalculation {
  // Add transport to purchase price
  const adjustedPurchasePrice = purchasePrice + transport;
  
  // Calculate GST amounts
  const inputGST = adjustedPurchasePrice * (gstPercent / 100);
  const outputGST = sellingPrice * (gstPercent / 100);
  const gstPayable = outputGST - inputGST;
  
  // Calculate profit (selling - adjusted purchase)
  const profit = sellingPrice - adjustedPurchasePrice;
  
  // Calculate totals
  const totalPurchase = adjustedPurchasePrice + inputGST;
  const totalSelling = sellingPrice + outputGST;

  return {
    inputGST: Number(inputGST.toFixed(2)),
    outputGST: Number(outputGST.toFixed(2)),
    gstPayable: Number(gstPayable.toFixed(2)),
    profit: Number(profit.toFixed(2)),
    totalPurchase: Number(totalPurchase.toFixed(2)),
    totalSelling: Number(totalSelling.toFixed(2)),
  };
}

export function calculateRetail(
  purchasePrice: number,
  profitMarginPercent: number,
  gstPercent: number,
  transport: number = 0
): RetailCalculation {
  // Add transport to purchase price
  const adjustedPurchasePrice = purchasePrice + transport;
  
  // Calculate base selling price with profit margin
  const baseSellingPrice = adjustedPurchasePrice + (adjustedPurchasePrice * (profitMarginPercent / 100));
  
  // Calculate GST on base selling price
  const gstAmount = baseSellingPrice * (gstPercent / 100);
  
  // Calculate final retail price (MRP)
  const finalRetailPrice = baseSellingPrice + gstAmount;

  return {
    purchasePrice: Number(purchasePrice.toFixed(2)),
    profitMargin: Number(profitMarginPercent.toFixed(2)),
    baseSellingPrice: Number(baseSellingPrice.toFixed(2)),
    gstAmount: Number(gstAmount.toFixed(2)),
    finalRetailPrice: Number(finalRetailPrice.toFixed(2)),
  };
}

export const SAMPLE_CALCULATION = {
  purchasePrice: 100,
  sellingPrice: 125,
  gstPercent: 18,
  result: calculateGST(100, 125, 18),
};
