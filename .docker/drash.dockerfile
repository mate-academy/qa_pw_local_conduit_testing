FROM debian:oldstable-20230612-slim

RUN apt update -y \
  && apt install -y curl wget gnupg ca-certificates \
  && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
  && apt install -y nodejs \
  && npm install -g npm@6.14.6 \
  && apt install -y bash unzip \
  && apt clean \
  && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deno.land/x/install/install.sh | DENO_INSTALL=/usr/local sh -s v1.5.1
RUN export DENO_INSTALL="/usr/bin"
RUN export PATH="$DENO_INSTALL/bin:$PATH"
