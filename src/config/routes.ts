export enum ROUTES_MILK {
  MILK = 'MILK',
  ADD_MILK = 'ADD_MILK',
}

export enum ROUTES_CHEESE {
  CHEESE = 'CHEESE',
  ADD_CHEESE = 'ADD_CHEESE',
}

export enum ROUTES_SELECTOR {
  SELECTOR = 'SELECTOR',
}

const routes = {
  ...ROUTES_MILK,
  ...ROUTES_SELECTOR,
  ...ROUTES_CHEESE,
};

export default routes;
export type RoutesTypes = keyof typeof routes;
