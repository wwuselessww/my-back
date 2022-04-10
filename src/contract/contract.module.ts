import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractEntity } from './entities/contract.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContractEntity])],
})
export class ContractModule {
}
