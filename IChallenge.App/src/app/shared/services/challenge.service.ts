import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { Challenge } from './challenge';
import { config } from './config';

@Injectable()
export class ChallengeService {

    constructor(private _http: Http) { }

    public get(id: string): Observable<Challenge>
    public get(): Observable<Challenge[]>
    public get(id?: string): any 
    {
        return id ? this._http.get(`${config.challengeApi}/${id}`).map<Response,Challenge>((r:Response)=>{
            return r.json();
        }) : this._http.get(config.challengeApi).map<Response,Challenge>((r:Response)=>{
            return r.json();
        });
    }

    public post(model: Challenge): Observable<Challenge> 
    {
        return this._http.post(config.challengeApi, model).map<Response, Challenge>((r: Response) => 
        {
            return r.json();
        });
    }

    public delete(id:string):Observable<Response>
    {
        return this._http.delete(`${config.challengeApi}/${id}`);
    }
}