import { expect } from 'chai'
import OneLiner from '../src/main'
import { OneLinerType, OneLinerDirection } from '../src/type.enum'

describe('main.ts', function () {
    it('should process LESS file', async () => {
        const expected: string = '.my-class{#N##T#color:red;#N##T#.my-sub-class{#N##T##T#color:blue#N##T#}#N#}'

        const input: string = `
.my-class{
    color:red;
    .my-sub-class{
        color:blue
    }
}
`.trim()

        const oneliner: any = new OneLiner(input, OneLinerType.LESS, OneLinerDirection.PROCESS)
        const output: string = await oneliner.process()

        expect(output).to.eql(expected)
    })

    it('should unprocess LESS file', async () => {
        const input: string = '.my-class{#N##T#color:red;#N##T#.my-sub-class{#N##T##T#color:blue#N##T#}#N#}'

        const expected: string = `
.my-class{
    color:red;
    .my-sub-class{
        color:blue
    }
}
`.trim()

        const oneliner: any = new OneLiner(input, OneLinerType.LESS, OneLinerDirection.UNPROCESS)
        const output: string = await oneliner.process()

        expect(output).to.eql(expected)
    })

    it('should process PUG file', async () => {
        const expected: string = 'block content#N##T#.container#N##T##T#.columns#N##T##T##T#.column.is-one-quarter#N##T##T##T##T#form.box#N##T##T##T##T##T#h1.is-size-2 Register#N##T##T##T##T##T#hr#N##T##T##T##T##T#.field#N##T##T##T##T##T##T#label.label Stream Key'
        const input: string = `
block content
    .container
        .columns
            .column.is-one-quarter
                form.box
                    h1.is-size-2 Register
                    hr
                    .field
                        label.label Stream Key
`.trim()
        const oneliner: any = new OneLiner(input, OneLinerType.PUG, OneLinerDirection.PROCESS)
        const output: string = await oneliner.process()

        expect(output).to.eql(expected)
    })

    it('should unprocess PUG file', async () => {
        const input: string = 'block content#N##T#.container#N##T##T#.columns#N##T##T##T#.column.is-one-quarter#N##T##T##T##T#form.box#N##T##T##T##T##T#h1.is-size-2 Register#N##T##T##T##T##T#hr#N##T##T##T##T##T#.field#N##T##T##T##T##T##T#label.label Stream Key'
        const expected: string = `
block content
    .container
        .columns
            .column.is-one-quarter
                form.box
                    h1.is-size-2 Register
                    hr
                    .field
                        label.label Stream Key
`.trim()
        const oneliner: any = new OneLiner(input, OneLinerType.PUG, OneLinerDirection.UNPROCESS)
        const output: string = await oneliner.process()

        expect(output).to.eql(expected)
    })




    it.only('can bu used', async () => {

        const input: string = `
html, body
{
    background: linear-gradient(29deg, #00f0af, #00ace6);
    animation: bganim 30s ease infinite;
}

.flexbox-parent
{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.flexbox-item
{
    background: rgba(0, 0, 255, .1);
    display: flex;
    flex-direction: row;
}

.flexbox-item-grow
{
    flex: 1;
}

.fill-area-content
{
    display: flex;
    flex-direction: column;
    z-index: 0;
}

.header{
    display: flex;
    flex-direction: row;
    font-size: 2.5em;
    justify-content: space-around;
    padding-top: 1em;
}

.time{
    line-height: 1em;
    font-weight: 600;
    width: 100%;
}

.loc{
    line-height: 1em;
    font-size: smaller;
    font-weight: lighter;
    text-align: center;
}

.main > .content{
    z-index: 10;
    margin-bottom: 100px;
}

.main{
    margin-top:1.5em;
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    position:relative;
    overflow: hidden;
}

.main-item{
    font-size: 3em;
    height: inherit;
}

.sep{
    border: 2px solid white;
    width:5px;
    border-radius: 10px;
    background-color:white;
    opacity: 0.5;
}

.left{
    width:30%;
}

.right{
    width:70%
}
`
        const oneliner: any = new OneLiner(input, OneLinerType.LESS, OneLinerDirection.PROCESS)
        const output: string = await oneliner.process()

        console.log(output)
    })

    xit('UNPROCESS PUG', async () => {
        const input: string = ".flexbox-parent#N##T#.flexbox-item.flexbox-item-grow#N##T##T#.fill-area-content.flexbox-item-grow#N##T##T##T#.header#N##T##T##T##T#each clock in [0, 1, 2, 3, 4]#N##T##T##T##T##T#div(data-stack-id=`clock$_clock_`)#N##T##T##T##T##T##T#.scene.scene--card#N##T##T##T##T##T##T##T#.card.is-flipped#N##T##T##T##T##T##T##T##T#.card__face.card__face--front#N##T##T##T##T##T##T##T##T##T#.i.fas.fa-clock#N##T##T##T##T##T##T##T##T#.card__face.card__face--back#N##T##T##T##T##T##T##T##T##T#.time#dom --:--#N##T##T##T##T##T##T##T##T##T#.loc#header#N##T##T##T#.main#N##T##T##T##T#.main-item.left(data-stack-id='leftpanel')#N##T##T##T##T#.main.sep#N##T##T##T##T#.main-item.right(data-stack-id='rightpanel')#N##T##T##T##T#.bigicon"

        const oneliner: any = new OneLiner(input, OneLinerType.PUG, OneLinerDirection.UNPROCESS)
        const output: string = await oneliner.process()

        console.log(output)
    })

    xit('PROCESS PUG', async () => {
        const input: string = `
.flexbox-parent
    .flexbox-item.flexbox-item-grow
		.fill-area-content.flexbox-item-grow
			.header
				each clock in [0, 1, 2, 3, 4]
					div(data-stack-id=\`clock$_clock_\`)
						.scene.scene--card
							.card.is-flipped
								.card__face.card__face--front
									.i.fas.fa-clock
								.card__face.card__face--back
									.time#dom --:--
									.loc#header
			.main
				.main-item.left(data-stack-id='leftpanel')
				.main.sep
				.main-item.right(data-stack-id='rightpanel')
				.bigicon
`
        const oneliner: any = new OneLiner(input, OneLinerType.PUG, OneLinerDirection.PROCESS)
        const output: string = await oneliner.process()

        console.log(output)
    })

})
