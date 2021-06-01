import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a7 as create_slot, $ as assign, W as compute_rest_props, v as validate_slots, Y as get_current_component, a0 as exclude_internal_props, p as element, x as claim_element, y as children, u as detach_dev, a9 as set_attributes, D as add_location, F as insert_dev, aa as action_destroyer, a8 as update_slot, a2 as get_spread_update, ab as is_function, J as transition_in, K as transition_out, ac as run_all, a6 as binding_callbacks, ah as onMount, G as append_dev, aF as globals, X as getContext, Z as setContext, q as create_component, a1 as empty, A as claim_component, H as mount_component, a3 as get_spread_object, a4 as group_outros, M as destroy_component, a5 as check_outros, o as space, w as claim_space, E as attr_dev, N as svg_element, ai as set_svg_attributes, ax as listen_dev, ag as validate_each_argument, aC as validate_each_keys, aD as update_keyed_each, aE as outro_and_destroy_block, ak as bind, t as text, z as claim_text, B as set_style, al as add_flush_callback, aw as set_data_dev, aj as destroy_each, O as noop, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { R as Ripple } from './Ripple.3a4e2bc3.js';
import { B as Button_1 } from './Button.d66ce348.js';

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

var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics$1(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
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
var MDCFoundation$1 = /** @class */ (function () {
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
var cssClasses$2 = {
    ACTIVE: 'mdc-tab-indicator--active',
    FADE: 'mdc-tab-indicator--fade',
    NO_TRANSITION: 'mdc-tab-indicator--no-transition',
};
var strings$3 = {
    CONTENT_SELECTOR: '.mdc-tab-indicator__content',
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
var MDCTabIndicatorFoundation = /** @class */ (function (_super) {
    __extends$1(MDCTabIndicatorFoundation, _super);
    function MDCTabIndicatorFoundation(adapter) {
        return _super.call(this, __assign$1(__assign$1({}, MDCTabIndicatorFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTabIndicatorFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "strings", {
        get: function () {
            return strings$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabIndicatorFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                computeContentClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                setContentStyleProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTabIndicatorFoundation.prototype.computeContentClientRect = function () {
        return this.adapter.computeContentClientRect();
    };
    return MDCTabIndicatorFoundation;
}(MDCFoundation$1));

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
/* istanbul ignore next: subclass is not a branch statement */
var MDCFadingTabIndicatorFoundation = /** @class */ (function (_super) {
    __extends$1(MDCFadingTabIndicatorFoundation, _super);
    function MDCFadingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFadingTabIndicatorFoundation.prototype.activate = function () {
        this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    MDCFadingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    return MDCFadingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation));

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
/* istanbul ignore next: subclass is not a branch statement */
var MDCSlidingTabIndicatorFoundation = /** @class */ (function (_super) {
    __extends$1(MDCSlidingTabIndicatorFoundation, _super);
    function MDCSlidingTabIndicatorFoundation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSlidingTabIndicatorFoundation.prototype.activate = function (previousIndicatorClientRect) {
        // Early exit if no indicator is present to handle cases where an indicator
        // may be activated without a prior indicator state
        if (!previousIndicatorClientRect) {
            this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
            return;
        }
        // This animation uses the FLIP approach. You can read more about it at the link below:
        // https://aerotwist.com/blog/flip-your-animations/
        // Calculate the dimensions based on the dimensions of the previous indicator
        var currentClientRect = this.computeContentClientRect();
        var widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
        var xPosition = previousIndicatorClientRect.left - currentClientRect.left;
        this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter.setContentStyleProperty('transform', "translateX(" + xPosition + "px) scaleX(" + widthDelta + ")");
        // Force repaint before updating classes and transform to ensure the transform properly takes effect
        this.computeContentClientRect();
        this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.NO_TRANSITION);
        this.adapter.addClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
        this.adapter.setContentStyleProperty('transform', '');
    };
    MDCSlidingTabIndicatorFoundation.prototype.deactivate = function () {
        this.adapter.removeClass(MDCTabIndicatorFoundation.cssClasses.ACTIVE);
    };
    return MDCSlidingTabIndicatorFoundation;
}(MDCTabIndicatorFoundation));

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
var cssClasses$1 = {
    ACTIVE: 'mdc-tab--active',
};
var strings$2 = {
    ARIA_SELECTED: 'aria-selected',
    CONTENT_SELECTOR: '.mdc-tab__content',
    INTERACTED_EVENT: 'MDCTab:interacted',
    RIPPLE_SELECTOR: '.mdc-tab__ripple',
    TABINDEX: 'tabIndex',
    TAB_INDICATOR_SELECTOR: '.mdc-tab-indicator',
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
var MDCTabFoundation = /** @class */ (function (_super) {
    __extends$1(MDCTabFoundation, _super);
    function MDCTabFoundation(adapter) {
        var _this = _super.call(this, __assign$1(__assign$1({}, MDCTabFoundation.defaultAdapter), adapter)) || this;
        _this.focusOnActivate_ = true;
        return _this;
    }
    Object.defineProperty(MDCTabFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                activateIndicator: function () { return undefined; },
                deactivateIndicator: function () { return undefined; },
                notifyInteracted: function () { return undefined; },
                getOffsetLeft: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                getContentOffsetLeft: function () { return 0; },
                getContentOffsetWidth: function () { return 0; },
                focus: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTabFoundation.prototype.handleClick = function () {
        // It's up to the parent component to keep track of the active Tab and
        // ensure we don't activate a Tab that's already active.
        this.adapter.notifyInteracted();
    };
    MDCTabFoundation.prototype.isActive = function () {
        return this.adapter.hasClass(cssClasses$1.ACTIVE);
    };
    /**
     * Sets whether the tab should focus itself when activated
     */
    MDCTabFoundation.prototype.setFocusOnActivate = function (focusOnActivate) {
        this.focusOnActivate_ = focusOnActivate;
    };
    /**
     * Activates the Tab
     */
    MDCTabFoundation.prototype.activate = function (previousIndicatorClientRect) {
        this.adapter.addClass(cssClasses$1.ACTIVE);
        this.adapter.setAttr(strings$2.ARIA_SELECTED, 'true');
        this.adapter.setAttr(strings$2.TABINDEX, '0');
        this.adapter.activateIndicator(previousIndicatorClientRect);
        if (this.focusOnActivate_) {
            this.adapter.focus();
        }
    };
    /**
     * Deactivates the Tab
     */
    MDCTabFoundation.prototype.deactivate = function () {
        // Early exit
        if (!this.isActive()) {
            return;
        }
        this.adapter.removeClass(cssClasses$1.ACTIVE);
        this.adapter.setAttr(strings$2.ARIA_SELECTED, 'false');
        this.adapter.setAttr(strings$2.TABINDEX, '-1');
        this.adapter.deactivateIndicator();
    };
    /**
     * Returns the dimensions of the Tab
     */
    MDCTabFoundation.prototype.computeDimensions = function () {
        var rootWidth = this.adapter.getOffsetWidth();
        var rootLeft = this.adapter.getOffsetLeft();
        var contentWidth = this.adapter.getContentOffsetWidth();
        var contentLeft = this.adapter.getContentOffsetLeft();
        return {
            contentLeft: rootLeft + contentLeft,
            contentRight: rootLeft + contentLeft + contentWidth,
            rootLeft: rootLeft,
            rootRight: rootLeft + rootWidth,
        };
    };
    return MDCTabFoundation;
}(MDCFoundation$1));

// Match modifiers on DOM events.
const oldModifierRegex$1 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
// Match modifiers on other events.
const newModifierRegex$1 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;

function forwardEventsBuilder$1(component) {
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
    const oldModifierMatch = eventType.match(oldModifierRegex$1);
    const newModifierMatch = eventType.match(newModifierRegex$1);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$1);
      const newModifierMatch = eventType.match(newModifierRegex$1);
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

function classMap$1(classObj) {
  return Object.entries(classObj)
    .filter(([name, value]) => name !== '' && value)
    .map(([name]) => name)
    .join(' ');
}

function dispatch$1(
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

function exclude$1(obj, keys) {
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

function prefixFilter$1(obj, prefix) {
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

function useActions$1(node, actions) {
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

/* packages/tab/node_modules/@smui/common/A.svelte generated by Svelte v3.37.0 */
const file$g = "packages/tab/node_modules/@smui/common/A.svelte";

function create_fragment$i(ctx) {
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
			add_location(a, file$g, 0, 0, 0);
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
					action_destroyer(useActions_action = useActions$1.call(null, a, /*use*/ ctx[1])),
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
		id: create_fragment$i.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$e($$self, $$props, $$invalidate) {
	const omit_props_names = ["href","use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("A", slots, ['default']);
	let { href = "javascript:void(0);" } = $$props;
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
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
		forwardEventsBuilder: forwardEventsBuilder$1,
		useActions: useActions$1,
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
		init(this, options, instance$e, create_fragment$i, safe_not_equal, { href: 0, use: 1, getElement: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "A",
			options,
			id: create_fragment$i.name
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

/* packages/tab/node_modules/@smui/common/Button.svelte generated by Svelte v3.37.0 */
const file$f = "packages/tab/node_modules/@smui/common/Button.svelte";

function create_fragment$h(ctx) {
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
			add_location(button, file$f, 0, 0, 0);
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
					action_destroyer(useActions_action = useActions$1.call(null, button, /*use*/ ctx[0])),
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
		id: create_fragment$h.name,
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
	validate_slots("Button", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
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
		forwardEventsBuilder: forwardEventsBuilder$1,
		useActions: useActions$1,
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
		init(this, options, instance$d, create_fragment$h, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Button",
			options,
			id: create_fragment$h.name
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

/* packages/tab/node_modules/@smui/tab-indicator/TabIndicator.svelte generated by Svelte v3.37.0 */

const file$e = "packages/tab/node_modules/@smui/tab-indicator/TabIndicator.svelte";

function create_fragment$g(ctx) {
	let span1;
	let span0;
	let span0_class_value;
	let span0_style_value;
	let span0_aria_hidden_value;
	let useActions_action;
	let span1_class_value;
	let useActions_action_1;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[21].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[20], null);

	let span0_levels = [
		{
			class: span0_class_value = classMap$1({
				[/*content$class*/ ctx[6]]: true,
				"mdc-tab-indicator__content": true,
				"mdc-tab-indicator__content--underline": /*type*/ ctx[3] === "underline",
				"mdc-tab-indicator__content--icon": /*type*/ ctx[3] === "icon"
			})
		},
		{
			style: span0_style_value = Object.entries(/*contentStyles*/ ctx[10]).map(func$4).join(" ")
		},
		{
			"aria-hidden": span0_aria_hidden_value = /*type*/ ctx[3] === "icon" ? "true" : null
		},
		prefixFilter$1(/*$$restProps*/ ctx[12], "content$")
	];

	let span0_data = {};

	for (let i = 0; i < span0_levels.length; i += 1) {
		span0_data = assign(span0_data, span0_levels[i]);
	}

	let span1_levels = [
		{
			class: span1_class_value = classMap$1({
				[/*className*/ ctx[2]]: true,
				"mdc-tab-indicator": true,
				"mdc-tab-indicator--active": /*active*/ ctx[0],
				"mdc-tab-indicator--fade": /*transition*/ ctx[4] === "fade",
				.../*internalClasses*/ ctx[9]
			})
		},
		exclude$1(/*$$restProps*/ ctx[12], ["content$"])
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
			span1 = claim_element(nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);

			span0 = claim_element(span1_nodes, "SPAN", {
				class: true,
				style: true,
				"aria-hidden": true
			});

			var span0_nodes = children(span0);
			if (default_slot) default_slot.l(span0_nodes);
			span0_nodes.forEach(detach_dev);
			span1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(span0, span0_data);
			add_location(span0, file$e, 13, 2, 316);
			set_attributes(span1, span1_data);
			add_location(span1, file$e, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span1, anchor);
			append_dev(span1, span0);

			if (default_slot) {
				default_slot.m(span0, null);
			}

			/*span0_binding*/ ctx[22](span0);
			/*span1_binding*/ ctx[23](span1);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions$1.call(null, span0, /*content$use*/ ctx[5])),
					action_destroyer(useActions_action_1 = useActions$1.call(null, span1, /*use*/ ctx[1])),
					action_destroyer(/*forwardEvents*/ ctx[11].call(null, span1))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1048576) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[20], dirty, null, null);
				}
			}

			set_attributes(span0, span0_data = get_spread_update(span0_levels, [
				(!current || dirty & /*content$class, type*/ 72 && span0_class_value !== (span0_class_value = classMap$1({
					[/*content$class*/ ctx[6]]: true,
					"mdc-tab-indicator__content": true,
					"mdc-tab-indicator__content--underline": /*type*/ ctx[3] === "underline",
					"mdc-tab-indicator__content--icon": /*type*/ ctx[3] === "icon"
				}))) && { class: span0_class_value },
				(!current || dirty & /*contentStyles*/ 1024 && span0_style_value !== (span0_style_value = Object.entries(/*contentStyles*/ ctx[10]).map(func$4).join(" "))) && { style: span0_style_value },
				(!current || dirty & /*type*/ 8 && span0_aria_hidden_value !== (span0_aria_hidden_value = /*type*/ ctx[3] === "icon" ? "true" : null)) && { "aria-hidden": span0_aria_hidden_value },
				dirty & /*$$restProps*/ 4096 && prefixFilter$1(/*$$restProps*/ ctx[12], "content$")
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*content$use*/ 32) useActions_action.update.call(null, /*content$use*/ ctx[5]);

			set_attributes(span1, span1_data = get_spread_update(span1_levels, [
				(!current || dirty & /*className, active, transition, internalClasses*/ 533 && span1_class_value !== (span1_class_value = classMap$1({
					[/*className*/ ctx[2]]: true,
					"mdc-tab-indicator": true,
					"mdc-tab-indicator--active": /*active*/ ctx[0],
					"mdc-tab-indicator--fade": /*transition*/ ctx[4] === "fade",
					.../*internalClasses*/ ctx[9]
				}))) && { class: span1_class_value },
				dirty & /*$$restProps*/ 4096 && exclude$1(/*$$restProps*/ ctx[12], ["content$"])
			]));

			if (useActions_action_1 && is_function(useActions_action_1.update) && dirty & /*use*/ 2) useActions_action_1.update.call(null, /*use*/ ctx[1]);
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
			/*span0_binding*/ ctx[22](null);
			/*span1_binding*/ ctx[23](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$g.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const func$4 = ([name, value]) => `${name}: ${value};`;

function instance_1$3($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","active","type","transition","content$use","content$class","activate","deactivate","computeContentClientRect","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("TabIndicator", slots, ['default']);
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { active = false } = $$props;
	let { type = "underline" } = $$props;
	let { transition = "slide" } = $$props;
	let { content$use = [] } = $$props;
	let { content$class = "" } = $$props;
	let element;
	let instance;
	let content;
	let internalClasses = {};
	let contentStyles = {};
	let changeSets = [];
	let oldTransition = transition;

	onMount(() => {
		$$invalidate(17, instance = getInstance());
		instance.init();

		return () => {
			instance.destroy();
		};
	});

	function getInstance() {
		const Foundation = ({
			fade: MDCFadingTabIndicatorFoundation,
			slide: MDCSlidingTabIndicatorFoundation
		})[transition] || MDCSlidingTabIndicatorFoundation;

		return Foundation
		? new Foundation({
					addClass: (...props) => doChange(() => addClass(...props)),
					removeClass: (...props) => doChange(() => removeClass(...props)),
					computeContentClientRect,
					setContentStyleProperty: (...props) => doChange(() => addContentStyle(...props))
				})
		: undefined;
	}

	function doChange(fn) {
		if (changeSets.length) {
			changeSets[changeSets.length - 1].push(fn);
		} else {
			fn();
		}
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

	function addContentStyle(name, value) {
		if (contentStyles[name] != value) {
			if (value === "" || value == null) {
				delete contentStyles[name];
				((($$invalidate(10, contentStyles), $$invalidate(19, oldTransition)), $$invalidate(4, transition)), $$invalidate(17, instance));
			} else {
				$$invalidate(10, contentStyles[name] = value, contentStyles);
			}
		}
	}

	function activate(previousIndicatorClientRect) {
		$$invalidate(0, active = true);
		instance.activate(previousIndicatorClientRect);
	}

	function deactivate() {
		$$invalidate(0, active = false);
		instance.deactivate();
	}

	function computeContentClientRect() {
		changeSets.push([]);
		$$invalidate(18, changeSets);
		return content.getBoundingClientRect();
	}

	function getElement() {
		return element;
	}

	function span0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			content = $$value;
			$$invalidate(8, content);
		});
	}

	function span1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(2, className = $$new_props.class);
		if ("active" in $$new_props) $$invalidate(0, active = $$new_props.active);
		if ("type" in $$new_props) $$invalidate(3, type = $$new_props.type);
		if ("transition" in $$new_props) $$invalidate(4, transition = $$new_props.transition);
		if ("content$use" in $$new_props) $$invalidate(5, content$use = $$new_props.content$use);
		if ("content$class" in $$new_props) $$invalidate(6, content$class = $$new_props.content$class);
		if ("$$scope" in $$new_props) $$invalidate(20, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCFadingTabIndicatorFoundation,
		MDCSlidingTabIndicatorFoundation,
		onMount,
		get_current_component,
		forwardEventsBuilder: forwardEventsBuilder$1,
		classMap: classMap$1,
		exclude: exclude$1,
		prefixFilter: prefixFilter$1,
		useActions: useActions$1,
		forwardEvents,
		use,
		className,
		active,
		type,
		transition,
		content$use,
		content$class,
		element,
		instance,
		content,
		internalClasses,
		contentStyles,
		changeSets,
		oldTransition,
		getInstance,
		doChange,
		addClass,
		removeClass,
		addContentStyle,
		activate,
		deactivate,
		computeContentClientRect,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(2, className = $$new_props.className);
		if ("active" in $$props) $$invalidate(0, active = $$new_props.active);
		if ("type" in $$props) $$invalidate(3, type = $$new_props.type);
		if ("transition" in $$props) $$invalidate(4, transition = $$new_props.transition);
		if ("content$use" in $$props) $$invalidate(5, content$use = $$new_props.content$use);
		if ("content$class" in $$props) $$invalidate(6, content$class = $$new_props.content$class);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(17, instance = $$new_props.instance);
		if ("content" in $$props) $$invalidate(8, content = $$new_props.content);
		if ("internalClasses" in $$props) $$invalidate(9, internalClasses = $$new_props.internalClasses);
		if ("contentStyles" in $$props) $$invalidate(10, contentStyles = $$new_props.contentStyles);
		if ("changeSets" in $$props) $$invalidate(18, changeSets = $$new_props.changeSets);
		if ("oldTransition" in $$props) $$invalidate(19, oldTransition = $$new_props.oldTransition);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*oldTransition, transition, instance*/ 655376) {
			if (oldTransition !== transition) {
				$$invalidate(19, oldTransition = transition);
				instance && instance.destroy();
				$$invalidate(9, internalClasses = {});
				$$invalidate(10, contentStyles = {});
				$$invalidate(17, instance = getInstance());
				instance.init();
			}
		}

		if ($$self.$$.dirty & /*changeSets*/ 262144) {
			// Use sets of changes for DOM updates, to facilitate animations.
			if (changeSets.length) {
				requestAnimationFrame(() => {
					const changeSet = changeSets.shift();
					$$invalidate(18, changeSets);

					for (const fn of changeSet) {
						fn();
					}
				});
			}
		}
	};

	return [
		active,
		use,
		className,
		type,
		transition,
		content$use,
		content$class,
		element,
		content,
		internalClasses,
		contentStyles,
		forwardEvents,
		$$restProps,
		activate,
		deactivate,
		computeContentClientRect,
		getElement,
		instance,
		changeSets,
		oldTransition,
		$$scope,
		slots,
		span0_binding,
		span1_binding
	];
}

class TabIndicator extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1$3, create_fragment$g, safe_not_equal, {
			use: 1,
			class: 2,
			active: 0,
			type: 3,
			transition: 4,
			content$use: 5,
			content$class: 6,
			activate: 13,
			deactivate: 14,
			computeContentClientRect: 15,
			getElement: 16
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TabIndicator",
			options,
			id: create_fragment$g.name
		});
	}

	get use() {
		throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get active() {
		throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set active(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get type() {
		throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set type(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get transition() {
		throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set transition(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get content$use() {
		throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set content$use(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get content$class() {
		throw new Error("<TabIndicator>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set content$class(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get activate() {
		return this.$$.ctx[13];
	}

	set activate(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get deactivate() {
		return this.$$.ctx[14];
	}

	set deactivate(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get computeContentClientRect() {
		return this.$$.ctx[15];
	}

	set computeContentClientRect(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[16];
	}

	set getElement(value) {
		throw new Error("<TabIndicator>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/tab/Tab.svelte generated by Svelte v3.37.0 */

const { Error: Error_1 } = globals;
const file$d = "packages/tab/Tab.svelte";
const get_tab_indicator_slot_changes_1 = dirty => ({});
const get_tab_indicator_slot_context_1 = ctx => ({});
const get_tab_indicator_slot_changes = dirty => ({});
const get_tab_indicator_slot_context = ctx => ({});

// (48:4) {#if indicatorSpanOnlyContent}
function create_if_block_1(ctx) {
	let tabindicator;
	let current;

	const tabindicator_spread_levels = [
		{ active: /*active*/ ctx[18] },
		prefixFilter$1(/*$$restProps*/ ctx[24], "tabIndicator$")
	];

	let tabindicator_props = {
		$$slots: { default: [create_default_slot_2$8] },
		$$scope: { ctx }
	};

	for (let i = 0; i < tabindicator_spread_levels.length; i += 1) {
		tabindicator_props = assign(tabindicator_props, tabindicator_spread_levels[i]);
	}

	tabindicator = new TabIndicator({
			props: tabindicator_props,
			$$inline: true
		});

	/*tabindicator_binding*/ ctx[31](tabindicator);

	const block = {
		c: function create() {
			create_component(tabindicator.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tabindicator.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tabindicator, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tabindicator_changes = (dirty[0] & /*active, $$restProps*/ 17039360)
			? get_spread_update(tabindicator_spread_levels, [
					dirty[0] & /*active*/ 262144 && { active: /*active*/ ctx[18] },
					dirty[0] & /*$$restProps*/ 16777216 && get_spread_object(prefixFilter$1(/*$$restProps*/ ctx[24], "tabIndicator$"))
				])
			: {};

			if (dirty[1] & /*$$scope*/ 16) {
				tabindicator_changes.$$scope = { dirty, ctx };
			}

			tabindicator.$set(tabindicator_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabindicator.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tabindicator.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*tabindicator_binding*/ ctx[31](null);
			destroy_component(tabindicator, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(48:4) {#if indicatorSpanOnlyContent}",
		ctx
	});

	return block;
}

// (49:6) <TabIndicator         bind:this={tabIndicator}         {active}         {...prefixFilter($$restProps, 'tabIndicator$')}         >
function create_default_slot_2$8(ctx) {
	let current;
	const tab_indicator_slot_template = /*#slots*/ ctx[30]["tab-indicator"];
	const tab_indicator_slot = create_slot(tab_indicator_slot_template, ctx, /*$$scope*/ ctx[35], get_tab_indicator_slot_context);

	const block = {
		c: function create() {
			if (tab_indicator_slot) tab_indicator_slot.c();
		},
		l: function claim(nodes) {
			if (tab_indicator_slot) tab_indicator_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (tab_indicator_slot) {
				tab_indicator_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (tab_indicator_slot) {
				if (tab_indicator_slot.p && dirty[1] & /*$$scope*/ 16) {
					update_slot(tab_indicator_slot, tab_indicator_slot_template, ctx, /*$$scope*/ ctx[35], dirty, get_tab_indicator_slot_changes, get_tab_indicator_slot_context);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tab_indicator_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tab_indicator_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (tab_indicator_slot) tab_indicator_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$8.name,
		type: "slot",
		source: "(49:6) <TabIndicator         bind:this={tabIndicator}         {active}         {...prefixFilter($$restProps, 'tabIndicator$')}         >",
		ctx
	});

	return block;
}

// (57:2) {#if !indicatorSpanOnlyContent}
function create_if_block(ctx) {
	let tabindicator;
	let current;

	const tabindicator_spread_levels = [
		{ active: /*active*/ ctx[18] },
		prefixFilter$1(/*$$restProps*/ ctx[24], "tabIndicator$")
	];

	let tabindicator_props = {
		$$slots: { default: [create_default_slot_1$8] },
		$$scope: { ctx }
	};

	for (let i = 0; i < tabindicator_spread_levels.length; i += 1) {
		tabindicator_props = assign(tabindicator_props, tabindicator_spread_levels[i]);
	}

	tabindicator = new TabIndicator({
			props: tabindicator_props,
			$$inline: true
		});

	/*tabindicator_binding_1*/ ctx[33](tabindicator);

	const block = {
		c: function create() {
			create_component(tabindicator.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tabindicator.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tabindicator, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tabindicator_changes = (dirty[0] & /*active, $$restProps*/ 17039360)
			? get_spread_update(tabindicator_spread_levels, [
					dirty[0] & /*active*/ 262144 && { active: /*active*/ ctx[18] },
					dirty[0] & /*$$restProps*/ 16777216 && get_spread_object(prefixFilter$1(/*$$restProps*/ ctx[24], "tabIndicator$"))
				])
			: {};

			if (dirty[1] & /*$$scope*/ 16) {
				tabindicator_changes.$$scope = { dirty, ctx };
			}

			tabindicator.$set(tabindicator_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabindicator.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tabindicator.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*tabindicator_binding_1*/ ctx[33](null);
			destroy_component(tabindicator, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(57:2) {#if !indicatorSpanOnlyContent}",
		ctx
	});

	return block;
}

// (58:4) <TabIndicator       bind:this={tabIndicator}       {active}       {...prefixFilter($$restProps, 'tabIndicator$')}       >
function create_default_slot_1$8(ctx) {
	let current;
	const tab_indicator_slot_template = /*#slots*/ ctx[30]["tab-indicator"];
	const tab_indicator_slot = create_slot(tab_indicator_slot_template, ctx, /*$$scope*/ ctx[35], get_tab_indicator_slot_context_1);

	const block = {
		c: function create() {
			if (tab_indicator_slot) tab_indicator_slot.c();
		},
		l: function claim(nodes) {
			if (tab_indicator_slot) tab_indicator_slot.l(nodes);
		},
		m: function mount(target, anchor) {
			if (tab_indicator_slot) {
				tab_indicator_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (tab_indicator_slot) {
				if (tab_indicator_slot.p && dirty[1] & /*$$scope*/ 16) {
					update_slot(tab_indicator_slot, tab_indicator_slot_template, ctx, /*$$scope*/ ctx[35], dirty, get_tab_indicator_slot_changes_1, get_tab_indicator_slot_context_1);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tab_indicator_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tab_indicator_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (tab_indicator_slot) tab_indicator_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$8.name,
		type: "slot",
		source: "(58:4) <TabIndicator       bind:this={tabIndicator}       {active}       {...prefixFilter($$restProps, 'tabIndicator$')}       >",
		ctx
	});

	return block;
}

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-tab': true,     'mdc-tab--active': active,     'mdc-tab--stacked': stacked,     'mdc-tab--min-width': minWidth,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   role="tab"   aria-selected={active ? 'true' : 'false'}   tabindex={active || forceAccessible ? '0' : '-1'}   {href}   on:click={instance && instance.handleClick()}   {...internalAttrs}   {...exclude($$restProps, ['content$', 'tabIndicator$'])} >
function create_default_slot$b(ctx) {
	let span0;
	let t0;
	let span0_class_value;
	let useActions_action;
	let t1;
	let t2;
	let span1;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[30].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[35], null);
	let if_block0 = /*indicatorSpanOnlyContent*/ ctx[6] && create_if_block_1(ctx);

	let span0_levels = [
		{
			class: span0_class_value = classMap$1({
				[/*content$class*/ ctx[9]]: true,
				"mdc-tab__content": true
			})
		},
		prefixFilter$1(/*$$restProps*/ ctx[24], "content$")
	];

	let span0_data = {};

	for (let i = 0; i < span0_levels.length; i += 1) {
		span0_data = assign(span0_data, span0_levels[i]);
	}

	let if_block1 = !/*indicatorSpanOnlyContent*/ ctx[6] && create_if_block(ctx);

	const block = {
		c: function create() {
			span0 = element("span");
			if (default_slot) default_slot.c();
			t0 = space();
			if (if_block0) if_block0.c();
			t1 = space();
			if (if_block1) if_block1.c();
			t2 = space();
			span1 = element("span");
			this.h();
		},
		l: function claim(nodes) {
			span0 = claim_element(nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			if (default_slot) default_slot.l(span0_nodes);
			t0 = claim_space(span0_nodes);
			if (if_block0) if_block0.l(span0_nodes);
			span0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			t2 = claim_space(nodes);
			span1 = claim_element(nodes, "SPAN", { class: true });
			children(span1).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(span0, span0_data);
			add_location(span0, file$d, 37, 2, 818);
			attr_dev(span1, "class", "mdc-tab__ripple");
			add_location(span1, file$d, 64, 2, 1497);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span0, anchor);

			if (default_slot) {
				default_slot.m(span0, null);
			}

			append_dev(span0, t0);
			if (if_block0) if_block0.m(span0, null);
			/*span0_binding*/ ctx[32](span0);
			insert_dev(target, t1, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, span1, anchor);
			current = true;

			if (!mounted) {
				dispose = action_destroyer(useActions_action = useActions$1.call(null, span0, /*content$use*/ ctx[8]));
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[1] & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[35], dirty, null, null);
				}
			}

			if (/*indicatorSpanOnlyContent*/ ctx[6]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty[0] & /*indicatorSpanOnlyContent*/ 64) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(span0, null);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			set_attributes(span0, span0_data = get_spread_update(span0_levels, [
				(!current || dirty[0] & /*content$class*/ 512 && span0_class_value !== (span0_class_value = classMap$1({
					[/*content$class*/ ctx[9]]: true,
					"mdc-tab__content": true
				}))) && { class: span0_class_value },
				dirty[0] & /*$$restProps*/ 16777216 && prefixFilter$1(/*$$restProps*/ ctx[24], "content$")
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*content$use*/ 256) useActions_action.update.call(null, /*content$use*/ ctx[8]);

			if (!/*indicatorSpanOnlyContent*/ ctx[6]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty[0] & /*indicatorSpanOnlyContent*/ 64) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(t2.parentNode, t2);
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
			transition_in(default_slot, local);
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span0);
			if (default_slot) default_slot.d(detaching);
			if (if_block0) if_block0.d();
			/*span0_binding*/ ctx[32](null);
			if (detaching) detach_dev(t1);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(span1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$b.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[     [       Ripple,       {         ripple,         unbounded: false,         addClass,         removeClass,         addStyle,       },     ],     forwardEvents,     ...use,   ]}   class={classMap({     [className]: true,     'mdc-tab': true,     'mdc-tab--active': active,     'mdc-tab--stacked': stacked,     'mdc-tab--min-width': minWidth,     ...internalClasses,   })}   style={Object.entries(internalStyles)     .map(([name, value]) => `${name}: ${value};`)     .concat([style])     .join(' ')}   role=\\\"tab\\\"   aria-selected={active ? 'true' : 'false'}   tabindex={active || forceAccessible ? '0' : '-1'}   {href}   on:click={instance && instance.handleClick()}   {...internalAttrs}   {...exclude($$restProps, ['content$', 'tabIndicator$'])} >",
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
			use: [
				[
					Ripple,
					{
						ripple: /*ripple*/ ctx[3],
						unbounded: false,
						addClass: /*addClass*/ ctx[21],
						removeClass: /*removeClass*/ ctx[22],
						addStyle: /*addStyle*/ ctx[23]
					}
				],
				/*forwardEvents*/ ctx[20],
				.../*use*/ ctx[0]
			]
		},
		{
			class: classMap$1({
				[/*className*/ ctx[1]]: true,
				"mdc-tab": true,
				"mdc-tab--active": /*active*/ ctx[18],
				"mdc-tab--stacked": /*stacked*/ ctx[4],
				"mdc-tab--min-width": /*minWidth*/ ctx[5],
				.../*internalClasses*/ ctx[15]
			})
		},
		{
			style: Object.entries(/*internalStyles*/ ctx[16]).map(func$3).concat([/*style*/ ctx[2]]).join(" ")
		},
		{ role: "tab" },
		{
			"aria-selected": /*active*/ ctx[18] ? "true" : "false"
		},
		{
			tabindex: /*active*/ ctx[18] || /*forceAccessible*/ ctx[19]
			? "0"
			: "-1"
		},
		{ href: /*href*/ ctx[7] },
		/*internalAttrs*/ ctx[17],
		exclude$1(/*$$restProps*/ ctx[24], ["content$", "tabIndicator$"])
	];

	var switch_value = /*component*/ ctx[10];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: { default: [create_default_slot$b] },
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
		/*switch_instance_binding*/ ctx[34](switch_instance);

		switch_instance.$on("click", function () {
			if (is_function(/*instance*/ ctx[11] && /*instance*/ ctx[11].handleClick())) (/*instance*/ ctx[11] && /*instance*/ ctx[11].handleClick()).apply(this, arguments);
		});
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
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			const switch_instance_changes = (dirty[0] & /*ripple, addClass, removeClass, addStyle, forwardEvents, use, className, active, stacked, minWidth, internalClasses, internalStyles, style, forceAccessible, href, internalAttrs, $$restProps*/ 33521855)
			? get_spread_update(switch_instance_spread_levels, [
					dirty[0] & /*ripple, addClass, removeClass, addStyle, forwardEvents, use*/ 15728649 && {
						use: [
							[
								Ripple,
								{
									ripple: /*ripple*/ ctx[3],
									unbounded: false,
									addClass: /*addClass*/ ctx[21],
									removeClass: /*removeClass*/ ctx[22],
									addStyle: /*addStyle*/ ctx[23]
								}
							],
							/*forwardEvents*/ ctx[20],
							.../*use*/ ctx[0]
						]
					},
					dirty[0] & /*className, active, stacked, minWidth, internalClasses*/ 294962 && {
						class: classMap$1({
							[/*className*/ ctx[1]]: true,
							"mdc-tab": true,
							"mdc-tab--active": /*active*/ ctx[18],
							"mdc-tab--stacked": /*stacked*/ ctx[4],
							"mdc-tab--min-width": /*minWidth*/ ctx[5],
							.../*internalClasses*/ ctx[15]
						})
					},
					dirty[0] & /*internalStyles, style*/ 65540 && {
						style: Object.entries(/*internalStyles*/ ctx[16]).map(func$3).concat([/*style*/ ctx[2]]).join(" ")
					},
					switch_instance_spread_levels[3],
					dirty[0] & /*active*/ 262144 && {
						"aria-selected": /*active*/ ctx[18] ? "true" : "false"
					},
					dirty[0] & /*active, forceAccessible*/ 786432 && {
						tabindex: /*active*/ ctx[18] || /*forceAccessible*/ ctx[19]
						? "0"
						: "-1"
					},
					dirty[0] & /*href*/ 128 && { href: /*href*/ ctx[7] },
					dirty[0] & /*internalAttrs*/ 131072 && get_spread_object(/*internalAttrs*/ ctx[17]),
					dirty[0] & /*$$restProps*/ 16777216 && get_spread_object(exclude$1(/*$$restProps*/ ctx[24], ["content$", "tabIndicator$"]))
				])
			: {};

			if (dirty[0] & /*active, $$restProps, tabIndicator, indicatorSpanOnlyContent, content$class, content, content$use*/ 17064768 | dirty[1] & /*$$scope*/ 16) {
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
					/*switch_instance_binding*/ ctx[34](switch_instance);

					switch_instance.$on("click", function () {
						if (is_function(/*instance*/ ctx[11] && /*instance*/ ctx[11].handleClick())) (/*instance*/ ctx[11] && /*instance*/ ctx[11].handleClick()).apply(this, arguments);
					});

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
			/*switch_instance_binding*/ ctx[34](null);
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

const func$3 = ([name, value]) => `${name}: ${value};`;

function instance_1$2($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","activate","deactivate","focus","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Tab", slots, ['default','tab-indicator']);
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { tab: tabId } = $$props;
	let { ripple = true } = $$props;
	let { stacked = false } = $$props;
	let { minWidth = false } = $$props;
	let { indicatorSpanOnlyContent = false } = $$props;
	let { href = null } = $$props;
	let { content$use = [] } = $$props;
	let { content$class = "" } = $$props;
	let element;
	let instance;
	let content;
	let tabIndicator;
	let internalClasses = {};
	let internalStyles = {};
	let internalAttrs = {};
	let focusOnActivate = getContext("SMUI:tab:focusOnActivate");
	let active = tabId === getContext("SMUI:tab:initialActive");
	let forceAccessible = false;
	let { component = href == null ? Button : A } = $$props;
	setContext("SMUI:label:context", "tab");
	setContext("SMUI:icon:context", "tab");

	if (!tabId) {
		throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");
	}

	onMount(() => {
		$$invalidate(11, instance = new MDCTabFoundation({
				setAttr: addAttr,
				addClass,
				removeClass,
				hasClass,
				activateIndicator: previousIndicatorClientRect => tabIndicator.activate(previousIndicatorClientRect),
				deactivateIndicator: () => tabIndicator.deactivate(),
				notifyInteracted: () => dispatch$1(getElement(), "MDCTab:interacted", { tabId }),
				getOffsetLeft: () => getElement().offsetLeft,
				getOffsetWidth: () => getElement().offsetWidth,
				getContentOffsetLeft: () => content.offsetLeft,
				getContentOffsetWidth: () => content.offsetWidth,
				focus
			}));

		const accessor = {
			tabId,
			get element() {
				return getElement();
			},
			get active() {
				return active;
			},
			forceAccessible(accessible) {
				$$invalidate(19, forceAccessible = accessible);
			},
			computeIndicatorClientRect: () => tabIndicator.computeContentClientRect(),
			computeDimensions: () => instance.computeDimensions(),
			focus,
			activate,
			deactivate
		};

		dispatch$1(getElement(), "SMUI:tab:mount", accessor);
		instance.init();

		return () => {
			dispatch$1(getElement(), "SMUI:tab:unmount", accessor);
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
			$$invalidate(15, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(15, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === "" || value == null) {
				delete internalStyles[name];
				$$invalidate(16, internalStyles);
			} else {
				$$invalidate(16, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(17, internalAttrs[name] = value, internalAttrs);
		}
	}

	function activate(previousIndicatorClientRect, skipFocus) {
		$$invalidate(18, active = true);

		if (skipFocus) {
			instance.setFocusOnActivate(false);
		}

		instance.activate(previousIndicatorClientRect);

		if (skipFocus) {
			instance.setFocusOnActivate(focusOnActivate);
		}
	}

	function deactivate() {
		$$invalidate(18, active = false);
		instance.deactivate();
	}

	function focus() {
		getElement().focus();
	}

	function getElement() {
		return element.getElement();
	}

	function tabindicator_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			tabIndicator = $$value;
			$$invalidate(14, tabIndicator);
		});
	}

	function span0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			content = $$value;
			$$invalidate(13, content);
		});
	}

	function tabindicator_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			tabIndicator = $$value;
			$$invalidate(14, tabIndicator);
		});
	}

	function switch_instance_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(12, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(24, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ("tab" in $$new_props) $$invalidate(25, tabId = $$new_props.tab);
		if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("stacked" in $$new_props) $$invalidate(4, stacked = $$new_props.stacked);
		if ("minWidth" in $$new_props) $$invalidate(5, minWidth = $$new_props.minWidth);
		if ("indicatorSpanOnlyContent" in $$new_props) $$invalidate(6, indicatorSpanOnlyContent = $$new_props.indicatorSpanOnlyContent);
		if ("href" in $$new_props) $$invalidate(7, href = $$new_props.href);
		if ("content$use" in $$new_props) $$invalidate(8, content$use = $$new_props.content$use);
		if ("content$class" in $$new_props) $$invalidate(9, content$class = $$new_props.content$class);
		if ("component" in $$new_props) $$invalidate(10, component = $$new_props.component);
		if ("$$scope" in $$new_props) $$invalidate(35, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCTabFoundation,
		onMount,
		setContext,
		getContext,
		get_current_component,
		forwardEventsBuilder: forwardEventsBuilder$1,
		classMap: classMap$1,
		exclude: exclude$1,
		prefixFilter: prefixFilter$1,
		useActions: useActions$1,
		dispatch: dispatch$1,
		Ripple,
		A,
		Button,
		TabIndicator,
		forwardEvents,
		use,
		className,
		style,
		tabId,
		ripple,
		stacked,
		minWidth,
		indicatorSpanOnlyContent,
		href,
		content$use,
		content$class,
		element,
		instance,
		content,
		tabIndicator,
		internalClasses,
		internalStyles,
		internalAttrs,
		focusOnActivate,
		active,
		forceAccessible,
		component,
		hasClass,
		addClass,
		removeClass,
		addStyle,
		addAttr,
		activate,
		deactivate,
		focus,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
		if ("tabId" in $$props) $$invalidate(25, tabId = $$new_props.tabId);
		if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("stacked" in $$props) $$invalidate(4, stacked = $$new_props.stacked);
		if ("minWidth" in $$props) $$invalidate(5, minWidth = $$new_props.minWidth);
		if ("indicatorSpanOnlyContent" in $$props) $$invalidate(6, indicatorSpanOnlyContent = $$new_props.indicatorSpanOnlyContent);
		if ("href" in $$props) $$invalidate(7, href = $$new_props.href);
		if ("content$use" in $$props) $$invalidate(8, content$use = $$new_props.content$use);
		if ("content$class" in $$props) $$invalidate(9, content$class = $$new_props.content$class);
		if ("element" in $$props) $$invalidate(12, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(11, instance = $$new_props.instance);
		if ("content" in $$props) $$invalidate(13, content = $$new_props.content);
		if ("tabIndicator" in $$props) $$invalidate(14, tabIndicator = $$new_props.tabIndicator);
		if ("internalClasses" in $$props) $$invalidate(15, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(16, internalStyles = $$new_props.internalStyles);
		if ("internalAttrs" in $$props) $$invalidate(17, internalAttrs = $$new_props.internalAttrs);
		if ("focusOnActivate" in $$props) $$invalidate(36, focusOnActivate = $$new_props.focusOnActivate);
		if ("active" in $$props) $$invalidate(18, active = $$new_props.active);
		if ("forceAccessible" in $$props) $$invalidate(19, forceAccessible = $$new_props.forceAccessible);
		if ("component" in $$props) $$invalidate(10, component = $$new_props.component);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*instance*/ 2048) {
			if (instance) {
				instance.setFocusOnActivate(focusOnActivate);
			}
		}
	};

	return [
		use,
		className,
		style,
		ripple,
		stacked,
		minWidth,
		indicatorSpanOnlyContent,
		href,
		content$use,
		content$class,
		component,
		instance,
		element,
		content,
		tabIndicator,
		internalClasses,
		internalStyles,
		internalAttrs,
		active,
		forceAccessible,
		forwardEvents,
		addClass,
		removeClass,
		addStyle,
		$$restProps,
		tabId,
		activate,
		deactivate,
		focus,
		getElement,
		slots,
		tabindicator_binding,
		span0_binding,
		tabindicator_binding_1,
		switch_instance_binding,
		$$scope
	];
}

class Tab extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1$2,
			create_fragment$f,
			safe_not_equal,
			{
				use: 0,
				class: 1,
				style: 2,
				tab: 25,
				ripple: 3,
				stacked: 4,
				minWidth: 5,
				indicatorSpanOnlyContent: 6,
				href: 7,
				content$use: 8,
				content$class: 9,
				component: 10,
				activate: 26,
				deactivate: 27,
				focus: 28,
				getElement: 29
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tab",
			options,
			id: create_fragment$f.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*tabId*/ ctx[25] === undefined && !("tab" in props)) {
			console.warn("<Tab> was created without expected prop 'tab'");
		}
	}

	get use() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tab() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tab(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get stacked() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set stacked(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get minWidth() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set minWidth(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get indicatorSpanOnlyContent() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set indicatorSpanOnlyContent(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get href() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set href(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get content$use() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set content$use(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get content$class() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set content$class(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get component() {
		throw new Error_1("<Tab>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set component(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get activate() {
		return this.$$.ctx[26];
	}

	set activate(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get deactivate() {
		return this.$$.ctx[27];
	}

	set deactivate(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get focus() {
		return this.$$.ctx[28];
	}

	set focus(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[29];
	}

	set getElement(value) {
		throw new Error_1("<Tab>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/tab/node_modules/@smui/common/Span.svelte generated by Svelte v3.37.0 */
const file$c = "packages/tab/node_modules/@smui/common/Span.svelte";

function create_fragment$e(ctx) {
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
			add_location(span, file$c, 0, 0, 0);
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
					action_destroyer(useActions_action = useActions$1.call(null, span, /*use*/ ctx[0])),
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
		id: create_fragment$e.name,
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
	validate_slots("Span", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
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
		forwardEventsBuilder: forwardEventsBuilder$1,
		useActions: useActions$1,
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
		init(this, options, instance$c, create_fragment$e, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Span",
			options,
			id: create_fragment$e.name
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

/* packages/tab/node_modules/@smui/common/CommonLabel.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>
function create_default_slot$a(ctx) {
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
		id: create_default_slot$a.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>",
		ctx
	});

	return block;
}

function create_fragment$d(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		{
			use: [/*forwardEvents*/ ctx[4], .../*use*/ ctx[0]]
		},
		{
			class: classMap$1({
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
						class: classMap$1({
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
		id: create_fragment$d.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$b($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","component","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CommonLabel", slots, ['default']);
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
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
		forwardEventsBuilder: forwardEventsBuilder$1,
		classMap: classMap$1,
		useActions: useActions$1,
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

		init(this, options, instance$b, create_fragment$d, safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			getElement: 8
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CommonLabel",
			options,
			id: create_fragment$d.name
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

/* packages/tab/node_modules/@smui/common/I.svelte generated by Svelte v3.37.0 */
const file$b = "packages/tab/node_modules/@smui/common/I.svelte";

function create_fragment$c(ctx) {
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
			add_location(i, file$b, 0, 0, 0);
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
					action_destroyer(useActions_action = useActions$1.call(null, i, /*use*/ ctx[0])),
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
		id: create_fragment$c.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$a($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("I", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
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
		forwardEventsBuilder: forwardEventsBuilder$1,
		useActions: useActions$1,
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
		init(this, options, instance$a, create_fragment$c, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "I",
			options,
			id: create_fragment$c.name
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

/* packages/tab/node_modules/@smui/common/Svg.svelte generated by Svelte v3.37.0 */
const file$a = "packages/tab/node_modules/@smui/common/Svg.svelte";

function create_fragment$b(ctx) {
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
			add_location(svg, file$a, 0, 0, 0);
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
					action_destroyer(useActions_action = useActions$1.call(null, svg, /*use*/ ctx[0])),
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
		id: create_fragment$b.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$9($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Svg", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
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
		forwardEventsBuilder: forwardEventsBuilder$1,
		useActions: useActions$1,
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
		init(this, options, instance$9, create_fragment$b, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Svg",
			options,
			id: create_fragment$b.name
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

/* packages/tab/node_modules/@smui/common/CommonIcon.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__icon': context === 'button',     'mdc-fab__icon': context === 'fab',     'mdc-icon-button__icon': context === 'icon-button',     'mdc-icon-button__icon--on': context === 'icon-button' && on,     'mdc-tab__icon': context === 'tab',     'mdc-banner__icon': context === 'banner',     'mdc-segmented-button__icon': context === 'segmented-button',   })}   aria-hidden="true"   {...component === Svg ? { focusable: 'false', tabindex: '-1' } : {}}   {...$$restProps}>
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
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__icon': context === 'button',     'mdc-fab__icon': context === 'fab',     'mdc-icon-button__icon': context === 'icon-button',     'mdc-icon-button__icon--on': context === 'icon-button' && on,     'mdc-tab__icon': context === 'tab',     'mdc-banner__icon': context === 'banner',     'mdc-segmented-button__icon': context === 'segmented-button',   })}   aria-hidden=\\\"true\\\"   {...component === Svg ? { focusable: 'false', tabindex: '-1' } : {}}   {...$$restProps}>",
		ctx
	});

	return block;
}

function create_fragment$a(ctx) {
	let switch_instance;
	let switch_instance_anchor;
	let current;

	const switch_instance_spread_levels = [
		{
			use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
		},
		{
			class: classMap$1({
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
			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, context, on, component, Svg, $$restProps*/ 239)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*forwardEvents, use*/ 33 && {
						use: [/*forwardEvents*/ ctx[5], .../*use*/ ctx[0]]
					},
					dirty & /*classMap, className, context, on*/ 70 && {
						class: classMap$1({
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
		id: create_fragment$a.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$8($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","on","component","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CommonIcon", slots, ['default']);
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
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
		forwardEventsBuilder: forwardEventsBuilder$1,
		classMap: classMap$1,
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

		init(this, options, instance$8, create_fragment$a, safe_not_equal, {
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
			id: create_fragment$a.name
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

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
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
var cssClasses = {
    ANIMATING: 'mdc-tab-scroller--animating',
    SCROLL_AREA_SCROLL: 'mdc-tab-scroller__scroll-area--scroll',
    SCROLL_TEST: 'mdc-tab-scroller__test',
};
var strings$1 = {
    AREA_SELECTOR: '.mdc-tab-scroller__scroll-area',
    CONTENT_SELECTOR: '.mdc-tab-scroller__scroll-content',
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
var MDCTabScrollerRTL = /** @class */ (function () {
    function MDCTabScrollerRTL(adapter) {
        this.adapter = adapter;
    }
    return MDCTabScrollerRTL;
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
var MDCTabScrollerRTLDefault = /** @class */ (function (_super) {
    __extends(MDCTabScrollerRTLDefault, _super);
    function MDCTabScrollerRTLDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLDefault.prototype.getScrollPositionRTL = function () {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var right = this.calculateScrollEdges_().right;
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(right - currentScrollLeft);
    };
    MDCTabScrollerRTLDefault.prototype.scrollToRTL = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(edges.right - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLDefault.prototype.getAnimatingScrollPosition = function (scrollX) {
        return scrollX;
    };
    MDCTabScrollerRTLDefault.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    MDCTabScrollerRTLDefault.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    return MDCTabScrollerRTLDefault;
}(MDCTabScrollerRTL));

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
var MDCTabScrollerRTLNegative = /** @class */ (function (_super) {
    __extends(MDCTabScrollerRTLNegative, _super);
    function MDCTabScrollerRTLNegative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLNegative.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        return Math.round(translateX - currentScrollLeft);
    };
    MDCTabScrollerRTLNegative.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(-scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft - scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: clampedScrollLeft - currentScrollLeft,
        };
    };
    MDCTabScrollerRTLNegative.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX - translateX;
    };
    MDCTabScrollerRTLNegative.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: rootWidth - contentWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLNegative.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.max(Math.min(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLNegative;
}(MDCTabScrollerRTL));

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
var MDCTabScrollerRTLReverse = /** @class */ (function (_super) {
    __extends(MDCTabScrollerRTLReverse, _super);
    function MDCTabScrollerRTLReverse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCTabScrollerRTLReverse.prototype.getScrollPositionRTL = function (translateX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        // Scroll values on most browsers are ints instead of floats so we round
        return Math.round(currentScrollLeft - translateX);
    };
    MDCTabScrollerRTLReverse.prototype.scrollToRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.incrementScrollRTL = function (scrollX) {
        var currentScrollLeft = this.adapter.getScrollAreaScrollLeft();
        var clampedScrollLeft = this.clampScrollValue_(currentScrollLeft + scrollX);
        return {
            finalScrollPosition: clampedScrollLeft,
            scrollDelta: currentScrollLeft - clampedScrollLeft,
        };
    };
    MDCTabScrollerRTLReverse.prototype.getAnimatingScrollPosition = function (scrollX, translateX) {
        return scrollX + translateX;
    };
    MDCTabScrollerRTLReverse.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: contentWidth - rootWidth,
            right: 0,
        };
    };
    MDCTabScrollerRTLReverse.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.right, scrollX), edges.left);
    };
    return MDCTabScrollerRTLReverse;
}(MDCTabScrollerRTL));

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
var MDCTabScrollerFoundation = /** @class */ (function (_super) {
    __extends(MDCTabScrollerFoundation, _super);
    function MDCTabScrollerFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTabScrollerFoundation.defaultAdapter), adapter)) || this;
        /**
         * Controls whether we should handle the transitionend and interaction events during the animation.
         */
        _this.isAnimating_ = false;
        return _this;
    }
    Object.defineProperty(MDCTabScrollerFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabScrollerFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                eventTargetMatchesSelector: function () { return false; },
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                addScrollAreaClass: function () { return undefined; },
                setScrollAreaStyleProperty: function () { return undefined; },
                setScrollContentStyleProperty: function () { return undefined; },
                getScrollContentStyleValue: function () { return ''; },
                setScrollAreaScrollLeft: function () { return undefined; },
                getScrollAreaScrollLeft: function () { return 0; },
                getScrollContentOffsetWidth: function () { return 0; },
                getScrollAreaOffsetWidth: function () { return 0; },
                computeScrollAreaClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                computeScrollContentClientRect: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                computeHorizontalScrollbarHeight: function () { return 0; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTabScrollerFoundation.prototype.init = function () {
        // Compute horizontal scrollbar height on scroller with overflow initially hidden, then update overflow to scroll
        // and immediately adjust bottom margin to avoid the scrollbar initially appearing before JS runs.
        var horizontalScrollbarHeight = this.adapter.computeHorizontalScrollbarHeight();
        this.adapter.setScrollAreaStyleProperty('margin-bottom', -horizontalScrollbarHeight + 'px');
        this.adapter.addScrollAreaClass(MDCTabScrollerFoundation.cssClasses.SCROLL_AREA_SCROLL);
    };
    /**
     * Computes the current visual scroll position
     */
    MDCTabScrollerFoundation.prototype.getScrollPosition = function () {
        if (this.isRTL_()) {
            return this.computeCurrentScrollPositionRTL_();
        }
        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter.getScrollAreaScrollLeft();
        return scrollLeft - currentTranslateX;
    };
    /**
     * Handles interaction events that occur during transition
     */
    MDCTabScrollerFoundation.prototype.handleInteraction = function () {
        // Early exit if we aren't animating
        if (!this.isAnimating_) {
            return;
        }
        // Prevent other event listeners from handling this event
        this.stopScrollAnimation_();
    };
    /**
     * Handles the transitionend event
     */
    MDCTabScrollerFoundation.prototype.handleTransitionEnd = function (evt) {
        // Early exit if we aren't animating or the event was triggered by a different element.
        var evtTarget = evt.target;
        if (!this.isAnimating_ ||
            !this.adapter.eventTargetMatchesSelector(evtTarget, MDCTabScrollerFoundation.strings.CONTENT_SELECTOR)) {
            return;
        }
        this.isAnimating_ = false;
        this.adapter.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
    };
    /**
     * Increment the scroll value by the scrollXIncrement using animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScroll = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        this.animate_(this.getIncrementScrollOperation_(scrollXIncrement));
    };
    /**
     * Increment the scroll value by the scrollXIncrement without animation.
     * @param scrollXIncrement The value by which to increment the scroll position
     */
    MDCTabScrollerFoundation.prototype.incrementScrollImmediate = function (scrollXIncrement) {
        // Early exit for non-operational increment values
        if (scrollXIncrement === 0) {
            return;
        }
        var operation = this.getIncrementScrollOperation_(scrollXIncrement);
        if (operation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation_();
        this.adapter.setScrollAreaScrollLeft(operation.finalScrollPosition);
    };
    /**
     * Scrolls to the given scrollX value
     */
    MDCTabScrollerFoundation.prototype.scrollTo = function (scrollX) {
        if (this.isRTL_()) {
            return this.scrollToRTL_(scrollX);
        }
        this.scrollTo_(scrollX);
    };
    /**
     * @return Browser-specific {@link MDCTabScrollerRTL} instance.
     */
    MDCTabScrollerFoundation.prototype.getRTLScroller = function () {
        if (!this.rtlScrollerInstance_) {
            this.rtlScrollerInstance_ = this.rtlScrollerFactory_();
        }
        return this.rtlScrollerInstance_;
    };
    /**
     * @return translateX value from a CSS matrix transform function string.
     */
    MDCTabScrollerFoundation.prototype.calculateCurrentTranslateX_ = function () {
        var transformValue = this.adapter.getScrollContentStyleValue('transform');
        // Early exit if no transform is present
        if (transformValue === 'none') {
            return 0;
        }
        // The transform value comes back as a matrix transformation in the form
        // of `matrix(a, b, c, d, tx, ty)`. We only care about tx (translateX) so
        // we're going to grab all the parenthesized values, strip out tx, and
        // parse it.
        var match = /\((.+?)\)/.exec(transformValue);
        if (!match) {
            return 0;
        }
        var matrixParams = match[1];
        // tslint:disable-next-line:ban-ts-ignore "Unused vars" should be a linter warning, not a compiler error.
        // @ts-ignore These unused variables should retain their semantic names for clarity.
        var _a = __read(matrixParams.split(','), 6); _a[0]; _a[1]; _a[2]; _a[3]; var tx = _a[4]; _a[5];
        return parseFloat(tx); // tslint:disable-line:ban
    };
    /**
     * Calculates a safe scroll value that is > 0 and < the max scroll value
     * @param scrollX The distance to scroll
     */
    MDCTabScrollerFoundation.prototype.clampScrollValue_ = function (scrollX) {
        var edges = this.calculateScrollEdges_();
        return Math.min(Math.max(edges.left, scrollX), edges.right);
    };
    MDCTabScrollerFoundation.prototype.computeCurrentScrollPositionRTL_ = function () {
        var translateX = this.calculateCurrentTranslateX_();
        return this.getRTLScroller().getScrollPositionRTL(translateX);
    };
    MDCTabScrollerFoundation.prototype.calculateScrollEdges_ = function () {
        var contentWidth = this.adapter.getScrollContentOffsetWidth();
        var rootWidth = this.adapter.getScrollAreaOffsetWidth();
        return {
            left: 0,
            right: contentWidth - rootWidth,
        };
    };
    /**
     * Internal scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollTo_ = function (scrollX) {
        var currentScrollX = this.getScrollPosition();
        var safeScrollX = this.clampScrollValue_(scrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        this.animate_({
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        });
    };
    /**
     * Internal RTL scroll method
     * @param scrollX The new scroll position
     */
    MDCTabScrollerFoundation.prototype.scrollToRTL_ = function (scrollX) {
        var animation = this.getRTLScroller().scrollToRTL(scrollX);
        this.animate_(animation);
    };
    /**
     * Internal method to compute the increment scroll operation values.
     * @param scrollX The desired scroll position increment
     * @return MDCTabScrollerAnimation with the sanitized values for performing the scroll operation.
     */
    MDCTabScrollerFoundation.prototype.getIncrementScrollOperation_ = function (scrollX) {
        if (this.isRTL_()) {
            return this.getRTLScroller().incrementScrollRTL(scrollX);
        }
        var currentScrollX = this.getScrollPosition();
        var targetScrollX = scrollX + currentScrollX;
        var safeScrollX = this.clampScrollValue_(targetScrollX);
        var scrollDelta = safeScrollX - currentScrollX;
        return {
            finalScrollPosition: safeScrollX,
            scrollDelta: scrollDelta,
        };
    };
    /**
     * Animates the tab scrolling
     * @param animation The animation to apply
     */
    MDCTabScrollerFoundation.prototype.animate_ = function (animation) {
        var _this = this;
        // Early exit if translateX is 0, which means there's no animation to perform
        if (animation.scrollDelta === 0) {
            return;
        }
        this.stopScrollAnimation_();
        // This animation uses the FLIP approach.
        // Read more here: https://aerotwist.com/blog/flip-your-animations/
        this.adapter.setScrollAreaScrollLeft(animation.finalScrollPosition);
        this.adapter.setScrollContentStyleProperty('transform', "translateX(" + animation.scrollDelta + "px)");
        // Force repaint
        this.adapter.computeScrollAreaClientRect();
        requestAnimationFrame(function () {
            _this.adapter.addClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
            _this.adapter.setScrollContentStyleProperty('transform', 'none');
        });
        this.isAnimating_ = true;
    };
    /**
     * Stops scroll animation
     */
    MDCTabScrollerFoundation.prototype.stopScrollAnimation_ = function () {
        this.isAnimating_ = false;
        var currentScrollPosition = this.getAnimatingScrollPosition_();
        this.adapter.removeClass(MDCTabScrollerFoundation.cssClasses.ANIMATING);
        this.adapter.setScrollContentStyleProperty('transform', 'translateX(0px)');
        this.adapter.setScrollAreaScrollLeft(currentScrollPosition);
    };
    /**
     * Gets the current scroll position during animation
     */
    MDCTabScrollerFoundation.prototype.getAnimatingScrollPosition_ = function () {
        var currentTranslateX = this.calculateCurrentTranslateX_();
        var scrollLeft = this.adapter.getScrollAreaScrollLeft();
        if (this.isRTL_()) {
            return this.getRTLScroller().getAnimatingScrollPosition(scrollLeft, currentTranslateX);
        }
        return scrollLeft - currentTranslateX;
    };
    /**
     * Determines the RTL Scroller to use
     */
    MDCTabScrollerFoundation.prototype.rtlScrollerFactory_ = function () {
        // Browsers have three different implementations of scrollLeft in RTL mode,
        // dependent on the browser. The behavior is based off the max LTR
        // scrollLeft value and 0.
        //
        // * Default scrolling in RTL *
        //    - Left-most value: 0
        //    - Right-most value: Max LTR scrollLeft value
        //
        // * Negative scrolling in RTL *
        //    - Left-most value: Negated max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // * Reverse scrolling in RTL *
        //    - Left-most value: Max LTR scrollLeft value
        //    - Right-most value: 0
        //
        // We use those principles below to determine which RTL scrollLeft
        // behavior is implemented in the current browser.
        var initialScrollLeft = this.adapter.getScrollAreaScrollLeft();
        this.adapter.setScrollAreaScrollLeft(initialScrollLeft - 1);
        var newScrollLeft = this.adapter.getScrollAreaScrollLeft();
        // If the newScrollLeft value is negative,then we know that the browser has
        // implemented negative RTL scrolling, since all other implementations have
        // only positive values.
        if (newScrollLeft < 0) {
            // Undo the scrollLeft test check
            this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
            return new MDCTabScrollerRTLNegative(this.adapter);
        }
        var rootClientRect = this.adapter.computeScrollAreaClientRect();
        var contentClientRect = this.adapter.computeScrollContentClientRect();
        var rightEdgeDelta = Math.round(contentClientRect.right - rootClientRect.right);
        // Undo the scrollLeft test check
        this.adapter.setScrollAreaScrollLeft(initialScrollLeft);
        // By calculating the clientRect of the root element and the clientRect of
        // the content element, we can determine how much the scroll value changed
        // when we performed the scrollLeft subtraction above.
        if (rightEdgeDelta === newScrollLeft) {
            return new MDCTabScrollerRTLReverse(this.adapter);
        }
        return new MDCTabScrollerRTLDefault(this.adapter);
    };
    MDCTabScrollerFoundation.prototype.isRTL_ = function () {
        return this.adapter.getScrollContentStyleValue('direction') === 'rtl';
    };
    return MDCTabScrollerFoundation;
}(MDCFoundation));

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
 * Stores result from computeHorizontalScrollbarHeight to avoid redundant processing.
 */
var horizontalScrollbarHeight_;
/**
 * Computes the height of browser-rendered horizontal scrollbars using a self-created test element.
 * May return 0 (e.g. on OS X browsers under default configuration).
 */
function computeHorizontalScrollbarHeight(documentObj, shouldCacheResult) {
    if (shouldCacheResult === void 0) { shouldCacheResult = true; }
    if (shouldCacheResult && typeof horizontalScrollbarHeight_ !== 'undefined') {
        return horizontalScrollbarHeight_;
    }
    var el = documentObj.createElement('div');
    el.classList.add(cssClasses.SCROLL_TEST);
    documentObj.body.appendChild(el);
    var horizontalScrollbarHeight = el.offsetHeight - el.clientHeight;
    documentObj.body.removeChild(el);
    if (shouldCacheResult) {
        horizontalScrollbarHeight_ = horizontalScrollbarHeight;
    }
    return horizontalScrollbarHeight;
}

var util = /*#__PURE__*/Object.freeze({
    __proto__: null,
    computeHorizontalScrollbarHeight: computeHorizontalScrollbarHeight
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
var strings = {
    ARROW_LEFT_KEY: 'ArrowLeft',
    ARROW_RIGHT_KEY: 'ArrowRight',
    END_KEY: 'End',
    ENTER_KEY: 'Enter',
    HOME_KEY: 'Home',
    SPACE_KEY: 'Space',
    TAB_ACTIVATED_EVENT: 'MDCTabBar:activated',
    TAB_SCROLLER_SELECTOR: '.mdc-tab-scroller',
    TAB_SELECTOR: '.mdc-tab',
};
var numbers = {
    ARROW_LEFT_KEYCODE: 37,
    ARROW_RIGHT_KEYCODE: 39,
    END_KEYCODE: 35,
    ENTER_KEYCODE: 13,
    EXTRA_SCROLL_AMOUNT: 20,
    HOME_KEYCODE: 36,
    SPACE_KEYCODE: 32,
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
var ACCEPTABLE_KEYS = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this by hand
ACCEPTABLE_KEYS.add(strings.ARROW_LEFT_KEY);
ACCEPTABLE_KEYS.add(strings.ARROW_RIGHT_KEY);
ACCEPTABLE_KEYS.add(strings.END_KEY);
ACCEPTABLE_KEYS.add(strings.HOME_KEY);
ACCEPTABLE_KEYS.add(strings.ENTER_KEY);
ACCEPTABLE_KEYS.add(strings.SPACE_KEY);
var KEYCODE_MAP = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this by hand
KEYCODE_MAP.set(numbers.ARROW_LEFT_KEYCODE, strings.ARROW_LEFT_KEY);
KEYCODE_MAP.set(numbers.ARROW_RIGHT_KEYCODE, strings.ARROW_RIGHT_KEY);
KEYCODE_MAP.set(numbers.END_KEYCODE, strings.END_KEY);
KEYCODE_MAP.set(numbers.HOME_KEYCODE, strings.HOME_KEY);
KEYCODE_MAP.set(numbers.ENTER_KEYCODE, strings.ENTER_KEY);
KEYCODE_MAP.set(numbers.SPACE_KEYCODE, strings.SPACE_KEY);
var MDCTabBarFoundation = /** @class */ (function (_super) {
    __extends(MDCTabBarFoundation, _super);
    function MDCTabBarFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCTabBarFoundation.defaultAdapter), adapter)) || this;
        _this.useAutomaticActivation_ = false;
        return _this;
    }
    Object.defineProperty(MDCTabBarFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTabBarFoundation, "defaultAdapter", {
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                scrollTo: function () { return undefined; },
                incrementScroll: function () { return undefined; },
                getScrollPosition: function () { return 0; },
                getScrollContentWidth: function () { return 0; },
                getOffsetWidth: function () { return 0; },
                isRTL: function () { return false; },
                setActiveTab: function () { return undefined; },
                activateTabAtIndex: function () { return undefined; },
                deactivateTabAtIndex: function () { return undefined; },
                focusTabAtIndex: function () { return undefined; },
                getTabIndicatorClientRectAtIndex: function () { return ({ top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 }); },
                getTabDimensionsAtIndex: function () { return ({ rootLeft: 0, rootRight: 0, contentLeft: 0, contentRight: 0 }); },
                getPreviousActiveTabIndex: function () { return -1; },
                getFocusedTabIndex: function () { return -1; },
                getIndexOfTabById: function () { return -1; },
                getTabListLength: function () { return 0; },
                notifyTabActivated: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Switches between automatic and manual activation modes.
     * See https://www.w3.org/TR/wai-aria-practices/#tabpanel for examples.
     */
    MDCTabBarFoundation.prototype.setUseAutomaticActivation = function (useAutomaticActivation) {
        this.useAutomaticActivation_ = useAutomaticActivation;
    };
    MDCTabBarFoundation.prototype.activateTab = function (index) {
        var previousActiveIndex = this.adapter.getPreviousActiveTabIndex();
        if (!this.indexIsInRange_(index) || index === previousActiveIndex) {
            return;
        }
        var previousClientRect;
        if (previousActiveIndex !== -1) {
            this.adapter.deactivateTabAtIndex(previousActiveIndex);
            previousClientRect =
                this.adapter.getTabIndicatorClientRectAtIndex(previousActiveIndex);
        }
        this.adapter.activateTabAtIndex(index, previousClientRect);
        this.scrollIntoView(index);
        this.adapter.notifyTabActivated(index);
    };
    MDCTabBarFoundation.prototype.handleKeyDown = function (evt) {
        // Get the key from the event
        var key = this.getKeyFromEvent_(evt);
        // Early exit if the event key isn't one of the keyboard navigation keys
        if (key === undefined) {
            return;
        }
        // Prevent default behavior for movement keys, but not for activation keys, since :active is used to apply ripple
        if (!this.isActivationKey_(key)) {
            evt.preventDefault();
        }
        if (this.useAutomaticActivation_) {
            if (this.isActivationKey_(key)) {
                return;
            }
            var index = this.determineTargetFromKey_(this.adapter.getPreviousActiveTabIndex(), key);
            this.adapter.setActiveTab(index);
            this.scrollIntoView(index);
        }
        else {
            var focusedTabIndex = this.adapter.getFocusedTabIndex();
            if (this.isActivationKey_(key)) {
                this.adapter.setActiveTab(focusedTabIndex);
            }
            else {
                var index = this.determineTargetFromKey_(focusedTabIndex, key);
                this.adapter.focusTabAtIndex(index);
                this.scrollIntoView(index);
            }
        }
    };
    /**
     * Handles the MDCTab:interacted event
     */
    MDCTabBarFoundation.prototype.handleTabInteraction = function (evt) {
        this.adapter.setActiveTab(this.adapter.getIndexOfTabById(evt.detail.tabId));
    };
    /**
     * Scrolls the tab at the given index into view
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoView = function (index) {
        // Early exit if the index is out of range
        if (!this.indexIsInRange_(index)) {
            return;
        }
        // Always scroll to 0 if scrolling to the 0th index
        if (index === 0) {
            return this.adapter.scrollTo(0);
        }
        // Always scroll to the max value if scrolling to the Nth index
        // MDCTabScroller.scrollTo() will never scroll past the max possible value
        if (index === this.adapter.getTabListLength() - 1) {
            return this.adapter.scrollTo(this.adapter.getScrollContentWidth());
        }
        if (this.isRTL_()) {
            return this.scrollIntoViewRTL_(index);
        }
        this.scrollIntoView_(index);
    };
    /**
     * Private method for determining the index of the destination tab based on what key was pressed
     * @param origin The original index from which to determine the destination
     * @param key The name of the key
     */
    MDCTabBarFoundation.prototype.determineTargetFromKey_ = function (origin, key) {
        var isRTL = this.isRTL_();
        var maxIndex = this.adapter.getTabListLength() - 1;
        var shouldGoToEnd = key === strings.END_KEY;
        var shouldDecrement = key === strings.ARROW_LEFT_KEY && !isRTL || key === strings.ARROW_RIGHT_KEY && isRTL;
        var shouldIncrement = key === strings.ARROW_RIGHT_KEY && !isRTL || key === strings.ARROW_LEFT_KEY && isRTL;
        var index = origin;
        if (shouldGoToEnd) {
            index = maxIndex;
        }
        else if (shouldDecrement) {
            index -= 1;
        }
        else if (shouldIncrement) {
            index += 1;
        }
        else {
            index = 0;
        }
        if (index < 0) {
            index = maxIndex;
        }
        else if (index > maxIndex) {
            index = 0;
        }
        return index;
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrement_ = function (index, nextIndex, scrollPosition, barWidth) {
        var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = nextTabDimensions.contentLeft - scrollPosition - barWidth;
        var relativeContentRight = nextTabDimensions.contentRight - scrollPosition;
        var leftIncrement = relativeContentRight - numbers.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft + numbers.EXTRA_SCROLL_AMOUNT;
        if (nextIndex < index) {
            return Math.min(leftIncrement, 0);
        }
        return Math.max(rightIncrement, 0);
    };
    /**
     * Calculates the scroll increment that will make the tab at the given index visible in RTL
     * @param index The index of the tab
     * @param nextIndex The index of the next tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the Tab Bar
     * @param scrollContentWidth The width of the scroll content
     */
    MDCTabBarFoundation.prototype.calculateScrollIncrementRTL_ = function (index, nextIndex, scrollPosition, barWidth, scrollContentWidth) {
        var nextTabDimensions = this.adapter.getTabDimensionsAtIndex(nextIndex);
        var relativeContentLeft = scrollContentWidth - nextTabDimensions.contentLeft - scrollPosition;
        var relativeContentRight = scrollContentWidth - nextTabDimensions.contentRight - scrollPosition - barWidth;
        var leftIncrement = relativeContentRight + numbers.EXTRA_SCROLL_AMOUNT;
        var rightIncrement = relativeContentLeft - numbers.EXTRA_SCROLL_AMOUNT;
        if (nextIndex > index) {
            return Math.max(leftIncrement, 0);
        }
        return Math.min(rightIncrement, 0);
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdge_ = function (index, tabDimensions, scrollPosition, barWidth) {
        /**
         * Tabs are laid out in the Tab Scroller like this:
         *
         *    Scroll Position
         *    +---+
         *    |   |   Bar Width
         *    |   +-----------------------------------+
         *    |   |                                   |
         *    |   V                                   V
         *    |   +-----------------------------------+
         *    V   |             Tab Scroller          |
         *    +------------+--------------+-------------------+
         *    |    Tab     |      Tab     |        Tab        |
         *    +------------+--------------+-------------------+
         *        |                                   |
         *        +-----------------------------------+
         *
         * To determine the next adjacent index, we look at the Tab root left and
         * Tab root right, both relative to the scroll position. If the Tab root
         * left is less than 0, then we know it's out of view to the left. If the
         * Tab root right minus the bar width is greater than 0, we know the Tab is
         * out of view to the right. From there, we either increment or decrement
         * the index.
         */
        var relativeRootLeft = tabDimensions.rootLeft - scrollPosition;
        var relativeRootRight = tabDimensions.rootRight - scrollPosition - barWidth;
        var relativeRootDelta = relativeRootLeft + relativeRootRight;
        var leftEdgeIsCloser = relativeRootLeft < 0 || relativeRootDelta < 0;
        var rightEdgeIsCloser = relativeRootRight > 0 || relativeRootDelta > 0;
        if (leftEdgeIsCloser) {
            return index - 1;
        }
        if (rightEdgeIsCloser) {
            return index + 1;
        }
        return -1;
    };
    /**
     * Determines the index of the adjacent tab closest to either edge of the Tab Bar in RTL
     * @param index The index of the tab
     * @param tabDimensions The dimensions of the tab
     * @param scrollPosition The current scroll position
     * @param barWidth The width of the tab bar
     * @param scrollContentWidth The width of the scroller content
     */
    MDCTabBarFoundation.prototype.findAdjacentTabIndexClosestToEdgeRTL_ = function (index, tabDimensions, scrollPosition, barWidth, scrollContentWidth) {
        var rootLeft = scrollContentWidth - tabDimensions.rootLeft - barWidth - scrollPosition;
        var rootRight = scrollContentWidth - tabDimensions.rootRight - scrollPosition;
        var rootDelta = rootLeft + rootRight;
        var leftEdgeIsCloser = rootLeft > 0 || rootDelta > 0;
        var rightEdgeIsCloser = rootRight < 0 || rootDelta < 0;
        if (leftEdgeIsCloser) {
            return index + 1;
        }
        if (rightEdgeIsCloser) {
            return index - 1;
        }
        return -1;
    };
    /**
     * Returns the key associated with a keydown event
     * @param evt The keydown event
     */
    MDCTabBarFoundation.prototype.getKeyFromEvent_ = function (evt) {
        if (ACCEPTABLE_KEYS.has(evt.key)) {
            return evt.key;
        }
        return KEYCODE_MAP.get(evt.keyCode);
    };
    MDCTabBarFoundation.prototype.isActivationKey_ = function (key) {
        return key === strings.SPACE_KEY || key === strings.ENTER_KEY;
    };
    /**
     * Returns whether a given index is inclusively between the ends
     * @param index The index to test
     */
    MDCTabBarFoundation.prototype.indexIsInRange_ = function (index) {
        return index >= 0 && index < this.adapter.getTabListLength();
    };
    /**
     * Returns the view's RTL property
     */
    MDCTabBarFoundation.prototype.isRTL_ = function () {
        return this.adapter.isRTL();
    };
    /**
     * Scrolls the tab at the given index into view for left-to-right user agents.
     * @param index The index of the tab to scroll into view
     */
    MDCTabBarFoundation.prototype.scrollIntoView_ = function (index) {
        var scrollPosition = this.adapter.getScrollPosition();
        var barWidth = this.adapter.getOffsetWidth();
        var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
        var nextIndex = this.findAdjacentTabIndexClosestToEdge_(index, tabDimensions, scrollPosition, barWidth);
        if (!this.indexIsInRange_(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrement_(index, nextIndex, scrollPosition, barWidth);
        this.adapter.incrementScroll(scrollIncrement);
    };
    /**
     * Scrolls the tab at the given index into view in RTL
     * @param index The tab index to make visible
     */
    MDCTabBarFoundation.prototype.scrollIntoViewRTL_ = function (index) {
        var scrollPosition = this.adapter.getScrollPosition();
        var barWidth = this.adapter.getOffsetWidth();
        var tabDimensions = this.adapter.getTabDimensionsAtIndex(index);
        var scrollWidth = this.adapter.getScrollContentWidth();
        var nextIndex = this.findAdjacentTabIndexClosestToEdgeRTL_(index, tabDimensions, scrollPosition, barWidth, scrollWidth);
        if (!this.indexIsInRange_(nextIndex)) {
            return;
        }
        var scrollIncrement = this.calculateScrollIncrementRTL_(index, nextIndex, scrollPosition, barWidth, scrollWidth);
        this.adapter.incrementScroll(scrollIncrement);
    };
    return MDCTabBarFoundation;
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

/* packages/tab-bar/node_modules/@smui/tab-scroller/TabScroller.svelte generated by Svelte v3.37.0 */

const file$9 = "packages/tab-bar/node_modules/@smui/tab-scroller/TabScroller.svelte";

function create_fragment$9(ctx) {
	let div2;
	let div1;
	let div0;
	let div0_class_value;
	let div0_style_value;
	let useActions_action;
	let div1_class_value;
	let div1_style_value;
	let useActions_action_1;
	let div2_class_value;
	let useActions_action_2;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[23].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[22], null);

	let div0_levels = [
		{
			class: div0_class_value = classMap({
				[/*scrollContent$class*/ ctx[6]]: true,
				"mdc-tab-scroller__scroll-content": true
			})
		},
		{
			style: div0_style_value = Object.entries(/*scrollContentStyles*/ ctx[14]).map(func$2).join(" ")
		},
		prefixFilter(/*$$restProps*/ ctx[16], "scrollContent$")
	];

	let div0_data = {};

	for (let i = 0; i < div0_levels.length; i += 1) {
		div0_data = assign(div0_data, div0_levels[i]);
	}

	let div1_levels = [
		{
			class: div1_class_value = classMap({
				[/*scrollArea$class*/ ctx[4]]: true,
				"mdc-tab-scroller__scroll-area": true,
				.../*scrollAreaClasses*/ ctx[12]
			})
		},
		{
			style: div1_style_value = Object.entries(/*scrollAreaStyles*/ ctx[13]).map(func_1).join(" ")
		},
		prefixFilter(/*$$restProps*/ ctx[16], "scrollArea$")
	];

	let div1_data = {};

	for (let i = 0; i < div1_levels.length; i += 1) {
		div1_data = assign(div1_data, div1_levels[i]);
	}

	let div2_levels = [
		{
			class: div2_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-tab-scroller": true,
				"mdc-tab-scroller--align-start": /*align*/ ctx[2] === "start",
				"mdc-tab-scroller--align-end": /*align*/ ctx[2] === "end",
				"mdc-tab-scroller--align-center": /*align*/ ctx[2] === "center",
				.../*internalClasses*/ ctx[11]
			})
		},
		exclude(/*$$restProps*/ ctx[16], ["scrollArea$", "scrollContent$"])
	];

	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign(div2_data, div2_levels[i]);
	}

	const block = {
		c: function create() {
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true, style: true });
			var div0_nodes = children(div0);
			if (default_slot) default_slot.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div0, div0_data);
			add_location(div0, file$9, 32, 4, 1108);
			set_attributes(div1, div1_data);
			add_location(div1, file$9, 14, 2, 406);
			set_attributes(div2, div2_data);
			add_location(div2, file$9, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);

			if (default_slot) {
				default_slot.m(div0, null);
			}

			/*div0_binding*/ ctx[24](div0);
			/*div1_binding*/ ctx[26](div1);
			/*div2_binding*/ ctx[32](div2);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div0, /*scrollContent$use*/ ctx[5])),
					listen_dev(div0, "transitionend", /*transitionend_handler*/ ctx[25], false, false, false),
					action_destroyer(useActions_action_1 = useActions.call(null, div1, /*scrollArea$use*/ ctx[3])),
					listen_dev(div1, "wheel", /*wheel_handler*/ ctx[27], { passive: true }, false, false),
					listen_dev(div1, "touchstart", /*touchstart_handler*/ ctx[28], { passive: true }, false, false),
					listen_dev(div1, "pointerdown", /*pointerdown_handler*/ ctx[29], false, false, false),
					listen_dev(div1, "mousedown", /*mousedown_handler*/ ctx[30], false, false, false),
					listen_dev(div1, "keydown", /*keydown_handler*/ ctx[31], false, false, false),
					action_destroyer(useActions_action_2 = useActions.call(null, div2, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[15].call(null, div2))
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[0] & /*$$scope*/ 4194304) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[22], dirty, null, null);
				}
			}

			set_attributes(div0, div0_data = get_spread_update(div0_levels, [
				(!current || dirty[0] & /*scrollContent$class*/ 64 && div0_class_value !== (div0_class_value = classMap({
					[/*scrollContent$class*/ ctx[6]]: true,
					"mdc-tab-scroller__scroll-content": true
				}))) && { class: div0_class_value },
				(!current || dirty[0] & /*scrollContentStyles*/ 16384 && div0_style_value !== (div0_style_value = Object.entries(/*scrollContentStyles*/ ctx[14]).map(func$2).join(" "))) && { style: div0_style_value },
				dirty[0] & /*$$restProps*/ 65536 && prefixFilter(/*$$restProps*/ ctx[16], "scrollContent$")
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*scrollContent$use*/ 32) useActions_action.update.call(null, /*scrollContent$use*/ ctx[5]);

			set_attributes(div1, div1_data = get_spread_update(div1_levels, [
				(!current || dirty[0] & /*scrollArea$class, scrollAreaClasses*/ 4112 && div1_class_value !== (div1_class_value = classMap({
					[/*scrollArea$class*/ ctx[4]]: true,
					"mdc-tab-scroller__scroll-area": true,
					.../*scrollAreaClasses*/ ctx[12]
				}))) && { class: div1_class_value },
				(!current || dirty[0] & /*scrollAreaStyles*/ 8192 && div1_style_value !== (div1_style_value = Object.entries(/*scrollAreaStyles*/ ctx[13]).map(func_1).join(" "))) && { style: div1_style_value },
				dirty[0] & /*$$restProps*/ 65536 && prefixFilter(/*$$restProps*/ ctx[16], "scrollArea$")
			]));

			if (useActions_action_1 && is_function(useActions_action_1.update) && dirty[0] & /*scrollArea$use*/ 8) useActions_action_1.update.call(null, /*scrollArea$use*/ ctx[3]);

			set_attributes(div2, div2_data = get_spread_update(div2_levels, [
				(!current || dirty[0] & /*className, align, internalClasses*/ 2054 && div2_class_value !== (div2_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-tab-scroller": true,
					"mdc-tab-scroller--align-start": /*align*/ ctx[2] === "start",
					"mdc-tab-scroller--align-end": /*align*/ ctx[2] === "end",
					"mdc-tab-scroller--align-center": /*align*/ ctx[2] === "center",
					.../*internalClasses*/ ctx[11]
				}))) && { class: div2_class_value },
				dirty[0] & /*$$restProps*/ 65536 && exclude(/*$$restProps*/ ctx[16], ["scrollArea$", "scrollContent$"])
			]));

			if (useActions_action_2 && is_function(useActions_action_2.update) && dirty[0] & /*use*/ 1) useActions_action_2.update.call(null, /*use*/ ctx[0]);
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
			if (detaching) detach_dev(div2);
			if (default_slot) default_slot.d(detaching);
			/*div0_binding*/ ctx[24](null);
			/*div1_binding*/ ctx[26](null);
			/*div2_binding*/ ctx[32](null);
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

const func$2 = ([name, value]) => `${name}: ${value};`;
const func_1 = ([name, value]) => `${name}: ${value};`;

function instance_1$1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("TabScroller", slots, ['default']);
	const { matches } = ponyfill;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { align = null } = $$props;
	let { scrollArea$use = [] } = $$props;
	let { scrollArea$class = "" } = $$props;
	let { scrollContent$use = [] } = $$props;
	let { scrollContent$class = "" } = $$props;
	let element;
	let instance;
	let scrollArea;
	let scrollContent;
	let internalClasses = {};
	let scrollAreaClasses = {};
	let scrollAreaStyles = {};
	let scrollContentStyles = {};

	onMount(() => {
		$$invalidate(8, instance = new MDCTabScrollerFoundation({
				eventTargetMatchesSelector: (evtTarget, selector) => matches(evtTarget, selector),
				addClass,
				removeClass,
				addScrollAreaClass,
				setScrollAreaStyleProperty: addScrollAreaStyle,
				setScrollContentStyleProperty: addScrollContentStyle,
				getScrollContentStyleValue: getScrollContentStyle,
				setScrollAreaScrollLeft: scrollX => $$invalidate(9, scrollArea.scrollLeft = scrollX, scrollArea),
				getScrollAreaScrollLeft: () => scrollArea.scrollLeft,
				getScrollContentOffsetWidth: () => scrollContent.offsetWidth,
				getScrollAreaOffsetWidth: () => scrollArea.offsetWidth,
				computeScrollAreaClientRect: () => scrollArea.getBoundingClientRect(),
				computeScrollContentClientRect: () => scrollContent.getBoundingClientRect(),
				computeHorizontalScrollbarHeight: () => computeHorizontalScrollbarHeight(document)
			}));

		instance.init();

		return () => {
			instance.destroy();
		};
	});

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

	function addScrollAreaClass(className) {
		if (!scrollAreaClasses[className]) {
			$$invalidate(12, scrollAreaClasses[className] = true, scrollAreaClasses);
		}
	}

	function addScrollAreaStyle(name, value) {
		if (scrollAreaStyles[name] != value) {
			if (value === "" || value == null) {
				delete scrollAreaStyles[name];
				$$invalidate(13, scrollAreaStyles);
			} else {
				$$invalidate(13, scrollAreaStyles[name] = value, scrollAreaStyles);
			}
		}
	}

	function addScrollContentStyle(name, value) {
		if (scrollContentStyles[name] != value) {
			if (value === "" || value == null) {
				delete scrollContentStyles[name];
				$$invalidate(14, scrollContentStyles);
			} else {
				$$invalidate(14, scrollContentStyles[name] = value, scrollContentStyles);
			}
		}
	}

	function getScrollContentStyle(name) {
		return name in scrollContentStyles
		? scrollContentStyles[name]
		: getComputedStyle(scrollContent).getPropertyValue(name);
	}

	function getScrollPosition() {
		return instance.getScrollPosition();
	}

	function getScrollContentWidth() {
		return scrollContent.offsetWidth;
	}

	function incrementScroll(scrollXIncrement) {
		instance.incrementScroll(scrollXIncrement);
	}

	function scrollTo(scrollX) {
		instance.scrollTo(scrollX);
	}

	function getElement() {
		return element;
	}

	function div0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			scrollContent = $$value;
			$$invalidate(10, scrollContent);
		});
	}

	const transitionend_handler = event => instance && instance.handleTransitionEnd(event);

	function div1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			scrollArea = $$value;
			$$invalidate(9, scrollArea);
		});
	}

	const wheel_handler = () => instance && instance.handleInteraction();
	const touchstart_handler = () => instance && instance.handleInteraction();
	const pointerdown_handler = () => instance && instance.handleInteraction();
	const mousedown_handler = () => instance && instance.handleInteraction();
	const keydown_handler = () => instance && instance.handleInteraction();

	function div2_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("align" in $$new_props) $$invalidate(2, align = $$new_props.align);
		if ("scrollArea$use" in $$new_props) $$invalidate(3, scrollArea$use = $$new_props.scrollArea$use);
		if ("scrollArea$class" in $$new_props) $$invalidate(4, scrollArea$class = $$new_props.scrollArea$class);
		if ("scrollContent$use" in $$new_props) $$invalidate(5, scrollContent$use = $$new_props.scrollContent$use);
		if ("scrollContent$class" in $$new_props) $$invalidate(6, scrollContent$class = $$new_props.scrollContent$class);
		if ("$$scope" in $$new_props) $$invalidate(22, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCTabScrollerFoundation,
		util,
		ponyfill,
		onMount,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		exclude,
		prefixFilter,
		useActions,
		matches,
		forwardEvents,
		use,
		className,
		align,
		scrollArea$use,
		scrollArea$class,
		scrollContent$use,
		scrollContent$class,
		element,
		instance,
		scrollArea,
		scrollContent,
		internalClasses,
		scrollAreaClasses,
		scrollAreaStyles,
		scrollContentStyles,
		addClass,
		removeClass,
		addScrollAreaClass,
		addScrollAreaStyle,
		addScrollContentStyle,
		getScrollContentStyle,
		getScrollPosition,
		getScrollContentWidth,
		incrementScroll,
		scrollTo,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("align" in $$props) $$invalidate(2, align = $$new_props.align);
		if ("scrollArea$use" in $$props) $$invalidate(3, scrollArea$use = $$new_props.scrollArea$use);
		if ("scrollArea$class" in $$props) $$invalidate(4, scrollArea$class = $$new_props.scrollArea$class);
		if ("scrollContent$use" in $$props) $$invalidate(5, scrollContent$use = $$new_props.scrollContent$use);
		if ("scrollContent$class" in $$props) $$invalidate(6, scrollContent$class = $$new_props.scrollContent$class);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(8, instance = $$new_props.instance);
		if ("scrollArea" in $$props) $$invalidate(9, scrollArea = $$new_props.scrollArea);
		if ("scrollContent" in $$props) $$invalidate(10, scrollContent = $$new_props.scrollContent);
		if ("internalClasses" in $$props) $$invalidate(11, internalClasses = $$new_props.internalClasses);
		if ("scrollAreaClasses" in $$props) $$invalidate(12, scrollAreaClasses = $$new_props.scrollAreaClasses);
		if ("scrollAreaStyles" in $$props) $$invalidate(13, scrollAreaStyles = $$new_props.scrollAreaStyles);
		if ("scrollContentStyles" in $$props) $$invalidate(14, scrollContentStyles = $$new_props.scrollContentStyles);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		align,
		scrollArea$use,
		scrollArea$class,
		scrollContent$use,
		scrollContent$class,
		element,
		instance,
		scrollArea,
		scrollContent,
		internalClasses,
		scrollAreaClasses,
		scrollAreaStyles,
		scrollContentStyles,
		forwardEvents,
		$$restProps,
		getScrollPosition,
		getScrollContentWidth,
		incrementScroll,
		scrollTo,
		getElement,
		$$scope,
		slots,
		div0_binding,
		transitionend_handler,
		div1_binding,
		wheel_handler,
		touchstart_handler,
		pointerdown_handler,
		mousedown_handler,
		keydown_handler,
		div2_binding
	];
}

class TabScroller extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1$1,
			create_fragment$9,
			safe_not_equal,
			{
				use: 0,
				class: 1,
				align: 2,
				scrollArea$use: 3,
				scrollArea$class: 4,
				scrollContent$use: 5,
				scrollContent$class: 6,
				getScrollPosition: 17,
				getScrollContentWidth: 18,
				incrementScroll: 19,
				scrollTo: 20,
				getElement: 21
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TabScroller",
			options,
			id: create_fragment$9.name
		});
	}

	get use() {
		throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get align() {
		throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set align(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scrollArea$use() {
		throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scrollArea$use(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scrollArea$class() {
		throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scrollArea$class(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scrollContent$use() {
		throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scrollContent$use(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scrollContent$class() {
		throw new Error("<TabScroller>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set scrollContent$class(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getScrollPosition() {
		return this.$$.ctx[17];
	}

	set getScrollPosition(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getScrollContentWidth() {
		return this.$$.ctx[18];
	}

	set getScrollContentWidth(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get incrementScroll() {
		return this.$$.ctx[19];
	}

	set incrementScroll(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scrollTo() {
		return this.$$.ctx[20];
	}

	set scrollTo(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[21];
	}

	set getElement(value) {
		throw new Error("<TabScroller>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/tab-bar/TabBar.svelte generated by Svelte v3.37.0 */
const file$8 = "packages/tab-bar/TabBar.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[32] = list[i];
	child_ctx[34] = i;
	return child_ctx;
}

const get_default_slot_changes = dirty => ({ tab: dirty[0] & /*tabs*/ 4 });
const get_default_slot_context = ctx => ({ tab: /*tab*/ ctx[32] });

// (21:4) {#each tabs as tab, i (key(tab))}
function create_each_block$1(key_2, ctx) {
	let first;
	let current;
	const default_slot_template = /*#slots*/ ctx[20].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[27], get_default_slot_context);

	const block = {
		key: key_2,
		first: null,
		c: function create() {
			first = empty();
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			if (default_slot) default_slot.l(nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;

			if (default_slot) {
				if (default_slot.p && dirty[0] & /*$$scope, tabs*/ 134217732) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[27], dirty, get_default_slot_changes, get_default_slot_context);
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
			if (detaching) detach_dev(first);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(21:4) {#each tabs as tab, i (key(tab))}",
		ctx
	});

	return block;
}

// (17:2) <TabScroller     bind:this={tabScroller}     {...prefixFilter($$restProps, 'tabScroller$')}   >
function create_default_slot$8(ctx) {
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	let each_value = /*tabs*/ ctx[2];
	validate_each_argument(each_value);
	const get_key = ctx => /*key*/ ctx[3](/*tab*/ ctx[32]);
	validate_each_keys(ctx, each_value, get_each_context$1, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context$1(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block$1(key, child_ctx));
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
		p: function update(ctx, dirty) {
			if (dirty[0] & /*$$scope, tabs, key*/ 134217740) {
				each_value = /*tabs*/ ctx[2];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context$1, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block$1, each_1_anchor, get_each_context$1);
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$8.name,
		type: "slot",
		source: "(17:2) <TabScroller     bind:this={tabScroller}     {...prefixFilter($$restProps, 'tabScroller$')}   >",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
	let div;
	let tabscroller;
	let div_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const tabscroller_spread_levels = [prefixFilter(/*$$restProps*/ ctx[10], "tabScroller$")];

	let tabscroller_props = {
		$$slots: { default: [create_default_slot$8] },
		$$scope: { ctx }
	};

	for (let i = 0; i < tabscroller_spread_levels.length; i += 1) {
		tabscroller_props = assign(tabscroller_props, tabscroller_spread_levels[i]);
	}

	tabscroller = new TabScroller({ props: tabscroller_props, $$inline: true });
	/*tabscroller_binding*/ ctx[21](tabscroller);

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-tab-bar": true
			})
		},
		{ role: "tablist" },
		exclude(/*$$restProps*/ ctx[10], ["tabScroller$"])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			create_component(tabscroller.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, role: true });
			var div_nodes = children(div);
			claim_component(tabscroller.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$8, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(tabscroller, div, null);
			/*div_binding*/ ctx[22](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[7].call(null, div)),
					listen_dev(div, "SMUI:tab:mount", /*SMUI_tab_mount_handler*/ ctx[23], false, false, false),
					listen_dev(div, "SMUI:tab:unmount", /*SMUI_tab_unmount_handler*/ ctx[24], false, false, false),
					listen_dev(div, "keydown", /*keydown_handler*/ ctx[25], false, false, false),
					listen_dev(div, "MDCTab:interacted", /*MDCTab_interacted_handler*/ ctx[26], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			const tabscroller_changes = (dirty[0] & /*$$restProps*/ 1024)
			? get_spread_update(tabscroller_spread_levels, [get_spread_object(prefixFilter(/*$$restProps*/ ctx[10], "tabScroller$"))])
			: {};

			if (dirty[0] & /*$$scope, tabs*/ 134217732) {
				tabscroller_changes.$$scope = { dirty, ctx };
			}

			tabscroller.$set(tabscroller_changes);

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty[0] & /*className*/ 2 && div_class_value !== (div_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-tab-bar": true
				}))) && { class: div_class_value },
				{ role: "tablist" },
				dirty[0] & /*$$restProps*/ 1024 && exclude(/*$$restProps*/ ctx[10], ["tabScroller$"])
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabscroller.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tabscroller.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			/*tabscroller_binding*/ ctx[21](null);
			destroy_component(tabscroller);
			/*div_binding*/ ctx[22](null);
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

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","scrollIntoView","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("TabBar", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { tabs = [] } = $$props;
	let { key = tab => tab } = $$props;
	let { focusOnActivate = true } = $$props;
	let { focusOnProgrammatic = false } = $$props;
	let { useAutomaticActivation = true } = $$props;
	let { active = null } = $$props;
	let element;
	let instance;
	let tabScroller;
	let activeIndex = tabs.indexOf(active);
	let tabAccessorMap = {};
	let tabAccessorWeakMap = new WeakMap();
	let skipFocus = false;
	setContext("SMUI:tab:focusOnActivate", focusOnActivate);
	setContext("SMUI:tab:initialActive", active);

	onMount(() => {
		$$invalidate(4, instance = new MDCTabBarFoundation({
				scrollTo: scrollX => tabScroller.scrollTo(scrollX),
				incrementScroll: scrollXIncrement => tabScroller.incrementScroll(scrollXIncrement),
				getScrollPosition: () => tabScroller.getScrollPosition(),
				getScrollContentWidth: () => tabScroller.getScrollContentWidth(),
				getOffsetWidth: () => getElement().offsetWidth,
				isRTL: () => getComputedStyle(getElement()).getPropertyValue("direction") === "rtl",
				setActiveTab: index => {
					$$invalidate(11, active = tabs[index]);
					$$invalidate(17, activeIndex = index);
					instance.activateTab(index);
				},
				activateTabAtIndex: (index, clientRect) => getAccessor(tabs[index]).activate(clientRect, skipFocus),
				deactivateTabAtIndex: index => getAccessor(tabs[index]).deactivate(),
				focusTabAtIndex: index => getAccessor(tabs[index]).focus(),
				getTabIndicatorClientRectAtIndex: index => getAccessor(tabs[index]).computeIndicatorClientRect(),
				getTabDimensionsAtIndex: index => getAccessor(tabs[index]).computeDimensions(),
				getPreviousActiveTabIndex: () => {
					for (let i = 0; i < tabs.length; i++) {
						if (getAccessor(tabs[i]).active) {
							return i;
						}
					}

					return -1;
				},
				getFocusedTabIndex: () => {
					const tabElements = tabs.map(tab => getAccessor(tab).element);
					const activeElement = document.activeElement;
					return tabElements.indexOf(activeElement);
				},
				getIndexOfTabById: id => tabs.indexOf(id),
				getTabListLength: () => tabs.length,
				notifyTabActivated: index => dispatch(getElement(), "MDCTabBar:activated", { index })
			}));

		instance.init();

		return () => {
			instance.destroy();
		};
	});

	function handleTabMount(event) {
		const accessor = event.detail;
		addAccessor(accessor.tabId, accessor);
	}

	function handleTabUnmount(event) {
		const accessor = event.detail;
		removeAccessor(accessor.tabId);
	}

	function getAccessor(tabId) {
		return tabId instanceof Object
		? tabAccessorWeakMap.get(tabId)
		: tabAccessorMap[tabId];
	}

	function addAccessor(tabId, accessor) {
		if (tabId instanceof Object) {
			tabAccessorWeakMap.set(tabId, accessor);
			$$invalidate(19, tabAccessorWeakMap);
		} else {
			$$invalidate(18, tabAccessorMap[tabId] = accessor, tabAccessorMap);
			$$invalidate(18, tabAccessorMap);
		}
	}

	function removeAccessor(tabId) {
		if (tabId instanceof Object) {
			tabAccessorWeakMap.delete(tabId);
			$$invalidate(19, tabAccessorWeakMap);
		} else {
			delete tabAccessorMap[tabId];
			$$invalidate(18, tabAccessorMap);
		}
	}

	function scrollIntoView(index) {
		instance.scrollIntoView(index);
	}

	function getElement() {
		return element;
	}

	function tabscroller_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			tabScroller = $$value;
			$$invalidate(6, tabScroller);
		});
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(5, element);
		});
	}

	const SMUI_tab_mount_handler = event => handleTabMount(event);
	const SMUI_tab_unmount_handler = event => handleTabUnmount(event);
	const keydown_handler = event => instance && instance.handleKeyDown(event);
	const MDCTab_interacted_handler = event => instance && instance.handleTabInteraction(event);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("tabs" in $$new_props) $$invalidate(2, tabs = $$new_props.tabs);
		if ("key" in $$new_props) $$invalidate(3, key = $$new_props.key);
		if ("focusOnActivate" in $$new_props) $$invalidate(12, focusOnActivate = $$new_props.focusOnActivate);
		if ("focusOnProgrammatic" in $$new_props) $$invalidate(13, focusOnProgrammatic = $$new_props.focusOnProgrammatic);
		if ("useAutomaticActivation" in $$new_props) $$invalidate(14, useAutomaticActivation = $$new_props.useAutomaticActivation);
		if ("active" in $$new_props) $$invalidate(11, active = $$new_props.active);
		if ("$$scope" in $$new_props) $$invalidate(27, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCTabBarFoundation,
		onMount,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		exclude,
		prefixFilter,
		useActions,
		dispatch,
		TabScroller,
		forwardEvents,
		use,
		className,
		tabs,
		key,
		focusOnActivate,
		focusOnProgrammatic,
		useAutomaticActivation,
		active,
		element,
		instance,
		tabScroller,
		activeIndex,
		tabAccessorMap,
		tabAccessorWeakMap,
		skipFocus,
		handleTabMount,
		handleTabUnmount,
		getAccessor,
		addAccessor,
		removeAccessor,
		scrollIntoView,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("tabs" in $$props) $$invalidate(2, tabs = $$new_props.tabs);
		if ("key" in $$props) $$invalidate(3, key = $$new_props.key);
		if ("focusOnActivate" in $$props) $$invalidate(12, focusOnActivate = $$new_props.focusOnActivate);
		if ("focusOnProgrammatic" in $$props) $$invalidate(13, focusOnProgrammatic = $$new_props.focusOnProgrammatic);
		if ("useAutomaticActivation" in $$props) $$invalidate(14, useAutomaticActivation = $$new_props.useAutomaticActivation);
		if ("active" in $$props) $$invalidate(11, active = $$new_props.active);
		if ("element" in $$props) $$invalidate(5, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(4, instance = $$new_props.instance);
		if ("tabScroller" in $$props) $$invalidate(6, tabScroller = $$new_props.tabScroller);
		if ("activeIndex" in $$props) $$invalidate(17, activeIndex = $$new_props.activeIndex);
		if ("tabAccessorMap" in $$props) $$invalidate(18, tabAccessorMap = $$new_props.tabAccessorMap);
		if ("tabAccessorWeakMap" in $$props) $$invalidate(19, tabAccessorWeakMap = $$new_props.tabAccessorWeakMap);
		if ("skipFocus" in $$props) skipFocus = $$new_props.skipFocus;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*active, tabs, activeIndex, instance, focusOnProgrammatic*/ 141332) {
			if (active !== tabs[activeIndex]) {
				$$invalidate(17, activeIndex = tabs.indexOf(active));

				if (instance) {
					skipFocus = !focusOnProgrammatic;
					instance.activateTab(activeIndex);
					skipFocus = false;
				}
			}
		}

		if ($$self.$$.dirty[0] & /*tabs, tabAccessorWeakMap, tabAccessorMap, activeIndex*/ 917508) {
			if (tabs.length) {
				// Manually get the accessor so it is reactive.
				const accessor = tabs[0] instanceof Object
				? tabAccessorWeakMap.get(tabs[0])
				: tabAccessorMap[tabs[0]];

				if (accessor) {
					accessor.forceAccessible(activeIndex === -1);
				}
			}
		}

		if ($$self.$$.dirty[0] & /*instance, useAutomaticActivation*/ 16400) {
			if (instance) {
				instance.setUseAutomaticActivation(useAutomaticActivation);
			}
		}
	};

	return [
		use,
		className,
		tabs,
		key,
		instance,
		element,
		tabScroller,
		forwardEvents,
		handleTabMount,
		handleTabUnmount,
		$$restProps,
		active,
		focusOnActivate,
		focusOnProgrammatic,
		useAutomaticActivation,
		scrollIntoView,
		getElement,
		activeIndex,
		tabAccessorMap,
		tabAccessorWeakMap,
		slots,
		tabscroller_binding,
		div_binding,
		SMUI_tab_mount_handler,
		SMUI_tab_unmount_handler,
		keydown_handler,
		MDCTab_interacted_handler,
		$$scope
	];
}

class TabBar extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1,
			create_fragment$8,
			safe_not_equal,
			{
				use: 0,
				class: 1,
				tabs: 2,
				key: 3,
				focusOnActivate: 12,
				focusOnProgrammatic: 13,
				useAutomaticActivation: 14,
				active: 11,
				scrollIntoView: 15,
				getElement: 16
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TabBar",
			options,
			id: create_fragment$8.name
		});
	}

	get use() {
		throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tabs() {
		throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tabs(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get key() {
		throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get focusOnActivate() {
		throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set focusOnActivate(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get focusOnProgrammatic() {
		throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set focusOnProgrammatic(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get useAutomaticActivation() {
		throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set useAutomaticActivation(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get active() {
		throw new Error("<TabBar>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set active(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get scrollIntoView() {
		return this.$$.ctx[15];
	}

	set scrollIntoView(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[16];
	}

	set getElement(value) {
		throw new Error("<TabBar>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/tabs/_Simple.svelte generated by Svelte v3.37.0 */
const file$7 = "src/routes/demo/tabs/_Simple.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (8:6) <Label>
function create_default_slot_4$1(ctx) {
	let t_value = /*tab*/ ctx[3] + "";
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
			if (dirty & /*tab*/ 8 && t_value !== (t_value = /*tab*/ ctx[3] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$1.name,
		type: "slot",
		source: "(8:6) <Label>",
		ctx
	});

	return block;
}

// (7:4) <Tab {tab}>
function create_default_slot_3$3(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_4$1] },
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

			if (dirty & /*$$scope, tab*/ 72) {
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
		id: create_default_slot_3$3.name,
		type: "slot",
		source: "(7:4) <Tab {tab}>",
		ctx
	});

	return block;
}

// (5:2) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
function create_default_slot_2$7(ctx) {
	let tab;
	let current;

	tab = new Tab({
			props: {
				tab: /*tab*/ ctx[3],
				$$slots: { default: [create_default_slot_3$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(tab.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tab.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tab, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tab_changes = {};
			if (dirty & /*tab*/ 8) tab_changes.tab = /*tab*/ ctx[3];

			if (dirty & /*$$scope, tab*/ 72) {
				tab_changes.$$scope = { dirty, ctx };
			}

			tab.$set(tab_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tab.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tab.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(tab, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$7.name,
		type: "slot",
		source: "(5:2) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>",
		ctx
	});

	return block;
}

// (15:46) <Label>
function create_default_slot_1$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*tab*/ ctx[3]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*tab*/ ctx[3]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$7.name,
		type: "slot",
		source: "(15:46) <Label>",
		ctx
	});

	return block;
}

// (15:6) <Button on:click={() => (active = tab)}>
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
		id: create_default_slot$7.name,
		type: "slot",
		source: "(15:6) <Button on:click={() => (active = tab)}>",
		ctx
	});

	return block;
}

// (14:4) {#each ['Home', 'Merchandise', 'About Us'] as tab}
function create_each_block(ctx) {
	let button;
	let current;

	function click_handler() {
		return /*click_handler*/ ctx[2](/*tab*/ ctx[3]);
	}

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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
		id: create_each_block.name,
		type: "each",
		source: "(14:4) {#each ['Home', 'Merchandise', 'About Us'] as tab}",
		ctx
	});

	return block;
}

function create_fragment$7(ctx) {
	let div2;
	let tabbar;
	let updating_active;
	let t0;
	let div1;
	let div0;
	let t1;
	let t2;
	let t3;
	let pre;
	let t4;
	let t5;
	let current;

	function tabbar_active_binding(value) {
		/*tabbar_active_binding*/ ctx[1](value);
	}

	let tabbar_props = {
		tabs: ["Home", "Merchandise", "About Us"],
		$$slots: {
			default: [create_default_slot_2$7, ({ tab }) => ({ 3: tab }), ({ tab }) => tab ? 8 : 0]
		},
		$$scope: { ctx }
	};

	if (/*active*/ ctx[0] !== void 0) {
		tabbar_props.active = /*active*/ ctx[0];
	}

	tabbar = new TabBar({ props: tabbar_props, $$inline: true });
	binding_callbacks.push(() => bind(tabbar, "active", tabbar_active_binding));
	let each_value = ["Home", "Merchandise", "About Us"];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < 3; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			div2 = element("div");
			create_component(tabbar.$$.fragment);
			t0 = space();
			div1 = element("div");
			div0 = element("div");
			t1 = text("Programmatically select:");
			t2 = space();

			for (let i = 0; i < 3; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			pre = element("pre");
			t4 = text("Selected: ");
			t5 = text(/*active*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(tabbar.$$.fragment, div2_nodes);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { style: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", {});
			var div0_nodes = children(div0);
			t1 = claim_text(div0_nodes, "Programmatically select:");
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);

			for (let i = 0; i < 3; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			pre = claim_element(div2_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t4 = claim_text(pre_nodes, "Selected: ");
			t5 = claim_text(pre_nodes, /*active*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file$7, 12, 4, 309);
			set_style(div1, "margin-top", "1em");
			add_location(div1, file$7, 11, 2, 274);
			attr_dev(pre, "class", "status");
			add_location(pre, file$7, 18, 2, 500);
			add_location(div2, file$7, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			mount_component(tabbar, div2, null);
			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, t1);
			append_dev(div1, t2);

			for (let i = 0; i < 3; i += 1) {
				each_blocks[i].m(div1, null);
			}

			append_dev(div2, t3);
			append_dev(div2, pre);
			append_dev(pre, t4);
			append_dev(pre, t5);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const tabbar_changes = {};

			if (dirty & /*$$scope, tab*/ 72) {
				tabbar_changes.$$scope = { dirty, ctx };
			}

			if (!updating_active && dirty & /*active*/ 1) {
				updating_active = true;
				tabbar_changes.active = /*active*/ ctx[0];
				add_flush_callback(() => updating_active = false);
			}

			tabbar.$set(tabbar_changes);

			if (dirty & /*active*/ 1) {
				each_value = ["Home", "Merchandise", "About Us"];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < 3; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div1, null);
					}
				}

				group_outros();

				for (i = 3; i < 3; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (!current || dirty & /*active*/ 1) set_data_dev(t5, /*active*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabbar.$$.fragment, local);

			for (let i = 0; i < 3; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(tabbar.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < 3; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_component(tabbar);
			destroy_each(each_blocks, detaching);
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
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Simple", slots, []);
	let active = "Home";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Simple> was created with unknown prop '${key}'`);
	});

	function tabbar_active_binding(value) {
		active = value;
		$$invalidate(0, active);
	}

	const click_handler = tab => $$invalidate(0, active = tab);
	$$self.$capture_state = () => ({ Tab, Label: CommonLabel, TabBar, Button: Button_1, active });

	$$self.$inject_state = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, tabbar_active_binding, click_handler];
}

class Simple extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Simple",
			options,
			id: create_fragment$7.name
		});
	}
}

/* src/routes/demo/tabs/_Icons.svelte generated by Svelte v3.37.0 */
const file$6 = "src/routes/demo/tabs/_Icons.svelte";

// (4:6) <Icon class="material-icons">
function create_default_slot_3$2(ctx) {
	let t_value = /*tab*/ ctx[3].icon + "";
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
			if (dirty & /*tab*/ 8 && t_value !== (t_value = /*tab*/ ctx[3].icon + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$2.name,
		type: "slot",
		source: "(4:6) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (5:6) <Label>
function create_default_slot_2$6(ctx) {
	let t_value = /*tab*/ ctx[3].label + "";
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
			if (dirty & /*tab*/ 8 && t_value !== (t_value = /*tab*/ ctx[3].label + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$6.name,
		type: "slot",
		source: "(5:6) <Label>",
		ctx
	});

	return block;
}

// (3:4) <Tab {tab}>
function create_default_slot_1$6(ctx) {
	let icon;
	let t;
	let label;
	let current;

	icon = new CommonIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_3$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_2$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
			t = space();
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty & /*$$scope, tab*/ 24) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const label_changes = {};

			if (dirty & /*$$scope, tab*/ 24) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
			if (detaching) detach_dev(t);
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$6.name,
		type: "slot",
		source: "(3:4) <Tab {tab}>",
		ctx
	});

	return block;
}

// (2:2) <TabBar {tabs} let:tab bind:active>
function create_default_slot$6(ctx) {
	let tab;
	let current;

	tab = new Tab({
			props: {
				tab: /*tab*/ ctx[3],
				$$slots: { default: [create_default_slot_1$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(tab.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tab.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tab, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tab_changes = {};
			if (dirty & /*tab*/ 8) tab_changes.tab = /*tab*/ ctx[3];

			if (dirty & /*$$scope, tab*/ 24) {
				tab_changes.$$scope = { dirty, ctx };
			}

			tab.$set(tab_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tab.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tab.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(tab, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$6.name,
		type: "slot",
		source: "(2:2) <TabBar {tabs} let:tab bind:active>",
		ctx
	});

	return block;
}

function create_fragment$6(ctx) {
	let div;
	let tabbar;
	let updating_active;
	let current;

	function tabbar_active_binding(value) {
		/*tabbar_active_binding*/ ctx[2](value);
	}

	let tabbar_props = {
		tabs: /*tabs*/ ctx[1],
		$$slots: {
			default: [create_default_slot$6, ({ tab }) => ({ 3: tab }), ({ tab }) => tab ? 8 : 0]
		},
		$$scope: { ctx }
	};

	if (/*active*/ ctx[0] !== void 0) {
		tabbar_props.active = /*active*/ ctx[0];
	}

	tabbar = new TabBar({ props: tabbar_props, $$inline: true });
	binding_callbacks.push(() => bind(tabbar, "active", tabbar_active_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			claim_component(tabbar.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div, file$6, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(tabbar, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const tabbar_changes = {};

			if (dirty & /*$$scope, tab*/ 24) {
				tabbar_changes.$$scope = { dirty, ctx };
			}

			if (!updating_active && dirty & /*active*/ 1) {
				updating_active = true;
				tabbar_changes.active = /*active*/ ctx[0];
				add_flush_callback(() => updating_active = false);
			}

			tabbar.$set(tabbar_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(tabbar);
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
	validate_slots("Icons", slots, []);

	let tabs = [
		{ icon: "access_time", label: "Recents" },
		{ icon: "near_me", label: "Nearby" },
		{ icon: "favorite", label: "Favorites" }
	];

	let active = tabs[0];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Icons> was created with unknown prop '${key}'`);
	});

	function tabbar_active_binding(value) {
		active = value;
		$$invalidate(0, active);
	}

	$$self.$capture_state = () => ({ Tab, Icon: CommonIcon, Label: CommonLabel, TabBar, tabs, active });

	$$self.$inject_state = $$props => {
		if ("tabs" in $$props) $$invalidate(1, tabs = $$props.tabs);
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, tabs, tabbar_active_binding];
}

class Icons extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Icons",
			options,
			id: create_fragment$6.name
		});
	}
}

/* src/routes/demo/tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte generated by Svelte v3.37.0 */
const file$5 = "src/routes/demo/tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte";

// (9:6) <Icon class="material-icons">
function create_default_slot_3$1(ctx) {
	let t_value = /*tab*/ ctx[3].icon + "";
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
			if (dirty & /*tab*/ 8 && t_value !== (t_value = /*tab*/ ctx[3].icon + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(9:6) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (10:6) <Label>
function create_default_slot_2$5(ctx) {
	let t_value = /*tab*/ ctx[3].label + "";
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
			if (dirty & /*tab*/ 8 && t_value !== (t_value = /*tab*/ ctx[3].label + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$5.name,
		type: "slot",
		source: "(10:6) <Label>",
		ctx
	});

	return block;
}

// (3:4) <Tab       {tab}       stacked={true}       indicatorSpanOnlyContent={true}       tabIndicator$transition="fade"     >
function create_default_slot_1$5(ctx) {
	let icon;
	let t;
	let label;
	let current;

	icon = new CommonIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_2$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
			t = space();
			create_component(label.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(label.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(label, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty & /*$$scope, tab*/ 24) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const label_changes = {};

			if (dirty & /*$$scope, tab*/ 24) {
				label_changes.$$scope = { dirty, ctx };
			}

			label.$set(label_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(label.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(label.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
			if (detaching) detach_dev(t);
			destroy_component(label, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$5.name,
		type: "slot",
		source: "(3:4) <Tab       {tab}       stacked={true}       indicatorSpanOnlyContent={true}       tabIndicator$transition=\\\"fade\\\"     >",
		ctx
	});

	return block;
}

// (2:2) <TabBar {tabs} let:tab key={(tab) => tab.k} bind:active>
function create_default_slot$5(ctx) {
	let tab;
	let current;

	tab = new Tab({
			props: {
				tab: /*tab*/ ctx[3],
				stacked: true,
				indicatorSpanOnlyContent: true,
				tabIndicator$transition: "fade",
				$$slots: { default: [create_default_slot_1$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(tab.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tab.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tab, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tab_changes = {};
			if (dirty & /*tab*/ 8) tab_changes.tab = /*tab*/ ctx[3];

			if (dirty & /*$$scope, tab*/ 24) {
				tab_changes.$$scope = { dirty, ctx };
			}

			tab.$set(tab_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tab.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tab.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(tab, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$5.name,
		type: "slot",
		source: "(2:2) <TabBar {tabs} let:tab key={(tab) => tab.k} bind:active>",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let div;
	let tabbar;
	let updating_active;
	let t0;
	let pre;
	let t1;
	let t2_value = /*active*/ ctx[0].k + "";
	let t2;
	let current;

	function tabbar_active_binding(value) {
		/*tabbar_active_binding*/ ctx[2](value);
	}

	let tabbar_props = {
		tabs: /*tabs*/ ctx[1],
		key: func$1,
		$$slots: {
			default: [create_default_slot$5, ({ tab }) => ({ 3: tab }), ({ tab }) => tab ? 8 : 0]
		},
		$$scope: { ctx }
	};

	if (/*active*/ ctx[0] !== void 0) {
		tabbar_props.active = /*active*/ ctx[0];
	}

	tabbar = new TabBar({ props: tabbar_props, $$inline: true });
	binding_callbacks.push(() => bind(tabbar, "active", tabbar_active_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(tabbar.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Selected: ");
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			claim_component(tabbar.$$.fragment, div_nodes);
			t0 = claim_space(div_nodes);
			pre = claim_element(div_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t1 = claim_text(pre_nodes, "Selected: ");
			t2 = claim_text(pre_nodes, t2_value);
			pre_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$5, 13, 2, 300);
			add_location(div, file$5, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(tabbar, div, null);
			append_dev(div, t0);
			append_dev(div, pre);
			append_dev(pre, t1);
			append_dev(pre, t2);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const tabbar_changes = {};

			if (dirty & /*$$scope, tab*/ 24) {
				tabbar_changes.$$scope = { dirty, ctx };
			}

			if (!updating_active && dirty & /*active*/ 1) {
				updating_active = true;
				tabbar_changes.active = /*active*/ ctx[0];
				add_flush_callback(() => updating_active = false);
			}

			tabbar.$set(tabbar_changes);
			if ((!current || dirty & /*active*/ 1) && t2_value !== (t2_value = /*active*/ ctx[0].k + "")) set_data_dev(t2, t2_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(tabbar);
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

const func$1 = tab => tab.k;

function instance$5($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("KeyedIconsAboveRestrictedIndicatorsFadeTransition", slots, []);

	let tabs = [
		{ k: 1, icon: "code", label: "Code" },
		{ k: 2, icon: "code", label: "Code" },
		{ k: 3, icon: "code", label: "Code" },
		{ k: 4, icon: "code", label: "Code" }
	];

	let active = tabs[2];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<KeyedIconsAboveRestrictedIndicatorsFadeTransition> was created with unknown prop '${key}'`);
	});

	function tabbar_active_binding(value) {
		active = value;
		$$invalidate(0, active);
	}

	$$self.$capture_state = () => ({ Tab, Icon: CommonIcon, Label: CommonLabel, TabBar, tabs, active });

	$$self.$inject_state = $$props => {
		if ("tabs" in $$props) $$invalidate(1, tabs = $$props.tabs);
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, tabs, tabbar_active_binding];
}

class KeyedIconsAboveRestrictedIndicatorsFadeTransition extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "KeyedIconsAboveRestrictedIndicatorsFadeTransition",
			options,
			id: create_fragment$5.name
		});
	}
}

/* src/routes/demo/tabs/_ScrollingNoInitialActive.svelte generated by Svelte v3.37.0 */
const file$4 = "src/routes/demo/tabs/_ScrollingNoInitialActive.svelte";

// (4:6) <Label>
function create_default_slot_2$4(ctx) {
	let t0;
	let t1_value = /*tab*/ ctx[0] + "";
	let t1;

	const block = {
		c: function create() {
			t0 = text("Tab ");
			t1 = text(t1_value);
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, "Tab ");
			t1 = claim_text(nodes, t1_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*tab*/ 1 && t1_value !== (t1_value = /*tab*/ ctx[0] + "")) set_data_dev(t1, t1_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$4.name,
		type: "slot",
		source: "(4:6) <Label>",
		ctx
	});

	return block;
}

// (3:4) <Tab {tab}>
function create_default_slot_1$4(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_2$4] },
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

			if (dirty & /*$$scope, tab*/ 3) {
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
		id: create_default_slot_1$4.name,
		type: "slot",
		source: "(3:4) <Tab {tab}>",
		ctx
	});

	return block;
}

// (2:2) <TabBar tabs={[...Array(20)].map((v, i) => i + 1)} let:tab>
function create_default_slot$4(ctx) {
	let tab;
	let current;

	tab = new Tab({
			props: {
				tab: /*tab*/ ctx[0],
				$$slots: { default: [create_default_slot_1$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(tab.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tab.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tab, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tab_changes = {};
			if (dirty & /*tab*/ 1) tab_changes.tab = /*tab*/ ctx[0];

			if (dirty & /*$$scope, tab*/ 3) {
				tab_changes.$$scope = { dirty, ctx };
			}

			tab.$set(tab_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tab.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tab.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(tab, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$4.name,
		type: "slot",
		source: "(2:2) <TabBar tabs={[...Array(20)].map((v, i) => i + 1)} let:tab>",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let div;
	let tabbar;
	let current;

	tabbar = new TabBar({
			props: {
				tabs: [...Array(20)].map(func),
				$$slots: {
					default: [
						create_default_slot$4,
						({ tab }) => ({ 0: tab }),
						({ tab }) => tab ? 1 : 0
					]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			claim_component(tabbar.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div, file$4, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(tabbar, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const tabbar_changes = {};

			if (dirty & /*$$scope, tab*/ 3) {
				tabbar_changes.$$scope = { dirty, ctx };
			}

			tabbar.$set(tabbar_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(tabbar);
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

const func = (v, i) => i + 1;

function instance$4($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ScrollingNoInitialActive", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ScrollingNoInitialActive> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Tab, Label: CommonLabel, TabBar });
	return [];
}

class ScrollingNoInitialActive extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ScrollingNoInitialActive",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src/routes/demo/tabs/_MinWidth.svelte generated by Svelte v3.37.0 */
const file$3 = "src/routes/demo/tabs/_MinWidth.svelte";

// (4:6) <Label>
function create_default_slot_2$3(ctx) {
	let t_value = /*tab*/ ctx[2] + "";
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
			if (dirty & /*tab*/ 4 && t_value !== (t_value = /*tab*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(4:6) <Label>",
		ctx
	});

	return block;
}

// (3:4) <Tab {tab} minWidth>
function create_default_slot_1$3(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_2$3] },
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

			if (dirty & /*$$scope, tab*/ 12) {
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
		id: create_default_slot_1$3.name,
		type: "slot",
		source: "(3:4) <Tab {tab} minWidth>",
		ctx
	});

	return block;
}

// (2:2) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
function create_default_slot$3(ctx) {
	let tab;
	let current;

	tab = new Tab({
			props: {
				tab: /*tab*/ ctx[2],
				minWidth: true,
				$$slots: { default: [create_default_slot_1$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(tab.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tab.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tab, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tab_changes = {};
			if (dirty & /*tab*/ 4) tab_changes.tab = /*tab*/ ctx[2];

			if (dirty & /*$$scope, tab*/ 12) {
				tab_changes.$$scope = { dirty, ctx };
			}

			tab.$set(tab_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tab.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tab.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(tab, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$3.name,
		type: "slot",
		source: "(2:2) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let div;
	let tabbar;
	let updating_active;
	let current;

	function tabbar_active_binding(value) {
		/*tabbar_active_binding*/ ctx[1](value);
	}

	let tabbar_props = {
		tabs: ["Home", "Merchandise", "About Us"],
		$$slots: {
			default: [create_default_slot$3, ({ tab }) => ({ 2: tab }), ({ tab }) => tab ? 4 : 0]
		},
		$$scope: { ctx }
	};

	if (/*active*/ ctx[0] !== void 0) {
		tabbar_props.active = /*active*/ ctx[0];
	}

	tabbar = new TabBar({ props: tabbar_props, $$inline: true });
	binding_callbacks.push(() => bind(tabbar, "active", tabbar_active_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			claim_component(tabbar.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(tabbar, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const tabbar_changes = {};

			if (dirty & /*$$scope, tab*/ 12) {
				tabbar_changes.$$scope = { dirty, ctx };
			}

			if (!updating_active && dirty & /*active*/ 1) {
				updating_active = true;
				tabbar_changes.active = /*active*/ ctx[0];
				add_flush_callback(() => updating_active = false);
			}

			tabbar.$set(tabbar_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(tabbar);
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
	validate_slots("MinWidth", slots, []);
	let active = "Home";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MinWidth> was created with unknown prop '${key}'`);
	});

	function tabbar_active_binding(value) {
		active = value;
		$$invalidate(0, active);
	}

	$$self.$capture_state = () => ({ Tab, Label: CommonLabel, TabBar, active });

	$$self.$inject_state = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, tabbar_active_binding];
}

class MinWidth extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "MinWidth",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/tabs/_IconIndicators.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/tabs/_IconIndicators.svelte";

// (8:6) <Label>
function create_default_slot_2$2(ctx) {
	let t_value = /*tab*/ ctx[2] + "";
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
			if (dirty & /*tab*/ 4 && t_value !== (t_value = /*tab*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(8:6) <Label>",
		ctx
	});

	return block;
}

// (3:4) <Tab       {tab}       tabIndicator$type="icon"       tabIndicator$content$class="material-icons"     >
function create_default_slot_1$2(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_2$2] },
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

			if (dirty & /*$$scope, tab*/ 12) {
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
		id: create_default_slot_1$2.name,
		type: "slot",
		source: "(3:4) <Tab       {tab}       tabIndicator$type=\\\"icon\\\"       tabIndicator$content$class=\\\"material-icons\\\"     >",
		ctx
	});

	return block;
}

// (9:6) <svelte:fragment slot="tab-indicator">
function create_tab_indicator_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("star");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "star");
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
		id: create_tab_indicator_slot.name,
		type: "slot",
		source: "(9:6) <svelte:fragment slot=\\\"tab-indicator\\\">",
		ctx
	});

	return block;
}

// (2:2) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
function create_default_slot$2(ctx) {
	let tab;
	let current;

	tab = new Tab({
			props: {
				tab: /*tab*/ ctx[2],
				tabIndicator$type: "icon",
				tabIndicator$content$class: "material-icons",
				$$slots: {
					"tab-indicator": [create_tab_indicator_slot],
					default: [create_default_slot_1$2]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(tab.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tab.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tab, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tab_changes = {};
			if (dirty & /*tab*/ 4) tab_changes.tab = /*tab*/ ctx[2];

			if (dirty & /*$$scope, tab*/ 12) {
				tab_changes.$$scope = { dirty, ctx };
			}

			tab.$set(tab_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tab.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tab.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(tab, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(2:2) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div;
	let tabbar;
	let updating_active;
	let current;

	function tabbar_active_binding(value) {
		/*tabbar_active_binding*/ ctx[1](value);
	}

	let tabbar_props = {
		tabs: ["Home", "Merchandise", "About Us"],
		$$slots: {
			default: [create_default_slot$2, ({ tab }) => ({ 2: tab }), ({ tab }) => tab ? 4 : 0]
		},
		$$scope: { ctx }
	};

	if (/*active*/ ctx[0] !== void 0) {
		tabbar_props.active = /*active*/ ctx[0];
	}

	tabbar = new TabBar({ props: tabbar_props, $$inline: true });
	binding_callbacks.push(() => bind(tabbar, "active", tabbar_active_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(tabbar.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "icon-indicators svelte-qoao06");
			add_location(div, file$2, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(tabbar, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const tabbar_changes = {};

			if (dirty & /*$$scope, tab*/ 12) {
				tabbar_changes.$$scope = { dirty, ctx };
			}

			if (!updating_active && dirty & /*active*/ 1) {
				updating_active = true;
				tabbar_changes.active = /*active*/ ctx[0];
				add_flush_callback(() => updating_active = false);
			}

			tabbar.$set(tabbar_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(tabbar);
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
	validate_slots("IconIndicators", slots, []);
	let active = "Home";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<IconIndicators> was created with unknown prop '${key}'`);
	});

	function tabbar_active_binding(value) {
		active = value;
		$$invalidate(0, active);
	}

	$$self.$capture_state = () => ({ Tab, Label: CommonLabel, TabBar, active });

	$$self.$inject_state = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, tabbar_active_binding];
}

class IconIndicators extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "IconIndicators",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/tabs/_HrefAnchors.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/tabs/_HrefAnchors.svelte";

// (8:6) <Label>
function create_default_slot_2$1(ctx) {
	let t_value = /*tab*/ ctx[2] + "";
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
			if (dirty & /*tab*/ 4 && t_value !== (t_value = /*tab*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(8:6) <Label>",
		ctx
	});

	return block;
}

// (3:4) <Tab       {tab}       href="https://en.wikipedia.org/wiki/{tab.replace(/ /g, '_')}"       target="href-tabs-frame"     >
function create_default_slot_1$1(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
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

			if (dirty & /*$$scope, tab*/ 12) {
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
		id: create_default_slot_1$1.name,
		type: "slot",
		source: "(3:4) <Tab       {tab}       href=\\\"https://en.wikipedia.org/wiki/{tab.replace(/ /g, '_')}\\\"       target=\\\"href-tabs-frame\\\"     >",
		ctx
	});

	return block;
}

// (2:2) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>
function create_default_slot$1(ctx) {
	let tab;
	let current;

	tab = new Tab({
			props: {
				tab: /*tab*/ ctx[2],
				href: "https://en.wikipedia.org/wiki/" + /*tab*/ ctx[2].replace(/ /g, "_"),
				target: "href-tabs-frame",
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(tab.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(tab.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(tab, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const tab_changes = {};
			if (dirty & /*tab*/ 4) tab_changes.tab = /*tab*/ ctx[2];
			if (dirty & /*tab*/ 4) tab_changes.href = "https://en.wikipedia.org/wiki/" + /*tab*/ ctx[2].replace(/ /g, "_");

			if (dirty & /*$$scope, tab*/ 12) {
				tab_changes.$$scope = { dirty, ctx };
			}

			tab.$set(tab_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tab.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tab.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(tab, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(2:2) <TabBar tabs={['Home', 'Merchandise', 'About Us']} let:tab bind:active>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div;
	let tabbar;
	let updating_active;
	let t;
	let iframe;
	let iframe_src_value;
	let current;

	function tabbar_active_binding(value) {
		/*tabbar_active_binding*/ ctx[1](value);
	}

	let tabbar_props = {
		tabs: ["Home", "Merchandise", "About Us"],
		$$slots: {
			default: [create_default_slot$1, ({ tab }) => ({ 2: tab }), ({ tab }) => tab ? 4 : 0]
		},
		$$scope: { ctx }
	};

	if (/*active*/ ctx[0] !== void 0) {
		tabbar_props.active = /*active*/ ctx[0];
	}

	tabbar = new TabBar({ props: tabbar_props, $$inline: true });
	binding_callbacks.push(() => bind(tabbar, "active", tabbar_active_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(tabbar.$$.fragment);
			t = space();
			iframe = element("iframe");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			claim_component(tabbar.$$.fragment, div_nodes);
			t = claim_space(div_nodes);

			iframe = claim_element(div_nodes, "IFRAME", {
				src: true,
				title: true,
				name: true,
				style: true
			});

			children(iframe).forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (iframe.src !== (iframe_src_value = "https://en.wikipedia.org/wiki/Home")) attr_dev(iframe, "src", iframe_src_value);
			attr_dev(iframe, "title", "Selected Tab");
			attr_dev(iframe, "name", "href-tabs-frame");
			set_style(iframe, "width", "100%");
			set_style(iframe, "height", "400px");
			set_style(iframe, "border", "0");
			add_location(iframe, file$1, 11, 2, 259);
			add_location(div, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(tabbar, div, null);
			append_dev(div, t);
			append_dev(div, iframe);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const tabbar_changes = {};

			if (dirty & /*$$scope, tab*/ 12) {
				tabbar_changes.$$scope = { dirty, ctx };
			}

			if (!updating_active && dirty & /*active*/ 1) {
				updating_active = true;
				tabbar_changes.active = /*active*/ ctx[0];
				add_flush_callback(() => updating_active = false);
			}

			tabbar.$set(tabbar_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(tabbar);
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
	validate_slots("HrefAnchors", slots, []);
	let active = "Home";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HrefAnchors> was created with unknown prop '${key}'`);
	});

	function tabbar_active_binding(value) {
		active = value;
		$$invalidate(0, active);
	}

	$$self.$capture_state = () => ({ Tab, Label: CommonLabel, TabBar, active });

	$$self.$inject_state = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, tabbar_active_binding];
}

class HrefAnchors extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "HrefAnchors",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/tabs/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/tabs/index.svelte";

// (12:2) <Demo component={Icons} file="tabs/_Icons.svelte">
function create_default_slot_5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Tabs with icons next to labels");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Tabs with icons next to labels");
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
		source: "(12:2) <Demo component={Icons} file=\\\"tabs/_Icons.svelte\\\">",
		ctx
	});

	return block;
}

// (16:2) <Demo     component={KeyedIconsAboveRestrictedIndicatorsFadeTransition}     file="tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte"   >
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Keyed tabs with icons above labels, indicators restricted to content, and\n    fade transition");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Keyed tabs with icons above labels, indicators restricted to content, and\n    fade transition");
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
		source: "(16:2) <Demo     component={KeyedIconsAboveRestrictedIndicatorsFadeTransition}     file=\\\"tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte\\\"   >",
		ctx
	});

	return block;
}

// (24:2) <Demo     component={ScrollingNoInitialActive}     file="tabs/_ScrollingNoInitialActive.svelte"   >
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Scrolling tabs with no initial active tab");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Scrolling tabs with no initial active tab");
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
		source: "(24:2) <Demo     component={ScrollingNoInitialActive}     file=\\\"tabs/_ScrollingNoInitialActive.svelte\\\"   >",
		ctx
	});

	return block;
}

// (31:2) <Demo component={MinWidth} file="tabs/_MinWidth.svelte">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Min width tabs");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Min width tabs");
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
		source: "(31:2) <Demo component={MinWidth} file=\\\"tabs/_MinWidth.svelte\\\">",
		ctx
	});

	return block;
}

// (33:2) <Demo component={IconIndicators} file="tabs/_IconIndicators.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Icon indicators");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Icon indicators");
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
		source: "(33:2) <Demo component={IconIndicators} file=\\\"tabs/_IconIndicators.svelte\\\">",
		ctx
	});

	return block;
}

// (37:2) <Demo component={HrefAnchors} file="tabs/_HrefAnchors.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Tabs with href attributes render as anchor elements");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Tabs with href attributes render as anchor elements");
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
		source: "(37:2) <Demo component={HrefAnchors} file=\\\"tabs/_HrefAnchors.svelte\\\">",
		ctx
	});

	return block;
}

// (40:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("But they don't activate through keyboard arrow keys. They need to be\n      activated with the enter key.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "But they don't activate through keyboard arrow keys. They need to be\n      activated with the enter key.");
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
		source: "(40:4) <svelte:fragment slot=\\\"subtitle\\\">",
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
	let current;

	demo0 = new Demo({
			props: {
				component: Simple,
				file: "tabs/_Simple.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: Icons,
				file: "tabs/_Icons.svelte",
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: KeyedIconsAboveRestrictedIndicatorsFadeTransition,
				file: "tabs/_KeyedIconsAboveRestrictedIndicatorsFadeTransition.svelte",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: ScrollingNoInitialActive,
				file: "tabs/_ScrollingNoInitialActive.svelte",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo4 = new Demo({
			props: {
				component: MinWidth,
				file: "tabs/_MinWidth.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo5 = new Demo({
			props: {
				component: IconIndicators,
				file: "tabs/_IconIndicators.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo6 = new Demo({
			props: {
				component: HrefAnchors,
				file: "tabs/_HrefAnchors.svelte",
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
			t1 = text("Tabs");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/tab @smui/tab-bar");
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
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1tjfnju\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Tabs");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/tab @smui/tab-bar");
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
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Tabs - SMUI";
			attr_dev(h2, "class", "svelte-1ysm424");
			add_location(h2, file, 5, 2, 71);
			attr_dev(pre, "class", "demo-spaced svelte-1ysm424");
			add_location(pre, file, 7, 2, 88);
			attr_dev(section, "class", "svelte-1ysm424");
			add_location(section, file, 4, 0, 59);
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
	validate_slots("Tabs", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Tabs> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Simple,
		Icons,
		KeyedIconsAboveRestrictedIndicatorsFadeTransition,
		ScrollingNoInitialActive,
		MinWidth,
		IconIndicators,
		HrefAnchors
	});

	return [];
}

class Tabs extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Tabs",
			options,
			id: create_fragment.name
		});
	}
}

export default Tabs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzRiNTU1ZGYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL2ZhZGluZy1mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLWluZGljYXRvci9zbGlkaW5nLWZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWIvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzTWFwLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZGlzcGF0Y2guanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vcHJlZml4RmlsdGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vdXNlQWN0aW9ucy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0Euc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vQnV0dG9uLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi9ub2RlX21vZHVsZXMvQHNtdWkvdGFiLWluZGljYXRvci9UYWJJbmRpY2F0b3Iuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL1RhYi5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9TcGFuLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0NvbW1vbkxhYmVsLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0kuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vU3ZnLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0NvbW1vbkljb24uc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiLWJhci9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWItYmFyL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvdGFiLXNjcm9sbGVyL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLXNjcm9sbGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtZGVmYXVsdC1zY3JvbGxlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvcnRsLW5lZ2F0aXZlLXNjcm9sbGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvdGFiLWJhci9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RhYi1zY3JvbGxlci9ydGwtcmV2ZXJzZS1zY3JvbGxlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItc2Nyb2xsZXIvdXRpbC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90YWItYmFyL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWItYmFyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZm9yd2FyZEV2ZW50c0J1aWxkZXIuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWItYmFyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vY2xhc3NNYXAuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWItYmFyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZGlzcGF0Y2guanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWItYmFyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZXhjbHVkZS5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9wcmVmaXhGaWx0ZXIuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWItYmFyL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vdXNlQWN0aW9ucy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RhYi1iYXIvbm9kZV9tb2R1bGVzL0BzbXVpL3RhYi1zY3JvbGxlci9UYWJTY3JvbGxlci5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy90YWItYmFyL1RhYkJhci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGFicy9fU2ltcGxlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90YWJzL19JY29ucy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGFicy9fS2V5ZWRJY29uc0Fib3ZlUmVzdHJpY3RlZEluZGljYXRvcnNGYWRlVHJhbnNpdGlvbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGFicy9fU2Nyb2xsaW5nTm9Jbml0aWFsQWN0aXZlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90YWJzL19NaW5XaWR0aC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGFicy9fSWNvbkluZGljYXRvcnMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RhYnMvX0hyZWZBbmNob3JzLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90YWJzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgICAgICAgICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgICAgICAgICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgQUNUSVZFOiAnbWRjLXRhYi1pbmRpY2F0b3ItLWFjdGl2ZScsXG4gICAgRkFERTogJ21kYy10YWItaW5kaWNhdG9yLS1mYWRlJyxcbiAgICBOT19UUkFOU0lUSU9OOiAnbWRjLXRhYi1pbmRpY2F0b3ItLW5vLXRyYW5zaXRpb24nLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQnLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBjb21wdXRlQ29udGVudENsaWVudFJlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHRvcDogMCwgcmlnaHQ6IDAsIGJvdHRvbTogMCwgbGVmdDogMCwgd2lkdGg6IDAsIGhlaWdodDogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50U3R5bGVQcm9wZXJ0eTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLnByb3RvdHlwZS5jb21wdXRlQ29udGVudENsaWVudFJlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYkluZGljYXRvckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uIH0gZnJvbSAnLi9mb3VuZGF0aW9uJztcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBzdWJjbGFzcyBpcyBub3QgYSBicmFuY2ggc3RhdGVtZW50ICovXG52YXIgTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgfVxuICAgIE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgfTtcbiAgICBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbn0oTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDRmFkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mYWRpbmctZm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbiB9IGZyb20gJy4vZm91bmRhdGlvbic7XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc3ViY2xhc3MgaXMgbm90IGEgYnJhbmNoIHN0YXRlbWVudCAqL1xudmFyIE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KSB7XG4gICAgICAgIC8vIEVhcmx5IGV4aXQgaWYgbm8gaW5kaWNhdG9yIGlzIHByZXNlbnQgdG8gaGFuZGxlIGNhc2VzIHdoZXJlIGFuIGluZGljYXRvclxuICAgICAgICAvLyBtYXkgYmUgYWN0aXZhdGVkIHdpdGhvdXQgYSBwcmlvciBpbmRpY2F0b3Igc3RhdGVcbiAgICAgICAgaWYgKCFwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBUaGlzIGFuaW1hdGlvbiB1c2VzIHRoZSBGTElQIGFwcHJvYWNoLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBpdCBhdCB0aGUgbGluayBiZWxvdzpcbiAgICAgICAgLy8gaHR0cHM6Ly9hZXJvdHdpc3QuY29tL2Jsb2cvZmxpcC15b3VyLWFuaW1hdGlvbnMvXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGltZW5zaW9ucyBiYXNlZCBvbiB0aGUgZGltZW5zaW9ucyBvZiB0aGUgcHJldmlvdXMgaW5kaWNhdG9yXG4gICAgICAgIHZhciBjdXJyZW50Q2xpZW50UmVjdCA9IHRoaXMuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB3aWR0aERlbHRhID0gcHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0LndpZHRoIC8gY3VycmVudENsaWVudFJlY3Qud2lkdGg7XG4gICAgICAgIHZhciB4UG9zaXRpb24gPSBwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QubGVmdCAtIGN1cnJlbnRDbGllbnRSZWN0LmxlZnQ7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTk9fVFJBTlNJVElPTik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGVYKFwiICsgeFBvc2l0aW9uICsgXCJweCkgc2NhbGVYKFwiICsgd2lkdGhEZWx0YSArIFwiKVwiKTtcbiAgICAgICAgLy8gRm9yY2UgcmVwYWludCBiZWZvcmUgdXBkYXRpbmcgY2xhc3NlcyBhbmQgdHJhbnNmb3JtIHRvIGVuc3VyZSB0aGUgdHJhbnNmb3JtIHByb3Blcmx5IHRha2VzIGVmZmVjdFxuICAgICAgICB0aGlzLmNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLk5PX1RSQU5TSVRJT04pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFDVElWRSk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJycpO1xuICAgIH07XG4gICAgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24ucHJvdG90eXBlLmRlYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbn0oTURDVGFiSW5kaWNhdG9yRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNsaWRpbmctZm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEFDVElWRTogJ21kYy10YWItLWFjdGl2ZScsXG59O1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQVJJQV9TRUxFQ1RFRDogJ2FyaWEtc2VsZWN0ZWQnLFxuICAgIENPTlRFTlRfU0VMRUNUT1I6ICcubWRjLXRhYl9fY29udGVudCcsXG4gICAgSU5URVJBQ1RFRF9FVkVOVDogJ01EQ1RhYjppbnRlcmFjdGVkJyxcbiAgICBSSVBQTEVfU0VMRUNUT1I6ICcubWRjLXRhYl9fcmlwcGxlJyxcbiAgICBUQUJJTkRFWDogJ3RhYkluZGV4JyxcbiAgICBUQUJfSU5ESUNBVE9SX1NFTEVDVE9SOiAnLm1kYy10YWItaW5kaWNhdG9yJyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENUYWJGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENUYWJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYkZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDVGFiRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5mb2N1c09uQWN0aXZhdGVfID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGFjdGl2YXRlSW5kaWNhdG9yOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIG5vdGlmeUludGVyYWN0ZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRPZmZzZXRMZWZ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldE9mZnNldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldENvbnRlbnRPZmZzZXRMZWZ0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldENvbnRlbnRPZmZzZXRXaWR0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBmb2N1czogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUYWJGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gSXQncyB1cCB0byB0aGUgcGFyZW50IGNvbXBvbmVudCB0byBrZWVwIHRyYWNrIG9mIHRoZSBhY3RpdmUgVGFiIGFuZFxuICAgICAgICAvLyBlbnN1cmUgd2UgZG9uJ3QgYWN0aXZhdGUgYSBUYWIgdGhhdCdzIGFscmVhZHkgYWN0aXZlLlxuICAgICAgICB0aGlzLmFkYXB0ZXIubm90aWZ5SW50ZXJhY3RlZCgpO1xuICAgIH07XG4gICAgTURDVGFiRm91bmRhdGlvbi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5BQ1RJVkUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSB0YWIgc2hvdWxkIGZvY3VzIGl0c2VsZiB3aGVuIGFjdGl2YXRlZFxuICAgICAqL1xuICAgIE1EQ1RhYkZvdW5kYXRpb24ucHJvdG90eXBlLnNldEZvY3VzT25BY3RpdmF0ZSA9IGZ1bmN0aW9uIChmb2N1c09uQWN0aXZhdGUpIHtcbiAgICAgICAgdGhpcy5mb2N1c09uQWN0aXZhdGVfID0gZm9jdXNPbkFjdGl2YXRlO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQWN0aXZhdGVzIHRoZSBUYWJcbiAgICAgKi9cbiAgICBNRENUYWJGb3VuZGF0aW9uLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uIChwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAndHJ1ZScpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cihzdHJpbmdzLlRBQklOREVYLCAnMCcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWN0aXZhdGVJbmRpY2F0b3IocHJldmlvdXNJbmRpY2F0b3JDbGllbnRSZWN0KTtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNPbkFjdGl2YXRlXykge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERlYWN0aXZhdGVzIHRoZSBUYWJcbiAgICAgKi9cbiAgICBNRENUYWJGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBFYXJseSBleGl0XG4gICAgICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQUNUSVZFKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldEF0dHIoc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldEF0dHIoc3RyaW5ncy5UQUJJTkRFWCwgJy0xJyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZWFjdGl2YXRlSW5kaWNhdG9yKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBUYWJcbiAgICAgKi9cbiAgICBNRENUYWJGb3VuZGF0aW9uLnByb3RvdHlwZS5jb21wdXRlRGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB2YXIgcm9vdExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0T2Zmc2V0TGVmdCgpO1xuICAgICAgICB2YXIgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyLmdldENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB2YXIgY29udGVudExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0Q29udGVudE9mZnNldExlZnQoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbnRlbnRMZWZ0OiByb290TGVmdCArIGNvbnRlbnRMZWZ0LFxuICAgICAgICAgICAgY29udGVudFJpZ2h0OiByb290TGVmdCArIGNvbnRlbnRMZWZ0ICsgY29udGVudFdpZHRoLFxuICAgICAgICAgICAgcm9vdExlZnQ6IHJvb3RMZWZ0LFxuICAgICAgICAgICAgcm9vdFJpZ2h0OiByb290TGVmdCArIHJvb3RXaWR0aCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUYWJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUYWJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGFiRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiaW1wb3J0IHtcbiAgYnViYmxlLFxuICBsaXN0ZW4sXG4gIHByZXZlbnRfZGVmYXVsdCxcbiAgc3RvcF9wcm9wYWdhdGlvbixcbn0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIERPTSBldmVudHMuXG5jb25zdCBvbGRNb2RpZmllclJlZ2V4ID0gL15bYS16XSsoPzo6KD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIG90aGVyIGV2ZW50cy5cbmNvbnN0IG5ld01vZGlmaWVyUmVnZXggPSAvXlteJF0rKD86XFwkKD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY29tcG9uZW50KSB7XG4gIC8vIFRoaXMgaXMgb3VyIHBzZXVkbyAkb24gZnVuY3Rpb24uIEl0IGlzIGRlZmluZWQgb24gY29tcG9uZW50IG1vdW50LlxuICBsZXQgJG9uO1xuICAvLyBUaGlzIGlzIGEgbGlzdCBvZiBldmVudHMgYm91bmQgYmVmb3JlIG1vdW50LlxuICBsZXQgZXZlbnRzID0gW107XG4gIC8vIFRoaXMgaXMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCAkb24gZnVuY3Rpb24uXG4gIGNvbnN0IGNvbXBvbmVudE9uID0gY29tcG9uZW50LiRvbjtcblxuICAvLyBBbmQgd2Ugb3ZlcnJpZGUgdGhlICRvbiBmdW5jdGlvbiB0byBmb3J3YXJkIGFsbCBib3VuZCBldmVudHMuXG4gIGNvbXBvbmVudC4kb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICBsZXQgZGVzdHJ1Y3RvciA9ICgpID0+IHt9O1xuICAgIGlmICgkb24pIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgIGRlc3RydWN0b3IgPSAkb24oZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgYmVmb3JlIG1vdW50IGJ5IFN2ZWx0ZS5cbiAgICAgIGV2ZW50cy5wdXNoKFtldmVudFR5cGUsIGNhbGxiYWNrXSk7XG4gICAgfVxuICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuXG4gICAgaWYgKG9sZE1vZGlmaWVyTWF0Y2ggJiYgY29uc29sZSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnRXZlbnQgbW9kaWZpZXJzIGluIFNNVUkgbm93IHVzZSBcIiRcIiBpbnN0ZWFkIG9mIFwiOlwiLCBzbyB0aGF0IGFsbCBldmVudHMgY2FuIGJlIGJvdW5kIHdpdGggbW9kaWZpZXJzLiBQbGVhc2UgdXBkYXRlIHlvdXIgZXZlbnQgYmluZGluZzogJyxcbiAgICAgICAgZXZlbnRUeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAvLyBSZW1vdmUgbW9kaWZpZXJzIGZyb20gdGhlIHJlYWwgZXZlbnQuXG4gICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICRvbiBmdW5jdGlvbi5cbiAgICBjb25zdCBjb21wb25lbnREZXN0cnVjdG9yID0gY29tcG9uZW50T24uY2FsbChcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGV2ZW50VHlwZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgZGVzdHJ1Y3RvcigpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudERlc3RydWN0b3IoLi4uYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGUpIHtcbiAgICAvLyBJbnRlcm5hbGx5IGJ1YmJsZSB0aGUgZXZlbnQgdXAgZnJvbSBTdmVsdGUgY29tcG9uZW50cy5cbiAgICBidWJibGUoY29tcG9uZW50LCBlKTtcbiAgfVxuXG4gIHJldHVybiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlc3RydWN0b3JzID0gW107XG4gICAgY29uc3QgZm9yd2FyZERlc3RydWN0b3JzID0ge307XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciBmb3J3YXJkaW5nIGFsbCBib3VuZCBldmVudHMuXG4gICAgJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICAgIGxldCBoYW5kbGVyID0gY2FsbGJhY2s7XG4gICAgICAvLyBET00gYWRkRXZlbnRMaXN0ZW5lciBvcHRpb25zIGFyZ3VtZW50LlxuICAgICAgbGV0IG9wdGlvbnMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcbiAgICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBldmVudCBtb2RpZmllcnMuXG4gICAgICAgIC8vIFN1cHBvcnRlZCBtb2RpZmllcnM6XG4gICAgICAgIC8vIC0gcHJldmVudERlZmF1bHRcbiAgICAgICAgLy8gLSBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgLy8gLSBwYXNzaXZlXG4gICAgICAgIC8vIC0gbm9ucGFzc2l2ZVxuICAgICAgICAvLyAtIGNhcHR1cmVcbiAgICAgICAgLy8gLSBvbmNlXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhwYXJ0cy5zbGljZSgxKS5tYXAoKG1vZCkgPT4gW21vZCwgdHJ1ZV0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9ucGFzc2l2ZSkge1xuICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLm5vbnBhc3NpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBoYW5kbGVyID0gcHJldmVudF9kZWZhdWx0KGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wX3Byb3BhZ2F0aW9uKGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBldmVudCBkaXJlY3RseSwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICAgIGNvbnN0IG9mZiA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGVzdHJ1Y3RvciA9ICgpID0+IHtcbiAgICAgICAgb2ZmKCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRlc3RydWN0b3JzLmluZGV4T2YoZGVzdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGRlc3RydWN0b3JzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkZXN0cnVjdG9ycy5wdXNoKGRlc3RydWN0b3IpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBldmVudCBmcm9tIFN2ZWx0ZS5cbiAgICAgIGlmICghZXZlbnRUeXBlIGluIGZvcndhcmREZXN0cnVjdG9ycykge1xuICAgICAgICBmb3J3YXJkRGVzdHJ1Y3RvcnNbZXZlbnRUeXBlXSA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGZvcndhcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzdHJ1Y3RvcjtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpc3RlbiB0byBhbGwgdGhlIGV2ZW50cyBhZGRlZCBiZWZvcmUgbW91bnQuXG4gICAgICAkb24oZXZlbnRzW2ldWzBdLCBldmVudHNbaV1bMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RydWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnNbaV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgZm9yd2FyZGVycy5cbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoZm9yd2FyZERlc3RydWN0b3JzKSkge1xuICAgICAgICAgIGVudHJ5WzFdKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGFzc01hcChjbGFzc09iaikge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmopXG4gICAgLmZpbHRlcigoW25hbWUsIHZhbHVlXSkgPT4gbmFtZSAhPT0gJycgJiYgdmFsdWUpXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKVxuICAgIC5qb2luKCcgJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goXG4gIGVsZW1lbnQsXG4gIGV2ZW50VHlwZSxcbiAgZGV0YWlsID0ge30sXG4gIGV2ZW50SW5pdCA9IHsgYnViYmxlczogdHJ1ZSB9XG4pIHtcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgZXZlbnRJbml0KTtcbiAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgY29uc3QgZWwgPSAnZ2V0RWxlbWVudCcgaW4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0RWxlbWVudCgpIDogZWxlbWVudDtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBleGNsdWRlKG9iaiwga2V5cykge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGNvbnN0IGNhc2hJbmRleCA9IG5hbWUuaW5kZXhPZignJCcpO1xuICAgIGlmIChcbiAgICAgIGNhc2hJbmRleCAhPT0gLTEgJiZcbiAgICAgIGtleXMuaW5kZXhPZihuYW1lLnN1YnN0cmluZygwLCBjYXNoSW5kZXggKyAxKSkgIT09IC0xXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGtleXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBuZXdPYmpbbmFtZV0gPSBvYmpbbmFtZV07XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZpbHRlcihvYmosIHByZWZpeCkge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGlmIChuYW1lLnN1YnN0cmluZygwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBuZXdPYmpbbmFtZS5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCldID0gb2JqW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdXNlQWN0aW9ucyhub2RlLCBhY3Rpb25zKSB7XG4gIGxldCBvYmplY3RzID0gW107XG5cbiAgaWYgKGFjdGlvbnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgY29uc3QgYWN0aW9uID0gaXNBcnJheSA/IGFjdGlvbnNbaV1bMF0gOiBhY3Rpb25zW2ldO1xuICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSwgYWN0aW9uc1tpXVsxXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUoYWN0aW9ucykge1xuICAgICAgaWYgKCgoYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCkgfHwgMCkgIT0gb2JqZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBub3QgY2hhbmdlIHRoZSBsZW5ndGggb2YgYW4gYWN0aW9ucyBhcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbnMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ3VwZGF0ZScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICAgICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoYWN0aW9uc1tpXVsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvYmplY3RzW2ldICYmICdkZXN0cm95JyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgb2JqZWN0c1tpXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuIiwiPGFcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICB7aHJlZn1cbiAgey4uLiQkcmVzdFByb3BzfT48c2xvdCAvPjwvYVxuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBmb3J3YXJkRXZlbnRzQnVpbGRlciwgdXNlQWN0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwuanMnO1xuXG4gIGV4cG9ydCBsZXQgaHJlZiA9ICdqYXZhc2NyaXB0OnZvaWQoMCk7JztcbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8YnV0dG9uXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgey4uLiQkcmVzdFByb3BzfT48c2xvdCAvPjwvYnV0dG9uXG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCB1c2VBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3BhblxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy10YWItaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAnbWRjLXRhYi1pbmRpY2F0b3ItLWFjdGl2ZSc6IGFjdGl2ZSxcbiAgICAnbWRjLXRhYi1pbmRpY2F0b3ItLWZhZGUnOiB0cmFuc2l0aW9uID09PSAnZmFkZScsXG4gICAgLi4uaW50ZXJuYWxDbGFzc2VzLFxuICB9KX1cbiAgey4uLmV4Y2x1ZGUoJCRyZXN0UHJvcHMsIFsnY29udGVudCQnXSl9XG4+XG4gIDxzcGFuXG4gICAgYmluZDp0aGlzPXtjb250ZW50fVxuICAgIHVzZTp1c2VBY3Rpb25zPXtjb250ZW50JHVzZX1cbiAgICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICAgW2NvbnRlbnQkY2xhc3NdOiB0cnVlLFxuICAgICAgJ21kYy10YWItaW5kaWNhdG9yX19jb250ZW50JzogdHJ1ZSxcbiAgICAgICdtZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lJzogdHlwZSA9PT0gJ3VuZGVybGluZScsXG4gICAgICAnbWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLWljb24nOiB0eXBlID09PSAnaWNvbicsXG4gICAgfSl9XG4gICAgc3R5bGU9e09iamVjdC5lbnRyaWVzKGNvbnRlbnRTdHlsZXMpXG4gICAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAgIC5qb2luKCcgJyl9XG4gICAgYXJpYS1oaWRkZW49e3R5cGUgPT09ICdpY29uJyA/ICd0cnVlJyA6IG51bGx9XG4gICAgey4uLnByZWZpeEZpbHRlcigkJHJlc3RQcm9wcywgJ2NvbnRlbnQkJyl9PjxzbG90IC8+PC9zcGFuXG4gID5cbjwvc3Bhbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHtcbiAgICBNRENGYWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLFxuICAgIE1EQ1NsaWRpbmdUYWJJbmRpY2F0b3JGb3VuZGF0aW9uLFxuICB9IGZyb20gJ0BtYXRlcmlhbC90YWItaW5kaWNhdG9yJztcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgZXhjbHVkZSxcbiAgICBwcmVmaXhGaWx0ZXIsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCBhY3RpdmUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCB0eXBlID0gJ3VuZGVybGluZSc7XG4gIGV4cG9ydCBsZXQgdHJhbnNpdGlvbiA9ICdzbGlkZSc7XG4gIGV4cG9ydCBsZXQgY29udGVudCR1c2UgPSBbXTtcbiAgZXhwb3J0IGxldCBjb250ZW50JGNsYXNzID0gJyc7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnN0YW5jZTtcbiAgbGV0IGNvbnRlbnQ7XG4gIGxldCBpbnRlcm5hbENsYXNzZXMgPSB7fTtcbiAgbGV0IGNvbnRlbnRTdHlsZXMgPSB7fTtcbiAgbGV0IGNoYW5nZVNldHMgPSBbXTtcblxuICBsZXQgb2xkVHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICQ6IGlmIChvbGRUcmFuc2l0aW9uICE9PSB0cmFuc2l0aW9uKSB7XG4gICAgb2xkVHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG4gICAgaW5zdGFuY2UgJiYgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICAgIGNvbnRlbnRTdHlsZXMgPSB7fTtcbiAgICBpbnN0YW5jZSA9IGdldEluc3RhbmNlKCk7XG4gICAgaW5zdGFuY2UuaW5pdCgpO1xuICB9XG5cbiAgLy8gVXNlIHNldHMgb2YgY2hhbmdlcyBmb3IgRE9NIHVwZGF0ZXMsIHRvIGZhY2lsaXRhdGUgYW5pbWF0aW9ucy5cbiAgJDogaWYgKGNoYW5nZVNldHMubGVuZ3RoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGNvbnN0IGNoYW5nZVNldCA9IGNoYW5nZVNldHMuc2hpZnQoKTtcbiAgICAgIGNoYW5nZVNldHMgPSBjaGFuZ2VTZXRzO1xuICAgICAgZm9yIChjb25zdCBmbiBvZiBjaGFuZ2VTZXQpIHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGluc3RhbmNlID0gZ2V0SW5zdGFuY2UoKTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKSB7XG4gICAgY29uc3QgRm91bmRhdGlvbiA9XG4gICAgICB7XG4gICAgICAgIGZhZGU6IE1EQ0ZhZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb24sXG4gICAgICAgIHNsaWRlOiBNRENTbGlkaW5nVGFiSW5kaWNhdG9yRm91bmRhdGlvbixcbiAgICAgIH1bdHJhbnNpdGlvbl0gfHwgTURDU2xpZGluZ1RhYkluZGljYXRvckZvdW5kYXRpb247XG5cbiAgICByZXR1cm4gRm91bmRhdGlvblxuICAgICAgPyBuZXcgRm91bmRhdGlvbih7XG4gICAgICAgICAgYWRkQ2xhc3M6ICguLi5wcm9wcykgPT4gZG9DaGFuZ2UoKCkgPT4gYWRkQ2xhc3MoLi4ucHJvcHMpKSxcbiAgICAgICAgICByZW1vdmVDbGFzczogKC4uLnByb3BzKSA9PiBkb0NoYW5nZSgoKSA9PiByZW1vdmVDbGFzcyguLi5wcm9wcykpLFxuICAgICAgICAgIGNvbXB1dGVDb250ZW50Q2xpZW50UmVjdCxcbiAgICAgICAgICBzZXRDb250ZW50U3R5bGVQcm9wZXJ0eTogKC4uLnByb3BzKSA9PlxuICAgICAgICAgICAgZG9DaGFuZ2UoKCkgPT4gYWRkQ29udGVudFN0eWxlKC4uLnByb3BzKSksXG4gICAgICAgIH0pXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvQ2hhbmdlKGZuKSB7XG4gICAgaWYgKGNoYW5nZVNldHMubGVuZ3RoKSB7XG4gICAgICBjaGFuZ2VTZXRzW2NoYW5nZVNldHMubGVuZ3RoIC0gMV0ucHVzaChmbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZuKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENvbnRlbnRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChjb250ZW50U3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGNvbnRlbnRTdHlsZXNbbmFtZV07XG4gICAgICAgIGNvbnRlbnRTdHlsZXMgPSBjb250ZW50U3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudFN0eWxlc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpIHtcbiAgICBhY3RpdmUgPSB0cnVlO1xuICAgIGluc3RhbmNlLmFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZSgpIHtcbiAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5kZWFjdGl2YXRlKCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCkge1xuICAgIGNoYW5nZVNldHMucHVzaChbXSk7XG4gICAgY2hhbmdlU2V0cyA9IGNoYW5nZVNldHM7XG4gICAgcmV0dXJuIGNvbnRlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3ZlbHRlOmNvbXBvbmVudFxuICB0aGlzPXtjb21wb25lbnR9XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlPXtbXG4gICAgW1xuICAgICAgUmlwcGxlLFxuICAgICAge1xuICAgICAgICByaXBwbGUsXG4gICAgICAgIHVuYm91bmRlZDogZmFsc2UsXG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgYWRkU3R5bGUsXG4gICAgICB9LFxuICAgIF0sXG4gICAgZm9yd2FyZEV2ZW50cyxcbiAgICAuLi51c2UsXG4gIF19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy10YWInOiB0cnVlLFxuICAgICdtZGMtdGFiLS1hY3RpdmUnOiBhY3RpdmUsXG4gICAgJ21kYy10YWItLXN0YWNrZWQnOiBzdGFja2VkLFxuICAgICdtZGMtdGFiLS1taW4td2lkdGgnOiBtaW5XaWR0aCxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBzdHlsZT17T2JqZWN0LmVudHJpZXMoaW50ZXJuYWxTdHlsZXMpXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgLmNvbmNhdChbc3R5bGVdKVxuICAgIC5qb2luKCcgJyl9XG4gIHJvbGU9XCJ0YWJcIlxuICBhcmlhLXNlbGVjdGVkPXthY3RpdmUgPyAndHJ1ZScgOiAnZmFsc2UnfVxuICB0YWJpbmRleD17YWN0aXZlIHx8IGZvcmNlQWNjZXNzaWJsZSA/ICcwJyA6ICctMSd9XG4gIHtocmVmfVxuICBvbjpjbGljaz17aW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlQ2xpY2soKX1cbiAgey4uLmludGVybmFsQXR0cnN9XG4gIHsuLi5leGNsdWRlKCQkcmVzdFByb3BzLCBbJ2NvbnRlbnQkJywgJ3RhYkluZGljYXRvciQnXSl9XG4+XG4gIDxzcGFuXG4gICAgYmluZDp0aGlzPXtjb250ZW50fVxuICAgIHVzZTp1c2VBY3Rpb25zPXtjb250ZW50JHVzZX1cbiAgICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICAgW2NvbnRlbnQkY2xhc3NdOiB0cnVlLFxuICAgICAgJ21kYy10YWJfX2NvbnRlbnQnOiB0cnVlLFxuICAgIH0pfVxuICAgIHsuLi5wcmVmaXhGaWx0ZXIoJCRyZXN0UHJvcHMsICdjb250ZW50JCcpfVxuICA+XG4gICAgPHNsb3QgLz5cbiAgICB7I2lmIGluZGljYXRvclNwYW5Pbmx5Q29udGVudH1cbiAgICAgIDxUYWJJbmRpY2F0b3JcbiAgICAgICAgYmluZDp0aGlzPXt0YWJJbmRpY2F0b3J9XG4gICAgICAgIHthY3RpdmV9XG4gICAgICAgIHsuLi5wcmVmaXhGaWx0ZXIoJCRyZXN0UHJvcHMsICd0YWJJbmRpY2F0b3IkJyl9XG4gICAgICAgID48c2xvdCBuYW1lPVwidGFiLWluZGljYXRvclwiIC8+PC9UYWJJbmRpY2F0b3JcbiAgICAgID5cbiAgICB7L2lmfVxuICA8L3NwYW4+XG4gIHsjaWYgIWluZGljYXRvclNwYW5Pbmx5Q29udGVudH1cbiAgICA8VGFiSW5kaWNhdG9yXG4gICAgICBiaW5kOnRoaXM9e3RhYkluZGljYXRvcn1cbiAgICAgIHthY3RpdmV9XG4gICAgICB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAndGFiSW5kaWNhdG9yJCcpfVxuICAgICAgPjxzbG90IG5hbWU9XCJ0YWItaW5kaWNhdG9yXCIgLz48L1RhYkluZGljYXRvclxuICAgID5cbiAgey9pZn1cbiAgPHNwYW4gY2xhc3M9XCJtZGMtdGFiX19yaXBwbGVcIiAvPlxuPC9zdmVsdGU6Y29tcG9uZW50PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENUYWJGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3RhYic7XG4gIGltcG9ydCB7IG9uTW91bnQsIHNldENvbnRleHQsIGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIGV4Y2x1ZGUsXG4gICAgcHJlZml4RmlsdGVyLFxuICAgIHVzZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbiAgaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUnO1xuICBpbXBvcnQgQSBmcm9tICdAc211aS9jb21tb24vQS5zdmVsdGUnO1xuICBpbXBvcnQgQnV0dG9uIGZyb20gJ0BzbXVpL2NvbW1vbi9CdXR0b24uc3ZlbHRlJztcbiAgaW1wb3J0IFRhYkluZGljYXRvciBmcm9tICdAc211aS90YWItaW5kaWNhdG9yL1RhYkluZGljYXRvci5zdmVsdGUnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCBzdHlsZSA9ICcnO1xuICBsZXQgdGFiSWQ7XG4gIGV4cG9ydCB7IHRhYklkIGFzIHRhYiB9O1xuICBleHBvcnQgbGV0IHJpcHBsZSA9IHRydWU7XG4gIGV4cG9ydCBsZXQgc3RhY2tlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IG1pbldpZHRoID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaW5kaWNhdG9yU3Bhbk9ubHlDb250ZW50ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaHJlZiA9IG51bGw7XG4gIGV4cG9ydCBsZXQgY29udGVudCR1c2UgPSBbXTtcbiAgZXhwb3J0IGxldCBjb250ZW50JGNsYXNzID0gJyc7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnN0YW5jZTtcbiAgbGV0IGNvbnRlbnQ7XG4gIGxldCB0YWJJbmRpY2F0b3I7XG4gIGxldCBpbnRlcm5hbENsYXNzZXMgPSB7fTtcbiAgbGV0IGludGVybmFsU3R5bGVzID0ge307XG4gIGxldCBpbnRlcm5hbEF0dHJzID0ge307XG4gIGxldCBmb2N1c09uQWN0aXZhdGUgPSBnZXRDb250ZXh0KCdTTVVJOnRhYjpmb2N1c09uQWN0aXZhdGUnKTtcbiAgbGV0IGFjdGl2ZSA9IHRhYklkID09PSBnZXRDb250ZXh0KCdTTVVJOnRhYjppbml0aWFsQWN0aXZlJyk7XG4gIGxldCBmb3JjZUFjY2Vzc2libGUgPSBmYWxzZTtcblxuICBleHBvcnQgbGV0IGNvbXBvbmVudCA9IGhyZWYgPT0gbnVsbCA/IEJ1dHRvbiA6IEE7XG5cbiAgc2V0Q29udGV4dCgnU01VSTpsYWJlbDpjb250ZXh0JywgJ3RhYicpO1xuICBzZXRDb250ZXh0KCdTTVVJOmljb246Y29udGV4dCcsICd0YWInKTtcblxuICBpZiAoIXRhYklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1RoZSB0YWIgcHJvcGVydHkgaXMgcmVxdWlyZWQhIEl0IHNob3VsZCBiZSBwYXNzZWQgZG93biBmcm9tIHRoZSBUYWJCYXIgdG8gdGhlIFRhYi4nXG4gICAgKTtcbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSkge1xuICAgIGluc3RhbmNlLnNldEZvY3VzT25BY3RpdmF0ZShmb2N1c09uQWN0aXZhdGUpO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDVGFiRm91bmRhdGlvbih7XG4gICAgICBzZXRBdHRyOiBhZGRBdHRyLFxuICAgICAgYWRkQ2xhc3MsXG4gICAgICByZW1vdmVDbGFzcyxcbiAgICAgIGhhc0NsYXNzLFxuICAgICAgYWN0aXZhdGVJbmRpY2F0b3I6IChwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpID0+XG4gICAgICAgIHRhYkluZGljYXRvci5hY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpLFxuICAgICAgZGVhY3RpdmF0ZUluZGljYXRvcjogKCkgPT4gdGFiSW5kaWNhdG9yLmRlYWN0aXZhdGUoKSxcbiAgICAgIG5vdGlmeUludGVyYWN0ZWQ6ICgpID0+XG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ1RhYjppbnRlcmFjdGVkJywgeyB0YWJJZDogdGFiSWQgfSksXG4gICAgICBnZXRPZmZzZXRMZWZ0OiAoKSA9PiBnZXRFbGVtZW50KCkub2Zmc2V0TGVmdCxcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiBnZXRFbGVtZW50KCkub2Zmc2V0V2lkdGgsXG4gICAgICBnZXRDb250ZW50T2Zmc2V0TGVmdDogKCkgPT4gY29udGVudC5vZmZzZXRMZWZ0LFxuICAgICAgZ2V0Q29udGVudE9mZnNldFdpZHRoOiAoKSA9PiBjb250ZW50Lm9mZnNldFdpZHRoLFxuICAgICAgZm9jdXMsXG4gICAgfSk7XG5cbiAgICBjb25zdCBhY2Nlc3NvciA9IHtcbiAgICAgIHRhYklkLFxuICAgICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50KCk7XG4gICAgICB9LFxuICAgICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZTtcbiAgICAgIH0sXG4gICAgICBmb3JjZUFjY2Vzc2libGUoYWNjZXNzaWJsZSkge1xuICAgICAgICBmb3JjZUFjY2Vzc2libGUgPSBhY2Nlc3NpYmxlO1xuICAgICAgfSxcbiAgICAgIGNvbXB1dGVJbmRpY2F0b3JDbGllbnRSZWN0OiAoKSA9PiB0YWJJbmRpY2F0b3IuY29tcHV0ZUNvbnRlbnRDbGllbnRSZWN0KCksXG4gICAgICBjb21wdXRlRGltZW5zaW9uczogKCkgPT4gaW5zdGFuY2UuY29tcHV0ZURpbWVuc2lvbnMoKSxcbiAgICAgIGZvY3VzLFxuICAgICAgYWN0aXZhdGUsXG4gICAgICBkZWFjdGl2YXRlLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOnRhYjptb3VudCcsIGFjY2Vzc29yKTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOnRhYjp1bm1vdW50JywgYWNjZXNzb3IpO1xuXG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXNcbiAgICAgID8gaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV1cbiAgICAgIDogZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGludGVybmFsU3R5bGVzW25hbWVdO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcyA9IGludGVybmFsU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsQXR0cnNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICBpbnRlcm5hbEF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGFjdGl2YXRlKHByZXZpb3VzSW5kaWNhdG9yQ2xpZW50UmVjdCwgc2tpcEZvY3VzKSB7XG4gICAgYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoc2tpcEZvY3VzKSB7XG4gICAgICBpbnN0YW5jZS5zZXRGb2N1c09uQWN0aXZhdGUoZmFsc2UpO1xuICAgIH1cbiAgICBpbnN0YW5jZS5hY3RpdmF0ZShwcmV2aW91c0luZGljYXRvckNsaWVudFJlY3QpO1xuICAgIGlmIChza2lwRm9jdXMpIHtcbiAgICAgIGluc3RhbmNlLnNldEZvY3VzT25BY3RpdmF0ZShmb2N1c09uQWN0aXZhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKCkge1xuICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBnZXRFbGVtZW50KCkuZm9jdXMoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50LmdldEVsZW1lbnQoKTtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3BhblxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3NwYW5cbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIHVzZUFjdGlvbnMgfSBmcm9tICcuL2ludGVybmFsLmpzJztcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxzdmVsdGU6Y29tcG9uZW50XG4gIHRoaXM9e2NvbXBvbmVudH1cbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U9e1tmb3J3YXJkRXZlbnRzLCAuLi51c2VdfVxuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgICdtZGMtYnV0dG9uX19sYWJlbCc6IGNvbnRleHQgPT09ICdidXR0b24nLFxuICAgICdtZGMtZmFiX19sYWJlbCc6IGNvbnRleHQgPT09ICdmYWInLFxuICAgICdtZGMtdGFiX190ZXh0LWxhYmVsJzogY29udGV4dCA9PT0gJ3RhYicsXG4gICAgJ21kYy1pbWFnZS1saXN0X19sYWJlbCc6IGNvbnRleHQgPT09ICdpbWFnZS1saXN0JyxcbiAgICAnbWRjLXNuYWNrYmFyX19sYWJlbCc6IGNvbnRleHQgPT09ICdzbmFja2JhcicsXG4gICAgJ21kYy1iYW5uZXJfX3RleHQnOiBjb250ZXh0ID09PSAnYmFubmVyJyxcbiAgICAnbWRjLXNlZ21lbnRlZC1idXR0b25fX2xhYmVsJzogY29udGV4dCA9PT0gJ3NlZ21lbnRlZC1idXR0b24nLFxuICAgICdtZGMtZGF0YS10YWJsZV9fcGFnaW5hdGlvbi1yb3dzLXBlci1wYWdlLWxhYmVsJzpcbiAgICAgIGNvbnRleHQgPT09ICdkYXRhLXRhYmxlOnBhZ2luYXRpb24nLFxuICAgICdtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtbGFiZWwnOlxuICAgICAgY29udGV4dCA9PT0gJ2RhdGEtdGFibGU6c29ydGFibGUtaGVhZGVyLWNlbGwnLFxuICB9KX1cbiAgey4uLmNvbnRleHQgPT09ICdzbmFja2JhcicgPyB7ICdhcmlhLWF0b21pYyc6ICdmYWxzZScgfSA6IHt9fVxuICB7dGFiaW5kZXh9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3N2ZWx0ZTpjb21wb25lbnRcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCBjbGFzc01hcCwgdXNlQWN0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgU3BhbiBmcm9tICcuL1NwYW4uc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgZXhwb3J0IGxldCBjb21wb25lbnQgPSBTcGFuO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBnZXRDb250ZXh0KCdTTVVJOmxhYmVsOmNvbnRleHQnKTtcbiAgY29uc3QgdGFiaW5kZXggPSBnZXRDb250ZXh0KCdTTVVJOmxhYmVsOnRhYmluZGV4Jyk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsIjxpIGJpbmQ6dGhpcz17ZWxlbWVudH0gdXNlOnVzZUFjdGlvbnM9e3VzZX0gdXNlOmZvcndhcmRFdmVudHMgey4uLiQkcmVzdFByb3BzfVxuICA+PHNsb3QgLz48L2lcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIHVzZUFjdGlvbnMgfSBmcm9tICcuL2ludGVybmFsLmpzJztcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxzdmcgYmluZDp0aGlzPXtlbGVtZW50fSB1c2U6dXNlQWN0aW9ucz17dXNlfSB1c2U6Zm9yd2FyZEV2ZW50cyB7Li4uJCRyZXN0UHJvcHN9XG4gID48c2xvdCAvPjwvc3ZnXG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCB1c2VBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3ZlbHRlOmNvbXBvbmVudFxuICB0aGlzPXtjb21wb25lbnR9XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlPXtbZm9yd2FyZEV2ZW50cywgLi4udXNlXX1cbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWJ1dHRvbl9faWNvbic6IGNvbnRleHQgPT09ICdidXR0b24nLFxuICAgICdtZGMtZmFiX19pY29uJzogY29udGV4dCA9PT0gJ2ZhYicsXG4gICAgJ21kYy1pY29uLWJ1dHRvbl9faWNvbic6IGNvbnRleHQgPT09ICdpY29uLWJ1dHRvbicsXG4gICAgJ21kYy1pY29uLWJ1dHRvbl9faWNvbi0tb24nOiBjb250ZXh0ID09PSAnaWNvbi1idXR0b24nICYmIG9uLFxuICAgICdtZGMtdGFiX19pY29uJzogY29udGV4dCA9PT0gJ3RhYicsXG4gICAgJ21kYy1iYW5uZXJfX2ljb24nOiBjb250ZXh0ID09PSAnYmFubmVyJyxcbiAgICAnbWRjLXNlZ21lbnRlZC1idXR0b25fX2ljb24nOiBjb250ZXh0ID09PSAnc2VnbWVudGVkLWJ1dHRvbicsXG4gIH0pfVxuICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICB7Li4uY29tcG9uZW50ID09PSBTdmcgPyB7IGZvY3VzYWJsZTogJ2ZhbHNlJywgdGFiaW5kZXg6ICctMScgfSA6IHt9fVxuICB7Li4uJCRyZXN0UHJvcHN9PjxzbG90IC8+PC9zdmVsdGU6Y29tcG9uZW50XG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBmb3J3YXJkRXZlbnRzQnVpbGRlciwgY2xhc3NNYXAgfSBmcm9tICcuL2ludGVybmFsLmpzJztcbiAgaW1wb3J0IEkgZnJvbSAnLi9JLnN2ZWx0ZSc7XG4gIGltcG9ydCBTdmcgZnJvbSAnLi9Tdmcuc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgb24gPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcblxuICBleHBvcnQgbGV0IGNvbXBvbmVudCA9IEk7XG5cbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoJ1NNVUk6aWNvbjpjb250ZXh0Jyk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXcgQSBcInBvbnlmaWxsXCIgaXMgYSBwb2x5ZmlsbCB0aGF0IGRvZXNuJ3QgbW9kaWZ5IHRoZSBnbG9iYWwgcHJvdG90eXBlIGNoYWluLlxuICogVGhpcyBtYWtlcyBwb255ZmlsbHMgc2FmZXIgdGhhbiB0cmFkaXRpb25hbCBwb2x5ZmlsbHMsIGVzcGVjaWFsbHkgZm9yIGxpYnJhcmllcyBsaWtlIE1EQy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb3Nlc3QoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICBpZiAoZWxlbWVudC5jbG9zZXN0KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpO1xuICAgIH1cbiAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChlbCkge1xuICAgICAgICBpZiAobWF0Y2hlcyhlbCwgc2VsZWN0b3IpKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIG5hdGl2ZU1hdGNoZXMgPSBlbGVtZW50Lm1hdGNoZXNcbiAgICAgICAgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3JcbiAgICAgICAgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICByZXR1cm4gbmF0aXZlTWF0Y2hlcy5jYWxsKGVsZW1lbnQsIHNlbGVjdG9yKTtcbn1cbi8qKlxuICogVXNlZCB0byBjb21wdXRlIHRoZSBlc3RpbWF0ZWQgc2Nyb2xsIHdpZHRoIG9mIGVsZW1lbnRzLiBXaGVuIGFuIGVsZW1lbnQgaXNcbiAqIGhpZGRlbiBkdWUgdG8gZGlzcGxheTogbm9uZTsgYmVpbmcgYXBwbGllZCB0byBhIHBhcmVudCBlbGVtZW50LCB0aGUgd2lkdGggaXNcbiAqIHJldHVybmVkIGFzIDAuIEhvd2V2ZXIsIHRoZSBlbGVtZW50IHdpbGwgaGF2ZSBhIHRydWUgd2lkdGggb25jZSBubyBsb25nZXJcbiAqIGluc2lkZSBhIGRpc3BsYXk6IG5vbmUgY29udGV4dC4gVGhpcyBtZXRob2QgY29tcHV0ZXMgYW4gZXN0aW1hdGVkIHdpZHRoIHdoZW5cbiAqIHRoZSBlbGVtZW50IGlzIGhpZGRlbiBvciByZXR1cm5zIHRoZSB0cnVlIHdpZHRoIHdoZW4gdGhlIGVsZW1lbnQgaXMgdmlzYmxlLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRoZSBlbGVtZW50IHdob3NlIHdpZHRoIHRvIGVzdGltYXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlc3RpbWF0ZVNjcm9sbFdpZHRoKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayB0aGUgb2Zmc2V0UGFyZW50LiBJZiB0aGUgZWxlbWVudCBpbmhlcml0cyBkaXNwbGF5OiBub25lIGZyb20gYW55XG4gICAgLy8gcGFyZW50LCB0aGUgb2Zmc2V0UGFyZW50IHByb3BlcnR5IHdpbGwgYmUgbnVsbCAoc2VlXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hUTUxFbGVtZW50L29mZnNldFBhcmVudCkuXG4gICAgLy8gVGhpcyBjaGVjayBlbnN1cmVzIHdlIG9ubHkgY2xvbmUgdGhlIG5vZGUgd2hlbiBuZWNlc3NhcnkuXG4gICAgdmFyIGh0bWxFbCA9IGVsZW1lbnQ7XG4gICAgaWYgKGh0bWxFbC5vZmZzZXRQYXJlbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxFbC5zY3JvbGxXaWR0aDtcbiAgICB9XG4gICAgdmFyIGNsb25lID0gaHRtbEVsLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcbiAgICBjbG9uZS5zdHlsZS5zZXRQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgtOTk5OXB4LCAtOTk5OXB4KScpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgdmFyIHNjcm9sbFdpZHRoID0gY2xvbmUuc2Nyb2xsV2lkdGg7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKGNsb25lKTtcbiAgICByZXR1cm4gc2Nyb2xsV2lkdGg7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb255ZmlsbC5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIEFOSU1BVElORzogJ21kYy10YWItc2Nyb2xsZXItLWFuaW1hdGluZycsXG4gICAgU0NST0xMX0FSRUFfU0NST0xMOiAnbWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWFyZWEtLXNjcm9sbCcsXG4gICAgU0NST0xMX1RFU1Q6ICdtZGMtdGFiLXNjcm9sbGVyX190ZXN0Jyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUkVBX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1hcmVhJyxcbiAgICBDT05URU5UX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXJfX3Njcm9sbC1jb250ZW50Jyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzLCBzdHJpbmdzLCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ1RhYlNjcm9sbGVyUlRMID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ1RhYlNjcm9sbGVyUlRMKGFkYXB0ZXIpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgICB9XG4gICAgcmV0dXJuIE1EQ1RhYlNjcm9sbGVyUlRMO1xufSgpKTtcbmV4cG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJSVEw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ydGwtc2Nyb2xsZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMIH0gZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xudmFyIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0LCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQucHJvdG90eXBlLmdldFNjcm9sbFBvc2l0aW9uUlRMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgdmFyIHJpZ2h0ID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKS5yaWdodDtcbiAgICAgICAgLy8gU2Nyb2xsIHZhbHVlcyBvbiBtb3N0IGJyb3dzZXJzIGFyZSBpbnRzIGluc3RlYWQgb2YgZmxvYXRzIHNvIHdlIHJvdW5kXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHJpZ2h0IC0gY3VycmVudFNjcm9sbExlZnQpO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0LnByb3RvdHlwZS5zY3JvbGxUb1JUTCA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICB2YXIgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKGVkZ2VzLnJpZ2h0IC0gc2Nyb2xsWCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0LnByb3RvdHlwZS5pbmNyZW1lbnRTY3JvbGxSVEwgPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgdmFyIGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyhjdXJyZW50U2Nyb2xsTGVmdCAtIHNjcm9sbFgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxEZWx0YTogY2xhbXBlZFNjcm9sbExlZnQgLSBjdXJyZW50U2Nyb2xsTGVmdCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdC5wcm90b3R5cGUuZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsWDtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdC5wcm90b3R5cGUuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGVudFdpZHRoID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB2YXIgcm9vdFdpZHRoID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIHJpZ2h0OiBjb250ZW50V2lkdGggLSByb290V2lkdGgsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTERlZmF1bHQucHJvdG90eXBlLmNsYW1wU2Nyb2xsVmFsdWVfID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGVkZ2VzID0gdGhpcy5jYWxjdWxhdGVTY3JvbGxFZGdlc18oKTtcbiAgICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KGVkZ2VzLmxlZnQsIHNjcm9sbFgpLCBlZGdlcy5yaWdodCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0O1xufShNRENUYWJTY3JvbGxlclJUTCkpO1xuZXhwb3J0IHsgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0IH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cnRsLWRlZmF1bHQtc2Nyb2xsZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMIH0gZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xudmFyIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlLnByb3RvdHlwZS5nZXRTY3JvbGxQb3NpdGlvblJUTCA9IGZ1bmN0aW9uICh0cmFuc2xhdGVYKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0cmFuc2xhdGVYIC0gY3VycmVudFNjcm9sbExlZnQpO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZS5wcm90b3R5cGUuc2Nyb2xsVG9SVEwgPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgdmFyIGNsYW1wZWRTY3JvbGxMZWZ0ID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXygtc2Nyb2xsWCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaW5hbFNjcm9sbFBvc2l0aW9uOiBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbERlbHRhOiBjbGFtcGVkU2Nyb2xsTGVmdCAtIGN1cnJlbnRTY3JvbGxMZWZ0LFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZS5wcm90b3R5cGUuaW5jcmVtZW50U2Nyb2xsUlRMID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgLSBzY3JvbGxYKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IGNsYW1wZWRTY3JvbGxMZWZ0IC0gY3VycmVudFNjcm9sbExlZnQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlLnByb3RvdHlwZS5nZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbiA9IGZ1bmN0aW9uIChzY3JvbGxYLCB0cmFuc2xhdGVYKSB7XG4gICAgICAgIHJldHVybiBzY3JvbGxYIC0gdHJhbnNsYXRlWDtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmUucHJvdG90eXBlLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbnRlbnRXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgdmFyIHJvb3RXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhT2Zmc2V0V2lkdGgoKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlZnQ6IHJvb3RXaWR0aCAtIGNvbnRlbnRXaWR0aCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZS5wcm90b3R5cGUuY2xhbXBTY3JvbGxWYWx1ZV8gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgICAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4oZWRnZXMucmlnaHQsIHNjcm9sbFgpLCBlZGdlcy5sZWZ0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlO1xufShNRENUYWJTY3JvbGxlclJUTCkpO1xuZXhwb3J0IHsgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RhYlNjcm9sbGVyUlRMTmVnYXRpdmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ydGwtbmVnYXRpdmUtc2Nyb2xsZXIuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMIH0gZnJvbSAnLi9ydGwtc2Nyb2xsZXInO1xudmFyIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSgpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlciAhPT0gbnVsbCAmJiBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICAgIH1cbiAgICBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UucHJvdG90eXBlLmdldFNjcm9sbFBvc2l0aW9uUlRMID0gZnVuY3Rpb24gKHRyYW5zbGF0ZVgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIC8vIFNjcm9sbCB2YWx1ZXMgb24gbW9zdCBicm93c2VycyBhcmUgaW50cyBpbnN0ZWFkIG9mIGZsb2F0cyBzbyB3ZSByb3VuZFxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChjdXJyZW50U2Nyb2xsTGVmdCAtIHRyYW5zbGF0ZVgpO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlLnByb3RvdHlwZS5zY3JvbGxUb1JUTCA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBjdXJyZW50U2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICB2YXIgY2xhbXBlZFNjcm9sbExlZnQgPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmluYWxTY3JvbGxQb3NpdGlvbjogY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxEZWx0YTogY3VycmVudFNjcm9sbExlZnQgLSBjbGFtcGVkU2Nyb2xsTGVmdCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZS5wcm90b3R5cGUuaW5jcmVtZW50U2Nyb2xsUlRMID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIHZhciBjbGFtcGVkU2Nyb2xsTGVmdCA9IHRoaXMuY2xhbXBTY3JvbGxWYWx1ZV8oY3VycmVudFNjcm9sbExlZnQgKyBzY3JvbGxYKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IGNsYW1wZWRTY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IGN1cnJlbnRTY3JvbGxMZWZ0IC0gY2xhbXBlZFNjcm9sbExlZnQsXG4gICAgICAgIH07XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UucHJvdG90eXBlLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uID0gZnVuY3Rpb24gKHNjcm9sbFgsIHRyYW5zbGF0ZVgpIHtcbiAgICAgICAgcmV0dXJuIHNjcm9sbFggKyB0cmFuc2xhdGVYO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJSVExSZXZlcnNlLnByb3RvdHlwZS5jYWxjdWxhdGVTY3JvbGxFZGdlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciByb290V2lkdGggPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiBjb250ZW50V2lkdGggLSByb290V2lkdGgsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZS5wcm90b3R5cGUuY2xhbXBTY3JvbGxWYWx1ZV8gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICB2YXIgZWRnZXMgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEVkZ2VzXygpO1xuICAgICAgICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgoZWRnZXMucmlnaHQsIHNjcm9sbFgpLCBlZGdlcy5sZWZ0KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUYWJTY3JvbGxlclJUTFJldmVyc2U7XG59KE1EQ1RhYlNjcm9sbGVyUlRMKSk7XG5leHBvcnQgeyBNRENUYWJTY3JvbGxlclJUTFJldmVyc2UgfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENUYWJTY3JvbGxlclJUTFJldmVyc2U7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ydGwtcmV2ZXJzZS1zY3JvbGxlci5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMsIF9fcmVhZCB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMRGVmYXVsdCB9IGZyb20gJy4vcnRsLWRlZmF1bHQtc2Nyb2xsZXInO1xuaW1wb3J0IHsgTURDVGFiU2Nyb2xsZXJSVExOZWdhdGl2ZSB9IGZyb20gJy4vcnRsLW5lZ2F0aXZlLXNjcm9sbGVyJztcbmltcG9ydCB7IE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSB9IGZyb20gJy4vcnRsLXJldmVyc2Utc2Nyb2xsZXInO1xudmFyIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRyb2xzIHdoZXRoZXIgd2Ugc2hvdWxkIGhhbmRsZSB0aGUgdHJhbnNpdGlvbmVuZCBhbmQgaW50ZXJhY3Rpb24gZXZlbnRzIGR1cmluZyB0aGUgYW5pbWF0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgX3RoaXMuaXNBbmltYXRpbmdfID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJTY3JvbGxlckZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBldmVudFRhcmdldE1hdGNoZXNTZWxlY3RvcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGFkZFNjcm9sbEFyZWFDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0U2Nyb2xsQ29udGVudFN0eWxlUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH0sXG4gICAgICAgICAgICAgICAgc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRTY3JvbGxDb250ZW50T2Zmc2V0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIENvbXB1dGUgaG9yaXpvbnRhbCBzY3JvbGxiYXIgaGVpZ2h0IG9uIHNjcm9sbGVyIHdpdGggb3ZlcmZsb3cgaW5pdGlhbGx5IGhpZGRlbiwgdGhlbiB1cGRhdGUgb3ZlcmZsb3cgdG8gc2Nyb2xsXG4gICAgICAgIC8vIGFuZCBpbW1lZGlhdGVseSBhZGp1c3QgYm90dG9tIG1hcmdpbiB0byBhdm9pZCB0aGUgc2Nyb2xsYmFyIGluaXRpYWxseSBhcHBlYXJpbmcgYmVmb3JlIEpTIHJ1bnMuXG4gICAgICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ID0gdGhpcy5hZGFwdGVyLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTY3JvbGxBcmVhU3R5bGVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScsIC1ob3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRTY3JvbGxBcmVhQ2xhc3MoTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLmNzc0NsYXNzZXMuU0NST0xMX0FSRUFfU0NST0xMKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENvbXB1dGVzIHRoZSBjdXJyZW50IHZpc3VhbCBzY3JvbGwgcG9zaXRpb25cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldFNjcm9sbFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcHV0ZUN1cnJlbnRTY3JvbGxQb3NpdGlvblJUTF8oKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3VycmVudFRyYW5zbGF0ZVggPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXygpO1xuICAgICAgICB2YXIgc2Nyb2xsTGVmdCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdCgpO1xuICAgICAgICByZXR1cm4gc2Nyb2xsTGVmdCAtIGN1cnJlbnRUcmFuc2xhdGVYO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBpbnRlcmFjdGlvbiBldmVudHMgdGhhdCBvY2N1ciBkdXJpbmcgdHJhbnNpdGlvblxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEVhcmx5IGV4aXQgaWYgd2UgYXJlbid0IGFuaW1hdGluZ1xuICAgICAgICBpZiAoIXRoaXMuaXNBbmltYXRpbmdfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJldmVudCBvdGhlciBldmVudCBsaXN0ZW5lcnMgZnJvbSBoYW5kbGluZyB0aGlzIGV2ZW50XG4gICAgICAgIHRoaXMuc3RvcFNjcm9sbEFuaW1hdGlvbl8oKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHRyYW5zaXRpb25lbmQgZXZlbnRcbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIC8vIEVhcmx5IGV4aXQgaWYgd2UgYXJlbid0IGFuaW1hdGluZyBvciB0aGUgZXZlbnQgd2FzIHRyaWdnZXJlZCBieSBhIGRpZmZlcmVudCBlbGVtZW50LlxuICAgICAgICB2YXIgZXZ0VGFyZ2V0ID0gZXZ0LnRhcmdldDtcbiAgICAgICAgaWYgKCF0aGlzLmlzQW5pbWF0aW5nXyB8fFxuICAgICAgICAgICAgIXRoaXMuYWRhcHRlci5ldmVudFRhcmdldE1hdGNoZXNTZWxlY3RvcihldnRUYXJnZXQsIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5zdHJpbmdzLkNPTlRFTlRfU0VMRUNUT1IpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZ18gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbmNyZW1lbnQgdGhlIHNjcm9sbCB2YWx1ZSBieSB0aGUgc2Nyb2xsWEluY3JlbWVudCB1c2luZyBhbmltYXRpb24uXG4gICAgICogQHBhcmFtIHNjcm9sbFhJbmNyZW1lbnQgVGhlIHZhbHVlIGJ5IHdoaWNoIHRvIGluY3JlbWVudCB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pbmNyZW1lbnRTY3JvbGwgPSBmdW5jdGlvbiAoc2Nyb2xsWEluY3JlbWVudCkge1xuICAgICAgICAvLyBFYXJseSBleGl0IGZvciBub24tb3BlcmF0aW9uYWwgaW5jcmVtZW50IHZhbHVlc1xuICAgICAgICBpZiAoc2Nyb2xsWEluY3JlbWVudCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYW5pbWF0ZV8odGhpcy5nZXRJbmNyZW1lbnRTY3JvbGxPcGVyYXRpb25fKHNjcm9sbFhJbmNyZW1lbnQpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEluY3JlbWVudCB0aGUgc2Nyb2xsIHZhbHVlIGJ5IHRoZSBzY3JvbGxYSW5jcmVtZW50IHdpdGhvdXQgYW5pbWF0aW9uLlxuICAgICAqIEBwYXJhbSBzY3JvbGxYSW5jcmVtZW50IFRoZSB2YWx1ZSBieSB3aGljaCB0byBpbmNyZW1lbnQgdGhlIHNjcm9sbCBwb3NpdGlvblxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuaW5jcmVtZW50U2Nyb2xsSW1tZWRpYXRlID0gZnVuY3Rpb24gKHNjcm9sbFhJbmNyZW1lbnQpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBmb3Igbm9uLW9wZXJhdGlvbmFsIGluY3JlbWVudCB2YWx1ZXNcbiAgICAgICAgaWYgKHNjcm9sbFhJbmNyZW1lbnQgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlcmF0aW9uID0gdGhpcy5nZXRJbmNyZW1lbnRTY3JvbGxPcGVyYXRpb25fKHNjcm9sbFhJbmNyZW1lbnQpO1xuICAgICAgICBpZiAob3BlcmF0aW9uLnNjcm9sbERlbHRhID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uXygpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQob3BlcmF0aW9uLmZpbmFsU2Nyb2xsUG9zaXRpb24pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2Nyb2xscyB0byB0aGUgZ2l2ZW4gc2Nyb2xsWCB2YWx1ZVxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc2Nyb2xsVG8gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVG9SVExfKHNjcm9sbFgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9fKHNjcm9sbFgpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBCcm93c2VyLXNwZWNpZmljIHtAbGluayBNRENUYWJTY3JvbGxlclJUTH0gaW5zdGFuY2UuXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRSVExTY3JvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJ0bFNjcm9sbGVySW5zdGFuY2VfKSB7XG4gICAgICAgICAgICB0aGlzLnJ0bFNjcm9sbGVySW5zdGFuY2VfID0gdGhpcy5ydGxTY3JvbGxlckZhY3RvcnlfKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucnRsU2Nyb2xsZXJJbnN0YW5jZV87XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHRyYW5zbGF0ZVggdmFsdWUgZnJvbSBhIENTUyBtYXRyaXggdHJhbnNmb3JtIGZ1bmN0aW9uIHN0cmluZy5cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRyYW5zZm9ybVZhbHVlID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbENvbnRlbnRTdHlsZVZhbHVlKCd0cmFuc2Zvcm0nKTtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiBubyB0cmFuc2Zvcm0gaXMgcHJlc2VudFxuICAgICAgICBpZiAodHJhbnNmb3JtVmFsdWUgPT09ICdub25lJykge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhlIHRyYW5zZm9ybSB2YWx1ZSBjb21lcyBiYWNrIGFzIGEgbWF0cml4IHRyYW5zZm9ybWF0aW9uIGluIHRoZSBmb3JtXG4gICAgICAgIC8vIG9mIGBtYXRyaXgoYSwgYiwgYywgZCwgdHgsIHR5KWAuIFdlIG9ubHkgY2FyZSBhYm91dCB0eCAodHJhbnNsYXRlWCkgc29cbiAgICAgICAgLy8gd2UncmUgZ29pbmcgdG8gZ3JhYiBhbGwgdGhlIHBhcmVudGhlc2l6ZWQgdmFsdWVzLCBzdHJpcCBvdXQgdHgsIGFuZFxuICAgICAgICAvLyBwYXJzZSBpdC5cbiAgICAgICAgdmFyIG1hdGNoID0gL1xcKCguKz8pXFwpLy5leGVjKHRyYW5zZm9ybVZhbHVlKTtcbiAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1hdHJpeFBhcmFtcyA9IG1hdGNoWzFdO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6YmFuLXRzLWlnbm9yZSBcIlVudXNlZCB2YXJzXCIgc2hvdWxkIGJlIGEgbGludGVyIHdhcm5pbmcsIG5vdCBhIGNvbXBpbGVyIGVycm9yLlxuICAgICAgICAvLyBAdHMtaWdub3JlIFRoZXNlIHVudXNlZCB2YXJpYWJsZXMgc2hvdWxkIHJldGFpbiB0aGVpciBzZW1hbnRpYyBuYW1lcyBmb3IgY2xhcml0eS5cbiAgICAgICAgdmFyIF9hID0gX19yZWFkKG1hdHJpeFBhcmFtcy5zcGxpdCgnLCcpLCA2KSwgYSA9IF9hWzBdLCBiID0gX2FbMV0sIGMgPSBfYVsyXSwgZCA9IF9hWzNdLCB0eCA9IF9hWzRdLCB0eSA9IF9hWzVdO1xuICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0eCk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6YmFuXG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBDYWxjdWxhdGVzIGEgc2FmZSBzY3JvbGwgdmFsdWUgdGhhdCBpcyA+IDAgYW5kIDwgdGhlIG1heCBzY3JvbGwgdmFsdWVcbiAgICAgKiBAcGFyYW0gc2Nyb2xsWCBUaGUgZGlzdGFuY2UgdG8gc2Nyb2xsXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jbGFtcFNjcm9sbFZhbHVlXyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBlZGdlcyA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsRWRnZXNfKCk7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChlZGdlcy5sZWZ0LCBzY3JvbGxYKSwgZWRnZXMucmlnaHQpO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jb21wdXRlQ3VycmVudFNjcm9sbFBvc2l0aW9uUlRMXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVggPSB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRUcmFuc2xhdGVYXygpO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRSVExTY3JvbGxlcigpLmdldFNjcm9sbFBvc2l0aW9uUlRMKHRyYW5zbGF0ZVgpO1xuICAgIH07XG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jYWxjdWxhdGVTY3JvbGxFZGdlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb250ZW50V2lkdGggPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQ29udGVudE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciByb290V2lkdGggPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYU9mZnNldFdpZHRoKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgcmlnaHQ6IGNvbnRlbnRXaWR0aCAtIHJvb3RXaWR0aCxcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludGVybmFsIHNjcm9sbCBtZXRob2RcbiAgICAgKiBAcGFyYW0gc2Nyb2xsWCBUaGUgbmV3IHNjcm9sbCBwb3NpdGlvblxuICAgICAqL1xuICAgIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5wcm90b3R5cGUuc2Nyb2xsVG9fID0gZnVuY3Rpb24gKHNjcm9sbFgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxYID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICB2YXIgc2FmZVNjcm9sbFggPSB0aGlzLmNsYW1wU2Nyb2xsVmFsdWVfKHNjcm9sbFgpO1xuICAgICAgICB2YXIgc2Nyb2xsRGVsdGEgPSBzYWZlU2Nyb2xsWCAtIGN1cnJlbnRTY3JvbGxYO1xuICAgICAgICB0aGlzLmFuaW1hdGVfKHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IHNhZmVTY3JvbGxYLFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IHNjcm9sbERlbHRhLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludGVybmFsIFJUTCBzY3JvbGwgbWV0aG9kXG4gICAgICogQHBhcmFtIHNjcm9sbFggVGhlIG5ldyBzY3JvbGwgcG9zaXRpb25cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLnNjcm9sbFRvUlRMXyA9IGZ1bmN0aW9uIChzY3JvbGxYKSB7XG4gICAgICAgIHZhciBhbmltYXRpb24gPSB0aGlzLmdldFJUTFNjcm9sbGVyKCkuc2Nyb2xsVG9SVEwoc2Nyb2xsWCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZV8oYW5pbWF0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEludGVybmFsIG1ldGhvZCB0byBjb21wdXRlIHRoZSBpbmNyZW1lbnQgc2Nyb2xsIG9wZXJhdGlvbiB2YWx1ZXMuXG4gICAgICogQHBhcmFtIHNjcm9sbFggVGhlIGRlc2lyZWQgc2Nyb2xsIHBvc2l0aW9uIGluY3JlbWVudFxuICAgICAqIEByZXR1cm4gTURDVGFiU2Nyb2xsZXJBbmltYXRpb24gd2l0aCB0aGUgc2FuaXRpemVkIHZhbHVlcyBmb3IgcGVyZm9ybWluZyB0aGUgc2Nyb2xsIG9wZXJhdGlvbi5cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldEluY3JlbWVudFNjcm9sbE9wZXJhdGlvbl8gPSBmdW5jdGlvbiAoc2Nyb2xsWCkge1xuICAgICAgICBpZiAodGhpcy5pc1JUTF8oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UlRMU2Nyb2xsZXIoKS5pbmNyZW1lbnRTY3JvbGxSVEwoc2Nyb2xsWCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGN1cnJlbnRTY3JvbGxYID0gdGhpcy5nZXRTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICB2YXIgdGFyZ2V0U2Nyb2xsWCA9IHNjcm9sbFggKyBjdXJyZW50U2Nyb2xsWDtcbiAgICAgICAgdmFyIHNhZmVTY3JvbGxYID0gdGhpcy5jbGFtcFNjcm9sbFZhbHVlXyh0YXJnZXRTY3JvbGxYKTtcbiAgICAgICAgdmFyIHNjcm9sbERlbHRhID0gc2FmZVNjcm9sbFggLSBjdXJyZW50U2Nyb2xsWDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbmFsU2Nyb2xsUG9zaXRpb246IHNhZmVTY3JvbGxYLFxuICAgICAgICAgICAgc2Nyb2xsRGVsdGE6IHNjcm9sbERlbHRhLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQW5pbWF0ZXMgdGhlIHRhYiBzY3JvbGxpbmdcbiAgICAgKiBAcGFyYW0gYW5pbWF0aW9uIFRoZSBhbmltYXRpb24gdG8gYXBwbHlcbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVfID0gZnVuY3Rpb24gKGFuaW1hdGlvbikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAvLyBFYXJseSBleGl0IGlmIHRyYW5zbGF0ZVggaXMgMCwgd2hpY2ggbWVhbnMgdGhlcmUncyBubyBhbmltYXRpb24gdG8gcGVyZm9ybVxuICAgICAgICBpZiAoYW5pbWF0aW9uLnNjcm9sbERlbHRhID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zdG9wU2Nyb2xsQW5pbWF0aW9uXygpO1xuICAgICAgICAvLyBUaGlzIGFuaW1hdGlvbiB1c2VzIHRoZSBGTElQIGFwcHJvYWNoLlxuICAgICAgICAvLyBSZWFkIG1vcmUgaGVyZTogaHR0cHM6Ly9hZXJvdHdpc3QuY29tL2Jsb2cvZmxpcC15b3VyLWFuaW1hdGlvbnMvXG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTY3JvbGxBcmVhU2Nyb2xsTGVmdChhbmltYXRpb24uZmluYWxTY3JvbGxQb3NpdGlvbik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgXCJ0cmFuc2xhdGVYKFwiICsgYW5pbWF0aW9uLnNjcm9sbERlbHRhICsgXCJweClcIik7XG4gICAgICAgIC8vIEZvcmNlIHJlcGFpbnRcbiAgICAgICAgdGhpcy5hZGFwdGVyLmNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5hZGRDbGFzcyhNRENUYWJTY3JvbGxlckZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5BTklNQVRJTkcpO1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5zZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ25vbmUnKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaXNBbmltYXRpbmdfID0gdHJ1ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0b3BzIHNjcm9sbCBhbmltYXRpb25cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLnN0b3BTY3JvbGxBbmltYXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlzQW5pbWF0aW5nXyA9IGZhbHNlO1xuICAgICAgICB2YXIgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gdGhpcy5nZXRBbmltYXRpbmdTY3JvbGxQb3NpdGlvbl8oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbi5jc3NDbGFzc2VzLkFOSU1BVElORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZVgoMHB4KScpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoY3VycmVudFNjcm9sbFBvc2l0aW9uKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uIGR1cmluZyBhbmltYXRpb25cbiAgICAgKi9cbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmdldEFuaW1hdGluZ1Njcm9sbFBvc2l0aW9uXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRUcmFuc2xhdGVYID0gdGhpcy5jYWxjdWxhdGVDdXJyZW50VHJhbnNsYXRlWF8oKTtcbiAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgaWYgKHRoaXMuaXNSVExfKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJUTFNjcm9sbGVyKCkuZ2V0QW5pbWF0aW5nU2Nyb2xsUG9zaXRpb24oc2Nyb2xsTGVmdCwgY3VycmVudFRyYW5zbGF0ZVgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzY3JvbGxMZWZ0IC0gY3VycmVudFRyYW5zbGF0ZVg7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHRoZSBSVEwgU2Nyb2xsZXIgdG8gdXNlXG4gICAgICovXG4gICAgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5ydGxTY3JvbGxlckZhY3RvcnlfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBCcm93c2VycyBoYXZlIHRocmVlIGRpZmZlcmVudCBpbXBsZW1lbnRhdGlvbnMgb2Ygc2Nyb2xsTGVmdCBpbiBSVEwgbW9kZSxcbiAgICAgICAgLy8gZGVwZW5kZW50IG9uIHRoZSBicm93c2VyLiBUaGUgYmVoYXZpb3IgaXMgYmFzZWQgb2ZmIHRoZSBtYXggTFRSXG4gICAgICAgIC8vIHNjcm9sbExlZnQgdmFsdWUgYW5kIDAuXG4gICAgICAgIC8vXG4gICAgICAgIC8vICogRGVmYXVsdCBzY3JvbGxpbmcgaW4gUlRMICpcbiAgICAgICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IDBcbiAgICAgICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiBNYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAgICAgLy9cbiAgICAgICAgLy8gKiBOZWdhdGl2ZSBzY3JvbGxpbmcgaW4gUlRMICpcbiAgICAgICAgLy8gICAgLSBMZWZ0LW1vc3QgdmFsdWU6IE5lZ2F0ZWQgbWF4IExUUiBzY3JvbGxMZWZ0IHZhbHVlXG4gICAgICAgIC8vICAgIC0gUmlnaHQtbW9zdCB2YWx1ZTogMFxuICAgICAgICAvL1xuICAgICAgICAvLyAqIFJldmVyc2Ugc2Nyb2xsaW5nIGluIFJUTCAqXG4gICAgICAgIC8vICAgIC0gTGVmdC1tb3N0IHZhbHVlOiBNYXggTFRSIHNjcm9sbExlZnQgdmFsdWVcbiAgICAgICAgLy8gICAgLSBSaWdodC1tb3N0IHZhbHVlOiAwXG4gICAgICAgIC8vXG4gICAgICAgIC8vIFdlIHVzZSB0aG9zZSBwcmluY2lwbGVzIGJlbG93IHRvIGRldGVybWluZSB3aGljaCBSVEwgc2Nyb2xsTGVmdFxuICAgICAgICAvLyBiZWhhdmlvciBpcyBpbXBsZW1lbnRlZCBpbiB0aGUgY3VycmVudCBicm93c2VyLlxuICAgICAgICB2YXIgaW5pdGlhbFNjcm9sbExlZnQgPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KGluaXRpYWxTY3JvbGxMZWZ0IC0gMSk7XG4gICAgICAgIHZhciBuZXdTY3JvbGxMZWZ0ID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbEFyZWFTY3JvbGxMZWZ0KCk7XG4gICAgICAgIC8vIElmIHRoZSBuZXdTY3JvbGxMZWZ0IHZhbHVlIGlzIG5lZ2F0aXZlLHRoZW4gd2Uga25vdyB0aGF0IHRoZSBicm93c2VyIGhhc1xuICAgICAgICAvLyBpbXBsZW1lbnRlZCBuZWdhdGl2ZSBSVEwgc2Nyb2xsaW5nLCBzaW5jZSBhbGwgb3RoZXIgaW1wbGVtZW50YXRpb25zIGhhdmVcbiAgICAgICAgLy8gb25seSBwb3NpdGl2ZSB2YWx1ZXMuXG4gICAgICAgIGlmIChuZXdTY3JvbGxMZWZ0IDwgMCkge1xuICAgICAgICAgICAgLy8gVW5kbyB0aGUgc2Nyb2xsTGVmdCB0ZXN0IGNoZWNrXG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoaW5pdGlhbFNjcm9sbExlZnQpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBNRENUYWJTY3JvbGxlclJUTE5lZ2F0aXZlKHRoaXMuYWRhcHRlcik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJvb3RDbGllbnRSZWN0ID0gdGhpcy5hZGFwdGVyLmNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdCgpO1xuICAgICAgICB2YXIgY29udGVudENsaWVudFJlY3QgPSB0aGlzLmFkYXB0ZXIuY29tcHV0ZVNjcm9sbENvbnRlbnRDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciByaWdodEVkZ2VEZWx0YSA9IE1hdGgucm91bmQoY29udGVudENsaWVudFJlY3QucmlnaHQgLSByb290Q2xpZW50UmVjdC5yaWdodCk7XG4gICAgICAgIC8vIFVuZG8gdGhlIHNjcm9sbExlZnQgdGVzdCBjaGVja1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQoaW5pdGlhbFNjcm9sbExlZnQpO1xuICAgICAgICAvLyBCeSBjYWxjdWxhdGluZyB0aGUgY2xpZW50UmVjdCBvZiB0aGUgcm9vdCBlbGVtZW50IGFuZCB0aGUgY2xpZW50UmVjdCBvZlxuICAgICAgICAvLyB0aGUgY29udGVudCBlbGVtZW50LCB3ZSBjYW4gZGV0ZXJtaW5lIGhvdyBtdWNoIHRoZSBzY3JvbGwgdmFsdWUgY2hhbmdlZFxuICAgICAgICAvLyB3aGVuIHdlIHBlcmZvcm1lZCB0aGUgc2Nyb2xsTGVmdCBzdWJ0cmFjdGlvbiBhYm92ZS5cbiAgICAgICAgaWYgKHJpZ2h0RWRnZURlbHRhID09PSBuZXdTY3JvbGxMZWZ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1EQ1RhYlNjcm9sbGVyUlRMUmV2ZXJzZSh0aGlzLmFkYXB0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgTURDVGFiU2Nyb2xsZXJSVExEZWZhdWx0KHRoaXMuYWRhcHRlcik7XG4gICAgfTtcbiAgICBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24ucHJvdG90eXBlLmlzUlRMXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5nZXRTY3JvbGxDb250ZW50U3R5bGVWYWx1ZSgnZGlyZWN0aW9uJykgPT09ICdydGwnO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RhYlNjcm9sbGVyRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IGNzc0NsYXNzZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG4vKipcbiAqIFN0b3JlcyByZXN1bHQgZnJvbSBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodCB0byBhdm9pZCByZWR1bmRhbnQgcHJvY2Vzc2luZy5cbiAqL1xudmFyIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfO1xuLyoqXG4gKiBDb21wdXRlcyB0aGUgaGVpZ2h0IG9mIGJyb3dzZXItcmVuZGVyZWQgaG9yaXpvbnRhbCBzY3JvbGxiYXJzIHVzaW5nIGEgc2VsZi1jcmVhdGVkIHRlc3QgZWxlbWVudC5cbiAqIE1heSByZXR1cm4gMCAoZS5nLiBvbiBPUyBYIGJyb3dzZXJzIHVuZGVyIGRlZmF1bHQgY29uZmlndXJhdGlvbikuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlSG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodChkb2N1bWVudE9iaiwgc2hvdWxkQ2FjaGVSZXN1bHQpIHtcbiAgICBpZiAoc2hvdWxkQ2FjaGVSZXN1bHQgPT09IHZvaWQgMCkgeyBzaG91bGRDYWNoZVJlc3VsdCA9IHRydWU7IH1cbiAgICBpZiAoc2hvdWxkQ2FjaGVSZXN1bHQgJiYgdHlwZW9mIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodF87XG4gICAgfVxuICAgIHZhciBlbCA9IGRvY3VtZW50T2JqLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3Nlcy5TQ1JPTExfVEVTVCk7XG4gICAgZG9jdW1lbnRPYmouYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgdmFyIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQgLSBlbC5jbGllbnRIZWlnaHQ7XG4gICAgZG9jdW1lbnRPYmouYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgaWYgKHNob3VsZENhY2hlUmVzdWx0KSB7XG4gICAgICAgIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHRfID0gaG9yaXpvbnRhbFNjcm9sbGJhckhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIGhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIHN0cmluZ3MgPSB7XG4gICAgQVJST1dfTEVGVF9LRVk6ICdBcnJvd0xlZnQnLFxuICAgIEFSUk9XX1JJR0hUX0tFWTogJ0Fycm93UmlnaHQnLFxuICAgIEVORF9LRVk6ICdFbmQnLFxuICAgIEVOVEVSX0tFWTogJ0VudGVyJyxcbiAgICBIT01FX0tFWTogJ0hvbWUnLFxuICAgIFNQQUNFX0tFWTogJ1NwYWNlJyxcbiAgICBUQUJfQUNUSVZBVEVEX0VWRU5UOiAnTURDVGFiQmFyOmFjdGl2YXRlZCcsXG4gICAgVEFCX1NDUk9MTEVSX1NFTEVDVE9SOiAnLm1kYy10YWItc2Nyb2xsZXInLFxuICAgIFRBQl9TRUxFQ1RPUjogJy5tZGMtdGFiJyxcbn07XG52YXIgbnVtYmVycyA9IHtcbiAgICBBUlJPV19MRUZUX0tFWUNPREU6IDM3LFxuICAgIEFSUk9XX1JJR0hUX0tFWUNPREU6IDM5LFxuICAgIEVORF9LRVlDT0RFOiAzNSxcbiAgICBFTlRFUl9LRVlDT0RFOiAxMyxcbiAgICBFWFRSQV9TQ1JPTExfQU1PVU5UOiAyMCxcbiAgICBIT01FX0tFWUNPREU6IDM2LFxuICAgIFNQQUNFX0tFWUNPREU6IDMyLFxufTtcbmV4cG9ydCB7IG51bWJlcnMsIHN0cmluZ3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgQUNDRVBUQUJMRV9LRVlTID0gbmV3IFNldCgpO1xuLy8gSUUxMSBoYXMgbm8gc3VwcG9ydCBmb3IgbmV3IFNldCB3aXRoIGl0ZXJhYmxlIHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSB0aGlzIGJ5IGhhbmRcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5BUlJPV19MRUZUX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuQVJST1dfUklHSFRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5FTkRfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5IT01FX0tFWSk7XG5BQ0NFUFRBQkxFX0tFWVMuYWRkKHN0cmluZ3MuRU5URVJfS0VZKTtcbkFDQ0VQVEFCTEVfS0VZUy5hZGQoc3RyaW5ncy5TUEFDRV9LRVkpO1xudmFyIEtFWUNPREVfTUFQID0gbmV3IE1hcCgpO1xuLy8gSUUxMSBoYXMgbm8gc3VwcG9ydCBmb3IgbmV3IE1hcCB3aXRoIGl0ZXJhYmxlIHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSB0aGlzIGJ5IGhhbmRcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkFSUk9XX0xFRlRfS0VZQ09ERSwgc3RyaW5ncy5BUlJPV19MRUZUX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5BUlJPV19SSUdIVF9LRVlDT0RFLCBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5FTkRfS0VZQ09ERSwgc3RyaW5ncy5FTkRfS0VZKTtcbktFWUNPREVfTUFQLnNldChudW1iZXJzLkhPTUVfS0VZQ09ERSwgc3RyaW5ncy5IT01FX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5FTlRFUl9LRVlDT0RFLCBzdHJpbmdzLkVOVEVSX0tFWSk7XG5LRVlDT0RFX01BUC5zZXQobnVtYmVycy5TUEFDRV9LRVlDT0RFLCBzdHJpbmdzLlNQQUNFX0tFWSk7XG52YXIgTURDVGFiQmFyRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGFiQmFyRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENUYWJCYXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ1RhYkJhckZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMudXNlQXV0b21hdGljQWN0aXZhdGlvbl8gPSBmYWxzZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGFiQmFyRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUYWJCYXJGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1RhYkJhckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaW5jcmVtZW50U2Nyb2xsOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0U2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldE9mZnNldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGlzUlRMOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVUYWI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVRhYkF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZWFjdGl2YXRlVGFiQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGZvY3VzVGFiQXRJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAoeyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICh7IHJvb3RMZWZ0OiAwLCByb290UmlnaHQ6IDAsIGNvbnRlbnRMZWZ0OiAwLCBjb250ZW50UmlnaHQ6IDAgfSk7IH0sXG4gICAgICAgICAgICAgICAgZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gLTE7IH0sXG4gICAgICAgICAgICAgICAgZ2V0Rm9jdXNlZFRhYkluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiAtMTsgfSxcbiAgICAgICAgICAgICAgICBnZXRJbmRleE9mVGFiQnlJZDogZnVuY3Rpb24gKCkgeyByZXR1cm4gLTE7IH0sXG4gICAgICAgICAgICAgICAgZ2V0VGFiTGlzdExlbmd0aDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlUYWJBY3RpdmF0ZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgYmV0d2VlbiBhdXRvbWF0aWMgYW5kIG1hbnVhbCBhY3RpdmF0aW9uIG1vZGVzLlxuICAgICAqIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzLyN0YWJwYW5lbCBmb3IgZXhhbXBsZXMuXG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VXNlQXV0b21hdGljQWN0aXZhdGlvbiA9IGZ1bmN0aW9uICh1c2VBdXRvbWF0aWNBY3RpdmF0aW9uKSB7XG4gICAgICAgIHRoaXMudXNlQXV0b21hdGljQWN0aXZhdGlvbl8gPSB1c2VBdXRvbWF0aWNBY3RpdmF0aW9uO1xuICAgIH07XG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVUYWIgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzQWN0aXZlSW5kZXggPSB0aGlzLmFkYXB0ZXIuZ2V0UHJldmlvdXNBY3RpdmVUYWJJbmRleCgpO1xuICAgICAgICBpZiAoIXRoaXMuaW5kZXhJc0luUmFuZ2VfKGluZGV4KSB8fCBpbmRleCA9PT0gcHJldmlvdXNBY3RpdmVJbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmV2aW91c0NsaWVudFJlY3Q7XG4gICAgICAgIGlmIChwcmV2aW91c0FjdGl2ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmRlYWN0aXZhdGVUYWJBdEluZGV4KHByZXZpb3VzQWN0aXZlSW5kZXgpO1xuICAgICAgICAgICAgcHJldmlvdXNDbGllbnRSZWN0ID1cbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIuZ2V0VGFiSW5kaWNhdG9yQ2xpZW50UmVjdEF0SW5kZXgocHJldmlvdXNBY3RpdmVJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLmFjdGl2YXRlVGFiQXRJbmRleChpbmRleCwgcHJldmlvdXNDbGllbnRSZWN0KTtcbiAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlUYWJBY3RpdmF0ZWQoaW5kZXgpO1xuICAgIH07XG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgLy8gR2V0IHRoZSBrZXkgZnJvbSB0aGUgZXZlbnRcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZ2V0S2V5RnJvbUV2ZW50XyhldnQpO1xuICAgICAgICAvLyBFYXJseSBleGl0IGlmIHRoZSBldmVudCBrZXkgaXNuJ3Qgb25lIG9mIHRoZSBrZXlib2FyZCBuYXZpZ2F0aW9uIGtleXNcbiAgICAgICAgaWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIGZvciBtb3ZlbWVudCBrZXlzLCBidXQgbm90IGZvciBhY3RpdmF0aW9uIGtleXMsIHNpbmNlIDphY3RpdmUgaXMgdXNlZCB0byBhcHBseSByaXBwbGVcbiAgICAgICAgaWYgKCF0aGlzLmlzQWN0aXZhdGlvbktleV8oa2V5KSkge1xuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudXNlQXV0b21hdGljQWN0aXZhdGlvbl8pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQWN0aXZhdGlvbktleV8oa2V5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuZGV0ZXJtaW5lVGFyZ2V0RnJvbUtleV8odGhpcy5hZGFwdGVyLmdldFByZXZpb3VzQWN0aXZlVGFiSW5kZXgoKSwga2V5KTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRBY3RpdmVUYWIoaW5kZXgpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZFRhYkluZGV4ID0gdGhpcy5hZGFwdGVyLmdldEZvY3VzZWRUYWJJbmRleCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNBY3RpdmF0aW9uS2V5XyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEFjdGl2ZVRhYihmb2N1c2VkVGFiSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5kZXRlcm1pbmVUYXJnZXRGcm9tS2V5Xyhmb2N1c2VkVGFiSW5kZXgsIGtleSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmZvY3VzVGFiQXRJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvVmlldyhpbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIE1EQ1RhYjppbnRlcmFjdGVkIGV2ZW50XG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlVGFiSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRBY3RpdmVUYWIodGhpcy5hZGFwdGVyLmdldEluZGV4T2ZUYWJCeUlkKGV2dC5kZXRhaWwudGFiSWQpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNjcm9sbHMgdGhlIHRhYiBhdCB0aGUgZ2l2ZW4gaW5kZXggaW50byB2aWV3XG4gICAgICogQHBhcmFtIGluZGV4IFRoZSB0YWIgaW5kZXggdG8gbWFrZSB2aXNpYmxlXG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuc2Nyb2xsSW50b1ZpZXcgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgLy8gRWFybHkgZXhpdCBpZiB0aGUgaW5kZXggaXMgb3V0IG9mIHJhbmdlXG4gICAgICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8oaW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQWx3YXlzIHNjcm9sbCB0byAwIGlmIHNjcm9sbGluZyB0byB0aGUgMHRoIGluZGV4XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zY3JvbGxUbygwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBbHdheXMgc2Nyb2xsIHRvIHRoZSBtYXggdmFsdWUgaWYgc2Nyb2xsaW5nIHRvIHRoZSBOdGggaW5kZXhcbiAgICAgICAgLy8gTURDVGFiU2Nyb2xsZXIuc2Nyb2xsVG8oKSB3aWxsIG5ldmVyIHNjcm9sbCBwYXN0IHRoZSBtYXggcG9zc2libGUgdmFsdWVcbiAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmFkYXB0ZXIuZ2V0VGFiTGlzdExlbmd0aCgpIC0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zY3JvbGxUbyh0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsQ29udGVudFdpZHRoKCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUlRMXygpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zY3JvbGxJbnRvVmlld1JUTF8oaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXdfKGluZGV4KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFByaXZhdGUgbWV0aG9kIGZvciBkZXRlcm1pbmluZyB0aGUgaW5kZXggb2YgdGhlIGRlc3RpbmF0aW9uIHRhYiBiYXNlZCBvbiB3aGF0IGtleSB3YXMgcHJlc3NlZFxuICAgICAqIEBwYXJhbSBvcmlnaW4gVGhlIG9yaWdpbmFsIGluZGV4IGZyb20gd2hpY2ggdG8gZGV0ZXJtaW5lIHRoZSBkZXN0aW5hdGlvblxuICAgICAqIEBwYXJhbSBrZXkgVGhlIG5hbWUgb2YgdGhlIGtleVxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmRldGVybWluZVRhcmdldEZyb21LZXlfID0gZnVuY3Rpb24gKG9yaWdpbiwga2V5KSB7XG4gICAgICAgIHZhciBpc1JUTCA9IHRoaXMuaXNSVExfKCk7XG4gICAgICAgIHZhciBtYXhJbmRleCA9IHRoaXMuYWRhcHRlci5nZXRUYWJMaXN0TGVuZ3RoKCkgLSAxO1xuICAgICAgICB2YXIgc2hvdWxkR29Ub0VuZCA9IGtleSA9PT0gc3RyaW5ncy5FTkRfS0VZO1xuICAgICAgICB2YXIgc2hvdWxkRGVjcmVtZW50ID0ga2V5ID09PSBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZICYmICFpc1JUTCB8fCBrZXkgPT09IHN0cmluZ3MuQVJST1dfUklHSFRfS0VZICYmIGlzUlRMO1xuICAgICAgICB2YXIgc2hvdWxkSW5jcmVtZW50ID0ga2V5ID09PSBzdHJpbmdzLkFSUk9XX1JJR0hUX0tFWSAmJiAhaXNSVEwgfHwga2V5ID09PSBzdHJpbmdzLkFSUk9XX0xFRlRfS0VZICYmIGlzUlRMO1xuICAgICAgICB2YXIgaW5kZXggPSBvcmlnaW47XG4gICAgICAgIGlmIChzaG91bGRHb1RvRW5kKSB7XG4gICAgICAgICAgICBpbmRleCA9IG1heEluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNob3VsZERlY3JlbWVudCkge1xuICAgICAgICAgICAgaW5kZXggLT0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzaG91bGRJbmNyZW1lbnQpIHtcbiAgICAgICAgICAgIGluZGV4ICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaW5kZXggPSBtYXhJbmRleDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbmRleCA+IG1heEluZGV4KSB7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc2Nyb2xsIGluY3JlbWVudCB0aGF0IHdpbGwgbWFrZSB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCB2aXNpYmxlXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAgICogQHBhcmFtIG5leHRJbmRleCBUaGUgaW5kZXggb2YgdGhlIG5leHQgdGFiXG4gICAgICogQHBhcmFtIHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIFRhYiBCYXJcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5jYWxjdWxhdGVTY3JvbGxJbmNyZW1lbnRfID0gZnVuY3Rpb24gKGluZGV4LCBuZXh0SW5kZXgsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCkge1xuICAgICAgICB2YXIgbmV4dFRhYkRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXIuZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICAgICAgdmFyIHJlbGF0aXZlQ29udGVudExlZnQgPSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50TGVmdCAtIHNjcm9sbFBvc2l0aW9uIC0gYmFyV2lkdGg7XG4gICAgICAgIHZhciByZWxhdGl2ZUNvbnRlbnRSaWdodCA9IG5leHRUYWJEaW1lbnNpb25zLmNvbnRlbnRSaWdodCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICB2YXIgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0IC0gbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICB2YXIgcmlnaHRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRMZWZ0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICBpZiAobmV4dEluZGV4IDwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1pbihsZWZ0SW5jcmVtZW50LCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5tYXgocmlnaHRJbmNyZW1lbnQsIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgc2Nyb2xsIGluY3JlbWVudCB0aGF0IHdpbGwgbWFrZSB0aGUgdGFiIGF0IHRoZSBnaXZlbiBpbmRleCB2aXNpYmxlIGluIFJUTFxuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIHRhYlxuICAgICAqIEBwYXJhbSBuZXh0SW5kZXggVGhlIGluZGV4IG9mIHRoZSBuZXh0IHRhYlxuICAgICAqIEBwYXJhbSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBUYWIgQmFyXG4gICAgICogQHBhcmFtIHNjcm9sbENvbnRlbnRXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHNjcm9sbCBjb250ZW50XG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50UlRMXyA9IGZ1bmN0aW9uIChpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgsIHNjcm9sbENvbnRlbnRXaWR0aCkge1xuICAgICAgICB2YXIgbmV4dFRhYkRpbWVuc2lvbnMgPSB0aGlzLmFkYXB0ZXIuZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXgobmV4dEluZGV4KTtcbiAgICAgICAgdmFyIHJlbGF0aXZlQ29udGVudExlZnQgPSBzY3JvbGxDb250ZW50V2lkdGggLSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50TGVmdCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICB2YXIgcmVsYXRpdmVDb250ZW50UmlnaHQgPSBzY3JvbGxDb250ZW50V2lkdGggLSBuZXh0VGFiRGltZW5zaW9ucy5jb250ZW50UmlnaHQgLSBzY3JvbGxQb3NpdGlvbiAtIGJhcldpZHRoO1xuICAgICAgICB2YXIgbGVmdEluY3JlbWVudCA9IHJlbGF0aXZlQ29udGVudFJpZ2h0ICsgbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICB2YXIgcmlnaHRJbmNyZW1lbnQgPSByZWxhdGl2ZUNvbnRlbnRMZWZ0IC0gbnVtYmVycy5FWFRSQV9TQ1JPTExfQU1PVU5UO1xuICAgICAgICBpZiAobmV4dEluZGV4ID4gaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChsZWZ0SW5jcmVtZW50LCAwKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTWF0aC5taW4ocmlnaHRJbmNyZW1lbnQsIDApO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB0aGUgaW5kZXggb2YgdGhlIGFkamFjZW50IHRhYiBjbG9zZXN0IHRvIGVpdGhlciBlZGdlIG9mIHRoZSBUYWIgQmFyXG4gICAgICogQHBhcmFtIGluZGV4IFRoZSBpbmRleCBvZiB0aGUgdGFiXG4gICAgICogQHBhcmFtIHRhYkRpbWVuc2lvbnMgVGhlIGRpbWVuc2lvbnMgb2YgdGhlIHRhYlxuICAgICAqIEBwYXJhbSBzY3JvbGxQb3NpdGlvbiBUaGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb25cbiAgICAgKiBAcGFyYW0gYmFyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSB0YWIgYmFyXG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyA9IGZ1bmN0aW9uIChpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUYWJzIGFyZSBsYWlkIG91dCBpbiB0aGUgVGFiIFNjcm9sbGVyIGxpa2UgdGhpczpcbiAgICAgICAgICpcbiAgICAgICAgICogICAgU2Nyb2xsIFBvc2l0aW9uXG4gICAgICAgICAqICAgICstLS0rXG4gICAgICAgICAqICAgIHwgICB8ICAgQmFyIFdpZHRoXG4gICAgICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgIHwgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgIHwgICBWICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWXG4gICAgICAgICAqICAgIHwgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgIFYgICB8ICAgICAgICAgICAgIFRhYiBTY3JvbGxlciAgICAgICAgICB8XG4gICAgICAgICAqICAgICstLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLStcbiAgICAgICAgICogICAgfCAgICBUYWIgICAgIHwgICAgICBUYWIgICAgIHwgICAgICAgIFRhYiAgICAgICAgfFxuICAgICAgICAgKiAgICArLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAqICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXG4gICAgICAgICAqXG4gICAgICAgICAqIFRvIGRldGVybWluZSB0aGUgbmV4dCBhZGphY2VudCBpbmRleCwgd2UgbG9vayBhdCB0aGUgVGFiIHJvb3QgbGVmdCBhbmRcbiAgICAgICAgICogVGFiIHJvb3QgcmlnaHQsIGJvdGggcmVsYXRpdmUgdG8gdGhlIHNjcm9sbCBwb3NpdGlvbi4gSWYgdGhlIFRhYiByb290XG4gICAgICAgICAqIGxlZnQgaXMgbGVzcyB0aGFuIDAsIHRoZW4gd2Uga25vdyBpdCdzIG91dCBvZiB2aWV3IHRvIHRoZSBsZWZ0LiBJZiB0aGVcbiAgICAgICAgICogVGFiIHJvb3QgcmlnaHQgbWludXMgdGhlIGJhciB3aWR0aCBpcyBncmVhdGVyIHRoYW4gMCwgd2Uga25vdyB0aGUgVGFiIGlzXG4gICAgICAgICAqIG91dCBvZiB2aWV3IHRvIHRoZSByaWdodC4gRnJvbSB0aGVyZSwgd2UgZWl0aGVyIGluY3JlbWVudCBvciBkZWNyZW1lbnRcbiAgICAgICAgICogdGhlIGluZGV4LlxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHJlbGF0aXZlUm9vdExlZnQgPSB0YWJEaW1lbnNpb25zLnJvb3RMZWZ0IC0gc2Nyb2xsUG9zaXRpb247XG4gICAgICAgIHZhciByZWxhdGl2ZVJvb3RSaWdodCA9IHRhYkRpbWVuc2lvbnMucm9vdFJpZ2h0IC0gc2Nyb2xsUG9zaXRpb24gLSBiYXJXaWR0aDtcbiAgICAgICAgdmFyIHJlbGF0aXZlUm9vdERlbHRhID0gcmVsYXRpdmVSb290TGVmdCArIHJlbGF0aXZlUm9vdFJpZ2h0O1xuICAgICAgICB2YXIgbGVmdEVkZ2VJc0Nsb3NlciA9IHJlbGF0aXZlUm9vdExlZnQgPCAwIHx8IHJlbGF0aXZlUm9vdERlbHRhIDwgMDtcbiAgICAgICAgdmFyIHJpZ2h0RWRnZUlzQ2xvc2VyID0gcmVsYXRpdmVSb290UmlnaHQgPiAwIHx8IHJlbGF0aXZlUm9vdERlbHRhID4gMDtcbiAgICAgICAgaWYgKGxlZnRFZGdlSXNDbG9zZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBpbmRleCAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJpZ2h0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgdGhlIGluZGV4IG9mIHRoZSBhZGphY2VudCB0YWIgY2xvc2VzdCB0byBlaXRoZXIgZWRnZSBvZiB0aGUgVGFiIEJhciBpbiBSVExcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWJcbiAgICAgKiBAcGFyYW0gdGFiRGltZW5zaW9ucyBUaGUgZGltZW5zaW9ucyBvZiB0aGUgdGFiXG4gICAgICogQHBhcmFtIHNjcm9sbFBvc2l0aW9uIFRoZSBjdXJyZW50IHNjcm9sbCBwb3NpdGlvblxuICAgICAqIEBwYXJhbSBiYXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHRhYiBiYXJcbiAgICAgKiBAcGFyYW0gc2Nyb2xsQ29udGVudFdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgc2Nyb2xsZXIgY29udGVudFxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmZpbmRBZGphY2VudFRhYkluZGV4Q2xvc2VzdFRvRWRnZVJUTF8gPSBmdW5jdGlvbiAoaW5kZXgsIHRhYkRpbWVuc2lvbnMsIHNjcm9sbFBvc2l0aW9uLCBiYXJXaWR0aCwgc2Nyb2xsQ29udGVudFdpZHRoKSB7XG4gICAgICAgIHZhciByb290TGVmdCA9IHNjcm9sbENvbnRlbnRXaWR0aCAtIHRhYkRpbWVuc2lvbnMucm9vdExlZnQgLSBiYXJXaWR0aCAtIHNjcm9sbFBvc2l0aW9uO1xuICAgICAgICB2YXIgcm9vdFJpZ2h0ID0gc2Nyb2xsQ29udGVudFdpZHRoIC0gdGFiRGltZW5zaW9ucy5yb290UmlnaHQgLSBzY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgdmFyIHJvb3REZWx0YSA9IHJvb3RMZWZ0ICsgcm9vdFJpZ2h0O1xuICAgICAgICB2YXIgbGVmdEVkZ2VJc0Nsb3NlciA9IHJvb3RMZWZ0ID4gMCB8fCByb290RGVsdGEgPiAwO1xuICAgICAgICB2YXIgcmlnaHRFZGdlSXNDbG9zZXIgPSByb290UmlnaHQgPCAwIHx8IHJvb3REZWx0YSA8IDA7XG4gICAgICAgIGlmIChsZWZ0RWRnZUlzQ2xvc2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyaWdodEVkZ2VJc0Nsb3Nlcikge1xuICAgICAgICAgICAgcmV0dXJuIGluZGV4IC0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBrZXkgYXNzb2NpYXRlZCB3aXRoIGEga2V5ZG93biBldmVudFxuICAgICAqIEBwYXJhbSBldnQgVGhlIGtleWRvd24gZXZlbnRcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRLZXlGcm9tRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBpZiAoQUNDRVBUQUJMRV9LRVlTLmhhcyhldnQua2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGV2dC5rZXk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEtFWUNPREVfTUFQLmdldChldnQua2V5Q29kZSk7XG4gICAgfTtcbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0FjdGl2YXRpb25LZXlfID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID09PSBzdHJpbmdzLlNQQUNFX0tFWSB8fCBrZXkgPT09IHN0cmluZ3MuRU5URVJfS0VZO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB3aGV0aGVyIGEgZ2l2ZW4gaW5kZXggaXMgaW5jbHVzaXZlbHkgYmV0d2VlbiB0aGUgZW5kc1xuICAgICAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggdG8gdGVzdFxuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLmluZGV4SXNJblJhbmdlXyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuYWRhcHRlci5nZXRUYWJMaXN0TGVuZ3RoKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB2aWV3J3MgUlRMIHByb3BlcnR5XG4gICAgICovXG4gICAgTURDVGFiQmFyRm91bmRhdGlvbi5wcm90b3R5cGUuaXNSVExfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmlzUlRMKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlldyBmb3IgbGVmdC10by1yaWdodCB1c2VyIGFnZW50cy5cbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSB0YWIgdG8gc2Nyb2xsIGludG8gdmlld1xuICAgICAqL1xuICAgIE1EQ1RhYkJhckZvdW5kYXRpb24ucHJvdG90eXBlLnNjcm9sbEludG9WaWV3XyA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSB0aGlzLmFkYXB0ZXIuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgICAgdmFyIGJhcldpZHRoID0gdGhpcy5hZGFwdGVyLmdldE9mZnNldFdpZHRoKCk7XG4gICAgICAgIHZhciB0YWJEaW1lbnNpb25zID0gdGhpcy5hZGFwdGVyLmdldFRhYkRpbWVuc2lvbnNBdEluZGV4KGluZGV4KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IHRoaXMuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoKTtcbiAgICAgICAgaWYgKCF0aGlzLmluZGV4SXNJblJhbmdlXyhuZXh0SW5kZXgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHNjcm9sbEluY3JlbWVudCA9IHRoaXMuY2FsY3VsYXRlU2Nyb2xsSW5jcmVtZW50XyhpbmRleCwgbmV4dEluZGV4LCBzY3JvbGxQb3NpdGlvbiwgYmFyV2lkdGgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuaW5jcmVtZW50U2Nyb2xsKHNjcm9sbEluY3JlbWVudCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTY3JvbGxzIHRoZSB0YWIgYXQgdGhlIGdpdmVuIGluZGV4IGludG8gdmlldyBpbiBSVExcbiAgICAgKiBAcGFyYW0gaW5kZXggVGhlIHRhYiBpbmRleCB0byBtYWtlIHZpc2libGVcbiAgICAgKi9cbiAgICBNRENUYWJCYXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zY3JvbGxJbnRvVmlld1JUTF8gPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gdGhpcy5hZGFwdGVyLmdldFNjcm9sbFBvc2l0aW9uKCk7XG4gICAgICAgIHZhciBiYXJXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRPZmZzZXRXaWR0aCgpO1xuICAgICAgICB2YXIgdGFiRGltZW5zaW9ucyA9IHRoaXMuYWRhcHRlci5nZXRUYWJEaW1lbnNpb25zQXRJbmRleChpbmRleCk7XG4gICAgICAgIHZhciBzY3JvbGxXaWR0aCA9IHRoaXMuYWRhcHRlci5nZXRTY3JvbGxDb250ZW50V2lkdGgoKTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IHRoaXMuZmluZEFkamFjZW50VGFiSW5kZXhDbG9zZXN0VG9FZGdlUlRMXyhpbmRleCwgdGFiRGltZW5zaW9ucywgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG4gICAgICAgIGlmICghdGhpcy5pbmRleElzSW5SYW5nZV8obmV4dEluZGV4KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzY3JvbGxJbmNyZW1lbnQgPSB0aGlzLmNhbGN1bGF0ZVNjcm9sbEluY3JlbWVudFJUTF8oaW5kZXgsIG5leHRJbmRleCwgc2Nyb2xsUG9zaXRpb24sIGJhcldpZHRoLCBzY3JvbGxXaWR0aCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsSW5jcmVtZW50KTtcbiAgICB9O1xuICAgIHJldHVybiBNRENUYWJCYXJGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUYWJCYXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGFiQmFyRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiaW1wb3J0IHtcbiAgYnViYmxlLFxuICBsaXN0ZW4sXG4gIHByZXZlbnRfZGVmYXVsdCxcbiAgc3RvcF9wcm9wYWdhdGlvbixcbn0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIERPTSBldmVudHMuXG5jb25zdCBvbGRNb2RpZmllclJlZ2V4ID0gL15bYS16XSsoPzo6KD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIG90aGVyIGV2ZW50cy5cbmNvbnN0IG5ld01vZGlmaWVyUmVnZXggPSAvXlteJF0rKD86XFwkKD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY29tcG9uZW50KSB7XG4gIC8vIFRoaXMgaXMgb3VyIHBzZXVkbyAkb24gZnVuY3Rpb24uIEl0IGlzIGRlZmluZWQgb24gY29tcG9uZW50IG1vdW50LlxuICBsZXQgJG9uO1xuICAvLyBUaGlzIGlzIGEgbGlzdCBvZiBldmVudHMgYm91bmQgYmVmb3JlIG1vdW50LlxuICBsZXQgZXZlbnRzID0gW107XG4gIC8vIFRoaXMgaXMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCAkb24gZnVuY3Rpb24uXG4gIGNvbnN0IGNvbXBvbmVudE9uID0gY29tcG9uZW50LiRvbjtcblxuICAvLyBBbmQgd2Ugb3ZlcnJpZGUgdGhlICRvbiBmdW5jdGlvbiB0byBmb3J3YXJkIGFsbCBib3VuZCBldmVudHMuXG4gIGNvbXBvbmVudC4kb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICBsZXQgZGVzdHJ1Y3RvciA9ICgpID0+IHt9O1xuICAgIGlmICgkb24pIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgIGRlc3RydWN0b3IgPSAkb24oZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgYmVmb3JlIG1vdW50IGJ5IFN2ZWx0ZS5cbiAgICAgIGV2ZW50cy5wdXNoKFtldmVudFR5cGUsIGNhbGxiYWNrXSk7XG4gICAgfVxuICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuXG4gICAgaWYgKG9sZE1vZGlmaWVyTWF0Y2ggJiYgY29uc29sZSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnRXZlbnQgbW9kaWZpZXJzIGluIFNNVUkgbm93IHVzZSBcIiRcIiBpbnN0ZWFkIG9mIFwiOlwiLCBzbyB0aGF0IGFsbCBldmVudHMgY2FuIGJlIGJvdW5kIHdpdGggbW9kaWZpZXJzLiBQbGVhc2UgdXBkYXRlIHlvdXIgZXZlbnQgYmluZGluZzogJyxcbiAgICAgICAgZXZlbnRUeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAvLyBSZW1vdmUgbW9kaWZpZXJzIGZyb20gdGhlIHJlYWwgZXZlbnQuXG4gICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICRvbiBmdW5jdGlvbi5cbiAgICBjb25zdCBjb21wb25lbnREZXN0cnVjdG9yID0gY29tcG9uZW50T24uY2FsbChcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGV2ZW50VHlwZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgZGVzdHJ1Y3RvcigpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudERlc3RydWN0b3IoLi4uYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGUpIHtcbiAgICAvLyBJbnRlcm5hbGx5IGJ1YmJsZSB0aGUgZXZlbnQgdXAgZnJvbSBTdmVsdGUgY29tcG9uZW50cy5cbiAgICBidWJibGUoY29tcG9uZW50LCBlKTtcbiAgfVxuXG4gIHJldHVybiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlc3RydWN0b3JzID0gW107XG4gICAgY29uc3QgZm9yd2FyZERlc3RydWN0b3JzID0ge307XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciBmb3J3YXJkaW5nIGFsbCBib3VuZCBldmVudHMuXG4gICAgJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICAgIGxldCBoYW5kbGVyID0gY2FsbGJhY2s7XG4gICAgICAvLyBET00gYWRkRXZlbnRMaXN0ZW5lciBvcHRpb25zIGFyZ3VtZW50LlxuICAgICAgbGV0IG9wdGlvbnMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcbiAgICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBldmVudCBtb2RpZmllcnMuXG4gICAgICAgIC8vIFN1cHBvcnRlZCBtb2RpZmllcnM6XG4gICAgICAgIC8vIC0gcHJldmVudERlZmF1bHRcbiAgICAgICAgLy8gLSBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgLy8gLSBwYXNzaXZlXG4gICAgICAgIC8vIC0gbm9ucGFzc2l2ZVxuICAgICAgICAvLyAtIGNhcHR1cmVcbiAgICAgICAgLy8gLSBvbmNlXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhwYXJ0cy5zbGljZSgxKS5tYXAoKG1vZCkgPT4gW21vZCwgdHJ1ZV0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9ucGFzc2l2ZSkge1xuICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLm5vbnBhc3NpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBoYW5kbGVyID0gcHJldmVudF9kZWZhdWx0KGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wX3Byb3BhZ2F0aW9uKGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBldmVudCBkaXJlY3RseSwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICAgIGNvbnN0IG9mZiA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGVzdHJ1Y3RvciA9ICgpID0+IHtcbiAgICAgICAgb2ZmKCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRlc3RydWN0b3JzLmluZGV4T2YoZGVzdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGRlc3RydWN0b3JzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkZXN0cnVjdG9ycy5wdXNoKGRlc3RydWN0b3IpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBldmVudCBmcm9tIFN2ZWx0ZS5cbiAgICAgIGlmICghZXZlbnRUeXBlIGluIGZvcndhcmREZXN0cnVjdG9ycykge1xuICAgICAgICBmb3J3YXJkRGVzdHJ1Y3RvcnNbZXZlbnRUeXBlXSA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGZvcndhcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzdHJ1Y3RvcjtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpc3RlbiB0byBhbGwgdGhlIGV2ZW50cyBhZGRlZCBiZWZvcmUgbW91bnQuXG4gICAgICAkb24oZXZlbnRzW2ldWzBdLCBldmVudHNbaV1bMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RydWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnNbaV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgZm9yd2FyZGVycy5cbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoZm9yd2FyZERlc3RydWN0b3JzKSkge1xuICAgICAgICAgIGVudHJ5WzFdKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGFzc01hcChjbGFzc09iaikge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmopXG4gICAgLmZpbHRlcigoW25hbWUsIHZhbHVlXSkgPT4gbmFtZSAhPT0gJycgJiYgdmFsdWUpXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKVxuICAgIC5qb2luKCcgJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goXG4gIGVsZW1lbnQsXG4gIGV2ZW50VHlwZSxcbiAgZGV0YWlsID0ge30sXG4gIGV2ZW50SW5pdCA9IHsgYnViYmxlczogdHJ1ZSB9XG4pIHtcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgZXZlbnRJbml0KTtcbiAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgY29uc3QgZWwgPSAnZ2V0RWxlbWVudCcgaW4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0RWxlbWVudCgpIDogZWxlbWVudDtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBleGNsdWRlKG9iaiwga2V5cykge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGNvbnN0IGNhc2hJbmRleCA9IG5hbWUuaW5kZXhPZignJCcpO1xuICAgIGlmIChcbiAgICAgIGNhc2hJbmRleCAhPT0gLTEgJiZcbiAgICAgIGtleXMuaW5kZXhPZihuYW1lLnN1YnN0cmluZygwLCBjYXNoSW5kZXggKyAxKSkgIT09IC0xXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGtleXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBuZXdPYmpbbmFtZV0gPSBvYmpbbmFtZV07XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZpbHRlcihvYmosIHByZWZpeCkge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGlmIChuYW1lLnN1YnN0cmluZygwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBuZXdPYmpbbmFtZS5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCldID0gb2JqW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdXNlQWN0aW9ucyhub2RlLCBhY3Rpb25zKSB7XG4gIGxldCBvYmplY3RzID0gW107XG5cbiAgaWYgKGFjdGlvbnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgY29uc3QgYWN0aW9uID0gaXNBcnJheSA/IGFjdGlvbnNbaV1bMF0gOiBhY3Rpb25zW2ldO1xuICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSwgYWN0aW9uc1tpXVsxXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUoYWN0aW9ucykge1xuICAgICAgaWYgKCgoYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCkgfHwgMCkgIT0gb2JqZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBub3QgY2hhbmdlIHRoZSBsZW5ndGggb2YgYW4gYWN0aW9ucyBhcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbnMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ3VwZGF0ZScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICAgICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoYWN0aW9uc1tpXVsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvYmplY3RzW2ldICYmICdkZXN0cm95JyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgb2JqZWN0c1tpXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuIiwiPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy10YWItc2Nyb2xsZXInOiB0cnVlLFxuICAgICdtZGMtdGFiLXNjcm9sbGVyLS1hbGlnbi1zdGFydCc6IGFsaWduID09PSAnc3RhcnQnLFxuICAgICdtZGMtdGFiLXNjcm9sbGVyLS1hbGlnbi1lbmQnOiBhbGlnbiA9PT0gJ2VuZCcsXG4gICAgJ21kYy10YWItc2Nyb2xsZXItLWFsaWduLWNlbnRlcic6IGFsaWduID09PSAnY2VudGVyJyxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICB7Li4uZXhjbHVkZSgkJHJlc3RQcm9wcywgWydzY3JvbGxBcmVhJCcsICdzY3JvbGxDb250ZW50JCddKX1cbj5cbiAgPGRpdlxuICAgIGJpbmQ6dGhpcz17c2Nyb2xsQXJlYX1cbiAgICB1c2U6dXNlQWN0aW9ucz17c2Nyb2xsQXJlYSR1c2V9XG4gICAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICAgIFtzY3JvbGxBcmVhJGNsYXNzXTogdHJ1ZSxcbiAgICAgICdtZGMtdGFiLXNjcm9sbGVyX19zY3JvbGwtYXJlYSc6IHRydWUsXG4gICAgICAuLi5zY3JvbGxBcmVhQ2xhc3NlcyxcbiAgICB9KX1cbiAgICBzdHlsZT17T2JqZWN0LmVudHJpZXMoc2Nyb2xsQXJlYVN0eWxlcylcbiAgICAgIC5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IGAke25hbWV9OiAke3ZhbHVlfTtgKVxuICAgICAgLmpvaW4oJyAnKX1cbiAgICBvbjp3aGVlbD17KCkgPT4gaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlSW50ZXJhY3Rpb24oKX1cbiAgICBvbjp0b3VjaHN0YXJ0PXsoKSA9PiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVJbnRlcmFjdGlvbigpfVxuICAgIG9uOnBvaW50ZXJkb3duPXsoKSA9PiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVJbnRlcmFjdGlvbigpfVxuICAgIG9uOm1vdXNlZG93bj17KCkgPT4gaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlSW50ZXJhY3Rpb24oKX1cbiAgICBvbjprZXlkb3duPXsoKSA9PiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVJbnRlcmFjdGlvbigpfVxuICAgIHsuLi5wcmVmaXhGaWx0ZXIoJCRyZXN0UHJvcHMsICdzY3JvbGxBcmVhJCcpfVxuICA+XG4gICAgPGRpdlxuICAgICAgYmluZDp0aGlzPXtzY3JvbGxDb250ZW50fVxuICAgICAgdXNlOnVzZUFjdGlvbnM9e3Njcm9sbENvbnRlbnQkdXNlfVxuICAgICAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICAgICAgW3Njcm9sbENvbnRlbnQkY2xhc3NdOiB0cnVlLFxuICAgICAgICAnbWRjLXRhYi1zY3JvbGxlcl9fc2Nyb2xsLWNvbnRlbnQnOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICBzdHlsZT17T2JqZWN0LmVudHJpZXMoc2Nyb2xsQ29udGVudFN0eWxlcylcbiAgICAgICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgICBvbjp0cmFuc2l0aW9uZW5kPXsoZXZlbnQpID0+XG4gICAgICAgIGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZVRyYW5zaXRpb25FbmQoZXZlbnQpfVxuICAgICAgey4uLnByZWZpeEZpbHRlcigkJHJlc3RQcm9wcywgJ3Njcm9sbENvbnRlbnQkJyl9XG4gICAgPlxuICAgICAgPHNsb3QgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgTURDVGFiU2Nyb2xsZXJGb3VuZGF0aW9uLCB1dGlsIH0gZnJvbSAnQG1hdGVyaWFsL3RhYi1zY3JvbGxlcic7XG4gIGltcG9ydCB7IHBvbnlmaWxsIH0gZnJvbSAnQG1hdGVyaWFsL2RvbSc7XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIGV4Y2x1ZGUsXG4gICAgcHJlZml4RmlsdGVyLFxuICAgIHVzZUFjdGlvbnMsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbiAgY29uc3QgeyBtYXRjaGVzIH0gPSBwb255ZmlsbDtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgYWxpZ24gPSBudWxsO1xuICBleHBvcnQgbGV0IHNjcm9sbEFyZWEkdXNlID0gW107XG4gIGV4cG9ydCBsZXQgc2Nyb2xsQXJlYSRjbGFzcyA9ICcnO1xuICBleHBvcnQgbGV0IHNjcm9sbENvbnRlbnQkdXNlID0gW107XG4gIGV4cG9ydCBsZXQgc2Nyb2xsQ29udGVudCRjbGFzcyA9ICcnO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgaW5zdGFuY2U7XG4gIGxldCBzY3JvbGxBcmVhO1xuICBsZXQgc2Nyb2xsQ29udGVudDtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgc2Nyb2xsQXJlYUNsYXNzZXMgPSB7fTtcbiAgbGV0IHNjcm9sbEFyZWFTdHlsZXMgPSB7fTtcbiAgbGV0IHNjcm9sbENvbnRlbnRTdHlsZXMgPSB7fTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpbnN0YW5jZSA9IG5ldyBNRENUYWJTY3JvbGxlckZvdW5kYXRpb24oe1xuICAgICAgZXZlbnRUYXJnZXRNYXRjaGVzU2VsZWN0b3I6IChldnRUYXJnZXQsIHNlbGVjdG9yKSA9PlxuICAgICAgICBtYXRjaGVzKGV2dFRhcmdldCwgc2VsZWN0b3IpLFxuICAgICAgYWRkQ2xhc3MsXG4gICAgICByZW1vdmVDbGFzcyxcbiAgICAgIGFkZFNjcm9sbEFyZWFDbGFzcyxcbiAgICAgIHNldFNjcm9sbEFyZWFTdHlsZVByb3BlcnR5OiBhZGRTY3JvbGxBcmVhU3R5bGUsXG4gICAgICBzZXRTY3JvbGxDb250ZW50U3R5bGVQcm9wZXJ0eTogYWRkU2Nyb2xsQ29udGVudFN0eWxlLFxuICAgICAgZ2V0U2Nyb2xsQ29udGVudFN0eWxlVmFsdWU6IGdldFNjcm9sbENvbnRlbnRTdHlsZSxcbiAgICAgIHNldFNjcm9sbEFyZWFTY3JvbGxMZWZ0OiAoc2Nyb2xsWCkgPT4gKHNjcm9sbEFyZWEuc2Nyb2xsTGVmdCA9IHNjcm9sbFgpLFxuICAgICAgZ2V0U2Nyb2xsQXJlYVNjcm9sbExlZnQ6ICgpID0+IHNjcm9sbEFyZWEuc2Nyb2xsTGVmdCxcbiAgICAgIGdldFNjcm9sbENvbnRlbnRPZmZzZXRXaWR0aDogKCkgPT4gc2Nyb2xsQ29udGVudC5vZmZzZXRXaWR0aCxcbiAgICAgIGdldFNjcm9sbEFyZWFPZmZzZXRXaWR0aDogKCkgPT4gc2Nyb2xsQXJlYS5vZmZzZXRXaWR0aCxcbiAgICAgIGNvbXB1dGVTY3JvbGxBcmVhQ2xpZW50UmVjdDogKCkgPT4gc2Nyb2xsQXJlYS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbXB1dGVTY3JvbGxDb250ZW50Q2xpZW50UmVjdDogKCkgPT5cbiAgICAgICAgc2Nyb2xsQ29udGVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIGNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0OiAoKSA9PlxuICAgICAgICB1dGlsLmNvbXB1dGVIb3Jpem9udGFsU2Nyb2xsYmFySGVpZ2h0KGRvY3VtZW50KSxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbEFyZWFDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIXNjcm9sbEFyZWFDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIHNjcm9sbEFyZWFDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbEFyZWFTdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChzY3JvbGxBcmVhU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHNjcm9sbEFyZWFTdHlsZXNbbmFtZV07XG4gICAgICAgIHNjcm9sbEFyZWFTdHlsZXMgPSBzY3JvbGxBcmVhU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsQXJlYVN0eWxlc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFNjcm9sbENvbnRlbnRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChzY3JvbGxDb250ZW50U3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHNjcm9sbENvbnRlbnRTdHlsZXNbbmFtZV07XG4gICAgICAgIHNjcm9sbENvbnRlbnRTdHlsZXMgPSBzY3JvbGxDb250ZW50U3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2Nyb2xsQ29udGVudFN0eWxlc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFNjcm9sbENvbnRlbnRTdHlsZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgaW4gc2Nyb2xsQ29udGVudFN0eWxlc1xuICAgICAgPyBzY3JvbGxDb250ZW50U3R5bGVzW25hbWVdXG4gICAgICA6IGdldENvbXB1dGVkU3R5bGUoc2Nyb2xsQ29udGVudCkuZ2V0UHJvcGVydHlWYWx1ZShuYW1lKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuZ2V0U2Nyb2xsUG9zaXRpb24oKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxDb250ZW50V2lkdGgoKSB7XG4gICAgcmV0dXJuIHNjcm9sbENvbnRlbnQub2Zmc2V0V2lkdGg7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaW5jcmVtZW50U2Nyb2xsKHNjcm9sbFhJbmNyZW1lbnQpIHtcbiAgICBpbnN0YW5jZS5pbmNyZW1lbnRTY3JvbGwoc2Nyb2xsWEluY3JlbWVudCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gc2Nyb2xsVG8oc2Nyb2xsWCkge1xuICAgIGluc3RhbmNlLnNjcm9sbFRvKHNjcm9sbFgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy10YWItYmFyJzogdHJ1ZSxcbiAgfSl9XG4gIHJvbGU9XCJ0YWJsaXN0XCJcbiAgb246U01VSTp0YWI6bW91bnQ9eyhldmVudCkgPT4gaGFuZGxlVGFiTW91bnQoZXZlbnQpfVxuICBvbjpTTVVJOnRhYjp1bm1vdW50PXsoZXZlbnQpID0+IGhhbmRsZVRhYlVubW91bnQoZXZlbnQpfVxuICBvbjprZXlkb3duPXsoZXZlbnQpID0+IGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZUtleURvd24oZXZlbnQpfVxuICBvbjpNRENUYWI6aW50ZXJhY3RlZD17KGV2ZW50KSA9PlxuICAgIGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZVRhYkludGVyYWN0aW9uKGV2ZW50KX1cbiAgey4uLmV4Y2x1ZGUoJCRyZXN0UHJvcHMsIFsndGFiU2Nyb2xsZXIkJ10pfVxuPlxuICA8VGFiU2Nyb2xsZXJcbiAgICBiaW5kOnRoaXM9e3RhYlNjcm9sbGVyfVxuICAgIHsuLi5wcmVmaXhGaWx0ZXIoJCRyZXN0UHJvcHMsICd0YWJTY3JvbGxlciQnKX1cbiAgPlxuICAgIHsjZWFjaCB0YWJzIGFzIHRhYiwgaSAoa2V5KHRhYikpfVxuICAgICAgPHNsb3Qge3RhYn0gLz5cbiAgICB7L2VhY2h9XG4gIDwvVGFiU2Nyb2xsZXI+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgTURDVGFiQmFyRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC90YWItYmFyJztcbiAgaW1wb3J0IHsgb25Nb3VudCwgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgZXhjbHVkZSxcbiAgICBwcmVmaXhGaWx0ZXIsXG4gICAgdXNlQWN0aW9ucyxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgVGFiU2Nyb2xsZXIgZnJvbSAnQHNtdWkvdGFiLXNjcm9sbGVyL1RhYlNjcm9sbGVyLnN2ZWx0ZSc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IHRhYnMgPSBbXTtcbiAgZXhwb3J0IGxldCBrZXkgPSAodGFiKSA9PiB0YWI7XG4gIGV4cG9ydCBsZXQgZm9jdXNPbkFjdGl2YXRlID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBmb2N1c09uUHJvZ3JhbW1hdGljID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgdXNlQXV0b21hdGljQWN0aXZhdGlvbiA9IHRydWU7XG4gIGV4cG9ydCBsZXQgYWN0aXZlID0gbnVsbDtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgdGFiU2Nyb2xsZXI7XG4gIGxldCBhY3RpdmVJbmRleCA9IHRhYnMuaW5kZXhPZihhY3RpdmUpO1xuICBsZXQgdGFiQWNjZXNzb3JNYXAgPSB7fTtcbiAgbGV0IHRhYkFjY2Vzc29yV2Vha01hcCA9IG5ldyBXZWFrTWFwKCk7XG4gIGxldCBza2lwRm9jdXMgPSBmYWxzZTtcblxuICBzZXRDb250ZXh0KCdTTVVJOnRhYjpmb2N1c09uQWN0aXZhdGUnLCBmb2N1c09uQWN0aXZhdGUpO1xuICBzZXRDb250ZXh0KCdTTVVJOnRhYjppbml0aWFsQWN0aXZlJywgYWN0aXZlKTtcblxuICAkOiBpZiAoYWN0aXZlICE9PSB0YWJzW2FjdGl2ZUluZGV4XSkge1xuICAgIGFjdGl2ZUluZGV4ID0gdGFicy5pbmRleE9mKGFjdGl2ZSk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICBza2lwRm9jdXMgPSAhZm9jdXNPblByb2dyYW1tYXRpYztcbiAgICAgIGluc3RhbmNlLmFjdGl2YXRlVGFiKGFjdGl2ZUluZGV4KTtcbiAgICAgIHNraXBGb2N1cyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gICQ6IGlmICh0YWJzLmxlbmd0aCkge1xuICAgIC8vIE1hbnVhbGx5IGdldCB0aGUgYWNjZXNzb3Igc28gaXQgaXMgcmVhY3RpdmUuXG4gICAgY29uc3QgYWNjZXNzb3IgPVxuICAgICAgdGFic1swXSBpbnN0YW5jZW9mIE9iamVjdFxuICAgICAgICA/IHRhYkFjY2Vzc29yV2Vha01hcC5nZXQodGFic1swXSlcbiAgICAgICAgOiB0YWJBY2Nlc3Nvck1hcFt0YWJzWzBdXTtcblxuICAgIGlmIChhY2Nlc3Nvcikge1xuICAgICAgYWNjZXNzb3IuZm9yY2VBY2Nlc3NpYmxlKGFjdGl2ZUluZGV4ID09PSAtMSk7XG4gICAgfVxuICB9XG5cbiAgJDogaWYgKGluc3RhbmNlKSB7XG4gICAgaW5zdGFuY2Uuc2V0VXNlQXV0b21hdGljQWN0aXZhdGlvbih1c2VBdXRvbWF0aWNBY3RpdmF0aW9uKTtcbiAgfVxuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGluc3RhbmNlID0gbmV3IE1EQ1RhYkJhckZvdW5kYXRpb24oe1xuICAgICAgc2Nyb2xsVG86IChzY3JvbGxYKSA9PiB0YWJTY3JvbGxlci5zY3JvbGxUbyhzY3JvbGxYKSxcbiAgICAgIGluY3JlbWVudFNjcm9sbDogKHNjcm9sbFhJbmNyZW1lbnQpID0+XG4gICAgICAgIHRhYlNjcm9sbGVyLmluY3JlbWVudFNjcm9sbChzY3JvbGxYSW5jcmVtZW50KSxcbiAgICAgIGdldFNjcm9sbFBvc2l0aW9uOiAoKSA9PiB0YWJTY3JvbGxlci5nZXRTY3JvbGxQb3NpdGlvbigpLFxuICAgICAgZ2V0U2Nyb2xsQ29udGVudFdpZHRoOiAoKSA9PiB0YWJTY3JvbGxlci5nZXRTY3JvbGxDb250ZW50V2lkdGgoKSxcbiAgICAgIGdldE9mZnNldFdpZHRoOiAoKSA9PiBnZXRFbGVtZW50KCkub2Zmc2V0V2lkdGgsXG4gICAgICBpc1JUTDogKCkgPT5cbiAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZShnZXRFbGVtZW50KCkpLmdldFByb3BlcnR5VmFsdWUoJ2RpcmVjdGlvbicpID09PSAncnRsJyxcbiAgICAgIHNldEFjdGl2ZVRhYjogKGluZGV4KSA9PiB7XG4gICAgICAgIGFjdGl2ZSA9IHRhYnNbaW5kZXhdO1xuICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICBpbnN0YW5jZS5hY3RpdmF0ZVRhYihpbmRleCk7XG4gICAgICB9LFxuICAgICAgYWN0aXZhdGVUYWJBdEluZGV4OiAoaW5kZXgsIGNsaWVudFJlY3QpID0+XG4gICAgICAgIGdldEFjY2Vzc29yKHRhYnNbaW5kZXhdKS5hY3RpdmF0ZShjbGllbnRSZWN0LCBza2lwRm9jdXMpLFxuICAgICAgZGVhY3RpdmF0ZVRhYkF0SW5kZXg6IChpbmRleCkgPT4gZ2V0QWNjZXNzb3IodGFic1tpbmRleF0pLmRlYWN0aXZhdGUoKSxcbiAgICAgIGZvY3VzVGFiQXRJbmRleDogKGluZGV4KSA9PiBnZXRBY2Nlc3Nvcih0YWJzW2luZGV4XSkuZm9jdXMoKSxcbiAgICAgIGdldFRhYkluZGljYXRvckNsaWVudFJlY3RBdEluZGV4OiAoaW5kZXgpID0+XG4gICAgICAgIGdldEFjY2Vzc29yKHRhYnNbaW5kZXhdKS5jb21wdXRlSW5kaWNhdG9yQ2xpZW50UmVjdCgpLFxuICAgICAgZ2V0VGFiRGltZW5zaW9uc0F0SW5kZXg6IChpbmRleCkgPT5cbiAgICAgICAgZ2V0QWNjZXNzb3IodGFic1tpbmRleF0pLmNvbXB1dGVEaW1lbnNpb25zKCksXG4gICAgICBnZXRQcmV2aW91c0FjdGl2ZVRhYkluZGV4OiAoKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChnZXRBY2Nlc3Nvcih0YWJzW2ldKS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9LFxuICAgICAgZ2V0Rm9jdXNlZFRhYkluZGV4OiAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkVsZW1lbnRzID0gdGFicy5tYXAoKHRhYikgPT4gZ2V0QWNjZXNzb3IodGFiKS5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHJldHVybiB0YWJFbGVtZW50cy5pbmRleE9mKGFjdGl2ZUVsZW1lbnQpO1xuICAgICAgfSxcbiAgICAgIGdldEluZGV4T2ZUYWJCeUlkOiAoaWQpID0+IHRhYnMuaW5kZXhPZihpZCksXG4gICAgICBnZXRUYWJMaXN0TGVuZ3RoOiAoKSA9PiB0YWJzLmxlbmd0aCxcbiAgICAgIG5vdGlmeVRhYkFjdGl2YXRlZDogKGluZGV4KSA9PlxuICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdNRENUYWJCYXI6YWN0aXZhdGVkJywgeyBpbmRleCB9KSxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGFiTW91bnQoZXZlbnQpIHtcbiAgICBjb25zdCBhY2Nlc3NvciA9IGV2ZW50LmRldGFpbDtcblxuICAgIGFkZEFjY2Vzc29yKGFjY2Vzc29yLnRhYklkLCBhY2Nlc3Nvcik7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVUYWJVbm1vdW50KGV2ZW50KSB7XG4gICAgY29uc3QgYWNjZXNzb3IgPSBldmVudC5kZXRhaWw7XG5cbiAgICByZW1vdmVBY2Nlc3NvcihhY2Nlc3Nvci50YWJJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBY2Nlc3Nvcih0YWJJZCkge1xuICAgIHJldHVybiB0YWJJZCBpbnN0YW5jZW9mIE9iamVjdFxuICAgICAgPyB0YWJBY2Nlc3NvcldlYWtNYXAuZ2V0KHRhYklkKVxuICAgICAgOiB0YWJBY2Nlc3Nvck1hcFt0YWJJZF07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBY2Nlc3Nvcih0YWJJZCwgYWNjZXNzb3IpIHtcbiAgICBpZiAodGFiSWQgaW5zdGFuY2VvZiBPYmplY3QpIHtcbiAgICAgIHRhYkFjY2Vzc29yV2Vha01hcC5zZXQodGFiSWQsIGFjY2Vzc29yKTtcbiAgICAgIHRhYkFjY2Vzc29yV2Vha01hcCA9IHRhYkFjY2Vzc29yV2Vha01hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFiQWNjZXNzb3JNYXBbdGFiSWRdID0gYWNjZXNzb3I7XG4gICAgICB0YWJBY2Nlc3Nvck1hcCA9IHRhYkFjY2Vzc29yTWFwO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFjY2Vzc29yKHRhYklkKSB7XG4gICAgaWYgKHRhYklkIGluc3RhbmNlb2YgT2JqZWN0KSB7XG4gICAgICB0YWJBY2Nlc3NvcldlYWtNYXAuZGVsZXRlKHRhYklkKTtcbiAgICAgIHRhYkFjY2Vzc29yV2Vha01hcCA9IHRhYkFjY2Vzc29yV2Vha01hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHRhYkFjY2Vzc29yTWFwW3RhYklkXTtcbiAgICAgIHRhYkFjY2Vzc29yTWFwID0gdGFiQWNjZXNzb3JNYXA7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNjcm9sbEludG9WaWV3KGluZGV4KSB7XG4gICAgaW5zdGFuY2Uuc2Nyb2xsSW50b1ZpZXcoaW5kZXgpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPGRpdj5cbiAgPCEtLVxuICAgIE5vdGU6IHRhYnMgbXVzdCBiZSB1bmlxdWUuIChUaGV5IGNhbm5vdCA9PT0gZWFjaCBvdGhlci4pXG4gIC0tPlxuICA8VGFiQmFyIHRhYnM9e1snSG9tZScsICdNZXJjaGFuZGlzZScsICdBYm91dCBVcyddfSBsZXQ6dGFiIGJpbmQ6YWN0aXZlPlxuICAgIDwhLS0gTm90ZTogdGhlIGB0YWJgIHByb3BlcnR5IGlzIHJlcXVpcmVkISAtLT5cbiAgICA8VGFiIHt0YWJ9PlxuICAgICAgPExhYmVsPnt0YWJ9PC9MYWJlbD5cbiAgICA8L1RhYj5cbiAgPC9UYWJCYXI+XG5cbiAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IDFlbTtcIj5cbiAgICA8ZGl2PlByb2dyYW1tYXRpY2FsbHkgc2VsZWN0OjwvZGl2PlxuICAgIHsjZWFjaCBbJ0hvbWUnLCAnTWVyY2hhbmRpc2UnLCAnQWJvdXQgVXMnXSBhcyB0YWJ9XG4gICAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAoYWN0aXZlID0gdGFiKX0+PExhYmVsPnt0YWJ9PC9MYWJlbD48L0J1dHRvbj5cbiAgICB7L2VhY2h9XG4gIDwvZGl2PlxuXG4gIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge2FjdGl2ZX08L3ByZT5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVGFiLCB7IExhYmVsIH0gZnJvbSAnQHNtdWkvdGFiJztcbiAgaW1wb3J0IFRhYkJhciBmcm9tICdAc211aS90YWItYmFyJztcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tICdAc211aS9idXR0b24nO1xuXG4gIGxldCBhY3RpdmUgPSAnSG9tZSc7XG48L3NjcmlwdD5cbiIsIjxkaXY+XG4gIDxUYWJCYXIge3RhYnN9IGxldDp0YWIgYmluZDphY3RpdmU+XG4gICAgPFRhYiB7dGFifT5cbiAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj57dGFiLmljb259PC9JY29uPlxuICAgICAgPExhYmVsPnt0YWIubGFiZWx9PC9MYWJlbD5cbiAgICA8L1RhYj5cbiAgPC9UYWJCYXI+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRhYiwgeyBJY29uLCBMYWJlbCB9IGZyb20gJ0BzbXVpL3RhYic7XG4gIGltcG9ydCBUYWJCYXIgZnJvbSAnQHNtdWkvdGFiLWJhcic7XG5cbiAgbGV0IHRhYnMgPSBbXG4gICAge1xuICAgICAgaWNvbjogJ2FjY2Vzc190aW1lJyxcbiAgICAgIGxhYmVsOiAnUmVjZW50cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnbmVhcl9tZScsXG4gICAgICBsYWJlbDogJ05lYXJieScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnZmF2b3JpdGUnLFxuICAgICAgbGFiZWw6ICdGYXZvcml0ZXMnLFxuICAgIH0sXG4gIF07XG4gIGxldCBhY3RpdmUgPSB0YWJzWzBdO1xuPC9zY3JpcHQ+XG4iLCI8ZGl2PlxuICA8VGFiQmFyIHt0YWJzfSBsZXQ6dGFiIGtleT17KHRhYikgPT4gdGFiLmt9IGJpbmQ6YWN0aXZlPlxuICAgIDxUYWJcbiAgICAgIHt0YWJ9XG4gICAgICBzdGFja2VkPXt0cnVlfVxuICAgICAgaW5kaWNhdG9yU3Bhbk9ubHlDb250ZW50PXt0cnVlfVxuICAgICAgdGFiSW5kaWNhdG9yJHRyYW5zaXRpb249XCJmYWRlXCJcbiAgICA+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+e3RhYi5pY29ufTwvSWNvbj5cbiAgICAgIDxMYWJlbD57dGFiLmxhYmVsfTwvTGFiZWw+XG4gICAgPC9UYWI+XG4gIDwvVGFiQmFyPlxuXG4gIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge2FjdGl2ZS5rfTwvcHJlPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUYWIsIHsgSWNvbiwgTGFiZWwgfSBmcm9tICdAc211aS90YWInO1xuICBpbXBvcnQgVGFiQmFyIGZyb20gJ0BzbXVpL3RhYi1iYXInO1xuXG4gIGxldCB0YWJzID0gW1xuICAgIHtcbiAgICAgIGs6IDEsXG4gICAgICBpY29uOiAnY29kZScsXG4gICAgICBsYWJlbDogJ0NvZGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgazogMixcbiAgICAgIGljb246ICdjb2RlJyxcbiAgICAgIGxhYmVsOiAnQ29kZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBrOiAzLFxuICAgICAgaWNvbjogJ2NvZGUnLFxuICAgICAgbGFiZWw6ICdDb2RlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGs6IDQsXG4gICAgICBpY29uOiAnY29kZScsXG4gICAgICBsYWJlbDogJ0NvZGUnLFxuICAgIH0sXG4gIF07XG4gIGxldCBhY3RpdmUgPSB0YWJzWzJdO1xuPC9zY3JpcHQ+XG4iLCI8ZGl2PlxuICA8VGFiQmFyIHRhYnM9e1suLi5BcnJheSgyMCldLm1hcCgodiwgaSkgPT4gaSArIDEpfSBsZXQ6dGFiPlxuICAgIDxUYWIge3RhYn0+XG4gICAgICA8TGFiZWw+VGFiIHt0YWJ9PC9MYWJlbD5cbiAgICA8L1RhYj5cbiAgPC9UYWJCYXI+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRhYiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL3RhYic7XG4gIGltcG9ydCBUYWJCYXIgZnJvbSAnQHNtdWkvdGFiLWJhcic7XG48L3NjcmlwdD5cbiIsIjxkaXY+XG4gIDxUYWJCYXIgdGFicz17WydIb21lJywgJ01lcmNoYW5kaXNlJywgJ0Fib3V0IFVzJ119IGxldDp0YWIgYmluZDphY3RpdmU+XG4gICAgPFRhYiB7dGFifSBtaW5XaWR0aD5cbiAgICAgIDxMYWJlbD57dGFifTwvTGFiZWw+XG4gICAgPC9UYWI+XG4gIDwvVGFiQmFyPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUYWIsIHsgTGFiZWwgfSBmcm9tICdAc211aS90YWInO1xuICBpbXBvcnQgVGFiQmFyIGZyb20gJ0BzbXVpL3RhYi1iYXInO1xuXG4gIGxldCBhY3RpdmUgPSAnSG9tZSc7XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJpY29uLWluZGljYXRvcnNcIj5cbiAgPFRhYkJhciB0YWJzPXtbJ0hvbWUnLCAnTWVyY2hhbmRpc2UnLCAnQWJvdXQgVXMnXX0gbGV0OnRhYiBiaW5kOmFjdGl2ZT5cbiAgICA8VGFiXG4gICAgICB7dGFifVxuICAgICAgdGFiSW5kaWNhdG9yJHR5cGU9XCJpY29uXCJcbiAgICAgIHRhYkluZGljYXRvciRjb250ZW50JGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIlxuICAgID5cbiAgICAgIDxMYWJlbD57dGFifTwvTGFiZWw+XG4gICAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJ0YWItaW5kaWNhdG9yXCI+c3Rhcjwvc3ZlbHRlOmZyYWdtZW50PlxuICAgIDwvVGFiPlxuICA8L1RhYkJhcj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVGFiLCB7IExhYmVsIH0gZnJvbSAnQHNtdWkvdGFiJztcbiAgaW1wb3J0IFRhYkJhciBmcm9tICdAc211aS90YWItYmFyJztcblxuICBsZXQgYWN0aXZlID0gJ0hvbWUnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmljb24taW5kaWNhdG9yc1xuICAgIDpnbG9iYWwoLm1kYy10YWItaW5kaWNhdG9yLS1hY3RpdmUgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50KSB7XG4gICAgb3BhY2l0eTogMC4yO1xuICB9XG48L3N0eWxlPlxuIiwiPGRpdj5cbiAgPFRhYkJhciB0YWJzPXtbJ0hvbWUnLCAnTWVyY2hhbmRpc2UnLCAnQWJvdXQgVXMnXX0gbGV0OnRhYiBiaW5kOmFjdGl2ZT5cbiAgICA8VGFiXG4gICAgICB7dGFifVxuICAgICAgaHJlZj1cImh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL3t0YWIucmVwbGFjZSgvIC9nLCAnXycpfVwiXG4gICAgICB0YXJnZXQ9XCJocmVmLXRhYnMtZnJhbWVcIlxuICAgID5cbiAgICAgIDxMYWJlbD57dGFifTwvTGFiZWw+XG4gICAgPC9UYWI+XG4gIDwvVGFiQmFyPlxuXG4gIDxpZnJhbWVcbiAgICBzcmM9XCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Ib21lXCJcbiAgICB0aXRsZT1cIlNlbGVjdGVkIFRhYlwiXG4gICAgbmFtZT1cImhyZWYtdGFicy1mcmFtZVwiXG4gICAgc3R5bGU9XCJ3aWR0aDogMTAwJTsgaGVpZ2h0OiA0MDBweDsgYm9yZGVyOiAwO1wiXG4gIC8+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRhYiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL3RhYic7XG4gIGltcG9ydCBUYWJCYXIgZnJvbSAnQHNtdWkvdGFiLWJhcic7XG5cbiAgbGV0IGFjdGl2ZSA9ICdIb21lJztcbjwvc2NyaXB0PlxuIiwiPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+VGFicyAtIFNNVUk8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNlY3Rpb24+XG4gIDxoMj5UYWJzPC9oMj5cblxuICA8cHJlIGNsYXNzPVwiZGVtby1zcGFjZWRcIj5ucG0gaSAtRCBAc211aS90YWIgQHNtdWkvdGFiLWJhcjwvcHJlPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U2ltcGxlfSBmaWxlPVwidGFicy9fU2ltcGxlLnN2ZWx0ZVwiIC8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtJY29uc30gZmlsZT1cInRhYnMvX0ljb25zLnN2ZWx0ZVwiPlxuICAgIFRhYnMgd2l0aCBpY29ucyBuZXh0IHRvIGxhYmVsc1xuICA8L0RlbW8+XG5cbiAgPERlbW9cbiAgICBjb21wb25lbnQ9e0tleWVkSWNvbnNBYm92ZVJlc3RyaWN0ZWRJbmRpY2F0b3JzRmFkZVRyYW5zaXRpb259XG4gICAgZmlsZT1cInRhYnMvX0tleWVkSWNvbnNBYm92ZVJlc3RyaWN0ZWRJbmRpY2F0b3JzRmFkZVRyYW5zaXRpb24uc3ZlbHRlXCJcbiAgPlxuICAgIEtleWVkIHRhYnMgd2l0aCBpY29ucyBhYm92ZSBsYWJlbHMsIGluZGljYXRvcnMgcmVzdHJpY3RlZCB0byBjb250ZW50LCBhbmRcbiAgICBmYWRlIHRyYW5zaXRpb25cbiAgPC9EZW1vPlxuXG4gIDxEZW1vXG4gICAgY29tcG9uZW50PXtTY3JvbGxpbmdOb0luaXRpYWxBY3RpdmV9XG4gICAgZmlsZT1cInRhYnMvX1Njcm9sbGluZ05vSW5pdGlhbEFjdGl2ZS5zdmVsdGVcIlxuICA+XG4gICAgU2Nyb2xsaW5nIHRhYnMgd2l0aCBubyBpbml0aWFsIGFjdGl2ZSB0YWJcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17TWluV2lkdGh9IGZpbGU9XCJ0YWJzL19NaW5XaWR0aC5zdmVsdGVcIj5NaW4gd2lkdGggdGFiczwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0ljb25JbmRpY2F0b3JzfSBmaWxlPVwidGFicy9fSWNvbkluZGljYXRvcnMuc3ZlbHRlXCI+XG4gICAgSWNvbiBpbmRpY2F0b3JzXG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0hyZWZBbmNob3JzfSBmaWxlPVwidGFicy9fSHJlZkFuY2hvcnMuc3ZlbHRlXCI+XG4gICAgVGFicyB3aXRoIGhyZWYgYXR0cmlidXRlcyByZW5kZXIgYXMgYW5jaG9yIGVsZW1lbnRzXG5cbiAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJzdWJ0aXRsZVwiPlxuICAgICAgQnV0IHRoZXkgZG9uJ3QgYWN0aXZhdGUgdGhyb3VnaCBrZXlib2FyZCBhcnJvdyBrZXlzLiBUaGV5IG5lZWQgdG8gYmVcbiAgICAgIGFjdGl2YXRlZCB3aXRoIHRoZSBlbnRlciBrZXkuXG4gICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gIDwvRGVtbz5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZW1vLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaW1wbGUgZnJvbSAnLi9fU2ltcGxlLnN2ZWx0ZSc7XG4gIGltcG9ydCBJY29ucyBmcm9tICcuL19JY29ucy5zdmVsdGUnO1xuICBpbXBvcnQgS2V5ZWRJY29uc0Fib3ZlUmVzdHJpY3RlZEluZGljYXRvcnNGYWRlVHJhbnNpdGlvbiBmcm9tICcuL19LZXllZEljb25zQWJvdmVSZXN0cmljdGVkSW5kaWNhdG9yc0ZhZGVUcmFuc2l0aW9uLnN2ZWx0ZSc7XG4gIGltcG9ydCBTY3JvbGxpbmdOb0luaXRpYWxBY3RpdmUgZnJvbSAnLi9fU2Nyb2xsaW5nTm9Jbml0aWFsQWN0aXZlLnN2ZWx0ZSc7XG4gIGltcG9ydCBNaW5XaWR0aCBmcm9tICcuL19NaW5XaWR0aC5zdmVsdGUnO1xuICBpbXBvcnQgSWNvbkluZGljYXRvcnMgZnJvbSAnLi9fSWNvbkluZGljYXRvcnMuc3ZlbHRlJztcbiAgaW1wb3J0IEhyZWZBbmNob3JzIGZyb20gJy4vX0hyZWZBbmNob3JzLnN2ZWx0ZSc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICBzZWN0aW9uID4gOmdsb2JhKGRpdikge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiZXh0ZW5kU3RhdGljcyIsIl9fZXh0ZW5kcyIsIl9fYXNzaWduIiwiTURDRm91bmRhdGlvbiIsImNzc0NsYXNzZXMiLCJzdHJpbmdzIiwib2xkTW9kaWZpZXJSZWdleCIsIm5ld01vZGlmaWVyUmVnZXgiLCJmb3J3YXJkRXZlbnRzQnVpbGRlciIsImNsYXNzTWFwIiwiZGlzcGF0Y2giLCJleGNsdWRlIiwicHJlZml4RmlsdGVyIiwidXNlQWN0aW9ucyIsInV0aWwuY29tcHV0ZUhvcml6b250YWxTY3JvbGxiYXJIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxlQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUlBLGVBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FB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QUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs2REFBSCxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Y0FGRCxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztjQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJDRXBDLEdBQUc7Ozs7Ozs7Ozs7Ozs7OzJEQUFILEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FGQSxNQUFNLEVBQUUsYUFBYSxFQUFFLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FXNUMsTUFBTSxHQUFHLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQ0xQLEdBQUc7Ozs7Ozs7Ozs7Ozs7OzJEQUFILEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBTkEsTUFBTSxFQUFFLGFBQWEsRUFBRSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdCNUMsTUFBTSxHQUFHLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQ1ZQLEdBQUc7Ozs7Ozs7Ozs7Ozs7OzJEQUFILEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFIMEIsR0FBRyxJQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFBckIsR0FBRyxJQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FIL0MsTUFBTSxFQUFFLGFBQWEsRUFBRSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0I1QyxNQUFNLEdBQUcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUNkRixNQUFNOzs7Ozs7OztlQUVOLEtBQUs7Ozs7Ozs7Ozs7ZUFLVCxpREFBaUQ7Ozs7Ozs7Ozs7ZUFRakQsd0JBQXdCOzs7Ozs7Ozs7O2VBTXBCLFFBQVE7Ozs7Ozs7Ozs7ZUFFUixjQUFjOzs7Ozs7Ozs7O2VBSWQsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
