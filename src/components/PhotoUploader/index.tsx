'use client';

import { filesize } from 'filesize';
import Image from 'next/image';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { PhotoPlus } from '@/assets';
import { ACCEPTED_FILE_EXTENSIONS } from '@/constants';

import styles from './index.module.scss';
import { File, PhotoUploadedProps, SelectedImage } from './types';

const PhotoUploader: FC<PhotoUploadedProps> = ({ onChange }) => {
  const [selectedImage, setSelectedImage] = useState<SelectedImage>();
  const [isFileRejected, setIsFileRejected] = useState(false);

  const createImageObj = (file: File) => ({
    file,
    id: '',
    name: file.name,
    readableSize: filesize(file.size),
    preview: URL.createObjectURL(file as any),
    progress: 0,
    uploaded: false,
    error: false,
    url: null,
  });

  const onDrop = useCallback((acceptedFiles: any) => {
    setIsFileRejected(false);
    const file = acceptedFiles[0] as File;

    const acceptedFileExtensionIndex = ACCEPTED_FILE_EXTENSIONS.findIndex(
      (ext) => file.type.includes(ext)
    );

    if (acceptedFileExtensionIndex === -1) {
      setIsFileRejected(true);
      return;
    }

    const imageObject = createImageObj(file);
    setSelectedImage(imageObject);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDrop });

  useEffect(() => {
    onChange(selectedImage);
  }, [selectedImage]);

  return (
    <div {...getRootProps()} className={styles.container}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <div className={`${styles.dropDragFile} ${styles.dropIt}`}>
          <Image src={PhotoPlus.src} alt="icon" height={60} width={60} />
        </div>
      ) : (
        <div className={styles.dropDragFile}>
          {selectedImage ? (
            <div
              style={{
                backgroundImage: `url(${selectedImage.preview})`,
              }}
              className={styles.uploadedImage}
            />
          ) : (
            <>
              {isFileRejected ? (
                <p>Arquivo invalido</p>
              ) : (
                <Image src={PhotoPlus.src} alt="icon" height={60} width={60} />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PhotoUploader;
