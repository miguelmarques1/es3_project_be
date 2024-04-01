export class StockBook {
    constructor(
        readonly book_id: number,
        readonly id: number|null = null,
        readonly quantity: number = 0
    ) {}

    
}