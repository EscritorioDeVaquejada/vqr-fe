export type File = {
  path: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
};

export type SelectedImage =
  | {
      error: boolean;
      file: File;
      id: string;
      name: string;
      preview: string;
      progress: number;
      readableSize: string;
      uploaded: boolean;
      url: string | null;
    }
  | undefined;

export type PhotoUploadedProps = {
  onChange: (photo: SelectedImage | undefined) => void;
};
