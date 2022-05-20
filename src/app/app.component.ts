import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { GithubService } from './github.service';
import { Repositorio } from './repositorio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'github-api';

  public repositorios: Repositorio[] = [];
  public nomeDeUsuario = "";

  constructor(private githubService: GithubService) { }

  public getRepositorios(): void {
    this.githubService.getRepositorio(this.nomeDeUsuario).subscribe({
      next: (response: Repositorio[]) => {
        this.repositorios = response;
      },
      error: (error: HttpErrorResponse) => {
        console.error(error.message);
      }
    });
  }

}
