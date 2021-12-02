export const isProduction = false;

interface TypeConfig {
  isDev: boolean;
  API_URL: string;
  API_CONNECTOR_LOGS_ACTIVATED: boolean;
}

const Config: TypeConfig = {
  isDev: true,
  API_URL: 'http://api-cheesecontrol.herokuapp.com/v1/',
  API_CONNECTOR_LOGS_ACTIVATED: true,
};

export default Config;
