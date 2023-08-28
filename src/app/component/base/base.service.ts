import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { ValidatorsModel } from './models/user.model';
import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Configuration } from 'src/app/helpers/configuration';
import { AppInjector } from './app-injector.service';
import { HttpInterceptor } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService implements HttpInterceptor {
  genericError = 'Some error occured ';
  protected loggerSevice: LoggerService;
  public configuration = new Configuration();
  public requestOptions = {};
  public form_validators: ValidatorsModel = new ValidatorsModel();

  constructor(public http: HttpClient) {
    this.loggerSevice = AppInjector.getInjector().get(LoggerService);
    let headers = new HttpHeaders();
    let authHeaders = headers.set(
      'Authorization',
      'Bearer ' + this.configuration.accessToken
    );
    this.requestOptions = {
      headers: authHeaders,
    };
  }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req);
  }

  get<T>(url: string): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      this.http
        .get<T>(url, this.requestOptions)
        .toPromise()
        .then((resp) => {
          resolve(<T>resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  post<T>(url: string, body: object): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      this.http
        .post<T>(url, body, this.requestOptions)
        .toPromise()
        .then((resp) => {
          resolve(<T>resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  formPost<T>(url: string, body: any): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      this.http
        .post<T>(url, body, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .toPromise()
        .then((resp) => {
          resolve(<T>resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  userpost<T>(url: string, body: object): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      this.http
        .post<T>(url, body)
        .toPromise()
        .then((resp) => {
          resolve(<T>resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  put<T>(url: string, body: object): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      this.http
        .put<T>(url, body, this.requestOptions)
        .toPromise()
        .then((resp) => {
          resolve(<T>resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  delete<T>(url: string): Promise<T> {
    return new Promise<T>(async (resolve, reject) => {
      this.http
        .delete<T>(url, this.requestOptions)
        .toPromise()
        .then((resp) => {
          resolve(<T>resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
