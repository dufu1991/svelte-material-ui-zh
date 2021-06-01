import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, W as compute_rest_props, v as validate_slots, X as getContext, Y as get_current_component, Z as setContext, _ as onDestroy, $ as assign, a0 as exclude_internal_props, q as create_component, a1 as empty, A as claim_component, H as mount_component, F as insert_dev, a2 as get_spread_update, a3 as get_spread_object, a4 as group_outros, K as transition_out, M as destroy_component, a5 as check_outros, J as transition_in, u as detach_dev, a6 as binding_callbacks, a7 as create_slot, a8 as update_slot, ah as onMount, p as element, x as claim_element, y as children, a9 as set_attributes, D as add_location, G as append_dev, aa as action_destroyer, ax as listen_dev, ab as is_function, ac as run_all, as as IconButton$1, o as space, w as claim_space, t as text, z as claim_text, E as attr_dev, aw as set_data_dev, ak as bind, al as add_flush_callback, ag as validate_each_argument, aj as destroy_each, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { B as Button_1$1 } from './Button.d66ce348.js';
import { T as Textfield } from './Textfield.38e6e4ee.js';
import { C as CommonLabel$1 } from './CommonLabel.6290f478.js';

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
var cssClasses$2 = {
    CLOSING: 'mdc-snackbar--closing',
    OPEN: 'mdc-snackbar--open',
    OPENING: 'mdc-snackbar--opening',
};
var strings$2 = {
    ACTION_SELECTOR: '.mdc-snackbar__action',
    ARIA_LIVE_LABEL_TEXT_ATTR: 'data-mdc-snackbar-label-text',
    CLOSED_EVENT: 'MDCSnackbar:closed',
    CLOSING_EVENT: 'MDCSnackbar:closing',
    DISMISS_SELECTOR: '.mdc-snackbar__dismiss',
    LABEL_SELECTOR: '.mdc-snackbar__label',
    OPENED_EVENT: 'MDCSnackbar:opened',
    OPENING_EVENT: 'MDCSnackbar:opening',
    REASON_ACTION: 'action',
    REASON_DISMISS: 'dismiss',
    SURFACE_SELECTOR: '.mdc-snackbar__surface',
};
var numbers$1 = {
    DEFAULT_AUTO_DISMISS_TIMEOUT_MS: 5000,
    INDETERMINATE: -1,
    MAX_AUTO_DISMISS_TIMEOUT_MS: 10000,
    MIN_AUTO_DISMISS_TIMEOUT_MS: 4000,
    // These variables need to be kept in sync with the values in _variables.scss.
    SNACKBAR_ANIMATION_CLOSE_TIME_MS: 75,
    SNACKBAR_ANIMATION_OPEN_TIME_MS: 150,
    /**
     * Number of milliseconds to wait between temporarily clearing the label text
     * in the DOM and subsequently restoring it. This is necessary to force IE 11
     * to pick up the `aria-live` content change and announce it to the user.
     */
    ARIA_LIVE_DELAY_MS: 1000,
};

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
var ARIA_LIVE_DELAY_MS = numbers$1.ARIA_LIVE_DELAY_MS;
var ARIA_LIVE_LABEL_TEXT_ATTR = strings$2.ARIA_LIVE_LABEL_TEXT_ATTR;
function announce(ariaEl, labelEl) {
    if (labelEl === void 0) { labelEl = ariaEl; }
    var priority = ariaEl.getAttribute('aria-live');
    // Trim text to ignore `&nbsp;` (see below).
    // textContent is only null if the node is a document, DOCTYPE, or notation.
    var labelText = labelEl.textContent.trim();
    if (!labelText || !priority) {
        return;
    }
    // Temporarily disable `aria-live` to prevent JAWS+Firefox from announcing the message twice.
    ariaEl.setAttribute('aria-live', 'off');
    // Temporarily clear `textContent` to force a DOM mutation event that will be detected by screen readers.
    // `aria-live` elements are only announced when the element's `textContent` *changes*, so snackbars
    // sent to the browser in the initial HTML response won't be read unless we clear the element's `textContent` first.
    // Similarly, displaying the same snackbar message twice in a row doesn't trigger a DOM mutation event,
    // so screen readers won't announce the second message unless we first clear `textContent`.
    //
    // We have to clear the label text two different ways to make it work in all browsers and screen readers:
    //
    //   1. `textContent = ''` is required for IE11 + JAWS
    //   2. `innerHTML = '&nbsp;'` is required for Chrome + JAWS and NVDA
    //
    // All other browser/screen reader combinations support both methods.
    //
    // The wrapper `<span>` visually hides the space character so that it doesn't cause jank when added/removed.
    // N.B.: Setting `position: absolute`, `opacity: 0`, or `height: 0` prevents Chrome from detecting the DOM change.
    //
    // This technique has been tested in:
    //
    //   * JAWS 2019:
    //       - Chrome 70
    //       - Firefox 60 (ESR)
    //       - IE 11
    //   * NVDA 2018:
    //       - Chrome 70
    //       - Firefox 60 (ESR)
    //       - IE 11
    //   * ChromeVox 53
    labelEl.textContent = '';
    labelEl.innerHTML = '<span style="display: inline-block; width: 0; height: 1px;">&nbsp;</span>';
    // Prevent visual jank by temporarily displaying the label text in the ::before pseudo-element.
    // CSS generated content is normally announced by screen readers
    // (except in IE 11; see https://tink.uk/accessibility-support-for-css-generated-content/);
    // however, `aria-live` is turned off, so this DOM update will be ignored by screen readers.
    labelEl.setAttribute(ARIA_LIVE_LABEL_TEXT_ATTR, labelText);
    setTimeout(function () {
        // Allow screen readers to announce changes to the DOM again.
        ariaEl.setAttribute('aria-live', priority);
        // Remove the message from the ::before pseudo-element.
        labelEl.removeAttribute(ARIA_LIVE_LABEL_TEXT_ATTR);
        // Restore the original label text, which will be announced by screen readers.
        labelEl.textContent = labelText;
    }, ARIA_LIVE_DELAY_MS);
}

var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    announce: announce
});

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
var OPENING = cssClasses$2.OPENING, OPEN = cssClasses$2.OPEN, CLOSING = cssClasses$2.CLOSING;
var REASON_ACTION = strings$2.REASON_ACTION, REASON_DISMISS = strings$2.REASON_DISMISS;
var MDCSnackbarFoundation = /** @class */ (function (_super) {
    __extends(MDCSnackbarFoundation, _super);
    function MDCSnackbarFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCSnackbarFoundation.defaultAdapter), adapter)) || this;
        _this.isOpen_ = false;
        _this.animationFrame_ = 0;
        _this.animationTimer_ = 0;
        _this.autoDismissTimer_ = 0;
        _this.autoDismissTimeoutMs_ = numbers$1.DEFAULT_AUTO_DISMISS_TIMEOUT_MS;
        _this.closeOnEscape_ = true;
        return _this;
    }
    Object.defineProperty(MDCSnackbarFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "numbers", {
        get: function () {
            return numbers$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSnackbarFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                announce: function () { return undefined; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                removeClass: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCSnackbarFoundation.prototype.destroy = function () {
        this.clearAutoDismissTimer_();
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = 0;
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(OPEN);
        this.adapter.removeClass(CLOSING);
    };
    MDCSnackbarFoundation.prototype.open = function () {
        var _this = this;
        this.clearAutoDismissTimer_();
        this.isOpen_ = true;
        this.adapter.notifyOpening();
        this.adapter.removeClass(CLOSING);
        this.adapter.addClass(OPENING);
        this.adapter.announce();
        // Wait a frame once display is no longer "none", to establish basis for animation
        this.runNextAnimationFrame_(function () {
            _this.adapter.addClass(OPEN);
            _this.animationTimer_ = setTimeout(function () {
                var timeoutMs = _this.getTimeoutMs();
                _this.handleAnimationTimerEnd_();
                _this.adapter.notifyOpened();
                if (timeoutMs !== numbers$1.INDETERMINATE) {
                    _this.autoDismissTimer_ = setTimeout(function () {
                        _this.close(REASON_DISMISS);
                    }, timeoutMs);
                }
            }, numbers$1.SNACKBAR_ANIMATION_OPEN_TIME_MS);
        });
    };
    /**
     * @param reason Why the snackbar was closed. Value will be passed to CLOSING_EVENT and CLOSED_EVENT via the
     *     `event.detail.reason` property. Standard values are REASON_ACTION and REASON_DISMISS, but custom
     *     client-specific values may also be used if desired.
     */
    MDCSnackbarFoundation.prototype.close = function (reason) {
        var _this = this;
        if (reason === void 0) { reason = ''; }
        if (!this.isOpen_) {
            // Avoid redundant close calls (and events), e.g. repeated interactions as the snackbar is animating closed
            return;
        }
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = 0;
        this.clearAutoDismissTimer_();
        this.isOpen_ = false;
        this.adapter.notifyClosing(reason);
        this.adapter.addClass(cssClasses$2.CLOSING);
        this.adapter.removeClass(cssClasses$2.OPEN);
        this.adapter.removeClass(cssClasses$2.OPENING);
        clearTimeout(this.animationTimer_);
        this.animationTimer_ = setTimeout(function () {
            _this.handleAnimationTimerEnd_();
            _this.adapter.notifyClosed(reason);
        }, numbers$1.SNACKBAR_ANIMATION_CLOSE_TIME_MS);
    };
    MDCSnackbarFoundation.prototype.isOpen = function () {
        return this.isOpen_;
    };
    MDCSnackbarFoundation.prototype.getTimeoutMs = function () {
        return this.autoDismissTimeoutMs_;
    };
    MDCSnackbarFoundation.prototype.setTimeoutMs = function (timeoutMs) {
        // Use shorter variable names to make the code more readable
        var minValue = numbers$1.MIN_AUTO_DISMISS_TIMEOUT_MS;
        var maxValue = numbers$1.MAX_AUTO_DISMISS_TIMEOUT_MS;
        var indeterminateValue = numbers$1.INDETERMINATE;
        if (timeoutMs === numbers$1.INDETERMINATE || (timeoutMs <= maxValue && timeoutMs >= minValue)) {
            this.autoDismissTimeoutMs_ = timeoutMs;
        }
        else {
            throw new Error("\n        timeoutMs must be an integer in the range " + minValue + "\u2013" + maxValue + "\n        (or " + indeterminateValue + " to disable), but got '" + timeoutMs + "'");
        }
    };
    MDCSnackbarFoundation.prototype.getCloseOnEscape = function () {
        return this.closeOnEscape_;
    };
    MDCSnackbarFoundation.prototype.setCloseOnEscape = function (closeOnEscape) {
        this.closeOnEscape_ = closeOnEscape;
    };
    MDCSnackbarFoundation.prototype.handleKeyDown = function (evt) {
        var isEscapeKey = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscapeKey && this.getCloseOnEscape()) {
            this.close(REASON_DISMISS);
        }
    };
    MDCSnackbarFoundation.prototype.handleActionButtonClick = function (_evt) {
        this.close(REASON_ACTION);
    };
    MDCSnackbarFoundation.prototype.handleActionIconClick = function (_evt) {
        this.close(REASON_DISMISS);
    };
    MDCSnackbarFoundation.prototype.clearAutoDismissTimer_ = function () {
        clearTimeout(this.autoDismissTimer_);
        this.autoDismissTimer_ = 0;
    };
    MDCSnackbarFoundation.prototype.handleAnimationTimerEnd_ = function () {
        this.animationTimer_ = 0;
        this.adapter.removeClass(cssClasses$2.OPENING);
        this.adapter.removeClass(cssClasses$2.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
     */
    MDCSnackbarFoundation.prototype.runNextAnimationFrame_ = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame_);
        this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
        });
    };
    return MDCSnackbarFoundation;
}(MDCFoundation));

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

/* packages/snackbar/node_modules/@smui/common/ClassAdder.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>
function create_default_slot$a(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[10].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4096) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[12], dirty, null, null);
				}
			}
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
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$a.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>",
		ctx
	});

	return block;
}

function create_fragment$f(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		{
			use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
		},
		{
			class: classMap({
				[/*className*/ ctx[1]]: true,
				[/*smuiClass*/ ctx[5]]: true,
				.../*smuiClassMap*/ ctx[4]
			})
		},
		/*props*/ ctx[6],
		/*$$restProps*/ ctx[8]
	];

	var switch_value = /*component*/ ctx[2];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: { default: [create_default_slot$a] },
			$$scope: { ctx }
		};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
		/*switch_instance_binding*/ ctx[11](switch_instance);
	}

	const block = {
		c: function create() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l: function claim(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_dev(target, switch_instance_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, smuiClass, smuiClassMap, props, $$restProps*/ 499)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*forwardEvents, use*/ 129 && {
						use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
					},
					dirty & /*classMap, className, smuiClass, smuiClassMap*/ 50 && {
						class: classMap({
							[/*className*/ ctx[1]]: true,
							[/*smuiClass*/ ctx[5]]: true,
							.../*smuiClassMap*/ ctx[4]
						})
					},
					dirty & /*props*/ 64 && get_spread_object(/*props*/ ctx[6]),
					dirty & /*$$restProps*/ 256 && get_spread_object(/*$$restProps*/ ctx[8])
				])
			: {};

			if (dirty & /*$$scope*/ 4096) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[2])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					/*switch_instance_binding*/ ctx[11](switch_instance);
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*switch_instance_binding*/ ctx[11](null);
			if (detaching) detach_dev(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$f.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const internals = {
	component: null,
	class: "",
	// The class map maps classes to contexts. The context
	// should resolve to a Svelte store, and the class
	// will be added if the Svelte store's value is true.
	classMap: {},
	contexts: {},
	props: {}
};

function instance$d($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","component","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ClassAdder", slots, ['default']);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let element;
	const smuiClass = internals.class;
	const smuiClassMap = {};
	const smuiClassUnsubscribes = [];
	const contexts = internals.contexts;
	const props = internals.props;
	let { component = internals.component } = $$props;

	Object.entries(internals.classMap).forEach(([name, context]) => {
		const store = getContext(context);

		if (store && "subscribe" in store) {
			smuiClassUnsubscribes.push(store.subscribe(value => {
				$$invalidate(4, smuiClassMap[name] = value, smuiClassMap);
			}));
		}
	});

	const forwardEvents = forwardEventsBuilder(get_current_component());

	for (let context in contexts) {
		if (contexts.hasOwnProperty(context)) {
			setContext(context, contexts[context]);
		}
	}

	onDestroy(() => {
		for (const unsubscribe of smuiClassUnsubscribes) {
			unsubscribe();
		}
	});

	function getElement() {
		return element.getElement();
	}

	function switch_instance_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(3, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("component" in $$new_props) $$invalidate(2, component = $$new_props.component);
		if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		internals,
		onDestroy,
		getContext,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		use,
		className,
		element,
		smuiClass,
		smuiClassMap,
		smuiClassUnsubscribes,
		contexts,
		props,
		component,
		forwardEvents,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
		if ("component" in $$props) $$invalidate(2, component = $$new_props.component);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		component,
		element,
		smuiClassMap,
		smuiClass,
		props,
		forwardEvents,
		$$restProps,
		getElement,
		slots,
		switch_instance_binding,
		$$scope
	];
}

class ClassAdder extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$d, create_fragment$f, safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			getElement: 9
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ClassAdder",
			options,
			id: create_fragment$f.name
		});
	}

	get use() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get component() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set component(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[9];
	}

	set getElement(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

const defaults = { ...internals };

function classAdderBuilder(props) {
  function Component(...args) {
    Object.assign(internals, defaults, props);
    return new ClassAdder(...args);
  }

  Component.prototype = ClassAdder;

  // SSR support
  if (ClassAdder.$$render) {
    Component.$$render = (...args) =>
      Object.assign(internals, defaults, props) && ClassAdder.$$render(...args);
  }
  if (ClassAdder.render) {
    Component.render = (...args) =>
      Object.assign(internals, defaults, props) && ClassAdder.render(...args);
  }

  return Component;
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

/* packages/snackbar/Snackbar.svelte generated by Svelte v3.37.0 */

const file$9 = "packages/snackbar/Snackbar.svelte";

function create_fragment$e(ctx) {
	let aside;
	let div;
	let div_class_value;
	let useActions_action;
	let aside_class_value;
	let useActions_action_1;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[25].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[24], null);

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*surface$class*/ ctx[4]]: true,
				"mdc-snackbar__surface": true
			})
		},
		{ role: "status" },
		{ "aria-relevant": "additions" },
		prefixFilter(/*$$restProps*/ ctx[12], "surface$")
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	let aside_levels = [
		{
			class: aside_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-snackbar": true,
				"mdc-snackbar--stacked": /*variant*/ ctx[2] === "stacked",
				"mdc-snackbar--leading": /*leading*/ ctx[3],
				.../*internalClasses*/ ctx[8]
			})
		},
		exclude(/*$$restProps*/ ctx[12], ["surface$"])
	];

	let aside_data = {};

	for (let i = 0; i < aside_levels.length; i += 1) {
		aside_data = assign(aside_data, aside_levels[i]);
	}

	const block = {
		c: function create() {
			aside = element("aside");
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			aside = claim_element(nodes, "ASIDE", { class: true });
			var aside_nodes = children(aside);

			div = claim_element(aside_nodes, "DIV", {
				class: true,
				role: true,
				"aria-relevant": true
			});

			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			aside_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$9, 15, 2, 414);
			set_attributes(aside, aside_data);
			add_location(aside, file$9, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, aside, anchor);
			append_dev(aside, div);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*aside_binding*/ ctx[26](aside);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div, /*surface$use*/ ctx[5])),
					listen_dev(div, "click", /*handleSurfaceClick*/ ctx[10], false, false, false),
					action_destroyer(useActions_action_1 = useActions.call(null, aside, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[9].call(null, aside)),
					listen_dev(aside, "MDCSnackbar:closed", /*handleClosed*/ ctx[11], false, false, false),
					listen_dev(aside, "keydown", /*keydown_handler*/ ctx[27], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[0] & /*$$scope*/ 16777216) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[24], dirty, null, null);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*surface$class*/ 16 && div_class_value !== (div_class_value = classMap({
					[/*surface$class*/ ctx[4]]: true,
					"mdc-snackbar__surface": true
				}))) && { class: div_class_value },
				{ role: "status" },
				{ "aria-relevant": "additions" },
				dirty[0] & /*$$restProps*/ 4096 && prefixFilter(/*$$restProps*/ ctx[12], "surface$")
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*surface$use*/ 32) useActions_action.update.call(null, /*surface$use*/ ctx[5]);

			set_attributes(aside, aside_data = get_spread_update(aside_levels, [
				(!current || dirty[0] & /*className, variant, leading, internalClasses*/ 270 && aside_class_value !== (aside_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-snackbar": true,
					"mdc-snackbar--stacked": /*variant*/ ctx[2] === "stacked",
					"mdc-snackbar--leading": /*leading*/ ctx[3],
					.../*internalClasses*/ ctx[8]
				}))) && { class: aside_class_value },
				dirty[0] & /*$$restProps*/ 4096 && exclude(/*$$restProps*/ ctx[12], ["surface$"])
			]));

			if (useActions_action_1 && is_function(useActions_action_1.update) && dirty[0] & /*use*/ 1) useActions_action_1.update.call(null, /*use*/ ctx[0]);
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
			if (detaching) detach_dev(aside);
			if (default_slot) default_slot.d(detaching);
			/*aside_binding*/ ctx[26](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$e.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

let waiting = Promise.resolve();

function instance_1$1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","variant","leading","timeoutMs","closeOnEscape","labelText","actionButtonText","surface$class","surface$use","open","forceOpen","close","isOpen","getLabelElement","getActionButtonElement","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Snackbar", slots, ['default']);
	const { closest } = ponyfill;
	const forwardEvents = forwardEventsBuilder(get_current_component());

	const uninitializedValue = () => {
		
	};

	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { variant = "" } = $$props;
	let { leading = false } = $$props;
	let { timeoutMs = 5000 } = $$props;
	let { closeOnEscape = true } = $$props;
	let { labelText = uninitializedValue } = $$props;
	let { actionButtonText = uninitializedValue } = $$props;
	let { surface$class = "" } = $$props;
	let { surface$use = [] } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let closeResolve;
	let closePromise = new Promise(resolve => closeResolve = resolve);
	setContext("SMUI:label:context", "snackbar");

	onMount(() => {
		$$invalidate(6, instance = new MDCSnackbarFoundation({
				addClass,
				announce: () => announce(getLabelElement()),
				notifyClosed: reason => dispatch(getElement(), "MDCSnackbar:closed", reason ? { reason } : {}),
				notifyClosing: reason => dispatch(getElement(), "MDCSnackbar:closing", reason ? { reason } : {}),
				notifyOpened: () => dispatch(getElement(), "MDCSnackbar:opened"),
				notifyOpening: () => dispatch(getElement(), "MDCSnackbar:opening"),
				removeClass
			}));

		instance.init();

		return () => {
			instance.destroy();
		};
	});

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

	function handleSurfaceClick(event) {
		const target = event.target;

		if (instance) {
			if (closest(target, ".mdc-snackbar__action")) {
				instance.handleActionButtonClick(event);
			} else if (closest(target, ".mdc-snackbar__dismiss")) {
				instance.handleActionIconClick(event);
			}
		}
	}

	function handleClosed() {
		closeResolve();
		closePromise = new Promise(resolve => closeResolve = resolve);
	}

	function open() {
		waiting = waiting.then(() => {
			instance.open();
			return closePromise;
		});
	}

	function forceOpen() {
		return instance.open();
	}

	function close(reason = "") {
		return instance.close(reason);
	}

	function isOpen() {
		return instance.isOpen();
	}

	function getLabelElement() {
		return getElement().querySelector(".mdc-snackbar__label");
	}

	function getActionButtonElement() {
		return getElement().querySelector(".mdc-snackbar__action");
	}

	function getElement() {
		return element;
	}

	function aside_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	const keydown_handler = event => instance && instance.handleKeyDown(event);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("variant" in $$new_props) $$invalidate(2, variant = $$new_props.variant);
		if ("leading" in $$new_props) $$invalidate(3, leading = $$new_props.leading);
		if ("timeoutMs" in $$new_props) $$invalidate(13, timeoutMs = $$new_props.timeoutMs);
		if ("closeOnEscape" in $$new_props) $$invalidate(14, closeOnEscape = $$new_props.closeOnEscape);
		if ("labelText" in $$new_props) $$invalidate(15, labelText = $$new_props.labelText);
		if ("actionButtonText" in $$new_props) $$invalidate(16, actionButtonText = $$new_props.actionButtonText);
		if ("surface$class" in $$new_props) $$invalidate(4, surface$class = $$new_props.surface$class);
		if ("surface$use" in $$new_props) $$invalidate(5, surface$use = $$new_props.surface$use);
		if ("$$scope" in $$new_props) $$invalidate(24, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		waiting,
		MDCSnackbarFoundation,
		util,
		ponyfill,
		onMount,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		exclude,
		prefixFilter,
		useActions,
		dispatch,
		closest,
		forwardEvents,
		uninitializedValue,
		use,
		className,
		variant,
		leading,
		timeoutMs,
		closeOnEscape,
		labelText,
		actionButtonText,
		surface$class,
		surface$use,
		element,
		instance,
		internalClasses,
		closeResolve,
		closePromise,
		addClass,
		removeClass,
		handleSurfaceClick,
		handleClosed,
		open,
		forceOpen,
		close,
		isOpen,
		getLabelElement,
		getActionButtonElement,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("variant" in $$props) $$invalidate(2, variant = $$new_props.variant);
		if ("leading" in $$props) $$invalidate(3, leading = $$new_props.leading);
		if ("timeoutMs" in $$props) $$invalidate(13, timeoutMs = $$new_props.timeoutMs);
		if ("closeOnEscape" in $$props) $$invalidate(14, closeOnEscape = $$new_props.closeOnEscape);
		if ("labelText" in $$props) $$invalidate(15, labelText = $$new_props.labelText);
		if ("actionButtonText" in $$props) $$invalidate(16, actionButtonText = $$new_props.actionButtonText);
		if ("surface$class" in $$props) $$invalidate(4, surface$class = $$new_props.surface$class);
		if ("surface$use" in $$props) $$invalidate(5, surface$use = $$new_props.surface$use);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(6, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(8, internalClasses = $$new_props.internalClasses);
		if ("closeResolve" in $$props) closeResolve = $$new_props.closeResolve;
		if ("closePromise" in $$props) closePromise = $$new_props.closePromise;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*instance, timeoutMs*/ 8256) {
			if (instance && instance.getTimeoutMs() !== timeoutMs) {
				instance.setTimeoutMs(timeoutMs);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, closeOnEscape*/ 16448) {
			if (instance && instance.getCloseOnEscape() !== closeOnEscape) {
				instance.setCloseOnEscape(closeOnEscape);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, labelText*/ 32832) {
			if (instance && labelText !== uninitializedValue && getLabelElement().textContent !== labelText) {
				getLabelElement().textContent = labelText;
			}
		}

		if ($$self.$$.dirty[0] & /*instance, actionButtonText*/ 65600) {
			if (instance && actionButtonText !== uninitializedValue && getActionButtonElement().textContent !== actionButtonText) {
				getActionButtonElement().textContent = actionButtonText;
			}
		}
	};

	return [
		use,
		className,
		variant,
		leading,
		surface$class,
		surface$use,
		instance,
		element,
		internalClasses,
		forwardEvents,
		handleSurfaceClick,
		handleClosed,
		$$restProps,
		timeoutMs,
		closeOnEscape,
		labelText,
		actionButtonText,
		open,
		forceOpen,
		close,
		isOpen,
		getLabelElement,
		getActionButtonElement,
		getElement,
		$$scope,
		slots,
		aside_binding,
		keydown_handler
	];
}

class Snackbar$1 extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1$1,
			create_fragment$e,
			safe_not_equal,
			{
				use: 0,
				class: 1,
				variant: 2,
				leading: 3,
				timeoutMs: 13,
				closeOnEscape: 14,
				labelText: 15,
				actionButtonText: 16,
				surface$class: 4,
				surface$use: 5,
				open: 17,
				forceOpen: 18,
				close: 19,
				isOpen: 20,
				getLabelElement: 21,
				getActionButtonElement: 22,
				getElement: 23
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Snackbar",
			options,
			id: create_fragment$e.name
		});
	}

	get use() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get variant() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set variant(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get leading() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set leading(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get timeoutMs() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set timeoutMs(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get closeOnEscape() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set closeOnEscape(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get labelText() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set labelText(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get actionButtonText() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set actionButtonText(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get surface$class() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set surface$class(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get surface$use() {
		throw new Error("<Snackbar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set surface$use(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		return this.$$.ctx[17];
	}

	set open(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get forceOpen() {
		return this.$$.ctx[18];
	}

	set forceOpen(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get close() {
		return this.$$.ctx[19];
	}

	set close(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isOpen() {
		return this.$$.ctx[20];
	}

	set isOpen(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getLabelElement() {
		return this.$$.ctx[21];
	}

	set getLabelElement(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getActionButtonElement() {
		return this.$$.ctx[22];
	}

	set getActionButtonElement(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[23];
	}

	set getElement(value) {
		throw new Error("<Snackbar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/snackbar/node_modules/@smui/common/Div.svelte generated by Svelte v3.37.0 */
const file$8 = "packages/snackbar/node_modules/@smui/common/Div.svelte";

function create_fragment$d(ctx) {
	let div;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let div_levels = [/*$$restProps*/ ctx[3]];
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
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$8, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[7](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[2].call(null, div))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			/*div_binding*/ ctx[7](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$d.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$c($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Div", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let element = null;

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(1, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		useActions,
		use,
		forwardEvents,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		div_binding
	];
}

class Div extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$c, create_fragment$d, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Div",
			options,
			id: create_fragment$d.name
		});
	}

	get use() {
		throw new Error("<Div>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Div>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<Div>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var Actions = classAdderBuilder({
  class: 'mdc-snackbar__actions',
  props: { 'aria-atomic': 'true' },
  contexts: {
    'SMUI:button:context': 'snackbar:actions',
    'SMUI:icon-button:context': 'snackbar:actions',
    'SMUI:label:context': undefined,
  },
  component: Div,
});

/* packages/snackbar/node_modules/@smui/common/Span.svelte generated by Svelte v3.37.0 */
const file$7 = "packages/snackbar/node_modules/@smui/common/Span.svelte";

function create_fragment$c(ctx) {
	let span;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let span_levels = [/*$$restProps*/ ctx[3]];
	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	const block = {
		c: function create() {
			span = element("span");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(span, span_data);
			add_location(span, file$7, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			/*span_binding*/ ctx[7](span);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, span, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[2].call(null, span))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			set_attributes(span, span_data = get_spread_update(span_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			if (detaching) detach_dev(span);
			if (default_slot) default_slot.d(detaching);
			/*span_binding*/ ctx[7](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$c.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$b($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Span", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let element = null;

	function getElement() {
		return element;
	}

	function span_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(1, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		useActions,
		use,
		forwardEvents,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		span_binding
	];
}

class Span extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$b, create_fragment$c, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Span",
			options,
			id: create_fragment$c.name
		});
	}

	get use() {
		throw new Error("<Span>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Span>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<Span>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/snackbar/node_modules/@smui/common/CommonLabel.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>
function create_default_slot$9(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[11], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2048) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[11], dirty, null, null);
				}
			}
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
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$9.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>",
		ctx
	});

	return block;
}

function create_fragment$b(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		{
			use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
		},
		{
			class: classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-button__label": /*context*/ ctx[5] === "button",
				"mdc-fab__label": /*context*/ ctx[5] === "fab",
				"mdc-tab__text-label": /*context*/ ctx[5] === "tab",
				"mdc-image-list__label": /*context*/ ctx[5] === "image-list",
				"mdc-snackbar__label": /*context*/ ctx[5] === "snackbar",
				"mdc-banner__text": /*context*/ ctx[5] === "banner",
				"mdc-segmented-button__label": /*context*/ ctx[5] === "segmented-button",
				"mdc-data-table__pagination-rows-per-page-label": /*context*/ ctx[5] === "data-table:pagination",
				"mdc-data-table__header-cell-label": /*context*/ ctx[5] === "data-table:sortable-header-cell"
			})
		},
		/*context*/ ctx[5] === "snackbar"
		? { "aria-atomic": "false" }
		: {},
		{ tabindex: /*tabindex*/ ctx[6] },
		/*$$restProps*/ ctx[7]
	];

	var switch_value = /*component*/ ctx[2];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: { default: [create_default_slot$9] },
			$$scope: { ctx }
		};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
		/*switch_instance_binding*/ ctx[10](switch_instance);
	}

	const block = {
		c: function create() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l: function claim(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_dev(target, switch_instance_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, context, tabindex, $$restProps*/ 243)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*forwardEvents, use*/ 17 && {
						use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
					},
					dirty & /*classMap, className, context*/ 34 && {
						class: classMap({
							[/*className*/ ctx[1]]: true,
							"mdc-button__label": /*context*/ ctx[5] === "button",
							"mdc-fab__label": /*context*/ ctx[5] === "fab",
							"mdc-tab__text-label": /*context*/ ctx[5] === "tab",
							"mdc-image-list__label": /*context*/ ctx[5] === "image-list",
							"mdc-snackbar__label": /*context*/ ctx[5] === "snackbar",
							"mdc-banner__text": /*context*/ ctx[5] === "banner",
							"mdc-segmented-button__label": /*context*/ ctx[5] === "segmented-button",
							"mdc-data-table__pagination-rows-per-page-label": /*context*/ ctx[5] === "data-table:pagination",
							"mdc-data-table__header-cell-label": /*context*/ ctx[5] === "data-table:sortable-header-cell"
						})
					},
					dirty & /*context*/ 32 && get_spread_object(/*context*/ ctx[5] === "snackbar"
					? { "aria-atomic": "false" }
					: {}),
					dirty & /*tabindex*/ 64 && { tabindex: /*tabindex*/ ctx[6] },
					dirty & /*$$restProps*/ 128 && get_spread_object(/*$$restProps*/ ctx[7])
				])
			: {};

			if (dirty & /*$$scope*/ 2048) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[2])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					/*switch_instance_binding*/ ctx[10](switch_instance);
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*switch_instance_binding*/ ctx[10](null);
			if (detaching) detach_dev(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$b.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$a($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","component","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CommonLabel", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let element;
	let { component = Span } = $$props;
	const context = getContext("SMUI:label:context");
	const tabindex = getContext("SMUI:label:tabindex");

	function getElement() {
		return element.getElement();
	}

	function switch_instance_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(3, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("component" in $$new_props) $$invalidate(2, component = $$new_props.component);
		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		getContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		Span,
		forwardEvents,
		use,
		className,
		element,
		component,
		context,
		tabindex,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
		if ("component" in $$props) $$invalidate(2, component = $$new_props.component);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		component,
		element,
		forwardEvents,
		context,
		tabindex,
		$$restProps,
		getElement,
		slots,
		switch_instance_binding,
		$$scope
	];
}

class CommonLabel extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$a, create_fragment$b, safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			getElement: 8
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CommonLabel",
			options,
			id: create_fragment$b.name
		});
	}

	get use() {
		throw new Error("<CommonLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<CommonLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get component() {
		throw new Error("<CommonLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set component(value) {
		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[8];
	}

	set getElement(value) {
		throw new Error("<CommonLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/snackbar/_Simple.svelte generated by Svelte v3.37.0 */

// (2:2) <Label>
function create_default_slot_9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("This is a snackbar.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "This is a snackbar.");
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
		id: create_default_slot_9.name,
		type: "slot",
		source: "(2:2) <Label>",
		ctx
	});

	return block;
}

// (4:4) <IconButton class="material-icons" title="Dismiss">
function create_default_slot_8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("close");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "close");
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
		id: create_default_slot_8.name,
		type: "slot",
		source: "(4:4) <IconButton class=\\\"material-icons\\\" title=\\\"Dismiss\\\">",
		ctx
	});

	return block;
}

// (3:2) <Actions>
function create_default_slot_7$1(ctx) {
	let iconbutton;
	let current;

	iconbutton = new IconButton$1({
			props: {
				class: "material-icons",
				title: "Dismiss",
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(iconbutton.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(iconbutton.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(iconbutton, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const iconbutton_changes = {};

			if (dirty & /*$$scope*/ 64) {
				iconbutton_changes.$$scope = { dirty, ctx };
			}

			iconbutton.$set(iconbutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(iconbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(iconbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(iconbutton, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$1.name,
		type: "slot",
		source: "(3:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Snackbar bind:this={snackbarWithClose}>
function create_default_slot_6$1(ctx) {
	let label;
	let t;
	let actions;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_7$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 64) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 64) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$1.name,
		type: "slot",
		source: "(1:0) <Snackbar bind:this={snackbarWithClose}>",
		ctx
	});

	return block;
}

// (9:2) <Label>
function create_default_slot_5$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("This is a snackbar.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "This is a snackbar.");
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
		id: create_default_slot_5$2.name,
		type: "slot",
		source: "(9:2) <Label>",
		ctx
	});

	return block;
}

// (8:0) <Snackbar bind:this={snackbarWithoutClose}>
function create_default_slot_4$3(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$2] },
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

			if (dirty & /*$$scope*/ 64) {
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
		id: create_default_slot_4$3.name,
		type: "slot",
		source: "(8:0) <Snackbar bind:this={snackbarWithoutClose}>",
		ctx
	});

	return block;
}

// (13:2) <Label>
function create_default_slot_3$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Snackbar With Dismiss");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Snackbar With Dismiss");
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
		source: "(13:2) <Label>",
		ctx
	});

	return block;
}

// (12:0) <Button on:click={() => snackbarWithClose.open()}>
function create_default_slot_2$5(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_3$5] },
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

			if (dirty & /*$$scope*/ 64) {
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
		id: create_default_slot_2$5.name,
		type: "slot",
		source: "(12:0) <Button on:click={() => snackbarWithClose.open()}>",
		ctx
	});

	return block;
}

// (16:2) <Label>
function create_default_slot_1$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Snackbar Without Dismiss");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Snackbar Without Dismiss");
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
		id: create_default_slot_1$6.name,
		type: "slot",
		source: "(16:2) <Label>",
		ctx
	});

	return block;
}

// (15:0) <Button on:click={() => snackbarWithoutClose.open()}>
function create_default_slot$8(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$6] },
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

			if (dirty & /*$$scope*/ 64) {
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
		id: create_default_slot$8.name,
		type: "slot",
		source: "(15:0) <Button on:click={() => snackbarWithoutClose.open()}>",
		ctx
	});

	return block;
}

function create_fragment$a(ctx) {
	let snackbar0;
	let t0;
	let snackbar1;
	let t1;
	let button0;
	let t2;
	let button1;
	let current;

	let snackbar0_props = {
		$$slots: { default: [create_default_slot_6$1] },
		$$scope: { ctx }
	};

	snackbar0 = new Snackbar$1({ props: snackbar0_props, $$inline: true });
	/*snackbar0_binding*/ ctx[2](snackbar0);

	let snackbar1_props = {
		$$slots: { default: [create_default_slot_4$3] },
		$$scope: { ctx }
	};

	snackbar1 = new Snackbar$1({ props: snackbar1_props, $$inline: true });
	/*snackbar1_binding*/ ctx[3](snackbar1);

	button0 = new Button_1$1({
			props: {
				$$slots: { default: [create_default_slot_2$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[4]);

	button1 = new Button_1$1({
			props: {
				$$slots: { default: [create_default_slot$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[5]);

	const block = {
		c: function create() {
			create_component(snackbar0.$$.fragment);
			t0 = space();
			create_component(snackbar1.$$.fragment);
			t1 = space();
			create_component(button0.$$.fragment);
			t2 = space();
			create_component(button1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(snackbar0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(snackbar1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(button0.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(snackbar0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(snackbar1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button0, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(button1, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const snackbar0_changes = {};

			if (dirty & /*$$scope*/ 64) {
				snackbar0_changes.$$scope = { dirty, ctx };
			}

			snackbar0.$set(snackbar0_changes);
			const snackbar1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				snackbar1_changes.$$scope = { dirty, ctx };
			}

			snackbar1.$set(snackbar1_changes);
			const button0_changes = {};

			if (dirty & /*$$scope*/ 64) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(snackbar0.$$.fragment, local);
			transition_in(snackbar1.$$.fragment, local);
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(snackbar0.$$.fragment, local);
			transition_out(snackbar1.$$.fragment, local);
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*snackbar0_binding*/ ctx[2](null);
			destroy_component(snackbar0, detaching);
			if (detaching) detach_dev(t0);
			/*snackbar1_binding*/ ctx[3](null);
			destroy_component(snackbar1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(button1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$a.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$9($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Simple", slots, []);
	let snackbarWithClose;
	let snackbarWithoutClose;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Simple> was created with unknown prop '${key}'`);
	});

	function snackbar0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			snackbarWithClose = $$value;
			$$invalidate(0, snackbarWithClose);
		});
	}

	function snackbar1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			snackbarWithoutClose = $$value;
			$$invalidate(1, snackbarWithoutClose);
		});
	}

	const click_handler = () => snackbarWithClose.open();
	const click_handler_1 = () => snackbarWithoutClose.open();

	$$self.$capture_state = () => ({
		Snackbar: Snackbar$1,
		Actions,
		Label: CommonLabel,
		Button: Button_1$1,
		IconButton: IconButton$1,
		snackbarWithClose,
		snackbarWithoutClose
	});

	$$self.$inject_state = $$props => {
		if ("snackbarWithClose" in $$props) $$invalidate(0, snackbarWithClose = $$props.snackbarWithClose);
		if ("snackbarWithoutClose" in $$props) $$invalidate(1, snackbarWithoutClose = $$props.snackbarWithoutClose);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		snackbarWithClose,
		snackbarWithoutClose,
		snackbar0_binding,
		snackbar1_binding,
		click_handler,
		click_handler_1
	];
}

class Simple extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$9, create_fragment$a, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Simple",
			options,
			id: create_fragment$a.name
		});
	}
}

/* src/routes/demo/snackbar/_LeadingWithAction.svelte generated by Svelte v3.37.0 */
const file$6 = "src/routes/demo/snackbar/_LeadingWithAction.svelte";

// (2:2) <Label>
function create_default_slot_5$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("This is a leading snackbar.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "This is a leading snackbar.");
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
		source: "(2:2) <Label>",
		ctx
	});

	return block;
}

// (4:4) <Button>
function create_default_slot_4$2(ctx) {
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
		id: create_default_slot_4$2.name,
		type: "slot",
		source: "(4:4) <Button>",
		ctx
	});

	return block;
}

// (3:2) <Actions>
function create_default_slot_3$4(ctx) {
	let button;
	let current;

	button = new Button_1$1({
			props: {
				$$slots: { default: [create_default_slot_4$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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

			if (dirty & /*$$scope*/ 32) {
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
		id: create_default_slot_3$4.name,
		type: "slot",
		source: "(3:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Snackbar leading bind:this={snackbar} on:MDCSnackbar:closed={handleClosed}>
function create_default_slot_2$4(ctx) {
	let label;
	let t;
	let actions;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 32) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 32) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$4.name,
		type: "slot",
		source: "(1:0) <Snackbar leading bind:this={snackbar} on:MDCSnackbar:closed={handleClosed}>",
		ctx
	});

	return block;
}

// (9:2) <Label>
function create_default_slot_1$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Snackbar");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Snackbar");
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
		id: create_default_slot_1$5.name,
		type: "slot",
		source: "(9:2) <Label>",
		ctx
	});

	return block;
}

// (8:0) <Button on:click={() => snackbar.open()}>
function create_default_slot$7(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$5] },
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

			if (dirty & /*$$scope*/ 32) {
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
		id: create_default_slot$7.name,
		type: "slot",
		source: "(8:0) <Button on:click={() => snackbar.open()}>",
		ctx
	});

	return block;
}

function create_fragment$9(ctx) {
	let snackbar_1;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	let snackbar_1_props = {
		leading: true,
		$$slots: { default: [create_default_slot_2$4] },
		$$scope: { ctx }
	};

	snackbar_1 = new Snackbar$1({ props: snackbar_1_props, $$inline: true });
	/*snackbar_1_binding*/ ctx[3](snackbar_1);
	snackbar_1.$on("MDCSnackbar:closed", /*handleClosed*/ ctx[2]);

	button = new Button_1$1({
			props: {
				$$slots: { default: [create_default_slot$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(snackbar_1.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Closed Reason: ");
			t3 = text(/*reason*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(snackbar_1.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Closed Reason: ");
			t3 = claim_text(pre_nodes, /*reason*/ ctx[1]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$6, 11, 0, 272);
		},
		m: function mount(target, anchor) {
			mount_component(snackbar_1, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const snackbar_1_changes = {};

			if (dirty & /*$$scope*/ 32) {
				snackbar_1_changes.$$scope = { dirty, ctx };
			}

			snackbar_1.$set(snackbar_1_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*reason*/ 2) set_data_dev(t3, /*reason*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(snackbar_1.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(snackbar_1.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*snackbar_1_binding*/ ctx[3](null);
			destroy_component(snackbar_1, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$9.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$8($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("LeadingWithAction", slots, []);
	let snackbar;
	let reason = "nothing yet";

	function handleClosed(e) {
		$$invalidate(1, reason = e.detail.reason);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<LeadingWithAction> was created with unknown prop '${key}'`);
	});

	function snackbar_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			snackbar = $$value;
			$$invalidate(0, snackbar);
		});
	}

	const click_handler = () => snackbar.open();

	$$self.$capture_state = () => ({
		Snackbar: Snackbar$1,
		Actions,
		Label: CommonLabel,
		Button: Button_1$1,
		snackbar,
		reason,
		handleClosed
	});

	$$self.$inject_state = $$props => {
		if ("snackbar" in $$props) $$invalidate(0, snackbar = $$props.snackbar);
		if ("reason" in $$props) $$invalidate(1, reason = $$props.reason);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [snackbar, reason, handleClosed, snackbar_1_binding, click_handler];
}

class LeadingWithAction extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$8, create_fragment$9, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LeadingWithAction",
			options,
			id: create_fragment$9.name
		});
	}
}

/* src/routes/demo/snackbar/_StackedWithAction.svelte generated by Svelte v3.37.0 */
const file$5 = "src/routes/demo/snackbar/_StackedWithAction.svelte";

// (6:2) <Label>
function create_default_slot_7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("This is a stacked snackbar. Use it when you have really long text.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "This is a stacked snackbar. Use it when you have really long text.");
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
		source: "(6:2) <Label>",
		ctx
	});

	return block;
}

// (10:4) <Button on:click={() => (action = 'Something')}>
function create_default_slot_6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Something");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Something");
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
		source: "(10:4) <Button on:click={() => (action = 'Something')}>",
		ctx
	});

	return block;
}

// (11:4) <Button on:click={() => (action = 'Another')}>
function create_default_slot_5(ctx) {
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
		id: create_default_slot_5.name,
		type: "slot",
		source: "(11:4) <Button on:click={() => (action = 'Another')}>",
		ctx
	});

	return block;
}

// (12:4) <IconButton       on:click={() => (action = 'Dismissed')}       class="material-icons"       title="Dismiss">
function create_default_slot_4$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("close");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "close");
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
		id: create_default_slot_4$1.name,
		type: "slot",
		source: "(12:4) <IconButton       on:click={() => (action = 'Dismissed')}       class=\\\"material-icons\\\"       title=\\\"Dismiss\\\">",
		ctx
	});

	return block;
}

// (9:2) <Actions>
function create_default_slot_3$3(ctx) {
	let button0;
	let t0;
	let button1;
	let t1;
	let iconbutton;
	let current;

	button0 = new Button_1$1({
			props: {
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[4]);

	button1 = new Button_1$1({
			props: {
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[5]);

	iconbutton = new IconButton$1({
			props: {
				class: "material-icons",
				title: "Dismiss",
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton.$on("click", /*click_handler_2*/ ctx[6]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(iconbutton.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(iconbutton.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(iconbutton, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 512) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 512) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const iconbutton_changes = {};

			if (dirty & /*$$scope*/ 512) {
				iconbutton_changes.$$scope = { dirty, ctx };
			}

			iconbutton.$set(iconbutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(iconbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(iconbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(iconbutton, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$3.name,
		type: "slot",
		source: "(9:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Snackbar   variant="stacked"   bind:this={nnackbar}   on:MDCSnackbar:closed={handleClosedStacked} >
function create_default_slot_2$3(ctx) {
	let label;
	let t;
	let actions;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = {};

			if (dirty & /*$$scope*/ 512) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, action*/ 516) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(1:0) <Snackbar   variant=\\\"stacked\\\"   bind:this={nnackbar}   on:MDCSnackbar:closed={handleClosedStacked} >",
		ctx
	});

	return block;
}

// (21:2) <Label>
function create_default_slot_1$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Snackbar");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Snackbar");
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
		id: create_default_slot_1$4.name,
		type: "slot",
		source: "(21:2) <Label>",
		ctx
	});

	return block;
}

// (20:0) <Button on:click={() => nnackbar.open()}>
function create_default_slot$6(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$4] },
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

			if (dirty & /*$$scope*/ 512) {
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
		id: create_default_slot$6.name,
		type: "slot",
		source: "(20:0) <Button on:click={() => nnackbar.open()}>",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
	let snackbar;
	let t0;
	let button;
	let t1;
	let pre0;
	let t2;
	let t3;
	let t4;
	let pre1;
	let t5;
	let t6;
	let current;

	let snackbar_props = {
		variant: "stacked",
		$$slots: { default: [create_default_slot_2$3] },
		$$scope: { ctx }
	};

	snackbar = new Snackbar$1({ props: snackbar_props, $$inline: true });
	/*snackbar_binding*/ ctx[7](snackbar);
	snackbar.$on("MDCSnackbar:closed", /*handleClosedStacked*/ ctx[3]);

	button = new Button_1$1({
			props: {
				$$slots: { default: [create_default_slot$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_3*/ ctx[8]);

	const block = {
		c: function create() {
			create_component(snackbar.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre0 = element("pre");
			t2 = text("Closed Reason: ");
			t3 = text(/*reason*/ ctx[1]);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Action: ");
			t6 = text(/*action*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(snackbar.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre0 = claim_element(nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t2 = claim_text(pre0_nodes, "Closed Reason: ");
			t3 = claim_text(pre0_nodes, /*reason*/ ctx[1]);
			pre0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			pre1 = claim_element(nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Action: ");
			t6 = claim_text(pre1_nodes, /*action*/ ctx[2]);
			pre1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$5, 23, 0, 590);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$5, 24, 0, 640);
		},
		m: function mount(target, anchor) {
			mount_component(snackbar, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre0, anchor);
			append_dev(pre0, t2);
			append_dev(pre0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, pre1, anchor);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const snackbar_changes = {};

			if (dirty & /*$$scope, action*/ 516) {
				snackbar_changes.$$scope = { dirty, ctx };
			}

			snackbar.$set(snackbar_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 512) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*reason*/ 2) set_data_dev(t3, /*reason*/ ctx[1]);
			if (!current || dirty & /*action*/ 4) set_data_dev(t6, /*action*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(snackbar.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(snackbar.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*snackbar_binding*/ ctx[7](null);
			destroy_component(snackbar, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(pre0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(pre1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$8.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$7($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("StackedWithAction", slots, []);
	let nnackbar;
	let reason = "nothing yet";
	let action = "nothing yet";

	function handleClosedStacked(e) {
		$$invalidate(1, reason = e.detail.reason);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<StackedWithAction> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(2, action = "Something");
	const click_handler_1 = () => $$invalidate(2, action = "Another");
	const click_handler_2 = () => $$invalidate(2, action = "Dismissed");

	function snackbar_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			nnackbar = $$value;
			$$invalidate(0, nnackbar);
		});
	}

	const click_handler_3 = () => nnackbar.open();

	$$self.$capture_state = () => ({
		Snackbar: Snackbar$1,
		Actions,
		Label: CommonLabel,
		Button: Button_1$1,
		IconButton: IconButton$1,
		nnackbar,
		reason,
		action,
		handleClosedStacked
	});

	$$self.$inject_state = $$props => {
		if ("nnackbar" in $$props) $$invalidate(0, nnackbar = $$props.nnackbar);
		if ("reason" in $$props) $$invalidate(1, reason = $$props.reason);
		if ("action" in $$props) $$invalidate(2, action = $$props.action);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		nnackbar,
		reason,
		action,
		handleClosedStacked,
		click_handler,
		click_handler_1,
		click_handler_2,
		snackbar_binding,
		click_handler_3
	];
}

class StackedWithAction extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$8, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "StackedWithAction",
			options,
			id: create_fragment$8.name
		});
	}
}

/* src/routes/demo/snackbar/_DynamicText.svelte generated by Svelte v3.37.0 */

// (4:4) <IconButton class="material-icons" title="Dismiss">
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("close");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "close");
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
		source: "(4:4) <IconButton class=\\\"material-icons\\\" title=\\\"Dismiss\\\">",
		ctx
	});

	return block;
}

// (3:2) <Actions>
function create_default_slot_3$2(ctx) {
	let iconbutton;
	let current;

	iconbutton = new IconButton$1({
			props: {
				class: "material-icons",
				title: "Dismiss",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(iconbutton.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(iconbutton.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(iconbutton, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const iconbutton_changes = {};

			if (dirty & /*$$scope*/ 32) {
				iconbutton_changes.$$scope = { dirty, ctx };
			}

			iconbutton.$set(iconbutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(iconbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(iconbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(iconbutton, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$2.name,
		type: "slot",
		source: "(3:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Snackbar bind:this={snackbar} labelText={text} timeoutMs={-1}>
function create_default_slot_2$2(ctx) {
	let label;
	let t;
	let actions;
	let current;
	label = new CommonLabel({ $$inline: true });

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const actions_changes = {};

			if (dirty & /*$$scope*/ 32) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(1:0) <Snackbar bind:this={snackbar} labelText={text} timeoutMs={-1}>",
		ctx
	});

	return block;
}

// (11:2) <Label>
function create_default_slot_1$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Snackbar");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Snackbar");
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
		id: create_default_slot_1$3.name,
		type: "slot",
		source: "(11:2) <Label>",
		ctx
	});

	return block;
}

// (10:0) <Button on:click={() => snackbar && snackbar.open()}>
function create_default_slot$5(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$3] },
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

			if (dirty & /*$$scope*/ 32) {
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
		id: create_default_slot$5.name,
		type: "slot",
		source: "(10:0) <Button on:click={() => snackbar && snackbar.open()}>",
		ctx
	});

	return block;
}

function create_fragment$7(ctx) {
	let snackbar_1;
	let t0;
	let textfield;
	let updating_value;
	let t1;
	let button;
	let current;

	let snackbar_1_props = {
		labelText: /*text*/ ctx[1],
		timeoutMs: -1,
		$$slots: { default: [create_default_slot_2$2] },
		$$scope: { ctx }
	};

	snackbar_1 = new Snackbar$1({ props: snackbar_1_props, $$inline: true });
	/*snackbar_1_binding*/ ctx[2](snackbar_1);

	function textfield_value_binding(value) {
		/*textfield_value_binding*/ ctx[3](value);
	}

	let textfield_props = {
		label: "Dynamic Text",
		input$required: true
	};

	if (/*text*/ ctx[1] !== void 0) {
		textfield_props.value = /*text*/ ctx[1];
	}

	textfield = new Textfield({ props: textfield_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield, "value", textfield_value_binding));

	button = new Button_1$1({
			props: {
				$$slots: { default: [create_default_slot$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(snackbar_1.$$.fragment);
			t0 = space();
			create_component(textfield.$$.fragment);
			t1 = space();
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(snackbar_1.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(textfield.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(snackbar_1, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(textfield, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const snackbar_1_changes = {};
			if (dirty & /*text*/ 2) snackbar_1_changes.labelText = /*text*/ ctx[1];

			if (dirty & /*$$scope*/ 32) {
				snackbar_1_changes.$$scope = { dirty, ctx };
			}

			snackbar_1.$set(snackbar_1_changes);
			const textfield_changes = {};

			if (!updating_value && dirty & /*text*/ 2) {
				updating_value = true;
				textfield_changes.value = /*text*/ ctx[1];
				add_flush_callback(() => updating_value = false);
			}

			textfield.$set(textfield_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(snackbar_1.$$.fragment, local);
			transition_in(textfield.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(snackbar_1.$$.fragment, local);
			transition_out(textfield.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*snackbar_1_binding*/ ctx[2](null);
			destroy_component(snackbar_1, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(textfield, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(button, detaching);
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

function instance$6($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("DynamicText", slots, []);
	let snackbar;
	let text = "This is a snackbar with dynamic text.";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DynamicText> was created with unknown prop '${key}'`);
	});

	function snackbar_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			snackbar = $$value;
			$$invalidate(0, snackbar);
		});
	}

	function textfield_value_binding(value) {
		text = value;
		$$invalidate(1, text);
	}

	const click_handler = () => snackbar && snackbar.open();

	$$self.$capture_state = () => ({
		Snackbar: Snackbar$1,
		Actions,
		Label: CommonLabel,
		Button: Button_1$1,
		IconButton: IconButton$1,
		Textfield,
		snackbar,
		text
	});

	$$self.$inject_state = $$props => {
		if ("snackbar" in $$props) $$invalidate(0, snackbar = $$props.snackbar);
		if ("text" in $$props) $$invalidate(1, text = $$props.text);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [snackbar, text, snackbar_1_binding, textfield_value_binding, click_handler];
}

class DynamicText extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$7, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DynamicText",
			options,
			id: create_fragment$7.name
		});
	}
}

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
var strings$1 = {
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
            return cssClasses$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCRippleFoundation, "strings", {
        get: function () {
            return strings$1;
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

/* packages/snackbar/node_modules/@smui/common/A.svelte generated by Svelte v3.37.0 */
const file$4 = "packages/snackbar/node_modules/@smui/common/A.svelte";

function create_fragment$6(ctx) {
	let a;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);
	let a_levels = [{ href: /*href*/ ctx[0] }, /*$$restProps*/ ctx[4]];
	let a_data = {};

	for (let i = 0; i < a_levels.length; i += 1) {
		a_data = assign(a_data, a_levels[i]);
	}

	const block = {
		c: function create() {
			a = element("a");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true });
			var a_nodes = children(a);
			if (default_slot) default_slot.l(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(a, a_data);
			add_location(a, file$4, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			/*a_binding*/ ctx[8](a);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, a, /*use*/ ctx[1])),
					action_destroyer(/*forwardEvents*/ ctx[3].call(null, a))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			set_attributes(a, a_data = get_spread_update(a_levels, [
				(!current || dirty & /*href*/ 1) && { href: /*href*/ ctx[0] },
				dirty & /*$$restProps*/ 16 && /*$$restProps*/ ctx[4]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
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
			if (detaching) detach_dev(a);
			if (default_slot) default_slot.d(detaching);
			/*a_binding*/ ctx[8](null);
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

function instance$5($$self, $$props, $$invalidate) {
	const omit_props_names = ["href","use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("A", slots, ['default']);
	let { href = "javascript:void(0);" } = $$props;
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let element = null;

	function getElement() {
		return element;
	}

	function a_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(2, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("href" in $$new_props) $$invalidate(0, href = $$new_props.href);
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		useActions,
		href,
		use,
		forwardEvents,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("href" in $$props) $$invalidate(0, href = $$new_props.href);
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		href,
		use,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		a_binding
	];
}

class A extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$6, safe_not_equal, { href: 0, use: 1, getElement: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "A",
			options,
			id: create_fragment$6.name
		});
	}

	get href() {
		throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get use() {
		throw new Error("<A>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[5];
	}

	set getElement(value) {
		throw new Error("<A>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/snackbar/node_modules/@smui/common/Button.svelte generated by Svelte v3.37.0 */
const file$3 = "packages/snackbar/node_modules/@smui/common/Button.svelte";

function create_fragment$5(ctx) {
	let button;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let button_levels = [/*$$restProps*/ ctx[3]];
	let button_data = {};

	for (let i = 0; i < button_levels.length; i += 1) {
		button_data = assign(button_data, button_levels[i]);
	}

	const block = {
		c: function create() {
			button = element("button");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {});
			var button_nodes = children(button);
			if (default_slot) default_slot.l(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(button, button_data);
			add_location(button, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			/*button_binding*/ ctx[7](button);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, button, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[2].call(null, button))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			set_attributes(button, button_data = get_spread_update(button_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			if (detaching) detach_dev(button);
			if (default_slot) default_slot.d(detaching);
			/*button_binding*/ ctx[7](null);
			mounted = false;
			run_all(dispose);
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

function instance$4($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Button", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let element = null;

	function getElement() {
		return element;
	}

	function button_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(1, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("$$scope" in $$new_props) $$invalidate(5, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		useActions,
		use,
		forwardEvents,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		button_binding
	];
}

class Button extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$5, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Button",
			options,
			id: create_fragment$5.name
		});
	}

	get use() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/snackbar/node_modules/@smui/button/Button.svelte generated by Svelte v3.37.0 */
const file$2 = "packages/snackbar/node_modules/@smui/button/Button.svelte";

// (50:10) {#if touch}
function create_if_block$1(ctx) {
	let div;

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
			attr_dev(div, "class", "mdc-button__touch");
			add_location(div, file$2, 49, 21, 1522);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(50:10) {#if touch}",
		ctx
	});

	return block;
}

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-button': true,     'mdc-button--raised': variant === 'raised',     'mdc-button--unelevated': variant === 'unelevated',     'mdc-button--outlined': variant === 'outlined',     'smui-button--color-secondary': color === 'secondary',     'mdc-button--touch': touch,     'mdc-card__action': context === 'card:action',     'mdc-card__action--button': context === 'card:action',     'mdc-dialog__button': context === 'dialog:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__action': context === 'snackbar:actions',     'mdc-banner__secondary-action': context === 'banner' && secondary,     'mdc-banner__primary-action': context === 'banner' && !secondary,     'mdc-tooltip__action': context === 'tooltip:rich-actions',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...actionProp}   {...defaultProp}   {...secondaryProp}   {href}   on:click={handleClick}   {...$$restProps}   >
function create_default_slot$4(ctx) {
	let div;
	let t;
	let if_block_anchor;
	let current;
	const default_slot_template = /*#slots*/ ctx[26].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[28], null);
	let if_block = /*touch*/ ctx[6] && create_if_block$1(ctx);

	const block = {
		c: function create() {
			div = element("div");
			t = space();
			if (default_slot) default_slot.c();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			children(div).forEach(detach_dev);
			t = claim_space(nodes);
			if (default_slot) default_slot.l(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "mdc-button__ripple");
			add_location(div, file$2, 48, 3, 1466);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			insert_dev(target, t, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 268435456) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[28], dirty, null, null);
				}
			}

			if (/*touch*/ ctx[6]) {
				if (if_block) ; else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
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
			if (detaching) detach_dev(t);
			if (default_slot) default_slot.d(detaching);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$4.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-button': true,     'mdc-button--raised': variant === 'raised',     'mdc-button--unelevated': variant === 'unelevated',     'mdc-button--outlined': variant === 'outlined',     'smui-button--color-secondary': color === 'secondary',     'mdc-button--touch': touch,     'mdc-card__action': context === 'card:action',     'mdc-card__action--button': context === 'card:action',     'mdc-dialog__button': context === 'dialog:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__action': context === 'snackbar:actions',     'mdc-banner__secondary-action': context === 'banner' && secondary,     'mdc-banner__primary-action': context === 'banner' && !secondary,     'mdc-tooltip__action': context === 'tooltip:rich-actions',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   {...actionProp}   {...defaultProp}   {...secondaryProp}   {href}   on:click={handleClick}   {...$$restProps}   >",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		{
			use: [
				[
					Ripple,
					{
						ripple: /*ripple*/ ctx[3],
						unbounded: false,
						color: /*color*/ ctx[4],
						disabled: !!/*$$restProps*/ ctx[22].disabled,
						addClass: /*addClass*/ ctx[18],
						removeClass: /*removeClass*/ ctx[19],
						addStyle: /*addStyle*/ ctx[20]
					}
				],
				/*forwardEvents*/ ctx[16],
				.../*use*/ ctx[0]
			]
		},
		{
			class: classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-button": true,
				"mdc-button--raised": /*variant*/ ctx[5] === "raised",
				"mdc-button--unelevated": /*variant*/ ctx[5] === "unelevated",
				"mdc-button--outlined": /*variant*/ ctx[5] === "outlined",
				"smui-button--color-secondary": /*color*/ ctx[4] === "secondary",
				"mdc-button--touch": /*touch*/ ctx[6],
				"mdc-card__action": /*context*/ ctx[17] === "card:action",
				"mdc-card__action--button": /*context*/ ctx[17] === "card:action",
				"mdc-dialog__button": /*context*/ ctx[17] === "dialog:action",
				"mdc-top-app-bar__navigation-icon": /*context*/ ctx[17] === "top-app-bar:navigation",
				"mdc-top-app-bar__action-item": /*context*/ ctx[17] === "top-app-bar:action",
				"mdc-snackbar__action": /*context*/ ctx[17] === "snackbar:actions",
				"mdc-banner__secondary-action": /*context*/ ctx[17] === "banner" && /*secondary*/ ctx[8],
				"mdc-banner__primary-action": /*context*/ ctx[17] === "banner" && !/*secondary*/ ctx[8],
				"mdc-tooltip__action": /*context*/ ctx[17] === "tooltip:rich-actions",
				.../*internalClasses*/ ctx[11]
			})
		},
		{
			style: Object.entries(/*internalStyles*/ ctx[12]).map(func$1).concat([/*style*/ ctx[2]]).join(" ")
		},
		/*actionProp*/ ctx[13],
		/*defaultProp*/ ctx[14],
		/*secondaryProp*/ ctx[15],
		{ href: /*href*/ ctx[7] },
		/*$$restProps*/ ctx[22]
	];

	var switch_value = /*component*/ ctx[9];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: { default: [create_default_slot$4] },
			$$scope: { ctx }
		};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
		/*switch_instance_binding*/ ctx[27](switch_instance);
		switch_instance.$on("click", /*handleClick*/ ctx[21]);
	}

	const block = {
		c: function create() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l: function claim(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_dev(target, switch_instance_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const switch_instance_changes = (dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, classMap, className, variant, touch, context, secondary, internalClasses, Object, internalStyles, style, actionProp, defaultProp, secondaryProp, href*/ 6289919)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*Ripple, ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/ 6094873 && {
						use: [
							[
								Ripple,
								{
									ripple: /*ripple*/ ctx[3],
									unbounded: false,
									color: /*color*/ ctx[4],
									disabled: !!/*$$restProps*/ ctx[22].disabled,
									addClass: /*addClass*/ ctx[18],
									removeClass: /*removeClass*/ ctx[19],
									addStyle: /*addStyle*/ ctx[20]
								}
							],
							/*forwardEvents*/ ctx[16],
							.../*use*/ ctx[0]
						]
					},
					dirty & /*classMap, className, variant, color, touch, context, secondary, internalClasses*/ 133490 && {
						class: classMap({
							[/*className*/ ctx[1]]: true,
							"mdc-button": true,
							"mdc-button--raised": /*variant*/ ctx[5] === "raised",
							"mdc-button--unelevated": /*variant*/ ctx[5] === "unelevated",
							"mdc-button--outlined": /*variant*/ ctx[5] === "outlined",
							"smui-button--color-secondary": /*color*/ ctx[4] === "secondary",
							"mdc-button--touch": /*touch*/ ctx[6],
							"mdc-card__action": /*context*/ ctx[17] === "card:action",
							"mdc-card__action--button": /*context*/ ctx[17] === "card:action",
							"mdc-dialog__button": /*context*/ ctx[17] === "dialog:action",
							"mdc-top-app-bar__navigation-icon": /*context*/ ctx[17] === "top-app-bar:navigation",
							"mdc-top-app-bar__action-item": /*context*/ ctx[17] === "top-app-bar:action",
							"mdc-snackbar__action": /*context*/ ctx[17] === "snackbar:actions",
							"mdc-banner__secondary-action": /*context*/ ctx[17] === "banner" && /*secondary*/ ctx[8],
							"mdc-banner__primary-action": /*context*/ ctx[17] === "banner" && !/*secondary*/ ctx[8],
							"mdc-tooltip__action": /*context*/ ctx[17] === "tooltip:rich-actions",
							.../*internalClasses*/ ctx[11]
						})
					},
					dirty & /*Object, internalStyles, style*/ 4100 && {
						style: Object.entries(/*internalStyles*/ ctx[12]).map(func$1).concat([/*style*/ ctx[2]]).join(" ")
					},
					dirty & /*actionProp*/ 8192 && get_spread_object(/*actionProp*/ ctx[13]),
					dirty & /*defaultProp*/ 16384 && get_spread_object(/*defaultProp*/ ctx[14]),
					dirty & /*secondaryProp*/ 32768 && get_spread_object(/*secondaryProp*/ ctx[15]),
					dirty & /*href*/ 128 && { href: /*href*/ ctx[7] },
					dirty & /*$$restProps*/ 4194304 && get_spread_object(/*$$restProps*/ ctx[22])
				])
			: {};

			if (dirty & /*$$scope, touch*/ 268435520) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[9])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					/*switch_instance_binding*/ ctx[27](switch_instance);
					switch_instance.$on("click", /*handleClick*/ ctx[21]);
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*switch_instance_binding*/ ctx[27](null);
			if (detaching) detach_dev(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
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

const func$1 = ([name, value]) => `${name}: ${value};`;

function instance$3($$self, $$props, $$invalidate) {
	let actionProp;
	let defaultProp;
	let secondaryProp;

	const omit_props_names = [
		"use","class","style","ripple","color","variant","touch","href","action","default","secondary","component","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Button", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { ripple = true } = $$props;
	let { color = "primary" } = $$props;
	let { variant = "text" } = $$props;
	let { touch = false } = $$props;
	let { href = null } = $$props;
	let { action = "close" } = $$props;
	let { default: defaultAction = false } = $$props;
	let { secondary = false } = $$props;
	let element;
	let internalClasses = {};
	let internalStyles = {};
	let context = getContext("SMUI:button:context");
	let { component = href == null ? Button : A } = $$props;
	setContext("SMUI:label:context", "button");
	setContext("SMUI:icon:context", "button");

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(11, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(11, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === "" || value == null) {
				delete internalStyles[name];
				$$invalidate(12, internalStyles);
			} else {
				$$invalidate(12, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function handleClick() {
		if (context === "banner") {
			dispatch(getElement(), secondary
			? "SMUI:banner:button:secondaryActionClick"
			: "SMUI:banner:button:primaryActionClick");
		}
	}

	function getElement() {
		return element.getElement();
	}

	function switch_instance_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(10, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$invalidate(29, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		$$invalidate(22, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("color" in $$new_props) $$invalidate(4, color = $$new_props.color);
		if ("variant" in $$new_props) $$invalidate(5, variant = $$new_props.variant);
		if ("touch" in $$new_props) $$invalidate(6, touch = $$new_props.touch);
		if ("href" in $$new_props) $$invalidate(7, href = $$new_props.href);
		if ("action" in $$new_props) $$invalidate(23, action = $$new_props.action);
		if ("default" in $$new_props) $$invalidate(24, defaultAction = $$new_props.default);
		if ("secondary" in $$new_props) $$invalidate(8, secondary = $$new_props.secondary);
		if ("component" in $$new_props) $$invalidate(9, component = $$new_props.component);
		if ("$$scope" in $$new_props) $$invalidate(28, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		setContext,
		getContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		dispatch,
		Ripple,
		A,
		Button,
		forwardEvents,
		use,
		className,
		style,
		ripple,
		color,
		variant,
		touch,
		href,
		action,
		defaultAction,
		secondary,
		element,
		internalClasses,
		internalStyles,
		context,
		component,
		addClass,
		removeClass,
		addStyle,
		handleClick,
		getElement,
		actionProp,
		defaultProp,
		secondaryProp
	});

	$$self.$inject_state = $$new_props => {
		$$invalidate(29, $$props = assign(assign({}, $$props), $$new_props));
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
		if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("color" in $$props) $$invalidate(4, color = $$new_props.color);
		if ("variant" in $$props) $$invalidate(5, variant = $$new_props.variant);
		if ("touch" in $$props) $$invalidate(6, touch = $$new_props.touch);
		if ("href" in $$props) $$invalidate(7, href = $$new_props.href);
		if ("action" in $$props) $$invalidate(23, action = $$new_props.action);
		if ("defaultAction" in $$props) $$invalidate(24, defaultAction = $$new_props.defaultAction);
		if ("secondary" in $$props) $$invalidate(8, secondary = $$new_props.secondary);
		if ("element" in $$props) $$invalidate(10, element = $$new_props.element);
		if ("internalClasses" in $$props) $$invalidate(11, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(12, internalStyles = $$new_props.internalStyles);
		if ("context" in $$props) $$invalidate(17, context = $$new_props.context);
		if ("component" in $$props) $$invalidate(9, component = $$new_props.component);
		if ("actionProp" in $$props) $$invalidate(13, actionProp = $$new_props.actionProp);
		if ("defaultProp" in $$props) $$invalidate(14, defaultProp = $$new_props.defaultProp);
		if ("secondaryProp" in $$props) $$invalidate(15, secondaryProp = $$new_props.secondaryProp);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		$$invalidate(13, actionProp = context === "dialog:action" && action != null
		? { "data-mdc-dialog-action": action }
		: { action: $$props.action });

		$$invalidate(14, defaultProp = context === "dialog:action" && defaultAction
		? { "data-mdc-dialog-button-default": "" }
		: { default: $$props.default });

		$$invalidate(15, secondaryProp = context === "banner"
		? {}
		: { secondary: $$props.secondary });
	};

	$$props = exclude_internal_props($$props);

	return [
		use,
		className,
		style,
		ripple,
		color,
		variant,
		touch,
		href,
		secondary,
		component,
		element,
		internalClasses,
		internalStyles,
		actionProp,
		defaultProp,
		secondaryProp,
		forwardEvents,
		context,
		addClass,
		removeClass,
		addStyle,
		handleClick,
		$$restProps,
		action,
		defaultAction,
		getElement,
		slots,
		switch_instance_binding,
		$$scope
	];
}

class Button_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$3, create_fragment$4, safe_not_equal, {
			use: 0,
			class: 1,
			style: 2,
			ripple: 3,
			color: 4,
			variant: 5,
			touch: 6,
			href: 7,
			action: 23,
			default: 24,
			secondary: 8,
			component: 9,
			getElement: 25
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Button_1",
			options,
			id: create_fragment$4.name
		});
	}

	get use() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get variant() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set variant(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get touch() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set touch(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get action() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set action(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get default() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set default(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get secondary() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set secondary(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get component() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set component(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[25];
	}

	set getElement(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

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
var cssClasses = {
    ICON_BUTTON_ON: 'mdc-icon-button--on',
    ROOT: 'mdc-icon-button',
};
var strings = {
    ARIA_LABEL: 'aria-label',
    ARIA_PRESSED: 'aria-pressed',
    DATA_ARIA_LABEL_OFF: 'data-aria-label-off',
    DATA_ARIA_LABEL_ON: 'data-aria-label-on',
    CHANGE_EVENT: 'MDCIconButtonToggle:change',
};

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
var MDCIconButtonToggleFoundation = /** @class */ (function (_super) {
    __extends(MDCIconButtonToggleFoundation, _super);
    function MDCIconButtonToggleFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCIconButtonToggleFoundation.defaultAdapter), adapter)) || this;
        /**
         * Whether the icon button has an aria label that changes depending on
         * toggled state.
         */
        _this.hasToggledAriaLabel = false;
        return _this;
    }
    Object.defineProperty(MDCIconButtonToggleFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCIconButtonToggleFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                hasClass: function () { return false; },
                notifyChange: function () { return undefined; },
                removeClass: function () { return undefined; },
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCIconButtonToggleFoundation.prototype.init = function () {
        var ariaLabelOn = this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON);
        var ariaLabelOff = this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
        if (ariaLabelOn && ariaLabelOff) {
            if (this.adapter.getAttr(strings.ARIA_PRESSED) !== null) {
                throw new Error('MDCIconButtonToggleFoundation: Button should not set ' +
                    '`aria-pressed` if it has a toggled aria label.');
            }
            this.hasToggledAriaLabel = true;
        }
        else {
            this.adapter.setAttr(strings.ARIA_PRESSED, String(this.isOn()));
        }
    };
    MDCIconButtonToggleFoundation.prototype.handleClick = function () {
        this.toggle();
        this.adapter.notifyChange({ isOn: this.isOn() });
    };
    MDCIconButtonToggleFoundation.prototype.isOn = function () {
        return this.adapter.hasClass(cssClasses.ICON_BUTTON_ON);
    };
    MDCIconButtonToggleFoundation.prototype.toggle = function (isOn) {
        if (isOn === void 0) { isOn = !this.isOn(); }
        // Toggle UI based on state.
        if (isOn) {
            this.adapter.addClass(cssClasses.ICON_BUTTON_ON);
        }
        else {
            this.adapter.removeClass(cssClasses.ICON_BUTTON_ON);
        }
        // Toggle aria attributes based on state.
        if (this.hasToggledAriaLabel) {
            var ariaLabel = isOn ?
                this.adapter.getAttr(strings.DATA_ARIA_LABEL_ON) :
                this.adapter.getAttr(strings.DATA_ARIA_LABEL_OFF);
            this.adapter.setAttr(strings.ARIA_LABEL, ariaLabel || '');
        }
        else {
            this.adapter.setAttr(strings.ARIA_PRESSED, "" + isOn);
        }
    };
    return MDCIconButtonToggleFoundation;
}(MDCFoundation));

/* packages/snackbar/node_modules/@smui/icon-button/IconButton.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: true,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-icon-button': true,     'mdc-icon-button--on': pressed !== uninitializedValue && pressed,     'mdc-card__action': context === 'card:action',     'mdc-card__action--icon': context === 'card:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__dismiss': context === 'snackbar:actions',     'mdc-data-table__pagination-button': context === 'data-table:pagination',     'mdc-data-table__sort-icon-button':       context === 'data-table:sortable-header-cell',     'mdc-dialog__close': context === 'dialog:header' && action === 'close',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   aria-pressed={pressed !== uninitializedValue     ? pressed       ? 'true'       : 'false'     : null}   aria-label={pressed ? ariaLabelOn : ariaLabelOff}   data-aria-label-on={ariaLabelOn}   data-aria-label-off={ariaLabelOff}   aria-describedby={ariaDescribedby}   on:click={() => instance && instance.handleClick()}   on:click={() =>     context === 'top-app-bar:navigation' &&     dispatch(element, 'SMUI:top-app-bar:icon-button:nav')}   {href}   {...actionProp}   {...internalAttrs}   {...$$restProps}>
function create_default_slot$3(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[28].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[32], null);

	const block = {
		c: function create() {
			if (default_slot) default_slot.c();
		},
		l: function claim(nodes) {
			if (default_slot) default_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[1] & /*$$scope*/ 2) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[32], dirty, null, null);
				}
			}
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
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$3.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: true,         color,         disabled: !!$$restProps.disabled,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-icon-button': true,     'mdc-icon-button--on': pressed !== uninitializedValue && pressed,     'mdc-card__action': context === 'card:action',     'mdc-card__action--icon': context === 'card:action',     'mdc-top-app-bar__navigation-icon': context === 'top-app-bar:navigation',     'mdc-top-app-bar__action-item': context === 'top-app-bar:action',     'mdc-snackbar__dismiss': context === 'snackbar:actions',     'mdc-data-table__pagination-button': context === 'data-table:pagination',     'mdc-data-table__sort-icon-button':       context === 'data-table:sortable-header-cell',     'mdc-dialog__close': context === 'dialog:header' && action === 'close',     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   aria-pressed={pressed !== uninitializedValue     ? pressed       ? 'true'       : 'false'     : null}   aria-label={pressed ? ariaLabelOn : ariaLabelOff}   data-aria-label-on={ariaLabelOn}   data-aria-label-off={ariaLabelOff}   aria-describedby={ariaDescribedby}   on:click={() => instance && instance.handleClick()}   on:click={() =>     context === 'top-app-bar:navigation' &&     dispatch(element, 'SMUI:top-app-bar:icon-button:nav')}   {href}   {...actionProp}   {...internalAttrs}   {...$$restProps}>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		{
			use: [
				[
					Ripple,
					{
						ripple: /*ripple*/ ctx[4],
						unbounded: true,
						color: /*color*/ ctx[5],
						disabled: !!/*$$restProps*/ ctx[24].disabled,
						addClass: /*addClass*/ ctx[21],
						removeClass: /*removeClass*/ ctx[22],
						addStyle: /*addStyle*/ ctx[23]
					}
				],
				/*forwardEvents*/ ctx[17],
				.../*use*/ ctx[1]
			]
		},
		{
			class: classMap({
				[/*className*/ ctx[2]]: true,
				"mdc-icon-button": true,
				"mdc-icon-button--on": /*pressed*/ ctx[0] !== /*uninitializedValue*/ ctx[18] && /*pressed*/ ctx[0],
				"mdc-card__action": /*context*/ ctx[19] === "card:action",
				"mdc-card__action--icon": /*context*/ ctx[19] === "card:action",
				"mdc-top-app-bar__navigation-icon": /*context*/ ctx[19] === "top-app-bar:navigation",
				"mdc-top-app-bar__action-item": /*context*/ ctx[19] === "top-app-bar:action",
				"mdc-snackbar__dismiss": /*context*/ ctx[19] === "snackbar:actions",
				"mdc-data-table__pagination-button": /*context*/ ctx[19] === "data-table:pagination",
				"mdc-data-table__sort-icon-button": /*context*/ ctx[19] === "data-table:sortable-header-cell",
				"mdc-dialog__close": /*context*/ ctx[19] === "dialog:header" && /*action*/ ctx[9] === "close",
				.../*internalClasses*/ ctx[13]
			})
		},
		{
			style: Object.entries(/*internalStyles*/ ctx[14]).map(func).concat([/*style*/ ctx[3]]).join(" ")
		},
		{
			"aria-pressed": /*pressed*/ ctx[0] !== /*uninitializedValue*/ ctx[18]
			? /*pressed*/ ctx[0] ? "true" : "false"
			: null
		},
		{
			"aria-label": /*pressed*/ ctx[0]
			? /*ariaLabelOn*/ ctx[6]
			: /*ariaLabelOff*/ ctx[7]
		},
		{
			"data-aria-label-on": /*ariaLabelOn*/ ctx[6]
		},
		{
			"data-aria-label-off": /*ariaLabelOff*/ ctx[7]
		},
		{
			"aria-describedby": /*ariaDescribedby*/ ctx[20]
		},
		{ href: /*href*/ ctx[8] },
		/*actionProp*/ ctx[16],
		/*internalAttrs*/ ctx[15],
		/*$$restProps*/ ctx[24]
	];

	var switch_value = /*component*/ ctx[10];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: { default: [create_default_slot$3] },
			$$scope: { ctx }
		};

		for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
			switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
		}

		return {
			props: switch_instance_props,
			$$inline: true
		};
	}

	if (switch_value) {
		switch_instance = new switch_value(switch_props(ctx));
		/*switch_instance_binding*/ ctx[29](switch_instance);
		switch_instance.$on("click", /*click_handler*/ ctx[30]);
		switch_instance.$on("click", /*click_handler_1*/ ctx[31]);
	}

	const block = {
		c: function create() {
			if (switch_instance) create_component(switch_instance.$$.fragment);
			switch_instance_anchor = empty();
		},
		l: function claim(nodes) {
			if (switch_instance) claim_component(switch_instance.$$.fragment, nodes);
			switch_instance_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (switch_instance) {
				mount_component(switch_instance, target, anchor);
			}

			insert_dev(target, switch_instance_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const switch_instance_changes = (dirty[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use, className, pressed, uninitializedValue, context, action, internalClasses, internalStyles, style, ariaLabelOn, ariaLabelOff, ariaDescribedby, href, actionProp, internalAttrs*/ 33547263)
			? get_spread_update(switch_instance_spread_levels, [
					dirty[0] & /*ripple, color, $$restProps, addClass, removeClass, addStyle, forwardEvents, use*/ 31588402 && {
						use: [
							[
								Ripple,
								{
									ripple: /*ripple*/ ctx[4],
									unbounded: true,
									color: /*color*/ ctx[5],
									disabled: !!/*$$restProps*/ ctx[24].disabled,
									addClass: /*addClass*/ ctx[21],
									removeClass: /*removeClass*/ ctx[22],
									addStyle: /*addStyle*/ ctx[23]
								}
							],
							/*forwardEvents*/ ctx[17],
							.../*use*/ ctx[1]
						]
					},
					dirty[0] & /*className, pressed, uninitializedValue, context, action, internalClasses*/ 795141 && {
						class: classMap({
							[/*className*/ ctx[2]]: true,
							"mdc-icon-button": true,
							"mdc-icon-button--on": /*pressed*/ ctx[0] !== /*uninitializedValue*/ ctx[18] && /*pressed*/ ctx[0],
							"mdc-card__action": /*context*/ ctx[19] === "card:action",
							"mdc-card__action--icon": /*context*/ ctx[19] === "card:action",
							"mdc-top-app-bar__navigation-icon": /*context*/ ctx[19] === "top-app-bar:navigation",
							"mdc-top-app-bar__action-item": /*context*/ ctx[19] === "top-app-bar:action",
							"mdc-snackbar__dismiss": /*context*/ ctx[19] === "snackbar:actions",
							"mdc-data-table__pagination-button": /*context*/ ctx[19] === "data-table:pagination",
							"mdc-data-table__sort-icon-button": /*context*/ ctx[19] === "data-table:sortable-header-cell",
							"mdc-dialog__close": /*context*/ ctx[19] === "dialog:header" && /*action*/ ctx[9] === "close",
							.../*internalClasses*/ ctx[13]
						})
					},
					dirty[0] & /*internalStyles, style*/ 16392 && {
						style: Object.entries(/*internalStyles*/ ctx[14]).map(func).concat([/*style*/ ctx[3]]).join(" ")
					},
					dirty[0] & /*pressed, uninitializedValue*/ 262145 && {
						"aria-pressed": /*pressed*/ ctx[0] !== /*uninitializedValue*/ ctx[18]
						? /*pressed*/ ctx[0] ? "true" : "false"
						: null
					},
					dirty[0] & /*pressed, ariaLabelOn, ariaLabelOff*/ 193 && {
						"aria-label": /*pressed*/ ctx[0]
						? /*ariaLabelOn*/ ctx[6]
						: /*ariaLabelOff*/ ctx[7]
					},
					dirty[0] & /*ariaLabelOn*/ 64 && {
						"data-aria-label-on": /*ariaLabelOn*/ ctx[6]
					},
					dirty[0] & /*ariaLabelOff*/ 128 && {
						"data-aria-label-off": /*ariaLabelOff*/ ctx[7]
					},
					dirty[0] & /*ariaDescribedby*/ 1048576 && {
						"aria-describedby": /*ariaDescribedby*/ ctx[20]
					},
					dirty[0] & /*href*/ 256 && { href: /*href*/ ctx[8] },
					dirty[0] & /*actionProp*/ 65536 && get_spread_object(/*actionProp*/ ctx[16]),
					dirty[0] & /*internalAttrs*/ 32768 && get_spread_object(/*internalAttrs*/ ctx[15]),
					dirty[0] & /*$$restProps*/ 16777216 && get_spread_object(/*$$restProps*/ ctx[24])
				])
			: {};

			if (dirty[1] & /*$$scope*/ 2) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[10])) {
				if (switch_instance) {
					group_outros();
					const old_component = switch_instance;

					transition_out(old_component.$$.fragment, 1, 0, () => {
						destroy_component(old_component, 1);
					});

					check_outros();
				}

				if (switch_value) {
					switch_instance = new switch_value(switch_props(ctx));
					/*switch_instance_binding*/ ctx[29](switch_instance);
					switch_instance.$on("click", /*click_handler*/ ctx[30]);
					switch_instance.$on("click", /*click_handler_1*/ ctx[31]);
					create_component(switch_instance.$$.fragment);
					transition_in(switch_instance.$$.fragment, 1);
					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
				} else {
					switch_instance = null;
				}
			} else if (switch_value) {
				switch_instance.$set(switch_instance_changes);
			}
		},
		i: function intro(local) {
			if (current) return;
			if (switch_instance) transition_in(switch_instance.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			if (switch_instance) transition_out(switch_instance.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*switch_instance_binding*/ ctx[29](null);
			if (detaching) detach_dev(switch_instance_anchor);
			if (switch_instance) destroy_component(switch_instance, detaching);
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

const func = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	let actionProp;

	const omit_props_names = [
		"use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","href","action","component","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("IconButton", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());

	let uninitializedValue = () => {
		
	};

	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { ripple = true } = $$props;
	let { color = null } = $$props;
	let { toggle = false } = $$props;
	let { pressed = uninitializedValue } = $$props;
	let { ariaLabelOn = null } = $$props;
	let { ariaLabelOff = null } = $$props;
	let { href = null } = $$props;
	let { action = null } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};
	let internalAttrs = {};
	let context = getContext("SMUI:icon-button:context");
	let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
	let { component = href == null ? Button : A } = $$props;
	setContext("SMUI:icon:context", "icon-button");
	let oldToggle = null;

	onDestroy(() => {
		instance && instance.destroy();
	});

	function hasClass(className) {
		return className in internalClasses
		? internalClasses[className]
		: getElement().classList.contains(className);
	}

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(13, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(13, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === "" || value == null) {
				delete internalStyles[name];
				$$invalidate(14, internalStyles);
			} else {
				$$invalidate(14, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function getAttr(name) {
		return name in internalAttrs
		? internalAttrs[name]
		: getElement().getAttribute(name);
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(15, internalAttrs[name] = value, internalAttrs);
		}
	}

	function handleChange(evtData) {
		$$invalidate(0, pressed = evtData.isOn);
	}

	function getElement() {
		return element.getElement();
	}

	function switch_instance_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(11, element);
		});
	}

	const click_handler = () => instance && instance.handleClick();
	const click_handler_1 = () => context === "top-app-bar:navigation" && dispatch(element, "SMUI:top-app-bar:icon-button:nav");

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(24, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(3, style = $$new_props.style);
		if ("ripple" in $$new_props) $$invalidate(4, ripple = $$new_props.ripple);
		if ("color" in $$new_props) $$invalidate(5, color = $$new_props.color);
		if ("toggle" in $$new_props) $$invalidate(25, toggle = $$new_props.toggle);
		if ("pressed" in $$new_props) $$invalidate(0, pressed = $$new_props.pressed);
		if ("ariaLabelOn" in $$new_props) $$invalidate(6, ariaLabelOn = $$new_props.ariaLabelOn);
		if ("ariaLabelOff" in $$new_props) $$invalidate(7, ariaLabelOff = $$new_props.ariaLabelOff);
		if ("href" in $$new_props) $$invalidate(8, href = $$new_props.href);
		if ("action" in $$new_props) $$invalidate(9, action = $$new_props.action);
		if ("component" in $$new_props) $$invalidate(10, component = $$new_props.component);
		if ("$$scope" in $$new_props) $$invalidate(32, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCIconButtonToggleFoundation,
		onDestroy,
		getContext,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		dispatch,
		Ripple,
		A,
		Button,
		forwardEvents,
		uninitializedValue,
		use,
		className,
		style,
		ripple,
		color,
		toggle,
		pressed,
		ariaLabelOn,
		ariaLabelOff,
		href,
		action,
		element,
		instance,
		internalClasses,
		internalStyles,
		internalAttrs,
		context,
		ariaDescribedby,
		component,
		oldToggle,
		hasClass,
		addClass,
		removeClass,
		addStyle,
		getAttr,
		addAttr,
		handleChange,
		getElement,
		actionProp
	});

	$$self.$inject_state = $$new_props => {
		if ("uninitializedValue" in $$props) $$invalidate(18, uninitializedValue = $$new_props.uninitializedValue);
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(3, style = $$new_props.style);
		if ("ripple" in $$props) $$invalidate(4, ripple = $$new_props.ripple);
		if ("color" in $$props) $$invalidate(5, color = $$new_props.color);
		if ("toggle" in $$props) $$invalidate(25, toggle = $$new_props.toggle);
		if ("pressed" in $$props) $$invalidate(0, pressed = $$new_props.pressed);
		if ("ariaLabelOn" in $$props) $$invalidate(6, ariaLabelOn = $$new_props.ariaLabelOn);
		if ("ariaLabelOff" in $$props) $$invalidate(7, ariaLabelOff = $$new_props.ariaLabelOff);
		if ("href" in $$props) $$invalidate(8, href = $$new_props.href);
		if ("action" in $$props) $$invalidate(9, action = $$new_props.action);
		if ("element" in $$props) $$invalidate(11, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(12, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(13, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(14, internalStyles = $$new_props.internalStyles);
		if ("internalAttrs" in $$props) $$invalidate(15, internalAttrs = $$new_props.internalAttrs);
		if ("context" in $$props) $$invalidate(19, context = $$new_props.context);
		if ("ariaDescribedby" in $$props) $$invalidate(20, ariaDescribedby = $$new_props.ariaDescribedby);
		if ("component" in $$props) $$invalidate(10, component = $$new_props.component);
		if ("oldToggle" in $$props) $$invalidate(27, oldToggle = $$new_props.oldToggle);
		if ("actionProp" in $$props) $$invalidate(16, actionProp = $$new_props.actionProp);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*action*/ 512) {
			$$invalidate(16, actionProp = (() => {
				if (context === "data-table:pagination") {
					switch (action) {
						case "first-page":
							return { "data-first-page": "true" };
						case "prev-page":
							return { "data-prev-page": "true" };
						case "next-page":
							return { "data-next-page": "true" };
						case "last-page":
							return { "data-last-page": "true" };
						default:
							return { "data-action": "true" };
					}
				} else if (context === "dialog:header") {
					return { "data-mdc-dialog-action": action };
				} else {
					return { action };
				}
			})());
		}

		if ($$self.$$.dirty[0] & /*element, toggle, oldToggle, instance*/ 167778304) {
			if (element && getElement() && toggle !== oldToggle) {
				if (toggle && !instance) {
					$$invalidate(12, instance = new MDCIconButtonToggleFoundation({
							addClass,
							hasClass,
							notifyChange: evtData => {
								handleChange(evtData);
								dispatch(getElement(), "MDCIconButtonToggle:change", evtData);
							},
							removeClass,
							getAttr,
							setAttr: addAttr
						}));

					instance.init();
				} else if (!toggle && instance) {
					instance.destroy();
					$$invalidate(12, instance = null);
					$$invalidate(13, internalClasses = {});
					$$invalidate(15, internalAttrs = {});
				}

				$$invalidate(27, oldToggle = toggle);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, pressed*/ 4097) {
			if (instance && instance.isOn() !== pressed) {
				instance.toggle(pressed);
			}
		}
	};

	return [
		pressed,
		use,
		className,
		style,
		ripple,
		color,
		ariaLabelOn,
		ariaLabelOff,
		href,
		action,
		component,
		element,
		instance,
		internalClasses,
		internalStyles,
		internalAttrs,
		actionProp,
		forwardEvents,
		uninitializedValue,
		context,
		ariaDescribedby,
		addClass,
		removeClass,
		addStyle,
		$$restProps,
		toggle,
		getElement,
		oldToggle,
		slots,
		switch_instance_binding,
		click_handler,
		click_handler_1,
		$$scope
	];
}

class IconButton extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1,
			create_fragment$3,
			safe_not_equal,
			{
				use: 1,
				class: 2,
				style: 3,
				ripple: 4,
				color: 5,
				toggle: 25,
				pressed: 0,
				ariaLabelOn: 6,
				ariaLabelOff: 7,
				href: 8,
				action: 9,
				component: 10,
				getElement: 26
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "IconButton",
			options,
			id: create_fragment$3.name
		});
	}

	get use() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get color() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set color(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get toggle() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set toggle(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get pressed() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set pressed(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ariaLabelOn() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ariaLabelOn(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ariaLabelOff() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ariaLabelOff(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get action() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set action(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get component() {
		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set component(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[26];
	}

	set getElement(value) {
		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/snackbar/kitchen/Kitchen.svelte generated by Svelte v3.37.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[11] = list[i];
	return child_ctx;
}

// (1:0) {#if config}
function create_if_block(ctx) {
	let snackbar;
	let current;

	const snackbar_spread_levels = [
		{ labelText: /*config*/ ctx[1].label },
		/*config*/ ctx[1] && /*config*/ ctx[1].props || {},
		prefixFilter(/*$$restProps*/ ctx[3], "snackbar$")
	];

	let snackbar_props = {
		$$slots: { default: [create_default_slot$2] },
		$$scope: { ctx }
	};

	for (let i = 0; i < snackbar_spread_levels.length; i += 1) {
		snackbar_props = assign(snackbar_props, snackbar_spread_levels[i]);
	}

	snackbar = new Snackbar$1({ props: snackbar_props, $$inline: true });
	/*snackbar_binding*/ ctx[10](snackbar);
	snackbar.$on("MDCSnackbar:closed", /*handleClosed*/ ctx[2]);

	const block = {
		c: function create() {
			create_component(snackbar.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(snackbar.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(snackbar, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const snackbar_changes = (dirty & /*config, prefixFilter, $$restProps*/ 10)
			? get_spread_update(snackbar_spread_levels, [
					dirty & /*config*/ 2 && { labelText: /*config*/ ctx[1].label },
					dirty & /*config*/ 2 && get_spread_object(/*config*/ ctx[1] && /*config*/ ctx[1].props || {}),
					dirty & /*prefixFilter, $$restProps*/ 8 && get_spread_object(prefixFilter(/*$$restProps*/ ctx[3], "snackbar$"))
				])
			: {};

			if (dirty & /*$$scope, config, $$restProps*/ 16394) {
				snackbar_changes.$$scope = { dirty, ctx };
			}

			snackbar.$set(snackbar_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(snackbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(snackbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*snackbar_binding*/ ctx[10](null);
			destroy_component(snackbar, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(1:0) {#if config}",
		ctx
	});

	return block;
}

// (10:4) {#if config.actions || config.dismissButton}
function create_if_block_1(ctx) {
	let actions;
	let current;

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_1$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const actions_changes = {};

			if (dirty & /*$$scope, config, $$restProps*/ 16394) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(10:4) {#if config.actions || config.dismissButton}",
		ctx
	});

	return block;
}

// (12:8) {#if config.actions}
function create_if_block_3(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*config*/ ctx[1].actions;
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*prefixFilter, $$restProps, config*/ 10) {
				each_value = /*config*/ ctx[1].actions;
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

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(12:8) {#if config.actions}",
		ctx
	});

	return block;
}

// (14:12) <Button               on:click={(e) => action.onClick && action.onClick(e)}               {...prefixFilter($$restProps, 'action$')}>
function create_default_slot_3$1(ctx) {
	let t_value = /*action*/ ctx[11].text + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*config*/ 2 && t_value !== (t_value = /*action*/ ctx[11].text + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(14:12) <Button               on:click={(e) => action.onClick && action.onClick(e)}               {...prefixFilter($$restProps, 'action$')}>",
		ctx
	});

	return block;
}

// (13:10) {#each config.actions as action}
function create_each_block(ctx) {
	let button;
	let current;
	const button_spread_levels = [prefixFilter(/*$$restProps*/ ctx[3], "action$")];

	function click_handler(...args) {
		return /*click_handler*/ ctx[8](/*action*/ ctx[11], ...args);
	}

	let button_props = {
		$$slots: { default: [create_default_slot_3$1] },
		$$scope: { ctx }
	};

	for (let i = 0; i < button_spread_levels.length; i += 1) {
		button_props = assign(button_props, button_spread_levels[i]);
	}

	button = new Button_1({ props: button_props, $$inline: true });
	button.$on("click", click_handler);

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
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			const button_changes = (dirty & /*prefixFilter, $$restProps*/ 8)
			? get_spread_update(button_spread_levels, [get_spread_object(prefixFilter(/*$$restProps*/ ctx[3], "action$"))])
			: {};

			if (dirty & /*$$scope, config*/ 16386) {
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
		id: create_each_block.name,
		type: "each",
		source: "(13:10) {#each config.actions as action}",
		ctx
	});

	return block;
}

// (20:8) {#if config.dismissButton}
function create_if_block_2(ctx) {
	let iconbutton;
	let current;

	const iconbutton_spread_levels = [
		{
			title: /*config*/ ctx[1].dismissTitle || "Dismiss"
		},
		prefixFilter(/*$$restProps*/ ctx[3], "dismiss$")
	];

	let iconbutton_props = {
		$$slots: { default: [create_default_slot_2$1] },
		$$scope: { ctx }
	};

	for (let i = 0; i < iconbutton_spread_levels.length; i += 1) {
		iconbutton_props = assign(iconbutton_props, iconbutton_spread_levels[i]);
	}

	iconbutton = new IconButton({ props: iconbutton_props, $$inline: true });
	iconbutton.$on("click", /*click_handler_1*/ ctx[9]);

	const block = {
		c: function create() {
			create_component(iconbutton.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(iconbutton.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(iconbutton, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const iconbutton_changes = (dirty & /*config, prefixFilter, $$restProps*/ 10)
			? get_spread_update(iconbutton_spread_levels, [
					dirty & /*config*/ 2 && {
						title: /*config*/ ctx[1].dismissTitle || "Dismiss"
					},
					dirty & /*prefixFilter, $$restProps*/ 8 && get_spread_object(prefixFilter(/*$$restProps*/ ctx[3], "dismiss$"))
				])
			: {};

			if (dirty & /*$$scope, config*/ 16386) {
				iconbutton_changes.$$scope = { dirty, ctx };
			}

			iconbutton.$set(iconbutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(iconbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(iconbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(iconbutton, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(20:8) {#if config.dismissButton}",
		ctx
	});

	return block;
}

// (21:10) <IconButton             on:click={(e) => config.onDismiss && config.onDismiss(e)}             title={config.dismissTitle || 'Dismiss'}             {...prefixFilter($$restProps, 'dismiss$')}             >
function create_default_slot_2$1(ctx) {
	let t_value = (/*config*/ ctx[1].dismissText || "close") + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*config*/ 2 && t_value !== (t_value = (/*config*/ ctx[1].dismissText || "close") + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(21:10) <IconButton             on:click={(e) => config.onDismiss && config.onDismiss(e)}             title={config.dismissTitle || 'Dismiss'}             {...prefixFilter($$restProps, 'dismiss$')}             >",
		ctx
	});

	return block;
}

// (11:6) <Actions>
function create_default_slot_1$2(ctx) {
	let t;
	let if_block1_anchor;
	let current;
	let if_block0 = /*config*/ ctx[1].actions && create_if_block_3(ctx);
	let if_block1 = /*config*/ ctx[1].dismissButton && create_if_block_2(ctx);

	const block = {
		c: function create() {
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block0) if_block0.l(nodes);
			t = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert_dev(target, t, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, if_block1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*config*/ ctx[1].actions) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*config*/ 2) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(t.parentNode, t);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*config*/ ctx[1].dismissButton) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*config*/ 2) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach_dev(t);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$2.name,
		type: "slot",
		source: "(11:6) <Actions>",
		ctx
	});

	return block;
}

// (2:2) <Snackbar     bind:this={element}     on:MDCSnackbar:closed={handleClosed}     labelText={config.label}     {...(config && config.props) || {}}     {...prefixFilter($$restProps, 'snackbar$')}   >
function create_default_slot$2(ctx) {
	let label;
	let t;
	let if_block_anchor;
	let current;
	const label_spread_levels = [prefixFilter(/*$$restProps*/ ctx[3], "label$")];
	let label_props = {};

	for (let i = 0; i < label_spread_levels.length; i += 1) {
		label_props = assign(label_props, label_spread_levels[i]);
	}

	label = new CommonLabel({ props: label_props, $$inline: true });
	let if_block = (/*config*/ ctx[1].actions || /*config*/ ctx[1].dismissButton) && create_if_block_1(ctx);

	const block = {
		c: function create() {
			create_component(label.$$.fragment);
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(label.$$.fragment, nodes);
			t = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(label, target, anchor);
			insert_dev(target, t, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const label_changes = (dirty & /*prefixFilter, $$restProps*/ 8)
			? get_spread_update(label_spread_levels, [get_spread_object(prefixFilter(/*$$restProps*/ ctx[3], "label$"))])
			: {};

			label.$set(label_changes);

			if (/*config*/ ctx[1].actions || /*config*/ ctx[1].dismissButton) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*config*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(label.$$.fragment, local);
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(label.$$.fragment, local);
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(label, detaching);
			if (detaching) detach_dev(t);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(2:2) <Snackbar     bind:this={element}     on:MDCSnackbar:closed={handleClosed}     labelText={config.label}     {...(config && config.props) || {}}     {...prefixFilter($$restProps, 'snackbar$')}   >",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*config*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*config*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*config*/ 2) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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

function instance$2($$self, $$props, $$invalidate) {
	const omit_props_names = ["push","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Kitchen", slots, []);
	let element;
	let snackbars = [];
	let config = null;
	let waiting = false;

	function handleClosed(e) {
		if (config.onClose) {
			config.onClose(e);
		}

		snackbars.splice(0, 1);
		$$invalidate(6, snackbars);
		$$invalidate(1, config = null);
	}

	function push(config) {
		snackbars.push(config);
		$$invalidate(6, snackbars);
	}

	function getElement() {
		return element.getElement();
	}

	const click_handler = (action, e) => action.onClick && action.onClick(e);
	const click_handler_1 = e => config.onDismiss && config.onDismiss(e);

	function snackbar_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(0, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
	};

	$$self.$capture_state = () => ({
		prefixFilter,
		Label: CommonLabel,
		Button: Button_1,
		IconButton,
		Snackbar: Snackbar$1,
		Actions,
		element,
		snackbars,
		config,
		waiting,
		handleClosed,
		push,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("element" in $$props) $$invalidate(0, element = $$new_props.element);
		if ("snackbars" in $$props) $$invalidate(6, snackbars = $$new_props.snackbars);
		if ("config" in $$props) $$invalidate(1, config = $$new_props.config);
		if ("waiting" in $$props) $$invalidate(7, waiting = $$new_props.waiting);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*snackbars, config*/ 66) {
			if (snackbars.length && !config) {
				$$invalidate(1, config = snackbars[0]);
				$$invalidate(7, waiting = true);
			}
		}

		if ($$self.$$.dirty & /*element, waiting*/ 129) {
			if (element && waiting && !element.isOpen()) {
				element.open();
				$$invalidate(7, waiting = false);
			}
		}
	};

	return [
		element,
		config,
		handleClosed,
		$$restProps,
		push,
		getElement,
		snackbars,
		waiting,
		click_handler,
		click_handler_1,
		snackbar_binding
	];
}

class Kitchen extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { push: 4, getElement: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Kitchen",
			options,
			id: create_fragment$2.name
		});
	}

	get push() {
		return this.$$.ctx[4];
	}

	set push(value) {
		throw new Error("<Kitchen>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[5];
	}

	set getElement(value) {
		throw new Error("<Kitchen>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/snackbar/_Kitchen.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/snackbar/_Kitchen.svelte";

// (3:33) <Label>
function create_default_slot_1$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Push a New Snackbar");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Push a New Snackbar");
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
		id: create_default_slot_1$1.name,
		type: "slot",
		source: "(3:33) <Label>",
		ctx
	});

	return block;
}

// (3:0) <Button on:click={pushToKitchen}>
function create_default_slot$1(ctx) {
	let label;
	let current;

	label = new CommonLabel$1({
			props: {
				$$slots: { default: [create_default_slot_1$1] },
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

			if (dirty & /*$$scope*/ 32) {
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
		id: create_default_slot$1.name,
		type: "slot",
		source: "(3:0) <Button on:click={pushToKitchen}>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let kitchen_1;
	let t0;
	let button;
	let t1;
	let pre0;
	let t2;
	let t3;
	let t4;
	let pre1;
	let t5;
	let t6;
	let current;
	let kitchen_1_props = { dismiss$class: "material-icons" };
	kitchen_1 = new Kitchen({ props: kitchen_1_props, $$inline: true });
	/*kitchen_1_binding*/ ctx[4](kitchen_1);

	button = new Button_1$1({
			props: {
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*pushToKitchen*/ ctx[3]);

	const block = {
		c: function create() {
			create_component(kitchen_1.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre0 = element("pre");
			t2 = text("Closed Reason: ");
			t3 = text(/*reason*/ ctx[1]);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Action: ");
			t6 = text(/*action*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(kitchen_1.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre0 = claim_element(nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t2 = claim_text(pre0_nodes, "Closed Reason: ");
			t3 = claim_text(pre0_nodes, /*reason*/ ctx[1]);
			pre0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			pre1 = claim_element(nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Action: ");
			t6 = claim_text(pre1_nodes, /*action*/ ctx[2]);
			pre1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$1, 4, 0, 142);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$1, 5, 0, 192);
		},
		m: function mount(target, anchor) {
			mount_component(kitchen_1, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre0, anchor);
			append_dev(pre0, t2);
			append_dev(pre0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, pre1, anchor);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const kitchen_1_changes = {};
			kitchen_1.$set(kitchen_1_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*reason*/ 2) set_data_dev(t3, /*reason*/ ctx[1]);
			if (!current || dirty & /*action*/ 4) set_data_dev(t6, /*action*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(kitchen_1.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(kitchen_1.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*kitchen_1_binding*/ ctx[4](null);
			destroy_component(kitchen_1, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(pre0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(pre1);
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

let counter = 0;

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Kitchen", slots, []);
	let kitchen;
	let reason = "nothing yet";
	let action = "nothing yet";

	function pushToKitchen() {
		kitchen.push({
			props: { variant: "stacked" },
			label: "This is a snackbar generated by the kitchen. Here's a counter: " + counter++,
			actions: [
				{
					onClick: () => $$invalidate(2, action = "Something"),
					text: "Something"
				},
				{
					onClick: () => $$invalidate(2, action = "Another"),
					text: "Another"
				}
			],
			dismissButton: true,
			onDismiss: () => $$invalidate(2, action = "Dismissed"),
			onClose: e => {
				$$invalidate(1, reason = e.detail.reason);
			}
		});
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Kitchen> was created with unknown prop '${key}'`);
	});

	function kitchen_1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			kitchen = $$value;
			$$invalidate(0, kitchen);
		});
	}

	$$self.$capture_state = () => ({
		counter,
		Kitchen,
		Button: Button_1$1,
		Label: CommonLabel$1,
		kitchen,
		reason,
		action,
		pushToKitchen
	});

	$$self.$inject_state = $$props => {
		if ("kitchen" in $$props) $$invalidate(0, kitchen = $$props.kitchen);
		if ("reason" in $$props) $$invalidate(1, reason = $$props.reason);
		if ("action" in $$props) $$invalidate(2, action = $$props.action);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [kitchen, reason, action, pushToKitchen, kitchen_1_binding];
}

class Kitchen_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Kitchen_1",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/snackbar/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/snackbar/index.svelte";

// (12:2) <Demo component={LeadingWithAction} file="snackbar/_LeadingWithAction.svelte">
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Leading with action");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Leading with action");
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
		source: "(12:2) <Demo component={LeadingWithAction} file=\\\"snackbar/_LeadingWithAction.svelte\\\">",
		ctx
	});

	return block;
}

// (16:2) <Demo component={StackedWithAction} file="snackbar/_StackedWithAction.svelte">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Stacked with action");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Stacked with action");
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
		source: "(16:2) <Demo component={StackedWithAction} file=\\\"snackbar/_StackedWithAction.svelte\\\">",
		ctx
	});

	return block;
}

// (20:2) <Demo component={DynamicText} file="snackbar/_DynamicText.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Using dynamic text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Using dynamic text");
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
		source: "(20:2) <Demo component={DynamicText} file=\\\"snackbar/_DynamicText.svelte\\\">",
		ctx
	});

	return block;
}

// (24:2) <Demo component={Kitchen} file="snackbar/_Kitchen.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("The \"Kitchen\" Snackbar generator");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "The \"Kitchen\" Snackbar generator");
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
		source: "(24:2) <Demo component={Kitchen} file=\\\"snackbar/_Kitchen.svelte\\\">",
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
				file: "snackbar/_Simple.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: LeadingWithAction,
				file: "snackbar/_LeadingWithAction.svelte",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: StackedWithAction,
				file: "snackbar/_StackedWithAction.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: DynamicText,
				file: "snackbar/_DynamicText.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo4 = new Demo({
			props: {
				component: Kitchen_1,
				file: "snackbar/_Kitchen.svelte",
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
			t1 = text("Snackbars");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/snackbar");
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1f44djc\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Snackbars");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/snackbar");
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
			document.title = "Snackbars - SMUI";
			add_location(h2, file, 5, 2, 76);
			attr_dev(pre, "class", "demo-spaced");
			add_location(pre, file, 7, 2, 98);
			add_location(section, file, 4, 0, 64);
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
	validate_slots("Snackbar", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Snackbar> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Simple,
		LeadingWithAction,
		StackedWithAction,
		DynamicText,
		Kitchen: Kitchen_1
	});

	return [];
}

class Snackbar extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Snackbar",
			options,
			id: create_fragment.name
		});
	}
}

export default Snackbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTFiMzYzNGQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL3NuYWNrYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc25hY2tiYXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zbmFja2Jhci91dGlsLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NuYWNrYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NuYWNrYmFyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9ldmVudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHNCdWlsZGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9jbGFzc01hcC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NuYWNrYmFyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vQ2xhc3NBZGRlci5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9kaXNwYXRjaC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NuYWNrYmFyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZXhjbHVkZS5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NuYWNrYmFyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vcHJlZml4RmlsdGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvU25hY2tiYXIuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9EaXYuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvQWN0aW9ucy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NuYWNrYmFyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vU3Bhbi5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0NvbW1vbkxhYmVsLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9zbmFja2Jhci9fU2ltcGxlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9zbmFja2Jhci9fTGVhZGluZ1dpdGhBY3Rpb24uc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3NuYWNrYmFyL19TdGFja2VkV2l0aEFjdGlvbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vc25hY2tiYXIvX0R5bmFtaWNUZXh0LnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL3NuYWNrYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BzbXVpL3JpcHBsZS9SaXBwbGUuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0Euc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9CdXR0b24uc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BzbXVpL2J1dHRvbi9CdXR0b24uc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvc25hY2tiYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9pY29uLWJ1dHRvbi9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2ljb24tYnV0dG9uL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9ub2RlX21vZHVsZXMvQHNtdWkvaWNvbi1idXR0b24vSWNvbkJ1dHRvbi5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9zbmFja2Jhci9raXRjaGVuL0tpdGNoZW4uc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3NuYWNrYmFyL19LaXRjaGVuLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9zbmFja2Jhci9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDTE9TSU5HOiAnbWRjLXNuYWNrYmFyLS1jbG9zaW5nJyxcbiAgICBPUEVOOiAnbWRjLXNuYWNrYmFyLS1vcGVuJyxcbiAgICBPUEVOSU5HOiAnbWRjLXNuYWNrYmFyLS1vcGVuaW5nJyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBQ1RJT05fU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19hY3Rpb24nLFxuICAgIEFSSUFfTElWRV9MQUJFTF9URVhUX0FUVFI6ICdkYXRhLW1kYy1zbmFja2Jhci1sYWJlbC10ZXh0JyxcbiAgICBDTE9TRURfRVZFTlQ6ICdNRENTbmFja2JhcjpjbG9zZWQnLFxuICAgIENMT1NJTkdfRVZFTlQ6ICdNRENTbmFja2JhcjpjbG9zaW5nJyxcbiAgICBESVNNSVNTX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fZGlzbWlzcycsXG4gICAgTEFCRUxfU0VMRUNUT1I6ICcubWRjLXNuYWNrYmFyX19sYWJlbCcsXG4gICAgT1BFTkVEX0VWRU5UOiAnTURDU25hY2tiYXI6b3BlbmVkJyxcbiAgICBPUEVOSU5HX0VWRU5UOiAnTURDU25hY2tiYXI6b3BlbmluZycsXG4gICAgUkVBU09OX0FDVElPTjogJ2FjdGlvbicsXG4gICAgUkVBU09OX0RJU01JU1M6ICdkaXNtaXNzJyxcbiAgICBTVVJGQUNFX1NFTEVDVE9SOiAnLm1kYy1zbmFja2Jhcl9fc3VyZmFjZScsXG59O1xudmFyIG51bWJlcnMgPSB7XG4gICAgREVGQVVMVF9BVVRPX0RJU01JU1NfVElNRU9VVF9NUzogNTAwMCxcbiAgICBJTkRFVEVSTUlOQVRFOiAtMSxcbiAgICBNQVhfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM6IDEwMDAwLFxuICAgIE1JTl9BVVRPX0RJU01JU1NfVElNRU9VVF9NUzogNDAwMCxcbiAgICAvLyBUaGVzZSB2YXJpYWJsZXMgbmVlZCB0byBiZSBrZXB0IGluIHN5bmMgd2l0aCB0aGUgdmFsdWVzIGluIF92YXJpYWJsZXMuc2Nzcy5cbiAgICBTTkFDS0JBUl9BTklNQVRJT05fQ0xPU0VfVElNRV9NUzogNzUsXG4gICAgU05BQ0tCQVJfQU5JTUFUSU9OX09QRU5fVElNRV9NUzogMTUwLFxuICAgIC8qKlxuICAgICAqIE51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gd2FpdCBiZXR3ZWVuIHRlbXBvcmFyaWx5IGNsZWFyaW5nIHRoZSBsYWJlbCB0ZXh0XG4gICAgICogaW4gdGhlIERPTSBhbmQgc3Vic2VxdWVudGx5IHJlc3RvcmluZyBpdC4gVGhpcyBpcyBuZWNlc3NhcnkgdG8gZm9yY2UgSUUgMTFcbiAgICAgKiB0byBwaWNrIHVwIHRoZSBgYXJpYS1saXZlYCBjb250ZW50IGNoYW5nZSBhbmQgYW5ub3VuY2UgaXQgdG8gdGhlIHVzZXIuXG4gICAgICovXG4gICAgQVJJQV9MSVZFX0RFTEFZX01TOiAxMDAwLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgQVJJQV9MSVZFX0RFTEFZX01TID0gbnVtYmVycy5BUklBX0xJVkVfREVMQVlfTVM7XG52YXIgQVJJQV9MSVZFX0xBQkVMX1RFWFRfQVRUUiA9IHN0cmluZ3MuQVJJQV9MSVZFX0xBQkVMX1RFWFRfQVRUUjtcbmZ1bmN0aW9uIGFubm91bmNlKGFyaWFFbCwgbGFiZWxFbCkge1xuICAgIGlmIChsYWJlbEVsID09PSB2b2lkIDApIHsgbGFiZWxFbCA9IGFyaWFFbDsgfVxuICAgIHZhciBwcmlvcml0eSA9IGFyaWFFbC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScpO1xuICAgIC8vIFRyaW0gdGV4dCB0byBpZ25vcmUgYCZuYnNwO2AgKHNlZSBiZWxvdykuXG4gICAgLy8gdGV4dENvbnRlbnQgaXMgb25seSBudWxsIGlmIHRoZSBub2RlIGlzIGEgZG9jdW1lbnQsIERPQ1RZUEUsIG9yIG5vdGF0aW9uLlxuICAgIHZhciBsYWJlbFRleHQgPSBsYWJlbEVsLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICBpZiAoIWxhYmVsVGV4dCB8fCAhcHJpb3JpdHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBUZW1wb3JhcmlseSBkaXNhYmxlIGBhcmlhLWxpdmVgIHRvIHByZXZlbnQgSkFXUytGaXJlZm94IGZyb20gYW5ub3VuY2luZyB0aGUgbWVzc2FnZSB0d2ljZS5cbiAgICBhcmlhRWwuc2V0QXR0cmlidXRlKCdhcmlhLWxpdmUnLCAnb2ZmJyk7XG4gICAgLy8gVGVtcG9yYXJpbHkgY2xlYXIgYHRleHRDb250ZW50YCB0byBmb3JjZSBhIERPTSBtdXRhdGlvbiBldmVudCB0aGF0IHdpbGwgYmUgZGV0ZWN0ZWQgYnkgc2NyZWVuIHJlYWRlcnMuXG4gICAgLy8gYGFyaWEtbGl2ZWAgZWxlbWVudHMgYXJlIG9ubHkgYW5ub3VuY2VkIHdoZW4gdGhlIGVsZW1lbnQncyBgdGV4dENvbnRlbnRgICpjaGFuZ2VzKiwgc28gc25hY2tiYXJzXG4gICAgLy8gc2VudCB0byB0aGUgYnJvd3NlciBpbiB0aGUgaW5pdGlhbCBIVE1MIHJlc3BvbnNlIHdvbid0IGJlIHJlYWQgdW5sZXNzIHdlIGNsZWFyIHRoZSBlbGVtZW50J3MgYHRleHRDb250ZW50YCBmaXJzdC5cbiAgICAvLyBTaW1pbGFybHksIGRpc3BsYXlpbmcgdGhlIHNhbWUgc25hY2tiYXIgbWVzc2FnZSB0d2ljZSBpbiBhIHJvdyBkb2Vzbid0IHRyaWdnZXIgYSBET00gbXV0YXRpb24gZXZlbnQsXG4gICAgLy8gc28gc2NyZWVuIHJlYWRlcnMgd29uJ3QgYW5ub3VuY2UgdGhlIHNlY29uZCBtZXNzYWdlIHVubGVzcyB3ZSBmaXJzdCBjbGVhciBgdGV4dENvbnRlbnRgLlxuICAgIC8vXG4gICAgLy8gV2UgaGF2ZSB0byBjbGVhciB0aGUgbGFiZWwgdGV4dCB0d28gZGlmZmVyZW50IHdheXMgdG8gbWFrZSBpdCB3b3JrIGluIGFsbCBicm93c2VycyBhbmQgc2NyZWVuIHJlYWRlcnM6XG4gICAgLy9cbiAgICAvLyAgIDEuIGB0ZXh0Q29udGVudCA9ICcnYCBpcyByZXF1aXJlZCBmb3IgSUUxMSArIEpBV1NcbiAgICAvLyAgIDIuIGBpbm5lckhUTUwgPSAnJm5ic3A7J2AgaXMgcmVxdWlyZWQgZm9yIENocm9tZSArIEpBV1MgYW5kIE5WREFcbiAgICAvL1xuICAgIC8vIEFsbCBvdGhlciBicm93c2VyL3NjcmVlbiByZWFkZXIgY29tYmluYXRpb25zIHN1cHBvcnQgYm90aCBtZXRob2RzLlxuICAgIC8vXG4gICAgLy8gVGhlIHdyYXBwZXIgYDxzcGFuPmAgdmlzdWFsbHkgaGlkZXMgdGhlIHNwYWNlIGNoYXJhY3RlciBzbyB0aGF0IGl0IGRvZXNuJ3QgY2F1c2UgamFuayB3aGVuIGFkZGVkL3JlbW92ZWQuXG4gICAgLy8gTi5CLjogU2V0dGluZyBgcG9zaXRpb246IGFic29sdXRlYCwgYG9wYWNpdHk6IDBgLCBvciBgaGVpZ2h0OiAwYCBwcmV2ZW50cyBDaHJvbWUgZnJvbSBkZXRlY3RpbmcgdGhlIERPTSBjaGFuZ2UuXG4gICAgLy9cbiAgICAvLyBUaGlzIHRlY2huaXF1ZSBoYXMgYmVlbiB0ZXN0ZWQgaW46XG4gICAgLy9cbiAgICAvLyAgICogSkFXUyAyMDE5OlxuICAgIC8vICAgICAgIC0gQ2hyb21lIDcwXG4gICAgLy8gICAgICAgLSBGaXJlZm94IDYwIChFU1IpXG4gICAgLy8gICAgICAgLSBJRSAxMVxuICAgIC8vICAgKiBOVkRBIDIwMTg6XG4gICAgLy8gICAgICAgLSBDaHJvbWUgNzBcbiAgICAvLyAgICAgICAtIEZpcmVmb3ggNjAgKEVTUilcbiAgICAvLyAgICAgICAtIElFIDExXG4gICAgLy8gICAqIENocm9tZVZveCA1M1xuICAgIGxhYmVsRWwudGV4dENvbnRlbnQgPSAnJztcbiAgICBsYWJlbEVsLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgd2lkdGg6IDA7IGhlaWdodDogMXB4O1wiPiZuYnNwOzwvc3Bhbj4nO1xuICAgIC8vIFByZXZlbnQgdmlzdWFsIGphbmsgYnkgdGVtcG9yYXJpbHkgZGlzcGxheWluZyB0aGUgbGFiZWwgdGV4dCBpbiB0aGUgOjpiZWZvcmUgcHNldWRvLWVsZW1lbnQuXG4gICAgLy8gQ1NTIGdlbmVyYXRlZCBjb250ZW50IGlzIG5vcm1hbGx5IGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVyc1xuICAgIC8vIChleGNlcHQgaW4gSUUgMTE7IHNlZSBodHRwczovL3RpbmsudWsvYWNjZXNzaWJpbGl0eS1zdXBwb3J0LWZvci1jc3MtZ2VuZXJhdGVkLWNvbnRlbnQvKTtcbiAgICAvLyBob3dldmVyLCBgYXJpYS1saXZlYCBpcyB0dXJuZWQgb2ZmLCBzbyB0aGlzIERPTSB1cGRhdGUgd2lsbCBiZSBpZ25vcmVkIGJ5IHNjcmVlbiByZWFkZXJzLlxuICAgIGxhYmVsRWwuc2V0QXR0cmlidXRlKEFSSUFfTElWRV9MQUJFTF9URVhUX0FUVFIsIGxhYmVsVGV4dCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEFsbG93IHNjcmVlbiByZWFkZXJzIHRvIGFubm91bmNlIGNoYW5nZXMgdG8gdGhlIERPTSBhZ2Fpbi5cbiAgICAgICAgYXJpYUVsLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcHJpb3JpdHkpO1xuICAgICAgICAvLyBSZW1vdmUgdGhlIG1lc3NhZ2UgZnJvbSB0aGUgOjpiZWZvcmUgcHNldWRvLWVsZW1lbnQuXG4gICAgICAgIGxhYmVsRWwucmVtb3ZlQXR0cmlidXRlKEFSSUFfTElWRV9MQUJFTF9URVhUX0FUVFIpO1xuICAgICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBsYWJlbCB0ZXh0LCB3aGljaCB3aWxsIGJlIGFubm91bmNlZCBieSBzY3JlZW4gcmVhZGVycy5cbiAgICAgICAgbGFiZWxFbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICB9LCBBUklBX0xJVkVfREVMQVlfTVMpO1xufVxuZXhwb3J0IHsgYW5ub3VuY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLyoqXG4gKiBVc2VkIHRvIGNvbXB1dGUgdGhlIGVzdGltYXRlZCBzY3JvbGwgd2lkdGggb2YgZWxlbWVudHMuIFdoZW4gYW4gZWxlbWVudCBpc1xuICogaGlkZGVuIGR1ZSB0byBkaXNwbGF5OiBub25lOyBiZWluZyBhcHBsaWVkIHRvIGEgcGFyZW50IGVsZW1lbnQsIHRoZSB3aWR0aCBpc1xuICogcmV0dXJuZWQgYXMgMC4gSG93ZXZlciwgdGhlIGVsZW1lbnQgd2lsbCBoYXZlIGEgdHJ1ZSB3aWR0aCBvbmNlIG5vIGxvbmdlclxuICogaW5zaWRlIGEgZGlzcGxheTogbm9uZSBjb250ZXh0LiBUaGlzIG1ldGhvZCBjb21wdXRlcyBhbiBlc3RpbWF0ZWQgd2lkdGggd2hlblxuICogdGhlIGVsZW1lbnQgaXMgaGlkZGVuIG9yIHJldHVybnMgdGhlIHRydWUgd2lkdGggd2hlbiB0aGUgZWxlbWVudCBpcyB2aXNibGUuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdGhlIGVsZW1lbnQgd2hvc2Ugd2lkdGggdG8gZXN0aW1hdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlU2Nyb2xsV2lkdGgoZWxlbWVudCkge1xuICAgIC8vIENoZWNrIHRoZSBvZmZzZXRQYXJlbnQuIElmIHRoZSBlbGVtZW50IGluaGVyaXRzIGRpc3BsYXk6IG5vbmUgZnJvbSBhbnlcbiAgICAvLyBwYXJlbnQsIHRoZSBvZmZzZXRQYXJlbnQgcHJvcGVydHkgd2lsbCBiZSBudWxsIChzZWVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvb2Zmc2V0UGFyZW50KS5cbiAgICAvLyBUaGlzIGNoZWNrIGVuc3VyZXMgd2Ugb25seSBjbG9uZSB0aGUgbm9kZSB3aGVuIG5lY2Vzc2FyeS5cbiAgICB2YXIgaHRtbEVsID0gZWxlbWVudDtcbiAgICBpZiAoaHRtbEVsLm9mZnNldFBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gaHRtbEVsLnNjcm9sbFdpZHRoO1xuICAgIH1cbiAgICB2YXIgY2xvbmUgPSBodG1sRWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNsb25lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgIGNsb25lLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC05OTk5cHgsIC05OTk5cHgpJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB2YXIgc2Nyb2xsV2lkdGggPSBjbG9uZS5zY3JvbGxXaWR0aDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgIHJldHVybiBzY3JvbGxXaWR0aDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcywgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBPUEVOSU5HID0gY3NzQ2xhc3Nlcy5PUEVOSU5HLCBPUEVOID0gY3NzQ2xhc3Nlcy5PUEVOLCBDTE9TSU5HID0gY3NzQ2xhc3Nlcy5DTE9TSU5HO1xudmFyIFJFQVNPTl9BQ1RJT04gPSBzdHJpbmdzLlJFQVNPTl9BQ1RJT04sIFJFQVNPTl9ESVNNSVNTID0gc3RyaW5ncy5SRUFTT05fRElTTUlTUztcbnZhciBNRENTbmFja2JhckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1NuYWNrYmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENTbmFja2JhckZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDU25hY2tiYXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzT3Blbl8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuYXV0b0Rpc21pc3NUaW1lcl8gPSAwO1xuICAgICAgICBfdGhpcy5hdXRvRGlzbWlzc1RpbWVvdXRNc18gPSBudW1iZXJzLkRFRkFVTFRfQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM7XG4gICAgICAgIF90aGlzLmNsb3NlT25Fc2NhcGVfID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU25hY2tiYXJGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1NuYWNrYmFyRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTbmFja2JhckZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU25hY2tiYXJGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYW5ub3VuY2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsZWFyQXV0b0Rpc21pc3NUaW1lcl8oKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IDA7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE9QRU5JTkcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoT1BFTik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhDTE9TSU5HKTtcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhckF1dG9EaXNtaXNzVGltZXJfKCk7XG4gICAgICAgIHRoaXMuaXNPcGVuXyA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlPcGVuaW5nKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhDTE9TSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKE9QRU5JTkcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYW5ub3VuY2UoKTtcbiAgICAgICAgLy8gV2FpdCBhIGZyYW1lIG9uY2UgZGlzcGxheSBpcyBubyBsb25nZXIgXCJub25lXCIsIHRvIGVzdGFibGlzaCBiYXNpcyBmb3IgYW5pbWF0aW9uXG4gICAgICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lXyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKE9QRU4pO1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRpbWVvdXRNcyA9IF90aGlzLmdldFRpbWVvdXRNcygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kXygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIubm90aWZ5T3BlbmVkKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRNcyAhPT0gbnVtYmVycy5JTkRFVEVSTUlOQVRFKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmF1dG9EaXNtaXNzVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZShSRUFTT05fRElTTUlTUyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRpbWVvdXRNcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgbnVtYmVycy5TTkFDS0JBUl9BTklNQVRJT05fT1BFTl9USU1FX01TKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gcmVhc29uIFdoeSB0aGUgc25hY2tiYXIgd2FzIGNsb3NlZC4gVmFsdWUgd2lsbCBiZSBwYXNzZWQgdG8gQ0xPU0lOR19FVkVOVCBhbmQgQ0xPU0VEX0VWRU5UIHZpYSB0aGVcbiAgICAgKiAgICAgYGV2ZW50LmRldGFpbC5yZWFzb25gIHByb3BlcnR5LiBTdGFuZGFyZCB2YWx1ZXMgYXJlIFJFQVNPTl9BQ1RJT04gYW5kIFJFQVNPTl9ESVNNSVNTLCBidXQgY3VzdG9tXG4gICAgICogICAgIGNsaWVudC1zcGVjaWZpYyB2YWx1ZXMgbWF5IGFsc28gYmUgdXNlZCBpZiBkZXNpcmVkLlxuICAgICAqL1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChyZWFzb24gPT09IHZvaWQgMCkgeyByZWFzb24gPSAnJzsgfVxuICAgICAgICBpZiAoIXRoaXMuaXNPcGVuXykge1xuICAgICAgICAgICAgLy8gQXZvaWQgcmVkdW5kYW50IGNsb3NlIGNhbGxzIChhbmQgZXZlbnRzKSwgZS5nLiByZXBlYXRlZCBpbnRlcmFjdGlvbnMgYXMgdGhlIHNuYWNrYmFyIGlzIGFuaW1hdGluZyBjbG9zZWRcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lXyk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWVfID0gMDtcbiAgICAgICAgdGhpcy5jbGVhckF1dG9EaXNtaXNzVGltZXJfKCk7XG4gICAgICAgIHRoaXMuaXNPcGVuXyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXIubm90aWZ5Q2xvc2luZyhyZWFzb24pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLk9QRU5JTkcpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcl8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmRfKCk7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLm5vdGlmeUNsb3NlZChyZWFzb24pO1xuICAgICAgICB9LCBudW1iZXJzLlNOQUNLQkFSX0FOSU1BVElPTl9DTE9TRV9USU1FX01TKTtcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc09wZW5fO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRUaW1lb3V0TXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dG9EaXNtaXNzVGltZW91dE1zXztcbiAgICB9O1xuICAgIE1EQ1NuYWNrYmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VGltZW91dE1zID0gZnVuY3Rpb24gKHRpbWVvdXRNcykge1xuICAgICAgICAvLyBVc2Ugc2hvcnRlciB2YXJpYWJsZSBuYW1lcyB0byBtYWtlIHRoZSBjb2RlIG1vcmUgcmVhZGFibGVcbiAgICAgICAgdmFyIG1pblZhbHVlID0gbnVtYmVycy5NSU5fQVVUT19ESVNNSVNTX1RJTUVPVVRfTVM7XG4gICAgICAgIHZhciBtYXhWYWx1ZSA9IG51bWJlcnMuTUFYX0FVVE9fRElTTUlTU19USU1FT1VUX01TO1xuICAgICAgICB2YXIgaW5kZXRlcm1pbmF0ZVZhbHVlID0gbnVtYmVycy5JTkRFVEVSTUlOQVRFO1xuICAgICAgICBpZiAodGltZW91dE1zID09PSBudW1iZXJzLklOREVURVJNSU5BVEUgfHwgKHRpbWVvdXRNcyA8PSBtYXhWYWx1ZSAmJiB0aW1lb3V0TXMgPj0gbWluVmFsdWUpKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9EaXNtaXNzVGltZW91dE1zXyA9IHRpbWVvdXRNcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlxcbiAgICAgICAgdGltZW91dE1zIG11c3QgYmUgYW4gaW50ZWdlciBpbiB0aGUgcmFuZ2UgXCIgKyBtaW5WYWx1ZSArIFwiXFx1MjAxM1wiICsgbWF4VmFsdWUgKyBcIlxcbiAgICAgICAgKG9yIFwiICsgaW5kZXRlcm1pbmF0ZVZhbHVlICsgXCIgdG8gZGlzYWJsZSksIGJ1dCBnb3QgJ1wiICsgdGltZW91dE1zICsgXCInXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLmdldENsb3NlT25Fc2NhcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsb3NlT25Fc2NhcGVfO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDbG9zZU9uRXNjYXBlID0gZnVuY3Rpb24gKGNsb3NlT25Fc2NhcGUpIHtcbiAgICAgICAgdGhpcy5jbG9zZU9uRXNjYXBlXyA9IGNsb3NlT25Fc2NhcGU7XG4gICAgfTtcbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleURvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc0VzY2FwZUtleSA9IGV2dC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2dC5rZXlDb2RlID09PSAyNztcbiAgICAgICAgaWYgKGlzRXNjYXBlS2V5ICYmIHRoaXMuZ2V0Q2xvc2VPbkVzY2FwZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKFJFQVNPTl9ESVNNSVNTKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVBY3Rpb25CdXR0b25DbGljayA9IGZ1bmN0aW9uIChfZXZ0KSB7XG4gICAgICAgIHRoaXMuY2xvc2UoUkVBU09OX0FDVElPTik7XG4gICAgfTtcbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUFjdGlvbkljb25DbGljayA9IGZ1bmN0aW9uIChfZXZ0KSB7XG4gICAgICAgIHRoaXMuY2xvc2UoUkVBU09OX0RJU01JU1MpO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jbGVhckF1dG9EaXNtaXNzVGltZXJfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hdXRvRGlzbWlzc1RpbWVyXyk7XG4gICAgICAgIHRoaXMuYXV0b0Rpc21pc3NUaW1lcl8gPSAwO1xuICAgIH07XG4gICAgTURDU25hY2tiYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVBbmltYXRpb25UaW1lckVuZF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUnVucyB0aGUgZ2l2ZW4gbG9naWMgb24gdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lLCB1c2luZyBzZXRUaW1lb3V0IHRvIGZhY3RvciBpbiBGaXJlZm94IHJlZmxvdyBiZWhhdmlvci5cbiAgICAgKi9cbiAgICBNRENTbmFja2JhckZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bk5leHRBbmltYXRpb25GcmFtZV8gPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZV8pO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25GcmFtZV8gPSAwO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLmFuaW1hdGlvblRpbWVyXyk7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lcl8gPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCAwKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDU25hY2tiYXJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTbmFja2JhckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENTbmFja2JhckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopID9cbiAgICAgICAgeyBwYXNzaXZlOiB0cnVlIH0gOlxuICAgICAgICBmYWxzZTtcbn1cbmZ1bmN0aW9uIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgLy8gU2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXJcbiAgICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBicm93c2VyXG4gICAgICAgICAgICAvLyBhdHRlbXB0cyB0byBhY2Nlc3MgdGhlIHBhc3NpdmUgcHJvcGVydHkuXG4gICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiaW1wb3J0IHtcbiAgYnViYmxlLFxuICBsaXN0ZW4sXG4gIHByZXZlbnRfZGVmYXVsdCxcbiAgc3RvcF9wcm9wYWdhdGlvbixcbn0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIERPTSBldmVudHMuXG5jb25zdCBvbGRNb2RpZmllclJlZ2V4ID0gL15bYS16XSsoPzo6KD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIG90aGVyIGV2ZW50cy5cbmNvbnN0IG5ld01vZGlmaWVyUmVnZXggPSAvXlteJF0rKD86XFwkKD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY29tcG9uZW50KSB7XG4gIC8vIFRoaXMgaXMgb3VyIHBzZXVkbyAkb24gZnVuY3Rpb24uIEl0IGlzIGRlZmluZWQgb24gY29tcG9uZW50IG1vdW50LlxuICBsZXQgJG9uO1xuICAvLyBUaGlzIGlzIGEgbGlzdCBvZiBldmVudHMgYm91bmQgYmVmb3JlIG1vdW50LlxuICBsZXQgZXZlbnRzID0gW107XG4gIC8vIFRoaXMgaXMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCAkb24gZnVuY3Rpb24uXG4gIGNvbnN0IGNvbXBvbmVudE9uID0gY29tcG9uZW50LiRvbjtcblxuICAvLyBBbmQgd2Ugb3ZlcnJpZGUgdGhlICRvbiBmdW5jdGlvbiB0byBmb3J3YXJkIGFsbCBib3VuZCBldmVudHMuXG4gIGNvbXBvbmVudC4kb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICBsZXQgZGVzdHJ1Y3RvciA9ICgpID0+IHt9O1xuICAgIGlmICgkb24pIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgIGRlc3RydWN0b3IgPSAkb24oZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgYmVmb3JlIG1vdW50IGJ5IFN2ZWx0ZS5cbiAgICAgIGV2ZW50cy5wdXNoKFtldmVudFR5cGUsIGNhbGxiYWNrXSk7XG4gICAgfVxuICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuXG4gICAgaWYgKG9sZE1vZGlmaWVyTWF0Y2ggJiYgY29uc29sZSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnRXZlbnQgbW9kaWZpZXJzIGluIFNNVUkgbm93IHVzZSBcIiRcIiBpbnN0ZWFkIG9mIFwiOlwiLCBzbyB0aGF0IGFsbCBldmVudHMgY2FuIGJlIGJvdW5kIHdpdGggbW9kaWZpZXJzLiBQbGVhc2UgdXBkYXRlIHlvdXIgZXZlbnQgYmluZGluZzogJyxcbiAgICAgICAgZXZlbnRUeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAvLyBSZW1vdmUgbW9kaWZpZXJzIGZyb20gdGhlIHJlYWwgZXZlbnQuXG4gICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICRvbiBmdW5jdGlvbi5cbiAgICBjb25zdCBjb21wb25lbnREZXN0cnVjdG9yID0gY29tcG9uZW50T24uY2FsbChcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGV2ZW50VHlwZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgZGVzdHJ1Y3RvcigpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudERlc3RydWN0b3IoLi4uYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGUpIHtcbiAgICAvLyBJbnRlcm5hbGx5IGJ1YmJsZSB0aGUgZXZlbnQgdXAgZnJvbSBTdmVsdGUgY29tcG9uZW50cy5cbiAgICBidWJibGUoY29tcG9uZW50LCBlKTtcbiAgfVxuXG4gIHJldHVybiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlc3RydWN0b3JzID0gW107XG4gICAgY29uc3QgZm9yd2FyZERlc3RydWN0b3JzID0ge307XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciBmb3J3YXJkaW5nIGFsbCBib3VuZCBldmVudHMuXG4gICAgJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICAgIGxldCBoYW5kbGVyID0gY2FsbGJhY2s7XG4gICAgICAvLyBET00gYWRkRXZlbnRMaXN0ZW5lciBvcHRpb25zIGFyZ3VtZW50LlxuICAgICAgbGV0IG9wdGlvbnMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcbiAgICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBldmVudCBtb2RpZmllcnMuXG4gICAgICAgIC8vIFN1cHBvcnRlZCBtb2RpZmllcnM6XG4gICAgICAgIC8vIC0gcHJldmVudERlZmF1bHRcbiAgICAgICAgLy8gLSBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgLy8gLSBwYXNzaXZlXG4gICAgICAgIC8vIC0gbm9ucGFzc2l2ZVxuICAgICAgICAvLyAtIGNhcHR1cmVcbiAgICAgICAgLy8gLSBvbmNlXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhwYXJ0cy5zbGljZSgxKS5tYXAoKG1vZCkgPT4gW21vZCwgdHJ1ZV0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9ucGFzc2l2ZSkge1xuICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLm5vbnBhc3NpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBoYW5kbGVyID0gcHJldmVudF9kZWZhdWx0KGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wX3Byb3BhZ2F0aW9uKGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBldmVudCBkaXJlY3RseSwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICAgIGNvbnN0IG9mZiA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGVzdHJ1Y3RvciA9ICgpID0+IHtcbiAgICAgICAgb2ZmKCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRlc3RydWN0b3JzLmluZGV4T2YoZGVzdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGRlc3RydWN0b3JzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkZXN0cnVjdG9ycy5wdXNoKGRlc3RydWN0b3IpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBldmVudCBmcm9tIFN2ZWx0ZS5cbiAgICAgIGlmICghZXZlbnRUeXBlIGluIGZvcndhcmREZXN0cnVjdG9ycykge1xuICAgICAgICBmb3J3YXJkRGVzdHJ1Y3RvcnNbZXZlbnRUeXBlXSA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGZvcndhcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzdHJ1Y3RvcjtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpc3RlbiB0byBhbGwgdGhlIGV2ZW50cyBhZGRlZCBiZWZvcmUgbW91bnQuXG4gICAgICAkb24oZXZlbnRzW2ldWzBdLCBldmVudHNbaV1bMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RydWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnNbaV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgZm9yd2FyZGVycy5cbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoZm9yd2FyZERlc3RydWN0b3JzKSkge1xuICAgICAgICAgIGVudHJ5WzFdKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGFzc01hcChjbGFzc09iaikge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmopXG4gICAgLmZpbHRlcigoW25hbWUsIHZhbHVlXSkgPT4gbmFtZSAhPT0gJycgJiYgdmFsdWUpXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKVxuICAgIC5qb2luKCcgJyk7XG59XG4iLCI8c3ZlbHRlOmNvbXBvbmVudFxuICB0aGlzPXtjb21wb25lbnR9XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlPXtbZm9yd2FyZEV2ZW50cywgLi4udXNlXX1cbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICBbc211aUNsYXNzXTogdHJ1ZSxcbiAgICAuLi5zbXVpQ2xhc3NNYXAsXG4gIH0pfVxuICB7Li4ucHJvcHN9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3N2ZWx0ZTpjb21wb25lbnRcbj5cblxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGV4cG9ydCBjb25zdCBpbnRlcm5hbHMgPSB7XG4gICAgY29tcG9uZW50OiBudWxsLFxuICAgIGNsYXNzOiAnJyxcbiAgICAvLyBUaGUgY2xhc3MgbWFwIG1hcHMgY2xhc3NlcyB0byBjb250ZXh0cy4gVGhlIGNvbnRleHRcbiAgICAvLyBzaG91bGQgcmVzb2x2ZSB0byBhIFN2ZWx0ZSBzdG9yZSwgYW5kIHRoZSBjbGFzc1xuICAgIC8vIHdpbGwgYmUgYWRkZWQgaWYgdGhlIFN2ZWx0ZSBzdG9yZSdzIHZhbHVlIGlzIHRydWUuXG4gICAgY2xhc3NNYXA6IHt9LFxuICAgIGNvbnRleHRzOiB7fSxcbiAgICBwcm9wczoge30sXG4gIH07XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25EZXN0cm95LCBnZXRDb250ZXh0LCBzZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIgfSBmcm9tICcuL2ZvcndhcmRFdmVudHNCdWlsZGVyLmpzJztcbiAgaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tICcuL2NsYXNzTWFwLmpzJztcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuXG4gIGxldCBlbGVtZW50O1xuICBjb25zdCBzbXVpQ2xhc3MgPSBpbnRlcm5hbHMuY2xhc3M7XG4gIGNvbnN0IHNtdWlDbGFzc01hcCA9IHt9O1xuICBjb25zdCBzbXVpQ2xhc3NVbnN1YnNjcmliZXMgPSBbXTtcbiAgY29uc3QgY29udGV4dHMgPSBpbnRlcm5hbHMuY29udGV4dHM7XG4gIGNvbnN0IHByb3BzID0gaW50ZXJuYWxzLnByb3BzO1xuXG4gIGV4cG9ydCBsZXQgY29tcG9uZW50ID0gaW50ZXJuYWxzLmNvbXBvbmVudDtcblxuICBPYmplY3QuZW50cmllcyhpbnRlcm5hbHMuY2xhc3NNYXApLmZvckVhY2goKFtuYW1lLCBjb250ZXh0XSkgPT4ge1xuICAgIGNvbnN0IHN0b3JlID0gZ2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgIGlmIChzdG9yZSAmJiAnc3Vic2NyaWJlJyBpbiBzdG9yZSkge1xuICAgICAgc211aUNsYXNzVW5zdWJzY3JpYmVzLnB1c2goXG4gICAgICAgIHN0b3JlLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBzbXVpQ2xhc3NNYXBbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGZvciAobGV0IGNvbnRleHQgaW4gY29udGV4dHMpIHtcbiAgICBpZiAoY29udGV4dHMuaGFzT3duUHJvcGVydHkoY29udGV4dCkpIHtcbiAgICAgIHNldENvbnRleHQoY29udGV4dCwgY29udGV4dHNbY29udGV4dF0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgZm9yIChjb25zdCB1bnN1YnNjcmliZSBvZiBzbXVpQ2xhc3NVbnN1YnNjcmliZXMpIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9KTtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRFbGVtZW50KCk7XG4gIH1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IENsYXNzQWRkZXIsIHsgaW50ZXJuYWxzIH0gZnJvbSAnLi9DbGFzc0FkZGVyLnN2ZWx0ZSc7XG5cbmNvbnN0IGRlZmF1bHRzID0geyAuLi5pbnRlcm5hbHMgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzQWRkZXJCdWlsZGVyKHByb3BzKSB7XG4gIGZ1bmN0aW9uIENvbXBvbmVudCguLi5hcmdzKSB7XG4gICAgT2JqZWN0LmFzc2lnbihpbnRlcm5hbHMsIGRlZmF1bHRzLCBwcm9wcyk7XG4gICAgcmV0dXJuIG5ldyBDbGFzc0FkZGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZSA9IENsYXNzQWRkZXI7XG5cbiAgLy8gU1NSIHN1cHBvcnRcbiAgaWYgKENsYXNzQWRkZXIuJCRyZW5kZXIpIHtcbiAgICBDb21wb25lbnQuJCRyZW5kZXIgPSAoLi4uYXJncykgPT5cbiAgICAgIE9iamVjdC5hc3NpZ24oaW50ZXJuYWxzLCBkZWZhdWx0cywgcHJvcHMpICYmIENsYXNzQWRkZXIuJCRyZW5kZXIoLi4uYXJncyk7XG4gIH1cbiAgaWYgKENsYXNzQWRkZXIucmVuZGVyKSB7XG4gICAgQ29tcG9uZW50LnJlbmRlciA9ICguLi5hcmdzKSA9PlxuICAgICAgT2JqZWN0LmFzc2lnbihpbnRlcm5hbHMsIGRlZmF1bHRzLCBwcm9wcykgJiYgQ2xhc3NBZGRlci5yZW5kZXIoLi4uYXJncyk7XG4gIH1cblxuICByZXR1cm4gQ29tcG9uZW50O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKFxuICBlbGVtZW50LFxuICBldmVudFR5cGUsXG4gIGRldGFpbCA9IHt9LFxuICBldmVudEluaXQgPSB7IGJ1YmJsZXM6IHRydWUgfVxuKSB7XG4gIGlmICh0eXBlb2YgRXZlbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChldmVudFR5cGUsIGV2ZW50SW5pdCk7XG4gICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuICAgIGNvbnN0IGVsID0gJ2dldEVsZW1lbnQnIGluIGVsZW1lbnQgPyBlbGVtZW50LmdldEVsZW1lbnQoKSA6IGVsZW1lbnQ7XG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZXhjbHVkZShvYmosIGtleXMpIHtcbiAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgY29uc3QgbmV3T2JqID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWUgPSBuYW1lc1tpXTtcbiAgICBjb25zdCBjYXNoSW5kZXggPSBuYW1lLmluZGV4T2YoJyQnKTtcbiAgICBpZiAoXG4gICAgICBjYXNoSW5kZXggIT09IC0xICYmXG4gICAgICBrZXlzLmluZGV4T2YobmFtZS5zdWJzdHJpbmcoMCwgY2FzaEluZGV4ICsgMSkpICE9PSAtMVxuICAgICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChrZXlzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbmV3T2JqW25hbWVdID0gb2JqW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVmaXhGaWx0ZXIob2JqLCBwcmVmaXgpIHtcbiAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgY29uc3QgbmV3T2JqID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWUgPSBuYW1lc1tpXTtcbiAgICBpZiAobmFtZS5zdWJzdHJpbmcoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgbmV3T2JqW25hbWUuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgpXSA9IG9ialtuYW1lXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbnMobm9kZSwgYWN0aW9ucykge1xuICBsZXQgb2JqZWN0cyA9IFtdO1xuXG4gIGlmIChhY3Rpb25zKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGlzQXJyYXkgPyBhY3Rpb25zW2ldWzBdIDogYWN0aW9uc1tpXTtcbiAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUsIGFjdGlvbnNbaV1bMV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlKGFjdGlvbnMpIHtcbiAgICAgIGlmICgoKGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGgpIHx8IDApICE9IG9iamVjdHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgbm90IGNoYW5nZSB0aGUgbGVuZ3RoIG9mIGFuIGFjdGlvbnMgYXJyYXkuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChvYmplY3RzW2ldICYmICd1cGRhdGUnIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKGFjdGlvbnNbaV1bMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAnZGVzdHJveScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgIG9iamVjdHNbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsIjxhc2lkZVxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1zbmFja2Jhcic6IHRydWUsXG4gICAgJ21kYy1zbmFja2Jhci0tc3RhY2tlZCc6IHZhcmlhbnQgPT09ICdzdGFja2VkJyxcbiAgICAnbWRjLXNuYWNrYmFyLS1sZWFkaW5nJzogbGVhZGluZyxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBvbjpNRENTbmFja2JhcjpjbG9zZWQ9e2hhbmRsZUNsb3NlZH1cbiAgb246a2V5ZG93bj17KGV2ZW50KSA9PiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVLZXlEb3duKGV2ZW50KX1cbiAgey4uLmV4Y2x1ZGUoJCRyZXN0UHJvcHMsIFsnc3VyZmFjZSQnXSl9XG4+XG4gIDxkaXZcbiAgICB1c2U6dXNlQWN0aW9ucz17c3VyZmFjZSR1c2V9XG4gICAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICAgIFtzdXJmYWNlJGNsYXNzXTogdHJ1ZSxcbiAgICAgICdtZGMtc25hY2tiYXJfX3N1cmZhY2UnOiB0cnVlLFxuICAgIH0pfVxuICAgIG9uOmNsaWNrPXtoYW5kbGVTdXJmYWNlQ2xpY2t9XG4gICAgcm9sZT1cInN0YXR1c1wiXG4gICAgYXJpYS1yZWxldmFudD1cImFkZGl0aW9uc1wiXG4gICAgey4uLnByZWZpeEZpbHRlcigkJHJlc3RQcm9wcywgJ3N1cmZhY2UkJyl9XG4gID5cbiAgICA8c2xvdCAvPlxuICA8L2Rpdj5cbjwvYXNpZGU+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBsZXQgd2FpdGluZyA9IFByb21pc2UucmVzb2x2ZSgpO1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IE1EQ1NuYWNrYmFyRm91bmRhdGlvbiwgdXRpbCB9IGZyb20gJ0BtYXRlcmlhbC9zbmFja2Jhcic7XG4gIGltcG9ydCB7IHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbSc7XG4gIGltcG9ydCB7IG9uTW91bnQsIHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIGV4Y2x1ZGUsXG4gICAgcHJlZml4RmlsdGVyLFxuICAgIHVzZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbiAgY29uc3QgeyBjbG9zZXN0IH0gPSBwb255ZmlsbDtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuICBjb25zdCB1bmluaXRpYWxpemVkVmFsdWUgPSAoKSA9PiB7fTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IHZhcmlhbnQgPSAnJztcbiAgZXhwb3J0IGxldCBsZWFkaW5nID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgdGltZW91dE1zID0gNTAwMDtcbiAgZXhwb3J0IGxldCBjbG9zZU9uRXNjYXBlID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBsYWJlbFRleHQgPSB1bmluaXRpYWxpemVkVmFsdWU7XG4gIGV4cG9ydCBsZXQgYWN0aW9uQnV0dG9uVGV4dCA9IHVuaW5pdGlhbGl6ZWRWYWx1ZTtcbiAgZXhwb3J0IGxldCBzdXJmYWNlJGNsYXNzID0gJyc7XG4gIGV4cG9ydCBsZXQgc3VyZmFjZSR1c2UgPSBbXTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgaW50ZXJuYWxDbGFzc2VzID0ge307XG4gIGxldCBjbG9zZVJlc29sdmU7XG4gIGxldCBjbG9zZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gKGNsb3NlUmVzb2x2ZSA9IHJlc29sdmUpKTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmxhYmVsOmNvbnRleHQnLCAnc25hY2tiYXInKTtcblxuICAkOiBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuZ2V0VGltZW91dE1zKCkgIT09IHRpbWVvdXRNcykge1xuICAgIGluc3RhbmNlLnNldFRpbWVvdXRNcyh0aW1lb3V0TXMpO1xuICB9XG5cbiAgJDogaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLmdldENsb3NlT25Fc2NhcGUoKSAhPT0gY2xvc2VPbkVzY2FwZSkge1xuICAgIGluc3RhbmNlLnNldENsb3NlT25Fc2NhcGUoY2xvc2VPbkVzY2FwZSk7XG4gIH1cblxuICAkOiBpZiAoXG4gICAgaW5zdGFuY2UgJiZcbiAgICBsYWJlbFRleHQgIT09IHVuaW5pdGlhbGl6ZWRWYWx1ZSAmJlxuICAgIGdldExhYmVsRWxlbWVudCgpLnRleHRDb250ZW50ICE9PSBsYWJlbFRleHRcbiAgKSB7XG4gICAgZ2V0TGFiZWxFbGVtZW50KCkudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gIH1cblxuICAkOiBpZiAoXG4gICAgaW5zdGFuY2UgJiZcbiAgICBhY3Rpb25CdXR0b25UZXh0ICE9PSB1bmluaXRpYWxpemVkVmFsdWUgJiZcbiAgICBnZXRBY3Rpb25CdXR0b25FbGVtZW50KCkudGV4dENvbnRlbnQgIT09IGFjdGlvbkJ1dHRvblRleHRcbiAgKSB7XG4gICAgZ2V0QWN0aW9uQnV0dG9uRWxlbWVudCgpLnRleHRDb250ZW50ID0gYWN0aW9uQnV0dG9uVGV4dDtcbiAgfVxuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGluc3RhbmNlID0gbmV3IE1EQ1NuYWNrYmFyRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzcyxcbiAgICAgIGFubm91bmNlOiAoKSA9PiB1dGlsLmFubm91bmNlKGdldExhYmVsRWxlbWVudCgpKSxcbiAgICAgIG5vdGlmeUNsb3NlZDogKHJlYXNvbikgPT5cbiAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDU25hY2tiYXI6Y2xvc2VkJywgcmVhc29uID8geyByZWFzb24gfSA6IHt9KSxcbiAgICAgIG5vdGlmeUNsb3Npbmc6IChyZWFzb24pID0+XG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ1NuYWNrYmFyOmNsb3NpbmcnLCByZWFzb24gPyB7IHJlYXNvbiB9IDoge30pLFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiBkaXNwYXRjaChnZXRFbGVtZW50KCksICdNRENTbmFja2JhcjpvcGVuZWQnKSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+IGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ1NuYWNrYmFyOm9wZW5pbmcnKSxcbiAgICAgIHJlbW92ZUNsYXNzLFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIWludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCEoY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3NlcykgfHwgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3VyZmFjZUNsaWNrKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgaWYgKGNsb3Nlc3QodGFyZ2V0LCAnLm1kYy1zbmFja2Jhcl9fYWN0aW9uJykpIHtcbiAgICAgICAgaW5zdGFuY2UuaGFuZGxlQWN0aW9uQnV0dG9uQ2xpY2soZXZlbnQpO1xuICAgICAgfSBlbHNlIGlmIChjbG9zZXN0KHRhcmdldCwgJy5tZGMtc25hY2tiYXJfX2Rpc21pc3MnKSkge1xuICAgICAgICBpbnN0YW5jZS5oYW5kbGVBY3Rpb25JY29uQ2xpY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlZCgpIHtcbiAgICBjbG9zZVJlc29sdmUoKTtcbiAgICBjbG9zZVByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gKGNsb3NlUmVzb2x2ZSA9IHJlc29sdmUpKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHdhaXRpbmcgPSB3YWl0aW5nLnRoZW4oKCkgPT4ge1xuICAgICAgaW5zdGFuY2Uub3BlbigpO1xuICAgICAgcmV0dXJuIGNsb3NlUHJvbWlzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBmb3JjZU9wZW4oKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLm9wZW4oKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBjbG9zZShyZWFzb24gPSAnJykge1xuICAgIHJldHVybiBpbnN0YW5jZS5jbG9zZShyZWFzb24pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzT3BlbigpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuaXNPcGVuKCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0TGFiZWxFbGVtZW50KCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcignLm1kYy1zbmFja2Jhcl9fbGFiZWwnKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRBY3Rpb25CdXR0b25FbGVtZW50KCkge1xuICAgIHJldHVybiBnZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcignLm1kYy1zbmFja2Jhcl9fYWN0aW9uJyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgey4uLiQkcmVzdFByb3BzfVxuPlxuICA8c2xvdCAvPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCB1c2VBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBjbGFzc0FkZGVyQnVpbGRlciB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5pbXBvcnQgRGl2IGZyb20gJ0BzbXVpL2NvbW1vbi9EaXYuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1zbmFja2Jhcl9fYWN0aW9ucycsXG4gIHByb3BzOiB7ICdhcmlhLWF0b21pYyc6ICd0cnVlJyB9LFxuICBjb250ZXh0czoge1xuICAgICdTTVVJOmJ1dHRvbjpjb250ZXh0JzogJ3NuYWNrYmFyOmFjdGlvbnMnLFxuICAgICdTTVVJOmljb24tYnV0dG9uOmNvbnRleHQnOiAnc25hY2tiYXI6YWN0aW9ucycsXG4gICAgJ1NNVUk6bGFiZWw6Y29udGV4dCc6IHVuZGVmaW5lZCxcbiAgfSxcbiAgY29tcG9uZW50OiBEaXYsXG59KTtcbiIsIjxzcGFuXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgey4uLiQkcmVzdFByb3BzfT48c2xvdCAvPjwvc3BhblxuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBmb3J3YXJkRXZlbnRzQnVpbGRlciwgdXNlQWN0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwuanMnO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPHN2ZWx0ZTpjb21wb25lbnRcbiAgdGhpcz17Y29tcG9uZW50fVxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZT17W2ZvcndhcmRFdmVudHMsIC4uLnVzZV19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1idXR0b25fX2xhYmVsJzogY29udGV4dCA9PT0gJ2J1dHRvbicsXG4gICAgJ21kYy1mYWJfX2xhYmVsJzogY29udGV4dCA9PT0gJ2ZhYicsXG4gICAgJ21kYy10YWJfX3RleHQtbGFiZWwnOiBjb250ZXh0ID09PSAndGFiJyxcbiAgICAnbWRjLWltYWdlLWxpc3RfX2xhYmVsJzogY29udGV4dCA9PT0gJ2ltYWdlLWxpc3QnLFxuICAgICdtZGMtc25hY2tiYXJfX2xhYmVsJzogY29udGV4dCA9PT0gJ3NuYWNrYmFyJyxcbiAgICAnbWRjLWJhbm5lcl9fdGV4dCc6IGNvbnRleHQgPT09ICdiYW5uZXInLFxuICAgICdtZGMtc2VnbWVudGVkLWJ1dHRvbl9fbGFiZWwnOiBjb250ZXh0ID09PSAnc2VnbWVudGVkLWJ1dHRvbicsXG4gICAgJ21kYy1kYXRhLXRhYmxlX19wYWdpbmF0aW9uLXJvd3MtcGVyLXBhZ2UtbGFiZWwnOlxuICAgICAgY29udGV4dCA9PT0gJ2RhdGEtdGFibGU6cGFnaW5hdGlvbicsXG4gICAgJ21kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC1sYWJlbCc6XG4gICAgICBjb250ZXh0ID09PSAnZGF0YS10YWJsZTpzb3J0YWJsZS1oZWFkZXItY2VsbCcsXG4gIH0pfVxuICB7Li4uY29udGV4dCA9PT0gJ3NuYWNrYmFyJyA/IHsgJ2FyaWEtYXRvbWljJzogJ2ZhbHNlJyB9IDoge319XG4gIHt0YWJpbmRleH1cbiAgey4uLiQkcmVzdFByb3BzfT48c2xvdCAvPjwvc3ZlbHRlOmNvbXBvbmVudFxuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIGNsYXNzTWFwLCB1c2VBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG4gIGltcG9ydCBTcGFuIGZyb20gJy4vU3Bhbi5zdmVsdGUnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcblxuICBsZXQgZWxlbWVudDtcblxuICBleHBvcnQgbGV0IGNvbXBvbmVudCA9IFNwYW47XG5cbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoJ1NNVUk6bGFiZWw6Y29udGV4dCcpO1xuICBjb25zdCB0YWJpbmRleCA9IGdldENvbnRleHQoJ1NNVUk6bGFiZWw6dGFiaW5kZXgnKTtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRFbGVtZW50KCk7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPFNuYWNrYmFyIGJpbmQ6dGhpcz17c25hY2tiYXJXaXRoQ2xvc2V9PlxuICA8TGFiZWw+VGhpcyBpcyBhIHNuYWNrYmFyLjwvTGFiZWw+XG4gIDxBY3Rpb25zPlxuICAgIDxJY29uQnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiB0aXRsZT1cIkRpc21pc3NcIj5jbG9zZTwvSWNvbkJ1dHRvbj5cbiAgPC9BY3Rpb25zPlxuPC9TbmFja2Jhcj5cblxuPFNuYWNrYmFyIGJpbmQ6dGhpcz17c25hY2tiYXJXaXRob3V0Q2xvc2V9PlxuICA8TGFiZWw+VGhpcyBpcyBhIHNuYWNrYmFyLjwvTGFiZWw+XG48L1NuYWNrYmFyPlxuXG48QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBzbmFja2JhcldpdGhDbG9zZS5vcGVuKCl9PlxuICA8TGFiZWw+T3BlbiBTbmFja2JhciBXaXRoIERpc21pc3M8L0xhYmVsPlxuPC9CdXR0b24+XG48QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBzbmFja2JhcldpdGhvdXRDbG9zZS5vcGVuKCl9PlxuICA8TGFiZWw+T3BlbiBTbmFja2JhciBXaXRob3V0IERpc21pc3M8L0xhYmVsPlxuPC9CdXR0b24+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTbmFja2JhciwgeyBBY3Rpb25zLCBMYWJlbCB9IGZyb20gJ0BzbXVpL3NuYWNrYmFyJztcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tICdAc211aS9idXR0b24nO1xuICBpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAc211aS9pY29uLWJ1dHRvbic7XG5cbiAgbGV0IHNuYWNrYmFyV2l0aENsb3NlO1xuICBsZXQgc25hY2tiYXJXaXRob3V0Q2xvc2U7XG48L3NjcmlwdD5cbiIsIjxTbmFja2JhciBsZWFkaW5nIGJpbmQ6dGhpcz17c25hY2tiYXJ9IG9uOk1EQ1NuYWNrYmFyOmNsb3NlZD17aGFuZGxlQ2xvc2VkfT5cbiAgPExhYmVsPlRoaXMgaXMgYSBsZWFkaW5nIHNuYWNrYmFyLjwvTGFiZWw+XG4gIDxBY3Rpb25zPlxuICAgIDxCdXR0b24+QWN0aW9uPC9CdXR0b24+XG4gIDwvQWN0aW9ucz5cbjwvU25hY2tiYXI+XG5cbjxCdXR0b24gb246Y2xpY2s9eygpID0+IHNuYWNrYmFyLm9wZW4oKX0+XG4gIDxMYWJlbD5PcGVuIFNuYWNrYmFyPC9MYWJlbD5cbjwvQnV0dG9uPlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+Q2xvc2VkIFJlYXNvbjoge3JlYXNvbn08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNuYWNrYmFyLCB7IEFjdGlvbnMsIExhYmVsIH0gZnJvbSAnQHNtdWkvc25hY2tiYXInO1xuICBpbXBvcnQgQnV0dG9uIGZyb20gJ0BzbXVpL2J1dHRvbic7XG5cbiAgbGV0IHNuYWNrYmFyO1xuICBsZXQgcmVhc29uID0gJ25vdGhpbmcgeWV0JztcblxuICBmdW5jdGlvbiBoYW5kbGVDbG9zZWQoZSkge1xuICAgIHJlYXNvbiA9IGUuZGV0YWlsLnJlYXNvbjtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8U25hY2tiYXJcbiAgdmFyaWFudD1cInN0YWNrZWRcIlxuICBiaW5kOnRoaXM9e25uYWNrYmFyfVxuICBvbjpNRENTbmFja2JhcjpjbG9zZWQ9e2hhbmRsZUNsb3NlZFN0YWNrZWR9XG4+XG4gIDxMYWJlbD5cbiAgICBUaGlzIGlzIGEgc3RhY2tlZCBzbmFja2Jhci4gVXNlIGl0IHdoZW4geW91IGhhdmUgcmVhbGx5IGxvbmcgdGV4dC5cbiAgPC9MYWJlbD5cbiAgPEFjdGlvbnM+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gKGFjdGlvbiA9ICdTb21ldGhpbmcnKX0+U29tZXRoaW5nPC9CdXR0b24+XG4gICAgPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gKGFjdGlvbiA9ICdBbm90aGVyJyl9PkFub3RoZXI8L0J1dHRvbj5cbiAgICA8SWNvbkJ1dHRvblxuICAgICAgb246Y2xpY2s9eygpID0+IChhY3Rpb24gPSAnRGlzbWlzc2VkJyl9XG4gICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgIHRpdGxlPVwiRGlzbWlzc1wiPmNsb3NlPC9JY29uQnV0dG9uXG4gICAgPlxuICA8L0FjdGlvbnM+XG48L1NuYWNrYmFyPlxuXG48QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBubmFja2Jhci5vcGVuKCl9PlxuICA8TGFiZWw+T3BlbiBTbmFja2JhcjwvTGFiZWw+XG48L0J1dHRvbj5cblxuPHByZSBjbGFzcz1cInN0YXR1c1wiPkNsb3NlZCBSZWFzb246IHtyZWFzb259PC9wcmU+XG48cHJlIGNsYXNzPVwic3RhdHVzXCI+QWN0aW9uOiB7YWN0aW9ufTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU25hY2tiYXIsIHsgQWN0aW9ucywgTGFiZWwgfSBmcm9tICdAc211aS9zbmFja2Jhcic7XG4gIGltcG9ydCBCdXR0b24gZnJvbSAnQHNtdWkvYnV0dG9uJztcbiAgaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQHNtdWkvaWNvbi1idXR0b24nO1xuXG4gIGxldCBubmFja2JhcjtcbiAgbGV0IHJlYXNvbiA9ICdub3RoaW5nIHlldCc7XG4gIGxldCBhY3Rpb24gPSAnbm90aGluZyB5ZXQnO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlZFN0YWNrZWQoZSkge1xuICAgIHJlYXNvbiA9IGUuZGV0YWlsLnJlYXNvbjtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8U25hY2tiYXIgYmluZDp0aGlzPXtzbmFja2Jhcn0gbGFiZWxUZXh0PXt0ZXh0fSB0aW1lb3V0TXM9ey0xfT5cbiAgPExhYmVsIC8+XG4gIDxBY3Rpb25zPlxuICAgIDxJY29uQnV0dG9uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiB0aXRsZT1cIkRpc21pc3NcIj5jbG9zZTwvSWNvbkJ1dHRvbj5cbiAgPC9BY3Rpb25zPlxuPC9TbmFja2Jhcj5cblxuPFRleHRmaWVsZCBiaW5kOnZhbHVlPXt0ZXh0fSBsYWJlbD1cIkR5bmFtaWMgVGV4dFwiIGlucHV0JHJlcXVpcmVkIC8+XG5cbjxCdXR0b24gb246Y2xpY2s9eygpID0+IHNuYWNrYmFyICYmIHNuYWNrYmFyLm9wZW4oKX0+XG4gIDxMYWJlbD5PcGVuIFNuYWNrYmFyPC9MYWJlbD5cbjwvQnV0dG9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU25hY2tiYXIsIHsgQWN0aW9ucywgTGFiZWwgfSBmcm9tICdAc211aS9zbmFja2Jhcic7XG4gIGltcG9ydCBCdXR0b24gZnJvbSAnQHNtdWkvYnV0dG9uJztcbiAgaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQHNtdWkvaWNvbi1idXR0b24nO1xuICBpbXBvcnQgVGV4dGZpZWxkIGZyb20gJ0BzbXVpL3RleHRmaWVsZCc7XG5cbiAgbGV0IHNuYWNrYmFyO1xuICBsZXQgdGV4dCA9ICdUaGlzIGlzIGEgc25hY2tiYXIgd2l0aCBkeW5hbWljIHRleHQuJztcbjwvc2NyaXB0PlxuIiwiLyoqXG4gKiBTdG9yZXMgcmVzdWx0IGZyb20gc3VwcG9ydHNDc3NWYXJpYWJsZXMgdG8gYXZvaWQgcmVkdW5kYW50IHByb2Nlc3NpbmcgdG9cbiAqIGRldGVjdCBDU1MgY3VzdG9tIHZhcmlhYmxlIHN1cHBvcnQuXG4gKi9cbnZhciBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG5leHBvcnQgZnVuY3Rpb24gc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93T2JqLCBmb3JjZVJlZnJlc2gpIHtcbiAgICBpZiAoZm9yY2VSZWZyZXNoID09PSB2b2lkIDApIHsgZm9yY2VSZWZyZXNoID0gZmFsc2U7IH1cbiAgICB2YXIgQ1NTID0gd2luZG93T2JqLkNTUztcbiAgICB2YXIgc3VwcG9ydHNDc3NWYXJzID0gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIGlmICh0eXBlb2Ygc3VwcG9ydHNDc3NWYXJpYWJsZXNfID09PSAnYm9vbGVhbicgJiYgIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuICAgIH1cbiAgICB2YXIgc3VwcG9ydHNGdW5jdGlvblByZXNlbnQgPSBDU1MgJiYgdHlwZW9mIENTUy5zdXBwb3J0cyA9PT0gJ2Z1bmN0aW9uJztcbiAgICBpZiAoIXN1cHBvcnRzRnVuY3Rpb25QcmVzZW50KSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgPSBDU1Muc3VwcG9ydHMoJy0tY3NzLXZhcnMnLCAneWVzJyk7XG4gICAgLy8gU2VlOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTU0NjY5XG4gICAgLy8gU2VlOiBSRUFETUUgc2VjdGlvbiBvbiBTYWZhcmlcbiAgICB2YXIgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzID0gKENTUy5zdXBwb3J0cygnKC0tY3NzLXZhcnM6IHllcyknKSAmJlxuICAgICAgICBDU1Muc3VwcG9ydHMoJ2NvbG9yJywgJyMwMDAwMDAwMCcpKTtcbiAgICBzdXBwb3J0c0Nzc1ZhcnMgPVxuICAgICAgICBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzIHx8IHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cztcbiAgICBpZiAoIWZvcmNlUmVmcmVzaCkge1xuICAgICAgICBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPSBzdXBwb3J0c0Nzc1ZhcnM7XG4gICAgfVxuICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcnM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGV2dCwgcGFnZU9mZnNldCwgY2xpZW50UmVjdCkge1xuICAgIGlmICghZXZ0KSB7XG4gICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICB9XG4gICAgdmFyIHggPSBwYWdlT2Zmc2V0LngsIHkgPSBwYWdlT2Zmc2V0Lnk7XG4gICAgdmFyIGRvY3VtZW50WCA9IHggKyBjbGllbnRSZWN0LmxlZnQ7XG4gICAgdmFyIGRvY3VtZW50WSA9IHkgKyBjbGllbnRSZWN0LnRvcDtcbiAgICB2YXIgbm9ybWFsaXplZFg7XG4gICAgdmFyIG5vcm1hbGl6ZWRZO1xuICAgIC8vIERldGVybWluZSB0b3VjaCBwb2ludCByZWxhdGl2ZSB0byB0aGUgcmlwcGxlIGNvbnRhaW5lci5cbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICB2YXIgdG91Y2hFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgbW91c2VFdmVudCA9IGV2dDtcbiAgICAgICAgbm9ybWFsaXplZFggPSBtb3VzZUV2ZW50LnBhZ2VYIC0gZG9jdW1lbnRYO1xuICAgICAgICBub3JtYWxpemVkWSA9IG1vdXNlRXZlbnQucGFnZVkgLSBkb2N1bWVudFk7XG4gICAgfVxuICAgIHJldHVybiB7IHg6IG5vcm1hbGl6ZWRYLCB5OiBub3JtYWxpemVkWSB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIH0gZnJvbSAnLi91dGlsJztcbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG52YXIgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93bicsXG5dO1xuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG52YXIgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51Jyxcbl07XG4vLyBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG52YXIgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xudmFyIE1EQ1JpcHBsZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1JpcHBsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnU2NhbGVfID0gJzAnO1xuICAgICAgICBfdGhpcy5mcmFtZV8gPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbFNpemVfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMubWF4UmFkaXVzXyA9IDA7XG4gICAgICAgIF90aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0ZV8oZSk7IH07XG4gICAgICAgIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlYWN0aXZhdGVfKCk7IH07XG4gICAgICAgIF90aGlzLmZvY3VzSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5ibHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVCbHVyKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF5b3V0KCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMSA9IF9hLlJPT1QsIFVOQk9VTkRFRF8xID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKFJPT1RfMSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKFVOQk9VTkRFRF8xKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8yID0gX2EuUk9PVCwgVU5CT1VOREVEXzIgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoUk9PVF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKFVOQk9VTkRFRF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBldnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZV8oZXZ0KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVuYm91bmRlZCA9IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgdmFyIFVOQk9VTkRFRCA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VTkJPVU5ERUQ7XG4gICAgICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7IH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1ByZXNzUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlbW92ZUNzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmlwcGxlU3RyaW5ncyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyaXBwbGVTdHJpbmdzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShyaXBwbGVTdHJpbmdzW2tleV0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgICAgIHZhciBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGV2dCAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGV2dC50eXBlO1xuICAgICAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBldnQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGV2dDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZXZ0ICE9PSB1bmRlZmluZWQgJiYgKGV2dC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2dC50eXBlID09PSAncG9pbnRlcmRvd24nKTtcbiAgICAgICAgdmFyIGhhc0FjdGl2YXRlZENoaWxkID0gZXZ0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXIuY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpOyB9KTtcbiAgICAgICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZVxuICAgICAgICAgICAgICAgICYmIGV2dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgJiYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIChldnQgIT09IHVuZGVmaW5lZCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSA/XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuaXNTdXJmYWNlQWN0aXZlKCkgOlxuICAgICAgICAgICAgdHJ1ZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVBY3RpdmF0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX0VORDtcbiAgICAgICAgdmFyIF9iID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBGR19ERUFDVElWQVRJT04gPSBfYi5GR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT04gPSBfYi5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMgPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM7XG4gICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgICAgICB2YXIgdHJhbnNsYXRlRW5kID0gJyc7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpLCBzdGFydFBvaW50ID0gX2Muc3RhcnRQb2ludCwgZW5kUG9pbnQgPSBfYy5lbmRQb2ludDtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gc3RhcnRQb2ludC54ICsgXCJweCwgXCIgKyBzdGFydFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgICAgICB0cmFuc2xhdGVFbmQgPSBlbmRQb2ludC54ICsgXCJweCwgXCIgKyBlbmRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB0aGlzLmFkYXB0ZXIuY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCk7IH0sIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgYWN0aXZhdGlvbkV2ZW50ID0gX2EuYWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXI7XG4gICAgICAgIHZhciBzdGFydFBvaW50O1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGFjdGl2YXRpb25FdmVudCwgdGhpcy5hZGFwdGVyLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyLmNvbXB1dGVCb3VuZGluZ1JlY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBlbmRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRQb2ludDogc3RhcnRQb2ludCwgZW5kUG9pbnQ6IGVuZFBvaW50IH07XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgICAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICAgICAgdmFyIEZHX0RFQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT047XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSBfYS5oYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWQgPSBfYS5pc0FjdGl2YXRlZDtcbiAgICAgICAgdmFyIGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBGR19BQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT047XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlci5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZXNldEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgICAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQ7IH0sIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSBfX2Fzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlRGVhY3RpdmF0aW9uXyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF9hLndhc0VsZW1lbnRNYWRlQWN0aXZlO1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRJbnRlcm5hbF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdmFyIG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuICAgICAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgICAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICAgICAgdmFyIGdldEJvdW5kZWRSYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyhfdGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3coX3RoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG4gICAgICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgICAgIHZhciBpbml0aWFsU2l6ZSA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBzaXplIHNob3VsZCBhbHdheXMgYmUgZXZlbiBudW1iZXIgdG8gZXF1YWxseSBjZW50ZXIgYWxpZ24uXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSAmJiBpbml0aWFsU2l6ZSAlIDIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gaW5pdGlhbFNpemUgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBpbml0aWFsU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZnU2NhbGVfID0gXCJcIiArIHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVMYXlvdXRDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfU0laRSA9IF9hLlZBUl9GR19TSVpFLCBWQVJfTEVGVCA9IF9hLlZBUl9MRUZULCBWQVJfVE9QID0gX2EuVkFSX1RPUCwgVkFSX0ZHX1NDQUxFID0gX2EuVkFSX0ZHX1NDQUxFO1xuICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIHRoaXMuaW5pdGlhbFNpemVfICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCB0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uLCB1dGlsIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZSc7XG5pbXBvcnQgeyBldmVudHMsIHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbSc7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbmNvbnN0IHsgYXBwbHlQYXNzaXZlIH0gPSBldmVudHM7XG5jb25zdCB7IG1hdGNoZXMgfSA9IHBvbnlmaWxsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSaXBwbGUoXG4gIG5vZGUsXG4gIHtcbiAgICByaXBwbGUgPSB0cnVlLFxuICAgIHN1cmZhY2UgPSBmYWxzZSxcbiAgICB1bmJvdW5kZWQgPSBmYWxzZSxcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIGNvbG9yID0gbnVsbCxcbiAgICBhY3RpdmUgPSBudWxsLFxuICAgIGV2ZW50VGFyZ2V0ID0gbnVsbCxcbiAgICBhY3RpdmVUYXJnZXQgPSBudWxsLFxuICAgIGFkZENsYXNzID0gKGNsYXNzTmFtZSkgPT4gbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgcmVtb3ZlQ2xhc3MgPSAoY2xhc3NOYW1lKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICBhZGRTdHlsZSA9IChuYW1lLCB2YWx1ZSkgPT4gbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSksXG4gICAgaW5pdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKSxcbiAgfSA9IHt9XG4pIHtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgYWRkTGF5b3V0TGlzdGVuZXIgPSBnZXRDb250ZXh0KCdTTVVJOmFkZExheW91dExpc3RlbmVyJyk7XG4gIGxldCByZW1vdmVMYXlvdXRMaXN0ZW5lcjtcbiAgbGV0IG9sZEFjdGl2ZSA9IGFjdGl2ZTtcbiAgbGV0IG9sZEV2ZW50VGFyZ2V0ID0gZXZlbnRUYXJnZXQ7XG4gIGxldCBvbGRBY3RpdmVUYXJnZXQgPSBhY3RpdmVUYXJnZXQ7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJvcHMoKSB7XG4gICAgaWYgKHN1cmZhY2UpIHtcbiAgICAgIGFkZENsYXNzKCdtZGMtcmlwcGxlLXN1cmZhY2UnKTtcbiAgICAgIGlmIChjb2xvciA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICAgIGFkZENsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH0gZWxzZSBpZiAoY29sb3IgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIGFkZENsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYWN0aXZhdGlvbiBmaXJzdC5cbiAgICBpZiAoaW5zdGFuY2UgJiYgb2xkQWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgIG9sZEFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlbiBjcmVhdGUvZGVzdHJveSBhbiBpbnN0YW5jZS5cbiAgICBpZiAocmlwcGxlICYmICFpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTURDUmlwcGxlRm91bmRhdGlvbih7XG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IG5vZGUuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAoZXZlbnRUYXJnZXQgfHwgbm9kZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe1xuICAgICAgICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIH0pLFxuICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+XG4gICAgICAgICAgYWN0aXZlID09IG51bGwgPyBtYXRjaGVzKGFjdGl2ZVRhcmdldCB8fCBub2RlLCAnOmFjdGl2ZScpIDogYWN0aXZlLFxuICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gISFkaXNhYmxlZCxcbiAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+ICEhdW5ib3VuZGVkLFxuICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgKGV2ZW50VGFyZ2V0IHx8IG5vZGUpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgKSxcbiAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogYWRkU3R5bGUsXG4gICAgICB9KTtcblxuICAgICAgaW5pdFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmluaXQoKTtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VW5ib3VuZGVkKHVuYm91bmRlZCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGluc3RhbmNlICYmICFyaXBwbGUpIHtcbiAgICAgIGluaXRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIGluc3RhbmNlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE5vdyBoYW5kbGUgZXZlbnQvYWN0aXZlIHRhcmdldHNcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZSAmJlxuICAgICAgKG9sZEV2ZW50VGFyZ2V0ICE9PSBldmVudFRhcmdldCB8fCBvbGRBY3RpdmVUYXJnZXQgIT09IGFjdGl2ZVRhcmdldClcbiAgICApIHtcbiAgICAgIG9sZEV2ZW50VGFyZ2V0ID0gZXZlbnRUYXJnZXQ7XG4gICAgICBvbGRBY3RpdmVUYXJnZXQgPSBhY3RpdmVUYXJnZXQ7XG5cbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLmluaXQoKTtcbiAgICAgICAgICBpbnN0YW5jZS5zZXRVbmJvdW5kZWQodW5ib3VuZGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyaXBwbGUgJiYgdW5ib3VuZGVkKSB7XG4gICAgICBhZGRDbGFzcygnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUHJvcHMoKTtcblxuICBpZiAoYWRkTGF5b3V0TGlzdGVuZXIpIHtcbiAgICByZW1vdmVMYXlvdXRMaXN0ZW5lciA9IGFkZExheW91dExpc3RlbmVyKGxheW91dCk7XG4gIH1cblxuICBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5sYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShwcm9wcykge1xuICAgICAgKHtcbiAgICAgICAgcmlwcGxlLFxuICAgICAgICBzdXJmYWNlLFxuICAgICAgICB1bmJvdW5kZWQsXG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgYWN0aXZlVGFyZ2V0LFxuICAgICAgICBhZGRDbGFzcyxcbiAgICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICAgIGFkZFN0eWxlLFxuICAgICAgICBpbml0UHJvbWlzZSxcbiAgICAgIH0gPSB7XG4gICAgICAgIHJpcHBsZTogdHJ1ZSxcbiAgICAgICAgc3VyZmFjZTogZmFsc2UsXG4gICAgICAgIHVuYm91bmRlZDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgY29sb3I6IG51bGwsXG4gICAgICAgIGFjdGl2ZTogbnVsbCxcbiAgICAgICAgZXZlbnRUYXJnZXQ6IG51bGwsXG4gICAgICAgIGFjdGl2ZVRhcmdldDogbnVsbCxcbiAgICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICAgIGFkZFN0eWxlOiAobmFtZSwgdmFsdWUpID0+IG5vZGUuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUpLFxuICAgICAgICBpbml0UHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKCksXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgfSk7XG4gICAgICBoYW5kbGVQcm9wcygpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICByZW1vdmVDbGFzcygnbWRjLXJpcHBsZS1zdXJmYWNlJyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbW92ZUxheW91dExpc3RlbmVyKSB7XG4gICAgICAgIHJlbW92ZUxheW91dExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsIjxhXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAge2hyZWZ9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L2Fcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIHVzZUFjdGlvbnMgfSBmcm9tICcuL2ludGVybmFsLmpzJztcblxuICBleHBvcnQgbGV0IGhyZWYgPSAnamF2YXNjcmlwdDp2b2lkKDApOyc7XG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPGJ1dHRvblxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L2J1dHRvblxuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBmb3J3YXJkRXZlbnRzQnVpbGRlciwgdXNlQWN0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwuanMnO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPHN2ZWx0ZTpjb21wb25lbnRcbiAgdGhpcz17Y29tcG9uZW50fVxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZT17W1xuICAgIFtcbiAgICAgIFJpcHBsZSxcbiAgICAgIHtcbiAgICAgICAgcmlwcGxlLFxuICAgICAgICB1bmJvdW5kZWQ6IGZhbHNlLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgZGlzYWJsZWQ6ICEhJCRyZXN0UHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgYWRkU3R5bGUsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZm9yd2FyZEV2ZW50cyxcbiAgICAuLi51c2UsXG4gIF19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1idXR0b24nOiB0cnVlLFxuICAgICdtZGMtYnV0dG9uLS1yYWlzZWQnOiB2YXJpYW50ID09PSAncmFpc2VkJyxcbiAgICAnbWRjLWJ1dHRvbi0tdW5lbGV2YXRlZCc6IHZhcmlhbnQgPT09ICd1bmVsZXZhdGVkJyxcbiAgICAnbWRjLWJ1dHRvbi0tb3V0bGluZWQnOiB2YXJpYW50ID09PSAnb3V0bGluZWQnLFxuICAgICdzbXVpLWJ1dHRvbi0tY29sb3Itc2Vjb25kYXJ5JzogY29sb3IgPT09ICdzZWNvbmRhcnknLFxuICAgICdtZGMtYnV0dG9uLS10b3VjaCc6IHRvdWNoLFxuICAgICdtZGMtY2FyZF9fYWN0aW9uJzogY29udGV4dCA9PT0gJ2NhcmQ6YWN0aW9uJyxcbiAgICAnbWRjLWNhcmRfX2FjdGlvbi0tYnV0dG9uJzogY29udGV4dCA9PT0gJ2NhcmQ6YWN0aW9uJyxcbiAgICAnbWRjLWRpYWxvZ19fYnV0dG9uJzogY29udGV4dCA9PT0gJ2RpYWxvZzphY3Rpb24nLFxuICAgICdtZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbic6IGNvbnRleHQgPT09ICd0b3AtYXBwLWJhcjpuYXZpZ2F0aW9uJyxcbiAgICAnbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbSc6IGNvbnRleHQgPT09ICd0b3AtYXBwLWJhcjphY3Rpb24nLFxuICAgICdtZGMtc25hY2tiYXJfX2FjdGlvbic6IGNvbnRleHQgPT09ICdzbmFja2JhcjphY3Rpb25zJyxcbiAgICAnbWRjLWJhbm5lcl9fc2Vjb25kYXJ5LWFjdGlvbic6IGNvbnRleHQgPT09ICdiYW5uZXInICYmIHNlY29uZGFyeSxcbiAgICAnbWRjLWJhbm5lcl9fcHJpbWFyeS1hY3Rpb24nOiBjb250ZXh0ID09PSAnYmFubmVyJyAmJiAhc2Vjb25kYXJ5LFxuICAgICdtZGMtdG9vbHRpcF9fYWN0aW9uJzogY29udGV4dCA9PT0gJ3Rvb2x0aXA6cmljaC1hY3Rpb25zJyxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBzdHlsZT17T2JqZWN0LmVudHJpZXMoaW50ZXJuYWxTdHlsZXMpXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgLmNvbmNhdChbc3R5bGVdKVxuICAgIC5qb2luKCcgJyl9XG4gIHsuLi5hY3Rpb25Qcm9wfVxuICB7Li4uZGVmYXVsdFByb3B9XG4gIHsuLi5zZWNvbmRhcnlQcm9wfVxuICB7aHJlZn1cbiAgb246Y2xpY2s9e2hhbmRsZUNsaWNrfVxuICB7Li4uJCRyZXN0UHJvcHN9XG4gID48ZGl2IGNsYXNzPVwibWRjLWJ1dHRvbl9fcmlwcGxlXCIgLz5cbiAgPHNsb3QgLz57I2lmIHRvdWNofTxkaXYgY2xhc3M9XCJtZGMtYnV0dG9uX190b3VjaFwiIC8+ey9pZn08L3N2ZWx0ZTpjb21wb25lbnRcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgc2V0Q29udGV4dCwgZ2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbiAgaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUnO1xuICBpbXBvcnQgQSBmcm9tICdAc211aS9jb21tb24vQS5zdmVsdGUnO1xuICBpbXBvcnQgQnV0dG9uIGZyb20gJ0BzbXVpL2NvbW1vbi9CdXR0b24uc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgc3R5bGUgPSAnJztcbiAgZXhwb3J0IGxldCByaXBwbGUgPSB0cnVlO1xuICBleHBvcnQgbGV0IGNvbG9yID0gJ3ByaW1hcnknO1xuICBleHBvcnQgbGV0IHZhcmlhbnQgPSAndGV4dCc7XG4gIGV4cG9ydCBsZXQgdG91Y2ggPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBocmVmID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhY3Rpb24gPSAnY2xvc2UnO1xuICBsZXQgZGVmYXVsdEFjdGlvbiA9IGZhbHNlO1xuICBleHBvcnQgeyBkZWZhdWx0QWN0aW9uIGFzIGRlZmF1bHQgfTtcbiAgZXhwb3J0IGxldCBzZWNvbmRhcnkgPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgaW50ZXJuYWxTdHlsZXMgPSB7fTtcbiAgbGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCdTTVVJOmJ1dHRvbjpjb250ZXh0Jyk7XG5cbiAgZXhwb3J0IGxldCBjb21wb25lbnQgPSBocmVmID09IG51bGwgPyBCdXR0b24gOiBBO1xuXG4gICQ6IGFjdGlvblByb3AgPVxuICAgIGNvbnRleHQgPT09ICdkaWFsb2c6YWN0aW9uJyAmJiBhY3Rpb24gIT0gbnVsbFxuICAgICAgPyB7ICdkYXRhLW1kYy1kaWFsb2ctYWN0aW9uJzogYWN0aW9uIH1cbiAgICAgIDogeyBhY3Rpb246ICQkcHJvcHMuYWN0aW9uIH07XG4gICQ6IGRlZmF1bHRQcm9wID1cbiAgICBjb250ZXh0ID09PSAnZGlhbG9nOmFjdGlvbicgJiYgZGVmYXVsdEFjdGlvblxuICAgICAgPyB7ICdkYXRhLW1kYy1kaWFsb2ctYnV0dG9uLWRlZmF1bHQnOiAnJyB9XG4gICAgICA6IHsgZGVmYXVsdDogJCRwcm9wcy5kZWZhdWx0IH07XG4gICQ6IHNlY29uZGFyeVByb3AgPVxuICAgIGNvbnRleHQgPT09ICdiYW5uZXInID8ge30gOiB7IHNlY29uZGFyeTogJCRwcm9wcy5zZWNvbmRhcnkgfTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmxhYmVsOmNvbnRleHQnLCAnYnV0dG9uJyk7XG4gIHNldENvbnRleHQoJ1NNVUk6aWNvbjpjb250ZXh0JywgJ2J1dHRvbicpO1xuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIShjbGFzc05hbWUgaW4gaW50ZXJuYWxDbGFzc2VzKSB8fCBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpbnRlcm5hbFN0eWxlc1tuYW1lXSAhPSB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBpbnRlcm5hbFN0eWxlc1tuYW1lXTtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXMgPSBpbnRlcm5hbFN0eWxlcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVybmFsU3R5bGVzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKGNvbnRleHQgPT09ICdiYW5uZXInKSB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgZ2V0RWxlbWVudCgpLFxuICAgICAgICBzZWNvbmRhcnlcbiAgICAgICAgICA/ICdTTVVJOmJhbm5lcjpidXR0b246c2Vjb25kYXJ5QWN0aW9uQ2xpY2snXG4gICAgICAgICAgOiAnU01VSTpiYW5uZXI6YnV0dG9uOnByaW1hcnlBY3Rpb25DbGljaydcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIElDT05fQlVUVE9OX09OOiAnbWRjLWljb24tYnV0dG9uLS1vbicsXG4gICAgUk9PVDogJ21kYy1pY29uLWJ1dHRvbicsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfTEFCRUw6ICdhcmlhLWxhYmVsJyxcbiAgICBBUklBX1BSRVNTRUQ6ICdhcmlhLXByZXNzZWQnLFxuICAgIERBVEFfQVJJQV9MQUJFTF9PRkY6ICdkYXRhLWFyaWEtbGFiZWwtb2ZmJyxcbiAgICBEQVRBX0FSSUFfTEFCRUxfT046ICdkYXRhLWFyaWEtbGFiZWwtb24nLFxuICAgIENIQU5HRV9FVkVOVDogJ01EQ0ljb25CdXR0b25Ub2dnbGU6Y2hhbmdlJyxcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0aGUgaWNvbiBidXR0b24gaGFzIGFuIGFyaWEgbGFiZWwgdGhhdCBjaGFuZ2VzIGRlcGVuZGluZyBvblxuICAgICAgICAgKiB0b2dnbGVkIHN0YXRlLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuaGFzVG9nZ2xlZEFyaWFMYWJlbCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDaGFuZ2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJpYUxhYmVsT24gPSB0aGlzLmFkYXB0ZXIuZ2V0QXR0cihzdHJpbmdzLkRBVEFfQVJJQV9MQUJFTF9PTik7XG4gICAgICAgIHZhciBhcmlhTGFiZWxPZmYgPSB0aGlzLmFkYXB0ZXIuZ2V0QXR0cihzdHJpbmdzLkRBVEFfQVJJQV9MQUJFTF9PRkYpO1xuICAgICAgICBpZiAoYXJpYUxhYmVsT24gJiYgYXJpYUxhYmVsT2ZmKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmdldEF0dHIoc3RyaW5ncy5BUklBX1BSRVNTRUQpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbjogQnV0dG9uIHNob3VsZCBub3Qgc2V0ICcgK1xuICAgICAgICAgICAgICAgICAgICAnYGFyaWEtcHJlc3NlZGAgaWYgaXQgaGFzIGEgdG9nZ2xlZCBhcmlhIGxhYmVsLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oYXNUb2dnbGVkQXJpYUxhYmVsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyKHN0cmluZ3MuQVJJQV9QUkVTU0VELCBTdHJpbmcodGhpcy5pc09uKCkpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIubm90aWZ5Q2hhbmdlKHsgaXNPbjogdGhpcy5pc09uKCkgfSk7XG4gICAgfTtcbiAgICBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLklDT05fQlVUVE9OX09OKTtcbiAgICB9O1xuICAgIE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoaXNPbikge1xuICAgICAgICBpZiAoaXNPbiA9PT0gdm9pZCAwKSB7IGlzT24gPSAhdGhpcy5pc09uKCk7IH1cbiAgICAgICAgLy8gVG9nZ2xlIFVJIGJhc2VkIG9uIHN0YXRlLlxuICAgICAgICBpZiAoaXNPbikge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuSUNPTl9CVVRUT05fT04pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSUNPTl9CVVRUT05fT04pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRvZ2dsZSBhcmlhIGF0dHJpYnV0ZXMgYmFzZWQgb24gc3RhdGUuXG4gICAgICAgIGlmICh0aGlzLmhhc1RvZ2dsZWRBcmlhTGFiZWwpIHtcbiAgICAgICAgICAgIHZhciBhcmlhTGFiZWwgPSBpc09uID9cbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZ2V0QXR0cihzdHJpbmdzLkRBVEFfQVJJQV9MQUJFTF9PTikgOlxuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5nZXRBdHRyKHN0cmluZ3MuREFUQV9BUklBX0xBQkVMX09GRik7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cihzdHJpbmdzLkFSSUFfTEFCRUwsIGFyaWFMYWJlbCB8fCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cihzdHJpbmdzLkFSSUFfUFJFU1NFRCwgXCJcIiArIGlzT24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0ljb25CdXR0b25Ub2dnbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIjxzdmVsdGU6Y29tcG9uZW50XG4gIHRoaXM9e2NvbXBvbmVudH1cbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U9e1tcbiAgICBbXG4gICAgICBSaXBwbGUsXG4gICAgICB7XG4gICAgICAgIHJpcHBsZSxcbiAgICAgICAgdW5ib3VuZGVkOiB0cnVlLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgZGlzYWJsZWQ6ICEhJCRyZXN0UHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgYWRkU3R5bGUsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZm9yd2FyZEV2ZW50cyxcbiAgICAuLi51c2UsXG4gIF19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1pY29uLWJ1dHRvbic6IHRydWUsXG4gICAgJ21kYy1pY29uLWJ1dHRvbi0tb24nOiBwcmVzc2VkICE9PSB1bmluaXRpYWxpemVkVmFsdWUgJiYgcHJlc3NlZCxcbiAgICAnbWRjLWNhcmRfX2FjdGlvbic6IGNvbnRleHQgPT09ICdjYXJkOmFjdGlvbicsXG4gICAgJ21kYy1jYXJkX19hY3Rpb24tLWljb24nOiBjb250ZXh0ID09PSAnY2FyZDphY3Rpb24nLFxuICAgICdtZGMtdG9wLWFwcC1iYXJfX25hdmlnYXRpb24taWNvbic6IGNvbnRleHQgPT09ICd0b3AtYXBwLWJhcjpuYXZpZ2F0aW9uJyxcbiAgICAnbWRjLXRvcC1hcHAtYmFyX19hY3Rpb24taXRlbSc6IGNvbnRleHQgPT09ICd0b3AtYXBwLWJhcjphY3Rpb24nLFxuICAgICdtZGMtc25hY2tiYXJfX2Rpc21pc3MnOiBjb250ZXh0ID09PSAnc25hY2tiYXI6YWN0aW9ucycsXG4gICAgJ21kYy1kYXRhLXRhYmxlX19wYWdpbmF0aW9uLWJ1dHRvbic6IGNvbnRleHQgPT09ICdkYXRhLXRhYmxlOnBhZ2luYXRpb24nLFxuICAgICdtZGMtZGF0YS10YWJsZV9fc29ydC1pY29uLWJ1dHRvbic6XG4gICAgICBjb250ZXh0ID09PSAnZGF0YS10YWJsZTpzb3J0YWJsZS1oZWFkZXItY2VsbCcsXG4gICAgJ21kYy1kaWFsb2dfX2Nsb3NlJzogY29udGV4dCA9PT0gJ2RpYWxvZzpoZWFkZXInICYmIGFjdGlvbiA9PT0gJ2Nsb3NlJyxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBzdHlsZT17T2JqZWN0LmVudHJpZXMoaW50ZXJuYWxTdHlsZXMpXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgLmNvbmNhdChbc3R5bGVdKVxuICAgIC5qb2luKCcgJyl9XG4gIGFyaWEtcHJlc3NlZD17cHJlc3NlZCAhPT0gdW5pbml0aWFsaXplZFZhbHVlXG4gICAgPyBwcmVzc2VkXG4gICAgICA/ICd0cnVlJ1xuICAgICAgOiAnZmFsc2UnXG4gICAgOiBudWxsfVxuICBhcmlhLWxhYmVsPXtwcmVzc2VkID8gYXJpYUxhYmVsT24gOiBhcmlhTGFiZWxPZmZ9XG4gIGRhdGEtYXJpYS1sYWJlbC1vbj17YXJpYUxhYmVsT259XG4gIGRhdGEtYXJpYS1sYWJlbC1vZmY9e2FyaWFMYWJlbE9mZn1cbiAgYXJpYS1kZXNjcmliZWRieT17YXJpYURlc2NyaWJlZGJ5fVxuICBvbjpjbGljaz17KCkgPT4gaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlQ2xpY2soKX1cbiAgb246Y2xpY2s9eygpID0+XG4gICAgY29udGV4dCA9PT0gJ3RvcC1hcHAtYmFyOm5hdmlnYXRpb24nICYmXG4gICAgZGlzcGF0Y2goZWxlbWVudCwgJ1NNVUk6dG9wLWFwcC1iYXI6aWNvbi1idXR0b246bmF2Jyl9XG4gIHtocmVmfVxuICB7Li4uYWN0aW9uUHJvcH1cbiAgey4uLmludGVybmFsQXR0cnN9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3N2ZWx0ZTpjb21wb25lbnRcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgTURDSWNvbkJ1dHRvblRvZ2dsZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvaWNvbi1idXR0b24nO1xuICBpbXBvcnQgeyBvbkRlc3Ryb3ksIGdldENvbnRleHQsIHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIGRpc3BhdGNoLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG4gIGltcG9ydCBSaXBwbGUgZnJvbSAnQHNtdWkvcmlwcGxlJztcbiAgaW1wb3J0IEEgZnJvbSAnQHNtdWkvY29tbW9uL0Euc3ZlbHRlJztcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tICdAc211aS9jb21tb24vQnV0dG9uLnN2ZWx0ZSc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcbiAgbGV0IHVuaW5pdGlhbGl6ZWRWYWx1ZSA9ICgpID0+IHt9O1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgc3R5bGUgPSAnJztcbiAgZXhwb3J0IGxldCByaXBwbGUgPSB0cnVlO1xuICBleHBvcnQgbGV0IGNvbG9yID0gbnVsbDtcbiAgZXhwb3J0IGxldCB0b2dnbGUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBwcmVzc2VkID0gdW5pbml0aWFsaXplZFZhbHVlO1xuICBleHBvcnQgbGV0IGFyaWFMYWJlbE9uID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhcmlhTGFiZWxPZmYgPSBudWxsO1xuICBleHBvcnQgbGV0IGhyZWYgPSBudWxsO1xuICBleHBvcnQgbGV0IGFjdGlvbiA9IG51bGw7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnN0YW5jZTtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgaW50ZXJuYWxTdHlsZXMgPSB7fTtcbiAgbGV0IGludGVybmFsQXR0cnMgPSB7fTtcbiAgbGV0IGNvbnRleHQgPSBnZXRDb250ZXh0KCdTTVVJOmljb24tYnV0dG9uOmNvbnRleHQnKTtcbiAgbGV0IGFyaWFEZXNjcmliZWRieSA9IGdldENvbnRleHQoJ1NNVUk6aWNvbi1idXR0b246YXJpYS1kZXNjcmliZWRieScpO1xuXG4gIGV4cG9ydCBsZXQgY29tcG9uZW50ID0gaHJlZiA9PSBudWxsID8gQnV0dG9uIDogQTtcblxuICAkOiBhY3Rpb25Qcm9wID0gKCgpID0+IHtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2RhdGEtdGFibGU6cGFnaW5hdGlvbicpIHtcbiAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2ZpcnN0LXBhZ2UnOlxuICAgICAgICAgIHJldHVybiB7ICdkYXRhLWZpcnN0LXBhZ2UnOiAndHJ1ZScgfTtcbiAgICAgICAgY2FzZSAncHJldi1wYWdlJzpcbiAgICAgICAgICByZXR1cm4geyAnZGF0YS1wcmV2LXBhZ2UnOiAndHJ1ZScgfTtcbiAgICAgICAgY2FzZSAnbmV4dC1wYWdlJzpcbiAgICAgICAgICByZXR1cm4geyAnZGF0YS1uZXh0LXBhZ2UnOiAndHJ1ZScgfTtcbiAgICAgICAgY2FzZSAnbGFzdC1wYWdlJzpcbiAgICAgICAgICByZXR1cm4geyAnZGF0YS1sYXN0LXBhZ2UnOiAndHJ1ZScgfTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4geyAnZGF0YS1hY3Rpb24nOiAndHJ1ZScgfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09ICdkaWFsb2c6aGVhZGVyJykge1xuICAgICAgcmV0dXJuIHsgJ2RhdGEtbWRjLWRpYWxvZy1hY3Rpb24nOiBhY3Rpb24gfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgYWN0aW9uIH07XG4gICAgfVxuICB9KSgpO1xuXG4gIHNldENvbnRleHQoJ1NNVUk6aWNvbjpjb250ZXh0JywgJ2ljb24tYnV0dG9uJyk7XG5cbiAgbGV0IG9sZFRvZ2dsZSA9IG51bGw7XG4gICQ6IGlmIChlbGVtZW50ICYmIGdldEVsZW1lbnQoKSAmJiB0b2dnbGUgIT09IG9sZFRvZ2dsZSkge1xuICAgIGlmICh0b2dnbGUgJiYgIWluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBNRENJY29uQnV0dG9uVG9nZ2xlRm91bmRhdGlvbih7XG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICBoYXNDbGFzcyxcbiAgICAgICAgbm90aWZ5Q2hhbmdlOiAoZXZ0RGF0YSkgPT4ge1xuICAgICAgICAgIGhhbmRsZUNoYW5nZShldnREYXRhKTtcbiAgICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdNRENJY29uQnV0dG9uVG9nZ2xlOmNoYW5nZScsIGV2dERhdGEpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgZ2V0QXR0cixcbiAgICAgICAgc2V0QXR0cjogYWRkQXR0cixcbiAgICAgIH0pO1xuICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuICAgIH0gZWxzZSBpZiAoIXRvZ2dsZSAmJiBpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgICAgaW50ZXJuYWxDbGFzc2VzID0ge307XG4gICAgICBpbnRlcm5hbEF0dHJzID0ge307XG4gICAgfVxuICAgIG9sZFRvZ2dsZSA9IHRvZ2dsZTtcbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5pc09uKCkgIT09IHByZXNzZWQpIHtcbiAgICBpbnN0YW5jZS50b2dnbGUocHJlc3NlZCk7XG4gIH1cblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGluc3RhbmNlICYmIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXNcbiAgICAgID8gaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV1cbiAgICAgIDogZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGludGVybmFsU3R5bGVzW25hbWVdO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcyA9IGludGVybmFsU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBdHRyKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSBpbiBpbnRlcm5hbEF0dHJzXG4gICAgICA/IGludGVybmFsQXR0cnNbbmFtZV1cbiAgICAgIDogZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoaW50ZXJuYWxBdHRyc1tuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgIGludGVybmFsQXR0cnNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZ0RGF0YSkge1xuICAgIHByZXNzZWQgPSBldnREYXRhLmlzT247XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRFbGVtZW50KCk7XG4gIH1cbjwvc2NyaXB0PlxuIiwieyNpZiBjb25maWd9XG4gIDxTbmFja2JhclxuICAgIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgICBvbjpNRENTbmFja2JhcjpjbG9zZWQ9e2hhbmRsZUNsb3NlZH1cbiAgICBsYWJlbFRleHQ9e2NvbmZpZy5sYWJlbH1cbiAgICB7Li4uKGNvbmZpZyAmJiBjb25maWcucHJvcHMpIHx8IHt9fVxuICAgIHsuLi5wcmVmaXhGaWx0ZXIoJCRyZXN0UHJvcHMsICdzbmFja2JhciQnKX1cbiAgPlxuICAgIDxMYWJlbCB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAnbGFiZWwkJyl9IC8+XG4gICAgeyNpZiBjb25maWcuYWN0aW9ucyB8fCBjb25maWcuZGlzbWlzc0J1dHRvbn1cbiAgICAgIDxBY3Rpb25zPlxuICAgICAgICB7I2lmIGNvbmZpZy5hY3Rpb25zfVxuICAgICAgICAgIHsjZWFjaCBjb25maWcuYWN0aW9ucyBhcyBhY3Rpb259XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIG9uOmNsaWNrPXsoZSkgPT4gYWN0aW9uLm9uQ2xpY2sgJiYgYWN0aW9uLm9uQ2xpY2soZSl9XG4gICAgICAgICAgICAgIHsuLi5wcmVmaXhGaWx0ZXIoJCRyZXN0UHJvcHMsICdhY3Rpb24kJyl9PnthY3Rpb24udGV4dH08L0J1dHRvblxuICAgICAgICAgICAgPlxuICAgICAgICAgIHsvZWFjaH1cbiAgICAgICAgey9pZn1cbiAgICAgICAgeyNpZiBjb25maWcuZGlzbWlzc0J1dHRvbn1cbiAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgb246Y2xpY2s9eyhlKSA9PiBjb25maWcub25EaXNtaXNzICYmIGNvbmZpZy5vbkRpc21pc3MoZSl9XG4gICAgICAgICAgICB0aXRsZT17Y29uZmlnLmRpc21pc3NUaXRsZSB8fCAnRGlzbWlzcyd9XG4gICAgICAgICAgICB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAnZGlzbWlzcyQnKX1cbiAgICAgICAgICAgID57Y29uZmlnLmRpc21pc3NUZXh0IHx8ICdjbG9zZSd9PC9JY29uQnV0dG9uXG4gICAgICAgICAgPlxuICAgICAgICB7L2lmfVxuICAgICAgPC9BY3Rpb25zPlxuICAgIHsvaWZ9XG4gIDwvU25hY2tiYXI+XG57L2lmfVxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBwcmVmaXhGaWx0ZXIgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgTGFiZWwgZnJvbSAnQHNtdWkvY29tbW9uL0NvbW1vbkxhYmVsLnN2ZWx0ZSc7XG4gIGltcG9ydCBCdXR0b24gZnJvbSAnQHNtdWkvYnV0dG9uL0J1dHRvbi5zdmVsdGUnO1xuICBpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAc211aS9pY29uLWJ1dHRvbi9JY29uQnV0dG9uLnN2ZWx0ZSc7XG4gIGltcG9ydCBTbmFja2JhciBmcm9tICcuLi9TbmFja2Jhci5zdmVsdGUnO1xuICBpbXBvcnQgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zLmpzJztcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IHNuYWNrYmFycyA9IFtdO1xuICBsZXQgY29uZmlnID0gbnVsbDtcbiAgbGV0IHdhaXRpbmcgPSBmYWxzZTtcblxuICAkOiBpZiAoc25hY2tiYXJzLmxlbmd0aCAmJiAhY29uZmlnKSB7XG4gICAgY29uZmlnID0gc25hY2tiYXJzWzBdO1xuICAgIHdhaXRpbmcgPSB0cnVlO1xuICB9XG5cbiAgJDogaWYgKGVsZW1lbnQgJiYgd2FpdGluZyAmJiAhZWxlbWVudC5pc09wZW4oKSkge1xuICAgIGVsZW1lbnQub3BlbigpO1xuICAgIHdhaXRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlZChlKSB7XG4gICAgaWYgKGNvbmZpZy5vbkNsb3NlKSB7XG4gICAgICBjb25maWcub25DbG9zZShlKTtcbiAgICB9XG4gICAgc25hY2tiYXJzLnNwbGljZSgwLCAxKTtcbiAgICBzbmFja2JhcnMgPSBzbmFja2JhcnM7XG4gICAgY29uZmlnID0gbnVsbDtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBwdXNoKGNvbmZpZykge1xuICAgIHNuYWNrYmFycy5wdXNoKGNvbmZpZyk7XG4gICAgc25hY2tiYXJzID0gc25hY2tiYXJzO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsIjxLaXRjaGVuIGJpbmQ6dGhpcz17a2l0Y2hlbn0gZGlzbWlzcyRjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgLz5cblxuPEJ1dHRvbiBvbjpjbGljaz17cHVzaFRvS2l0Y2hlbn0+PExhYmVsPlB1c2ggYSBOZXcgU25hY2tiYXI8L0xhYmVsPjwvQnV0dG9uPlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+Q2xvc2VkIFJlYXNvbjoge3JlYXNvbn08L3ByZT5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5BY3Rpb246IHthY3Rpb259PC9wcmU+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBsZXQgY291bnRlciA9IDA7XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IEtpdGNoZW4gZnJvbSAnQHNtdWkvc25hY2tiYXIva2l0Y2hlbi9pbmRleCc7XG4gIGltcG9ydCBCdXR0b24sIHsgTGFiZWwgfSBmcm9tICdAc211aS9idXR0b24nO1xuXG4gIGxldCBraXRjaGVuO1xuICBsZXQgcmVhc29uID0gJ25vdGhpbmcgeWV0JztcbiAgbGV0IGFjdGlvbiA9ICdub3RoaW5nIHlldCc7XG5cbiAgZnVuY3Rpb24gcHVzaFRvS2l0Y2hlbigpIHtcbiAgICBraXRjaGVuLnB1c2goe1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgdmFyaWFudDogJ3N0YWNrZWQnLFxuICAgICAgfSxcbiAgICAgIGxhYmVsOlxuICAgICAgICBcIlRoaXMgaXMgYSBzbmFja2JhciBnZW5lcmF0ZWQgYnkgdGhlIGtpdGNoZW4uIEhlcmUncyBhIGNvdW50ZXI6IFwiICtcbiAgICAgICAgY291bnRlcisrLFxuICAgICAgYWN0aW9uczogW1xuICAgICAgICB7XG4gICAgICAgICAgb25DbGljazogKCkgPT4gKGFjdGlvbiA9ICdTb21ldGhpbmcnKSxcbiAgICAgICAgICB0ZXh0OiAnU29tZXRoaW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IChhY3Rpb24gPSAnQW5vdGhlcicpLFxuICAgICAgICAgIHRleHQ6ICdBbm90aGVyJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkaXNtaXNzQnV0dG9uOiB0cnVlLFxuICAgICAgb25EaXNtaXNzOiAoKSA9PiAoYWN0aW9uID0gJ0Rpc21pc3NlZCcpLFxuICAgICAgb25DbG9zZTogKGUpID0+IHtcbiAgICAgICAgcmVhc29uID0gZS5kZXRhaWwucmVhc29uO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5TbmFja2JhcnMgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+U25hY2tiYXJzPC9oMj5cblxuICA8cHJlIGNsYXNzPVwiZGVtby1zcGFjZWRcIj5ucG0gaSAtRCBAc211aS9zbmFja2JhcjwvcHJlPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U2ltcGxlfSBmaWxlPVwic25hY2tiYXIvX1NpbXBsZS5zdmVsdGVcIiAvPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17TGVhZGluZ1dpdGhBY3Rpb259IGZpbGU9XCJzbmFja2Jhci9fTGVhZGluZ1dpdGhBY3Rpb24uc3ZlbHRlXCI+XG4gICAgTGVhZGluZyB3aXRoIGFjdGlvblxuICA8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtTdGFja2VkV2l0aEFjdGlvbn0gZmlsZT1cInNuYWNrYmFyL19TdGFja2VkV2l0aEFjdGlvbi5zdmVsdGVcIj5cbiAgICBTdGFja2VkIHdpdGggYWN0aW9uXG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0R5bmFtaWNUZXh0fSBmaWxlPVwic25hY2tiYXIvX0R5bmFtaWNUZXh0LnN2ZWx0ZVwiPlxuICAgIFVzaW5nIGR5bmFtaWMgdGV4dFxuICA8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtLaXRjaGVufSBmaWxlPVwic25hY2tiYXIvX0tpdGNoZW4uc3ZlbHRlXCI+XG4gICAgVGhlIFwiS2l0Y2hlblwiIFNuYWNrYmFyIGdlbmVyYXRvclxuICA8L0RlbW8+XG48L3NlY3Rpb24+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBEZW1vIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRGVtby5zdmVsdGUnO1xuICBpbXBvcnQgU2ltcGxlIGZyb20gJy4vX1NpbXBsZS5zdmVsdGUnO1xuICBpbXBvcnQgTGVhZGluZ1dpdGhBY3Rpb24gZnJvbSAnLi9fTGVhZGluZ1dpdGhBY3Rpb24uc3ZlbHRlJztcbiAgaW1wb3J0IFN0YWNrZWRXaXRoQWN0aW9uIGZyb20gJy4vX1N0YWNrZWRXaXRoQWN0aW9uLnN2ZWx0ZSc7XG4gIGltcG9ydCBEeW5hbWljVGV4dCBmcm9tICcuL19EeW5hbWljVGV4dC5zdmVsdGUnO1xuICBpbXBvcnQgS2l0Y2hlbiBmcm9tICcuL19LaXRjaGVuLnN2ZWx0ZSc7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6WyJjc3NDbGFzc2VzIiwic3RyaW5ncyIsIm51bWJlcnMiLCJtYXRjaGVzIiwiYXBwbHlQYXNzaXZlIiwidXRpbC5hbm5vdW5jZSIsInV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJLaXRjaGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFlBQVUsR0FBRztBQUNqQixJQUFJLE9BQU8sRUFBRSx1QkFBdUI7QUFDcEMsSUFBSSxJQUFJLEVBQUUsb0JBQW9CO0FBQzlCLElBQUksT0FBTyxFQUFFLHVCQUF1QjtBQUNwQyxDQUFDLENBQUM7QUFDRixJQUFJQyxTQUFPLEdBQUc7QUFDZCxJQUFJLGVBQWUsRUFBRSx1QkFBdUI7QUFDNUMsSUFBSSx5QkFBeUIsRUFBRSw4QkFBOEI7QUFDN0QsSUFBSSxZQUFZLEVBQUUsb0JBQW9CO0FBQ3RD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NxQmQsaUJBQWlCO0tBQ2pCLG9CQUFvQjs7Ozs7Ozs7O0dBeEJMLGlCQUFpQjs7Ozs7OztHQU9qQixvQkFBb0I7Ozs7OzZCQUlqQixpQkFBaUIsQ0FBQyxJQUFJOytCQUd0QixvQkFBb0IsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dURDZGEsR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBV3RDLEdBQU07Ozs7Ozs7Ozs7O3lDQUFOLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUFBTixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBTXBDLFFBQVE7S0FDUixNQUFNLEdBQUcsYUFBYTs7VUFFakIsWUFBWSxDQUFDLENBQUM7a0JBQ3JCLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7Ozs7Ozs7O0dBckJDLFFBQVE7Ozs7OzZCQU9iLFFBQVEsQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
