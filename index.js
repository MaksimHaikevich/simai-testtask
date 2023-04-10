class Component {
    constructor(template, displayParams, modifiers, textValues, events) {
        this.template = template;
        this.displayParams = displayParams;
        this.modifiers = modifiers;
        this.textValues = textValues;
        this.events = events;
    }

    generateElement() {
        const element = document.createElement(this.template);

        if (this.displayParams) {
            Object.keys(this.displayParams).forEach(key => {
                element.style[key] = this.displayParams[key];
            });
        }

        if (this.modifiers) {
            Object.keys(this.modifiers).forEach(key => {
                element.classList.toggle(key, this.modifiers[key]);
            });
        }

        if (this.textValues) {
            element.innerHTML = this.textValues;
        }

        if (this.events) {
            Object.keys(this.events).forEach(key => {
                element.addEventListener(key, this.events[key]);
            });
        }

        return element;
    }
}

const button1 = new Component('button', {backgroundColor: 'blue', color: 'white', fontSize: '16px'}, {
    button: true,
    primary: true
}, 'Click me', {click: () => console.log('Button clicked!')});
const button2 = new Component('button', {backgroundColor: 'lightgray', color: 'white', fontSize: '18px'}, {
    button: true,
    secondary: true
}, 'Submit', {click: () => console.log('Button clicked')});

const button1Element = button1.generateElement();
const button2Element = button2.generateElement();

document.body.appendChild(button1Element);
document.body.appendChild(button2Element);
