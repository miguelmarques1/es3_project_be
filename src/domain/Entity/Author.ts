import { EntityValidationException } from "../Exception/EntityValidationException";
import { DomainValidation } from "../Validation/DomainValidation";

export class Author {
    public name!: string;
    
    constructor(
        name: string,
        readonly id: number|null = null
    ) {
        this.setName(name);
    }

    setName(name: string) {
        this.name = name;
        this.validate();
    }

    private validate() {
        DomainValidation.strDefaultLenght(this.name, "Invalid author name");
    }
}