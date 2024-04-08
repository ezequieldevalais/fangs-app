import { Role } from 'src/modules/user/enums';

declare module 'express-session' {
  interface SessionData {
    user: {
      id: number;
      username: string;
      roles: [Role];
    };
  }
}

declare module 'express' {
  interface Request {
    user: {
      id: number;
      username: string;
      roles: [Role];
    };
  }
}
