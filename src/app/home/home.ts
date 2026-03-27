import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { APPS } from '../apps.config';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styles: [
    `
      .portfolio {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
      }

      /* ---- Hero ---- */
      .hero {
        position: relative;
        padding: 96px 32px 88px;
        text-align: center;
        overflow: hidden;
      }
      .hero-bg {
        position: absolute;
        inset: 0;
        background: radial-gradient(
          ellipse 80% 60% at 50% 0%,
          rgba(53, 37, 205, 0.06) 0%,
          transparent 70%
        );
        pointer-events: none;
      }
      .hero-inner {
        position: relative;
        z-index: 1;
        max-width: 720px;
        margin: 0 auto;
      }
      .hero-eyebrow {
        display: inline-block;
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--color-primary);
        margin-bottom: 20px;
      }
      .hero-title {
        font-family: var(--font-headline);
        font-size: clamp(2.4rem, 5.5vw, 3.75rem);
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.03em;
        color: var(--color-text);
        margin-bottom: 20px;
      }
      .hero-title em {
        color: var(--color-primary);
        font-style: italic;
      }
      .hero-sub {
        font-size: 1.1rem;
        color: var(--color-text-muted);
        max-width: 500px;
        margin: 0 auto;
        line-height: 1.75;
      }

      /* ---- Apps section ---- */
      .apps-section {
        flex: 1;
        padding: 0 32px 80px;
      }
      .apps-inner {
        max-width: var(--max-width);
        margin: 0 auto;
      }
      .section-label {
        font-size: 0.7rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--color-text-light);
        margin-bottom: 20px;
      }

      /* ---- Bento grid ---- */
      .bento-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
      }
      .bento-grid > :nth-child(1) {
        grid-column: span 2;
      }
      .bento-grid > :nth-child(4) {
        grid-column: span 2;
      }
      .bento-grid > :nth-child(5) {
        grid-column: 1 / -1;
      }

      /* ---- Cards ---- */
      .bento-card {
        display: flex;
        flex-direction: column;
        background: var(--color-surface);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: 28px;
        min-height: 220px;
        text-decoration: none;
        color: inherit;
        transition:
          border-color 0.2s ease,
          box-shadow 0.2s ease,
          transform 0.2s ease;
        cursor: pointer;
      }
      .bento-card:hover {
        border-color: var(--accent);
        box-shadow:
          0 0 0 1px var(--accent),
          var(--shadow-md);
        transform: translateY(-2px);
        text-decoration: none;
      }

      /* Wide cards */
      .bento-grid > :nth-child(1),
      .bento-grid > :nth-child(4) {
        min-height: 260px;
      }

      /* Full-width last card — horizontal grid layout */
      .bento-grid > :nth-child(5) {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        column-gap: 32px;
        row-gap: 0;
        min-height: 140px;
        padding: 28px 36px;
      }
      .bento-grid > :nth-child(5) .card-header {
        margin-bottom: 0;
      }
      .bento-grid > :nth-child(5) .card-badge {
        display: none;
      }
      .bento-grid > :nth-child(5) .card-body {
        margin-bottom: 0;
      }
      .bento-grid > :nth-child(5) .card-name {
        font-size: 1.5rem;
      }
      .bento-grid > :nth-child(5) .card-desc {
        margin-bottom: 0;
      }
      .bento-grid > :nth-child(5) .card-cta-row {
        margin-top: 0;
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 20px;
        flex-shrink: 0;
      }
      .card-icon-wrap {
        width: 52px;
        height: 52px;
        border-radius: var(--radius-sm);
        background: var(--accent-light);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .card-icon {
        font-size: 26px;
        color: var(--accent-dark);
      }
      .card-badge {
        font-size: 0.68rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--accent-dark);
        background: var(--accent-light);
        padding: 4px 10px;
        border-radius: var(--radius-full);
        white-space: nowrap;
      }
      .card-body {
        flex: 1;
        margin-bottom: 20px;
      }
      .card-name {
        font-family: var(--font-headline);
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--color-text);
        margin-bottom: 10px;
        letter-spacing: -0.01em;
      }
      .card-desc {
        font-size: 0.9rem;
        color: var(--color-text-muted);
        line-height: 1.65;
      }
      .card-cta-row {
        margin-top: auto;
        flex-shrink: 0;
      }
      .card-cta {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--accent);
        transition: gap 0.2s;
      }
      .bento-card:hover .card-cta {
        gap: 10px;
      }
      .cta-arrow {
        font-size: 18px;
      }

      /* ---- Home nav links ---- */
      .home-nav-links {
        display: flex;
        align-items: center;
        gap: 28px;
        margin-left: auto;
      }
      .home-nav-link {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--color-text-muted);
        text-decoration: none;
        transition: color 0.15s;
      }
      .home-nav-link:hover {
        color: var(--color-primary);
      }

      /* ---- Home footer ---- */
      .home-footer {
        background: var(--color-surface-highest);
        border-top: 1px solid var(--color-border);
        padding: 28px 32px;
      }
      .hf-inner {
        max-width: var(--max-width);
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
      .hf-brand {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .hf-icon {
        font-size: 18px;
        color: var(--color-primary);
      }
      .hf-name {
        font-family: var(--font-headline);
        font-weight: 700;
        font-size: 0.95rem;
        color: var(--color-text);
      }

      /* ---- Responsive ---- */
      @media (max-width: 860px) {
        .bento-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .bento-grid > :nth-child(1) {
          grid-column: span 2;
        }
        .bento-grid > :nth-child(4) {
          grid-column: span 2;
        }
        .bento-grid > :nth-child(5) {
          grid-column: span 2;
          display: flex;
          flex-direction: column;
        }
        .bento-grid > :nth-child(5) .card-header {
          margin-bottom: 20px;
        }
        .bento-grid > :nth-child(5) .card-badge {
          display: block;
        }
        .bento-grid > :nth-child(5) .card-body {
          margin-bottom: 20px;
        }
        .bento-grid > :nth-child(5) .card-cta-row {
          margin-top: auto;
        }
      }

      @media (max-width: 560px) {
        .hero {
          padding: 60px 20px 52px;
        }
        .apps-section {
          padding: 0 20px 60px;
        }
        .home-footer {
          padding: 28px 20px;
        }
        .bento-grid {
          grid-template-columns: 1fr;
        }
        .bento-grid > :nth-child(1),
        .bento-grid > :nth-child(4),
        .bento-grid > :nth-child(5) {
          grid-column: span 1;
        }
        .bento-grid > :nth-child(5) {
          display: flex;
          flex-direction: column;
        }
      }
    `,
  ],
})
export class Home {
  protected apps = APPS;
}
