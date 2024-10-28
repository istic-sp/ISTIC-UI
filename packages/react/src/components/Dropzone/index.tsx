import React, { useCallback, useRef } from 'react';
import clsx from 'clsx';
import { Loader } from '../Loader';
import { Button } from '../Buttons/Button';

interface DropzoneProps {
  onFileUpload: (file: File) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
  description?: string;
  acceptedFormats?: string;
  highlightText?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
  loadingMessage?: string;
  hasError?: boolean;
  errorTitle?: string;
  errorMessage?: string;
}

const Dropzone: React.FC<DropzoneProps> = ({
  onFileUpload,
  accept = '.step,.stp,.stl',
  multiple = false,
  className,
  description = 'Arraste e solte o arquivo aqui ou ',
  acceptedFormats = 'STEP, STP, STL',
  highlightText = 'clique para carregar',
  icon = <DefaultIcon />,
  isLoading = false,
  loadingMessage = 'Processando...',
  hasError = false,
  errorTitle = 'Erro ao enviar arquivo',
  errorMessage = 'Clique no botão abaixo para tentar novamente ou arraste/clique aqui para enviar outro arquivo.',
}) => {
  const file = useRef<File | null>(null);

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        onFileUpload(files[0]);
        file.current = files[0];
      }
    },
    [onFileUpload],
  );

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        onFileUpload(files[0]);
        file.current = files[0];
      }
    },
    [onFileUpload],
  );

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleRetry = () => {
    if (file.current) {
      onFileUpload(file.current);
    }
  };

  return (
    <div
      className={clsx(
        'border-2 border-dashed border-neutral400 rounded-lg p-4 w-full h-48 flex items-center justify-center',
        className,
      )}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        className="hidden"
        onChange={handleFileSelect}
        id="dropzone-input"
        disabled={isLoading}
      />
      {isLoading ? (
        <div className="flex flex-col items-center gap-2">
          <Loader color="border-brand500" size="xl" />
          <h4>{loadingMessage}</h4>
        </div>
      ) : (
        <label
          htmlFor="dropzone-input"
          className="text-center text-neutral700 cursor-pointer"
        >
          {hasError ? (
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-red-500 font-bold">{errorTitle}</h3>
              <p className="text-red-500">{errorMessage}</p>
              <Button
                label="Enviar Novamente"
                onClick={handleRetry}
                size="sm"
              />
            </div>
          ) : (
            <>
              <div className="mb-2 flex justify-center">{icon}</div>

              <p>
                {description}{' '}
                <span className="text-blue-500">{highlightText}</span>
              </p>

              <p className="text-sm text-neutral500">
                Formatos aceitos: {acceptedFormats}
              </p>
            </>
          )}
        </label>
      )}
    </div>
  );
};

const DefaultIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 16s-1 0-1-1 1-4 5-4 5 4 5 4 1 0 1-1-1-4-5-4S3 16 3 16z"
    />
  </svg>
);

Dropzone.displayName = 'Dropzone';

export { Dropzone, DropzoneProps };
