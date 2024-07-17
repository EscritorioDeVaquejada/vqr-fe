import { StaticImageData } from "next/image";

type Client = {
  name: string;
  numberOfEvents: number;
  profilePicture: any;
};

export type CardProps = {
  client: Client;
};

export type ClientsListProps = {
  clients: Client[];
};
