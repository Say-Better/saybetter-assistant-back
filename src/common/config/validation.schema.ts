import { plainToClass } from 'class-transformer';
import { validateSync, IsEnum, IsNumber } from 'class-validator';

export enum EnvName {
  Local = 'local',
  Test = 'test',
  Stage = 'stage',
  Prod = 'prod',
}

class EnvVariables {
  @IsEnum(EnvName)
  NODE_ENV: EnvName;

  @IsNumber()
  API_PORT: number;
}

export default function ConfigValidate(config: Record<string, unknown>) {
  const validatedConfig = plainToClass(EnvVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
