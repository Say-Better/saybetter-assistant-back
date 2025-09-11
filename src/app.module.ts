import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import GlobalConfigModule from "./common/config/config.module";
import { LoggerModule } from "./common/logger/logger.module";
import { MysqlModule } from "./common/db/mysql.module";
import { MemberModule } from "./module/member/member.module";

@Module({
  imports: [GlobalConfigModule, MysqlModule, LoggerModule, MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
