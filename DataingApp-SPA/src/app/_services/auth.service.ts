import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  baseUrl = "http://localhost:5000/api/auth/";
  name: string;

  constructor(private httpClient: HttpClient) {}

  login(model: any = {}) {
    return this.httpClient.post(this.baseUrl + "login", model).pipe(
      map((response: any) => {
        const user = response;

        if (user) {
          this.name = user.name;
          localStorage.setItem("token", user.token);
        }
      })
    );
  }

register(model:any={}){
 return this.httpClient.post(this.baseUrl + 'register',model);
}

}
