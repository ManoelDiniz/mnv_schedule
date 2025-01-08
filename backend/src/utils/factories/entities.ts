import { CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";

abstract class Factory {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export { Factory };
