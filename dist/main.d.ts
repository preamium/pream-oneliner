import { OneLinerType, OneLinerDirection } from './type.enum';
export default class PreamOneLiner {
    private content;
    private type;
    private direction;
    private static NEWLINE;
    private static TAB;
    constructor(content: string, type: OneLinerType, direction: OneLinerDirection);
    process(): Promise<string>;
}
