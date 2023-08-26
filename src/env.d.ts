/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DB_URL: string;
  readonly DB_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
