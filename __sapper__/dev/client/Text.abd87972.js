import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, X as getContext, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a7 as create_slot, $ as assign, W as compute_rest_props, v as validate_slots, Y as get_current_component, a0 as exclude_internal_props, p as element, x as claim_element, y as children, u as detach_dev, a9 as set_attributes, D as add_location, F as insert_dev, aa as action_destroyer, a8 as update_slot, a2 as get_spread_update, ab as is_function, J as transition_in, K as transition_out, ac as run_all, a6 as binding_callbacks, aF as globals, ay as validate_store, az as component_subscribe, Z as setContext, ah as onMount, aA as writable, aB as set_store_value, q as create_component, a1 as empty, A as claim_component, H as mount_component, a3 as get_spread_object, a4 as group_outros, M as destroy_component, a5 as check_outros, E as attr_dev, o as space, w as claim_space, _ as onDestroy, ag as validate_each_argument, aC as validate_each_keys, ax as listen_dev, aD as update_keyed_each, aE as outro_and_destroy_block, N as svg_element, G as append_dev, O as noop, aU as tick } from './client.ec94238b.js';

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
var Direction;
(function (Direction) {
    Direction["LEFT"] = "left";
    Direction["RIGHT"] = "right";
})(Direction || (Direction = {}));
var EventSource;
(function (EventSource) {
    EventSource["PRIMARY"] = "primary";
    EventSource["TRAILING"] = "trailing";
    EventSource["NONE"] = "none";
})(EventSource || (EventSource = {}));
var strings$2 = {
    ADDED_ANNOUNCEMENT_ATTRIBUTE: 'data-mdc-chip-added-announcement',
    ARIA_CHECKED: 'aria-checked',
    ARROW_DOWN_KEY: 'ArrowDown',
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    ARROW_UP_KEY: 'ArrowUp',
    BACKSPACE_KEY: 'Backspace',
    CHECKMARK_SELECTOR: '.mdc-chip__checkmark',
    DELETE_KEY: 'Delete',
    END_KEY: 'End',
    ENTER_KEY: 'Enter',
    ENTRY_ANIMATION_NAME: 'mdc-chip-entry',
    HOME_KEY: 'Home',
    IE_ARROW_DOWN_KEY: 'Down',
    IE_ARROW_LEFT_KEY: 'Left',
    IE_ARROW_RIGHT_KEY: 'Right',
    IE_ARROW_UP_KEY: 'Up',
    IE_DELETE_KEY: 'Del',
    INTERACTION_EVENT: 'MDCChip:interaction',
    LEADING_ICON_SELECTOR: '.mdc-chip__icon--leading',
    NAVIGATION_EVENT: 'MDCChip:navigation',
    PRIMARY_ACTION_SELECTOR: '.mdc-chip__primary-action',
    REMOVED_ANNOUNCEMENT_ATTRIBUTE: 'data-mdc-chip-removed-announcement',
    REMOVAL_EVENT: 'MDCChip:removal',
    SELECTION_EVENT: 'MDCChip:selection',
    SPACEBAR_KEY: ' ',
    TAB_INDEX: 'tabindex',
    TRAILING_ACTION_SELECTOR: '.mdc-chip-trailing-action',
    TRAILING_ICON_INTERACTION_EVENT: 'MDCChip:trailingIconInteraction',
    TRAILING_ICON_SELECTOR: '.mdc-chip__icon--trailing',
};
var cssClasses$2 = {
    CHECKMARK: 'mdc-chip__checkmark',
    CHIP_EXIT: 'mdc-chip--exit',
    DELETABLE: 'mdc-chip--deletable',
    EDITABLE: 'mdc-chip--editable',
    EDITING: 'mdc-chip--editing',
    HIDDEN_LEADING_ICON: 'mdc-chip__icon--leading-hidden',
    LEADING_ICON: 'mdc-chip__icon--leading',
    PRIMARY_ACTION: 'mdc-chip__primary-action',
    PRIMARY_ACTION_FOCUSED: 'mdc-chip--primary-action-focused',
    SELECTED: 'mdc-chip--selected',
    TEXT: 'mdc-chip__text',
    TRAILING_ACTION: 'mdc-chip__trailing-action',
    TRAILING_ICON: 'mdc-chip__icon--trailing',
};
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
navigationKeys.add(strings$2.ARROW_LEFT_KEY);
navigationKeys.add(strings$2.ARROW_RIGHT_KEY);
navigationKeys.add(strings$2.ARROW_DOWN_KEY);
navigationKeys.add(strings$2.ARROW_UP_KEY);
navigationKeys.add(strings$2.END_KEY);
navigationKeys.add(strings$2.HOME_KEY);
navigationKeys.add(strings$2.IE_ARROW_LEFT_KEY);
navigationKeys.add(strings$2.IE_ARROW_RIGHT_KEY);
navigationKeys.add(strings$2.IE_ARROW_DOWN_KEY);
navigationKeys.add(strings$2.IE_ARROW_UP_KEY);
var jumpChipKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
jumpChipKeys.add(strings$2.ARROW_UP_KEY);
jumpChipKeys.add(strings$2.ARROW_DOWN_KEY);
jumpChipKeys.add(strings$2.HOME_KEY);
jumpChipKeys.add(strings$2.END_KEY);
jumpChipKeys.add(strings$2.IE_ARROW_UP_KEY);
jumpChipKeys.add(strings$2.IE_ARROW_DOWN_KEY);

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
var emptyClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};
var FocusBehavior;
(function (FocusBehavior) {
    FocusBehavior[FocusBehavior["SHOULD_FOCUS"] = 0] = "SHOULD_FOCUS";
    FocusBehavior[FocusBehavior["SHOULD_NOT_FOCUS"] = 1] = "SHOULD_NOT_FOCUS";
})(FocusBehavior || (FocusBehavior = {}));
var MDCChipFoundation = /** @class */ (function (_super) {
    __extends(MDCChipFoundation, _super);
    function MDCChipFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCChipFoundation.defaultAdapter), adapter)) || this;
        /** Whether a trailing icon click should immediately trigger exit/removal of the chip. */
        _this.shouldRemoveOnTrailingIconClick_ = true;
        /**
         * Whether the primary action should receive focus on click. Should only be
         * set to true for clients who programmatically give focus to a different
         * element on the page when a chip is clicked (like a menu).
         */
        _this.shouldFocusPrimaryActionOnClick_ = true;
        return _this;
    }
    Object.defineProperty(MDCChipFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChipFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                addClassToLeadingIcon: function () { return undefined; },
                eventTargetHasClass: function () { return false; },
                focusPrimaryAction: function () { return undefined; },
                focusTrailingAction: function () { return undefined; },
                getAttribute: function () { return null; },
                getCheckmarkBoundingClientRect: function () { return emptyClientRect; },
                getComputedStyleValue: function () { return ''; },
                getRootBoundingClientRect: function () { return emptyClientRect; },
                hasClass: function () { return false; },
                hasLeadingIcon: function () { return false; },
                isRTL: function () { return false; },
                isTrailingActionNavigable: function () { return false; },
                notifyEditFinish: function () { return undefined; },
                notifyEditStart: function () { return undefined; },
                notifyInteraction: function () { return undefined; },
                notifyNavigation: function () { return undefined; },
                notifyRemoval: function () { return undefined; },
                notifySelection: function () { return undefined; },
                notifyTrailingIconInteraction: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassFromLeadingIcon: function () { return undefined; },
                removeTrailingActionFocus: function () { return undefined; },
                setPrimaryActionAttr: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCChipFoundation.prototype.isSelected = function () {
        return this.adapter.hasClass(cssClasses$2.SELECTED);
    };
    MDCChipFoundation.prototype.isEditable = function () {
        return this.adapter.hasClass(cssClasses$2.EDITABLE);
    };
    MDCChipFoundation.prototype.isEditing = function () {
        return this.adapter.hasClass(cssClasses$2.EDITING);
    };
    MDCChipFoundation.prototype.setSelected = function (selected) {
        this.setSelected_(selected);
        this.notifySelection_(selected);
    };
    MDCChipFoundation.prototype.setSelectedFromChipSet = function (selected, shouldNotifyClients) {
        this.setSelected_(selected);
        if (shouldNotifyClients) {
            this.notifyIgnoredSelection_(selected);
        }
    };
    MDCChipFoundation.prototype.getShouldRemoveOnTrailingIconClick = function () {
        return this.shouldRemoveOnTrailingIconClick_;
    };
    MDCChipFoundation.prototype.setShouldRemoveOnTrailingIconClick = function (shouldRemove) {
        this.shouldRemoveOnTrailingIconClick_ = shouldRemove;
    };
    MDCChipFoundation.prototype.setShouldFocusPrimaryActionOnClick = function (shouldFocus) {
        this.shouldFocusPrimaryActionOnClick_ = shouldFocus;
    };
    MDCChipFoundation.prototype.getDimensions = function () {
        var _this = this;
        var getRootRect = function () { return _this.adapter.getRootBoundingClientRect(); };
        var getCheckmarkRect = function () {
            return _this.adapter.getCheckmarkBoundingClientRect();
        };
        // When a chip has a checkmark and not a leading icon, the bounding rect changes in size depending on the current
        // size of the checkmark.
        if (!this.adapter.hasLeadingIcon()) {
            var checkmarkRect = getCheckmarkRect();
            if (checkmarkRect) {
                var rootRect = getRootRect();
                // Checkmark is a square, meaning the client rect's width and height are identical once the animation completes.
                // However, the checkbox is initially hidden by setting the width to 0.
                // To account for an initial width of 0, we use the checkbox's height instead (which equals the end-state width)
                // when adding it to the root client rect's width.
                return {
                    bottom: rootRect.bottom,
                    height: rootRect.height,
                    left: rootRect.left,
                    right: rootRect.right,
                    top: rootRect.top,
                    width: rootRect.width + checkmarkRect.height,
                };
            }
        }
        return getRootRect();
    };
    /**
     * Begins the exit animation which leads to removal of the chip.
     */
    MDCChipFoundation.prototype.beginExit = function () {
        this.adapter.addClass(cssClasses$2.CHIP_EXIT);
    };
    MDCChipFoundation.prototype.handleClick = function () {
        this.adapter.notifyInteraction();
        this.setPrimaryActionFocusable_(this.getFocusBehavior_());
    };
    MDCChipFoundation.prototype.handleDoubleClick = function () {
        if (this.isEditable()) {
            this.startEditing();
        }
    };
    /**
     * Handles a transition end event on the root element.
     */
    MDCChipFoundation.prototype.handleTransitionEnd = function (evt) {
        var _this = this;
        // Handle transition end event on the chip when it is about to be removed.
        var shouldHandle = this.adapter.eventTargetHasClass(evt.target, cssClasses$2.CHIP_EXIT);
        var widthIsAnimating = evt.propertyName === 'width';
        var opacityIsAnimating = evt.propertyName === 'opacity';
        if (shouldHandle && opacityIsAnimating) {
            // See: https://css-tricks.com/using-css-transitions-auto-dimensions/#article-header-id-5
            var chipWidth_1 = this.adapter.getComputedStyleValue('width');
            // On the next frame (once we get the computed width), explicitly set the chip's width
            // to its current pixel width, so we aren't transitioning out of 'auto'.
            requestAnimationFrame(function () {
                _this.adapter.setStyleProperty('width', chipWidth_1);
                // To mitigate jitter, start transitioning padding and margin before width.
                _this.adapter.setStyleProperty('padding', '0');
                _this.adapter.setStyleProperty('margin', '0');
                // On the next frame (once width is explicitly set), transition width to 0.
                requestAnimationFrame(function () {
                    _this.adapter.setStyleProperty('width', '0');
                });
            });
            return;
        }
        if (shouldHandle && widthIsAnimating) {
            this.removeFocus();
            var removedAnnouncement = this.adapter.getAttribute(strings$2.REMOVED_ANNOUNCEMENT_ATTRIBUTE);
            this.adapter.notifyRemoval(removedAnnouncement);
        }
        // Handle a transition end event on the leading icon or checkmark, since the transition end event bubbles.
        if (!opacityIsAnimating) {
            return;
        }
        var shouldHideLeadingIcon = this.adapter.eventTargetHasClass(evt.target, cssClasses$2.LEADING_ICON) &&
            this.adapter.hasClass(cssClasses$2.SELECTED);
        var shouldShowLeadingIcon = this.adapter.eventTargetHasClass(evt.target, cssClasses$2.CHECKMARK) &&
            !this.adapter.hasClass(cssClasses$2.SELECTED);
        if (shouldHideLeadingIcon) {
            this.adapter.addClassToLeadingIcon(cssClasses$2.HIDDEN_LEADING_ICON);
            return;
        }
        if (shouldShowLeadingIcon) {
            this.adapter.removeClassFromLeadingIcon(cssClasses$2.HIDDEN_LEADING_ICON);
            return;
        }
    };
    MDCChipFoundation.prototype.handleFocusIn = function (evt) {
        // Early exit if the event doesn't come from the primary action
        if (!this.eventFromPrimaryAction_(evt)) {
            return;
        }
        this.adapter.addClass(cssClasses$2.PRIMARY_ACTION_FOCUSED);
    };
    MDCChipFoundation.prototype.handleFocusOut = function (evt) {
        // Early exit if the event doesn't come from the primary action
        if (!this.eventFromPrimaryAction_(evt)) {
            return;
        }
        if (this.isEditing()) {
            this.finishEditing();
        }
        this.adapter.removeClass(cssClasses$2.PRIMARY_ACTION_FOCUSED);
    };
    /**
     * Handles an interaction event on the trailing icon element. This is used to
     * prevent the ripple from activating on interaction with the trailing icon.
     */
    MDCChipFoundation.prototype.handleTrailingActionInteraction = function () {
        this.adapter.notifyTrailingIconInteraction();
        this.removeChip_();
    };
    /**
     * Handles a keydown event from the root element.
     */
    MDCChipFoundation.prototype.handleKeydown = function (evt) {
        if (this.isEditing()) {
            if (this.shouldFinishEditing(evt)) {
                evt.preventDefault();
                this.finishEditing();
            }
            // When editing, the foundation should only handle key events that finish
            // the editing process.
            return;
        }
        if (this.isEditable()) {
            if (this.shouldStartEditing(evt)) {
                evt.preventDefault();
                this.startEditing();
            }
        }
        if (this.shouldNotifyInteraction_(evt)) {
            this.adapter.notifyInteraction();
            this.setPrimaryActionFocusable_(this.getFocusBehavior_());
            return;
        }
        if (this.isDeleteAction_(evt)) {
            evt.preventDefault();
            this.removeChip_();
            return;
        }
        // Early exit if the key is not usable
        if (!navigationKeys.has(evt.key)) {
            return;
        }
        // Prevent default behavior for movement keys which could include scrolling
        evt.preventDefault();
        this.focusNextAction_(evt.key, EventSource.PRIMARY);
    };
    MDCChipFoundation.prototype.handleTrailingActionNavigation = function (evt) {
        return this.focusNextAction_(evt.detail.key, EventSource.TRAILING);
    };
    /**
     * Called by the chip set to remove focus from the chip actions.
     */
    MDCChipFoundation.prototype.removeFocus = function () {
        this.adapter.setPrimaryActionAttr(strings$2.TAB_INDEX, '-1');
        this.adapter.removeTrailingActionFocus();
    };
    /**
     * Called by the chip set to focus the primary action.
     *
     */
    MDCChipFoundation.prototype.focusPrimaryAction = function () {
        this.setPrimaryActionFocusable_(FocusBehavior.SHOULD_FOCUS);
    };
    /**
     * Called by the chip set to focus the trailing action (if present), otherwise
     * gives focus to the trailing action.
     */
    MDCChipFoundation.prototype.focusTrailingAction = function () {
        var trailingActionIsNavigable = this.adapter.isTrailingActionNavigable();
        if (trailingActionIsNavigable) {
            this.adapter.setPrimaryActionAttr(strings$2.TAB_INDEX, '-1');
            this.adapter.focusTrailingAction();
            return;
        }
        this.focusPrimaryAction();
    };
    MDCChipFoundation.prototype.setPrimaryActionFocusable_ = function (focusBehavior) {
        this.adapter.setPrimaryActionAttr(strings$2.TAB_INDEX, '0');
        if (focusBehavior === FocusBehavior.SHOULD_FOCUS) {
            this.adapter.focusPrimaryAction();
        }
        this.adapter.removeTrailingActionFocus();
    };
    MDCChipFoundation.prototype.getFocusBehavior_ = function () {
        if (this.shouldFocusPrimaryActionOnClick_) {
            return FocusBehavior.SHOULD_FOCUS;
        }
        return FocusBehavior.SHOULD_NOT_FOCUS;
    };
    MDCChipFoundation.prototype.focusNextAction_ = function (key, source) {
        var isTrailingActionNavigable = this.adapter.isTrailingActionNavigable();
        var dir = this.getDirection_(key);
        // Early exit if the key should jump chips
        if (jumpChipKeys.has(key) || !isTrailingActionNavigable) {
            return this.adapter.notifyNavigation(key, source);
        }
        if (source === EventSource.PRIMARY && dir === Direction.RIGHT) {
            return this.focusTrailingAction();
        }
        if (source === EventSource.TRAILING && dir === Direction.LEFT) {
            return this.focusPrimaryAction();
        }
        this.adapter.notifyNavigation(key, EventSource.NONE);
    };
    MDCChipFoundation.prototype.getDirection_ = function (key) {
        var isRTL = this.adapter.isRTL();
        var isLeftKey = key === strings$2.ARROW_LEFT_KEY || key === strings$2.IE_ARROW_LEFT_KEY;
        var isRightKey = key === strings$2.ARROW_RIGHT_KEY || key === strings$2.IE_ARROW_RIGHT_KEY;
        if (!isRTL && isLeftKey || isRTL && isRightKey) {
            return Direction.LEFT;
        }
        return Direction.RIGHT;
    };
    MDCChipFoundation.prototype.removeChip_ = function () {
        if (this.shouldRemoveOnTrailingIconClick_) {
            this.beginExit();
        }
    };
    MDCChipFoundation.prototype.shouldStartEditing = function (evt) {
        return this.eventFromPrimaryAction_(evt) && evt.key === strings$2.ENTER_KEY;
    };
    MDCChipFoundation.prototype.shouldFinishEditing = function (evt) {
        return evt.key === strings$2.ENTER_KEY;
    };
    MDCChipFoundation.prototype.shouldNotifyInteraction_ = function (evt) {
        return evt.key === strings$2.ENTER_KEY || evt.key === strings$2.SPACEBAR_KEY;
    };
    MDCChipFoundation.prototype.isDeleteAction_ = function (evt) {
        var isDeletable = this.adapter.hasClass(cssClasses$2.DELETABLE);
        return isDeletable &&
            (evt.key === strings$2.BACKSPACE_KEY || evt.key === strings$2.DELETE_KEY ||
                evt.key === strings$2.IE_DELETE_KEY);
    };
    MDCChipFoundation.prototype.setSelected_ = function (selected) {
        if (selected) {
            this.adapter.addClass(cssClasses$2.SELECTED);
            this.adapter.setPrimaryActionAttr(strings$2.ARIA_CHECKED, 'true');
        }
        else {
            this.adapter.removeClass(cssClasses$2.SELECTED);
            this.adapter.setPrimaryActionAttr(strings$2.ARIA_CHECKED, 'false');
        }
    };
    MDCChipFoundation.prototype.notifySelection_ = function (selected) {
        this.adapter.notifySelection(selected, false);
    };
    MDCChipFoundation.prototype.notifyIgnoredSelection_ = function (selected) {
        this.adapter.notifySelection(selected, true);
    };
    MDCChipFoundation.prototype.eventFromPrimaryAction_ = function (evt) {
        return this.adapter.eventTargetHasClass(evt.target, cssClasses$2.PRIMARY_ACTION);
    };
    MDCChipFoundation.prototype.startEditing = function () {
        this.adapter.addClass(cssClasses$2.EDITING);
        this.adapter.notifyEditStart();
    };
    MDCChipFoundation.prototype.finishEditing = function () {
        this.adapter.removeClass(cssClasses$2.EDITING);
        this.adapter.notifyEditFinish();
    };
    return MDCChipFoundation;
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

/* packages/chips/node_modules/@smui/common/Div.svelte generated by Svelte v3.37.0 */
const file$4 = "packages/chips/node_modules/@smui/common/Div.svelte";

function create_fragment$5(ctx) {
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
			add_location(div, file$4, 0, 0, 0);
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
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
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
		init(this, options, instance$3, create_fragment$5, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Div",
			options,
			id: create_fragment$5.name
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

/* packages/chips/Chip.svelte generated by Svelte v3.37.0 */

const { Error: Error_1 } = globals;
const file$3 = "packages/chips/Chip.svelte";

// (49:2) {#if ripple && !$nonInteractive}
function create_if_block_1$1(ctx) {
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
			attr_dev(div, "class", "mdc-chip__ripple");
			add_location(div, file$3, 49, 4, 1580);
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
		id: create_if_block_1$1.name,
		type: "if",
		source: "(49:2) {#if ripple && !$nonInteractive}",
		ctx
	});

	return block;
}

// (53:2) {#if touch}
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
			attr_dev(div, "class", "mdc-chip__touch");
			add_location(div, file$3, 53, 4, 1650);
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
		source: "(53:2) {#if touch}",
		ctx
	});

	return block;
}

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple: ripple && !$nonInteractive,         unbounded: false,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-chip': true,     'mdc-chip--selected': selected,     'mdc-chip--touch': touch,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   role="row"   on:transitionend={(event) => instance && instance.handleTransitionEnd(event)}   on:click={() => instance && instance.handleClick()}   on:keydown={(event) => instance && instance.handleKeydown(event)}   on:focusin={(event) => instance && instance.handleFocusIn(event)}   on:focusout={(event) => instance && instance.handleFocusOut(event)}   on:MDCChipTrailingAction:interaction={() =>     instance && instance.handleTrailingActionInteraction()}   on:MDCChipTrailingAction:navigation={(event) =>     instance && instance.handleTrailingActionNavigation(event)}   on:SMUI:chips:chip:primary-action:mount={(event) =>     (primaryActionAccessor = event.detail)}   on:SMUI:chips:chip:primary-action:unmount={() =>     (primaryActionAccessor = undefined)}   on:SMUI:chips:chip:trailing-action:mount={(event) =>     (trailingActionAccessor = event.detail)}   on:SMUI:chips:chip:trailing-action:unmount={() =>     (trailingActionAccessor = undefined)}   {...$$restProps} >
function create_default_slot$1(ctx) {
	let t0;
	let t1;
	let if_block1_anchor;
	let current;
	let if_block0 = /*ripple*/ ctx[3] && !/*$nonInteractive*/ ctx[13] && create_if_block_1$1(ctx);
	const default_slot_template = /*#slots*/ ctx[31].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[44], null);
	let if_block1 = /*touch*/ ctx[4] && create_if_block$1(ctx);

	const block = {
		c: function create() {
			if (if_block0) if_block0.c();
			t0 = space();
			if (default_slot) default_slot.c();
			t1 = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block0) if_block0.l(nodes);
			t0 = claim_space(nodes);
			if (default_slot) default_slot.l(nodes);
			t1 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert_dev(target, t0, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			insert_dev(target, t1, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, if_block1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*ripple*/ ctx[3] && !/*$nonInteractive*/ ctx[13]) {
				if (if_block0) ; else {
					if_block0 = create_if_block_1$1(ctx);
					if_block0.c();
					if_block0.m(t0.parentNode, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (default_slot) {
				if (default_slot.p && dirty[1] & /*$$scope*/ 8192) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[44], dirty, null, null);
				}
			}

			if (/*touch*/ ctx[4]) {
				if (if_block1) ; else {
					if_block1 = create_if_block$1(ctx);
					if_block1.c();
					if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
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
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach_dev(t0);
			if (default_slot) default_slot.d(detaching);
			if (detaching) detach_dev(t1);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple: ripple && !$nonInteractive,         unbounded: false,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-chip': true,     'mdc-chip--selected': selected,     'mdc-chip--touch': touch,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   role=\\\"row\\\"   on:transitionend={(event) => instance && instance.handleTransitionEnd(event)}   on:click={() => instance && instance.handleClick()}   on:keydown={(event) => instance && instance.handleKeydown(event)}   on:focusin={(event) => instance && instance.handleFocusIn(event)}   on:focusout={(event) => instance && instance.handleFocusOut(event)}   on:MDCChipTrailingAction:interaction={() =>     instance && instance.handleTrailingActionInteraction()}   on:MDCChipTrailingAction:navigation={(event) =>     instance && instance.handleTrailingActionNavigation(event)}   on:SMUI:chips:chip:primary-action:mount={(event) =>     (primaryActionAccessor = event.detail)}   on:SMUI:chips:chip:primary-action:unmount={() =>     (primaryActionAccessor = undefined)}   on:SMUI:chips:chip:trailing-action:mount={(event) =>     (trailingActionAccessor = event.detail)}   on:SMUI:chips:chip:trailing-action:unmount={() =>     (trailingActionAccessor = undefined)}   {...$$restProps} >",
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
						ripple: /*ripple*/ ctx[3] && !/*$nonInteractive*/ ctx[13],
						unbounded: false,
						addClass: /*addClass*/ ctx[22],
						removeClass: /*removeClass*/ ctx[23],
						addStyle: /*addStyle*/ ctx[24]
					}
				],
				/*forwardEvents*/ ctx[14],
				.../*use*/ ctx[0]
			]
		},
		{
			class: classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-chip": true,
				"mdc-chip--selected": /*selected*/ ctx[7],
				"mdc-chip--touch": /*touch*/ ctx[4],
				.../*internalClasses*/ ctx[9]
			})
		},
		{
			style: Object.entries(/*internalStyles*/ ctx[10]).map(func).concat([/*style*/ ctx[2]]).join(" ")
		},
		{ role: "row" },
		/*$$restProps*/ ctx[25]
	];

	var switch_value = /*component*/ ctx[5];

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
		/*switch_instance_binding*/ ctx[32](switch_instance);
		switch_instance.$on("transitionend", /*transitionend_handler*/ ctx[33]);
		switch_instance.$on("click", /*click_handler*/ ctx[34]);
		switch_instance.$on("keydown", /*keydown_handler*/ ctx[35]);
		switch_instance.$on("focusin", /*focusin_handler*/ ctx[36]);
		switch_instance.$on("focusout", /*focusout_handler*/ ctx[37]);
		switch_instance.$on("MDCChipTrailingAction:interaction", /*MDCChipTrailingAction_interaction_handler*/ ctx[38]);
		switch_instance.$on("MDCChipTrailingAction:navigation", /*MDCChipTrailingAction_navigation_handler*/ ctx[39]);
		switch_instance.$on("SMUI:chips:chip:primary-action:mount", /*SMUI_chips_chip_primary_action_mount_handler*/ ctx[40]);
		switch_instance.$on("SMUI:chips:chip:primary-action:unmount", /*SMUI_chips_chip_primary_action_unmount_handler*/ ctx[41]);
		switch_instance.$on("SMUI:chips:chip:trailing-action:mount", /*SMUI_chips_chip_trailing_action_mount_handler*/ ctx[42]);
		switch_instance.$on("SMUI:chips:chip:trailing-action:unmount", /*SMUI_chips_chip_trailing_action_unmount_handler*/ ctx[43]);
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
			const switch_instance_changes = (dirty[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use, className, selected, touch, internalClasses, internalStyles, style, $$restProps*/ 62940831)
			? get_spread_update(switch_instance_spread_levels, [
					dirty[0] & /*ripple, $nonInteractive, addClass, removeClass, addStyle, forwardEvents, use*/ 29384713 && {
						use: [
							[
								Ripple,
								{
									ripple: /*ripple*/ ctx[3] && !/*$nonInteractive*/ ctx[13],
									unbounded: false,
									addClass: /*addClass*/ ctx[22],
									removeClass: /*removeClass*/ ctx[23],
									addStyle: /*addStyle*/ ctx[24]
								}
							],
							/*forwardEvents*/ ctx[14],
							.../*use*/ ctx[0]
						]
					},
					dirty[0] & /*className, selected, touch, internalClasses*/ 658 && {
						class: classMap({
							[/*className*/ ctx[1]]: true,
							"mdc-chip": true,
							"mdc-chip--selected": /*selected*/ ctx[7],
							"mdc-chip--touch": /*touch*/ ctx[4],
							.../*internalClasses*/ ctx[9]
						})
					},
					dirty[0] & /*internalStyles, style*/ 1028 && {
						style: Object.entries(/*internalStyles*/ ctx[10]).map(func).concat([/*style*/ ctx[2]]).join(" ")
					},
					switch_instance_spread_levels[3],
					dirty[0] & /*$$restProps*/ 33554432 && get_spread_object(/*$$restProps*/ ctx[25])
				])
			: {};

			if (dirty[0] & /*touch, ripple, $nonInteractive*/ 8216 | dirty[1] & /*$$scope*/ 8192) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[5])) {
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
					/*switch_instance_binding*/ ctx[32](switch_instance);
					switch_instance.$on("transitionend", /*transitionend_handler*/ ctx[33]);
					switch_instance.$on("click", /*click_handler*/ ctx[34]);
					switch_instance.$on("keydown", /*keydown_handler*/ ctx[35]);
					switch_instance.$on("focusin", /*focusin_handler*/ ctx[36]);
					switch_instance.$on("focusout", /*focusout_handler*/ ctx[37]);
					switch_instance.$on("MDCChipTrailingAction:interaction", /*MDCChipTrailingAction_interaction_handler*/ ctx[38]);
					switch_instance.$on("MDCChipTrailingAction:navigation", /*MDCChipTrailingAction_navigation_handler*/ ctx[39]);
					switch_instance.$on("SMUI:chips:chip:primary-action:mount", /*SMUI_chips_chip_primary_action_mount_handler*/ ctx[40]);
					switch_instance.$on("SMUI:chips:chip:primary-action:unmount", /*SMUI_chips_chip_primary_action_unmount_handler*/ ctx[41]);
					switch_instance.$on("SMUI:chips:chip:trailing-action:mount", /*SMUI_chips_chip_trailing_action_mount_handler*/ ctx[42]);
					switch_instance.$on("SMUI:chips:chip:trailing-action:unmount", /*SMUI_chips_chip_trailing_action_unmount_handler*/ ctx[43]);
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
			/*switch_instance_binding*/ ctx[32](null);
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

const func = ([name, value]) => `${name}: ${value};`;

function instance_1$1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","chip","ripple","touch","shouldRemoveOnTrailingIconClick","shouldFocusPrimaryActionOnClick","component","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $initialSelectedStore;
	let $shouldRemoveOnTrailingIconClickStore;
	let $isSelectedStore;
	let $leadingIconClassesStore;
	let $choice;
	let $index;
	let $nonInteractive;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Chip", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { chip: chipId } = $$props;
	let { ripple = true } = $$props;
	let { touch = false } = $$props;
	let { shouldRemoveOnTrailingIconClick = true } = $$props;
	let { shouldFocusPrimaryActionOnClick = true } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let leadingIconClasses = {};
	let internalStyles = {};
	const initialSelectedStore = getContext("SMUI:chips:chip:initialSelected");
	validate_store(initialSelectedStore, "initialSelectedStore");
	component_subscribe($$self, initialSelectedStore, value => $$invalidate(45, $initialSelectedStore = value));
	let selected = $initialSelectedStore;
	let primaryActionAccessor;
	let trailingActionAccessor;
	const nonInteractive = getContext("SMUI:chips:nonInteractive");
	validate_store(nonInteractive, "nonInteractive");
	component_subscribe($$self, nonInteractive, value => $$invalidate(13, $nonInteractive = value));
	const choice = getContext("SMUI:chips:choice");
	validate_store(choice, "choice");
	component_subscribe($$self, choice, value => $$invalidate(49, $choice = value));
	const index = getContext("SMUI:chips:chip:index");
	validate_store(index, "index");
	component_subscribe($$self, index, value => $$invalidate(50, $index = value));
	let { component = Div } = $$props;
	const shouldRemoveOnTrailingIconClickStore = writable(shouldRemoveOnTrailingIconClick);
	validate_store(shouldRemoveOnTrailingIconClickStore, "shouldRemoveOnTrailingIconClickStore");
	component_subscribe($$self, shouldRemoveOnTrailingIconClickStore, value => $$invalidate(46, $shouldRemoveOnTrailingIconClickStore = value));
	setContext("SMUI:chips:chip:shouldRemoveOnTrailingIconClick", shouldRemoveOnTrailingIconClickStore);
	const isSelectedStore = writable(selected);
	validate_store(isSelectedStore, "isSelectedStore");
	component_subscribe($$self, isSelectedStore, value => $$invalidate(47, $isSelectedStore = value));
	setContext("SMUI:chips:chip:isSelected", isSelectedStore);
	const leadingIconClassesStore = writable(leadingIconClasses);
	validate_store(leadingIconClassesStore, "leadingIconClassesStore");
	component_subscribe($$self, leadingIconClassesStore, value => $$invalidate(48, $leadingIconClassesStore = value));
	setContext("SMUI:chips:chip:leadingIconClasses", leadingIconClassesStore);
	setContext("SMUI:chips:chip:focusable", $choice && selected || $index === 0);

	if (!chipId) {
		throw new Error("The chip property is required! It should be passed down from the Set to the Chip.");
	}

	onMount(() => {
		$$invalidate(6, instance = new MDCChipFoundation({
				addClass,
				addClassToLeadingIcon: addLeadingIconClass,
				eventTargetHasClass: (target, className) => target ? target.classList.contains(className) : false,
				focusPrimaryAction: () => {
					if (primaryActionAccessor) {
						primaryActionAccessor.focus();
					}
				},
				focusTrailingAction: () => {
					if (trailingActionAccessor) {
						trailingActionAccessor.focus();
					}
				},
				getAttribute: attr => getElement().getAttribute(attr),
				getCheckmarkBoundingClientRect: () => {
					const target = getElement().querySelector(".mdc-chip__checkmark");

					if (target) {
						return target.getBoundingClientRect();
					}

					return null;
				},
				getComputedStyleValue: getStyle,
				getRootBoundingClientRect: () => getElement().getBoundingClientRect(),
				hasClass,
				hasLeadingIcon: () => {
					const target = getElement().querySelector(".mdc-chip__icon--leading");
					return !!target;
				},
				isRTL: () => getComputedStyle(getElement()).getPropertyValue("direction") === "rtl",
				isTrailingActionNavigable: () => {
					if (trailingActionAccessor) {
						return trailingActionAccessor.isNavigable();
					}

					return false;
				},
				notifyInteraction: () => dispatch(getElement(), "MDCChip:interaction", { chipId }),
				notifyNavigation: (key, source) => dispatch(getElement(), "MDCChip:navigation", { chipId, key, source }),
				notifyRemoval: removedAnnouncement => {
					dispatch(getElement(), "MDCChip:removal", { chipId, removedAnnouncement });
				},
				notifySelection: (selected, shouldIgnore) => dispatch(getElement(), "MDCChip:selection", { chipId, selected, shouldIgnore }),
				notifyTrailingIconInteraction: () => dispatch(getElement(), "MDCChip:trailingIconInteraction", { chipId }),
				notifyEditStart: () => {
					
				}, /* Not Implemented. */
				notifyEditFinish: () => {
					
				}, /* Not Implemented. */
				removeClass,
				removeClassFromLeadingIcon: removeLeadingIconClass,
				removeTrailingActionFocus: () => {
					if (trailingActionAccessor) {
						trailingActionAccessor.removeFocus();
					}
				},
				setPrimaryActionAttr: (attr, value) => {
					if (primaryActionAccessor) {
						primaryActionAccessor.addAttr(attr, value);
					}
				},
				setStyleProperty: addStyle
			}));

		const accessor = {
			chipId,
			get selected() {
				return selected;
			},
			focusPrimaryAction,
			focusTrailingAction,
			removeFocus,
			setSelectedFromChipSet
		};

		dispatch(getElement(), "SMUI:chips:chip:mount", accessor);
		instance.init();

		return () => {
			dispatch(getElement(), "SMUI:chips:chip:unmount", accessor);
			instance.destroy();
		};
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

	function addLeadingIconClass(className) {
		if (!leadingIconClasses[className]) {
			$$invalidate(30, leadingIconClasses[className] = true, leadingIconClasses);
		}
	}

	function removeLeadingIconClass(className) {
		if (!(className in leadingIconClasses) || leadingIconClasses[className]) {
			$$invalidate(30, leadingIconClasses[className] = false, leadingIconClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === "" || value == null) {
				delete internalStyles[name];
				$$invalidate(10, internalStyles);
			} else {
				$$invalidate(10, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function getStyle(name) {
		return name in internalStyles
		? internalStyles[name]
		: getComputedStyle(getElement()).getPropertyValue(name);
	}

	function setSelectedFromChipSet(value, shouldNotifyClients) {
		$$invalidate(7, selected = value);
		instance.setSelectedFromChipSet(selected, shouldNotifyClients);
	}

	function focusPrimaryAction() {
		instance.focusPrimaryAction();
	}

	function focusTrailingAction() {
		instance.focusTrailingAction();
	}

	function removeFocus() {
		instance.removeFocus();
	}

	function getElement() {
		return element.getElement();
	}

	function switch_instance_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(8, element);
		});
	}

	const transitionend_handler = event => instance && instance.handleTransitionEnd(event);
	const click_handler = () => instance && instance.handleClick();
	const keydown_handler = event => instance && instance.handleKeydown(event);
	const focusin_handler = event => instance && instance.handleFocusIn(event);
	const focusout_handler = event => instance && instance.handleFocusOut(event);
	const MDCChipTrailingAction_interaction_handler = () => instance && instance.handleTrailingActionInteraction();
	const MDCChipTrailingAction_navigation_handler = event => instance && instance.handleTrailingActionNavigation(event);
	const SMUI_chips_chip_primary_action_mount_handler = event => $$invalidate(11, primaryActionAccessor = event.detail);
	const SMUI_chips_chip_primary_action_unmount_handler = () => $$invalidate(11, primaryActionAccessor = undefined);
	const SMUI_chips_chip_trailing_action_mount_handler = event => $$invalidate(12, trailingActionAccessor = event.detail);
	const SMUI_chips_chip_trailing_action_unmount_handler = () => $$invalidate(12, trailingActionAccessor = undefined);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(25, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ("chip" in $$new_props) $$invalidate(26, chipId = $$new_props.chip);
		if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("touch" in $$new_props) $$invalidate(4, touch = $$new_props.touch);
		if ("shouldRemoveOnTrailingIconClick" in $$new_props) $$invalidate(27, shouldRemoveOnTrailingIconClick = $$new_props.shouldRemoveOnTrailingIconClick);
		if ("shouldFocusPrimaryActionOnClick" in $$new_props) $$invalidate(28, shouldFocusPrimaryActionOnClick = $$new_props.shouldFocusPrimaryActionOnClick);
		if ("component" in $$new_props) $$invalidate(5, component = $$new_props.component);
		if ("$$scope" in $$new_props) $$invalidate(44, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCChipFoundation,
		onMount,
		setContext,
		getContext,
		writable,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		dispatch,
		Ripple,
		Div,
		forwardEvents,
		use,
		className,
		style,
		chipId,
		ripple,
		touch,
		shouldRemoveOnTrailingIconClick,
		shouldFocusPrimaryActionOnClick,
		element,
		instance,
		internalClasses,
		leadingIconClasses,
		internalStyles,
		initialSelectedStore,
		selected,
		primaryActionAccessor,
		trailingActionAccessor,
		nonInteractive,
		choice,
		index,
		component,
		shouldRemoveOnTrailingIconClickStore,
		isSelectedStore,
		leadingIconClassesStore,
		hasClass,
		addClass,
		removeClass,
		addLeadingIconClass,
		removeLeadingIconClass,
		addStyle,
		getStyle,
		setSelectedFromChipSet,
		focusPrimaryAction,
		focusTrailingAction,
		removeFocus,
		getElement,
		$initialSelectedStore,
		$shouldRemoveOnTrailingIconClickStore,
		$isSelectedStore,
		$leadingIconClassesStore,
		$choice,
		$index,
		$nonInteractive
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
		if ("chipId" in $$props) $$invalidate(26, chipId = $$new_props.chipId);
		if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("touch" in $$props) $$invalidate(4, touch = $$new_props.touch);
		if ("shouldRemoveOnTrailingIconClick" in $$props) $$invalidate(27, shouldRemoveOnTrailingIconClick = $$new_props.shouldRemoveOnTrailingIconClick);
		if ("shouldFocusPrimaryActionOnClick" in $$props) $$invalidate(28, shouldFocusPrimaryActionOnClick = $$new_props.shouldFocusPrimaryActionOnClick);
		if ("element" in $$props) $$invalidate(8, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(6, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(9, internalClasses = $$new_props.internalClasses);
		if ("leadingIconClasses" in $$props) $$invalidate(30, leadingIconClasses = $$new_props.leadingIconClasses);
		if ("internalStyles" in $$props) $$invalidate(10, internalStyles = $$new_props.internalStyles);
		if ("selected" in $$props) $$invalidate(7, selected = $$new_props.selected);
		if ("primaryActionAccessor" in $$props) $$invalidate(11, primaryActionAccessor = $$new_props.primaryActionAccessor);
		if ("trailingActionAccessor" in $$props) $$invalidate(12, trailingActionAccessor = $$new_props.trailingActionAccessor);
		if ("component" in $$props) $$invalidate(5, component = $$new_props.component);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*shouldRemoveOnTrailingIconClick*/ 134217728) {
			set_store_value(shouldRemoveOnTrailingIconClickStore, $shouldRemoveOnTrailingIconClickStore = shouldRemoveOnTrailingIconClick, $shouldRemoveOnTrailingIconClickStore);
		}

		if ($$self.$$.dirty[0] & /*selected*/ 128) {
			set_store_value(isSelectedStore, $isSelectedStore = selected, $isSelectedStore);
		}

		if ($$self.$$.dirty[0] & /*leadingIconClasses*/ 1073741824) {
			set_store_value(leadingIconClassesStore, $leadingIconClassesStore = leadingIconClasses, $leadingIconClassesStore);
		}

		if ($$self.$$.dirty[0] & /*instance, shouldRemoveOnTrailingIconClick*/ 134217792) {
			if (instance && instance.getShouldRemoveOnTrailingIconClick() !== shouldRemoveOnTrailingIconClick) {
				instance.setShouldRemoveOnTrailingIconClick(shouldRemoveOnTrailingIconClick);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, shouldFocusPrimaryActionOnClick*/ 268435520) {
			if (instance) {
				instance.setShouldFocusPrimaryActionOnClick(shouldFocusPrimaryActionOnClick);
			}
		}
	};

	return [
		use,
		className,
		style,
		ripple,
		touch,
		component,
		instance,
		selected,
		element,
		internalClasses,
		internalStyles,
		primaryActionAccessor,
		trailingActionAccessor,
		$nonInteractive,
		forwardEvents,
		initialSelectedStore,
		nonInteractive,
		choice,
		index,
		shouldRemoveOnTrailingIconClickStore,
		isSelectedStore,
		leadingIconClassesStore,
		addClass,
		removeClass,
		addStyle,
		$$restProps,
		chipId,
		shouldRemoveOnTrailingIconClick,
		shouldFocusPrimaryActionOnClick,
		getElement,
		leadingIconClasses,
		slots,
		switch_instance_binding,
		transitionend_handler,
		click_handler,
		keydown_handler,
		focusin_handler,
		focusout_handler,
		MDCChipTrailingAction_interaction_handler,
		MDCChipTrailingAction_navigation_handler,
		SMUI_chips_chip_primary_action_mount_handler,
		SMUI_chips_chip_primary_action_unmount_handler,
		SMUI_chips_chip_trailing_action_mount_handler,
		SMUI_chips_chip_trailing_action_unmount_handler,
		$$scope
	];
}

class Chip extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1$1,
			create_fragment$4,
			safe_not_equal,
			{
				use: 0,
				class: 1,
				style: 2,
				chip: 26,
				ripple: 3,
				touch: 4,
				shouldRemoveOnTrailingIconClick: 27,
				shouldFocusPrimaryActionOnClick: 28,
				component: 5,
				getElement: 29
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Chip",
			options,
			id: create_fragment$4.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*chipId*/ ctx[26] === undefined && !("chip" in props)) {
			console.warn("<Chip> was created without expected prop 'chip'");
		}
	}

	get use() {
		throw new Error_1("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error_1("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error_1("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get chip() {
		throw new Error_1("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set chip(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error_1("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get touch() {
		throw new Error_1("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set touch(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get shouldRemoveOnTrailingIconClick() {
		throw new Error_1("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set shouldRemoveOnTrailingIconClick(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get shouldFocusPrimaryActionOnClick() {
		throw new Error_1("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set shouldFocusPrimaryActionOnClick(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get component() {
		throw new Error_1("<Chip>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set component(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[29];
	}

	set getElement(value) {
		throw new Error_1("<Chip>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
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
var strings = {
    CHIP_SELECTOR: '.mdc-chip',
};
var cssClasses = {
    CHOICE: 'mdc-chip-set--choice',
    FILTER: 'mdc-chip-set--filter',
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
var MDCChipSetFoundation = /** @class */ (function (_super) {
    __extends(MDCChipSetFoundation, _super);
    function MDCChipSetFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCChipSetFoundation.defaultAdapter), adapter)) || this;
        /**
         * The ids of the selected chips in the set. Only used for choice chip set or filter chip set.
         */
        _this.selectedChipIds_ = [];
        return _this;
    }
    Object.defineProperty(MDCChipSetFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChipSetFoundation, "defaultAdapter", {
        get: function () {
            return {
                announceMessage: function () { return undefined; },
                focusChipPrimaryActionAtIndex: function () { return undefined; },
                focusChipTrailingActionAtIndex: function () { return undefined; },
                getChipListCount: function () { return -1; },
                getIndexOfChipById: function () { return -1; },
                hasClass: function () { return false; },
                isRTL: function () { return false; },
                removeChipAtIndex: function () { return undefined; },
                removeFocusFromChipAtIndex: function () { return undefined; },
                selectChipAtIndex: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns an array of the IDs of all selected chips.
     */
    MDCChipSetFoundation.prototype.getSelectedChipIds = function () {
        return this.selectedChipIds_.slice();
    };
    /**
     * Selects the chip with the given id. Deselects all other chips if the chip set is of the choice variant.
     * Does not notify clients of the updated selection state.
     */
    MDCChipSetFoundation.prototype.select = function (chipId) {
        this.select_(chipId, false);
    };
    /**
     * Handles a chip interaction event
     */
    MDCChipSetFoundation.prototype.handleChipInteraction = function (_a) {
        var chipId = _a.chipId;
        var index = this.adapter.getIndexOfChipById(chipId);
        this.removeFocusFromChipsExcept_(index);
        if (this.adapter.hasClass(cssClasses.CHOICE) ||
            this.adapter.hasClass(cssClasses.FILTER)) {
            this.toggleSelect_(chipId);
        }
    };
    /**
     * Handles a chip selection event, used to handle discrepancy when selection state is set directly on the Chip.
     */
    MDCChipSetFoundation.prototype.handleChipSelection = function (_a) {
        var chipId = _a.chipId, selected = _a.selected, shouldIgnore = _a.shouldIgnore;
        // Early exit if we should ignore the event
        if (shouldIgnore) {
            return;
        }
        var chipIsSelected = this.selectedChipIds_.indexOf(chipId) >= 0;
        if (selected && !chipIsSelected) {
            this.select(chipId);
        }
        else if (!selected && chipIsSelected) {
            this.deselect_(chipId);
        }
    };
    /**
     * Handles the event when a chip is removed.
     */
    MDCChipSetFoundation.prototype.handleChipRemoval = function (_a) {
        var chipId = _a.chipId, removedAnnouncement = _a.removedAnnouncement;
        if (removedAnnouncement) {
            this.adapter.announceMessage(removedAnnouncement);
        }
        var index = this.adapter.getIndexOfChipById(chipId);
        this.deselectAndNotifyClients_(chipId);
        this.adapter.removeChipAtIndex(index);
        var maxIndex = this.adapter.getChipListCount() - 1;
        if (maxIndex < 0) {
            return;
        }
        var nextIndex = Math.min(index, maxIndex);
        this.removeFocusFromChipsExcept_(nextIndex);
        // After removing a chip, we should focus the trailing action for the next chip.
        this.adapter.focusChipTrailingActionAtIndex(nextIndex);
    };
    /**
     * Handles a chip navigation event.
     */
    MDCChipSetFoundation.prototype.handleChipNavigation = function (_a) {
        var chipId = _a.chipId, key = _a.key, source = _a.source;
        var maxIndex = this.adapter.getChipListCount() - 1;
        var index = this.adapter.getIndexOfChipById(chipId);
        // Early exit if the index is out of range or the key is unusable
        if (index === -1 || !navigationKeys.has(key)) {
            return;
        }
        var isRTL = this.adapter.isRTL();
        var isLeftKey = key === strings$2.ARROW_LEFT_KEY ||
            key === strings$2.IE_ARROW_LEFT_KEY;
        var isRightKey = key === strings$2.ARROW_RIGHT_KEY ||
            key === strings$2.IE_ARROW_RIGHT_KEY;
        var isDownKey = key === strings$2.ARROW_DOWN_KEY ||
            key === strings$2.IE_ARROW_DOWN_KEY;
        var shouldIncrement = !isRTL && isRightKey || isRTL && isLeftKey || isDownKey;
        var isHome = key === strings$2.HOME_KEY;
        var isEnd = key === strings$2.END_KEY;
        if (shouldIncrement) {
            index++;
        }
        else if (isHome) {
            index = 0;
        }
        else if (isEnd) {
            index = maxIndex;
        }
        else {
            index--;
        }
        // Early exit if the index is out of bounds
        if (index < 0 || index > maxIndex) {
            return;
        }
        this.removeFocusFromChipsExcept_(index);
        this.focusChipAction_(index, key, source);
    };
    MDCChipSetFoundation.prototype.focusChipAction_ = function (index, key, source) {
        var shouldJumpChips = jumpChipKeys.has(key);
        if (shouldJumpChips && source === EventSource.PRIMARY) {
            return this.adapter.focusChipPrimaryActionAtIndex(index);
        }
        if (shouldJumpChips && source === EventSource.TRAILING) {
            return this.adapter.focusChipTrailingActionAtIndex(index);
        }
        var dir = this.getDirection_(key);
        if (dir === Direction.LEFT) {
            return this.adapter.focusChipTrailingActionAtIndex(index);
        }
        if (dir === Direction.RIGHT) {
            return this.adapter.focusChipPrimaryActionAtIndex(index);
        }
    };
    MDCChipSetFoundation.prototype.getDirection_ = function (key) {
        var isRTL = this.adapter.isRTL();
        var isLeftKey = key === strings$2.ARROW_LEFT_KEY ||
            key === strings$2.IE_ARROW_LEFT_KEY;
        var isRightKey = key === strings$2.ARROW_RIGHT_KEY ||
            key === strings$2.IE_ARROW_RIGHT_KEY;
        if (!isRTL && isLeftKey || isRTL && isRightKey) {
            return Direction.LEFT;
        }
        return Direction.RIGHT;
    };
    /**
     * Deselects the chip with the given id and optionally notifies clients.
     */
    MDCChipSetFoundation.prototype.deselect_ = function (chipId, shouldNotifyClients) {
        if (shouldNotifyClients === void 0) { shouldNotifyClients = false; }
        var index = this.selectedChipIds_.indexOf(chipId);
        if (index >= 0) {
            this.selectedChipIds_.splice(index, 1);
            var chipIndex = this.adapter.getIndexOfChipById(chipId);
            this.adapter.selectChipAtIndex(chipIndex, /** isSelected */ false, shouldNotifyClients);
        }
    };
    /**
     * Deselects the chip with the given id and notifies clients.
     */
    MDCChipSetFoundation.prototype.deselectAndNotifyClients_ = function (chipId) {
        this.deselect_(chipId, true);
    };
    /**
     * Toggles selection of the chip with the given id.
     */
    MDCChipSetFoundation.prototype.toggleSelect_ = function (chipId) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            this.deselectAndNotifyClients_(chipId);
        }
        else {
            this.selectAndNotifyClients_(chipId);
        }
    };
    MDCChipSetFoundation.prototype.removeFocusFromChipsExcept_ = function (index) {
        var chipCount = this.adapter.getChipListCount();
        for (var i = 0; i < chipCount; i++) {
            if (i !== index) {
                this.adapter.removeFocusFromChipAtIndex(i);
            }
        }
    };
    MDCChipSetFoundation.prototype.selectAndNotifyClients_ = function (chipId) {
        this.select_(chipId, true);
    };
    MDCChipSetFoundation.prototype.select_ = function (chipId, shouldNotifyClients) {
        if (this.selectedChipIds_.indexOf(chipId) >= 0) {
            return;
        }
        if (this.adapter.hasClass(cssClasses.CHOICE) &&
            this.selectedChipIds_.length > 0) {
            var previouslySelectedChip = this.selectedChipIds_[0];
            var previouslySelectedIndex = this.adapter.getIndexOfChipById(previouslySelectedChip);
            this.selectedChipIds_ = [];
            this.adapter.selectChipAtIndex(previouslySelectedIndex, /** isSelected */ false, shouldNotifyClients);
        }
        this.selectedChipIds_.push(chipId);
        var index = this.adapter.getIndexOfChipById(chipId);
        this.adapter.selectChipAtIndex(index, /** isSelected */ true, shouldNotifyClients);
    };
    return MDCChipSetFoundation;
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
/**
 * Priorities for the announce function
 */
var AnnouncerPriority;
(function (AnnouncerPriority) {
    AnnouncerPriority["POLITE"] = "polite";
    AnnouncerPriority["ASSERTIVE"] = "assertive";
})(AnnouncerPriority || (AnnouncerPriority = {}));
/**
 * Data attribute added to live region element.
 */
var DATA_MDC_DOM_ANNOUNCE = 'data-mdc-dom-announce';
/**
 * Announces the given message with optional priority, defaulting to "polite"
 */
function announce(message, priority) {
    Announcer.getInstance().say(message, priority);
}
var Announcer = /** @class */ (function () {
    // Constructor made private to ensure only the singleton is used
    function Announcer() {
        this.liveRegions = new Map();
    }
    Announcer.getInstance = function () {
        if (!Announcer.instance) {
            Announcer.instance = new Announcer();
        }
        return Announcer.instance;
    };
    Announcer.prototype.say = function (message, priority) {
        if (priority === void 0) { priority = AnnouncerPriority.POLITE; }
        var liveRegion = this.getLiveRegion(priority);
        // Reset the region to pick up the message, even if the message is the
        // exact same as before.
        liveRegion.textContent = '';
        // Timeout is necessary for screen readers like NVDA and VoiceOver.
        setTimeout(function () {
            liveRegion.textContent = message;
            document.addEventListener('click', clearLiveRegion);
        }, 1);
        function clearLiveRegion() {
            liveRegion.textContent = '';
            document.removeEventListener('click', clearLiveRegion);
        }
    };
    Announcer.prototype.getLiveRegion = function (priority) {
        var existingLiveRegion = this.liveRegions.get(priority);
        if (existingLiveRegion &&
            document.body.contains(existingLiveRegion)) {
            return existingLiveRegion;
        }
        var liveRegion = this.createLiveRegion(priority);
        this.liveRegions.set(priority, liveRegion);
        return liveRegion;
    };
    Announcer.prototype.createLiveRegion = function (priority) {
        var el = document.createElement('div');
        el.style.position = 'absolute';
        el.style.top = '-9999px';
        el.style.left = '-9999px';
        el.style.height = '1px';
        el.style.overflow = 'hidden';
        el.setAttribute('aria-atomic', 'true');
        el.setAttribute('aria-live', priority);
        el.setAttribute(DATA_MDC_DOM_ANNOUNCE, 'true');
        document.body.appendChild(el);
        return el;
    };
    return Announcer;
}());

/* packages/chips/node_modules/@smui/common/ContextFragment.svelte generated by Svelte v3.37.0 */

function create_fragment$3(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

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
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
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
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let $storeValue;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ContextFragment", slots, ['default']);
	let { key } = $$props;
	let { value } = $$props;
	const storeValue = writable(value);
	validate_store(storeValue, "storeValue");
	component_subscribe($$self, storeValue, value => $$invalidate(5, $storeValue = value));
	setContext(key, storeValue);

	onDestroy(() => {
		storeValue.set(undefined);
	});

	const writable_props = ["key", "value"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ContextFragment> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("key" in $$props) $$invalidate(1, key = $$props.key);
		if ("value" in $$props) $$invalidate(2, value = $$props.value);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		onDestroy,
		setContext,
		writable,
		key,
		value,
		storeValue,
		$storeValue
	});

	$$self.$inject_state = $$props => {
		if ("key" in $$props) $$invalidate(1, key = $$props.key);
		if ("value" in $$props) $$invalidate(2, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*value*/ 4) {
			set_store_value(storeValue, $storeValue = value, $storeValue);
		}
	};

	return [storeValue, key, value, $$scope, slots];
}

class ContextFragment extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$3, safe_not_equal, { key: 1, value: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ContextFragment",
			options,
			id: create_fragment$3.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*key*/ ctx[1] === undefined && !("key" in props)) {
			console.warn("<ContextFragment> was created without expected prop 'key'");
		}

		if (/*value*/ ctx[2] === undefined && !("value" in props)) {
			console.warn("<ContextFragment> was created without expected prop 'value'");
		}
	}

	get key() {
		throw new Error("<ContextFragment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<ContextFragment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get value() {
		throw new Error("<ContextFragment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set value(value) {
		throw new Error("<ContextFragment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/chips/Set.svelte generated by Svelte v3.37.0 */
const file$2 = "packages/chips/Set.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[38] = list[i];
	child_ctx[40] = i;
	return child_ctx;
}

const get_default_slot_changes = dirty => ({ chip: dirty[0] & /*chips*/ 1 });
const get_default_slot_context = ctx => ({ chip: /*chip*/ ctx[38] });

// (28:6) <ContextFragment         key="SMUI:chips:chip:initialSelected"         value={initialSelected[i]}       >
function create_default_slot_1(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[21].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[29], get_default_slot_context);

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
				if (default_slot.p && dirty[0] & /*$$scope, chips*/ 536870913) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[29], dirty, get_default_slot_changes, get_default_slot_context);
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
		id: create_default_slot_1.name,
		type: "slot",
		source: "(28:6) <ContextFragment         key=\\\"SMUI:chips:chip:initialSelected\\\"         value={initialSelected[i]}       >",
		ctx
	});

	return block;
}

// (27:4) <ContextFragment key="SMUI:chips:chip:index" value={i}>
function create_default_slot(ctx) {
	let contextfragment;
	let t;
	let current;

	contextfragment = new ContextFragment({
			props: {
				key: "SMUI:chips:chip:initialSelected",
				value: /*initialSelected*/ ctx[11][/*i*/ ctx[40]],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(contextfragment.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(contextfragment.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(contextfragment, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const contextfragment_changes = {};
			if (dirty[0] & /*chips*/ 1) contextfragment_changes.value = /*initialSelected*/ ctx[11][/*i*/ ctx[40]];

			if (dirty[0] & /*$$scope, chips*/ 536870913) {
				contextfragment_changes.$$scope = { dirty, ctx };
			}

			contextfragment.$set(contextfragment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(contextfragment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(contextfragment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(contextfragment, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(27:4) <ContextFragment key=\\\"SMUI:chips:chip:index\\\" value={i}>",
		ctx
	});

	return block;
}

// (26:2) {#each chips as chip, i (key(chip))}
function create_each_block(key_2, ctx) {
	let first;
	let contextfragment;
	let current;

	contextfragment = new ContextFragment({
			props: {
				key: "SMUI:chips:chip:index",
				value: /*i*/ ctx[40],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		key: key_2,
		first: null,
		c: function create() {
			first = empty();
			create_component(contextfragment.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			claim_component(contextfragment.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(contextfragment, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const contextfragment_changes = {};
			if (dirty[0] & /*chips*/ 1) contextfragment_changes.value = /*i*/ ctx[40];

			if (dirty[0] & /*$$scope, chips*/ 536870913) {
				contextfragment_changes.$$scope = { dirty, ctx };
			}

			contextfragment.$set(contextfragment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(contextfragment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(contextfragment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			destroy_component(contextfragment, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(26:2) {#each chips as chip, i (key(chip))}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let div_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	let each_value = /*chips*/ ctx[0];
	validate_each_argument(each_value);
	const get_key = ctx => /*key*/ ctx[3](/*chip*/ ctx[38]);
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*className*/ ctx[2]]: true,
				"mdc-chip-set": true,
				"smui-chip-set--non-interactive": /*nonInteractive*/ ctx[4],
				"mdc-chip-set--choice": /*choice*/ ctx[5],
				"mdc-chip-set--filter": /*filter*/ ctx[6],
				"mdc-chip-set--input": /*input*/ ctx[7]
			})
		},
		{ role: "grid" },
		/*$$restProps*/ ctx[17]
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
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
			div = claim_element(nodes, "DIV", { class: true, role: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$2, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			/*div_binding*/ ctx[22](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[1])),
					action_destroyer(/*forwardEvents*/ ctx[10].call(null, div)),
					listen_dev(div, "SMUI:chips:chip:mount", /*SMUI_chips_chip_mount_handler*/ ctx[23], false, false, false),
					listen_dev(div, "SMUI:chips:chip:unmount", /*SMUI_chips_chip_unmount_handler*/ ctx[24], false, false, false),
					listen_dev(div, "MDCChip:interaction", /*MDCChip_interaction_handler*/ ctx[25], false, false, false),
					listen_dev(div, "MDCChip:selection", /*MDCChip_selection_handler*/ ctx[26], false, false, false),
					listen_dev(div, "MDCChip:removal", /*MDCChip_removal_handler*/ ctx[27], false, false, false),
					listen_dev(div, "MDCChip:navigation", /*MDCChip_navigation_handler*/ ctx[28], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty[0] & /*chips, initialSelected, $$scope, key*/ 536872969) {
				each_value = /*chips*/ ctx[0];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
				check_outros();
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*className, nonInteractive, choice, filter, input*/ 244 && div_class_value !== (div_class_value = classMap({
					[/*className*/ ctx[2]]: true,
					"mdc-chip-set": true,
					"smui-chip-set--non-interactive": /*nonInteractive*/ ctx[4],
					"mdc-chip-set--choice": /*choice*/ ctx[5],
					"mdc-chip-set--filter": /*filter*/ ctx[6],
					"mdc-chip-set--input": /*input*/ ctx[7]
				}))) && { class: div_class_value },
				{ role: "grid" },
				dirty[0] & /*$$restProps*/ 131072 && /*$$restProps*/ ctx[17]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}

			/*div_binding*/ ctx[22](null);
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

function setDifference(setA, setB) {
	let _difference = new Set(setA);

	for (let elem of setB) {
		_difference.delete(elem);
	}

	return _difference;
}

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","chips","key","selected","nonInteractive","choice","filter","input","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $nonInteractiveStore;
	let $choiceStore;
	let $filterStore;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Set", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { chips = [] } = $$props;
	let { key = chip => chip } = $$props;
	let { selected = null } = $$props;
	let { nonInteractive = false } = $$props;
	let { choice = false } = $$props;
	let { filter = false } = $$props;
	let { input = false } = $$props;
	let element;
	let instance;
	let chipAccessorMap = {};
	let chipAccessorWeakMap = new WeakMap();
	let initialSelected = chips.map(chipId => choice && selected === chipId || filter && selected.indexOf(chipId) !== -1);
	const nonInteractiveStore = writable(nonInteractive);
	validate_store(nonInteractiveStore, "nonInteractiveStore");
	component_subscribe($$self, nonInteractiveStore, value => $$invalidate(31, $nonInteractiveStore = value));
	setContext("SMUI:chips:nonInteractive", nonInteractiveStore);
	const choiceStore = writable(choice);
	validate_store(choiceStore, "choiceStore");
	component_subscribe($$self, choiceStore, value => $$invalidate(32, $choiceStore = value));
	setContext("SMUI:chips:choice", choiceStore);
	const filterStore = writable(filter);
	validate_store(filterStore, "filterStore");
	component_subscribe($$self, filterStore, value => $$invalidate(33, $filterStore = value));
	setContext("SMUI:chips:filter", filterStore);
	let previousSelected = filter ? new Set(selected) : selected;

	onMount(() => {
		$$invalidate(8, instance = new MDCChipSetFoundation({
				announceMessage: message => {
					announce(message);
				},
				focusChipPrimaryActionAtIndex: index => {
					getAccessor(chips[index]).focusPrimaryAction();
				},
				focusChipTrailingActionAtIndex: index => {
					getAccessor(chips[index]).focusTrailingAction();
				},
				getChipListCount: () => chips.length,
				getIndexOfChipById: chipId => chips.indexOf(chipId),
				hasClass: className => getElement().classList.contains(className),
				isRTL: () => getComputedStyle(getElement()).getPropertyValue("direction") === "rtl",
				removeChipAtIndex: index => {
					if (index >= 0 && index < chips.length) {
						if (choice && selected === chips[i]) {
							$$invalidate(18, selected = null);
						} else if (filter && selected.indexOf(chips[i]) !== -1) {
							selected.splice(selected.indexOf(chips[i]), 1);
							$$invalidate(18, selected);
						}

						chips.splice(index, 1);
						$$invalidate(0, chips);
					}
				},
				removeFocusFromChipAtIndex: index => {
					getAccessor(chips[index]).removeFocus();
				},
				selectChipAtIndex: (index, selectedValue, shouldNotifyClients) => {
					if (index >= 0 && index < chips.length) {
						if (filter) {
							const selIndex = selected.indexOf(chips[index]);

							if (selectedValue && selIndex === -1) {
								selected.push(chips[index]);
								$$invalidate(18, selected);
							} else if (!selectedValue && selIndex !== -1) {
								selected.splice(selIndex, 1);
								$$invalidate(18, selected);
							}
						} else if (choice && (selectedValue || selected === chips[index])) {
							$$invalidate(18, selected = selectedValue ? chips[index] : null);
						}

						getAccessor(chips[index]).setSelectedFromChipSet(selectedValue, shouldNotifyClients);
					}
				}
			}));

		instance.init();

		if (choice && selected != null) {
			instance.select(selected);
		} else if (filter && selected.length) {
			for (const chipId of selected) {
				instance.select(chipId);
			}
		}

		return () => {
			instance.destroy();
		};
	});

	function handleChipMount(event) {
		const accessor = event.detail;
		addAccessor(accessor.chipId, accessor);
	}

	function handleChipUnmount(event) {
		const accessor = event.detail;
		removeAccessor(accessor.chipId);
	}

	function getAccessor(chipId) {
		return chipId instanceof Object
		? chipAccessorWeakMap.get(chipId)
		: chipAccessorMap[chipId];
	}

	function addAccessor(chipId, accessor) {
		if (chipId instanceof Object) {
			chipAccessorWeakMap.set(chipId, accessor);
		} else {
			chipAccessorMap[chipId] = accessor;
		}
	}

	function removeAccessor(chipId) {
		if (chipId instanceof Object) {
			chipAccessorWeakMap.delete(chipId);
		} else {
			delete chipAccessorMap[chipId];
		}
	}

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(9, element);
		});
	}

	const SMUI_chips_chip_mount_handler = event => handleChipMount(event);
	const SMUI_chips_chip_unmount_handler = event => handleChipUnmount(event);
	const MDCChip_interaction_handler = event => instance && instance.handleChipInteraction(event.detail);
	const MDCChip_selection_handler = event => instance && instance.handleChipSelection(event.detail);
	const MDCChip_removal_handler = event => instance && instance.handleChipRemoval(event.detail);
	const MDCChip_navigation_handler = event => instance && instance.handleChipNavigation(event.detail);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(17, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("chips" in $$new_props) $$invalidate(0, chips = $$new_props.chips);
		if ("key" in $$new_props) $$invalidate(3, key = $$new_props.key);
		if ("selected" in $$new_props) $$invalidate(18, selected = $$new_props.selected);
		if ("nonInteractive" in $$new_props) $$invalidate(4, nonInteractive = $$new_props.nonInteractive);
		if ("choice" in $$new_props) $$invalidate(5, choice = $$new_props.choice);
		if ("filter" in $$new_props) $$invalidate(6, filter = $$new_props.filter);
		if ("input" in $$new_props) $$invalidate(7, input = $$new_props.input);
		if ("$$scope" in $$new_props) $$invalidate(29, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCChipSetFoundation,
		announce,
		onMount,
		setContext,
		writable,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		ContextFragment,
		forwardEvents,
		use,
		className,
		chips,
		key,
		selected,
		nonInteractive,
		choice,
		filter,
		input,
		element,
		instance,
		chipAccessorMap,
		chipAccessorWeakMap,
		initialSelected,
		nonInteractiveStore,
		choiceStore,
		filterStore,
		previousSelected,
		setDifference,
		handleChipMount,
		handleChipUnmount,
		getAccessor,
		addAccessor,
		removeAccessor,
		getElement,
		$nonInteractiveStore,
		$choiceStore,
		$filterStore
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("chips" in $$props) $$invalidate(0, chips = $$new_props.chips);
		if ("key" in $$props) $$invalidate(3, key = $$new_props.key);
		if ("selected" in $$props) $$invalidate(18, selected = $$new_props.selected);
		if ("nonInteractive" in $$props) $$invalidate(4, nonInteractive = $$new_props.nonInteractive);
		if ("choice" in $$props) $$invalidate(5, choice = $$new_props.choice);
		if ("filter" in $$props) $$invalidate(6, filter = $$new_props.filter);
		if ("input" in $$props) $$invalidate(7, input = $$new_props.input);
		if ("element" in $$props) $$invalidate(9, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(8, instance = $$new_props.instance);
		if ("chipAccessorMap" in $$props) chipAccessorMap = $$new_props.chipAccessorMap;
		if ("chipAccessorWeakMap" in $$props) chipAccessorWeakMap = $$new_props.chipAccessorWeakMap;
		if ("initialSelected" in $$props) $$invalidate(11, initialSelected = $$new_props.initialSelected);
		if ("previousSelected" in $$props) $$invalidate(20, previousSelected = $$new_props.previousSelected);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*nonInteractive*/ 16) {
			set_store_value(nonInteractiveStore, $nonInteractiveStore = nonInteractive, $nonInteractiveStore);
		}

		if ($$self.$$.dirty[0] & /*choice*/ 32) {
			set_store_value(choiceStore, $choiceStore = choice, $choiceStore);
		}

		if ($$self.$$.dirty[0] & /*filter*/ 64) {
			set_store_value(filterStore, $filterStore = filter, $filterStore);
		}

		if ($$self.$$.dirty[0] & /*instance, choice, previousSelected, selected*/ 1311008) {
			if (instance && choice && previousSelected !== selected) {
				$$invalidate(20, previousSelected = selected);
				instance.select(selected);
			}
		}

		if ($$self.$$.dirty[0] & /*instance, filter, selected, previousSelected, chips*/ 1311041) {
			if (instance && filter) {
				const setSelected = new Set(selected);
				const unSelected = setDifference(previousSelected, setSelected);
				const newSelected = setDifference(setSelected, previousSelected);

				if (unSelected.size || newSelected.size) {
					$$invalidate(20, previousSelected = setSelected);

					for (let chipId of unSelected) {
						if (chips.indexOf(chipId) !== -1) {
							instance.handleChipSelection({ chipId, selected: false });
						}
					}

					for (let chipId of newSelected) {
						instance.handleChipSelection({ chipId, selected: true });
					}
				}
			}
		}
	};

	return [
		chips,
		use,
		className,
		key,
		nonInteractive,
		choice,
		filter,
		input,
		instance,
		element,
		forwardEvents,
		initialSelected,
		nonInteractiveStore,
		choiceStore,
		filterStore,
		handleChipMount,
		handleChipUnmount,
		$$restProps,
		selected,
		getElement,
		previousSelected,
		slots,
		div_binding,
		SMUI_chips_chip_mount_handler,
		SMUI_chips_chip_unmount_handler,
		MDCChip_interaction_handler,
		MDCChip_selection_handler,
		MDCChip_removal_handler,
		MDCChip_navigation_handler,
		$$scope
	];
}

class Set_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1,
			create_fragment$2,
			safe_not_equal,
			{
				use: 1,
				class: 2,
				chips: 0,
				key: 3,
				selected: 18,
				nonInteractive: 4,
				choice: 5,
				filter: 6,
				input: 7,
				getElement: 19
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Set_1",
			options,
			id: create_fragment$2.name
		});
	}

	get use() {
		throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get chips() {
		throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set chips(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get key() {
		throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selected() {
		throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selected(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get nonInteractive() {
		throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set nonInteractive(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get choice() {
		throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set choice(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get filter() {
		throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set filter(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get input() {
		throw new Error("<Set>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set input(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[19];
	}

	set getElement(value) {
		throw new Error("<Set>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/chips/Checkmark.svelte generated by Svelte v3.37.0 */
const file$1 = "packages/chips/Checkmark.svelte";

function create_fragment$1(ctx) {
	let span;
	let svg;
	let path;
	let span_class_value;
	let useActions_action;
	let mounted;
	let dispose;

	let span_levels = [
		{
			class: span_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-chip__checkmark": true
			})
		},
		/*$$restProps*/ ctx[3]
	];

	let span_data = {};

	for (let i = 0; i < span_levels.length; i += 1) {
		span_data = assign(span_data, span_levels[i]);
	}

	const block = {
		c: function create() {
			span = element("span");
			svg = svg_element("svg");
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			svg = claim_element(span_nodes, "svg", { class: true, viewBox: true }, 1);
			var svg_nodes = children(svg);

			path = claim_element(
				svg_nodes,
				"path",
				{
					class: true,
					fill: true,
					stroke: true,
					d: true
				},
				1
			);

			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "class", "mdc-chip__checkmark-path");
			attr_dev(path, "fill", "none");
			attr_dev(path, "stroke", "black");
			attr_dev(path, "d", "M1.73,12.91 8.1,19.28 22.79,4.59");
			add_location(path, file$1, 10, 4, 220);
			attr_dev(svg, "class", "mdc-chip__checkmark-svg");
			attr_dev(svg, "viewBox", "-2 -3 30 30");
			add_location(svg, file$1, 9, 2, 156);
			set_attributes(span, span_data);
			add_location(span, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, svg);
			append_dev(svg, path);
			/*span_binding*/ ctx[5](span);

			if (!mounted) {
				dispose = action_destroyer(useActions_action = useActions.call(null, span, /*use*/ ctx[0]));
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			set_attributes(span, span_data = get_spread_update(span_levels, [
				dirty & /*className*/ 2 && span_class_value !== (span_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-chip__checkmark": true
				})) && { class: span_class_value },
				dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			/*span_binding*/ ctx[5](null);
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
	const omit_props_names = ["use","class","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Checkmark", slots, []);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let element;

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
		$$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
	};

	$$self.$capture_state = () => ({
		classMap,
		useActions,
		use,
		className,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [use, className, element, $$restProps, getElement, span_binding];
}

class Checkmark extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { use: 0, class: 1, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Checkmark",
			options,
			id: create_fragment$1.name
		});
	}

	get use() {
		throw new Error("<Checkmark>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Checkmark>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Checkmark>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Checkmark>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<Checkmark>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/chips/Text.svelte generated by Svelte v3.37.0 */
const file = "packages/chips/Text.svelte";

// (1:0) {#if $filter}
function create_if_block_1(ctx) {
	let checkmark;
	let current;
	let checkmark_props = {};
	checkmark = new Checkmark({ props: checkmark_props, $$inline: true });
	/*checkmark_binding*/ ctx[22](checkmark);

	const block = {
		c: function create() {
			create_component(checkmark.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(checkmark.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkmark, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkmark_changes = {};
			checkmark.$set(checkmark_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkmark.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkmark.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*checkmark_binding*/ ctx[22](null);
			destroy_component(checkmark, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(1:0) {#if $filter}",
		ctx
	});

	return block;
}

// (12:2) {:else}
function create_else_block(ctx) {
	let span1;
	let span0;
	let span1_class_value;
	let span1_role_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[21].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[20], null);

	let span1_levels = [
		{
			class: span1_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-chip__primary-action": true
			})
		},
		{
			role: span1_role_value = /*$filter*/ ctx[7]
			? "checkbox"
			: /*$choice*/ ctx[9] ? "radio" : "button"
		},
		/*$filter*/ ctx[7] || /*$choice*/ ctx[9]
		? {
				"aria-selected": /*$isSelected*/ ctx[10] ? "true" : "false"
			}
		: {},
		{ tabindex: /*tabindex*/ ctx[2] },
		/*internalAttrs*/ ctx[6],
		/*$$restProps*/ ctx[16]
	];

	let span1_data = {};

	for (let i = 0; i < span1_levels.length; i += 1) {
		span1_data = assign(span1_data, span1_levels[i]);
	}

	const block = {
		c: function create() {
			span1 = element("span");
			span0 = element("span");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			span1 = claim_element(nodes, "SPAN", { class: true, role: true, tabindex: true });
			var span1_nodes = children(span1);
			span0 = claim_element(span1_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			if (default_slot) default_slot.l(span0_nodes);
			span0_nodes.forEach(detach_dev);
			span1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "mdc-chip__text");
			add_location(span0, file, 24, 23, 608);
			set_attributes(span1, span1_data);
			add_location(span1, file, 12, 4, 232);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span1, anchor);
			append_dev(span1, span0);

			if (default_slot) {
				default_slot.m(span0, null);
			}

			/*span1_binding*/ ctx[23](span1);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1048576) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[20], dirty, null, null);
				}
			}

			set_attributes(span1, span1_data = get_spread_update(span1_levels, [
				(!current || dirty & /*className*/ 2 && span1_class_value !== (span1_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-chip__primary-action": true
				}))) && { class: span1_class_value },
				(!current || dirty & /*$filter, $choice*/ 640 && span1_role_value !== (span1_role_value = /*$filter*/ ctx[7]
				? "checkbox"
				: /*$choice*/ ctx[9] ? "radio" : "button")) && { role: span1_role_value },
				dirty & /*$filter, $choice, $isSelected*/ 1664 && (/*$filter*/ ctx[7] || /*$choice*/ ctx[9]
				? {
						"aria-selected": /*$isSelected*/ ctx[10] ? "true" : "false"
					}
				: {}),
				(!current || dirty & /*tabindex*/ 4) && { tabindex: /*tabindex*/ ctx[2] },
				dirty & /*internalAttrs*/ 64 && /*internalAttrs*/ ctx[6],
				dirty & /*$$restProps*/ 65536 && /*$$restProps*/ ctx[16]
			]));
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
			if (detaching) detach_dev(span1);
			if (default_slot) default_slot.d(detaching);
			/*span1_binding*/ ctx[23](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(12:2) {:else}",
		ctx
	});

	return block;
}

// (10:2) {#if $nonInteractive}
function create_if_block(ctx) {
	let span;
	let current;
	const default_slot_template = /*#slots*/ ctx[21].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[20], null);

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
			attr_dev(span, "class", "mdc-chip__text");
			add_location(span, file, 10, 4, 173);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
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
			if (detaching) detach_dev(span);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(10:2) {#if $nonInteractive}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let span;
	let current_block_type_index;
	let if_block1;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*$filter*/ ctx[7] && create_if_block_1(ctx);
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$nonInteractive*/ ctx[8]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if (if_block0) if_block0.c();
			t = space();
			span = element("span");
			if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			if (if_block0) if_block0.l(nodes);
			t = claim_space(nodes);
			span = claim_element(nodes, "SPAN", { role: true });
			var span_nodes = children(span);
			if_block1.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "role", "gridcell");
			add_location(span, file, 3, 0, 54);
		},
		m: function mount(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert_dev(target, t, anchor);
			insert_dev(target, span, anchor);
			if_blocks[current_block_type_index].m(span, null);
			/*span_binding*/ ctx[24](span);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, span, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[11].call(null, span))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*$filter*/ ctx[7]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*$filter*/ 128) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
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

			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block1 = if_blocks[current_block_type_index];

				if (!if_block1) {
					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block1.c();
				} else {
					if_block1.p(ctx, dirty);
				}

				transition_in(if_block1, 1);
				if_block1.m(span, null);
			}

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
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
			if (detaching) detach_dev(span);
			if_blocks[current_block_type_index].d();
			/*span_binding*/ ctx[24](null);
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
	const omit_props_names = ["use","class","tabindex","focus","getInput","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $filter;
	let $nonInteractive;
	let $choice;
	let $isSelected;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Text", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { tabindex = getContext("SMUI:chips:chip:focusable") ? "0" : "-1" } = $$props;
	let element;
	let input;
	let primaryAction;
	let internalAttrs = {};
	const nonInteractive = getContext("SMUI:chips:nonInteractive");
	validate_store(nonInteractive, "nonInteractive");
	component_subscribe($$self, nonInteractive, value => $$invalidate(8, $nonInteractive = value));
	const choice = getContext("SMUI:chips:choice");
	validate_store(choice, "choice");
	component_subscribe($$self, choice, value => $$invalidate(9, $choice = value));
	const filter = getContext("SMUI:chips:filter");
	validate_store(filter, "filter");
	component_subscribe($$self, filter, value => $$invalidate(7, $filter = value));
	const isSelected = getContext("SMUI:chips:chip:isSelected");
	validate_store(isSelected, "isSelected");
	component_subscribe($$self, isSelected, value => $$invalidate(10, $isSelected = value));

	onMount(() => {
		let accessor = { focus, addAttr };
		dispatch(getElement(), "SMUI:chips:chip:primary-action:mount", accessor);

		return () => {
			dispatch(getElement(), "SMUI:chips:chip:primary-action:unmount");
		};
	});

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(6, internalAttrs[name] = value, internalAttrs);
		}
	}

	function waitForTabindex(fn) {
		if (internalAttrs["tabindex"] !== element.getAttribute("tabindex")) {
			tick().then(fn);
		} else {
			fn();
		}
	}

	function focus() {
		// Let the tabindex change propagate.
		waitForTabindex(() => {
			primaryAction && primaryAction.focus();
		});
	}

	function getInput() {
		return input && input.getElement();
	}

	function getElement() {
		return element;
	}

	function checkmark_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			input = $$value;
			$$invalidate(4, input);
		});
	}

	function span1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			primaryAction = $$value;
			$$invalidate(5, primaryAction);
		});
	}

	function span_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(3, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("tabindex" in $$new_props) $$invalidate(2, tabindex = $$new_props.tabindex);
		if ("$$scope" in $$new_props) $$invalidate(20, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		onMount,
		getContext,
		tick,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		dispatch,
		Checkmark,
		forwardEvents,
		use,
		className,
		tabindex,
		element,
		input,
		primaryAction,
		internalAttrs,
		nonInteractive,
		choice,
		filter,
		isSelected,
		addAttr,
		waitForTabindex,
		focus,
		getInput,
		getElement,
		$filter,
		$nonInteractive,
		$choice,
		$isSelected
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("tabindex" in $$props) $$invalidate(2, tabindex = $$new_props.tabindex);
		if ("element" in $$props) $$invalidate(3, element = $$new_props.element);
		if ("input" in $$props) $$invalidate(4, input = $$new_props.input);
		if ("primaryAction" in $$props) $$invalidate(5, primaryAction = $$new_props.primaryAction);
		if ("internalAttrs" in $$props) $$invalidate(6, internalAttrs = $$new_props.internalAttrs);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		tabindex,
		element,
		input,
		primaryAction,
		internalAttrs,
		$filter,
		$nonInteractive,
		$choice,
		$isSelected,
		forwardEvents,
		nonInteractive,
		choice,
		filter,
		isSelected,
		$$restProps,
		focus,
		getInput,
		getElement,
		$$scope,
		slots,
		checkmark_binding,
		span1_binding,
		span_binding
	];
}

class Text extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			use: 0,
			class: 1,
			tabindex: 2,
			focus: 17,
			getInput: 18,
			getElement: 19
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Text",
			options,
			id: create_fragment.name
		});
	}

	get use() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tabindex() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tabindex(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get focus() {
		return this.$$.ctx[17];
	}

	set focus(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getInput() {
		return this.$$.ctx[18];
	}

	set getInput(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[19];
	}

	set getElement(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Chip as C, MDCFoundation as M, Ripple as R, Set_1 as S, Text as T, __extends as _, __assign as a, classMap as c, dispatch as d, forwardEventsBuilder as f, useActions as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dC5hYmQ4Nzk3Mi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGlwcy9kZXByZWNhdGVkL2NoaXAvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGlwcy9kZXByZWNhdGVkL2NoaXAvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZm9yd2FyZEV2ZW50c0J1aWxkZXIuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaGlwcy9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzTWFwLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9kaXNwYXRjaC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vdXNlQWN0aW9ucy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL3V0aWwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaGlwcy9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9ldmVudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaGlwcy9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvcmlwcGxlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaGlwcy9ub2RlX21vZHVsZXMvQHNtdWkvcmlwcGxlL1JpcHBsZS5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vRGl2LnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL0NoaXAuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGlwcy9kZXByZWNhdGVkL2NoaXAtc2V0L2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2hpcHMvZGVwcmVjYXRlZC9jaGlwLXNldC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vYW5ub3VuY2UuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaGlwcy9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0NvbnRleHRGcmFnbWVudC5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaGlwcy9TZXQuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvQ2hlY2ttYXJrLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL1RleHQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIERpcmVjdGlvbjtcbihmdW5jdGlvbiAoRGlyZWN0aW9uKSB7XG4gICAgRGlyZWN0aW9uW1wiTEVGVFwiXSA9IFwibGVmdFwiO1xuICAgIERpcmVjdGlvbltcIlJJR0hUXCJdID0gXCJyaWdodFwiO1xufSkoRGlyZWN0aW9uIHx8IChEaXJlY3Rpb24gPSB7fSkpO1xuZXhwb3J0IHZhciBFdmVudFNvdXJjZTtcbihmdW5jdGlvbiAoRXZlbnRTb3VyY2UpIHtcbiAgICBFdmVudFNvdXJjZVtcIlBSSU1BUllcIl0gPSBcInByaW1hcnlcIjtcbiAgICBFdmVudFNvdXJjZVtcIlRSQUlMSU5HXCJdID0gXCJ0cmFpbGluZ1wiO1xuICAgIEV2ZW50U291cmNlW1wiTk9ORVwiXSA9IFwibm9uZVwiO1xufSkoRXZlbnRTb3VyY2UgfHwgKEV2ZW50U291cmNlID0ge30pKTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBBRERFRF9BTk5PVU5DRU1FTlRfQVRUUklCVVRFOiAnZGF0YS1tZGMtY2hpcC1hZGRlZC1hbm5vdW5jZW1lbnQnLFxuICAgIEFSSUFfQ0hFQ0tFRDogJ2FyaWEtY2hlY2tlZCcsXG4gICAgQVJST1dfRE9XTl9LRVk6ICdBcnJvd0Rvd24nLFxuICAgIEFSUk9XX0xFRlRfS0VZOiAnQXJyb3dMZWZ0JyxcbiAgICBBUlJPV19SSUdIVF9LRVk6ICdBcnJvd1JpZ2h0JyxcbiAgICBBUlJPV19VUF9LRVk6ICdBcnJvd1VwJyxcbiAgICBCQUNLU1BBQ0VfS0VZOiAnQmFja3NwYWNlJyxcbiAgICBDSEVDS01BUktfU0VMRUNUT1I6ICcubWRjLWNoaXBfX2NoZWNrbWFyaycsXG4gICAgREVMRVRFX0tFWTogJ0RlbGV0ZScsXG4gICAgRU5EX0tFWTogJ0VuZCcsXG4gICAgRU5URVJfS0VZOiAnRW50ZXInLFxuICAgIEVOVFJZX0FOSU1BVElPTl9OQU1FOiAnbWRjLWNoaXAtZW50cnknLFxuICAgIEhPTUVfS0VZOiAnSG9tZScsXG4gICAgSUVfQVJST1dfRE9XTl9LRVk6ICdEb3duJyxcbiAgICBJRV9BUlJPV19MRUZUX0tFWTogJ0xlZnQnLFxuICAgIElFX0FSUk9XX1JJR0hUX0tFWTogJ1JpZ2h0JyxcbiAgICBJRV9BUlJPV19VUF9LRVk6ICdVcCcsXG4gICAgSUVfREVMRVRFX0tFWTogJ0RlbCcsXG4gICAgSU5URVJBQ1RJT05fRVZFTlQ6ICdNRENDaGlwOmludGVyYWN0aW9uJyxcbiAgICBMRUFESU5HX0lDT05fU0VMRUNUT1I6ICcubWRjLWNoaXBfX2ljb24tLWxlYWRpbmcnLFxuICAgIE5BVklHQVRJT05fRVZFTlQ6ICdNRENDaGlwOm5hdmlnYXRpb24nLFxuICAgIFBSSU1BUllfQUNUSU9OX1NFTEVDVE9SOiAnLm1kYy1jaGlwX19wcmltYXJ5LWFjdGlvbicsXG4gICAgUkVNT1ZFRF9BTk5PVU5DRU1FTlRfQVRUUklCVVRFOiAnZGF0YS1tZGMtY2hpcC1yZW1vdmVkLWFubm91bmNlbWVudCcsXG4gICAgUkVNT1ZBTF9FVkVOVDogJ01EQ0NoaXA6cmVtb3ZhbCcsXG4gICAgU0VMRUNUSU9OX0VWRU5UOiAnTURDQ2hpcDpzZWxlY3Rpb24nLFxuICAgIFNQQUNFQkFSX0tFWTogJyAnLFxuICAgIFRBQl9JTkRFWDogJ3RhYmluZGV4JyxcbiAgICBUUkFJTElOR19BQ1RJT05fU0VMRUNUT1I6ICcubWRjLWNoaXAtdHJhaWxpbmctYWN0aW9uJyxcbiAgICBUUkFJTElOR19JQ09OX0lOVEVSQUNUSU9OX0VWRU5UOiAnTURDQ2hpcDp0cmFpbGluZ0ljb25JbnRlcmFjdGlvbicsXG4gICAgVFJBSUxJTkdfSUNPTl9TRUxFQ1RPUjogJy5tZGMtY2hpcF9faWNvbi0tdHJhaWxpbmcnLFxufTtcbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDSEVDS01BUks6ICdtZGMtY2hpcF9fY2hlY2ttYXJrJyxcbiAgICBDSElQX0VYSVQ6ICdtZGMtY2hpcC0tZXhpdCcsXG4gICAgREVMRVRBQkxFOiAnbWRjLWNoaXAtLWRlbGV0YWJsZScsXG4gICAgRURJVEFCTEU6ICdtZGMtY2hpcC0tZWRpdGFibGUnLFxuICAgIEVESVRJTkc6ICdtZGMtY2hpcC0tZWRpdGluZycsXG4gICAgSElEREVOX0xFQURJTkdfSUNPTjogJ21kYy1jaGlwX19pY29uLS1sZWFkaW5nLWhpZGRlbicsXG4gICAgTEVBRElOR19JQ09OOiAnbWRjLWNoaXBfX2ljb24tLWxlYWRpbmcnLFxuICAgIFBSSU1BUllfQUNUSU9OOiAnbWRjLWNoaXBfX3ByaW1hcnktYWN0aW9uJyxcbiAgICBQUklNQVJZX0FDVElPTl9GT0NVU0VEOiAnbWRjLWNoaXAtLXByaW1hcnktYWN0aW9uLWZvY3VzZWQnLFxuICAgIFNFTEVDVEVEOiAnbWRjLWNoaXAtLXNlbGVjdGVkJyxcbiAgICBURVhUOiAnbWRjLWNoaXBfX3RleHQnLFxuICAgIFRSQUlMSU5HX0FDVElPTjogJ21kYy1jaGlwX190cmFpbGluZy1hY3Rpb24nLFxuICAgIFRSQUlMSU5HX0lDT046ICdtZGMtY2hpcF9faWNvbi0tdHJhaWxpbmcnLFxufTtcbmV4cG9ydCB2YXIgbmF2aWdhdGlvbktleXMgPSBuZXcgU2V0KCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgU2V0IHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXMgYnkgaGFuZFxubmF2aWdhdGlvbktleXMuYWRkKHN0cmluZ3MuQVJST1dfTEVGVF9LRVkpO1xubmF2aWdhdGlvbktleXMuYWRkKHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcbm5hdmlnYXRpb25LZXlzLmFkZChzdHJpbmdzLkFSUk9XX0RPV05fS0VZKTtcbm5hdmlnYXRpb25LZXlzLmFkZChzdHJpbmdzLkFSUk9XX1VQX0tFWSk7XG5uYXZpZ2F0aW9uS2V5cy5hZGQoc3RyaW5ncy5FTkRfS0VZKTtcbm5hdmlnYXRpb25LZXlzLmFkZChzdHJpbmdzLkhPTUVfS0VZKTtcbm5hdmlnYXRpb25LZXlzLmFkZChzdHJpbmdzLklFX0FSUk9XX0xFRlRfS0VZKTtcbm5hdmlnYXRpb25LZXlzLmFkZChzdHJpbmdzLklFX0FSUk9XX1JJR0hUX0tFWSk7XG5uYXZpZ2F0aW9uS2V5cy5hZGQoc3RyaW5ncy5JRV9BUlJPV19ET1dOX0tFWSk7XG5uYXZpZ2F0aW9uS2V5cy5hZGQoc3RyaW5ncy5JRV9BUlJPV19VUF9LRVkpO1xuZXhwb3J0IHZhciBqdW1wQ2hpcEtleXMgPSBuZXcgU2V0KCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgU2V0IHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXMgYnkgaGFuZFxuanVtcENoaXBLZXlzLmFkZChzdHJpbmdzLkFSUk9XX1VQX0tFWSk7XG5qdW1wQ2hpcEtleXMuYWRkKHN0cmluZ3MuQVJST1dfRE9XTl9LRVkpO1xuanVtcENoaXBLZXlzLmFkZChzdHJpbmdzLkhPTUVfS0VZKTtcbmp1bXBDaGlwS2V5cy5hZGQoc3RyaW5ncy5FTkRfS0VZKTtcbmp1bXBDaGlwS2V5cy5hZGQoc3RyaW5ncy5JRV9BUlJPV19VUF9LRVkpO1xuanVtcENoaXBLZXlzLmFkZChzdHJpbmdzLklFX0FSUk9XX0RPV05fS0VZKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIERpcmVjdGlvbiwgRXZlbnRTb3VyY2UsIGp1bXBDaGlwS2V5cywgbmF2aWdhdGlvbktleXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgZW1wdHlDbGllbnRSZWN0ID0ge1xuICAgIGJvdHRvbTogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgd2lkdGg6IDAsXG59O1xudmFyIEZvY3VzQmVoYXZpb3I7XG4oZnVuY3Rpb24gKEZvY3VzQmVoYXZpb3IpIHtcbiAgICBGb2N1c0JlaGF2aW9yW0ZvY3VzQmVoYXZpb3JbXCJTSE9VTERfRk9DVVNcIl0gPSAwXSA9IFwiU0hPVUxEX0ZPQ1VTXCI7XG4gICAgRm9jdXNCZWhhdmlvcltGb2N1c0JlaGF2aW9yW1wiU0hPVUxEX05PVF9GT0NVU1wiXSA9IDFdID0gXCJTSE9VTERfTk9UX0ZPQ1VTXCI7XG59KShGb2N1c0JlaGF2aW9yIHx8IChGb2N1c0JlaGF2aW9yID0ge30pKTtcbnZhciBNRENDaGlwRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDQ2hpcEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDQ2hpcEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDQ2hpcEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgLyoqIFdoZXRoZXIgYSB0cmFpbGluZyBpY29uIGNsaWNrIHNob3VsZCBpbW1lZGlhdGVseSB0cmlnZ2VyIGV4aXQvcmVtb3ZhbCBvZiB0aGUgY2hpcC4gKi9cbiAgICAgICAgX3RoaXMuc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja18gPSB0cnVlO1xuICAgICAgICAvKipcbiAgICAgICAgICogV2hldGhlciB0aGUgcHJpbWFyeSBhY3Rpb24gc2hvdWxkIHJlY2VpdmUgZm9jdXMgb24gY2xpY2suIFNob3VsZCBvbmx5IGJlXG4gICAgICAgICAqIHNldCB0byB0cnVlIGZvciBjbGllbnRzIHdobyBwcm9ncmFtbWF0aWNhbGx5IGdpdmUgZm9jdXMgdG8gYSBkaWZmZXJlbnRcbiAgICAgICAgICogZWxlbWVudCBvbiB0aGUgcGFnZSB3aGVuIGEgY2hpcCBpcyBjbGlja2VkIChsaWtlIGEgbWVudSkuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5zaG91bGRGb2N1c1ByaW1hcnlBY3Rpb25PbkNsaWNrXyA9IHRydWU7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoaXBGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoaXBGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoaXBGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NUb0xlYWRpbmdJY29uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZXZlbnRUYXJnZXRIYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNQcmltYXJ5QWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNUcmFpbGluZ0FjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldEF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBnZXRDaGVja21hcmtCb3VuZGluZ0NsaWVudFJlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVtcHR5Q2xpZW50UmVjdDsgfSxcbiAgICAgICAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlVmFsdWU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9LFxuICAgICAgICAgICAgICAgIGdldFJvb3RCb3VuZGluZ0NsaWVudFJlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVtcHR5Q2xpZW50UmVjdDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaGFzTGVhZGluZ0ljb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzUlRMOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc1RyYWlsaW5nQWN0aW9uTmF2aWdhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlFZGl0RmluaXNoOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5RWRpdFN0YXJ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5SW50ZXJhY3Rpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlOYXZpZ2F0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5UmVtb3ZhbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeVNlbGVjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeVRyYWlsaW5nSWNvbkludGVyYWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzc0Zyb21MZWFkaW5nSWNvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZVRyYWlsaW5nQWN0aW9uRm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRQcmltYXJ5QWN0aW9uQXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFN0eWxlUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENDaGlwRm91bmRhdGlvbi5wcm90b3R5cGUuaXNTZWxlY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0VkaXRhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuRURJVEFCTEUpO1xuICAgIH07XG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLmlzRWRpdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLkVESVRJTkcpO1xuICAgIH07XG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNlbGVjdGVkID0gZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRfKHNlbGVjdGVkKTtcbiAgICAgICAgdGhpcy5ub3RpZnlTZWxlY3Rpb25fKHNlbGVjdGVkKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZEZyb21DaGlwU2V0ID0gZnVuY3Rpb24gKHNlbGVjdGVkLCBzaG91bGROb3RpZnlDbGllbnRzKSB7XG4gICAgICAgIHRoaXMuc2V0U2VsZWN0ZWRfKHNlbGVjdGVkKTtcbiAgICAgICAgaWYgKHNob3VsZE5vdGlmeUNsaWVudHMpIHtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5SWdub3JlZFNlbGVjdGlvbl8oc2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENDaGlwRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0U2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja187XG4gICAgfTtcbiAgICBNRENDaGlwRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0U2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGljayA9IGZ1bmN0aW9uIChzaG91bGRSZW1vdmUpIHtcbiAgICAgICAgdGhpcy5zaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrXyA9IHNob3VsZFJlbW92ZTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTaG91bGRGb2N1c1ByaW1hcnlBY3Rpb25PbkNsaWNrID0gZnVuY3Rpb24gKHNob3VsZEZvY3VzKSB7XG4gICAgICAgIHRoaXMuc2hvdWxkRm9jdXNQcmltYXJ5QWN0aW9uT25DbGlja18gPSBzaG91bGRGb2N1cztcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXREaW1lbnNpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgZ2V0Um9vdFJlY3QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hZGFwdGVyLmdldFJvb3RCb3VuZGluZ0NsaWVudFJlY3QoKTsgfTtcbiAgICAgICAgdmFyIGdldENoZWNrbWFya1JlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuYWRhcHRlci5nZXRDaGVja21hcmtCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2hlbiBhIGNoaXAgaGFzIGEgY2hlY2ttYXJrIGFuZCBub3QgYSBsZWFkaW5nIGljb24sIHRoZSBib3VuZGluZyByZWN0IGNoYW5nZXMgaW4gc2l6ZSBkZXBlbmRpbmcgb24gdGhlIGN1cnJlbnRcbiAgICAgICAgLy8gc2l6ZSBvZiB0aGUgY2hlY2ttYXJrLlxuICAgICAgICBpZiAoIXRoaXMuYWRhcHRlci5oYXNMZWFkaW5nSWNvbigpKSB7XG4gICAgICAgICAgICB2YXIgY2hlY2ttYXJrUmVjdCA9IGdldENoZWNrbWFya1JlY3QoKTtcbiAgICAgICAgICAgIGlmIChjaGVja21hcmtSZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvb3RSZWN0ID0gZ2V0Um9vdFJlY3QoKTtcbiAgICAgICAgICAgICAgICAvLyBDaGVja21hcmsgaXMgYSBzcXVhcmUsIG1lYW5pbmcgdGhlIGNsaWVudCByZWN0J3Mgd2lkdGggYW5kIGhlaWdodCBhcmUgaWRlbnRpY2FsIG9uY2UgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMuXG4gICAgICAgICAgICAgICAgLy8gSG93ZXZlciwgdGhlIGNoZWNrYm94IGlzIGluaXRpYWxseSBoaWRkZW4gYnkgc2V0dGluZyB0aGUgd2lkdGggdG8gMC5cbiAgICAgICAgICAgICAgICAvLyBUbyBhY2NvdW50IGZvciBhbiBpbml0aWFsIHdpZHRoIG9mIDAsIHdlIHVzZSB0aGUgY2hlY2tib3gncyBoZWlnaHQgaW5zdGVhZCAod2hpY2ggZXF1YWxzIHRoZSBlbmQtc3RhdGUgd2lkdGgpXG4gICAgICAgICAgICAgICAgLy8gd2hlbiBhZGRpbmcgaXQgdG8gdGhlIHJvb3QgY2xpZW50IHJlY3QncyB3aWR0aC5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IHJvb3RSZWN0LmJvdHRvbSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiByb290UmVjdC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHJvb3RSZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiByb290UmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiByb290UmVjdC50b3AsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiByb290UmVjdC53aWR0aCArIGNoZWNrbWFya1JlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdldFJvb3RSZWN0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBCZWdpbnMgdGhlIGV4aXQgYW5pbWF0aW9uIHdoaWNoIGxlYWRzIHRvIHJlbW92YWwgb2YgdGhlIGNoaXAuXG4gICAgICovXG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLmJlZ2luRXhpdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0hJUF9FWElUKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeUludGVyYWN0aW9uKCk7XG4gICAgICAgIHRoaXMuc2V0UHJpbWFyeUFjdGlvbkZvY3VzYWJsZV8odGhpcy5nZXRGb2N1c0JlaGF2aW9yXygpKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVEb3VibGVDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0YWJsZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RWRpdGluZygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGEgdHJhbnNpdGlvbiBlbmQgZXZlbnQgb24gdGhlIHJvb3QgZWxlbWVudC5cbiAgICAgKi9cbiAgICBNRENDaGlwRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gSGFuZGxlIHRyYW5zaXRpb24gZW5kIGV2ZW50IG9uIHRoZSBjaGlwIHdoZW4gaXQgaXMgYWJvdXQgdG8gYmUgcmVtb3ZlZC5cbiAgICAgICAgdmFyIHNob3VsZEhhbmRsZSA9IHRoaXMuYWRhcHRlci5ldmVudFRhcmdldEhhc0NsYXNzKGV2dC50YXJnZXQsIGNzc0NsYXNzZXMuQ0hJUF9FWElUKTtcbiAgICAgICAgdmFyIHdpZHRoSXNBbmltYXRpbmcgPSBldnQucHJvcGVydHlOYW1lID09PSAnd2lkdGgnO1xuICAgICAgICB2YXIgb3BhY2l0eUlzQW5pbWF0aW5nID0gZXZ0LnByb3BlcnR5TmFtZSA9PT0gJ29wYWNpdHknO1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlICYmIG9wYWNpdHlJc0FuaW1hdGluZykge1xuICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2Nzcy10cmlja3MuY29tL3VzaW5nLWNzcy10cmFuc2l0aW9ucy1hdXRvLWRpbWVuc2lvbnMvI2FydGljbGUtaGVhZGVyLWlkLTVcbiAgICAgICAgICAgIHZhciBjaGlwV2lkdGhfMSA9IHRoaXMuYWRhcHRlci5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJ3dpZHRoJyk7XG4gICAgICAgICAgICAvLyBPbiB0aGUgbmV4dCBmcmFtZSAob25jZSB3ZSBnZXQgdGhlIGNvbXB1dGVkIHdpZHRoKSwgZXhwbGljaXRseSBzZXQgdGhlIGNoaXAncyB3aWR0aFxuICAgICAgICAgICAgLy8gdG8gaXRzIGN1cnJlbnQgcGl4ZWwgd2lkdGgsIHNvIHdlIGFyZW4ndCB0cmFuc2l0aW9uaW5nIG91dCBvZiAnYXV0bycuXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuc2V0U3R5bGVQcm9wZXJ0eSgnd2lkdGgnLCBjaGlwV2lkdGhfMSk7XG4gICAgICAgICAgICAgICAgLy8gVG8gbWl0aWdhdGUgaml0dGVyLCBzdGFydCB0cmFuc2l0aW9uaW5nIHBhZGRpbmcgYW5kIG1hcmdpbiBiZWZvcmUgd2lkdGguXG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5zZXRTdHlsZVByb3BlcnR5KCdwYWRkaW5nJywgJzAnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnNldFN0eWxlUHJvcGVydHkoJ21hcmdpbicsICcwJyk7XG4gICAgICAgICAgICAgICAgLy8gT24gdGhlIG5leHQgZnJhbWUgKG9uY2Ugd2lkdGggaXMgZXhwbGljaXRseSBzZXQpLCB0cmFuc2l0aW9uIHdpZHRoIHRvIDAuXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5zZXRTdHlsZVByb3BlcnR5KCd3aWR0aCcsICcwJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlICYmIHdpZHRoSXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRm9jdXMoKTtcbiAgICAgICAgICAgIHZhciByZW1vdmVkQW5ub3VuY2VtZW50ID0gdGhpcy5hZGFwdGVyLmdldEF0dHJpYnV0ZShzdHJpbmdzLlJFTU9WRURfQU5OT1VOQ0VNRU5UX0FUVFJJQlVURSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIubm90aWZ5UmVtb3ZhbChyZW1vdmVkQW5ub3VuY2VtZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgYSB0cmFuc2l0aW9uIGVuZCBldmVudCBvbiB0aGUgbGVhZGluZyBpY29uIG9yIGNoZWNrbWFyaywgc2luY2UgdGhlIHRyYW5zaXRpb24gZW5kIGV2ZW50IGJ1YmJsZXMuXG4gICAgICAgIGlmICghb3BhY2l0eUlzQW5pbWF0aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNob3VsZEhpZGVMZWFkaW5nSWNvbiA9IHRoaXMuYWRhcHRlci5ldmVudFRhcmdldEhhc0NsYXNzKGV2dC50YXJnZXQsIGNzc0NsYXNzZXMuTEVBRElOR19JQ09OKSAmJlxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuU0VMRUNURUQpO1xuICAgICAgICB2YXIgc2hvdWxkU2hvd0xlYWRpbmdJY29uID0gdGhpcy5hZGFwdGVyLmV2ZW50VGFyZ2V0SGFzQ2xhc3MoZXZ0LnRhcmdldCwgY3NzQ2xhc3Nlcy5DSEVDS01BUkspICYmXG4gICAgICAgICAgICAhdGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuU0VMRUNURUQpO1xuICAgICAgICBpZiAoc2hvdWxkSGlkZUxlYWRpbmdJY29uKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3NUb0xlYWRpbmdJY29uKGNzc0NsYXNzZXMuSElEREVOX0xFQURJTkdfSUNPTik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFNob3dMZWFkaW5nSWNvbikge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzRnJvbUxlYWRpbmdJY29uKGNzc0NsYXNzZXMuSElEREVOX0xFQURJTkdfSUNPTik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1c0luID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBFYXJseSBleGl0IGlmIHRoZSBldmVudCBkb2Vzbid0IGNvbWUgZnJvbSB0aGUgcHJpbWFyeSBhY3Rpb25cbiAgICAgICAgaWYgKCF0aGlzLmV2ZW50RnJvbVByaW1hcnlBY3Rpb25fKGV2dCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5QUklNQVJZX0FDVElPTl9GT0NVU0VEKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVGb2N1c091dCA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgZXZlbnQgZG9lc24ndCBjb21lIGZyb20gdGhlIHByaW1hcnkgYWN0aW9uXG4gICAgICAgIGlmICghdGhpcy5ldmVudEZyb21QcmltYXJ5QWN0aW9uXyhldnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0aW5nKCkpIHtcbiAgICAgICAgICAgIHRoaXMuZmluaXNoRWRpdGluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlBSSU1BUllfQUNUSU9OX0ZPQ1VTRUQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBhbiBpbnRlcmFjdGlvbiBldmVudCBvbiB0aGUgdHJhaWxpbmcgaWNvbiBlbGVtZW50LiBUaGlzIGlzIHVzZWQgdG9cbiAgICAgKiBwcmV2ZW50IHRoZSByaXBwbGUgZnJvbSBhY3RpdmF0aW5nIG9uIGludGVyYWN0aW9uIHdpdGggdGhlIHRyYWlsaW5nIGljb24uXG4gICAgICovXG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRyYWlsaW5nQWN0aW9uSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlUcmFpbGluZ0ljb25JbnRlcmFjdGlvbigpO1xuICAgICAgICB0aGlzLnJlbW92ZUNoaXBfKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGEga2V5ZG93biBldmVudCBmcm9tIHRoZSByb290IGVsZW1lbnQuXG4gICAgICovXG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUtleWRvd24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRWRpdGluZygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRGaW5pc2hFZGl0aW5nKGV2dCkpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaEVkaXRpbmcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFdoZW4gZWRpdGluZywgdGhlIGZvdW5kYXRpb24gc2hvdWxkIG9ubHkgaGFuZGxlIGtleSBldmVudHMgdGhhdCBmaW5pc2hcbiAgICAgICAgICAgIC8vIHRoZSBlZGl0aW5nIHByb2Nlc3MuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNFZGl0YWJsZSgpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaG91bGRTdGFydEVkaXRpbmcoZXZ0KSkge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRFZGl0aW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTm90aWZ5SW50ZXJhY3Rpb25fKGV2dCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlJbnRlcmFjdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5QWN0aW9uRm9jdXNhYmxlXyh0aGlzLmdldEZvY3VzQmVoYXZpb3JfKCkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlQWN0aW9uXyhldnQpKSB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpcF8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBFYXJseSBleGl0IGlmIHRoZSBrZXkgaXMgbm90IHVzYWJsZVxuICAgICAgICBpZiAoIW5hdmlnYXRpb25LZXlzLmhhcyhldnQua2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBiZWhhdmlvciBmb3IgbW92ZW1lbnQga2V5cyB3aGljaCBjb3VsZCBpbmNsdWRlIHNjcm9sbGluZ1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5mb2N1c05leHRBY3Rpb25fKGV2dC5rZXksIEV2ZW50U291cmNlLlBSSU1BUlkpO1xuICAgIH07XG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRyYWlsaW5nQWN0aW9uTmF2aWdhdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNOZXh0QWN0aW9uXyhldnQuZGV0YWlsLmtleSwgRXZlbnRTb3VyY2UuVFJBSUxJTkcpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIGJ5IHRoZSBjaGlwIHNldCB0byByZW1vdmUgZm9jdXMgZnJvbSB0aGUgY2hpcCBhY3Rpb25zLlxuICAgICAqL1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5yZW1vdmVGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFByaW1hcnlBY3Rpb25BdHRyKHN0cmluZ3MuVEFCX0lOREVYLCAnLTEnKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZVRyYWlsaW5nQWN0aW9uRm9jdXMoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENhbGxlZCBieSB0aGUgY2hpcCBzZXQgdG8gZm9jdXMgdGhlIHByaW1hcnkgYWN0aW9uLlxuICAgICAqXG4gICAgICovXG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLmZvY3VzUHJpbWFyeUFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRQcmltYXJ5QWN0aW9uRm9jdXNhYmxlXyhGb2N1c0JlaGF2aW9yLlNIT1VMRF9GT0NVUyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxsZWQgYnkgdGhlIGNoaXAgc2V0IHRvIGZvY3VzIHRoZSB0cmFpbGluZyBhY3Rpb24gKGlmIHByZXNlbnQpLCBvdGhlcndpc2VcbiAgICAgKiBnaXZlcyBmb2N1cyB0byB0aGUgdHJhaWxpbmcgYWN0aW9uLlxuICAgICAqL1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5mb2N1c1RyYWlsaW5nQWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdHJhaWxpbmdBY3Rpb25Jc05hdmlnYWJsZSA9IHRoaXMuYWRhcHRlci5pc1RyYWlsaW5nQWN0aW9uTmF2aWdhYmxlKCk7XG4gICAgICAgIGlmICh0cmFpbGluZ0FjdGlvbklzTmF2aWdhYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0UHJpbWFyeUFjdGlvbkF0dHIoc3RyaW5ncy5UQUJfSU5ERVgsICctMScpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZvY3VzVHJhaWxpbmdBY3Rpb24oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvY3VzUHJpbWFyeUFjdGlvbigpO1xuICAgIH07XG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFByaW1hcnlBY3Rpb25Gb2N1c2FibGVfID0gZnVuY3Rpb24gKGZvY3VzQmVoYXZpb3IpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFByaW1hcnlBY3Rpb25BdHRyKHN0cmluZ3MuVEFCX0lOREVYLCAnMCcpO1xuICAgICAgICBpZiAoZm9jdXNCZWhhdmlvciA9PT0gRm9jdXNCZWhhdmlvci5TSE9VTERfRk9DVVMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5mb2N1c1ByaW1hcnlBY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlVHJhaWxpbmdBY3Rpb25Gb2N1cygpO1xuICAgIH07XG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZvY3VzQmVoYXZpb3JfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRGb2N1c1ByaW1hcnlBY3Rpb25PbkNsaWNrXykge1xuICAgICAgICAgICAgcmV0dXJuIEZvY3VzQmVoYXZpb3IuU0hPVUxEX0ZPQ1VTO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGb2N1c0JlaGF2aW9yLlNIT1VMRF9OT1RfRk9DVVM7XG4gICAgfTtcbiAgICBNRENDaGlwRm91bmRhdGlvbi5wcm90b3R5cGUuZm9jdXNOZXh0QWN0aW9uXyA9IGZ1bmN0aW9uIChrZXksIHNvdXJjZSkge1xuICAgICAgICB2YXIgaXNUcmFpbGluZ0FjdGlvbk5hdmlnYWJsZSA9IHRoaXMuYWRhcHRlci5pc1RyYWlsaW5nQWN0aW9uTmF2aWdhYmxlKCk7XG4gICAgICAgIHZhciBkaXIgPSB0aGlzLmdldERpcmVjdGlvbl8oa2V5KTtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiB0aGUga2V5IHNob3VsZCBqdW1wIGNoaXBzXG4gICAgICAgIGlmIChqdW1wQ2hpcEtleXMuaGFzKGtleSkgfHwgIWlzVHJhaWxpbmdBY3Rpb25OYXZpZ2FibGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubm90aWZ5TmF2aWdhdGlvbihrZXksIHNvdXJjZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gRXZlbnRTb3VyY2UuUFJJTUFSWSAmJiBkaXIgPT09IERpcmVjdGlvbi5SSUdIVCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNUcmFpbGluZ0FjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2UgPT09IEV2ZW50U291cmNlLlRSQUlMSU5HICYmIGRpciA9PT0gRGlyZWN0aW9uLkxFRlQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvY3VzUHJpbWFyeUFjdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlOYXZpZ2F0aW9uKGtleSwgRXZlbnRTb3VyY2UuTk9ORSk7XG4gICAgfTtcbiAgICBNRENDaGlwRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RGlyZWN0aW9uXyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGlzUlRMID0gdGhpcy5hZGFwdGVyLmlzUlRMKCk7XG4gICAgICAgIHZhciBpc0xlZnRLZXkgPSBrZXkgPT09IHN0cmluZ3MuQVJST1dfTEVGVF9LRVkgfHwga2V5ID09PSBzdHJpbmdzLklFX0FSUk9XX0xFRlRfS0VZO1xuICAgICAgICB2YXIgaXNSaWdodEtleSA9IGtleSA9PT0gc3RyaW5ncy5BUlJPV19SSUdIVF9LRVkgfHwga2V5ID09PSBzdHJpbmdzLklFX0FSUk9XX1JJR0hUX0tFWTtcbiAgICAgICAgaWYgKCFpc1JUTCAmJiBpc0xlZnRLZXkgfHwgaXNSVEwgJiYgaXNSaWdodEtleSkge1xuICAgICAgICAgICAgcmV0dXJuIERpcmVjdGlvbi5MRUZUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEaXJlY3Rpb24uUklHSFQ7XG4gICAgfTtcbiAgICBNRENDaGlwRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlQ2hpcF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2tfKSB7XG4gICAgICAgICAgICB0aGlzLmJlZ2luRXhpdCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENDaGlwRm91bmRhdGlvbi5wcm90b3R5cGUuc2hvdWxkU3RhcnRFZGl0aW5nID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudEZyb21QcmltYXJ5QWN0aW9uXyhldnQpICYmIGV2dC5rZXkgPT09IHN0cmluZ3MuRU5URVJfS0VZO1xuICAgIH07XG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLnNob3VsZEZpbmlzaEVkaXRpbmcgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiBldnQua2V5ID09PSBzdHJpbmdzLkVOVEVSX0tFWTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5zaG91bGROb3RpZnlJbnRlcmFjdGlvbl8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiBldnQua2V5ID09PSBzdHJpbmdzLkVOVEVSX0tFWSB8fCBldnQua2V5ID09PSBzdHJpbmdzLlNQQUNFQkFSX0tFWTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0RlbGV0ZUFjdGlvbl8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBpc0RlbGV0YWJsZSA9IHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLkRFTEVUQUJMRSk7XG4gICAgICAgIHJldHVybiBpc0RlbGV0YWJsZSAmJlxuICAgICAgICAgICAgKGV2dC5rZXkgPT09IHN0cmluZ3MuQkFDS1NQQUNFX0tFWSB8fCBldnQua2V5ID09PSBzdHJpbmdzLkRFTEVURV9LRVkgfHxcbiAgICAgICAgICAgICAgICBldnQua2V5ID09PSBzdHJpbmdzLklFX0RFTEVURV9LRVkpO1xuICAgIH07XG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNlbGVjdGVkXyA9IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRQcmltYXJ5QWN0aW9uQXR0cihzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ3RydWUnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRQcmltYXJ5QWN0aW9uQXR0cihzdHJpbmdzLkFSSUFfQ0hFQ0tFRCwgJ2ZhbHNlJyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5ub3RpZnlTZWxlY3Rpb25fID0gZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlTZWxlY3Rpb24oc2VsZWN0ZWQsIGZhbHNlKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5ub3RpZnlJZ25vcmVkU2VsZWN0aW9uXyA9IGZ1bmN0aW9uIChzZWxlY3RlZCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIubm90aWZ5U2VsZWN0aW9uKHNlbGVjdGVkLCB0cnVlKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5ldmVudEZyb21QcmltYXJ5QWN0aW9uXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5ldmVudFRhcmdldEhhc0NsYXNzKGV2dC50YXJnZXQsIGNzc0NsYXNzZXMuUFJJTUFSWV9BQ1RJT04pO1xuICAgIH07XG4gICAgTURDQ2hpcEZvdW5kYXRpb24ucHJvdG90eXBlLnN0YXJ0RWRpdGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuRURJVElORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlFZGl0U3RhcnQoKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBGb3VuZGF0aW9uLnByb3RvdHlwZS5maW5pc2hFZGl0aW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5FRElUSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeUVkaXRGaW5pc2goKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENDaGlwRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDQ2hpcEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENDaGlwRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiaW1wb3J0IHtcbiAgYnViYmxlLFxuICBsaXN0ZW4sXG4gIHByZXZlbnRfZGVmYXVsdCxcbiAgc3RvcF9wcm9wYWdhdGlvbixcbn0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIERPTSBldmVudHMuXG5jb25zdCBvbGRNb2RpZmllclJlZ2V4ID0gL15bYS16XSsoPzo6KD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIG90aGVyIGV2ZW50cy5cbmNvbnN0IG5ld01vZGlmaWVyUmVnZXggPSAvXlteJF0rKD86XFwkKD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY29tcG9uZW50KSB7XG4gIC8vIFRoaXMgaXMgb3VyIHBzZXVkbyAkb24gZnVuY3Rpb24uIEl0IGlzIGRlZmluZWQgb24gY29tcG9uZW50IG1vdW50LlxuICBsZXQgJG9uO1xuICAvLyBUaGlzIGlzIGEgbGlzdCBvZiBldmVudHMgYm91bmQgYmVmb3JlIG1vdW50LlxuICBsZXQgZXZlbnRzID0gW107XG4gIC8vIFRoaXMgaXMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCAkb24gZnVuY3Rpb24uXG4gIGNvbnN0IGNvbXBvbmVudE9uID0gY29tcG9uZW50LiRvbjtcblxuICAvLyBBbmQgd2Ugb3ZlcnJpZGUgdGhlICRvbiBmdW5jdGlvbiB0byBmb3J3YXJkIGFsbCBib3VuZCBldmVudHMuXG4gIGNvbXBvbmVudC4kb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICBsZXQgZGVzdHJ1Y3RvciA9ICgpID0+IHt9O1xuICAgIGlmICgkb24pIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgIGRlc3RydWN0b3IgPSAkb24oZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgYmVmb3JlIG1vdW50IGJ5IFN2ZWx0ZS5cbiAgICAgIGV2ZW50cy5wdXNoKFtldmVudFR5cGUsIGNhbGxiYWNrXSk7XG4gICAgfVxuICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuXG4gICAgaWYgKG9sZE1vZGlmaWVyTWF0Y2ggJiYgY29uc29sZSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnRXZlbnQgbW9kaWZpZXJzIGluIFNNVUkgbm93IHVzZSBcIiRcIiBpbnN0ZWFkIG9mIFwiOlwiLCBzbyB0aGF0IGFsbCBldmVudHMgY2FuIGJlIGJvdW5kIHdpdGggbW9kaWZpZXJzLiBQbGVhc2UgdXBkYXRlIHlvdXIgZXZlbnQgYmluZGluZzogJyxcbiAgICAgICAgZXZlbnRUeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAvLyBSZW1vdmUgbW9kaWZpZXJzIGZyb20gdGhlIHJlYWwgZXZlbnQuXG4gICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICRvbiBmdW5jdGlvbi5cbiAgICBjb25zdCBjb21wb25lbnREZXN0cnVjdG9yID0gY29tcG9uZW50T24uY2FsbChcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGV2ZW50VHlwZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgZGVzdHJ1Y3RvcigpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudERlc3RydWN0b3IoLi4uYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGUpIHtcbiAgICAvLyBJbnRlcm5hbGx5IGJ1YmJsZSB0aGUgZXZlbnQgdXAgZnJvbSBTdmVsdGUgY29tcG9uZW50cy5cbiAgICBidWJibGUoY29tcG9uZW50LCBlKTtcbiAgfVxuXG4gIHJldHVybiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlc3RydWN0b3JzID0gW107XG4gICAgY29uc3QgZm9yd2FyZERlc3RydWN0b3JzID0ge307XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciBmb3J3YXJkaW5nIGFsbCBib3VuZCBldmVudHMuXG4gICAgJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICAgIGxldCBoYW5kbGVyID0gY2FsbGJhY2s7XG4gICAgICAvLyBET00gYWRkRXZlbnRMaXN0ZW5lciBvcHRpb25zIGFyZ3VtZW50LlxuICAgICAgbGV0IG9wdGlvbnMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcbiAgICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBldmVudCBtb2RpZmllcnMuXG4gICAgICAgIC8vIFN1cHBvcnRlZCBtb2RpZmllcnM6XG4gICAgICAgIC8vIC0gcHJldmVudERlZmF1bHRcbiAgICAgICAgLy8gLSBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgLy8gLSBwYXNzaXZlXG4gICAgICAgIC8vIC0gbm9ucGFzc2l2ZVxuICAgICAgICAvLyAtIGNhcHR1cmVcbiAgICAgICAgLy8gLSBvbmNlXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhwYXJ0cy5zbGljZSgxKS5tYXAoKG1vZCkgPT4gW21vZCwgdHJ1ZV0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9ucGFzc2l2ZSkge1xuICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLm5vbnBhc3NpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBoYW5kbGVyID0gcHJldmVudF9kZWZhdWx0KGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wX3Byb3BhZ2F0aW9uKGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBldmVudCBkaXJlY3RseSwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICAgIGNvbnN0IG9mZiA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGVzdHJ1Y3RvciA9ICgpID0+IHtcbiAgICAgICAgb2ZmKCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRlc3RydWN0b3JzLmluZGV4T2YoZGVzdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGRlc3RydWN0b3JzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkZXN0cnVjdG9ycy5wdXNoKGRlc3RydWN0b3IpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBldmVudCBmcm9tIFN2ZWx0ZS5cbiAgICAgIGlmICghZXZlbnRUeXBlIGluIGZvcndhcmREZXN0cnVjdG9ycykge1xuICAgICAgICBmb3J3YXJkRGVzdHJ1Y3RvcnNbZXZlbnRUeXBlXSA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGZvcndhcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzdHJ1Y3RvcjtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpc3RlbiB0byBhbGwgdGhlIGV2ZW50cyBhZGRlZCBiZWZvcmUgbW91bnQuXG4gICAgICAkb24oZXZlbnRzW2ldWzBdLCBldmVudHNbaV1bMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RydWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnNbaV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgZm9yd2FyZGVycy5cbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoZm9yd2FyZERlc3RydWN0b3JzKSkge1xuICAgICAgICAgIGVudHJ5WzFdKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGFzc01hcChjbGFzc09iaikge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmopXG4gICAgLmZpbHRlcigoW25hbWUsIHZhbHVlXSkgPT4gbmFtZSAhPT0gJycgJiYgdmFsdWUpXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKVxuICAgIC5qb2luKCcgJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goXG4gIGVsZW1lbnQsXG4gIGV2ZW50VHlwZSxcbiAgZGV0YWlsID0ge30sXG4gIGV2ZW50SW5pdCA9IHsgYnViYmxlczogdHJ1ZSB9XG4pIHtcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgZXZlbnRJbml0KTtcbiAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgY29uc3QgZWwgPSAnZ2V0RWxlbWVudCcgaW4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0RWxlbWVudCgpIDogZWxlbWVudDtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25zKG5vZGUsIGFjdGlvbnMpIHtcbiAgbGV0IG9iamVjdHMgPSBbXTtcblxuICBpZiAoYWN0aW9ucykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICBjb25zdCBhY3Rpb24gPSBpc0FycmF5ID8gYWN0aW9uc1tpXVswXSA6IGFjdGlvbnNbaV07XG4gICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlLCBhY3Rpb25zW2ldWzFdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShhY3Rpb25zKSB7XG4gICAgICBpZiAoKChhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoKSB8fCAwKSAhPSBvYmplY3RzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG5vdCBjaGFuZ2UgdGhlIGxlbmd0aCBvZiBhbiBhY3Rpb25zIGFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9ucykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAndXBkYXRlJyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZShhY3Rpb25zW2ldWzFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ2Rlc3Ryb3knIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICBvYmplY3RzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG4iLCIvKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZyB0b1xuICogZGV0ZWN0IENTUyBjdXN0b20gdmFyaWFibGUgc3VwcG9ydC5cbiAqL1xudmFyIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3J0c0Nzc1ZhcmlhYmxlcyh3aW5kb3dPYmosIGZvcmNlUmVmcmVzaCkge1xuICAgIGlmIChmb3JjZVJlZnJlc2ggPT09IHZvaWQgMCkgeyBmb3JjZVJlZnJlc2ggPSBmYWxzZTsgfVxuICAgIHZhciBDU1MgPSB3aW5kb3dPYmouQ1NTO1xuICAgIHZhciBzdXBwb3J0c0Nzc1ZhcnMgPSBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgaWYgKHR5cGVvZiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc18gPT09ICdib29sZWFuJyAmJiAhZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHJldHVybiBzdXBwb3J0c0Nzc1ZhcmlhYmxlc187XG4gICAgfVxuICAgIHZhciBzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCA9IENTUyAmJiB0eXBlb2YgQ1NTLnN1cHBvcnRzID09PSAnZnVuY3Rpb24nO1xuICAgIGlmICghc3VwcG9ydHNGdW5jdGlvblByZXNlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyA9IENTUy5zdXBwb3J0cygnLS1jc3MtdmFycycsICd5ZXMnKTtcbiAgICAvLyBTZWU6IGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTQ2NjlcbiAgICAvLyBTZWU6IFJFQURNRSBzZWN0aW9uIG9uIFNhZmFyaVxuICAgIHZhciB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXMgPSAoQ1NTLnN1cHBvcnRzKCcoLS1jc3MtdmFyczogeWVzKScpICYmXG4gICAgICAgIENTUy5zdXBwb3J0cygnY29sb3InLCAnIzAwMDAwMDAwJykpO1xuICAgIHN1cHBvcnRzQ3NzVmFycyA9XG4gICAgICAgIGV4cGxpY2l0bHlTdXBwb3J0c0Nzc1ZhcnMgfHwgd2VBcmVGZWF0dXJlRGV0ZWN0aW5nU2FmYXJpMTBwbHVzO1xuICAgIGlmICghZm9yY2VSZWZyZXNoKSB7XG4gICAgICAgIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9IHN1cHBvcnRzQ3NzVmFycztcbiAgICB9XG4gICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFycztcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoZXZ0LCBwYWdlT2Zmc2V0LCBjbGllbnRSZWN0KSB7XG4gICAgaWYgKCFldnQpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogMCwgeTogMCB9O1xuICAgIH1cbiAgICB2YXIgeCA9IHBhZ2VPZmZzZXQueCwgeSA9IHBhZ2VPZmZzZXQueTtcbiAgICB2YXIgZG9jdW1lbnRYID0geCArIGNsaWVudFJlY3QubGVmdDtcbiAgICB2YXIgZG9jdW1lbnRZID0geSArIGNsaWVudFJlY3QudG9wO1xuICAgIHZhciBub3JtYWxpemVkWDtcbiAgICB2YXIgbm9ybWFsaXplZFk7XG4gICAgLy8gRGV0ZXJtaW5lIHRvdWNoIHBvaW50IHJlbGF0aXZlIHRvIHRoZSByaXBwbGUgY29udGFpbmVyLlxuICAgIGlmIChldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgICAgIHZhciB0b3VjaEV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IHRvdWNoRXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBtb3VzZUV2ZW50ID0gZXZ0O1xuICAgICAgICBub3JtYWxpemVkWCA9IG1vdXNlRXZlbnQucGFnZVggLSBkb2N1bWVudFg7XG4gICAgICAgIG5vcm1hbGl6ZWRZID0gbW91c2VFdmVudC5wYWdlWSAtIGRvY3VtZW50WTtcbiAgICB9XG4gICAgcmV0dXJuIHsgeDogbm9ybWFsaXplZFgsIHk6IG5vcm1hbGl6ZWRZIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBEZXRlcm1pbmUgd2hldGhlciB0aGUgY3VycmVudCBicm93c2VyIHN1cHBvcnRzIHBhc3NpdmUgZXZlbnQgbGlzdGVuZXJzLCBhbmRcbiAqIGlmIHNvLCB1c2UgdGhlbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGFzc2l2ZShnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgcmV0dXJuIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopID9cbiAgICAgICAgeyBwYXNzaXZlOiB0cnVlIH0gOlxuICAgICAgICBmYWxzZTtcbn1cbmZ1bmN0aW9uIHN1cHBvcnRzUGFzc2l2ZU9wdGlvbihnbG9iYWxPYmopIHtcbiAgICBpZiAoZ2xvYmFsT2JqID09PSB2b2lkIDApIHsgZ2xvYmFsT2JqID0gd2luZG93OyB9XG4gICAgLy8gU2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0V2ZW50VGFyZ2V0L2FkZEV2ZW50TGlzdGVuZXJcbiAgICB2YXIgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuIHRoZSBicm93c2VyXG4gICAgICAgICAgICAvLyBhdHRlbXB0cyB0byBhY2Nlc3MgdGhlIHBhc3NpdmUgcHJvcGVydHkuXG4gICAgICAgICAgICBnZXQgcGFzc2l2ZSgpIHtcbiAgICAgICAgICAgICAgICBwYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkgeyB9O1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICBnbG9iYWxPYmouZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGVzdCcsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHBhc3NpdmVTdXBwb3J0ZWQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8qKlxuICogVXNlZCB0byBjb21wdXRlIHRoZSBlc3RpbWF0ZWQgc2Nyb2xsIHdpZHRoIG9mIGVsZW1lbnRzLiBXaGVuIGFuIGVsZW1lbnQgaXNcbiAqIGhpZGRlbiBkdWUgdG8gZGlzcGxheTogbm9uZTsgYmVpbmcgYXBwbGllZCB0byBhIHBhcmVudCBlbGVtZW50LCB0aGUgd2lkdGggaXNcbiAqIHJldHVybmVkIGFzIDAuIEhvd2V2ZXIsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhIHRydWUgd2lkdGggb25jZSBubyBsb25nZXJcbiAqIGluc2lkZSBhIGRpc3BsYXk6IG5vbmUgY29udGV4dC4gVGhpcyBtZXRob2QgY29tcHV0ZXMgYW4gZXN0aW1hdGVkIHdpZHRoIHdoZW5cbiAqIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBvciByZXR1cm5zIHRoZSB0cnVlIHdpZHRoIHdoZW4gdGhlIGVsZW1lbnQgaXMgdmlzYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IHdob3NlIHdpZHRoIHRvIGVzdGltYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZVNjcm9sbFdpZHRoKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayB0aGUgb2Zmc2V0UGFyZW50LiBJZiB0aGUgZWxlbWVudCBpbmhlcml0cyBkaXNwbGF5OiBub25lIGZyb20gYW55XG4gICAgLy8gcGFyZW50LCB0aGUgb2Zmc2V0UGFyZW50IHByb3BlcnR5IHdpbGwgYmUgbnVsbCAoc2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L29mZnNldFBhcmVudCkuXG4gICAgLy8gVGhpcyBjaGVjayBlbnN1cmVzIHdlIG9ubHkgY2xvbmUgdGhlIG5vZGUgd2hlbiBuZWNlc3NhcnkuXG4gICAgdmFyIGh0bWxFbCA9IGVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbC5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbC5zY3JvbGxXaWR0aDtcbiAgICB9XG4gICAgdmFyIGNsb25lID0gaHRtbEVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5OXB4LCAtOTk5OXB4KScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgdmFyIHNjcm9sbFdpZHRoID0gY2xvbmUuc2Nyb2xsV2lkdGg7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICByZXR1cm4gc2Nyb2xsV2lkdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICAvLyBSaXBwbGUgaXMgYSBzcGVjaWFsIGNhc2Ugd2hlcmUgdGhlIFwicm9vdFwiIGNvbXBvbmVudCBpcyByZWFsbHkgYSBcIm1peGluXCIgb2Ygc29ydHMsXG4gICAgLy8gZ2l2ZW4gdGhhdCBpdCdzIGFuICd1cGdyYWRlJyB0byBhbiBleGlzdGluZyBjb21wb25lbnQuIFRoYXQgYmVpbmcgc2FpZCBpdCBpcyB0aGUgcm9vdFxuICAgIC8vIENTUyBjbGFzcyB0aGF0IGFsbCBvdGhlciBDU1MgY2xhc3NlcyBkZXJpdmUgZnJvbS5cbiAgICBCR19GT0NVU0VEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tYmFja2dyb3VuZC1mb2N1c2VkJyxcbiAgICBGR19BQ1RJVkFUSU9OOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tZm9yZWdyb3VuZC1hY3RpdmF0aW9uJyxcbiAgICBGR19ERUFDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWRlYWN0aXZhdGlvbicsXG4gICAgUk9PVDogJ21kYy1yaXBwbGUtdXBncmFkZWQnLFxuICAgIFVOQk9VTkRFRDogJ21kYy1yaXBwbGUtdXBncmFkZWQtLXVuYm91bmRlZCcsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIFZBUl9GR19TQ0FMRTogJy0tbWRjLXJpcHBsZS1mZy1zY2FsZScsXG4gICAgVkFSX0ZHX1NJWkU6ICctLW1kYy1yaXBwbGUtZmctc2l6ZScsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9FTkQ6ICctLW1kYy1yaXBwbGUtZmctdHJhbnNsYXRlLWVuZCcsXG4gICAgVkFSX0ZHX1RSQU5TTEFURV9TVEFSVDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtc3RhcnQnLFxuICAgIFZBUl9MRUZUOiAnLS1tZGMtcmlwcGxlLWxlZnQnLFxuICAgIFZBUl9UT1A6ICctLW1kYy1yaXBwbGUtdG9wJyxcbn07XG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM6IDIyNSxcbiAgICBGR19ERUFDVElWQVRJT05fTVM6IDE1MCxcbiAgICBJTklUSUFMX09SSUdJTl9TQ0FMRTogMC42LFxuICAgIFBBRERJTkc6IDEwLFxuICAgIFRBUF9ERUxBWV9NUzogMzAwLCAvLyBEZWxheSBiZXR3ZWVuIHRvdWNoIGFuZCBzaW11bGF0ZWQgbW91c2UgZXZlbnRzIG9uIHRvdWNoIGRldmljZXNcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBudW1iZXJzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzIH0gZnJvbSAnLi91dGlsJztcbi8vIEFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gdGhlIHJvb3QgZWxlbWVudCBvZiBlYWNoIGluc3RhbmNlIGZvciBhY3RpdmF0aW9uXG52YXIgQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hzdGFydCcsICdwb2ludGVyZG93bicsICdtb3VzZWRvd24nLCAna2V5ZG93bicsXG5dO1xuLy8gRGVhY3RpdmF0aW9uIGV2ZW50cyByZWdpc3RlcmVkIG9uIGRvY3VtZW50RWxlbWVudCB3aGVuIGEgcG9pbnRlci1yZWxhdGVkIGRvd24gZXZlbnQgb2NjdXJzXG52YXIgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMgPSBbXG4gICAgJ3RvdWNoZW5kJywgJ3BvaW50ZXJ1cCcsICdtb3VzZXVwJywgJ2NvbnRleHRtZW51Jyxcbl07XG4vLyBzaW11bHRhbmVvdXMgbmVzdGVkIGFjdGl2YXRpb25zXG52YXIgYWN0aXZhdGVkVGFyZ2V0cyA9IFtdO1xudmFyIE1EQ1JpcHBsZUZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1JpcHBsZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENSaXBwbGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgIF90aGlzLmZnU2NhbGVfID0gJzAnO1xuICAgICAgICBfdGhpcy5mcmFtZV8gPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbiAgICAgICAgX3RoaXMuaW5pdGlhbFNpemVfID0gMDtcbiAgICAgICAgX3RoaXMubGF5b3V0RnJhbWVfID0gMDtcbiAgICAgICAgX3RoaXMubWF4UmFkaXVzXyA9IDA7XG4gICAgICAgIF90aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IHRydWU7XG4gICAgICAgICAgICBfdGhpcy5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8oKTtcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMuYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uIChlKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0ZV8oZSk7IH07XG4gICAgICAgIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlYWN0aXZhdGVfKCk7IH07XG4gICAgICAgIF90aGlzLmZvY3VzSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVGb2N1cygpOyB9O1xuICAgICAgICBfdGhpcy5ibHVySGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5oYW5kbGVCbHVyKCk7IH07XG4gICAgICAgIF90aGlzLnJlc2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubGF5b3V0KCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBjb250YWluc0V2ZW50VGFyZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHg6IDAsIHk6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlQWN0aXZlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIGlzVW5ib3VuZGVkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVyUmVzaXplSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdXBkYXRlQ3NzVmFyaWFibGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgc3VwcG9ydHNQcmVzc1JpcHBsZSA9IHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclJvb3RIYW5kbGVyc18oc3VwcG9ydHNQcmVzc1JpcHBsZSk7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIFJPT1RfMSA9IF9hLlJPT1QsIFVOQk9VTkRFRF8xID0gX2EuVU5CT1VOREVEO1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKFJPT1RfMSk7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKFVOQk9VTkRFRF8xKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZXMgbmVlZCBsYXlvdXQgbG9naWMgYXBwbGllZCBpbW1lZGlhdGVseSB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggc2hhZGUgYW5kIHJpcHBsZVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydHNQcmVzc1JpcHBsZV8oKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGlvblRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmFjdGl2YXRpb25UaW1lcl8pO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXykge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8yID0gX2EuUk9PVCwgVU5CT1VOREVEXzIgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoUk9PVF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKFVOQk9VTkRFRF8yKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZW1vdmVDc3NWYXJzXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXJlZ2lzdGVyUm9vdEhhbmRsZXJzXygpO1xuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBldnQgT3B0aW9uYWwgZXZlbnQgY29udGFpbmluZyBwb3NpdGlvbiBpbmZvcm1hdGlvbi5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZV8oZXZ0KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGVhY3RpdmF0ZV8oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0RnJhbWVfKSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmxheW91dEZyYW1lXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXRGcmFtZV8gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVuYm91bmRlZCA9IGZ1bmN0aW9uICh1bmJvdW5kZWQpIHtcbiAgICAgICAgdmFyIFVOQk9VTkRFRCA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5VTkJPVU5ERUQ7XG4gICAgICAgIGlmICh1bmJvdW5kZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhVTkJPVU5ERUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7IH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQmx1ciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkJHX0ZPQ1VTRUQpOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdlIGNvbXB1dGUgdGhpcyBwcm9wZXJ0eSBzbyB0aGF0IHdlIGFyZSBub3QgcXVlcnlpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGNsaWVudFxuICAgICAqIHVudGlsIHRoZSBwb2ludCBpbiB0aW1lIHdoZXJlIHRoZSBmb3VuZGF0aW9uIHJlcXVlc3RzIGl0LiBUaGlzIHByZXZlbnRzIHNjZW5hcmlvcyB3aGVyZVxuICAgICAqIGNsaWVudC1zaWRlIGZlYXR1cmUtZGV0ZWN0aW9uIG1heSBoYXBwZW4gdG9vIGVhcmx5LCBzdWNoIGFzIHdoZW4gY29tcG9uZW50cyBhcmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlclxuICAgICAqIGFuZCB0aGVuIGluaXRpYWxpemVkIGF0IG1vdW50IHRpbWUgb24gdGhlIGNsaWVudC5cbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zdXBwb3J0c1ByZXNzUmlwcGxlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5icm93c2VyU3VwcG9ydHNDc3NWYXJzKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFjdGl2YXRpb25FdmVudDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgaGFzRGVhY3RpdmF0aW9uVVhSdW46IGZhbHNlLFxuICAgICAgICAgICAgaXNBY3RpdmF0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNQcm9ncmFtbWF0aWM6IGZhbHNlLFxuICAgICAgICAgICAgd2FzQWN0aXZhdGVkQnlQb2ludGVyOiBmYWxzZSxcbiAgICAgICAgICAgIHdhc0VsZW1lbnRNYWRlQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIHN1cHBvcnRzUHJlc3NSaXBwbGUgUGFzc2VkIGZyb20gaW5pdCB0byBzYXZlIGEgcmVkdW5kYW50IGZ1bmN0aW9uIGNhbGxcbiAgICAgKi9cbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAoc3VwcG9ydHNQcmVzc1JpcHBsZSkge1xuICAgICAgICAgICAgQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChldnQudHlwZSA9PT0gJ2tleWRvd24nKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgUE9JTlRFUl9ERUFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdmb2N1cycsIHRoaXMuZm9jdXNIYW5kbGVyXyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdibHVyJywgdGhpcy5ibHVySGFuZGxlcl8pO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVyUmVzaXplSGFuZGxlcih0aGlzLnJlc2l6ZUhhbmRsZXJfKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2tleXVwJywgdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5kZWFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlbW92ZUNzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgcmlwcGxlU3RyaW5ncyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uc3RyaW5ncztcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhyaXBwbGVTdHJpbmdzKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignVkFSXycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShyaXBwbGVTdHJpbmdzW2tleV0sIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1N1cmZhY2VEaXNhYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEF2b2lkIHJlYWN0aW5nIHRvIGZvbGxvdy1vbiBldmVudHMgZmlyZWQgYnkgdG91Y2ggZGV2aWNlIGFmdGVyIGFuIGFscmVhZHktcHJvY2Vzc2VkIHVzZXIgaW50ZXJhY3Rpb25cbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ID0gdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF87XG4gICAgICAgIHZhciBpc1NhbWVJbnRlcmFjdGlvbiA9IHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50ICYmIGV2dCAhPT0gdW5kZWZpbmVkICYmIHByZXZpb3VzQWN0aXZhdGlvbkV2ZW50LnR5cGUgIT09IGV2dC50eXBlO1xuICAgICAgICBpZiAoaXNTYW1lSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQgPSB0cnVlO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuaXNQcm9ncmFtbWF0aWMgPSBldnQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLmFjdGl2YXRpb25FdmVudCA9IGV2dDtcbiAgICAgICAgYWN0aXZhdGlvblN0YXRlLndhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA/IGZhbHNlIDogZXZ0ICE9PSB1bmRlZmluZWQgJiYgKGV2dC50eXBlID09PSAnbW91c2Vkb3duJyB8fCBldnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnIHx8IGV2dC50eXBlID09PSAncG9pbnRlcmRvd24nKTtcbiAgICAgICAgdmFyIGhhc0FjdGl2YXRlZENoaWxkID0gZXZ0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5zb21lKGZ1bmN0aW9uICh0YXJnZXQpIHsgcmV0dXJuIF90aGlzLmFkYXB0ZXIuY29udGFpbnNFdmVudFRhcmdldCh0YXJnZXQpOyB9KTtcbiAgICAgICAgaWYgKGhhc0FjdGl2YXRlZENoaWxkKSB7XG4gICAgICAgICAgICAvLyBJbW1lZGlhdGVseSByZXNldCBhY3RpdmF0aW9uIHN0YXRlLCB3aGlsZSBwcmVzZXJ2aW5nIGxvZ2ljIHRoYXQgcHJldmVudHMgdG91Y2ggZm9sbG93LW9uIGV2ZW50c1xuICAgICAgICAgICAgdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZ0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMucHVzaChldnQudGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oZXZ0KTtcbiAgICAgICAgfVxuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSB0aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIFJlc2V0IGFycmF5IG9uIG5leHQgZnJhbWUgYWZ0ZXIgdGhlIGN1cnJlbnQgZXZlbnQgaGFzIGhhZCBhIGNoYW5jZSB0byBidWJibGUgdG8gcHJldmVudCBhbmNlc3RvciByaXBwbGVzXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZVxuICAgICAgICAgICAgICAgICYmIGV2dCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgJiYgKGV2dC5rZXkgPT09ICcgJyB8fCBldnQua2V5Q29kZSA9PT0gMzIpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgc3BhY2Ugd2FzIHByZXNzZWQsIHRyeSBhZ2FpbiB3aXRoaW4gYW4gckFGIGNhbGwgdG8gZGV0ZWN0IDphY3RpdmUsIGJlY2F1c2UgZGlmZmVyZW50IFVBcyByZXBvcnRcbiAgICAgICAgICAgICAgICAvLyBhY3RpdmUgc3RhdGVzIGluY29uc2lzdGVudGx5IHdoZW4gdGhleSdyZSBjYWxsZWQgd2l0aGluIGV2ZW50IGhhbmRsaW5nIGNvZGU6XG4gICAgICAgICAgICAgICAgLy8gLSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD02MzU5NzFcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEyOTM3NDFcbiAgICAgICAgICAgICAgICAvLyBXZSB0cnkgZmlyc3Qgb3V0c2lkZSByQUYgdG8gc3VwcG9ydCBFZGdlLCB3aGljaCBkb2VzIG5vdCBleGhpYml0IHRoaXMgcHJvYmxlbSwgYnV0IHdpbGwgY3Jhc2ggaWYgYSBDU1NcbiAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZSBpcyBzZXQgd2l0aGluIGEgckFGIGNhbGxiYWNrIGZvciBhIHN1Ym1pdCBidXR0b24gaW50ZXJhY3Rpb24gKCMyMjQxKS5cbiAgICAgICAgICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUgPSBfdGhpcy5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyhldnQpO1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZUFjdGl2YXRpb25fKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUud2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyBSZXNldCBhY3RpdmF0aW9uIHN0YXRlIGltbWVkaWF0ZWx5IGlmIGVsZW1lbnQgd2FzIG5vdCBtYWRlIGFjdGl2ZS5cbiAgICAgICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gX3RoaXMuZGVmYXVsdEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5jaGVja0VsZW1lbnRNYWRlQWN0aXZlXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgcmV0dXJuIChldnQgIT09IHVuZGVmaW5lZCAmJiBldnQudHlwZSA9PT0gJ2tleWRvd24nKSA/XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuaXNTdXJmYWNlQWN0aXZlKCkgOlxuICAgICAgICAgICAgdHJ1ZTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVBY3RpdmF0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUID0gX2EuVkFSX0ZHX1RSQU5TTEFURV9TVEFSVCwgVkFSX0ZHX1RSQU5TTEFURV9FTkQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX0VORDtcbiAgICAgICAgdmFyIF9iID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBGR19ERUFDVElWQVRJT04gPSBfYi5GR19ERUFDVElWQVRJT04sIEZHX0FDVElWQVRJT04gPSBfYi5GR19BQ1RJVkFUSU9OO1xuICAgICAgICB2YXIgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMgPSBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVM7XG4gICAgICAgIHRoaXMubGF5b3V0SW50ZXJuYWxfKCk7XG4gICAgICAgIHZhciB0cmFuc2xhdGVTdGFydCA9ICcnO1xuICAgICAgICB2YXIgdHJhbnNsYXRlRW5kID0gJyc7XG4gICAgICAgIGlmICghdGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgIHZhciBfYyA9IHRoaXMuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXygpLCBzdGFydFBvaW50ID0gX2Muc3RhcnRQb2ludCwgZW5kUG9pbnQgPSBfYy5lbmRQb2ludDtcbiAgICAgICAgICAgIHRyYW5zbGF0ZVN0YXJ0ID0gc3RhcnRQb2ludC54ICsgXCJweCwgXCIgKyBzdGFydFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgICAgICB0cmFuc2xhdGVFbmQgPSBlbmRQb2ludC54ICsgXCJweCwgXCIgKyBlbmRQb2ludC55ICsgXCJweFwiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX1NUQVJULCB0cmFuc2xhdGVTdGFydCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfVFJBTlNMQVRFX0VORCwgdHJhbnNsYXRlRW5kKTtcbiAgICAgICAgLy8gQ2FuY2VsIGFueSBvbmdvaW5nIGFjdGl2YXRpb24vZGVhY3RpdmF0aW9uIGFuaW1hdGlvbnNcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyk7XG4gICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAvLyBGb3JjZSBsYXlvdXQgaW4gb3JkZXIgdG8gcmUtdHJpZ2dlciB0aGUgYW5pbWF0aW9uLlxuICAgICAgICB0aGlzLmFkYXB0ZXIuY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoRkdfQUNUSVZBVElPTik7XG4gICAgICAgIHRoaXMuYWN0aXZhdGlvblRpbWVyXyA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWN0aXZhdGlvblRpbWVyQ2FsbGJhY2tfKCk7IH0sIERFQUNUSVZBVElPTl9USU1FT1VUX01TKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEZnVHJhbnNsYXRpb25Db29yZGluYXRlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgYWN0aXZhdGlvbkV2ZW50ID0gX2EuYWN0aXZhdGlvbkV2ZW50LCB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXI7XG4gICAgICAgIHZhciBzdGFydFBvaW50O1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyKSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0gZ2V0Tm9ybWFsaXplZEV2ZW50Q29vcmRzKGFjdGl2YXRpb25FdmVudCwgdGhpcy5hZGFwdGVyLmdldFdpbmRvd1BhZ2VPZmZzZXQoKSwgdGhpcy5hZGFwdGVyLmNvbXB1dGVCb3VuZGluZ1JlY3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgICAgIHg6IHRoaXMuZnJhbWVfLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiB0aGlzLmZyYW1lXy5oZWlnaHQgLyAyLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDZW50ZXIgdGhlIGVsZW1lbnQgYXJvdW5kIHRoZSBzdGFydCBwb2ludC5cbiAgICAgICAgc3RhcnRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6IHN0YXJ0UG9pbnQueCAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICAgICAgeTogc3RhcnRQb2ludC55IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgIH07XG4gICAgICAgIHZhciBlbmRQb2ludCA9IHtcbiAgICAgICAgICAgIHg6ICh0aGlzLmZyYW1lXy53aWR0aCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiAodGhpcy5mcmFtZV8uaGVpZ2h0IC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRQb2ludDogc3RhcnRQb2ludCwgZW5kUG9pbnQ6IGVuZFBvaW50IH07XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ydW5EZWFjdGl2YXRpb25VWExvZ2ljSWZSZWFkeV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCBib3RoIHdoZW4gYSBwb2ludGluZyBkZXZpY2UgaXMgcmVsZWFzZWQsIGFuZCB3aGVuIHRoZSBhY3RpdmF0aW9uIGFuaW1hdGlvbiBlbmRzLlxuICAgICAgICAvLyBUaGUgZGVhY3RpdmF0aW9uIGFuaW1hdGlvbiBzaG91bGQgb25seSBydW4gYWZ0ZXIgYm90aCBvZiB0aG9zZSBvY2N1ci5cbiAgICAgICAgdmFyIEZHX0RFQUNUSVZBVElPTiA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT047XG4gICAgICAgIHZhciBfYSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXywgaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSBfYS5oYXNEZWFjdGl2YXRpb25VWFJ1biwgaXNBY3RpdmF0ZWQgPSBfYS5pc0FjdGl2YXRlZDtcbiAgICAgICAgdmFyIGFjdGl2YXRpb25IYXNFbmRlZCA9IGhhc0RlYWN0aXZhdGlvblVYUnVuIHx8ICFpc0FjdGl2YXRlZDtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25IYXNFbmRlZCAmJiB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8pIHtcbiAgICAgICAgICAgIHRoaXMucm1Cb3VuZGVkQWN0aXZhdGlvbkNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoRkdfREVBQ1RJVkFUSU9OKTtcbiAgICAgICAgICAgIHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5GR19ERUFDVElWQVRJT05fTVMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBGR19BQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT047XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlci5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZXNldEFjdGl2YXRpb25TdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMucHJldmlvdXNBY3RpdmF0aW9uRXZlbnRfID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLmFjdGl2YXRpb25FdmVudDtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uU3RhdGVfID0gdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAvLyBUb3VjaCBkZXZpY2VzIG1heSBmaXJlIGFkZGl0aW9uYWwgZXZlbnRzIGZvciB0aGUgc2FtZSBpbnRlcmFjdGlvbiB3aXRoaW4gYSBzaG9ydCB0aW1lLlxuICAgICAgICAvLyBTdG9yZSB0aGUgcHJldmlvdXMgZXZlbnQgdW50aWwgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGF0IHN1YnNlcXVlbnQgZXZlbnRzIGFyZSBmb3IgbmV3IGludGVyYWN0aW9ucy5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB1bmRlZmluZWQ7IH0sIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5UQVBfREVMQVlfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBhY3RpdmF0aW9uU3RhdGUgPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV87XG4gICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpbiBzY2VuYXJpb3Mgc3VjaCBhcyB3aGVuIHlvdSBoYXZlIGEga2V5dXAgZXZlbnQgdGhhdCBibHVycyB0aGUgZWxlbWVudC5cbiAgICAgICAgaWYgKCFhY3RpdmF0aW9uU3RhdGUuaXNBY3RpdmF0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3RhdGUgPSBfX2Fzc2lnbih7fSwgYWN0aXZhdGlvblN0YXRlKTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYykge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfKCk7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8uaGFzRGVhY3RpdmF0aW9uVVhSdW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIF90aGlzLmFuaW1hdGVEZWFjdGl2YXRpb25fKHN0YXRlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5yZXNldEFjdGl2YXRpb25TdGF0ZV8oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5hbmltYXRlRGVhY3RpdmF0aW9uXyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgd2FzQWN0aXZhdGVkQnlQb2ludGVyID0gX2Eud2FzQWN0aXZhdGVkQnlQb2ludGVyLCB3YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF9hLndhc0VsZW1lbnRNYWRlQWN0aXZlO1xuICAgICAgICBpZiAod2FzQWN0aXZhdGVkQnlQb2ludGVyIHx8IHdhc0VsZW1lbnRNYWRlQWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRJbnRlcm5hbF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuZnJhbWVfID0gdGhpcy5hZGFwdGVyLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICAgICAgdmFyIG1heERpbSA9IE1hdGgubWF4KHRoaXMuZnJhbWVfLmhlaWdodCwgdGhpcy5mcmFtZV8ud2lkdGgpO1xuICAgICAgICAvLyBTdXJmYWNlIGRpYW1ldGVyIGlzIHRyZWF0ZWQgZGlmZmVyZW50bHkgZm9yIHVuYm91bmRlZCB2cy4gYm91bmRlZCByaXBwbGVzLlxuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIGRpYW1ldGVyIGlzIGNhbGN1bGF0ZWQgc21hbGxlciBzaW5jZSB0aGUgc3VyZmFjZSBpcyBleHBlY3RlZCB0byBhbHJlYWR5IGJlIHBhZGRlZCBhcHByb3ByaWF0ZWx5XG4gICAgICAgIC8vIHRvIGV4dGVuZCB0aGUgaGl0Ym94LCBhbmQgdGhlIHJpcHBsZSBpcyBleHBlY3RlZCB0byBtZWV0IHRoZSBlZGdlcyBvZiB0aGUgcGFkZGVkIGhpdGJveCAod2hpY2ggaXMgdHlwaWNhbGx5XG4gICAgICAgIC8vIHNxdWFyZSkuIEJvdW5kZWQgcmlwcGxlcywgb24gdGhlIG90aGVyIGhhbmQsIGFyZSBmdWxseSBleHBlY3RlZCB0byBleHBhbmQgYmV5b25kIHRoZSBzdXJmYWNlJ3MgbG9uZ2VzdCBkaWFtZXRlclxuICAgICAgICAvLyAoY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZGlhZ29uYWwgcGx1cyBhIGNvbnN0YW50IHBhZGRpbmcpLCBhbmQgYXJlIGNsaXBwZWQgYXQgdGhlIHN1cmZhY2UncyBib3JkZXIgdmlhXG4gICAgICAgIC8vIGBvdmVyZmxvdzogaGlkZGVuYC5cbiAgICAgICAgdmFyIGdldEJvdW5kZWRSYWRpdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyhfdGhpcy5mcmFtZV8ud2lkdGgsIDIpICsgTWF0aC5wb3coX3RoaXMuZnJhbWVfLmhlaWdodCwgMikpO1xuICAgICAgICAgICAgcmV0dXJuIGh5cG90ZW51c2UgKyBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuUEFERElORztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5tYXhSYWRpdXNfID0gdGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkgPyBtYXhEaW0gOiBnZXRCb3VuZGVkUmFkaXVzKCk7XG4gICAgICAgIC8vIFJpcHBsZSBpcyBzaXplZCBhcyBhIGZyYWN0aW9uIG9mIHRoZSBsYXJnZXN0IGRpbWVuc2lvbiBvZiB0aGUgc3VyZmFjZSwgdGhlbiBzY2FsZXMgdXAgdXNpbmcgYSBDU1Mgc2NhbGUgdHJhbnNmb3JtXG4gICAgICAgIHZhciBpbml0aWFsU2l6ZSA9IE1hdGguZmxvb3IobWF4RGltICogTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLklOSVRJQUxfT1JJR0lOX1NDQUxFKTtcbiAgICAgICAgLy8gVW5ib3VuZGVkIHJpcHBsZSBzaXplIHNob3VsZCBhbHdheXMgYmUgZXZlbiBudW1iZXIgdG8gZXF1YWxseSBjZW50ZXIgYWxpZ24uXG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSAmJiBpbml0aWFsU2l6ZSAlIDIgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbFNpemVfID0gaW5pdGlhbFNpemUgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBpbml0aWFsU2l6ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZnU2NhbGVfID0gXCJcIiArIHRoaXMubWF4UmFkaXVzXyAvIHRoaXMuaW5pdGlhbFNpemVfO1xuICAgICAgICB0aGlzLnVwZGF0ZUxheW91dENzc1ZhcnNfKCk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS51cGRhdGVMYXlvdXRDc3NWYXJzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzLCBWQVJfRkdfU0laRSA9IF9hLlZBUl9GR19TSVpFLCBWQVJfTEVGVCA9IF9hLlZBUl9MRUZULCBWQVJfVE9QID0gX2EuVkFSX1RPUCwgVkFSX0ZHX1NDQUxFID0gX2EuVkFSX0ZHX1NDQUxFO1xuICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NJWkUsIHRoaXMuaW5pdGlhbFNpemVfICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19TQ0FMRSwgdGhpcy5mZ1NjYWxlXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy51bmJvdW5kZWRDb29yZHNfID0ge1xuICAgICAgICAgICAgICAgIGxlZnQ6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSksXG4gICAgICAgICAgICAgICAgdG9wOiBNYXRoLnJvdW5kKCh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0xFRlQsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy5sZWZ0ICsgXCJweFwiKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfVE9QLCB0aGlzLnVuYm91bmRlZENvb3Jkc18udG9wICsgXCJweFwiKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1JpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENSaXBwbGVGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBNRENSaXBwbGVGb3VuZGF0aW9uLCB1dGlsIH0gZnJvbSAnQG1hdGVyaWFsL3JpcHBsZSc7XG5pbXBvcnQgeyBldmVudHMsIHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbSc7XG5pbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbmNvbnN0IHsgYXBwbHlQYXNzaXZlIH0gPSBldmVudHM7XG5jb25zdCB7IG1hdGNoZXMgfSA9IHBvbnlmaWxsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSaXBwbGUoXG4gIG5vZGUsXG4gIHtcbiAgICByaXBwbGUgPSB0cnVlLFxuICAgIHN1cmZhY2UgPSBmYWxzZSxcbiAgICB1bmJvdW5kZWQgPSBmYWxzZSxcbiAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgIGNvbG9yID0gbnVsbCxcbiAgICBhY3RpdmUgPSBudWxsLFxuICAgIGV2ZW50VGFyZ2V0ID0gbnVsbCxcbiAgICBhY3RpdmVUYXJnZXQgPSBudWxsLFxuICAgIGFkZENsYXNzID0gKGNsYXNzTmFtZSkgPT4gbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgcmVtb3ZlQ2xhc3MgPSAoY2xhc3NOYW1lKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICBhZGRTdHlsZSA9IChuYW1lLCB2YWx1ZSkgPT4gbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSksXG4gICAgaW5pdFByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKSxcbiAgfSA9IHt9XG4pIHtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgYWRkTGF5b3V0TGlzdGVuZXIgPSBnZXRDb250ZXh0KCdTTVVJOmFkZExheW91dExpc3RlbmVyJyk7XG4gIGxldCByZW1vdmVMYXlvdXRMaXN0ZW5lcjtcbiAgbGV0IG9sZEFjdGl2ZSA9IGFjdGl2ZTtcbiAgbGV0IG9sZEV2ZW50VGFyZ2V0ID0gZXZlbnRUYXJnZXQ7XG4gIGxldCBvbGRBY3RpdmVUYXJnZXQgPSBhY3RpdmVUYXJnZXQ7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUHJvcHMoKSB7XG4gICAgaWYgKHN1cmZhY2UpIHtcbiAgICAgIGFkZENsYXNzKCdtZGMtcmlwcGxlLXN1cmZhY2UnKTtcbiAgICAgIGlmIChjb2xvciA9PT0gJ3ByaW1hcnknKSB7XG4gICAgICAgIGFkZENsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH0gZWxzZSBpZiAoY29sb3IgPT09ICdzZWNvbmRhcnknKSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIGFkZENsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgYWN0aXZhdGlvbiBmaXJzdC5cbiAgICBpZiAoaW5zdGFuY2UgJiYgb2xkQWN0aXZlICE9PSBhY3RpdmUpIHtcbiAgICAgIG9sZEFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgaW5zdGFuY2UuYWN0aXZhdGUoKTtcbiAgICAgIH0gZWxzZSBpZiAoYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVGhlbiBjcmVhdGUvZGVzdHJveSBhbiBpbnN0YW5jZS5cbiAgICBpZiAocmlwcGxlICYmICFpbnN0YW5jZSkge1xuICAgICAgaW5zdGFuY2UgPSBuZXcgTURDUmlwcGxlRm91bmRhdGlvbih7XG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICBicm93c2VyU3VwcG9ydHNDc3NWYXJzOiAoKSA9PiB1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvdyksXG4gICAgICAgIGNvbXB1dGVCb3VuZGluZ1JlY3Q6ICgpID0+IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6ICh0YXJnZXQpID0+IG5vZGUuY29udGFpbnModGFyZ2V0KSxcbiAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAoZXZlbnRUYXJnZXQgfHwgbm9kZSkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICBkZXJlZ2lzdGVyUmVzaXplSGFuZGxlcjogKGhhbmRsZXIpID0+XG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZXIpLFxuICAgICAgICBnZXRXaW5kb3dQYWdlT2Zmc2V0OiAoKSA9PiAoe1xuICAgICAgICAgIHg6IHdpbmRvdy5wYWdlWE9mZnNldCxcbiAgICAgICAgICB5OiB3aW5kb3cucGFnZVlPZmZzZXQsXG4gICAgICAgIH0pLFxuICAgICAgICBpc1N1cmZhY2VBY3RpdmU6ICgpID0+XG4gICAgICAgICAgYWN0aXZlID09IG51bGwgPyBtYXRjaGVzKGFjdGl2ZVRhcmdldCB8fCBub2RlLCAnOmFjdGl2ZScpIDogYWN0aXZlLFxuICAgICAgICBpc1N1cmZhY2VEaXNhYmxlZDogKCkgPT4gISFkaXNhYmxlZCxcbiAgICAgICAgaXNVbmJvdW5kZWQ6ICgpID0+ICEhdW5ib3VuZGVkLFxuICAgICAgICByZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgICAgKGV2ZW50VGFyZ2V0IHx8IG5vZGUpLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICBldnRUeXBlLFxuICAgICAgICAgICAgaGFuZGxlcixcbiAgICAgICAgICAgIGFwcGx5UGFzc2l2ZSgpXG4gICAgICAgICAgKSxcbiAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogYWRkU3R5bGUsXG4gICAgICB9KTtcblxuICAgICAgaW5pdFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmluaXQoKTtcbiAgICAgICAgaW5zdGFuY2Uuc2V0VW5ib3VuZGVkKHVuYm91bmRlZCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGluc3RhbmNlICYmICFyaXBwbGUpIHtcbiAgICAgIGluaXRQcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgICAgIGluc3RhbmNlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE5vdyBoYW5kbGUgZXZlbnQvYWN0aXZlIHRhcmdldHNcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZSAmJlxuICAgICAgKG9sZEV2ZW50VGFyZ2V0ICE9PSBldmVudFRhcmdldCB8fCBvbGRBY3RpdmVUYXJnZXQgIT09IGFjdGl2ZVRhcmdldClcbiAgICApIHtcbiAgICAgIG9sZEV2ZW50VGFyZ2V0ID0gZXZlbnRUYXJnZXQ7XG4gICAgICBvbGRBY3RpdmVUYXJnZXQgPSBhY3RpdmVUYXJnZXQ7XG5cbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAgIGluc3RhbmNlLmluaXQoKTtcbiAgICAgICAgICBpbnN0YW5jZS5zZXRVbmJvdW5kZWQodW5ib3VuZGVkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyaXBwbGUgJiYgdW5ib3VuZGVkKSB7XG4gICAgICBhZGRDbGFzcygnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlUHJvcHMoKTtcblxuICBpZiAoYWRkTGF5b3V0TGlzdGVuZXIpIHtcbiAgICByZW1vdmVMYXlvdXRMaXN0ZW5lciA9IGFkZExheW91dExpc3RlbmVyKGxheW91dCk7XG4gIH1cblxuICBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZS5sYXlvdXQoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShwcm9wcykge1xuICAgICAgKHtcbiAgICAgICAgcmlwcGxlLFxuICAgICAgICBzdXJmYWNlLFxuICAgICAgICB1bmJvdW5kZWQsXG4gICAgICAgIGRpc2FibGVkLFxuICAgICAgICBjb2xvcixcbiAgICAgICAgYWN0aXZlLFxuICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgYWN0aXZlVGFyZ2V0LFxuICAgICAgICBhZGRDbGFzcyxcbiAgICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICAgIGFkZFN0eWxlLFxuICAgICAgICBpbml0UHJvbWlzZSxcbiAgICAgIH0gPSB7XG4gICAgICAgIHJpcHBsZTogdHJ1ZSxcbiAgICAgICAgc3VyZmFjZTogZmFsc2UsXG4gICAgICAgIHVuYm91bmRlZDogZmFsc2UsXG4gICAgICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICAgICAgY29sb3I6IG51bGwsXG4gICAgICAgIGFjdGl2ZTogbnVsbCxcbiAgICAgICAgZXZlbnRUYXJnZXQ6IG51bGwsXG4gICAgICAgIGFjdGl2ZVRhcmdldDogbnVsbCxcbiAgICAgICAgYWRkQ2xhc3M6IChjbGFzc05hbWUpID0+IG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpLFxuICAgICAgICByZW1vdmVDbGFzczogKGNsYXNzTmFtZSkgPT4gbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSksXG4gICAgICAgIGFkZFN0eWxlOiAobmFtZSwgdmFsdWUpID0+IG5vZGUuc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUpLFxuICAgICAgICBpbml0UHJvbWlzZTogUHJvbWlzZS5yZXNvbHZlKCksXG4gICAgICAgIC4uLnByb3BzLFxuICAgICAgfSk7XG4gICAgICBoYW5kbGVQcm9wcygpO1xuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgICAgICByZW1vdmVDbGFzcygnbWRjLXJpcHBsZS1zdXJmYWNlJyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1wcmltYXJ5Jyk7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdzbXVpLXJpcHBsZS1zdXJmYWNlLS1zZWNvbmRhcnknKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbW92ZUxheW91dExpc3RlbmVyKSB7XG4gICAgICAgIHJlbW92ZUxheW91dExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsIjxkaXZcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB7Li4uJCRyZXN0UHJvcHN9XG4+XG4gIDxzbG90IC8+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIHVzZUFjdGlvbnMgfSBmcm9tICcuL2ludGVybmFsLmpzJztcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxzdmVsdGU6Y29tcG9uZW50XG4gIHRoaXM9e2NvbXBvbmVudH1cbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U9e1tcbiAgICBbXG4gICAgICBSaXBwbGUsXG4gICAgICB7XG4gICAgICAgIHJpcHBsZTogcmlwcGxlICYmICEkbm9uSW50ZXJhY3RpdmUsXG4gICAgICAgIHVuYm91bmRlZDogZmFsc2UsXG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgYWRkU3R5bGUsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZm9yd2FyZEV2ZW50cyxcbiAgICAuLi51c2UsXG4gIF19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1jaGlwJzogdHJ1ZSxcbiAgICAnbWRjLWNoaXAtLXNlbGVjdGVkJzogc2VsZWN0ZWQsXG4gICAgJ21kYy1jaGlwLS10b3VjaCc6IHRvdWNoLFxuICAgIC4uLmludGVybmFsQ2xhc3NlcyxcbiAgfSl9XG4gIHN0eWxlPXtPYmplY3QuZW50cmllcyhpbnRlcm5hbFN0eWxlcylcbiAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAuY29uY2F0KFtzdHlsZV0pXG4gICAgLmpvaW4oJyAnKX1cbiAgcm9sZT1cInJvd1wiXG4gIG9uOnRyYW5zaXRpb25lbmQ9eyhldmVudCkgPT4gaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlVHJhbnNpdGlvbkVuZChldmVudCl9XG4gIG9uOmNsaWNrPXsoKSA9PiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVDbGljaygpfVxuICBvbjprZXlkb3duPXsoZXZlbnQpID0+IGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZUtleWRvd24oZXZlbnQpfVxuICBvbjpmb2N1c2luPXsoZXZlbnQpID0+IGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZUZvY3VzSW4oZXZlbnQpfVxuICBvbjpmb2N1c291dD17KGV2ZW50KSA9PiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVGb2N1c091dChldmVudCl9XG4gIG9uOk1EQ0NoaXBUcmFpbGluZ0FjdGlvbjppbnRlcmFjdGlvbj17KCkgPT5cbiAgICBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVUcmFpbGluZ0FjdGlvbkludGVyYWN0aW9uKCl9XG4gIG9uOk1EQ0NoaXBUcmFpbGluZ0FjdGlvbjpuYXZpZ2F0aW9uPXsoZXZlbnQpID0+XG4gICAgaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlVHJhaWxpbmdBY3Rpb25OYXZpZ2F0aW9uKGV2ZW50KX1cbiAgb246U01VSTpjaGlwczpjaGlwOnByaW1hcnktYWN0aW9uOm1vdW50PXsoZXZlbnQpID0+XG4gICAgKHByaW1hcnlBY3Rpb25BY2Nlc3NvciA9IGV2ZW50LmRldGFpbCl9XG4gIG9uOlNNVUk6Y2hpcHM6Y2hpcDpwcmltYXJ5LWFjdGlvbjp1bm1vdW50PXsoKSA9PlxuICAgIChwcmltYXJ5QWN0aW9uQWNjZXNzb3IgPSB1bmRlZmluZWQpfVxuICBvbjpTTVVJOmNoaXBzOmNoaXA6dHJhaWxpbmctYWN0aW9uOm1vdW50PXsoZXZlbnQpID0+XG4gICAgKHRyYWlsaW5nQWN0aW9uQWNjZXNzb3IgPSBldmVudC5kZXRhaWwpfVxuICBvbjpTTVVJOmNoaXBzOmNoaXA6dHJhaWxpbmctYWN0aW9uOnVubW91bnQ9eygpID0+XG4gICAgKHRyYWlsaW5nQWN0aW9uQWNjZXNzb3IgPSB1bmRlZmluZWQpfVxuICB7Li4uJCRyZXN0UHJvcHN9XG4+XG4gIHsjaWYgcmlwcGxlICYmICEkbm9uSW50ZXJhY3RpdmV9XG4gICAgPGRpdiBjbGFzcz1cIm1kYy1jaGlwX19yaXBwbGVcIiAvPlxuICB7L2lmfVxuICA8c2xvdCAvPlxuICB7I2lmIHRvdWNofVxuICAgIDxkaXYgY2xhc3M9XCJtZGMtY2hpcF9fdG91Y2hcIiAvPlxuICB7L2lmfVxuPC9zdmVsdGU6Y29tcG9uZW50PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENDaGlwRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9jaGlwcy9kZXByZWNhdGVkL2NoaXAvZm91bmRhdGlvbi5qcyc7XG4gIGltcG9ydCB7IG9uTW91bnQsIHNldENvbnRleHQsIGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbiAgaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUnO1xuICBpbXBvcnQgRGl2IGZyb20gJ0BzbXVpL2NvbW1vbi9EaXYuc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgc3R5bGUgPSAnJztcbiAgbGV0IGNoaXBJZDtcbiAgZXhwb3J0IHsgY2hpcElkIGFzIGNoaXAgfTtcbiAgZXhwb3J0IGxldCByaXBwbGUgPSB0cnVlO1xuICBleHBvcnQgbGV0IHRvdWNoID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGljayA9IHRydWU7XG4gIGV4cG9ydCBsZXQgc2hvdWxkRm9jdXNQcmltYXJ5QWN0aW9uT25DbGljayA9IHRydWU7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnN0YW5jZTtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgbGVhZGluZ0ljb25DbGFzc2VzID0ge307XG4gIGxldCBpbnRlcm5hbFN0eWxlcyA9IHt9O1xuICBjb25zdCBpbml0aWFsU2VsZWN0ZWRTdG9yZSA9IGdldENvbnRleHQoJ1NNVUk6Y2hpcHM6Y2hpcDppbml0aWFsU2VsZWN0ZWQnKTtcbiAgbGV0IHNlbGVjdGVkID0gJGluaXRpYWxTZWxlY3RlZFN0b3JlO1xuICBsZXQgcHJpbWFyeUFjdGlvbkFjY2Vzc29yO1xuICBsZXQgdHJhaWxpbmdBY3Rpb25BY2Nlc3NvcjtcbiAgY29uc3Qgbm9uSW50ZXJhY3RpdmUgPSBnZXRDb250ZXh0KCdTTVVJOmNoaXBzOm5vbkludGVyYWN0aXZlJyk7XG4gIGNvbnN0IGNob2ljZSA9IGdldENvbnRleHQoJ1NNVUk6Y2hpcHM6Y2hvaWNlJyk7XG4gIGNvbnN0IGluZGV4ID0gZ2V0Q29udGV4dCgnU01VSTpjaGlwczpjaGlwOmluZGV4Jyk7XG5cbiAgZXhwb3J0IGxldCBjb21wb25lbnQgPSBEaXY7XG5cbiAgY29uc3Qgc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja1N0b3JlID0gd3JpdGFibGUoXG4gICAgc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja1xuICApO1xuICAkOiAkc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja1N0b3JlID0gc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGljaztcbiAgc2V0Q29udGV4dChcbiAgICAnU01VSTpjaGlwczpjaGlwOnNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2snLFxuICAgIHNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2tTdG9yZVxuICApO1xuICBjb25zdCBpc1NlbGVjdGVkU3RvcmUgPSB3cml0YWJsZShzZWxlY3RlZCk7XG4gICQ6ICRpc1NlbGVjdGVkU3RvcmUgPSBzZWxlY3RlZDtcbiAgc2V0Q29udGV4dCgnU01VSTpjaGlwczpjaGlwOmlzU2VsZWN0ZWQnLCBpc1NlbGVjdGVkU3RvcmUpO1xuICBjb25zdCBsZWFkaW5nSWNvbkNsYXNzZXNTdG9yZSA9IHdyaXRhYmxlKGxlYWRpbmdJY29uQ2xhc3Nlcyk7XG4gICQ6ICRsZWFkaW5nSWNvbkNsYXNzZXNTdG9yZSA9IGxlYWRpbmdJY29uQ2xhc3NlcztcbiAgc2V0Q29udGV4dCgnU01VSTpjaGlwczpjaGlwOmxlYWRpbmdJY29uQ2xhc3NlcycsIGxlYWRpbmdJY29uQ2xhc3Nlc1N0b3JlKTtcbiAgc2V0Q29udGV4dChcbiAgICAnU01VSTpjaGlwczpjaGlwOmZvY3VzYWJsZScsXG4gICAgKCRjaG9pY2UgJiYgc2VsZWN0ZWQpIHx8ICRpbmRleCA9PT0gMFxuICApO1xuXG4gIGlmICghY2hpcElkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1RoZSBjaGlwIHByb3BlcnR5IGlzIHJlcXVpcmVkISBJdCBzaG91bGQgYmUgcGFzc2VkIGRvd24gZnJvbSB0aGUgU2V0IHRvIHRoZSBDaGlwLidcbiAgICApO1xuICB9XG5cbiAgJDogaWYgKFxuICAgIGluc3RhbmNlICYmXG4gICAgaW5zdGFuY2UuZ2V0U2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGljaygpICE9PVxuICAgICAgc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja1xuICApIHtcbiAgICBpbnN0YW5jZS5zZXRTaG91bGRSZW1vdmVPblRyYWlsaW5nSWNvbkNsaWNrKFxuICAgICAgc2hvdWxkUmVtb3ZlT25UcmFpbGluZ0ljb25DbGlja1xuICAgICk7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UpIHtcbiAgICBpbnN0YW5jZS5zZXRTaG91bGRGb2N1c1ByaW1hcnlBY3Rpb25PbkNsaWNrKFxuICAgICAgc2hvdWxkRm9jdXNQcmltYXJ5QWN0aW9uT25DbGlja1xuICAgICk7XG4gIH1cblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpbnN0YW5jZSA9IG5ldyBNRENDaGlwRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzcyxcbiAgICAgIGFkZENsYXNzVG9MZWFkaW5nSWNvbjogYWRkTGVhZGluZ0ljb25DbGFzcyxcbiAgICAgIGV2ZW50VGFyZ2V0SGFzQ2xhc3M6ICh0YXJnZXQsIGNsYXNzTmFtZSkgPT5cbiAgICAgICAgdGFyZ2V0ID8gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpIDogZmFsc2UsXG4gICAgICBmb2N1c1ByaW1hcnlBY3Rpb246ICgpID0+IHtcbiAgICAgICAgaWYgKHByaW1hcnlBY3Rpb25BY2Nlc3Nvcikge1xuICAgICAgICAgIHByaW1hcnlBY3Rpb25BY2Nlc3Nvci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZm9jdXNUcmFpbGluZ0FjdGlvbjogKCkgPT4ge1xuICAgICAgICBpZiAodHJhaWxpbmdBY3Rpb25BY2Nlc3Nvcikge1xuICAgICAgICAgIHRyYWlsaW5nQWN0aW9uQWNjZXNzb3IuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGdldEF0dHJpYnV0ZTogKGF0dHIpID0+IGdldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUoYXR0ciksXG4gICAgICBnZXRDaGVja21hcmtCb3VuZGluZ0NsaWVudFJlY3Q6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3IoJy5tZGMtY2hpcF9fY2hlY2ttYXJrJyk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICAgIGdldENvbXB1dGVkU3R5bGVWYWx1ZTogZ2V0U3R5bGUsXG4gICAgICBnZXRSb290Qm91bmRpbmdDbGllbnRSZWN0OiAoKSA9PiBnZXRFbGVtZW50KCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBoYXNDbGFzcyxcbiAgICAgIGhhc0xlYWRpbmdJY29uOiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yKCcubWRjLWNoaXBfX2ljb24tLWxlYWRpbmcnKTtcbiAgICAgICAgcmV0dXJuICEhdGFyZ2V0O1xuICAgICAgfSxcbiAgICAgIGlzUlRMOiAoKSA9PlxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKGdldEVsZW1lbnQoKSkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgaXNUcmFpbGluZ0FjdGlvbk5hdmlnYWJsZTogKCkgPT4ge1xuICAgICAgICBpZiAodHJhaWxpbmdBY3Rpb25BY2Nlc3Nvcikge1xuICAgICAgICAgIHJldHVybiB0cmFpbGluZ0FjdGlvbkFjY2Vzc29yLmlzTmF2aWdhYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIG5vdGlmeUludGVyYWN0aW9uOiAoKSA9PlxuICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdNRENDaGlwOmludGVyYWN0aW9uJywgeyBjaGlwSWQgfSksXG4gICAgICBub3RpZnlOYXZpZ2F0aW9uOiAoa2V5LCBzb3VyY2UpID0+XG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ0NoaXA6bmF2aWdhdGlvbicsIHsgY2hpcElkLCBrZXksIHNvdXJjZSB9KSxcbiAgICAgIG5vdGlmeVJlbW92YWw6IChyZW1vdmVkQW5ub3VuY2VtZW50KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ0NoaXA6cmVtb3ZhbCcsIHtcbiAgICAgICAgICBjaGlwSWQsXG4gICAgICAgICAgcmVtb3ZlZEFubm91bmNlbWVudCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgbm90aWZ5U2VsZWN0aW9uOiAoc2VsZWN0ZWQsIHNob3VsZElnbm9yZSkgPT5cbiAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDQ2hpcDpzZWxlY3Rpb24nLCB7XG4gICAgICAgICAgY2hpcElkLFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIHNob3VsZElnbm9yZSxcbiAgICAgICAgfSksXG4gICAgICBub3RpZnlUcmFpbGluZ0ljb25JbnRlcmFjdGlvbjogKCkgPT5cbiAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDQ2hpcDp0cmFpbGluZ0ljb25JbnRlcmFjdGlvbicsIHsgY2hpcElkIH0pLFxuICAgICAgbm90aWZ5RWRpdFN0YXJ0OiAoKSA9PiB7XG4gICAgICAgIC8qIE5vdCBJbXBsZW1lbnRlZC4gKi9cbiAgICAgIH0sXG4gICAgICBub3RpZnlFZGl0RmluaXNoOiAoKSA9PiB7XG4gICAgICAgIC8qIE5vdCBJbXBsZW1lbnRlZC4gKi9cbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzcyxcbiAgICAgIHJlbW92ZUNsYXNzRnJvbUxlYWRpbmdJY29uOiByZW1vdmVMZWFkaW5nSWNvbkNsYXNzLFxuICAgICAgcmVtb3ZlVHJhaWxpbmdBY3Rpb25Gb2N1czogKCkgPT4ge1xuICAgICAgICBpZiAodHJhaWxpbmdBY3Rpb25BY2Nlc3Nvcikge1xuICAgICAgICAgIHRyYWlsaW5nQWN0aW9uQWNjZXNzb3IucmVtb3ZlRm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFByaW1hcnlBY3Rpb25BdHRyOiAoYXR0ciwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHByaW1hcnlBY3Rpb25BY2Nlc3Nvcikge1xuICAgICAgICAgIHByaW1hcnlBY3Rpb25BY2Nlc3Nvci5hZGRBdHRyKGF0dHIsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFN0eWxlUHJvcGVydHk6IGFkZFN0eWxlLFxuICAgIH0pO1xuXG4gICAgY29uc3QgYWNjZXNzb3IgPSB7XG4gICAgICBjaGlwSWQsXG4gICAgICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICAgIH0sXG4gICAgICBmb2N1c1ByaW1hcnlBY3Rpb24sXG4gICAgICBmb2N1c1RyYWlsaW5nQWN0aW9uLFxuICAgICAgcmVtb3ZlRm9jdXMsXG4gICAgICBzZXRTZWxlY3RlZEZyb21DaGlwU2V0LFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOmNoaXBzOmNoaXA6bW91bnQnLCBhY2Nlc3Nvcik7XG5cbiAgICBpbnN0YW5jZS5pbml0KCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnU01VSTpjaGlwczpjaGlwOnVubW91bnQnLCBhY2Nlc3Nvcik7XG5cbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3Nlc1xuICAgICAgPyBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXVxuICAgICAgOiBnZXRFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIWludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCEoY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3NlcykgfHwgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkTGVhZGluZ0ljb25DbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIWxlYWRpbmdJY29uQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBsZWFkaW5nSWNvbkNsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGVhZGluZ0ljb25DbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIShjbGFzc05hbWUgaW4gbGVhZGluZ0ljb25DbGFzc2VzKSB8fCBsZWFkaW5nSWNvbkNsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgbGVhZGluZ0ljb25DbGFzc2VzW2NsYXNzTmFtZV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpbnRlcm5hbFN0eWxlc1tuYW1lXSAhPSB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBpbnRlcm5hbFN0eWxlc1tuYW1lXTtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXMgPSBpbnRlcm5hbFN0eWxlcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVybmFsU3R5bGVzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkge1xuICAgIHJldHVybiBuYW1lIGluIGludGVybmFsU3R5bGVzXG4gICAgICA/IGludGVybmFsU3R5bGVzW25hbWVdXG4gICAgICA6IGdldENvbXB1dGVkU3R5bGUoZ2V0RWxlbWVudCgpKS5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0U2VsZWN0ZWRGcm9tQ2hpcFNldCh2YWx1ZSwgc2hvdWxkTm90aWZ5Q2xpZW50cykge1xuICAgIHNlbGVjdGVkID0gdmFsdWU7XG4gICAgaW5zdGFuY2Uuc2V0U2VsZWN0ZWRGcm9tQ2hpcFNldChzZWxlY3RlZCwgc2hvdWxkTm90aWZ5Q2xpZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBmb2N1c1ByaW1hcnlBY3Rpb24oKSB7XG4gICAgaW5zdGFuY2UuZm9jdXNQcmltYXJ5QWN0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBmb2N1c1RyYWlsaW5nQWN0aW9uKCkge1xuICAgIGluc3RhbmNlLmZvY3VzVHJhaWxpbmdBY3Rpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUZvY3VzKCkge1xuICAgIGluc3RhbmNlLnJlbW92ZUZvY3VzKCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRFbGVtZW50KCk7XG4gIH1cbjwvc2NyaXB0PlxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgQ0hJUF9TRUxFQ1RPUjogJy5tZGMtY2hpcCcsXG59O1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIENIT0lDRTogJ21kYy1jaGlwLXNldC0tY2hvaWNlJyxcbiAgICBGSUxURVI6ICdtZGMtY2hpcC1zZXQtLWZpbHRlcicsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgRGlyZWN0aW9uLCBFdmVudFNvdXJjZSwganVtcENoaXBLZXlzLCBuYXZpZ2F0aW9uS2V5cywgc3RyaW5ncyBhcyBjaGlwU3RyaW5ncyB9IGZyb20gJy4uL2NoaXAvY29uc3RhbnRzJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDQ2hpcFNldEZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ0NoaXBTZXRGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0NoaXBTZXRGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWRzIG9mIHRoZSBzZWxlY3RlZCBjaGlwcyBpbiB0aGUgc2V0LiBPbmx5IHVzZWQgZm9yIGNob2ljZSBjaGlwIHNldCBvciBmaWx0ZXIgY2hpcCBzZXQuXG4gICAgICAgICAqL1xuICAgICAgICBfdGhpcy5zZWxlY3RlZENoaXBJZHNfID0gW107XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoaXBTZXRGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoaXBTZXRGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoaXBTZXRGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFubm91bmNlTWVzc2FnZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzQ2hpcFByaW1hcnlBY3Rpb25BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZm9jdXNDaGlwVHJhaWxpbmdBY3Rpb25BdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Q2hpcExpc3RDb3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gLTE7IH0sXG4gICAgICAgICAgICAgICAgZ2V0SW5kZXhPZkNoaXBCeUlkOiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgaXNSVEw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNoaXBBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlRm9jdXNGcm9tQ2hpcEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZWxlY3RDaGlwQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIElEcyBvZiBhbGwgc2VsZWN0ZWQgY2hpcHMuXG4gICAgICovXG4gICAgTURDQ2hpcFNldEZvdW5kYXRpb24ucHJvdG90eXBlLmdldFNlbGVjdGVkQ2hpcElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5zbGljZSgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2VsZWN0cyB0aGUgY2hpcCB3aXRoIHRoZSBnaXZlbiBpZC4gRGVzZWxlY3RzIGFsbCBvdGhlciBjaGlwcyBpZiB0aGUgY2hpcCBzZXQgaXMgb2YgdGhlIGNob2ljZSB2YXJpYW50LlxuICAgICAqIERvZXMgbm90IG5vdGlmeSBjbGllbnRzIG9mIHRoZSB1cGRhdGVkIHNlbGVjdGlvbiBzdGF0ZS5cbiAgICAgKi9cbiAgICBNRENDaGlwU2V0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKGNoaXBJZCkge1xuICAgICAgICB0aGlzLnNlbGVjdF8oY2hpcElkLCBmYWxzZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGEgY2hpcCBpbnRlcmFjdGlvbiBldmVudFxuICAgICAqL1xuICAgIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDaGlwSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNoaXBJZCA9IF9hLmNoaXBJZDtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hZGFwdGVyLmdldEluZGV4T2ZDaGlwQnlJZChjaGlwSWQpO1xuICAgICAgICB0aGlzLnJlbW92ZUZvY3VzRnJvbUNoaXBzRXhjZXB0XyhpbmRleCk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5DSE9JQ0UpIHx8XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5GSUxURVIpKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdF8oY2hpcElkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBhIGNoaXAgc2VsZWN0aW9uIGV2ZW50LCB1c2VkIHRvIGhhbmRsZSBkaXNjcmVwYW5jeSB3aGVuIHNlbGVjdGlvbiBzdGF0ZSBpcyBzZXQgZGlyZWN0bHkgb24gdGhlIENoaXAuXG4gICAgICovXG4gICAgTURDQ2hpcFNldEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNoaXBTZWxlY3Rpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNoaXBJZCA9IF9hLmNoaXBJZCwgc2VsZWN0ZWQgPSBfYS5zZWxlY3RlZCwgc2hvdWxkSWdub3JlID0gX2Euc2hvdWxkSWdub3JlO1xuICAgICAgICAvLyBFYXJseSBleGl0IGlmIHdlIHNob3VsZCBpZ25vcmUgdGhlIGV2ZW50XG4gICAgICAgIGlmIChzaG91bGRJZ25vcmUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY2hpcElzU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkQ2hpcElkc18uaW5kZXhPZihjaGlwSWQpID49IDA7XG4gICAgICAgIGlmIChzZWxlY3RlZCAmJiAhY2hpcElzU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0KGNoaXBJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXNlbGVjdGVkICYmIGNoaXBJc1NlbGVjdGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlc2VsZWN0XyhjaGlwSWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIHRoZSBldmVudCB3aGVuIGEgY2hpcCBpcyByZW1vdmVkLlxuICAgICAqL1xuICAgIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDaGlwUmVtb3ZhbCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgY2hpcElkID0gX2EuY2hpcElkLCByZW1vdmVkQW5ub3VuY2VtZW50ID0gX2EucmVtb3ZlZEFubm91bmNlbWVudDtcbiAgICAgICAgaWYgKHJlbW92ZWRBbm5vdW5jZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hbm5vdW5jZU1lc3NhZ2UocmVtb3ZlZEFubm91bmNlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hZGFwdGVyLmdldEluZGV4T2ZDaGlwQnlJZChjaGlwSWQpO1xuICAgICAgICB0aGlzLmRlc2VsZWN0QW5kTm90aWZ5Q2xpZW50c18oY2hpcElkKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNoaXBBdEluZGV4KGluZGV4KTtcbiAgICAgICAgdmFyIG1heEluZGV4ID0gdGhpcy5hZGFwdGVyLmdldENoaXBMaXN0Q291bnQoKSAtIDE7XG4gICAgICAgIGlmIChtYXhJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbmV4dEluZGV4ID0gTWF0aC5taW4oaW5kZXgsIG1heEluZGV4KTtcbiAgICAgICAgdGhpcy5yZW1vdmVGb2N1c0Zyb21DaGlwc0V4Y2VwdF8obmV4dEluZGV4KTtcbiAgICAgICAgLy8gQWZ0ZXIgcmVtb3ZpbmcgYSBjaGlwLCB3ZSBzaG91bGQgZm9jdXMgdGhlIHRyYWlsaW5nIGFjdGlvbiBmb3IgdGhlIG5leHQgY2hpcC5cbiAgICAgICAgdGhpcy5hZGFwdGVyLmZvY3VzQ2hpcFRyYWlsaW5nQWN0aW9uQXRJbmRleChuZXh0SW5kZXgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBhIGNoaXAgbmF2aWdhdGlvbiBldmVudC5cbiAgICAgKi9cbiAgICBNRENDaGlwU2V0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2hpcE5hdmlnYXRpb24gPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIGNoaXBJZCA9IF9hLmNoaXBJZCwga2V5ID0gX2Eua2V5LCBzb3VyY2UgPSBfYS5zb3VyY2U7XG4gICAgICAgIHZhciBtYXhJbmRleCA9IHRoaXMuYWRhcHRlci5nZXRDaGlwTGlzdENvdW50KCkgLSAxO1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFkYXB0ZXIuZ2V0SW5kZXhPZkNoaXBCeUlkKGNoaXBJZCk7XG4gICAgICAgIC8vIEVhcmx5IGV4aXQgaWYgdGhlIGluZGV4IGlzIG91dCBvZiByYW5nZSBvciB0aGUga2V5IGlzIHVudXNhYmxlXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEgfHwgIW5hdmlnYXRpb25LZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGlzUlRMID0gdGhpcy5hZGFwdGVyLmlzUlRMKCk7XG4gICAgICAgIHZhciBpc0xlZnRLZXkgPSBrZXkgPT09IGNoaXBTdHJpbmdzLkFSUk9XX0xFRlRfS0VZIHx8XG4gICAgICAgICAgICBrZXkgPT09IGNoaXBTdHJpbmdzLklFX0FSUk9XX0xFRlRfS0VZO1xuICAgICAgICB2YXIgaXNSaWdodEtleSA9IGtleSA9PT0gY2hpcFN0cmluZ3MuQVJST1dfUklHSFRfS0VZIHx8XG4gICAgICAgICAgICBrZXkgPT09IGNoaXBTdHJpbmdzLklFX0FSUk9XX1JJR0hUX0tFWTtcbiAgICAgICAgdmFyIGlzRG93bktleSA9IGtleSA9PT0gY2hpcFN0cmluZ3MuQVJST1dfRE9XTl9LRVkgfHxcbiAgICAgICAgICAgIGtleSA9PT0gY2hpcFN0cmluZ3MuSUVfQVJST1dfRE9XTl9LRVk7XG4gICAgICAgIHZhciBzaG91bGRJbmNyZW1lbnQgPSAhaXNSVEwgJiYgaXNSaWdodEtleSB8fCBpc1JUTCAmJiBpc0xlZnRLZXkgfHwgaXNEb3duS2V5O1xuICAgICAgICB2YXIgaXNIb21lID0ga2V5ID09PSBjaGlwU3RyaW5ncy5IT01FX0tFWTtcbiAgICAgICAgdmFyIGlzRW5kID0ga2V5ID09PSBjaGlwU3RyaW5ncy5FTkRfS0VZO1xuICAgICAgICBpZiAoc2hvdWxkSW5jcmVtZW50KSB7XG4gICAgICAgICAgICBpbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzSG9tZSkge1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzRW5kKSB7XG4gICAgICAgICAgICBpbmRleCA9IG1heEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFYXJseSBleGl0IGlmIHRoZSBpbmRleCBpcyBvdXQgb2YgYm91bmRzXG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlRm9jdXNGcm9tQ2hpcHNFeGNlcHRfKGluZGV4KTtcbiAgICAgICAgdGhpcy5mb2N1c0NoaXBBY3Rpb25fKGluZGV4LCBrZXksIHNvdXJjZSk7XG4gICAgfTtcbiAgICBNRENDaGlwU2V0Rm91bmRhdGlvbi5wcm90b3R5cGUuZm9jdXNDaGlwQWN0aW9uXyA9IGZ1bmN0aW9uIChpbmRleCwga2V5LCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIHNob3VsZEp1bXBDaGlwcyA9IGp1bXBDaGlwS2V5cy5oYXMoa2V5KTtcbiAgICAgICAgaWYgKHNob3VsZEp1bXBDaGlwcyAmJiBzb3VyY2UgPT09IEV2ZW50U291cmNlLlBSSU1BUlkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZm9jdXNDaGlwUHJpbWFyeUFjdGlvbkF0SW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG91bGRKdW1wQ2hpcHMgJiYgc291cmNlID09PSBFdmVudFNvdXJjZS5UUkFJTElORykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5mb2N1c0NoaXBUcmFpbGluZ0FjdGlvbkF0SW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkaXIgPSB0aGlzLmdldERpcmVjdGlvbl8oa2V5KTtcbiAgICAgICAgaWYgKGRpciA9PT0gRGlyZWN0aW9uLkxFRlQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZm9jdXNDaGlwVHJhaWxpbmdBY3Rpb25BdEluZGV4KGluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGlyID09PSBEaXJlY3Rpb24uUklHSFQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZm9jdXNDaGlwUHJpbWFyeUFjdGlvbkF0SW5kZXgoaW5kZXgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENDaGlwU2V0Rm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RGlyZWN0aW9uXyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGlzUlRMID0gdGhpcy5hZGFwdGVyLmlzUlRMKCk7XG4gICAgICAgIHZhciBpc0xlZnRLZXkgPSBrZXkgPT09IGNoaXBTdHJpbmdzLkFSUk9XX0xFRlRfS0VZIHx8XG4gICAgICAgICAgICBrZXkgPT09IGNoaXBTdHJpbmdzLklFX0FSUk9XX0xFRlRfS0VZO1xuICAgICAgICB2YXIgaXNSaWdodEtleSA9IGtleSA9PT0gY2hpcFN0cmluZ3MuQVJST1dfUklHSFRfS0VZIHx8XG4gICAgICAgICAgICBrZXkgPT09IGNoaXBTdHJpbmdzLklFX0FSUk9XX1JJR0hUX0tFWTtcbiAgICAgICAgaWYgKCFpc1JUTCAmJiBpc0xlZnRLZXkgfHwgaXNSVEwgJiYgaXNSaWdodEtleSkge1xuICAgICAgICAgICAgcmV0dXJuIERpcmVjdGlvbi5MRUZUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBEaXJlY3Rpb24uUklHSFQ7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXNlbGVjdHMgdGhlIGNoaXAgd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIG9wdGlvbmFsbHkgbm90aWZpZXMgY2xpZW50cy5cbiAgICAgKi9cbiAgICBNRENDaGlwU2V0Rm91bmRhdGlvbi5wcm90b3R5cGUuZGVzZWxlY3RfID0gZnVuY3Rpb24gKGNoaXBJZCwgc2hvdWxkTm90aWZ5Q2xpZW50cykge1xuICAgICAgICBpZiAoc2hvdWxkTm90aWZ5Q2xpZW50cyA9PT0gdm9pZCAwKSB7IHNob3VsZE5vdGlmeUNsaWVudHMgPSBmYWxzZTsgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnNlbGVjdGVkQ2hpcElkc18uaW5kZXhPZihjaGlwSWQpO1xuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZENoaXBJZHNfLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB2YXIgY2hpcEluZGV4ID0gdGhpcy5hZGFwdGVyLmdldEluZGV4T2ZDaGlwQnlJZChjaGlwSWQpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNlbGVjdENoaXBBdEluZGV4KGNoaXBJbmRleCwgLyoqIGlzU2VsZWN0ZWQgKi8gZmFsc2UsIHNob3VsZE5vdGlmeUNsaWVudHMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXNlbGVjdHMgdGhlIGNoaXAgd2l0aCB0aGUgZ2l2ZW4gaWQgYW5kIG5vdGlmaWVzIGNsaWVudHMuXG4gICAgICovXG4gICAgTURDQ2hpcFNldEZvdW5kYXRpb24ucHJvdG90eXBlLmRlc2VsZWN0QW5kTm90aWZ5Q2xpZW50c18gPSBmdW5jdGlvbiAoY2hpcElkKSB7XG4gICAgICAgIHRoaXMuZGVzZWxlY3RfKGNoaXBJZCwgdHJ1ZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHNlbGVjdGlvbiBvZiB0aGUgY2hpcCB3aXRoIHRoZSBnaXZlbiBpZC5cbiAgICAgKi9cbiAgICBNRENDaGlwU2V0Rm91bmRhdGlvbi5wcm90b3R5cGUudG9nZ2xlU2VsZWN0XyA9IGZ1bmN0aW9uIChjaGlwSWQpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5pbmRleE9mKGNoaXBJZCkgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZXNlbGVjdEFuZE5vdGlmeUNsaWVudHNfKGNoaXBJZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEFuZE5vdGlmeUNsaWVudHNfKGNoaXBJZCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLnByb3RvdHlwZS5yZW1vdmVGb2N1c0Zyb21DaGlwc0V4Y2VwdF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIGNoaXBDb3VudCA9IHRoaXMuYWRhcHRlci5nZXRDaGlwTGlzdENvdW50KCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpcENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICE9PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVGb2N1c0Zyb21DaGlwQXRJbmRleChpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDQ2hpcFNldEZvdW5kYXRpb24ucHJvdG90eXBlLnNlbGVjdEFuZE5vdGlmeUNsaWVudHNfID0gZnVuY3Rpb24gKGNoaXBJZCkge1xuICAgICAgICB0aGlzLnNlbGVjdF8oY2hpcElkLCB0cnVlKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBTZXRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZWxlY3RfID0gZnVuY3Rpb24gKGNoaXBJZCwgc2hvdWxkTm90aWZ5Q2xpZW50cykge1xuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZENoaXBJZHNfLmluZGV4T2YoY2hpcElkKSA+PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLkNIT0lDRSkgJiZcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YXIgcHJldmlvdXNseVNlbGVjdGVkQ2hpcCA9IHRoaXMuc2VsZWN0ZWRDaGlwSWRzX1swXTtcbiAgICAgICAgICAgIHZhciBwcmV2aW91c2x5U2VsZWN0ZWRJbmRleCA9IHRoaXMuYWRhcHRlci5nZXRJbmRleE9mQ2hpcEJ5SWQocHJldmlvdXNseVNlbGVjdGVkQ2hpcCk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkQ2hpcElkc18gPSBbXTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZWxlY3RDaGlwQXRJbmRleChwcmV2aW91c2x5U2VsZWN0ZWRJbmRleCwgLyoqIGlzU2VsZWN0ZWQgKi8gZmFsc2UsIHNob3VsZE5vdGlmeUNsaWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRDaGlwSWRzXy5wdXNoKGNoaXBJZCk7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYWRhcHRlci5nZXRJbmRleE9mQ2hpcEJ5SWQoY2hpcElkKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNlbGVjdENoaXBBdEluZGV4KGluZGV4LCAvKiogaXNTZWxlY3RlZCAqLyB0cnVlLCBzaG91bGROb3RpZnlDbGllbnRzKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENDaGlwU2V0Rm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDQ2hpcFNldEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENDaGlwU2V0Rm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIFByaW9yaXRpZXMgZm9yIHRoZSBhbm5vdW5jZSBmdW5jdGlvblxuICovXG5leHBvcnQgdmFyIEFubm91bmNlclByaW9yaXR5O1xuKGZ1bmN0aW9uIChBbm5vdW5jZXJQcmlvcml0eSkge1xuICAgIEFubm91bmNlclByaW9yaXR5W1wiUE9MSVRFXCJdID0gXCJwb2xpdGVcIjtcbiAgICBBbm5vdW5jZXJQcmlvcml0eVtcIkFTU0VSVElWRVwiXSA9IFwiYXNzZXJ0aXZlXCI7XG59KShBbm5vdW5jZXJQcmlvcml0eSB8fCAoQW5ub3VuY2VyUHJpb3JpdHkgPSB7fSkpO1xuLyoqXG4gKiBEYXRhIGF0dHJpYnV0ZSBhZGRlZCB0byBsaXZlIHJlZ2lvbiBlbGVtZW50LlxuICovXG5leHBvcnQgdmFyIERBVEFfTURDX0RPTV9BTk5PVU5DRSA9ICdkYXRhLW1kYy1kb20tYW5ub3VuY2UnO1xuLyoqXG4gKiBBbm5vdW5jZXMgdGhlIGdpdmVuIG1lc3NhZ2Ugd2l0aCBvcHRpb25hbCBwcmlvcml0eSwgZGVmYXVsdGluZyB0byBcInBvbGl0ZVwiXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhbm5vdW5jZShtZXNzYWdlLCBwcmlvcml0eSkge1xuICAgIEFubm91bmNlci5nZXRJbnN0YW5jZSgpLnNheShtZXNzYWdlLCBwcmlvcml0eSk7XG59XG52YXIgQW5ub3VuY2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIC8vIENvbnN0cnVjdG9yIG1hZGUgcHJpdmF0ZSB0byBlbnN1cmUgb25seSB0aGUgc2luZ2xldG9uIGlzIHVzZWRcbiAgICBmdW5jdGlvbiBBbm5vdW5jZXIoKSB7XG4gICAgICAgIHRoaXMubGl2ZVJlZ2lvbnMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIEFubm91bmNlci5nZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFBbm5vdW5jZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEFubm91bmNlci5pbnN0YW5jZSA9IG5ldyBBbm5vdW5jZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQW5ub3VuY2VyLmluc3RhbmNlO1xuICAgIH07XG4gICAgQW5ub3VuY2VyLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbiAobWVzc2FnZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09PSB2b2lkIDApIHsgcHJpb3JpdHkgPSBBbm5vdW5jZXJQcmlvcml0eS5QT0xJVEU7IH1cbiAgICAgICAgdmFyIGxpdmVSZWdpb24gPSB0aGlzLmdldExpdmVSZWdpb24ocHJpb3JpdHkpO1xuICAgICAgICAvLyBSZXNldCB0aGUgcmVnaW9uIHRvIHBpY2sgdXAgdGhlIG1lc3NhZ2UsIGV2ZW4gaWYgdGhlIG1lc3NhZ2UgaXMgdGhlXG4gICAgICAgIC8vIGV4YWN0IHNhbWUgYXMgYmVmb3JlLlxuICAgICAgICBsaXZlUmVnaW9uLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIC8vIFRpbWVvdXQgaXMgbmVjZXNzYXJ5IGZvciBzY3JlZW4gcmVhZGVycyBsaWtlIE5WREEgYW5kIFZvaWNlT3Zlci5cbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaXZlUmVnaW9uLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJMaXZlUmVnaW9uKTtcbiAgICAgICAgfSwgMSk7XG4gICAgICAgIGZ1bmN0aW9uIGNsZWFyTGl2ZVJlZ2lvbigpIHtcbiAgICAgICAgICAgIGxpdmVSZWdpb24udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xlYXJMaXZlUmVnaW9uKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQW5ub3VuY2VyLnByb3RvdHlwZS5nZXRMaXZlUmVnaW9uID0gZnVuY3Rpb24gKHByaW9yaXR5KSB7XG4gICAgICAgIHZhciBleGlzdGluZ0xpdmVSZWdpb24gPSB0aGlzLmxpdmVSZWdpb25zLmdldChwcmlvcml0eSk7XG4gICAgICAgIGlmIChleGlzdGluZ0xpdmVSZWdpb24gJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY29udGFpbnMoZXhpc3RpbmdMaXZlUmVnaW9uKSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nTGl2ZVJlZ2lvbjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbGl2ZVJlZ2lvbiA9IHRoaXMuY3JlYXRlTGl2ZVJlZ2lvbihwcmlvcml0eSk7XG4gICAgICAgIHRoaXMubGl2ZVJlZ2lvbnMuc2V0KHByaW9yaXR5LCBsaXZlUmVnaW9uKTtcbiAgICAgICAgcmV0dXJuIGxpdmVSZWdpb247XG4gICAgfTtcbiAgICBBbm5vdW5jZXIucHJvdG90eXBlLmNyZWF0ZUxpdmVSZWdpb24gPSBmdW5jdGlvbiAocHJpb3JpdHkpIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgZWwuc3R5bGUudG9wID0gJy05OTk5cHgnO1xuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gJy05OTk5cHgnO1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAnMXB4JztcbiAgICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsICd0cnVlJyk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcHJpb3JpdHkpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoREFUQV9NRENfRE9NX0FOTk9VTkNFLCAndHJ1ZScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH07XG4gICAgcmV0dXJuIEFubm91bmNlcjtcbn0oKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbm5vdW5jZS5qcy5tYXAiLCI8c2xvdD48L3Nsb3Q+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7b25EZXN0cm95LCBzZXRDb250ZXh0fSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQge3dyaXRhYmxlfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuXG4gIGV4cG9ydCBsZXQga2V5O1xuICBleHBvcnQgbGV0IHZhbHVlO1xuXG4gIGNvbnN0IHN0b3JlVmFsdWUgPSB3cml0YWJsZSh2YWx1ZSk7XG4gIHNldENvbnRleHQoa2V5LCBzdG9yZVZhbHVlKTtcblxuICAkOiAkc3RvcmVWYWx1ZSA9IHZhbHVlO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgc3RvcmVWYWx1ZS5zZXQodW5kZWZpbmVkKTtcbiAgfSk7XG48L3NjcmlwdD4iLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWNoaXAtc2V0JzogdHJ1ZSxcbiAgICAnc211aS1jaGlwLXNldC0tbm9uLWludGVyYWN0aXZlJzogbm9uSW50ZXJhY3RpdmUsXG4gICAgJ21kYy1jaGlwLXNldC0tY2hvaWNlJzogY2hvaWNlLFxuICAgICdtZGMtY2hpcC1zZXQtLWZpbHRlcic6IGZpbHRlcixcbiAgICAnbWRjLWNoaXAtc2V0LS1pbnB1dCc6IGlucHV0LFxuICB9KX1cbiAgcm9sZT1cImdyaWRcIlxuICBvbjpTTVVJOmNoaXBzOmNoaXA6bW91bnQ9eyhldmVudCkgPT4gaGFuZGxlQ2hpcE1vdW50KGV2ZW50KX1cbiAgb246U01VSTpjaGlwczpjaGlwOnVubW91bnQ9eyhldmVudCkgPT4gaGFuZGxlQ2hpcFVubW91bnQoZXZlbnQpfVxuICBvbjpNRENDaGlwOmludGVyYWN0aW9uPXsoZXZlbnQpID0+XG4gICAgaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlQ2hpcEludGVyYWN0aW9uKGV2ZW50LmRldGFpbCl9XG4gIG9uOk1EQ0NoaXA6c2VsZWN0aW9uPXsoZXZlbnQpID0+XG4gICAgaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlQ2hpcFNlbGVjdGlvbihldmVudC5kZXRhaWwpfVxuICBvbjpNRENDaGlwOnJlbW92YWw9eyhldmVudCkgPT5cbiAgICBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVDaGlwUmVtb3ZhbChldmVudC5kZXRhaWwpfVxuICBvbjpNRENDaGlwOm5hdmlnYXRpb249eyhldmVudCkgPT5cbiAgICBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVDaGlwTmF2aWdhdGlvbihldmVudC5kZXRhaWwpfVxuICB7Li4uJCRyZXN0UHJvcHN9XG4+XG4gIHsjZWFjaCBjaGlwcyBhcyBjaGlwLCBpIChrZXkoY2hpcCkpfVxuICAgIDxDb250ZXh0RnJhZ21lbnQga2V5PVwiU01VSTpjaGlwczpjaGlwOmluZGV4XCIgdmFsdWU9e2l9PlxuICAgICAgPENvbnRleHRGcmFnbWVudFxuICAgICAgICBrZXk9XCJTTVVJOmNoaXBzOmNoaXA6aW5pdGlhbFNlbGVjdGVkXCJcbiAgICAgICAgdmFsdWU9e2luaXRpYWxTZWxlY3RlZFtpXX1cbiAgICAgID5cbiAgICAgICAgPHNsb3Qge2NoaXB9IC8+XG4gICAgICA8L0NvbnRleHRGcmFnbWVudD5cbiAgICA8L0NvbnRleHRGcmFnbWVudD5cbiAgey9lYWNofVxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IE1EQ0NoaXBTZXRGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2NoaXBzL2RlcHJlY2F0ZWQvY2hpcC1zZXQvZm91bmRhdGlvbi5qcyc7XG4gIGltcG9ydCB7IGFubm91bmNlIH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9hbm5vdW5jZS5qcyc7XG4gIGltcG9ydCB7IG9uTW91bnQsIHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgQ29udGV4dEZyYWdtZW50IGZyb20gJ0BzbXVpL2NvbW1vbi9Db250ZXh0RnJhZ21lbnQuc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgY2hpcHMgPSBbXTtcbiAgZXhwb3J0IGxldCBrZXkgPSAoY2hpcCkgPT4gY2hpcDtcbiAgZXhwb3J0IGxldCBzZWxlY3RlZCA9IG51bGw7XG4gIGV4cG9ydCBsZXQgbm9uSW50ZXJhY3RpdmUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjaG9pY2UgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBmaWx0ZXIgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpbnB1dCA9IGZhbHNlO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgaW5zdGFuY2U7XG4gIGxldCBjaGlwQWNjZXNzb3JNYXAgPSB7fTtcbiAgbGV0IGNoaXBBY2Nlc3NvcldlYWtNYXAgPSBuZXcgV2Vha01hcCgpO1xuICBsZXQgaW5pdGlhbFNlbGVjdGVkID0gY2hpcHMubWFwKFxuICAgIChjaGlwSWQpID0+XG4gICAgICAoY2hvaWNlICYmIHNlbGVjdGVkID09PSBjaGlwSWQpIHx8XG4gICAgICAoZmlsdGVyICYmIHNlbGVjdGVkLmluZGV4T2YoY2hpcElkKSAhPT0gLTEpXG4gICk7XG5cbiAgY29uc3Qgbm9uSW50ZXJhY3RpdmVTdG9yZSA9IHdyaXRhYmxlKG5vbkludGVyYWN0aXZlKTtcbiAgJDogJG5vbkludGVyYWN0aXZlU3RvcmUgPSBub25JbnRlcmFjdGl2ZTtcbiAgc2V0Q29udGV4dCgnU01VSTpjaGlwczpub25JbnRlcmFjdGl2ZScsIG5vbkludGVyYWN0aXZlU3RvcmUpO1xuICBjb25zdCBjaG9pY2VTdG9yZSA9IHdyaXRhYmxlKGNob2ljZSk7XG4gICQ6ICRjaG9pY2VTdG9yZSA9IGNob2ljZTtcbiAgc2V0Q29udGV4dCgnU01VSTpjaGlwczpjaG9pY2UnLCBjaG9pY2VTdG9yZSk7XG4gIGNvbnN0IGZpbHRlclN0b3JlID0gd3JpdGFibGUoZmlsdGVyKTtcbiAgJDogJGZpbHRlclN0b3JlID0gZmlsdGVyO1xuICBzZXRDb250ZXh0KCdTTVVJOmNoaXBzOmZpbHRlcicsIGZpbHRlclN0b3JlKTtcblxuICBsZXQgcHJldmlvdXNTZWxlY3RlZCA9IGZpbHRlciA/IG5ldyBTZXQoc2VsZWN0ZWQpIDogc2VsZWN0ZWQ7XG4gICQ6IGlmIChpbnN0YW5jZSAmJiBjaG9pY2UgJiYgcHJldmlvdXNTZWxlY3RlZCAhPT0gc2VsZWN0ZWQpIHtcbiAgICBwcmV2aW91c1NlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgaW5zdGFuY2Uuc2VsZWN0KHNlbGVjdGVkKTtcbiAgfVxuICAkOiBpZiAoaW5zdGFuY2UgJiYgZmlsdGVyKSB7XG4gICAgY29uc3Qgc2V0U2VsZWN0ZWQgPSBuZXcgU2V0KHNlbGVjdGVkKTtcbiAgICBjb25zdCB1blNlbGVjdGVkID0gc2V0RGlmZmVyZW5jZShwcmV2aW91c1NlbGVjdGVkLCBzZXRTZWxlY3RlZCk7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBzZXREaWZmZXJlbmNlKHNldFNlbGVjdGVkLCBwcmV2aW91c1NlbGVjdGVkKTtcblxuICAgIGlmICh1blNlbGVjdGVkLnNpemUgfHwgbmV3U2VsZWN0ZWQuc2l6ZSkge1xuICAgICAgcHJldmlvdXNTZWxlY3RlZCA9IHNldFNlbGVjdGVkO1xuXG4gICAgICBmb3IgKGxldCBjaGlwSWQgb2YgdW5TZWxlY3RlZCkge1xuICAgICAgICBpZiAoY2hpcHMuaW5kZXhPZihjaGlwSWQpICE9PSAtMSkge1xuICAgICAgICAgIGluc3RhbmNlLmhhbmRsZUNoaXBTZWxlY3Rpb24oeyBjaGlwSWQsIHNlbGVjdGVkOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgY2hpcElkIG9mIG5ld1NlbGVjdGVkKSB7XG4gICAgICAgIGluc3RhbmNlLmhhbmRsZUNoaXBTZWxlY3Rpb24oeyBjaGlwSWQsIHNlbGVjdGVkOiB0cnVlIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERpZmZlcmVuY2Uoc2V0QSwgc2V0Qikge1xuICAgIGxldCBfZGlmZmVyZW5jZSA9IG5ldyBTZXQoc2V0QSk7XG4gICAgZm9yIChsZXQgZWxlbSBvZiBzZXRCKSB7XG4gICAgICBfZGlmZmVyZW5jZS5kZWxldGUoZWxlbSk7XG4gICAgfVxuICAgIHJldHVybiBfZGlmZmVyZW5jZTtcbiAgfVxuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGluc3RhbmNlID0gbmV3IE1EQ0NoaXBTZXRGb3VuZGF0aW9uKHtcbiAgICAgIGFubm91bmNlTWVzc2FnZTogKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgYW5ub3VuY2UobWVzc2FnZSk7XG4gICAgICB9LFxuICAgICAgZm9jdXNDaGlwUHJpbWFyeUFjdGlvbkF0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgICBnZXRBY2Nlc3NvcihjaGlwc1tpbmRleF0pLmZvY3VzUHJpbWFyeUFjdGlvbigpO1xuICAgICAgfSxcbiAgICAgIGZvY3VzQ2hpcFRyYWlsaW5nQWN0aW9uQXRJbmRleDogKGluZGV4KSA9PiB7XG4gICAgICAgIGdldEFjY2Vzc29yKGNoaXBzW2luZGV4XSkuZm9jdXNUcmFpbGluZ0FjdGlvbigpO1xuICAgICAgfSxcbiAgICAgIGdldENoaXBMaXN0Q291bnQ6ICgpID0+IGNoaXBzLmxlbmd0aCxcbiAgICAgIGdldEluZGV4T2ZDaGlwQnlJZDogKGNoaXBJZCkgPT4gY2hpcHMuaW5kZXhPZihjaGlwSWQpLFxuICAgICAgaGFzQ2xhc3M6IChjbGFzc05hbWUpID0+IGdldEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSxcbiAgICAgIGlzUlRMOiAoKSA9PlxuICAgICAgICBnZXRDb21wdXRlZFN0eWxlKGdldEVsZW1lbnQoKSkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnLFxuICAgICAgcmVtb3ZlQ2hpcEF0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChjaG9pY2UgJiYgc2VsZWN0ZWQgPT09IGNoaXBzW2ldKSB7XG4gICAgICAgICAgICBzZWxlY3RlZCA9IG51bGw7XG4gICAgICAgICAgfSBlbHNlIGlmIChmaWx0ZXIgJiYgc2VsZWN0ZWQuaW5kZXhPZihjaGlwc1tpXSkgIT09IC0xKSB7XG4gICAgICAgICAgICBzZWxlY3RlZC5zcGxpY2Uoc2VsZWN0ZWQuaW5kZXhPZihjaGlwc1tpXSksIDEpO1xuICAgICAgICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBjaGlwcyA9IGNoaXBzO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVtb3ZlRm9jdXNGcm9tQ2hpcEF0SW5kZXg6IChpbmRleCkgPT4ge1xuICAgICAgICBnZXRBY2Nlc3NvcihjaGlwc1tpbmRleF0pLnJlbW92ZUZvY3VzKCk7XG4gICAgICB9LFxuICAgICAgc2VsZWN0Q2hpcEF0SW5kZXg6IChpbmRleCwgc2VsZWN0ZWRWYWx1ZSwgc2hvdWxkTm90aWZ5Q2xpZW50cykgPT4ge1xuICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbEluZGV4ID0gc2VsZWN0ZWQuaW5kZXhPZihjaGlwc1tpbmRleF0pO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgc2VsSW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkLnB1c2goY2hpcHNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXNlbGVjdGVkVmFsdWUgJiYgc2VsSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgIHNlbGVjdGVkLnNwbGljZShzZWxJbmRleCwgMSk7XG4gICAgICAgICAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjaG9pY2UgJiYgKHNlbGVjdGVkVmFsdWUgfHwgc2VsZWN0ZWQgPT09IGNoaXBzW2luZGV4XSkpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWRWYWx1ZSA/IGNoaXBzW2luZGV4XSA6IG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ2V0QWNjZXNzb3IoY2hpcHNbaW5kZXhdKS5zZXRTZWxlY3RlZEZyb21DaGlwU2V0KFxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgICAgIHNob3VsZE5vdGlmeUNsaWVudHNcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgaWYgKGNob2ljZSAmJiBzZWxlY3RlZCAhPSBudWxsKSB7XG4gICAgICBpbnN0YW5jZS5zZWxlY3Qoc2VsZWN0ZWQpO1xuICAgIH0gZWxzZSBpZiAoZmlsdGVyICYmIHNlbGVjdGVkLmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCBjaGlwSWQgb2Ygc2VsZWN0ZWQpIHtcbiAgICAgICAgaW5zdGFuY2Uuc2VsZWN0KGNoaXBJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGlwTW91bnQoZXZlbnQpIHtcbiAgICBjb25zdCBhY2Nlc3NvciA9IGV2ZW50LmRldGFpbDtcblxuICAgIGFkZEFjY2Vzc29yKGFjY2Vzc29yLmNoaXBJZCwgYWNjZXNzb3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hpcFVubW91bnQoZXZlbnQpIHtcbiAgICBjb25zdCBhY2Nlc3NvciA9IGV2ZW50LmRldGFpbDtcblxuICAgIHJlbW92ZUFjY2Vzc29yKGFjY2Vzc29yLmNoaXBJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBY2Nlc3NvcihjaGlwSWQpIHtcbiAgICByZXR1cm4gY2hpcElkIGluc3RhbmNlb2YgT2JqZWN0XG4gICAgICA/IGNoaXBBY2Nlc3NvcldlYWtNYXAuZ2V0KGNoaXBJZClcbiAgICAgIDogY2hpcEFjY2Vzc29yTWFwW2NoaXBJZF07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBY2Nlc3NvcihjaGlwSWQsIGFjY2Vzc29yKSB7XG4gICAgaWYgKGNoaXBJZCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgY2hpcEFjY2Vzc29yV2Vha01hcC5zZXQoY2hpcElkLCBhY2Nlc3Nvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaXBBY2Nlc3Nvck1hcFtjaGlwSWRdID0gYWNjZXNzb3I7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWNjZXNzb3IoY2hpcElkKSB7XG4gICAgaWYgKGNoaXBJZCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgY2hpcEFjY2Vzc29yV2Vha01hcC5kZWxldGUoY2hpcElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIGNoaXBBY2Nlc3Nvck1hcFtjaGlwSWRdO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxzcGFuXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWNoaXBfX2NoZWNrbWFyayc6IHRydWUsXG4gIH0pfVxuICB7Li4uJCRyZXN0UHJvcHN9XG4+XG4gIDxzdmcgY2xhc3M9XCJtZGMtY2hpcF9fY2hlY2ttYXJrLXN2Z1wiIHZpZXdCb3g9XCItMiAtMyAzMCAzMFwiPlxuICAgIDxwYXRoXG4gICAgICBjbGFzcz1cIm1kYy1jaGlwX19jaGVja21hcmstcGF0aFwiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJibGFja1wiXG4gICAgICBkPVwiTTEuNzMsMTIuOTEgOC4xLDE5LjI4IDIyLjc5LDQuNTlcIlxuICAgIC8+XG4gIDwvc3ZnPlxuPC9zcGFuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBjbGFzc01hcCwgdXNlQWN0aW9ucyB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcblxuICBsZXQgZWxlbWVudDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCJ7I2lmICRmaWx0ZXJ9XG4gIDxDaGVja21hcmsgYmluZDp0aGlzPXtpbnB1dH0gLz5cbnsvaWZ9XG48c3BhblxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIHJvbGU9XCJncmlkY2VsbFwiXG4+XG4gIHsjaWYgJG5vbkludGVyYWN0aXZlfVxuICAgIDxzcGFuIGNsYXNzPVwibWRjLWNoaXBfX3RleHRcIj48c2xvdCAvPjwvc3Bhbj5cbiAgezplbHNlfVxuICAgIDxzcGFuXG4gICAgICBiaW5kOnRoaXM9e3ByaW1hcnlBY3Rpb259XG4gICAgICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgICAgJ21kYy1jaGlwX19wcmltYXJ5LWFjdGlvbic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHJvbGU9eyRmaWx0ZXIgPyAnY2hlY2tib3gnIDogJGNob2ljZSA/ICdyYWRpbycgOiAnYnV0dG9uJ31cbiAgICAgIHsuLi4kZmlsdGVyIHx8ICRjaG9pY2VcbiAgICAgICAgPyB7ICdhcmlhLXNlbGVjdGVkJzogJGlzU2VsZWN0ZWQgPyAndHJ1ZScgOiAnZmFsc2UnIH1cbiAgICAgICAgOiB7fX1cbiAgICAgIHt0YWJpbmRleH1cbiAgICAgIHsuLi5pbnRlcm5hbEF0dHJzfVxuICAgICAgey4uLiQkcmVzdFByb3BzfT48c3BhbiBjbGFzcz1cIm1kYy1jaGlwX190ZXh0XCI+PHNsb3QgLz48L3NwYW4+PC9zcGFuXG4gICAgPlxuICB7L2lmfVxuPC9zcGFuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBvbk1vdW50LCBnZXRDb250ZXh0LCB0aWNrIH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICB1c2VBY3Rpb25zLFxuICAgIGRpc3BhdGNoLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG4gIGltcG9ydCBDaGVja21hcmsgZnJvbSAnLi9DaGVja21hcmsuc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgdGFiaW5kZXggPSBnZXRDb250ZXh0KCdTTVVJOmNoaXBzOmNoaXA6Zm9jdXNhYmxlJykgPyAnMCcgOiAnLTEnO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgaW5wdXQ7XG4gIGxldCBwcmltYXJ5QWN0aW9uO1xuICBsZXQgaW50ZXJuYWxBdHRycyA9IHt9O1xuXG4gIGNvbnN0IG5vbkludGVyYWN0aXZlID0gZ2V0Q29udGV4dCgnU01VSTpjaGlwczpub25JbnRlcmFjdGl2ZScpO1xuICBjb25zdCBjaG9pY2UgPSBnZXRDb250ZXh0KCdTTVVJOmNoaXBzOmNob2ljZScpO1xuICBjb25zdCBmaWx0ZXIgPSBnZXRDb250ZXh0KCdTTVVJOmNoaXBzOmZpbHRlcicpO1xuICBjb25zdCBpc1NlbGVjdGVkID0gZ2V0Q29udGV4dCgnU01VSTpjaGlwczpjaGlwOmlzU2VsZWN0ZWQnKTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBsZXQgYWNjZXNzb3IgPSB7XG4gICAgICBmb2N1cyxcbiAgICAgIGFkZEF0dHIsXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ1NNVUk6Y2hpcHM6Y2hpcDpwcmltYXJ5LWFjdGlvbjptb3VudCcsIGFjY2Vzc29yKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOmNoaXBzOmNoaXA6cHJpbWFyeS1hY3Rpb246dW5tb3VudCcpO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGFkZEF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoaW50ZXJuYWxBdHRyc1tuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgIGludGVybmFsQXR0cnNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3YWl0Rm9yVGFiaW5kZXgoZm4pIHtcbiAgICBpZiAoaW50ZXJuYWxBdHRyc1sndGFiaW5kZXgnXSAhPT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgIHRpY2soKS50aGVuKGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgLy8gTGV0IHRoZSB0YWJpbmRleCBjaGFuZ2UgcHJvcGFnYXRlLlxuICAgIHdhaXRGb3JUYWJpbmRleCgoKSA9PiB7XG4gICAgICBwcmltYXJ5QWN0aW9uICYmIHByaW1hcnlBY3Rpb24uZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRJbnB1dCgpIHtcbiAgICByZXR1cm4gaW5wdXQgJiYgaW5wdXQuZ2V0RWxlbWVudCgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbInN0cmluZ3MiLCJjc3NDbGFzc2VzIiwiYXBwbHlQYXNzaXZlIiwibWF0Y2hlcyIsInV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMiLCJjaGlwU3RyaW5ncyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFB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
