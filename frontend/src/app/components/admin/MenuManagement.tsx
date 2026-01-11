import { useState } from "react";
import { Plus, Trash, Save } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Card } from "../ui/card";

interface MenuManagementProps {
  onBack: () => void;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

export function MenuManagement({ onBack }: MenuManagementProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: "1",
      name: "Precision Haircut",
      description: "Expert cutting techniques tailored to your style",
      price: "45",
      category: "Haircut",
    },
    {
      id: "2",
      name: "Color & Highlights",
      description: "Premium coloring services with the latest techniques",
      price: "120",
      category: "Coloring",
    },
    {
      id: "3",
      name: "Hair Treatments",
      description: "Restorative treatments for healthy, beautiful hair",
      price: "80",
      category: "Treatment",
    },
  ]);

  const [newItem, setNewItem] = useState<Omit<MenuItem, "id">>({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const addMenuItem = () => {
    if (
      newItem.name &&
      newItem.description &&
      newItem.price &&
      newItem.category
    ) {
      const item: MenuItem = {
        ...newItem,
        id: Date.now().toString(),
      };
      setMenuItems([...menuItems, item]);
      setNewItem({ name: "", description: "", price: "", category: "" });
    }
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Add New Item */}
      <Card className="p-6 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800">
        <h2 className="text-2xl mb-6 text-black dark:text-white">
          Add New Service
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <Label htmlFor="name">Service Name</Label>
            <Input
              id="name"
              value={newItem.name}
              onChange={(e) =>
                setNewItem({ ...newItem, name: e.target.value })
              }
              placeholder="e.g., Premium Haircut"
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={newItem.category}
              onChange={(e) =>
                setNewItem({ ...newItem, category: e.target.value })
              }
              placeholder="e.g., Haircut, Coloring, Treatment"
            />
          </div>
          <div className="md:col-span-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={newItem.description}
              onChange={(e) =>
                setNewItem({ ...newItem, description: e.target.value })
              }
              placeholder="Describe the service..."
              rows={3}
            />
          </div>
          <div>
            <Label htmlFor="price">Price ($)</Label>
            <Input
              id="price"
              type="number"
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              placeholder="0.00"
            />
          </div>
        </div>
        <Button onClick={addMenuItem} className="w-full md:w-auto">
          <Plus className="h-4 w-4 mr-2" />
          Add Service
        </Button>
      </Card>

      {/* Menu Items List */}
      <div>
        <h2 className="text-2xl mb-6 text-black dark:text-white">
          Current Services
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {menuItems.map((item) => (
            <Card
              key={item.id}
              className="p-6 bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl text-black dark:text-white">
                        {item.name}
                      </h3>
                      <span className="text-sm text-neutral-500 dark:text-neutral-500">
                        {item.category}
                      </span>
                    </div>
                    <span className="text-xl text-black dark:text-white">
                      ${item.price}
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {item.description}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteMenuItem(item.id)}
                  className="text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button size="lg" className="gap-2">
          <Save className="h-5 w-5" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
