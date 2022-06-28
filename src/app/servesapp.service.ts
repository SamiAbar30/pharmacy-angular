import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServesappService {
  readonly APIUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}

  //payes
  getpays(): Observable<any[]> {
    return  this.http.get<any>(this.APIUrl + '/pays');
  }
  updatepays(val: any,id:any) {
    return this.http.put(this.APIUrl + '/pays/'+id, val);
  }
  addpays(val: any) {
    return this.http.post(this.APIUrl + '/pays', val);
  }
  deletepays(val: any) {
    return this.http.delete(this.APIUrl + '/pays/' + val);
  }
  //region

  getregionall(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/region');
  }
  getregion(id:any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/region/'+id);
  }
  updateregion(val: any,id:any) {
    return this.http.put(this.APIUrl + '/region/'+id, val);
  }
  addregion(val: any) {
    return this.http.post(this.APIUrl + '/region', val);
  }
  deleteregion(val: any) {
    return this.http.delete(this.APIUrl + '/region/' + val);
  }
  //villes
  getvilleall(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ville');
  }
  getville(id:any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/ville/'+id);
  }
  updateville(val: any,id:any) {
    return this.http.put(this.APIUrl + '/ville/'+id, val);
  }
  addville(val: any) {
    return this.http.post(this.APIUrl + '/ville', val);
  }
  deleteville(val: any) {
    return this.http.delete(this.APIUrl + '/ville/' + val);
  }
  //zone
  getzoneall(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/zone');
  }
  getzone(id:any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/zone/'+id);
  }

  updatezone(val: any,id:any) {
    return this.http.put(this.APIUrl + '/zone/'+id, val);
  }
  addzone(val: any) {
    return this.http.post(this.APIUrl + '/zone', val);
  }
  deletezone(val: any) {
    return this.http.delete(this.APIUrl + '/zone/' + val);
  }

  getusers(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/users');
  }


   //pharmacie
   getdetail(id:any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/pharmacie/detail/'+id);
  }
  getpharmacie(id:any): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/pharmacie/'+id);
  }
  getpharmacieall(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/pharmacie/');
  }
  updatepharmacie(val: any,id:any) {
    return this.http.put(this.APIUrl + '/pharmacie/'+id, val);
  }
  addpharmacie(val: any) {
    return this.http.post(this.APIUrl + '/pharmacie', val);
  }
  deletepharmacie(val: any) {
    return this.http.delete(this.APIUrl + '/pharmacie/' + val);
  }


  deleteuser(val: any) {
    return this.http.delete(this.APIUrl + '/zone/' + val);
  }


  signUpadmin(val: any): Observable<any> {
    return this.http.put<any>(this.APIUrl + '/signUpadmin' , val);
  }
  Login(val: any): Observable<any> {
    return this.http.put<any>(this.APIUrl + '/signIn' , val);
  }
  sign(val: any) : Observable<any> {
    return this.http.put<any>(this.APIUrl + '/signUp' , val);
  }
  signout(val: any){
    return this.http.get(this.APIUrl + '/signOut/'+val);
  }
  Check(val: any) : Observable<any>{
    return this.http.get<any>(this.APIUrl + '/Check/'+val);
  }
}
