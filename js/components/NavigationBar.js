import { BaseComponent } from "../BaseComponent.js";

const style = /*html*/`
<style>
    * {
        font-family: 'Baloo 2', cursive;
    }

    .navbar {
        background-color: #34675C;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        position: fixed;
        width: 100%;
        top: 0px;
        left: 0px;
    }

    .brand {
        display: flex;
        align-items: center;
    }

    .brand-title {
        font-size: 40px;
        color: #B3C100;
    }

    .brand-logo{
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    .form-search {
        display: flex;
        align-items: space-between;
        width: 400px;
    }

    input-wrapper {
        width: 100%;
        margin-right: 15px;
    }

    .form-search > button {
        background-color: #D9B44A;
        border: 2px solid #D9B44A;
        border-radius: 5px;
        color: #34675C;
        height: 40px;
        padding: 0px 10px;
        font-size: 20px;
    }

    .profile {
        display: flex;
        align-items: center;
    }

    .profile-avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }

    .profile-name {
        color: #f1f1f2;
        font-size: 25px;
    }
</style>
`;

class NavigationBar extends BaseComponent {
    constructor() {
        super();
    }

    render() {
        this._shadowRoot.innerHTML = /*html*/ `
            ${style}
            <nav class="navbar">
                <div class="brand">
                    <img src="./img/logo.png" alt="" class="brand-logo">
                    <div class="brand-title">WeShare</div>
                </div>

                <form class="form-search">
                    <input-wrapper label="" id="keyword"></input-wrapper>
                    <button>Search</button>
                </form>

                <div class="profile">
                    <img src="https://newsen.vn/wp-content/uploads/2019/06/na-ni-la-gi.jpg" alt="" class="profile-avatar">
                    <span class="profile-name">Nà ní</span>
                </div>
            </nav>
        `;
    }
}

window.customElements.define('navigation-bar', NavigationBar);