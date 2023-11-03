import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  public id: number;

  @Column({ name: 'npub', type: 'varchar', length: 255 })
  public npub: string;
}
