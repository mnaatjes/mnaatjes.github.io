/**
 * @name calculator
 */

const btn_container = document.getElementById('container--button');
const buttons = {
    numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
    operators: [
        {symbol: "+", operation: "add"},
        {symbol: "-", operation: "subtract"},
        {symbol: "*", operation: "multiply"},
        {symbol: ".", operation: "decimal"},
        {symbol: "=", operation: "equals"},
        {symbol: "/", operation: "divide"}
    ],
    helpers: [
        {symbol: "C", operation: "clear"},
        {symbol: "CE", operation: "clearEntry"},
        {symbol: "DEL", operation: "backspace"},
        {symbol: "%", operation: "modulo"}
    ]
};
/**
 * generate helpers
 */
buttons.helpers.forEach(ele => {
        /**
         * generate operator button
         */
        let btn_operator = document.createElement('button');
        btn_operator.id = 'operator--' + ele.operation;
        btn_operator.setAttribute('value', ele.symbol);
        btn_operator.setAttribute('name', ele.operation);
        btn_operator.setAttribute('class', 'btn--operator');
        btn_operator.setAttribute('type', 'button');
        btn_operator.textContent = ele.symbol;
        /**
         * append operator button
         */
        btn_container.appendChild(btn_operator);
});
/**
 * generate numbers
 */
let count = 0;
buttons.numbers.forEach((num, index) => {
    /**
     * assemble buttons
     */
    let btn_num = document.createElement('button');
    btn_num.id = 'btn--num--' + num;
    btn_num.setAttribute('class', 'btn--number');
    btn_num.setAttribute('type', 'button');
    btn_num.setAttribute('value', num);
    btn_num.textContent = num;
    /**
     * add other buttons
     */
    if(index !== 0 && index % 3 === 0){
        /**
         * generate operator button
         */
        let btn_operator = document.createElement('button');
        btn_operator.id = 'operator--' + buttons.operators[count].operation;
        btn_operator.setAttribute('name', buttons.operators[count].operation);
        btn_operator.setAttribute('class', 'btn--operator');
        btn_operator.setAttribute('type', 'button');
        btn_operator.setAttribute('value', buttons.operators[count].symbol);
        btn_operator.textContent = buttons.operators[count].symbol;
        /**
         * append operator button
         */
        btn_container.appendChild(btn_operator);
        /**
         * iterate count
         */
        count += 1;
    }
    /**
     * append
     */
    btn_container.appendChild(btn_num);
});
/**
 * add remaining operators
 */
buttons.operators.slice(count).forEach((operator, index) => {
        /**
         * generate operator button
         */
        let btn_operator = document.createElement('button');
        btn_operator.id = 'operator--' + operator.operation;
        btn_operator.setAttribute('name', operator.operation);
        btn_operator.setAttribute('value', operator.symbol);

        if(operator.operation === 'equals'){
            btn_operator.setAttribute('class', 'btn--equals');    
        } else {
            btn_operator.setAttribute('class', 'btn--operator');
        }
        btn_operator.setAttribute('type', 'button');
        btn_operator.textContent = operator.symbol;
        /**
         * append operator button
         */
        btn_container.appendChild(btn_operator);
});
/**
 * listener
 */
function renderFunc(equation){
    try {
        let func = new Function('', 'return ' + equation + ';');
        return func();
    } catch(err){
        return err;
        //return 'Could not parse equation!';
    }
}
/**
 * ignore list from equation
 */
const ignoreList = ['clear', 'clearEntry', 'backspace'];
/**
 * properties
 */
const screen = document.getElementById('calc--screen');
let calc     = '';
let equation = '';
const btns   = Array.from(btn_container.children);
btns.forEach(btn => {
    btn.addEventListener('click', function(e){
        /**
         * grab value and print to screen
         */
        let value = e.target.value;
        /**
         * evaluate
         */
        if(btn.name === 'equals'){
            screen.textContent = renderFunc(equation);
        } else if(!ignoreList.includes(btn.name)) {
            /**
             * exclude certain values from equation string
             */
            screen.textContent += value;
            equation += value;
        } else if(ignoreList.includes(btn.name)) {
            /**
             * determine function
             */
            switch(btn.name){
                case 'clear':
                case 'clearEntry':
                    screen.textContent = '';
                    equation = '';
                    break;
                case 'backspace':
                    let result = screen.textContent.slice(0, -1);
                    if(equation === screen.textContent){
                        equation = result;
                    }
                    screen.textContent = result;
                    break;
                default: 
                    '';
            }
        }
    });
});