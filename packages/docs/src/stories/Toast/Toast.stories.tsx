import {
  Button,
  Heading,
  Text,
  Toast,
  ToastProvider,
  useToast,
} from '@stick-ui/lib';
import { Meta } from '@storybook/react';

Toast.displayName = 'Toast';
const meta: Meta<typeof Toast> = {
  title: 'STICK UI/Components/Core/Toast',
  component: Toast,

  argTypes: {
    title: {
      description: 'Title displayed in the toast notification.',
      type: { name: 'string' },
      defaultValue: 'Title of the Toast',
    },
    message: {
      description: 'Main message content of the toast.',
      type: { name: 'string' },
      defaultValue: 'Toast message.',
    },
    type: {
      description:
        'Type of the toast notification. "success | error | info | warning"',
      type: {
        name: 'string',
      },
      defaultValue: 'success',
    },
    durationInMs: {
      description:
        'Duration in milliseconds for which the toast remains visible.',
      type: { name: 'number' },
      defaultValue: 5000,
    },
    onClose: {
      description: 'Callback function invoked when the toast is closed.',
      type: { name: 'function' },
    },
  },
};
export const Default = () => {
  const { showToast } = useToast();
  const handleButtonClick = () => {
    showToast({
      title: 'Título do Toast',
      message: 'Mensagem do Toast.',
      type: 'success',
      durationInMs: 5000,
      onClose: () => {
        console.log('Toast closed');
      },
    });
    showToast({
      title: 'Título do Toast',
      message: 'Mensagem do Toast.',
      type: 'error',
      durationInMs: 5000,
      onClose: () => {
        console.log('Toast closed');
      },
    });
    showToast({
      title: 'Título do Toast',
      message: 'Mensagem do Toast.',
      type: 'info',
      durationInMs: 5000,
      onClose: () => {
        console.log('Toast closed');
      },
    });
    showToast({
      title: 'Título do Toast',
      message: 'Mensagem do Toast.',
      type: 'warning',
      durationInMs: 5000,
      onClose: () => {
        console.log('Toast closed');
      },
    });
  };

  return (
    <ToastProvider>
      <div>
        <div style={{ paddingBottom: '16px' }}>
          <Heading>Toast</Heading>
          <Text>
            Para utilizar o toast deve se implementar o <b>ToastProvider</b>.
          </Text>
          <Text>
            E então utilizar o hook <b>useToast</b> e chamar a função{' '}
            <b>showToast</b> com as propriedades definidas abaixo
          </Text>
        </div>
        <Button onClick={handleButtonClick} label="Mostrar Toast" />
      </div>
    </ToastProvider>
  );
};

export default meta;
