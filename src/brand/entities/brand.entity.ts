import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'brand' })
export class BrandEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  brandName: string;

  @Column({ length: 50 })
  address: string;

  @Column({ length: 60 })
  ceo: string;

  @Column({ length: 60 })
  accountant: string;

  @Column({ precision: 11 })
  bic: string;

  @Column()
  logo: string;

  @Column()
  updataAt: Date;
}