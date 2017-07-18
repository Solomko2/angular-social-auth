interface GoogleInitI {
  client_id: string;
  cookiepolicy: string;
  scope: string;
}

export class GoogleInitModel implements GoogleInitI {
  client_id: string;
  cookiepolicy: string;
  scope: string;

  constructor(source: GoogleInitI) {
    this.client_id = source.client_id;
    this.cookiepolicy = source.cookiepolicy;
    this.scope = source.scope;
  }
}
