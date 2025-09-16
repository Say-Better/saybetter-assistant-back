FROM node:20-alpine

WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

# NestJS 빌드
RUN npm run build

# 포트 노출
EXPOSE 3000

# 애플리케이션 실행
CMD ["npm", "run", "doc:api"]