import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class ShowApod extends PolymerElement {
    static get properties() {
        return {
            path: {
                type: String,
                value: 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6',
            },
            data: {
                type: Object,
                readonly: true,
                value: null,
            },

        }
    }

    static get template() {
        return html`
        <div class="jumbotron">
        <h1 class="display-3">[[data.title]]</h1>
        <img src="[[data.url]]" width="100%" alt="Image">
        <p class="lead">[[data.explanation]]</p>
        <hr class="my-2">
        <p>More info</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
        </p>
      </div>
      
        <iron-ajax
          auto
          url="[[path]]"
          handle-as="json"
          on-response="handleResponse"
          debounce-duration="300">
          </iron-ajax>
    
        `;
    }

    /**
     * Instance of the element is created/upgraded. Use: initializing state,
     * set up event listeners, create shadow dom.
     * @constructor
     */
    constructor() {
        super();
    }

    /**
     * Use for one-time configuration of your component after local
     * DOM is initialized.
     */
    ready() {
        super.ready();
    }

    handleResponse(event, request) {
        console.log('Path: ' + this.path);
        
        console.log('Response: ' + request.response.url);
        this.data = request.response;

    }
}

customElements.define('show-apod', ShowApod);