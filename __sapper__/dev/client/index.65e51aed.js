import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, Y as get_current_component, a1 as empty, F as insert_dev, a4 as group_outros, K as transition_out, a5 as check_outros, J as transition_in, u as detach_dev, a6 as binding_callbacks, a7 as create_slot, a8 as update_slot, p as element, x as claim_element, y as children, E as attr_dev, D as add_location, aa as action_destroyer, ak as bind, $ as assign, W as compute_rest_props, av as compute_slots, X as getContext, Z as setContext, ah as onMount, _ as onDestroy, a0 as exclude_internal_props, aU as tick, q as create_component, A as claim_component, a9 as set_attributes, H as mount_component, ax as listen_dev, al as add_flush_callback, a2 as get_spread_update, ab as is_function, M as destroy_component, ac as run_all, o as space, w as claim_space, G as append_dev, a3 as get_spread_object, N as svg_element, ai as set_svg_attributes, t as text, z as claim_text, aY as TopAppBar, aZ as Row, a_ as Section, a$ as Title, B as set_style, aw as set_data_dev, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { B as Button_1 } from './Button.d66ce348.js';
import { C as Checkbox } from './Checkbox.52871e38.js';
import { F as FormField } from './FormField.2971fa15.js';

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
/** Banner element classes. */
var cssClasses = {
    CLOSING: 'mdc-banner--closing',
    OPEN: 'mdc-banner--open',
    OPENING: 'mdc-banner--opening',
};
/** Banner numbers. */
var numbers = {
    BANNER_ANIMATION_CLOSE_TIME_MS: 250,
    BANNER_ANIMATION_OPEN_TIME_MS: 300,
};
/** Reason as to why the banner was closed. */
var CloseReason;
(function (CloseReason) {
    // Indicates the banner was closed via primary action button.
    CloseReason[CloseReason["PRIMARY"] = 0] = "PRIMARY";
    // Indicates the banner was closed via secondary action button.
    CloseReason[CloseReason["SECONDARY"] = 1] = "SECONDARY";
    // Will never be used by the component. Provided for custom handling of
    // programmatic closing of the banner.
    CloseReason[CloseReason["UNSPECIFIED"] = 2] = "UNSPECIFIED";
})(CloseReason || (CloseReason = {}));

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
var OPENING = cssClasses.OPENING, OPEN = cssClasses.OPEN, CLOSING = cssClasses.CLOSING;
/**
 * Foundation class for banner. Responsibilities include opening and closing the
 * banner.
 */
var MDCBannerFoundation = /** @class */ (function (_super) {
    __extends(MDCBannerFoundation, _super);
    function MDCBannerFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCBannerFoundation.defaultAdapter), adapter)) || this;
        _this.isOpened = false;
        // Request id for open animation, used to cancel the refresh callback
        // request on close() and destroy().
        _this.animationFrame = 0;
        // Timer id for close and open animation, used to cancel the timer on
        // close() and destroy().
        _this.animationTimer = 0;
        return _this;
    }
    Object.defineProperty(MDCBannerFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                getContentHeight: function () { return 0; },
                notifyClosed: function () { return undefined; },
                notifyClosing: function () { return undefined; },
                notifyOpened: function () { return undefined; },
                notifyOpening: function () { return undefined; },
                releaseFocus: function () { return undefined; },
                removeClass: function () { return undefined; },
                setStyleProperty: function () { return undefined; },
                trapFocus: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCBannerFoundation.prototype.destroy = function () {
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        clearTimeout(this.animationTimer);
        this.animationTimer = 0;
    };
    MDCBannerFoundation.prototype.open = function () {
        var _this = this;
        this.isOpened = true;
        this.adapter.notifyOpening();
        this.adapter.removeClass(CLOSING);
        this.adapter.addClass(OPENING);
        var contentHeight = this.adapter.getContentHeight();
        this.animationFrame = requestAnimationFrame(function () {
            _this.adapter.addClass(OPEN);
            _this.adapter.setStyleProperty('height', contentHeight + "px");
            _this.animationTimer = setTimeout(function () {
                _this.handleAnimationTimerEnd();
                _this.adapter.trapFocus();
                _this.adapter.notifyOpened();
            }, numbers.BANNER_ANIMATION_OPEN_TIME_MS);
        });
    };
    /**
     * @param reason Why the banner was closed. Value will be passed to
     *     events.CLOSING and events.CLOSED via the `event.detail.reason`
     *     property. Standard values are CloseReason.PRIMARY and
     *     CloseReason.SECONDARY, but CloseReason.UNSPECIFIED is provided for
     *     custom handling of programmatic closing of the banner.
     */
    MDCBannerFoundation.prototype.close = function (reason) {
        var _this = this;
        if (!this.isOpened) {
            // Avoid redundant close calls (and events), e.g. repeated interactions as
            // the banner is animating closed
            return;
        }
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = 0;
        this.isOpened = false;
        this.adapter.notifyClosing(reason);
        this.adapter.addClass(CLOSING);
        this.adapter.setStyleProperty('height', '0');
        this.adapter.removeClass(OPEN);
        this.adapter.removeClass(OPENING);
        clearTimeout(this.animationTimer);
        this.animationTimer = setTimeout(function () {
            _this.adapter.releaseFocus();
            _this.handleAnimationTimerEnd();
            _this.adapter.notifyClosed(reason);
        }, numbers.BANNER_ANIMATION_CLOSE_TIME_MS);
    };
    MDCBannerFoundation.prototype.isOpen = function () {
        return this.isOpened;
    };
    MDCBannerFoundation.prototype.handlePrimaryActionClick = function () {
        this.close(CloseReason.PRIMARY);
    };
    MDCBannerFoundation.prototype.handleSecondaryActionClick = function () {
        this.close(CloseReason.SECONDARY);
    };
    MDCBannerFoundation.prototype.layout = function () {
        var contentHeight = this.adapter.getContentHeight();
        this.adapter.setStyleProperty('height', contentHeight + "px");
    };
    MDCBannerFoundation.prototype.handleAnimationTimerEnd = function () {
        this.animationTimer = 0;
        this.adapter.removeClass(OPENING);
        this.adapter.removeClass(CLOSING);
    };
    return MDCBannerFoundation;
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

/* packages/banner/Fixed.svelte generated by Svelte v3.37.0 */
const file$7 = "packages/banner/Fixed.svelte";

// (10:0) {:else}
function create_else_block(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

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
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
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
		id: create_else_block.name,
		type: "else",
		source: "(10:0) {:else}",
		ctx
	});

	return block;
}

// (1:0) {#if fixed}
function create_if_block$1(ctx) {
	let div;
	let div_style_value;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);

	const block = {
		c: function create() {
			div = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "mdc-banner__fixed");

			attr_dev(div, "style", div_style_value = /*width*/ ctx[1] == null
			? null
			: `width: ${/*width*/ ctx[1]}px;`);

			add_location(div, file$7, 1, 2, 14);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[7](div);
			current = true;

			if (!mounted) {
				dispose = action_destroyer(/*forwardEvents*/ ctx[3].call(null, div));
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 32) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, null, null);
				}
			}

			if (!current || dirty & /*width*/ 2 && div_style_value !== (div_style_value = /*width*/ ctx[1] == null
			? null
			: `width: ${/*width*/ ctx[1]}px;`)) {
				attr_dev(div, "style", div_style_value);
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
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[7](null);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(1:0) {#if fixed}",
		ctx
	});

	return block;
}

function create_fragment$a(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block$1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*fixed*/ ctx[0]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
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
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
	validate_slots("Fixed", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { fixed = false } = $$props;
	let { width = null } = $$props;
	let element;

	function getElement() {
		return element;
	}

	const writable_props = ["fixed", "width"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Fixed> was created with unknown prop '${key}'`);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(2, element);
		});
	}

	$$self.$$set = $$props => {
		if ("fixed" in $$props) $$invalidate(0, fixed = $$props.fixed);
		if ("width" in $$props) $$invalidate(1, width = $$props.width);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		forwardEvents,
		fixed,
		width,
		element,
		getElement
	});

	$$self.$inject_state = $$props => {
		if ("fixed" in $$props) $$invalidate(0, fixed = $$props.fixed);
		if ("width" in $$props) $$invalidate(1, width = $$props.width);
		if ("element" in $$props) $$invalidate(2, element = $$props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [fixed, width, element, forwardEvents, getElement, $$scope, slots, div_binding];
}

class Fixed$1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$9, create_fragment$a, safe_not_equal, { fixed: 0, width: 1, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Fixed",
			options,
			id: create_fragment$a.name
		});
	}

	get fixed() {
		throw new Error("<Fixed>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fixed(value) {
		throw new Error("<Fixed>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get width() {
		throw new Error("<Fixed>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set width(value) {
		throw new Error("<Fixed>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<Fixed>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/banner/Banner.svelte generated by Svelte v3.37.0 */
const file$6 = "packages/banner/Banner.svelte";
const get_actions_slot_changes = dirty => ({});
const get_actions_slot_context = ctx => ({});
const get_label_slot_changes = dirty => ({});
const get_label_slot_context = ctx => ({});
const get_icon_slot_changes = dirty => ({});
const get_icon_slot_context = ctx => ({});

// (36:6) {#if $$slots.icon || $$slots.label}
function create_if_block_1(ctx) {
	let div;
	let t;
	let div_class_value;
	let current;
	let if_block = /*$$slots*/ ctx[18].icon && create_if_block_2(ctx);
	const label_slot_template = /*#slots*/ ctx[24].label;
	const label_slot = create_slot(label_slot_template, ctx, /*$$scope*/ ctx[30], get_label_slot_context);

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*textWrapper$class*/ ctx[7]]: true,
				"mdc-banner__graphic-text-wrapper": true
			})
		},
		prefixFilter(/*$$restProps*/ ctx[17], "textWrapper$")
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (if_block) if_block.c();
			t = space();
			if (label_slot) label_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (if_block) if_block.l(div_nodes);
			t = claim_space(div_nodes);
			if (label_slot) label_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$6, 36, 8, 1041);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if (if_block) if_block.m(div, null);
			append_dev(div, t);

			if (label_slot) {
				label_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*$$slots*/ ctx[18].icon) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*$$slots*/ 262144) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, t);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (label_slot) {
				if (label_slot.p && dirty[0] & /*$$scope*/ 1073741824) {
					update_slot(label_slot, label_slot_template, ctx, /*$$scope*/ ctx[30], dirty, get_label_slot_changes, get_label_slot_context);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*textWrapper$class*/ 128 && div_class_value !== (div_class_value = classMap({
					[/*textWrapper$class*/ ctx[7]]: true,
					"mdc-banner__graphic-text-wrapper": true
				}))) && { class: div_class_value },
				dirty[0] & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], "textWrapper$")
			]));
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(label_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			transition_out(label_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (if_block) if_block.d();
			if (label_slot) label_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(36:6) {#if $$slots.icon || $$slots.label}",
		ctx
	});

	return block;
}

// (44:10) {#if $$slots.icon}
function create_if_block_2(ctx) {
	let div;
	let div_class_value;
	let current;
	const icon_slot_template = /*#slots*/ ctx[24].icon;
	const icon_slot = create_slot(icon_slot_template, ctx, /*$$scope*/ ctx[30], get_icon_slot_context);

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*graphic$class*/ ctx[8]]: true,
				"mdc-banner__graphic": true
			})
		},
		{ role: "img" },
		{ alt: "" },
		prefixFilter(/*$$restProps*/ ctx[17], "graphic$")
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (icon_slot) icon_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, role: true, alt: true });
			var div_nodes = children(div);
			if (icon_slot) icon_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$6, 44, 12, 1289);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (icon_slot) {
				icon_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (icon_slot) {
				if (icon_slot.p && dirty[0] & /*$$scope*/ 1073741824) {
					update_slot(icon_slot, icon_slot_template, ctx, /*$$scope*/ ctx[30], dirty, get_icon_slot_changes, get_icon_slot_context);
				}
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*graphic$class*/ 256 && div_class_value !== (div_class_value = classMap({
					[/*graphic$class*/ ctx[8]]: true,
					"mdc-banner__graphic": true
				}))) && { class: div_class_value },
				{ role: "img" },
				{ alt: "" },
				dirty[0] & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], "graphic$")
			]));
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (icon_slot) icon_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(44:10) {#if $$slots.icon}",
		ctx
	});

	return block;
}

// (60:6) {#if $$slots.actions}
function create_if_block(ctx) {
	let div;
	let current;
	const actions_slot_template = /*#slots*/ ctx[24].actions;
	const actions_slot = create_slot(actions_slot_template, ctx, /*$$scope*/ ctx[30], get_actions_slot_context);

	const block = {
		c: function create() {
			div = element("div");
			if (actions_slot) actions_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (actions_slot) actions_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "mdc-banner__actions");
			add_location(div, file$6, 60, 8, 1710);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (actions_slot) {
				actions_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (actions_slot) {
				if (actions_slot.p && dirty[0] & /*$$scope*/ 1073741824) {
					update_slot(actions_slot, actions_slot_template, ctx, /*$$scope*/ ctx[30], dirty, get_actions_slot_changes, get_actions_slot_context);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(actions_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(actions_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (actions_slot) actions_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(60:6) {#if $$slots.actions}",
		ctx
	});

	return block;
}

// (25:2) <Fixed bind:fixed {width}>
function create_default_slot$6(ctx) {
	let div;
	let t;
	let div_class_value;
	let current;
	let if_block0 = (/*$$slots*/ ctx[18].icon || /*$$slots*/ ctx[18].label) && create_if_block_1(ctx);
	let if_block1 = /*$$slots*/ ctx[18].actions && create_if_block(ctx);

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*content$class*/ ctx[6]]: true,
				"mdc-banner__content": true
			})
		},
		{ role: "alertdialog" },
		{ "aria-live": "assertive" },
		prefixFilter(/*$$restProps*/ ctx[17], "content$")
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if (if_block0) if_block0.c();
			t = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {
				class: true,
				role: true,
				"aria-live": true
			});

			var div_nodes = children(div);
			if (if_block0) if_block0.l(div_nodes);
			t = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$6, 25, 4, 750);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append_dev(div, t);
			if (if_block1) if_block1.m(div, null);
			/*div_binding*/ ctx[25](div);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*$$slots*/ ctx[18].icon || /*$$slots*/ ctx[18].label) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*$$slots*/ 262144) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div, t);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*$$slots*/ ctx[18].actions) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*$$slots*/ 262144) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*content$class*/ 64 && div_class_value !== (div_class_value = classMap({
					[/*content$class*/ ctx[6]]: true,
					"mdc-banner__content": true
				}))) && { class: div_class_value },
				{ role: "alertdialog" },
				{ "aria-live": "assertive" },
				dirty[0] & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], "content$")
			]));
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
			if (detaching) detach_dev(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			/*div_binding*/ ctx[25](null);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$6.name,
		type: "slot",
		source: "(25:2) <Fixed bind:fixed {width}>",
		ctx
	});

	return block;
}

function create_fragment$9(ctx) {
	let div;
	let fixed_1;
	let updating_fixed;
	let div_class_value;
	let div_style_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;

	function fixed_1_fixed_binding(value) {
		/*fixed_1_fixed_binding*/ ctx[26](value);
	}

	let fixed_1_props = {
		width: /*width*/ ctx[15],
		$$slots: { default: [create_default_slot$6] },
		$$scope: { ctx }
	};

	if (/*fixed*/ ctx[0] !== void 0) {
		fixed_1_props.fixed = /*fixed*/ ctx[0];
	}

	fixed_1 = new Fixed$1({ props: fixed_1_props, $$inline: true });
	binding_callbacks.push(() => bind(fixed_1, "fixed", fixed_1_fixed_binding));

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*className*/ ctx[2]]: true,
				"mdc-banner": true,
				"mdc-banner--centered": /*centered*/ ctx[4],
				"mdc-banner--mobile-stacked": /*mobileStacked*/ ctx[5],
				.../*internalClasses*/ ctx[12]
			})
		},
		{
			style: div_style_value = Object.entries(/*internalStyles*/ ctx[13]).map(func).concat([/*style*/ ctx[3]]).join(" ")
		},
		{ role: "banner" },
		exclude(/*$$restProps*/ ctx[17], ["content$", "textWrapper$", "graphic$"])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			create_component(fixed_1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true, role: true });
			var div_nodes = children(div);
			claim_component(fixed_1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$6, 2, 0, 38);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(fixed_1, div, null);
			/*div_binding_1*/ ctx[27](div);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(window, "resize", /*layout*/ ctx[9], false, false, false),
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[1])),
					action_destroyer(/*forwardEvents*/ ctx[16].call(null, div)),
					listen_dev(div, "SMUI:banner:button:primaryActionClick", /*SMUI_banner_button_primaryActionClick_handler*/ ctx[28], false, false, false),
					listen_dev(div, "SMUI:banner:button:secondaryActionClick", /*SMUI_banner_button_secondaryActionClick_handler*/ ctx[29], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			const fixed_1_changes = {};
			if (dirty[0] & /*width*/ 32768) fixed_1_changes.width = /*width*/ ctx[15];

			if (dirty[0] & /*$$scope, content$class, $$restProps, content, $$slots, textWrapper$class, graphic$class*/ 1074151872) {
				fixed_1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_fixed && dirty[0] & /*fixed*/ 1) {
				updating_fixed = true;
				fixed_1_changes.fixed = /*fixed*/ ctx[0];
				add_flush_callback(() => updating_fixed = false);
			}

			fixed_1.$set(fixed_1_changes);

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*className, centered, mobileStacked, internalClasses*/ 4148 && div_class_value !== (div_class_value = classMap({
					[/*className*/ ctx[2]]: true,
					"mdc-banner": true,
					"mdc-banner--centered": /*centered*/ ctx[4],
					"mdc-banner--mobile-stacked": /*mobileStacked*/ ctx[5],
					.../*internalClasses*/ ctx[12]
				}))) && { class: div_class_value },
				(!current || dirty[0] & /*internalStyles, style*/ 8200 && div_style_value !== (div_style_value = Object.entries(/*internalStyles*/ ctx[13]).map(func).concat([/*style*/ ctx[3]]).join(" "))) && { style: div_style_value },
				{ role: "banner" },
				dirty[0] & /*$$restProps*/ 131072 && exclude(/*$$restProps*/ ctx[17], ["content$", "textWrapper$", "graphic$"])
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(fixed_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(fixed_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(fixed_1);
			/*div_binding_1*/ ctx[27](null);
			mounted = false;
			run_all(dispose);
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

const func = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","open","centered","fixed","mobileStacked","content$class","textWrapper$class","graphic$class","isOpen","setOpen","layout","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Banner", slots, ['icon','label','actions']);
	const $$slots = compute_slots(slots);
	const { FocusTrap } = domFocusTrap;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { open = false } = $$props;
	let { centered = false } = $$props;
	let { fixed = false } = $$props;
	let { mobileStacked = false } = $$props;
	let { content$class = "" } = $$props;
	let { textWrapper$class = "" } = $$props;
	let { graphic$class = "" } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};
	let content;
	let focusTrap;
	let addLayoutListener = getContext("SMUI:addLayoutListener");
	let removeLayoutListener;
	let width;
	setContext("SMUI:label:context", "banner");
	setContext("SMUI:icon:context", "banner");
	setContext("SMUI:button:context", "banner");
	let previousMobileStacked = mobileStacked;

	if (addLayoutListener) {
		removeLayoutListener = addLayoutListener(layout);
	}

	onMount(() => {
		focusTrap = new FocusTrap(element, { initialFocusEl: getPrimaryActionEl() });

		$$invalidate(10, instance = new MDCBannerFoundation({
				addClass,
				getContentHeight: () => {
					let offsetHeight = content.offsetHeight;

					if (offsetHeight === 0) {
						getElement().classList.add("smui-banner--force-show");
						offsetHeight = content.offsetHeight;
						getElement().classList.remove("smui-banner--force-show");
					}

					return offsetHeight;
				},
				notifyClosed: reason => {
					$$invalidate(19, open = false);
					dispatch(getElement(), "MDCBanner:closed", { reason });
				},
				notifyClosing: reason => {
					dispatch(getElement(), "MDCBanner:closing", { reason });
				},
				notifyOpened: () => {
					$$invalidate(19, open = true);
					dispatch(getElement(), "MDCBanner:opened", {});
				},
				notifyOpening: () => {
					dispatch(getElement(), "MDCBanner:opening", {});
				},
				releaseFocus: () => focusTrap.releaseFocus(),
				removeClass,
				setStyleProperty: addStyle,
				trapFocus: () => focusTrap.trapFocus()
			}));

		instance.init();
		layout();

		return () => {
			instance.destroy();
		};
	});

	onDestroy(() => {
		if (removeLayoutListener) {
			removeLayoutListener();
		}
	});

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(12, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(12, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === "" || value == null) {
				delete internalStyles[name];
				$$invalidate(13, internalStyles);
			} else {
				$$invalidate(13, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function getPrimaryActionEl() {
		return element.querySelector(".mdc-banner__primary-action");
	}

	function isOpen() {
		return open;
	}

	function setOpen(value) {
		$$invalidate(19, open = value);
	}

	function layout() {
		if (fixed) {
			$$invalidate(15, width = element.offsetWidth);

			if (width === 0) {
				element.classList.add("smui-banner--force-show");
				$$invalidate(15, width = element.offsetWidth);
				element.classList.remove("smui-banner--force-show");
			}
		}

		instance.layout();
	}

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			content = $$value;
			$$invalidate(14, content);
		});
	}

	function fixed_1_fixed_binding(value) {
		fixed = value;
		$$invalidate(0, fixed);
	}

	function div_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(11, element);
		});
	}

	const SMUI_banner_button_primaryActionClick_handler = () => instance && instance.handlePrimaryActionClick();
	const SMUI_banner_button_secondaryActionClick_handler = () => instance && instance.handleSecondaryActionClick();

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(17, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(3, style = $$new_props.style);
		if ("open" in $$new_props) $$invalidate(19, open = $$new_props.open);
		if ("centered" in $$new_props) $$invalidate(4, centered = $$new_props.centered);
		if ("fixed" in $$new_props) $$invalidate(0, fixed = $$new_props.fixed);
		if ("mobileStacked" in $$new_props) $$invalidate(5, mobileStacked = $$new_props.mobileStacked);
		if ("content$class" in $$new_props) $$invalidate(6, content$class = $$new_props.content$class);
		if ("textWrapper$class" in $$new_props) $$invalidate(7, textWrapper$class = $$new_props.textWrapper$class);
		if ("graphic$class" in $$new_props) $$invalidate(8, graphic$class = $$new_props.graphic$class);
		if ("$$scope" in $$new_props) $$invalidate(30, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCBannerFoundation,
		domFocusTrap,
		onMount,
		onDestroy,
		getContext,
		setContext,
		tick,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		exclude,
		prefixFilter,
		useActions,
		dispatch,
		Fixed: Fixed$1,
		FocusTrap,
		forwardEvents,
		use,
		className,
		style,
		open,
		centered,
		fixed,
		mobileStacked,
		content$class,
		textWrapper$class,
		graphic$class,
		element,
		instance,
		internalClasses,
		internalStyles,
		content,
		focusTrap,
		addLayoutListener,
		removeLayoutListener,
		width,
		previousMobileStacked,
		addClass,
		removeClass,
		addStyle,
		getPrimaryActionEl,
		isOpen,
		setOpen,
		layout,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(3, style = $$new_props.style);
		if ("open" in $$props) $$invalidate(19, open = $$new_props.open);
		if ("centered" in $$props) $$invalidate(4, centered = $$new_props.centered);
		if ("fixed" in $$props) $$invalidate(0, fixed = $$new_props.fixed);
		if ("mobileStacked" in $$props) $$invalidate(5, mobileStacked = $$new_props.mobileStacked);
		if ("content$class" in $$props) $$invalidate(6, content$class = $$new_props.content$class);
		if ("textWrapper$class" in $$props) $$invalidate(7, textWrapper$class = $$new_props.textWrapper$class);
		if ("graphic$class" in $$props) $$invalidate(8, graphic$class = $$new_props.graphic$class);
		if ("element" in $$props) $$invalidate(11, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(10, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(12, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(13, internalStyles = $$new_props.internalStyles);
		if ("content" in $$props) $$invalidate(14, content = $$new_props.content);
		if ("focusTrap" in $$props) focusTrap = $$new_props.focusTrap;
		if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
		if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
		if ("width" in $$props) $$invalidate(15, width = $$new_props.width);
		if ("previousMobileStacked" in $$props) $$invalidate(23, previousMobileStacked = $$new_props.previousMobileStacked);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*instance, open*/ 525312) {
			if (instance && instance.isOpen() !== open) {
				if (open) {
					instance.open();
				} else {
					instance.close();
				}
			}
		}

		if ($$self.$$.dirty[0] & /*previousMobileStacked, mobileStacked*/ 8388640) {
			if (previousMobileStacked !== mobileStacked) {
				$$invalidate(23, previousMobileStacked = mobileStacked);
				tick().then(layout);
			}
		}
	};

	return [
		fixed,
		use,
		className,
		style,
		centered,
		mobileStacked,
		content$class,
		textWrapper$class,
		graphic$class,
		layout,
		instance,
		element,
		internalClasses,
		internalStyles,
		content,
		width,
		forwardEvents,
		$$restProps,
		$$slots,
		open,
		isOpen,
		setOpen,
		getElement,
		previousMobileStacked,
		slots,
		div_binding,
		fixed_1_fixed_binding,
		div_binding_1,
		SMUI_banner_button_primaryActionClick_handler,
		SMUI_banner_button_secondaryActionClick_handler,
		$$scope
	];
}

class Banner$1 extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1,
			create_fragment$9,
			safe_not_equal,
			{
				use: 1,
				class: 2,
				style: 3,
				open: 19,
				centered: 4,
				fixed: 0,
				mobileStacked: 5,
				content$class: 6,
				textWrapper$class: 7,
				graphic$class: 8,
				isOpen: 20,
				setOpen: 21,
				layout: 9,
				getElement: 22
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Banner",
			options,
			id: create_fragment$9.name
		});
	}

	get use() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get open() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set open(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get centered() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set centered(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get fixed() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fixed(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get mobileStacked() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set mobileStacked(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get content$class() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set content$class(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get textWrapper$class() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set textWrapper$class(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get graphic$class() {
		throw new Error("<Banner>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set graphic$class(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isOpen() {
		return this.$$.ctx[20];
	}

	set isOpen(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setOpen() {
		return this.$$.ctx[21];
	}

	set setOpen(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get layout() {
		return this.$$.ctx[9];
	}

	set layout(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[22];
	}

	set getElement(value) {
		throw new Error("<Banner>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/banner/node_modules/@smui/common/Span.svelte generated by Svelte v3.37.0 */
const file$5 = "packages/banner/node_modules/@smui/common/Span.svelte";

function create_fragment$8(ctx) {
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
			add_location(span, file$5, 0, 0, 0);
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
		id: create_fragment$8.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$8($$self, $$props, $$invalidate) {
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
		init(this, options, instance$8, create_fragment$8, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Span",
			options,
			id: create_fragment$8.name
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

/* packages/banner/node_modules/@smui/common/CommonLabel.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>
function create_default_slot$5(ctx) {
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
		id: create_default_slot$5.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>",
		ctx
	});

	return block;
}

function create_fragment$7(ctx) {
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
			$$slots: { default: [create_default_slot$5] },
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
		id: create_fragment$7.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$7($$self, $$props, $$invalidate) {
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

		init(this, options, instance$7, create_fragment$7, safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			getElement: 8
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CommonLabel",
			options,
			id: create_fragment$7.name
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

/* packages/banner/node_modules/@smui/common/I.svelte generated by Svelte v3.37.0 */
const file$4 = "packages/banner/node_modules/@smui/common/I.svelte";

function create_fragment$6(ctx) {
	let i;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let i_levels = [/*$$restProps*/ ctx[3]];
	let i_data = {};

	for (let i = 0; i < i_levels.length; i += 1) {
		i_data = assign(i_data, i_levels[i]);
	}

	const block = {
		c: function create() {
			i = element("i");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			i = claim_element(nodes, "I", {});
			var i_nodes = children(i);
			if (default_slot) default_slot.l(i_nodes);
			i_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(i, i_data);
			add_location(i, file$4, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, i, anchor);

			if (default_slot) {
				default_slot.m(i, null);
			}

			/*i_binding*/ ctx[7](i);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, i, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[2].call(null, i))
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

			set_attributes(i, i_data = get_spread_update(i_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			if (detaching) detach_dev(i);
			if (default_slot) default_slot.d(detaching);
			/*i_binding*/ ctx[7](null);
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
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("I", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let element = null;

	function getElement() {
		return element;
	}

	function i_binding($$value) {
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
		i_binding
	];
}

class I extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "I",
			options,
			id: create_fragment$6.name
		});
	}

	get use() {
		throw new Error("<I>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<I>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<I>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/banner/node_modules/@smui/common/Svg.svelte generated by Svelte v3.37.0 */
const file$3 = "packages/banner/node_modules/@smui/common/Svg.svelte";

function create_fragment$5(ctx) {
	let svg;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let svg_levels = [/*$$restProps*/ ctx[3]];
	let svg_data = {};

	for (let i = 0; i < svg_levels.length; i += 1) {
		svg_data = assign(svg_data, svg_levels[i]);
	}

	const block = {
		c: function create() {
			svg = svg_element("svg");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			svg = claim_element(nodes, "svg", {}, 1);
			var svg_nodes = children(svg);
			if (default_slot) default_slot.l(svg_nodes);
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_svg_attributes(svg, svg_data);
			add_location(svg, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, svg, anchor);

			if (default_slot) {
				default_slot.m(svg, null);
			}

			/*svg_binding*/ ctx[7](svg);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, svg, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[2].call(null, svg))
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

			set_svg_attributes(svg, svg_data = get_spread_update(svg_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			if (detaching) detach_dev(svg);
			if (default_slot) default_slot.d(detaching);
			/*svg_binding*/ ctx[7](null);
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

function instance$5($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Svg", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let element = null;

	function getElement() {
		return element;
	}

	function svg_binding($$value) {
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
		svg_binding
	];
}

class Svg extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Svg",
			options,
			id: create_fragment$5.name
		});
	}

	get use() {
		throw new Error("<Svg>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<Svg>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/banner/node_modules/@smui/common/CommonIcon.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__icon': context === 'button',     'mdc-fab__icon': context === 'fab',     'mdc-icon-button__icon': context === 'icon-button',     'mdc-icon-button__icon--on': context === 'icon-button' && on,     'mdc-tab__icon': context === 'tab',     'mdc-banner__icon': context === 'banner',     'mdc-segmented-button__icon': context === 'segmented-button',   })}   aria-hidden="true"   {...component === Svg ? { focusable: 'false', tabindex: '-1' } : {}}   {...$$restProps}>
function create_default_slot$4(ctx) {
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
		id: create_default_slot$4.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__icon': context === 'button',     'mdc-fab__icon': context === 'fab',     'mdc-icon-button__icon': context === 'icon-button',     'mdc-icon-button__icon--on': context === 'icon-button' && on,     'mdc-tab__icon': context === 'tab',     'mdc-banner__icon': context === 'banner',     'mdc-segmented-button__icon': context === 'segmented-button',   })}   aria-hidden=\\\"true\\\"   {...component === Svg ? { focusable: 'false', tabindex: '-1' } : {}}   {...$$restProps}>",
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
			use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
		},
		{
			class: classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-button__icon": /*context*/ ctx[6] === "button",
				"mdc-fab__icon": /*context*/ ctx[6] === "fab",
				"mdc-icon-button__icon": /*context*/ ctx[6] === "icon-button",
				"mdc-icon-button__icon--on": /*context*/ ctx[6] === "icon-button" && /*on*/ ctx[2],
				"mdc-tab__icon": /*context*/ ctx[6] === "tab",
				"mdc-banner__icon": /*context*/ ctx[6] === "banner",
				"mdc-segmented-button__icon": /*context*/ ctx[6] === "segmented-button"
			})
		},
		{ "aria-hidden": "true" },
		/*component*/ ctx[3] === Svg
		? { focusable: "false", tabindex: "-1" }
		: {},
		/*$$restProps*/ ctx[7]
	];

	var switch_value = /*component*/ ctx[3];

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
			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, context, on, component, Svg, $$restProps*/ 239)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*forwardEvents, use*/ 33 && {
						use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
					},
					dirty & /*classMap, className, context, on*/ 70 && {
						class: classMap({
							[/*className*/ ctx[1]]: true,
							"mdc-button__icon": /*context*/ ctx[6] === "button",
							"mdc-fab__icon": /*context*/ ctx[6] === "fab",
							"mdc-icon-button__icon": /*context*/ ctx[6] === "icon-button",
							"mdc-icon-button__icon--on": /*context*/ ctx[6] === "icon-button" && /*on*/ ctx[2],
							"mdc-tab__icon": /*context*/ ctx[6] === "tab",
							"mdc-banner__icon": /*context*/ ctx[6] === "banner",
							"mdc-segmented-button__icon": /*context*/ ctx[6] === "segmented-button"
						})
					},
					switch_instance_spread_levels[2],
					dirty & /*component, Svg*/ 8 && get_spread_object(/*component*/ ctx[3] === Svg
					? { focusable: "false", tabindex: "-1" }
					: {}),
					dirty & /*$$restProps*/ 128 && get_spread_object(/*$$restProps*/ ctx[7])
				])
			: {};

			if (dirty & /*$$scope*/ 2048) {
				switch_instance_changes.$$scope = { dirty, ctx };
			}

			if (switch_value !== (switch_value = /*component*/ ctx[3])) {
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
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","on","component","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CommonIcon", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { on = false } = $$props;
	let element;
	let { component = I } = $$props;
	const context = getContext("SMUI:icon:context");

	function getElement() {
		return element.getElement();
	}

	function switch_instance_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(4, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(7, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("on" in $$new_props) $$invalidate(2, on = $$new_props.on);
		if ("component" in $$new_props) $$invalidate(3, component = $$new_props.component);
		if ("$$scope" in $$new_props) $$invalidate(11, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		getContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		I,
		Svg,
		forwardEvents,
		use,
		className,
		on,
		element,
		component,
		context,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("on" in $$props) $$invalidate(2, on = $$new_props.on);
		if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
		if ("component" in $$props) $$invalidate(3, component = $$new_props.component);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		on,
		component,
		element,
		forwardEvents,
		context,
		$$restProps,
		getElement,
		slots,
		switch_instance_binding,
		$$scope
	];
}

class CommonIcon extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
			use: 0,
			class: 1,
			on: 2,
			component: 3,
			getElement: 8
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CommonIcon",
			options,
			id: create_fragment$4.name
		});
	}

	get use() {
		throw new Error("<CommonIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<CommonIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get on() {
		throw new Error("<CommonIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set on(value) {
		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get component() {
		throw new Error("<CommonIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set component(value) {
		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[8];
	}

	set getElement(value) {
		throw new Error("<CommonIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/banner/_Fixed.svelte generated by Svelte v3.37.0 */

// (2:2) <Label slot="label">
function create_default_slot_1$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("This is a fixed banner! It's here to let you know an important thing. Once\n    you've successfully known the thing, you can dismiss it.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "This is a fixed banner! It's here to let you know an important thing. Once\n    you've successfully known the thing, you can dismiss it.");
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
		source: "(2:2) <Label slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (2:2) 
function create_label_slot$2(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				slot: "label",
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

			if (dirty & /*$$scope*/ 1) {
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
		id: create_label_slot$2.name,
		type: "slot",
		source: "(2:2) ",
		ctx
	});

	return block;
}

// (6:2) <Button slot="actions">
function create_default_slot$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("I Know It");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "I Know It");
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
		id: create_default_slot$3.name,
		type: "slot",
		source: "(6:2) <Button slot=\\\"actions\\\">",
		ctx
	});

	return block;
}

// (6:2) 
function create_actions_slot$2(ctx) {
	let button;
	let current;

	button = new Button_1({
			props: {
				slot: "actions",
				$$slots: { default: [create_default_slot$3] },
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

			if (dirty & /*$$scope*/ 1) {
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
		id: create_actions_slot$2.name,
		type: "slot",
		source: "(6:2) ",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let banner;
	let current;

	banner = new Banner$1({
			props: {
				open: true,
				fixed: true,
				mobileStacked: true,
				content$style: "max-width: max-content;",
				$$slots: {
					actions: [create_actions_slot$2],
					label: [create_label_slot$2]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(banner.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(banner.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(banner, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const banner_changes = {};

			if (dirty & /*$$scope*/ 1) {
				banner_changes.$$scope = { dirty, ctx };
			}

			banner.$set(banner_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(banner.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(banner.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(banner, detaching);
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
	validate_slots("Fixed", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Fixed> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Banner: Banner$1, Label: CommonLabel, Button: Button_1 });
	return [];
}

class Fixed extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Fixed",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/banner/_General.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/banner/_General.svelte";

// (2:2) <FormField>
function create_default_slot_9$1(ctx) {
	let checkbox;
	let updating_checked;
	let current;

	function checkbox_checked_binding(value) {
		/*checkbox_checked_binding*/ ctx[4](value);
	}

	let checkbox_props = {};

	if (/*open*/ ctx[0] !== void 0) {
		checkbox_props.checked = /*open*/ ctx[0];
	}

	checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty & /*open*/ 1) {
				updating_checked = true;
				checkbox_changes.checked = /*open*/ ctx[0];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9$1.name,
		type: "slot",
		source: "(2:2) <FormField>",
		ctx
	});

	return block;
}

// (4:4) 
function create_label_slot_3$1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Open");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Open");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$2, 3, 4, 61);
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
		id: create_label_slot_3$1.name,
		type: "slot",
		source: "(4:4) ",
		ctx
	});

	return block;
}

// (6:2) <FormField>
function create_default_slot_8$1(ctx) {
	let checkbox;
	let updating_checked;
	let current;

	function checkbox_checked_binding_1(value) {
		/*checkbox_checked_binding_1*/ ctx[5](value);
	}

	let checkbox_props = {};

	if (/*centered*/ ctx[1] !== void 0) {
		checkbox_props.checked = /*centered*/ ctx[1];
	}

	checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding_1));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty & /*centered*/ 2) {
				updating_checked = true;
				checkbox_changes.checked = /*centered*/ ctx[1];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$1.name,
		type: "slot",
		source: "(6:2) <FormField>",
		ctx
	});

	return block;
}

// (8:4) 
function create_label_slot_2$1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Centered");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Centered");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$2, 7, 4, 166);
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
		id: create_label_slot_2$1.name,
		type: "slot",
		source: "(8:4) ",
		ctx
	});

	return block;
}

// (10:2) <FormField>
function create_default_slot_7$1(ctx) {
	let checkbox;
	let updating_checked;
	let current;

	function checkbox_checked_binding_2(value) {
		/*checkbox_checked_binding_2*/ ctx[6](value);
	}

	let checkbox_props = {};

	if (/*mobileStacked*/ ctx[2] !== void 0) {
		checkbox_props.checked = /*mobileStacked*/ ctx[2];
	}

	checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding_2));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty & /*mobileStacked*/ 4) {
				updating_checked = true;
				checkbox_changes.checked = /*mobileStacked*/ ctx[2];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$1.name,
		type: "slot",
		source: "(10:2) <FormField>",
		ctx
	});

	return block;
}

// (12:4) 
function create_label_slot_1$1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Mobile Stacked");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Mobile Stacked");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$2, 11, 4, 280);
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
		id: create_label_slot_1$1.name,
		type: "slot",
		source: "(12:4) ",
		ctx
	});

	return block;
}

// (22:8) <Title>
function create_default_slot_6$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Top App Bar");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Top App Bar");
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
		source: "(22:8) <Title>",
		ctx
	});

	return block;
}

// (21:6) <Section>
function create_default_slot_5$1(ctx) {
	let title;
	let current;

	title = new Title({
			props: {
				$$slots: { default: [create_default_slot_6$1] },
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

			if (dirty & /*$$scope*/ 2048) {
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
		id: create_default_slot_5$1.name,
		type: "slot",
		source: "(21:6) <Section>",
		ctx
	});

	return block;
}

// (20:4) <Row>
function create_default_slot_4$1(ctx) {
	let section;
	let current;

	section = new Section({
			props: {
				$$slots: { default: [create_default_slot_5$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(section.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(section.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(section, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const section_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(section.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(section.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(section, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$1.name,
		type: "slot",
		source: "(20:4) <Row>",
		ctx
	});

	return block;
}

// (19:2) <TopAppBar variant="static">
function create_default_slot_3$1(ctx) {
	let row;
	let current;

	row = new Row({
			props: {
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(row.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(row.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(row, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const row_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				row_changes.$$scope = { dirty, ctx };
			}

			row.$set(row_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(row.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(row.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(row, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(19:2) <TopAppBar variant=\\\"static\\\">",
		ctx
	});

	return block;
}

// (32:4) <Label slot="label">
function create_default_slot_2$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("This is a banner with no icon and some actions.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "This is a banner with no icon and some actions.");
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
		source: "(32:4) <Label slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (32:4) 
function create_label_slot$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				slot: "label",
				$$slots: { default: [create_default_slot_2$1] },
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

			if (dirty & /*$$scope*/ 2048) {
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
		id: create_label_slot$1.name,
		type: "slot",
		source: "(32:4) ",
		ctx
	});

	return block;
}

// (34:6) <Button secondary>
function create_default_slot_1$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Secondary");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Secondary");
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
		source: "(34:6) <Button secondary>",
		ctx
	});

	return block;
}

// (35:6) <Button>
function create_default_slot$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Primary");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Primary");
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
		id: create_default_slot$2.name,
		type: "slot",
		source: "(35:6) <Button>",
		ctx
	});

	return block;
}

// (33:4) <svelte:fragment slot="actions">
function create_actions_slot$1(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				secondary: true,
				$$slots: { default: [create_default_slot_1$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$2] },
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

			if (dirty & /*$$scope*/ 2048) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 2048) {
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
		id: create_actions_slot$1.name,
		type: "slot",
		source: "(33:4) <svelte:fragment slot=\\\"actions\\\">",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div0;
	let formfield0;
	let t0;
	let formfield1;
	let t1;
	let formfield2;
	let t2;
	let pre;
	let t3;
	let t4;
	let t5;
	let div2;
	let topappbar;
	let t6;
	let banner;
	let updating_open;
	let updating_centered;
	let updating_mobileStacked;
	let t7;
	let div1;
	let img;
	let img_src_value;
	let current;

	formfield0 = new FormField({
			props: {
				$$slots: {
					label: [create_label_slot_3$1],
					default: [create_default_slot_9$1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	formfield1 = new FormField({
			props: {
				$$slots: {
					label: [create_label_slot_2$1],
					default: [create_default_slot_8$1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	formfield2 = new FormField({
			props: {
				$$slots: {
					label: [create_label_slot_1$1],
					default: [create_default_slot_7$1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	topappbar = new TopAppBar({
			props: {
				variant: "static",
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	function banner_open_binding(value) {
		/*banner_open_binding*/ ctx[7](value);
	}

	function banner_centered_binding(value) {
		/*banner_centered_binding*/ ctx[8](value);
	}

	function banner_mobileStacked_binding(value) {
		/*banner_mobileStacked_binding*/ ctx[9](value);
	}

	let banner_props = {
		$$slots: {
			actions: [create_actions_slot$1],
			label: [create_label_slot$1]
		},
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		banner_props.open = /*open*/ ctx[0];
	}

	if (/*centered*/ ctx[1] !== void 0) {
		banner_props.centered = /*centered*/ ctx[1];
	}

	if (/*mobileStacked*/ ctx[2] !== void 0) {
		banner_props.mobileStacked = /*mobileStacked*/ ctx[2];
	}

	banner = new Banner$1({ props: banner_props, $$inline: true });
	binding_callbacks.push(() => bind(banner, "open", banner_open_binding));
	binding_callbacks.push(() => bind(banner, "centered", banner_centered_binding));
	binding_callbacks.push(() => bind(banner, "mobileStacked", banner_mobileStacked_binding));
	banner.$on("MDCBanner:closed", /*MDCBanner_closed_handler*/ ctx[10]);

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(formfield0.$$.fragment);
			t0 = space();
			create_component(formfield1.$$.fragment);
			t1 = space();
			create_component(formfield2.$$.fragment);
			t2 = space();
			pre = element("pre");
			t3 = text("Closed Reason: ");
			t4 = text(/*closedReason*/ ctx[3]);
			t5 = space();
			div2 = element("div");
			create_component(topappbar.$$.fragment);
			t6 = space();
			create_component(banner.$$.fragment);
			t7 = space();
			div1 = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(formfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			claim_component(formfield1.$$.fragment, div0_nodes);
			t1 = claim_space(div0_nodes);
			claim_component(formfield2.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "Closed Reason: ");
			t4 = claim_text(pre_nodes, /*closedReason*/ ctx[3]);
			pre_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(topappbar.$$.fragment, div2_nodes);
			t6 = claim_space(div2_nodes);
			claim_component(banner.$$.fragment, div2_nodes);
			t7 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", {});
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { alt: true, src: true, style: true });
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file$2, 0, 0, 0);
			attr_dev(pre, "class", "status");
			add_location(pre, file$2, 15, 0, 344);
			attr_dev(img, "alt", "Page content placeholder");
			if (img.src !== (img_src_value = "/page-content.jpg")) attr_dev(img, "src", img_src_value);
			set_style(img, "display", "block");
			set_style(img, "max-width", "100%");
			set_style(img, "height", "auto");
			set_style(img, "margin", "1em auto");
			add_location(img, file$2, 38, 4, 953);
			add_location(div1, file$2, 37, 2, 943);
			attr_dev(div2, "class", "top-app-bar-container");
			add_location(div2, file$2, 17, 0, 401);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(formfield0, div0, null);
			append_dev(div0, t0);
			mount_component(formfield1, div0, null);
			append_dev(div0, t1);
			mount_component(formfield2, div0, null);
			insert_dev(target, t2, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t3);
			append_dev(pre, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, div2, anchor);
			mount_component(topappbar, div2, null);
			append_dev(div2, t6);
			mount_component(banner, div2, null);
			append_dev(div2, t7);
			append_dev(div2, div1);
			append_dev(div1, img);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const formfield0_changes = {};

			if (dirty & /*$$scope, open*/ 2049) {
				formfield0_changes.$$scope = { dirty, ctx };
			}

			formfield0.$set(formfield0_changes);
			const formfield1_changes = {};

			if (dirty & /*$$scope, centered*/ 2050) {
				formfield1_changes.$$scope = { dirty, ctx };
			}

			formfield1.$set(formfield1_changes);
			const formfield2_changes = {};

			if (dirty & /*$$scope, mobileStacked*/ 2052) {
				formfield2_changes.$$scope = { dirty, ctx };
			}

			formfield2.$set(formfield2_changes);
			if (!current || dirty & /*closedReason*/ 8) set_data_dev(t4, /*closedReason*/ ctx[3]);
			const topappbar_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				topappbar_changes.$$scope = { dirty, ctx };
			}

			topappbar.$set(topappbar_changes);
			const banner_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				banner_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				banner_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			if (!updating_centered && dirty & /*centered*/ 2) {
				updating_centered = true;
				banner_changes.centered = /*centered*/ ctx[1];
				add_flush_callback(() => updating_centered = false);
			}

			if (!updating_mobileStacked && dirty & /*mobileStacked*/ 4) {
				updating_mobileStacked = true;
				banner_changes.mobileStacked = /*mobileStacked*/ ctx[2];
				add_flush_callback(() => updating_mobileStacked = false);
			}

			banner.$set(banner_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(formfield0.$$.fragment, local);
			transition_in(formfield1.$$.fragment, local);
			transition_in(formfield2.$$.fragment, local);
			transition_in(topappbar.$$.fragment, local);
			transition_in(banner.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(formfield0.$$.fragment, local);
			transition_out(formfield1.$$.fragment, local);
			transition_out(formfield2.$$.fragment, local);
			transition_out(topappbar.$$.fragment, local);
			transition_out(banner.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(formfield0);
			destroy_component(formfield1);
			destroy_component(formfield2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(pre);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(div2);
			destroy_component(topappbar);
			destroy_component(banner);
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
	validate_slots("General", slots, []);
	let open = false;
	let centered = false;
	let mobileStacked = true;
	let closedReason = "None yet.";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<General> was created with unknown prop '${key}'`);
	});

	function checkbox_checked_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	function checkbox_checked_binding_1(value) {
		centered = value;
		$$invalidate(1, centered);
	}

	function checkbox_checked_binding_2(value) {
		mobileStacked = value;
		$$invalidate(2, mobileStacked);
	}

	function banner_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	function banner_centered_binding(value) {
		centered = value;
		$$invalidate(1, centered);
	}

	function banner_mobileStacked_binding(value) {
		mobileStacked = value;
		$$invalidate(2, mobileStacked);
	}

	const MDCBanner_closed_handler = event => $$invalidate(3, closedReason = event.detail.reason);

	$$self.$capture_state = () => ({
		Banner: Banner$1,
		Label: CommonLabel,
		Button: Button_1,
		TopAppBar,
		Row,
		Section,
		Title,
		Checkbox,
		FormField,
		open,
		centered,
		mobileStacked,
		closedReason
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("centered" in $$props) $$invalidate(1, centered = $$props.centered);
		if ("mobileStacked" in $$props) $$invalidate(2, mobileStacked = $$props.mobileStacked);
		if ("closedReason" in $$props) $$invalidate(3, closedReason = $$props.closedReason);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		open,
		centered,
		mobileStacked,
		closedReason,
		checkbox_checked_binding,
		checkbox_checked_binding_1,
		checkbox_checked_binding_2,
		banner_open_binding,
		banner_centered_binding,
		banner_mobileStacked_binding,
		MDCBanner_closed_handler
	];
}

class General extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "General",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/banner/_Icon.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/banner/_Icon.svelte";

// (2:2) <FormField>
function create_default_slot_10(ctx) {
	let checkbox;
	let updating_checked;
	let current;

	function checkbox_checked_binding(value) {
		/*checkbox_checked_binding*/ ctx[4](value);
	}

	let checkbox_props = {};

	if (/*open*/ ctx[0] !== void 0) {
		checkbox_props.checked = /*open*/ ctx[0];
	}

	checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty & /*open*/ 1) {
				updating_checked = true;
				checkbox_changes.checked = /*open*/ ctx[0];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_10.name,
		type: "slot",
		source: "(2:2) <FormField>",
		ctx
	});

	return block;
}

// (4:4) 
function create_label_slot_3(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Open");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Open");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$1, 3, 4, 61);
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
		id: create_label_slot_3.name,
		type: "slot",
		source: "(4:4) ",
		ctx
	});

	return block;
}

// (6:2) <FormField>
function create_default_slot_9(ctx) {
	let checkbox;
	let updating_checked;
	let current;

	function checkbox_checked_binding_1(value) {
		/*checkbox_checked_binding_1*/ ctx[5](value);
	}

	let checkbox_props = {};

	if (/*centered*/ ctx[1] !== void 0) {
		checkbox_props.checked = /*centered*/ ctx[1];
	}

	checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding_1));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty & /*centered*/ 2) {
				updating_checked = true;
				checkbox_changes.checked = /*centered*/ ctx[1];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9.name,
		type: "slot",
		source: "(6:2) <FormField>",
		ctx
	});

	return block;
}

// (8:4) 
function create_label_slot_2(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Centered");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Centered");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$1, 7, 4, 166);
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
		source: "(8:4) ",
		ctx
	});

	return block;
}

// (10:2) <FormField>
function create_default_slot_8(ctx) {
	let checkbox;
	let updating_checked;
	let current;

	function checkbox_checked_binding_2(value) {
		/*checkbox_checked_binding_2*/ ctx[6](value);
	}

	let checkbox_props = {};

	if (/*mobileStacked*/ ctx[2] !== void 0) {
		checkbox_props.checked = /*mobileStacked*/ ctx[2];
	}

	checkbox = new Checkbox({ props: checkbox_props, $$inline: true });
	binding_callbacks.push(() => bind(checkbox, "checked", checkbox_checked_binding_2));

	const block = {
		c: function create() {
			create_component(checkbox.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(checkbox.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(checkbox, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const checkbox_changes = {};

			if (!updating_checked && dirty & /*mobileStacked*/ 4) {
				updating_checked = true;
				checkbox_changes.checked = /*mobileStacked*/ ctx[2];
				add_flush_callback(() => updating_checked = false);
			}

			checkbox.$set(checkbox_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(checkbox.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(checkbox.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(checkbox, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8.name,
		type: "slot",
		source: "(10:2) <FormField>",
		ctx
	});

	return block;
}

// (12:4) 
function create_label_slot_1(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Mobile Stacked");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Mobile Stacked");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$1, 11, 4, 280);
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
		source: "(12:4) ",
		ctx
	});

	return block;
}

// (22:8) <Title>
function create_default_slot_7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Top App Bar");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Top App Bar");
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
		source: "(22:8) <Title>",
		ctx
	});

	return block;
}

// (21:6) <Section>
function create_default_slot_6(ctx) {
	let title;
	let current;

	title = new Title({
			props: {
				$$slots: { default: [create_default_slot_7] },
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

			if (dirty & /*$$scope*/ 2048) {
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
		id: create_default_slot_6.name,
		type: "slot",
		source: "(21:6) <Section>",
		ctx
	});

	return block;
}

// (20:4) <Row>
function create_default_slot_5(ctx) {
	let section;
	let current;

	section = new Section({
			props: {
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(section.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(section.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(section, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const section_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				section_changes.$$scope = { dirty, ctx };
			}

			section.$set(section_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(section.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(section.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(section, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(20:4) <Row>",
		ctx
	});

	return block;
}

// (19:2) <TopAppBar variant="static">
function create_default_slot_4(ctx) {
	let row;
	let current;

	row = new Row({
			props: {
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(row.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(row.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(row, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const row_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				row_changes.$$scope = { dirty, ctx };
			}

			row.$set(row_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(row.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(row.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(row, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(19:2) <TopAppBar variant=\\\"static\\\">",
		ctx
	});

	return block;
}

// (32:4) <Icon slot="icon" class="material-icons">
function create_default_slot_3(ctx) {
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
		id: create_default_slot_3.name,
		type: "slot",
		source: "(32:4) <Icon slot=\\\"icon\\\" class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (32:4) 
function create_icon_slot(ctx) {
	let icon;
	let current;

	icon = new CommonIcon({
			props: {
				slot: "icon",
				class: "material-icons",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_icon_slot.name,
		type: "slot",
		source: "(32:4) ",
		ctx
	});

	return block;
}

// (33:4) <Label slot="label">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("This is a banner with an icon and some actions.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "This is a banner with an icon and some actions.");
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
		source: "(33:4) <Label slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (33:4) 
function create_label_slot(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				slot: "label",
				$$slots: { default: [create_default_slot_2] },
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

			if (dirty & /*$$scope*/ 2048) {
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
		id: create_label_slot.name,
		type: "slot",
		source: "(33:4) ",
		ctx
	});

	return block;
}

// (35:6) <Button secondary>
function create_default_slot_1$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Secondary");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Secondary");
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
		source: "(35:6) <Button secondary>",
		ctx
	});

	return block;
}

// (36:6) <Button>
function create_default_slot$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Primary");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Primary");
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
		id: create_default_slot$1.name,
		type: "slot",
		source: "(36:6) <Button>",
		ctx
	});

	return block;
}

// (34:4) <svelte:fragment slot="actions">
function create_actions_slot(ctx) {
	let button0;
	let t;
	let button1;
	let current;

	button0 = new Button_1({
			props: {
				secondary: true,
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$1] },
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

			if (dirty & /*$$scope*/ 2048) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 2048) {
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
		id: create_actions_slot.name,
		type: "slot",
		source: "(34:4) <svelte:fragment slot=\\\"actions\\\">",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div0;
	let formfield0;
	let t0;
	let formfield1;
	let t1;
	let formfield2;
	let t2;
	let pre;
	let t3;
	let t4;
	let t5;
	let div2;
	let topappbar;
	let t6;
	let banner;
	let updating_open;
	let updating_centered;
	let updating_mobileStacked;
	let t7;
	let div1;
	let img;
	let img_src_value;
	let current;

	formfield0 = new FormField({
			props: {
				$$slots: {
					label: [create_label_slot_3],
					default: [create_default_slot_10]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	formfield1 = new FormField({
			props: {
				$$slots: {
					label: [create_label_slot_2],
					default: [create_default_slot_9]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	formfield2 = new FormField({
			props: {
				$$slots: {
					label: [create_label_slot_1],
					default: [create_default_slot_8]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	topappbar = new TopAppBar({
			props: {
				variant: "static",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	function banner_open_binding(value) {
		/*banner_open_binding*/ ctx[7](value);
	}

	function banner_centered_binding(value) {
		/*banner_centered_binding*/ ctx[8](value);
	}

	function banner_mobileStacked_binding(value) {
		/*banner_mobileStacked_binding*/ ctx[9](value);
	}

	let banner_props = {
		$$slots: {
			actions: [create_actions_slot],
			label: [create_label_slot],
			icon: [create_icon_slot]
		},
		$$scope: { ctx }
	};

	if (/*open*/ ctx[0] !== void 0) {
		banner_props.open = /*open*/ ctx[0];
	}

	if (/*centered*/ ctx[1] !== void 0) {
		banner_props.centered = /*centered*/ ctx[1];
	}

	if (/*mobileStacked*/ ctx[2] !== void 0) {
		banner_props.mobileStacked = /*mobileStacked*/ ctx[2];
	}

	banner = new Banner$1({ props: banner_props, $$inline: true });
	binding_callbacks.push(() => bind(banner, "open", banner_open_binding));
	binding_callbacks.push(() => bind(banner, "centered", banner_centered_binding));
	binding_callbacks.push(() => bind(banner, "mobileStacked", banner_mobileStacked_binding));
	banner.$on("MDCBanner:closed", /*MDCBanner_closed_handler*/ ctx[10]);

	const block = {
		c: function create() {
			div0 = element("div");
			create_component(formfield0.$$.fragment);
			t0 = space();
			create_component(formfield1.$$.fragment);
			t1 = space();
			create_component(formfield2.$$.fragment);
			t2 = space();
			pre = element("pre");
			t3 = text("Closed Reason: ");
			t4 = text(/*closedReason*/ ctx[3]);
			t5 = space();
			div2 = element("div");
			create_component(topappbar.$$.fragment);
			t6 = space();
			create_component(banner.$$.fragment);
			t7 = space();
			div1 = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(formfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			claim_component(formfield1.$$.fragment, div0_nodes);
			t1 = claim_space(div0_nodes);
			claim_component(formfield2.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "Closed Reason: ");
			t4 = claim_text(pre_nodes, /*closedReason*/ ctx[3]);
			pre_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(topappbar.$$.fragment, div2_nodes);
			t6 = claim_space(div2_nodes);
			claim_component(banner.$$.fragment, div2_nodes);
			t7 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", {});
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { alt: true, src: true, style: true });
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file$1, 0, 0, 0);
			attr_dev(pre, "class", "status");
			add_location(pre, file$1, 15, 0, 344);
			attr_dev(img, "alt", "Page content placeholder");
			if (img.src !== (img_src_value = "/page-content.jpg")) attr_dev(img, "src", img_src_value);
			set_style(img, "display", "block");
			set_style(img, "max-width", "100%");
			set_style(img, "height", "auto");
			set_style(img, "margin", "1em auto");
			add_location(img, file$1, 39, 4, 1014);
			add_location(div1, file$1, 38, 2, 1004);
			attr_dev(div2, "class", "top-app-bar-container");
			add_location(div2, file$1, 17, 0, 401);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			mount_component(formfield0, div0, null);
			append_dev(div0, t0);
			mount_component(formfield1, div0, null);
			append_dev(div0, t1);
			mount_component(formfield2, div0, null);
			insert_dev(target, t2, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t3);
			append_dev(pre, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, div2, anchor);
			mount_component(topappbar, div2, null);
			append_dev(div2, t6);
			mount_component(banner, div2, null);
			append_dev(div2, t7);
			append_dev(div2, div1);
			append_dev(div1, img);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const formfield0_changes = {};

			if (dirty & /*$$scope, open*/ 2049) {
				formfield0_changes.$$scope = { dirty, ctx };
			}

			formfield0.$set(formfield0_changes);
			const formfield1_changes = {};

			if (dirty & /*$$scope, centered*/ 2050) {
				formfield1_changes.$$scope = { dirty, ctx };
			}

			formfield1.$set(formfield1_changes);
			const formfield2_changes = {};

			if (dirty & /*$$scope, mobileStacked*/ 2052) {
				formfield2_changes.$$scope = { dirty, ctx };
			}

			formfield2.$set(formfield2_changes);
			if (!current || dirty & /*closedReason*/ 8) set_data_dev(t4, /*closedReason*/ ctx[3]);
			const topappbar_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				topappbar_changes.$$scope = { dirty, ctx };
			}

			topappbar.$set(topappbar_changes);
			const banner_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				banner_changes.$$scope = { dirty, ctx };
			}

			if (!updating_open && dirty & /*open*/ 1) {
				updating_open = true;
				banner_changes.open = /*open*/ ctx[0];
				add_flush_callback(() => updating_open = false);
			}

			if (!updating_centered && dirty & /*centered*/ 2) {
				updating_centered = true;
				banner_changes.centered = /*centered*/ ctx[1];
				add_flush_callback(() => updating_centered = false);
			}

			if (!updating_mobileStacked && dirty & /*mobileStacked*/ 4) {
				updating_mobileStacked = true;
				banner_changes.mobileStacked = /*mobileStacked*/ ctx[2];
				add_flush_callback(() => updating_mobileStacked = false);
			}

			banner.$set(banner_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(formfield0.$$.fragment, local);
			transition_in(formfield1.$$.fragment, local);
			transition_in(formfield2.$$.fragment, local);
			transition_in(topappbar.$$.fragment, local);
			transition_in(banner.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(formfield0.$$.fragment, local);
			transition_out(formfield1.$$.fragment, local);
			transition_out(formfield2.$$.fragment, local);
			transition_out(topappbar.$$.fragment, local);
			transition_out(banner.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			destroy_component(formfield0);
			destroy_component(formfield1);
			destroy_component(formfield2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(pre);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(div2);
			destroy_component(topappbar);
			destroy_component(banner);
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
	validate_slots("Icon", slots, []);
	let open = false;
	let centered = false;
	let mobileStacked = true;
	let closedReason = "None yet.";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Icon> was created with unknown prop '${key}'`);
	});

	function checkbox_checked_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	function checkbox_checked_binding_1(value) {
		centered = value;
		$$invalidate(1, centered);
	}

	function checkbox_checked_binding_2(value) {
		mobileStacked = value;
		$$invalidate(2, mobileStacked);
	}

	function banner_open_binding(value) {
		open = value;
		$$invalidate(0, open);
	}

	function banner_centered_binding(value) {
		centered = value;
		$$invalidate(1, centered);
	}

	function banner_mobileStacked_binding(value) {
		mobileStacked = value;
		$$invalidate(2, mobileStacked);
	}

	const MDCBanner_closed_handler = event => $$invalidate(3, closedReason = event.detail.reason);

	$$self.$capture_state = () => ({
		Banner: Banner$1,
		Label: CommonLabel,
		Icon: CommonIcon,
		Button: Button_1,
		TopAppBar,
		Row,
		Section,
		Title,
		Checkbox,
		FormField,
		open,
		centered,
		mobileStacked,
		closedReason
	});

	$$self.$inject_state = $$props => {
		if ("open" in $$props) $$invalidate(0, open = $$props.open);
		if ("centered" in $$props) $$invalidate(1, centered = $$props.centered);
		if ("mobileStacked" in $$props) $$invalidate(2, mobileStacked = $$props.mobileStacked);
		if ("closedReason" in $$props) $$invalidate(3, closedReason = $$props.closedReason);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		open,
		centered,
		mobileStacked,
		closedReason,
		checkbox_checked_binding,
		checkbox_checked_binding_1,
		checkbox_checked_binding_2,
		banner_open_binding,
		banner_centered_binding,
		banner_mobileStacked_binding,
		MDCBanner_closed_handler
	];
}

class Icon_1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Icon_1",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/banner/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/banner/index.svelte";

// (14:2) <Demo component={General} file="banner/_General.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Banner options");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Banner options");
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
		source: "(14:2) <Demo component={General} file=\\\"banner/_General.svelte\\\">",
		ctx
	});

	return block;
}

// (16:2) <Demo component={Icon} file="banner/_Icon.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Banner with icon");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Banner with icon");
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
		source: "(16:2) <Demo component={Icon} file=\\\"banner/_Icon.svelte\\\">",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let fixed;
	let t1;
	let section;
	let h2;
	let t2;
	let t3;
	let pre;
	let t4;
	let t5;
	let demo0;
	let t6;
	let demo1;
	let t7;
	let demo2;
	let current;
	fixed = new Fixed({ $$inline: true });

	demo0 = new Demo({
			props: {
				component: "Shown above.",
				file: "banner/_Fixed.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: General,
				file: "banner/_General.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: Icon_1,
				file: "banner/_Icon.svelte",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = space();
			create_component(fixed.$$.fragment);
			t1 = space();
			section = element("section");
			h2 = element("h2");
			t2 = text("Banner");
			t3 = space();
			pre = element("pre");
			t4 = text("npm i -D @smui/banner");
			t5 = space();
			create_component(demo0.$$.fragment);
			t6 = space();
			create_component(demo1.$$.fragment);
			t7 = space();
			create_component(demo2.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-v576x4\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(fixed.$$.fragment, nodes);
			t1 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t2 = claim_text(h2_nodes, "Banner");
			h2_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t4 = claim_text(pre_nodes, "npm i -D @smui/banner");
			pre_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			claim_component(demo0.$$.fragment, section_nodes);
			t6 = claim_space(section_nodes);
			claim_component(demo1.$$.fragment, section_nodes);
			t7 = claim_space(section_nodes);
			claim_component(demo2.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Banner - SMUI";
			attr_dev(h2, "class", "svelte-g0x64e");
			add_location(h2, file, 7, 2, 84);
			attr_dev(pre, "class", "demo-spaced svelte-g0x64e");
			add_location(pre, file, 9, 2, 103);
			attr_dev(section, "class", "svelte-g0x64e");
			add_location(section, file, 6, 0, 72);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(fixed, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t2);
			append_dev(section, t3);
			append_dev(section, pre);
			append_dev(pre, t4);
			append_dev(section, t5);
			mount_component(demo0, section, null);
			append_dev(section, t6);
			mount_component(demo1, section, null);
			append_dev(section, t7);
			mount_component(demo2, section, null);
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
		},
		i: function intro(local) {
			if (current) return;
			transition_in(fixed.$$.fragment, local);
			transition_in(demo0.$$.fragment, local);
			transition_in(demo1.$$.fragment, local);
			transition_in(demo2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(fixed.$$.fragment, local);
			transition_out(demo0.$$.fragment, local);
			transition_out(demo1.$$.fragment, local);
			transition_out(demo2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(fixed, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(section);
			destroy_component(demo0);
			destroy_component(demo1);
			destroy_component(demo2);
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
	validate_slots("Banner", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Banner> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Demo, Fixed, General, Icon: Icon_1 });
	return [];
}

class Banner extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Banner",
			options,
			id: create_fragment.name
		});
	}
}

export default Banner;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNjVlNTFhZWQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL2Jhbm5lci9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvYmFubmVyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvYmFubmVyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZG9tL2ZvY3VzLXRyYXAuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9iYW5uZXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYW5uZXIvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvYmFubmVyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFubmVyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9iYW5uZXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2Jhbm5lci9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzTWFwLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvYmFubmVyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZGlzcGF0Y2guanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9iYW5uZXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvYmFubmVyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vcHJlZml4RmlsdGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvYmFubmVyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vdXNlQWN0aW9ucy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2Jhbm5lci9GaXhlZC5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9iYW5uZXIvQmFubmVyLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL2Jhbm5lci9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL1NwYW4uc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvYmFubmVyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vQ29tbW9uTGFiZWwuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvYmFubmVyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vSS5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9iYW5uZXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9Tdmcuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvYmFubmVyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vQ29tbW9uSWNvbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vYmFubmVyL19HZW5lcmFsLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9iYW5uZXIvX0ljb24uc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL2Jhbm5lci9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBGT0NVU19TRU5USU5FTF9DTEFTUyA9ICdtZGMtZG9tLWZvY3VzLXNlbnRpbmVsJztcbi8qKlxuICogVXRpbGl0eSB0byB0cmFwIGZvY3VzIGluIGEgZ2l2ZW4gcm9vdCBlbGVtZW50LCBlLmcuIGZvciBtb2RhbCBjb21wb25lbnRzIHN1Y2hcbiAqIGFzIGRpYWxvZ3MuIFRoZSByb290IHNob3VsZCBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCxcbiAqIGZvciBzZXR0aW5nIGluaXRpYWwgZm9jdXMgd2hlbiB0cmFwcGluZyBmb2N1cy5cbiAqIEFsc28gdHJhY2tzIHRoZSBwcmV2aW91c2x5IGZvY3VzZWQgZWxlbWVudCwgYW5kIHJlc3RvcmVzIGZvY3VzIHRvIHRoYXRcbiAqIGVsZW1lbnQgd2hlbiByZWxlYXNpbmcgZm9jdXMuXG4gKi9cbnZhciBGb2N1c1RyYXAgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRm9jdXNUcmFwKHJvb3QsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgLy8gUHJldmlvdXNseSBmb2N1c2VkIGVsZW1lbnQgYmVmb3JlIHRyYXBwaW5nIGZvY3VzLlxuICAgICAgICB0aGlzLmVsRm9jdXNlZEJlZm9yZVRyYXBGb2N1cyA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRyYXBzIGZvY3VzIGluIGByb290YC4gQWxzbyBmb2N1c2VzIG9uIGVpdGhlciBgaW5pdGlhbEZvY3VzRWxgIGlmIHNldDtcbiAgICAgKiBvdGhlcndpc2VzIHNldHMgaW5pdGlhbCBmb2N1cyB0byB0aGUgZmlyc3QgZm9jdXNhYmxlIGNoaWxkIGVsZW1lbnQuXG4gICAgICovXG4gICAgRm9jdXNUcmFwLnByb3RvdHlwZS50cmFwRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBmb2N1c2FibGVFbHMgPSB0aGlzLmdldEZvY3VzYWJsZUVsZW1lbnRzKHRoaXMucm9vdCk7XG4gICAgICAgIGlmIChmb2N1c2FibGVFbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvY3VzVHJhcDogRWxlbWVudCBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGZvY3VzYWJsZSBjaGlsZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsRm9jdXNlZEJlZm9yZVRyYXBGb2N1cyA9XG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IDpcbiAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICB0aGlzLndyYXBUYWJGb2N1cyh0aGlzLnJvb3QpO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5za2lwSW5pdGlhbEZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmZvY3VzSW5pdGlhbEVsZW1lbnQoZm9jdXNhYmxlRWxzLCB0aGlzLm9wdGlvbnMuaW5pdGlhbEZvY3VzRWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZWxlYXNlcyBmb2N1cyBmcm9tIGByb290YC4gQWxzbyByZXN0b3JlcyBmb2N1cyB0byB0aGUgcHJldmlvdXNseSBmb2N1c2VkXG4gICAgICogZWxlbWVudC5cbiAgICAgKi9cbiAgICBGb2N1c1RyYXAucHJvdG90eXBlLnJlbGVhc2VGb2N1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgW10uc2xpY2UuY2FsbCh0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbChcIi5cIiArIEZPQ1VTX1NFTlRJTkVMX0NMQVNTKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChzZW50aW5lbEVsKSB7XG4gICAgICAgICAgICBzZW50aW5lbEVsLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2VudGluZWxFbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5za2lwUmVzdG9yZUZvY3VzICYmIHRoaXMuZWxGb2N1c2VkQmVmb3JlVHJhcEZvY3VzKSB7XG4gICAgICAgICAgICB0aGlzLmVsRm9jdXNlZEJlZm9yZVRyYXBGb2N1cy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBXcmFwcyB0YWIgZm9jdXMgd2l0aGluIGBlbGAgYnkgYWRkaW5nIHR3byBoaWRkZW4gc2VudGluZWwgZGl2cyB3aGljaCBhcmVcbiAgICAgKiB1c2VkIHRvIG1hcmsgdGhlIGJlZ2lubmluZyBhbmQgdGhlIGVuZCBvZiB0aGUgdGFiYmFibGUgcmVnaW9uLiBXaGVuXG4gICAgICogZm9jdXNlZCwgdGhlc2Ugc2VudGluZWwgZWxlbWVudHMgcmVkaXJlY3QgZm9jdXMgdG8gdGhlIGZpcnN0L2xhc3RcbiAgICAgKiBjaGlsZHJlbiBlbGVtZW50cyBvZiB0aGUgdGFiYmFibGUgcmVnaW9uLCBlbnN1cmluZyB0aGF0IGZvY3VzIGlzIHRyYXBwZWRcbiAgICAgKiB3aXRoaW4gdGhhdCByZWdpb24uXG4gICAgICovXG4gICAgRm9jdXNUcmFwLnByb3RvdHlwZS53cmFwVGFiRm9jdXMgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIHNlbnRpbmVsU3RhcnQgPSB0aGlzLmNyZWF0ZVNlbnRpbmVsKCk7XG4gICAgICAgIHZhciBzZW50aW5lbEVuZCA9IHRoaXMuY3JlYXRlU2VudGluZWwoKTtcbiAgICAgICAgc2VudGluZWxTdGFydC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmb2N1c2FibGVFbHMgPSBfdGhpcy5nZXRGb2N1c2FibGVFbGVtZW50cyhlbCk7XG4gICAgICAgICAgICBpZiAoZm9jdXNhYmxlRWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb2N1c2FibGVFbHNbZm9jdXNhYmxlRWxzLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZW50aW5lbEVuZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmb2N1c2FibGVFbHMgPSBfdGhpcy5nZXRGb2N1c2FibGVFbGVtZW50cyhlbCk7XG4gICAgICAgICAgICBpZiAoZm9jdXNhYmxlRWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmb2N1c2FibGVFbHNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGVsLmluc2VydEJlZm9yZShzZW50aW5lbFN0YXJ0LCBlbC5jaGlsZHJlblswXSk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHNlbnRpbmVsRW5kKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZvY3VzZXMgb24gYGluaXRpYWxGb2N1c0VsYCBpZiBkZWZpbmVkIGFuZCBhIGNoaWxkIG9mIHRoZSByb290IGVsZW1lbnQuXG4gICAgICogT3RoZXJ3aXNlLCBmb2N1c2VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgY2hpbGQgZWxlbWVudCBvZiB0aGUgcm9vdC5cbiAgICAgKi9cbiAgICBGb2N1c1RyYXAucHJvdG90eXBlLmZvY3VzSW5pdGlhbEVsZW1lbnQgPSBmdW5jdGlvbiAoZm9jdXNhYmxlRWxzLCBpbml0aWFsRm9jdXNFbCkge1xuICAgICAgICB2YXIgZm9jdXNJbmRleCA9IDA7XG4gICAgICAgIGlmIChpbml0aWFsRm9jdXNFbCkge1xuICAgICAgICAgICAgZm9jdXNJbmRleCA9IE1hdGgubWF4KGZvY3VzYWJsZUVscy5pbmRleE9mKGluaXRpYWxGb2N1c0VsKSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgZm9jdXNhYmxlRWxzW2ZvY3VzSW5kZXhdLmZvY3VzKCk7XG4gICAgfTtcbiAgICBGb2N1c1RyYXAucHJvdG90eXBlLmdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gKHJvb3QpIHtcbiAgICAgICAgdmFyIGZvY3VzYWJsZUVscyA9IFtdLnNsaWNlLmNhbGwocm9vdC5xdWVyeVNlbGVjdG9yQWxsKCdbYXV0b2ZvY3VzXSwgW3RhYmluZGV4XSwgYSwgaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbicpKTtcbiAgICAgICAgcmV0dXJuIGZvY3VzYWJsZUVscy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgaXNEaXNhYmxlZE9ySGlkZGVuID0gZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgICAgIGVsLmdldEF0dHJpYnV0ZSgnZGlzYWJsZWQnKSAhPSBudWxsIHx8XG4gICAgICAgICAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdoaWRkZW4nKSAhPSBudWxsIHx8XG4gICAgICAgICAgICAgICAgZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpID09PSAndHJ1ZSc7XG4gICAgICAgICAgICB2YXIgaXNUYWJiYWJsZUFuZFZpc2libGUgPSBlbC50YWJJbmRleCA+PSAwICYmXG4gICAgICAgICAgICAgICAgZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggPiAwICYmXG4gICAgICAgICAgICAgICAgIWVsLmNsYXNzTGlzdC5jb250YWlucyhGT0NVU19TRU5USU5FTF9DTEFTUykgJiYgIWlzRGlzYWJsZWRPckhpZGRlbjtcbiAgICAgICAgICAgIHZhciBpc1Byb2dyYW1tYXRpY2FsbHlIaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChpc1RhYmJhYmxlQW5kVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgICAgICAgICAgICAgIGlzUHJvZ3JhbW1hdGljYWxseUhpZGRlbiA9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPT09ICdub25lJyB8fCBzdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpc1RhYmJhYmxlQW5kVmlzaWJsZSAmJiAhaXNQcm9ncmFtbWF0aWNhbGx5SGlkZGVuO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEZvY3VzVHJhcC5wcm90b3R5cGUuY3JlYXRlU2VudGluZWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZW50aW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZW50aW5lbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgLy8gRG9uJ3QgYW5ub3VuY2UgaW4gc2NyZWVuIHJlYWRlcnMuXG4gICAgICAgIHNlbnRpbmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgICAgICBzZW50aW5lbC5jbGFzc0xpc3QuYWRkKEZPQ1VTX1NFTlRJTkVMX0NMQVNTKTtcbiAgICAgICAgcmV0dXJuIHNlbnRpbmVsO1xuICAgIH07XG4gICAgcmV0dXJuIEZvY3VzVHJhcDtcbn0oKSk7XG5leHBvcnQgeyBGb2N1c1RyYXAgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvY3VzLXRyYXAuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKiogQmFubmVyIGVsZW1lbnQgY2xhc3Nlcy4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDTE9TSU5HOiAnbWRjLWJhbm5lci0tY2xvc2luZycsXG4gICAgT1BFTjogJ21kYy1iYW5uZXItLW9wZW4nLFxuICAgIE9QRU5JTkc6ICdtZGMtYmFubmVyLS1vcGVuaW5nJyxcbn07XG4vKiogQmFubmVyIG51bWJlcnMuICovXG5leHBvcnQgdmFyIG51bWJlcnMgPSB7XG4gICAgQkFOTkVSX0FOSU1BVElPTl9DTE9TRV9USU1FX01TOiAyNTAsXG4gICAgQkFOTkVSX0FOSU1BVElPTl9PUEVOX1RJTUVfTVM6IDMwMCxcbn07XG4vKiogQmFubmVyIGV2ZW50cy4gKi9cbmV4cG9ydCB2YXIgZXZlbnRzID0ge1xuICAgIENMT1NFRDogJ01EQ0Jhbm5lcjpjbG9zZWQnLFxuICAgIENMT1NJTkc6ICdNRENCYW5uZXI6Y2xvc2luZycsXG4gICAgT1BFTkVEOiAnTURDQmFubmVyOm9wZW5lZCcsXG4gICAgT1BFTklORzogJ01EQ0Jhbm5lcjpvcGVuaW5nJyxcbn07XG4vKiogQmFubmVyIHNlbGVjdG9ycy4gKi9cbmV4cG9ydCB2YXIgc2VsZWN0b3JzID0ge1xuICAgIENPTlRFTlQ6ICcubWRjLWJhbm5lcl9fY29udGVudCcsXG4gICAgUFJJTUFSWV9BQ1RJT046ICcubWRjLWJhbm5lcl9fcHJpbWFyeS1hY3Rpb24nLFxuICAgIFNFQ09OREFSWV9BQ1RJT046ICcubWRjLWJhbm5lcl9fc2Vjb25kYXJ5LWFjdGlvbicsXG4gICAgVEVYVDogJy5tZGMtYmFubmVyX190ZXh0Jyxcbn07XG4vKiogUmVhc29uIGFzIHRvIHdoeSB0aGUgYmFubmVyIHdhcyBjbG9zZWQuICovXG5leHBvcnQgdmFyIENsb3NlUmVhc29uO1xuKGZ1bmN0aW9uIChDbG9zZVJlYXNvbikge1xuICAgIC8vIEluZGljYXRlcyB0aGUgYmFubmVyIHdhcyBjbG9zZWQgdmlhIHByaW1hcnkgYWN0aW9uIGJ1dHRvbi5cbiAgICBDbG9zZVJlYXNvbltDbG9zZVJlYXNvbltcIlBSSU1BUllcIl0gPSAwXSA9IFwiUFJJTUFSWVwiO1xuICAgIC8vIEluZGljYXRlcyB0aGUgYmFubmVyIHdhcyBjbG9zZWQgdmlhIHNlY29uZGFyeSBhY3Rpb24gYnV0dG9uLlxuICAgIENsb3NlUmVhc29uW0Nsb3NlUmVhc29uW1wiU0VDT05EQVJZXCJdID0gMV0gPSBcIlNFQ09OREFSWVwiO1xuICAgIC8vIFdpbGwgbmV2ZXIgYmUgdXNlZCBieSB0aGUgY29tcG9uZW50LiBQcm92aWRlZCBmb3IgY3VzdG9tIGhhbmRsaW5nIG9mXG4gICAgLy8gcHJvZ3JhbW1hdGljIGNsb3Npbmcgb2YgdGhlIGJhbm5lci5cbiAgICBDbG9zZVJlYXNvbltDbG9zZVJlYXNvbltcIlVOU1BFQ0lGSUVEXCJdID0gMl0gPSBcIlVOU1BFQ0lGSUVEXCI7XG59KShDbG9zZVJlYXNvbiB8fCAoQ2xvc2VSZWFzb24gPSB7fSkpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgQ2xvc2VSZWFzb24sIGNzc0NsYXNzZXMsIG51bWJlcnMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgT1BFTklORyA9IGNzc0NsYXNzZXMuT1BFTklORywgT1BFTiA9IGNzc0NsYXNzZXMuT1BFTiwgQ0xPU0lORyA9IGNzc0NsYXNzZXMuQ0xPU0lORztcbi8qKlxuICogRm91bmRhdGlvbiBjbGFzcyBmb3IgYmFubmVyLiBSZXNwb25zaWJpbGl0aWVzIGluY2x1ZGUgb3BlbmluZyBhbmQgY2xvc2luZyB0aGVcbiAqIGJhbm5lci5cbiAqL1xudmFyIE1EQ0Jhbm5lckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ0Jhbm5lckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDQmFubmVyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENCYW5uZXJGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzT3BlbmVkID0gZmFsc2U7XG4gICAgICAgIC8vIFJlcXVlc3QgaWQgZm9yIG9wZW4gYW5pbWF0aW9uLCB1c2VkIHRvIGNhbmNlbCB0aGUgcmVmcmVzaCBjYWxsYmFja1xuICAgICAgICAvLyByZXF1ZXN0IG9uIGNsb3NlKCkgYW5kIGRlc3Ryb3koKS5cbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uRnJhbWUgPSAwO1xuICAgICAgICAvLyBUaW1lciBpZCBmb3IgY2xvc2UgYW5kIG9wZW4gYW5pbWF0aW9uLCB1c2VkIHRvIGNhbmNlbCB0aGUgdGltZXIgb25cbiAgICAgICAgLy8gY2xvc2UoKSBhbmQgZGVzdHJveSgpLlxuICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lciA9IDA7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0Jhbm5lckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRDb250ZW50SGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUNsb3NlZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUNsb3Npbmc6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlPcGVuZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlPcGVuaW5nOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVsZWFzZUZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgdHJhcEZvY3VzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDQmFubmVyRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSAwO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hbmltYXRpb25UaW1lcik7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgPSAwO1xuICAgIH07XG4gICAgTURDQmFubmVyRm91bmRhdGlvbi5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5pc09wZW5lZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlPcGVuaW5nKCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhDTE9TSU5HKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKE9QRU5JTkcpO1xuICAgICAgICB2YXIgY29udGVudEhlaWdodCA9IHRoaXMuYWRhcHRlci5nZXRDb250ZW50SGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5hZGRDbGFzcyhPUEVOKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuc2V0U3R5bGVQcm9wZXJ0eSgnaGVpZ2h0JywgY29udGVudEhlaWdodCArIFwicHhcIik7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb25UaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci50cmFwRm9jdXMoKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLm5vdGlmeU9wZW5lZCgpO1xuICAgICAgICAgICAgfSwgbnVtYmVycy5CQU5ORVJfQU5JTUFUSU9OX09QRU5fVElNRV9NUyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHJlYXNvbiBXaHkgdGhlIGJhbm5lciB3YXMgY2xvc2VkLiBWYWx1ZSB3aWxsIGJlIHBhc3NlZCB0b1xuICAgICAqICAgICBldmVudHMuQ0xPU0lORyBhbmQgZXZlbnRzLkNMT1NFRCB2aWEgdGhlIGBldmVudC5kZXRhaWwucmVhc29uYFxuICAgICAqICAgICBwcm9wZXJ0eS4gU3RhbmRhcmQgdmFsdWVzIGFyZSBDbG9zZVJlYXNvbi5QUklNQVJZIGFuZFxuICAgICAqICAgICBDbG9zZVJlYXNvbi5TRUNPTkRBUlksIGJ1dCBDbG9zZVJlYXNvbi5VTlNQRUNJRklFRCBpcyBwcm92aWRlZCBmb3JcbiAgICAgKiAgICAgY3VzdG9tIGhhbmRsaW5nIG9mIHByb2dyYW1tYXRpYyBjbG9zaW5nIG9mIHRoZSBiYW5uZXIuXG4gICAgICovXG4gICAgTURDQmFubmVyRm91bmRhdGlvbi5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghdGhpcy5pc09wZW5lZCkge1xuICAgICAgICAgICAgLy8gQXZvaWQgcmVkdW5kYW50IGNsb3NlIGNhbGxzIChhbmQgZXZlbnRzKSwgZS5nLiByZXBlYXRlZCBpbnRlcmFjdGlvbnMgYXNcbiAgICAgICAgICAgIC8vIHRoZSBiYW5uZXIgaXMgYW5pbWF0aW5nIGNsb3NlZFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5pc09wZW5lZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFkYXB0ZXIubm90aWZ5Q2xvc2luZyhyZWFzb24pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoQ0xPU0lORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTdHlsZVByb3BlcnR5KCdoZWlnaHQnLCAnMCcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoT1BFTik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhPUEVOSU5HKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXIpO1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbGVhc2VGb2N1cygpO1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlQW5pbWF0aW9uVGltZXJFbmQoKTtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIubm90aWZ5Q2xvc2VkKHJlYXNvbik7XG4gICAgICAgIH0sIG51bWJlcnMuQkFOTkVSX0FOSU1BVElPTl9DTE9TRV9USU1FX01TKTtcbiAgICB9O1xuICAgIE1EQ0Jhbm5lckZvdW5kYXRpb24ucHJvdG90eXBlLmlzT3BlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNPcGVuZWQ7XG4gICAgfTtcbiAgICBNRENCYW5uZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVQcmltYXJ5QWN0aW9uQ2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xvc2UoQ2xvc2VSZWFzb24uUFJJTUFSWSk7XG4gICAgfTtcbiAgICBNRENCYW5uZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVTZWNvbmRhcnlBY3Rpb25DbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbG9zZShDbG9zZVJlYXNvbi5TRUNPTkRBUlkpO1xuICAgIH07XG4gICAgTURDQmFubmVyRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGVudEhlaWdodCA9IHRoaXMuYWRhcHRlci5nZXRDb250ZW50SGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTdHlsZVByb3BlcnR5KCdoZWlnaHQnLCBjb250ZW50SGVpZ2h0ICsgXCJweFwiKTtcbiAgICB9O1xuICAgIE1EQ0Jhbm5lckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUFuaW1hdGlvblRpbWVyRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWVyID0gMDtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE9QRU5JTkcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoQ0xPU0lORyk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDQmFubmVyRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDQmFubmVyRm91bmRhdGlvbiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCJpbXBvcnQge1xuICBidWJibGUsXG4gIGxpc3RlbixcbiAgcHJldmVudF9kZWZhdWx0LFxuICBzdG9wX3Byb3BhZ2F0aW9uLFxufSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuXG4vLyBNYXRjaCBtb2RpZmllcnMgb24gRE9NIGV2ZW50cy5cbmNvbnN0IG9sZE1vZGlmaWVyUmVnZXggPSAvXlthLXpdKyg/OjooPzpwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb258cGFzc2l2ZXxub25wYXNzaXZlfGNhcHR1cmV8b25jZXxzZWxmKSkrJC87XG4vLyBNYXRjaCBtb2RpZmllcnMgb24gb3RoZXIgZXZlbnRzLlxuY29uc3QgbmV3TW9kaWZpZXJSZWdleCA9IC9eW14kXSsoPzpcXCQoPzpwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb258cGFzc2l2ZXxub25wYXNzaXZlfGNhcHR1cmV8b25jZXxzZWxmKSkrJC87XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRXZlbnRzQnVpbGRlcihjb21wb25lbnQpIHtcbiAgLy8gVGhpcyBpcyBvdXIgcHNldWRvICRvbiBmdW5jdGlvbi4gSXQgaXMgZGVmaW5lZCBvbiBjb21wb25lbnQgbW91bnQuXG4gIGxldCAkb247XG4gIC8vIFRoaXMgaXMgYSBsaXN0IG9mIGV2ZW50cyBib3VuZCBiZWZvcmUgbW91bnQuXG4gIGxldCBldmVudHMgPSBbXTtcbiAgLy8gVGhpcyBpcyB0aGUgb3JpZ2luYWwgY29tcG9uZW50ICRvbiBmdW5jdGlvbi5cbiAgY29uc3QgY29tcG9uZW50T24gPSBjb21wb25lbnQuJG9uO1xuXG4gIC8vIEFuZCB3ZSBvdmVycmlkZSB0aGUgJG9uIGZ1bmN0aW9uIHRvIGZvcndhcmQgYWxsIGJvdW5kIGV2ZW50cy5cbiAgY29tcG9uZW50LiRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgIGxldCBldmVudFR5cGUgPSBmdWxsRXZlbnRUeXBlO1xuICAgIGxldCBkZXN0cnVjdG9yID0gKCkgPT4ge307XG4gICAgaWYgKCRvbikge1xuICAgICAgLy8gVGhlIGV2ZW50IHdhcyBib3VuZCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgZGVzdHJ1Y3RvciA9ICRvbihldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGV2ZW50IHdhcyBib3VuZCBiZWZvcmUgbW91bnQgYnkgU3ZlbHRlLlxuICAgICAgZXZlbnRzLnB1c2goW2V2ZW50VHlwZSwgY2FsbGJhY2tdKTtcbiAgICB9XG4gICAgY29uc3Qgb2xkTW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChvbGRNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG5cbiAgICBpZiAob2xkTW9kaWZpZXJNYXRjaCAmJiBjb25zb2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdFdmVudCBtb2RpZmllcnMgaW4gU01VSSBub3cgdXNlIFwiJFwiIGluc3RlYWQgb2YgXCI6XCIsIHNvIHRoYXQgYWxsIGV2ZW50cyBjYW4gYmUgYm91bmQgd2l0aCBtb2RpZmllcnMuIFBsZWFzZSB1cGRhdGUgeW91ciBldmVudCBiaW5kaW5nOiAnLFxuICAgICAgICBldmVudFR5cGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGlmaWVyTWF0Y2gpIHtcbiAgICAgIC8vIFJlbW92ZSBtb2RpZmllcnMgZnJvbSB0aGUgcmVhbCBldmVudC5cbiAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgJG9uIGZ1bmN0aW9uLlxuICAgIGNvbnN0IGNvbXBvbmVudERlc3RydWN0b3IgPSBjb21wb25lbnRPbi5jYWxsKFxuICAgICAgY29tcG9uZW50LFxuICAgICAgZXZlbnRUeXBlLFxuICAgICAgY2FsbGJhY2tcbiAgICApO1xuXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICBkZXN0cnVjdG9yKCk7XG4gICAgICByZXR1cm4gY29tcG9uZW50RGVzdHJ1Y3RvciguLi5hcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZvcndhcmQoZSkge1xuICAgIC8vIEludGVybmFsbHkgYnViYmxlIHRoZSBldmVudCB1cCBmcm9tIFN2ZWx0ZSBjb21wb25lbnRzLlxuICAgIGJ1YmJsZShjb21wb25lbnQsIGUpO1xuICB9XG5cbiAgcmV0dXJuIChub2RlKSA9PiB7XG4gICAgY29uc3QgZGVzdHJ1Y3RvcnMgPSBbXTtcbiAgICBjb25zdCBmb3J3YXJkRGVzdHJ1Y3RvcnMgPSB7fTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIGZvcndhcmRpbmcgYWxsIGJvdW5kIGV2ZW50cy5cbiAgICAkb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICAgIGxldCBldmVudFR5cGUgPSBmdWxsRXZlbnRUeXBlO1xuICAgICAgbGV0IGhhbmRsZXIgPSBjYWxsYmFjaztcbiAgICAgIC8vIERPTSBhZGRFdmVudExpc3RlbmVyIG9wdGlvbnMgYXJndW1lbnQuXG4gICAgICBsZXQgb3B0aW9ucyA9IGZhbHNlO1xuICAgICAgY29uc3Qgb2xkTW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChvbGRNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuICAgICAgaWYgKG1vZGlmaWVyTWF0Y2gpIHtcbiAgICAgICAgLy8gUGFyc2UgdGhlIGV2ZW50IG1vZGlmaWVycy5cbiAgICAgICAgLy8gU3VwcG9ydGVkIG1vZGlmaWVyczpcbiAgICAgICAgLy8gLSBwcmV2ZW50RGVmYXVsdFxuICAgICAgICAvLyAtIHN0b3BQcm9wYWdhdGlvblxuICAgICAgICAvLyAtIHBhc3NpdmVcbiAgICAgICAgLy8gLSBub25wYXNzaXZlXG4gICAgICAgIC8vIC0gY2FwdHVyZVxuICAgICAgICAvLyAtIG9uY2VcbiAgICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmZyb21FbnRyaWVzKHBhcnRzLnNsaWNlKDEpLm1hcCgobW9kKSA9PiBbbW9kLCB0cnVlXSkpO1xuICAgICAgICBpZiAob3B0aW9ucy5ub25wYXNzaXZlKSB7XG4gICAgICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2U7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMubm9ucGFzc2l2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGhhbmRsZXIgPSBwcmV2ZW50X2RlZmF1bHQoaGFuZGxlcik7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMucHJldmVudERlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BfcHJvcGFnYXRpb24oaGFuZGxlcik7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgdGhlIGV2ZW50IGRpcmVjdGx5LCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgICAgY29uc3Qgb2ZmID0gbGlzdGVuKG5vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICBjb25zdCBkZXN0cnVjdG9yID0gKCkgPT4ge1xuICAgICAgICBvZmYoKTtcbiAgICAgICAgY29uc3QgaWR4ID0gZGVzdHJ1Y3RvcnMuaW5kZXhPZihkZXN0cnVjdG9yKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRlc3RydWN0b3JzLnB1c2goZGVzdHJ1Y3Rvcik7XG5cbiAgICAgIC8vIEZvcndhcmQgdGhlIGV2ZW50IGZyb20gU3ZlbHRlLlxuICAgICAgaWYgKCFldmVudFR5cGUgaW4gZm9yd2FyZERlc3RydWN0b3JzKSB7XG4gICAgICAgIGZvcndhcmREZXN0cnVjdG9yc1tldmVudFR5cGVdID0gbGlzdGVuKG5vZGUsIGV2ZW50VHlwZSwgZm9yd2FyZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXN0cnVjdG9yO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gTGlzdGVuIHRvIGFsbCB0aGUgZXZlbnRzIGFkZGVkIGJlZm9yZSBtb3VudC5cbiAgICAgICRvbihldmVudHNbaV1bMF0sIGV2ZW50c1tpXVsxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdHJ1Y3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkZXN0cnVjdG9yc1tpXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudCBmb3J3YXJkZXJzLlxuICAgICAgICBmb3IgKGxldCBlbnRyeSBvZiBPYmplY3QuZW50cmllcyhmb3J3YXJkRGVzdHJ1Y3RvcnMpKSB7XG4gICAgICAgICAgZW50cnlbMV0oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsYXNzTWFwKGNsYXNzT2JqKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhjbGFzc09iailcbiAgICAuZmlsdGVyKChbbmFtZSwgdmFsdWVdKSA9PiBuYW1lICE9PSAnJyAmJiB2YWx1ZSlcbiAgICAubWFwKChbbmFtZV0pID0+IG5hbWUpXG4gICAgLmpvaW4oJyAnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBkaXNwYXRjaChcbiAgZWxlbWVudCxcbiAgZXZlbnRUeXBlLFxuICBkZXRhaWwgPSB7fSxcbiAgZXZlbnRJbml0ID0geyBidWJibGVzOiB0cnVlIH1cbikge1xuICBpZiAodHlwZW9mIEV2ZW50ICE9PSAndW5kZWZpbmVkJyAmJiBlbGVtZW50KSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnRUeXBlLCBldmVudEluaXQpO1xuICAgIGV2ZW50LmRldGFpbCA9IGRldGFpbDtcbiAgICBjb25zdCBlbCA9ICdnZXRFbGVtZW50JyBpbiBlbGVtZW50ID8gZWxlbWVudC5nZXRFbGVtZW50KCkgOiBlbGVtZW50O1xuICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGV4Y2x1ZGUob2JqLCBrZXlzKSB7XG4gIGxldCBuYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG4gIGNvbnN0IG5ld09iaiA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lID0gbmFtZXNbaV07XG4gICAgY29uc3QgY2FzaEluZGV4ID0gbmFtZS5pbmRleE9mKCckJyk7XG4gICAgaWYgKFxuICAgICAgY2FzaEluZGV4ICE9PSAtMSAmJlxuICAgICAga2V5cy5pbmRleE9mKG5hbWUuc3Vic3RyaW5nKDAsIGNhc2hJbmRleCArIDEpKSAhPT0gLTFcbiAgICApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoa2V5cy5pbmRleE9mKG5hbWUpICE9PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIG5ld09ialtuYW1lXSA9IG9ialtuYW1lXTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcHJlZml4RmlsdGVyKG9iaiwgcHJlZml4KSB7XG4gIGxldCBuYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaik7XG4gIGNvbnN0IG5ld09iaiA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuYW1lID0gbmFtZXNbaV07XG4gICAgaWYgKG5hbWUuc3Vic3RyaW5nKDAsIHByZWZpeC5sZW5ndGgpID09PSBwcmVmaXgpIHtcbiAgICAgIG5ld09ialtuYW1lLnN1YnN0cmluZyhwcmVmaXgubGVuZ3RoKV0gPSBvYmpbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25zKG5vZGUsIGFjdGlvbnMpIHtcbiAgbGV0IG9iamVjdHMgPSBbXTtcblxuICBpZiAoYWN0aW9ucykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICBjb25zdCBhY3Rpb24gPSBpc0FycmF5ID8gYWN0aW9uc1tpXVswXSA6IGFjdGlvbnNbaV07XG4gICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlLCBhY3Rpb25zW2ldWzFdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShhY3Rpb25zKSB7XG4gICAgICBpZiAoKChhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoKSB8fCAwKSAhPSBvYmplY3RzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG5vdCBjaGFuZ2UgdGhlIGxlbmd0aCBvZiBhbiBhY3Rpb25zIGFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9ucykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAndXBkYXRlJyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZShhY3Rpb25zW2ldWzFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ2Rlc3Ryb3knIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICBvYmplY3RzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG4iLCJ7I2lmIGZpeGVkfVxuICA8ZGl2XG4gICAgYmluZDp0aGlzPXtlbGVtZW50fVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9XCJtZGMtYmFubmVyX19maXhlZFwiXG4gICAgc3R5bGU9e3dpZHRoID09IG51bGwgPyBudWxsIDogYHdpZHRoOiAke3dpZHRofXB4O2B9XG4gID5cbiAgICA8c2xvdCAvPlxuICA8L2Rpdj5cbns6ZWxzZX1cbiAgPHNsb3QgLz5cbnsvaWZ9XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgZml4ZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCB3aWR0aCA9IG51bGw7XG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPHN2ZWx0ZTp3aW5kb3cgb246cmVzaXplPXtsYXlvdXR9IC8+XG5cbjxkaXZcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgICdtZGMtYmFubmVyJzogdHJ1ZSxcbiAgICAnbWRjLWJhbm5lci0tY2VudGVyZWQnOiBjZW50ZXJlZCxcbiAgICAnbWRjLWJhbm5lci0tbW9iaWxlLXN0YWNrZWQnOiBtb2JpbGVTdGFja2VkLFxuICAgIC4uLmludGVybmFsQ2xhc3NlcyxcbiAgfSl9XG4gIHN0eWxlPXtPYmplY3QuZW50cmllcyhpbnRlcm5hbFN0eWxlcylcbiAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAuY29uY2F0KFtzdHlsZV0pXG4gICAgLmpvaW4oJyAnKX1cbiAgcm9sZT1cImJhbm5lclwiXG4gIG9uOlNNVUk6YmFubmVyOmJ1dHRvbjpwcmltYXJ5QWN0aW9uQ2xpY2s9eygpID0+XG4gICAgaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlUHJpbWFyeUFjdGlvbkNsaWNrKCl9XG4gIG9uOlNNVUk6YmFubmVyOmJ1dHRvbjpzZWNvbmRhcnlBY3Rpb25DbGljaz17KCkgPT5cbiAgICBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVTZWNvbmRhcnlBY3Rpb25DbGljaygpfVxuICB7Li4uZXhjbHVkZSgkJHJlc3RQcm9wcywgWydjb250ZW50JCcsICd0ZXh0V3JhcHBlciQnLCAnZ3JhcGhpYyQnXSl9XG4+XG4gIDxGaXhlZCBiaW5kOmZpeGVkIHt3aWR0aH0+XG4gICAgPGRpdlxuICAgICAgYmluZDp0aGlzPXtjb250ZW50fVxuICAgICAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICAgICAgW2NvbnRlbnQkY2xhc3NdOiB0cnVlLFxuICAgICAgICAnbWRjLWJhbm5lcl9fY29udGVudCc6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHJvbGU9XCJhbGVydGRpYWxvZ1wiXG4gICAgICBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIlxuICAgICAgey4uLnByZWZpeEZpbHRlcigkJHJlc3RQcm9wcywgJ2NvbnRlbnQkJyl9XG4gICAgPlxuICAgICAgeyNpZiAkJHNsb3RzLmljb24gfHwgJCRzbG90cy5sYWJlbH1cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgICAgICAgICBbdGV4dFdyYXBwZXIkY2xhc3NdOiB0cnVlLFxuICAgICAgICAgICAgJ21kYy1iYW5uZXJfX2dyYXBoaWMtdGV4dC13cmFwcGVyJzogdHJ1ZSxcbiAgICAgICAgICB9KX1cbiAgICAgICAgICB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAndGV4dFdyYXBwZXIkJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7I2lmICQkc2xvdHMuaWNvbn1cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICAgICAgICAgICAgICBbZ3JhcGhpYyRjbGFzc106IHRydWUsXG4gICAgICAgICAgICAgICAgJ21kYy1iYW5uZXJfX2dyYXBoaWMnOiB0cnVlLFxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgcm9sZT1cImltZ1wiXG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIHsuLi5wcmVmaXhGaWx0ZXIoJCRyZXN0UHJvcHMsICdncmFwaGljJCcpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaWNvblwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7L2lmfVxuICAgICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgey9pZn1cbiAgICAgIHsjaWYgJCRzbG90cy5hY3Rpb25zfVxuICAgICAgICA8ZGl2IGNsYXNzPVwibWRjLWJhbm5lcl9fYWN0aW9uc1wiPlxuICAgICAgICAgIDxzbG90IG5hbWU9XCJhY3Rpb25zXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuICA8L0ZpeGVkPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IE1EQ0Jhbm5lckZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFubmVyJztcbiAgaW1wb3J0IHsgZm9jdXNUcmFwIGFzIGRvbUZvY3VzVHJhcCB9IGZyb20gJ0BtYXRlcmlhbC9kb20nO1xuICBpbXBvcnQgeyBvbk1vdW50LCBvbkRlc3Ryb3ksIGdldENvbnRleHQsIHNldENvbnRleHQsIHRpY2sgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIGV4Y2x1ZGUsXG4gICAgcHJlZml4RmlsdGVyLFxuICAgIHVzZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbiAgaW1wb3J0IEZpeGVkIGZyb20gJy4vRml4ZWQuc3ZlbHRlJztcbiAgY29uc3QgeyBGb2N1c1RyYXAgfSA9IGRvbUZvY3VzVHJhcDtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgc3R5bGUgPSAnJztcbiAgZXhwb3J0IGxldCBvcGVuID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgY2VudGVyZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBmaXhlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IG1vYmlsZVN0YWNrZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjb250ZW50JGNsYXNzID0gJyc7XG4gIGV4cG9ydCBsZXQgdGV4dFdyYXBwZXIkY2xhc3MgPSAnJztcbiAgZXhwb3J0IGxldCBncmFwaGljJGNsYXNzID0gJyc7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnN0YW5jZTtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgaW50ZXJuYWxTdHlsZXMgPSB7fTtcbiAgbGV0IGNvbnRlbnQ7XG4gIGxldCBmb2N1c1RyYXA7XG4gIGxldCBhZGRMYXlvdXRMaXN0ZW5lciA9IGdldENvbnRleHQoJ1NNVUk6YWRkTGF5b3V0TGlzdGVuZXInKTtcbiAgbGV0IHJlbW92ZUxheW91dExpc3RlbmVyO1xuICBsZXQgd2lkdGg7XG5cbiAgc2V0Q29udGV4dCgnU01VSTpsYWJlbDpjb250ZXh0JywgJ2Jhbm5lcicpO1xuICBzZXRDb250ZXh0KCdTTVVJOmljb246Y29udGV4dCcsICdiYW5uZXInKTtcbiAgc2V0Q29udGV4dCgnU01VSTpidXR0b246Y29udGV4dCcsICdiYW5uZXInKTtcblxuICAkOiBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuaXNPcGVuKCkgIT09IG9wZW4pIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgaW5zdGFuY2Uub3BlbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBwcmV2aW91c01vYmlsZVN0YWNrZWQgPSBtb2JpbGVTdGFja2VkO1xuICAkOiBpZiAocHJldmlvdXNNb2JpbGVTdGFja2VkICE9PSBtb2JpbGVTdGFja2VkKSB7XG4gICAgcHJldmlvdXNNb2JpbGVTdGFja2VkID0gbW9iaWxlU3RhY2tlZDtcbiAgICB0aWNrKCkudGhlbihsYXlvdXQpO1xuICB9XG5cbiAgaWYgKGFkZExheW91dExpc3RlbmVyKSB7XG4gICAgcmVtb3ZlTGF5b3V0TGlzdGVuZXIgPSBhZGRMYXlvdXRMaXN0ZW5lcihsYXlvdXQpO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgZm9jdXNUcmFwID0gbmV3IEZvY3VzVHJhcChlbGVtZW50LCB7XG4gICAgICBpbml0aWFsRm9jdXNFbDogZ2V0UHJpbWFyeUFjdGlvbkVsKCksXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZSA9IG5ldyBNRENCYW5uZXJGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzLFxuICAgICAgZ2V0Q29udGVudEhlaWdodDogKCkgPT4ge1xuICAgICAgICBsZXQgb2Zmc2V0SGVpZ2h0ID0gY29udGVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGlmIChvZmZzZXRIZWlnaHQgPT09IDApIHtcbiAgICAgICAgICBnZXRFbGVtZW50KCkuY2xhc3NMaXN0LmFkZCgnc211aS1iYW5uZXItLWZvcmNlLXNob3cnKTtcbiAgICAgICAgICBvZmZzZXRIZWlnaHQgPSBjb250ZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICBnZXRFbGVtZW50KCkuY2xhc3NMaXN0LnJlbW92ZSgnc211aS1iYW5uZXItLWZvcmNlLXNob3cnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Zmc2V0SGVpZ2h0O1xuICAgICAgfSxcbiAgICAgIG5vdGlmeUNsb3NlZDogKHJlYXNvbikgPT4ge1xuICAgICAgICBvcGVuID0gZmFsc2U7XG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ0Jhbm5lcjpjbG9zZWQnLCB7IHJlYXNvbiB9KTtcbiAgICAgIH0sXG4gICAgICBub3RpZnlDbG9zaW5nOiAocmVhc29uKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ0Jhbm5lcjpjbG9zaW5nJywgeyByZWFzb24gfSk7XG4gICAgICB9LFxuICAgICAgbm90aWZ5T3BlbmVkOiAoKSA9PiB7XG4gICAgICAgIG9wZW4gPSB0cnVlO1xuICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdNRENCYW5uZXI6b3BlbmVkJywge30pO1xuICAgICAgfSxcbiAgICAgIG5vdGlmeU9wZW5pbmc6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDQmFubmVyOm9wZW5pbmcnLCB7fSk7XG4gICAgICB9LFxuICAgICAgcmVsZWFzZUZvY3VzOiAoKSA9PiBmb2N1c1RyYXAucmVsZWFzZUZvY3VzKCksXG4gICAgICByZW1vdmVDbGFzcyxcbiAgICAgIHNldFN0eWxlUHJvcGVydHk6IGFkZFN0eWxlLFxuICAgICAgdHJhcEZvY3VzOiAoKSA9PiBmb2N1c1RyYXAudHJhcEZvY3VzKCksXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZS5pbml0KCk7XG4gICAgbGF5b3V0KCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH07XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKHJlbW92ZUxheW91dExpc3RlbmVyKSB7XG4gICAgICByZW1vdmVMYXlvdXRMaXN0ZW5lcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGludGVybmFsU3R5bGVzW25hbWVdO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcyA9IGludGVybmFsU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRQcmltYXJ5QWN0aW9uRWwoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1kYy1iYW5uZXJfX3ByaW1hcnktYWN0aW9uJyk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaXNPcGVuKCkge1xuICAgIHJldHVybiBvcGVuO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldE9wZW4odmFsdWUpIHtcbiAgICBvcGVuID0gdmFsdWU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgIGlmIChmaXhlZCkge1xuICAgICAgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgaWYgKHdpZHRoID09PSAwKSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc211aS1iYW5uZXItLWZvcmNlLXNob3cnKTtcbiAgICAgICAgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3NtdWktYmFubmVyLS1mb3JjZS1zaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLmxheW91dCgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPHNwYW5cbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB7Li4uJCRyZXN0UHJvcHN9PjxzbG90IC8+PC9zcGFuXG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCB1c2VBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3ZlbHRlOmNvbXBvbmVudFxuICB0aGlzPXtjb21wb25lbnR9XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlPXtbZm9yd2FyZEV2ZW50cywgLi4udXNlXX1cbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWJ1dHRvbl9fbGFiZWwnOiBjb250ZXh0ID09PSAnYnV0dG9uJyxcbiAgICAnbWRjLWZhYl9fbGFiZWwnOiBjb250ZXh0ID09PSAnZmFiJyxcbiAgICAnbWRjLXRhYl9fdGV4dC1sYWJlbCc6IGNvbnRleHQgPT09ICd0YWInLFxuICAgICdtZGMtaW1hZ2UtbGlzdF9fbGFiZWwnOiBjb250ZXh0ID09PSAnaW1hZ2UtbGlzdCcsXG4gICAgJ21kYy1zbmFja2Jhcl9fbGFiZWwnOiBjb250ZXh0ID09PSAnc25hY2tiYXInLFxuICAgICdtZGMtYmFubmVyX190ZXh0JzogY29udGV4dCA9PT0gJ2Jhbm5lcicsXG4gICAgJ21kYy1zZWdtZW50ZWQtYnV0dG9uX19sYWJlbCc6IGNvbnRleHQgPT09ICdzZWdtZW50ZWQtYnV0dG9uJyxcbiAgICAnbWRjLWRhdGEtdGFibGVfX3BhZ2luYXRpb24tcm93cy1wZXItcGFnZS1sYWJlbCc6XG4gICAgICBjb250ZXh0ID09PSAnZGF0YS10YWJsZTpwYWdpbmF0aW9uJyxcbiAgICAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLWxhYmVsJzpcbiAgICAgIGNvbnRleHQgPT09ICdkYXRhLXRhYmxlOnNvcnRhYmxlLWhlYWRlci1jZWxsJyxcbiAgfSl9XG4gIHsuLi5jb250ZXh0ID09PSAnc25hY2tiYXInID8geyAnYXJpYS1hdG9taWMnOiAnZmFsc2UnIH0gOiB7fX1cbiAge3RhYmluZGV4fVxuICB7Li4uJCRyZXN0UHJvcHN9PjxzbG90IC8+PC9zdmVsdGU6Y29tcG9uZW50XG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBmb3J3YXJkRXZlbnRzQnVpbGRlciwgY2xhc3NNYXAsIHVzZUFjdGlvbnMgfSBmcm9tICcuL2ludGVybmFsLmpzJztcbiAgaW1wb3J0IFNwYW4gZnJvbSAnLi9TcGFuLnN2ZWx0ZSc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGV4cG9ydCBsZXQgY29tcG9uZW50ID0gU3BhbjtcblxuICBjb25zdCBjb250ZXh0ID0gZ2V0Q29udGV4dCgnU01VSTpsYWJlbDpjb250ZXh0Jyk7XG4gIGNvbnN0IHRhYmluZGV4ID0gZ2V0Q29udGV4dCgnU01VSTpsYWJlbDp0YWJpbmRleCcpO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEVsZW1lbnQoKTtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8aSBiaW5kOnRoaXM9e2VsZW1lbnR9IHVzZTp1c2VBY3Rpb25zPXt1c2V9IHVzZTpmb3J3YXJkRXZlbnRzIHsuLi4kJHJlc3RQcm9wc31cbiAgPjxzbG90IC8+PC9pXG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCB1c2VBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3ZnIGJpbmQ6dGhpcz17ZWxlbWVudH0gdXNlOnVzZUFjdGlvbnM9e3VzZX0gdXNlOmZvcndhcmRFdmVudHMgey4uLiQkcmVzdFByb3BzfVxuICA+PHNsb3QgLz48L3N2Z1xuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBmb3J3YXJkRXZlbnRzQnVpbGRlciwgdXNlQWN0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwuanMnO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPHN2ZWx0ZTpjb21wb25lbnRcbiAgdGhpcz17Y29tcG9uZW50fVxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZT17W2ZvcndhcmRFdmVudHMsIC4uLnVzZV19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1idXR0b25fX2ljb24nOiBjb250ZXh0ID09PSAnYnV0dG9uJyxcbiAgICAnbWRjLWZhYl9faWNvbic6IGNvbnRleHQgPT09ICdmYWInLFxuICAgICdtZGMtaWNvbi1idXR0b25fX2ljb24nOiBjb250ZXh0ID09PSAnaWNvbi1idXR0b24nLFxuICAgICdtZGMtaWNvbi1idXR0b25fX2ljb24tLW9uJzogY29udGV4dCA9PT0gJ2ljb24tYnV0dG9uJyAmJiBvbixcbiAgICAnbWRjLXRhYl9faWNvbic6IGNvbnRleHQgPT09ICd0YWInLFxuICAgICdtZGMtYmFubmVyX19pY29uJzogY29udGV4dCA9PT0gJ2Jhbm5lcicsXG4gICAgJ21kYy1zZWdtZW50ZWQtYnV0dG9uX19pY29uJzogY29udGV4dCA9PT0gJ3NlZ21lbnRlZC1idXR0b24nLFxuICB9KX1cbiAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgey4uLmNvbXBvbmVudCA9PT0gU3ZnID8geyBmb2N1c2FibGU6ICdmYWxzZScsIHRhYmluZGV4OiAnLTEnIH0gOiB7fX1cbiAgey4uLiQkcmVzdFByb3BzfT48c2xvdCAvPjwvc3ZlbHRlOmNvbXBvbmVudFxuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIGNsYXNzTWFwIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG4gIGltcG9ydCBJIGZyb20gJy4vSS5zdmVsdGUnO1xuICBpbXBvcnQgU3ZnIGZyb20gJy4vU3ZnLnN2ZWx0ZSc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IG9uID0gZmFsc2U7XG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgZXhwb3J0IGxldCBjb21wb25lbnQgPSBJO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBnZXRDb250ZXh0KCdTTVVJOmljb246Y29udGV4dCcpO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEVsZW1lbnQoKTtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8ZGl2PlxuICA8Rm9ybUZpZWxkPlxuICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e29wZW59IC8+XG4gICAgPHNwYW4gc2xvdD1cImxhYmVsXCI+T3Blbjwvc3Bhbj5cbiAgPC9Gb3JtRmllbGQ+XG4gIDxGb3JtRmllbGQ+XG4gICAgPENoZWNrYm94IGJpbmQ6Y2hlY2tlZD17Y2VudGVyZWR9IC8+XG4gICAgPHNwYW4gc2xvdD1cImxhYmVsXCI+Q2VudGVyZWQ8L3NwYW4+XG4gIDwvRm9ybUZpZWxkPlxuICA8Rm9ybUZpZWxkPlxuICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e21vYmlsZVN0YWNrZWR9IC8+XG4gICAgPHNwYW4gc2xvdD1cImxhYmVsXCI+TW9iaWxlIFN0YWNrZWQ8L3NwYW4+XG4gIDwvRm9ybUZpZWxkPlxuPC9kaXY+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbG9zZWQgUmVhc29uOiB7Y2xvc2VkUmVhc29ufTwvcHJlPlxuXG48ZGl2IGNsYXNzPVwidG9wLWFwcC1iYXItY29udGFpbmVyXCI+XG4gIDxUb3BBcHBCYXIgdmFyaWFudD1cInN0YXRpY1wiPlxuICAgIDxSb3c+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAgPFRpdGxlPlRvcCBBcHAgQmFyPC9UaXRsZT5cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L1Jvdz5cbiAgPC9Ub3BBcHBCYXI+XG4gIDxCYW5uZXJcbiAgICBiaW5kOm9wZW5cbiAgICBiaW5kOmNlbnRlcmVkXG4gICAgYmluZDptb2JpbGVTdGFja2VkXG4gICAgb246TURDQmFubmVyOmNsb3NlZD17KGV2ZW50KSA9PiAoY2xvc2VkUmVhc29uID0gZXZlbnQuZGV0YWlsLnJlYXNvbil9XG4gID5cbiAgICA8TGFiZWwgc2xvdD1cImxhYmVsXCI+VGhpcyBpcyBhIGJhbm5lciB3aXRoIG5vIGljb24gYW5kIHNvbWUgYWN0aW9ucy48L0xhYmVsPlxuICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cImFjdGlvbnNcIj5cbiAgICAgIDxCdXR0b24gc2Vjb25kYXJ5PlNlY29uZGFyeTwvQnV0dG9uPlxuICAgICAgPEJ1dHRvbj5QcmltYXJ5PC9CdXR0b24+XG4gICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gIDwvQmFubmVyPlxuICA8ZGl2PlxuICAgIDxpbWdcbiAgICAgIGFsdD1cIlBhZ2UgY29udGVudCBwbGFjZWhvbGRlclwiXG4gICAgICBzcmM9XCIvcGFnZS1jb250ZW50LmpwZ1wiXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IGJsb2NrOyBtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgbWFyZ2luOiAxZW0gYXV0bztcIlxuICAgIC8+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBCYW5uZXIsIHsgTGFiZWwgfSBmcm9tICdAc211aS9iYW5uZXInO1xuICBpbXBvcnQgQnV0dG9uIGZyb20gJ0BzbXVpL2J1dHRvbic7XG4gIGltcG9ydCBUb3BBcHBCYXIsIHsgUm93LCBTZWN0aW9uLCBUaXRsZSB9IGZyb20gJ0BzbXVpL3RvcC1hcHAtYmFyJztcbiAgaW1wb3J0IENoZWNrYm94IGZyb20gJ0BzbXVpL2NoZWNrYm94JztcbiAgaW1wb3J0IEZvcm1GaWVsZCBmcm9tICdAc211aS9mb3JtLWZpZWxkJztcblxuICBsZXQgb3BlbiA9IGZhbHNlO1xuICBsZXQgY2VudGVyZWQgPSBmYWxzZTtcbiAgbGV0IG1vYmlsZVN0YWNrZWQgPSB0cnVlO1xuXG4gIGxldCBjbG9zZWRSZWFzb24gPSAnTm9uZSB5ZXQuJztcbjwvc2NyaXB0PlxuIiwiPGRpdj5cbiAgPEZvcm1GaWVsZD5cbiAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtvcGVufSAvPlxuICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPk9wZW48L3NwYW4+XG4gIDwvRm9ybUZpZWxkPlxuICA8Rm9ybUZpZWxkPlxuICAgIDxDaGVja2JveCBiaW5kOmNoZWNrZWQ9e2NlbnRlcmVkfSAvPlxuICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPkNlbnRlcmVkPC9zcGFuPlxuICA8L0Zvcm1GaWVsZD5cbiAgPEZvcm1GaWVsZD5cbiAgICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXttb2JpbGVTdGFja2VkfSAvPlxuICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPk1vYmlsZSBTdGFja2VkPC9zcGFuPlxuICA8L0Zvcm1GaWVsZD5cbjwvZGl2PlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+Q2xvc2VkIFJlYXNvbjoge2Nsb3NlZFJlYXNvbn08L3ByZT5cblxuPGRpdiBjbGFzcz1cInRvcC1hcHAtYmFyLWNvbnRhaW5lclwiPlxuICA8VG9wQXBwQmFyIHZhcmlhbnQ9XCJzdGF0aWNcIj5cbiAgICA8Um93PlxuICAgICAgPFNlY3Rpb24+XG4gICAgICAgIDxUaXRsZT5Ub3AgQXBwIEJhcjwvVGl0bGU+XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9Sb3c+XG4gIDwvVG9wQXBwQmFyPlxuICA8QmFubmVyXG4gICAgYmluZDpvcGVuXG4gICAgYmluZDpjZW50ZXJlZFxuICAgIGJpbmQ6bW9iaWxlU3RhY2tlZFxuICAgIG9uOk1EQ0Jhbm5lcjpjbG9zZWQ9eyhldmVudCkgPT4gKGNsb3NlZFJlYXNvbiA9IGV2ZW50LmRldGFpbC5yZWFzb24pfVxuICA+XG4gICAgPEljb24gc2xvdD1cImljb25cIiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZmF2b3JpdGU8L0ljb24+XG4gICAgPExhYmVsIHNsb3Q9XCJsYWJlbFwiPlRoaXMgaXMgYSBiYW5uZXIgd2l0aCBhbiBpY29uIGFuZCBzb21lIGFjdGlvbnMuPC9MYWJlbD5cbiAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJhY3Rpb25zXCI+XG4gICAgICA8QnV0dG9uIHNlY29uZGFyeT5TZWNvbmRhcnk8L0J1dHRvbj5cbiAgICAgIDxCdXR0b24+UHJpbWFyeTwvQnV0dG9uPlxuICAgIDwvc3ZlbHRlOmZyYWdtZW50PlxuICA8L0Jhbm5lcj5cbiAgPGRpdj5cbiAgICA8aW1nXG4gICAgICBhbHQ9XCJQYWdlIGNvbnRlbnQgcGxhY2Vob2xkZXJcIlxuICAgICAgc3JjPVwiL3BhZ2UtY29udGVudC5qcGdcIlxuICAgICAgc3R5bGU9XCJkaXNwbGF5OiBibG9jazsgbWF4LXdpZHRoOiAxMDAlOyBoZWlnaHQ6IGF1dG87IG1hcmdpbjogMWVtIGF1dG87XCJcbiAgICAvPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQmFubmVyLCB7IExhYmVsLCBJY29uIH0gZnJvbSAnQHNtdWkvYmFubmVyJztcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tICdAc211aS9idXR0b24nO1xuICBpbXBvcnQgVG9wQXBwQmFyLCB7IFJvdywgU2VjdGlvbiwgVGl0bGUgfSBmcm9tICdAc211aS90b3AtYXBwLWJhcic7XG4gIGltcG9ydCBDaGVja2JveCBmcm9tICdAc211aS9jaGVja2JveCc7XG4gIGltcG9ydCBGb3JtRmllbGQgZnJvbSAnQHNtdWkvZm9ybS1maWVsZCc7XG5cbiAgbGV0IG9wZW4gPSBmYWxzZTtcbiAgbGV0IGNlbnRlcmVkID0gZmFsc2U7XG4gIGxldCBtb2JpbGVTdGFja2VkID0gdHJ1ZTtcblxuICBsZXQgY2xvc2VkUmVhc29uID0gJ05vbmUgeWV0Lic7XG48L3NjcmlwdD5cbiIsIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkJhbm5lciAtIFNNVUk8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPEZpeGVkIC8+XG5cbjxzZWN0aW9uPlxuICA8aDI+QmFubmVyPC9oMj5cblxuICA8cHJlIGNsYXNzPVwiZGVtby1zcGFjZWRcIj5ucG0gaSAtRCBAc211aS9iYW5uZXI8L3ByZT5cblxuICA8RGVtbyBjb21wb25lbnQ9XCJTaG93biBhYm92ZS5cIiBmaWxlPVwiYmFubmVyL19GaXhlZC5zdmVsdGVcIiAvPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17R2VuZXJhbH0gZmlsZT1cImJhbm5lci9fR2VuZXJhbC5zdmVsdGVcIj5CYW5uZXIgb3B0aW9uczwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0ljb259IGZpbGU9XCJiYW5uZXIvX0ljb24uc3ZlbHRlXCI+QmFubmVyIHdpdGggaWNvbjwvRGVtbz5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZW1vLnN2ZWx0ZSc7XG4gIGltcG9ydCBGaXhlZCBmcm9tICcuL19GaXhlZC5zdmVsdGUnO1xuICBpbXBvcnQgR2VuZXJhbCBmcm9tICcuL19HZW5lcmFsLnN2ZWx0ZSc7XG4gIGltcG9ydCBJY29uIGZyb20gJy4vX0ljb24uc3ZlbHRlJztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICogOmdsb2JhbCgudG9wLWFwcC1iYXItY29udGFpbmVyKSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDI0cHgpO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWRcbiAgICAgIHZhcigtLW1kYy10aGVtZS10ZXh0LWhpbnQtb24tYmFja2dyb3VuZCwgcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgICBtYXJnaW46IDAgMThweCAxOHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLWJhY2tncm91bmQsICNmZmYpO1xuXG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbIkljb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFD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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQ0FRLEdBQUk7b0NBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUlKLEdBQVE7d0NBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUlSLEdBQWE7NkNBQWIsR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpREFBYixHQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUtMLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FBWixHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpRkFBWixHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0MxQyxJQUFJLEdBQUcsS0FBSztLQUNaLFFBQVEsR0FBRyxLQUFLO0tBQ2hCLGFBQWEsR0FBRyxJQUFJO0tBRXBCLFlBQVksR0FBRyxXQUFXOzs7Ozs7OztFQXZESixJQUFJOzs7OztFQUlKLFFBQVE7Ozs7O0VBSVIsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FtQmYsS0FBSyxvQkFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NDM0IzQyxHQUFJO29DQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0NBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFJSixHQUFRO3dDQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFJUixHQUFhOzZDQUFiLEdBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aURBQWIsR0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBS0wsR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUFaLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lGQUFaLEdBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1QzFDLElBQUksR0FBRyxLQUFLO0tBQ1osUUFBUSxHQUFHLEtBQUs7S0FDaEIsYUFBYSxHQUFHLElBQUk7S0FFcEIsWUFBWSxHQUFHLFdBQVc7Ozs7Ozs7O0VBeERKLElBQUk7Ozs7O0VBSUosUUFBUTs7Ozs7RUFJUixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQW1CZixLQUFLLG9CQUFNLFlBQVksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUNoQnBELE9BQU87Ozs7Ozs7Ozs7ZUFFUEEsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
