export type Result<Error, Response> =
  | [Error, undefined]
  | [undefined, Response];

export class Request<RequestResponse> {
  private baseUrl = '';

  private url: string;
  private method: string;
  private headers: Record<string, string>;
  private urlParams: any;

  constructor(url: string, urlParams: any = null) {
    this.url = url;
    this.method = 'GET'; // The application only uses GET requests
    this.urlParams = {
      ...urlParams,
      key: '',
    };
    this.headers = {}; // No headers required;
  }

  public async send(): Promise<RequestResponse | undefined> {
    const options: RequestInit = {
      method: this.method,
      headers: this.headers,
    };

    const fullUrl = `${this.baseUrl}${this.url}?${new URLSearchParams(
      this.urlParams,
    )}`;
    const response = await fetch(fullUrl, options);

    try {
      return JSON.parse(await response.text());
    } catch {
      return undefined;
    }
  }
}
