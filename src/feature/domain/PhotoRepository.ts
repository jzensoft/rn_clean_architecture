import { DataState } from "../../core/resource/DataState";
import { Photo } from "../data/model/Photo";

export interface PhotoRepository {
    getPhotos(): Promise<DataState<Photo[] | null>>
    
}