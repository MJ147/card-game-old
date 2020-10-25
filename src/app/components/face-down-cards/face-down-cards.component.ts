import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-down-cards',
  templateUrl: './face-down-cards.component.html',
  styleUrls: ['./face-down-cards.component.less']
})
export class FaceDownCardsComponent implements OnInit {
  @Input() set numberOfCards(numberOfCards: number) {
      this.numbers = Array(numberOfCards).fill(0);
  }
  @Input() cardOverlap: number;
  numbers: number[];
  maxCardsSpaceWidth: number;
  cardWidth = 200;

  constructor(private _element: ElementRef) { }

  ngOnInit(): void {
    this.maxCardsSpaceWidth = this._element.nativeElement.clientWidth;
    console.log(this._element);

    if (this.cardsSpaceWidth > this.maxCardsSpaceWidth){
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
    const outSideCardSpace = this.cardsSpaceWidth - this.maxCardsSpaceWidth;
    const cardMoveCorrection = outSideCardSpace / (this.numbers.length - 1);
    this.cardOverlap = this.cardOverlap - cardMoveCorrection;
  }
}
