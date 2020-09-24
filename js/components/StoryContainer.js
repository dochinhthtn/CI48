import { BaseComponent } from "../BaseComponent.js";
import { getDataFromDoc } from "../utils.js";
const style = /*html*/`
<style>
    * {
        font-family: 'Baloo 2', cursive;
        font-size: 20px;
    }

    .story-container {
        border: 1px solid #4F6457;
        background-color: white;
        border-radius: 5px;
        margin-top: 10px;
    }

    .story-info {
        padding: 5px 10px;
        border-bottom: 1px solid #4F6457;
    }

    .story-content {
        padding: 10px;
    }

    .date-modified {
        font-size: 15px;
        color: #D9B44A;
    }

    .owner {
        color: #75B1A9;
    }
</style>
`;
class StoryContainer extends BaseComponent {
    constructor() {
        super();

        this.state = {
            name: ''
        }

        this.props = {
            "id": '',
            "owner": '',
            "content": '',
            "date-modified": ''
        };
    }

    static get observedAttributes() {
        return ['id', 'owner', 'content', 'date-modified'];
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/`
            ${style}
            <div class="story-container">

                <div class="story-info">
                    <div class="owner">${this.state.name}</div>
                    <div class="date-modified">${this.props["date-modified"]}</div>
                </div>

                <div class="story-content">
                    ${this.props.content}
                </div>

            </div>
        `;
    }

    async componentDidUpdate() {
        if (this.props.owner) {
            let response = await firebase
                .firestore()
                .collection('users')
                .doc(this.props.owner)
                .get();
            let owner = getDataFromDoc(response);
            this.setState({
                name: owner.name
            })
        }
    }
}

window.customElements.define('story-container', StoryContainer);