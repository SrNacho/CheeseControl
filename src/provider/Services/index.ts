import config from '../config';

export default class MilkService {
  static fetchMilk() {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const endpoint = config.endpoint;
        const response: any = await config.APIConnector.get(`${endpoint}leche/`);
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
  static postMilk(data: any) {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const endpoint = config.endpoint;
        const body = JSON.stringify(data);
        const response: any = await config.APIConnector.post(`${endpoint}leche/`, {
          body,
        });
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
  static fetchCheese() {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const endpoint = config.endpoint;
        const response: any = await config.APIConnector.get(`${endpoint}quesos/`);
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
  static postCheese(data: any) {
    return new Promise(async (resolve: any, reject: any) => {
      try {
        const endpoint = config.endpoint;
        const body = JSON.stringify(data);
        const response: any = await config.APIConnector.post(`${endpoint}quesos/`, {
          body,
        });
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
