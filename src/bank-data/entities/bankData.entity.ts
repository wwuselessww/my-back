import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'bankdata' })
export class BankDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productName: string;

  @Column({ length: 11 })
  bic: string;

  @Column()
  contractNumber: number;

  @Column()
  dateSale: Date;

  @Column()
  dateShipping: Date;

  @Column({ type: 'float' })
  price: number;

  @Column()
  noteOfDispatch: string;

  @Column()
  noteOfPayment: string;
}