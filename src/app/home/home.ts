import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styles: `
    main {
      max-width: 600px;
      margin: 60px auto;
      font-family: sans-serif;
      padding: 0 20px;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 8px;
    }
    ul {
      margin-top: 20px;
      padding-left: 20px;
    }
    li {
      margin: 10px 0;
      font-size: 1.1rem;
    }
    a {
      color: #4f46e5;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  `,
})
export class Home {}
