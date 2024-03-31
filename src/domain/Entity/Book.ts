import { Domain } from "domain";
import { DomainValidation } from "../Validation/DomainValidation";
import { ISBN } from "../ValueObject/ISBN";
import { Author } from "./Author";
import { Category } from "./Category";
import { PrecificationGroup } from "./PrecificationGroup";
import { Publisher } from "./Publisher";

export enum BookState {
    Active = 1,
    Inactive = 0
}

export class Book {
    private author!: Author;
    private category!: Category;
    private year!: number;
    private title!: string;
    private publisher!: Publisher;
    private precificationGroup!: PrecificationGroup;
    private manufactoringCosts!: number;
    private edition!: number;
    private isbn!: ISBN;
    private pagesQt!: number;
    private sinopse!: string;
    private height!: number;
    private width!: number;
    private weight!: number;
    private depth!: number;
    private state!: BookState;

    
    constructor(
        author: Author,
        category: Category,
        year: number,
        title: string,
        publisher: Publisher,
        pricificationGroup: PrecificationGroup,
        manufactoringCosts: number,
        edition: number,
        isbn: string,
        pagesQt: number,
        sinopse: string,
        height: number,
        width: number,
        weight: number,
        depth: number,
        state: BookState|null = null,
        private id: number|null = null,
        private createdAt: Date|null = null,
        private updatedAt: Date|null = null,
    ) {
        this.author = author;
        this.category = category;
        this.publisher = publisher;
        this.precificationGroup = pricificationGroup;
        this.isbn = new ISBN(isbn);
        this.setYear(year);
        this.setManufactoringCosts(manufactoringCosts);
        this.setEdition(edition);
        this.setTitle(title);
        this.setPagesQt(pagesQt);
        this.setSinopse(sinopse);
        this.setHeight(height);
        this.setWidth(width);
        this.setWeight(weight);
        this.setDepth(depth);
        this.state = state ?? BookState.Active;
    }

    setDepth(depth: number) {
        this.depth = depth;
        this.validate();
    } 

    setWeight(weight: number) {
        this.weight = weight;
        this.validate();
    }

    setWidth(width: number) {
        this.width = width;
        this.validate();
    }

    setHeight(height: number) {
        this.height = height;
        this.validate();
    }

    setSinopse(sinopse: string) {
        this.sinopse = sinopse;
        this.validate();
    }

    setPagesQt(pagesQt: number) {
        this.pagesQt = pagesQt;
        this.validate();
    }

    setTitle(title: string) {
        this.title = title;
        this.validate();
    }

    setYear(year: number) {
        this.year = year;
        this.validate();
    }

    setManufactoringCosts(manufactoringCosts: number) {
        this.manufactoringCosts = manufactoringCosts;
        this.validate();
    }

    setEdition(edition: number) {
        this.edition = edition;
        this.validate();
    }

    private validate() {
        DomainValidation.numNotNegative(this.year, "Invalid books year");
        DomainValidation.strDefaultLenght(this.title, "Invalid books title");
        DomainValidation.numNotNegative(this.manufactoringCosts, "Invalid books manufactoring costs");
        DomainValidation.numNotNegative(this.edition, "Invalid books edition");
        DomainValidation.numNotNegative(this.pagesQt, "Invalid books pages quantity");
        DomainValidation.numIsInteger(this.pagesQt, "Invalid books pages quantity");
        DomainValidation.numNotNegative(this.height, "Invalid books height");
        DomainValidation.numNotNegative(this.width, "Invalid books width");
        DomainValidation.numNotNegative(this.weight, "Invalid books weight");
        DomainValidation.numNotNegative(this.depth, "Invalid books depth");
    }
}