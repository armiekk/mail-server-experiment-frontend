export interface Envelop {

    fromMail: string;

    toMail: string[];

    subject: string;

    content: string;

    files?: File[]

}

