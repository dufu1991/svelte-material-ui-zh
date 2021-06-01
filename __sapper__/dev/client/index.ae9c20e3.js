import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a7 as create_slot, $ as assign, W as compute_rest_props, v as validate_slots, Y as get_current_component, X as getContext, ay as validate_store, az as component_subscribe, a0 as exclude_internal_props, p as element, x as claim_element, y as children, u as detach_dev, a9 as set_attributes, D as add_location, F as insert_dev, aa as action_destroyer, a8 as update_slot, a2 as get_spread_update, ab as is_function, J as transition_in, K as transition_out, ac as run_all, a6 as binding_callbacks, E as attr_dev, G as append_dev, ah as onMount, aU as tick, o as space, w as claim_space, ax as listen_dev, q as create_component, t as text, A as claim_component, z as claim_text, H as mount_component, aw as set_data_dev, M as destroy_component, a1 as empty, a4 as group_outros, a5 as check_outros, ak as bind, B as set_style, al as add_flush_callback, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { c as classMap, f as forwardEventsBuilder, u as useActions, _ as __extends, a as __assign, M as MDCFoundation, d as dispatch, R as Ripple, S as Set_1, C as Chip, T as Text } from './Text.abd87972.js';
import { B as Button_1 } from './Button.d66ce348.js';
import { C as CommonLabel } from './CommonLabel.6290f478.js';

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
 * KEY provides normalized string values for keys.
 */
var KEY = {
    UNKNOWN: 'Unknown',
    BACKSPACE: 'Backspace',
    ENTER: 'Enter',
    SPACEBAR: 'Spacebar',
    PAGE_UP: 'PageUp',
    PAGE_DOWN: 'PageDown',
    END: 'End',
    HOME: 'Home',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_UP: 'ArrowUp',
    ARROW_RIGHT: 'ArrowRight',
    ARROW_DOWN: 'ArrowDown',
    DELETE: 'Delete',
    ESCAPE: 'Escape',
    TAB: 'Tab',
};
var normalizedKeys = new Set();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
normalizedKeys.add(KEY.BACKSPACE);
normalizedKeys.add(KEY.ENTER);
normalizedKeys.add(KEY.SPACEBAR);
normalizedKeys.add(KEY.PAGE_UP);
normalizedKeys.add(KEY.PAGE_DOWN);
normalizedKeys.add(KEY.END);
normalizedKeys.add(KEY.HOME);
normalizedKeys.add(KEY.ARROW_LEFT);
normalizedKeys.add(KEY.ARROW_UP);
normalizedKeys.add(KEY.ARROW_RIGHT);
normalizedKeys.add(KEY.ARROW_DOWN);
normalizedKeys.add(KEY.DELETE);
normalizedKeys.add(KEY.ESCAPE);
normalizedKeys.add(KEY.TAB);
var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9,
};
var mappedKeyCodes = new Map();
// IE11 has no support for new Map with iterable so we need to initialize this
// by hand.
mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
mappedKeyCodes.set(KEY_CODE.END, KEY.END);
mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
var navigationKeys = new Set();
// IE11 has no support for new Set with iterable so we need to initialize this
// by hand.
navigationKeys.add(KEY.PAGE_UP);
navigationKeys.add(KEY.PAGE_DOWN);
navigationKeys.add(KEY.END);
navigationKeys.add(KEY.HOME);
navigationKeys.add(KEY.ARROW_LEFT);
navigationKeys.add(KEY.ARROW_UP);
navigationKeys.add(KEY.ARROW_RIGHT);
navigationKeys.add(KEY.ARROW_DOWN);
/**
 * normalizeKey returns the normalized string for a navigational action.
 */
function normalizeKey(evt) {
    var key = evt.key;
    // If the event already has a normalized key, return it
    if (normalizedKeys.has(key)) {
        return key;
    }
    // tslint:disable-next-line:deprecation
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
        return mappedKey;
    }
    return KEY.UNKNOWN;
}
/**
 * isNavigationEvent returns whether the event is a navigation event
 */
function isNavigationEvent(evt) {
    return navigationKeys.has(normalizeKey(evt));
}

/* packages/chips/LeadingIcon.svelte generated by Svelte v3.37.0 */

const file$7 = "packages/chips/LeadingIcon.svelte";

function create_fragment$a(ctx) {
	let i;
	let i_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	let i_levels = [
		{
			class: i_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-chip__icon": true,
				"mdc-chip__icon--leading": true,
				"mdc-chip__icon--leading-hidden": /*$filter*/ ctx[3] && /*$isSelected*/ ctx[4],
				.../*$leadingIconClasses*/ ctx[5]
			})
		},
		/*$$restProps*/ ctx[10]
	];

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
			i = claim_element(nodes, "I", { class: true });
			var i_nodes = children(i);
			if (default_slot) default_slot.l(i_nodes);
			i_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(i, i_data);
			add_location(i, file$7, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, i, anchor);

			if (default_slot) {
				default_slot.m(i, null);
			}

			/*i_binding*/ ctx[14](i);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, i, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[6].call(null, i))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4096) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[12], dirty, null, null);
				}
			}

			set_attributes(i, i_data = get_spread_update(i_levels, [
				(!current || dirty & /*className, $filter, $isSelected, $leadingIconClasses*/ 58 && i_class_value !== (i_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-chip__icon": true,
					"mdc-chip__icon--leading": true,
					"mdc-chip__icon--leading-hidden": /*$filter*/ ctx[3] && /*$isSelected*/ ctx[4],
					.../*$leadingIconClasses*/ ctx[5]
				}))) && { class: i_class_value },
				dirty & /*$$restProps*/ 1024 && /*$$restProps*/ ctx[10]
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
			if (detaching) detach_dev(i);
			if (default_slot) default_slot.d(detaching);
			/*i_binding*/ ctx[14](null);
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

function instance$9($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $filter;
	let $isSelected;
	let $leadingIconClasses;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("LeadingIcon", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	const filter = getContext("SMUI:chips:filter");
	validate_store(filter, "filter");
	component_subscribe($$self, filter, value => $$invalidate(3, $filter = value));
	const isSelected = getContext("SMUI:chips:chip:isSelected");
	validate_store(isSelected, "isSelected");
	component_subscribe($$self, isSelected, value => $$invalidate(4, $isSelected = value));
	const leadingIconClasses = getContext("SMUI:chips:chip:leadingIconClasses");
	validate_store(leadingIconClasses, "leadingIconClasses");
	component_subscribe($$self, leadingIconClasses, value => $$invalidate(5, $leadingIconClasses = value));
	let element;

	function getElement() {
		return element;
	}

	function i_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(2, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
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
		filter,
		isSelected,
		leadingIconClasses,
		element,
		getElement,
		$filter,
		$isSelected,
		$leadingIconClasses
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		element,
		$filter,
		$isSelected,
		$leadingIconClasses,
		forwardEvents,
		filter,
		isSelected,
		leadingIconClasses,
		$$restProps,
		getElement,
		$$scope,
		slots,
		i_binding
	];
}

class LeadingIcon extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$9, create_fragment$a, safe_not_equal, { use: 0, class: 1, getElement: 11 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LeadingIcon",
			options,
			id: create_fragment$a.name
		});
	}

	get use() {
		throw new Error("<LeadingIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<LeadingIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<LeadingIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<LeadingIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[11];
	}

	set getElement(value) {
		throw new Error("<LeadingIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/chips/TrailingIcon.svelte generated by Svelte v3.37.0 */

const file$6 = "packages/chips/TrailingIcon.svelte";

function create_fragment$9(ctx) {
	let span;
	let i;
	let i_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	let i_levels = [
		{
			class: i_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-chip__icon": true,
				"mdc-chip__icon--trailing": true
			})
		},
		/*$$restProps*/ ctx[4]
	];

	let i_data = {};

	for (let i = 0; i < i_levels.length; i += 1) {
		i_data = assign(i_data, i_levels[i]);
	}

	const block = {
		c: function create() {
			span = element("span");
			i = element("i");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { role: true });
			var span_nodes = children(span);
			i = claim_element(span_nodes, "I", { class: true });
			var i_nodes = children(i);
			if (default_slot) default_slot.l(i_nodes);
			i_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(i, i_data);
			add_location(i, file$6, 6, 2, 93);
			attr_dev(span, "role", "gridcell");
			add_location(span, file$6, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, i);

			if (default_slot) {
				default_slot.m(i, null);
			}

			/*span_binding*/ ctx[8](span);
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
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
				}
			}

			set_attributes(i, i_data = get_spread_update(i_levels, [
				(!current || dirty & /*className*/ 2 && i_class_value !== (i_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-chip__icon": true,
					"mdc-chip__icon--trailing": true
				}))) && { class: i_class_value },
				dirty & /*$$restProps*/ 16 && /*$$restProps*/ ctx[4]
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
			/*span_binding*/ ctx[8](null);
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

function instance$8($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("TrailingIcon", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
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
		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		forwardEvents,
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

	return [
		use,
		className,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		span_binding
	];
}

class TrailingIcon extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$8, create_fragment$9, safe_not_equal, { use: 0, class: 1, getElement: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TrailingIcon",
			options,
			id: create_fragment$9.name
		});
	}

	get use() {
		throw new Error("<TrailingIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<TrailingIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<TrailingIcon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<TrailingIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[5];
	}

	set getElement(value) {
		throw new Error("<TrailingIcon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
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
var InteractionTrigger;
(function (InteractionTrigger) {
    InteractionTrigger[InteractionTrigger["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    InteractionTrigger[InteractionTrigger["CLICK"] = 1] = "CLICK";
    InteractionTrigger[InteractionTrigger["BACKSPACE_KEY"] = 2] = "BACKSPACE_KEY";
    InteractionTrigger[InteractionTrigger["DELETE_KEY"] = 3] = "DELETE_KEY";
    InteractionTrigger[InteractionTrigger["SPACEBAR_KEY"] = 4] = "SPACEBAR_KEY";
    InteractionTrigger[InteractionTrigger["ENTER_KEY"] = 5] = "ENTER_KEY";
})(InteractionTrigger || (InteractionTrigger = {}));
var strings = {
    ARIA_HIDDEN: 'aria-hidden',
    INTERACTION_EVENT: 'MDCChipTrailingAction:interaction',
    NAVIGATION_EVENT: 'MDCChipTrailingAction:navigation',
    TAB_INDEX: 'tabindex',
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
var MDCChipTrailingActionFoundation = /** @class */ (function (_super) {
    __extends(MDCChipTrailingActionFoundation, _super);
    function MDCChipTrailingActionFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCChipTrailingActionFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCChipTrailingActionFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCChipTrailingActionFoundation, "defaultAdapter", {
        get: function () {
            return {
                focus: function () { return undefined; },
                getAttribute: function () { return null; },
                setAttribute: function () { return undefined; },
                notifyInteraction: function () { return undefined; },
                notifyNavigation: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCChipTrailingActionFoundation.prototype.handleClick = function (evt) {
        evt.stopPropagation();
        this.adapter.notifyInteraction(InteractionTrigger.CLICK);
    };
    MDCChipTrailingActionFoundation.prototype.handleKeydown = function (evt) {
        evt.stopPropagation();
        var key = normalizeKey(evt);
        if (this.shouldNotifyInteractionFromKey_(key)) {
            var trigger = this.getTriggerFromKey_(key);
            this.adapter.notifyInteraction(trigger);
            return;
        }
        if (isNavigationEvent(evt)) {
            this.adapter.notifyNavigation(key);
            return;
        }
    };
    MDCChipTrailingActionFoundation.prototype.removeFocus = function () {
        this.adapter.setAttribute(strings.TAB_INDEX, '-1');
    };
    MDCChipTrailingActionFoundation.prototype.focus = function () {
        this.adapter.setAttribute(strings.TAB_INDEX, '0');
        this.adapter.focus();
    };
    MDCChipTrailingActionFoundation.prototype.isNavigable = function () {
        return this.adapter.getAttribute(strings.ARIA_HIDDEN) !== 'true';
    };
    MDCChipTrailingActionFoundation.prototype.shouldNotifyInteractionFromKey_ = function (key) {
        var isFromActionKey = key === KEY.ENTER || key === KEY.SPACEBAR;
        var isFromDeleteKey = key === KEY.BACKSPACE || key === KEY.DELETE;
        return isFromActionKey || isFromDeleteKey;
    };
    MDCChipTrailingActionFoundation.prototype.getTriggerFromKey_ = function (key) {
        if (key === KEY.SPACEBAR) {
            return InteractionTrigger.SPACEBAR_KEY;
        }
        if (key === KEY.ENTER) {
            return InteractionTrigger.ENTER_KEY;
        }
        if (key === KEY.DELETE) {
            return InteractionTrigger.DELETE_KEY;
        }
        if (key === KEY.BACKSPACE) {
            return InteractionTrigger.BACKSPACE_KEY;
        }
        // Default case, should never be returned
        return InteractionTrigger.UNSPECIFIED;
    };
    return MDCChipTrailingActionFoundation;
}(MDCFoundation));

/* packages/chips/TrailingAction.svelte generated by Svelte v3.37.0 */
const file$5 = "packages/chips/TrailingAction.svelte";

// (29:2) {#if touch}
function create_if_block$1(ctx) {
	let span;

	const block = {
		c: function create() {
			span = element("span");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			children(span).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "mdc-deprecated-chip-trailing-action__touch");
			add_location(span, file$5, 29, 4, 758);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(29:2) {#if touch}",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
	let button;
	let span0;
	let t0;
	let t1;
	let span1;
	let span1_class_value;
	let useActions_action;
	let button_class_value;
	let button_style_value;
	let button_aria_hidden_value;
	let Ripple_action;
	let useActions_action_1;
	let current;
	let mounted;
	let dispose;
	let if_block = /*touch*/ ctx[4] && create_if_block$1(ctx);
	const default_slot_template = /*#slots*/ ctx[23].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[22], null);

	let span1_levels = [
		{
			class: span1_class_value = classMap({
				[/*icon$class*/ ctx[7]]: true,
				"mdc-deprecated-chip-trailing-action__icon": true
			})
		},
		prefixFilter(/*$$restProps*/ ctx[17], "icon$")
	];

	let span1_data = {};

	for (let i = 0; i < span1_levels.length; i += 1) {
		span1_data = assign(span1_data, span1_levels[i]);
	}

	let button_levels = [
		{
			class: button_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-deprecated-chip-trailing-action": true,
				.../*internalClasses*/ ctx[10]
			})
		},
		{
			style: button_style_value = Object.entries(/*internalStyles*/ ctx[11]).map(func$1).concat([/*style*/ ctx[2]]).join(" ")
		},
		{
			"aria-hidden": button_aria_hidden_value = /*nonNavigable*/ ctx[5] ? "true" : null
		},
		{ tabindex: "-1" },
		/*internalAttrs*/ ctx[12],
		exclude(/*$$restProps*/ ctx[17], ["icon$"])
	];

	let button_data = {};

	for (let i = 0; i < button_levels.length; i += 1) {
		button_data = assign(button_data, button_levels[i]);
	}

	const block = {
		c: function create() {
			button = element("button");
			span0 = element("span");
			t0 = space();
			if (if_block) if_block.c();
			t1 = space();
			span1 = element("span");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			button = claim_element(nodes, "BUTTON", {
				class: true,
				style: true,
				"aria-hidden": true,
				tabindex: true
			});

			var button_nodes = children(button);
			span0 = claim_element(button_nodes, "SPAN", { class: true });
			children(span0).forEach(detach_dev);
			t0 = claim_space(button_nodes);
			if (if_block) if_block.l(button_nodes);
			t1 = claim_space(button_nodes);
			span1 = claim_element(button_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			if (default_slot) default_slot.l(span1_nodes);
			span1_nodes.forEach(detach_dev);
			button_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span0, "class", "mdc-deprecated-chip-trailing-action__ripple");
			add_location(span0, file$5, 27, 2, 679);
			set_attributes(span1, span1_data);
			add_location(span1, file$5, 31, 2, 828);
			set_attributes(button, button_data);
			add_location(button, file$5, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button, anchor);
			append_dev(button, span0);
			append_dev(button, t0);
			if (if_block) if_block.m(button, null);
			append_dev(button, t1);
			append_dev(button, span1);

			if (default_slot) {
				default_slot.m(span1, null);
			}

			/*button_binding*/ ctx[24](button);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, span1, /*icon$use*/ ctx[6])),
					action_destroyer(Ripple_action = Ripple.call(null, button, {
						ripple: /*ripple*/ ctx[3],
						unbounded: false,
						addClass: /*addClass*/ ctx[14],
						removeClass: /*removeClass*/ ctx[15],
						addStyle: /*addStyle*/ ctx[16]
					})),
					action_destroyer(useActions_action_1 = useActions.call(null, button, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[13].call(null, button)),
					listen_dev(button, "click", /*click_handler*/ ctx[25], false, false, false),
					listen_dev(button, "keydown", /*keydown_handler*/ ctx[26], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (/*touch*/ ctx[4]) {
				if (if_block) ; else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					if_block.m(button, t1);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4194304) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[22], dirty, null, null);
				}
			}

			set_attributes(span1, span1_data = get_spread_update(span1_levels, [
				(!current || dirty & /*icon$class*/ 128 && span1_class_value !== (span1_class_value = classMap({
					[/*icon$class*/ ctx[7]]: true,
					"mdc-deprecated-chip-trailing-action__icon": true
				}))) && { class: span1_class_value },
				dirty & /*$$restProps*/ 131072 && prefixFilter(/*$$restProps*/ ctx[17], "icon$")
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*icon$use*/ 64) useActions_action.update.call(null, /*icon$use*/ ctx[6]);

			set_attributes(button, button_data = get_spread_update(button_levels, [
				(!current || dirty & /*className, internalClasses*/ 1026 && button_class_value !== (button_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-deprecated-chip-trailing-action": true,
					.../*internalClasses*/ ctx[10]
				}))) && { class: button_class_value },
				(!current || dirty & /*internalStyles, style*/ 2052 && button_style_value !== (button_style_value = Object.entries(/*internalStyles*/ ctx[11]).map(func$1).concat([/*style*/ ctx[2]]).join(" "))) && { style: button_style_value },
				(!current || dirty & /*nonNavigable*/ 32 && button_aria_hidden_value !== (button_aria_hidden_value = /*nonNavigable*/ ctx[5] ? "true" : null)) && { "aria-hidden": button_aria_hidden_value },
				{ tabindex: "-1" },
				dirty & /*internalAttrs*/ 4096 && /*internalAttrs*/ ctx[12],
				dirty & /*$$restProps*/ 131072 && exclude(/*$$restProps*/ ctx[17], ["icon$"])
			]));

			if (Ripple_action && is_function(Ripple_action.update) && dirty & /*ripple*/ 8) Ripple_action.update.call(null, {
				ripple: /*ripple*/ ctx[3],
				unbounded: false,
				addClass: /*addClass*/ ctx[14],
				removeClass: /*removeClass*/ ctx[15],
				addStyle: /*addStyle*/ ctx[16]
			});

			if (useActions_action_1 && is_function(useActions_action_1.update) && dirty & /*use*/ 1) useActions_action_1.update.call(null, /*use*/ ctx[0]);
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
			if (if_block) if_block.d();
			if (default_slot) default_slot.d(detaching);
			/*button_binding*/ ctx[24](null);
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

const func$1 = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","ripple","touch","nonNavigable","icon$use","icon$class","isNavigable","focus","removeFocus","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("TrailingAction", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { ripple = true } = $$props;
	let { touch = false } = $$props;
	let { nonNavigable = false } = $$props;
	let { icon$use = [] } = $$props;
	let { icon$class = "" } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};
	let internalAttrs = {};

	onMount(() => {
		$$invalidate(9, instance = new MDCChipTrailingActionFoundation({
				focus: () => {
					const element = getElement();

					// Let the tabindex change propagate.
					waitForTabindex(() => {
						element.focus();
					});
				},
				getAttribute: getAttr,
				notifyInteraction: trigger => dispatch(getElement(), "MDCChipTrailingAction:interaction", { trigger }),
				notifyNavigation: key => {
					dispatch(getElement(), "MDCChipTrailingAction:navigation", { key });
				},
				setAttribute: addAttr
			}));

		dispatch(getElement(), "SMUI:chips:chip:trailing-action:mount", { isNavigable, focus, removeFocus });
		instance.init();

		return () => {
			dispatch(getElement(), "SMUI:chips:chip:trailing-action:unmount");
			instance.destroy();
		};
	});

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

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === "" || value == null) {
				delete internalStyles[name];
				$$invalidate(11, internalStyles);
			} else {
				$$invalidate(11, internalStyles[name] = value, internalStyles);
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
			$$invalidate(12, internalAttrs[name] = value, internalAttrs);
		}
	}

	function waitForTabindex(fn) {
		if (internalAttrs["tabindex"] !== element.getAttribute("tabindex")) {
			tick().then(fn);
		} else {
			fn();
		}
	}

	function isNavigable() {
		return instance.isNavigable();
	}

	function focus() {
		instance.focus();
	}

	function removeFocus() {
		instance.removeFocus();
	}

	function getElement() {
		return element;
	}

	function button_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(8, element);
		});
	}

	const click_handler = event => instance && instance.handleClick(event);
	const keydown_handler = event => instance && instance.handleKeydown(event);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(17, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ("ripple" in $$new_props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("touch" in $$new_props) $$invalidate(4, touch = $$new_props.touch);
		if ("nonNavigable" in $$new_props) $$invalidate(5, nonNavigable = $$new_props.nonNavigable);
		if ("icon$use" in $$new_props) $$invalidate(6, icon$use = $$new_props.icon$use);
		if ("icon$class" in $$new_props) $$invalidate(7, icon$class = $$new_props.icon$class);
		if ("$$scope" in $$new_props) $$invalidate(22, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCChipTrailingActionFoundation,
		onMount,
		tick,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		exclude,
		prefixFilter,
		useActions,
		dispatch,
		Ripple,
		forwardEvents,
		use,
		className,
		style,
		ripple,
		touch,
		nonNavigable,
		icon$use,
		icon$class,
		element,
		instance,
		internalClasses,
		internalStyles,
		internalAttrs,
		addClass,
		removeClass,
		addStyle,
		getAttr,
		addAttr,
		waitForTabindex,
		isNavigable,
		focus,
		removeFocus,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
		if ("ripple" in $$props) $$invalidate(3, ripple = $$new_props.ripple);
		if ("touch" in $$props) $$invalidate(4, touch = $$new_props.touch);
		if ("nonNavigable" in $$props) $$invalidate(5, nonNavigable = $$new_props.nonNavigable);
		if ("icon$use" in $$props) $$invalidate(6, icon$use = $$new_props.icon$use);
		if ("icon$class" in $$props) $$invalidate(7, icon$class = $$new_props.icon$class);
		if ("element" in $$props) $$invalidate(8, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(9, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(10, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(11, internalStyles = $$new_props.internalStyles);
		if ("internalAttrs" in $$props) $$invalidate(12, internalAttrs = $$new_props.internalAttrs);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		style,
		ripple,
		touch,
		nonNavigable,
		icon$use,
		icon$class,
		element,
		instance,
		internalClasses,
		internalStyles,
		internalAttrs,
		forwardEvents,
		addClass,
		removeClass,
		addStyle,
		$$restProps,
		isNavigable,
		focus,
		removeFocus,
		getElement,
		$$scope,
		slots,
		button_binding,
		click_handler,
		keydown_handler
	];
}

class TrailingAction extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1, create_fragment$8, safe_not_equal, {
			use: 0,
			class: 1,
			style: 2,
			ripple: 3,
			touch: 4,
			nonNavigable: 5,
			icon$use: 6,
			icon$class: 7,
			isNavigable: 18,
			focus: 19,
			removeFocus: 20,
			getElement: 21
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TrailingAction",
			options,
			id: create_fragment$8.name
		});
	}

	get use() {
		throw new Error("<TrailingAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<TrailingAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<TrailingAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get ripple() {
		throw new Error("<TrailingAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set ripple(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get touch() {
		throw new Error("<TrailingAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set touch(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get nonNavigable() {
		throw new Error("<TrailingAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set nonNavigable(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get icon$use() {
		throw new Error("<TrailingAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set icon$use(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get icon$class() {
		throw new Error("<TrailingAction>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set icon$class(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get isNavigable() {
		return this.$$.ctx[18];
	}

	set isNavigable(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get focus() {
		return this.$$.ctx[19];
	}

	set focus(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get removeFocus() {
		return this.$$.ctx[20];
	}

	set removeFocus(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[21];
	}

	set getElement(value) {
		throw new Error("<TrailingAction>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/chips/_Simple.svelte generated by Svelte v3.37.0 */
const file$4 = "src/routes/demo/chips/_Simple.svelte";

// (12:4) {#if chip === 'four'}
function create_if_block_1(ctx) {
	let leadingicon;
	let current;

	leadingicon = new LeadingIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_4$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(leadingicon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(leadingicon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(leadingicon, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(leadingicon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(leadingicon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(leadingicon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(12:4) {#if chip === 'four'}",
		ctx
	});

	return block;
}

// (13:6) <LeadingIcon class="material-icons">
function create_default_slot_4$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("book");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "book");
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
		id: create_default_slot_4$4.name,
		type: "slot",
		source: "(13:6) <LeadingIcon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (15:4) <Text tabindex="0">
function create_default_slot_3$5(ctx) {
	let t_value = /*chip*/ ctx[2] + "";
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
			if (dirty & /*chip*/ 4 && t_value !== (t_value = /*chip*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$5.name,
		type: "slot",
		source: "(15:4) <Text tabindex=\\\"0\\\">",
		ctx
	});

	return block;
}

// (16:4) {#if chip === 'five'}
function create_if_block(ctx) {
	let trailingicon;
	let current;

	trailingicon = new TrailingIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_2$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(trailingicon.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(trailingicon.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(trailingicon, target, anchor);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(trailingicon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(trailingicon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(trailingicon, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(16:4) {#if chip === 'five'}",
		ctx
	});

	return block;
}

// (17:6) <TrailingIcon class="material-icons">
function create_default_slot_2$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("commute");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "commute");
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
		id: create_default_slot_2$7.name,
		type: "slot",
		source: "(17:6) <TrailingIcon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (7:2) <Chip     {chip}     shouldRemoveOnTrailingIconClick={false}     on:click={() => clicked++}   >
function create_default_slot_1$7(ctx) {
	let t0;
	let text_1;
	let t1;
	let if_block1_anchor;
	let current;
	let if_block0 = /*chip*/ ctx[2] === "four" && create_if_block_1(ctx);

	text_1 = new Text({
			props: {
				tabindex: "0",
				$$slots: { default: [create_default_slot_3$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	let if_block1 = /*chip*/ ctx[2] === "five" && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block0) if_block0.c();
			t0 = space();
			create_component(text_1.$$.fragment);
			t1 = space();
			if (if_block1) if_block1.c();
			if_block1_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block0) if_block0.l(nodes);
			t0 = claim_space(nodes);
			claim_component(text_1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			if (if_block1) if_block1.l(nodes);
			if_block1_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block0) if_block0.m(target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(text_1, target, anchor);
			insert_dev(target, t1, anchor);
			if (if_block1) if_block1.m(target, anchor);
			insert_dev(target, if_block1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*chip*/ ctx[2] === "four") {
				if (if_block0) {
					if (dirty & /*chip*/ 4) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(t0.parentNode, t0);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			const text_1_changes = {};

			if (dirty & /*$$scope, chip*/ 12) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);

			if (/*chip*/ ctx[2] === "five") {
				if (if_block1) {
					if (dirty & /*chip*/ 4) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
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
			transition_in(text_1.$$.fragment, local);
			transition_in(if_block1);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(text_1.$$.fragment, local);
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach_dev(t0);
			destroy_component(text_1, detaching);
			if (detaching) detach_dev(t1);
			if (if_block1) if_block1.d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$7.name,
		type: "slot",
		source: "(7:2) <Chip     {chip}     shouldRemoveOnTrailingIconClick={false}     on:click={() => clicked++}   >",
		ctx
	});

	return block;
}

// (5:0) <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>
function create_default_slot$7(ctx) {
	let chip;
	let current;

	chip = new Chip({
			props: {
				chip: /*chip*/ ctx[2],
				shouldRemoveOnTrailingIconClick: false,
				$$slots: { default: [create_default_slot_1$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	chip.$on("click", /*click_handler*/ ctx[1]);

	const block = {
		c: function create() {
			create_component(chip.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const chip_changes = {};
			if (dirty & /*chip*/ 4) chip_changes.chip = /*chip*/ ctx[2];

			if (dirty & /*$$scope, chip*/ 12) {
				chip_changes.$$scope = { dirty, ctx };
			}

			chip.$set(chip_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(chip, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$7.name,
		type: "slot",
		source: "(5:0) <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip>",
		ctx
	});

	return block;
}

function create_fragment$7(ctx) {
	let set;
	let t0;
	let pre;
	let t1;
	let t2;
	let current;

	set = new Set_1({
			props: {
				chips: ["one", "two", "three", "four", "five"],
				$$slots: {
					default: [
						create_default_slot$7,
						({ chip }) => ({ 2: chip }),
						({ chip }) => chip ? 4 : 0
					]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(set.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Clicked: ");
			t2 = text(/*clicked*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(set.$$.fragment, nodes);
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
			add_location(pre, file$4, 21, 0, 589);
		},
		m: function mount(target, anchor) {
			mount_component(set, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t1);
			append_dev(pre, t2);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const set_changes = {};

			if (dirty & /*$$scope, chip, clicked*/ 13) {
				set_changes.$$scope = { dirty, ctx };
			}

			set.$set(set_changes);
			if (!current || dirty & /*clicked*/ 1) set_data_dev(t2, /*clicked*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(set.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(set.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(set, detaching);
			if (detaching) detach_dev(t0);
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

function instance$7($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Simple", slots, []);
	let clicked = 0;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Simple> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(0, clicked++, clicked);

	$$self.$capture_state = () => ({
		Chip,
		Set: Set_1,
		LeadingIcon,
		TrailingIcon,
		Text,
		clicked
	});

	$$self.$inject_state = $$props => {
		if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [clicked, click_handler];
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

/* src/routes/demo/chips/_NonInteractive.svelte generated by Svelte v3.37.0 */

// (3:4) <Text>
function create_default_slot_2$6(ctx) {
	let t_value = /*chip*/ ctx[0] + "";
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
			if (dirty & /*chip*/ 1 && t_value !== (t_value = /*chip*/ ctx[0] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$6.name,
		type: "slot",
		source: "(3:4) <Text>",
		ctx
	});

	return block;
}

// (2:2) <Chip {chip}>
function create_default_slot_1$6(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_2$6] },
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

			if (dirty & /*$$scope, chip*/ 3) {
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
		id: create_default_slot_1$6.name,
		type: "slot",
		source: "(2:2) <Chip {chip}>",
		ctx
	});

	return block;
}

// (1:0) <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip nonInteractive>
function create_default_slot$6(ctx) {
	let chip;
	let current;

	chip = new Chip({
			props: {
				chip: /*chip*/ ctx[0],
				$$slots: { default: [create_default_slot_1$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(chip.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const chip_changes = {};
			if (dirty & /*chip*/ 1) chip_changes.chip = /*chip*/ ctx[0];

			if (dirty & /*$$scope, chip*/ 3) {
				chip_changes.$$scope = { dirty, ctx };
			}

			chip.$set(chip_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(chip, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$6.name,
		type: "slot",
		source: "(1:0) <Set chips={['one', 'two', 'three', 'four', 'five']} let:chip nonInteractive>",
		ctx
	});

	return block;
}

function create_fragment$6(ctx) {
	let set;
	let current;

	set = new Set_1({
			props: {
				chips: ["one", "two", "three", "four", "five"],
				nonInteractive: true,
				$$slots: {
					default: [
						create_default_slot$6,
						({ chip }) => ({ 0: chip }),
						({ chip }) => chip ? 1 : 0
					]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(set.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(set.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(set, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const set_changes = {};

			if (dirty & /*$$scope, chip*/ 3) {
				set_changes.$$scope = { dirty, ctx };
			}

			set.$set(set_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(set.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(set.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(set, detaching);
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
	validate_slots("NonInteractive", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<NonInteractive> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Chip, Set: Set_1, Text });
	return [];
}

class NonInteractive extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "NonInteractive",
			options,
			id: create_fragment$6.name
		});
	}
}

/* src/routes/demo/chips/_Choice.svelte generated by Svelte v3.37.0 */
const file$3 = "src/routes/demo/chips/_Choice.svelte";

// (3:4) <Text>
function create_default_slot_10(ctx) {
	let t_value = /*chip*/ ctx[7] + "";
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
			if (dirty & /*chip*/ 128 && t_value !== (t_value = /*chip*/ ctx[7] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_10.name,
		type: "slot",
		source: "(3:4) <Text>",
		ctx
	});

	return block;
}

// (2:2) <Chip {chip}>
function create_default_slot_9(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_10] },
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

			if (dirty & /*$$scope, chip*/ 384) {
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
		id: create_default_slot_9.name,
		type: "slot",
		source: "(2:2) <Chip {chip}>",
		ctx
	});

	return block;
}

// (1:0) <Set chips={choices} let:chip choice bind:selected>
function create_default_slot_8(ctx) {
	let chip;
	let current;

	chip = new Chip({
			props: {
				chip: /*chip*/ ctx[7],
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(chip.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const chip_changes = {};
			if (dirty & /*chip*/ 128) chip_changes.chip = /*chip*/ ctx[7];

			if (dirty & /*$$scope, chip*/ 384) {
				chip_changes.$$scope = { dirty, ctx };
			}

			chip.$set(chip_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(chip, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8.name,
		type: "slot",
		source: "(1:0) <Set chips={choices} let:chip choice bind:selected>",
		ctx
	});

	return block;
}

// (9:2) <Label>
function create_default_slot_7(ctx) {
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
		id: create_default_slot_7.name,
		type: "slot",
		source: "(9:2) <Label>",
		ctx
	});

	return block;
}

// (8:0) <Button on:click={() => (selected = 'Morning')}>
function create_default_slot_6(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_7] },
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
		id: create_default_slot_6.name,
		type: "slot",
		source: "(8:0) <Button on:click={() => (selected = 'Morning')}>",
		ctx
	});

	return block;
}

// (12:2) <Label>
function create_default_slot_5$3(ctx) {
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
		id: create_default_slot_5$3.name,
		type: "slot",
		source: "(12:2) <Label>",
		ctx
	});

	return block;
}

// (11:0) <Button on:click={() => (selected = 'Afternoon')}>
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
		source: "(11:0) <Button on:click={() => (selected = 'Afternoon')}>",
		ctx
	});

	return block;
}

// (15:2) <Label>
function create_default_slot_3$4(ctx) {
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
		id: create_default_slot_3$4.name,
		type: "slot",
		source: "(15:2) <Label>",
		ctx
	});

	return block;
}

// (14:0) <Button on:click={() => (selected = 'Evening')}>
function create_default_slot_2$5(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_3$4] },
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
		id: create_default_slot_2$5.name,
		type: "slot",
		source: "(14:0) <Button on:click={() => (selected = 'Evening')}>",
		ctx
	});

	return block;
}

// (18:2) <Label>
function create_default_slot_1$5(ctx) {
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
		id: create_default_slot_1$5.name,
		type: "slot",
		source: "(18:2) <Label>",
		ctx
	});

	return block;
}

// (17:0) <Button on:click={() => (selected = 'Night')}>
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
		id: create_default_slot$5.name,
		type: "slot",
		source: "(17:0) <Button on:click={() => (selected = 'Night')}>",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let set;
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

	function set_selected_binding(value) {
		/*set_selected_binding*/ ctx[2](value);
	}

	let set_props = {
		chips: /*choices*/ ctx[1],
		choice: true,
		$$slots: {
			default: [
				create_default_slot_8,
				({ chip }) => ({ 7: chip }),
				({ chip }) => chip ? 128 : 0
			]
		},
		$$scope: { ctx }
	};

	if (/*selected*/ ctx[0] !== void 0) {
		set_props.selected = /*selected*/ ctx[0];
	}

	set = new Set_1({ props: set_props, $$inline: true });
	binding_callbacks.push(() => bind(set, "selected", set_selected_binding));

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[3]);

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_4$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[4]);

	button2 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_2$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button2.$on("click", /*click_handler_2*/ ctx[5]);

	button3 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button3.$on("click", /*click_handler_3*/ ctx[6]);

	const block = {
		c: function create() {
			create_component(set.$$.fragment);
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
			claim_component(set.$$.fragment, nodes);
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
			add_location(div, file$3, 6, 0, 110);
			attr_dev(pre, "class", "status");
			add_location(pre, file$3, 20, 0, 508);
		},
		m: function mount(target, anchor) {
			mount_component(set, target, anchor);
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
			const set_changes = {};

			if (dirty & /*$$scope, chip*/ 384) {
				set_changes.$$scope = { dirty, ctx };
			}

			if (!updating_selected && dirty & /*selected*/ 1) {
				updating_selected = true;
				set_changes.selected = /*selected*/ ctx[0];
				add_flush_callback(() => updating_selected = false);
			}

			set.$set(set_changes);
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
			transition_in(set.$$.fragment, local);
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			transition_in(button2.$$.fragment, local);
			transition_in(button3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(set.$$.fragment, local);
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			transition_out(button2.$$.fragment, local);
			transition_out(button3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(set, detaching);
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
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$5($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Choice", slots, []);
	let choices = ["Morning", "Afternoon", "Evening", "Night"];
	let selected = "Morning";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Choice> was created with unknown prop '${key}'`);
	});

	function set_selected_binding(value) {
		selected = value;
		$$invalidate(0, selected);
	}

	const click_handler = () => $$invalidate(0, selected = "Morning");
	const click_handler_1 = () => $$invalidate(0, selected = "Afternoon");
	const click_handler_2 = () => $$invalidate(0, selected = "Evening");
	const click_handler_3 = () => $$invalidate(0, selected = "Night");

	$$self.$capture_state = () => ({
		Chip,
		Set: Set_1,
		Text,
		Button: Button_1,
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

	return [
		selected,
		choices,
		set_selected_binding,
		click_handler,
		click_handler_1,
		click_handler_2,
		click_handler_3
	];
}

class Choice extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Choice",
			options,
			id: create_fragment$5.name
		});
	}
}

/* src/routes/demo/chips/_Filter.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/chips/_Filter.svelte";

// (3:4) <Text>
function create_default_slot_2$4(ctx) {
	let t_value = /*chip*/ ctx[3] + "";
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
			if (dirty & /*chip*/ 8 && t_value !== (t_value = /*chip*/ ctx[3] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$4.name,
		type: "slot",
		source: "(3:4) <Text>",
		ctx
	});

	return block;
}

// (2:2) <Chip {chip} touch>
function create_default_slot_1$4(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_2$4] },
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

			if (dirty & /*$$scope, chip*/ 24) {
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
		id: create_default_slot_1$4.name,
		type: "slot",
		source: "(2:2) <Chip {chip} touch>",
		ctx
	});

	return block;
}

// (1:0) <Set chips={choices} let:chip filter bind:selected>
function create_default_slot$4(ctx) {
	let chip;
	let current;

	chip = new Chip({
			props: {
				chip: /*chip*/ ctx[3],
				touch: true,
				$$slots: { default: [create_default_slot_1$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(chip.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const chip_changes = {};
			if (dirty & /*chip*/ 8) chip_changes.chip = /*chip*/ ctx[3];

			if (dirty & /*$$scope, chip*/ 24) {
				chip_changes.$$scope = { dirty, ctx };
			}

			chip.$set(chip_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(chip, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$4.name,
		type: "slot",
		source: "(1:0) <Set chips={choices} let:chip filter bind:selected>",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let set;
	let updating_selected;
	let t0;
	let pre;
	let t1;
	let t2_value = /*selected*/ ctx[0].join(", ") + "";
	let t2;
	let current;

	function set_selected_binding(value) {
		/*set_selected_binding*/ ctx[2](value);
	}

	let set_props = {
		chips: /*choices*/ ctx[1],
		filter: true,
		$$slots: {
			default: [
				create_default_slot$4,
				({ chip }) => ({ 3: chip }),
				({ chip }) => chip ? 8 : 0
			]
		},
		$$scope: { ctx }
	};

	if (/*selected*/ ctx[0] !== void 0) {
		set_props.selected = /*selected*/ ctx[0];
	}

	set = new Set_1({ props: set_props, $$inline: true });
	binding_callbacks.push(() => bind(set, "selected", set_selected_binding));

	const block = {
		c: function create() {
			create_component(set.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Selected: ");
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(set.$$.fragment, nodes);
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
			add_location(pre, file$2, 6, 0, 116);
		},
		m: function mount(target, anchor) {
			mount_component(set, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t1);
			append_dev(pre, t2);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const set_changes = {};

			if (dirty & /*$$scope, chip*/ 24) {
				set_changes.$$scope = { dirty, ctx };
			}

			if (!updating_selected && dirty & /*selected*/ 1) {
				updating_selected = true;
				set_changes.selected = /*selected*/ ctx[0];
				add_flush_callback(() => updating_selected = false);
			}

			set.$set(set_changes);
			if ((!current || dirty & /*selected*/ 1) && t2_value !== (t2_value = /*selected*/ ctx[0].join(", ") + "")) set_data_dev(t2, t2_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(set.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(set.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(set, detaching);
			if (detaching) detach_dev(t0);
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
	validate_slots("Filter", slots, []);
	let choices = ["Shoes", "Pants", "Shirts", "Hats", "Coats"];
	let selected = ["Shoes", "Shirts", "Coats"];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Filter> was created with unknown prop '${key}'`);
	});

	function set_selected_binding(value) {
		selected = value;
		$$invalidate(0, selected);
	}

	$$self.$capture_state = () => ({ Chip, Set: Set_1, Text, choices, selected });

	$$self.$inject_state = $$props => {
		if ("choices" in $$props) $$invalidate(1, choices = $$props.choices);
		if ("selected" in $$props) $$invalidate(0, selected = $$props.selected);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [selected, choices, set_selected_binding];
}

class Filter extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Filter",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src/routes/demo/chips/_FilterIcons.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/chips/_FilterIcons.svelte";

// (3:4) <LeadingIcon class="material-icons">
function create_default_slot_3$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("checkroom");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "checkroom");
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
		source: "(3:4) <LeadingIcon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (4:4) <Text>
function create_default_slot_2$3(ctx) {
	let t_value = /*chip*/ ctx[3] + "";
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
			if (dirty & /*chip*/ 8 && t_value !== (t_value = /*chip*/ ctx[3] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(4:4) <Text>",
		ctx
	});

	return block;
}

// (2:2) <Chip {chip} touch>
function create_default_slot_1$3(ctx) {
	let leadingicon;
	let t;
	let text_1;
	let current;

	leadingicon = new LeadingIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_3$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_2$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(leadingicon.$$.fragment);
			t = space();
			create_component(text_1.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(leadingicon.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(text_1.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(leadingicon, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(text_1, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const leadingicon_changes = {};

			if (dirty & /*$$scope*/ 16) {
				leadingicon_changes.$$scope = { dirty, ctx };
			}

			leadingicon.$set(leadingicon_changes);
			const text_1_changes = {};

			if (dirty & /*$$scope, chip*/ 24) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(leadingicon.$$.fragment, local);
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(leadingicon.$$.fragment, local);
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(leadingicon, detaching);
			if (detaching) detach_dev(t);
			destroy_component(text_1, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$3.name,
		type: "slot",
		source: "(2:2) <Chip {chip} touch>",
		ctx
	});

	return block;
}

// (1:0) <Set chips={choices} let:chip filter bind:selected>
function create_default_slot$3(ctx) {
	let chip;
	let current;

	chip = new Chip({
			props: {
				chip: /*chip*/ ctx[3],
				touch: true,
				$$slots: { default: [create_default_slot_1$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(chip.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const chip_changes = {};
			if (dirty & /*chip*/ 8) chip_changes.chip = /*chip*/ ctx[3];

			if (dirty & /*$$scope, chip*/ 24) {
				chip_changes.$$scope = { dirty, ctx };
			}

			chip.$set(chip_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(chip, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$3.name,
		type: "slot",
		source: "(1:0) <Set chips={choices} let:chip filter bind:selected>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let set;
	let updating_selected;
	let t0;
	let pre;
	let t1;
	let t2_value = /*selected*/ ctx[0].join(", ") + "";
	let t2;
	let current;

	function set_selected_binding(value) {
		/*set_selected_binding*/ ctx[2](value);
	}

	let set_props = {
		chips: /*choices*/ ctx[1],
		filter: true,
		$$slots: {
			default: [
				create_default_slot$3,
				({ chip }) => ({ 3: chip }),
				({ chip }) => chip ? 8 : 0
			]
		},
		$$scope: { ctx }
	};

	if (/*selected*/ ctx[0] !== void 0) {
		set_props.selected = /*selected*/ ctx[0];
	}

	set = new Set_1({ props: set_props, $$inline: true });
	binding_callbacks.push(() => bind(set, "selected", set_selected_binding));

	const block = {
		c: function create() {
			create_component(set.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Selected: ");
			t2 = text(t2_value);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(set.$$.fragment, nodes);
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
			add_location(pre, file$1, 7, 0, 180);
		},
		m: function mount(target, anchor) {
			mount_component(set, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t1);
			append_dev(pre, t2);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const set_changes = {};

			if (dirty & /*$$scope, chip*/ 24) {
				set_changes.$$scope = { dirty, ctx };
			}

			if (!updating_selected && dirty & /*selected*/ 1) {
				updating_selected = true;
				set_changes.selected = /*selected*/ ctx[0];
				add_flush_callback(() => updating_selected = false);
			}

			set.$set(set_changes);
			if ((!current || dirty & /*selected*/ 1) && t2_value !== (t2_value = /*selected*/ ctx[0].join(", ") + "")) set_data_dev(t2, t2_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(set.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(set.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(set, detaching);
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
	validate_slots("FilterIcons", slots, []);
	let choices = ["Shoes", "Pants", "Shirts", "Hats", "Coats"];
	let selected = ["Shoes", "Shirts", "Coats"];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FilterIcons> was created with unknown prop '${key}'`);
	});

	function set_selected_binding(value) {
		selected = value;
		$$invalidate(0, selected);
	}

	$$self.$capture_state = () => ({
		Chip,
		Set: Set_1,
		LeadingIcon,
		Text,
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

	return [selected, choices, set_selected_binding];
}

class FilterIcons extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FilterIcons",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/chips/_Input.svelte generated by Svelte v3.37.0 */

// (3:4) <Text>
function create_default_slot_5$2(ctx) {
	let t_value = /*chip*/ ctx[2] + "";
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
			if (dirty & /*chip*/ 4 && t_value !== (t_value = /*chip*/ ctx[2] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$2.name,
		type: "slot",
		source: "(3:4) <Text>",
		ctx
	});

	return block;
}

// (4:4) <TrailingAction icon$class="material-icons">
function create_default_slot_4$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("cancel");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "cancel");
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
		source: "(4:4) <TrailingAction icon$class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (2:2) <Chip {chip}>
function create_default_slot_3$2(ctx) {
	let text_1;
	let t;
	let trailingaction;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_5$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	trailingaction = new TrailingAction({
			props: {
				icon$class: "material-icons",
				$$slots: { default: [create_default_slot_4$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
			t = space();
			create_component(trailingaction.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(trailingaction.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(trailingaction, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty & /*$$scope, chip*/ 12) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
			const trailingaction_changes = {};

			if (dirty & /*$$scope*/ 8) {
				trailingaction_changes.$$scope = { dirty, ctx };
			}

			trailingaction.$set(trailingaction_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			transition_in(trailingaction.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			transition_out(trailingaction.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
			if (detaching) detach_dev(t);
			destroy_component(trailingaction, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$2.name,
		type: "slot",
		source: "(2:2) <Chip {chip}>",
		ctx
	});

	return block;
}

// (1:0) <Set chips={input} let:chip input>
function create_default_slot_2$2(ctx) {
	let chip;
	let current;

	chip = new Chip({
			props: {
				chip: /*chip*/ ctx[2],
				$$slots: { default: [create_default_slot_3$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(chip.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const chip_changes = {};
			if (dirty & /*chip*/ 4) chip_changes.chip = /*chip*/ ctx[2];

			if (dirty & /*$$scope, chip*/ 12) {
				chip_changes.$$scope = { dirty, ctx };
			}

			chip.$set(chip_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(chip, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(1:0) <Set chips={input} let:chip input>",
		ctx
	});

	return block;
}

// (7:32) <Label>
function create_default_slot_1$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Add");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Add");
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
		source: "(7:32) <Label>",
		ctx
	});

	return block;
}

// (7:0) <Button on:click={addInputChip}>
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

			if (dirty & /*$$scope*/ 8) {
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
		source: "(7:0) <Button on:click={addInputChip}>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let set;
	let t;
	let button;
	let current;

	set = new Set_1({
			props: {
				chips: /*input*/ ctx[0],
				input: true,
				$$slots: {
					default: [
						create_default_slot_2$2,
						({ chip }) => ({ 2: chip }),
						({ chip }) => chip ? 4 : 0
					]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*addInputChip*/ ctx[1]);

	const block = {
		c: function create() {
			create_component(set.$$.fragment);
			t = space();
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(set.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(set, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const set_changes = {};
			if (dirty & /*input*/ 1) set_changes.chips = /*input*/ ctx[0];

			if (dirty & /*$$scope, chip*/ 12) {
				set_changes.$$scope = { dirty, ctx };
			}

			set.$set(set_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 8) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(set.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(set.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(set, detaching);
			if (detaching) detach_dev(t);
			destroy_component(button, detaching);
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
	validate_slots("Input", slots, []);
	let input = [1, 2, 3, 4];

	function addInputChip() {
		if (input.length) {
			input.push(input[input.length - 1] + 1);
			$$invalidate(0, input);
		} else {
			input.push(1);
			$$invalidate(0, input);
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Input> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Chip,
		Set: Set_1,
		TrailingAction,
		Text,
		Button: Button_1,
		Label: CommonLabel,
		input,
		addInputChip
	});

	$$self.$inject_state = $$props => {
		if ("input" in $$props) $$invalidate(0, input = $$props.input);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [input, addInputChip];
}

class Input extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Input",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/chips/_Keyed.svelte generated by Svelte v3.37.0 */

// (3:4) <Text>
function create_default_slot_5$1(ctx) {
	let t_value = /*chip*/ ctx[2].v + "";
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
			if (dirty & /*chip*/ 4 && t_value !== (t_value = /*chip*/ ctx[2].v + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$1.name,
		type: "slot",
		source: "(3:4) <Text>",
		ctx
	});

	return block;
}

// (4:4) <TrailingAction icon$class="material-icons">
function create_default_slot_4$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("cancel");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "cancel");
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
		source: "(4:4) <TrailingAction icon$class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (2:2) <Chip {chip}>
function create_default_slot_3$1(ctx) {
	let text_1;
	let t;
	let trailingaction;
	let current;

	text_1 = new Text({
			props: {
				$$slots: { default: [create_default_slot_5$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	trailingaction = new TrailingAction({
			props: {
				icon$class: "material-icons",
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(text_1.$$.fragment);
			t = space();
			create_component(trailingaction.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(text_1.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(trailingaction.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(text_1, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(trailingaction, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const text_1_changes = {};

			if (dirty & /*$$scope, chip*/ 12) {
				text_1_changes.$$scope = { dirty, ctx };
			}

			text_1.$set(text_1_changes);
			const trailingaction_changes = {};

			if (dirty & /*$$scope*/ 8) {
				trailingaction_changes.$$scope = { dirty, ctx };
			}

			trailingaction.$set(trailingaction_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(text_1.$$.fragment, local);
			transition_in(trailingaction.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(text_1.$$.fragment, local);
			transition_out(trailingaction.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(text_1, detaching);
			if (detaching) detach_dev(t);
			destroy_component(trailingaction, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(2:2) <Chip {chip}>",
		ctx
	});

	return block;
}

// (1:0) <Set chips={keyed} let:chip key={(chip) => chip.k} input>
function create_default_slot_2$1(ctx) {
	let chip;
	let current;

	chip = new Chip({
			props: {
				chip: /*chip*/ ctx[2],
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(chip.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(chip.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(chip, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const chip_changes = {};
			if (dirty & /*chip*/ 4) chip_changes.chip = /*chip*/ ctx[2];

			if (dirty & /*$$scope, chip*/ 12) {
				chip_changes.$$scope = { dirty, ctx };
			}

			chip.$set(chip_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(chip.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(chip.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(chip, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(1:0) <Set chips={keyed} let:chip key={(chip) => chip.k} input>",
		ctx
	});

	return block;
}

// (7:32) <Label>
function create_default_slot_1$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Add");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Add");
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
		source: "(7:32) <Label>",
		ctx
	});

	return block;
}

// (7:0) <Button on:click={addKeyedChip}>
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

			if (dirty & /*$$scope*/ 8) {
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
		source: "(7:0) <Button on:click={addKeyedChip}>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let set;
	let t;
	let button;
	let current;

	set = new Set_1({
			props: {
				chips: /*keyed*/ ctx[0],
				key: func,
				input: true,
				$$slots: {
					default: [
						create_default_slot_2$1,
						({ chip }) => ({ 2: chip }),
						({ chip }) => chip ? 4 : 0
					]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*addKeyedChip*/ ctx[1]);

	const block = {
		c: function create() {
			create_component(set.$$.fragment);
			t = space();
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(set.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(set, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const set_changes = {};
			if (dirty & /*keyed*/ 1) set_changes.chips = /*keyed*/ ctx[0];

			if (dirty & /*$$scope, chip*/ 12) {
				set_changes.$$scope = { dirty, ctx };
			}

			set.$set(set_changes);
			const button_changes = {};

			if (dirty & /*$$scope*/ 8) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(set.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(set.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(set, detaching);
			if (detaching) detach_dev(t);
			destroy_component(button, detaching);
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

const func = chip => chip.k;

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Keyed", slots, []);

	let keyed = [
		{ k: 1, v: "Apple" },
		{ k: 2, v: "Apple" },
		{ k: 3, v: "Apple" },
		{ k: 4, v: "Apple" }
	];

	function addKeyedChip() {
		if (keyed.length) {
			keyed.push({
				k: keyed[keyed.length - 1].k + 1,
				v: "Apple"
			});

			$$invalidate(0, keyed);
		} else {
			keyed.push({ k: 1, v: "Apple" });
			$$invalidate(0, keyed);
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Keyed> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Chip,
		Set: Set_1,
		TrailingAction,
		Text,
		Button: Button_1,
		Label: CommonLabel,
		keyed,
		addKeyedChip
	});

	$$self.$inject_state = $$props => {
		if ("keyed" in $$props) $$invalidate(0, keyed = $$props.keyed);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [keyed, addKeyedChip];
}

class Keyed extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Keyed",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/chips/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/chips/index.svelte";

// (12:2) <Demo component={NonInteractive} file="chips/_NonInteractive.svelte">
function create_default_slot_5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Non-interactive chips");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Non-interactive chips");
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
		source: "(12:2) <Demo component={NonInteractive} file=\\\"chips/_NonInteractive.svelte\\\">",
		ctx
	});

	return block;
}

// (16:2) <Demo component={Choice} file="chips/_Choice.svelte">
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Choice chips");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Choice chips");
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
		source: "(16:2) <Demo component={Choice} file=\\\"chips/_Choice.svelte\\\">",
		ctx
	});

	return block;
}

// (18:2) <Demo component={Filter} file="chips/_Filter.svelte">
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Filter chips with increased touch target");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Filter chips with increased touch target");
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
		source: "(18:2) <Demo component={Filter} file=\\\"chips/_Filter.svelte\\\">",
		ctx
	});

	return block;
}

// (22:2) <Demo component={FilterIcons} file="chips/_FilterIcons.svelte">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("The same, but with leading icons");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "The same, but with leading icons");
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
		source: "(22:2) <Demo component={FilterIcons} file=\\\"chips/_FilterIcons.svelte\\\">",
		ctx
	});

	return block;
}

// (26:2) <Demo component={Input} file="chips/_Input.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Input chips");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Input chips");
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
		source: "(26:2) <Demo component={Input} file=\\\"chips/_Input.svelte\\\">",
		ctx
	});

	return block;
}

// (28:2) <Demo component={Keyed} file="chips/_Keyed.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Keyed chips");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Keyed chips");
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
		source: "(28:2) <Demo component={Keyed} file=\\\"chips/_Keyed.svelte\\\">",
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
				file: "chips/_Simple.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: NonInteractive,
				file: "chips/_NonInteractive.svelte",
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: Choice,
				file: "chips/_Choice.svelte",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: Filter,
				file: "chips/_Filter.svelte",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo4 = new Demo({
			props: {
				component: FilterIcons,
				file: "chips/_FilterIcons.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo5 = new Demo({
			props: {
				component: Input,
				file: "chips/_Input.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo6 = new Demo({
			props: {
				component: Keyed,
				file: "chips/_Keyed.svelte",
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
			t1 = text("Chips");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/chips");
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-e9pg83\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Chips");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/chips");
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
			document.title = "Chips - SMUI";
			add_location(h2, file, 5, 2, 72);
			attr_dev(pre, "class", "demo-spaced");
			add_location(pre, file, 7, 2, 90);
			add_location(section, file, 4, 0, 60);
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
	validate_slots("Chips", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Chips> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Simple,
		NonInteractive,
		Choice,
		Filter,
		FilterIcons,
		Input,
		Keyed
	});

	return [];
}

class Chips extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Chips",
			options,
			id: create_fragment.name
		});
	}
}

export default Chips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYWU5YzIwZTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZXhjbHVkZS5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vcHJlZml4RmlsdGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20va2V5Ym9hcmQuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaGlwcy9MZWFkaW5nSWNvbi5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9jaGlwcy9UcmFpbGluZ0ljb24uc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9jaGlwcy9kZXByZWNhdGVkL3RyYWlsaW5nYWN0aW9uL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2NoaXBzL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvY2hpcHMvZGVwcmVjYXRlZC90cmFpbGluZ2FjdGlvbi9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvY2hpcHMvVHJhaWxpbmdBY3Rpb24uc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL2NoaXBzL19TaW1wbGUuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL2NoaXBzL19Ob25JbnRlcmFjdGl2ZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vY2hpcHMvX0Nob2ljZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vY2hpcHMvX0ZpbHRlci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vY2hpcHMvX0ZpbHRlckljb25zLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9jaGlwcy9fSW5wdXQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL2NoaXBzL19LZXllZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vY2hpcHMvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBleGNsdWRlKG9iaiwga2V5cykge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGNvbnN0IGNhc2hJbmRleCA9IG5hbWUuaW5kZXhPZignJCcpO1xuICAgIGlmIChcbiAgICAgIGNhc2hJbmRleCAhPT0gLTEgJiZcbiAgICAgIGtleXMuaW5kZXhPZihuYW1lLnN1YnN0cmluZygwLCBjYXNoSW5kZXggKyAxKSkgIT09IC0xXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGtleXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBuZXdPYmpbbmFtZV0gPSBvYmpbbmFtZV07XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZpbHRlcihvYmosIHByZWZpeCkge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGlmIChuYW1lLnN1YnN0cmluZygwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBuZXdPYmpbbmFtZS5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCldID0gb2JqW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogS0VZIHByb3ZpZGVzIG5vcm1hbGl6ZWQgc3RyaW5nIHZhbHVlcyBmb3Iga2V5cy5cbiAqL1xuZXhwb3J0IHZhciBLRVkgPSB7XG4gICAgVU5LTk9XTjogJ1Vua25vd24nLFxuICAgIEJBQ0tTUEFDRTogJ0JhY2tzcGFjZScsXG4gICAgRU5URVI6ICdFbnRlcicsXG4gICAgU1BBQ0VCQVI6ICdTcGFjZWJhcicsXG4gICAgUEFHRV9VUDogJ1BhZ2VVcCcsXG4gICAgUEFHRV9ET1dOOiAnUGFnZURvd24nLFxuICAgIEVORDogJ0VuZCcsXG4gICAgSE9NRTogJ0hvbWUnLFxuICAgIEFSUk9XX0xFRlQ6ICdBcnJvd0xlZnQnLFxuICAgIEFSUk9XX1VQOiAnQXJyb3dVcCcsXG4gICAgQVJST1dfUklHSFQ6ICdBcnJvd1JpZ2h0JyxcbiAgICBBUlJPV19ET1dOOiAnQXJyb3dEb3duJyxcbiAgICBERUxFVEU6ICdEZWxldGUnLFxuICAgIEVTQ0FQRTogJ0VzY2FwZScsXG4gICAgVEFCOiAnVGFiJyxcbn07XG52YXIgbm9ybWFsaXplZEtleXMgPSBuZXcgU2V0KCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgTWFwIHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXNcbi8vIGJ5IGhhbmQuXG5ub3JtYWxpemVkS2V5cy5hZGQoS0VZLkJBQ0tTUEFDRSk7XG5ub3JtYWxpemVkS2V5cy5hZGQoS0VZLkVOVEVSKTtcbm5vcm1hbGl6ZWRLZXlzLmFkZChLRVkuU1BBQ0VCQVIpO1xubm9ybWFsaXplZEtleXMuYWRkKEtFWS5QQUdFX1VQKTtcbm5vcm1hbGl6ZWRLZXlzLmFkZChLRVkuUEFHRV9ET1dOKTtcbm5vcm1hbGl6ZWRLZXlzLmFkZChLRVkuRU5EKTtcbm5vcm1hbGl6ZWRLZXlzLmFkZChLRVkuSE9NRSk7XG5ub3JtYWxpemVkS2V5cy5hZGQoS0VZLkFSUk9XX0xFRlQpO1xubm9ybWFsaXplZEtleXMuYWRkKEtFWS5BUlJPV19VUCk7XG5ub3JtYWxpemVkS2V5cy5hZGQoS0VZLkFSUk9XX1JJR0hUKTtcbm5vcm1hbGl6ZWRLZXlzLmFkZChLRVkuQVJST1dfRE9XTik7XG5ub3JtYWxpemVkS2V5cy5hZGQoS0VZLkRFTEVURSk7XG5ub3JtYWxpemVkS2V5cy5hZGQoS0VZLkVTQ0FQRSk7XG5ub3JtYWxpemVkS2V5cy5hZGQoS0VZLlRBQik7XG52YXIgS0VZX0NPREUgPSB7XG4gICAgQkFDS1NQQUNFOiA4LFxuICAgIEVOVEVSOiAxMyxcbiAgICBTUEFDRUJBUjogMzIsXG4gICAgUEFHRV9VUDogMzMsXG4gICAgUEFHRV9ET1dOOiAzNCxcbiAgICBFTkQ6IDM1LFxuICAgIEhPTUU6IDM2LFxuICAgIEFSUk9XX0xFRlQ6IDM3LFxuICAgIEFSUk9XX1VQOiAzOCxcbiAgICBBUlJPV19SSUdIVDogMzksXG4gICAgQVJST1dfRE9XTjogNDAsXG4gICAgREVMRVRFOiA0NixcbiAgICBFU0NBUEU6IDI3LFxuICAgIFRBQjogOSxcbn07XG52YXIgbWFwcGVkS2V5Q29kZXMgPSBuZXcgTWFwKCk7XG4vLyBJRTExIGhhcyBubyBzdXBwb3J0IGZvciBuZXcgTWFwIHdpdGggaXRlcmFibGUgc28gd2UgbmVlZCB0byBpbml0aWFsaXplIHRoaXNcbi8vIGJ5IGhhbmQuXG5tYXBwZWRLZXlDb2Rlcy5zZXQoS0VZX0NPREUuQkFDS1NQQUNFLCBLRVkuQkFDS1NQQUNFKTtcbm1hcHBlZEtleUNvZGVzLnNldChLRVlfQ09ERS5FTlRFUiwgS0VZLkVOVEVSKTtcbm1hcHBlZEtleUNvZGVzLnNldChLRVlfQ09ERS5TUEFDRUJBUiwgS0VZLlNQQUNFQkFSKTtcbm1hcHBlZEtleUNvZGVzLnNldChLRVlfQ09ERS5QQUdFX1VQLCBLRVkuUEFHRV9VUCk7XG5tYXBwZWRLZXlDb2Rlcy5zZXQoS0VZX0NPREUuUEFHRV9ET1dOLCBLRVkuUEFHRV9ET1dOKTtcbm1hcHBlZEtleUNvZGVzLnNldChLRVlfQ09ERS5FTkQsIEtFWS5FTkQpO1xubWFwcGVkS2V5Q29kZXMuc2V0KEtFWV9DT0RFLkhPTUUsIEtFWS5IT01FKTtcbm1hcHBlZEtleUNvZGVzLnNldChLRVlfQ09ERS5BUlJPV19MRUZULCBLRVkuQVJST1dfTEVGVCk7XG5tYXBwZWRLZXlDb2Rlcy5zZXQoS0VZX0NPREUuQVJST1dfVVAsIEtFWS5BUlJPV19VUCk7XG5tYXBwZWRLZXlDb2Rlcy5zZXQoS0VZX0NPREUuQVJST1dfUklHSFQsIEtFWS5BUlJPV19SSUdIVCk7XG5tYXBwZWRLZXlDb2Rlcy5zZXQoS0VZX0NPREUuQVJST1dfRE9XTiwgS0VZLkFSUk9XX0RPV04pO1xubWFwcGVkS2V5Q29kZXMuc2V0KEtFWV9DT0RFLkRFTEVURSwgS0VZLkRFTEVURSk7XG5tYXBwZWRLZXlDb2Rlcy5zZXQoS0VZX0NPREUuRVNDQVBFLCBLRVkuRVNDQVBFKTtcbm1hcHBlZEtleUNvZGVzLnNldChLRVlfQ09ERS5UQUIsIEtFWS5UQUIpO1xudmFyIG5hdmlnYXRpb25LZXlzID0gbmV3IFNldCgpO1xuLy8gSUUxMSBoYXMgbm8gc3VwcG9ydCBmb3IgbmV3IFNldCB3aXRoIGl0ZXJhYmxlIHNvIHdlIG5lZWQgdG8gaW5pdGlhbGl6ZSB0aGlzXG4vLyBieSBoYW5kLlxubmF2aWdhdGlvbktleXMuYWRkKEtFWS5QQUdFX1VQKTtcbm5hdmlnYXRpb25LZXlzLmFkZChLRVkuUEFHRV9ET1dOKTtcbm5hdmlnYXRpb25LZXlzLmFkZChLRVkuRU5EKTtcbm5hdmlnYXRpb25LZXlzLmFkZChLRVkuSE9NRSk7XG5uYXZpZ2F0aW9uS2V5cy5hZGQoS0VZLkFSUk9XX0xFRlQpO1xubmF2aWdhdGlvbktleXMuYWRkKEtFWS5BUlJPV19VUCk7XG5uYXZpZ2F0aW9uS2V5cy5hZGQoS0VZLkFSUk9XX1JJR0hUKTtcbm5hdmlnYXRpb25LZXlzLmFkZChLRVkuQVJST1dfRE9XTik7XG4vKipcbiAqIG5vcm1hbGl6ZUtleSByZXR1cm5zIHRoZSBub3JtYWxpemVkIHN0cmluZyBmb3IgYSBuYXZpZ2F0aW9uYWwgYWN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplS2V5KGV2dCkge1xuICAgIHZhciBrZXkgPSBldnQua2V5O1xuICAgIC8vIElmIHRoZSBldmVudCBhbHJlYWR5IGhhcyBhIG5vcm1hbGl6ZWQga2V5LCByZXR1cm4gaXRcbiAgICBpZiAobm9ybWFsaXplZEtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgdmFyIG1hcHBlZEtleSA9IG1hcHBlZEtleUNvZGVzLmdldChldnQua2V5Q29kZSk7XG4gICAgaWYgKG1hcHBlZEtleSkge1xuICAgICAgICByZXR1cm4gbWFwcGVkS2V5O1xuICAgIH1cbiAgICByZXR1cm4gS0VZLlVOS05PV047XG59XG4vKipcbiAqIGlzTmF2aWdhdGlvbkV2ZW50IHJldHVybnMgd2hldGhlciB0aGUgZXZlbnQgaXMgYSBuYXZpZ2F0aW9uIGV2ZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05hdmlnYXRpb25FdmVudChldnQpIHtcbiAgICByZXR1cm4gbmF2aWdhdGlvbktleXMuaGFzKG5vcm1hbGl6ZUtleShldnQpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWtleWJvYXJkLmpzLm1hcCIsIjxpXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWNoaXBfX2ljb24nOiB0cnVlLFxuICAgICdtZGMtY2hpcF9faWNvbi0tbGVhZGluZyc6IHRydWUsXG4gICAgJ21kYy1jaGlwX19pY29uLS1sZWFkaW5nLWhpZGRlbic6ICRmaWx0ZXIgJiYgJGlzU2VsZWN0ZWQsXG4gICAgLi4uJGxlYWRpbmdJY29uQ2xhc3NlcyxcbiAgfSl9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L2lcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcblxuICBjb25zdCBmaWx0ZXIgPSBnZXRDb250ZXh0KCdTTVVJOmNoaXBzOmZpbHRlcicpO1xuICBjb25zdCBpc1NlbGVjdGVkID0gZ2V0Q29udGV4dCgnU01VSTpjaGlwczpjaGlwOmlzU2VsZWN0ZWQnKTtcbiAgY29uc3QgbGVhZGluZ0ljb25DbGFzc2VzID0gZ2V0Q29udGV4dCgnU01VSTpjaGlwczpjaGlwOmxlYWRpbmdJY29uQ2xhc3NlcycpO1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxzcGFuXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgcm9sZT1cImdyaWRjZWxsXCJcbj5cbiAgPGlcbiAgICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgICAnbWRjLWNoaXBfX2ljb24nOiB0cnVlLFxuICAgICAgJ21kYy1jaGlwX19pY29uLS10cmFpbGluZyc6IHRydWUsXG4gICAgfSl9XG4gICAgey4uLiQkcmVzdFByb3BzfT48c2xvdCAvPjwvaVxuICA+XG48L3NwYW4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcblxuICBsZXQgZWxlbWVudDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmV4cG9ydCB2YXIgSW50ZXJhY3Rpb25UcmlnZ2VyO1xuKGZ1bmN0aW9uIChJbnRlcmFjdGlvblRyaWdnZXIpIHtcbiAgICBJbnRlcmFjdGlvblRyaWdnZXJbSW50ZXJhY3Rpb25UcmlnZ2VyW1wiVU5TUEVDSUZJRURcIl0gPSAwXSA9IFwiVU5TUEVDSUZJRURcIjtcbiAgICBJbnRlcmFjdGlvblRyaWdnZXJbSW50ZXJhY3Rpb25UcmlnZ2VyW1wiQ0xJQ0tcIl0gPSAxXSA9IFwiQ0xJQ0tcIjtcbiAgICBJbnRlcmFjdGlvblRyaWdnZXJbSW50ZXJhY3Rpb25UcmlnZ2VyW1wiQkFDS1NQQUNFX0tFWVwiXSA9IDJdID0gXCJCQUNLU1BBQ0VfS0VZXCI7XG4gICAgSW50ZXJhY3Rpb25UcmlnZ2VyW0ludGVyYWN0aW9uVHJpZ2dlcltcIkRFTEVURV9LRVlcIl0gPSAzXSA9IFwiREVMRVRFX0tFWVwiO1xuICAgIEludGVyYWN0aW9uVHJpZ2dlcltJbnRlcmFjdGlvblRyaWdnZXJbXCJTUEFDRUJBUl9LRVlcIl0gPSA0XSA9IFwiU1BBQ0VCQVJfS0VZXCI7XG4gICAgSW50ZXJhY3Rpb25UcmlnZ2VyW0ludGVyYWN0aW9uVHJpZ2dlcltcIkVOVEVSX0tFWVwiXSA9IDVdID0gXCJFTlRFUl9LRVlcIjtcbn0pKEludGVyYWN0aW9uVHJpZ2dlciB8fCAoSW50ZXJhY3Rpb25UcmlnZ2VyID0ge30pKTtcbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX0hJRERFTjogJ2FyaWEtaGlkZGVuJyxcbiAgICBJTlRFUkFDVElPTl9FVkVOVDogJ01EQ0NoaXBUcmFpbGluZ0FjdGlvbjppbnRlcmFjdGlvbicsXG4gICAgTkFWSUdBVElPTl9FVkVOVDogJ01EQ0NoaXBUcmFpbGluZ0FjdGlvbjpuYXZpZ2F0aW9uJyxcbiAgICBUQUJfSU5ERVg6ICd0YWJpbmRleCcsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgaXNOYXZpZ2F0aW9uRXZlbnQsIEtFWSwgbm9ybWFsaXplS2V5IH0gZnJvbSAnQG1hdGVyaWFsL2RvbS9rZXlib2FyZCc7XG5pbXBvcnQgeyBJbnRlcmFjdGlvblRyaWdnZXIsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDQ2hpcFRyYWlsaW5nQWN0aW9uRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDQ2hpcFRyYWlsaW5nQWN0aW9uRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENDaGlwVHJhaWxpbmdBY3Rpb25Gb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENDaGlwVHJhaWxpbmdBY3Rpb25Gb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENDaGlwVHJhaWxpbmdBY3Rpb25Gb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0NoaXBUcmFpbGluZ0FjdGlvbkZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBnZXRBdHRyaWJ1dGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5SW50ZXJhY3Rpb246IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlOYXZpZ2F0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDQ2hpcFRyYWlsaW5nQWN0aW9uRm91bmRhdGlvbi5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeUludGVyYWN0aW9uKEludGVyYWN0aW9uVHJpZ2dlci5DTElDSyk7XG4gICAgfTtcbiAgICBNRENDaGlwVHJhaWxpbmdBY3Rpb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVLZXlkb3duID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBldnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHZhciBrZXkgPSBub3JtYWxpemVLZXkoZXZ0KTtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkTm90aWZ5SW50ZXJhY3Rpb25Gcm9tS2V5XyhrZXkpKSB7XG4gICAgICAgICAgICB2YXIgdHJpZ2dlciA9IHRoaXMuZ2V0VHJpZ2dlckZyb21LZXlfKGtleSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIubm90aWZ5SW50ZXJhY3Rpb24odHJpZ2dlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmF2aWdhdGlvbkV2ZW50KGV2dCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlOYXZpZ2F0aW9uKGtleSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE1EQ0NoaXBUcmFpbGluZ0FjdGlvbkZvdW5kYXRpb24ucHJvdG90eXBlLnJlbW92ZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cmlidXRlKHN0cmluZ3MuVEFCX0lOREVYLCAnLTEnKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBUcmFpbGluZ0FjdGlvbkZvdW5kYXRpb24ucHJvdG90eXBlLmZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cmlidXRlKHN0cmluZ3MuVEFCX0lOREVYLCAnMCcpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuZm9jdXMoKTtcbiAgICB9O1xuICAgIE1EQ0NoaXBUcmFpbGluZ0FjdGlvbkZvdW5kYXRpb24ucHJvdG90eXBlLmlzTmF2aWdhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldEF0dHJpYnV0ZShzdHJpbmdzLkFSSUFfSElEREVOKSAhPT0gJ3RydWUnO1xuICAgIH07XG4gICAgTURDQ2hpcFRyYWlsaW5nQWN0aW9uRm91bmRhdGlvbi5wcm90b3R5cGUuc2hvdWxkTm90aWZ5SW50ZXJhY3Rpb25Gcm9tS2V5XyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIGlzRnJvbUFjdGlvbktleSA9IGtleSA9PT0gS0VZLkVOVEVSIHx8IGtleSA9PT0gS0VZLlNQQUNFQkFSO1xuICAgICAgICB2YXIgaXNGcm9tRGVsZXRlS2V5ID0ga2V5ID09PSBLRVkuQkFDS1NQQUNFIHx8IGtleSA9PT0gS0VZLkRFTEVURTtcbiAgICAgICAgcmV0dXJuIGlzRnJvbUFjdGlvbktleSB8fCBpc0Zyb21EZWxldGVLZXk7XG4gICAgfTtcbiAgICBNRENDaGlwVHJhaWxpbmdBY3Rpb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRUcmlnZ2VyRnJvbUtleV8gPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXkgPT09IEtFWS5TUEFDRUJBUikge1xuICAgICAgICAgICAgcmV0dXJuIEludGVyYWN0aW9uVHJpZ2dlci5TUEFDRUJBUl9LRVk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gS0VZLkVOVEVSKSB7XG4gICAgICAgICAgICByZXR1cm4gSW50ZXJhY3Rpb25UcmlnZ2VyLkVOVEVSX0tFWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09PSBLRVkuREVMRVRFKSB7XG4gICAgICAgICAgICByZXR1cm4gSW50ZXJhY3Rpb25UcmlnZ2VyLkRFTEVURV9LRVk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PT0gS0VZLkJBQ0tTUEFDRSkge1xuICAgICAgICAgICAgcmV0dXJuIEludGVyYWN0aW9uVHJpZ2dlci5CQUNLU1BBQ0VfS0VZO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgY2FzZSwgc2hvdWxkIG5ldmVyIGJlIHJldHVybmVkXG4gICAgICAgIHJldHVybiBJbnRlcmFjdGlvblRyaWdnZXIuVU5TUEVDSUZJRUQ7XG4gICAgfTtcbiAgICByZXR1cm4gTURDQ2hpcFRyYWlsaW5nQWN0aW9uRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDQ2hpcFRyYWlsaW5nQWN0aW9uRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0NoaXBUcmFpbGluZ0FjdGlvbkZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIjxidXR0b25cbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6UmlwcGxlPXt7XG4gICAgcmlwcGxlLFxuICAgIHVuYm91bmRlZDogZmFsc2UsXG4gICAgYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgYWRkU3R5bGUsXG4gIH19XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1kZXByZWNhdGVkLWNoaXAtdHJhaWxpbmctYWN0aW9uJzogdHJ1ZSxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBzdHlsZT17T2JqZWN0LmVudHJpZXMoaW50ZXJuYWxTdHlsZXMpXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgLmNvbmNhdChbc3R5bGVdKVxuICAgIC5qb2luKCcgJyl9XG4gIGFyaWEtaGlkZGVuPXtub25OYXZpZ2FibGUgPyAndHJ1ZScgOiBudWxsfVxuICB0YWJpbmRleD1cIi0xXCJcbiAgb246Y2xpY2s9eyhldmVudCkgPT4gaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlQ2xpY2soZXZlbnQpfVxuICBvbjprZXlkb3duPXsoZXZlbnQpID0+IGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZUtleWRvd24oZXZlbnQpfVxuICB7Li4uaW50ZXJuYWxBdHRyc31cbiAgey4uLmV4Y2x1ZGUoJCRyZXN0UHJvcHMsIFsnaWNvbiQnXSl9XG4+XG4gIDxzcGFuIGNsYXNzPVwibWRjLWRlcHJlY2F0ZWQtY2hpcC10cmFpbGluZy1hY3Rpb25fX3JpcHBsZVwiIC8+XG4gIHsjaWYgdG91Y2h9XG4gICAgPHNwYW4gY2xhc3M9XCJtZGMtZGVwcmVjYXRlZC1jaGlwLXRyYWlsaW5nLWFjdGlvbl9fdG91Y2hcIiAvPlxuICB7L2lmfVxuICA8c3BhblxuICAgIHVzZTp1c2VBY3Rpb25zPXtpY29uJHVzZX1cbiAgICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICAgW2ljb24kY2xhc3NdOiB0cnVlLFxuICAgICAgJ21kYy1kZXByZWNhdGVkLWNoaXAtdHJhaWxpbmctYWN0aW9uX19pY29uJzogdHJ1ZSxcbiAgICB9KX1cbiAgICB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAnaWNvbiQnKX0+PHNsb3QgLz48L3NwYW5cbiAgPlxuPC9idXR0b24+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IE1EQ0NoaXBUcmFpbGluZ0FjdGlvbkZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvY2hpcHMvZGVwcmVjYXRlZC90cmFpbGluZ2FjdGlvbi9mb3VuZGF0aW9uLmpzJztcbiAgaW1wb3J0IHsgb25Nb3VudCwgdGljayB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgZXhjbHVkZSxcbiAgICBwcmVmaXhGaWx0ZXIsXG4gICAgdXNlQWN0aW9ucyxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgUmlwcGxlIGZyb20gJ0BzbXVpL3JpcHBsZSc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IHN0eWxlID0gJyc7XG4gIGV4cG9ydCBsZXQgcmlwcGxlID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCB0b3VjaCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IG5vbk5hdmlnYWJsZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGljb24kdXNlID0gW107XG4gIGV4cG9ydCBsZXQgaWNvbiRjbGFzcyA9ICcnO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgaW5zdGFuY2U7XG4gIGxldCBpbnRlcm5hbENsYXNzZXMgPSB7fTtcbiAgbGV0IGludGVybmFsU3R5bGVzID0ge307XG4gIGxldCBpbnRlcm5hbEF0dHJzID0ge307XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDQ2hpcFRyYWlsaW5nQWN0aW9uRm91bmRhdGlvbih7XG4gICAgICBmb2N1czogKCkgPT4ge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZ2V0RWxlbWVudCgpO1xuICAgICAgICAvLyBMZXQgdGhlIHRhYmluZGV4IGNoYW5nZSBwcm9wYWdhdGUuXG4gICAgICAgIHdhaXRGb3JUYWJpbmRleCgoKSA9PiB7XG4gICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBnZXRBdHRyaWJ1dGU6IGdldEF0dHIsXG4gICAgICBub3RpZnlJbnRlcmFjdGlvbjogKHRyaWdnZXIpID0+XG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ0NoaXBUcmFpbGluZ0FjdGlvbjppbnRlcmFjdGlvbicsIHtcbiAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICB9KSxcbiAgICAgIG5vdGlmeU5hdmlnYXRpb246IChrZXkpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDQ2hpcFRyYWlsaW5nQWN0aW9uOm5hdmlnYXRpb24nLCB7IGtleSB9KTtcbiAgICAgIH0sXG4gICAgICBzZXRBdHRyaWJ1dGU6IGFkZEF0dHIsXG4gICAgfSk7XG5cbiAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOmNoaXBzOmNoaXA6dHJhaWxpbmctYWN0aW9uOm1vdW50Jywge1xuICAgICAgaXNOYXZpZ2FibGUsXG4gICAgICBmb2N1cyxcbiAgICAgIHJlbW92ZUZvY3VzLFxuICAgIH0pO1xuXG4gICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ1NNVUk6Y2hpcHM6Y2hpcDp0cmFpbGluZy1hY3Rpb246dW5tb3VudCcpO1xuXG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGludGVybmFsU3R5bGVzW25hbWVdO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcyA9IGludGVybmFsU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBdHRyKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSBpbiBpbnRlcm5hbEF0dHJzXG4gICAgICA/IGludGVybmFsQXR0cnNbbmFtZV1cbiAgICAgIDogZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoaW50ZXJuYWxBdHRyc1tuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgIGludGVybmFsQXR0cnNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3YWl0Rm9yVGFiaW5kZXgoZm4pIHtcbiAgICBpZiAoaW50ZXJuYWxBdHRyc1sndGFiaW5kZXgnXSAhPT0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgIHRpY2soKS50aGVuKGZuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm4oKTtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gaXNOYXZpZ2FibGUoKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmlzTmF2aWdhYmxlKCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgaW5zdGFuY2UuZm9jdXMoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiByZW1vdmVGb2N1cygpIHtcbiAgICBpbnN0YW5jZS5yZW1vdmVGb2N1cygpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPCEtLVxuICBOb3RlOiBjaGlwcyBtdXN0IGJlIHVuaXF1ZS4gKFRoZXkgY2Fubm90ID09PSBlYWNoIG90aGVyLilcbiAgSWYgeW91IG5lZWQgdG8gc2hvdyB0aGUgc2FtZSB2YWx1ZSwgdXNlIGtleWVkIGNoaXBzLlxuLS0+XG48U2V0IGNoaXBzPXtbJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJ119IGxldDpjaGlwPlxuICA8IS0tIE5vdGU6IHRoZSBgY2hpcGAgcHJvcGVydHkgaXMgcmVxdWlyZWQhIC0tPlxuICA8Q2hpcFxuICAgIHtjaGlwfVxuICAgIHNob3VsZFJlbW92ZU9uVHJhaWxpbmdJY29uQ2xpY2s9e2ZhbHNlfVxuICAgIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9XG4gID5cbiAgICB7I2lmIGNoaXAgPT09ICdmb3VyJ31cbiAgICAgIDxMZWFkaW5nSWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Ym9vazwvTGVhZGluZ0ljb24+XG4gICAgey9pZn1cbiAgICA8VGV4dCB0YWJpbmRleD1cIjBcIj57Y2hpcH08L1RleHQ+XG4gICAgeyNpZiBjaGlwID09PSAnZml2ZSd9XG4gICAgICA8VHJhaWxpbmdJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jb21tdXRlPC9UcmFpbGluZ0ljb24+XG4gICAgey9pZn1cbiAgPC9DaGlwPlxuPC9TZXQ+XG5cbjxwcmUgY2xhc3M9XCJzdGF0dXNcIj5DbGlja2VkOiB7Y2xpY2tlZH08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IENoaXAsIHsgU2V0LCBMZWFkaW5nSWNvbiwgVHJhaWxpbmdJY29uLCBUZXh0IH0gZnJvbSAnQHNtdWkvY2hpcHMnO1xuXG4gIGxldCBjbGlja2VkID0gMDtcbjwvc2NyaXB0PlxuIiwiPFNldCBjaGlwcz17WydvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZSddfSBsZXQ6Y2hpcCBub25JbnRlcmFjdGl2ZT5cbiAgPENoaXAge2NoaXB9PlxuICAgIDxUZXh0PntjaGlwfTwvVGV4dD5cbiAgPC9DaGlwPlxuPC9TZXQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBDaGlwLCB7IFNldCwgVGV4dCB9IGZyb20gJ0BzbXVpL2NoaXBzJztcbjwvc2NyaXB0PlxuIiwiPFNldCBjaGlwcz17Y2hvaWNlc30gbGV0OmNoaXAgY2hvaWNlIGJpbmQ6c2VsZWN0ZWQ+XG4gIDxDaGlwIHtjaGlwfT5cbiAgICA8VGV4dD57Y2hpcH08L1RleHQ+XG4gIDwvQ2hpcD5cbjwvU2V0PlxuXG48ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogMWVtO1wiPlByb2dyYW1tYXRpY2FsbHkgc2VsZWN0OjwvZGl2PlxuPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gKHNlbGVjdGVkID0gJ01vcm5pbmcnKX0+XG4gIDxMYWJlbD5Nb3JuaW5nPC9MYWJlbD5cbjwvQnV0dG9uPlxuPEJ1dHRvbiBvbjpjbGljaz17KCkgPT4gKHNlbGVjdGVkID0gJ0FmdGVybm9vbicpfT5cbiAgPExhYmVsPkFmdGVybm9vbjwvTGFiZWw+XG48L0J1dHRvbj5cbjxCdXR0b24gb246Y2xpY2s9eygpID0+IChzZWxlY3RlZCA9ICdFdmVuaW5nJyl9PlxuICA8TGFiZWw+RXZlbmluZzwvTGFiZWw+XG48L0J1dHRvbj5cbjxCdXR0b24gb246Y2xpY2s9eygpID0+IChzZWxlY3RlZCA9ICdOaWdodCcpfT5cbiAgPExhYmVsPk5pZ2h0PC9MYWJlbD5cbjwvQnV0dG9uPlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHtzZWxlY3RlZH08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IENoaXAsIHsgU2V0LCBUZXh0IH0gZnJvbSAnQHNtdWkvY2hpcHMnO1xuICBpbXBvcnQgQnV0dG9uLCB7IExhYmVsIH0gZnJvbSAnQHNtdWkvYnV0dG9uJztcblxuICBsZXQgY2hvaWNlcyA9IFsnTW9ybmluZycsICdBZnRlcm5vb24nLCAnRXZlbmluZycsICdOaWdodCddO1xuICBsZXQgc2VsZWN0ZWQgPSAnTW9ybmluZyc7XG48L3NjcmlwdD5cbiIsIjxTZXQgY2hpcHM9e2Nob2ljZXN9IGxldDpjaGlwIGZpbHRlciBiaW5kOnNlbGVjdGVkPlxuICA8Q2hpcCB7Y2hpcH0gdG91Y2g+XG4gICAgPFRleHQ+e2NoaXB9PC9UZXh0PlxuICA8L0NoaXA+XG48L1NldD5cblxuPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7c2VsZWN0ZWQuam9pbignLCAnKX08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IENoaXAsIHsgU2V0LCBUZXh0IH0gZnJvbSAnQHNtdWkvY2hpcHMnO1xuXG4gIGxldCBjaG9pY2VzID0gWydTaG9lcycsICdQYW50cycsICdTaGlydHMnLCAnSGF0cycsICdDb2F0cyddO1xuICBsZXQgc2VsZWN0ZWQgPSBbJ1Nob2VzJywgJ1NoaXJ0cycsICdDb2F0cyddO1xuPC9zY3JpcHQ+XG4iLCI8U2V0IGNoaXBzPXtjaG9pY2VzfSBsZXQ6Y2hpcCBmaWx0ZXIgYmluZDpzZWxlY3RlZD5cbiAgPENoaXAge2NoaXB9IHRvdWNoPlxuICAgIDxMZWFkaW5nSWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2hlY2tyb29tPC9MZWFkaW5nSWNvbj5cbiAgICA8VGV4dD57Y2hpcH08L1RleHQ+XG4gIDwvQ2hpcD5cbjwvU2V0PlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHtzZWxlY3RlZC5qb2luKCcsICcpfTwvcHJlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2hpcCwgeyBTZXQsIExlYWRpbmdJY29uLCBUZXh0IH0gZnJvbSAnQHNtdWkvY2hpcHMnO1xuXG4gIGxldCBjaG9pY2VzID0gWydTaG9lcycsICdQYW50cycsICdTaGlydHMnLCAnSGF0cycsICdDb2F0cyddO1xuICBsZXQgc2VsZWN0ZWQgPSBbJ1Nob2VzJywgJ1NoaXJ0cycsICdDb2F0cyddO1xuPC9zY3JpcHQ+XG4iLCI8U2V0IGNoaXBzPXtpbnB1dH0gbGV0OmNoaXAgaW5wdXQ+XG4gIDxDaGlwIHtjaGlwfT5cbiAgICA8VGV4dD57Y2hpcH08L1RleHQ+XG4gICAgPFRyYWlsaW5nQWN0aW9uIGljb24kY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNhbmNlbDwvVHJhaWxpbmdBY3Rpb24+XG4gIDwvQ2hpcD5cbjwvU2V0PlxuPEJ1dHRvbiBvbjpjbGljaz17YWRkSW5wdXRDaGlwfT48TGFiZWw+QWRkPC9MYWJlbD48L0J1dHRvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IENoaXAsIHsgU2V0LCBUcmFpbGluZ0FjdGlvbiwgVGV4dCB9IGZyb20gJ0BzbXVpL2NoaXBzJztcbiAgaW1wb3J0IEJ1dHRvbiwgeyBMYWJlbCB9IGZyb20gJ0BzbXVpL2J1dHRvbic7XG5cbiAgbGV0IGlucHV0ID0gWzEsIDIsIDMsIDRdO1xuXG4gIGZ1bmN0aW9uIGFkZElucHV0Q2hpcCgpIHtcbiAgICBpZiAoaW5wdXQubGVuZ3RoKSB7XG4gICAgICBpbnB1dC5wdXNoKGlucHV0W2lucHV0Lmxlbmd0aCAtIDFdICsgMSk7XG4gICAgICBpbnB1dCA9IGlucHV0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC5wdXNoKDEpO1xuICAgICAgaW5wdXQgPSBpbnB1dDtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIiwiPFNldCBjaGlwcz17a2V5ZWR9IGxldDpjaGlwIGtleT17KGNoaXApID0+IGNoaXAua30gaW5wdXQ+XG4gIDxDaGlwIHtjaGlwfT5cbiAgICA8VGV4dD57Y2hpcC52fTwvVGV4dD5cbiAgICA8VHJhaWxpbmdBY3Rpb24gaWNvbiRjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2FuY2VsPC9UcmFpbGluZ0FjdGlvbj5cbiAgPC9DaGlwPlxuPC9TZXQ+XG48QnV0dG9uIG9uOmNsaWNrPXthZGRLZXllZENoaXB9PjxMYWJlbD5BZGQ8L0xhYmVsPjwvQnV0dG9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgQ2hpcCwgeyBTZXQsIFRyYWlsaW5nQWN0aW9uLCBUZXh0IH0gZnJvbSAnQHNtdWkvY2hpcHMnO1xuICBpbXBvcnQgQnV0dG9uLCB7IExhYmVsIH0gZnJvbSAnQHNtdWkvYnV0dG9uJztcblxuICBsZXQga2V5ZWQgPSBbXG4gICAgeyBrOiAxLCB2OiAnQXBwbGUnIH0sXG4gICAgeyBrOiAyLCB2OiAnQXBwbGUnIH0sXG4gICAgeyBrOiAzLCB2OiAnQXBwbGUnIH0sXG4gICAgeyBrOiA0LCB2OiAnQXBwbGUnIH0sXG4gIF07XG5cbiAgZnVuY3Rpb24gYWRkS2V5ZWRDaGlwKCkge1xuICAgIGlmIChrZXllZC5sZW5ndGgpIHtcbiAgICAgIGtleWVkLnB1c2goeyBrOiBrZXllZFtrZXllZC5sZW5ndGggLSAxXS5rICsgMSwgdjogJ0FwcGxlJyB9KTtcbiAgICAgIGtleWVkID0ga2V5ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleWVkLnB1c2goeyBrOiAxLCB2OiAnQXBwbGUnIH0pO1xuICAgICAga2V5ZWQgPSBrZXllZDtcbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuIiwiPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+Q2hpcHMgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+Q2hpcHM8L2gyPlxuXG4gIDxwcmUgY2xhc3M9XCJkZW1vLXNwYWNlZFwiPm5wbSBpIC1EIEBzbXVpL2NoaXBzPC9wcmU+XG5cbiAgPERlbW8gY29tcG9uZW50PXtTaW1wbGV9IGZpbGU9XCJjaGlwcy9fU2ltcGxlLnN2ZWx0ZVwiIC8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtOb25JbnRlcmFjdGl2ZX0gZmlsZT1cImNoaXBzL19Ob25JbnRlcmFjdGl2ZS5zdmVsdGVcIj5cbiAgICBOb24taW50ZXJhY3RpdmUgY2hpcHNcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17Q2hvaWNlfSBmaWxlPVwiY2hpcHMvX0Nob2ljZS5zdmVsdGVcIj5DaG9pY2UgY2hpcHM8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtGaWx0ZXJ9IGZpbGU9XCJjaGlwcy9fRmlsdGVyLnN2ZWx0ZVwiPlxuICAgIEZpbHRlciBjaGlwcyB3aXRoIGluY3JlYXNlZCB0b3VjaCB0YXJnZXRcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17RmlsdGVySWNvbnN9IGZpbGU9XCJjaGlwcy9fRmlsdGVySWNvbnMuc3ZlbHRlXCI+XG4gICAgVGhlIHNhbWUsIGJ1dCB3aXRoIGxlYWRpbmcgaWNvbnNcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17SW5wdXR9IGZpbGU9XCJjaGlwcy9fSW5wdXQuc3ZlbHRlXCI+SW5wdXQgY2hpcHM8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtLZXllZH0gZmlsZT1cImNoaXBzL19LZXllZC5zdmVsdGVcIj5LZXllZCBjaGlwczwvRGVtbz5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZW1vLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaW1wbGUgZnJvbSAnLi9fU2ltcGxlLnN2ZWx0ZSc7XG4gIGltcG9ydCBOb25JbnRlcmFjdGl2ZSBmcm9tICcuL19Ob25JbnRlcmFjdGl2ZS5zdmVsdGUnO1xuICBpbXBvcnQgQ2hvaWNlIGZyb20gJy4vX0Nob2ljZS5zdmVsdGUnO1xuICBpbXBvcnQgRmlsdGVyIGZyb20gJy4vX0ZpbHRlci5zdmVsdGUnO1xuICBpbXBvcnQgRmlsdGVySWNvbnMgZnJvbSAnLi9fRmlsdGVySWNvbnMuc3ZlbHRlJztcbiAgaW1wb3J0IElucHV0IGZyb20gJy4vX0lucHV0LnN2ZWx0ZSc7XG4gIGltcG9ydCBLZXllZCBmcm9tICcuL19LZXllZC5zdmVsdGUnO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sU0FBUyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRTtBQUNuQyxFQUFFLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM5QyxFQUFFLE1BQU0sTUFBTSxH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SyxDQUFDLENBQUM7QUFDOUIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0IsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDL0IsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsSUFBSSxRQUFRLEdBQUc7QUFDZixJQUFJLFNBQVMsRUFBRSxDQUFDO0FBQ2hCLElBQUksS0FBSyxFQUFFLEVBQUU7QUFDYixJQUFJLFFBQVEsRUFBRSxFQUFFO0FBQ2hCLElBQUksT0FBTyxFQUFFLEVBQUU7QUFDZixJQUFJLFNBQVMsRUFBRSxFQUFFO0FBQ2pCLElBQUksR0FBRyxFQUFFLEVBQUU7QUFDWCxJQUFJLElBQUksRUFBRSxFQUFFO0FBQ1osSUFBSSxVQUFVLEVBQUUsRUFBRTtBQUNsQixJQUFJLFFBQVEsRUFBRSxFQUFFO0FBQ2hCLElBQUksV0FBVyxFQUFFLEVBQUU7QUFDbkIsSUFBSSxVQUFVLEVBQUUsRUFBRTtBQUNsQixJQUFJLE1BQU0sRUFBRSxFQUFFO0FBQ2QsSUFBSSxNQUFNLEVBQUUsRUFBRTtBQUNkLElBQUksR0FBRyxFQUFFLENBQUM7QUFDVixDQUFDLENBQUM7QUFDRixJQUFJLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQy9CO0FBQ0E7QUFDQSxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RELGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwRCxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDdEQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVDLGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNwRCxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzFELGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDeEQsY0FBYyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNoRCxjQUFjLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELGNBQWMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUMsSUFBSSxjQUFjLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUMvQjtBQUNBO0FBQ0EsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDbEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDNUIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDakMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDbkM7QUFDQTtBQUNBO0FBQ08sU0FBUyxZQUFZLENBQUMsR0FBRyxFQUFFO0FBQ2xDLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUN0QjtBQUNBLElBQUksSUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ2pDLFFBQVEsT0FBTyxHQUFHLENBQUM7QUFDbkIsS0FBSztBQUNMO0FBQ0EsSUFBSSxJQUFJLFNBQVMsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwRCxJQUFJLElBQUksU0FBUyxFQUFFO0FBQ25CLFFBQVEsT0FBTyxTQUFTLENBQUM7QUFDekIsS0FBSztBQUNMLElBQUksT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBQ3ZCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDTyxTQUFTLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtBQUN2QyxJQUFJLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNqRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQ3hIUyxRQUFRO21CQUNaLEdBQVMsTUFBRyxJQUFJO0lBQ2pCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIseUJBQXlCLEVBQUUsSUFBSTtJQUMvQixnQ0FBZ0MsY0FBRSxHQUFPLHVCQUFJLEdBQVc7K0JBQ3JELEdBQW1COzs7a0JBRXBCLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJFQVRDLEdBQUc7Ozs7Ozs7Ozs7Ozs7OzsySEFFWixRQUFRO29CQUNaLEdBQVMsTUFBRyxJQUFJO0tBQ2pCLGdCQUFnQixFQUFFLElBQUk7S0FDdEIseUJBQXlCLEVBQUUsSUFBSTtLQUMvQixnQ0FBZ0MsY0FBRSxHQUFPLHVCQUFJLEdBQVc7Z0NBQ3JELEdBQW1COztvREFFcEIsR0FBVzs7O29JQVRDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXFCYixhQUFhLEdBQUcsb0JBQW9CLENBQUMscUJBQXFCO09BRXJELEdBQUc7Y0FDVixTQUFTLEdBQUcsRUFBRTtPQUdaLE1BQU0sR0FBRyxVQUFVLENBQUMsbUJBQW1COzs7T0FDdkMsVUFBVSxHQUFHLFVBQVUsQ0FBQyw0QkFBNEI7OztPQUNwRCxrQkFBa0IsR0FBRyxVQUFVLENBQUMsb0NBQW9DOzs7S0FFdEUsT0FBTzs7VUFFSyxVQUFVO1NBQ2pCLE9BQU87Ozs7O0dBbkNMLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQ01ULFFBQVE7bUJBQ1osR0FBUyxNQUFHLElBQUk7SUFDakIsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QiwwQkFBMEIsRUFBRSxJQUFJOzs7a0JBRTlCLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4RUFWRCxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7K0VBS1YsUUFBUTtvQkFDWixHQUFTLE1BQUcsSUFBSTtLQUNqQixnQkFBZ0IsRUFBRSxJQUFJO0tBQ3RCLDBCQUEwQixFQUFFLElBQUk7O2tEQUU5QixHQUFXOzs7b0lBVkQsR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09Bc0JiLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQyxxQkFBcUI7T0FFckQsR0FBRztjQUNWLFNBQVMsR0FBRyxFQUFFO0tBR2QsT0FBTzs7VUFFSyxVQUFVO1NBQ2pCLE9BQU87Ozs7O0dBaENMLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRHBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBSSxrQkFBa0IsQ0FBQztBQUM5QixDQUFDLFVBQVUsa0JBQWtCLEVBQUU7QUFDL0IsSUFBSSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUM7QUFDOUUsSUFBSSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUM7QUFDbEUsSUFBSSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxlQUFlLENBQUM7QUFDbEYsSUFBSSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUM7QUFDNUUsSUFBSSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUM7QUFDaEYsSUFBSSxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7QUFDMUUsQ0FBQyxFQUFFLGtCQUFrQixLQUFLLGtCQUFrQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDN0MsSUFBSSxPQUFPLEdBQUc7QUFDckIsSUFBSSxXQUFXLEVBQUUsYUFBYTtBQUM5QixJQUFJLGlCQUFpQixFQUFFLG1DQUFtQztBQUMxRCxJQUFJLGdCQUFnQixFQUFFLGtDQUFrQztBQUN4RCxJQUFJLFNBQVMsRUFBRSxVQUFVO0FBQ3pCLENBQUM7O0FDcENEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0EsSUFBSSwrQkFBK0Isa0JBQWtCLFVBQVUsTUFBTSxFQUFFO0FBQ3ZFLElBQUksU0FBUyxDQUFDLCtCQUErQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZELElBQUksU0FBUywrQkFBK0IsQ0FBQyxPQUFPLEVBQUU7QUFDdEQsUUFBUSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLCtCQUErQixDQUFDLGNBQWMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0FBQzFILEtBQUs7QUFDTCxJQUFJLE1BQU0sQ0FBQyxjQUFjLENBQUMsK0JBQStCLEVBQUUsU0FBUyxFQUFFO0FBQ3RFLFFBQVEsR0FBRyxFQUFFLFlBQVk7QUFDekIsWUFBWSxPQUFPLE9BQU8sQ0FBQztBQUMzQixTQUFTO0FBQ1QsUUFBUSxVQUFVLEVBQUUsS0FBSztBQUN6QixRQUFRLFlBQVksRUFBRSxJQUFJO0FBQzFCLEtBQUssQ0FBQyxDQUFDO0FBQ1AsSUFBSSxNQUFNLENBQUMsY0FBYyxDQUFDLCtCQUErQixFQUFFLGdCQUFnQixFQUFFO0FBQzdFLFFBQVEsR0FBRyxFQUFFLFlBQVk7QUFDekIsWUFBWSxPQUFPO0FBQ25CLGdCQUFnQixLQUFLLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDeEQsZ0JBQWdCLFlBQVksRUFBRSxZQUFZLEVBQUUsT0FBTyxJQUFJLENBQUMsRUFBRTtBQUMxRCxnQkFBZ0IsWUFBWSxFQUFFLFlBQVksRUFBRSxPQUFPLFNBQVMsQ0FBQyxFQUFFO0FBQy9ELGdCQUFnQixpQkFBaUIsRUFBRSxZQUFZLEVBQUUsT0FBTyxTQUFTLENBQUMsRUFBRTtBQUNwRSxnQkFBZ0IsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE9BQU8sU0FBUyxDQUFDLEVBQUU7QUFDbkUsYUFBYSxDQUFDO0FBQ2QsU0FBUztBQUNULFFBQVEsVUFBVSxFQUFFLEtBQUs7QUFDekIsUUFBUSxZQUFZLEVBQUUsSUFBSTtBQUMxQixLQUFLLENBQUMsQ0FBQztBQUNQLElBQUksK0JBQStCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUMzRSxRQUFRLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUM5QixRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDakUsS0FBSyxDQUFDO0FBQ04sSUFBSSwrQkFBK0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQzdFLFFBQVEsR0FBRyxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzlCLFFBQVEsSUFBSSxHQUFHLEdBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLFFBQVEsSUFBSSxJQUFJLENBQUMsK0JBQStCLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkQsWUFBWSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkQsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BELFlBQVksT0FBTztBQUNuQixTQUFTO0FBQ1QsUUFBUSxJQUFJLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3BDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMvQyxZQUFZLE9BQU87QUFDbkIsU0FBUztBQUNULEtBQUssQ0FBQztBQUNOLElBQUksK0JBQStCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxZQUFZO0FBQ3hFLFFBQVEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzRCxLQUFLLENBQUM7QUFDTixJQUFJLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsWUFBWTtBQUNsRSxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDMUQsUUFBUSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQzdCLEtBQUssQ0FBQztBQUNOLElBQUksK0JBQStCLENBQUMsU0FBUyxDQUFDLFdBQVcsR0FBRyxZQUFZO0FBQ3hFLFFBQVEsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssTUFBTSxDQUFDO0FBQ3pFLEtBQUssQ0FBQztBQUNOLElBQUksK0JBQStCLENBQUMsU0FBUyxDQUFDLCtCQUErQixHQUFHLFVBQVUsR0FBRyxFQUFFO0FBQy9GLFFBQVEsSUFBSSxlQUFlLEdBQUcsR0FBRyxLQUFLLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDeEUsUUFBUSxJQUFJLGVBQWUsR0FBRyxHQUFHLEtBQUssR0FBRyxDQUFDLFNBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQztBQUMxRSxRQUFRLE9BQU8sZUFBZSxJQUFJLGVBQWUsQ0FBQztBQUNsRCxLQUFLLENBQUM7QUFDTixJQUFJLCtCQUErQixDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLEdBQUcsRUFBRTtBQUNsRixRQUFRLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxRQUFRLEVBQUU7QUFDbEMsWUFBWSxPQUFPLGtCQUFrQixDQUFDLFlBQVksQ0FBQztBQUNuRCxTQUFTO0FBQ1QsUUFBUSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsS0FBSyxFQUFFO0FBQy9CLFlBQVksT0FBTyxrQkFBa0IsQ0FBQyxTQUFTLENBQUM7QUFDaEQsU0FBUztBQUNULFFBQVEsSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLE1BQU0sRUFBRTtBQUNoQyxZQUFZLE9BQU8sa0JBQWtCLENBQUMsVUFBVSxDQUFDO0FBQ2pELFNBQVM7QUFDVCxRQUFRLElBQUksR0FBRyxLQUFLLEdBQUcsQ0FBQyxTQUFTLEVBQUU7QUFDbkMsWUFBWSxPQUFPLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztBQUNwRCxTQUFTO0FBQ1Q7QUFDQSxRQUFRLE9BQU8sa0JBQWtCLENBQUMsV0FBVyxDQUFDO0FBQzlDLEtBQUssQ0FBQztBQUNOLElBQUksT0FBTywrQkFBK0IsQ0FBQztBQUMzQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJDeEVWLEdBQUs7Ozs7Ozs4QkFLRCxRQUFRO29CQUNaLEdBQVUsTUFBRyxJQUFJO0lBQ2xCLDJDQUEyQyxFQUFFLElBQUk7OztFQUUvQyxZQUFZLGlCQUFDLEdBQVcsTUFBRSxPQUFPOzs7Ozs7Ozs7OzsrQkExQmhDLFFBQVE7bUJBQ1osR0FBUyxNQUFHLElBQUk7SUFDakIscUNBQXFDLEVBQUUsSUFBSTsyQkFDeEMsR0FBZTs7OzsrQkFFYixNQUFNLENBQUMsT0FBTyxvQkFBQyxHQUFjLE1BQ2pDLEdBQUcsU0FDSCxNQUFNLFlBQUUsR0FBSyxNQUNiLElBQUksQ0FBQyxHQUFHOzs7OERBQ0UsR0FBWSxNQUFHLE1BQU0sR0FBRyxJQUFJOzs7b0JBSXJDLEdBQWE7RUFDYixPQUFPLGlCQUFDLEdBQVcsT0FBRyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0ZBT2YsR0FBUTs7TUE3QnhCLE1BQU0sYUFBTixHQUFNO01BQ04sU0FBUyxFQUFFLEtBQUs7TUFDaEIsUUFBUSxlQUFSLEdBQVE7TUFDUixXQUFXLGtCQUFYLEdBQVc7TUFDWCxRQUFRLGVBQVIsR0FBUTs7a0ZBRU0sR0FBRzs7Ozs7Ozs7OztpQkFtQmQsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBGQUtELFFBQVE7cUJBQ1osR0FBVSxNQUFHLElBQUk7S0FDbEIsMkNBQTJDLEVBQUUsSUFBSTs7c0NBRS9DLFlBQVksaUJBQUMsR0FBVyxNQUFFLE9BQU87OzsrSUFMckIsR0FBUTs7OzZHQXJCbkIsUUFBUTtvQkFDWixHQUFTLE1BQUcsSUFBSTtLQUNqQixxQ0FBcUMsRUFBRSxJQUFJOzRCQUN4QyxHQUFlOzt3R0FFYixNQUFNLENBQUMsT0FBTyxvQkFBQyxHQUFjLE1BQ2pDLEdBQUcsU0FDSCxNQUFNLFlBQUUsR0FBSyxNQUNiLElBQUksQ0FBQyxHQUFHOzBIQUNFLEdBQVksTUFBRyxNQUFNLEdBQUcsSUFBSTs7d0RBSXJDLEdBQWE7c0NBQ2IsT0FBTyxpQkFBQyxHQUFXLE9BQUcsT0FBTzs7OztJQXRCL0IsTUFBTSxhQUFOLEdBQU07SUFDTixTQUFTLEVBQUUsS0FBSztJQUNoQixRQUFRLGVBQVIsR0FBUTtJQUNSLFdBQVcsa0JBQVgsR0FBVztJQUNYLFFBQVEsZUFBUixHQUFROzs7MElBRU0sR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUJBUVYsSUFBSSxFQUFFLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSzs7Ozs7Ozs7OztPQXNDckMsYUFBYSxHQUFHLG9CQUFvQixDQUFDLHFCQUFxQjtPQUVyRCxHQUFHO2NBQ1YsU0FBUyxHQUFHLEVBQUU7T0FFUCxLQUFLLEdBQUcsRUFBRTtPQUNWLE1BQU0sR0FBRyxJQUFJO09BQ2IsS0FBSyxHQUFHLEtBQUs7T0FDYixZQUFZLEdBQUcsS0FBSztPQUNwQixRQUFRO09BQ1IsVUFBVSxHQUFHLEVBQUU7S0FFdEIsT0FBTztLQUNQLFFBQVE7S0FDUixlQUFlO0tBQ2YsY0FBYztLQUNkLGFBQWE7O0NBRWpCLE9BQU87a0JBQ0wsUUFBUSxPQUFPLCtCQUErQjtJQUM1QyxLQUFLO1dBQ0csT0FBTyxHQUFHLFVBQVU7OztLQUUxQixlQUFlO01BQ2IsT0FBTyxDQUFDLEtBQUs7OztJQUdqQixZQUFZLEVBQUUsT0FBTztJQUNyQixpQkFBaUIsRUFBRyxPQUFPLElBQ3pCLFFBQVEsQ0FBQyxVQUFVLElBQUksbUNBQW1DLElBQ3hELE9BQU87SUFFWCxnQkFBZ0IsRUFBRyxHQUFHO0tBQ3BCLFFBQVEsQ0FBQyxVQUFVLElBQUksa0NBQWtDLElBQUksR0FBRzs7SUFFbEUsWUFBWSxFQUFFLE9BQU87OztFQUd2QixRQUFRLENBQUMsVUFBVSxJQUFJLHVDQUF1QyxJQUM1RCxXQUFXLEVBQ1gsS0FBSyxFQUNMLFdBQVc7RUFHYixRQUFRLENBQUMsSUFBSTs7O0dBR1gsUUFBUSxDQUFDLFVBQVUsSUFBSSx5Q0FBeUM7R0FFaEUsUUFBUSxDQUFDLE9BQU87Ozs7VUFJWCxRQUFRLENBQUMsU0FBUztPQUNwQixlQUFlLENBQUMsU0FBUztvQkFDNUIsZUFBZSxDQUFDLFNBQVMsSUFBSSxJQUFJOzs7O1VBSTVCLFdBQVcsQ0FBQyxTQUFTO1FBQ3RCLFNBQVMsSUFBSSxlQUFlLEtBQUssZUFBZSxDQUFDLFNBQVM7b0JBQzlELGVBQWUsQ0FBQyxTQUFTLElBQUksS0FBSzs7OztVQUk3QixRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUs7TUFDdkIsY0FBYyxDQUFDLElBQUksS0FBSyxLQUFLO09BQzNCLEtBQUssS0FBSyxFQUFFLElBQUksS0FBSyxJQUFJLElBQUk7V0FDeEIsY0FBYyxDQUFDLElBQUk7OztxQkFHMUIsY0FBYyxDQUFDLElBQUksSUFBSSxLQUFLOzs7OztVQUt6QixPQUFPLENBQUMsSUFBSTtTQUNaLElBQUksSUFBSSxhQUFhO0lBQ3hCLGFBQWEsQ0FBQyxJQUFJO0lBQ2xCLFVBQVUsR0FBRyxZQUFZLENBQUMsSUFBSTs7O1VBRzNCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSztNQUN0QixhQUFhLENBQUMsSUFBSSxNQUFNLEtBQUs7b0JBQy9CLGFBQWEsQ0FBQyxJQUFJLElBQUksS0FBSzs7OztVQUl0QixlQUFlLENBQUMsRUFBRTtNQUNyQixhQUFhLENBQUMsVUFBVSxNQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVTtHQUMvRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7O0dBRWQsRUFBRTs7OztVQUlVLFdBQVc7U0FDbEIsUUFBUSxDQUFDLFdBQVc7OztVQUdiLEtBQUs7RUFDbkIsUUFBUSxDQUFDLEtBQUs7OztVQUdBLFdBQVc7RUFDekIsUUFBUSxDQUFDLFdBQVc7OztVQUdOLFVBQVU7U0FDakIsT0FBTzs7Ozs7R0FuS0wsT0FBTzs7Ozs7dUJBcUJQLEtBQUssSUFBSyxRQUFRLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLO3lCQUM5QyxLQUFLLElBQUssUUFBUSxJQUFJLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDVHpDLEdBQUk7Ozs7Ozs7Ozs7Ozs7OzZEQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFIbkIsR0FBSSxRQUFLLE1BQU07Ozs7Ozs7Ozs7OzBCQUlmLEdBQUksUUFBSyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFKZixHQUFJLFFBQUssTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBSWYsR0FBSSxRQUFLLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FQYSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUo3QixLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkFpQnBCLEdBQU87Ozs7Ozs7OzswQ0FBUCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7dUVBQVAsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FLL0IsT0FBTyxHQUFHLENBQUM7Ozs7Ozs7NkNBakJHLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDUGhCLEdBQUk7Ozs7Ozs7Ozs7Ozs7OzZEQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFGRixLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNFdkMsR0FBSTs7Ozs7Ozs7Ozs7Ozs7K0RBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUZILEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBb0JZLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUVBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FNakMsT0FBTyxJQUFJLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE9BQU87S0FDckQsUUFBUSxHQUFHLFNBQVM7Ozs7Ozs7Ozs7Ozs2Q0FwQkQsUUFBUSxHQUFHLFNBQVM7K0NBR3BCLFFBQVEsR0FBRyxXQUFXOytDQUd0QixRQUFRLEdBQUcsU0FBUzsrQ0FHcEIsUUFBUSxHQUFHLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNkaEMsR0FBSTs7Ozs7Ozs7Ozs7Ozs7NkRBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBSWdCLEdBQVEsSUFBQyxJQUFJLENBQUMsSUFBSTs7Ozs7Ozs7O3FCQU5yQyxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FGQU1ZLEdBQVEsSUFBQyxJQUFJLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FLM0MsT0FBTyxJQUFJLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPO0tBQ3RELFFBQVEsSUFBSSxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNUakMsR0FBSTs7Ozs7Ozs7Ozs7Ozs7NkRBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUlnQixHQUFRLElBQUMsSUFBSSxDQUFDLElBQUk7Ozs7Ozs7OztxQkFQckMsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRkFPWSxHQUFRLElBQUMsSUFBSSxDQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBSzNDLE9BQU8sSUFBSSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTztLQUN0RCxRQUFRLElBQUksT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JDWGpDLEdBQUk7Ozs7Ozs7Ozs7Ozs7OzZEQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUZILEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTUMsR0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBEQU5sQixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVlYLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDOztVQUVkLFlBQVk7TUFDZixLQUFLLENBQUMsTUFBTTtHQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUM7OztHQUd0QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkNqQlAsR0FBSSxJQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OzZEQUFOLEdBQUksSUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFGTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FNQyxHQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MERBTmxCLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBQWlCLElBQUksSUFBSyxJQUFJLENBQUMsQ0FBQzs7Ozs7O0tBWTNDLEtBQUs7SUFDTCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPO0lBQ2hCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU87SUFDaEIsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTztJQUNoQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPOzs7VUFHWCxZQUFZO01BQ2YsS0FBSyxDQUFDLE1BQU07R0FDZCxLQUFLLENBQUMsSUFBSTtJQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUM7SUFBRSxDQUFDLEVBQUUsT0FBTzs7Ozs7R0FHekQsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDZmhCLE1BQU07Ozs7Ozs7O2VBRU4sY0FBYzs7Ozs7Ozs7OztlQUlkLE1BQU07Ozs7Ozs7Ozs7ZUFFTixNQUFNOzs7Ozs7Ozs7O2VBSU4sV0FBVzs7Ozs7Ozs7OztlQUlYLEtBQUs7Ozs7Ozs7Ozs7ZUFFTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
