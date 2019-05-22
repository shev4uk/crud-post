import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPost } from './post';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get(`${apiUrl}/posts`);
  }

  createPost(post) {
    return this.http.post(`${apiUrl}/posts`, post)
    .pipe(
      catchError(this.handleError)
    )
  }

  updatePost(post, id) {
    return this.http.put(`${apiUrl}/posts/${id}`, post)
    .pipe(
      catchError(this.handleError)
    )
  }

  deletePost(id: number) {
    return this.http.delete(`${apiUrl}/posts/${id}`)
    .pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err) {
    console.log('caught mapping error and rethrowing', err);
    return throwError(err);
  }

}
