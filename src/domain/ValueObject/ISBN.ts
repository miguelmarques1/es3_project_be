import { parse } from "path";
import { EntityValidationException } from "../Exception/EntityValidationException";

export class ISBN {
    public value!: string;

    constructor(
        value: string,
    ) {
        this.setValue(value);
    }

    private setValue(value: string) {
        this.value = value;
        this.validate();
    }

    private removeCharacters(isbn: string): string {
        return isbn.replace("ISBN ", "").split("-").join("");
    }

    private validate() {
        if(!this.value.startsWith("ISBN ")) throw new EntityValidationException("Invalid ISBN");
        const parsedValue = this.removeCharacters(this.value);
        const isValid = parsedValue.length === 10 ? this.tenDigitsValidation(parsedValue) : this.thirteenDigitsValidation(parsedValue); 
        if(!isValid) throw new EntityValidationException("Invalid ISBN");
    }

    private thirteenDigitsValidation(value: string) : boolean {
        let total = 0;
        for(let i = 0; i < 13; i++) {
            let parsedChar = Number.parseInt(value[i]);
            let multiplier = i % 2 == 0 ? 1 : 3;
            total += parsedChar * multiplier;
        }
        return total % 10 === 0;
    }

    private tenDigitsValidation(value: string): boolean {
        let total = 0;
        for(let i = 0; i < 10; i++) {
            let parsedChar = Number.parseInt(value[i]);
            total +=  parsedChar * (10 - i);
        }
        return total % 11 === 0;
    }
}