# Saybetter

## Installation

```bash
# 1. node_modules
npm ci
# 2. When synchronize database from existing entities
npm run entity:sync
# 2-1. When import entities from an existing database
npm run entity:load
```

## Development

```bash
npm run start:dev
# https://docs.nestjs.com/recipes/repl
npm run start:repl
```

## Test

```bash
npm run test
npm run test:watch
npm run test:cov
npm run test:debug
npm run test:e2e
```

## Folders

> [예시](https://github.com/CatsMiaow/nestjs-project-structure?tab=readme-ov-file#folders) 를 참조하였습니다.

```
+-- bin // Custom tasks
+-- dist // Source build
+-- src
|   +-- config // Environment Configuration
|   +-- entity // TypeORM Entities
|   +-- auth // Authentication
|   +-- common // Global Nest Module
|   |   +-- constants // Constant value and Enum
|   |   +-- controllers // Nest Controllers
|   |   +-- decorators // Nest Decorators
|   |   +-- dto // DTO (Data Transfer Object) Schema, Validation
|   |   +-- filters // Nest Filters
|   |   +-- guards // Nest Guards
|   |   +-- interceptors // Nest Interceptors
|   |   +-- interfaces // TypeScript Interfaces
|   |   +-- middleware // Nest Middleware
|   |   +-- pipes // Nest Pipes
|   |   +-- providers // Nest Providers
|   |   +-- * // models, repositories, services...
|   +-- shared // Shared Nest Modules
|   +-- * // Other Nest Modules, non-global, same as common structure above
+-- test // Jest testing
+-- typings // Modules and global type definitions

// Module structure
// Add folders according to module scale. If it's small, you don't need to add folders.
+-- src/greeter
|   +-- * // folders
|   +-- greeter.constant.ts
|   +-- greeter.controller.ts
|   +-- greeter.service.ts
|   +-- greeter.module.ts
|   +-- greeter.*.ts
|   +-- index.ts
```
