import { ISBN } from "../ValueObject/ISBN";
import { Author } from "./Author";
import { Category } from "./Category";
import { PrecificationGroup } from "./PrecificationGroup";
import { Publisher } from "./Publisher";

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
        private id: number|null = null,
        private createdAt: Date|null = null,
        private updatedAt: Date|null = null
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
    }

    setYear(year: number) {
        this.year = year;
        this.validate();
    }

    setManufactoringCosts(manufactoringCosts: number) {
        this.manufactoringCosts = manufactoringCosts;
    }

    setEdition(edition: number) {
        this.edition = edition;
    }
}