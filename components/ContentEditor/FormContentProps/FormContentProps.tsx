import { Form, FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ComponentConfig, getComponent } from '@/components/ComponentsSelector';
import {
  Inputs,
  getInputs,
} from '@/components/ContentEditor/FormContentProps/util';

export type FormContentPropsProps = ComponentConfig;

export const FormContentProps = ({
  schema,
  id,
  name,
}: FormContentPropsProps) => {
  const formMethods = useForm({
    resolver: zodResolver(schema),
  });

  const DisplayedComponent = getComponent(name);

  const inputsArray = getInputs({ schema });

  console.log(formMethods.watch());

  return (
    <>
      <DisplayedComponent content={{ ...formMethods.watch() }} />
      <FormProvider {...formMethods}>
        <div className="flex flex-col gap-2">
          {inputsArray.map((input) => {
            return <Inputs input={input} />;
          })}
        </div>
      </FormProvider>
    </>
  );
};
