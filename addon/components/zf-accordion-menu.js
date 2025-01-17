import Component from '@ember/component';
import zfWidget from '@nycplanning/ember-cli-foundation-6-sass/mixins/zf-widget';

export default Component.extend(zfWidget, {
  
  /** @member tag type */
  tagName: 'ul',

  /** @member Class names */
  classNames: ['vertical', 'menu'],

  /** @member Attribute bindings */
  attributeBindings: ['data-accordion-menu'],

  /** @member Makes the data attribute binding appear */
  'data-accordion-menu': ' ',

  /** @member Foundation type */
  'zfType': 'AccordionMenu',

  /** @member Foundation specific options */
  'zfOptions': ['slideSpeed', 'multiOpen']
});
