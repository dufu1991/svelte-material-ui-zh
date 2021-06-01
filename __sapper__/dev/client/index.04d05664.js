import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a7 as create_slot, $ as assign, W as compute_rest_props, v as validate_slots, Y as get_current_component, Z as setContext, ah as onMount, _ as onDestroy, a0 as exclude_internal_props, o as space, p as element, w as claim_space, x as claim_element, y as children, u as detach_dev, a9 as set_attributes, D as add_location, F as insert_dev, ax as listen_dev, aa as action_destroyer, a8 as update_slot, a2 as get_spread_update, ab as is_function, J as transition_in, K as transition_out, ac as run_all, a6 as binding_callbacks, aF as globals, q as create_component, A as claim_component, H as mount_component, M as destroy_component, t as text, z as claim_text, B as set_style, G as append_dev, L as List, I as Item, aS as Separator, T as Text, E as attr_dev, aw as set_data_dev, ak as bind, al as add_flush_callback, ag as validate_each_argument, a1 as empty, O as noop, aj as destroy_each, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { T as Textfield } from './Textfield.38e6e4ee.js';
import { B as Button_1 } from './Button.d66ce348.js';
import { A as Anchor } from './Anchor.88237b9f.js';
import { I as ImageList, a as Item$1, b as ImageAspectContainer, c as Image } from './Supporting.a874223d.js';

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
var cssClasses = {
    ANCHOR: 'mdc-menu-surface--anchor',
    ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
    ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
    FIXED: 'mdc-menu-surface--fixed',
    IS_OPEN_BELOW: 'mdc-menu-surface--is-open-below',
    OPEN: 'mdc-menu-surface--open',
    ROOT: 'mdc-menu-surface',
};
// tslint:disable:object-literal-sort-keys
var strings = {
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
var numbers = {
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
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation, "numbers", {
        get: function () {
            return numbers;
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
                }, numbers.TRANSITION_OPEN_DURATION);
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
            }, numbers.TRANSITION_CLOSE_DURATION);
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
        if (anchorSize.width / surfaceSize.width > numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
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

/* packages/menu-surface/MenuSurface.svelte generated by Svelte v3.37.0 */

const { document: document_1 } = globals;

const file$5 = "packages/menu-surface/MenuSurface.svelte";

function create_fragment$5(ctx) {
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
			add_location(div, file$5, 4, 0, 105);
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
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const func = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
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
			instance_1,
			create_fragment$5,
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
			id: create_fragment$5.name
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

/* src/routes/demo/menu-surface/_Simple.svelte generated by Svelte v3.37.0 */
const file$4 = "src/routes/demo/menu-surface/_Simple.svelte";

// (1:0) <MenuSurface static style="max-width: 350px;">
function create_default_slot$4(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("This is a menu surface. It's similar to a menu. It is more versatile, but\n    requires more configuration. It can contain more than just a list, like rich\n    popover content, forms, images, etc.");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { style: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, "This is a menu surface. It's similar to a menu. It is more versatile, but\n    requires more configuration. It can contain more than just a list, like rich\n    popover content, forms, images, etc.");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(p, "margin", "1em");
			add_location(p, file$4, 1, 2, 49);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$4.name,
		type: "slot",
		source: "(1:0) <MenuSurface static style=\\\"max-width: 350px;\\\">",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let menusurface;
	let current;

	menusurface = new MenuSurface({
			props: {
				static: true,
				style: "max-width: 350px;",
				$$slots: { default: [create_default_slot$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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
			const menusurface_changes = {};

			if (dirty & /*$$scope*/ 1) {
				menusurface_changes.$$scope = { dirty, ctx };
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
			destroy_component(menusurface, detaching);
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
	validate_slots("Simple", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Simple> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ MenuSurface });
	return [];
}

class Simple extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Simple",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src/routes/demo/menu-surface/_Static.svelte generated by Svelte v3.37.0 */
const file$3 = "src/routes/demo/menu-surface/_Static.svelte";

// (4:6) <Text>
function create_default_slot_9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Cut");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Cut");
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
		source: "(4:6) <Text>",
		ctx
	});

	return block;
}

// (3:4) <Item on:SMUI:action={() => (clicked = 'Cut')}>
function create_default_slot_8(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_9] },
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

			if (dirty & /*$$scope*/ 32) {
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
		id: create_default_slot_8.name,
		type: "slot",
		source: "(3:4) <Item on:SMUI:action={() => (clicked = 'Cut')}>",
		ctx
	});

	return block;
}

// (7:6) <Text>
function create_default_slot_7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Copy");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Copy");
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
		source: "(7:6) <Text>",
		ctx
	});

	return block;
}

// (6:4) <Item on:SMUI:action={() => (clicked = 'Copy')}>
function create_default_slot_6(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_7] },
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

			if (dirty & /*$$scope*/ 32) {
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
		id: create_default_slot_6.name,
		type: "slot",
		source: "(6:4) <Item on:SMUI:action={() => (clicked = 'Copy')}>",
		ctx
	});

	return block;
}

// (10:6) <Text>
function create_default_slot_5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Paste");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Paste");
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
		source: "(10:6) <Text>",
		ctx
	});

	return block;
}

// (9:4) <Item on:SMUI:action={() => (clicked = 'Paste')}>
function create_default_slot_4$1(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_5] },
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

			if (dirty & /*$$scope*/ 32) {
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
		source: "(9:4) <Item on:SMUI:action={() => (clicked = 'Paste')}>",
		ctx
	});

	return block;
}

// (14:6) <Text>
function create_default_slot_3$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Delete");
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
		source: "(14:6) <Text>",
		ctx
	});

	return block;
}

// (13:4) <Item on:SMUI:action={() => (clicked = 'Delete')}>
function create_default_slot_2$2(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_3$1] },
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

			if (dirty & /*$$scope*/ 32) {
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
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(13:4) <Item on:SMUI:action={() => (clicked = 'Delete')}>",
		ctx
	});

	return block;
}

// (2:2) <List>
function create_default_slot_1$3(ctx) {
	let item0;
	let t0;
	let item1;
	let t1;
	let item2;
	let t2;
	let separator;
	let t3;
	let item3;
	let current;

	item0 = new Item({
			props: {
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item0.$on("SMUI:action", /*SMUI_action_handler*/ ctx[1]);

	item1 = new Item({
			props: {
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item1.$on("SMUI:action", /*SMUI_action_handler_1*/ ctx[2]);

	item2 = new Item({
			props: {
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item2.$on("SMUI:action", /*SMUI_action_handler_2*/ ctx[3]);
	separator = new Separator({ $$inline: true });

	item3 = new Item({
			props: {
				$$slots: { default: [create_default_slot_2$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	item3.$on("SMUI:action", /*SMUI_action_handler_3*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(item0.$$.fragment);
			t0 = space();
			create_component(item1.$$.fragment);
			t1 = space();
			create_component(item2.$$.fragment);
			t2 = space();
			create_component(separator.$$.fragment);
			t3 = space();
			create_component(item3.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(item0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(item1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(item2.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(separator.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(item3.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(item0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(item1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(item2, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(separator, target, anchor);
			insert_dev(target, t3, anchor);
			mount_component(item3, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const item0_changes = {};

			if (dirty & /*$$scope*/ 32) {
				item0_changes.$$scope = { dirty, ctx };
			}

			item0.$set(item0_changes);
			const item1_changes = {};

			if (dirty & /*$$scope*/ 32) {
				item1_changes.$$scope = { dirty, ctx };
			}

			item1.$set(item1_changes);
			const item2_changes = {};

			if (dirty & /*$$scope*/ 32) {
				item2_changes.$$scope = { dirty, ctx };
			}

			item2.$set(item2_changes);
			const item3_changes = {};

			if (dirty & /*$$scope*/ 32) {
				item3_changes.$$scope = { dirty, ctx };
			}

			item3.$set(item3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(item0.$$.fragment, local);
			transition_in(item1.$$.fragment, local);
			transition_in(item2.$$.fragment, local);
			transition_in(separator.$$.fragment, local);
			transition_in(item3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(item0.$$.fragment, local);
			transition_out(item1.$$.fragment, local);
			transition_out(item2.$$.fragment, local);
			transition_out(separator.$$.fragment, local);
			transition_out(item3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(item0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(item1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(item2, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(separator, detaching);
			if (detaching) detach_dev(t3);
			destroy_component(item3, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$3.name,
		type: "slot",
		source: "(2:2) <List>",
		ctx
	});

	return block;
}

// (1:0) <MenuSurface static>
function create_default_slot$3(ctx) {
	let list;
	let current;

	list = new List({
			props: {
				$$slots: { default: [create_default_slot_1$3] },
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

			if (dirty & /*$$scope, clicked*/ 33) {
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
		id: create_default_slot$3.name,
		type: "slot",
		source: "(1:0) <MenuSurface static>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let menusurface;
	let t0;
	let pre;
	let t1;
	let t2;
	let current;

	menusurface = new MenuSurface({
			props: {
				static: true,
				$$slots: { default: [create_default_slot$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(menusurface.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Clicked: ");
			t2 = text(/*clicked*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(menusurface.$$.fragment, nodes);
			t0 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t1 = claim_text(pre_nodes, "Clicked: ");
			t2 = claim_text(pre_nodes, /*clicked*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$3, 18, 0, 434);
		},
		m: function mount(target, anchor) {
			mount_component(menusurface, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t1);
			append_dev(pre, t2);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const menusurface_changes = {};

			if (dirty & /*$$scope, clicked*/ 33) {
				menusurface_changes.$$scope = { dirty, ctx };
			}

			menusurface.$set(menusurface_changes);
			if (!current || dirty & /*clicked*/ 1) set_data_dev(t2, /*clicked*/ ctx[0]);
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
			destroy_component(menusurface, detaching);
			if (detaching) detach_dev(t0);
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
	validate_slots("Static", slots, []);
	let clicked = "nothing yet";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Static> was created with unknown prop '${key}'`);
	});

	const SMUI_action_handler = () => $$invalidate(0, clicked = "Cut");
	const SMUI_action_handler_1 = () => $$invalidate(0, clicked = "Copy");
	const SMUI_action_handler_2 = () => $$invalidate(0, clicked = "Paste");
	const SMUI_action_handler_3 = () => $$invalidate(0, clicked = "Delete");

	$$self.$capture_state = () => ({
		MenuSurface,
		List,
		Item,
		Separator,
		Text,
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
		SMUI_action_handler,
		SMUI_action_handler_1,
		SMUI_action_handler_2,
		SMUI_action_handler_3
	];
}

class Static extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Static",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/menu-surface/_Anchored.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/menu-surface/_Anchored.svelte";

// (2:2) <Button on:click={() => surface.setOpen(true)}>
function create_default_slot_2$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Menu Surface");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Menu Surface");
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
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(2:2) <Button on:click={() => surface.setOpen(true)}>",
		ctx
	});

	return block;
}

// (9:6) <Button style="margin-top: 1em;" on:click={() => surface.setOpen(false)}>
function create_default_slot_1$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Submit");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Submit");
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
		source: "(9:6) <Button style=\\\"margin-top: 1em;\\\" on:click={() => surface.setOpen(false)}>",
		ctx
	});

	return block;
}

// (3:2) <MenuSurface bind:this={surface} anchorCorner="BOTTOM_LEFT">
function create_default_slot$2(ctx) {
	let div;
	let textfield0;
	let updating_value;
	let t0;
	let textfield1;
	let updating_value_1;
	let t1;
	let button;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[4](value);
	}

	let textfield0_props = { label: "Name" };

	if (/*name*/ ctx[1] !== void 0) {
		textfield0_props.value = /*name*/ ctx[1];
	}

	textfield0 = new Textfield({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[5](value);
	}

	let textfield1_props = { label: "Email", type: "email" };

	if (/*email*/ ctx[2] !== void 0) {
		textfield1_props.value = /*email*/ ctx[2];
	}

	textfield1 = new Textfield({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	button = new Button_1({
			props: {
				style: "margin-top: 1em;",
				$$slots: { default: [create_default_slot_1$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler_1*/ ctx[6]);

	const block = {
		c: function create() {
			div = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			create_component(textfield1.$$.fragment);
			t1 = space();
			create_component(button.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			claim_component(textfield0.$$.fragment, div_nodes);
			t0 = claim_space(div_nodes);
			claim_component(textfield1.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(button.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "margin", "1em");
			set_style(div, "display", "flex");
			set_style(div, "flex-direction", "column");
			set_style(div, "align-items", "flex-end");
			add_location(div, file$2, 3, 4, 175);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(textfield0, div, null);
			append_dev(div, t0);
			mount_component(textfield1, div, null);
			append_dev(div, t1);
			mount_component(button, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const textfield0_changes = {};

			if (!updating_value && dirty & /*name*/ 2) {
				updating_value = true;
				textfield0_changes.value = /*name*/ ctx[1];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			const textfield1_changes = {};

			if (!updating_value_1 && dirty & /*email*/ 4) {
				updating_value_1 = true;
				textfield1_changes.value = /*email*/ ctx[2];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(button);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(3:2) <MenuSurface bind:this={surface} anchorCorner=\\\"BOTTOM_LEFT\\\">",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div;
	let button;
	let t;
	let menusurface;
	let current;

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[3]);

	let menusurface_props = {
		anchorCorner: "BOTTOM_LEFT",
		$$slots: { default: [create_default_slot$2] },
		$$scope: { ctx }
	};

	menusurface = new MenuSurface({ props: menusurface_props, $$inline: true });
	/*menusurface_binding*/ ctx[7](menusurface);

	const block = {
		c: function create() {
			div = element("div");
			create_component(button.$$.fragment);
			t = space();
			create_component(menusurface.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			claim_component(button.$$.fragment, div_nodes);
			t = claim_space(div_nodes);
			claim_component(menusurface.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "min-width", "100px");
			add_location(div, file$2, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(button, div, null);
			append_dev(div, t);
			mount_component(menusurface, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			const menusurface_changes = {};

			if (dirty & /*$$scope, surface, email, name*/ 263) {
				menusurface_changes.$$scope = { dirty, ctx };
			}

			menusurface.$set(menusurface_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			transition_in(menusurface.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			transition_out(menusurface.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(button);
			/*menusurface_binding*/ ctx[7](null);
			destroy_component(menusurface);
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
	validate_slots("Anchored", slots, []);
	let surface;
	let name = "";
	let email = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Anchored> was created with unknown prop '${key}'`);
	});

	const click_handler = () => surface.setOpen(true);

	function textfield0_value_binding(value) {
		name = value;
		$$invalidate(1, name);
	}

	function textfield1_value_binding(value) {
		email = value;
		$$invalidate(2, email);
	}

	const click_handler_1 = () => surface.setOpen(false);

	function menusurface_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			surface = $$value;
			$$invalidate(0, surface);
		});
	}

	$$self.$capture_state = () => ({
		MenuSurface,
		Textfield,
		Button: Button_1,
		surface,
		name,
		email
	});

	$$self.$inject_state = $$props => {
		if ("surface" in $$props) $$invalidate(0, surface = $$props.surface);
		if ("name" in $$props) $$invalidate(1, name = $$props.name);
		if ("email" in $$props) $$invalidate(2, email = $$props.email);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		surface,
		name,
		email,
		click_handler,
		textfield0_value_binding,
		textfield1_value_binding,
		click_handler_1,
		menusurface_binding
	];
}

class Anchored extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Anchored",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/menu-surface/_ManualAnchor.svelte generated by Svelte v3.37.0 */

const { Object: Object_1 } = globals;
const file$1 = "src/routes/demo/menu-surface/_ManualAnchor.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	child_ctx[11] = i;
	return child_ctx;
}

// (18:2) <Button on:click={() => surface.setOpen(true)}>
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Open Menu Surface");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Open Menu Surface");
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
		source: "(18:2) <Button on:click={() => surface.setOpen(true)}>",
		ctx
	});

	return block;
}

// (23:10) <ImageAspectContainer>
function create_default_slot_3(ctx) {
	let image;
	let current;

	image = new Image({
			props: {
				src: "https://place-hold.it/100x100?text=Image%20" + (/*i*/ ctx[11] + 1) + "&fontsize=18",
				alt: "Image " + (/*i*/ ctx[11] + 1)
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(image.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(image.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(image, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(image.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(image, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(23:10) <ImageAspectContainer>",
		ctx
	});

	return block;
}

// (22:8) <ImageListItem>
function create_default_slot_2(ctx) {
	let imageaspectcontainer;
	let t;
	let current;

	imageaspectcontainer = new ImageAspectContainer({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(imageaspectcontainer.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(imageaspectcontainer.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(imageaspectcontainer, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const imageaspectcontainer_changes = {};

			if (dirty & /*$$scope*/ 4096) {
				imageaspectcontainer_changes.$$scope = { dirty, ctx };
			}

			imageaspectcontainer.$set(imageaspectcontainer_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(imageaspectcontainer.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(imageaspectcontainer.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(imageaspectcontainer, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(22:8) <ImageListItem>",
		ctx
	});

	return block;
}

// (21:6) {#each Array(4) as _unused, i}
function create_each_block(ctx) {
	let imagelistitem;
	let current;

	imagelistitem = new Item$1({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(imagelistitem.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(imagelistitem.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(imagelistitem, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const imagelistitem_changes = {};

			if (dirty & /*$$scope*/ 4096) {
				imagelistitem_changes.$$scope = { dirty, ctx };
			}

			imagelistitem.$set(imagelistitem_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(imagelistitem.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(imagelistitem.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(imagelistitem, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(21:6) {#each Array(4) as _unused, i}",
		ctx
	});

	return block;
}

// (20:4) <ImageList class="menu-surface-image-list">
function create_default_slot_1$1(ctx) {
	let each_1_anchor;
	let current;
	let each_value = Array(4);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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
		id: create_default_slot_1$1.name,
		type: "slot",
		source: "(20:4) <ImageList class=\\\"menu-surface-image-list\\\">",
		ctx
	});

	return block;
}

// (19:2) <MenuSurface bind:this={surface} anchor={false} bind:anchorElement={anchor}>
function create_default_slot$1(ctx) {
	let imagelist;
	let current;

	imagelist = new ImageList({
			props: {
				class: "menu-surface-image-list",
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(imagelist.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(imagelist.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(imagelist, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const imagelist_changes = {};

			if (dirty & /*$$scope*/ 4096) {
				imagelist_changes.$$scope = { dirty, ctx };
			}

			imagelist.$set(imagelist_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(imagelist.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(imagelist.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(imagelist, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(19:2) <MenuSurface bind:this={surface} anchor={false} bind:anchorElement={anchor}>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div;
	let button;
	let t;
	let menusurface;
	let updating_anchorElement;
	let div_class_value;
	let Anchor_action;
	let current;
	let mounted;
	let dispose;

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[3]);

	function menusurface_anchorElement_binding(value) {
		/*menusurface_anchorElement_binding*/ ctx[5](value);
	}

	let menusurface_props = {
		anchor: false,
		$$slots: { default: [create_default_slot$1] },
		$$scope: { ctx }
	};

	if (/*anchor*/ ctx[1] !== void 0) {
		menusurface_props.anchorElement = /*anchor*/ ctx[1];
	}

	menusurface = new MenuSurface({ props: menusurface_props, $$inline: true });
	/*menusurface_binding*/ ctx[4](menusurface);
	binding_callbacks.push(() => bind(menusurface, "anchorElement", menusurface_anchorElement_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(button.$$.fragment);
			t = space();
			create_component(menusurface.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(button.$$.fragment, div_nodes);
			t = claim_space(div_nodes);
			claim_component(menusurface.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", div_class_value = Object.keys(/*anchorClasses*/ ctx[2]).join(" "));
			add_location(div, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(button, div, null);
			append_dev(div, t);
			mount_component(menusurface, div, null);
			/*div_binding*/ ctx[8](div);
			current = true;

			if (!mounted) {
				dispose = action_destroyer(Anchor_action = Anchor.call(null, div, {
					addClass: /*Anchor_function*/ ctx[6],
					removeClass: /*Anchor_function_1*/ ctx[7]
				}));

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 4096) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			const menusurface_changes = {};

			if (dirty & /*$$scope*/ 4096) {
				menusurface_changes.$$scope = { dirty, ctx };
			}

			if (!updating_anchorElement && dirty & /*anchor*/ 2) {
				updating_anchorElement = true;
				menusurface_changes.anchorElement = /*anchor*/ ctx[1];
				add_flush_callback(() => updating_anchorElement = false);
			}

			menusurface.$set(menusurface_changes);

			if (!current || dirty & /*anchorClasses*/ 4 && div_class_value !== (div_class_value = Object.keys(/*anchorClasses*/ ctx[2]).join(" "))) {
				attr_dev(div, "class", div_class_value);
			}

			if (Anchor_action && is_function(Anchor_action.update) && dirty & /*anchorClasses*/ 4) Anchor_action.update.call(null, {
				addClass: /*Anchor_function*/ ctx[6],
				removeClass: /*Anchor_function_1*/ ctx[7]
			});
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			transition_in(menusurface.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			transition_out(menusurface.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(button);
			/*menusurface_binding*/ ctx[4](null);
			destroy_component(menusurface);
			/*div_binding*/ ctx[8](null);
			mounted = false;
			dispose();
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
	validate_slots("ManualAnchor", slots, []);
	let surface;
	let anchor;
	let anchorClasses = {};
	const writable_props = [];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ManualAnchor> was created with unknown prop '${key}'`);
	});

	const click_handler = () => surface.setOpen(true);

	function menusurface_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			surface = $$value;
			$$invalidate(0, surface);
		});
	}

	function menusurface_anchorElement_binding(value) {
		anchor = value;
		$$invalidate(1, anchor);
	}

	const Anchor_function = className => {
		if (!anchorClasses[className]) {
			$$invalidate(2, anchorClasses[className] = true, anchorClasses);
		}
	};

	const Anchor_function_1 = className => {
		if (anchorClasses[className]) {
			delete anchorClasses[className];
			$$invalidate(2, anchorClasses);
		}
	};

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			anchor = $$value;
			$$invalidate(1, anchor);
		});
	}

	$$self.$capture_state = () => ({
		MenuSurface,
		Anchor,
		ImageList,
		ImageListItem: Item$1,
		ImageAspectContainer,
		Image,
		Button: Button_1,
		surface,
		anchor,
		anchorClasses
	});

	$$self.$inject_state = $$props => {
		if ("surface" in $$props) $$invalidate(0, surface = $$props.surface);
		if ("anchor" in $$props) $$invalidate(1, anchor = $$props.anchor);
		if ("anchorClasses" in $$props) $$invalidate(2, anchorClasses = $$props.anchorClasses);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		surface,
		anchor,
		anchorClasses,
		click_handler,
		menusurface_binding,
		menusurface_anchorElement_binding,
		Anchor_function,
		Anchor_function_1,
		div_binding
	];
}

class ManualAnchor extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ManualAnchor",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/menu-surface/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/menu-surface/index.svelte";

// (14:2) <Demo component={Anchored} file="menu-surface/_Anchored.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Anchored automatically, corner set to bottom-left");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Anchored automatically, corner set to bottom-left");
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
		source: "(14:2) <Demo component={Anchored} file=\\\"menu-surface/_Anchored.svelte\\\">",
		ctx
	});

	return block;
}

// (18:2) <Demo     component={ManualAnchor}     files={[       'menu-surface/_ManualAnchor.svelte',       'menu-surface/_ManualAnchor.scss',     ]}   >
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Anchored manually");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Anchored manually");
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
		source: "(18:2) <Demo     component={ManualAnchor}     files={[       'menu-surface/_ManualAnchor.svelte',       'menu-surface/_ManualAnchor.scss',     ]}   >",
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
	let div;
	let t9;
	let current;

	demo0 = new Demo({
			props: {
				component: Simple,
				file: "menu-surface/_Simple.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: Static,
				file: "menu-surface/_Static.svelte"
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: Anchored,
				file: "menu-surface/_Anchored.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: ManualAnchor,
				files: ["menu-surface/_ManualAnchor.svelte", "menu-surface/_ManualAnchor.scss"],
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
			t1 = text("Menu Surface");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/menu-surface");
			t4 = space();
			create_component(demo0.$$.fragment);
			t5 = space();
			create_component(demo1.$$.fragment);
			t6 = space();
			create_component(demo2.$$.fragment);
			t7 = space();
			create_component(demo3.$$.fragment);
			t8 = space();
			div = element("div");
			t9 = text("Long div for scrolling...");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1fjtwlq\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Menu Surface");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/menu-surface");
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
			div = claim_element(section_nodes, "DIV", { style: true });
			var div_nodes = children(div);
			t9 = claim_text(div_nodes, "Long div for scrolling...");
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Menu Surface - SMUI";
			add_location(h2, file, 5, 2, 79);
			attr_dev(pre, "class", "demo-spaced");
			add_location(pre, file, 7, 2, 104);
			set_style(div, "padding-top", "200px");
			add_location(div, file, 27, 2, 608);
			add_location(section, file, 4, 0, 67);
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
			append_dev(section, div);
			append_dev(div, t9);
			current = true;
		},
		p: function update(ctx, [dirty]) {
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
		},
		i: function intro(local) {
			if (current) return;
			transition_in(demo0.$$.fragment, local);
			transition_in(demo1.$$.fragment, local);
			transition_in(demo2.$$.fragment, local);
			transition_in(demo3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(demo0.$$.fragment, local);
			transition_out(demo1.$$.fragment, local);
			transition_out(demo2.$$.fragment, local);
			transition_out(demo3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			destroy_component(demo0);
			destroy_component(demo1);
			destroy_component(demo2);
			destroy_component(demo3);
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
	validate_slots("Menu_surface", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Menu_surface> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Simple,
		Static,
		Anchored,
		ManualAnchor
	});

	return [];
}

class Menu_surface extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Menu_surface",
			options,
			id: create_fragment.name
		});
	}
}

export default Menu_surface;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMDRkMDU2NjQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUtc3VyZmFjZS9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS1zdXJmYWNlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS1zdXJmYWNlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbWVudS1zdXJmYWNlL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUtc3VyZmFjZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL21lbnUtc3VyZmFjZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS1zdXJmYWNlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL3V0aWwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9tZW51LXN1cmZhY2Uvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL21lbnUtc3VyZmFjZS9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzTWFwLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS1zdXJmYWNlL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZGlzcGF0Y2guanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9tZW51LXN1cmZhY2Uvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbWVudS1zdXJmYWNlL01lbnVTdXJmYWNlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9tZW51LXN1cmZhY2UvX1N0YXRpYy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vbWVudS1zdXJmYWNlL19BbmNob3JlZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vbWVudS1zdXJmYWNlL19NYW51YWxBbmNob3Iuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL21lbnUtc3VyZmFjZS9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEFOQ0hPUjogJ21kYy1tZW51LXN1cmZhY2UtLWFuY2hvcicsXG4gICAgQU5JTUFUSU5HX0NMT1NFRDogJ21kYy1tZW51LXN1cmZhY2UtLWFuaW1hdGluZy1jbG9zZWQnLFxuICAgIEFOSU1BVElOR19PUEVOOiAnbWRjLW1lbnUtc3VyZmFjZS0tYW5pbWF0aW5nLW9wZW4nLFxuICAgIEZJWEVEOiAnbWRjLW1lbnUtc3VyZmFjZS0tZml4ZWQnLFxuICAgIElTX09QRU5fQkVMT1c6ICdtZGMtbWVudS1zdXJmYWNlLS1pcy1vcGVuLWJlbG93JyxcbiAgICBPUEVOOiAnbWRjLW1lbnUtc3VyZmFjZS0tb3BlbicsXG4gICAgUk9PVDogJ21kYy1tZW51LXN1cmZhY2UnLFxufTtcbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQ0xPU0VEX0VWRU5UOiAnTURDTWVudVN1cmZhY2U6Y2xvc2VkJyxcbiAgICBDTE9TSU5HX0VWRU5UOiAnTURDTWVudVN1cmZhY2U6Y2xvc2luZycsXG4gICAgT1BFTkVEX0VWRU5UOiAnTURDTWVudVN1cmZhY2U6b3BlbmVkJyxcbiAgICBGT0NVU0FCTEVfRUxFTUVOVFM6IFtcbiAgICAgICAgJ2J1dHRvbjpub3QoOmRpc2FibGVkKScsXG4gICAgICAgICdbaHJlZl06bm90KFthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXSknLFxuICAgICAgICAnaW5wdXQ6bm90KDpkaXNhYmxlZCknLFxuICAgICAgICAnc2VsZWN0Om5vdCg6ZGlzYWJsZWQpJyxcbiAgICAgICAgJ3RleHRhcmVhOm5vdCg6ZGlzYWJsZWQpJyxcbiAgICAgICAgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdKTpub3QoW2FyaWEtZGlzYWJsZWQ9XCJ0cnVlXCJdKScsXG4gICAgXS5qb2luKCcsICcpLFxufTtcbi8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG52YXIgbnVtYmVycyA9IHtcbiAgICAvKiogVG90YWwgZHVyYXRpb24gb2YgbWVudS1zdXJmYWNlIG9wZW4gYW5pbWF0aW9uLiAqL1xuICAgIFRSQU5TSVRJT05fT1BFTl9EVVJBVElPTjogMTIwLFxuICAgIC8qKiBUb3RhbCBkdXJhdGlvbiBvZiBtZW51LXN1cmZhY2UgY2xvc2UgYW5pbWF0aW9uLiAqL1xuICAgIFRSQU5TSVRJT05fQ0xPU0VfRFVSQVRJT046IDc1LFxuICAgIC8qKiBNYXJnaW4gbGVmdCB0byB0aGUgZWRnZSBvZiB0aGUgdmlld3BvcnQgd2hlbiBtZW51LXN1cmZhY2UgaXMgYXQgbWF4aW11bSBwb3NzaWJsZSBoZWlnaHQuIEFsc28gdXNlZCBhcyBhIHZpZXdwb3J0IG1hcmdpbi4gKi9cbiAgICBNQVJHSU5fVE9fRURHRTogMzIsXG4gICAgLyoqIFJhdGlvIG9mIGFuY2hvciB3aWR0aCB0byBtZW51LXN1cmZhY2Ugd2lkdGggZm9yIHN3aXRjaGluZyBmcm9tIGNvcm5lciBwb3NpdGlvbmluZyB0byBjZW50ZXIgcG9zaXRpb25pbmcuICovXG4gICAgQU5DSE9SX1RPX01FTlVfU1VSRkFDRV9XSURUSF9SQVRJTzogMC42Nyxcbn07XG4vKipcbiAqIEVudW0gZm9yIGJpdHMgaW4gdGhlIHtAc2VlIENvcm5lcikgYml0bWFwLlxuICovXG52YXIgQ29ybmVyQml0O1xuKGZ1bmN0aW9uIChDb3JuZXJCaXQpIHtcbiAgICBDb3JuZXJCaXRbQ29ybmVyQml0W1wiQk9UVE9NXCJdID0gMV0gPSBcIkJPVFRPTVwiO1xuICAgIENvcm5lckJpdFtDb3JuZXJCaXRbXCJDRU5URVJcIl0gPSAyXSA9IFwiQ0VOVEVSXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIlJJR0hUXCJdID0gNF0gPSBcIlJJR0hUXCI7XG4gICAgQ29ybmVyQml0W0Nvcm5lckJpdFtcIkZMSVBfUlRMXCJdID0gOF0gPSBcIkZMSVBfUlRMXCI7XG59KShDb3JuZXJCaXQgfHwgKENvcm5lckJpdCA9IHt9KSk7XG4vKipcbiAqIEVudW0gZm9yIHJlcHJlc2VudGluZyBhbiBlbGVtZW50IGNvcm5lciBmb3IgcG9zaXRpb25pbmcgdGhlIG1lbnUtc3VyZmFjZS5cbiAqXG4gKiBUaGUgU1RBUlQgY29uc3RhbnRzIG1hcCB0byBMRUZUIGlmIGVsZW1lbnQgZGlyZWN0aW9uYWxpdHkgaXMgbGVmdFxuICogdG8gcmlnaHQgYW5kIFJJR0hUIGlmIHRoZSBkaXJlY3Rpb25hbGl0eSBpcyByaWdodCB0byBsZWZ0LlxuICogTGlrZXdpc2UgRU5EIG1hcHMgdG8gUklHSFQgb3IgTEVGVCBkZXBlbmRpbmcgb24gdGhlIGRpcmVjdGlvbmFsaXR5LlxuICovXG52YXIgQ29ybmVyO1xuKGZ1bmN0aW9uIChDb3JuZXIpIHtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX0xFRlRcIl0gPSAwXSA9IFwiVE9QX0xFRlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX1JJR0hUXCJdID0gNF0gPSBcIlRPUF9SSUdIVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fTEVGVFwiXSA9IDFdID0gXCJCT1RUT01fTEVGVFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fUklHSFRcIl0gPSA1XSA9IFwiQk9UVE9NX1JJR0hUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIlRPUF9TVEFSVFwiXSA9IDhdID0gXCJUT1BfU1RBUlRcIjtcbiAgICBDb3JuZXJbQ29ybmVyW1wiVE9QX0VORFwiXSA9IDEyXSA9IFwiVE9QX0VORFwiO1xuICAgIENvcm5lcltDb3JuZXJbXCJCT1RUT01fU1RBUlRcIl0gPSA5XSA9IFwiQk9UVE9NX1NUQVJUXCI7XG4gICAgQ29ybmVyW0Nvcm5lcltcIkJPVFRPTV9FTkRcIl0gPSAxM10gPSBcIkJPVFRPTV9FTkRcIjtcbn0pKENvcm5lciB8fCAoQ29ybmVyID0ge30pKTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIG51bWJlcnMsIENvcm5lckJpdCwgQ29ybmVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzLCBfX3ZhbHVlcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgQ29ybmVyLCBDb3JuZXJCaXQsIGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5pc1N1cmZhY2VPcGVuID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzUXVpY2tPcGVuID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzSG9pc3RlZEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuaXNGaXhlZFBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIF90aGlzLmlzSG9yaXpvbnRhbGx5Q2VudGVyZWRPblZpZXdwb3J0ID0gZmFsc2U7XG4gICAgICAgIF90aGlzLm1heEhlaWdodCA9IDA7XG4gICAgICAgIF90aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkID0gMDtcbiAgICAgICAgX3RoaXMuY2xvc2VBbmltYXRpb25FbmRUaW1lcklkID0gMDtcbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uUmVxdWVzdElkID0gMDtcbiAgICAgICAgX3RoaXMuYW5jaG9yQ29ybmVyID0gQ29ybmVyLlRPUF9TVEFSVDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlIHRvIHdoaWNoIG1lbnUgc3VyZmFjZSBpcyBhdHRhY2hlZCB0byBhbmNob3IuXG4gICAgICAgICAqXG4gICAgICAgICAqICBBbmNob3IgY29ybmVyIC0tLT4rLS0tLS0tLS0tLStcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgIHwgIEFOQ0hPUiAgfFxuICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0rXG4gICAgICAgICAqICBPcmlnaW4gY29ybmVyIC0tLT4rLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICB8IE1FTlUgU1VSRkFDRSB8XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5vcmlnaW5Db3JuZXIgPSBDb3JuZXIuVE9QX1NUQVJUO1xuICAgICAgICBfdGhpcy5hbmNob3JNYXJnaW4gPSB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9O1xuICAgICAgICBfdGhpcy5wb3NpdGlvbiA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtYmVycztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENNZW51U3VyZmFjZUZvdW5kYXRpb24sIFwiQ29ybmVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gQ29ybmVyO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAc2VlIHtAbGluayBNRENNZW51U3VyZmFjZUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGhhc0FuY2hvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNFbGVtZW50SW5Db250YWluZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzRm9jdXNlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNSdGw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGdldElubmVyRGltZW5zaW9uczogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgaGVpZ2h0OiAwLCB3aWR0aDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBnZXRBbmNob3JEaW1lbnNpb25zOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd0RpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGhlaWdodDogMCwgd2lkdGg6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Qm9keURpbWVuc2lvbnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IGhlaWdodDogMCwgd2lkdGg6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93U2Nyb2xsOiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB4OiAwLCB5OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIHNldFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0TWF4SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0VHJhbnNmb3JtT3JpZ2luOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2F2ZUZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVzdG9yZUZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2xvc2U6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlPcGVuOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5Q2xvc2luZzogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UID0gX2EuUk9PVCwgT1BFTiA9IF9hLk9QRU47XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyLmhhc0NsYXNzKFJPT1QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoUk9PVCArIFwiIGNsYXNzIHJlcXVpcmVkIGluIHJvb3QgZWxlbWVudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5oYXNDbGFzcyhPUEVOKSkge1xuICAgICAgICAgICAgdGhpcy5pc1N1cmZhY2VPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5vcGVuQW5pbWF0aW9uRW5kVGltZXJJZCk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmNsb3NlQW5pbWF0aW9uRW5kVGltZXJJZCk7XG4gICAgICAgIC8vIENhbmNlbCBhbnkgY3VycmVudGx5IHJ1bm5pbmcgYW5pbWF0aW9ucy5cbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25SZXF1ZXN0SWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBEZWZhdWx0IGFuY2hvciBjb3JuZXIgYWxpZ25tZW50IG9mIHRvcC1sZWZ0IG1lbnUgc3VyZmFjZSBjb3JuZXIuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBbmNob3JDb3JuZXIgPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHRoaXMuYW5jaG9yQ29ybmVyID0gY29ybmVyO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRmxpcCBtZW51IGNvcm5lciBob3Jpem9udGFsbHkuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5mbGlwQ29ybmVySG9yaXpvbnRhbGx5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm9yaWdpbkNvcm5lciA9IHRoaXMub3JpZ2luQ29ybmVyIF4gQ29ybmVyQml0LlJJR0hUO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIG1hcmdpbiBTZXQgb2YgbWFyZ2luIHZhbHVlcyBmcm9tIGFuY2hvci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldEFuY2hvck1hcmdpbiA9IGZ1bmN0aW9uIChtYXJnaW4pIHtcbiAgICAgICAgdGhpcy5hbmNob3JNYXJnaW4udG9wID0gbWFyZ2luLnRvcCB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbi5yaWdodCA9IG1hcmdpbi5yaWdodCB8fCAwO1xuICAgICAgICB0aGlzLmFuY2hvck1hcmdpbi5ib3R0b20gPSBtYXJnaW4uYm90dG9tIHx8IDA7XG4gICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luLmxlZnQgPSBtYXJnaW4ubGVmdCB8fCAwO1xuICAgIH07XG4gICAgLyoqIFVzZWQgdG8gaW5kaWNhdGUgaWYgdGhlIG1lbnUtc3VyZmFjZSBpcyBob2lzdGVkIHRvIHRoZSBib2R5LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0SXNIb2lzdGVkID0gZnVuY3Rpb24gKGlzSG9pc3RlZCkge1xuICAgICAgICB0aGlzLmlzSG9pc3RlZEVsZW1lbnQgPSBpc0hvaXN0ZWQ7XG4gICAgfTtcbiAgICAvKiogVXNlZCB0byBzZXQgdGhlIG1lbnUtc3VyZmFjZSBjYWxjdWxhdGlvbnMgYmFzZWQgb24gYSBmaXhlZCBwb3NpdGlvbiBtZW51LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0Rml4ZWRQb3NpdGlvbiA9IGZ1bmN0aW9uIChpc0ZpeGVkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5pc0ZpeGVkUG9zaXRpb24gPSBpc0ZpeGVkUG9zaXRpb247XG4gICAgfTtcbiAgICAvKiogU2V0cyB0aGUgbWVudS1zdXJmYWNlIHBvc2l0aW9uIG9uIHRoZSBwYWdlLiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QWJzb2x1dGVQb3NpdGlvbiA9IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMuaXNGaW5pdGUoeCkgPyB4IDogMDtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5pc0Zpbml0ZSh5KSA/IHkgOiAwO1xuICAgIH07XG4gICAgLyoqIFNldHMgd2hldGhlciBtZW51LXN1cmZhY2Ugc2hvdWxkIGJlIGhvcml6b250YWxseSBjZW50ZXJlZCB0byB2aWV3cG9ydC4gKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldElzSG9yaXpvbnRhbGx5Q2VudGVyZWRPblZpZXdwb3J0ID0gZnVuY3Rpb24gKGlzQ2VudGVyZWQpIHtcbiAgICAgICAgdGhpcy5pc0hvcml6b250YWxseUNlbnRlcmVkT25WaWV3cG9ydCA9IGlzQ2VudGVyZWQ7XG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFF1aWNrT3BlbiA9IGZ1bmN0aW9uIChxdWlja09wZW4pIHtcbiAgICAgICAgdGhpcy5pc1F1aWNrT3BlbiA9IHF1aWNrT3BlbjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgbWF4aW11bSBtZW51LXN1cmZhY2UgaGVpZ2h0IG9uIG9wZW4uXG4gICAgICogQHBhcmFtIG1heEhlaWdodCBUaGUgZGVzaXJlZCBtYXgtaGVpZ2h0LiBTZXQgdG8gMCAoZGVmYXVsdCkgdG9cbiAgICAgKiAgICAgYXV0b21hdGljYWxseSBjYWxjdWxhdGUgbWF4IGhlaWdodCBiYXNlZCBvbiBhdmFpbGFibGUgdmlld3BvcnQgc3BhY2UuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRNYXhIZWlnaHQgPSBmdW5jdGlvbiAobWF4SGVpZ2h0KSB7XG4gICAgICAgIHRoaXMubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzU3VyZmFjZU9wZW47XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBPcGVuIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5pc1N1cmZhY2VPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLnNhdmVGb2N1cygpO1xuICAgICAgICBpZiAodGhpcy5pc1F1aWNrT3Blbikge1xuICAgICAgICAgICAgdGhpcy5pc1N1cmZhY2VPcGVuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlci5nZXRJbm5lckRpbWVuc2lvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuYXV0b3Bvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIubm90aWZ5T3BlbigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19PUEVOKTtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uUmVxdWVzdElkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICAgICAgICAgIF90aGlzLmRpbWVuc2lvbnMgPSBfdGhpcy5hZGFwdGVyLmdldElubmVyRGltZW5zaW9ucygpO1xuICAgICAgICAgICAgICAgIF90aGlzLmF1dG9wb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIF90aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9wZW5BbmltYXRpb25FbmRUaW1lcklkID0gMDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkdfT1BFTik7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIubm90aWZ5T3BlbigpO1xuICAgICAgICAgICAgICAgIH0sIG51bWJlcnMuVFJBTlNJVElPTl9PUEVOX0RVUkFUSU9OKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pc1N1cmZhY2VPcGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uIChza2lwUmVzdG9yZUZvY3VzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChza2lwUmVzdG9yZUZvY3VzID09PSB2b2lkIDApIHsgc2tpcFJlc3RvcmVGb2N1cyA9IGZhbHNlOyB9XG4gICAgICAgIGlmICghdGhpcy5pc1N1cmZhY2VPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeUNsb3NpbmcoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNRdWlja09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXNTdXJmYWNlT3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCFza2lwUmVzdG9yZUZvY3VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXliZVJlc3RvcmVGb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLk9QRU4pO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLklTX09QRU5fQkVMT1cpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeUNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElOR19DTE9TRUQpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENNZW51U3VyZmFjZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PUEVOKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuSVNfT1BFTl9CRUxPVyk7XG4gICAgICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jbG9zZUFuaW1hdGlvbkVuZFRpbWVySWQgPSAwO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQU5JTUFUSU5HX0NMT1NFRCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5ub3RpZnlDbG9zZSgpO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5UUkFOU0lUSU9OX0NMT1NFX0RVUkFUSU9OKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNTdXJmYWNlT3BlbiA9IGZhbHNlO1xuICAgICAgICBpZiAoIXNraXBSZXN0b3JlRm9jdXMpIHtcbiAgICAgICAgICAgIHRoaXMubWF5YmVSZXN0b3JlRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqIEhhbmRsZSBjbGlja3MgYW5kIGNsb3NlIGlmIG5vdCB3aXRoaW4gbWVudS1zdXJmYWNlIGVsZW1lbnQuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCb2R5Q2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBlbCA9IGV2dC50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNFbGVtZW50SW5Db250YWluZXIoZWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH07XG4gICAgLyoqIEhhbmRsZSBrZXlzIHRoYXQgY2xvc2UgdGhlIHN1cmZhY2UuICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIga2V5Q29kZSA9IGV2dC5rZXlDb2RlLCBrZXkgPSBldnQua2V5O1xuICAgICAgICB2YXIgaXNFc2NhcGUgPSBrZXkgPT09ICdFc2NhcGUnIHx8IGtleUNvZGUgPT09IDI3O1xuICAgICAgICBpZiAoaXNFc2NhcGUpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5hdXRvcG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgLy8gQ29tcHV0ZSBtZWFzdXJlbWVudHMgZm9yIGF1dG9wb3NpdGlvbiBtZXRob2RzIHJldXNlLlxuICAgICAgICB0aGlzLm1lYXN1cmVtZW50cyA9IHRoaXMuZ2V0QXV0b0xheW91dG1lYXN1cmVtZW50cygpO1xuICAgICAgICB2YXIgY29ybmVyID0gdGhpcy5nZXRvcmlnaW5Db3JuZXIoKTtcbiAgICAgICAgdmFyIG1heE1lbnVTdXJmYWNlSGVpZ2h0ID0gdGhpcy5nZXRNZW51U3VyZmFjZU1heEhlaWdodChjb3JuZXIpO1xuICAgICAgICB2YXIgdmVydGljYWxBbGlnbm1lbnQgPSB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICAgICAgdmFyIGhvcml6b250YWxBbGlnbm1lbnQgPSB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5SSUdIVCkgPyAncmlnaHQnIDogJ2xlZnQnO1xuICAgICAgICB2YXIgaG9yaXpvbnRhbE9mZnNldCA9IHRoaXMuZ2V0SG9yaXpvbnRhbE9yaWdpbk9mZnNldChjb3JuZXIpO1xuICAgICAgICB2YXIgdmVydGljYWxPZmZzZXQgPSB0aGlzLmdldFZlcnRpY2FsT3JpZ2luT2Zmc2V0KGNvcm5lcik7XG4gICAgICAgIHZhciBfYiA9IHRoaXMubWVhc3VyZW1lbnRzLCBhbmNob3JTaXplID0gX2IuYW5jaG9yU2l6ZSwgc3VyZmFjZVNpemUgPSBfYi5zdXJmYWNlU2l6ZTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gKF9hID0ge30sXG4gICAgICAgICAgICBfYVtob3Jpem9udGFsQWxpZ25tZW50XSA9IGhvcml6b250YWxPZmZzZXQsXG4gICAgICAgICAgICBfYVt2ZXJ0aWNhbEFsaWdubWVudF0gPSB2ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgICAgIF9hKTtcbiAgICAgICAgLy8gQ2VudGVyIGFsaWduIHdoZW4gYW5jaG9yIHdpZHRoIGlzIGNvbXBhcmFibGUgb3IgZ3JlYXRlciB0aGFuIG1lbnUgc3VyZmFjZSwgb3RoZXJ3aXNlIGtlZXAgY29ybmVyLlxuICAgICAgICBpZiAoYW5jaG9yU2l6ZS53aWR0aCAvIHN1cmZhY2VTaXplLndpZHRoID4gbnVtYmVycy5BTkNIT1JfVE9fTUVOVV9TVVJGQUNFX1dJRFRIX1JBVElPKSB7XG4gICAgICAgICAgICBob3Jpem9udGFsQWxpZ25tZW50ID0gJ2NlbnRlcic7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIG1lbnUtc3VyZmFjZSBoYXMgYmVlbiBob2lzdGVkIHRvIHRoZSBib2R5LCBpdCdzIG5vIGxvbmdlciByZWxhdGl2ZSB0byB0aGUgYW5jaG9yIGVsZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuaXNIb2lzdGVkRWxlbWVudCB8fCB0aGlzLmlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RQb3NpdGlvbkZvckhvaXN0ZWRFbGVtZW50KHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0VHJhbnNmb3JtT3JpZ2luKGhvcml6b250YWxBbGlnbm1lbnQgKyBcIiBcIiArIHZlcnRpY2FsQWxpZ25tZW50KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldE1heEhlaWdodChtYXhNZW51U3VyZmFjZUhlaWdodCA/IG1heE1lbnVTdXJmYWNlSGVpZ2h0ICsgJ3B4JyA6ICcnKTtcbiAgICAgICAgLy8gSWYgaXQgaXMgb3BlbmVkIGZyb20gdGhlIHRvcCB0aGVuIGFkZCBpcy1vcGVuLWJlbG93IGNsYXNzXG4gICAgICAgIGlmICghdGhpcy5oYXNCaXQoY29ybmVyLCBDb3JuZXJCaXQuQk9UVE9NKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5jc3NDbGFzc2VzLklTX09QRU5fQkVMT1cpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIE1lYXN1cmVtZW50cyB1c2VkIHRvIHBvc2l0aW9uIG1lbnUgc3VyZmFjZSBwb3B1cC5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEF1dG9MYXlvdXRtZWFzdXJlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhbmNob3JSZWN0ID0gdGhpcy5hZGFwdGVyLmdldEFuY2hvckRpbWVuc2lvbnMoKTtcbiAgICAgICAgdmFyIGJvZHlTaXplID0gdGhpcy5hZGFwdGVyLmdldEJvZHlEaW1lbnNpb25zKCk7XG4gICAgICAgIHZhciB2aWV3cG9ydFNpemUgPSB0aGlzLmFkYXB0ZXIuZ2V0V2luZG93RGltZW5zaW9ucygpO1xuICAgICAgICB2YXIgd2luZG93U2Nyb2xsID0gdGhpcy5hZGFwdGVyLmdldFdpbmRvd1Njcm9sbCgpO1xuICAgICAgICBpZiAoIWFuY2hvclJlY3QpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBQb3NpdGlvbmFsIHByb3BlcnRpZXMgYXJlIG1vcmUgcmVhZGFibGUgd2hlbiB0aGV5J3JlIGdyb3VwZWQgdG9nZXRoZXJcbiAgICAgICAgICAgIGFuY2hvclJlY3QgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHRoaXMucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24ueSxcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFuY2hvclNpemU6IGFuY2hvclJlY3QsXG4gICAgICAgICAgICBib2R5U2l6ZTogYm9keVNpemUsXG4gICAgICAgICAgICBzdXJmYWNlU2l6ZTogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZToge1xuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBQb3NpdGlvbmFsIHByb3BlcnRpZXMgYXJlIG1vcmUgcmVhZGFibGUgd2hlbiB0aGV5J3JlIGdyb3VwZWQgdG9nZXRoZXJcbiAgICAgICAgICAgICAgICB0b3A6IGFuY2hvclJlY3QudG9wLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB2aWV3cG9ydFNpemUud2lkdGggLSBhbmNob3JSZWN0LnJpZ2h0LFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdmlld3BvcnRTaXplLmhlaWdodCAtIGFuY2hvclJlY3QuYm90dG9tLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGFuY2hvclJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZpZXdwb3J0U2l6ZTogdmlld3BvcnRTaXplLFxuICAgICAgICAgICAgd2luZG93U2Nyb2xsOiB3aW5kb3dTY3JvbGwsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDb21wdXRlcyB0aGUgY29ybmVyIG9mIHRoZSBhbmNob3IgZnJvbSB3aGljaCB0byBhbmltYXRlIGFuZCBwb3NpdGlvbiB0aGVcbiAgICAgKiBtZW51IHN1cmZhY2UuXG4gICAgICpcbiAgICAgKiBPbmx5IExFRlQgb3IgUklHSFQgYml0IGlzIHVzZWQgdG8gcG9zaXRpb24gdGhlIG1lbnUgc3VyZmFjZSBpZ25vcmluZyBSVExcbiAgICAgKiBjb250ZXh0LiBFLmcuLCBtZW51IHN1cmZhY2Ugd2lsbCBiZSBwb3NpdGlvbmVkIGZyb20gcmlnaHQgc2lkZSBvbiBUT1BfRU5ELlxuICAgICAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0b3JpZ2luQ29ybmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29ybmVyID0gdGhpcy5vcmlnaW5Db3JuZXI7XG4gICAgICAgIHZhciBfYSA9IHRoaXMubWVhc3VyZW1lbnRzLCB2aWV3cG9ydERpc3RhbmNlID0gX2Eudmlld3BvcnREaXN0YW5jZSwgYW5jaG9yU2l6ZSA9IF9hLmFuY2hvclNpemUsIHN1cmZhY2VTaXplID0gX2Euc3VyZmFjZVNpemU7XG4gICAgICAgIHZhciBNQVJHSU5fVE9fRURHRSA9IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5udW1iZXJzLk1BUkdJTl9UT19FREdFO1xuICAgICAgICB2YXIgaXNBbmNob3JlZFRvQm90dG9tID0gdGhpcy5oYXNCaXQodGhpcy5hbmNob3JDb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgYXZhaWxhYmxlVG9wO1xuICAgICAgICB2YXIgYXZhaWxhYmxlQm90dG9tO1xuICAgICAgICBpZiAoaXNBbmNob3JlZFRvQm90dG9tKSB7XG4gICAgICAgICAgICBhdmFpbGFibGVUb3AgPVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UudG9wIC0gTUFSR0lOX1RPX0VER0UgKyB0aGlzLmFuY2hvck1hcmdpbi5ib3R0b207XG4gICAgICAgICAgICBhdmFpbGFibGVCb3R0b20gPVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UuYm90dG9tIC0gTUFSR0lOX1RPX0VER0UgLSB0aGlzLmFuY2hvck1hcmdpbi5ib3R0b207XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdmFpbGFibGVUb3AgPVxuICAgICAgICAgICAgICAgIHZpZXdwb3J0RGlzdGFuY2UudG9wIC0gTUFSR0lOX1RPX0VER0UgKyB0aGlzLmFuY2hvck1hcmdpbi50b3A7XG4gICAgICAgICAgICBhdmFpbGFibGVCb3R0b20gPSB2aWV3cG9ydERpc3RhbmNlLmJvdHRvbSAtIE1BUkdJTl9UT19FREdFICtcbiAgICAgICAgICAgICAgICBhbmNob3JTaXplLmhlaWdodCAtIHRoaXMuYW5jaG9yTWFyZ2luLnRvcDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNBdmFpbGFibGVCb3R0b20gPSBhdmFpbGFibGVCb3R0b20gLSBzdXJmYWNlU2l6ZS5oZWlnaHQgPiAwO1xuICAgICAgICBpZiAoIWlzQXZhaWxhYmxlQm90dG9tICYmIGF2YWlsYWJsZVRvcCA+IGF2YWlsYWJsZUJvdHRvbSkge1xuICAgICAgICAgICAgLy8gQXR0YWNoIGJvdHRvbSBzaWRlIG9mIHN1cmZhY2UgdG8gdGhlIGFuY2hvci5cbiAgICAgICAgICAgIGNvcm5lciA9IHRoaXMuc2V0Qml0KGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzUnRsID0gdGhpcy5hZGFwdGVyLmlzUnRsKCk7XG4gICAgICAgIHZhciBpc0ZsaXBSdGwgPSB0aGlzLmhhc0JpdCh0aGlzLmFuY2hvckNvcm5lciwgQ29ybmVyQml0LkZMSVBfUlRMKTtcbiAgICAgICAgdmFyIGhhc1JpZ2h0Qml0ID0gdGhpcy5oYXNCaXQodGhpcy5hbmNob3JDb3JuZXIsIENvcm5lckJpdC5SSUdIVCkgfHxcbiAgICAgICAgICAgIHRoaXMuaGFzQml0KGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgLy8gV2hldGhlciBzdXJmYWNlIGF0dGFjaGVkIHRvIHJpZ2h0IHNpZGUgb2YgYW5jaG9yIGVsZW1lbnQuXG4gICAgICAgIHZhciBpc0FuY2hvcmVkVG9SaWdodCA9IGZhbHNlO1xuICAgICAgICAvLyBBbmNob3JlZCB0byBzdGFydFxuICAgICAgICBpZiAoaXNSdGwgJiYgaXNGbGlwUnRsKSB7XG4gICAgICAgICAgICBpc0FuY2hvcmVkVG9SaWdodCA9ICFoYXNSaWdodEJpdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEFuY2hvcmVkIHRvIHJpZ2h0XG4gICAgICAgICAgICBpc0FuY2hvcmVkVG9SaWdodCA9IGhhc1JpZ2h0Qml0O1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdmFpbGFibGVMZWZ0O1xuICAgICAgICB2YXIgYXZhaWxhYmxlUmlnaHQ7XG4gICAgICAgIGlmIChpc0FuY2hvcmVkVG9SaWdodCkge1xuICAgICAgICAgICAgYXZhaWxhYmxlTGVmdCA9XG4gICAgICAgICAgICAgICAgdmlld3BvcnREaXN0YW5jZS5sZWZ0ICsgYW5jaG9yU2l6ZS53aWR0aCArIHRoaXMuYW5jaG9yTWFyZ2luLnJpZ2h0O1xuICAgICAgICAgICAgYXZhaWxhYmxlUmlnaHQgPSB2aWV3cG9ydERpc3RhbmNlLnJpZ2h0IC0gdGhpcy5hbmNob3JNYXJnaW4ucmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdmFpbGFibGVMZWZ0ID0gdmlld3BvcnREaXN0YW5jZS5sZWZ0ICsgdGhpcy5hbmNob3JNYXJnaW4ubGVmdDtcbiAgICAgICAgICAgIGF2YWlsYWJsZVJpZ2h0ID1cbiAgICAgICAgICAgICAgICB2aWV3cG9ydERpc3RhbmNlLnJpZ2h0ICsgYW5jaG9yU2l6ZS53aWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luLmxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzQXZhaWxhYmxlTGVmdCA9IGF2YWlsYWJsZUxlZnQgLSBzdXJmYWNlU2l6ZS53aWR0aCA+IDA7XG4gICAgICAgIHZhciBpc0F2YWlsYWJsZVJpZ2h0ID0gYXZhaWxhYmxlUmlnaHQgLSBzdXJmYWNlU2l6ZS53aWR0aCA+IDA7XG4gICAgICAgIHZhciBpc09yaWdpbkNvcm5lckFsaWduZWRUb0VuZCA9IHRoaXMuaGFzQml0KGNvcm5lciwgQ29ybmVyQml0LkZMSVBfUlRMKSAmJlxuICAgICAgICAgICAgdGhpcy5oYXNCaXQoY29ybmVyLCBDb3JuZXJCaXQuUklHSFQpO1xuICAgICAgICBpZiAoaXNBdmFpbGFibGVSaWdodCAmJiBpc09yaWdpbkNvcm5lckFsaWduZWRUb0VuZCAmJiBpc1J0bCB8fFxuICAgICAgICAgICAgIWlzQXZhaWxhYmxlTGVmdCAmJiBpc09yaWdpbkNvcm5lckFsaWduZWRUb0VuZCkge1xuICAgICAgICAgICAgLy8gQXR0YWNoIGxlZnQgc2lkZSBvZiBzdXJmYWNlIHRvIHRoZSBhbmNob3IuXG4gICAgICAgICAgICBjb3JuZXIgPSB0aGlzLnVuc2V0Qml0KGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0F2YWlsYWJsZUxlZnQgJiYgaXNBbmNob3JlZFRvUmlnaHQgJiYgaXNSdGwgfHxcbiAgICAgICAgICAgIChpc0F2YWlsYWJsZUxlZnQgJiYgIWlzQW5jaG9yZWRUb1JpZ2h0ICYmIGhhc1JpZ2h0Qml0KSB8fFxuICAgICAgICAgICAgKCFpc0F2YWlsYWJsZVJpZ2h0ICYmIGF2YWlsYWJsZUxlZnQgPj0gYXZhaWxhYmxlUmlnaHQpKSB7XG4gICAgICAgICAgICAvLyBBdHRhY2ggcmlnaHQgc2lkZSBvZiBzdXJmYWNlIHRvIHRoZSBhbmNob3IuXG4gICAgICAgICAgICBjb3JuZXIgPSB0aGlzLnNldEJpdChjb3JuZXIsIENvcm5lckJpdC5SSUdIVCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvcm5lcjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBjb3JuZXIgT3JpZ2luIGNvcm5lciBvZiB0aGUgbWVudSBzdXJmYWNlLlxuICAgICAqIEByZXR1cm4gTWF4aW11bSBoZWlnaHQgb2YgdGhlIG1lbnUgc3VyZmFjZSwgYmFzZWQgb24gYXZhaWxhYmxlIHNwYWNlLiAwIGluZGljYXRlcyBzaG91bGQgbm90IGJlIHNldC5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldE1lbnVTdXJmYWNlTWF4SGVpZ2h0ID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICBpZiAodGhpcy5tYXhIZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXhIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZpZXdwb3J0RGlzdGFuY2UgPSB0aGlzLm1lYXN1cmVtZW50cy52aWV3cG9ydERpc3RhbmNlO1xuICAgICAgICB2YXIgbWF4SGVpZ2h0ID0gMDtcbiAgICAgICAgdmFyIGlzQm90dG9tQWxpZ25lZCA9IHRoaXMuaGFzQml0KGNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciBpc0JvdHRvbUFuY2hvcmVkID0gdGhpcy5oYXNCaXQodGhpcy5hbmNob3JDb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgTUFSR0lOX1RPX0VER0UgPSBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ubnVtYmVycy5NQVJHSU5fVE9fRURHRTtcbiAgICAgICAgLy8gV2hlbiBtYXhpbXVtIGhlaWdodCBpcyBub3Qgc3BlY2lmaWVkLCBpdCBpcyBoYW5kbGVkIGZyb20gQ1NTLlxuICAgICAgICBpZiAoaXNCb3R0b21BbGlnbmVkKSB7XG4gICAgICAgICAgICBtYXhIZWlnaHQgPSB2aWV3cG9ydERpc3RhbmNlLnRvcCArIHRoaXMuYW5jaG9yTWFyZ2luLnRvcCAtIE1BUkdJTl9UT19FREdFO1xuICAgICAgICAgICAgaWYgKCFpc0JvdHRvbUFuY2hvcmVkKSB7XG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ICs9IHRoaXMubWVhc3VyZW1lbnRzLmFuY2hvclNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbWF4SGVpZ2h0ID0gdmlld3BvcnREaXN0YW5jZS5ib3R0b20gLSB0aGlzLmFuY2hvck1hcmdpbi5ib3R0b20gK1xuICAgICAgICAgICAgICAgIHRoaXMubWVhc3VyZW1lbnRzLmFuY2hvclNpemUuaGVpZ2h0IC0gTUFSR0lOX1RPX0VER0U7XG4gICAgICAgICAgICBpZiAoaXNCb3R0b21BbmNob3JlZCkge1xuICAgICAgICAgICAgICAgIG1heEhlaWdodCAtPSB0aGlzLm1lYXN1cmVtZW50cy5hbmNob3JTaXplLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF4SGVpZ2h0O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGNvcm5lciBPcmlnaW4gY29ybmVyIG9mIHRoZSBtZW51IHN1cmZhY2UuXG4gICAgICogQHJldHVybiBIb3Jpem9udGFsIG9mZnNldCBvZiBtZW51IHN1cmZhY2Ugb3JpZ2luIGNvcm5lciBmcm9tIGNvcnJlc3BvbmRpbmcgYW5jaG9yIGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEhvcml6b250YWxPcmlnaW5PZmZzZXQgPSBmdW5jdGlvbiAoY29ybmVyKSB7XG4gICAgICAgIHZhciBhbmNob3JTaXplID0gdGhpcy5tZWFzdXJlbWVudHMuYW5jaG9yU2l6ZTtcbiAgICAgICAgLy8gaXNSaWdodEFsaWduZWQgY29ycmVzcG9uZHMgdG8gdXNpbmcgdGhlICdyaWdodCcgcHJvcGVydHkgb24gdGhlIHN1cmZhY2UuXG4gICAgICAgIHZhciBpc1JpZ2h0QWxpZ25lZCA9IHRoaXMuaGFzQml0KGNvcm5lciwgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgdmFyIGF2b2lkSG9yaXpvbnRhbE92ZXJsYXAgPSB0aGlzLmhhc0JpdCh0aGlzLmFuY2hvckNvcm5lciwgQ29ybmVyQml0LlJJR0hUKTtcbiAgICAgICAgaWYgKGlzUmlnaHRBbGlnbmVkKSB7XG4gICAgICAgICAgICB2YXIgcmlnaHRPZmZzZXQgPSBhdm9pZEhvcml6b250YWxPdmVybGFwID9cbiAgICAgICAgICAgICAgICBhbmNob3JTaXplLndpZHRoIC0gdGhpcy5hbmNob3JNYXJnaW4ubGVmdCA6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmNob3JNYXJnaW4ucmlnaHQ7XG4gICAgICAgICAgICAvLyBGb3IgaG9pc3RlZCBvciBmaXhlZCBlbGVtZW50cywgYWRqdXN0IHRoZSBvZmZzZXQgYnkgdGhlIGRpZmZlcmVuY2VcbiAgICAgICAgICAgIC8vIGJldHdlZW4gdmlld3BvcnQgd2lkdGggYW5kIGJvZHkgd2lkdGggc28gd2hlbiB3ZSBjYWxjdWxhdGUgdGhlIHJpZ2h0XG4gICAgICAgICAgICAvLyB2YWx1ZSAoYGFkanVzdFBvc2l0aW9uRm9ySG9pc3RlZEVsZW1lbnRgKSBiYXNlZCBvbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgLy8gcG9zaXRpb24sIHRoZSByaWdodCBwcm9wZXJ0eSBpcyBjb3JyZWN0LlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIb2lzdGVkRWxlbWVudCB8fCB0aGlzLmlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiByaWdodE9mZnNldCAtXG4gICAgICAgICAgICAgICAgICAgICh0aGlzLm1lYXN1cmVtZW50cy52aWV3cG9ydFNpemUud2lkdGggLVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZWFzdXJlbWVudHMuYm9keVNpemUud2lkdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJpZ2h0T2Zmc2V0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdm9pZEhvcml6b250YWxPdmVybGFwID8gYW5jaG9yU2l6ZS53aWR0aCAtIHRoaXMuYW5jaG9yTWFyZ2luLnJpZ2h0IDpcbiAgICAgICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luLmxlZnQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gY29ybmVyIE9yaWdpbiBjb3JuZXIgb2YgdGhlIG1lbnUgc3VyZmFjZS5cbiAgICAgKiBAcmV0dXJuIFZlcnRpY2FsIG9mZnNldCBvZiBtZW51IHN1cmZhY2Ugb3JpZ2luIGNvcm5lciBmcm9tIGNvcnJlc3BvbmRpbmcgYW5jaG9yIGNvcm5lci5cbiAgICAgKi9cbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldFZlcnRpY2FsT3JpZ2luT2Zmc2V0ID0gZnVuY3Rpb24gKGNvcm5lcikge1xuICAgICAgICB2YXIgYW5jaG9yU2l6ZSA9IHRoaXMubWVhc3VyZW1lbnRzLmFuY2hvclNpemU7XG4gICAgICAgIHZhciBpc0JvdHRvbUFsaWduZWQgPSB0aGlzLmhhc0JpdChjb3JuZXIsIENvcm5lckJpdC5CT1RUT00pO1xuICAgICAgICB2YXIgYXZvaWRWZXJ0aWNhbE92ZXJsYXAgPSB0aGlzLmhhc0JpdCh0aGlzLmFuY2hvckNvcm5lciwgQ29ybmVyQml0LkJPVFRPTSk7XG4gICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgaWYgKGlzQm90dG9tQWxpZ25lZCkge1xuICAgICAgICAgICAgeSA9IGF2b2lkVmVydGljYWxPdmVybGFwID8gYW5jaG9yU2l6ZS5oZWlnaHQgLSB0aGlzLmFuY2hvck1hcmdpbi50b3AgOlxuICAgICAgICAgICAgICAgIC10aGlzLmFuY2hvck1hcmdpbi5ib3R0b207XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5ID0gYXZvaWRWZXJ0aWNhbE92ZXJsYXAgP1xuICAgICAgICAgICAgICAgIChhbmNob3JTaXplLmhlaWdodCArIHRoaXMuYW5jaG9yTWFyZ2luLmJvdHRvbSkgOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTWFyZ2luLnRvcDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geTtcbiAgICB9O1xuICAgIC8qKiBDYWxjdWxhdGVzIHRoZSBvZmZzZXRzIGZvciBwb3NpdGlvbmluZyB0aGUgbWVudS1zdXJmYWNlIHdoZW4gdGhlIG1lbnUtc3VyZmFjZSBoYXMgYmVlbiBob2lzdGVkIHRvIHRoZSBib2R5LiAqL1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuYWRqdXN0UG9zaXRpb25Gb3JIb2lzdGVkRWxlbWVudCA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdmFyIF9iID0gdGhpcy5tZWFzdXJlbWVudHMsIHdpbmRvd1Njcm9sbCA9IF9iLndpbmRvd1Njcm9sbCwgdmlld3BvcnREaXN0YW5jZSA9IF9iLnZpZXdwb3J0RGlzdGFuY2UsIHN1cmZhY2VTaXplID0gX2Iuc3VyZmFjZVNpemUsIHZpZXdwb3J0U2l6ZSA9IF9iLnZpZXdwb3J0U2l6ZTtcbiAgICAgICAgdmFyIHByb3BzID0gT2JqZWN0LmtleXMocG9zaXRpb24pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yICh2YXIgcHJvcHNfMSA9IF9fdmFsdWVzKHByb3BzKSwgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCk7ICFwcm9wc18xXzEuZG9uZTsgcHJvcHNfMV8xID0gcHJvcHNfMS5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwb3NpdGlvbltwcm9wXSB8fCAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSG9yaXpvbnRhbGx5Q2VudGVyZWRPblZpZXdwb3J0ICYmXG4gICAgICAgICAgICAgICAgICAgIChwcm9wID09PSAnbGVmdCcgfHwgcHJvcCA9PT0gJ3JpZ2h0JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25bcHJvcF0gPSAodmlld3BvcnRTaXplLndpZHRoIC0gc3VyZmFjZVNpemUud2lkdGgpIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEhvaXN0ZWQgc3VyZmFjZXMgbmVlZCB0byBoYXZlIHRoZSBhbmNob3IgZWxlbWVudHMgbG9jYXRpb24gb24gdGhlIHBhZ2UgYWRkZWQgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gcG9zaXRpb24gcHJvcGVydGllcyBmb3IgcHJvcGVyIGFsaWdubWVudCBvbiB0aGUgYm9keS5cbiAgICAgICAgICAgICAgICB2YWx1ZSArPSB2aWV3cG9ydERpc3RhbmNlW3Byb3BdO1xuICAgICAgICAgICAgICAgIC8vIFN1cmZhY2VzIHRoYXQgYXJlIGFic29sdXRlbHkgcG9zaXRpb25lZCBuZWVkIHRvIGhhdmUgYWRkaXRpb25hbCBjYWxjdWxhdGlvbnMgZm9yIHNjcm9sbFxuICAgICAgICAgICAgICAgIC8vIGFuZCBib3R0b20gcG9zaXRpb25pbmcuXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRml4ZWRQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHdpbmRvd1Njcm9sbC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSB3aW5kb3dTY3JvbGwueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlICs9IHdpbmRvd1Njcm9sbC54O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyAvLyBwcm9wID09PSAncmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSAtPSB3aW5kb3dTY3JvbGwueDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwb3NpdGlvbltwcm9wXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNfMV8xICYmICFwcm9wc18xXzEuZG9uZSAmJiAoX2EgPSBwcm9wc18xLnJldHVybikpIF9hLmNhbGwocHJvcHNfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBsYXN0IGZvY3VzZWQgZWxlbWVudCB3aGVuIHRoZSBtZW51IHN1cmZhY2Ugd2FzIG9wZW5lZCBzaG91bGQgcmVnYWluIGZvY3VzLCBpZiB0aGUgdXNlciBpc1xuICAgICAqIGZvY3VzZWQgb24gb3Igd2l0aGluIHRoZSBtZW51IHN1cmZhY2Ugd2hlbiBpdCBpcyBjbG9zZWQuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5tYXliZVJlc3RvcmVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzUm9vdEZvY3VzZWQgPSB0aGlzLmFkYXB0ZXIuaXNGb2N1c2VkKCk7XG4gICAgICAgIHZhciBjaGlsZEhhc0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmlzRWxlbWVudEluQ29udGFpbmVyKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQpO1xuICAgICAgICBpZiAoaXNSb290Rm9jdXNlZCB8fCBjaGlsZEhhc0ZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVzdG9yZUZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFzQml0ID0gZnVuY3Rpb24gKGNvcm5lciwgYml0KSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKGNvcm5lciAmIGJpdCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYml0d2lzZVxuICAgIH07XG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRCaXQgPSBmdW5jdGlvbiAoY29ybmVyLCBiaXQpIHtcbiAgICAgICAgcmV0dXJuIGNvcm5lciB8IGJpdDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1iaXR3aXNlXG4gICAgfTtcbiAgICBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24ucHJvdG90eXBlLnVuc2V0Qml0ID0gZnVuY3Rpb24gKGNvcm5lciwgYml0KSB7XG4gICAgICAgIHJldHVybiBjb3JuZXIgXiBiaXQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBpc0Zpbml0ZSB0aGF0IGRvZXNuJ3QgZm9yY2UgY29udmVyc2lvbiB0byBudW1iZXIgdHlwZS5cbiAgICAgKiBFcXVpdmFsZW50IHRvIE51bWJlci5pc0Zpbml0ZSBpbiBFUzIwMTUsIHdoaWNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gSUUuXG4gICAgICovXG4gICAgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0Zpbml0ZSA9IGZ1bmN0aW9uIChudW0pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBudW0gPT09ICdudW1iZXInICYmIGlzRmluaXRlKG51bSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENNZW51U3VyZmFjZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENNZW51U3VyZmFjZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc1Byb3BlcnR5TmFtZU1hcCA9IHtcbiAgICBhbmltYXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LWFuaW1hdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uJyxcbiAgICB9LFxuICAgIHRyYW5zZm9ybToge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNmb3JtJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2Zvcm0nLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBwcmVmaXhlZDogJy13ZWJraXQtdHJhbnNpdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNpdGlvbicsXG4gICAgfSxcbn07XG52YXIganNFdmVudFR5cGVNYXAgPSB7XG4gICAgYW5pbWF0aW9uZW5kOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbmVuZCcsXG4gICAgfSxcbiAgICBhbmltYXRpb25pdGVyYXRpb246IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICdhbmltYXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdEFuaW1hdGlvbkl0ZXJhdGlvbicsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uaXRlcmF0aW9uJyxcbiAgICB9LFxuICAgIGFuaW1hdGlvbnN0YXJ0OiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25TdGFydCcsXG4gICAgICAgIHN0YW5kYXJkOiAnYW5pbWF0aW9uc3RhcnQnLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ3RyYW5zaXRpb24nLFxuICAgICAgICBwcmVmaXhlZDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIH0sXG59O1xuZnVuY3Rpb24gaXNXaW5kb3cod2luZG93T2JqKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4od2luZG93T2JqLmRvY3VtZW50KSAmJiB0eXBlb2Ygd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSh3aW5kb3dPYmosIGNzc1Byb3BlcnR5KSB7XG4gICAgaWYgKGlzV2luZG93KHdpbmRvd09iaikgJiYgY3NzUHJvcGVydHkgaW4gY3NzUHJvcGVydHlOYW1lTWFwKSB7XG4gICAgICAgIHZhciBlbCA9IHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmFyIF9hID0gY3NzUHJvcGVydHlOYW1lTWFwW2Nzc1Byb3BlcnR5XSwgc3RhbmRhcmQgPSBfYS5zdGFuZGFyZCwgcHJlZml4ZWQgPSBfYS5wcmVmaXhlZDtcbiAgICAgICAgdmFyIGlzU3RhbmRhcmQgPSBzdGFuZGFyZCBpbiBlbC5zdHlsZTtcbiAgICAgICAgcmV0dXJuIGlzU3RhbmRhcmQgPyBzdGFuZGFyZCA6IHByZWZpeGVkO1xuICAgIH1cbiAgICByZXR1cm4gY3NzUHJvcGVydHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29ycmVjdEV2ZW50TmFtZSh3aW5kb3dPYmosIGV2ZW50VHlwZSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGV2ZW50VHlwZSBpbiBqc0V2ZW50VHlwZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGpzRXZlbnRUeXBlTWFwW2V2ZW50VHlwZV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQsIGNzc1Byb3BlcnR5ID0gX2EuY3NzUHJvcGVydHk7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gY3NzUHJvcGVydHkgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50VHlwZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiaW1wb3J0IHtcbiAgYnViYmxlLFxuICBsaXN0ZW4sXG4gIHByZXZlbnRfZGVmYXVsdCxcbiAgc3RvcF9wcm9wYWdhdGlvbixcbn0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIERPTSBldmVudHMuXG5jb25zdCBvbGRNb2RpZmllclJlZ2V4ID0gL15bYS16XSsoPzo6KD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIG90aGVyIGV2ZW50cy5cbmNvbnN0IG5ld01vZGlmaWVyUmVnZXggPSAvXlteJF0rKD86XFwkKD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY29tcG9uZW50KSB7XG4gIC8vIFRoaXMgaXMgb3VyIHBzZXVkbyAkb24gZnVuY3Rpb24uIEl0IGlzIGRlZmluZWQgb24gY29tcG9uZW50IG1vdW50LlxuICBsZXQgJG9uO1xuICAvLyBUaGlzIGlzIGEgbGlzdCBvZiBldmVudHMgYm91bmQgYmVmb3JlIG1vdW50LlxuICBsZXQgZXZlbnRzID0gW107XG4gIC8vIFRoaXMgaXMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCAkb24gZnVuY3Rpb24uXG4gIGNvbnN0IGNvbXBvbmVudE9uID0gY29tcG9uZW50LiRvbjtcblxuICAvLyBBbmQgd2Ugb3ZlcnJpZGUgdGhlICRvbiBmdW5jdGlvbiB0byBmb3J3YXJkIGFsbCBib3VuZCBldmVudHMuXG4gIGNvbXBvbmVudC4kb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICBsZXQgZGVzdHJ1Y3RvciA9ICgpID0+IHt9O1xuICAgIGlmICgkb24pIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgIGRlc3RydWN0b3IgPSAkb24oZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgYmVmb3JlIG1vdW50IGJ5IFN2ZWx0ZS5cbiAgICAgIGV2ZW50cy5wdXNoKFtldmVudFR5cGUsIGNhbGxiYWNrXSk7XG4gICAgfVxuICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuXG4gICAgaWYgKG9sZE1vZGlmaWVyTWF0Y2ggJiYgY29uc29sZSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnRXZlbnQgbW9kaWZpZXJzIGluIFNNVUkgbm93IHVzZSBcIiRcIiBpbnN0ZWFkIG9mIFwiOlwiLCBzbyB0aGF0IGFsbCBldmVudHMgY2FuIGJlIGJvdW5kIHdpdGggbW9kaWZpZXJzLiBQbGVhc2UgdXBkYXRlIHlvdXIgZXZlbnQgYmluZGluZzogJyxcbiAgICAgICAgZXZlbnRUeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAvLyBSZW1vdmUgbW9kaWZpZXJzIGZyb20gdGhlIHJlYWwgZXZlbnQuXG4gICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICRvbiBmdW5jdGlvbi5cbiAgICBjb25zdCBjb21wb25lbnREZXN0cnVjdG9yID0gY29tcG9uZW50T24uY2FsbChcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGV2ZW50VHlwZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgZGVzdHJ1Y3RvcigpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudERlc3RydWN0b3IoLi4uYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGUpIHtcbiAgICAvLyBJbnRlcm5hbGx5IGJ1YmJsZSB0aGUgZXZlbnQgdXAgZnJvbSBTdmVsdGUgY29tcG9uZW50cy5cbiAgICBidWJibGUoY29tcG9uZW50LCBlKTtcbiAgfVxuXG4gIHJldHVybiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlc3RydWN0b3JzID0gW107XG4gICAgY29uc3QgZm9yd2FyZERlc3RydWN0b3JzID0ge307XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciBmb3J3YXJkaW5nIGFsbCBib3VuZCBldmVudHMuXG4gICAgJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICAgIGxldCBoYW5kbGVyID0gY2FsbGJhY2s7XG4gICAgICAvLyBET00gYWRkRXZlbnRMaXN0ZW5lciBvcHRpb25zIGFyZ3VtZW50LlxuICAgICAgbGV0IG9wdGlvbnMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcbiAgICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBldmVudCBtb2RpZmllcnMuXG4gICAgICAgIC8vIFN1cHBvcnRlZCBtb2RpZmllcnM6XG4gICAgICAgIC8vIC0gcHJldmVudERlZmF1bHRcbiAgICAgICAgLy8gLSBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgLy8gLSBwYXNzaXZlXG4gICAgICAgIC8vIC0gbm9ucGFzc2l2ZVxuICAgICAgICAvLyAtIGNhcHR1cmVcbiAgICAgICAgLy8gLSBvbmNlXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhwYXJ0cy5zbGljZSgxKS5tYXAoKG1vZCkgPT4gW21vZCwgdHJ1ZV0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9ucGFzc2l2ZSkge1xuICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLm5vbnBhc3NpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBoYW5kbGVyID0gcHJldmVudF9kZWZhdWx0KGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wX3Byb3BhZ2F0aW9uKGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBldmVudCBkaXJlY3RseSwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICAgIGNvbnN0IG9mZiA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGVzdHJ1Y3RvciA9ICgpID0+IHtcbiAgICAgICAgb2ZmKCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRlc3RydWN0b3JzLmluZGV4T2YoZGVzdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGRlc3RydWN0b3JzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkZXN0cnVjdG9ycy5wdXNoKGRlc3RydWN0b3IpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBldmVudCBmcm9tIFN2ZWx0ZS5cbiAgICAgIGlmICghZXZlbnRUeXBlIGluIGZvcndhcmREZXN0cnVjdG9ycykge1xuICAgICAgICBmb3J3YXJkRGVzdHJ1Y3RvcnNbZXZlbnRUeXBlXSA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGZvcndhcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzdHJ1Y3RvcjtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpc3RlbiB0byBhbGwgdGhlIGV2ZW50cyBhZGRlZCBiZWZvcmUgbW91bnQuXG4gICAgICAkb24oZXZlbnRzW2ldWzBdLCBldmVudHNbaV1bMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RydWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnNbaV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgZm9yd2FyZGVycy5cbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoZm9yd2FyZERlc3RydWN0b3JzKSkge1xuICAgICAgICAgIGVudHJ5WzFdKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGFzc01hcChjbGFzc09iaikge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmopXG4gICAgLmZpbHRlcigoW25hbWUsIHZhbHVlXSkgPT4gbmFtZSAhPT0gJycgJiYgdmFsdWUpXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKVxuICAgIC5qb2luKCcgJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goXG4gIGVsZW1lbnQsXG4gIGV2ZW50VHlwZSxcbiAgZGV0YWlsID0ge30sXG4gIGV2ZW50SW5pdCA9IHsgYnViYmxlczogdHJ1ZSB9XG4pIHtcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgZXZlbnRJbml0KTtcbiAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgY29uc3QgZWwgPSAnZ2V0RWxlbWVudCcgaW4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0RWxlbWVudCgpIDogZWxlbWVudDtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25zKG5vZGUsIGFjdGlvbnMpIHtcbiAgbGV0IG9iamVjdHMgPSBbXTtcblxuICBpZiAoYWN0aW9ucykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICBjb25zdCBhY3Rpb24gPSBpc0FycmF5ID8gYWN0aW9uc1tpXVswXSA6IGFjdGlvbnNbaV07XG4gICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlLCBhY3Rpb25zW2ldWzFdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShhY3Rpb25zKSB7XG4gICAgICBpZiAoKChhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoKSB8fCAwKSAhPSBvYmplY3RzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG5vdCBjaGFuZ2UgdGhlIGxlbmd0aCBvZiBhbiBhY3Rpb25zIGFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9ucykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAndXBkYXRlJyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZShhY3Rpb25zW2ldWzFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ2Rlc3Ryb3knIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICBvYmplY3RzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG4iLCI8c3ZlbHRlOmJvZHlcbiAgb246Y2xpY2t8Y2FwdHVyZT17KGV2ZW50KSA9PlxuICAgIGluc3RhbmNlICYmIG9wZW4gJiYgaW5zdGFuY2UuaGFuZGxlQm9keUNsaWNrKGV2ZW50KX0gLz5cblxuPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1tZW51LXN1cmZhY2UnOiB0cnVlLFxuICAgICdtZGMtbWVudS1zdXJmYWNlLS1maXhlZCc6IGZpeGVkLFxuICAgICdtZGMtbWVudS1zdXJmYWNlLS1vcGVuJzogaXNTdGF0aWMsXG4gICAgJ3NtdWktbWVudS1zdXJmYWNlLS1zdGF0aWMnOiBpc1N0YXRpYyxcbiAgICAnbWRjLW1lbnUtc3VyZmFjZS0tZnVsbHdpZHRoJzogZnVsbFdpZHRoLFxuICAgIC4uLmludGVybmFsQ2xhc3NlcyxcbiAgfSl9XG4gIHN0eWxlPXtPYmplY3QuZW50cmllcyhpbnRlcm5hbFN0eWxlcylcbiAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAuY29uY2F0KFtzdHlsZV0pXG4gICAgLmpvaW4oJyAnKX1cbiAgb246a2V5ZG93bj17KGV2ZW50KSA9PiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVLZXlkb3duKGV2ZW50KX1cbiAgey4uLiQkcmVzdFByb3BzfVxuPlxuICA8c2xvdCAvPlxuPC9kaXY+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBpbXBvcnQgeyBDb3JuZXIsIENvcm5lckJpdCB9IGZyb20gJ0BtYXRlcmlhbC9tZW51LXN1cmZhY2UnO1xuXG4gIGV4cG9ydCB7IENvcm5lciwgQ29ybmVyQml0IH07XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgTURDTWVudVN1cmZhY2VGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL21lbnUtc3VyZmFjZSc7XG4gIGltcG9ydCB7IGdldENvcnJlY3RQcm9wZXJ0eU5hbWUgfSBmcm9tICdAbWF0ZXJpYWwvYW5pbWF0aW9uL3V0aWwuanMnO1xuICBpbXBvcnQgeyBvbk1vdW50LCBvbkRlc3Ryb3ksIHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIHVzZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgc3R5bGUgPSAnJztcbiAgbGV0IGlzU3RhdGljID0gZmFsc2U7XG4gIGV4cG9ydCB7IGlzU3RhdGljIGFzIHN0YXRpYyB9O1xuICBleHBvcnQgbGV0IGFuY2hvciA9IHRydWU7XG4gIGV4cG9ydCBsZXQgZml4ZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBvcGVuID0gaXNTdGF0aWM7XG4gIGV4cG9ydCBsZXQgZnVsbFdpZHRoID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgcXVpY2tPcGVuID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgYW5jaG9yRWxlbWVudCA9IG51bGw7XG4gIGV4cG9ydCBsZXQgYW5jaG9yQ29ybmVyID0gbnVsbDtcbiAgZXhwb3J0IGxldCBhbmNob3JNYXJnaW4gPSB7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCB9O1xuICBleHBvcnQgbGV0IG1heEhlaWdodCA9IDA7XG4gIGV4cG9ydCBsZXQgaG9yaXpvbnRhbGx5Q2VudGVyZWRPblZpZXdwb3J0ID0gZmFsc2U7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnN0YW5jZTtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgaW50ZXJuYWxTdHlsZXMgPSB7fTtcbiAgbGV0IHByZXZpb3VzRm9jdXM7XG5cbiAgc2V0Q29udGV4dCgnU01VSTpsaXN0OnJvbGUnLCAnbWVudScpO1xuICBzZXRDb250ZXh0KCdTTVVJOmxpc3Q6aXRlbTpyb2xlJywgJ21lbnVpdGVtJyk7XG5cbiAgJDogaWYgKFxuICAgIGVsZW1lbnQgJiZcbiAgICBhbmNob3IgJiZcbiAgICAhZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJylcbiAgKSB7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ21kYy1tZW51LXN1cmZhY2UtLWFuY2hvcicpO1xuICAgIGFuY2hvckVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuaXNPcGVuKCkgIT09IG9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgaW5zdGFuY2Uub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLnNldFF1aWNrT3BlbihxdWlja09wZW4pO1xuICB9XG5cbiAgJDogaWYgKGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2Uuc2V0Rml4ZWRQb3NpdGlvbihmaXhlZCk7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UgJiYgbWF4SGVpZ2h0ID4gMCkge1xuICAgIGluc3RhbmNlLnNldE1heEhlaWdodChtYXhIZWlnaHQpO1xuICB9XG5cbiAgJDogaWYgKGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2Uuc2V0SXNIb3Jpem9udGFsbHlDZW50ZXJlZE9uVmlld3BvcnQoXG4gICAgICBob3Jpem9udGFsbHlDZW50ZXJlZE9uVmlld3BvcnRcbiAgICApO1xuICB9XG5cbiAgY29uc3QgaUNvcm5lciA9IENvcm5lcjtcbiAgY29uc3QgaUNvcm5lckJpdCA9IENvcm5lckJpdDtcbiAgJDogaWYgKGluc3RhbmNlICYmIGFuY2hvckNvcm5lciAhPSBudWxsKSB7XG4gICAgaWYgKGlDb3JuZXIuaGFzT3duUHJvcGVydHkoYW5jaG9yQ29ybmVyKSkge1xuICAgICAgaW5zdGFuY2Uuc2V0QW5jaG9yQ29ybmVyKGlDb3JuZXJbYW5jaG9yQ29ybmVyXSk7XG4gICAgfSBlbHNlIGlmIChpQ29ybmVyQml0Lmhhc093blByb3BlcnR5KGFuY2hvckNvcm5lcikpIHtcbiAgICAgIGluc3RhbmNlLnNldEFuY2hvckNvcm5lcihpQ29ybmVyQml0W2FuY2hvckNvcm5lcl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5zZXRBbmNob3JDb3JuZXIoYW5jaG9yQ29ybmVyKTtcbiAgICB9XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5zZXRBbmNob3JNYXJnaW4oYW5jaG9yTWFyZ2luKTtcbiAgfVxuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGluc3RhbmNlID0gbmV3IE1EQ01lbnVTdXJmYWNlRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzcyxcbiAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgaGFzQ2xhc3MsXG4gICAgICBoYXNBbmNob3I6ICgpID0+ICEhYW5jaG9yRWxlbWVudCxcbiAgICAgIG5vdGlmeUNsb3NlOiAoKSA9PiB7XG4gICAgICAgIG9wZW4gPSBpc1N0YXRpYztcbiAgICAgICAgaWYgKCFvcGVuKSB7XG4gICAgICAgICAgZGlzcGF0Y2goZWxlbWVudCwgJ01EQ01lbnVTdXJmYWNlOmNsb3NlZCcpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbm90aWZ5Q2xvc2luZzogKCkgPT4ge1xuICAgICAgICBvcGVuID0gaXNTdGF0aWM7XG4gICAgICAgIGlmICghb3Blbikge1xuICAgICAgICAgIGRpc3BhdGNoKGVsZW1lbnQsICdNRENNZW51U3VyZmFjZTpjbG9zaW5nJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBub3RpZnlPcGVuOiAoKSA9PiB7XG4gICAgICAgIG9wZW4gPSB0cnVlO1xuICAgICAgICBkaXNwYXRjaChlbGVtZW50LCAnTURDTWVudVN1cmZhY2U6b3BlbmVkJyk7XG4gICAgICB9LFxuICAgICAgaXNFbGVtZW50SW5Db250YWluZXI6IChlbCkgPT4gZWxlbWVudC5jb250YWlucyhlbCksXG4gICAgICBpc1J0bDogKCkgPT5cbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKSA9PT0gJ3J0bCcsXG4gICAgICBzZXRUcmFuc2Zvcm1PcmlnaW46IChvcmlnaW4pID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gYCR7Z2V0Q29ycmVjdFByb3BlcnR5TmFtZShcbiAgICAgICAgICB3aW5kb3csXG4gICAgICAgICAgJ3RyYW5zZm9ybSdcbiAgICAgICAgKX0tb3JpZ2luYDtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbcHJvcGVydHlOYW1lXSA9IG9yaWdpbjtcbiAgICAgIH0sXG5cbiAgICAgIGlzRm9jdXNlZDogKCkgPT4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZWxlbWVudCxcbiAgICAgIHNhdmVGb2N1czogKCkgPT4ge1xuICAgICAgICBwcmV2aW91c0ZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcbiAgICAgIH0sXG4gICAgICByZXN0b3JlRm9jdXM6ICgpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGVsZW1lbnQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkgJiZcbiAgICAgICAgICBwcmV2aW91c0ZvY3VzICYmXG4gICAgICAgICAgcHJldmlvdXNGb2N1cy5mb2N1c1xuICAgICAgICApIHtcbiAgICAgICAgICBwcmV2aW91c0ZvY3VzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIGdldElubmVyRGltZW5zaW9uczogKCkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpZHRoOiBlbGVtZW50Lm9mZnNldFdpZHRoLFxuICAgICAgICAgIGhlaWdodDogZWxlbWVudC5vZmZzZXRIZWlnaHQsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgZ2V0QW5jaG9yRGltZW5zaW9uczogKCkgPT5cbiAgICAgICAgYW5jaG9yRWxlbWVudCA/IGFuY2hvckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgOiBudWxsLFxuICAgICAgZ2V0V2luZG93RGltZW5zaW9uczogKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0IH07XG4gICAgICB9LFxuICAgICAgZ2V0Qm9keURpbWVuc2lvbnM6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGdldFdpbmRvd1Njcm9sbDogKCkgPT4ge1xuICAgICAgICByZXR1cm4geyB4OiB3aW5kb3cucGFnZVhPZmZzZXQsIHk6IHdpbmRvdy5wYWdlWU9mZnNldCB9O1xuICAgICAgfSxcbiAgICAgIHNldFBvc2l0aW9uOiAocG9zaXRpb24pID0+IHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXMubGVmdCA9ICdsZWZ0JyBpbiBwb3NpdGlvbiA/IGAke3Bvc2l0aW9uLmxlZnR9cHhgIDogJyc7XG4gICAgICAgIGludGVybmFsU3R5bGVzLnJpZ2h0ID0gJ3JpZ2h0JyBpbiBwb3NpdGlvbiA/IGAke3Bvc2l0aW9uLnJpZ2h0fXB4YCA6ICcnO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcy50b3AgPSAndG9wJyBpbiBwb3NpdGlvbiA/IGAke3Bvc2l0aW9uLnRvcH1weGAgOiAnJztcbiAgICAgICAgaW50ZXJuYWxTdHlsZXMuYm90dG9tID1cbiAgICAgICAgICAnYm90dG9tJyBpbiBwb3NpdGlvbiA/IGAke3Bvc2l0aW9uLmJvdHRvbX1weGAgOiAnJztcbiAgICAgIH0sXG4gICAgICBzZXRNYXhIZWlnaHQ6IChoZWlnaHQpID0+IHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXMubWF4SGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGRpc3BhdGNoKGVsZW1lbnQsICdTTVVJOm1lbnUtc3VyZmFjZTptb3VudCcsIHtcbiAgICAgIGdldCBvcGVuKCkge1xuICAgICAgICByZXR1cm4gb3BlbjtcbiAgICAgIH0sXG4gICAgICBzZXQgb3Blbih2YWx1ZSkge1xuICAgICAgICBvcGVuID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgY2xvc2VQcm9ncmFtbWF0aWMsXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZS5pbml0KCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc3QgaXNIb2lzdGVkID0gaW5zdGFuY2UuaXNIb2lzdGVkRWxlbWVudDtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIGlmIChpc0hvaXN0ZWQpIHtcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKGFuY2hvcikge1xuICAgICAgZWxlbWVudCAmJlxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbWRjLW1lbnUtc3VyZmFjZS0tYW5jaG9yJyk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3Nlc1xuICAgICAgPyBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXVxuICAgICAgOiBnZXRFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIWludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCEoY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3NlcykgfHwgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2xvc2VQcm9ncmFtbWF0aWMoc2tpcFJlc3RvcmVGb2N1cykge1xuICAgIGluc3RhbmNlLmNsb3NlKHNraXBSZXN0b3JlRm9jdXMpO1xuICAgIG9wZW4gPSBmYWxzZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBpc09wZW4oKSB7XG4gICAgcmV0dXJuIG9wZW47XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2V0T3Blbih2YWx1ZSkge1xuICAgIG9wZW4gPSB2YWx1ZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRBYnNvbHV0ZVBvc2l0aW9uKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gaW5zdGFuY2Uuc2V0QWJzb2x1dGVQb3NpdGlvbiguLi5hcmdzKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRJc0hvaXN0ZWQoLi4uYXJncykge1xuICAgIHJldHVybiBpbnN0YW5jZS5zZXRJc0hvaXN0ZWQoLi4uYXJncyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8TWVudVN1cmZhY2Ugc3RhdGljPlxuICA8TGlzdD5cbiAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gKGNsaWNrZWQgPSAnQ3V0Jyl9PlxuICAgICAgPFRleHQ+Q3V0PC9UZXh0PlxuICAgIDwvSXRlbT5cbiAgICA8SXRlbSBvbjpTTVVJOmFjdGlvbj17KCkgPT4gKGNsaWNrZWQgPSAnQ29weScpfT5cbiAgICAgIDxUZXh0PkNvcHk8L1RleHQ+XG4gICAgPC9JdGVtPlxuICAgIDxJdGVtIG9uOlNNVUk6YWN0aW9uPXsoKSA9PiAoY2xpY2tlZCA9ICdQYXN0ZScpfT5cbiAgICAgIDxUZXh0PlBhc3RlPC9UZXh0PlxuICAgIDwvSXRlbT5cbiAgICA8U2VwYXJhdG9yIC8+XG4gICAgPEl0ZW0gb246U01VSTphY3Rpb249eygpID0+IChjbGlja2VkID0gJ0RlbGV0ZScpfT5cbiAgICAgIDxUZXh0PkRlbGV0ZTwvVGV4dD5cbiAgICA8L0l0ZW0+XG4gIDwvTGlzdD5cbjwvTWVudVN1cmZhY2U+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZH08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IE1lbnVTdXJmYWNlIGZyb20gJ0BzbXVpL21lbnUtc3VyZmFjZSc7XG4gIGltcG9ydCBMaXN0LCB7IEl0ZW0sIFNlcGFyYXRvciwgVGV4dCB9IGZyb20gJ0BzbXVpL2xpc3QnO1xuXG4gIGxldCBjbGlja2VkID0gJ25vdGhpbmcgeWV0Jztcbjwvc2NyaXB0PlxuIiwiPGRpdiBzdHlsZT1cIm1pbi13aWR0aDogMTAwcHg7XCI+XG4gIDxCdXR0b24gb246Y2xpY2s9eygpID0+IHN1cmZhY2Uuc2V0T3Blbih0cnVlKX0+T3BlbiBNZW51IFN1cmZhY2U8L0J1dHRvbj5cbiAgPE1lbnVTdXJmYWNlIGJpbmQ6dGhpcz17c3VyZmFjZX0gYW5jaG9yQ29ybmVyPVwiQk9UVE9NX0xFRlRcIj5cbiAgICA8ZGl2XG4gICAgICBzdHlsZT1cIm1hcmdpbjogMWVtOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1lbmQ7XCJcbiAgICA+XG4gICAgICA8VGV4dGZpZWxkIGJpbmQ6dmFsdWU9e25hbWV9IGxhYmVsPVwiTmFtZVwiIC8+XG4gICAgICA8VGV4dGZpZWxkIGJpbmQ6dmFsdWU9e2VtYWlsfSBsYWJlbD1cIkVtYWlsXCIgdHlwZT1cImVtYWlsXCIgLz5cbiAgICAgIDxCdXR0b24gc3R5bGU9XCJtYXJnaW4tdG9wOiAxZW07XCIgb246Y2xpY2s9eygpID0+IHN1cmZhY2Uuc2V0T3BlbihmYWxzZSl9PlxuICAgICAgICBTdWJtaXRcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L01lbnVTdXJmYWNlPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBNZW51U3VyZmFjZSBmcm9tICdAc211aS9tZW51LXN1cmZhY2UnO1xuICBpbXBvcnQgVGV4dGZpZWxkIGZyb20gJ0BzbXVpL3RleHRmaWVsZCc7XG4gIGltcG9ydCBCdXR0b24gZnJvbSAnQHNtdWkvYnV0dG9uJztcblxuICBsZXQgc3VyZmFjZTtcbiAgbGV0IG5hbWUgPSAnJztcbiAgbGV0IGVtYWlsID0gJyc7XG48L3NjcmlwdD5cbiIsIjxkaXZcbiAgY2xhc3M9e09iamVjdC5rZXlzKGFuY2hvckNsYXNzZXMpLmpvaW4oJyAnKX1cbiAgdXNlOkFuY2hvcj17e1xuICAgIGFkZENsYXNzOiAoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBpZiAoIWFuY2hvckNsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgICBhbmNob3JDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlQ2xhc3M6IChjbGFzc05hbWUpID0+IHtcbiAgICAgIGlmIChhbmNob3JDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgICAgZGVsZXRlIGFuY2hvckNsYXNzZXNbY2xhc3NOYW1lXTtcbiAgICAgICAgYW5jaG9yQ2xhc3NlcyA9IGFuY2hvckNsYXNzZXM7XG4gICAgICB9XG4gICAgfSxcbiAgfX1cbiAgYmluZDp0aGlzPXthbmNob3J9XG4+XG4gIDxCdXR0b24gb246Y2xpY2s9eygpID0+IHN1cmZhY2Uuc2V0T3Blbih0cnVlKX0+T3BlbiBNZW51IFN1cmZhY2U8L0J1dHRvbj5cbiAgPE1lbnVTdXJmYWNlIGJpbmQ6dGhpcz17c3VyZmFjZX0gYW5jaG9yPXtmYWxzZX0gYmluZDphbmNob3JFbGVtZW50PXthbmNob3J9PlxuICAgIDxJbWFnZUxpc3QgY2xhc3M9XCJtZW51LXN1cmZhY2UtaW1hZ2UtbGlzdFwiPlxuICAgICAgeyNlYWNoIEFycmF5KDQpIGFzIF91bnVzZWQsIGl9XG4gICAgICAgIDxJbWFnZUxpc3RJdGVtPlxuICAgICAgICAgIDxJbWFnZUFzcGVjdENvbnRhaW5lcj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3BsYWNlLWhvbGQuaXQvMTAweDEwMD90ZXh0PUltYWdlJTIwe2kgK1xuICAgICAgICAgICAgICAgIDF9JmZvbnRzaXplPTE4XCJcbiAgICAgICAgICAgICAgYWx0PVwiSW1hZ2Uge2kgKyAxfVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvSW1hZ2VBc3BlY3RDb250YWluZXI+XG4gICAgICAgIDwvSW1hZ2VMaXN0SXRlbT5cbiAgICAgIHsvZWFjaH1cbiAgICA8L0ltYWdlTGlzdD5cbiAgPC9NZW51U3VyZmFjZT5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgTWVudVN1cmZhY2UsIHsgQW5jaG9yIH0gZnJvbSAnQHNtdWkvbWVudS1zdXJmYWNlJztcbiAgaW1wb3J0IEltYWdlTGlzdCwge1xuICAgIEl0ZW0gYXMgSW1hZ2VMaXN0SXRlbSxcbiAgICBJbWFnZUFzcGVjdENvbnRhaW5lcixcbiAgICBJbWFnZSxcbiAgfSBmcm9tICdAc211aS9pbWFnZS1saXN0JztcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tICdAc211aS9idXR0b24nO1xuXG4gIGxldCBzdXJmYWNlO1xuICBsZXQgYW5jaG9yO1xuICBsZXQgYW5jaG9yQ2xhc3NlcyA9IHt9O1xuPC9zY3JpcHQ+XG4iLCI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5NZW51IFN1cmZhY2UgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+TWVudSBTdXJmYWNlPC9oMj5cblxuICA8cHJlIGNsYXNzPVwiZGVtby1zcGFjZWRcIj5ucG0gaSAtRCBAc211aS9tZW51LXN1cmZhY2U8L3ByZT5cblxuICA8RGVtbyBjb21wb25lbnQ9e1NpbXBsZX0gZmlsZT1cIm1lbnUtc3VyZmFjZS9fU2ltcGxlLnN2ZWx0ZVwiIC8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtTdGF0aWN9IGZpbGU9XCJtZW51LXN1cmZhY2UvX1N0YXRpYy5zdmVsdGVcIiAvPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17QW5jaG9yZWR9IGZpbGU9XCJtZW51LXN1cmZhY2UvX0FuY2hvcmVkLnN2ZWx0ZVwiPlxuICAgIEFuY2hvcmVkIGF1dG9tYXRpY2FsbHksIGNvcm5lciBzZXQgdG8gYm90dG9tLWxlZnRcbiAgPC9EZW1vPlxuXG4gIDxEZW1vXG4gICAgY29tcG9uZW50PXtNYW51YWxBbmNob3J9XG4gICAgZmlsZXM9e1tcbiAgICAgICdtZW51LXN1cmZhY2UvX01hbnVhbEFuY2hvci5zdmVsdGUnLFxuICAgICAgJ21lbnUtc3VyZmFjZS9fTWFudWFsQW5jaG9yLnNjc3MnLFxuICAgIF19XG4gID5cbiAgICBBbmNob3JlZCBtYW51YWxseVxuICA8L0RlbW8+XG5cbiAgPGRpdiBzdHlsZT1cInBhZGRpbmctdG9wOiAyMDBweDtcIj5Mb25nIGRpdiBmb3Igc2Nyb2xsaW5nLi4uPC9kaXY+XG48L3NlY3Rpb24+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBEZW1vIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRGVtby5zdmVsdGUnO1xuICBpbXBvcnQgU2ltcGxlIGZyb20gJy4vX1NpbXBsZS5zdmVsdGUnO1xuICBpbXBvcnQgU3RhdGljIGZyb20gJy4vX1N0YXRpYy5zdmVsdGUnO1xuICBpbXBvcnQgQW5jaG9yZWQgZnJvbSAnLi9fQW5jaG9yZWQuc3ZlbHRlJztcbiAgaW1wb3J0IE1hbnVhbEFuY2hvciBmcm9tICcuL19NYW51YWxBbmNob3Iuc3ZlbHRlJztcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztB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QUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDO0FBQ2xELElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDaEQsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztBQUN0RCxDQUFDLEVBQUUsU0FBUyxLQUFLLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxNQUFNLENBQUM7QUFDWCxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQ25CLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7QUFDaEQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztBQUNsRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDO0FBQ3RELElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7QUFDeEQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztBQUNsRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBQy9DLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7QUFDeEQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQztBQUNy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
