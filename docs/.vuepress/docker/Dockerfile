FROM oberonamsterdam/pm2-git:12-alpine
MAINTAINER skymrwt@gmail.com

# RUN mkdir -p /usr/src/app/node-sass
# COPY  node-sass.node /usr/src/app/node-sass
# ENV SASS_BINARY_PATH /usr/src/app/node-sass/node-sass.node

RUN yarn global add lerna \
    && yarn global add nrm \
    && yarn global add typescript \
    && yarn global add ts-node \
    && yarn global add node-sass

EXPOSE 80

# VOLUME /root/front-end

WORKDIR /root
CMD ["sh", "ls", "-a" ]
