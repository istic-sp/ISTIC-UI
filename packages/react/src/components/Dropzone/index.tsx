import React, { useCallback } from 'react';
import clsx from 'clsx';

interface DropzoneProps {
  onFileUpload: (file: File) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
  description?: string;
  acceptedFormats?: string;
  highlightText?: string;
  icon?: React.ReactNode;
}

const Dropzone: React.FC<DropzoneProps> = ({
  onFileUpload,
  accept = '.step,.stp,.stl',
  multiple = false,
  className,
  description = 'Arraste e solte o arquivo aqui ou clique para carregar',
  acceptedFormats = 'STEP, STP, STL',
  highlightText = 'clique para carregar',
  icon = <DefaultIcon />,
}) => {
  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        onFileUpload(files[0]);
      }
    },
    [onFileUpload],
  );

  const handleFileSelect = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        onFileUpload(files[0]);
      }
    },
    [onFileUpload],
  );

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className={clsx(
        'border-2 border-dashed border-neutral-400 rounded-lg p-4 w-full h-32 flex items-center justify-center',
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
      />
      <label
        htmlFor="dropzone-input"
        className="text-center text-neutral-700 cursor-pointer"
      >
        <div className="mb-2 flex justify-center">{icon}</div>

        <p>
          {description} <span className="text-blue-500">{highlightText}</span>
        </p>

        <p className="text-sm text-neutral-500">
          Formatos aceitos: {acceptedFormats}
        </p>
      </label>
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
