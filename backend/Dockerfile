FROM node:alpine

COPY package-lock.json /pb/
COPY package.json /pb/
RUN npm install
COPY . /pb

FROM alpine:latest

ARG PB_VERSION=0.19.3
ARG TARGETARCH
ARG TARGETOS

RUN apk add --no-cache \
    unzip \
    ca-certificates

# download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_${TARGETOS}_${TARGETARCH}.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

#RUN echo "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_${TARGETOS}_${TARGETARCH}.zip /tmp/pb.zip"

# uncomment to copy the local pb_migrations dir into the image
# COPY ./pb_migrations /pb/pb_migrations


# uncomment to copy the local pb_hooks dir into the image
#COPY pocketbase/pb_hooks /pb/pb_hooks
#COPY pocketbase/db_models /pb/db_models

EXPOSE 8080

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]