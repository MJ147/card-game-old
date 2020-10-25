import { Component, ElementRef, HostBinding, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-face-down-cards',
  templateUrl: './face-down-cards.component.html',
  styleUrls: ['./face-down-cards.component.less']
})
export class FaceDownCardsComponent implements OnInit {
  @HostBinding('style') style;
  @Input() set numberOfCards(numberOfCards: number) {
    this.numbers = Array(numberOfCards).fill(0);
  }
  @Input() cardOverlap = 1;
  @Input() set direction(direction: string) {
    if (direction === 'vertical') {
      this.style = this._sanitizer.bypassSecurityTrustStyle('display: block; transform-origin: top left; transform: rotate(-90deg) translate(-100%);');
    }
  }
  numbers: number[];
  maxCardsSpace: number;
  cardWidth = 200;

  constructor(private _element: ElementRef, private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.maxCardsSpace = this.direction === 'vertical' ? this._element.nativeElement.clientHeight : this._element.nativeElement.clientWidth;
    if (this.cardsSpaceWidth > this.maxCardsSpace){
      this.adjustCardOverlap();
    }
  }

  getMoveFromLeft(idx: number): string {
      return `${idx * this.cardOverlap}px`;
  }

  get cardsSpaceWidth(): number{
      return this.cardWidth + (this.numbers.length - 1) * this.cardOverlap;
  }

  adjustCardOverlap(): void {
    const outSideCardSpace = this.cardsSpaceWidth - this.maxCardsSpace;
    const cardMoveCorrection = outSideCardSpace / (this.numbers.length - 1);
    this.cardOverlap = this.cardOverlap - cardMoveCorrection;
  }

  getdirection(): string {
    if (this.direction !== 'horizontal') {
      return 'left';
    }
    return 'top';
  }
}
