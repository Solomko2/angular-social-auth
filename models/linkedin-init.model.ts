interface LinkedinInitI {
  apiKey: string,
  authorize?: boolean,
  isServer?: boolean
}

export class LinkedinInitModel implements LinkedinInitI {
  apiKey: string;
  authorize?: boolean;
  isServer?: boolean;

  constructor(source: LinkedinInitI) {
    this.apiKey = source.apiKey;
    this.authorize = source.authorize;
    this.isServer = source.isServer;
  }
}
