

class ButtonCount extends HTMLElement {

    constructor() {
        super();
        let btn = document.createElement('button');
        btn.textContent = 'Times Clicked : ';
        
        let count = document.createElement('output');
        count.textContent = 0;
        btn.append(count);

        // Update the count when the button is clicked
        btn.addEventListener('click', () => {
            let currVal = Number(count.textContent);
            count.textContent = currVal + 1;
        });

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.append(btn);
    }
}

// Define the custom element in the registry
customElements.define('button-count', ButtonCount);
