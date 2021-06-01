import { X as getContext, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a7 as create_slot, $ as assign, W as compute_rest_props, v as validate_slots, Y as get_current_component, a0 as exclude_internal_props, p as element, x as claim_element, y as children, u as detach_dev, a9 as set_attributes, D as add_location, F as insert_dev, aa as action_destroyer, a8 as update_slot, a2 as get_spread_update, ab as is_function, J as transition_in, K as transition_out, ac as run_all, a6 as binding_callbacks, q as create_component, o as space, t as text, A as claim_component, w as claim_space, z as claim_text, E as attr_dev, G as append_dev, H as mount_component, M as destroy_component, as as IconButton, aw as set_data_dev, B as set_style, L as List, I as Item, T as Text, ag as validate_each_argument, a1 as empty, a4 as group_outros, a5 as check_outros, aj as destroy_each, O as noop, r as query_selector_all } from './client.ec94238b.js';
import { c as classMap, f as forwardEventsBuilder, u as useActions, a as Card$1, b as Content, A as Actions, d as ActionButtons, e as ActionIcons, C as CommonIcon, M as MediaContent, D as Demo } from './Demo.9c515360.js';
import { B as Button_1 } from './Button.d66ce348.js';
import { C as CommonLabel } from './CommonLabel.6290f478.js';

/**
 * Stores result from supportsCssVariables to avoid redundant processing to
 * detect CSS custom variable support.
 */
var supportsCssVariables_;
function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) { forceRefresh = false; }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
        return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';
    if (!supportsFunctionPresent) {
        return false;
    }
    var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = (CSS.supports('(--css-vars: yes)') &&
        CSS.supports('color', '#00000000'));
    supportsCssVars =
        explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) {
        supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
}
function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
        return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    // Determine touch point relative to the ripple container.
    if (evt.type === 'touchstart') {
        var touchEvent = evt;
        normalizedX = touchEvent.changedTouches[0].pageX - documentX;
        normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    }
    else {
        var mouseEvent = evt;
        normalizedX = mouseEvent.pageX - documentX;
        normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var MDCFoundation = /** @class */ (function () {
    function MDCFoundation(adapter) {
        if (adapter === void 0) { adapter = {}; }
        this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation, "cssClasses", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "strings", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "numbers", {
        get: function () {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFoundation, "defaultAdapter", {
        get: function () {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
        },
        enumerable: false,
        configurable: true
    });
    MDCFoundation.prototype.init = function () {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
    };
    MDCFoundation.prototype.destroy = function () {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    };
    return MDCFoundation;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Determine whether the current browser supports passive event listeners, and
 * if so, use them.
 */
function applyPassive$1(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    return supportsPassiveOption(globalObj) ?
        { passive: true } :
        false;
}
function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) { globalObj = window; }
    // See
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    var passiveSupported = false;
    try {
        var options = {
            // This function will be called when the browser
            // attempts to access the passive property.
            get passive() {
                passiveSupported = true;
                return false;
            }
        };
        var handler = function () { };
        globalObj.document.addEventListener('test', handler, options);
        globalObj.document.removeEventListener('test', handler, options);
    }
    catch (err) {
        passiveSupported = false;
    }
    return passiveSupported;
}

var events = /*#__PURE__*/Object.freeze({
    __proto__: null,
    applyPassive: applyPassive$1
});

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
 * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
 */
function closest(element, selector) {
    if (element.closest) {
        return element.closest(selector);
    }
    var el = element;
    while (el) {
        if (matches$1(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches$1(element, selector) {
    var nativeMatches = element.matches
        || element.webkitMatchesSelector
        || element.msMatchesSelector;
    return nativeMatches.call(element, selector);
}
/**
 * Used to compute the estimated scroll width of elements. When an element is
 * hidden due to display: none; being applied to a parent element, the width is
 * returned as 0. However, the element will have a true width once no longer
 * inside a display: none context. This method computes an estimated width when
 * the element is hidden or returns the true width when the element is visble.
 * @param {Element} element the element whose width to estimate
 */
function estimateScrollWidth(element) {
    // Check the offsetParent. If the element inherits display: none from any
    // parent, the offsetParent property will be null (see
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
    // This check ensures we only clone the node when necessary.
    var htmlEl = element;
    if (htmlEl.offsetParent !== null) {
        return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty('position', 'absolute');
    clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
}

var ponyfill = /*#__PURE__*/Object.freeze({
    __proto__: null,
    closest: closest,
    matches: matches$1,
    estimateScrollWidth: estimateScrollWidth
});

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
};
var strings = {
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
};
var numbers = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = [
    'touchstart', 'pointerdown', 'mousedown', 'keydown',
];
// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = [
    'touchend', 'pointerup', 'mouseup', 'contextmenu',
];
// simultaneous nested activations
var activatedTargets = [];
var MDCRippleFoundation = /** @class */ (function (_super) {
    __extends(MDCRippleFoundation, _super);
    function MDCRippleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;
        _this.activationAnimationHasEnded_ = false;
        _this.activationTimer_ = 0;
        _this.fgDeactivationRemovalTimer_ = 0;
        _this.fgScale_ = '0';
        _this.frame_ = { width: 0, height: 0 };
        _this.initialSize_ = 0;
        _this.layoutFrame_ = 0;
        _this.maxRadius_ = 0;
        _this.unboundedCoords_ = { left: 0, top: 0 };
        _this.activationState_ = _this.defaultActivationState_();
        _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
        };
        _this.activateHandler_ = function (e) { return _this.activate_(e); };
        _this.deactivateHandler_ = function () { return _this.deactivate_(); };
        _this.focusHandler_ = function () { return _this.handleFocus(); };
        _this.blurHandler_ = function () { return _this.handleBlur(); };
        _this.resizeHandler_ = function () { return _this.layout(); };
        return _this;
    }
    Object.defineProperty(MDCRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                browserSupportsCssVars: function () { return true; },
                computeBoundingRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                containsEventTarget: function () { return true; },
                deregisterDocumentInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                deregisterResizeHandler: function () { return undefined; },
                getWindowPageOffset: function () { return ({ x: 0, y: 0 }); },
                isSurfaceActive: function () { return true; },
                isSurfaceDisabled: function () { return true; },
                isUnbounded: function () { return true; },
                registerDocumentInteractionHandler: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                registerResizeHandler: function () { return undefined; },
                removeClass: function () { return undefined; },
                updateCssVariable: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCRippleFoundation.prototype.init = function () {
        var _this = this;
        var supportsPressRipple = this.supportsPressRipple_();
        this.registerRootHandlers_(supportsPressRipple);
        if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses, ROOT_1 = _a.ROOT, UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.addClass(ROOT_1);
                if (_this.adapter.isUnbounded()) {
                    _this.adapter.addClass(UNBOUNDED_1);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this.layoutInternal_();
                }
            });
        }
    };
    MDCRippleFoundation.prototype.destroy = function () {
        var _this = this;
        if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }
            if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }
            var _a = MDCRippleFoundation.cssClasses, ROOT_2 = _a.ROOT, UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
                _this.adapter.removeClass(ROOT_2);
                _this.adapter.removeClass(UNBOUNDED_2);
                _this.removeCssVars_();
            });
        }
        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();
    };
    /**
     * @param evt Optional event containing position information.
     */
    MDCRippleFoundation.prototype.activate = function (evt) {
        this.activate_(evt);
    };
    MDCRippleFoundation.prototype.deactivate = function () {
        this.deactivate_();
    };
    MDCRippleFoundation.prototype.layout = function () {
        var _this = this;
        if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();
            _this.layoutFrame_ = 0;
        });
    };
    MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;
        if (unbounded) {
            this.adapter.addClass(UNBOUNDED);
        }
        else {
            this.adapter.removeClass(UNBOUNDED);
        }
    };
    MDCRippleFoundation.prototype.handleFocus = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    MDCRippleFoundation.prototype.handleBlur = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED); });
    };
    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     */
    MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
        return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation.prototype.defaultActivationState_ = function () {
        return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false,
        };
    };
    /**
     * supportsPressRipple Passed from init to save a redundant function call
     */
    MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
        var _this = this;
        if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter.registerInteractionHandler(evtType, _this.activateHandler_);
            });
            if (this.adapter.isUnbounded()) {
                this.adapter.registerResizeHandler(this.resizeHandler_);
            }
        }
        this.adapter.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter.registerInteractionHandler('blur', this.blurHandler_);
    };
    MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
        var _this = this;
        if (evt.type === 'keydown') {
            this.adapter.registerInteractionHandler('keyup', this.deactivateHandler_);
        }
        else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
                _this.adapter.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
        }
    };
    MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
        var _this = this;
        ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter.deregisterInteractionHandler(evtType, _this.activateHandler_);
        });
        this.adapter.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter.deregisterInteractionHandler('blur', this.blurHandler_);
        if (this.adapter.isUnbounded()) {
            this.adapter.deregisterResizeHandler(this.resizeHandler_);
        }
    };
    MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
        var _this = this;
        this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
        });
    };
    MDCRippleFoundation.prototype.removeCssVars_ = function () {
        var _this = this;
        var rippleStrings = MDCRippleFoundation.strings;
        var keys = Object.keys(rippleStrings);
        keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
                _this.adapter.updateCssVariable(rippleStrings[key], null);
            }
        });
    };
    MDCRippleFoundation.prototype.activate_ = function (evt) {
        var _this = this;
        if (this.adapter.isSurfaceDisabled()) {
            return;
        }
        var activationState = this.activationState_;
        if (activationState.isActivated) {
            return;
        }
        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;
        if (isSameInteraction) {
            return;
        }
        activationState.isActivated = true;
        activationState.isProgrammatic = evt === undefined;
        activationState.activationEvent = evt;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
        var hasActivatedChild = evt !== undefined &&
            activatedTargets.length > 0 &&
            activatedTargets.some(function (target) { return _this.adapter.containsEventTarget(target); });
        if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
        }
        if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
        }
        activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);
        if (activationState.wasElementMadeActive) {
            this.animateActivation_();
        }
        requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];
            if (!activationState.wasElementMadeActive
                && evt !== undefined
                && (evt.key === ' ' || evt.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);
                if (activationState.wasElementMadeActive) {
                    _this.animateActivation_();
                }
            }
            if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this.activationState_ = _this.defaultActivationState_();
            }
        });
    };
    MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
        return (evt !== undefined && evt.type === 'keydown') ?
            this.adapter.isSurfaceActive() :
            true;
    };
    MDCRippleFoundation.prototype.animateActivation_ = function () {
        var _this = this;
        var _a = MDCRippleFoundation.strings, VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
        var _b = MDCRippleFoundation.cssClasses, FG_DEACTIVATION = _b.FG_DEACTIVATION, FG_ACTIVATION = _b.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal_();
        var translateStart = '';
        var translateEnd = '';
        if (!this.adapter.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(), startPoint = _c.startPoint, endPoint = _c.endPoint;
            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
        }
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter.removeClass(FG_DEACTIVATION);
        // Force layout in order to re-trigger the animation.
        this.adapter.computeBoundingRect();
        this.adapter.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () { return _this.activationTimerCallback_(); }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
        var _a = this.activationState_, activationEvent = _a.activationEvent, wasActivatedByPointer = _a.wasActivatedByPointer;
        var startPoint;
        if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
        }
        else {
            startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2,
            };
        }
        // Center the element around the start point.
        startPoint = {
            x: startPoint.x - (this.initialSize_ / 2),
            y: startPoint.y - (this.initialSize_ / 2),
        };
        var endPoint = {
            x: (this.frame_.width / 2) - (this.initialSize_ / 2),
            y: (this.frame_.height / 2) - (this.initialSize_ / 2),
        };
        return { startPoint: startPoint, endPoint: endPoint };
    };
    MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
        var _this = this;
        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _a = this.activationState_, hasDeactivationUXRun = _a.hasDeactivationUXRun, isActivated = _a.isActivated;
        var activationHasEnded = hasDeactivationUXRun || !isActivated;
        if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this.adapter.removeClass(FG_DEACTIVATION);
            }, numbers.FG_DEACTIVATION_MS);
        }
    };
    MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation.prototype.resetActivationState_ = function () {
        var _this = this;
        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () { return _this.previousActivationEvent_ = undefined; }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation.prototype.deactivate_ = function () {
        var _this = this;
        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
            return;
        }
        var state = __assign({}, activationState);
        if (activationState.isProgrammatic) {
            requestAnimationFrame(function () { return _this.animateDeactivation_(state); });
            this.resetActivationState_();
        }
        else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
                _this.activationState_.hasDeactivationUXRun = true;
                _this.animateDeactivation_(state);
                _this.resetActivationState_();
            });
        }
    };
    MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
        var wasActivatedByPointer = _a.wasActivatedByPointer, wasElementMadeActive = _a.wasElementMadeActive;
        if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
        }
    };
    MDCRippleFoundation.prototype.layoutInternal_ = function () {
        var _this = this;
        this.frame_ = this.adapter.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);
        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function () {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };
        this.maxRadius_ = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
        // Unbounded ripple size should always be even number to equally center align.
        if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
            this.initialSize_ = initialSize - 1;
        }
        else {
            this.initialSize_ = initialSize;
        }
        this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
        this.updateLayoutCssVars_();
    };
    MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
        var _a = MDCRippleFoundation.strings, VAR_FG_SIZE = _a.VAR_FG_SIZE, VAR_LEFT = _a.VAR_LEFT, VAR_TOP = _a.VAR_TOP, VAR_FG_SCALE = _a.VAR_FG_SCALE;
        this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
        this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale_);
        if (this.adapter.isUnbounded()) {
            this.unboundedCoords_ = {
                left: Math.round((this.frame_.width / 2) - (this.initialSize_ / 2)),
                top: Math.round((this.frame_.height / 2) - (this.initialSize_ / 2)),
            };
            this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
        }
    };
    return MDCRippleFoundation;
}(MDCFoundation));

const { applyPassive } = events;
const { matches } = ponyfill;

function Ripple(
  node,
  {
    ripple = true,
    surface = false,
    unbounded = false,
    disabled = false,
    color = null,
    active = null,
    eventTarget = null,
    activeTarget = null,
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
    addStyle = (name, value) => node.style.setProperty(name, value),
    initPromise = Promise.resolve(),
  } = {}
) {
  let instance;
  let addLayoutListener = getContext('SMUI:addLayoutListener');
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;

  function handleProps() {
    if (surface) {
      addClass('mdc-ripple-surface');
      if (color === 'primary') {
        addClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      } else if (color === 'secondary') {
        removeClass('smui-ripple-surface--primary');
        addClass('smui-ripple-surface--secondary');
      } else {
        removeClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      }
    }

    // Handle activation first.
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }

    // Then create/destroy an instance.
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => supportsCssVariables(window),
        computeBoundingRect: () => node.getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterInteractionHandler: (evtType, handler) =>
          (eventTarget || node).removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterResizeHandler: (handler) =>
          window.removeEventListener('resize', handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset,
        }),
        isSurfaceActive: () =>
          active == null ? matches(activeTarget || node, ':active') : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerInteractionHandler: (evtType, handler) =>
          (eventTarget || node).addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerResizeHandler: (handler) =>
          window.addEventListener('resize', handler),
        removeClass,
        updateCssVariable: addStyle,
      });

      initPromise.then(() => {
        instance.init();
        instance.setUnbounded(unbounded);
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        instance.destroy();
        instance = null;
      });
    }

    // Now handle event/active targets
    if (
      instance &&
      (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)
    ) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;

      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }

    if (!ripple && unbounded) {
      addClass('mdc-ripple-upgraded--unbounded');
    }
  }

  handleProps();

  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }

  function layout() {
    if (instance) {
      instance.layout();
    }
  }

  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise,
      } = {
        ripple: true,
        surface: false,
        unbounded: false,
        disabled: false,
        color: null,
        active: null,
        eventTarget: null,
        activeTarget: null,
        addClass: (className) => node.classList.add(className),
        removeClass: (className) => node.classList.remove(className),
        addStyle: (name, value) => node.style.setProperty(name, value),
        initPromise: Promise.resolve(),
        ...props,
      });
      handleProps();
    },

    destroy() {
      if (instance) {
        instance.destroy();
        instance = null;
        removeClass('mdc-ripple-surface');
        removeClass('smui-ripple-surface--primary');
        removeClass('smui-ripple-surface--secondary');
      }

      if (removeLayoutListener) {
        removeLayoutListener();
      }
    },
  };
}

/* packages/card/PrimaryAction.svelte generated by Svelte v3.37.0 */
const file$7 = "packages/card/PrimaryAction.svelte";

function create_fragment$7(ctx) {
	let div;
	let div_class_value;
	let div_style_value;
	let useActions_action;
	let Ripple_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[17].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[16], null);

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-card__primary-action": true,
				"smui-card__primary-action--padded": /*padded*/ ctx[5],
				.../*internalClasses*/ ctx[8]
			})
		},
		{
			style: div_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$1).concat([/*style*/ ctx[2]]).join(" ")
		},
		{ tabindex: /*tabindex*/ ctx[6] },
		/*$$restProps*/ ctx[14]
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true, tabindex: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$7, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[18](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[10].call(null, div)),
					action_destroyer(Ripple_action = Ripple.call(null, div, {
						ripple: /*ripple*/ ctx[3],
						unbounded: false,
						color: /*color*/ ctx[4],
						addClass: /*addClass*/ ctx[11],
						removeClass: /*removeClass*/ ctx[12],
						addStyle: /*addStyle*/ ctx[13]
					}))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 65536) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[16], dirty, null, null);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*className, padded, internalClasses*/ 290 && div_class_value !== (div_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-card__primary-action": true,
					"smui-card__primary-action--padded": /*padded*/ ctx[5],
					.../*internalClasses*/ ctx[8]
				}))) && { class: div_class_value },
				(!current || dirty & /*internalStyles, style*/ 516 && div_style_value !== (div_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$1).concat([/*style*/ ctx[2]]).join(" "))) && { style: div_style_value },
				(!current || dirty & /*tabindex*/ 64) && { tabindex: /*tabindex*/ ctx[6] },
				dirty & /*$$restProps*/ 16384 && /*$$restProps*/ ctx[14]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);

			if (Ripple_action && is_function(Ripple_action.update) && dirty & /*ripple, color*/ 24) Ripple_action.update.call(null, {
				ripple: /*ripple*/ ctx[3],
				unbounded: false,
				color: /*color*/ ctx[4],
				addClass: /*addClass*/ ctx[11],
				removeClass: /*removeClass*/ ctx[12],
				addStyle: /*addStyle*/ ctx[13]
			});
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[18](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$7.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const func$1 = ([name, value]) => `${name}: ${value};`;

function instance$7($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","style","ripple","color","padded","tabindex","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("PrimaryAction", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { ripple = true } = $$props;
	let { color = null } = $$props;
	let { padded = false } = $$props;
	let { tabindex = "0" } = $$props;
	let element;
	let internalClasses = {};
	let internalStyles = {};

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(8, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(8, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === "" || value == null) {
				delete internalStyles[name];
				$$invalidate(9, internalStyles);
			} else {
				$$invalidate(9, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(14, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("color" in $$new_props) $$invalidate(4, color = $$new_props.color);
		if ("padded" in $$new_props) $$invalidate(5, padded = $$new_props.padded);
		if ("tabindex" in $$new_props) $$invalidate(6, tabindex = $$new_props.tabindex);
		if ("$$scope" in $$new_props) $$invalidate(16, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		Ripple,
		forwardEvents,
		use,
		className,
		style,
		ripple,
		color,
		padded,
		tabindex,
		element,
		internalClasses,
		internalStyles,
		addClass,
		removeClass,
		addStyle,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
		if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("color" in $$props) $$invalidate(4, color = $$new_props.color);
		if ("padded" in $$props) $$invalidate(5, padded = $$new_props.padded);
		if ("tabindex" in $$props) $$invalidate(6, tabindex = $$new_props.tabindex);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("internalClasses" in $$props) $$invalidate(8, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(9, internalStyles = $$new_props.internalStyles);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		style,
		ripple,
		color,
		padded,
		tabindex,
		element,
		internalClasses,
		internalStyles,
		forwardEvents,
		addClass,
		removeClass,
		addStyle,
		$$restProps,
		getElement,
		$$scope,
		slots,
		div_binding
	];
}

class PrimaryAction extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$7, create_fragment$7, safe_not_equal, {
			use: 0,
			class: 1,
			style: 2,
			ripple: 3,
			color: 4,
			padded: 5,
			tabindex: 6,
			getElement: 15
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PrimaryAction",
			options,
			id: create_fragment$7.name
		});
	}

	get use() {
		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get padded() {
		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set padded(value) {
		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tabindex() {
		throw new Error("<PrimaryAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tabindex(value) {
		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[15];
	}

	set getElement(value) {
		throw new Error("<PrimaryAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/card/Media.svelte generated by Svelte v3.37.0 */

const file$6 = "packages/card/Media.svelte";

function create_fragment$6(ctx) {
	let div;
	let div_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-card__media": true,
				"mdc-card__media--square": /*aspectRatio*/ ctx[2] === "square",
				"mdc-card__media--16-9": /*aspectRatio*/ ctx[2] === "16x9"
			})
		},
		/*$$restProps*/ ctx[5]
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$6, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[9](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[4].call(null, div))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*className, aspectRatio*/ 6 && div_class_value !== (div_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-card__media": true,
					"mdc-card__media--square": /*aspectRatio*/ ctx[2] === "square",
					"mdc-card__media--16-9": /*aspectRatio*/ ctx[2] === "16x9"
				}))) && { class: div_class_value },
				dirty & /*$$restProps*/ 32 && /*$$restProps*/ ctx[5]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[9](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$6.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$6($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","aspectRatio","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Media", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { aspectRatio = null } = $$props;
	let element;

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(3, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("aspectRatio" in $$new_props) $$invalidate(2, aspectRatio = $$new_props.aspectRatio);
		if ("$$scope" in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		forwardEvents,
		use,
		className,
		aspectRatio,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("aspectRatio" in $$props) $$invalidate(2, aspectRatio = $$new_props.aspectRatio);
		if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		aspectRatio,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		div_binding
	];
}

class Media extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$6, create_fragment$6, safe_not_equal, {
			use: 0,
			class: 1,
			aspectRatio: 2,
			getElement: 6
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Media",
			options,
			id: create_fragment$6.name
		});
	}

	get use() {
		throw new Error("<Media>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Media>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Media>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Media>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get aspectRatio() {
		throw new Error("<Media>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set aspectRatio(value) {
		throw new Error("<Media>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[6];
	}

	set getElement(value) {
		throw new Error("<Media>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/card/_Simple.svelte generated by Svelte v3.37.0 */
const file$5 = "src/routes/demo/card/_Simple.svelte";

// (3:4) <Card padded>
function create_default_slot_3$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("A simple padded card.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "A simple padded card.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$5.name,
		type: "slot",
		source: "(3:4) <Card padded>",
		ctx
	});

	return block;
}

// (8:6) <Content>
function create_default_slot_2$5(ctx) {
	let t0;
	let code;
	let t1;
	let t2;

	const block = {
		c: function create() {
			t0 = text("You can also use ");
			code = element("code");
			t1 = text("Content");
			t2 = text(".");
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "You can also use ");
			code = claim_element(nodes, "CODE", {});
			var code_nodes = children(code);
			t1 = claim_text(code_nodes, "Content");
			code_nodes.forEach(detach_dev);
			t2 = claim_text(nodes, ".");
			this.h();
		},
		h: function hydrate() {
			add_location(code, file$5, 7, 32, 188);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, code, anchor);
			append_dev(code, t1);
			insert_dev(target, t2, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(code);
			if (detaching) detach_dev(t2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$5.name,
		type: "slot",
		source: "(8:6) <Content>",
		ctx
	});

	return block;
}

// (7:4) <Card>
function create_default_slot_1$5(ctx) {
	let content;
	let current;

	content = new Content({
			props: {
				$$slots: { default: [create_default_slot_2$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(content.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(content.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(content, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const content_changes = {};

			if (dirty & /*$$scope*/ 2) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(content.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(content.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(content, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$5.name,
		type: "slot",
		source: "(7:4) <Card>",
		ctx
	});

	return block;
}

// (13:4) <Card variant="outlined" padded>
function create_default_slot$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("An outlined, padded card.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "An outlined, padded card.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$5.name,
		type: "slot",
		source: "(13:4) <Card variant=\\\"outlined\\\" padded>",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let div3;
	let div0;
	let card0;
	let t0;
	let div1;
	let card1;
	let t1;
	let div2;
	let card2;
	let t2;
	let pre;
	let t3;
	let t4;
	let current;

	card0 = new Card$1({
			props: {
				padded: true,
				$$slots: { default: [create_default_slot_3$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	card1 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot_1$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	card2 = new Card$1({
			props: {
				variant: "outlined",
				padded: true,
				$$slots: { default: [create_default_slot$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(card0.$$.fragment);
			t0 = space();
			div1 = element("div");
			create_component(card1.$$.fragment);
			t1 = space();
			div2 = element("div");
			create_component(card2.$$.fragment);
			t2 = space();
			pre = element("pre");
			t3 = text("Clicked: ");
			t4 = text(/*clicked*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(card0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(card1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(card2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "Clicked: ");
			t4 = claim_text(pre_nodes, /*clicked*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-container");
			add_location(div0, file$5, 1, 2, 29);
			attr_dev(div1, "class", "card-container");
			add_location(div1, file$5, 5, 2, 116);
			attr_dev(div2, "class", "card-container");
			add_location(div2, file$5, 11, 2, 244);
			attr_dev(div3, "class", "card-display");
			add_location(div3, file$5, 0, 0, 0);
			attr_dev(pre, "class", "status");
			add_location(pre, file$5, 16, 0, 359);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(card0, div0, null);
			append_dev(div3, t0);
			append_dev(div3, div1);
			mount_component(card1, div1, null);
			append_dev(div3, t1);
			append_dev(div3, div2);
			mount_component(card2, div2, null);
			insert_dev(target, t2, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t3);
			append_dev(pre, t4);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const card0_changes = {};

			if (dirty & /*$$scope*/ 2) {
				card0_changes.$$scope = { dirty, ctx };
			}

			card0.$set(card0_changes);
			const card1_changes = {};

			if (dirty & /*$$scope*/ 2) {
				card1_changes.$$scope = { dirty, ctx };
			}

			card1.$set(card1_changes);
			const card2_changes = {};

			if (dirty & /*$$scope*/ 2) {
				card2_changes.$$scope = { dirty, ctx };
			}

			card2.$set(card2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(card0.$$.fragment, local);
			transition_in(card1.$$.fragment, local);
			transition_in(card2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card0.$$.fragment, local);
			transition_out(card1.$$.fragment, local);
			transition_out(card2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(card0);
			destroy_component(card1);
			destroy_component(card2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$5($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Simple", slots, []);
	let clicked = 0;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Simple> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Card: Card$1, Content, clicked });

	$$self.$inject_state = $$props => {
		if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [clicked];
}

class Simple extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Simple",
			options,
			id: create_fragment$5.name
		});
	}
}

/* src/routes/demo/card/_Actions.svelte generated by Svelte v3.37.0 */
const file$4 = "src/routes/demo/card/_Actions.svelte";

// (4:6) <PrimaryAction on:click={() => clicked++} padded>
function create_default_slot_35(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Primary Action, a clickable area of the card.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Primary Action, a clickable area of the card.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_35.name,
		type: "slot",
		source: "(4:6) <PrimaryAction on:click={() => clicked++} padded>",
		ctx
	});

	return block;
}

// (3:4) <Card>
function create_default_slot_34(ctx) {
	let primaryaction;
	let current;

	primaryaction = new PrimaryAction({
			props: {
				padded: true,
				$$slots: { default: [create_default_slot_35] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	primaryaction.$on("click", /*click_handler*/ ctx[1]);

	const block = {
		c: function create() {
			create_component(primaryaction.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(primaryaction.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(primaryaction, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const primaryaction_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				primaryaction_changes.$$scope = { dirty, ctx };
			}

			primaryaction.$set(primaryaction_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(primaryaction.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(primaryaction.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(primaryaction, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_34.name,
		type: "slot",
		source: "(3:4) <Card>",
		ctx
	});

	return block;
}

// (12:6) <Content>
function create_default_slot_33(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("A card with action buttons.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "A card with action buttons.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_33.name,
		type: "slot",
		source: "(12:6) <Content>",
		ctx
	});

	return block;
}

// (15:10) <Label>
function create_default_slot_32(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Action");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Action");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_32.name,
		type: "slot",
		source: "(15:10) <Label>",
		ctx
	});

	return block;
}

// (14:8) <Button on:click={() => clicked++}>
function create_default_slot_31$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_32] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_31$1.name,
		type: "slot",
		source: "(14:8) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (18:10) <Label>
function create_default_slot_30$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Another");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Another");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_30$1.name,
		type: "slot",
		source: "(18:10) <Label>",
		ctx
	});

	return block;
}

// (17:8) <Button on:click={() => clicked++}>
function create_default_slot_29$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_30$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_29$1.name,
		type: "slot",
		source: "(17:8) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (13:6) <Actions>
function create_default_slot_28$1(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_31$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_1*/ ctx[2]);

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_29$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_2*/ ctx[3]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t = space();
			create_component(button1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(button1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(button1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_28$1.name,
		type: "slot",
		source: "(13:6) <Actions>",
		ctx
	});

	return block;
}

// (11:4) <Card>
function create_default_slot_27$1(ctx) {
	let content;
	let t;
	let actions;
	let current;

	content = new Content({
			props: {
				$$slots: { default: [create_default_slot_33] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_28$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(content.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(content.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(content, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const content_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(content, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_27$1.name,
		type: "slot",
		source: "(11:4) <Card>",
		ctx
	});

	return block;
}

// (26:6) <Content>
function create_default_slot_26$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("A card with a full-bleed action.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "A card with a full-bleed action.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_26$1.name,
		type: "slot",
		source: "(26:6) <Content>",
		ctx
	});

	return block;
}

// (29:10) <Label>
function create_default_slot_25$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Action");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Action");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_25$1.name,
		type: "slot",
		source: "(29:10) <Label>",
		ctx
	});

	return block;
}

// (28:8) <Button on:click={() => clicked++}>
function create_default_slot_24$1(ctx) {
	let label;
	let t0;
	let i;
	let t1;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_25$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t0 = space();
			i = element("i");
			t1 = text("arrow_forward");
			this.h();
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t0 = claim_space(nodes);
			i = claim_element(nodes, "I", { class: true, "aria-hidden": true });
			var i_nodes = children(i);
			t1 = claim_text(i_nodes, "arrow_forward");
			i_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(i, "class", "material-icons");
			attr_dev(i, "aria-hidden", "true");
			add_location(i, file$4, 29, 10, 775);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, i, anchor);
			append_dev(i, t1);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(i);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_24$1.name,
		type: "slot",
		source: "(28:8) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (27:6) <Actions fullBleed>
function create_default_slot_23$1(ctx) {
	let button;
	let current;

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_24$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_3*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_23$1.name,
		type: "slot",
		source: "(27:6) <Actions fullBleed>",
		ctx
	});

	return block;
}

// (25:4) <Card>
function create_default_slot_22$1(ctx) {
	let content;
	let t;
	let actions;
	let current;

	content = new Content({
			props: {
				$$slots: { default: [create_default_slot_26$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				fullBleed: true,
				$$slots: { default: [create_default_slot_23$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(content.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(content.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(content, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const content_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(content, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_22$1.name,
		type: "slot",
		source: "(25:4) <Card>",
		ctx
	});

	return block;
}

// (38:6) <Content>
function create_default_slot_21$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("A card with action icons.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "A card with action icons.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_21$1.name,
		type: "slot",
		source: "(38:6) <Content>",
		ctx
	});

	return block;
}

// (46:10) <Icon class="material-icons" on>
function create_default_slot_20$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_20$1.name,
		type: "slot",
		source: "(46:10) <Icon class=\\\"material-icons\\\" on>",
		ctx
	});

	return block;
}

// (47:10) <Icon class="material-icons">
function create_default_slot_19$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite_border");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite_border");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_19$1.name,
		type: "slot",
		source: "(47:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (40:8) <IconButton           on:click={() => clicked++}           toggle           aria-label="Add to favorites"           title="Add to favorites"         >
function create_default_slot_18$1(ctx) {
	let icon0;
	let t;
	let icon1;
	let current;

	icon0 = new CommonIcon({
			props: {
				class: "material-icons",
				on: true,
				$$slots: { default: [create_default_slot_20$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	icon1 = new CommonIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_19$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon0.$$.fragment);
			t = space();
			create_component(icon1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(icon1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(icon1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				icon0_changes.$$scope = { dirty, ctx };
			}

			icon0.$set(icon0_changes);
			const icon1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				icon1_changes.$$scope = { dirty, ctx };
			}

			icon1.$set(icon1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon0.$$.fragment, local);
			transition_in(icon1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon0.$$.fragment, local);
			transition_out(icon1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(icon1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_18$1.name,
		type: "slot",
		source: "(40:8) <IconButton           on:click={() => clicked++}           toggle           aria-label=\\\"Add to favorites\\\"           title=\\\"Add to favorites\\\"         >",
		ctx
	});

	return block;
}

// (49:8) <IconButton           class="material-icons"           on:click={() => clicked++}           title="Share">
function create_default_slot_17$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("share");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "share");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_17$1.name,
		type: "slot",
		source: "(49:8) <IconButton           class=\\\"material-icons\\\"           on:click={() => clicked++}           title=\\\"Share\\\">",
		ctx
	});

	return block;
}

// (54:8) <IconButton           class="material-icons"           on:click={() => clicked++}           title="More options">
function create_default_slot_16$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("more_vert");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "more_vert");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_16$1.name,
		type: "slot",
		source: "(54:8) <IconButton           class=\\\"material-icons\\\"           on:click={() => clicked++}           title=\\\"More options\\\">",
		ctx
	});

	return block;
}

// (39:6) <Actions>
function create_default_slot_15$1(ctx) {
	let iconbutton0;
	let t0;
	let iconbutton1;
	let t1;
	let iconbutton2;
	let current;

	iconbutton0 = new IconButton({
			props: {
				toggle: true,
				"aria-label": "Add to favorites",
				title: "Add to favorites",
				$$slots: { default: [create_default_slot_18$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton0.$on("click", /*click_handler_4*/ ctx[5]);

	iconbutton1 = new IconButton({
			props: {
				class: "material-icons",
				title: "Share",
				$$slots: { default: [create_default_slot_17$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton1.$on("click", /*click_handler_5*/ ctx[6]);

	iconbutton2 = new IconButton({
			props: {
				class: "material-icons",
				title: "More options",
				$$slots: { default: [create_default_slot_16$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton2.$on("click", /*click_handler_6*/ ctx[7]);

	const block = {
		c: function create() {
			create_component(iconbutton0.$$.fragment);
			t0 = space();
			create_component(iconbutton1.$$.fragment);
			t1 = space();
			create_component(iconbutton2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(iconbutton0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(iconbutton1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(iconbutton2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(iconbutton0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(iconbutton1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(iconbutton2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const iconbutton0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton0_changes.$$scope = { dirty, ctx };
			}

			iconbutton0.$set(iconbutton0_changes);
			const iconbutton1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton1_changes.$$scope = { dirty, ctx };
			}

			iconbutton1.$set(iconbutton1_changes);
			const iconbutton2_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton2_changes.$$scope = { dirty, ctx };
			}

			iconbutton2.$set(iconbutton2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(iconbutton0.$$.fragment, local);
			transition_in(iconbutton1.$$.fragment, local);
			transition_in(iconbutton2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(iconbutton0.$$.fragment, local);
			transition_out(iconbutton1.$$.fragment, local);
			transition_out(iconbutton2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(iconbutton0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(iconbutton1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(iconbutton2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_15$1.name,
		type: "slot",
		source: "(39:6) <Actions>",
		ctx
	});

	return block;
}

// (37:4) <Card>
function create_default_slot_14$1(ctx) {
	let content;
	let t;
	let actions;
	let current;

	content = new Content({
			props: {
				$$slots: { default: [create_default_slot_21$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_15$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(content.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(content.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(content, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const content_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(content, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_14$1.name,
		type: "slot",
		source: "(37:4) <Card>",
		ctx
	});

	return block;
}

// (65:6) <Content>
function create_default_slot_13$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("A card with Both.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "A card with Both.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_13$1.name,
		type: "slot",
		source: "(65:6) <Content>",
		ctx
	});

	return block;
}

// (69:12) <Label>
function create_default_slot_12$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Action");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Action");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_12$1.name,
		type: "slot",
		source: "(69:12) <Label>",
		ctx
	});

	return block;
}

// (68:10) <Button on:click={() => clicked++}>
function create_default_slot_11$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_12$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_11$1.name,
		type: "slot",
		source: "(68:10) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (72:12) <Label>
function create_default_slot_10$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Another");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Another");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_10$1.name,
		type: "slot",
		source: "(72:12) <Label>",
		ctx
	});

	return block;
}

// (71:10) <Button on:click={() => clicked++}>
function create_default_slot_9$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_10$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9$1.name,
		type: "slot",
		source: "(71:10) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (67:8) <ActionButtons>
function create_default_slot_8$2(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_11$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_7*/ ctx[8]);

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_9$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_8*/ ctx[9]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t = space();
			create_component(button1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(button1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(button1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$2.name,
		type: "slot",
		source: "(67:8) <ActionButtons>",
		ctx
	});

	return block;
}

// (82:12) <Icon class="material-icons" on>
function create_default_slot_7$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$2.name,
		type: "slot",
		source: "(82:12) <Icon class=\\\"material-icons\\\" on>",
		ctx
	});

	return block;
}

// (83:12) <Icon class="material-icons">
function create_default_slot_6$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite_border");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite_border");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$2.name,
		type: "slot",
		source: "(83:12) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (76:10) <IconButton             on:click={() => clicked++}             toggle             aria-label="Add to favorites"             title="Add to favorites"           >
function create_default_slot_5$3(ctx) {
	let icon0;
	let t;
	let icon1;
	let current;

	icon0 = new CommonIcon({
			props: {
				class: "material-icons",
				on: true,
				$$slots: { default: [create_default_slot_7$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	icon1 = new CommonIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_6$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon0.$$.fragment);
			t = space();
			create_component(icon1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(icon1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(icon1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				icon0_changes.$$scope = { dirty, ctx };
			}

			icon0.$set(icon0_changes);
			const icon1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				icon1_changes.$$scope = { dirty, ctx };
			}

			icon1.$set(icon1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon0.$$.fragment, local);
			transition_in(icon1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon0.$$.fragment, local);
			transition_out(icon1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(icon1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$3.name,
		type: "slot",
		source: "(76:10) <IconButton             on:click={() => clicked++}             toggle             aria-label=\\\"Add to favorites\\\"             title=\\\"Add to favorites\\\"           >",
		ctx
	});

	return block;
}

// (85:10) <IconButton             class="material-icons"             on:click={() => clicked++}             title="Share">
function create_default_slot_4$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("share");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "share");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$3.name,
		type: "slot",
		source: "(85:10) <IconButton             class=\\\"material-icons\\\"             on:click={() => clicked++}             title=\\\"Share\\\">",
		ctx
	});

	return block;
}

// (90:10) <IconButton             class="material-icons"             on:click={() => clicked++}             title="More options">
function create_default_slot_3$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("more_vert");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "more_vert");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$4.name,
		type: "slot",
		source: "(90:10) <IconButton             class=\\\"material-icons\\\"             on:click={() => clicked++}             title=\\\"More options\\\">",
		ctx
	});

	return block;
}

// (75:8) <ActionIcons>
function create_default_slot_2$4(ctx) {
	let iconbutton0;
	let t0;
	let iconbutton1;
	let t1;
	let iconbutton2;
	let current;

	iconbutton0 = new IconButton({
			props: {
				toggle: true,
				"aria-label": "Add to favorites",
				title: "Add to favorites",
				$$slots: { default: [create_default_slot_5$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton0.$on("click", /*click_handler_9*/ ctx[10]);

	iconbutton1 = new IconButton({
			props: {
				class: "material-icons",
				title: "Share",
				$$slots: { default: [create_default_slot_4$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton1.$on("click", /*click_handler_10*/ ctx[11]);

	iconbutton2 = new IconButton({
			props: {
				class: "material-icons",
				title: "More options",
				$$slots: { default: [create_default_slot_3$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton2.$on("click", /*click_handler_11*/ ctx[12]);

	const block = {
		c: function create() {
			create_component(iconbutton0.$$.fragment);
			t0 = space();
			create_component(iconbutton1.$$.fragment);
			t1 = space();
			create_component(iconbutton2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(iconbutton0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(iconbutton1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(iconbutton2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(iconbutton0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(iconbutton1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(iconbutton2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const iconbutton0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton0_changes.$$scope = { dirty, ctx };
			}

			iconbutton0.$set(iconbutton0_changes);
			const iconbutton1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton1_changes.$$scope = { dirty, ctx };
			}

			iconbutton1.$set(iconbutton1_changes);
			const iconbutton2_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton2_changes.$$scope = { dirty, ctx };
			}

			iconbutton2.$set(iconbutton2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(iconbutton0.$$.fragment, local);
			transition_in(iconbutton1.$$.fragment, local);
			transition_in(iconbutton2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(iconbutton0.$$.fragment, local);
			transition_out(iconbutton1.$$.fragment, local);
			transition_out(iconbutton2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(iconbutton0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(iconbutton1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(iconbutton2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$4.name,
		type: "slot",
		source: "(75:8) <ActionIcons>",
		ctx
	});

	return block;
}

// (66:6) <Actions>
function create_default_slot_1$4(ctx) {
	let actionbuttons;
	let t;
	let actionicons;
	let current;

	actionbuttons = new ActionButtons({
			props: {
				$$slots: { default: [create_default_slot_8$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actionicons = new ActionIcons({
			props: {
				$$slots: { default: [create_default_slot_2$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(actionbuttons.$$.fragment);
			t = space();
			create_component(actionicons.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(actionbuttons.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actionicons.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(actionbuttons, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actionicons, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const actionbuttons_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actionbuttons_changes.$$scope = { dirty, ctx };
			}

			actionbuttons.$set(actionbuttons_changes);
			const actionicons_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actionicons_changes.$$scope = { dirty, ctx };
			}

			actionicons.$set(actionicons_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(actionbuttons.$$.fragment, local);
			transition_in(actionicons.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(actionbuttons.$$.fragment, local);
			transition_out(actionicons.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(actionbuttons, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actionicons, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$4.name,
		type: "slot",
		source: "(66:6) <Actions>",
		ctx
	});

	return block;
}

// (64:4) <Card>
function create_default_slot$4(ctx) {
	let content;
	let t;
	let actions;
	let current;

	content = new Content({
			props: {
				$$slots: { default: [create_default_slot_13$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_1$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(content.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(content.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(content, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const content_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(content, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$4.name,
		type: "slot",
		source: "(64:4) <Card>",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let div5;
	let div0;
	let card0;
	let t0;
	let div1;
	let card1;
	let t1;
	let div2;
	let card2;
	let t2;
	let div3;
	let card3;
	let t3;
	let div4;
	let card4;
	let t4;
	let pre;
	let t5;
	let t6;
	let current;

	card0 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot_34] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	card1 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot_27$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	card2 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot_22$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	card3 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot_14$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	card4 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div5 = element("div");
			div0 = element("div");
			create_component(card0.$$.fragment);
			t0 = space();
			div1 = element("div");
			create_component(card1.$$.fragment);
			t1 = space();
			div2 = element("div");
			create_component(card2.$$.fragment);
			t2 = space();
			div3 = element("div");
			create_component(card3.$$.fragment);
			t3 = space();
			div4 = element("div");
			create_component(card4.$$.fragment);
			t4 = space();
			pre = element("pre");
			t5 = text("Clicked: ");
			t6 = text(/*clicked*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div0 = claim_element(div5_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(card0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div5_nodes);
			div1 = claim_element(div5_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(card1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div5_nodes);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(card2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			t2 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(card3.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			t3 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(card4.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t5 = claim_text(pre_nodes, "Clicked: ");
			t6 = claim_text(pre_nodes, /*clicked*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-container");
			add_location(div0, file$4, 1, 2, 29);
			attr_dev(div1, "class", "card-container");
			add_location(div1, file$4, 9, 2, 226);
			attr_dev(div2, "class", "card-container");
			add_location(div2, file$4, 23, 2, 565);
			attr_dev(div3, "class", "card-container");
			add_location(div3, file$4, 35, 2, 897);
			attr_dev(div4, "class", "card-container");
			add_location(div4, file$4, 62, 2, 1641);
			attr_dev(div5, "class", "card-display");
			add_location(div5, file$4, 0, 0, 0);
			attr_dev(pre, "class", "status");
			add_location(pre, file$4, 100, 0, 2715);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div0);
			mount_component(card0, div0, null);
			append_dev(div5, t0);
			append_dev(div5, div1);
			mount_component(card1, div1, null);
			append_dev(div5, t1);
			append_dev(div5, div2);
			mount_component(card2, div2, null);
			append_dev(div5, t2);
			append_dev(div5, div3);
			mount_component(card3, div3, null);
			append_dev(div5, t3);
			append_dev(div5, div4);
			mount_component(card4, div4, null);
			insert_dev(target, t4, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t5);
			append_dev(pre, t6);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const card0_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				card0_changes.$$scope = { dirty, ctx };
			}

			card0.$set(card0_changes);
			const card1_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				card1_changes.$$scope = { dirty, ctx };
			}

			card1.$set(card1_changes);
			const card2_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				card2_changes.$$scope = { dirty, ctx };
			}

			card2.$set(card2_changes);
			const card3_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				card3_changes.$$scope = { dirty, ctx };
			}

			card3.$set(card3_changes);
			const card4_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				card4_changes.$$scope = { dirty, ctx };
			}

			card4.$set(card4_changes);
			if (!current || dirty & /*clicked*/ 1) set_data_dev(t6, /*clicked*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(card0.$$.fragment, local);
			transition_in(card1.$$.fragment, local);
			transition_in(card2.$$.fragment, local);
			transition_in(card3.$$.fragment, local);
			transition_in(card4.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card0.$$.fragment, local);
			transition_out(card1.$$.fragment, local);
			transition_out(card2.$$.fragment, local);
			transition_out(card3.$$.fragment, local);
			transition_out(card4.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
			destroy_component(card0);
			destroy_component(card1);
			destroy_component(card2);
			destroy_component(card3);
			destroy_component(card4);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Actions", slots, []);
	let clicked = 0;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Actions> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(0, clicked++, clicked);
	const click_handler_1 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_2 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_3 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_4 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_5 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_6 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_7 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_8 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_9 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_10 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_11 = () => $$invalidate(0, clicked++, clicked);

	$$self.$capture_state = () => ({
		Card: Card$1,
		Content,
		PrimaryAction,
		Actions,
		ActionButtons,
		ActionIcons,
		Button: Button_1,
		Label: CommonLabel,
		IconButton,
		Icon: CommonIcon,
		clicked
	});

	$$self.$inject_state = $$props => {
		if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		clicked,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3,
		click_handler_4,
		click_handler_5,
		click_handler_6,
		click_handler_7,
		click_handler_8,
		click_handler_9,
		click_handler_10,
		click_handler_11
	];
}

class Actions_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Actions_1",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src/routes/demo/card/_Media.svelte generated by Svelte v3.37.0 */
const file$3 = "src/routes/demo/card/_Media.svelte";

// (5:8) <MediaContent>
function create_default_slot_8$1(ctx) {
	let h2;
	let t;

	const block = {
		c: function create() {
			h2 = element("h2");
			t = text("A card with 16x9 media.");
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", { class: true, style: true });
			var h2_nodes = children(h2);
			t = claim_text(h2_nodes, "A card with 16x9 media.");
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "mdc-typography--headline6 svelte-f6havf");
			set_style(h2, "color", "#fff");
			set_style(h2, "position", "absolute");
			set_style(h2, "bottom", "16px");
			set_style(h2, "left", "16px");
			set_style(h2, "margin", "0");
			add_location(h2, file$3, 5, 10, 159);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$1.name,
		type: "slot",
		source: "(5:8) <MediaContent>",
		ctx
	});

	return block;
}

// (4:6) <Media class="card-media-16x9" aspectRatio="16x9">
function create_default_slot_7$1(ctx) {
	let mediacontent;
	let current;

	mediacontent = new MediaContent({
			props: {
				$$slots: { default: [create_default_slot_8$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(mediacontent.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(mediacontent.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(mediacontent, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const mediacontent_changes = {};

			if (dirty & /*$$scope*/ 4) {
				mediacontent_changes.$$scope = { dirty, ctx };
			}

			mediacontent.$set(mediacontent_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(mediacontent.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(mediacontent.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(mediacontent, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$1.name,
		type: "slot",
		source: "(4:6) <Media class=\\\"card-media-16x9\\\" aspectRatio=\\\"16x9\\\">",
		ctx
	});

	return block;
}

// (14:6) <Content style="color: #888;">
function create_default_slot_6$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Here's some gray text down here.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Here's some gray text down here.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$1.name,
		type: "slot",
		source: "(14:6) <Content style=\\\"color: #888;\\\">",
		ctx
	});

	return block;
}

// (3:4) <Card>
function create_default_slot_5$2(ctx) {
	let media;
	let t;
	let content;
	let current;

	media = new Media({
			props: {
				class: "card-media-16x9",
				aspectRatio: "16x9",
				$$slots: { default: [create_default_slot_7$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				style: "color: #888;",
				$$slots: { default: [create_default_slot_6$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(media.$$.fragment);
			t = space();
			create_component(content.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(media.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(media, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(content, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const media_changes = {};

			if (dirty & /*$$scope*/ 4) {
				media_changes.$$scope = { dirty, ctx };
			}

			media.$set(media_changes);
			const content_changes = {};

			if (dirty & /*$$scope*/ 4) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(media.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(media.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(media, detaching);
			if (detaching) detach_dev(t);
			destroy_component(content, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$2.name,
		type: "slot",
		source: "(3:4) <Card>",
		ctx
	});

	return block;
}

// (20:6) <Media class="card-media-square" aspectRatio="square">
function create_default_slot_4$2(ctx) {
	let div;
	let h2;
	let t0;
	let t1;
	let h3;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text("A card with square media.");
			t1 = space();
			h3 = element("h3");
			t2 = text("And a subtitle.");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true, class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", { class: true, style: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "A card with square media.");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			h3 = claim_element(div_nodes, "H3", { class: true, style: true });
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, "And a subtitle.");
			h3_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "mdc-typography--headline6 svelte-f6havf");
			set_style(h2, "margin", "0");
			add_location(h2, file$3, 21, 10, 723);
			attr_dev(h3, "class", "mdc-typography--subtitle2 svelte-f6havf");
			set_style(h3, "margin", "0");
			add_location(h3, file$3, 24, 10, 845);
			set_style(div, "color", "#fff");
			set_style(div, "position", "absolute");
			set_style(div, "bottom", "16px");
			set_style(div, "left", "16px");
			attr_dev(div, "class", "svelte-f6havf");
			add_location(div, file$3, 20, 8, 640);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			append_dev(div, h3);
			append_dev(h3, t2);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$2.name,
		type: "slot",
		source: "(20:6) <Media class=\\\"card-media-square\\\" aspectRatio=\\\"square\\\">",
		ctx
	});

	return block;
}

// (19:4) <Card style="min-width: 300px;">
function create_default_slot_3$3(ctx) {
	let media;
	let current;

	media = new Media({
			props: {
				class: "card-media-square",
				aspectRatio: "square",
				$$slots: { default: [create_default_slot_4$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(media.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(media.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(media, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const media_changes = {};

			if (dirty & /*$$scope*/ 4) {
				media_changes.$$scope = { dirty, ctx };
			}

			media.$set(media_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(media.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(media.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(media, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$3.name,
		type: "slot",
		source: "(19:4) <Card style=\\\"min-width: 300px;\\\">",
		ctx
	});

	return block;
}

// (45:8) <Content class="mdc-typography--body2">
function create_default_slot_2$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("And some info text. And the media and info text are a primary action\n          for the card.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "And some info text. And the media and info text are a primary action\n          for the card.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(45:8) <Content class=\\\"mdc-typography--body2\\\">",
		ctx
	});

	return block;
}

// (43:6) <PrimaryAction on:click={() => clicked++}>
function create_default_slot_1$3(ctx) {
	let media;
	let t;
	let content;
	let current;

	media = new Media({
			props: {
				class: "card-media-16x9",
				aspectRatio: "16x9"
			},
			$$inline: true
		});

	content = new Content({
			props: {
				class: "mdc-typography--body2",
				$$slots: { default: [create_default_slot_2$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(media.$$.fragment);
			t = space();
			create_component(content.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(media.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(media, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(content, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const content_changes = {};

			if (dirty & /*$$scope*/ 4) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(media.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(media.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(media, detaching);
			if (detaching) detach_dev(t);
			destroy_component(content, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$3.name,
		type: "slot",
		source: "(43:6) <PrimaryAction on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (34:4) <Card>
function create_default_slot$3(ctx) {
	let div;
	let h2;
	let t0;
	let t1;
	let h3;
	let t2;
	let t3;
	let primaryaction;
	let current;

	primaryaction = new PrimaryAction({
			props: {
				$$slots: { default: [create_default_slot_1$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	primaryaction.$on("click", /*click_handler*/ ctx[1]);

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text("A card with media.");
			t1 = space();
			h3 = element("h3");
			t2 = text("And a subtitle.");
			t3 = space();
			create_component(primaryaction.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true, class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", { class: true, style: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "A card with media.");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			h3 = claim_element(div_nodes, "H3", { class: true, style: true });
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, "And a subtitle.");
			h3_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			claim_component(primaryaction.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "mdc-typography--headline6 svelte-f6havf");
			set_style(h2, "margin", "0");
			add_location(h2, file$3, 35, 8, 1084);
			attr_dev(h3, "class", "mdc-typography--subtitle2 svelte-f6havf");
			set_style(h3, "margin", "0");
			set_style(h3, "color", "#888");
			add_location(h3, file$3, 38, 8, 1193);
			set_style(div, "padding", "1rem");
			attr_dev(div, "class", "svelte-f6havf");
			add_location(div, file$3, 34, 6, 1047);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			append_dev(div, h3);
			append_dev(h3, t2);
			insert_dev(target, t3, anchor);
			mount_component(primaryaction, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const primaryaction_changes = {};

			if (dirty & /*$$scope*/ 4) {
				primaryaction_changes.$$scope = { dirty, ctx };
			}

			primaryaction.$set(primaryaction_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(primaryaction.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(primaryaction.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t3);
			destroy_component(primaryaction, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$3.name,
		type: "slot",
		source: "(34:4) <Card>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let div3;
	let div0;
	let card0;
	let t0;
	let div1;
	let card1;
	let t1;
	let div2;
	let card2;
	let t2;
	let pre;
	let t3;
	let t4;
	let current;

	card0 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot_5$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	card1 = new Card$1({
			props: {
				style: "min-width: 300px;",
				$$slots: { default: [create_default_slot_3$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	card2 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(card0.$$.fragment);
			t0 = space();
			div1 = element("div");
			create_component(card1.$$.fragment);
			t1 = space();
			div2 = element("div");
			create_component(card2.$$.fragment);
			t2 = space();
			pre = element("pre");
			t3 = text("Clicked: ");
			t4 = text(/*clicked*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(card0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(card1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(card2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "Clicked: ");
			t4 = claim_text(pre_nodes, /*clicked*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-container svelte-f6havf");
			add_location(div0, file$3, 1, 2, 29);
			attr_dev(div1, "class", "card-container svelte-f6havf");
			add_location(div1, file$3, 17, 2, 505);
			attr_dev(div2, "class", "card-container svelte-f6havf");
			add_location(div2, file$3, 32, 2, 1001);
			attr_dev(div3, "class", "card-display svelte-f6havf");
			add_location(div3, file$3, 0, 0, 0);
			attr_dev(pre, "class", "status svelte-f6havf");
			add_location(pre, file$3, 53, 0, 1649);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(card0, div0, null);
			append_dev(div3, t0);
			append_dev(div3, div1);
			mount_component(card1, div1, null);
			append_dev(div3, t1);
			append_dev(div3, div2);
			mount_component(card2, div2, null);
			insert_dev(target, t2, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t3);
			append_dev(pre, t4);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const card0_changes = {};

			if (dirty & /*$$scope*/ 4) {
				card0_changes.$$scope = { dirty, ctx };
			}

			card0.$set(card0_changes);
			const card1_changes = {};

			if (dirty & /*$$scope*/ 4) {
				card1_changes.$$scope = { dirty, ctx };
			}

			card1.$set(card1_changes);
			const card2_changes = {};

			if (dirty & /*$$scope, clicked*/ 5) {
				card2_changes.$$scope = { dirty, ctx };
			}

			card2.$set(card2_changes);
			if (!current || dirty & /*clicked*/ 1) set_data_dev(t4, /*clicked*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(card0.$$.fragment, local);
			transition_in(card1.$$.fragment, local);
			transition_in(card2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card0.$$.fragment, local);
			transition_out(card1.$$.fragment, local);
			transition_out(card2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(card0);
			destroy_component(card1);
			destroy_component(card2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Media", slots, []);
	let clicked = 0;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Media> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(0, clicked++, clicked);

	$$self.$capture_state = () => ({
		Card: Card$1,
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		clicked
	});

	$$self.$inject_state = $$props => {
		if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [clicked, click_handler];
}

class Media_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Media_1",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/card/_List.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/card/_List.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (6:10) <Text>
function create_default_slot_5$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("A card with a list as content.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "A card with a list as content.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$1.name,
		type: "slot",
		source: "(6:10) <Text>",
		ctx
	});

	return block;
}

// (5:8) <Item on:click={() => clicked++}>
function create_default_slot_4$1(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_5$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$1.name,
		type: "slot",
		source: "(5:8) <Item on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (10:12) <Text>
function create_default_slot_3$2(ctx) {
	let t0;
	let t1_value = /*item*/ ctx[3] + "";
	let t1;

	const block = {
		c: function create() {
			t0 = text("Item #");
			t1 = text(t1_value);
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Item #");
			t1 = claim_text(nodes, t1_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$2.name,
		type: "slot",
		source: "(10:12) <Text>",
		ctx
	});

	return block;
}

// (9:10) <Item on:click={() => clicked++}>
function create_default_slot_2$2(ctx) {
	let text_1;
	let t;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_3$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(9:10) <Item on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (8:8) {#each [...Array(5)].map((v, i) => i + 1) as item}
function create_each_block(ctx) {
	let item;
	let current;

	item = new Item({
			props: {
				$$slots: { default: [create_default_slot_2$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item.$on("click", /*click_handler_1*/ ctx[2]);

	const block = {
		c: function create() {
			create_component(item.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(item.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(item, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const item_changes = {};

			if (dirty & /*$$scope*/ 64) {
				item_changes.$$scope = { dirty, ctx };
			}

			item.$set(item_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(item.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(item.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(item, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(8:8) {#each [...Array(5)].map((v, i) => i + 1) as item}",
		ctx
	});

	return block;
}

// (4:6) <Content component={List}>
function create_default_slot_1$2(ctx) {
	let item;
	let t;
	let each_1_anchor;
	let current;

	item = new Item({
			props: {
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item.$on("click", /*click_handler*/ ctx[1]);
	let each_value = [...Array(5)].map(func);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(item.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(item.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(item, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const item_changes = {};

			if (dirty & /*$$scope*/ 64) {
				item_changes.$$scope = { dirty, ctx };
			}

			item.$set(item_changes);

			if (dirty & /*clicked, Array*/ 1) {
				each_value = [...Array(5)].map(func);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(item.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(item.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(item, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$2.name,
		type: "slot",
		source: "(4:6) <Content component={List}>",
		ctx
	});

	return block;
}

// (3:4) <Card>
function create_default_slot$2(ctx) {
	let content;
	let current;

	content = new Content({
			props: {
				component: List,
				$$slots: { default: [create_default_slot_1$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(content.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(content.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(content, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const content_changes = {};

			if (dirty & /*$$scope, clicked*/ 65) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(content.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(content.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(content, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(3:4) <Card>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div1;
	let div0;
	let card;
	let t0;
	let pre;
	let t1;
	let t2;
	let current;

	card = new Card$1({
			props: {
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			create_component(card.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Clicked: ");
			t2 = text(/*clicked*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(card.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t1 = claim_text(pre_nodes, "Clicked: ");
			t2 = claim_text(pre_nodes, /*clicked*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-container");
			add_location(div0, file$2, 1, 2, 29);
			attr_dev(div1, "class", "card-display");
			add_location(div1, file$2, 0, 0, 0);
			attr_dev(pre, "class", "status");
			add_location(pre, file$2, 17, 0, 435);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			mount_component(card, div0, null);
			insert_dev(target, t0, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t1);
			append_dev(pre, t2);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const card_changes = {};

			if (dirty & /*$$scope, clicked*/ 65) {
				card_changes.$$scope = { dirty, ctx };
			}

			card.$set(card_changes);
			if (!current || dirty & /*clicked*/ 1) set_data_dev(t2, /*clicked*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(card.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_component(card);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const func = (v, i) => i + 1;

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("List", slots, []);
	let clicked = 0;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<List> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(0, clicked++, clicked);
	const click_handler_1 = () => $$invalidate(0, clicked++, clicked);
	$$self.$capture_state = () => ({ Card: Card$1, Content, List, Item, Text, clicked });

	$$self.$inject_state = $$props => {
		if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [clicked, click_handler, click_handler_1];
}

class List_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "List_1",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/card/_Complex.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/card/_Complex.svelte";

// (6:10) <MediaContent>
function create_default_slot_31(ctx) {
	let div;
	let h2;
	let t0;
	let t1;
	let h3;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text("A card with media.");
			t1 = space();
			h3 = element("h3");
			t2 = text("And a subtitle.");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true, class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", { class: true, style: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "A card with media.");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			h3 = claim_element(div_nodes, "H3", { class: true, style: true });
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, "And a subtitle.");
			h3_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "mdc-typography--headline6 svelte-1wycv7x");
			set_style(h2, "margin", "0");
			add_location(h2, file$1, 9, 14, 328);
			attr_dev(h3, "class", "mdc-typography--subtitle2 svelte-1wycv7x");
			set_style(h3, "margin", "0");
			add_location(h3, file$1, 12, 14, 455);
			set_style(div, "color", "#fff");
			set_style(div, "position", "absolute");
			set_style(div, "bottom", "16px");
			set_style(div, "left", "16px");
			attr_dev(div, "class", "svelte-1wycv7x");
			add_location(div, file$1, 6, 12, 214);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			append_dev(div, h3);
			append_dev(h3, t2);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_31.name,
		type: "slot",
		source: "(6:10) <MediaContent>",
		ctx
	});

	return block;
}

// (5:8) <Media class="card-media-16x9" aspectRatio="16x9">
function create_default_slot_30(ctx) {
	let mediacontent;
	let current;

	mediacontent = new MediaContent({
			props: {
				$$slots: { default: [create_default_slot_31] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(mediacontent.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(mediacontent.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(mediacontent, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const mediacontent_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				mediacontent_changes.$$scope = { dirty, ctx };
			}

			mediacontent.$set(mediacontent_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(mediacontent.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(mediacontent.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(mediacontent, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_30.name,
		type: "slot",
		source: "(5:8) <Media class=\\\"card-media-16x9\\\" aspectRatio=\\\"16x9\\\">",
		ctx
	});

	return block;
}

// (19:8) <Content class="mdc-typography--body2">
function create_default_slot_29(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("It's all in this card. It's a veritable smorgasbord of card features.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "It's all in this card. It's a veritable smorgasbord of card features.");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_29.name,
		type: "slot",
		source: "(19:8) <Content class=\\\"mdc-typography--body2\\\">",
		ctx
	});

	return block;
}

// (4:6) <PrimaryAction on:click={() => clicked++}>
function create_default_slot_28(ctx) {
	let media;
	let t;
	let content;
	let current;

	media = new Media({
			props: {
				class: "card-media-16x9",
				aspectRatio: "16x9",
				$$slots: { default: [create_default_slot_30] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				class: "mdc-typography--body2",
				$$slots: { default: [create_default_slot_29] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(media.$$.fragment);
			t = space();
			create_component(content.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(media.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(media, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(content, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const media_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				media_changes.$$scope = { dirty, ctx };
			}

			media.$set(media_changes);
			const content_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(media.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(media.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(media, detaching);
			if (detaching) detach_dev(t);
			destroy_component(content, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_28.name,
		type: "slot",
		source: "(4:6) <PrimaryAction on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (26:12) <Label>
function create_default_slot_27(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Action");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Action");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_27.name,
		type: "slot",
		source: "(26:12) <Label>",
		ctx
	});

	return block;
}

// (25:10) <Button on:click={() => clicked++}>
function create_default_slot_26(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_27] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_26.name,
		type: "slot",
		source: "(25:10) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (29:12) <Label>
function create_default_slot_25(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Another");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Another");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_25.name,
		type: "slot",
		source: "(29:12) <Label>",
		ctx
	});

	return block;
}

// (28:10) <Button on:click={() => clicked++}>
function create_default_slot_24(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_25] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_24.name,
		type: "slot",
		source: "(28:10) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (24:8) <ActionButtons>
function create_default_slot_23(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_26] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_1*/ ctx[2]);

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_24] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_2*/ ctx[3]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t = space();
			create_component(button1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(button1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(button1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_23.name,
		type: "slot",
		source: "(24:8) <ActionButtons>",
		ctx
	});

	return block;
}

// (39:12) <Icon class="material-icons" on>
function create_default_slot_22(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_22.name,
		type: "slot",
		source: "(39:12) <Icon class=\\\"material-icons\\\" on>",
		ctx
	});

	return block;
}

// (40:12) <Icon class="material-icons">
function create_default_slot_21(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite_border");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite_border");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_21.name,
		type: "slot",
		source: "(40:12) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (33:10) <IconButton             on:click={() => clicked++}             toggle             aria-label="Add to favorites"             title="Add to favorites"           >
function create_default_slot_20(ctx) {
	let icon0;
	let t;
	let icon1;
	let current;

	icon0 = new CommonIcon({
			props: {
				class: "material-icons",
				on: true,
				$$slots: { default: [create_default_slot_22] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	icon1 = new CommonIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_21] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon0.$$.fragment);
			t = space();
			create_component(icon1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(icon1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(icon1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				icon0_changes.$$scope = { dirty, ctx };
			}

			icon0.$set(icon0_changes);
			const icon1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				icon1_changes.$$scope = { dirty, ctx };
			}

			icon1.$set(icon1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon0.$$.fragment, local);
			transition_in(icon1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon0.$$.fragment, local);
			transition_out(icon1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(icon1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_20.name,
		type: "slot",
		source: "(33:10) <IconButton             on:click={() => clicked++}             toggle             aria-label=\\\"Add to favorites\\\"             title=\\\"Add to favorites\\\"           >",
		ctx
	});

	return block;
}

// (42:10) <IconButton             class="material-icons"             on:click={() => clicked++}             title="Share">
function create_default_slot_19(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("share");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "share");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_19.name,
		type: "slot",
		source: "(42:10) <IconButton             class=\\\"material-icons\\\"             on:click={() => clicked++}             title=\\\"Share\\\">",
		ctx
	});

	return block;
}

// (47:10) <IconButton             class="material-icons"             on:click={() => clicked++}             title="More options">
function create_default_slot_18(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("more_vert");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "more_vert");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_18.name,
		type: "slot",
		source: "(47:10) <IconButton             class=\\\"material-icons\\\"             on:click={() => clicked++}             title=\\\"More options\\\">",
		ctx
	});

	return block;
}

// (32:8) <ActionIcons>
function create_default_slot_17(ctx) {
	let iconbutton0;
	let t0;
	let iconbutton1;
	let t1;
	let iconbutton2;
	let current;

	iconbutton0 = new IconButton({
			props: {
				toggle: true,
				"aria-label": "Add to favorites",
				title: "Add to favorites",
				$$slots: { default: [create_default_slot_20] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton0.$on("click", /*click_handler_3*/ ctx[4]);

	iconbutton1 = new IconButton({
			props: {
				class: "material-icons",
				title: "Share",
				$$slots: { default: [create_default_slot_19] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton1.$on("click", /*click_handler_4*/ ctx[5]);

	iconbutton2 = new IconButton({
			props: {
				class: "material-icons",
				title: "More options",
				$$slots: { default: [create_default_slot_18] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton2.$on("click", /*click_handler_5*/ ctx[6]);

	const block = {
		c: function create() {
			create_component(iconbutton0.$$.fragment);
			t0 = space();
			create_component(iconbutton1.$$.fragment);
			t1 = space();
			create_component(iconbutton2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(iconbutton0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(iconbutton1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(iconbutton2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(iconbutton0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(iconbutton1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(iconbutton2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const iconbutton0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton0_changes.$$scope = { dirty, ctx };
			}

			iconbutton0.$set(iconbutton0_changes);
			const iconbutton1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton1_changes.$$scope = { dirty, ctx };
			}

			iconbutton1.$set(iconbutton1_changes);
			const iconbutton2_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton2_changes.$$scope = { dirty, ctx };
			}

			iconbutton2.$set(iconbutton2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(iconbutton0.$$.fragment, local);
			transition_in(iconbutton1.$$.fragment, local);
			transition_in(iconbutton2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(iconbutton0.$$.fragment, local);
			transition_out(iconbutton1.$$.fragment, local);
			transition_out(iconbutton2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(iconbutton0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(iconbutton1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(iconbutton2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_17.name,
		type: "slot",
		source: "(32:8) <ActionIcons>",
		ctx
	});

	return block;
}

// (23:6) <Actions>
function create_default_slot_16(ctx) {
	let actionbuttons;
	let t;
	let actionicons;
	let current;

	actionbuttons = new ActionButtons({
			props: {
				$$slots: { default: [create_default_slot_23] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actionicons = new ActionIcons({
			props: {
				$$slots: { default: [create_default_slot_17] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(actionbuttons.$$.fragment);
			t = space();
			create_component(actionicons.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(actionbuttons.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actionicons.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(actionbuttons, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actionicons, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const actionbuttons_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actionbuttons_changes.$$scope = { dirty, ctx };
			}

			actionbuttons.$set(actionbuttons_changes);
			const actionicons_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actionicons_changes.$$scope = { dirty, ctx };
			}

			actionicons.$set(actionicons_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(actionbuttons.$$.fragment, local);
			transition_in(actionicons.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(actionbuttons.$$.fragment, local);
			transition_out(actionicons.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(actionbuttons, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actionicons, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_16.name,
		type: "slot",
		source: "(23:6) <Actions>",
		ctx
	});

	return block;
}

// (3:4) <Card>
function create_default_slot_15(ctx) {
	let primaryaction;
	let t;
	let actions;
	let current;

	primaryaction = new PrimaryAction({
			props: {
				$$slots: { default: [create_default_slot_28] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	primaryaction.$on("click", /*click_handler*/ ctx[1]);

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_16] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(primaryaction.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(primaryaction.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(primaryaction, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const primaryaction_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				primaryaction_changes.$$scope = { dirty, ctx };
			}

			primaryaction.$set(primaryaction_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(primaryaction.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(primaryaction.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(primaryaction, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_15.name,
		type: "slot",
		source: "(3:4) <Card>",
		ctx
	});

	return block;
}

// (61:8) <Content class="mdc-typography--body2">
function create_default_slot_14(ctx) {
	let h2;
	let t0;
	let t1;
	let h3;
	let t2;
	let t3;

	const block = {
		c: function create() {
			h2 = element("h2");
			t0 = text("A card with media.");
			t1 = space();
			h3 = element("h3");
			t2 = text("And a subtitle.");
			t3 = text("\n          It's all in this card. It's a veritable smorgasbord of card features.");
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", { class: true, style: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "A card with media.");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			h3 = claim_element(nodes, "H3", { class: true, style: true });
			var h3_nodes = children(h3);
			t2 = claim_text(h3_nodes, "And a subtitle.");
			h3_nodes.forEach(detach_dev);
			t3 = claim_text(nodes, "\n          It's all in this card. It's a veritable smorgasbord of card features.");
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "mdc-typography--headline6 svelte-1wycv7x");
			set_style(h2, "margin", "0");
			add_location(h2, file$1, 61, 10, 1991);
			attr_dev(h3, "class", "mdc-typography--subtitle2 svelte-1wycv7x");
			set_style(h3, "margin", "0 0 10px");
			set_style(h3, "color", "#888");
			add_location(h3, file$1, 64, 10, 2106);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, h3, anchor);
			append_dev(h3, t2);
			insert_dev(target, t3, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(h3);
			if (detaching) detach_dev(t3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_14.name,
		type: "slot",
		source: "(61:8) <Content class=\\\"mdc-typography--body2\\\">",
		ctx
	});

	return block;
}

// (59:6) <PrimaryAction on:click={() => clicked++}>
function create_default_slot_13(ctx) {
	let media;
	let t;
	let content;
	let current;

	media = new Media({
			props: {
				class: "card-media-16x9",
				aspectRatio: "16x9"
			},
			$$inline: true
		});

	content = new Content({
			props: {
				class: "mdc-typography--body2",
				$$slots: { default: [create_default_slot_14] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(media.$$.fragment);
			t = space();
			create_component(content.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(media.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(media, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(content, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const content_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(media.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(media.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(media, detaching);
			if (detaching) detach_dev(t);
			destroy_component(content, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_13.name,
		type: "slot",
		source: "(59:6) <PrimaryAction on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (77:12) <Label>
function create_default_slot_12(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Action");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Action");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_12.name,
		type: "slot",
		source: "(77:12) <Label>",
		ctx
	});

	return block;
}

// (76:10) <Button on:click={() => clicked++}>
function create_default_slot_11(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_12] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_11.name,
		type: "slot",
		source: "(76:10) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (80:12) <Label>
function create_default_slot_10(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Another");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Another");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_10.name,
		type: "slot",
		source: "(80:12) <Label>",
		ctx
	});

	return block;
}

// (79:10) <Button on:click={() => clicked++}>
function create_default_slot_9(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9.name,
		type: "slot",
		source: "(79:10) <Button on:click={() => clicked++}>",
		ctx
	});

	return block;
}

// (75:8) <ActionButtons>
function create_default_slot_8(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler_7*/ ctx[8]);

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_8*/ ctx[9]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t = space();
			create_component(button1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(button1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(button1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8.name,
		type: "slot",
		source: "(75:8) <ActionButtons>",
		ctx
	});

	return block;
}

// (90:12) <Icon class="material-icons" on>
function create_default_slot_7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(90:12) <Icon class=\\\"material-icons\\\" on>",
		ctx
	});

	return block;
}

// (91:12) <Icon class="material-icons">
function create_default_slot_6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite_border");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite_border");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(91:12) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (84:10) <IconButton             on:click={() => clicked++}             toggle             aria-label="Add to favorites"             title="Add to favorites"           >
function create_default_slot_5(ctx) {
	let icon0;
	let t;
	let icon1;
	let current;

	icon0 = new CommonIcon({
			props: {
				class: "material-icons",
				on: true,
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	icon1 = new CommonIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon0.$$.fragment);
			t = space();
			create_component(icon1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(icon1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(icon1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				icon0_changes.$$scope = { dirty, ctx };
			}

			icon0.$set(icon0_changes);
			const icon1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				icon1_changes.$$scope = { dirty, ctx };
			}

			icon1.$set(icon1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon0.$$.fragment, local);
			transition_in(icon1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon0.$$.fragment, local);
			transition_out(icon1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(icon1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(84:10) <IconButton             on:click={() => clicked++}             toggle             aria-label=\\\"Add to favorites\\\"             title=\\\"Add to favorites\\\"           >",
		ctx
	});

	return block;
}

// (93:10) <IconButton             class="material-icons"             on:click={() => clicked++}             title="Share">
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("share");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "share");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(93:10) <IconButton             class=\\\"material-icons\\\"             on:click={() => clicked++}             title=\\\"Share\\\">",
		ctx
	});

	return block;
}

// (98:10) <IconButton             class="material-icons"             on:click={() => clicked++}             title="More options">
function create_default_slot_3$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("more_vert");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "more_vert");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(98:10) <IconButton             class=\\\"material-icons\\\"             on:click={() => clicked++}             title=\\\"More options\\\">",
		ctx
	});

	return block;
}

// (83:8) <ActionIcons>
function create_default_slot_2$1(ctx) {
	let iconbutton0;
	let t0;
	let iconbutton1;
	let t1;
	let iconbutton2;
	let current;

	iconbutton0 = new IconButton({
			props: {
				toggle: true,
				"aria-label": "Add to favorites",
				title: "Add to favorites",
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton0.$on("click", /*click_handler_9*/ ctx[10]);

	iconbutton1 = new IconButton({
			props: {
				class: "material-icons",
				title: "Share",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton1.$on("click", /*click_handler_10*/ ctx[11]);

	iconbutton2 = new IconButton({
			props: {
				class: "material-icons",
				title: "More options",
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton2.$on("click", /*click_handler_11*/ ctx[12]);

	const block = {
		c: function create() {
			create_component(iconbutton0.$$.fragment);
			t0 = space();
			create_component(iconbutton1.$$.fragment);
			t1 = space();
			create_component(iconbutton2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(iconbutton0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(iconbutton1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(iconbutton2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(iconbutton0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(iconbutton1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(iconbutton2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const iconbutton0_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton0_changes.$$scope = { dirty, ctx };
			}

			iconbutton0.$set(iconbutton0_changes);
			const iconbutton1_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton1_changes.$$scope = { dirty, ctx };
			}

			iconbutton1.$set(iconbutton1_changes);
			const iconbutton2_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				iconbutton2_changes.$$scope = { dirty, ctx };
			}

			iconbutton2.$set(iconbutton2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(iconbutton0.$$.fragment, local);
			transition_in(iconbutton1.$$.fragment, local);
			transition_in(iconbutton2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(iconbutton0.$$.fragment, local);
			transition_out(iconbutton1.$$.fragment, local);
			transition_out(iconbutton2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(iconbutton0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(iconbutton1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(iconbutton2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(83:8) <ActionIcons>",
		ctx
	});

	return block;
}

// (74:6) <Actions>
function create_default_slot_1$1(ctx) {
	let actionbuttons;
	let t;
	let actionicons;
	let current;

	actionbuttons = new ActionButtons({
			props: {
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actionicons = new ActionIcons({
			props: {
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(actionbuttons.$$.fragment);
			t = space();
			create_component(actionicons.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(actionbuttons.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actionicons.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(actionbuttons, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actionicons, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const actionbuttons_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actionbuttons_changes.$$scope = { dirty, ctx };
			}

			actionbuttons.$set(actionbuttons_changes);
			const actionicons_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actionicons_changes.$$scope = { dirty, ctx };
			}

			actionicons.$set(actionicons_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(actionbuttons.$$.fragment, local);
			transition_in(actionicons.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(actionbuttons.$$.fragment, local);
			transition_out(actionicons.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(actionbuttons, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actionicons, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$1.name,
		type: "slot",
		source: "(74:6) <Actions>",
		ctx
	});

	return block;
}

// (58:4) <Card>
function create_default_slot$1(ctx) {
	let primaryaction;
	let t;
	let actions;
	let current;

	primaryaction = new PrimaryAction({
			props: {
				$$slots: { default: [create_default_slot_13] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	primaryaction.$on("click", /*click_handler_6*/ ctx[7]);

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(primaryaction.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(primaryaction.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(primaryaction, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const primaryaction_changes = {};

			if (dirty & /*$$scope*/ 8192) {
				primaryaction_changes.$$scope = { dirty, ctx };
			}

			primaryaction.$set(primaryaction_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(primaryaction.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(primaryaction.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(primaryaction, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(58:4) <Card>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div2;
	let div0;
	let card0;
	let t0;
	let div1;
	let card1;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	card0 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot_15] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	card1 = new Card$1({
			props: {
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			create_component(card0.$$.fragment);
			t0 = space();
			div1 = element("div");
			create_component(card1.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Clicked: ");
			t3 = text(/*clicked*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(card0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(card1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Clicked: ");
			t3 = claim_text(pre_nodes, /*clicked*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "card-container svelte-1wycv7x");
			add_location(div0, file$1, 1, 2, 29);
			attr_dev(div1, "class", "card-container svelte-1wycv7x");
			add_location(div1, file$1, 56, 2, 1783);
			attr_dev(div2, "class", "card-display svelte-1wycv7x");
			add_location(div2, file$1, 0, 0, 0);
			attr_dev(pre, "class", "status svelte-1wycv7x");
			add_location(pre, file$1, 108, 0, 3376);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			mount_component(card0, div0, null);
			append_dev(div2, t0);
			append_dev(div2, div1);
			mount_component(card1, div1, null);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const card0_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				card0_changes.$$scope = { dirty, ctx };
			}

			card0.$set(card0_changes);
			const card1_changes = {};

			if (dirty & /*$$scope, clicked*/ 8193) {
				card1_changes.$$scope = { dirty, ctx };
			}

			card1.$set(card1_changes);
			if (!current || dirty & /*clicked*/ 1) set_data_dev(t3, /*clicked*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(card0.$$.fragment, local);
			transition_in(card1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(card0.$$.fragment, local);
			transition_out(card1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_component(card0);
			destroy_component(card1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Complex", slots, []);
	let clicked = 0;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Complex> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(0, clicked++, clicked);
	const click_handler_1 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_2 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_3 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_4 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_5 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_6 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_7 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_8 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_9 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_10 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_11 = () => $$invalidate(0, clicked++, clicked);

	$$self.$capture_state = () => ({
		Card: Card$1,
		Content,
		PrimaryAction,
		Media,
		MediaContent,
		Actions,
		ActionButtons,
		ActionIcons,
		Button: Button_1,
		Label: CommonLabel,
		IconButton,
		Icon: CommonIcon,
		clicked
	});

	$$self.$inject_state = $$props => {
		if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		clicked,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3,
		click_handler_4,
		click_handler_5,
		click_handler_6,
		click_handler_7,
		click_handler_8,
		click_handler_9,
		click_handler_10,
		click_handler_11
	];
}

class Complex extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Complex",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/card/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/card/index.svelte";

// (12:2) <Demo component={Actions} file="card/_Actions.svelte">
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("With Actions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "With Actions");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(12:2) <Demo component={Actions} file=\\\"card/_Actions.svelte\\\">",
		ctx
	});

	return block;
}

// (14:2) <Demo component={Media} file="card/_Media.svelte">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("With Media");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "With Media");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(14:2) <Demo component={Media} file=\\\"card/_Media.svelte\\\">",
		ctx
	});

	return block;
}

// (16:2) <Demo component={List} file="card/_List.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("With a List");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "With a List");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(16:2) <Demo component={List} file=\\\"card/_List.svelte\\\">",
		ctx
	});

	return block;
}

// (18:2) <Demo component={Complex} file="card/_Complex.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Complex");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Complex");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(18:2) <Demo component={Complex} file=\\\"card/_Complex.svelte\\\">",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section;
	let h2;
	let t1;
	let t2;
	let pre;
	let t3;
	let t4;
	let demo0;
	let t5;
	let demo1;
	let t6;
	let demo2;
	let t7;
	let demo3;
	let t8;
	let demo4;
	let current;

	demo0 = new Demo({
			props: {
				component: Simple,
				file: "card/_Simple.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: Actions_1,
				file: "card/_Actions.svelte",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: Media_1,
				file: "card/_Media.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: List_1,
				file: "card/_List.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo4 = new Demo({
			props: {
				component: Complex,
				file: "card/_Complex.svelte",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			h2 = element("h2");
			t1 = text("Cards");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/card");
			t4 = space();
			create_component(demo0.$$.fragment);
			t5 = space();
			create_component(demo1.$$.fragment);
			t6 = space();
			create_component(demo2.$$.fragment);
			t7 = space();
			create_component(demo3.$$.fragment);
			t8 = space();
			create_component(demo4.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-bxj52f\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Cards");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/card");
			pre_nodes.forEach(detach_dev);
			t4 = claim_space(section_nodes);
			claim_component(demo0.$$.fragment, section_nodes);
			t5 = claim_space(section_nodes);
			claim_component(demo1.$$.fragment, section_nodes);
			t6 = claim_space(section_nodes);
			claim_component(demo2.$$.fragment, section_nodes);
			t7 = claim_space(section_nodes);
			claim_component(demo3.$$.fragment, section_nodes);
			t8 = claim_space(section_nodes);
			claim_component(demo4.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Cards - SMUI";
			attr_dev(h2, "class", "svelte-1omcqjq");
			add_location(h2, file, 5, 2, 72);
			attr_dev(pre, "class", "demo-spaced svelte-1omcqjq");
			add_location(pre, file, 7, 2, 90);
			attr_dev(section, "class", "svelte-1omcqjq");
			add_location(section, file, 4, 0, 60);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t1);
			append_dev(section, t2);
			append_dev(section, pre);
			append_dev(pre, t3);
			append_dev(section, t4);
			mount_component(demo0, section, null);
			append_dev(section, t5);
			mount_component(demo1, section, null);
			append_dev(section, t6);
			mount_component(demo2, section, null);
			append_dev(section, t7);
			mount_component(demo3, section, null);
			append_dev(section, t8);
			mount_component(demo4, section, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const demo1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo1_changes.$$scope = { dirty, ctx };
			}

			demo1.$set(demo1_changes);
			const demo2_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo2_changes.$$scope = { dirty, ctx };
			}

			demo2.$set(demo2_changes);
			const demo3_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo3_changes.$$scope = { dirty, ctx };
			}

			demo3.$set(demo3_changes);
			const demo4_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo4_changes.$$scope = { dirty, ctx };
			}

			demo4.$set(demo4_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(demo0.$$.fragment, local);
			transition_in(demo1.$$.fragment, local);
			transition_in(demo2.$$.fragment, local);
			transition_in(demo3.$$.fragment, local);
			transition_in(demo4.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(demo0.$$.fragment, local);
			transition_out(demo1.$$.fragment, local);
			transition_out(demo2.$$.fragment, local);
			transition_out(demo3.$$.fragment, local);
			transition_out(demo4.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			destroy_component(demo0);
			destroy_component(demo1);
			destroy_component(demo2);
			destroy_component(demo3);
			destroy_component(demo4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Card", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Card> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Simple,
		Actions: Actions_1,
		Media: Media_1,
		List: List_1,
		Complex
	});

	return [];
}

class Card extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Card",
			options,
			id: create_fragment.name
		});
	}
}

export default Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjBmMGNjYzguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL2NhcmQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NhcmQvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NhcmQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jYXJkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL2V2ZW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NhcmQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jYXJkL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NhcmQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NhcmQvbm9kZV9tb2R1bGVzL0BzbXVpL3JpcHBsZS9SaXBwbGUuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jYXJkL1ByaW1hcnlBY3Rpb24uc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvY2FyZC9NZWRpYS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vY2FyZC9fU2ltcGxlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9jYXJkL19BY3Rpb25zLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9jYXJkL19NZWRpYS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vY2FyZC9fTGlzdC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vY2FyZC9fQ29tcGxleC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vY2FyZC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG9cbiAqIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBzdXBwb3J0c0Nzc1ZhcnMgPVxuICAgICAgICBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cztcbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2dCwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICAgIGlmICghZXZ0KSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIHggPSBwYWdlT2Zmc2V0LngsIHkgPSBwYWdlT2Zmc2V0Lnk7XG4gICAgdmFyIGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gICAgdmFyIGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcbiAgICB2YXIgbm9ybWFsaXplZFg7XG4gICAgdmFyIG5vcm1hbGl6ZWRZO1xuICAgIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbW91c2VFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSBtb3VzZUV2ZW50LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IG1vdXNlRXZlbnQucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgICAgICAgICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgICAgICAgICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopID9cbiAgICAgICAgeyBwYXNzaXZlOiB0cnVlIH0gOlxuICAgICAgICBmYWxzZTtcbn1cbmZ1bmN0aW9uIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgLy8gU2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXJcbiAgICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBicm93c2VyXG4gICAgICAgICAgICAvLyBhdHRlbXB0cyB0byBhY2Nlc3MgdGhlIHBhc3NpdmUgcHJvcGVydHkuXG4gICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8qKlxuICogVXNlZCB0byBjb21wdXRlIHRoZSBlc3RpbWF0ZWQgc2Nyb2xsIHdpZHRoIG9mIGVsZW1lbnRzLiBXaGVuIGFuIGVsZW1lbnQgaXNcbiAqIGhpZGRlbiBkdWUgdG8gZGlzcGxheTogbm9uZTsgYmVpbmcgYXBwbGllZCB0byBhIHBhcmVudCBlbGVtZW50LCB0aGUgd2lkdGggaXNcbiAqIHJldHVybmVkIGFzIDAuIEhvd2V2ZXIsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhIHRydWUgd2lkdGggb25jZSBubyBsb25nZXJcbiAqIGluc2lkZSBhIGRpc3BsYXk6IG5vbmUgY29udGV4dC4gVGhpcyBtZXRob2QgY29tcHV0ZXMgYW4gZXN0aW1hdGVkIHdpZHRoIHdoZW5cbiAqIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBvciByZXR1cm5zIHRoZSB0cnVlIHdpZHRoIHdoZW4gdGhlIGVsZW1lbnQgaXMgdmlzYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IHdob3NlIHdpZHRoIHRvIGVzdGltYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZVNjcm9sbFdpZHRoKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayB0aGUgb2Zmc2V0UGFyZW50LiBJZiB0aGUgZWxlbWVudCBpbmhlcml0cyBkaXNwbGF5OiBub25lIGZyb20gYW55XG4gICAgLy8gcGFyZW50LCB0aGUgb2Zmc2V0UGFyZW50IHByb3BlcnR5IHdpbGwgYmUgbnVsbCAoc2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L29mZnNldFBhcmVudCkuXG4gICAgLy8gVGhpcyBjaGVjayBlbnN1cmVzIHdlIG9ubHkgY2xvbmUgdGhlIG5vZGUgd2hlbiBuZWNlc3NhcnkuXG4gICAgdmFyIGh0bWxFbCA9IGVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbC5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbC5zY3JvbGxXaWR0aDtcbiAgICB9XG4gICAgdmFyIGNsb25lID0gaHRtbEVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5OXB4LCAtOTk5OXB4KScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgdmFyIHNjcm9sbFdpZHRoID0gY2xvbmUuc2Nyb2xsV2lkdGg7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICByZXR1cm4gc2Nyb2xsV2lkdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIH0gZnJvbSAnLi91dGlsJztcbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG52YXIgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93bicsXG5dO1xuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG52YXIgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51Jyxcbl07XG4vLyBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG52YXIgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xudmFyIE1EQ1JpcHBsZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1JpcHBsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnU2NhbGVfID0gJzAnO1xuICAgICAgICBfdGhpcy5mcmFtZV8gPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbFNpemVfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMubWF4UmFkaXVzXyA9IDA7XG4gICAgICAgIF90aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0ZV8oZSk7IH07XG4gICAgICAgIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlYWN0aXZhdGVfKCk7IH07XG4gICAgICAgIF90aGlzLmZvY3VzSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5ibHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVCbHVyKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF5b3V0KCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMSA9IF9hLlJPT1QsIFVOQk9VTkRFRF8xID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKFJPT1RfMSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKFVOQk9VTkRFRF8xKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8yID0gX2EuUk9PVCwgVU5CT1VOREVEXzIgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoUk9PVF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKFVOQk9VTkRFRF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBldnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZV8oZXZ0KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVuYm91bmRlZCA9IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgdmFyIFVOQk9VTkRFRCA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VTkJPVU5ERUQ7XG4gICAgICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7IH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1ByZXNzUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlbW92ZUNzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmlwcGxlU3RyaW5ncyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyaXBwbGVTdHJpbmdzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShyaXBwbGVTdHJpbmdzW2tleV0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgICAgIHZhciBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGV2dCAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGV2dC50eXBlO1xuICAgICAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBldnQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGV2dDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZXZ0ICE9PSB1bmRlZmluZWQgJiYgKGV2dC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2dC50eXBlID09PSAncG9pbnRlcmRvd24nKTtcbiAgICAgICAgdmFyIGhhc0FjdGl2YXRlZENoaWxkID0gZXZ0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXIuY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpOyB9KTtcbiAgICAgICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZVxuICAgICAgICAgICAgICAgICYmIGV2dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgJiYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIChldnQgIT09IHVuZGVmaW5lZCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSA/XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuaXNTdXJmYWNlQWN0aXZlKCkgOlxuICAgICAgICAgICAgdHJ1ZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVBY3RpdmF0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX0VORDtcbiAgICAgICAgdmFyIF9iID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBGR19ERUFDVElWQVRJT04gPSBfYi5GR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT04gPSBfYi5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMgPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM7XG4gICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgICAgICB2YXIgdHJhbnNsYXRlRW5kID0gJyc7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpLCBzdGFydFBvaW50ID0gX2Muc3RhcnRQb2ludCwgZW5kUG9pbnQgPSBfYy5lbmRQb2ludDtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gc3RhcnRQb2ludC54ICsgXCJweCwgXCIgKyBzdGFydFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgICAgICB0cmFuc2xhdGVFbmQgPSBlbmRQb2ludC54ICsgXCJweCwgXCIgKyBlbmRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB0aGlzLmFkYXB0ZXIuY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCk7IH0sIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgYWN0aXZhdGlvbkV2ZW50ID0gX2EuYWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXI7XG4gICAgICAgIHZhciBzdGFydFBvaW50O1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGFjdGl2YXRpb25FdmVudCwgdGhpcy5hZGFwdGVyLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyLmNvbXB1dGVCb3VuZGluZ1JlY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBlbmRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRQb2ludDogc3RhcnRQb2ludCwgZW5kUG9pbnQ6IGVuZFBvaW50IH07XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgICAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICAgICAgdmFyIEZHX0RFQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT047XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSBfYS5oYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWQgPSBfYS5pc0FjdGl2YXRlZDtcbiAgICAgICAgdmFyIGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBGR19BQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT047XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlci5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZXNldEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgICAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQ7IH0sIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSBfX2Fzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlRGVhY3RpdmF0aW9uXyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF9hLndhc0VsZW1lbnRNYWRlQWN0aXZlO1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRJbnRlcm5hbF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdmFyIG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuICAgICAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgICAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICAgICAgdmFyIGdldEJvdW5kZWRSYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyhfdGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3coX3RoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG4gICAgICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgICAgIHZhciBpbml0aWFsU2l6ZSA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBzaXplIHNob3VsZCBhbHdheXMgYmUgZXZlbiBudW1iZXIgdG8gZXF1YWxseSBjZW50ZXIgYWxpZ24uXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSAmJiBpbml0aWFsU2l6ZSAlIDIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gaW5pdGlhbFNpemUgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBpbml0aWFsU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZnU2NhbGVfID0gXCJcIiArIHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVMYXlvdXRDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfU0laRSA9IF9hLlZBUl9GR19TSVpFLCBWQVJfTEVGVCA9IF9hLlZBUl9MRUZULCBWQVJfVE9QID0gX2EuVkFSX1RPUCwgVkFSX0ZHX1NDQUxFID0gX2EuVkFSX0ZHX1NDQUxFO1xuICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIHRoaXMuaW5pdGlhbFNpemVfICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCB0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uLCB1dGlsIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZSc7XG5pbXBvcnQgeyBldmVudHMsIHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbSc7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbmNvbnN0IHsgYXBwbHlQYXNzaXZlIH0gPSBldmVudHM7XG5jb25zdCB7IG1hdGNoZXMgfSA9IHBvbnlmaWxsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSaXBwbGUoXG4gIG5vZGUsXG4gIHtcbiAgICByaXBwbGUgPSB0cnVlLFxuICAgIHN1cmZhY2UgPSBmYWxzZSxcbiAgICB1bmJvdW5kZWQgPSBmYWxzZSxcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIGNvbG9yID0gbnVsbCxcbiAgICBhY3RpdmUgPSBudWxsLFxuICAgIGV2ZW50VGFyZ2V0ID0gbnVsbCxcbiAgICBhY3RpdmVUYXJnZXQgPSBudWxsLFxuICAgIGFkZENsYXNzID0gKGNsYXNzTmFtZSkgPT4gbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgcmVtb3ZlQ2xhc3MgPSAoY2xhc3NOYW1lKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICBhZGRTdHlsZSA9IChuYW1lLCB2YWx1ZSkgPT4gbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSksXG4gICAgaW5pdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKSxcbiAgfSA9IHt9XG4pIHtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgYWRkTGF5b3V0TGlzdGVuZXIgPSBnZXRDb250ZXh0KCdTTVVJOmFkZExheW91dExpc3RlbmVyJyk7XG4gIGxldCByZW1vdmVMYXlvdXRMaXN0ZW5lcjtcbiAgbGV0IG9sZEFjdGl2ZSA9IGFjdGl2ZTtcbiAgbGV0IG9sZEV2ZW50VGFyZ2V0ID0gZXZlbnRUYXJnZXQ7XG4gIGxldCBvbGRBY3RpdmVUYXJnZXQgPSBhY3RpdmVUYXJnZXQ7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJvcHMoKSB7XG4gICAgaWYgKHN1cmZhY2UpIHtcbiAgICAgIGFkZENsYXNzKCdtZGMtcmlwcGxlLXN1cmZhY2UnKTtcbiAgICAgIGlmIChjb2xvciA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICAgIGFkZENsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH0gZWxzZSBpZiAoY29sb3IgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIGFkZENsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYWN0aXZhdGlvbiBmaXJzdC5cbiAgICBpZiAoaW5zdGFuY2UgJiYgb2xkQWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgIG9sZEFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlbiBjcmVhdGUvZGVzdHJveSBhbiBpbnN0YW5jZS5cbiAgICBpZiAocmlwcGxlICYmICFpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTURDUmlwcGxlRm91bmRhdGlvbih7XG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IG5vZGUuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAoZXZlbnRUYXJnZXQgfHwgbm9kZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe1xuICAgICAgICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIH0pLFxuICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+XG4gICAgICAgICAgYWN0aXZlID09IG51bGwgPyBtYXRjaGVzKGFjdGl2ZVRhcmdldCB8fCBub2RlLCAnOmFjdGl2ZScpIDogYWN0aXZlLFxuICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gISFkaXNhYmxlZCxcbiAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+ICEhdW5ib3VuZGVkLFxuICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgKGV2ZW50VGFyZ2V0IHx8IG5vZGUpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgKSxcbiAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogYWRkU3R5bGUsXG4gICAgICB9KTtcblxuICAgICAgaW5pdFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmluaXQoKTtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VW5ib3VuZGVkKHVuYm91bmRlZCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGluc3RhbmNlICYmICFyaXBwbGUpIHtcbiAgICAgIGluaXRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIGluc3RhbmNlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE5vdyBoYW5kbGUgZXZlbnQvYWN0aXZlIHRhcmdldHNcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZSAmJlxuICAgICAgKG9sZEV2ZW50VGFyZ2V0ICE9PSBldmVudFRhcmdldCB8fCBvbGRBY3RpdmVUYXJnZXQgIT09IGFjdGl2ZVRhcmdldClcbiAgICApIHtcbiAgICAgIG9sZEV2ZW50VGFyZ2V0ID0gZXZlbnRUYXJnZXQ7XG4gICAgICBvbGRBY3RpdmVUYXJnZXQgPSBhY3RpdmVUYXJnZXQ7XG5cbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLmluaXQoKTtcbiAgICAgICAgICBpbnN0YW5jZS5zZXRVbmJvdW5kZWQodW5ib3VuZGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyaXBwbGUgJiYgdW5ib3VuZGVkKSB7XG4gICAgICBhZGRDbGFzcygnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUHJvcHMoKTtcblxuICBpZiAoYWRkTGF5b3V0TGlzdGVuZXIpIHtcbiAgICByZW1vdmVMYXlvdXRMaXN0ZW5lciA9IGFkZExheW91dExpc3RlbmVyKGxheW91dCk7XG4gIH1cblxuICBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5sYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShwcm9wcykge1xuICAgICAgKHtcbiAgICAgICAgcmlwcGxlLFxuICAgICAgICBzdXJmYWNlLFxuICAgICAgICB1bmJvdW5kZWQsXG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgYWN0aXZlVGFyZ2V0LFxuICAgICAgICBhZGRDbGFzcyxcbiAgICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICAgIGFkZFN0eWxlLFxuICAgICAgICBpbml0UHJvbWlzZSxcbiAgICAgIH0gPSB7XG4gICAgICAgIHJpcHBsZTogdHJ1ZSxcbiAgICAgICAgc3VyZmFjZTogZmFsc2UsXG4gICAgICAgIHVuYm91bmRlZDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgY29sb3I6IG51bGwsXG4gICAgICAgIGFjdGl2ZTogbnVsbCxcbiAgICAgICAgZXZlbnRUYXJnZXQ6IG51bGwsXG4gICAgICAgIGFjdGl2ZVRhcmdldDogbnVsbCxcbiAgICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICAgIGFkZFN0eWxlOiAobmFtZSwgdmFsdWUpID0+IG5vZGUuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUpLFxuICAgICAgICBpbml0UHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKCksXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgfSk7XG4gICAgICBoYW5kbGVQcm9wcygpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICByZW1vdmVDbGFzcygnbWRjLXJpcHBsZS1zdXJmYWNlJyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbW92ZUxheW91dExpc3RlbmVyKSB7XG4gICAgICAgIHJlbW92ZUxheW91dExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsIjxkaXZcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB1c2U6UmlwcGxlPXt7XG4gICAgcmlwcGxlLFxuICAgIHVuYm91bmRlZDogZmFsc2UsXG4gICAgY29sb3IsXG4gICAgYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgYWRkU3R5bGUsXG4gIH19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1jYXJkX19wcmltYXJ5LWFjdGlvbic6IHRydWUsXG4gICAgJ3NtdWktY2FyZF9fcHJpbWFyeS1hY3Rpb24tLXBhZGRlZCc6IHBhZGRlZCxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBzdHlsZT17T2JqZWN0LmVudHJpZXMoaW50ZXJuYWxTdHlsZXMpXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgLmNvbmNhdChbc3R5bGVdKVxuICAgIC5qb2luKCcgJyl9XG4gIHt0YWJpbmRleH1cbiAgey4uLiQkcmVzdFByb3BzfVxuPlxuICA8c2xvdCAvPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgUmlwcGxlIGZyb20gJ0BzbXVpL3JpcHBsZSc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IHN0eWxlID0gJyc7XG4gIGV4cG9ydCBsZXQgcmlwcGxlID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBjb2xvciA9IG51bGw7XG4gIGV4cG9ydCBsZXQgcGFkZGVkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgdGFiaW5kZXggPSAnMCc7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnRlcm5hbENsYXNzZXMgPSB7fTtcbiAgbGV0IGludGVybmFsU3R5bGVzID0ge307XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGludGVybmFsU3R5bGVzW25hbWVdO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcyA9IGludGVybmFsU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWNhcmRfX21lZGlhJzogdHJ1ZSxcbiAgICAnbWRjLWNhcmRfX21lZGlhLS1zcXVhcmUnOiBhc3BlY3RSYXRpbyA9PT0gJ3NxdWFyZScsXG4gICAgJ21kYy1jYXJkX19tZWRpYS0tMTYtOSc6IGFzcGVjdFJhdGlvID09PSAnMTZ4OScsXG4gIH0pfVxuICB7Li4uJCRyZXN0UHJvcHN9XG4+XG4gIDxzbG90IC8+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICB1c2VBY3Rpb25zLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IGFzcGVjdFJhdGlvID0gbnVsbDtcblxuICBsZXQgZWxlbWVudDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZC1kaXNwbGF5XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgIDxDYXJkIHBhZGRlZD5BIHNpbXBsZSBwYWRkZWQgY2FyZC48L0NhcmQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgIDxDYXJkPlxuICAgICAgPENvbnRlbnQ+WW91IGNhbiBhbHNvIHVzZSA8Y29kZT5Db250ZW50PC9jb2RlPi48L0NvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICA8Q2FyZCB2YXJpYW50PVwib3V0bGluZWRcIiBwYWRkZWQ+QW4gb3V0bGluZWQsIHBhZGRlZCBjYXJkLjwvQ2FyZD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHByZSBjbGFzcz1cInN0YXR1c1wiPkNsaWNrZWQ6IHtjbGlja2VkfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2FyZCwgeyBDb250ZW50IH0gZnJvbSAnQHNtdWkvY2FyZCc7XG5cbiAgbGV0IGNsaWNrZWQgPSAwO1xuPC9zY3JpcHQ+XG4iLCI8ZGl2IGNsYXNzPVwiY2FyZC1kaXNwbGF5XCI+XG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgIDxDYXJkPlxuICAgICAgPFByaW1hcnlBY3Rpb24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30gcGFkZGVkPlxuICAgICAgICBQcmltYXJ5IEFjdGlvbiwgYSBjbGlja2FibGUgYXJlYSBvZiB0aGUgY2FyZC5cbiAgICAgIDwvUHJpbWFyeUFjdGlvbj5cbiAgICA8L0NhcmQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgIDxDYXJkPlxuICAgICAgPENvbnRlbnQ+QSBjYXJkIHdpdGggYWN0aW9uIGJ1dHRvbnMuPC9Db250ZW50PlxuICAgICAgPEFjdGlvbnM+XG4gICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XG4gICAgICAgICAgPExhYmVsPkFjdGlvbjwvTGFiZWw+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgIDxMYWJlbD5Bbm90aGVyPC9MYWJlbD5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0FjdGlvbnM+XG4gICAgPC9DYXJkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICA8Q2FyZD5cbiAgICAgIDxDb250ZW50PkEgY2FyZCB3aXRoIGEgZnVsbC1ibGVlZCBhY3Rpb24uPC9Db250ZW50PlxuICAgICAgPEFjdGlvbnMgZnVsbEJsZWVkPlxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgIDxMYWJlbD5BY3Rpb248L0xhYmVsPlxuICAgICAgICAgIDxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5hcnJvd19mb3J3YXJkPC9pPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgIDxDYXJkPlxuICAgICAgPENvbnRlbnQ+QSBjYXJkIHdpdGggYWN0aW9uIGljb25zLjwvQ29udGVudD5cbiAgICAgIDxBY3Rpb25zPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XG4gICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZCB0byBmYXZvcml0ZXNcIlxuICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIGZhdm9yaXRlc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgb24+ZmF2b3JpdGU8L0ljb24+XG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlX2JvcmRlcjwvSWNvbj5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XG4gICAgICAgICAgdGl0bGU9XCJTaGFyZVwiPnNoYXJlPC9JY29uQnV0dG9uXG4gICAgICAgID5cbiAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxuICAgICAgICAgIHRpdGxlPVwiTW9yZSBvcHRpb25zXCI+bW9yZV92ZXJ0PC9JY29uQnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgIDxDYXJkPlxuICAgICAgPENvbnRlbnQ+QSBjYXJkIHdpdGggQm90aC48L0NvbnRlbnQ+XG4gICAgICA8QWN0aW9ucz5cbiAgICAgICAgPEFjdGlvbkJ1dHRvbnM+XG4gICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgICAgIDxMYWJlbD5BY3Rpb248L0xhYmVsPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XG4gICAgICAgICAgICA8TGFiZWw+QW5vdGhlcjwvTGFiZWw+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQWN0aW9uQnV0dG9ucz5cbiAgICAgICAgPEFjdGlvbkljb25zPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxuICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiQWRkIHRvIGZhdm9yaXRlc1wiXG4gICAgICAgICAgICB0aXRsZT1cIkFkZCB0byBmYXZvcml0ZXNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBvbj5mYXZvcml0ZTwvSWNvbj5cbiAgICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5mYXZvcml0ZV9ib3JkZXI8L0ljb24+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XG4gICAgICAgICAgICB0aXRsZT1cIlNoYXJlXCI+c2hhcmU8L0ljb25CdXR0b25cbiAgICAgICAgICA+XG4gICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIlxuICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK31cbiAgICAgICAgICAgIHRpdGxlPVwiTW9yZSBvcHRpb25zXCI+bW9yZV92ZXJ0PC9JY29uQnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICA8L0FjdGlvbkljb25zPlxuICAgICAgPC9BY3Rpb25zPlxuICAgIDwvQ2FyZD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHByZSBjbGFzcz1cInN0YXR1c1wiPkNsaWNrZWQ6IHtjbGlja2VkfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2FyZCwge1xuICAgIENvbnRlbnQsXG4gICAgUHJpbWFyeUFjdGlvbixcbiAgICBBY3Rpb25zLFxuICAgIEFjdGlvbkJ1dHRvbnMsXG4gICAgQWN0aW9uSWNvbnMsXG4gIH0gZnJvbSAnQHNtdWkvY2FyZCc7XG4gIGltcG9ydCBCdXR0b24sIHsgTGFiZWwgfSBmcm9tICdAc211aS9idXR0b24nO1xuICBpbXBvcnQgSWNvbkJ1dHRvbiwgeyBJY29uIH0gZnJvbSAnQHNtdWkvaWNvbi1idXR0b24nO1xuXG4gIGxldCBjbGlja2VkID0gMDtcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cImNhcmQtZGlzcGxheVwiPlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICA8Q2FyZD5cbiAgICAgIDxNZWRpYSBjbGFzcz1cImNhcmQtbWVkaWEtMTZ4OVwiIGFzcGVjdFJhdGlvPVwiMTZ4OVwiPlxuICAgICAgICA8TWVkaWFDb250ZW50PlxuICAgICAgICAgIDxoMlxuICAgICAgICAgICAgY2xhc3M9XCJtZGMtdHlwb2dyYXBoeS0taGVhZGxpbmU2XCJcbiAgICAgICAgICAgIHN0eWxlPVwiY29sb3I6ICNmZmY7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgYm90dG9tOiAxNnB4OyBsZWZ0OiAxNnB4OyBtYXJnaW46IDA7XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBIGNhcmQgd2l0aCAxNng5IG1lZGlhLlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvTWVkaWFDb250ZW50PlxuICAgICAgPC9NZWRpYT5cbiAgICAgIDxDb250ZW50IHN0eWxlPVwiY29sb3I6ICM4ODg7XCI+SGVyZSdzIHNvbWUgZ3JheSB0ZXh0IGRvd24gaGVyZS48L0NvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICA8Q2FyZCBzdHlsZT1cIm1pbi13aWR0aDogMzAwcHg7XCI+XG4gICAgICA8TWVkaWEgY2xhc3M9XCJjYXJkLW1lZGlhLXNxdWFyZVwiIGFzcGVjdFJhdGlvPVwic3F1YXJlXCI+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogI2ZmZjsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDE2cHg7IGxlZnQ6IDE2cHg7XCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWhlYWRsaW5lNlwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxuICAgICAgICAgICAgQSBjYXJkIHdpdGggc3F1YXJlIG1lZGlhLlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLXN1YnRpdGxlMlwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxuICAgICAgICAgICAgQW5kIGEgc3VidGl0bGUuXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01lZGlhPlxuICAgIDwvQ2FyZD5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgPENhcmQ+XG4gICAgICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMXJlbTtcIj5cbiAgICAgICAgPGgyIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWhlYWRsaW5lNlwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxuICAgICAgICAgIEEgY2FyZCB3aXRoIG1lZGlhLlxuICAgICAgICA8L2gyPlxuICAgICAgICA8aDMgY2xhc3M9XCJtZGMtdHlwb2dyYXBoeS0tc3VidGl0bGUyXCIgc3R5bGU9XCJtYXJnaW46IDA7IGNvbG9yOiAjODg4O1wiPlxuICAgICAgICAgIEFuZCBhIHN1YnRpdGxlLlxuICAgICAgICA8L2gzPlxuICAgICAgPC9kaXY+XG4gICAgICA8UHJpbWFyeUFjdGlvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgPE1lZGlhIGNsYXNzPVwiY2FyZC1tZWRpYS0xNng5XCIgYXNwZWN0UmF0aW89XCIxNng5XCIgLz5cbiAgICAgICAgPENvbnRlbnQgY2xhc3M9XCJtZGMtdHlwb2dyYXBoeS0tYm9keTJcIj5cbiAgICAgICAgICBBbmQgc29tZSBpbmZvIHRleHQuIEFuZCB0aGUgbWVkaWEgYW5kIGluZm8gdGV4dCBhcmUgYSBwcmltYXJ5IGFjdGlvblxuICAgICAgICAgIGZvciB0aGUgY2FyZC5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9QcmltYXJ5QWN0aW9uPlxuICAgIDwvQ2FyZD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHByZSBjbGFzcz1cInN0YXR1c1wiPkNsaWNrZWQ6IHtjbGlja2VkfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2FyZCwge1xuICAgIENvbnRlbnQsXG4gICAgUHJpbWFyeUFjdGlvbixcbiAgICBNZWRpYSxcbiAgICBNZWRpYUNvbnRlbnQsXG4gIH0gZnJvbSAnQHNtdWkvY2FyZCc7XG5cbiAgbGV0IGNsaWNrZWQgPSAwO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgKiA6Z2xvYmFsKC5jYXJkLW1lZGlhLTE2eDkpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wbGFjZS1ob2xkLml0LzMyMHgxODA/dGV4dD0xNng5JmZvbnRzaXplPTIzKTtcbiAgfVxuXG4gICogOmdsb2JhbCguY2FyZC1tZWRpYS1zcXVhcmUpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wbGFjZS1ob2xkLml0LzMyMHgzMjA/dGV4dD1zcXVhcmUmZm9udHNpemU9MjMpO1xuICB9XG48L3N0eWxlPlxuIiwiPGRpdiBjbGFzcz1cImNhcmQtZGlzcGxheVwiPlxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250YWluZXJcIj5cbiAgICA8Q2FyZD5cbiAgICAgIDxDb250ZW50IGNvbXBvbmVudD17TGlzdH0+XG4gICAgICAgIDxJdGVtIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgIDxUZXh0PkEgY2FyZCB3aXRoIGEgbGlzdCBhcyBjb250ZW50LjwvVGV4dD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICB7I2VhY2ggWy4uLkFycmF5KDUpXS5tYXAoKHYsIGkpID0+IGkgKyAxKSBhcyBpdGVtfVxuICAgICAgICAgIDxJdGVtIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgICAgPFRleHQ+SXRlbSAje2l0ZW19PC9UZXh0PlxuICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgey9lYWNofVxuICAgICAgPC9Db250ZW50PlxuICAgIDwvQ2FyZD5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHByZSBjbGFzcz1cInN0YXR1c1wiPkNsaWNrZWQ6IHtjbGlja2VkfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2FyZCwgeyBDb250ZW50IH0gZnJvbSAnQHNtdWkvY2FyZCc7XG4gIGltcG9ydCBMaXN0LCB7IEl0ZW0sIFRleHQgfSBmcm9tICdAc211aS9saXN0JztcblxuICBsZXQgY2xpY2tlZCA9IDA7XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJjYXJkLWRpc3BsYXlcIj5cbiAgPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgPENhcmQ+XG4gICAgICA8UHJpbWFyeUFjdGlvbiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfT5cbiAgICAgICAgPE1lZGlhIGNsYXNzPVwiY2FyZC1tZWRpYS0xNng5XCIgYXNwZWN0UmF0aW89XCIxNng5XCI+XG4gICAgICAgICAgPE1lZGlhQ29udGVudD5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9XCJjb2xvcjogI2ZmZjsgcG9zaXRpb246IGFic29sdXRlOyBib3R0b206IDE2cHg7IGxlZnQ6IDE2cHg7XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWhlYWRsaW5lNlwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxuICAgICAgICAgICAgICAgIEEgY2FyZCB3aXRoIG1lZGlhLlxuICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJtZGMtdHlwb2dyYXBoeS0tc3VidGl0bGUyXCIgc3R5bGU9XCJtYXJnaW46IDA7XCI+XG4gICAgICAgICAgICAgICAgQW5kIGEgc3VidGl0bGUuXG4gICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01lZGlhQ29udGVudD5cbiAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgPENvbnRlbnQgY2xhc3M9XCJtZGMtdHlwb2dyYXBoeS0tYm9keTJcIj5cbiAgICAgICAgICBJdCdzIGFsbCBpbiB0aGlzIGNhcmQuIEl0J3MgYSB2ZXJpdGFibGUgc21vcmdhc2JvcmQgb2YgY2FyZCBmZWF0dXJlcy5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9QcmltYXJ5QWN0aW9uPlxuICAgICAgPEFjdGlvbnM+XG4gICAgICAgIDxBY3Rpb25CdXR0b25zPlxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XG4gICAgICAgICAgICA8TGFiZWw+QWN0aW9uPC9MYWJlbD5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgICAgPExhYmVsPkFub3RoZXI8L0xhYmVsPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0FjdGlvbkJ1dHRvbnM+XG4gICAgICAgIDxBY3Rpb25JY29ucz5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK31cbiAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZCB0byBmYXZvcml0ZXNcIlxuICAgICAgICAgICAgdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgb24+ZmF2b3JpdGU8L0ljb24+XG4gICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGVfYm9yZGVyPC9JY29uPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxuICAgICAgICAgICAgdGl0bGU9XCJTaGFyZVwiPnNoYXJlPC9JY29uQnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XG4gICAgICAgICAgICB0aXRsZT1cIk1vcmUgb3B0aW9uc1wiPm1vcmVfdmVydDwvSWNvbkJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9BY3Rpb25JY29ucz5cbiAgICAgIDwvQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiPlxuICAgIDxDYXJkPlxuICAgICAgPFByaW1hcnlBY3Rpb24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XG4gICAgICAgIDxNZWRpYSBjbGFzcz1cImNhcmQtbWVkaWEtMTZ4OVwiIGFzcGVjdFJhdGlvPVwiMTZ4OVwiIC8+XG4gICAgICAgIDxDb250ZW50IGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWJvZHkyXCI+XG4gICAgICAgICAgPGgyIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLWhlYWRsaW5lNlwiIHN0eWxlPVwibWFyZ2luOiAwO1wiPlxuICAgICAgICAgICAgQSBjYXJkIHdpdGggbWVkaWEuXG4gICAgICAgICAgPC9oMj5cbiAgICAgICAgICA8aDNcbiAgICAgICAgICAgIGNsYXNzPVwibWRjLXR5cG9ncmFwaHktLXN1YnRpdGxlMlwiXG4gICAgICAgICAgICBzdHlsZT1cIm1hcmdpbjogMCAwIDEwcHg7IGNvbG9yOiAjODg4O1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQW5kIGEgc3VidGl0bGUuXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICBJdCdzIGFsbCBpbiB0aGlzIGNhcmQuIEl0J3MgYSB2ZXJpdGFibGUgc21vcmdhc2JvcmQgb2YgY2FyZCBmZWF0dXJlcy5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9QcmltYXJ5QWN0aW9uPlxuICAgICAgPEFjdGlvbnM+XG4gICAgICAgIDxBY3Rpb25CdXR0b25zPlxuICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK30+XG4gICAgICAgICAgICA8TGFiZWw+QWN0aW9uPC9MYWJlbD5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9PlxuICAgICAgICAgICAgPExhYmVsPkFub3RoZXI8L0xhYmVsPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0FjdGlvbkJ1dHRvbnM+XG4gICAgICAgIDxBY3Rpb25JY29ucz5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgb246Y2xpY2s9eygpID0+IGNsaWNrZWQrK31cbiAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkFkZCB0byBmYXZvcml0ZXNcIlxuICAgICAgICAgICAgdGl0bGU9XCJBZGQgdG8gZmF2b3JpdGVzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgb24+ZmF2b3JpdGU8L0ljb24+XG4gICAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGVfYm9yZGVyPC9JY29uPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiXG4gICAgICAgICAgICBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfVxuICAgICAgICAgICAgdGl0bGU9XCJTaGFyZVwiPnNoYXJlPC9JY29uQnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XG4gICAgICAgICAgICB0aXRsZT1cIk1vcmUgb3B0aW9uc1wiPm1vcmVfdmVydDwvSWNvbkJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9BY3Rpb25JY29ucz5cbiAgICAgIDwvQWN0aW9ucz5cbiAgICA8L0NhcmQ+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZH08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IENhcmQsIHtcbiAgICBDb250ZW50LFxuICAgIFByaW1hcnlBY3Rpb24sXG4gICAgTWVkaWEsXG4gICAgTWVkaWFDb250ZW50LFxuICAgIEFjdGlvbnMsXG4gICAgQWN0aW9uQnV0dG9ucyxcbiAgICBBY3Rpb25JY29ucyxcbiAgfSBmcm9tICdAc211aS9jYXJkJztcbiAgaW1wb3J0IEJ1dHRvbiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL2J1dHRvbic7XG4gIGltcG9ydCBJY29uQnV0dG9uLCB7IEljb24gfSBmcm9tICdAc211aS9pY29uLWJ1dHRvbic7XG5cbiAgbGV0IGNsaWNrZWQgPSAwO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgKiA6Z2xvYmFsKC5jYXJkLW1lZGlhLTE2eDkpIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wbGFjZS1ob2xkLml0LzMyMHgxODA/dGV4dD0xNng5JmZvbnRzaXplPTIzKTtcbiAgfVxuPC9zdHlsZT5cbiIsIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkNhcmRzIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPkNhcmRzPC9oMj5cblxuICA8cHJlIGNsYXNzPVwiZGVtby1zcGFjZWRcIj5ucG0gaSAtRCBAc211aS9jYXJkPC9wcmU+XG5cbiAgPERlbW8gY29tcG9uZW50PXtTaW1wbGV9IGZpbGU9XCJjYXJkL19TaW1wbGUuc3ZlbHRlXCIgLz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0FjdGlvbnN9IGZpbGU9XCJjYXJkL19BY3Rpb25zLnN2ZWx0ZVwiPldpdGggQWN0aW9uczwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e01lZGlhfSBmaWxlPVwiY2FyZC9fTWVkaWEuc3ZlbHRlXCI+V2l0aCBNZWRpYTwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0xpc3R9IGZpbGU9XCJjYXJkL19MaXN0LnN2ZWx0ZVwiPldpdGggYSBMaXN0PC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17Q29tcGxleH0gZmlsZT1cImNhcmQvX0NvbXBsZXguc3ZlbHRlXCI+Q29tcGxleDwvRGVtbz5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZW1vLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaW1wbGUgZnJvbSAnLi9fU2ltcGxlLnN2ZWx0ZSc7XG4gIGltcG9ydCBBY3Rpb25zIGZyb20gJy4vX0FjdGlvbnMuc3ZlbHRlJztcbiAgaW1wb3J0IE1lZGlhIGZyb20gJy4vX01lZGlhLnN2ZWx0ZSc7XG4gIGltcG9ydCBMaXN0IGZyb20gJy4vX0xpc3Quc3ZlbHRlJztcbiAgaW1wb3J0IENvbXBsZXggZnJvbSAnLi9fQ29tcGxleC5zdmVsdGUnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgKiA6Z2xvYmFsKC5jYXJkLWRpc3BsYXkpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIH1cblxuICAqIDpnbG9iYWwoLmNhcmQtY29udGFpbmVyKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMzgwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLWJhY2tncm91bmQsICNmOGY4ZjgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkXG4gICAgICB2YXIoLS1tZGMtdGhlbWUtdGV4dC1oaW50LW9uLWJhY2tncm91bmQsIHJnYmEoMCwgMCwgMCwgMC4xKSk7XG5cbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAqIDpnbG9iYWwoLmNhcmQtY29udGFpbmVyID4gKikge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG5cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgKiA6Z2xvYmFsKC5jYXJkLWNvbnRhaW5lcikge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiYXBwbHlQYXNzaXZlIiwibWF0Y2hlcyIsInV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJBY3Rpb25zIiwiTWVkaWEiLCJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxQkFBcUIsQ0FBQztBQUNuQixTQUFTLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUU7QUFDOUQsSUFBSSxJQUFJLFlBQVksS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFLFlBQVksR0FBRyxLQUFLLENBQUMsRUFBRTtBQUMxRCxJQUFJLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7QUFDNUIsSUFBSSxJQUFJLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQztBQUNoRCxJQUFJLElBQUksT0FBTyxxQkFBcUIsS0FBSyxTQUFTLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDckUsUUFBUSxPQUFPLHFCQUFxQixDQUFDO0FBQ3JDLEtBQUs7QUFDTCxJQUFJLElBQUksdUJBQXVCLEdBQUcsR0FBRyxJQUFJLE9BQU8sR0FBRyxDQUFDLFFBQVEsS0FBSyxVQUFVLENBQUM7QUFDNUUsSUFBSSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7QUFDbEMsUUFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixLQUFLO0FBQ0wsSUFBSSxJQUFJLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3RFO0FBQ0E7QUFDQSxJQUFJLElBQUksaUNBQWlDLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztBQUM5RSxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDNUMsSUFBSSxlQUFlO0FBQ25CLFFBQVEseUJBQXlCLElBQUksaUNBQWlDLENBQUM7QUFDdkUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3ZCLFFBQVEscUJBQXFCLEdBQUcsZUFBZSxDQUFDO0FBQ2hELEtBQUs7QUFDTCxJQUFJLE9BQU8sZUFBZSxDQUFDO0FBQzNCLENBQUM7QUFDTSxTQUFTLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO0FBQ3RFLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNkLFFBQVEsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQzlCLEtBQUs7QUFDTCxJQUFJLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDM0MsSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztBQUN4QyxJQUFJLElBQUksU0FBUyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDO0FBQ3ZDLElBQUksSUFBSSxXQUFXLENBQUM7QUFDcEIsSUFBSSxJQUFJLFdBQVcsQ0FBQztBQUNwQjtBQUNBLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtBQUNuQyxRQUFRLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQztBQUM3QixRQUFRLFdBQVcsR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDckUsUUFBUSxXQUFXLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3JFLEtBQUs7QUFDTCxTQUFTO0FBQ1QsUUFBUSxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDN0IsUUFBUSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDbkQsUUFBUSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDbkQsS0FBSztBQUNMLElBQUksT0FBTyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQzlDOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQUNEO0FBQ08sSUFBSSxRQUFRLEdBQUcsV0FBVztBQUNqQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyRCxRQUFRLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzdELFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixZQUFZLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pGLFNBQVM7QUFDVCxRQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ2pCLE1BQUs7QUFDTCxJQUFJLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0M7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLGtCQUFrQixZQUFZO0FBQy9DLElBQUksU0FBUyxhQUFhLENBQUMsT0FBTyxFQUFFO0FBQ3BDLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUU7QUFDakQsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUMvQixLQUFLO0FBQ0wsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUU7QUFDdkQsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUN6QjtBQUNBO0FBQ0EsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUU7QUFDcEQsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUN6QjtBQUNBO0FBQ0EsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUU7QUFDcEQsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUN6QjtBQUNBO0FBQ0EsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRTtBQUMzRCxRQUFRLEdBQUcsRUFBRSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsU0FBUztBQUNULFFBQVEsVUFBVSxFQUFFLEtBQUs7QUFDekIsUUFBUSxZQUFZLEVBQUUsSUFBSTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWTtBQUMvQztBQUNBLEtBQUssQ0FBQztBQUNOLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUNsRDtBQUNBLEtBQUssQ0FBQztBQUNOLElBQUksT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQyxFQUFFLENBQUM7O0FDdkVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQSxjQUFZLENBQUMsU0FBUyxFQUFFO0FBQ3hDLElBQUksSUFBSSxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUU7QUFDckQsSUFBSSxPQUFPLHFCQUFxQixDQUFDLFNBQVMsQ0FBQztBQUMzQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtBQUN6QixRQUFRLEtBQUssQ0FBQztBQUNkLENBQUM7QUFDRCxTQUFTLHFCQUFxQixDQUFDLFNBQVMsRUFBRTtBQUMxQyxJQUFJLElBQUksU0FBUyxLQUFLLEtBQUssQ0FBQyxFQUFFLEVBQUUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxFQUFFO0FBQ3JEO0FBQ0E7QUFDQSxJQUFJLElBQUksZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO0FBQ2pDLElBQUksSUFBSTtBQUNSLFFBQVEsSUFBSSxPQUFPLEdBQUc7QUFDdEI7QUFDQTtBQUNBLFlBQVksSUFBSSxPQUFPLEdBQUc7QUFDMUIsZ0JBQWdCLGdCQUFnQixHQUFHLElBQUksQ0FBQztBQUN4QyxnQkFBZ0IsT0FBTyxLQUFLLENBQUM7QUFDN0IsYUFBYTtBQUNiLFNBQVMsQ0FBQztBQUNWLFFBQVEsSUFBSSxPQUFPLEdBQUcsWUFBWSxHQUFHLENBQUM7QUFDdEMsUUFBUSxTQUFTLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdEUsUUFBUSxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekUsS0FBSztBQUNMLElBQUksT0FBTyxHQUFHLEVBQUU7QUFDaEIsUUFBUSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7QUFDakMsS0FBSztBQUNMLElBQUksT0FBTyxnQkFBZ0IsQ0FBQztBQUM1Qjs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQUMzQyxJQUFJLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUN6QixRQUFRLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6QyxLQUFLO0FBQ0wsSUFBSSxJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFDckIsSUFBSSxPQUFPLEVBQUUsRUFBRTtBQUNmLFFBQVEsSUFBSUMsU0FBTyxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRTtBQUNuQyxZQUFZLE9BQU8sRUFBRSxDQUFDO0FBQ3RCLFNBQVM7QUFDVCxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0FBQzlCLEtBQUs7QUFDTCxJQUFJLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFDTSxTQUFTQSxTQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQUMzQyxJQUFJLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQyxPQUFPO0FBQ3ZDLFdBQVcsT0FBTyxDQUFDLHFCQUFxQjtBQUN4QyxXQUFXLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztBQUNyQyxJQUFJLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDakQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDO0FBQ3pCLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtBQUN0QyxRQUFRLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUNsQyxLQUFLO0FBQ0wsSUFBSSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLDZCQUE2QixDQUFDLENBQUM7QUFDeEUsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxJQUFJLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7QUFDeEMsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRCxJQUFJLE9BQU8sV0FBVyxDQUFDO0FBQ3ZCOzs7Ozs7Ozs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFJLFVBQVUsR0FBRztBQUN4QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLFVBQVUsRUFBRSx5Q0FBeUM7QUFDekQsSUFBSSxhQUFhLEVBQUUsNENBQTRDO0FBQy9ELElBQUksZUFBZSxFQUFFLDhDQUE4QztBQUNuRSxJQUFJLElBQUksRUFBRSxxQkFBcUI7QUFDL0IsSUFBSSxTQUFTLEVBQUUsZ0NBQWdDO0FBQy9DLENBQUMsQ0FBQztBQUNLLElBQUksT0FBTyxHQUFHO0FBQ3JCLElBQUksWUFBWSxFQUFFLHVCQUF1QjtBQUN6QyxJQUFJLFdBQVcsRUFBRSxzQkFBc0I7QUFDdkMsSUFBSSxvQkFBb0IsRUFBRSwrQkFBK0I7QUFDekQsSUFBSSxzQkFBc0IsRUFBRSxpQ0FBaUM7QUFDN0QsSUFBSSxRQUFRLEVBQUUsbUJBQW1CO0FBQ2pDLElBQUksT0FBTyxFQUFFLGtCQUFrQjtBQUMvQixDQUFDLENBQUM7QUFDSyxJQUFJLE9BQU8sR0FBRztBQUNyQixJQUFJLHVCQUF1QixFQUFFLEdBQUc7QUFDaEMsSUFBSSxrQkFBa0IsRUFBRSxHQUFHO0FBQzNCLElBQUksb0JBQW9CLEVBQUUsR0FBRztBQUM3QixJQUFJLE9BQU8sRUFBRSxFQUFFO0FBQ2YsSUFBSSxZQUFZLEVBQUUsR0FBRztBQUNyQixDQUFDOztBQzlDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0EsSUFBSSxzQkFBc0IsR0FBRztBQUM3QixJQUFJLFlBQVksRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFNBQVM7QUFDdkQsQ0FBQyxDQUFDO0FBQ0Y7QUFDQSxJQUFJLGdDQUFnQyxHQUFHO0FBQ3ZDLElBQUksVUFBVSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsYUFBYTtBQUNyRCxDQUFDLENBQUM7QUFDRjtBQUNBLElBQUksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQzFCLElBQUksbUJBQW1CLGtCQUFrQixVQUFVLE1BQU0sRUFBRTtBQUMzRCxJQUFJLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzQyxJQUFJLFNBQVMsbUJBQW1CLENBQUMsT0FBTyxFQUFFO0FBQzFDLFFBQVEsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsY0FBYyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7QUFDbkgsUUFBUSxLQUFLLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDO0FBQ25ELFFBQVEsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUNuQyxRQUFRLEtBQUssQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUM7QUFDOUMsUUFBUSxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztBQUM3QixRQUFRLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUMvQyxRQUFRLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLFFBQVEsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDL0IsUUFBUSxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztBQUM3QixRQUFRLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQ3JELFFBQVEsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ2pFLFFBQVEsS0FBSyxDQUFDLHdCQUF3QixHQUFHLFlBQVk7QUFDckQsWUFBWSxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDO0FBQ3RELFlBQVksS0FBSyxDQUFDLDhCQUE4QixFQUFFLENBQUM7QUFDbkQsU0FBUyxDQUFDO0FBQ1YsUUFBUSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzdFLFFBQVEsS0FBSyxDQUFDLGtCQUFrQixHQUFHLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDL0UsUUFBUSxLQUFLLENBQUMsYUFBYSxHQUFHLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDMUUsUUFBUSxLQUFLLENBQUMsWUFBWSxHQUFHLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDeEUsUUFBUSxLQUFLLENBQUMsY0FBYyxHQUFHLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDdEUsUUFBUSxPQUFPLEtBQUssQ0FBQztBQUNyQixLQUFLO0FBQ0wsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLFlBQVksRUFBRTtBQUM3RCxRQUFRLEdBQUcsRUFBRSxZQUFZO0FBQ3pCLFlBQVksT0FBTyxVQUFVLENBQUM7QUFDOUIsU0FBUztBQUNULFFBQVEsVUFBVSxFQUFFLEtBQUs7QUFDekIsUUFBUSxZQUFZLEVBQUUsSUFBSTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUU7QUFDMUQsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUN6QixZQUFZLE9BQU8sT0FBTyxDQUFDO0FBQzNCLFNBQVM7QUFDVCxRQUFRLFVBQVUsRUFBRSxLQUFLO0FBQ3pCLFFBQVEsWUFBWSxFQUFFLElBQUk7QUFDMUIsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxFQUFFO0FBQzFELFFBQVEsR0FBRyxFQUFFLFlBQVk7QUFDekIsWUFBWSxPQUFPLE9BQU8sQ0FBQztBQUMzQixTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixFQUFFO0FBQ2pFLFFBQVEsR0FBRyxFQUFFLFlBQVk7QUFDekIsWUFBWSxPQUFPO0FBQ25CLGdCQUFnQixRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDM0QsZ0JBQWdCLHNCQUFzQixFQUFFLFlBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFO0FBQ3BFLGdCQUFnQixtQkFBbUIsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtBQUM1SCxnQkFBZ0IsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDakUsZ0JBQWdCLG9DQUFvQyxFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQ3ZGLGdCQUFnQiw0QkFBNEIsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUMvRSxnQkFBZ0IsdUJBQXVCLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDMUUsZ0JBQWdCLG1CQUFtQixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtBQUM3RSxnQkFBZ0IsZUFBZSxFQUFFLFlBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFO0FBQzdELGdCQUFnQixpQkFBaUIsRUFBRSxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRTtBQUMvRCxnQkFBZ0IsV0FBVyxFQUFFLFlBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFO0FBQ3pELGdCQUFnQixrQ0FBa0MsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUNyRixnQkFBZ0IsMEJBQTBCLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDN0UsZ0JBQWdCLHFCQUFxQixFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQ3hFLGdCQUFnQixXQUFXLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDOUQsZ0JBQWdCLGlCQUFpQixFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQ3BFLGFBQWEsQ0FBQztBQUNkLFNBQVM7QUFDVCxRQUFRLFVBQVUsRUFBRSxLQUFLO0FBQ3pCLFFBQVEsWUFBWSxFQUFFLElBQUk7QUFDMUIsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWTtBQUNyRCxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDOUQsUUFBUSxJQUFJLENBQUMscUJBQXFCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUN4RCxRQUFRLElBQUksbUJBQW1CLEVBQUU7QUFDakMsWUFBWSxJQUFJLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7QUFDbEcsWUFBWSxxQkFBcUIsQ0FBQyxZQUFZO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUMvQyxnQkFBZ0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFO0FBQ2pELG9CQUFvQixLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4RDtBQUNBLG9CQUFvQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDNUMsaUJBQWlCO0FBQ2pCLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxZQUFZO0FBQ3hELFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtBQUN6QyxZQUFZLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO0FBQ3ZDLGdCQUFnQixZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDcEQsZ0JBQWdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDMUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN2RixhQUFhO0FBQ2IsWUFBWSxJQUFJLElBQUksQ0FBQywyQkFBMkIsRUFBRTtBQUNsRCxnQkFBZ0IsWUFBWSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQy9ELGdCQUFnQixJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDekYsYUFBYTtBQUNiLFlBQVksSUFBSSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLFdBQVcsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDO0FBQ2xHLFlBQVkscUJBQXFCLENBQUMsWUFBWTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbEQsZ0JBQWdCLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3ZELGdCQUFnQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkMsYUFBYSxDQUFDLENBQUM7QUFDZixTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUN2QyxRQUFRLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO0FBQy9DLEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLFFBQVEsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUM1RCxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDM0QsUUFBUSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDM0IsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVk7QUFDdkQsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDL0IsWUFBWSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDcEQsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFlBQVksR0FBRyxxQkFBcUIsQ0FBQyxZQUFZO0FBQzlELFlBQVksS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ3BDLFlBQVksS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDbkMsU0FBUyxDQUFDLENBQUM7QUFDWCxLQUFLLENBQUM7QUFDTixJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsVUFBVSxTQUFTLEVBQUU7QUFDdEUsUUFBUSxJQUFJLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO0FBQ2pFLFFBQVEsSUFBSSxTQUFTLEVBQUU7QUFDdkIsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM3QyxTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDaEQsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxZQUFZO0FBQzVELFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEscUJBQXFCLENBQUMsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3pILEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxZQUFZO0FBQzNELFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEscUJBQXFCLENBQUMsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVILEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLG9CQUFvQixHQUFHLFlBQVk7QUFDckUsUUFBUSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUNyRCxLQUFLLENBQUM7QUFDTixJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsR0FBRyxZQUFZO0FBQ3hFLFFBQVEsT0FBTztBQUNmLFlBQVksZUFBZSxFQUFFLFNBQVM7QUFDdEMsWUFBWSxvQkFBb0IsRUFBRSxLQUFLO0FBQ3ZDLFlBQVksV0FBVyxFQUFFLEtBQUs7QUFDOUIsWUFBWSxjQUFjLEVBQUUsS0FBSztBQUNqQyxZQUFZLHFCQUFxQixFQUFFLEtBQUs7QUFDeEMsWUFBWSxvQkFBb0IsRUFBRSxLQUFLO0FBQ3ZDLFNBQVMsQ0FBQztBQUNWLEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLFVBQVUsbUJBQW1CLEVBQUU7QUFDekYsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLG1CQUFtQixFQUFFO0FBQ2pDLFlBQVksc0JBQXNCLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQzlELGdCQUFnQixLQUFLLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMxRixhQUFhLENBQUMsQ0FBQztBQUNmLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFO0FBQzVDLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN4RSxhQUFhO0FBQ2IsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzdFLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNFLEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLDZCQUE2QixHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQ2pGLFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtBQUNwQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3RGLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxnQ0FBZ0MsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDeEUsZ0JBQWdCLEtBQUssQ0FBQyxPQUFPLENBQUMsa0NBQWtDLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3BHLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLHVCQUF1QixHQUFHLFlBQVk7QUFDeEUsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDMUQsWUFBWSxLQUFLLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN4RixTQUFTLENBQUMsQ0FBQztBQUNYLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQy9FLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzdFLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFO0FBQ3hDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDdEUsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLCtCQUErQixHQUFHLFlBQVk7QUFDaEYsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNwRixRQUFRLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUNwRSxZQUFZLEtBQUssQ0FBQyxPQUFPLENBQUMsb0NBQW9DLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xHLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFlBQVk7QUFDL0QsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7QUFDeEQsUUFBUSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzlDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsRUFBRTtBQUNwQyxZQUFZLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDM0MsZ0JBQWdCLEtBQUssQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFFLGFBQWE7QUFDYixTQUFTLENBQUMsQ0FBQztBQUNYLEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUM3RCxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxFQUFFO0FBQzlDLFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7QUFDcEQsUUFBUSxJQUFJLGVBQWUsQ0FBQyxXQUFXLEVBQUU7QUFDekMsWUFBWSxPQUFPO0FBQ25CLFNBQVM7QUFDVDtBQUNBLFFBQVEsSUFBSSx1QkFBdUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUM7QUFDcEUsUUFBUSxJQUFJLGlCQUFpQixHQUFHLHVCQUF1QixJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksdUJBQXVCLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUM7QUFDMUgsUUFBUSxJQUFJLGlCQUFpQixFQUFFO0FBQy9CLFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxlQUFlLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUMzQyxRQUFRLGVBQWUsQ0FBQyxjQUFjLEdBQUcsR0FBRyxLQUFLLFNBQVMsQ0FBQztBQUMzRCxRQUFRLGVBQWUsQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDO0FBQzlDLFFBQVEsZUFBZSxDQUFDLHFCQUFxQixHQUFHLGVBQWUsQ0FBQyxjQUFjLEdBQUcsS0FBSyxHQUFHLEdBQUcsS0FBSyxTQUFTLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxhQUFhLENBQUMsQ0FBQztBQUNwTSxRQUFRLElBQUksaUJBQWlCLEdBQUcsR0FBRyxLQUFLLFNBQVM7QUFDakQsWUFBWSxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQztBQUN2QyxZQUFZLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLE1BQU0sRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzRyxRQUFRLElBQUksaUJBQWlCLEVBQUU7QUFDL0I7QUFDQSxZQUFZLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ3pDLFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxJQUFJLEdBQUcsS0FBSyxTQUFTLEVBQUU7QUFDL0IsWUFBWSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLFlBQVksSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BELFNBQVM7QUFDVCxRQUFRLGVBQWUsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakYsUUFBUSxJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRTtBQUNsRCxZQUFZLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQ3RDLFNBQVM7QUFDVCxRQUFRLHFCQUFxQixDQUFDLFlBQVk7QUFDMUM7QUFDQSxZQUFZLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztBQUNsQyxZQUFZLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CO0FBQ3JELG1CQUFtQixHQUFHLEtBQUssU0FBUztBQUNwQyxvQkFBb0IsR0FBRyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxRixnQkFBZ0IsSUFBSSxlQUFlLENBQUMsb0JBQW9CLEVBQUU7QUFDMUQsb0JBQW9CLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0FBQy9DLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2IsWUFBWSxJQUFJLENBQUMsZUFBZSxDQUFDLG9CQUFvQixFQUFFO0FBQ3ZEO0FBQ0EsZ0JBQWdCLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUN6RSxhQUFhO0FBQ2IsU0FBUyxDQUFDLENBQUM7QUFDWCxLQUFLLENBQUM7QUFDTixJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUMzRSxRQUFRLE9BQU8sQ0FBQyxHQUFHLEtBQUssU0FBUyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUztBQUMzRCxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFO0FBQzFDLFlBQVksSUFBSSxDQUFDO0FBQ2pCLEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLGtCQUFrQixHQUFHLFlBQVk7QUFDbkUsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixFQUFFLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztBQUNqSixRQUFRLElBQUksRUFBRSxHQUFHLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxlQUFlLEdBQUcsRUFBRSxDQUFDLGVBQWUsRUFBRSxhQUFhLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztBQUN4SCxRQUFRLElBQUksdUJBQXVCLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDO0FBQzFGLFFBQVEsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQy9CLFFBQVEsSUFBSSxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLFFBQVEsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBQzlCLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7QUFDekMsWUFBWSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxVQUFVLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztBQUM3RyxZQUFZLGNBQWMsR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUN6RSxZQUFZLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLE1BQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztBQUNuRSxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQy9FLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLENBQUMsQ0FBQztBQUMzRTtBQUNBLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVDLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0FBQ3ZELFFBQVEsSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7QUFDM0MsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNsRDtBQUNBLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQzNDLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0MsUUFBUSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLEVBQUUsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO0FBQzlILEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLDRCQUE0QixHQUFHLFlBQVk7QUFDN0UsUUFBUSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsZUFBZSxHQUFHLEVBQUUsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO0FBQy9ILFFBQVEsSUFBSSxVQUFVLENBQUM7QUFDdkIsUUFBUSxJQUFJLHFCQUFxQixFQUFFO0FBQ25DLFlBQVksVUFBVSxHQUFHLHdCQUF3QixDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7QUFDM0ksU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLFVBQVUsR0FBRztBQUN6QixnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUM7QUFDeEMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQ3pDLGFBQWEsQ0FBQztBQUNkLFNBQVM7QUFDVDtBQUNBLFFBQVEsVUFBVSxHQUFHO0FBQ3JCLFlBQVksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDckQsWUFBWSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUNyRCxTQUFTLENBQUM7QUFDVixRQUFRLElBQUksUUFBUSxHQUFHO0FBQ3ZCLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ2hFLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ2pFLFNBQVMsQ0FBQztBQUNWLFFBQVEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQzlELEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLDhCQUE4QixHQUFHLFlBQVk7QUFDL0UsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekI7QUFDQTtBQUNBLFFBQVEsSUFBSSxlQUFlLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztBQUM3RSxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsV0FBVyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7QUFDckgsUUFBUSxJQUFJLGtCQUFrQixHQUFHLG9CQUFvQixJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ3RFLFFBQVEsSUFBSSxrQkFBa0IsSUFBSSxJQUFJLENBQUMsNEJBQTRCLEVBQUU7QUFDckUsWUFBWSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztBQUMvQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ25ELFlBQVksSUFBSSxDQUFDLDJCQUEyQixHQUFHLFVBQVUsQ0FBQyxZQUFZO0FBQ3RFLGdCQUFnQixLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMzRCxhQUFhLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDM0MsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLDJCQUEyQixHQUFHLFlBQVk7QUFDNUUsUUFBUSxJQUFJLGFBQWEsR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0FBQ3pFLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDaEQsUUFBUSxJQUFJLENBQUMsNEJBQTRCLEdBQUcsS0FBSyxDQUFDO0FBQ2xELFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0FBQzNDLEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLHFCQUFxQixHQUFHLFlBQVk7QUFDdEUsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQztBQUM5RSxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztBQUMvRDtBQUNBO0FBQ0EsUUFBUSxVQUFVLENBQUMsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLHdCQUF3QixHQUFHLFNBQVMsQ0FBQyxFQUFFLEVBQUUsbUJBQW1CLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2pJLEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxZQUFZO0FBQzVELFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0FBQ3BEO0FBQ0EsUUFBUSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRTtBQUMxQyxZQUFZLE9BQU87QUFDbkIsU0FBUztBQUNULFFBQVEsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxlQUFlLENBQUMsQ0FBQztBQUNsRCxRQUFRLElBQUksZUFBZSxDQUFDLGNBQWMsRUFBRTtBQUM1QyxZQUFZLHFCQUFxQixDQUFDLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3RixZQUFZLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQ3pDLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztBQUNuRCxZQUFZLHFCQUFxQixDQUFDLFlBQVk7QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7QUFDbkUsZ0JBQWdCLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNsRCxnQkFBZ0IsS0FBSyxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDOUMsYUFBYSxDQUFDLENBQUM7QUFDZixTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsVUFBVSxFQUFFLEVBQUU7QUFDdkUsUUFBUSxJQUFJLHFCQUFxQixHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7QUFDN0csUUFBUSxJQUFJLHFCQUFxQixJQUFJLG9CQUFvQixFQUFFO0FBQzNELFlBQVksSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7QUFDbEQsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxZQUFZO0FBQ2hFLFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDekQsUUFBUSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFJLGdCQUFnQixHQUFHLFlBQVk7QUFDM0MsWUFBWSxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNHLFlBQVksT0FBTyxVQUFVLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztBQUNwRSxTQUFTLENBQUM7QUFDVixRQUFRLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsR0FBRyxNQUFNLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztBQUNuRjtBQUNBLFFBQVEsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDaEc7QUFDQSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxXQUFXLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNqRSxZQUFZLElBQUksQ0FBQyxZQUFZLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQztBQUNoRCxTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7QUFDNUMsU0FBUztBQUNULFFBQVEsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO0FBQ2pFLFFBQVEsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7QUFDcEMsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsWUFBWTtBQUNyRSxRQUFRLElBQUksRUFBRSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFZLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQztBQUN6SixRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDOUUsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEUsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7QUFDeEMsWUFBWSxJQUFJLENBQUMsZ0JBQWdCLEdBQUc7QUFDcEMsZ0JBQWdCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkYsZ0JBQWdCLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDbkYsYUFBYSxDQUFDO0FBQ2QsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3hGLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztBQUN0RixTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sSUFBSSxPQUFPLG1CQUFtQixDQUFDO0FBQy9CLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUM1Y2pCLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxNQUFNLENBQUM7QUFDaEMsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQztBQUM3QjtBQUNlLFNBQVMsTUFBTTtBQUM5QixFQUFFLElBQUk7QUFDTixFQUFFO0FBQ0YsSUFBSSxNQUFNLEdBQUcsSUFBSTtBQUNqQixJQUFJLE9BQU8sR0FBRyxLQUFLO0FBQ25CLElBQUksU0FBUyxHQUFHLEtBQUs7QUFDckIsSUFBSSxRQUFRLEdBQUcsS0FBSztBQUNwQixJQUFJLEtBQUssR0FBRyxJQUFJO0FBQ2hCLElBQUksTUFBTSxHQUFHLElBQUk7QUFDakIsSUFBSSxXQUFXLEdBQUcsSUFBSTtBQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJO0FBQ3ZCLElBQUksUUFBUSxHQUFHLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUMzRCxJQUFJLFdBQVcsR0FBRyxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDakUsSUFBSSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFDbkUsSUFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUNuQyxHQUFHLEdBQUcsRUFBRTtBQUNSLEVBQUU7QUFDRixFQUFFLElBQUksUUFBUSxDQUFDO0FBQ2YsRUFBRSxJQUFJLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQy9ELEVBQUUsSUFBSSxvQkFBb0IsQ0FBQztBQUMzQixFQUFFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN6QixFQUFFLElBQUksY0FBYyxHQUFHLFdBQVcsQ0FBQztBQUNuQyxFQUFFLElBQUksZUFBZSxHQUFHLFlBQVksQ0FBQztBQUNyQztBQUNBLEVBQUUsU0FBUyxXQUFXLEdBQUc7QUFDekIsSUFBSSxJQUFJLE9BQU8sRUFBRTtBQUNqQixNQUFNLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3JDLE1BQU0sSUFBSSxLQUFLLEtBQUssU0FBUyxFQUFFO0FBQy9CLFFBQVEsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDakQsUUFBUSxXQUFXLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUN0RCxPQUFPLE1BQU0sSUFBSSxLQUFLLEtBQUssV0FBVyxFQUFFO0FBQ3hDLFFBQVEsV0FBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDcEQsUUFBUSxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNuRCxPQUFPLE1BQU07QUFDYixRQUFRLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDdEQsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxJQUFJLFFBQVEsSUFBSSxTQUFTLEtBQUssTUFBTSxFQUFFO0FBQzFDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN6QixNQUFNLElBQUksTUFBTSxFQUFFO0FBQ2xCLFFBQVEsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzVCLE9BQU8sTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEVBQUU7QUFDbkMsUUFBUSxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDOUIsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSSxJQUFJLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUM3QixNQUFNLFFBQVEsR0FBRyxJQUFJLG1CQUFtQixDQUFDO0FBQ3pDLFFBQVEsUUFBUTtBQUNoQixRQUFRLHNCQUFzQixFQUFFLE1BQU1DLG9CQUF5QixDQUFDLE1BQU0sQ0FBQztBQUN2RSxRQUFRLG1CQUFtQixFQUFFLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixFQUFFO0FBQy9ELFFBQVEsbUJBQW1CLEVBQUUsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7QUFDOUQsUUFBUSxvQ0FBb0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPO0FBQy9ELFVBQVUsUUFBUSxDQUFDLGVBQWUsQ0FBQyxtQkFBbUI7QUFDdEQsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLFlBQVksRUFBRTtBQUMxQixXQUFXO0FBQ1gsUUFBUSw0QkFBNEIsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPO0FBQ3ZELFVBQVUsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFLG1CQUFtQjtBQUNuRCxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksWUFBWSxFQUFFO0FBQzFCLFdBQVc7QUFDWCxRQUFRLHVCQUF1QixFQUFFLENBQUMsT0FBTztBQUN6QyxVQUFVLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDO0FBQ3ZELFFBQVEsbUJBQW1CLEVBQUUsT0FBTztBQUNwQyxVQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsV0FBVztBQUMvQixVQUFVLENBQUMsRUFBRSxNQUFNLENBQUMsV0FBVztBQUMvQixTQUFTLENBQUM7QUFDVixRQUFRLGVBQWUsRUFBRTtBQUN6QixVQUFVLE1BQU0sSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsTUFBTTtBQUM1RSxRQUFRLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDLFFBQVE7QUFDM0MsUUFBUSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUztBQUN0QyxRQUFRLGtDQUFrQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU87QUFDN0QsVUFBVSxRQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQjtBQUNuRCxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksWUFBWSxFQUFFO0FBQzFCLFdBQVc7QUFDWCxRQUFRLDBCQUEwQixFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU87QUFDckQsVUFBVSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUUsZ0JBQWdCO0FBQ2hELFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxZQUFZLEVBQUU7QUFDMUIsV0FBVztBQUNYLFFBQVEscUJBQXFCLEVBQUUsQ0FBQyxPQUFPO0FBQ3ZDLFVBQVUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7QUFDcEQsUUFBUSxXQUFXO0FBQ25CLFFBQVEsaUJBQWlCLEVBQUUsUUFBUTtBQUNuQyxPQUFPLENBQUMsQ0FBQztBQUNUO0FBQ0EsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU07QUFDN0IsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDeEIsUUFBUSxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsS0FBSyxNQUFNLElBQUksUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3BDLE1BQU0sV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNO0FBQzdCLFFBQVEsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzNCLFFBQVEsUUFBUSxHQUFHLElBQUksQ0FBQztBQUN4QixPQUFPLENBQUMsQ0FBQztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0EsSUFBSTtBQUNKLE1BQU0sUUFBUTtBQUNkLE9BQU8sY0FBYyxLQUFLLFdBQVcsSUFBSSxlQUFlLEtBQUssWUFBWSxDQUFDO0FBQzFFLE1BQU07QUFDTixNQUFNLGNBQWMsR0FBRyxXQUFXLENBQUM7QUFDbkMsTUFBTSxlQUFlLEdBQUcsWUFBWSxDQUFDO0FBQ3JDO0FBQ0EsTUFBTSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDekIsTUFBTSxxQkFBcUIsQ0FBQyxNQUFNO0FBQ2xDLFFBQVEsSUFBSSxRQUFRLEVBQUU7QUFDdEIsVUFBVSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDMUIsVUFBVSxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzNDLFNBQVM7QUFDVCxPQUFPLENBQUMsQ0FBQztBQUNULEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7QUFDOUIsTUFBTSxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUNqRCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUNoQjtBQUNBLEVBQUUsSUFBSSxpQkFBaUIsRUFBRTtBQUN6QixJQUFJLG9CQUFvQixHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3JELEdBQUc7QUFDSDtBQUNBLEVBQUUsU0FBUyxNQUFNLEdBQUc7QUFDcEIsSUFBSSxJQUFJLFFBQVEsRUFBRTtBQUNsQixNQUFNLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN4QixLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPO0FBQ1QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ2xCLE1BQU0sQ0FBQztBQUNQLFFBQVEsTUFBTTtBQUNkLFFBQVEsT0FBTztBQUNmLFFBQVEsU0FBUztBQUNqQixRQUFRLFFBQVE7QUFDaEIsUUFBUSxLQUFLO0FBQ2IsUUFBUSxNQUFNO0FBQ2QsUUFBUSxXQUFXO0FBQ25CLFFBQVEsWUFBWTtBQUNwQixRQUFRLFFBQVE7QUFDaEIsUUFBUSxXQUFXO0FBQ25CLFFBQVEsUUFBUTtBQUNoQixRQUFRLFdBQVc7QUFDbkIsT0FBTyxHQUFHO0FBQ1YsUUFBUSxNQUFNLEVBQUUsSUFBSTtBQUNwQixRQUFRLE9BQU8sRUFBRSxLQUFLO0FBQ3RCLFFBQVEsU0FBUyxFQUFFLEtBQUs7QUFDeEIsUUFBUSxRQUFRLEVBQUUsS0FBSztBQUN2QixRQUFRLEtBQUssRUFBRSxJQUFJO0FBQ25CLFFBQVEsTUFBTSxFQUFFLElBQUk7QUFDcEIsUUFBUSxXQUFXLEVBQUUsSUFBSTtBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLFFBQVEsUUFBUSxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztBQUM5RCxRQUFRLFdBQVcsRUFBRSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDcEUsUUFBUSxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFDdEUsUUFBUSxXQUFXLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUN0QyxRQUFRLEdBQUcsS0FBSztBQUNoQixPQUFPLEVBQUU7QUFDVCxNQUFNLFdBQVcsRUFBRSxDQUFDO0FBQ3BCLEtBQUs7QUFDTDtBQUNBLElBQUksT0FBTyxHQUFHO0FBQ2QsTUFBTSxJQUFJLFFBQVEsRUFBRTtBQUNwQixRQUFRLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUMzQixRQUFRLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDeEIsUUFBUSxXQUFXLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMxQyxRQUFRLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3BELFFBQVEsV0FBVyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDdEQsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLG9CQUFvQixFQUFFO0FBQ2hDLFFBQVEsb0JBQW9CLEVBQUUsQ0FBQztBQUMvQixPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUcsQ0FBQztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQ3RMUyxRQUFRO21CQUNaLEdBQVMsTUFBRyxJQUFJO0lBQ2pCLDBCQUEwQixFQUFFLElBQUk7SUFDaEMsbUNBQW1DLGFBQUUsR0FBTTsyQkFDeEMsR0FBZTs7Ozs0QkFFYixNQUFNLENBQUMsT0FBTyxvQkFBQyxHQUFjLEtBQ2pDLEdBQUcsU0FDSCxNQUFNLFlBQUUsR0FBSyxNQUNiLElBQUksQ0FBQyxHQUFHOzs7a0JBRVAsR0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkVBckJDLEdBQUc7OztNQUdqQixNQUFNLGFBQU4sR0FBTTtNQUNOLFNBQVMsRUFBRSxLQUFLO01BQ2hCLEtBQUssWUFBTCxHQUFLO01BQ0wsUUFBUSxlQUFSLEdBQVE7TUFDUixXQUFXLGtCQUFYLEdBQVc7TUFDWCxRQUFRLGVBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7OzhHQUVILFFBQVE7b0JBQ1osR0FBUyxNQUFHLElBQUk7S0FDakIsMEJBQTBCLEVBQUUsSUFBSTtLQUNoQyxtQ0FBbUMsYUFBRSxHQUFNOzRCQUN4QyxHQUFlOztpR0FFYixNQUFNLENBQUMsT0FBTyxvQkFBQyxHQUFjLEtBQ2pDLEdBQUcsU0FDSCxNQUFNLFlBQUUsR0FBSyxNQUNiLElBQUksQ0FBQyxHQUFHOztxREFFUCxHQUFXOzs7b0lBckJDLEdBQUc7OztJQUdqQixNQUFNLGFBQU4sR0FBTTtJQUNOLFNBQVMsRUFBRSxLQUFLO0lBQ2hCLEtBQUssWUFBTCxHQUFLO0lBQ0wsUUFBUSxlQUFSLEdBQVE7SUFDUixXQUFXLGtCQUFYLEdBQVc7SUFDWCxRQUFRLGVBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBU0QsSUFBSSxFQUFFLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSzs7Ozs7OztPQWtCckMsYUFBYSxHQUFHLG9CQUFvQixDQUFDLHFCQUFxQjtPQUVyRCxHQUFHO2NBQ1YsU0FBUyxHQUFHLEVBQUU7T0FFUCxLQUFLLEdBQUcsRUFBRTtPQUNWLE1BQU0sR0FBRyxJQUFJO09BQ2IsS0FBSyxHQUFHLElBQUk7T0FDWixNQUFNLEdBQUcsS0FBSztPQUNkLFFBQVEsR0FBRyxHQUFHO0tBRXJCLE9BQU87S0FDUCxlQUFlO0tBQ2YsY0FBYzs7VUFFVCxRQUFRLENBQUMsU0FBUztPQUNwQixlQUFlLENBQUMsU0FBUzttQkFDNUIsZUFBZSxDQUFDLFNBQVMsSUFBSSxJQUFJOzs7O1VBSTVCLFdBQVcsQ0FBQyxTQUFTO1FBQ3RCLFNBQVMsSUFBSSxlQUFlLEtBQUssZUFBZSxDQUFDLFNBQVM7bUJBQzlELGVBQWUsQ0FBQyxTQUFTLElBQUksS0FBSzs7OztVQUk3QixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUs7TUFDdkIsY0FBYyxDQUFDLElBQUksS0FBSyxLQUFLO09BQzNCLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxJQUFJLElBQUk7V0FDeEIsY0FBYyxDQUFDLElBQUk7OztvQkFHMUIsY0FBYyxDQUFDLElBQUksSUFBSSxLQUFLOzs7OztVQUtsQixVQUFVO1NBQ2pCLE9BQU87Ozs7O0dBM0VMLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQ0dYLFFBQVE7bUJBQ1osR0FBUyxNQUFHLElBQUk7SUFDakIsaUJBQWlCLEVBQUUsSUFBSTtJQUN2Qix5QkFBeUIsa0JBQUUsR0FBVyxRQUFLLFFBQVE7SUFDbkQsdUJBQXVCLGtCQUFFLEdBQVcsUUFBSyxNQUFNOzs7a0JBRTdDLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZFQVJDLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztnR0FFWixRQUFRO29CQUNaLEdBQVMsTUFBRyxJQUFJO0tBQ2pCLGlCQUFpQixFQUFFLElBQUk7S0FDdkIseUJBQXlCLGtCQUFFLEdBQVcsUUFBSyxRQUFRO0tBQ25ELHVCQUF1QixrQkFBRSxHQUFXLFFBQUssTUFBTTs7a0RBRTdDLEdBQVc7OztvSUFSQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FxQmIsYUFBYSxHQUFHLG9CQUFvQixDQUFDLHFCQUFxQjtPQUVyRCxHQUFHO2NBQ1YsU0FBUyxHQUFHLEVBQUU7T0FFUCxXQUFXLEdBQUcsSUFBSTtLQUV6QixPQUFPOztVQUVLLFVBQVU7U0FDakIsT0FBTzs7Ozs7R0FoQ0wsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQ2VVLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FLL0IsT0FBTyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQytFYSxHQUFPOzs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFjQSxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7MENBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VFQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQVZILENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7O0tBZ0IxQyxPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs2Q0FuQmEsT0FBTzsrQ0FJTCxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkNvR1QsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VFQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWUvQixPQUFPLEdBQUcsQ0FBQzs7Ozs7Ozs2Q0F4SG9CLE9BQU87K0NBcUJWLE9BQU87K0NBR1AsT0FBTzsrQ0FNYixPQUFPOytDQVVQLE9BQU87K0NBS1AsT0FBTzsrQ0FVRSxPQUFPOytDQWlCVixPQUFPOytDQUdQLE9BQU87K0NBTWIsT0FBTztnREFVUCxPQUFPO2dEQUtQLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUMxRmhCLE1BQU07Ozs7Ozs7O2VBRU5DLFNBQU87Ozs7Ozs7Ozs7ZUFFUEMsT0FBSzs7Ozs7Ozs7OztlQUVMQyxNQUFJOzs7Ozs7Ozs7O2VBRUosT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
