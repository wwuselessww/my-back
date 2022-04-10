import { Module } from '@nestjs/common';
import { ClothigController } from './clothig.controller';
import { ClothigService } from './clothig.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clothing } from './entities/clothing.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clothing])],
  controllers: [ClothigController],
  providers: [ClothigService],
})
export class ClothigModule {
}
