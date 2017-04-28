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
#  Bake application into image
# -------------------------------------------------------------------------
#  Whatever you do not want to be part of the image exclude it via
#  .dockerignore
# -------------------------------------------------------------------------
COPY package.json .
RUN npm install --production
COPY . .

# -------------------------------------------------------------------------
#  Build application artefacts
# -------------------------------------------------------------------------
RUN npm run build-storybook

# -------------------------------------------------------------------------
#  Serve application artefacts w/ a node.js/express webserver
# -------------------------------------------------------------------------
ENV PATH=./node_modules/.bin:${PATH}
ENV NODE_ENV=production
EXPOSE 3000

CMD ["babel-node", "server.js"]
