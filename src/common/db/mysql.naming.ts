import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';

export class MysqlNamingStrategy
  extends DefaultNamingStrategy
  implements NamingStrategyInterface
{
  columnName(
    propertyName: string,
    customName: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    embeddedPrefixes: string[],
  ): string {
    return customName ? customName : this.camelToSnake(propertyName); // 카멜케이스를 스네이크 케이스로 변환
  }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return this.camelToSnake(referencedColumnName);
  }

  relationName(propertyName: string): string {
    return propertyName;
  }

  private camelToSnake(str: string): string {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`); // 카멜케이스를 스네이크 케이스로 변환
  }
}
