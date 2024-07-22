import { MenuItem } from "./types";

import {
  CogGrey,
  CogWhite,
  FinanceGrey,
  FinanceWhite,
  ListGrey,
  ListWhite,
  NewUserGrey,
  NewUserWhite,
  TicketGrey,
  TicketWhite,
  HometGrey,
  HometWhite,
} from "@/assets";

const MenuItems: MenuItem[] = [
  {
    href: "/",
    icon: HometGrey.src,
    iconSelected: HometWhite.src,
    label: "Tela Inicial",
  },
  {
    href: "/passwords-management",
    icon: CogGrey.src,
    iconSelected: CogWhite.src,
    label: "Gerenciar Senhas",
  },
  {
    href: "/append-passwords",
    icon: TicketGrey.src,
    iconSelected: TicketWhite,
    label: "Atribuir Senha",
  },
  {
    href: "/passwords",
    icon: ListGrey.src,
    iconSelected: ListWhite.src,
    label: "Lista de Senha",
  },
  {
    href: "/user/create",
    icon: NewUserGrey.src,
    iconSelected: NewUserWhite.src,
    label: "Cadastrar Usuario",
  },
  {
    href: "/finances",
    icon: FinanceGrey.src,
    iconSelected: FinanceWhite.src,
    label: "Financas",
  },
];

export default MenuItems;
