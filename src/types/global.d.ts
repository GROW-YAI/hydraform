declare module "boafo-accessibility-widget" {
  export function initializeBoafoWidget(apiKey: string): void;
}

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_BOAFO_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
