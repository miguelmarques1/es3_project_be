import { EntityValidationException } from "../Exception/EntityValidationException";

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
        if(this.name.length < 3) throw new EntityValidationException("Invalid name");
    }
}