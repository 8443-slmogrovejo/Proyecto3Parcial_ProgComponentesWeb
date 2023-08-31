class MyComponent {
    constructor() {
        window.addEventListener('keydown', this.handleKeyDown.bind(this));
    }

    handleKeyDown(ev) {
        if (ev.key === 'p') {
            const sectionId = 'portfolio';
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}

customElements.define('scroll-p', MyComponent);
