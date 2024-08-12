import React, { useState } from 'react';
import { Meta } from '@storybook/react';
import { DateInput, DateInputProps } from '@stick-ui/lib';

DateInput.displayName = 'DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'STICK UI/Components/Core/Inputs/DateInput',
  component: DateInput,

  argTypes: {
    label: {
      description: 'Texto a ser exibido como rótulo do input.',
    },
    size: {
      description: 'Tamanho do campo de input.',
    },
    grow: {
      description: 'O input deve ocupar toda a largura do seu contêiner.',
    },
    width: {
      description: 'Define a largura do input.',
    },
    error: {
      description: 'Objeto de erro contendo a descrição do erro.',
    },
    value: {
      description: 'O valor atual do input.',
    },
    defaultValue: {
      description: 'O valor padrão do input.',
    },
    onDateChange: {
      description: 'Função de callback chamada quando a data é alterada.',
    },
    required: {
      description: 'Indica se o input é obrigatório.',
    },
    disabled: {
      description: 'Indica se o input está desabilitado.',
    },
    clearable: {
      description: 'Indica se o valor do input pode ser limpo.',
    },
    style: {
      description: 'Estilos personalizados para o input.',
    },
  },
};

export const Default = (args: DateInputProps) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    args.defaultValue || '',
  );

  return (
    <>
      <DateInput
        value={selectedDate}
        clearable
        onDateChange={(date) => {
          setSelectedDate(date);
          args.onDateChange?.(date);
        }}
      />
    </>
  );
};

export default meta;
