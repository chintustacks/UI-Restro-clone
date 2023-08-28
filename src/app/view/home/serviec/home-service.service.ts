import { Injectable } from '@angular/core';
import { extend } from 'jquery';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from 'src/app/component/base/base.service';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService extends BaseService {


  isLoading = new BehaviorSubject<boolean>(false);
  show() {
    this.isLoading.next(true);
  }
  hide() {
    this.isLoading.next(false);
  }

  
  async getUserList(): Promise<any> {
    this.show()
    const url = "https://64ec3824f9b2b70f2bf9f4e1.mockapi.io/gmrrestro"
      return new Promise<any>(async (resolve, reject) => {
        await this.get<any>(url)
          .then((resp) => {
            resolve(<any>resp);
            this.hide()
          })
          .catch((err) => {
  
            reject(err);
          });
      });
    }


    async update(i:any): Promise<any> {
      return new Promise<any>(async (resolve, reject) => {
        const url = "https://dummyjson.com/users/1";
        await this.put<any>(url,i)
          .then((resp) => {
            resolve(<any>resp);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }

    async deleteuser(): Promise<any> {
      return new Promise<any>(async (resolve, reject) => {
        const url = "https://dummyjson.com/users/1";
        await this.delete(url)
          .then((resp) => {
            resolve(<any>resp);
          })
          .catch((err) => {
            reject(err);
          });
      });
    }
}
