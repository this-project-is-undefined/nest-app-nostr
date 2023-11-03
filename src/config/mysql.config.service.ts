/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class MySqlService implements TypeOrmOptionsFactory {
  constructor(private readonly _configService: ConfigService) {}
  createTypeOrmOptions(
    _connectionName?: string | undefined,
  ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: this._configService.get<string>('DB_HOST'),
      username: this._configService.get<string>('DB_USERNAME'),
      password: this._configService.get<string>('DB_PASSWORD'),
      database: this._configService.get<string>('DB_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: false,
    };
  }
}
