import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, $ as assign, ag as validate_each_argument, W as compute_rest_props, v as validate_slots, Y as get_current_component, ah as onMount, a0 as exclude_internal_props, p as element, N as svg_element, o as space, x as claim_element, y as children, u as detach_dev, w as claim_space, E as attr_dev, D as add_location, F as insert_dev, G as append_dev, ai as set_svg_attributes, a9 as set_attributes, aa as action_destroyer, a2 as get_spread_update, ab as is_function, O as noop, aj as destroy_each, ac as run_all, a6 as binding_callbacks, _ as onDestroy, ak as bind, q as create_component, A as claim_component, B as set_style, H as mount_component, J as transition_in, K as transition_out, M as destroy_component, t as text, z as claim_text, al as add_flush_callback, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { C as Checkbox } from './Checkbox.52871e38.js';
import { F as FormField } from './FormField.2971fa15.js';
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
/**
 * CSS class names used in component.
 */
var cssClasses = {
    INDETERMINATE_CLASS: 'mdc-circular-progress--indeterminate',
    CLOSED_CLASS: 'mdc-circular-progress--closed',
};
/**
 * Attributes and selectors used in component.
 */
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    ARIA_VALUENOW: 'aria-valuenow',
    DETERMINATE_CIRCLE_SELECTOR: '.mdc-circular-progress__determinate-circle',
    RADIUS: 'r',
    STROKE_DASHOFFSET: 'stroke-dashoffset',
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
var MDCCircularProgressFoundation = /** @class */ (function (_super) {
    __extends(MDCCircularProgressFoundation, _super);
    function MDCCircularProgressFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCCircularProgressFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCCircularProgressFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCircularProgressFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCCircularProgressFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                getDeterminateCircleAttribute: function () { return null; },
                hasClass: function () { return false; },
                removeClass: function () { return undefined; },
                removeAttribute: function () { return undefined; },
                setAttribute: function () { return undefined; },
                setDeterminateCircleAttribute: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCCircularProgressFoundation.prototype.init = function () {
        this.closed = this.adapter.hasClass(cssClasses.CLOSED_CLASS);
        this.determinate = !this.adapter.hasClass(cssClasses.INDETERMINATE_CLASS);
        this.progress = 0;
        if (this.determinate) {
            this.adapter.setAttribute(strings.ARIA_VALUENOW, this.progress.toString());
        }
        this.radius =
            Number(this.adapter.getDeterminateCircleAttribute(strings.RADIUS));
    };
    /**
     * Sets whether the progress indicator is in determinate mode.
     * @param determinate Whether the indicator should be determinate.
     */
    MDCCircularProgressFoundation.prototype.setDeterminate = function (determinate) {
        this.determinate = determinate;
        if (this.determinate) {
            this.adapter.removeClass(cssClasses.INDETERMINATE_CLASS);
            this.setProgress(this.progress);
        }
        else {
            this.adapter.addClass(cssClasses.INDETERMINATE_CLASS);
            this.adapter.removeAttribute(strings.ARIA_VALUENOW);
        }
    };
    MDCCircularProgressFoundation.prototype.isDeterminate = function () {
        return this.determinate;
    };
    /**
     * Sets the current progress value. In indeterminate mode, this has no
     * visual effect but will be reflected if the indicator is switched to
     * determinate mode.
     * @param value The current progress value, which must be between 0 and 1.
     */
    MDCCircularProgressFoundation.prototype.setProgress = function (value) {
        this.progress = value;
        if (this.determinate) {
            var unfilledArcLength = (1 - this.progress) * (2 * Math.PI * this.radius);
            this.adapter.setDeterminateCircleAttribute(strings.STROKE_DASHOFFSET, "" + unfilledArcLength);
            this.adapter.setAttribute(strings.ARIA_VALUENOW, this.progress.toString());
        }
    };
    MDCCircularProgressFoundation.prototype.getProgress = function () {
        return this.progress;
    };
    /**
     * Shows the progress indicator.
     */
    MDCCircularProgressFoundation.prototype.open = function () {
        this.closed = false;
        this.adapter.removeClass(cssClasses.CLOSED_CLASS);
        this.adapter.removeAttribute(strings.ARIA_HIDDEN);
    };
    /**
     * Hides the progress indicator
     */
    MDCCircularProgressFoundation.prototype.close = function () {
        this.closed = true;
        this.adapter.addClass(cssClasses.CLOSED_CLASS);
        this.adapter.setAttribute(strings.ARIA_HIDDEN, 'true');
    };
    /**
     * @return Returns whether the progress indicator is hidden.
     */
    MDCCircularProgressFoundation.prototype.isClosed = function () {
        return this.closed;
    };
    return MDCCircularProgressFoundation;
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

/* packages/circular-progress/CircularProgress.svelte generated by Svelte v3.37.0 */

const file$5 = "packages/circular-progress/CircularProgress.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[24] = list[i];
	return child_ctx;
}

// (46:4) {#each fourColor ? [1, 2, 3, 4] : [1] as color}
function create_each_block(ctx) {
	let div3;
	let div0;
	let svg0;
	let circle0;
	let t0;
	let div1;
	let svg1;
	let circle1;
	let t1;
	let div2;
	let svg2;
	let circle2;
	let t2;
	let div3_class_value;

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			svg0 = svg_element("svg");
			circle0 = svg_element("circle");
			t0 = space();
			div1 = element("div");
			svg1 = svg_element("svg");
			circle1 = svg_element("circle");
			t1 = space();
			div2 = element("div");
			svg2 = svg_element("svg");
			circle2 = svg_element("circle");
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			svg0 = claim_element(div0_nodes, "svg", { class: true, viewBox: true, xmlns: true }, 1);
			var svg0_nodes = children(svg0);

			circle0 = claim_element(
				svg0_nodes,
				"circle",
				{
					cx: true,
					cy: true,
					r: true,
					"stroke-dasharray": true,
					"stroke-dashoffset": true,
					"stroke-width": true
				},
				1
			);

			children(circle0).forEach(detach_dev);
			svg0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			svg1 = claim_element(div1_nodes, "svg", { class: true, viewBox: true, xmlns: true }, 1);
			var svg1_nodes = children(svg1);

			circle1 = claim_element(
				svg1_nodes,
				"circle",
				{
					cx: true,
					cy: true,
					r: true,
					"stroke-dasharray": true,
					"stroke-dashoffset": true,
					"stroke-width": true
				},
				1
			);

			children(circle1).forEach(detach_dev);
			svg1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			svg2 = claim_element(div2_nodes, "svg", { class: true, viewBox: true, xmlns: true }, 1);
			var svg2_nodes = children(svg2);

			circle2 = claim_element(
				svg2_nodes,
				"circle",
				{
					cx: true,
					cy: true,
					r: true,
					"stroke-dasharray": true,
					"stroke-dashoffset": true,
					"stroke-width": true
				},
				1
			);

			children(circle2).forEach(detach_dev);
			svg2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(circle0, "cx", "24");
			attr_dev(circle0, "cy", "24");
			attr_dev(circle0, "r", "18");
			attr_dev(circle0, "stroke-dasharray", "113.097");
			attr_dev(circle0, "stroke-dashoffset", "56.549");
			attr_dev(circle0, "stroke-width", "4");
			add_location(circle0, file$5, 61, 12, 1759);
			attr_dev(svg0, "class", "mdc-circular-progress__indeterminate-circle-graphic");
			attr_dev(svg0, "viewBox", "0 0 48 48");
			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg0, file$5, 56, 10, 1579);
			attr_dev(div0, "class", "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left");
			add_location(div0, file$5, 53, 8, 1463);
			attr_dev(circle1, "cx", "24");
			attr_dev(circle1, "cy", "24");
			attr_dev(circle1, "r", "18");
			attr_dev(circle1, "stroke-dasharray", "113.097");
			attr_dev(circle1, "stroke-dashoffset", "56.549");
			attr_dev(circle1, "stroke-width", "3.2");
			add_location(circle1, file$5, 77, 12, 2237);
			attr_dev(svg1, "class", "mdc-circular-progress__indeterminate-circle-graphic");
			attr_dev(svg1, "viewBox", "0 0 48 48");
			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg1, file$5, 72, 10, 2057);
			attr_dev(div1, "class", "mdc-circular-progress__gap-patch");
			add_location(div1, file$5, 71, 8, 2000);
			attr_dev(circle2, "cx", "24");
			attr_dev(circle2, "cy", "24");
			attr_dev(circle2, "r", "18");
			attr_dev(circle2, "stroke-dasharray", "113.097");
			attr_dev(circle2, "stroke-dashoffset", "56.549");
			attr_dev(circle2, "stroke-width", "4");
			add_location(circle2, file$5, 95, 12, 2777);
			attr_dev(svg2, "class", "mdc-circular-progress__indeterminate-circle-graphic");
			attr_dev(svg2, "viewBox", "0 0 48 48");
			attr_dev(svg2, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg2, file$5, 90, 10, 2597);
			attr_dev(div2, "class", "mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right");
			add_location(div2, file$5, 87, 8, 2480);

			attr_dev(div3, "class", div3_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-circular-progress__spinner-layer": true,
				["mdc-circular-progress__color-" + /*color*/ ctx[24]]: /*fourColor*/ ctx[5]
			}));

			add_location(div3, file$5, 46, 6, 1255);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			append_dev(div0, svg0);
			append_dev(svg0, circle0);
			append_dev(div3, t0);
			append_dev(div3, div1);
			append_dev(div1, svg1);
			append_dev(svg1, circle1);
			append_dev(div3, t1);
			append_dev(div3, div2);
			append_dev(div2, svg2);
			append_dev(svg2, circle2);
			append_dev(div3, t2);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*className, fourColor*/ 34 && div3_class_value !== (div3_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-circular-progress__spinner-layer": true,
				["mdc-circular-progress__color-" + /*color*/ ctx[24]]: /*fourColor*/ ctx[5]
			}))) {
				attr_dev(div3, "class", div3_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(46:4) {#each fourColor ? [1, 2, 3, 4] : [1] as color}",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let div2;
	let div0;
	let svg;
	let circle0;
	let circle1;
	let t;
	let div1;
	let div2_class_value;
	let div2_aria_valuenow_value;
	let useActions_action;
	let mounted;
	let dispose;

	let circle1_levels = [
		{
			class: "mdc-circular-progress__determinate-circle"
		},
		{ cx: "24" },
		{ cy: "24" },
		{ r: "18" },
		{ "stroke-dasharray": "113.097" },
		{ "stroke-dashoffset": "113.097" },
		{ "stroke-width": "4" },
		/*determinateCircleAttrs*/ ctx[9]
	];

	let circle1_data = {};

	for (let i = 0; i < circle1_levels.length; i += 1) {
		circle1_data = assign(circle1_data, circle1_levels[i]);
	}

	let each_value = /*fourColor*/ ctx[5] ? [1, 2, 3, 4] : [1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let div2_levels = [
		{
			class: div2_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-circular-progress": true,
				"mdc-circular-progress--indeterminate": /*indeterminate*/ ctx[2],
				"mdc-circular-progress--closed": /*closed*/ ctx[3],
				.../*internalClasses*/ ctx[7]
			})
		},
		{ role: "progressbar" },
		{ "aria-valuemin": "0" },
		{ "aria-valuemax": "1" },
		{
			"aria-valuenow": div2_aria_valuenow_value = /*indeterminate*/ ctx[2]
			? null
			: `${/*progress*/ ctx[4].toLocaleString()}`
		},
		/*internalAttrs*/ ctx[8],
		/*$$restProps*/ ctx[12]
	];

	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign(div2_data, div2_levels[i]);
	}

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			svg = svg_element("svg");
			circle0 = svg_element("circle");
			circle1 = svg_element("circle");
			t = space();
			div1 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", {
				class: true,
				role: true,
				"aria-valuemin": true,
				"aria-valuemax": true,
				"aria-valuenow": true
			});

			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			svg = claim_element(div0_nodes, "svg", { class: true, viewBox: true, xmlns: true }, 1);
			var svg_nodes = children(svg);

			circle0 = claim_element(
				svg_nodes,
				"circle",
				{
					class: true,
					cx: true,
					cy: true,
					r: true,
					"stroke-width": true
				},
				1
			);

			children(circle0).forEach(detach_dev);

			circle1 = claim_element(
				svg_nodes,
				"circle",
				{
					class: true,
					cx: true,
					cy: true,
					r: true,
					"stroke-dasharray": true,
					"stroke-dashoffset": true,
					"stroke-width": true
				},
				1
			);

			children(circle1).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div1_nodes);
			}

			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(circle0, "class", "mdc-circular-progress__determinate-track");
			attr_dev(circle0, "cx", "24");
			attr_dev(circle0, "cy", "24");
			attr_dev(circle0, "r", "18");
			attr_dev(circle0, "stroke-width", "4");
			add_location(circle0, file$5, 24, 6, 670);
			set_svg_attributes(circle1, circle1_data);
			add_location(circle1, file$5, 31, 6, 822);
			attr_dev(svg, "class", "mdc-circular-progress__determinate-circle-graphic");
			attr_dev(svg, "viewBox", "0 0 48 48");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg, file$5, 19, 4, 522);
			attr_dev(div0, "class", "mdc-circular-progress__determinate-container");
			add_location(div0, file$5, 18, 2, 459);
			attr_dev(div1, "class", "mdc-circular-progress__indeterminate-container");
			add_location(div1, file$5, 44, 2, 1136);
			set_attributes(div2, div2_data);
			add_location(div2, file$5, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, svg);
			append_dev(svg, circle0);
			append_dev(svg, circle1);
			/*circle1_binding*/ ctx[15](circle1);
			append_dev(div2, t);
			append_dev(div2, div1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			/*div2_binding*/ ctx[16](div2);

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div2, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[11].call(null, div2))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			set_svg_attributes(circle1, circle1_data = get_spread_update(circle1_levels, [
				{
					class: "mdc-circular-progress__determinate-circle"
				},
				{ cx: "24" },
				{ cy: "24" },
				{ r: "18" },
				{ "stroke-dasharray": "113.097" },
				{ "stroke-dashoffset": "113.097" },
				{ "stroke-width": "4" },
				dirty & /*determinateCircleAttrs*/ 512 && /*determinateCircleAttrs*/ ctx[9]
			]));

			if (dirty & /*classMap, className, fourColor*/ 34) {
				each_value = /*fourColor*/ ctx[5] ? [1, 2, 3, 4] : [1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div1, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			set_attributes(div2, div2_data = get_spread_update(div2_levels, [
				dirty & /*className, indeterminate, closed, internalClasses*/ 142 && div2_class_value !== (div2_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-circular-progress": true,
					"mdc-circular-progress--indeterminate": /*indeterminate*/ ctx[2],
					"mdc-circular-progress--closed": /*closed*/ ctx[3],
					.../*internalClasses*/ ctx[7]
				})) && { class: div2_class_value },
				{ role: "progressbar" },
				{ "aria-valuemin": "0" },
				{ "aria-valuemax": "1" },
				dirty & /*indeterminate, progress*/ 20 && div2_aria_valuenow_value !== (div2_aria_valuenow_value = /*indeterminate*/ ctx[2]
				? null
				: `${/*progress*/ ctx[4].toLocaleString()}`) && {
					"aria-valuenow": div2_aria_valuenow_value
				},
				dirty & /*internalAttrs*/ 256 && /*internalAttrs*/ ctx[8],
				dirty & /*$$restProps*/ 4096 && /*$$restProps*/ ctx[12]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			/*circle1_binding*/ ctx[15](null);
			destroy_each(each_blocks, detaching);
			/*div2_binding*/ ctx[16](null);
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

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","indeterminate","closed","progress","fourColor","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CircularProgress", slots, []);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { indeterminate = false } = $$props;
	let { closed = false } = $$props;
	let { progress = 0 } = $$props;
	let { fourColor = false } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalAttrs = {};
	let determinateCircleAttrs = {};
	let determinateCircle;

	onMount(() => {
		$$invalidate(14, instance = new MDCCircularProgressFoundation({
				addClass,
				getDeterminateCircleAttribute: getDeterminateCircleAttr,
				hasClass,
				removeClass,
				removeAttribute: removeAttr,
				setAttribute: addAttr,
				setDeterminateCircleAttribute: addDeterminateCircleAttr
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
			$$invalidate(7, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(7, internalClasses[className] = false, internalClasses);
		}
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(8, internalAttrs[name] = value, internalAttrs);
		}
	}

	function removeAttr(name) {
		if (!(name in internalAttrs) || internalAttrs[name] != null) {
			$$invalidate(8, internalAttrs[name] = undefined, internalAttrs);
		}
	}

	function getDeterminateCircleAttr(name) {
		return name in determinateCircleAttrs
		? determinateCircleAttrs[name]
		: determinateCircle.getAttribute(name);
	}

	function addDeterminateCircleAttr(name, value) {
		if (determinateCircleAttrs[name] !== value) {
			$$invalidate(9, determinateCircleAttrs[name] = value, determinateCircleAttrs);
		}
	}

	function getElement() {
		return element;
	}

	function circle1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			determinateCircle = $$value;
			$$invalidate(10, determinateCircle);
		});
	}

	function div2_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(6, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("indeterminate" in $$new_props) $$invalidate(2, indeterminate = $$new_props.indeterminate);
		if ("closed" in $$new_props) $$invalidate(3, closed = $$new_props.closed);
		if ("progress" in $$new_props) $$invalidate(4, progress = $$new_props.progress);
		if ("fourColor" in $$new_props) $$invalidate(5, fourColor = $$new_props.fourColor);
	};

	$$self.$capture_state = () => ({
		MDCCircularProgressFoundation,
		onMount,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		forwardEvents,
		use,
		className,
		indeterminate,
		closed,
		progress,
		fourColor,
		element,
		instance,
		internalClasses,
		internalAttrs,
		determinateCircleAttrs,
		determinateCircle,
		hasClass,
		addClass,
		removeClass,
		addAttr,
		removeAttr,
		getDeterminateCircleAttr,
		addDeterminateCircleAttr,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("indeterminate" in $$props) $$invalidate(2, indeterminate = $$new_props.indeterminate);
		if ("closed" in $$props) $$invalidate(3, closed = $$new_props.closed);
		if ("progress" in $$props) $$invalidate(4, progress = $$new_props.progress);
		if ("fourColor" in $$props) $$invalidate(5, fourColor = $$new_props.fourColor);
		if ("element" in $$props) $$invalidate(6, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(14, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(7, internalClasses = $$new_props.internalClasses);
		if ("internalAttrs" in $$props) $$invalidate(8, internalAttrs = $$new_props.internalAttrs);
		if ("determinateCircleAttrs" in $$props) $$invalidate(9, determinateCircleAttrs = $$new_props.determinateCircleAttrs);
		if ("determinateCircle" in $$props) $$invalidate(10, determinateCircle = $$new_props.determinateCircle);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*instance, indeterminate*/ 16388) {
			if (instance && instance.isDeterminate() !== !indeterminate) {
				instance.setDeterminate(!indeterminate);
			}
		}

		if ($$self.$$.dirty & /*instance, progress*/ 16400) {
			if (instance && instance.getProgress() !== progress) {
				instance.setProgress(progress);
			}
		}

		if ($$self.$$.dirty & /*instance, closed*/ 16392) {
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
		indeterminate,
		closed,
		progress,
		fourColor,
		element,
		internalClasses,
		internalAttrs,
		determinateCircleAttrs,
		determinateCircle,
		forwardEvents,
		$$restProps,
		getElement,
		instance,
		circle1_binding,
		div2_binding
	];
}

class CircularProgress extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1, create_fragment$5, safe_not_equal, {
			use: 0,
			class: 1,
			indeterminate: 2,
			closed: 3,
			progress: 4,
			fourColor: 5,
			getElement: 13
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CircularProgress",
			options,
			id: create_fragment$5.name
		});
	}

	get use() {
		throw new Error("<CircularProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<CircularProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<CircularProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<CircularProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get indeterminate() {
		throw new Error("<CircularProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set indeterminate(value) {
		throw new Error("<CircularProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get closed() {
		throw new Error("<CircularProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set closed(value) {
		throw new Error("<CircularProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get progress() {
		throw new Error("<CircularProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set progress(value) {
		throw new Error("<CircularProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get fourColor() {
		throw new Error("<CircularProgress>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fourColor(value) {
		throw new Error("<CircularProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[13];
	}

	set getElement(value) {
		throw new Error("<CircularProgress>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/circular-progress/_Simple.svelte generated by Svelte v3.37.0 */
const file$4 = "src/routes/demo/circular-progress/_Simple.svelte";

// (7:0) <Button on:click={reset}>
function create_default_slot_1$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Reset");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Reset");
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
		source: "(7:0) <Button on:click={reset}>",
		ctx
	});

	return block;
}

// (9:0) <FormField>
function create_default_slot$1(ctx) {
	let checkbox;
	let updating_checked;
	let current;

	function checkbox_checked_binding(value) {
		/*checkbox_checked_binding*/ ctx[3](value);
	}

	let checkbox_props = {};

	if (/*closed*/ ctx[1] !== void 0) {
		checkbox_props.checked = /*closed*/ ctx[1];
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

			if (!updating_checked && dirty & /*closed*/ 2) {
				updating_checked = true;
				checkbox_changes.checked = /*closed*/ ctx[1];
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
		id: create_default_slot$1.name,
		type: "slot",
		source: "(9:0) <FormField>",
		ctx
	});

	return block;
}

// (11:2) 
function create_label_slot(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Closed");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { slot: true });
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Closed");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "slot", "label");
			add_location(span, file$4, 10, 2, 239);
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
		source: "(11:2) ",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let div;
	let circularprogress;
	let t0;
	let br;
	let t1;
	let button;
	let t2;
	let formfield;
	let current;

	circularprogress = new CircularProgress({
			props: {
				style: "height: 48px; width: 48px;",
				progress: /*progress*/ ctx[0],
				closed: /*closed*/ ctx[1]
			},
			$$inline: true
		});

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*reset*/ ctx[2]);

	formfield = new FormField({
			props: {
				$$slots: {
					label: [create_label_slot],
					default: [create_default_slot$1]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(circularprogress.$$.fragment);
			t0 = space();
			br = element("br");
			t1 = space();
			create_component(button.$$.fragment);
			t2 = space();
			create_component(formfield.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			claim_component(circularprogress.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			br = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(formfield.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "display", "flex");
			set_style(div, "justify-content", "center");
			add_location(div, file$4, 0, 0, 0);
			add_location(br, file$4, 4, 0, 139);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(circularprogress, div, null);
			insert_dev(target, t0, anchor);
			insert_dev(target, br, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(formfield, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const circularprogress_changes = {};
			if (dirty & /*progress*/ 1) circularprogress_changes.progress = /*progress*/ ctx[0];
			if (dirty & /*closed*/ 2) circularprogress_changes.closed = /*closed*/ ctx[1];
			circularprogress.$set(circularprogress_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 32) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
			const formfield_changes = {};

			if (dirty & /*$$scope, closed*/ 34) {
				formfield_changes.$$scope = { dirty, ctx };
			}

			formfield.$set(formfield_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(circularprogress.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			transition_in(formfield.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(circularprogress.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			transition_out(formfield.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(circularprogress);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(br);
			if (detaching) detach_dev(t1);
			destroy_component(button, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(formfield, detaching);
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
	let progress = 0;
	let closed = false;
	let timer;
	onMount(reset);

	onDestroy(() => {
		clearInterval(timer);
	});

	function reset() {
		$$invalidate(0, progress = 0);
		$$invalidate(1, closed = false);
		clearInterval(timer);

		timer = setInterval(
			() => {
				$$invalidate(0, progress += 0.01);

				if (progress >= 1) {
					$$invalidate(0, progress = 1);
					$$invalidate(1, closed = true);
					clearInterval(timer);
				}
			},
			100
		);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Simple> was created with unknown prop '${key}'`);
	});

	function checkbox_checked_binding(value) {
		closed = value;
		$$invalidate(1, closed);
	}

	$$self.$capture_state = () => ({
		onMount,
		onDestroy,
		CircularProgress,
		Checkbox,
		FormField,
		Button: Button_1,
		progress,
		closed,
		timer,
		reset
	});

	$$self.$inject_state = $$props => {
		if ("progress" in $$props) $$invalidate(0, progress = $$props.progress);
		if ("closed" in $$props) $$invalidate(1, closed = $$props.closed);
		if ("timer" in $$props) timer = $$props.timer;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [progress, closed, reset, checkbox_checked_binding];
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

/* src/routes/demo/circular-progress/_Indeterminate.svelte generated by Svelte v3.37.0 */
const file$3 = "src/routes/demo/circular-progress/_Indeterminate.svelte";

function create_fragment$3(ctx) {
	let div;
	let circularprogress;
	let current;

	circularprogress = new CircularProgress({
			props: {
				style: "height: 32px; width: 32px;",
				indeterminate: true
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(circularprogress.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			claim_component(circularprogress.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "display", "flex");
			set_style(div, "justify-content", "center");
			add_location(div, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(circularprogress, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(circularprogress.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(circularprogress.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(circularprogress);
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
	validate_slots("Indeterminate", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Indeterminate> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ CircularProgress });
	return [];
}

class Indeterminate extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Indeterminate",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/circular-progress/_FourColor.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/circular-progress/_FourColor.svelte";

function create_fragment$2(ctx) {
	let div;
	let circularprogress;
	let current;

	circularprogress = new CircularProgress({
			props: {
				class: "my-four-colors",
				style: "height: 32px; width: 32px;",
				indeterminate: true,
				fourColor: true
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(circularprogress.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			claim_component(circularprogress.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "display", "flex");
			set_style(div, "justify-content", "center");
			add_location(div, file$2, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(circularprogress, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(circularprogress.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(circularprogress.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(circularprogress);
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
	validate_slots("FourColor", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FourColor> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ CircularProgress });
	return [];
}

class FourColor extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FourColor",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/circular-progress/_Colored.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/circular-progress/_Colored.svelte";

function create_fragment$1(ctx) {
	let div;
	let circularprogress;
	let current;

	circularprogress = new CircularProgress({
			props: {
				class: "my-colored-circle",
				style: "height: 32px; width: 32px;",
				progress: 0.3
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(circularprogress.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			claim_component(circularprogress.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "display", "flex");
			set_style(div, "justify-content", "center");
			add_location(div, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(circularprogress, div, null);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(circularprogress.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(circularprogress.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(circularprogress);
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
	validate_slots("Colored", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Colored> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ CircularProgress });
	return [];
}

class Colored extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Colored",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/circular-progress/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/circular-progress/index.svelte";

// (12:2) <Demo     component={Indeterminate}     file="circular-progress/_Indeterminate.svelte"   >
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Indeterminate");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Indeterminate");
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
		source: "(12:2) <Demo     component={Indeterminate}     file=\\\"circular-progress/_Indeterminate.svelte\\\"   >",
		ctx
	});

	return block;
}

// (19:2) <Demo     component={FourColor}     files={[       'circular-progress/_FourColor.svelte',       'circular-progress/_FourColor.scss',     ]}   >
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Four Color");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Four Color");
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
		source: "(19:2) <Demo     component={FourColor}     files={[       'circular-progress/_FourColor.svelte',       'circular-progress/_FourColor.scss',     ]}   >",
		ctx
	});

	return block;
}

// (29:2) <Demo     component={Colored}     files={[       'circular-progress/_Colored.svelte',       'circular-progress/_Colored.scss',     ]}   >
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Colored (using Sass mixins)");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Colored (using Sass mixins)");
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
		source: "(29:2) <Demo     component={Colored}     files={[       'circular-progress/_Colored.svelte',       'circular-progress/_Colored.scss',     ]}   >",
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
	let current;

	demo0 = new Demo({
			props: {
				component: Simple,
				file: "circular-progress/_Simple.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: Indeterminate,
				file: "circular-progress/_Indeterminate.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: FourColor,
				files: [
					"circular-progress/_FourColor.svelte",
					"circular-progress/_FourColor.scss"
				],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: Colored,
				files: ["circular-progress/_Colored.svelte", "circular-progress/_Colored.scss"],
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
			t1 = text("Circular Progress");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/circular-progress");
			t4 = space();
			create_component(demo0.$$.fragment);
			t5 = space();
			create_component(demo1.$$.fragment);
			t6 = space();
			create_component(demo2.$$.fragment);
			t7 = space();
			create_component(demo3.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-109jd1s\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Circular Progress");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/circular-progress");
			pre_nodes.forEach(detach_dev);
			t4 = claim_space(section_nodes);
			claim_component(demo0.$$.fragment, section_nodes);
			t5 = claim_space(section_nodes);
			claim_component(demo1.$$.fragment, section_nodes);
			t6 = claim_space(section_nodes);
			claim_component(demo2.$$.fragment, section_nodes);
			t7 = claim_space(section_nodes);
			claim_component(demo3.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Circular Progress - SMUI";
			add_location(h2, file, 5, 2, 84);
			attr_dev(pre, "class", "demo-spaced");
			add_location(pre, file, 7, 2, 114);
			add_location(section, file, 4, 0, 72);
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
	validate_slots("Circular_progress", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Circular_progress> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Simple,
		Indeterminate,
		FourColor,
		Colored
	});

	return [];
}

class Circular_progress extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Circular_progress",
			options,
			id: create_fragment.name
		});
	}
}

export default Circular_progress;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMzE2OTkwMDcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL2NpcmN1bGFyLXByb2dyZXNzL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaXJjdWxhci1wcm9ncmVzcy9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NpcmN1bGFyLXByb2dyZXNzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2lyY3VsYXItcHJvZ3Jlc3MvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvY2lyY3VsYXItcHJvZ3Jlc3Mvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaXJjdWxhci1wcm9ncmVzcy9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvY2lyY3VsYXItcHJvZ3Jlc3Mvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NpcmN1bGFyLXByb2dyZXNzL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vY2xhc3NNYXAuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaXJjdWxhci1wcm9ncmVzcy9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaXJjdWxhci1wcm9ncmVzcy9DaXJjdWxhclByb2dyZXNzLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9jaXJjdWxhci1wcm9ncmVzcy9fU2ltcGxlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9jaXJjdWxhci1wcm9ncmVzcy9fQ29sb3JlZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vY2lyY3VsYXItcHJvZ3Jlc3MvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIENTUyBjbGFzcyBuYW1lcyB1c2VkIGluIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIElOREVURVJNSU5BVEVfQ0xBU1M6ICdtZGMtY2lyY3VsYXItcHJvZ3Jlc3MtLWluZGV0ZXJtaW5hdGUnLFxuICAgIENMT1NFRF9DTEFTUzogJ21kYy1jaXJjdWxhci1wcm9ncmVzcy0tY2xvc2VkJyxcbn07XG4vKipcbiAqIEF0dHJpYnV0ZXMgYW5kIHNlbGVjdG9ycyB1c2VkIGluIGNvbXBvbmVudC5cbiAqL1xuZXhwb3J0IHZhciBzdHJpbmdzID0ge1xuICAgIEFSSUFfSElEREVOOiAnYXJpYS1oaWRkZW4nLFxuICAgIEFSSUFfVkFMVUVOT1c6ICdhcmlhLXZhbHVlbm93JyxcbiAgICBERVRFUk1JTkFURV9DSVJDTEVfU0VMRUNUT1I6ICcubWRjLWNpcmN1bGFyLXByb2dyZXNzX19kZXRlcm1pbmF0ZS1jaXJjbGUnLFxuICAgIFJBRElVUzogJ3InLFxuICAgIFNUUk9LRV9EQVNIT0ZGU0VUOiAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDQ2lyY3VsYXJQcm9ncmVzc0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ0NpcmN1bGFyUHJvZ3Jlc3NGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ0NpcmN1bGFyUHJvZ3Jlc3NGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENDaXJjdWxhclByb2dyZXNzRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2lyY3VsYXJQcm9ncmVzc0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2lyY3VsYXJQcm9ncmVzc0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDQ2lyY3VsYXJQcm9ncmVzc0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXREZXRlcm1pbmF0ZUNpcmNsZUF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgICAgICAgICBoYXNDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gZmFsc2U7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXREZXRlcm1pbmF0ZUNpcmNsZUF0dHJpYnV0ZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0NpcmN1bGFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLkNMT1NFRF9DTEFTUyk7XG4gICAgICAgIHRoaXMuZGV0ZXJtaW5hdGUgPSAhdGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuSU5ERVRFUk1JTkFURV9DTEFTUyk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSAwO1xuICAgICAgICBpZiAodGhpcy5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfVkFMVUVOT1csIHRoaXMucHJvZ3Jlc3MudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yYWRpdXMgPVxuICAgICAgICAgICAgTnVtYmVyKHRoaXMuYWRhcHRlci5nZXREZXRlcm1pbmF0ZUNpcmNsZUF0dHJpYnV0ZShzdHJpbmdzLlJBRElVUykpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB3aGV0aGVyIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IgaXMgaW4gZGV0ZXJtaW5hdGUgbW9kZS5cbiAgICAgKiBAcGFyYW0gZGV0ZXJtaW5hdGUgV2hldGhlciB0aGUgaW5kaWNhdG9yIHNob3VsZCBiZSBkZXRlcm1pbmF0ZS5cbiAgICAgKi9cbiAgICBNRENDaXJjdWxhclByb2dyZXNzRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGV0ZXJtaW5hdGUgPSBmdW5jdGlvbiAoZGV0ZXJtaW5hdGUpIHtcbiAgICAgICAgdGhpcy5kZXRlcm1pbmF0ZSA9IGRldGVybWluYXRlO1xuICAgICAgICBpZiAodGhpcy5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSU5ERVRFUk1JTkFURV9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzKHRoaXMucHJvZ3Jlc3MpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuSU5ERVRFUk1JTkFURV9DTEFTUyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQXR0cmlidXRlKHN0cmluZ3MuQVJJQV9WQUxVRU5PVyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0NpcmN1bGFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0RldGVybWluYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXRlcm1pbmF0ZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgcHJvZ3Jlc3MgdmFsdWUuIEluIGluZGV0ZXJtaW5hdGUgbW9kZSwgdGhpcyBoYXMgbm9cbiAgICAgKiB2aXN1YWwgZWZmZWN0IGJ1dCB3aWxsIGJlIHJlZmxlY3RlZCBpZiB0aGUgaW5kaWNhdG9yIGlzIHN3aXRjaGVkIHRvXG4gICAgICogZGV0ZXJtaW5hdGUgbW9kZS5cbiAgICAgKiBAcGFyYW0gdmFsdWUgVGhlIGN1cnJlbnQgcHJvZ3Jlc3MgdmFsdWUsIHdoaWNoIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAxLlxuICAgICAqL1xuICAgIE1EQ0NpcmN1bGFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRQcm9ncmVzcyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLnByb2dyZXNzID0gdmFsdWU7XG4gICAgICAgIGlmICh0aGlzLmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICB2YXIgdW5maWxsZWRBcmNMZW5ndGggPSAoMSAtIHRoaXMucHJvZ3Jlc3MpICogKDIgKiBNYXRoLlBJICogdGhpcy5yYWRpdXMpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldERldGVybWluYXRlQ2lyY2xlQXR0cmlidXRlKHN0cmluZ3MuU1RST0tFX0RBU0hPRkZTRVQsIFwiXCIgKyB1bmZpbGxlZEFyY0xlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cmlidXRlKHN0cmluZ3MuQVJJQV9WQUxVRU5PVywgdGhpcy5wcm9ncmVzcy50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDQ2lyY3VsYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmdldFByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9ncmVzcztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNob3dzIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IuXG4gICAgICovXG4gICAgTURDQ2lyY3VsYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkNMT1NFRF9DTEFTUyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX0hJRERFTik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgcHJvZ3Jlc3MgaW5kaWNhdG9yXG4gICAgICovXG4gICAgTURDQ2lyY3VsYXJQcm9ncmVzc0ZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhjc3NDbGFzc2VzLkNMT1NFRF9DTEFTUyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyaWJ1dGUoc3RyaW5ncy5BUklBX0hJRERFTiwgJ3RydWUnKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gUmV0dXJucyB3aGV0aGVyIHRoZSBwcm9ncmVzcyBpbmRpY2F0b3IgaXMgaGlkZGVuLlxuICAgICAqL1xuICAgIE1EQ0NpcmN1bGFyUHJvZ3Jlc3NGb3VuZGF0aW9uLnByb3RvdHlwZS5pc0Nsb3NlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2VkO1xuICAgIH07XG4gICAgcmV0dXJuIE1EQ0NpcmN1bGFyUHJvZ3Jlc3NGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENDaXJjdWxhclByb2dyZXNzRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NpcmN1bGFyUHJvZ3Jlc3NGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCJpbXBvcnQge1xuICBidWJibGUsXG4gIGxpc3RlbixcbiAgcHJldmVudF9kZWZhdWx0LFxuICBzdG9wX3Byb3BhZ2F0aW9uLFxufSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuXG4vLyBNYXRjaCBtb2RpZmllcnMgb24gRE9NIGV2ZW50cy5cbmNvbnN0IG9sZE1vZGlmaWVyUmVnZXggPSAvXlthLXpdKyg/OjooPzpwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb258cGFzc2l2ZXxub25wYXNzaXZlfGNhcHR1cmV8b25jZXxzZWxmKSkrJC87XG4vLyBNYXRjaCBtb2RpZmllcnMgb24gb3RoZXIgZXZlbnRzLlxuY29uc3QgbmV3TW9kaWZpZXJSZWdleCA9IC9eW14kXSsoPzpcXCQoPzpwcmV2ZW50RGVmYXVsdHxzdG9wUHJvcGFnYXRpb258cGFzc2l2ZXxub25wYXNzaXZlfGNhcHR1cmV8b25jZXxzZWxmKSkrJC87XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3J3YXJkRXZlbnRzQnVpbGRlcihjb21wb25lbnQpIHtcbiAgLy8gVGhpcyBpcyBvdXIgcHNldWRvICRvbiBmdW5jdGlvbi4gSXQgaXMgZGVmaW5lZCBvbiBjb21wb25lbnQgbW91bnQuXG4gIGxldCAkb247XG4gIC8vIFRoaXMgaXMgYSBsaXN0IG9mIGV2ZW50cyBib3VuZCBiZWZvcmUgbW91bnQuXG4gIGxldCBldmVudHMgPSBbXTtcbiAgLy8gVGhpcyBpcyB0aGUgb3JpZ2luYWwgY29tcG9uZW50ICRvbiBmdW5jdGlvbi5cbiAgY29uc3QgY29tcG9uZW50T24gPSBjb21wb25lbnQuJG9uO1xuXG4gIC8vIEFuZCB3ZSBvdmVycmlkZSB0aGUgJG9uIGZ1bmN0aW9uIHRvIGZvcndhcmQgYWxsIGJvdW5kIGV2ZW50cy5cbiAgY29tcG9uZW50LiRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgIGxldCBldmVudFR5cGUgPSBmdWxsRXZlbnRUeXBlO1xuICAgIGxldCBkZXN0cnVjdG9yID0gKCkgPT4ge307XG4gICAgaWYgKCRvbikge1xuICAgICAgLy8gVGhlIGV2ZW50IHdhcyBib3VuZCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgZGVzdHJ1Y3RvciA9ICRvbihldmVudFR5cGUsIGNhbGxiYWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGV2ZW50IHdhcyBib3VuZCBiZWZvcmUgbW91bnQgYnkgU3ZlbHRlLlxuICAgICAgZXZlbnRzLnB1c2goW2V2ZW50VHlwZSwgY2FsbGJhY2tdKTtcbiAgICB9XG4gICAgY29uc3Qgb2xkTW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChvbGRNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG5cbiAgICBpZiAob2xkTW9kaWZpZXJNYXRjaCAmJiBjb25zb2xlKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdFdmVudCBtb2RpZmllcnMgaW4gU01VSSBub3cgdXNlIFwiJFwiIGluc3RlYWQgb2YgXCI6XCIsIHNvIHRoYXQgYWxsIGV2ZW50cyBjYW4gYmUgYm91bmQgd2l0aCBtb2RpZmllcnMuIFBsZWFzZSB1cGRhdGUgeW91ciBldmVudCBiaW5kaW5nOiAnLFxuICAgICAgICBldmVudFR5cGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGlmaWVyTWF0Y2gpIHtcbiAgICAgIC8vIFJlbW92ZSBtb2RpZmllcnMgZnJvbSB0aGUgcmVhbCBldmVudC5cbiAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgfVxuXG4gICAgLy8gQ2FsbCB0aGUgb3JpZ2luYWwgJG9uIGZ1bmN0aW9uLlxuICAgIGNvbnN0IGNvbXBvbmVudERlc3RydWN0b3IgPSBjb21wb25lbnRPbi5jYWxsKFxuICAgICAgY29tcG9uZW50LFxuICAgICAgZXZlbnRUeXBlLFxuICAgICAgY2FsbGJhY2tcbiAgICApO1xuXG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICBkZXN0cnVjdG9yKCk7XG4gICAgICByZXR1cm4gY29tcG9uZW50RGVzdHJ1Y3RvciguLi5hcmdzKTtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIGZvcndhcmQoZSkge1xuICAgIC8vIEludGVybmFsbHkgYnViYmxlIHRoZSBldmVudCB1cCBmcm9tIFN2ZWx0ZSBjb21wb25lbnRzLlxuICAgIGJ1YmJsZShjb21wb25lbnQsIGUpO1xuICB9XG5cbiAgcmV0dXJuIChub2RlKSA9PiB7XG4gICAgY29uc3QgZGVzdHJ1Y3RvcnMgPSBbXTtcbiAgICBjb25zdCBmb3J3YXJkRGVzdHJ1Y3RvcnMgPSB7fTtcblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgcmVzcG9uc2libGUgZm9yIGZvcndhcmRpbmcgYWxsIGJvdW5kIGV2ZW50cy5cbiAgICAkb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICAgIGxldCBldmVudFR5cGUgPSBmdWxsRXZlbnRUeXBlO1xuICAgICAgbGV0IGhhbmRsZXIgPSBjYWxsYmFjaztcbiAgICAgIC8vIERPTSBhZGRFdmVudExpc3RlbmVyIG9wdGlvbnMgYXJndW1lbnQuXG4gICAgICBsZXQgb3B0aW9ucyA9IGZhbHNlO1xuICAgICAgY29uc3Qgb2xkTW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChvbGRNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuICAgICAgaWYgKG1vZGlmaWVyTWF0Y2gpIHtcbiAgICAgICAgLy8gUGFyc2UgdGhlIGV2ZW50IG1vZGlmaWVycy5cbiAgICAgICAgLy8gU3VwcG9ydGVkIG1vZGlmaWVyczpcbiAgICAgICAgLy8gLSBwcmV2ZW50RGVmYXVsdFxuICAgICAgICAvLyAtIHN0b3BQcm9wYWdhdGlvblxuICAgICAgICAvLyAtIHBhc3NpdmVcbiAgICAgICAgLy8gLSBub25wYXNzaXZlXG4gICAgICAgIC8vIC0gY2FwdHVyZVxuICAgICAgICAvLyAtIG9uY2VcbiAgICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgICAgICBvcHRpb25zID0gT2JqZWN0LmZyb21FbnRyaWVzKHBhcnRzLnNsaWNlKDEpLm1hcCgobW9kKSA9PiBbbW9kLCB0cnVlXSkpO1xuICAgICAgICBpZiAob3B0aW9ucy5ub25wYXNzaXZlKSB7XG4gICAgICAgICAgb3B0aW9ucy5wYXNzaXZlID0gZmFsc2U7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMubm9ucGFzc2l2ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICAgIGhhbmRsZXIgPSBwcmV2ZW50X2RlZmF1bHQoaGFuZGxlcik7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMucHJldmVudERlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlciA9IHN0b3BfcHJvcGFnYXRpb24oaGFuZGxlcik7XG4gICAgICAgICAgZGVsZXRlIG9wdGlvbnMuc3RvcFByb3BhZ2F0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIExpc3RlbiBmb3IgdGhlIGV2ZW50IGRpcmVjdGx5LCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgICAgY29uc3Qgb2ZmID0gbGlzdGVuKG5vZGUsIGV2ZW50VHlwZSwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICBjb25zdCBkZXN0cnVjdG9yID0gKCkgPT4ge1xuICAgICAgICBvZmYoKTtcbiAgICAgICAgY29uc3QgaWR4ID0gZGVzdHJ1Y3RvcnMuaW5kZXhPZihkZXN0cnVjdG9yKTtcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGRlc3RydWN0b3JzLnB1c2goZGVzdHJ1Y3Rvcik7XG5cbiAgICAgIC8vIEZvcndhcmQgdGhlIGV2ZW50IGZyb20gU3ZlbHRlLlxuICAgICAgaWYgKCFldmVudFR5cGUgaW4gZm9yd2FyZERlc3RydWN0b3JzKSB7XG4gICAgICAgIGZvcndhcmREZXN0cnVjdG9yc1tldmVudFR5cGVdID0gbGlzdGVuKG5vZGUsIGV2ZW50VHlwZSwgZm9yd2FyZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXN0cnVjdG9yO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gTGlzdGVuIHRvIGFsbCB0aGUgZXZlbnRzIGFkZGVkIGJlZm9yZSBtb3VudC5cbiAgICAgICRvbihldmVudHNbaV1bMF0sIGV2ZW50c1tpXVsxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc3Ryb3k6ICgpID0+IHtcbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVzdHJ1Y3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBkZXN0cnVjdG9yc1tpXSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGFsbCBldmVudCBmb3J3YXJkZXJzLlxuICAgICAgICBmb3IgKGxldCBlbnRyeSBvZiBPYmplY3QuZW50cmllcyhmb3J3YXJkRGVzdHJ1Y3RvcnMpKSB7XG4gICAgICAgICAgZW50cnlbMV0oKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9O1xuICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsYXNzTWFwKGNsYXNzT2JqKSB7XG4gIHJldHVybiBPYmplY3QuZW50cmllcyhjbGFzc09iailcbiAgICAuZmlsdGVyKChbbmFtZSwgdmFsdWVdKSA9PiBuYW1lICE9PSAnJyAmJiB2YWx1ZSlcbiAgICAubWFwKChbbmFtZV0pID0+IG5hbWUpXG4gICAgLmpvaW4oJyAnKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25zKG5vZGUsIGFjdGlvbnMpIHtcbiAgbGV0IG9iamVjdHMgPSBbXTtcblxuICBpZiAoYWN0aW9ucykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICBjb25zdCBhY3Rpb24gPSBpc0FycmF5ID8gYWN0aW9uc1tpXVswXSA6IGFjdGlvbnNbaV07XG4gICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlLCBhY3Rpb25zW2ldWzFdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShhY3Rpb25zKSB7XG4gICAgICBpZiAoKChhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoKSB8fCAwKSAhPSBvYmplY3RzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG5vdCBjaGFuZ2UgdGhlIGxlbmd0aCBvZiBhbiBhY3Rpb25zIGFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9ucykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAndXBkYXRlJyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZShhY3Rpb25zW2ldWzFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ2Rlc3Ryb3knIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICBvYmplY3RzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG4iLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWNpcmN1bGFyLXByb2dyZXNzJzogdHJ1ZSxcbiAgICAnbWRjLWNpcmN1bGFyLXByb2dyZXNzLS1pbmRldGVybWluYXRlJzogaW5kZXRlcm1pbmF0ZSxcbiAgICAnbWRjLWNpcmN1bGFyLXByb2dyZXNzLS1jbG9zZWQnOiBjbG9zZWQsXG4gICAgLi4uaW50ZXJuYWxDbGFzc2VzLFxuICB9KX1cbiAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICBhcmlhLXZhbHVlbWF4PVwiMVwiXG4gIGFyaWEtdmFsdWVub3c9e2luZGV0ZXJtaW5hdGUgPyBudWxsIDogYCR7cHJvZ3Jlc3MudG9Mb2NhbGVTdHJpbmcoKX1gfVxuICB7Li4uaW50ZXJuYWxBdHRyc31cbiAgey4uLiQkcmVzdFByb3BzfVxuPlxuICA8ZGl2IGNsYXNzPVwibWRjLWNpcmN1bGFyLXByb2dyZXNzX19kZXRlcm1pbmF0ZS1jb250YWluZXJcIj5cbiAgICA8c3ZnXG4gICAgICBjbGFzcz1cIm1kYy1jaXJjdWxhci1wcm9ncmVzc19fZGV0ZXJtaW5hdGUtY2lyY2xlLWdyYXBoaWNcIlxuICAgICAgdmlld0JveD1cIjAgMCA0OCA0OFwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICA8Y2lyY2xlXG4gICAgICAgIGNsYXNzPVwibWRjLWNpcmN1bGFyLXByb2dyZXNzX19kZXRlcm1pbmF0ZS10cmFja1wiXG4gICAgICAgIGN4PVwiMjRcIlxuICAgICAgICBjeT1cIjI0XCJcbiAgICAgICAgcj1cIjE4XCJcbiAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNFwiXG4gICAgICAvPlxuICAgICAgPGNpcmNsZVxuICAgICAgICBiaW5kOnRoaXM9e2RldGVybWluYXRlQ2lyY2xlfVxuICAgICAgICBjbGFzcz1cIm1kYy1jaXJjdWxhci1wcm9ncmVzc19fZGV0ZXJtaW5hdGUtY2lyY2xlXCJcbiAgICAgICAgY3g9XCIyNFwiXG4gICAgICAgIGN5PVwiMjRcIlxuICAgICAgICByPVwiMThcIlxuICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiMTEzLjA5N1wiXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0PVwiMTEzLjA5N1wiXG4gICAgICAgIHN0cm9rZS13aWR0aD1cIjRcIlxuICAgICAgICB7Li4uZGV0ZXJtaW5hdGVDaXJjbGVBdHRyc31cbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibWRjLWNpcmN1bGFyLXByb2dyZXNzX19pbmRldGVybWluYXRlLWNvbnRhaW5lclwiPlxuICAgIHsjZWFjaCBmb3VyQ29sb3IgPyBbMSwgMiwgMywgNF0gOiBbMV0gYXMgY29sb3J9XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgICAgICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgICAgICAgJ21kYy1jaXJjdWxhci1wcm9ncmVzc19fc3Bpbm5lci1sYXllcic6IHRydWUsXG4gICAgICAgICAgWydtZGMtY2lyY3VsYXItcHJvZ3Jlc3NfX2NvbG9yLScgKyBjb2xvcl06IGZvdXJDb2xvcixcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIm1kYy1jaXJjdWxhci1wcm9ncmVzc19fY2lyY2xlLWNsaXBwZXIgbWRjLWNpcmN1bGFyLXByb2dyZXNzX19jaXJjbGUtbGVmdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy1jaXJjdWxhci1wcm9ncmVzc19faW5kZXRlcm1pbmF0ZS1jaXJjbGUtZ3JhcGhpY1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgY3g9XCIyNFwiXG4gICAgICAgICAgICAgIGN5PVwiMjRcIlxuICAgICAgICAgICAgICByPVwiMThcIlxuICAgICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiMTEzLjA5N1wiXG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0PVwiNTYuNTQ5XCJcbiAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1kYy1jaXJjdWxhci1wcm9ncmVzc19fZ2FwLXBhdGNoXCI+XG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgY2xhc3M9XCJtZGMtY2lyY3VsYXItcHJvZ3Jlc3NfX2luZGV0ZXJtaW5hdGUtY2lyY2xlLWdyYXBoaWNcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0OCA0OFwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgIGN4PVwiMjRcIlxuICAgICAgICAgICAgICBjeT1cIjI0XCJcbiAgICAgICAgICAgICAgcj1cIjE4XCJcbiAgICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheT1cIjExMy4wOTdcIlxuICAgICAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldD1cIjU2LjU0OVwiXG4gICAgICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjMuMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwibWRjLWNpcmN1bGFyLXByb2dyZXNzX19jaXJjbGUtY2xpcHBlciBtZGMtY2lyY3VsYXItcHJvZ3Jlc3NfX2NpcmNsZS1yaWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBjbGFzcz1cIm1kYy1jaXJjdWxhci1wcm9ncmVzc19faW5kZXRlcm1pbmF0ZS1jaXJjbGUtZ3JhcGhpY1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDQ4IDQ4XCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgY3g9XCIyNFwiXG4gICAgICAgICAgICAgIGN5PVwiMjRcIlxuICAgICAgICAgICAgICByPVwiMThcIlxuICAgICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5PVwiMTEzLjA5N1wiXG4gICAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0PVwiNTYuNTQ5XCJcbiAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIHsvZWFjaH1cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgTURDQ2lyY3VsYXJQcm9ncmVzc0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvY2lyY3VsYXItcHJvZ3Jlc3MnO1xuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICB1c2VBY3Rpb25zLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IGluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjbG9zZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBwcm9ncmVzcyA9IDA7XG4gIGV4cG9ydCBsZXQgZm91ckNvbG9yID0gZmFsc2U7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnN0YW5jZTtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgaW50ZXJuYWxBdHRycyA9IHt9O1xuICBsZXQgZGV0ZXJtaW5hdGVDaXJjbGVBdHRycyA9IHt9O1xuICBsZXQgZGV0ZXJtaW5hdGVDaXJjbGU7XG5cbiAgJDogaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLmlzRGV0ZXJtaW5hdGUoKSAhPT0gIWluZGV0ZXJtaW5hdGUpIHtcbiAgICBpbnN0YW5jZS5zZXREZXRlcm1pbmF0ZSghaW5kZXRlcm1pbmF0ZSk7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuZ2V0UHJvZ3Jlc3MoKSAhPT0gcHJvZ3Jlc3MpIHtcbiAgICBpbnN0YW5jZS5zZXRQcm9ncmVzcyhwcm9ncmVzcyk7XG4gIH1cblxuICAkOiBpZiAoaW5zdGFuY2UpIHtcbiAgICBpZiAoY2xvc2VkKSB7XG4gICAgICBpbnN0YW5jZS5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5vcGVuKCk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDQ2lyY3VsYXJQcm9ncmVzc0ZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3MsXG4gICAgICBnZXREZXRlcm1pbmF0ZUNpcmNsZUF0dHJpYnV0ZTogZ2V0RGV0ZXJtaW5hdGVDaXJjbGVBdHRyLFxuICAgICAgaGFzQ2xhc3MsXG4gICAgICByZW1vdmVDbGFzcyxcbiAgICAgIHJlbW92ZUF0dHJpYnV0ZTogcmVtb3ZlQXR0cixcbiAgICAgIHNldEF0dHJpYnV0ZTogYWRkQXR0cixcbiAgICAgIHNldERldGVybWluYXRlQ2lyY2xlQXR0cmlidXRlOiBhZGREZXRlcm1pbmF0ZUNpcmNsZUF0dHIsXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZS5pbml0KCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiBjbGFzc05hbWUgaW4gaW50ZXJuYWxDbGFzc2VzXG4gICAgICA/IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdXG4gICAgICA6IGdldEVsZW1lbnQoKS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIShjbGFzc05hbWUgaW4gaW50ZXJuYWxDbGFzc2VzKSB8fCBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsQXR0cnNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICBpbnRlcm5hbEF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQXR0cihuYW1lKSB7XG4gICAgaWYgKCEobmFtZSBpbiBpbnRlcm5hbEF0dHJzKSB8fCBpbnRlcm5hbEF0dHJzW25hbWVdICE9IG51bGwpIHtcbiAgICAgIGludGVybmFsQXR0cnNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0RGV0ZXJtaW5hdGVDaXJjbGVBdHRyKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSBpbiBkZXRlcm1pbmF0ZUNpcmNsZUF0dHJzXG4gICAgICA/IGRldGVybWluYXRlQ2lyY2xlQXR0cnNbbmFtZV1cbiAgICAgIDogZGV0ZXJtaW5hdGVDaXJjbGUuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkRGV0ZXJtaW5hdGVDaXJjbGVBdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGRldGVybWluYXRlQ2lyY2xlQXR0cnNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICBkZXRlcm1pbmF0ZUNpcmNsZUF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyXCI+XG4gIDxDaXJjdWxhclByb2dyZXNzIHN0eWxlPVwiaGVpZ2h0OiA0OHB4OyB3aWR0aDogNDhweDtcIiB7cHJvZ3Jlc3N9IHtjbG9zZWR9IC8+XG48L2Rpdj5cblxuPGJyIC8+XG5cbjxCdXR0b24gb246Y2xpY2s9e3Jlc2V0fT5SZXNldDwvQnV0dG9uPlxuXG48Rm9ybUZpZWxkPlxuICA8Q2hlY2tib3ggYmluZDpjaGVja2VkPXtjbG9zZWR9IC8+XG4gIDxzcGFuIHNsb3Q9XCJsYWJlbFwiPkNsb3NlZDwvc3Bhbj5cbjwvRm9ybUZpZWxkPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBvbk1vdW50LCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAc211aS9jaXJjdWxhci1wcm9ncmVzcyc7XG4gIGltcG9ydCBDaGVja2JveCBmcm9tICdAc211aS9jaGVja2JveCc7XG4gIGltcG9ydCBGb3JtRmllbGQgZnJvbSAnQHNtdWkvZm9ybS1maWVsZCc7XG4gIGltcG9ydCBCdXR0b24gZnJvbSAnQHNtdWkvYnV0dG9uJztcblxuICBsZXQgcHJvZ3Jlc3MgPSAwO1xuICBsZXQgY2xvc2VkID0gZmFsc2U7XG4gIGxldCB0aW1lcjtcblxuICBvbk1vdW50KHJlc2V0KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9KTtcblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBwcm9ncmVzcyA9IDA7XG4gICAgY2xvc2VkID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBwcm9ncmVzcyArPSAwLjAxO1xuXG4gICAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICBwcm9ncmVzcyA9IDE7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyXCI+XG4gIDxDaXJjdWxhclByb2dyZXNzXG4gICAgY2xhc3M9XCJteS1jb2xvcmVkLWNpcmNsZVwiXG4gICAgc3R5bGU9XCJoZWlnaHQ6IDMycHg7IHdpZHRoOiAzMnB4O1wiXG4gICAgcHJvZ3Jlc3M9ezAuM31cbiAgLz5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAc211aS9jaXJjdWxhci1wcm9ncmVzcyc7XG48L3NjcmlwdD5cbiIsIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkNpcmN1bGFyIFByb2dyZXNzIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPkNpcmN1bGFyIFByb2dyZXNzPC9oMj5cblxuICA8cHJlIGNsYXNzPVwiZGVtby1zcGFjZWRcIj5ucG0gaSAtRCBAc211aS9jaXJjdWxhci1wcm9ncmVzczwvcHJlPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U2ltcGxlfSBmaWxlPVwiY2lyY3VsYXItcHJvZ3Jlc3MvX1NpbXBsZS5zdmVsdGVcIiAvPlxuXG4gIDxEZW1vXG4gICAgY29tcG9uZW50PXtJbmRldGVybWluYXRlfVxuICAgIGZpbGU9XCJjaXJjdWxhci1wcm9ncmVzcy9fSW5kZXRlcm1pbmF0ZS5zdmVsdGVcIlxuICA+XG4gICAgSW5kZXRlcm1pbmF0ZVxuICA8L0RlbW8+XG5cbiAgPERlbW9cbiAgICBjb21wb25lbnQ9e0ZvdXJDb2xvcn1cbiAgICBmaWxlcz17W1xuICAgICAgJ2NpcmN1bGFyLXByb2dyZXNzL19Gb3VyQ29sb3Iuc3ZlbHRlJyxcbiAgICAgICdjaXJjdWxhci1wcm9ncmVzcy9fRm91ckNvbG9yLnNjc3MnLFxuICAgIF19XG4gID5cbiAgICBGb3VyIENvbG9yXG4gIDwvRGVtbz5cblxuICA8RGVtb1xuICAgIGNvbXBvbmVudD17Q29sb3JlZH1cbiAgICBmaWxlcz17W1xuICAgICAgJ2NpcmN1bGFyLXByb2dyZXNzL19Db2xvcmVkLnN2ZWx0ZScsXG4gICAgICAnY2lyY3VsYXItcHJvZ3Jlc3MvX0NvbG9yZWQuc2NzcycsXG4gICAgXX1cbiAgPlxuICAgIENvbG9yZWQgKHVzaW5nIFNhc3MgbWl4aW5zKVxuICA8L0RlbW8+XG48L3NlY3Rpb24+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBEZW1vIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRGVtby5zdmVsdGUnO1xuICBpbXBvcnQgU2ltcGxlIGZyb20gJy4vX1NpbXBsZS5zdmVsdGUnO1xuICBpbXBvcnQgSW5kZXRlcm1pbmF0ZSBmcm9tICcuL19JbmRldGVybWluYXRlLnN2ZWx0ZSc7XG4gIGltcG9ydCBGb3VyQ29sb3IgZnJvbSAnLi9fRm91ckNvbG9yLnN2ZWx0ZSc7XG4gIGltcG9ydCBDb2xvcmVkIGZyb20gJy4vX0NvbG9yZWQuc3ZlbHRlJztcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ25DLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxjQUFjO0FBQ3pDLFNBQVMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxD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
