import { EntityValidationException } from "../Exception/EntityValidationException";

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
        if(this.name.length < 3) throw new EntityValidationException("Invalid name");
    }
}