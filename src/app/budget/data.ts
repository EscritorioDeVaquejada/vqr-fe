import {
  CardBlack,
  CashBlack,
  Pix,
  TicketBlack,
  TicketStarBlack,
} from "@/assets";

export const ticketsSold = [
  {
    name: "Senhas Comuns",
    quantity: 150,
    amount: 30000,
    icon: TicketBlack.src,
  },
  {
    name: "Senhas com Bonificação",
    quantity: 50,
    amount: 7500,
    icon: TicketStarBlack.src,
  },
];

export const soldWithBonus = [
  {
    name: "Pix",
    quantity: 60,
    amount: 75000,
    icon: Pix.src,
  },
  {
    name: "Cartão",
    quantity: 36,
    amount: 4500,
    icon: CardBlack.src,
  },
  {
    name: "Dinheiro",
    quantity: 56,
    amount: 6500,
    icon: CashBlack.src,
  },
];
