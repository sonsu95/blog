FROM node:lts-alpine AS base

FROM base AS develop-stage
WORKDIR /home/template
COPY package*.json pnpm-lock.yaml* ./
RUN npm install -g pnpm --no-cache
RUN pnpm install
COPY . .
CMD ["pnpm", "dev"]