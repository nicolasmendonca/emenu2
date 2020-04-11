import { prisma } from "../generated/prisma-client";

const context = {
  prisma
}

export type Context = typeof context;
export default context;