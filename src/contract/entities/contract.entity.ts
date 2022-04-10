import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ContractEnums } from '../contractEnums';

@Entity({ name: 'contract' })
export class ContractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({})
  dataOfCreatin: Date;

  @Column({})
  tldr: string;

  @Column({})
  itemId: number;

  @Column({ type: 'float' })
  itemPrice: number;

  @Column()
  itemCount: number;

  @Column()
  contractNumber: number;

  @Column({ type: 'enum', enum: ContractEnums })
  contractType: string;

  @Column()
  transactionType: string;

  @Column()
  contractPrice: number;
}