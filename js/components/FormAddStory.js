import {BaseComponent} from "../BaseComponent.js";
const style = /*html*/`
<style>
    * {
        font-family: 'Baloo 2', cursive;
    }
    textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #4F6457;
        border-radius: 5px;
        font-size: 20px;
        outline: none;
    }

    button {
        background-color: #34675C;
        border: 2px solid #34675C;
        border-radius: 5px;
        color: #F1F1F2;
        height: 40px;
        padding: 0px 10px;
        font-size: 20px;
    }
</style>
`;
class FormAddStory extends BaseComponent {
    constructor() {
        super();
    }

    render(){
        this._shadowRoot.innerHTML = /*html*/`
            ${style}
            <form class="form-add-story">
                <textarea name="content" rows="5"></textarea>
                <br>
                <button>Post</button>
            </form>
        `;

        this.$formAddStory = this._shadowRoot.querySelector('.form-add-story');
        this.$formAddStory.onsubmit = (event) => {
            event.preventDefault();
            // lấy dữ liệu
            let content = this.$formAddStory.content.value.trim();

            // kiểm tra dữ liệu
            if(content == ''){
                alert('Input your story content');
            } else {
                // thêm dữ liệu vào firestore

            }

        }
    }
}

window.customElements.define('form-add-story', FormAddStory);