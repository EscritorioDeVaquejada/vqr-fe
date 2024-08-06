export type File = {
  path: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
};

export type Image = {
  error: boolean;
  file: File;
  id: string;
  name: string;
  preview: string;
  progress: number;
  readableSize: string;
  uploaded: boolean;
  url: string | null;
};

export type SelectedImage = Image | undefined;

export type PhotoUploadedProps = {
  onChange: (photo: SelectedImage | undefined) => void;
  errorMessage?: string;
};
