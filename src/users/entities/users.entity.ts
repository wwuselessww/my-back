import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  firstName: string;

  @Column({ length: 20 })
  lastName: string;

  @Column({ length: 40 })
  patronymic: string;

  @Column({ unique: true })
  bankAccount: number;

  @Column({ unique: true, length: 10 })
  phone: string;

  @Column()
  notes: string;
}
