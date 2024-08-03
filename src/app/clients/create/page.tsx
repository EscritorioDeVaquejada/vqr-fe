'use client';
import React from 'react';

import { ArrowLeft } from '@/assets';
import { Button, Input, Multi } from '@/components';
import PhotoUploader from '@/components/PhotoUploader';
import { File, SelectedImage } from '@/components/PhotoUploader/types';
import { useNewClientStore } from '@/store';

import styles from './page.module.scss';

const page = () => {
  const {} = useNewClientStore();

  const handleUploadPhoto = (file: SelectedImage) => {
    console.log({ newFile: file });
  };

  return (
    <div className={styles.container}>
      <Button
        type="button"
        color="secondary"
        icon={ArrowLeft.src}
        iconPosition="left"
        isFullWidth={false}
        width="fit-content"
        href="/clients"
      />
      <h1 className={styles.heading}>Novo Cliente</h1>
      <div className={styles.labelPhotoContainer}>
        <span>Foto de Perfil</span>
        <PhotoUploader onChange={handleUploadPhoto} />
      </div>
      <form className={styles.form}>
        <Input name="name" label="Nome" placeholder="Informe seu nome" />
        <Input name="cpf" label="CPF" placeholder="000000000-00" />
        <Input name="address" label="Endereco" />
        <Multi>
          <Button type="button" label="Cancelar" color="tertiary" />
          <Button type="button" label="Confirmar" isDisabled />
        </Multi>
      </form>
    </div>
  );
};

export default page;
