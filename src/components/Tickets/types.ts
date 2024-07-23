import { Ticket } from "@/store/tickets/types";

export type CellProps = {
  ticket: Ticket;
  index: number;
};

export type TicketsProps = {
  size?: "small" | "large";
};
