import { ISBN } from "../../../src/domain/ValueObject/ISBN";
import { EntityValidationException } from "../../../src/domain/Exception/EntityValidationException";

test("Deve criar um ISBN de 13 dígitos válido", function() {
    const isbnValue = "ISBN 978-85-333-0227-3";
    const isbn = new ISBN(isbnValue);
    expect(isbn.value).toBe(isbnValue);
});

test("Deve criar um ISBN de 13 dígitos inválido", function() {
    try {
        const isbnValue = "ISBN 978-85-7608-953-7";
        const isbn = new ISBN(isbnValue);     
    } catch(e) {
        expect(e).toBeInstanceOf(EntityValidationException);
    }
});

test("Deve criar um ISBN de 10 dígitos válido", function () {
    const isbnValue = "ISBN 0-7167-0344-0";
    const isbn = new ISBN(isbnValue);
    expect(isbn.value).toBe(isbnValue);
});

test("Deve criar um ISBN de 10 dígitos inválido", function () {
    try {
        const isbnValue = "ISBN 0-7267-0344-0";
        const isbn = new ISBN(isbnValue);
    } catch(e) {
        expect(e).toBeInstanceOf(EntityValidationException);
    }
});

test("Deve criar um ISBN sem o prefixo", function () {
    try {
        const isbnValue = "123-1234-1234-1";
        const isbn = new ISBN(isbnValue);
    } catch(e) {
        expect(e).toBeInstanceOf(EntityValidationException);
    }
});