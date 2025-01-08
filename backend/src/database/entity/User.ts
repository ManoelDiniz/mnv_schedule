import { Factory } from "../../utils/factories/entities";
import { Column, Entity } from "typeorm";

@Entity("user")
class User extends Factory {
  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  login: string;

  @Column()
  email: string;

  @Column()
  document: string;
}

export { User };
