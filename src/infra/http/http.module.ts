import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CryptographyModule } from '../cryptography/cryptography.module';
import { CreateAccountController } from './controllers/create-account.controller';
import { RegisterUseCase } from '@/domain/diet/application/use-cases/register';
import { AuthenticateController } from './controllers/authenticate.controller';
import { AuthenticateUserUseCase } from '@/domain/diet/application/use-cases/authenticate-user';
import { CreateMealController } from './controllers/create-meal.controller';
import { CreateMealUseCase } from '@/domain/diet/application/use-cases/create-meal';
import { EditMealController } from './controllers/edit-meal.controller';
import { EditMealUseCase } from '@/domain/diet/application/use-cases/edit-meal';
import { DeleteMealController } from './controllers/delete-meal.controller';
import { DeleteMealUseCase } from '@/domain/diet/application/use-cases/delete-meal';
import { GetSpecificMealController } from './controllers/get-specific-meal.controller';
import { GetSpecificMealUseCase } from '@/domain/diet/application/use-cases/get-specific-meal';
import { FetchUserMealsController } from './controllers/fetch-user-meals.controller';
import { FetchUserMealsUseCase } from '@/domain/diet/application/use-cases/fetch-user-meals';
import { GetUserMetricsController } from './controllers/get-user-metrics.controller';
import { GetUserMetricsUseCase } from '@/domain/diet/application/use-cases/get-user-metrics';

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateMealController,
    EditMealController,
    DeleteMealController,
    GetSpecificMealController,
    FetchUserMealsController,
    GetUserMetricsController,
  ],
  providers: [
    RegisterUseCase,
    AuthenticateUserUseCase,
    CreateMealUseCase,
    EditMealUseCase,
    DeleteMealUseCase,
    GetSpecificMealUseCase,
    FetchUserMealsUseCase,
    GetUserMetricsUseCase,
  ],
})
export class HttpModule {}
