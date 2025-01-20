# Step 1: Build the Next.js application
FROM node:20-alpine AS builder
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY pnpm-lock.yaml ./
COPY package.json ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm build

# Step 2: Run the application in a minimal runtime environment
FROM node:20-alpine AS runner
WORKDIR /app

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# 빌드 단계에서 생성된 standalone 폴더와 필요한 파일만 복사
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/package.json ./package.json


USER nextjs

# Expose the Next.js port
EXPOSE 3001

ENV PORT=3001
# Run the Next.js application
CMD ["node", "server.js"]