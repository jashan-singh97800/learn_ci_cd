import { useState } from "react";
import { Plus, Trash, Receipt, CreditCard, DollarSign } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface BillingItem {
  id: string;
  service: string;
  price: number;
  quantity: number;
}

interface Invoice {
  id: string;
  customerName: string;
  date: string;
  items: BillingItem[];
  total: number;
  paymentMethod: string;
  status: "paid" | "pending" | "overdue";
}

export function BillingSystem() {
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "INV-001",
      customerName: "Sarah Mitchell",
      date: "2025-12-20",
      items: [
        { id: "1", service: "Precision Haircut", price: 45, quantity: 1 },
        { id: "2", service: "Hair Treatment", price: 80, quantity: 1 },
      ],
      total: 125,
      paymentMethod: "Credit Card",
      status: "paid",
    },
    {
      id: "INV-002",
      customerName: "James Chen",
      date: "2025-12-22",
      items: [{ id: "1", service: "Color & Highlights", price: 120, quantity: 1 }],
      total: 120,
      paymentMethod: "Cash",
      status: "paid",
    },
  ]);

  const [currentBill, setCurrentBill] = useState<BillingItem[]>([]);
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const services = [
    { name: "Precision Haircut", price: 45 },
    { name: "Color & Highlights", price: 120 },
    { name: "Hair Treatment", price: 80 },
    { name: "Styling", price: 60 },
  ];

  const addItemToBill = (serviceName: string, price: number) => {
    const existingItem = currentBill.find(
      (item) => item.service === serviceName
    );

    if (existingItem) {
      setCurrentBill(
        currentBill.map((item) =>
          item.service === serviceName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const newItem: BillingItem = {
        id: Date.now().toString(),
        service: serviceName,
        price,
        quantity: 1,
      };
      setCurrentBill([...currentBill, newItem]);
    }
  };

  const removeItemFromBill = (id: string) => {
    setCurrentBill(currentBill.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return currentBill.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

  const createInvoice = () => {
    if (currentBill.length === 0 || !customerName) return;

    const invoice: Invoice = {
      id: `INV-${String(invoices.length + 1).padStart(3, "0")}`,
      customerName,
      date: new Date().toISOString().split("T")[0],
      items: currentBill,
      total: calculateTotal(),
      paymentMethod:
        paymentMethod.charAt(0).toUpperCase() + paymentMethod.slice(1),
      status: "paid",
    };

    setInvoices([invoice, ...invoices]);
    setCurrentBill([]);
    setCustomerName("");
    setPaymentMethod("cash");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* New Bill Section */}
      <div className="space-y-6">
        <Card className="p-6 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl mb-6 text-black dark:text-white">
            Create New Bill
          </h2>

          {/* Customer Info */}
          <div className="mb-6">
            <Label htmlFor="customer">Customer Name</Label>
            <Input
              id="customer"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter customer name"
            />
          </div>

          {/* Available Services */}
          <div className="mb-6">
            <Label>Add Services</Label>
            <div className="grid grid-cols-1 gap-2 mt-2">
              {services.map((service) => (
                <Button
                  key={service.name}
                  variant="outline"
                  onClick={() => addItemToBill(service.name, service.price)}
                  className="justify-between"
                >
                  <span>{service.name}</span>
                  <span>${service.price}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Current Bill Items */}
          {currentBill.length > 0 && (
            <div className="mb-6">
              <Label>Bill Items</Label>
              <div className="space-y-2 mt-2">
                {currentBill.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-neutral-50 dark:bg-neutral-800 rounded-lg"
                  >
                    <div>
                      <p className="text-black dark:text-white">
                        {item.service}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        ${item.price} × {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-black dark:text-white">
                        ${item.price * item.quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItemFromBill(item.id)}
                        className="h-8 w-8"
                      >
                        <Trash className="h-4 w-4 text-red-600" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Total */}
          {currentBill.length > 0 && (
            <div className="mb-6 p-4 bg-neutral-50 dark:bg-neutral-800 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg text-black dark:text-white">
                  Total
                </span>
                <span className="text-2xl text-black dark:text-white">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>
          )}

          {/* Payment Method */}
          <div className="mb-6">
            <Label htmlFor="payment">Payment Method</Label>
            <Select value={paymentMethod} onValueChange={setPaymentMethod}>
              <SelectTrigger id="payment">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cash">Cash</SelectItem>
                <SelectItem value="credit-card">Credit Card</SelectItem>
                <SelectItem value="debit-card">Debit Card</SelectItem>
                <SelectItem value="upi">UPI</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Create Invoice Button */}
          <Button
            onClick={createInvoice}
            className="w-full"
            disabled={currentBill.length === 0 || !customerName}
          >
            <Receipt className="h-4 w-4 mr-2" />
            Generate Invoice
          </Button>
        </Card>

        {/* Statistics */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-6 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
            <DollarSign className="h-8 w-8 mb-2 text-green-600" />
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Total Revenue
            </p>
            <p className="text-2xl text-black dark:text-white">
              $
              {invoices
                .reduce((sum, inv) => sum + inv.total, 0)
                .toFixed(2)}
            </p>
          </Card>
          <Card className="p-6 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
            <Receipt className="h-8 w-8 mb-2 text-blue-600" />
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Invoices
            </p>
            <p className="text-2xl text-black dark:text-white">
              {invoices.length}
            </p>
          </Card>
        </div>
      </div>

      {/* Invoices History */}
      <div>
        <h2 className="text-2xl mb-6 text-black dark:text-white">
          Invoice History
        </h2>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <Card
              key={invoice.id}
              className="p-6 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg text-black dark:text-white">
                    {invoice.id}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {invoice.customerName}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl text-black dark:text-white">
                    ${invoice.total.toFixed(2)}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      invoice.status === "paid"
                        ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                        : "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300"
                    }`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                {invoice.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <span>
                      {item.service} × {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-800">
                <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <CreditCard className="h-4 w-4" />
                  <span>{invoice.paymentMethod}</span>
                </div>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {invoice.date}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
