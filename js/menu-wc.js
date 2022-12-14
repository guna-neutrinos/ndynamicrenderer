'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">n-dynamic-renderer documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NDynamicRendererModule.html" data-type="entity-link" >NDynamicRendererModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NDynamicRendererModule-5cc87532e76dd020fecac729921945cebc5a55bfc5593c6de5f13bfbe2ba458c6b936174241225b59c7806d09db89a33c12f3b4a71a4349ddbaf0eb1af582d7c"' : 'data-target="#xs-components-links-module-NDynamicRendererModule-5cc87532e76dd020fecac729921945cebc5a55bfc5593c6de5f13bfbe2ba458c6b936174241225b59c7806d09db89a33c12f3b4a71a4349ddbaf0eb1af582d7c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NDynamicRendererModule-5cc87532e76dd020fecac729921945cebc5a55bfc5593c6de5f13bfbe2ba458c6b936174241225b59c7806d09db89a33c12f3b4a71a4349ddbaf0eb1af582d7c"' :
                                            'id="xs-components-links-module-NDynamicRendererModule-5cc87532e76dd020fecac729921945cebc5a55bfc5593c6de5f13bfbe2ba458c6b936174241225b59c7806d09db89a33c12f3b4a71a4349ddbaf0eb1af582d7c"' }>
                                            <li class="link">
                                                <a href="components/NDynamicRendererComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NDynamicRendererComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/NDynamicRendererService.html" data-type="entity-link" >NDynamicRendererService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ChangeEvent.html" data-type="entity-link" >ChangeEvent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Config.html" data-type="entity-link" >Config</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Flex.html" data-type="entity-link" >Flex</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Function.html" data-type="entity-link" >Function</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/KeyValue.html" data-type="entity-link" >KeyValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Layout.html" data-type="entity-link" >Layout</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Leaf.html" data-type="entity-link" >Leaf</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Metadata.html" data-type="entity-link" >Metadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Options.html" data-type="entity-link" >Options</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OutputEvents.html" data-type="entity-link" >OutputEvents</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Panels.html" data-type="entity-link" >Panels</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Section.html" data-type="entity-link" >Section</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sections.html" data-type="entity-link" >Sections</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});