import { NotFoundException } from '@nestjs/common';
import {
  DataSource,
  FindOneOptions,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from 'typeorm';
import { AppLogger } from '../logger';

export class BaseRepository<T extends ObjectLiteral> extends Repository<T> {
  private readonly logger?: AppLogger;
  constructor(
    entity: { new (...args: any[]): T },
    dataSource: DataSource,
    logger?: AppLogger,
  ) {
    super(entity, dataSource.createEntityManager());
    this.logger = logger;
  }

  async findOneByOrFail(
    where: FindOptionsWhere<T> | FindOptionsWhere<T>[],
  ): Promise<T> {
    const entity = await this.findOneBy(where);
    if (entity) return entity;

    if (this.logger) {
      this.logger.warn(
        `${this.metadata.name} Not Found : ${JSON.stringify(where)}`,
      );
    }

    throw new NotFoundException(`${this.metadata.name} not found`);
  }

  async findOneOrFail(options: FindOneOptions<T>): Promise<T> {
    const entity = await this.findOne(options);
    if (entity) return entity;

    if (this.logger) {
      this.logger.warn(
        `${this.metadata.name} Not Found : ${JSON.stringify(options)}`,
      );
    }

    throw new NotFoundException(`${this.metadata.name} not found`);
  }
}
