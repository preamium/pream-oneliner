import { OneLinerType, OneLinerDirection } from './type.enum'

const NEWLINE: string = '#N#'
const TAB: string = '#T#'

export default class PreamOneLiner {

    constructor(private content: string, private type: OneLinerType, private direction: OneLinerDirection) {
    }

    public process(): Promise<string> {
        let result: string = ''

        switch (this.type) {
            case OneLinerType.LESS:
                switch (this.direction) {
                    case OneLinerDirection.PROCESS:
                        result = this.content
                            .trim()
                            .replace(/(\r\n|\n|\r)/gm, NEWLINE)
                            .replace(/(\t|    )/gm, TAB)
                        break;
                    case OneLinerDirection.UNPROCESS:
                        result = this.content
                            .replace(new RegExp(NEWLINE, 'g'), '\n')
                            .replace(new RegExp(TAB, 'g'), '    ')
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
                            .trim()
                            .replace(/(\r\n|\n|\r)/gm, NEWLINE)
                            .replace(/(\t|    )/gm, TAB)
                        break;
                    case OneLinerDirection.UNPROCESS:
                        result = this.content
                            .replace(new RegExp(NEWLINE, 'g'), '\n')
                            .replace(new RegExp(TAB, 'g'), '    ')
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

export {
    OneLinerType, OneLinerDirection, NEWLINE, TAB,
}
