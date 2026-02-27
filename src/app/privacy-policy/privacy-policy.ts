import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy-policy',
  imports: [RouterLink],
  templateUrl: './privacy-policy.html',
  styles: `
    main {
      max-width: 700px;
      margin: 60px auto;
      font-family: sans-serif;
      padding: 0 20px;
      line-height: 1.7;
    }
    a {
      color: #4f46e5;
      text-decoration: none;
      display: inline-block;
      margin-bottom: 24px;
    }
    a:hover {
      text-decoration: underline;
    }
    h1 {
      font-size: 2rem;
      margin-bottom: 4px;
    }
    h2 {
      font-size: 1.1rem;
      margin-top: 24px;
    }
    em {
      color: #666;
    }
  `,
})
export class PrivacyPolicy {}
