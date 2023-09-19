/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SERVER_URL: string;
	readonly VITE_SERVER_HOST: string
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}