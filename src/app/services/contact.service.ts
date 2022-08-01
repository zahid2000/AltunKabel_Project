import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private api = 'https://mailthis.to/alias';
 
  constructor(private httpClient: HttpClient) {}

  postMessage(input: any) {
    return this.httpClient.post(this.api, input, { responseType: 'text' }).pipe(
      map(
        (response:any) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }


}
