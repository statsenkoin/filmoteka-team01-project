export default class LoadSpinner {
    constructor ({selector, hidden = true}) {
        this.refs = this.getRefs(selector);
        hidden && this.hide();
    }
    getRefs(selector) {
        const refs = {};
        refs.spinner = document.querySelector(selector);
        return refs;
    }

    show() {
        this.refs.spinner.classList.remove('is-hidden');
    }

    hide() {
        this.refs.spinner.classList.add('is-hidden');
    }
}