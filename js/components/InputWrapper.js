import {BaseComponent} from "../BaseComponent.js";

const style = /*html*/ `
<style>
    * {
        font-family: 'Baloo 2', cursive;
    }

    .input-label {
        text-transform: uppercase;
        font-size: 15px;
    }

    .input-main {
        border: 1px solid #FFCB6B;
        background: transparent;
        width: 100%;
    }

    .input-error {
        font-size: 13px;
        color: #DB5145;
    }
</style>
`;

class InputWrapper extends BaseComponent {
    constructor() {
        super();

        this.props = {
            label: '',
            type: 'text',
            error: ''
        };
    }

    static get observedAttributes() {
        return ['label', 'type', 'error'];
    }

    render(){
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <div class="input-wrapper">
                <label class="input-label" for="input">${this.props.label}</label>
                <br>
                <input class="input-main" type="${this.props.type}">
                <div class="input-error">${this.props.error}</div>
            </div>
        `;
    }

    get value() {
        return this._shadowRoot.querySelector('.input-main').value;
    }
}

window.customElements.define('input-wrapper', InputWrapper);