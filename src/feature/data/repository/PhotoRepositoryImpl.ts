import { inject, injectable } from "inversify";
import { injecttionKey } from "../../di/InjectionKey";
import { AxiosService } from "../remote/AxiosService";
import { DataState } from "../../../core/resource/DataState";
import { PhotoRepository } from "../../domain/PhotoRepository";
import { Photo } from "../model/Photo";
import { AxiosError } from "axios";

@injectable()
export class PhotoRepositoryImpl implements PhotoRepository {

    @inject(injecttionKey.AXIOS_SERVICE)
    _axiosService!: AxiosService

    async getPhotos(): Promise<DataState<Photo[] | null>> {
        try {
            const res = await this._axiosService.getInstance().get<Photo[] | null>("/photos")
            return new DataState(res.data, res.status == 200, res.statusText)
        } catch (e) {
            return new DataState(null, false, e + '')
        }
    }
}