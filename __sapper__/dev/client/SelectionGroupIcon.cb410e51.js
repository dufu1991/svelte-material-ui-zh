import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, W as compute_rest_props, v as validate_slots, X as getContext, Y as get_current_component, Z as setContext, _ as onDestroy, $ as assign, a0 as exclude_internal_props, q as create_component, a1 as empty, A as claim_component, H as mount_component, F as insert_dev, a2 as get_spread_update, a3 as get_spread_object, a4 as group_outros, K as transition_out, M as destroy_component, a5 as check_outros, J as transition_in, u as detach_dev, a6 as binding_callbacks, a7 as create_slot, a8 as update_slot, ah as onMount, o as space, p as element, w as claim_space, x as claim_element, y as children, a9 as set_attributes, D as add_location, ax as listen_dev, aa as action_destroyer, ab as is_function, ac as run_all, aF as globals, ak as bind, al as add_flush_callback } from './client.ec94238b.js';

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
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    IS_OPEN_BELOW: 'mdc-menu-surface--is-open-below',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface',
};
// tslint:disable:object-literal-sort-keys
var strings$1 = {
    CLOSED_EVENT: 'MDCMenuSurface:closed',
    CLOSING_EVENT: 'MDCMenuSurface:closing',
    OPENED_EVENT: 'MDCMenuSurface:opened',
    FOCUSABLE_ELEMENTS: [
        'button:not(:disabled)',
        '[href]:not([aria-disabled="true"])',
        'input:not(:disabled)',
        'select:not(:disabled)',
        'textarea:not(:disabled)',
        '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])',
    ].join(', '),
};
// tslint:enable:object-literal-sort-keys
var numbers$1 = {
    /** Total duration of menu-surface open animation. */
    TRANSITION_OPEN_DURATION: 120,
    /** Total duration of menu-surface close animation. */
    TRANSITION_CLOSE_DURATION: 75,
    /** Margin left to the edge of the viewport when menu-surface is at maximum possible height. Also used as a viewport margin. */
    MARGIN_TO_EDGE: 32,
    /** Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning. */
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
};
/**
 * Enum for bits in the {@see Corner) bitmap.
 */
var CornerBit;
(function (CornerBit) {
    CornerBit[CornerBit["BOTTOM"] = 1] = "BOTTOM";
    CornerBit[CornerBit["CENTER"] = 2] = "CENTER";
    CornerBit[CornerBit["RIGHT"] = 4] = "RIGHT";
    CornerBit[CornerBit["FLIP_RTL"] = 8] = "FLIP_RTL";
})(CornerBit || (CornerBit = {}));
/**
 * Enum for representing an element corner for positioning the menu-surface.
 *
 * The START constants map to LEFT if element directionality is left
 * to right and RIGHT if the directionality is right to left.
 * Likewise END maps to RIGHT or LEFT depending on the directionality.
 */
var Corner;
(function (Corner) {
    Corner[Corner["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner[Corner["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner[Corner["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner[Corner["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner[Corner["TOP_START"] = 8] = "TOP_START";
    Corner[Corner["TOP_END"] = 12] = "TOP_END";
    Corner[Corner["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner[Corner["BOTTOM_END"] = 13] = "BOTTOM_END";
})(Corner || (Corner = {}));

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

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var _a, _b;
var cssClasses$1 = {
    LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated',
    LIST_ITEM_CLASS: 'mdc-list-item',
    LIST_ITEM_DISABLED_CLASS: 'mdc-list-item--disabled',
    LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
    LIST_ITEM_TEXT_CLASS: 'mdc-list-item__text',
    LIST_ITEM_PRIMARY_TEXT_CLASS: 'mdc-list-item__primary-text',
    ROOT: 'mdc-list',
};
(_a = {},
    _a["" + cssClasses$1.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-list-item--activated',
    _a["" + cssClasses$1.LIST_ITEM_CLASS] = 'mdc-list-item',
    _a["" + cssClasses$1.LIST_ITEM_DISABLED_CLASS] = 'mdc-list-item--disabled',
    _a["" + cssClasses$1.LIST_ITEM_SELECTED_CLASS] = 'mdc-list-item--selected',
    _a["" + cssClasses$1.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-list-item__primary-text',
    _a["" + cssClasses$1.ROOT] = 'mdc-list',
    _a);
var deprecatedClassNameMap = (_b = {},
    _b["" + cssClasses$1.LIST_ITEM_ACTIVATED_CLASS] = 'mdc-deprecated-list-item--activated',
    _b["" + cssClasses$1.LIST_ITEM_CLASS] = 'mdc-deprecated-list-item',
    _b["" + cssClasses$1.LIST_ITEM_DISABLED_CLASS] = 'mdc-deprecated-list-item--disabled',
    _b["" + cssClasses$1.LIST_ITEM_SELECTED_CLASS] = 'mdc-deprecated-list-item--selected',
    _b["" + cssClasses$1.LIST_ITEM_TEXT_CLASS] = 'mdc-deprecated-list-item__text',
    _b["" + cssClasses$1.LIST_ITEM_PRIMARY_TEXT_CLASS] = 'mdc-deprecated-list-item__primary-text',
    _b["" + cssClasses$1.ROOT] = 'mdc-deprecated-list',
    _b);
({
    ACTION_EVENT: 'MDCList:action',
    ARIA_CHECKED: 'aria-checked',
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: 'aria-current',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_ORIENTATION: 'aria-orientation',
    ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: 'aria-selected',
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: '.mdc-deprecated-list',
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses$1.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " a,\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"radio\"]:not(:disabled),\n    ." + cssClasses$1.LIST_ITEM_CLASS + " input[type=\"checkbox\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " input[type=\"radio\"]:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses$1.LIST_ITEM_CLASS] + " input[type=\"checkbox\"]:not(:disabled)\n  ",
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
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
var MDCMenuSurfaceFoundation = /** @class */ (function (_super) {
    __extends(MDCMenuSurfaceFoundation, _super);
    function MDCMenuSurfaceFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation.defaultAdapter), adapter)) || this;
        _this.isSurfaceOpen = false;
        _this.isQuickOpen = false;
        _this.isHoistedElement = false;
        _this.isFixedPosition = false;
        _this.isHorizontallyCenteredOnViewport = false;
        _this.maxHeight = 0;
        _this.openAnimationEndTimerId = 0;
        _this.closeAnimationEndTimerId = 0;
        _this.animationRequestId = 0;
        _this.anchorCorner = Corner.TOP_START;
        /**
         * Corner of the menu surface to which menu surface is attached to anchor.
         *
         *  Anchor corner --->+----------+
         *                    |  ANCHOR  |
         *                    +----------+
         *  Origin corner --->+--------------+
         *                    |              |
         *                    |              |
         *                    | MENU SURFACE |
         *                    |              |
         *                    |              |
         *                    +--------------+
         */
        _this.originCorner = Corner.TOP_START;
        _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
        _this.position = { x: 0, y: 0 };
        return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
        get: function () {
            return numbers$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "Corner", {
        get: function () {
            return Corner;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuSurfaceAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                hasAnchor: function () { return false; },
                isElementInContainer: function () { return false; },
                isFocused: function () { return false; },
                isRtl: function () { return false; },
                getInnerDimensions: function () { return ({ height: 0, width: 0 }); },
                getAnchorDimensions: function () { return null; },
                getWindowDimensions: function () { return ({ height: 0, width: 0 }); },
                getBodyDimensions: function () { return ({ height: 0, width: 0 }); },
                getWindowScroll: function () { return ({ x: 0, y: 0 }); },
                setPosition: function () { return undefined; },
                setMaxHeight: function () { return undefined; },
                setTransformOrigin: function () { return undefined; },
                saveFocus: function () { return undefined; },
                restoreFocus: function () { return undefined; },
                notifyClose: function () { return undefined; },
                notifyOpen: function () { return undefined; },
                notifyClosing: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCMenuSurfaceFoundation.prototype.init = function () {
        var _a = MDCMenuSurfaceFoundation.cssClasses, ROOT = _a.ROOT, OPEN = _a.OPEN;
        if (!this.adapter.hasClass(ROOT)) {
            throw new Error(ROOT + " class required in root element.");
        }
        if (this.adapter.hasClass(OPEN)) {
            this.isSurfaceOpen = true;
        }
    };
    MDCMenuSurfaceFoundation.prototype.destroy = function () {
        clearTimeout(this.openAnimationEndTimerId);
        clearTimeout(this.closeAnimationEndTimerId);
        // Cancel any currently running animations.
        cancelAnimationFrame(this.animationRequestId);
    };
    /**
     * @param corner Default anchor corner alignment of top-left menu surface corner.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorCorner = function (corner) {
        this.anchorCorner = corner;
    };
    /**
     * Flip menu corner horizontally.
     */
    MDCMenuSurfaceFoundation.prototype.flipCornerHorizontally = function () {
        this.originCorner = this.originCorner ^ CornerBit.RIGHT;
    };
    /**
     * @param margin Set of margin values from anchor.
     */
    MDCMenuSurfaceFoundation.prototype.setAnchorMargin = function (margin) {
        this.anchorMargin.top = margin.top || 0;
        this.anchorMargin.right = margin.right || 0;
        this.anchorMargin.bottom = margin.bottom || 0;
        this.anchorMargin.left = margin.left || 0;
    };
    /** Used to indicate if the menu-surface is hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.setIsHoisted = function (isHoisted) {
        this.isHoistedElement = isHoisted;
    };
    /** Used to set the menu-surface calculations based on a fixed position menu. */
    MDCMenuSurfaceFoundation.prototype.setFixedPosition = function (isFixedPosition) {
        this.isFixedPosition = isFixedPosition;
    };
    /** Sets the menu-surface position on the page. */
    MDCMenuSurfaceFoundation.prototype.setAbsolutePosition = function (x, y) {
        this.position.x = this.isFinite(x) ? x : 0;
        this.position.y = this.isFinite(y) ? y : 0;
    };
    /** Sets whether menu-surface should be horizontally centered to viewport. */
    MDCMenuSurfaceFoundation.prototype.setIsHorizontallyCenteredOnViewport = function (isCentered) {
        this.isHorizontallyCenteredOnViewport = isCentered;
    };
    MDCMenuSurfaceFoundation.prototype.setQuickOpen = function (quickOpen) {
        this.isQuickOpen = quickOpen;
    };
    /**
     * Sets maximum menu-surface height on open.
     * @param maxHeight The desired max-height. Set to 0 (default) to
     *     automatically calculate max height based on available viewport space.
     */
    MDCMenuSurfaceFoundation.prototype.setMaxHeight = function (maxHeight) {
        this.maxHeight = maxHeight;
    };
    MDCMenuSurfaceFoundation.prototype.isOpen = function () {
        return this.isSurfaceOpen;
    };
    /**
     * Open the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.open = function () {
        var _this = this;
        if (this.isSurfaceOpen) {
            return;
        }
        this.adapter.saveFocus();
        if (this.isQuickOpen) {
            this.isSurfaceOpen = true;
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.dimensions = this.adapter.getInnerDimensions();
            this.autoposition();
            this.adapter.notifyOpen();
        }
        else {
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
            this.animationRequestId = requestAnimationFrame(function () {
                _this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
                _this.dimensions = _this.adapter.getInnerDimensions();
                _this.autoposition();
                _this.openAnimationEndTimerId = setTimeout(function () {
                    _this.openAnimationEndTimerId = 0;
                    _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                    _this.adapter.notifyOpen();
                }, numbers$1.TRANSITION_OPEN_DURATION);
            });
            this.isSurfaceOpen = true;
        }
    };
    /**
     * Closes the menu surface.
     */
    MDCMenuSurfaceFoundation.prototype.close = function (skipRestoreFocus) {
        var _this = this;
        if (skipRestoreFocus === void 0) { skipRestoreFocus = false; }
        if (!this.isSurfaceOpen) {
            return;
        }
        this.adapter.notifyClosing();
        if (this.isQuickOpen) {
            this.isSurfaceOpen = false;
            if (!skipRestoreFocus) {
                this.maybeRestoreFocus();
            }
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
            this.adapter.notifyClose();
            return;
        }
        this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
        requestAnimationFrame(function () {
            _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
            _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
            _this.closeAnimationEndTimerId = setTimeout(function () {
                _this.closeAnimationEndTimerId = 0;
                _this.adapter.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                _this.adapter.notifyClose();
            }, numbers$1.TRANSITION_CLOSE_DURATION);
        });
        this.isSurfaceOpen = false;
        if (!skipRestoreFocus) {
            this.maybeRestoreFocus();
        }
    };
    /** Handle clicks and close if not within menu-surface element. */
    MDCMenuSurfaceFoundation.prototype.handleBodyClick = function (evt) {
        var el = evt.target;
        if (this.adapter.isElementInContainer(el)) {
            return;
        }
        this.close();
    };
    /** Handle keys that close the surface. */
    MDCMenuSurfaceFoundation.prototype.handleKeydown = function (evt) {
        var keyCode = evt.keyCode, key = evt.key;
        var isEscape = key === 'Escape' || keyCode === 27;
        if (isEscape) {
            this.close();
        }
    };
    MDCMenuSurfaceFoundation.prototype.autoposition = function () {
        var _a;
        // Compute measurements for autoposition methods reuse.
        this.measurements = this.getAutoLayoutmeasurements();
        var corner = this.getoriginCorner();
        var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
        var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? 'bottom' : 'top';
        var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? 'right' : 'left';
        var horizontalOffset = this.getHorizontalOriginOffset(corner);
        var verticalOffset = this.getVerticalOriginOffset(corner);
        var _b = this.measurements, anchorSize = _b.anchorSize, surfaceSize = _b.surfaceSize;
        var position = (_a = {},
            _a[horizontalAlignment] = horizontalOffset,
            _a[verticalAlignment] = verticalOffset,
            _a);
        // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.
        if (anchorSize.width / surfaceSize.width > numbers$1.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
            horizontalAlignment = 'center';
        }
        // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element
        if (this.isHoistedElement || this.isFixedPosition) {
            this.adjustPositionForHoistedElement(position);
        }
        this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
        this.adapter.setPosition(position);
        this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');
        // If it is opened from the top then add is-open-below class
        if (!this.hasBit(corner, CornerBit.BOTTOM)) {
            this.adapter.addClass(MDCMenuSurfaceFoundation.cssClasses.IS_OPEN_BELOW);
        }
    };
    /**
     * @return Measurements used to position menu surface popup.
     */
    MDCMenuSurfaceFoundation.prototype.getAutoLayoutmeasurements = function () {
        var anchorRect = this.adapter.getAnchorDimensions();
        var bodySize = this.adapter.getBodyDimensions();
        var viewportSize = this.adapter.getWindowDimensions();
        var windowScroll = this.adapter.getWindowScroll();
        if (!anchorRect) {
            // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
            anchorRect = {
                top: this.position.y,
                right: this.position.x,
                bottom: this.position.y,
                left: this.position.x,
                width: 0,
                height: 0,
            };
            // tslint:enable:object-literal-sort-keys
        }
        return {
            anchorSize: anchorRect,
            bodySize: bodySize,
            surfaceSize: this.dimensions,
            viewportDistance: {
                // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
                top: anchorRect.top,
                right: viewportSize.width - anchorRect.right,
                bottom: viewportSize.height - anchorRect.bottom,
                left: anchorRect.left,
                // tslint:enable:object-literal-sort-keys
            },
            viewportSize: viewportSize,
            windowScroll: windowScroll,
        };
    };
    /**
     * Computes the corner of the anchor from which to animate and position the
     * menu surface.
     *
     * Only LEFT or RIGHT bit is used to position the menu surface ignoring RTL
     * context. E.g., menu surface will be positioned from right side on TOP_END.
     */
    MDCMenuSurfaceFoundation.prototype.getoriginCorner = function () {
        var corner = this.originCorner;
        var _a = this.measurements, viewportDistance = _a.viewportDistance, anchorSize = _a.anchorSize, surfaceSize = _a.surfaceSize;
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        var availableTop;
        var availableBottom;
        if (isAnchoredToBottom) {
            availableTop =
                viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
            availableBottom =
                viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
        }
        else {
            availableTop =
                viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
            availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE +
                anchorSize.height - this.anchorMargin.top;
        }
        var isAvailableBottom = availableBottom - surfaceSize.height > 0;
        if (!isAvailableBottom && availableTop > availableBottom) {
            // Attach bottom side of surface to the anchor.
            corner = this.setBit(corner, CornerBit.BOTTOM);
        }
        var isRtl = this.adapter.isRtl();
        var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
        var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) ||
            this.hasBit(corner, CornerBit.RIGHT);
        // Whether surface attached to right side of anchor element.
        var isAnchoredToRight = false;
        // Anchored to start
        if (isRtl && isFlipRtl) {
            isAnchoredToRight = !hasRightBit;
        }
        else {
            // Anchored to right
            isAnchoredToRight = hasRightBit;
        }
        var availableLeft;
        var availableRight;
        if (isAnchoredToRight) {
            availableLeft =
                viewportDistance.left + anchorSize.width + this.anchorMargin.right;
            availableRight = viewportDistance.right - this.anchorMargin.right;
        }
        else {
            availableLeft = viewportDistance.left + this.anchorMargin.left;
            availableRight =
                viewportDistance.right + anchorSize.width - this.anchorMargin.left;
        }
        var isAvailableLeft = availableLeft - surfaceSize.width > 0;
        var isAvailableRight = availableRight - surfaceSize.width > 0;
        var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) &&
            this.hasBit(corner, CornerBit.RIGHT);
        if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl ||
            !isAvailableLeft && isOriginCornerAlignedToEnd) {
            // Attach left side of surface to the anchor.
            corner = this.unsetBit(corner, CornerBit.RIGHT);
        }
        else if (isAvailableLeft && isAnchoredToRight && isRtl ||
            (isAvailableLeft && !isAnchoredToRight && hasRightBit) ||
            (!isAvailableRight && availableLeft >= availableRight)) {
            // Attach right side of surface to the anchor.
            corner = this.setBit(corner, CornerBit.RIGHT);
        }
        return corner;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Maximum height of the menu surface, based on available space. 0 indicates should not be set.
     */
    MDCMenuSurfaceFoundation.prototype.getMenuSurfaceMaxHeight = function (corner) {
        if (this.maxHeight > 0) {
            return this.maxHeight;
        }
        var viewportDistance = this.measurements.viewportDistance;
        var maxHeight = 0;
        var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
        var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;
        // When maximum height is not specified, it is handled from CSS.
        if (isBottomAligned) {
            maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
            if (!isBottomAnchored) {
                maxHeight += this.measurements.anchorSize.height;
            }
        }
        else {
            maxHeight = viewportDistance.bottom - this.anchorMargin.bottom +
                this.measurements.anchorSize.height - MARGIN_TO_EDGE;
            if (isBottomAnchored) {
                maxHeight -= this.measurements.anchorSize.height;
            }
        }
        return maxHeight;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Horizontal offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getHorizontalOriginOffset = function (corner) {
        var anchorSize = this.measurements.anchorSize;
        // isRightAligned corresponds to using the 'right' property on the surface.
        var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
        var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
        if (isRightAligned) {
            var rightOffset = avoidHorizontalOverlap ?
                anchorSize.width - this.anchorMargin.left :
                this.anchorMargin.right;
            // For hoisted or fixed elements, adjust the offset by the difference
            // between viewport width and body width so when we calculate the right
            // value (`adjustPositionForHoistedElement`) based on the element
            // position, the right property is correct.
            if (this.isHoistedElement || this.isFixedPosition) {
                return rightOffset -
                    (this.measurements.viewportSize.width -
                        this.measurements.bodySize.width);
            }
            return rightOffset;
        }
        return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right :
            this.anchorMargin.left;
    };
    /**
     * @param corner Origin corner of the menu surface.
     * @return Vertical offset of menu surface origin corner from corresponding anchor corner.
     */
    MDCMenuSurfaceFoundation.prototype.getVerticalOriginOffset = function (corner) {
        var anchorSize = this.measurements.anchorSize;
        var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
        var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
        var y = 0;
        if (isBottomAligned) {
            y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top :
                -this.anchorMargin.bottom;
        }
        else {
            y = avoidVerticalOverlap ?
                (anchorSize.height + this.anchorMargin.bottom) :
                this.anchorMargin.top;
        }
        return y;
    };
    /** Calculates the offsets for positioning the menu-surface when the menu-surface has been hoisted to the body. */
    MDCMenuSurfaceFoundation.prototype.adjustPositionForHoistedElement = function (position) {
        var e_1, _a;
        var _b = this.measurements, windowScroll = _b.windowScroll, viewportDistance = _b.viewportDistance, surfaceSize = _b.surfaceSize, viewportSize = _b.viewportSize;
        var props = Object.keys(position);
        try {
            for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                var prop = props_1_1.value;
                var value = position[prop] || 0;
                if (this.isHorizontallyCenteredOnViewport &&
                    (prop === 'left' || prop === 'right')) {
                    position[prop] = (viewportSize.width - surfaceSize.width) / 2;
                    continue;
                }
                // Hoisted surfaces need to have the anchor elements location on the page added to the
                // position properties for proper alignment on the body.
                value += viewportDistance[prop];
                // Surfaces that are absolutely positioned need to have additional calculations for scroll
                // and bottom positioning.
                if (!this.isFixedPosition) {
                    if (prop === 'top') {
                        value += windowScroll.y;
                    }
                    else if (prop === 'bottom') {
                        value -= windowScroll.y;
                    }
                    else if (prop === 'left') {
                        value += windowScroll.x;
                    }
                    else { // prop === 'right'
                        value -= windowScroll.x;
                    }
                }
                position[prop] = value;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (props_1_1 && !props_1_1.done && (_a = props_1.return)) _a.call(props_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * The last focused element when the menu surface was opened should regain focus, if the user is
     * focused on or within the menu surface when it is closed.
     */
    MDCMenuSurfaceFoundation.prototype.maybeRestoreFocus = function () {
        var isRootFocused = this.adapter.isFocused();
        var childHasFocus = document.activeElement &&
            this.adapter.isElementInContainer(document.activeElement);
        if (isRootFocused || childHasFocus) {
            this.adapter.restoreFocus();
        }
    };
    MDCMenuSurfaceFoundation.prototype.hasBit = function (corner, bit) {
        return Boolean(corner & bit); // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.setBit = function (corner, bit) {
        return corner | bit; // tslint:disable-line:no-bitwise
    };
    MDCMenuSurfaceFoundation.prototype.unsetBit = function (corner, bit) {
        return corner ^ bit;
    };
    /**
     * isFinite that doesn't force conversion to number type.
     * Equivalent to Number.isFinite in ES2015, which is not supported in IE.
     */
    MDCMenuSurfaceFoundation.prototype.isFinite = function (num) {
        return typeof num === 'number' && isFinite(num);
    };
    return MDCMenuSurfaceFoundation;
}(MDCFoundation));

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
    MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
    MENU_SELECTION_GROUP: 'mdc-menu__selection-group',
    ROOT: 'mdc-menu',
};
var strings = {
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_DISABLED_ATTR: 'aria-disabled',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: '.mdc-list,.mdc-deprecated-list',
    SELECTED_EVENT: 'MDCMenu:selected',
};
var numbers = {
    FOCUS_ROOT_INDEX: -1,
};
var DefaultFocusState;
(function (DefaultFocusState) {
    DefaultFocusState[DefaultFocusState["NONE"] = 0] = "NONE";
    DefaultFocusState[DefaultFocusState["LIST_ROOT"] = 1] = "LIST_ROOT";
    DefaultFocusState[DefaultFocusState["FIRST_ITEM"] = 2] = "FIRST_ITEM";
    DefaultFocusState[DefaultFocusState["LAST_ITEM"] = 3] = "LAST_ITEM";
})(DefaultFocusState || (DefaultFocusState = {}));

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
var MDCMenuFoundation = /** @class */ (function (_super) {
    __extends(MDCMenuFoundation, _super);
    function MDCMenuFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation.defaultAdapter), adapter)) || this;
        _this.closeAnimationEndTimerId_ = 0;
        _this.defaultFocusState_ = DefaultFocusState.LIST_ROOT;
        return _this;
    }
    Object.defineProperty(MDCMenuFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuFoundation, "defaultAdapter", {
        /**
         * @see {@link MDCMenuAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClassToElementAtIndex: function () { return undefined; },
                removeClassFromElementAtIndex: function () { return undefined; },
                addAttributeToElementAtIndex: function () { return undefined; },
                removeAttributeFromElementAtIndex: function () { return undefined; },
                elementContainsClass: function () { return false; },
                closeSurface: function () { return undefined; },
                getElementIndex: function () { return -1; },
                notifySelected: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                focusItemAtIndex: function () { return undefined; },
                focusListRoot: function () { return undefined; },
                getSelectedSiblingOfItemAtIndex: function () { return -1; },
                isSelectableItemAtIndex: function () { return false; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCMenuFoundation.prototype.destroy = function () {
        if (this.closeAnimationEndTimerId_) {
            clearTimeout(this.closeAnimationEndTimerId_);
        }
        this.adapter.closeSurface();
    };
    MDCMenuFoundation.prototype.handleKeydown = function (evt) {
        var key = evt.key, keyCode = evt.keyCode;
        var isTab = key === 'Tab' || keyCode === 9;
        if (isTab) {
            this.adapter.closeSurface(/** skipRestoreFocus */ true);
        }
    };
    MDCMenuFoundation.prototype.handleItemAction = function (listItem) {
        var _this = this;
        var index = this.adapter.getElementIndex(listItem);
        if (index < 0) {
            return;
        }
        this.adapter.notifySelected({ index: index });
        this.adapter.closeSurface();
        // Wait for the menu to close before adding/removing classes that affect styles.
        this.closeAnimationEndTimerId_ = setTimeout(function () {
            // Recompute the index in case the menu contents have changed.
            var recomputedIndex = _this.adapter.getElementIndex(listItem);
            if (recomputedIndex >= 0 &&
                _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
                _this.setSelectedIndex(recomputedIndex);
            }
        }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    };
    MDCMenuFoundation.prototype.handleMenuSurfaceOpened = function () {
        switch (this.defaultFocusState_) {
            case DefaultFocusState.FIRST_ITEM:
                this.adapter.focusItemAtIndex(0);
                break;
            case DefaultFocusState.LAST_ITEM:
                this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
                break;
            case DefaultFocusState.NONE:
                // Do nothing.
                break;
            default:
                this.adapter.focusListRoot();
                break;
        }
    };
    /**
     * Sets default focus state where the menu should focus every time when menu
     * is opened. Focuses the list root (`DefaultFocusState.LIST_ROOT`) element by
     * default.
     */
    MDCMenuFoundation.prototype.setDefaultFocusState = function (focusState) {
        this.defaultFocusState_ = focusState;
    };
    /**
     * Selects the list item at `index` within the menu.
     * @param index Index of list item within the menu.
     */
    MDCMenuFoundation.prototype.setSelectedIndex = function (index) {
        this.validatedIndex_(index);
        if (!this.adapter.isSelectableItemAtIndex(index)) {
            throw new Error('MDCMenuFoundation: No selection group at specified index.');
        }
        var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
        if (prevSelectedIndex >= 0) {
            this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings.ARIA_CHECKED_ATTR);
            this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses.MENU_SELECTED_LIST_ITEM);
        }
        this.adapter.addClassToElementAtIndex(index, cssClasses.MENU_SELECTED_LIST_ITEM);
        this.adapter.addAttributeToElementAtIndex(index, strings.ARIA_CHECKED_ATTR, 'true');
    };
    /**
     * Sets the enabled state to isEnabled for the menu item at the given index.
     * @param index Index of the menu item
     * @param isEnabled The desired enabled state of the menu item.
     */
    MDCMenuFoundation.prototype.setEnabled = function (index, isEnabled) {
        this.validatedIndex_(index);
        if (isEnabled) {
            this.adapter.removeClassFromElementAtIndex(index, cssClasses$1.LIST_ITEM_DISABLED_CLASS);
            this.adapter.addAttributeToElementAtIndex(index, strings.ARIA_DISABLED_ATTR, 'false');
        }
        else {
            this.adapter.addClassToElementAtIndex(index, cssClasses$1.LIST_ITEM_DISABLED_CLASS);
            this.adapter.addAttributeToElementAtIndex(index, strings.ARIA_DISABLED_ATTR, 'true');
        }
    };
    MDCMenuFoundation.prototype.validatedIndex_ = function (index) {
        var menuSize = this.adapter.getMenuItemCount();
        var isIndexInRange = index >= 0 && index < menuSize;
        if (!isIndexInRange) {
            throw new Error('MDCMenuFoundation: No list item at specified index.');
        }
    };
    return MDCMenuFoundation;
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

/* packages/menu/node_modules/@smui/common/ClassAdder.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>
function create_default_slot$1(ctx) {
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
		id: create_default_slot$1.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>",
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
			$$slots: { default: [create_default_slot$1] },
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
		id: create_fragment$3.name,
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

function instance$1($$self, $$props, $$invalidate) {
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

		init(this, options, instance$1, create_fragment$3, safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			getElement: 9
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ClassAdder",
			options,
			id: create_fragment$3.name
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

/* packages/menu/node_modules/@smui/menu-surface/MenuSurface.svelte generated by Svelte v3.37.0 */

const { document: document_1 } = globals;

const file$1 = "packages/menu/node_modules/@smui/menu-surface/MenuSurface.svelte";

function create_fragment$2(ctx) {
	let t;
	let div;
	let div_class_value;
	let div_style_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[26].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[25], null);

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*className*/ ctx[2]]: true,
				"mdc-menu-surface": true,
				"mdc-menu-surface--fixed": /*fixed*/ ctx[5],
				"mdc-menu-surface--open": /*isStatic*/ ctx[4],
				"smui-menu-surface--static": /*isStatic*/ ctx[4],
				"mdc-menu-surface--fullwidth": /*fullWidth*/ ctx[6],
				.../*internalClasses*/ ctx[9]
			})
		},
		{
			style: div_style_value = Object.entries(/*internalStyles*/ ctx[10]).map(func).concat([/*style*/ ctx[3]]).join(" ")
		},
		/*$$restProps*/ ctx[12]
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			t = space();
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true, style: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$1, 4, 0, 105);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[28](div);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(document_1.body, "click", /*click_handler*/ ctx[27], true, false, false),
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[1])),
					action_destroyer(/*forwardEvents*/ ctx[11].call(null, div)),
					listen_dev(div, "keydown", /*keydown_handler*/ ctx[29], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[0] & /*$$scope*/ 33554432) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[25], dirty, null, null);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*className, fixed, isStatic, fullWidth, internalClasses*/ 628 && div_class_value !== (div_class_value = classMap({
					[/*className*/ ctx[2]]: true,
					"mdc-menu-surface": true,
					"mdc-menu-surface--fixed": /*fixed*/ ctx[5],
					"mdc-menu-surface--open": /*isStatic*/ ctx[4],
					"smui-menu-surface--static": /*isStatic*/ ctx[4],
					"mdc-menu-surface--fullwidth": /*fullWidth*/ ctx[6],
					.../*internalClasses*/ ctx[9]
				}))) && { class: div_class_value },
				(!current || dirty[0] & /*internalStyles, style*/ 1032 && div_style_value !== (div_style_value = Object.entries(/*internalStyles*/ ctx[10]).map(func).concat([/*style*/ ctx[3]]).join(" "))) && { style: div_style_value },
				dirty[0] & /*$$restProps*/ 4096 && /*$$restProps*/ ctx[12]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
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
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[28](null);
			mounted = false;
			run_all(dispose);
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

const func = ([name, value]) => `${name}: ${value};`;

function instance_1$1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","static","anchor","fixed","open","fullWidth","quickOpen","anchorElement","anchorCorner","anchorMargin","maxHeight","horizontallyCenteredOnViewport","isOpen","setOpen","setAbsolutePosition","setIsHoisted","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("MenuSurface", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { static: isStatic = false } = $$props;
	let { anchor = true } = $$props;
	let { fixed = false } = $$props;
	let { open = isStatic } = $$props;
	let { fullWidth = false } = $$props;
	let { quickOpen = false } = $$props;
	let { anchorElement = null } = $$props;
	let { anchorCorner = null } = $$props;
	let { anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 } } = $$props;
	let { maxHeight = 0 } = $$props;
	let { horizontallyCenteredOnViewport = false } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};
	let previousFocus;
	setContext("SMUI:list:role", "menu");
	setContext("SMUI:list:item:role", "menuitem");
	const iCorner = Corner;
	const iCornerBit = CornerBit;

	onMount(() => {
		$$invalidate(8, instance = new MDCMenuSurfaceFoundation({
				addClass,
				removeClass,
				hasClass,
				hasAnchor: () => !!anchorElement,
				notifyClose: () => {
					$$invalidate(0, open = isStatic);

					if (!open) {
						dispatch(element, "MDCMenuSurface:closed");
					}
				},
				notifyClosing: () => {
					$$invalidate(0, open = isStatic);

					if (!open) {
						dispatch(element, "MDCMenuSurface:closing");
					}
				},
				notifyOpen: () => {
					$$invalidate(0, open = true);
					dispatch(element, "MDCMenuSurface:opened");
				},
				isElementInContainer: el => element.contains(el),
				isRtl: () => getComputedStyle(element).getPropertyValue("direction") === "rtl",
				setTransformOrigin: origin => {
					const propertyName = `${getCorrectPropertyName(window, "transform")}-origin`;
					$$invalidate(10, internalStyles[propertyName] = origin, internalStyles);
				},
				isFocused: () => document.activeElement === element,
				saveFocus: () => {
					previousFocus = document.activeElement;
				},
				restoreFocus: () => {
					if (element.contains(document.activeElement) && previousFocus && previousFocus.focus) {
						previousFocus.focus();
					}
				},
				getInnerDimensions: () => {
					return {
						width: element.offsetWidth,
						height: element.offsetHeight
					};
				},
				getAnchorDimensions: () => anchorElement
				? anchorElement.getBoundingClientRect()
				: null,
				getWindowDimensions: () => {
					return {
						width: window.innerWidth,
						height: window.innerHeight
					};
				},
				getBodyDimensions: () => {
					return {
						width: document.body.clientWidth,
						height: document.body.clientHeight
					};
				},
				getWindowScroll: () => {
					return {
						x: window.pageXOffset,
						y: window.pageYOffset
					};
				},
				setPosition: position => {
					$$invalidate(10, internalStyles.left = "left" in position ? `${position.left}px` : "", internalStyles);
					$$invalidate(10, internalStyles.right = "right" in position ? `${position.right}px` : "", internalStyles);
					$$invalidate(10, internalStyles.top = "top" in position ? `${position.top}px` : "", internalStyles);
					$$invalidate(10, internalStyles.bottom = "bottom" in position ? `${position.bottom}px` : "", internalStyles);
				},
				setMaxHeight: height => {
					$$invalidate(10, internalStyles.maxHeight = height, internalStyles);
				}
			}));

		dispatch(element, "SMUI:menu-surface:mount", {
			get open() {
				return open;
			},
			set open(value) {
				$$invalidate(0, open = value);
			},
			closeProgrammatic
		});

		instance.init();

		return () => {
			const isHoisted = instance.isHoistedElement;
			instance.destroy();

			if (isHoisted) {
				element.parentNode.removeChild(element);
			}
		};
	});

	onDestroy(() => {
		if (anchor) {
			element && element.parentNode.classList.remove("mdc-menu-surface--anchor");
		}
	});

	function hasClass(className) {
		return className in internalClasses
		? internalClasses[className]
		: getElement().classList.contains(className);
	}

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(9, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(9, internalClasses[className] = false, internalClasses);
		}
	}

	function closeProgrammatic(skipRestoreFocus) {
		instance.close(skipRestoreFocus);
		$$invalidate(0, open = false);
	}

	function isOpen() {
		return open;
	}

	function setOpen(value) {
		$$invalidate(0, open = value);
	}

	function setAbsolutePosition(...args) {
		return instance.setAbsolutePosition(...args);
	}

	function setIsHoisted(...args) {
		return instance.setIsHoisted(...args);
	}

	function getElement() {
		return element;
	}

	const click_handler = event => instance && open && instance.handleBodyClick(event);

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	const keydown_handler = event => instance && instance.handleKeydown(event);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(3, style = $$new_props.style);
		if ("static" in $$new_props) $$invalidate(4, isStatic = $$new_props.static);
		if ("anchor" in $$new_props) $$invalidate(14, anchor = $$new_props.anchor);
		if ("fixed" in $$new_props) $$invalidate(5, fixed = $$new_props.fixed);
		if ("open" in $$new_props) $$invalidate(0, open = $$new_props.open);
		if ("fullWidth" in $$new_props) $$invalidate(6, fullWidth = $$new_props.fullWidth);
		if ("quickOpen" in $$new_props) $$invalidate(15, quickOpen = $$new_props.quickOpen);
		if ("anchorElement" in $$new_props) $$invalidate(13, anchorElement = $$new_props.anchorElement);
		if ("anchorCorner" in $$new_props) $$invalidate(16, anchorCorner = $$new_props.anchorCorner);
		if ("anchorMargin" in $$new_props) $$invalidate(17, anchorMargin = $$new_props.anchorMargin);
		if ("maxHeight" in $$new_props) $$invalidate(18, maxHeight = $$new_props.maxHeight);
		if ("horizontallyCenteredOnViewport" in $$new_props) $$invalidate(19, horizontallyCenteredOnViewport = $$new_props.horizontallyCenteredOnViewport);
		if ("$$scope" in $$new_props) $$invalidate(25, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		Corner,
		CornerBit,
		MDCMenuSurfaceFoundation,
		getCorrectPropertyName,
		onMount,
		onDestroy,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		dispatch,
		forwardEvents,
		use,
		className,
		style,
		isStatic,
		anchor,
		fixed,
		open,
		fullWidth,
		quickOpen,
		anchorElement,
		anchorCorner,
		anchorMargin,
		maxHeight,
		horizontallyCenteredOnViewport,
		element,
		instance,
		internalClasses,
		internalStyles,
		previousFocus,
		iCorner,
		iCornerBit,
		hasClass,
		addClass,
		removeClass,
		closeProgrammatic,
		isOpen,
		setOpen,
		setAbsolutePosition,
		setIsHoisted,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(3, style = $$new_props.style);
		if ("isStatic" in $$props) $$invalidate(4, isStatic = $$new_props.isStatic);
		if ("anchor" in $$props) $$invalidate(14, anchor = $$new_props.anchor);
		if ("fixed" in $$props) $$invalidate(5, fixed = $$new_props.fixed);
		if ("open" in $$props) $$invalidate(0, open = $$new_props.open);
		if ("fullWidth" in $$props) $$invalidate(6, fullWidth = $$new_props.fullWidth);
		if ("quickOpen" in $$props) $$invalidate(15, quickOpen = $$new_props.quickOpen);
		if ("anchorElement" in $$props) $$invalidate(13, anchorElement = $$new_props.anchorElement);
		if ("anchorCorner" in $$props) $$invalidate(16, anchorCorner = $$new_props.anchorCorner);
		if ("anchorMargin" in $$props) $$invalidate(17, anchorMargin = $$new_props.anchorMargin);
		if ("maxHeight" in $$props) $$invalidate(18, maxHeight = $$new_props.maxHeight);
		if ("horizontallyCenteredOnViewport" in $$props) $$invalidate(19, horizontallyCenteredOnViewport = $$new_props.horizontallyCenteredOnViewport);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(8, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(9, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(10, internalStyles = $$new_props.internalStyles);
		if ("previousFocus" in $$props) previousFocus = $$new_props.previousFocus;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*element, anchor*/ 16512) {
			if (element && anchor && !element.parentNode.classList.contains("mdc-menu-surface--anchor")) {
				element.parentNode.classList.add("mdc-menu-surface--anchor");
				$$invalidate(13, anchorElement = element.parentNode);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, open*/ 257) {
			if (instance && instance.isOpen() !== open) {
				if (open) {
					instance.open();
				} else {
					instance.close();
				}
			}
		}

		if ($$self.$$.dirty[0] & /*instance, quickOpen*/ 33024) {
			if (instance) {
				instance.setQuickOpen(quickOpen);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, fixed*/ 288) {
			if (instance) {
				instance.setFixedPosition(fixed);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, maxHeight*/ 262400) {
			if (instance && maxHeight > 0) {
				instance.setMaxHeight(maxHeight);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, horizontallyCenteredOnViewport*/ 524544) {
			if (instance) {
				instance.setIsHorizontallyCenteredOnViewport(horizontallyCenteredOnViewport);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, anchorCorner*/ 65792) {
			if (instance && anchorCorner != null) {
				if (iCorner.hasOwnProperty(anchorCorner)) {
					instance.setAnchorCorner(iCorner[anchorCorner]);
				} else if (iCornerBit.hasOwnProperty(anchorCorner)) {
					instance.setAnchorCorner(iCornerBit[anchorCorner]);
				} else {
					instance.setAnchorCorner(anchorCorner);
				}
			}
		}

		if ($$self.$$.dirty[0] & /*instance, anchorMargin*/ 131328) {
			if (instance) {
				instance.setAnchorMargin(anchorMargin);
			}
		}
	};

	return [
		open,
		use,
		className,
		style,
		isStatic,
		fixed,
		fullWidth,
		element,
		instance,
		internalClasses,
		internalStyles,
		forwardEvents,
		$$restProps,
		anchorElement,
		anchor,
		quickOpen,
		anchorCorner,
		anchorMargin,
		maxHeight,
		horizontallyCenteredOnViewport,
		isOpen,
		setOpen,
		setAbsolutePosition,
		setIsHoisted,
		getElement,
		$$scope,
		slots,
		click_handler,
		div_binding,
		keydown_handler
	];
}

class MenuSurface extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1$1,
			create_fragment$2,
			safe_not_equal,
			{
				use: 1,
				class: 2,
				style: 3,
				static: 4,
				anchor: 14,
				fixed: 5,
				open: 0,
				fullWidth: 6,
				quickOpen: 15,
				anchorElement: 13,
				anchorCorner: 16,
				anchorMargin: 17,
				maxHeight: 18,
				horizontallyCenteredOnViewport: 19,
				isOpen: 20,
				setOpen: 21,
				setAbsolutePosition: 22,
				setIsHoisted: 23,
				getElement: 24
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "MenuSurface",
			options,
			id: create_fragment$2.name
		});
	}

	get use() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get static() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set static(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get anchor() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set anchor(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get fixed() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fixed(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set open(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get fullWidth() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fullWidth(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get quickOpen() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set quickOpen(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get anchorElement() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set anchorElement(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get anchorCorner() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set anchorCorner(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get anchorMargin() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set anchorMargin(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get maxHeight() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set maxHeight(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get horizontallyCenteredOnViewport() {
		throw new Error("<MenuSurface>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set horizontallyCenteredOnViewport(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isOpen() {
		return this.$$.ctx[20];
	}

	set isOpen(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setOpen() {
		return this.$$.ctx[21];
	}

	set setOpen(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setAbsolutePosition() {
		return this.$$.ctx[22];
	}

	set setAbsolutePosition(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setIsHoisted() {
		return this.$$.ctx[23];
	}

	set setIsHoisted(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[24];
	}

	set getElement(value) {
		throw new Error("<MenuSurface>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/menu/Menu.svelte generated by Svelte v3.37.0 */

// (1:0) <MenuSurface   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-menu': true,   })}   bind:open   on:SMUI:menu-surface:mount={handleMenuSurfaceAccessor}   on:SMUI:list:mount={handleListAccessor}   on:MDCMenuSurface:opened={() =>     instance && instance.handleMenuSurfaceOpened()}   on:keydown={(event) => instance && instance.handleKeydown(event)}   on:MDCList:action={(event) =>     instance &&     instance.handleItemAction(       listAccessor.getOrderedList()[event.detail.index].element     )}   {...$$restProps}>
function create_default_slot(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[14].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[20], null);

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
				if (default_slot.p && dirty & /*$$scope*/ 1048576) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[20], dirty, null, null);
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
		id: create_default_slot.name,
		type: "slot",
		source: "(1:0) <MenuSurface   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-menu': true,   })}   bind:open   on:SMUI:menu-surface:mount={handleMenuSurfaceAccessor}   on:SMUI:list:mount={handleListAccessor}   on:MDCMenuSurface:opened={() =>     instance && instance.handleMenuSurfaceOpened()}   on:keydown={(event) => instance && instance.handleKeydown(event)}   on:MDCList:action={(event) =>     instance &&     instance.handleItemAction(       listAccessor.getOrderedList()[event.detail.index].element     )}   {...$$restProps}>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let menusurface;
	let updating_open;
	let current;

	const menusurface_spread_levels = [
		{
			use: [/*forwardEvents*/ ctx[6], .../*use*/ ctx[1]]
		},
		{
			class: classMap({
				[/*className*/ ctx[2]]: true,
				"mdc-menu": true
			})
		},
		/*$$restProps*/ ctx[9]
	];

	function menusurface_open_binding(value) {
		/*menusurface_open_binding*/ ctx[16](value);
	}

	let menusurface_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	for (let i = 0; i < menusurface_spread_levels.length; i += 1) {
		menusurface_props = assign(menusurface_props, menusurface_spread_levels[i]);
	}

	if (/*open*/ ctx[0] !== void 0) {
		menusurface_props.open = /*open*/ ctx[0];
	}

	menusurface = new MenuSurface({ props: menusurface_props, $$inline: true });
	/*menusurface_binding*/ ctx[15](menusurface);
	binding_callbacks.push(() => bind(menusurface, "open", menusurface_open_binding));
	menusurface.$on("SMUI:menu-surface:mount", /*handleMenuSurfaceAccessor*/ ctx[7]);
	menusurface.$on("SMUI:list:mount", /*handleListAccessor*/ ctx[8]);
	menusurface.$on("MDCMenuSurface:opened", /*MDCMenuSurface_opened_handler*/ ctx[17]);
	menusurface.$on("keydown", /*keydown_handler*/ ctx[18]);
	menusurface.$on("MDCList:action", /*MDCList_action_handler*/ ctx[19]);

	const block = {
		c: function create() {
			create_component(menusurface.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(menusurface.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(menusurface, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const menusurface_changes = (dirty & /*forwardEvents, use, classMap, className, $$restProps*/ 582)
			? get_spread_update(menusurface_spread_levels, [
					dirty & /*forwardEvents, use*/ 66 && {
						use: [/*forwardEvents*/ ctx[6], .../*use*/ ctx[1]]
					},
					dirty & /*classMap, className*/ 4 && {
						class: classMap({
							[/*className*/ ctx[2]]: true,
							"mdc-menu": true
						})
					},
					dirty & /*$$restProps*/ 512 && get_spread_object(/*$$restProps*/ ctx[9])
				])
			: {};

			if (dirty & /*$$scope*/ 1048576) {
				menusurface_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				menusurface_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			menusurface.$set(menusurface_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(menusurface.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(menusurface.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*menusurface_binding*/ ctx[15](null);
			destroy_component(menusurface, detaching);
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

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","open","isOpen","setOpen","setDefaultFocusState","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Menu", slots, ['default']);
	const { closest } = ponyfill;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { open = false } = $$props;
	let element;
	let instance;
	let menuSurfaceAccessor;
	let listAccessor;

	onMount(() => {
		$$invalidate(4, instance = new MDCMenuFoundation({
				addClassToElementAtIndex: (index, className) => {
					listAccessor.addClassForElementIndex(index, className);
				},
				removeClassFromElementAtIndex: (index, className) => {
					listAccessor.removeClassForElementIndex(index, className);
				},
				addAttributeToElementAtIndex: (index, attr, value) => {
					listAccessor.setAttributeForElementIndex(index, attr, value);
				},
				removeAttributeFromElementAtIndex: (index, attr) => {
					listAccessor.removeAttributeForElementIndex(index, attr);
				},
				elementContainsClass: (element, className) => element.classList.contains(className),
				closeSurface: skipRestoreFocus => menuSurfaceAccessor.closeProgrammatic(skipRestoreFocus),
				getElementIndex: element => listAccessor.getOrderedList().map(accessor => accessor.element).indexOf(element),
				notifySelected: evtData => dispatch(element, "MDCMenu:selected", {
					index: evtData.index,
					item: listAccessor.getOrderedList()[evtData.index].element
				}),
				getMenuItemCount: () => listAccessor.items.length,
				focusItemAtIndex: index => listAccessor.focusItemAtIndex(index),
				focusListRoot: () => listAccessor.element.focus(),
				isSelectableItemAtIndex: index => !!closest(listAccessor.getOrderedList()[index].element, `.${cssClasses.MENU_SELECTION_GROUP}`),
				getSelectedSiblingOfItemAtIndex: index => {
					const orderedList = listAccessor.getOrderedList();
					const selectionGroupEl = closest(orderedList[index].element, `.${cssClasses.MENU_SELECTION_GROUP}`);
					const selectedItemEl = selectionGroupEl.querySelector(`.${cssClasses.MENU_SELECTED_LIST_ITEM}`);

					return selectedItemEl
					? orderedList.map(item => item.element).indexOf(selectedItemEl)
					: -1;
				}
			}));

		dispatch(element, "SMUI:menu:mount", instance);
		instance.init();

		return () => {
			instance.destroy();
		};
	});

	function handleMenuSurfaceAccessor(event) {
		if (!menuSurfaceAccessor) {
			menuSurfaceAccessor = event.detail;
		}
	}

	function handleListAccessor(event) {
		if (!listAccessor) {
			$$invalidate(5, listAccessor = event.detail);
		}
	}

	function isOpen() {
		return open;
	}

	function setOpen(value) {
		$$invalidate(0, open = value);
	}

	function setDefaultFocusState(focusState) {
		instance.setDefaultFocusState(focusState);
	}

	function getElement() {
		return element.getElement();
	}

	function menusurface_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(3, element);
		});
	}

	function menusurface_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	const MDCMenuSurface_opened_handler = () => instance && instance.handleMenuSurfaceOpened();
	const keydown_handler = event => instance && instance.handleKeydown(event);
	const MDCList_action_handler = event => instance && instance.handleItemAction(listAccessor.getOrderedList()[event.detail.index].element);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("open" in $$new_props) $$invalidate(0, open = $$new_props.open);
		if ("$$scope" in $$new_props) $$invalidate(20, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCMenuFoundation,
		cssClasses,
		ponyfill,
		onMount,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		dispatch,
		MenuSurface,
		closest,
		forwardEvents,
		use,
		className,
		open,
		element,
		instance,
		menuSurfaceAccessor,
		listAccessor,
		handleMenuSurfaceAccessor,
		handleListAccessor,
		isOpen,
		setOpen,
		setDefaultFocusState,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("open" in $$props) $$invalidate(0, open = $$new_props.open);
		if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(4, instance = $$new_props.instance);
		if ("menuSurfaceAccessor" in $$props) menuSurfaceAccessor = $$new_props.menuSurfaceAccessor;
		if ("listAccessor" in $$props) $$invalidate(5, listAccessor = $$new_props.listAccessor);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		open,
		use,
		className,
		element,
		instance,
		listAccessor,
		forwardEvents,
		handleMenuSurfaceAccessor,
		handleListAccessor,
		$$restProps,
		isOpen,
		setOpen,
		setDefaultFocusState,
		getElement,
		slots,
		menusurface_binding,
		menusurface_open_binding,
		MDCMenuSurface_opened_handler,
		keydown_handler,
		MDCList_action_handler,
		$$scope
	];
}

class Menu extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1, create_fragment$1, safe_not_equal, {
			use: 1,
			class: 2,
			open: 0,
			isOpen: 10,
			setOpen: 11,
			setDefaultFocusState: 12,
			getElement: 13
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Menu",
			options,
			id: create_fragment$1.name
		});
	}

	get use() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		throw new Error("<Menu>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set open(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isOpen() {
		return this.$$.ctx[10];
	}

	set isOpen(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setOpen() {
		return this.$$.ctx[11];
	}

	set setOpen(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setDefaultFocusState() {
		return this.$$.ctx[12];
	}

	set setDefaultFocusState(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[13];
	}

	set getElement(value) {
		throw new Error("<Menu>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/menu/node_modules/@smui/list/Graphic.svelte generated by Svelte v3.37.0 */

const file = "packages/menu/node_modules/@smui/list/Graphic.svelte";

function create_fragment(ctx) {
	let span;
	let span_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

	let span_levels = [
		{
			class: span_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-deprecated-list-item__graphic": true,
				"mdc-menu__selection-group-icon": /*menuSelectionGroup*/ ctx[4]
			})
		},
		/*$$restProps*/ ctx[5]
	];

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
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(span, span_data);
			add_location(span, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			/*span_binding*/ ctx[9](span);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, span, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[3].call(null, span))
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

			set_attributes(span, span_data = get_spread_update(span_levels, [
				(!current || dirty & /*className*/ 2 && span_class_value !== (span_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-deprecated-list-item__graphic": true,
					"mdc-menu__selection-group-icon": /*menuSelectionGroup*/ ctx[4]
				}))) && { class: span_class_value },
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
			if (detaching) detach_dev(span);
			if (default_slot) default_slot.d(detaching);
			/*span_binding*/ ctx[9](null);
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

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Graphic", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let element;
	let menuSelectionGroup = getContext("SMUI:list:graphic:menu-selection-group");

	function getElement() {
		return element;
	}

	function span_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(2, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("$$scope" in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		getContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		forwardEvents,
		use,
		className,
		element,
		menuSelectionGroup,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
		if ("menuSelectionGroup" in $$props) $$invalidate(4, menuSelectionGroup = $$new_props.menuSelectionGroup);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		element,
		forwardEvents,
		menuSelectionGroup,
		$$restProps,
		getElement,
		$$scope,
		slots,
		span_binding
	];
}

class Graphic extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { use: 0, class: 1, getElement: 6 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Graphic",
			options,
			id: create_fragment.name
		});
	}

	get use() {
		throw new Error("<Graphic>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Graphic>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Graphic>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Graphic>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[6];
	}

	set getElement(value) {
		throw new Error("<Graphic>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var SelectionGroupIcon = classAdderBuilder({
  class: 'mdc-menu__selection-group-icon',
  component: Graphic,
});

export { Menu as M, SelectionGroupIcon as S, classMap as c, forwardEventsBuilder as f, useActions as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0aW9uR3JvdXBJY29uLmNiNDEwZTUxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9wYWNrYWdlcy9tZW51L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9tZW51L25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL3BvbnlmaWxsLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2FuaW1hdGlvbi91dGlsLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9jbGFzc01hcC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9DbGFzc0FkZGVyLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9jbGFzc0FkZGVyQnVpbGRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9kaXNwYXRjaC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS9ub2RlX21vZHVsZXMvQHNtdWkvbWVudS1zdXJmYWNlL01lbnVTdXJmYWNlLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUvTWVudS5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9tZW51L25vZGVfbW9kdWxlcy9Ac211aS9saXN0L0dyYXBoaWMuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS9TZWxlY3Rpb25Hcm91cEljb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBBTkNIT1I6ICdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InLFxuICAgIEFOSU1BVElOR19DTE9TRUQ6ICdtZGMtbWVudS1zdXJmYWNlLS1hbmltYXRpbmctY2xvc2VkJyxcbiAgICBBTklNQVRJTkdfT1BFTjogJ21kYy1tZW51LXN1cmZhY2UtLWFuaW1hdGluZy1vcGVuJyxcbiAgICBGSVhFRDogJ21kYy1tZW51LXN1cmZhY2UtLWZpeGVkJyxcbiAgICBJU19PUEVOX0JFTE9XOiAnbWRjLW1lbnUtc3VyZmFjZS0taXMtb3Blbi1iZWxvdycsXG4gICAgT1BFTjogJ21kYy1tZW51LXN1cmZhY2UtLW9wZW4nLFxuICAgIFJPT1Q6ICdtZGMtbWVudS1zdXJmYWNlJyxcbn07XG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbnZhciBzdHJpbmdzID0ge1xuICAgIENMT1NFRF9FVkVOVDogJ01EQ01lbnVTdXJmYWNlOmNsb3NlZCcsXG4gICAgQ0xPU0lOR19FVkVOVDogJ01EQ01lbnVTdXJmYWNlOmNsb3NpbmcnLFxuICAgIE9QRU5FRF9FVkVOVDogJ01EQ01lbnVTdXJmYWNlOm9wZW5lZCcsXG4gICAgRk9DVVNBQkxFX0VMRU1FTlRTOiBbXG4gICAgICAgICdidXR0b246bm90KDpkaXNhYmxlZCknLFxuICAgICAgICAnW2hyZWZdOm5vdChbYXJpYS1kaXNhYmxlZD1cInRydWVcIl0pJyxcbiAgICAgICAgJ2lucHV0Om5vdCg6ZGlzYWJsZWQpJyxcbiAgICAgICAgJ3NlbGVjdDpub3QoOmRpc2FibGVkKScsXG4gICAgICAgICd0ZXh0YXJlYTpub3QoOmRpc2FibGVkKScsXG4gICAgICAgICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSknLFxuICAgIF0uam9pbignLCAnKSxcbn07XG4vLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xudmFyIG51bWJlcnMgPSB7XG4gICAgLyoqIFRvdGFsIGR1cmF0aW9uIG9mIG1lbnUtc3VyZmFjZSBvcGVuIGFuaW1hdGlvbi4gKi9cbiAgICBUUkFOU0lUSU9OX09QRU5fRFVSQVRJT046IDEyMCxcbiAgICAvKiogVG90YWwgZHVyYXRpb24gb2YgbWVudS1zdXJmYWNlIGNsb3NlIGFuaW1hdGlvbi4gKi9cbiAgICBUUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OOiA3NSxcbiAgICAvKiogTWFyZ2luIGxlZnQgdG8gdGhlIGVkZ2Ugb2YgdGhlIHZpZXdwb3J0IHdoZW4gbWVudS1zdXJmYWNlIGlzIGF0IG1heGltdW0gcG9zc2libGUgaGVpZ2h0LiBBbHNvIHVzZWQgYXMgYSB2aWV3cG9ydCBtYXJnaW4uICovXG4gICAgTUFSR0lOX1RPX0VER0U6IDMyLFxuICAgIC8qKiBSYXRpbyBvZiBhbmNob3Igd2lkdGggdG8gbWVudS1zdXJmYWNlIHdpZHRoIGZvciBzd2l0Y2hpbmcgZnJvbSBjb3JuZXIgcG9zaXRpb25pbmcgdG8gY2VudGVyIHBvc2l0aW9uaW5nLiAqL1xuICAgIEFOQ0hPUl9UT19NRU5VX1NVUkZBQ0VfV0lEVEhfUkFUSU86IDAuNjcsXG59O1xuLyoqXG4gKiBFbnVtIGZvciBiaXRzIGluIHRoZSB7QHNlZSBDb3JuZXIpIGJpdG1hcC5cbiAqL1xudmFyIENvcm5lckJpdDtcbihmdW5jdGlvbiAoQ29ybmVyQml0KSB7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIkJPVFRPTVwiXSA9IDFdID0gXCJCT1RUT01cIjtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiQ0VOVEVSXCJdID0gMl0gPSBcIkNFTlRFUlwiO1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJSSUdIVFwiXSA9IDRdID0gXCJSSUdIVFwiO1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJGTElQX1JUTFwiXSA9IDhdID0gXCJGTElQX1JUTFwiO1xufSkoQ29ybmVyQml0IHx8IChDb3JuZXJCaXQgPSB7fSkpO1xuLyoqXG4gKiBFbnVtIGZvciByZXByZXNlbnRpbmcgYW4gZWxlbWVudCBjb3JuZXIgZm9yIHBvc2l0aW9uaW5nIHRoZSBtZW51LXN1cmZhY2UuXG4gKlxuICogVGhlIFNUQVJUIGNvbnN0YW50cyBtYXAgdG8gTEVGVCBpZiBlbGVtZW50IGRpcmVjdGlvbmFsaXR5IGlzIGxlZnRcbiAqIHRvIHJpZ2h0IGFuZCBSSUdIVCBpZiB0aGUgZGlyZWN0aW9uYWxpdHkgaXMgcmlnaHQgdG8gbGVmdC5cbiAqIExpa2V3aXNlIEVORCBtYXBzIHRvIFJJR0hUIG9yIExFRlQgZGVwZW5kaW5nIG9uIHRoZSBkaXJlY3Rpb25hbGl0eS5cbiAqL1xudmFyIENvcm5lcjtcbihmdW5jdGlvbiAoQ29ybmVyKSB7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9MRUZUXCJdID0gMF0gPSBcIlRPUF9MRUZUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9SSUdIVFwiXSA9IDRdID0gXCJUT1BfUklHSFRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiQk9UVE9NX0xFRlRcIl0gPSAxXSA9IFwiQk9UVE9NX0xFRlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiQk9UVE9NX1JJR0hUXCJdID0gNV0gPSBcIkJPVFRPTV9SSUdIVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJUT1BfU1RBUlRcIl0gPSA4XSA9IFwiVE9QX1NUQVJUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9FTkRcIl0gPSAxMl0gPSBcIlRPUF9FTkRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiQk9UVE9NX1NUQVJUXCJdID0gOV0gPSBcIkJPVFRPTV9TVEFSVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fRU5EXCJdID0gMTNdID0gXCJCT1RUT01fRU5EXCI7XG59KShDb3JuZXIgfHwgKENvcm5lciA9IHt9KSk7XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCBudW1iZXJzLCBDb3JuZXJCaXQsIENvcm5lciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8qKlxuICogVXNlZCB0byBjb21wdXRlIHRoZSBlc3RpbWF0ZWQgc2Nyb2xsIHdpZHRoIG9mIGVsZW1lbnRzLiBXaGVuIGFuIGVsZW1lbnQgaXNcbiAqIGhpZGRlbiBkdWUgdG8gZGlzcGxheTogbm9uZTsgYmVpbmcgYXBwbGllZCB0byBhIHBhcmVudCBlbGVtZW50LCB0aGUgd2lkdGggaXNcbiAqIHJldHVybmVkIGFzIDAuIEhvd2V2ZXIsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhIHRydWUgd2lkdGggb25jZSBubyBsb25nZXJcbiAqIGluc2lkZSBhIGRpc3BsYXk6IG5vbmUgY29udGV4dC4gVGhpcyBtZXRob2QgY29tcHV0ZXMgYW4gZXN0aW1hdGVkIHdpZHRoIHdoZW5cbiAqIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBvciByZXR1cm5zIHRoZSB0cnVlIHdpZHRoIHdoZW4gdGhlIGVsZW1lbnQgaXMgdmlzYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IHdob3NlIHdpZHRoIHRvIGVzdGltYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZVNjcm9sbFdpZHRoKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayB0aGUgb2Zmc2V0UGFyZW50LiBJZiB0aGUgZWxlbWVudCBpbmhlcml0cyBkaXNwbGF5OiBub25lIGZyb20gYW55XG4gICAgLy8gcGFyZW50LCB0aGUgb2Zmc2V0UGFyZW50IHByb3BlcnR5IHdpbGwgYmUgbnVsbCAoc2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L29mZnNldFBhcmVudCkuXG4gICAgLy8gVGhpcyBjaGVjayBlbnN1cmVzIHdlIG9ubHkgY2xvbmUgdGhlIG5vZGUgd2hlbiBuZWNlc3NhcnkuXG4gICAgdmFyIGh0bWxFbCA9IGVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbC5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbC5zY3JvbGxXaWR0aDtcbiAgICB9XG4gICAgdmFyIGNsb25lID0gaHRtbEVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5OXB4LCAtOTk5OXB4KScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgdmFyIHNjcm9sbFdpZHRoID0gY2xvbmUuc2Nyb2xsV2lkdGg7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICByZXR1cm4gc2Nyb2xsV2lkdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBfYSwgX2I7XG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBMSVNUX0lURU1fQUNUSVZBVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyxcbiAgICBMSVNUX0lURU1fQ0xBU1M6ICdtZGMtbGlzdC1pdGVtJyxcbiAgICBMSVNUX0lURU1fRElTQUJMRURfQ0xBU1M6ICdtZGMtbGlzdC1pdGVtLS1kaXNhYmxlZCcsXG4gICAgTElTVF9JVEVNX1NFTEVDVEVEX0NMQVNTOiAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnLFxuICAgIExJU1RfSVRFTV9URVhUX0NMQVNTOiAnbWRjLWxpc3QtaXRlbV9fdGV4dCcsXG4gICAgTElTVF9JVEVNX1BSSU1BUllfVEVYVF9DTEFTUzogJ21kYy1saXN0LWl0ZW1fX3ByaW1hcnktdGV4dCcsXG4gICAgUk9PVDogJ21kYy1saXN0Jyxcbn07XG52YXIgZXZvbHV0aW9uQ2xhc3NOYW1lTWFwID0gKF9hID0ge30sXG4gICAgX2FbXCJcIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTU10gPSAnbWRjLWxpc3QtaXRlbS0tYWN0aXZhdGVkJyxcbiAgICBfYVtcIlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1NdID0gJ21kYy1saXN0LWl0ZW0nLFxuICAgIF9hW1wiXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9ESVNBQkxFRF9DTEFTU10gPSAnbWRjLWxpc3QtaXRlbS0tZGlzYWJsZWQnLFxuICAgIF9hW1wiXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTU10gPSAnbWRjLWxpc3QtaXRlbS0tc2VsZWN0ZWQnLFxuICAgIF9hW1wiXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9QUklNQVJZX1RFWFRfQ0xBU1NdID0gJ21kYy1saXN0LWl0ZW1fX3ByaW1hcnktdGV4dCcsXG4gICAgX2FbXCJcIiArIGNzc0NsYXNzZXMuUk9PVF0gPSAnbWRjLWxpc3QnLFxuICAgIF9hKTtcbnZhciBkZXByZWNhdGVkQ2xhc3NOYW1lTWFwID0gKF9iID0ge30sXG4gICAgX2JbXCJcIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0FDVElWQVRFRF9DTEFTU10gPSAnbWRjLWRlcHJlY2F0ZWQtbGlzdC1pdGVtLS1hY3RpdmF0ZWQnLFxuICAgIF9iW1wiXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU10gPSAnbWRjLWRlcHJlY2F0ZWQtbGlzdC1pdGVtJyxcbiAgICBfYltcIlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fRElTQUJMRURfQ0xBU1NdID0gJ21kYy1kZXByZWNhdGVkLWxpc3QtaXRlbS0tZGlzYWJsZWQnLFxuICAgIF9iW1wiXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9TRUxFQ1RFRF9DTEFTU10gPSAnbWRjLWRlcHJlY2F0ZWQtbGlzdC1pdGVtLS1zZWxlY3RlZCcsXG4gICAgX2JbXCJcIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX1RFWFRfQ0xBU1NdID0gJ21kYy1kZXByZWNhdGVkLWxpc3QtaXRlbV9fdGV4dCcsXG4gICAgX2JbXCJcIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX1BSSU1BUllfVEVYVF9DTEFTU10gPSAnbWRjLWRlcHJlY2F0ZWQtbGlzdC1pdGVtX19wcmltYXJ5LXRleHQnLFxuICAgIF9iW1wiXCIgKyBjc3NDbGFzc2VzLlJPT1RdID0gJ21kYy1kZXByZWNhdGVkLWxpc3QnLFxuICAgIF9iKTtcbnZhciBzdHJpbmdzID0ge1xuICAgIEFDVElPTl9FVkVOVDogJ01EQ0xpc3Q6YWN0aW9uJyxcbiAgICBBUklBX0NIRUNLRUQ6ICdhcmlhLWNoZWNrZWQnLFxuICAgIEFSSUFfQ0hFQ0tFRF9DSEVDS0JPWF9TRUxFQ1RPUjogJ1tyb2xlPVwiY2hlY2tib3hcIl1bYXJpYS1jaGVja2VkPVwidHJ1ZVwiXScsXG4gICAgQVJJQV9DSEVDS0VEX1JBRElPX1NFTEVDVE9SOiAnW3JvbGU9XCJyYWRpb1wiXVthcmlhLWNoZWNrZWQ9XCJ0cnVlXCJdJyxcbiAgICBBUklBX0NVUlJFTlQ6ICdhcmlhLWN1cnJlbnQnLFxuICAgIEFSSUFfRElTQUJMRUQ6ICdhcmlhLWRpc2FibGVkJyxcbiAgICBBUklBX09SSUVOVEFUSU9OOiAnYXJpYS1vcmllbnRhdGlvbicsXG4gICAgQVJJQV9PUklFTlRBVElPTl9IT1JJWk9OVEFMOiAnaG9yaXpvbnRhbCcsXG4gICAgQVJJQV9ST0xFX0NIRUNLQk9YX1NFTEVDVE9SOiAnW3JvbGU9XCJjaGVja2JveFwiXScsXG4gICAgQVJJQV9TRUxFQ1RFRDogJ2FyaWEtc2VsZWN0ZWQnLFxuICAgIEFSSUFfSU5URVJBQ1RJVkVfUk9MRVNfU0VMRUNUT1I6ICdbcm9sZT1cImxpc3Rib3hcIl0sIFtyb2xlPVwibWVudVwiXScsXG4gICAgQVJJQV9NVUxUSV9TRUxFQ1RBQkxFX1NFTEVDVE9SOiAnW2FyaWEtbXVsdGlzZWxlY3RhYmxlPVwidHJ1ZVwiXScsXG4gICAgQ0hFQ0tCT1hfUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sIGlucHV0W3R5cGU9XCJyYWRpb1wiXScsXG4gICAgQ0hFQ0tCT1hfU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nLFxuICAgIENISUxEX0VMRU1FTlRTX1RPX1RPR0dMRV9UQUJJTkRFWDogXCJcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBidXR0b246bm90KDpkaXNhYmxlZCksXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYSxcXG4gICAgLlwiICsgZGVwcmVjYXRlZENsYXNzTmFtZU1hcFtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU10gKyBcIiBidXR0b246bm90KDpkaXNhYmxlZCksXFxuICAgIC5cIiArIGRlcHJlY2F0ZWRDbGFzc05hbWVNYXBbY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1NdICsgXCIgYVxcbiAgXCIsXG4gICAgREVQUkVDQVRFRF9TRUxFQ1RPUjogJy5tZGMtZGVwcmVjYXRlZC1saXN0JyxcbiAgICBGT0NVU0FCTEVfQ0hJTERfRUxFTUVOVFM6IFwiXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgYnV0dG9uOm5vdCg6ZGlzYWJsZWQpLFxcbiAgICAuXCIgKyBjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTUyArIFwiIGEsXFxuICAgIC5cIiArIGNzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTICsgXCIgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXTpub3QoOmRpc2FibGVkKSxcXG4gICAgLlwiICsgY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1MgKyBcIiBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOm5vdCg6ZGlzYWJsZWQpLFxcbiAgICAuXCIgKyBkZXByZWNhdGVkQ2xhc3NOYW1lTWFwW2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTXSArIFwiIGJ1dHRvbjpub3QoOmRpc2FibGVkKSxcXG4gICAgLlwiICsgZGVwcmVjYXRlZENsYXNzTmFtZU1hcFtjc3NDbGFzc2VzLkxJU1RfSVRFTV9DTEFTU10gKyBcIiBhLFxcbiAgICAuXCIgKyBkZXByZWNhdGVkQ2xhc3NOYW1lTWFwW2Nzc0NsYXNzZXMuTElTVF9JVEVNX0NMQVNTXSArIFwiIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl06bm90KDpkaXNhYmxlZCksXFxuICAgIC5cIiArIGRlcHJlY2F0ZWRDbGFzc05hbWVNYXBbY3NzQ2xhc3Nlcy5MSVNUX0lURU1fQ0xBU1NdICsgXCIgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpub3QoOmRpc2FibGVkKVxcbiAgXCIsXG4gICAgUkFESU9fU0VMRUNUT1I6ICdpbnB1dFt0eXBlPVwicmFkaW9cIl0nLFxuICAgIFNFTEVDVEVEX0lURU1fU0VMRUNUT1I6ICdbYXJpYS1zZWxlY3RlZD1cInRydWVcIl0sIFthcmlhLWN1cnJlbnQ9XCJ0cnVlXCJdJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBVTlNFVF9JTkRFWDogLTEsXG4gICAgVFlQRUFIRUFEX0JVRkZFUl9DTEVBUl9USU1FT1VUX01TOiAzMDBcbn07XG52YXIgZXZvbHV0aW9uQXR0cmlidXRlID0gJ2V2b2x1dGlvbic7XG5leHBvcnQgeyBzdHJpbmdzLCBjc3NDbGFzc2VzLCBudW1iZXJzLCBkZXByZWNhdGVkQ2xhc3NOYW1lTWFwLCBldm9sdXRpb25BdHRyaWJ1dGUsIGV2b2x1dGlvbkNsYXNzTmFtZU1hcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcywgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IENvcm5lciwgQ29ybmVyQml0LCBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuaXNTdXJmYWNlT3BlbiA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc1F1aWNrT3BlbiA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0hvaXN0ZWRFbGVtZW50ID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzRml4ZWRQb3NpdGlvbiA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5pc0hvcml6b250YWxseUNlbnRlcmVkT25WaWV3cG9ydCA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5tYXhIZWlnaHQgPSAwO1xuICAgICAgICBfdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZCA9IDA7XG4gICAgICAgIF90aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZCA9IDA7XG4gICAgICAgIF90aGlzLmFuaW1hdGlvblJlcXVlc3RJZCA9IDA7XG4gICAgICAgIF90aGlzLmFuY2hvckNvcm5lciA9IENvcm5lci5UT1BfU1RBUlQ7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZSB0byB3aGljaCBtZW51IHN1cmZhY2UgaXMgYXR0YWNoZWQgdG8gYW5jaG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiAgQW5jaG9yIGNvcm5lciAtLS0+Ky0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICB8ICBBTkNIT1IgIHxcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICstLS0tLS0tLS0tK1xuICAgICAgICAgKiAgT3JpZ2luIGNvcm5lciAtLS0+Ky0tLS0tLS0tLS0tLS0tK1xuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgfCBNRU5VIFNVUkZBQ0UgfFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgfFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tK1xuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMub3JpZ2luQ29ybmVyID0gQ29ybmVyLlRPUF9TVEFSVDtcbiAgICAgICAgX3RoaXMuYW5jaG9yTWFyZ2luID0geyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAgfTtcbiAgICAgICAgX3RoaXMucG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcIkNvcm5lclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIENvcm5lcjtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHNlZSB7QGxpbmsgTURDTWVudVN1cmZhY2VBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBoYXNBbmNob3I6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzRWxlbWVudEluQ29udGFpbmVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc0ZvY3VzZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzUnRsOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBnZXRJbm5lckRpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGhlaWdodDogMCwgd2lkdGg6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0QW5jaG9yRGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBoZWlnaHQ6IDAsIHdpZHRoOiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGdldEJvZHlEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyBoZWlnaHQ6IDAsIHdpZHRoOiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1Njcm9sbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBzZXRQb3NpdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldE1heEhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFRyYW5zZm9ybU9yaWdpbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNhdmVGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlc3RvcmVGb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUNsb3NlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5T3BlbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUNsb3Npbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVCA9IF9hLlJPT1QsIE9QRU4gPSBfYS5PUEVOO1xuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlci5oYXNDbGFzcyhST09UKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFJPT1QgKyBcIiBjbGFzcyByZXF1aXJlZCBpbiByb290IGVsZW1lbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaGFzQ2xhc3MoT1BFTikpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdXJmYWNlT3BlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMub3BlbkFuaW1hdGlvbkVuZFRpbWVySWQpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWQpO1xuICAgICAgICAvLyBDYW5jZWwgYW55IGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbnMuXG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgRGVmYXVsdCBhbmNob3IgY29ybmVyIGFsaWdubWVudCBvZiB0b3AtbGVmdCBtZW51IHN1cmZhY2UgY29ybmVyLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QW5jaG9yQ29ybmVyID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB0aGlzLmFuY2hvckNvcm5lciA9IGNvcm5lcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZsaXAgbWVudSBjb3JuZXIgaG9yaXpvbnRhbGx5LlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZmxpcENvcm5lckhvcml6b250YWxseSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5Db3JuZXIgPSB0aGlzLm9yaWdpbkNvcm5lciBeIENvcm5lckJpdC5SSUdIVDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBtYXJnaW4gU2V0IG9mIG1hcmdpbiB2YWx1ZXMgZnJvbSBhbmNob3IuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBbmNob3JNYXJnaW4gPSBmdW5jdGlvbiAobWFyZ2luKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luLnRvcCA9IG1hcmdpbi50b3AgfHwgMDtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW4ucmlnaHQgPSBtYXJnaW4ucmlnaHQgfHwgMDtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW4uYm90dG9tID0gbWFyZ2luLmJvdHRvbSB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbi5sZWZ0ID0gbWFyZ2luLmxlZnQgfHwgMDtcbiAgICB9O1xuICAgIC8qKiBVc2VkIHRvIGluZGljYXRlIGlmIHRoZSBtZW51LXN1cmZhY2UgaXMgaG9pc3RlZCB0byB0aGUgYm9keS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldElzSG9pc3RlZCA9IGZ1bmN0aW9uIChpc0hvaXN0ZWQpIHtcbiAgICAgICAgdGhpcy5pc0hvaXN0ZWRFbGVtZW50ID0gaXNIb2lzdGVkO1xuICAgIH07XG4gICAgLyoqIFVzZWQgdG8gc2V0IHRoZSBtZW51LXN1cmZhY2UgY2FsY3VsYXRpb25zIGJhc2VkIG9uIGEgZml4ZWQgcG9zaXRpb24gbWVudS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEZpeGVkUG9zaXRpb24gPSBmdW5jdGlvbiAoaXNGaXhlZFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuaXNGaXhlZFBvc2l0aW9uID0gaXNGaXhlZFBvc2l0aW9uO1xuICAgIH07XG4gICAgLyoqIFNldHMgdGhlIG1lbnUtc3VyZmFjZSBwb3NpdGlvbiBvbiB0aGUgcGFnZS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFic29sdXRlUG9zaXRpb24gPSBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLmlzRmluaXRlKHgpID8geCA6IDA7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMuaXNGaW5pdGUoeSkgPyB5IDogMDtcbiAgICB9O1xuICAgIC8qKiBTZXRzIHdoZXRoZXIgbWVudS1zdXJmYWNlIHNob3VsZCBiZSBob3Jpem9udGFsbHkgY2VudGVyZWQgdG8gdmlld3BvcnQuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRJc0hvcml6b250YWxseUNlbnRlcmVkT25WaWV3cG9ydCA9IGZ1bmN0aW9uIChpc0NlbnRlcmVkKSB7XG4gICAgICAgIHRoaXMuaXNIb3Jpem9udGFsbHlDZW50ZXJlZE9uVmlld3BvcnQgPSBpc0NlbnRlcmVkO1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRRdWlja09wZW4gPSBmdW5jdGlvbiAocXVpY2tPcGVuKSB7XG4gICAgICAgIHRoaXMuaXNRdWlja09wZW4gPSBxdWlja09wZW47XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIG1heGltdW0gbWVudS1zdXJmYWNlIGhlaWdodCBvbiBvcGVuLlxuICAgICAqIEBwYXJhbSBtYXhIZWlnaHQgVGhlIGRlc2lyZWQgbWF4LWhlaWdodC4gU2V0IHRvIDAgKGRlZmF1bHQpIHRvXG4gICAgICogICAgIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlIG1heCBoZWlnaHQgYmFzZWQgb24gYXZhaWxhYmxlIHZpZXdwb3J0IHNwYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0TWF4SGVpZ2h0ID0gZnVuY3Rpb24gKG1heEhlaWdodCkge1xuICAgICAgICB0aGlzLm1heEhlaWdodCA9IG1heEhlaWdodDtcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaXNPcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1N1cmZhY2VPcGVuO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogT3BlbiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuaXNTdXJmYWNlT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5zYXZlRm9jdXMoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNRdWlja09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdXJmYWNlT3BlbiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXIuZ2V0SW5uZXJEaW1lbnNpb25zKCk7XG4gICAgICAgICAgICB0aGlzLmF1dG9wb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeU9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfT1BFTik7XG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvblJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5kaW1lbnNpb25zID0gX3RoaXMuYWRhcHRlci5nZXRJbm5lckRpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hdXRvcG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX09QRU4pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLm5vdGlmeU9wZW4oKTtcbiAgICAgICAgICAgICAgICB9LCBudW1iZXJzLlRSQU5TSVRJT05fT1BFTl9EVVJBVElPTik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuaXNTdXJmYWNlT3BlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENsb3NlcyB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoc2tpcFJlc3RvcmVGb2N1cykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc2tpcFJlc3RvcmVGb2N1cyA9PT0gdm9pZCAwKSB7IHNraXBSZXN0b3JlRm9jdXMgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoIXRoaXMuaXNTdXJmYWNlT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlDbG9zaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLmlzUXVpY2tPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3VyZmFjZU9wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghc2tpcFJlc3RvcmVGb2N1cykge1xuICAgICAgICAgICAgICAgIHRoaXMubWF5YmVSZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5JU19PUEVOX0JFTE9XKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlDbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfQ0xPU0VEKTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1BFTik7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLklTX09QRU5fQkVMT1cpO1xuICAgICAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkID0gMDtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19DTE9TRUQpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIubm90aWZ5Q2xvc2UoKTtcbiAgICAgICAgICAgIH0sIG51bWJlcnMuVFJBTlNJVElPTl9DTE9TRV9EVVJBVElPTik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmlzU3VyZmFjZU9wZW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKCFza2lwUmVzdG9yZUZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLm1heWJlUmVzdG9yZUZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKiBIYW5kbGUgY2xpY2tzIGFuZCBjbG9zZSBpZiBub3Qgd2l0aGluIG1lbnUtc3VyZmFjZSBlbGVtZW50LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQm9keUNsaWNrID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgZWwgPSBldnQudGFyZ2V0O1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzRWxlbWVudEluQ29udGFpbmVyKGVsKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9O1xuICAgIC8qKiBIYW5kbGUga2V5cyB0aGF0IGNsb3NlIHRoZSBzdXJmYWNlLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGtleUNvZGUgPSBldnQua2V5Q29kZSwga2V5ID0gZXZ0LmtleTtcbiAgICAgICAgdmFyIGlzRXNjYXBlID0ga2V5ID09PSAnRXNjYXBlJyB8fCBrZXlDb2RlID09PSAyNztcbiAgICAgICAgaWYgKGlzRXNjYXBlKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuYXV0b3Bvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIC8vIENvbXB1dGUgbWVhc3VyZW1lbnRzIGZvciBhdXRvcG9zaXRpb24gbWV0aG9kcyByZXVzZS5cbiAgICAgICAgdGhpcy5tZWFzdXJlbWVudHMgPSB0aGlzLmdldEF1dG9MYXlvdXRtZWFzdXJlbWVudHMoKTtcbiAgICAgICAgdmFyIGNvcm5lciA9IHRoaXMuZ2V0b3JpZ2luQ29ybmVyKCk7XG4gICAgICAgIHZhciBtYXhNZW51U3VyZmFjZUhlaWdodCA9IHRoaXMuZ2V0TWVudVN1cmZhY2VNYXhIZWlnaHQoY29ybmVyKTtcbiAgICAgICAgdmFyIHZlcnRpY2FsQWxpZ25tZW50ID0gdGhpcy5oYXNCaXQoY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKSA/ICdib3R0b20nIDogJ3RvcCc7XG4gICAgICAgIHZhciBob3Jpem9udGFsQWxpZ25tZW50ID0gdGhpcy5oYXNCaXQoY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICAgICAgdmFyIGhvcml6b250YWxPZmZzZXQgPSB0aGlzLmdldEhvcml6b250YWxPcmlnaW5PZmZzZXQoY29ybmVyKTtcbiAgICAgICAgdmFyIHZlcnRpY2FsT2Zmc2V0ID0gdGhpcy5nZXRWZXJ0aWNhbE9yaWdpbk9mZnNldChjb3JuZXIpO1xuICAgICAgICB2YXIgX2IgPSB0aGlzLm1lYXN1cmVtZW50cywgYW5jaG9yU2l6ZSA9IF9iLmFuY2hvclNpemUsIHN1cmZhY2VTaXplID0gX2Iuc3VyZmFjZVNpemU7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IChfYSA9IHt9LFxuICAgICAgICAgICAgX2FbaG9yaXpvbnRhbEFsaWdubWVudF0gPSBob3Jpem9udGFsT2Zmc2V0LFxuICAgICAgICAgICAgX2FbdmVydGljYWxBbGlnbm1lbnRdID0gdmVydGljYWxPZmZzZXQsXG4gICAgICAgICAgICBfYSk7XG4gICAgICAgIC8vIENlbnRlciBhbGlnbiB3aGVuIGFuY2hvciB3aWR0aCBpcyBjb21wYXJhYmxlIG9yIGdyZWF0ZXIgdGhhbiBtZW51IHN1cmZhY2UsIG90aGVyd2lzZSBrZWVwIGNvcm5lci5cbiAgICAgICAgaWYgKGFuY2hvclNpemUud2lkdGggLyBzdXJmYWNlU2l6ZS53aWR0aCA+IG51bWJlcnMuQU5DSE9SX1RPX01FTlVfU1VSRkFDRV9XSURUSF9SQVRJTykge1xuICAgICAgICAgICAgaG9yaXpvbnRhbEFsaWdubWVudCA9ICdjZW50ZXInO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSBtZW51LXN1cmZhY2UgaGFzIGJlZW4gaG9pc3RlZCB0byB0aGUgYm9keSwgaXQncyBubyBsb25nZXIgcmVsYXRpdmUgdG8gdGhlIGFuY2hvciBlbGVtZW50XG4gICAgICAgIGlmICh0aGlzLmlzSG9pc3RlZEVsZW1lbnQgfHwgdGhpcy5pc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudChwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFRyYW5zZm9ybU9yaWdpbihob3Jpem9udGFsQWxpZ25tZW50ICsgXCIgXCIgKyB2ZXJ0aWNhbEFsaWdubWVudCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRNYXhIZWlnaHQobWF4TWVudVN1cmZhY2VIZWlnaHQgPyBtYXhNZW51U3VyZmFjZUhlaWdodCArICdweCcgOiAnJyk7XG4gICAgICAgIC8vIElmIGl0IGlzIG9wZW5lZCBmcm9tIHRoZSB0b3AgdGhlbiBhZGQgaXMtb3Blbi1iZWxvdyBjbGFzc1xuICAgICAgICBpZiAoIXRoaXMuaGFzQml0KGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5JU19PUEVOX0JFTE9XKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBNZWFzdXJlbWVudHMgdXNlZCB0byBwb3NpdGlvbiBtZW51IHN1cmZhY2UgcG9wdXAuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRBdXRvTGF5b3V0bWVhc3VyZW1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYW5jaG9yUmVjdCA9IHRoaXMuYWRhcHRlci5nZXRBbmNob3JEaW1lbnNpb25zKCk7XG4gICAgICAgIHZhciBib2R5U2l6ZSA9IHRoaXMuYWRhcHRlci5nZXRCb2R5RGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgdmlld3BvcnRTaXplID0gdGhpcy5hZGFwdGVyLmdldFdpbmRvd0RpbWVuc2lvbnMoKTtcbiAgICAgICAgdmFyIHdpbmRvd1Njcm9sbCA9IHRoaXMuYWRhcHRlci5nZXRXaW5kb3dTY3JvbGwoKTtcbiAgICAgICAgaWYgKCFhbmNob3JSZWN0KSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgUG9zaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBtb3JlIHJlYWRhYmxlIHdoZW4gdGhleSdyZSBncm91cGVkIHRvZ2V0aGVyXG4gICAgICAgICAgICBhbmNob3JSZWN0ID0ge1xuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi54LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhbmNob3JTaXplOiBhbmNob3JSZWN0LFxuICAgICAgICAgICAgYm9keVNpemU6IGJvZHlTaXplLFxuICAgICAgICAgICAgc3VyZmFjZVNpemU6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2U6IHtcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgUG9zaXRpb25hbCBwcm9wZXJ0aWVzIGFyZSBtb3JlIHJlYWRhYmxlIHdoZW4gdGhleSdyZSBncm91cGVkIHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgdG9wOiBhbmNob3JSZWN0LnRvcCxcbiAgICAgICAgICAgICAgICByaWdodDogdmlld3BvcnRTaXplLndpZHRoIC0gYW5jaG9yUmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICBib3R0b206IHZpZXdwb3J0U2l6ZS5oZWlnaHQgLSBhbmNob3JSZWN0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICBsZWZ0OiBhbmNob3JSZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB2aWV3cG9ydFNpemU6IHZpZXdwb3J0U2l6ZSxcbiAgICAgICAgICAgIHdpbmRvd1Njcm9sbDogd2luZG93U2Nyb2xsLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ29tcHV0ZXMgdGhlIGNvcm5lciBvZiB0aGUgYW5jaG9yIGZyb20gd2hpY2ggdG8gYW5pbWF0ZSBhbmQgcG9zaXRpb24gdGhlXG4gICAgICogbWVudSBzdXJmYWNlLlxuICAgICAqXG4gICAgICogT25seSBMRUZUIG9yIFJJR0hUIGJpdCBpcyB1c2VkIHRvIHBvc2l0aW9uIHRoZSBtZW51IHN1cmZhY2UgaWdub3JpbmcgUlRMXG4gICAgICogY29udGV4dC4gRS5nLiwgbWVudSBzdXJmYWNlIHdpbGwgYmUgcG9zaXRpb25lZCBmcm9tIHJpZ2h0IHNpZGUgb24gVE9QX0VORC5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldG9yaWdpbkNvcm5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvcm5lciA9IHRoaXMub3JpZ2luQ29ybmVyO1xuICAgICAgICB2YXIgX2EgPSB0aGlzLm1lYXN1cmVtZW50cywgdmlld3BvcnREaXN0YW5jZSA9IF9hLnZpZXdwb3J0RGlzdGFuY2UsIGFuY2hvclNpemUgPSBfYS5hbmNob3JTaXplLCBzdXJmYWNlU2l6ZSA9IF9hLnN1cmZhY2VTaXplO1xuICAgICAgICB2YXIgTUFSR0lOX1RPX0VER0UgPSBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ubnVtYmVycy5NQVJHSU5fVE9fRURHRTtcbiAgICAgICAgdmFyIGlzQW5jaG9yZWRUb0JvdHRvbSA9IHRoaXMuaGFzQml0KHRoaXMuYW5jaG9yQ29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVRvcDtcbiAgICAgICAgdmFyIGF2YWlsYWJsZUJvdHRvbTtcbiAgICAgICAgaWYgKGlzQW5jaG9yZWRUb0JvdHRvbSkge1xuICAgICAgICAgICAgYXZhaWxhYmxlVG9wID1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlLnRvcCAtIE1BUkdJTl9UT19FREdFICsgdGhpcy5hbmNob3JNYXJnaW4uYm90dG9tO1xuICAgICAgICAgICAgYXZhaWxhYmxlQm90dG9tID1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlLmJvdHRvbSAtIE1BUkdJTl9UT19FREdFIC0gdGhpcy5hbmNob3JNYXJnaW4uYm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXZhaWxhYmxlVG9wID1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlLnRvcCAtIE1BUkdJTl9UT19FREdFICsgdGhpcy5hbmNob3JNYXJnaW4udG9wO1xuICAgICAgICAgICAgYXZhaWxhYmxlQm90dG9tID0gdmlld3BvcnREaXN0YW5jZS5ib3R0b20gLSBNQVJHSU5fVE9fRURHRSArXG4gICAgICAgICAgICAgICAgYW5jaG9yU2l6ZS5oZWlnaHQgLSB0aGlzLmFuY2hvck1hcmdpbi50b3A7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzQXZhaWxhYmxlQm90dG9tID0gYXZhaWxhYmxlQm90dG9tIC0gc3VyZmFjZVNpemUuaGVpZ2h0ID4gMDtcbiAgICAgICAgaWYgKCFpc0F2YWlsYWJsZUJvdHRvbSAmJiBhdmFpbGFibGVUb3AgPiBhdmFpbGFibGVCb3R0b20pIHtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBib3R0b20gc2lkZSBvZiBzdXJmYWNlIHRvIHRoZSBhbmNob3IuXG4gICAgICAgICAgICBjb3JuZXIgPSB0aGlzLnNldEJpdChjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1J0bCA9IHRoaXMuYWRhcHRlci5pc1J0bCgpO1xuICAgICAgICB2YXIgaXNGbGlwUnRsID0gdGhpcy5oYXNCaXQodGhpcy5hbmNob3JDb3JuZXIsIENvcm5lckJpdC5GTElQX1JUTCk7XG4gICAgICAgIHZhciBoYXNSaWdodEJpdCA9IHRoaXMuaGFzQml0KHRoaXMuYW5jaG9yQ29ybmVyLCBDb3JuZXJCaXQuUklHSFQpIHx8XG4gICAgICAgICAgICB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIC8vIFdoZXRoZXIgc3VyZmFjZSBhdHRhY2hlZCB0byByaWdodCBzaWRlIG9mIGFuY2hvciBlbGVtZW50LlxuICAgICAgICB2YXIgaXNBbmNob3JlZFRvUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8gQW5jaG9yZWQgdG8gc3RhcnRcbiAgICAgICAgaWYgKGlzUnRsICYmIGlzRmxpcFJ0bCkge1xuICAgICAgICAgICAgaXNBbmNob3JlZFRvUmlnaHQgPSAhaGFzUmlnaHRCaXQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBBbmNob3JlZCB0byByaWdodFxuICAgICAgICAgICAgaXNBbmNob3JlZFRvUmlnaHQgPSBoYXNSaWdodEJpdDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXZhaWxhYmxlTGVmdDtcbiAgICAgICAgdmFyIGF2YWlsYWJsZVJpZ2h0O1xuICAgICAgICBpZiAoaXNBbmNob3JlZFRvUmlnaHQpIHtcbiAgICAgICAgICAgIGF2YWlsYWJsZUxlZnQgPVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIGFuY2hvclNpemUud2lkdGggKyB0aGlzLmFuY2hvck1hcmdpbi5yaWdodDtcbiAgICAgICAgICAgIGF2YWlsYWJsZVJpZ2h0ID0gdmlld3BvcnREaXN0YW5jZS5yaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luLnJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXZhaWxhYmxlTGVmdCA9IHZpZXdwb3J0RGlzdGFuY2UubGVmdCArIHRoaXMuYW5jaG9yTWFyZ2luLmxlZnQ7XG4gICAgICAgICAgICBhdmFpbGFibGVSaWdodCA9XG4gICAgICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5yaWdodCArIGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbi5sZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc0F2YWlsYWJsZUxlZnQgPSBhdmFpbGFibGVMZWZ0IC0gc3VyZmFjZVNpemUud2lkdGggPiAwO1xuICAgICAgICB2YXIgaXNBdmFpbGFibGVSaWdodCA9IGF2YWlsYWJsZVJpZ2h0IC0gc3VyZmFjZVNpemUud2lkdGggPiAwO1xuICAgICAgICB2YXIgaXNPcmlnaW5Db3JuZXJBbGlnbmVkVG9FbmQgPSB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5GTElQX1JUTCkgJiZcbiAgICAgICAgICAgIHRoaXMuaGFzQml0KGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgaWYgKGlzQXZhaWxhYmxlUmlnaHQgJiYgaXNPcmlnaW5Db3JuZXJBbGlnbmVkVG9FbmQgJiYgaXNSdGwgfHxcbiAgICAgICAgICAgICFpc0F2YWlsYWJsZUxlZnQgJiYgaXNPcmlnaW5Db3JuZXJBbGlnbmVkVG9FbmQpIHtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBsZWZ0IHNpZGUgb2Ygc3VyZmFjZSB0byB0aGUgYW5jaG9yLlxuICAgICAgICAgICAgY29ybmVyID0gdGhpcy51bnNldEJpdChjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBdmFpbGFibGVMZWZ0ICYmIGlzQW5jaG9yZWRUb1JpZ2h0ICYmIGlzUnRsIHx8XG4gICAgICAgICAgICAoaXNBdmFpbGFibGVMZWZ0ICYmICFpc0FuY2hvcmVkVG9SaWdodCAmJiBoYXNSaWdodEJpdCkgfHxcbiAgICAgICAgICAgICghaXNBdmFpbGFibGVSaWdodCAmJiBhdmFpbGFibGVMZWZ0ID49IGF2YWlsYWJsZVJpZ2h0KSkge1xuICAgICAgICAgICAgLy8gQXR0YWNoIHJpZ2h0IHNpZGUgb2Ygc3VyZmFjZSB0byB0aGUgYW5jaG9yLlxuICAgICAgICAgICAgY29ybmVyID0gdGhpcy5zZXRCaXQoY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3JuZXI7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKiBAcmV0dXJuIE1heGltdW0gaGVpZ2h0IG9mIHRoZSBtZW51IHN1cmZhY2UsIGJhc2VkIG9uIGF2YWlsYWJsZSBzcGFjZS4gMCBpbmRpY2F0ZXMgc2hvdWxkIG5vdCBiZSBzZXQuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRNZW51U3VyZmFjZU1heEhlaWdodCA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgaWYgKHRoaXMubWF4SGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWF4SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHZhciB2aWV3cG9ydERpc3RhbmNlID0gdGhpcy5tZWFzdXJlbWVudHMudmlld3BvcnREaXN0YW5jZTtcbiAgICAgICAgdmFyIG1heEhlaWdodCA9IDA7XG4gICAgICAgIHZhciBpc0JvdHRvbUFsaWduZWQgPSB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgaXNCb3R0b21BbmNob3JlZCA9IHRoaXMuaGFzQml0KHRoaXMuYW5jaG9yQ29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIE1BUkdJTl9UT19FREdFID0gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLm51bWJlcnMuTUFSR0lOX1RPX0VER0U7XG4gICAgICAgIC8vIFdoZW4gbWF4aW11bSBoZWlnaHQgaXMgbm90IHNwZWNpZmllZCwgaXQgaXMgaGFuZGxlZCBmcm9tIENTUy5cbiAgICAgICAgaWYgKGlzQm90dG9tQWxpZ25lZCkge1xuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gdmlld3BvcnREaXN0YW5jZS50b3AgKyB0aGlzLmFuY2hvck1hcmdpbi50b3AgLSBNQVJHSU5fVE9fRURHRTtcbiAgICAgICAgICAgIGlmICghaXNCb3R0b21BbmNob3JlZCkge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCArPSB0aGlzLm1lYXN1cmVtZW50cy5hbmNob3JTaXplLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1heEhlaWdodCA9IHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tIC0gdGhpcy5hbmNob3JNYXJnaW4uYm90dG9tICtcbiAgICAgICAgICAgICAgICB0aGlzLm1lYXN1cmVtZW50cy5hbmNob3JTaXplLmhlaWdodCAtIE1BUkdJTl9UT19FREdFO1xuICAgICAgICAgICAgaWYgKGlzQm90dG9tQW5jaG9yZWQpIHtcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQgLT0gdGhpcy5tZWFzdXJlbWVudHMuYW5jaG9yU2l6ZS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1heEhlaWdodDtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqIEByZXR1cm4gSG9yaXpvbnRhbCBvZmZzZXQgb2YgbWVudSBzdXJmYWNlIG9yaWdpbiBjb3JuZXIgZnJvbSBjb3JyZXNwb25kaW5nIGFuY2hvciBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRIb3Jpem9udGFsT3JpZ2luT2Zmc2V0ID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB2YXIgYW5jaG9yU2l6ZSA9IHRoaXMubWVhc3VyZW1lbnRzLmFuY2hvclNpemU7XG4gICAgICAgIC8vIGlzUmlnaHRBbGlnbmVkIGNvcnJlc3BvbmRzIHRvIHVzaW5nIHRoZSAncmlnaHQnIHByb3BlcnR5IG9uIHRoZSBzdXJmYWNlLlxuICAgICAgICB2YXIgaXNSaWdodEFsaWduZWQgPSB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIHZhciBhdm9pZEhvcml6b250YWxPdmVybGFwID0gdGhpcy5oYXNCaXQodGhpcy5hbmNob3JDb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIGlmIChpc1JpZ2h0QWxpZ25lZCkge1xuICAgICAgICAgICAgdmFyIHJpZ2h0T2Zmc2V0ID0gYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA/XG4gICAgICAgICAgICAgICAgYW5jaG9yU2l6ZS53aWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luLmxlZnQgOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luLnJpZ2h0O1xuICAgICAgICAgICAgLy8gRm9yIGhvaXN0ZWQgb3IgZml4ZWQgZWxlbWVudHMsIGFkanVzdCB0aGUgb2Zmc2V0IGJ5IHRoZSBkaWZmZXJlbmNlXG4gICAgICAgICAgICAvLyBiZXR3ZWVuIHZpZXdwb3J0IHdpZHRoIGFuZCBib2R5IHdpZHRoIHNvIHdoZW4gd2UgY2FsY3VsYXRlIHRoZSByaWdodFxuICAgICAgICAgICAgLy8gdmFsdWUgKGBhZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50YCkgYmFzZWQgb24gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIHBvc2l0aW9uLCB0aGUgcmlnaHQgcHJvcGVydHkgaXMgY29ycmVjdC5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG9pc3RlZEVsZW1lbnQgfHwgdGhpcy5pc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmlnaHRPZmZzZXQgLVxuICAgICAgICAgICAgICAgICAgICAodGhpcy5tZWFzdXJlbWVudHMudmlld3BvcnRTaXplLndpZHRoIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnRzLmJvZHlTaXplLndpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByaWdodE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXZvaWRIb3Jpem9udGFsT3ZlcmxhcCA/IGFuY2hvclNpemUud2lkdGggLSB0aGlzLmFuY2hvck1hcmdpbi5yaWdodCA6XG4gICAgICAgICAgICB0aGlzLmFuY2hvck1hcmdpbi5sZWZ0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBPcmlnaW4gY29ybmVyIG9mIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICogQHJldHVybiBWZXJ0aWNhbCBvZmZzZXQgb2YgbWVudSBzdXJmYWNlIG9yaWdpbiBjb3JuZXIgZnJvbSBjb3JyZXNwb25kaW5nIGFuY2hvciBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRWZXJ0aWNhbE9yaWdpbk9mZnNldCA9IGZ1bmN0aW9uIChjb3JuZXIpIHtcbiAgICAgICAgdmFyIGFuY2hvclNpemUgPSB0aGlzLm1lYXN1cmVtZW50cy5hbmNob3JTaXplO1xuICAgICAgICB2YXIgaXNCb3R0b21BbGlnbmVkID0gdGhpcy5oYXNCaXQoY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKTtcbiAgICAgICAgdmFyIGF2b2lkVmVydGljYWxPdmVybGFwID0gdGhpcy5oYXNCaXQodGhpcy5hbmNob3JDb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgIGlmIChpc0JvdHRvbUFsaWduZWQpIHtcbiAgICAgICAgICAgIHkgPSBhdm9pZFZlcnRpY2FsT3ZlcmxhcCA/IGFuY2hvclNpemUuaGVpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW4udG9wIDpcbiAgICAgICAgICAgICAgICAtdGhpcy5hbmNob3JNYXJnaW4uYm90dG9tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgeSA9IGF2b2lkVmVydGljYWxPdmVybGFwID9cbiAgICAgICAgICAgICAgICAoYW5jaG9yU2l6ZS5oZWlnaHQgKyB0aGlzLmFuY2hvck1hcmdpbi5ib3R0b20pIDpcbiAgICAgICAgICAgICAgICB0aGlzLmFuY2hvck1hcmdpbi50b3A7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHk7XG4gICAgfTtcbiAgICAvKiogQ2FsY3VsYXRlcyB0aGUgb2Zmc2V0cyBmb3IgcG9zaXRpb25pbmcgdGhlIG1lbnUtc3VyZmFjZSB3aGVuIHRoZSBtZW51LXN1cmZhY2UgaGFzIGJlZW4gaG9pc3RlZCB0byB0aGUgYm9keS4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmFkanVzdFBvc2l0aW9uRm9ySG9pc3RlZEVsZW1lbnQgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHZhciBfYiA9IHRoaXMubWVhc3VyZW1lbnRzLCB3aW5kb3dTY3JvbGwgPSBfYi53aW5kb3dTY3JvbGwsIHZpZXdwb3J0RGlzdGFuY2UgPSBfYi52aWV3cG9ydERpc3RhbmNlLCBzdXJmYWNlU2l6ZSA9IF9iLnN1cmZhY2VTaXplLCB2aWV3cG9ydFNpemUgPSBfYi52aWV3cG9ydFNpemU7XG4gICAgICAgIHZhciBwcm9wcyA9IE9iamVjdC5rZXlzKHBvc2l0aW9uKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIHByb3BzXzEgPSBfX3ZhbHVlcyhwcm9wcyksIHByb3BzXzFfMSA9IHByb3BzXzEubmV4dCgpOyAhcHJvcHNfMV8xLmRvbmU7IHByb3BzXzFfMSA9IHByb3BzXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHByb3AgPSBwcm9wc18xXzEudmFsdWU7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcG9zaXRpb25bcHJvcF0gfHwgMDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hvcml6b250YWxseUNlbnRlcmVkT25WaWV3cG9ydCAmJlxuICAgICAgICAgICAgICAgICAgICAocHJvcCA9PT0gJ2xlZnQnIHx8IHByb3AgPT09ICdyaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uW3Byb3BdID0gKHZpZXdwb3J0U2l6ZS53aWR0aCAtIHN1cmZhY2VTaXplLndpZHRoKSAvIDI7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBIb2lzdGVkIHN1cmZhY2VzIG5lZWQgdG8gaGF2ZSB0aGUgYW5jaG9yIGVsZW1lbnRzIGxvY2F0aW9uIG9uIHRoZSBwYWdlIGFkZGVkIHRvIHRoZVxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uIHByb3BlcnRpZXMgZm9yIHByb3BlciBhbGlnbm1lbnQgb24gdGhlIGJvZHkuXG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gdmlld3BvcnREaXN0YW5jZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAvLyBTdXJmYWNlcyB0aGF0IGFyZSBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQgbmVlZCB0byBoYXZlIGFkZGl0aW9uYWwgY2FsY3VsYXRpb25zIGZvciBzY3JvbGxcbiAgICAgICAgICAgICAgICAvLyBhbmQgYm90dG9tIHBvc2l0aW9uaW5nLlxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB3aW5kb3dTY3JvbGwueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gd2luZG93U2Nyb2xsLnk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocHJvcCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSArPSB3aW5kb3dTY3JvbGwueDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHsgLy8gcHJvcCA9PT0gJ3JpZ2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgLT0gd2luZG93U2Nyb2xsLng7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcG9zaXRpb25bcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzXzFfMSAmJiAhcHJvcHNfMV8xLmRvbmUgJiYgKF9hID0gcHJvcHNfMS5yZXR1cm4pKSBfYS5jYWxsKHByb3BzXzEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUaGUgbGFzdCBmb2N1c2VkIGVsZW1lbnQgd2hlbiB0aGUgbWVudSBzdXJmYWNlIHdhcyBvcGVuZWQgc2hvdWxkIHJlZ2FpbiBmb2N1cywgaWYgdGhlIHVzZXIgaXNcbiAgICAgKiBmb2N1c2VkIG9uIG9yIHdpdGhpbiB0aGUgbWVudSBzdXJmYWNlIHdoZW4gaXQgaXMgY2xvc2VkLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUubWF5YmVSZXN0b3JlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc1Jvb3RGb2N1c2VkID0gdGhpcy5hZGFwdGVyLmlzRm9jdXNlZCgpO1xuICAgICAgICB2YXIgY2hpbGRIYXNGb2N1cyA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiZcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5pc0VsZW1lbnRJbkNvbnRhaW5lcihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICAgICAgaWYgKGlzUm9vdEZvY3VzZWQgfHwgY2hpbGRIYXNGb2N1cykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlc3RvcmVGb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhc0JpdCA9IGZ1bmN0aW9uIChjb3JuZXIsIGJpdCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihjb3JuZXIgJiBiaXQpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWJpdHdpc2VcbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Qml0ID0gZnVuY3Rpb24gKGNvcm5lciwgYml0KSB7XG4gICAgICAgIHJldHVybiBjb3JuZXIgfCBiaXQ7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYml0d2lzZVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS51bnNldEJpdCA9IGZ1bmN0aW9uIChjb3JuZXIsIGJpdCkge1xuICAgICAgICByZXR1cm4gY29ybmVyIF4gYml0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogaXNGaW5pdGUgdGhhdCBkb2Vzbid0IGZvcmNlIGNvbnZlcnNpb24gdG8gbnVtYmVyIHR5cGUuXG4gICAgICogRXF1aXZhbGVudCB0byBOdW1iZXIuaXNGaW5pdGUgaW4gRVMyMDE1LCB3aGljaCBpcyBub3Qgc3VwcG9ydGVkIGluIElFLlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaXNGaW5pdGUgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShudW0pO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NQcm9wZXJ0eU5hbWVNYXAgPSB7XG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIHByZWZpeGVkOiAnLXdlYmtpdC1hbmltYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbicsXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zZm9ybScsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNmb3JtJyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb24nLFxuICAgIH0sXG59O1xudmFyIGpzRXZlbnRUeXBlTWFwID0ge1xuICAgIGFuaW1hdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICdhbmltYXRpb25lbmQnLFxuICAgIH0sXG4gICAgYW5pbWF0aW9uaXRlcmF0aW9uOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgfSxcbiAgICBhbmltYXRpb25zdGFydDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICd0cmFuc2l0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzV2luZG93KHdpbmRvd09iaikge1xuICAgIHJldHVybiBCb29sZWFuKHdpbmRvd09iai5kb2N1bWVudCkgJiYgdHlwZW9mIHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93T2JqLCBjc3NQcm9wZXJ0eSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGNzc1Byb3BlcnR5IGluIGNzc1Byb3BlcnR5TmFtZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGNzc1Byb3BlcnR5TmFtZU1hcFtjc3NQcm9wZXJ0eV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQ7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gc3RhbmRhcmQgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGNzc1Byb3BlcnR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgICBpZiAoaXNXaW5kb3cod2luZG93T2JqKSAmJiBldmVudFR5cGUgaW4ganNFdmVudFR5cGVNYXApIHtcbiAgICAgICAgdmFyIGVsID0gd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgX2EgPSBqc0V2ZW50VHlwZU1hcFtldmVudFR5cGVdLCBzdGFuZGFyZCA9IF9hLnN0YW5kYXJkLCBwcmVmaXhlZCA9IF9hLnByZWZpeGVkLCBjc3NQcm9wZXJ0eSA9IF9hLmNzc1Byb3BlcnR5O1xuICAgICAgICB2YXIgaXNTdGFuZGFyZCA9IGNzc1Byb3BlcnR5IGluIGVsLnN0eWxlO1xuICAgICAgICByZXR1cm4gaXNTdGFuZGFyZCA/IHN0YW5kYXJkIDogcHJlZml4ZWQ7XG4gICAgfVxuICAgIHJldHVybiBldmVudFR5cGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTUVOVV9TRUxFQ1RFRF9MSVNUX0lURU06ICdtZGMtbWVudS1pdGVtLS1zZWxlY3RlZCcsXG4gICAgTUVOVV9TRUxFQ1RJT05fR1JPVVA6ICdtZGMtbWVudV9fc2VsZWN0aW9uLWdyb3VwJyxcbiAgICBST09UOiAnbWRjLW1lbnUnLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfQ0hFQ0tFRF9BVFRSOiAnYXJpYS1jaGVja2VkJyxcbiAgICBBUklBX0RJU0FCTEVEX0FUVFI6ICdhcmlhLWRpc2FibGVkJyxcbiAgICBDSEVDS0JPWF9TRUxFQ1RPUjogJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScsXG4gICAgTElTVF9TRUxFQ1RPUjogJy5tZGMtbGlzdCwubWRjLWRlcHJlY2F0ZWQtbGlzdCcsXG4gICAgU0VMRUNURURfRVZFTlQ6ICdNRENNZW51OnNlbGVjdGVkJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBGT0NVU19ST09UX0lOREVYOiAtMSxcbn07XG52YXIgRGVmYXVsdEZvY3VzU3RhdGU7XG4oZnVuY3Rpb24gKERlZmF1bHRGb2N1c1N0YXRlKSB7XG4gICAgRGVmYXVsdEZvY3VzU3RhdGVbRGVmYXVsdEZvY3VzU3RhdGVbXCJOT05FXCJdID0gMF0gPSBcIk5PTkVcIjtcbiAgICBEZWZhdWx0Rm9jdXNTdGF0ZVtEZWZhdWx0Rm9jdXNTdGF0ZVtcIkxJU1RfUk9PVFwiXSA9IDFdID0gXCJMSVNUX1JPT1RcIjtcbiAgICBEZWZhdWx0Rm9jdXNTdGF0ZVtEZWZhdWx0Rm9jdXNTdGF0ZVtcIkZJUlNUX0lURU1cIl0gPSAyXSA9IFwiRklSU1RfSVRFTVwiO1xuICAgIERlZmF1bHRGb2N1c1N0YXRlW0RlZmF1bHRGb2N1c1N0YXRlW1wiTEFTVF9JVEVNXCJdID0gM10gPSBcIkxBU1RfSVRFTVwiO1xufSkoRGVmYXVsdEZvY3VzU3RhdGUgfHwgKERlZmF1bHRGb2N1c1N0YXRlID0ge30pKTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIERlZmF1bHRGb2N1c1N0YXRlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzIGFzIGxpc3RDc3NDbGFzc2VzIH0gZnJvbSAnQG1hdGVyaWFsL2xpc3QvY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBEZWZhdWx0Rm9jdXNTdGF0ZSwgbnVtYmVycywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENNZW51Rm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDTWVudUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTWVudUZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDTWVudUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IDA7XG4gICAgICAgIF90aGlzLmRlZmF1bHRGb2N1c1N0YXRlXyA9IERlZmF1bHRGb2N1c1N0YXRlLkxJU1RfUk9PVDtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogQHNlZSB7QGxpbmsgTURDTWVudUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzc1RvRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyaWJ1dGVGcm9tRWxlbWVudEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBlbGVtZW50Q29udGFpbnNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgY2xvc2VTdXJmYWNlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0RWxlbWVudEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlTZWxlY3RlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldE1lbnVJdGVtQ291bnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNJdGVtQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzTGlzdFJvb3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTZWxlY3RlZFNpYmxpbmdPZkl0ZW1BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGVJdGVtQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIuY2xvc2VTdXJmYWNlKCk7XG4gICAgfTtcbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5ZG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGtleSA9IGV2dC5rZXksIGtleUNvZGUgPSBldnQua2V5Q29kZTtcbiAgICAgICAgdmFyIGlzVGFiID0ga2V5ID09PSAnVGFiJyB8fCBrZXlDb2RlID09PSA5O1xuICAgICAgICBpZiAoaXNUYWIpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5jbG9zZVN1cmZhY2UoLyoqIHNraXBSZXN0b3JlRm9jdXMgKi8gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJdGVtQWN0aW9uID0gZnVuY3Rpb24gKGxpc3RJdGVtKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWRhcHRlci5nZXRFbGVtZW50SW5kZXgobGlzdEl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeVNlbGVjdGVkKHsgaW5kZXg6IGluZGV4IH0pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuY2xvc2VTdXJmYWNlKCk7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBtZW51IHRvIGNsb3NlIGJlZm9yZSBhZGRpbmcvcmVtb3ZpbmcgY2xhc3NlcyB0aGF0IGFmZmVjdCBzdHlsZXMuXG4gICAgICAgIHRoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVjb21wdXRlIHRoZSBpbmRleCBpbiBjYXNlIHRoZSBtZW51IGNvbnRlbnRzIGhhdmUgY2hhbmdlZC5cbiAgICAgICAgICAgIHZhciByZWNvbXB1dGVkSW5kZXggPSBfdGhpcy5hZGFwdGVyLmdldEVsZW1lbnRJbmRleChsaXN0SXRlbSk7XG4gICAgICAgICAgICBpZiAocmVjb21wdXRlZEluZGV4ID49IDAgJiZcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmlzU2VsZWN0YWJsZUl0ZW1BdEluZGV4KHJlY29tcHV0ZWRJbmRleCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRTZWxlY3RlZEluZGV4KHJlY29tcHV0ZWRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5udW1iZXJzLlRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT04pO1xuICAgIH07XG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZU1lbnVTdXJmYWNlT3BlbmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZGVmYXVsdEZvY3VzU3RhdGVfKSB7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLkZJUlNUX0lURU06XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZvY3VzSXRlbUF0SW5kZXgoMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLkxBU1RfSVRFTTpcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZm9jdXNJdGVtQXRJbmRleCh0aGlzLmFkYXB0ZXIuZ2V0TWVudUl0ZW1Db3VudCgpIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERlZmF1bHRGb2N1c1N0YXRlLk5PTkU6XG4gICAgICAgICAgICAgICAgLy8gRG8gbm90aGluZy5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZvY3VzTGlzdFJvb3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBkZWZhdWx0IGZvY3VzIHN0YXRlIHdoZXJlIHRoZSBtZW51IHNob3VsZCBmb2N1cyBldmVyeSB0aW1lIHdoZW4gbWVudVxuICAgICAqIGlzIG9wZW5lZC4gRm9jdXNlcyB0aGUgbGlzdCByb290IChgRGVmYXVsdEZvY3VzU3RhdGUuTElTVF9ST09UYCkgZWxlbWVudCBieVxuICAgICAqIGRlZmF1bHQuXG4gICAgICovXG4gICAgTURDTWVudUZvdW5kYXRpb24ucHJvdG90eXBlLnNldERlZmF1bHRGb2N1c1N0YXRlID0gZnVuY3Rpb24gKGZvY3VzU3RhdGUpIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0Rm9jdXNTdGF0ZV8gPSBmb2N1c1N0YXRlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgbGlzdCBpdGVtIGF0IGBpbmRleGAgd2l0aGluIHRoZSBtZW51LlxuICAgICAqIEBwYXJhbSBpbmRleCBJbmRleCBvZiBsaXN0IGl0ZW0gd2l0aGluIHRoZSBtZW51LlxuICAgICAqL1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVkSW5kZXhfKGluZGV4KTtcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIuaXNTZWxlY3RhYmxlSXRlbUF0SW5kZXgoaW5kZXgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ01lbnVGb3VuZGF0aW9uOiBObyBzZWxlY3Rpb24gZ3JvdXAgYXQgc3BlY2lmaWVkIGluZGV4LicpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2U2VsZWN0ZWRJbmRleCA9IHRoaXMuYWRhcHRlci5nZXRTZWxlY3RlZFNpYmxpbmdPZkl0ZW1BdEluZGV4KGluZGV4KTtcbiAgICAgICAgaWYgKHByZXZTZWxlY3RlZEluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVBdHRyaWJ1dGVGcm9tRWxlbWVudEF0SW5kZXgocHJldlNlbGVjdGVkSW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4KHByZXZTZWxlY3RlZEluZGV4LCBjc3NDbGFzc2VzLk1FTlVfU0VMRUNURURfTElTVF9JVEVNKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3NUb0VsZW1lbnRBdEluZGV4KGluZGV4LCBjc3NDbGFzc2VzLk1FTlVfU0VMRUNURURfTElTVF9JVEVNKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9DSEVDS0VEX0FUVFIsICd0cnVlJyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbmFibGVkIHN0YXRlIHRvIGlzRW5hYmxlZCBmb3IgdGhlIG1lbnUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXguXG4gICAgICogQHBhcmFtIGluZGV4IEluZGV4IG9mIHRoZSBtZW51IGl0ZW1cbiAgICAgKiBAcGFyYW0gaXNFbmFibGVkIFRoZSBkZXNpcmVkIGVuYWJsZWQgc3RhdGUgb2YgdGhlIG1lbnUgaXRlbS5cbiAgICAgKi9cbiAgICBNRENNZW51Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RW5hYmxlZCA9IGZ1bmN0aW9uIChpbmRleCwgaXNFbmFibGVkKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGVkSW5kZXhfKGluZGV4KTtcbiAgICAgICAgaWYgKGlzRW5hYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnRBdEluZGV4KGluZGV4LCBsaXN0Q3NzQ2xhc3Nlcy5MSVNUX0lURU1fRElTQUJMRURfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9ESVNBQkxFRF9BVFRSLCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzc1RvRWxlbWVudEF0SW5kZXgoaW5kZXgsIGxpc3RDc3NDbGFzc2VzLkxJU1RfSVRFTV9ESVNBQkxFRF9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQXR0cmlidXRlVG9FbGVtZW50QXRJbmRleChpbmRleCwgc3RyaW5ncy5BUklBX0RJU0FCTEVEX0FUVFIsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVGb3VuZGF0aW9uLnByb3RvdHlwZS52YWxpZGF0ZWRJbmRleF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIG1lbnVTaXplID0gdGhpcy5hZGFwdGVyLmdldE1lbnVJdGVtQ291bnQoKTtcbiAgICAgICAgdmFyIGlzSW5kZXhJblJhbmdlID0gaW5kZXggPj0gMCAmJiBpbmRleCA8IG1lbnVTaXplO1xuICAgICAgICBpZiAoIWlzSW5kZXhJblJhbmdlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01EQ01lbnVGb3VuZGF0aW9uOiBObyBsaXN0IGl0ZW0gYXQgc3BlY2lmaWVkIGluZGV4LicpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ01lbnVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTWVudUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsImltcG9ydCB7XG4gIGJ1YmJsZSxcbiAgbGlzdGVuLFxuICBwcmV2ZW50X2RlZmF1bHQsXG4gIHN0b3BfcHJvcGFnYXRpb24sXG59IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG5cbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBET00gZXZlbnRzLlxuY29uc3Qgb2xkTW9kaWZpZXJSZWdleCA9IC9eW2Etel0rKD86Oig/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBvdGhlciBldmVudHMuXG5jb25zdCBuZXdNb2RpZmllclJlZ2V4ID0gL15bXiRdKyg/OlxcJCg/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFdmVudHNCdWlsZGVyKGNvbXBvbmVudCkge1xuICAvLyBUaGlzIGlzIG91ciBwc2V1ZG8gJG9uIGZ1bmN0aW9uLiBJdCBpcyBkZWZpbmVkIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgbGV0ICRvbjtcbiAgLy8gVGhpcyBpcyBhIGxpc3Qgb2YgZXZlbnRzIGJvdW5kIGJlZm9yZSBtb3VudC5cbiAgbGV0IGV2ZW50cyA9IFtdO1xuICAvLyBUaGlzIGlzIHRoZSBvcmlnaW5hbCBjb21wb25lbnQgJG9uIGZ1bmN0aW9uLlxuICBjb25zdCBjb21wb25lbnRPbiA9IGNvbXBvbmVudC4kb247XG5cbiAgLy8gQW5kIHdlIG92ZXJyaWRlIHRoZSAkb24gZnVuY3Rpb24gdG8gZm9yd2FyZCBhbGwgYm91bmQgZXZlbnRzLlxuICBjb21wb25lbnQuJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgbGV0IGRlc3RydWN0b3IgPSAoKSA9PiB7fTtcbiAgICBpZiAoJG9uKSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICBkZXN0cnVjdG9yID0gJG9uKGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIGJlZm9yZSBtb3VudCBieSBTdmVsdGUuXG4gICAgICBldmVudHMucHVzaChbZXZlbnRUeXBlLCBjYWxsYmFja10pO1xuICAgIH1cbiAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcblxuICAgIGlmIChvbGRNb2RpZmllck1hdGNoICYmIGNvbnNvbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ0V2ZW50IG1vZGlmaWVycyBpbiBTTVVJIG5vdyB1c2UgXCIkXCIgaW5zdGVhZCBvZiBcIjpcIiwgc28gdGhhdCBhbGwgZXZlbnRzIGNhbiBiZSBib3VuZCB3aXRoIG1vZGlmaWVycy4gUGxlYXNlIHVwZGF0ZSB5b3VyIGV2ZW50IGJpbmRpbmc6ICcsXG4gICAgICAgIGV2ZW50VHlwZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgLy8gUmVtb3ZlIG1vZGlmaWVycyBmcm9tIHRoZSByZWFsIGV2ZW50LlxuICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkb24gZnVuY3Rpb24uXG4gICAgY29uc3QgY29tcG9uZW50RGVzdHJ1Y3RvciA9IGNvbXBvbmVudE9uLmNhbGwoXG4gICAgICBjb21wb25lbnQsXG4gICAgICBldmVudFR5cGUsXG4gICAgICBjYWxsYmFja1xuICAgICk7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGRlc3RydWN0b3IoKTtcbiAgICAgIHJldHVybiBjb21wb25lbnREZXN0cnVjdG9yKC4uLmFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChlKSB7XG4gICAgLy8gSW50ZXJuYWxseSBidWJibGUgdGhlIGV2ZW50IHVwIGZyb20gU3ZlbHRlIGNvbXBvbmVudHMuXG4gICAgYnViYmxlKGNvbXBvbmVudCwgZSk7XG4gIH1cblxuICByZXR1cm4gKG5vZGUpID0+IHtcbiAgICBjb25zdCBkZXN0cnVjdG9ycyA9IFtdO1xuICAgIGNvbnN0IGZvcndhcmREZXN0cnVjdG9ycyA9IHt9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgZm9yd2FyZGluZyBhbGwgYm91bmQgZXZlbnRzLlxuICAgICRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgICBsZXQgaGFuZGxlciA9IGNhbGxiYWNrO1xuICAgICAgLy8gRE9NIGFkZEV2ZW50TGlzdGVuZXIgb3B0aW9ucyBhcmd1bWVudC5cbiAgICAgIGxldCBvcHRpb25zID0gZmFsc2U7XG4gICAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG4gICAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgICAvLyBQYXJzZSB0aGUgZXZlbnQgbW9kaWZpZXJzLlxuICAgICAgICAvLyBTdXBwb3J0ZWQgbW9kaWZpZXJzOlxuICAgICAgICAvLyAtIHByZXZlbnREZWZhdWx0XG4gICAgICAgIC8vIC0gc3RvcFByb3BhZ2F0aW9uXG4gICAgICAgIC8vIC0gcGFzc2l2ZVxuICAgICAgICAvLyAtIG5vbnBhc3NpdmVcbiAgICAgICAgLy8gLSBjYXB0dXJlXG4gICAgICAgIC8vIC0gb25jZVxuICAgICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuZnJvbUVudHJpZXMocGFydHMuc2xpY2UoMSkubWFwKChtb2QpID0+IFttb2QsIHRydWVdKSk7XG4gICAgICAgIGlmIChvcHRpb25zLm5vbnBhc3NpdmUpIHtcbiAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5ub25wYXNzaXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgaGFuZGxlciA9IHByZXZlbnRfZGVmYXVsdChoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcF9wcm9wYWdhdGlvbihoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5zdG9wUHJvcGFnYXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTGlzdGVuIGZvciB0aGUgZXZlbnQgZGlyZWN0bHksIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAgICBjb25zdCBvZmYgPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IGRlc3RydWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIG9mZigpO1xuICAgICAgICBjb25zdCBpZHggPSBkZXN0cnVjdG9ycy5pbmRleE9mKGRlc3RydWN0b3IpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICBkZXN0cnVjdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZGVzdHJ1Y3RvcnMucHVzaChkZXN0cnVjdG9yKTtcblxuICAgICAgLy8gRm9yd2FyZCB0aGUgZXZlbnQgZnJvbSBTdmVsdGUuXG4gICAgICBpZiAoIWV2ZW50VHlwZSBpbiBmb3J3YXJkRGVzdHJ1Y3RvcnMpIHtcbiAgICAgICAgZm9yd2FyZERlc3RydWN0b3JzW2V2ZW50VHlwZV0gPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBmb3J3YXJkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc3RydWN0b3I7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBMaXN0ZW4gdG8gYWxsIHRoZSBldmVudHMgYWRkZWQgYmVmb3JlIG1vdW50LlxuICAgICAgJG9uKGV2ZW50c1tpXVswXSwgZXZlbnRzW2ldWzFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0cnVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRlc3RydWN0b3JzW2ldKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGZvcndhcmRlcnMuXG4gICAgICAgIGZvciAobGV0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKGZvcndhcmREZXN0cnVjdG9ycykpIHtcbiAgICAgICAgICBlbnRyeVsxXSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xhc3NNYXAoY2xhc3NPYmopIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqKVxuICAgIC5maWx0ZXIoKFtuYW1lLCB2YWx1ZV0pID0+IG5hbWUgIT09ICcnICYmIHZhbHVlKVxuICAgIC5tYXAoKFtuYW1lXSkgPT4gbmFtZSlcbiAgICAuam9pbignICcpO1xufVxuIiwiPHN2ZWx0ZTpjb21wb25lbnRcbiAgdGhpcz17Y29tcG9uZW50fVxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZT17W2ZvcndhcmRFdmVudHMsIC4uLnVzZV19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgW3NtdWlDbGFzc106IHRydWUsXG4gICAgLi4uc211aUNsYXNzTWFwLFxuICB9KX1cbiAgey4uLnByb3BzfVxuICB7Li4uJCRyZXN0UHJvcHN9PjxzbG90IC8+PC9zdmVsdGU6Y29tcG9uZW50XG4+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgY29uc3QgaW50ZXJuYWxzID0ge1xuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBjbGFzczogJycsXG4gICAgLy8gVGhlIGNsYXNzIG1hcCBtYXBzIGNsYXNzZXMgdG8gY29udGV4dHMuIFRoZSBjb250ZXh0XG4gICAgLy8gc2hvdWxkIHJlc29sdmUgdG8gYSBTdmVsdGUgc3RvcmUsIGFuZCB0aGUgY2xhc3NcbiAgICAvLyB3aWxsIGJlIGFkZGVkIGlmIHRoZSBTdmVsdGUgc3RvcmUncyB2YWx1ZSBpcyB0cnVlLlxuICAgIGNsYXNzTWFwOiB7fSxcbiAgICBjb250ZXh0czoge30sXG4gICAgcHJvcHM6IHt9LFxuICB9O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uRGVzdHJveSwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyIH0gZnJvbSAnLi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyc7XG4gIGltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnLi9jbGFzc01hcC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcblxuICBsZXQgZWxlbWVudDtcbiAgY29uc3Qgc211aUNsYXNzID0gaW50ZXJuYWxzLmNsYXNzO1xuICBjb25zdCBzbXVpQ2xhc3NNYXAgPSB7fTtcbiAgY29uc3Qgc211aUNsYXNzVW5zdWJzY3JpYmVzID0gW107XG4gIGNvbnN0IGNvbnRleHRzID0gaW50ZXJuYWxzLmNvbnRleHRzO1xuICBjb25zdCBwcm9wcyA9IGludGVybmFscy5wcm9wcztcblxuICBleHBvcnQgbGV0IGNvbXBvbmVudCA9IGludGVybmFscy5jb21wb25lbnQ7XG5cbiAgT2JqZWN0LmVudHJpZXMoaW50ZXJuYWxzLmNsYXNzTWFwKS5mb3JFYWNoKChbbmFtZSwgY29udGV4dF0pID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IGdldENvbnRleHQoY29udGV4dCk7XG5cbiAgICBpZiAoc3RvcmUgJiYgJ3N1YnNjcmliZScgaW4gc3RvcmUpIHtcbiAgICAgIHNtdWlDbGFzc1Vuc3Vic2NyaWJlcy5wdXNoKFxuICAgICAgICBzdG9yZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc211aUNsYXNzTWFwW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBmb3IgKGxldCBjb250ZXh0IGluIGNvbnRleHRzKSB7XG4gICAgaWYgKGNvbnRleHRzLmhhc093blByb3BlcnR5KGNvbnRleHQpKSB7XG4gICAgICBzZXRDb250ZXh0KGNvbnRleHQsIGNvbnRleHRzW2NvbnRleHRdKTtcbiAgICB9XG4gIH1cblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGZvciAoY29uc3QgdW5zdWJzY3JpYmUgb2Ygc211aUNsYXNzVW5zdWJzY3JpYmVzKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsImltcG9ydCBDbGFzc0FkZGVyLCB7IGludGVybmFscyB9IGZyb20gJy4vQ2xhc3NBZGRlci5zdmVsdGUnO1xuXG5jb25zdCBkZWZhdWx0cyA9IHsgLi4uaW50ZXJuYWxzIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc0FkZGVyQnVpbGRlcihwcm9wcykge1xuICBmdW5jdGlvbiBDb21wb25lbnQoLi4uYXJncykge1xuICAgIE9iamVjdC5hc3NpZ24oaW50ZXJuYWxzLCBkZWZhdWx0cywgcHJvcHMpO1xuICAgIHJldHVybiBuZXcgQ2xhc3NBZGRlciguLi5hcmdzKTtcbiAgfVxuXG4gIENvbXBvbmVudC5wcm90b3R5cGUgPSBDbGFzc0FkZGVyO1xuXG4gIC8vIFNTUiBzdXBwb3J0XG4gIGlmIChDbGFzc0FkZGVyLiQkcmVuZGVyKSB7XG4gICAgQ29tcG9uZW50LiQkcmVuZGVyID0gKC4uLmFyZ3MpID0+XG4gICAgICBPYmplY3QuYXNzaWduKGludGVybmFscywgZGVmYXVsdHMsIHByb3BzKSAmJiBDbGFzc0FkZGVyLiQkcmVuZGVyKC4uLmFyZ3MpO1xuICB9XG4gIGlmIChDbGFzc0FkZGVyLnJlbmRlcikge1xuICAgIENvbXBvbmVudC5yZW5kZXIgPSAoLi4uYXJncykgPT5cbiAgICAgIE9iamVjdC5hc3NpZ24oaW50ZXJuYWxzLCBkZWZhdWx0cywgcHJvcHMpICYmIENsYXNzQWRkZXIucmVuZGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaChcbiAgZWxlbWVudCxcbiAgZXZlbnRUeXBlLFxuICBkZXRhaWwgPSB7fSxcbiAgZXZlbnRJbml0ID0geyBidWJibGVzOiB0cnVlIH1cbikge1xuICBpZiAodHlwZW9mIEV2ZW50ICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnRUeXBlLCBldmVudEluaXQpO1xuICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbDtcbiAgICBjb25zdCBlbCA9ICdnZXRFbGVtZW50JyBpbiBlbGVtZW50ID8gZWxlbWVudC5nZXRFbGVtZW50KCkgOiBlbGVtZW50O1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbnMobm9kZSwgYWN0aW9ucykge1xuICBsZXQgb2JqZWN0cyA9IFtdO1xuXG4gIGlmIChhY3Rpb25zKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGlzQXJyYXkgPyBhY3Rpb25zW2ldWzBdIDogYWN0aW9uc1tpXTtcbiAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUsIGFjdGlvbnNbaV1bMV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlKGFjdGlvbnMpIHtcbiAgICAgIGlmICgoKGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGgpIHx8IDApICE9IG9iamVjdHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgbm90IGNoYW5nZSB0aGUgbGVuZ3RoIG9mIGFuIGFjdGlvbnMgYXJyYXkuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChvYmplY3RzW2ldICYmICd1cGRhdGUnIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKGFjdGlvbnNbaV1bMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAnZGVzdHJveScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgIG9iamVjdHNbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsIjxzdmVsdGU6Ym9keVxuICBvbjpjbGlja3xjYXB0dXJlPXsoZXZlbnQpID0+XG4gICAgaW5zdGFuY2UgJiYgb3BlbiAmJiBpbnN0YW5jZS5oYW5kbGVCb2R5Q2xpY2soZXZlbnQpfSAvPlxuXG48ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLW1lbnUtc3VyZmFjZSc6IHRydWUsXG4gICAgJ21kYy1tZW51LXN1cmZhY2UtLWZpeGVkJzogZml4ZWQsXG4gICAgJ21kYy1tZW51LXN1cmZhY2UtLW9wZW4nOiBpc1N0YXRpYyxcbiAgICAnc211aS1tZW51LXN1cmZhY2UtLXN0YXRpYyc6IGlzU3RhdGljLFxuICAgICdtZGMtbWVudS1zdXJmYWNlLS1mdWxsd2lkdGgnOiBmdWxsV2lkdGgsXG4gICAgLi4uaW50ZXJuYWxDbGFzc2VzLFxuICB9KX1cbiAgc3R5bGU9e09iamVjdC5lbnRyaWVzKGludGVybmFsU3R5bGVzKVxuICAgIC5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IGAke25hbWV9OiAke3ZhbHVlfTtgKVxuICAgIC5jb25jYXQoW3N0eWxlXSlcbiAgICAuam9pbignICcpfVxuICBvbjprZXlkb3duPXsoZXZlbnQpID0+IGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZUtleWRvd24oZXZlbnQpfVxuICB7Li4uJCRyZXN0UHJvcHN9XG4+XG4gIDxzbG90IC8+XG48L2Rpdj5cblxuPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG4gIGltcG9ydCB7IENvcm5lciwgQ29ybmVyQml0IH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZSc7XG5cbiAgZXhwb3J0IHsgQ29ybmVyLCBDb3JuZXJCaXQgfTtcbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvbWVudS1zdXJmYWNlJztcbiAgaW1wb3J0IHsgZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSB9IGZyb20gJ0BtYXRlcmlhbC9hbmltYXRpb24vdXRpbCc7XG4gIGltcG9ydCB7IG9uTW91bnQsIG9uRGVzdHJveSwgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCBzdHlsZSA9ICcnO1xuICBsZXQgaXNTdGF0aWMgPSBmYWxzZTtcbiAgZXhwb3J0IHsgaXNTdGF0aWMgYXMgc3RhdGljIH07XG4gIGV4cG9ydCBsZXQgYW5jaG9yID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBmaXhlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IG9wZW4gPSBpc1N0YXRpYztcbiAgZXhwb3J0IGxldCBmdWxsV2lkdGggPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBxdWlja09wZW4gPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBhbmNob3JFbGVtZW50ID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhbmNob3JDb3JuZXIgPSBudWxsO1xuICBleHBvcnQgbGV0IGFuY2hvck1hcmdpbiA9IHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwIH07XG4gIGV4cG9ydCBsZXQgbWF4SGVpZ2h0ID0gMDtcbiAgZXhwb3J0IGxldCBob3Jpem9udGFsbHlDZW50ZXJlZE9uVmlld3BvcnQgPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgaW50ZXJuYWxDbGFzc2VzID0ge307XG4gIGxldCBpbnRlcm5hbFN0eWxlcyA9IHt9O1xuICBsZXQgcHJldmlvdXNGb2N1cztcblxuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6cm9sZScsICdtZW51Jyk7XG4gIHNldENvbnRleHQoJ1NNVUk6bGlzdDppdGVtOnJvbGUnLCAnbWVudWl0ZW0nKTtcblxuICAkOiBpZiAoXG4gICAgZWxlbWVudCAmJlxuICAgIGFuY2hvciAmJlxuICAgICFlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InKVxuICApIHtcbiAgICBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJyk7XG4gICAgYW5jaG9yRWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5pc09wZW4oKSAhPT0gb3Blbikge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBpbnN0YW5jZS5vcGVuKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgJDogaWYgKGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2Uuc2V0UXVpY2tPcGVuKHF1aWNrT3Blbik7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5zZXRGaXhlZFBvc2l0aW9uKGZpeGVkKTtcbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSAmJiBtYXhIZWlnaHQgPiAwKSB7XG4gICAgaW5zdGFuY2Uuc2V0TWF4SGVpZ2h0KG1heEhlaWdodCk7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5zZXRJc0hvcml6b250YWxseUNlbnRlcmVkT25WaWV3cG9ydChcbiAgICAgIGhvcml6b250YWxseUNlbnRlcmVkT25WaWV3cG9ydFxuICAgICk7XG4gIH1cblxuICBjb25zdCBpQ29ybmVyID0gQ29ybmVyO1xuICBjb25zdCBpQ29ybmVyQml0ID0gQ29ybmVyQml0O1xuICAkOiBpZiAoaW5zdGFuY2UgJiYgYW5jaG9yQ29ybmVyICE9IG51bGwpIHtcbiAgICBpZiAoaUNvcm5lci5oYXNPd25Qcm9wZXJ0eShhbmNob3JDb3JuZXIpKSB7XG4gICAgICBpbnN0YW5jZS5zZXRBbmNob3JDb3JuZXIoaUNvcm5lclthbmNob3JDb3JuZXJdKTtcbiAgICB9IGVsc2UgaWYgKGlDb3JuZXJCaXQuaGFzT3duUHJvcGVydHkoYW5jaG9yQ29ybmVyKSkge1xuICAgICAgaW5zdGFuY2Uuc2V0QW5jaG9yQ29ybmVyKGlDb3JuZXJCaXRbYW5jaG9yQ29ybmVyXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlLnNldEFuY2hvckNvcm5lcihhbmNob3JDb3JuZXIpO1xuICAgIH1cbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLnNldEFuY2hvck1hcmdpbihhbmNob3JNYXJnaW4pO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzLFxuICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICBoYXNDbGFzcyxcbiAgICAgIGhhc0FuY2hvcjogKCkgPT4gISFhbmNob3JFbGVtZW50LFxuICAgICAgbm90aWZ5Q2xvc2U6ICgpID0+IHtcbiAgICAgICAgb3BlbiA9IGlzU3RhdGljO1xuICAgICAgICBpZiAoIW9wZW4pIHtcbiAgICAgICAgICBkaXNwYXRjaChlbGVtZW50LCAnTURDTWVudVN1cmZhY2U6Y2xvc2VkJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBub3RpZnlDbG9zaW5nOiAoKSA9PiB7XG4gICAgICAgIG9wZW4gPSBpc1N0YXRpYztcbiAgICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgICAgZGlzcGF0Y2goZWxlbWVudCwgJ01EQ01lbnVTdXJmYWNlOmNsb3NpbmcnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG5vdGlmeU9wZW46ICgpID0+IHtcbiAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgIGRpc3BhdGNoKGVsZW1lbnQsICdNRENNZW51U3VyZmFjZTpvcGVuZWQnKTtcbiAgICAgIH0sXG4gICAgICBpc0VsZW1lbnRJbkNvbnRhaW5lcjogKGVsKSA9PiBlbGVtZW50LmNvbnRhaW5zKGVsKSxcbiAgICAgIGlzUnRsOiAoKSA9PlxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgIHNldFRyYW5zZm9ybU9yaWdpbjogKG9yaWdpbikgPT4ge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBgJHtnZXRDb3JyZWN0UHJvcGVydHlOYW1lKFxuICAgICAgICAgIHdpbmRvdyxcbiAgICAgICAgICAndHJhbnNmb3JtJ1xuICAgICAgICApfS1vcmlnaW5gO1xuICAgICAgICBpbnRlcm5hbFN0eWxlc1twcm9wZXJ0eU5hbWVdID0gb3JpZ2luO1xuICAgICAgfSxcblxuICAgICAgaXNGb2N1c2VkOiAoKSA9PiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbGVtZW50LFxuICAgICAgc2F2ZUZvY3VzOiAoKSA9PiB7XG4gICAgICAgIHByZXZpb3VzRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgfSxcbiAgICAgIHJlc3RvcmVGb2N1czogKCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgZWxlbWVudC5jb250YWlucyhkb2N1bWVudC5hY3RpdmVFbGVtZW50KSAmJlxuICAgICAgICAgIHByZXZpb3VzRm9jdXMgJiZcbiAgICAgICAgICBwcmV2aW91c0ZvY3VzLmZvY3VzXG4gICAgICAgICkge1xuICAgICAgICAgIHByZXZpb3VzRm9jdXMuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgZ2V0SW5uZXJEaW1lbnNpb25zOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgd2lkdGg6IGVsZW1lbnQub2Zmc2V0V2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBnZXRBbmNob3JEaW1lbnNpb25zOiAoKSA9PlxuICAgICAgICBhbmNob3JFbGVtZW50ID8gYW5jaG9yRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IG51bGwsXG4gICAgICBnZXRXaW5kb3dEaW1lbnNpb25zOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfTtcbiAgICAgIH0sXG4gICAgICBnZXRCb2R5RGltZW5zaW9uczogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgZ2V0V2luZG93U2Nyb2xsOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiB7IHg6IHdpbmRvdy5wYWdlWE9mZnNldCwgeTogd2luZG93LnBhZ2VZT2Zmc2V0IH07XG4gICAgICB9LFxuICAgICAgc2V0UG9zaXRpb246IChwb3NpdGlvbikgPT4ge1xuICAgICAgICBpbnRlcm5hbFN0eWxlcy5sZWZ0ID0gJ2xlZnQnIGluIHBvc2l0aW9uID8gYCR7cG9zaXRpb24ubGVmdH1weGAgOiAnJztcbiAgICAgICAgaW50ZXJuYWxTdHlsZXMucmlnaHQgPSAncmlnaHQnIGluIHBvc2l0aW9uID8gYCR7cG9zaXRpb24ucmlnaHR9cHhgIDogJyc7XG4gICAgICAgIGludGVybmFsU3R5bGVzLnRvcCA9ICd0b3AnIGluIHBvc2l0aW9uID8gYCR7cG9zaXRpb24udG9wfXB4YCA6ICcnO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcy5ib3R0b20gPVxuICAgICAgICAgICdib3R0b20nIGluIHBvc2l0aW9uID8gYCR7cG9zaXRpb24uYm90dG9tfXB4YCA6ICcnO1xuICAgICAgfSxcbiAgICAgIHNldE1heEhlaWdodDogKGhlaWdodCkgPT4ge1xuICAgICAgICBpbnRlcm5hbFN0eWxlcy5tYXhIZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZGlzcGF0Y2goZWxlbWVudCwgJ1NNVUk6bWVudS1zdXJmYWNlOm1vdW50Jywge1xuICAgICAgZ2V0IG9wZW4oKSB7XG4gICAgICAgIHJldHVybiBvcGVuO1xuICAgICAgfSxcbiAgICAgIHNldCBvcGVuKHZhbHVlKSB7XG4gICAgICAgIG9wZW4gPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBjbG9zZVByb2dyYW1tYXRpYyxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjb25zdCBpc0hvaXN0ZWQgPSBpbnN0YW5jZS5pc0hvaXN0ZWRFbGVtZW50O1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgaWYgKGlzSG9pc3RlZCkge1xuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG5cbiAgb25EZXN0cm95KCgpID0+IHtcbiAgICBpZiAoYW5jaG9yKSB7XG4gICAgICBlbGVtZW50ICYmXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdtZGMtbWVudS1zdXJmYWNlLS1hbmNob3InKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBjbGFzc05hbWUgaW4gaW50ZXJuYWxDbGFzc2VzXG4gICAgICA/IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdXG4gICAgICA6IGdldEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIShjbGFzc05hbWUgaW4gaW50ZXJuYWxDbGFzc2VzKSB8fCBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZVByb2dyYW1tYXRpYyhza2lwUmVzdG9yZUZvY3VzKSB7XG4gICAgaW5zdGFuY2UuY2xvc2Uoc2tpcFJlc3RvcmVGb2N1cyk7XG4gICAgb3BlbiA9IGZhbHNlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzT3BlbigpIHtcbiAgICByZXR1cm4gb3BlbjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRPcGVuKHZhbHVlKSB7XG4gICAgb3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldEFic29sdXRlUG9zaXRpb24oLi4uYXJncykge1xuICAgIHJldHVybiBpbnN0YW5jZS5zZXRBYnNvbHV0ZVBvc2l0aW9uKC4uLmFyZ3MpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldElzSG9pc3RlZCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLnNldElzSG9pc3RlZCguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxNZW51U3VyZmFjZVxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZT17W2ZvcndhcmRFdmVudHMsIC4uLnVzZV19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1tZW51JzogdHJ1ZSxcbiAgfSl9XG4gIGJpbmQ6b3BlblxuICBvbjpTTVVJOm1lbnUtc3VyZmFjZTptb3VudD17aGFuZGxlTWVudVN1cmZhY2VBY2Nlc3Nvcn1cbiAgb246U01VSTpsaXN0Om1vdW50PXtoYW5kbGVMaXN0QWNjZXNzb3J9XG4gIG9uOk1EQ01lbnVTdXJmYWNlOm9wZW5lZD17KCkgPT5cbiAgICBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVNZW51U3VyZmFjZU9wZW5lZCgpfVxuICBvbjprZXlkb3duPXsoZXZlbnQpID0+IGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZUtleWRvd24oZXZlbnQpfVxuICBvbjpNRENMaXN0OmFjdGlvbj17KGV2ZW50KSA9PlxuICAgIGluc3RhbmNlICYmXG4gICAgaW5zdGFuY2UuaGFuZGxlSXRlbUFjdGlvbihcbiAgICAgIGxpc3RBY2Nlc3Nvci5nZXRPcmRlcmVkTGlzdCgpW2V2ZW50LmRldGFpbC5pbmRleF0uZWxlbWVudFxuICAgICl9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L01lbnVTdXJmYWNlXG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IE1EQ01lbnVGb3VuZGF0aW9uLCBjc3NDbGFzc2VzIH0gZnJvbSAnQG1hdGVyaWFsL21lbnUnO1xuICBpbXBvcnQgeyBwb255ZmlsbCB9IGZyb20gJ0BtYXRlcmlhbC9kb20nO1xuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgTWVudVN1cmZhY2UgZnJvbSAnQHNtdWkvbWVudS1zdXJmYWNlL01lbnVTdXJmYWNlLnN2ZWx0ZSc7XG4gIGNvbnN0IHsgY2xvc2VzdCB9ID0gcG9ueWZpbGw7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IG9wZW4gPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgbWVudVN1cmZhY2VBY2Nlc3NvcjtcbiAgbGV0IGxpc3RBY2Nlc3NvcjtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpbnN0YW5jZSA9IG5ldyBNRENNZW51Rm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzc1RvRWxlbWVudEF0SW5kZXg6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGxpc3RBY2Nlc3Nvci5hZGRDbGFzc0ZvckVsZW1lbnRJbmRleChpbmRleCwgY2xhc3NOYW1lKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzc0Zyb21FbGVtZW50QXRJbmRleDogKGluZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgbGlzdEFjY2Vzc29yLnJlbW92ZUNsYXNzRm9yRWxlbWVudEluZGV4KGluZGV4LCBjbGFzc05hbWUpO1xuICAgICAgfSxcbiAgICAgIGFkZEF0dHJpYnV0ZVRvRWxlbWVudEF0SW5kZXg6IChpbmRleCwgYXR0ciwgdmFsdWUpID0+IHtcbiAgICAgICAgbGlzdEFjY2Vzc29yLnNldEF0dHJpYnV0ZUZvckVsZW1lbnRJbmRleChpbmRleCwgYXR0ciwgdmFsdWUpO1xuICAgICAgfSxcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZUZyb21FbGVtZW50QXRJbmRleDogKGluZGV4LCBhdHRyKSA9PiB7XG4gICAgICAgIGxpc3RBY2Nlc3Nvci5yZW1vdmVBdHRyaWJ1dGVGb3JFbGVtZW50SW5kZXgoaW5kZXgsIGF0dHIpO1xuICAgICAgfSxcbiAgICAgIGVsZW1lbnRDb250YWluc0NsYXNzOiAoZWxlbWVudCwgY2xhc3NOYW1lKSA9PlxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpLFxuICAgICAgY2xvc2VTdXJmYWNlOiAoc2tpcFJlc3RvcmVGb2N1cykgPT5cbiAgICAgICAgbWVudVN1cmZhY2VBY2Nlc3Nvci5jbG9zZVByb2dyYW1tYXRpYyhza2lwUmVzdG9yZUZvY3VzKSxcbiAgICAgIGdldEVsZW1lbnRJbmRleDogKGVsZW1lbnQpID0+XG4gICAgICAgIGxpc3RBY2Nlc3NvclxuICAgICAgICAgIC5nZXRPcmRlcmVkTGlzdCgpXG4gICAgICAgICAgLm1hcCgoYWNjZXNzb3IpID0+IGFjY2Vzc29yLmVsZW1lbnQpXG4gICAgICAgICAgLmluZGV4T2YoZWxlbWVudCksXG4gICAgICBub3RpZnlTZWxlY3RlZDogKGV2dERhdGEpID0+XG4gICAgICAgIGRpc3BhdGNoKGVsZW1lbnQsICdNRENNZW51OnNlbGVjdGVkJywge1xuICAgICAgICAgIGluZGV4OiBldnREYXRhLmluZGV4LFxuICAgICAgICAgIGl0ZW06IGxpc3RBY2Nlc3Nvci5nZXRPcmRlcmVkTGlzdCgpW2V2dERhdGEuaW5kZXhdLmVsZW1lbnQsXG4gICAgICAgIH0pLFxuICAgICAgZ2V0TWVudUl0ZW1Db3VudDogKCkgPT4gbGlzdEFjY2Vzc29yLml0ZW1zLmxlbmd0aCxcbiAgICAgIGZvY3VzSXRlbUF0SW5kZXg6IChpbmRleCkgPT4gbGlzdEFjY2Vzc29yLmZvY3VzSXRlbUF0SW5kZXgoaW5kZXgpLFxuICAgICAgZm9jdXNMaXN0Um9vdDogKCkgPT4gbGlzdEFjY2Vzc29yLmVsZW1lbnQuZm9jdXMoKSxcbiAgICAgIGlzU2VsZWN0YWJsZUl0ZW1BdEluZGV4OiAoaW5kZXgpID0+XG4gICAgICAgICEhY2xvc2VzdChcbiAgICAgICAgICBsaXN0QWNjZXNzb3IuZ2V0T3JkZXJlZExpc3QoKVtpbmRleF0uZWxlbWVudCxcbiAgICAgICAgICBgLiR7Y3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVElPTl9HUk9VUH1gXG4gICAgICAgICksXG4gICAgICBnZXRTZWxlY3RlZFNpYmxpbmdPZkl0ZW1BdEluZGV4OiAoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZExpc3QgPSBsaXN0QWNjZXNzb3IuZ2V0T3JkZXJlZExpc3QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uR3JvdXBFbCA9IGNsb3Nlc3QoXG4gICAgICAgICAgb3JkZXJlZExpc3RbaW5kZXhdLmVsZW1lbnQsXG4gICAgICAgICAgYC4ke2Nzc0NsYXNzZXMuTUVOVV9TRUxFQ1RJT05fR1JPVVB9YFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBzZWxlY3RlZEl0ZW1FbCA9IHNlbGVjdGlvbkdyb3VwRWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLiR7Y3NzQ2xhc3Nlcy5NRU5VX1NFTEVDVEVEX0xJU1RfSVRFTX1gXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZEl0ZW1FbFxuICAgICAgICAgID8gb3JkZXJlZExpc3QubWFwKChpdGVtKSA9PiBpdGVtLmVsZW1lbnQpLmluZGV4T2Yoc2VsZWN0ZWRJdGVtRWwpXG4gICAgICAgICAgOiAtMTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaXNwYXRjaChlbGVtZW50LCAnU01VSTptZW51Om1vdW50JywgaW5zdGFuY2UpO1xuXG4gICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVNZW51U3VyZmFjZUFjY2Vzc29yKGV2ZW50KSB7XG4gICAgaWYgKCFtZW51U3VyZmFjZUFjY2Vzc29yKSB7XG4gICAgICBtZW51U3VyZmFjZUFjY2Vzc29yID0gZXZlbnQuZGV0YWlsO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUxpc3RBY2Nlc3NvcihldmVudCkge1xuICAgIGlmICghbGlzdEFjY2Vzc29yKSB7XG4gICAgICBsaXN0QWNjZXNzb3IgPSBldmVudC5kZXRhaWw7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGlzT3BlbigpIHtcbiAgICByZXR1cm4gb3BlbjtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRPcGVuKHZhbHVlKSB7XG4gICAgb3BlbiA9IHZhbHVlO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRGb2N1c1N0YXRlKGZvY3VzU3RhdGUpIHtcbiAgICBpbnN0YW5jZS5zZXREZWZhdWx0Rm9jdXNTdGF0ZShmb2N1c1N0YXRlKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEVsZW1lbnQoKTtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3BhblxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1kZXByZWNhdGVkLWxpc3QtaXRlbV9fZ3JhcGhpYyc6IHRydWUsXG4gICAgJ21kYy1tZW51X19zZWxlY3Rpb24tZ3JvdXAtaWNvbic6IG1lbnVTZWxlY3Rpb25Hcm91cCxcbiAgfSl9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3NwYW5cbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IG1lbnVTZWxlY3Rpb25Hcm91cCA9IGdldENvbnRleHQoJ1NNVUk6bGlzdDpncmFwaGljOm1lbnUtc2VsZWN0aW9uLWdyb3VwJyk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgY2xhc3NBZGRlckJ1aWxkZXIgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuaW1wb3J0IEdyYXBoaWMgZnJvbSAnQHNtdWkvbGlzdC9HcmFwaGljLnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtbWVudV9fc2VsZWN0aW9uLWdyb3VwLWljb24nLFxuICBjb21wb25lbnQ6IEdyYXBoaWMsXG59KTtcbiJdLCJuYW1lcyI6WyJjc3NDbGFzc2VzIiwic3RyaW5ncyIsIm51bWJlcnMiLCJsaXN0Q3NzQ2xhc3NlcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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
