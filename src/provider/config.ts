import APIConnector from './apiConnector';
import config from '../config';

const apiConnector = new APIConnector({timeout: 50000});

export default class ExampleConfig {
  static get endpoint(): string {
    return `${config.API_URL}`;
  }

  static get APIConnector(): APIConnector {
    return apiConnector;
  }
}
