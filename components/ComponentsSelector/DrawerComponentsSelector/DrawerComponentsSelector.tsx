'use client';

import {
  ComponentsEnum,
  getComponentsList,
} from '@/components/ComponentsSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { clsx } from 'clsx';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';

export type DrawerComponentsSelectorProps = {
  handleComponentSelected: (component: ComponentsEnum) => void;
  componentsList: ComponentsEnum[];
};

export const DrawerComponentsSelector = ({
  handleComponentSelected,
  componentsList,
}: DrawerComponentsSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentsEnum | null>(null);

  const handleSelect = () => {
    if (!selectedComponent) {
      return;
    }
    handleComponentSelected(selectedComponent);
    setOpen(false);
    setSelectedComponent(null);
  };

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button title="Ajouter un composant">
          <PlusIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Ajouter un nouveau composant à la page</DrawerTitle>
          <DrawerDescription>
            Sélectionnez un composant puis cliquez sur Ajouter.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex gap-2 px-4">
          {componentsList.map((component) => (
            <Card
              className={clsx('cursor-pointer', {
                'border-primary': selectedComponent === component,
              })}
              onClick={() => {
                setSelectedComponent(component as ComponentsEnum);
              }}
            >
              <CardContent className="p-6">{component}</CardContent>
            </Card>
          ))}
        </div>
        <DrawerFooter>
          <Button onClick={handleSelect} disabled={!selectedComponent}>
            Ajouter
          </Button>
          <DrawerClose>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setSelectedComponent(null);
              }}
            >
              Annuler
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
