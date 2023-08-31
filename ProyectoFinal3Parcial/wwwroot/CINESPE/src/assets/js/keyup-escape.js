class MyComponent {
    constructor() {
        window.addEventListener('keyup', this.handleKeyDown.bind(this));
    }

    handleKeyDown(ev) {
        if (ev.key === 'Escape') {
            alert("¡Gracias por usarnos!");
        }
    }
}

customElements.define('keyup-escape', MyComponent);