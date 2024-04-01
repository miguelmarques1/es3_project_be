import { Book } from "../Entity/Book";

export interface BookRepository {
    findAll(): Book[];
    findById(id: number): Book | undefined;
    create(book: Book): Book;
    update(book: Book, id: number): Book | undefined;
    findBooksByName(name: string): Book[] | undefined;
}