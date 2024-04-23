FROM node:20-alpine

WORKDIR /app/
COPY . /app/

RUN npm install
RUN npm install firebase react-firebase-hooks 
RUN npm install firebase-tools -g
RUN firebase init
RUN firebase hosting:channel:deploy

EXPOSE 3000

CMD ["npm", "start"] 