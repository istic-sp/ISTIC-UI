import React, { useCallback } from 'react';
import clsx from 'clsx';
import { Icon } from '../Icons';

interface DropzoneProps {
  onFileUpload: (file: File) => void;
  accept?: string;
  multiple?: boolean;
  className?: string;
  description?: string;
  acceptedFormats?: string;
  highlightText?: string;
  icon?: string;
}

const Dropzone: React.FC<DropzoneProps> = ({
  onFileUpload,
  accept = '.step,.stp,.stl',
  multiple = false,
  className,
  description = 'Arraste e solte o arquivo aqui ou clique para carregar',
  acceptedFormats = 'STEP, STP, STL',
  highlightText = 'clique para carregar',
  icon = 'upload-cloud-2-line',
}) => {
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        onFileUpload(files[0]);
        if (fileInputRef.current) {
          fileInputRef.current.files = files;
        }
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
        'border-2 border-dashed border-neutral400 rounded-lg p-4 w-full h-32 flex items-center justify-center',
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
        ref={fileInputRef}
        id="dropzone-input"
      />
      <label
        htmlFor="dropzone-input"
        className="text-center text-neutral700 cursor-pointer"
      >
        <div className="mb-2 flex justify-center">
          <Icon name={'upload-cloud-2-line'} />
        </div>

        <p className="text-neutral600">
          {description} <span className="text-blue-500">{highlightText}</span>
        </p>

        <p className="text-sm text-neutral600">
          Formatos aceitos: {acceptedFormats}
        </p>
      </label>
    </div>
  );
};

Dropzone.displayName = 'Dropzone';

export { Dropzone, DropzoneProps };
