import { DefaultNamingStrategy, type NamingStrategyInterface } from 'typeorm';

export class MysqlNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  columnName(
    propertyName: string,
    customName: string,

    embeddedPrefixes: string[],
  ): string {
    return customName || this.camelToSnake(propertyName); // 카멜케이스를 스네이크 케이스로 변환
  }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return this.camelToSnake(referencedColumnName);
  }

  relationName(propertyName: string): string {
    return propertyName;
  }

  private camelToSnake(str: string): string {
    return str.replaceAll(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`); // 카멜케이스를 스네이크 케이스로 변환
  }
}
