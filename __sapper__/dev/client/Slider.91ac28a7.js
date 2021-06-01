import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, X as getContext, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, $ as assign, W as compute_rest_props, v as validate_slots, Y as get_current_component, ah as onMount, _ as onDestroy, a0 as exclude_internal_props, aU as tick, ag as validate_each_argument, p as element, x as claim_element, y as children, u as detach_dev, E as attr_dev, D as add_location, F as insert_dev, aj as destroy_each, o as space, w as claim_space, a9 as set_attributes, G as append_dev, aa as action_destroyer, a2 as get_spread_update, ab as is_function, O as noop, ac as run_all, a6 as binding_callbacks, be as to_number, t as text, z as claim_text, aw as set_data_dev, aT as set_input_value, ax as listen_dev } from './client.ec94238b.js';

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
var cssClasses$1 = {
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
var numbers$1 = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300, // Delay between touch and simulated mouse events on touch devices
};

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
            return cssClasses$1;
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
            return numbers$1;
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
            }, numbers$1.FG_DEACTIVATION_MS);
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

/**
 * @license
 * Copyright 2020 Google Inc.
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
/** Slider element classes. */
var cssClasses = {
    DISABLED: 'mdc-slider--disabled',
    DISCRETE: 'mdc-slider--discrete',
    INPUT: 'mdc-slider__input',
    RANGE: 'mdc-slider--range',
    THUMB: 'mdc-slider__thumb',
    // Applied when thumb is in the focused state.
    THUMB_FOCUSED: 'mdc-slider__thumb--focused',
    THUMB_KNOB: 'mdc-slider__thumb-knob',
    // Class added to the top thumb (for overlapping thumbs in range slider).
    THUMB_TOP: 'mdc-slider__thumb--top',
    THUMB_WITH_INDICATOR: 'mdc-slider__thumb--with-indicator',
    TICK_MARKS: 'mdc-slider--tick-marks',
    TICK_MARKS_CONTAINER: 'mdc-slider__tick-marks',
    TICK_MARK_ACTIVE: 'mdc-slider__tick-mark--active',
    TICK_MARK_INACTIVE: 'mdc-slider__tick-mark--inactive',
    TRACK: 'mdc-slider__track',
    // The active track fill element that will be scaled as the value changes.
    TRACK_ACTIVE: 'mdc-slider__track--active_fill',
    VALUE_INDICATOR_TEXT: 'mdc-slider__value-indicator-text',
};
/** Slider numbers. */
var numbers = {
    // Default step size.
    STEP_SIZE: 1,
    // Minimum absolute difference between clientX of move event / down event
    // for which to update thumb, in the case of overlapping thumbs.
    // This is needed to reduce chances of choosing the thumb based on
    // pointer jitter.
    THUMB_UPDATE_MIN_PX: 5,
};
/** Slider attributes. */
var attributes = {
    ARIA_VALUETEXT: 'aria-valuetext',
    INPUT_DISABLED: 'disabled',
    INPUT_MIN: 'min',
    INPUT_MAX: 'max',
    INPUT_VALUE: 'value',
    INPUT_STEP: 'step',
};

/**
 * @license
 * Copyright 2020 Google Inc.
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
 * AnimationFrame provides a user-friendly abstraction around requesting
 * and canceling animation frames.
 */
var AnimationFrame = /** @class */ (function () {
    function AnimationFrame() {
        this.rafIDs = new Map();
    }
    /**
     * Requests an animation frame. Cancels any existing frame with the same key.
     * @param {string} key The key for this callback.
     * @param {FrameRequestCallback} callback The callback to be executed.
     */
    AnimationFrame.prototype.request = function (key, callback) {
        var _this = this;
        this.cancel(key);
        var frameID = requestAnimationFrame(function (frame) {
            _this.rafIDs.delete(key);
            // Callback must come *after* the key is deleted so that nested calls to
            // request with the same key are not deleted.
            callback(frame);
        });
        this.rafIDs.set(key, frameID);
    };
    /**
     * Cancels a queued callback with the given key.
     * @param {string} key The key for this callback.
     */
    AnimationFrame.prototype.cancel = function (key) {
        var rafID = this.rafIDs.get(key);
        if (rafID) {
            cancelAnimationFrame(rafID);
            this.rafIDs.delete(key);
        }
    };
    /**
     * Cancels all queued callback.
     */
    AnimationFrame.prototype.cancelAll = function () {
        var _this = this;
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            _this.cancel(key);
        });
    };
    /**
     * Returns the queue of unexecuted callback keys.
     */
    AnimationFrame.prototype.getQueue = function () {
        var queue = [];
        // Need to use forEach because it's the only iteration method supported
        // by IE11. Suppress the underscore because we don't need it.
        // tslint:disable-next-line:enforce-name-casing
        this.rafIDs.forEach(function (_, key) {
            queue.push(key);
        });
        return queue;
    };
    return AnimationFrame;
}());

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
var cssPropertyNameMap = {
    animation: {
        prefixed: '-webkit-animation',
        standard: 'animation',
    },
    transform: {
        prefixed: '-webkit-transform',
        standard: 'transform',
    },
    transition: {
        prefixed: '-webkit-transition',
        standard: 'transition',
    },
};
function isWindow(windowObj) {
    return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
}
function getCorrectPropertyName(windowObj, cssProperty) {
    if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
        var el = windowObj.document.createElement('div');
        var _a = cssPropertyNameMap[cssProperty], standard = _a.standard, prefixed = _a.prefixed;
        var isStandard = standard in el.style;
        return isStandard ? standard : prefixed;
    }
    return cssProperty;
}

/**
 * @license
 * Copyright 2020 Google Inc.
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
/** Tick mark enum, for discrete sliders. */
var TickMark;
(function (TickMark) {
    TickMark[TickMark["ACTIVE"] = 0] = "ACTIVE";
    TickMark[TickMark["INACTIVE"] = 1] = "INACTIVE";
})(TickMark || (TickMark = {}));
/**
 * Thumb types: range slider has two thumbs (START, END) whereas single point
 * slider only has one thumb (END).
 */
var Thumb;
(function (Thumb) {
    // Thumb at start of slider (e.g. in LTR mode, left thumb on range slider).
    Thumb[Thumb["START"] = 1] = "START";
    // Thumb at end of slider (e.g. in LTR mode, right thumb on range slider,
    // or only thumb on single point slider).
    Thumb[Thumb["END"] = 2] = "END";
})(Thumb || (Thumb = {}));

/**
 * @license
 * Copyright 2020 Google Inc.
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
var AnimationKeys;
(function (AnimationKeys) {
    AnimationKeys["SLIDER_UPDATE"] = "slider_update";
})(AnimationKeys || (AnimationKeys = {}));
// Accessing `window` without a `typeof` check will throw on Node environments.
var HAS_WINDOW = typeof window !== 'undefined';
/**
 * Foundation class for slider. Responsibilities include:
 * - Updating slider values (internal state and DOM updates) based on client
 *   'x' position.
 * - Updating DOM after slider property updates (e.g. min, max).
 */
var MDCSliderFoundation = /** @class */ (function (_super) {
    __extends(MDCSliderFoundation, _super);
    function MDCSliderFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCSliderFoundation.defaultAdapter), adapter)) || this;
        // Whether the initial styles (to position the thumb, before component
        // initialization) have been removed.
        _this.initialStylesRemoved = false;
        _this.isDisabled = false;
        _this.isDiscrete = false;
        _this.step = numbers.STEP_SIZE;
        _this.hasTickMarks = false;
        // The following properties are only set for range sliders.
        _this.isRange = false;
        // Tracks the thumb being moved across a slider pointer interaction (down,
        // move event).
        _this.thumb = null;
        // `clientX` from the most recent down event. Used in subsequent move
        // events to determine which thumb to move (in the case of
        // overlapping thumbs).
        _this.downEventClientX = null;
        // Width of the start thumb knob.
        _this.startThumbKnobWidth = 0;
        // Width of the end thumb knob.
        _this.endThumbKnobWidth = 0;
        _this.animFrame = new AnimationFrame();
        return _this;
    }
    Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same
            // order as the adapter interface.
            return {
                hasClass: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                addThumbClass: function () { return undefined; },
                removeThumbClass: function () { return undefined; },
                getAttribute: function () { return null; },
                getInputValue: function () { return ''; },
                setInputValue: function () { return undefined; },
                getInputAttribute: function () { return null; },
                setInputAttribute: function () { return null; },
                removeInputAttribute: function () { return null; },
                focusInput: function () { return undefined; },
                isInputFocused: function () { return false; },
                getThumbKnobWidth: function () { return 0; },
                getThumbBoundingClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                getBoundingClientRect: function () {
                    return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 });
                },
                isRTL: function () { return false; },
                setThumbStyleProperty: function () { return undefined; },
                removeThumbStyleProperty: function () { return undefined; },
                setTrackActiveStyleProperty: function () { return undefined; },
                removeTrackActiveStyleProperty: function () { return undefined; },
                setValueIndicatorText: function () { return undefined; },
                getValueToAriaValueTextFn: function () { return null; },
                updateTickMarks: function () { return undefined; },
                setPointerCapture: function () { return undefined; },
                emitChangeEvent: function () { return undefined; },
                emitInputEvent: function () { return undefined; },
                emitDragStartEvent: function () { return undefined; },
                emitDragEndEvent: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
                registerThumbEventHandler: function () { return undefined; },
                deregisterThumbEventHandler: function () { return undefined; },
                registerInputEventHandler: function () { return undefined; },
                deregisterInputEventHandler: function () { return undefined; },
                registerBodyEventHandler: function () { return undefined; },
                deregisterBodyEventHandler: function () { return undefined; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCSliderFoundation.prototype.init = function () {
        var _this = this;
        this.isDisabled = this.adapter.hasClass(cssClasses.DISABLED);
        this.isDiscrete = this.adapter.hasClass(cssClasses.DISCRETE);
        this.hasTickMarks = this.adapter.hasClass(cssClasses.TICK_MARKS);
        this.isRange = this.adapter.hasClass(cssClasses.RANGE);
        var min = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_MIN, this.isRange ? Thumb.START : Thumb.END), attributes.INPUT_MIN);
        var max = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_MAX, Thumb.END), attributes.INPUT_MAX);
        var value = this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_VALUE, Thumb.END), attributes.INPUT_VALUE);
        var valueStart = this.isRange ?
            this.convertAttributeValueToNumber(this.adapter.getInputAttribute(attributes.INPUT_VALUE, Thumb.START), attributes.INPUT_VALUE) :
            min;
        var stepAttr = this.adapter.getInputAttribute(attributes.INPUT_STEP, Thumb.END);
        var step = stepAttr ?
            this.convertAttributeValueToNumber(stepAttr, attributes.INPUT_STEP) :
            this.step;
        this.validateProperties({ min: min, max: max, value: value, valueStart: valueStart, step: step });
        this.min = min;
        this.max = max;
        this.value = value;
        this.valueStart = valueStart;
        this.step = step;
        this.numDecimalPlaces = getNumDecimalPlaces(this.step);
        this.valueBeforeDownEvent = value;
        this.valueStartBeforeDownEvent = valueStart;
        this.mousedownOrTouchstartListener =
            this.handleMousedownOrTouchstart.bind(this);
        this.moveListener = this.handleMove.bind(this);
        this.pointerdownListener = this.handlePointerdown.bind(this);
        this.pointerupListener = this.handlePointerup.bind(this);
        this.thumbMouseenterListener = this.handleThumbMouseenter.bind(this);
        this.thumbMouseleaveListener = this.handleThumbMouseleave.bind(this);
        this.inputStartChangeListener = function () {
            _this.handleInputChange(Thumb.START);
        };
        this.inputEndChangeListener = function () {
            _this.handleInputChange(Thumb.END);
        };
        this.inputStartFocusListener = function () {
            _this.handleInputFocus(Thumb.START);
        };
        this.inputEndFocusListener = function () {
            _this.handleInputFocus(Thumb.END);
        };
        this.inputStartBlurListener = function () {
            _this.handleInputBlur(Thumb.START);
        };
        this.inputEndBlurListener = function () {
            _this.handleInputBlur(Thumb.END);
        };
        this.resizeListener = this.handleResize.bind(this);
        this.registerEventHandlers();
    };
    MDCSliderFoundation.prototype.destroy = function () {
        this.deregisterEventHandlers();
    };
    MDCSliderFoundation.prototype.getMin = function () {
        return this.min;
    };
    MDCSliderFoundation.prototype.getMax = function () {
        return this.max;
    };
    /**
     * - For single point sliders, returns the thumb value.
     * - For range (two-thumb) sliders, returns the end thumb's value.
     */
    MDCSliderFoundation.prototype.getValue = function () {
        return this.value;
    };
    /**
     * - For single point sliders, sets the thumb value.
     * - For range (two-thumb) sliders, sets the end thumb's value.
     */
    MDCSliderFoundation.prototype.setValue = function (value) {
        if (this.isRange && value < this.valueStart) {
            throw new Error("end thumb value (" + value + ") must be >= start thumb " +
                ("value (" + this.valueStart + ")"));
        }
        this.updateValue(value, Thumb.END);
    };
    /**
     * Only applicable for range sliders.
     * @return The start thumb's value.
     */
    MDCSliderFoundation.prototype.getValueStart = function () {
        if (!this.isRange) {
            throw new Error('`valueStart` is only applicable for range sliders.');
        }
        return this.valueStart;
    };
    /**
     * Only applicable for range sliders. Sets the start thumb's value.
     */
    MDCSliderFoundation.prototype.setValueStart = function (valueStart) {
        if (!this.isRange) {
            throw new Error('`valueStart` is only applicable for range sliders.');
        }
        if (this.isRange && valueStart > this.value) {
            throw new Error("start thumb value (" + valueStart + ") must be <= end thumb " +
                ("value (" + this.value + ")"));
        }
        this.updateValue(valueStart, Thumb.START);
    };
    MDCSliderFoundation.prototype.getStep = function () {
        return this.step;
    };
    MDCSliderFoundation.prototype.getDisabled = function () {
        return this.isDisabled;
    };
    /**
     * Sets disabled state, including updating styles and thumb tabindex.
     */
    MDCSliderFoundation.prototype.setDisabled = function (disabled) {
        this.isDisabled = disabled;
        if (disabled) {
            this.adapter.addClass(cssClasses.DISABLED);
            if (this.isRange) {
                this.adapter.setInputAttribute(attributes.INPUT_DISABLED, '', Thumb.START);
            }
            this.adapter.setInputAttribute(attributes.INPUT_DISABLED, '', Thumb.END);
        }
        else {
            this.adapter.removeClass(cssClasses.DISABLED);
            if (this.isRange) {
                this.adapter.removeInputAttribute(attributes.INPUT_DISABLED, Thumb.START);
            }
            this.adapter.removeInputAttribute(attributes.INPUT_DISABLED, Thumb.END);
        }
    };
    /** @return Whether the slider is a range slider. */
    MDCSliderFoundation.prototype.getIsRange = function () {
        return this.isRange;
    };
    /**
     * - Syncs slider boundingClientRect with the current DOM.
     * - Updates UI based on internal state.
     */
    MDCSliderFoundation.prototype.layout = function (_a) {
        var _b = _a === void 0 ? {} : _a, skipUpdateUI = _b.skipUpdateUI;
        this.rect = this.adapter.getBoundingClientRect();
        if (this.isRange) {
            this.startThumbKnobWidth = this.adapter.getThumbKnobWidth(Thumb.START);
            this.endThumbKnobWidth = this.adapter.getThumbKnobWidth(Thumb.END);
        }
        if (!skipUpdateUI) {
            this.updateUI();
        }
    };
    /** Handles resize events on the window. */
    MDCSliderFoundation.prototype.handleResize = function () {
        this.layout();
    };
    /**
     * Handles pointer down events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleDown = function (event) {
        if (this.isDisabled)
            return;
        this.valueStartBeforeDownEvent = this.valueStart;
        this.valueBeforeDownEvent = this.value;
        var clientX = event.clientX != null ?
            event.clientX :
            event.targetTouches[0].clientX;
        this.downEventClientX = clientX;
        var value = this.mapClientXOnSliderScale(clientX);
        this.thumb = this.getThumbFromDownEvent(clientX, value);
        if (this.thumb === null)
            return;
        this.handleDragStart(event, value, this.thumb);
        this.updateValue(value, this.thumb, { emitInputEvent: true });
    };
    /**
     * Handles pointer move events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleMove = function (event) {
        if (this.isDisabled)
            return;
        // Prevent scrolling.
        event.preventDefault();
        var clientX = event.clientX != null ?
            event.clientX :
            event.targetTouches[0].clientX;
        var dragAlreadyStarted = this.thumb != null;
        this.thumb = this.getThumbFromMoveEvent(clientX);
        if (this.thumb === null)
            return;
        var value = this.mapClientXOnSliderScale(clientX);
        if (!dragAlreadyStarted) {
            this.handleDragStart(event, value, this.thumb);
            this.adapter.emitDragStartEvent(value, this.thumb);
        }
        this.updateValue(value, this.thumb, { emitInputEvent: true });
    };
    /**
     * Handles pointer up events on the slider root element.
     */
    MDCSliderFoundation.prototype.handleUp = function () {
        if (this.isDisabled || this.thumb === null)
            return;
        var oldValue = this.thumb === Thumb.START ?
            this.valueStartBeforeDownEvent :
            this.valueBeforeDownEvent;
        var newValue = this.thumb === Thumb.START ? this.valueStart : this.value;
        if (oldValue !== newValue) {
            this.adapter.emitChangeEvent(newValue, this.thumb);
        }
        this.adapter.emitDragEndEvent(newValue, this.thumb);
        this.thumb = null;
    };
    /**
     * For range, discrete slider, shows the value indicator on both thumbs.
     */
    MDCSliderFoundation.prototype.handleThumbMouseenter = function () {
        if (!this.isDiscrete || !this.isRange)
            return;
        this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.START);
        this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
    };
    /**
     * For range, discrete slider, hides the value indicator on both thumbs.
     */
    MDCSliderFoundation.prototype.handleThumbMouseleave = function () {
        if (!this.isDiscrete || !this.isRange)
            return;
        if (this.adapter.isInputFocused(Thumb.START) ||
            this.adapter.isInputFocused(Thumb.END)) {
            // Leave value indicator shown if either input is focused.
            return;
        }
        this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.START);
        this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, Thumb.END);
    };
    MDCSliderFoundation.prototype.handleMousedownOrTouchstart = function (event) {
        var _this = this;
        var moveEventType = event.type === 'mousedown' ? 'mousemove' : 'touchmove';
        // After a down event on the slider root, listen for move events on
        // body (so the slider value is updated for events outside of the
        // slider root).
        this.adapter.registerBodyEventHandler(moveEventType, this.moveListener);
        var upHandler = function () {
            _this.handleUp();
            // Once the drag is finished (up event on body), remove the move
            // handler.
            _this.adapter.deregisterBodyEventHandler(moveEventType, _this.moveListener);
            // Also stop listening for subsequent up events.
            _this.adapter.deregisterEventHandler('mouseup', upHandler);
            _this.adapter.deregisterEventHandler('touchend', upHandler);
        };
        this.adapter.registerBodyEventHandler('mouseup', upHandler);
        this.adapter.registerBodyEventHandler('touchend', upHandler);
        this.handleDown(event);
    };
    MDCSliderFoundation.prototype.handlePointerdown = function (event) {
        this.adapter.setPointerCapture(event.pointerId);
        this.adapter.registerEventHandler('pointermove', this.moveListener);
        this.handleDown(event);
    };
    /**
     * Handles input `change` event by setting internal slider value to match
     * input's new value.
     */
    MDCSliderFoundation.prototype.handleInputChange = function (thumb) {
        var value = Number(this.adapter.getInputValue(thumb));
        if (thumb === Thumb.START) {
            this.setValueStart(value);
        }
        else {
            this.setValue(value);
        }
        this.adapter.emitChangeEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
        this.adapter.emitInputEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
    };
    /** Shows activated state and value indicator on thumb(s). */
    MDCSliderFoundation.prototype.handleInputFocus = function (thumb) {
        this.adapter.addThumbClass(cssClasses.THUMB_FOCUSED, thumb);
        if (!this.isDiscrete)
            return;
        this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, thumb);
        if (this.isRange) {
            var otherThumb = thumb === Thumb.START ? Thumb.END : Thumb.START;
            this.adapter.addThumbClass(cssClasses.THUMB_WITH_INDICATOR, otherThumb);
        }
    };
    /** Removes activated state and value indicator from thumb(s). */
    MDCSliderFoundation.prototype.handleInputBlur = function (thumb) {
        this.adapter.removeThumbClass(cssClasses.THUMB_FOCUSED, thumb);
        if (!this.isDiscrete)
            return;
        this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, thumb);
        if (this.isRange) {
            var otherThumb = thumb === Thumb.START ? Thumb.END : Thumb.START;
            this.adapter.removeThumbClass(cssClasses.THUMB_WITH_INDICATOR, otherThumb);
        }
    };
    /**
     * Emits custom dragStart event, along with focusing the underlying input.
     */
    MDCSliderFoundation.prototype.handleDragStart = function (event, value, thumb) {
        this.adapter.focusInput(thumb);
        // Prevent the input (that we just focused) from losing focus.
        event.preventDefault();
        this.adapter.emitDragStartEvent(value, thumb);
    };
    /**
     * @return The thumb to be moved based on initial down event.
     */
    MDCSliderFoundation.prototype.getThumbFromDownEvent = function (clientX, value) {
        // For single point slider, thumb to be moved is always the END (only)
        // thumb.
        if (!this.isRange)
            return Thumb.END;
        // Check if event press point is in the bounds of any thumb.
        var thumbStartRect = this.adapter.getThumbBoundingClientRect(Thumb.START);
        var thumbEndRect = this.adapter.getThumbBoundingClientRect(Thumb.END);
        var inThumbStartBounds = clientX >= thumbStartRect.left && clientX <= thumbStartRect.right;
        var inThumbEndBounds = clientX >= thumbEndRect.left && clientX <= thumbEndRect.right;
        if (inThumbStartBounds && inThumbEndBounds) {
            // Thumbs overlapping. Thumb to be moved cannot be determined yet.
            return null;
        }
        // If press is in bounds for either thumb on down event, that's the thumb
        // to be moved.
        if (inThumbStartBounds) {
            return Thumb.START;
        }
        if (inThumbEndBounds) {
            return Thumb.END;
        }
        // For presses outside the range, return whichever thumb is closer.
        if (value < this.valueStart) {
            return Thumb.START;
        }
        if (value > this.value) {
            return Thumb.END;
        }
        // For presses inside the range, return whichever thumb is closer.
        return (value - this.valueStart <= this.value - value) ? Thumb.START :
            Thumb.END;
    };
    /**
     * @return The thumb to be moved based on move event (based on drag
     *     direction from original down event). Only applicable if thumbs
     *     were overlapping in the down event.
     */
    MDCSliderFoundation.prototype.getThumbFromMoveEvent = function (clientX) {
        // Thumb has already been chosen.
        if (this.thumb !== null)
            return this.thumb;
        if (this.downEventClientX === null) {
            throw new Error('`downEventClientX` is null after move event.');
        }
        var moveDistanceUnderThreshold = Math.abs(this.downEventClientX - clientX) < numbers.THUMB_UPDATE_MIN_PX;
        if (moveDistanceUnderThreshold)
            return this.thumb;
        var draggedThumbToLeft = clientX < this.downEventClientX;
        if (draggedThumbToLeft) {
            return this.adapter.isRTL() ? Thumb.END : Thumb.START;
        }
        else {
            return this.adapter.isRTL() ? Thumb.START : Thumb.END;
        }
    };
    /**
     * Updates UI based on internal state.
     * @param thumb Thumb whose value is being updated. If undefined, UI is
     *     updated for both thumbs based on current internal state.
     */
    MDCSliderFoundation.prototype.updateUI = function (thumb) {
        this.updateThumbAndInputAttributes(thumb);
        this.updateThumbAndTrackUI(thumb);
        this.updateValueIndicatorUI(thumb);
        this.updateTickMarksUI();
    };
    /**
     * Updates thumb and input attributes based on current value.
     * @param thumb Thumb whose aria attributes to update.
     */
    MDCSliderFoundation.prototype.updateThumbAndInputAttributes = function (thumb) {
        if (!thumb)
            return;
        var value = this.isRange && thumb === Thumb.START ? this.valueStart : this.value;
        var valueStr = String(value);
        this.adapter.setInputAttribute(attributes.INPUT_VALUE, valueStr, thumb);
        if (this.isRange && thumb === Thumb.START) {
            this.adapter.setInputAttribute(attributes.INPUT_MIN, valueStr, Thumb.END);
        }
        else if (this.isRange && thumb === Thumb.END) {
            this.adapter.setInputAttribute(attributes.INPUT_MAX, valueStr, Thumb.START);
        }
        // Sync attribute with property.
        if (this.adapter.getInputValue(thumb) !== valueStr) {
            this.adapter.setInputValue(valueStr, thumb);
        }
        var valueToAriaValueTextFn = this.adapter.getValueToAriaValueTextFn();
        if (valueToAriaValueTextFn) {
            this.adapter.setInputAttribute(attributes.ARIA_VALUETEXT, valueToAriaValueTextFn(value), thumb);
        }
    };
    /**
     * Updates value indicator UI based on current value.
     * @param thumb Thumb whose value indicator to update. If undefined, all
     *     thumbs' value indicators are updated.
     */
    MDCSliderFoundation.prototype.updateValueIndicatorUI = function (thumb) {
        if (!this.isDiscrete)
            return;
        var value = this.isRange && thumb === Thumb.START ? this.valueStart : this.value;
        this.adapter.setValueIndicatorText(value, thumb === Thumb.START ? Thumb.START : Thumb.END);
        if (!thumb && this.isRange) {
            this.adapter.setValueIndicatorText(this.valueStart, Thumb.START);
        }
    };
    /**
     * Updates tick marks UI within slider, based on current min, max, and step.
     */
    MDCSliderFoundation.prototype.updateTickMarksUI = function () {
        if (!this.isDiscrete || !this.hasTickMarks)
            return;
        var numTickMarksInactiveStart = (this.valueStart - this.min) / this.step;
        var numTickMarksActive = (this.value - this.valueStart) / this.step + 1;
        var numTickMarksInactiveEnd = (this.max - this.value) / this.step;
        var tickMarksInactiveStart = Array.from({ length: numTickMarksInactiveStart })
            .fill(TickMark.INACTIVE);
        var tickMarksActive = Array.from({ length: numTickMarksActive })
            .fill(TickMark.ACTIVE);
        var tickMarksInactiveEnd = Array.from({ length: numTickMarksInactiveEnd })
            .fill(TickMark.INACTIVE);
        this.adapter.updateTickMarks(tickMarksInactiveStart.concat(tickMarksActive)
            .concat(tickMarksInactiveEnd));
    };
    /** Maps clientX to a value on the slider scale. */
    MDCSliderFoundation.prototype.mapClientXOnSliderScale = function (clientX) {
        var xPos = clientX - this.rect.left;
        var pctComplete = xPos / this.rect.width;
        if (this.adapter.isRTL()) {
            pctComplete = 1 - pctComplete;
        }
        // Fit the percentage complete between the range [min,max]
        // by remapping from [0, 1] to [min, min+(max-min)].
        var value = this.min + pctComplete * (this.max - this.min);
        if (value === this.max || value === this.min) {
            return value;
        }
        return Number(this.quantize(value).toFixed(this.numDecimalPlaces));
    };
    /** Calculates the quantized value based on step value. */
    MDCSliderFoundation.prototype.quantize = function (value) {
        var numSteps = Math.round((value - this.min) / this.step);
        return this.min + numSteps * this.step;
    };
    /**
     * Updates slider value (internal state and UI) based on the given value.
     */
    MDCSliderFoundation.prototype.updateValue = function (value, thumb, _a) {
        var _b = _a === void 0 ? {} : _a, emitInputEvent = _b.emitInputEvent;
        value = this.clampValue(value, thumb);
        if (this.isRange && thumb === Thumb.START) {
            // Exit early if current value is the same as the new value.
            if (this.valueStart === value)
                return;
            this.valueStart = value;
        }
        else {
            // Exit early if current value is the same as the new value.
            if (this.value === value)
                return;
            this.value = value;
        }
        this.updateUI(thumb);
        if (emitInputEvent) {
            this.adapter.emitInputEvent(thumb === Thumb.START ? this.valueStart : this.value, thumb);
        }
    };
    /**
     * Clamps the given value for the given thumb based on slider properties:
     * - Restricts value within [min, max].
     * - If range slider, clamp start value <= end value, and
     *   end value >= start value.
     */
    MDCSliderFoundation.prototype.clampValue = function (value, thumb) {
        // Clamp value to [min, max] range.
        value = Math.min(Math.max(value, this.min), this.max);
        var thumbStartMovedPastThumbEnd = this.isRange && thumb === Thumb.START && value > this.value;
        if (thumbStartMovedPastThumbEnd) {
            return this.value;
        }
        var thumbEndMovedPastThumbStart = this.isRange && thumb === Thumb.END && value < this.valueStart;
        if (thumbEndMovedPastThumbStart) {
            return this.valueStart;
        }
        return value;
    };
    /**
     * Updates the active track and thumb style properties to reflect current
     * value.
     */
    MDCSliderFoundation.prototype.updateThumbAndTrackUI = function (thumb) {
        var _this = this;
        var _a = this, max = _a.max, min = _a.min;
        var pctComplete = (this.value - this.valueStart) / (max - min);
        var rangePx = pctComplete * this.rect.width;
        var isRtl = this.adapter.isRTL();
        var transformProp = HAS_WINDOW ? getCorrectPropertyName(window, 'transform') : 'transform';
        if (this.isRange) {
            var thumbLeftPos_1 = this.adapter.isRTL() ?
                (max - this.value) / (max - min) * this.rect.width :
                (this.valueStart - min) / (max - min) * this.rect.width;
            var thumbRightPos_1 = thumbLeftPos_1 + rangePx;
            this.animFrame.request(AnimationKeys.SLIDER_UPDATE, function () {
                // Set active track styles, accounting for animation direction by
                // setting `transform-origin`.
                var trackAnimatesFromRight = (!isRtl && thumb === Thumb.START) ||
                    (isRtl && thumb !== Thumb.START);
                if (trackAnimatesFromRight) {
                    _this.adapter.setTrackActiveStyleProperty('transform-origin', 'right');
                    _this.adapter.setTrackActiveStyleProperty('left', 'unset');
                    _this.adapter.setTrackActiveStyleProperty('right', _this.rect.width - thumbRightPos_1 + "px");
                }
                else {
                    _this.adapter.setTrackActiveStyleProperty('transform-origin', 'left');
                    _this.adapter.setTrackActiveStyleProperty('right', 'unset');
                    _this.adapter.setTrackActiveStyleProperty('left', thumbLeftPos_1 + "px");
                }
                _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
                // Set thumb styles.
                var thumbStartPos = isRtl ? thumbRightPos_1 : thumbLeftPos_1;
                var thumbEndPos = _this.adapter.isRTL() ? thumbLeftPos_1 : thumbRightPos_1;
                if (thumb === Thumb.START || !thumb || !_this.initialStylesRemoved) {
                    _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", Thumb.START);
                }
                if (thumb === Thumb.END || !thumb || !_this.initialStylesRemoved) {
                    _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbEndPos + "px)", Thumb.END);
                }
                _this.removeInitialStyles(isRtl);
                _this.updateOverlappingThumbsUI(thumbStartPos, thumbEndPos, thumb);
            });
        }
        else {
            this.animFrame.request(AnimationKeys.SLIDER_UPDATE, function () {
                var thumbStartPos = isRtl ? _this.rect.width - rangePx : rangePx;
                _this.adapter.setThumbStyleProperty(transformProp, "translateX(" + thumbStartPos + "px)", Thumb.END);
                _this.adapter.setTrackActiveStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
                _this.removeInitialStyles(isRtl);
            });
        }
    };
    /**
     * Removes initial inline styles if not already removed. `left:<...>%`
     * inline styles can be added to position the thumb correctly before JS
     * initialization. However, they need to be removed before the JS starts
     * positioning the thumb. This is because the JS uses
     * `transform:translateX(<...>)px` (for performance reasons) to position
     * the thumb (which is not possible for initial styles since we need the
     * bounding rect measurements).
     */
    MDCSliderFoundation.prototype.removeInitialStyles = function (isRtl) {
        if (this.initialStylesRemoved)
            return;
        // Remove thumb position properties that were added for initial render.
        var position = isRtl ? 'right' : 'left';
        this.adapter.removeThumbStyleProperty(position, Thumb.END);
        if (this.isRange) {
            this.adapter.removeThumbStyleProperty(position, Thumb.START);
        }
        this.initialStylesRemoved = true;
        this.resetTrackAndThumbAnimation();
    };
    /**
     * Resets track/thumb animation to prevent animation when adding
     * `transform` styles to thumb initially.
     */
    MDCSliderFoundation.prototype.resetTrackAndThumbAnimation = function () {
        var _this = this;
        if (!this.isDiscrete)
            return;
        // Set transition properties to default (no animation), so that the
        // newly added `transform` styles do not animate thumb/track from
        // their default positions.
        var transitionProp = HAS_WINDOW ?
            getCorrectPropertyName(window, 'transition') :
            'transition';
        var transitionDefault = 'all 0s ease 0s';
        this.adapter.setThumbStyleProperty(transitionProp, transitionDefault, Thumb.END);
        if (this.isRange) {
            this.adapter.setThumbStyleProperty(transitionProp, transitionDefault, Thumb.START);
        }
        this.adapter.setTrackActiveStyleProperty(transitionProp, transitionDefault);
        // In the next frame, remove the transition inline styles we just
        // added, such that any animations added in the CSS can now take effect.
        requestAnimationFrame(function () {
            _this.adapter.removeThumbStyleProperty(transitionProp, Thumb.END);
            _this.adapter.removeTrackActiveStyleProperty(transitionProp);
            if (_this.isRange) {
                _this.adapter.removeThumbStyleProperty(transitionProp, Thumb.START);
            }
        });
    };
    /**
     * Adds THUMB_TOP class to active thumb if thumb knobs overlap; otherwise
     * removes THUMB_TOP class from both thumbs.
     * @param thumb Thumb that is active (being moved).
     */
    MDCSliderFoundation.prototype.updateOverlappingThumbsUI = function (thumbStartPos, thumbEndPos, thumb) {
        var thumbsOverlap = false;
        if (this.adapter.isRTL()) {
            var startThumbLeftEdge = thumbStartPos - this.startThumbKnobWidth / 2;
            var endThumbRightEdge = thumbEndPos + this.endThumbKnobWidth / 2;
            thumbsOverlap = endThumbRightEdge >= startThumbLeftEdge;
        }
        else {
            var startThumbRightEdge = thumbStartPos + this.startThumbKnobWidth / 2;
            var endThumbLeftEdge = thumbEndPos - this.endThumbKnobWidth / 2;
            thumbsOverlap = startThumbRightEdge >= endThumbLeftEdge;
        }
        if (thumbsOverlap) {
            this.adapter.addThumbClass(cssClasses.THUMB_TOP, 
            // If no thumb was dragged (in the case of initial layout), end
            // thumb is on top by default.
            thumb || Thumb.END);
            this.adapter.removeThumbClass(cssClasses.THUMB_TOP, thumb === Thumb.START ? Thumb.END : Thumb.START);
        }
        else {
            this.adapter.removeThumbClass(cssClasses.THUMB_TOP, Thumb.START);
            this.adapter.removeThumbClass(cssClasses.THUMB_TOP, Thumb.END);
        }
    };
    /**
     * Converts attribute value to a number, e.g. '100' => 100. Throws errors
     * for invalid values.
     * @param attributeValue Attribute value, e.g. 100.
     * @param attributeName Attribute name, e.g. `aria-valuemax`.
     */
    MDCSliderFoundation.prototype.convertAttributeValueToNumber = function (attributeValue, attributeName) {
        if (attributeValue === null) {
            throw new Error("MDCSliderFoundation: `" + attributeName + "` must be non-null.");
        }
        var value = Number(attributeValue);
        if (isNaN(value)) {
            throw new Error("MDCSliderFoundation: `" + attributeName + "` value is " +
                ("`" + attributeValue + "`, but must be a number."));
        }
        return value;
    };
    /** Checks that the given properties are valid slider values. */
    MDCSliderFoundation.prototype.validateProperties = function (_a) {
        var min = _a.min, max = _a.max, value = _a.value, valueStart = _a.valueStart, step = _a.step;
        if (min >= max) {
            throw new Error("MDCSliderFoundation: min must be strictly less than max. " +
                ("Current: [min: " + min + ", max: " + max + "]"));
        }
        if (step <= 0) {
            throw new Error("MDCSliderFoundation: step must be a positive number. " +
                ("Current step: " + this.step));
        }
        if (this.isRange) {
            if (value < min || value > max || valueStart < min || valueStart > max) {
                throw new Error("MDCSliderFoundation: values must be in [min, max] range. " +
                    ("Current values: [start value: " + valueStart + ", end value: " + value + "]"));
            }
            if (valueStart > value) {
                throw new Error("MDCSliderFoundation: start value must be <= end value. " +
                    ("Current values: [start value: " + valueStart + ", end value: " + value + "]"));
            }
            var numStepsValueStartFromMin = (valueStart - min) / step;
            var numStepsValueFromMin = (value - min) / step;
            if ((numStepsValueStartFromMin % 1) !== 0 ||
                (numStepsValueFromMin % 1) !== 0) {
                throw new Error("MDCSliderFoundation: Slider values must be valid based on the " +
                    ("step value. Current values: [start value: " + valueStart + ", ") +
                    ("end value: " + value + "]"));
            }
        }
        else { // Single point slider.
            if (value < min || value > max) {
                throw new Error("MDCSliderFoundation: value must be in [min, max] range. " +
                    ("Current value: " + value));
            }
            var numStepsValueFromMin = (value - min) / step;
            if ((numStepsValueFromMin % 1) !== 0) {
                throw new Error("MDCSliderFoundation: Slider value must be valid based on the " +
                    ("step value. Current value: " + value));
            }
        }
    };
    MDCSliderFoundation.prototype.registerEventHandlers = function () {
        this.adapter.registerWindowEventHandler('resize', this.resizeListener);
        if (MDCSliderFoundation.SUPPORTS_POINTER_EVENTS) {
            // If supported, use pointer events API with #setPointerCapture.
            this.adapter.registerEventHandler('pointerdown', this.pointerdownListener);
            this.adapter.registerEventHandler('pointerup', this.pointerupListener);
        }
        else {
            // Otherwise, fall back to mousedown/touchstart events.
            this.adapter.registerEventHandler('mousedown', this.mousedownOrTouchstartListener);
            this.adapter.registerEventHandler('touchstart', this.mousedownOrTouchstartListener);
        }
        if (this.isRange) {
            this.adapter.registerThumbEventHandler(Thumb.START, 'mouseenter', this.thumbMouseenterListener);
            this.adapter.registerThumbEventHandler(Thumb.START, 'mouseleave', this.thumbMouseleaveListener);
            this.adapter.registerInputEventHandler(Thumb.START, 'change', this.inputStartChangeListener);
            this.adapter.registerInputEventHandler(Thumb.START, 'focus', this.inputStartFocusListener);
            this.adapter.registerInputEventHandler(Thumb.START, 'blur', this.inputStartBlurListener);
        }
        this.adapter.registerThumbEventHandler(Thumb.END, 'mouseenter', this.thumbMouseenterListener);
        this.adapter.registerThumbEventHandler(Thumb.END, 'mouseleave', this.thumbMouseleaveListener);
        this.adapter.registerInputEventHandler(Thumb.END, 'change', this.inputEndChangeListener);
        this.adapter.registerInputEventHandler(Thumb.END, 'focus', this.inputEndFocusListener);
        this.adapter.registerInputEventHandler(Thumb.END, 'blur', this.inputEndBlurListener);
    };
    MDCSliderFoundation.prototype.deregisterEventHandlers = function () {
        this.adapter.deregisterWindowEventHandler('resize', this.resizeListener);
        if (MDCSliderFoundation.SUPPORTS_POINTER_EVENTS) {
            this.adapter.deregisterEventHandler('pointerdown', this.pointerdownListener);
            this.adapter.deregisterEventHandler('pointerup', this.pointerupListener);
        }
        else {
            this.adapter.deregisterEventHandler('mousedown', this.mousedownOrTouchstartListener);
            this.adapter.deregisterEventHandler('touchstart', this.mousedownOrTouchstartListener);
        }
        if (this.isRange) {
            this.adapter.deregisterThumbEventHandler(Thumb.START, 'mouseenter', this.thumbMouseenterListener);
            this.adapter.deregisterThumbEventHandler(Thumb.START, 'mouseleave', this.thumbMouseleaveListener);
            this.adapter.deregisterInputEventHandler(Thumb.START, 'change', this.inputStartChangeListener);
            this.adapter.deregisterInputEventHandler(Thumb.START, 'focus', this.inputStartFocusListener);
            this.adapter.deregisterInputEventHandler(Thumb.START, 'blur', this.inputStartBlurListener);
        }
        this.adapter.deregisterThumbEventHandler(Thumb.END, 'mouseenter', this.thumbMouseenterListener);
        this.adapter.deregisterThumbEventHandler(Thumb.END, 'mouseleave', this.thumbMouseleaveListener);
        this.adapter.deregisterInputEventHandler(Thumb.END, 'change', this.inputEndChangeListener);
        this.adapter.deregisterInputEventHandler(Thumb.END, 'focus', this.inputEndFocusListener);
        this.adapter.deregisterInputEventHandler(Thumb.END, 'blur', this.inputEndBlurListener);
    };
    MDCSliderFoundation.prototype.handlePointerup = function () {
        this.handleUp();
        this.adapter.deregisterEventHandler('pointermove', this.moveListener);
    };
    MDCSliderFoundation.SUPPORTS_POINTER_EVENTS = HAS_WINDOW && Boolean(window.PointerEvent) &&
        // #setPointerCapture is buggy on iOS, so we can't use pointer events
        // until the following bug is fixed:
        // https://bugs.webkit.org/show_bug.cgi?id=220196
        !isIOS();
    return MDCSliderFoundation;
}(MDCFoundation));
function isIOS() {
    // Source:
    // https://stackoverflow.com/questions/9038625/detect-if-device-is-ios
    return [
        'iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone',
        'iPod'
    ].includes(navigator.platform)
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);
}
/**
 * Given a number, returns the number of digits that appear after the
 * decimal point.
 * See
 * https://stackoverflow.com/questions/9539513/is-there-a-reliable-way-in-javascript-to-obtain-the-number-of-decimal-places-of
 */
function getNumDecimalPlaces(n) {
    // Pull out the fraction and the exponent.
    var match = /(?:\.(\d+))?(?:[eE]([+\-]?\d+))?$/.exec(String(n));
    // NaN or Infinity or integer.
    // We arbitrarily decide that Infinity is integral.
    if (!match)
        return 0;
    var fraction = match[1] || ''; // E.g. 1.234e-2 => 234
    var exponent = match[2] || 0; // E.g. 1.234e-2 => -2
    // Count the number of digits in the fraction and subtract the
    // exponent to simulate moving the decimal point left by exponent places.
    // 1.234e+2 has 1 fraction digit and '234'.length -  2 == 1
    // 1.234e-2 has 5 fraction digit and '234'.length - -2 == 5
    return Math.max(0, // lower limit
    (fraction === '0' ? 0 : fraction.length) - Number(exponent));
}

// Match modifiers on DOM events.
const oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
// Match modifiers on other events.
const newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;

function forwardEventsBuilder(component) {
  // This is our pseudo $on function. It is defined on component mount.
  let $on;
  // This is a list of events bound before mount.
  let events = [];
  // This is the original component $on function.
  const componentOn = component.$on;

  // And we override the $on function to forward all bound events.
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {};
    if ($on) {
      // The event was bound programmatically.
      destructor = $on(eventType, callback);
    } else {
      // The event was bound before mount by Svelte.
      events.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    const newModifierMatch = eventType.match(newModifierRegex);
    const modifierMatch = oldModifierMatch || newModifierMatch;

    if (oldModifierMatch && console) {
      console.warn(
        'Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',
        eventType
      );
    }

    if (modifierMatch) {
      // Remove modifiers from the real event.
      const parts = eventType.split(oldModifierMatch ? ':' : '$');
      eventType = parts[0];
    }

    // Call the original $on function.
    const componentDestructor = componentOn.call(
      component,
      eventType,
      callback
    );

    return (...args) => {
      destructor();
      return componentDestructor(...args);
    };
  };

  function forward(e) {
    // Internally bubble the event up from Svelte components.
    bubble(component, e);
  }

  return (node) => {
    const destructors = [];
    const forwardDestructors = {};

    // This function is responsible for forwarding all bound events.
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      // DOM addEventListener options argument.
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (modifierMatch) {
        // Parse the event modifiers.
        // Supported modifiers:
        // - preventDefault
        // - stopPropagation
        // - passive
        // - nonpassive
        // - capture
        // - once
        const parts = eventType.split(oldModifierMatch ? ':' : '$');
        eventType = parts[0];
        options = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
        if (options.nonpassive) {
          options.passive = false;
          delete options.nonpassive;
        }
        if (options.preventDefault) {
          handler = prevent_default(handler);
          delete options.preventDefault;
        }
        if (options.stopPropagation) {
          handler = stop_propagation(handler);
          delete options.stopPropagation;
        }
      }

      // Listen for the event directly, with the given options.
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };

      destructors.push(destructor);

      // Forward the event from Svelte.
      if (!eventType in forwardDestructors) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }

      return destructor;
    };

    for (let i = 0; i < events.length; i++) {
      // Listen to all the events added before mount.
      $on(events[i][0], events[i][1]);
    }

    return {
      destroy: () => {
        // Remove all event listeners.
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }

        // Remove all event forwarders.
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      },
    };
  };
}

function classMap(classObj) {
  return Object.entries(classObj)
    .filter(([name, value]) => name !== '' && value)
    .map(([name]) => name)
    .join(' ');
}

function dispatch(
  element,
  eventType,
  detail = {},
  eventInit = { bubbles: true }
) {
  if (typeof Event !== 'undefined' && element) {
    const event = new Event(eventType, eventInit);
    event.detail = detail;
    const el = 'getElement' in element ? element.getElement() : element;
    el.dispatchEvent(event);
    return event;
  }
}

function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf('$');
    if (
      cashIndex !== -1 &&
      keys.indexOf(name.substring(0, cashIndex + 1)) !== -1
    ) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }

  return newObj;
}

function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }

  return newObj;
}

function useActions(node, actions) {
  let objects = [];

  if (actions) {
    for (let i = 0; i < actions.length; i++) {
      const isArray = Array.isArray(actions[i]);
      const action = isArray ? actions[i][0] : actions[i];
      if (isArray && actions[i].length > 1) {
        objects.push(action(node, actions[i][1]));
      } else {
        objects.push(action(node));
      }
    }
  }

  return {
    update(actions) {
      if (((actions && actions.length) || 0) != objects.length) {
        throw new Error('You must not change the length of an actions array.');
      }

      if (actions) {
        for (let i = 0; i < actions.length; i++) {
          if (objects[i] && 'update' in objects[i]) {
            const isArray = Array.isArray(actions[i]);
            if (isArray && actions[i].length > 1) {
              objects[i].update(actions[i][1]);
            } else {
              objects[i].update();
            }
          }
        }
      }
    },

    destroy() {
      for (let i = 0; i < objects.length; i++) {
        if (objects[i] && 'destroy' in objects[i]) {
          objects[i].destroy();
        }
      }
    },
  };
}

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

/* packages/slider/Slider.svelte generated by Svelte v3.37.0 */
const file = "packages/slider/Slider.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[84] = list[i];
	return child_ctx;
}

// (55:2) {:else}
function create_else_block_1(ctx) {
	let input_1;
	let input_1_class_value;
	let mounted;
	let dispose;

	let input_1_levels = [
		{
			class: input_1_class_value = classMap({
				[/*input$class*/ ctx[12]]: true,
				"mdc-slider__input": true
			})
		},
		{ type: "range" },
		{ disabled: /*disabled*/ ctx[5] },
		{ step: /*step*/ ctx[9] },
		{ min: /*min*/ ctx[10] },
		{ max: /*max*/ ctx[11] },
		/*inputProps*/ ctx[32],
		/*inputAttrs*/ ctx[23],
		prefixFilter(/*$$restProps*/ ctx[36], "input$")
	];

	let input_1_data = {};

	for (let i = 0; i < input_1_levels.length; i += 1) {
		input_1_data = assign(input_1_data, input_1_levels[i]);
	}

	const block = {
		c: function create() {
			input_1 = element("input");
			this.h();
		},
		l: function claim(nodes) {
			input_1 = claim_element(nodes, "INPUT", {
				class: true,
				type: true,
				disabled: true,
				step: true,
				min: true,
				max: true
			});

			this.h();
		},
		h: function hydrate() {
			set_attributes(input_1, input_1_data);
			add_location(input_1, file, 55, 4, 1211);
		},
		m: function mount(target, anchor) {
			insert_dev(target, input_1, anchor);
			/*input_1_binding*/ ctx[55](input_1);
			set_input_value(input_1, /*value*/ ctx[0]);

			if (!mounted) {
				dispose = [
					listen_dev(input_1, "change", /*input_1_change_input_handler*/ ctx[56]),
					listen_dev(input_1, "input", /*input_1_change_input_handler*/ ctx[56]),
					listen_dev(input_1, "blur", /*blur_handler_2*/ ctx[49], false, false, false),
					listen_dev(input_1, "focus", /*focus_handler_2*/ ctx[50], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			set_attributes(input_1, input_1_data = get_spread_update(input_1_levels, [
				dirty[0] & /*input$class*/ 4096 && input_1_class_value !== (input_1_class_value = classMap({
					[/*input$class*/ ctx[12]]: true,
					"mdc-slider__input": true
				})) && { class: input_1_class_value },
				{ type: "range" },
				dirty[0] & /*disabled*/ 32 && { disabled: /*disabled*/ ctx[5] },
				dirty[0] & /*step*/ 512 && { step: /*step*/ ctx[9] },
				dirty[0] & /*min*/ 1024 && { min: /*min*/ ctx[10] },
				dirty[0] & /*max*/ 2048 && { max: /*max*/ ctx[11] },
				/*inputProps*/ ctx[32],
				dirty[0] & /*inputAttrs*/ 8388608 && /*inputAttrs*/ ctx[23],
				dirty[1] & /*$$restProps*/ 32 && prefixFilter(/*$$restProps*/ ctx[36], "input$")
			]));

			if (dirty[0] & /*value*/ 1) {
				set_input_value(input_1, /*value*/ ctx[0]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(input_1);
			/*input_1_binding*/ ctx[55](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(55:2) {:else}",
		ctx
	});

	return block;
}

// (19:2) {#if range}
function create_if_block_5(ctx) {
	let input0;
	let input0_class_value;
	let t;
	let input1;
	let input1_class_value;
	let mounted;
	let dispose;

	let input0_levels = [
		{
			class: input0_class_value = classMap({
				[/*input$class*/ ctx[12]]: true,
				"mdc-slider__input": true
			})
		},
		{ type: "range" },
		{ disabled: /*disabled*/ ctx[5] },
		{ step: /*step*/ ctx[9] },
		{ min: /*min*/ ctx[10] },
		{ max: /*end*/ ctx[2] },
		/*inputStartAttrs*/ ctx[24],
		prefixFilter(/*$$restProps*/ ctx[36], "input$")
	];

	let input0_data = {};

	for (let i = 0; i < input0_levels.length; i += 1) {
		input0_data = assign(input0_data, input0_levels[i]);
	}

	let input1_levels = [
		{
			class: input1_class_value = classMap({
				[/*input$class*/ ctx[12]]: true,
				"mdc-slider__input": true
			})
		},
		{ type: "range" },
		{ disabled: /*disabled*/ ctx[5] },
		{ step: /*step*/ ctx[9] },
		{ min: /*start*/ ctx[1] },
		{ max: /*max*/ ctx[11] },
		/*inputProps*/ ctx[32],
		/*inputAttrs*/ ctx[23],
		prefixFilter(/*$$restProps*/ ctx[36], "input$")
	];

	let input1_data = {};

	for (let i = 0; i < input1_levels.length; i += 1) {
		input1_data = assign(input1_data, input1_levels[i]);
	}

	const block = {
		c: function create() {
			input0 = element("input");
			t = space();
			input1 = element("input");
			this.h();
		},
		l: function claim(nodes) {
			input0 = claim_element(nodes, "INPUT", {
				class: true,
				type: true,
				disabled: true,
				step: true,
				min: true,
				max: true
			});

			t = claim_space(nodes);

			input1 = claim_element(nodes, "INPUT", {
				class: true,
				type: true,
				disabled: true,
				step: true,
				min: true,
				max: true
			});

			this.h();
		},
		h: function hydrate() {
			set_attributes(input0, input0_data);
			add_location(input0, file, 19, 4, 489);
			set_attributes(input1, input1_data);
			add_location(input1, file, 36, 4, 839);
		},
		m: function mount(target, anchor) {
			insert_dev(target, input0, anchor);
			/*input0_binding*/ ctx[51](input0);
			set_input_value(input0, /*start*/ ctx[1]);
			insert_dev(target, t, anchor);
			insert_dev(target, input1, anchor);
			/*input1_binding*/ ctx[53](input1);
			set_input_value(input1, /*end*/ ctx[2]);

			if (!mounted) {
				dispose = [
					listen_dev(input0, "change", /*input0_change_input_handler*/ ctx[52]),
					listen_dev(input0, "input", /*input0_change_input_handler*/ ctx[52]),
					listen_dev(input0, "blur", /*blur_handler*/ ctx[47], false, false, false),
					listen_dev(input0, "focus", /*focus_handler*/ ctx[48], false, false, false),
					listen_dev(input1, "change", /*input1_change_input_handler*/ ctx[54]),
					listen_dev(input1, "input", /*input1_change_input_handler*/ ctx[54]),
					listen_dev(input1, "blur", /*blur_handler_1*/ ctx[45], false, false, false),
					listen_dev(input1, "focus", /*focus_handler_1*/ ctx[46], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			set_attributes(input0, input0_data = get_spread_update(input0_levels, [
				dirty[0] & /*input$class*/ 4096 && input0_class_value !== (input0_class_value = classMap({
					[/*input$class*/ ctx[12]]: true,
					"mdc-slider__input": true
				})) && { class: input0_class_value },
				{ type: "range" },
				dirty[0] & /*disabled*/ 32 && { disabled: /*disabled*/ ctx[5] },
				dirty[0] & /*step*/ 512 && { step: /*step*/ ctx[9] },
				dirty[0] & /*min*/ 1024 && { min: /*min*/ ctx[10] },
				dirty[0] & /*end*/ 4 && { max: /*end*/ ctx[2] },
				dirty[0] & /*inputStartAttrs*/ 16777216 && /*inputStartAttrs*/ ctx[24],
				dirty[1] & /*$$restProps*/ 32 && prefixFilter(/*$$restProps*/ ctx[36], "input$")
			]));

			if (dirty[0] & /*start*/ 2) {
				set_input_value(input0, /*start*/ ctx[1]);
			}

			set_attributes(input1, input1_data = get_spread_update(input1_levels, [
				dirty[0] & /*input$class*/ 4096 && input1_class_value !== (input1_class_value = classMap({
					[/*input$class*/ ctx[12]]: true,
					"mdc-slider__input": true
				})) && { class: input1_class_value },
				{ type: "range" },
				dirty[0] & /*disabled*/ 32 && { disabled: /*disabled*/ ctx[5] },
				dirty[0] & /*step*/ 512 && { step: /*step*/ ctx[9] },
				dirty[0] & /*start*/ 2 && { min: /*start*/ ctx[1] },
				dirty[0] & /*max*/ 2048 && { max: /*max*/ ctx[11] },
				/*inputProps*/ ctx[32],
				dirty[0] & /*inputAttrs*/ 8388608 && /*inputAttrs*/ ctx[23],
				dirty[1] & /*$$restProps*/ 32 && prefixFilter(/*$$restProps*/ ctx[36], "input$")
			]));

			if (dirty[0] & /*end*/ 4) {
				set_input_value(input1, /*end*/ ctx[2]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(input0);
			/*input0_binding*/ ctx[51](null);
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(input1);
			/*input1_binding*/ ctx[53](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_5.name,
		type: "if",
		source: "(19:2) {#if range}",
		ctx
	});

	return block;
}

// (86:4) {#if discrete && tickMarks && step > 0}
function create_if_block_4(ctx) {
	let div;
	let each_value = /*currentTickMarks*/ ctx[30];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "mdc-slider__tick-marks");
			add_location(div, file, 86, 6, 1947);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currentTickMarks*/ 1073741824) {
				each_value = /*currentTickMarks*/ ctx[30];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4.name,
		type: "if",
		source: "(86:4) {#if discrete && tickMarks && step > 0}",
		ctx
	});

	return block;
}

// (88:8) {#each currentTickMarks as tickMark}
function create_each_block(ctx) {
	let div;
	let div_class_value;

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", div_class_value = /*tickMark*/ ctx[84] === TickMark.ACTIVE
			? "mdc-slider__tick-mark--active"
			: "mdc-slider__tick-mark--inactive");

			add_location(div, file, 88, 10, 2039);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*currentTickMarks*/ 1073741824 && div_class_value !== (div_class_value = /*tickMark*/ ctx[84] === TickMark.ACTIVE
			? "mdc-slider__tick-mark--active"
			: "mdc-slider__tick-mark--inactive")) {
				attr_dev(div, "class", div_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(88:8) {#each currentTickMarks as tickMark}",
		ctx
	});

	return block;
}

// (157:2) {:else}
function create_else_block(ctx) {
	let div1;
	let t;
	let div0;
	let div1_class_value;
	let div1_style_value;
	let Ripple_action;
	let mounted;
	let dispose;
	let if_block = /*discrete*/ ctx[7] && create_if_block_3(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			if (if_block) if_block.c();
			t = space();
			div0 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);
			if (if_block) if_block.l(div1_nodes);
			t = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "mdc-slider__thumb-knob");
			add_location(div0, file, 184, 6, 5154);

			attr_dev(div1, "class", div1_class_value = classMap({
				"mdc-slider__thumb": true,
				.../*thumbClasses*/ ctx[22]
			}));

			attr_dev(div1, "style", div1_style_value = Object.entries(/*thumbStyles*/ ctx[26]).map(func_3).join(" "));
			add_location(div1, file, 157, 4, 4281);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			if (if_block) if_block.m(div1, null);
			append_dev(div1, t);
			append_dev(div1, div0);
			/*div0_binding_1*/ ctx[67](div0);
			/*div1_binding_1*/ ctx[68](div1);

			if (!mounted) {
				dispose = action_destroyer(Ripple_action = Ripple.call(null, div1, {
					unbounded: true,
					disabled: /*disabled*/ ctx[5],
					active: /*thumbRippleActive*/ ctx[28],
					eventTarget: /*input*/ ctx[14],
					activeTarget: /*input*/ ctx[14],
					addClass: /*Ripple_function_6*/ ctx[69],
					removeClass: /*Ripple_function_7*/ ctx[70],
					addStyle: /*Ripple_function_8*/ ctx[71]
				}));

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*discrete*/ ctx[7]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_3(ctx);
					if_block.c();
					if_block.m(div1, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty[0] & /*thumbClasses*/ 4194304 && div1_class_value !== (div1_class_value = classMap({
				"mdc-slider__thumb": true,
				.../*thumbClasses*/ ctx[22]
			}))) {
				attr_dev(div1, "class", div1_class_value);
			}

			if (dirty[0] & /*thumbStyles*/ 67108864 && div1_style_value !== (div1_style_value = Object.entries(/*thumbStyles*/ ctx[26]).map(func_3).join(" "))) {
				attr_dev(div1, "style", div1_style_value);
			}

			if (Ripple_action && is_function(Ripple_action.update) && dirty[0] & /*disabled, thumbRippleActive, input*/ 268451872) Ripple_action.update.call(null, {
				unbounded: true,
				disabled: /*disabled*/ ctx[5],
				active: /*thumbRippleActive*/ ctx[28],
				eventTarget: /*input*/ ctx[14],
				activeTarget: /*input*/ ctx[14],
				addClass: /*Ripple_function_6*/ ctx[69],
				removeClass: /*Ripple_function_7*/ ctx[70],
				addStyle: /*Ripple_function_8*/ ctx[71]
			});
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (if_block) if_block.d();
			/*div0_binding_1*/ ctx[67](null);
			/*div1_binding_1*/ ctx[68](null);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(157:2) {:else}",
		ctx
	});

	return block;
}

// (98:2) {#if range}
function create_if_block(ctx) {
	let div1;
	let t0;
	let div0;
	let div1_class_value;
	let div1_style_value;
	let Ripple_action;
	let t1;
	let div3;
	let t2;
	let div2;
	let div3_class_value;
	let div3_style_value;
	let Ripple_action_1;
	let mounted;
	let dispose;
	let if_block0 = /*discrete*/ ctx[7] && create_if_block_2(ctx);
	let if_block1 = /*discrete*/ ctx[7] && create_if_block_1(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			div0 = element("div");
			t1 = space();
			div3 = element("div");
			if (if_block1) if_block1.c();
			t2 = space();
			div2 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);
			if (if_block0) if_block0.l(div1_nodes);
			t0 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);
			if (if_block1) if_block1.l(div3_nodes);
			t2 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "mdc-slider__thumb-knob");
			add_location(div0, file, 125, 6, 3210);

			attr_dev(div1, "class", div1_class_value = classMap({
				"mdc-slider__thumb": true,
				.../*thumbStartClasses*/ ctx[21]
			}));

			attr_dev(div1, "style", div1_style_value = Object.entries(/*thumbStartStyles*/ ctx[27]).map(func_1).join(" "));
			add_location(div1, file, 98, 4, 2270);
			attr_dev(div2, "class", "mdc-slider__thumb-knob");
			add_location(div2, file, 154, 6, 4195);

			attr_dev(div3, "class", div3_class_value = classMap({
				"mdc-slider__thumb": true,
				.../*thumbClasses*/ ctx[22]
			}));

			attr_dev(div3, "style", div3_style_value = Object.entries(/*thumbStyles*/ ctx[26]).map(func_2).join(" "));
			add_location(div3, file, 127, 4, 3291);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			if (if_block0) if_block0.m(div1, null);
			append_dev(div1, t0);
			append_dev(div1, div0);
			/*div0_binding*/ ctx[57](div0);
			/*div1_binding*/ ctx[58](div1);
			insert_dev(target, t1, anchor);
			insert_dev(target, div3, anchor);
			if (if_block1) if_block1.m(div3, null);
			append_dev(div3, t2);
			append_dev(div3, div2);
			/*div2_binding*/ ctx[62](div2);
			/*div3_binding*/ ctx[63](div3);

			if (!mounted) {
				dispose = [
					action_destroyer(Ripple_action = Ripple.call(null, div1, {
						unbounded: true,
						disabled: /*disabled*/ ctx[5],
						active: /*thumbStartRippleActive*/ ctx[29],
						eventTarget: /*inputStart*/ ctx[15],
						activeTarget: /*inputStart*/ ctx[15],
						addClass: /*Ripple_function*/ ctx[59],
						removeClass: /*Ripple_function_1*/ ctx[60],
						addStyle: /*Ripple_function_2*/ ctx[61]
					})),
					action_destroyer(Ripple_action_1 = Ripple.call(null, div3, {
						unbounded: true,
						disabled: /*disabled*/ ctx[5],
						active: /*thumbRippleActive*/ ctx[28],
						eventTarget: /*input*/ ctx[14],
						activeTarget: /*input*/ ctx[14],
						addClass: /*Ripple_function_3*/ ctx[64],
						removeClass: /*Ripple_function_4*/ ctx[65],
						addStyle: /*Ripple_function_5*/ ctx[66]
					}))
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*discrete*/ ctx[7]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div1, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty[0] & /*thumbStartClasses*/ 2097152 && div1_class_value !== (div1_class_value = classMap({
				"mdc-slider__thumb": true,
				.../*thumbStartClasses*/ ctx[21]
			}))) {
				attr_dev(div1, "class", div1_class_value);
			}

			if (dirty[0] & /*thumbStartStyles*/ 134217728 && div1_style_value !== (div1_style_value = Object.entries(/*thumbStartStyles*/ ctx[27]).map(func_1).join(" "))) {
				attr_dev(div1, "style", div1_style_value);
			}

			if (Ripple_action && is_function(Ripple_action.update) && dirty[0] & /*disabled, thumbStartRippleActive, inputStart*/ 536903712) Ripple_action.update.call(null, {
				unbounded: true,
				disabled: /*disabled*/ ctx[5],
				active: /*thumbStartRippleActive*/ ctx[29],
				eventTarget: /*inputStart*/ ctx[15],
				activeTarget: /*inputStart*/ ctx[15],
				addClass: /*Ripple_function*/ ctx[59],
				removeClass: /*Ripple_function_1*/ ctx[60],
				addStyle: /*Ripple_function_2*/ ctx[61]
			});

			if (/*discrete*/ ctx[7]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div3, t2);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty[0] & /*thumbClasses*/ 4194304 && div3_class_value !== (div3_class_value = classMap({
				"mdc-slider__thumb": true,
				.../*thumbClasses*/ ctx[22]
			}))) {
				attr_dev(div3, "class", div3_class_value);
			}

			if (dirty[0] & /*thumbStyles*/ 67108864 && div3_style_value !== (div3_style_value = Object.entries(/*thumbStyles*/ ctx[26]).map(func_2).join(" "))) {
				attr_dev(div3, "style", div3_style_value);
			}

			if (Ripple_action_1 && is_function(Ripple_action_1.update) && dirty[0] & /*disabled, thumbRippleActive, input*/ 268451872) Ripple_action_1.update.call(null, {
				unbounded: true,
				disabled: /*disabled*/ ctx[5],
				active: /*thumbRippleActive*/ ctx[28],
				eventTarget: /*input*/ ctx[14],
				activeTarget: /*input*/ ctx[14],
				addClass: /*Ripple_function_3*/ ctx[64],
				removeClass: /*Ripple_function_4*/ ctx[65],
				addStyle: /*Ripple_function_5*/ ctx[66]
			});
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (if_block0) if_block0.d();
			/*div0_binding*/ ctx[57](null);
			/*div1_binding*/ ctx[58](null);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div3);
			if (if_block1) if_block1.d();
			/*div2_binding*/ ctx[62](null);
			/*div3_binding*/ ctx[63](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(98:2) {#if range}",
		ctx
	});

	return block;
}

// (178:6) {#if discrete}
function create_if_block_3(ctx) {
	let div1;
	let div0;
	let span;
	let t;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			span = element("span");
			t = text(/*value*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, "aria-hidden": true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			span = claim_element(div0_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, /*value*/ ctx[0]);
			span_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "mdc-slider__value-indicator-text");
			add_location(span, file, 180, 12, 5042);
			attr_dev(div0, "class", "mdc-slider__value-indicator");
			add_location(div0, file, 179, 10, 4988);
			attr_dev(div1, "class", "mdc-slider__value-indicator-container");
			attr_dev(div1, "aria-hidden", "true");
			add_location(div1, file, 178, 8, 4907);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, span);
			append_dev(span, t);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*value*/ 1) set_data_dev(t, /*value*/ ctx[0]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(178:6) {#if discrete}",
		ctx
	});

	return block;
}

// (119:6) {#if discrete}
function create_if_block_2(ctx) {
	let div1;
	let div0;
	let span;
	let t;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			span = element("span");
			t = text(/*start*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, "aria-hidden": true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			span = claim_element(div0_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, /*start*/ ctx[1]);
			span_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "mdc-slider__value-indicator-text");
			add_location(span, file, 121, 12, 3098);
			attr_dev(div0, "class", "mdc-slider__value-indicator");
			add_location(div0, file, 120, 10, 3044);
			attr_dev(div1, "class", "mdc-slider__value-indicator-container");
			attr_dev(div1, "aria-hidden", "true");
			add_location(div1, file, 119, 8, 2963);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, span);
			append_dev(span, t);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*start*/ 2) set_data_dev(t, /*start*/ ctx[1]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(119:6) {#if discrete}",
		ctx
	});

	return block;
}

// (148:6) {#if discrete}
function create_if_block_1(ctx) {
	let div1;
	let div0;
	let span;
	let t;

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			span = element("span");
			t = text(/*end*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, "aria-hidden": true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			span = claim_element(div0_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, /*end*/ ctx[2]);
			span_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "mdc-slider__value-indicator-text");
			add_location(span, file, 150, 12, 4085);
			attr_dev(div0, "class", "mdc-slider__value-indicator");
			add_location(div0, file, 149, 10, 4031);
			attr_dev(div1, "class", "mdc-slider__value-indicator-container");
			attr_dev(div1, "aria-hidden", "true");
			add_location(div1, file, 148, 8, 3950);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, span);
			append_dev(span, t);
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*end*/ 4) set_data_dev(t, /*end*/ ctx[2]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(148:6) {#if discrete}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div4;
	let t0;
	let div3;
	let div0;
	let t1;
	let div2;
	let div1;
	let div1_style_value;
	let t2;
	let t3;
	let div4_class_value;
	let useActions_action;
	let mounted;
	let dispose;

	function select_block_type(ctx, dirty) {
		if (/*range*/ ctx[6]) return create_if_block_5;
		return create_else_block_1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*discrete*/ ctx[7] && /*tickMarks*/ ctx[8] && /*step*/ ctx[9] > 0 && create_if_block_4(ctx);

	function select_block_type_1(ctx, dirty) {
		if (/*range*/ ctx[6]) return create_if_block;
		return create_else_block;
	}

	let current_block_type_1 = select_block_type_1(ctx);
	let if_block2 = current_block_type_1(ctx);

	let div4_levels = [
		{
			class: div4_class_value = Object.entries({
				[/*className*/ ctx[4]]: true,
				"mdc-slider": true,
				"mdc-slider--range": /*range*/ ctx[6],
				"mdc-slider--discrete": /*discrete*/ ctx[7],
				"mdc-slider--tick-marks": /*discrete*/ ctx[7] && /*tickMarks*/ ctx[8],
				"mdc-slider--disabled": /*disabled*/ ctx[5],
				.../*internalClasses*/ ctx[20]
			}).filter(func_4).map(func_5).join(" ")
		},
		exclude(/*$$restProps*/ ctx[36], ["input$"])
	];

	let div4_data = {};

	for (let i = 0; i < div4_levels.length; i += 1) {
		div4_data = assign(div4_data, div4_levels[i]);
	}

	const block = {
		c: function create() {
			div4 = element("div");
			if_block0.c();
			t0 = space();
			div3 = element("div");
			div0 = element("div");
			t1 = space();
			div2 = element("div");
			div1 = element("div");
			t2 = space();
			if (if_block1) if_block1.c();
			t3 = space();
			if_block2.c();
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			if_block0.l(div4_nodes);
			t0 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true, style: true });
			children(div1).forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			if (if_block1) if_block1.l(div3_nodes);
			div3_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			if_block2.l(div4_nodes);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "mdc-slider__track--inactive");
			add_location(div0, file, 76, 4, 1604);
			attr_dev(div1, "class", "mdc-slider__track--active_fill");
			attr_dev(div1, "style", div1_style_value = Object.entries(/*trackActiveStyles*/ ctx[25]).map(func).join(" "));
			add_location(div1, file, 78, 6, 1698);
			attr_dev(div2, "class", "mdc-slider__track--active");
			add_location(div2, file, 77, 4, 1652);
			attr_dev(div3, "class", "mdc-slider__track");
			add_location(div3, file, 75, 2, 1568);
			set_attributes(div4, div4_data);
			add_location(div4, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			if_block0.m(div4, null);
			append_dev(div4, t0);
			append_dev(div4, div3);
			append_dev(div3, div0);
			append_dev(div3, t1);
			append_dev(div3, div2);
			append_dev(div2, div1);
			append_dev(div3, t2);
			if (if_block1) if_block1.m(div3, null);
			append_dev(div4, t3);
			if_block2.m(div4, null);
			/*div4_binding*/ ctx[72](div4);

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div4, /*use*/ ctx[3])),
					action_destroyer(/*forwardEvents*/ ctx[31].call(null, div4))
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div4, t0);
				}
			}

			if (dirty[0] & /*trackActiveStyles*/ 33554432 && div1_style_value !== (div1_style_value = Object.entries(/*trackActiveStyles*/ ctx[25]).map(func).join(" "))) {
				attr_dev(div1, "style", div1_style_value);
			}

			if (/*discrete*/ ctx[7] && /*tickMarks*/ ctx[8] && /*step*/ ctx[9] > 0) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block_4(ctx);
					if_block1.c();
					if_block1.m(div3, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (current_block_type_1 === (current_block_type_1 = select_block_type_1(ctx)) && if_block2) {
				if_block2.p(ctx, dirty);
			} else {
				if_block2.d(1);
				if_block2 = current_block_type_1(ctx);

				if (if_block2) {
					if_block2.c();
					if_block2.m(div4, null);
				}
			}

			set_attributes(div4, div4_data = get_spread_update(div4_levels, [
				dirty[0] & /*className, range, discrete, tickMarks, disabled, internalClasses*/ 1049072 && div4_class_value !== (div4_class_value = Object.entries({
					[/*className*/ ctx[4]]: true,
					"mdc-slider": true,
					"mdc-slider--range": /*range*/ ctx[6],
					"mdc-slider--discrete": /*discrete*/ ctx[7],
					"mdc-slider--tick-marks": /*discrete*/ ctx[7] && /*tickMarks*/ ctx[8],
					"mdc-slider--disabled": /*disabled*/ ctx[5],
					.../*internalClasses*/ ctx[20]
				}).filter(func_4).map(func_5).join(" ")) && { class: div4_class_value },
				dirty[1] & /*$$restProps*/ 32 && exclude(/*$$restProps*/ ctx[36], ["input$"])
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 8) useActions_action.update.call(null, /*use*/ ctx[3]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			if_block0.d();
			if (if_block1) if_block1.d();
			if_block2.d();
			/*div4_binding*/ ctx[72](null);
			mounted = false;
			run_all(dispose);
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

const func = ([name, value]) => `${name}: ${value};`;
const func_1 = ([name, value]) => `${name}: ${value};`;
const func_2 = ([name, value]) => `${name}: ${value};`;
const func_3 = ([name, value]) => `${name}: ${value};`;
const func_4 = ([name, value]) => name !== "" && value;
const func_5 = ([name]) => name;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","disabled","range","discrete","tickMarks","step","min","max","value","start","end","valueToAriaValueTextFn","input$class","layout","getId","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Slider", slots, []);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { disabled = false } = $$props;
	let { range = false } = $$props;
	let { discrete = false } = $$props;
	let { tickMarks = false } = $$props;
	let { step = 1 } = $$props;
	let { min = 0 } = $$props;
	let { max = 100 } = $$props;
	let { value = null } = $$props;
	let { start = null } = $$props;
	let { end = null } = $$props;
	let { valueToAriaValueTextFn = value => `${value}` } = $$props;
	let { input$class = "" } = $$props;
	let element;
	let instance;
	let input;
	let inputStart;
	let thumbEl;
	let thumbStart;
	let thumbKnob;
	let thumbKnobStart;
	let internalClasses = {};
	let thumbStartClasses = {};
	let thumbClasses = {};
	let inputAttrs = {};
	let inputStartAttrs = {};
	let trackActiveStyles = {};
	let thumbStyles = {};
	let thumbStartStyles = {};
	let thumbRippleActive = false;
	let thumbStartRippleActive = false;
	let currentTickMarks;
	let inputProps = getContext("SMUI:generic:input:props") || {};
	let addLayoutListener = getContext("SMUI:addLayoutListener");
	let removeLayoutListener;

	if (tickMarks && step > 0) {
		const absMax = max + Math.abs(min);

		if (range) {
			const absStart = start + Math.abs(min);

			currentTickMarks = [
				...Array(absStart / step).map(() => TickMark.INACTIVE),
				...Array(absMax / step - absStart / step - (absMax - absMax) / step + 1).map(() => TickMark.ACTIVE),
				...Array((absMax - absMax) / step).map(() => TickMark.INACTIVE)
			];
		} else {
			const absValue = value + Math.abs(min);

			currentTickMarks = [
				...Array(absValue / step + 1).map(() => TickMark.ACTIVE),
				...Array((absMax - absValue) / step).map(() => TickMark.INACTIVE)
			];
		}
	}

	if (range) {
		const percent = (end - start) / (max - min);
		const percentStart = start / (max - min);
		const percentEnd = end / (max - min);
		trackActiveStyles.transform = `scaleX(${percent})`;
		thumbStyles.left = `calc(${percentEnd * 100}% -24px)`;
		thumbStartStyles.left = `calc(${percentStart * 100}% -24px)`;
	} else {
		const percent = value / (max - min);
		trackActiveStyles.transform = `scaleX(${percent})`;
		thumbStyles.left = `calc(${percent * 100}% -24px)`;
	}

	if (addLayoutListener) {
		removeLayoutListener = addLayoutListener(layout);
	}

	let previousValue = value;
	let previousStart = start;
	let previousEnd = end;

	onMount(() => {
		$$invalidate(41, instance = new MDCSliderFoundation({
				hasClass,
				addClass,
				removeClass,
				addThumbClass,
				removeThumbClass,
				getAttribute: attribute => getElement().getAttribute(attribute),
				getInputValue: thumb => range ? thumb === Thumb.START ? start : end : value,
				setInputValue: (val, thumb) => {
					if (range) {
						if (thumb === Thumb.START) {
							$$invalidate(1, start = Number(val));
							$$invalidate(43, previousStart = start);
						} else {
							$$invalidate(2, end = Number(val));
							$$invalidate(44, previousEnd = end);
						}
					} else {
						$$invalidate(0, value = Number(val));
						$$invalidate(42, previousValue = value);
					}
				},
				getInputAttribute: getInputAttr,
				setInputAttribute: addInputAttr,
				removeInputAttribute: removeInputAttr,
				focusInput: thumb => {
					if (range && thumb === Thumb.START) {
						inputStart.focus();
					} else {
						input.focus();
					}
				},
				isInputFocused: thumb => (range && thumb === Thumb.START ? inputStart : input) === document.activeElement,
				getThumbKnobWidth: thumb => (range && thumb === Thumb.START
				? thumbKnobStart
				: thumbKnob).getBoundingClientRect().width,
				getThumbBoundingClientRect: thumb => (range && thumb === Thumb.START ? thumbStart : thumbEl).getBoundingClientRect(),
				getBoundingClientRect: () => getElement().getBoundingClientRect(),
				isRTL: () => getComputedStyle(getElement()).direction === "rtl",
				setThumbStyleProperty: addThumbStyle,
				removeThumbStyleProperty: removeThumbStyle,
				setTrackActiveStyleProperty: addTrackActiveStyle,
				removeTrackActiveStyleProperty: removeTrackActiveStyle,
				// Handled by Svelte.
				setValueIndicatorText: (_value, _thumb) => undefined,
				getValueToAriaValueTextFn: () => valueToAriaValueTextFn,
				updateTickMarks: tickMarks => {
					$$invalidate(30, currentTickMarks = tickMarks);
				},
				setPointerCapture: pointerId => {
					getElement().setPointerCapture(pointerId);
				},
				emitChangeEvent: (value, thumb) => {
					dispatch(getElement(), "MDCSlider:change", { value, thumb });
				},
				emitInputEvent: (value, thumb) => {
					dispatch(getElement(), "MDCSlider:input", { value, thumb });
				},
				emitDragStartEvent: (_, thumb) => {
					// Emitting event is not yet implemented. See issue:
					// https://github.com/material-components/material-components-web/issues/6448
					if (range && thumb === Thumb.START) {
						$$invalidate(29, thumbStartRippleActive = true);
					} else {
						$$invalidate(28, thumbRippleActive = true);
					}
				},
				emitDragEndEvent: (_, thumb) => {
					// Emitting event is not yet implemented. See issue:
					// https://github.com/material-components/material-components-web/issues/6448
					if (range && thumb === Thumb.START) {
						$$invalidate(29, thumbStartRippleActive = false);
					} else {
						$$invalidate(28, thumbRippleActive = false);
					}
				},
				registerEventHandler: (evtType, handler) => {
					getElement().addEventListener(evtType, handler);
				},
				deregisterEventHandler: (evtType, handler) => {
					getElement().removeEventListener(evtType, handler);
				},
				registerThumbEventHandler: (thumb, evtType, handler) => {
					(range && thumb === Thumb.START ? thumbStart : thumbEl).addEventListener(evtType, handler);
				},
				deregisterThumbEventHandler: (thumb, evtType, handler) => {
					(range && thumb === Thumb.START ? thumbStart : thumbEl).removeEventListener(evtType, handler);
				},
				registerInputEventHandler: (thumb, evtType, handler) => {
					(range && thumb === Thumb.START ? inputStart : input).addEventListener(evtType, handler);
				},
				deregisterInputEventHandler: (thumb, evtType, handler) => {
					(range && thumb === Thumb.START ? inputStart : input).removeEventListener(evtType, handler);
				},
				registerBodyEventHandler: (evtType, handler) => {
					document.body.addEventListener(evtType, handler);
				},
				deregisterBodyEventHandler: (evtType, handler) => {
					document.body.removeEventListener(evtType, handler);
				},
				registerWindowEventHandler: (evtType, handler) => {
					window.addEventListener(evtType, handler);
				},
				deregisterWindowEventHandler: (evtType, handler) => {
					window.removeEventListener(evtType, handler);
				}
			}));

		const accessor = {
			get element() {
				return getElement();
			},
			activateRipple() {
				if (!disabled) {
					$$invalidate(28, thumbRippleActive = true);
				}
			},
			deactivateRipple() {
				$$invalidate(28, thumbRippleActive = false);
			}
		};

		dispatch(element, "SMUI:generic:input:mount", accessor);
		instance.init();
		instance.layout(true);

		return () => {
			dispatch(element, "SMUI:generic:input:unmount", accessor);
			instance.destroy();
		};
	});

	onDestroy(() => {
		if (removeLayoutListener) {
			removeLayoutListener();
		}
	});

	function hasClass(className) {
		return className in internalClasses
		? internalClasses[className]
		: getElement().classList.contains(className);
	}

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(20, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(20, internalClasses[className] = false, internalClasses);
		}
	}

	function addThumbClass(className, thumb) {
		if (range && thumb === Thumb.START) {
			if (!thumbStartClasses[className]) {
				$$invalidate(21, thumbStartClasses[className] = true, thumbStartClasses);
			}
		} else {
			if (!thumbClasses[className]) {
				$$invalidate(22, thumbClasses[className] = true, thumbClasses);
			}
		}
	}

	function removeThumbClass(className, thumb) {
		if (range && thumb === Thumb.START) {
			if (!(className in thumbStartClasses) || thumbStartClasses[className]) {
				$$invalidate(21, thumbStartClasses[className] = false, thumbStartClasses);
			}
		} else {
			if (!(className in thumbClasses) || thumbClasses[className]) {
				$$invalidate(22, thumbClasses[className] = false, thumbClasses);
			}
		}
	}

	function addThumbStyle(name, value, thumb) {
		if (range && thumb === Thumb.START) {
			if (thumbStartStyles[name] != value) {
				if (value === "" || value == null) {
					delete thumbStartStyles[name];
					$$invalidate(27, thumbStartStyles);
				} else {
					$$invalidate(27, thumbStartStyles[name] = value, thumbStartStyles);
				}
			}
		} else {
			if (thumbStyles[name] != value) {
				if (value === "" || value == null) {
					delete thumbStyles[name];
					$$invalidate(26, thumbStyles);
				} else {
					$$invalidate(26, thumbStyles[name] = value, thumbStyles);
				}
			}
		}
	}

	function removeThumbStyle(name, thumb) {
		if (range && thumb === Thumb.START) {
			if (name in thumbStartStyles) {
				delete thumbStartStyles[name];
				$$invalidate(27, thumbStartStyles);
			}
		} else {
			if (name in thumbStyles) {
				delete thumbStyles[name];
				$$invalidate(26, thumbStyles);
			}
		}
	}

	function getInputAttr(name, thumb) {
		// Some custom logic for "value", since Svelte doesn't seem to actually
		// set the attribute, just the DOM property.
		if (range && thumb === Thumb.START) {
			if (name === "value") {
				return `${start}`;
			}

			return name in inputStartAttrs
			? inputStartAttrs[name]
			: inputStart.getAttribute(name);
		} else {
			if (name === "value") {
				return `${range ? end : value}`;
			}

			return name in inputAttrs
			? inputAttrs[name]
			: input.getAttribute(name);
		}
	}

	function addInputAttr(name, value, thumb) {
		if (range && thumb === Thumb.START) {
			if (inputStartAttrs[name] !== value) {
				$$invalidate(24, inputStartAttrs[name] = value, inputStartAttrs);
			}
		} else {
			if (inputAttrs[name] !== value) {
				$$invalidate(23, inputAttrs[name] = value, inputAttrs);
			}
		}
	}

	function removeInputAttr(name, thumb) {
		if (range && thumb === Thumb.START) {
			if (!(name in inputStartAttrs) || inputStartAttrs[name] != null) {
				$$invalidate(24, inputStartAttrs[name] = undefined, inputStartAttrs);
			}
		} else {
			if (!(name in inputAttrs) || inputAttrs[name] != null) {
				$$invalidate(23, inputAttrs[name] = undefined, inputAttrs);
			}
		}
	}

	function addTrackActiveStyle(name, value) {
		if (trackActiveStyles[name] != value) {
			if (value === "" || value == null) {
				delete trackActiveStyles[name];
				$$invalidate(25, trackActiveStyles);
			} else {
				$$invalidate(25, trackActiveStyles[name] = value, trackActiveStyles);
			}
		}
	}

	function removeTrackActiveStyle(name) {
		if (name in trackActiveStyles) {
			delete trackActiveStyles[name];
			$$invalidate(25, trackActiveStyles);
		}
	}

	function layout() {
		return instance.layout();
	}

	function getId() {
		return inputProps && inputProps.id;
	}

	function getElement() {
		return element;
	}

	function blur_handler_1(event) {
		bubble($$self, event);
	}

	function focus_handler_1(event) {
		bubble($$self, event);
	}

	function blur_handler(event) {
		bubble($$self, event);
	}

	function focus_handler(event) {
		bubble($$self, event);
	}

	function blur_handler_2(event) {
		bubble($$self, event);
	}

	function focus_handler_2(event) {
		bubble($$self, event);
	}

	function input0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			inputStart = $$value;
			$$invalidate(15, inputStart);
		});
	}

	function input0_change_input_handler() {
		start = to_number(this.value);
		$$invalidate(1, start);
	}

	function input1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			input = $$value;
			$$invalidate(14, input);
		});
	}

	function input1_change_input_handler() {
		end = to_number(this.value);
		$$invalidate(2, end);
	}

	function input_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			input = $$value;
			$$invalidate(14, input);
		});
	}

	function input_1_change_input_handler() {
		value = to_number(this.value);
		$$invalidate(0, value);
	}

	function div0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			thumbKnobStart = $$value;
			$$invalidate(19, thumbKnobStart);
		});
	}

	function div1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			thumbStart = $$value;
			$$invalidate(17, thumbStart);
		});
	}

	const Ripple_function = className => addThumbClass(className, Thumb.START);
	const Ripple_function_1 = className => removeThumbClass(className, Thumb.START);
	const Ripple_function_2 = (name, value) => addThumbStyle(name, value, Thumb.START);

	function div2_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			thumbKnob = $$value;
			$$invalidate(18, thumbKnob);
		});
	}

	function div3_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			thumbEl = $$value;
			$$invalidate(16, thumbEl);
		});
	}

	const Ripple_function_3 = className => addThumbClass(className, Thumb.END);
	const Ripple_function_4 = className => removeThumbClass(className, Thumb.END);
	const Ripple_function_5 = (name, value) => addThumbStyle(name, value, Thumb.END);

	function div0_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			thumbKnob = $$value;
			$$invalidate(18, thumbKnob);
		});
	}

	function div1_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			thumbEl = $$value;
			$$invalidate(16, thumbEl);
		});
	}

	const Ripple_function_6 = className => addThumbClass(className);
	const Ripple_function_7 = className => removeThumbClass(className);
	const Ripple_function_8 = (name, value) => addThumbStyle(name, value);

	function div4_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(13, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(36, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(3, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(4, className = $$new_props.class);
		if ("disabled" in $$new_props) $$invalidate(5, disabled = $$new_props.disabled);
		if ("range" in $$new_props) $$invalidate(6, range = $$new_props.range);
		if ("discrete" in $$new_props) $$invalidate(7, discrete = $$new_props.discrete);
		if ("tickMarks" in $$new_props) $$invalidate(8, tickMarks = $$new_props.tickMarks);
		if ("step" in $$new_props) $$invalidate(9, step = $$new_props.step);
		if ("min" in $$new_props) $$invalidate(10, min = $$new_props.min);
		if ("max" in $$new_props) $$invalidate(11, max = $$new_props.max);
		if ("value" in $$new_props) $$invalidate(0, value = $$new_props.value);
		if ("start" in $$new_props) $$invalidate(1, start = $$new_props.start);
		if ("end" in $$new_props) $$invalidate(2, end = $$new_props.end);
		if ("valueToAriaValueTextFn" in $$new_props) $$invalidate(37, valueToAriaValueTextFn = $$new_props.valueToAriaValueTextFn);
		if ("input$class" in $$new_props) $$invalidate(12, input$class = $$new_props.input$class);
	};

	$$self.$capture_state = () => ({
		MDCSliderFoundation,
		Thumb,
		TickMark,
		onMount,
		onDestroy,
		getContext,
		tick,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		exclude,
		prefixFilter,
		useActions,
		dispatch,
		Ripple,
		forwardEvents,
		use,
		className,
		disabled,
		range,
		discrete,
		tickMarks,
		step,
		min,
		max,
		value,
		start,
		end,
		valueToAriaValueTextFn,
		input$class,
		element,
		instance,
		input,
		inputStart,
		thumbEl,
		thumbStart,
		thumbKnob,
		thumbKnobStart,
		internalClasses,
		thumbStartClasses,
		thumbClasses,
		inputAttrs,
		inputStartAttrs,
		trackActiveStyles,
		thumbStyles,
		thumbStartStyles,
		thumbRippleActive,
		thumbStartRippleActive,
		currentTickMarks,
		inputProps,
		addLayoutListener,
		removeLayoutListener,
		previousValue,
		previousStart,
		previousEnd,
		hasClass,
		addClass,
		removeClass,
		addThumbClass,
		removeThumbClass,
		addThumbStyle,
		removeThumbStyle,
		getInputAttr,
		addInputAttr,
		removeInputAttr,
		addTrackActiveStyle,
		removeTrackActiveStyle,
		layout,
		getId,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(3, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(4, className = $$new_props.className);
		if ("disabled" in $$props) $$invalidate(5, disabled = $$new_props.disabled);
		if ("range" in $$props) $$invalidate(6, range = $$new_props.range);
		if ("discrete" in $$props) $$invalidate(7, discrete = $$new_props.discrete);
		if ("tickMarks" in $$props) $$invalidate(8, tickMarks = $$new_props.tickMarks);
		if ("step" in $$props) $$invalidate(9, step = $$new_props.step);
		if ("min" in $$props) $$invalidate(10, min = $$new_props.min);
		if ("max" in $$props) $$invalidate(11, max = $$new_props.max);
		if ("value" in $$props) $$invalidate(0, value = $$new_props.value);
		if ("start" in $$props) $$invalidate(1, start = $$new_props.start);
		if ("end" in $$props) $$invalidate(2, end = $$new_props.end);
		if ("valueToAriaValueTextFn" in $$props) $$invalidate(37, valueToAriaValueTextFn = $$new_props.valueToAriaValueTextFn);
		if ("input$class" in $$props) $$invalidate(12, input$class = $$new_props.input$class);
		if ("element" in $$props) $$invalidate(13, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(41, instance = $$new_props.instance);
		if ("input" in $$props) $$invalidate(14, input = $$new_props.input);
		if ("inputStart" in $$props) $$invalidate(15, inputStart = $$new_props.inputStart);
		if ("thumbEl" in $$props) $$invalidate(16, thumbEl = $$new_props.thumbEl);
		if ("thumbStart" in $$props) $$invalidate(17, thumbStart = $$new_props.thumbStart);
		if ("thumbKnob" in $$props) $$invalidate(18, thumbKnob = $$new_props.thumbKnob);
		if ("thumbKnobStart" in $$props) $$invalidate(19, thumbKnobStart = $$new_props.thumbKnobStart);
		if ("internalClasses" in $$props) $$invalidate(20, internalClasses = $$new_props.internalClasses);
		if ("thumbStartClasses" in $$props) $$invalidate(21, thumbStartClasses = $$new_props.thumbStartClasses);
		if ("thumbClasses" in $$props) $$invalidate(22, thumbClasses = $$new_props.thumbClasses);
		if ("inputAttrs" in $$props) $$invalidate(23, inputAttrs = $$new_props.inputAttrs);
		if ("inputStartAttrs" in $$props) $$invalidate(24, inputStartAttrs = $$new_props.inputStartAttrs);
		if ("trackActiveStyles" in $$props) $$invalidate(25, trackActiveStyles = $$new_props.trackActiveStyles);
		if ("thumbStyles" in $$props) $$invalidate(26, thumbStyles = $$new_props.thumbStyles);
		if ("thumbStartStyles" in $$props) $$invalidate(27, thumbStartStyles = $$new_props.thumbStartStyles);
		if ("thumbRippleActive" in $$props) $$invalidate(28, thumbRippleActive = $$new_props.thumbRippleActive);
		if ("thumbStartRippleActive" in $$props) $$invalidate(29, thumbStartRippleActive = $$new_props.thumbStartRippleActive);
		if ("currentTickMarks" in $$props) $$invalidate(30, currentTickMarks = $$new_props.currentTickMarks);
		if ("inputProps" in $$props) $$invalidate(32, inputProps = $$new_props.inputProps);
		if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
		if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
		if ("previousValue" in $$props) $$invalidate(42, previousValue = $$new_props.previousValue);
		if ("previousStart" in $$props) $$invalidate(43, previousStart = $$new_props.previousStart);
		if ("previousEnd" in $$props) $$invalidate(44, previousEnd = $$new_props.previousEnd);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*value, start, end*/ 7 | $$self.$$.dirty[1] & /*instance, previousValue, previousStart, previousEnd*/ 15360) {
			if (instance) {
				if (previousValue !== value) {
					instance.setValue(value);
				}

				if (previousStart !== start) {
					instance.setValueStart(start);
				}

				if (previousEnd !== end) {
					instance.setValue(end);
				}

				$$invalidate(42, previousValue = value);
				$$invalidate(43, previousStart = start);
				$$invalidate(44, previousEnd = end);

				// Needed for range start to take effect.
				instance.layout();
			}
		}
	};

	return [
		value,
		start,
		end,
		use,
		className,
		disabled,
		range,
		discrete,
		tickMarks,
		step,
		min,
		max,
		input$class,
		element,
		input,
		inputStart,
		thumbEl,
		thumbStart,
		thumbKnob,
		thumbKnobStart,
		internalClasses,
		thumbStartClasses,
		thumbClasses,
		inputAttrs,
		inputStartAttrs,
		trackActiveStyles,
		thumbStyles,
		thumbStartStyles,
		thumbRippleActive,
		thumbStartRippleActive,
		currentTickMarks,
		forwardEvents,
		inputProps,
		addThumbClass,
		removeThumbClass,
		addThumbStyle,
		$$restProps,
		valueToAriaValueTextFn,
		layout,
		getId,
		getElement,
		instance,
		previousValue,
		previousStart,
		previousEnd,
		blur_handler_1,
		focus_handler_1,
		blur_handler,
		focus_handler,
		blur_handler_2,
		focus_handler_2,
		input0_binding,
		input0_change_input_handler,
		input1_binding,
		input1_change_input_handler,
		input_1_binding,
		input_1_change_input_handler,
		div0_binding,
		div1_binding,
		Ripple_function,
		Ripple_function_1,
		Ripple_function_2,
		div2_binding,
		div3_binding,
		Ripple_function_3,
		Ripple_function_4,
		Ripple_function_5,
		div0_binding_1,
		div1_binding_1,
		Ripple_function_6,
		Ripple_function_7,
		Ripple_function_8,
		div4_binding
	];
}

class Slider extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1,
			create_fragment,
			safe_not_equal,
			{
				use: 3,
				class: 4,
				disabled: 5,
				range: 6,
				discrete: 7,
				tickMarks: 8,
				step: 9,
				min: 10,
				max: 11,
				value: 0,
				start: 1,
				end: 2,
				valueToAriaValueTextFn: 37,
				input$class: 12,
				layout: 38,
				getId: 39,
				getElement: 40
			},
			[-1, -1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Slider",
			options,
			id: create_fragment.name
		});
	}

	get use() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get range() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set range(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get discrete() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set discrete(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tickMarks() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tickMarks(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get step() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set step(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get min() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set min(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get max() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set max(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get start() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set start(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get end() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set end(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get valueToAriaValueTextFn() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set valueToAriaValueTextFn(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get input$class() {
		throw new Error("<Slider>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set input$class(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get layout() {
		return this.$$.ctx[38];
	}

	set layout(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getId() {
		return this.$$.ctx[39];
	}

	set getId(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[40];
	}

	set getElement(value) {
		throw new Error("<Slider>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Slider as S };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLjkxYWMyOGE3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWNrYWdlcy9zbGlkZXIvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NsaWRlci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NsaWRlci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9ldmVudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbGlkZXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbGlkZXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc2xpZGVyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbGlkZXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NsaWRlci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NsaWRlci9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbGlkZXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9hbmltYXRpb24vYW5pbWF0aW9uZnJhbWUuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbGlkZXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9hbmltYXRpb24vdXRpbC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NsaWRlci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NsaWRlci90eXBlcy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NsaWRlci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NsaWRlci9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc2xpZGVyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZm9yd2FyZEV2ZW50c0J1aWxkZXIuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbGlkZXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9jbGFzc01hcC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NsaWRlci9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2Rpc3BhdGNoLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc2xpZGVyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZXhjbHVkZS5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NsaWRlci9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL3ByZWZpeEZpbHRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NsaWRlci9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbGlkZXIvbm9kZV9tb2R1bGVzL0BzbXVpL3JpcHBsZS9SaXBwbGUuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbGlkZXIvU2xpZGVyLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgICAgICAgICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgICAgICAgICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopID9cbiAgICAgICAgeyBwYXNzaXZlOiB0cnVlIH0gOlxuICAgICAgICBmYWxzZTtcbn1cbmZ1bmN0aW9uIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgLy8gU2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXJcbiAgICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBicm93c2VyXG4gICAgICAgICAgICAvLyBhdHRlbXB0cyB0byBhY2Nlc3MgdGhlIHBhc3NpdmUgcHJvcGVydHkuXG4gICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8qKlxuICogVXNlZCB0byBjb21wdXRlIHRoZSBlc3RpbWF0ZWQgc2Nyb2xsIHdpZHRoIG9mIGVsZW1lbnRzLiBXaGVuIGFuIGVsZW1lbnQgaXNcbiAqIGhpZGRlbiBkdWUgdG8gZGlzcGxheTogbm9uZTsgYmVpbmcgYXBwbGllZCB0byBhIHBhcmVudCBlbGVtZW50LCB0aGUgd2lkdGggaXNcbiAqIHJldHVybmVkIGFzIDAuIEhvd2V2ZXIsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhIHRydWUgd2lkdGggb25jZSBubyBsb25nZXJcbiAqIGluc2lkZSBhIGRpc3BsYXk6IG5vbmUgY29udGV4dC4gVGhpcyBtZXRob2QgY29tcHV0ZXMgYW4gZXN0aW1hdGVkIHdpZHRoIHdoZW5cbiAqIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBvciByZXR1cm5zIHRoZSB0cnVlIHdpZHRoIHdoZW4gdGhlIGVsZW1lbnQgaXMgdmlzYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IHdob3NlIHdpZHRoIHRvIGVzdGltYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZVNjcm9sbFdpZHRoKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayB0aGUgb2Zmc2V0UGFyZW50LiBJZiB0aGUgZWxlbWVudCBpbmhlcml0cyBkaXNwbGF5OiBub25lIGZyb20gYW55XG4gICAgLy8gcGFyZW50LCB0aGUgb2Zmc2V0UGFyZW50IHByb3BlcnR5IHdpbGwgYmUgbnVsbCAoc2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L29mZnNldFBhcmVudCkuXG4gICAgLy8gVGhpcyBjaGVjayBlbnN1cmVzIHdlIG9ubHkgY2xvbmUgdGhlIG5vZGUgd2hlbiBuZWNlc3NhcnkuXG4gICAgdmFyIGh0bWxFbCA9IGVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbC5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbC5zY3JvbGxXaWR0aDtcbiAgICB9XG4gICAgdmFyIGNsb25lID0gaHRtbEVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5OXB4LCAtOTk5OXB4KScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgdmFyIHNjcm9sbFdpZHRoID0gY2xvbmUuc2Nyb2xsV2lkdGg7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICByZXR1cm4gc2Nyb2xsV2lkdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG9cbiAqIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBzdXBwb3J0c0Nzc1ZhcnMgPVxuICAgICAgICBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cztcbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2dCwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICAgIGlmICghZXZ0KSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIHggPSBwYWdlT2Zmc2V0LngsIHkgPSBwYWdlT2Zmc2V0Lnk7XG4gICAgdmFyIGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gICAgdmFyIGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcbiAgICB2YXIgbm9ybWFsaXplZFg7XG4gICAgdmFyIG5vcm1hbGl6ZWRZO1xuICAgIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbW91c2VFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSBtb3VzZUV2ZW50LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IG1vdXNlRXZlbnQucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMgfSBmcm9tICcuL3V0aWwnO1xuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbnZhciBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJyxcbl07XG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbnZhciBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnLFxuXTtcbi8vIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbnZhciBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG52YXIgTURDUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdTY2FsZV8gPSAnMCc7XG4gICAgICAgIF90aGlzLmZyYW1lXyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICBfdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5tYXhSYWRpdXNfID0gMDtcbiAgICAgICAgX3RoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlXyhlKTsgfTtcbiAgICAgICAgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZV8oKTsgfTtcbiAgICAgICAgX3RoaXMuZm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIoKTsgfTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYXlvdXQoKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8xID0gX2EuUk9PVCwgVU5CT1VOREVEXzEgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoUk9PVF8xKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoVU5CT1VOREVEXzEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzIgPSBfYS5ST09ULCBVTkJPVU5ERURfMiA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhST09UXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoVU5CT1VOREVEXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV2dCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlXyhldnQpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VW5ib3VuZGVkID0gZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICB2YXIgVU5CT1VOREVEID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLlVOQk9VTkRFRDtcbiAgICAgICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTsgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnN1cHBvcnRzUHJlc3NSaXBwbGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgICAgICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlQ3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByaXBwbGVTdHJpbmdzID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJpcHBsZVN0cmluZ3MpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKHJpcHBsZVN0cmluZ3Nba2V5XSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICB2YXIgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICAgICAgdmFyIGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZXZ0ICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZXZ0LnR5cGU7XG4gICAgICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGV2dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZXZ0O1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBldnQgIT09IHVuZGVmaW5lZCAmJiAoZXZ0LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGV2dC50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXZ0LnR5cGUgPT09ICdwb2ludGVyZG93bicpO1xuICAgICAgICB2YXIgaGFzQWN0aXZhdGVkQ2hpbGQgPSBldnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlci5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCk7IH0pO1xuICAgICAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhldnQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlXG4gICAgICAgICAgICAgICAgJiYgZXZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiAoZXZ0LmtleSA9PT0gJyAnIHx8IGV2dC5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAgICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAgICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICAgICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF90aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gKGV2dCAhPT0gdW5kZWZpbmVkICYmIGV2dC50eXBlID09PSAna2V5ZG93bicpID9cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5pc1N1cmZhY2VBY3RpdmUoKSA6XG4gICAgICAgICAgICB0cnVlO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZUFjdGl2YXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfRU5EO1xuICAgICAgICB2YXIgX2IgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEZHX0RFQUNUSVZBVElPTiA9IF9iLkZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTiA9IF9iLkZHX0FDVElWQVRJT047XG4gICAgICAgIHZhciBERUFDVElWQVRJT05fVElNRU9VVF9NUyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5ERUFDVElWQVRJT05fVElNRU9VVF9NUztcbiAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgICAgIHZhciB0cmFuc2xhdGVFbmQgPSAnJztcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdmFyIF9jID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCksIHN0YXJ0UG9pbnQgPSBfYy5zdGFydFBvaW50LCBlbmRQb2ludCA9IF9jLmVuZFBvaW50O1xuICAgICAgICAgICAgdHJhbnNsYXRlU3RhcnQgPSBzdGFydFBvaW50LnggKyBcInB4LCBcIiArIHN0YXJ0UG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgICAgIHRyYW5zbGF0ZUVuZCA9IGVuZFBvaW50LnggKyBcInB4LCBcIiArIGVuZFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgICAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgICAgIHRoaXMuYWRhcHRlci5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKTsgfSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBhY3RpdmF0aW9uRXZlbnQgPSBfYS5hY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlcjtcbiAgICAgICAgdmFyIHN0YXJ0UG9pbnQ7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoYWN0aXZhdGlvbkV2ZW50LCB0aGlzLmFkYXB0ZXIuZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXIuY29tcHV0ZUJvdW5kaW5nUmVjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVuZFBvaW50ID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBzdGFydFBvaW50OiBzdGFydFBvaW50LCBlbmRQb2ludDogZW5kUG9pbnQgfTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgICAgICB2YXIgRkdfREVBQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBoYXNEZWFjdGl2YXRpb25VWFJ1biA9IF9hLmhhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZCA9IF9hLmlzQWN0aXZhdGVkO1xuICAgICAgICB2YXIgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuICAgICAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEZHX0FDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlc2V0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZDsgfSwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGF0ZSA9IF9fYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpOyB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVEZWFjdGl2YXRpb25fID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlID0gX2Eud2FzRWxlbWVudE1hZGVBY3RpdmU7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dEludGVybmFsXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXIuY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB2YXIgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG4gICAgICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAgICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAgICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgICAgICB2YXIgZ2V0Qm91bmRlZFJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KF90aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyhfdGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcbiAgICAgICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgICAgdmFyIGluaXRpYWxTaXplID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIHNpemUgc2hvdWxkIGFsd2F5cyBiZSBldmVuIG51bWJlciB0byBlcXVhbGx5IGNlbnRlciBhbGlnbi5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpICYmIGluaXRpYWxTaXplICUgMiAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBpbml0aWFsU2l6ZSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTaXplXyA9IGluaXRpYWxTaXplO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmdTY2FsZV8gPSBcIlwiICsgdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUxheW91dENzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19TSVpFID0gX2EuVkFSX0ZHX1NJWkUsIFZBUl9MRUZUID0gX2EuVkFSX0xFRlQsIFZBUl9UT1AgPSBfYS5WQVJfVE9QLCBWQVJfRkdfU0NBTEUgPSBfYS5WQVJfRkdfU0NBTEU7XG4gICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgdGhpcy5pbml0aWFsU2l6ZV8gKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnQgKyBcInB4XCIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy50b3AgKyBcInB4XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqIFNsaWRlciBlbGVtZW50IGNsYXNzZXMuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgRElTQUJMRUQ6ICdtZGMtc2xpZGVyLS1kaXNhYmxlZCcsXG4gICAgRElTQ1JFVEU6ICdtZGMtc2xpZGVyLS1kaXNjcmV0ZScsXG4gICAgSU5QVVQ6ICdtZGMtc2xpZGVyX19pbnB1dCcsXG4gICAgUkFOR0U6ICdtZGMtc2xpZGVyLS1yYW5nZScsXG4gICAgVEhVTUI6ICdtZGMtc2xpZGVyX190aHVtYicsXG4gICAgLy8gQXBwbGllZCB3aGVuIHRodW1iIGlzIGluIHRoZSBmb2N1c2VkIHN0YXRlLlxuICAgIFRIVU1CX0ZPQ1VTRUQ6ICdtZGMtc2xpZGVyX190aHVtYi0tZm9jdXNlZCcsXG4gICAgVEhVTUJfS05PQjogJ21kYy1zbGlkZXJfX3RodW1iLWtub2InLFxuICAgIC8vIENsYXNzIGFkZGVkIHRvIHRoZSB0b3AgdGh1bWIgKGZvciBvdmVybGFwcGluZyB0aHVtYnMgaW4gcmFuZ2Ugc2xpZGVyKS5cbiAgICBUSFVNQl9UT1A6ICdtZGMtc2xpZGVyX190aHVtYi0tdG9wJyxcbiAgICBUSFVNQl9XSVRIX0lORElDQVRPUjogJ21kYy1zbGlkZXJfX3RodW1iLS13aXRoLWluZGljYXRvcicsXG4gICAgVElDS19NQVJLUzogJ21kYy1zbGlkZXItLXRpY2stbWFya3MnLFxuICAgIFRJQ0tfTUFSS1NfQ09OVEFJTkVSOiAnbWRjLXNsaWRlcl9fdGljay1tYXJrcycsXG4gICAgVElDS19NQVJLX0FDVElWRTogJ21kYy1zbGlkZXJfX3RpY2stbWFyay0tYWN0aXZlJyxcbiAgICBUSUNLX01BUktfSU5BQ1RJVkU6ICdtZGMtc2xpZGVyX190aWNrLW1hcmstLWluYWN0aXZlJyxcbiAgICBUUkFDSzogJ21kYy1zbGlkZXJfX3RyYWNrJyxcbiAgICAvLyBUaGUgYWN0aXZlIHRyYWNrIGZpbGwgZWxlbWVudCB0aGF0IHdpbGwgYmUgc2NhbGVkIGFzIHRoZSB2YWx1ZSBjaGFuZ2VzLlxuICAgIFRSQUNLX0FDVElWRTogJ21kYy1zbGlkZXJfX3RyYWNrLS1hY3RpdmVfZmlsbCcsXG4gICAgVkFMVUVfSU5ESUNBVE9SX1RFWFQ6ICdtZGMtc2xpZGVyX192YWx1ZS1pbmRpY2F0b3ItdGV4dCcsXG59O1xuLyoqIFNsaWRlciBudW1iZXJzLiAqL1xuZXhwb3J0IHZhciBudW1iZXJzID0ge1xuICAgIC8vIERlZmF1bHQgc3RlcCBzaXplLlxuICAgIFNURVBfU0laRTogMSxcbiAgICAvLyBNaW5pbXVtIGFic29sdXRlIGRpZmZlcmVuY2UgYmV0d2VlbiBjbGllbnRYIG9mIG1vdmUgZXZlbnQgLyBkb3duIGV2ZW50XG4gICAgLy8gZm9yIHdoaWNoIHRvIHVwZGF0ZSB0aHVtYiwgaW4gdGhlIGNhc2Ugb2Ygb3ZlcmxhcHBpbmcgdGh1bWJzLlxuICAgIC8vIFRoaXMgaXMgbmVlZGVkIHRvIHJlZHVjZSBjaGFuY2VzIG9mIGNob29zaW5nIHRoZSB0aHVtYiBiYXNlZCBvblxuICAgIC8vIHBvaW50ZXIgaml0dGVyLlxuICAgIFRIVU1CX1VQREFURV9NSU5fUFg6IDUsXG59O1xuLyoqIFNsaWRlciBhdHRyaWJ1dGVzLiAqL1xuZXhwb3J0IHZhciBhdHRyaWJ1dGVzID0ge1xuICAgIEFSSUFfVkFMVUVURVhUOiAnYXJpYS12YWx1ZXRleHQnLFxuICAgIElOUFVUX0RJU0FCTEVEOiAnZGlzYWJsZWQnLFxuICAgIElOUFVUX01JTjogJ21pbicsXG4gICAgSU5QVVRfTUFYOiAnbWF4JyxcbiAgICBJTlBVVF9WQUxVRTogJ3ZhbHVlJyxcbiAgICBJTlBVVF9TVEVQOiAnc3RlcCcsXG59O1xuLyoqIFNsaWRlciBldmVudHMuICovXG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcbiAgICBDSEFOR0U6ICdNRENTbGlkZXI6Y2hhbmdlJyxcbiAgICBJTlBVVDogJ01EQ1NsaWRlcjppbnB1dCcsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBBbmltYXRpb25GcmFtZSBwcm92aWRlcyBhIHVzZXItZnJpZW5kbHkgYWJzdHJhY3Rpb24gYXJvdW5kIHJlcXVlc3RpbmdcbiAqIGFuZCBjYW5jZWxpbmcgYW5pbWF0aW9uIGZyYW1lcy5cbiAqL1xudmFyIEFuaW1hdGlvbkZyYW1lID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEFuaW1hdGlvbkZyYW1lKCkge1xuICAgICAgICB0aGlzLnJhZklEcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVxdWVzdHMgYW4gYW5pbWF0aW9uIGZyYW1lLiBDYW5jZWxzIGFueSBleGlzdGluZyBmcmFtZSB3aXRoIHRoZSBzYW1lIGtleS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoaXMgY2FsbGJhY2suXG4gICAgICogQHBhcmFtIHtGcmFtZVJlcXVlc3RDYWxsYmFja30gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkLlxuICAgICAqL1xuICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKGtleSwgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jYW5jZWwoa2V5KTtcbiAgICAgICAgdmFyIGZyYW1lSUQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgICAgICBfdGhpcy5yYWZJRHMuZGVsZXRlKGtleSk7XG4gICAgICAgICAgICAvLyBDYWxsYmFjayBtdXN0IGNvbWUgKmFmdGVyKiB0aGUga2V5IGlzIGRlbGV0ZWQgc28gdGhhdCBuZXN0ZWQgY2FsbHMgdG9cbiAgICAgICAgICAgIC8vIHJlcXVlc3Qgd2l0aCB0aGUgc2FtZSBrZXkgYXJlIG5vdCBkZWxldGVkLlxuICAgICAgICAgICAgY2FsbGJhY2soZnJhbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yYWZJRHMuc2V0KGtleSwgZnJhbWVJRCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYW5jZWxzIGEgcXVldWVkIGNhbGxiYWNrIHdpdGggdGhlIGdpdmVuIGtleS5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgZm9yIHRoaXMgY2FsbGJhY2suXG4gICAgICovXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLmNhbmNlbCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHJhZklEID0gdGhpcy5yYWZJRHMuZ2V0KGtleSk7XG4gICAgICAgIGlmIChyYWZJRCkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUocmFmSUQpO1xuICAgICAgICAgICAgdGhpcy5yYWZJRHMuZGVsZXRlKGtleSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbmNlbHMgYWxsIHF1ZXVlZCBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuY2FuY2VsQWxsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBOZWVkIHRvIHVzZSBmb3JFYWNoIGJlY2F1c2UgaXQncyB0aGUgb25seSBpdGVyYXRpb24gbWV0aG9kIHN1cHBvcnRlZFxuICAgICAgICAvLyBieSBJRTExLiBTdXBwcmVzcyB0aGUgdW5kZXJzY29yZSBiZWNhdXNlIHdlIGRvbid0IG5lZWQgaXQuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTplbmZvcmNlLW5hbWUtY2FzaW5nXG4gICAgICAgIHRoaXMucmFmSURzLmZvckVhY2goZnVuY3Rpb24gKF8sIGtleSkge1xuICAgICAgICAgICAgX3RoaXMuY2FuY2VsKGtleSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcXVldWUgb2YgdW5leGVjdXRlZCBjYWxsYmFjayBrZXlzLlxuICAgICAqL1xuICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS5nZXRRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgIC8vIE5lZWQgdG8gdXNlIGZvckVhY2ggYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGl0ZXJhdGlvbiBtZXRob2Qgc3VwcG9ydGVkXG4gICAgICAgIC8vIGJ5IElFMTEuIFN1cHByZXNzIHRoZSB1bmRlcnNjb3JlIGJlY2F1c2Ugd2UgZG9uJ3QgbmVlZCBpdC5cbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmVuZm9yY2UtbmFtZS1jYXNpbmdcbiAgICAgICAgdGhpcy5yYWZJRHMuZm9yRWFjaChmdW5jdGlvbiAoXywga2V5KSB7XG4gICAgICAgICAgICBxdWV1ZS5wdXNoKGtleSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcXVldWU7XG4gICAgfTtcbiAgICByZXR1cm4gQW5pbWF0aW9uRnJhbWU7XG59KCkpO1xuZXhwb3J0IHsgQW5pbWF0aW9uRnJhbWUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFuaW1hdGlvbmZyYW1lLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc1Byb3BlcnR5TmFtZU1hcCA9IHtcbiAgICBhbmltYXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uJyxcbiAgICB9LFxuICAgIHRyYW5zZm9ybToge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2Zvcm0nLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNpdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNpdGlvbicsXG4gICAgfSxcbn07XG52YXIganNFdmVudFR5cGVNYXAgPSB7XG4gICAgYW5pbWF0aW9uZW5kOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgfSxcbiAgICBhbmltYXRpb25pdGVyYXRpb246IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdEFuaW1hdGlvbkl0ZXJhdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICB9LFxuICAgIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25TdGFydCcsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ3RyYW5zaXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNXaW5kb3cod2luZG93T2JqKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4od2luZG93T2JqLmRvY3VtZW50KSAmJiB0eXBlb2Ygd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSh3aW5kb3dPYmosIGNzc1Byb3BlcnR5KSB7XG4gICAgaWYgKGlzV2luZG93KHdpbmRvd09iaikgJiYgY3NzUHJvcGVydHkgaW4gY3NzUHJvcGVydHlOYW1lTWFwKSB7XG4gICAgICAgIHZhciBlbCA9IHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIF9hID0gY3NzUHJvcGVydHlOYW1lTWFwW2Nzc1Byb3BlcnR5XSwgc3RhbmRhcmQgPSBfYS5zdGFuZGFyZCwgcHJlZml4ZWQgPSBfYS5wcmVmaXhlZDtcbiAgICAgICAgdmFyIGlzU3RhbmRhcmQgPSBzdGFuZGFyZCBpbiBlbC5zdHlsZTtcbiAgICAgICAgcmV0dXJuIGlzU3RhbmRhcmQgPyBzdGFuZGFyZCA6IHByZWZpeGVkO1xuICAgIH1cbiAgICByZXR1cm4gY3NzUHJvcGVydHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGV2ZW50VHlwZSBpbiBqc0V2ZW50VHlwZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGpzRXZlbnRUeXBlTWFwW2V2ZW50VHlwZV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQsIGNzc1Byb3BlcnR5ID0gX2EuY3NzUHJvcGVydHk7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gY3NzUHJvcGVydHkgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50VHlwZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKiogVGljayBtYXJrIGVudW0sIGZvciBkaXNjcmV0ZSBzbGlkZXJzLiAqL1xuZXhwb3J0IHZhciBUaWNrTWFyaztcbihmdW5jdGlvbiAoVGlja01hcmspIHtcbiAgICBUaWNrTWFya1tUaWNrTWFya1tcIkFDVElWRVwiXSA9IDBdID0gXCJBQ1RJVkVcIjtcbiAgICBUaWNrTWFya1tUaWNrTWFya1tcIklOQUNUSVZFXCJdID0gMV0gPSBcIklOQUNUSVZFXCI7XG59KShUaWNrTWFyayB8fCAoVGlja01hcmsgPSB7fSkpO1xuLyoqXG4gKiBUaHVtYiB0eXBlczogcmFuZ2Ugc2xpZGVyIGhhcyB0d28gdGh1bWJzIChTVEFSVCwgRU5EKSB3aGVyZWFzIHNpbmdsZSBwb2ludFxuICogc2xpZGVyIG9ubHkgaGFzIG9uZSB0aHVtYiAoRU5EKS5cbiAqL1xuZXhwb3J0IHZhciBUaHVtYjtcbihmdW5jdGlvbiAoVGh1bWIpIHtcbiAgICAvLyBUaHVtYiBhdCBzdGFydCBvZiBzbGlkZXIgKGUuZy4gaW4gTFRSIG1vZGUsIGxlZnQgdGh1bWIgb24gcmFuZ2Ugc2xpZGVyKS5cbiAgICBUaHVtYltUaHVtYltcIlNUQVJUXCJdID0gMV0gPSBcIlNUQVJUXCI7XG4gICAgLy8gVGh1bWIgYXQgZW5kIG9mIHNsaWRlciAoZS5nLiBpbiBMVFIgbW9kZSwgcmlnaHQgdGh1bWIgb24gcmFuZ2Ugc2xpZGVyLFxuICAgIC8vIG9yIG9ubHkgdGh1bWIgb24gc2luZ2xlIHBvaW50IHNsaWRlcikuXG4gICAgVGh1bWJbVGh1bWJbXCJFTkRcIl0gPSAyXSA9IFwiRU5EXCI7XG59KShUaHVtYiB8fCAoVGh1bWIgPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHlwZXMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBBbmltYXRpb25GcmFtZSB9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vYW5pbWF0aW9uZnJhbWUnO1xuaW1wb3J0IHsgZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vdXRpbCc7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBhdHRyaWJ1dGVzLCBjc3NDbGFzc2VzLCBudW1iZXJzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgVGh1bWIsIFRpY2tNYXJrIH0gZnJvbSAnLi90eXBlcyc7XG52YXIgQW5pbWF0aW9uS2V5cztcbihmdW5jdGlvbiAoQW5pbWF0aW9uS2V5cykge1xuICAgIEFuaW1hdGlvbktleXNbXCJTTElERVJfVVBEQVRFXCJdID0gXCJzbGlkZXJfdXBkYXRlXCI7XG59KShBbmltYXRpb25LZXlzIHx8IChBbmltYXRpb25LZXlzID0ge30pKTtcbi8vIEFjY2Vzc2luZyBgd2luZG93YCB3aXRob3V0IGEgYHR5cGVvZmAgY2hlY2sgd2lsbCB0aHJvdyBvbiBOb2RlIGVudmlyb25tZW50cy5cbnZhciBIQVNfV0lORE9XID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG4vKipcbiAqIEZvdW5kYXRpb24gY2xhc3MgZm9yIHNsaWRlci4gUmVzcG9uc2liaWxpdGllcyBpbmNsdWRlOlxuICogLSBVcGRhdGluZyBzbGlkZXIgdmFsdWVzIChpbnRlcm5hbCBzdGF0ZSBhbmQgRE9NIHVwZGF0ZXMpIGJhc2VkIG9uIGNsaWVudFxuICogICAneCcgcG9zaXRpb24uXG4gKiAtIFVwZGF0aW5nIERPTSBhZnRlciBzbGlkZXIgcHJvcGVydHkgdXBkYXRlcyAoZS5nLiBtaW4sIG1heCkuXG4gKi9cbnZhciBNRENTbGlkZXJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENTbGlkZXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1NsaWRlckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDU2xpZGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICAvLyBXaGV0aGVyIHRoZSBpbml0aWFsIHN0eWxlcyAodG8gcG9zaXRpb24gdGhlIHRodW1iLCBiZWZvcmUgY29tcG9uZW50XG4gICAgICAgIC8vIGluaXRpYWxpemF0aW9uKSBoYXZlIGJlZW4gcmVtb3ZlZC5cbiAgICAgICAgX3RoaXMuaW5pdGlhbFN0eWxlc1JlbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0Rpc2NyZXRlID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnN0ZXAgPSBudW1iZXJzLlNURVBfU0laRTtcbiAgICAgICAgX3RoaXMuaGFzVGlja01hcmtzID0gZmFsc2U7XG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgb25seSBzZXQgZm9yIHJhbmdlIHNsaWRlcnMuXG4gICAgICAgIF90aGlzLmlzUmFuZ2UgPSBmYWxzZTtcbiAgICAgICAgLy8gVHJhY2tzIHRoZSB0aHVtYiBiZWluZyBtb3ZlZCBhY3Jvc3MgYSBzbGlkZXIgcG9pbnRlciBpbnRlcmFjdGlvbiAoZG93bixcbiAgICAgICAgLy8gbW92ZSBldmVudCkuXG4gICAgICAgIF90aGlzLnRodW1iID0gbnVsbDtcbiAgICAgICAgLy8gYGNsaWVudFhgIGZyb20gdGhlIG1vc3QgcmVjZW50IGRvd24gZXZlbnQuIFVzZWQgaW4gc3Vic2VxdWVudCBtb3ZlXG4gICAgICAgIC8vIGV2ZW50cyB0byBkZXRlcm1pbmUgd2hpY2ggdGh1bWIgdG8gbW92ZSAoaW4gdGhlIGNhc2Ugb2ZcbiAgICAgICAgLy8gb3ZlcmxhcHBpbmcgdGh1bWJzKS5cbiAgICAgICAgX3RoaXMuZG93bkV2ZW50Q2xpZW50WCA9IG51bGw7XG4gICAgICAgIC8vIFdpZHRoIG9mIHRoZSBzdGFydCB0aHVtYiBrbm9iLlxuICAgICAgICBfdGhpcy5zdGFydFRodW1iS25vYldpZHRoID0gMDtcbiAgICAgICAgLy8gV2lkdGggb2YgdGhlIGVuZCB0aHVtYiBrbm9iLlxuICAgICAgICBfdGhpcy5lbmRUaHVtYktub2JXaWR0aCA9IDA7XG4gICAgICAgIF90aGlzLmFuaW1GcmFtZSA9IG5ldyBBbmltYXRpb25GcmFtZSgpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbGlkZXJGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWVcbiAgICAgICAgICAgIC8vIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhZGRUaHVtYkNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlVGh1bWJDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldEF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBnZXRJbnB1dFZhbHVlOiBmdW5jdGlvbiAoKSB7IHJldHVybiAnJzsgfSxcbiAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0SW5wdXRBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgc2V0SW5wdXRBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlSW5wdXRBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNJbnB1dDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGlzSW5wdXRGb2N1c2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBnZXRUaHVtYktub2JXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRUaHVtYkJvdW5kaW5nQ2xpZW50UmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpc1JUTDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0VGh1bWJTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlVGh1bWJTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0VHJhY2tBY3RpdmVTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlVHJhY2tBY3RpdmVTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0VmFsdWVJbmRpY2F0b3JUZXh0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VmFsdWVUb0FyaWFWYWx1ZVRleHRGbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVUaWNrTWFya3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRQb2ludGVyQ2FwdHVyZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGVtaXRDaGFuZ2VFdmVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGVtaXRJbnB1dEV2ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZW1pdERyYWdTdGFydEV2ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZW1pdERyYWdFbmRFdmVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyVGh1bWJFdmVudEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyVGh1bWJFdmVudEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlcklucHV0RXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlcklucHV0RXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJCb2R5RXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckJvZHlFdmVudEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlcldpbmRvd0V2ZW50SGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJXaW5kb3dFdmVudEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gdGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpO1xuICAgICAgICB0aGlzLmlzRGlzY3JldGUgPSB0aGlzLmFkYXB0ZXIuaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5ESVNDUkVURSk7XG4gICAgICAgIHRoaXMuaGFzVGlja01hcmtzID0gdGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuVElDS19NQVJLUyk7XG4gICAgICAgIHRoaXMuaXNSYW5nZSA9IHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLlJBTkdFKTtcbiAgICAgICAgdmFyIG1pbiA9IHRoaXMuY29udmVydEF0dHJpYnV0ZVZhbHVlVG9OdW1iZXIodGhpcy5hZGFwdGVyLmdldElucHV0QXR0cmlidXRlKGF0dHJpYnV0ZXMuSU5QVVRfTUlOLCB0aGlzLmlzUmFuZ2UgPyBUaHVtYi5TVEFSVCA6IFRodW1iLkVORCksIGF0dHJpYnV0ZXMuSU5QVVRfTUlOKTtcbiAgICAgICAgdmFyIG1heCA9IHRoaXMuY29udmVydEF0dHJpYnV0ZVZhbHVlVG9OdW1iZXIodGhpcy5hZGFwdGVyLmdldElucHV0QXR0cmlidXRlKGF0dHJpYnV0ZXMuSU5QVVRfTUFYLCBUaHVtYi5FTkQpLCBhdHRyaWJ1dGVzLklOUFVUX01BWCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuY29udmVydEF0dHJpYnV0ZVZhbHVlVG9OdW1iZXIodGhpcy5hZGFwdGVyLmdldElucHV0QXR0cmlidXRlKGF0dHJpYnV0ZXMuSU5QVVRfVkFMVUUsIFRodW1iLkVORCksIGF0dHJpYnV0ZXMuSU5QVVRfVkFMVUUpO1xuICAgICAgICB2YXIgdmFsdWVTdGFydCA9IHRoaXMuaXNSYW5nZSA/XG4gICAgICAgICAgICB0aGlzLmNvbnZlcnRBdHRyaWJ1dGVWYWx1ZVRvTnVtYmVyKHRoaXMuYWRhcHRlci5nZXRJbnB1dEF0dHJpYnV0ZShhdHRyaWJ1dGVzLklOUFVUX1ZBTFVFLCBUaHVtYi5TVEFSVCksIGF0dHJpYnV0ZXMuSU5QVVRfVkFMVUUpIDpcbiAgICAgICAgICAgIG1pbjtcbiAgICAgICAgdmFyIHN0ZXBBdHRyID0gdGhpcy5hZGFwdGVyLmdldElucHV0QXR0cmlidXRlKGF0dHJpYnV0ZXMuSU5QVVRfU1RFUCwgVGh1bWIuRU5EKTtcbiAgICAgICAgdmFyIHN0ZXAgPSBzdGVwQXR0ciA/XG4gICAgICAgICAgICB0aGlzLmNvbnZlcnRBdHRyaWJ1dGVWYWx1ZVRvTnVtYmVyKHN0ZXBBdHRyLCBhdHRyaWJ1dGVzLklOUFVUX1NURVApIDpcbiAgICAgICAgICAgIHRoaXMuc3RlcDtcbiAgICAgICAgdGhpcy52YWxpZGF0ZVByb3BlcnRpZXMoeyBtaW46IG1pbiwgbWF4OiBtYXgsIHZhbHVlOiB2YWx1ZSwgdmFsdWVTdGFydDogdmFsdWVTdGFydCwgc3RlcDogc3RlcCB9KTtcbiAgICAgICAgdGhpcy5taW4gPSBtaW47XG4gICAgICAgIHRoaXMubWF4ID0gbWF4O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWVTdGFydCA9IHZhbHVlU3RhcnQ7XG4gICAgICAgIHRoaXMuc3RlcCA9IHN0ZXA7XG4gICAgICAgIHRoaXMubnVtRGVjaW1hbFBsYWNlcyA9IGdldE51bURlY2ltYWxQbGFjZXModGhpcy5zdGVwKTtcbiAgICAgICAgdGhpcy52YWx1ZUJlZm9yZURvd25FdmVudCA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlU3RhcnRCZWZvcmVEb3duRXZlbnQgPSB2YWx1ZVN0YXJ0O1xuICAgICAgICB0aGlzLm1vdXNlZG93bk9yVG91Y2hzdGFydExpc3RlbmVyID1cbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTW91c2Vkb3duT3JUb3VjaHN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZUxpc3RlbmVyID0gdGhpcy5oYW5kbGVNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucG9pbnRlcmRvd25MaXN0ZW5lciA9IHRoaXMuaGFuZGxlUG9pbnRlcmRvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5wb2ludGVydXBMaXN0ZW5lciA9IHRoaXMuaGFuZGxlUG9pbnRlcnVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMudGh1bWJNb3VzZWVudGVyTGlzdGVuZXIgPSB0aGlzLmhhbmRsZVRodW1iTW91c2VlbnRlci5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnRodW1iTW91c2VsZWF2ZUxpc3RlbmVyID0gdGhpcy5oYW5kbGVUaHVtYk1vdXNlbGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dFN0YXJ0Q2hhbmdlTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVJbnB1dENoYW5nZShUaHVtYi5TVEFSVCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXRFbmRDaGFuZ2VMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZUlucHV0Q2hhbmdlKFRodW1iLkVORCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXRTdGFydEZvY3VzTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVJbnB1dEZvY3VzKFRodW1iLlNUQVJUKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5pbnB1dEVuZEZvY3VzTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVJbnB1dEZvY3VzKFRodW1iLkVORCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXRTdGFydEJsdXJMaXN0ZW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZUlucHV0Qmx1cihUaHVtYi5TVEFSVCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXRFbmRCbHVyTGlzdGVuZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVJbnB1dEJsdXIoVGh1bWIuRU5EKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMuaGFuZGxlUmVzaXplLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJFdmVudEhhbmRsZXJzKCk7XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRNaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbjtcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldE1heCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogLSBGb3Igc2luZ2xlIHBvaW50IHNsaWRlcnMsIHJldHVybnMgdGhlIHRodW1iIHZhbHVlLlxuICAgICAqIC0gRm9yIHJhbmdlICh0d28tdGh1bWIpIHNsaWRlcnMsIHJldHVybnMgdGhlIGVuZCB0aHVtYidzIHZhbHVlLlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIC0gRm9yIHNpbmdsZSBwb2ludCBzbGlkZXJzLCBzZXRzIHRoZSB0aHVtYiB2YWx1ZS5cbiAgICAgKiAtIEZvciByYW5nZSAodHdvLXRodW1iKSBzbGlkZXJzLCBzZXRzIHRoZSBlbmQgdGh1bWIncyB2YWx1ZS5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5pc1JhbmdlICYmIHZhbHVlIDwgdGhpcy52YWx1ZVN0YXJ0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbmQgdGh1bWIgdmFsdWUgKFwiICsgdmFsdWUgKyBcIikgbXVzdCBiZSA+PSBzdGFydCB0aHVtYiBcIiArXG4gICAgICAgICAgICAgICAgKFwidmFsdWUgKFwiICsgdGhpcy52YWx1ZVN0YXJ0ICsgXCIpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlLCBUaHVtYi5FTkQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT25seSBhcHBsaWNhYmxlIGZvciByYW5nZSBzbGlkZXJzLlxuICAgICAqIEByZXR1cm4gVGhlIHN0YXJ0IHRodW1iJ3MgdmFsdWUuXG4gICAgICovXG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0VmFsdWVTdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignYHZhbHVlU3RhcnRgIGlzIG9ubHkgYXBwbGljYWJsZSBmb3IgcmFuZ2Ugc2xpZGVycy4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZVN0YXJ0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT25seSBhcHBsaWNhYmxlIGZvciByYW5nZSBzbGlkZXJzLiBTZXRzIHRoZSBzdGFydCB0aHVtYidzIHZhbHVlLlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnNldFZhbHVlU3RhcnQgPSBmdW5jdGlvbiAodmFsdWVTdGFydCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgdmFsdWVTdGFydGAgaXMgb25seSBhcHBsaWNhYmxlIGZvciByYW5nZSBzbGlkZXJzLicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdmFsdWVTdGFydCA+IHRoaXMudmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInN0YXJ0IHRodW1iIHZhbHVlIChcIiArIHZhbHVlU3RhcnQgKyBcIikgbXVzdCBiZSA8PSBlbmQgdGh1bWIgXCIgK1xuICAgICAgICAgICAgICAgIChcInZhbHVlIChcIiArIHRoaXMudmFsdWUgKyBcIilcIikpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUodmFsdWVTdGFydCwgVGh1bWIuU1RBUlQpO1xuICAgIH07XG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0U3RlcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RlcDtcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldERpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc0Rpc2FibGVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBkaXNhYmxlZCBzdGF0ZSwgaW5jbHVkaW5nIHVwZGF0aW5nIHN0eWxlcyBhbmQgdGh1bWIgdGFiaW5kZXguXG4gICAgICovXG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGlzYWJsZWQgPSBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5pc0Rpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRJbnB1dEF0dHJpYnV0ZShhdHRyaWJ1dGVzLklOUFVUX0RJU0FCTEVELCAnJywgVGh1bWIuU1RBUlQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldElucHV0QXR0cmlidXRlKGF0dHJpYnV0ZXMuSU5QVVRfRElTQUJMRUQsICcnLCBUaHVtYi5FTkQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuRElTQUJMRUQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVJbnB1dEF0dHJpYnV0ZShhdHRyaWJ1dGVzLklOUFVUX0RJU0FCTEVELCBUaHVtYi5TVEFSVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlSW5wdXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5JTlBVVF9ESVNBQkxFRCwgVGh1bWIuRU5EKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEByZXR1cm4gV2hldGhlciB0aGUgc2xpZGVyIGlzIGEgcmFuZ2Ugc2xpZGVyLiAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldElzUmFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzUmFuZ2U7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiAtIFN5bmNzIHNsaWRlciBib3VuZGluZ0NsaWVudFJlY3Qgd2l0aCB0aGUgY3VycmVudCBET00uXG4gICAgICogLSBVcGRhdGVzIFVJIGJhc2VkIG9uIGludGVybmFsIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX2IgPSBfYSA9PT0gdm9pZCAwID8ge30gOiBfYSwgc2tpcFVwZGF0ZVVJID0gX2Iuc2tpcFVwZGF0ZVVJO1xuICAgICAgICB0aGlzLnJlY3QgPSB0aGlzLmFkYXB0ZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaHVtYktub2JXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRUaHVtYktub2JXaWR0aChUaHVtYi5TVEFSVCk7XG4gICAgICAgICAgICB0aGlzLmVuZFRodW1iS25vYldpZHRoID0gdGhpcy5hZGFwdGVyLmdldFRodW1iS25vYldpZHRoKFRodW1iLkVORCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFza2lwVXBkYXRlVUkpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEhhbmRsZXMgcmVzaXplIGV2ZW50cyBvbiB0aGUgd2luZG93LiAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgcG9pbnRlciBkb3duIGV2ZW50cyBvbiB0aGUgc2xpZGVyIHJvb3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVEb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudmFsdWVTdGFydEJlZm9yZURvd25FdmVudCA9IHRoaXMudmFsdWVTdGFydDtcbiAgICAgICAgdGhpcy52YWx1ZUJlZm9yZURvd25FdmVudCA9IHRoaXMudmFsdWU7XG4gICAgICAgIHZhciBjbGllbnRYID0gZXZlbnQuY2xpZW50WCAhPSBudWxsID9cbiAgICAgICAgICAgIGV2ZW50LmNsaWVudFggOlxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICB0aGlzLmRvd25FdmVudENsaWVudFggPSBjbGllbnRYO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1hcENsaWVudFhPblNsaWRlclNjYWxlKGNsaWVudFgpO1xuICAgICAgICB0aGlzLnRodW1iID0gdGhpcy5nZXRUaHVtYkZyb21Eb3duRXZlbnQoY2xpZW50WCwgdmFsdWUpO1xuICAgICAgICBpZiAodGhpcy50aHVtYiA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5oYW5kbGVEcmFnU3RhcnQoZXZlbnQsIHZhbHVlLCB0aGlzLnRodW1iKTtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh2YWx1ZSwgdGhpcy50aHVtYiwgeyBlbWl0SW5wdXRFdmVudDogdHJ1ZSB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgcG9pbnRlciBtb3ZlIGV2ZW50cyBvbiB0aGUgc2xpZGVyIHJvb3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVNb3ZlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIFByZXZlbnQgc2Nyb2xsaW5nLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgY2xpZW50WCA9IGV2ZW50LmNsaWVudFggIT0gbnVsbCA/XG4gICAgICAgICAgICBldmVudC5jbGllbnRYIDpcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgdmFyIGRyYWdBbHJlYWR5U3RhcnRlZCA9IHRoaXMudGh1bWIgIT0gbnVsbDtcbiAgICAgICAgdGhpcy50aHVtYiA9IHRoaXMuZ2V0VGh1bWJGcm9tTW92ZUV2ZW50KGNsaWVudFgpO1xuICAgICAgICBpZiAodGhpcy50aHVtYiA9PT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5tYXBDbGllbnRYT25TbGlkZXJTY2FsZShjbGllbnRYKTtcbiAgICAgICAgaWYgKCFkcmFnQWxyZWFkeVN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGV2ZW50LCB2YWx1ZSwgdGhpcy50aHVtYik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZW1pdERyYWdTdGFydEV2ZW50KHZhbHVlLCB0aGlzLnRodW1iKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHZhbHVlLCB0aGlzLnRodW1iLCB7IGVtaXRJbnB1dEV2ZW50OiB0cnVlIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBwb2ludGVyIHVwIGV2ZW50cyBvbiB0aGUgc2xpZGVyIHJvb3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVVcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCB8fCB0aGlzLnRodW1iID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnRodW1iID09PSBUaHVtYi5TVEFSVCA/XG4gICAgICAgICAgICB0aGlzLnZhbHVlU3RhcnRCZWZvcmVEb3duRXZlbnQgOlxuICAgICAgICAgICAgdGhpcy52YWx1ZUJlZm9yZURvd25FdmVudDtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy50aHVtYiA9PT0gVGh1bWIuU1RBUlQgPyB0aGlzLnZhbHVlU3RhcnQgOiB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZW1pdENoYW5nZUV2ZW50KG5ld1ZhbHVlLCB0aGlzLnRodW1iKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIuZW1pdERyYWdFbmRFdmVudChuZXdWYWx1ZSwgdGhpcy50aHVtYik7XG4gICAgICAgIHRoaXMudGh1bWIgPSBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRm9yIHJhbmdlLCBkaXNjcmV0ZSBzbGlkZXIsIHNob3dzIHRoZSB2YWx1ZSBpbmRpY2F0b3Igb24gYm90aCB0aHVtYnMuXG4gICAgICovXG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGh1bWJNb3VzZWVudGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNjcmV0ZSB8fCAhdGhpcy5pc1JhbmdlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkVGh1bWJDbGFzcyhjc3NDbGFzc2VzLlRIVU1CX1dJVEhfSU5ESUNBVE9SLCBUaHVtYi5TVEFSVCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRUaHVtYkNsYXNzKGNzc0NsYXNzZXMuVEhVTUJfV0lUSF9JTkRJQ0FUT1IsIFRodW1iLkVORCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBGb3IgcmFuZ2UsIGRpc2NyZXRlIHNsaWRlciwgaGlkZXMgdGhlIHZhbHVlIGluZGljYXRvciBvbiBib3RoIHRodW1icy5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUaHVtYk1vdXNlbGVhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2NyZXRlIHx8ICF0aGlzLmlzUmFuZ2UpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNJbnB1dEZvY3VzZWQoVGh1bWIuU1RBUlQpIHx8XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuaXNJbnB1dEZvY3VzZWQoVGh1bWIuRU5EKSkge1xuICAgICAgICAgICAgLy8gTGVhdmUgdmFsdWUgaW5kaWNhdG9yIHNob3duIGlmIGVpdGhlciBpbnB1dCBpcyBmb2N1c2VkLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVUaHVtYkNsYXNzKGNzc0NsYXNzZXMuVEhVTUJfV0lUSF9JTkRJQ0FUT1IsIFRodW1iLlNUQVJUKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZVRodW1iQ2xhc3MoY3NzQ2xhc3Nlcy5USFVNQl9XSVRIX0lORElDQVRPUiwgVGh1bWIuRU5EKTtcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZU1vdXNlZG93bk9yVG91Y2hzdGFydCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbW92ZUV2ZW50VHlwZSA9IGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nID8gJ21vdXNlbW92ZScgOiAndG91Y2htb3ZlJztcbiAgICAgICAgLy8gQWZ0ZXIgYSBkb3duIGV2ZW50IG9uIHRoZSBzbGlkZXIgcm9vdCwgbGlzdGVuIGZvciBtb3ZlIGV2ZW50cyBvblxuICAgICAgICAvLyBib2R5IChzbyB0aGUgc2xpZGVyIHZhbHVlIGlzIHVwZGF0ZWQgZm9yIGV2ZW50cyBvdXRzaWRlIG9mIHRoZVxuICAgICAgICAvLyBzbGlkZXIgcm9vdCkuXG4gICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlckJvZHlFdmVudEhhbmRsZXIobW92ZUV2ZW50VHlwZSwgdGhpcy5tb3ZlTGlzdGVuZXIpO1xuICAgICAgICB2YXIgdXBIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlVXAoKTtcbiAgICAgICAgICAgIC8vIE9uY2UgdGhlIGRyYWcgaXMgZmluaXNoZWQgKHVwIGV2ZW50IG9uIGJvZHkpLCByZW1vdmUgdGhlIG1vdmVcbiAgICAgICAgICAgIC8vIGhhbmRsZXIuXG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJCb2R5RXZlbnRIYW5kbGVyKG1vdmVFdmVudFR5cGUsIF90aGlzLm1vdmVMaXN0ZW5lcik7XG4gICAgICAgICAgICAvLyBBbHNvIHN0b3AgbGlzdGVuaW5nIGZvciBzdWJzZXF1ZW50IHVwIGV2ZW50cy5cbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckV2ZW50SGFuZGxlcignbW91c2V1cCcsIHVwSGFuZGxlcik7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RvdWNoZW5kJywgdXBIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVyQm9keUV2ZW50SGFuZGxlcignbW91c2V1cCcsIHVwSGFuZGxlcik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlckJvZHlFdmVudEhhbmRsZXIoJ3RvdWNoZW5kJywgdXBIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5oYW5kbGVEb3duKGV2ZW50KTtcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJkb3duID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRQb2ludGVyQ2FwdHVyZShldmVudC5wb2ludGVySWQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3BvaW50ZXJtb3ZlJywgdGhpcy5tb3ZlTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmhhbmRsZURvd24oZXZlbnQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbnB1dCBgY2hhbmdlYCBldmVudCBieSBzZXR0aW5nIGludGVybmFsIHNsaWRlciB2YWx1ZSB0byBtYXRjaFxuICAgICAqIGlucHV0J3MgbmV3IHZhbHVlLlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUlucHV0Q2hhbmdlID0gZnVuY3Rpb24gKHRodW1iKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IE51bWJlcih0aGlzLmFkYXB0ZXIuZ2V0SW5wdXRWYWx1ZSh0aHVtYikpO1xuICAgICAgICBpZiAodGh1bWIgPT09IFRodW1iLlNUQVJUKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlU3RhcnQodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLmVtaXRDaGFuZ2VFdmVudCh0aHVtYiA9PT0gVGh1bWIuU1RBUlQgPyB0aGlzLnZhbHVlU3RhcnQgOiB0aGlzLnZhbHVlLCB0aHVtYik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5lbWl0SW5wdXRFdmVudCh0aHVtYiA9PT0gVGh1bWIuU1RBUlQgPyB0aGlzLnZhbHVlU3RhcnQgOiB0aGlzLnZhbHVlLCB0aHVtYik7XG4gICAgfTtcbiAgICAvKiogU2hvd3MgYWN0aXZhdGVkIHN0YXRlIGFuZCB2YWx1ZSBpbmRpY2F0b3Igb24gdGh1bWIocykuICovXG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlSW5wdXRGb2N1cyA9IGZ1bmN0aW9uICh0aHVtYikge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkVGh1bWJDbGFzcyhjc3NDbGFzc2VzLlRIVU1CX0ZPQ1VTRUQsIHRodW1iKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzY3JldGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRUaHVtYkNsYXNzKGNzc0NsYXNzZXMuVEhVTUJfV0lUSF9JTkRJQ0FUT1IsIHRodW1iKTtcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdmFyIG90aGVyVGh1bWIgPSB0aHVtYiA9PT0gVGh1bWIuU1RBUlQgPyBUaHVtYi5FTkQgOiBUaHVtYi5TVEFSVDtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRUaHVtYkNsYXNzKGNzc0NsYXNzZXMuVEhVTUJfV0lUSF9JTkRJQ0FUT1IsIG90aGVyVGh1bWIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogUmVtb3ZlcyBhY3RpdmF0ZWQgc3RhdGUgYW5kIHZhbHVlIGluZGljYXRvciBmcm9tIHRodW1iKHMpLiAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUlucHV0Qmx1ciA9IGZ1bmN0aW9uICh0aHVtYikge1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlVGh1bWJDbGFzcyhjc3NDbGFzc2VzLlRIVU1CX0ZPQ1VTRUQsIHRodW1iKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzY3JldGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVUaHVtYkNsYXNzKGNzc0NsYXNzZXMuVEhVTUJfV0lUSF9JTkRJQ0FUT1IsIHRodW1iKTtcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdmFyIG90aGVyVGh1bWIgPSB0aHVtYiA9PT0gVGh1bWIuU1RBUlQgPyBUaHVtYi5FTkQgOiBUaHVtYi5TVEFSVDtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVUaHVtYkNsYXNzKGNzc0NsYXNzZXMuVEhVTUJfV0lUSF9JTkRJQ0FUT1IsIG90aGVyVGh1bWIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBFbWl0cyBjdXN0b20gZHJhZ1N0YXJ0IGV2ZW50LCBhbG9uZyB3aXRoIGZvY3VzaW5nIHRoZSB1bmRlcmx5aW5nIGlucHV0LlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZURyYWdTdGFydCA9IGZ1bmN0aW9uIChldmVudCwgdmFsdWUsIHRodW1iKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5mb2N1c0lucHV0KHRodW1iKTtcbiAgICAgICAgLy8gUHJldmVudCB0aGUgaW5wdXQgKHRoYXQgd2UganVzdCBmb2N1c2VkKSBmcm9tIGxvc2luZyBmb2N1cy5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmVtaXREcmFnU3RhcnRFdmVudCh2YWx1ZSwgdGh1bWIpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBUaGUgdGh1bWIgdG8gYmUgbW92ZWQgYmFzZWQgb24gaW5pdGlhbCBkb3duIGV2ZW50LlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldFRodW1iRnJvbURvd25FdmVudCA9IGZ1bmN0aW9uIChjbGllbnRYLCB2YWx1ZSkge1xuICAgICAgICAvLyBGb3Igc2luZ2xlIHBvaW50IHNsaWRlciwgdGh1bWIgdG8gYmUgbW92ZWQgaXMgYWx3YXlzIHRoZSBFTkQgKG9ubHkpXG4gICAgICAgIC8vIHRodW1iLlxuICAgICAgICBpZiAoIXRoaXMuaXNSYW5nZSlcbiAgICAgICAgICAgIHJldHVybiBUaHVtYi5FTkQ7XG4gICAgICAgIC8vIENoZWNrIGlmIGV2ZW50IHByZXNzIHBvaW50IGlzIGluIHRoZSBib3VuZHMgb2YgYW55IHRodW1iLlxuICAgICAgICB2YXIgdGh1bWJTdGFydFJlY3QgPSB0aGlzLmFkYXB0ZXIuZ2V0VGh1bWJCb3VuZGluZ0NsaWVudFJlY3QoVGh1bWIuU1RBUlQpO1xuICAgICAgICB2YXIgdGh1bWJFbmRSZWN0ID0gdGhpcy5hZGFwdGVyLmdldFRodW1iQm91bmRpbmdDbGllbnRSZWN0KFRodW1iLkVORCk7XG4gICAgICAgIHZhciBpblRodW1iU3RhcnRCb3VuZHMgPSBjbGllbnRYID49IHRodW1iU3RhcnRSZWN0LmxlZnQgJiYgY2xpZW50WCA8PSB0aHVtYlN0YXJ0UmVjdC5yaWdodDtcbiAgICAgICAgdmFyIGluVGh1bWJFbmRCb3VuZHMgPSBjbGllbnRYID49IHRodW1iRW5kUmVjdC5sZWZ0ICYmIGNsaWVudFggPD0gdGh1bWJFbmRSZWN0LnJpZ2h0O1xuICAgICAgICBpZiAoaW5UaHVtYlN0YXJ0Qm91bmRzICYmIGluVGh1bWJFbmRCb3VuZHMpIHtcbiAgICAgICAgICAgIC8vIFRodW1icyBvdmVybGFwcGluZy4gVGh1bWIgdG8gYmUgbW92ZWQgY2Fubm90IGJlIGRldGVybWluZWQgeWV0LlxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgcHJlc3MgaXMgaW4gYm91bmRzIGZvciBlaXRoZXIgdGh1bWIgb24gZG93biBldmVudCwgdGhhdCdzIHRoZSB0aHVtYlxuICAgICAgICAvLyB0byBiZSBtb3ZlZC5cbiAgICAgICAgaWYgKGluVGh1bWJTdGFydEJvdW5kcykge1xuICAgICAgICAgICAgcmV0dXJuIFRodW1iLlNUQVJUO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpblRodW1iRW5kQm91bmRzKSB7XG4gICAgICAgICAgICByZXR1cm4gVGh1bWIuRU5EO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBwcmVzc2VzIG91dHNpZGUgdGhlIHJhbmdlLCByZXR1cm4gd2hpY2hldmVyIHRodW1iIGlzIGNsb3Nlci5cbiAgICAgICAgaWYgKHZhbHVlIDwgdGhpcy52YWx1ZVN0YXJ0KSB7XG4gICAgICAgICAgICByZXR1cm4gVGh1bWIuU1RBUlQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID4gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFRodW1iLkVORDtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgcHJlc3NlcyBpbnNpZGUgdGhlIHJhbmdlLCByZXR1cm4gd2hpY2hldmVyIHRodW1iIGlzIGNsb3Nlci5cbiAgICAgICAgcmV0dXJuICh2YWx1ZSAtIHRoaXMudmFsdWVTdGFydCA8PSB0aGlzLnZhbHVlIC0gdmFsdWUpID8gVGh1bWIuU1RBUlQgOlxuICAgICAgICAgICAgVGh1bWIuRU5EO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBUaGUgdGh1bWIgdG8gYmUgbW92ZWQgYmFzZWQgb24gbW92ZSBldmVudCAoYmFzZWQgb24gZHJhZ1xuICAgICAqICAgICBkaXJlY3Rpb24gZnJvbSBvcmlnaW5hbCBkb3duIGV2ZW50KS4gT25seSBhcHBsaWNhYmxlIGlmIHRodW1ic1xuICAgICAqICAgICB3ZXJlIG92ZXJsYXBwaW5nIGluIHRoZSBkb3duIGV2ZW50LlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldFRodW1iRnJvbU1vdmVFdmVudCA9IGZ1bmN0aW9uIChjbGllbnRYKSB7XG4gICAgICAgIC8vIFRodW1iIGhhcyBhbHJlYWR5IGJlZW4gY2hvc2VuLlxuICAgICAgICBpZiAodGhpcy50aHVtYiAhPT0gbnVsbClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iO1xuICAgICAgICBpZiAodGhpcy5kb3duRXZlbnRDbGllbnRYID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bkb3duRXZlbnRDbGllbnRYYCBpcyBudWxsIGFmdGVyIG1vdmUgZXZlbnQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1vdmVEaXN0YW5jZVVuZGVyVGhyZXNob2xkID0gTWF0aC5hYnModGhpcy5kb3duRXZlbnRDbGllbnRYIC0gY2xpZW50WCkgPCBudW1iZXJzLlRIVU1CX1VQREFURV9NSU5fUFg7XG4gICAgICAgIGlmIChtb3ZlRGlzdGFuY2VVbmRlclRocmVzaG9sZClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRodW1iO1xuICAgICAgICB2YXIgZHJhZ2dlZFRodW1iVG9MZWZ0ID0gY2xpZW50WCA8IHRoaXMuZG93bkV2ZW50Q2xpZW50WDtcbiAgICAgICAgaWYgKGRyYWdnZWRUaHVtYlRvTGVmdCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5pc1JUTCgpID8gVGh1bWIuRU5EIDogVGh1bWIuU1RBUlQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmlzUlRMKCkgPyBUaHVtYi5TVEFSVCA6IFRodW1iLkVORDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBVSSBiYXNlZCBvbiBpbnRlcm5hbCBzdGF0ZS5cbiAgICAgKiBAcGFyYW0gdGh1bWIgVGh1bWIgd2hvc2UgdmFsdWUgaXMgYmVpbmcgdXBkYXRlZC4gSWYgdW5kZWZpbmVkLCBVSSBpc1xuICAgICAqICAgICB1cGRhdGVkIGZvciBib3RoIHRodW1icyBiYXNlZCBvbiBjdXJyZW50IGludGVybmFsIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZVVJID0gZnVuY3Rpb24gKHRodW1iKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVGh1bWJBbmRJbnB1dEF0dHJpYnV0ZXModGh1bWIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRodW1iQW5kVHJhY2tVSSh0aHVtYik7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVJbmRpY2F0b3JVSSh0aHVtYik7XG4gICAgICAgIHRoaXMudXBkYXRlVGlja01hcmtzVUkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGh1bWIgYW5kIGlucHV0IGF0dHJpYnV0ZXMgYmFzZWQgb24gY3VycmVudCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0gdGh1bWIgVGh1bWIgd2hvc2UgYXJpYSBhdHRyaWJ1dGVzIHRvIHVwZGF0ZS5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVUaHVtYkFuZElucHV0QXR0cmlidXRlcyA9IGZ1bmN0aW9uICh0aHVtYikge1xuICAgICAgICBpZiAoIXRodW1iKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmlzUmFuZ2UgJiYgdGh1bWIgPT09IFRodW1iLlNUQVJUID8gdGhpcy52YWx1ZVN0YXJ0IDogdGhpcy52YWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlU3RyID0gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldElucHV0QXR0cmlidXRlKGF0dHJpYnV0ZXMuSU5QVVRfVkFMVUUsIHZhbHVlU3RyLCB0aHVtYik7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGh1bWIgPT09IFRodW1iLlNUQVJUKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0SW5wdXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5JTlBVVF9NSU4sIHZhbHVlU3RyLCBUaHVtYi5FTkQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaXNSYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuRU5EKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0SW5wdXRBdHRyaWJ1dGUoYXR0cmlidXRlcy5JTlBVVF9NQVgsIHZhbHVlU3RyLCBUaHVtYi5TVEFSVCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3luYyBhdHRyaWJ1dGUgd2l0aCBwcm9wZXJ0eS5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5nZXRJbnB1dFZhbHVlKHRodW1iKSAhPT0gdmFsdWVTdHIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRJbnB1dFZhbHVlKHZhbHVlU3RyLCB0aHVtYik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlVG9BcmlhVmFsdWVUZXh0Rm4gPSB0aGlzLmFkYXB0ZXIuZ2V0VmFsdWVUb0FyaWFWYWx1ZVRleHRGbigpO1xuICAgICAgICBpZiAodmFsdWVUb0FyaWFWYWx1ZVRleHRGbikge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldElucHV0QXR0cmlidXRlKGF0dHJpYnV0ZXMuQVJJQV9WQUxVRVRFWFQsIHZhbHVlVG9BcmlhVmFsdWVUZXh0Rm4odmFsdWUpLCB0aHVtYik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdmFsdWUgaW5kaWNhdG9yIFVJIGJhc2VkIG9uIGN1cnJlbnQgdmFsdWUuXG4gICAgICogQHBhcmFtIHRodW1iIFRodW1iIHdob3NlIHZhbHVlIGluZGljYXRvciB0byB1cGRhdGUuIElmIHVuZGVmaW5lZCwgYWxsXG4gICAgICogICAgIHRodW1icycgdmFsdWUgaW5kaWNhdG9ycyBhcmUgdXBkYXRlZC5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVWYWx1ZUluZGljYXRvclVJID0gZnVuY3Rpb24gKHRodW1iKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2NyZXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmlzUmFuZ2UgJiYgdGh1bWIgPT09IFRodW1iLlNUQVJUID8gdGhpcy52YWx1ZVN0YXJ0IDogdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFZhbHVlSW5kaWNhdG9yVGV4dCh2YWx1ZSwgdGh1bWIgPT09IFRodW1iLlNUQVJUID8gVGh1bWIuU1RBUlQgOiBUaHVtYi5FTkQpO1xuICAgICAgICBpZiAoIXRodW1iICYmIHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldFZhbHVlSW5kaWNhdG9yVGV4dCh0aGlzLnZhbHVlU3RhcnQsIFRodW1iLlNUQVJUKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aWNrIG1hcmtzIFVJIHdpdGhpbiBzbGlkZXIsIGJhc2VkIG9uIGN1cnJlbnQgbWluLCBtYXgsIGFuZCBzdGVwLlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZVRpY2tNYXJrc1VJID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNEaXNjcmV0ZSB8fCAhdGhpcy5oYXNUaWNrTWFya3MpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBudW1UaWNrTWFya3NJbmFjdGl2ZVN0YXJ0ID0gKHRoaXMudmFsdWVTdGFydCAtIHRoaXMubWluKSAvIHRoaXMuc3RlcDtcbiAgICAgICAgdmFyIG51bVRpY2tNYXJrc0FjdGl2ZSA9ICh0aGlzLnZhbHVlIC0gdGhpcy52YWx1ZVN0YXJ0KSAvIHRoaXMuc3RlcCArIDE7XG4gICAgICAgIHZhciBudW1UaWNrTWFya3NJbmFjdGl2ZUVuZCA9ICh0aGlzLm1heCAtIHRoaXMudmFsdWUpIC8gdGhpcy5zdGVwO1xuICAgICAgICB2YXIgdGlja01hcmtzSW5hY3RpdmVTdGFydCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG51bVRpY2tNYXJrc0luYWN0aXZlU3RhcnQgfSlcbiAgICAgICAgICAgIC5maWxsKFRpY2tNYXJrLklOQUNUSVZFKTtcbiAgICAgICAgdmFyIHRpY2tNYXJrc0FjdGl2ZSA9IEFycmF5LmZyb20oeyBsZW5ndGg6IG51bVRpY2tNYXJrc0FjdGl2ZSB9KVxuICAgICAgICAgICAgLmZpbGwoVGlja01hcmsuQUNUSVZFKTtcbiAgICAgICAgdmFyIHRpY2tNYXJrc0luYWN0aXZlRW5kID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogbnVtVGlja01hcmtzSW5hY3RpdmVFbmQgfSlcbiAgICAgICAgICAgIC5maWxsKFRpY2tNYXJrLklOQUNUSVZFKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZVRpY2tNYXJrcyh0aWNrTWFya3NJbmFjdGl2ZVN0YXJ0LmNvbmNhdCh0aWNrTWFya3NBY3RpdmUpXG4gICAgICAgICAgICAuY29uY2F0KHRpY2tNYXJrc0luYWN0aXZlRW5kKSk7XG4gICAgfTtcbiAgICAvKiogTWFwcyBjbGllbnRYIHRvIGEgdmFsdWUgb24gdGhlIHNsaWRlciBzY2FsZS4gKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5tYXBDbGllbnRYT25TbGlkZXJTY2FsZSA9IGZ1bmN0aW9uIChjbGllbnRYKSB7XG4gICAgICAgIHZhciB4UG9zID0gY2xpZW50WCAtIHRoaXMucmVjdC5sZWZ0O1xuICAgICAgICB2YXIgcGN0Q29tcGxldGUgPSB4UG9zIC8gdGhpcy5yZWN0LndpZHRoO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzUlRMKCkpIHtcbiAgICAgICAgICAgIHBjdENvbXBsZXRlID0gMSAtIHBjdENvbXBsZXRlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpdCB0aGUgcGVyY2VudGFnZSBjb21wbGV0ZSBiZXR3ZWVuIHRoZSByYW5nZSBbbWluLG1heF1cbiAgICAgICAgLy8gYnkgcmVtYXBwaW5nIGZyb20gWzAsIDFdIHRvIFttaW4sIG1pbisobWF4LW1pbildLlxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLm1pbiArIHBjdENvbXBsZXRlICogKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMubWF4IHx8IHZhbHVlID09PSB0aGlzLm1pbikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBOdW1iZXIodGhpcy5xdWFudGl6ZSh2YWx1ZSkudG9GaXhlZCh0aGlzLm51bURlY2ltYWxQbGFjZXMpKTtcbiAgICB9O1xuICAgIC8qKiBDYWxjdWxhdGVzIHRoZSBxdWFudGl6ZWQgdmFsdWUgYmFzZWQgb24gc3RlcCB2YWx1ZS4gKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5xdWFudGl6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB2YXIgbnVtU3RlcHMgPSBNYXRoLnJvdW5kKCh2YWx1ZSAtIHRoaXMubWluKSAvIHRoaXMuc3RlcCk7XG4gICAgICAgIHJldHVybiB0aGlzLm1pbiArIG51bVN0ZXBzICogdGhpcy5zdGVwO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyBzbGlkZXIgdmFsdWUgKGludGVybmFsIHN0YXRlIGFuZCBVSSkgYmFzZWQgb24gdGhlIGdpdmVuIHZhbHVlLlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZVZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCB0aHVtYiwgX2EpIHtcbiAgICAgICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIGVtaXRJbnB1dEV2ZW50ID0gX2IuZW1pdElucHV0RXZlbnQ7XG4gICAgICAgIHZhbHVlID0gdGhpcy5jbGFtcFZhbHVlKHZhbHVlLCB0aHVtYik7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UgJiYgdGh1bWIgPT09IFRodW1iLlNUQVJUKSB7XG4gICAgICAgICAgICAvLyBFeGl0IGVhcmx5IGlmIGN1cnJlbnQgdmFsdWUgaXMgdGhlIHNhbWUgYXMgdGhlIG5ldyB2YWx1ZS5cbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlU3RhcnQgPT09IHZhbHVlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudmFsdWVTdGFydCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRXhpdCBlYXJseSBpZiBjdXJyZW50IHZhbHVlIGlzIHRoZSBzYW1lIGFzIHRoZSBuZXcgdmFsdWUuXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gdmFsdWUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlVUkodGh1bWIpO1xuICAgICAgICBpZiAoZW1pdElucHV0RXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5lbWl0SW5wdXRFdmVudCh0aHVtYiA9PT0gVGh1bWIuU1RBUlQgPyB0aGlzLnZhbHVlU3RhcnQgOiB0aGlzLnZhbHVlLCB0aHVtYik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsYW1wcyB0aGUgZ2l2ZW4gdmFsdWUgZm9yIHRoZSBnaXZlbiB0aHVtYiBiYXNlZCBvbiBzbGlkZXIgcHJvcGVydGllczpcbiAgICAgKiAtIFJlc3RyaWN0cyB2YWx1ZSB3aXRoaW4gW21pbiwgbWF4XS5cbiAgICAgKiAtIElmIHJhbmdlIHNsaWRlciwgY2xhbXAgc3RhcnQgdmFsdWUgPD0gZW5kIHZhbHVlLCBhbmRcbiAgICAgKiAgIGVuZCB2YWx1ZSA+PSBzdGFydCB2YWx1ZS5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jbGFtcFZhbHVlID0gZnVuY3Rpb24gKHZhbHVlLCB0aHVtYikge1xuICAgICAgICAvLyBDbGFtcCB2YWx1ZSB0byBbbWluLCBtYXhdIHJhbmdlLlxuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCB0aGlzLm1pbiksIHRoaXMubWF4KTtcbiAgICAgICAgdmFyIHRodW1iU3RhcnRNb3ZlZFBhc3RUaHVtYkVuZCA9IHRoaXMuaXNSYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlQgJiYgdmFsdWUgPiB0aGlzLnZhbHVlO1xuICAgICAgICBpZiAodGh1bWJTdGFydE1vdmVkUGFzdFRodW1iRW5kKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdGh1bWJFbmRNb3ZlZFBhc3RUaHVtYlN0YXJ0ID0gdGhpcy5pc1JhbmdlICYmIHRodW1iID09PSBUaHVtYi5FTkQgJiYgdmFsdWUgPCB0aGlzLnZhbHVlU3RhcnQ7XG4gICAgICAgIGlmICh0aHVtYkVuZE1vdmVkUGFzdFRodW1iU3RhcnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlU3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgYWN0aXZlIHRyYWNrIGFuZCB0aHVtYiBzdHlsZSBwcm9wZXJ0aWVzIHRvIHJlZmxlY3QgY3VycmVudFxuICAgICAqIHZhbHVlLlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZVRodW1iQW5kVHJhY2tVSSA9IGZ1bmN0aW9uICh0aHVtYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLCBtYXggPSBfYS5tYXgsIG1pbiA9IF9hLm1pbjtcbiAgICAgICAgdmFyIHBjdENvbXBsZXRlID0gKHRoaXMudmFsdWUgLSB0aGlzLnZhbHVlU3RhcnQpIC8gKG1heCAtIG1pbik7XG4gICAgICAgIHZhciByYW5nZVB4ID0gcGN0Q29tcGxldGUgKiB0aGlzLnJlY3Qud2lkdGg7XG4gICAgICAgIHZhciBpc1J0bCA9IHRoaXMuYWRhcHRlci5pc1JUTCgpO1xuICAgICAgICB2YXIgdHJhbnNmb3JtUHJvcCA9IEhBU19XSU5ET1cgPyBnZXRDb3JyZWN0UHJvcGVydHlOYW1lKHdpbmRvdywgJ3RyYW5zZm9ybScpIDogJ3RyYW5zZm9ybSc7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHZhciB0aHVtYkxlZnRQb3NfMSA9IHRoaXMuYWRhcHRlci5pc1JUTCgpID9cbiAgICAgICAgICAgICAgICAobWF4IC0gdGhpcy52YWx1ZSkgLyAobWF4IC0gbWluKSAqIHRoaXMucmVjdC53aWR0aCA6XG4gICAgICAgICAgICAgICAgKHRoaXMudmFsdWVTdGFydCAtIG1pbikgLyAobWF4IC0gbWluKSAqIHRoaXMucmVjdC53aWR0aDtcbiAgICAgICAgICAgIHZhciB0aHVtYlJpZ2h0UG9zXzEgPSB0aHVtYkxlZnRQb3NfMSArIHJhbmdlUHg7XG4gICAgICAgICAgICB0aGlzLmFuaW1GcmFtZS5yZXF1ZXN0KEFuaW1hdGlvbktleXMuU0xJREVSX1VQREFURSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIFNldCBhY3RpdmUgdHJhY2sgc3R5bGVzLCBhY2NvdW50aW5nIGZvciBhbmltYXRpb24gZGlyZWN0aW9uIGJ5XG4gICAgICAgICAgICAgICAgLy8gc2V0dGluZyBgdHJhbnNmb3JtLW9yaWdpbmAuXG4gICAgICAgICAgICAgICAgdmFyIHRyYWNrQW5pbWF0ZXNGcm9tUmlnaHQgPSAoIWlzUnRsICYmIHRodW1iID09PSBUaHVtYi5TVEFSVCkgfHxcbiAgICAgICAgICAgICAgICAgICAgKGlzUnRsICYmIHRodW1iICE9PSBUaHVtYi5TVEFSVCk7XG4gICAgICAgICAgICAgICAgaWYgKHRyYWNrQW5pbWF0ZXNGcm9tUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5zZXRUcmFja0FjdGl2ZVN0eWxlUHJvcGVydHkoJ3RyYW5zZm9ybS1vcmlnaW4nLCAncmlnaHQnKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5zZXRUcmFja0FjdGl2ZVN0eWxlUHJvcGVydHkoJ2xlZnQnLCAndW5zZXQnKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5zZXRUcmFja0FjdGl2ZVN0eWxlUHJvcGVydHkoJ3JpZ2h0JywgX3RoaXMucmVjdC53aWR0aCAtIHRodW1iUmlnaHRQb3NfMSArIFwicHhcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnNldFRyYWNrQWN0aXZlU3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtLW9yaWdpbicsICdsZWZ0Jyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuc2V0VHJhY2tBY3RpdmVTdHlsZVByb3BlcnR5KCdyaWdodCcsICd1bnNldCcpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnNldFRyYWNrQWN0aXZlU3R5bGVQcm9wZXJ0eSgnbGVmdCcsIHRodW1iTGVmdFBvc18xICsgXCJweFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5zZXRUcmFja0FjdGl2ZVN0eWxlUHJvcGVydHkodHJhbnNmb3JtUHJvcCwgXCJzY2FsZVgoXCIgKyBwY3RDb21wbGV0ZSArIFwiKVwiKTtcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGh1bWIgc3R5bGVzLlxuICAgICAgICAgICAgICAgIHZhciB0aHVtYlN0YXJ0UG9zID0gaXNSdGwgPyB0aHVtYlJpZ2h0UG9zXzEgOiB0aHVtYkxlZnRQb3NfMTtcbiAgICAgICAgICAgICAgICB2YXIgdGh1bWJFbmRQb3MgPSBfdGhpcy5hZGFwdGVyLmlzUlRMKCkgPyB0aHVtYkxlZnRQb3NfMSA6IHRodW1iUmlnaHRQb3NfMTtcbiAgICAgICAgICAgICAgICBpZiAodGh1bWIgPT09IFRodW1iLlNUQVJUIHx8ICF0aHVtYiB8fCAhX3RoaXMuaW5pdGlhbFN0eWxlc1JlbW92ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5zZXRUaHVtYlN0eWxlUHJvcGVydHkodHJhbnNmb3JtUHJvcCwgXCJ0cmFuc2xhdGVYKFwiICsgdGh1bWJTdGFydFBvcyArIFwicHgpXCIsIFRodW1iLlNUQVJUKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRodW1iID09PSBUaHVtYi5FTkQgfHwgIXRodW1iIHx8ICFfdGhpcy5pbml0aWFsU3R5bGVzUmVtb3ZlZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnNldFRodW1iU3R5bGVQcm9wZXJ0eSh0cmFuc2Zvcm1Qcm9wLCBcInRyYW5zbGF0ZVgoXCIgKyB0aHVtYkVuZFBvcyArIFwicHgpXCIsIFRodW1iLkVORCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUluaXRpYWxTdHlsZXMoaXNSdGwpO1xuICAgICAgICAgICAgICAgIF90aGlzLnVwZGF0ZU92ZXJsYXBwaW5nVGh1bWJzVUkodGh1bWJTdGFydFBvcywgdGh1bWJFbmRQb3MsIHRodW1iKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hbmltRnJhbWUucmVxdWVzdChBbmltYXRpb25LZXlzLlNMSURFUl9VUERBVEUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGh1bWJTdGFydFBvcyA9IGlzUnRsID8gX3RoaXMucmVjdC53aWR0aCAtIHJhbmdlUHggOiByYW5nZVB4O1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuc2V0VGh1bWJTdHlsZVByb3BlcnR5KHRyYW5zZm9ybVByb3AsIFwidHJhbnNsYXRlWChcIiArIHRodW1iU3RhcnRQb3MgKyBcInB4KVwiLCBUaHVtYi5FTkQpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuc2V0VHJhY2tBY3RpdmVTdHlsZVByb3BlcnR5KHRyYW5zZm9ybVByb3AsIFwic2NhbGVYKFwiICsgcGN0Q29tcGxldGUgKyBcIilcIik7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlSW5pdGlhbFN0eWxlcyhpc1J0bCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBpbml0aWFsIGlubGluZSBzdHlsZXMgaWYgbm90IGFscmVhZHkgcmVtb3ZlZC4gYGxlZnQ6PC4uLj4lYFxuICAgICAqIGlubGluZSBzdHlsZXMgY2FuIGJlIGFkZGVkIHRvIHBvc2l0aW9uIHRoZSB0aHVtYiBjb3JyZWN0bHkgYmVmb3JlIEpTXG4gICAgICogaW5pdGlhbGl6YXRpb24uIEhvd2V2ZXIsIHRoZXkgbmVlZCB0byBiZSByZW1vdmVkIGJlZm9yZSB0aGUgSlMgc3RhcnRzXG4gICAgICogcG9zaXRpb25pbmcgdGhlIHRodW1iLiBUaGlzIGlzIGJlY2F1c2UgdGhlIEpTIHVzZXNcbiAgICAgKiBgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoPC4uLj4pcHhgIChmb3IgcGVyZm9ybWFuY2UgcmVhc29ucykgdG8gcG9zaXRpb25cbiAgICAgKiB0aGUgdGh1bWIgKHdoaWNoIGlzIG5vdCBwb3NzaWJsZSBmb3IgaW5pdGlhbCBzdHlsZXMgc2luY2Ugd2UgbmVlZCB0aGVcbiAgICAgKiBib3VuZGluZyByZWN0IG1lYXN1cmVtZW50cykuXG4gICAgICovXG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlSW5pdGlhbFN0eWxlcyA9IGZ1bmN0aW9uIChpc1J0bCkge1xuICAgICAgICBpZiAodGhpcy5pbml0aWFsU3R5bGVzUmVtb3ZlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gUmVtb3ZlIHRodW1iIHBvc2l0aW9uIHByb3BlcnRpZXMgdGhhdCB3ZXJlIGFkZGVkIGZvciBpbml0aWFsIHJlbmRlci5cbiAgICAgICAgdmFyIHBvc2l0aW9uID0gaXNSdGwgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlVGh1bWJTdHlsZVByb3BlcnR5KHBvc2l0aW9uLCBUaHVtYi5FTkQpO1xuICAgICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlVGh1bWJTdHlsZVByb3BlcnR5KHBvc2l0aW9uLCBUaHVtYi5TVEFSVCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsU3R5bGVzUmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucmVzZXRUcmFja0FuZFRodW1iQW5pbWF0aW9uKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdHJhY2svdGh1bWIgYW5pbWF0aW9uIHRvIHByZXZlbnQgYW5pbWF0aW9uIHdoZW4gYWRkaW5nXG4gICAgICogYHRyYW5zZm9ybWAgc3R5bGVzIHRvIHRodW1iIGluaXRpYWxseS5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5yZXNldFRyYWNrQW5kVGh1bWJBbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc0Rpc2NyZXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyBTZXQgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzIHRvIGRlZmF1bHQgKG5vIGFuaW1hdGlvbiksIHNvIHRoYXQgdGhlXG4gICAgICAgIC8vIG5ld2x5IGFkZGVkIGB0cmFuc2Zvcm1gIHN0eWxlcyBkbyBub3QgYW5pbWF0ZSB0aHVtYi90cmFjayBmcm9tXG4gICAgICAgIC8vIHRoZWlyIGRlZmF1bHQgcG9zaXRpb25zLlxuICAgICAgICB2YXIgdHJhbnNpdGlvblByb3AgPSBIQVNfV0lORE9XID9cbiAgICAgICAgICAgIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93LCAndHJhbnNpdGlvbicpIDpcbiAgICAgICAgICAgICd0cmFuc2l0aW9uJztcbiAgICAgICAgdmFyIHRyYW5zaXRpb25EZWZhdWx0ID0gJ2FsbCAwcyBlYXNlIDBzJztcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFRodW1iU3R5bGVQcm9wZXJ0eSh0cmFuc2l0aW9uUHJvcCwgdHJhbnNpdGlvbkRlZmF1bHQsIFRodW1iLkVORCk7XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRUaHVtYlN0eWxlUHJvcGVydHkodHJhbnNpdGlvblByb3AsIHRyYW5zaXRpb25EZWZhdWx0LCBUaHVtYi5TVEFSVCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFRyYWNrQWN0aXZlU3R5bGVQcm9wZXJ0eSh0cmFuc2l0aW9uUHJvcCwgdHJhbnNpdGlvbkRlZmF1bHQpO1xuICAgICAgICAvLyBJbiB0aGUgbmV4dCBmcmFtZSwgcmVtb3ZlIHRoZSB0cmFuc2l0aW9uIGlubGluZSBzdHlsZXMgd2UganVzdFxuICAgICAgICAvLyBhZGRlZCwgc3VjaCB0aGF0IGFueSBhbmltYXRpb25zIGFkZGVkIGluIHRoZSBDU1MgY2FuIG5vdyB0YWtlIGVmZmVjdC5cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlVGh1bWJTdHlsZVByb3BlcnR5KHRyYW5zaXRpb25Qcm9wLCBUaHVtYi5FTkQpO1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZW1vdmVUcmFja0FjdGl2ZVN0eWxlUHJvcGVydHkodHJhbnNpdGlvblByb3ApO1xuICAgICAgICAgICAgaWYgKF90aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZVRodW1iU3R5bGVQcm9wZXJ0eSh0cmFuc2l0aW9uUHJvcCwgVGh1bWIuU1RBUlQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEFkZHMgVEhVTUJfVE9QIGNsYXNzIHRvIGFjdGl2ZSB0aHVtYiBpZiB0aHVtYiBrbm9icyBvdmVybGFwOyBvdGhlcndpc2VcbiAgICAgKiByZW1vdmVzIFRIVU1CX1RPUCBjbGFzcyBmcm9tIGJvdGggdGh1bWJzLlxuICAgICAqIEBwYXJhbSB0aHVtYiBUaHVtYiB0aGF0IGlzIGFjdGl2ZSAoYmVpbmcgbW92ZWQpLlxuICAgICAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZU92ZXJsYXBwaW5nVGh1bWJzVUkgPSBmdW5jdGlvbiAodGh1bWJTdGFydFBvcywgdGh1bWJFbmRQb3MsIHRodW1iKSB7XG4gICAgICAgIHZhciB0aHVtYnNPdmVybGFwID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNSVEwoKSkge1xuICAgICAgICAgICAgdmFyIHN0YXJ0VGh1bWJMZWZ0RWRnZSA9IHRodW1iU3RhcnRQb3MgLSB0aGlzLnN0YXJ0VGh1bWJLbm9iV2lkdGggLyAyO1xuICAgICAgICAgICAgdmFyIGVuZFRodW1iUmlnaHRFZGdlID0gdGh1bWJFbmRQb3MgKyB0aGlzLmVuZFRodW1iS25vYldpZHRoIC8gMjtcbiAgICAgICAgICAgIHRodW1ic092ZXJsYXAgPSBlbmRUaHVtYlJpZ2h0RWRnZSA+PSBzdGFydFRodW1iTGVmdEVkZ2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgc3RhcnRUaHVtYlJpZ2h0RWRnZSA9IHRodW1iU3RhcnRQb3MgKyB0aGlzLnN0YXJ0VGh1bWJLbm9iV2lkdGggLyAyO1xuICAgICAgICAgICAgdmFyIGVuZFRodW1iTGVmdEVkZ2UgPSB0aHVtYkVuZFBvcyAtIHRoaXMuZW5kVGh1bWJLbm9iV2lkdGggLyAyO1xuICAgICAgICAgICAgdGh1bWJzT3ZlcmxhcCA9IHN0YXJ0VGh1bWJSaWdodEVkZ2UgPj0gZW5kVGh1bWJMZWZ0RWRnZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGh1bWJzT3ZlcmxhcCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZFRodW1iQ2xhc3MoY3NzQ2xhc3Nlcy5USFVNQl9UT1AsIFxuICAgICAgICAgICAgLy8gSWYgbm8gdGh1bWIgd2FzIGRyYWdnZWQgKGluIHRoZSBjYXNlIG9mIGluaXRpYWwgbGF5b3V0KSwgZW5kXG4gICAgICAgICAgICAvLyB0aHVtYiBpcyBvbiB0b3AgYnkgZGVmYXVsdC5cbiAgICAgICAgICAgIHRodW1iIHx8IFRodW1iLkVORCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlVGh1bWJDbGFzcyhjc3NDbGFzc2VzLlRIVU1CX1RPUCwgdGh1bWIgPT09IFRodW1iLlNUQVJUID8gVGh1bWIuRU5EIDogVGh1bWIuU1RBUlQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZVRodW1iQ2xhc3MoY3NzQ2xhc3Nlcy5USFVNQl9UT1AsIFRodW1iLlNUQVJUKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVUaHVtYkNsYXNzKGNzc0NsYXNzZXMuVEhVTUJfVE9QLCBUaHVtYi5FTkQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhdHRyaWJ1dGUgdmFsdWUgdG8gYSBudW1iZXIsIGUuZy4gJzEwMCcgPT4gMTAwLiBUaHJvd3MgZXJyb3JzXG4gICAgICogZm9yIGludmFsaWQgdmFsdWVzLlxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVWYWx1ZSBBdHRyaWJ1dGUgdmFsdWUsIGUuZy4gMTAwLlxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVOYW1lIEF0dHJpYnV0ZSBuYW1lLCBlLmcuIGBhcmlhLXZhbHVlbWF4YC5cbiAgICAgKi9cbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jb252ZXJ0QXR0cmlidXRlVmFsdWVUb051bWJlciA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVWYWx1ZSwgYXR0cmlidXRlTmFtZSkge1xuICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1EQ1NsaWRlckZvdW5kYXRpb246IGBcIiArIGF0dHJpYnV0ZU5hbWUgKyBcImAgbXVzdCBiZSBub24tbnVsbC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gTnVtYmVyKGF0dHJpYnV0ZVZhbHVlKTtcbiAgICAgICAgaWYgKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTURDU2xpZGVyRm91bmRhdGlvbjogYFwiICsgYXR0cmlidXRlTmFtZSArIFwiYCB2YWx1ZSBpcyBcIiArXG4gICAgICAgICAgICAgICAgKFwiYFwiICsgYXR0cmlidXRlVmFsdWUgKyBcImAsIGJ1dCBtdXN0IGJlIGEgbnVtYmVyLlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG4gICAgLyoqIENoZWNrcyB0aGF0IHRoZSBnaXZlbiBwcm9wZXJ0aWVzIGFyZSB2YWxpZCBzbGlkZXIgdmFsdWVzLiAqL1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnZhbGlkYXRlUHJvcGVydGllcyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbWluID0gX2EubWluLCBtYXggPSBfYS5tYXgsIHZhbHVlID0gX2EudmFsdWUsIHZhbHVlU3RhcnQgPSBfYS52YWx1ZVN0YXJ0LCBzdGVwID0gX2Euc3RlcDtcbiAgICAgICAgaWYgKG1pbiA+PSBtYXgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1EQ1NsaWRlckZvdW5kYXRpb246IG1pbiBtdXN0IGJlIHN0cmljdGx5IGxlc3MgdGhhbiBtYXguIFwiICtcbiAgICAgICAgICAgICAgICAoXCJDdXJyZW50OiBbbWluOiBcIiArIG1pbiArIFwiLCBtYXg6IFwiICsgbWF4ICsgXCJdXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcCA8PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNRENTbGlkZXJGb3VuZGF0aW9uOiBzdGVwIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIuIFwiICtcbiAgICAgICAgICAgICAgICAoXCJDdXJyZW50IHN0ZXA6IFwiICsgdGhpcy5zdGVwKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIDwgbWluIHx8IHZhbHVlID4gbWF4IHx8IHZhbHVlU3RhcnQgPCBtaW4gfHwgdmFsdWVTdGFydCA+IG1heCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1EQ1NsaWRlckZvdW5kYXRpb246IHZhbHVlcyBtdXN0IGJlIGluIFttaW4sIG1heF0gcmFuZ2UuIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKFwiQ3VycmVudCB2YWx1ZXM6IFtzdGFydCB2YWx1ZTogXCIgKyB2YWx1ZVN0YXJ0ICsgXCIsIGVuZCB2YWx1ZTogXCIgKyB2YWx1ZSArIFwiXVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWVTdGFydCA+IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTURDU2xpZGVyRm91bmRhdGlvbjogc3RhcnQgdmFsdWUgbXVzdCBiZSA8PSBlbmQgdmFsdWUuIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKFwiQ3VycmVudCB2YWx1ZXM6IFtzdGFydCB2YWx1ZTogXCIgKyB2YWx1ZVN0YXJ0ICsgXCIsIGVuZCB2YWx1ZTogXCIgKyB2YWx1ZSArIFwiXVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbnVtU3RlcHNWYWx1ZVN0YXJ0RnJvbU1pbiA9ICh2YWx1ZVN0YXJ0IC0gbWluKSAvIHN0ZXA7XG4gICAgICAgICAgICB2YXIgbnVtU3RlcHNWYWx1ZUZyb21NaW4gPSAodmFsdWUgLSBtaW4pIC8gc3RlcDtcbiAgICAgICAgICAgIGlmICgobnVtU3RlcHNWYWx1ZVN0YXJ0RnJvbU1pbiAlIDEpICE9PSAwIHx8XG4gICAgICAgICAgICAgICAgKG51bVN0ZXBzVmFsdWVGcm9tTWluICUgMSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNRENTbGlkZXJGb3VuZGF0aW9uOiBTbGlkZXIgdmFsdWVzIG11c3QgYmUgdmFsaWQgYmFzZWQgb24gdGhlIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKFwic3RlcCB2YWx1ZS4gQ3VycmVudCB2YWx1ZXM6IFtzdGFydCB2YWx1ZTogXCIgKyB2YWx1ZVN0YXJ0ICsgXCIsIFwiKSArXG4gICAgICAgICAgICAgICAgICAgIChcImVuZCB2YWx1ZTogXCIgKyB2YWx1ZSArIFwiXVwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7IC8vIFNpbmdsZSBwb2ludCBzbGlkZXIuXG4gICAgICAgICAgICBpZiAodmFsdWUgPCBtaW4gfHwgdmFsdWUgPiBtYXgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNRENTbGlkZXJGb3VuZGF0aW9uOiB2YWx1ZSBtdXN0IGJlIGluIFttaW4sIG1heF0gcmFuZ2UuIFwiICtcbiAgICAgICAgICAgICAgICAgICAgKFwiQ3VycmVudCB2YWx1ZTogXCIgKyB2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG51bVN0ZXBzVmFsdWVGcm9tTWluID0gKHZhbHVlIC0gbWluKSAvIHN0ZXA7XG4gICAgICAgICAgICBpZiAoKG51bVN0ZXBzVmFsdWVGcm9tTWluICUgMSkgIT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNRENTbGlkZXJGb3VuZGF0aW9uOiBTbGlkZXIgdmFsdWUgbXVzdCBiZSB2YWxpZCBiYXNlZCBvbiB0aGUgXCIgK1xuICAgICAgICAgICAgICAgICAgICAoXCJzdGVwIHZhbHVlLiBDdXJyZW50IHZhbHVlOiBcIiArIHZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyRXZlbnRIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVyV2luZG93RXZlbnRIYW5kbGVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgaWYgKE1EQ1NsaWRlckZvdW5kYXRpb24uU1VQUE9SVFNfUE9JTlRFUl9FVkVOVFMpIHtcbiAgICAgICAgICAgIC8vIElmIHN1cHBvcnRlZCwgdXNlIHBvaW50ZXIgZXZlbnRzIEFQSSB3aXRoICNzZXRQb2ludGVyQ2FwdHVyZS5cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlckV2ZW50SGFuZGxlcigncG9pbnRlcmRvd24nLCB0aGlzLnBvaW50ZXJkb3duTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVyRXZlbnRIYW5kbGVyKCdwb2ludGVydXAnLCB0aGlzLnBvaW50ZXJ1cExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgZmFsbCBiYWNrIHRvIG1vdXNlZG93bi90b3VjaHN0YXJ0IGV2ZW50cy5cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlckV2ZW50SGFuZGxlcignbW91c2Vkb3duJywgdGhpcy5tb3VzZWRvd25PclRvdWNoc3RhcnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm1vdXNlZG93bk9yVG91Y2hzdGFydExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJUaHVtYkV2ZW50SGFuZGxlcihUaHVtYi5TVEFSVCwgJ21vdXNlZW50ZXInLCB0aGlzLnRodW1iTW91c2VlbnRlckxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlclRodW1iRXZlbnRIYW5kbGVyKFRodW1iLlNUQVJULCAnbW91c2VsZWF2ZScsIHRoaXMudGh1bWJNb3VzZWxlYXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW5wdXRFdmVudEhhbmRsZXIoVGh1bWIuU1RBUlQsICdjaGFuZ2UnLCB0aGlzLmlucHV0U3RhcnRDaGFuZ2VMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnB1dEV2ZW50SGFuZGxlcihUaHVtYi5TVEFSVCwgJ2ZvY3VzJywgdGhpcy5pbnB1dFN0YXJ0Rm9jdXNMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnB1dEV2ZW50SGFuZGxlcihUaHVtYi5TVEFSVCwgJ2JsdXInLCB0aGlzLmlucHV0U3RhcnRCbHVyTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlclRodW1iRXZlbnRIYW5kbGVyKFRodW1iLkVORCwgJ21vdXNlZW50ZXInLCB0aGlzLnRodW1iTW91c2VlbnRlckxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVyVGh1bWJFdmVudEhhbmRsZXIoVGh1bWIuRU5ELCAnbW91c2VsZWF2ZScsIHRoaXMudGh1bWJNb3VzZWxlYXZlTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnB1dEV2ZW50SGFuZGxlcihUaHVtYi5FTkQsICdjaGFuZ2UnLCB0aGlzLmlucHV0RW5kQ2hhbmdlTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnB1dEV2ZW50SGFuZGxlcihUaHVtYi5FTkQsICdmb2N1cycsIHRoaXMuaW5wdXRFbmRGb2N1c0xpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW5wdXRFdmVudEhhbmRsZXIoVGh1bWIuRU5ELCAnYmx1cicsIHRoaXMuaW5wdXRFbmRCbHVyTGlzdGVuZXIpO1xuICAgIH07XG4gICAgTURDU2xpZGVyRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckV2ZW50SGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyV2luZG93RXZlbnRIYW5kbGVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZUxpc3RlbmVyKTtcbiAgICAgICAgaWYgKE1EQ1NsaWRlckZvdW5kYXRpb24uU1VQUE9SVFNfUE9JTlRFUl9FVkVOVFMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyRXZlbnRIYW5kbGVyKCdwb2ludGVyZG93bicsIHRoaXMucG9pbnRlcmRvd25MaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckV2ZW50SGFuZGxlcigncG9pbnRlcnVwJywgdGhpcy5wb2ludGVydXBMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckV2ZW50SGFuZGxlcignbW91c2Vkb3duJywgdGhpcy5tb3VzZWRvd25PclRvdWNoc3RhcnRMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckV2ZW50SGFuZGxlcigndG91Y2hzdGFydCcsIHRoaXMubW91c2Vkb3duT3JUb3VjaHN0YXJ0TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyVGh1bWJFdmVudEhhbmRsZXIoVGh1bWIuU1RBUlQsICdtb3VzZWVudGVyJywgdGhpcy50aHVtYk1vdXNlZW50ZXJMaXN0ZW5lcik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlclRodW1iRXZlbnRIYW5kbGVyKFRodW1iLlNUQVJULCAnbW91c2VsZWF2ZScsIHRoaXMudGh1bWJNb3VzZWxlYXZlTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnB1dEV2ZW50SGFuZGxlcihUaHVtYi5TVEFSVCwgJ2NoYW5nZScsIHRoaXMuaW5wdXRTdGFydENoYW5nZUxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW5wdXRFdmVudEhhbmRsZXIoVGh1bWIuU1RBUlQsICdmb2N1cycsIHRoaXMuaW5wdXRTdGFydEZvY3VzTGlzdGVuZXIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnB1dEV2ZW50SGFuZGxlcihUaHVtYi5TVEFSVCwgJ2JsdXInLCB0aGlzLmlucHV0U3RhcnRCbHVyTGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyVGh1bWJFdmVudEhhbmRsZXIoVGh1bWIuRU5ELCAnbW91c2VlbnRlcicsIHRoaXMudGh1bWJNb3VzZWVudGVyTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlclRodW1iRXZlbnRIYW5kbGVyKFRodW1iLkVORCwgJ21vdXNlbGVhdmUnLCB0aGlzLnRodW1iTW91c2VsZWF2ZUxpc3RlbmVyKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnB1dEV2ZW50SGFuZGxlcihUaHVtYi5FTkQsICdjaGFuZ2UnLCB0aGlzLmlucHV0RW5kQ2hhbmdlTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlcklucHV0RXZlbnRIYW5kbGVyKFRodW1iLkVORCwgJ2ZvY3VzJywgdGhpcy5pbnB1dEVuZEZvY3VzTGlzdGVuZXIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlcklucHV0RXZlbnRIYW5kbGVyKFRodW1iLkVORCwgJ2JsdXInLCB0aGlzLmlucHV0RW5kQmx1ckxpc3RlbmVyKTtcbiAgICB9O1xuICAgIE1EQ1NsaWRlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVBvaW50ZXJ1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVVcCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckV2ZW50SGFuZGxlcigncG9pbnRlcm1vdmUnLCB0aGlzLm1vdmVMaXN0ZW5lcik7XG4gICAgfTtcbiAgICBNRENTbGlkZXJGb3VuZGF0aW9uLlNVUFBPUlRTX1BPSU5URVJfRVZFTlRTID0gSEFTX1dJTkRPVyAmJiBCb29sZWFuKHdpbmRvdy5Qb2ludGVyRXZlbnQpICYmXG4gICAgICAgIC8vICNzZXRQb2ludGVyQ2FwdHVyZSBpcyBidWdneSBvbiBpT1MsIHNvIHdlIGNhbid0IHVzZSBwb2ludGVyIGV2ZW50c1xuICAgICAgICAvLyB1bnRpbCB0aGUgZm9sbG93aW5nIGJ1ZyBpcyBmaXhlZDpcbiAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIyMDE5NlxuICAgICAgICAhaXNJT1MoKTtcbiAgICByZXR1cm4gTURDU2xpZGVyRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDU2xpZGVyRm91bmRhdGlvbiB9O1xuZnVuY3Rpb24gaXNJT1MoKSB7XG4gICAgLy8gU291cmNlOlxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzkwMzg2MjUvZGV0ZWN0LWlmLWRldmljZS1pcy1pb3NcbiAgICByZXR1cm4gW1xuICAgICAgICAnaVBhZCBTaW11bGF0b3InLCAnaVBob25lIFNpbXVsYXRvcicsICdpUG9kIFNpbXVsYXRvcicsICdpUGFkJywgJ2lQaG9uZScsXG4gICAgICAgICdpUG9kJ1xuICAgIF0uaW5jbHVkZXMobmF2aWdhdG9yLnBsYXRmb3JtKVxuICAgICAgICAvLyBpUGFkIG9uIGlPUyAxMyBkZXRlY3Rpb25cbiAgICAgICAgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ01hYycpICYmICdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCk7XG59XG4vKipcbiAqIEdpdmVuIGEgbnVtYmVyLCByZXR1cm5zIHRoZSBudW1iZXIgb2YgZGlnaXRzIHRoYXQgYXBwZWFyIGFmdGVyIHRoZVxuICogZGVjaW1hbCBwb2ludC5cbiAqIFNlZVxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTUzOTUxMy9pcy10aGVyZS1hLXJlbGlhYmxlLXdheS1pbi1qYXZhc2NyaXB0LXRvLW9idGFpbi10aGUtbnVtYmVyLW9mLWRlY2ltYWwtcGxhY2VzLW9mXG4gKi9cbmZ1bmN0aW9uIGdldE51bURlY2ltYWxQbGFjZXMobikge1xuICAgIC8vIFB1bGwgb3V0IHRoZSBmcmFjdGlvbiBhbmQgdGhlIGV4cG9uZW50LlxuICAgIHZhciBtYXRjaCA9IC8oPzpcXC4oXFxkKykpPyg/OltlRV0oWytcXC1dP1xcZCspKT8kLy5leGVjKFN0cmluZyhuKSk7XG4gICAgLy8gTmFOIG9yIEluZmluaXR5IG9yIGludGVnZXIuXG4gICAgLy8gV2UgYXJiaXRyYXJpbHkgZGVjaWRlIHRoYXQgSW5maW5pdHkgaXMgaW50ZWdyYWwuXG4gICAgaWYgKCFtYXRjaClcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgdmFyIGZyYWN0aW9uID0gbWF0Y2hbMV0gfHwgJyc7IC8vIEUuZy4gMS4yMzRlLTIgPT4gMjM0XG4gICAgdmFyIGV4cG9uZW50ID0gbWF0Y2hbMl0gfHwgMDsgLy8gRS5nLiAxLjIzNGUtMiA9PiAtMlxuICAgIC8vIENvdW50IHRoZSBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBmcmFjdGlvbiBhbmQgc3VidHJhY3QgdGhlXG4gICAgLy8gZXhwb25lbnQgdG8gc2ltdWxhdGUgbW92aW5nIHRoZSBkZWNpbWFsIHBvaW50IGxlZnQgYnkgZXhwb25lbnQgcGxhY2VzLlxuICAgIC8vIDEuMjM0ZSsyIGhhcyAxIGZyYWN0aW9uIGRpZ2l0IGFuZCAnMjM0Jy5sZW5ndGggLSAgMiA9PSAxXG4gICAgLy8gMS4yMzRlLTIgaGFzIDUgZnJhY3Rpb24gZGlnaXQgYW5kICcyMzQnLmxlbmd0aCAtIC0yID09IDVcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgLy8gbG93ZXIgbGltaXRcbiAgICAoZnJhY3Rpb24gPT09ICcwJyA/IDAgOiBmcmFjdGlvbi5sZW5ndGgpIC0gTnVtYmVyKGV4cG9uZW50KSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsImltcG9ydCB7XG4gIGJ1YmJsZSxcbiAgbGlzdGVuLFxuICBwcmV2ZW50X2RlZmF1bHQsXG4gIHN0b3BfcHJvcGFnYXRpb24sXG59IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG5cbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBET00gZXZlbnRzLlxuY29uc3Qgb2xkTW9kaWZpZXJSZWdleCA9IC9eW2Etel0rKD86Oig/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBvdGhlciBldmVudHMuXG5jb25zdCBuZXdNb2RpZmllclJlZ2V4ID0gL15bXiRdKyg/OlxcJCg/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFdmVudHNCdWlsZGVyKGNvbXBvbmVudCkge1xuICAvLyBUaGlzIGlzIG91ciBwc2V1ZG8gJG9uIGZ1bmN0aW9uLiBJdCBpcyBkZWZpbmVkIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgbGV0ICRvbjtcbiAgLy8gVGhpcyBpcyBhIGxpc3Qgb2YgZXZlbnRzIGJvdW5kIGJlZm9yZSBtb3VudC5cbiAgbGV0IGV2ZW50cyA9IFtdO1xuICAvLyBUaGlzIGlzIHRoZSBvcmlnaW5hbCBjb21wb25lbnQgJG9uIGZ1bmN0aW9uLlxuICBjb25zdCBjb21wb25lbnRPbiA9IGNvbXBvbmVudC4kb247XG5cbiAgLy8gQW5kIHdlIG92ZXJyaWRlIHRoZSAkb24gZnVuY3Rpb24gdG8gZm9yd2FyZCBhbGwgYm91bmQgZXZlbnRzLlxuICBjb21wb25lbnQuJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgbGV0IGRlc3RydWN0b3IgPSAoKSA9PiB7fTtcbiAgICBpZiAoJG9uKSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICBkZXN0cnVjdG9yID0gJG9uKGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIGJlZm9yZSBtb3VudCBieSBTdmVsdGUuXG4gICAgICBldmVudHMucHVzaChbZXZlbnRUeXBlLCBjYWxsYmFja10pO1xuICAgIH1cbiAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcblxuICAgIGlmIChvbGRNb2RpZmllck1hdGNoICYmIGNvbnNvbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ0V2ZW50IG1vZGlmaWVycyBpbiBTTVVJIG5vdyB1c2UgXCIkXCIgaW5zdGVhZCBvZiBcIjpcIiwgc28gdGhhdCBhbGwgZXZlbnRzIGNhbiBiZSBib3VuZCB3aXRoIG1vZGlmaWVycy4gUGxlYXNlIHVwZGF0ZSB5b3VyIGV2ZW50IGJpbmRpbmc6ICcsXG4gICAgICAgIGV2ZW50VHlwZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgLy8gUmVtb3ZlIG1vZGlmaWVycyBmcm9tIHRoZSByZWFsIGV2ZW50LlxuICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkb24gZnVuY3Rpb24uXG4gICAgY29uc3QgY29tcG9uZW50RGVzdHJ1Y3RvciA9IGNvbXBvbmVudE9uLmNhbGwoXG4gICAgICBjb21wb25lbnQsXG4gICAgICBldmVudFR5cGUsXG4gICAgICBjYWxsYmFja1xuICAgICk7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGRlc3RydWN0b3IoKTtcbiAgICAgIHJldHVybiBjb21wb25lbnREZXN0cnVjdG9yKC4uLmFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChlKSB7XG4gICAgLy8gSW50ZXJuYWxseSBidWJibGUgdGhlIGV2ZW50IHVwIGZyb20gU3ZlbHRlIGNvbXBvbmVudHMuXG4gICAgYnViYmxlKGNvbXBvbmVudCwgZSk7XG4gIH1cblxuICByZXR1cm4gKG5vZGUpID0+IHtcbiAgICBjb25zdCBkZXN0cnVjdG9ycyA9IFtdO1xuICAgIGNvbnN0IGZvcndhcmREZXN0cnVjdG9ycyA9IHt9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgZm9yd2FyZGluZyBhbGwgYm91bmQgZXZlbnRzLlxuICAgICRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgICBsZXQgaGFuZGxlciA9IGNhbGxiYWNrO1xuICAgICAgLy8gRE9NIGFkZEV2ZW50TGlzdGVuZXIgb3B0aW9ucyBhcmd1bWVudC5cbiAgICAgIGxldCBvcHRpb25zID0gZmFsc2U7XG4gICAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG4gICAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgICAvLyBQYXJzZSB0aGUgZXZlbnQgbW9kaWZpZXJzLlxuICAgICAgICAvLyBTdXBwb3J0ZWQgbW9kaWZpZXJzOlxuICAgICAgICAvLyAtIHByZXZlbnREZWZhdWx0XG4gICAgICAgIC8vIC0gc3RvcFByb3BhZ2F0aW9uXG4gICAgICAgIC8vIC0gcGFzc2l2ZVxuICAgICAgICAvLyAtIG5vbnBhc3NpdmVcbiAgICAgICAgLy8gLSBjYXB0dXJlXG4gICAgICAgIC8vIC0gb25jZVxuICAgICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuZnJvbUVudHJpZXMocGFydHMuc2xpY2UoMSkubWFwKChtb2QpID0+IFttb2QsIHRydWVdKSk7XG4gICAgICAgIGlmIChvcHRpb25zLm5vbnBhc3NpdmUpIHtcbiAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5ub25wYXNzaXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgaGFuZGxlciA9IHByZXZlbnRfZGVmYXVsdChoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcF9wcm9wYWdhdGlvbihoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5zdG9wUHJvcGFnYXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTGlzdGVuIGZvciB0aGUgZXZlbnQgZGlyZWN0bHksIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAgICBjb25zdCBvZmYgPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IGRlc3RydWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIG9mZigpO1xuICAgICAgICBjb25zdCBpZHggPSBkZXN0cnVjdG9ycy5pbmRleE9mKGRlc3RydWN0b3IpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICBkZXN0cnVjdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZGVzdHJ1Y3RvcnMucHVzaChkZXN0cnVjdG9yKTtcblxuICAgICAgLy8gRm9yd2FyZCB0aGUgZXZlbnQgZnJvbSBTdmVsdGUuXG4gICAgICBpZiAoIWV2ZW50VHlwZSBpbiBmb3J3YXJkRGVzdHJ1Y3RvcnMpIHtcbiAgICAgICAgZm9yd2FyZERlc3RydWN0b3JzW2V2ZW50VHlwZV0gPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBmb3J3YXJkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc3RydWN0b3I7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBMaXN0ZW4gdG8gYWxsIHRoZSBldmVudHMgYWRkZWQgYmVmb3JlIG1vdW50LlxuICAgICAgJG9uKGV2ZW50c1tpXVswXSwgZXZlbnRzW2ldWzFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0cnVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRlc3RydWN0b3JzW2ldKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGZvcndhcmRlcnMuXG4gICAgICAgIGZvciAobGV0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKGZvcndhcmREZXN0cnVjdG9ycykpIHtcbiAgICAgICAgICBlbnRyeVsxXSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xhc3NNYXAoY2xhc3NPYmopIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqKVxuICAgIC5maWx0ZXIoKFtuYW1lLCB2YWx1ZV0pID0+IG5hbWUgIT09ICcnICYmIHZhbHVlKVxuICAgIC5tYXAoKFtuYW1lXSkgPT4gbmFtZSlcbiAgICAuam9pbignICcpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKFxuICBlbGVtZW50LFxuICBldmVudFR5cGUsXG4gIGRldGFpbCA9IHt9LFxuICBldmVudEluaXQgPSB7IGJ1YmJsZXM6IHRydWUgfVxuKSB7XG4gIGlmICh0eXBlb2YgRXZlbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChldmVudFR5cGUsIGV2ZW50SW5pdCk7XG4gICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuICAgIGNvbnN0IGVsID0gJ2dldEVsZW1lbnQnIGluIGVsZW1lbnQgPyBlbGVtZW50LmdldEVsZW1lbnQoKSA6IGVsZW1lbnQ7XG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZXhjbHVkZShvYmosIGtleXMpIHtcbiAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgY29uc3QgbmV3T2JqID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWUgPSBuYW1lc1tpXTtcbiAgICBjb25zdCBjYXNoSW5kZXggPSBuYW1lLmluZGV4T2YoJyQnKTtcbiAgICBpZiAoXG4gICAgICBjYXNoSW5kZXggIT09IC0xICYmXG4gICAgICBrZXlzLmluZGV4T2YobmFtZS5zdWJzdHJpbmcoMCwgY2FzaEluZGV4ICsgMSkpICE9PSAtMVxuICAgICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChrZXlzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbmV3T2JqW25hbWVdID0gb2JqW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVmaXhGaWx0ZXIob2JqLCBwcmVmaXgpIHtcbiAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgY29uc3QgbmV3T2JqID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWUgPSBuYW1lc1tpXTtcbiAgICBpZiAobmFtZS5zdWJzdHJpbmcoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgbmV3T2JqW25hbWUuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgpXSA9IG9ialtuYW1lXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbnMobm9kZSwgYWN0aW9ucykge1xuICBsZXQgb2JqZWN0cyA9IFtdO1xuXG4gIGlmIChhY3Rpb25zKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGlzQXJyYXkgPyBhY3Rpb25zW2ldWzBdIDogYWN0aW9uc1tpXTtcbiAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUsIGFjdGlvbnNbaV1bMV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlKGFjdGlvbnMpIHtcbiAgICAgIGlmICgoKGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGgpIHx8IDApICE9IG9iamVjdHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgbm90IGNoYW5nZSB0aGUgbGVuZ3RoIG9mIGFuIGFjdGlvbnMgYXJyYXkuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChvYmplY3RzW2ldICYmICd1cGRhdGUnIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKGFjdGlvbnNbaV1bMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAnZGVzdHJveScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgIG9iamVjdHNbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24sIHV0aWwgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlJztcbmltcG9ydCB7IGV2ZW50cywgcG9ueWZpbGwgfSBmcm9tICdAbWF0ZXJpYWwvZG9tJztcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuY29uc3QgeyBhcHBseVBhc3NpdmUgfSA9IGV2ZW50cztcbmNvbnN0IHsgbWF0Y2hlcyB9ID0gcG9ueWZpbGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJpcHBsZShcbiAgbm9kZSxcbiAge1xuICAgIHJpcHBsZSA9IHRydWUsXG4gICAgc3VyZmFjZSA9IGZhbHNlLFxuICAgIHVuYm91bmRlZCA9IGZhbHNlLFxuICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgY29sb3IgPSBudWxsLFxuICAgIGFjdGl2ZSA9IG51bGwsXG4gICAgZXZlbnRUYXJnZXQgPSBudWxsLFxuICAgIGFjdGl2ZVRhcmdldCA9IG51bGwsXG4gICAgYWRkQ2xhc3MgPSAoY2xhc3NOYW1lKSA9PiBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICByZW1vdmVDbGFzcyA9IChjbGFzc05hbWUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgIGFkZFN0eWxlID0gKG5hbWUsIHZhbHVlKSA9PiBub2RlLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKSxcbiAgICBpbml0UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLFxuICB9ID0ge31cbikge1xuICBsZXQgaW5zdGFuY2U7XG4gIGxldCBhZGRMYXlvdXRMaXN0ZW5lciA9IGdldENvbnRleHQoJ1NNVUk6YWRkTGF5b3V0TGlzdGVuZXInKTtcbiAgbGV0IHJlbW92ZUxheW91dExpc3RlbmVyO1xuICBsZXQgb2xkQWN0aXZlID0gYWN0aXZlO1xuICBsZXQgb2xkRXZlbnRUYXJnZXQgPSBldmVudFRhcmdldDtcbiAgbGV0IG9sZEFjdGl2ZVRhcmdldCA9IGFjdGl2ZVRhcmdldDtcblxuICBmdW5jdGlvbiBoYW5kbGVQcm9wcygpIHtcbiAgICBpZiAoc3VyZmFjZSkge1xuICAgICAgYWRkQ2xhc3MoJ21kYy1yaXBwbGUtc3VyZmFjZScpO1xuICAgICAgaWYgKGNvbG9yID09PSAncHJpbWFyeScpIHtcbiAgICAgICAgYWRkQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXNlY29uZGFyeScpO1xuICAgICAgfSBlbHNlIGlmIChjb2xvciA9PT0gJ3NlY29uZGFyeScpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgYWRkQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXNlY29uZGFyeScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXNlY29uZGFyeScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhY3RpdmF0aW9uIGZpcnN0LlxuICAgIGlmIChpbnN0YW5jZSAmJiBvbGRBY3RpdmUgIT09IGFjdGl2ZSkge1xuICAgICAgb2xkQWN0aXZlID0gYWN0aXZlO1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBpbnN0YW5jZS5hY3RpdmF0ZSgpO1xuICAgICAgfSBlbHNlIGlmIChhY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGVuIGNyZWF0ZS9kZXN0cm95IGFuIGluc3RhbmNlLlxuICAgIGlmIChyaXBwbGUgJiYgIWluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKHtcbiAgICAgICAgYWRkQ2xhc3MsXG4gICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKHRhcmdldCkgPT4gbm9kZS5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICksXG4gICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIChldmVudFRhcmdldCB8fCBub2RlKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICksXG4gICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT5cbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7XG4gICAgICAgICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgfSksXG4gICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT5cbiAgICAgICAgICBhY3RpdmUgPT0gbnVsbCA/IG1hdGNoZXMoYWN0aXZlVGFyZ2V0IHx8IG5vZGUsICc6YWN0aXZlJykgOiBhY3RpdmUsXG4gICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAhIWRpc2FibGVkLFxuICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4gISF1bmJvdW5kZWQsXG4gICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICksXG4gICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAoZXZlbnRUYXJnZXQgfHwgbm9kZSkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PlxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBhZGRTdHlsZSxcbiAgICAgIH0pO1xuXG4gICAgICBpbml0UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuICAgICAgICBpbnN0YW5jZS5zZXRVbmJvdW5kZWQodW5ib3VuZGVkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UgJiYgIXJpcHBsZSkge1xuICAgICAgaW5pdFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTm93IGhhbmRsZSBldmVudC9hY3RpdmUgdGFyZ2V0c1xuICAgIGlmIChcbiAgICAgIGluc3RhbmNlICYmXG4gICAgICAob2xkRXZlbnRUYXJnZXQgIT09IGV2ZW50VGFyZ2V0IHx8IG9sZEFjdGl2ZVRhcmdldCAhPT0gYWN0aXZlVGFyZ2V0KVxuICAgICkge1xuICAgICAgb2xkRXZlbnRUYXJnZXQgPSBldmVudFRhcmdldDtcbiAgICAgIG9sZEFjdGl2ZVRhcmdldCA9IGFjdGl2ZVRhcmdldDtcblxuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuICAgICAgICAgIGluc3RhbmNlLnNldFVuYm91bmRlZCh1bmJvdW5kZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXJpcHBsZSAmJiB1bmJvdW5kZWQpIHtcbiAgICAgIGFkZENsYXNzKCdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQcm9wcygpO1xuXG4gIGlmIChhZGRMYXlvdXRMaXN0ZW5lcikge1xuICAgIHJlbW92ZUxheW91dExpc3RlbmVyID0gYWRkTGF5b3V0TGlzdGVuZXIobGF5b3V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxheW91dCgpIHtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLmxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlKHByb3BzKSB7XG4gICAgICAoe1xuICAgICAgICByaXBwbGUsXG4gICAgICAgIHN1cmZhY2UsXG4gICAgICAgIHVuYm91bmRlZCxcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBhY3RpdmUsXG4gICAgICAgIGV2ZW50VGFyZ2V0LFxuICAgICAgICBhY3RpdmVUYXJnZXQsXG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgYWRkU3R5bGUsXG4gICAgICAgIGluaXRQcm9taXNlLFxuICAgICAgfSA9IHtcbiAgICAgICAgcmlwcGxlOiB0cnVlLFxuICAgICAgICBzdXJmYWNlOiBmYWxzZSxcbiAgICAgICAgdW5ib3VuZGVkOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjb2xvcjogbnVsbCxcbiAgICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgICBldmVudFRhcmdldDogbnVsbCxcbiAgICAgICAgYWN0aXZlVGFyZ2V0OiBudWxsLFxuICAgICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgICAgYWRkU3R5bGU6IChuYW1lLCB2YWx1ZSkgPT4gbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSksXG4gICAgICAgIGluaXRQcm9taXNlOiBQcm9taXNlLnJlc29sdmUoKSxcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZVByb3BzKCk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdtZGMtcmlwcGxlLXN1cmZhY2UnKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXNlY29uZGFyeScpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVtb3ZlTGF5b3V0TGlzdGVuZXIpIHtcbiAgICAgICAgcmVtb3ZlTGF5b3V0TGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuIiwiPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtPYmplY3QuZW50cmllcyh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1zbGlkZXInOiB0cnVlLFxuICAgICdtZGMtc2xpZGVyLS1yYW5nZSc6IHJhbmdlLFxuICAgICdtZGMtc2xpZGVyLS1kaXNjcmV0ZSc6IGRpc2NyZXRlLFxuICAgICdtZGMtc2xpZGVyLS10aWNrLW1hcmtzJzogZGlzY3JldGUgJiYgdGlja01hcmtzLFxuICAgICdtZGMtc2xpZGVyLS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgIC4uLmludGVybmFsQ2xhc3NlcyxcbiAgfSlcbiAgICAuZmlsdGVyKChbbmFtZSwgdmFsdWVdKSA9PiBuYW1lICE9PSAnJyAmJiB2YWx1ZSlcbiAgICAubWFwKChbbmFtZV0pID0+IG5hbWUpXG4gICAgLmpvaW4oJyAnKX1cbiAgey4uLmV4Y2x1ZGUoJCRyZXN0UHJvcHMsIFsnaW5wdXQkJ10pfVxuPlxuICB7I2lmIHJhbmdlfVxuICAgIDxpbnB1dFxuICAgICAgYmluZDp0aGlzPXtpbnB1dFN0YXJ0fVxuICAgICAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICAgICAgW2lucHV0JGNsYXNzXTogdHJ1ZSxcbiAgICAgICAgJ21kYy1zbGlkZXJfX2lucHV0JzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgIHtkaXNhYmxlZH1cbiAgICAgIHtzdGVwfVxuICAgICAge21pbn1cbiAgICAgIG1heD17ZW5kfVxuICAgICAgYmluZDp2YWx1ZT17c3RhcnR9XG4gICAgICBvbjpibHVyXG4gICAgICBvbjpmb2N1c1xuICAgICAgey4uLmlucHV0U3RhcnRBdHRyc31cbiAgICAgIHsuLi5wcmVmaXhGaWx0ZXIoJCRyZXN0UHJvcHMsICdpbnB1dCQnKX1cbiAgICAvPlxuICAgIDxpbnB1dFxuICAgICAgYmluZDp0aGlzPXtpbnB1dH1cbiAgICAgIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgICAgIFtpbnB1dCRjbGFzc106IHRydWUsXG4gICAgICAgICdtZGMtc2xpZGVyX19pbnB1dCc6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICB7ZGlzYWJsZWR9XG4gICAgICB7c3RlcH1cbiAgICAgIG1pbj17c3RhcnR9XG4gICAgICB7bWF4fVxuICAgICAgYmluZDp2YWx1ZT17ZW5kfVxuICAgICAgb246Ymx1clxuICAgICAgb246Zm9jdXNcbiAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgey4uLmlucHV0QXR0cnN9XG4gICAgICB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAnaW5wdXQkJyl9XG4gICAgLz5cbiAgezplbHNlfVxuICAgIDxpbnB1dFxuICAgICAgYmluZDp0aGlzPXtpbnB1dH1cbiAgICAgIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgICAgIFtpbnB1dCRjbGFzc106IHRydWUsXG4gICAgICAgICdtZGMtc2xpZGVyX19pbnB1dCc6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICB7ZGlzYWJsZWR9XG4gICAgICB7c3RlcH1cbiAgICAgIHttaW59XG4gICAgICB7bWF4fVxuICAgICAgYmluZDp2YWx1ZVxuICAgICAgb246Ymx1clxuICAgICAgb246Zm9jdXNcbiAgICAgIHsuLi5pbnB1dFByb3BzfVxuICAgICAgey4uLmlucHV0QXR0cnN9XG4gICAgICB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAnaW5wdXQkJyl9XG4gICAgLz5cbiAgey9pZn1cblxuICA8ZGl2IGNsYXNzPVwibWRjLXNsaWRlcl9fdHJhY2tcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLXNsaWRlcl9fdHJhY2stLWluYWN0aXZlXCIgLz5cbiAgICA8ZGl2IGNsYXNzPVwibWRjLXNsaWRlcl9fdHJhY2stLWFjdGl2ZVwiPlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzcz1cIm1kYy1zbGlkZXJfX3RyYWNrLS1hY3RpdmVfZmlsbFwiXG4gICAgICAgIHN0eWxlPXtPYmplY3QuZW50cmllcyh0cmFja0FjdGl2ZVN0eWxlcylcbiAgICAgICAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAgICAgICAuam9pbignICcpfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgICB7I2lmIGRpc2NyZXRlICYmIHRpY2tNYXJrcyAmJiBzdGVwID4gMH1cbiAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc2xpZGVyX190aWNrLW1hcmtzXCI+XG4gICAgICAgIHsjZWFjaCBjdXJyZW50VGlja01hcmtzIGFzIHRpY2tNYXJrfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPXt0aWNrTWFyayA9PT0gVGlja01hcmsuQUNUSVZFXG4gICAgICAgICAgICAgID8gJ21kYy1zbGlkZXJfX3RpY2stbWFyay0tYWN0aXZlJ1xuICAgICAgICAgICAgICA6ICdtZGMtc2xpZGVyX190aWNrLW1hcmstLWluYWN0aXZlJ31cbiAgICAgICAgICAvPlxuICAgICAgICB7L2VhY2h9XG4gICAgICA8L2Rpdj5cbiAgICB7L2lmfVxuICA8L2Rpdj5cbiAgeyNpZiByYW5nZX1cbiAgICA8ZGl2XG4gICAgICBiaW5kOnRoaXM9e3RodW1iU3RhcnR9XG4gICAgICB1c2U6UmlwcGxlPXt7XG4gICAgICAgIHVuYm91bmRlZDogdHJ1ZSxcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGFjdGl2ZTogdGh1bWJTdGFydFJpcHBsZUFjdGl2ZSxcbiAgICAgICAgZXZlbnRUYXJnZXQ6IGlucHV0U3RhcnQsXG4gICAgICAgIGFjdGl2ZVRhcmdldDogaW5wdXRTdGFydCxcbiAgICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IGFkZFRodW1iQ2xhc3MoY2xhc3NOYW1lLCBUaHVtYi5TVEFSVCksXG4gICAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiByZW1vdmVUaHVtYkNsYXNzKGNsYXNzTmFtZSwgVGh1bWIuU1RBUlQpLFxuICAgICAgICBhZGRTdHlsZTogKG5hbWUsIHZhbHVlKSA9PiBhZGRUaHVtYlN0eWxlKG5hbWUsIHZhbHVlLCBUaHVtYi5TVEFSVCksXG4gICAgICB9fVxuICAgICAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICAgICAgJ21kYy1zbGlkZXJfX3RodW1iJzogdHJ1ZSxcbiAgICAgICAgLi4udGh1bWJTdGFydENsYXNzZXMsXG4gICAgICB9KX1cbiAgICAgIHN0eWxlPXtPYmplY3QuZW50cmllcyh0aHVtYlN0YXJ0U3R5bGVzKVxuICAgICAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICB7I2lmIGRpc2NyZXRlfVxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXNsaWRlcl9fdmFsdWUtaW5kaWNhdG9yLWNvbnRhaW5lclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc2xpZGVyX192YWx1ZS1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLXNsaWRlcl9fdmFsdWUtaW5kaWNhdG9yLXRleHRcIj57c3RhcnR9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIHsvaWZ9XG4gICAgICA8ZGl2IGJpbmQ6dGhpcz17dGh1bWJLbm9iU3RhcnR9IGNsYXNzPVwibWRjLXNsaWRlcl9fdGh1bWIta25vYlwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdlxuICAgICAgYmluZDp0aGlzPXt0aHVtYkVsfVxuICAgICAgdXNlOlJpcHBsZT17e1xuICAgICAgICB1bmJvdW5kZWQ6IHRydWUsXG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBhY3RpdmU6IHRodW1iUmlwcGxlQWN0aXZlLFxuICAgICAgICBldmVudFRhcmdldDogaW5wdXQsXG4gICAgICAgIGFjdGl2ZVRhcmdldDogaW5wdXQsXG4gICAgICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiBhZGRUaHVtYkNsYXNzKGNsYXNzTmFtZSwgVGh1bWIuRU5EKSxcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHJlbW92ZVRodW1iQ2xhc3MoY2xhc3NOYW1lLCBUaHVtYi5FTkQpLFxuICAgICAgICBhZGRTdHlsZTogKG5hbWUsIHZhbHVlKSA9PiBhZGRUaHVtYlN0eWxlKG5hbWUsIHZhbHVlLCBUaHVtYi5FTkQpLFxuICAgICAgfX1cbiAgICAgIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgICAgICdtZGMtc2xpZGVyX190aHVtYic6IHRydWUsXG4gICAgICAgIC4uLnRodW1iQ2xhc3NlcyxcbiAgICAgIH0pfVxuICAgICAgc3R5bGU9e09iamVjdC5lbnRyaWVzKHRodW1iU3R5bGVzKVxuICAgICAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICB7I2lmIGRpc2NyZXRlfVxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXNsaWRlcl9fdmFsdWUtaW5kaWNhdG9yLWNvbnRhaW5lclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZGMtc2xpZGVyX192YWx1ZS1pbmRpY2F0b3JcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWRjLXNsaWRlcl9fdmFsdWUtaW5kaWNhdG9yLXRleHRcIj57ZW5kfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB7L2lmfVxuICAgICAgPGRpdiBiaW5kOnRoaXM9e3RodW1iS25vYn0gY2xhc3M9XCJtZGMtc2xpZGVyX190aHVtYi1rbm9iXCIgLz5cbiAgICA8L2Rpdj5cbiAgezplbHNlfVxuICAgIDxkaXZcbiAgICAgIGJpbmQ6dGhpcz17dGh1bWJFbH1cbiAgICAgIHVzZTpSaXBwbGU9e3tcbiAgICAgICAgdW5ib3VuZGVkOiB0cnVlLFxuICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgYWN0aXZlOiB0aHVtYlJpcHBsZUFjdGl2ZSxcbiAgICAgICAgZXZlbnRUYXJnZXQ6IGlucHV0LFxuICAgICAgICBhY3RpdmVUYXJnZXQ6IGlucHV0LFxuICAgICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gYWRkVGh1bWJDbGFzcyhjbGFzc05hbWUpLFxuICAgICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gcmVtb3ZlVGh1bWJDbGFzcyhjbGFzc05hbWUpLFxuICAgICAgICBhZGRTdHlsZTogKG5hbWUsIHZhbHVlKSA9PiBhZGRUaHVtYlN0eWxlKG5hbWUsIHZhbHVlKSxcbiAgICAgIH19XG4gICAgICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICAgICAnbWRjLXNsaWRlcl9fdGh1bWInOiB0cnVlLFxuICAgICAgICAuLi50aHVtYkNsYXNzZXMsXG4gICAgICB9KX1cbiAgICAgIHN0eWxlPXtPYmplY3QuZW50cmllcyh0aHVtYlN0eWxlcylcbiAgICAgICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgPlxuICAgICAgeyNpZiBkaXNjcmV0ZX1cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1zbGlkZXJfX3ZhbHVlLWluZGljYXRvci1jb250YWluZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLXNsaWRlcl9fdmFsdWUtaW5kaWNhdG9yXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1kYy1zbGlkZXJfX3ZhbHVlLWluZGljYXRvci10ZXh0XCI+e3ZhbHVlfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB7L2lmfVxuICAgICAgPGRpdiBiaW5kOnRoaXM9e3RodW1iS25vYn0gY2xhc3M9XCJtZGMtc2xpZGVyX190aHVtYi1rbm9iXCIgLz5cbiAgICA8L2Rpdj5cbiAgey9pZn1cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENTbGlkZXJGb3VuZGF0aW9uLCBUaHVtYiwgVGlja01hcmsgfSBmcm9tICdAbWF0ZXJpYWwvc2xpZGVyJztcbiAgaW1wb3J0IHsgb25Nb3VudCwgb25EZXN0cm95LCBnZXRDb250ZXh0LCB0aWNrIH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICBleGNsdWRlLFxuICAgIHByZWZpeEZpbHRlcixcbiAgICB1c2VBY3Rpb25zLFxuICAgIGRpc3BhdGNoLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG4gIGltcG9ydCBSaXBwbGUgZnJvbSAnQHNtdWkvcmlwcGxlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCByYW5nZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGRpc2NyZXRlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgdGlja01hcmtzID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgc3RlcCA9IDE7XG4gIGV4cG9ydCBsZXQgbWluID0gMDtcbiAgZXhwb3J0IGxldCBtYXggPSAxMDA7XG4gIGV4cG9ydCBsZXQgdmFsdWUgPSBudWxsO1xuICBleHBvcnQgbGV0IHN0YXJ0ID0gbnVsbDtcbiAgZXhwb3J0IGxldCBlbmQgPSBudWxsO1xuICBleHBvcnQgbGV0IHZhbHVlVG9BcmlhVmFsdWVUZXh0Rm4gPSAodmFsdWUpID0+IGAke3ZhbHVlfWA7XG4gIGV4cG9ydCBsZXQgaW5wdXQkY2xhc3MgPSAnJztcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgaW5wdXQ7XG4gIGxldCBpbnB1dFN0YXJ0O1xuICBsZXQgdGh1bWJFbDtcbiAgbGV0IHRodW1iU3RhcnQ7XG4gIGxldCB0aHVtYktub2I7XG4gIGxldCB0aHVtYktub2JTdGFydDtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgdGh1bWJTdGFydENsYXNzZXMgPSB7fTtcbiAgbGV0IHRodW1iQ2xhc3NlcyA9IHt9O1xuICBsZXQgaW5wdXRBdHRycyA9IHt9O1xuICBsZXQgaW5wdXRTdGFydEF0dHJzID0ge307XG4gIGxldCB0cmFja0FjdGl2ZVN0eWxlcyA9IHt9O1xuICBsZXQgdGh1bWJTdHlsZXMgPSB7fTtcbiAgbGV0IHRodW1iU3RhcnRTdHlsZXMgPSB7fTtcbiAgbGV0IHRodW1iUmlwcGxlQWN0aXZlID0gZmFsc2U7XG4gIGxldCB0aHVtYlN0YXJ0UmlwcGxlQWN0aXZlID0gZmFsc2U7XG4gIGxldCBjdXJyZW50VGlja01hcmtzO1xuICBsZXQgaW5wdXRQcm9wcyA9IGdldENvbnRleHQoJ1NNVUk6Z2VuZXJpYzppbnB1dDpwcm9wcycpIHx8IHt9O1xuICBsZXQgYWRkTGF5b3V0TGlzdGVuZXIgPSBnZXRDb250ZXh0KCdTTVVJOmFkZExheW91dExpc3RlbmVyJyk7XG4gIGxldCByZW1vdmVMYXlvdXRMaXN0ZW5lcjtcblxuICBpZiAodGlja01hcmtzICYmIHN0ZXAgPiAwKSB7XG4gICAgY29uc3QgYWJzTWF4ID0gbWF4ICsgTWF0aC5hYnMobWluKTtcbiAgICBpZiAocmFuZ2UpIHtcbiAgICAgIGNvbnN0IGFic1N0YXJ0ID0gc3RhcnQgKyBNYXRoLmFicyhtaW4pO1xuICAgICAgY29uc3QgYWJzRW5kID0gZW5kICsgTWF0aC5hYnMobWluKTtcbiAgICAgIGN1cnJlbnRUaWNrTWFya3MgPSBbXG4gICAgICAgIC4uLkFycmF5KGFic1N0YXJ0IC8gc3RlcCkubWFwKCgpID0+IFRpY2tNYXJrLklOQUNUSVZFKSxcbiAgICAgICAgLi4uQXJyYXkoXG4gICAgICAgICAgYWJzTWF4IC8gc3RlcCAtIGFic1N0YXJ0IC8gc3RlcCAtIChhYnNNYXggLSBhYnNNYXgpIC8gc3RlcCArIDFcbiAgICAgICAgKS5tYXAoKCkgPT4gVGlja01hcmsuQUNUSVZFKSxcbiAgICAgICAgLi4uQXJyYXkoKGFic01heCAtIGFic01heCkgLyBzdGVwKS5tYXAoKCkgPT4gVGlja01hcmsuSU5BQ1RJVkUpLFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWJzVmFsdWUgPSB2YWx1ZSArIE1hdGguYWJzKG1pbik7XG5cbiAgICAgIGN1cnJlbnRUaWNrTWFya3MgPSBbXG4gICAgICAgIC4uLkFycmF5KGFic1ZhbHVlIC8gc3RlcCArIDEpLm1hcCgoKSA9PiBUaWNrTWFyay5BQ1RJVkUpLFxuICAgICAgICAuLi5BcnJheSgoYWJzTWF4IC0gYWJzVmFsdWUpIC8gc3RlcCkubWFwKCgpID0+IFRpY2tNYXJrLklOQUNUSVZFKSxcbiAgICAgIF07XG4gICAgfVxuICB9XG5cbiAgaWYgKHJhbmdlKSB7XG4gICAgY29uc3QgcGVyY2VudCA9IChlbmQgLSBzdGFydCkgLyAobWF4IC0gbWluKTtcbiAgICBjb25zdCBwZXJjZW50U3RhcnQgPSBzdGFydCAvIChtYXggLSBtaW4pO1xuICAgIGNvbnN0IHBlcmNlbnRFbmQgPSBlbmQgLyAobWF4IC0gbWluKTtcbiAgICB0cmFja0FjdGl2ZVN0eWxlcy50cmFuc2Zvcm0gPSBgc2NhbGVYKCR7cGVyY2VudH0pYDtcbiAgICB0aHVtYlN0eWxlcy5sZWZ0ID0gYGNhbGMoJHtwZXJjZW50RW5kICogMTAwfSUgLTI0cHgpYDtcbiAgICB0aHVtYlN0YXJ0U3R5bGVzLmxlZnQgPSBgY2FsYygke3BlcmNlbnRTdGFydCAqIDEwMH0lIC0yNHB4KWA7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGVyY2VudCA9IHZhbHVlIC8gKG1heCAtIG1pbik7XG4gICAgdHJhY2tBY3RpdmVTdHlsZXMudHJhbnNmb3JtID0gYHNjYWxlWCgke3BlcmNlbnR9KWA7XG4gICAgdGh1bWJTdHlsZXMubGVmdCA9IGBjYWxjKCR7cGVyY2VudCAqIDEwMH0lIC0yNHB4KWA7XG4gIH1cblxuICBpZiAoYWRkTGF5b3V0TGlzdGVuZXIpIHtcbiAgICByZW1vdmVMYXlvdXRMaXN0ZW5lciA9IGFkZExheW91dExpc3RlbmVyKGxheW91dCk7XG4gIH1cblxuICBsZXQgcHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICBsZXQgcHJldmlvdXNTdGFydCA9IHN0YXJ0O1xuICBsZXQgcHJldmlvdXNFbmQgPSBlbmQ7XG4gICQ6IGlmIChpbnN0YW5jZSkge1xuICAgIGlmIChwcmV2aW91c1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUodmFsdWUpO1xuICAgIH1cbiAgICBpZiAocHJldmlvdXNTdGFydCAhPT0gc3RhcnQpIHtcbiAgICAgIGluc3RhbmNlLnNldFZhbHVlU3RhcnQoc3RhcnQpO1xuICAgIH1cbiAgICBpZiAocHJldmlvdXNFbmQgIT09IGVuZCkge1xuICAgICAgaW5zdGFuY2Uuc2V0VmFsdWUoZW5kKTtcbiAgICB9XG4gICAgcHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIHByZXZpb3VzU3RhcnQgPSBzdGFydDtcbiAgICBwcmV2aW91c0VuZCA9IGVuZDtcbiAgICAvLyBOZWVkZWQgZm9yIHJhbmdlIHN0YXJ0IHRvIHRha2UgZWZmZWN0LlxuICAgIGluc3RhbmNlLmxheW91dCgpO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDU2xpZGVyRm91bmRhdGlvbih7XG4gICAgICBoYXNDbGFzcyxcbiAgICAgIGFkZENsYXNzLFxuICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICBhZGRUaHVtYkNsYXNzLFxuICAgICAgcmVtb3ZlVGh1bWJDbGFzcyxcbiAgICAgIGdldEF0dHJpYnV0ZTogKGF0dHJpYnV0ZSkgPT4gZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGUpLFxuICAgICAgZ2V0SW5wdXRWYWx1ZTogKHRodW1iKSA9PlxuICAgICAgICByYW5nZSA/ICh0aHVtYiA9PT0gVGh1bWIuU1RBUlQgPyBzdGFydCA6IGVuZCkgOiB2YWx1ZSxcbiAgICAgIHNldElucHV0VmFsdWU6ICh2YWwsIHRodW1iKSA9PiB7XG4gICAgICAgIGlmIChyYW5nZSkge1xuICAgICAgICAgIGlmICh0aHVtYiA9PT0gVGh1bWIuU1RBUlQpIHtcbiAgICAgICAgICAgIHN0YXJ0ID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICBwcmV2aW91c1N0YXJ0ID0gc3RhcnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVuZCA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgcHJldmlvdXNFbmQgPSBlbmQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgcHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2V0SW5wdXRBdHRyaWJ1dGU6IGdldElucHV0QXR0cixcbiAgICAgIHNldElucHV0QXR0cmlidXRlOiBhZGRJbnB1dEF0dHIsXG4gICAgICByZW1vdmVJbnB1dEF0dHJpYnV0ZTogcmVtb3ZlSW5wdXRBdHRyLFxuICAgICAgZm9jdXNJbnB1dDogKHRodW1iKSA9PiB7XG4gICAgICAgIGlmIChyYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlQpIHtcbiAgICAgICAgICBpbnB1dFN0YXJ0LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGlzSW5wdXRGb2N1c2VkOiAodGh1bWIpID0+XG4gICAgICAgIChyYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlQgPyBpbnB1dFN0YXJ0IDogaW5wdXQpID09PVxuICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LFxuICAgICAgZ2V0VGh1bWJLbm9iV2lkdGg6ICh0aHVtYikgPT5cbiAgICAgICAgKHJhbmdlICYmIHRodW1iID09PSBUaHVtYi5TVEFSVFxuICAgICAgICAgID8gdGh1bWJLbm9iU3RhcnRcbiAgICAgICAgICA6IHRodW1iS25vYlxuICAgICAgICApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLFxuICAgICAgZ2V0VGh1bWJCb3VuZGluZ0NsaWVudFJlY3Q6ICh0aHVtYikgPT5cbiAgICAgICAgKHJhbmdlICYmIHRodW1iID09PSBUaHVtYi5TVEFSVFxuICAgICAgICAgID8gdGh1bWJTdGFydFxuICAgICAgICAgIDogdGh1bWJFbFxuICAgICAgICApLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgZ2V0Qm91bmRpbmdDbGllbnRSZWN0OiAoKSA9PiBnZXRFbGVtZW50KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBpc1JUTDogKCkgPT4gZ2V0Q29tcHV0ZWRTdHlsZShnZXRFbGVtZW50KCkpLmRpcmVjdGlvbiA9PT0gJ3J0bCcsXG4gICAgICBzZXRUaHVtYlN0eWxlUHJvcGVydHk6IGFkZFRodW1iU3R5bGUsXG4gICAgICByZW1vdmVUaHVtYlN0eWxlUHJvcGVydHk6IHJlbW92ZVRodW1iU3R5bGUsXG4gICAgICBzZXRUcmFja0FjdGl2ZVN0eWxlUHJvcGVydHk6IGFkZFRyYWNrQWN0aXZlU3R5bGUsXG4gICAgICByZW1vdmVUcmFja0FjdGl2ZVN0eWxlUHJvcGVydHk6IHJlbW92ZVRyYWNrQWN0aXZlU3R5bGUsXG4gICAgICAvLyBIYW5kbGVkIGJ5IFN2ZWx0ZS5cbiAgICAgIHNldFZhbHVlSW5kaWNhdG9yVGV4dDogKF92YWx1ZSwgX3RodW1iKSA9PiB1bmRlZmluZWQsXG4gICAgICBnZXRWYWx1ZVRvQXJpYVZhbHVlVGV4dEZuOiAoKSA9PiB2YWx1ZVRvQXJpYVZhbHVlVGV4dEZuLFxuICAgICAgdXBkYXRlVGlja01hcmtzOiAodGlja01hcmtzKSA9PiB7XG4gICAgICAgIGN1cnJlbnRUaWNrTWFya3MgPSB0aWNrTWFya3M7XG4gICAgICB9LFxuICAgICAgc2V0UG9pbnRlckNhcHR1cmU6IChwb2ludGVySWQpID0+IHtcbiAgICAgICAgZ2V0RWxlbWVudCgpLnNldFBvaW50ZXJDYXB0dXJlKHBvaW50ZXJJZCk7XG4gICAgICB9LFxuICAgICAgZW1pdENoYW5nZUV2ZW50OiAodmFsdWUsIHRodW1iKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ1NsaWRlcjpjaGFuZ2UnLCB7IHZhbHVlLCB0aHVtYiB9KTtcbiAgICAgIH0sXG4gICAgICBlbWl0SW5wdXRFdmVudDogKHZhbHVlLCB0aHVtYikgPT4ge1xuICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdNRENTbGlkZXI6aW5wdXQnLCB7IHZhbHVlLCB0aHVtYiB9KTtcbiAgICAgIH0sXG4gICAgICBlbWl0RHJhZ1N0YXJ0RXZlbnQ6IChfLCB0aHVtYikgPT4ge1xuICAgICAgICAvLyBFbWl0dGluZyBldmVudCBpcyBub3QgeWV0IGltcGxlbWVudGVkLiBTZWUgaXNzdWU6XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRlcmlhbC1jb21wb25lbnRzL21hdGVyaWFsLWNvbXBvbmVudHMtd2ViL2lzc3Vlcy82NDQ4XG4gICAgICAgIGlmIChyYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlQpIHtcbiAgICAgICAgICB0aHVtYlN0YXJ0UmlwcGxlQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHVtYlJpcHBsZUFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBlbWl0RHJhZ0VuZEV2ZW50OiAoXywgdGh1bWIpID0+IHtcbiAgICAgICAgLy8gRW1pdHRpbmcgZXZlbnQgaXMgbm90IHlldCBpbXBsZW1lbnRlZC4gU2VlIGlzc3VlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWF0ZXJpYWwtY29tcG9uZW50cy9tYXRlcmlhbC1jb21wb25lbnRzLXdlYi9pc3N1ZXMvNjQ0OFxuICAgICAgICBpZiAocmFuZ2UgJiYgdGh1bWIgPT09IFRodW1iLlNUQVJUKSB7XG4gICAgICAgICAgdGh1bWJTdGFydFJpcHBsZUFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRodW1iUmlwcGxlQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICByZWdpc3RlckV2ZW50SGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgICB9LFxuICAgICAgZGVyZWdpc3RlckV2ZW50SGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgZ2V0RWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlcik7XG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJUaHVtYkV2ZW50SGFuZGxlcjogKHRodW1iLCBldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIChyYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlRcbiAgICAgICAgICA/IHRodW1iU3RhcnRcbiAgICAgICAgICA6IHRodW1iRWxcbiAgICAgICAgKS5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgICAgfSxcbiAgICAgIGRlcmVnaXN0ZXJUaHVtYkV2ZW50SGFuZGxlcjogKHRodW1iLCBldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIChyYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlRcbiAgICAgICAgICA/IHRodW1iU3RhcnRcbiAgICAgICAgICA6IHRodW1iRWxcbiAgICAgICAgKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVySW5wdXRFdmVudEhhbmRsZXI6ICh0aHVtYiwgZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICAocmFuZ2UgJiYgdGh1bWIgPT09IFRodW1iLlNUQVJUID8gaW5wdXRTdGFydCA6IGlucHV0KS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgaGFuZGxlclxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIGRlcmVnaXN0ZXJJbnB1dEV2ZW50SGFuZGxlcjogKHRodW1iLCBldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIChyYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlRcbiAgICAgICAgICA/IGlucHV0U3RhcnRcbiAgICAgICAgICA6IGlucHV0XG4gICAgICAgICkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgIH0sXG4gICAgICByZWdpc3RlckJvZHlFdmVudEhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVyQm9keUV2ZW50SGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpO1xuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyV2luZG93RXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgIH0sXG4gICAgICBkZXJlZ2lzdGVyV2luZG93RXZlbnRIYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvciA9IHtcbiAgICAgIGdldCBlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudCgpO1xuICAgICAgfSxcbiAgICAgIGFjdGl2YXRlUmlwcGxlKCkge1xuICAgICAgICBpZiAoIWRpc2FibGVkKSB7XG4gICAgICAgICAgdGh1bWJSaXBwbGVBY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVhY3RpdmF0ZVJpcHBsZSgpIHtcbiAgICAgICAgdGh1bWJSaXBwbGVBY3RpdmUgPSBmYWxzZTtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGVsZW1lbnQsICdTTVVJOmdlbmVyaWM6aW5wdXQ6bW91bnQnLCBhY2Nlc3Nvcik7XG5cbiAgICBpbnN0YW5jZS5pbml0KCk7XG4gICAgaW5zdGFuY2UubGF5b3V0KHRydWUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGVsZW1lbnQsICdTTVVJOmdlbmVyaWM6aW5wdXQ6dW5tb3VudCcsIGFjY2Vzc29yKTtcblxuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH07XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKHJlbW92ZUxheW91dExpc3RlbmVyKSB7XG4gICAgICByZW1vdmVMYXlvdXRMaXN0ZW5lcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXNcbiAgICAgID8gaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV1cbiAgICAgIDogZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFRodW1iQ2xhc3MoY2xhc3NOYW1lLCB0aHVtYikge1xuICAgIGlmIChyYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlQpIHtcbiAgICAgIGlmICghdGh1bWJTdGFydENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgICB0aHVtYlN0YXJ0Q2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aHVtYkNsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgICB0aHVtYkNsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlVGh1bWJDbGFzcyhjbGFzc05hbWUsIHRodW1iKSB7XG4gICAgaWYgKHJhbmdlICYmIHRodW1iID09PSBUaHVtYi5TVEFSVCkge1xuICAgICAgaWYgKCEoY2xhc3NOYW1lIGluIHRodW1iU3RhcnRDbGFzc2VzKSB8fCB0aHVtYlN0YXJ0Q2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICAgIHRodW1iU3RhcnRDbGFzc2VzW2NsYXNzTmFtZV0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEoY2xhc3NOYW1lIGluIHRodW1iQ2xhc3NlcykgfHwgdGh1bWJDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgICAgdGh1bWJDbGFzc2VzW2NsYXNzTmFtZV0gPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUaHVtYlN0eWxlKG5hbWUsIHZhbHVlLCB0aHVtYikge1xuICAgIGlmIChyYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlQpIHtcbiAgICAgIGlmICh0aHVtYlN0YXJ0U3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgIGRlbGV0ZSB0aHVtYlN0YXJ0U3R5bGVzW25hbWVdO1xuICAgICAgICAgIHRodW1iU3RhcnRTdHlsZXMgPSB0aHVtYlN0YXJ0U3R5bGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRodW1iU3RhcnRTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGh1bWJTdHlsZXNbbmFtZV0gIT0gdmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgZGVsZXRlIHRodW1iU3R5bGVzW25hbWVdO1xuICAgICAgICAgIHRodW1iU3R5bGVzID0gdGh1bWJTdHlsZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGh1bWJTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZVRodW1iU3R5bGUobmFtZSwgdGh1bWIpIHtcbiAgICBpZiAocmFuZ2UgJiYgdGh1bWIgPT09IFRodW1iLlNUQVJUKSB7XG4gICAgICBpZiAobmFtZSBpbiB0aHVtYlN0YXJ0U3R5bGVzKSB7XG4gICAgICAgIGRlbGV0ZSB0aHVtYlN0YXJ0U3R5bGVzW25hbWVdO1xuICAgICAgICB0aHVtYlN0YXJ0U3R5bGVzID0gdGh1bWJTdGFydFN0eWxlcztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG5hbWUgaW4gdGh1bWJTdHlsZXMpIHtcbiAgICAgICAgZGVsZXRlIHRodW1iU3R5bGVzW25hbWVdO1xuICAgICAgICB0aHVtYlN0eWxlcyA9IHRodW1iU3R5bGVzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldElucHV0QXR0cihuYW1lLCB0aHVtYikge1xuICAgIC8vIFNvbWUgY3VzdG9tIGxvZ2ljIGZvciBcInZhbHVlXCIsIHNpbmNlIFN2ZWx0ZSBkb2Vzbid0IHNlZW0gdG8gYWN0dWFsbHlcbiAgICAvLyBzZXQgdGhlIGF0dHJpYnV0ZSwganVzdCB0aGUgRE9NIHByb3BlcnR5LlxuICAgIGlmIChyYW5nZSAmJiB0aHVtYiA9PT0gVGh1bWIuU1RBUlQpIHtcbiAgICAgIGlmIChuYW1lID09PSAndmFsdWUnKSB7XG4gICAgICAgIHJldHVybiBgJHtzdGFydH1gO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5hbWUgaW4gaW5wdXRTdGFydEF0dHJzXG4gICAgICAgID8gaW5wdXRTdGFydEF0dHJzW25hbWVdXG4gICAgICAgIDogaW5wdXRTdGFydC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuYW1lID09PSAndmFsdWUnKSB7XG4gICAgICAgIHJldHVybiBgJHtyYW5nZSA/IGVuZCA6IHZhbHVlfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmFtZSBpbiBpbnB1dEF0dHJzID8gaW5wdXRBdHRyc1tuYW1lXSA6IGlucHV0LmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRJbnB1dEF0dHIobmFtZSwgdmFsdWUsIHRodW1iKSB7XG4gICAgaWYgKHJhbmdlICYmIHRodW1iID09PSBUaHVtYi5TVEFSVCkge1xuICAgICAgaWYgKGlucHV0U3RhcnRBdHRyc1tuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgaW5wdXRTdGFydEF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnB1dEF0dHJzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICBpbnB1dEF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlSW5wdXRBdHRyKG5hbWUsIHRodW1iKSB7XG4gICAgaWYgKHJhbmdlICYmIHRodW1iID09PSBUaHVtYi5TVEFSVCkge1xuICAgICAgaWYgKCEobmFtZSBpbiBpbnB1dFN0YXJ0QXR0cnMpIHx8IGlucHV0U3RhcnRBdHRyc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgIGlucHV0U3RhcnRBdHRyc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCEobmFtZSBpbiBpbnB1dEF0dHJzKSB8fCBpbnB1dEF0dHJzW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgaW5wdXRBdHRyc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRUcmFja0FjdGl2ZVN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHRyYWNrQWN0aXZlU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHRyYWNrQWN0aXZlU3R5bGVzW25hbWVdO1xuICAgICAgICB0cmFja0FjdGl2ZVN0eWxlcyA9IHRyYWNrQWN0aXZlU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhY2tBY3RpdmVTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVUcmFja0FjdGl2ZVN0eWxlKG5hbWUpIHtcbiAgICBpZiAobmFtZSBpbiB0cmFja0FjdGl2ZVN0eWxlcykge1xuICAgICAgZGVsZXRlIHRyYWNrQWN0aXZlU3R5bGVzW25hbWVdO1xuICAgICAgdHJhY2tBY3RpdmVTdHlsZXMgPSB0cmFja0FjdGl2ZVN0eWxlcztcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgIHJldHVybiBpbnN0YW5jZS5sYXlvdXQoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRJZCgpIHtcbiAgICByZXR1cm4gaW5wdXRQcm9wcyAmJiBpbnB1dFByb3BzLmlkO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImFwcGx5UGFzc2l2ZSIsIm1hdGNoZXMiLCJjc3NDbGFzc2VzIiwibnVtYmVycyIsInV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxD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
