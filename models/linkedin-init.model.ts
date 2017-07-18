interface LinkedinInitI {
  initializationCallback: () => void,
  apiKey: string,
  authorize?: boolean,
  isServer?: boolean
}

export class LinkedinInitModel implements LinkedinInitI {
  initializationCallback: () => void;
  apiKey: string;
  authorize?: boolean;
  isServer?: boolean;

  constructor(source: LinkedinInitI) {
    this.initializationCallback = source.initializationCallback;
    this.apiKey = source.apiKey;
    this.authorize = source.authorize;
    this.isServer = source.isServer;
  }
}
