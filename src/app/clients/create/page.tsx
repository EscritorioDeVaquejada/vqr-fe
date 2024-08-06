'use client';
import React, { useEffect } from 'react';

import { ArrowLeft } from '@/assets';
import { Button, ErrorMessages, Input, Multi } from '@/components';
import PhotoUploader from '@/components/PhotoUploader';
import { File, SelectedImage } from '@/components/PhotoUploader/types';
import { useNewClientStore } from '@/store';

import styles from './page.module.scss';

const page = () => {
  const {
    fields,
    errors,
    handleName,
    handleAddress,
    handleCPF,
    handleProfileImage,
    submitNewClient,
  } = useNewClientStore();

  const handleUploadPhoto = (file: SelectedImage) => {
    handleProfileImage({ profileImage: file });
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
        <PhotoUploader
          onChange={handleUploadPhoto}
          errorMessage={fields.profileImage.invalidText}
        />
      </div>
      <form className={styles.form} onSubmit={submitNewClient}>
        <Input
          name="name"
          label="Nome"
          placeholder="Informe seu nome"
          value={fields.name.value}
          onChange={handleName}
          errorMessage={fields.name.invalidText}
        />
        <Input
          name="cpf"
          label="CPF"
          placeholder="000000000-00"
          value={fields.cpf.value}
          onChange={handleCPF}
          errorMessage={fields.cpf.invalidText}
        />
        <Input
          name="address"
          label="Endereço"
          value={fields.address.value}
          onChange={handleAddress}
          errorMessage={fields.address.invalidText}
        />
        <Multi>
          <Button
            type="button"
            label="Cancelar"
            color="tertiary"
            href="/clients"
          />
          <Button type="submit" label="Confirmar" />
        </Multi>
        <ErrorMessages messages={errors} />
      </form>
    </div>
  );
};

export default page;
