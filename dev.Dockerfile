FROM node:lts-alpine AS base

FROM base AS develop-stage
WORKDIR /home/blog
COPY package*.json pnpm-lock.yaml* .npmrc ./
RUN npm install -g pnpm --no-cache
RUN pnpm install
COPY . .
CMD ["pnpm", "dev"]