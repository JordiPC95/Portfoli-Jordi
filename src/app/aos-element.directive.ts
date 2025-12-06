import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appAos]',
  standalone: true,
})
export class AosElementDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    const el = this.host.nativeElement;

    // Estado inicial (oculto y ligeramente desplazado)
    el.classList.add(
      'opacity-0',
      'translate-y-8',
      'transition-all',
      'duration-700',
      'ease-out'
    );

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.remove('opacity-0', 'translate-y-8');
            el.classList.add('opacity-100', 'translate-y-0');
            this.observer?.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
