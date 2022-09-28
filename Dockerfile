FROM node:14

COPY . /
ENV NODE_OPTIONS=--max_old_space_size=2048
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]