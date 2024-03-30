import { Author } from "../../../src/domain/Entity/Author";
import { Category } from "../../../src/domain/Entity/Category";
import { PrecificationGroup } from "../../../src/domain/Entity/PrecificationGroup";
import { Publisher } from "../../../src/domain/Entity/Publisher";
import { ISBN } from "../../../src/domain/ValueObject/ISBN";

test("Deve criar um livro com todos os atributos válidos", function () {
    const author = new Author("Ruiz de Santiago");
    const category = new Category(1, "Terror");
    const year = 2001;
    const title = "O dia em que a terra parou";
    const publisher = new Publisher("Editora Luz");
    const preficicationGroup = new PrecificationGroup(1, "Bronze", 25);
    const manufactoringCosts = 250.9;
    const edition = 1;
    const isbn = new ISBN("ISBN 978-85-333-0227-3");
    const pagesQt = 54;
    const sinopse = "Um dia, a terra parou de girar."
    const height = 40;
    const width = 16;
    const weight =  2;
    const depth = 5;
    const book = new Book(
        author,
        category,
        year,
        title,
        publisher,
        preficicationGroup,
        manufactoringCosts,
        edition,
        isbn,
        pagesQt,
        sinopse,
        height,
        width,
        weight,
        depth,
    );
});