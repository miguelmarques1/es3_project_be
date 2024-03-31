import { EntityValidationException } from "../Exception/EntityValidationException";

export class DomainValidation {
    public static notNull(value: object, exceptMessage: string) {
        if(!value) {
            throw new EntityValidationException(exceptMessage);
        }
    }

    public static strDefaultLenght(value: string, exceptMessage: string) {
        if(value.length < 2 || value.length > 255) {
            throw new EntityValidationException(exceptMessage);
        }
    }

    public static numNotNegative(value: number, exceptMessage: string) {
        if(value < 0) {
            throw new EntityValidationException(exceptMessage);
        }
    }

    public static dateNotAfterToday(value: Date, exceptMessage: string) {
        let today = new Date();
        if(today.getTime() < value.getTime()) {
            throw new EntityValidationException(exceptMessage);
        }
    }

    public static numIsInteger(value: number, exceptMessage: string) {
        if(!Number.isInteger(value)) {
            throw new EntityValidationException(exceptMessage);
        }
    }
}