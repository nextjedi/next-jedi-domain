import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team',
  imports: [RouterLink],
  templateUrl: './team.html',
  styles: [
    `
      .team-page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      /* ---- Hero ---- */
      .team-hero {
        padding: 96px 32px 72px;
        background: var(--color-bg);
      }
      .hero-inner {
        max-width: var(--max-width);
        margin: 0 auto;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 48px;
      }
      .hero-left {
        max-width: 680px;
      }
      .hero-eyebrow {
        display: block;
        font-size: 0.68rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: var(--color-primary);
        margin-bottom: 16px;
      }
      .hero-title {
        font-family: var(--font-headline);
        font-size: clamp(2.8rem, 6vw, 4.5rem);
        font-weight: 800;
        line-height: 1.05;
        letter-spacing: -0.03em;
        color: var(--color-text);
      }
      .hero-title em {
        color: var(--color-primary);
        font-style: italic;
      }
      .hero-right {
        max-width: 300px;
        flex-shrink: 0;
        padding-bottom: 6px;
      }
      .hero-desc {
        font-size: 1.05rem;
        color: var(--color-text-muted);
        line-height: 1.75;
        font-weight: 500;
      }

      /* ---- Team Cards ---- */
      .cards-section {
        padding: 0 32px 80px;
        background: var(--color-bg);
      }
      .cards-grid {
        max-width: var(--max-width);
        margin: 0 auto;
        display: grid;
        grid-template-columns: 7fr 5fr;
        gap: 24px;
        align-items: start;
      }

      /* Primary card */
      .member-card {
        border-radius: var(--radius-xl);
        padding: 40px;
        transition: transform 0.4s ease;
      }
      .member-card:hover {
        transform: scale(1.01);
      }
      .member-primary {
        background: var(--color-surface);
        display: flex;
        flex-direction: row;
        gap: 32px;
        align-items: flex-start;
      }
      .member-photo-wrap {
        flex-shrink: 0;
        overflow: hidden;
        background: var(--color-surface-high);
      }
      .member-photo-rect {
        width: 160px;
        height: 220px;
        border-radius: var(--radius-lg);
      }
      .member-photo-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top;
        display: block;
      }

      /* Secondary card */
      .member-secondary {
        background: var(--color-surface-low);
        display: flex;
        flex-direction: column;
        gap: 20px;
        border-top: 4px solid var(--color-primary);
        margin-top: 48px;
      }
      .member-photo-round {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        align-self: flex-end;
      }

      /* Shared member info */
      .member-info {
        flex: 1;
        min-width: 0;
      }
      .member-name {
        font-family: var(--font-headline);
        font-size: 1.75rem;
        font-weight: 800;
        color: var(--color-text);
        margin-bottom: 4px;
        letter-spacing: -0.02em;
      }
      .member-name-sm {
        font-size: 1.4rem;
      }
      .member-title {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-primary);
        margin-bottom: 20px;
      }
      .member-bio {
        font-size: 0.95rem;
        color: var(--color-text-muted);
        line-height: 1.75;
        margin-bottom: 24px;
      }
      .member-links {
        display: flex;
        gap: 10px;
      }
      .member-link {
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s, color 0.2s;
        text-decoration: none;
      }
      .member-link-pill {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--color-surface-low);
        color: var(--color-text);
      }
      .member-link-pill:hover {
        background: var(--color-primary);
        color: #fff;
      }
      .member-link-pill .material-symbols-outlined {
        font-size: 20px;
      }
      .member-link-bare {
        color: var(--color-text-muted);
        width: 36px;
        height: 36px;
      }
      .member-link-bare:hover {
        color: var(--color-primary);
      }
      .member-link-bare .material-symbols-outlined {
        font-size: 24px;
      }

      /* ---- Vision Section ---- */
      .vision-section {
        background: var(--color-surface-low);
        padding: 96px 32px;
        flex: 1;
      }
      .vision-inner {
        max-width: var(--max-width);
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: center;
      }
      .vision-eyebrow {
        display: block;
        font-size: 0.65rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: var(--color-primary);
        margin-bottom: 16px;
      }
      .vision-heading {
        font-family: var(--font-headline);
        font-size: clamp(1.75rem, 3.5vw, 2.75rem);
        font-weight: 800;
        letter-spacing: -0.02em;
        color: var(--color-text);
        line-height: 1.2;
        margin-bottom: 32px;
      }
      .vision-body {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .vision-body p {
        font-size: 1rem;
        color: var(--color-text-muted);
        line-height: 1.8;
      }

      /* Vision image */
      .vision-visual {
        position: relative;
      }
      .vision-image {
        aspect-ratio: 1;
        border-radius: var(--radius-xl);
        overflow: hidden;
        border: 2px solid transparent;
        background: linear-gradient(var(--color-surface), var(--color-surface)) padding-box,
                    linear-gradient(135deg, var(--color-primary), #4f46e5) border-box;
        box-shadow: var(--shadow-lg);
      }
      .vision-gradient {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #e2dfff 0%, #c3c0ff 30%, #3525cd 65%, #1a0fa0 100%);
        opacity: 0.9;
      }
      .vision-quote {
        position: absolute;
        bottom: -28px;
        left: -28px;
        background: var(--color-surface);
        padding: 24px 28px;
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-lg);
        max-width: 280px;
        display: none;
      }
      .quote-icon {
        font-size: 32px;
        color: var(--color-primary);
        display: block;
        margin-bottom: 12px;
      }
      .quote-text {
        font-family: var(--font-headline);
        font-weight: 700;
        font-size: 1rem;
        color: var(--color-text);
        font-style: italic;
        line-height: 1.5;
      }

      /* ---- Responsive ---- */
      @media (min-width: 1024px) {
        .vision-quote {
          display: block;
        }
      }

      @media (max-width: 860px) {
        .hero-inner {
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-right {
          max-width: 100%;
        }
        .cards-grid {
          grid-template-columns: 1fr;
        }
        .member-secondary {
          margin-top: 0;
        }
        .vision-inner {
          grid-template-columns: 1fr;
        }
        .vision-visual {
          display: none;
        }
      }

      @media (max-width: 560px) {
        .team-hero {
          padding: 72px 20px 56px;
        }
        .cards-section {
          padding: 0 20px 60px;
        }
        .member-card {
          padding: 24px 20px;
        }
        .member-primary {
          flex-direction: column;
        }
        .member-photo-rect {
          width: 100%;
          height: 200px;
        }
        .vision-section {
          padding: 64px 20px;
        }
      }
    `,
  ],
})
export class TeamPage {}
