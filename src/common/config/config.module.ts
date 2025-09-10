import { Module } from "@nestjs/common";
import GlobalConfigService from "./config.service";
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import ConfigValidate from "./validation.schema";

@Module({
    imports: [
    NestConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      validate: ConfigValidate,
    }),
  ],
    providers: [GlobalConfigService],
    exports: [GlobalConfigService],
  })
  export default class GlobalConfigModule {}