'use client';

import {
  ComponentConfig,
  ComponentsEnum,
  getComponentConfig,
} from '@/components/ComponentsSelector';
import { DrawerComponentsSelector } from '@/components/ComponentsSelector/DrawerComponentsSelector';
import { FormContentProps } from '@/components/ContentEditor/FormContentProps';
import { useState } from 'react';

export type ContentEditorProps = {
  componentsList: ComponentsEnum[];
  existingData?: ComponentConfig[];
};

export const ContentEditor = ({
  componentsList,
  existingData = [],
}: ContentEditorProps) => {
  const [blocks, setBlocks] = useState<ComponentConfig[]>(existingData);

  const handleAddComponent = (component: ComponentsEnum) => {
    const config = getComponentConfig(component);
    setBlocks((prev) => {
      return [...prev, { ...config }];
    });
  };
  return (
    <div className="p-4">
      <DrawerComponentsSelector
        componentsList={componentsList}
        handleComponentSelected={handleAddComponent}
      />
      {blocks.map((block) => (
        <FormContentProps key={block.id} {...block} />
      ))}
    </div>
  );
};
