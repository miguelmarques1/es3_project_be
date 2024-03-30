import { Publisher } from "../../../src/domain/Entity/Publisher";
import { EntityValidationException } from "../../../src/domain/Exception/EntityValidationException";

test("Deve criar uma editora com nome válido", function () {
    const publisherName = "Editora Valente";
    const publisher = new Publisher(publisherName);
});

test("Deve criar uma editora com nome inválido", function () {
    try {
        const publisherName = "Ed";
        const publisher = new Publisher(publisherName);
    } catch(e) {
        expect(e).toBeInstanceOf(EntityValidationException);
    }
});