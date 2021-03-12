export class DataStore {
  private static _instance: DataStore = new DataStore();

  applnContext: any = {};

  constructor() {
    DataStore._instance = this;
  }

  public static getInstance(): DataStore {
    return DataStore._instance;
  }

  clearAll() {
    this.applnContext = {};
  }

  setData(contextName: string, contextValue: any) {
    this.applnContext[contextName] = contextValue;
  }

  getData(contextName: string) {
    if (this.applnContext[contextName]) {
      return this.applnContext[contextName];
    }
  }

  clearContextData(contextName: string) {
    if (this.applnContext[contextName]) {
      this.applnContext[contextName] = null;
    }
  }

  isContextDataExists(contextName: string) {
    if (this.applnContext[contextName]) {
      return true;
    }
    return false;
  }
}
