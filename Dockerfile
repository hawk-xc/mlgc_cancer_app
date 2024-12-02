FROM node:18
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV APP_ENV=production
ENV APP_PORT=8080
ENV MODEL_URL="https://storage.googleapis.com/wahyu_model_storage/model-in-prod/model.json"
ENV PROJECT_ID="golden-cove-443407-t3"
ENV GOOGLE_APPLICATION_CREDENTIALS=config/app_credentials.json


CMD [ "npm", "start" ]

EXPOSE 8080