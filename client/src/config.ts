import { getSiteURL } from '@/lib/get-site-url';
import { LogLevel } from '@/lib/logger';

export interface Config {
  site: { name: string; description: string; themeColor: string; url: string };
  logLevel: keyof typeof LogLevel,
  API_URL: string
}



export const config: Config = {
  site: { name: 'Fangs', description: '', themeColor: '#090a0b', url: getSiteURL() },
  logLevel: (process.env.NEXT_PUBLIC_LOG_LEVEL as keyof typeof LogLevel) ?? LogLevel.ALL,
  API_URL: process.env.API_URL ?? (process.env.NODE_ENV === "production") ? "https://fangs-back-7ux4ximqbq-rj.a.run.app" : "http://localhost:3001"
  // backendUrl: (process.env.NODE_ENV=== "production") ?
};
