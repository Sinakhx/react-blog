import serverConfig from "../backend/server.json";

export const baseUrl = serverConfig.host + ":" + serverConfig.port;