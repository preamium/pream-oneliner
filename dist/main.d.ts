import { OneLinerType, OneLinerDirection } from './type.enum';
declare const NEWLINE: string;
declare const TAB: string;
export default class PreamOneLiner {
    private content;
    private type;
    private direction;
    constructor(content: string, type: OneLinerType, direction: OneLinerDirection);
    process(): Promise<string>;
}
export { OneLinerType, OneLinerDirection, NEWLINE, TAB, };
