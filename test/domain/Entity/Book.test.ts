import { Book, BookState } from "../../../src/domain/Entity/Book";
import { Category } from "../../../src/domain/Entity/Category";
import { PrecificationGroup } from "../../../src/domain/Entity/PrecificationGroup";
import { EntityValidationException } from "../../../src/domain/Exception/EntityValidationException";

test("Deve criar um livro com todos os atributos válidos", function () {
    const title = "O dia em que a terra parou";
    const book = createBookWithTitleAndState(title);
    expect(book.title).toBe(title);
});

test("Deve criar um livro com todos o título inválido", function () {
    try {
        const title = "O";
        const book = createBookWithTitleAndState(title);
    } catch(e) {
        expect(e).toBeInstanceOf(EntityValidationException);
    }
});

test("Deve verificar se o status do livro criado é Ativo", function () {
    const book = createBookWithTitleAndState("O dia em que a terra parou");
    expect(book.getState()).toBe(BookState.Active);
});

test("Deve atualizar o status do livro para inativo", function () {
    const book = createBookWithTitleAndState("O dia em que a terra parou");
    book.setState(BookState.Inactive);
    expect(book.getState()).toBe(BookState.Inactive);
});

test("Deve criar um livro com o status predefinido como Inativo", function () {
    const author = "Ruiz de Santiago";
    const category = new Category(1, "Terror");
    const year = 2001;
    const publisher = "Editora Luz";
    const title = "O dia em que a terra parou";
    const precificationGroup = new PrecificationGroup(1, "Bronze", 25);
    const manufactoringCosts = 250.9;
    const edition = 1;
    const isbn = "ISBN 978-85-333-0227-3";
    const pagesQt = 54;
    const sinopse = "Um dia, a terra parou de girar."
    const height = 40;
    const width = 16;
    const weight =  2;
    const depth = 5;
    const price = 99.9;
    const book = new Book(
        author,
        category,
        year,
        title,
        publisher,
        precificationGroup,
        manufactoringCosts,
        edition,
        pagesQt,
        sinopse,
        height,
        width,
        weight,
        depth,
        price,
        isbn,
        BookState.Inactive
    );
    expect(book.getState()).toBe(BookState.Inactive);
});

test("Deve criar um livro com o status predefinido como Ativo", function () {
    const author = "Ruiz de Santiago";
    const category = new Category(1, "Terror");
    const year = 2001;
    const publisher = "Editora Luz";
    const title = "O dia em que a terra parou";
    const precificationGroup = new PrecificationGroup(1, "Bronze", 25);
    const manufactoringCosts = 250.9;
    const edition = 1;
    const isbn = "ISBN 978-85-333-0227-3";
    const pagesQt = 54;
    const sinopse = "Um dia, a terra parou de girar."
    const height = 40;
    const width = 16;
    const weight =  2;
    const depth = 5;
    const price = 99.9;
    const book = new Book(
        author,
        category,
        year,
        title,
        publisher,
        precificationGroup,
        manufactoringCosts,
        edition,
        pagesQt,
        sinopse,
        height,
        width,
        weight,
        depth,
        price,
        isbn,
        BookState.Active
    );
    expect(book.getState()).toBe(BookState.Active);
});

function createBookWithTitleAndState(title: string) {
    const author = "Ruiz de Santiago";
    const category = new Category(1, "Terror");
    const year = 2001;
    const publisher = "Editora Luz";
    const precificationGroup = new PrecificationGroup(1, "Bronze", 25);
    const manufactoringCosts = 250.9;
    const edition = 1;
    const isbn = "ISBN 978-85-333-0227-3";
    const pagesQt = 54;
    const sinopse = "Um dia, a terra parou de girar."
    const height = 40;
    const width = 16;
    const weight =  2;
    const depth = 5;
    const price = 99.9;
    const book = new Book(
        author,
        category,
        year,
        title,
        publisher,
        precificationGroup,
        manufactoringCosts,
        edition,
        pagesQt,
        sinopse,
        height,
        width,
        weight,
        depth,
        price,
        isbn,
    );

    return book;
}