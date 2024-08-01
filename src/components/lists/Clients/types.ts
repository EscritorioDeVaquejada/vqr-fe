import { Client } from '@/store/clients/types';

export type CardProps = {
  client: Client;
};

export type ClientsListProps = {
  clients: Client[];
};

export type MenuProps = {
  client: Client;
};
