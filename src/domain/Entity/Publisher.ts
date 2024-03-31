import { EntityValidationException } from "../Exception/EntityValidationException";
import { DomainValidation } from "../Validation/DomainValidation";

export class Publisher {
    public name!: string;

    constructor(
        name: string,
        id: number|null = null
    ) {
        this.setName(name);
    }

    public setName(name: string) {
        this.name = name;
        this.validate();
    }

    private validate() {
        DomainValidation.strDefaultLenght(this.name, "Invalid publisher name");
    }
}