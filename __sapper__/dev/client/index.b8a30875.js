import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a7 as create_slot, v as validate_slots, ay as validate_store, az as component_subscribe, Z as setContext, _ as onDestroy, aA as writable, aB as set_store_value, a8 as update_slot, J as transition_in, K as transition_out, ag as validate_each_argument, aC as validate_each_keys, $ as assign, W as compute_rest_props, Y as get_current_component, ah as onMount, a0 as exclude_internal_props, a1 as empty, q as create_component, A as claim_component, F as insert_dev, H as mount_component, u as detach_dev, M as destroy_component, p as element, x as claim_element, y as children, a9 as set_attributes, D as add_location, aa as action_destroyer, ax as listen_dev, a4 as group_outros, aD as update_keyed_each, aE as outro_and_destroy_block, a5 as check_outros, a2 as get_spread_update, ab as is_function, ac as run_all, a6 as binding_callbacks, o as space, w as claim_space, X as getContext, aF as globals, E as attr_dev, G as append_dev, a3 as get_spread_object, N as svg_element, ai as set_svg_attributes, ak as bind, t as text, z as claim_text, B as set_style, al as add_flush_callback, aw as set_data_dev, n as Svg$1, aG as mdiFormatAlignLeft, aH as mdiFormatAlignCenter, aI as mdiFormatAlignRight, aJ as mdiFormatAlignJustify, aK as mdiFormatBold, aL as mdiFormatItalic, aM as mdiFormatUnderline, aN as mdiLink, aO as mdiImage, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { B as Button_1 } from './Button.d66ce348.js';
import { C as CommonLabel$1 } from './CommonLabel.e3297b41.js';
import { W as Wrapper } from './Wrapper.fc581bd8.js';

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
 * Style classes for segmented-button
 */
var cssClasses$2 = {
    SINGLE_SELECT: 'mdc-segmented-button--single-select'
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
var MDCSegmentedButtonFoundation = /** @class */ (function (_super) {
    __extends(MDCSegmentedButtonFoundation, _super);
    function MDCSegmentedButtonFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCSegmentedButtonFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSegmentedButtonFoundation, "defaultAdapter", {
        get: function () {
            return {
                hasClass: function () { return false; }, getSegments: function () { return []; },
                selectSegment: function () { return undefined; },
                unselectSegment: function () { return undefined; },
                notifySelectedChange: function () { return undefined; }
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets identified child segment to be selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButtonFoundation.prototype.selectSegment = function (indexOrSegmentId) {
        this.adapter.selectSegment(indexOrSegmentId);
    };
    /**
     * Sets identified child segment to be not selected
     *
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     */
    MDCSegmentedButtonFoundation.prototype.unselectSegment = function (indexOrSegmentId) {
        this.adapter.unselectSegment(indexOrSegmentId);
    };
    /**
     * @return Returns currently selected child segments as readonly list of
     * SegmentDetails
     */
    MDCSegmentedButtonFoundation.prototype.getSelectedSegments = function () {
        return this.adapter.getSegments().filter(function (segmentDetail) { return segmentDetail.selected; });
    };
    /**
     * @param indexOrSegmentId Number index or string segmentId that identifies
     * child segment
     * @return Returns true if identified child segment is currently selected,
     * otherwise returns false
     */
    MDCSegmentedButtonFoundation.prototype.isSegmentSelected = function (indexOrSegmentId) {
        return this.adapter.getSegments().some(function (segmentDetail) { return (segmentDetail.index === indexOrSegmentId ||
            segmentDetail.segmentId === indexOrSegmentId) &&
            segmentDetail.selected; });
    };
    /**
     * @return Returns true if segmented button is single select, otherwise
     * returns false
     */
    MDCSegmentedButtonFoundation.prototype.isSingleSelect = function () {
        return this.adapter.hasClass(cssClasses$2.SINGLE_SELECT);
    };
    /**
     * Called when child segment's selected status may have changed. If segmented
     * button is single select, unselects all child segments other than identified
     * child segment. Finally, emits event to client.
     *
     * @param detail Child segment affected represented as SegmentDetail
     * @event change With detail - SegmentDetail
     */
    MDCSegmentedButtonFoundation.prototype.handleSelected = function (detail) {
        if (this.isSingleSelect()) {
            this.unselectPrevSelected(detail.index);
        }
        this.adapter.notifySelectedChange(detail);
    };
    /**
     * Sets all child segments to be not selected except for child segment
     * identified by index
     *
     * @param index Index of child segment to not unselect
     */
    MDCSegmentedButtonFoundation.prototype.unselectPrevSelected = function (index) {
        var e_1, _a;
        try {
            for (var _b = __values(this.getSelectedSegments()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var selectedSegment = _c.value;
                if (selectedSegment.index !== index) {
                    this.unselectSegment(selectedSegment.index);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    return MDCSegmentedButtonFoundation;
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

/* packages/segmented-button/node_modules/@smui/common/ContextFragment.svelte generated by Svelte v3.37.0 */

function create_fragment$c(ctx) {
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
		id: create_fragment$c.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$a($$self, $$props, $$invalidate) {
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
		init(this, options, instance$a, create_fragment$c, safe_not_equal, { key: 1, value: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ContextFragment",
			options,
			id: create_fragment$c.name
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

/* packages/segmented-button/SegmentedButton.svelte generated by Svelte v3.37.0 */
const file$9 = "packages/segmented-button/SegmentedButton.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[28] = list[i];
	child_ctx[30] = i;
	return child_ctx;
}

const get_default_slot_changes = dirty => ({ segment: dirty & /*segments*/ 4 });
const get_default_slot_context = ctx => ({ segment: /*segment*/ ctx[28] });

// (19:6) <ContextFragment         key="SMUI:segmented-button:segment:initialSelected"         value={initialSelected[i]}       >
function create_default_slot_1$5(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[15].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[20], get_default_slot_context);

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
				if (default_slot.p && dirty & /*$$scope, segments*/ 1048580) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[20], dirty, get_default_slot_changes, get_default_slot_context);
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
		id: create_default_slot_1$5.name,
		type: "slot",
		source: "(19:6) <ContextFragment         key=\\\"SMUI:segmented-button:segment:initialSelected\\\"         value={initialSelected[i]}       >",
		ctx
	});

	return block;
}

// (18:4) <ContextFragment key="SMUI:segmented-button:segment:index" value={i}>
function create_default_slot$7(ctx) {
	let contextfragment;
	let t;
	let current;

	contextfragment = new ContextFragment({
			props: {
				key: "SMUI:segmented-button:segment:initialSelected",
				value: /*initialSelected*/ ctx[8][/*i*/ ctx[30]],
				$$slots: { default: [create_default_slot_1$5] },
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
			if (dirty & /*segments*/ 4) contextfragment_changes.value = /*initialSelected*/ ctx[8][/*i*/ ctx[30]];

			if (dirty & /*$$scope, segments*/ 1048580) {
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
		id: create_default_slot$7.name,
		type: "slot",
		source: "(18:4) <ContextFragment key=\\\"SMUI:segmented-button:segment:index\\\" value={i}>",
		ctx
	});

	return block;
}

// (17:2) {#each segments as segment, i (key(segment))}
function create_each_block(key_2, ctx) {
	let first;
	let contextfragment;
	let current;

	contextfragment = new ContextFragment({
			props: {
				key: "SMUI:segmented-button:segment:index",
				value: /*i*/ ctx[30],
				$$slots: { default: [create_default_slot$7] },
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
			if (dirty & /*segments*/ 4) contextfragment_changes.value = /*i*/ ctx[30];

			if (dirty & /*$$scope, segments*/ 1048580) {
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
		source: "(17:2) {#each segments as segment, i (key(segment))}",
		ctx
	});

	return block;
}

function create_fragment$b(ctx) {
	let div;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let div_class_value;
	let div_role_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	let each_value = /*segments*/ ctx[2];
	validate_each_argument(each_value);
	const get_key = ctx => /*key*/ ctx[3](/*segment*/ ctx[28]);
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-segmented-button": true,
				"mdc-segmented-button--single-select": /*singleSelect*/ ctx[4]
			})
		},
		{
			role: div_role_value = /*singleSelect*/ ctx[4] ? "radiogroup" : "group"
		},
		/*$$restProps*/ ctx[11]
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
			add_location(div, file$9, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			/*div_binding*/ ctx[16](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[7].call(null, div)),
					listen_dev(div, "SMUI:segmented-button:segment:mount", /*SMUI_segmented_button_segment_mount_handler*/ ctx[17], false, false, false),
					listen_dev(div, "SMUI:segmented-button:segment:unmount", /*SMUI_segmented_button_segment_unmount_handler*/ ctx[18], false, false, false),
					listen_dev(div, "selected", /*selected_handler*/ ctx[19], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*segments, initialSelected, $$scope, key*/ 1048844) {
				each_value = /*segments*/ ctx[2];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
				check_outros();
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*className, singleSelect*/ 18 && div_class_value !== (div_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-segmented-button": true,
					"mdc-segmented-button--single-select": /*singleSelect*/ ctx[4]
				}))) && { class: div_class_value },
				(!current || dirty & /*singleSelect*/ 16 && div_role_value !== (div_role_value = /*singleSelect*/ ctx[4] ? "radiogroup" : "group")) && { role: div_role_value },
				dirty & /*$$restProps*/ 2048 && /*$$restProps*/ ctx[11]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
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

			/*div_binding*/ ctx[16](null);
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

function setDifference(setA, setB) {
	let _difference = new Set(setA);

	for (let elem of setB) {
		_difference.delete(elem);
	}

	return _difference;
}

function instance_1$1($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","segments","key","singleSelect","selected","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("SegmentedButton", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { segments = [] } = $$props;
	let { key = segment => segment } = $$props;
	let { singleSelect = false } = $$props;
	let { selected = singleSelect ? null : [] } = $$props;
	let element;
	let instance;
	let segmentAccessorMap = {};
	let segmentAccessorWeakMap = new WeakMap();
	let initialSelected = segments.map(segmentId => singleSelect && selected === segmentId || !singleSelect && selected.indexOf(segmentId) !== -1);
	setContext("SMUI:icon:context", "segmented-button");
	setContext("SMUI:label:context", "segmented-button");
	setContext("SMUI:segmented-button:singleSelect", singleSelect);
	let previousSelected = singleSelect ? selected : new Set(selected);

	onMount(() => {
		$$invalidate(5, instance = new MDCSegmentedButtonFoundation({
				hasClass: className => {
					return getElement().classList.contains(className);
				},
				getSegments: () => {
					return segments.map((segment, index) => ({
						index,
						selected: singleSelect
						? selected === segment
						: selected.indexOf(segment) !== -1
					})); // segmentId: segment, // Not necessarily a string.
				},
				selectSegment,
				unselectSegment,
				notifySelectedChange: detail => {
					if (detail.selected) {
						selectSegment(detail.index);
					} else {
						unselectSegment(detail.index);
					}

					dispatch(getElement(), "change", detail);
				}
			}));

		instance.init();

		return () => {
			instance.destroy();
		};
	});

	function handleSegmentMount(event) {
		const accessor = event.detail;
		addAccessor(accessor.segmentId, accessor);
	}

	function handleSegmentUnmount(event) {
		const accessor = event.detail;
		removeAccessor(accessor.segmentId);
	}

	function getAccessor(segmentId) {
		return segmentId instanceof Object
		? segmentAccessorWeakMap.get(segmentId)
		: segmentAccessorMap[segmentId];
	}

	function addAccessor(segmentId, accessor) {
		if (segmentId instanceof Object) {
			segmentAccessorWeakMap.set(segmentId, accessor);
		} else {
			segmentAccessorMap[segmentId] = accessor;
		}
	}

	function removeAccessor(segmentId) {
		if (segmentId instanceof Object) {
			segmentAccessorWeakMap.delete(segmentId);
		} else {
			delete segmentAccessorMap[segmentId];
		}
	}

	function selectSegment(indexOrSegmentId) {
		let index = segments.indexOf(indexOrSegmentId);

		if (index === -1) {
			index = indexOrSegmentId;
		}

		if (!singleSelect) {
			const selIndex = selected.indexOf(segments[index]);

			if (selIndex === -1) {
				selected.push(segments[index]);
				$$invalidate(12, selected);
			}
		} else if (selected !== segments[index]) {
			$$invalidate(12, selected = segments[index]);
		}

		getAccessor(segments[index]).selected = true;
	}

	function unselectSegment(indexOrSegmentId) {
		let index = segments.indexOf(indexOrSegmentId);

		if (index === -1) {
			index = indexOrSegmentId;
		}

		if (!singleSelect) {
			const selIndex = selected.indexOf(segments[index]);

			if (selIndex !== -1) {
				selected.splice(selIndex, 1);
				$$invalidate(12, selected);
			}
		} else if (selected === segments[index]) {
			$$invalidate(12, selected = null);
		}

		getAccessor(segments[index]).selected = false;
	}

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(6, element);
		});
	}

	const SMUI_segmented_button_segment_mount_handler = event => handleSegmentMount(event);
	const SMUI_segmented_button_segment_unmount_handler = event => handleSegmentUnmount(event);
	const selected_handler = event => instance && instance.handleSelected(event.detail);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(11, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("segments" in $$new_props) $$invalidate(2, segments = $$new_props.segments);
		if ("key" in $$new_props) $$invalidate(3, key = $$new_props.key);
		if ("singleSelect" in $$new_props) $$invalidate(4, singleSelect = $$new_props.singleSelect);
		if ("selected" in $$new_props) $$invalidate(12, selected = $$new_props.selected);
		if ("$$scope" in $$new_props) $$invalidate(20, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCSegmentedButtonFoundation,
		onMount,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		dispatch,
		ContextFragment,
		forwardEvents,
		use,
		className,
		segments,
		key,
		singleSelect,
		selected,
		element,
		instance,
		segmentAccessorMap,
		segmentAccessorWeakMap,
		initialSelected,
		previousSelected,
		setDifference,
		handleSegmentMount,
		handleSegmentUnmount,
		getAccessor,
		addAccessor,
		removeAccessor,
		selectSegment,
		unselectSegment,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("segments" in $$props) $$invalidate(2, segments = $$new_props.segments);
		if ("key" in $$props) $$invalidate(3, key = $$new_props.key);
		if ("singleSelect" in $$props) $$invalidate(4, singleSelect = $$new_props.singleSelect);
		if ("selected" in $$props) $$invalidate(12, selected = $$new_props.selected);
		if ("element" in $$props) $$invalidate(6, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(5, instance = $$new_props.instance);
		if ("segmentAccessorMap" in $$props) segmentAccessorMap = $$new_props.segmentAccessorMap;
		if ("segmentAccessorWeakMap" in $$props) segmentAccessorWeakMap = $$new_props.segmentAccessorWeakMap;
		if ("initialSelected" in $$props) $$invalidate(8, initialSelected = $$new_props.initialSelected);
		if ("previousSelected" in $$props) $$invalidate(14, previousSelected = $$new_props.previousSelected);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*instance, singleSelect, previousSelected, selected*/ 20528) {
			if (instance && singleSelect && previousSelected !== selected) {
				if (previousSelected != null) {
					instance.unselectSegment(previousSelected);
				}

				$$invalidate(14, previousSelected = selected);
				instance.selectSegment(selected);
			}
		}

		if ($$self.$$.dirty & /*instance, singleSelect, selected, previousSelected, segments*/ 20532) {
			if (instance && !singleSelect) {
				const setSelected = new Set(selected);
				const unSelected = setDifference(previousSelected, setSelected);
				const newSelected = setDifference(setSelected, previousSelected);

				if (unSelected.size || newSelected.size) {
					$$invalidate(14, previousSelected = setSelected);

					for (let segmentId of unSelected) {
						const idx = segments.indexOf(segmentId);

						if (idx !== -1) {
							instance.unselectSegment(idx);
						}
					}

					for (let segmentId of newSelected) {
						instance.selectSegment(segments.indexOf(segmentId));
					}
				}
			}
		}
	};

	return [
		use,
		className,
		segments,
		key,
		singleSelect,
		instance,
		element,
		forwardEvents,
		initialSelected,
		handleSegmentMount,
		handleSegmentUnmount,
		$$restProps,
		selected,
		getElement,
		previousSelected,
		slots,
		div_binding,
		SMUI_segmented_button_segment_mount_handler,
		SMUI_segmented_button_segment_unmount_handler,
		selected_handler,
		$$scope
	];
}

class SegmentedButton extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1$1, create_fragment$b, safe_not_equal, {
			use: 0,
			class: 1,
			segments: 2,
			key: 3,
			singleSelect: 4,
			selected: 12,
			getElement: 13
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SegmentedButton",
			options,
			id: create_fragment$b.name
		});
	}

	get use() {
		throw new Error("<SegmentedButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<SegmentedButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<SegmentedButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<SegmentedButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get segments() {
		throw new Error("<SegmentedButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segments(value) {
		throw new Error("<SegmentedButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get key() {
		throw new Error("<SegmentedButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set key(value) {
		throw new Error("<SegmentedButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get singleSelect() {
		throw new Error("<SegmentedButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set singleSelect(value) {
		throw new Error("<SegmentedButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get selected() {
		throw new Error("<SegmentedButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set selected(value) {
		throw new Error("<SegmentedButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[13];
	}

	set getElement(value) {
		throw new Error("<SegmentedButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
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
/**
 * Boolean strings for segment
 */
var booleans = {
    TRUE: 'true',
    FALSE: 'false'
};
/**
 * Attributes referenced by segment
 */
var attributes = {
    ARIA_CHECKED: 'aria-checked',
    ARIA_PRESSED: 'aria-pressed',
    DATA_SEGMENT_ID: 'data-segment-id'
};
/**
 * Style classes for segment
 */
var cssClasses$1 = {
    SELECTED: 'mdc-segmented-button__segment--selected'
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
var emptyClientRect = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
};
var MDCSegmentedButtonSegmentFoundation = /** @class */ (function (_super) {
    __extends(MDCSegmentedButtonSegmentFoundation, _super);
    function MDCSegmentedButtonSegmentFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCSegmentedButtonSegmentFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSegmentedButtonSegmentFoundation, "defaultAdapter", {
        get: function () {
            return {
                isSingleSelect: function () { return false; }, getAttr: function () { return ''; }, setAttr: function () { return undefined; },
                addClass: function () { return undefined; }, removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                notifySelectedChange: function () { return undefined; },
                getRootBoundingClientRect: function () { return emptyClientRect; },
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * @return Returns true if segment is currently selected, otherwise returns
     * false
     */
    MDCSegmentedButtonSegmentFoundation.prototype.isSelected = function () {
        return this.adapter.hasClass(cssClasses$1.SELECTED);
    };
    /**
     * Sets segment to be selected
     */
    MDCSegmentedButtonSegmentFoundation.prototype.setSelected = function () {
        this.adapter.addClass(cssClasses$1.SELECTED);
        this.setAriaAttr(booleans.TRUE);
    };
    /**
     * Sets segment to be not selected
     */
    MDCSegmentedButtonSegmentFoundation.prototype.setUnselected = function () {
        this.adapter.removeClass(cssClasses$1.SELECTED);
        this.setAriaAttr(booleans.FALSE);
    };
    /**
     * @return Returns segment's segmentId if it was set by client
     */
    MDCSegmentedButtonSegmentFoundation.prototype.getSegmentId = function () {
        var _a;
        return (_a = this.adapter.getAttr(attributes.DATA_SEGMENT_ID)) !== null && _a !== void 0 ? _a : undefined;
    };
    /**
     * Called when segment is clicked. If the wrapping segmented button is single
     * select, doesn't allow segment to be set to not selected. Otherwise, toggles
     * segment's selected status. Finally, emits event to wrapping segmented
     * button.
     *
     * @event selected With detail - SegmentDetail
     */
    MDCSegmentedButtonSegmentFoundation.prototype.handleClick = function () {
        if (this.adapter.isSingleSelect()) {
            this.setSelected();
        }
        else {
            this.toggleSelection();
        }
        this.adapter.notifySelectedChange(this.isSelected());
    };
    /**
     * @return Returns bounding rectangle for ripple effect
     */
    MDCSegmentedButtonSegmentFoundation.prototype.getDimensions = function () {
        return this.adapter.getRootBoundingClientRect();
    };
    /**
     * Sets segment from not selected to selected, or selected to not selected
     */
    MDCSegmentedButtonSegmentFoundation.prototype.toggleSelection = function () {
        if (this.isSelected()) {
            this.setUnselected();
        }
        else {
            this.setSelected();
        }
    };
    /**
     * Sets appropriate aria attribute, based on wrapping segmented button's
     * single selected value, to new value
     *
     * @param value Value that represents selected status
     */
    MDCSegmentedButtonSegmentFoundation.prototype.setAriaAttr = function (value) {
        if (this.adapter.isSingleSelect()) {
            this.adapter.setAttr(attributes.ARIA_CHECKED, value);
        }
        else {
            this.adapter.setAttr(attributes.ARIA_PRESSED, value);
        }
    };
    return MDCSegmentedButtonSegmentFoundation;
}(MDCFoundation));

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
var cssClasses = {
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
            return cssClasses;
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

/* packages/segmented-button/Segment.svelte generated by Svelte v3.37.0 */

const { Error: Error_1 } = globals;
const file$8 = "packages/segmented-button/Segment.svelte";

// (29:3) {#if ripple}
function create_if_block_1(ctx) {
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
			attr_dev(div, "class", "mdc-segmented-button__ripple");
			add_location(div, file$8, 28, 15, 790);
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
		id: create_if_block_1.name,
		type: "if",
		source: "(29:3) {#if ripple}",
		ctx
	});

	return block;
}

// (30:4) {#if touch}
function create_if_block(ctx) {
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
			attr_dev(div, "class", "mdc-segmented-button__segment__touch");
			add_location(div, file$8, 29, 15, 860);
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
		id: create_if_block.name,
		type: "if",
		source: "(30:4) {#if touch}",
		ctx
	});

	return block;
}

function create_fragment$a(ctx) {
	let button;
	let if_block0_anchor;
	let button_class_value;
	let button_style_value;
	let button_role_value;
	let button_aria_pressed_value;
	let button_aria_checked_value;
	let Ripple_action;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*ripple*/ ctx[3] && create_if_block_1(ctx);
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);
	let if_block1 = /*touch*/ ctx[4] && create_if_block(ctx);

	let button_levels = [
		{
			class: button_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-segmented-button__segment": true,
				"mdc-segmented-button__segment--touch": /*touch*/ ctx[4],
				.../*internalClasses*/ ctx[8]
			})
		},
		{
			style: button_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$2).concat([/*style*/ ctx[2]]).join(" ")
		},
		{
			role: button_role_value = /*singleSelect*/ ctx[13] ? "radio" : null
		},
		{
			"aria-pressed": button_aria_pressed_value = !/*singleSelect*/ ctx[13]
			? /*selected*/ ctx[6] ? "true" : "false"
			: null
		},
		{
			"aria-checked": button_aria_checked_value = /*singleSelect*/ ctx[13]
			? /*selected*/ ctx[6] ? "true" : "false"
			: null
		},
		/*internalAttrs*/ ctx[10],
		/*$$restProps*/ ctx[18]
	];

	let button_data = {};

	for (let i = 0; i < button_levels.length; i += 1) {
		button_data = assign(button_data, button_levels[i]);
	}

	const block = {
		c: function create() {
			button = element("button");
			if (if_block0) if_block0.c();
			if_block0_anchor = empty();
			if (default_slot) default_slot.c();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {
				class: true,
				style: true,
				role: true,
				"aria-pressed": true,
				"aria-checked": true
			});

			var button_nodes = children(button);
			if (if_block0) if_block0.l(button_nodes);
			if_block0_anchor = empty();
			if (default_slot) default_slot.l(button_nodes);
			if (if_block1) if_block1.l(button_nodes);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(button, button_data);
			add_location(button, file$8, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			if (if_block0) if_block0.m(button, null);
			append_dev(button, if_block0_anchor);

			if (default_slot) {
				default_slot.m(button, null);
			}

			if (if_block1) if_block1.m(button, null);
			/*button_binding*/ ctx[23](button);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(Ripple_action = Ripple.call(null, button, {
						ripple: /*ripple*/ ctx[3],
						unbounded: false,
						addClass: /*addClass*/ ctx[15],
						removeClass: /*removeClass*/ ctx[16],
						addStyle: /*addStyle*/ ctx[17]
					})),
					action_destroyer(/*forwardEvents*/ ctx[11].call(null, button)),
					action_destroyer(useActions_action = useActions.call(null, button, /*use*/ ctx[0])),
					listen_dev(button, "click", /*click_handler*/ ctx[24], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*ripple*/ ctx[3]) {
				if (if_block0) ; else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					if_block0.m(button, if_block0_anchor);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2097152) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[21], dirty, null, null);
				}
			}

			if (/*touch*/ ctx[4]) {
				if (if_block1) ; else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					if_block1.m(button, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			set_attributes(button, button_data = get_spread_update(button_levels, [
				(!current || dirty & /*className, touch, internalClasses*/ 274 && button_class_value !== (button_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-segmented-button__segment": true,
					"mdc-segmented-button__segment--touch": /*touch*/ ctx[4],
					.../*internalClasses*/ ctx[8]
				}))) && { class: button_class_value },
				(!current || dirty & /*internalStyles, style*/ 516 && button_style_value !== (button_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$2).concat([/*style*/ ctx[2]]).join(" "))) && { style: button_style_value },
				{ role: button_role_value },
				(!current || dirty & /*selected*/ 64 && button_aria_pressed_value !== (button_aria_pressed_value = !/*singleSelect*/ ctx[13]
				? /*selected*/ ctx[6] ? "true" : "false"
				: null)) && {
					"aria-pressed": button_aria_pressed_value
				},
				(!current || dirty & /*selected*/ 64 && button_aria_checked_value !== (button_aria_checked_value = /*singleSelect*/ ctx[13]
				? /*selected*/ ctx[6] ? "true" : "false"
				: null)) && {
					"aria-checked": button_aria_checked_value
				},
				dirty & /*internalAttrs*/ 1024 && /*internalAttrs*/ ctx[10],
				dirty & /*$$restProps*/ 262144 && /*$$restProps*/ ctx[18]
			]));

			if (Ripple_action && is_function(Ripple_action.update) && dirty & /*ripple*/ 8) Ripple_action.update.call(null, {
				ripple: /*ripple*/ ctx[3],
				unbounded: false,
				addClass: /*addClass*/ ctx[15],
				removeClass: /*removeClass*/ ctx[16],
				addStyle: /*addStyle*/ ctx[17]
			});

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
			if (if_block0) if_block0.d();
			if (default_slot) default_slot.d(detaching);
			if (if_block1) if_block1.d();
			/*button_binding*/ ctx[23](null);
			mounted = false;
			run_all(dispose);
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

const func$2 = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","style","segment","ripple","touch","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $initialSelectedStore;
	let $index;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Segment", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { segment: segmentId } = $$props;
	let { ripple = true } = $$props;
	let { touch = false } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};
	let internalAttrs = {};
	const initialSelectedStore = getContext("SMUI:segmented-button:segment:initialSelected");
	validate_store(initialSelectedStore, "initialSelectedStore");
	component_subscribe($$self, initialSelectedStore, value => $$invalidate(25, $initialSelectedStore = value));
	let selected = $initialSelectedStore;
	const singleSelect = getContext("SMUI:segmented-button:singleSelect");
	const index = getContext("SMUI:segmented-button:segment:index");
	validate_store(index, "index");
	component_subscribe($$self, index, value => $$invalidate(26, $index = value));

	if (!segmentId) {
		throw new Error("The segment property is required! It should be passed down from the SegmentedButton to the Segment.");
	}

	onMount(() => {
		$$invalidate(5, instance = new MDCSegmentedButtonSegmentFoundation({
				isSingleSelect: () => {
					return singleSelect;
				},
				getAttr,
				setAttr: addAttr,
				addClass,
				removeClass,
				hasClass,
				notifySelectedChange: value => {
					$$invalidate(6, selected = value);
					dispatch(getElement(), "selected", { index: $index, selected, segmentId });
				},
				getRootBoundingClientRect: () => {
					return getElement().getBoundingClientRect();
				}
			}));

		const accessor = {
			segmentId,
			get selected() {
				return selected;
			},
			set selected(value) {
				if (selected !== value) {
					$$invalidate(6, selected = value);
				}
			}
		};

		dispatch(getElement(), "SMUI:segmented-button:segment:mount", accessor);
		instance.init();

		return () => {
			dispatch(getElement(), "SMUI:segmented-button:segment:unmount", accessor);
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

	function getAttr(name) {
		return name in internalAttrs
		? internalAttrs[name]
		: getElement().getAttribute(name);
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(10, internalAttrs[name] = value, internalAttrs);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === "" || value == null) {
				delete internalStyles[name];
				$$invalidate(9, internalStyles);
			} else {
				$$invalidate(9, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function getElement() {
		return element;
	}

	function button_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	const click_handler = event => !event.defaultPrevented && instance && instance.handleClick();

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(18, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ("segment" in $$new_props) $$invalidate(19, segmentId = $$new_props.segment);
		if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("touch" in $$new_props) $$invalidate(4, touch = $$new_props.touch);
		if ("$$scope" in $$new_props) $$invalidate(21, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCSegmentedButtonSegmentFoundation,
		onMount,
		getContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		dispatch,
		Ripple,
		forwardEvents,
		use,
		className,
		style,
		segmentId,
		ripple,
		touch,
		element,
		instance,
		internalClasses,
		internalStyles,
		internalAttrs,
		initialSelectedStore,
		selected,
		singleSelect,
		index,
		hasClass,
		addClass,
		removeClass,
		getAttr,
		addAttr,
		addStyle,
		getElement,
		$initialSelectedStore,
		$index
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
		if ("segmentId" in $$props) $$invalidate(19, segmentId = $$new_props.segmentId);
		if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("touch" in $$props) $$invalidate(4, touch = $$new_props.touch);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(5, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(8, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(9, internalStyles = $$new_props.internalStyles);
		if ("internalAttrs" in $$props) $$invalidate(10, internalAttrs = $$new_props.internalAttrs);
		if ("selected" in $$props) $$invalidate(6, selected = $$new_props.selected);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*instance, selected*/ 96) {
			if (instance && instance.isSelected() && !selected) {
				instance.setUnselected();
			}
		}

		if ($$self.$$.dirty & /*instance, selected*/ 96) {
			if (instance && !instance.isSelected() && selected) {
				instance.setSelected();
			}
		}
	};

	return [
		use,
		className,
		style,
		ripple,
		touch,
		instance,
		selected,
		element,
		internalClasses,
		internalStyles,
		internalAttrs,
		forwardEvents,
		initialSelectedStore,
		singleSelect,
		index,
		addClass,
		removeClass,
		addStyle,
		$$restProps,
		segmentId,
		getElement,
		$$scope,
		slots,
		button_binding,
		click_handler
	];
}

class Segment extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1, create_fragment$a, safe_not_equal, {
			use: 0,
			class: 1,
			style: 2,
			segment: 19,
			ripple: 3,
			touch: 4,
			getElement: 20
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Segment",
			options,
			id: create_fragment$a.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*segmentId*/ ctx[19] === undefined && !("segment" in props)) {
			console.warn("<Segment> was created without expected prop 'segment'");
		}
	}

	get use() {
		throw new Error_1("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error_1("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error_1("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error_1("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error_1("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error_1("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get segment() {
		throw new Error_1("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error_1("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error_1("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error_1("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get touch() {
		throw new Error_1("<Segment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set touch(value) {
		throw new Error_1("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[20];
	}

	set getElement(value) {
		throw new Error_1("<Segment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/segmented-button/node_modules/@smui/common/Span.svelte generated by Svelte v3.37.0 */
const file$7 = "packages/segmented-button/node_modules/@smui/common/Span.svelte";

function create_fragment$9(ctx) {
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
		id: create_fragment$9.name,
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
		init(this, options, instance$9, create_fragment$9, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Span",
			options,
			id: create_fragment$9.name
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

/* packages/segmented-button/node_modules/@smui/common/CommonLabel.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>
function create_default_slot$6(ctx) {
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
		id: create_default_slot$6.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__label': context === 'button',     'mdc-fab__label': context === 'fab',     'mdc-tab__text-label': context === 'tab',     'mdc-image-list__label': context === 'image-list',     'mdc-snackbar__label': context === 'snackbar',     'mdc-banner__text': context === 'banner',     'mdc-segmented-button__label': context === 'segmented-button',     'mdc-data-table__pagination-rows-per-page-label':       context === 'data-table:pagination',     'mdc-data-table__header-cell-label':       context === 'data-table:sortable-header-cell',   })}   {...context === 'snackbar' ? { 'aria-atomic': 'false' } : {}}   {tabindex}   {...$$restProps}>",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
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
			$$slots: { default: [create_default_slot$6] },
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
		id: create_fragment$8.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$8($$self, $$props, $$invalidate) {
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

		init(this, options, instance$8, create_fragment$8, safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			getElement: 8
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CommonLabel",
			options,
			id: create_fragment$8.name
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

/* packages/segmented-button/node_modules/@smui/common/I.svelte generated by Svelte v3.37.0 */
const file$6 = "packages/segmented-button/node_modules/@smui/common/I.svelte";

function create_fragment$7(ctx) {
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
			add_location(i, file$6, 0, 0, 0);
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
		id: create_fragment$7.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$7($$self, $$props, $$invalidate) {
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
		init(this, options, instance$7, create_fragment$7, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "I",
			options,
			id: create_fragment$7.name
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

/* packages/segmented-button/node_modules/@smui/common/Svg.svelte generated by Svelte v3.37.0 */
const file$5 = "packages/segmented-button/node_modules/@smui/common/Svg.svelte";

function create_fragment$6(ctx) {
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
			add_location(svg, file$5, 0, 0, 0);
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
		init(this, options, instance$6, create_fragment$6, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Svg",
			options,
			id: create_fragment$6.name
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

/* packages/segmented-button/node_modules/@smui/common/CommonIcon.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__icon': context === 'button',     'mdc-fab__icon': context === 'fab',     'mdc-icon-button__icon': context === 'icon-button',     'mdc-icon-button__icon--on': context === 'icon-button' && on,     'mdc-tab__icon': context === 'tab',     'mdc-banner__icon': context === 'banner',     'mdc-segmented-button__icon': context === 'segmented-button',   })}   aria-hidden="true"   {...component === Svg ? { focusable: 'false', tabindex: '-1' } : {}}   {...$$restProps}>
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
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     'mdc-button__icon': context === 'button',     'mdc-fab__icon': context === 'fab',     'mdc-icon-button__icon': context === 'icon-button',     'mdc-icon-button__icon--on': context === 'icon-button' && on,     'mdc-tab__icon': context === 'tab',     'mdc-banner__icon': context === 'banner',     'mdc-segmented-button__icon': context === 'segmented-button',   })}   aria-hidden=\\\"true\\\"   {...component === Svg ? { focusable: 'false', tabindex: '-1' } : {}}   {...$$restProps}>",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
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
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$5($$self, $$props, $$invalidate) {
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

		init(this, options, instance$5, create_fragment$5, safe_not_equal, {
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
			id: create_fragment$5.name
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

/* src/routes/demo/segmented-button/_SingleSelection.svelte generated by Svelte v3.37.0 */
const file$4 = "src/routes/demo/segmented-button/_SingleSelection.svelte";

// (8:4) <Label>
function create_default_slot_10(ctx) {
	let t_value = /*segment*/ ctx[7] + "";
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
			if (dirty & /*segment*/ 128 && t_value !== (t_value = /*segment*/ ctx[7] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_10.name,
		type: "slot",
		source: "(8:4) <Label>",
		ctx
	});

	return block;
}

// (7:2) <Segment {segment}>
function create_default_slot_9$1(ctx) {
	let label;
	let current;

	label = new CommonLabel$1({
			props: {
				$$slots: { default: [create_default_slot_10] },
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

			if (dirty & /*$$scope, segment*/ 384) {
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
		id: create_default_slot_9$1.name,
		type: "slot",
		source: "(7:2) <Segment {segment}>",
		ctx
	});

	return block;
}

// (5:0) <SegmentedButton segments={choices} let:segment singleSelect bind:selected>
function create_default_slot_8$1(ctx) {
	let segment;
	let current;

	segment = new Segment({
			props: {
				segment: /*segment*/ ctx[7],
				$$slots: { default: [create_default_slot_9$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(segment.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(segment.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(segment, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const segment_changes = {};
			if (dirty & /*segment*/ 128) segment_changes.segment = /*segment*/ ctx[7];

			if (dirty & /*$$scope, segment*/ 384) {
				segment_changes.$$scope = { dirty, ctx };
			}

			segment.$set(segment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(segment, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$1.name,
		type: "slot",
		source: "(5:0) <SegmentedButton segments={choices} let:segment singleSelect bind:selected>",
		ctx
	});

	return block;
}

// (14:2) <Label>
function create_default_slot_7$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Morning");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Morning");
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
		source: "(14:2) <Label>",
		ctx
	});

	return block;
}

// (13:0) <Button on:click={() => (selected = 'Morning')}>
function create_default_slot_6$1(ctx) {
	let label;
	let current;

	label = new CommonLabel$1({
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
		id: create_default_slot_6$1.name,
		type: "slot",
		source: "(13:0) <Button on:click={() => (selected = 'Morning')}>",
		ctx
	});

	return block;
}

// (17:2) <Label>
function create_default_slot_5$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Afternoon");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Afternoon");
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
		source: "(17:2) <Label>",
		ctx
	});

	return block;
}

// (16:0) <Button on:click={() => (selected = 'Afternoon')}>
function create_default_slot_4$1(ctx) {
	let label;
	let current;

	label = new CommonLabel$1({
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
		id: create_default_slot_4$1.name,
		type: "slot",
		source: "(16:0) <Button on:click={() => (selected = 'Afternoon')}>",
		ctx
	});

	return block;
}

// (20:2) <Label>
function create_default_slot_3$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Evening");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Evening");
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
		id: create_default_slot_3$3.name,
		type: "slot",
		source: "(20:2) <Label>",
		ctx
	});

	return block;
}

// (19:0) <Button on:click={() => (selected = 'Evening')}>
function create_default_slot_2$4(ctx) {
	let label;
	let current;

	label = new CommonLabel$1({
			props: {
				$$slots: { default: [create_default_slot_3$3] },
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
		id: create_default_slot_2$4.name,
		type: "slot",
		source: "(19:0) <Button on:click={() => (selected = 'Evening')}>",
		ctx
	});

	return block;
}

// (23:2) <Label>
function create_default_slot_1$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Night");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Night");
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
		source: "(23:2) <Label>",
		ctx
	});

	return block;
}

// (22:0) <Button on:click={() => (selected = 'Night')}>
function create_default_slot$4(ctx) {
	let label;
	let current;

	label = new CommonLabel$1({
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
		id: create_default_slot$4.name,
		type: "slot",
		source: "(22:0) <Button on:click={() => (selected = 'Night')}>",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let segmentedbutton;
	let updating_selected;
	let t0;
	let div;
	let t1;
	let t2;
	let button0;
	let t3;
	let button1;
	let t4;
	let button2;
	let t5;
	let button3;
	let t6;
	let pre;
	let t7;
	let t8;
	let current;

	function segmentedbutton_selected_binding(value) {
		/*segmentedbutton_selected_binding*/ ctx[2](value);
	}

	let segmentedbutton_props = {
		segments: /*choices*/ ctx[1],
		singleSelect: true,
		$$slots: {
			default: [
				create_default_slot_8$1,
				({ segment }) => ({ 7: segment }),
				({ segment }) => segment ? 128 : 0
			]
		},
		$$scope: { ctx }
	};

	if (/*selected*/ ctx[0] !== void 0) {
		segmentedbutton_props.selected = /*selected*/ ctx[0];
	}

	segmentedbutton = new SegmentedButton({
			props: segmentedbutton_props,
			$$inline: true
		});

	binding_callbacks.push(() => bind(segmentedbutton, "selected", segmentedbutton_selected_binding));

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_6$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[3]);

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[4]);

	button2 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_2$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_2*/ ctx[5]);

	button3 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button3.$on("click", /*click_handler_3*/ ctx[6]);

	const block = {
		c: function create() {
			create_component(segmentedbutton.$$.fragment);
			t0 = space();
			div = element("div");
			t1 = text("Programmatically select:");
			t2 = space();
			create_component(button0.$$.fragment);
			t3 = space();
			create_component(button1.$$.fragment);
			t4 = space();
			create_component(button2.$$.fragment);
			t5 = space();
			create_component(button3.$$.fragment);
			t6 = space();
			pre = element("pre");
			t7 = text("Selected: ");
			t8 = text(/*selected*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(segmentedbutton.$$.fragment, nodes);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			t1 = claim_text(div_nodes, "Programmatically select:");
			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(button0.$$.fragment, nodes);
			t3 = claim_space(nodes);
			claim_component(button1.$$.fragment, nodes);
			t4 = claim_space(nodes);
			claim_component(button2.$$.fragment, nodes);
			t5 = claim_space(nodes);
			claim_component(button3.$$.fragment, nodes);
			t6 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t7 = claim_text(pre_nodes, "Selected: ");
			t8 = claim_text(pre_nodes, /*selected*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "margin-top", "1em");
			add_location(div, file$4, 11, 0, 343);
			attr_dev(pre, "class", "status");
			add_location(pre, file$4, 25, 0, 741);
		},
		m: function mount(target, anchor) {
			mount_component(segmentedbutton, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, t1);
			insert_dev(target, t2, anchor);
			mount_component(button0, target, anchor);
			insert_dev(target, t3, anchor);
			mount_component(button1, target, anchor);
			insert_dev(target, t4, anchor);
			mount_component(button2, target, anchor);
			insert_dev(target, t5, anchor);
			mount_component(button3, target, anchor);
			insert_dev(target, t6, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t7);
			append_dev(pre, t8);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const segmentedbutton_changes = {};

			if (dirty & /*$$scope, segment*/ 384) {
				segmentedbutton_changes.$$scope = { dirty, ctx };
			}

			if (!updating_selected && dirty & /*selected*/ 1) {
				updating_selected = true;
				segmentedbutton_changes.selected = /*selected*/ ctx[0];
				add_flush_callback(() => updating_selected = false);
			}

			segmentedbutton.$set(segmentedbutton_changes);
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
			if (!current || dirty & /*selected*/ 1) set_data_dev(t8, /*selected*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segmentedbutton.$$.fragment, local);
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			transition_in(button3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segmentedbutton.$$.fragment, local);
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			transition_out(button3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(segmentedbutton, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t2);
			destroy_component(button0, detaching);
			if (detaching) detach_dev(t3);
			destroy_component(button1, detaching);
			if (detaching) detach_dev(t4);
			destroy_component(button2, detaching);
			if (detaching) detach_dev(t5);
			destroy_component(button3, detaching);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(pre);
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
	validate_slots("SingleSelection", slots, []);
	let choices = ["Morning", "Afternoon", "Evening", "Night"];
	let selected = "Morning";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SingleSelection> was created with unknown prop '${key}'`);
	});

	function segmentedbutton_selected_binding(value) {
		selected = value;
		$$invalidate(0, selected);
	}

	const click_handler = () => $$invalidate(0, selected = "Morning");
	const click_handler_1 = () => $$invalidate(0, selected = "Afternoon");
	const click_handler_2 = () => $$invalidate(0, selected = "Evening");
	const click_handler_3 = () => $$invalidate(0, selected = "Night");

	$$self.$capture_state = () => ({
		SegmentedButton,
		Segment,
		Button: Button_1,
		Label: CommonLabel$1,
		choices,
		selected
	});

	$$self.$inject_state = $$props => {
		if ("choices" in $$props) $$invalidate(1, choices = $$props.choices);
		if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		selected,
		choices,
		segmentedbutton_selected_binding,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3
	];
}

class SingleSelection extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SingleSelection",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src/routes/demo/segmented-button/_GroupSelection.svelte generated by Svelte v3.37.0 */
const file$3 = "src/routes/demo/segmented-button/_GroupSelection.svelte";

// (3:4) <Label>
function create_default_slot_2$3(ctx) {
	let t_value = /*segment*/ ctx[3] + "";
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
			if (dirty & /*segment*/ 8 && t_value !== (t_value = /*segment*/ ctx[3] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(3:4) <Label>",
		ctx
	});

	return block;
}

// (2:2) <Segment {segment}>
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

			if (dirty & /*$$scope, segment*/ 24) {
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
		source: "(2:2) <Segment {segment}>",
		ctx
	});

	return block;
}

// (1:0) <SegmentedButton segments={choices} let:segment bind:selected>
function create_default_slot$3(ctx) {
	let segment;
	let current;

	segment = new Segment({
			props: {
				segment: /*segment*/ ctx[3],
				$$slots: { default: [create_default_slot_1$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(segment.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(segment.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(segment, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const segment_changes = {};
			if (dirty & /*segment*/ 8) segment_changes.segment = /*segment*/ ctx[3];

			if (dirty & /*$$scope, segment*/ 24) {
				segment_changes.$$scope = { dirty, ctx };
			}

			segment.$set(segment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(segment, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$3.name,
		type: "slot",
		source: "(1:0) <SegmentedButton segments={choices} let:segment bind:selected>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let segmentedbutton;
	let updating_selected;
	let t0;
	let pre;
	let t1;
	let t2_value = /*selected*/ ctx[0].join(", ") + "";
	let t2;
	let current;

	function segmentedbutton_selected_binding(value) {
		/*segmentedbutton_selected_binding*/ ctx[2](value);
	}

	let segmentedbutton_props = {
		segments: /*choices*/ ctx[1],
		$$slots: {
			default: [
				create_default_slot$3,
				({ segment }) => ({ 3: segment }),
				({ segment }) => segment ? 8 : 0
			]
		},
		$$scope: { ctx }
	};

	if (/*selected*/ ctx[0] !== void 0) {
		segmentedbutton_props.selected = /*selected*/ ctx[0];
	}

	segmentedbutton = new SegmentedButton({
			props: segmentedbutton_props,
			$$inline: true
		});

	binding_callbacks.push(() => bind(segmentedbutton, "selected", segmentedbutton_selected_binding));

	const block = {
		c: function create() {
			create_component(segmentedbutton.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Selected: ");
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(segmentedbutton.$$.fragment, nodes);
			t0 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t1 = claim_text(pre_nodes, "Selected: ");
			t2 = claim_text(pre_nodes, t2_value);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$3, 6, 0, 147);
		},
		m: function mount(target, anchor) {
			mount_component(segmentedbutton, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t1);
			append_dev(pre, t2);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const segmentedbutton_changes = {};

			if (dirty & /*$$scope, segment*/ 24) {
				segmentedbutton_changes.$$scope = { dirty, ctx };
			}

			if (!updating_selected && dirty & /*selected*/ 1) {
				updating_selected = true;
				segmentedbutton_changes.selected = /*selected*/ ctx[0];
				add_flush_callback(() => updating_selected = false);
			}

			segmentedbutton.$set(segmentedbutton_changes);
			if ((!current || dirty & /*selected*/ 1) && t2_value !== (t2_value = /*selected*/ ctx[0].join(", ") + "")) set_data_dev(t2, t2_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segmentedbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segmentedbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(segmentedbutton, detaching);
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
	validate_slots("GroupSelection", slots, []);
	let choices = ["Shoes", "Pants", "Shirts", "Hats", "Coats"];
	let selected = ["Shoes", "Shirts", "Coats"];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<GroupSelection> was created with unknown prop '${key}'`);
	});

	function segmentedbutton_selected_binding(value) {
		selected = value;
		$$invalidate(0, selected);
	}

	$$self.$capture_state = () => ({
		SegmentedButton,
		Segment,
		Label: CommonLabel,
		choices,
		selected
	});

	$$self.$inject_state = $$props => {
		if ("choices" in $$props) $$invalidate(1, choices = $$props.choices);
		if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [selected, choices, segmentedbutton_selected_binding];
}

class GroupSelection extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "GroupSelection",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/segmented-button/_IconsKeys.svelte generated by Svelte v3.37.0 */

const file$2 = "src/routes/demo/segmented-button/_IconsKeys.svelte";

// (10:6) <Icon         component={Svg}         style="width: 1em; height: auto;"         viewBox="0 0 24 24"       >
function create_default_slot_9(ctx) {
	let path;
	let path_d_value;

	const block = {
		c: function create() {
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			path = claim_element(nodes, "path", { fill: true, d: true }, 1);
			children(path).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "fill", "currentColor");
			attr_dev(path, "d", path_d_value = /*segment*/ ctx[8].icon);
			add_location(path, file$2, 14, 8, 332);
		},
		m: function mount(target, anchor) {
			insert_dev(target, path, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*segment*/ 256 && path_d_value !== (path_d_value = /*segment*/ ctx[8].icon)) {
				attr_dev(path, "d", path_d_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(path);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9.name,
		type: "slot",
		source: "(10:6) <Icon         component={Svg}         style=\\\"width: 1em; height: auto;\\\"         viewBox=\\\"0 0 24 24\\\"       >",
		ctx
	});

	return block;
}

// (9:4) <Segment {segment} title={segment.name}>
function create_default_slot_8(ctx) {
	let icon;
	let current;

	icon = new CommonIcon({
			props: {
				component: Svg$1,
				style: "width: 1em; height: auto;",
				viewBox: "0 0 24 24",
				$$slots: { default: [create_default_slot_9] },
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

			if (dirty & /*$$scope, segment*/ 768) {
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
		id: create_default_slot_8.name,
		type: "slot",
		source: "(9:4) <Segment {segment} title={segment.name}>",
		ctx
	});

	return block;
}

// (2:2) <SegmentedButton     segments={aligns}     let:segment     singleSelect     bind:selected={align}     key={(segment) => segment.name}   >
function create_default_slot_7(ctx) {
	let segment;
	let current;

	segment = new Segment({
			props: {
				segment: /*segment*/ ctx[8],
				title: /*segment*/ ctx[8].name,
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(segment.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(segment.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(segment, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const segment_changes = {};
			if (dirty & /*segment*/ 256) segment_changes.segment = /*segment*/ ctx[8];
			if (dirty & /*segment*/ 256) segment_changes.title = /*segment*/ ctx[8].name;

			if (dirty & /*$$scope, segment*/ 768) {
				segment_changes.$$scope = { dirty, ctx };
			}

			segment.$set(segment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(segment, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(2:2) <SegmentedButton     segments={aligns}     let:segment     singleSelect     bind:selected={align}     key={(segment) => segment.name}   >",
		ctx
	});

	return block;
}

// (26:6) <Icon         component={Svg}         style="width: 1em; height: auto;"         viewBox="0 0 24 24"       >
function create_default_slot_6(ctx) {
	let path;
	let path_d_value;

	const block = {
		c: function create() {
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			path = claim_element(nodes, "path", { fill: true, d: true }, 1);
			children(path).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "fill", "currentColor");
			attr_dev(path, "d", path_d_value = /*segment*/ ctx[8].icon);
			add_location(path, file$2, 30, 8, 720);
		},
		m: function mount(target, anchor) {
			insert_dev(target, path, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*segment*/ 256 && path_d_value !== (path_d_value = /*segment*/ ctx[8].icon)) {
				attr_dev(path, "d", path_d_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(path);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(26:6) <Icon         component={Svg}         style=\\\"width: 1em; height: auto;\\\"         viewBox=\\\"0 0 24 24\\\"       >",
		ctx
	});

	return block;
}

// (25:4) <Segment {segment} title={segment.name}>
function create_default_slot_5(ctx) {
	let icon;
	let current;

	icon = new CommonIcon({
			props: {
				component: Svg$1,
				style: "width: 1em; height: auto;",
				viewBox: "0 0 24 24",
				$$slots: { default: [create_default_slot_6] },
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

			if (dirty & /*$$scope, segment*/ 768) {
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
		id: create_default_slot_5.name,
		type: "slot",
		source: "(25:4) <Segment {segment} title={segment.name}>",
		ctx
	});

	return block;
}

// (19:2) <SegmentedButton     segments={formats}     let:segment     bind:selected={format}     key={(segment) => segment.name}   >
function create_default_slot_4(ctx) {
	let segment;
	let current;

	segment = new Segment({
			props: {
				segment: /*segment*/ ctx[8],
				title: /*segment*/ ctx[8].name,
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(segment.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(segment.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(segment, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const segment_changes = {};
			if (dirty & /*segment*/ 256) segment_changes.segment = /*segment*/ ctx[8];
			if (dirty & /*segment*/ 256) segment_changes.title = /*segment*/ ctx[8].name;

			if (dirty & /*$$scope, segment*/ 768) {
				segment_changes.$$scope = { dirty, ctx };
			}

			segment.$set(segment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(segment, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(19:2) <SegmentedButton     segments={formats}     let:segment     bind:selected={format}     key={(segment) => segment.name}   >",
		ctx
	});

	return block;
}

// (43:6) <Icon         component={Svg}         style="width: 1em; height: auto;"         viewBox="0 0 24 24"       >
function create_default_slot_3$2(ctx) {
	let path;
	let path_d_value;

	const block = {
		c: function create() {
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			path = claim_element(nodes, "path", { fill: true, d: true }, 1);
			children(path).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "fill", "currentColor");
			attr_dev(path, "d", path_d_value = /*segment*/ ctx[8].icon);
			add_location(path, file$2, 47, 8, 1124);
		},
		m: function mount(target, anchor) {
			insert_dev(target, path, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*segment*/ 256 && path_d_value !== (path_d_value = /*segment*/ ctx[8].icon)) {
				attr_dev(path, "d", path_d_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(path);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$2.name,
		type: "slot",
		source: "(43:6) <Icon         component={Svg}         style=\\\"width: 1em; height: auto;\\\"         viewBox=\\\"0 0 24 24\\\"       >",
		ctx
	});

	return block;
}

// (50:6) <Label>
function create_default_slot_2$2(ctx) {
	let t_value = /*segment*/ ctx[8].name + "";
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
			if (dirty & /*segment*/ 256 && t_value !== (t_value = /*segment*/ ctx[8].name + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(50:6) <Label>",
		ctx
	});

	return block;
}

// (36:4) <Segment       {segment}       on:click$preventDefault={() => {         segment.count++;         actions = actions;       }}     >
function create_default_slot_1$2(ctx) {
	let icon;
	let t;
	let label;
	let current;

	icon = new CommonIcon({
			props: {
				component: Svg$1,
				style: "width: 1em; height: auto;",
				viewBox: "0 0 24 24",
				$$slots: { default: [create_default_slot_3$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_2$2] },
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

			if (dirty & /*$$scope, segment*/ 768) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const label_changes = {};

			if (dirty & /*$$scope, segment*/ 768) {
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
		id: create_default_slot_1$2.name,
		type: "slot",
		source: "(36:4) <Segment       {segment}       on:click$preventDefault={() => {         segment.count++;         actions = actions;       }}     >",
		ctx
	});

	return block;
}

// (35:2) <SegmentedButton segments={actions} let:segment>
function create_default_slot$2(ctx) {
	let segment;
	let current;

	function click_preventDefault_handler() {
		return /*click_preventDefault_handler*/ ctx[7](/*segment*/ ctx[8]);
	}

	segment = new Segment({
			props: {
				segment: /*segment*/ ctx[8],
				$$slots: { default: [create_default_slot_1$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	segment.$on("click$preventDefault", click_preventDefault_handler);

	const block = {
		c: function create() {
			create_component(segment.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(segment.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(segment, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const segment_changes = {};
			if (dirty & /*segment*/ 256) segment_changes.segment = /*segment*/ ctx[8];

			if (dirty & /*$$scope, segment*/ 768) {
				segment_changes.$$scope = { dirty, ctx };
			}

			segment.$set(segment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(segment, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(35:2) <SegmentedButton segments={actions} let:segment>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div;
	let segmentedbutton0;
	let updating_selected;
	let t0;
	let segmentedbutton1;
	let updating_selected_1;
	let t1;
	let segmentedbutton2;
	let t2;
	let pre;
	let t3;
	let t4_value = /*align*/ ctx[1].name + "";
	let t4;
	let t5;

	let t6_value = (/*format*/ ctx[2].length
	? /*format*/ ctx[2].map(func_2).join(" & ")
	: "None") + "";

	let t6;
	let t7;
	let t8_value = /*actions*/ ctx[0].map(func_3).join(", ") + "";
	let t8;
	let current;

	function segmentedbutton0_selected_binding(value) {
		/*segmentedbutton0_selected_binding*/ ctx[5](value);
	}

	let segmentedbutton0_props = {
		segments: /*aligns*/ ctx[3],
		singleSelect: true,
		key: func$1,
		$$slots: {
			default: [
				create_default_slot_7,
				({ segment }) => ({ 8: segment }),
				({ segment }) => segment ? 256 : 0
			]
		},
		$$scope: { ctx }
	};

	if (/*align*/ ctx[1] !== void 0) {
		segmentedbutton0_props.selected = /*align*/ ctx[1];
	}

	segmentedbutton0 = new SegmentedButton({
			props: segmentedbutton0_props,
			$$inline: true
		});

	binding_callbacks.push(() => bind(segmentedbutton0, "selected", segmentedbutton0_selected_binding));

	function segmentedbutton1_selected_binding(value) {
		/*segmentedbutton1_selected_binding*/ ctx[6](value);
	}

	let segmentedbutton1_props = {
		segments: /*formats*/ ctx[4],
		key: func_1,
		$$slots: {
			default: [
				create_default_slot_4,
				({ segment }) => ({ 8: segment }),
				({ segment }) => segment ? 256 : 0
			]
		},
		$$scope: { ctx }
	};

	if (/*format*/ ctx[2] !== void 0) {
		segmentedbutton1_props.selected = /*format*/ ctx[2];
	}

	segmentedbutton1 = new SegmentedButton({
			props: segmentedbutton1_props,
			$$inline: true
		});

	binding_callbacks.push(() => bind(segmentedbutton1, "selected", segmentedbutton1_selected_binding));

	segmentedbutton2 = new SegmentedButton({
			props: {
				segments: /*actions*/ ctx[0],
				$$slots: {
					default: [
						create_default_slot$2,
						({ segment }) => ({ 8: segment }),
						({ segment }) => segment ? 256 : 0
					]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(segmentedbutton0.$$.fragment);
			t0 = space();
			create_component(segmentedbutton1.$$.fragment);
			t1 = space();
			create_component(segmentedbutton2.$$.fragment);
			t2 = space();
			pre = element("pre");
			t3 = text("Aligned: ");
			t4 = text(t4_value);
			t5 = text(", Format: ");
			t6 = text(t6_value);
			t7 = text(", ");
			t8 = text(t8_value);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(segmentedbutton0.$$.fragment, div_nodes);
			t0 = claim_space(div_nodes);
			claim_component(segmentedbutton1.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(segmentedbutton2.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "Aligned: ");
			t4 = claim_text(pre_nodes, t4_value);
			t5 = claim_text(pre_nodes, ", Format: ");
			t6 = claim_text(pre_nodes, t6_value);
			t7 = claim_text(pre_nodes, ", ");
			t8 = claim_text(pre_nodes, t8_value);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "format-bar svelte-s6y09");
			add_location(div, file$2, 0, 0, 0);
			attr_dev(pre, "class", "status");
			add_location(pre, file$2, 54, 0, 1264);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(segmentedbutton0, div, null);
			append_dev(div, t0);
			mount_component(segmentedbutton1, div, null);
			append_dev(div, t1);
			mount_component(segmentedbutton2, div, null);
			insert_dev(target, t2, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t3);
			append_dev(pre, t4);
			append_dev(pre, t5);
			append_dev(pre, t6);
			append_dev(pre, t7);
			append_dev(pre, t8);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const segmentedbutton0_changes = {};

			if (dirty & /*$$scope, segment*/ 768) {
				segmentedbutton0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_selected && dirty & /*align*/ 2) {
				updating_selected = true;
				segmentedbutton0_changes.selected = /*align*/ ctx[1];
				add_flush_callback(() => updating_selected = false);
			}

			segmentedbutton0.$set(segmentedbutton0_changes);
			const segmentedbutton1_changes = {};

			if (dirty & /*$$scope, segment*/ 768) {
				segmentedbutton1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_selected_1 && dirty & /*format*/ 4) {
				updating_selected_1 = true;
				segmentedbutton1_changes.selected = /*format*/ ctx[2];
				add_flush_callback(() => updating_selected_1 = false);
			}

			segmentedbutton1.$set(segmentedbutton1_changes);
			const segmentedbutton2_changes = {};
			if (dirty & /*actions*/ 1) segmentedbutton2_changes.segments = /*actions*/ ctx[0];

			if (dirty & /*$$scope, segment, actions*/ 769) {
				segmentedbutton2_changes.$$scope = { dirty, ctx };
			}

			segmentedbutton2.$set(segmentedbutton2_changes);
			if ((!current || dirty & /*align*/ 2) && t4_value !== (t4_value = /*align*/ ctx[1].name + "")) set_data_dev(t4, t4_value);

			if ((!current || dirty & /*format*/ 4) && t6_value !== (t6_value = (/*format*/ ctx[2].length
			? /*format*/ ctx[2].map(func_2).join(" & ")
			: "None") + "")) set_data_dev(t6, t6_value);

			if ((!current || dirty & /*actions*/ 1) && t8_value !== (t8_value = /*actions*/ ctx[0].map(func_3).join(", ") + "")) set_data_dev(t8, t8_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segmentedbutton0.$$.fragment, local);
			transition_in(segmentedbutton1.$$.fragment, local);
			transition_in(segmentedbutton2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segmentedbutton0.$$.fragment, local);
			transition_out(segmentedbutton1.$$.fragment, local);
			transition_out(segmentedbutton2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(segmentedbutton0);
			destroy_component(segmentedbutton1);
			destroy_component(segmentedbutton2);
			if (detaching) detach_dev(t2);
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

const func$1 = segment => segment.name;
const func_1 = segment => segment.name;
const func_2 = f => f.name;
const func_3 = ({ name, count }) => `${name}s: ${count}`;

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("IconsKeys", slots, []);

	const aligns = [
		{ name: "Left", icon: mdiFormatAlignLeft },
		{
			name: "Center",
			icon: mdiFormatAlignCenter
		},
		{ name: "Right", icon: mdiFormatAlignRight },
		{
			name: "Justify",
			icon: mdiFormatAlignJustify
		}
	];

	const formats = [
		{ name: "Bold", icon: mdiFormatBold },
		{ name: "Italic", icon: mdiFormatItalic },
		{
			name: "Underline",
			icon: mdiFormatUnderline
		}
	];

	const actions = [
		{ name: "Link", icon: mdiLink, count: 0 },
		{ name: "Image", icon: mdiImage, count: 0 }
	];

	let align = aligns[0];
	let format = [];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<IconsKeys> was created with unknown prop '${key}'`);
	});

	function segmentedbutton0_selected_binding(value) {
		align = value;
		$$invalidate(1, align);
	}

	function segmentedbutton1_selected_binding(value) {
		format = value;
		$$invalidate(2, format);
	}

	const click_preventDefault_handler = segment => {
		segment.count++;
		$$invalidate(0, actions);
	};

	$$self.$capture_state = () => ({
		SegmentedButton,
		Segment,
		Icon: CommonIcon,
		Label: CommonLabel,
		Svg: Svg$1,
		mdiFormatAlignLeft,
		mdiFormatAlignCenter,
		mdiFormatAlignRight,
		mdiFormatAlignJustify,
		mdiFormatBold,
		mdiFormatItalic,
		mdiFormatUnderline,
		mdiLink,
		mdiImage,
		aligns,
		formats,
		actions,
		align,
		format
	});

	$$self.$inject_state = $$props => {
		if ("align" in $$props) $$invalidate(1, align = $$props.align);
		if ("format" in $$props) $$invalidate(2, format = $$props.format);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		actions,
		align,
		format,
		aligns,
		formats,
		segmentedbutton0_selected_binding,
		segmentedbutton1_selected_binding,
		click_preventDefault_handler
	];
}

class IconsKeys extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "IconsKeys",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/segmented-button/_Touch.svelte generated by Svelte v3.37.0 */

const file$1 = "src/routes/demo/segmented-button/_Touch.svelte";

// (10:6) <Icon         component={Svg}         style="width: 1em; height: auto;"         viewBox="0 0 24 24"       >
function create_default_slot_3$1(ctx) {
	let path;
	let path_d_value;

	const block = {
		c: function create() {
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			path = claim_element(nodes, "path", { fill: true, d: true }, 1);
			children(path).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path, "fill", "currentColor");
			attr_dev(path, "d", path_d_value = /*segment*/ ctx[3].icon);
			add_location(path, file$1, 14, 8, 311);
		},
		m: function mount(target, anchor) {
			insert_dev(target, path, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*segment*/ 8 && path_d_value !== (path_d_value = /*segment*/ ctx[3].icon)) {
				attr_dev(path, "d", path_d_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(path);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(10:6) <Icon         component={Svg}         style=\\\"width: 1em; height: auto;\\\"         viewBox=\\\"0 0 24 24\\\"       >",
		ctx
	});

	return block;
}

// (9:4) <Segment {segment} touch title={segment.name}>
function create_default_slot_2$1(ctx) {
	let icon;
	let current;

	icon = new CommonIcon({
			props: {
				component: Svg$1,
				style: "width: 1em; height: auto;",
				viewBox: "0 0 24 24",
				$$slots: { default: [create_default_slot_3$1] },
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

			if (dirty & /*$$scope, segment*/ 24) {
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
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(9:4) <Segment {segment} touch title={segment.name}>",
		ctx
	});

	return block;
}

// (8:2) <Wrapper>
function create_default_slot_1$1(ctx) {
	let segment;
	let current;

	segment = new Segment({
			props: {
				segment: /*segment*/ ctx[3],
				touch: true,
				title: /*segment*/ ctx[3].name,
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(segment.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(segment.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(segment, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const segment_changes = {};
			if (dirty & /*segment*/ 8) segment_changes.segment = /*segment*/ ctx[3];
			if (dirty & /*segment*/ 8) segment_changes.title = /*segment*/ ctx[3].name;

			if (dirty & /*$$scope, segment*/ 24) {
				segment_changes.$$scope = { dirty, ctx };
			}

			segment.$set(segment_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segment.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segment.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(segment, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$1.name,
		type: "slot",
		source: "(8:2) <Wrapper>",
		ctx
	});

	return block;
}

// (1:0) <SegmentedButton   segments={aligns}   let:segment   singleSelect   bind:selected={align}   key={(segment) => segment.name} >
function create_default_slot$1(ctx) {
	let wrapper;
	let current;

	wrapper = new Wrapper({
			props: {
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(wrapper.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(wrapper.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(wrapper, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const wrapper_changes = {};

			if (dirty & /*$$scope, segment*/ 24) {
				wrapper_changes.$$scope = { dirty, ctx };
			}

			wrapper.$set(wrapper_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(wrapper.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(wrapper.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(wrapper, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(1:0) <SegmentedButton   segments={aligns}   let:segment   singleSelect   bind:selected={align}   key={(segment) => segment.name} >",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let segmentedbutton;
	let updating_selected;
	let t0;
	let pre;
	let t1;
	let t2_value = /*align*/ ctx[0].name + "";
	let t2;
	let current;

	function segmentedbutton_selected_binding(value) {
		/*segmentedbutton_selected_binding*/ ctx[2](value);
	}

	let segmentedbutton_props = {
		segments: /*aligns*/ ctx[1],
		singleSelect: true,
		key: func,
		$$slots: {
			default: [
				create_default_slot$1,
				({ segment }) => ({ 3: segment }),
				({ segment }) => segment ? 8 : 0
			]
		},
		$$scope: { ctx }
	};

	if (/*align*/ ctx[0] !== void 0) {
		segmentedbutton_props.selected = /*align*/ ctx[0];
	}

	segmentedbutton = new SegmentedButton({
			props: segmentedbutton_props,
			$$inline: true
		});

	binding_callbacks.push(() => bind(segmentedbutton, "selected", segmentedbutton_selected_binding));

	const block = {
		c: function create() {
			create_component(segmentedbutton.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Aligned: ");
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(segmentedbutton.$$.fragment, nodes);
			t0 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t1 = claim_text(pre_nodes, "Aligned: ");
			t2 = claim_text(pre_nodes, t2_value);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$1, 20, 0, 419);
		},
		m: function mount(target, anchor) {
			mount_component(segmentedbutton, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t1);
			append_dev(pre, t2);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const segmentedbutton_changes = {};

			if (dirty & /*$$scope, segment*/ 24) {
				segmentedbutton_changes.$$scope = { dirty, ctx };
			}

			if (!updating_selected && dirty & /*align*/ 1) {
				updating_selected = true;
				segmentedbutton_changes.selected = /*align*/ ctx[0];
				add_flush_callback(() => updating_selected = false);
			}

			segmentedbutton.$set(segmentedbutton_changes);
			if ((!current || dirty & /*align*/ 1) && t2_value !== (t2_value = /*align*/ ctx[0].name + "")) set_data_dev(t2, t2_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(segmentedbutton.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(segmentedbutton.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(segmentedbutton, detaching);
			if (detaching) detach_dev(t0);
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

const func = segment => segment.name;

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Touch", slots, []);

	const aligns = [
		{ name: "Left", icon: mdiFormatAlignLeft },
		{
			name: "Center",
			icon: mdiFormatAlignCenter
		},
		{ name: "Right", icon: mdiFormatAlignRight },
		{
			name: "Justify",
			icon: mdiFormatAlignJustify
		}
	];

	let align = aligns[0];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Touch> was created with unknown prop '${key}'`);
	});

	function segmentedbutton_selected_binding(value) {
		align = value;
		$$invalidate(0, align);
	}

	$$self.$capture_state = () => ({
		SegmentedButton,
		Segment,
		Icon: CommonIcon,
		Wrapper,
		Svg: Svg$1,
		mdiFormatAlignLeft,
		mdiFormatAlignCenter,
		mdiFormatAlignRight,
		mdiFormatAlignJustify,
		aligns,
		align
	});

	$$self.$inject_state = $$props => {
		if ("align" in $$props) $$invalidate(0, align = $$props.align);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [align, aligns, segmentedbutton_selected_binding];
}

class Touch extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Touch",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/segmented-button/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/segmented-button/index.svelte";

// (10:2) <Demo     component={SingleSelection}     file="segmented-button/_SingleSelection.svelte"   >
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Single Selection");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Single Selection");
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
		source: "(10:2) <Demo     component={SingleSelection}     file=\\\"segmented-button/_SingleSelection.svelte\\\"   >",
		ctx
	});

	return block;
}

// (17:2) <Demo     component={GroupSelection}     file="segmented-button/_GroupSelection.svelte"   >
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Group Selection");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Group Selection");
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
		source: "(17:2) <Demo     component={GroupSelection}     file=\\\"segmented-button/_GroupSelection.svelte\\\"   >",
		ctx
	});

	return block;
}

// (24:2) <Demo component={IconsKeys} file="segmented-button/_IconsKeys.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Icons and Keyed Segments");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Icons and Keyed Segments");
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
		source: "(24:2) <Demo component={IconsKeys} file=\\\"segmented-button/_IconsKeys.svelte\\\">",
		ctx
	});

	return block;
}

// (28:2) <Demo component={Touch} file="segmented-button/_Touch.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Increased Touch Target");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Increased Touch Target");
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
		source: "(28:2) <Demo component={Touch} file=\\\"segmented-button/_Touch.svelte\\\">",
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
				component: SingleSelection,
				file: "segmented-button/_SingleSelection.svelte",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: GroupSelection,
				file: "segmented-button/_GroupSelection.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: IconsKeys,
				file: "segmented-button/_IconsKeys.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: Touch,
				file: "segmented-button/_Touch.svelte",
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
			t1 = text("Segmented Button");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/segmented-button");
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ofp8hq\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Segmented Button");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/segmented-button");
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
			document.title = "Segmented Button - SMUI";
			add_location(h2, file, 5, 2, 83);
			attr_dev(pre, "class", "demo-spaced");
			add_location(pre, file, 7, 2, 112);
			add_location(section, file, 4, 0, 71);
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
			const demo0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo0_changes.$$scope = { dirty, ctx };
			}

			demo0.$set(demo0_changes);
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
	validate_slots("Segmented_button", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Segmented_button> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		SingleSelection,
		GroupSelection,
		IconsKeys,
		Touch
	});

	return [];
}

class Segmented_button extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Segmented_button",
			options,
			id: create_fragment.name
		});
	}
}

export default Segmented_button;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjhhMzA4NzUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9zZWdtZW50ZWQtYnV0dG9uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VnbWVudGVkLWJ1dHRvbi9zZWdtZW50ZWQtYnV0dG9uL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWdtZW50ZWQtYnV0dG9uL3NlZ21lbnRlZC1idXR0b24vZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9jbGFzc01hcC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9kaXNwYXRjaC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc2VnbWVudGVkLWJ1dHRvbi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0NvbnRleHRGcmFnbWVudC5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9zZWdtZW50ZWQtYnV0dG9uL1NlZ21lbnRlZEJ1dHRvbi5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9zZWdtZW50ZWQtYnV0dG9uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvc2VnbWVudGVkLWJ1dHRvbi9zZWdtZW50L2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9zZWdtZW50ZWQtYnV0dG9uL3NlZ21lbnQvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvdXRpbC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vZXZlbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc2VnbWVudGVkLWJ1dHRvbi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2RvbS9wb255ZmlsbC5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9yaXBwbGUvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc2VnbWVudGVkLWJ1dHRvbi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3JpcHBsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvc2VnbWVudGVkLWJ1dHRvbi9ub2RlX21vZHVsZXMvQHNtdWkvcmlwcGxlL1JpcHBsZS5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlZ21lbnRlZC1idXR0b24vU2VnbWVudC5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9zZWdtZW50ZWQtYnV0dG9uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vU3Bhbi5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9zZWdtZW50ZWQtYnV0dG9uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vQ29tbW9uTGFiZWwuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvc2VnbWVudGVkLWJ1dHRvbi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0kuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvc2VnbWVudGVkLWJ1dHRvbi9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL1N2Zy5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9zZWdtZW50ZWQtYnV0dG9uL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vQ29tbW9uSWNvbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vc2VnbWVudGVkLWJ1dHRvbi9fU2luZ2xlU2VsZWN0aW9uLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9zZWdtZW50ZWQtYnV0dG9uL19Hcm91cFNlbGVjdGlvbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vc2VnbWVudGVkLWJ1dHRvbi9fSWNvbnNLZXlzLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9zZWdtZW50ZWQtYnV0dG9uL19Ub3VjaC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vc2VnbWVudGVkLWJ1dHRvbi9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogU2VsZWN0b3JzIHVzZWQgYnkgc2VnbWVudGVkLWJ1dHRvblxuICovXG5leHBvcnQgdmFyIHNlbGVjdG9ycyA9IHtcbiAgICBTRUdNRU5UOiAnLm1kYy1zZWdtZW50ZWQtYnV0dG9uX19zZWdtZW50J1xufTtcbi8qKlxuICogRXZlbnRzIHJlY2VpdmVkIG9yIGVtaXR0ZWQgYnkgc2VnbWVudGVkLWJ1dHRvblxuICovXG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcbiAgICBTRUxFQ1RFRDogJ3NlbGVjdGVkJyxcbiAgICBDSEFOR0U6ICdjaGFuZ2UnXG59O1xuLyoqXG4gKiBTdHlsZSBjbGFzc2VzIGZvciBzZWdtZW50ZWQtYnV0dG9uXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBTSU5HTEVfU0VMRUNUOiAnbWRjLXNlZ21lbnRlZC1idXR0b24tLXNpbmdsZS1zZWxlY3QnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcywgX192YWx1ZXMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDU2VnbWVudGVkQnV0dG9uRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDU2VnbWVudGVkQnV0dG9uRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSwgZ2V0U2VnbWVudHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgICAgIHNlbGVjdFNlZ21lbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1bnNlbGVjdFNlZ21lbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlTZWxlY3RlZENoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogU2V0cyBpZGVudGlmaWVkIGNoaWxkIHNlZ21lbnQgdG8gYmUgc2VsZWN0ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbmRleE9yU2VnbWVudElkIE51bWJlciBpbmRleCBvciBzdHJpbmcgc2VnbWVudElkIHRoYXQgaWRlbnRpZmllc1xuICAgICAqIGNoaWxkIHNlZ21lbnRcbiAgICAgKi9cbiAgICBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uLnByb3RvdHlwZS5zZWxlY3RTZWdtZW50ID0gZnVuY3Rpb24gKGluZGV4T3JTZWdtZW50SWQpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnNlbGVjdFNlZ21lbnQoaW5kZXhPclNlZ21lbnRJZCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGlkZW50aWZpZWQgY2hpbGQgc2VnbWVudCB0byBiZSBub3Qgc2VsZWN0ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBpbmRleE9yU2VnbWVudElkIE51bWJlciBpbmRleCBvciBzdHJpbmcgc2VnbWVudElkIHRoYXQgaWRlbnRpZmllc1xuICAgICAqIGNoaWxkIHNlZ21lbnRcbiAgICAgKi9cbiAgICBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uLnByb3RvdHlwZS51bnNlbGVjdFNlZ21lbnQgPSBmdW5jdGlvbiAoaW5kZXhPclNlZ21lbnRJZCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIudW5zZWxlY3RTZWdtZW50KGluZGV4T3JTZWdtZW50SWQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGN1cnJlbnRseSBzZWxlY3RlZCBjaGlsZCBzZWdtZW50cyBhcyByZWFkb25seSBsaXN0IG9mXG4gICAgICogU2VnbWVudERldGFpbHNcbiAgICAgKi9cbiAgICBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRTZWxlY3RlZFNlZ21lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldFNlZ21lbnRzKCkuZmlsdGVyKGZ1bmN0aW9uIChzZWdtZW50RGV0YWlsKSB7IHJldHVybiBzZWdtZW50RGV0YWlsLnNlbGVjdGVkOyB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpbmRleE9yU2VnbWVudElkIE51bWJlciBpbmRleCBvciBzdHJpbmcgc2VnbWVudElkIHRoYXQgaWRlbnRpZmllc1xuICAgICAqIGNoaWxkIHNlZ21lbnRcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgdHJ1ZSBpZiBpZGVudGlmaWVkIGNoaWxkIHNlZ21lbnQgaXMgY3VycmVudGx5IHNlbGVjdGVkLFxuICAgICAqIG90aGVyd2lzZSByZXR1cm5zIGZhbHNlXG4gICAgICovXG4gICAgTURDU2VnbWVudGVkQnV0dG9uRm91bmRhdGlvbi5wcm90b3R5cGUuaXNTZWdtZW50U2VsZWN0ZWQgPSBmdW5jdGlvbiAoaW5kZXhPclNlZ21lbnRJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldFNlZ21lbnRzKCkuc29tZShmdW5jdGlvbiAoc2VnbWVudERldGFpbCkgeyByZXR1cm4gKHNlZ21lbnREZXRhaWwuaW5kZXggPT09IGluZGV4T3JTZWdtZW50SWQgfHxcbiAgICAgICAgICAgIHNlZ21lbnREZXRhaWwuc2VnbWVudElkID09PSBpbmRleE9yU2VnbWVudElkKSAmJlxuICAgICAgICAgICAgc2VnbWVudERldGFpbC5zZWxlY3RlZDsgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgdHJ1ZSBpZiBzZWdtZW50ZWQgYnV0dG9uIGlzIHNpbmdsZSBzZWxlY3QsIG90aGVyd2lzZVxuICAgICAqIHJldHVybnMgZmFsc2VcbiAgICAgKi9cbiAgICBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uLnByb3RvdHlwZS5pc1NpbmdsZVNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLlNJTkdMRV9TRUxFQ1QpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gY2hpbGQgc2VnbWVudCdzIHNlbGVjdGVkIHN0YXR1cyBtYXkgaGF2ZSBjaGFuZ2VkLiBJZiBzZWdtZW50ZWRcbiAgICAgKiBidXR0b24gaXMgc2luZ2xlIHNlbGVjdCwgdW5zZWxlY3RzIGFsbCBjaGlsZCBzZWdtZW50cyBvdGhlciB0aGFuIGlkZW50aWZpZWRcbiAgICAgKiBjaGlsZCBzZWdtZW50LiBGaW5hbGx5LCBlbWl0cyBldmVudCB0byBjbGllbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGV0YWlsIENoaWxkIHNlZ21lbnQgYWZmZWN0ZWQgcmVwcmVzZW50ZWQgYXMgU2VnbWVudERldGFpbFxuICAgICAqIEBldmVudCBjaGFuZ2UgV2l0aCBkZXRhaWwgLSBTZWdtZW50RGV0YWlsXG4gICAgICovXG4gICAgTURDU2VnbWVudGVkQnV0dG9uRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlU2VsZWN0ZWQgPSBmdW5jdGlvbiAoZGV0YWlsKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xlU2VsZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMudW5zZWxlY3RQcmV2U2VsZWN0ZWQoZGV0YWlsLmluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIubm90aWZ5U2VsZWN0ZWRDaGFuZ2UoZGV0YWlsKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgYWxsIGNoaWxkIHNlZ21lbnRzIHRvIGJlIG5vdCBzZWxlY3RlZCBleGNlcHQgZm9yIGNoaWxkIHNlZ21lbnRcbiAgICAgKiBpZGVudGlmaWVkIGJ5IGluZGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgY2hpbGQgc2VnbWVudCB0byBub3QgdW5zZWxlY3RcbiAgICAgKi9cbiAgICBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uLnByb3RvdHlwZS51bnNlbGVjdFByZXZTZWxlY3RlZCA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5nZXRTZWxlY3RlZFNlZ21lbnRzKCkpLCBfYyA9IF9iLm5leHQoKTsgIV9jLmRvbmU7IF9jID0gX2IubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlbGVjdGVkU2VnbWVudCA9IF9jLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFNlZ21lbnQuaW5kZXggIT09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5zZWxlY3RTZWdtZW50KHNlbGVjdGVkU2VnbWVudC5pbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoX2MgJiYgIV9jLmRvbmUgJiYgKF9hID0gX2IucmV0dXJuKSkgX2EuY2FsbChfYik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsImltcG9ydCB7XG4gIGJ1YmJsZSxcbiAgbGlzdGVuLFxuICBwcmV2ZW50X2RlZmF1bHQsXG4gIHN0b3BfcHJvcGFnYXRpb24sXG59IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG5cbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBET00gZXZlbnRzLlxuY29uc3Qgb2xkTW9kaWZpZXJSZWdleCA9IC9eW2Etel0rKD86Oig/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBvdGhlciBldmVudHMuXG5jb25zdCBuZXdNb2RpZmllclJlZ2V4ID0gL15bXiRdKyg/OlxcJCg/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFdmVudHNCdWlsZGVyKGNvbXBvbmVudCkge1xuICAvLyBUaGlzIGlzIG91ciBwc2V1ZG8gJG9uIGZ1bmN0aW9uLiBJdCBpcyBkZWZpbmVkIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgbGV0ICRvbjtcbiAgLy8gVGhpcyBpcyBhIGxpc3Qgb2YgZXZlbnRzIGJvdW5kIGJlZm9yZSBtb3VudC5cbiAgbGV0IGV2ZW50cyA9IFtdO1xuICAvLyBUaGlzIGlzIHRoZSBvcmlnaW5hbCBjb21wb25lbnQgJG9uIGZ1bmN0aW9uLlxuICBjb25zdCBjb21wb25lbnRPbiA9IGNvbXBvbmVudC4kb247XG5cbiAgLy8gQW5kIHdlIG92ZXJyaWRlIHRoZSAkb24gZnVuY3Rpb24gdG8gZm9yd2FyZCBhbGwgYm91bmQgZXZlbnRzLlxuICBjb21wb25lbnQuJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgbGV0IGRlc3RydWN0b3IgPSAoKSA9PiB7fTtcbiAgICBpZiAoJG9uKSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICBkZXN0cnVjdG9yID0gJG9uKGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIGJlZm9yZSBtb3VudCBieSBTdmVsdGUuXG4gICAgICBldmVudHMucHVzaChbZXZlbnRUeXBlLCBjYWxsYmFja10pO1xuICAgIH1cbiAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcblxuICAgIGlmIChvbGRNb2RpZmllck1hdGNoICYmIGNvbnNvbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ0V2ZW50IG1vZGlmaWVycyBpbiBTTVVJIG5vdyB1c2UgXCIkXCIgaW5zdGVhZCBvZiBcIjpcIiwgc28gdGhhdCBhbGwgZXZlbnRzIGNhbiBiZSBib3VuZCB3aXRoIG1vZGlmaWVycy4gUGxlYXNlIHVwZGF0ZSB5b3VyIGV2ZW50IGJpbmRpbmc6ICcsXG4gICAgICAgIGV2ZW50VHlwZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgLy8gUmVtb3ZlIG1vZGlmaWVycyBmcm9tIHRoZSByZWFsIGV2ZW50LlxuICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkb24gZnVuY3Rpb24uXG4gICAgY29uc3QgY29tcG9uZW50RGVzdHJ1Y3RvciA9IGNvbXBvbmVudE9uLmNhbGwoXG4gICAgICBjb21wb25lbnQsXG4gICAgICBldmVudFR5cGUsXG4gICAgICBjYWxsYmFja1xuICAgICk7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGRlc3RydWN0b3IoKTtcbiAgICAgIHJldHVybiBjb21wb25lbnREZXN0cnVjdG9yKC4uLmFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChlKSB7XG4gICAgLy8gSW50ZXJuYWxseSBidWJibGUgdGhlIGV2ZW50IHVwIGZyb20gU3ZlbHRlIGNvbXBvbmVudHMuXG4gICAgYnViYmxlKGNvbXBvbmVudCwgZSk7XG4gIH1cblxuICByZXR1cm4gKG5vZGUpID0+IHtcbiAgICBjb25zdCBkZXN0cnVjdG9ycyA9IFtdO1xuICAgIGNvbnN0IGZvcndhcmREZXN0cnVjdG9ycyA9IHt9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgZm9yd2FyZGluZyBhbGwgYm91bmQgZXZlbnRzLlxuICAgICRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgICBsZXQgaGFuZGxlciA9IGNhbGxiYWNrO1xuICAgICAgLy8gRE9NIGFkZEV2ZW50TGlzdGVuZXIgb3B0aW9ucyBhcmd1bWVudC5cbiAgICAgIGxldCBvcHRpb25zID0gZmFsc2U7XG4gICAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG4gICAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgICAvLyBQYXJzZSB0aGUgZXZlbnQgbW9kaWZpZXJzLlxuICAgICAgICAvLyBTdXBwb3J0ZWQgbW9kaWZpZXJzOlxuICAgICAgICAvLyAtIHByZXZlbnREZWZhdWx0XG4gICAgICAgIC8vIC0gc3RvcFByb3BhZ2F0aW9uXG4gICAgICAgIC8vIC0gcGFzc2l2ZVxuICAgICAgICAvLyAtIG5vbnBhc3NpdmVcbiAgICAgICAgLy8gLSBjYXB0dXJlXG4gICAgICAgIC8vIC0gb25jZVxuICAgICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuZnJvbUVudHJpZXMocGFydHMuc2xpY2UoMSkubWFwKChtb2QpID0+IFttb2QsIHRydWVdKSk7XG4gICAgICAgIGlmIChvcHRpb25zLm5vbnBhc3NpdmUpIHtcbiAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5ub25wYXNzaXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgaGFuZGxlciA9IHByZXZlbnRfZGVmYXVsdChoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcF9wcm9wYWdhdGlvbihoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5zdG9wUHJvcGFnYXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTGlzdGVuIGZvciB0aGUgZXZlbnQgZGlyZWN0bHksIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAgICBjb25zdCBvZmYgPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IGRlc3RydWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIG9mZigpO1xuICAgICAgICBjb25zdCBpZHggPSBkZXN0cnVjdG9ycy5pbmRleE9mKGRlc3RydWN0b3IpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICBkZXN0cnVjdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZGVzdHJ1Y3RvcnMucHVzaChkZXN0cnVjdG9yKTtcblxuICAgICAgLy8gRm9yd2FyZCB0aGUgZXZlbnQgZnJvbSBTdmVsdGUuXG4gICAgICBpZiAoIWV2ZW50VHlwZSBpbiBmb3J3YXJkRGVzdHJ1Y3RvcnMpIHtcbiAgICAgICAgZm9yd2FyZERlc3RydWN0b3JzW2V2ZW50VHlwZV0gPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBmb3J3YXJkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc3RydWN0b3I7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBMaXN0ZW4gdG8gYWxsIHRoZSBldmVudHMgYWRkZWQgYmVmb3JlIG1vdW50LlxuICAgICAgJG9uKGV2ZW50c1tpXVswXSwgZXZlbnRzW2ldWzFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0cnVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRlc3RydWN0b3JzW2ldKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGZvcndhcmRlcnMuXG4gICAgICAgIGZvciAobGV0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKGZvcndhcmREZXN0cnVjdG9ycykpIHtcbiAgICAgICAgICBlbnRyeVsxXSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xhc3NNYXAoY2xhc3NPYmopIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqKVxuICAgIC5maWx0ZXIoKFtuYW1lLCB2YWx1ZV0pID0+IG5hbWUgIT09ICcnICYmIHZhbHVlKVxuICAgIC5tYXAoKFtuYW1lXSkgPT4gbmFtZSlcbiAgICAuam9pbignICcpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BhdGNoKFxuICBlbGVtZW50LFxuICBldmVudFR5cGUsXG4gIGRldGFpbCA9IHt9LFxuICBldmVudEluaXQgPSB7IGJ1YmJsZXM6IHRydWUgfVxuKSB7XG4gIGlmICh0eXBlb2YgRXZlbnQgIT09ICd1bmRlZmluZWQnICYmIGVsZW1lbnQpIHtcbiAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudChldmVudFR5cGUsIGV2ZW50SW5pdCk7XG4gICAgZXZlbnQuZGV0YWlsID0gZGV0YWlsO1xuICAgIGNvbnN0IGVsID0gJ2dldEVsZW1lbnQnIGluIGVsZW1lbnQgPyBlbGVtZW50LmdldEVsZW1lbnQoKSA6IGVsZW1lbnQ7XG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgcmV0dXJuIGV2ZW50O1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdXNlQWN0aW9ucyhub2RlLCBhY3Rpb25zKSB7XG4gIGxldCBvYmplY3RzID0gW107XG5cbiAgaWYgKGFjdGlvbnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgY29uc3QgYWN0aW9uID0gaXNBcnJheSA/IGFjdGlvbnNbaV1bMF0gOiBhY3Rpb25zW2ldO1xuICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSwgYWN0aW9uc1tpXVsxXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUoYWN0aW9ucykge1xuICAgICAgaWYgKCgoYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCkgfHwgMCkgIT0gb2JqZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBub3QgY2hhbmdlIHRoZSBsZW5ndGggb2YgYW4gYWN0aW9ucyBhcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbnMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ3VwZGF0ZScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICAgICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoYWN0aW9uc1tpXVsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvYmplY3RzW2ldICYmICdkZXN0cm95JyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgb2JqZWN0c1tpXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuIiwiPHNsb3Q+PC9zbG90PlxuXG48c2NyaXB0PlxuICBpbXBvcnQge29uRGVzdHJveSwgc2V0Q29udGV4dH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHt3cml0YWJsZX0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcblxuICBleHBvcnQgbGV0IGtleTtcbiAgZXhwb3J0IGxldCB2YWx1ZTtcblxuICBjb25zdCBzdG9yZVZhbHVlID0gd3JpdGFibGUodmFsdWUpO1xuICBzZXRDb250ZXh0KGtleSwgc3RvcmVWYWx1ZSk7XG5cbiAgJDogJHN0b3JlVmFsdWUgPSB2YWx1ZTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIHN0b3JlVmFsdWUuc2V0KHVuZGVmaW5lZCk7XG4gIH0pO1xuPC9zY3JpcHQ+IiwiPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1zZWdtZW50ZWQtYnV0dG9uJzogdHJ1ZSxcbiAgICAnbWRjLXNlZ21lbnRlZC1idXR0b24tLXNpbmdsZS1zZWxlY3QnOiBzaW5nbGVTZWxlY3QsXG4gIH0pfVxuICByb2xlPXtzaW5nbGVTZWxlY3QgPyAncmFkaW9ncm91cCcgOiAnZ3JvdXAnfVxuICBvbjpTTVVJOnNlZ21lbnRlZC1idXR0b246c2VnbWVudDptb3VudD17KGV2ZW50KSA9PiBoYW5kbGVTZWdtZW50TW91bnQoZXZlbnQpfVxuICBvbjpTTVVJOnNlZ21lbnRlZC1idXR0b246c2VnbWVudDp1bm1vdW50PXsoZXZlbnQpID0+XG4gICAgaGFuZGxlU2VnbWVudFVubW91bnQoZXZlbnQpfVxuICBvbjpzZWxlY3RlZD17KGV2ZW50KSA9PiBpbnN0YW5jZSAmJiBpbnN0YW5jZS5oYW5kbGVTZWxlY3RlZChldmVudC5kZXRhaWwpfVxuICB7Li4uJCRyZXN0UHJvcHN9XG4+XG4gIHsjZWFjaCBzZWdtZW50cyBhcyBzZWdtZW50LCBpIChrZXkoc2VnbWVudCkpfVxuICAgIDxDb250ZXh0RnJhZ21lbnQga2V5PVwiU01VSTpzZWdtZW50ZWQtYnV0dG9uOnNlZ21lbnQ6aW5kZXhcIiB2YWx1ZT17aX0+XG4gICAgICA8Q29udGV4dEZyYWdtZW50XG4gICAgICAgIGtleT1cIlNNVUk6c2VnbWVudGVkLWJ1dHRvbjpzZWdtZW50OmluaXRpYWxTZWxlY3RlZFwiXG4gICAgICAgIHZhbHVlPXtpbml0aWFsU2VsZWN0ZWRbaV19XG4gICAgICA+XG4gICAgICAgIDxzbG90IHtzZWdtZW50fSAvPlxuICAgICAgPC9Db250ZXh0RnJhZ21lbnQ+XG4gICAgPC9Db250ZXh0RnJhZ21lbnQ+XG4gIHsvZWFjaH1cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENTZWdtZW50ZWRCdXR0b25Gb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3NlZ21lbnRlZC1idXR0b24vc2VnbWVudGVkLWJ1dHRvbi9mb3VuZGF0aW9uLmpzJztcbiAgaW1wb3J0IHsgb25Nb3VudCwgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgQ29udGV4dEZyYWdtZW50IGZyb20gJ0BzbXVpL2NvbW1vbi9Db250ZXh0RnJhZ21lbnQuc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgc2VnbWVudHMgPSBbXTtcbiAgZXhwb3J0IGxldCBrZXkgPSAoc2VnbWVudCkgPT4gc2VnbWVudDtcbiAgZXhwb3J0IGxldCBzaW5nbGVTZWxlY3QgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBzZWxlY3RlZCA9IHNpbmdsZVNlbGVjdCA/IG51bGwgOiBbXTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgc2VnbWVudEFjY2Vzc29yTWFwID0ge307XG4gIGxldCBzZWdtZW50QWNjZXNzb3JXZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgbGV0IGluaXRpYWxTZWxlY3RlZCA9IHNlZ21lbnRzLm1hcChcbiAgICAoc2VnbWVudElkKSA9PlxuICAgICAgKHNpbmdsZVNlbGVjdCAmJiBzZWxlY3RlZCA9PT0gc2VnbWVudElkKSB8fFxuICAgICAgKCFzaW5nbGVTZWxlY3QgJiYgc2VsZWN0ZWQuaW5kZXhPZihzZWdtZW50SWQpICE9PSAtMSlcbiAgKTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmljb246Y29udGV4dCcsICdzZWdtZW50ZWQtYnV0dG9uJyk7XG4gIHNldENvbnRleHQoJ1NNVUk6bGFiZWw6Y29udGV4dCcsICdzZWdtZW50ZWQtYnV0dG9uJyk7XG4gIHNldENvbnRleHQoJ1NNVUk6c2VnbWVudGVkLWJ1dHRvbjpzaW5nbGVTZWxlY3QnLCBzaW5nbGVTZWxlY3QpO1xuXG4gIGxldCBwcmV2aW91c1NlbGVjdGVkID0gc2luZ2xlU2VsZWN0ID8gc2VsZWN0ZWQgOiBuZXcgU2V0KHNlbGVjdGVkKTtcbiAgJDogaWYgKGluc3RhbmNlICYmIHNpbmdsZVNlbGVjdCAmJiBwcmV2aW91c1NlbGVjdGVkICE9PSBzZWxlY3RlZCkge1xuICAgIGlmIChwcmV2aW91c1NlbGVjdGVkICE9IG51bGwpIHtcbiAgICAgIGluc3RhbmNlLnVuc2VsZWN0U2VnbWVudChwcmV2aW91c1NlbGVjdGVkKTtcbiAgICB9XG4gICAgcHJldmlvdXNTZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgIGluc3RhbmNlLnNlbGVjdFNlZ21lbnQoc2VsZWN0ZWQpO1xuICB9XG4gICQ6IGlmIChpbnN0YW5jZSAmJiAhc2luZ2xlU2VsZWN0KSB7XG4gICAgY29uc3Qgc2V0U2VsZWN0ZWQgPSBuZXcgU2V0KHNlbGVjdGVkKTtcbiAgICBjb25zdCB1blNlbGVjdGVkID0gc2V0RGlmZmVyZW5jZShwcmV2aW91c1NlbGVjdGVkLCBzZXRTZWxlY3RlZCk7XG4gICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBzZXREaWZmZXJlbmNlKHNldFNlbGVjdGVkLCBwcmV2aW91c1NlbGVjdGVkKTtcblxuICAgIGlmICh1blNlbGVjdGVkLnNpemUgfHwgbmV3U2VsZWN0ZWQuc2l6ZSkge1xuICAgICAgcHJldmlvdXNTZWxlY3RlZCA9IHNldFNlbGVjdGVkO1xuXG4gICAgICBmb3IgKGxldCBzZWdtZW50SWQgb2YgdW5TZWxlY3RlZCkge1xuICAgICAgICBjb25zdCBpZHggPSBzZWdtZW50cy5pbmRleE9mKHNlZ21lbnRJZCk7XG4gICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgaW5zdGFuY2UudW5zZWxlY3RTZWdtZW50KGlkeCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAobGV0IHNlZ21lbnRJZCBvZiBuZXdTZWxlY3RlZCkge1xuICAgICAgICBpbnN0YW5jZS5zZWxlY3RTZWdtZW50KHNlZ21lbnRzLmluZGV4T2Yoc2VnbWVudElkKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RGlmZmVyZW5jZShzZXRBLCBzZXRCKSB7XG4gICAgbGV0IF9kaWZmZXJlbmNlID0gbmV3IFNldChzZXRBKTtcbiAgICBmb3IgKGxldCBlbGVtIG9mIHNldEIpIHtcbiAgICAgIF9kaWZmZXJlbmNlLmRlbGV0ZShlbGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIF9kaWZmZXJlbmNlO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDU2VnbWVudGVkQnV0dG9uRm91bmRhdGlvbih7XG4gICAgICBoYXNDbGFzczogKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgICAgfSxcbiAgICAgIGdldFNlZ21lbnRzOiAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzZWdtZW50cy5tYXAoKHNlZ21lbnQsIGluZGV4KSA9PiAoe1xuICAgICAgICAgIGluZGV4LFxuICAgICAgICAgIHNlbGVjdGVkOiBzaW5nbGVTZWxlY3RcbiAgICAgICAgICAgID8gc2VsZWN0ZWQgPT09IHNlZ21lbnRcbiAgICAgICAgICAgIDogc2VsZWN0ZWQuaW5kZXhPZihzZWdtZW50KSAhPT0gLTEsXG4gICAgICAgICAgLy8gc2VnbWVudElkOiBzZWdtZW50LCAvLyBOb3QgbmVjZXNzYXJpbHkgYSBzdHJpbmcuXG4gICAgICAgIH0pKTtcbiAgICAgIH0sXG4gICAgICBzZWxlY3RTZWdtZW50LFxuICAgICAgdW5zZWxlY3RTZWdtZW50LFxuICAgICAgbm90aWZ5U2VsZWN0ZWRDaGFuZ2U6IChkZXRhaWwpID0+IHtcbiAgICAgICAgaWYgKGRldGFpbC5zZWxlY3RlZCkge1xuICAgICAgICAgIHNlbGVjdFNlZ21lbnQoZGV0YWlsLmluZGV4KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bnNlbGVjdFNlZ21lbnQoZGV0YWlsLmluZGV4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ2NoYW5nZScsIGRldGFpbCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBoYW5kbGVTZWdtZW50TW91bnQoZXZlbnQpIHtcbiAgICBjb25zdCBhY2Nlc3NvciA9IGV2ZW50LmRldGFpbDtcblxuICAgIGFkZEFjY2Vzc29yKGFjY2Vzc29yLnNlZ21lbnRJZCwgYWNjZXNzb3IpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU2VnbWVudFVubW91bnQoZXZlbnQpIHtcbiAgICBjb25zdCBhY2Nlc3NvciA9IGV2ZW50LmRldGFpbDtcblxuICAgIHJlbW92ZUFjY2Vzc29yKGFjY2Vzc29yLnNlZ21lbnRJZCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBY2Nlc3NvcihzZWdtZW50SWQpIHtcbiAgICByZXR1cm4gc2VnbWVudElkIGluc3RhbmNlb2YgT2JqZWN0XG4gICAgICA/IHNlZ21lbnRBY2Nlc3NvcldlYWtNYXAuZ2V0KHNlZ21lbnRJZClcbiAgICAgIDogc2VnbWVudEFjY2Vzc29yTWFwW3NlZ21lbnRJZF07XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBY2Nlc3NvcihzZWdtZW50SWQsIGFjY2Vzc29yKSB7XG4gICAgaWYgKHNlZ21lbnRJZCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgc2VnbWVudEFjY2Vzc29yV2Vha01hcC5zZXQoc2VnbWVudElkLCBhY2Nlc3Nvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlZ21lbnRBY2Nlc3Nvck1hcFtzZWdtZW50SWRdID0gYWNjZXNzb3I7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQWNjZXNzb3Ioc2VnbWVudElkKSB7XG4gICAgaWYgKHNlZ21lbnRJZCBpbnN0YW5jZW9mIE9iamVjdCkge1xuICAgICAgc2VnbWVudEFjY2Vzc29yV2Vha01hcC5kZWxldGUoc2VnbWVudElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHNlZ21lbnRBY2Nlc3Nvck1hcFtzZWdtZW50SWRdO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbGVjdFNlZ21lbnQoaW5kZXhPclNlZ21lbnRJZCkge1xuICAgIGxldCBpbmRleCA9IHNlZ21lbnRzLmluZGV4T2YoaW5kZXhPclNlZ21lbnRJZCk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5kZXggPSBpbmRleE9yU2VnbWVudElkO1xuICAgIH1cbiAgICBpZiAoIXNpbmdsZVNlbGVjdCkge1xuICAgICAgY29uc3Qgc2VsSW5kZXggPSBzZWxlY3RlZC5pbmRleE9mKHNlZ21lbnRzW2luZGV4XSk7XG4gICAgICBpZiAoc2VsSW5kZXggPT09IC0xKSB7XG4gICAgICAgIHNlbGVjdGVkLnB1c2goc2VnbWVudHNbaW5kZXhdKTtcbiAgICAgICAgc2VsZWN0ZWQgPSBzZWxlY3RlZDtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNlbGVjdGVkICE9PSBzZWdtZW50c1tpbmRleF0pIHtcbiAgICAgIHNlbGVjdGVkID0gc2VnbWVudHNbaW5kZXhdO1xuICAgIH1cblxuICAgIGdldEFjY2Vzc29yKHNlZ21lbnRzW2luZGV4XSkuc2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5zZWxlY3RTZWdtZW50KGluZGV4T3JTZWdtZW50SWQpIHtcbiAgICBsZXQgaW5kZXggPSBzZWdtZW50cy5pbmRleE9mKGluZGV4T3JTZWdtZW50SWQpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gaW5kZXhPclNlZ21lbnRJZDtcbiAgICB9XG4gICAgaWYgKCFzaW5nbGVTZWxlY3QpIHtcbiAgICAgIGNvbnN0IHNlbEluZGV4ID0gc2VsZWN0ZWQuaW5kZXhPZihzZWdtZW50c1tpbmRleF0pO1xuICAgICAgaWYgKHNlbEluZGV4ICE9PSAtMSkge1xuICAgICAgICBzZWxlY3RlZC5zcGxpY2Uoc2VsSW5kZXgsIDEpO1xuICAgICAgICBzZWxlY3RlZCA9IHNlbGVjdGVkO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWQgPT09IHNlZ21lbnRzW2luZGV4XSkge1xuICAgICAgc2VsZWN0ZWQgPSBudWxsO1xuICAgIH1cblxuICAgIGdldEFjY2Vzc29yKHNlZ21lbnRzW2luZGV4XSkuc2VsZWN0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBCb29sZWFuIHN0cmluZ3MgZm9yIHNlZ21lbnRcbiAqL1xuZXhwb3J0IHZhciBib29sZWFucyA9IHtcbiAgICBUUlVFOiAndHJ1ZScsXG4gICAgRkFMU0U6ICdmYWxzZSdcbn07XG4vKipcbiAqIEF0dHJpYnV0ZXMgcmVmZXJlbmNlZCBieSBzZWdtZW50XG4gKi9cbmV4cG9ydCB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICBBUklBX0NIRUNLRUQ6ICdhcmlhLWNoZWNrZWQnLFxuICAgIEFSSUFfUFJFU1NFRDogJ2FyaWEtcHJlc3NlZCcsXG4gICAgREFUQV9TRUdNRU5UX0lEOiAnZGF0YS1zZWdtZW50LWlkJ1xufTtcbi8qKlxuICogRXZlbnRzIHJlY2VpdmVkIG9yIGVtaXR0ZWQgYnkgc2VnbWVudFxuICovXG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcbiAgICBDTElDSzogJ2NsaWNrJyxcbiAgICBTRUxFQ1RFRDogJ3NlbGVjdGVkJ1xufTtcbi8qKlxuICogU3R5bGUgY2xhc3NlcyBmb3Igc2VnbWVudFxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgU0VMRUNURUQ6ICdtZGMtc2VnbWVudGVkLWJ1dHRvbl9fc2VnbWVudC0tc2VsZWN0ZWQnXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgYXR0cmlidXRlcywgYm9vbGVhbnMsIGNzc0NsYXNzZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgZW1wdHlDbGllbnRSZWN0ID0ge1xuICAgIGJvdHRvbTogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgd2lkdGg6IDAsXG59O1xudmFyIE1EQ1NlZ21lbnRlZEJ1dHRvblNlZ21lbnRGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENTZWdtZW50ZWRCdXR0b25TZWdtZW50Rm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENTZWdtZW50ZWRCdXR0b25TZWdtZW50Rm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHJldHVybiBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDU2VnbWVudGVkQnV0dG9uU2VnbWVudEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1NlZ21lbnRlZEJ1dHRvblNlZ21lbnRGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlzU2luZ2xlU2VsZWN0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSwgZ2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gJyc7IH0sIHNldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LCByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlTZWxlY3RlZENoYW5nZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFJvb3RCb3VuZGluZ0NsaWVudFJlY3Q6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGVtcHR5Q2xpZW50UmVjdDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgdHJ1ZSBpZiBzZWdtZW50IGlzIGN1cnJlbnRseSBzZWxlY3RlZCwgb3RoZXJ3aXNlIHJldHVybnNcbiAgICAgKiBmYWxzZVxuICAgICAqL1xuICAgIE1EQ1NlZ21lbnRlZEJ1dHRvblNlZ21lbnRGb3VuZGF0aW9uLnByb3RvdHlwZS5pc1NlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuU0VMRUNURUQpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBzZWdtZW50IHRvIGJlIHNlbGVjdGVkXG4gICAgICovXG4gICAgTURDU2VnbWVudGVkQnV0dG9uU2VnbWVudEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFNlbGVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5TRUxFQ1RFRCk7XG4gICAgICAgIHRoaXMuc2V0QXJpYUF0dHIoYm9vbGVhbnMuVFJVRSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHNlZ21lbnQgdG8gYmUgbm90IHNlbGVjdGVkXG4gICAgICovXG4gICAgTURDU2VnbWVudGVkQnV0dG9uU2VnbWVudEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFVuc2VsZWN0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLlNFTEVDVEVEKTtcbiAgICAgICAgdGhpcy5zZXRBcmlhQXR0cihib29sZWFucy5GQUxTRSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgc2VnbWVudCdzIHNlZ21lbnRJZCBpZiBpdCB3YXMgc2V0IGJ5IGNsaWVudFxuICAgICAqL1xuICAgIE1EQ1NlZ21lbnRlZEJ1dHRvblNlZ21lbnRGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRTZWdtZW50SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuYWRhcHRlci5nZXRBdHRyKGF0dHJpYnV0ZXMuREFUQV9TRUdNRU5UX0lEKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogdW5kZWZpbmVkO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gc2VnbWVudCBpcyBjbGlja2VkLiBJZiB0aGUgd3JhcHBpbmcgc2VnbWVudGVkIGJ1dHRvbiBpcyBzaW5nbGVcbiAgICAgKiBzZWxlY3QsIGRvZXNuJ3QgYWxsb3cgc2VnbWVudCB0byBiZSBzZXQgdG8gbm90IHNlbGVjdGVkLiBPdGhlcndpc2UsIHRvZ2dsZXNcbiAgICAgKiBzZWdtZW50J3Mgc2VsZWN0ZWQgc3RhdHVzLiBGaW5hbGx5LCBlbWl0cyBldmVudCB0byB3cmFwcGluZyBzZWdtZW50ZWRcbiAgICAgKiBidXR0b24uXG4gICAgICpcbiAgICAgKiBAZXZlbnQgc2VsZWN0ZWQgV2l0aCBkZXRhaWwgLSBTZWdtZW50RGV0YWlsXG4gICAgICovXG4gICAgTURDU2VnbWVudGVkQnV0dG9uU2VnbWVudEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzU2luZ2xlU2VsZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U2VsZWN0ZWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeVNlbGVjdGVkQ2hhbmdlKHRoaXMuaXNTZWxlY3RlZCgpKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEByZXR1cm4gUmV0dXJucyBib3VuZGluZyByZWN0YW5nbGUgZm9yIHJpcHBsZSBlZmZlY3RcbiAgICAgKi9cbiAgICBNRENTZWdtZW50ZWRCdXR0b25TZWdtZW50Rm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RGltZW5zaW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlci5nZXRSb290Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHNlZ21lbnQgZnJvbSBub3Qgc2VsZWN0ZWQgdG8gc2VsZWN0ZWQsIG9yIHNlbGVjdGVkIHRvIG5vdCBzZWxlY3RlZFxuICAgICAqL1xuICAgIE1EQ1NlZ21lbnRlZEJ1dHRvblNlZ21lbnRGb3VuZGF0aW9uLnByb3RvdHlwZS50b2dnbGVTZWxlY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU2VsZWN0ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRVbnNlbGVjdGVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgYXBwcm9wcmlhdGUgYXJpYSBhdHRyaWJ1dGUsIGJhc2VkIG9uIHdyYXBwaW5nIHNlZ21lbnRlZCBidXR0b24nc1xuICAgICAqIHNpbmdsZSBzZWxlY3RlZCB2YWx1ZSwgdG8gbmV3IHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWUgVmFsdWUgdGhhdCByZXByZXNlbnRzIHNlbGVjdGVkIHN0YXR1c1xuICAgICAqL1xuICAgIE1EQ1NlZ21lbnRlZEJ1dHRvblNlZ21lbnRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRBcmlhQXR0ciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzU2luZ2xlU2VsZWN0KCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyKGF0dHJpYnV0ZXMuQVJJQV9DSEVDS0VELCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cihhdHRyaWJ1dGVzLkFSSUFfUFJFU1NFRCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDU2VnbWVudGVkQnV0dG9uU2VnbWVudEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1NlZ21lbnRlZEJ1dHRvblNlZ21lbnRGb3VuZGF0aW9uIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogU3RvcmVzIHJlc3VsdCBmcm9tIHN1cHBvcnRzQ3NzVmFyaWFibGVzIHRvIGF2b2lkIHJlZHVuZGFudCBwcm9jZXNzaW5nIHRvXG4gKiBkZXRlY3QgQ1NTIGN1c3RvbSB2YXJpYWJsZSBzdXBwb3J0LlxuICovXG52YXIgc3VwcG9ydHNDc3NWYXJpYWJsZXNfO1xuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvcnRzQ3NzVmFyaWFibGVzKHdpbmRvd09iaiwgZm9yY2VSZWZyZXNoKSB7XG4gICAgaWYgKGZvcmNlUmVmcmVzaCA9PT0gdm9pZCAwKSB7IGZvcmNlUmVmcmVzaCA9IGZhbHNlOyB9XG4gICAgdmFyIENTUyA9IHdpbmRvd09iai5DU1M7XG4gICAgdmFyIHN1cHBvcnRzQ3NzVmFycyA9IHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICBpZiAodHlwZW9mIHN1cHBvcnRzQ3NzVmFyaWFibGVzXyA9PT0gJ2Jvb2xlYW4nICYmICFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgcmV0dXJuIHN1cHBvcnRzQ3NzVmFyaWFibGVzXztcbiAgICB9XG4gICAgdmFyIHN1cHBvcnRzRnVuY3Rpb25QcmVzZW50ID0gQ1NTICYmIHR5cGVvZiBDU1Muc3VwcG9ydHMgPT09ICdmdW5jdGlvbic7XG4gICAgaWYgKCFzdXBwb3J0c0Z1bmN0aW9uUHJlc2VudCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBleHBsaWNpdGx5U3VwcG9ydHNDc3NWYXJzID0gQ1NTLnN1cHBvcnRzKCctLWNzcy12YXJzJywgJ3llcycpO1xuICAgIC8vIFNlZTogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1NDY2OVxuICAgIC8vIFNlZTogUkVBRE1FIHNlY3Rpb24gb24gU2FmYXJpXG4gICAgdmFyIHdlQXJlRmVhdHVyZURldGVjdGluZ1NhZmFyaTEwcGx1cyA9IChDU1Muc3VwcG9ydHMoJygtLWNzcy12YXJzOiB5ZXMpJykgJiZcbiAgICAgICAgQ1NTLnN1cHBvcnRzKCdjb2xvcicsICcjMDAwMDAwMDAnKSk7XG4gICAgc3VwcG9ydHNDc3NWYXJzID1cbiAgICAgICAgZXhwbGljaXRseVN1cHBvcnRzQ3NzVmFycyB8fCB3ZUFyZUZlYXR1cmVEZXRlY3RpbmdTYWZhcmkxMHBsdXM7XG4gICAgaWYgKCFmb3JjZVJlZnJlc2gpIHtcbiAgICAgICAgc3VwcG9ydHNDc3NWYXJpYWJsZXNfID0gc3VwcG9ydHNDc3NWYXJzO1xuICAgIH1cbiAgICByZXR1cm4gc3VwcG9ydHNDc3NWYXJzO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vcm1hbGl6ZWRFdmVudENvb3JkcyhldnQsIHBhZ2VPZmZzZXQsIGNsaWVudFJlY3QpIHtcbiAgICBpZiAoIWV2dCkge1xuICAgICAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gICAgfVxuICAgIHZhciB4ID0gcGFnZU9mZnNldC54LCB5ID0gcGFnZU9mZnNldC55O1xuICAgIHZhciBkb2N1bWVudFggPSB4ICsgY2xpZW50UmVjdC5sZWZ0O1xuICAgIHZhciBkb2N1bWVudFkgPSB5ICsgY2xpZW50UmVjdC50b3A7XG4gICAgdmFyIG5vcm1hbGl6ZWRYO1xuICAgIHZhciBub3JtYWxpemVkWTtcbiAgICAvLyBEZXRlcm1pbmUgdG91Y2ggcG9pbnQgcmVsYXRpdmUgdG8gdGhlIHJpcHBsZSBjb250YWluZXIuXG4gICAgaWYgKGV2dC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgdmFyIHRvdWNoRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gdG91Y2hFdmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSB0b3VjaEV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIG1vdXNlRXZlbnQgPSBldnQ7XG4gICAgICAgIG5vcm1hbGl6ZWRYID0gbW91c2VFdmVudC5wYWdlWCAtIGRvY3VtZW50WDtcbiAgICAgICAgbm9ybWFsaXplZFkgPSBtb3VzZUV2ZW50LnBhZ2VZIC0gZG9jdW1lbnRZO1xuICAgIH1cbiAgICByZXR1cm4geyB4OiBub3JtYWxpemVkWCwgeTogbm9ybWFsaXplZFkgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWwuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMsIGFuZFxuICogaWYgc28sIHVzZSB0aGVtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlQYXNzaXZlKGdsb2JhbE9iaikge1xuICAgIGlmIChnbG9iYWxPYmogPT09IHZvaWQgMCkgeyBnbG9iYWxPYmogPSB3aW5kb3c7IH1cbiAgICByZXR1cm4gc3VwcG9ydHNQYXNzaXZlT3B0aW9uKGdsb2JhbE9iaikgP1xuICAgICAgICB7IHBhc3NpdmU6IHRydWUgfSA6XG4gICAgICAgIGZhbHNlO1xufVxuZnVuY3Rpb24gc3VwcG9ydHNQYXNzaXZlT3B0aW9uKGdsb2JhbE9iaikge1xuICAgIGlmIChnbG9iYWxPYmogPT09IHZvaWQgMCkgeyBnbG9iYWxPYmogPSB3aW5kb3c7IH1cbiAgICAvLyBTZWVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnRUYXJnZXQvYWRkRXZlbnRMaXN0ZW5lclxuICAgIHZhciBwYXNzaXZlU3VwcG9ydGVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGJyb3dzZXJcbiAgICAgICAgICAgIC8vIGF0dGVtcHRzIHRvIGFjY2VzcyB0aGUgcGFzc2l2ZSBwcm9wZXJ0eS5cbiAgICAgICAgICAgIGdldCBwYXNzaXZlKCkge1xuICAgICAgICAgICAgICAgIHBhc3NpdmVTdXBwb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7IH07XG4gICAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0ZXN0JywgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgICAgIGdsb2JhbE9iai5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0ZXN0JywgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgcGFzc2l2ZVN1cHBvcnRlZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcGFzc2l2ZVN1cHBvcnRlZDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV2ZW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLyoqXG4gKiBVc2VkIHRvIGNvbXB1dGUgdGhlIGVzdGltYXRlZCBzY3JvbGwgd2lkdGggb2YgZWxlbWVudHMuIFdoZW4gYW4gZWxlbWVudCBpc1xuICogaGlkZGVuIGR1ZSB0byBkaXNwbGF5OiBub25lOyBiZWluZyBhcHBsaWVkIHRvIGEgcGFyZW50IGVsZW1lbnQsIHRoZSB3aWR0aCBpc1xuICogcmV0dXJuZWQgYXMgMC4gSG93ZXZlciwgdGhlIGVsZW1lbnQgd2lsbCBoYXZlIGEgdHJ1ZSB3aWR0aCBvbmNlIG5vIGxvbmdlclxuICogaW5zaWRlIGEgZGlzcGxheTogbm9uZSBjb250ZXh0LiBUaGlzIG1ldGhvZCBjb21wdXRlcyBhbiBlc3RpbWF0ZWQgd2lkdGggd2hlblxuICogdGhlIGVsZW1lbnQgaXMgaGlkZGVuIG9yIHJldHVybnMgdGhlIHRydWUgd2lkdGggd2hlbiB0aGUgZWxlbWVudCBpcyB2aXNibGUuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdGhlIGVsZW1lbnQgd2hvc2Ugd2lkdGggdG8gZXN0aW1hdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlU2Nyb2xsV2lkdGgoZWxlbWVudCkge1xuICAgIC8vIENoZWNrIHRoZSBvZmZzZXRQYXJlbnQuIElmIHRoZSBlbGVtZW50IGluaGVyaXRzIGRpc3BsYXk6IG5vbmUgZnJvbSBhbnlcbiAgICAvLyBwYXJlbnQsIHRoZSBvZmZzZXRQYXJlbnQgcHJvcGVydHkgd2lsbCBiZSBudWxsIChzZWVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvb2Zmc2V0UGFyZW50KS5cbiAgICAvLyBUaGlzIGNoZWNrIGVuc3VyZXMgd2Ugb25seSBjbG9uZSB0aGUgbm9kZSB3aGVuIG5lY2Vzc2FyeS5cbiAgICB2YXIgaHRtbEVsID0gZWxlbWVudDtcbiAgICBpZiAoaHRtbEVsLm9mZnNldFBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gaHRtbEVsLnNjcm9sbFdpZHRoO1xuICAgIH1cbiAgICB2YXIgY2xvbmUgPSBodG1sRWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNsb25lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgIGNsb25lLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC05OTk5cHgsIC05OTk5cHgpJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB2YXIgc2Nyb2xsV2lkdGggPSBjbG9uZS5zY3JvbGxXaWR0aDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgIHJldHVybiBzY3JvbGxXaWR0aDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuZXhwb3J0IHZhciBjc3NDbGFzc2VzID0ge1xuICAgIC8vIFJpcHBsZSBpcyBhIHNwZWNpYWwgY2FzZSB3aGVyZSB0aGUgXCJyb290XCIgY29tcG9uZW50IGlzIHJlYWxseSBhIFwibWl4aW5cIiBvZiBzb3J0cyxcbiAgICAvLyBnaXZlbiB0aGF0IGl0J3MgYW4gJ3VwZ3JhZGUnIHRvIGFuIGV4aXN0aW5nIGNvbXBvbmVudC4gVGhhdCBiZWluZyBzYWlkIGl0IGlzIHRoZSByb290XG4gICAgLy8gQ1NTIGNsYXNzIHRoYXQgYWxsIG90aGVyIENTUyBjbGFzc2VzIGRlcml2ZSBmcm9tLlxuICAgIEJHX0ZPQ1VTRUQ6ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1iYWNrZ3JvdW5kLWZvY3VzZWQnLFxuICAgIEZHX0FDVElWQVRJT046ICdtZGMtcmlwcGxlLXVwZ3JhZGVkLS1mb3JlZ3JvdW5kLWFjdGl2YXRpb24nLFxuICAgIEZHX0RFQUNUSVZBVElPTjogJ21kYy1yaXBwbGUtdXBncmFkZWQtLWZvcmVncm91bmQtZGVhY3RpdmF0aW9uJyxcbiAgICBST09UOiAnbWRjLXJpcHBsZS11cGdyYWRlZCcsXG4gICAgVU5CT1VOREVEOiAnbWRjLXJpcHBsZS11cGdyYWRlZC0tdW5ib3VuZGVkJyxcbn07XG5leHBvcnQgdmFyIHN0cmluZ3MgPSB7XG4gICAgVkFSX0ZHX1NDQUxFOiAnLS1tZGMtcmlwcGxlLWZnLXNjYWxlJyxcbiAgICBWQVJfRkdfU0laRTogJy0tbWRjLXJpcHBsZS1mZy1zaXplJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX0VORDogJy0tbWRjLXJpcHBsZS1mZy10cmFuc2xhdGUtZW5kJyxcbiAgICBWQVJfRkdfVFJBTlNMQVRFX1NUQVJUOiAnLS1tZGMtcmlwcGxlLWZnLXRyYW5zbGF0ZS1zdGFydCcsXG4gICAgVkFSX0xFRlQ6ICctLW1kYy1yaXBwbGUtbGVmdCcsXG4gICAgVkFSX1RPUDogJy0tbWRjLXJpcHBsZS10b3AnLFxufTtcbmV4cG9ydCB2YXIgbnVtYmVycyA9IHtcbiAgICBERUFDVElWQVRJT05fVElNRU9VVF9NUzogMjI1LFxuICAgIEZHX0RFQUNUSVZBVElPTl9NUzogMTUwLFxuICAgIElOSVRJQUxfT1JJR0lOX1NDQUxFOiAwLjYsXG4gICAgUEFERElORzogMTAsXG4gICAgVEFQX0RFTEFZX01TOiAzMDAsIC8vIERlbGF5IGJldHdlZW4gdG91Y2ggYW5kIHNpbXVsYXRlZCBtb3VzZSBldmVudHMgb24gdG91Y2ggZGV2aWNlc1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMgfSBmcm9tICcuL3V0aWwnO1xuLy8gQWN0aXZhdGlvbiBldmVudHMgcmVnaXN0ZXJlZCBvbiB0aGUgcm9vdCBlbGVtZW50IG9mIGVhY2ggaW5zdGFuY2UgZm9yIGFjdGl2YXRpb25cbnZhciBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTID0gW1xuICAgICd0b3VjaHN0YXJ0JywgJ3BvaW50ZXJkb3duJywgJ21vdXNlZG93bicsICdrZXlkb3duJyxcbl07XG4vLyBEZWFjdGl2YXRpb24gZXZlbnRzIHJlZ2lzdGVyZWQgb24gZG9jdW1lbnRFbGVtZW50IHdoZW4gYSBwb2ludGVyLXJlbGF0ZWQgZG93biBldmVudCBvY2N1cnNcbnZhciBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUyA9IFtcbiAgICAndG91Y2hlbmQnLCAncG9pbnRlcnVwJywgJ21vdXNldXAnLCAnY29udGV4dG1lbnUnLFxuXTtcbi8vIHNpbXVsdGFuZW91cyBuZXN0ZWQgYWN0aXZhdGlvbnNcbnZhciBhY3RpdmF0ZWRUYXJnZXRzID0gW107XG52YXIgTURDUmlwcGxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENSaXBwbGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ1JpcHBsZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfID0gMDtcbiAgICAgICAgX3RoaXMuZmdTY2FsZV8gPSAnMCc7XG4gICAgICAgIF90aGlzLmZyYW1lXyA9IHsgd2lkdGg6IDAsIGhlaWdodDogMCB9O1xuICAgICAgICBfdGhpcy5pbml0aWFsU2l6ZV8gPSAwO1xuICAgICAgICBfdGhpcy5sYXlvdXRGcmFtZV8gPSAwO1xuICAgICAgICBfdGhpcy5tYXhSYWRpdXNfID0gMDtcbiAgICAgICAgX3RoaXMudW5ib3VuZGVkQ29vcmRzXyA9IHsgbGVmdDogMCwgdG9wOiAwIH07XG4gICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5hY3RpdmF0aW9uQW5pbWF0aW9uSGFzRW5kZWRfID0gdHJ1ZTtcbiAgICAgICAgICAgIF90aGlzLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XygpO1xuICAgICAgICB9O1xuICAgICAgICBfdGhpcy5hY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF90aGlzLmFjdGl2YXRlXyhlKTsgfTtcbiAgICAgICAgX3RoaXMuZGVhY3RpdmF0ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZGVhY3RpdmF0ZV8oKTsgfTtcbiAgICAgICAgX3RoaXMuZm9jdXNIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUZvY3VzKCk7IH07XG4gICAgICAgIF90aGlzLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZUJsdXIoKTsgfTtcbiAgICAgICAgX3RoaXMucmVzaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5sYXlvdXQoKTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENSaXBwbGVGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ1JpcHBsZUZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bWJlcnM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDUmlwcGxlRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwLCBsZWZ0OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwIH0pOyB9LFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRXZlbnRUYXJnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0V2luZG93UGFnZU9mZnNldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gKHsgeDogMCwgeTogMCB9KTsgfSxcbiAgICAgICAgICAgICAgICBpc1N1cmZhY2VBY3RpdmU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNTdXJmYWNlRGlzYWJsZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgaXNVbmJvdW5kZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWU7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJEb2N1bWVudEludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGVDc3NWYXJpYWJsZTogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBzdXBwb3J0c1ByZXNzUmlwcGxlID0gdGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyhzdXBwb3J0c1ByZXNzUmlwcGxlKTtcbiAgICAgICAgaWYgKHN1cHBvcnRzUHJlc3NSaXBwbGUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3NlcywgUk9PVF8xID0gX2EuUk9PVCwgVU5CT1VOREVEXzEgPSBfYS5VTkJPVU5ERUQ7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoUk9PVF8xKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoVU5CT1VOREVEXzEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlcyBuZWVkIGxheW91dCBsb2dpYyBhcHBsaWVkIGltbWVkaWF0ZWx5IHRvIHNldCBjb29yZGluYXRlcyBmb3IgYm90aCBzaGFkZSBhbmQgcmlwcGxlXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmxheW91dEludGVybmFsXygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5zdXBwb3J0c1ByZXNzUmlwcGxlXygpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hY3RpdmF0aW9uVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuYWN0aXZhdGlvblRpbWVyXyk7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0FDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZnRGVhY3RpdmF0aW9uUmVtb3ZhbFRpbWVyXyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5GR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBST09UXzIgPSBfYS5ST09ULCBVTkJPVU5ERURfMiA9IF9hLlVOQk9VTkRFRDtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhST09UXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoVU5CT1VOREVEXzIpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUNzc1ZhcnNfKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlcmVnaXN0ZXJSb290SGFuZGxlcnNfKCk7XG4gICAgICAgIHRoaXMuZGVyZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV2dCBPcHRpb25hbCBldmVudCBjb250YWluaW5nIHBvc2l0aW9uIGluZm9ybWF0aW9uLlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlXyhldnQpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5kZWFjdGl2YXRlXygpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5sYXlvdXRGcmFtZV8pIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMubGF5b3V0RnJhbWVfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxheW91dEZyYW1lXyA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgICAgIF90aGlzLmxheW91dEZyYW1lXyA9IDA7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VW5ib3VuZGVkID0gZnVuY3Rpb24gKHVuYm91bmRlZCkge1xuICAgICAgICB2YXIgVU5CT1VOREVEID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLlVOQk9VTkRFRDtcbiAgICAgICAgaWYgKHVuYm91bmRlZCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKFVOQk9VTkRFRCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoVU5CT1VOREVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hZGFwdGVyLmFkZENsYXNzKE1EQ1JpcHBsZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5CR19GT0NVU0VEKTsgfSk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVCbHVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuQkdfRk9DVVNFRCk7IH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2UgY29tcHV0ZSB0aGlzIHByb3BlcnR5IHNvIHRoYXQgd2UgYXJlIG5vdCBxdWVyeWluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY2xpZW50XG4gICAgICogdW50aWwgdGhlIHBvaW50IGluIHRpbWUgd2hlcmUgdGhlIGZvdW5kYXRpb24gcmVxdWVzdHMgaXQuIFRoaXMgcHJldmVudHMgc2NlbmFyaW9zIHdoZXJlXG4gICAgICogY2xpZW50LXNpZGUgZmVhdHVyZS1kZXRlY3Rpb24gbWF5IGhhcHBlbiB0b28gZWFybHksIHN1Y2ggYXMgd2hlbiBjb21wb25lbnRzIGFyZSByZW5kZXJlZCBvbiB0aGUgc2VydmVyXG4gICAgICogYW5kIHRoZW4gaW5pdGlhbGl6ZWQgYXQgbW91bnQgdGltZSBvbiB0aGUgY2xpZW50LlxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnN1cHBvcnRzUHJlc3NSaXBwbGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnMoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWN0aXZhdGlvbkV2ZW50OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBoYXNEZWFjdGl2YXRpb25VWFJ1bjogZmFsc2UsXG4gICAgICAgICAgICBpc0FjdGl2YXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc1Byb2dyYW1tYXRpYzogZmFsc2UsXG4gICAgICAgICAgICB3YXNBY3RpdmF0ZWRCeVBvaW50ZXI6IGZhbHNlLFxuICAgICAgICAgICAgd2FzRWxlbWVudE1hZGVBY3RpdmU6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH07XG4gICAgLyoqXG4gICAgICogc3VwcG9ydHNQcmVzc1JpcHBsZSBQYXNzZWQgZnJvbSBpbml0IHRvIHNhdmUgYSByZWR1bmRhbnQgZnVuY3Rpb24gY2FsbFxuICAgICAqL1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlZ2lzdGVyUm9vdEhhbmRsZXJzXyA9IGZ1bmN0aW9uIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChzdXBwb3J0c1ByZXNzUmlwcGxlKSB7XG4gICAgICAgICAgICBBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzVW5ib3VuZGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcignZm9jdXMnLCB0aGlzLmZvY3VzSGFuZGxlcl8pO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAna2V5ZG93bicpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBQT0lOVEVSX0RFQUNUSVZBVElPTl9FVkVOVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uIChldnRUeXBlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVyZWdpc3RlclJvb3RIYW5kbGVyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIEFDVElWQVRJT05fRVZFTlRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmFjdGl2YXRlSGFuZGxlcl8pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2ZvY3VzJywgdGhpcy5mb2N1c0hhbmRsZXJfKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXIoJ2JsdXInLCB0aGlzLmJsdXJIYW5kbGVyXyk7XG4gICAgICAgIGlmICh0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyKHRoaXMucmVzaXplSGFuZGxlcl8pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXJlZ2lzdGVyRGVhY3RpdmF0aW9uSGFuZGxlcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcigna2V5dXAnLCB0aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIFBPSU5URVJfREVBQ1RJVkFUSU9OX0VWRU5UX1RZUEVTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckRvY3VtZW50SW50ZXJhY3Rpb25IYW5kbGVyKGV2dFR5cGUsIF90aGlzLmRlYWN0aXZhdGVIYW5kbGVyXyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUucmVtb3ZlQ3NzVmFyc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciByaXBwbGVTdHJpbmdzID0gTURDUmlwcGxlRm91bmRhdGlvbi5zdHJpbmdzO1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJpcHBsZVN0cmluZ3MpO1xuICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdWQVJfJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKHJpcHBsZVN0cmluZ3Nba2V5XSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzU3VyZmFjZURpc2FibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWN0aXZhdGlvblN0YXRlID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXZvaWQgcmVhY3RpbmcgdG8gZm9sbG93LW9uIGV2ZW50cyBmaXJlZCBieSB0b3VjaCBkZXZpY2UgYWZ0ZXIgYW4gYWxyZWFkeS1wcm9jZXNzZWQgdXNlciBpbnRlcmFjdGlvblxuICAgICAgICB2YXIgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgPSB0aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XztcbiAgICAgICAgdmFyIGlzU2FtZUludGVyYWN0aW9uID0gcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQgJiYgZXZ0ICE9PSB1bmRlZmluZWQgJiYgcHJldmlvdXNBY3RpdmF0aW9uRXZlbnQudHlwZSAhPT0gZXZ0LnR5cGU7XG4gICAgICAgIGlmIChpc1NhbWVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCA9IHRydWU7XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS5pc1Byb2dyYW1tYXRpYyA9IGV2dCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUuYWN0aXZhdGlvbkV2ZW50ID0gZXZ0O1xuICAgICAgICBhY3RpdmF0aW9uU3RhdGUud2FzQWN0aXZhdGVkQnlQb2ludGVyID0gYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljID8gZmFsc2UgOiBldnQgIT09IHVuZGVmaW5lZCAmJiAoZXZ0LnR5cGUgPT09ICdtb3VzZWRvd24nIHx8IGV2dC50eXBlID09PSAndG91Y2hzdGFydCcgfHwgZXZ0LnR5cGUgPT09ICdwb2ludGVyZG93bicpO1xuICAgICAgICB2YXIgaGFzQWN0aXZhdGVkQ2hpbGQgPSBldnQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBhY3RpdmF0ZWRUYXJnZXRzLnNvbWUoZnVuY3Rpb24gKHRhcmdldCkgeyByZXR1cm4gX3RoaXMuYWRhcHRlci5jb250YWluc0V2ZW50VGFyZ2V0KHRhcmdldCk7IH0pO1xuICAgICAgICBpZiAoaGFzQWN0aXZhdGVkQ2hpbGQpIHtcbiAgICAgICAgICAgIC8vIEltbWVkaWF0ZWx5IHJlc2V0IGFjdGl2YXRpb24gc3RhdGUsIHdoaWxlIHByZXNlcnZpbmcgbG9naWMgdGhhdCBwcmV2ZW50cyB0b3VjaCBmb2xsb3ctb24gZXZlbnRzXG4gICAgICAgICAgICB0aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChldnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWN0aXZhdGVkVGFyZ2V0cy5wdXNoKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckRlYWN0aXZhdGlvbkhhbmRsZXJzXyhldnQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IHRoaXMuY2hlY2tFbGVtZW50TWFkZUFjdGl2ZV8oZXZ0KTtcbiAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgfVxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gUmVzZXQgYXJyYXkgb24gbmV4dCBmcmFtZSBhZnRlciB0aGUgY3VycmVudCBldmVudCBoYXMgaGFkIGEgY2hhbmNlIHRvIGJ1YmJsZSB0byBwcmV2ZW50IGFuY2VzdG9yIHJpcHBsZXNcbiAgICAgICAgICAgIGFjdGl2YXRlZFRhcmdldHMgPSBbXTtcbiAgICAgICAgICAgIGlmICghYWN0aXZhdGlvblN0YXRlLndhc0VsZW1lbnRNYWRlQWN0aXZlXG4gICAgICAgICAgICAgICAgJiYgZXZ0ICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAmJiAoZXZ0LmtleSA9PT0gJyAnIHx8IGV2dC5rZXlDb2RlID09PSAzMikpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBzcGFjZSB3YXMgcHJlc3NlZCwgdHJ5IGFnYWluIHdpdGhpbiBhbiByQUYgY2FsbCB0byBkZXRlY3QgOmFjdGl2ZSwgYmVjYXVzZSBkaWZmZXJlbnQgVUFzIHJlcG9ydFxuICAgICAgICAgICAgICAgIC8vIGFjdGl2ZSBzdGF0ZXMgaW5jb25zaXN0ZW50bHkgd2hlbiB0aGV5J3JlIGNhbGxlZCB3aXRoaW4gZXZlbnQgaGFuZGxpbmcgY29kZTpcbiAgICAgICAgICAgICAgICAvLyAtIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTYzNTk3MVxuICAgICAgICAgICAgICAgIC8vIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTI5Mzc0MVxuICAgICAgICAgICAgICAgIC8vIFdlIHRyeSBmaXJzdCBvdXRzaWRlIHJBRiB0byBzdXBwb3J0IEVkZ2UsIHdoaWNoIGRvZXMgbm90IGV4aGliaXQgdGhpcyBwcm9ibGVtLCBidXQgd2lsbCBjcmFzaCBpZiBhIENTU1xuICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlIGlzIHNldCB3aXRoaW4gYSByQUYgY2FsbGJhY2sgZm9yIGEgc3VibWl0IGJ1dHRvbiBpbnRlcmFjdGlvbiAoIzIyNDEpLlxuICAgICAgICAgICAgICAgIGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSA9IF90aGlzLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfKGV2dCk7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbmltYXRlQWN0aXZhdGlvbl8oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS53YXNFbGVtZW50TWFkZUFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGFjdGl2YXRpb24gc3RhdGUgaW1tZWRpYXRlbHkgaWYgZWxlbWVudCB3YXMgbm90IG1hZGUgYWN0aXZlLlxuICAgICAgICAgICAgICAgIF90aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSBfdGhpcy5kZWZhdWx0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmNoZWNrRWxlbWVudE1hZGVBY3RpdmVfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICByZXR1cm4gKGV2dCAhPT0gdW5kZWZpbmVkICYmIGV2dC50eXBlID09PSAna2V5ZG93bicpID9cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5pc1N1cmZhY2VBY3RpdmUoKSA6XG4gICAgICAgICAgICB0cnVlO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYW5pbWF0ZUFjdGl2YXRpb25fID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19UUkFOU0xBVEVfU1RBUlQgPSBfYS5WQVJfRkdfVFJBTlNMQVRFX1NUQVJULCBWQVJfRkdfVFJBTlNMQVRFX0VORCA9IF9hLlZBUl9GR19UUkFOU0xBVEVfRU5EO1xuICAgICAgICB2YXIgX2IgPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMsIEZHX0RFQUNUSVZBVElPTiA9IF9iLkZHX0RFQUNUSVZBVElPTiwgRkdfQUNUSVZBVElPTiA9IF9iLkZHX0FDVElWQVRJT047XG4gICAgICAgIHZhciBERUFDVElWQVRJT05fVElNRU9VVF9NUyA9IE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5ERUFDVElWQVRJT05fVElNRU9VVF9NUztcbiAgICAgICAgdGhpcy5sYXlvdXRJbnRlcm5hbF8oKTtcbiAgICAgICAgdmFyIHRyYW5zbGF0ZVN0YXJ0ID0gJyc7XG4gICAgICAgIHZhciB0cmFuc2xhdGVFbmQgPSAnJztcbiAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSkge1xuICAgICAgICAgICAgdmFyIF9jID0gdGhpcy5nZXRGZ1RyYW5zbGF0aW9uQ29vcmRpbmF0ZXNfKCksIHN0YXJ0UG9pbnQgPSBfYy5zdGFydFBvaW50LCBlbmRQb2ludCA9IF9jLmVuZFBvaW50O1xuICAgICAgICAgICAgdHJhbnNsYXRlU3RhcnQgPSBzdGFydFBvaW50LnggKyBcInB4LCBcIiArIHN0YXJ0UG9pbnQueSArIFwicHhcIjtcbiAgICAgICAgICAgIHRyYW5zbGF0ZUVuZCA9IGVuZFBvaW50LnggKyBcInB4LCBcIiArIGVuZFBvaW50LnkgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfU1RBUlQsIHRyYW5zbGF0ZVN0YXJ0KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9GR19UUkFOU0xBVEVfRU5ELCB0cmFuc2xhdGVFbmQpO1xuICAgICAgICAvLyBDYW5jZWwgYW55IG9uZ29pbmcgYWN0aXZhdGlvbi9kZWFjdGl2YXRpb24gYW5pbWF0aW9uc1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5hY3RpdmF0aW9uVGltZXJfKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZmdEZWFjdGl2YXRpb25SZW1vdmFsVGltZXJfKTtcbiAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgIC8vIEZvcmNlIGxheW91dCBpbiBvcmRlciB0byByZS10cmlnZ2VyIHRoZSBhbmltYXRpb24uXG4gICAgICAgIHRoaXMuYWRhcHRlci5jb21wdXRlQm91bmRpbmdSZWN0KCk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhGR19BQ1RJVkFUSU9OKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0aW9uVGltZXJfID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5hY3RpdmF0aW9uVGltZXJDYWxsYmFja18oKTsgfSwgREVBQ1RJVkFUSU9OX1RJTUVPVVRfTVMpO1xuICAgIH07XG4gICAgTURDUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0RmdUcmFuc2xhdGlvbkNvb3JkaW5hdGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBhY3RpdmF0aW9uRXZlbnQgPSBfYS5hY3RpdmF0aW9uRXZlbnQsIHdhc0FjdGl2YXRlZEJ5UG9pbnRlciA9IF9hLndhc0FjdGl2YXRlZEJ5UG9pbnRlcjtcbiAgICAgICAgdmFyIHN0YXJ0UG9pbnQ7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIpIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSBnZXROb3JtYWxpemVkRXZlbnRDb29yZHMoYWN0aXZhdGlvbkV2ZW50LCB0aGlzLmFkYXB0ZXIuZ2V0V2luZG93UGFnZU9mZnNldCgpLCB0aGlzLmFkYXB0ZXIuY29tcHV0ZUJvdW5kaW5nUmVjdCgpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0UG9pbnQgPSB7XG4gICAgICAgICAgICAgICAgeDogdGhpcy5mcmFtZV8ud2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHk6IHRoaXMuZnJhbWVfLmhlaWdodCAvIDIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIC8vIENlbnRlciB0aGUgZWxlbWVudCBhcm91bmQgdGhlIHN0YXJ0IHBvaW50LlxuICAgICAgICBzdGFydFBvaW50ID0ge1xuICAgICAgICAgICAgeDogc3RhcnRQb2ludC54IC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMiksXG4gICAgICAgICAgICB5OiBzdGFydFBvaW50LnkgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGVuZFBvaW50ID0ge1xuICAgICAgICAgICAgeDogKHRoaXMuZnJhbWVfLndpZHRoIC8gMikgLSAodGhpcy5pbml0aWFsU2l6ZV8gLyAyKSxcbiAgICAgICAgICAgIHk6ICh0aGlzLmZyYW1lXy5oZWlnaHQgLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBzdGFydFBvaW50OiBzdGFydFBvaW50LCBlbmRQb2ludDogZW5kUG9pbnQgfTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJ1bkRlYWN0aXZhdGlvblVYTG9naWNJZlJlYWR5XyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgLy8gVGhpcyBtZXRob2QgaXMgY2FsbGVkIGJvdGggd2hlbiBhIHBvaW50aW5nIGRldmljZSBpcyByZWxlYXNlZCwgYW5kIHdoZW4gdGhlIGFjdGl2YXRpb24gYW5pbWF0aW9uIGVuZHMuXG4gICAgICAgIC8vIFRoZSBkZWFjdGl2YXRpb24gYW5pbWF0aW9uIHNob3VsZCBvbmx5IHJ1biBhZnRlciBib3RoIG9mIHRob3NlIG9jY3VyLlxuICAgICAgICB2YXIgRkdfREVBQ1RJVkFUSU9OID0gTURDUmlwcGxlRm91bmRhdGlvbi5jc3NDbGFzc2VzLkZHX0RFQUNUSVZBVElPTjtcbiAgICAgICAgdmFyIF9hID0gdGhpcy5hY3RpdmF0aW9uU3RhdGVfLCBoYXNEZWFjdGl2YXRpb25VWFJ1biA9IF9hLmhhc0RlYWN0aXZhdGlvblVYUnVuLCBpc0FjdGl2YXRlZCA9IF9hLmlzQWN0aXZhdGVkO1xuICAgICAgICB2YXIgYWN0aXZhdGlvbkhhc0VuZGVkID0gaGFzRGVhY3RpdmF0aW9uVVhSdW4gfHwgIWlzQWN0aXZhdGVkO1xuICAgICAgICBpZiAoYWN0aXZhdGlvbkhhc0VuZGVkICYmIHRoaXMuYWN0aXZhdGlvbkFuaW1hdGlvbkhhc0VuZGVkXykge1xuICAgICAgICAgICAgdGhpcy5ybUJvdW5kZWRBY3RpdmF0aW9uQ2xhc3Nlc18oKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhGR19ERUFDVElWQVRJT04pO1xuICAgICAgICAgICAgdGhpcy5mZ0RlYWN0aXZhdGlvblJlbW92YWxUaW1lcl8gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKEZHX0RFQUNUSVZBVElPTik7XG4gICAgICAgICAgICB9LCBudW1iZXJzLkZHX0RFQUNUSVZBVElPTl9NUyk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJtQm91bmRlZEFjdGl2YXRpb25DbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIEZHX0FDVElWQVRJT04gPSBNRENSaXBwbGVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuRkdfQUNUSVZBVElPTjtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKEZHX0FDVElWQVRJT04pO1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25BbmltYXRpb25IYXNFbmRlZF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmNvbXB1dGVCb3VuZGluZ1JlY3QoKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnJlc2V0QWN0aXZhdGlvblN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5wcmV2aW91c0FjdGl2YXRpb25FdmVudF8gPSB0aGlzLmFjdGl2YXRpb25TdGF0ZV8uYWN0aXZhdGlvbkV2ZW50O1xuICAgICAgICB0aGlzLmFjdGl2YXRpb25TdGF0ZV8gPSB0aGlzLmRlZmF1bHRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIC8vIFRvdWNoIGRldmljZXMgbWF5IGZpcmUgYWRkaXRpb25hbCBldmVudHMgZm9yIHRoZSBzYW1lIGludGVyYWN0aW9uIHdpdGhpbiBhIHNob3J0IHRpbWUuXG4gICAgICAgIC8vIFN0b3JlIHRoZSBwcmV2aW91cyBldmVudCB1bnRpbCBpdCdzIHNhZmUgdG8gYXNzdW1lIHRoYXQgc3Vic2VxdWVudCBldmVudHMgYXJlIGZvciBuZXcgaW50ZXJhY3Rpb25zLlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLnByZXZpb3VzQWN0aXZhdGlvbkV2ZW50XyA9IHVuZGVmaW5lZDsgfSwgTURDUmlwcGxlRm91bmRhdGlvbi5udW1iZXJzLlRBUF9ERUxBWV9NUyk7XG4gICAgfTtcbiAgICBNRENSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5kZWFjdGl2YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIGFjdGl2YXRpb25TdGF0ZSA9IHRoaXMuYWN0aXZhdGlvblN0YXRlXztcbiAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGluIHNjZW5hcmlvcyBzdWNoIGFzIHdoZW4geW91IGhhdmUgYSBrZXl1cCBldmVudCB0aGF0IGJsdXJzIHRoZSBlbGVtZW50LlxuICAgICAgICBpZiAoIWFjdGl2YXRpb25TdGF0ZS5pc0FjdGl2YXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzdGF0ZSA9IF9fYXNzaWduKHt9LCBhY3RpdmF0aW9uU3RhdGUpO1xuICAgICAgICBpZiAoYWN0aXZhdGlvblN0YXRlLmlzUHJvZ3JhbW1hdGljKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpOyB9KTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRBY3RpdmF0aW9uU3RhdGVfKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlcmVnaXN0ZXJEZWFjdGl2YXRpb25IYW5kbGVyc18oKTtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuYWN0aXZhdGlvblN0YXRlXy5oYXNEZWFjdGl2YXRpb25VWFJ1biA9IHRydWU7XG4gICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0ZURlYWN0aXZhdGlvbl8oc3RhdGUpO1xuICAgICAgICAgICAgICAgIF90aGlzLnJlc2V0QWN0aXZhdGlvblN0YXRlXygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmFuaW1hdGVEZWFjdGl2YXRpb25fID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgPSBfYS53YXNBY3RpdmF0ZWRCeVBvaW50ZXIsIHdhc0VsZW1lbnRNYWRlQWN0aXZlID0gX2Eud2FzRWxlbWVudE1hZGVBY3RpdmU7XG4gICAgICAgIGlmICh3YXNBY3RpdmF0ZWRCeVBvaW50ZXIgfHwgd2FzRWxlbWVudE1hZGVBY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMucnVuRGVhY3RpdmF0aW9uVVhMb2dpY0lmUmVhZHlfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLmxheW91dEludGVybmFsXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5mcmFtZV8gPSB0aGlzLmFkYXB0ZXIuY29tcHV0ZUJvdW5kaW5nUmVjdCgpO1xuICAgICAgICB2YXIgbWF4RGltID0gTWF0aC5tYXgodGhpcy5mcmFtZV8uaGVpZ2h0LCB0aGlzLmZyYW1lXy53aWR0aCk7XG4gICAgICAgIC8vIFN1cmZhY2UgZGlhbWV0ZXIgaXMgdHJlYXRlZCBkaWZmZXJlbnRseSBmb3IgdW5ib3VuZGVkIHZzLiBib3VuZGVkIHJpcHBsZXMuXG4gICAgICAgIC8vIFVuYm91bmRlZCByaXBwbGUgZGlhbWV0ZXIgaXMgY2FsY3VsYXRlZCBzbWFsbGVyIHNpbmNlIHRoZSBzdXJmYWNlIGlzIGV4cGVjdGVkIHRvIGFscmVhZHkgYmUgcGFkZGVkIGFwcHJvcHJpYXRlbHlcbiAgICAgICAgLy8gdG8gZXh0ZW5kIHRoZSBoaXRib3gsIGFuZCB0aGUgcmlwcGxlIGlzIGV4cGVjdGVkIHRvIG1lZXQgdGhlIGVkZ2VzIG9mIHRoZSBwYWRkZWQgaGl0Ym94ICh3aGljaCBpcyB0eXBpY2FsbHlcbiAgICAgICAgLy8gc3F1YXJlKS4gQm91bmRlZCByaXBwbGVzLCBvbiB0aGUgb3RoZXIgaGFuZCwgYXJlIGZ1bGx5IGV4cGVjdGVkIHRvIGV4cGFuZCBiZXlvbmQgdGhlIHN1cmZhY2UncyBsb25nZXN0IGRpYW1ldGVyXG4gICAgICAgIC8vIChjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBkaWFnb25hbCBwbHVzIGEgY29uc3RhbnQgcGFkZGluZyksIGFuZCBhcmUgY2xpcHBlZCBhdCB0aGUgc3VyZmFjZSdzIGJvcmRlciB2aWFcbiAgICAgICAgLy8gYG92ZXJmbG93OiBoaWRkZW5gLlxuICAgICAgICB2YXIgZ2V0Qm91bmRlZFJhZGl1cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBoeXBvdGVudXNlID0gTWF0aC5zcXJ0KE1hdGgucG93KF90aGlzLmZyYW1lXy53aWR0aCwgMikgKyBNYXRoLnBvdyhfdGhpcy5mcmFtZV8uaGVpZ2h0LCAyKSk7XG4gICAgICAgICAgICByZXR1cm4gaHlwb3RlbnVzZSArIE1EQ1JpcHBsZUZvdW5kYXRpb24ubnVtYmVycy5QQURESU5HO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFJhZGl1c18gPSB0aGlzLmFkYXB0ZXIuaXNVbmJvdW5kZWQoKSA/IG1heERpbSA6IGdldEJvdW5kZWRSYWRpdXMoKTtcbiAgICAgICAgLy8gUmlwcGxlIGlzIHNpemVkIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGxhcmdlc3QgZGltZW5zaW9uIG9mIHRoZSBzdXJmYWNlLCB0aGVuIHNjYWxlcyB1cCB1c2luZyBhIENTUyBzY2FsZSB0cmFuc2Zvcm1cbiAgICAgICAgdmFyIGluaXRpYWxTaXplID0gTWF0aC5mbG9vcihtYXhEaW0gKiBNRENSaXBwbGVGb3VuZGF0aW9uLm51bWJlcnMuSU5JVElBTF9PUklHSU5fU0NBTEUpO1xuICAgICAgICAvLyBVbmJvdW5kZWQgcmlwcGxlIHNpemUgc2hvdWxkIGFsd2F5cyBiZSBldmVuIG51bWJlciB0byBlcXVhbGx5IGNlbnRlciBhbGlnbi5cbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpICYmIGluaXRpYWxTaXplICUgMiAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsU2l6ZV8gPSBpbml0aWFsU2l6ZSAtIDE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxTaXplXyA9IGluaXRpYWxTaXplO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmdTY2FsZV8gPSBcIlwiICsgdGhpcy5tYXhSYWRpdXNfIC8gdGhpcy5pbml0aWFsU2l6ZV87XG4gICAgICAgIHRoaXMudXBkYXRlTGF5b3V0Q3NzVmFyc18oKTtcbiAgICB9O1xuICAgIE1EQ1JpcHBsZUZvdW5kYXRpb24ucHJvdG90eXBlLnVwZGF0ZUxheW91dENzc1ZhcnNfID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EgPSBNRENSaXBwbGVGb3VuZGF0aW9uLnN0cmluZ3MsIFZBUl9GR19TSVpFID0gX2EuVkFSX0ZHX1NJWkUsIFZBUl9MRUZUID0gX2EuVkFSX0xFRlQsIFZBUl9UT1AgPSBfYS5WQVJfVE9QLCBWQVJfRkdfU0NBTEUgPSBfYS5WQVJfRkdfU0NBTEU7XG4gICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfRkdfU0laRSwgdGhpcy5pbml0aWFsU2l6ZV8gKyBcInB4XCIpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIudXBkYXRlQ3NzVmFyaWFibGUoVkFSX0ZHX1NDQUxFLCB0aGlzLmZnU2NhbGVfKTtcbiAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc1VuYm91bmRlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLnVuYm91bmRlZENvb3Jkc18gPSB7XG4gICAgICAgICAgICAgICAgbGVmdDogTWF0aC5yb3VuZCgodGhpcy5mcmFtZV8ud2lkdGggLyAyKSAtICh0aGlzLmluaXRpYWxTaXplXyAvIDIpKSxcbiAgICAgICAgICAgICAgICB0b3A6IE1hdGgucm91bmQoKHRoaXMuZnJhbWVfLmhlaWdodCAvIDIpIC0gKHRoaXMuaW5pdGlhbFNpemVfIC8gMikpLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci51cGRhdGVDc3NWYXJpYWJsZShWQVJfTEVGVCwgdGhpcy51bmJvdW5kZWRDb29yZHNfLmxlZnQgKyBcInB4XCIpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnVwZGF0ZUNzc1ZhcmlhYmxlKFZBUl9UT1AsIHRoaXMudW5ib3VuZGVkQ29vcmRzXy50b3AgKyBcInB4XCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDUmlwcGxlRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDUmlwcGxlRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1JpcHBsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsImltcG9ydCB7IE1EQ1JpcHBsZUZvdW5kYXRpb24sIHV0aWwgfSBmcm9tICdAbWF0ZXJpYWwvcmlwcGxlJztcbmltcG9ydCB7IGV2ZW50cywgcG9ueWZpbGwgfSBmcm9tICdAbWF0ZXJpYWwvZG9tJztcbmltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuY29uc3QgeyBhcHBseVBhc3NpdmUgfSA9IGV2ZW50cztcbmNvbnN0IHsgbWF0Y2hlcyB9ID0gcG9ueWZpbGw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJpcHBsZShcbiAgbm9kZSxcbiAge1xuICAgIHJpcHBsZSA9IHRydWUsXG4gICAgc3VyZmFjZSA9IGZhbHNlLFxuICAgIHVuYm91bmRlZCA9IGZhbHNlLFxuICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgY29sb3IgPSBudWxsLFxuICAgIGFjdGl2ZSA9IG51bGwsXG4gICAgZXZlbnRUYXJnZXQgPSBudWxsLFxuICAgIGFjdGl2ZVRhcmdldCA9IG51bGwsXG4gICAgYWRkQ2xhc3MgPSAoY2xhc3NOYW1lKSA9PiBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSxcbiAgICByZW1vdmVDbGFzcyA9IChjbGFzc05hbWUpID0+IG5vZGUuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpLFxuICAgIGFkZFN0eWxlID0gKG5hbWUsIHZhbHVlKSA9PiBub2RlLnN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKSxcbiAgICBpbml0UHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLFxuICB9ID0ge31cbikge1xuICBsZXQgaW5zdGFuY2U7XG4gIGxldCBhZGRMYXlvdXRMaXN0ZW5lciA9IGdldENvbnRleHQoJ1NNVUk6YWRkTGF5b3V0TGlzdGVuZXInKTtcbiAgbGV0IHJlbW92ZUxheW91dExpc3RlbmVyO1xuICBsZXQgb2xkQWN0aXZlID0gYWN0aXZlO1xuICBsZXQgb2xkRXZlbnRUYXJnZXQgPSBldmVudFRhcmdldDtcbiAgbGV0IG9sZEFjdGl2ZVRhcmdldCA9IGFjdGl2ZVRhcmdldDtcblxuICBmdW5jdGlvbiBoYW5kbGVQcm9wcygpIHtcbiAgICBpZiAoc3VyZmFjZSkge1xuICAgICAgYWRkQ2xhc3MoJ21kYy1yaXBwbGUtc3VyZmFjZScpO1xuICAgICAgaWYgKGNvbG9yID09PSAncHJpbWFyeScpIHtcbiAgICAgICAgYWRkQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXNlY29uZGFyeScpO1xuICAgICAgfSBlbHNlIGlmIChjb2xvciA9PT0gJ3NlY29uZGFyeScpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgYWRkQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXNlY29uZGFyeScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXNlY29uZGFyeScpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhY3RpdmF0aW9uIGZpcnN0LlxuICAgIGlmIChpbnN0YW5jZSAmJiBvbGRBY3RpdmUgIT09IGFjdGl2ZSkge1xuICAgICAgb2xkQWN0aXZlID0gYWN0aXZlO1xuICAgICAgaWYgKGFjdGl2ZSkge1xuICAgICAgICBpbnN0YW5jZS5hY3RpdmF0ZSgpO1xuICAgICAgfSBlbHNlIGlmIChhY3RpdmUgPT09IGZhbHNlKSB7XG4gICAgICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBUaGVuIGNyZWF0ZS9kZXN0cm95IGFuIGluc3RhbmNlLlxuICAgIGlmIChyaXBwbGUgJiYgIWluc3RhbmNlKSB7XG4gICAgICBpbnN0YW5jZSA9IG5ldyBNRENSaXBwbGVGb3VuZGF0aW9uKHtcbiAgICAgICAgYWRkQ2xhc3MsXG4gICAgICAgIGJyb3dzZXJTdXBwb3J0c0Nzc1ZhcnM6ICgpID0+IHV0aWwuc3VwcG9ydHNDc3NWYXJpYWJsZXMod2luZG93KSxcbiAgICAgICAgY29tcHV0ZUJvdW5kaW5nUmVjdDogKCkgPT4gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgICAgY29udGFpbnNFdmVudFRhcmdldDogKHRhcmdldCkgPT4gbm9kZS5jb250YWlucyh0YXJnZXQpLFxuICAgICAgICBkZXJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICksXG4gICAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIChldmVudFRhcmdldCB8fCBub2RlKS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICksXG4gICAgICAgIGRlcmVnaXN0ZXJSZXNpemVIYW5kbGVyOiAoaGFuZGxlcikgPT5cbiAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlciksXG4gICAgICAgIGdldFdpbmRvd1BhZ2VPZmZzZXQ6ICgpID0+ICh7XG4gICAgICAgICAgeDogd2luZG93LnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgIHk6IHdpbmRvdy5wYWdlWU9mZnNldCxcbiAgICAgICAgfSksXG4gICAgICAgIGlzU3VyZmFjZUFjdGl2ZTogKCkgPT5cbiAgICAgICAgICBhY3RpdmUgPT0gbnVsbCA/IG1hdGNoZXMoYWN0aXZlVGFyZ2V0IHx8IG5vZGUsICc6YWN0aXZlJykgOiBhY3RpdmUsXG4gICAgICAgIGlzU3VyZmFjZURpc2FibGVkOiAoKSA9PiAhIWRpc2FibGVkLFxuICAgICAgICBpc1VuYm91bmRlZDogKCkgPT4gISF1bmJvdW5kZWQsXG4gICAgICAgIHJlZ2lzdGVyRG9jdW1lbnRJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgZXZ0VHlwZSxcbiAgICAgICAgICAgIGhhbmRsZXIsXG4gICAgICAgICAgICBhcHBseVBhc3NpdmUoKVxuICAgICAgICAgICksXG4gICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgICAoZXZlbnRUYXJnZXQgfHwgbm9kZSkuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgIGV2dFR5cGUsXG4gICAgICAgICAgICBoYW5kbGVyLFxuICAgICAgICAgICAgYXBwbHlQYXNzaXZlKClcbiAgICAgICAgICApLFxuICAgICAgICByZWdpc3RlclJlc2l6ZUhhbmRsZXI6IChoYW5kbGVyKSA9PlxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVyKSxcbiAgICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICAgIHVwZGF0ZUNzc1ZhcmlhYmxlOiBhZGRTdHlsZSxcbiAgICAgIH0pO1xuXG4gICAgICBpbml0UHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuICAgICAgICBpbnN0YW5jZS5zZXRVbmJvdW5kZWQodW5ib3VuZGVkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UgJiYgIXJpcHBsZSkge1xuICAgICAgaW5pdFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgICAgaW5zdGFuY2UgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTm93IGhhbmRsZSBldmVudC9hY3RpdmUgdGFyZ2V0c1xuICAgIGlmIChcbiAgICAgIGluc3RhbmNlICYmXG4gICAgICAob2xkRXZlbnRUYXJnZXQgIT09IGV2ZW50VGFyZ2V0IHx8IG9sZEFjdGl2ZVRhcmdldCAhPT0gYWN0aXZlVGFyZ2V0KVxuICAgICkge1xuICAgICAgb2xkRXZlbnRUYXJnZXQgPSBldmVudFRhcmdldDtcbiAgICAgIG9sZEFjdGl2ZVRhcmdldCA9IGFjdGl2ZVRhcmdldDtcblxuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuaW5pdCgpO1xuICAgICAgICAgIGluc3RhbmNlLnNldFVuYm91bmRlZCh1bmJvdW5kZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXJpcHBsZSAmJiB1bmJvdW5kZWQpIHtcbiAgICAgIGFkZENsYXNzKCdtZGMtcmlwcGxlLXVwZ3JhZGVkLS11bmJvdW5kZWQnKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVQcm9wcygpO1xuXG4gIGlmIChhZGRMYXlvdXRMaXN0ZW5lcikge1xuICAgIHJlbW92ZUxheW91dExpc3RlbmVyID0gYWRkTGF5b3V0TGlzdGVuZXIobGF5b3V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxheW91dCgpIHtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLmxheW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlKHByb3BzKSB7XG4gICAgICAoe1xuICAgICAgICByaXBwbGUsXG4gICAgICAgIHN1cmZhY2UsXG4gICAgICAgIHVuYm91bmRlZCxcbiAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgIGNvbG9yLFxuICAgICAgICBhY3RpdmUsXG4gICAgICAgIGV2ZW50VGFyZ2V0LFxuICAgICAgICBhY3RpdmVUYXJnZXQsXG4gICAgICAgIGFkZENsYXNzLFxuICAgICAgICByZW1vdmVDbGFzcyxcbiAgICAgICAgYWRkU3R5bGUsXG4gICAgICAgIGluaXRQcm9taXNlLFxuICAgICAgfSA9IHtcbiAgICAgICAgcmlwcGxlOiB0cnVlLFxuICAgICAgICBzdXJmYWNlOiBmYWxzZSxcbiAgICAgICAgdW5ib3VuZGVkOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICBjb2xvcjogbnVsbCxcbiAgICAgICAgYWN0aXZlOiBudWxsLFxuICAgICAgICBldmVudFRhcmdldDogbnVsbCxcbiAgICAgICAgYWN0aXZlVGFyZ2V0OiBudWxsLFxuICAgICAgICBhZGRDbGFzczogKGNsYXNzTmFtZSkgPT4gbm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSksXG4gICAgICAgIHJlbW92ZUNsYXNzOiAoY2xhc3NOYW1lKSA9PiBub2RlLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKSxcbiAgICAgICAgYWRkU3R5bGU6IChuYW1lLCB2YWx1ZSkgPT4gbm9kZS5zdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSksXG4gICAgICAgIGluaXRQcm9taXNlOiBQcm9taXNlLnJlc29sdmUoKSxcbiAgICAgICAgLi4ucHJvcHMsXG4gICAgICB9KTtcbiAgICAgIGhhbmRsZVByb3BzKCk7XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIHJlbW92ZUNsYXNzKCdtZGMtcmlwcGxlLXN1cmZhY2UnKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXByaW1hcnknKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoJ3NtdWktcmlwcGxlLXN1cmZhY2UtLXNlY29uZGFyeScpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVtb3ZlTGF5b3V0TGlzdGVuZXIpIHtcbiAgICAgICAgcmVtb3ZlTGF5b3V0TGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuIiwiPGJ1dHRvblxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTpSaXBwbGU9e3tcbiAgICByaXBwbGUsXG4gICAgdW5ib3VuZGVkOiBmYWxzZSxcbiAgICBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzcyxcbiAgICBhZGRTdHlsZSxcbiAgfX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLXNlZ21lbnRlZC1idXR0b25fX3NlZ21lbnQnOiB0cnVlLFxuICAgICdtZGMtc2VnbWVudGVkLWJ1dHRvbl9fc2VnbWVudC0tdG91Y2gnOiB0b3VjaCxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBzdHlsZT17T2JqZWN0LmVudHJpZXMoaW50ZXJuYWxTdHlsZXMpXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgLmNvbmNhdChbc3R5bGVdKVxuICAgIC5qb2luKCcgJyl9XG4gIHJvbGU9e3NpbmdsZVNlbGVjdCA/ICdyYWRpbycgOiBudWxsfVxuICBhcmlhLXByZXNzZWQ9eyFzaW5nbGVTZWxlY3QgPyAoc2VsZWN0ZWQgPyAndHJ1ZScgOiAnZmFsc2UnKSA6IG51bGx9XG4gIGFyaWEtY2hlY2tlZD17c2luZ2xlU2VsZWN0ID8gKHNlbGVjdGVkID8gJ3RydWUnIDogJ2ZhbHNlJykgOiBudWxsfVxuICBvbjpjbGljaz17KGV2ZW50KSA9PlxuICAgICFldmVudC5kZWZhdWx0UHJldmVudGVkICYmIGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZUNsaWNrKCl9XG4gIHsuLi5pbnRlcm5hbEF0dHJzfVxuICB7Li4uJCRyZXN0UHJvcHN9XG4gID57I2lmIHJpcHBsZX08ZGl2IGNsYXNzPVwibWRjLXNlZ21lbnRlZC1idXR0b25fX3JpcHBsZVwiIC8+ey9pZn08c2xvdFxuICAvPnsjaWYgdG91Y2h9PGRpdiBjbGFzcz1cIm1kYy1zZWdtZW50ZWQtYnV0dG9uX19zZWdtZW50X190b3VjaFwiIC8+ey9pZn08L2J1dHRvblxuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENTZWdtZW50ZWRCdXR0b25TZWdtZW50Rm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9zZWdtZW50ZWQtYnV0dG9uL3NlZ21lbnQvZm91bmRhdGlvbi5qcyc7XG4gIGltcG9ydCB7IG9uTW91bnQsIGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIHVzZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbiAgaW1wb3J0IFJpcHBsZSBmcm9tICdAc211aS9yaXBwbGUnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCBzdHlsZSA9ICcnO1xuICBsZXQgc2VnbWVudElkO1xuICBleHBvcnQgeyBzZWdtZW50SWQgYXMgc2VnbWVudCB9O1xuICBleHBvcnQgbGV0IHJpcHBsZSA9IHRydWU7XG4gIGV4cG9ydCBsZXQgdG91Y2ggPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgaW50ZXJuYWxDbGFzc2VzID0ge307XG4gIGxldCBpbnRlcm5hbFN0eWxlcyA9IHt9O1xuICBsZXQgaW50ZXJuYWxBdHRycyA9IHt9O1xuICBjb25zdCBpbml0aWFsU2VsZWN0ZWRTdG9yZSA9IGdldENvbnRleHQoXG4gICAgJ1NNVUk6c2VnbWVudGVkLWJ1dHRvbjpzZWdtZW50OmluaXRpYWxTZWxlY3RlZCdcbiAgKTtcbiAgbGV0IHNlbGVjdGVkID0gJGluaXRpYWxTZWxlY3RlZFN0b3JlO1xuICBjb25zdCBzaW5nbGVTZWxlY3QgPSBnZXRDb250ZXh0KCdTTVVJOnNlZ21lbnRlZC1idXR0b246c2luZ2xlU2VsZWN0Jyk7XG4gIGNvbnN0IGluZGV4ID0gZ2V0Q29udGV4dCgnU01VSTpzZWdtZW50ZWQtYnV0dG9uOnNlZ21lbnQ6aW5kZXgnKTtcblxuICBpZiAoIXNlZ21lbnRJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdUaGUgc2VnbWVudCBwcm9wZXJ0eSBpcyByZXF1aXJlZCEgSXQgc2hvdWxkIGJlIHBhc3NlZCBkb3duIGZyb20gdGhlIFNlZ21lbnRlZEJ1dHRvbiB0byB0aGUgU2VnbWVudC4nXG4gICAgKTtcbiAgfVxuXG4gICQ6IGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5pc1NlbGVjdGVkKCkgJiYgIXNlbGVjdGVkKSB7XG4gICAgaW5zdGFuY2Uuc2V0VW5zZWxlY3RlZCgpO1xuICB9XG5cbiAgJDogaWYgKGluc3RhbmNlICYmICFpbnN0YW5jZS5pc1NlbGVjdGVkKCkgJiYgc2VsZWN0ZWQpIHtcbiAgICBpbnN0YW5jZS5zZXRTZWxlY3RlZCgpO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDU2VnbWVudGVkQnV0dG9uU2VnbWVudEZvdW5kYXRpb24oe1xuICAgICAgaXNTaW5nbGVTZWxlY3Q6ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNpbmdsZVNlbGVjdDtcbiAgICAgIH0sXG4gICAgICBnZXRBdHRyLFxuICAgICAgc2V0QXR0cjogYWRkQXR0cixcbiAgICAgIGFkZENsYXNzLFxuICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICBoYXNDbGFzcyxcbiAgICAgIG5vdGlmeVNlbGVjdGVkQ2hhbmdlOiAodmFsdWUpID0+IHtcbiAgICAgICAgc2VsZWN0ZWQgPSB2YWx1ZTtcblxuICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdzZWxlY3RlZCcsIHtcbiAgICAgICAgICBpbmRleDogJGluZGV4LFxuICAgICAgICAgIHNlbGVjdGVkLFxuICAgICAgICAgIHNlZ21lbnRJZCxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgZ2V0Um9vdEJvdW5kaW5nQ2xpZW50UmVjdDogKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0RWxlbWVudCgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFjY2Vzc29yID0ge1xuICAgICAgc2VnbWVudElkLFxuICAgICAgZ2V0IHNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICB9LFxuICAgICAgc2V0IHNlbGVjdGVkKHZhbHVlKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICBzZWxlY3RlZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOnNlZ21lbnRlZC1idXR0b246c2VnbWVudDptb3VudCcsIGFjY2Vzc29yKTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOnNlZ21lbnRlZC1idXR0b246c2VnbWVudDp1bm1vdW50JywgYWNjZXNzb3IpO1xuXG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXNcbiAgICAgID8gaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV1cbiAgICAgIDogZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF0dHIobmFtZSkge1xuICAgIHJldHVybiBuYW1lIGluIGludGVybmFsQXR0cnNcbiAgICAgID8gaW50ZXJuYWxBdHRyc1tuYW1lXVxuICAgICAgOiBnZXRFbGVtZW50KCkuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXR0cihuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpbnRlcm5hbEF0dHJzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgaW50ZXJuYWxBdHRyc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGludGVybmFsU3R5bGVzW25hbWVdO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcyA9IGludGVybmFsU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3BhblxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3NwYW5cbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIHVzZUFjdGlvbnMgfSBmcm9tICcuL2ludGVybmFsLmpzJztcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxzdmVsdGU6Y29tcG9uZW50XG4gIHRoaXM9e2NvbXBvbmVudH1cbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U9e1tmb3J3YXJkRXZlbnRzLCAuLi51c2VdfVxuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgICdtZGMtYnV0dG9uX19sYWJlbCc6IGNvbnRleHQgPT09ICdidXR0b24nLFxuICAgICdtZGMtZmFiX19sYWJlbCc6IGNvbnRleHQgPT09ICdmYWInLFxuICAgICdtZGMtdGFiX190ZXh0LWxhYmVsJzogY29udGV4dCA9PT0gJ3RhYicsXG4gICAgJ21kYy1pbWFnZS1saXN0X19sYWJlbCc6IGNvbnRleHQgPT09ICdpbWFnZS1saXN0JyxcbiAgICAnbWRjLXNuYWNrYmFyX19sYWJlbCc6IGNvbnRleHQgPT09ICdzbmFja2JhcicsXG4gICAgJ21kYy1iYW5uZXJfX3RleHQnOiBjb250ZXh0ID09PSAnYmFubmVyJyxcbiAgICAnbWRjLXNlZ21lbnRlZC1idXR0b25fX2xhYmVsJzogY29udGV4dCA9PT0gJ3NlZ21lbnRlZC1idXR0b24nLFxuICAgICdtZGMtZGF0YS10YWJsZV9fcGFnaW5hdGlvbi1yb3dzLXBlci1wYWdlLWxhYmVsJzpcbiAgICAgIGNvbnRleHQgPT09ICdkYXRhLXRhYmxlOnBhZ2luYXRpb24nLFxuICAgICdtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtbGFiZWwnOlxuICAgICAgY29udGV4dCA9PT0gJ2RhdGEtdGFibGU6c29ydGFibGUtaGVhZGVyLWNlbGwnLFxuICB9KX1cbiAgey4uLmNvbnRleHQgPT09ICdzbmFja2JhcicgPyB7ICdhcmlhLWF0b21pYyc6ICdmYWxzZScgfSA6IHt9fVxuICB7dGFiaW5kZXh9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3N2ZWx0ZTpjb21wb25lbnRcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCBjbGFzc01hcCwgdXNlQWN0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgU3BhbiBmcm9tICcuL1NwYW4uc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgZXhwb3J0IGxldCBjb21wb25lbnQgPSBTcGFuO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBnZXRDb250ZXh0KCdTTVVJOmxhYmVsOmNvbnRleHQnKTtcbiAgY29uc3QgdGFiaW5kZXggPSBnZXRDb250ZXh0KCdTTVVJOmxhYmVsOnRhYmluZGV4Jyk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsIjxpIGJpbmQ6dGhpcz17ZWxlbWVudH0gdXNlOnVzZUFjdGlvbnM9e3VzZX0gdXNlOmZvcndhcmRFdmVudHMgey4uLiQkcmVzdFByb3BzfVxuICA+PHNsb3QgLz48L2lcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIHVzZUFjdGlvbnMgfSBmcm9tICcuL2ludGVybmFsLmpzJztcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxzdmcgYmluZDp0aGlzPXtlbGVtZW50fSB1c2U6dXNlQWN0aW9ucz17dXNlfSB1c2U6Zm9yd2FyZEV2ZW50cyB7Li4uJCRyZXN0UHJvcHN9XG4gID48c2xvdCAvPjwvc3ZnXG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCB1c2VBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8c3ZlbHRlOmNvbXBvbmVudFxuICB0aGlzPXtjb21wb25lbnR9XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlPXtbZm9yd2FyZEV2ZW50cywgLi4udXNlXX1cbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWJ1dHRvbl9faWNvbic6IGNvbnRleHQgPT09ICdidXR0b24nLFxuICAgICdtZGMtZmFiX19pY29uJzogY29udGV4dCA9PT0gJ2ZhYicsXG4gICAgJ21kYy1pY29uLWJ1dHRvbl9faWNvbic6IGNvbnRleHQgPT09ICdpY29uLWJ1dHRvbicsXG4gICAgJ21kYy1pY29uLWJ1dHRvbl9faWNvbi0tb24nOiBjb250ZXh0ID09PSAnaWNvbi1idXR0b24nICYmIG9uLFxuICAgICdtZGMtdGFiX19pY29uJzogY29udGV4dCA9PT0gJ3RhYicsXG4gICAgJ21kYy1iYW5uZXJfX2ljb24nOiBjb250ZXh0ID09PSAnYmFubmVyJyxcbiAgICAnbWRjLXNlZ21lbnRlZC1idXR0b25fX2ljb24nOiBjb250ZXh0ID09PSAnc2VnbWVudGVkLWJ1dHRvbicsXG4gIH0pfVxuICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICB7Li4uY29tcG9uZW50ID09PSBTdmcgPyB7IGZvY3VzYWJsZTogJ2ZhbHNlJywgdGFiaW5kZXg6ICctMScgfSA6IHt9fVxuICB7Li4uJCRyZXN0UHJvcHN9PjxzbG90IC8+PC9zdmVsdGU6Y29tcG9uZW50XG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBmb3J3YXJkRXZlbnRzQnVpbGRlciwgY2xhc3NNYXAgfSBmcm9tICcuL2ludGVybmFsLmpzJztcbiAgaW1wb3J0IEkgZnJvbSAnLi9JLnN2ZWx0ZSc7XG4gIGltcG9ydCBTdmcgZnJvbSAnLi9Tdmcuc3ZlbHRlJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgb24gPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcblxuICBleHBvcnQgbGV0IGNvbXBvbmVudCA9IEk7XG5cbiAgY29uc3QgY29udGV4dCA9IGdldENvbnRleHQoJ1NNVUk6aWNvbjpjb250ZXh0Jyk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsIjwhLS1cbiAgTm90ZTogc2VnbWVudHMgbXVzdCBiZSB1bmlxdWUuIChUaGV5IGNhbm5vdCA9PT0gZWFjaCBvdGhlci4pXG4gIElmIHlvdSBuZWVkIHRvIHNob3cgdGhlIHNhbWUgdmFsdWUsIHVzZSBrZXllZCBzZWdtZW50cy5cbi0tPlxuPFNlZ21lbnRlZEJ1dHRvbiBzZWdtZW50cz17Y2hvaWNlc30gbGV0OnNlZ21lbnQgc2luZ2xlU2VsZWN0IGJpbmQ6c2VsZWN0ZWQ+XG4gIDwhLS0gTm90ZTogdGhlIGBzZWdtZW50YCBwcm9wZXJ0eSBpcyByZXF1aXJlZCEgLS0+XG4gIDxTZWdtZW50IHtzZWdtZW50fT5cbiAgICA8TGFiZWw+e3NlZ21lbnR9PC9MYWJlbD5cbiAgPC9TZWdtZW50PlxuPC9TZWdtZW50ZWRCdXR0b24+XG5cbjxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAxZW07XCI+UHJvZ3JhbW1hdGljYWxseSBzZWxlY3Q6PC9kaXY+XG48QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAoc2VsZWN0ZWQgPSAnTW9ybmluZycpfT5cbiAgPExhYmVsPk1vcm5pbmc8L0xhYmVsPlxuPC9CdXR0b24+XG48QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAoc2VsZWN0ZWQgPSAnQWZ0ZXJub29uJyl9PlxuICA8TGFiZWw+QWZ0ZXJub29uPC9MYWJlbD5cbjwvQnV0dG9uPlxuPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gKHNlbGVjdGVkID0gJ0V2ZW5pbmcnKX0+XG4gIDxMYWJlbD5FdmVuaW5nPC9MYWJlbD5cbjwvQnV0dG9uPlxuPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gKHNlbGVjdGVkID0gJ05pZ2h0Jyl9PlxuICA8TGFiZWw+TmlnaHQ8L0xhYmVsPlxuPC9CdXR0b24+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3NlbGVjdGVkfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU2VnbWVudGVkQnV0dG9uLCB7IFNlZ21lbnQgfSBmcm9tICdAc211aS9zZWdtZW50ZWQtYnV0dG9uJztcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tICdAc211aS9idXR0b24nO1xuICBpbXBvcnQgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL2NvbW1vbic7XG5cbiAgbGV0IGNob2ljZXMgPSBbJ01vcm5pbmcnLCAnQWZ0ZXJub29uJywgJ0V2ZW5pbmcnLCAnTmlnaHQnXTtcbiAgbGV0IHNlbGVjdGVkID0gJ01vcm5pbmcnO1xuPC9zY3JpcHQ+XG4iLCI8U2VnbWVudGVkQnV0dG9uIHNlZ21lbnRzPXtjaG9pY2VzfSBsZXQ6c2VnbWVudCBiaW5kOnNlbGVjdGVkPlxuICA8U2VnbWVudCB7c2VnbWVudH0+XG4gICAgPExhYmVsPntzZWdtZW50fTwvTGFiZWw+XG4gIDwvU2VnbWVudD5cbjwvU2VnbWVudGVkQnV0dG9uPlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHtzZWxlY3RlZC5qb2luKCcsICcpfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU2VnbWVudGVkQnV0dG9uLCB7IFNlZ21lbnQsIExhYmVsIH0gZnJvbSAnQHNtdWkvc2VnbWVudGVkLWJ1dHRvbic7XG5cbiAgbGV0IGNob2ljZXMgPSBbJ1Nob2VzJywgJ1BhbnRzJywgJ1NoaXJ0cycsICdIYXRzJywgJ0NvYXRzJ107XG4gIGxldCBzZWxlY3RlZCA9IFsnU2hvZXMnLCAnU2hpcnRzJywgJ0NvYXRzJ107XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJmb3JtYXQtYmFyXCI+XG4gIDxTZWdtZW50ZWRCdXR0b25cbiAgICBzZWdtZW50cz17YWxpZ25zfVxuICAgIGxldDpzZWdtZW50XG4gICAgc2luZ2xlU2VsZWN0XG4gICAgYmluZDpzZWxlY3RlZD17YWxpZ259XG4gICAga2V5PXsoc2VnbWVudCkgPT4gc2VnbWVudC5uYW1lfVxuICA+XG4gICAgPFNlZ21lbnQge3NlZ21lbnR9IHRpdGxlPXtzZWdtZW50Lm5hbWV9PlxuICAgICAgPEljb25cbiAgICAgICAgY29tcG9uZW50PXtTdmd9XG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDFlbTsgaGVpZ2h0OiBhdXRvO1wiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgPlxuICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD17c2VnbWVudC5pY29ufSAvPlxuICAgICAgPC9JY29uPlxuICAgIDwvU2VnbWVudD5cbiAgPC9TZWdtZW50ZWRCdXR0b24+XG4gIDxTZWdtZW50ZWRCdXR0b25cbiAgICBzZWdtZW50cz17Zm9ybWF0c31cbiAgICBsZXQ6c2VnbWVudFxuICAgIGJpbmQ6c2VsZWN0ZWQ9e2Zvcm1hdH1cbiAgICBrZXk9eyhzZWdtZW50KSA9PiBzZWdtZW50Lm5hbWV9XG4gID5cbiAgICA8U2VnbWVudCB7c2VnbWVudH0gdGl0bGU9e3NlZ21lbnQubmFtZX0+XG4gICAgICA8SWNvblxuICAgICAgICBjb21wb25lbnQ9e1N2Z31cbiAgICAgICAgc3R5bGU9XCJ3aWR0aDogMWVtOyBoZWlnaHQ6IGF1dG87XCJcbiAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICA+XG4gICAgICAgIDxwYXRoIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBkPXtzZWdtZW50Lmljb259IC8+XG4gICAgICA8L0ljb24+XG4gICAgPC9TZWdtZW50PlxuICA8L1NlZ21lbnRlZEJ1dHRvbj5cbiAgPFNlZ21lbnRlZEJ1dHRvbiBzZWdtZW50cz17YWN0aW9uc30gbGV0OnNlZ21lbnQ+XG4gICAgPFNlZ21lbnRcbiAgICAgIHtzZWdtZW50fVxuICAgICAgb246Y2xpY2skcHJldmVudERlZmF1bHQ9eygpID0+IHtcbiAgICAgICAgc2VnbWVudC5jb3VudCsrO1xuICAgICAgICBhY3Rpb25zID0gYWN0aW9ucztcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEljb25cbiAgICAgICAgY29tcG9uZW50PXtTdmd9XG4gICAgICAgIHN0eWxlPVwid2lkdGg6IDFlbTsgaGVpZ2h0OiBhdXRvO1wiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgPlxuICAgICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD17c2VnbWVudC5pY29ufSAvPlxuICAgICAgPC9JY29uPlxuICAgICAgPExhYmVsPntzZWdtZW50Lm5hbWV9PC9MYWJlbD5cbiAgICA8L1NlZ21lbnQ+XG4gIDwvU2VnbWVudGVkQnV0dG9uPlxuPC9kaXY+XG5cbjxwcmVcbiAgY2xhc3M9XCJzdGF0dXNcIj5BbGlnbmVkOiB7YWxpZ24ubmFtZX0sIEZvcm1hdDoge2Zvcm1hdC5sZW5ndGggPyBmb3JtYXQubWFwKGYgPT4gZi5uYW1lKS5qb2luKCcgJiAnKSA6ICdOb25lJ30sIHthY3Rpb25zLm1hcCgoe25hbWUsIGNvdW50fSkgPT4gYCR7bmFtZX1zOiAke2NvdW50fWApLmpvaW4oJywgJyl9PC9wcmU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTZWdtZW50ZWRCdXR0b24sIHtcbiAgICBTZWdtZW50LFxuICAgIEljb24sXG4gICAgTGFiZWwsXG4gIH0gZnJvbSAnQHNtdWkvc2VnbWVudGVkLWJ1dHRvbic7XG4gIGltcG9ydCBTdmcgZnJvbSAnQHNtdWkvY29tbW9uL1N2Zy5zdmVsdGUnO1xuICBpbXBvcnQge1xuICAgIG1kaUZvcm1hdEFsaWduTGVmdCxcbiAgICBtZGlGb3JtYXRBbGlnbkNlbnRlcixcbiAgICBtZGlGb3JtYXRBbGlnblJpZ2h0LFxuICAgIG1kaUZvcm1hdEFsaWduSnVzdGlmeSxcbiAgICBtZGlGb3JtYXRCb2xkLFxuICAgIG1kaUZvcm1hdEl0YWxpYyxcbiAgICBtZGlGb3JtYXRVbmRlcmxpbmUsXG4gICAgbWRpTGluayxcbiAgICBtZGlJbWFnZSxcbiAgfSBmcm9tICdAbWRpL2pzJztcblxuICBjb25zdCBhbGlnbnMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0xlZnQnLFxuICAgICAgaWNvbjogbWRpRm9ybWF0QWxpZ25MZWZ0LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NlbnRlcicsXG4gICAgICBpY29uOiBtZGlGb3JtYXRBbGlnbkNlbnRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdSaWdodCcsXG4gICAgICBpY29uOiBtZGlGb3JtYXRBbGlnblJpZ2h0LFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0p1c3RpZnknLFxuICAgICAgaWNvbjogbWRpRm9ybWF0QWxpZ25KdXN0aWZ5LFxuICAgIH0sXG4gIF07XG4gIGNvbnN0IGZvcm1hdHMgPSBbXG4gICAgeyBuYW1lOiAnQm9sZCcsIGljb246IG1kaUZvcm1hdEJvbGQgfSxcbiAgICB7IG5hbWU6ICdJdGFsaWMnLCBpY29uOiBtZGlGb3JtYXRJdGFsaWMgfSxcbiAgICB7IG5hbWU6ICdVbmRlcmxpbmUnLCBpY29uOiBtZGlGb3JtYXRVbmRlcmxpbmUgfSxcbiAgXTtcbiAgY29uc3QgYWN0aW9ucyA9IFtcbiAgICB7IG5hbWU6ICdMaW5rJywgaWNvbjogbWRpTGluaywgY291bnQ6IDAgfSxcbiAgICB7IG5hbWU6ICdJbWFnZScsIGljb246IG1kaUltYWdlLCBjb3VudDogMCB9LFxuICBdO1xuXG4gIGxldCBhbGlnbiA9IGFsaWduc1swXTtcbiAgbGV0IGZvcm1hdCA9IFtdO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmZvcm1hdC1iYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmZvcm1hdC1iYXIgPiA6Z2xvYmFsKCopIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgfVxuXG4gIC5mb3JtYXQtYmFyIDpnbG9iYWwoc3ZnOmZvY3VzKSB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxuPC9zdHlsZT5cbiIsIjxTZWdtZW50ZWRCdXR0b25cbiAgc2VnbWVudHM9e2FsaWduc31cbiAgbGV0OnNlZ21lbnRcbiAgc2luZ2xlU2VsZWN0XG4gIGJpbmQ6c2VsZWN0ZWQ9e2FsaWdufVxuICBrZXk9eyhzZWdtZW50KSA9PiBzZWdtZW50Lm5hbWV9XG4+XG4gIDxXcmFwcGVyPlxuICAgIDxTZWdtZW50IHtzZWdtZW50fSB0b3VjaCB0aXRsZT17c2VnbWVudC5uYW1lfT5cbiAgICAgIDxJY29uXG4gICAgICAgIGNvbXBvbmVudD17U3ZnfVxuICAgICAgICBzdHlsZT1cIndpZHRoOiAxZW07IGhlaWdodDogYXV0bztcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgID5cbiAgICAgICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9e3NlZ21lbnQuaWNvbn0gLz5cbiAgICAgIDwvSWNvbj5cbiAgICA8L1NlZ21lbnQ+XG4gIDwvV3JhcHBlcj5cbjwvU2VnbWVudGVkQnV0dG9uPlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+QWxpZ25lZDoge2FsaWduLm5hbWV9PC9wcmU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTZWdtZW50ZWRCdXR0b24sIHsgU2VnbWVudCwgSWNvbiB9IGZyb20gJ0BzbXVpL3NlZ21lbnRlZC1idXR0b24nO1xuICBpbXBvcnQgV3JhcHBlciBmcm9tICdAc211aS90b3VjaC10YXJnZXQnO1xuICBpbXBvcnQgU3ZnIGZyb20gJ0BzbXVpL2NvbW1vbi9Tdmcuc3ZlbHRlJztcbiAgaW1wb3J0IHtcbiAgICBtZGlGb3JtYXRBbGlnbkxlZnQsXG4gICAgbWRpRm9ybWF0QWxpZ25DZW50ZXIsXG4gICAgbWRpRm9ybWF0QWxpZ25SaWdodCxcbiAgICBtZGlGb3JtYXRBbGlnbkp1c3RpZnksXG4gIH0gZnJvbSAnQG1kaS9qcyc7XG5cbiAgY29uc3QgYWxpZ25zID0gW1xuICAgIHtcbiAgICAgIG5hbWU6ICdMZWZ0JyxcbiAgICAgIGljb246IG1kaUZvcm1hdEFsaWduTGVmdCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDZW50ZXInLFxuICAgICAgaWNvbjogbWRpRm9ybWF0QWxpZ25DZW50ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnUmlnaHQnLFxuICAgICAgaWNvbjogbWRpRm9ybWF0QWxpZ25SaWdodCxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdKdXN0aWZ5JyxcbiAgICAgIGljb246IG1kaUZvcm1hdEFsaWduSnVzdGlmeSxcbiAgICB9LFxuICBdO1xuXG4gIGxldCBhbGlnbiA9IGFsaWduc1swXTtcbjwvc2NyaXB0PlxuIiwiPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+U2VnbWVudGVkIEJ1dHRvbiAtIFNNVUk8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNlY3Rpb24+XG4gIDxoMj5TZWdtZW50ZWQgQnV0dG9uPC9oMj5cblxuICA8cHJlIGNsYXNzPVwiZGVtby1zcGFjZWRcIj5ucG0gaSAtRCBAc211aS9zZWdtZW50ZWQtYnV0dG9uPC9wcmU+XG5cbiAgPERlbW9cbiAgICBjb21wb25lbnQ9e1NpbmdsZVNlbGVjdGlvbn1cbiAgICBmaWxlPVwic2VnbWVudGVkLWJ1dHRvbi9fU2luZ2xlU2VsZWN0aW9uLnN2ZWx0ZVwiXG4gID5cbiAgICBTaW5nbGUgU2VsZWN0aW9uXG4gIDwvRGVtbz5cblxuICA8RGVtb1xuICAgIGNvbXBvbmVudD17R3JvdXBTZWxlY3Rpb259XG4gICAgZmlsZT1cInNlZ21lbnRlZC1idXR0b24vX0dyb3VwU2VsZWN0aW9uLnN2ZWx0ZVwiXG4gID5cbiAgICBHcm91cCBTZWxlY3Rpb25cbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17SWNvbnNLZXlzfSBmaWxlPVwic2VnbWVudGVkLWJ1dHRvbi9fSWNvbnNLZXlzLnN2ZWx0ZVwiPlxuICAgIEljb25zIGFuZCBLZXllZCBTZWdtZW50c1xuICA8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtUb3VjaH0gZmlsZT1cInNlZ21lbnRlZC1idXR0b24vX1RvdWNoLnN2ZWx0ZVwiPlxuICAgIEluY3JlYXNlZCBUb3VjaCBUYXJnZXRcbiAgPC9EZW1vPlxuPC9zZWN0aW9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgRGVtbyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RlbW8uc3ZlbHRlJztcbiAgaW1wb3J0IFNpbmdsZVNlbGVjdGlvbiBmcm9tICcuL19TaW5nbGVTZWxlY3Rpb24uc3ZlbHRlJztcbiAgaW1wb3J0IEdyb3VwU2VsZWN0aW9uIGZyb20gJy4vX0dyb3VwU2VsZWN0aW9uLnN2ZWx0ZSc7XG4gIGltcG9ydCBJY29uc0tleXMgZnJvbSAnLi9fSWNvbnNLZXlzLnN2ZWx0ZSc7XG4gIGltcG9ydCBUb3VjaCBmcm9tICcuL19Ub3VjaC5zdmVsdGUnO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiY3NzQ2xhc3NlcyIsImFwcGx5UGFzc2l2ZSIsIm1hdGNoZXMiLCJ1dGlsLnN1cHBvcnRzQ3NzVmFyaWFibGVzIiwiU3ZnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksYUFBYSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNuQyxJQUFJLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYztBQUN6QyxTQUFTLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxZQUFZLEtBQUssSUFBSSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEYsUUFBUSxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDMUcsSUFBSSxPQUFPLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBQ0Y7QUFDTyxTQUFTLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ2hDLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksQ0FBQyxLQUFLLElBQUk7QUFDN0MsUUFBUSxNQUFNLElBQUksU0FBUyxDQUFDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyxDQUFDO0FBQ2xHLElBQUksYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN4QixJQUFJLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUMzQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQztBQUNEO0FBQ08sSUFBSSxRQUFRLEdBQUcsV0FBVztBQUNqQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyRCxRQUFRLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzdELFlBQVksQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM3QixZQUFZLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pGLFNBQVM7QUFDVCxRQUFRLE9BQU8sQ0FBQyxDQUFDO0FBQ2pCLE1BQUs7QUFDTCxJQUFJLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDM0MsRUFBQztBQThFRDtBQUNPLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUM1QixJQUFJLElBQUksQ0FBQyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEYsSUFBSSxJQUFJLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUIsSUFBSSxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFLE9BQU87QUFDbEQsUUFBUSxJQUFJLEVBQUUsWUFBWTtBQUMxQixZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztBQUMvQyxZQUFZLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BELFNBQVM7QUFDVCxLQUFLLENBQUM7QUFDTixJQUFJLE1BQU0sSUFBSSxTQUFTLENBQUMsQ0FBQyxHQUFHLHlCQUF5QixHQUFHLGlDQUFpQyxDQUFDLENBQUM7QUFDM0Y7O0FDaklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxhQUFhLGtCQUFrQixZQUFZO0FBQy9DLElBQUksU0FBUyxhQUFhLENBQUMsT0FBTyxFQUFFO0FBQ3BDLFFBQVEsSUFBSSxPQUFPLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUU7QUFDakQsUUFBUSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUMvQixLQUFLO0FBQ0wsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUU7QUFDdkQsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUN6QjtBQUNBO0FBQ0EsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUU7QUFDcEQsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUN6QjtBQUNBO0FBQ0EsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUU7QUFDcEQsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUN6QjtBQUNBO0FBQ0EsWUFBWSxPQUFPLEVBQUUsQ0FBQztBQUN0QixTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRTtBQUMzRCxRQUFRLEdBQUcsRUFBRSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsU0FBUztBQUNULFFBQVEsVUFBVSxFQUFFLEtBQUs7QUFDekIsUUFBUSxZQUFZLEVBQUUsSUFBSTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWTtBQUMvQztBQUNBLEtBQUssQ0FBQztBQUNOLElBQUksYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsWUFBWTtBQUNsRDtBQUNBLEtBQUssQ0FBQztBQUNOLElBQUksT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQyxFQUFFLENBQUM7O0FDdkVKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBO0FBQ08sSUFBSUEsWUFBVSxHQUFHO0FBQ3hCLElBQUksYUFBYSxFQUFFLHFDQUFxQztBQUN4RCxDQUFDOztBQ3hDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQUksNEJBQTRCLGtCQUFrQixVQUFVLE1BQU0sRUFBRTtBQUNwRSxJQUFJLFNBQVMsQ0FBQyw0QkFBNEIsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNwRCxJQUFJLFNBQVMsNEJBQTRCLENBQUMsT0FBTyxFQUFFO0FBQ25ELFFBQVEsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSw0QkFBNEIsQ0FBQyxjQUFjLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUN2SCxLQUFLO0FBQ0wsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLDRCQUE0QixFQUFFLGdCQUFnQixFQUFFO0FBQzFFLFFBQVEsR0FBRyxFQUFFLFlBQVk7QUFDekIsWUFBWSxPQUFPO0FBQ25CLGdCQUFnQixRQUFRLEVBQUUsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7QUFDaEcsZ0JBQWdCLGFBQWEsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUNoRSxnQkFBZ0IsZUFBZSxFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQ2xFLGdCQUFnQixvQkFBb0IsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUN2RSxhQUFhLENBQUM7QUFDZCxTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVUsZ0JBQWdCLEVBQUU7QUFDdkYsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3JELEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEJBQTRCLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxVQUFVLGdCQUFnQixFQUFFO0FBQ3pGLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUN2RCxLQUFLLENBQUM7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEJBQTRCLENBQUMsU0FBUyxDQUFDLG1CQUFtQixHQUFHLFlBQVk7QUFDN0UsUUFBUSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsYUFBYSxFQUFFLEVBQUUsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzlHLEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEJBQTRCLENBQUMsU0FBUyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsZ0JBQWdCLEVBQUU7QUFDM0YsUUFBUSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsYUFBYSxFQUFFLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEtBQUssZ0JBQWdCO0FBQzFILFlBQVksYUFBYSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0I7QUFDeEQsWUFBWSxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZDLEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0QkFBNEIsQ0FBQyxTQUFTLENBQUMsY0FBYyxHQUFHLFlBQVk7QUFDeEUsUUFBUSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDQSxZQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDL0QsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEJBQTRCLENBQUMsU0FBUyxDQUFDLGNBQWMsR0FBRyxVQUFVLE1BQU0sRUFBRTtBQUM5RSxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUFFO0FBQ25DLFlBQVksSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2xELEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNEJBQTRCLENBQUMsU0FBUyxDQUFDLG9CQUFvQixHQUFHLFVBQVUsS0FBSyxFQUFFO0FBQ25GLFFBQVEsSUFBSSxHQUFHLEVBQUUsRUFBRSxDQUFDO0FBQ3BCLFFBQVEsSUFBSTtBQUNaLFlBQVksS0FBSyxJQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO0FBQzFHLGdCQUFnQixJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO0FBQy9DLGdCQUFnQixJQUFJLGVBQWUsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO0FBQ3JELG9CQUFvQixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNoRSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7QUFDVCxRQUFRLE9BQU8sS0FBSyxFQUFFLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7QUFDakQsZ0JBQWdCO0FBQ2hCLFlBQVksSUFBSTtBQUNoQixnQkFBZ0IsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNwRSxhQUFhO0FBQ2Isb0JBQW9CLEVBQUUsSUFBSSxHQUFHLEVBQUUsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDakQsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksT0FBTyw0QkFBNEIsQ0FBQztBQUN4QyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7O0FDckhqQjtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsdUZBQXVGLENBQUM7QUFDakg7QUFDQSxNQUFNLGdCQUFnQixHQUFHLHVGQUF1RixDQUFDO0FBQ2pIO0FBQ08sU0FBUyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7QUFDaEQ7QUFDQSxFQUFFLElBQUksR0FBRyxDQUFDO0FBQ1Y7QUFDQSxFQUFFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNsQjtBQUNBLEVBQUUsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztBQUNwQztBQUNBO0FBQ0EsRUFBRSxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsS0FBSztBQUMvQyxJQUFJLElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUNsQyxJQUFJLElBQUksVUFBVSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQzlCLElBQUksSUFBSSxHQUFHLEVBQUU7QUFDYjtBQUNBLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDNUMsS0FBSyxNQUFNO0FBQ1g7QUFDQSxNQUFNLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN6QyxLQUFLO0FBQ0wsSUFBSSxNQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUMvRCxJQUFJLE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQy9ELElBQUksTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUM7QUFDL0Q7QUFDQSxJQUFJLElBQUksZ0JBQWdCLElBQUksT0FBTyxFQUFFO0FBQ3JDLE1BQU0sT0FBTyxDQUFDLElBQUk7QUFDbEIsUUFBUSx3SUFBd0k7QUFDaEosUUFBUSxTQUFTO0FBQ2pCLE9BQU8sQ0FBQztBQUNSLEtBQUs7QUFDTDtBQUNBLElBQUksSUFBSSxhQUFhLEVBQUU7QUFDdkI7QUFDQSxNQUFNLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2xFLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUksTUFBTSxtQkFBbUIsR0FBRyxXQUFXLENBQUMsSUFBSTtBQUNoRCxNQUFNLFNBQVM7QUFDZixNQUFNLFNBQVM7QUFDZixNQUFNLFFBQVE7QUFDZCxLQUFLLENBQUM7QUFDTjtBQUNBLElBQUksT0FBTyxDQUFDLEdBQUcsSUFBSSxLQUFLO0FBQ3hCLE1BQU0sVUFBVSxFQUFFLENBQUM7QUFDbkIsTUFBTSxPQUFPLG1CQUFtQixDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDMUMsS0FBSyxDQUFDO0FBQ04sR0FBRyxDQUFDO0FBQ0o7QUFDQSxFQUFFLFNBQVMsT0FBTyxDQUFDLENBQUMsRUFBRTtBQUN0QjtBQUNBLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEtBQUs7QUFDbkIsSUFBSSxNQUFNLFdBQVcsR0FBRyxFQUFFLENBQUM7QUFDM0IsSUFBSSxNQUFNLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztBQUNsQztBQUNBO0FBQ0EsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxLQUFLO0FBQ3ZDLE1BQU0sSUFBSSxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQ3BDLE1BQU0sSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDO0FBQzdCO0FBQ0EsTUFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUM7QUFDMUIsTUFBTSxNQUFNLGdCQUFnQixHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNqRSxNQUFNLE1BQU0sZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2pFLE1BQU0sTUFBTSxhQUFhLEdBQUcsZ0JBQWdCLElBQUksZ0JBQWdCLENBQUM7QUFDakUsTUFBTSxJQUFJLGFBQWEsRUFBRTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUNwRSxRQUFRLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0IsUUFBUSxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0UsUUFBUSxJQUFJLE9BQU8sQ0FBQyxVQUFVLEVBQUU7QUFDaEMsVUFBVSxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNsQyxVQUFVLE9BQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNwQyxTQUFTO0FBQ1QsUUFBUSxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUU7QUFDcEMsVUFBVSxPQUFPLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzdDLFVBQVUsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDO0FBQ3hDLFNBQVM7QUFDVCxRQUFRLElBQUksT0FBTyxDQUFDLGVBQWUsRUFBRTtBQUNyQyxVQUFVLE9BQU8sR0FBRyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QyxVQUFVLE9BQU8sT0FBTyxDQUFDLGVBQWUsQ0FBQztBQUN6QyxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM1RCxNQUFNLE1BQU0sVUFBVSxHQUFHLE1BQU07QUFDL0IsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNkLFFBQVEsTUFBTSxHQUFHLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNwRCxRQUFRLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ3RCLFVBQVUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckMsU0FBUztBQUNULE9BQU8sQ0FBQztBQUNSO0FBQ0EsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DO0FBQ0E7QUFDQSxNQUFNLElBQUksQ0FBQyxTQUFTLElBQUksa0JBQWtCLEVBQUU7QUFDNUMsUUFBUSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RSxPQUFPO0FBQ1A7QUFDQSxNQUFNLE9BQU8sVUFBVSxDQUFDO0FBQ3hCLEtBQUssQ0FBQztBQUNOO0FBQ0EsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM1QztBQUNBLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0QyxLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU87QUFDWCxNQUFNLE9BQU8sRUFBRSxNQUFNO0FBQ3JCO0FBQ0EsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyRCxVQUFVLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0EsUUFBUSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRTtBQUM5RCxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3JCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSyxDQUFDO0FBQ04sR0FBRyxDQUFDO0FBQ0o7O0FDaEpPLFNBQVMsUUFBUSxDQUFDLFFBQVEsRUFBRTtBQUNuQyxFQUFFLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7QUFDakMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsS0FBSyxJQUFJLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQztBQUNwRCxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDO0FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ2Y7O0FDTE8sU0FBUyxRQUFRO0FBQ3hCLEVBQUUsT0FBTztBQUNULEVBQUUsU0FBUztBQUNYLEVBQUUsTUFBTSxHQUFHLEVBQUU7QUFDYixFQUFFLFNBQVMsR0FBRyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDL0IsRUFBRTtBQUNGLEVBQUUsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksT0FBTyxFQUFFO0FBQy9DLElBQUksTUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2xELElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDMUIsSUFBSSxNQUFNLEVBQUUsR0FBRyxZQUFZLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFDeEUsSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVCLElBQUksT0FBTyxLQUFLLENBQUM7QUFDakIsR0FBRztBQUNIOztBQ2JPLFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDMUMsRUFBRSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7QUFDbkI7QUFDQSxFQUFFLElBQUksT0FBTyxFQUFFO0FBQ2YsSUFBSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUM3QyxNQUFNLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEQsTUFBTSxNQUFNLE1BQU0sR0FBRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxRCxNQUFNLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQzVDLFFBQVEsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEQsT0FBTyxNQUFNO0FBQ2IsUUFBUSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ25DLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsRUFBRSxPQUFPO0FBQ1QsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQ3BCLE1BQU0sSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxLQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDaEUsUUFBUSxNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7QUFDL0UsT0FBTztBQUNQO0FBQ0EsTUFBTSxJQUFJLE9BQU8sRUFBRTtBQUNuQixRQUFRLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ2pELFVBQVUsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNwRCxZQUFZLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsWUFBWSxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUNsRCxjQUFjLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDL0MsYUFBYSxNQUFNO0FBQ25CLGNBQWMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xDLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxJQUFJLE9BQU8sR0FBRztBQUNkLE1BQU0sS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDL0MsUUFBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxTQUFTLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ25ELFVBQVUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQy9CLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUcsQ0FBQztBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQ3JDYSxHQUFHO09BQ0gsS0FBSztPQUVWLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSzs7O0NBQ2pDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsVUFBVTs7Q0FJMUIsU0FBUztFQUNQLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUh2QixXQUFXLEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JDUVQsR0FBZSxVQUFDLEdBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21GQUFqQixHQUFlLFVBQUMsR0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFIc0MsR0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUFBRCxHQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFEOUQsR0FBUTs7Z0NBQWdCLEdBQUcsZ0JBQUMsR0FBTzs7O2dDQUF4QyxNQUFJOzs7Ozs7Ozs0QkFaQyxRQUFRO21CQUNaLEdBQVMsTUFBRyxJQUFJO0lBQ2pCLHNCQUFzQixFQUFFLElBQUk7SUFDNUIscUNBQXFDLG1CQUFFLEdBQVk7Ozs7MkNBRS9DLEdBQVksTUFBRyxZQUFZLEdBQUcsT0FBTzs7a0JBS3ZDLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkVBWkMsR0FBRzs7Ozs7Ozs7Ozs7OzhCQWNaLEdBQVE7Ozs7Ozs7OztrR0FaUixRQUFRO29CQUNaLEdBQVMsTUFBRyxJQUFJO0tBQ2pCLHNCQUFzQixFQUFFLElBQUk7S0FDNUIscUNBQXFDLG1CQUFFLEdBQVk7O3NHQUUvQyxHQUFZLE1BQUcsWUFBWSxHQUFHLE9BQU87b0RBS3ZDLEdBQVc7OztvSUFaQyxHQUFHOzs7OztrQ0FjakIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQTRFRyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUk7S0FDM0IsV0FBVyxPQUFPLEdBQUcsQ0FBQyxJQUFJOztVQUNyQixJQUFJLElBQUksSUFBSTtFQUNuQixXQUFXLENBQUMsTUFBTSxDQUFDLElBQUk7OztRQUVsQixXQUFXOzs7Ozs7OztPQXpEZCxhQUFhLEdBQUcsb0JBQW9CLENBQUMscUJBQXFCO09BRXJELEdBQUc7Y0FDVixTQUFTLEdBQUcsRUFBRTtPQUVQLFFBQVE7T0FDUixHQUFHLEdBQUksT0FBTyxJQUFLLE9BQU87T0FDMUIsWUFBWSxHQUFHLEtBQUs7T0FDcEIsUUFBUSxHQUFHLFlBQVksR0FBRyxJQUFJO0tBRXJDLE9BQU87S0FDUCxRQUFRO0tBQ1Isa0JBQWtCO0tBQ2xCLHNCQUFzQixPQUFPLE9BQU87S0FDcEMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQy9CLFNBQVMsSUFDUCxZQUFZLElBQUksUUFBUSxLQUFLLFNBQVMsS0FDckMsWUFBWSxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxPQUFPLENBQUM7Q0FHeEQsVUFBVSxDQUFDLG1CQUFtQixFQUFFLGtCQUFrQjtDQUNsRCxVQUFVLENBQUMsb0JBQW9CLEVBQUUsa0JBQWtCO0NBQ25ELFVBQVUsQ0FBQyxvQ0FBb0MsRUFBRSxZQUFZO0tBRXpELGdCQUFnQixHQUFHLFlBQVksR0FBRyxRQUFRLE9BQU8sR0FBRyxDQUFDLFFBQVE7O0NBb0NqRSxPQUFPO2tCQUNMLFFBQVEsT0FBTyw0QkFBNEI7SUFDekMsUUFBUSxFQUFHLFNBQVM7WUFDWCxVQUFVLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTOztJQUVsRCxXQUFXO1lBQ0YsUUFBUSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsS0FBSztNQUNqQyxLQUFLO01BQ0wsUUFBUSxFQUFFLFlBQVk7UUFDbEIsUUFBUSxLQUFLLE9BQU87UUFDcEIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLE9BQU8sQ0FBQzs7O0lBSXhDLGFBQWE7SUFDYixlQUFlO0lBQ2Ysb0JBQW9CLEVBQUcsTUFBTTtTQUN2QixNQUFNLENBQUMsUUFBUTtNQUNqQixhQUFhLENBQUMsTUFBTSxDQUFDLEtBQUs7O01BRTFCLGVBQWUsQ0FBQyxNQUFNLENBQUMsS0FBSzs7O0tBRzlCLFFBQVEsQ0FBQyxVQUFVLElBQUksUUFBUSxFQUFFLE1BQU07Ozs7RUFJM0MsUUFBUSxDQUFDLElBQUk7OztHQUdYLFFBQVEsQ0FBQyxPQUFPOzs7O1VBSVgsa0JBQWtCLENBQUMsS0FBSztRQUN6QixRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU07RUFFN0IsV0FBVyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsUUFBUTs7O1VBR2pDLG9CQUFvQixDQUFDLEtBQUs7UUFDM0IsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNO0VBRTdCLGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUzs7O1VBRzFCLFdBQVcsQ0FBQyxTQUFTO1NBQ3JCLFNBQVMsWUFBWSxNQUFNO0lBQzlCLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxTQUFTO0lBQ3BDLGtCQUFrQixDQUFDLFNBQVM7OztVQUd6QixXQUFXLENBQUMsU0FBUyxFQUFFLFFBQVE7TUFDbEMsU0FBUyxZQUFZLE1BQU07R0FDN0Isc0JBQXNCLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFROztHQUU5QyxrQkFBa0IsQ0FBQyxTQUFTLElBQUksUUFBUTs7OztVQUluQyxjQUFjLENBQUMsU0FBUztNQUMzQixTQUFTLFlBQVksTUFBTTtHQUM3QixzQkFBc0IsQ0FBQyxNQUFNLENBQUMsU0FBUzs7VUFFaEMsa0JBQWtCLENBQUMsU0FBUzs7OztVQUk5QixhQUFhLENBQUMsZ0JBQWdCO01BQ2pDLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLGdCQUFnQjs7TUFDekMsS0FBSyxNQUFNLENBQUM7R0FDZCxLQUFLLEdBQUcsZ0JBQWdCOzs7T0FFckIsWUFBWTtTQUNULFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLOztPQUM1QyxRQUFRLE1BQU0sQ0FBQztJQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLOzs7YUFHckIsUUFBUSxLQUFLLFFBQVEsQ0FBQyxLQUFLO29CQUNwQyxRQUFRLEdBQUcsUUFBUSxDQUFDLEtBQUs7OztFQUczQixXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLEdBQUcsSUFBSTs7O1VBR3JDLGVBQWUsQ0FBQyxnQkFBZ0I7TUFDbkMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCOztNQUN6QyxLQUFLLE1BQU0sQ0FBQztHQUNkLEtBQUssR0FBRyxnQkFBZ0I7OztPQUVyQixZQUFZO1NBQ1QsUUFBUSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUs7O09BQzVDLFFBQVEsTUFBTSxDQUFDO0lBQ2pCLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7OzthQUdwQixRQUFRLEtBQUssUUFBUSxDQUFDLEtBQUs7b0JBQ3BDLFFBQVEsR0FBRyxJQUFJOzs7RUFHakIsV0FBVyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFHLEtBQUs7OztVQUcvQixVQUFVO1NBQ2pCLE9BQU87Ozs7O0dBNU1MLE9BQU87Ozs7O3FEQVN1QixLQUFLLElBQUssa0JBQWtCLENBQUMsS0FBSzt1REFDaEMsS0FBSyxJQUM5QyxvQkFBb0IsQ0FBQyxLQUFLOzBCQUNkLEtBQUssSUFBSyxRQUFRLElBQUksUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bb0RqRSxRQUFRLElBQUksWUFBWSxJQUFJLGdCQUFnQixLQUFLLFFBQVE7UUFDMUQsZ0JBQWdCLElBQUksSUFBSTtLQUMxQixRQUFRLENBQUMsZUFBZSxDQUFDLGdCQUFnQjs7O3FCQUUzQyxnQkFBZ0IsR0FBRyxRQUFRO0lBQzNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUTs7Ozs7T0FFMUIsUUFBUSxLQUFLLFlBQVk7VUFDeEIsV0FBVyxPQUFPLEdBQUcsQ0FBQyxRQUFRO1VBQzlCLFVBQVUsR0FBRyxhQUFhLENBQUMsZ0JBQWdCLEVBQUUsV0FBVztVQUN4RCxXQUFXLEdBQUcsYUFBYSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0I7O1FBRTNELFVBQVUsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLElBQUk7c0JBQ3JDLGdCQUFnQixHQUFHLFdBQVc7O2NBRXJCLFNBQVMsSUFBSSxVQUFVO1lBQ3hCLEdBQUcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVM7O1VBQ2xDLEdBQUcsTUFBTSxDQUFDO09BQ1osUUFBUSxDQUFDLGVBQWUsQ0FBQyxHQUFHOzs7O2NBR3ZCLFNBQVMsSUFBSSxXQUFXO01BQy9CLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RnpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBSSxRQUFRLEdBQUc7QUFDdEIsSUFBSSxJQUFJLEVBQUUsTUFBTTtBQUNoQixJQUFJLEtBQUssRUFBRSxPQUFPO0FBQ2xCLENBQUMsQ0FBQztBQUNGO0FBQ0E7QUFDQTtBQUNPLElBQUksVUFBVSxHQUFHO0FBQ3hCLElBQUksWUFBWSxFQUFFLGNBQWM7QUFDaEMsSUFBSSxZQUFZLEVBQUUsY0FBYztBQUNoQyxJQUFJLGVBQWUsRUFBRSxpQkFBaUI7QUFDdEMsQ0FBQyxDQUFDO0FBUUY7QUFDQTtBQUNBO0FBQ08sSUFBSUEsWUFBVSxHQUFHO0FBQ3hCLElBQUksUUFBUSxFQUFFLHlDQUF5QztBQUN2RCxDQUFDOztBQ2pERDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQUksZUFBZSxHQUFHO0FBQ3RCLElBQUksTUFBTSxFQUFFLENBQUM7QUFDYixJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ2IsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNYLElBQUksS0FBSyxFQUFFLENBQUM7QUFDWixJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ1YsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUNaLENBQUMsQ0FBQztBQUNGLElBQUksbUNBQW1DLGtCQUFrQixVQUFVLE1BQU0sRUFBRTtBQUMzRSxJQUFJLFNBQVMsQ0FBQyxtQ0FBbUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUMzRCxJQUFJLFNBQVMsbUNBQW1DLENBQUMsT0FBTyxFQUFFO0FBQzFELFFBQVEsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxtQ0FBbUMsQ0FBQyxjQUFjLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUM5SCxLQUFLO0FBQ0wsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLG1DQUFtQyxFQUFFLGdCQUFnQixFQUFFO0FBQ2pGLFFBQVEsR0FBRyxFQUFFLFlBQVk7QUFDekIsWUFBWSxPQUFPO0FBQ25CLGdCQUFnQixjQUFjLEVBQUUsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDOUksZ0JBQWdCLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUMzRyxnQkFBZ0IsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLEtBQUssQ0FBQyxFQUFFO0FBQ3ZELGdCQUFnQixvQkFBb0IsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUN2RSxnQkFBZ0IseUJBQXlCLEVBQUUsWUFBWSxFQUFFLE9BQU8sZUFBZSxDQUFDLEVBQUU7QUFDbEYsYUFBYSxDQUFDO0FBQ2QsU0FBUztBQUNULFFBQVEsVUFBVSxFQUFFLEtBQUs7QUFDekIsUUFBUSxZQUFZLEVBQUUsSUFBSTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQ0FBbUMsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDM0UsUUFBUSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDQSxZQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUQsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQ0FBbUMsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVk7QUFDNUUsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQ0EsWUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25ELFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQ0FBbUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFlBQVk7QUFDOUUsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQ0EsWUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELFFBQVEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekMsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQ0FBbUMsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFlBQVk7QUFDN0UsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUNmLFFBQVEsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLE1BQU0sSUFBSSxJQUFJLEVBQUUsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO0FBQ2xILEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1DQUFtQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsWUFBWTtBQUM1RSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtBQUMzQyxZQUFZLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMvQixTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQ25DLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDN0QsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQ0FBbUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFlBQVk7QUFDOUUsUUFBUSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLEVBQUUsQ0FBQztBQUN4RCxLQUFLLENBQUM7QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1DQUFtQyxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsWUFBWTtBQUNoRixRQUFRLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFO0FBQy9CLFlBQVksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQ2pDLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDL0IsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUNBQW1DLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLEtBQUssRUFBRTtBQUNqRixRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRTtBQUMzQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakUsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakUsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksT0FBTyxtQ0FBbUMsQ0FBQztBQUMvQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7O0FDaElqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscUJBQXFCLENBQUM7QUFDbkIsU0FBUyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsWUFBWSxFQUFFO0FBQzlELElBQUksSUFBSSxZQUFZLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxZQUFZLEdBQUcsS0FBSyxDQUFDLEVBQUU7QUFDMUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO0FBQzVCLElBQUksSUFBSSxlQUFlLEdBQUcscUJBQXFCLENBQUM7QUFDaEQsSUFBSSxJQUFJLE9BQU8scUJBQXFCLEtBQUssU0FBUyxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3JFLFFBQVEsT0FBTyxxQkFBcUIsQ0FBQztBQUNyQyxLQUFLO0FBQ0wsSUFBSSxJQUFJLHVCQUF1QixHQUFHLEdBQUcsSUFBSSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDO0FBQzVFLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO0FBQ2xDLFFBQVEsT0FBTyxLQUFLLENBQUM7QUFDckIsS0FBSztBQUNMLElBQUksSUFBSSx5QkFBeUIsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN0RTtBQUNBO0FBQ0EsSUFBSSxJQUFJLGlDQUFpQyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7QUFDOUUsUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO0FBQzVDLElBQUksZUFBZTtBQUNuQixRQUFRLHlCQUF5QixJQUFJLGlDQUFpQyxDQUFDO0FBQ3ZFLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUN2QixRQUFRLHFCQUFxQixHQUFHLGVBQWUsQ0FBQztBQUNoRCxLQUFLO0FBQ0wsSUFBSSxPQUFPLGVBQWUsQ0FBQztBQUMzQixDQUFDO0FBQ00sU0FBUyx3QkFBd0IsQ0FBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN0RSxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDZCxRQUFRLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUM5QixLQUFLO0FBQ0wsSUFBSSxJQUFJLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzNDLElBQUksSUFBSSxTQUFTLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDeEMsSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQztBQUN2QyxJQUFJLElBQUksV0FBVyxDQUFDO0FBQ3BCLElBQUksSUFBSSxXQUFXLENBQUM7QUFDcEI7QUFDQSxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxZQUFZLEVBQUU7QUFDbkMsUUFBUSxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDN0IsUUFBUSxXQUFXLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3JFLFFBQVEsV0FBVyxHQUFHLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztBQUNyRSxLQUFLO0FBQ0wsU0FBUztBQUNULFFBQVEsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDO0FBQzdCLFFBQVEsV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ25ELFFBQVEsV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ25ELEtBQUs7QUFDTCxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQztBQUM5Qzs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLGNBQVksQ0FBQyxTQUFTLEVBQUU7QUFDeEMsSUFBSSxJQUFJLFNBQVMsS0FBSyxLQUFLLENBQUMsRUFBRSxFQUFFLFNBQVMsR0FBRyxNQUFNLENBQUMsRUFBRTtBQUNyRCxJQUFJLE9BQU8scUJBQXFCLENBQUMsU0FBUyxDQUFDO0FBQzNDLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQ3pCLFFBQVEsS0FBSyxDQUFDO0FBQ2QsQ0FBQztBQUNELFNBQVMscUJBQXFCLENBQUMsU0FBUyxFQUFFO0FBQzFDLElBQUksSUFBSSxTQUFTLEtBQUssS0FBSyxDQUFDLEVBQUUsRUFBRSxTQUFTLEdBQUcsTUFBTSxDQUFDLEVBQUU7QUFDckQ7QUFDQTtBQUNBLElBQUksSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7QUFDakMsSUFBSSxJQUFJO0FBQ1IsUUFBUSxJQUFJLE9BQU8sR0FBRztBQUN0QjtBQUNBO0FBQ0EsWUFBWSxJQUFJLE9BQU8sR0FBRztBQUMxQixnQkFBZ0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0FBQ3hDLGdCQUFnQixPQUFPLEtBQUssQ0FBQztBQUM3QixhQUFhO0FBQ2IsU0FBUyxDQUFDO0FBQ1YsUUFBUSxJQUFJLE9BQU8sR0FBRyxZQUFZLEdBQUcsQ0FBQztBQUN0QyxRQUFRLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RSxRQUFRLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6RSxLQUFLO0FBQ0wsSUFBSSxPQUFPLEdBQUcsRUFBRTtBQUNoQixRQUFRLGdCQUFnQixHQUFHLEtBQUssQ0FBQztBQUNqQyxLQUFLO0FBQ0wsSUFBSSxPQUFPLGdCQUFnQixDQUFDO0FBQzVCOzs7Ozs7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTLE9BQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO0FBQzNDLElBQUksSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3pCLFFBQVEsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3pDLEtBQUs7QUFDTCxJQUFJLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNyQixJQUFJLE9BQU8sRUFBRSxFQUFFO0FBQ2YsUUFBUSxJQUFJQyxTQUFPLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO0FBQ25DLFlBQVksT0FBTyxFQUFFLENBQUM7QUFDdEIsU0FBUztBQUNULFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7QUFDOUIsS0FBSztBQUNMLElBQUksT0FBTyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUNNLFNBQVNBLFNBQU8sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO0FBQzNDLElBQUksSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLE9BQU87QUFDdkMsV0FBVyxPQUFPLENBQUMscUJBQXFCO0FBQ3hDLFdBQVcsT0FBTyxDQUFDLGlCQUFpQixDQUFDO0FBQ3JDLElBQUksT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVMsbUJBQW1CLENBQUMsT0FBTyxFQUFFO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDekIsSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO0FBQ3RDLFFBQVEsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ2xDLEtBQUs7QUFDTCxJQUFJLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDcEQsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsNkJBQTZCLENBQUMsQ0FBQztBQUN4RSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELElBQUksSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQztBQUN4QyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hELElBQUksT0FBTyxXQUFXLENBQUM7QUFDdkI7Ozs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQUksVUFBVSxHQUFHO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLElBQUksVUFBVSxFQUFFLHlDQUF5QztBQUN6RCxJQUFJLGFBQWEsRUFBRSw0Q0FBNEM7QUFDL0QsSUFBSSxlQUFlLEVBQUUsOENBQThDO0FBQ25FLElBQUksSUFBSSxFQUFFLHFCQUFxQjtBQUMvQixJQUFJLFNBQVMsRUFBRSxnQ0FBZ0M7QUFDL0MsQ0FBQyxDQUFDO0FBQ0ssSUFBSSxPQUFPLEdBQUc7QUFDckIsSUFBSSxZQUFZLEVBQUUsdUJBQXVCO0FBQ3pDLElBQUksV0FBVyxFQUFFLHNCQUFzQjtBQUN2QyxJQUFJLG9CQUFvQixFQUFFLCtCQUErQjtBQUN6RCxJQUFJLHNCQUFzQixFQUFFLGlDQUFpQztBQUM3RCxJQUFJLFFBQVEsRUFBRSxtQkFBbUI7QUFDakMsSUFBSSxPQUFPLEVBQUUsa0JBQWtCO0FBQy9CLENBQUMsQ0FBQztBQUNLLElBQUksT0FBTyxHQUFHO0FBQ3JCLElBQUksdUJBQXVCLEVBQUUsR0FBRztBQUNoQyxJQUFJLGtCQUFrQixFQUFFLEdBQUc7QUFDM0IsSUFBSSxvQkFBb0IsRUFBRSxHQUFHO0FBQzdCLElBQUksT0FBTyxFQUFFLEVBQUU7QUFDZixJQUFJLFlBQVksRUFBRSxHQUFHO0FBQ3JCLENBQUM7O0FDOUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQSxJQUFJLHNCQUFzQixHQUFHO0FBQzdCLElBQUksWUFBWSxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsU0FBUztBQUN2RCxDQUFDLENBQUM7QUFDRjtBQUNBLElBQUksZ0NBQWdDLEdBQUc7QUFDdkMsSUFBSSxVQUFVLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxhQUFhO0FBQ3JELENBQUMsQ0FBQztBQUNGO0FBQ0EsSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFDMUIsSUFBSSxtQkFBbUIsa0JBQWtCLFVBQVUsTUFBTSxFQUFFO0FBQzNELElBQUksU0FBUyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLElBQUksU0FBUyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUU7QUFDMUMsUUFBUSxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztBQUNuSCxRQUFRLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUM7QUFDbkQsUUFBUSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDO0FBQ25DLFFBQVEsS0FBSyxDQUFDLDJCQUEyQixHQUFHLENBQUMsQ0FBQztBQUM5QyxRQUFRLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQzdCLFFBQVEsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0FBQy9DLFFBQVEsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDL0IsUUFBUSxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUMvQixRQUFRLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLFFBQVEsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDckQsUUFBUSxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixFQUFFLENBQUM7QUFDakUsUUFBUSxLQUFLLENBQUMsd0JBQXdCLEdBQUcsWUFBWTtBQUNyRCxZQUFZLEtBQUssQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUM7QUFDdEQsWUFBWSxLQUFLLENBQUMsOEJBQThCLEVBQUUsQ0FBQztBQUNuRCxTQUFTLENBQUM7QUFDVixRQUFRLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDN0UsUUFBUSxLQUFLLENBQUMsa0JBQWtCLEdBQUcsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUMvRSxRQUFRLEtBQUssQ0FBQyxhQUFhLEdBQUcsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUMxRSxRQUFRLEtBQUssQ0FBQyxZQUFZLEdBQUcsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUN4RSxRQUFRLEtBQUssQ0FBQyxjQUFjLEdBQUcsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUN0RSxRQUFRLE9BQU8sS0FBSyxDQUFDO0FBQ3JCLEtBQUs7QUFDTCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFO0FBQzdELFFBQVEsR0FBRyxFQUFFLFlBQVk7QUFDekIsWUFBWSxPQUFPLFVBQVUsQ0FBQztBQUM5QixTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLFNBQVMsRUFBRTtBQUMxRCxRQUFRLEdBQUcsRUFBRSxZQUFZO0FBQ3pCLFlBQVksT0FBTyxPQUFPLENBQUM7QUFDM0IsU0FBUztBQUNULFFBQVEsVUFBVSxFQUFFLEtBQUs7QUFDekIsUUFBUSxZQUFZLEVBQUUsSUFBSTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxTQUFTLEVBQUU7QUFDMUQsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUN6QixZQUFZLE9BQU8sT0FBTyxDQUFDO0FBQzNCLFNBQVM7QUFDVCxRQUFRLFVBQVUsRUFBRSxLQUFLO0FBQ3pCLFFBQVEsWUFBWSxFQUFFLElBQUk7QUFDMUIsS0FBSyxDQUFDLENBQUM7QUFDUCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUU7QUFDakUsUUFBUSxHQUFHLEVBQUUsWUFBWTtBQUN6QixZQUFZLE9BQU87QUFDbkIsZ0JBQWdCLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUMzRCxnQkFBZ0Isc0JBQXNCLEVBQUUsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDcEUsZ0JBQWdCLG1CQUFtQixFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0FBQzVILGdCQUFnQixtQkFBbUIsRUFBRSxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRTtBQUNqRSxnQkFBZ0Isb0NBQW9DLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDdkYsZ0JBQWdCLDRCQUE0QixFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQy9FLGdCQUFnQix1QkFBdUIsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUMxRSxnQkFBZ0IsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO0FBQzdFLGdCQUFnQixlQUFlLEVBQUUsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDN0QsZ0JBQWdCLGlCQUFpQixFQUFFLFlBQVksRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFO0FBQy9ELGdCQUFnQixXQUFXLEVBQUUsWUFBWSxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUU7QUFDekQsZ0JBQWdCLGtDQUFrQyxFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQ3JGLGdCQUFnQiwwQkFBMEIsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUM3RSxnQkFBZ0IscUJBQXFCLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDeEUsZ0JBQWdCLFdBQVcsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUM5RCxnQkFBZ0IsaUJBQWlCLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDcEUsYUFBYSxDQUFDO0FBQ2QsU0FBUztBQUNULFFBQVEsVUFBVSxFQUFFLEtBQUs7QUFDekIsUUFBUSxZQUFZLEVBQUUsSUFBSTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxZQUFZO0FBQ3JELFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUM5RCxRQUFRLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3hELFFBQVEsSUFBSSxtQkFBbUIsRUFBRTtBQUNqQyxZQUFZLElBQUksRUFBRSxHQUFHLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxNQUFNLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQztBQUNsRyxZQUFZLHFCQUFxQixDQUFDLFlBQVk7QUFDOUMsZ0JBQWdCLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQy9DLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7QUFDakQsb0JBQW9CLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3hEO0FBQ0Esb0JBQW9CLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM1QyxpQkFBaUI7QUFDakIsYUFBYSxDQUFDLENBQUM7QUFDZixTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFlBQVk7QUFDeEQsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO0FBQ3pDLFlBQVksSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7QUFDdkMsZ0JBQWdCLFlBQVksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUNwRCxnQkFBZ0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztBQUMxQyxnQkFBZ0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3ZGLGFBQWE7QUFDYixZQUFZLElBQUksSUFBSSxDQUFDLDJCQUEyQixFQUFFO0FBQ2xELGdCQUFnQixZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDL0QsZ0JBQWdCLElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUM7QUFDckQsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUN6RixhQUFhO0FBQ2IsWUFBWSxJQUFJLEVBQUUsR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsV0FBVyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUM7QUFDbEcsWUFBWSxxQkFBcUIsQ0FBQyxZQUFZO0FBQzlDLGdCQUFnQixLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsRCxnQkFBZ0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDdkQsZ0JBQWdCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QyxhQUFhLENBQUMsQ0FBQztBQUNmLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ3ZDLFFBQVEsSUFBSSxDQUFDLCtCQUErQixFQUFFLENBQUM7QUFDL0MsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQzVELFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM1QixLQUFLLENBQUM7QUFDTixJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsWUFBWTtBQUMzRCxRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUMzQixLQUFLLENBQUM7QUFDTixJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBWTtBQUN2RCxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUMvQixZQUFZLG9CQUFvQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNwRCxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsWUFBWSxHQUFHLHFCQUFxQixDQUFDLFlBQVk7QUFDOUQsWUFBWSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDcEMsWUFBWSxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUNuQyxTQUFTLENBQUMsQ0FBQztBQUNYLEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFVLFNBQVMsRUFBRTtBQUN0RSxRQUFRLElBQUksU0FBUyxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7QUFDakUsUUFBUSxJQUFJLFNBQVMsRUFBRTtBQUN2QixZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdDLFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNoRCxTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVk7QUFDNUQsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekgsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLFlBQVk7QUFDM0QsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxxQkFBcUIsQ0FBQyxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUgsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsb0JBQW9CLEdBQUcsWUFBWTtBQUNyRSxRQUFRLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ3JELEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLHVCQUF1QixHQUFHLFlBQVk7QUFDeEUsUUFBUSxPQUFPO0FBQ2YsWUFBWSxlQUFlLEVBQUUsU0FBUztBQUN0QyxZQUFZLG9CQUFvQixFQUFFLEtBQUs7QUFDdkMsWUFBWSxXQUFXLEVBQUUsS0FBSztBQUM5QixZQUFZLGNBQWMsRUFBRSxLQUFLO0FBQ2pDLFlBQVkscUJBQXFCLEVBQUUsS0FBSztBQUN4QyxZQUFZLG9CQUFvQixFQUFFLEtBQUs7QUFDdkMsU0FBUyxDQUFDO0FBQ1YsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0EsSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEdBQUcsVUFBVSxtQkFBbUIsRUFBRTtBQUN6RixRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksbUJBQW1CLEVBQUU7QUFDakMsWUFBWSxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUU7QUFDOUQsZ0JBQWdCLEtBQUssQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzFGLGFBQWEsQ0FBQyxDQUFDO0FBQ2YsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7QUFDNUMsZ0JBQWdCLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3hFLGFBQWE7QUFDYixTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDN0UsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDM0UsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLEdBQUcsVUFBVSxHQUFHLEVBQUU7QUFDakYsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO0FBQ3BDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDdEYsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLGdDQUFnQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUN4RSxnQkFBZ0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDcEcsYUFBYSxDQUFDLENBQUM7QUFDZixTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEdBQUcsWUFBWTtBQUN4RSxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRTtBQUMxRCxZQUFZLEtBQUssQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ3hGLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDL0UsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLDRCQUE0QixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDN0UsUUFBUSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUU7QUFDeEMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUN0RSxTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsK0JBQStCLEdBQUcsWUFBWTtBQUNoRixRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsNEJBQTRCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3BGLFFBQVEsZ0NBQWdDLENBQUMsT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQ3BFLFlBQVksS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQ0FBb0MsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDbEcsU0FBUyxDQUFDLENBQUM7QUFDWCxLQUFLLENBQUM7QUFDTixJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxjQUFjLEdBQUcsWUFBWTtBQUMvRCxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksYUFBYSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sQ0FBQztBQUN4RCxRQUFRLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDOUMsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFO0FBQ3BDLFlBQVksSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMzQyxnQkFBZ0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUUsYUFBYTtBQUNiLFNBQVMsQ0FBQyxDQUFDO0FBQ1gsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQzdELFFBQVEsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLEVBQUU7QUFDOUMsWUFBWSxPQUFPO0FBQ25CLFNBQVM7QUFDVCxRQUFRLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztBQUNwRCxRQUFRLElBQUksZUFBZSxDQUFDLFdBQVcsRUFBRTtBQUN6QyxZQUFZLE9BQU87QUFDbkIsU0FBUztBQUNUO0FBQ0EsUUFBUSxJQUFJLHVCQUF1QixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztBQUNwRSxRQUFRLElBQUksaUJBQWlCLEdBQUcsdUJBQXVCLElBQUksR0FBRyxLQUFLLFNBQVMsSUFBSSx1QkFBdUIsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQztBQUMxSCxRQUFRLElBQUksaUJBQWlCLEVBQUU7QUFDL0IsWUFBWSxPQUFPO0FBQ25CLFNBQVM7QUFDVCxRQUFRLGVBQWUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0FBQzNDLFFBQVEsZUFBZSxDQUFDLGNBQWMsR0FBRyxHQUFHLEtBQUssU0FBUyxDQUFDO0FBQzNELFFBQVEsZUFBZSxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUM7QUFDOUMsUUFBUSxlQUFlLENBQUMscUJBQXFCLEdBQUcsZUFBZSxDQUFDLGNBQWMsR0FBRyxLQUFLLEdBQUcsR0FBRyxLQUFLLFNBQVMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLFlBQVksSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLGFBQWEsQ0FBQyxDQUFDO0FBQ3BNLFFBQVEsSUFBSSxpQkFBaUIsR0FBRyxHQUFHLEtBQUssU0FBUztBQUNqRCxZQUFZLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDO0FBQ3ZDLFlBQVksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsTUFBTSxFQUFFLEVBQUUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzNHLFFBQVEsSUFBSSxpQkFBaUIsRUFBRTtBQUMvQjtBQUNBLFlBQVksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDekMsWUFBWSxPQUFPO0FBQ25CLFNBQVM7QUFDVCxRQUFRLElBQUksR0FBRyxLQUFLLFNBQVMsRUFBRTtBQUMvQixZQUFZLGdCQUFnQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDOUMsWUFBWSxJQUFJLENBQUMsNkJBQTZCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDcEQsU0FBUztBQUNULFFBQVEsZUFBZSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqRixRQUFRLElBQUksZUFBZSxDQUFDLG9CQUFvQixFQUFFO0FBQ2xELFlBQVksSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDdEMsU0FBUztBQUNULFFBQVEscUJBQXFCLENBQUMsWUFBWTtBQUMxQztBQUNBLFlBQVksZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0FBQ2xDLFlBQVksSUFBSSxDQUFDLGVBQWUsQ0FBQyxvQkFBb0I7QUFDckQsbUJBQW1CLEdBQUcsS0FBSyxTQUFTO0FBQ3BDLG9CQUFvQixHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixlQUFlLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFGLGdCQUFnQixJQUFJLGVBQWUsQ0FBQyxvQkFBb0IsRUFBRTtBQUMxRCxvQkFBb0IsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDL0MsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYixZQUFZLElBQUksQ0FBQyxlQUFlLENBQUMsb0JBQW9CLEVBQUU7QUFDdkQ7QUFDQSxnQkFBZ0IsS0FBSyxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ3pFLGFBQWE7QUFDYixTQUFTLENBQUMsQ0FBQztBQUNYLEtBQUssQ0FBQztBQUNOLElBQUksbUJBQW1CLENBQUMsU0FBUyxDQUFDLHVCQUF1QixHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQzNFLFFBQVEsT0FBTyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxDQUFDLElBQUksS0FBSyxTQUFTO0FBQzNELFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUU7QUFDMUMsWUFBWSxJQUFJLENBQUM7QUFDakIsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEdBQUcsWUFBWTtBQUNuRSxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksRUFBRSxHQUFHLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxzQkFBc0IsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsb0JBQW9CLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0FBQ2pKLFFBQVEsSUFBSSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxFQUFFLGVBQWUsR0FBRyxFQUFFLENBQUMsZUFBZSxFQUFFLGFBQWEsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO0FBQ3hILFFBQVEsSUFBSSx1QkFBdUIsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsdUJBQXVCLENBQUM7QUFDMUYsUUFBUSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDL0IsUUFBUSxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUM7QUFDaEMsUUFBUSxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7QUFDOUIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRTtBQUN6QyxZQUFZLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLFVBQVUsR0FBRyxFQUFFLENBQUMsVUFBVSxFQUFFLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO0FBQzdHLFlBQVksY0FBYyxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ3pFLFlBQVksWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO0FBQ25FLFNBQVM7QUFDVCxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsc0JBQXNCLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDL0UsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxDQUFDO0FBQzNFO0FBQ0EsUUFBUSxZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDNUMsUUFBUSxZQUFZLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7QUFDdkQsUUFBUSxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztBQUMzQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ2xEO0FBQ0EsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDM0MsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM3QyxRQUFRLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLHdCQUF3QixFQUFFLENBQUMsRUFBRSxFQUFFLHVCQUF1QixDQUFDLENBQUM7QUFDOUgsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsNEJBQTRCLEdBQUcsWUFBWTtBQUM3RSxRQUFRLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEdBQUcsRUFBRSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUM7QUFDL0gsUUFBUSxJQUFJLFVBQVUsQ0FBQztBQUN2QixRQUFRLElBQUkscUJBQXFCLEVBQUU7QUFDbkMsWUFBWSxVQUFVLEdBQUcsd0JBQXdCLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztBQUMzSSxTQUFTO0FBQ1QsYUFBYTtBQUNiLFlBQVksVUFBVSxHQUFHO0FBQ3pCLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQztBQUN4QyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7QUFDekMsYUFBYSxDQUFDO0FBQ2QsU0FBUztBQUNUO0FBQ0EsUUFBUSxVQUFVLEdBQUc7QUFDckIsWUFBWSxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztBQUNyRCxZQUFZLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBQ3JELFNBQVMsQ0FBQztBQUNWLFFBQVEsSUFBSSxRQUFRLEdBQUc7QUFDdkIsWUFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDaEUsWUFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7QUFDakUsU0FBUyxDQUFDO0FBQ1YsUUFBUSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7QUFDOUQsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsOEJBQThCLEdBQUcsWUFBWTtBQUMvRSxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QjtBQUNBO0FBQ0EsUUFBUSxJQUFJLGVBQWUsR0FBRyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0FBQzdFLFFBQVEsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztBQUNySCxRQUFRLElBQUksa0JBQWtCLEdBQUcsb0JBQW9CLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDdEUsUUFBUSxJQUFJLGtCQUFrQixJQUFJLElBQUksQ0FBQyw0QkFBNEIsRUFBRTtBQUNyRSxZQUFZLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0FBQy9DLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDbkQsWUFBWSxJQUFJLENBQUMsMkJBQTJCLEdBQUcsVUFBVSxDQUFDLFlBQVk7QUFDdEUsZ0JBQWdCLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzNELGFBQWEsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMzQyxTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsMkJBQTJCLEdBQUcsWUFBWTtBQUM1RSxRQUFRLElBQUksYUFBYSxHQUFHLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFDekUsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNoRCxRQUFRLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxLQUFLLENBQUM7QUFDbEQsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixFQUFFLENBQUM7QUFDM0MsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEdBQUcsWUFBWTtBQUN0RSxRQUFRLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQztBQUN6QixRQUFRLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0FBQzlFLFFBQVEsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQy9EO0FBQ0E7QUFDQSxRQUFRLFVBQVUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxLQUFLLENBQUMsd0JBQXdCLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDakksS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLFlBQVk7QUFDNUQsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7QUFDcEQ7QUFDQSxRQUFRLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFO0FBQzFDLFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBQ2xELFFBQVEsSUFBSSxlQUFlLENBQUMsY0FBYyxFQUFFO0FBQzVDLFlBQVkscUJBQXFCLENBQUMsWUFBWSxFQUFFLE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzdGLFlBQVksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7QUFDekMsU0FBUztBQUNULGFBQWE7QUFDYixZQUFZLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDO0FBQ25ELFlBQVkscUJBQXFCLENBQUMsWUFBWTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztBQUNuRSxnQkFBZ0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xELGdCQUFnQixLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUM5QyxhQUFhLENBQUMsQ0FBQztBQUNmLFNBQVM7QUFDVCxLQUFLLENBQUM7QUFDTixJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxVQUFVLEVBQUUsRUFBRTtBQUN2RSxRQUFRLElBQUkscUJBQXFCLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFFLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztBQUM3RyxRQUFRLElBQUkscUJBQXFCLElBQUksb0JBQW9CLEVBQUU7QUFDM0QsWUFBWSxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztBQUNsRCxTQUFTO0FBQ1QsS0FBSyxDQUFDO0FBQ04sSUFBSSxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFlBQVk7QUFDaEUsUUFBUSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7QUFDekIsUUFBUSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztBQUN6RCxRQUFRLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQUksZ0JBQWdCLEdBQUcsWUFBWTtBQUMzQyxZQUFZLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDM0csWUFBWSxPQUFPLFVBQVUsR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3BFLFNBQVMsQ0FBQztBQUNWLFFBQVEsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxHQUFHLE1BQU0sR0FBRyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ25GO0FBQ0EsUUFBUSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUNoRztBQUNBLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLFdBQVcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQ2pFLFlBQVksSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ2hELFNBQVM7QUFDVCxhQUFhO0FBQ2IsWUFBWSxJQUFJLENBQUMsWUFBWSxHQUFHLFdBQVcsQ0FBQztBQUM1QyxTQUFTO0FBQ1QsUUFBUSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7QUFDakUsUUFBUSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUNwQyxLQUFLLENBQUM7QUFDTixJQUFJLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsR0FBRyxZQUFZO0FBQ3JFLFFBQVEsSUFBSSxFQUFFLEdBQUcsbUJBQW1CLENBQUMsT0FBTyxFQUFFLFdBQVcsR0FBRyxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDO0FBQ3pKLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztBQUM5RSxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwRSxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRTtBQUN4QyxZQUFZLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztBQUNwQyxnQkFBZ0IsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRixnQkFBZ0IsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuRixhQUFhLENBQUM7QUFDZCxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDeEYsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3RGLFNBQVM7QUFDVCxLQUFLLENBQUM7QUFDTixJQUFJLE9BQU8sbUJBQW1CLENBQUM7QUFDL0IsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztBQzVjakIsTUFBTSxFQUFFLFlBQVksRUFBRSxHQUFHLE1BQU0sQ0FBQztBQUNoQyxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDO0FBQzdCO0FBQ2UsU0FBUyxNQUFNO0FBQzlCLEVBQUUsSUFBSTtBQUNOLEVBQUU7QUFDRixJQUFJLE1BQU0sR0FBRyxJQUFJO0FBQ2pCLElBQUksT0FBTyxHQUFHLEtBQUs7QUFDbkIsSUFBSSxTQUFTLEdBQUcsS0FBSztBQUNyQixJQUFJLFFBQVEsR0FBRyxLQUFLO0FBQ3BCLElBQUksS0FBSyxHQUFHLElBQUk7QUFDaEIsSUFBSSxNQUFNLEdBQUcsSUFBSTtBQUNqQixJQUFJLFdBQVcsR0FBRyxJQUFJO0FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUk7QUFDdkIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBQzNELElBQUksV0FBVyxHQUFHLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNqRSxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUNuRSxJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ25DLEdBQUcsR0FBRyxFQUFFO0FBQ1IsRUFBRTtBQUNGLEVBQUUsSUFBSSxRQUFRLENBQUM7QUFDZixFQUFFLElBQUksaUJBQWlCLEdBQUcsVUFBVSxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDL0QsRUFBRSxJQUFJLG9CQUFvQixDQUFDO0FBQzNCLEVBQUUsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3pCLEVBQUUsSUFBSSxjQUFjLEdBQUcsV0FBVyxDQUFDO0FBQ25DLEVBQUUsSUFBSSxlQUFlLEdBQUcsWUFBWSxDQUFDO0FBQ3JDO0FBQ0EsRUFBRSxTQUFTLFdBQVcsR0FBRztBQUN6QixJQUFJLElBQUksT0FBTyxFQUFFO0FBQ2pCLE1BQU0sUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDckMsTUFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7QUFDL0IsUUFBUSxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNqRCxRQUFRLFdBQVcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ3RELE9BQU8sTUFBTSxJQUFJLEtBQUssS0FBSyxXQUFXLEVBQUU7QUFDeEMsUUFBUSxXQUFXLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUNwRCxRQUFRLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ25ELE9BQU8sTUFBTTtBQUNiLFFBQVEsV0FBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDcEQsUUFBUSxXQUFXLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUN0RCxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLElBQUksUUFBUSxJQUFJLFNBQVMsS0FBSyxNQUFNLEVBQUU7QUFDMUMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxNQUFNLEVBQUU7QUFDbEIsUUFBUSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDNUIsT0FBTyxNQUFNLElBQUksTUFBTSxLQUFLLEtBQUssRUFBRTtBQUNuQyxRQUFRLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM5QixPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJLElBQUksTUFBTSxJQUFJLENBQUMsUUFBUSxFQUFFO0FBQzdCLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQUM7QUFDekMsUUFBUSxRQUFRO0FBQ2hCLFFBQVEsc0JBQXNCLEVBQUUsTUFBTUMsb0JBQXlCLENBQUMsTUFBTSxDQUFDO0FBQ3ZFLFFBQVEsbUJBQW1CLEVBQUUsTUFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUU7QUFDL0QsUUFBUSxtQkFBbUIsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztBQUM5RCxRQUFRLG9DQUFvQyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU87QUFDL0QsVUFBVSxRQUFRLENBQUMsZUFBZSxDQUFDLG1CQUFtQjtBQUN0RCxZQUFZLE9BQU87QUFDbkIsWUFBWSxPQUFPO0FBQ25CLFlBQVksWUFBWSxFQUFFO0FBQzFCLFdBQVc7QUFDWCxRQUFRLDRCQUE0QixFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU87QUFDdkQsVUFBVSxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUUsbUJBQW1CO0FBQ25ELFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxZQUFZLEVBQUU7QUFDMUIsV0FBVztBQUNYLFFBQVEsdUJBQXVCLEVBQUUsQ0FBQyxPQUFPO0FBQ3pDLFVBQVUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUM7QUFDdkQsUUFBUSxtQkFBbUIsRUFBRSxPQUFPO0FBQ3BDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxXQUFXO0FBQy9CLFVBQVUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxXQUFXO0FBQy9CLFNBQVMsQ0FBQztBQUNWLFFBQVEsZUFBZSxFQUFFO0FBQ3pCLFVBQVUsTUFBTSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxNQUFNO0FBQzVFLFFBQVEsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUTtBQUMzQyxRQUFRLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTO0FBQ3RDLFFBQVEsa0NBQWtDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTztBQUM3RCxVQUFVLFFBQVEsQ0FBQyxlQUFlLENBQUMsZ0JBQWdCO0FBQ25ELFlBQVksT0FBTztBQUNuQixZQUFZLE9BQU87QUFDbkIsWUFBWSxZQUFZLEVBQUU7QUFDMUIsV0FBVztBQUNYLFFBQVEsMEJBQTBCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTztBQUNyRCxVQUFVLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRSxnQkFBZ0I7QUFDaEQsWUFBWSxPQUFPO0FBQ25CLFlBQVksT0FBTztBQUNuQixZQUFZLFlBQVksRUFBRTtBQUMxQixXQUFXO0FBQ1gsUUFBUSxxQkFBcUIsRUFBRSxDQUFDLE9BQU87QUFDdkMsVUFBVSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQztBQUNwRCxRQUFRLFdBQVc7QUFDbkIsUUFBUSxpQkFBaUIsRUFBRSxRQUFRO0FBQ25DLE9BQU8sQ0FBQyxDQUFDO0FBQ1Q7QUFDQSxNQUFNLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTTtBQUM3QixRQUFRLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUN4QixRQUFRLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekMsT0FBTyxDQUFDLENBQUM7QUFDVCxLQUFLLE1BQU0sSUFBSSxRQUFRLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDcEMsTUFBTSxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU07QUFDN0IsUUFBUSxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDM0IsUUFBUSxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3hCLE9BQU8sQ0FBQyxDQUFDO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0osTUFBTSxRQUFRO0FBQ2QsT0FBTyxjQUFjLEtBQUssV0FBVyxJQUFJLGVBQWUsS0FBSyxZQUFZLENBQUM7QUFDMUUsTUFBTTtBQUNOLE1BQU0sY0FBYyxHQUFHLFdBQVcsQ0FBQztBQUNuQyxNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUM7QUFDckM7QUFDQSxNQUFNLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUN6QixNQUFNLHFCQUFxQixDQUFDLE1BQU07QUFDbEMsUUFBUSxJQUFJLFFBQVEsRUFBRTtBQUN0QixVQUFVLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUMxQixVQUFVLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDM0MsU0FBUztBQUNULE9BQU8sQ0FBQyxDQUFDO0FBQ1QsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtBQUM5QixNQUFNLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO0FBQ2pELEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLFdBQVcsRUFBRSxDQUFDO0FBQ2hCO0FBQ0EsRUFBRSxJQUFJLGlCQUFpQixFQUFFO0FBQ3pCLElBQUksb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckQsR0FBRztBQUNIO0FBQ0EsRUFBRSxTQUFTLE1BQU0sR0FBRztBQUNwQixJQUFJLElBQUksUUFBUSxFQUFFO0FBQ2xCLE1BQU0sUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3hCLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxFQUFFLE9BQU87QUFDVCxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDbEIsTUFBTSxDQUFDO0FBQ1AsUUFBUSxNQUFNO0FBQ2QsUUFBUSxPQUFPO0FBQ2YsUUFBUSxTQUFTO0FBQ2pCLFFBQVEsUUFBUTtBQUNoQixRQUFRLEtBQUs7QUFDYixRQUFRLE1BQU07QUFDZCxRQUFRLFdBQVc7QUFDbkIsUUFBUSxZQUFZO0FBQ3BCLFFBQVEsUUFBUTtBQUNoQixRQUFRLFdBQVc7QUFDbkIsUUFBUSxRQUFRO0FBQ2hCLFFBQVEsV0FBVztBQUNuQixPQUFPLEdBQUc7QUFDVixRQUFRLE1BQU0sRUFBRSxJQUFJO0FBQ3BCLFFBQVEsT0FBTyxFQUFFLEtBQUs7QUFDdEIsUUFBUSxTQUFTLEVBQUUsS0FBSztBQUN4QixRQUFRLFFBQVEsRUFBRSxLQUFLO0FBQ3ZCLFFBQVEsS0FBSyxFQUFFLElBQUk7QUFDbkIsUUFBUSxNQUFNLEVBQUUsSUFBSTtBQUNwQixRQUFRLFdBQVcsRUFBRSxJQUFJO0FBQ3pCLFFBQVEsWUFBWSxFQUFFLElBQUk7QUFDMUIsUUFBUSxRQUFRLEVBQUUsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBQzlELFFBQVEsV0FBVyxFQUFFLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNwRSxRQUFRLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUN0RSxRQUFRLFdBQVcsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3RDLFFBQVEsR0FBRyxLQUFLO0FBQ2hCLE9BQU8sRUFBRTtBQUNULE1BQU0sV0FBVyxFQUFFLENBQUM7QUFDcEIsS0FBSztBQUNMO0FBQ0EsSUFBSSxPQUFPLEdBQUc7QUFDZCxNQUFNLElBQUksUUFBUSxFQUFFO0FBQ3BCLFFBQVEsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQzNCLFFBQVEsUUFBUSxHQUFHLElBQUksQ0FBQztBQUN4QixRQUFRLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzFDLFFBQVEsV0FBVyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDcEQsUUFBUSxXQUFXLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztBQUN0RCxPQUFPO0FBQ1A7QUFDQSxNQUFNLElBQUksb0JBQW9CLEVBQUU7QUFDaEMsUUFBUSxvQkFBb0IsRUFBRSxDQUFDO0FBQy9CLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRyxDQUFDO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJDdEtRLEdBQU07OzsyQkFDTCxHQUFLOzs7OytCQWxCTCxRQUFRO21CQUNaLEdBQVMsTUFBRyxJQUFJO0lBQ2pCLCtCQUErQixFQUFFLElBQUk7SUFDckMsc0NBQXNDLFlBQUUsR0FBSzsyQkFDMUMsR0FBZTs7OzsrQkFFYixNQUFNLENBQUMsT0FBTyxvQkFBQyxHQUFjLEtBQ2pDLEdBQUcsU0FDSCxNQUFNLFlBQUUsR0FBSyxNQUNiLElBQUksQ0FBQyxHQUFHOzs7OENBQ0wsR0FBWSxPQUFHLE9BQU8sR0FBRyxJQUFJOzs7aUVBQ3BCLEdBQVk7a0JBQUksR0FBUSxNQUFHLE1BQU0sR0FBRyxPQUFPO0tBQUksSUFBSTs7O2dFQUNwRCxHQUFZO2tCQUFJLEdBQVEsTUFBRyxNQUFNLEdBQUcsT0FBTztLQUFJLElBQUk7O29CQUc3RCxHQUFhO2tCQUNiLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUF4QmIsTUFBTSxhQUFOLEdBQU07TUFDTixTQUFTLEVBQUUsS0FBSztNQUNoQixRQUFRLGVBQVIsR0FBUTtNQUNSLFdBQVcsa0JBQVgsR0FBVztNQUNYLFFBQVEsZUFBUixHQUFROzs7Z0ZBR00sR0FBRzs7Ozs7Ozs7a0JBa0JiLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQUNMLEdBQUs7Ozs7Ozs7Ozs7OzttSEFsQkwsUUFBUTtvQkFDWixHQUFTLE1BQUcsSUFBSTtLQUNqQiwrQkFBK0IsRUFBRSxJQUFJO0tBQ3JDLHNDQUFzQyxZQUFFLEdBQUs7NEJBQzFDLEdBQWU7O3VHQUViLE1BQU0sQ0FBQyxPQUFPLG9CQUFDLEdBQWMsS0FDakMsR0FBRyxTQUNILE1BQU0sWUFBRSxHQUFLLE1BQ2IsSUFBSSxDQUFDLEdBQUc7O3lIQUVJLEdBQVk7bUJBQUksR0FBUSxNQUFHLE1BQU0sR0FBRyxPQUFPO01BQUksSUFBSTs7O3dIQUNwRCxHQUFZO21CQUFJLEdBQVEsTUFBRyxNQUFNLEdBQUcsT0FBTztNQUFJLElBQUk7Ozt3REFHN0QsR0FBYTtzREFDYixHQUFXOzs7O0lBeEJiLE1BQU0sYUFBTixHQUFNO0lBQ04sU0FBUyxFQUFFLEtBQUs7SUFDaEIsUUFBUSxlQUFSLEdBQVE7SUFDUixXQUFXLGtCQUFYLEdBQVc7SUFDWCxRQUFRLGVBQVIsR0FBUTs7O29JQUdNLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFRVixJQUFJLEVBQUUsS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLOzs7Ozs7Ozs7T0EwQnJDLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxxQkFBcUI7T0FFckQsR0FBRztjQUNWLFNBQVMsR0FBRyxFQUFFO09BRVAsS0FBSyxHQUFHLEVBQUU7Z0JBQ2pCLFNBQVM7T0FFRixNQUFNLEdBQUcsSUFBSTtPQUNiLEtBQUssR0FBRyxLQUFLO0tBRXBCLE9BQU87S0FDUCxRQUFRO0tBQ1IsZUFBZTtLQUNmLGNBQWM7S0FDZCxhQUFhO09BQ1gsb0JBQW9CLEdBQUcsVUFBVSxDQUNyQywrQ0FBK0M7OztLQUU3QyxRQUFRLEdBQUcscUJBQXFCO09BQzlCLFlBQVksR0FBRyxVQUFVLENBQUMsb0NBQW9DO09BQzlELEtBQUssR0FBRyxVQUFVLENBQUMscUNBQXFDOzs7O01BRXpELFNBQVM7WUFDRixLQUFLLENBQ2IscUdBQXFHOzs7Q0FZekcsT0FBTztrQkFDTCxRQUFRLE9BQU8sbUNBQW1DO0lBQ2hELGNBQWM7WUFDTCxZQUFZOztJQUVyQixPQUFPO0lBQ1AsT0FBTyxFQUFFLE9BQU87SUFDaEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxRQUFRO0lBQ1Isb0JBQW9CLEVBQUcsS0FBSztxQkFDMUIsUUFBUSxHQUFHLEtBQUs7S0FFaEIsUUFBUSxDQUFDLFVBQVUsSUFBSSxVQUFVLElBQy9CLEtBQUssRUFBRSxNQUFNLEVBQ2IsUUFBUSxFQUNSLFNBQVM7O0lBR2IseUJBQXlCO1lBQ2hCLFVBQVUsR0FBRyxxQkFBcUI7Ozs7UUFJdkMsUUFBUTtHQUNaLFNBQVM7T0FDTCxRQUFRO1dBQ0gsUUFBUTs7T0FFYixRQUFRLENBQUMsS0FBSztRQUNaLFFBQVEsS0FBSyxLQUFLO3FCQUNwQixRQUFRLEdBQUcsS0FBSzs7Ozs7RUFLdEIsUUFBUSxDQUFDLFVBQVUsSUFBSSxxQ0FBcUMsRUFBRSxRQUFRO0VBRXRFLFFBQVEsQ0FBQyxJQUFJOzs7R0FHWCxRQUFRLENBQUMsVUFBVSxJQUFJLHVDQUF1QyxFQUFFLFFBQVE7R0FFeEUsUUFBUSxDQUFDLE9BQU87Ozs7VUFJWCxRQUFRLENBQUMsU0FBUztTQUNsQixTQUFTLElBQUksZUFBZTtJQUMvQixlQUFlLENBQUMsU0FBUztJQUN6QixVQUFVLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTOzs7VUFHdEMsUUFBUSxDQUFDLFNBQVM7T0FDcEIsZUFBZSxDQUFDLFNBQVM7bUJBQzVCLGVBQWUsQ0FBQyxTQUFTLElBQUksSUFBSTs7OztVQUk1QixXQUFXLENBQUMsU0FBUztRQUN0QixTQUFTLElBQUksZUFBZSxLQUFLLGVBQWUsQ0FBQyxTQUFTO21CQUM5RCxlQUFlLENBQUMsU0FBUyxJQUFJLEtBQUs7Ozs7VUFJN0IsT0FBTyxDQUFDLElBQUk7U0FDWixJQUFJLElBQUksYUFBYTtJQUN4QixhQUFhLENBQUMsSUFBSTtJQUNsQixVQUFVLEdBQUcsWUFBWSxDQUFDLElBQUk7OztVQUczQixPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUs7TUFDdEIsYUFBYSxDQUFDLElBQUksTUFBTSxLQUFLO29CQUMvQixhQUFhLENBQUMsSUFBSSxJQUFJLEtBQUs7Ozs7VUFJdEIsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLO01BQ3ZCLGNBQWMsQ0FBQyxJQUFJLEtBQUssS0FBSztPQUMzQixLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssSUFBSSxJQUFJO1dBQ3hCLGNBQWMsQ0FBQyxJQUFJOzs7b0JBRzFCLGNBQWMsQ0FBQyxJQUFJLElBQUksS0FBSzs7Ozs7VUFLbEIsVUFBVTtTQUNqQixPQUFPOzs7OztHQXpLTCxPQUFPOzs7Ozt1QkF1QlAsS0FBSyxLQUNiLEtBQUssQ0FBQyxnQkFBZ0IsSUFBSSxRQUFRLElBQUksUUFBUSxDQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWdEdEQsUUFBUSxJQUFJLFFBQVEsQ0FBQyxVQUFVLE9BQU8sUUFBUTtJQUNuRCxRQUFRLENBQUMsYUFBYTs7Ozs7T0FHakIsUUFBUSxLQUFLLFFBQVEsQ0FBQyxVQUFVLE1BQU0sUUFBUTtJQUNuRCxRQUFRLENBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NDMUVsQixHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEVBRkMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7aUhBRWYsR0FBVztvSUFGQyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FTUixHQUFHO09BRVIsYUFBYSxHQUFHLG9CQUFvQixDQUFDLHFCQUFxQjtLQUU1RCxPQUFPLEdBQUcsSUFBSTs7VUFFRixVQUFVO1NBQ2pCLE9BQU87Ozs7O0dBakJMLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ0VaLEdBQWEsZ0JBQUssR0FBRzs7O1VBQ3BCLFFBQVE7bUJBQ1osR0FBUyxNQUFHLElBQUk7SUFDakIsbUJBQW1CLGNBQUUsR0FBTyxRQUFLLFFBQVE7SUFDekMsZ0JBQWdCLGNBQUUsR0FBTyxRQUFLLEtBQUs7SUFDbkMscUJBQXFCLGNBQUUsR0FBTyxRQUFLLEtBQUs7SUFDeEMsdUJBQXVCLGNBQUUsR0FBTyxRQUFLLFlBQVk7SUFDakQscUJBQXFCLGNBQUUsR0FBTyxRQUFLLFVBQVU7SUFDN0Msa0JBQWtCLGNBQUUsR0FBTyxRQUFLLFFBQVE7SUFDeEMsNkJBQTZCLGNBQUUsR0FBTyxRQUFLLGtCQUFrQjtJQUM3RCxnREFBZ0QsY0FDOUMsR0FBTyxRQUFLLHVCQUF1QjtJQUNyQyxtQ0FBbUMsY0FDakMsR0FBTyxRQUFLLGlDQUFpQzs7O2NBRTdDLEdBQU8sUUFBSyxVQUFVO01BQUssYUFBYSxFQUFFLE9BQU87OztrQkFFakQsR0FBVzs7O2tDQW5CVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFFVCxHQUFhLGdCQUFLLEdBQUc7OzthQUNwQixRQUFRO3NCQUNaLEdBQVMsTUFBRyxJQUFJO09BQ2pCLG1CQUFtQixjQUFFLEdBQU8sUUFBSyxRQUFRO09BQ3pDLGdCQUFnQixjQUFFLEdBQU8sUUFBSyxLQUFLO09BQ25DLHFCQUFxQixjQUFFLEdBQU8sUUFBSyxLQUFLO09BQ3hDLHVCQUF1QixjQUFFLEdBQU8sUUFBSyxZQUFZO09BQ2pELHFCQUFxQixjQUFFLEdBQU8sUUFBSyxVQUFVO09BQzdDLGtCQUFrQixjQUFFLEdBQU8sUUFBSyxRQUFRO09BQ3hDLDZCQUE2QixjQUFFLEdBQU8sUUFBSyxrQkFBa0I7T0FDN0QsZ0RBQWdELGNBQzlDLEdBQU8sUUFBSyx1QkFBdUI7T0FDckMsbUNBQW1DLGNBQ2pDLEdBQU8sUUFBSyxpQ0FBaUM7Ozs2REFFN0MsR0FBTyxRQUFLLFVBQVU7U0FBSyxhQUFhLEVBQUUsT0FBTzs7O3NFQUVqRCxHQUFXOzs7Ozs7OztzREFuQlQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BNEJULGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxxQkFBcUI7T0FFckQsR0FBRztjQUNWLFNBQVMsR0FBRyxFQUFFO0tBR2QsT0FBTztPQUVBLFNBQVMsR0FBRyxJQUFJO09BRXJCLE9BQU8sR0FBRyxVQUFVLENBQUMsb0JBQW9CO09BQ3pDLFFBQVEsR0FBRyxVQUFVLENBQUMscUJBQXFCOztVQUVqQyxVQUFVO1NBQ2pCLE9BQU8sQ0FBQyxVQUFVOzs7OztHQXpDaEIsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0NGOEMsR0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJFQUF0QyxHQUFHOzs7Ozs7Ozs7Ozs7Ozt3R0FBd0IsR0FBVztvSUFBdEMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BUTdCLEdBQUc7T0FFUixhQUFhLEdBQUcsb0JBQW9CLENBQUMscUJBQXFCO0tBRTVELE9BQU8sR0FBRyxJQUFJOztVQUVGLFVBQVU7U0FDakIsT0FBTzs7Ozs7R0FmSixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNDQStDLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2RUFBdEMsR0FBRzs7Ozs7Ozs7Ozs7Ozs7a0hBQXdCLEdBQVc7b0lBQXRDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQVEvQixHQUFHO09BRVIsYUFBYSxHQUFHLG9CQUFvQixDQUFDLHFCQUFxQjtLQUU1RCxPQUFPLEdBQUcsSUFBSTs7VUFFRixVQUFVO1NBQ2pCLE9BQU87Ozs7O0dBZkYsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJDR2YsR0FBYSxnQkFBSyxHQUFHOzs7VUFDcEIsUUFBUTttQkFDWixHQUFTLE1BQUcsSUFBSTtJQUNqQixrQkFBa0IsY0FBRSxHQUFPLFFBQUssUUFBUTtJQUN4QyxlQUFlLGNBQUUsR0FBTyxRQUFLLEtBQUs7SUFDbEMsdUJBQXVCLGNBQUUsR0FBTyxRQUFLLGFBQWE7SUFDbEQsMkJBQTJCLGNBQUUsR0FBTyxRQUFLLGFBQWEsV0FBSSxHQUFFO0lBQzVELGVBQWUsY0FBRSxHQUFPLFFBQUssS0FBSztJQUNsQyxrQkFBa0IsY0FBRSxHQUFPLFFBQUssUUFBUTtJQUN4Qyw0QkFBNEIsY0FBRSxHQUFPLFFBQUssa0JBQWtCOzs7O2dCQUcxRCxHQUFTLFFBQUssR0FBRztNQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUk7O2tCQUN4RCxHQUFXOzs7a0NBZlQsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBRVQsR0FBYSxnQkFBSyxHQUFHOzs7YUFDcEIsUUFBUTtzQkFDWixHQUFTLE1BQUcsSUFBSTtPQUNqQixrQkFBa0IsY0FBRSxHQUFPLFFBQUssUUFBUTtPQUN4QyxlQUFlLGNBQUUsR0FBTyxRQUFLLEtBQUs7T0FDbEMsdUJBQXVCLGNBQUUsR0FBTyxRQUFLLGFBQWE7T0FDbEQsMkJBQTJCLGNBQUUsR0FBTyxRQUFLLGFBQWEsV0FBSSxHQUFFO09BQzVELGVBQWUsY0FBRSxHQUFPLFFBQUssS0FBSztPQUNsQyxrQkFBa0IsY0FBRSxHQUFPLFFBQUssUUFBUTtPQUN4Qyw0QkFBNEIsY0FBRSxHQUFPLFFBQUssa0JBQWtCOzs7O3FFQUcxRCxHQUFTLFFBQUssR0FBRztTQUFLLFNBQVMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUk7O3NFQUN4RCxHQUFXOzs7Ozs7OztzREFmVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F5QlQsYUFBYSxHQUFHLG9CQUFvQixDQUFDLHFCQUFxQjtPQUVyRCxHQUFHO2NBQ1YsU0FBUyxHQUFHLEVBQUU7T0FFUCxFQUFFLEdBQUcsS0FBSztLQUVqQixPQUFPO09BRUEsU0FBUyxHQUFHLENBQUM7T0FFbEIsT0FBTyxHQUFHLFVBQVUsQ0FBQyxtQkFBbUI7O1VBRTlCLFVBQVU7U0FDakIsT0FBTyxDQUFDLFVBQVU7Ozs7O0dBdENoQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkJDS1IsR0FBTzs7Ozs7Ozs7Ozs7Ozs7cUVBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUhRLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQXFCSCxHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lFQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBT2pDLE9BQU8sSUFBSSxTQUFTLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxPQUFPO0tBQ3JELFFBQVEsR0FBRyxTQUFTOzs7Ozs7Ozs7Ozs7NkNBckJELFFBQVEsR0FBRyxTQUFTOytDQUdwQixRQUFRLEdBQUcsV0FBVzsrQ0FHdEIsUUFBUSxHQUFHLFNBQVM7K0NBR3BCLFFBQVEsR0FBRyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkNuQi9CLEdBQU87Ozs7Ozs7Ozs7Ozs7O21FQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSVksR0FBUSxJQUFDLElBQUksQ0FBQyxJQUFJOzs7Ozs7Ozs7d0JBTnRCLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUZBTUgsR0FBUSxJQUFDLElBQUksQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUszQyxPQUFPLElBQUksT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU87S0FDdEQsUUFBUSxJQUFJLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrRENFUCxHQUFPLElBQUMsSUFBSTs7Ozs7OzsrRUFBWixHQUFPLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBSjlCQyxLQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFGUSxHQUFPLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29FQUFaLEdBQU8sSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREFzQkwsR0FBTyxJQUFDLElBQUk7Ozs7Ozs7K0VBQVosR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUo5QkEsS0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBRlEsR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvRUFBWixHQUFPLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBdUJMLEdBQU8sSUFBQyxJQUFJOzs7Ozs7OytFQUFaLEdBQU8sSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUVuQyxHQUFPLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7cUVBQVosR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQU5QQSxLQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFZSyxHQUFLLElBQUMsSUFBSTs7Ozs0QkFBWSxHQUFNLElBQUMsTUFBTTtjQUFHLEdBQU0sSUFBQyxHQUFHLFNBQWMsSUFBSSxDQUFDLEtBQUs7R0FBSSxNQUFNOzs7OzRCQUFJLEdBQU8sSUFBQyxHQUFHLFNBQTBDLElBQUksQ0FBQyxJQUFJOzs7Ozs7Ozs7dUJBckRqSyxHQUFNOzs7Ozs7Ozs7Ozs7O2VBR0QsR0FBSzs4Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7d0JBY1YsR0FBTzs7Ozs7Ozs7Ozs7O2dCQUVGLEdBQU07K0NBQU4sR0FBTTs7Ozs7Ozs7Ozs7OzBCQWFJLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrREE3QmpCLEdBQUs7Ozs7Ozs7Ozs7Ozs7bURBZ0JMLEdBQU07Ozs7Ozs4RUFhSSxHQUFPOzs7Ozs7OytFQXFCVCxHQUFLLElBQUMsSUFBSTs7a0ZBQVksR0FBTSxJQUFDLE1BQU07Z0JBQUcsR0FBTSxJQUFDLEdBQUcsU0FBYyxJQUFJLENBQUMsS0FBSztLQUFJLE1BQU07O21GQUFJLEdBQU8sSUFBQyxHQUFHLFNBQTBDLElBQUksQ0FBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFqRHJLLE9BQU8sSUFBSyxPQUFPLENBQUMsSUFBSTtlQWdCeEIsT0FBTyxJQUFLLE9BQU8sQ0FBQyxJQUFJO2VBaUMwQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUk7a0JBQXdDLElBQUksRUFBRSxLQUFLLFVBQVMsSUFBSSxNQUFNLEtBQUs7Ozs7OztPQXFCMUosTUFBTTtJQUVSLElBQUksRUFBRSxNQUFNLEVBQ1osSUFBSSxFQUFFLGtCQUFrQjs7R0FHeEIsSUFBSSxFQUFFLFFBQVE7R0FDZCxJQUFJLEVBQUUsb0JBQW9COztJQUcxQixJQUFJLEVBQUUsT0FBTyxFQUNiLElBQUksRUFBRSxtQkFBbUI7O0dBR3pCLElBQUksRUFBRSxTQUFTO0dBQ2YsSUFBSSxFQUFFLHFCQUFxQjs7OztPQUd6QixPQUFPO0lBQ1QsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsYUFBYTtJQUNqQyxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxlQUFlOztHQUNyQyxJQUFJLEVBQUUsV0FBVztHQUFFLElBQUksRUFBRSxrQkFBa0I7Ozs7T0FFekMsT0FBTztJQUNULElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUNyQyxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7OztLQUd2QyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUM7S0FDaEIsTUFBTTs7Ozs7Ozs7RUFwR08sS0FBSzs7Ozs7RUFnQkwsTUFBTTs7Ozs7RUFpQmpCLE9BQU8sQ0FBQyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQ3hCZ0IsR0FBTyxJQUFDLElBQUk7Ozs7Ozs7NkVBQVosR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUo5QkEsS0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQUZjLEdBQU8sSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0VBQVosR0FBTyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBWWxCLEdBQUssSUFBQyxJQUFJOzs7Ozs7Ozs7dUJBbkI1QixHQUFNOzs7Ozs7Ozs7Ozs7O2VBR0QsR0FBSzs2Q0FBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpREFBTCxHQUFLOzs7OzsrRUFnQlEsR0FBSyxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBZmhDLE9BQU8sSUFBSyxPQUFPLENBQUMsSUFBSTs7Ozs7O09BNEJ4QixNQUFNO0lBRVIsSUFBSSxFQUFFLE1BQU0sRUFDWixJQUFJLEVBQUUsa0JBQWtCOztHQUd4QixJQUFJLEVBQUUsUUFBUTtHQUNkLElBQUksRUFBRSxvQkFBb0I7O0lBRzFCLElBQUksRUFBRSxPQUFPLEVBQ2IsSUFBSSxFQUFFLG1CQUFtQjs7R0FHekIsSUFBSSxFQUFFLFNBQVM7R0FDZixJQUFJLEVBQUUscUJBQXFCOzs7O0tBSTNCLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7RUFoREwsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDTVAsZUFBZTs7Ozs7Ozs7OztlQU9mLGNBQWM7Ozs7Ozs7Ozs7ZUFNVixTQUFTOzs7Ozs7Ozs7O2VBSVQsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
