import React, { Component } from 'react'
import Person from '../Person'


class Main extends Component {

    public employeeName: string = 'dfsd';

    private personInterface: any = {
        firstName: 'Okon',
        lastName: 'Bassey'
    }

    personObject: any = {
        firstName: 'Bruce',
        lastName: 'Omelaye'
    };

    constructor(props: any) {
        super(props)

        this.state = {

        }
    }


    variableDeclarations() {
        const message = 'Hello There.'
        return message
    }


    variableTypes() {
        const disp2: any = document.getElementById('disp2');
        const name: string = 'Nnaemeka'
        const message: string = `Good morning ${name}. <br/>
        How are you doing today?`
        disp2.innerHTML = message

        const disp3: any = document.getElementById('disp3')
        let num1: number = 4;
        let num2: number = 5;
        let ans1: number = num1 + num2;
        disp3.innerHTML = ans1.toString()

        const disp4: any = document.getElementById('disp4')
        let num3: number = 4;
        let num4: string = '5';
        let ans2: any = num3 + num4;
        disp4.innerHTML = ans2.toString()

        const disp5: any = document.getElementById('disp5')
        let list1: number[] = [1, 2, 3]
        disp5.innerHTML = list1.toString()

        const disp6: any = document.getElementById('disp6')
        let list2: Array<number> = [1, 2, 3, 4, 5]
        disp6.innerHTML = list2.toString()

        const disp7: any = document.getElementById('disp7')
        let list3: Array<any> = [1, 'Drone', 'Missile', 4, 5]
        disp7.innerHTML = list3.toString()

        const disp8: any = document.getElementById('disp8')
        let person: [number, string] = [19, 'Princewill']
        disp8.innerHTML = person.toString()

        const disp9: any = document.getElementById('disp9')
        enum Color { Red = 6, Blue, Green };
        let theColor: Color = Color.Blue
        //let statement1: string = `The colour of the vehice is ${theColor}`
        let statement1: string = `The colour of the vehice is ${Color[theColor]}`
        disp9.innerHTML = statement1

    }

    functionsOne(firstName: string, lastName: string): string {
        return `${firstName} ${lastName} has come to town`
    }

    functionsTwo(person: { firstName: string, lastName: string }): string {
        return `${person.firstName} ${person.lastName}`
    }



    functionsThree(person: Person): string {
        return `${person.firstName} ${person.lastName}`
    }



    unionTypes() {
        const disp10: any = document.getElementById('disp10')
        const disp11: any = document.getElementById('disp11')
        let a: number | boolean
        a = 10
        disp10.innerHTML = a.toString()

        a = true
        disp11.innerHTML = a.toString()
    }


    componentDidMount() {
        this.variableTypes()
        this.unionTypes()
    }


    render() {
        
        return (
            <div>
                <fieldset>
                    <legend>
                        Variable Declarations
                    </legend>

                    <div id="disp1">{this.variableDeclarations()}</div>
                </fieldset>

                <fieldset>
                    <legend>
                        Variable Types
                    </legend>

                    <div id="disp2"></div>
                    <div id="disp3"></div>
                    <div id="disp4"></div>
                    <div id="disp5"></div>
                    <div id="disp6"></div>
                    <div id="disp7"></div>
                    <div id="disp8"></div>
                    <div id="disp9"></div>
                </fieldset>

                <fieldset>
                    <legend>
                        Functions
                    </legend>

                    <div>{this.functionsOne('John', 'Hukkins')}</div>
                    <div>{this.functionsTwo(this.personObject)} Goes to school</div>
                    <div>{this.functionsThree(this.personInterface)} will arrive today</div>
                </fieldset>

                <fieldset>
                    <legend>
                        Union of Types
                    </legend>

                    <div id="disp10"></div>
                    <div id="disp11"></div>
                </fieldset>
            </div>
        )
    }
}

export default Main
