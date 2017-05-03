FROM node:7.9.0
MAINTAINER Prasath Soosaithasan <prasath.soosaithasan@gmail.com>

# -------------------------------------------------------------------------
#  Switch to non-root user
# -------------------------------------------------------------------------
RUN groupadd -r nodejs && useradd -m -r -g nodejs nodejs
USER nodejs

# -------------------------------------------------------------------------
#  Create src directory
# -------------------------------------------------------------------------
RUN mkdir -p /home/nodejs/app
WORKDIR /home/nodejs/app

# -------------------------------------------------------------------------
#  Build application artefacts
# -------------------------------------------------------------------------
COPY package.json yarn.lock ./
RUN yarn install --pure-lockfile
RUN yarn run build-storybook

# -------------------------------------------------------------------------
#  Bake application into image
# -------------------------------------------------------------------------
COPY dist-storybook  ./

# -------------------------------------------------------------------------
#  Serve application artefacts w/ a node.js/express webserver
# -------------------------------------------------------------------------
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "server.js"]
