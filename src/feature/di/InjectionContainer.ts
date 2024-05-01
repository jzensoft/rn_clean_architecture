import { Container } from "inversify";
import { AxiosService } from "../data/remote/AxiosService";
import { injecttionKey } from "./InjectionKey";
import { PhotoRepositoryImpl } from "../data/repository/PhotoRepositoryImpl";
import { PhotoRepository } from "../domain/PhotoRepository";

const container = new Container()
container.bind<AxiosService>(injecttionKey.AXIOS_SERVICE).to(AxiosService)
container.bind<PhotoRepository>(injecttionKey.PHOTO_REPOSITORY).to(PhotoRepositoryImpl)

export { container }