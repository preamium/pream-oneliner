import { OneLinerType, OneLinerDirection } from './type.enum'

export default class PreamOneLiner {

    private static NEWLINE: string = '#N#'
    private static TAB: string = '#T#'

    constructor(private content: string, private type: OneLinerType, private direction: OneLinerDirection) {
    }

    public process(): Promise<string> {
        let result: string = ''

        switch (this.type) {
            case OneLinerType.LESS:
                switch (this.direction) {
                    case OneLinerDirection.PROCESS:
                        result = this.content
                            .replace(/(\r\n|\n|\r)/gm, PreamOneLiner.NEWLINE)
                            .replace(/(\t|    )/gm, PreamOneLiner.TAB)
                            .trim()
                        break;
                    case OneLinerDirection.UNPROCESS:
                        result = this.content
                            .replace(new RegExp(PreamOneLiner.NEWLINE, 'g'), '\n')
                            .replace(new RegExp(PreamOneLiner.TAB, 'g'), '    ')
                            .trim()
                        break;
                    default:
                        return Promise.reject(new Error('direction not defined'))
                }
                break;
            case OneLinerType.PUG:
                switch (this.direction) {
                    case OneLinerDirection.PROCESS:
                        result = this.content
                            .replace(/(\r\n|\n|\r)/gm, PreamOneLiner.NEWLINE)
                            .replace(/(\t|    )/gm, PreamOneLiner.TAB)
                            .trim()
                        break;
                    case OneLinerDirection.UNPROCESS:
                        result = this.content
                            .replace(new RegExp(PreamOneLiner.NEWLINE, 'g'), '\n')
                            .replace(new RegExp(PreamOneLiner.TAB, 'g'), '    ')
                            .trim()
                        break;
                    default:
                        return Promise.reject(new Error('direction not defined'))
                }
                break;
            default:
                return Promise.reject(new Error('content type not defined'))
        }

        return Promise.resolve(result)
    }

}
