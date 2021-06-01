import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a6 as binding_callbacks, ak as bind, v as validate_slots, p as element, q as create_component, o as space, t as text, x as claim_element, y as children, A as claim_component, w as claim_space, z as claim_text, u as detach_dev, E as attr_dev, D as add_location, B as set_style, F as insert_dev, G as append_dev, H as mount_component, al as add_flush_callback, aw as set_data_dev, J as transition_in, K as transition_out, M as destroy_component, ag as validate_each_argument, a1 as empty, a4 as group_outros, a5 as check_outros, aj as destroy_each, O as noop, a7 as create_slot, $ as assign, W as compute_rest_props, Y as get_current_component, ah as onMount, a0 as exclude_internal_props, a9 as set_attributes, aa as action_destroyer, a8 as update_slot, a2 as get_spread_update, ab as is_function, ac as run_all, aC as validate_each_keys, aD as update_keyed_each, aE as outro_and_destroy_block, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { _ as __extends, a as __assign, M as MDCFoundation, S as Select$1, O as Option, c as classMap, f as forwardEventsBuilder, d as dispatch, u as useActions } from './Option.2399e112.js';
import { B as Button_1 } from './Button.d66ce348.js';

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
    ICON_EVENT: 'MDCSelect:icon',
    ICON_ROLE: 'button',
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
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCSelectIconFoundation = /** @class */ (function (_super) {
    __extends(MDCSelectIconFoundation, _super);
    function MDCSelectIconFoundation(adapter) {
        var _this = _super.call(this, __assign(__assign({}, MDCSelectIconFoundation.defaultAdapter), adapter)) || this;
        _this.savedTabIndex_ = null;
        _this.interactionHandler_ = function (evt) { return _this.handleInteraction(evt); };
        return _this;
    }
    Object.defineProperty(MDCSelectIconFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCSelectIconFoundation.prototype.init = function () {
        var _this = this;
        this.savedTabIndex_ = this.adapter.getAttr('tabindex');
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter.registerInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCSelectIconFoundation.prototype.destroy = function () {
        var _this = this;
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter.deregisterInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex_) {
            return;
        }
        if (disabled) {
            this.adapter.setAttr('tabindex', '-1');
            this.adapter.removeAttr('role');
        }
        else {
            this.adapter.setAttr('tabindex', this.savedTabIndex_);
            this.adapter.setAttr('role', strings.ICON_ROLE);
        }
    };
    MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter.setAttr('aria-label', label);
    };
    MDCSelectIconFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            this.adapter.notifyIconAction();
        }
    };
    return MDCSelectIconFoundation;
}(MDCFoundation));

/* src/routes/demo/select/_Showcase.svelte generated by Svelte v3.37.0 */
const file$b = "src/routes/demo/select/_Showcase.svelte";

function get_each_context$9(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i];
	return child_ctx;
}

// (5:8) <Option value={fruit}>
function create_default_slot_1$a(ctx) {
	let t_value = /*fruit*/ ctx[3] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$a.name,
		type: "slot",
		source: "(5:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (4:6) {#each fruits as fruit}
function create_each_block$9(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[3],
				$$slots: { default: [create_default_slot_1$a] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 64) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$9.name,
		type: "each",
		source: "(4:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (3:4) <Select bind:value label="Select Menu">
function create_default_slot$a(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*fruits*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$9(get_each_context$9(ctx, each_value, i));
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
			if (dirty & /*fruits*/ 2) {
				each_value = /*fruits*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$9(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$9(child_ctx);
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
		id: create_default_slot$a.name,
		type: "slot",
		source: "(3:4) <Select bind:value label=\\\"Select Menu\\\">",
		ctx
	});

	return block;
}

function create_fragment$b(ctx) {
	let div1;
	let div0;
	let select;
	let updating_value;
	let t0;
	let pre;
	let t1;
	let t2;
	let current;

	function select_value_binding(value) {
		/*select_value_binding*/ ctx[2](value);
	}

	let select_props = {
		label: "Select Menu",
		$$slots: { default: [create_default_slot$a] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		select_props.value = /*value*/ ctx[0];
	}

	select = new Select$1({ props: select_props, $$inline: true });
	binding_callbacks.push(() => bind(select, "value", select_value_binding));

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			create_component(select.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Selected: ");
			t2 = text(/*value*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(select.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre = claim_element(div0_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t1 = claim_text(pre_nodes, "Selected: ");
			t2 = claim_text(pre_nodes, /*value*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre, "class", "status");
			add_location(pre, file$b, 8, 4, 229);
			add_location(div0, file$b, 1, 2, 69);
			attr_dev(div1, "class", "columns margins");
			set_style(div1, "justify-content", "flex-start");
			add_location(div1, file$b, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			mount_component(select, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre);
			append_dev(pre, t1);
			append_dev(pre, t2);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select_changes = {};

			if (dirty & /*$$scope*/ 64) {
				select_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				select_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select.$set(select_changes);
			if (!current || dirty & /*value*/ 1) set_data_dev(t2, /*value*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			destroy_component(select);
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

function instance$a($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Showcase", slots, []);
	let fruits = ["Apple", "Orange", "Banana", "Mango"];
	let value = "Orange";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Showcase> was created with unknown prop '${key}'`);
	});

	function select_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	$$self.$capture_state = () => ({ Select: Select$1, Option, fruits, value });

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(1, fruits = $$props.fruits);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value, fruits, select_value_binding];
}

class Showcase extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$a, create_fragment$b, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Showcase",
			options,
			id: create_fragment$b.name
		});
	}
}

/* packages/select/icon/Icon.svelte generated by Svelte v3.37.0 */

const file$a = "packages/select/icon/Icon.svelte";

function create_fragment$a(ctx) {
	let i;
	let i_class_value;
	let i_aria_hidden_value;
	let i_aria_disabled_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	let i_levels = [
		{
			class: i_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-select__icon": true
			})
		},
		{ tabindex: /*tabindex*/ ctx[3] },
		{
			"aria-hidden": i_aria_hidden_value = /*tabindex*/ ctx[3] === "-1" ? "true" : "false"
		},
		{
			"aria-disabled": i_aria_disabled_value = /*role*/ ctx[2] === "button"
			? /*disabled*/ ctx[4] ? "true" : "false"
			: null
		},
		{ role: /*role*/ ctx[2] },
		/*internalAttrs*/ ctx[6],
		/*$$restProps*/ ctx[8]
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
			i = claim_element(nodes, "I", {
				class: true,
				tabindex: true,
				"aria-hidden": true,
				"aria-disabled": true,
				role: true
			});

			var i_nodes = children(i);
			if (default_slot) default_slot.l(i_nodes);
			i_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(i, i_data);
			add_location(i, file$a, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, i, anchor);

			if (default_slot) {
				default_slot.m(i, null);
			}

			/*i_binding*/ ctx[12](i);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, i, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[7].call(null, i))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1024) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, null, null);
				}
			}

			set_attributes(i, i_data = get_spread_update(i_levels, [
				(!current || dirty & /*className*/ 2 && i_class_value !== (i_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-select__icon": true
				}))) && { class: i_class_value },
				(!current || dirty & /*tabindex*/ 8) && { tabindex: /*tabindex*/ ctx[3] },
				(!current || dirty & /*tabindex*/ 8 && i_aria_hidden_value !== (i_aria_hidden_value = /*tabindex*/ ctx[3] === "-1" ? "true" : "false")) && { "aria-hidden": i_aria_hidden_value },
				(!current || dirty & /*role, disabled*/ 20 && i_aria_disabled_value !== (i_aria_disabled_value = /*role*/ ctx[2] === "button"
				? /*disabled*/ ctx[4] ? "true" : "false"
				: null)) && { "aria-disabled": i_aria_disabled_value },
				(!current || dirty & /*role*/ 4) && { role: /*role*/ ctx[2] },
				dirty & /*internalAttrs*/ 64 && /*internalAttrs*/ ctx[6],
				dirty & /*$$restProps*/ 256 && /*$$restProps*/ ctx[8]
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
			/*i_binding*/ ctx[12](null);
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

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","role","tabindex","disabled","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Icon", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { role = null } = $$props;
	let { tabindex = role === "button" ? "0" : "-1" } = $$props;
	let { disabled = false } = $$props;
	let element;
	let instance;
	let internalAttrs = {};

	onMount(() => {
		instance = new MDCSelectIconFoundation({
				getAttr,
				setAttr: addAttr,
				removeAttr,
				setContent: value => {
					content = value;
				},
				registerInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
				deregisterInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler),
				notifyIconAction: () => dispatch(getElement(), "MDCSelect:icon")
			});

		dispatch(getElement(), "SMUI:select:leading-icon:mount", instance);
		instance.init();

		return () => {
			dispatch(getElement(), "SMUI:select:leading-icon:unmount", instance);
			instance.destroy();
		};
	});

	function getAttr(name) {
		return name in internalAttrs
		? internalAttrs[name]
		: getElement().getAttribute(name);
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(6, internalAttrs[name] = value, internalAttrs);
		}
	}

	function removeAttr(name) {
		if (!(name in internalAttrs) || internalAttrs[name] != null) {
			$$invalidate(6, internalAttrs[name] = undefined, internalAttrs);
		}
	}

	function getElement() {
		return element;
	}

	function i_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(5, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("role" in $$new_props) $$invalidate(2, role = $$new_props.role);
		if ("tabindex" in $$new_props) $$invalidate(3, tabindex = $$new_props.tabindex);
		if ("disabled" in $$new_props) $$invalidate(4, disabled = $$new_props.disabled);
		if ("$$scope" in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCSelectIconFoundation,
		onMount,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		dispatch,
		forwardEvents,
		use,
		className,
		role,
		tabindex,
		disabled,
		element,
		instance,
		internalAttrs,
		getAttr,
		addAttr,
		removeAttr,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("role" in $$props) $$invalidate(2, role = $$new_props.role);
		if ("tabindex" in $$props) $$invalidate(3, tabindex = $$new_props.tabindex);
		if ("disabled" in $$props) $$invalidate(4, disabled = $$new_props.disabled);
		if ("element" in $$props) $$invalidate(5, element = $$new_props.element);
		if ("instance" in $$props) instance = $$new_props.instance;
		if ("internalAttrs" in $$props) $$invalidate(6, internalAttrs = $$new_props.internalAttrs);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		role,
		tabindex,
		disabled,
		element,
		internalAttrs,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		i_binding
	];
}

class Icon extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1, create_fragment$a, safe_not_equal, {
			use: 0,
			class: 1,
			role: 2,
			tabindex: 3,
			disabled: 4,
			getElement: 9
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Icon",
			options,
			id: create_fragment$a.name
		});
	}

	get use() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get role() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set role(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get tabindex() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set tabindex(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[9];
	}

	set getElement(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/select/_Standard.svelte generated by Svelte v3.37.0 */
const file$9 = "src/routes/demo/select/_Standard.svelte";

function get_each_context$8(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_1$8(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_2$8(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_3$4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (6:8) <Option value={fruit}>
function create_default_slot_8$6(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$6.name,
		type: "slot",
		source: "(6:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (5:6) {#each fruits as fruit}
function create_each_block_3$4(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_8$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3$4.name,
		type: "each",
		source: "(5:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (3:4) <Select bind:value label="Fruit">
function create_default_slot_7$6(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_3 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_3);
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3$4(get_each_context_3$4(ctx, each_value_3, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_3 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_3);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3$4(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_3$4(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_3.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_3.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$6.name,
		type: "slot",
		source: "(3:4) <Select bind:value label=\\\"Fruit\\\">",
		ctx
	});

	return block;
}

// (17:8) <Option value={fruit}>
function create_default_slot_6$6(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$6.name,
		type: "slot",
		source: "(17:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (16:6) {#each fruits as fruit}
function create_each_block_2$8(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_6$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2$8.name,
		type: "each",
		source: "(16:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (14:4) <Select bind:value={valueHelperText} label="With Helper Text">
function create_default_slot_5$9(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_2 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$8(get_each_context_2$8(ctx, each_value_2, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_2 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2$8(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_2$8(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$9.name,
		type: "slot",
		source: "(14:4) <Select bind:value={valueHelperText} label=\\\"With Helper Text\\\">",
		ctx
	});

	return block;
}

// (19:6) <svelte:fragment slot="helperText">
function create_helperText_slot$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper text.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper text.");
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
		id: create_helperText_slot$4.name,
		type: "slot",
		source: "(19:6) <svelte:fragment slot=\\\"helperText\\\">",
		ctx
	});

	return block;
}

// (30:8) <Option value={fruit}>
function create_default_slot_4$9(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$9.name,
		type: "slot",
		source: "(30:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (29:6) {#each fruits as fruit}
function create_each_block_1$8(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_4$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$8.name,
		type: "each",
		source: "(29:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (26:4) <Select bind:value={valueLeadingIcon} label="Leading Icon">
function create_default_slot_3$9(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_1 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$8(get_each_context_1$8(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_1 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$8(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1$8(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$9.name,
		type: "slot",
		source: "(26:4) <Select bind:value={valueLeadingIcon} label=\\\"Leading Icon\\\">",
		ctx
	});

	return block;
}

// (27:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_2$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("event");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "event");
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
		id: create_default_slot_2$9.name,
		type: "slot",
		source: "(27:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (27:6) 
function create_leadingIcon_slot$5(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_2$9] },
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

			if (dirty & /*$$scope*/ 262144) {
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
		id: create_leadingIcon_slot$5.name,
		type: "slot",
		source: "(27:6) ",
		ctx
	});

	return block;
}

// (41:8) <Option value={fruit}>
function create_default_slot_1$9(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$9.name,
		type: "slot",
		source: "(41:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (40:6) {#each fruits as fruit}
function create_each_block$8(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_1$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$8.name,
		type: "each",
		source: "(40:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (38:4) <Select invalid bind:value={valueInvalid} label="Invalid">
function create_default_slot$9(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value = /*fruits*/ ctx[4];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$8(get_each_context$8(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value = /*fruits*/ ctx[4];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$8(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$8(child_ctx);
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
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$9.name,
		type: "slot",
		source: "(38:4) <Select invalid bind:value={valueInvalid} label=\\\"Invalid\\\">",
		ctx
	});

	return block;
}

function create_fragment$9(ctx) {
	let div4;
	let div0;
	let select0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let select1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let select2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let select3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function select0_value_binding(value) {
		/*select0_value_binding*/ ctx[5](value);
	}

	let select0_props = {
		label: "Fruit",
		$$slots: { default: [create_default_slot_7$6] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		select0_props.value = /*value*/ ctx[0];
	}

	select0 = new Select$1({ props: select0_props, $$inline: true });
	binding_callbacks.push(() => bind(select0, "value", select0_value_binding));

	function select1_value_binding(value) {
		/*select1_value_binding*/ ctx[6](value);
	}

	let select1_props = {
		label: "With Helper Text",
		$$slots: {
			helperText: [create_helperText_slot$4],
			default: [create_default_slot_5$9]
		},
		$$scope: { ctx }
	};

	if (/*valueHelperText*/ ctx[1] !== void 0) {
		select1_props.value = /*valueHelperText*/ ctx[1];
	}

	select1 = new Select$1({ props: select1_props, $$inline: true });
	binding_callbacks.push(() => bind(select1, "value", select1_value_binding));

	function select2_value_binding(value) {
		/*select2_value_binding*/ ctx[7](value);
	}

	let select2_props = {
		label: "Leading Icon",
		$$slots: {
			leadingIcon: [create_leadingIcon_slot$5],
			default: [create_default_slot_3$9]
		},
		$$scope: { ctx }
	};

	if (/*valueLeadingIcon*/ ctx[2] !== void 0) {
		select2_props.value = /*valueLeadingIcon*/ ctx[2];
	}

	select2 = new Select$1({ props: select2_props, $$inline: true });
	binding_callbacks.push(() => bind(select2, "value", select2_value_binding));

	function select3_value_binding(value) {
		/*select3_value_binding*/ ctx[8](value);
	}

	let select3_props = {
		invalid: true,
		label: "Invalid",
		$$slots: { default: [create_default_slot$9] },
		$$scope: { ctx }
	};

	if (/*valueInvalid*/ ctx[3] !== void 0) {
		select3_props.value = /*valueInvalid*/ ctx[3];
	}

	select3 = new Select$1({ props: select3_props, $$inline: true });
	binding_callbacks.push(() => bind(select3, "value", select3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(select0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Selected: ");
			t2 = text(/*value*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(select1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Selected: ");
			t6 = text(/*valueHelperText*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(select2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Selected: ");
			t10 = text(/*valueLeadingIcon*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(select3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Selected: ");
			t14 = text(/*valueInvalid*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(select0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Selected: ");
			t2 = claim_text(pre0_nodes, /*value*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(select1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Selected: ");
			t6 = claim_text(pre1_nodes, /*valueHelperText*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(select2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Selected: ");
			t10 = claim_text(pre2_nodes, /*valueLeadingIcon*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			claim_component(select3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Selected: ");
			t14 = claim_text(pre3_nodes, /*valueInvalid*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$9, 9, 4, 212);
			add_location(div0, file$9, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$9, 21, 4, 549);
			add_location(div1, file$9, 12, 2, 268);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$9, 33, 4, 888);
			add_location(div2, file$9, 24, 2, 615);
			attr_dev(pre3, "class", "status");
			add_location(pre3, file$9, 44, 4, 1160);
			add_location(div3, file$9, 36, 2, 955);
			attr_dev(div4, "class", "columns margins");
			add_location(div4, file$9, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(select0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(select1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(select2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(select3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select0_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				select0_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select0.$set(select0_changes);
			if (!current || dirty & /*value*/ 1) set_data_dev(t2, /*value*/ ctx[0]);
			const select1_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueHelperText*/ 2) {
				updating_value_1 = true;
				select1_changes.value = /*valueHelperText*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			select1.$set(select1_changes);
			if (!current || dirty & /*valueHelperText*/ 2) set_data_dev(t6, /*valueHelperText*/ ctx[1]);
			const select2_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueLeadingIcon*/ 4) {
				updating_value_2 = true;
				select2_changes.value = /*valueLeadingIcon*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			select2.$set(select2_changes);
			if (!current || dirty & /*valueLeadingIcon*/ 4) set_data_dev(t10, /*valueLeadingIcon*/ ctx[2]);
			const select3_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueInvalid*/ 8) {
				updating_value_3 = true;
				select3_changes.value = /*valueInvalid*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			select3.$set(select3_changes);
			if (!current || dirty & /*valueInvalid*/ 8) set_data_dev(t14, /*valueInvalid*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select0.$$.fragment, local);
			transition_in(select1.$$.fragment, local);
			transition_in(select2.$$.fragment, local);
			transition_in(select3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select0.$$.fragment, local);
			transition_out(select1.$$.fragment, local);
			transition_out(select2.$$.fragment, local);
			transition_out(select3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(select0);
			destroy_component(select1);
			destroy_component(select2);
			destroy_component(select3);
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
	validate_slots("Standard", slots, []);
	let fruits = ["Apple", "Orange", "Banana", "Mango"];
	let value = "";
	let valueHelperText = "";
	let valueLeadingIcon = "";
	let valueInvalid = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Standard> was created with unknown prop '${key}'`);
	});

	function select0_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	function select1_value_binding(value) {
		valueHelperText = value;
		$$invalidate(1, valueHelperText);
	}

	function select2_value_binding(value) {
		valueLeadingIcon = value;
		$$invalidate(2, valueLeadingIcon);
	}

	function select3_value_binding(value) {
		valueInvalid = value;
		$$invalidate(3, valueInvalid);
	}

	$$self.$capture_state = () => ({
		Select: Select$1,
		Option,
		Icon,
		fruits,
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid
	});

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(4, fruits = $$props.fruits);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("valueHelperText" in $$props) $$invalidate(1, valueHelperText = $$props.valueHelperText);
		if ("valueLeadingIcon" in $$props) $$invalidate(2, valueLeadingIcon = $$props.valueLeadingIcon);
		if ("valueInvalid" in $$props) $$invalidate(3, valueInvalid = $$props.valueInvalid);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid,
		fruits,
		select0_value_binding,
		select1_value_binding,
		select2_value_binding,
		select3_value_binding
	];
}

class Standard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$9, create_fragment$9, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Standard",
			options,
			id: create_fragment$9.name
		});
	}
}

/* src/routes/demo/select/_Filled.svelte generated by Svelte v3.37.0 */
const file$8 = "src/routes/demo/select/_Filled.svelte";

function get_each_context$7(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_1$7(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_2$7(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_3$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (6:8) <Option value={fruit}>
function create_default_slot_8$5(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$5.name,
		type: "slot",
		source: "(6:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (5:6) {#each fruits as fruit}
function create_each_block_3$3(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_8$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3$3.name,
		type: "each",
		source: "(5:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (3:4) <Select variant="filled" bind:value label="Fruit">
function create_default_slot_7$5(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_3 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_3);
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3$3(get_each_context_3$3(ctx, each_value_3, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_3 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_3);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3$3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_3$3(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_3.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_3.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$5.name,
		type: "slot",
		source: "(3:4) <Select variant=\\\"filled\\\" bind:value label=\\\"Fruit\\\">",
		ctx
	});

	return block;
}

// (21:8) <Option value={fruit}>
function create_default_slot_6$5(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$5.name,
		type: "slot",
		source: "(21:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (20:6) {#each fruits as fruit}
function create_each_block_2$7(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_6$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2$7.name,
		type: "each",
		source: "(20:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (14:4) <Select       variant="filled"       bind:value={valueHelperText}       label="With Helper Text"     >
function create_default_slot_5$8(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_2 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$7(get_each_context_2$7(ctx, each_value_2, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_2 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2$7(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_2$7(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$8.name,
		type: "slot",
		source: "(14:4) <Select       variant=\\\"filled\\\"       bind:value={valueHelperText}       label=\\\"With Helper Text\\\"     >",
		ctx
	});

	return block;
}

// (23:6) <svelte:fragment slot="helperText">
function create_helperText_slot$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper text.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper text.");
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
		id: create_helperText_slot$3.name,
		type: "slot",
		source: "(23:6) <svelte:fragment slot=\\\"helperText\\\">",
		ctx
	});

	return block;
}

// (34:8) <Option value={fruit}>
function create_default_slot_4$8(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$8.name,
		type: "slot",
		source: "(34:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (33:6) {#each fruits as fruit}
function create_each_block_1$7(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_4$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$7.name,
		type: "each",
		source: "(33:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (30:4) <Select variant="filled" bind:value={valueLeadingIcon} label="Leading Icon">
function create_default_slot_3$8(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_1 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$7(get_each_context_1$7(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_1 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$7(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1$7(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$8.name,
		type: "slot",
		source: "(30:4) <Select variant=\\\"filled\\\" bind:value={valueLeadingIcon} label=\\\"Leading Icon\\\">",
		ctx
	});

	return block;
}

// (31:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_2$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("event");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "event");
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
		id: create_default_slot_2$8.name,
		type: "slot",
		source: "(31:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (31:6) 
function create_leadingIcon_slot$4(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_2$8] },
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

			if (dirty & /*$$scope*/ 262144) {
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
		id: create_leadingIcon_slot$4.name,
		type: "slot",
		source: "(31:6) ",
		ctx
	});

	return block;
}

// (45:8) <Option value={fruit}>
function create_default_slot_1$8(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$8.name,
		type: "slot",
		source: "(45:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (44:6) {#each fruits as fruit}
function create_each_block$7(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_1$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$7.name,
		type: "each",
		source: "(44:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (42:4) <Select variant="filled" invalid bind:value={valueInvalid} label="Invalid">
function create_default_slot$8(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value = /*fruits*/ ctx[4];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$7(get_each_context$7(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value = /*fruits*/ ctx[4];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$7(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$7(child_ctx);
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
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$8.name,
		type: "slot",
		source: "(42:4) <Select variant=\\\"filled\\\" invalid bind:value={valueInvalid} label=\\\"Invalid\\\">",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
	let div4;
	let div0;
	let select0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let select1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let select2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let select3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function select0_value_binding(value) {
		/*select0_value_binding*/ ctx[5](value);
	}

	let select0_props = {
		variant: "filled",
		label: "Fruit",
		$$slots: { default: [create_default_slot_7$5] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		select0_props.value = /*value*/ ctx[0];
	}

	select0 = new Select$1({ props: select0_props, $$inline: true });
	binding_callbacks.push(() => bind(select0, "value", select0_value_binding));

	function select1_value_binding(value) {
		/*select1_value_binding*/ ctx[6](value);
	}

	let select1_props = {
		variant: "filled",
		label: "With Helper Text",
		$$slots: {
			helperText: [create_helperText_slot$3],
			default: [create_default_slot_5$8]
		},
		$$scope: { ctx }
	};

	if (/*valueHelperText*/ ctx[1] !== void 0) {
		select1_props.value = /*valueHelperText*/ ctx[1];
	}

	select1 = new Select$1({ props: select1_props, $$inline: true });
	binding_callbacks.push(() => bind(select1, "value", select1_value_binding));

	function select2_value_binding(value) {
		/*select2_value_binding*/ ctx[7](value);
	}

	let select2_props = {
		variant: "filled",
		label: "Leading Icon",
		$$slots: {
			leadingIcon: [create_leadingIcon_slot$4],
			default: [create_default_slot_3$8]
		},
		$$scope: { ctx }
	};

	if (/*valueLeadingIcon*/ ctx[2] !== void 0) {
		select2_props.value = /*valueLeadingIcon*/ ctx[2];
	}

	select2 = new Select$1({ props: select2_props, $$inline: true });
	binding_callbacks.push(() => bind(select2, "value", select2_value_binding));

	function select3_value_binding(value) {
		/*select3_value_binding*/ ctx[8](value);
	}

	let select3_props = {
		variant: "filled",
		invalid: true,
		label: "Invalid",
		$$slots: { default: [create_default_slot$8] },
		$$scope: { ctx }
	};

	if (/*valueInvalid*/ ctx[3] !== void 0) {
		select3_props.value = /*valueInvalid*/ ctx[3];
	}

	select3 = new Select$1({ props: select3_props, $$inline: true });
	binding_callbacks.push(() => bind(select3, "value", select3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(select0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Selected: ");
			t2 = text(/*value*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(select1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Selected: ");
			t6 = text(/*valueHelperText*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(select2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Selected: ");
			t10 = text(/*valueLeadingIcon*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(select3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Selected: ");
			t14 = text(/*valueInvalid*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(select0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Selected: ");
			t2 = claim_text(pre0_nodes, /*value*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(select1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Selected: ");
			t6 = claim_text(pre1_nodes, /*valueHelperText*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(select2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Selected: ");
			t10 = claim_text(pre2_nodes, /*valueLeadingIcon*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			claim_component(select3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Selected: ");
			t14 = claim_text(pre3_nodes, /*valueInvalid*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$8, 9, 4, 229);
			add_location(div0, file$8, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$8, 25, 4, 606);
			add_location(div1, file$8, 12, 2, 285);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$8, 37, 4, 962);
			add_location(div2, file$8, 28, 2, 672);
			attr_dev(pre3, "class", "status");
			add_location(pre3, file$8, 48, 4, 1251);
			add_location(div3, file$8, 40, 2, 1029);
			attr_dev(div4, "class", "columns margins");
			add_location(div4, file$8, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(select0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(select1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(select2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(select3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select0_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				select0_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select0.$set(select0_changes);
			if (!current || dirty & /*value*/ 1) set_data_dev(t2, /*value*/ ctx[0]);
			const select1_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueHelperText*/ 2) {
				updating_value_1 = true;
				select1_changes.value = /*valueHelperText*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			select1.$set(select1_changes);
			if (!current || dirty & /*valueHelperText*/ 2) set_data_dev(t6, /*valueHelperText*/ ctx[1]);
			const select2_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueLeadingIcon*/ 4) {
				updating_value_2 = true;
				select2_changes.value = /*valueLeadingIcon*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			select2.$set(select2_changes);
			if (!current || dirty & /*valueLeadingIcon*/ 4) set_data_dev(t10, /*valueLeadingIcon*/ ctx[2]);
			const select3_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueInvalid*/ 8) {
				updating_value_3 = true;
				select3_changes.value = /*valueInvalid*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			select3.$set(select3_changes);
			if (!current || dirty & /*valueInvalid*/ 8) set_data_dev(t14, /*valueInvalid*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select0.$$.fragment, local);
			transition_in(select1.$$.fragment, local);
			transition_in(select2.$$.fragment, local);
			transition_in(select3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select0.$$.fragment, local);
			transition_out(select1.$$.fragment, local);
			transition_out(select2.$$.fragment, local);
			transition_out(select3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(select0);
			destroy_component(select1);
			destroy_component(select2);
			destroy_component(select3);
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
	validate_slots("Filled", slots, []);
	let fruits = ["Apple", "Orange", "Banana", "Mango"];
	let value = "";
	let valueHelperText = "";
	let valueLeadingIcon = "";
	let valueInvalid = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Filled> was created with unknown prop '${key}'`);
	});

	function select0_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	function select1_value_binding(value) {
		valueHelperText = value;
		$$invalidate(1, valueHelperText);
	}

	function select2_value_binding(value) {
		valueLeadingIcon = value;
		$$invalidate(2, valueLeadingIcon);
	}

	function select3_value_binding(value) {
		valueInvalid = value;
		$$invalidate(3, valueInvalid);
	}

	$$self.$capture_state = () => ({
		Select: Select$1,
		Option,
		Icon,
		fruits,
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid
	});

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(4, fruits = $$props.fruits);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("valueHelperText" in $$props) $$invalidate(1, valueHelperText = $$props.valueHelperText);
		if ("valueLeadingIcon" in $$props) $$invalidate(2, valueLeadingIcon = $$props.valueLeadingIcon);
		if ("valueInvalid" in $$props) $$invalidate(3, valueInvalid = $$props.valueInvalid);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid,
		fruits,
		select0_value_binding,
		select1_value_binding,
		select2_value_binding,
		select3_value_binding
	];
}

class Filled extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Filled",
			options,
			id: create_fragment$8.name
		});
	}
}

/* src/routes/demo/select/_Outlined.svelte generated by Svelte v3.37.0 */
const file$7 = "src/routes/demo/select/_Outlined.svelte";

function get_each_context$6(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_1$6(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_2$6(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_3$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (6:8) <Option value={fruit}>
function create_default_slot_8$4(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$4.name,
		type: "slot",
		source: "(6:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (5:6) {#each fruits as fruit}
function create_each_block_3$2(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_8$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3$2.name,
		type: "each",
		source: "(5:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (3:4) <Select variant="outlined" bind:value label="Fruit">
function create_default_slot_7$4(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_3 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_3);
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3$2(get_each_context_3$2(ctx, each_value_3, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_3 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_3);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3$2(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_3$2(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_3.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_3.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$4.name,
		type: "slot",
		source: "(3:4) <Select variant=\\\"outlined\\\" bind:value label=\\\"Fruit\\\">",
		ctx
	});

	return block;
}

// (21:8) <Option value={fruit}>
function create_default_slot_6$4(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$4.name,
		type: "slot",
		source: "(21:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (20:6) {#each fruits as fruit}
function create_each_block_2$6(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_6$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2$6.name,
		type: "each",
		source: "(20:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (14:4) <Select       variant="outlined"       bind:value={valueHelperText}       label="With Helper Text"     >
function create_default_slot_5$7(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_2 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$6(get_each_context_2$6(ctx, each_value_2, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_2 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2$6(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_2$6(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$7.name,
		type: "slot",
		source: "(14:4) <Select       variant=\\\"outlined\\\"       bind:value={valueHelperText}       label=\\\"With Helper Text\\\"     >",
		ctx
	});

	return block;
}

// (23:6) <svelte:fragment slot="helperText">
function create_helperText_slot$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper text.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper text.");
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
		id: create_helperText_slot$2.name,
		type: "slot",
		source: "(23:6) <svelte:fragment slot=\\\"helperText\\\">",
		ctx
	});

	return block;
}

// (38:8) <Option value={fruit}>
function create_default_slot_4$7(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$7.name,
		type: "slot",
		source: "(38:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (37:6) {#each fruits as fruit}
function create_each_block_1$6(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_4$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$6.name,
		type: "each",
		source: "(37:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (30:4) <Select       variant="outlined"       bind:value={valueLeadingIcon}       label="Leading Icon"     >
function create_default_slot_3$7(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_1 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$6(get_each_context_1$6(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_1 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$6(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1$6(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$7.name,
		type: "slot",
		source: "(30:4) <Select       variant=\\\"outlined\\\"       bind:value={valueLeadingIcon}       label=\\\"Leading Icon\\\"     >",
		ctx
	});

	return block;
}

// (35:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_2$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("event");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "event");
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
		source: "(35:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (35:6) 
function create_leadingIcon_slot$3(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_2$7] },
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

			if (dirty & /*$$scope*/ 262144) {
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
		id: create_leadingIcon_slot$3.name,
		type: "slot",
		source: "(35:6) ",
		ctx
	});

	return block;
}

// (54:8) <Option value={fruit}>
function create_default_slot_1$7(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$7.name,
		type: "slot",
		source: "(54:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (53:6) {#each fruits as fruit}
function create_each_block$6(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_1$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$6.name,
		type: "each",
		source: "(53:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (46:4) <Select       variant="outlined"       invalid       bind:value={valueInvalid}       label="Invalid"     >
function create_default_slot$7(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value = /*fruits*/ ctx[4];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$6(get_each_context$6(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value = /*fruits*/ ctx[4];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$6(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$6(child_ctx);
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
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$7.name,
		type: "slot",
		source: "(46:4) <Select       variant=\\\"outlined\\\"       invalid       bind:value={valueInvalid}       label=\\\"Invalid\\\"     >",
		ctx
	});

	return block;
}

function create_fragment$7(ctx) {
	let div4;
	let div0;
	let select0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let select1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let select2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let select3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function select0_value_binding(value) {
		/*select0_value_binding*/ ctx[5](value);
	}

	let select0_props = {
		variant: "outlined",
		label: "Fruit",
		$$slots: { default: [create_default_slot_7$4] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		select0_props.value = /*value*/ ctx[0];
	}

	select0 = new Select$1({ props: select0_props, $$inline: true });
	binding_callbacks.push(() => bind(select0, "value", select0_value_binding));

	function select1_value_binding(value) {
		/*select1_value_binding*/ ctx[6](value);
	}

	let select1_props = {
		variant: "outlined",
		label: "With Helper Text",
		$$slots: {
			helperText: [create_helperText_slot$2],
			default: [create_default_slot_5$7]
		},
		$$scope: { ctx }
	};

	if (/*valueHelperText*/ ctx[1] !== void 0) {
		select1_props.value = /*valueHelperText*/ ctx[1];
	}

	select1 = new Select$1({ props: select1_props, $$inline: true });
	binding_callbacks.push(() => bind(select1, "value", select1_value_binding));

	function select2_value_binding(value) {
		/*select2_value_binding*/ ctx[7](value);
	}

	let select2_props = {
		variant: "outlined",
		label: "Leading Icon",
		$$slots: {
			leadingIcon: [create_leadingIcon_slot$3],
			default: [create_default_slot_3$7]
		},
		$$scope: { ctx }
	};

	if (/*valueLeadingIcon*/ ctx[2] !== void 0) {
		select2_props.value = /*valueLeadingIcon*/ ctx[2];
	}

	select2 = new Select$1({ props: select2_props, $$inline: true });
	binding_callbacks.push(() => bind(select2, "value", select2_value_binding));

	function select3_value_binding(value) {
		/*select3_value_binding*/ ctx[8](value);
	}

	let select3_props = {
		variant: "outlined",
		invalid: true,
		label: "Invalid",
		$$slots: { default: [create_default_slot$7] },
		$$scope: { ctx }
	};

	if (/*valueInvalid*/ ctx[3] !== void 0) {
		select3_props.value = /*valueInvalid*/ ctx[3];
	}

	select3 = new Select$1({ props: select3_props, $$inline: true });
	binding_callbacks.push(() => bind(select3, "value", select3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(select0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Selected: ");
			t2 = text(/*value*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(select1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Selected: ");
			t6 = text(/*valueHelperText*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(select2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Selected: ");
			t10 = text(/*valueLeadingIcon*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(select3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Selected: ");
			t14 = text(/*valueInvalid*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(select0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Selected: ");
			t2 = claim_text(pre0_nodes, /*value*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(select1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Selected: ");
			t6 = claim_text(pre1_nodes, /*valueHelperText*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(select2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Selected: ");
			t10 = claim_text(pre2_nodes, /*valueLeadingIcon*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			claim_component(select3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Selected: ");
			t14 = claim_text(pre3_nodes, /*valueInvalid*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$7, 9, 4, 231);
			add_location(div0, file$7, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$7, 25, 4, 610);
			add_location(div1, file$7, 12, 2, 287);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$7, 41, 4, 991);
			add_location(div2, file$7, 28, 2, 676);
			attr_dev(pre3, "class", "status");
			add_location(pre3, file$7, 57, 4, 1311);
			add_location(div3, file$7, 44, 2, 1058);
			attr_dev(div4, "class", "columns margins");
			add_location(div4, file$7, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(select0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(select1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(select2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(select3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select0_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				select0_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select0.$set(select0_changes);
			if (!current || dirty & /*value*/ 1) set_data_dev(t2, /*value*/ ctx[0]);
			const select1_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueHelperText*/ 2) {
				updating_value_1 = true;
				select1_changes.value = /*valueHelperText*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			select1.$set(select1_changes);
			if (!current || dirty & /*valueHelperText*/ 2) set_data_dev(t6, /*valueHelperText*/ ctx[1]);
			const select2_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueLeadingIcon*/ 4) {
				updating_value_2 = true;
				select2_changes.value = /*valueLeadingIcon*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			select2.$set(select2_changes);
			if (!current || dirty & /*valueLeadingIcon*/ 4) set_data_dev(t10, /*valueLeadingIcon*/ ctx[2]);
			const select3_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueInvalid*/ 8) {
				updating_value_3 = true;
				select3_changes.value = /*valueInvalid*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			select3.$set(select3_changes);
			if (!current || dirty & /*valueInvalid*/ 8) set_data_dev(t14, /*valueInvalid*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select0.$$.fragment, local);
			transition_in(select1.$$.fragment, local);
			transition_in(select2.$$.fragment, local);
			transition_in(select3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select0.$$.fragment, local);
			transition_out(select1.$$.fragment, local);
			transition_out(select2.$$.fragment, local);
			transition_out(select3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(select0);
			destroy_component(select1);
			destroy_component(select2);
			destroy_component(select3);
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
	validate_slots("Outlined", slots, []);
	let fruits = ["Apple", "Orange", "Banana", "Mango"];
	let value = "";
	let valueHelperText = "";
	let valueLeadingIcon = "";
	let valueInvalid = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Outlined> was created with unknown prop '${key}'`);
	});

	function select0_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	function select1_value_binding(value) {
		valueHelperText = value;
		$$invalidate(1, valueHelperText);
	}

	function select2_value_binding(value) {
		valueLeadingIcon = value;
		$$invalidate(2, valueLeadingIcon);
	}

	function select3_value_binding(value) {
		valueInvalid = value;
		$$invalidate(3, valueInvalid);
	}

	$$self.$capture_state = () => ({
		Select: Select$1,
		Option,
		Icon,
		fruits,
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid
	});

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(4, fruits = $$props.fruits);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("valueHelperText" in $$props) $$invalidate(1, valueHelperText = $$props.valueHelperText);
		if ("valueLeadingIcon" in $$props) $$invalidate(2, valueLeadingIcon = $$props.valueLeadingIcon);
		if ("valueInvalid" in $$props) $$invalidate(3, valueInvalid = $$props.valueInvalid);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid,
		fruits,
		select0_value_binding,
		select1_value_binding,
		select2_value_binding,
		select3_value_binding
	];
}

class Outlined extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Outlined",
			options,
			id: create_fragment$7.name
		});
	}
}

/* src/routes/demo/select/_ShapedFilled.svelte generated by Svelte v3.37.0 */
const file$6 = "src/routes/demo/select/_ShapedFilled.svelte";

function get_each_context$5(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_1$5(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_2$5(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_3$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (6:8) <Option value={fruit}>
function create_default_slot_8$3(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$3.name,
		type: "slot",
		source: "(6:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (5:6) {#each fruits as fruit}
function create_each_block_3$1(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_8$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3$1.name,
		type: "each",
		source: "(5:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (3:4) <Select class="shaped-filled" variant="filled" bind:value label="Fruit">
function create_default_slot_7$3(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_3 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_3);
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3$1(get_each_context_3$1(ctx, each_value_3, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_3 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_3);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3$1(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_3$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_3.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_3.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$3.name,
		type: "slot",
		source: "(3:4) <Select class=\\\"shaped-filled\\\" variant=\\\"filled\\\" bind:value label=\\\"Fruit\\\">",
		ctx
	});

	return block;
}

// (22:8) <Option value={fruit}>
function create_default_slot_6$3(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$3.name,
		type: "slot",
		source: "(22:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (21:6) {#each fruits as fruit}
function create_each_block_2$5(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_6$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2$5.name,
		type: "each",
		source: "(21:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (14:4) <Select       class="shaped-filled"       variant="filled"       bind:value={valueHelperText}       label="With Helper Text"     >
function create_default_slot_5$6(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_2 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$5(get_each_context_2$5(ctx, each_value_2, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_2 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2$5(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_2$5(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$6.name,
		type: "slot",
		source: "(14:4) <Select       class=\\\"shaped-filled\\\"       variant=\\\"filled\\\"       bind:value={valueHelperText}       label=\\\"With Helper Text\\\"     >",
		ctx
	});

	return block;
}

// (24:6) <svelte:fragment slot="helperText">
function create_helperText_slot$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper text.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper text.");
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
		id: create_helperText_slot$1.name,
		type: "slot",
		source: "(24:6) <svelte:fragment slot=\\\"helperText\\\">",
		ctx
	});

	return block;
}

// (40:8) <Option value={fruit}>
function create_default_slot_4$6(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$6.name,
		type: "slot",
		source: "(40:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (39:6) {#each fruits as fruit}
function create_each_block_1$5(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_4$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$5.name,
		type: "each",
		source: "(39:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (31:4) <Select       class="shaped-filled"       variant="filled"       bind:value={valueLeadingIcon}       label="Leading Icon"     >
function create_default_slot_3$6(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_1 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$5(get_each_context_1$5(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_1 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$5(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1$5(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$6.name,
		type: "slot",
		source: "(31:4) <Select       class=\\\"shaped-filled\\\"       variant=\\\"filled\\\"       bind:value={valueLeadingIcon}       label=\\\"Leading Icon\\\"     >",
		ctx
	});

	return block;
}

// (37:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_2$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("event");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "event");
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
		id: create_default_slot_2$6.name,
		type: "slot",
		source: "(37:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (37:6) 
function create_leadingIcon_slot$2(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_2$6] },
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

			if (dirty & /*$$scope*/ 262144) {
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
		id: create_leadingIcon_slot$2.name,
		type: "slot",
		source: "(37:6) ",
		ctx
	});

	return block;
}

// (57:8) <Option value={fruit}>
function create_default_slot_1$6(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$6.name,
		type: "slot",
		source: "(57:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (56:6) {#each fruits as fruit}
function create_each_block$5(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_1$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$5.name,
		type: "each",
		source: "(56:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (48:4) <Select       class="shaped-filled"       variant="filled"       invalid       bind:value={valueInvalid}       label="Invalid"     >
function create_default_slot$6(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value = /*fruits*/ ctx[4];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$5(get_each_context$5(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value = /*fruits*/ ctx[4];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$5(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$5(child_ctx);
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
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$6.name,
		type: "slot",
		source: "(48:4) <Select       class=\\\"shaped-filled\\\"       variant=\\\"filled\\\"       invalid       bind:value={valueInvalid}       label=\\\"Invalid\\\"     >",
		ctx
	});

	return block;
}

function create_fragment$6(ctx) {
	let div4;
	let div0;
	let select0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let select1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let select2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let select3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function select0_value_binding(value) {
		/*select0_value_binding*/ ctx[5](value);
	}

	let select0_props = {
		class: "shaped-filled",
		variant: "filled",
		label: "Fruit",
		$$slots: { default: [create_default_slot_7$3] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		select0_props.value = /*value*/ ctx[0];
	}

	select0 = new Select$1({ props: select0_props, $$inline: true });
	binding_callbacks.push(() => bind(select0, "value", select0_value_binding));

	function select1_value_binding(value) {
		/*select1_value_binding*/ ctx[6](value);
	}

	let select1_props = {
		class: "shaped-filled",
		variant: "filled",
		label: "With Helper Text",
		$$slots: {
			helperText: [create_helperText_slot$1],
			default: [create_default_slot_5$6]
		},
		$$scope: { ctx }
	};

	if (/*valueHelperText*/ ctx[1] !== void 0) {
		select1_props.value = /*valueHelperText*/ ctx[1];
	}

	select1 = new Select$1({ props: select1_props, $$inline: true });
	binding_callbacks.push(() => bind(select1, "value", select1_value_binding));

	function select2_value_binding(value) {
		/*select2_value_binding*/ ctx[7](value);
	}

	let select2_props = {
		class: "shaped-filled",
		variant: "filled",
		label: "Leading Icon",
		$$slots: {
			leadingIcon: [create_leadingIcon_slot$2],
			default: [create_default_slot_3$6]
		},
		$$scope: { ctx }
	};

	if (/*valueLeadingIcon*/ ctx[2] !== void 0) {
		select2_props.value = /*valueLeadingIcon*/ ctx[2];
	}

	select2 = new Select$1({ props: select2_props, $$inline: true });
	binding_callbacks.push(() => bind(select2, "value", select2_value_binding));

	function select3_value_binding(value) {
		/*select3_value_binding*/ ctx[8](value);
	}

	let select3_props = {
		class: "shaped-filled",
		variant: "filled",
		invalid: true,
		label: "Invalid",
		$$slots: { default: [create_default_slot$6] },
		$$scope: { ctx }
	};

	if (/*valueInvalid*/ ctx[3] !== void 0) {
		select3_props.value = /*valueInvalid*/ ctx[3];
	}

	select3 = new Select$1({ props: select3_props, $$inline: true });
	binding_callbacks.push(() => bind(select3, "value", select3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(select0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Selected: ");
			t2 = text(/*value*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(select1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Selected: ");
			t6 = text(/*valueHelperText*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(select2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Selected: ");
			t10 = text(/*valueLeadingIcon*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(select3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Selected: ");
			t14 = text(/*valueInvalid*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(select0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Selected: ");
			t2 = claim_text(pre0_nodes, /*value*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(select1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Selected: ");
			t6 = claim_text(pre1_nodes, /*valueHelperText*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(select2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Selected: ");
			t10 = claim_text(pre2_nodes, /*valueLeadingIcon*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(select3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Selected: ");
			t14 = claim_text(pre3_nodes, /*valueInvalid*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status svelte-ucz7r7");
			add_location(pre0, file$6, 9, 4, 251);
			attr_dev(div0, "class", "svelte-ucz7r7");
			add_location(div0, file$6, 1, 2, 32);
			attr_dev(pre1, "class", "status svelte-ucz7r7");
			add_location(pre1, file$6, 26, 4, 656);
			attr_dev(div1, "class", "svelte-ucz7r7");
			add_location(div1, file$6, 12, 2, 307);
			attr_dev(pre2, "class", "status svelte-ucz7r7");
			add_location(pre2, file$6, 43, 4, 1063);
			attr_dev(div2, "class", "svelte-ucz7r7");
			add_location(div2, file$6, 29, 2, 722);
			attr_dev(pre3, "class", "status svelte-ucz7r7");
			add_location(pre3, file$6, 60, 4, 1409);
			attr_dev(div3, "class", "svelte-ucz7r7");
			add_location(div3, file$6, 46, 2, 1130);
			attr_dev(div4, "class", "columns margins svelte-ucz7r7");
			add_location(div4, file$6, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(select0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(select1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(select2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(select3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select0_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				select0_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select0.$set(select0_changes);
			if (!current || dirty & /*value*/ 1) set_data_dev(t2, /*value*/ ctx[0]);
			const select1_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueHelperText*/ 2) {
				updating_value_1 = true;
				select1_changes.value = /*valueHelperText*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			select1.$set(select1_changes);
			if (!current || dirty & /*valueHelperText*/ 2) set_data_dev(t6, /*valueHelperText*/ ctx[1]);
			const select2_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueLeadingIcon*/ 4) {
				updating_value_2 = true;
				select2_changes.value = /*valueLeadingIcon*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			select2.$set(select2_changes);
			if (!current || dirty & /*valueLeadingIcon*/ 4) set_data_dev(t10, /*valueLeadingIcon*/ ctx[2]);
			const select3_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueInvalid*/ 8) {
				updating_value_3 = true;
				select3_changes.value = /*valueInvalid*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			select3.$set(select3_changes);
			if (!current || dirty & /*valueInvalid*/ 8) set_data_dev(t14, /*valueInvalid*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select0.$$.fragment, local);
			transition_in(select1.$$.fragment, local);
			transition_in(select2.$$.fragment, local);
			transition_in(select3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select0.$$.fragment, local);
			transition_out(select1.$$.fragment, local);
			transition_out(select2.$$.fragment, local);
			transition_out(select3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(select0);
			destroy_component(select1);
			destroy_component(select2);
			destroy_component(select3);
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
	validate_slots("ShapedFilled", slots, []);
	let fruits = ["Apple", "Orange", "Banana", "Mango"];
	let value = "";
	let valueHelperText = "";
	let valueLeadingIcon = "";
	let valueInvalid = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ShapedFilled> was created with unknown prop '${key}'`);
	});

	function select0_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	function select1_value_binding(value) {
		valueHelperText = value;
		$$invalidate(1, valueHelperText);
	}

	function select2_value_binding(value) {
		valueLeadingIcon = value;
		$$invalidate(2, valueLeadingIcon);
	}

	function select3_value_binding(value) {
		valueInvalid = value;
		$$invalidate(3, valueInvalid);
	}

	$$self.$capture_state = () => ({
		Select: Select$1,
		Option,
		Icon,
		fruits,
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid
	});

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(4, fruits = $$props.fruits);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("valueHelperText" in $$props) $$invalidate(1, valueHelperText = $$props.valueHelperText);
		if ("valueLeadingIcon" in $$props) $$invalidate(2, valueLeadingIcon = $$props.valueLeadingIcon);
		if ("valueInvalid" in $$props) $$invalidate(3, valueInvalid = $$props.valueInvalid);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid,
		fruits,
		select0_value_binding,
		select1_value_binding,
		select2_value_binding,
		select3_value_binding
	];
}

class ShapedFilled extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ShapedFilled",
			options,
			id: create_fragment$6.name
		});
	}
}

/* src/routes/demo/select/_ShapedOutlined.svelte generated by Svelte v3.37.0 */
const file$5 = "src/routes/demo/select/_ShapedOutlined.svelte";

function get_each_context$4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_1$4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_2$4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (6:8) <Option value={fruit}>
function create_default_slot_8$2(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$2.name,
		type: "slot",
		source: "(6:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (5:6) {#each fruits as fruit}
function create_each_block_3(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_8$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3.name,
		type: "each",
		source: "(5:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (3:4) <Select class="shaped-outlined" variant="outlined" bind:value label="Fruit">
function create_default_slot_7$2(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_3 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_3);
	let each_blocks = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_3 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_3);
				let i;

				for (i = 0; i < each_value_3.length; i += 1) {
					const child_ctx = get_each_context_3(ctx, each_value_3, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_3(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_3.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_3.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7$2.name,
		type: "slot",
		source: "(3:4) <Select class=\\\"shaped-outlined\\\" variant=\\\"outlined\\\" bind:value label=\\\"Fruit\\\">",
		ctx
	});

	return block;
}

// (22:8) <Option value={fruit}>
function create_default_slot_6$2(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$2.name,
		type: "slot",
		source: "(22:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (21:6) {#each fruits as fruit}
function create_each_block_2$4(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_6$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2$4.name,
		type: "each",
		source: "(21:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (14:4) <Select       class="shaped-outlined"       variant="outlined"       bind:value={valueHelperText}       label="With Helper Text"     >
function create_default_slot_5$5(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_2 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$4(get_each_context_2$4(ctx, each_value_2, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_2 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2$4(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_2$4(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$5.name,
		type: "slot",
		source: "(14:4) <Select       class=\\\"shaped-outlined\\\"       variant=\\\"outlined\\\"       bind:value={valueHelperText}       label=\\\"With Helper Text\\\"     >",
		ctx
	});

	return block;
}

// (24:6) <svelte:fragment slot="helperText">
function create_helperText_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper text.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper text.");
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
		id: create_helperText_slot.name,
		type: "slot",
		source: "(24:6) <svelte:fragment slot=\\\"helperText\\\">",
		ctx
	});

	return block;
}

// (40:8) <Option value={fruit}>
function create_default_slot_4$5(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$5.name,
		type: "slot",
		source: "(40:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (39:6) {#each fruits as fruit}
function create_each_block_1$4(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_4$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$4.name,
		type: "each",
		source: "(39:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (31:4) <Select       class="shaped-outlined"       variant="outlined"       bind:value={valueLeadingIcon}       label="Leading Icon"     >
function create_default_slot_3$5(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_1 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$4(get_each_context_1$4(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_1 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$4(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1$4(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$5.name,
		type: "slot",
		source: "(31:4) <Select       class=\\\"shaped-outlined\\\"       variant=\\\"outlined\\\"       bind:value={valueLeadingIcon}       label=\\\"Leading Icon\\\"     >",
		ctx
	});

	return block;
}

// (37:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_2$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("event");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "event");
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
		id: create_default_slot_2$5.name,
		type: "slot",
		source: "(37:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (37:6) 
function create_leadingIcon_slot$1(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_2$5] },
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

			if (dirty & /*$$scope*/ 262144) {
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
		id: create_leadingIcon_slot$1.name,
		type: "slot",
		source: "(37:6) ",
		ctx
	});

	return block;
}

// (57:8) <Option value={fruit}>
function create_default_slot_1$5(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$5.name,
		type: "slot",
		source: "(57:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (56:6) {#each fruits as fruit}
function create_each_block$4(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_1$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$4.name,
		type: "each",
		source: "(56:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (48:4) <Select       class="shaped-outlined"       variant="outlined"       invalid       bind:value={valueInvalid}       label="Invalid"     >
function create_default_slot$5(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value = /*fruits*/ ctx[4];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value = /*fruits*/ ctx[4];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$4(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$4(child_ctx);
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
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$5.name,
		type: "slot",
		source: "(48:4) <Select       class=\\\"shaped-outlined\\\"       variant=\\\"outlined\\\"       invalid       bind:value={valueInvalid}       label=\\\"Invalid\\\"     >",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let div4;
	let div0;
	let select0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let select1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let select2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let select3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function select0_value_binding(value) {
		/*select0_value_binding*/ ctx[5](value);
	}

	let select0_props = {
		class: "shaped-outlined",
		variant: "outlined",
		label: "Fruit",
		$$slots: { default: [create_default_slot_7$2] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		select0_props.value = /*value*/ ctx[0];
	}

	select0 = new Select$1({ props: select0_props, $$inline: true });
	binding_callbacks.push(() => bind(select0, "value", select0_value_binding));

	function select1_value_binding(value) {
		/*select1_value_binding*/ ctx[6](value);
	}

	let select1_props = {
		class: "shaped-outlined",
		variant: "outlined",
		label: "With Helper Text",
		$$slots: {
			helperText: [create_helperText_slot],
			default: [create_default_slot_5$5]
		},
		$$scope: { ctx }
	};

	if (/*valueHelperText*/ ctx[1] !== void 0) {
		select1_props.value = /*valueHelperText*/ ctx[1];
	}

	select1 = new Select$1({ props: select1_props, $$inline: true });
	binding_callbacks.push(() => bind(select1, "value", select1_value_binding));

	function select2_value_binding(value) {
		/*select2_value_binding*/ ctx[7](value);
	}

	let select2_props = {
		class: "shaped-outlined",
		variant: "outlined",
		label: "Leading Icon",
		$$slots: {
			leadingIcon: [create_leadingIcon_slot$1],
			default: [create_default_slot_3$5]
		},
		$$scope: { ctx }
	};

	if (/*valueLeadingIcon*/ ctx[2] !== void 0) {
		select2_props.value = /*valueLeadingIcon*/ ctx[2];
	}

	select2 = new Select$1({ props: select2_props, $$inline: true });
	binding_callbacks.push(() => bind(select2, "value", select2_value_binding));

	function select3_value_binding(value) {
		/*select3_value_binding*/ ctx[8](value);
	}

	let select3_props = {
		class: "shaped-outlined",
		variant: "outlined",
		invalid: true,
		label: "Invalid",
		$$slots: { default: [create_default_slot$5] },
		$$scope: { ctx }
	};

	if (/*valueInvalid*/ ctx[3] !== void 0) {
		select3_props.value = /*valueInvalid*/ ctx[3];
	}

	select3 = new Select$1({ props: select3_props, $$inline: true });
	binding_callbacks.push(() => bind(select3, "value", select3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(select0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Selected: ");
			t2 = text(/*value*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(select1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Selected: ");
			t6 = text(/*valueHelperText*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(select2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Selected: ");
			t10 = text(/*valueLeadingIcon*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(select3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Selected: ");
			t14 = text(/*valueInvalid*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(select0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Selected: ");
			t2 = claim_text(pre0_nodes, /*value*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(select1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Selected: ");
			t6 = claim_text(pre1_nodes, /*valueHelperText*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(select2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Selected: ");
			t10 = claim_text(pre2_nodes, /*valueLeadingIcon*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(select3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Selected: ");
			t14 = claim_text(pre3_nodes, /*valueInvalid*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status svelte-njf658");
			add_location(pre0, file$5, 9, 4, 255);
			attr_dev(div0, "class", "svelte-njf658");
			add_location(div0, file$5, 1, 2, 32);
			attr_dev(pre1, "class", "status svelte-njf658");
			add_location(pre1, file$5, 26, 4, 664);
			attr_dev(div1, "class", "svelte-njf658");
			add_location(div1, file$5, 12, 2, 311);
			attr_dev(pre2, "class", "status svelte-njf658");
			add_location(pre2, file$5, 43, 4, 1075);
			attr_dev(div2, "class", "svelte-njf658");
			add_location(div2, file$5, 29, 2, 730);
			attr_dev(pre3, "class", "status svelte-njf658");
			add_location(pre3, file$5, 60, 4, 1425);
			attr_dev(div3, "class", "svelte-njf658");
			add_location(div3, file$5, 46, 2, 1142);
			attr_dev(div4, "class", "columns margins svelte-njf658");
			add_location(div4, file$5, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(select0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(select1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(select2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(select3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select0_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				select0_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select0.$set(select0_changes);
			if (!current || dirty & /*value*/ 1) set_data_dev(t2, /*value*/ ctx[0]);
			const select1_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueHelperText*/ 2) {
				updating_value_1 = true;
				select1_changes.value = /*valueHelperText*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			select1.$set(select1_changes);
			if (!current || dirty & /*valueHelperText*/ 2) set_data_dev(t6, /*valueHelperText*/ ctx[1]);
			const select2_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueLeadingIcon*/ 4) {
				updating_value_2 = true;
				select2_changes.value = /*valueLeadingIcon*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			select2.$set(select2_changes);
			if (!current || dirty & /*valueLeadingIcon*/ 4) set_data_dev(t10, /*valueLeadingIcon*/ ctx[2]);
			const select3_changes = {};

			if (dirty & /*$$scope*/ 262144) {
				select3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueInvalid*/ 8) {
				updating_value_3 = true;
				select3_changes.value = /*valueInvalid*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			select3.$set(select3_changes);
			if (!current || dirty & /*valueInvalid*/ 8) set_data_dev(t14, /*valueInvalid*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select0.$$.fragment, local);
			transition_in(select1.$$.fragment, local);
			transition_in(select2.$$.fragment, local);
			transition_in(select3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select0.$$.fragment, local);
			transition_out(select1.$$.fragment, local);
			transition_out(select2.$$.fragment, local);
			transition_out(select3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(select0);
			destroy_component(select1);
			destroy_component(select2);
			destroy_component(select3);
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
	validate_slots("ShapedOutlined", slots, []);
	let fruits = ["Apple", "Orange", "Banana", "Mango"];
	let value = "";
	let valueHelperText = "";
	let valueLeadingIcon = "";
	let valueInvalid = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ShapedOutlined> was created with unknown prop '${key}'`);
	});

	function select0_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	function select1_value_binding(value) {
		valueHelperText = value;
		$$invalidate(1, valueHelperText);
	}

	function select2_value_binding(value) {
		valueLeadingIcon = value;
		$$invalidate(2, valueLeadingIcon);
	}

	function select3_value_binding(value) {
		valueInvalid = value;
		$$invalidate(3, valueInvalid);
	}

	$$self.$capture_state = () => ({
		Select: Select$1,
		Option,
		Icon,
		fruits,
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid
	});

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(4, fruits = $$props.fruits);
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
		if ("valueHelperText" in $$props) $$invalidate(1, valueHelperText = $$props.valueHelperText);
		if ("valueLeadingIcon" in $$props) $$invalidate(2, valueLeadingIcon = $$props.valueLeadingIcon);
		if ("valueInvalid" in $$props) $$invalidate(3, valueInvalid = $$props.valueInvalid);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		value,
		valueHelperText,
		valueLeadingIcon,
		valueInvalid,
		fruits,
		select0_value_binding,
		select1_value_binding,
		select2_value_binding,
		select3_value_binding
	];
}

class ShapedOutlined extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ShapedOutlined",
			options,
			id: create_fragment$5.name
		});
	}
}

/* src/routes/demo/select/_Required.svelte generated by Svelte v3.37.0 */
const file$4 = "src/routes/demo/select/_Required.svelte";

function get_each_context$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

function get_each_context_1$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

function get_each_context_2$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (6:8) <Option value={fruit}>
function create_default_slot_5$4(ctx) {
	let t_value = /*fruit*/ ctx[7] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$4.name,
		type: "slot",
		source: "(6:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (5:6) {#each fruits as fruit}
function create_each_block_2$3(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[7],
				$$slots: { default: [create_default_slot_5$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2$3.name,
		type: "each",
		source: "(5:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (3:4) <Select bind:value={valueA} label="Standard" required>
function create_default_slot_4$4(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_2 = /*fruits*/ ctx[3];
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$3(get_each_context_2$3(ctx, each_value_2, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 8) {
				each_value_2 = /*fruits*/ ctx[3];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2$3(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_2$3(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$4.name,
		type: "slot",
		source: "(3:4) <Select bind:value={valueA} label=\\\"Standard\\\" required>",
		ctx
	});

	return block;
}

// (17:8) <Option value={fruit}>
function create_default_slot_3$4(ctx) {
	let t_value = /*fruit*/ ctx[7] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$4.name,
		type: "slot",
		source: "(17:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (16:6) {#each fruits as fruit}
function create_each_block_1$3(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[7],
				$$slots: { default: [create_default_slot_3$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$3.name,
		type: "each",
		source: "(16:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (14:4) <Select variant="filled" bind:value={valueB} label="Filled" required>
function create_default_slot_2$4(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_1 = /*fruits*/ ctx[3];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$3(get_each_context_1$3(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 8) {
				each_value_1 = /*fruits*/ ctx[3];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$3(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1$3(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$4.name,
		type: "slot",
		source: "(14:4) <Select variant=\\\"filled\\\" bind:value={valueB} label=\\\"Filled\\\" required>",
		ctx
	});

	return block;
}

// (28:8) <Option value={fruit}>
function create_default_slot_1$4(ctx) {
	let t_value = /*fruit*/ ctx[7] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$4.name,
		type: "slot",
		source: "(28:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (27:6) {#each fruits as fruit}
function create_each_block$3(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[7],
				$$slots: { default: [create_default_slot_1$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$3.name,
		type: "each",
		source: "(27:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (25:4) <Select variant="outlined" bind:value={valueC} label="Outlined" required>
function create_default_slot$4(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value = /*fruits*/ ctx[3];
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
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 8) {
				each_value = /*fruits*/ ctx[3];
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
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$4.name,
		type: "slot",
		source: "(25:4) <Select variant=\\\"outlined\\\" bind:value={valueC} label=\\\"Outlined\\\" required>",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let div3;
	let div0;
	let select0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let select1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let select2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function select0_value_binding(value) {
		/*select0_value_binding*/ ctx[4](value);
	}

	let select0_props = {
		label: "Standard",
		required: true,
		$$slots: { default: [create_default_slot_4$4] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		select0_props.value = /*valueA*/ ctx[0];
	}

	select0 = new Select$1({ props: select0_props, $$inline: true });
	binding_callbacks.push(() => bind(select0, "value", select0_value_binding));

	function select1_value_binding(value) {
		/*select1_value_binding*/ ctx[5](value);
	}

	let select1_props = {
		variant: "filled",
		label: "Filled",
		required: true,
		$$slots: { default: [create_default_slot_2$4] },
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		select1_props.value = /*valueB*/ ctx[1];
	}

	select1 = new Select$1({ props: select1_props, $$inline: true });
	binding_callbacks.push(() => bind(select1, "value", select1_value_binding));

	function select2_value_binding(value) {
		/*select2_value_binding*/ ctx[6](value);
	}

	let select2_props = {
		variant: "outlined",
		label: "Outlined",
		required: true,
		$$slots: { default: [create_default_slot$4] },
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		select2_props.value = /*valueC*/ ctx[2];
	}

	select2 = new Select$1({ props: select2_props, $$inline: true });
	binding_callbacks.push(() => bind(select2, "value", select2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(select0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Selected: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(select1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Selected: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(select2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Selected: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(select0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Selected: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(select1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Selected: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(select2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Selected: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$4, 9, 4, 233);
			add_location(div0, file$4, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$4, 20, 4, 506);
			add_location(div1, file$4, 12, 2, 290);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$4, 31, 4, 783);
			add_location(div2, file$4, 23, 2, 563);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$4, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(select0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(select1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(select2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select0_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				select0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				select0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select0.$set(select0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const select1_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				select1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				select1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			select1.$set(select1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const select2_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				select2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				select2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			select2.$set(select2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select0.$$.fragment, local);
			transition_in(select1.$$.fragment, local);
			transition_in(select2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select0.$$.fragment, local);
			transition_out(select1.$$.fragment, local);
			transition_out(select2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(select0);
			destroy_component(select1);
			destroy_component(select2);
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
	validate_slots("Required", slots, []);
	let fruits = ["Apple", "Orange", "Banana", "Mango"];
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Required> was created with unknown prop '${key}'`);
	});

	function select0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function select1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function select2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({
		Select: Select$1,
		Option,
		fruits,
		valueA,
		valueB,
		valueC
	});

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(3, fruits = $$props.fruits);
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		fruits,
		select0_value_binding,
		select1_value_binding,
		select2_value_binding
	];
}

class Required extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Required",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src/routes/demo/select/_Disabled.svelte generated by Svelte v3.37.0 */
const file$3 = "src/routes/demo/select/_Disabled.svelte";

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

function get_each_context_1$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

function get_each_context_2$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (6:8) <Option value={fruit}>
function create_default_slot_5$3(ctx) {
	let t_value = /*fruit*/ ctx[7] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$3.name,
		type: "slot",
		source: "(6:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (5:6) {#each fruits as fruit}
function create_each_block_2$2(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[7],
				$$slots: { default: [create_default_slot_5$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2$2.name,
		type: "each",
		source: "(5:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (3:4) <Select bind:value={valueA} label="Standard" disabled>
function create_default_slot_4$3(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_2 = /*fruits*/ ctx[3];
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$2(get_each_context_2$2(ctx, each_value_2, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 8) {
				each_value_2 = /*fruits*/ ctx[3];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2$2(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_2$2(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$3.name,
		type: "slot",
		source: "(3:4) <Select bind:value={valueA} label=\\\"Standard\\\" disabled>",
		ctx
	});

	return block;
}

// (17:8) <Option value={fruit}>
function create_default_slot_3$3(ctx) {
	let t_value = /*fruit*/ ctx[7] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$3.name,
		type: "slot",
		source: "(17:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (16:6) {#each fruits as fruit}
function create_each_block_1$2(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[7],
				$$slots: { default: [create_default_slot_3$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$2.name,
		type: "each",
		source: "(16:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (14:4) <Select variant="filled" bind:value={valueB} label="Filled" disabled>
function create_default_slot_2$3(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_1 = /*fruits*/ ctx[3];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$2(get_each_context_1$2(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 8) {
				each_value_1 = /*fruits*/ ctx[3];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$2(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1$2(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(14:4) <Select variant=\\\"filled\\\" bind:value={valueB} label=\\\"Filled\\\" disabled>",
		ctx
	});

	return block;
}

// (28:8) <Option value={fruit}>
function create_default_slot_1$3(ctx) {
	let t_value = /*fruit*/ ctx[7] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$3.name,
		type: "slot",
		source: "(28:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (27:6) {#each fruits as fruit}
function create_each_block$2(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[7],
				$$slots: { default: [create_default_slot_1$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$2.name,
		type: "each",
		source: "(27:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (25:4) <Select variant="outlined" bind:value={valueC} label="Outlined" disabled>
function create_default_slot$3(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value = /*fruits*/ ctx[3];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 8) {
				each_value = /*fruits*/ ctx[3];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$2(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$2(child_ctx);
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
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$3.name,
		type: "slot",
		source: "(25:4) <Select variant=\\\"outlined\\\" bind:value={valueC} label=\\\"Outlined\\\" disabled>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let div3;
	let div0;
	let select0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let select1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let select2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function select0_value_binding(value) {
		/*select0_value_binding*/ ctx[4](value);
	}

	let select0_props = {
		label: "Standard",
		disabled: true,
		$$slots: { default: [create_default_slot_4$3] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		select0_props.value = /*valueA*/ ctx[0];
	}

	select0 = new Select$1({ props: select0_props, $$inline: true });
	binding_callbacks.push(() => bind(select0, "value", select0_value_binding));

	function select1_value_binding(value) {
		/*select1_value_binding*/ ctx[5](value);
	}

	let select1_props = {
		variant: "filled",
		label: "Filled",
		disabled: true,
		$$slots: { default: [create_default_slot_2$3] },
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		select1_props.value = /*valueB*/ ctx[1];
	}

	select1 = new Select$1({ props: select1_props, $$inline: true });
	binding_callbacks.push(() => bind(select1, "value", select1_value_binding));

	function select2_value_binding(value) {
		/*select2_value_binding*/ ctx[6](value);
	}

	let select2_props = {
		variant: "outlined",
		label: "Outlined",
		disabled: true,
		$$slots: { default: [create_default_slot$3] },
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		select2_props.value = /*valueC*/ ctx[2];
	}

	select2 = new Select$1({ props: select2_props, $$inline: true });
	binding_callbacks.push(() => bind(select2, "value", select2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(select0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Selected: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(select1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Selected: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(select2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Selected: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(select0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Selected: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(select1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Selected: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(select2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Selected: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$3, 9, 4, 233);
			add_location(div0, file$3, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$3, 20, 4, 506);
			add_location(div1, file$3, 12, 2, 290);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$3, 31, 4, 783);
			add_location(div2, file$3, 23, 2, 563);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(select0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(select1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(select2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select0_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				select0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				select0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select0.$set(select0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const select1_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				select1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				select1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			select1.$set(select1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const select2_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				select2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				select2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			select2.$set(select2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select0.$$.fragment, local);
			transition_in(select1.$$.fragment, local);
			transition_in(select2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select0.$$.fragment, local);
			transition_out(select1.$$.fragment, local);
			transition_out(select2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(select0);
			destroy_component(select1);
			destroy_component(select2);
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
	validate_slots("Disabled", slots, []);
	let fruits = ["Apple", "Orange", "Banana", "Mango"];
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Disabled> was created with unknown prop '${key}'`);
	});

	function select0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function select1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function select2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({
		Select: Select$1,
		Option,
		fruits,
		valueA,
		valueB,
		valueC
	});

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(3, fruits = $$props.fruits);
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		fruits,
		select0_value_binding,
		select1_value_binding,
		select2_value_binding
	];
}

class Disabled extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Disabled",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/select/_ConditionalIcon.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/select/_ConditionalIcon.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_1$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

function get_each_context_2$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (22:8) <Option value={fruit}>
function create_default_slot_9(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_9.name,
		type: "slot",
		source: "(22:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (21:6) {#each fruits as fruit}
function create_each_block_2$1(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2$1.name,
		type: "each",
		source: "(21:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (10:4) <Select       withLeadingIcon={showLeadingIcons}       bind:value={valueA}       label="Standard"     >
function create_default_slot_8$1(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_2 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_2);
	let each_blocks = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks[i] = create_each_block_2$1(get_each_context_2$1(ctx, each_value_2, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_2 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_2);
				let i;

				for (i = 0; i < each_value_2.length; i += 1) {
					const child_ctx = get_each_context_2$1(ctx, each_value_2, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_2$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_2.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$1.name,
		type: "slot",
		source: "(10:4) <Select       withLeadingIcon={showLeadingIcons}       bind:value={valueA}       label=\\\"Standard\\\"     >",
		ctx
	});

	return block;
}

// (16:8) {#if showLeadingIcons}
function create_if_block_2(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_7$1] },
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
		id: create_if_block_2.name,
		type: "if",
		source: "(16:8) {#if showLeadingIcons}",
		ctx
	});

	return block;
}

// (17:10) <Icon class="material-icons">
function create_default_slot_7$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("event");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "event");
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
		source: "(17:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (15:6) <svelte:fragment slot="leadingIcon">
function create_leadingIcon_slot_2(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*showLeadingIcons*/ ctx[3] && create_if_block_2(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*showLeadingIcons*/ ctx[3]) {
				if (if_block) {
					if (dirty & /*showLeadingIcons*/ 8) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_leadingIcon_slot_2.name,
		type: "slot",
		source: "(15:6) <svelte:fragment slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (43:8) <Option value={fruit}>
function create_default_slot_6$1(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$1.name,
		type: "slot",
		source: "(43:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (42:6) {#each fruits as fruit}
function create_each_block_1$1(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_6$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$1.name,
		type: "each",
		source: "(42:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (30:4) <Select       withLeadingIcon={showLeadingIcons}       variant="filled"       bind:value={valueB}       label="Filled"     >
function create_default_slot_5$2(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value_1 = /*fruits*/ ctx[4];
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value_1 = /*fruits*/ ctx[4];
				validate_each_argument(each_value_1);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1$1(ctx, each_value_1, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block_1$1(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$2.name,
		type: "slot",
		source: "(30:4) <Select       withLeadingIcon={showLeadingIcons}       variant=\\\"filled\\\"       bind:value={valueB}       label=\\\"Filled\\\"     >",
		ctx
	});

	return block;
}

// (37:8) {#if showLeadingIcons}
function create_if_block_1(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_4$2] },
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
		id: create_if_block_1.name,
		type: "if",
		source: "(37:8) {#if showLeadingIcons}",
		ctx
	});

	return block;
}

// (38:10) <Icon class="material-icons">
function create_default_slot_4$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("event");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "event");
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
		source: "(38:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (36:6) <svelte:fragment slot="leadingIcon">
function create_leadingIcon_slot_1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*showLeadingIcons*/ ctx[3] && create_if_block_1(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*showLeadingIcons*/ ctx[3]) {
				if (if_block) {
					if (dirty & /*showLeadingIcons*/ 8) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_leadingIcon_slot_1.name,
		type: "slot",
		source: "(36:6) <svelte:fragment slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (64:8) <Option value={fruit}>
function create_default_slot_3$2(ctx) {
	let t_value = /*fruit*/ ctx[9] + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$2.name,
		type: "slot",
		source: "(64:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (63:6) {#each fruits as fruit}
function create_each_block$1(ctx) {
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[9],
				$$slots: { default: [create_default_slot_3$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const option_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(63:6) {#each fruits as fruit}",
		ctx
	});

	return block;
}

// (51:4) <Select       withLeadingIcon={showLeadingIcons}       variant="outlined"       bind:value={valueC}       label="Outlined"     >
function create_default_slot_2$2(ctx) {
	let option;
	let t;
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: "" }, $$inline: true });
	let each_value = /*fruits*/ ctx[4];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 16) {
				each_value = /*fruits*/ ctx[4];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
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
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(51:4) <Select       withLeadingIcon={showLeadingIcons}       variant=\\\"outlined\\\"       bind:value={valueC}       label=\\\"Outlined\\\"     >",
		ctx
	});

	return block;
}

// (58:8) {#if showLeadingIcons}
function create_if_block(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_1$2] },
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
		id: create_if_block.name,
		type: "if",
		source: "(58:8) {#if showLeadingIcons}",
		ctx
	});

	return block;
}

// (59:10) <Icon class="material-icons">
function create_default_slot_1$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("event");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "event");
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
		source: "(59:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (57:6) <svelte:fragment slot="leadingIcon">
function create_leadingIcon_slot(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*showLeadingIcons*/ ctx[3] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (/*showLeadingIcons*/ ctx[3]) {
				if (if_block) {
					if (dirty & /*showLeadingIcons*/ 8) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
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
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_leadingIcon_slot.name,
		type: "slot",
		source: "(57:6) <svelte:fragment slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (73:2) <Button on:click={() => (showLeadingIcons = !showLeadingIcons)}>
function create_default_slot$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Toggle Leading Icons");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Toggle Leading Icons");
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
		source: "(73:2) <Button on:click={() => (showLeadingIcons = !showLeadingIcons)}>",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div3;
	let div0;
	let select0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let select1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let select2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div4;
	let button;
	let current;

	function select0_value_binding(value) {
		/*select0_value_binding*/ ctx[5](value);
	}

	let select0_props = {
		withLeadingIcon: /*showLeadingIcons*/ ctx[3],
		label: "Standard",
		$$slots: {
			leadingIcon: [create_leadingIcon_slot_2],
			default: [create_default_slot_8$1]
		},
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		select0_props.value = /*valueA*/ ctx[0];
	}

	select0 = new Select$1({ props: select0_props, $$inline: true });
	binding_callbacks.push(() => bind(select0, "value", select0_value_binding));

	function select1_value_binding(value) {
		/*select1_value_binding*/ ctx[6](value);
	}

	let select1_props = {
		withLeadingIcon: /*showLeadingIcons*/ ctx[3],
		variant: "filled",
		label: "Filled",
		$$slots: {
			leadingIcon: [create_leadingIcon_slot_1],
			default: [create_default_slot_5$2]
		},
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		select1_props.value = /*valueB*/ ctx[1];
	}

	select1 = new Select$1({ props: select1_props, $$inline: true });
	binding_callbacks.push(() => bind(select1, "value", select1_value_binding));

	function select2_value_binding(value) {
		/*select2_value_binding*/ ctx[7](value);
	}

	let select2_props = {
		withLeadingIcon: /*showLeadingIcons*/ ctx[3],
		variant: "outlined",
		label: "Outlined",
		$$slots: {
			leadingIcon: [create_leadingIcon_slot],
			default: [create_default_slot_2$2]
		},
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		select2_props.value = /*valueC*/ ctx[2];
	}

	select2 = new Select$1({ props: select2_props, $$inline: true });
	binding_callbacks.push(() => bind(select2, "value", select2_value_binding));

	button = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[8]);

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(select0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Selected: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(select1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Selected: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(select2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Selected: ");
			t10 = text(/*valueC*/ ctx[2]);
			t11 = space();
			div4 = element("div");
			create_component(button.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(select0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Selected: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(select1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Selected: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(select2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Selected: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", {});
			var div4_nodes = children(div4);
			claim_component(button.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$2, 25, 4, 676);
			add_location(div0, file$2, 8, 2, 261);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$2, 46, 4, 1169);
			add_location(div1, file$2, 28, 2, 733);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$2, 67, 4, 1666);
			add_location(div2, file$2, 49, 2, 1226);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$2, 7, 0, 229);
			add_location(div4, file$2, 71, 0, 1728);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(select0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(select1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(select2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, div4, anchor);
			mount_component(button, div4, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select0_changes = {};
			if (dirty & /*showLeadingIcons*/ 8) select0_changes.withLeadingIcon = /*showLeadingIcons*/ ctx[3];

			if (dirty & /*$$scope, showLeadingIcons*/ 65544) {
				select0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				select0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select0.$set(select0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const select1_changes = {};
			if (dirty & /*showLeadingIcons*/ 8) select1_changes.withLeadingIcon = /*showLeadingIcons*/ ctx[3];

			if (dirty & /*$$scope, showLeadingIcons*/ 65544) {
				select1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				select1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			select1.$set(select1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const select2_changes = {};
			if (dirty & /*showLeadingIcons*/ 8) select2_changes.withLeadingIcon = /*showLeadingIcons*/ ctx[3];

			if (dirty & /*$$scope, showLeadingIcons*/ 65544) {
				select2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				select2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			select2.$set(select2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
			const button_changes = {};

			if (dirty & /*$$scope*/ 65536) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select0.$$.fragment, local);
			transition_in(select1.$$.fragment, local);
			transition_in(select2.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select0.$$.fragment, local);
			transition_out(select1.$$.fragment, local);
			transition_out(select2.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(select0);
			destroy_component(select1);
			destroy_component(select2);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(div4);
			destroy_component(button);
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
	validate_slots("ConditionalIcon", slots, []);
	let fruits = ["Apple", "Orange", "Banana", "Mango"];
	let valueA = "";
	let valueB = "";
	let valueC = "";
	let showLeadingIcons = true;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ConditionalIcon> was created with unknown prop '${key}'`);
	});

	function select0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function select1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function select2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	const click_handler = () => $$invalidate(3, showLeadingIcons = !showLeadingIcons);

	$$self.$capture_state = () => ({
		Select: Select$1,
		Option,
		Icon,
		Button: Button_1,
		fruits,
		valueA,
		valueB,
		valueC,
		showLeadingIcons
	});

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(4, fruits = $$props.fruits);
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
		if ("showLeadingIcons" in $$props) $$invalidate(3, showLeadingIcons = $$props.showLeadingIcons);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		showLeadingIcons,
		fruits,
		select0_value_binding,
		select1_value_binding,
		select2_value_binding,
		click_handler
	];
}

class ConditionalIcon extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ConditionalIcon",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/select/_Objects.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/select/_Objects.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[7] = list[i];
	return child_ctx;
}

// (15:8) <Option value={fruit}>
function create_default_slot_5$1(ctx) {
	let t_value = /*fruit*/ ctx[7].label + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5$1.name,
		type: "slot",
		source: "(15:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (14:6) {#each fruits as fruit (fruit.label)}
function create_each_block_2(key_1, ctx) {
	let first;
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[7],
				$$slots: { default: [create_default_slot_5$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = empty();
			create_component(option.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			claim_component(option.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const option_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2.name,
		type: "each",
		source: "(14:6) {#each fruits as fruit (fruit.label)}",
		ctx
	});

	return block;
}

// (8:4) <Select       key={(fruit) => (fruit && fruit.label) || ''}       bind:value={valueA}       label="Standard"     >
function create_default_slot_4$1(ctx) {
	let option;
	let t;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: null }, $$inline: true });
	let each_value_2 = /*fruits*/ ctx[3];
	validate_each_argument(each_value_2);
	const get_key = ctx => /*fruit*/ ctx[7].label;
	validate_each_keys(ctx, each_value_2, get_each_context_2, get_key);

	for (let i = 0; i < each_value_2.length; i += 1) {
		let child_ctx = get_each_context_2(ctx, each_value_2, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_2(key, child_ctx));
	}

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 8) {
				each_value_2 = /*fruits*/ ctx[3];
				validate_each_argument(each_value_2);
				group_outros();
				validate_each_keys(ctx, each_value_2, get_each_context_2, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_2, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_2, each_1_anchor, get_each_context_2);
				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$1.name,
		type: "slot",
		source: "(8:4) <Select       key={(fruit) => (fruit && fruit.label) || ''}       bind:value={valueA}       label=\\\"Standard\\\"     >",
		ctx
	});

	return block;
}

// (32:8) <Option value={fruit}>
function create_default_slot_3$1(ctx) {
	let t_value = /*fruit*/ ctx[7].label + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(32:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (31:6) {#each fruits as fruit (fruit.label)}
function create_each_block_1(key_1, ctx) {
	let first;
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[7],
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = empty();
			create_component(option.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			claim_component(option.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const option_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(31:6) {#each fruits as fruit (fruit.label)}",
		ctx
	});

	return block;
}

// (24:4) <Select       variant="filled"       key={(fruit) => (fruit && fruit.label) || ''}       bind:value={valueB}       label="Filled"     >
function create_default_slot_2$1(ctx) {
	let option;
	let t;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: null }, $$inline: true });
	let each_value_1 = /*fruits*/ ctx[3];
	validate_each_argument(each_value_1);
	const get_key = ctx => /*fruit*/ ctx[7].label;
	validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);

	for (let i = 0; i < each_value_1.length; i += 1) {
		let child_ctx = get_each_context_1(ctx, each_value_1, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block_1(key, child_ctx));
	}

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 8) {
				each_value_1 = /*fruits*/ ctx[3];
				validate_each_argument(each_value_1);
				group_outros();
				validate_each_keys(ctx, each_value_1, get_each_context_1, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value_1, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block_1, each_1_anchor, get_each_context_1);
				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(24:4) <Select       variant=\\\"filled\\\"       key={(fruit) => (fruit && fruit.label) || ''}       bind:value={valueB}       label=\\\"Filled\\\"     >",
		ctx
	});

	return block;
}

// (49:8) <Option value={fruit}>
function create_default_slot_1$1(ctx) {
	let t_value = /*fruit*/ ctx[7].label + "";
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
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$1.name,
		type: "slot",
		source: "(49:8) <Option value={fruit}>",
		ctx
	});

	return block;
}

// (48:6) {#each fruits as fruit (fruit.label)}
function create_each_block(key_1, ctx) {
	let first;
	let option;
	let current;

	option = new Option({
			props: {
				value: /*fruit*/ ctx[7],
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = empty();
			create_component(option.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			claim_component(option.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(option, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const option_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				option_changes.$$scope = { dirty, ctx };
			}

			option.$set(option_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			destroy_component(option, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(48:6) {#each fruits as fruit (fruit.label)}",
		ctx
	});

	return block;
}

// (41:4) <Select       variant="outlined"       key={(fruit) => (fruit && fruit.label) || ''}       bind:value={valueC}       label="Outlined"     >
function create_default_slot$1(ctx) {
	let option;
	let t;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	option = new Option({ props: { value: null }, $$inline: true });
	let each_value = /*fruits*/ ctx[3];
	validate_each_argument(each_value);
	const get_key = ctx => /*fruit*/ ctx[7].label;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			create_component(option.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		l: function claim(nodes) {
			claim_component(option.$$.fragment, nodes);
			t = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			mount_component(option, target, anchor);
			insert_dev(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, each_1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*fruits*/ 8) {
				each_value = /*fruits*/ ctx[3];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(option.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(option.$$.fragment, local);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(option, detaching);
			if (detaching) detach_dev(t);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(41:4) <Select       variant=\\\"outlined\\\"       key={(fruit) => (fruit && fruit.label) || ''}       bind:value={valueC}       label=\\\"Outlined\\\"     >",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div3;
	let div0;
	let select0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2_value = (/*valueA*/ ctx[0] ? /*valueA*/ ctx[0].label : "None") + "";
	let t2;
	let t3;
	let t4_value = (/*valueA*/ ctx[0] ? /*valueA*/ ctx[0].price : "0") + "";
	let t4;
	let t5;
	let t6;
	let div1;
	let select1;
	let updating_value_1;
	let t7;
	let pre1;
	let t8;
	let t9_value = (/*valueB*/ ctx[1] ? /*valueB*/ ctx[1].label : "None") + "";
	let t9;
	let t10;
	let t11_value = (/*valueB*/ ctx[1] ? /*valueB*/ ctx[1].price : "0") + "";
	let t11;
	let t12;
	let t13;
	let div2;
	let select2;
	let updating_value_2;
	let t14;
	let pre2;
	let t15;
	let t16_value = (/*valueC*/ ctx[2] ? /*valueC*/ ctx[2].label : "None") + "";
	let t16;
	let t17;
	let t18_value = (/*valueC*/ ctx[2] ? /*valueC*/ ctx[2].price : "0") + "";
	let t18;
	let t19;
	let current;

	function select0_value_binding(value) {
		/*select0_value_binding*/ ctx[4](value);
	}

	let select0_props = {
		key: func,
		label: "Standard",
		$$slots: { default: [create_default_slot_4$1] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		select0_props.value = /*valueA*/ ctx[0];
	}

	select0 = new Select$1({ props: select0_props, $$inline: true });
	binding_callbacks.push(() => bind(select0, "value", select0_value_binding));

	function select1_value_binding(value) {
		/*select1_value_binding*/ ctx[5](value);
	}

	let select1_props = {
		variant: "filled",
		key: func_1,
		label: "Filled",
		$$slots: { default: [create_default_slot_2$1] },
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		select1_props.value = /*valueB*/ ctx[1];
	}

	select1 = new Select$1({ props: select1_props, $$inline: true });
	binding_callbacks.push(() => bind(select1, "value", select1_value_binding));

	function select2_value_binding(value) {
		/*select2_value_binding*/ ctx[6](value);
	}

	let select2_props = {
		variant: "outlined",
		key: func_2,
		label: "Outlined",
		$$slots: { default: [create_default_slot$1] },
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		select2_props.value = /*valueC*/ ctx[2];
	}

	select2 = new Select$1({ props: select2_props, $$inline: true });
	binding_callbacks.push(() => bind(select2, "value", select2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(select0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Selected: ");
			t2 = text(t2_value);
			t3 = text(", Price: ");
			t4 = text(t4_value);
			t5 = text("¢");
			t6 = space();
			div1 = element("div");
			create_component(select1.$$.fragment);
			t7 = space();
			pre1 = element("pre");
			t8 = text("Selected: ");
			t9 = text(t9_value);
			t10 = text(", Price: ");
			t11 = text(t11_value);
			t12 = text("¢");
			t13 = space();
			div2 = element("div");
			create_component(select2.$$.fragment);
			t14 = space();
			pre2 = element("pre");
			t15 = text("Selected: ");
			t16 = text(t16_value);
			t17 = text(", Price: ");
			t18 = text(t18_value);
			t19 = text("¢");
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(select0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Selected: ");
			t2 = claim_text(pre0_nodes, t2_value);
			t3 = claim_text(pre0_nodes, ", Price: ");
			t4 = claim_text(pre0_nodes, t4_value);
			t5 = claim_text(pre0_nodes, "¢");
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(select1.$$.fragment, div1_nodes);
			t7 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t8 = claim_text(pre1_nodes, "Selected: ");
			t9 = claim_text(pre1_nodes, t9_value);
			t10 = claim_text(pre1_nodes, ", Price: ");
			t11 = claim_text(pre1_nodes, t11_value);
			t12 = claim_text(pre1_nodes, "¢");
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t13 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(select2.$$.fragment, div2_nodes);
			t14 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t15 = claim_text(pre2_nodes, "Selected: ");
			t16 = claim_text(pre2_nodes, t16_value);
			t17 = claim_text(pre2_nodes, ", Price: ");
			t18 = claim_text(pre2_nodes, t18_value);
			t19 = claim_text(pre2_nodes, "¢");
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$1, 18, 4, 444);
			add_location(div0, file$1, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$1, 35, 4, 877);
			add_location(div1, file$1, 22, 2, 571);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$1, 52, 4, 1314);
			add_location(div2, file$1, 39, 2, 1004);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(select0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(pre0, t3);
			append_dev(pre0, t4);
			append_dev(pre0, t5);
			append_dev(div3, t6);
			append_dev(div3, div1);
			mount_component(select1, div1, null);
			append_dev(div1, t7);
			append_dev(div1, pre1);
			append_dev(pre1, t8);
			append_dev(pre1, t9);
			append_dev(pre1, t10);
			append_dev(pre1, t11);
			append_dev(pre1, t12);
			append_dev(div3, t13);
			append_dev(div3, div2);
			mount_component(select2, div2, null);
			append_dev(div2, t14);
			append_dev(div2, pre2);
			append_dev(pre2, t15);
			append_dev(pre2, t16);
			append_dev(pre2, t17);
			append_dev(pre2, t18);
			append_dev(pre2, t19);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const select0_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				select0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				select0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			select0.$set(select0_changes);
			if ((!current || dirty & /*valueA*/ 1) && t2_value !== (t2_value = (/*valueA*/ ctx[0] ? /*valueA*/ ctx[0].label : "None") + "")) set_data_dev(t2, t2_value);
			if ((!current || dirty & /*valueA*/ 1) && t4_value !== (t4_value = (/*valueA*/ ctx[0] ? /*valueA*/ ctx[0].price : "0") + "")) set_data_dev(t4, t4_value);
			const select1_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				select1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				select1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			select1.$set(select1_changes);
			if ((!current || dirty & /*valueB*/ 2) && t9_value !== (t9_value = (/*valueB*/ ctx[1] ? /*valueB*/ ctx[1].label : "None") + "")) set_data_dev(t9, t9_value);
			if ((!current || dirty & /*valueB*/ 2) && t11_value !== (t11_value = (/*valueB*/ ctx[1] ? /*valueB*/ ctx[1].price : "0") + "")) set_data_dev(t11, t11_value);
			const select2_changes = {};

			if (dirty & /*$$scope*/ 16384) {
				select2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				select2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			select2.$set(select2_changes);
			if ((!current || dirty & /*valueC*/ 4) && t16_value !== (t16_value = (/*valueC*/ ctx[2] ? /*valueC*/ ctx[2].label : "None") + "")) set_data_dev(t16, t16_value);
			if ((!current || dirty & /*valueC*/ 4) && t18_value !== (t18_value = (/*valueC*/ ctx[2] ? /*valueC*/ ctx[2].price : "0") + "")) set_data_dev(t18, t18_value);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(select0.$$.fragment, local);
			transition_in(select1.$$.fragment, local);
			transition_in(select2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(select0.$$.fragment, local);
			transition_out(select1.$$.fragment, local);
			transition_out(select2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(select0);
			destroy_component(select1);
			destroy_component(select2);
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

const func = fruit => fruit && fruit.label || "";
const func_1 = fruit => fruit && fruit.label || "";
const func_2 = fruit => fruit && fruit.label || "";

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Objects", slots, []);

	let fruits = [
		{ label: "Apple", price: 35 },
		{ label: "Orange", price: 38 },
		{ label: "Banana", price: 28 },
		{ label: "Mango", price: 25 }
	];

	let valueA = null;
	let valueB = null;
	let valueC = null;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Objects> was created with unknown prop '${key}'`);
	});

	function select0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function select1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function select2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({
		Select: Select$1,
		Option,
		fruits,
		valueA,
		valueB,
		valueC
	});

	$$self.$inject_state = $$props => {
		if ("fruits" in $$props) $$invalidate(3, fruits = $$props.fruits);
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		fruits,
		select0_value_binding,
		select1_value_binding,
		select2_value_binding
	];
}

class Objects extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Objects",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/select/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/select/index.svelte";

// (12:2) <Demo component={Standard} file="select/_Standard.svelte">
function create_default_slot_8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Standard");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Standard");
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
		source: "(12:2) <Demo component={Standard} file=\\\"select/_Standard.svelte\\\">",
		ctx
	});

	return block;
}

// (14:2) <Demo component={Filled} file="select/_Filled.svelte">
function create_default_slot_7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Filled");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Filled");
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
		source: "(14:2) <Demo component={Filled} file=\\\"select/_Filled.svelte\\\">",
		ctx
	});

	return block;
}

// (16:2) <Demo component={Outlined} file="select/_Outlined.svelte">
function create_default_slot_6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Outlined");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Outlined");
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
		source: "(16:2) <Demo component={Outlined} file=\\\"select/_Outlined.svelte\\\">",
		ctx
	});

	return block;
}

// (18:2) <Demo component={ShapedFilled} file="select/_ShapedFilled.svelte">
function create_default_slot_5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Shaped Filled");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Shaped Filled");
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
		source: "(18:2) <Demo component={ShapedFilled} file=\\\"select/_ShapedFilled.svelte\\\">",
		ctx
	});

	return block;
}

// (20:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Styled with CSS");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Styled with CSS");
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
		source: "(20:4) <svelte:fragment slot=\\\"subtitle\\\">",
		ctx
	});

	return block;
}

// (23:2) <Demo component={ShapedOutlined} file="select/_ShapedOutlined.svelte">
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Shaped Outlined");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Shaped Outlined");
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
		source: "(23:2) <Demo component={ShapedOutlined} file=\\\"select/_ShapedOutlined.svelte\\\">",
		ctx
	});

	return block;
}

// (25:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Styled with CSS");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Styled with CSS");
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
		source: "(25:4) <svelte:fragment slot=\\\"subtitle\\\">",
		ctx
	});

	return block;
}

// (28:2) <Demo component={Required} file="select/_Required.svelte">
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Required");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Required");
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
		source: "(28:2) <Demo component={Required} file=\\\"select/_Required.svelte\\\">",
		ctx
	});

	return block;
}

// (30:2) <Demo component={Disabled} file="select/_Disabled.svelte">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Disabled");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Disabled");
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
		source: "(30:2) <Demo component={Disabled} file=\\\"select/_Disabled.svelte\\\">",
		ctx
	});

	return block;
}

// (32:2) <Demo component={ConditionalIcon} file="select/_ConditionalIcon.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Conditional icon");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Conditional icon");
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
		source: "(32:2) <Demo component={ConditionalIcon} file=\\\"select/_ConditionalIcon.svelte\\\">",
		ctx
	});

	return block;
}

// (36:2) <Demo component={Objects} file="select/_Objects.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Using Objects");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Using Objects");
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
		source: "(36:2) <Demo component={Objects} file=\\\"select/_Objects.svelte\\\">",
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
	let current;

	demo0 = new Demo({
			props: {
				component: Showcase,
				file: "select/_Showcase.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: Standard,
				file: "select/_Standard.svelte",
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: Filled,
				file: "select/_Filled.svelte",
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: Outlined,
				file: "select/_Outlined.svelte",
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo4 = new Demo({
			props: {
				component: ShapedFilled,
				file: "select/_ShapedFilled.svelte",
				$$slots: {
					subtitle: [create_subtitle_slot_1],
					default: [create_default_slot_5]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo5 = new Demo({
			props: {
				component: ShapedOutlined,
				file: "select/_ShapedOutlined.svelte",
				$$slots: {
					subtitle: [create_subtitle_slot],
					default: [create_default_slot_4]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo6 = new Demo({
			props: {
				component: Required,
				file: "select/_Required.svelte",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo7 = new Demo({
			props: {
				component: Disabled,
				file: "select/_Disabled.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo8 = new Demo({
			props: {
				component: ConditionalIcon,
				file: "select/_ConditionalIcon.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo9 = new Demo({
			props: {
				component: Objects,
				file: "select/_Objects.svelte",
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
			t1 = text("Select");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/select");
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
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-15m4q42\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Select");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/select");
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
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Select - SMUI";
			attr_dev(h2, "class", "svelte-1bufq5e");
			add_location(h2, file, 5, 2, 73);
			attr_dev(pre, "class", "demo-spaced svelte-1bufq5e");
			add_location(pre, file, 7, 2, 92);
			attr_dev(section, "class", "svelte-1bufq5e");
			add_location(section, file, 4, 0, 61);
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
	validate_slots("Select", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Select> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Showcase,
		Standard,
		Filled,
		Outlined,
		ShapedFilled,
		ShapedOutlined,
		Required,
		Disabled,
		ConditionalIcon,
		Objects
	});

	return [];
}

class Select extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Select",
			options,
			id: create_fragment.name
		});
	}
}

export default Select;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTNmNGNhNDQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9pY29uL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3NlbGVjdC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3NlbGVjdC9pY29uL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vc2VsZWN0L19TaG93Y2FzZS5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9zZWxlY3QvaWNvbi9JY29uLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9zZWxlY3QvX1N0YW5kYXJkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9zZWxlY3QvX0ZpbGxlZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vc2VsZWN0L19PdXRsaW5lZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vc2VsZWN0L19TaGFwZWRGaWxsZWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3NlbGVjdC9fU2hhcGVkT3V0bGluZWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3NlbGVjdC9fUmVxdWlyZWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3NlbGVjdC9fRGlzYWJsZWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3NlbGVjdC9fQ29uZGl0aW9uYWxJY29uLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9zZWxlY3QvX09iamVjdHMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3NlbGVjdC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgc3RyaW5ncyA9IHtcbiAgICBJQ09OX0VWRU5UOiAnTURDU2VsZWN0Omljb24nLFxuICAgIElDT05fUk9MRTogJ2J1dHRvbicsXG59O1xuZXhwb3J0IHsgc3RyaW5ncyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBJTlRFUkFDVElPTl9FVkVOVFMgPSBbJ2NsaWNrJywgJ2tleWRvd24nXTtcbnZhciBNRENTZWxlY3RJY29uRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDU2VsZWN0SWNvbkZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDU2VsZWN0SWNvbkZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2F2ZWRUYWJJbmRleF8gPSBudWxsO1xuICAgICAgICBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU2VsZWN0SWNvbkZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDU2VsZWN0SWNvbkZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENTZWxlY3RJY29uQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5SWNvbkFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENTZWxlY3RJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlci5nZXRBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICBJTlRFUkFDVElPTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENTZWxlY3RJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgSU5URVJBQ1RJT05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENTZWxlY3RJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGlzYWJsZWQgPSBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkVGFiSW5kZXhfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVBdHRyKCdyb2xlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cigndGFiaW5kZXgnLCB0aGlzLnNhdmVkVGFiSW5kZXhfKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyKCdyb2xlJywgc3RyaW5ncy5JQ09OX1JPTEUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENTZWxlY3RJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QXJpYUxhYmVsID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH07XG4gICAgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9O1xuICAgIE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGlzRW50ZXJLZXkgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAnY2xpY2snIHx8IGlzRW50ZXJLZXkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlJY29uQWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNRENTZWxlY3RJY29uRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENTZWxlY3RJY29uRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1wiPlxuICA8ZGl2PlxuICAgIDxTZWxlY3QgYmluZDp2YWx1ZSBsYWJlbD1cIlNlbGVjdCBNZW51XCI+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWV9PC9wcmU+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTZWxlY3QsIHsgT3B0aW9uIH0gZnJvbSAnQHNtdWkvc2VsZWN0JztcblxuICBsZXQgZnJ1aXRzID0gWydBcHBsZScsICdPcmFuZ2UnLCAnQmFuYW5hJywgJ01hbmdvJ107XG5cbiAgbGV0IHZhbHVlID0gJ09yYW5nZSc7XG48L3NjcmlwdD5cbiIsIjxpXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLXNlbGVjdF9faWNvbic6IHRydWUsXG4gIH0pfVxuICB7dGFiaW5kZXh9XG4gIGFyaWEtaGlkZGVuPXt0YWJpbmRleCA9PT0gJy0xJyA/ICd0cnVlJyA6ICdmYWxzZSd9XG4gIGFyaWEtZGlzYWJsZWQ9e3JvbGUgPT09ICdidXR0b24nID8gKGRpc2FibGVkID8gJ3RydWUnIDogJ2ZhbHNlJykgOiBudWxsfVxuICB7cm9sZX1cbiAgey4uLmludGVybmFsQXR0cnN9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L2lcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgTURDU2VsZWN0SWNvbkZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvc2VsZWN0L2ljb24vZm91bmRhdGlvbi5qcyc7XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIHVzZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgcm9sZSA9IG51bGw7XG4gIGV4cG9ydCBsZXQgdGFiaW5kZXggPSByb2xlID09PSAnYnV0dG9uJyA/ICcwJyA6ICctMSc7XG4gIGV4cG9ydCBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgaW50ZXJuYWxBdHRycyA9IHt9O1xuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGluc3RhbmNlID0gbmV3IE1EQ1NlbGVjdEljb25Gb3VuZGF0aW9uKHtcbiAgICAgIGdldEF0dHIsXG4gICAgICBzZXRBdHRyOiBhZGRBdHRyLFxuICAgICAgcmVtb3ZlQXR0cixcbiAgICAgIHNldENvbnRlbnQ6ICh2YWx1ZSkgPT4ge1xuICAgICAgICBjb250ZW50ID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBnZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBnZXRFbGVtZW50KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICAgIG5vdGlmeUljb25BY3Rpb246ICgpID0+IGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ1NlbGVjdDppY29uJyksXG4gICAgfSk7XG5cbiAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOnNlbGVjdDpsZWFkaW5nLWljb246bW91bnQnLCBpbnN0YW5jZSk7XG5cbiAgICBpbnN0YW5jZS5pbml0KCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnU01VSTpzZWxlY3Q6bGVhZGluZy1pY29uOnVubW91bnQnLCBpbnN0YW5jZSk7XG5cbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBnZXRBdHRyKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZSBpbiBpbnRlcm5hbEF0dHJzXG4gICAgICA/IGludGVybmFsQXR0cnNbbmFtZV1cbiAgICAgIDogZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZShuYW1lKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZEF0dHIobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAoaW50ZXJuYWxBdHRyc1tuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgIGludGVybmFsQXR0cnNbbmFtZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVBdHRyKG5hbWUpIHtcbiAgICBpZiAoIShuYW1lIGluIGludGVybmFsQXR0cnMpIHx8IGludGVybmFsQXR0cnNbbmFtZV0gIT0gbnVsbCkge1xuICAgICAgaW50ZXJuYWxBdHRyc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gIDxkaXY+XG4gICAgPFNlbGVjdCBiaW5kOnZhbHVlIGxhYmVsPVwiRnJ1aXRcIj5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlfTwvcHJlPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxTZWxlY3QgYmluZDp2YWx1ZT17dmFsdWVIZWxwZXJUZXh0fSBsYWJlbD1cIldpdGggSGVscGVyIFRleHRcIj5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cImhlbHBlclRleHRcIj5IZWxwZXIgdGV4dC48L3N2ZWx0ZTpmcmFnbWVudD5cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlSGVscGVyVGV4dH08L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8U2VsZWN0IGJpbmQ6dmFsdWU9e3ZhbHVlTGVhZGluZ0ljb259IGxhYmVsPVwiTGVhZGluZyBJY29uXCI+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cImxlYWRpbmdJY29uXCI+ZXZlbnQ8L0ljb24+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUxlYWRpbmdJY29ufTwvcHJlPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxTZWxlY3QgaW52YWxpZCBiaW5kOnZhbHVlPXt2YWx1ZUludmFsaWR9IGxhYmVsPVwiSW52YWxpZFwiPlxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiIC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVJbnZhbGlkfTwvcHJlPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU2VsZWN0LCB7IE9wdGlvbiB9IGZyb20gJ0BzbXVpL3NlbGVjdCc7XG4gIGltcG9ydCBJY29uIGZyb20gJ0BzbXVpL3NlbGVjdC9pY29uJztcblxuICBsZXQgZnJ1aXRzID0gWydBcHBsZScsICdPcmFuZ2UnLCAnQmFuYW5hJywgJ01hbmdvJ107XG5cbiAgbGV0IHZhbHVlID0gJyc7XG4gIGxldCB2YWx1ZUhlbHBlclRleHQgPSAnJztcbiAgbGV0IHZhbHVlTGVhZGluZ0ljb24gPSAnJztcbiAgbGV0IHZhbHVlSW52YWxpZCA9ICcnO1xuPC9zY3JpcHQ+XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gIDxkaXY+XG4gICAgPFNlbGVjdCB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZSBsYWJlbD1cIkZydWl0XCI+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZX08L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8U2VsZWN0XG4gICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlSGVscGVyVGV4dH1cbiAgICAgIGxhYmVsPVwiV2l0aCBIZWxwZXIgVGV4dFwiXG4gICAgPlxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiIC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwiaGVscGVyVGV4dFwiPkhlbHBlciB0ZXh0Ljwvc3ZlbHRlOmZyYWdtZW50PlxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVIZWxwZXJUZXh0fTwvcHJlPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxTZWxlY3QgdmFyaWFudD1cImZpbGxlZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlTGVhZGluZ0ljb259IGxhYmVsPVwiTGVhZGluZyBJY29uXCI+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cImxlYWRpbmdJY29uXCI+ZXZlbnQ8L0ljb24+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUxlYWRpbmdJY29ufTwvcHJlPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxTZWxlY3QgdmFyaWFudD1cImZpbGxlZFwiIGludmFsaWQgYmluZDp2YWx1ZT17dmFsdWVJbnZhbGlkfSBsYWJlbD1cIkludmFsaWRcIj5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlSW52YWxpZH08L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNlbGVjdCwgeyBPcHRpb24gfSBmcm9tICdAc211aS9zZWxlY3QnO1xuICBpbXBvcnQgSWNvbiBmcm9tICdAc211aS9zZWxlY3QvaWNvbic7XG5cbiAgbGV0IGZydWl0cyA9IFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYScsICdNYW5nbyddO1xuXG4gIGxldCB2YWx1ZSA9ICcnO1xuICBsZXQgdmFsdWVIZWxwZXJUZXh0ID0gJyc7XG4gIGxldCB2YWx1ZUxlYWRpbmdJY29uID0gJyc7XG4gIGxldCB2YWx1ZUludmFsaWQgPSAnJztcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxTZWxlY3QgdmFyaWFudD1cIm91dGxpbmVkXCIgYmluZDp2YWx1ZSBsYWJlbD1cIkZydWl0XCI+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZX08L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8U2VsZWN0XG4gICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVIZWxwZXJUZXh0fVxuICAgICAgbGFiZWw9XCJXaXRoIEhlbHBlciBUZXh0XCJcbiAgICA+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJoZWxwZXJUZXh0XCI+SGVscGVyIHRleHQuPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUhlbHBlclRleHR9PC9wcmU+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPFNlbGVjdFxuICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlTGVhZGluZ0ljb259XG4gICAgICBsYWJlbD1cIkxlYWRpbmcgSWNvblwiXG4gICAgPlxuICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHNsb3Q9XCJsZWFkaW5nSWNvblwiPmV2ZW50PC9JY29uPlxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiIC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVMZWFkaW5nSWNvbn08L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8U2VsZWN0XG4gICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgaW52YWxpZFxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVJbnZhbGlkfVxuICAgICAgbGFiZWw9XCJJbnZhbGlkXCJcbiAgICA+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUludmFsaWR9PC9wcmU+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBTZWxlY3QsIHsgT3B0aW9uIH0gZnJvbSAnQHNtdWkvc2VsZWN0JztcbiAgaW1wb3J0IEljb24gZnJvbSAnQHNtdWkvc2VsZWN0L2ljb24nO1xuXG4gIGxldCBmcnVpdHMgPSBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnLCAnTWFuZ28nXTtcblxuICBsZXQgdmFsdWUgPSAnJztcbiAgbGV0IHZhbHVlSGVscGVyVGV4dCA9ICcnO1xuICBsZXQgdmFsdWVMZWFkaW5nSWNvbiA9ICcnO1xuICBsZXQgdmFsdWVJbnZhbGlkID0gJyc7XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgPGRpdj5cbiAgICA8U2VsZWN0IGNsYXNzPVwic2hhcGVkLWZpbGxlZFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiBiaW5kOnZhbHVlIGxhYmVsPVwiRnJ1aXRcIj5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlfTwvcHJlPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxTZWxlY3RcbiAgICAgIGNsYXNzPVwic2hhcGVkLWZpbGxlZFwiXG4gICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlSGVscGVyVGV4dH1cbiAgICAgIGxhYmVsPVwiV2l0aCBIZWxwZXIgVGV4dFwiXG4gICAgPlxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiIC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwiaGVscGVyVGV4dFwiPkhlbHBlciB0ZXh0Ljwvc3ZlbHRlOmZyYWdtZW50PlxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVIZWxwZXJUZXh0fTwvcHJlPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxTZWxlY3RcbiAgICAgIGNsYXNzPVwic2hhcGVkLWZpbGxlZFwiXG4gICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlTGVhZGluZ0ljb259XG4gICAgICBsYWJlbD1cIkxlYWRpbmcgSWNvblwiXG4gICAgPlxuICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHNsb3Q9XCJsZWFkaW5nSWNvblwiPmV2ZW50PC9JY29uPlxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiIC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVMZWFkaW5nSWNvbn08L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8U2VsZWN0XG4gICAgICBjbGFzcz1cInNoYXBlZC1maWxsZWRcIlxuICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICBpbnZhbGlkXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUludmFsaWR9XG4gICAgICBsYWJlbD1cIkludmFsaWRcIlxuICAgID5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlSW52YWxpZH08L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNlbGVjdCwgeyBPcHRpb24gfSBmcm9tICdAc211aS9zZWxlY3QnO1xuICBpbXBvcnQgSWNvbiBmcm9tICdAc211aS9zZWxlY3QvaWNvbic7XG5cbiAgbGV0IGZydWl0cyA9IFsnQXBwbGUnLCAnT3JhbmdlJywgJ0JhbmFuYScsICdNYW5nbyddO1xuXG4gIGxldCB2YWx1ZSA9ICcnO1xuICBsZXQgdmFsdWVIZWxwZXJUZXh0ID0gJyc7XG4gIGxldCB2YWx1ZUxlYWRpbmdJY29uID0gJyc7XG4gIGxldCB2YWx1ZUludmFsaWQgPSAnJztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICogOmdsb2JhbCguc2hhcGVkLWZpbGxlZCwgLnNoYXBlZC1maWxsZWQgLm1kYy1zZWxlY3RfX2FuY2hvcikge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gIH1cbjwvc3R5bGU+XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gIDxkaXY+XG4gICAgPFNlbGVjdCBjbGFzcz1cInNoYXBlZC1vdXRsaW5lZFwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGJpbmQ6dmFsdWUgbGFiZWw9XCJGcnVpdFwiPlxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiIC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWV9PC9wcmU+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPFNlbGVjdFxuICAgICAgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWRcIlxuICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlSGVscGVyVGV4dH1cbiAgICAgIGxhYmVsPVwiV2l0aCBIZWxwZXIgVGV4dFwiXG4gICAgPlxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiIC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwiaGVscGVyVGV4dFwiPkhlbHBlciB0ZXh0Ljwvc3ZlbHRlOmZyYWdtZW50PlxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVIZWxwZXJUZXh0fTwvcHJlPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxTZWxlY3RcbiAgICAgIGNsYXNzPVwic2hhcGVkLW91dGxpbmVkXCJcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUxlYWRpbmdJY29ufVxuICAgICAgbGFiZWw9XCJMZWFkaW5nIEljb25cIlxuICAgID5cbiAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzbG90PVwibGVhZGluZ0ljb25cIj5ldmVudDwvSWNvbj5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlTGVhZGluZ0ljb259PC9wcmU+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPFNlbGVjdFxuICAgICAgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWRcIlxuICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgIGludmFsaWRcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlSW52YWxpZH1cbiAgICAgIGxhYmVsPVwiSW52YWxpZFwiXG4gICAgPlxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiIC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVJbnZhbGlkfTwvcHJlPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU2VsZWN0LCB7IE9wdGlvbiB9IGZyb20gJ0BzbXVpL3NlbGVjdCc7XG4gIGltcG9ydCBJY29uIGZyb20gJ0BzbXVpL3NlbGVjdC9pY29uJztcblxuICBsZXQgZnJ1aXRzID0gWydBcHBsZScsICdPcmFuZ2UnLCAnQmFuYW5hJywgJ01hbmdvJ107XG5cbiAgbGV0IHZhbHVlID0gJyc7XG4gIGxldCB2YWx1ZUhlbHBlclRleHQgPSAnJztcbiAgbGV0IHZhbHVlTGVhZGluZ0ljb24gPSAnJztcbiAgbGV0IHZhbHVlSW52YWxpZCA9ICcnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgKiA6Z2xvYmFsKC5zaGFwZWQtb3V0bGluZWQsIC5zaGFwZWQtb3V0bGluZWQgLm1kYy1zZWxlY3RfX2FuY2hvcikge1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XG4gIH1cbiAgKiA6Z2xvYmFsKC5zaGFwZWQtb3V0bGluZWQgLm1kYy10ZXh0LWZpZWxkX19pbnB1dCkge1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG4gICpcbiAgICA6Z2xvYmFsKC5zaGFwZWQtb3V0bGluZWRcbiAgICAgIC5tZGMtbm90Y2hlZC1vdXRsaW5lXG4gICAgICAubWRjLW5vdGNoZWQtb3V0bGluZV9fbGVhZGluZykge1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHggMCAwIDI4cHg7XG4gICAgd2lkdGg6IDI4cHg7XG4gIH1cbiAgKlxuICAgIDpnbG9iYWwoLnNoYXBlZC1vdXRsaW5lZFxuICAgICAgLm1kYy1ub3RjaGVkLW91dGxpbmVcbiAgICAgIC5tZGMtbm90Y2hlZC1vdXRsaW5lX190cmFpbGluZykge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMjhweCAyOHB4IDA7XG4gIH1cbiAgKiA6Z2xvYmFsKC5zaGFwZWQtb3V0bGluZWQgLm1kYy1ub3RjaGVkLW91dGxpbmUgLm1kYy1ub3RjaGVkLW91dGxpbmVfX25vdGNoKSB7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyOHB4ICogMik7XG4gIH1cbiAgKlxuICAgIDpnbG9iYWwoLnNoYXBlZC1vdXRsaW5lZC5tZGMtc2VsZWN0LS13aXRoLWxlYWRpbmctaWNvblxuICAgICAgLm1kYy1ub3RjaGVkLW91dGxpbmU6bm90KC5tZGMtbm90Y2hlZC1vdXRsaW5lLS1ub3RjaGVkKVxuICAgICAgLm1kYy1mbG9hdGluZy1sYWJlbCkge1xuICAgIGxlZnQ6IDE2cHg7XG4gIH1cbjwvc3R5bGU+XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gIDxkaXY+XG4gICAgPFNlbGVjdCBiaW5kOnZhbHVlPXt2YWx1ZUF9IGxhYmVsPVwiU3RhbmRhcmRcIiByZXF1aXJlZD5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlQX08L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8U2VsZWN0IHZhcmlhbnQ9XCJmaWxsZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZUJ9IGxhYmVsPVwiRmlsbGVkXCIgcmVxdWlyZWQ+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPFNlbGVjdCB2YXJpYW50PVwib3V0bGluZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZUN9IGxhYmVsPVwiT3V0bGluZWRcIiByZXF1aXJlZD5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlQ308L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNlbGVjdCwgeyBPcHRpb24gfSBmcm9tICdAc211aS9zZWxlY3QnO1xuXG4gIGxldCBmcnVpdHMgPSBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnLCAnTWFuZ28nXTtcblxuICBsZXQgdmFsdWVBID0gJyc7XG4gIGxldCB2YWx1ZUIgPSAnJztcbiAgbGV0IHZhbHVlQyA9ICcnO1xuPC9zY3JpcHQ+XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gIDxkaXY+XG4gICAgPFNlbGVjdCBiaW5kOnZhbHVlPXt2YWx1ZUF9IGxhYmVsPVwiU3RhbmRhcmRcIiBkaXNhYmxlZD5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlQX08L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8U2VsZWN0IHZhcmlhbnQ9XCJmaWxsZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZUJ9IGxhYmVsPVwiRmlsbGVkXCIgZGlzYWJsZWQ+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPFNlbGVjdCB2YXJpYW50PVwib3V0bGluZWRcIiBiaW5kOnZhbHVlPXt2YWx1ZUN9IGxhYmVsPVwiT3V0bGluZWRcIiBkaXNhYmxlZD5cbiAgICAgIDxPcHRpb24gdmFsdWU9XCJcIiAvPlxuICAgICAgeyNlYWNoIGZydWl0cyBhcyBmcnVpdH1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5TZWxlY3RlZDoge3ZhbHVlQ308L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNlbGVjdCwgeyBPcHRpb24gfSBmcm9tICdAc211aS9zZWxlY3QnO1xuXG4gIGxldCBmcnVpdHMgPSBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnLCAnTWFuZ28nXTtcblxuICBsZXQgdmFsdWVBID0gJyc7XG4gIGxldCB2YWx1ZUIgPSAnJztcbiAgbGV0IHZhbHVlQyA9ICcnO1xuPC9zY3JpcHQ+XG4iLCI8IS0tXG4gIEljb25zIGFyZSBub3JtYWxseSBkaXNjb3ZlcmVkIHRocm91Z2ggdGhlaXIgc2xvdCxcbiAgYnV0IFN2ZWx0ZSBzbG90cyBjYW5ub3QgYmUgY29uZGl0aW9uYWwsIHNvIHlvdSBjYW5cbiAgdXNlIGEgZnJhZ21lbnQgd2l0aCBhIGNvbmRpdGlvbmFsIGljb24gaW5zaWRlIGFuZFxuICBwYXNzIHRoZSBgd2l0aExlYWRpbmdJY29uYCBwcm9wIHRvIHVzZSBhXG4gIGNvbmRpdGlvbmFsIGljb24uXG4tLT5cbjxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgPGRpdj5cbiAgICA8U2VsZWN0XG4gICAgICB3aXRoTGVhZGluZ0ljb249e3Nob3dMZWFkaW5nSWNvbnN9XG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUF9XG4gICAgICBsYWJlbD1cIlN0YW5kYXJkXCJcbiAgICA+XG4gICAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJsZWFkaW5nSWNvblwiPlxuICAgICAgICB7I2lmIHNob3dMZWFkaW5nSWNvbnN9XG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmV2ZW50PC9JY29uPlxuICAgICAgICB7L2lmfVxuICAgICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUF9PC9wcmU+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPFNlbGVjdFxuICAgICAgd2l0aExlYWRpbmdJY29uPXtzaG93TGVhZGluZ0ljb25zfVxuICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUJ9XG4gICAgICBsYWJlbD1cIkZpbGxlZFwiXG4gICAgPlxuICAgICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwibGVhZGluZ0ljb25cIj5cbiAgICAgICAgeyNpZiBzaG93TGVhZGluZ0ljb25zfVxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5ldmVudDwvSWNvbj5cbiAgICAgICAgey9pZn1cbiAgICAgIDwvc3ZlbHRlOmZyYWdtZW50PlxuICAgICAgPE9wdGlvbiB2YWx1ZT1cIlwiIC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0fVxuICAgICAgICA8T3B0aW9uIHZhbHVlPXtmcnVpdH0+e2ZydWl0fTwvT3B0aW9uPlxuICAgICAgey9lYWNofVxuICAgIDwvU2VsZWN0PlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVCfTwvcHJlPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxTZWxlY3RcbiAgICAgIHdpdGhMZWFkaW5nSWNvbj17c2hvd0xlYWRpbmdJY29uc31cbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUN9XG4gICAgICBsYWJlbD1cIk91dGxpbmVkXCJcbiAgICA+XG4gICAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJsZWFkaW5nSWNvblwiPlxuICAgICAgICB7I2lmIHNob3dMZWFkaW5nSWNvbnN9XG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmV2ZW50PC9JY29uPlxuICAgICAgICB7L2lmfVxuICAgICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gICAgICA8T3B0aW9uIHZhbHVlPVwiXCIgLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXR9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXR9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUN9PC9wcmU+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxkaXY+XG4gIDxCdXR0b24gb246Y2xpY2s9eygpID0+IChzaG93TGVhZGluZ0ljb25zID0gIXNob3dMZWFkaW5nSWNvbnMpfT5cbiAgICBUb2dnbGUgTGVhZGluZyBJY29uc1xuICA8L0J1dHRvbj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgU2VsZWN0LCB7IE9wdGlvbiB9IGZyb20gJ0BzbXVpL3NlbGVjdCc7XG4gIGltcG9ydCBJY29uIGZyb20gJ0BzbXVpL3NlbGVjdC9pY29uJztcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tICdAc211aS9idXR0b24nO1xuXG4gIGxldCBmcnVpdHMgPSBbJ0FwcGxlJywgJ09yYW5nZScsICdCYW5hbmEnLCAnTWFuZ28nXTtcblxuICBsZXQgdmFsdWVBID0gJyc7XG4gIGxldCB2YWx1ZUIgPSAnJztcbiAgbGV0IHZhbHVlQyA9ICcnO1xuXG4gIGxldCBzaG93TGVhZGluZ0ljb25zID0gdHJ1ZTtcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDwhLS1cbiAgICAgIE5vdGU6IHlvdSBuZWVkIHRvIHByb3ZpZGUgYSBmdW5jdGlvblxuICAgICAgYXMgYGtleWAgdGhhdCByZXR1cm5zIGEgdW5pcXVlIHN0cmluZ1xuICAgICAgZm9yIGVhY2ggb3B0aW9uLlxuICAgIC0tPlxuICAgIDxTZWxlY3RcbiAgICAgIGtleT17KGZydWl0KSA9PiAoZnJ1aXQgJiYgZnJ1aXQubGFiZWwpIHx8ICcnfVxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVBfVxuICAgICAgbGFiZWw9XCJTdGFuZGFyZFwiXG4gICAgPlxuICAgICAgPE9wdGlvbiB2YWx1ZT17bnVsbH0gLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXQgKGZydWl0LmxhYmVsKX1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdC5sYWJlbH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmVcbiAgICAgIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUEgPyB2YWx1ZUEubGFiZWwgOiAnTm9uZSd9LCBQcmljZToge3ZhbHVlQSA/ICB2YWx1ZUEucHJpY2UgOiAnMCd9wqI8L3ByZT5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8U2VsZWN0XG4gICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgIGtleT17KGZydWl0KSA9PiAoZnJ1aXQgJiYgZnJ1aXQubGFiZWwpIHx8ICcnfVxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVCfVxuICAgICAgbGFiZWw9XCJGaWxsZWRcIlxuICAgID5cbiAgICAgIDxPcHRpb24gdmFsdWU9e251bGx9IC8+XG4gICAgICB7I2VhY2ggZnJ1aXRzIGFzIGZydWl0IChmcnVpdC5sYWJlbCl9XG4gICAgICAgIDxPcHRpb24gdmFsdWU9e2ZydWl0fT57ZnJ1aXQubGFiZWx9PC9PcHRpb24+XG4gICAgICB7L2VhY2h9XG4gICAgPC9TZWxlY3Q+XG5cbiAgICA8cHJlXG4gICAgICBjbGFzcz1cInN0YXR1c1wiPlNlbGVjdGVkOiB7dmFsdWVCID8gdmFsdWVCLmxhYmVsIDogJ05vbmUnfSwgUHJpY2U6IHt2YWx1ZUIgPyAgdmFsdWVCLnByaWNlIDogJzAnfcKiPC9wcmU+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPFNlbGVjdFxuICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgIGtleT17KGZydWl0KSA9PiAoZnJ1aXQgJiYgZnJ1aXQubGFiZWwpIHx8ICcnfVxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVDfVxuICAgICAgbGFiZWw9XCJPdXRsaW5lZFwiXG4gICAgPlxuICAgICAgPE9wdGlvbiB2YWx1ZT17bnVsbH0gLz5cbiAgICAgIHsjZWFjaCBmcnVpdHMgYXMgZnJ1aXQgKGZydWl0LmxhYmVsKX1cbiAgICAgICAgPE9wdGlvbiB2YWx1ZT17ZnJ1aXR9PntmcnVpdC5sYWJlbH08L09wdGlvbj5cbiAgICAgIHsvZWFjaH1cbiAgICA8L1NlbGVjdD5cblxuICAgIDxwcmVcbiAgICAgIGNsYXNzPVwic3RhdHVzXCI+U2VsZWN0ZWQ6IHt2YWx1ZUMgPyB2YWx1ZUMubGFiZWwgOiAnTm9uZSd9LCBQcmljZToge3ZhbHVlQyA/ICB2YWx1ZUMucHJpY2UgOiAnMCd9wqI8L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFNlbGVjdCwgeyBPcHRpb24gfSBmcm9tICdAc211aS9zZWxlY3QnO1xuXG4gIGxldCBmcnVpdHMgPSBbXG4gICAgeyBsYWJlbDogJ0FwcGxlJywgcHJpY2U6IDM1IH0sXG4gICAgeyBsYWJlbDogJ09yYW5nZScsIHByaWNlOiAzOCB9LFxuICAgIHsgbGFiZWw6ICdCYW5hbmEnLCBwcmljZTogMjggfSxcbiAgICB7IGxhYmVsOiAnTWFuZ28nLCBwcmljZTogMjUgfSxcbiAgXTtcblxuICBsZXQgdmFsdWVBID0gbnVsbDtcbiAgbGV0IHZhbHVlQiA9IG51bGw7XG4gIGxldCB2YWx1ZUMgPSBudWxsO1xuPC9zY3JpcHQ+XG4iLCI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5TZWxlY3QgLSBTTVVJPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxzZWN0aW9uPlxuICA8aDI+U2VsZWN0PC9oMj5cblxuICA8cHJlIGNsYXNzPVwiZGVtby1zcGFjZWRcIj5ucG0gaSAtRCBAc211aS9zZWxlY3Q8L3ByZT5cblxuICA8RGVtbyBjb21wb25lbnQ9e1Nob3djYXNlfSBmaWxlPVwic2VsZWN0L19TaG93Y2FzZS5zdmVsdGVcIiAvPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U3RhbmRhcmR9IGZpbGU9XCJzZWxlY3QvX1N0YW5kYXJkLnN2ZWx0ZVwiPlN0YW5kYXJkPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17RmlsbGVkfSBmaWxlPVwic2VsZWN0L19GaWxsZWQuc3ZlbHRlXCI+RmlsbGVkPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17T3V0bGluZWR9IGZpbGU9XCJzZWxlY3QvX091dGxpbmVkLnN2ZWx0ZVwiPk91dGxpbmVkPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U2hhcGVkRmlsbGVkfSBmaWxlPVwic2VsZWN0L19TaGFwZWRGaWxsZWQuc3ZlbHRlXCI+XG4gICAgU2hhcGVkIEZpbGxlZFxuICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cInN1YnRpdGxlXCI+U3R5bGVkIHdpdGggQ1NTPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e1NoYXBlZE91dGxpbmVkfSBmaWxlPVwic2VsZWN0L19TaGFwZWRPdXRsaW5lZC5zdmVsdGVcIj5cbiAgICBTaGFwZWQgT3V0bGluZWRcbiAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJzdWJ0aXRsZVwiPlN0eWxlZCB3aXRoIENTUzwvc3ZlbHRlOmZyYWdtZW50PlxuICA8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtSZXF1aXJlZH0gZmlsZT1cInNlbGVjdC9fUmVxdWlyZWQuc3ZlbHRlXCI+UmVxdWlyZWQ8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtEaXNhYmxlZH0gZmlsZT1cInNlbGVjdC9fRGlzYWJsZWQuc3ZlbHRlXCI+RGlzYWJsZWQ8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtDb25kaXRpb25hbEljb259IGZpbGU9XCJzZWxlY3QvX0NvbmRpdGlvbmFsSWNvbi5zdmVsdGVcIj5cbiAgICBDb25kaXRpb25hbCBpY29uXG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e09iamVjdHN9IGZpbGU9XCJzZWxlY3QvX09iamVjdHMuc3ZlbHRlXCI+VXNpbmcgT2JqZWN0czwvRGVtbz5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZW1vLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaG93Y2FzZSBmcm9tICcuL19TaG93Y2FzZS5zdmVsdGUnO1xuICBpbXBvcnQgU3RhbmRhcmQgZnJvbSAnLi9fU3RhbmRhcmQuc3ZlbHRlJztcbiAgaW1wb3J0IEZpbGxlZCBmcm9tICcuL19GaWxsZWQuc3ZlbHRlJztcbiAgaW1wb3J0IE91dGxpbmVkIGZyb20gJy4vX091dGxpbmVkLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaGFwZWRGaWxsZWQgZnJvbSAnLi9fU2hhcGVkRmlsbGVkLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaGFwZWRPdXRsaW5lZCBmcm9tICcuL19TaGFwZWRPdXRsaW5lZC5zdmVsdGUnO1xuICBpbXBvcnQgUmVxdWlyZWQgZnJvbSAnLi9fUmVxdWlyZWQuc3ZlbHRlJztcbiAgaW1wb3J0IERpc2FibGVkIGZyb20gJy4vX0Rpc2FibGVkLnN2ZWx0ZSc7XG4gIGltcG9ydCBDb25kaXRpb25hbEljb24gZnJvbSAnLi9fQ29uZGl0aW9uYWxJY29uLnN2ZWx0ZSc7XG4gIGltcG9ydCBPYmplY3RzIGZyb20gJy4vX09iamVjdHMuc3ZlbHRlJztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICogOmdsb2JhbCgubWFyZ2lucykge1xuICAgIG1hcmdpbjogMThweCAwIDI0cHg7XG4gIH1cblxuICAqIDpnbG9iYWwoLmNvbHVtbnMpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuICAqIDpnbG9iYWwoLmNvbHVtbnMgPiAqKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG4gICogOmdsb2JhbCguY29sdW1ucyA+ICo6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUFiLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQURmLEdBQU07Ozs7a0NBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFDLEdBQU07Ozs7aUNBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OzswQkFBSixNQUFJOzs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQVltQixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUFiLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQURmLEdBQU07Ozs7a0NBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFDLEdBQU07Ozs7aUNBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OzswQkFBSixNQUFJOzs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQWNtQixHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQUFiLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQURmLEdBQU07Ozs7a0NBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFDLEdBQU07Ozs7aUNBQVgsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OzswQkFBSixNQUFJOzs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNOLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7SUFDekIsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUMxQixLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFO0lBQzFCLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7OztLQUd6QixNQUFNLEdBQUcsSUFBSTtLQUNiLE1BQU0sR0FBRyxJQUFJO0tBQ2IsTUFBTSxHQUFHLElBQUk7Ozs7Ozs7O0VBNURELE1BQU07Ozs7O0VBaUJOLE1BQU07Ozs7O0VBaUJOLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQ2xDTCxRQUFROzs7Ozs7OztlQUVSLFFBQVE7Ozs7Ozs7Ozs7ZUFFUixNQUFNOzs7Ozs7Ozs7O2VBRU4sUUFBUTs7Ozs7Ozs7OztlQUVSLFlBQVk7Ozs7Ozs7Ozs7Ozs7ZUFLWixjQUFjOzs7Ozs7Ozs7Ozs7O2VBS2QsUUFBUTs7Ozs7Ozs7OztlQUVSLFFBQVE7Ozs7Ozs7Ozs7ZUFFUixlQUFlOzs7Ozs7Ozs7O2VBSWYsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
