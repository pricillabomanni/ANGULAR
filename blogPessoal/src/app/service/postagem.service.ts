 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }  

//CRUD - Create(post), Read(get), Update(put) e delete(delete);

//getAllPostagens é o Read nesse caso;

  token = {
    headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
  };

  getAllPostagens(){
    return this.http.get("http://localhost:8080/postagens", this.token);
  }

  getByIdPostagem(id: number){
    return this.http.get(`http://localhost:8080/postagens/${id}`, this.token);
  }

  postPostagem(postagem: Postagem){
    return this.http.post('http://localhost:8080/postagens', postagem, this.token);
  }

  putPostagem(postagem: Postagem){
    return this.http.put('http://localhost:8080/postagens', postagem, this.token);
  }

  deletePostagem(id:number){
    return this.http.delete(`http://localhost:8080/postagens/${id}`, this.token);
  }

  findByTitulo(titulo: string){
    return this.http.get(`http://localhost:8080/postagens/titulo/${titulo}`, this.token);
  }

}
