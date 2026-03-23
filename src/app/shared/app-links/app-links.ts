import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-links',
  imports: [RouterLink],
  template: `
    <nav class="links">
      <a class="link" [routerLink]="'/' + appSlug() + '/privacy-policy'">Privacy Policy</a>
      <a class="link" [routerLink]="'/' + appSlug() + '/support'">Support</a>
      <a class="link" [routerLink]="'/' + appSlug() + '/marketing'">Marketing</a>
    </nav>
  `,
  styles: `
    .links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .link {
      display: inline-block;
      padding: 8px 18px;
      border-radius: var(--radius-sm);
      border: 1px solid var(--color-border);
      background: var(--color-surface);
      font-size: 0.875rem;
      color: var(--color-text-muted);
      transition: border-color 0.15s, color 0.15s, background 0.15s;
    }

    .link:hover {
      border-color: var(--color-primary);
      color: var(--color-primary);
      background: var(--color-primary-light);
      text-decoration: none;
    }
  `,
})
export class AppLinks {
  appSlug = input.required<string>();
}
