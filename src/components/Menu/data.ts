import {
  CogGrey,
  CogWhite,
  FinanceGrey,
  FinanceWhite,
  HometGrey,
  HometWhite,
  ListGrey,
  ListWhite,
  NewUserGrey,
  NewUserWhite,
  TicketGrey,
  TicketWhite,
} from '@/assets';

import { MenuItem } from './types';

const MenuItems: MenuItem[] = [
  {
    href: '/',
    icon: HometGrey.src,
    iconSelected: HometWhite.src,
    label: 'Tela Inicial',
  },
  {
    href: '/tickets/manage',
    icon: CogGrey.src,
    iconSelected: CogWhite.src,
    label: 'Gerenciar Senhas',
  },
  {
    href: '/tickets/attribute',
    icon: TicketGrey.src,
    iconSelected: TicketWhite,
    label: 'Atribuir Senha',
  },
  {
    href: '/tickets',
    icon: ListGrey.src,
    iconSelected: ListWhite.src,
    label: 'Lista de Senha',
  },
  {
    href: '/user/register',
    icon: NewUserGrey.src,
    iconSelected: NewUserWhite.src,
    label: 'Cadastrar Usuario',
  },
  {
    href: '/budget',
    icon: FinanceGrey.src,
    iconSelected: FinanceWhite.src,
    label: 'Financas',
  },
];

export default MenuItems;
