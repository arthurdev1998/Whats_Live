import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../environments/environment";
import { User } from "../models/user.model";


@Injectable({
    providedIn: 'root'
})
export class UserService{

    private http = inject(HttpClient);
    private urlApi = `${environment.urlApi}`

    getUser(){
        return this.http.get<User[]>(`${this.urlApi}`)
    }
}