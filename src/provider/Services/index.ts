import config from '../config';

export default class ExampleService {
  static fetchExample() {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = config.endpoint;
        const response: any = await config.APIConnector.get(
          `${endpoint}leche/`,
        );
        if (response.__ok) {
          resolve(response);
        } else {
          reject();
        }
      } catch (error) {
        console.log('error', error);
        reject(error);
      }
    });
  }
}
