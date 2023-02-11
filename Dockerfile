FROM node:14-alpine as builder
WORKDIR /nova-soft
# RUN apk add --no-cache build-base git openssh python3
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:14-alpine as runner
WORKDIR /nova-soft
ENV NODE_ENV production

COPY --from=builder /nova-soft/next.config.js ./next.config.js
COPY --from=builder /nova-soft/public ./public
COPY --from=builder /nova-soft/.env ./.env
COPY --from=builder /nova-soft/.next ./.next
COPY --from=builder /nova-soft/node_modules ./node_modules
# COPY --from=builder /nova-soft/next-i18next.config.js ./next-i18next.config.js
COPY --from=builder /nova-soft/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]
