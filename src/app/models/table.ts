export interface Table {
	id: number;
	name: string;
	deckDto: DeckDto;
	players: Player[];
	cards: Card[];
}

export interface Player {
	id?: number;
	name?: string;
	sex?: string;
	age?: number;
	cards?: Card[];
}

export interface DeckDto {
	id: number;
	cards: Card[];
}

export interface Card {
	id: number;
	rank: string;
	suit: string;
}
