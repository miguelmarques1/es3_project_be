import { Domain } from "domain";
import { DomainValidation } from "../Validation/DomainValidation";
import { ISBN } from "../ValueObject/ISBN";
import { Category } from "./Category";
import { PrecificationGroup } from "./PrecificationGroup";

export enum BookState {
    Active = 1,
    Inactive = 0
}

export class Book {
    readonly isbn: ISBN;
    protected state: BookState;

    constructor(
        readonly author: string,
        readonly category: Category,
        readonly year: number,
        readonly title: string,
        readonly publisher: string,
        readonly pricificationGroup: PrecificationGroup,
        readonly manufactoringCosts: number,
        readonly edition: number,
        readonly pagesQt: number,
        readonly sinopse: string,
        readonly height: number,
        readonly width: number,
        readonly weight: number,
        readonly depth: number,
        readonly price: number,
        isbn: string,
        state: BookState | null = null,
        readonly id: number | null = null,
        readonly createdAt: Date | null = null,
        readonly updatedAt: Date | null = null,
    ) {
        this.isbn = new ISBN(isbn);
        this.state = state ?? BookState.Active;
        this.validate();
    }

    getState(): BookState {
        return this.state;
    }

    setState(state: BookState): void {
        this.state = state;
    }

    private validate() {
        DomainValidation.numNotNegative(this.year, "Invalid books year");
        DomainValidation.strDefaultLenght(this.title, "Invalid books title");
        DomainValidation.numNotNegative(this.manufactoringCosts, "Invalid books manufactoring costs");
        DomainValidation.strDefaultLenght(this.author, "Invalid books author");
        DomainValidation.strDefaultLenght(this.publisher, "Invalid books author");
        DomainValidation.numNotNegative(this.edition, "Invalid books edition");
        DomainValidation.numNotNegative(this.pagesQt, "Invalid books pages quantity");
        DomainValidation.numIsInteger(this.pagesQt, "Invalid books pages quantity");
        DomainValidation.numNotNegative(this.height, "Invalid books height");
        DomainValidation.numNotNegative(this.width, "Invalid books width");
        DomainValidation.numNotNegative(this.weight, "Invalid books weight");
        DomainValidation.numNotNegative(this.depth, "Invalid books depth");
    }
}