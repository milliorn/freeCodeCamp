import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
// eslint-disable-next-line @typescript-eslint/no-var-requires

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: "postgresql://postgres:123@localhost:5434/nest",
        },
      },
    });
  }
}
