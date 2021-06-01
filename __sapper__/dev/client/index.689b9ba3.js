import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, W as compute_rest_props, v as validate_slots, X as getContext, Y as get_current_component, Z as setContext, _ as onDestroy, $ as assign, a0 as exclude_internal_props, q as create_component, a1 as empty, A as claim_component, H as mount_component, F as insert_dev, a2 as get_spread_update, a3 as get_spread_object, a4 as group_outros, K as transition_out, M as destroy_component, a5 as check_outros, J as transition_in, u as detach_dev, a6 as binding_callbacks, a7 as create_slot, a8 as update_slot, ay as validate_store, az as component_subscribe, aA as writable, ah as onMount, aB as set_store_value, p as element, x as claim_element, y as children, E as attr_dev, D as add_location, ax as listen_dev, O as noop, o as space, w as claim_space, a9 as set_attributes, G as append_dev, aa as action_destroyer, ab as is_function, ac as run_all, aF as globals, ak as bind, t as text, z as claim_text, al as add_flush_callback, aw as set_data_dev, L as List, I as Item, T as Text, ag as validate_each_argument, aj as destroy_each, as as IconButton, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { B as Button_1 } from './Button.d66ce348.js';
import { C as CommonLabel } from './CommonLabel.6290f478.js';
import { G as Graphic } from './Graphic.805b8c09.js';
import { R as Radio } from './Radio.52add3e3.js';
import { S as Slider } from './Slider.91ac28a7.js';
import { F as FormField } from './FormField.2971fa15.js';
import { L as LoremIpsum } from './LoremIpsum.116fcbde.js';

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
function createFocusTrapInstance(surfaceEl, focusTrapFactory, initialFocusEl) {
    return focusTrapFactory(surfaceEl, { initialFocusEl: initialFocusEl });
}
function isScrollable(el) {
    return el ? el.scrollHeight > el.offsetHeight : false;
}
/**
 * For scrollable content, returns true if the content has not been scrolled
 * (that is, the scroll content is as the "top"). This is used in full-screen
 * dialogs, where the scroll divider is expected only to appear once the
 * content has been scrolled "underneath" the header bar.
 */
function isScrollAtTop(el) {
    return el ? el.scrollTop === 0 : false;
}
/**
 * For scrollable content, returns true if the content has been scrolled all the
 * way to the bottom. This is used in full-screen dialogs, where the footer
 * scroll divider is expected only to appear when the content is "cut-off" by
 * the footer bar.
 */
function isScrollAtBottom(el) {
    return el ? Math.ceil(el.scrollHeight - el.scrollTop) === el.clientHeight :
        false;
}
function areTopsMisaligned(els) {
    var tops = new Set();
    [].forEach.call(els, function (el) { return tops.add(el.offsetTop); });
    return tops.size > 1;
}

var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createFocusTrapInstance: createFocusTrapInstance,
    isScrollable: isScrollable,
    isScrollAtTop: isScrollAtTop,
    isScrollAtBottom: isScrollAtBottom,
    areTopsMisaligned: areTopsMisaligned
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
var FOCUS_SENTINEL_CLASS = 'mdc-dom-focus-sentinel';
/**
 * Utility to trap focus in a given root element, e.g. for modal components such
 * as dialogs. The root should have at least one focusable child element,
 * for setting initial focus when trapping focus.
 * Also tracks the previously focused element, and restores focus to that
 * element when releasing focus.
 */
var FocusTrap = /** @class */ (function () {
    function FocusTrap(root, options) {
        if (options === void 0) { options = {}; }
        this.root = root;
        this.options = options;
        // Previously focused element before trapping focus.
        this.elFocusedBeforeTrapFocus = null;
    }
    /**
     * Traps focus in `root`. Also focuses on either `initialFocusEl` if set;
     * otherwises sets initial focus to the first focusable child element.
     */
    FocusTrap.prototype.trapFocus = function () {
        var focusableEls = this.getFocusableElements(this.root);
        if (focusableEls.length === 0) {
            throw new Error('FocusTrap: Element must have at least one focusable child.');
        }
        this.elFocusedBeforeTrapFocus =
            document.activeElement instanceof HTMLElement ? document.activeElement :
                null;
        this.wrapTabFocus(this.root);
        if (!this.options.skipInitialFocus) {
            this.focusInitialElement(focusableEls, this.options.initialFocusEl);
        }
    };
    /**
     * Releases focus from `root`. Also restores focus to the previously focused
     * element.
     */
    FocusTrap.prototype.releaseFocus = function () {
        [].slice.call(this.root.querySelectorAll("." + FOCUS_SENTINEL_CLASS))
            .forEach(function (sentinelEl) {
            sentinelEl.parentElement.removeChild(sentinelEl);
        });
        if (!this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus) {
            this.elFocusedBeforeTrapFocus.focus();
        }
    };
    /**
     * Wraps tab focus within `el` by adding two hidden sentinel divs which are
     * used to mark the beginning and the end of the tabbable region. When
     * focused, these sentinel elements redirect focus to the first/last
     * children elements of the tabbable region, ensuring that focus is trapped
     * within that region.
     */
    FocusTrap.prototype.wrapTabFocus = function (el) {
        var _this = this;
        var sentinelStart = this.createSentinel();
        var sentinelEnd = this.createSentinel();
        sentinelStart.addEventListener('focus', function () {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) {
                focusableEls[focusableEls.length - 1].focus();
            }
        });
        sentinelEnd.addEventListener('focus', function () {
            var focusableEls = _this.getFocusableElements(el);
            if (focusableEls.length > 0) {
                focusableEls[0].focus();
            }
        });
        el.insertBefore(sentinelStart, el.children[0]);
        el.appendChild(sentinelEnd);
    };
    /**
     * Focuses on `initialFocusEl` if defined and a child of the root element.
     * Otherwise, focuses on the first focusable child element of the root.
     */
    FocusTrap.prototype.focusInitialElement = function (focusableEls, initialFocusEl) {
        var focusIndex = 0;
        if (initialFocusEl) {
            focusIndex = Math.max(focusableEls.indexOf(initialFocusEl), 0);
        }
        focusableEls[focusIndex].focus();
    };
    FocusTrap.prototype.getFocusableElements = function (root) {
        var focusableEls = [].slice.call(root.querySelectorAll('[autofocus], [tabindex], a, input, textarea, select, button'));
        return focusableEls.filter(function (el) {
            var isDisabledOrHidden = el.getAttribute('aria-disabled') === 'true' ||
                el.getAttribute('disabled') != null ||
                el.getAttribute('hidden') != null ||
                el.getAttribute('aria-hidden') === 'true';
            var isTabbableAndVisible = el.tabIndex >= 0 &&
                el.getBoundingClientRect().width > 0 &&
                !el.classList.contains(FOCUS_SENTINEL_CLASS) && !isDisabledOrHidden;
            var isProgrammaticallyHidden = false;
            if (isTabbableAndVisible) {
                var style = getComputedStyle(el);
                isProgrammaticallyHidden =
                    style.display === 'none' || style.visibility === 'hidden';
            }
            return isTabbableAndVisible && !isProgrammaticallyHidden;
        });
    };
    FocusTrap.prototype.createSentinel = function () {
        var sentinel = document.createElement('div');
        sentinel.setAttribute('tabindex', '0');
        // Don't announce in screen readers.
        sentinel.setAttribute('aria-hidden', 'true');
        sentinel.classList.add(FOCUS_SENTINEL_CLASS);
        return sentinel;
    };
    return FocusTrap;
}());

var domFocusTrap = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FocusTrap: FocusTrap
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
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
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
    matches: matches,
    estimateScrollWidth: estimateScrollWidth
});

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
var cssClasses = {
    CLOSING: 'mdc-dialog--closing',
    OPEN: 'mdc-dialog--open',
    OPENING: 'mdc-dialog--opening',
    SCROLLABLE: 'mdc-dialog--scrollable',
    SCROLL_LOCK: 'mdc-dialog-scroll-lock',
    STACKED: 'mdc-dialog--stacked',
    FULLSCREEN: 'mdc-dialog--fullscreen',
    // Class for showing a scroll divider on full-screen dialog header element.
    // Should only be displayed on scrollable content, when the dialog content is
    // scrolled "underneath" the header.
    SCROLL_DIVIDER_HEADER: 'mdc-dialog-scroll-divider-header',
    // Class for showing a scroll divider on a full-screen dialog footer element.
    // Should only be displayed on scrolalble content, when the dialog content is
    // obscured "underneath" the footer.
    SCROLL_DIVIDER_FOOTER: 'mdc-dialog-scroll-divider-footer',
    // The "surface scrim" is a scrim covering only the surface of a dialog. This
    // is used in situations where a confirmation dialog is shown over an already
    // opened full-screen dialog. On larger screen-sizes, the full-screen dialog
    // is sized as a modal and so in these situations we display a "surface scrim"
    // to prevent a "double scrim" (where the scrim from the secondary
    // confirmation dialog would overlap with the scrim from the full-screen
    // dialog).
    SURFACE_SCRIM_SHOWN: 'mdc-dialog__surface-scrim--shown',
    // "Showing" animating class for the surface-scrim.
    SURFACE_SCRIM_SHOWING: 'mdc-dialog__surface-scrim--showing',
    // "Hiding" animating class for the surface-scrim.
    SURFACE_SCRIM_HIDING: 'mdc-dialog__surface-scrim--hiding',
    // Class to hide a dialog's scrim (used in conjunction with a surface-scrim).
    // Note that we only hide the original scrim rather than removing it entirely
    // to prevent interactions with the content behind this scrim, and to capture
    // scrim clicks.
    SCRIM_HIDDEN: 'mdc-dialog__scrim--hidden',
};
var strings = {
    ACTION_ATTRIBUTE: 'data-mdc-dialog-action',
    BUTTON_DEFAULT_ATTRIBUTE: 'data-mdc-dialog-button-default',
    BUTTON_SELECTOR: '.mdc-dialog__button',
    CLOSED_EVENT: 'MDCDialog:closed',
    CLOSE_ACTION: 'close',
    CLOSING_EVENT: 'MDCDialog:closing',
    CONTAINER_SELECTOR: '.mdc-dialog__container',
    CONTENT_SELECTOR: '.mdc-dialog__content',
    DESTROY_ACTION: 'destroy',
    INITIAL_FOCUS_ATTRIBUTE: 'data-mdc-dialog-initial-focus',
    OPENED_EVENT: 'MDCDialog:opened',
    OPENING_EVENT: 'MDCDialog:opening',
    SCRIM_SELECTOR: '.mdc-dialog__scrim',
    SUPPRESS_DEFAULT_PRESS_SELECTOR: [
        'textarea',
        '.mdc-menu .mdc-list-item',
        '.mdc-menu .mdc-deprecated-list-item',
    ].join(', '),
    SURFACE_SELECTOR: '.mdc-dialog__surface',
};
var numbers = {
    DIALOG_ANIMATION_CLOSE_TIME_MS: 75,
    DIALOG_ANIMATION_OPEN_TIME_MS: 150,
};

/**
 * @license
 * Copyright 2017 Google Inc.
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
    AnimationKeys["POLL_SCROLL_POS"] = "poll_scroll_position";
    AnimationKeys["POLL_LAYOUT_CHANGE"] = "poll_layout_change";
})(AnimationKeys || (AnimationKeys = {}));
var MDCDialogFoundation = /** @class */ (function (_super) {
    __extends(MDCDialogFoundation, _super);
    function MDCDialogFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCDialogFoundation.defaultAdapter), adapter)) || this;
        _this.dialogOpen = false;
        _this.isFullscreen = false;
        _this.animationFrame = 0;
        _this.animationTimer = 0;
        _this.escapeKeyAction = strings.CLOSE_ACTION;
        _this.scrimClickAction = strings.CLOSE_ACTION;
        _this.autoStackButtons = true;
        _this.areButtonsStacked = false;
        _this.suppressDefaultPressSelector = strings.SUPPRESS_DEFAULT_PRESS_SELECTOR;
        _this.animFrame = new AnimationFrame();
        _this.contentScrollHandler = function () {
            _this.handleScrollEvent();
        };
        _this.windowResizeHandler = function () {
            _this.layout();
        };
        _this.windowOrientationChangeHandler = function () {
            _this.layout();
        };
        return _this;
    }
    Object.defineProperty(MDCDialogFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCDialogFoundation, "defaultAdapter", {
        get: function () {
            return {
                addBodyClass: function () { return undefined; },
                addClass: function () { return undefined; },
                areButtonsStacked: function () { return false; },
                clickDefaultButton: function () { return undefined; },
                eventTargetMatches: function () { return false; },
                getActionFromEvent: function () { return ''; },
                getInitialFocusEl: function () { return null; },
                hasClass: function () { return false; },
                isContentScrollable: function () { return false; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                releaseFocus: function () { return undefined; },
                removeBodyClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                reverseButtons: function () { return undefined; },
                trapFocus: function () { return undefined; },
                registerContentEventHandler: function () { return undefined; },
                deregisterContentEventHandler: function () { return undefined; },
                isScrollableContentAtTop: function () { return false; },
                isScrollableContentAtBottom: function () { return false; },
                registerWindowEventHandler: function () { return undefined; },
                deregisterWindowEventHandler: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCDialogFoundation.prototype.init = function () {
        if (this.adapter.hasClass(cssClasses.STACKED)) {
            this.setAutoStackButtons(false);
        }
        this.isFullscreen = this.adapter.hasClass(cssClasses.FULLSCREEN);
    };
    MDCDialogFoundation.prototype.destroy = function () {
        if (this.dialogOpen) {
            this.close(strings.DESTROY_ACTION);
        }
        if (this.animationTimer) {
            clearTimeout(this.animationTimer);
            this.handleAnimationTimerEnd();
        }
        if (this.isFullscreen) {
            this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
        }
        this.animFrame.cancelAll();
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
    };
    MDCDialogFoundation.prototype.open = function (dialogOptions) {
        var _this = this;
        this.dialogOpen = true;
        this.adapter.notifyOpening();
        this.adapter.addClass(cssClasses.OPENING);
        if (this.isFullscreen) {
            // A scroll event listener is registered even if the dialog is not
            // scrollable on open, since the window resize event, or orientation
            // change may make the dialog scrollable after it is opened.
            this.adapter.registerContentEventHandler('scroll', this.contentScrollHandler);
        }
        if (dialogOptions && dialogOptions.isAboveFullscreenDialog) {
            this.adapter.addClass(cssClasses.SCRIM_HIDDEN);
        }
        this.adapter.registerWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.registerWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        // Wait a frame once display is no longer "none", to establish basis for
        // animation
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(cssClasses.OPEN);
            _this.adapter.addBodyClass(cssClasses.SCROLL_LOCK);
            _this.layout();
            _this.animationTimer = setTimeout(function () {
                _this.handleAnimationTimerEnd();
                _this.adapter.trapFocus(_this.adapter.getInitialFocusEl());
                _this.adapter.notifyOpened();
            }, numbers.DIALOG_ANIMATION_OPEN_TIME_MS);
        });
    };
    MDCDialogFoundation.prototype.close = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (!this.dialogOpen) {
            // Avoid redundant close calls (and events), e.g. from keydown on elements
            // that inherently emit click
            return;
        }
        this.dialogOpen = false;
        this.adapter.notifyClosing(action);
        this.adapter.addClass(cssClasses.CLOSING);
        this.adapter.removeClass(cssClasses.OPEN);
        this.adapter.removeBodyClass(cssClasses.SCROLL_LOCK);
        if (this.isFullscreen) {
            this.adapter.deregisterContentEventHandler('scroll', this.contentScrollHandler);
        }
        this.adapter.deregisterWindowEventHandler('resize', this.windowResizeHandler);
        this.adapter.deregisterWindowEventHandler('orientationchange', this.windowOrientationChangeHandler);
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = setTimeout(function () {
            _this.adapter.releaseFocus();
            _this.handleAnimationTimerEnd();
            _this.adapter.notifyClosed(action);
        }, numbers.DIALOG_ANIMATION_CLOSE_TIME_MS);
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Shows the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.showSurfaceScrim = function () {
        var _this = this;
        this.adapter.addClass(cssClasses.SURFACE_SCRIM_SHOWING);
        this.runNextAnimationFrame(function () {
            _this.adapter.addClass(cssClasses.SURFACE_SCRIM_SHOWN);
        });
    };
    /**
     * Used only in instances of showing a secondary dialog over a full-screen
     * dialog. Hides the "surface scrim" displayed over the full-screen dialog.
     */
    MDCDialogFoundation.prototype.hideSurfaceScrim = function () {
        this.adapter.removeClass(cssClasses.SURFACE_SCRIM_SHOWN);
        this.adapter.addClass(cssClasses.SURFACE_SCRIM_HIDING);
    };
    /**
     * Handles `transitionend` event triggered when surface scrim animation is
     * finished.
     */
    MDCDialogFoundation.prototype.handleSurfaceScrimTransitionEnd = function () {
        this.adapter.removeClass(cssClasses.SURFACE_SCRIM_HIDING);
        this.adapter.removeClass(cssClasses.SURFACE_SCRIM_SHOWING);
    };
    MDCDialogFoundation.prototype.isOpen = function () {
        return this.dialogOpen;
    };
    MDCDialogFoundation.prototype.getEscapeKeyAction = function () {
        return this.escapeKeyAction;
    };
    MDCDialogFoundation.prototype.setEscapeKeyAction = function (action) {
        this.escapeKeyAction = action;
    };
    MDCDialogFoundation.prototype.getScrimClickAction = function () {
        return this.scrimClickAction;
    };
    MDCDialogFoundation.prototype.setScrimClickAction = function (action) {
        this.scrimClickAction = action;
    };
    MDCDialogFoundation.prototype.getAutoStackButtons = function () {
        return this.autoStackButtons;
    };
    MDCDialogFoundation.prototype.setAutoStackButtons = function (autoStack) {
        this.autoStackButtons = autoStack;
    };
    MDCDialogFoundation.prototype.getSuppressDefaultPressSelector = function () {
        return this.suppressDefaultPressSelector;
    };
    MDCDialogFoundation.prototype.setSuppressDefaultPressSelector = function (selector) {
        this.suppressDefaultPressSelector = selector;
    };
    MDCDialogFoundation.prototype.layout = function () {
        var _this = this;
        this.animFrame.request(AnimationKeys.POLL_LAYOUT_CHANGE, function () {
            _this.layoutInternal();
        });
    };
    /** Handles click on the dialog root element. */
    MDCDialogFoundation.prototype.handleClick = function (evt) {
        var isScrim = this.adapter.eventTargetMatches(evt.target, strings.SCRIM_SELECTOR);
        // Check for scrim click first since it doesn't require querying ancestors.
        if (isScrim && this.scrimClickAction !== '') {
            this.close(this.scrimClickAction);
        }
        else {
            var action = this.adapter.getActionFromEvent(evt);
            if (action) {
                this.close(action);
            }
        }
    };
    /** Handles keydown on the dialog root element. */
    MDCDialogFoundation.prototype.handleKeydown = function (evt) {
        var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
        if (!isEnter) {
            return;
        }
        var action = this.adapter.getActionFromEvent(evt);
        if (action) {
            // Action button callback is handled in `handleClick`,
            // since space/enter keydowns on buttons trigger click events.
            return;
        }
        // `composedPath` is used here, when available, to account for use cases
        // where a target meant to suppress the default press behaviour
        // may exist in a shadow root.
        // For example, a textarea inside a web component:
        // <mwc-dialog>
        //   <horizontal-layout>
        //     #shadow-root (open)
        //       <mwc-textarea>
        //         #shadow-root (open)
        //           <textarea></textarea>
        //       </mwc-textarea>
        //   </horizontal-layout>
        // </mwc-dialog>
        var target = evt.composedPath ? evt.composedPath()[0] : evt.target;
        var isDefault = this.suppressDefaultPressSelector ?
            !this.adapter.eventTargetMatches(target, this.suppressDefaultPressSelector) :
            true;
        if (isEnter && isDefault) {
            this.adapter.clickDefaultButton();
        }
    };
    /** Handles keydown on the document. */
    MDCDialogFoundation.prototype.handleDocumentKeydown = function (evt) {
        var isEscape = evt.key === 'Escape' || evt.keyCode === 27;
        if (isEscape && this.escapeKeyAction !== '') {
            this.close(this.escapeKeyAction);
        }
    };
    /**
     * Handles scroll event on the dialog's content element -- showing a scroll
     * divider on the header or footer based on the scroll position. This handler
     * should only be registered on full-screen dialogs with scrollable content.
     */
    MDCDialogFoundation.prototype.handleScrollEvent = function () {
        var _this = this;
        // Since scroll events can fire at a high rate, we throttle these events by
        // using requestAnimationFrame.
        this.animFrame.request(AnimationKeys.POLL_SCROLL_POS, function () {
            _this.toggleScrollDividerHeader();
            _this.toggleScrollDividerFooter();
        });
    };
    MDCDialogFoundation.prototype.layoutInternal = function () {
        if (this.autoStackButtons) {
            this.detectStackedButtons();
        }
        this.toggleScrollableClasses();
    };
    MDCDialogFoundation.prototype.handleAnimationTimerEnd = function () {
        this.animationTimer = 0;
        this.adapter.removeClass(cssClasses.OPENING);
        this.adapter.removeClass(cssClasses.CLOSING);
    };
    /**
     * Runs the given logic on the next animation frame, using setTimeout to
     * factor in Firefox reflow behavior.
     */
    MDCDialogFoundation.prototype.runNextAnimationFrame = function (callback) {
        var _this = this;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame(function () {
            _this.animationFrame = 0;
            clearTimeout(_this.animationTimer);
            _this.animationTimer = setTimeout(callback, 0);
        });
    };
    MDCDialogFoundation.prototype.detectStackedButtons = function () {
        // Remove the class first to let us measure the buttons' natural positions.
        this.adapter.removeClass(cssClasses.STACKED);
        var areButtonsStacked = this.adapter.areButtonsStacked();
        if (areButtonsStacked) {
            this.adapter.addClass(cssClasses.STACKED);
        }
        if (areButtonsStacked !== this.areButtonsStacked) {
            this.adapter.reverseButtons();
            this.areButtonsStacked = areButtonsStacked;
        }
    };
    MDCDialogFoundation.prototype.toggleScrollableClasses = function () {
        // Remove the class first to let us measure the natural height of the
        // content.
        this.adapter.removeClass(cssClasses.SCROLLABLE);
        if (this.adapter.isContentScrollable()) {
            this.adapter.addClass(cssClasses.SCROLLABLE);
            if (this.isFullscreen) {
                // If dialog is full-screen and scrollable, check if a scroll divider
                // should be shown.
                this.toggleScrollDividerHeader();
                this.toggleScrollDividerFooter();
            }
        }
    };
    MDCDialogFoundation.prototype.toggleScrollDividerHeader = function () {
        if (!this.adapter.isScrollableContentAtTop()) {
            this.adapter.addClass(cssClasses.SCROLL_DIVIDER_HEADER);
        }
        else if (this.adapter.hasClass(cssClasses.SCROLL_DIVIDER_HEADER)) {
            this.adapter.removeClass(cssClasses.SCROLL_DIVIDER_HEADER);
        }
    };
    MDCDialogFoundation.prototype.toggleScrollDividerFooter = function () {
        if (!this.adapter.isScrollableContentAtBottom()) {
            this.adapter.addClass(cssClasses.SCROLL_DIVIDER_FOOTER);
        }
        else if (this.adapter.hasClass(cssClasses.SCROLL_DIVIDER_FOOTER)) {
            this.adapter.removeClass(cssClasses.SCROLL_DIVIDER_FOOTER);
        }
    };
    return MDCDialogFoundation;
}(MDCFoundation));

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

/* packages/dialog/node_modules/@smui/common/ClassAdder.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>
function create_default_slot$c(ctx) {
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
		id: create_default_slot$c.name,
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
			$$slots: { default: [create_default_slot$c] },
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

function instance$e($$self, $$props, $$invalidate) {
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

		init(this, options, instance$e, create_fragment$f, safe_not_equal, {
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

/* packages/dialog/Dialog.svelte generated by Svelte v3.37.0 */

const { document: document_1, window: window_1 } = globals;

const file$d = "packages/dialog/Dialog.svelte";
const get_over_slot_changes = dirty => ({});
const get_over_slot_context = ctx => ({});

// (47:6) {#if fullscreen}
function create_if_block(ctx) {
	let div;
	let mounted;
	let dispose;

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
			attr_dev(div, "class", "mdc-dialog__surface-scrim");
			add_location(div, file$d, 47, 8, 1327);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (!mounted) {
				dispose = listen_dev(div, "transitionend", /*transitionend_handler*/ ctx[31], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(47:6) {#if fullscreen}",
		ctx
	});

	return block;
}

function create_fragment$e(ctx) {
	let t0;
	let div3;
	let div1;
	let div0;
	let t1;
	let div0_class_value;
	let div1_class_value;
	let t2;
	let div2;
	let div3_class_value;
	let useActions_action;
	let t3;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[27].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[26], null);
	let if_block = /*fullscreen*/ ctx[5] && create_if_block(ctx);

	let div0_levels = [
		{
			class: div0_class_value = classMap({
				[/*surface$class*/ ctx[7]]: true,
				"mdc-dialog__surface": true
			})
		},
		{ role: "alertdialog" },
		{ "aria-modal": "true" },
		prefixFilter(/*$$restProps*/ ctx[17], "surface$")
	];

	let div0_data = {};

	for (let i = 0; i < div0_levels.length; i += 1) {
		div0_data = assign(div0_data, div0_levels[i]);
	}

	let div1_levels = [
		{
			class: div1_class_value = classMap({
				[/*container$class*/ ctx[6]]: true,
				"mdc-dialog__container": true
			})
		},
		prefixFilter(/*$$restProps*/ ctx[17], "container$")
	];

	let div1_data = {};

	for (let i = 0; i < div1_levels.length; i += 1) {
		div1_data = assign(div1_data, div1_levels[i]);
	}

	let div3_levels = [
		{
			class: div3_class_value = classMap({
				[/*className*/ ctx[2]]: true,
				"mdc-dialog": true,
				"mdc-dialog--stacked": !/*autoStackButtons*/ ctx[4],
				"mdc-dialog--fullscreen": /*fullscreen*/ ctx[5],
				"smui-dialog--selection": /*selection*/ ctx[3],
				.../*internalClasses*/ ctx[10]
			})
		},
		{ role: "alertdialog" },
		{ "aria-modal": "true" },
		exclude(/*$$restProps*/ ctx[17], ["container$", "surface$"])
	];

	let div3_data = {};

	for (let i = 0; i < div3_levels.length; i += 1) {
		div3_data = assign(div3_data, div3_levels[i]);
	}

	const over_slot_template = /*#slots*/ ctx[27].over;
	const over_slot = create_slot(over_slot_template, ctx, /*$$scope*/ ctx[26], get_over_slot_context);

	const block = {
		c: function create() {
			t0 = space();
			div3 = element("div");
			div1 = element("div");
			div0 = element("div");
			if (default_slot) default_slot.c();
			t1 = space();
			if (if_block) if_block.c();
			t2 = space();
			div2 = element("div");
			t3 = space();
			if (over_slot) over_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			t0 = claim_space(nodes);

			div3 = claim_element(nodes, "DIV", {
				class: true,
				role: true,
				"aria-modal": true
			});

			var div3_nodes = children(div3);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", {
				class: true,
				role: true,
				"aria-modal": true
			});

			var div0_nodes = children(div0);
			if (default_slot) default_slot.l(div0_nodes);
			t1 = claim_space(div0_nodes);
			if (if_block) if_block.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			if (over_slot) over_slot.l(nodes);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div0, div0_data);
			add_location(div0, file$d, 36, 4, 1070);
			set_attributes(div1, div1_data);
			add_location(div1, file$d, 29, 2, 910);
			attr_dev(div2, "class", "mdc-dialog__scrim");
			add_location(div2, file$d, 55, 2, 1523);
			set_attributes(div3, div3_data);
			add_location(div3, file$d, 8, 0, 250);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div1);
			append_dev(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			append_dev(div0, t1);
			if (if_block) if_block.m(div0, null);
			append_dev(div3, t2);
			append_dev(div3, div2);
			/*div3_binding*/ ctx[32](div3);
			insert_dev(target, t3, anchor);

			if (over_slot) {
				over_slot.m(target, anchor);
			}

			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(window_1, "resize", /*resize_handler*/ ctx[28], false, false, false),
					listen_dev(window_1, "orientationchange", /*orientationchange_handler*/ ctx[29], false, false, false),
					listen_dev(document_1.body, "keydown", /*keydown_handler*/ ctx[30], false, false, false),
					action_destroyer(useActions_action = useActions.call(null, div3, /*use*/ ctx[1])),
					action_destroyer(/*forwardEvents*/ ctx[11].call(null, div3)),
					listen_dev(div3, "MDCDialog:opening", /*handleDialogOpening*/ ctx[14], false, false, false),
					listen_dev(div3, "MDCDialog:opened", /*handleDialogOpened*/ ctx[15], false, false, false),
					listen_dev(div3, "MDCDialog:closed", /*handleDialogClosed*/ ctx[16], false, false, false),
					listen_dev(div3, "click", /*click_handler*/ ctx[33], false, false, false),
					listen_dev(div3, "keydown", /*keydown_handler_1*/ ctx[34], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[0] & /*$$scope*/ 67108864) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[26], dirty, null, null);
				}
			}

			if (/*fullscreen*/ ctx[5]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div0, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			set_attributes(div0, div0_data = get_spread_update(div0_levels, [
				(!current || dirty[0] & /*surface$class*/ 128 && div0_class_value !== (div0_class_value = classMap({
					[/*surface$class*/ ctx[7]]: true,
					"mdc-dialog__surface": true
				}))) && { class: div0_class_value },
				{ role: "alertdialog" },
				{ "aria-modal": "true" },
				dirty[0] & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], "surface$")
			]));

			set_attributes(div1, div1_data = get_spread_update(div1_levels, [
				(!current || dirty[0] & /*container$class*/ 64 && div1_class_value !== (div1_class_value = classMap({
					[/*container$class*/ ctx[6]]: true,
					"mdc-dialog__container": true
				}))) && { class: div1_class_value },
				dirty[0] & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], "container$")
			]));

			set_attributes(div3, div3_data = get_spread_update(div3_levels, [
				(!current || dirty[0] & /*className, autoStackButtons, fullscreen, selection, internalClasses*/ 1084 && div3_class_value !== (div3_class_value = classMap({
					[/*className*/ ctx[2]]: true,
					"mdc-dialog": true,
					"mdc-dialog--stacked": !/*autoStackButtons*/ ctx[4],
					"mdc-dialog--fullscreen": /*fullscreen*/ ctx[5],
					"smui-dialog--selection": /*selection*/ ctx[3],
					.../*internalClasses*/ ctx[10]
				}))) && { class: div3_class_value },
				{ role: "alertdialog" },
				{ "aria-modal": "true" },
				dirty[0] & /*$$restProps*/ 131072 && exclude(/*$$restProps*/ ctx[17], ["container$", "surface$"])
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);

			if (over_slot) {
				if (over_slot.p && dirty[0] & /*$$scope*/ 67108864) {
					update_slot(over_slot, over_slot_template, ctx, /*$$scope*/ ctx[26], dirty, get_over_slot_changes, get_over_slot_context);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			transition_in(over_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			transition_out(over_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div3);
			if (default_slot) default_slot.d(detaching);
			if (if_block) if_block.d();
			/*div3_binding*/ ctx[32](null);
			if (detaching) detach_dev(t3);
			if (over_slot) over_slot.d(detaching);
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

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","open","selection","escapeKeyAction","scrimClickAction","autoStackButtons","fullscreen","container$class","surface$class","isOpen","setOpen","layout","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $actionButtonsReversed;
	let $aboveFullscreenShown;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Dialog", slots, ['default','over']);
	const { FocusTrap } = domFocusTrap;
	const { closest, matches } = ponyfill;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { open = false } = $$props;
	let { selection = false } = $$props;
	let { escapeKeyAction = "close" } = $$props;
	let { scrimClickAction = "close" } = $$props;
	let { autoStackButtons = true } = $$props;
	let { fullscreen = false } = $$props;
	let { container$class = "" } = $$props;
	let { surface$class = "" } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let focusTrap;
	let actionButtonsReversed = writable(false);
	validate_store(actionButtonsReversed, "actionButtonsReversed");
	component_subscribe($$self, actionButtonsReversed, value => $$invalidate(37, $actionButtonsReversed = value));
	let addLayoutListener = getContext("SMUI:addLayoutListener");
	let aboveFullscreen = getContext("SMUI:dialog:aboveFullscreen");
	let aboveFullscreenShown = getContext("SMUI:dialog:aboveFullscreenShown") || writable(false);
	validate_store(aboveFullscreenShown, "aboveFullscreenShown");
	component_subscribe($$self, aboveFullscreenShown, value => $$invalidate(25, $aboveFullscreenShown = value));
	let removeLayoutListener;
	let layoutListeners = [];

	let addLayoutListenerFn = listener => {
		layoutListeners.push(listener);

		return () => {
			const idx = layoutListeners.indexOf(listener);

			if (idx >= 0) {
				layoutListeners.splice(idx, 1);
			}
		};
	};

	setContext("SMUI:dialog:actions:reversed", actionButtonsReversed);
	setContext("SMUI:addLayoutListener", addLayoutListenerFn);
	setContext("SMUI:dialog:selection", selection);
	setContext("SMUI:dialog:aboveFullscreen", aboveFullscreen || fullscreen);
	setContext("SMUI:dialog:aboveFullscreenShown", aboveFullscreenShown);

	if (addLayoutListener) {
		removeLayoutListener = addLayoutListener(layout);
	}

	let previousAboveFullscreenShown = $aboveFullscreenShown;

	onMount(() => {
		focusTrap = new FocusTrap(element, { initialFocusEl: getInitialFocusEl() });

		$$invalidate(8, instance = new MDCDialogFoundation({
				addBodyClass: className => document.body.classList.add(className),
				addClass,
				areButtonsStacked: () => areTopsMisaligned(getButtonEls()),
				clickDefaultButton: () => {
					const defaultButton = getDefaultButtonEl();

					if (defaultButton) {
						defaultButton.click();
					}
				},
				eventTargetMatches: (target, selector) => target ? matches(target, selector) : false,
				getActionFromEvent: evt => {
					if (!evt.target) {
						return "";
					}

					const element = closest(evt.target, "[data-mdc-dialog-action]");
					return element && element.getAttribute("data-mdc-dialog-action");
				},
				getInitialFocusEl,
				hasClass,
				isContentScrollable: () => isScrollable(getContentEl()),
				notifyClosed: action => {
					$$invalidate(0, open = false);
					dispatch(getElement(), "MDCDialog:closed", action ? { action } : {});
				},
				notifyClosing: action => dispatch(getElement(), "MDCDialog:closing", action ? { action } : {}),
				notifyOpened: () => dispatch(getElement(), "MDCDialog:opened", {}),
				notifyOpening: () => dispatch(getElement(), "MDCDialog:opening", {}),
				releaseFocus: () => focusTrap.releaseFocus(),
				removeBodyClass: className => document.body.classList.remove(className),
				removeClass,
				reverseButtons: () => {
					set_store_value(actionButtonsReversed, $actionButtonsReversed = true, $actionButtonsReversed);
				},
				trapFocus: () => focusTrap.trapFocus(),
				registerContentEventHandler: (evt, handler) => {
					const content = getContentEl();

					if (content instanceof HTMLElement) {
						content.addEventListener(evt, handler);
					}
				},
				deregisterContentEventHandler: (evt, handler) => {
					const content = getContentEl();

					if (content instanceof HTMLElement) {
						content.removeEventListener(evt, handler);
					}
				},
				isScrollableContentAtTop: () => {
					return isScrollAtTop(getContentEl());
				},
				isScrollableContentAtBottom: () => {
					return isScrollAtBottom(getContentEl());
				},
				registerWindowEventHandler: (evt, handler) => {
					window.addEventListener(evt, handler);
				},
				deregisterWindowEventHandler: (evt, handler) => {
					window.removeEventListener(evt, handler);
				}
			}));

		instance.init();

		return () => {
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
			$$invalidate(10, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(10, internalClasses[className] = false, internalClasses);
		}
	}

	function getButtonEls() {
		return [].slice.call(element.querySelectorAll(".mdc-dialog__button"));
	}

	function getDefaultButtonEl() {
		return element.querySelector("[data-mdc-dialog-button-default");
	}

	function getContentEl() {
		return element.querySelector(".mdc-dialog__content");
	}

	function getInitialFocusEl() {
		return element.querySelector("[data-mdc-dialog-initial-focus]");
	}

	function handleDialogOpening() {
		if (aboveFullscreen) {
			set_store_value(aboveFullscreenShown, $aboveFullscreenShown = true, $aboveFullscreenShown);
		}

		requestAnimationFrame(() => {
			layoutListeners.forEach(listener => listener());
		});
	}

	function handleDialogOpened() {
		layoutListeners.forEach(listener => listener());
	}

	function handleDialogClosed() {
		if (aboveFullscreen) {
			set_store_value(aboveFullscreenShown, $aboveFullscreenShown = false, $aboveFullscreenShown);
		}
	}

	function isOpen() {
		return open;
	}

	function setOpen(value) {
		$$invalidate(0, open = value);
	}

	function layout() {
		return instance.layout();
	}

	function getElement() {
		return element;
	}

	const resize_handler = () => open && instance && instance.layout();
	const orientationchange_handler = () => open && instance && instance.layout();
	const keydown_handler = event => open && instance && instance.handleDocumentKeydown(event);
	const transitionend_handler = () => instance && instance.handleSurfaceScrimTransitionEnd();

	function div3_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(9, element);
		});
	}

	const click_handler = event => instance && instance.handleClick(event);
	const keydown_handler_1 = event => instance && instance.handleKeydown(event);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(17, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("open" in $$new_props) $$invalidate(0, open = $$new_props.open);
		if ("selection" in $$new_props) $$invalidate(3, selection = $$new_props.selection);
		if ("escapeKeyAction" in $$new_props) $$invalidate(18, escapeKeyAction = $$new_props.escapeKeyAction);
		if ("scrimClickAction" in $$new_props) $$invalidate(19, scrimClickAction = $$new_props.scrimClickAction);
		if ("autoStackButtons" in $$new_props) $$invalidate(4, autoStackButtons = $$new_props.autoStackButtons);
		if ("fullscreen" in $$new_props) $$invalidate(5, fullscreen = $$new_props.fullscreen);
		if ("container$class" in $$new_props) $$invalidate(6, container$class = $$new_props.container$class);
		if ("surface$class" in $$new_props) $$invalidate(7, surface$class = $$new_props.surface$class);
		if ("$$scope" in $$new_props) $$invalidate(26, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCDialogFoundation,
		util,
		domFocusTrap,
		ponyfill,
		onMount,
		onDestroy,
		getContext,
		setContext,
		writable,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		exclude,
		prefixFilter,
		useActions,
		dispatch,
		FocusTrap,
		closest,
		matches,
		forwardEvents,
		use,
		className,
		open,
		selection,
		escapeKeyAction,
		scrimClickAction,
		autoStackButtons,
		fullscreen,
		container$class,
		surface$class,
		element,
		instance,
		internalClasses,
		focusTrap,
		actionButtonsReversed,
		addLayoutListener,
		aboveFullscreen,
		aboveFullscreenShown,
		removeLayoutListener,
		layoutListeners,
		addLayoutListenerFn,
		previousAboveFullscreenShown,
		hasClass,
		addClass,
		removeClass,
		getButtonEls,
		getDefaultButtonEl,
		getContentEl,
		getInitialFocusEl,
		handleDialogOpening,
		handleDialogOpened,
		handleDialogClosed,
		isOpen,
		setOpen,
		layout,
		getElement,
		$actionButtonsReversed,
		$aboveFullscreenShown
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("open" in $$props) $$invalidate(0, open = $$new_props.open);
		if ("selection" in $$props) $$invalidate(3, selection = $$new_props.selection);
		if ("escapeKeyAction" in $$props) $$invalidate(18, escapeKeyAction = $$new_props.escapeKeyAction);
		if ("scrimClickAction" in $$props) $$invalidate(19, scrimClickAction = $$new_props.scrimClickAction);
		if ("autoStackButtons" in $$props) $$invalidate(4, autoStackButtons = $$new_props.autoStackButtons);
		if ("fullscreen" in $$props) $$invalidate(5, fullscreen = $$new_props.fullscreen);
		if ("container$class" in $$props) $$invalidate(6, container$class = $$new_props.container$class);
		if ("surface$class" in $$props) $$invalidate(7, surface$class = $$new_props.surface$class);
		if ("element" in $$props) $$invalidate(9, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(8, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(10, internalClasses = $$new_props.internalClasses);
		if ("focusTrap" in $$props) focusTrap = $$new_props.focusTrap;
		if ("actionButtonsReversed" in $$props) $$invalidate(12, actionButtonsReversed = $$new_props.actionButtonsReversed);
		if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
		if ("aboveFullscreen" in $$props) $$invalidate(42, aboveFullscreen = $$new_props.aboveFullscreen);
		if ("aboveFullscreenShown" in $$props) $$invalidate(13, aboveFullscreenShown = $$new_props.aboveFullscreenShown);
		if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
		if ("layoutListeners" in $$props) layoutListeners = $$new_props.layoutListeners;
		if ("addLayoutListenerFn" in $$props) addLayoutListenerFn = $$new_props.addLayoutListenerFn;
		if ("previousAboveFullscreenShown" in $$props) $$invalidate(24, previousAboveFullscreenShown = $$new_props.previousAboveFullscreenShown);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*instance, escapeKeyAction*/ 262400) {
			if (instance && instance.getEscapeKeyAction() !== escapeKeyAction) {
				instance.setEscapeKeyAction(escapeKeyAction);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, scrimClickAction*/ 524544) {
			if (instance && instance.getScrimClickAction() !== scrimClickAction) {
				instance.setScrimClickAction(scrimClickAction);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, autoStackButtons*/ 272) {
			if (instance && instance.getAutoStackButtons() !== autoStackButtons) {
				instance.setAutoStackButtons(autoStackButtons);
			}
		}

		if ($$self.$$.dirty[0] & /*autoStackButtons*/ 16) {
			if (!autoStackButtons) {
				set_store_value(actionButtonsReversed, $actionButtonsReversed = true, $actionButtonsReversed);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, open*/ 257) {
			if (instance && instance.isOpen() !== open) {
				if (open) {
					instance.open({
						isAboveFullscreenDialog: !!aboveFullscreen
					});
				} else {
					instance.close();
				}
			}
		}

		if ($$self.$$.dirty[0] & /*fullscreen, instance, previousAboveFullscreenShown, $aboveFullscreenShown*/ 50331936) {
			if (fullscreen && instance && previousAboveFullscreenShown !== $aboveFullscreenShown) {
				$$invalidate(24, previousAboveFullscreenShown = $aboveFullscreenShown);

				if ($aboveFullscreenShown) {
					instance.showSurfaceScrim();
				} else {
					instance.hideSurfaceScrim();
				}
			}
		}
	};

	return [
		open,
		use,
		className,
		selection,
		autoStackButtons,
		fullscreen,
		container$class,
		surface$class,
		instance,
		element,
		internalClasses,
		forwardEvents,
		actionButtonsReversed,
		aboveFullscreenShown,
		handleDialogOpening,
		handleDialogOpened,
		handleDialogClosed,
		$$restProps,
		escapeKeyAction,
		scrimClickAction,
		isOpen,
		setOpen,
		layout,
		getElement,
		previousAboveFullscreenShown,
		$aboveFullscreenShown,
		$$scope,
		slots,
		resize_handler,
		orientationchange_handler,
		keydown_handler,
		transitionend_handler,
		div3_binding,
		click_handler,
		keydown_handler_1
	];
}

class Dialog$1 extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1,
			create_fragment$e,
			safe_not_equal,
			{
				use: 1,
				class: 2,
				open: 0,
				selection: 3,
				escapeKeyAction: 18,
				scrimClickAction: 19,
				autoStackButtons: 4,
				fullscreen: 5,
				container$class: 6,
				surface$class: 7,
				isOpen: 20,
				setOpen: 21,
				layout: 22,
				getElement: 23
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Dialog",
			options,
			id: create_fragment$e.name
		});
	}

	get use() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set open(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selection() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selection(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get escapeKeyAction() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set escapeKeyAction(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scrimClickAction() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scrimClickAction(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get autoStackButtons() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set autoStackButtons(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get fullscreen() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fullscreen(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get container$class() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set container$class(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get surface$class() {
		throw new Error("<Dialog>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set surface$class(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isOpen() {
		return this.$$.ctx[20];
	}

	set isOpen(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setOpen() {
		return this.$$.ctx[21];
	}

	set setOpen(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get layout() {
		return this.$$.ctx[22];
	}

	set layout(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[23];
	}

	set getElement(value) {
		throw new Error("<Dialog>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/dialog/node_modules/@smui/common/Div.svelte generated by Svelte v3.37.0 */
const file$c = "packages/dialog/node_modules/@smui/common/Div.svelte";

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
			add_location(div, file$c, 0, 0, 0);
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

function instance$d($$self, $$props, $$invalidate) {
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
		init(this, options, instance$d, create_fragment$d, safe_not_equal, { use: 0, getElement: 4 });

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

var Header = classAdderBuilder({
  class: 'mdc-dialog__header',
  component: Div,
  contexts: {
    'SMUI:icon-button:context': 'dialog:header',
  },
});

/* packages/dialog/node_modules/@smui/common/H2.svelte generated by Svelte v3.37.0 */
const file$b = "packages/dialog/node_modules/@smui/common/H2.svelte";

function create_fragment$c(ctx) {
	let h2;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let h2_levels = [/*$$restProps*/ ctx[3]];
	let h2_data = {};

	for (let i = 0; i < h2_levels.length; i += 1) {
		h2_data = assign(h2_data, h2_levels[i]);
	}

	const block = {
		c: function create() {
			h2 = element("h2");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			if (default_slot) default_slot.l(h2_nodes);
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(h2, h2_data);
			add_location(h2, file$b, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);

			if (default_slot) {
				default_slot.m(h2, null);
			}

			/*h2_binding*/ ctx[7](h2);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, h2, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[2].call(null, h2))
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

			set_attributes(h2, h2_data = get_spread_update(h2_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			if (detaching) detach_dev(h2);
			if (default_slot) default_slot.d(detaching);
			/*h2_binding*/ ctx[7](null);
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

function instance$c($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("H2", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let element = null;

	function getElement() {
		return element;
	}

	function h2_binding($$value) {
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
		h2_binding
	];
}

class H2 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$c, create_fragment$c, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "H2",
			options,
			id: create_fragment$c.name
		});
	}

	get use() {
		throw new Error("<H2>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<H2>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<H2>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var Title = classAdderBuilder({
  class: 'mdc-dialog__title',
  component: H2,
});

var Content = classAdderBuilder({
  class: 'mdc-dialog__content',
  component: Div,
});

var Actions = classAdderBuilder({
  class: 'mdc-dialog__actions',
  component: Div,
  classMap: {
    'smui-dialog__actions--reversed': 'SMUI:dialog:actions:reversed',
  },
  contexts: {
    'SMUI:button:context': 'dialog:action',
  },
});

function InitialFocus(node) {
  node.setAttribute('data-mdc-dialog-initial-focus', '');

  return {
    destroy() {
      node.removeAttribute('data-mdc-dialog-initial-focus');
    },
  };
}

/* src/routes/demo/dialog/_Simple.svelte generated by Svelte v3.37.0 */
const file$a = "src/routes/demo/dialog/_Simple.svelte";

// (7:2) <Title id="simple-title">
function create_default_slot_9$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Dialog Title");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Dialog Title");
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
		id: create_default_slot_9$9.name,
		type: "slot",
		source: "(7:2) <Title id=\\\"simple-title\\\">",
		ctx
	});

	return block;
}

// (8:2) <Content id="simple-content">
function create_default_slot_8$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Super awesome dialog body text?");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Super awesome dialog body text?");
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
		id: create_default_slot_8$9.name,
		type: "slot",
		source: "(8:2) <Content id=\\\"simple-content\\\">",
		ctx
	});

	return block;
}

// (11:6) <Label>
function create_default_slot_7$b(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No");
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
		id: create_default_slot_7$b.name,
		type: "slot",
		source: "(11:6) <Label>",
		ctx
	});

	return block;
}

// (10:4) <Button on:click={() => (clicked = 'No')}>
function create_default_slot_6$b(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7$b] },
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
		id: create_default_slot_6$b.name,
		type: "slot",
		source: "(10:4) <Button on:click={() => (clicked = 'No')}>",
		ctx
	});

	return block;
}

// (14:6) <Label>
function create_default_slot_5$b(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Yes");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Yes");
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
		id: create_default_slot_5$b.name,
		type: "slot",
		source: "(14:6) <Label>",
		ctx
	});

	return block;
}

// (13:4) <Button on:click={() => (clicked = 'Yes')}>
function create_default_slot_4$b(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$b] },
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
		id: create_default_slot_4$b.name,
		type: "slot",
		source: "(13:4) <Button on:click={() => (clicked = 'Yes')}>",
		ctx
	});

	return block;
}

// (9:2) <Actions>
function create_default_slot_3$b(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_6$b] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[2]);

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_4$b] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[3]);

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
		id: create_default_slot_3$b.name,
		type: "slot",
		source: "(9:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   aria-labelledby="simple-title"   aria-describedby="simple-content" >
function create_default_slot_2$b(ctx) {
	let title;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	title = new Title({
			props: {
				id: "simple-title",
				$$slots: { default: [create_default_slot_9$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "simple-content",
				$$slots: { default: [create_default_slot_8$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$b] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 64) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const content_changes = {};

			if (dirty & /*$$scope*/ 64) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, clicked*/ 66) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$b.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   aria-labelledby=\\\"simple-title\\\"   aria-describedby=\\\"simple-content\\\" >",
		ctx
	});

	return block;
}

// (20:2) <Label>
function create_default_slot_1$b(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		id: create_default_slot_1$b.name,
		type: "slot",
		source: "(20:2) <Label>",
		ctx
	});

	return block;
}

// (19:0) <Button on:click={() => (open = true)}>
function create_default_slot$b(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$b] },
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
		id: create_default_slot$b.name,
		type: "slot",
		source: "(19:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$b(ctx) {
	let dialog;
	let updating_open;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[4](value);
	}

	let dialog_props = {
		"aria-labelledby": "simple-title",
		"aria-describedby": "simple-content",
		$$slots: { default: [create_default_slot_2$b] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$b] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_2*/ ctx[5]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Clicked: ");
			t3 = text(/*clicked*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Clicked: ");
			t3 = claim_text(pre_nodes, /*clicked*/ ctx[1]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$a, 22, 0, 588);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope, clicked*/ 66) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 64) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*clicked*/ 2) set_data_dev(t3, /*clicked*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(pre);
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

function instance$b($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Simple", slots, []);
	let open;
	let clicked = "Nothing yet.";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Simple> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(1, clicked = "No");
	const click_handler_1 = () => $$invalidate(1, clicked = "Yes");

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler_2 = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Title,
		Content,
		Actions,
		Button: Button_1,
		Label: CommonLabel,
		open,
		clicked
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("clicked" in $$props) $$invalidate(1, clicked = $$props.clicked);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		open,
		clicked,
		click_handler,
		click_handler_1,
		dialog_open_binding,
		click_handler_2
	];
}

class Simple extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$b, create_fragment$b, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Simple",
			options,
			id: create_fragment$b.name
		});
	}
}

/* src/routes/demo/dialog/_DefaultFocus.svelte generated by Svelte v3.37.0 */
const file$9 = "src/routes/demo/dialog/_DefaultFocus.svelte";

// (6:2) <Title id="default-focus-title">
function create_default_slot_9$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Advice");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Advice");
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
		id: create_default_slot_9$8.name,
		type: "slot",
		source: "(6:2) <Title id=\\\"default-focus-title\\\">",
		ctx
	});

	return block;
}

// (7:2) <Content id="default-focus-content">
function create_default_slot_8$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Build something today, even if it sucks.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Build something today, even if it sucks.");
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
		id: create_default_slot_8$8.name,
		type: "slot",
		source: "(7:2) <Content id=\\\"default-focus-content\\\">",
		ctx
	});

	return block;
}

// (12:6) <Label>
function create_default_slot_7$a(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("You Can't Make Me");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "You Can't Make Me");
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
		id: create_default_slot_7$a.name,
		type: "slot",
		source: "(12:6) <Label>",
		ctx
	});

	return block;
}

// (11:4) <Button on:click={() => (response = 'I will make you! Do it!')}>
function create_default_slot_6$a(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7$a] },
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
		id: create_default_slot_6$a.name,
		type: "slot",
		source: "(11:4) <Button on:click={() => (response = 'I will make you! Do it!')}>",
		ctx
	});

	return block;
}

// (19:6) <Label>
function create_default_slot_5$a(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("I Will");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "I Will");
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
		id: create_default_slot_5$a.name,
		type: "slot",
		source: "(19:6) <Label>",
		ctx
	});

	return block;
}

// (14:4) <Button       default       use={[InitialFocus]}       on:click={() => (response = 'It will be glorious.')}     >
function create_default_slot_4$a(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$a] },
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
		id: create_default_slot_4$a.name,
		type: "slot",
		source: "(14:4) <Button       default       use={[InitialFocus]}       on:click={() => (response = 'It will be glorious.')}     >",
		ctx
	});

	return block;
}

// (10:2) <Actions>
function create_default_slot_3$a(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_6$a] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[2]);

	button1 = new Button_1({
			props: {
				default: true,
				use: [InitialFocus],
				$$slots: { default: [create_default_slot_4$a] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[3]);

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
		id: create_default_slot_3$a.name,
		type: "slot",
		source: "(10:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   aria-labelledby="default-focus-title"   aria-describedby="default-focus-content" >
function create_default_slot_2$a(ctx) {
	let title;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	title = new Title({
			props: {
				id: "default-focus-title",
				$$slots: { default: [create_default_slot_9$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "default-focus-content",
				$$slots: { default: [create_default_slot_8$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$a] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 64) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const content_changes = {};

			if (dirty & /*$$scope*/ 64) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, response*/ 66) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$a.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   aria-labelledby=\\\"default-focus-title\\\"   aria-describedby=\\\"default-focus-content\\\" >",
		ctx
	});

	return block;
}

// (25:2) <Label>
function create_default_slot_1$a(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		id: create_default_slot_1$a.name,
		type: "slot",
		source: "(25:2) <Label>",
		ctx
	});

	return block;
}

// (24:0) <Button on:click={() => (open = true)}>
function create_default_slot$a(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$a] },
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
		id: create_default_slot$a.name,
		type: "slot",
		source: "(24:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$a(ctx) {
	let dialog;
	let updating_open;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[4](value);
	}

	let dialog_props = {
		"aria-labelledby": "default-focus-title",
		"aria-describedby": "default-focus-content",
		$$slots: { default: [create_default_slot_2$a] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$a] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_2*/ ctx[5]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Response: ");
			t3 = text(/*response*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Response: ");
			t3 = claim_text(pre_nodes, /*response*/ ctx[1]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$9, 27, 0, 649);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope, response*/ 66) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 64) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*response*/ 2) set_data_dev(t3, /*response*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(pre);
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

function instance$a($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("DefaultFocus", slots, []);
	let open;
	let response = "Nothing yet.";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DefaultFocus> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(1, response = "I will make you! Do it!");
	const click_handler_1 = () => $$invalidate(1, response = "It will be glorious.");

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler_2 = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Title,
		Content,
		Actions,
		InitialFocus,
		Button: Button_1,
		Label: CommonLabel,
		open,
		response
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("response" in $$props) $$invalidate(1, response = $$props.response);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		open,
		response,
		click_handler,
		click_handler_1,
		dialog_open_binding,
		click_handler_2
	];
}

class DefaultFocus extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DefaultFocus",
			options,
			id: create_fragment$a.name
		});
	}
}

/* src/routes/demo/dialog/_Event.svelte generated by Svelte v3.37.0 */
const file$8 = "src/routes/demo/dialog/_Event.svelte";

// (7:2) <Title id="event-title">
function create_default_slot_9$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("The Best Dog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "The Best Dog");
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
		id: create_default_slot_9$7.name,
		type: "slot",
		source: "(7:2) <Title id=\\\"event-title\\\">",
		ctx
	});

	return block;
}

// (8:2) <Content id="event-content">
function create_default_slot_8$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Out of all the dogs, which is the best dog?");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Out of all the dogs, which is the best dog?");
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
		id: create_default_slot_8$7.name,
		type: "slot",
		source: "(8:2) <Content id=\\\"event-content\\\">",
		ctx
	});

	return block;
}

// (13:6) <Label>
function create_default_slot_7$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("None of Them");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "None of Them");
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
		id: create_default_slot_7$9.name,
		type: "slot",
		source: "(13:6) <Label>",
		ctx
	});

	return block;
}

// (12:4) <Button action="none">
function create_default_slot_6$9(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7$9] },
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
		id: create_default_slot_6$9.name,
		type: "slot",
		source: "(12:4) <Button action=\\\"none\\\">",
		ctx
	});

	return block;
}

// (16:6) <Label>
function create_default_slot_5$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("All of Them");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "All of Them");
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
		id: create_default_slot_5$9.name,
		type: "slot",
		source: "(16:6) <Label>",
		ctx
	});

	return block;
}

// (15:4) <Button action="all" default>
function create_default_slot_4$9(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$9] },
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
		id: create_default_slot_4$9.name,
		type: "slot",
		source: "(15:4) <Button action=\\\"all\\\" default>",
		ctx
	});

	return block;
}

// (11:2) <Actions>
function create_default_slot_3$9(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				action: "none",
				$$slots: { default: [create_default_slot_6$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button_1({
			props: {
				action: "all",
				default: true,
				$$slots: { default: [create_default_slot_4$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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

			if (dirty & /*$$scope*/ 32) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 32) {
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
		id: create_default_slot_3$9.name,
		type: "slot",
		source: "(11:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   aria-labelledby="event-title"   aria-describedby="event-content"   on:MDCDialog:closed={closeHandler} >
function create_default_slot_2$9(ctx) {
	let title;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	title = new Title({
			props: {
				id: "event-title",
				$$slots: { default: [create_default_slot_9$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "event-content",
				$$slots: { default: [create_default_slot_8$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 32) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const content_changes = {};

			if (dirty & /*$$scope*/ 32) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 32) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$9.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   aria-labelledby=\\\"event-title\\\"   aria-describedby=\\\"event-content\\\"   on:MDCDialog:closed={closeHandler} >",
		ctx
	});

	return block;
}

// (22:2) <Label>
function create_default_slot_1$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		id: create_default_slot_1$9.name,
		type: "slot",
		source: "(22:2) <Label>",
		ctx
	});

	return block;
}

// (21:0) <Button on:click={() => (open = true)}>
function create_default_slot$9(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$9] },
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
		id: create_default_slot$9.name,
		type: "slot",
		source: "(21:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$9(ctx) {
	let dialog;
	let updating_open;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[3](value);
	}

	let dialog_props = {
		"aria-labelledby": "event-title",
		"aria-describedby": "event-content",
		$$slots: { default: [create_default_slot_2$9] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));
	dialog.$on("MDCDialog:closed", /*closeHandler*/ ctx[2]);

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Response: ");
			t3 = text(/*response*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Response: ");
			t3 = claim_text(pre_nodes, /*response*/ ctx[1]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$8, 24, 0, 537);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope*/ 32) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*response*/ 2) set_data_dev(t3, /*response*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
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

function instance$9($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Event", slots, []);
	let open;
	let response = "Nothing yet.";

	function closeHandler(e) {
		switch (e.detail.action) {
			case "none":
				$$invalidate(1, response = "Ok, well, you're wrong.");
				break;
			case "all":
				$$invalidate(1, response = "You are correct. All dogs are the best dog.");
				break;
			default:
				// This means the user clicked the scrim or pressed Esc to close the dialog.
				// The actions will be "close".
				$$invalidate(1, response = "It's a simple question. You should be able to answer it.");
				break;
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Event> was created with unknown prop '${key}'`);
	});

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Title,
		Content,
		Actions,
		Button: Button_1,
		Label: CommonLabel,
		open,
		response,
		closeHandler
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("response" in $$props) $$invalidate(1, response = $$props.response);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [open, response, closeHandler, dialog_open_binding, click_handler];
}

class Event$1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$9, create_fragment$9, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Event",
			options,
			id: create_fragment$9.name
		});
	}
}

/* src/routes/demo/dialog/_Mandatory.svelte generated by Svelte v3.37.0 */
const file$7 = "src/routes/demo/dialog/_Mandatory.svelte";

// (8:2) <Title id="mandatory-title">
function create_default_slot_13$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Webpage Troll");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Webpage Troll");
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
		id: create_default_slot_13$2.name,
		type: "slot",
		source: "(8:2) <Title id=\\\"mandatory-title\\\">",
		ctx
	});

	return block;
}

// (9:2) <Content id="mandatory-content">
function create_default_slot_12$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Before you continue on this page, you must answer my riddle of age. When\n    Alice was six her brother was three, now Alice is 90, how old is he?");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Before you continue on this page, you must answer my riddle of age. When\n    Alice was six her brother was three, now Alice is 90, how old is he?");
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
		id: create_default_slot_12$2.name,
		type: "slot",
		source: "(9:2) <Content id=\\\"mandatory-content\\\">",
		ctx
	});

	return block;
}

// (15:6) <Label>
function create_default_slot_11$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Fifty");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Fifty");
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
		id: create_default_slot_11$4.name,
		type: "slot",
		source: "(15:6) <Label>",
		ctx
	});

	return block;
}

// (14:4) <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>
function create_default_slot_10$5(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_11$4] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_default_slot_10$5.name,
		type: "slot",
		source: "(14:4) <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>",
		ctx
	});

	return block;
}

// (18:6) <Label>
function create_default_slot_9$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Eighty-Seven");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Eighty-Seven");
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
		id: create_default_slot_9$6.name,
		type: "slot",
		source: "(18:6) <Label>",
		ctx
	});

	return block;
}

// (17:4) <Button on:click={() => (response = 'You are correct. You may pass.')}>
function create_default_slot_8$6(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_9$6] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_default_slot_8$6.name,
		type: "slot",
		source: "(17:4) <Button on:click={() => (response = 'You are correct. You may pass.')}>",
		ctx
	});

	return block;
}

// (21:6) <Label>
function create_default_slot_7$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Forty-Five");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Forty-Five");
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
		id: create_default_slot_7$8.name,
		type: "slot",
		source: "(21:6) <Label>",
		ctx
	});

	return block;
}

// (20:4) <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>
function create_default_slot_6$8(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7$8] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_default_slot_6$8.name,
		type: "slot",
		source: "(20:4) <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>",
		ctx
	});

	return block;
}

// (24:6) <Label>
function create_default_slot_5$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Seventy-Five");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Seventy-Five");
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
		id: create_default_slot_5$8.name,
		type: "slot",
		source: "(24:6) <Label>",
		ctx
	});

	return block;
}

// (23:4) <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>
function create_default_slot_4$8(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$8] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_default_slot_4$8.name,
		type: "slot",
		source: "(23:4) <Button on:click={() => (response = 'Wrong answer. Thrown in the lake.')}>",
		ctx
	});

	return block;
}

// (13:2) <Actions>
function create_default_slot_3$8(ctx) {
	let button0;
	let t0;
	let button1;
	let t1;
	let button2;
	let t2;
	let button3;
	let current;

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_10$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[2]);

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_8$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[3]);

	button2 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_6$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_2*/ ctx[4]);

	button3 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_4$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button3.$on("click", /*click_handler_3*/ ctx[5]);

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(button2.$$.fragment);
			t2 = space();
			create_component(button3.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(button2.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(button3.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button2, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(button3, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
			const button3_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button3_changes.$$scope = { dirty, ctx };
			}

			button3.$set(button3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			transition_in(button3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			transition_out(button3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(button2, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(button3, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$8.name,
		type: "slot",
		source: "(13:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   scrimClickAction=""   escapeKeyAction=""   aria-labelledby="mandatory-title"   aria-describedby="mandatory-content" >
function create_default_slot_2$8(ctx) {
	let title;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	title = new Title({
			props: {
				id: "mandatory-title",
				$$slots: { default: [create_default_slot_13$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "mandatory-content",
				$$slots: { default: [create_default_slot_12$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 256) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const content_changes = {};

			if (dirty & /*$$scope*/ 256) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope, response*/ 258) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$8.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   scrimClickAction=\\\"\\\"   escapeKeyAction=\\\"\\\"   aria-labelledby=\\\"mandatory-title\\\"   aria-describedby=\\\"mandatory-content\\\" >",
		ctx
	});

	return block;
}

// (30:2) <Label>
function create_default_slot_1$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		id: create_default_slot_1$8.name,
		type: "slot",
		source: "(30:2) <Label>",
		ctx
	});

	return block;
}

// (29:0) <Button on:click={() => (open = true)}>
function create_default_slot$8(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$8] },
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

			if (dirty & /*$$scope*/ 256) {
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
		source: "(29:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
	let dialog;
	let updating_open;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[6](value);
	}

	let dialog_props = {
		scrimClickAction: "",
		escapeKeyAction: "",
		"aria-labelledby": "mandatory-title",
		"aria-describedby": "mandatory-content",
		$$slots: { default: [create_default_slot_2$8] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_4*/ ctx[7]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Result: ");
			t3 = text(/*response*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Result: ");
			t3 = claim_text(pre_nodes, /*response*/ ctx[1]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$7, 32, 0, 1002);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope, response*/ 258) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*response*/ 2) set_data_dev(t3, /*response*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(pre);
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

function instance$8($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Mandatory", slots, []);
	let open;
	let response = "Nothing yet.";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Mandatory> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(1, response = "Wrong answer. Thrown in the lake.");
	const click_handler_1 = () => $$invalidate(1, response = "You are correct. You may pass.");
	const click_handler_2 = () => $$invalidate(1, response = "Wrong answer. Thrown in the lake.");
	const click_handler_3 = () => $$invalidate(1, response = "Wrong answer. Thrown in the lake.");

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler_4 = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Title,
		Content,
		Actions,
		InitialFocus,
		Button: Button_1,
		Label: CommonLabel,
		open,
		response
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("response" in $$props) $$invalidate(1, response = $$props.response);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		open,
		response,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3,
		dialog_open_binding,
		click_handler_4
	];
}

class Mandatory extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Mandatory",
			options,
			id: create_fragment$8.name
		});
	}
}

/* src/routes/demo/dialog/_List.svelte generated by Svelte v3.37.0 */
const file$6 = "src/routes/demo/dialog/_List.svelte";

function get_each_context$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	return child_ctx;
}

// (7:2) <Title id="list-title">
function create_default_slot_7$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Dialog Title");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Dialog Title");
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
		id: create_default_slot_7$7.name,
		type: "slot",
		source: "(7:2) <Title id=\\\"list-title\\\">",
		ctx
	});

	return block;
}

// (17:10) <Text>
function create_default_slot_6$7(ctx) {
	let t0;
	let t1_value = /*item*/ ctx[5] + "";
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
		id: create_default_slot_6$7.name,
		type: "slot",
		source: "(17:10) <Text>",
		ctx
	});

	return block;
}

// (11:8) <Item           on:click={() => {             clicked = item;             open = false;           }}         >
function create_default_slot_5$7(ctx) {
	let text_1;
	let t;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_6$7] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_default_slot_5$7.name,
		type: "slot",
		source: "(11:8) <Item           on:click={() => {             clicked = item;             open = false;           }}         >",
		ctx
	});

	return block;
}

// (10:6) {#each [...Array(100)].map((v, i) => i + 1) as item}
function create_each_block$3(ctx) {
	let item;
	let current;

	function click_handler() {
		return /*click_handler*/ ctx[2](/*item*/ ctx[5]);
	}

	item = new Item({
			props: {
				$$slots: { default: [create_default_slot_5$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item.$on("click", click_handler);

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
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const item_changes = {};

			if (dirty & /*$$scope*/ 256) {
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
		id: create_each_block$3.name,
		type: "each",
		source: "(10:6) {#each [...Array(100)].map((v, i) => i + 1) as item}",
		ctx
	});

	return block;
}

// (9:4) <List>
function create_default_slot_4$7(ctx) {
	let each_1_anchor;
	let current;
	let each_value = [...Array(100)].map(func);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
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
			if (dirty & /*clicked, Array, open*/ 3) {
				each_value = [...Array(100)].map(func);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$3(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$3(child_ctx);
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
		id: create_default_slot_4$7.name,
		type: "slot",
		source: "(9:4) <List>",
		ctx
	});

	return block;
}

// (8:2) <Content id="list-content">
function create_default_slot_3$7(ctx) {
	let list;
	let current;

	list = new List({
			props: {
				$$slots: { default: [create_default_slot_4$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(list.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(list.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(list, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const list_changes = {};

			if (dirty & /*$$scope, clicked, open*/ 259) {
				list_changes.$$scope = { dirty, ctx };
			}

			list.$set(list_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(list.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(list.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(list, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$7.name,
		type: "slot",
		source: "(8:2) <Content id=\\\"list-content\\\">",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   selection   aria-labelledby="list-title"   aria-describedby="list-content" >
function create_default_slot_2$7(ctx) {
	let title;
	let t;
	let content;
	let current;

	title = new Title({
			props: {
				id: "list-title",
				$$slots: { default: [create_default_slot_7$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "list-content",
				$$slots: { default: [create_default_slot_3$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t = space();
			create_component(content.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(content, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 256) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const content_changes = {};

			if (dirty & /*$$scope, clicked, open*/ 259) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t);
			destroy_component(content, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$7.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   selection   aria-labelledby=\\\"list-title\\\"   aria-describedby=\\\"list-content\\\" >",
		ctx
	});

	return block;
}

// (24:39) <Label>
function create_default_slot_1$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		id: create_default_slot_1$7.name,
		type: "slot",
		source: "(24:39) <Label>",
		ctx
	});

	return block;
}

// (24:0) <Button on:click={() => (open = true)}>
function create_default_slot$7(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$7] },
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

			if (dirty & /*$$scope*/ 256) {
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
		source: "(24:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$7(ctx) {
	let dialog;
	let updating_open;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let t4_value = (/*clicked*/ ctx[1] === 69 ? ", nice" : "") + "";
	let t4;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[3](value);
	}

	let dialog_props = {
		selection: true,
		"aria-labelledby": "list-title",
		"aria-describedby": "list-content",
		$$slots: { default: [create_default_slot_2$7] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_1*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Clicked: ");
			t3 = text(/*clicked*/ ctx[1]);
			t4 = text(t4_value);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Clicked: ");
			t3 = claim_text(pre_nodes, /*clicked*/ ctx[1]);
			t4 = claim_text(pre_nodes, t4_value);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$6, 25, 0, 542);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			append_dev(pre, t4);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope, clicked, open*/ 259) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*clicked*/ 2) set_data_dev(t3, /*clicked*/ ctx[1]);
			if ((!current || dirty & /*clicked*/ 2) && t4_value !== (t4_value = (/*clicked*/ ctx[1] === 69 ? ", nice" : "") + "")) set_data_dev(t4, t4_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(pre);
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

const func = (v, i) => i + 1;

function instance$7($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("List", slots, []);
	let open;
	let clicked = "Nothing yet.";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<List> was created with unknown prop '${key}'`);
	});

	const click_handler = item => {
		$$invalidate(1, clicked = item);
		$$invalidate(0, open = false);
	};

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler_1 = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Title,
		Content,
		Button: Button_1,
		Label: CommonLabel,
		List,
		Item,
		Text,
		open,
		clicked
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("clicked" in $$props) $$invalidate(1, clicked = $$props.clicked);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [open, clicked, click_handler, dialog_open_binding, click_handler_1];
}

class List_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "List_1",
			options,
			id: create_fragment$7.name
		});
	}
}

/* src/routes/demo/dialog/_Selection.svelte generated by Svelte v3.37.0 */
const file$5 = "src/routes/demo/dialog/_Selection.svelte";

// (8:2) <Title id="list-selection-title">
function create_default_slot_19$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Dialog Title");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Dialog Title");
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
		source: "(8:2) <Title id=\\\"list-selection-title\\\">",
		ctx
	});

	return block;
}

// (12:8) <Graphic>
function create_default_slot_18$1(ctx) {
	let radio;
	let updating_group;
	let current;

	function radio_group_binding(value) {
		/*radio_group_binding*/ ctx[4](value);
	}

	let radio_props = { value: "Radishes" };

	if (/*selection*/ ctx[1] !== void 0) {
		radio_props.group = /*selection*/ ctx[1];
	}

	radio = new Radio({ props: radio_props, $$inline: true });
	binding_callbacks.push(() => bind(radio, "group", radio_group_binding));

	const block = {
		c: function create() {
			create_component(radio.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(radio.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(radio, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const radio_changes = {};

			if (!updating_group && dirty & /*selection*/ 2) {
				updating_group = true;
				radio_changes.group = /*selection*/ ctx[1];
				add_flush_callback(() => updating_group = false);
			}

			radio.$set(radio_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(radio.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(radio.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(radio, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_18$1.name,
		type: "slot",
		source: "(12:8) <Graphic>",
		ctx
	});

	return block;
}

// (15:8) <Text>
function create_default_slot_17$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Radishes");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Radishes");
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
		source: "(15:8) <Text>",
		ctx
	});

	return block;
}

// (11:6) <Item use={[InitialFocus]}>
function create_default_slot_16$1(ctx) {
	let graphic;
	let t;
	let text_1;
	let current;

	graphic = new Graphic({
			props: {
				$$slots: { default: [create_default_slot_18$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_17$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(graphic.$$.fragment);
			t = space();
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(graphic.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(graphic, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const graphic_changes = {};

			if (dirty & /*$$scope, selection*/ 514) {
				graphic_changes.$$scope = { dirty, ctx };
			}

			graphic.$set(graphic_changes);
			const text_1_changes = {};

			if (dirty & /*$$scope*/ 512) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(graphic.$$.fragment, local);
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(graphic.$$.fragment, local);
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(graphic, detaching);
			if (detaching) detach_dev(t);
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_16$1.name,
		type: "slot",
		source: "(11:6) <Item use={[InitialFocus]}>",
		ctx
	});

	return block;
}

// (18:8) <Graphic>
function create_default_slot_15$1(ctx) {
	let radio;
	let updating_group;
	let current;

	function radio_group_binding_1(value) {
		/*radio_group_binding_1*/ ctx[5](value);
	}

	let radio_props = { value: "Turnips" };

	if (/*selection*/ ctx[1] !== void 0) {
		radio_props.group = /*selection*/ ctx[1];
	}

	radio = new Radio({ props: radio_props, $$inline: true });
	binding_callbacks.push(() => bind(radio, "group", radio_group_binding_1));

	const block = {
		c: function create() {
			create_component(radio.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(radio.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(radio, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const radio_changes = {};

			if (!updating_group && dirty & /*selection*/ 2) {
				updating_group = true;
				radio_changes.group = /*selection*/ ctx[1];
				add_flush_callback(() => updating_group = false);
			}

			radio.$set(radio_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(radio.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(radio.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(radio, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_15$1.name,
		type: "slot",
		source: "(18:8) <Graphic>",
		ctx
	});

	return block;
}

// (21:8) <Text>
function create_default_slot_14$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Turnips");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Turnips");
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
		id: create_default_slot_14$1.name,
		type: "slot",
		source: "(21:8) <Text>",
		ctx
	});

	return block;
}

// (17:6) <Item>
function create_default_slot_13$1(ctx) {
	let graphic;
	let t;
	let text_1;
	let current;

	graphic = new Graphic({
			props: {
				$$slots: { default: [create_default_slot_15$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_14$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(graphic.$$.fragment);
			t = space();
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(graphic.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(graphic, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const graphic_changes = {};

			if (dirty & /*$$scope, selection*/ 514) {
				graphic_changes.$$scope = { dirty, ctx };
			}

			graphic.$set(graphic_changes);
			const text_1_changes = {};

			if (dirty & /*$$scope*/ 512) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(graphic.$$.fragment, local);
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(graphic.$$.fragment, local);
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(graphic, detaching);
			if (detaching) detach_dev(t);
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_13$1.name,
		type: "slot",
		source: "(17:6) <Item>",
		ctx
	});

	return block;
}

// (24:8) <Graphic>
function create_default_slot_12$1(ctx) {
	let radio;
	let updating_group;
	let current;

	function radio_group_binding_2(value) {
		/*radio_group_binding_2*/ ctx[6](value);
	}

	let radio_props = { value: "Broccoli" };

	if (/*selection*/ ctx[1] !== void 0) {
		radio_props.group = /*selection*/ ctx[1];
	}

	radio = new Radio({ props: radio_props, $$inline: true });
	binding_callbacks.push(() => bind(radio, "group", radio_group_binding_2));

	const block = {
		c: function create() {
			create_component(radio.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(radio.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(radio, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const radio_changes = {};

			if (!updating_group && dirty & /*selection*/ 2) {
				updating_group = true;
				radio_changes.group = /*selection*/ ctx[1];
				add_flush_callback(() => updating_group = false);
			}

			radio.$set(radio_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(radio.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(radio.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(radio, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_12$1.name,
		type: "slot",
		source: "(24:8) <Graphic>",
		ctx
	});

	return block;
}

// (27:8) <Text>
function create_default_slot_11$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Broccoli");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Broccoli");
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
		id: create_default_slot_11$3.name,
		type: "slot",
		source: "(27:8) <Text>",
		ctx
	});

	return block;
}

// (23:6) <Item>
function create_default_slot_10$4(ctx) {
	let graphic;
	let t;
	let text_1;
	let current;

	graphic = new Graphic({
			props: {
				$$slots: { default: [create_default_slot_12$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_11$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(graphic.$$.fragment);
			t = space();
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(graphic.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(graphic, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const graphic_changes = {};

			if (dirty & /*$$scope, selection*/ 514) {
				graphic_changes.$$scope = { dirty, ctx };
			}

			graphic.$set(graphic_changes);
			const text_1_changes = {};

			if (dirty & /*$$scope*/ 512) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(graphic.$$.fragment, local);
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(graphic.$$.fragment, local);
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(graphic, detaching);
			if (detaching) detach_dev(t);
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_10$4.name,
		type: "slot",
		source: "(23:6) <Item>",
		ctx
	});

	return block;
}

// (10:4) <List radioList>
function create_default_slot_9$5(ctx) {
	let item0;
	let t0;
	let item1;
	let t1;
	let item2;
	let current;

	item0 = new Item({
			props: {
				use: [InitialFocus],
				$$slots: { default: [create_default_slot_16$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item1 = new Item({
			props: {
				$$slots: { default: [create_default_slot_13$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item2 = new Item({
			props: {
				$$slots: { default: [create_default_slot_10$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(item0.$$.fragment);
			t0 = space();
			create_component(item1.$$.fragment);
			t1 = space();
			create_component(item2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(item0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(item1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(item2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(item0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(item1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(item2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const item0_changes = {};

			if (dirty & /*$$scope, selection*/ 514) {
				item0_changes.$$scope = { dirty, ctx };
			}

			item0.$set(item0_changes);
			const item1_changes = {};

			if (dirty & /*$$scope, selection*/ 514) {
				item1_changes.$$scope = { dirty, ctx };
			}

			item1.$set(item1_changes);
			const item2_changes = {};

			if (dirty & /*$$scope, selection*/ 514) {
				item2_changes.$$scope = { dirty, ctx };
			}

			item2.$set(item2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(item0.$$.fragment, local);
			transition_in(item1.$$.fragment, local);
			transition_in(item2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(item0.$$.fragment, local);
			transition_out(item1.$$.fragment, local);
			transition_out(item2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(item0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(item1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(item2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9$5.name,
		type: "slot",
		source: "(10:4) <List radioList>",
		ctx
	});

	return block;
}

// (9:2) <Content id="list-selection-content">
function create_default_slot_8$5(ctx) {
	let list;
	let current;

	list = new List({
			props: {
				radioList: true,
				$$slots: { default: [create_default_slot_9$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(list.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(list.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(list, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const list_changes = {};

			if (dirty & /*$$scope, selection*/ 514) {
				list_changes.$$scope = { dirty, ctx };
			}

			list.$set(list_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(list.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(list.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(list, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$5.name,
		type: "slot",
		source: "(9:2) <Content id=\\\"list-selection-content\\\">",
		ctx
	});

	return block;
}

// (33:6) <Label>
function create_default_slot_7$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Cancel");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Cancel");
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
		id: create_default_slot_7$6.name,
		type: "slot",
		source: "(33:6) <Label>",
		ctx
	});

	return block;
}

// (32:4) <Button>
function create_default_slot_6$6(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7$6] },
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
		id: create_default_slot_6$6.name,
		type: "slot",
		source: "(32:4) <Button>",
		ctx
	});

	return block;
}

// (36:6) <Label>
function create_default_slot_5$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Accept");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Accept");
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
		id: create_default_slot_5$6.name,
		type: "slot",
		source: "(36:6) <Label>",
		ctx
	});

	return block;
}

// (35:4) <Button action="accept">
function create_default_slot_4$6(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$6] },
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
		id: create_default_slot_4$6.name,
		type: "slot",
		source: "(35:4) <Button action=\\\"accept\\\">",
		ctx
	});

	return block;
}

// (31:2) <Actions>
function create_default_slot_3$6(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_6$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button_1({
			props: {
				action: "accept",
				$$slots: { default: [create_default_slot_4$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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

			if (dirty & /*$$scope*/ 512) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 512) {
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
		id: create_default_slot_3$6.name,
		type: "slot",
		source: "(31:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   selection   aria-labelledby="list-selection-title"   aria-describedby="list-selection-content"   on:MDCDialog:closed={closeHandler} >
function create_default_slot_2$6(ctx) {
	let title;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	title = new Title({
			props: {
				id: "list-selection-title",
				$$slots: { default: [create_default_slot_19$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "list-selection-content",
				$$slots: { default: [create_default_slot_8$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 512) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const content_changes = {};

			if (dirty & /*$$scope, selection*/ 514) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 512) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$6.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   selection   aria-labelledby=\\\"list-selection-title\\\"   aria-describedby=\\\"list-selection-content\\\"   on:MDCDialog:closed={closeHandler} >",
		ctx
	});

	return block;
}

// (42:2) <Label>
function create_default_slot_1$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		source: "(42:2) <Label>",
		ctx
	});

	return block;
}

// (41:0) <Button on:click={() => (open = true)}>
function create_default_slot$6(ctx) {
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
		source: "(41:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$6(ctx) {
	let dialog;
	let updating_open;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[7](value);
	}

	let dialog_props = {
		selection: true,
		"aria-labelledby": "list-selection-title",
		"aria-describedby": "list-selection-content",
		$$slots: { default: [create_default_slot_2$6] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));
	dialog.$on("MDCDialog:closed", /*closeHandler*/ ctx[3]);

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[8]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Selected: ");
			t3 = text(/*selected*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Selected: ");
			t3 = claim_text(pre_nodes, /*selected*/ ctx[2]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$5, 44, 0, 1021);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope, selection*/ 514) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 512) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*selected*/ 4) set_data_dev(t3, /*selected*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(pre);
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
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Selection", slots, []);
	let open;
	let selection = "Radishes";
	let selected = "Nothing yet.";

	function closeHandler(e) {
		if (e.detail.action === "accept") {
			$$invalidate(2, selected = selection);
		}

		$$invalidate(1, selection = "Radishes");
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Selection> was created with unknown prop '${key}'`);
	});

	function radio_group_binding(value) {
		selection = value;
		$$invalidate(1, selection);
	}

	function radio_group_binding_1(value) {
		selection = value;
		$$invalidate(1, selection);
	}

	function radio_group_binding_2(value) {
		selection = value;
		$$invalidate(1, selection);
	}

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Title,
		Content,
		Actions,
		InitialFocus,
		Button: Button_1,
		Label: CommonLabel,
		List,
		Item,
		Graphic,
		Text,
		Radio,
		open,
		selection,
		selected,
		closeHandler
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("selection" in $$props) $$invalidate(1, selection = $$props.selection);
		if ("selected" in $$props) $$invalidate(2, selected = $$props.selected);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		open,
		selection,
		selected,
		closeHandler,
		radio_group_binding,
		radio_group_binding_1,
		radio_group_binding_2,
		dialog_open_binding,
		click_handler
	];
}

class Selection extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Selection",
			options,
			id: create_fragment$6.name
		});
	}
}

/* src/routes/demo/dialog/_Sliders.svelte generated by Svelte v3.37.0 */
const file$4 = "src/routes/demo/dialog/_Sliders.svelte";

// (6:2) <Title id="slider-title">
function create_default_slot_10$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Volumes");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Volumes");
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
		id: create_default_slot_10$3.name,
		type: "slot",
		source: "(6:2) <Title id=\\\"slider-title\\\">",
		ctx
	});

	return block;
}

// (9:6) <FormField style="display: flex; flex-direction: column-reverse;">
function create_default_slot_9$4(ctx) {
	let slider;
	let updating_value;
	let current;

	function slider_value_binding(value) {
		/*slider_value_binding*/ ctx[4](value);
	}

	let slider_props = {
		use: [InitialFocus],
		style: "width: 100%;"
	};

	if (/*volumeMedia*/ ctx[1] !== void 0) {
		slider_props.value = /*volumeMedia*/ ctx[1];
	}

	slider = new Slider({ props: slider_props, $$inline: true });
	binding_callbacks.push(() => bind(slider, "value", slider_value_binding));

	const block = {
		c: function create() {
			create_component(slider.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(slider.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(slider, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const slider_changes = {};

			if (!updating_value && dirty & /*volumeMedia*/ 2) {
				updating_value = true;
				slider_changes.value = /*volumeMedia*/ ctx[1];
				add_flush_callback(() => updating_value = false);
			}

			slider.$set(slider_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(slider.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(slider.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(slider, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9$4.name,
		type: "slot",
		source: "(9:6) <FormField style=\\\"display: flex; flex-direction: column-reverse;\\\">",
		ctx
	});

	return block;
}

// (15:8) 
function create_label_slot_2(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Media Volume");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Media Volume");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$4, 14, 8, 381);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_label_slot_2.name,
		type: "slot",
		source: "(15:8) ",
		ctx
	});

	return block;
}

// (19:6) <FormField style="display: flex; flex-direction: column-reverse;">
function create_default_slot_8$4(ctx) {
	let slider;
	let updating_value;
	let current;

	function slider_value_binding_1(value) {
		/*slider_value_binding_1*/ ctx[5](value);
	}

	let slider_props = { style: "width: 100%;" };

	if (/*volumeRingtone*/ ctx[2] !== void 0) {
		slider_props.value = /*volumeRingtone*/ ctx[2];
	}

	slider = new Slider({ props: slider_props, $$inline: true });
	binding_callbacks.push(() => bind(slider, "value", slider_value_binding_1));

	const block = {
		c: function create() {
			create_component(slider.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(slider.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(slider, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const slider_changes = {};

			if (!updating_value && dirty & /*volumeRingtone*/ 4) {
				updating_value = true;
				slider_changes.value = /*volumeRingtone*/ ctx[2];
				add_flush_callback(() => updating_value = false);
			}

			slider.$set(slider_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(slider.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(slider.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(slider, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$4.name,
		type: "slot",
		source: "(19:6) <FormField style=\\\"display: flex; flex-direction: column-reverse;\\\">",
		ctx
	});

	return block;
}

// (21:8) 
function create_label_slot_1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Ringtone Volume");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Ringtone Volume");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$4, 20, 8, 609);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_label_slot_1.name,
		type: "slot",
		source: "(21:8) ",
		ctx
	});

	return block;
}

// (25:6) <FormField style="display: flex; flex-direction: column-reverse;">
function create_default_slot_7$5(ctx) {
	let slider;
	let updating_value;
	let current;

	function slider_value_binding_2(value) {
		/*slider_value_binding_2*/ ctx[6](value);
	}

	let slider_props = { style: "width: 100%;" };

	if (/*volumeAlarm*/ ctx[3] !== void 0) {
		slider_props.value = /*volumeAlarm*/ ctx[3];
	}

	slider = new Slider({ props: slider_props, $$inline: true });
	binding_callbacks.push(() => bind(slider, "value", slider_value_binding_2));

	const block = {
		c: function create() {
			create_component(slider.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(slider.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(slider, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const slider_changes = {};

			if (!updating_value && dirty & /*volumeAlarm*/ 8) {
				updating_value = true;
				slider_changes.value = /*volumeAlarm*/ ctx[3];
				add_flush_callback(() => updating_value = false);
			}

			slider.$set(slider_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(slider.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(slider.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(slider, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$5.name,
		type: "slot",
		source: "(25:6) <FormField style=\\\"display: flex; flex-direction: column-reverse;\\\">",
		ctx
	});

	return block;
}

// (27:8) 
function create_label_slot(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Alarm Volume");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Alarm Volume");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$4, 26, 8, 837);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_label_slot.name,
		type: "slot",
		source: "(27:8) ",
		ctx
	});

	return block;
}

// (7:2) <Content id="slider-content">
function create_default_slot_6$5(ctx) {
	let div0;
	let formfield0;
	let t0;
	let div1;
	let formfield1;
	let t1;
	let div2;
	let formfield2;
	let current;

	formfield0 = new FormField({
			props: {
				style: "display: flex; flex-direction: column-reverse;",
				$$slots: {
					label: [create_label_slot_2],
					default: [create_default_slot_9$4]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	formfield1 = new FormField({
			props: {
				style: "display: flex; flex-direction: column-reverse;",
				$$slots: {
					label: [create_label_slot_1],
					default: [create_default_slot_8$4]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	formfield2 = new FormField({
			props: {
				style: "display: flex; flex-direction: column-reverse;",
				$$slots: {
					label: [create_label_slot],
					default: [create_default_slot_7$5]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(formfield0.$$.fragment);
			t0 = space();
			div1 = element("div");
			create_component(formfield1.$$.fragment);
			t1 = space();
			div2 = element("div");
			create_component(formfield2.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(formfield0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(formfield1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(formfield2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file$4, 7, 4, 170);
			add_location(div1, file$4, 17, 4, 454);
			add_location(div2, file$4, 23, 4, 685);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(formfield0, div0, null);
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			mount_component(formfield1, div1, null);
			insert_dev(target, t1, anchor);
			insert_dev(target, div2, anchor);
			mount_component(formfield2, div2, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const formfield0_changes = {};

			if (dirty & /*$$scope, volumeMedia*/ 514) {
				formfield0_changes.$$scope = { dirty, ctx };
			}

			formfield0.$set(formfield0_changes);
			const formfield1_changes = {};

			if (dirty & /*$$scope, volumeRingtone*/ 516) {
				formfield1_changes.$$scope = { dirty, ctx };
			}

			formfield1.$set(formfield1_changes);
			const formfield2_changes = {};

			if (dirty & /*$$scope, volumeAlarm*/ 520) {
				formfield2_changes.$$scope = { dirty, ctx };
			}

			formfield2.$set(formfield2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(formfield0.$$.fragment, local);
			transition_in(formfield1.$$.fragment, local);
			transition_in(formfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(formfield0.$$.fragment, local);
			transition_out(formfield1.$$.fragment, local);
			transition_out(formfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(formfield0);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			destroy_component(formfield1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div2);
			destroy_component(formfield2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$5.name,
		type: "slot",
		source: "(7:2) <Content id=\\\"slider-content\\\">",
		ctx
	});

	return block;
}

// (33:6) <Label>
function create_default_slot_5$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Done");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Done");
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
		id: create_default_slot_5$5.name,
		type: "slot",
		source: "(33:6) <Label>",
		ctx
	});

	return block;
}

// (32:4) <Button action="accept">
function create_default_slot_4$5(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$5] },
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
		id: create_default_slot_4$5.name,
		type: "slot",
		source: "(32:4) <Button action=\\\"accept\\\">",
		ctx
	});

	return block;
}

// (31:2) <Actions>
function create_default_slot_3$5(ctx) {
	let button;
	let current;

	button = new Button_1({
			props: {
				action: "accept",
				$$slots: { default: [create_default_slot_4$5] },
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

			if (dirty & /*$$scope*/ 512) {
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
		id: create_default_slot_3$5.name,
		type: "slot",
		source: "(31:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   aria-labelledby="slider-title"   aria-describedby="slider-content" >
function create_default_slot_2$5(ctx) {
	let title;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	title = new Title({
			props: {
				id: "slider-title",
				$$slots: { default: [create_default_slot_10$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "slider-content",
				$$slots: { default: [create_default_slot_6$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 512) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const content_changes = {};

			if (dirty & /*$$scope, volumeAlarm, volumeRingtone, volumeMedia*/ 526) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 512) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$5.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   aria-labelledby=\\\"slider-title\\\"   aria-describedby=\\\"slider-content\\\" >",
		ctx
	});

	return block;
}

// (39:2) <Label>
function create_default_slot_1$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		source: "(39:2) <Label>",
		ctx
	});

	return block;
}

// (38:0) <Button on:click={() => (open = true)}>
function create_default_slot$5(ctx) {
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
		id: create_default_slot$5.name,
		type: "slot",
		source: "(38:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let dialog;
	let updating_open;
	let t;
	let button;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[7](value);
	}

	let dialog_props = {
		"aria-labelledby": "slider-title",
		"aria-describedby": "slider-content",
		$$slots: { default: [create_default_slot_2$5] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[8]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t = space();
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope, volumeAlarm, volumeRingtone, volumeMedia*/ 526) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 512) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t);
			destroy_component(button, detaching);
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
	validate_slots("Sliders", slots, []);
	let open;
	let volumeMedia = 100;
	let volumeRingtone = 80;
	let volumeAlarm = 80;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Sliders> was created with unknown prop '${key}'`);
	});

	function slider_value_binding(value) {
		volumeMedia = value;
		$$invalidate(1, volumeMedia);
	}

	function slider_value_binding_1(value) {
		volumeRingtone = value;
		$$invalidate(2, volumeRingtone);
	}

	function slider_value_binding_2(value) {
		volumeAlarm = value;
		$$invalidate(3, volumeAlarm);
	}

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Title,
		Content,
		Actions,
		InitialFocus,
		Button: Button_1,
		Label: CommonLabel,
		Slider,
		FormField,
		open,
		volumeMedia,
		volumeRingtone,
		volumeAlarm
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("volumeMedia" in $$props) $$invalidate(1, volumeMedia = $$props.volumeMedia);
		if ("volumeRingtone" in $$props) $$invalidate(2, volumeRingtone = $$props.volumeRingtone);
		if ("volumeAlarm" in $$props) $$invalidate(3, volumeAlarm = $$props.volumeAlarm);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		open,
		volumeMedia,
		volumeRingtone,
		volumeAlarm,
		slider_value_binding,
		slider_value_binding_1,
		slider_value_binding_2,
		dialog_open_binding,
		click_handler
	];
}

class Sliders extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Sliders",
			options,
			id: create_fragment$5.name
		});
	}
}

/* src/routes/demo/dialog/_LargeScroll.svelte generated by Svelte v3.37.0 */

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (7:2) <Title id="large-scroll-title">
function create_default_slot_7$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("A Brief Selection of Placeholder Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "A Brief Selection of Placeholder Text");
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
		id: create_default_slot_7$4.name,
		type: "slot",
		source: "(7:2) <Title id=\\\"large-scroll-title\\\">",
		ctx
	});

	return block;
}

// (9:4) {#each Array(10) as _item}
function create_each_block$2(ctx) {
	let loremipsum;
	let current;
	loremipsum = new LoremIpsum({ $$inline: true });

	const block = {
		c: function create() {
			create_component(loremipsum.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(loremipsum.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(loremipsum, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(loremipsum.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(loremipsum.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(loremipsum, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$2.name,
		type: "each",
		source: "(9:4) {#each Array(10) as _item}",
		ctx
	});

	return block;
}

// (8:2) <Content id="large-scroll-content">
function create_default_slot_6$4(ctx) {
	let each_1_anchor;
	let current;
	let each_value = Array(10);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
	}

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
		p: noop,
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
		id: create_default_slot_6$4.name,
		type: "slot",
		source: "(8:2) <Content id=\\\"large-scroll-content\\\">",
		ctx
	});

	return block;
}

// (15:6) <Label>
function create_default_slot_5$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Done");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Done");
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
		id: create_default_slot_5$4.name,
		type: "slot",
		source: "(15:6) <Label>",
		ctx
	});

	return block;
}

// (14:4) <Button action="accept">
function create_default_slot_4$4(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$4] },
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
		id: create_default_slot_4$4.name,
		type: "slot",
		source: "(14:4) <Button action=\\\"accept\\\">",
		ctx
	});

	return block;
}

// (13:2) <Actions>
function create_default_slot_3$4(ctx) {
	let button;
	let current;

	button = new Button_1({
			props: {
				action: "accept",
				$$slots: { default: [create_default_slot_4$4] },
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

			if (dirty & /*$$scope*/ 64) {
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
		source: "(13:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   aria-labelledby="large-scroll-title"   aria-describedby="large-scroll-content"   surface$style="width: 850px; max-width: calc(100vw - 32px);" >
function create_default_slot_2$4(ctx) {
	let title;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	title = new Title({
			props: {
				id: "large-scroll-title",
				$$slots: { default: [create_default_slot_7$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "large-scroll-content",
				$$slots: { default: [create_default_slot_6$4] },
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
			create_component(title.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 64) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const content_changes = {};

			if (dirty & /*$$scope*/ 64) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 64) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$4.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   aria-labelledby=\\\"large-scroll-title\\\"   aria-describedby=\\\"large-scroll-content\\\"   surface$style=\\\"width: 850px; max-width: calc(100vw - 32px);\\\" >",
		ctx
	});

	return block;
}

// (21:2) <Label>
function create_default_slot_1$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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

// (20:0) <Button on:click={() => (open = true)}>
function create_default_slot$4(ctx) {
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
		id: create_default_slot$4.name,
		type: "slot",
		source: "(20:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let dialog;
	let updating_open;
	let t;
	let button;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[1](value);
	}

	let dialog_props = {
		"aria-labelledby": "large-scroll-title",
		"aria-describedby": "large-scroll-content",
		surface$style: "width: 850px; max-width: calc(100vw - 32px);",
		$$slots: { default: [create_default_slot_2$4] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[2]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t = space();
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope*/ 64) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 64) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t);
			destroy_component(button, detaching);
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
	validate_slots("LargeScroll", slots, []);
	let open;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<LargeScroll> was created with unknown prop '${key}'`);
	});

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Title,
		Content,
		Actions,
		Button: Button_1,
		Label: CommonLabel,
		LoremIpsum,
		open
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [open, dialog_open_binding, click_handler];
}

class LargeScroll extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LargeScroll",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src/routes/demo/dialog/_Fullscreen.svelte generated by Svelte v3.37.0 */
const file$3 = "src/routes/demo/dialog/_Fullscreen.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i];
	return child_ctx;
}

// (9:4) <Title id="fullscreen-title">
function create_default_slot_11$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Terms and Conditions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Terms and Conditions");
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
		id: create_default_slot_11$2.name,
		type: "slot",
		source: "(9:4) <Title id=\\\"fullscreen-title\\\">",
		ctx
	});

	return block;
}

// (10:4) <IconButton action="close" class="material-icons">
function create_default_slot_10$2(ctx) {
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
		id: create_default_slot_10$2.name,
		type: "slot",
		source: "(10:4) <IconButton action=\\\"close\\\" class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (8:2) <Header>
function create_default_slot_9$3(ctx) {
	let title;
	let t;
	let iconbutton;
	let current;

	title = new Title({
			props: {
				id: "fullscreen-title",
				$$slots: { default: [create_default_slot_11$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton = new IconButton({
			props: {
				action: "close",
				class: "material-icons",
				$$slots: { default: [create_default_slot_10$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t = space();
			create_component(iconbutton.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(iconbutton.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(iconbutton, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 256) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const iconbutton_changes = {};

			if (dirty & /*$$scope*/ 256) {
				iconbutton_changes.$$scope = { dirty, ctx };
			}

			iconbutton.$set(iconbutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(iconbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(iconbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t);
			destroy_component(iconbutton, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9$3.name,
		type: "slot",
		source: "(8:2) <Header>",
		ctx
	});

	return block;
}

// (13:4) {#each Array(3) as _item}
function create_each_block$1(ctx) {
	let loremipsum;
	let current;
	loremipsum = new LoremIpsum({ $$inline: true });

	const block = {
		c: function create() {
			create_component(loremipsum.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(loremipsum.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(loremipsum, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(loremipsum.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(loremipsum.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(loremipsum, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(13:4) {#each Array(3) as _item}",
		ctx
	});

	return block;
}

// (12:2) <Content id="fullscreen-content">
function create_default_slot_8$3(ctx) {
	let each_1_anchor;
	let current;
	let each_value = Array(3);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

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
		p: noop,
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
		id: create_default_slot_8$3.name,
		type: "slot",
		source: "(12:2) <Content id=\\\"fullscreen-content\\\">",
		ctx
	});

	return block;
}

// (19:6) <Label>
function create_default_slot_7$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Reject");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Reject");
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
		id: create_default_slot_7$3.name,
		type: "slot",
		source: "(19:6) <Label>",
		ctx
	});

	return block;
}

// (18:4) <Button action="reject">
function create_default_slot_6$3(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7$3] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_default_slot_6$3.name,
		type: "slot",
		source: "(18:4) <Button action=\\\"reject\\\">",
		ctx
	});

	return block;
}

// (22:6) <Label>
function create_default_slot_5$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Accept");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Accept");
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
		id: create_default_slot_5$3.name,
		type: "slot",
		source: "(22:6) <Label>",
		ctx
	});

	return block;
}

// (21:4) <Button action="accept" default>
function create_default_slot_4$3(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$3] },
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

			if (dirty & /*$$scope*/ 256) {
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
		source: "(21:4) <Button action=\\\"accept\\\" default>",
		ctx
	});

	return block;
}

// (17:2) <Actions>
function create_default_slot_3$3(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				action: "reject",
				$$slots: { default: [create_default_slot_6$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button_1({
			props: {
				action: "accept",
				default: true,
				$$slots: { default: [create_default_slot_4$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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

			if (dirty & /*$$scope*/ 256) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 256) {
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
		id: create_default_slot_3$3.name,
		type: "slot",
		source: "(17:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   fullscreen   aria-labelledby="fullscreen-title"   aria-describedby="fullscreen-content"   on:MDCDialog:closed={closeHandler} >
function create_default_slot_2$3(ctx) {
	let header;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	header = new Header({
			props: {
				$$slots: { default: [create_default_slot_9$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "fullscreen-content",
				$$slots: { default: [create_default_slot_8$3] },
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
			create_component(header.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(header.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(header, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const header_changes = {};

			if (dirty & /*$$scope*/ 256) {
				header_changes.$$scope = { dirty, ctx };
			}

			header.$set(header_changes);
			const content_changes = {};

			if (dirty & /*$$scope*/ 256) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 256) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(header.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(header, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   fullscreen   aria-labelledby=\\\"fullscreen-title\\\"   aria-describedby=\\\"fullscreen-content\\\"   on:MDCDialog:closed={closeHandler} >",
		ctx
	});

	return block;
}

// (28:2) <Label>
function create_default_slot_1$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		source: "(28:2) <Label>",
		ctx
	});

	return block;
}

// (27:0) <Button on:click={() => (open = true)}>
function create_default_slot$3(ctx) {
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_default_slot$3.name,
		type: "slot",
		source: "(27:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let dialog;
	let updating_open;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[3](value);
	}

	let dialog_props = {
		fullscreen: true,
		"aria-labelledby": "fullscreen-title",
		"aria-describedby": "fullscreen-content",
		$$slots: { default: [create_default_slot_2$3] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));
	dialog.$on("MDCDialog:closed", /*closeHandler*/ ctx[2]);

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Response: ");
			t3 = text(/*response*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Response: ");
			t3 = claim_text(pre_nodes, /*response*/ ctx[1]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$3, 30, 0, 685);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope*/ 256) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*response*/ 2) set_data_dev(t3, /*response*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
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
	validate_slots("Fullscreen", slots, []);
	let open;
	let response = "Nothing yet.";

	function closeHandler(e) {
		switch (e.detail.action) {
			case "close":
				$$invalidate(1, response = "Closed without response.");
				break;
			case "reject":
				$$invalidate(1, response = "Rejected.");
				break;
			case "accept":
				$$invalidate(1, response = "Accepted.");
				break;
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Fullscreen> was created with unknown prop '${key}'`);
	});

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Header,
		Title,
		Content,
		Actions,
		IconButton,
		Button: Button_1,
		Label: CommonLabel,
		LoremIpsum,
		open,
		response,
		closeHandler
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("response" in $$props) $$invalidate(1, response = $$props.response);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [open, response, closeHandler, dialog_open_binding, click_handler];
}

class Fullscreen extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Fullscreen",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/dialog/_OverFullscreen.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/dialog/_OverFullscreen.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[13] = list[i];
	return child_ctx;
}

// (9:4) <Title id="over-fullscreen-title">
function create_default_slot_29(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Terms and Conditions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Terms and Conditions");
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
		source: "(9:4) <Title id=\\\"over-fullscreen-title\\\">",
		ctx
	});

	return block;
}

// (10:4) <IconButton action="close" class="material-icons">
function create_default_slot_28(ctx) {
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
		id: create_default_slot_28.name,
		type: "slot",
		source: "(10:4) <IconButton action=\\\"close\\\" class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (8:2) <Header>
function create_default_slot_27(ctx) {
	let title;
	let t;
	let iconbutton;
	let current;

	title = new Title({
			props: {
				id: "over-fullscreen-title",
				$$slots: { default: [create_default_slot_29] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	iconbutton = new IconButton({
			props: {
				action: "close",
				class: "material-icons",
				$$slots: { default: [create_default_slot_28] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t = space();
			create_component(iconbutton.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(iconbutton.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(iconbutton, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const iconbutton_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				iconbutton_changes.$$scope = { dirty, ctx };
			}

			iconbutton.$set(iconbutton_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(iconbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(iconbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t);
			destroy_component(iconbutton, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_27.name,
		type: "slot",
		source: "(8:2) <Header>",
		ctx
	});

	return block;
}

// (14:6) <Label>
function create_default_slot_26(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Confirmation Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Confirmation Dialog");
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
		id: create_default_slot_26.name,
		type: "slot",
		source: "(14:6) <Label>",
		ctx
	});

	return block;
}

// (13:4) <Button on:click={() => (subOpen = true)}>
function create_default_slot_25(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_26] },
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

			if (dirty & /*$$scope*/ 65536) {
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
		id: create_default_slot_25.name,
		type: "slot",
		source: "(13:4) <Button on:click={() => (subOpen = true)}>",
		ctx
	});

	return block;
}

// (16:4) {#each Array(3) as _item}
function create_each_block(ctx) {
	let loremipsum;
	let current;
	loremipsum = new LoremIpsum({ $$inline: true });

	const block = {
		c: function create() {
			create_component(loremipsum.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(loremipsum.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(loremipsum, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(loremipsum.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(loremipsum.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(loremipsum, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(16:4) {#each Array(3) as _item}",
		ctx
	});

	return block;
}

// (12:2) <Content id="over-fullscreen-content">
function create_default_slot_24(ctx) {
	let button;
	let t;
	let each_1_anchor;
	let current;

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_25] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[10]);
	let each_value = Array(3);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			create_component(button.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(button.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(button, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_24.name,
		type: "slot",
		source: "(12:2) <Content id=\\\"over-fullscreen-content\\\">",
		ctx
	});

	return block;
}

// (22:6) <Label>
function create_default_slot_23(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Reject");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Reject");
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
		id: create_default_slot_23.name,
		type: "slot",
		source: "(22:6) <Label>",
		ctx
	});

	return block;
}

// (21:4) <Button action="reject">
function create_default_slot_22(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_23] },
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

			if (dirty & /*$$scope*/ 65536) {
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
		id: create_default_slot_22.name,
		type: "slot",
		source: "(21:4) <Button action=\\\"reject\\\">",
		ctx
	});

	return block;
}

// (25:6) <Label>
function create_default_slot_21(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Accept");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Accept");
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
		source: "(25:6) <Label>",
		ctx
	});

	return block;
}

// (24:4) <Button action="accept" default>
function create_default_slot_20(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_21] },
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

			if (dirty & /*$$scope*/ 65536) {
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
		id: create_default_slot_20.name,
		type: "slot",
		source: "(24:4) <Button action=\\\"accept\\\" default>",
		ctx
	});

	return block;
}

// (20:2) <Actions>
function create_default_slot_19(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				action: "reject",
				$$slots: { default: [create_default_slot_22] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button_1({
			props: {
				action: "accept",
				default: true,
				$$slots: { default: [create_default_slot_20] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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

			if (dirty & /*$$scope*/ 65536) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 65536) {
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
		id: create_default_slot_19.name,
		type: "slot",
		source: "(20:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   fullscreen   aria-labelledby="over-fullscreen-title"   aria-describedby="over-fullscreen-content"   on:MDCDialog:closed={closeHandler} >
function create_default_slot_18(ctx) {
	let header;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	header = new Header({
			props: {
				$$slots: { default: [create_default_slot_27] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "over-fullscreen-content",
				$$slots: { default: [create_default_slot_24] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_19] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(header.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(header.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(header, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const header_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				header_changes.$$scope = { dirty, ctx };
			}

			header.$set(header_changes);
			const content_changes = {};

			if (dirty & /*$$scope, subOpen*/ 65538) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(header.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(header, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_18.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   fullscreen   aria-labelledby=\\\"over-fullscreen-title\\\"   aria-describedby=\\\"over-fullscreen-content\\\"   on:MDCDialog:closed={closeHandler} >",
		ctx
	});

	return block;
}

// (38:6) <Title id="over-fullscreen-confirmation-title">
function create_default_slot_17(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Confirmation");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Confirmation");
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
		id: create_default_slot_17.name,
		type: "slot",
		source: "(38:6) <Title id=\\\"over-fullscreen-confirmation-title\\\">",
		ctx
	});

	return block;
}

// (37:4) <Header>
function create_default_slot_16(ctx) {
	let title;
	let current;

	title = new Title({
			props: {
				id: "over-fullscreen-confirmation-title",
				$$slots: { default: [create_default_slot_17] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_16.name,
		type: "slot",
		source: "(37:4) <Header>",
		ctx
	});

	return block;
}

// (43:10) <Graphic>
function create_default_slot_15(ctx) {
	let radio;
	let updating_group;
	let current;

	function radio_group_binding(value) {
		/*radio_group_binding*/ ctx[7](value);
	}

	let radio_props = { value: "One" };

	if (/*selection*/ ctx[2] !== void 0) {
		radio_props.group = /*selection*/ ctx[2];
	}

	radio = new Radio({ props: radio_props, $$inline: true });
	binding_callbacks.push(() => bind(radio, "group", radio_group_binding));

	const block = {
		c: function create() {
			create_component(radio.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(radio.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(radio, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const radio_changes = {};

			if (!updating_group && dirty & /*selection*/ 4) {
				updating_group = true;
				radio_changes.group = /*selection*/ ctx[2];
				add_flush_callback(() => updating_group = false);
			}

			radio.$set(radio_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(radio.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(radio.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(radio, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_15.name,
		type: "slot",
		source: "(43:10) <Graphic>",
		ctx
	});

	return block;
}

// (46:10) <Text>
function create_default_slot_14(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Choice 1");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Choice 1");
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
		id: create_default_slot_14.name,
		type: "slot",
		source: "(46:10) <Text>",
		ctx
	});

	return block;
}

// (42:8) <Item use={[InitialFocus]}>
function create_default_slot_13(ctx) {
	let graphic;
	let t;
	let text_1;
	let current;

	graphic = new Graphic({
			props: {
				$$slots: { default: [create_default_slot_15] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_14] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(graphic.$$.fragment);
			t = space();
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(graphic.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(graphic, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const graphic_changes = {};

			if (dirty & /*$$scope, selection*/ 65540) {
				graphic_changes.$$scope = { dirty, ctx };
			}

			graphic.$set(graphic_changes);
			const text_1_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(graphic.$$.fragment, local);
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(graphic.$$.fragment, local);
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(graphic, detaching);
			if (detaching) detach_dev(t);
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_13.name,
		type: "slot",
		source: "(42:8) <Item use={[InitialFocus]}>",
		ctx
	});

	return block;
}

// (49:10) <Graphic>
function create_default_slot_12(ctx) {
	let radio;
	let updating_group;
	let current;

	function radio_group_binding_1(value) {
		/*radio_group_binding_1*/ ctx[8](value);
	}

	let radio_props = { value: "Two" };

	if (/*selection*/ ctx[2] !== void 0) {
		radio_props.group = /*selection*/ ctx[2];
	}

	radio = new Radio({ props: radio_props, $$inline: true });
	binding_callbacks.push(() => bind(radio, "group", radio_group_binding_1));

	const block = {
		c: function create() {
			create_component(radio.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(radio.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(radio, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const radio_changes = {};

			if (!updating_group && dirty & /*selection*/ 4) {
				updating_group = true;
				radio_changes.group = /*selection*/ ctx[2];
				add_flush_callback(() => updating_group = false);
			}

			radio.$set(radio_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(radio.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(radio.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(radio, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_12.name,
		type: "slot",
		source: "(49:10) <Graphic>",
		ctx
	});

	return block;
}

// (52:10) <Text>
function create_default_slot_11$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Choice 2");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Choice 2");
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
		id: create_default_slot_11$1.name,
		type: "slot",
		source: "(52:10) <Text>",
		ctx
	});

	return block;
}

// (48:8) <Item>
function create_default_slot_10$1(ctx) {
	let graphic;
	let t;
	let text_1;
	let current;

	graphic = new Graphic({
			props: {
				$$slots: { default: [create_default_slot_12] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_11$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(graphic.$$.fragment);
			t = space();
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(graphic.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(graphic, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const graphic_changes = {};

			if (dirty & /*$$scope, selection*/ 65540) {
				graphic_changes.$$scope = { dirty, ctx };
			}

			graphic.$set(graphic_changes);
			const text_1_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(graphic.$$.fragment, local);
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(graphic.$$.fragment, local);
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(graphic, detaching);
			if (detaching) detach_dev(t);
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_10$1.name,
		type: "slot",
		source: "(48:8) <Item>",
		ctx
	});

	return block;
}

// (41:6) <List radioList>
function create_default_slot_9$2(ctx) {
	let item0;
	let t;
	let item1;
	let current;

	item0 = new Item({
			props: {
				use: [InitialFocus],
				$$slots: { default: [create_default_slot_13] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item1 = new Item({
			props: {
				$$slots: { default: [create_default_slot_10$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(item0.$$.fragment);
			t = space();
			create_component(item1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(item0.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(item1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(item0, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(item1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const item0_changes = {};

			if (dirty & /*$$scope, selection*/ 65540) {
				item0_changes.$$scope = { dirty, ctx };
			}

			item0.$set(item0_changes);
			const item1_changes = {};

			if (dirty & /*$$scope, selection*/ 65540) {
				item1_changes.$$scope = { dirty, ctx };
			}

			item1.$set(item1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(item0.$$.fragment, local);
			transition_in(item1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(item0.$$.fragment, local);
			transition_out(item1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(item0, detaching);
			if (detaching) detach_dev(t);
			destroy_component(item1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9$2.name,
		type: "slot",
		source: "(41:6) <List radioList>",
		ctx
	});

	return block;
}

// (40:4) <Content id="over-fullscreen-confirmation-content">
function create_default_slot_8$2(ctx) {
	let list;
	let current;

	list = new List({
			props: {
				radioList: true,
				$$slots: { default: [create_default_slot_9$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(list.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(list.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(list, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const list_changes = {};

			if (dirty & /*$$scope, selection*/ 65540) {
				list_changes.$$scope = { dirty, ctx };
			}

			list.$set(list_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(list.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(list.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(list, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$2.name,
		type: "slot",
		source: "(40:4) <Content id=\\\"over-fullscreen-confirmation-content\\\">",
		ctx
	});

	return block;
}

// (58:8) <Label>
function create_default_slot_7$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Cancel");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Cancel");
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
		source: "(58:8) <Label>",
		ctx
	});

	return block;
}

// (57:6) <Button>
function create_default_slot_6$2(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7$2] },
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

			if (dirty & /*$$scope*/ 65536) {
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
		id: create_default_slot_6$2.name,
		type: "slot",
		source: "(57:6) <Button>",
		ctx
	});

	return block;
}

// (61:8) <Label>
function create_default_slot_5$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Accept");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Accept");
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
		source: "(61:8) <Label>",
		ctx
	});

	return block;
}

// (60:6) <Button action="accept">
function create_default_slot_4$2(ctx) {
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

			if (dirty & /*$$scope*/ 65536) {
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
		id: create_default_slot_4$2.name,
		type: "slot",
		source: "(60:6) <Button action=\\\"accept\\\">",
		ctx
	});

	return block;
}

// (56:4) <Actions>
function create_default_slot_3$2(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_6$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button_1({
			props: {
				action: "accept",
				$$slots: { default: [create_default_slot_4$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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

			if (dirty & /*$$scope*/ 65536) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 65536) {
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
		id: create_default_slot_3$2.name,
		type: "slot",
		source: "(56:4) <Actions>",
		ctx
	});

	return block;
}

// (29:2) <Dialog     bind:open={subOpen}     slot="over"     selection     aria-labelledby="over-fullscreen-confirmation-title"     aria-describedby="over-fullscreen-confirmation-content"     on:MDCDialog:closed={confirmationCloseHandler}   >
function create_default_slot_2$2(ctx) {
	let header;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	header = new Header({
			props: {
				$$slots: { default: [create_default_slot_16] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "over-fullscreen-confirmation-content",
				$$slots: { default: [create_default_slot_8$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(header.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(header.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(header, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const header_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				header_changes.$$scope = { dirty, ctx };
			}

			header.$set(header_changes);
			const content_changes = {};

			if (dirty & /*$$scope, selection*/ 65540) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(header.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(header.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(header, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(29:2) <Dialog     bind:open={subOpen}     slot=\\\"over\\\"     selection     aria-labelledby=\\\"over-fullscreen-confirmation-title\\\"     aria-describedby=\\\"over-fullscreen-confirmation-content\\\"     on:MDCDialog:closed={confirmationCloseHandler}   >",
		ctx
	});

	return block;
}

// (29:2) 
function create_over_slot(ctx) {
	let dialog;
	let updating_open;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[9](value);
	}

	let dialog_props = {
		slot: "over",
		selection: true,
		"aria-labelledby": "over-fullscreen-confirmation-title",
		"aria-describedby": "over-fullscreen-confirmation-content",
		$$slots: { default: [create_default_slot_2$2] },
		$$scope: { ctx }
	};

	if (/*subOpen*/ ctx[1] !== void 0) {
		dialog_props.open = /*subOpen*/ ctx[1];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));
	dialog.$on("MDCDialog:closed", /*confirmationCloseHandler*/ ctx[5]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const dialog_changes = {};

			if (dirty & /*$$scope, selection*/ 65540) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*subOpen*/ 2) {
				updating_open = true;
				dialog_changes.open = /*subOpen*/ ctx[1];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_over_slot.name,
		type: "slot",
		source: "(29:2) ",
		ctx
	});

	return block;
}

// (68:2) <Label>
function create_default_slot_1$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		id: create_default_slot_1$2.name,
		type: "slot",
		source: "(68:2) <Label>",
		ctx
	});

	return block;
}

// (67:0) <Button on:click={() => (open = true)}>
function create_default_slot$2(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_1$2] },
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

			if (dirty & /*$$scope*/ 65536) {
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
		id: create_default_slot$2.name,
		type: "slot",
		source: "(67:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let dialog;
	let updating_open;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let t4;
	let t5;
	let current;

	function dialog_open_binding_1(value) {
		/*dialog_open_binding_1*/ ctx[11](value);
	}

	let dialog_props = {
		fullscreen: true,
		"aria-labelledby": "over-fullscreen-title",
		"aria-describedby": "over-fullscreen-content",
		$$slots: {
			over: [create_over_slot],
			default: [create_default_slot_18]
		},
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding_1));
	dialog.$on("MDCDialog:closed", /*closeHandler*/ ctx[6]);

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_1*/ ctx[12]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Response: ");
			t3 = text(/*response*/ ctx[4]);
			t4 = text(", Selected: ");
			t5 = text(/*selected*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Response: ");
			t3 = claim_text(pre_nodes, /*response*/ ctx[4]);
			t4 = claim_text(pre_nodes, ", Selected: ");
			t5 = claim_text(pre_nodes, /*selected*/ ctx[3]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$2, 70, 0, 1780);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			append_dev(pre, t4);
			append_dev(pre, t5);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope, subOpen, selection*/ 65542) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*response*/ 16) set_data_dev(t3, /*response*/ ctx[4]);
			if (!current || dirty & /*selected*/ 8) set_data_dev(t5, /*selected*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t1);
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

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("OverFullscreen", slots, []);
	let open;
	let subOpen;
	let selection = "Radishes";
	let selected = "Nothing yet.";
	let response = "Nothing yet.";

	function confirmationCloseHandler(e) {
		if (e.detail.action === "accept") {
			$$invalidate(3, selected = selection);
		}

		$$invalidate(2, selection = "Radishes");
	}

	function closeHandler(e) {
		switch (e.detail.action) {
			case "close":
				$$invalidate(4, response = "Closed without response.");
				break;
			case "reject":
				$$invalidate(4, response = "Rejected.");
				break;
			case "accept":
				$$invalidate(4, response = "Accepted.");
				break;
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<OverFullscreen> was created with unknown prop '${key}'`);
	});

	function radio_group_binding(value) {
		selection = value;
		$$invalidate(2, selection);
	}

	function radio_group_binding_1(value) {
		selection = value;
		$$invalidate(2, selection);
	}

	function dialog_open_binding(value) {
		subOpen = value;
		$$invalidate(1, subOpen);
	}

	const click_handler = () => $$invalidate(1, subOpen = true);

	function dialog_open_binding_1(value) {
		open = value;
		$$invalidate(0, open);
	}

	const click_handler_1 = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Header,
		Title,
		Content,
		Actions,
		InitialFocus,
		IconButton,
		Button: Button_1,
		Label: CommonLabel,
		List,
		Item,
		Graphic,
		Text,
		Radio,
		LoremIpsum,
		open,
		subOpen,
		selection,
		selected,
		response,
		confirmationCloseHandler,
		closeHandler
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("subOpen" in $$props) $$invalidate(1, subOpen = $$props.subOpen);
		if ("selection" in $$props) $$invalidate(2, selection = $$props.selection);
		if ("selected" in $$props) $$invalidate(3, selected = $$props.selected);
		if ("response" in $$props) $$invalidate(4, response = $$props.response);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		open,
		subOpen,
		selection,
		selected,
		response,
		confirmationCloseHandler,
		closeHandler,
		radio_group_binding,
		radio_group_binding_1,
		dialog_open_binding,
		click_handler,
		dialog_open_binding_1,
		click_handler_1
	];
}

class OverFullscreen extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "OverFullscreen",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/dialog/_ManyActions.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/dialog/_ManyActions.svelte";

// (8:2) <Title id="buttons-title">
function create_default_slot_11(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Use speed bost?");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Use speed bost?");
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
		id: create_default_slot_11.name,
		type: "slot",
		source: "(8:2) <Title id=\\\"buttons-title\\\">",
		ctx
	});

	return block;
}

// (9:2) <Content id="buttons-content">
function create_default_slot_10(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Speed boost opens the extra holes in your device to increase aerodynamics.\n    This allows your device to reach higher maximum speed, increasing your\n    productivity.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Speed boost opens the extra holes in your device to increase aerodynamics.\n    This allows your device to reach higher maximum speed, increasing your\n    productivity.");
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
		source: "(9:2) <Content id=\\\"buttons-content\\\">",
		ctx
	});

	return block;
}

// (16:6) <Label>
function create_default_slot_9$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No Thanks");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No Thanks");
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
		id: create_default_slot_9$1.name,
		type: "slot",
		source: "(16:6) <Label>",
		ctx
	});

	return block;
}

// (15:4) <Button action="no">
function create_default_slot_8$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_9$1] },
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
		id: create_default_slot_8$1.name,
		type: "slot",
		source: "(15:4) <Button action=\\\"no\\\">",
		ctx
	});

	return block;
}

// (19:6) <Label>
function create_default_slot_7$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Remind Me Later");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Remind Me Later");
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
		id: create_default_slot_7$1.name,
		type: "slot",
		source: "(19:6) <Label>",
		ctx
	});

	return block;
}

// (18:4) <Button action="later">
function create_default_slot_6$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7$1] },
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
		id: create_default_slot_6$1.name,
		type: "slot",
		source: "(18:4) <Button action=\\\"later\\\">",
		ctx
	});

	return block;
}

// (22:6) <Label>
function create_default_slot_5$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Turn on Speed Boost");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Turn on Speed Boost");
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
		source: "(22:6) <Label>",
		ctx
	});

	return block;
}

// (21:4) <Button action="speed-bost">
function create_default_slot_4$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_5$1] },
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
		id: create_default_slot_4$1.name,
		type: "slot",
		source: "(21:4) <Button action=\\\"speed-bost\\\">",
		ctx
	});

	return block;
}

// (14:2) <Actions>
function create_default_slot_3$1(ctx) {
	let button0;
	let t0;
	let button1;
	let t1;
	let button2;
	let current;

	button0 = new Button_1({
			props: {
				action: "no",
				$$slots: { default: [create_default_slot_8$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button_1({
			props: {
				action: "later",
				$$slots: { default: [create_default_slot_6$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2 = new Button_1({
			props: {
				action: "speed-bost",
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(button0.$$.fragment);
			t0 = space();
			create_component(button1.$$.fragment);
			t1 = space();
			create_component(button2.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(button2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
			const button2_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button2_changes.$$scope = { dirty, ctx };
			}

			button2.$set(button2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(button2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(14:2) <Actions>",
		ctx
	});

	return block;
}

// (1:0) <Dialog   bind:open   aria-labelledby="buttons-title"   aria-describedby="buttons-content"   autoStackButtons={false}   on:MDCDialog:closed={(e) => (buttoned = e.detail.action)} >
function create_default_slot_2$1(ctx) {
	let title;
	let t0;
	let content;
	let t1;
	let actions;
	let current;

	title = new Title({
			props: {
				id: "buttons-title",
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	content = new Content({
			props: {
				id: "buttons-content",
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	actions = new Actions({
			props: {
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(title.$$.fragment);
			t0 = space();
			create_component(content.$$.fragment);
			t1 = space();
			create_component(actions.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(title.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(content.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(actions.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(title, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(content, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(actions, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const title_changes = {};

			if (dirty & /*$$scope*/ 32) {
				title_changes.$$scope = { dirty, ctx };
			}

			title.$set(title_changes);
			const content_changes = {};

			if (dirty & /*$$scope*/ 32) {
				content_changes.$$scope = { dirty, ctx };
			}

			content.$set(content_changes);
			const actions_changes = {};

			if (dirty & /*$$scope*/ 32) {
				actions_changes.$$scope = { dirty, ctx };
			}

			actions.$set(actions_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(content.$$.fragment, local);
			transition_in(actions.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(content.$$.fragment, local);
			transition_out(actions.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(title, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(content, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(actions, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(1:0) <Dialog   bind:open   aria-labelledby=\\\"buttons-title\\\"   aria-describedby=\\\"buttons-content\\\"   autoStackButtons={false}   on:MDCDialog:closed={(e) => (buttoned = e.detail.action)} >",
		ctx
	});

	return block;
}

// (28:2) <Label>
function create_default_slot_1$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Dialog");
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
		source: "(28:2) <Label>",
		ctx
	});

	return block;
}

// (27:0) <Button on:click={() => (open = true)}>
function create_default_slot$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
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
		source: "(27:0) <Button on:click={() => (open = true)}>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let dialog;
	let updating_open;
	let t0;
	let button;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	function dialog_open_binding(value) {
		/*dialog_open_binding*/ ctx[2](value);
	}

	let dialog_props = {
		"aria-labelledby": "buttons-title",
		"aria-describedby": "buttons-content",
		autoStackButtons: false,
		$$slots: { default: [create_default_slot_2$1] },
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		dialog_props.open = /*open*/ ctx[0];
	}

	dialog = new Dialog$1({ props: dialog_props, $$inline: true });
	binding_callbacks.push(() => bind(dialog, "open", dialog_open_binding));
	dialog.$on("MDCDialog:closed", /*MDCDialog_closed_handler*/ ctx[3]);

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(dialog.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Action: ");
			t3 = text(/*buttoned*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(dialog.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Action: ");
			t3 = claim_text(pre_nodes, /*buttoned*/ ctx[1]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$1, 30, 0, 803);
		},
		m: function mount(target, anchor) {
			mount_component(dialog, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const dialog_changes = {};

			if (dirty & /*$$scope*/ 32) {
				dialog_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				dialog_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			dialog.$set(dialog_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			if (!current || dirty & /*buttoned*/ 2) set_data_dev(t3, /*buttoned*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(dialog.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(dialog.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(dialog, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(button, detaching);
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
	validate_slots("ManyActions", slots, []);
	let open;
	let buttoned = "Nothing yet.";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ManyActions> was created with unknown prop '${key}'`);
	});

	function dialog_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const MDCDialog_closed_handler = e => $$invalidate(1, buttoned = e.detail.action);
	const click_handler = () => $$invalidate(0, open = true);

	$$self.$capture_state = () => ({
		Dialog: Dialog$1,
		Title,
		Content,
		Actions,
		Button: Button_1,
		Label: CommonLabel,
		open,
		buttoned
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("buttoned" in $$props) $$invalidate(1, buttoned = $$props.buttoned);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [open, buttoned, dialog_open_binding, MDCDialog_closed_handler, click_handler];
}

class ManyActions extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ManyActions",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/dialog/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/dialog/index.svelte";

// (12:2) <Demo component={DefaultFocus} file="dialog/_DefaultFocus.svelte">
function create_default_slot_9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Default, initially focused button");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Default, initially focused button");
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
		source: "(12:2) <Demo component={DefaultFocus} file=\\\"dialog/_DefaultFocus.svelte\\\">",
		ctx
	});

	return block;
}

// (16:2) <Demo component={Event} file="dialog/_Event.svelte">
function create_default_slot_8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Using dialog events instead of button clicks");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Using dialog events instead of button clicks");
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
		source: "(16:2) <Demo component={Event} file=\\\"dialog/_Event.svelte\\\">",
		ctx
	});

	return block;
}

// (20:2) <Demo component={Mandatory} file="dialog/_Mandatory.svelte">
function create_default_slot_7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Mandatory dialog (won't close on scrim click or Esc key)");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Mandatory dialog (won't close on scrim click or Esc key)");
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
		source: "(20:2) <Demo component={Mandatory} file=\\\"dialog/_Mandatory.svelte\\\">",
		ctx
	});

	return block;
}

// (24:2) <Demo component={List} file="dialog/_List.svelte">
function create_default_slot_6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No actions, and a very long selection list dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No actions, and a very long selection list dialog");
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
		source: "(24:2) <Demo component={List} file=\\\"dialog/_List.svelte\\\">",
		ctx
	});

	return block;
}

// (28:2) <Demo component={Selection} file="dialog/_Selection.svelte">
function create_default_slot_5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Selection dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Selection dialog");
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
		source: "(28:2) <Demo component={Selection} file=\\\"dialog/_Selection.svelte\\\">",
		ctx
	});

	return block;
}

// (32:2) <Demo component={Sliders} file="dialog/_Sliders.svelte">
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Dialog with sliders");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Dialog with sliders");
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
		source: "(32:2) <Demo component={Sliders} file=\\\"dialog/_Sliders.svelte\\\">",
		ctx
	});

	return block;
}

// (36:2) <Demo component={LargeScroll} file="dialog/_LargeScroll.svelte">
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Large, scrollable dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Large, scrollable dialog");
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
		source: "(36:2) <Demo component={LargeScroll} file=\\\"dialog/_LargeScroll.svelte\\\">",
		ctx
	});

	return block;
}

// (40:2) <Demo component={Fullscreen} file="dialog/_Fullscreen.svelte">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Fullscreen dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Fullscreen dialog");
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
		source: "(40:2) <Demo component={Fullscreen} file=\\\"dialog/_Fullscreen.svelte\\\">",
		ctx
	});

	return block;
}

// (42:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Note that dialogs will only be fullscreen on mobile sized screens. On\n      desktop sized screens, it will be shown as a modal dialog.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Note that dialogs will only be fullscreen on mobile sized screens. On\n      desktop sized screens, it will be shown as a modal dialog.");
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
		id: create_subtitle_slot_2.name,
		type: "slot",
		source: "(42:4) <svelte:fragment slot=\\\"subtitle\\\">",
		ctx
	});

	return block;
}

// (48:2) <Demo component={OverFullscreen} file="dialog/_OverFullscreen.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Dialog over fullscreen dialog");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Dialog over fullscreen dialog");
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
		source: "(48:2) <Demo component={OverFullscreen} file=\\\"dialog/_OverFullscreen.svelte\\\">",
		ctx
	});

	return block;
}

// (50:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Note that the Material Spec states that the only time a dialog should be\n      placed on top of another dialog is a confirmation dialog showing on top of\n      a fullscreen dialog.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Note that the Material Spec states that the only time a dialog should be\n      placed on top of another dialog is a confirmation dialog showing on top of\n      a fullscreen dialog.");
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
		id: create_subtitle_slot_1.name,
		type: "slot",
		source: "(50:4) <svelte:fragment slot=\\\"subtitle\\\">",
		ctx
	});

	return block;
}

// (57:2) <Demo component={ManyActions} file="dialog/_ManyActions.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Too many action buttons for one line");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Too many action buttons for one line");
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
		source: "(57:2) <Demo component={ManyActions} file=\\\"dialog/_ManyActions.svelte\\\">",
		ctx
	});

	return block;
}

// (59:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Actions buttons will stack automatically if the dialog is too narrow. If\n      you want them to stack regardless, you can force it.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Actions buttons will stack automatically if the dialog is too narrow. If\n      you want them to stack regardless, you can force it.");
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
		id: create_subtitle_slot.name,
		type: "slot",
		source: "(59:4) <svelte:fragment slot=\\\"subtitle\\\">",
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
	let t9;
	let demo5;
	let t10;
	let demo6;
	let t11;
	let demo7;
	let t12;
	let demo8;
	let t13;
	let demo9;
	let t14;
	let demo10;
	let current;

	demo0 = new Demo({
			props: {
				component: Simple,
				file: "dialog/_Simple.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: DefaultFocus,
				file: "dialog/_DefaultFocus.svelte",
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: Event$1,
				file: "dialog/_Event.svelte",
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: Mandatory,
				file: "dialog/_Mandatory.svelte",
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo4 = new Demo({
			props: {
				component: List_1,
				file: "dialog/_List.svelte",
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo5 = new Demo({
			props: {
				component: Selection,
				file: "dialog/_Selection.svelte",
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo6 = new Demo({
			props: {
				component: Sliders,
				file: "dialog/_Sliders.svelte",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo7 = new Demo({
			props: {
				component: LargeScroll,
				file: "dialog/_LargeScroll.svelte",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo8 = new Demo({
			props: {
				component: Fullscreen,
				file: "dialog/_Fullscreen.svelte",
				$$slots: {
					subtitle: [create_subtitle_slot_2],
					default: [create_default_slot_2]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo9 = new Demo({
			props: {
				component: OverFullscreen,
				file: "dialog/_OverFullscreen.svelte",
				$$slots: {
					subtitle: [create_subtitle_slot_1],
					default: [create_default_slot_1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo10 = new Demo({
			props: {
				component: ManyActions,
				file: "dialog/_ManyActions.svelte",
				$$slots: {
					subtitle: [create_subtitle_slot],
					default: [create_default_slot]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			section = element("section");
			h2 = element("h2");
			t1 = text("Dialogs");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/dialog");
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
			t9 = space();
			create_component(demo5.$$.fragment);
			t10 = space();
			create_component(demo6.$$.fragment);
			t11 = space();
			create_component(demo7.$$.fragment);
			t12 = space();
			create_component(demo8.$$.fragment);
			t13 = space();
			create_component(demo9.$$.fragment);
			t14 = space();
			create_component(demo10.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-siaonx\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Dialogs");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/dialog");
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
			t9 = claim_space(section_nodes);
			claim_component(demo5.$$.fragment, section_nodes);
			t10 = claim_space(section_nodes);
			claim_component(demo6.$$.fragment, section_nodes);
			t11 = claim_space(section_nodes);
			claim_component(demo7.$$.fragment, section_nodes);
			t12 = claim_space(section_nodes);
			claim_component(demo8.$$.fragment, section_nodes);
			t13 = claim_space(section_nodes);
			claim_component(demo9.$$.fragment, section_nodes);
			t14 = claim_space(section_nodes);
			claim_component(demo10.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Dialogs - SMUI";
			add_location(h2, file, 5, 2, 74);
			attr_dev(pre, "class", "demo-spaced");
			add_location(pre, file, 7, 2, 94);
			add_location(section, file, 4, 0, 62);
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
			append_dev(section, t9);
			mount_component(demo5, section, null);
			append_dev(section, t10);
			mount_component(demo6, section, null);
			append_dev(section, t11);
			mount_component(demo7, section, null);
			append_dev(section, t12);
			mount_component(demo8, section, null);
			append_dev(section, t13);
			mount_component(demo9, section, null);
			append_dev(section, t14);
			mount_component(demo10, section, null);
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
			const demo5_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo5_changes.$$scope = { dirty, ctx };
			}

			demo5.$set(demo5_changes);
			const demo6_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo6_changes.$$scope = { dirty, ctx };
			}

			demo6.$set(demo6_changes);
			const demo7_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo7_changes.$$scope = { dirty, ctx };
			}

			demo7.$set(demo7_changes);
			const demo8_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo8_changes.$$scope = { dirty, ctx };
			}

			demo8.$set(demo8_changes);
			const demo9_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo9_changes.$$scope = { dirty, ctx };
			}

			demo9.$set(demo9_changes);
			const demo10_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo10_changes.$$scope = { dirty, ctx };
			}

			demo10.$set(demo10_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(demo0.$$.fragment, local);
			transition_in(demo1.$$.fragment, local);
			transition_in(demo2.$$.fragment, local);
			transition_in(demo3.$$.fragment, local);
			transition_in(demo4.$$.fragment, local);
			transition_in(demo5.$$.fragment, local);
			transition_in(demo6.$$.fragment, local);
			transition_in(demo7.$$.fragment, local);
			transition_in(demo8.$$.fragment, local);
			transition_in(demo9.$$.fragment, local);
			transition_in(demo10.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(demo0.$$.fragment, local);
			transition_out(demo1.$$.fragment, local);
			transition_out(demo2.$$.fragment, local);
			transition_out(demo3.$$.fragment, local);
			transition_out(demo4.$$.fragment, local);
			transition_out(demo5.$$.fragment, local);
			transition_out(demo6.$$.fragment, local);
			transition_out(demo7.$$.fragment, local);
			transition_out(demo8.$$.fragment, local);
			transition_out(demo9.$$.fragment, local);
			transition_out(demo10.$$.fragment, local);
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
			destroy_component(demo5);
			destroy_component(demo6);
			destroy_component(demo7);
			destroy_component(demo8);
			destroy_component(demo9);
			destroy_component(demo10);
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
	validate_slots("Dialog", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Dialog> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Simple,
		DefaultFocus,
		Event: Event$1,
		Mandatory,
		List: List_1,
		Selection,
		Sliders,
		LargeScroll,
		Fullscreen,
		OverFullscreen,
		ManyActions
	});

	return [];
}

class Dialog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Dialog",
			options,
			id: create_fragment.name
		});
	}
}

export default Dialog;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjg5YjliYTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL2RpYWxvZy9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy91dGlsLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGlhbG9nL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kaWFsb2cvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kaWFsb2cvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vZm9jdXMtdHJhcC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2RpYWxvZy9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2RpYWxvZy9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi9hbmltYXRpb25mcmFtZS5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2RpYWxvZy9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RpYWxvZy9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kaWFsb2cvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kaWFsb2cvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2RpYWxvZy9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHNCdWlsZGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGlhbG9nL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vY2xhc3NNYXAuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kaWFsb2cvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9DbGFzc0FkZGVyLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL2RpYWxvZy9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGlhbG9nL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZGlzcGF0Y2guanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kaWFsb2cvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGlhbG9nL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vcHJlZml4RmlsdGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGlhbG9nL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vdXNlQWN0aW9ucy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2RpYWxvZy9EaWFsb2cuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvZGlhbG9nL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vRGl2LnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL2RpYWxvZy9IZWFkZXIuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kaWFsb2cvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9IMi5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9kaWFsb2cvVGl0bGUuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kaWFsb2cvQ29udGVudC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2RpYWxvZy9BY3Rpb25zLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGlhbG9nL0luaXRpYWxGb2N1cy5qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9kaWFsb2cvX1NpbXBsZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vZGlhbG9nL19EZWZhdWx0Rm9jdXMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL2RpYWxvZy9fRXZlbnQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL2RpYWxvZy9fTWFuZGF0b3J5LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9kaWFsb2cvX0xpc3Quc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL2RpYWxvZy9fU2VsZWN0aW9uLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9kaWFsb2cvX1NsaWRlcnMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL2RpYWxvZy9fTGFyZ2VTY3JvbGwuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL2RpYWxvZy9fRnVsbHNjcmVlbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vZGlhbG9nL19PdmVyRnVsbHNjcmVlbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vZGlhbG9nL19NYW55QWN0aW9ucy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vZGlhbG9nL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGb2N1c1RyYXBJbnN0YW5jZShzdXJmYWNlRWwsIGZvY3VzVHJhcEZhY3RvcnksIGluaXRpYWxGb2N1c0VsKSB7XG4gICAgcmV0dXJuIGZvY3VzVHJhcEZhY3Rvcnkoc3VyZmFjZUVsLCB7IGluaXRpYWxGb2N1c0VsOiBpbml0aWFsRm9jdXNFbCB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Njcm9sbGFibGUoZWwpIHtcbiAgICByZXR1cm4gZWwgPyBlbC5zY3JvbGxIZWlnaHQgPiBlbC5vZmZzZXRIZWlnaHQgOiBmYWxzZTtcbn1cbi8qKlxuICogRm9yIHNjcm9sbGFibGUgY29udGVudCwgcmV0dXJucyB0cnVlIGlmIHRoZSBjb250ZW50IGhhcyBub3QgYmVlbiBzY3JvbGxlZFxuICogKHRoYXQgaXMsIHRoZSBzY3JvbGwgY29udGVudCBpcyBhcyB0aGUgXCJ0b3BcIikuIFRoaXMgaXMgdXNlZCBpbiBmdWxsLXNjcmVlblxuICogZGlhbG9ncywgd2hlcmUgdGhlIHNjcm9sbCBkaXZpZGVyIGlzIGV4cGVjdGVkIG9ubHkgdG8gYXBwZWFyIG9uY2UgdGhlXG4gKiBjb250ZW50IGhhcyBiZWVuIHNjcm9sbGVkIFwidW5kZXJuZWF0aFwiIHRoZSBoZWFkZXIgYmFyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNTY3JvbGxBdFRvcChlbCkge1xuICAgIHJldHVybiBlbCA/IGVsLnNjcm9sbFRvcCA9PT0gMCA6IGZhbHNlO1xufVxuLyoqXG4gKiBGb3Igc2Nyb2xsYWJsZSBjb250ZW50LCByZXR1cm5zIHRydWUgaWYgdGhlIGNvbnRlbnQgaGFzIGJlZW4gc2Nyb2xsZWQgYWxsIHRoZVxuICogd2F5IHRvIHRoZSBib3R0b20uIFRoaXMgaXMgdXNlZCBpbiBmdWxsLXNjcmVlbiBkaWFsb2dzLCB3aGVyZSB0aGUgZm9vdGVyXG4gKiBzY3JvbGwgZGl2aWRlciBpcyBleHBlY3RlZCBvbmx5IHRvIGFwcGVhciB3aGVuIHRoZSBjb250ZW50IGlzIFwiY3V0LW9mZlwiIGJ5XG4gKiB0aGUgZm9vdGVyIGJhci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2Nyb2xsQXRCb3R0b20oZWwpIHtcbiAgICByZXR1cm4gZWwgPyBNYXRoLmNlaWwoZWwuc2Nyb2xsSGVpZ2h0IC0gZWwuc2Nyb2xsVG9wKSA9PT0gZWwuY2xpZW50SGVpZ2h0IDpcbiAgICAgICAgZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gYXJlVG9wc01pc2FsaWduZWQoZWxzKSB7XG4gICAgdmFyIHRvcHMgPSBuZXcgU2V0KCk7XG4gICAgW10uZm9yRWFjaC5jYWxsKGVscywgZnVuY3Rpb24gKGVsKSB7IHJldHVybiB0b3BzLmFkZChlbC5vZmZzZXRUb3ApOyB9KTtcbiAgICByZXR1cm4gdG9wcy5zaXplID4gMTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBGT0NVU19TRU5USU5FTF9DTEFTUyA9ICdtZGMtZG9tLWZvY3VzLXNlbnRpbmVsJztcbi8qKlxuICogVXRpbGl0eSB0byB0cmFwIGZvY3VzIGluIGEgZ2l2ZW4gcm9vdCBlbGVtZW50LCBlLmcuIGZvciBtb2RhbCBjb21wb25lbnRzIHN1Y2hcbiAqIGFzIGRpYWxvZ3MuIFRoZSByb290IHNob3VsZCBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCxcbiAqIGZvciBzZXR0aW5nIGluaXRpYWwgZm9jdXMgd2hlbiB0cmFwcGluZyBmb2N1cy5cbiAqIEFsc28gdHJhY2tzIHRoZSBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCwgYW5kIHJlc3RvcmVzIGZvY3VzIHRvIHRoYXRcbiAqIGVsZW1lbnQgd2hlbiByZWxlYXNpbmcgZm9jdXMuXG4gKi9cbnZhciBGb2N1c1RyYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9jdXNUcmFwKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgLy8gUHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgYmVmb3JlIHRyYXBwaW5nIGZvY3VzLlxuICAgICAgICB0aGlzLmVsRm9jdXNlZEJlZm9yZVRyYXBGb2N1cyA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYXBzIGZvY3VzIGluIGByb290YC4gQWxzbyBmb2N1c2VzIG9uIGVpdGhlciBgaW5pdGlhbEZvY3VzRWxgIGlmIHNldDtcbiAgICAgKiBvdGhlcndpc2VzIHNldHMgaW5pdGlhbCBmb2N1cyB0byB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQuXG4gICAgICovXG4gICAgRm9jdXNUcmFwLnByb3RvdHlwZS50cmFwRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVFbHMgPSB0aGlzLmdldEZvY3VzYWJsZUVsZW1lbnRzKHRoaXMucm9vdCk7XG4gICAgICAgIGlmIChmb2N1c2FibGVFbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvY3VzVHJhcDogRWxlbWVudCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBjaGlsZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsRm9jdXNlZEJlZm9yZVRyYXBGb2N1cyA9XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IDpcbiAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICB0aGlzLndyYXBUYWJGb2N1cyh0aGlzLnJvb3QpO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5za2lwSW5pdGlhbEZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzSW5pdGlhbEVsZW1lbnQoZm9jdXNhYmxlRWxzLCB0aGlzLm9wdGlvbnMuaW5pdGlhbEZvY3VzRWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBmb2N1cyBmcm9tIGByb290YC4gQWxzbyByZXN0b3JlcyBmb2N1cyB0byB0aGUgcHJldmlvdXNseSBmb2N1c2VkXG4gICAgICogZWxlbWVudC5cbiAgICAgKi9cbiAgICBGb2N1c1RyYXAucHJvdG90eXBlLnJlbGVhc2VGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgW10uc2xpY2UuY2FsbCh0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIEZPQ1VTX1NFTlRJTkVMX0NMQVNTKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzZW50aW5lbEVsKSB7XG4gICAgICAgICAgICBzZW50aW5lbEVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2VudGluZWxFbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5za2lwUmVzdG9yZUZvY3VzICYmIHRoaXMuZWxGb2N1c2VkQmVmb3JlVHJhcEZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmVsRm9jdXNlZEJlZm9yZVRyYXBGb2N1cy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXcmFwcyB0YWIgZm9jdXMgd2l0aGluIGBlbGAgYnkgYWRkaW5nIHR3byBoaWRkZW4gc2VudGluZWwgZGl2cyB3aGljaCBhcmVcbiAgICAgKiB1c2VkIHRvIG1hcmsgdGhlIGJlZ2lubmluZyBhbmQgdGhlIGVuZCBvZiB0aGUgdGFiYmFibGUgcmVnaW9uLiBXaGVuXG4gICAgICogZm9jdXNlZCwgdGhlc2Ugc2VudGluZWwgZWxlbWVudHMgcmVkaXJlY3QgZm9jdXMgdG8gdGhlIGZpcnN0L2xhc3RcbiAgICAgKiBjaGlsZHJlbiBlbGVtZW50cyBvZiB0aGUgdGFiYmFibGUgcmVnaW9uLCBlbnN1cmluZyB0aGF0IGZvY3VzIGlzIHRyYXBwZWRcbiAgICAgKiB3aXRoaW4gdGhhdCByZWdpb24uXG4gICAgICovXG4gICAgRm9jdXNUcmFwLnByb3RvdHlwZS53cmFwVGFiRm9jdXMgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbnRpbmVsU3RhcnQgPSB0aGlzLmNyZWF0ZVNlbnRpbmVsKCk7XG4gICAgICAgIHZhciBzZW50aW5lbEVuZCA9IHRoaXMuY3JlYXRlU2VudGluZWwoKTtcbiAgICAgICAgc2VudGluZWxTdGFydC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmb2N1c2FibGVFbHMgPSBfdGhpcy5nZXRGb2N1c2FibGVFbGVtZW50cyhlbCk7XG4gICAgICAgICAgICBpZiAoZm9jdXNhYmxlRWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb2N1c2FibGVFbHNbZm9jdXNhYmxlRWxzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZW50aW5lbEVuZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmb2N1c2FibGVFbHMgPSBfdGhpcy5nZXRGb2N1c2FibGVFbGVtZW50cyhlbCk7XG4gICAgICAgICAgICBpZiAoZm9jdXNhYmxlRWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb2N1c2FibGVFbHNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmluc2VydEJlZm9yZShzZW50aW5lbFN0YXJ0LCBlbC5jaGlsZHJlblswXSk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHNlbnRpbmVsRW5kKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgb24gYGluaXRpYWxGb2N1c0VsYCBpZiBkZWZpbmVkIGFuZCBhIGNoaWxkIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAgICogT3RoZXJ3aXNlLCBmb2N1c2VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCBvZiB0aGUgcm9vdC5cbiAgICAgKi9cbiAgICBGb2N1c1RyYXAucHJvdG90eXBlLmZvY3VzSW5pdGlhbEVsZW1lbnQgPSBmdW5jdGlvbiAoZm9jdXNhYmxlRWxzLCBpbml0aWFsRm9jdXNFbCkge1xuICAgICAgICB2YXIgZm9jdXNJbmRleCA9IDA7XG4gICAgICAgIGlmIChpbml0aWFsRm9jdXNFbCkge1xuICAgICAgICAgICAgZm9jdXNJbmRleCA9IE1hdGgubWF4KGZvY3VzYWJsZUVscy5pbmRleE9mKGluaXRpYWxGb2N1c0VsKSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9jdXNhYmxlRWxzW2ZvY3VzSW5kZXhdLmZvY3VzKCk7XG4gICAgfTtcbiAgICBGb2N1c1RyYXAucHJvdG90eXBlLmdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgdmFyIGZvY3VzYWJsZUVscyA9IFtdLnNsaWNlLmNhbGwocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbYXV0b2ZvY3VzXSwgW3RhYmluZGV4XSwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbicpKTtcbiAgICAgICAgcmV0dXJuIGZvY3VzYWJsZUVscy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgaXNEaXNhYmxlZE9ySGlkZGVuID0gZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPSBudWxsIHx8XG4gICAgICAgICAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdoaWRkZW4nKSAhPSBudWxsIHx8XG4gICAgICAgICAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09PSAndHJ1ZSc7XG4gICAgICAgICAgICB2YXIgaXNUYWJiYWJsZUFuZFZpc2libGUgPSBlbC50YWJJbmRleCA+PSAwICYmXG4gICAgICAgICAgICAgICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPiAwICYmXG4gICAgICAgICAgICAgICAgIWVsLmNsYXNzTGlzdC5jb250YWlucyhGT0NVU19TRU5USU5FTF9DTEFTUykgJiYgIWlzRGlzYWJsZWRPckhpZGRlbjtcbiAgICAgICAgICAgIHZhciBpc1Byb2dyYW1tYXRpY2FsbHlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChpc1RhYmJhYmxlQW5kVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgICAgICAgICAgIGlzUHJvZ3JhbW1hdGljYWxseUhpZGRlbiA9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBzdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpc1RhYmJhYmxlQW5kVmlzaWJsZSAmJiAhaXNQcm9ncmFtbWF0aWNhbGx5SGlkZGVuO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZvY3VzVHJhcC5wcm90b3R5cGUuY3JlYXRlU2VudGluZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZW50aW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZW50aW5lbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgLy8gRG9uJ3QgYW5ub3VuY2UgaW4gc2NyZWVuIHJlYWRlcnMuXG4gICAgICAgIHNlbnRpbmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICBzZW50aW5lbC5jbGFzc0xpc3QuYWRkKEZPQ1VTX1NFTlRJTkVMX0NMQVNTKTtcbiAgICAgICAgcmV0dXJuIHNlbnRpbmVsO1xuICAgIH07XG4gICAgcmV0dXJuIEZvY3VzVHJhcDtcbn0oKSk7XG5leHBvcnQgeyBGb2N1c1RyYXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvY3VzLXRyYXAuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8qKlxuICogVXNlZCB0byBjb21wdXRlIHRoZSBlc3RpbWF0ZWQgc2Nyb2xsIHdpZHRoIG9mIGVsZW1lbnRzLiBXaGVuIGFuIGVsZW1lbnQgaXNcbiAqIGhpZGRlbiBkdWUgdG8gZGlzcGxheTogbm9uZTsgYmVpbmcgYXBwbGllZCB0byBhIHBhcmVudCBlbGVtZW50LCB0aGUgd2lkdGggaXNcbiAqIHJldHVybmVkIGFzIDAuIEhvd2V2ZXIsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhIHRydWUgd2lkdGggb25jZSBubyBsb25nZXJcbiAqIGluc2lkZSBhIGRpc3BsYXk6IG5vbmUgY29udGV4dC4gVGhpcyBtZXRob2QgY29tcHV0ZXMgYW4gZXN0aW1hdGVkIHdpZHRoIHdoZW5cbiAqIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBvciByZXR1cm5zIHRoZSB0cnVlIHdpZHRoIHdoZW4gdGhlIGVsZW1lbnQgaXMgdmlzYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IHdob3NlIHdpZHRoIHRvIGVzdGltYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZVNjcm9sbFdpZHRoKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayB0aGUgb2Zmc2V0UGFyZW50LiBJZiB0aGUgZWxlbWVudCBpbmhlcml0cyBkaXNwbGF5OiBub25lIGZyb20gYW55XG4gICAgLy8gcGFyZW50LCB0aGUgb2Zmc2V0UGFyZW50IHByb3BlcnR5IHdpbGwgYmUgbnVsbCAoc2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L29mZnNldFBhcmVudCkuXG4gICAgLy8gVGhpcyBjaGVjayBlbnN1cmVzIHdlIG9ubHkgY2xvbmUgdGhlIG5vZGUgd2hlbiBuZWNlc3NhcnkuXG4gICAgdmFyIGh0bWxFbCA9IGVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbC5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbC5zY3JvbGxXaWR0aDtcbiAgICB9XG4gICAgdmFyIGNsb25lID0gaHRtbEVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5OXB4LCAtOTk5OXB4KScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgdmFyIHNjcm9sbFdpZHRoID0gY2xvbmUuc2Nyb2xsV2lkdGg7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICByZXR1cm4gc2Nyb2xsV2lkdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQW5pbWF0aW9uRnJhbWUgcHJvdmlkZXMgYSB1c2VyLWZyaWVuZGx5IGFic3RyYWN0aW9uIGFyb3VuZCByZXF1ZXN0aW5nXG4gKiBhbmQgY2FuY2VsaW5nIGFuaW1hdGlvbiBmcmFtZXMuXG4gKi9cbnZhciBBbmltYXRpb25GcmFtZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBbmltYXRpb25GcmFtZSgpIHtcbiAgICAgICAgdGhpcy5yYWZJRHMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlcXVlc3RzIGFuIGFuaW1hdGlvbiBmcmFtZS4gQ2FuY2VscyBhbnkgZXhpc3RpbmcgZnJhbWUgd2l0aCB0aGUgc2FtZSBrZXkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGlzIGNhbGxiYWNrLlxuICAgICAqIEBwYXJhbSB7RnJhbWVSZXF1ZXN0Q2FsbGJhY2t9IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBiZSBleGVjdXRlZC5cbiAgICAgKi9cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIChrZXksIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2FuY2VsKGtleSk7XG4gICAgICAgIHZhciBmcmFtZUlEID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIChmcmFtZSkge1xuICAgICAgICAgICAgX3RoaXMucmFmSURzLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgbXVzdCBjb21lICphZnRlciogdGhlIGtleSBpcyBkZWxldGVkIHNvIHRoYXQgbmVzdGVkIGNhbGxzIHRvXG4gICAgICAgICAgICAvLyByZXF1ZXN0IHdpdGggdGhlIHNhbWUga2V5IGFyZSBub3QgZGVsZXRlZC5cbiAgICAgICAgICAgIGNhbGxiYWNrKGZyYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmFmSURzLnNldChrZXksIGZyYW1lSUQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FuY2VscyBhIHF1ZXVlZCBjYWxsYmFjayB3aXRoIHRoZSBnaXZlbiBrZXkuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IGZvciB0aGlzIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIEFuaW1hdGlvbkZyYW1lLnByb3RvdHlwZS5jYW5jZWwgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciByYWZJRCA9IHRoaXMucmFmSURzLmdldChrZXkpO1xuICAgICAgICBpZiAocmFmSUQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHJhZklEKTtcbiAgICAgICAgICAgIHRoaXMucmFmSURzLmRlbGV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYW5jZWxzIGFsbCBxdWV1ZWQgY2FsbGJhY2suXG4gICAgICovXG4gICAgQW5pbWF0aW9uRnJhbWUucHJvdG90eXBlLmNhbmNlbEFsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gTmVlZCB0byB1c2UgZm9yRWFjaCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgaXRlcmF0aW9uIG1ldGhvZCBzdXBwb3J0ZWRcbiAgICAgICAgLy8gYnkgSUUxMS4gU3VwcHJlc3MgdGhlIHVuZGVyc2NvcmUgYmVjYXVzZSB3ZSBkb24ndCBuZWVkIGl0LlxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZW5mb3JjZS1uYW1lLWNhc2luZ1xuICAgICAgICB0aGlzLnJhZklEcy5mb3JFYWNoKGZ1bmN0aW9uIChfLCBrZXkpIHtcbiAgICAgICAgICAgIF90aGlzLmNhbmNlbChrZXkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHF1ZXVlIG9mIHVuZXhlY3V0ZWQgY2FsbGJhY2sga2V5cy5cbiAgICAgKi9cbiAgICBBbmltYXRpb25GcmFtZS5wcm90b3R5cGUuZ2V0UXVldWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBxdWV1ZSA9IFtdO1xuICAgICAgICAvLyBOZWVkIHRvIHVzZSBmb3JFYWNoIGJlY2F1c2UgaXQncyB0aGUgb25seSBpdGVyYXRpb24gbWV0aG9kIHN1cHBvcnRlZFxuICAgICAgICAvLyBieSBJRTExLiBTdXBwcmVzcyB0aGUgdW5kZXJzY29yZSBiZWNhdXNlIHdlIGRvbid0IG5lZWQgaXQuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTplbmZvcmNlLW5hbWUtY2FzaW5nXG4gICAgICAgIHRoaXMucmFmSURzLmZvckVhY2goZnVuY3Rpb24gKF8sIGtleSkge1xuICAgICAgICAgICAgcXVldWUucHVzaChrZXkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH07XG4gICAgcmV0dXJuIEFuaW1hdGlvbkZyYW1lO1xufSgpKTtcbmV4cG9ydCB7IEFuaW1hdGlvbkZyYW1lIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbmltYXRpb25mcmFtZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDTE9TSU5HOiAnbWRjLWRpYWxvZy0tY2xvc2luZycsXG4gICAgT1BFTjogJ21kYy1kaWFsb2ctLW9wZW4nLFxuICAgIE9QRU5JTkc6ICdtZGMtZGlhbG9nLS1vcGVuaW5nJyxcbiAgICBTQ1JPTExBQkxFOiAnbWRjLWRpYWxvZy0tc2Nyb2xsYWJsZScsXG4gICAgU0NST0xMX0xPQ0s6ICdtZGMtZGlhbG9nLXNjcm9sbC1sb2NrJyxcbiAgICBTVEFDS0VEOiAnbWRjLWRpYWxvZy0tc3RhY2tlZCcsXG4gICAgRlVMTFNDUkVFTjogJ21kYy1kaWFsb2ctLWZ1bGxzY3JlZW4nLFxuICAgIC8vIENsYXNzIGZvciBzaG93aW5nIGEgc2Nyb2xsIGRpdmlkZXIgb24gZnVsbC1zY3JlZW4gZGlhbG9nIGhlYWRlciBlbGVtZW50LlxuICAgIC8vIFNob3VsZCBvbmx5IGJlIGRpc3BsYXllZCBvbiBzY3JvbGxhYmxlIGNvbnRlbnQsIHdoZW4gdGhlIGRpYWxvZyBjb250ZW50IGlzXG4gICAgLy8gc2Nyb2xsZWQgXCJ1bmRlcm5lYXRoXCIgdGhlIGhlYWRlci5cbiAgICBTQ1JPTExfRElWSURFUl9IRUFERVI6ICdtZGMtZGlhbG9nLXNjcm9sbC1kaXZpZGVyLWhlYWRlcicsXG4gICAgLy8gQ2xhc3MgZm9yIHNob3dpbmcgYSBzY3JvbGwgZGl2aWRlciBvbiBhIGZ1bGwtc2NyZWVuIGRpYWxvZyBmb290ZXIgZWxlbWVudC5cbiAgICAvLyBTaG91bGQgb25seSBiZSBkaXNwbGF5ZWQgb24gc2Nyb2xhbGJsZSBjb250ZW50LCB3aGVuIHRoZSBkaWFsb2cgY29udGVudCBpc1xuICAgIC8vIG9ic2N1cmVkIFwidW5kZXJuZWF0aFwiIHRoZSBmb290ZXIuXG4gICAgU0NST0xMX0RJVklERVJfRk9PVEVSOiAnbWRjLWRpYWxvZy1zY3JvbGwtZGl2aWRlci1mb290ZXInLFxuICAgIC8vIFRoZSBcInN1cmZhY2Ugc2NyaW1cIiBpcyBhIHNjcmltIGNvdmVyaW5nIG9ubHkgdGhlIHN1cmZhY2Ugb2YgYSBkaWFsb2cuIFRoaXNcbiAgICAvLyBpcyB1c2VkIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb25maXJtYXRpb24gZGlhbG9nIGlzIHNob3duIG92ZXIgYW4gYWxyZWFkeVxuICAgIC8vIG9wZW5lZCBmdWxsLXNjcmVlbiBkaWFsb2cuIE9uIGxhcmdlciBzY3JlZW4tc2l6ZXMsIHRoZSBmdWxsLXNjcmVlbiBkaWFsb2dcbiAgICAvLyBpcyBzaXplZCBhcyBhIG1vZGFsIGFuZCBzbyBpbiB0aGVzZSBzaXR1YXRpb25zIHdlIGRpc3BsYXkgYSBcInN1cmZhY2Ugc2NyaW1cIlxuICAgIC8vIHRvIHByZXZlbnQgYSBcImRvdWJsZSBzY3JpbVwiICh3aGVyZSB0aGUgc2NyaW0gZnJvbSB0aGUgc2Vjb25kYXJ5XG4gICAgLy8gY29uZmlybWF0aW9uIGRpYWxvZyB3b3VsZCBvdmVybGFwIHdpdGggdGhlIHNjcmltIGZyb20gdGhlIGZ1bGwtc2NyZWVuXG4gICAgLy8gZGlhbG9nKS5cbiAgICBTVVJGQUNFX1NDUklNX1NIT1dOOiAnbWRjLWRpYWxvZ19fc3VyZmFjZS1zY3JpbS0tc2hvd24nLFxuICAgIC8vIFwiU2hvd2luZ1wiIGFuaW1hdGluZyBjbGFzcyBmb3IgdGhlIHN1cmZhY2Utc2NyaW0uXG4gICAgU1VSRkFDRV9TQ1JJTV9TSE9XSU5HOiAnbWRjLWRpYWxvZ19fc3VyZmFjZS1zY3JpbS0tc2hvd2luZycsXG4gICAgLy8gXCJIaWRpbmdcIiBhbmltYXRpbmcgY2xhc3MgZm9yIHRoZSBzdXJmYWNlLXNjcmltLlxuICAgIFNVUkZBQ0VfU0NSSU1fSElESU5HOiAnbWRjLWRpYWxvZ19fc3VyZmFjZS1zY3JpbS0taGlkaW5nJyxcbiAgICAvLyBDbGFzcyB0byBoaWRlIGEgZGlhbG9nJ3Mgc2NyaW0gKHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBhIHN1cmZhY2Utc2NyaW0pLlxuICAgIC8vIE5vdGUgdGhhdCB3ZSBvbmx5IGhpZGUgdGhlIG9yaWdpbmFsIHNjcmltIHJhdGhlciB0aGFuIHJlbW92aW5nIGl0IGVudGlyZWx5XG4gICAgLy8gdG8gcHJldmVudCBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgY29udGVudCBiZWhpbmQgdGhpcyBzY3JpbSwgYW5kIHRvIGNhcHR1cmVcbiAgICAvLyBzY3JpbSBjbGlja3MuXG4gICAgU0NSSU1fSElEREVOOiAnbWRjLWRpYWxvZ19fc2NyaW0tLWhpZGRlbicsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIEFDVElPTl9BVFRSSUJVVEU6ICdkYXRhLW1kYy1kaWFsb2ctYWN0aW9uJyxcbiAgICBCVVRUT05fREVGQVVMVF9BVFRSSUJVVEU6ICdkYXRhLW1kYy1kaWFsb2ctYnV0dG9uLWRlZmF1bHQnLFxuICAgIEJVVFRPTl9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19idXR0b24nLFxuICAgIENMT1NFRF9FVkVOVDogJ01EQ0RpYWxvZzpjbG9zZWQnLFxuICAgIENMT1NFX0FDVElPTjogJ2Nsb3NlJyxcbiAgICBDTE9TSU5HX0VWRU5UOiAnTURDRGlhbG9nOmNsb3NpbmcnLFxuICAgIENPTlRBSU5FUl9TRUxFQ1RPUjogJy5tZGMtZGlhbG9nX19jb250YWluZXInLFxuICAgIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLWRpYWxvZ19fY29udGVudCcsXG4gICAgREVTVFJPWV9BQ1RJT046ICdkZXN0cm95JyxcbiAgICBJTklUSUFMX0ZPQ1VTX0FUVFJJQlVURTogJ2RhdGEtbWRjLWRpYWxvZy1pbml0aWFsLWZvY3VzJyxcbiAgICBPUEVORURfRVZFTlQ6ICdNRENEaWFsb2c6b3BlbmVkJyxcbiAgICBPUEVOSU5HX0VWRU5UOiAnTURDRGlhbG9nOm9wZW5pbmcnLFxuICAgIFNDUklNX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX3NjcmltJyxcbiAgICBTVVBQUkVTU19ERUZBVUxUX1BSRVNTX1NFTEVDVE9SOiBbXG4gICAgICAgICd0ZXh0YXJlYScsXG4gICAgICAgICcubWRjLW1lbnUgLm1kYy1saXN0LWl0ZW0nLFxuICAgICAgICAnLm1kYy1tZW51IC5tZGMtZGVwcmVjYXRlZC1saXN0LWl0ZW0nLFxuICAgIF0uam9pbignLCAnKSxcbiAgICBTVVJGQUNFX1NFTEVDVE9SOiAnLm1kYy1kaWFsb2dfX3N1cmZhY2UnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBESUFMT0dfQU5JTUFUSU9OX0NMT1NFX1RJTUVfTVM6IDc1LFxuICAgIERJQUxPR19BTklNQVRJT05fT1BFTl9USU1FX01TOiAxNTAsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgQW5pbWF0aW9uRnJhbWUgfSBmcm9tICdAbWF0ZXJpYWwvYW5pbWF0aW9uL2FuaW1hdGlvbmZyYW1lJztcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgQW5pbWF0aW9uS2V5cztcbihmdW5jdGlvbiAoQW5pbWF0aW9uS2V5cykge1xuICAgIEFuaW1hdGlvbktleXNbXCJQT0xMX1NDUk9MTF9QT1NcIl0gPSBcInBvbGxfc2Nyb2xsX3Bvc2l0aW9uXCI7XG4gICAgQW5pbWF0aW9uS2V5c1tcIlBPTExfTEFZT1VUX0NIQU5HRVwiXSA9IFwicG9sbF9sYXlvdXRfY2hhbmdlXCI7XG59KShBbmltYXRpb25LZXlzIHx8IChBbmltYXRpb25LZXlzID0ge30pKTtcbnZhciBNRENEaWFsb2dGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENEaWFsb2dGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0RpYWxvZ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDRGlhbG9nRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5kaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzRnVsbHNjcmVlbiA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25GcmFtZSA9IDA7XG4gICAgICAgIF90aGlzLmFuaW1hdGlvblRpbWVyID0gMDtcbiAgICAgICAgX3RoaXMuZXNjYXBlS2V5QWN0aW9uID0gc3RyaW5ncy5DTE9TRV9BQ1RJT047XG4gICAgICAgIF90aGlzLnNjcmltQ2xpY2tBY3Rpb24gPSBzdHJpbmdzLkNMT1NFX0FDVElPTjtcbiAgICAgICAgX3RoaXMuYXV0b1N0YWNrQnV0dG9ucyA9IHRydWU7XG4gICAgICAgIF90aGlzLmFyZUJ1dHRvbnNTdGFja2VkID0gZmFsc2U7XG4gICAgICAgIF90aGlzLnN1cHByZXNzRGVmYXVsdFByZXNzU2VsZWN0b3IgPSBzdHJpbmdzLlNVUFBSRVNTX0RFRkFVTFRfUFJFU1NfU0VMRUNUT1I7XG4gICAgICAgIF90aGlzLmFuaW1GcmFtZSA9IG5ldyBBbmltYXRpb25GcmFtZSgpO1xuICAgICAgICBfdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbEV2ZW50KCk7XG4gICAgICAgIH07XG4gICAgICAgIF90aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMud2luZG93T3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0KCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0RpYWxvZ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRGlhbG9nRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEaWFsb2dGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0RpYWxvZ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQm9keUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhcmVCdXR0b25zU3RhY2tlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgY2xpY2tEZWZhdWx0QnV0dG9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBnZXRBY3Rpb25Gcm9tRXZlbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9LFxuICAgICAgICAgICAgICAgIGdldEluaXRpYWxGb2N1c0VsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0NvbnRlbnRTY3JvbGxhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlDbG9zaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbmluZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbGVhc2VGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUJvZHlDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmV2ZXJzZUJ1dHRvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB0cmFwRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckNvbnRlbnRFdmVudEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyQ29udGVudEV2ZW50SGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGlzU2Nyb2xsYWJsZUNvbnRlbnRBdFRvcDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNTY3JvbGxhYmxlQ29udGVudEF0Qm90dG9tOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlcldpbmRvd0V2ZW50SGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJXaW5kb3dFdmVudEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXV0b1N0YWNrQnV0dG9ucyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSB0aGlzLmFkYXB0ZXIuaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5GVUxMU0NSRUVOKTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRpYWxvZ09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2Uoc3RyaW5ncy5ERVNUUk9ZX0FDVElPTik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYW5pbWF0aW9uVGltZXIpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyQ29udGVudEV2ZW50SGFuZGxlcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hbmltRnJhbWUuY2FuY2VsQWxsKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyV2luZG93RXZlbnRIYW5kbGVyKCdyZXNpemUnLCB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlcldpbmRvd0V2ZW50SGFuZGxlcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLndpbmRvd09yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKGRpYWxvZ09wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5kaWFsb2dPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeU9wZW5pbmcoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuT1BFTklORyk7XG4gICAgICAgIGlmICh0aGlzLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgLy8gQSBzY3JvbGwgZXZlbnQgbGlzdGVuZXIgaXMgcmVnaXN0ZXJlZCBldmVuIGlmIHRoZSBkaWFsb2cgaXMgbm90XG4gICAgICAgICAgICAvLyBzY3JvbGxhYmxlIG9uIG9wZW4sIHNpbmNlIHRoZSB3aW5kb3cgcmVzaXplIGV2ZW50LCBvciBvcmllbnRhdGlvblxuICAgICAgICAgICAgLy8gY2hhbmdlIG1heSBtYWtlIHRoZSBkaWFsb2cgc2Nyb2xsYWJsZSBhZnRlciBpdCBpcyBvcGVuZWQuXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJDb250ZW50RXZlbnRIYW5kbGVyKCdzY3JvbGwnLCB0aGlzLmNvbnRlbnRTY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlhbG9nT3B0aW9ucyAmJiBkaWFsb2dPcHRpb25zLmlzQWJvdmVGdWxsc2NyZWVuRGlhbG9nKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TQ1JJTV9ISURERU4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlcldpbmRvd0V2ZW50SGFuZGxlcigncmVzaXplJywgdGhpcy53aW5kb3dSZXNpemVIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVyV2luZG93RXZlbnRIYW5kbGVyKCdvcmllbnRhdGlvbmNoYW5nZScsIHRoaXMud2luZG93T3JpZW50YXRpb25DaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgLy8gV2FpdCBhIGZyYW1lIG9uY2UgZGlzcGxheSBpcyBubyBsb25nZXIgXCJub25lXCIsIHRvIGVzdGFibGlzaCBiYXNpcyBmb3JcbiAgICAgICAgLy8gYW5pbWF0aW9uXG4gICAgICAgIHRoaXMucnVuTmV4dEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuYWRkQm9keUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0xPQ0spO1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0KCk7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci50cmFwRm9jdXMoX3RoaXMuYWRhcHRlci5nZXRJbml0aWFsRm9jdXNFbCgpKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLm5vdGlmeU9wZW5lZCgpO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5ESUFMT0dfQU5JTUFUSU9OX09QRU5fVElNRV9NUyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IHZvaWQgMCkgeyBhY3Rpb24gPSAnJzsgfVxuICAgICAgICBpZiAoIXRoaXMuZGlhbG9nT3Blbikge1xuICAgICAgICAgICAgLy8gQXZvaWQgcmVkdW5kYW50IGNsb3NlIGNhbGxzIChhbmQgZXZlbnRzKSwgZS5nLiBmcm9tIGtleWRvd24gb24gZWxlbWVudHNcbiAgICAgICAgICAgIC8vIHRoYXQgaW5oZXJlbnRseSBlbWl0IGNsaWNrXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWFsb2dPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlDbG9zaW5nKGFjdGlvbik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhjc3NDbGFzc2VzLkNMT1NJTkcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUJvZHlDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9MT0NLKTtcbiAgICAgICAgaWYgKHRoaXMuaXNGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckNvbnRlbnRFdmVudEhhbmRsZXIoJ3Njcm9sbCcsIHRoaXMuY29udGVudFNjcm9sbEhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyV2luZG93RXZlbnRIYW5kbGVyKCdyZXNpemUnLCB0aGlzLndpbmRvd1Jlc2l6ZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlcldpbmRvd0V2ZW50SGFuZGxlcignb3JpZW50YXRpb25jaGFuZ2UnLCB0aGlzLndpbmRvd09yaWVudGF0aW9uQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gMDtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXIpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbGVhc2VGb2N1cygpO1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmQoKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIubm90aWZ5Q2xvc2VkKGFjdGlvbik7XG4gICAgICAgIH0sIG51bWJlcnMuRElBTE9HX0FOSU1BVElPTl9DTE9TRV9USU1FX01TKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVzZWQgb25seSBpbiBpbnN0YW5jZXMgb2Ygc2hvd2luZyBhIHNlY29uZGFyeSBkaWFsb2cgb3ZlciBhIGZ1bGwtc2NyZWVuXG4gICAgICogZGlhbG9nLiBTaG93cyB0aGUgXCJzdXJmYWNlIHNjcmltXCIgZGlzcGxheWVkIG92ZXIgdGhlIGZ1bGwtc2NyZWVuIGRpYWxvZy5cbiAgICAgKi9cbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5zaG93U3VyZmFjZVNjcmltID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TVVJGQUNFX1NDUklNX1NIT1dJTkcpO1xuICAgICAgICB0aGlzLnJ1bk5leHRBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuU1VSRkFDRV9TQ1JJTV9TSE9XTik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVXNlZCBvbmx5IGluIGluc3RhbmNlcyBvZiBzaG93aW5nIGEgc2Vjb25kYXJ5IGRpYWxvZyBvdmVyIGEgZnVsbC1zY3JlZW5cbiAgICAgKiBkaWFsb2cuIEhpZGVzIHRoZSBcInN1cmZhY2Ugc2NyaW1cIiBkaXNwbGF5ZWQgb3ZlciB0aGUgZnVsbC1zY3JlZW4gZGlhbG9nLlxuICAgICAqL1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmhpZGVTdXJmYWNlU2NyaW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNVUkZBQ0VfU0NSSU1fU0hPV04pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TVVJGQUNFX1NDUklNX0hJRElORyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGB0cmFuc2l0aW9uZW5kYCBldmVudCB0cmlnZ2VyZWQgd2hlbiBzdXJmYWNlIHNjcmltIGFuaW1hdGlvbiBpc1xuICAgICAqIGZpbmlzaGVkLlxuICAgICAqL1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVN1cmZhY2VTY3JpbVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNVUkZBQ0VfU0NSSU1fSElESU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU1VSRkFDRV9TQ1JJTV9TSE9XSU5HKTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlhbG9nT3BlbjtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmdldEVzY2FwZUtleUFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXNjYXBlS2V5QWN0aW9uO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RXNjYXBlS2V5QWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLmVzY2FwZUtleUFjdGlvbiA9IGFjdGlvbjtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmdldFNjcmltQ2xpY2tBY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjcmltQ2xpY2tBY3Rpb247XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTY3JpbUNsaWNrQWN0aW9uID0gZnVuY3Rpb24gKGFjdGlvbikge1xuICAgICAgICB0aGlzLnNjcmltQ2xpY2tBY3Rpb24gPSBhY3Rpb247XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRBdXRvU3RhY2tCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRvU3RhY2tCdXR0b25zO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QXV0b1N0YWNrQnV0dG9ucyA9IGZ1bmN0aW9uIChhdXRvU3RhY2spIHtcbiAgICAgICAgdGhpcy5hdXRvU3RhY2tCdXR0b25zID0gYXV0b1N0YWNrO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0U3VwcHJlc3NEZWZhdWx0UHJlc3NTZWxlY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VwcHJlc3NEZWZhdWx0UHJlc3NTZWxlY3RvcjtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldFN1cHByZXNzRGVmYXVsdFByZXNzU2VsZWN0b3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgdGhpcy5zdXBwcmVzc0RlZmF1bHRQcmVzc1NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgfTtcbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuYW5pbUZyYW1lLnJlcXVlc3QoQW5pbWF0aW9uS2V5cy5QT0xMX0xBWU9VVF9DSEFOR0UsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIEhhbmRsZXMgY2xpY2sgb24gdGhlIGRpYWxvZyByb290IGVsZW1lbnQuICovXG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc1NjcmltID0gdGhpcy5hZGFwdGVyLmV2ZW50VGFyZ2V0TWF0Y2hlcyhldnQudGFyZ2V0LCBzdHJpbmdzLlNDUklNX1NFTEVDVE9SKTtcbiAgICAgICAgLy8gQ2hlY2sgZm9yIHNjcmltIGNsaWNrIGZpcnN0IHNpbmNlIGl0IGRvZXNuJ3QgcmVxdWlyZSBxdWVyeWluZyBhbmNlc3RvcnMuXG4gICAgICAgIGlmIChpc1NjcmltICYmIHRoaXMuc2NyaW1DbGlja0FjdGlvbiAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodGhpcy5zY3JpbUNsaWNrQWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFkYXB0ZXIuZ2V0QWN0aW9uRnJvbUV2ZW50KGV2dCk7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZShhY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogSGFuZGxlcyBrZXlkb3duIG9uIHRoZSBkaWFsb2cgcm9vdCBlbGVtZW50LiAqL1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc0VudGVyID0gZXZ0LmtleSA9PT0gJ0VudGVyJyB8fCBldnQua2V5Q29kZSA9PT0gMTM7XG4gICAgICAgIGlmICghaXNFbnRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhY3Rpb24gPSB0aGlzLmFkYXB0ZXIuZ2V0QWN0aW9uRnJvbUV2ZW50KGV2dCk7XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIC8vIEFjdGlvbiBidXR0b24gY2FsbGJhY2sgaXMgaGFuZGxlZCBpbiBgaGFuZGxlQ2xpY2tgLFxuICAgICAgICAgICAgLy8gc2luY2Ugc3BhY2UvZW50ZXIga2V5ZG93bnMgb24gYnV0dG9ucyB0cmlnZ2VyIGNsaWNrIGV2ZW50cy5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBgY29tcG9zZWRQYXRoYCBpcyB1c2VkIGhlcmUsIHdoZW4gYXZhaWxhYmxlLCB0byBhY2NvdW50IGZvciB1c2UgY2FzZXNcbiAgICAgICAgLy8gd2hlcmUgYSB0YXJnZXQgbWVhbnQgdG8gc3VwcHJlc3MgdGhlIGRlZmF1bHQgcHJlc3MgYmVoYXZpb3VyXG4gICAgICAgIC8vIG1heSBleGlzdCBpbiBhIHNoYWRvdyByb290LlxuICAgICAgICAvLyBGb3IgZXhhbXBsZSwgYSB0ZXh0YXJlYSBpbnNpZGUgYSB3ZWIgY29tcG9uZW50OlxuICAgICAgICAvLyA8bXdjLWRpYWxvZz5cbiAgICAgICAgLy8gICA8aG9yaXpvbnRhbC1sYXlvdXQ+XG4gICAgICAgIC8vICAgICAjc2hhZG93LXJvb3QgKG9wZW4pXG4gICAgICAgIC8vICAgICAgIDxtd2MtdGV4dGFyZWE+XG4gICAgICAgIC8vICAgICAgICAgI3NoYWRvdy1yb290IChvcGVuKVxuICAgICAgICAvLyAgICAgICAgICAgPHRleHRhcmVhPjwvdGV4dGFyZWE+XG4gICAgICAgIC8vICAgICAgIDwvbXdjLXRleHRhcmVhPlxuICAgICAgICAvLyAgIDwvaG9yaXpvbnRhbC1sYXlvdXQ+XG4gICAgICAgIC8vIDwvbXdjLWRpYWxvZz5cbiAgICAgICAgdmFyIHRhcmdldCA9IGV2dC5jb21wb3NlZFBhdGggPyBldnQuY29tcG9zZWRQYXRoKClbMF0gOiBldnQudGFyZ2V0O1xuICAgICAgICB2YXIgaXNEZWZhdWx0ID0gdGhpcy5zdXBwcmVzc0RlZmF1bHRQcmVzc1NlbGVjdG9yID9cbiAgICAgICAgICAgICF0aGlzLmFkYXB0ZXIuZXZlbnRUYXJnZXRNYXRjaGVzKHRhcmdldCwgdGhpcy5zdXBwcmVzc0RlZmF1bHRQcmVzc1NlbGVjdG9yKSA6XG4gICAgICAgICAgICB0cnVlO1xuICAgICAgICBpZiAoaXNFbnRlciAmJiBpc0RlZmF1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5jbGlja0RlZmF1bHRCdXR0b24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEhhbmRsZXMga2V5ZG93biBvbiB0aGUgZG9jdW1lbnQuICovXG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRG9jdW1lbnRLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgaXNFc2NhcGUgPSBldnQua2V5ID09PSAnRXNjYXBlJyB8fCBldnQua2V5Q29kZSA9PT0gMjc7XG4gICAgICAgIGlmIChpc0VzY2FwZSAmJiB0aGlzLmVzY2FwZUtleUFjdGlvbiAhPT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UodGhpcy5lc2NhcGVLZXlBY3Rpb24pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHNjcm9sbCBldmVudCBvbiB0aGUgZGlhbG9nJ3MgY29udGVudCBlbGVtZW50IC0tIHNob3dpbmcgYSBzY3JvbGxcbiAgICAgKiBkaXZpZGVyIG9uIHRoZSBoZWFkZXIgb3IgZm9vdGVyIGJhc2VkIG9uIHRoZSBzY3JvbGwgcG9zaXRpb24uIFRoaXMgaGFuZGxlclxuICAgICAqIHNob3VsZCBvbmx5IGJlIHJlZ2lzdGVyZWQgb24gZnVsbC1zY3JlZW4gZGlhbG9ncyB3aXRoIHNjcm9sbGFibGUgY29udGVudC5cbiAgICAgKi9cbiAgICBNRENEaWFsb2dGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVTY3JvbGxFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gU2luY2Ugc2Nyb2xsIGV2ZW50cyBjYW4gZmlyZSBhdCBhIGhpZ2ggcmF0ZSwgd2UgdGhyb3R0bGUgdGhlc2UgZXZlbnRzIGJ5XG4gICAgICAgIC8vIHVzaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cbiAgICAgICAgdGhpcy5hbmltRnJhbWUucmVxdWVzdChBbmltYXRpb25LZXlzLlBPTExfU0NST0xMX1BPUywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMudG9nZ2xlU2Nyb2xsRGl2aWRlckhlYWRlcigpO1xuICAgICAgICAgICAgX3RoaXMudG9nZ2xlU2Nyb2xsRGl2aWRlckZvb3RlcigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dEludGVybmFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hdXRvU3RhY2tCdXR0b25zKSB7XG4gICAgICAgICAgICB0aGlzLmRldGVjdFN0YWNrZWRCdXR0b25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2dnbGVTY3JvbGxhYmxlQ2xhc3NlcygpO1xuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgPSAwO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5PUEVOSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQ0xPU0lORyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSBnaXZlbiBsb2dpYyBvbiB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUsIHVzaW5nIHNldFRpbWVvdXQgdG9cbiAgICAgKiBmYWN0b3IgaW4gRmlyZWZveCByZWZsb3cgYmVoYXZpb3IuXG4gICAgICovXG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUucnVuTmV4dEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvbkZyYW1lID0gMDtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5hbmltYXRpb25UaW1lcik7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lciA9IHNldFRpbWVvdXQoY2FsbGJhY2ssIDApO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRldGVjdFN0YWNrZWRCdXR0b25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGNsYXNzIGZpcnN0IHRvIGxldCB1cyBtZWFzdXJlIHRoZSBidXR0b25zJyBuYXR1cmFsIHBvc2l0aW9ucy5cbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU1RBQ0tFRCk7XG4gICAgICAgIHZhciBhcmVCdXR0b25zU3RhY2tlZCA9IHRoaXMuYWRhcHRlci5hcmVCdXR0b25zU3RhY2tlZCgpO1xuICAgICAgICBpZiAoYXJlQnV0dG9uc1N0YWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhjc3NDbGFzc2VzLlNUQUNLRUQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmVCdXR0b25zU3RhY2tlZCAhPT0gdGhpcy5hcmVCdXR0b25zU3RhY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJldmVyc2VCdXR0b25zKCk7XG4gICAgICAgICAgICB0aGlzLmFyZUJ1dHRvbnNTdGFja2VkID0gYXJlQnV0dG9uc1N0YWNrZWQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0RpYWxvZ0ZvdW5kYXRpb24ucHJvdG90eXBlLnRvZ2dsZVNjcm9sbGFibGVDbGFzc2VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZW1vdmUgdGhlIGNsYXNzIGZpcnN0IHRvIGxldCB1cyBtZWFzdXJlIHRoZSBuYXR1cmFsIGhlaWdodCBvZiB0aGVcbiAgICAgICAgLy8gY29udGVudC5cbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMQUJMRSk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNDb250ZW50U2Nyb2xsYWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TQ1JPTExBQkxFKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgICAgIC8vIElmIGRpYWxvZyBpcyBmdWxsLXNjcmVlbiBhbmQgc2Nyb2xsYWJsZSwgY2hlY2sgaWYgYSBzY3JvbGwgZGl2aWRlclxuICAgICAgICAgICAgICAgIC8vIHNob3VsZCBiZSBzaG93bi5cbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbERpdmlkZXJIZWFkZXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbERpdmlkZXJGb290ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUudG9nZ2xlU2Nyb2xsRGl2aWRlckhlYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIuaXNTY3JvbGxhYmxlQ29udGVudEF0VG9wKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9ESVZJREVSX0hFQURFUik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0RJVklERVJfSEVBREVSKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0RJVklERVJfSEVBREVSKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRGlhbG9nRm91bmRhdGlvbi5wcm90b3R5cGUudG9nZ2xlU2Nyb2xsRGl2aWRlckZvb3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIuaXNTY3JvbGxhYmxlQ29udGVudEF0Qm90dG9tKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhjc3NDbGFzc2VzLlNDUk9MTF9ESVZJREVSX0ZPT1RFUik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0RJVklERVJfRk9PVEVSKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuU0NST0xMX0RJVklERVJfRk9PVEVSKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0RpYWxvZ0ZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0RpYWxvZ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENEaWFsb2dGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCJpbXBvcnQge1xuICBidWJibGUsXG4gIGxpc3RlbixcbiAgcHJldmVudF9kZWZhdWx0LFxuICBzdG9wX3Byb3BhZ2F0aW9uLFxufSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuXG4vLyBNYXRjaCBtb2RpZmllcnMgb24gRE9NIGV2ZW50cy5cbmNvbnN0IG9sZE1vZGlmaWVyUmVnZXggPSAvXlthLXpdKyg/OjooPzpwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb258cGFzc2l2ZXxub25wYXNzaXZlfGNhcHR1cmV8b25jZXxzZWxmKSkrJC87XG4vLyBNYXRjaCBtb2RpZmllcnMgb24gb3RoZXIgZXZlbnRzLlxuY29uc3QgbmV3TW9kaWZpZXJSZWdleCA9IC9eW14kXSsoPzpcXCQoPzpwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb258cGFzc2l2ZXxub25wYXNzaXZlfGNhcHR1cmV8b25jZXxzZWxmKSkrJC87XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRXZlbnRzQnVpbGRlcihjb21wb25lbnQpIHtcbiAgLy8gVGhpcyBpcyBvdXIgcHNldWRvICRvbiBmdW5jdGlvbi4gSXQgaXMgZGVmaW5lZCBvbiBjb21wb25lbnQgbW91bnQuXG4gIGxldCAkb247XG4gIC8vIFRoaXMgaXMgYSBsaXN0IG9mIGV2ZW50cyBib3VuZCBiZWZvcmUgbW91bnQuXG4gIGxldCBldmVudHMgPSBbXTtcbiAgLy8gVGhpcyBpcyB0aGUgb3JpZ2luYWwgY29tcG9uZW50ICRvbiBmdW5jdGlvbi5cbiAgY29uc3QgY29tcG9uZW50T24gPSBjb21wb25lbnQuJG9uO1xuXG4gIC8vIEFuZCB3ZSBvdmVycmlkZSB0aGUgJG9uIGZ1bmN0aW9uIHRvIGZvcndhcmQgYWxsIGJvdW5kIGV2ZW50cy5cbiAgY29tcG9uZW50LiRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgIGxldCBldmVudFR5cGUgPSBmdWxsRXZlbnRUeXBlO1xuICAgIGxldCBkZXN0cnVjdG9yID0gKCkgPT4ge307XG4gICAgaWYgKCRvbikge1xuICAgICAgLy8gVGhlIGV2ZW50IHdhcyBib3VuZCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgZGVzdHJ1Y3RvciA9ICRvbihldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGV2ZW50IHdhcyBib3VuZCBiZWZvcmUgbW91bnQgYnkgU3ZlbHRlLlxuICAgICAgZXZlbnRzLnB1c2goW2V2ZW50VHlwZSwgY2FsbGJhY2tdKTtcbiAgICB9XG4gICAgY29uc3Qgb2xkTW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChvbGRNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG5cbiAgICBpZiAob2xkTW9kaWZpZXJNYXRjaCAmJiBjb25zb2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdFdmVudCBtb2RpZmllcnMgaW4gU01VSSBub3cgdXNlIFwiJFwiIGluc3RlYWQgb2YgXCI6XCIsIHNvIHRoYXQgYWxsIGV2ZW50cyBjYW4gYmUgYm91bmQgd2l0aCBtb2RpZmllcnMuIFBsZWFzZSB1cGRhdGUgeW91ciBldmVudCBiaW5kaW5nOiAnLFxuICAgICAgICBldmVudFR5cGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGlmaWVyTWF0Y2gpIHtcbiAgICAgIC8vIFJlbW92ZSBtb2RpZmllcnMgZnJvbSB0aGUgcmVhbCBldmVudC5cbiAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgJG9uIGZ1bmN0aW9uLlxuICAgIGNvbnN0IGNvbXBvbmVudERlc3RydWN0b3IgPSBjb21wb25lbnRPbi5jYWxsKFxuICAgICAgY29tcG9uZW50LFxuICAgICAgZXZlbnRUeXBlLFxuICAgICAgY2FsbGJhY2tcbiAgICApO1xuXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICBkZXN0cnVjdG9yKCk7XG4gICAgICByZXR1cm4gY29tcG9uZW50RGVzdHJ1Y3RvciguLi5hcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZvcndhcmQoZSkge1xuICAgIC8vIEludGVybmFsbHkgYnViYmxlIHRoZSBldmVudCB1cCBmcm9tIFN2ZWx0ZSBjb21wb25lbnRzLlxuICAgIGJ1YmJsZShjb21wb25lbnQsIGUpO1xuICB9XG5cbiAgcmV0dXJuIChub2RlKSA9PiB7XG4gICAgY29uc3QgZGVzdHJ1Y3RvcnMgPSBbXTtcbiAgICBjb25zdCBmb3J3YXJkRGVzdHJ1Y3RvcnMgPSB7fTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIGZvcndhcmRpbmcgYWxsIGJvdW5kIGV2ZW50cy5cbiAgICAkb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICAgIGxldCBldmVudFR5cGUgPSBmdWxsRXZlbnRUeXBlO1xuICAgICAgbGV0IGhhbmRsZXIgPSBjYWxsYmFjaztcbiAgICAgIC8vIERPTSBhZGRFdmVudExpc3RlbmVyIG9wdGlvbnMgYXJndW1lbnQuXG4gICAgICBsZXQgb3B0aW9ucyA9IGZhbHNlO1xuICAgICAgY29uc3Qgb2xkTW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChvbGRNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuICAgICAgaWYgKG1vZGlmaWVyTWF0Y2gpIHtcbiAgICAgICAgLy8gUGFyc2UgdGhlIGV2ZW50IG1vZGlmaWVycy5cbiAgICAgICAgLy8gU3VwcG9ydGVkIG1vZGlmaWVyczpcbiAgICAgICAgLy8gLSBwcmV2ZW50RGVmYXVsdFxuICAgICAgICAvLyAtIHN0b3BQcm9wYWdhdGlvblxuICAgICAgICAvLyAtIHBhc3NpdmVcbiAgICAgICAgLy8gLSBub25wYXNzaXZlXG4gICAgICAgIC8vIC0gY2FwdHVyZVxuICAgICAgICAvLyAtIG9uY2VcbiAgICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmZyb21FbnRyaWVzKHBhcnRzLnNsaWNlKDEpLm1hcCgobW9kKSA9PiBbbW9kLCB0cnVlXSkpO1xuICAgICAgICBpZiAob3B0aW9ucy5ub25wYXNzaXZlKSB7XG4gICAgICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2U7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMubm9ucGFzc2l2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGhhbmRsZXIgPSBwcmV2ZW50X2RlZmF1bHQoaGFuZGxlcik7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMucHJldmVudERlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BfcHJvcGFnYXRpb24oaGFuZGxlcik7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgdGhlIGV2ZW50IGRpcmVjdGx5LCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgICAgY29uc3Qgb2ZmID0gbGlzdGVuKG5vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICBjb25zdCBkZXN0cnVjdG9yID0gKCkgPT4ge1xuICAgICAgICBvZmYoKTtcbiAgICAgICAgY29uc3QgaWR4ID0gZGVzdHJ1Y3RvcnMuaW5kZXhPZihkZXN0cnVjdG9yKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRlc3RydWN0b3JzLnB1c2goZGVzdHJ1Y3Rvcik7XG5cbiAgICAgIC8vIEZvcndhcmQgdGhlIGV2ZW50IGZyb20gU3ZlbHRlLlxuICAgICAgaWYgKCFldmVudFR5cGUgaW4gZm9yd2FyZERlc3RydWN0b3JzKSB7XG4gICAgICAgIGZvcndhcmREZXN0cnVjdG9yc1tldmVudFR5cGVdID0gbGlzdGVuKG5vZGUsIGV2ZW50VHlwZSwgZm9yd2FyZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXN0cnVjdG9yO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gTGlzdGVuIHRvIGFsbCB0aGUgZXZlbnRzIGFkZGVkIGJlZm9yZSBtb3VudC5cbiAgICAgICRvbihldmVudHNbaV1bMF0sIGV2ZW50c1tpXVsxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdHJ1Y3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkZXN0cnVjdG9yc1tpXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudCBmb3J3YXJkZXJzLlxuICAgICAgICBmb3IgKGxldCBlbnRyeSBvZiBPYmplY3QuZW50cmllcyhmb3J3YXJkRGVzdHJ1Y3RvcnMpKSB7XG4gICAgICAgICAgZW50cnlbMV0oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsYXNzTWFwKGNsYXNzT2JqKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhjbGFzc09iailcbiAgICAuZmlsdGVyKChbbmFtZSwgdmFsdWVdKSA9PiBuYW1lICE9PSAnJyAmJiB2YWx1ZSlcbiAgICAubWFwKChbbmFtZV0pID0+IG5hbWUpXG4gICAgLmpvaW4oJyAnKTtcbn1cbiIsIjxzdmVsdGU6Y29tcG9uZW50XG4gIHRoaXM9e2NvbXBvbmVudH1cbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U9e1tmb3J3YXJkRXZlbnRzLCAuLi51c2VdfVxuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgIFtzbXVpQ2xhc3NdOiB0cnVlLFxuICAgIC4uLnNtdWlDbGFzc01hcCxcbiAgfSl9XG4gIHsuLi5wcm9wc31cbiAgey4uLiQkcmVzdFByb3BzfT48c2xvdCAvPjwvc3ZlbHRlOmNvbXBvbmVudFxuPlxuXG48c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgZXhwb3J0IGNvbnN0IGludGVybmFscyA9IHtcbiAgICBjb21wb25lbnQ6IG51bGwsXG4gICAgY2xhc3M6ICcnLFxuICAgIC8vIFRoZSBjbGFzcyBtYXAgbWFwcyBjbGFzc2VzIHRvIGNvbnRleHRzLiBUaGUgY29udGV4dFxuICAgIC8vIHNob3VsZCByZXNvbHZlIHRvIGEgU3ZlbHRlIHN0b3JlLCBhbmQgdGhlIGNsYXNzXG4gICAgLy8gd2lsbCBiZSBhZGRlZCBpZiB0aGUgU3ZlbHRlIHN0b3JlJ3MgdmFsdWUgaXMgdHJ1ZS5cbiAgICBjbGFzc01hcDoge30sXG4gICAgY29udGV4dHM6IHt9LFxuICAgIHByb3BzOiB7fSxcbiAgfTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBvbkRlc3Ryb3ksIGdldENvbnRleHQsIHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBmb3J3YXJkRXZlbnRzQnVpbGRlciB9IGZyb20gJy4vZm9yd2FyZEV2ZW50c0J1aWxkZXIuanMnO1xuICBpbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gJy4vY2xhc3NNYXAuanMnO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGNvbnN0IHNtdWlDbGFzcyA9IGludGVybmFscy5jbGFzcztcbiAgY29uc3Qgc211aUNsYXNzTWFwID0ge307XG4gIGNvbnN0IHNtdWlDbGFzc1Vuc3Vic2NyaWJlcyA9IFtdO1xuICBjb25zdCBjb250ZXh0cyA9IGludGVybmFscy5jb250ZXh0cztcbiAgY29uc3QgcHJvcHMgPSBpbnRlcm5hbHMucHJvcHM7XG5cbiAgZXhwb3J0IGxldCBjb21wb25lbnQgPSBpbnRlcm5hbHMuY29tcG9uZW50O1xuXG4gIE9iamVjdC5lbnRyaWVzKGludGVybmFscy5jbGFzc01hcCkuZm9yRWFjaCgoW25hbWUsIGNvbnRleHRdKSA9PiB7XG4gICAgY29uc3Qgc3RvcmUgPSBnZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgaWYgKHN0b3JlICYmICdzdWJzY3JpYmUnIGluIHN0b3JlKSB7XG4gICAgICBzbXVpQ2xhc3NVbnN1YnNjcmliZXMucHVzaChcbiAgICAgICAgc3RvcmUuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHNtdWlDbGFzc01hcFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZm9yIChsZXQgY29udGV4dCBpbiBjb250ZXh0cykge1xuICAgIGlmIChjb250ZXh0cy5oYXNPd25Qcm9wZXJ0eShjb250ZXh0KSkge1xuICAgICAgc2V0Q29udGV4dChjb250ZXh0LCBjb250ZXh0c1tjb250ZXh0XSk7XG4gICAgfVxuICB9XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBmb3IgKGNvbnN0IHVuc3Vic2NyaWJlIG9mIHNtdWlDbGFzc1Vuc3Vic2NyaWJlcykge1xuICAgICAgdW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEVsZW1lbnQoKTtcbiAgfVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgQ2xhc3NBZGRlciwgeyBpbnRlcm5hbHMgfSBmcm9tICcuL0NsYXNzQWRkZXIuc3ZlbHRlJztcblxuY29uc3QgZGVmYXVsdHMgPSB7IC4uLmludGVybmFscyB9O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NBZGRlckJ1aWxkZXIocHJvcHMpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50KC4uLmFyZ3MpIHtcbiAgICBPYmplY3QuYXNzaWduKGludGVybmFscywgZGVmYXVsdHMsIHByb3BzKTtcbiAgICByZXR1cm4gbmV3IENsYXNzQWRkZXIoLi4uYXJncyk7XG4gIH1cblxuICBDb21wb25lbnQucHJvdG90eXBlID0gQ2xhc3NBZGRlcjtcblxuICAvLyBTU1Igc3VwcG9ydFxuICBpZiAoQ2xhc3NBZGRlci4kJHJlbmRlcikge1xuICAgIENvbXBvbmVudC4kJHJlbmRlciA9ICguLi5hcmdzKSA9PlxuICAgICAgT2JqZWN0LmFzc2lnbihpbnRlcm5hbHMsIGRlZmF1bHRzLCBwcm9wcykgJiYgQ2xhc3NBZGRlci4kJHJlbmRlciguLi5hcmdzKTtcbiAgfVxuICBpZiAoQ2xhc3NBZGRlci5yZW5kZXIpIHtcbiAgICBDb21wb25lbnQucmVuZGVyID0gKC4uLmFyZ3MpID0+XG4gICAgICBPYmplY3QuYXNzaWduKGludGVybmFscywgZGVmYXVsdHMsIHByb3BzKSAmJiBDbGFzc0FkZGVyLnJlbmRlciguLi5hcmdzKTtcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQ7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goXG4gIGVsZW1lbnQsXG4gIGV2ZW50VHlwZSxcbiAgZGV0YWlsID0ge30sXG4gIGV2ZW50SW5pdCA9IHsgYnViYmxlczogdHJ1ZSB9XG4pIHtcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgZXZlbnRJbml0KTtcbiAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgY29uc3QgZWwgPSAnZ2V0RWxlbWVudCcgaW4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0RWxlbWVudCgpIDogZWxlbWVudDtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBleGNsdWRlKG9iaiwga2V5cykge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGNvbnN0IGNhc2hJbmRleCA9IG5hbWUuaW5kZXhPZignJCcpO1xuICAgIGlmIChcbiAgICAgIGNhc2hJbmRleCAhPT0gLTEgJiZcbiAgICAgIGtleXMuaW5kZXhPZihuYW1lLnN1YnN0cmluZygwLCBjYXNoSW5kZXggKyAxKSkgIT09IC0xXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGtleXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBuZXdPYmpbbmFtZV0gPSBvYmpbbmFtZV07XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZpbHRlcihvYmosIHByZWZpeCkge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGlmIChuYW1lLnN1YnN0cmluZygwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBuZXdPYmpbbmFtZS5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCldID0gb2JqW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdXNlQWN0aW9ucyhub2RlLCBhY3Rpb25zKSB7XG4gIGxldCBvYmplY3RzID0gW107XG5cbiAgaWYgKGFjdGlvbnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgY29uc3QgYWN0aW9uID0gaXNBcnJheSA/IGFjdGlvbnNbaV1bMF0gOiBhY3Rpb25zW2ldO1xuICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSwgYWN0aW9uc1tpXVsxXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUoYWN0aW9ucykge1xuICAgICAgaWYgKCgoYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCkgfHwgMCkgIT0gb2JqZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBub3QgY2hhbmdlIHRoZSBsZW5ndGggb2YgYW4gYWN0aW9ucyBhcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbnMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ3VwZGF0ZScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICAgICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoYWN0aW9uc1tpXVsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvYmplY3RzW2ldICYmICdkZXN0cm95JyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgb2JqZWN0c1tpXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuIiwiPHN2ZWx0ZTp3aW5kb3dcbiAgb246cmVzaXplPXsoKSA9PiBvcGVuICYmIGluc3RhbmNlICYmIGluc3RhbmNlLmxheW91dCgpfVxuICBvbjpvcmllbnRhdGlvbmNoYW5nZT17KCkgPT4gb3BlbiAmJiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5sYXlvdXQoKX1cbi8+XG48c3ZlbHRlOmJvZHlcbiAgb246a2V5ZG93bj17KGV2ZW50KSA9PlxuICAgIG9wZW4gJiYgaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlRG9jdW1lbnRLZXlkb3duKGV2ZW50KX0gLz5cblxuPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1kaWFsb2cnOiB0cnVlLFxuICAgICdtZGMtZGlhbG9nLS1zdGFja2VkJzogIWF1dG9TdGFja0J1dHRvbnMsXG4gICAgJ21kYy1kaWFsb2ctLWZ1bGxzY3JlZW4nOiBmdWxsc2NyZWVuLFxuICAgICdzbXVpLWRpYWxvZy0tc2VsZWN0aW9uJzogc2VsZWN0aW9uLFxuICAgIC4uLmludGVybmFsQ2xhc3NlcyxcbiAgfSl9XG4gIHJvbGU9XCJhbGVydGRpYWxvZ1wiXG4gIGFyaWEtbW9kYWw9XCJ0cnVlXCJcbiAgb246TURDRGlhbG9nOm9wZW5pbmc9e2hhbmRsZURpYWxvZ09wZW5pbmd9XG4gIG9uOk1EQ0RpYWxvZzpvcGVuZWQ9e2hhbmRsZURpYWxvZ09wZW5lZH1cbiAgb246TURDRGlhbG9nOmNsb3NlZD17aGFuZGxlRGlhbG9nQ2xvc2VkfVxuICBvbjpjbGljaz17KGV2ZW50KSA9PiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVDbGljayhldmVudCl9XG4gIG9uOmtleWRvd249eyhldmVudCkgPT4gaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlS2V5ZG93bihldmVudCl9XG4gIHsuLi5leGNsdWRlKCQkcmVzdFByb3BzLCBbJ2NvbnRhaW5lciQnLCAnc3VyZmFjZSQnXSl9XG4+XG4gIDxkaXZcbiAgICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICAgW2NvbnRhaW5lciRjbGFzc106IHRydWUsXG4gICAgICAnbWRjLWRpYWxvZ19fY29udGFpbmVyJzogdHJ1ZSxcbiAgICB9KX1cbiAgICB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAnY29udGFpbmVyJCcpfVxuICA+XG4gICAgPGRpdlxuICAgICAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICAgICAgW3N1cmZhY2UkY2xhc3NdOiB0cnVlLFxuICAgICAgICAnbWRjLWRpYWxvZ19fc3VyZmFjZSc6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHJvbGU9XCJhbGVydGRpYWxvZ1wiXG4gICAgICBhcmlhLW1vZGFsPVwidHJ1ZVwiXG4gICAgICB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAnc3VyZmFjZSQnKX1cbiAgICA+XG4gICAgICA8c2xvdCAvPlxuICAgICAgeyNpZiBmdWxsc2NyZWVufVxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJtZGMtZGlhbG9nX19zdXJmYWNlLXNjcmltXCJcbiAgICAgICAgICBvbjp0cmFuc2l0aW9uZW5kPXsoKSA9PlxuICAgICAgICAgICAgaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlU3VyZmFjZVNjcmltVHJhbnNpdGlvbkVuZCgpfVxuICAgICAgICAvPlxuICAgICAgey9pZn1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtZGMtZGlhbG9nX19zY3JpbVwiIC8+XG48L2Rpdj5cblxuPHNsb3QgbmFtZT1cIm92ZXJcIiAvPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENEaWFsb2dGb3VuZGF0aW9uLCB1dGlsIH0gZnJvbSAnQG1hdGVyaWFsL2RpYWxvZyc7XG4gIGltcG9ydCB7IGZvY3VzVHJhcCBhcyBkb21Gb2N1c1RyYXAsIHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbSc7XG4gIGltcG9ydCB7IG9uTW91bnQsIG9uRGVzdHJveSwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICBleGNsdWRlLFxuICAgIHByZWZpeEZpbHRlcixcbiAgICB1c2VBY3Rpb25zLFxuICAgIGRpc3BhdGNoLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG4gIGNvbnN0IHsgRm9jdXNUcmFwIH0gPSBkb21Gb2N1c1RyYXA7XG4gIGNvbnN0IHsgY2xvc2VzdCwgbWF0Y2hlcyB9ID0gcG9ueWZpbGw7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IG9wZW4gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBzZWxlY3Rpb24gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBlc2NhcGVLZXlBY3Rpb24gPSAnY2xvc2UnO1xuICBleHBvcnQgbGV0IHNjcmltQ2xpY2tBY3Rpb24gPSAnY2xvc2UnO1xuICBleHBvcnQgbGV0IGF1dG9TdGFja0J1dHRvbnMgPSB0cnVlO1xuICBleHBvcnQgbGV0IGZ1bGxzY3JlZW4gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjb250YWluZXIkY2xhc3MgPSAnJztcbiAgZXhwb3J0IGxldCBzdXJmYWNlJGNsYXNzID0gJyc7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnN0YW5jZTtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgZm9jdXNUcmFwO1xuICBsZXQgYWN0aW9uQnV0dG9uc1JldmVyc2VkID0gd3JpdGFibGUoZmFsc2UpO1xuICBsZXQgYWRkTGF5b3V0TGlzdGVuZXIgPSBnZXRDb250ZXh0KCdTTVVJOmFkZExheW91dExpc3RlbmVyJyk7XG4gIGxldCBhYm92ZUZ1bGxzY3JlZW4gPSBnZXRDb250ZXh0KCdTTVVJOmRpYWxvZzphYm92ZUZ1bGxzY3JlZW4nKTtcbiAgbGV0IGFib3ZlRnVsbHNjcmVlblNob3duID1cbiAgICBnZXRDb250ZXh0KCdTTVVJOmRpYWxvZzphYm92ZUZ1bGxzY3JlZW5TaG93bicpIHx8IHdyaXRhYmxlKGZhbHNlKTtcbiAgbGV0IHJlbW92ZUxheW91dExpc3RlbmVyO1xuICBsZXQgbGF5b3V0TGlzdGVuZXJzID0gW107XG4gIGxldCBhZGRMYXlvdXRMaXN0ZW5lckZuID0gKGxpc3RlbmVyKSA9PiB7XG4gICAgbGF5b3V0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnN0IGlkeCA9IGxheW91dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICBsYXlvdXRMaXN0ZW5lcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmRpYWxvZzphY3Rpb25zOnJldmVyc2VkJywgYWN0aW9uQnV0dG9uc1JldmVyc2VkKTtcbiAgc2V0Q29udGV4dCgnU01VSTphZGRMYXlvdXRMaXN0ZW5lcicsIGFkZExheW91dExpc3RlbmVyRm4pO1xuICBzZXRDb250ZXh0KCdTTVVJOmRpYWxvZzpzZWxlY3Rpb24nLCBzZWxlY3Rpb24pO1xuICBzZXRDb250ZXh0KCdTTVVJOmRpYWxvZzphYm92ZUZ1bGxzY3JlZW4nLCBhYm92ZUZ1bGxzY3JlZW4gfHwgZnVsbHNjcmVlbik7XG4gIHNldENvbnRleHQoJ1NNVUk6ZGlhbG9nOmFib3ZlRnVsbHNjcmVlblNob3duJywgYWJvdmVGdWxsc2NyZWVuU2hvd24pO1xuXG4gICQ6IGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5nZXRFc2NhcGVLZXlBY3Rpb24oKSAhPT0gZXNjYXBlS2V5QWN0aW9uKSB7XG4gICAgaW5zdGFuY2Uuc2V0RXNjYXBlS2V5QWN0aW9uKGVzY2FwZUtleUFjdGlvbik7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuZ2V0U2NyaW1DbGlja0FjdGlvbigpICE9PSBzY3JpbUNsaWNrQWN0aW9uKSB7XG4gICAgaW5zdGFuY2Uuc2V0U2NyaW1DbGlja0FjdGlvbihzY3JpbUNsaWNrQWN0aW9uKTtcbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5nZXRBdXRvU3RhY2tCdXR0b25zKCkgIT09IGF1dG9TdGFja0J1dHRvbnMpIHtcbiAgICBpbnN0YW5jZS5zZXRBdXRvU3RhY2tCdXR0b25zKGF1dG9TdGFja0J1dHRvbnMpO1xuICB9XG5cbiAgJDogaWYgKCFhdXRvU3RhY2tCdXR0b25zKSB7XG4gICAgJGFjdGlvbkJ1dHRvbnNSZXZlcnNlZCA9IHRydWU7XG4gIH1cblxuICBpZiAoYWRkTGF5b3V0TGlzdGVuZXIpIHtcbiAgICByZW1vdmVMYXlvdXRMaXN0ZW5lciA9IGFkZExheW91dExpc3RlbmVyKGxheW91dCk7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuaXNPcGVuKCkgIT09IG9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgaW5zdGFuY2Uub3Blbih7XG4gICAgICAgIGlzQWJvdmVGdWxsc2NyZWVuRGlhbG9nOiAhIWFib3ZlRnVsbHNjcmVlbixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBwcmV2aW91c0Fib3ZlRnVsbHNjcmVlblNob3duID0gJGFib3ZlRnVsbHNjcmVlblNob3duO1xuICAkOiBpZiAoXG4gICAgZnVsbHNjcmVlbiAmJlxuICAgIGluc3RhbmNlICYmXG4gICAgcHJldmlvdXNBYm92ZUZ1bGxzY3JlZW5TaG93biAhPT0gJGFib3ZlRnVsbHNjcmVlblNob3duXG4gICkge1xuICAgIHByZXZpb3VzQWJvdmVGdWxsc2NyZWVuU2hvd24gPSAkYWJvdmVGdWxsc2NyZWVuU2hvd247XG4gICAgaWYgKCRhYm92ZUZ1bGxzY3JlZW5TaG93bikge1xuICAgICAgaW5zdGFuY2Uuc2hvd1N1cmZhY2VTY3JpbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5oaWRlU3VyZmFjZVNjcmltKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgZm9jdXNUcmFwID0gbmV3IEZvY3VzVHJhcChlbGVtZW50LCB7XG4gICAgICBpbml0aWFsRm9jdXNFbDogZ2V0SW5pdGlhbEZvY3VzRWwoKSxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlID0gbmV3IE1EQ0RpYWxvZ0ZvdW5kYXRpb24oe1xuICAgICAgYWRkQm9keUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICAgIGFkZENsYXNzLFxuICAgICAgYXJlQnV0dG9uc1N0YWNrZWQ6ICgpID0+IHV0aWwuYXJlVG9wc01pc2FsaWduZWQoZ2V0QnV0dG9uRWxzKCkpLFxuICAgICAgY2xpY2tEZWZhdWx0QnV0dG9uOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRCdXR0b24gPSBnZXREZWZhdWx0QnV0dG9uRWwoKTtcbiAgICAgICAgaWYgKGRlZmF1bHRCdXR0b24pIHtcbiAgICAgICAgICBkZWZhdWx0QnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBldmVudFRhcmdldE1hdGNoZXM6ICh0YXJnZXQsIHNlbGVjdG9yKSA9PlxuICAgICAgICB0YXJnZXQgPyBtYXRjaGVzKHRhcmdldCwgc2VsZWN0b3IpIDogZmFsc2UsXG4gICAgICBnZXRBY3Rpb25Gcm9tRXZlbnQ6IChldnQpID0+IHtcbiAgICAgICAgaWYgKCFldnQudGFyZ2V0KSB7XG4gICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjbG9zZXN0KGV2dC50YXJnZXQsICdbZGF0YS1tZGMtZGlhbG9nLWFjdGlvbl0nKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgJiYgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWRjLWRpYWxvZy1hY3Rpb24nKTtcbiAgICAgIH0sXG4gICAgICBnZXRJbml0aWFsRm9jdXNFbCxcbiAgICAgIGhhc0NsYXNzLFxuICAgICAgaXNDb250ZW50U2Nyb2xsYWJsZTogKCkgPT4gdXRpbC5pc1Njcm9sbGFibGUoZ2V0Q29udGVudEVsKCkpLFxuICAgICAgbm90aWZ5Q2xvc2VkOiAoYWN0aW9uKSA9PiB7XG4gICAgICAgIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDRGlhbG9nOmNsb3NlZCcsIGFjdGlvbiA/IHsgYWN0aW9uIH0gOiB7fSk7XG4gICAgICB9LFxuICAgICAgbm90aWZ5Q2xvc2luZzogKGFjdGlvbikgPT5cbiAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDRGlhbG9nOmNsb3NpbmcnLCBhY3Rpb24gPyB7IGFjdGlvbiB9IDoge30pLFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiBkaXNwYXRjaChnZXRFbGVtZW50KCksICdNRENEaWFsb2c6b3BlbmVkJywge30pLFxuICAgICAgbm90aWZ5T3BlbmluZzogKCkgPT4gZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDRGlhbG9nOm9wZW5pbmcnLCB7fSksXG4gICAgICByZWxlYXNlRm9jdXM6ICgpID0+IGZvY3VzVHJhcC5yZWxlYXNlRm9jdXMoKSxcbiAgICAgIHJlbW92ZUJvZHlDbGFzczogKGNsYXNzTmFtZSkgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICByZW1vdmVDbGFzcyxcbiAgICAgIHJldmVyc2VCdXR0b25zOiAoKSA9PiB7XG4gICAgICAgICRhY3Rpb25CdXR0b25zUmV2ZXJzZWQgPSB0cnVlO1xuICAgICAgfSxcbiAgICAgIHRyYXBGb2N1czogKCkgPT4gZm9jdXNUcmFwLnRyYXBGb2N1cygpLFxuICAgICAgcmVnaXN0ZXJDb250ZW50RXZlbnRIYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBnZXRDb250ZW50RWwoKTtcbiAgICAgICAgaWYgKGNvbnRlbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGVyZWdpc3RlckNvbnRlbnRFdmVudEhhbmRsZXI6IChldnQsIGhhbmRsZXIpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGdldENvbnRlbnRFbCgpO1xuICAgICAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgY29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpc1Njcm9sbGFibGVDb250ZW50QXRUb3A6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHV0aWwuaXNTY3JvbGxBdFRvcChnZXRDb250ZW50RWwoKSk7XG4gICAgICB9LFxuICAgICAgaXNTY3JvbGxhYmxlQ29udGVudEF0Qm90dG9tOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB1dGlsLmlzU2Nyb2xsQXRCb3R0b20oZ2V0Q29udGVudEVsKCkpO1xuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVyV2luZG93RXZlbnRIYW5kbGVyOiAoZXZ0LCBoYW5kbGVyKSA9PiB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2dCwgaGFuZGxlcik7XG4gICAgICB9LFxuICAgICAgZGVyZWdpc3RlcldpbmRvd0V2ZW50SGFuZGxlcjogKGV2dCwgaGFuZGxlcikgPT4ge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBpZiAocmVtb3ZlTGF5b3V0TGlzdGVuZXIpIHtcbiAgICAgIHJlbW92ZUxheW91dExpc3RlbmVyKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3Nlc1xuICAgICAgPyBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXVxuICAgICAgOiBnZXRFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIWludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCEoY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3NlcykgfHwgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QnV0dG9uRWxzKCkge1xuICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1kYy1kaWFsb2dfX2J1dHRvbicpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERlZmF1bHRCdXR0b25FbCgpIHtcbiAgICByZXR1cm4gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tZGMtZGlhbG9nLWJ1dHRvbi1kZWZhdWx0Jyk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb250ZW50RWwoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1kaWFsb2dfX2NvbnRlbnQnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxGb2N1c0VsKCkge1xuICAgIHJldHVybiBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1kYy1kaWFsb2ctaW5pdGlhbC1mb2N1c10nKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpYWxvZ09wZW5pbmcoKSB7XG4gICAgaWYgKGFib3ZlRnVsbHNjcmVlbikge1xuICAgICAgJGFib3ZlRnVsbHNjcmVlblNob3duID0gdHJ1ZTtcbiAgICB9XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGxheW91dExpc3RlbmVycy5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIoKSk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVEaWFsb2dPcGVuZWQoKSB7XG4gICAgbGF5b3V0TGlzdGVuZXJzLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lcigpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZURpYWxvZ0Nsb3NlZCgpIHtcbiAgICBpZiAoYWJvdmVGdWxsc2NyZWVuKSB7XG4gICAgICAkYWJvdmVGdWxsc2NyZWVuU2hvd24gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaXNPcGVuKCkge1xuICAgIHJldHVybiBvcGVuO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldE9wZW4odmFsdWUpIHtcbiAgICBvcGVuID0gdmFsdWU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgIHJldHVybiBpbnN0YW5jZS5sYXlvdXQoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxkaXZcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB7Li4uJCRyZXN0UHJvcHN9XG4+XG4gIDxzbG90IC8+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIHVzZUFjdGlvbnMgfSBmcm9tICcuL2ludGVybmFsLmpzJztcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IGNsYXNzQWRkZXJCdWlsZGVyIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbmltcG9ydCBEaXYgZnJvbSAnQHNtdWkvY29tbW9uL0Rpdi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWRpYWxvZ19faGVhZGVyJyxcbiAgY29tcG9uZW50OiBEaXYsXG4gIGNvbnRleHRzOiB7XG4gICAgJ1NNVUk6aWNvbi1idXR0b246Y29udGV4dCc6ICdkaWFsb2c6aGVhZGVyJyxcbiAgfSxcbn0pO1xuIiwiPGgyIGJpbmQ6dGhpcz17ZWxlbWVudH0gdXNlOnVzZUFjdGlvbnM9e3VzZX0gdXNlOmZvcndhcmRFdmVudHMgey4uLiQkcmVzdFByb3BzfT5cbiAgPHNsb3QgLz5cbjwvaDI+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCB1c2VBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBjbGFzc0FkZGVyQnVpbGRlciB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5pbXBvcnQgSDIgZnJvbSAnQHNtdWkvY29tbW9uL0gyLnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtZGlhbG9nX190aXRsZScsXG4gIGNvbXBvbmVudDogSDIsXG59KTtcbiIsImltcG9ydCB7IGNsYXNzQWRkZXJCdWlsZGVyIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbmltcG9ydCBEaXYgZnJvbSAnQHNtdWkvY29tbW9uL0Rpdi5zdmVsdGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzc0FkZGVyQnVpbGRlcih7XG4gIGNsYXNzOiAnbWRjLWRpYWxvZ19fY29udGVudCcsXG4gIGNvbXBvbmVudDogRGl2LFxufSk7XG4iLCJpbXBvcnQgeyBjbGFzc0FkZGVyQnVpbGRlciB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5pbXBvcnQgRGl2IGZyb20gJ0BzbXVpL2NvbW1vbi9EaXYuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1kaWFsb2dfX2FjdGlvbnMnLFxuICBjb21wb25lbnQ6IERpdixcbiAgY2xhc3NNYXA6IHtcbiAgICAnc211aS1kaWFsb2dfX2FjdGlvbnMtLXJldmVyc2VkJzogJ1NNVUk6ZGlhbG9nOmFjdGlvbnM6cmV2ZXJzZWQnLFxuICB9LFxuICBjb250ZXh0czoge1xuICAgICdTTVVJOmJ1dHRvbjpjb250ZXh0JzogJ2RpYWxvZzphY3Rpb24nLFxuICB9LFxufSk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbml0aWFsRm9jdXMobm9kZSkge1xuICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1tZGMtZGlhbG9nLWluaXRpYWwtZm9jdXMnLCAnJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBkZXN0cm95KCkge1xuICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbWRjLWRpYWxvZy1pbml0aWFsLWZvY3VzJyk7XG4gICAgfSxcbiAgfTtcbn1cbiIsIjxEaWFsb2dcbiAgYmluZDpvcGVuXG4gIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS10aXRsZVwiXG4gIGFyaWEtZGVzY3JpYmVkYnk9XCJzaW1wbGUtY29udGVudFwiXG4+XG4gIDwhLS0gVGl0bGUgY2Fubm90IGNvbnRhaW4gbGVhZGluZyB3aGl0ZXNwYWNlIGR1ZSB0byBtZGMtdHlwb2dyYXBoeS1iYXNlbGluZS10b3AoKSAtLT5cbiAgPFRpdGxlIGlkPVwic2ltcGxlLXRpdGxlXCI+RGlhbG9nIFRpdGxlPC9UaXRsZT5cbiAgPENvbnRlbnQgaWQ9XCJzaW1wbGUtY29udGVudFwiPlN1cGVyIGF3ZXNvbWUgZGlhbG9nIGJvZHkgdGV4dD88L0NvbnRlbnQ+XG4gIDxBY3Rpb25zPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IChjbGlja2VkID0gJ05vJyl9PlxuICAgICAgPExhYmVsPk5vPC9MYWJlbD5cbiAgICA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAoY2xpY2tlZCA9ICdZZXMnKX0+XG4gICAgICA8TGFiZWw+WWVzPC9MYWJlbD5cbiAgICA8L0J1dHRvbj5cbiAgPC9BY3Rpb25zPlxuPC9EaWFsb2c+XG5cbjxCdXR0b24gb246Y2xpY2s9eygpID0+IChvcGVuID0gdHJ1ZSl9PlxuICA8TGFiZWw+T3BlbiBEaWFsb2c8L0xhYmVsPlxuPC9CdXR0b24+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZH08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERpYWxvZywgeyBUaXRsZSwgQ29udGVudCwgQWN0aW9ucyB9IGZyb20gJ0BzbXVpL2RpYWxvZyc7XG4gIGltcG9ydCBCdXR0b24sIHsgTGFiZWwgfSBmcm9tICdAc211aS9idXR0b24nO1xuXG4gIGxldCBvcGVuO1xuICBsZXQgY2xpY2tlZCA9ICdOb3RoaW5nIHlldC4nO1xuPC9zY3JpcHQ+XG4iLCI8RGlhbG9nXG4gIGJpbmQ6b3BlblxuICBhcmlhLWxhYmVsbGVkYnk9XCJkZWZhdWx0LWZvY3VzLXRpdGxlXCJcbiAgYXJpYS1kZXNjcmliZWRieT1cImRlZmF1bHQtZm9jdXMtY29udGVudFwiXG4+XG4gIDxUaXRsZSBpZD1cImRlZmF1bHQtZm9jdXMtdGl0bGVcIj5BZHZpY2U8L1RpdGxlPlxuICA8Q29udGVudCBpZD1cImRlZmF1bHQtZm9jdXMtY29udGVudFwiPlxuICAgIEJ1aWxkIHNvbWV0aGluZyB0b2RheSwgZXZlbiBpZiBpdCBzdWNrcy5cbiAgPC9Db250ZW50PlxuICA8QWN0aW9ucz5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAocmVzcG9uc2UgPSAnSSB3aWxsIG1ha2UgeW91ISBEbyBpdCEnKX0+XG4gICAgICA8TGFiZWw+WW91IENhbid0IE1ha2UgTWU8L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b25cbiAgICAgIGRlZmF1bHRcbiAgICAgIHVzZT17W0luaXRpYWxGb2N1c119XG4gICAgICBvbjpjbGljaz17KCkgPT4gKHJlc3BvbnNlID0gJ0l0IHdpbGwgYmUgZ2xvcmlvdXMuJyl9XG4gICAgPlxuICAgICAgPExhYmVsPkkgV2lsbDwvTGFiZWw+XG4gICAgPC9CdXR0b24+XG4gIDwvQWN0aW9ucz5cbjwvRGlhbG9nPlxuXG48QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAob3BlbiA9IHRydWUpfT5cbiAgPExhYmVsPk9wZW4gRGlhbG9nPC9MYWJlbD5cbjwvQnV0dG9uPlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+UmVzcG9uc2U6IHtyZXNwb25zZX08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERpYWxvZywgeyBUaXRsZSwgQ29udGVudCwgQWN0aW9ucywgSW5pdGlhbEZvY3VzIH0gZnJvbSAnQHNtdWkvZGlhbG9nJztcbiAgaW1wb3J0IEJ1dHRvbiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL2J1dHRvbic7XG5cbiAgbGV0IG9wZW47XG4gIGxldCByZXNwb25zZSA9ICdOb3RoaW5nIHlldC4nO1xuPC9zY3JpcHQ+XG4iLCI8RGlhbG9nXG4gIGJpbmQ6b3BlblxuICBhcmlhLWxhYmVsbGVkYnk9XCJldmVudC10aXRsZVwiXG4gIGFyaWEtZGVzY3JpYmVkYnk9XCJldmVudC1jb250ZW50XCJcbiAgb246TURDRGlhbG9nOmNsb3NlZD17Y2xvc2VIYW5kbGVyfVxuPlxuICA8VGl0bGUgaWQ9XCJldmVudC10aXRsZVwiPlRoZSBCZXN0IERvZzwvVGl0bGU+XG4gIDxDb250ZW50IGlkPVwiZXZlbnQtY29udGVudFwiPlxuICAgIE91dCBvZiBhbGwgdGhlIGRvZ3MsIHdoaWNoIGlzIHRoZSBiZXN0IGRvZz9cbiAgPC9Db250ZW50PlxuICA8QWN0aW9ucz5cbiAgICA8QnV0dG9uIGFjdGlvbj1cIm5vbmVcIj5cbiAgICAgIDxMYWJlbD5Ob25lIG9mIFRoZW08L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b24gYWN0aW9uPVwiYWxsXCIgZGVmYXVsdD5cbiAgICAgIDxMYWJlbD5BbGwgb2YgVGhlbTwvTGFiZWw+XG4gICAgPC9CdXR0b24+XG4gIDwvQWN0aW9ucz5cbjwvRGlhbG9nPlxuXG48QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAob3BlbiA9IHRydWUpfT5cbiAgPExhYmVsPk9wZW4gRGlhbG9nPC9MYWJlbD5cbjwvQnV0dG9uPlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+UmVzcG9uc2U6IHtyZXNwb25zZX08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERpYWxvZywgeyBUaXRsZSwgQ29udGVudCwgQWN0aW9ucyB9IGZyb20gJ0BzbXVpL2RpYWxvZyc7XG4gIGltcG9ydCBCdXR0b24sIHsgTGFiZWwgfSBmcm9tICdAc211aS9idXR0b24nO1xuXG4gIGxldCBvcGVuO1xuICBsZXQgcmVzcG9uc2UgPSAnTm90aGluZyB5ZXQuJztcblxuICBmdW5jdGlvbiBjbG9zZUhhbmRsZXIoZSkge1xuICAgIHN3aXRjaCAoZS5kZXRhaWwuYWN0aW9uKSB7XG4gICAgICBjYXNlICdub25lJzpcbiAgICAgICAgcmVzcG9uc2UgPSBcIk9rLCB3ZWxsLCB5b3UncmUgd3JvbmcuXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWxsJzpcbiAgICAgICAgcmVzcG9uc2UgPSAnWW91IGFyZSBjb3JyZWN0LiBBbGwgZG9ncyBhcmUgdGhlIGJlc3QgZG9nLic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgLy8gVGhpcyBtZWFucyB0aGUgdXNlciBjbGlja2VkIHRoZSBzY3JpbSBvciBwcmVzc2VkIEVzYyB0byBjbG9zZSB0aGUgZGlhbG9nLlxuICAgICAgICAvLyBUaGUgYWN0aW9ucyB3aWxsIGJlIFwiY2xvc2VcIi5cbiAgICAgICAgcmVzcG9uc2UgPSBcIkl0J3MgYSBzaW1wbGUgcXVlc3Rpb24uIFlvdSBzaG91bGQgYmUgYWJsZSB0byBhbnN3ZXIgaXQuXCI7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iLCI8RGlhbG9nXG4gIGJpbmQ6b3BlblxuICBzY3JpbUNsaWNrQWN0aW9uPVwiXCJcbiAgZXNjYXBlS2V5QWN0aW9uPVwiXCJcbiAgYXJpYS1sYWJlbGxlZGJ5PVwibWFuZGF0b3J5LXRpdGxlXCJcbiAgYXJpYS1kZXNjcmliZWRieT1cIm1hbmRhdG9yeS1jb250ZW50XCJcbj5cbiAgPFRpdGxlIGlkPVwibWFuZGF0b3J5LXRpdGxlXCI+V2VicGFnZSBUcm9sbDwvVGl0bGU+XG4gIDxDb250ZW50IGlkPVwibWFuZGF0b3J5LWNvbnRlbnRcIj5cbiAgICBCZWZvcmUgeW91IGNvbnRpbnVlIG9uIHRoaXMgcGFnZSwgeW91IG11c3QgYW5zd2VyIG15IHJpZGRsZSBvZiBhZ2UuIFdoZW5cbiAgICBBbGljZSB3YXMgc2l4IGhlciBicm90aGVyIHdhcyB0aHJlZSwgbm93IEFsaWNlIGlzIDkwLCBob3cgb2xkIGlzIGhlP1xuICA8L0NvbnRlbnQ+XG4gIDxBY3Rpb25zPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IChyZXNwb25zZSA9ICdXcm9uZyBhbnN3ZXIuIFRocm93biBpbiB0aGUgbGFrZS4nKX0+XG4gICAgICA8TGFiZWw+RmlmdHk8L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IChyZXNwb25zZSA9ICdZb3UgYXJlIGNvcnJlY3QuIFlvdSBtYXkgcGFzcy4nKX0+XG4gICAgICA8TGFiZWw+RWlnaHR5LVNldmVuPC9MYWJlbD5cbiAgICA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAocmVzcG9uc2UgPSAnV3JvbmcgYW5zd2VyLiBUaHJvd24gaW4gdGhlIGxha2UuJyl9PlxuICAgICAgPExhYmVsPkZvcnR5LUZpdmU8L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b24gb246Y2xpY2s9eygpID0+IChyZXNwb25zZSA9ICdXcm9uZyBhbnN3ZXIuIFRocm93biBpbiB0aGUgbGFrZS4nKX0+XG4gICAgICA8TGFiZWw+U2V2ZW50eS1GaXZlPC9MYWJlbD5cbiAgICA8L0J1dHRvbj5cbiAgPC9BY3Rpb25zPlxuPC9EaWFsb2c+XG5cbjxCdXR0b24gb246Y2xpY2s9eygpID0+IChvcGVuID0gdHJ1ZSl9PlxuICA8TGFiZWw+T3BlbiBEaWFsb2c8L0xhYmVsPlxuPC9CdXR0b24+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5SZXN1bHQ6IHtyZXNwb25zZX08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERpYWxvZywgeyBUaXRsZSwgQ29udGVudCwgQWN0aW9ucywgSW5pdGlhbEZvY3VzIH0gZnJvbSAnQHNtdWkvZGlhbG9nJztcbiAgaW1wb3J0IEJ1dHRvbiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL2J1dHRvbic7XG5cbiAgbGV0IG9wZW47XG4gIGxldCByZXNwb25zZSA9ICdOb3RoaW5nIHlldC4nO1xuPC9zY3JpcHQ+XG4iLCI8RGlhbG9nXG4gIGJpbmQ6b3BlblxuICBzZWxlY3Rpb25cbiAgYXJpYS1sYWJlbGxlZGJ5PVwibGlzdC10aXRsZVwiXG4gIGFyaWEtZGVzY3JpYmVkYnk9XCJsaXN0LWNvbnRlbnRcIlxuPlxuICA8VGl0bGUgaWQ9XCJsaXN0LXRpdGxlXCI+RGlhbG9nIFRpdGxlPC9UaXRsZT5cbiAgPENvbnRlbnQgaWQ9XCJsaXN0LWNvbnRlbnRcIj5cbiAgICA8TGlzdD5cbiAgICAgIHsjZWFjaCBbLi4uQXJyYXkoMTAwKV0ubWFwKCh2LCBpKSA9PiBpICsgMSkgYXMgaXRlbX1cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBvbjpjbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgY2xpY2tlZCA9IGl0ZW07XG4gICAgICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0Pkl0ZW0gI3tpdGVtfTwvVGV4dD5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgey9lYWNofVxuICAgIDwvTGlzdD5cbiAgPC9Db250ZW50PlxuPC9EaWFsb2c+XG5cbjxCdXR0b24gb246Y2xpY2s9eygpID0+IChvcGVuID0gdHJ1ZSl9PjxMYWJlbD5PcGVuIERpYWxvZzwvTGFiZWw+PC9CdXR0b24+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZH17Y2xpY2tlZCA9PT0gNjkgPyAnLCBuaWNlJyA6ICcnfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgRGlhbG9nLCB7IFRpdGxlLCBDb250ZW50IH0gZnJvbSAnQHNtdWkvZGlhbG9nJztcbiAgaW1wb3J0IEJ1dHRvbiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL2J1dHRvbic7XG4gIGltcG9ydCBMaXN0LCB7IEl0ZW0sIFRleHQgfSBmcm9tICdAc211aS9saXN0JztcblxuICBsZXQgb3BlbjtcbiAgbGV0IGNsaWNrZWQgPSAnTm90aGluZyB5ZXQuJztcbjwvc2NyaXB0PlxuIiwiPERpYWxvZ1xuICBiaW5kOm9wZW5cbiAgc2VsZWN0aW9uXG4gIGFyaWEtbGFiZWxsZWRieT1cImxpc3Qtc2VsZWN0aW9uLXRpdGxlXCJcbiAgYXJpYS1kZXNjcmliZWRieT1cImxpc3Qtc2VsZWN0aW9uLWNvbnRlbnRcIlxuICBvbjpNRENEaWFsb2c6Y2xvc2VkPXtjbG9zZUhhbmRsZXJ9XG4+XG4gIDxUaXRsZSBpZD1cImxpc3Qtc2VsZWN0aW9uLXRpdGxlXCI+RGlhbG9nIFRpdGxlPC9UaXRsZT5cbiAgPENvbnRlbnQgaWQ9XCJsaXN0LXNlbGVjdGlvbi1jb250ZW50XCI+XG4gICAgPExpc3QgcmFkaW9MaXN0PlxuICAgICAgPEl0ZW0gdXNlPXtbSW5pdGlhbEZvY3VzXX0+XG4gICAgICAgIDxHcmFwaGljPlxuICAgICAgICAgIDxSYWRpbyBiaW5kOmdyb3VwPXtzZWxlY3Rpb259IHZhbHVlPVwiUmFkaXNoZXNcIiAvPlxuICAgICAgICA8L0dyYXBoaWM+XG4gICAgICAgIDxUZXh0PlJhZGlzaGVzPC9UZXh0PlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0+XG4gICAgICAgIDxHcmFwaGljPlxuICAgICAgICAgIDxSYWRpbyBiaW5kOmdyb3VwPXtzZWxlY3Rpb259IHZhbHVlPVwiVHVybmlwc1wiIC8+XG4gICAgICAgIDwvR3JhcGhpYz5cbiAgICAgICAgPFRleHQ+VHVybmlwczwvVGV4dD5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtPlxuICAgICAgICA8R3JhcGhpYz5cbiAgICAgICAgICA8UmFkaW8gYmluZDpncm91cD17c2VsZWN0aW9ufSB2YWx1ZT1cIkJyb2Njb2xpXCIgLz5cbiAgICAgICAgPC9HcmFwaGljPlxuICAgICAgICA8VGV4dD5Ccm9jY29saTwvVGV4dD5cbiAgICAgIDwvSXRlbT5cbiAgICA8L0xpc3Q+XG4gIDwvQ29udGVudD5cbiAgPEFjdGlvbnM+XG4gICAgPEJ1dHRvbj5cbiAgICAgIDxMYWJlbD5DYW5jZWw8L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b24gYWN0aW9uPVwiYWNjZXB0XCI+XG4gICAgICA8TGFiZWw+QWNjZXB0PC9MYWJlbD5cbiAgICA8L0J1dHRvbj5cbiAgPC9BY3Rpb25zPlxuPC9EaWFsb2c+XG5cbjxCdXR0b24gb246Y2xpY2s9eygpID0+IChvcGVuID0gdHJ1ZSl9PlxuICA8TGFiZWw+T3BlbiBEaWFsb2c8L0xhYmVsPlxuPC9CdXR0b24+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3NlbGVjdGVkfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgRGlhbG9nLCB7IFRpdGxlLCBDb250ZW50LCBBY3Rpb25zLCBJbml0aWFsRm9jdXMgfSBmcm9tICdAc211aS9kaWFsb2cnO1xuICBpbXBvcnQgQnV0dG9uLCB7IExhYmVsIH0gZnJvbSAnQHNtdWkvYnV0dG9uJztcbiAgaW1wb3J0IExpc3QsIHsgSXRlbSwgR3JhcGhpYywgVGV4dCB9IGZyb20gJ0BzbXVpL2xpc3QnO1xuICBpbXBvcnQgUmFkaW8gZnJvbSAnQHNtdWkvcmFkaW8nO1xuXG4gIGxldCBvcGVuO1xuICBsZXQgc2VsZWN0aW9uID0gJ1JhZGlzaGVzJztcbiAgbGV0IHNlbGVjdGVkID0gJ05vdGhpbmcgeWV0Lic7XG5cbiAgZnVuY3Rpb24gY2xvc2VIYW5kbGVyKGUpIHtcbiAgICBpZiAoZS5kZXRhaWwuYWN0aW9uID09PSAnYWNjZXB0Jykge1xuICAgICAgc2VsZWN0ZWQgPSBzZWxlY3Rpb247XG4gICAgfVxuICAgIHNlbGVjdGlvbiA9ICdSYWRpc2hlcyc7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPERpYWxvZ1xuICBiaW5kOm9wZW5cbiAgYXJpYS1sYWJlbGxlZGJ5PVwic2xpZGVyLXRpdGxlXCJcbiAgYXJpYS1kZXNjcmliZWRieT1cInNsaWRlci1jb250ZW50XCJcbj5cbiAgPFRpdGxlIGlkPVwic2xpZGVyLXRpdGxlXCI+Vm9sdW1lczwvVGl0bGU+XG4gIDxDb250ZW50IGlkPVwic2xpZGVyLWNvbnRlbnRcIj5cbiAgICA8ZGl2PlxuICAgICAgPEZvcm1GaWVsZCBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcIj5cbiAgICAgICAgPFNsaWRlclxuICAgICAgICAgIGJpbmQ6dmFsdWU9e3ZvbHVtZU1lZGlhfVxuICAgICAgICAgIHVzZT17W0luaXRpYWxGb2N1c119XG4gICAgICAgICAgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIlxuICAgICAgICAvPlxuICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5NZWRpYSBWb2x1bWU8L3NwYW4+XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPEZvcm1GaWVsZCBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcIj5cbiAgICAgICAgPFNsaWRlciBiaW5kOnZhbHVlPXt2b2x1bWVSaW5ndG9uZX0gc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiAvPlxuICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5SaW5ndG9uZSBWb2x1bWU8L3NwYW4+XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgPEZvcm1GaWVsZCBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcIj5cbiAgICAgICAgPFNsaWRlciBiaW5kOnZhbHVlPXt2b2x1bWVBbGFybX0gc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiAvPlxuICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5BbGFybSBWb2x1bWU8L3NwYW4+XG4gICAgICA8L0Zvcm1GaWVsZD5cbiAgICA8L2Rpdj5cbiAgPC9Db250ZW50PlxuICA8QWN0aW9ucz5cbiAgICA8QnV0dG9uIGFjdGlvbj1cImFjY2VwdFwiPlxuICAgICAgPExhYmVsPkRvbmU8L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICA8L0FjdGlvbnM+XG48L0RpYWxvZz5cblxuPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gKG9wZW4gPSB0cnVlKX0+XG4gIDxMYWJlbD5PcGVuIERpYWxvZzwvTGFiZWw+XG48L0J1dHRvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERpYWxvZywgeyBUaXRsZSwgQ29udGVudCwgQWN0aW9ucywgSW5pdGlhbEZvY3VzIH0gZnJvbSAnQHNtdWkvZGlhbG9nJztcbiAgaW1wb3J0IEJ1dHRvbiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL2J1dHRvbic7XG4gIGltcG9ydCBTbGlkZXIgZnJvbSAnQHNtdWkvc2xpZGVyJztcbiAgaW1wb3J0IEZvcm1GaWVsZCBmcm9tICdAc211aS9mb3JtLWZpZWxkJztcblxuICBsZXQgb3BlbjtcbiAgbGV0IHZvbHVtZU1lZGlhID0gMTAwO1xuICBsZXQgdm9sdW1lUmluZ3RvbmUgPSA4MDtcbiAgbGV0IHZvbHVtZUFsYXJtID0gODA7XG48L3NjcmlwdD5cbiIsIjxEaWFsb2dcbiAgYmluZDpvcGVuXG4gIGFyaWEtbGFiZWxsZWRieT1cImxhcmdlLXNjcm9sbC10aXRsZVwiXG4gIGFyaWEtZGVzY3JpYmVkYnk9XCJsYXJnZS1zY3JvbGwtY29udGVudFwiXG4gIHN1cmZhY2Ukc3R5bGU9XCJ3aWR0aDogODUwcHg7IG1heC13aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1wiXG4+XG4gIDxUaXRsZSBpZD1cImxhcmdlLXNjcm9sbC10aXRsZVwiPkEgQnJpZWYgU2VsZWN0aW9uIG9mIFBsYWNlaG9sZGVyIFRleHQ8L1RpdGxlPlxuICA8Q29udGVudCBpZD1cImxhcmdlLXNjcm9sbC1jb250ZW50XCI+XG4gICAgeyNlYWNoIEFycmF5KDEwKSBhcyBfaXRlbX1cbiAgICAgIDxMb3JlbUlwc3VtIC8+XG4gICAgey9lYWNofVxuICA8L0NvbnRlbnQ+XG4gIDxBY3Rpb25zPlxuICAgIDxCdXR0b24gYWN0aW9uPVwiYWNjZXB0XCI+XG4gICAgICA8TGFiZWw+RG9uZTwvTGFiZWw+XG4gICAgPC9CdXR0b24+XG4gIDwvQWN0aW9ucz5cbjwvRGlhbG9nPlxuXG48QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAob3BlbiA9IHRydWUpfT5cbiAgPExhYmVsPk9wZW4gRGlhbG9nPC9MYWJlbD5cbjwvQnV0dG9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgRGlhbG9nLCB7IFRpdGxlLCBDb250ZW50LCBBY3Rpb25zIH0gZnJvbSAnQHNtdWkvZGlhbG9nJztcbiAgaW1wb3J0IEJ1dHRvbiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL2J1dHRvbic7XG4gIGltcG9ydCBMb3JlbUlwc3VtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTG9yZW1JcHN1bS5zdmVsdGUnO1xuXG4gIGxldCBvcGVuO1xuPC9zY3JpcHQ+XG4iLCI8RGlhbG9nXG4gIGJpbmQ6b3BlblxuICBmdWxsc2NyZWVuXG4gIGFyaWEtbGFiZWxsZWRieT1cImZ1bGxzY3JlZW4tdGl0bGVcIlxuICBhcmlhLWRlc2NyaWJlZGJ5PVwiZnVsbHNjcmVlbi1jb250ZW50XCJcbiAgb246TURDRGlhbG9nOmNsb3NlZD17Y2xvc2VIYW5kbGVyfVxuPlxuICA8SGVhZGVyPlxuICAgIDxUaXRsZSBpZD1cImZ1bGxzY3JlZW4tdGl0bGVcIj5UZXJtcyBhbmQgQ29uZGl0aW9uczwvVGl0bGU+XG4gICAgPEljb25CdXR0b24gYWN0aW9uPVwiY2xvc2VcIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L0ljb25CdXR0b24+XG4gIDwvSGVhZGVyPlxuICA8Q29udGVudCBpZD1cImZ1bGxzY3JlZW4tY29udGVudFwiPlxuICAgIHsjZWFjaCBBcnJheSgzKSBhcyBfaXRlbX1cbiAgICAgIDxMb3JlbUlwc3VtIC8+XG4gICAgey9lYWNofVxuICA8L0NvbnRlbnQ+XG4gIDxBY3Rpb25zPlxuICAgIDxCdXR0b24gYWN0aW9uPVwicmVqZWN0XCI+XG4gICAgICA8TGFiZWw+UmVqZWN0PC9MYWJlbD5cbiAgICA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIGFjdGlvbj1cImFjY2VwdFwiIGRlZmF1bHQ+XG4gICAgICA8TGFiZWw+QWNjZXB0PC9MYWJlbD5cbiAgICA8L0J1dHRvbj5cbiAgPC9BY3Rpb25zPlxuPC9EaWFsb2c+XG5cbjxCdXR0b24gb246Y2xpY2s9eygpID0+IChvcGVuID0gdHJ1ZSl9PlxuICA8TGFiZWw+T3BlbiBEaWFsb2c8L0xhYmVsPlxuPC9CdXR0b24+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5SZXNwb25zZToge3Jlc3BvbnNlfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgRGlhbG9nLCB7IEhlYWRlciwgVGl0bGUsIENvbnRlbnQsIEFjdGlvbnMgfSBmcm9tICdAc211aS9kaWFsb2cnO1xuICBpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAc211aS9pY29uLWJ1dHRvbic7XG4gIGltcG9ydCBCdXR0b24sIHsgTGFiZWwgfSBmcm9tICdAc211aS9idXR0b24nO1xuICBpbXBvcnQgTG9yZW1JcHN1bSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xvcmVtSXBzdW0uc3ZlbHRlJztcblxuICBsZXQgb3BlbjtcbiAgbGV0IHJlc3BvbnNlID0gJ05vdGhpbmcgeWV0Lic7XG5cbiAgZnVuY3Rpb24gY2xvc2VIYW5kbGVyKGUpIHtcbiAgICBzd2l0Y2ggKGUuZGV0YWlsLmFjdGlvbikge1xuICAgICAgY2FzZSAnY2xvc2UnOlxuICAgICAgICByZXNwb25zZSA9ICdDbG9zZWQgd2l0aG91dCByZXNwb25zZS4nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlamVjdCc6XG4gICAgICAgIHJlc3BvbnNlID0gJ1JlamVjdGVkLic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYWNjZXB0JzpcbiAgICAgICAgcmVzcG9uc2UgPSAnQWNjZXB0ZWQuJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbiIsIjxEaWFsb2dcbiAgYmluZDpvcGVuXG4gIGZ1bGxzY3JlZW5cbiAgYXJpYS1sYWJlbGxlZGJ5PVwib3Zlci1mdWxsc2NyZWVuLXRpdGxlXCJcbiAgYXJpYS1kZXNjcmliZWRieT1cIm92ZXItZnVsbHNjcmVlbi1jb250ZW50XCJcbiAgb246TURDRGlhbG9nOmNsb3NlZD17Y2xvc2VIYW5kbGVyfVxuPlxuICA8SGVhZGVyPlxuICAgIDxUaXRsZSBpZD1cIm92ZXItZnVsbHNjcmVlbi10aXRsZVwiPlRlcm1zIGFuZCBDb25kaXRpb25zPC9UaXRsZT5cbiAgICA8SWNvbkJ1dHRvbiBhY3Rpb249XCJjbG9zZVwiIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvSWNvbkJ1dHRvbj5cbiAgPC9IZWFkZXI+XG4gIDxDb250ZW50IGlkPVwib3Zlci1mdWxsc2NyZWVuLWNvbnRlbnRcIj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAoc3ViT3BlbiA9IHRydWUpfT5cbiAgICAgIDxMYWJlbD5PcGVuIENvbmZpcm1hdGlvbiBEaWFsb2c8L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICAgIHsjZWFjaCBBcnJheSgzKSBhcyBfaXRlbX1cbiAgICAgIDxMb3JlbUlwc3VtIC8+XG4gICAgey9lYWNofVxuICA8L0NvbnRlbnQ+XG4gIDxBY3Rpb25zPlxuICAgIDxCdXR0b24gYWN0aW9uPVwicmVqZWN0XCI+XG4gICAgICA8TGFiZWw+UmVqZWN0PC9MYWJlbD5cbiAgICA8L0J1dHRvbj5cbiAgICA8QnV0dG9uIGFjdGlvbj1cImFjY2VwdFwiIGRlZmF1bHQ+XG4gICAgICA8TGFiZWw+QWNjZXB0PC9MYWJlbD5cbiAgICA8L0J1dHRvbj5cbiAgPC9BY3Rpb25zPlxuXG4gIDxEaWFsb2dcbiAgICBiaW5kOm9wZW49e3N1Yk9wZW59XG4gICAgc2xvdD1cIm92ZXJcIlxuICAgIHNlbGVjdGlvblxuICAgIGFyaWEtbGFiZWxsZWRieT1cIm92ZXItZnVsbHNjcmVlbi1jb25maXJtYXRpb24tdGl0bGVcIlxuICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJvdmVyLWZ1bGxzY3JlZW4tY29uZmlybWF0aW9uLWNvbnRlbnRcIlxuICAgIG9uOk1EQ0RpYWxvZzpjbG9zZWQ9e2NvbmZpcm1hdGlvbkNsb3NlSGFuZGxlcn1cbiAgPlxuICAgIDxIZWFkZXI+XG4gICAgICA8VGl0bGUgaWQ9XCJvdmVyLWZ1bGxzY3JlZW4tY29uZmlybWF0aW9uLXRpdGxlXCI+Q29uZmlybWF0aW9uPC9UaXRsZT5cbiAgICA8L0hlYWRlcj5cbiAgICA8Q29udGVudCBpZD1cIm92ZXItZnVsbHNjcmVlbi1jb25maXJtYXRpb24tY29udGVudFwiPlxuICAgICAgPExpc3QgcmFkaW9MaXN0PlxuICAgICAgICA8SXRlbSB1c2U9e1tJbml0aWFsRm9jdXNdfT5cbiAgICAgICAgICA8R3JhcGhpYz5cbiAgICAgICAgICAgIDxSYWRpbyBiaW5kOmdyb3VwPXtzZWxlY3Rpb259IHZhbHVlPVwiT25lXCIgLz5cbiAgICAgICAgICA8L0dyYXBoaWM+XG4gICAgICAgICAgPFRleHQ+Q2hvaWNlIDE8L1RleHQ+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0+XG4gICAgICAgICAgPEdyYXBoaWM+XG4gICAgICAgICAgICA8UmFkaW8gYmluZDpncm91cD17c2VsZWN0aW9ufSB2YWx1ZT1cIlR3b1wiIC8+XG4gICAgICAgICAgPC9HcmFwaGljPlxuICAgICAgICAgIDxUZXh0PkNob2ljZSAyPC9UZXh0PlxuICAgICAgICA8L0l0ZW0+XG4gICAgICA8L0xpc3Q+XG4gICAgPC9Db250ZW50PlxuICAgIDxBY3Rpb25zPlxuICAgICAgPEJ1dHRvbj5cbiAgICAgICAgPExhYmVsPkNhbmNlbDwvTGFiZWw+XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24gYWN0aW9uPVwiYWNjZXB0XCI+XG4gICAgICAgIDxMYWJlbD5BY2NlcHQ8L0xhYmVsPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9BY3Rpb25zPlxuICA8L0RpYWxvZz5cbjwvRGlhbG9nPlxuXG48QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAob3BlbiA9IHRydWUpfT5cbiAgPExhYmVsPk9wZW4gRGlhbG9nPC9MYWJlbD5cbjwvQnV0dG9uPlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+UmVzcG9uc2U6IHtyZXNwb25zZX0sIFNlbGVjdGVkOiB7c2VsZWN0ZWR9PC9wcmU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBEaWFsb2csIHtcbiAgICBIZWFkZXIsXG4gICAgVGl0bGUsXG4gICAgQ29udGVudCxcbiAgICBBY3Rpb25zLFxuICAgIEluaXRpYWxGb2N1cyxcbiAgfSBmcm9tICdAc211aS9kaWFsb2cnO1xuICBpbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAc211aS9pY29uLWJ1dHRvbic7XG4gIGltcG9ydCBCdXR0b24sIHsgTGFiZWwgfSBmcm9tICdAc211aS9idXR0b24nO1xuICBpbXBvcnQgTGlzdCwgeyBJdGVtLCBHcmFwaGljLCBUZXh0IH0gZnJvbSAnQHNtdWkvbGlzdCc7XG4gIGltcG9ydCBSYWRpbyBmcm9tICdAc211aS9yYWRpbyc7XG4gIGltcG9ydCBMb3JlbUlwc3VtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTG9yZW1JcHN1bS5zdmVsdGUnO1xuXG4gIGxldCBvcGVuO1xuICBsZXQgc3ViT3BlbjtcbiAgbGV0IHNlbGVjdGlvbiA9ICdSYWRpc2hlcyc7XG4gIGxldCBzZWxlY3RlZCA9ICdOb3RoaW5nIHlldC4nO1xuICBsZXQgcmVzcG9uc2UgPSAnTm90aGluZyB5ZXQuJztcblxuICBmdW5jdGlvbiBjb25maXJtYXRpb25DbG9zZUhhbmRsZXIoZSkge1xuICAgIGlmIChlLmRldGFpbC5hY3Rpb24gPT09ICdhY2NlcHQnKSB7XG4gICAgICBzZWxlY3RlZCA9IHNlbGVjdGlvbjtcbiAgICB9XG4gICAgc2VsZWN0aW9uID0gJ1JhZGlzaGVzJztcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlSGFuZGxlcihlKSB7XG4gICAgc3dpdGNoIChlLmRldGFpbC5hY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgICAgcmVzcG9uc2UgPSAnQ2xvc2VkIHdpdGhvdXQgcmVzcG9uc2UuJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyZWplY3QnOlxuICAgICAgICByZXNwb25zZSA9ICdSZWplY3RlZC4nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2FjY2VwdCc6XG4gICAgICAgIHJlc3BvbnNlID0gJ0FjY2VwdGVkLic7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG4iLCI8RGlhbG9nXG4gIGJpbmQ6b3BlblxuICBhcmlhLWxhYmVsbGVkYnk9XCJidXR0b25zLXRpdGxlXCJcbiAgYXJpYS1kZXNjcmliZWRieT1cImJ1dHRvbnMtY29udGVudFwiXG4gIGF1dG9TdGFja0J1dHRvbnM9e2ZhbHNlfVxuICBvbjpNRENEaWFsb2c6Y2xvc2VkPXsoZSkgPT4gKGJ1dHRvbmVkID0gZS5kZXRhaWwuYWN0aW9uKX1cbj5cbiAgPFRpdGxlIGlkPVwiYnV0dG9ucy10aXRsZVwiPlVzZSBzcGVlZCBib3N0PzwvVGl0bGU+XG4gIDxDb250ZW50IGlkPVwiYnV0dG9ucy1jb250ZW50XCI+XG4gICAgU3BlZWQgYm9vc3Qgb3BlbnMgdGhlIGV4dHJhIGhvbGVzIGluIHlvdXIgZGV2aWNlIHRvIGluY3JlYXNlIGFlcm9keW5hbWljcy5cbiAgICBUaGlzIGFsbG93cyB5b3VyIGRldmljZSB0byByZWFjaCBoaWdoZXIgbWF4aW11bSBzcGVlZCwgaW5jcmVhc2luZyB5b3VyXG4gICAgcHJvZHVjdGl2aXR5LlxuICA8L0NvbnRlbnQ+XG4gIDxBY3Rpb25zPlxuICAgIDxCdXR0b24gYWN0aW9uPVwibm9cIj5cbiAgICAgIDxMYWJlbD5ObyBUaGFua3M8L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b24gYWN0aW9uPVwibGF0ZXJcIj5cbiAgICAgIDxMYWJlbD5SZW1pbmQgTWUgTGF0ZXI8L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICAgIDxCdXR0b24gYWN0aW9uPVwic3BlZWQtYm9zdFwiPlxuICAgICAgPExhYmVsPlR1cm4gb24gU3BlZWQgQm9vc3Q8L0xhYmVsPlxuICAgIDwvQnV0dG9uPlxuICA8L0FjdGlvbnM+XG48L0RpYWxvZz5cblxuPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gKG9wZW4gPSB0cnVlKX0+XG4gIDxMYWJlbD5PcGVuIERpYWxvZzwvTGFiZWw+XG48L0J1dHRvbj5cblxuPHByZSBjbGFzcz1cInN0YXR1c1wiPkFjdGlvbjoge2J1dHRvbmVkfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgRGlhbG9nLCB7IFRpdGxlLCBDb250ZW50LCBBY3Rpb25zIH0gZnJvbSAnQHNtdWkvZGlhbG9nJztcbiAgaW1wb3J0IEJ1dHRvbiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL2J1dHRvbic7XG5cbiAgbGV0IG9wZW47XG4gIGxldCBidXR0b25lZCA9ICdOb3RoaW5nIHlldC4nO1xuPC9zY3JpcHQ+XG4iLCI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5EaWFsb2dzIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPkRpYWxvZ3M8L2gyPlxuXG4gIDxwcmUgY2xhc3M9XCJkZW1vLXNwYWNlZFwiPm5wbSBpIC1EIEBzbXVpL2RpYWxvZzwvcHJlPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U2ltcGxlfSBmaWxlPVwiZGlhbG9nL19TaW1wbGUuc3ZlbHRlXCIgLz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0RlZmF1bHRGb2N1c30gZmlsZT1cImRpYWxvZy9fRGVmYXVsdEZvY3VzLnN2ZWx0ZVwiPlxuICAgIERlZmF1bHQsIGluaXRpYWxseSBmb2N1c2VkIGJ1dHRvblxuICA8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtFdmVudH0gZmlsZT1cImRpYWxvZy9fRXZlbnQuc3ZlbHRlXCI+XG4gICAgVXNpbmcgZGlhbG9nIGV2ZW50cyBpbnN0ZWFkIG9mIGJ1dHRvbiBjbGlja3NcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17TWFuZGF0b3J5fSBmaWxlPVwiZGlhbG9nL19NYW5kYXRvcnkuc3ZlbHRlXCI+XG4gICAgTWFuZGF0b3J5IGRpYWxvZyAod29uJ3QgY2xvc2Ugb24gc2NyaW0gY2xpY2sgb3IgRXNjIGtleSlcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17TGlzdH0gZmlsZT1cImRpYWxvZy9fTGlzdC5zdmVsdGVcIj5cbiAgICBObyBhY3Rpb25zLCBhbmQgYSB2ZXJ5IGxvbmcgc2VsZWN0aW9uIGxpc3QgZGlhbG9nXG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e1NlbGVjdGlvbn0gZmlsZT1cImRpYWxvZy9fU2VsZWN0aW9uLnN2ZWx0ZVwiPlxuICAgIFNlbGVjdGlvbiBkaWFsb2dcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U2xpZGVyc30gZmlsZT1cImRpYWxvZy9fU2xpZGVycy5zdmVsdGVcIj5cbiAgICBEaWFsb2cgd2l0aCBzbGlkZXJzXG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0xhcmdlU2Nyb2xsfSBmaWxlPVwiZGlhbG9nL19MYXJnZVNjcm9sbC5zdmVsdGVcIj5cbiAgICBMYXJnZSwgc2Nyb2xsYWJsZSBkaWFsb2dcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17RnVsbHNjcmVlbn0gZmlsZT1cImRpYWxvZy9fRnVsbHNjcmVlbi5zdmVsdGVcIj5cbiAgICBGdWxsc2NyZWVuIGRpYWxvZ1xuICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cInN1YnRpdGxlXCI+XG4gICAgICBOb3RlIHRoYXQgZGlhbG9ncyB3aWxsIG9ubHkgYmUgZnVsbHNjcmVlbiBvbiBtb2JpbGUgc2l6ZWQgc2NyZWVucy4gT25cbiAgICAgIGRlc2t0b3Agc2l6ZWQgc2NyZWVucywgaXQgd2lsbCBiZSBzaG93biBhcyBhIG1vZGFsIGRpYWxvZy5cbiAgICA8L3N2ZWx0ZTpmcmFnbWVudD5cbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17T3ZlckZ1bGxzY3JlZW59IGZpbGU9XCJkaWFsb2cvX092ZXJGdWxsc2NyZWVuLnN2ZWx0ZVwiPlxuICAgIERpYWxvZyBvdmVyIGZ1bGxzY3JlZW4gZGlhbG9nXG4gICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwic3VidGl0bGVcIj5cbiAgICAgIE5vdGUgdGhhdCB0aGUgTWF0ZXJpYWwgU3BlYyBzdGF0ZXMgdGhhdCB0aGUgb25seSB0aW1lIGEgZGlhbG9nIHNob3VsZCBiZVxuICAgICAgcGxhY2VkIG9uIHRvcCBvZiBhbm90aGVyIGRpYWxvZyBpcyBhIGNvbmZpcm1hdGlvbiBkaWFsb2cgc2hvd2luZyBvbiB0b3Agb2ZcbiAgICAgIGEgZnVsbHNjcmVlbiBkaWFsb2cuXG4gICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e01hbnlBY3Rpb25zfSBmaWxlPVwiZGlhbG9nL19NYW55QWN0aW9ucy5zdmVsdGVcIj5cbiAgICBUb28gbWFueSBhY3Rpb24gYnV0dG9ucyBmb3Igb25lIGxpbmVcbiAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJzdWJ0aXRsZVwiPlxuICAgICAgQWN0aW9ucyBidXR0b25zIHdpbGwgc3RhY2sgYXV0b21hdGljYWxseSBpZiB0aGUgZGlhbG9nIGlzIHRvbyBuYXJyb3cuIElmXG4gICAgICB5b3Ugd2FudCB0aGVtIHRvIHN0YWNrIHJlZ2FyZGxlc3MsIHlvdSBjYW4gZm9yY2UgaXQuXG4gICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gIDwvRGVtbz5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZW1vLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaW1wbGUgZnJvbSAnLi9fU2ltcGxlLnN2ZWx0ZSc7XG4gIGltcG9ydCBEZWZhdWx0Rm9jdXMgZnJvbSAnLi9fRGVmYXVsdEZvY3VzLnN2ZWx0ZSc7XG4gIGltcG9ydCBFdmVudCBmcm9tICcuL19FdmVudC5zdmVsdGUnO1xuICBpbXBvcnQgTWFuZGF0b3J5IGZyb20gJy4vX01hbmRhdG9yeS5zdmVsdGUnO1xuICBpbXBvcnQgTGlzdCBmcm9tICcuL19MaXN0LnN2ZWx0ZSc7XG4gIGltcG9ydCBTZWxlY3Rpb24gZnJvbSAnLi9fU2VsZWN0aW9uLnN2ZWx0ZSc7XG4gIGltcG9ydCBTbGlkZXJzIGZyb20gJy4vX1NsaWRlcnMuc3ZlbHRlJztcbiAgaW1wb3J0IExhcmdlU2Nyb2xsIGZyb20gJy4vX0xhcmdlU2Nyb2xsLnN2ZWx0ZSc7XG4gIGltcG9ydCBGdWxsc2NyZWVuIGZyb20gJy4vX0Z1bGxzY3JlZW4uc3ZlbHRlJztcbiAgaW1wb3J0IE92ZXJGdWxsc2NyZWVuIGZyb20gJy4vX092ZXJGdWxsc2NyZWVuLnN2ZWx0ZSc7XG4gIGltcG9ydCBNYW55QWN0aW9ucyBmcm9tICcuL19NYW55QWN0aW9ucy5zdmVsdGUnO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsidXRpbC5hcmVUb3BzTWlzYWxpZ25lZCIsInV0aWwuaXNTY3JvbGxhYmxlIiwidXRpbC5pc1Njcm9sbEF0VG9wIiwidXRpbC5pc1Njcm9sbEF0Qm90dG9tIiwiRXZlbnQiLCJMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lEQUxQLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXVDSixHQUFROzs7Ozs7Ozs7OzsyQ0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUVBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBUWpDLElBQUk7S0FDSixTQUFTLEdBQUcsVUFBVTtLQUN0QixRQUFRLEdBQUcsY0FBYzs7VUFFcEIsWUFBWSxDQUFDLENBQUM7TUFDakIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssUUFBUTttQkFDOUIsUUFBUSxHQUFHLFNBQVM7OztrQkFFdEIsU0FBUyxHQUFHLFVBQVU7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBb0JKLElBQUk7Ozs7Ozs7Ozs7Ozs2Q0FUZSxJQUFJLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNQekIsS0FBSyxDQUFDLENBQUM7Ozs7Z0NBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lEQVBhLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXlCSixHQUFROzs7Ozs7Ozs7OzsyQ0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUVBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBUWpDLElBQUk7S0FDSixRQUFRLEdBQUcsY0FBYzs7VUFFcEIsWUFBWSxDQUFDLENBQUM7VUFDYixDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU07UUFDaEIsT0FBTztvQkFDVixRQUFRLEdBQUcsMEJBQTBCOztRQUVsQyxRQUFRO29CQUNYLFFBQVEsR0FBRyxXQUFXOztRQUVuQixRQUFRO29CQUNYLFFBQVEsR0FBRyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OzZDQXhCTCxJQUFJLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNYekIsS0FBSyxDQUFDLENBQUM7Ozs7Z0NBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBNEJxQixHQUFTO29DQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBQVQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBTVQsR0FBUztvQ0FBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBUnBCLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQVpqQixHQUFPO2tDQUFQLEdBQU87Ozs7OzZEQUtHLEdBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUxsQyxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQ2pCakIsTUFBTTs7Ozs7Ozs7ZUFFTixZQUFZOzs7Ozs7Ozs7O2VBSVpDLE9BQUs7Ozs7Ozs7Ozs7ZUFJTCxTQUFTOzs7Ozs7Ozs7O2VBSVRDLE1BQUk7Ozs7Ozs7Ozs7ZUFJSixTQUFTOzs7Ozs7Ozs7O2VBSVQsT0FBTzs7Ozs7Ozs7OztlQUlQLFdBQVc7Ozs7Ozs7Ozs7ZUFJWCxVQUFVOzs7Ozs7Ozs7Ozs7O2VBUVYsY0FBYzs7Ozs7Ozs7Ozs7OztlQVNkLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
