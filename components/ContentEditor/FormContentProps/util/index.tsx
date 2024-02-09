import { Input } from '@/components/ui/input';
import { ChangeEvent, useState } from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';
import zod from 'zod';
import { v4 as uuidv4 } from 'uuid';
import isEmpty from 'lodash/isEmpty';

export type InputType = 'string' | 'array' | 'object';

export type InputString = {
  name: string;
  type: 'string';
};

export type InputArray = {
  name: string;
  type: 'array';
  elements: InputObjectType[];
};

export type InputObject = {
  name: string;
  type: 'object';
  components: Array<InputString | InputArray | InputObject>;
};

export type InputObjectType = InputString | InputArray | InputObject;

export const getInputs = ({
  schema,
  parent,
}: {
  schema: zod.ZodObject<any>;
  parent?: string;
}) => {
  const inputs: InputObjectType[] = [];
  if (!schema?.shape) {
    return inputs;
  }
  const values = Object.entries(schema.shape);

  values.forEach(([key, value]) => {
    if (value instanceof zod.ZodString) {
      inputs.push({
        name: parent ? `${parent}.${key}` : key,
        type: 'string',
      });
    }

    if (value instanceof zod.ZodObject) {
      const subInputs = getInputs({
        schema: value,
        parent: key,
      });

      inputs.push({
        type: 'object',
        components: subInputs,
        name: key,
      });
    }

    if (value instanceof zod.ZodArray) {
      const subInputs = getInputs({
        schema: value.element,
        parent: key,
      });

      inputs.push({
        type: 'array',
        elements: subInputs,
        name: key,
      });
    }
  });

  return inputs;
};

export type InputsProps = {
  input: InputObjectType;
};

export const Inputs = ({ input }: InputsProps) => {
  if (input.type === 'string') {
    return <InputStringComponent {...input} />;
  }

  if (input.type === 'array') {
    return <InputArrayComponent {...input} />;
  }

  if (input.type === 'object') {
    return <InputObjectComponent {...input} />;
  }
};

export const InputStringComponent = (props: InputString) => {
  const { control } = useFormContext();
  const { name } = props;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <Input placeholder={name} {...field} />}
    />
  );
};

export const InputArrayComponent = (props: InputArray) => {
  const { control } = useFormContext();
  const { elements, name } = props;

  const [arrayIds, setArrayIds] = useState([uuidv4()]);

  return (
    <div className="flex flex-col gap-2">
      <h1>{name}</h1>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const onChange = ({
            id,
            key,
            value,
          }: {
            id: string;
            key: string;
            value: string;
          }) => {
            const cleanedKey = key.replace(`${name}.`, '');

            if (isEmpty(field.value)) {
              field.onChange([{ id, [cleanedKey]: value }]);
            } else {
              const values = field.value as { id: string }[];
              const currentValue = values.find((value) => value.id === id);
              field.onChange([
                ...values.filter((value) => value.id !== id),
                { ...currentValue, [cleanedKey]: value },
              ]);
            }
          };

          return (
            <>
              {arrayIds.map((id) => {
                return (
                  <div key={id}>
                    {elements.map((element) => {
                      if (element.name.includes('id')) {
                        return null;
                      }
                      return (
                        <Input
                          placeholder={element.name}
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            onChange({
                              id,
                              key: element.name,
                              value: e.target.value,
                            });
                          }}
                          key={element.name}
                        />
                      );
                    })}
                  </div>
                );
              })}
            </>
          );
        }}
      />
    </div>
  );
};

export const InputObjectComponent = (props: InputObject) => {
  const { components, name } = props;
  return (
    <div className="flex flex-col gap-2">
      <h1>{name}</h1>
      {components.map((component) => {
        return <Inputs input={component} />;
      })}
    </div>
  );
};
