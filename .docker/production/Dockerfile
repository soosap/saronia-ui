FROM nginx:1.13.2-alpine
MAINTAINER Prasath Soosaithasan <prasath.soosaithasan@gmail.com>

# Embed application files into image -------------------------------------------
COPY storybook-static /usr/share/nginx/html

# Embed custom nginx.conf file -------------------------------------------------
COPY .docker/production/nginx.conf /etc/nginx/nginx.conf
