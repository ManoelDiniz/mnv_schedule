/* eslint-disable @typescript-eslint/no-explicit-any */
import { Repository } from "typeorm";

interface IRepository {
  setOrmRepository(ormRepository: any): void;
  getOrmRepository(): any;
}
abstract class BaseRepository<T> implements IRepository {
  protected ormRepository: Repository<T>;

  public setOrmRepository(ormRepository: Repository<T>): void {
    this.ormRepository = ormRepository;
  }

  public getOrmRepository(): Repository<T> {
    return this.ormRepository;
  }
}

export { BaseRepository };
