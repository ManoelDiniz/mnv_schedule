import { User } from "../../database/entity/User";
import { AppDataSource } from "../../database/dataSource";
import { BaseRepository } from "../../utils/factories/repository";
import { Repository } from "typeorm";

export class UserRepository extends BaseRepository<User> {
  protected ormRepository: Repository<User> = AppDataSource.getRepository(User);

  async get(data: Partial<User>): Promise<User> {
    return await this.ormRepository.findOne({ where: data });
  }

  async create(data: Partial<User>): Promise<User> {
    return await this.ormRepository.save(data);
  }

  async update(data: Partial<User>): Promise<void> {
    const { id, ...userData } = data;

    const filter = {
      id,
    };

    await this.ormRepository.update(filter, userData);
  }
}
