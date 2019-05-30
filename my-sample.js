import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import './node_modules/@fooloomanzoo/datetime-picker/calendar-element';
import './showapod';

/**
 * `my-sample`
 * this is the first sample of a polymer element
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */

class MySample extends PolymerElement {
  static get template() {
    return html`
      <p><calendar-element date="{{date}}"></calendar-element></p>
      <show-apod path="[[path]]"></show-apod>
    `;
  }

  static get properties() {
    return {
      date: {
        type: String,
        readonly: true,
        observer: 'handleDate'
      },
      path: {
        type: String,
      }
    };
  }
  handleDate(){
    console.log('Date: ' + this.date)
    this.path = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6' + '&date=' + this.date;  
  }


}

window.customElements.define('my-sample', MySample);
