import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Colors, SetOfSizes } from './enums/enums';

@Entity({ name: 'clothing' })
export class Clothing {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'enum', enum: SetOfSizes })
  size: string;

  @Column({ type: 'enum', enum: Colors })
  color: string;

  @Column({ length: 280 })
  characteristics: string;

  @Column()
  createdAt: Date;

  @Column()
  updateAt: Date;
}