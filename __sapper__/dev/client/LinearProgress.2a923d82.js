import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, $ as assign, W as compute_rest_props, v as validate_slots, Y as get_current_component, X as getContext, ay as validate_store, az as component_subscribe, ah as onMount, a0 as exclude_internal_props, aB as set_store_value, p as element, o as space, x as claim_element, y as children, u as detach_dev, w as claim_space, E as attr_dev, D as add_location, a9 as set_attributes, F as insert_dev, G as append_dev, aa as action_destroyer, ax as listen_dev, a2 as get_spread_update, ab as is_function, O as noop, ac as run_all, a6 as binding_callbacks } from './client.ec94238b.js';

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
var cssClasses = {
    CLOSED_CLASS: 'mdc-linear-progress--closed',
    CLOSED_ANIMATION_OFF_CLASS: 'mdc-linear-progress--closed-animation-off',
    INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
    REVERSED_CLASS: 'mdc-linear-progress--reversed',
    ANIMATION_READY_CLASS: 'mdc-linear-progress--animation-ready',
};
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ARIA_VALUEMAX: 'aria-valuemax',
    ARIA_VALUEMIN: 'aria-valuemin',
    ARIA_VALUENOW: 'aria-valuenow',
    BUFFER_BAR_SELECTOR: '.mdc-linear-progress__buffer-bar',
    FLEX_BASIS: 'flex-basis',
    PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
};
// these are percentages pulled from keyframes.scss
var animationDimensionPercentages = {
    PRIMARY_HALF: .8367142,
    PRIMARY_FULL: 2.00611057,
    SECONDARY_QUARTER: .37651913,
    SECONDARY_HALF: .84386165,
    SECONDARY_FULL: 1.60277782,
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
var MDCLinearProgressFoundation = /** @class */ (function (_super) {
    __extends(MDCLinearProgressFoundation, _super);
    function MDCLinearProgressFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCLinearProgressFoundation.defaultAdapter), adapter)) || this;
        _this.observer = null;
        return _this;
    }
    Object.defineProperty(MDCLinearProgressFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLinearProgressFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                attachResizeObserver: function () { return null; },
                forceLayout: function () { return undefined; },
                getWidth: function () { return 0; },
                hasClass: function () { return false; },
                setBufferBarStyle: function () { return null; },
                setPrimaryBarStyle: function () { return null; },
                setStyle: function () { return undefined; },
                removeAttribute: function () { return undefined; },
                removeClass: function () { return undefined; },
                setAttribute: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCLinearProgressFoundation.prototype.init = function () {
        var _this = this;
        this.determinate = !this.adapter.hasClass(cssClasses.INDETERMINATE_CLASS);
        this.adapter.addClass(cssClasses.ANIMATION_READY_CLASS);
        this.progress = 0;
        this.buffer = 1;
        this.observer = this.adapter.attachResizeObserver(function (entries) {
            var e_1, _a;
            if (_this.determinate) {
                return;
            }
            try {
                for (var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()) {
                    var entry = entries_1_1.value;
                    if (entry.contentRect) {
                        _this.calculateAndSetDimensions(entry.contentRect.width);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
        if (!this.determinate && this.observer) {
            this.calculateAndSetDimensions(this.adapter.getWidth());
        }
    };
    MDCLinearProgressFoundation.prototype.setDeterminate = function (isDeterminate) {
        this.determinate = isDeterminate;
        if (this.determinate) {
            this.adapter.removeClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter.setAttribute(strings.ARIA_VALUENOW, this.progress.toString());
            this.adapter.setAttribute(strings.ARIA_VALUEMAX, '1');
            this.adapter.setAttribute(strings.ARIA_VALUEMIN, '0');
            this.setPrimaryBarProgress(this.progress);
            this.setBufferBarProgress(this.buffer);
            return;
        }
        if (this.observer) {
            this.calculateAndSetDimensions(this.adapter.getWidth());
        }
        this.adapter.addClass(cssClasses.INDETERMINATE_CLASS);
        this.adapter.removeAttribute(strings.ARIA_VALUENOW);
        this.adapter.removeAttribute(strings.ARIA_VALUEMAX);
        this.adapter.removeAttribute(strings.ARIA_VALUEMIN);
        this.setPrimaryBarProgress(1);
        this.setBufferBarProgress(1);
    };
    MDCLinearProgressFoundation.prototype.isDeterminate = function () {
        return this.determinate;
    };
    MDCLinearProgressFoundation.prototype.setProgress = function (value) {
        this.progress = value;
        if (this.determinate) {
            this.setPrimaryBarProgress(value);
            this.adapter.setAttribute(strings.ARIA_VALUENOW, value.toString());
        }
    };
    MDCLinearProgressFoundation.prototype.getProgress = function () {
        return this.progress;
    };
    MDCLinearProgressFoundation.prototype.setBuffer = function (value) {
        this.buffer = value;
        if (this.determinate) {
            this.setBufferBarProgress(value);
        }
    };
    MDCLinearProgressFoundation.prototype.getBuffer = function () {
        return this.buffer;
    };
    MDCLinearProgressFoundation.prototype.open = function () {
        this.adapter.removeClass(cssClasses.CLOSED_CLASS);
        this.adapter.removeClass(cssClasses.CLOSED_ANIMATION_OFF_CLASS);
        this.adapter.removeAttribute(strings.ARIA_HIDDEN);
    };
    MDCLinearProgressFoundation.prototype.close = function () {
        this.adapter.addClass(cssClasses.CLOSED_CLASS);
        this.adapter.setAttribute(strings.ARIA_HIDDEN, 'true');
    };
    MDCLinearProgressFoundation.prototype.isClosed = function () {
        return this.adapter.hasClass(cssClasses.CLOSED_CLASS);
    };
    /**
     * Handles the transitionend event emitted after `close()` is called and the
     * opacity fades out. This is so that animations are removed only after the
     * progress indicator is completely hidden.
     */
    MDCLinearProgressFoundation.prototype.handleTransitionEnd = function () {
        if (this.adapter.hasClass(cssClasses.CLOSED_CLASS)) {
            this.adapter.addClass(cssClasses.CLOSED_ANIMATION_OFF_CLASS);
        }
    };
    MDCLinearProgressFoundation.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        if (this.observer) {
            this.observer.disconnect();
        }
    };
    MDCLinearProgressFoundation.prototype.restartAnimation = function () {
        this.adapter.removeClass(cssClasses.ANIMATION_READY_CLASS);
        this.adapter.forceLayout();
        this.adapter.addClass(cssClasses.ANIMATION_READY_CLASS);
    };
    MDCLinearProgressFoundation.prototype.setPrimaryBarProgress = function (progressValue) {
        var value = "scaleX(" + progressValue + ")";
        // Accessing `window` without a `typeof` check will throw on Node
        // environments.
        var transformProp = typeof window !== 'undefined' ?
            getCorrectPropertyName(window, 'transform') :
            'transform';
        this.adapter.setPrimaryBarStyle(transformProp, value);
    };
    MDCLinearProgressFoundation.prototype.setBufferBarProgress = function (progressValue) {
        var value = progressValue * 100 + "%";
        this.adapter.setBufferBarStyle(strings.FLEX_BASIS, value);
    };
    MDCLinearProgressFoundation.prototype.calculateAndSetDimensions = function (width) {
        var primaryHalf = width * animationDimensionPercentages.PRIMARY_HALF;
        var primaryFull = width * animationDimensionPercentages.PRIMARY_FULL;
        var secondaryQuarter = width * animationDimensionPercentages.SECONDARY_QUARTER;
        var secondaryHalf = width * animationDimensionPercentages.SECONDARY_HALF;
        var secondaryFull = width * animationDimensionPercentages.SECONDARY_FULL;
        this.adapter.setStyle('--mdc-linear-progress-primary-half', primaryHalf + "px");
        this.adapter.setStyle('--mdc-linear-progress-primary-half-neg', -primaryHalf + "px");
        this.adapter.setStyle('--mdc-linear-progress-primary-full', primaryFull + "px");
        this.adapter.setStyle('--mdc-linear-progress-primary-full-neg', -primaryFull + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-quarter', secondaryQuarter + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-quarter-neg', -secondaryQuarter + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-half', secondaryHalf + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-half-neg', -secondaryHalf + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-full', secondaryFull + "px");
        this.adapter.setStyle('--mdc-linear-progress-secondary-full-neg', -secondaryFull + "px");
        // need to restart animation for custom props to apply to keyframes
        this.restartAnimation();
    };
    return MDCLinearProgressFoundation;
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

/* packages/linear-progress/LinearProgress.svelte generated by Svelte v3.37.0 */

const file = "packages/linear-progress/LinearProgress.svelte";

function create_fragment(ctx) {
	let div5;
	let div2;
	let div0;
	let div0_style_value;
	let t0;
	let div1;
	let t1;
	let div3;
	let span0;
	let div3_style_value;
	let t2;
	let div4;
	let span1;
	let div5_class_value;
	let div5_style_value;
	let div5_aria_valuenow_value;
	let useActions_action;
	let mounted;
	let dispose;

	let div5_levels = [
		{
			class: div5_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-linear-progress": true,
				"mdc-linear-progress--indeterminate": /*indeterminate*/ ctx[3],
				"mdc-linear-progress--closed": /*closed*/ ctx[4],
				"mdc-data-table__linear-progress": /*context*/ ctx[14] === "data-table",
				.../*internalClasses*/ ctx[8]
			})
		},
		{
			style: div5_style_value = Object.entries(/*internalStyles*/ ctx[10]).map(func_2).concat([/*style*/ ctx[2]]).join(" ")
		},
		{ role: "progressbar" },
		{ "aria-valuemin": "0" },
		{ "aria-valuemax": "1" },
		{
			"aria-valuenow": div5_aria_valuenow_value = /*indeterminate*/ ctx[3]
			? null
			: `${/*progress*/ ctx[5].toLocaleString()}`
		},
		/*internalAttrs*/ ctx[9],
		/*$$restProps*/ ctx[16]
	];

	let div5_data = {};

	for (let i = 0; i < div5_levels.length; i += 1) {
		div5_data = assign(div5_data, div5_levels[i]);
	}

	const block = {
		c: function create() {
			div5 = element("div");
			div2 = element("div");
			div0 = element("div");
			t0 = space();
			div1 = element("div");
			t1 = space();
			div3 = element("div");
			span0 = element("span");
			t2 = space();
			div4 = element("div");
			span1 = element("span");
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", {
				class: true,
				style: true,
				role: true,
				"aria-valuemin": true,
				"aria-valuemax": true,
				"aria-valuenow": true
			});

			var div5_nodes = children(div5);
			div2 = claim_element(div5_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true, style: true });
			children(div0).forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			children(div1).forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t1 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { class: true, style: true });
			var div3_nodes = children(div3);
			span0 = claim_element(div3_nodes, "SPAN", { class: true });
			children(span0).forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t2 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			span1 = claim_element(div4_nodes, "SPAN", { class: true });
			children(span1).forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "mdc-linear-progress__buffer-bar");
			attr_dev(div0, "style", div0_style_value = Object.entries(/*bufferBarStyles*/ ctx[11]).map(func).join(" "));
			add_location(div0, file, 25, 4, 761);
			attr_dev(div1, "class", "mdc-linear-progress__buffer-dots");
			add_location(div1, file, 31, 4, 942);
			attr_dev(div2, "class", "mdc-linear-progress__buffer");
			add_location(div2, file, 24, 2, 715);
			attr_dev(span0, "class", "mdc-linear-progress__bar-inner");
			add_location(span0, file, 39, 4, 1199);
			attr_dev(div3, "class", "mdc-linear-progress__bar mdc-linear-progress__primary-bar");
			attr_dev(div3, "style", div3_style_value = Object.entries(/*primaryBarStyles*/ ctx[12]).map(func_1).join(" "));
			add_location(div3, file, 33, 2, 1002);
			attr_dev(span1, "class", "mdc-linear-progress__bar-inner");
			add_location(span1, file, 42, 4, 1336);
			attr_dev(div4, "class", "mdc-linear-progress__bar mdc-linear-progress__secondary-bar");
			add_location(div4, file, 41, 2, 1258);
			set_attributes(div5, div5_data);
			add_location(div5, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div2);
			append_dev(div2, div0);
			append_dev(div2, t0);
			append_dev(div2, div1);
			append_dev(div5, t1);
			append_dev(div5, div3);
			append_dev(div3, span0);
			append_dev(div5, t2);
			append_dev(div5, div4);
			append_dev(div4, span1);
			/*div5_binding*/ ctx[19](div5);

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div5, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[13].call(null, div5)),
					listen_dev(div5, "transitionend", /*transitionend_handler*/ ctx[20], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*bufferBarStyles*/ 2048 && div0_style_value !== (div0_style_value = Object.entries(/*bufferBarStyles*/ ctx[11]).map(func).join(" "))) {
				attr_dev(div0, "style", div0_style_value);
			}

			if (dirty & /*primaryBarStyles*/ 4096 && div3_style_value !== (div3_style_value = Object.entries(/*primaryBarStyles*/ ctx[12]).map(func_1).join(" "))) {
				attr_dev(div3, "style", div3_style_value);
			}

			set_attributes(div5, div5_data = get_spread_update(div5_levels, [
				dirty & /*className, indeterminate, closed, internalClasses*/ 282 && div5_class_value !== (div5_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-linear-progress": true,
					"mdc-linear-progress--indeterminate": /*indeterminate*/ ctx[3],
					"mdc-linear-progress--closed": /*closed*/ ctx[4],
					"mdc-data-table__linear-progress": /*context*/ ctx[14] === "data-table",
					.../*internalClasses*/ ctx[8]
				})) && { class: div5_class_value },
				dirty & /*internalStyles, style*/ 1028 && div5_style_value !== (div5_style_value = Object.entries(/*internalStyles*/ ctx[10]).map(func_2).concat([/*style*/ ctx[2]]).join(" ")) && { style: div5_style_value },
				{ role: "progressbar" },
				{ "aria-valuemin": "0" },
				{ "aria-valuemax": "1" },
				dirty & /*indeterminate, progress*/ 40 && div5_aria_valuenow_value !== (div5_aria_valuenow_value = /*indeterminate*/ ctx[3]
				? null
				: `${/*progress*/ ctx[5].toLocaleString()}`) && {
					"aria-valuenow": div5_aria_valuenow_value
				},
				dirty & /*internalAttrs*/ 512 && /*internalAttrs*/ ctx[9],
				dirty & /*$$restProps*/ 65536 && /*$$restProps*/ ctx[16]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
			/*div5_binding*/ ctx[19](null);
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

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","indeterminate","closed","progress","buffer","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $closedStore;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("LinearProgress", slots, []);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { indeterminate = false } = $$props;
	let { closed = false } = $$props;
	let { progress = 0 } = $$props;
	let { buffer = null } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalAttrs = {};
	let internalStyles = {};
	let bufferBarStyles = {};
	let primaryBarStyles = {};
	let context = getContext("SMUI:linear-progress:context");
	let closedStore = getContext("SMUI:linear-progress:closed");
	validate_store(closedStore, "closedStore");
	component_subscribe($$self, closedStore, value => $$invalidate(21, $closedStore = value));

	onMount(() => {
		$$invalidate(6, instance = new MDCLinearProgressFoundation({
				addClass,
				forceLayout: () => {
					getElement().getBoundingClientRect();
				},
				setBufferBarStyle: addBufferBarStyle,
				setPrimaryBarStyle: addPrimaryBarStyle,
				hasClass,
				removeAttribute: removeAttr,
				removeClass,
				setAttribute: addAttr,
				setStyle: addStyle,
				attachResizeObserver: callback => {
					const RO = window.ResizeObserver;

					if (RO) {
						const ro = new RO(callback);
						ro.observe(getElement());
						return ro;
					}

					return null;
				},
				getWidth: () => getElement().offsetWidth
			}));

		instance.init();

		return () => {
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
			$$invalidate(8, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(8, internalClasses[className] = false, internalClasses);
		}
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(9, internalAttrs[name] = value, internalAttrs);
		}
	}

	function removeAttr(name) {
		if (!(name in internalAttrs) || internalAttrs[name] != null) {
			$$invalidate(9, internalAttrs[name] = undefined, internalAttrs);
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

	function addBufferBarStyle(name, value) {
		if (bufferBarStyles[name] != value) {
			if (value === "" || value == null) {
				delete bufferBarStyles[name];
				$$invalidate(11, bufferBarStyles);
			} else {
				$$invalidate(11, bufferBarStyles[name] = value, bufferBarStyles);
			}
		}
	}

	function addPrimaryBarStyle(name, value) {
		if (primaryBarStyles[name] != value) {
			if (value === "" || value == null) {
				delete primaryBarStyles[name];
				$$invalidate(12, primaryBarStyles);
			} else {
				$$invalidate(12, primaryBarStyles[name] = value, primaryBarStyles);
			}
		}
	}

	function getElement() {
		return element;
	}

	function div5_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	const transitionend_handler = () => instance && instance.handleTransitionEnd();

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(16, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ("indeterminate" in $$new_props) $$invalidate(3, indeterminate = $$new_props.indeterminate);
		if ("closed" in $$new_props) $$invalidate(4, closed = $$new_props.closed);
		if ("progress" in $$new_props) $$invalidate(5, progress = $$new_props.progress);
		if ("buffer" in $$new_props) $$invalidate(17, buffer = $$new_props.buffer);
	};

	$$self.$capture_state = () => ({
		MDCLinearProgressFoundation,
		onMount,
		getContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		forwardEvents,
		use,
		className,
		style,
		indeterminate,
		closed,
		progress,
		buffer,
		element,
		instance,
		internalClasses,
		internalAttrs,
		internalStyles,
		bufferBarStyles,
		primaryBarStyles,
		context,
		closedStore,
		hasClass,
		addClass,
		removeClass,
		addAttr,
		removeAttr,
		addStyle,
		addBufferBarStyle,
		addPrimaryBarStyle,
		getElement,
		$closedStore
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
		if ("indeterminate" in $$props) $$invalidate(3, indeterminate = $$new_props.indeterminate);
		if ("closed" in $$props) $$invalidate(4, closed = $$new_props.closed);
		if ("progress" in $$props) $$invalidate(5, progress = $$new_props.progress);
		if ("buffer" in $$props) $$invalidate(17, buffer = $$new_props.buffer);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(6, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(8, internalClasses = $$new_props.internalClasses);
		if ("internalAttrs" in $$props) $$invalidate(9, internalAttrs = $$new_props.internalAttrs);
		if ("internalStyles" in $$props) $$invalidate(10, internalStyles = $$new_props.internalStyles);
		if ("bufferBarStyles" in $$props) $$invalidate(11, bufferBarStyles = $$new_props.bufferBarStyles);
		if ("primaryBarStyles" in $$props) $$invalidate(12, primaryBarStyles = $$new_props.primaryBarStyles);
		if ("context" in $$props) $$invalidate(14, context = $$new_props.context);
		if ("closedStore" in $$props) $$invalidate(15, closedStore = $$new_props.closedStore);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*closed*/ 16) {
			if (closedStore) {
				set_store_value(closedStore, $closedStore = closed, $closedStore);
			}
		}

		if ($$self.$$.dirty & /*instance, indeterminate*/ 72) {
			if (instance && instance.isDeterminate() !== !indeterminate) {
				instance.setDeterminate(!indeterminate);
			}
		}

		if ($$self.$$.dirty & /*instance, progress*/ 96) {
			if (instance && instance.getProgress() !== progress) {
				instance.setProgress(progress);
			}
		}

		if ($$self.$$.dirty & /*instance, buffer*/ 131136) {
			if (instance) {
				if (buffer == null) {
					instance.setBuffer(1);
				} else {
					instance.setBuffer(buffer);
				}
			}
		}

		if ($$self.$$.dirty & /*instance, closed*/ 80) {
			if (instance) {
				if (closed) {
					instance.close();
				} else {
					instance.open();
				}
			}
		}
	};

	return [
		use,
		className,
		style,
		indeterminate,
		closed,
		progress,
		instance,
		element,
		internalClasses,
		internalAttrs,
		internalStyles,
		bufferBarStyles,
		primaryBarStyles,
		forwardEvents,
		context,
		closedStore,
		$$restProps,
		buffer,
		getElement,
		div5_binding,
		transitionend_handler
	];
}

class LinearProgress extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1, create_fragment, safe_not_equal, {
			use: 0,
			class: 1,
			style: 2,
			indeterminate: 3,
			closed: 4,
			progress: 5,
			buffer: 17,
			getElement: 18
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LinearProgress",
			options,
			id: create_fragment.name
		});
	}

	get use() {
		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get indeterminate() {
		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set indeterminate(value) {
		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get closed() {
		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set closed(value) {
		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get progress() {
		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set progress(value) {
		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get buffer() {
		throw new Error("<LinearProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set buffer(value) {
		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[18];
	}

	set getElement(value) {
		throw new Error("<LinearProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { LinearProgress as L };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGluZWFyUHJvZ3Jlc3MuMmE5MjNkODIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL2xpbmVhci1wcm9ncmVzcy9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbGluZWFyLXByb2dyZXNzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbGluZWFyLXByb2dyZXNzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvYW5pbWF0aW9uL3V0aWwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9saW5lYXItcHJvZ3Jlc3Mvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9saW5lYXItcHJvZ3Jlc3MvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbGluZWFyLXByb2dyZXNzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZWFyLXByb2dyZXNzL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9saW5lYXItcHJvZ3Jlc3Mvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2xpbmVhci1wcm9ncmVzcy9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzTWFwLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbGluZWFyLXByb2dyZXNzL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vdXNlQWN0aW9ucy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2xpbmVhci1wcm9ncmVzcy9MaW5lYXJQcm9ncmVzcy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBjc3NQcm9wZXJ0eU5hbWVNYXAgPSB7XG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIHByZWZpeGVkOiAnLXdlYmtpdC1hbmltYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbicsXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zZm9ybScsXG4gICAgICAgIHN0YW5kYXJkOiAndHJhbnNmb3JtJyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgcHJlZml4ZWQ6ICctd2Via2l0LXRyYW5zaXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ3RyYW5zaXRpb24nLFxuICAgIH0sXG59O1xudmFyIGpzRXZlbnRUeXBlTWFwID0ge1xuICAgIGFuaW1hdGlvbmVuZDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICdhbmltYXRpb25lbmQnLFxuICAgIH0sXG4gICAgYW5pbWF0aW9uaXRlcmF0aW9uOiB7XG4gICAgICAgIGNzc1Byb3BlcnR5OiAnYW5pbWF0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gICAgfSxcbiAgICBhbmltYXRpb25zdGFydDoge1xuICAgICAgICBjc3NQcm9wZXJ0eTogJ2FuaW1hdGlvbicsXG4gICAgICAgIHByZWZpeGVkOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgICAgICBzdGFuZGFyZDogJ2FuaW1hdGlvbnN0YXJ0JyxcbiAgICB9LFxuICAgIHRyYW5zaXRpb25lbmQ6IHtcbiAgICAgICAgY3NzUHJvcGVydHk6ICd0cmFuc2l0aW9uJyxcbiAgICAgICAgcHJlZml4ZWQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICAgICAgc3RhbmRhcmQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIGlzV2luZG93KHdpbmRvd09iaikge1xuICAgIHJldHVybiBCb29sZWFuKHdpbmRvd09iai5kb2N1bWVudCkgJiYgdHlwZW9mIHdpbmRvd09iai5kb2N1bWVudC5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RQcm9wZXJ0eU5hbWUod2luZG93T2JqLCBjc3NQcm9wZXJ0eSkge1xuICAgIGlmIChpc1dpbmRvdyh3aW5kb3dPYmopICYmIGNzc1Byb3BlcnR5IGluIGNzc1Byb3BlcnR5TmFtZU1hcCkge1xuICAgICAgICB2YXIgZWwgPSB3aW5kb3dPYmouZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhciBfYSA9IGNzc1Byb3BlcnR5TmFtZU1hcFtjc3NQcm9wZXJ0eV0sIHN0YW5kYXJkID0gX2Euc3RhbmRhcmQsIHByZWZpeGVkID0gX2EucHJlZml4ZWQ7XG4gICAgICAgIHZhciBpc1N0YW5kYXJkID0gc3RhbmRhcmQgaW4gZWwuc3R5bGU7XG4gICAgICAgIHJldHVybiBpc1N0YW5kYXJkID8gc3RhbmRhcmQgOiBwcmVmaXhlZDtcbiAgICB9XG4gICAgcmV0dXJuIGNzc1Byb3BlcnR5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldENvcnJlY3RFdmVudE5hbWUod2luZG93T2JqLCBldmVudFR5cGUpIHtcbiAgICBpZiAoaXNXaW5kb3cod2luZG93T2JqKSAmJiBldmVudFR5cGUgaW4ganNFdmVudFR5cGVNYXApIHtcbiAgICAgICAgdmFyIGVsID0gd2luZG93T2JqLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YXIgX2EgPSBqc0V2ZW50VHlwZU1hcFtldmVudFR5cGVdLCBzdGFuZGFyZCA9IF9hLnN0YW5kYXJkLCBwcmVmaXhlZCA9IF9hLnByZWZpeGVkLCBjc3NQcm9wZXJ0eSA9IF9hLmNzc1Byb3BlcnR5O1xuICAgICAgICB2YXIgaXNTdGFuZGFyZCA9IGNzc1Byb3BlcnR5IGluIGVsLnN0eWxlO1xuICAgICAgICByZXR1cm4gaXNTdGFuZGFyZCA/IHN0YW5kYXJkIDogcHJlZml4ZWQ7XG4gICAgfVxuICAgIHJldHVybiBldmVudFR5cGU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIENMT1NFRF9DTEFTUzogJ21kYy1saW5lYXItcHJvZ3Jlc3MtLWNsb3NlZCcsXG4gICAgQ0xPU0VEX0FOSU1BVElPTl9PRkZfQ0xBU1M6ICdtZGMtbGluZWFyLXByb2dyZXNzLS1jbG9zZWQtYW5pbWF0aW9uLW9mZicsXG4gICAgSU5ERVRFUk1JTkFURV9DTEFTUzogJ21kYy1saW5lYXItcHJvZ3Jlc3MtLWluZGV0ZXJtaW5hdGUnLFxuICAgIFJFVkVSU0VEX0NMQVNTOiAnbWRjLWxpbmVhci1wcm9ncmVzcy0tcmV2ZXJzZWQnLFxuICAgIEFOSU1BVElPTl9SRUFEWV9DTEFTUzogJ21kYy1saW5lYXItcHJvZ3Jlc3MtLWFuaW1hdGlvbi1yZWFkeScsXG59O1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfSElEREVOOiAnYXJpYS1oaWRkZW4nLFxuICAgIEFSSUFfVkFMVUVNQVg6ICdhcmlhLXZhbHVlbWF4JyxcbiAgICBBUklBX1ZBTFVFTUlOOiAnYXJpYS12YWx1ZW1pbicsXG4gICAgQVJJQV9WQUxVRU5PVzogJ2FyaWEtdmFsdWVub3cnLFxuICAgIEJVRkZFUl9CQVJfU0VMRUNUT1I6ICcubWRjLWxpbmVhci1wcm9ncmVzc19fYnVmZmVyLWJhcicsXG4gICAgRkxFWF9CQVNJUzogJ2ZsZXgtYmFzaXMnLFxuICAgIFBSSU1BUllfQkFSX1NFTEVDVE9SOiAnLm1kYy1saW5lYXItcHJvZ3Jlc3NfX3ByaW1hcnktYmFyJyxcbn07XG4vLyB0aGVzZSBhcmUgcGVyY2VudGFnZXMgcHVsbGVkIGZyb20ga2V5ZnJhbWVzLnNjc3NcbmV4cG9ydCB2YXIgYW5pbWF0aW9uRGltZW5zaW9uUGVyY2VudGFnZXMgPSB7XG4gICAgUFJJTUFSWV9IQUxGOiAuODM2NzE0MixcbiAgICBQUklNQVJZX0ZVTEw6IDIuMDA2MTEwNTcsXG4gICAgU0VDT05EQVJZX1FVQVJURVI6IC4zNzY1MTkxMyxcbiAgICBTRUNPTkRBUllfSEFMRjogLjg0Mzg2MTY1LFxuICAgIFNFQ09OREFSWV9GVUxMOiAxLjYwMjc3NzgyLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBnZXRDb3JyZWN0UHJvcGVydHlOYW1lIH0gZnJvbSAnQG1hdGVyaWFsL2FuaW1hdGlvbi91dGlsJztcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGFuaW1hdGlvbkRpbWVuc2lvblBlcmNlbnRhZ2VzIGFzIHBlcmNlbnRzLCBjc3NDbGFzc2VzLCBzdHJpbmdzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMub2JzZXJ2ZXIgPSBudWxsO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGF0dGFjaFJlc2l6ZU9ic2VydmVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIGZvcmNlTGF5b3V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2lkdGg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIHNldEJ1ZmZlckJhclN0eWxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIHNldFByaW1hcnlCYXJTdHlsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBzZXRTdHlsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmRldGVybWluYXRlID0gIXRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLklOREVURVJNSU5BVEVfQ0xBU1MpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5BTklNQVRJT05fUkVBRFlfQ0xBU1MpO1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSAxO1xuICAgICAgICB0aGlzLm9ic2VydmVyID0gdGhpcy5hZGFwdGVyLmF0dGFjaFJlc2l6ZU9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzKSB7XG4gICAgICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgICAgIGlmIChfdGhpcy5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgZW50cmllc18xID0gX192YWx1ZXMoZW50cmllcyksIGVudHJpZXNfMV8xID0gZW50cmllc18xLm5leHQoKTsgIWVudHJpZXNfMV8xLmRvbmU7IGVudHJpZXNfMV8xID0gZW50cmllc18xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZW50cnkgPSBlbnRyaWVzXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmNvbnRlbnRSZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxjdWxhdGVBbmRTZXREaW1lbnNpb25zKGVudHJ5LmNvbnRlbnRSZWN0LndpZHRoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cmllc18xXzEgJiYgIWVudHJpZXNfMV8xLmRvbmUgJiYgKF9hID0gZW50cmllc18xLnJldHVybikpIF9hLmNhbGwoZW50cmllc18xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCF0aGlzLmRldGVybWluYXRlICYmIHRoaXMub2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlQW5kU2V0RGltZW5zaW9ucyh0aGlzLmFkYXB0ZXIuZ2V0V2lkdGgoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGV0ZXJtaW5hdGUgPSBmdW5jdGlvbiAoaXNEZXRlcm1pbmF0ZSkge1xuICAgICAgICB0aGlzLmRldGVybWluYXRlID0gaXNEZXRlcm1pbmF0ZTtcbiAgICAgICAgaWYgKHRoaXMuZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLklOREVURVJNSU5BVEVfQ0xBU1MpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfVkFMVUVOT1csIHRoaXMucHJvZ3Jlc3MudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9WQUxVRU1BWCwgJzEnKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX1ZBTFVFTUlOLCAnMCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5QmFyUHJvZ3Jlc3ModGhpcy5wcm9ncmVzcyk7XG4gICAgICAgICAgICB0aGlzLnNldEJ1ZmZlckJhclByb2dyZXNzKHRoaXMuYnVmZmVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVBbmRTZXREaW1lbnNpb25zKHRoaXMuYWRhcHRlci5nZXRXaWR0aCgpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5JTkRFVEVSTUlOQVRFX0NMQVNTKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfVkFMVUVOT1cpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQXR0cmlidXRlKHN0cmluZ3MuQVJJQV9WQUxVRU1BWCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX1ZBTFVFTUlOKTtcbiAgICAgICAgdGhpcy5zZXRQcmltYXJ5QmFyUHJvZ3Jlc3MoMSk7XG4gICAgICAgIHRoaXMuc2V0QnVmZmVyQmFyUHJvZ3Jlc3MoMSk7XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmlzRGV0ZXJtaW5hdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRldGVybWluYXRlO1xuICAgIH07XG4gICAgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRQcm9ncmVzcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcnlCYXJQcm9ncmVzcyh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9WQUxVRU5PVywgdmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzO1xuICAgIH07XG4gICAgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRCdWZmZXIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMuZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QnVmZmVyQmFyUHJvZ3Jlc3ModmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmdldEJ1ZmZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVmZmVyO1xuICAgIH07XG4gICAgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TRURfQ0xBU1MpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TRURfQU5JTUFUSU9OX09GRl9DTEFTUyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX0hJRERFTik7XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5DTE9TRURfQ0xBU1MpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9ISURERU4sICd0cnVlJyk7XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmlzQ2xvc2VkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuQ0xPU0VEX0NMQVNTKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgdGhlIHRyYW5zaXRpb25lbmQgZXZlbnQgZW1pdHRlZCBhZnRlciBgY2xvc2UoKWAgaXMgY2FsbGVkIGFuZCB0aGVcbiAgICAgKiBvcGFjaXR5IGZhZGVzIG91dC4gVGhpcyBpcyBzbyB0aGF0IGFuaW1hdGlvbnMgYXJlIHJlbW92ZWQgb25seSBhZnRlciB0aGVcbiAgICAgKiBwcm9ncmVzcyBpbmRpY2F0b3IgaXMgY29tcGxldGVseSBoaWRkZW4uXG4gICAgICovXG4gICAgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuQ0xPU0VEX0NMQVNTKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuQ0xPU0VEX0FOSU1BVElPTl9PRkZfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF9zdXBlci5wcm90b3R5cGUuZGVzdHJveS5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcikge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbi5wcm90b3R5cGUucmVzdGFydEFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuQU5JTUFUSU9OX1JFQURZX0NMQVNTKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmZvcmNlTGF5b3V0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhjc3NDbGFzc2VzLkFOSU1BVElPTl9SRUFEWV9DTEFTUyk7XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldFByaW1hcnlCYXJQcm9ncmVzcyA9IGZ1bmN0aW9uIChwcm9ncmVzc1ZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IFwic2NhbGVYKFwiICsgcHJvZ3Jlc3NWYWx1ZSArIFwiKVwiO1xuICAgICAgICAvLyBBY2Nlc3NpbmcgYHdpbmRvd2Agd2l0aG91dCBhIGB0eXBlb2ZgIGNoZWNrIHdpbGwgdGhyb3cgb24gTm9kZVxuICAgICAgICAvLyBlbnZpcm9ubWVudHMuXG4gICAgICAgIHZhciB0cmFuc2Zvcm1Qcm9wID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgP1xuICAgICAgICAgICAgZ2V0Q29ycmVjdFByb3BlcnR5TmFtZSh3aW5kb3csICd0cmFuc2Zvcm0nKSA6XG4gICAgICAgICAgICAndHJhbnNmb3JtJztcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFByaW1hcnlCYXJTdHlsZSh0cmFuc2Zvcm1Qcm9wLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLnNldEJ1ZmZlckJhclByb2dyZXNzID0gZnVuY3Rpb24gKHByb2dyZXNzVmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJvZ3Jlc3NWYWx1ZSAqIDEwMCArIFwiJVwiO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QnVmZmVyQmFyU3R5bGUoc3RyaW5ncy5GTEVYX0JBU0lTLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmNhbGN1bGF0ZUFuZFNldERpbWVuc2lvbnMgPSBmdW5jdGlvbiAod2lkdGgpIHtcbiAgICAgICAgdmFyIHByaW1hcnlIYWxmID0gd2lkdGggKiBwZXJjZW50cy5QUklNQVJZX0hBTEY7XG4gICAgICAgIHZhciBwcmltYXJ5RnVsbCA9IHdpZHRoICogcGVyY2VudHMuUFJJTUFSWV9GVUxMO1xuICAgICAgICB2YXIgc2Vjb25kYXJ5UXVhcnRlciA9IHdpZHRoICogcGVyY2VudHMuU0VDT05EQVJZX1FVQVJURVI7XG4gICAgICAgIHZhciBzZWNvbmRhcnlIYWxmID0gd2lkdGggKiBwZXJjZW50cy5TRUNPTkRBUllfSEFMRjtcbiAgICAgICAgdmFyIHNlY29uZGFyeUZ1bGwgPSB3aWR0aCAqIHBlcmNlbnRzLlNFQ09OREFSWV9GVUxMO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U3R5bGUoJy0tbWRjLWxpbmVhci1wcm9ncmVzcy1wcmltYXJ5LWhhbGYnLCBwcmltYXJ5SGFsZiArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTdHlsZSgnLS1tZGMtbGluZWFyLXByb2dyZXNzLXByaW1hcnktaGFsZi1uZWcnLCAtcHJpbWFyeUhhbGYgKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U3R5bGUoJy0tbWRjLWxpbmVhci1wcm9ncmVzcy1wcmltYXJ5LWZ1bGwnLCBwcmltYXJ5RnVsbCArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTdHlsZSgnLS1tZGMtbGluZWFyLXByb2dyZXNzLXByaW1hcnktZnVsbC1uZWcnLCAtcHJpbWFyeUZ1bGwgKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U3R5bGUoJy0tbWRjLWxpbmVhci1wcm9ncmVzcy1zZWNvbmRhcnktcXVhcnRlcicsIHNlY29uZGFyeVF1YXJ0ZXIgKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U3R5bGUoJy0tbWRjLWxpbmVhci1wcm9ncmVzcy1zZWNvbmRhcnktcXVhcnRlci1uZWcnLCAtc2Vjb25kYXJ5UXVhcnRlciArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTdHlsZSgnLS1tZGMtbGluZWFyLXByb2dyZXNzLXNlY29uZGFyeS1oYWxmJywgc2Vjb25kYXJ5SGFsZiArIFwicHhcIik7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTdHlsZSgnLS1tZGMtbGluZWFyLXByb2dyZXNzLXNlY29uZGFyeS1oYWxmLW5lZycsIC1zZWNvbmRhcnlIYWxmICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFN0eWxlKCctLW1kYy1saW5lYXItcHJvZ3Jlc3Mtc2Vjb25kYXJ5LWZ1bGwnLCBzZWNvbmRhcnlGdWxsICsgXCJweFwiKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNldFN0eWxlKCctLW1kYy1saW5lYXItcHJvZ3Jlc3Mtc2Vjb25kYXJ5LWZ1bGwtbmVnJywgLXNlY29uZGFyeUZ1bGwgKyBcInB4XCIpO1xuICAgICAgICAvLyBuZWVkIHRvIHJlc3RhcnQgYW5pbWF0aW9uIGZvciBjdXN0b20gcHJvcHMgdG8gYXBwbHkgdG8ga2V5ZnJhbWVzXG4gICAgICAgIHRoaXMucmVzdGFydEFuaW1hdGlvbigpO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0xpbmVhclByb2dyZXNzRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCJpbXBvcnQge1xuICBidWJibGUsXG4gIGxpc3RlbixcbiAgcHJldmVudF9kZWZhdWx0LFxuICBzdG9wX3Byb3BhZ2F0aW9uLFxufSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuXG4vLyBNYXRjaCBtb2RpZmllcnMgb24gRE9NIGV2ZW50cy5cbmNvbnN0IG9sZE1vZGlmaWVyUmVnZXggPSAvXlthLXpdKyg/OjooPzpwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb258cGFzc2l2ZXxub25wYXNzaXZlfGNhcHR1cmV8b25jZXxzZWxmKSkrJC87XG4vLyBNYXRjaCBtb2RpZmllcnMgb24gb3RoZXIgZXZlbnRzLlxuY29uc3QgbmV3TW9kaWZpZXJSZWdleCA9IC9eW14kXSsoPzpcXCQoPzpwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb258cGFzc2l2ZXxub25wYXNzaXZlfGNhcHR1cmV8b25jZXxzZWxmKSkrJC87XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRXZlbnRzQnVpbGRlcihjb21wb25lbnQpIHtcbiAgLy8gVGhpcyBpcyBvdXIgcHNldWRvICRvbiBmdW5jdGlvbi4gSXQgaXMgZGVmaW5lZCBvbiBjb21wb25lbnQgbW91bnQuXG4gIGxldCAkb247XG4gIC8vIFRoaXMgaXMgYSBsaXN0IG9mIGV2ZW50cyBib3VuZCBiZWZvcmUgbW91bnQuXG4gIGxldCBldmVudHMgPSBbXTtcbiAgLy8gVGhpcyBpcyB0aGUgb3JpZ2luYWwgY29tcG9uZW50ICRvbiBmdW5jdGlvbi5cbiAgY29uc3QgY29tcG9uZW50T24gPSBjb21wb25lbnQuJG9uO1xuXG4gIC8vIEFuZCB3ZSBvdmVycmlkZSB0aGUgJG9uIGZ1bmN0aW9uIHRvIGZvcndhcmQgYWxsIGJvdW5kIGV2ZW50cy5cbiAgY29tcG9uZW50LiRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgIGxldCBldmVudFR5cGUgPSBmdWxsRXZlbnRUeXBlO1xuICAgIGxldCBkZXN0cnVjdG9yID0gKCkgPT4ge307XG4gICAgaWYgKCRvbikge1xuICAgICAgLy8gVGhlIGV2ZW50IHdhcyBib3VuZCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgZGVzdHJ1Y3RvciA9ICRvbihldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGV2ZW50IHdhcyBib3VuZCBiZWZvcmUgbW91bnQgYnkgU3ZlbHRlLlxuICAgICAgZXZlbnRzLnB1c2goW2V2ZW50VHlwZSwgY2FsbGJhY2tdKTtcbiAgICB9XG4gICAgY29uc3Qgb2xkTW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChvbGRNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG5cbiAgICBpZiAob2xkTW9kaWZpZXJNYXRjaCAmJiBjb25zb2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdFdmVudCBtb2RpZmllcnMgaW4gU01VSSBub3cgdXNlIFwiJFwiIGluc3RlYWQgb2YgXCI6XCIsIHNvIHRoYXQgYWxsIGV2ZW50cyBjYW4gYmUgYm91bmQgd2l0aCBtb2RpZmllcnMuIFBsZWFzZSB1cGRhdGUgeW91ciBldmVudCBiaW5kaW5nOiAnLFxuICAgICAgICBldmVudFR5cGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGlmaWVyTWF0Y2gpIHtcbiAgICAgIC8vIFJlbW92ZSBtb2RpZmllcnMgZnJvbSB0aGUgcmVhbCBldmVudC5cbiAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgJG9uIGZ1bmN0aW9uLlxuICAgIGNvbnN0IGNvbXBvbmVudERlc3RydWN0b3IgPSBjb21wb25lbnRPbi5jYWxsKFxuICAgICAgY29tcG9uZW50LFxuICAgICAgZXZlbnRUeXBlLFxuICAgICAgY2FsbGJhY2tcbiAgICApO1xuXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICBkZXN0cnVjdG9yKCk7XG4gICAgICByZXR1cm4gY29tcG9uZW50RGVzdHJ1Y3RvciguLi5hcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZvcndhcmQoZSkge1xuICAgIC8vIEludGVybmFsbHkgYnViYmxlIHRoZSBldmVudCB1cCBmcm9tIFN2ZWx0ZSBjb21wb25lbnRzLlxuICAgIGJ1YmJsZShjb21wb25lbnQsIGUpO1xuICB9XG5cbiAgcmV0dXJuIChub2RlKSA9PiB7XG4gICAgY29uc3QgZGVzdHJ1Y3RvcnMgPSBbXTtcbiAgICBjb25zdCBmb3J3YXJkRGVzdHJ1Y3RvcnMgPSB7fTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIGZvcndhcmRpbmcgYWxsIGJvdW5kIGV2ZW50cy5cbiAgICAkb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICAgIGxldCBldmVudFR5cGUgPSBmdWxsRXZlbnRUeXBlO1xuICAgICAgbGV0IGhhbmRsZXIgPSBjYWxsYmFjaztcbiAgICAgIC8vIERPTSBhZGRFdmVudExpc3RlbmVyIG9wdGlvbnMgYXJndW1lbnQuXG4gICAgICBsZXQgb3B0aW9ucyA9IGZhbHNlO1xuICAgICAgY29uc3Qgb2xkTW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChvbGRNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuICAgICAgaWYgKG1vZGlmaWVyTWF0Y2gpIHtcbiAgICAgICAgLy8gUGFyc2UgdGhlIGV2ZW50IG1vZGlmaWVycy5cbiAgICAgICAgLy8gU3VwcG9ydGVkIG1vZGlmaWVyczpcbiAgICAgICAgLy8gLSBwcmV2ZW50RGVmYXVsdFxuICAgICAgICAvLyAtIHN0b3BQcm9wYWdhdGlvblxuICAgICAgICAvLyAtIHBhc3NpdmVcbiAgICAgICAgLy8gLSBub25wYXNzaXZlXG4gICAgICAgIC8vIC0gY2FwdHVyZVxuICAgICAgICAvLyAtIG9uY2VcbiAgICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmZyb21FbnRyaWVzKHBhcnRzLnNsaWNlKDEpLm1hcCgobW9kKSA9PiBbbW9kLCB0cnVlXSkpO1xuICAgICAgICBpZiAob3B0aW9ucy5ub25wYXNzaXZlKSB7XG4gICAgICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2U7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMubm9ucGFzc2l2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGhhbmRsZXIgPSBwcmV2ZW50X2RlZmF1bHQoaGFuZGxlcik7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMucHJldmVudERlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BfcHJvcGFnYXRpb24oaGFuZGxlcik7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgdGhlIGV2ZW50IGRpcmVjdGx5LCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgICAgY29uc3Qgb2ZmID0gbGlzdGVuKG5vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICBjb25zdCBkZXN0cnVjdG9yID0gKCkgPT4ge1xuICAgICAgICBvZmYoKTtcbiAgICAgICAgY29uc3QgaWR4ID0gZGVzdHJ1Y3RvcnMuaW5kZXhPZihkZXN0cnVjdG9yKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRlc3RydWN0b3JzLnB1c2goZGVzdHJ1Y3Rvcik7XG5cbiAgICAgIC8vIEZvcndhcmQgdGhlIGV2ZW50IGZyb20gU3ZlbHRlLlxuICAgICAgaWYgKCFldmVudFR5cGUgaW4gZm9yd2FyZERlc3RydWN0b3JzKSB7XG4gICAgICAgIGZvcndhcmREZXN0cnVjdG9yc1tldmVudFR5cGVdID0gbGlzdGVuKG5vZGUsIGV2ZW50VHlwZSwgZm9yd2FyZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXN0cnVjdG9yO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gTGlzdGVuIHRvIGFsbCB0aGUgZXZlbnRzIGFkZGVkIGJlZm9yZSBtb3VudC5cbiAgICAgICRvbihldmVudHNbaV1bMF0sIGV2ZW50c1tpXVsxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdHJ1Y3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkZXN0cnVjdG9yc1tpXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudCBmb3J3YXJkZXJzLlxuICAgICAgICBmb3IgKGxldCBlbnRyeSBvZiBPYmplY3QuZW50cmllcyhmb3J3YXJkRGVzdHJ1Y3RvcnMpKSB7XG4gICAgICAgICAgZW50cnlbMV0oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsYXNzTWFwKGNsYXNzT2JqKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhjbGFzc09iailcbiAgICAuZmlsdGVyKChbbmFtZSwgdmFsdWVdKSA9PiBuYW1lICE9PSAnJyAmJiB2YWx1ZSlcbiAgICAubWFwKChbbmFtZV0pID0+IG5hbWUpXG4gICAgLmpvaW4oJyAnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25zKG5vZGUsIGFjdGlvbnMpIHtcbiAgbGV0IG9iamVjdHMgPSBbXTtcblxuICBpZiAoYWN0aW9ucykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICBjb25zdCBhY3Rpb24gPSBpc0FycmF5ID8gYWN0aW9uc1tpXVswXSA6IGFjdGlvbnNbaV07XG4gICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlLCBhY3Rpb25zW2ldWzFdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShhY3Rpb25zKSB7XG4gICAgICBpZiAoKChhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoKSB8fCAwKSAhPSBvYmplY3RzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG5vdCBjaGFuZ2UgdGhlIGxlbmd0aCBvZiBhbiBhY3Rpb25zIGFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9ucykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAndXBkYXRlJyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZShhY3Rpb25zW2ldWzFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ2Rlc3Ryb3knIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICBvYmplY3RzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG4iLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWxpbmVhci1wcm9ncmVzcyc6IHRydWUsXG4gICAgJ21kYy1saW5lYXItcHJvZ3Jlc3MtLWluZGV0ZXJtaW5hdGUnOiBpbmRldGVybWluYXRlLFxuICAgICdtZGMtbGluZWFyLXByb2dyZXNzLS1jbG9zZWQnOiBjbG9zZWQsXG4gICAgJ21kYy1kYXRhLXRhYmxlX19saW5lYXItcHJvZ3Jlc3MnOiBjb250ZXh0ID09PSAnZGF0YS10YWJsZScsXG4gICAgLi4uaW50ZXJuYWxDbGFzc2VzLFxuICB9KX1cbiAgc3R5bGU9e09iamVjdC5lbnRyaWVzKGludGVybmFsU3R5bGVzKVxuICAgIC5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+IGAke25hbWV9OiAke3ZhbHVlfTtgKVxuICAgIC5jb25jYXQoW3N0eWxlXSlcbiAgICAuam9pbignICcpfVxuICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gIGFyaWEtdmFsdWVtYXg9XCIxXCJcbiAgYXJpYS12YWx1ZW5vdz17aW5kZXRlcm1pbmF0ZSA/IG51bGwgOiBgJHtwcm9ncmVzcy50b0xvY2FsZVN0cmluZygpfWB9XG4gIG9uOnRyYW5zaXRpb25lbmQ9eygpID0+IGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZVRyYW5zaXRpb25FbmQoKX1cbiAgey4uLmludGVybmFsQXR0cnN9XG4gIHsuLi4kJHJlc3RQcm9wc31cbj5cbiAgPGRpdiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2J1ZmZlclwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibWRjLWxpbmVhci1wcm9ncmVzc19fYnVmZmVyLWJhclwiXG4gICAgICBzdHlsZT17T2JqZWN0LmVudHJpZXMoYnVmZmVyQmFyU3R5bGVzKVxuICAgICAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICAvPlxuICAgIDxkaXYgY2xhc3M9XCJtZGMtbGluZWFyLXByb2dyZXNzX19idWZmZXItZG90c1wiIC8+XG4gIDwvZGl2PlxuICA8ZGl2XG4gICAgY2xhc3M9XCJtZGMtbGluZWFyLXByb2dyZXNzX19iYXIgbWRjLWxpbmVhci1wcm9ncmVzc19fcHJpbWFyeS1iYXJcIlxuICAgIHN0eWxlPXtPYmplY3QuZW50cmllcyhwcmltYXJ5QmFyU3R5bGVzKVxuICAgICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgICAuam9pbignICcpfVxuICA+XG4gICAgPHNwYW4gY2xhc3M9XCJtZGMtbGluZWFyLXByb2dyZXNzX19iYXItaW5uZXJcIiAvPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1kYy1saW5lYXItcHJvZ3Jlc3NfX2JhciBtZGMtbGluZWFyLXByb2dyZXNzX19zZWNvbmRhcnktYmFyXCI+XG4gICAgPHNwYW4gY2xhc3M9XCJtZGMtbGluZWFyLXByb2dyZXNzX19iYXItaW5uZXJcIiAvPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENMaW5lYXJQcm9ncmVzc0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvbGluZWFyLXByb2dyZXNzJztcbiAgaW1wb3J0IHsgb25Nb3VudCwgZ2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCBzdHlsZSA9ICcnO1xuICBleHBvcnQgbGV0IGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjbG9zZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBwcm9ncmVzcyA9IDA7XG4gIGV4cG9ydCBsZXQgYnVmZmVyID0gbnVsbDtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgaW50ZXJuYWxDbGFzc2VzID0ge307XG4gIGxldCBpbnRlcm5hbEF0dHJzID0ge307XG4gIGxldCBpbnRlcm5hbFN0eWxlcyA9IHt9O1xuICBsZXQgYnVmZmVyQmFyU3R5bGVzID0ge307XG4gIGxldCBwcmltYXJ5QmFyU3R5bGVzID0ge307XG4gIGxldCBjb250ZXh0ID0gZ2V0Q29udGV4dCgnU01VSTpsaW5lYXItcHJvZ3Jlc3M6Y29udGV4dCcpO1xuICBsZXQgY2xvc2VkU3RvcmUgPSBnZXRDb250ZXh0KCdTTVVJOmxpbmVhci1wcm9ncmVzczpjbG9zZWQnKTtcblxuICAkOiBpZiAoY2xvc2VkU3RvcmUpIHtcbiAgICAkY2xvc2VkU3RvcmUgPSBjbG9zZWQ7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuaXNEZXRlcm1pbmF0ZSgpICE9PSAhaW5kZXRlcm1pbmF0ZSkge1xuICAgIGluc3RhbmNlLnNldERldGVybWluYXRlKCFpbmRldGVybWluYXRlKTtcbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5nZXRQcm9ncmVzcygpICE9PSBwcm9ncmVzcykge1xuICAgIGluc3RhbmNlLnNldFByb2dyZXNzKHByb2dyZXNzKTtcbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSkge1xuICAgIGlmIChidWZmZXIgPT0gbnVsbCkge1xuICAgICAgaW5zdGFuY2Uuc2V0QnVmZmVyKDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5zZXRCdWZmZXIoYnVmZmVyKTtcbiAgICB9XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UpIHtcbiAgICBpZiAoY2xvc2VkKSB7XG4gICAgICBpbnN0YW5jZS5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDTGluZWFyUHJvZ3Jlc3NGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzLFxuICAgICAgZm9yY2VMYXlvdXQ6ICgpID0+IHtcbiAgICAgICAgZ2V0RWxlbWVudCgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgfSxcbiAgICAgIHNldEJ1ZmZlckJhclN0eWxlOiBhZGRCdWZmZXJCYXJTdHlsZSxcbiAgICAgIHNldFByaW1hcnlCYXJTdHlsZTogYWRkUHJpbWFyeUJhclN0eWxlLFxuICAgICAgaGFzQ2xhc3MsXG4gICAgICByZW1vdmVBdHRyaWJ1dGU6IHJlbW92ZUF0dHIsXG4gICAgICByZW1vdmVDbGFzcyxcbiAgICAgIHNldEF0dHJpYnV0ZTogYWRkQXR0cixcbiAgICAgIHNldFN0eWxlOiBhZGRTdHlsZSxcbiAgICAgIGF0dGFjaFJlc2l6ZU9ic2VydmVyOiAoY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgUk8gPSB3aW5kb3cuUmVzaXplT2JzZXJ2ZXI7XG4gICAgICAgIGlmIChSTykge1xuICAgICAgICAgIGNvbnN0IHJvID0gbmV3IFJPKGNhbGxiYWNrKTtcbiAgICAgICAgICByby5vYnNlcnZlKGdldEVsZW1lbnQoKSk7XG4gICAgICAgICAgcmV0dXJuIHJvO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9LFxuICAgICAgZ2V0V2lkdGg6ICgpID0+IGdldEVsZW1lbnQoKS5vZmZzZXRXaWR0aCxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXNcbiAgICAgID8gaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV1cbiAgICAgIDogZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoaW50ZXJuYWxBdHRyc1tuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgIGludGVybmFsQXR0cnNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBdHRyKG5hbWUpIHtcbiAgICBpZiAoIShuYW1lIGluIGludGVybmFsQXR0cnMpIHx8IGludGVybmFsQXR0cnNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgaW50ZXJuYWxBdHRyc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRTdHlsZShuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpbnRlcm5hbFN0eWxlc1tuYW1lXSAhPSB2YWx1ZSkge1xuICAgICAgaWYgKHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBpbnRlcm5hbFN0eWxlc1tuYW1lXTtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXMgPSBpbnRlcm5hbFN0eWxlcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludGVybmFsU3R5bGVzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkQnVmZmVyQmFyU3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoYnVmZmVyQmFyU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGJ1ZmZlckJhclN0eWxlc1tuYW1lXTtcbiAgICAgICAgYnVmZmVyQmFyU3R5bGVzID0gYnVmZmVyQmFyU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVmZmVyQmFyU3R5bGVzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gYWRkUHJpbWFyeUJhclN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHByaW1hcnlCYXJTdHlsZXNbbmFtZV0gIT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgcHJpbWFyeUJhclN0eWxlc1tuYW1lXTtcbiAgICAgICAgcHJpbWFyeUJhclN0eWxlcyA9IHByaW1hcnlCYXJTdHlsZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmltYXJ5QmFyU3R5bGVzW25hbWVdID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbInBlcmNlbnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRixRQUFRLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRyxJQUFJLE9BQU8sYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUMvQixD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
