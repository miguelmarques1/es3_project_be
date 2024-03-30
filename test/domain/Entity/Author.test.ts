import { Author } from "../../../src/domain/Entity/Author";
import { EntityValidationException } from "../../../src/domain/Exception/EntityValidationException";

test("Deve criar um autor com um nome válido", function () {
    const name = "Ruiz de Santiago";
    const author = new Author(name);
    expect(author.name).toBe(name);
});

test("Deve criar um autor com nome inválido", function() {
    try {
        const name = "Ru";
        const author = new Author(name);
    } catch(e) {
        expect(e).toBeInstanceOf(EntityValidationException);
    }
});