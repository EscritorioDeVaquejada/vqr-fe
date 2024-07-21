import user from "./user";
import clients from "./clients";
import newClients from "./newClient";
import events from "./events";

export { default as useUserStore } from "./user";
export { default as useClientsStore } from "./clients";
export { default as useNewClientStore } from "./newClient";
export { default as useEventsStore } from "./events";

export default {
  user,
  clients,
  newClients,
  events,
};
