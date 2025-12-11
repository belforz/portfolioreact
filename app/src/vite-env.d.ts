/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PUBLIC_API_STREAM: string, 
    readonly VITE_PUBLIC_API_URL: string,
    readonly VITE_PUBLIC_API_CHAT: string,
    readonly VITE_PUBLIC_API_STREAM: string,
    readonly VITE_PUBLIC_API_SECTION: string, 
    readonly VITE_PUBLIC_API_DOCS: string,
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
