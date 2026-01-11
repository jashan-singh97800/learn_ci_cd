import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { MenuManagement } from "./admin/MenuManagement";
import { BillingSystem } from "./admin/BillingSystem";
import { Button } from "./ui/button";
import { X, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AdminPanelProps {
  onClose: () => void;
}

export function AdminPanel({ onClose }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState("menu");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="rounded-full md:hidden"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-3xl md:text-4xl text-black dark:text-white mb-2">
                Admin Dashboard
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Manage your salon services and billing
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hidden md:flex"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Tabs */}
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
            <TabsTrigger value="menu">Menu Management</TabsTrigger>
            <TabsTrigger value="billing">Billing System</TabsTrigger>
          </TabsList>

          <TabsContent value="menu">
            <MenuManagement onBack={onClose} />
          </TabsContent>

          <TabsContent value="billing">
            <BillingSystem />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
