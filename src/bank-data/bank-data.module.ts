import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BankDataEntity } from './entities/bankData.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BankDataEntity])],
})
export class BankDataModule {
}
