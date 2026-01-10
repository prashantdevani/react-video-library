export {};

declare global {
  interface Window {
    _env_: {
      GITHUB_URL: string;
      GITHUB_BUTTON_LABEL: string;
      [key: string]: any;
    };
  }
}
