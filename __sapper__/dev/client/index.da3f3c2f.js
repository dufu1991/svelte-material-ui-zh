import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a7 as create_slot, $ as assign, W as compute_rest_props, v as validate_slots, Y as get_current_component, X as getContext, ay as validate_store, az as component_subscribe, ah as onMount, a0 as exclude_internal_props, p as element, x as claim_element, y as children, u as detach_dev, a9 as set_attributes, D as add_location, F as insert_dev, aa as action_destroyer, a8 as update_slot, a2 as get_spread_update, ab as is_function, J as transition_in, K as transition_out, ac as run_all, a6 as binding_callbacks, a4 as group_outros, a5 as check_outros, t as text, z as claim_text, aw as set_data_dev, O as noop, ak as bind, q as create_component, o as space, A as claim_component, w as claim_space, E as attr_dev, H as mount_component, G as append_dev, al as add_flush_callback, M as destroy_component, a1 as empty, C as CommonIcon, Q as listen, R as bubble, U as prevent_default, V as stop_propagation, ax as listen_dev, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { _ as __extends$3, a as __assign$3, M as MDCFoundation$3, c as classMap$3, f as forwardEventsBuilder$3, d as dispatch$1, u as useActions$3, T as Textfield$1, I as Input, b as Textarea$1 } from './Textfield.38e6e4ee.js';
import { B as Button_1 } from './Button.d66ce348.js';
import { P as Paper } from './Subtitle.1be01128.js';
import { F as Fab } from './Fab.5ce9de7b.js';

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
var cssClasses$5 = {
    ROOT: 'mdc-text-field-character-counter',
};
var strings$3 = {
    ROOT_SELECTOR: "." + cssClasses$5.ROOT,
};

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
var MDCTextFieldCharacterCounterFoundation = /** @class */ (function (_super) {
    __extends$3(MDCTextFieldCharacterCounterFoundation, _super);
    function MDCTextFieldCharacterCounterFoundation(adapter) {
        return _super.call(this, __assign$3(__assign$3({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
        get: function () {
            return cssClasses$5;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
        get: function () {
            return strings$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
         */
        get: function () {
            return {
                setContent: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
        currentLength = Math.min(currentLength, maxLength);
        this.adapter.setContent(currentLength + " / " + maxLength);
    };
    return MDCTextFieldCharacterCounterFoundation;
}(MDCFoundation$3));

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
var cssClasses$4 = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',
    ROOT: 'mdc-text-field-helper-text',
};
var strings$2 = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
    ROOT_SELECTOR: "." + cssClasses$4.ROOT,
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
var MDCTextFieldHelperTextFoundation = /** @class */ (function (_super) {
    __extends$3(MDCTextFieldHelperTextFoundation, _super);
    function MDCTextFieldHelperTextFoundation(adapter) {
        return _super.call(this, __assign$3(__assign$3({}, MDCTextFieldHelperTextFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "cssClasses", {
        get: function () {
            return cssClasses$4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCTextFieldHelperTextFoundation.prototype.getId = function () {
        return this.adapter.getAttr('id');
    };
    MDCTextFieldHelperTextFoundation.prototype.isVisible = function () {
        return this.adapter.getAttr(strings$2.ARIA_HIDDEN) !== 'true';
    };
    /**
     * Sets the content of the helper text field.
     */
    MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldHelperTextFoundation.prototype.isPersistent = function () {
        return this.adapter.hasClass(cssClasses$4.HELPER_TEXT_PERSISTENT);
    };
    /**
     * @param isPersistent Sets the persistency of the helper text.
     */
    MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter.addClass(cssClasses$4.HELPER_TEXT_PERSISTENT);
        }
        else {
            this.adapter.removeClass(cssClasses$4.HELPER_TEXT_PERSISTENT);
        }
    };
    /**
     * @return whether the helper text acts as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.isValidation = function () {
        return this.adapter.hasClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG);
    };
    /**
     * @param isValidation True to make the helper text act as an error validation message.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter.addClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter.removeClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Makes the helper text visible to the screen reader.
     */
    MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter.removeAttr(strings$2.ARIA_HIDDEN);
    };
    /**
     * Sets the validity of the helper text based on the input validity.
     */
    MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {
        var helperTextIsPersistent = this.adapter.hasClass(cssClasses$4.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter.hasClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;
        if (validationMsgNeedsDisplay) {
            this.showToScreenReader();
            this.adapter.setAttr(strings$2.ROLE, 'alert');
        }
        else {
            this.adapter.removeAttr(strings$2.ROLE);
        }
        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
            this.hide_();
        }
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {
        this.adapter.setAttr(strings$2.ARIA_HIDDEN, 'true');
    };
    return MDCTextFieldHelperTextFoundation;
}(MDCFoundation$3));

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
var strings$1 = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button',
};
var cssClasses$3 = {
    ROOT: 'mdc-text-field__icon',
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
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCTextFieldIconFoundation = /** @class */ (function (_super) {
    __extends$3(MDCTextFieldIconFoundation, _super);
    function MDCTextFieldIconFoundation(adapter) {
        var _this = _super.call(this, __assign$3(__assign$3({}, MDCTextFieldIconFoundation.defaultAdapter), adapter)) || this;
        _this.savedTabIndex_ = null;
        _this.interactionHandler_ = function (evt) { return _this.handleInteraction(evt); };
        return _this;
    }
    Object.defineProperty(MDCTextFieldIconFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "cssClasses", {
        get: function () {
            return cssClasses$3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCTextFieldIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.
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
    MDCTextFieldIconFoundation.prototype.init = function () {
        var _this = this;
        this.savedTabIndex_ = this.adapter.getAttr('tabindex');
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter.registerInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.destroy = function () {
        var _this = this;
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter.deregisterInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex_) {
            return;
        }
        if (disabled) {
            this.adapter.setAttr('tabindex', '-1');
            this.adapter.removeAttr('role');
        }
        else {
            this.adapter.setAttr('tabindex', this.savedTabIndex_);
            this.adapter.setAttr('role', strings$1.ICON_ROLE);
        }
    };
    MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter.setAttr('aria-label', label);
    };
    MDCTextFieldIconFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            evt.preventDefault(); // stop click from causing host label to focus
            // input
            this.adapter.notifyIconAction();
        }
    };
    return MDCTextFieldIconFoundation;
}(MDCFoundation$3));

/* packages/textfield/icon/Icon.svelte generated by Svelte v3.37.0 */

const file$v = "packages/textfield/icon/Icon.svelte";

function create_fragment$v(ctx) {
	let i;
	let i_class_value;
	let i_aria_hidden_value;
	let i_aria_disabled_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	let i_levels = [
		{
			class: i_class_value = classMap$3({
				[/*className*/ ctx[1]]: true,
				"mdc-text-field__icon": true,
				"mdc-text-field__icon--leading": /*leading*/ ctx[9],
				"mdc-text-field__icon--trailing": !/*leading*/ ctx[9]
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
			add_location(i, file$v, 0, 0, 0);
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
					action_destroyer(useActions_action = useActions$3.call(null, i, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[7].call(null, i))
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
				(!current || dirty & /*className*/ 2 && i_class_value !== (i_class_value = classMap$3({
					[/*className*/ ctx[1]]: true,
					"mdc-text-field__icon": true,
					"mdc-text-field__icon--leading": /*leading*/ ctx[9],
					"mdc-text-field__icon--trailing": !/*leading*/ ctx[9]
				}))) && { class: i_class_value },
				(!current || dirty & /*tabindex*/ 8) && { tabindex: /*tabindex*/ ctx[3] },
				(!current || dirty & /*tabindex*/ 8 && i_aria_hidden_value !== (i_aria_hidden_value = /*tabindex*/ ctx[3] === "-1" ? "true" : "false")) && { "aria-hidden": i_aria_hidden_value },
				(!current || dirty & /*role, disabled*/ 20 && i_aria_disabled_value !== (i_aria_disabled_value = /*role*/ ctx[2] === "button"
				? /*disabled*/ ctx[4] ? "true" : "false"
				: null)) && { "aria-disabled": i_aria_disabled_value },
				(!current || dirty & /*role*/ 4) && { role: /*role*/ ctx[2] },
				dirty & /*internalAttrs*/ 64 && /*internalAttrs*/ ctx[6],
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
		id: create_fragment$v.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance_1$5($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","role","tabindex","disabled","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $leadingStore;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Icon", slots, ['default']);
	const forwardEvents = forwardEventsBuilder$3(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { role = null } = $$props;
	let { tabindex = role === "button" ? "0" : "-1" } = $$props;
	let { disabled = false } = $$props;
	let element;
	let instance;
	let internalAttrs = {};
	const leadingStore = getContext("SMUI:textfield:icon:leading");
	validate_store(leadingStore, "leadingStore");
	component_subscribe($$self, leadingStore, value => $$invalidate(16, $leadingStore = value));
	const leading = $leadingStore;

	onMount(() => {
		instance = new MDCTextFieldIconFoundation({
				getAttr,
				setAttr: addAttr,
				removeAttr,
				setContent: value => {
					content = value;
				},
				registerInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
				deregisterInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler),
				notifyIconAction: () => dispatch$1(getElement(), "MDCTextField:icon")
			});

		dispatch$1(
			getElement(),
			leading
			? "SMUI:textfield:leading-icon:mount"
			: "SMUI:textfield:trailing-icon:mount",
			instance
		);

		instance.init();

		return () => {
			dispatch$1(
				getElement(),
				leading
				? "SMUI:textfield:leading-icon:unmount"
				: "SMUI:textfield:trailing-icon:unmount",
				instance
			);

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
		$$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("role" in $$new_props) $$invalidate(2, role = $$new_props.role);
		if ("tabindex" in $$new_props) $$invalidate(3, tabindex = $$new_props.tabindex);
		if ("disabled" in $$new_props) $$invalidate(4, disabled = $$new_props.disabled);
		if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCTextFieldIconFoundation,
		onMount,
		getContext,
		get_current_component,
		forwardEventsBuilder: forwardEventsBuilder$3,
		classMap: classMap$3,
		useActions: useActions$3,
		dispatch: dispatch$1,
		forwardEvents,
		use,
		className,
		role,
		tabindex,
		disabled,
		element,
		instance,
		internalAttrs,
		leadingStore,
		leading,
		getAttr,
		addAttr,
		removeAttr,
		getElement,
		$leadingStore
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
		leadingStore,
		leading,
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

		init(this, options, instance_1$5, create_fragment$v, safe_not_equal, {
			use: 0,
			class: 1,
			role: 2,
			tabindex: 3,
			disabled: 4,
			getElement: 11
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Icon",
			options,
			id: create_fragment$v.name
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
		return this.$$.ctx[11];
	}

	set getElement(value) {
		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/textfield/helper-text/HelperText.svelte generated by Svelte v3.37.0 */

const file$u = "packages/textfield/helper-text/HelperText.svelte";

// (17:31) {:else}
function create_else_block$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*content*/ ctx[8]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*content*/ ctx[8]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*content*/ 256) set_data_dev(t, /*content*/ ctx[8]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$2.name,
		type: "else",
		source: "(17:31) {:else}",
		ctx
	});

	return block;
}

// (17:2) {#if content == null}
function create_if_block$5(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[13].default;
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
		id: create_if_block$5.name,
		type: "if",
		source: "(17:2) {#if content == null}",
		ctx
	});

	return block;
}

function create_fragment$u(ctx) {
	let div;
	let current_block_type_index;
	let if_block;
	let div_class_value;
	let div_aria_hidden_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block$5, create_else_block$2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*content*/ ctx[8] == null) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	let div_levels = [
		{
			class: div_class_value = classMap$3({
				[/*className*/ ctx[1]]: true,
				"mdc-text-field-helper-text": true,
				"mdc-text-field-helper-text--persistent": /*persistent*/ ctx[3],
				"mdc-text-field-helper-text--validation-msg": /*validationMsg*/ ctx[4],
				.../*internalClasses*/ ctx[6]
			})
		},
		{
			"aria-hidden": div_aria_hidden_value = /*persistent*/ ctx[3] ? null : "true"
		},
		{ id: /*id*/ ctx[2] },
		/*internalAttrs*/ ctx[7],
		/*$$restProps*/ ctx[10]
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {
				class: true,
				"aria-hidden": true,
				id: true
			});

			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$u, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			/*div_binding*/ ctx[14](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions$3.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[9].call(null, div))
				];

				mounted = true;
			}
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
				if_block.m(div, null);
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*className, persistent, validationMsg, internalClasses*/ 90 && div_class_value !== (div_class_value = classMap$3({
					[/*className*/ ctx[1]]: true,
					"mdc-text-field-helper-text": true,
					"mdc-text-field-helper-text--persistent": /*persistent*/ ctx[3],
					"mdc-text-field-helper-text--validation-msg": /*validationMsg*/ ctx[4],
					.../*internalClasses*/ ctx[6]
				}))) && { class: div_class_value },
				(!current || dirty & /*persistent*/ 8 && div_aria_hidden_value !== (div_aria_hidden_value = /*persistent*/ ctx[3] ? null : "true")) && { "aria-hidden": div_aria_hidden_value },
				(!current || dirty & /*id*/ 4) && { id: /*id*/ ctx[2] },
				dirty & /*internalAttrs*/ 128 && /*internalAttrs*/ ctx[7],
				dirty & /*$$restProps*/ 1024 && /*$$restProps*/ ctx[10]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
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
			if (detaching) detach_dev(div);
			if_blocks[current_block_type_index].d();
			/*div_binding*/ ctx[14](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$u.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

let counter = 0;

function instance_1$4($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","id","persistent","validationMsg","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("HelperText", slots, ['default']);
	const forwardEvents = forwardEventsBuilder$3(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { id = "SMUI-textfield-helper-text-" + counter++ } = $$props;
	let { persistent = false } = $$props;
	let { validationMsg = false } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalAttrs = {};
	let content = null;

	onMount(() => {
		instance = new MDCTextFieldHelperTextFoundation({
				addClass,
				removeClass,
				hasClass,
				getAttr,
				setAttr: addAttr,
				removeAttr,
				setContent: value => {
					$$invalidate(8, content = value);
				}
			});

		if (id.startsWith("SMUI-textfield-helper-text-")) {
			dispatch$1(getElement(), "SMUI:textfield:helper-text:id", id);
		}

		dispatch$1(getElement(), "SMUI:textfield:helper-text:mount", instance);
		instance.init();

		return () => {
			dispatch$1(getElement(), "SMUI:textfield:helper-text:unmount", instance);
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
			$$invalidate(6, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(6, internalClasses[className] = false, internalClasses);
		}
	}

	function getAttr(name) {
		return name in internalAttrs
		? internalAttrs[name]
		: getElement().getAttribute(name);
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(7, internalAttrs[name] = value, internalAttrs);
		}
	}

	function removeAttr(name) {
		if (!(name in internalAttrs) || internalAttrs[name] != null) {
			$$invalidate(7, internalAttrs[name] = undefined, internalAttrs);
		}
	}

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(5, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("id" in $$new_props) $$invalidate(2, id = $$new_props.id);
		if ("persistent" in $$new_props) $$invalidate(3, persistent = $$new_props.persistent);
		if ("validationMsg" in $$new_props) $$invalidate(4, validationMsg = $$new_props.validationMsg);
		if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		counter,
		MDCTextFieldHelperTextFoundation,
		onMount,
		get_current_component,
		forwardEventsBuilder: forwardEventsBuilder$3,
		classMap: classMap$3,
		useActions: useActions$3,
		dispatch: dispatch$1,
		forwardEvents,
		use,
		className,
		id,
		persistent,
		validationMsg,
		element,
		instance,
		internalClasses,
		internalAttrs,
		content,
		hasClass,
		addClass,
		removeClass,
		getAttr,
		addAttr,
		removeAttr,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("id" in $$props) $$invalidate(2, id = $$new_props.id);
		if ("persistent" in $$props) $$invalidate(3, persistent = $$new_props.persistent);
		if ("validationMsg" in $$props) $$invalidate(4, validationMsg = $$new_props.validationMsg);
		if ("element" in $$props) $$invalidate(5, element = $$new_props.element);
		if ("instance" in $$props) instance = $$new_props.instance;
		if ("internalClasses" in $$props) $$invalidate(6, internalClasses = $$new_props.internalClasses);
		if ("internalAttrs" in $$props) $$invalidate(7, internalAttrs = $$new_props.internalAttrs);
		if ("content" in $$props) $$invalidate(8, content = $$new_props.content);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		id,
		persistent,
		validationMsg,
		element,
		internalClasses,
		internalAttrs,
		content,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		div_binding
	];
}

class HelperText extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1$4, create_fragment$u, safe_not_equal, {
			use: 0,
			class: 1,
			id: 2,
			persistent: 3,
			validationMsg: 4,
			getElement: 11
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "HelperText",
			options,
			id: create_fragment$u.name
		});
	}

	get use() {
		throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get id() {
		throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get persistent() {
		throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set persistent(value) {
		throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get validationMsg() {
		throw new Error("<HelperText>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set validationMsg(value) {
		throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[11];
	}

	set getElement(value) {
		throw new Error("<HelperText>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/textfield/_Showcase.svelte generated by Svelte v3.37.0 */
const file$t = "src/routes/demo/textfield/_Showcase.svelte";

// (25:6) {#if !disabled}
function create_if_block$4(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				role: "button",
				$$slots: { default: [create_default_slot_1$e] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	icon.$on("click", /*clickHandler*/ ctx[5]);

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
		id: create_if_block$4.name,
		type: "if",
		source: "(25:6) {#if !disabled}",
		ctx
	});

	return block;
}

// (26:8) <Icon class="material-icons" role="button" on:click={clickHandler}           >
function create_default_slot_1$e(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("send");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "send");
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
		id: create_default_slot_1$e.name,
		type: "slot",
		source: "(26:8) <Icon class=\\\"material-icons\\\" role=\\\"button\\\" on:click={clickHandler}           >",
		ctx
	});

	return block;
}

// (24:4) <svelte:fragment slot="trailingIcon">
function create_trailingIcon_slot$7(ctx) {
	let if_block_anchor;
	let current;
	let if_block = !/*disabled*/ ctx[4] && create_if_block$4(ctx);

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
			if (!/*disabled*/ ctx[4]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*disabled*/ 16) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$4(ctx);
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
		id: create_trailingIcon_slot$7.name,
		type: "slot",
		source: "(24:4) <svelte:fragment slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (31:4) <HelperText validationMsg slot="helper">
function create_default_slot$k(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("That's not a valid email address.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "That's not a valid email address.");
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
		id: create_default_slot$k.name,
		type: "slot",
		source: "(31:4) <HelperText validationMsg slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (31:4) 
function create_helper_slot$e(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				validationMsg: true,
				slot: "helper",
				$$slots: { default: [create_default_slot$k] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 2048) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$e.name,
		type: "slot",
		source: "(31:4) ",
		ctx
	});

	return block;
}

function create_fragment$t(ctx) {
	let div;
	let textfield;
	let updating_dirty;
	let updating_invalid;
	let updating_value;
	let t0;
	let pre;
	let t1;
	let t2;
	let t3;
	let t4;
	let t5;
	let t6;
	let t7;
	let t8;
	let current;

	function textfield_dirty_binding(value) {
		/*textfield_dirty_binding*/ ctx[6](value);
	}

	function textfield_invalid_binding(value) {
		/*textfield_invalid_binding*/ ctx[7](value);
	}

	function textfield_value_binding(value) {
		/*textfield_value_binding*/ ctx[8](value);
	}

	let textfield_props = {
		type: "email",
		updateInvalid: true,
		label: "To",
		style: "min-width: 250px;",
		input$autocomplete: "email",
		withTrailingIcon: !/*disabled*/ ctx[4],
		$$slots: {
			helper: [create_helper_slot$e],
			trailingIcon: [create_trailingIcon_slot$7]
		},
		$$scope: { ctx }
	};

	if (/*dirty*/ ctx[2] !== void 0) {
		textfield_props.dirty = /*dirty*/ ctx[2];
	}

	if (/*invalid*/ ctx[3] !== void 0) {
		textfield_props.invalid = /*invalid*/ ctx[3];
	}

	if (/*value*/ ctx[1] !== void 0) {
		textfield_props.value = /*value*/ ctx[1];
	}

	textfield = new Textfield$1({ props: textfield_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield, "dirty", textfield_dirty_binding));
	binding_callbacks.push(() => bind(textfield, "invalid", textfield_invalid_binding));
	binding_callbacks.push(() => bind(textfield, "value", textfield_value_binding));
	textfield.$on("focus", /*focus_handler*/ ctx[9]);
	textfield.$on("blur", /*blur_handler*/ ctx[10]);

	const block = {
		c: function create() {
			div = element("div");
			create_component(textfield.$$.fragment);
			t0 = space();
			pre = element("pre");
			t1 = text("Focused: ");
			t2 = text(/*focused*/ ctx[0]);
			t3 = text(", Dirty: ");
			t4 = text(/*dirty*/ ctx[2]);
			t5 = text(", Invalid: ");
			t6 = text(/*invalid*/ ctx[3]);
			t7 = text(", Value: ");
			t8 = text(/*value*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(textfield.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t1 = claim_text(pre_nodes, "Focused: ");
			t2 = claim_text(pre_nodes, /*focused*/ ctx[0]);
			t3 = claim_text(pre_nodes, ", Dirty: ");
			t4 = claim_text(pre_nodes, /*dirty*/ ctx[2]);
			t5 = claim_text(pre_nodes, ", Invalid: ");
			t6 = claim_text(pre_nodes, /*invalid*/ ctx[3]);
			t7 = claim_text(pre_nodes, ", Value: ");
			t8 = claim_text(pre_nodes, /*value*/ ctx[1]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "margins");
			add_location(div, file$t, 0, 0, 0);
			attr_dev(pre, "class", "status");
			add_location(pre, file$t, 36, 0, 943);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(textfield, div, null);
			insert_dev(target, t0, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t1);
			append_dev(pre, t2);
			append_dev(pre, t3);
			append_dev(pre, t4);
			append_dev(pre, t5);
			append_dev(pre, t6);
			append_dev(pre, t7);
			append_dev(pre, t8);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield_changes = {};
			if (dirty & /*disabled*/ 16) textfield_changes.withTrailingIcon = !/*disabled*/ ctx[4];

			if (dirty & /*$$scope, disabled*/ 2064) {
				textfield_changes.$$scope = { dirty, ctx };
			}

			if (!updating_dirty && dirty & /*dirty*/ 4) {
				updating_dirty = true;
				textfield_changes.dirty = /*dirty*/ ctx[2];
				add_flush_callback(() => updating_dirty = false);
			}

			if (!updating_invalid && dirty & /*invalid*/ 8) {
				updating_invalid = true;
				textfield_changes.invalid = /*invalid*/ ctx[3];
				add_flush_callback(() => updating_invalid = false);
			}

			if (!updating_value && dirty & /*value*/ 2) {
				updating_value = true;
				textfield_changes.value = /*value*/ ctx[1];
				add_flush_callback(() => updating_value = false);
			}

			textfield.$set(textfield_changes);
			if (!current || dirty & /*focused*/ 1) set_data_dev(t2, /*focused*/ ctx[0]);
			if (!current || dirty & /*dirty*/ 4) set_data_dev(t4, /*dirty*/ ctx[2]);
			if (!current || dirty & /*invalid*/ 8) set_data_dev(t6, /*invalid*/ ctx[3]);
			if (!current || dirty & /*value*/ 2) set_data_dev(t8, /*value*/ ctx[1]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(textfield);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(pre);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$t.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$p($$self, $$props, $$invalidate) {
	let disabled;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Showcase", slots, []);
	let focused = false;
	let value = null;
	let dirty = false;
	let invalid = false;

	function clickHandler() {
		alert(`Sending to ${value}!`);
		$$invalidate(1, value = null);
		$$invalidate(2, dirty = false);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Showcase> was created with unknown prop '${key}'`);
	});

	function textfield_dirty_binding(value) {
		dirty = value;
		$$invalidate(2, dirty);
	}

	function textfield_invalid_binding(value) {
		invalid = value;
		$$invalidate(3, invalid);
	}

	function textfield_value_binding(value$1) {
		value = value$1;
		$$invalidate(1, value);
	}

	const focus_handler = () => $$invalidate(0, focused = true);
	const blur_handler = () => $$invalidate(0, focused = false);

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		Icon,
		HelperText,
		focused,
		value,
		dirty,
		invalid,
		clickHandler,
		disabled
	});

	$$self.$inject_state = $$props => {
		if ("focused" in $$props) $$invalidate(0, focused = $$props.focused);
		if ("value" in $$props) $$invalidate(1, value = $$props.value);
		if ("dirty" in $$props) $$invalidate(2, dirty = $$props.dirty);
		if ("invalid" in $$props) $$invalidate(3, invalid = $$props.invalid);
		if ("disabled" in $$props) $$invalidate(4, disabled = $$props.disabled);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*focused, value, dirty, invalid*/ 15) {
			$$invalidate(4, disabled = focused || !value || !dirty || invalid);
		}
	};

	return [
		focused,
		value,
		dirty,
		invalid,
		disabled,
		clickHandler,
		textfield_dirty_binding,
		textfield_invalid_binding,
		textfield_value_binding,
		focus_handler,
		blur_handler
	];
}

class Showcase extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$p, create_fragment$t, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Showcase",
			options,
			id: create_fragment$t.name
		});
	}
}

/* src/routes/demo/textfield/_Standard.svelte generated by Svelte v3.37.0 */
const file$s = "src/routes/demo/textfield/_Standard.svelte";

// (4:6) <HelperText slot="helper">
function create_default_slot_5$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_5$9.name,
		type: "slot",
		source: "(4:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (4:6) 
function create_helper_slot_3$5(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_5$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_3$5.name,
		type: "slot",
		source: "(4:6) ",
		ctx
	});

	return block;
}

// (11:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_4$9(ctx) {
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
		id: create_default_slot_4$9.name,
		type: "slot",
		source: "(11:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (11:6) 
function create_leadingIcon_slot$7(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_4$9] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_leadingIcon_slot$7.name,
		type: "slot",
		source: "(11:6) ",
		ctx
	});

	return block;
}

// (12:6) <HelperText slot="helper">
function create_default_slot_3$a(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_3$a.name,
		type: "slot",
		source: "(12:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (12:6) 
function create_helper_slot_2$9(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_3$a] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2$9.name,
		type: "slot",
		source: "(12:6) ",
		ctx
	});

	return block;
}

// (19:6) <Icon class="material-icons" slot="trailingIcon">
function create_default_slot_2$d(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		id: create_default_slot_2$d.name,
		type: "slot",
		source: "(19:6) <Icon class=\\\"material-icons\\\" slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (19:6) 
function create_trailingIcon_slot$6(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "trailingIcon",
				$$slots: { default: [create_default_slot_2$d] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_trailingIcon_slot$6.name,
		type: "slot",
		source: "(19:6) ",
		ctx
	});

	return block;
}

// (20:6) <HelperText slot="helper">
function create_default_slot_1$d(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_1$d.name,
		type: "slot",
		source: "(20:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (20:6) 
function create_helper_slot_1$9(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_1$d] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1$9.name,
		type: "slot",
		source: "(20:6) ",
		ctx
	});

	return block;
}

// (27:6) <HelperText slot="helper">
function create_default_slot$j(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$j.name,
		type: "slot",
		source: "(27:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (27:6) 
function create_helper_slot$d(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$j] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$d.name,
		type: "slot",
		source: "(27:6) ",
		ctx
	});

	return block;
}

function create_fragment$s(ctx) {
	let div4;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let textfield3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[4](value);
	}

	let textfield0_props = {
		label: "Label",
		$$slots: { helper: [create_helper_slot_3$5] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[5](value);
	}

	let textfield1_props = {
		label: "Leading Icon",
		$$slots: {
			helper: [create_helper_slot_2$9],
			leadingIcon: [create_leadingIcon_slot$7]
		},
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[6](value);
	}

	let textfield2_props = {
		label: "Trailing Icon",
		$$slots: {
			helper: [create_helper_slot_1$9],
			trailingIcon: [create_trailingIcon_slot$6]
		},
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	function textfield3_value_binding(value) {
		/*textfield3_value_binding*/ ctx[7](value);
	}

	let textfield3_props = {
		invalid: true,
		label: "Invalid",
		$$slots: { helper: [create_helper_slot$d] },
		$$scope: { ctx }
	};

	if (/*valueD*/ ctx[3] !== void 0) {
		textfield3_props.value = /*valueD*/ ctx[3];
	}

	textfield3 = new Textfield$1({ props: textfield3_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield3, "value", textfield3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(textfield3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Value: ");
			t14 = text(/*valueD*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			claim_component(textfield3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Value: ");
			t14 = claim_text(pre3_nodes, /*valueD*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$s, 6, 4, 167);
			add_location(div0, file$s, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$s, 14, 4, 429);
			add_location(div1, file$s, 8, 2, 220);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$s, 22, 4, 694);
			add_location(div2, file$s, 16, 2, 482);
			attr_dev(pre3, "class", "status");
			add_location(pre3, file$s, 29, 4, 892);
			add_location(div3, file$s, 24, 2, 747);
			attr_dev(div4, "class", "columns margins");
			add_location(div4, file$s, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(textfield3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
			const textfield3_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueD*/ 8) {
				updating_value_3 = true;
				textfield3_changes.value = /*valueD*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			textfield3.$set(textfield3_changes);
			if (!current || dirty & /*valueD*/ 8) set_data_dev(t14, /*valueD*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			transition_in(textfield3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			transition_out(textfield3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
			destroy_component(textfield3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$s.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$o($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Standard", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	let valueD = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Standard> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	function textfield3_value_binding(value) {
		valueD = value;
		$$invalidate(3, valueD);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		Icon,
		HelperText,
		valueA,
		valueB,
		valueC,
		valueD
	});

	$$self.$inject_state = $$props => {
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
		if ("valueD" in $$props) $$invalidate(3, valueD = $$props.valueD);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		valueD,
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding,
		textfield3_value_binding
	];
}

class Standard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$o, create_fragment$s, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Standard",
			options,
			id: create_fragment$s.name
		});
	}
}

/* src/routes/demo/textfield/_Filled.svelte generated by Svelte v3.37.0 */
const file$r = "src/routes/demo/textfield/_Filled.svelte";

// (4:6) <HelperText slot="helper">
function create_default_slot_5$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_5$8.name,
		type: "slot",
		source: "(4:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (4:6) 
function create_helper_slot_3$4(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_5$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_3$4.name,
		type: "slot",
		source: "(4:6) ",
		ctx
	});

	return block;
}

// (11:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_4$8(ctx) {
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
		id: create_default_slot_4$8.name,
		type: "slot",
		source: "(11:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (11:6) 
function create_leadingIcon_slot$6(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_4$8] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_leadingIcon_slot$6.name,
		type: "slot",
		source: "(11:6) ",
		ctx
	});

	return block;
}

// (12:6) <HelperText slot="helper">
function create_default_slot_3$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_3$9.name,
		type: "slot",
		source: "(12:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (12:6) 
function create_helper_slot_2$8(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_3$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2$8.name,
		type: "slot",
		source: "(12:6) ",
		ctx
	});

	return block;
}

// (19:6) <Icon class="material-icons" slot="trailingIcon">
function create_default_slot_2$c(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		id: create_default_slot_2$c.name,
		type: "slot",
		source: "(19:6) <Icon class=\\\"material-icons\\\" slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (19:6) 
function create_trailingIcon_slot$5(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "trailingIcon",
				$$slots: { default: [create_default_slot_2$c] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_trailingIcon_slot$5.name,
		type: "slot",
		source: "(19:6) ",
		ctx
	});

	return block;
}

// (20:6) <HelperText slot="helper">
function create_default_slot_1$c(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_1$c.name,
		type: "slot",
		source: "(20:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (20:6) 
function create_helper_slot_1$8(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_1$c] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1$8.name,
		type: "slot",
		source: "(20:6) ",
		ctx
	});

	return block;
}

// (27:6) <HelperText slot="helper">
function create_default_slot$i(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$i.name,
		type: "slot",
		source: "(27:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (27:6) 
function create_helper_slot$c(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$i] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$c.name,
		type: "slot",
		source: "(27:6) ",
		ctx
	});

	return block;
}

function create_fragment$r(ctx) {
	let div4;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let textfield3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[4](value);
	}

	let textfield0_props = {
		variant: "filled",
		label: "Label",
		$$slots: { helper: [create_helper_slot_3$4] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[5](value);
	}

	let textfield1_props = {
		variant: "filled",
		label: "Leading Icon",
		$$slots: {
			helper: [create_helper_slot_2$8],
			leadingIcon: [create_leadingIcon_slot$6]
		},
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[6](value);
	}

	let textfield2_props = {
		variant: "filled",
		label: "Trailing Icon",
		$$slots: {
			helper: [create_helper_slot_1$8],
			trailingIcon: [create_trailingIcon_slot$5]
		},
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	function textfield3_value_binding(value) {
		/*textfield3_value_binding*/ ctx[7](value);
	}

	let textfield3_props = {
		invalid: true,
		variant: "filled",
		label: "Invalid",
		$$slots: { helper: [create_helper_slot$c] },
		$$scope: { ctx }
	};

	if (/*valueD*/ ctx[3] !== void 0) {
		textfield3_props.value = /*valueD*/ ctx[3];
	}

	textfield3 = new Textfield$1({ props: textfield3_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield3, "value", textfield3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(textfield3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Value: ");
			t14 = text(/*valueD*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			claim_component(textfield3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Value: ");
			t14 = claim_text(pre3_nodes, /*valueD*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$r, 6, 4, 184);
			add_location(div0, file$r, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$r, 14, 4, 463);
			add_location(div1, file$r, 8, 2, 237);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$r, 22, 4, 745);
			add_location(div2, file$r, 16, 2, 516);
			attr_dev(pre3, "class", "status");
			add_location(pre3, file$r, 29, 4, 960);
			add_location(div3, file$r, 24, 2, 798);
			attr_dev(div4, "class", "columns margins");
			add_location(div4, file$r, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(textfield3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
			const textfield3_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueD*/ 8) {
				updating_value_3 = true;
				textfield3_changes.value = /*valueD*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			textfield3.$set(textfield3_changes);
			if (!current || dirty & /*valueD*/ 8) set_data_dev(t14, /*valueD*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			transition_in(textfield3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			transition_out(textfield3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
			destroy_component(textfield3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$r.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$n($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Filled", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	let valueD = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Filled> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	function textfield3_value_binding(value) {
		valueD = value;
		$$invalidate(3, valueD);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		Icon,
		HelperText,
		valueA,
		valueB,
		valueC,
		valueD
	});

	$$self.$inject_state = $$props => {
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
		if ("valueD" in $$props) $$invalidate(3, valueD = $$props.valueD);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		valueD,
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding,
		textfield3_value_binding
	];
}

class Filled extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$n, create_fragment$r, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Filled",
			options,
			id: create_fragment$r.name
		});
	}
}

/* src/routes/demo/textfield/_Outlined.svelte generated by Svelte v3.37.0 */
const file$q = "src/routes/demo/textfield/_Outlined.svelte";

// (4:6) <HelperText slot="helper">
function create_default_slot_5$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_5$7.name,
		type: "slot",
		source: "(4:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (4:6) 
function create_helper_slot_3$3(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_5$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_3$3.name,
		type: "slot",
		source: "(4:6) ",
		ctx
	});

	return block;
}

// (11:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_4$7(ctx) {
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
		id: create_default_slot_4$7.name,
		type: "slot",
		source: "(11:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (11:6) 
function create_leadingIcon_slot$5(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_4$7] },
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

			if (dirty & /*$$scope*/ 256) {
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
		source: "(11:6) ",
		ctx
	});

	return block;
}

// (12:6) <HelperText slot="helper">
function create_default_slot_3$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_3$8.name,
		type: "slot",
		source: "(12:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (12:6) 
function create_helper_slot_2$7(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_3$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2$7.name,
		type: "slot",
		source: "(12:6) ",
		ctx
	});

	return block;
}

// (19:6) <Icon class="material-icons" slot="trailingIcon">
function create_default_slot_2$b(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		id: create_default_slot_2$b.name,
		type: "slot",
		source: "(19:6) <Icon class=\\\"material-icons\\\" slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (19:6) 
function create_trailingIcon_slot$4(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "trailingIcon",
				$$slots: { default: [create_default_slot_2$b] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_trailingIcon_slot$4.name,
		type: "slot",
		source: "(19:6) ",
		ctx
	});

	return block;
}

// (20:6) <HelperText slot="helper">
function create_default_slot_1$b(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_1$b.name,
		type: "slot",
		source: "(20:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (20:6) 
function create_helper_slot_1$7(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_1$b] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1$7.name,
		type: "slot",
		source: "(20:6) ",
		ctx
	});

	return block;
}

// (27:6) <HelperText slot="helper">
function create_default_slot$h(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$h.name,
		type: "slot",
		source: "(27:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (27:6) 
function create_helper_slot$b(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$h] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$b.name,
		type: "slot",
		source: "(27:6) ",
		ctx
	});

	return block;
}

function create_fragment$q(ctx) {
	let div4;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let textfield3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[4](value);
	}

	let textfield0_props = {
		variant: "outlined",
		label: "Label",
		$$slots: { helper: [create_helper_slot_3$3] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[5](value);
	}

	let textfield1_props = {
		variant: "outlined",
		label: "Leading Icon",
		$$slots: {
			helper: [create_helper_slot_2$7],
			leadingIcon: [create_leadingIcon_slot$5]
		},
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[6](value);
	}

	let textfield2_props = {
		variant: "outlined",
		label: "Trailing Icon",
		$$slots: {
			helper: [create_helper_slot_1$7],
			trailingIcon: [create_trailingIcon_slot$4]
		},
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	function textfield3_value_binding(value) {
		/*textfield3_value_binding*/ ctx[7](value);
	}

	let textfield3_props = {
		variant: "outlined",
		invalid: true,
		label: "Invalid",
		$$slots: { helper: [create_helper_slot$b] },
		$$scope: { ctx }
	};

	if (/*valueD*/ ctx[3] !== void 0) {
		textfield3_props.value = /*valueD*/ ctx[3];
	}

	textfield3 = new Textfield$1({ props: textfield3_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield3, "value", textfield3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(textfield3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Value: ");
			t14 = text(/*valueD*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			claim_component(textfield3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Value: ");
			t14 = claim_text(pre3_nodes, /*valueD*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$q, 6, 4, 186);
			add_location(div0, file$q, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$q, 14, 4, 467);
			add_location(div1, file$q, 8, 2, 239);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$q, 22, 4, 751);
			add_location(div2, file$q, 16, 2, 520);
			attr_dev(pre3, "class", "status");
			add_location(pre3, file$q, 29, 4, 968);
			add_location(div3, file$q, 24, 2, 804);
			attr_dev(div4, "class", "columns margins");
			add_location(div4, file$q, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(textfield3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
			const textfield3_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueD*/ 8) {
				updating_value_3 = true;
				textfield3_changes.value = /*valueD*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			textfield3.$set(textfield3_changes);
			if (!current || dirty & /*valueD*/ 8) set_data_dev(t14, /*valueD*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			transition_in(textfield3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			transition_out(textfield3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
			destroy_component(textfield3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$q.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$m($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Outlined", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	let valueD = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Outlined> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	function textfield3_value_binding(value) {
		valueD = value;
		$$invalidate(3, valueD);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		Icon,
		HelperText,
		valueA,
		valueB,
		valueC,
		valueD
	});

	$$self.$inject_state = $$props => {
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
		if ("valueD" in $$props) $$invalidate(3, valueD = $$props.valueD);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		valueD,
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding,
		textfield3_value_binding
	];
}

class Outlined extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$m, create_fragment$q, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Outlined",
			options,
			id: create_fragment$q.name
		});
	}
}

/* src/routes/demo/textfield/_ShapedFilled.svelte generated by Svelte v3.37.0 */
const file$p = "src/routes/demo/textfield/_ShapedFilled.svelte";

// (9:6) <HelperText slot="helper">
function create_default_slot_5$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_5$6.name,
		type: "slot",
		source: "(9:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (9:6) 
function create_helper_slot_3$2(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_5$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_3$2.name,
		type: "slot",
		source: "(9:6) ",
		ctx
	});

	return block;
}

// (21:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_4$6(ctx) {
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
		id: create_default_slot_4$6.name,
		type: "slot",
		source: "(21:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (21:6) 
function create_leadingIcon_slot$4(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_4$6] },
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

			if (dirty & /*$$scope*/ 256) {
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
		source: "(21:6) ",
		ctx
	});

	return block;
}

// (22:6) <HelperText slot="helper">
function create_default_slot_3$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_3$7.name,
		type: "slot",
		source: "(22:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (22:6) 
function create_helper_slot_2$6(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_3$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2$6.name,
		type: "slot",
		source: "(22:6) ",
		ctx
	});

	return block;
}

// (34:6) <Icon class="material-icons" slot="trailingIcon">
function create_default_slot_2$a(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		id: create_default_slot_2$a.name,
		type: "slot",
		source: "(34:6) <Icon class=\\\"material-icons\\\" slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (34:6) 
function create_trailingIcon_slot$3(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "trailingIcon",
				$$slots: { default: [create_default_slot_2$a] },
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_trailingIcon_slot$3.name,
		type: "slot",
		source: "(34:6) ",
		ctx
	});

	return block;
}

// (35:6) <HelperText slot="helper">
function create_default_slot_1$a(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_1$a.name,
		type: "slot",
		source: "(35:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (35:6) 
function create_helper_slot_1$6(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_1$a] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1$6.name,
		type: "slot",
		source: "(35:6) ",
		ctx
	});

	return block;
}

// (48:6) <HelperText slot="helper">
function create_default_slot$g(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$g.name,
		type: "slot",
		source: "(48:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (48:6) 
function create_helper_slot$a(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$g] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$a.name,
		type: "slot",
		source: "(48:6) ",
		ctx
	});

	return block;
}

function create_fragment$p(ctx) {
	let div4;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let textfield3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[4](value);
	}

	let textfield0_props = {
		class: "shaped-filled",
		variant: "filled",
		label: "Label",
		$$slots: { helper: [create_helper_slot_3$2] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[5](value);
	}

	let textfield1_props = {
		class: "shaped-filled",
		variant: "filled",
		label: "Leading Icon",
		$$slots: {
			helper: [create_helper_slot_2$6],
			leadingIcon: [create_leadingIcon_slot$4]
		},
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[6](value);
	}

	let textfield2_props = {
		class: "shaped-filled",
		variant: "filled",
		label: "Trailing Icon",
		$$slots: {
			helper: [create_helper_slot_1$6],
			trailingIcon: [create_trailingIcon_slot$3]
		},
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	function textfield3_value_binding(value) {
		/*textfield3_value_binding*/ ctx[7](value);
	}

	let textfield3_props = {
		class: "shaped-filled",
		variant: "filled",
		invalid: true,
		label: "Invalid",
		$$slots: { helper: [create_helper_slot$a] },
		$$scope: { ctx }
	};

	if (/*valueD*/ ctx[3] !== void 0) {
		textfield3_props.value = /*valueD*/ ctx[3];
	}

	textfield3 = new Textfield$1({ props: textfield3_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield3, "value", textfield3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(textfield3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Value: ");
			t14 = text(/*valueD*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(textfield3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Value: ");
			t14 = claim_text(pre3_nodes, /*valueD*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status svelte-1n5u64v");
			add_location(pre0, file$p, 11, 4, 235);
			attr_dev(div0, "class", "svelte-1n5u64v");
			add_location(div0, file$p, 1, 2, 32);
			attr_dev(pre1, "class", "status svelte-1n5u64v");
			add_location(pre1, file$p, 24, 4, 565);
			attr_dev(div1, "class", "svelte-1n5u64v");
			add_location(div1, file$p, 13, 2, 288);
			attr_dev(pre2, "class", "status svelte-1n5u64v");
			add_location(pre2, file$p, 37, 4, 898);
			attr_dev(div2, "class", "svelte-1n5u64v");
			add_location(div2, file$p, 26, 2, 618);
			attr_dev(pre3, "class", "status svelte-1n5u64v");
			add_location(pre3, file$p, 50, 4, 1170);
			attr_dev(div3, "class", "svelte-1n5u64v");
			add_location(div3, file$p, 39, 2, 951);
			attr_dev(div4, "class", "columns margins svelte-1n5u64v");
			add_location(div4, file$p, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(textfield3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
			const textfield3_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueD*/ 8) {
				updating_value_3 = true;
				textfield3_changes.value = /*valueD*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			textfield3.$set(textfield3_changes);
			if (!current || dirty & /*valueD*/ 8) set_data_dev(t14, /*valueD*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			transition_in(textfield3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			transition_out(textfield3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
			destroy_component(textfield3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$p.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$l($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ShapedFilled", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	let valueD = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ShapedFilled> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	function textfield3_value_binding(value) {
		valueD = value;
		$$invalidate(3, valueD);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		Icon,
		HelperText,
		valueA,
		valueB,
		valueC,
		valueD
	});

	$$self.$inject_state = $$props => {
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
		if ("valueD" in $$props) $$invalidate(3, valueD = $$props.valueD);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		valueD,
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding,
		textfield3_value_binding
	];
}

class ShapedFilled extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$l, create_fragment$p, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ShapedFilled",
			options,
			id: create_fragment$p.name
		});
	}
}

/* src/routes/demo/textfield/_ShapedOutlined.svelte generated by Svelte v3.37.0 */
const file$o = "src/routes/demo/textfield/_ShapedOutlined.svelte";

// (9:6) <HelperText slot="helper">
function create_default_slot_5$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_5$5.name,
		type: "slot",
		source: "(9:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (9:6) 
function create_helper_slot_3$1(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_5$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_3$1.name,
		type: "slot",
		source: "(9:6) ",
		ctx
	});

	return block;
}

// (21:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_4$5(ctx) {
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
		id: create_default_slot_4$5.name,
		type: "slot",
		source: "(21:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (21:6) 
function create_leadingIcon_slot$3(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_4$5] },
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

			if (dirty & /*$$scope*/ 256) {
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
		source: "(21:6) ",
		ctx
	});

	return block;
}

// (22:6) <HelperText slot="helper">
function create_default_slot_3$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_3$6.name,
		type: "slot",
		source: "(22:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (22:6) 
function create_helper_slot_2$5(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_3$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2$5.name,
		type: "slot",
		source: "(22:6) ",
		ctx
	});

	return block;
}

// (34:6) <Icon class="material-icons" slot="trailingIcon">
function create_default_slot_2$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		source: "(34:6) <Icon class=\\\"material-icons\\\" slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (34:6) 
function create_trailingIcon_slot$2(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "trailingIcon",
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

			if (dirty & /*$$scope*/ 256) {
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
		id: create_trailingIcon_slot$2.name,
		type: "slot",
		source: "(34:6) ",
		ctx
	});

	return block;
}

// (35:6) <HelperText slot="helper">
function create_default_slot_1$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_1$9.name,
		type: "slot",
		source: "(35:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (35:6) 
function create_helper_slot_1$5(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_1$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1$5.name,
		type: "slot",
		source: "(35:6) ",
		ctx
	});

	return block;
}

// (48:6) <HelperText slot="helper">
function create_default_slot$f(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$f.name,
		type: "slot",
		source: "(48:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (48:6) 
function create_helper_slot$9(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$f] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 256) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$9.name,
		type: "slot",
		source: "(48:6) ",
		ctx
	});

	return block;
}

function create_fragment$o(ctx) {
	let div4;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let textfield3;
	let updating_value_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[4](value);
	}

	let textfield0_props = {
		class: "shaped-outlined",
		variant: "outlined",
		label: "Label",
		$$slots: { helper: [create_helper_slot_3$1] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[5](value);
	}

	let textfield1_props = {
		class: "shaped-outlined",
		variant: "outlined",
		label: "Leading Icon",
		$$slots: {
			helper: [create_helper_slot_2$5],
			leadingIcon: [create_leadingIcon_slot$3]
		},
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[6](value);
	}

	let textfield2_props = {
		class: "shaped-outlined",
		variant: "outlined",
		label: "Trailing Icon",
		$$slots: {
			helper: [create_helper_slot_1$5],
			trailingIcon: [create_trailingIcon_slot$2]
		},
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	function textfield3_value_binding(value) {
		/*textfield3_value_binding*/ ctx[7](value);
	}

	let textfield3_props = {
		class: "shaped-outlined",
		variant: "outlined",
		invalid: true,
		label: "Invalid",
		$$slots: { helper: [create_helper_slot$9] },
		$$scope: { ctx }
	};

	if (/*valueD*/ ctx[3] !== void 0) {
		textfield3_props.value = /*valueD*/ ctx[3];
	}

	textfield3 = new Textfield$1({ props: textfield3_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield3, "value", textfield3_value_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			t11 = space();
			div3 = element("div");
			create_component(textfield3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Value: ");
			t14 = text(/*valueD*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(textfield3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Value: ");
			t14 = claim_text(pre3_nodes, /*valueD*/ ctx[3]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status svelte-1xmmy9k");
			add_location(pre0, file$o, 11, 4, 239);
			attr_dev(div0, "class", "svelte-1xmmy9k");
			add_location(div0, file$o, 1, 2, 32);
			attr_dev(pre1, "class", "status svelte-1xmmy9k");
			add_location(pre1, file$o, 24, 4, 573);
			attr_dev(div1, "class", "svelte-1xmmy9k");
			add_location(div1, file$o, 13, 2, 292);
			attr_dev(pre2, "class", "status svelte-1xmmy9k");
			add_location(pre2, file$o, 37, 4, 910);
			attr_dev(div2, "class", "svelte-1xmmy9k");
			add_location(div2, file$o, 26, 2, 626);
			attr_dev(pre3, "class", "status svelte-1xmmy9k");
			add_location(pre3, file$o, 50, 4, 1186);
			attr_dev(div3, "class", "svelte-1xmmy9k");
			add_location(div3, file$o, 39, 2, 963);
			attr_dev(div4, "class", "columns margins svelte-1xmmy9k");
			add_location(div4, file$o, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(textfield3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
			const textfield3_changes = {};

			if (dirty & /*$$scope*/ 256) {
				textfield3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_3 && dirty & /*valueD*/ 8) {
				updating_value_3 = true;
				textfield3_changes.value = /*valueD*/ ctx[3];
				add_flush_callback(() => updating_value_3 = false);
			}

			textfield3.$set(textfield3_changes);
			if (!current || dirty & /*valueD*/ 8) set_data_dev(t14, /*valueD*/ ctx[3]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			transition_in(textfield3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			transition_out(textfield3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
			destroy_component(textfield3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$o.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$k($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ShapedOutlined", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	let valueD = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ShapedOutlined> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	function textfield3_value_binding(value) {
		valueD = value;
		$$invalidate(3, valueD);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		Icon,
		HelperText,
		valueA,
		valueB,
		valueC,
		valueD
	});

	$$self.$inject_state = $$props => {
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
		if ("valueD" in $$props) $$invalidate(3, valueD = $$props.valueD);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		valueD,
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding,
		textfield3_value_binding
	];
}

class ShapedOutlined extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$k, create_fragment$o, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ShapedOutlined",
			options,
			id: create_fragment$o.name
		});
	}
}

/* src/routes/demo/textfield/_Required.svelte generated by Svelte v3.37.0 */
const file$n = "src/routes/demo/textfield/_Required.svelte";

function create_fragment$n(ctx) {
	let div3;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[3](value);
	}

	let textfield0_props = { label: "Standard", required: true };

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[4](value);
	}

	let textfield1_props = {
		variant: "filled",
		label: "Filled",
		required: true
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[5](value);
	}

	let textfield2_props = {
		variant: "outlined",
		label: "Outlined",
		required: true
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$n, 4, 4, 107);
			add_location(div0, file$n, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$n, 9, 4, 250);
			add_location(div1, file$n, 6, 2, 160);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$n, 19, 4, 425);
			add_location(div2, file$n, 11, 2, 303);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$n, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$n.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$j($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Required", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Required> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, valueA, valueB, valueC });

	$$self.$inject_state = $$props => {
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
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding
	];
}

class Required extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$j, create_fragment$n, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Required",
			options,
			id: create_fragment$n.name
		});
	}
}

/* src/routes/demo/textfield/_Disabled.svelte generated by Svelte v3.37.0 */
const file$m = "src/routes/demo/textfield/_Disabled.svelte";

// (4:6) <HelperText slot="helper">
function create_default_slot_2$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		source: "(4:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (4:6) 
function create_helper_slot_2$4(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_2$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 1) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2$4.name,
		type: "slot",
		source: "(4:6) ",
		ctx
	});

	return block;
}

// (9:6) <HelperText slot="helper">
function create_default_slot_1$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_1$8.name,
		type: "slot",
		source: "(9:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (9:6) 
function create_helper_slot_1$4(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_1$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 1) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1$4.name,
		type: "slot",
		source: "(9:6) ",
		ctx
	});

	return block;
}

// (14:6) <HelperText slot="helper">
function create_default_slot$e(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$e.name,
		type: "slot",
		source: "(14:6) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (14:6) 
function create_helper_slot$8(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$e] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 1) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$8.name,
		type: "slot",
		source: "(14:6) ",
		ctx
	});

	return block;
}

function create_fragment$m(ctx) {
	let div3;
	let div0;
	let textfield0;
	let t0;
	let div1;
	let textfield1;
	let t1;
	let div2;
	let textfield2;
	let current;

	textfield0 = new Textfield$1({
			props: {
				disabled: true,
				value: "",
				label: "Standard",
				$$slots: { helper: [create_helper_slot_2$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	textfield1 = new Textfield$1({
			props: {
				variant: "filled",
				disabled: true,
				value: "",
				label: "Filled",
				$$slots: { helper: [create_helper_slot_1$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	textfield2 = new Textfield$1({
			props: {
				variant: "outlined",
				disabled: true,
				value: "",
				label: "Outlined",
				$$slots: { helper: [create_helper_slot$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t1 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file$m, 1, 2, 32);
			add_location(div1, file$m, 6, 2, 174);
			add_location(div2, file$m, 11, 2, 331);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$m, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div3, t0);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div3, t1);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			textfield0.$set(textfield0_changes);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			textfield1.$set(textfield1_changes);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 1) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			textfield2.$set(textfield2_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$m.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$i($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Disabled", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Disabled> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Textfield: Textfield$1, HelperText });
	return [];
}

class Disabled extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$i, create_fragment$m, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Disabled",
			options,
			id: create_fragment$m.name
		});
	}
}

/* src/routes/demo/textfield/_Prefixed.svelte generated by Svelte v3.37.0 */
const file$l = "src/routes/demo/textfield/_Prefixed.svelte";

function create_fragment$l(ctx) {
	let div3;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[3](value);
	}

	let textfield0_props = {
		label: "Standard",
		prefix: "$",
		input$pattern: "\\d+(\\.\\d{2})?"
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[4](value);
	}

	let textfield1_props = {
		variant: "filled",
		label: "Filled",
		prefix: "$",
		input$pattern: "\\d+(\\.\\d{2})?"
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[5](value);
	}

	let textfield2_props = {
		variant: "outlined",
		label: "Outlined",
		prefix: "$",
		input$pattern: "\\d+(\\.\\d{2})?"
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$l, 9, 4, 172);
			add_location(div0, file$l, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$l, 20, 4, 386);
			add_location(div1, file$l, 11, 2, 225);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$l, 31, 4, 604);
			add_location(div2, file$l, 22, 2, 439);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$l, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$l.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$h($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Prefixed", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Prefixed> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, valueA, valueB, valueC });

	$$self.$inject_state = $$props => {
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
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding
	];
}

class Prefixed extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$h, create_fragment$l, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Prefixed",
			options,
			id: create_fragment$l.name
		});
	}
}

/* src/routes/demo/textfield/_Suffixed.svelte generated by Svelte v3.37.0 */
const file$k = "src/routes/demo/textfield/_Suffixed.svelte";

function create_fragment$k(ctx) {
	let div3;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[3](value);
	}

	let textfield0_props = {
		label: "Standard",
		suffix: "㎏",
		input$pattern: "\\d+"
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[4](value);
	}

	let textfield1_props = {
		variant: "filled",
		label: "Filled",
		suffix: "㎏",
		input$pattern: "\\d+"
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[5](value);
	}

	let textfield2_props = {
		variant: "outlined",
		label: "Outlined",
		suffix: "㎏",
		input$pattern: "\\d+"
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$k, 9, 4, 157);
			add_location(div0, file$k, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$k, 20, 4, 356);
			add_location(div1, file$k, 11, 2, 210);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$k, 31, 4, 559);
			add_location(div2, file$k, 22, 2, 409);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$k, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$k.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$g($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Suffixed", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Suffixed> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, valueA, valueB, valueC });

	$$self.$inject_state = $$props => {
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
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding
	];
}

class Suffixed extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$g, create_fragment$k, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Suffixed",
			options,
			id: create_fragment$k.name
		});
	}
}

/* src/routes/demo/textfield/_NoLabelOrHelperText.svelte generated by Svelte v3.37.0 */
const file$j = "src/routes/demo/textfield/_NoLabelOrHelperText.svelte";

function create_fragment$j(ctx) {
	let div3;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[3](value);
	}

	let textfield0_props = {};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[4](value);
	}

	let textfield1_props = { variant: "filled" };

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[5](value);
	}

	let textfield2_props = { variant: "outlined" };

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$j, 4, 4, 81);
			add_location(div0, file$j, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$j, 9, 4, 200);
			add_location(div1, file$j, 6, 2, 134);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$j, 14, 4, 321);
			add_location(div2, file$j, 11, 2, 253);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$j, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$j.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$f($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("NoLabelOrHelperText", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<NoLabelOrHelperText> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, valueA, valueB, valueC });

	$$self.$inject_state = $$props => {
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
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding
	];
}

class NoLabelOrHelperText extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$f, create_fragment$j, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "NoLabelOrHelperText",
			options,
			id: create_fragment$j.name
		});
	}
}

/* src/routes/demo/textfield/_PersistentHelperText.svelte generated by Svelte v3.37.0 */
const file$i = "src/routes/demo/textfield/_PersistentHelperText.svelte";

// (4:6) <HelperText persistent slot="helper">
function create_default_slot_2$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		source: "(4:6) <HelperText persistent slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (4:6) 
function create_helper_slot_2$3(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				persistent: true,
				slot: "helper",
				$$slots: { default: [create_default_slot_2$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 64) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2$3.name,
		type: "slot",
		source: "(4:6) ",
		ctx
	});

	return block;
}

// (11:6) <HelperText persistent slot="helper">
function create_default_slot_1$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_1$7.name,
		type: "slot",
		source: "(11:6) <HelperText persistent slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (11:6) 
function create_helper_slot_1$3(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				persistent: true,
				slot: "helper",
				$$slots: { default: [create_default_slot_1$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 64) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1$3.name,
		type: "slot",
		source: "(11:6) ",
		ctx
	});

	return block;
}

// (18:6) <HelperText persistent slot="helper">
function create_default_slot$d(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$d.name,
		type: "slot",
		source: "(18:6) <HelperText persistent slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (18:6) 
function create_helper_slot$7(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				persistent: true,
				slot: "helper",
				$$slots: { default: [create_default_slot$d] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 64) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$7.name,
		type: "slot",
		source: "(18:6) ",
		ctx
	});

	return block;
}

function create_fragment$i(ctx) {
	let div3;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[3](value);
	}

	let textfield0_props = {
		label: "Standard",
		$$slots: { helper: [create_helper_slot_2$3] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[4](value);
	}

	let textfield1_props = {
		variant: "filled",
		label: "Filled",
		$$slots: { helper: [create_helper_slot_1$3] },
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[5](value);
	}

	let textfield2_props = {
		variant: "outlined",
		label: "Outlined",
		$$slots: { helper: [create_helper_slot$7] },
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$i, 6, 4, 181);
			add_location(div0, file$i, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$i, 13, 4, 398);
			add_location(div1, file$i, 8, 2, 234);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$i, 20, 4, 619);
			add_location(div2, file$i, 15, 2, 451);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$i, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
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
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("PersistentHelperText", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<PersistentHelperText> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		HelperText,
		valueA,
		valueB,
		valueC
	});

	$$self.$inject_state = $$props => {
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
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding
	];
}

class PersistentHelperText extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$e, create_fragment$i, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "PersistentHelperText",
			options,
			id: create_fragment$i.name
		});
	}
}

/* packages/textfield/character-counter/CharacterCounter.svelte generated by Svelte v3.37.0 */

const file$h = "packages/textfield/character-counter/CharacterCounter.svelte";

// (11:31) {:else}
function create_else_block$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text(/*content*/ ctx[3]);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, /*content*/ ctx[3]);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*content*/ 8) set_data_dev(t, /*content*/ ctx[3]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(11:31) {:else}",
		ctx
	});

	return block;
}

// (11:2) {#if content == null}
function create_if_block$3(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], null);

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
				if (default_slot.p && dirty & /*$$scope*/ 128) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, null, null);
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
		id: create_if_block$3.name,
		type: "if",
		source: "(11:2) {#if content == null}",
		ctx
	});

	return block;
}

function create_fragment$h(ctx) {
	let div;
	let current_block_type_index;
	let if_block;
	let div_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block$3, create_else_block$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*content*/ ctx[3] == null) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	let div_levels = [
		{
			class: div_class_value = classMap$3({
				[/*className*/ ctx[1]]: true,
				"mdc-text-field-character-counter": true
			})
		},
		/*$$restProps*/ ctx[5]
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$h, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			/*div_binding*/ ctx[9](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions$3.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[4].call(null, div))
				];

				mounted = true;
			}
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
				if_block.m(div, null);
			}

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*className*/ 2 && div_class_value !== (div_class_value = classMap$3({
					[/*className*/ ctx[1]]: true,
					"mdc-text-field-character-counter": true
				}))) && { class: div_class_value },
				dirty & /*$$restProps*/ 32 && /*$$restProps*/ ctx[5]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
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
			if (detaching) detach_dev(div);
			if_blocks[current_block_type_index].d();
			/*div_binding*/ ctx[9](null);
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

function instance_1$3($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CharacterCounter", slots, ['default']);
	const forwardEvents = forwardEventsBuilder$3(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let element;
	let instance;
	let content = null;

	onMount(() => {
		instance = new MDCTextFieldCharacterCounterFoundation({
				setContent: value => {
					$$invalidate(3, content = value);
				}
			});

		dispatch$1(getElement(), "SMUI:textfield:character-counter:mount", instance);
		instance.init();

		return () => {
			dispatch$1(getElement(), "SMUI:textfield:character-counter:unmount", instance);
			instance.destroy();
		};
	});

	function getElement() {
		return element;
	}

	function div_binding($$value) {
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
		MDCTextFieldCharacterCounterFoundation,
		onMount,
		get_current_component,
		forwardEventsBuilder: forwardEventsBuilder$3,
		classMap: classMap$3,
		useActions: useActions$3,
		dispatch: dispatch$1,
		forwardEvents,
		use,
		className,
		element,
		instance,
		content,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
		if ("instance" in $$props) instance = $$new_props.instance;
		if ("content" in $$props) $$invalidate(3, content = $$new_props.content);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		element,
		content,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		div_binding
	];
}

class CharacterCounter extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance_1$3, create_fragment$h, safe_not_equal, { use: 0, class: 1, getElement: 6 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CharacterCounter",
			options,
			id: create_fragment$h.name
		});
	}

	get use() {
		throw new Error("<CharacterCounter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<CharacterCounter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<CharacterCounter>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<CharacterCounter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[6];
	}

	set getElement(value) {
		throw new Error("<CharacterCounter>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/textfield/_CharacterCount.svelte generated by Svelte v3.37.0 */
const file$g = "src/routes/demo/textfield/_CharacterCount.svelte";

// (4:6) <CharacterCounter slot="helper">
function create_default_slot_2$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("0 / 18");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "0 / 18");
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
		source: "(4:6) <CharacterCounter slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (4:6) 
function create_helper_slot_2$2(ctx) {
	let charactercounter;
	let current;

	charactercounter = new CharacterCounter({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_2$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(charactercounter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(charactercounter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(charactercounter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const charactercounter_changes = {};

			if (dirty & /*$$scope*/ 64) {
				charactercounter_changes.$$scope = { dirty, ctx };
			}

			charactercounter.$set(charactercounter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(charactercounter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(charactercounter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(charactercounter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2$2.name,
		type: "slot",
		source: "(4:6) ",
		ctx
	});

	return block;
}

// (16:6) <CharacterCounter slot="helper">
function create_default_slot_1$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("0 / 18");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "0 / 18");
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
		id: create_default_slot_1$6.name,
		type: "slot",
		source: "(16:6) <CharacterCounter slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (16:6) 
function create_helper_slot_1$2(ctx) {
	let charactercounter;
	let current;

	charactercounter = new CharacterCounter({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot_1$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(charactercounter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(charactercounter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(charactercounter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const charactercounter_changes = {};

			if (dirty & /*$$scope*/ 64) {
				charactercounter_changes.$$scope = { dirty, ctx };
			}

			charactercounter.$set(charactercounter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(charactercounter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(charactercounter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(charactercounter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1$2.name,
		type: "slot",
		source: "(16:6) ",
		ctx
	});

	return block;
}

// (28:6) <CharacterCounter slot="helper">
function create_default_slot$c(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("0 / 18");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "0 / 18");
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
		id: create_default_slot$c.name,
		type: "slot",
		source: "(28:6) <CharacterCounter slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (28:6) 
function create_helper_slot$6(ctx) {
	let charactercounter;
	let current;

	charactercounter = new CharacterCounter({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$c] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(charactercounter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(charactercounter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(charactercounter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const charactercounter_changes = {};

			if (dirty & /*$$scope*/ 64) {
				charactercounter_changes.$$scope = { dirty, ctx };
			}

			charactercounter.$set(charactercounter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(charactercounter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(charactercounter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(charactercounter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$6.name,
		type: "slot",
		source: "(28:6) ",
		ctx
	});

	return block;
}

function create_fragment$g(ctx) {
	let div3;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[3](value);
	}

	let textfield0_props = {
		label: "Standard",
		input$maxlength: "18",
		$$slots: { helper: [create_helper_slot_2$2] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[4](value);
	}

	let textfield1_props = {
		variant: "filled",
		label: "Filled",
		input$maxlength: "18",
		$$slots: { helper: [create_helper_slot_1$2] },
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[5](value);
	}

	let textfield2_props = {
		variant: "outlined",
		label: "Outlined",
		input$maxlength: "18",
		$$slots: { helper: [create_helper_slot$6] },
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$g, 6, 4, 198);
			add_location(div0, file$g, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$g, 18, 4, 461);
			add_location(div1, file$g, 8, 2, 251);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$g, 30, 4, 728);
			add_location(div2, file$g, 20, 2, 514);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$g, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
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

function instance$d($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("CharacterCount", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CharacterCount> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		CharacterCounter,
		valueA,
		valueB,
		valueC
	});

	$$self.$inject_state = $$props => {
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
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding
	];
}

class CharacterCount extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$d, create_fragment$g, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "CharacterCount",
			options,
			id: create_fragment$g.name
		});
	}
}

/* src/routes/demo/textfield/_HelperTextCharacterCount.svelte generated by Svelte v3.37.0 */
const file$f = "src/routes/demo/textfield/_HelperTextCharacterCount.svelte";

// (5:8) <HelperText>
function create_default_slot_5$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_5$4.name,
		type: "slot",
		source: "(5:8) <HelperText>",
		ctx
	});

	return block;
}

// (6:8) <CharacterCounter>
function create_default_slot_4$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("0 / 18");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "0 / 18");
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
		source: "(6:8) <CharacterCounter>",
		ctx
	});

	return block;
}

// (4:6) <svelte:fragment slot="helper">
function create_helper_slot_2$1(ctx) {
	let helpertext;
	let t;
	let charactercounter;
	let current;

	helpertext = new HelperText({
			props: {
				$$slots: { default: [create_default_slot_5$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	charactercounter = new CharacterCounter({
			props: {
				$$slots: { default: [create_default_slot_4$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
			t = space();
			create_component(charactercounter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(charactercounter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(charactercounter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 64) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
			const charactercounter_changes = {};

			if (dirty & /*$$scope*/ 64) {
				charactercounter_changes.$$scope = { dirty, ctx };
			}

			charactercounter.$set(charactercounter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			transition_in(charactercounter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			transition_out(charactercounter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
			if (detaching) detach_dev(t);
			destroy_component(charactercounter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2$1.name,
		type: "slot",
		source: "(4:6) <svelte:fragment slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (20:8) <HelperText>
function create_default_slot_3$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_3$5.name,
		type: "slot",
		source: "(20:8) <HelperText>",
		ctx
	});

	return block;
}

// (21:8) <CharacterCounter>
function create_default_slot_2$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("0 / 18");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "0 / 18");
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
		source: "(21:8) <CharacterCounter>",
		ctx
	});

	return block;
}

// (19:6) <svelte:fragment slot="helper">
function create_helper_slot_1$1(ctx) {
	let helpertext;
	let t;
	let charactercounter;
	let current;

	helpertext = new HelperText({
			props: {
				$$slots: { default: [create_default_slot_3$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	charactercounter = new CharacterCounter({
			props: {
				$$slots: { default: [create_default_slot_2$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
			t = space();
			create_component(charactercounter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(charactercounter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(charactercounter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 64) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
			const charactercounter_changes = {};

			if (dirty & /*$$scope*/ 64) {
				charactercounter_changes.$$scope = { dirty, ctx };
			}

			charactercounter.$set(charactercounter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			transition_in(charactercounter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			transition_out(charactercounter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
			if (detaching) detach_dev(t);
			destroy_component(charactercounter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1$1.name,
		type: "slot",
		source: "(19:6) <svelte:fragment slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (35:8) <HelperText>
function create_default_slot_1$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		source: "(35:8) <HelperText>",
		ctx
	});

	return block;
}

// (36:8) <CharacterCounter>
function create_default_slot$b(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("0 / 18");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "0 / 18");
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
		id: create_default_slot$b.name,
		type: "slot",
		source: "(36:8) <CharacterCounter>",
		ctx
	});

	return block;
}

// (34:6) <svelte:fragment slot="helper">
function create_helper_slot$5(ctx) {
	let helpertext;
	let t;
	let charactercounter;
	let current;

	helpertext = new HelperText({
			props: {
				$$slots: { default: [create_default_slot_1$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	charactercounter = new CharacterCounter({
			props: {
				$$slots: { default: [create_default_slot$b] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
			t = space();
			create_component(charactercounter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(charactercounter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(charactercounter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 64) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
			const charactercounter_changes = {};

			if (dirty & /*$$scope*/ 64) {
				charactercounter_changes.$$scope = { dirty, ctx };
			}

			charactercounter.$set(charactercounter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			transition_in(charactercounter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			transition_out(charactercounter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
			if (detaching) detach_dev(t);
			destroy_component(charactercounter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$5.name,
		type: "slot",
		source: "(34:6) <svelte:fragment slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

function create_fragment$f(ctx) {
	let div3;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[3](value);
	}

	let textfield0_props = {
		label: "Standard",
		input$maxlength: "18",
		$$slots: { helper: [create_helper_slot_2$1] },
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[4](value);
	}

	let textfield1_props = {
		variant: "filled",
		label: "Filled",
		input$maxlength: "18",
		$$slots: { helper: [create_helper_slot_1$1] },
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[5](value);
	}

	let textfield2_props = {
		variant: "outlined",
		label: "Outlined",
		input$maxlength: "18",
		$$slots: { helper: [create_helper_slot$5] },
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$f, 9, 4, 294);
			add_location(div0, file$f, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$f, 24, 4, 653);
			add_location(div1, file$f, 11, 2, 347);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$f, 39, 4, 1016);
			add_location(div2, file$f, 26, 2, 706);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$f, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
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

function instance$c($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("HelperTextCharacterCount", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<HelperTextCharacterCount> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		HelperText,
		CharacterCounter,
		valueA,
		valueB,
		valueC
	});

	$$self.$inject_state = $$props => {
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
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding
	];
}

class HelperTextCharacterCount extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$c, create_fragment$f, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "HelperTextCharacterCount",
			options,
			id: create_fragment$f.name
		});
	}
}

/* src/routes/demo/textfield/_BothIcons.svelte generated by Svelte v3.37.0 */
const file$e = "src/routes/demo/textfield/_BothIcons.svelte";

// (4:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_5$3(ctx) {
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
		id: create_default_slot_5$3.name,
		type: "slot",
		source: "(4:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (4:6) 
function create_leadingIcon_slot_2$1(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_5$3] },
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

			if (dirty & /*$$scope*/ 64) {
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
		id: create_leadingIcon_slot_2$1.name,
		type: "slot",
		source: "(4:6) ",
		ctx
	});

	return block;
}

// (5:6) <Icon class="material-icons" slot="trailingIcon">
function create_default_slot_4$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		id: create_default_slot_4$3.name,
		type: "slot",
		source: "(5:6) <Icon class=\\\"material-icons\\\" slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (5:6) 
function create_trailingIcon_slot_2$1(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "trailingIcon",
				$$slots: { default: [create_default_slot_4$3] },
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

			if (dirty & /*$$scope*/ 64) {
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
		id: create_trailingIcon_slot_2$1.name,
		type: "slot",
		source: "(5:6) ",
		ctx
	});

	return block;
}

// (12:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_3$4(ctx) {
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
		id: create_default_slot_3$4.name,
		type: "slot",
		source: "(12:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (12:6) 
function create_leadingIcon_slot_1$1(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_3$4] },
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

			if (dirty & /*$$scope*/ 64) {
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
		id: create_leadingIcon_slot_1$1.name,
		type: "slot",
		source: "(12:6) ",
		ctx
	});

	return block;
}

// (13:6) <Icon class="material-icons" slot="trailingIcon">
function create_default_slot_2$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		id: create_default_slot_2$4.name,
		type: "slot",
		source: "(13:6) <Icon class=\\\"material-icons\\\" slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (13:6) 
function create_trailingIcon_slot_1$1(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "trailingIcon",
				$$slots: { default: [create_default_slot_2$4] },
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

			if (dirty & /*$$scope*/ 64) {
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
		id: create_trailingIcon_slot_1$1.name,
		type: "slot",
		source: "(13:6) ",
		ctx
	});

	return block;
}

// (20:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_1$4(ctx) {
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
		id: create_default_slot_1$4.name,
		type: "slot",
		source: "(20:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (20:6) 
function create_leadingIcon_slot$2(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_1$4] },
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

			if (dirty & /*$$scope*/ 64) {
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
		source: "(20:6) ",
		ctx
	});

	return block;
}

// (21:6) <Icon class="material-icons" slot="trailingIcon">
function create_default_slot$a(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		id: create_default_slot$a.name,
		type: "slot",
		source: "(21:6) <Icon class=\\\"material-icons\\\" slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (21:6) 
function create_trailingIcon_slot$1(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "trailingIcon",
				$$slots: { default: [create_default_slot$a] },
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

			if (dirty & /*$$scope*/ 64) {
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
		id: create_trailingIcon_slot$1.name,
		type: "slot",
		source: "(21:6) ",
		ctx
	});

	return block;
}

function create_fragment$e(ctx) {
	let div3;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[3](value);
	}

	let textfield0_props = {
		label: "Standard",
		$$slots: {
			trailingIcon: [create_trailingIcon_slot_2$1],
			leadingIcon: [create_leadingIcon_slot_2$1]
		},
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[4](value);
	}

	let textfield1_props = {
		variant: "filled",
		label: "Filled",
		$$slots: {
			trailingIcon: [create_trailingIcon_slot_1$1],
			leadingIcon: [create_leadingIcon_slot_1$1]
		},
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[5](value);
	}

	let textfield2_props = {
		variant: "outlined",
		label: "Outlined",
		$$slots: {
			trailingIcon: [create_trailingIcon_slot$1],
			leadingIcon: [create_leadingIcon_slot$2]
		},
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$e, 7, 4, 249);
			add_location(div0, file$e, 1, 2, 32);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$e, 15, 4, 534);
			add_location(div1, file$e, 9, 2, 302);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$e, 23, 4, 823);
			add_location(div2, file$e, 17, 2, 587);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$e, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};

			if (dirty & /*$$scope*/ 64) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
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

function instance$b($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("BothIcons", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<BothIcons> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, Icon, valueA, valueB, valueC });

	$$self.$inject_state = $$props => {
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
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding
	];
}

class BothIcons extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$b, create_fragment$e, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "BothIcons",
			options,
			id: create_fragment$e.name
		});
	}
}

/* src/routes/demo/textfield/_ConditionalIcons.svelte generated by Svelte v3.37.0 */
const file$d = "src/routes/demo/textfield/_ConditionalIcons.svelte";

// (17:8) {#if showLeadingIcons}
function create_if_block_5(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_7$2] },
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
		id: create_if_block_5.name,
		type: "if",
		source: "(17:8) {#if showLeadingIcons}",
		ctx
	});

	return block;
}

// (18:10) <Icon class="material-icons">
function create_default_slot_7$2(ctx) {
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
		id: create_default_slot_7$2.name,
		type: "slot",
		source: "(18:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (16:6) <svelte:fragment slot="leadingIcon">
function create_leadingIcon_slot_2(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*showLeadingIcons*/ ctx[3] && create_if_block_5(ctx);

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
					if_block = create_if_block_5(ctx);
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
		source: "(16:6) <svelte:fragment slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (22:8) {#if showTrailingIcons}
function create_if_block_4(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_6$2] },
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
		id: create_if_block_4.name,
		type: "if",
		source: "(22:8) {#if showTrailingIcons}",
		ctx
	});

	return block;
}

// (23:10) <Icon class="material-icons">
function create_default_slot_6$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		id: create_default_slot_6$2.name,
		type: "slot",
		source: "(23:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (21:6) <svelte:fragment slot="trailingIcon">
function create_trailingIcon_slot_2(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*showTrailingIcons*/ ctx[4] && create_if_block_4(ctx);

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
			if (/*showTrailingIcons*/ ctx[4]) {
				if (if_block) {
					if (dirty & /*showTrailingIcons*/ 16) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block_4(ctx);
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
		id: create_trailingIcon_slot_2.name,
		type: "slot",
		source: "(21:6) <svelte:fragment slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (39:8) {#if showLeadingIcons}
function create_if_block_3(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_5$2] },
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
		id: create_if_block_3.name,
		type: "if",
		source: "(39:8) {#if showLeadingIcons}",
		ctx
	});

	return block;
}

// (40:10) <Icon class="material-icons">
function create_default_slot_5$2(ctx) {
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
		id: create_default_slot_5$2.name,
		type: "slot",
		source: "(40:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (38:6) <svelte:fragment slot="leadingIcon">
function create_leadingIcon_slot_1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*showLeadingIcons*/ ctx[3] && create_if_block_3(ctx);

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
					if_block = create_if_block_3(ctx);
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
		source: "(38:6) <svelte:fragment slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (44:8) {#if showTrailingIcons}
function create_if_block_2(ctx) {
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
		id: create_if_block_2.name,
		type: "if",
		source: "(44:8) {#if showTrailingIcons}",
		ctx
	});

	return block;
}

// (45:10) <Icon class="material-icons">
function create_default_slot_4$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		source: "(45:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (43:6) <svelte:fragment slot="trailingIcon">
function create_trailingIcon_slot_1(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*showTrailingIcons*/ ctx[4] && create_if_block_2(ctx);

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
			if (/*showTrailingIcons*/ ctx[4]) {
				if (if_block) {
					if (dirty & /*showTrailingIcons*/ 16) {
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
		id: create_trailingIcon_slot_1.name,
		type: "slot",
		source: "(43:6) <svelte:fragment slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (61:8) {#if showLeadingIcons}
function create_if_block_1(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_3$3] },
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
		source: "(61:8) {#if showLeadingIcons}",
		ctx
	});

	return block;
}

// (62:10) <Icon class="material-icons">
function create_default_slot_3$3(ctx) {
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
		id: create_default_slot_3$3.name,
		type: "slot",
		source: "(62:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (60:6) <svelte:fragment slot="leadingIcon">
function create_leadingIcon_slot$1(ctx) {
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
		id: create_leadingIcon_slot$1.name,
		type: "slot",
		source: "(60:6) <svelte:fragment slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (66:8) {#if showTrailingIcons}
function create_if_block$2(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_2$3] },
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
		id: create_if_block$2.name,
		type: "if",
		source: "(66:8) {#if showTrailingIcons}",
		ctx
	});

	return block;
}

// (67:10) <Icon class="material-icons">
function create_default_slot_2$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "delete");
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
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(67:10) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (65:6) <svelte:fragment slot="trailingIcon">
function create_trailingIcon_slot(ctx) {
	let if_block_anchor;
	let current;
	let if_block = /*showTrailingIcons*/ ctx[4] && create_if_block$2(ctx);

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
			if (/*showTrailingIcons*/ ctx[4]) {
				if (if_block) {
					if (dirty & /*showTrailingIcons*/ 16) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$2(ctx);
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
		id: create_trailingIcon_slot.name,
		type: "slot",
		source: "(65:6) <svelte:fragment slot=\\\"trailingIcon\\\">",
		ctx
	});

	return block;
}

// (77:2) <Button on:click={() => (showLeadingIcons = !showLeadingIcons)}>
function create_default_slot_1$3(ctx) {
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
		id: create_default_slot_1$3.name,
		type: "slot",
		source: "(77:2) <Button on:click={() => (showLeadingIcons = !showLeadingIcons)}>",
		ctx
	});

	return block;
}

// (80:2) <Button on:click={() => (showTrailingIcons = !showTrailingIcons)}>
function create_default_slot$9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Toggle Trailing Icons");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Toggle Trailing Icons");
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
		id: create_default_slot$9.name,
		type: "slot",
		source: "(80:2) <Button on:click={() => (showTrailingIcons = !showTrailingIcons)}>",
		ctx
	});

	return block;
}

function create_fragment$d(ctx) {
	let div3;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_value_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_value_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div4;
	let button0;
	let t12;
	let button1;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[5](value);
	}

	let textfield0_props = {
		withLeadingIcon: /*showLeadingIcons*/ ctx[3],
		withTrailingIcon: /*showTrailingIcons*/ ctx[4],
		label: "Standard",
		$$slots: {
			trailingIcon: [create_trailingIcon_slot_2],
			leadingIcon: [create_leadingIcon_slot_2]
		},
		$$scope: { ctx }
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		textfield0_props.value = /*valueA*/ ctx[0];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[6](value);
	}

	let textfield1_props = {
		withLeadingIcon: /*showLeadingIcons*/ ctx[3],
		withTrailingIcon: /*showTrailingIcons*/ ctx[4],
		variant: "filled",
		label: "Filled",
		$$slots: {
			trailingIcon: [create_trailingIcon_slot_1],
			leadingIcon: [create_leadingIcon_slot_1]
		},
		$$scope: { ctx }
	};

	if (/*valueB*/ ctx[1] !== void 0) {
		textfield1_props.value = /*valueB*/ ctx[1];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[7](value);
	}

	let textfield2_props = {
		withLeadingIcon: /*showLeadingIcons*/ ctx[3],
		withTrailingIcon: /*showTrailingIcons*/ ctx[4],
		variant: "outlined",
		label: "Outlined",
		$$slots: {
			trailingIcon: [create_trailingIcon_slot],
			leadingIcon: [create_leadingIcon_slot$1]
		},
		$$scope: { ctx }
	};

	if (/*valueC*/ ctx[2] !== void 0) {
		textfield2_props.value = /*valueC*/ ctx[2];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	button0 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot_1$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[8]);

	button1 = new Button_1({
			props: {
				$$slots: { default: [create_default_slot$9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*click_handler_1*/ ctx[9]);

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[1]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[2]);
			t11 = space();
			div4 = element("div");
			create_component(button0.$$.fragment);
			t12 = space();
			create_component(button1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[1]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[2]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", {});
			var div4_nodes = children(div4);
			claim_component(button0.$$.fragment, div4_nodes);
			t12 = claim_space(div4_nodes);
			claim_component(button1.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$d, 27, 4, 798);
			add_location(div0, file$d, 8, 2, 283);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$d, 49, 4, 1387);
			add_location(div1, file$d, 29, 2, 851);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$d, 71, 4, 1980);
			add_location(div2, file$d, 51, 2, 1440);
			attr_dev(div3, "class", "columns margins");
			add_location(div3, file$d, 7, 0, 251);
			add_location(div4, file$d, 75, 0, 2039);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div3, t3);
			append_dev(div3, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div3, t7);
			append_dev(div3, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, div4, anchor);
			mount_component(button0, div4, null);
			append_dev(div4, t12);
			mount_component(button1, div4, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};
			if (dirty & /*showLeadingIcons*/ 8) textfield0_changes.withLeadingIcon = /*showLeadingIcons*/ ctx[3];
			if (dirty & /*showTrailingIcons*/ 16) textfield0_changes.withTrailingIcon = /*showTrailingIcons*/ ctx[4];

			if (dirty & /*$$scope, showTrailingIcons, showLeadingIcons*/ 1048) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueA*/ 1) {
				updating_value = true;
				textfield0_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};
			if (dirty & /*showLeadingIcons*/ 8) textfield1_changes.withLeadingIcon = /*showLeadingIcons*/ ctx[3];
			if (dirty & /*showTrailingIcons*/ 16) textfield1_changes.withTrailingIcon = /*showTrailingIcons*/ ctx[4];

			if (dirty & /*$$scope, showTrailingIcons, showLeadingIcons*/ 1048) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_1 && dirty & /*valueB*/ 2) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueB*/ ctx[1];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty & /*valueB*/ 2) set_data_dev(t6, /*valueB*/ ctx[1]);
			const textfield2_changes = {};
			if (dirty & /*showLeadingIcons*/ 8) textfield2_changes.withLeadingIcon = /*showLeadingIcons*/ ctx[3];
			if (dirty & /*showTrailingIcons*/ 16) textfield2_changes.withTrailingIcon = /*showTrailingIcons*/ ctx[4];

			if (dirty & /*$$scope, showTrailingIcons, showLeadingIcons*/ 1048) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value_2 && dirty & /*valueC*/ 4) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueC*/ ctx[2];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty & /*valueC*/ 4) set_data_dev(t10, /*valueC*/ ctx[2]);
			const button0_changes = {};

			if (dirty & /*$$scope*/ 1024) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 1024) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(div4);
			destroy_component(button0);
			destroy_component(button1);
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

function instance$a($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ConditionalIcons", slots, []);
	let valueA = "";
	let valueB = "";
	let valueC = "";
	let showLeadingIcons = true;
	let showTrailingIcons = true;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ConditionalIcons> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield1_value_binding(value) {
		valueB = value;
		$$invalidate(1, valueB);
	}

	function textfield2_value_binding(value) {
		valueC = value;
		$$invalidate(2, valueC);
	}

	const click_handler = () => $$invalidate(3, showLeadingIcons = !showLeadingIcons);
	const click_handler_1 = () => $$invalidate(4, showTrailingIcons = !showTrailingIcons);

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		Icon,
		Button: Button_1,
		valueA,
		valueB,
		valueC,
		showLeadingIcons,
		showTrailingIcons
	});

	$$self.$inject_state = $$props => {
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("valueB" in $$props) $$invalidate(1, valueB = $$props.valueB);
		if ("valueC" in $$props) $$invalidate(2, valueC = $$props.valueC);
		if ("showLeadingIcons" in $$props) $$invalidate(3, showLeadingIcons = $$props.showLeadingIcons);
		if ("showTrailingIcons" in $$props) $$invalidate(4, showTrailingIcons = $$props.showTrailingIcons);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		valueB,
		valueC,
		showLeadingIcons,
		showTrailingIcons,
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding,
		click_handler,
		click_handler_1
	];
}

class ConditionalIcons extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$a, create_fragment$d, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ConditionalIcons",
			options,
			id: create_fragment$d.name
		});
	}
}

/* src/routes/demo/textfield/_Textarea.svelte generated by Svelte v3.37.0 */
const file$c = "src/routes/demo/textfield/_Textarea.svelte";

// (3:4) <HelperText slot="helper">
function create_default_slot$8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$8.name,
		type: "slot",
		source: "(3:4) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (3:4) 
function create_helper_slot$4(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 4) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$4.name,
		type: "slot",
		source: "(3:4) ",
		ctx
	});

	return block;
}

function create_fragment$c(ctx) {
	let div;
	let textfield;
	let updating_value;
	let current;

	function textfield_value_binding(value) {
		/*textfield_value_binding*/ ctx[1](value);
	}

	let textfield_props = {
		textarea: true,
		label: "Label",
		$$slots: { helper: [create_helper_slot$4] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		textfield_props.value = /*value*/ ctx[0];
	}

	textfield = new Textfield$1({ props: textfield_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield, "value", textfield_value_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(textfield.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(textfield.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "margins");
			add_location(div, file$c, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(textfield, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield_changes = {};

			if (dirty & /*$$scope*/ 4) {
				textfield_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				textfield_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield.$set(textfield_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(textfield);
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

function instance$9($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Textarea", slots, []);
	let value = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Textarea> was created with unknown prop '${key}'`);
	});

	function textfield_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, HelperText, value });

	$$self.$inject_state = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value, textfield_value_binding];
}

class Textarea extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$9, create_fragment$c, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Textarea",
			options,
			id: create_fragment$c.name
		});
	}
}

/* src/routes/demo/textfield/_TextareaCharacterCount.svelte generated by Svelte v3.37.0 */
const file$b = "src/routes/demo/textfield/_TextareaCharacterCount.svelte";

// (3:4) <CharacterCounter slot="internalCounter">
function create_default_slot$7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("0 / 100");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "0 / 100");
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
		id: create_default_slot$7.name,
		type: "slot",
		source: "(3:4) <CharacterCounter slot=\\\"internalCounter\\\">",
		ctx
	});

	return block;
}

// (3:4) 
function create_internalCounter_slot(ctx) {
	let charactercounter;
	let current;

	charactercounter = new CharacterCounter({
			props: {
				slot: "internalCounter",
				$$slots: { default: [create_default_slot$7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(charactercounter.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(charactercounter.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(charactercounter, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const charactercounter_changes = {};

			if (dirty & /*$$scope*/ 4) {
				charactercounter_changes.$$scope = { dirty, ctx };
			}

			charactercounter.$set(charactercounter_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(charactercounter.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(charactercounter.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(charactercounter, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_internalCounter_slot.name,
		type: "slot",
		source: "(3:4) ",
		ctx
	});

	return block;
}

function create_fragment$b(ctx) {
	let div;
	let textfield;
	let updating_value;
	let current;

	function textfield_value_binding(value) {
		/*textfield_value_binding*/ ctx[1](value);
	}

	let textfield_props = {
		textarea: true,
		input$maxlength: "100",
		label: "Label",
		$$slots: {
			internalCounter: [create_internalCounter_slot]
		},
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		textfield_props.value = /*value*/ ctx[0];
	}

	textfield = new Textfield$1({ props: textfield_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield, "value", textfield_value_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(textfield.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(textfield.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "margins");
			add_location(div, file$b, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(textfield, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield_changes = {};

			if (dirty & /*$$scope*/ 4) {
				textfield_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				textfield_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield.$set(textfield_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(textfield);
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

function instance$8($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("TextareaCharacterCount", slots, []);
	let value = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TextareaCharacterCount> was created with unknown prop '${key}'`);
	});

	function textfield_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, CharacterCounter, value });

	$$self.$inject_state = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value, textfield_value_binding];
}

class TextareaCharacterCount extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$8, create_fragment$b, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TextareaCharacterCount",
			options,
			id: create_fragment$b.name
		});
	}
}

/* src/routes/demo/textfield/_FullWidth.svelte generated by Svelte v3.37.0 */
const file$a = "src/routes/demo/textfield/_FullWidth.svelte";

// (8:4) <HelperText slot="helper">
function create_default_slot$6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$6.name,
		type: "slot",
		source: "(8:4) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (8:4) 
function create_helper_slot$3(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 4) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$3.name,
		type: "slot",
		source: "(8:4) ",
		ctx
	});

	return block;
}

function create_fragment$a(ctx) {
	let div;
	let textfield;
	let updating_value;
	let current;

	function textfield_value_binding(value) {
		/*textfield_value_binding*/ ctx[1](value);
	}

	let textfield_props = {
		style: "width: 100%;",
		helperLine$style: "width: 100%;",
		label: "Label",
		$$slots: { helper: [create_helper_slot$3] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		textfield_props.value = /*value*/ ctx[0];
	}

	textfield = new Textfield$1({ props: textfield_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield, "value", textfield_value_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(textfield.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(textfield.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "margins");
			add_location(div, file$a, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(textfield, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield_changes = {};

			if (dirty & /*$$scope*/ 4) {
				textfield_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				textfield_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield.$set(textfield_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(textfield);
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

function instance$7($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("FullWidth", slots, []);
	let value = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FullWidth> was created with unknown prop '${key}'`);
	});

	function textfield_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, HelperText, value });

	$$self.$inject_state = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value, textfield_value_binding];
}

class FullWidth extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$a, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FullWidth",
			options,
			id: create_fragment$a.name
		});
	}
}

/* src/routes/demo/textfield/_FullWidthTextarea.svelte generated by Svelte v3.37.0 */
const file$9 = "src/routes/demo/textfield/_FullWidthTextarea.svelte";

// (9:4) <HelperText slot="helper">
function create_default_slot$5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$5.name,
		type: "slot",
		source: "(9:4) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (9:4) 
function create_helper_slot$2(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 4) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$2.name,
		type: "slot",
		source: "(9:4) ",
		ctx
	});

	return block;
}

function create_fragment$9(ctx) {
	let div;
	let textfield;
	let updating_value;
	let current;

	function textfield_value_binding(value) {
		/*textfield_value_binding*/ ctx[1](value);
	}

	let textfield_props = {
		style: "width: 100%;",
		helperLine$style: "width: 100%;",
		textarea: true,
		label: "Label",
		$$slots: { helper: [create_helper_slot$2] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		textfield_props.value = /*value*/ ctx[0];
	}

	textfield = new Textfield$1({ props: textfield_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield, "value", textfield_value_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(textfield.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(textfield.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "margins");
			add_location(div, file$9, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(textfield, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield_changes = {};

			if (dirty & /*$$scope*/ 4) {
				textfield_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				textfield_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield.$set(textfield_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(textfield);
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

function instance$6($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("FullWidthTextarea", slots, []);
	let value = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FullWidthTextarea> was created with unknown prop '${key}'`);
	});

	function textfield_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, HelperText, value });

	$$self.$inject_state = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value, textfield_value_binding];
}

class FullWidthTextarea extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$9, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FullWidthTextarea",
			options,
			id: create_fragment$9.name
		});
	}
}

/* src/routes/demo/textfield/_FixedSizeTextarea.svelte generated by Svelte v3.37.0 */
const file$8 = "src/routes/demo/textfield/_FixedSizeTextarea.svelte";

// (10:4) <HelperText slot="helper">
function create_default_slot$4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot$4.name,
		type: "slot",
		source: "(10:4) <HelperText slot=\\\"helper\\\">",
		ctx
	});

	return block;
}

// (10:4) 
function create_helper_slot$1(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				slot: "helper",
				$$slots: { default: [create_default_slot$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty & /*$$scope*/ 4) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot$1.name,
		type: "slot",
		source: "(10:4) ",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
	let div;
	let textfield;
	let updating_value;
	let current;

	function textfield_value_binding(value) {
		/*textfield_value_binding*/ ctx[1](value);
	}

	let textfield_props = {
		textarea: true,
		label: "Label",
		input$rows: "4",
		input$cols: "24",
		input$resizable: false,
		$$slots: { helper: [create_helper_slot$1] },
		$$scope: { ctx }
	};

	if (/*value*/ ctx[0] !== void 0) {
		textfield_props.value = /*value*/ ctx[0];
	}

	textfield = new Textfield$1({ props: textfield_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield, "value", textfield_value_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(textfield.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(textfield.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "margins");
			add_location(div, file$8, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(textfield, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield_changes = {};

			if (dirty & /*$$scope*/ 4) {
				textfield_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				textfield_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield.$set(textfield_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(textfield);
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

function instance$5($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("FixedSizeTextarea", slots, []);
	let value = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FixedSizeTextarea> was created with unknown prop '${key}'`);
	});

	function textfield_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	$$self.$capture_state = () => ({ Textfield: Textfield$1, HelperText, value });

	$$self.$inject_state = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value, textfield_value_binding];
}

class FixedSizeTextarea extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$8, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FixedSizeTextarea",
			options,
			id: create_fragment$8.name
		});
	}
}

/* src/routes/demo/textfield/_ElementsInLabel.svelte generated by Svelte v3.37.0 */
const file$7 = "src/routes/demo/textfield/_ElementsInLabel.svelte";

// (4:6) <CommonIcon         class="material-icons"         style="font-size: 1em; line-height: normal; vertical-align: top;"         >
function create_default_slot$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("email");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "email");
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
		source: "(4:6) <CommonIcon         class=\\\"material-icons\\\"         style=\\\"font-size: 1em; line-height: normal; vertical-align: top;\\\"         >",
		ctx
	});

	return block;
}

// (3:4) <svelte:fragment slot="label">
function create_label_slot$1(ctx) {
	let commonicon;
	let t;
	let current;

	commonicon = new CommonIcon({
			props: {
				class: "material-icons",
				style: "font-size: 1em; line-height: normal; vertical-align: top;",
				$$slots: { default: [create_default_slot$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(commonicon.$$.fragment);
			t = text(" Email");
		},
		l: function claim(nodes) {
			claim_component(commonicon.$$.fragment, nodes);
			t = claim_text(nodes, " Email");
		},
		m: function mount(target, anchor) {
			mount_component(commonicon, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const commonicon_changes = {};

			if (dirty & /*$$scope*/ 4) {
				commonicon_changes.$$scope = { dirty, ctx };
			}

			commonicon.$set(commonicon_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(commonicon.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(commonicon.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(commonicon, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_label_slot$1.name,
		type: "slot",
		source: "(3:4) <svelte:fragment slot=\\\"label\\\">",
		ctx
	});

	return block;
}

function create_fragment$7(ctx) {
	let div;
	let textfield;
	let updating_value;
	let current;

	function textfield_value_binding(value) {
		/*textfield_value_binding*/ ctx[1](value);
	}

	let textfield_props = {
		type: "email",
		$$slots: { label: [create_label_slot$1] },
		$$scope: { ctx }
	};

	if (/*valueElementsLabel*/ ctx[0] !== void 0) {
		textfield_props.value = /*valueElementsLabel*/ ctx[0];
	}

	textfield = new Textfield$1({ props: textfield_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield, "value", textfield_value_binding));

	const block = {
		c: function create() {
			div = element("div");
			create_component(textfield.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(textfield.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "margins");
			add_location(div, file$7, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(textfield, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield_changes = {};

			if (dirty & /*$$scope*/ 4) {
				textfield_changes.$$scope = { dirty, ctx };
			}

			if (!updating_value && dirty & /*valueElementsLabel*/ 1) {
				updating_value = true;
				textfield_changes.value = /*valueElementsLabel*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			textfield.$set(textfield_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(textfield);
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

function instance$4($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ElementsInLabel", slots, []);
	let valueElementsLabel = "";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ElementsInLabel> was created with unknown prop '${key}'`);
	});

	function textfield_value_binding(value) {
		valueElementsLabel = value;
		$$invalidate(0, valueElementsLabel);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		CommonIcon,
		valueElementsLabel
	});

	$$self.$inject_state = $$props => {
		if ("valueElementsLabel" in $$props) $$invalidate(0, valueElementsLabel = $$props.valueElementsLabel);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [valueElementsLabel, textfield_value_binding];
}

class ElementsInLabel extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$7, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ElementsInLabel",
			options,
			id: create_fragment$7.name
		});
	}
}

/* src/routes/demo/textfield/_DifferentTypes.svelte generated by Svelte v3.37.0 */
const file$6 = "src/routes/demo/textfield/_DifferentTypes.svelte";

function create_fragment$6(ctx) {
	let div4;
	let div0;
	let textfield0;
	let updating_value;
	let t0;
	let div1;
	let textfield1;
	let updating_value_1;
	let t1;
	let div2;
	let textfield2;
	let updating_value_2;
	let t2;
	let div3;
	let textfield3;
	let updating_files;
	let current;

	function textfield0_value_binding(value) {
		/*textfield0_value_binding*/ ctx[4](value);
	}

	let textfield0_props = { label: "Number", type: "number" };

	if (/*valueTypeNumber*/ ctx[1] !== void 0) {
		textfield0_props.value = /*valueTypeNumber*/ ctx[1];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "value", textfield0_value_binding));

	function textfield1_value_binding(value) {
		/*textfield1_value_binding*/ ctx[5](value);
	}

	let textfield1_props = {
		label: "Number with Step",
		type: "number",
		input$step: "2"
	};

	if (/*valueTypeNumberStep*/ ctx[2] !== void 0) {
		textfield1_props.value = /*valueTypeNumberStep*/ ctx[2];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "value", textfield1_value_binding));

	function textfield2_value_binding(value) {
		/*textfield2_value_binding*/ ctx[6](value);
	}

	let textfield2_props = {
		label: "DateTime-Local",
		type: "datetime-local"
	};

	if (/*valueTypeDate*/ ctx[3] !== void 0) {
		textfield2_props.value = /*valueTypeDate*/ ctx[3];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "value", textfield2_value_binding));

	function textfield3_files_binding(value) {
		/*textfield3_files_binding*/ ctx[7](value);
	}

	let textfield3_props = { label: "File", type: "file" };

	if (/*valueTypeFiles*/ ctx[0] !== void 0) {
		textfield3_props.files = /*valueTypeFiles*/ ctx[0];
	}

	textfield3 = new Textfield$1({ props: textfield3_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield3, "files", textfield3_files_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t1 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t2 = space();
			div3 = element("div");
			create_component(textfield3.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			div2_nodes.forEach(detach_dev);
			t2 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			claim_component(textfield3.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div0, file$6, 1, 2, 32);
			add_location(div1, file$6, 5, 2, 126);
			add_location(div2, file$6, 14, 2, 277);
			add_location(div3, file$6, 22, 2, 407);
			attr_dev(div4, "class", "columns margins");
			add_location(div4, file$6, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(textfield0, div0, null);
			append_dev(div4, t0);
			append_dev(div4, div1);
			mount_component(textfield1, div1, null);
			append_dev(div4, t1);
			append_dev(div4, div2);
			mount_component(textfield2, div2, null);
			append_dev(div4, t2);
			append_dev(div4, div3);
			mount_component(textfield3, div3, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const textfield0_changes = {};

			if (!updating_value && dirty & /*valueTypeNumber*/ 2) {
				updating_value = true;
				textfield0_changes.value = /*valueTypeNumber*/ ctx[1];
				add_flush_callback(() => updating_value = false);
			}

			textfield0.$set(textfield0_changes);
			const textfield1_changes = {};

			if (!updating_value_1 && dirty & /*valueTypeNumberStep*/ 4) {
				updating_value_1 = true;
				textfield1_changes.value = /*valueTypeNumberStep*/ ctx[2];
				add_flush_callback(() => updating_value_1 = false);
			}

			textfield1.$set(textfield1_changes);
			const textfield2_changes = {};

			if (!updating_value_2 && dirty & /*valueTypeDate*/ 8) {
				updating_value_2 = true;
				textfield2_changes.value = /*valueTypeDate*/ ctx[3];
				add_flush_callback(() => updating_value_2 = false);
			}

			textfield2.$set(textfield2_changes);
			const textfield3_changes = {};

			if (!updating_files && dirty & /*valueTypeFiles*/ 1) {
				updating_files = true;
				textfield3_changes.files = /*valueTypeFiles*/ ctx[0];
				add_flush_callback(() => updating_files = false);
			}

			textfield3.$set(textfield3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			transition_in(textfield3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			transition_out(textfield3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
			destroy_component(textfield3);
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

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("DifferentTypes", slots, []);
	let valueTypeNumber = 0;
	let valueTypeNumberStep = 0;
	let valueTypeDate = "";
	let valueTypeFiles = [];
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<DifferentTypes> was created with unknown prop '${key}'`);
	});

	function textfield0_value_binding(value) {
		valueTypeNumber = value;
		$$invalidate(1, valueTypeNumber);
	}

	function textfield1_value_binding(value) {
		valueTypeNumberStep = value;
		$$invalidate(2, valueTypeNumberStep);
	}

	function textfield2_value_binding(value) {
		valueTypeDate = value;
		$$invalidate(3, valueTypeDate);
	}

	function textfield3_files_binding(value) {
		valueTypeFiles = value;
		$$invalidate(0, valueTypeFiles);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		valueTypeNumber,
		valueTypeNumberStep,
		valueTypeDate,
		valueTypeFiles
	});

	$$self.$inject_state = $$props => {
		if ("valueTypeNumber" in $$props) $$invalidate(1, valueTypeNumber = $$props.valueTypeNumber);
		if ("valueTypeNumberStep" in $$props) $$invalidate(2, valueTypeNumberStep = $$props.valueTypeNumberStep);
		if ("valueTypeDate" in $$props) $$invalidate(3, valueTypeDate = $$props.valueTypeDate);
		if ("valueTypeFiles" in $$props) $$invalidate(0, valueTypeFiles = $$props.valueTypeFiles);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*valueTypeFiles*/ 1) {
			// Note: the change and input events fire before the `files` prop is updated.
			if (valueTypeFiles.length) {
				alert("Selected " + valueTypeFiles.length + " file(s).");
			}
		}
	};

	return [
		valueTypeFiles,
		valueTypeNumber,
		valueTypeNumberStep,
		valueTypeDate,
		textfield0_value_binding,
		textfield1_value_binding,
		textfield2_value_binding,
		textfield3_files_binding
	];
}

class DifferentTypes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$6, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DifferentTypes",
			options,
			id: create_fragment$6.name
		});
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

var extendStatics$2 = function(d, b) {
    extendStatics$2 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics$2(d, b);
};

function __extends$2(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics$2(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign$2 = function() {
    __assign$2 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
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
var MDCFoundation$2 = /** @class */ (function () {
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
var cssClasses$2 = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_REQUIRED: 'mdc-floating-label--required',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
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
var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    __extends$2(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, __assign$2(__assign$2({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
        if (isRequired) {
            this.adapter.addClass(LABEL_REQUIRED);
        }
        else {
            this.adapter.removeClass(LABEL_REQUIRED);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(MDCFoundation$2));

// Match modifiers on DOM events.
const oldModifierRegex$2 = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
// Match modifiers on other events.
const newModifierRegex$2 = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;

function forwardEventsBuilder$2(component) {
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
    const oldModifierMatch = eventType.match(oldModifierRegex$2);
    const newModifierMatch = eventType.match(newModifierRegex$2);
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
      const oldModifierMatch = eventType.match(oldModifierRegex$2);
      const newModifierMatch = eventType.match(newModifierRegex$2);
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

function classMap$2(classObj) {
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

function useActions$2(node, actions) {
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

/* packages/floating-label/FloatingLabel.svelte generated by Svelte v3.37.0 */

const file$5 = "packages/floating-label/FloatingLabel.svelte";

// (19:0) {:else}
function create_else_block(ctx) {
	let label;
	let label_class_value;
	let label_style_value;
	let label_for_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

	let label_levels = [
		{
			class: label_class_value = classMap$2({
				[/*className*/ ctx[3]]: true,
				"mdc-floating-label": true,
				"mdc-floating-label--float-above": /*floatAbove*/ ctx[0],
				"mdc-floating-label--required": /*required*/ ctx[1],
				.../*internalClasses*/ ctx[8]
			})
		},
		{
			style: label_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func_1).concat([/*style*/ ctx[4]]).join(" ")
		},
		{
			for: label_for_value = /*forId*/ ctx[5] || (/*inputProps*/ ctx[11]
			? /*inputProps*/ ctx[11].id
			: null)
		},
		/*$$restProps*/ ctx[12]
	];

	let label_data = {};

	for (let i = 0; i < label_levels.length; i += 1) {
		label_data = assign(label_data, label_levels[i]);
	}

	const block = {
		c: function create() {
			label = element("label");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			label = claim_element(nodes, "LABEL", { class: true, style: true, for: true });
			var label_nodes = children(label);
			if (default_slot) default_slot.l(label_nodes);
			label_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(label, label_data);
			add_location(label, file$5, 19, 2, 494);
		},
		m: function mount(target, anchor) {
			insert_dev(target, label, anchor);

			if (default_slot) {
				default_slot.m(label, null);
			}

			/*label_binding*/ ctx[24](label);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions$2.call(null, label, /*use*/ ctx[2])),
					action_destroyer(/*forwardEvents*/ ctx[10].call(null, label))
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2097152) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[21], dirty, null, null);
				}
			}

			set_attributes(label, label_data = get_spread_update(label_levels, [
				(!current || dirty & /*className, floatAbove, required, internalClasses*/ 267 && label_class_value !== (label_class_value = classMap$2({
					[/*className*/ ctx[3]]: true,
					"mdc-floating-label": true,
					"mdc-floating-label--float-above": /*floatAbove*/ ctx[0],
					"mdc-floating-label--required": /*required*/ ctx[1],
					.../*internalClasses*/ ctx[8]
				}))) && { class: label_class_value },
				(!current || dirty & /*internalStyles, style*/ 528 && label_style_value !== (label_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func_1).concat([/*style*/ ctx[4]]).join(" "))) && { style: label_style_value },
				(!current || dirty & /*forId*/ 32 && label_for_value !== (label_for_value = /*forId*/ ctx[5] || (/*inputProps*/ ctx[11]
				? /*inputProps*/ ctx[11].id
				: null))) && { for: label_for_value },
				dirty & /*$$restProps*/ 4096 && /*$$restProps*/ ctx[12]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 4) useActions_action.update.call(null, /*use*/ ctx[2]);
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
			if (detaching) detach_dev(label);
			if (default_slot) default_slot.d(detaching);
			/*label_binding*/ ctx[24](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(19:0) {:else}",
		ctx
	});

	return block;
}

// (1:0) {#if wrapped}
function create_if_block$1(ctx) {
	let span;
	let span_class_value;
	let span_style_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

	let span_levels = [
		{
			class: span_class_value = classMap$2({
				[/*className*/ ctx[3]]: true,
				"mdc-floating-label": true,
				"mdc-floating-label--float-above": /*floatAbove*/ ctx[0],
				"mdc-floating-label--required": /*required*/ ctx[1],
				.../*internalClasses*/ ctx[8]
			})
		},
		{
			style: span_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$2).concat([/*style*/ ctx[4]]).join(" ")
		},
		/*$$restProps*/ ctx[12]
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
			span = claim_element(nodes, "SPAN", { class: true, style: true });
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(span, span_data);
			add_location(span, file$5, 1, 2, 16);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			/*span_binding*/ ctx[23](span);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions$2.call(null, span, /*use*/ ctx[2])),
					action_destroyer(/*forwardEvents*/ ctx[10].call(null, span))
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2097152) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[21], dirty, null, null);
				}
			}

			set_attributes(span, span_data = get_spread_update(span_levels, [
				(!current || dirty & /*className, floatAbove, required, internalClasses*/ 267 && span_class_value !== (span_class_value = classMap$2({
					[/*className*/ ctx[3]]: true,
					"mdc-floating-label": true,
					"mdc-floating-label--float-above": /*floatAbove*/ ctx[0],
					"mdc-floating-label--required": /*required*/ ctx[1],
					.../*internalClasses*/ ctx[8]
				}))) && { class: span_class_value },
				(!current || dirty & /*internalStyles, style*/ 528 && span_style_value !== (span_style_value = Object.entries(/*internalStyles*/ ctx[9]).map(func$2).concat([/*style*/ ctx[4]]).join(" "))) && { style: span_style_value },
				dirty & /*$$restProps*/ 4096 && /*$$restProps*/ ctx[12]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 4) useActions_action.update.call(null, /*use*/ ctx[2]);
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
			/*span_binding*/ ctx[23](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(1:0) {#if wrapped}",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block$1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*wrapped*/ ctx[6]) return 0;
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
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

const func$2 = ([name, value]) => `${name}: ${value};`;
const func_1 = ([name, value]) => `${name}: ${value};`;

function instance_1$2($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","for","floatAbove","required","wrapped","shake","float","setRequired","getWidth","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("FloatingLabel", slots, ['default']);
	const forwardEvents = forwardEventsBuilder$2(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { for: forId = null } = $$props;
	let { floatAbove = false } = $$props;
	let { required = false } = $$props;
	let { wrapped = false } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};
	let inputProps = getContext("SMUI:generic:input:props") || {};
	let previousFloatAbove = floatAbove;
	let previousRequired = required;

	onMount(() => {
		$$invalidate(18, instance = new MDCFloatingLabelFoundation({
				addClass,
				removeClass,
				getWidth: () => {
					const el = getElement();
					const clone = el.cloneNode(true);
					el.parentNode.appendChild(clone);
					clone.classList.add("smui-floating-label--remove-transition");
					clone.classList.add("smui-floating-label--force-size");
					clone.classList.remove("mdc-floating-label--float-above");
					const scrollWidth = clone.scrollWidth;
					el.parentNode.removeChild(clone);
					return scrollWidth;
				},
				registerInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
				deregisterInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
			}));

		const accessor = {
			get element() {
				return getElement();
			},
			addStyle,
			removeStyle
		};

		dispatch(element, "SMUI:floating-label:mount", accessor);
		instance.init();

		return () => {
			dispatch(element, "SMUI:floating-label:unmount", accessor);
			instance.destroy();
		};
	});

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

	function removeStyle(name) {
		if (name in internalStyles) {
			delete internalStyles[name];
			$$invalidate(9, internalStyles);
		}
	}

	function shake(shouldShake) {
		instance.shake(shouldShake);
	}

	function float(shouldFloat) {
		$$invalidate(0, floatAbove = shouldFloat);
	}

	function setRequired(isRequired) {
		$$invalidate(1, required = isRequired);
	}

	function getWidth() {
		return instance.getWidth();
	}

	function getElement() {
		return element;
	}

	function span_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	function label_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(7, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(2, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(3, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(4, style = $$new_props.style);
		if ("for" in $$new_props) $$invalidate(5, forId = $$new_props.for);
		if ("floatAbove" in $$new_props) $$invalidate(0, floatAbove = $$new_props.floatAbove);
		if ("required" in $$new_props) $$invalidate(1, required = $$new_props.required);
		if ("wrapped" in $$new_props) $$invalidate(6, wrapped = $$new_props.wrapped);
		if ("$$scope" in $$new_props) $$invalidate(21, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCFloatingLabelFoundation,
		onMount,
		getContext,
		get_current_component,
		forwardEventsBuilder: forwardEventsBuilder$2,
		classMap: classMap$2,
		useActions: useActions$2,
		dispatch,
		forwardEvents,
		use,
		className,
		style,
		forId,
		floatAbove,
		required,
		wrapped,
		element,
		instance,
		internalClasses,
		internalStyles,
		inputProps,
		previousFloatAbove,
		previousRequired,
		addClass,
		removeClass,
		addStyle,
		removeStyle,
		shake,
		float,
		setRequired,
		getWidth,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(2, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(3, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(4, style = $$new_props.style);
		if ("forId" in $$props) $$invalidate(5, forId = $$new_props.forId);
		if ("floatAbove" in $$props) $$invalidate(0, floatAbove = $$new_props.floatAbove);
		if ("required" in $$props) $$invalidate(1, required = $$new_props.required);
		if ("wrapped" in $$props) $$invalidate(6, wrapped = $$new_props.wrapped);
		if ("element" in $$props) $$invalidate(7, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(18, instance = $$new_props.instance);
		if ("internalClasses" in $$props) $$invalidate(8, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(9, internalStyles = $$new_props.internalStyles);
		if ("inputProps" in $$props) $$invalidate(11, inputProps = $$new_props.inputProps);
		if ("previousFloatAbove" in $$props) $$invalidate(19, previousFloatAbove = $$new_props.previousFloatAbove);
		if ("previousRequired" in $$props) $$invalidate(20, previousRequired = $$new_props.previousRequired);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*previousFloatAbove, floatAbove, instance*/ 786433) {
			if (previousFloatAbove !== floatAbove) {
				$$invalidate(19, previousFloatAbove = floatAbove);
				instance.float(floatAbove);
			}
		}

		if ($$self.$$.dirty & /*previousRequired, required, instance*/ 1310722) {
			if (previousRequired !== required) {
				$$invalidate(20, previousRequired = required);
				instance.setRequired(required);
			}
		}
	};

	return [
		floatAbove,
		required,
		use,
		className,
		style,
		forId,
		wrapped,
		element,
		internalClasses,
		internalStyles,
		forwardEvents,
		inputProps,
		$$restProps,
		shake,
		float,
		setRequired,
		getWidth,
		getElement,
		instance,
		previousFloatAbove,
		previousRequired,
		$$scope,
		slots,
		span_binding,
		label_binding
	];
}

class FloatingLabel extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1$2, create_fragment$5, safe_not_equal, {
			use: 2,
			class: 3,
			style: 4,
			for: 5,
			floatAbove: 0,
			required: 1,
			wrapped: 6,
			shake: 13,
			float: 14,
			setRequired: 15,
			getWidth: 16,
			getElement: 17
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FloatingLabel",
			options,
			id: create_fragment$5.name
		});
	}

	get use() {
		throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get for() {
		throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set for(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get floatAbove() {
		throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set floatAbove(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get required() {
		throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set required(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get wrapped() {
		throw new Error("<FloatingLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set wrapped(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get shake() {
		return this.$$.ctx[13];
	}

	set shake(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get float() {
		return this.$$.ctx[14];
	}

	set float(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setRequired() {
		return this.$$.ctx[15];
	}

	set setRequired(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getWidth() {
		return this.$$.ctx[16];
	}

	set getWidth(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[17];
	}

	set getElement(value) {
		throw new Error("<FloatingLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
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
var cssClasses$1 = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
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
var MDCLineRippleFoundation = /** @class */ (function (_super) {
    __extends$1(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, __assign$1(__assign$1({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter.addClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
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

/* packages/line-ripple/LineRipple.svelte generated by Svelte v3.37.0 */

const file$4 = "packages/line-ripple/LineRipple.svelte";

function create_fragment$4(ctx) {
	let div;
	let div_class_value;
	let div_style_value;
	let useActions_action;
	let mounted;
	let dispose;

	let div_levels = [
		{
			class: div_class_value = classMap$1({
				[/*className*/ ctx[1]]: true,
				"mdc-line-ripple": true,
				"mdc-line-ripple--active": /*active*/ ctx[3],
				.../*internalClasses*/ ctx[5]
			})
		},
		{
			style: div_style_value = Object.entries(/*internalStyles*/ ctx[6]).map(func$1).concat([/*style*/ ctx[2]]).join(" ")
		},
		/*$$restProps*/ ctx[8]
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true });
			children(div).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$4, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			/*div_binding*/ ctx[13](div);

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions$1.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[7].call(null, div))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			set_attributes(div, div_data = get_spread_update(div_levels, [
				dirty & /*className, active, internalClasses*/ 42 && div_class_value !== (div_class_value = classMap$1({
					[/*className*/ ctx[1]]: true,
					"mdc-line-ripple": true,
					"mdc-line-ripple--active": /*active*/ ctx[3],
					.../*internalClasses*/ ctx[5]
				})) && { class: div_class_value },
				dirty & /*internalStyles, style*/ 68 && div_style_value !== (div_style_value = Object.entries(/*internalStyles*/ ctx[6]).map(func$1).concat([/*style*/ ctx[2]]).join(" ")) && { style: div_style_value },
				dirty & /*$$restProps*/ 256 && /*$$restProps*/ ctx[8]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			/*div_binding*/ ctx[13](null);
			mounted = false;
			run_all(dispose);
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

const func$1 = ([name, value]) => `${name}: ${value};`;

function instance_1$1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","style","active","activate","deactivate","setRippleCenter","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("LineRipple", slots, []);
	const forwardEvents = forwardEventsBuilder$1(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { style = "" } = $$props;
	let { active = false } = $$props;
	let element;
	let instance;
	let internalClasses = {};
	let internalStyles = {};

	onMount(() => {
		instance = new MDCLineRippleFoundation({
				addClass,
				removeClass,
				hasClass,
				setStyle: addStyle,
				registerEventHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
				deregisterEventHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
			});

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
			$$invalidate(5, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(5, internalClasses[className] = false, internalClasses);
		}
	}

	function addStyle(name, value) {
		if (internalStyles[name] != value) {
			if (value === "" || value == null) {
				delete internalStyles[name];
				$$invalidate(6, internalStyles);
			} else {
				$$invalidate(6, internalStyles[name] = value, internalStyles);
			}
		}
	}

	function activate() {
		instance.activate();
	}

	function deactivate() {
		instance.deactivate();
	}

	function setRippleCenter(xCoordinate) {
		instance.setRippleCenter(xCoordinate);
	}

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(4, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("style" in $$new_props) $$invalidate(2, style = $$new_props.style);
		if ("active" in $$new_props) $$invalidate(3, active = $$new_props.active);
	};

	$$self.$capture_state = () => ({
		MDCLineRippleFoundation,
		onMount,
		get_current_component,
		forwardEventsBuilder: forwardEventsBuilder$1,
		classMap: classMap$1,
		useActions: useActions$1,
		forwardEvents,
		use,
		className,
		style,
		active,
		element,
		instance,
		internalClasses,
		internalStyles,
		hasClass,
		addClass,
		removeClass,
		addStyle,
		activate,
		deactivate,
		setRippleCenter,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("style" in $$props) $$invalidate(2, style = $$new_props.style);
		if ("active" in $$props) $$invalidate(3, active = $$new_props.active);
		if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
		if ("instance" in $$props) instance = $$new_props.instance;
		if ("internalClasses" in $$props) $$invalidate(5, internalClasses = $$new_props.internalClasses);
		if ("internalStyles" in $$props) $$invalidate(6, internalStyles = $$new_props.internalStyles);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		style,
		active,
		element,
		internalClasses,
		internalStyles,
		forwardEvents,
		$$restProps,
		activate,
		deactivate,
		setRippleCenter,
		getElement,
		div_binding
	];
}

class LineRipple extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1$1, create_fragment$4, safe_not_equal, {
			use: 0,
			class: 1,
			style: 2,
			active: 3,
			activate: 9,
			deactivate: 10,
			setRippleCenter: 11,
			getElement: 12
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LineRipple",
			options,
			id: create_fragment$4.name
		});
	}

	get use() {
		throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get style() {
		throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set style(value) {
		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get active() {
		throw new Error("<LineRipple>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set active(value) {
		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get activate() {
		return this.$$.ctx[9];
	}

	set activate(value) {
		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get deactivate() {
		return this.$$.ctx[10];
	}

	set deactivate(value) {
		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get setRippleCenter() {
		return this.$$.ctx[11];
	}

	set setRippleCenter(value) {
		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[12];
	}

	set getElement(value) {
		throw new Error("<LineRipple>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
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
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
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
var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    __extends(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
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

/* packages/notched-outline/NotchedOutline.svelte generated by Svelte v3.37.0 */

const file$3 = "packages/notched-outline/NotchedOutline.svelte";

// (17:2) {#if !noLabel}
function create_if_block(ctx) {
	let div;
	let div_style_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[14].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[13], null);

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
			attr_dev(div, "class", "mdc-notched-outline__notch");
			attr_dev(div, "style", div_style_value = Object.entries(/*notchStyles*/ ctx[7]).map(func).join(" "));
			add_location(div, file$3, 17, 4, 500);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 8192) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[13], dirty, null, null);
				}
			}

			if (!current || dirty & /*notchStyles*/ 128 && div_style_value !== (div_style_value = Object.entries(/*notchStyles*/ ctx[7]).map(func).join(" "))) {
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
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(17:2) {#if !noLabel}",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let div2;
	let div0;
	let t0;
	let t1;
	let div1;
	let div2_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	let if_block = !/*noLabel*/ ctx[3] && create_if_block(ctx);

	let div2_levels = [
		{
			class: div2_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-notched-outline": true,
				"mdc-notched-outline--notched": /*notched*/ ctx[2],
				"mdc-notched-outline--no-label": /*noLabel*/ ctx[3],
				.../*internalClasses*/ ctx[6]
			})
		},
		/*$$restProps*/ ctx[9]
	];

	let div2_data = {};

	for (let i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign(div2_data, div2_levels[i]);
	}

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			t0 = space();
			if (if_block) if_block.c();
			t1 = space();
			div1 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			if (if_block) if_block.l(div2_nodes);
			t1 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			children(div1).forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "mdc-notched-outline__leading");
			add_location(div0, file$3, 15, 2, 434);
			attr_dev(div1, "class", "mdc-notched-outline__trailing");
			add_location(div1, file$3, 26, 2, 703);
			set_attributes(div2, div2_data);
			add_location(div2, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div2, t0);
			if (if_block) if_block.m(div2, null);
			append_dev(div2, t1);
			append_dev(div2, div1);
			/*div2_binding*/ ctx[15](div2);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div2, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[8].call(null, div2)),
					listen_dev(div2, "SMUI:floating-label:mount", /*SMUI_floating_label_mount_handler*/ ctx[16], false, false, false),
					listen_dev(div2, "SMUI:floating-label:unmount", /*SMUI_floating_label_unmount_handler*/ ctx[17], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (!/*noLabel*/ ctx[3]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*noLabel*/ 8) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div2, t1);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			set_attributes(div2, div2_data = get_spread_update(div2_levels, [
				(!current || dirty & /*className, notched, noLabel, internalClasses*/ 78 && div2_class_value !== (div2_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-notched-outline": true,
					"mdc-notched-outline--notched": /*notched*/ ctx[2],
					"mdc-notched-outline--no-label": /*noLabel*/ ctx[3],
					.../*internalClasses*/ ctx[6]
				}))) && { class: div2_class_value },
				dirty & /*$$restProps*/ 512 && /*$$restProps*/ ctx[9]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
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
			if (detaching) detach_dev(div2);
			if (if_block) if_block.d();
			/*div2_binding*/ ctx[15](null);
			mounted = false;
			run_all(dispose);
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

const func = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","notched","noLabel","notch","closeNotch","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("NotchedOutline", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { notched = false } = $$props;
	let { noLabel = false } = $$props;
	let element;
	let instance;
	let floatingLabel;
	let internalClasses = {};
	let notchStyles = {};

	onMount(() => {
		instance = new MDCNotchedOutlineFoundation({
				addClass,
				removeClass,
				setNotchWidthProperty: width => addNotchStyle("width", width + "px"),
				removeNotchWidthProperty: () => removeNotchStyle("width")
			});

		instance.init();

		return () => {
			instance.destroy();
		};
	});

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(6, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(6, internalClasses[className] = false, internalClasses);
		}
	}

	function addNotchStyle(name, value) {
		if (notchStyles[name] != value) {
			if (value === "" || value == null) {
				delete notchStyles[name];
				$$invalidate(7, notchStyles);
			} else {
				$$invalidate(7, notchStyles[name] = value, notchStyles);
			}
		}
	}

	function removeNotchStyle(name) {
		if (name in notchStyles) {
			delete notchStyles[name];
			$$invalidate(7, notchStyles);
		}
	}

	function notch(notchWidth) {
		instance.notch(notchWidth);
	}

	function closeNotch() {
		instance.closeNotch();
	}

	function getElement() {
		return element;
	}

	function div2_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(5, element);
		});
	}

	const SMUI_floating_label_mount_handler = event => $$invalidate(4, floatingLabel = event.detail);
	const SMUI_floating_label_unmount_handler = () => $$invalidate(4, floatingLabel = undefined);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("notched" in $$new_props) $$invalidate(2, notched = $$new_props.notched);
		if ("noLabel" in $$new_props) $$invalidate(3, noLabel = $$new_props.noLabel);
		if ("$$scope" in $$new_props) $$invalidate(13, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCNotchedOutlineFoundation,
		onMount,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		forwardEvents,
		use,
		className,
		notched,
		noLabel,
		element,
		instance,
		floatingLabel,
		internalClasses,
		notchStyles,
		addClass,
		removeClass,
		addNotchStyle,
		removeNotchStyle,
		notch,
		closeNotch,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("notched" in $$props) $$invalidate(2, notched = $$new_props.notched);
		if ("noLabel" in $$props) $$invalidate(3, noLabel = $$new_props.noLabel);
		if ("element" in $$props) $$invalidate(5, element = $$new_props.element);
		if ("instance" in $$props) instance = $$new_props.instance;
		if ("floatingLabel" in $$props) $$invalidate(4, floatingLabel = $$new_props.floatingLabel);
		if ("internalClasses" in $$props) $$invalidate(6, internalClasses = $$new_props.internalClasses);
		if ("notchStyles" in $$props) $$invalidate(7, notchStyles = $$new_props.notchStyles);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*floatingLabel*/ 16) {
			if (floatingLabel) {
				floatingLabel.addStyle("transition-duration", "0s");
				addClass("mdc-notched-outline--upgraded");

				requestAnimationFrame(() => {
					floatingLabel.removeStyle("transition-duration");
				});
			} else {
				removeClass("mdc-notched-outline--upgraded");
			}
		}
	};

	return [
		use,
		className,
		notched,
		noLabel,
		floatingLabel,
		element,
		internalClasses,
		notchStyles,
		forwardEvents,
		$$restProps,
		notch,
		closeNotch,
		getElement,
		$$scope,
		slots,
		div2_binding,
		SMUI_floating_label_mount_handler,
		SMUI_floating_label_unmount_handler
	];
}

class NotchedOutline extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance_1, create_fragment$3, safe_not_equal, {
			use: 0,
			class: 1,
			notched: 2,
			noLabel: 3,
			notch: 10,
			closeNotch: 11,
			getElement: 12
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "NotchedOutline",
			options,
			id: create_fragment$3.name
		});
	}

	get use() {
		throw new Error("<NotchedOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<NotchedOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get notched() {
		throw new Error("<NotchedOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set notched(value) {
		throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get noLabel() {
		throw new Error("<NotchedOutline>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set noLabel(value) {
		throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get notch() {
		return this.$$.ctx[10];
	}

	set notch(value) {
		throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get closeNotch() {
		return this.$$.ctx[11];
	}

	set closeNotch(value) {
		throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[12];
	}

	set getElement(value) {
		throw new Error("<NotchedOutline>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/textfield/_ManualSetup.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/textfield/_ManualSetup.svelte";

// (20:4) <Textfield       bind:input={inputA}       bind:floatingLabel={floatingLabelA}       bind:lineRipple={lineRippleA}     >
function create_default_slot_14$1(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding(value) {
		/*input_value_binding*/ ctx[19](value);
	}

	let input_props = {
		id: "input-manual-a",
		"aria-controls": "helper-text-manual-a",
		"aria-describedby": "helper-text-manual-a"
	};

	if (/*valueA*/ ctx[0] !== void 0) {
		input_props.value = /*valueA*/ ctx[0];
	}

	input = new Input({ props: input_props, $$inline: true });
	/*input_binding*/ ctx[18](input);
	binding_callbacks.push(() => bind(input, "value", input_value_binding));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(input.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const input_changes = {};

			if (!updating_value && dirty[0] & /*valueA*/ 1) {
				updating_value = true;
				input_changes.value = /*valueA*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*input_binding*/ ctx[18](null);
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_14$1.name,
		type: "slot",
		source: "(20:4) <Textfield       bind:input={inputA}       bind:floatingLabel={floatingLabelA}       bind:lineRipple={lineRippleA}     >",
		ctx
	});

	return block;
}

// (25:6) <FloatingLabel         bind:this={floatingLabelA}         for="input-manual-a"         slot="label">
function create_default_slot_13$1(ctx) {
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
		id: create_default_slot_13$1.name,
		type: "slot",
		source: "(25:6) <FloatingLabel         bind:this={floatingLabelA}         for=\\\"input-manual-a\\\"         slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (25:6) 
function create_label_slot_3(ctx) {
	let floatinglabel;
	let current;

	let floatinglabel_props = {
		for: "input-manual-a",
		slot: "label",
		$$slots: { default: [create_default_slot_13$1] },
		$$scope: { ctx }
	};

	floatinglabel = new FloatingLabel({
			props: floatinglabel_props,
			$$inline: true
		});

	/*floatinglabel_binding*/ ctx[17](floatinglabel);

	const block = {
		c: function create() {
			create_component(floatinglabel.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(floatinglabel.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(floatinglabel, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const floatinglabel_changes = {};

			if (dirty[1] & /*$$scope*/ 8192) {
				floatinglabel_changes.$$scope = { dirty, ctx };
			}

			floatinglabel.$set(floatinglabel_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(floatinglabel.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(floatinglabel.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*floatinglabel_binding*/ ctx[17](null);
			destroy_component(floatinglabel, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_label_slot_3.name,
		type: "slot",
		source: "(25:6) ",
		ctx
	});

	return block;
}

// (37:6) 
function create_ripple_slot_1(ctx) {
	let lineripple;
	let current;
	let lineripple_props = { slot: "ripple" };
	lineripple = new LineRipple({ props: lineripple_props, $$inline: true });
	/*lineripple_binding*/ ctx[16](lineripple);

	const block = {
		c: function create() {
			create_component(lineripple.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(lineripple.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(lineripple, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const lineripple_changes = {};
			lineripple.$set(lineripple_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(lineripple.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(lineripple.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*lineripple_binding*/ ctx[16](null);
			destroy_component(lineripple, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_ripple_slot_1.name,
		type: "slot",
		source: "(37:6) ",
		ctx
	});

	return block;
}

// (38:6) <HelperText id="helper-text-manual-a" slot="helper"         >
function create_default_slot_12$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_12$1.name,
		type: "slot",
		source: "(38:6) <HelperText id=\\\"helper-text-manual-a\\\" slot=\\\"helper\\\"         >",
		ctx
	});

	return block;
}

// (38:6) 
function create_helper_slot_3(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				id: "helper-text-manual-a",
				slot: "helper",
				$$slots: { default: [create_default_slot_12$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty[1] & /*$$scope*/ 8192) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_3.name,
		type: "slot",
		source: "(38:6) ",
		ctx
	});

	return block;
}

// (46:4) <Textfield       bind:input={inputB}       bind:floatingLabel={floatingLabelB}       bind:lineRipple={lineRippleB}       variant="filled"     >
function create_default_slot_11$1(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding_1(value) {
		/*input_value_binding_1*/ ctx[26](value);
	}

	let input_props = {
		id: "input-manual-b",
		"aria-controls": "helper-text-manual-b",
		"aria-describedby": "helper-text-manual-b"
	};

	if (/*valueB*/ ctx[4] !== void 0) {
		input_props.value = /*valueB*/ ctx[4];
	}

	input = new Input({ props: input_props, $$inline: true });
	/*input_binding_1*/ ctx[25](input);
	binding_callbacks.push(() => bind(input, "value", input_value_binding_1));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(input.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const input_changes = {};

			if (!updating_value && dirty[0] & /*valueB*/ 16) {
				updating_value = true;
				input_changes.value = /*valueB*/ ctx[4];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*input_binding_1*/ ctx[25](null);
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_11$1.name,
		type: "slot",
		source: "(46:4) <Textfield       bind:input={inputB}       bind:floatingLabel={floatingLabelB}       bind:lineRipple={lineRippleB}       variant=\\\"filled\\\"     >",
		ctx
	});

	return block;
}

// (52:6) <FloatingLabel         bind:this={floatingLabelB}         for="input-manual-b"         slot="label">
function create_default_slot_10$1(ctx) {
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
		id: create_default_slot_10$1.name,
		type: "slot",
		source: "(52:6) <FloatingLabel         bind:this={floatingLabelB}         for=\\\"input-manual-b\\\"         slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (52:6) 
function create_label_slot_2(ctx) {
	let floatinglabel;
	let current;

	let floatinglabel_props = {
		for: "input-manual-b",
		slot: "label",
		$$slots: { default: [create_default_slot_10$1] },
		$$scope: { ctx }
	};

	floatinglabel = new FloatingLabel({
			props: floatinglabel_props,
			$$inline: true
		});

	/*floatinglabel_binding_1*/ ctx[24](floatinglabel);

	const block = {
		c: function create() {
			create_component(floatinglabel.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(floatinglabel.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(floatinglabel, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const floatinglabel_changes = {};

			if (dirty[1] & /*$$scope*/ 8192) {
				floatinglabel_changes.$$scope = { dirty, ctx };
			}

			floatinglabel.$set(floatinglabel_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(floatinglabel.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(floatinglabel.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*floatinglabel_binding_1*/ ctx[24](null);
			destroy_component(floatinglabel, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_label_slot_2.name,
		type: "slot",
		source: "(52:6) ",
		ctx
	});

	return block;
}

// (64:6) 
function create_ripple_slot(ctx) {
	let lineripple;
	let current;
	let lineripple_props = { slot: "ripple" };
	lineripple = new LineRipple({ props: lineripple_props, $$inline: true });
	/*lineripple_binding_1*/ ctx[23](lineripple);

	const block = {
		c: function create() {
			create_component(lineripple.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(lineripple.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(lineripple, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const lineripple_changes = {};
			lineripple.$set(lineripple_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(lineripple.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(lineripple.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*lineripple_binding_1*/ ctx[23](null);
			destroy_component(lineripple, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_ripple_slot.name,
		type: "slot",
		source: "(64:6) ",
		ctx
	});

	return block;
}

// (65:6) <HelperText id="helper-text-manual-b" slot="helper"         >
function create_default_slot_9$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		id: create_default_slot_9$1.name,
		type: "slot",
		source: "(65:6) <HelperText id=\\\"helper-text-manual-b\\\" slot=\\\"helper\\\"         >",
		ctx
	});

	return block;
}

// (65:6) 
function create_helper_slot_2(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				id: "helper-text-manual-b",
				slot: "helper",
				$$slots: { default: [create_default_slot_9$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty[1] & /*$$scope*/ 8192) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_2.name,
		type: "slot",
		source: "(65:6) ",
		ctx
	});

	return block;
}

// (73:4) <Textfield       bind:input={inputC}       bind:notchedOutline={notchedOutlineC}       bind:floatingLabel={floatingLabelC}       variant="outlined"     >
function create_default_slot_8$1(ctx) {
	let input;
	let updating_value;
	let current;

	function input_value_binding_2(value) {
		/*input_value_binding_2*/ ctx[33](value);
	}

	let input_props = {
		id: "input-manual-c",
		"aria-controls": "helper-text-manual-c",
		"aria-describedby": "helper-text-manual-c"
	};

	if (/*valueC*/ ctx[8] !== void 0) {
		input_props.value = /*valueC*/ ctx[8];
	}

	input = new Input({ props: input_props, $$inline: true });
	/*input_binding_2*/ ctx[32](input);
	binding_callbacks.push(() => bind(input, "value", input_value_binding_2));

	const block = {
		c: function create() {
			create_component(input.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(input.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const input_changes = {};

			if (!updating_value && dirty[0] & /*valueC*/ 256) {
				updating_value = true;
				input_changes.value = /*valueC*/ ctx[8];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*input_binding_2*/ ctx[32](null);
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_8$1.name,
		type: "slot",
		source: "(73:4) <Textfield       bind:input={inputC}       bind:notchedOutline={notchedOutlineC}       bind:floatingLabel={floatingLabelC}       variant=\\\"outlined\\\"     >",
		ctx
	});

	return block;
}

// (80:8) <FloatingLabel bind:this={floatingLabelC} for="input-manual-c"           >
function create_default_slot_7$1(ctx) {
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
		id: create_default_slot_7$1.name,
		type: "slot",
		source: "(80:8) <FloatingLabel bind:this={floatingLabelC} for=\\\"input-manual-c\\\"           >",
		ctx
	});

	return block;
}

// (79:6) <NotchedOutline bind:this={notchedOutlineC} slot="label">
function create_default_slot_6$1(ctx) {
	let floatinglabel;
	let current;

	let floatinglabel_props = {
		for: "input-manual-c",
		$$slots: { default: [create_default_slot_7$1] },
		$$scope: { ctx }
	};

	floatinglabel = new FloatingLabel({
			props: floatinglabel_props,
			$$inline: true
		});

	/*floatinglabel_binding_2*/ ctx[30](floatinglabel);

	const block = {
		c: function create() {
			create_component(floatinglabel.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(floatinglabel.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(floatinglabel, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const floatinglabel_changes = {};

			if (dirty[1] & /*$$scope*/ 8192) {
				floatinglabel_changes.$$scope = { dirty, ctx };
			}

			floatinglabel.$set(floatinglabel_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(floatinglabel.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(floatinglabel.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*floatinglabel_binding_2*/ ctx[30](null);
			destroy_component(floatinglabel, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6$1.name,
		type: "slot",
		source: "(79:6) <NotchedOutline bind:this={notchedOutlineC} slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (79:6) 
function create_label_slot_1(ctx) {
	let notchedoutline;
	let current;

	let notchedoutline_props = {
		slot: "label",
		$$slots: { default: [create_default_slot_6$1] },
		$$scope: { ctx }
	};

	notchedoutline = new NotchedOutline({
			props: notchedoutline_props,
			$$inline: true
		});

	/*notchedoutline_binding*/ ctx[31](notchedoutline);

	const block = {
		c: function create() {
			create_component(notchedoutline.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(notchedoutline.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(notchedoutline, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const notchedoutline_changes = {};

			if (dirty[0] & /*floatingLabelC*/ 2048 | dirty[1] & /*$$scope*/ 8192) {
				notchedoutline_changes.$$scope = { dirty, ctx };
			}

			notchedoutline.$set(notchedoutline_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(notchedoutline.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(notchedoutline.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*notchedoutline_binding*/ ctx[31](null);
			destroy_component(notchedoutline, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_label_slot_1.name,
		type: "slot",
		source: "(79:6) ",
		ctx
	});

	return block;
}

// (84:6) <Icon class="material-icons" slot="leadingIcon">
function create_default_slot_5$1(ctx) {
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
		id: create_default_slot_5$1.name,
		type: "slot",
		source: "(84:6) <Icon class=\\\"material-icons\\\" slot=\\\"leadingIcon\\\">",
		ctx
	});

	return block;
}

// (84:6) 
function create_leadingIcon_slot(ctx) {
	let icon;
	let current;

	icon = new Icon({
			props: {
				class: "material-icons",
				slot: "leadingIcon",
				$$slots: { default: [create_default_slot_5$1] },
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

			if (dirty[1] & /*$$scope*/ 8192) {
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
		id: create_leadingIcon_slot.name,
		type: "slot",
		source: "(84:6) ",
		ctx
	});

	return block;
}

// (92:6) <HelperText id="helper-text-manual-c" slot="helper"         >
function create_default_slot_4$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		source: "(92:6) <HelperText id=\\\"helper-text-manual-c\\\" slot=\\\"helper\\\"         >",
		ctx
	});

	return block;
}

// (92:6) 
function create_helper_slot_1(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				id: "helper-text-manual-c",
				slot: "helper",
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty[1] & /*$$scope*/ 8192) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot_1.name,
		type: "slot",
		source: "(92:6) ",
		ctx
	});

	return block;
}

// (100:4) <Textfield       bind:input={inputD}       bind:notchedOutline={notchedOutlineD}       bind:floatingLabel={floatingLabelD}       textarea     >
function create_default_slot_3$2(ctx) {
	let textarea;
	let updating_value;
	let current;

	function textarea_value_binding(value) {
		/*textarea_value_binding*/ ctx[40](value);
	}

	let textarea_props = {
		id: "input-manual-d",
		"aria-controls": "helper-text-manual-d",
		"aria-describedby": "helper-text-manual-d"
	};

	if (/*valueD*/ ctx[12] !== void 0) {
		textarea_props.value = /*valueD*/ ctx[12];
	}

	textarea = new Textarea$1({ props: textarea_props, $$inline: true });
	/*textarea_binding*/ ctx[39](textarea);
	binding_callbacks.push(() => bind(textarea, "value", textarea_value_binding));

	const block = {
		c: function create() {
			create_component(textarea.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(textarea.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(textarea, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const textarea_changes = {};

			if (!updating_value && dirty[0] & /*valueD*/ 4096) {
				updating_value = true;
				textarea_changes.value = /*valueD*/ ctx[12];
				add_flush_callback(() => updating_value = false);
			}

			textarea.$set(textarea_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textarea.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textarea.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*textarea_binding*/ ctx[39](null);
			destroy_component(textarea, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$2.name,
		type: "slot",
		source: "(100:4) <Textfield       bind:input={inputD}       bind:notchedOutline={notchedOutlineD}       bind:floatingLabel={floatingLabelD}       textarea     >",
		ctx
	});

	return block;
}

// (107:8) <FloatingLabel bind:this={floatingLabelD} for="input-manual-d"           >
function create_default_slot_2$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Textarea");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Textarea");
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
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(107:8) <FloatingLabel bind:this={floatingLabelD} for=\\\"input-manual-d\\\"           >",
		ctx
	});

	return block;
}

// (106:6) <NotchedOutline bind:this={notchedOutlineD} slot="label">
function create_default_slot_1$2(ctx) {
	let floatinglabel;
	let current;

	let floatinglabel_props = {
		for: "input-manual-d",
		$$slots: { default: [create_default_slot_2$2] },
		$$scope: { ctx }
	};

	floatinglabel = new FloatingLabel({
			props: floatinglabel_props,
			$$inline: true
		});

	/*floatinglabel_binding_3*/ ctx[37](floatinglabel);

	const block = {
		c: function create() {
			create_component(floatinglabel.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(floatinglabel.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(floatinglabel, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const floatinglabel_changes = {};

			if (dirty[1] & /*$$scope*/ 8192) {
				floatinglabel_changes.$$scope = { dirty, ctx };
			}

			floatinglabel.$set(floatinglabel_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(floatinglabel.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(floatinglabel.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*floatinglabel_binding_3*/ ctx[37](null);
			destroy_component(floatinglabel, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$2.name,
		type: "slot",
		source: "(106:6) <NotchedOutline bind:this={notchedOutlineD} slot=\\\"label\\\">",
		ctx
	});

	return block;
}

// (106:6) 
function create_label_slot(ctx) {
	let notchedoutline;
	let current;

	let notchedoutline_props = {
		slot: "label",
		$$slots: { default: [create_default_slot_1$2] },
		$$scope: { ctx }
	};

	notchedoutline = new NotchedOutline({
			props: notchedoutline_props,
			$$inline: true
		});

	/*notchedoutline_binding_1*/ ctx[38](notchedoutline);

	const block = {
		c: function create() {
			create_component(notchedoutline.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(notchedoutline.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(notchedoutline, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const notchedoutline_changes = {};

			if (dirty[0] & /*floatingLabelD*/ 32768 | dirty[1] & /*$$scope*/ 8192) {
				notchedoutline_changes.$$scope = { dirty, ctx };
			}

			notchedoutline.$set(notchedoutline_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(notchedoutline.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(notchedoutline.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			/*notchedoutline_binding_1*/ ctx[38](null);
			destroy_component(notchedoutline, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_label_slot.name,
		type: "slot",
		source: "(106:6) ",
		ctx
	});

	return block;
}

// (118:6) <HelperText id="helper-text-manual-d" slot="helper"         >
function create_default_slot$2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Helper Text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Helper Text");
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
		source: "(118:6) <HelperText id=\\\"helper-text-manual-d\\\" slot=\\\"helper\\\"         >",
		ctx
	});

	return block;
}

// (118:6) 
function create_helper_slot(ctx) {
	let helpertext;
	let current;

	helpertext = new HelperText({
			props: {
				id: "helper-text-manual-d",
				slot: "helper",
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(helpertext.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(helpertext.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(helpertext, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const helpertext_changes = {};

			if (dirty[1] & /*$$scope*/ 8192) {
				helpertext_changes.$$scope = { dirty, ctx };
			}

			helpertext.$set(helpertext_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(helpertext.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(helpertext.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(helpertext, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_helper_slot.name,
		type: "slot",
		source: "(118:6) ",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div4;
	let div0;
	let textfield0;
	let updating_input;
	let updating_floatingLabel;
	let updating_lineRipple;
	let t0;
	let pre0;
	let t1;
	let t2;
	let t3;
	let div1;
	let textfield1;
	let updating_input_1;
	let updating_floatingLabel_1;
	let updating_lineRipple_1;
	let t4;
	let pre1;
	let t5;
	let t6;
	let t7;
	let div2;
	let textfield2;
	let updating_input_2;
	let updating_notchedOutline;
	let updating_floatingLabel_2;
	let t8;
	let pre2;
	let t9;
	let t10;
	let t11;
	let div3;
	let textfield3;
	let updating_input_3;
	let updating_notchedOutline_1;
	let updating_floatingLabel_3;
	let t12;
	let pre3;
	let t13;
	let t14;
	let current;

	function textfield0_input_binding(value) {
		/*textfield0_input_binding*/ ctx[20](value);
	}

	function textfield0_floatingLabel_binding(value) {
		/*textfield0_floatingLabel_binding*/ ctx[21](value);
	}

	function textfield0_lineRipple_binding(value) {
		/*textfield0_lineRipple_binding*/ ctx[22](value);
	}

	let textfield0_props = {
		$$slots: {
			helper: [create_helper_slot_3],
			ripple: [create_ripple_slot_1],
			label: [create_label_slot_3],
			default: [create_default_slot_14$1]
		},
		$$scope: { ctx }
	};

	if (/*inputA*/ ctx[1] !== void 0) {
		textfield0_props.input = /*inputA*/ ctx[1];
	}

	if (/*floatingLabelA*/ ctx[2] !== void 0) {
		textfield0_props.floatingLabel = /*floatingLabelA*/ ctx[2];
	}

	if (/*lineRippleA*/ ctx[3] !== void 0) {
		textfield0_props.lineRipple = /*lineRippleA*/ ctx[3];
	}

	textfield0 = new Textfield$1({ props: textfield0_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield0, "input", textfield0_input_binding));
	binding_callbacks.push(() => bind(textfield0, "floatingLabel", textfield0_floatingLabel_binding));
	binding_callbacks.push(() => bind(textfield0, "lineRipple", textfield0_lineRipple_binding));

	function textfield1_input_binding(value) {
		/*textfield1_input_binding*/ ctx[27](value);
	}

	function textfield1_floatingLabel_binding(value) {
		/*textfield1_floatingLabel_binding*/ ctx[28](value);
	}

	function textfield1_lineRipple_binding(value) {
		/*textfield1_lineRipple_binding*/ ctx[29](value);
	}

	let textfield1_props = {
		variant: "filled",
		$$slots: {
			helper: [create_helper_slot_2],
			ripple: [create_ripple_slot],
			label: [create_label_slot_2],
			default: [create_default_slot_11$1]
		},
		$$scope: { ctx }
	};

	if (/*inputB*/ ctx[5] !== void 0) {
		textfield1_props.input = /*inputB*/ ctx[5];
	}

	if (/*floatingLabelB*/ ctx[6] !== void 0) {
		textfield1_props.floatingLabel = /*floatingLabelB*/ ctx[6];
	}

	if (/*lineRippleB*/ ctx[7] !== void 0) {
		textfield1_props.lineRipple = /*lineRippleB*/ ctx[7];
	}

	textfield1 = new Textfield$1({ props: textfield1_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield1, "input", textfield1_input_binding));
	binding_callbacks.push(() => bind(textfield1, "floatingLabel", textfield1_floatingLabel_binding));
	binding_callbacks.push(() => bind(textfield1, "lineRipple", textfield1_lineRipple_binding));

	function textfield2_input_binding(value) {
		/*textfield2_input_binding*/ ctx[34](value);
	}

	function textfield2_notchedOutline_binding(value) {
		/*textfield2_notchedOutline_binding*/ ctx[35](value);
	}

	function textfield2_floatingLabel_binding(value) {
		/*textfield2_floatingLabel_binding*/ ctx[36](value);
	}

	let textfield2_props = {
		variant: "outlined",
		$$slots: {
			helper: [create_helper_slot_1],
			leadingIcon: [create_leadingIcon_slot],
			label: [create_label_slot_1],
			default: [create_default_slot_8$1]
		},
		$$scope: { ctx }
	};

	if (/*inputC*/ ctx[9] !== void 0) {
		textfield2_props.input = /*inputC*/ ctx[9];
	}

	if (/*notchedOutlineC*/ ctx[10] !== void 0) {
		textfield2_props.notchedOutline = /*notchedOutlineC*/ ctx[10];
	}

	if (/*floatingLabelC*/ ctx[11] !== void 0) {
		textfield2_props.floatingLabel = /*floatingLabelC*/ ctx[11];
	}

	textfield2 = new Textfield$1({ props: textfield2_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield2, "input", textfield2_input_binding));
	binding_callbacks.push(() => bind(textfield2, "notchedOutline", textfield2_notchedOutline_binding));
	binding_callbacks.push(() => bind(textfield2, "floatingLabel", textfield2_floatingLabel_binding));

	function textfield3_input_binding(value) {
		/*textfield3_input_binding*/ ctx[41](value);
	}

	function textfield3_notchedOutline_binding(value) {
		/*textfield3_notchedOutline_binding*/ ctx[42](value);
	}

	function textfield3_floatingLabel_binding(value) {
		/*textfield3_floatingLabel_binding*/ ctx[43](value);
	}

	let textfield3_props = {
		textarea: true,
		$$slots: {
			helper: [create_helper_slot],
			label: [create_label_slot],
			default: [create_default_slot_3$2]
		},
		$$scope: { ctx }
	};

	if (/*inputD*/ ctx[13] !== void 0) {
		textfield3_props.input = /*inputD*/ ctx[13];
	}

	if (/*notchedOutlineD*/ ctx[14] !== void 0) {
		textfield3_props.notchedOutline = /*notchedOutlineD*/ ctx[14];
	}

	if (/*floatingLabelD*/ ctx[15] !== void 0) {
		textfield3_props.floatingLabel = /*floatingLabelD*/ ctx[15];
	}

	textfield3 = new Textfield$1({ props: textfield3_props, $$inline: true });
	binding_callbacks.push(() => bind(textfield3, "input", textfield3_input_binding));
	binding_callbacks.push(() => bind(textfield3, "notchedOutline", textfield3_notchedOutline_binding));
	binding_callbacks.push(() => bind(textfield3, "floatingLabel", textfield3_floatingLabel_binding));

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			create_component(textfield0.$$.fragment);
			t0 = space();
			pre0 = element("pre");
			t1 = text("Value: ");
			t2 = text(/*valueA*/ ctx[0]);
			t3 = space();
			div1 = element("div");
			create_component(textfield1.$$.fragment);
			t4 = space();
			pre1 = element("pre");
			t5 = text("Value: ");
			t6 = text(/*valueB*/ ctx[4]);
			t7 = space();
			div2 = element("div");
			create_component(textfield2.$$.fragment);
			t8 = space();
			pre2 = element("pre");
			t9 = text("Value: ");
			t10 = text(/*valueC*/ ctx[8]);
			t11 = space();
			div3 = element("div");
			create_component(textfield3.$$.fragment);
			t12 = space();
			pre3 = element("pre");
			t13 = text("Value: ");
			t14 = text(/*valueD*/ ctx[12]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", {});
			var div0_nodes = children(div0);
			claim_component(textfield0.$$.fragment, div0_nodes);
			t0 = claim_space(div0_nodes);
			pre0 = claim_element(div0_nodes, "PRE", { class: true });
			var pre0_nodes = children(pre0);
			t1 = claim_text(pre0_nodes, "Value: ");
			t2 = claim_text(pre0_nodes, /*valueA*/ ctx[0]);
			pre0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", {});
			var div1_nodes = children(div1);
			claim_component(textfield1.$$.fragment, div1_nodes);
			t4 = claim_space(div1_nodes);
			pre1 = claim_element(div1_nodes, "PRE", { class: true });
			var pre1_nodes = children(pre1);
			t5 = claim_text(pre1_nodes, "Value: ");
			t6 = claim_text(pre1_nodes, /*valueB*/ ctx[4]);
			pre1_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", {});
			var div2_nodes = children(div2);
			claim_component(textfield2.$$.fragment, div2_nodes);
			t8 = claim_space(div2_nodes);
			pre2 = claim_element(div2_nodes, "PRE", { class: true });
			var pre2_nodes = children(pre2);
			t9 = claim_text(pre2_nodes, "Value: ");
			t10 = claim_text(pre2_nodes, /*valueC*/ ctx[8]);
			pre2_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t11 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", {});
			var div3_nodes = children(div3);
			claim_component(textfield3.$$.fragment, div3_nodes);
			t12 = claim_space(div3_nodes);
			pre3 = claim_element(div3_nodes, "PRE", { class: true });
			var pre3_nodes = children(pre3);
			t13 = claim_text(pre3_nodes, "Value: ");
			t14 = claim_text(pre3_nodes, /*valueD*/ ctx[12]);
			pre3_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(pre0, "class", "status");
			add_location(pre0, file$2, 42, 4, 1374);
			add_location(div0, file$2, 18, 2, 727);
			attr_dev(pre1, "class", "status");
			add_location(pre1, file$2, 69, 4, 2095);
			add_location(div1, file$2, 44, 2, 1427);
			attr_dev(pre2, "class", "status");
			add_location(pre2, file$2, 96, 4, 2902);
			add_location(div2, file$2, 71, 2, 2148);
			attr_dev(pre3, "class", "status");
			add_location(pre3, file$2, 122, 4, 3635);
			add_location(div3, file$2, 98, 2, 2955);
			attr_dev(div4, "class", "columns margins");
			add_location(div4, file$2, 17, 0, 695);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			mount_component(textfield0, div0, null);
			append_dev(div0, t0);
			append_dev(div0, pre0);
			append_dev(pre0, t1);
			append_dev(pre0, t2);
			append_dev(div4, t3);
			append_dev(div4, div1);
			mount_component(textfield1, div1, null);
			append_dev(div1, t4);
			append_dev(div1, pre1);
			append_dev(pre1, t5);
			append_dev(pre1, t6);
			append_dev(div4, t7);
			append_dev(div4, div2);
			mount_component(textfield2, div2, null);
			append_dev(div2, t8);
			append_dev(div2, pre2);
			append_dev(pre2, t9);
			append_dev(pre2, t10);
			append_dev(div4, t11);
			append_dev(div4, div3);
			mount_component(textfield3, div3, null);
			append_dev(div3, t12);
			append_dev(div3, pre3);
			append_dev(pre3, t13);
			append_dev(pre3, t14);
			current = true;
		},
		p: function update(ctx, dirty) {
			const textfield0_changes = {};

			if (dirty[0] & /*lineRippleA, floatingLabelA, inputA, valueA*/ 15 | dirty[1] & /*$$scope*/ 8192) {
				textfield0_changes.$$scope = { dirty, ctx };
			}

			if (!updating_input && dirty[0] & /*inputA*/ 2) {
				updating_input = true;
				textfield0_changes.input = /*inputA*/ ctx[1];
				add_flush_callback(() => updating_input = false);
			}

			if (!updating_floatingLabel && dirty[0] & /*floatingLabelA*/ 4) {
				updating_floatingLabel = true;
				textfield0_changes.floatingLabel = /*floatingLabelA*/ ctx[2];
				add_flush_callback(() => updating_floatingLabel = false);
			}

			if (!updating_lineRipple && dirty[0] & /*lineRippleA*/ 8) {
				updating_lineRipple = true;
				textfield0_changes.lineRipple = /*lineRippleA*/ ctx[3];
				add_flush_callback(() => updating_lineRipple = false);
			}

			textfield0.$set(textfield0_changes);
			if (!current || dirty[0] & /*valueA*/ 1) set_data_dev(t2, /*valueA*/ ctx[0]);
			const textfield1_changes = {};

			if (dirty[0] & /*lineRippleB, floatingLabelB, inputB, valueB*/ 240 | dirty[1] & /*$$scope*/ 8192) {
				textfield1_changes.$$scope = { dirty, ctx };
			}

			if (!updating_input_1 && dirty[0] & /*inputB*/ 32) {
				updating_input_1 = true;
				textfield1_changes.input = /*inputB*/ ctx[5];
				add_flush_callback(() => updating_input_1 = false);
			}

			if (!updating_floatingLabel_1 && dirty[0] & /*floatingLabelB*/ 64) {
				updating_floatingLabel_1 = true;
				textfield1_changes.floatingLabel = /*floatingLabelB*/ ctx[6];
				add_flush_callback(() => updating_floatingLabel_1 = false);
			}

			if (!updating_lineRipple_1 && dirty[0] & /*lineRippleB*/ 128) {
				updating_lineRipple_1 = true;
				textfield1_changes.lineRipple = /*lineRippleB*/ ctx[7];
				add_flush_callback(() => updating_lineRipple_1 = false);
			}

			textfield1.$set(textfield1_changes);
			if (!current || dirty[0] & /*valueB*/ 16) set_data_dev(t6, /*valueB*/ ctx[4]);
			const textfield2_changes = {};

			if (dirty[0] & /*notchedOutlineC, floatingLabelC, inputC, valueC*/ 3840 | dirty[1] & /*$$scope*/ 8192) {
				textfield2_changes.$$scope = { dirty, ctx };
			}

			if (!updating_input_2 && dirty[0] & /*inputC*/ 512) {
				updating_input_2 = true;
				textfield2_changes.input = /*inputC*/ ctx[9];
				add_flush_callback(() => updating_input_2 = false);
			}

			if (!updating_notchedOutline && dirty[0] & /*notchedOutlineC*/ 1024) {
				updating_notchedOutline = true;
				textfield2_changes.notchedOutline = /*notchedOutlineC*/ ctx[10];
				add_flush_callback(() => updating_notchedOutline = false);
			}

			if (!updating_floatingLabel_2 && dirty[0] & /*floatingLabelC*/ 2048) {
				updating_floatingLabel_2 = true;
				textfield2_changes.floatingLabel = /*floatingLabelC*/ ctx[11];
				add_flush_callback(() => updating_floatingLabel_2 = false);
			}

			textfield2.$set(textfield2_changes);
			if (!current || dirty[0] & /*valueC*/ 256) set_data_dev(t10, /*valueC*/ ctx[8]);
			const textfield3_changes = {};

			if (dirty[0] & /*notchedOutlineD, floatingLabelD, inputD, valueD*/ 61440 | dirty[1] & /*$$scope*/ 8192) {
				textfield3_changes.$$scope = { dirty, ctx };
			}

			if (!updating_input_3 && dirty[0] & /*inputD*/ 8192) {
				updating_input_3 = true;
				textfield3_changes.input = /*inputD*/ ctx[13];
				add_flush_callback(() => updating_input_3 = false);
			}

			if (!updating_notchedOutline_1 && dirty[0] & /*notchedOutlineD*/ 16384) {
				updating_notchedOutline_1 = true;
				textfield3_changes.notchedOutline = /*notchedOutlineD*/ ctx[14];
				add_flush_callback(() => updating_notchedOutline_1 = false);
			}

			if (!updating_floatingLabel_3 && dirty[0] & /*floatingLabelD*/ 32768) {
				updating_floatingLabel_3 = true;
				textfield3_changes.floatingLabel = /*floatingLabelD*/ ctx[15];
				add_flush_callback(() => updating_floatingLabel_3 = false);
			}

			textfield3.$set(textfield3_changes);
			if (!current || dirty[0] & /*valueD*/ 4096) set_data_dev(t14, /*valueD*/ ctx[12]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textfield0.$$.fragment, local);
			transition_in(textfield1.$$.fragment, local);
			transition_in(textfield2.$$.fragment, local);
			transition_in(textfield3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textfield0.$$.fragment, local);
			transition_out(textfield1.$$.fragment, local);
			transition_out(textfield2.$$.fragment, local);
			transition_out(textfield3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
			destroy_component(textfield0);
			destroy_component(textfield1);
			destroy_component(textfield2);
			destroy_component(textfield3);
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
	validate_slots("ManualSetup", slots, []);
	let valueA = "";
	let inputA;
	let floatingLabelA;
	let lineRippleA;
	let valueB = "";
	let inputB;
	let floatingLabelB;
	let lineRippleB;
	let valueC = "";
	let inputC;
	let notchedOutlineC;
	let floatingLabelC;
	let valueD = "";
	let inputD;
	let notchedOutlineD;
	let floatingLabelD;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ManualSetup> was created with unknown prop '${key}'`);
	});

	function lineripple_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			lineRippleA = $$value;
			$$invalidate(3, lineRippleA);
		});
	}

	function floatinglabel_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			floatingLabelA = $$value;
			$$invalidate(2, floatingLabelA);
		});
	}

	function input_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			inputA = $$value;
			$$invalidate(1, inputA);
		});
	}

	function input_value_binding(value) {
		valueA = value;
		$$invalidate(0, valueA);
	}

	function textfield0_input_binding(value) {
		inputA = value;
		$$invalidate(1, inputA);
	}

	function textfield0_floatingLabel_binding(value) {
		floatingLabelA = value;
		$$invalidate(2, floatingLabelA);
	}

	function textfield0_lineRipple_binding(value) {
		lineRippleA = value;
		$$invalidate(3, lineRippleA);
	}

	function lineripple_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			lineRippleB = $$value;
			$$invalidate(7, lineRippleB);
		});
	}

	function floatinglabel_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			floatingLabelB = $$value;
			$$invalidate(6, floatingLabelB);
		});
	}

	function input_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			inputB = $$value;
			$$invalidate(5, inputB);
		});
	}

	function input_value_binding_1(value) {
		valueB = value;
		$$invalidate(4, valueB);
	}

	function textfield1_input_binding(value) {
		inputB = value;
		$$invalidate(5, inputB);
	}

	function textfield1_floatingLabel_binding(value) {
		floatingLabelB = value;
		$$invalidate(6, floatingLabelB);
	}

	function textfield1_lineRipple_binding(value) {
		lineRippleB = value;
		$$invalidate(7, lineRippleB);
	}

	function floatinglabel_binding_2($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			floatingLabelC = $$value;
			$$invalidate(11, floatingLabelC);
		});
	}

	function notchedoutline_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			notchedOutlineC = $$value;
			$$invalidate(10, notchedOutlineC);
		});
	}

	function input_binding_2($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			inputC = $$value;
			$$invalidate(9, inputC);
		});
	}

	function input_value_binding_2(value) {
		valueC = value;
		$$invalidate(8, valueC);
	}

	function textfield2_input_binding(value) {
		inputC = value;
		$$invalidate(9, inputC);
	}

	function textfield2_notchedOutline_binding(value) {
		notchedOutlineC = value;
		$$invalidate(10, notchedOutlineC);
	}

	function textfield2_floatingLabel_binding(value) {
		floatingLabelC = value;
		$$invalidate(11, floatingLabelC);
	}

	function floatinglabel_binding_3($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			floatingLabelD = $$value;
			$$invalidate(15, floatingLabelD);
		});
	}

	function notchedoutline_binding_1($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			notchedOutlineD = $$value;
			$$invalidate(14, notchedOutlineD);
		});
	}

	function textarea_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			inputD = $$value;
			$$invalidate(13, inputD);
		});
	}

	function textarea_value_binding(value) {
		valueD = value;
		$$invalidate(12, valueD);
	}

	function textfield3_input_binding(value) {
		inputD = value;
		$$invalidate(13, inputD);
	}

	function textfield3_notchedOutline_binding(value) {
		notchedOutlineD = value;
		$$invalidate(14, notchedOutlineD);
	}

	function textfield3_floatingLabel_binding(value) {
		floatingLabelD = value;
		$$invalidate(15, floatingLabelD);
	}

	$$self.$capture_state = () => ({
		Textfield: Textfield$1,
		Input,
		Textarea: Textarea$1,
		Icon,
		HelperText,
		FloatingLabel,
		LineRipple,
		NotchedOutline,
		valueA,
		inputA,
		floatingLabelA,
		lineRippleA,
		valueB,
		inputB,
		floatingLabelB,
		lineRippleB,
		valueC,
		inputC,
		notchedOutlineC,
		floatingLabelC,
		valueD,
		inputD,
		notchedOutlineD,
		floatingLabelD
	});

	$$self.$inject_state = $$props => {
		if ("valueA" in $$props) $$invalidate(0, valueA = $$props.valueA);
		if ("inputA" in $$props) $$invalidate(1, inputA = $$props.inputA);
		if ("floatingLabelA" in $$props) $$invalidate(2, floatingLabelA = $$props.floatingLabelA);
		if ("lineRippleA" in $$props) $$invalidate(3, lineRippleA = $$props.lineRippleA);
		if ("valueB" in $$props) $$invalidate(4, valueB = $$props.valueB);
		if ("inputB" in $$props) $$invalidate(5, inputB = $$props.inputB);
		if ("floatingLabelB" in $$props) $$invalidate(6, floatingLabelB = $$props.floatingLabelB);
		if ("lineRippleB" in $$props) $$invalidate(7, lineRippleB = $$props.lineRippleB);
		if ("valueC" in $$props) $$invalidate(8, valueC = $$props.valueC);
		if ("inputC" in $$props) $$invalidate(9, inputC = $$props.inputC);
		if ("notchedOutlineC" in $$props) $$invalidate(10, notchedOutlineC = $$props.notchedOutlineC);
		if ("floatingLabelC" in $$props) $$invalidate(11, floatingLabelC = $$props.floatingLabelC);
		if ("valueD" in $$props) $$invalidate(12, valueD = $$props.valueD);
		if ("inputD" in $$props) $$invalidate(13, inputD = $$props.inputD);
		if ("notchedOutlineD" in $$props) $$invalidate(14, notchedOutlineD = $$props.notchedOutlineD);
		if ("floatingLabelD" in $$props) $$invalidate(15, floatingLabelD = $$props.floatingLabelD);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		valueA,
		inputA,
		floatingLabelA,
		lineRippleA,
		valueB,
		inputB,
		floatingLabelB,
		lineRippleB,
		valueC,
		inputC,
		notchedOutlineC,
		floatingLabelC,
		valueD,
		inputD,
		notchedOutlineD,
		floatingLabelD,
		lineripple_binding,
		floatinglabel_binding,
		input_binding,
		input_value_binding,
		textfield0_input_binding,
		textfield0_floatingLabel_binding,
		textfield0_lineRipple_binding,
		lineripple_binding_1,
		floatinglabel_binding_1,
		input_binding_1,
		input_value_binding_1,
		textfield1_input_binding,
		textfield1_floatingLabel_binding,
		textfield1_lineRipple_binding,
		floatinglabel_binding_2,
		notchedoutline_binding,
		input_binding_2,
		input_value_binding_2,
		textfield2_input_binding,
		textfield2_notchedOutline_binding,
		textfield2_floatingLabel_binding,
		floatinglabel_binding_3,
		notchedoutline_binding_1,
		textarea_binding,
		textarea_value_binding,
		textfield3_input_binding,
		textfield3_notchedOutline_binding,
		textfield3_floatingLabel_binding
	];
}

class ManualSetup extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {}, [-1, -1]);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ManualSetup",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/textfield/_Solo.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/textfield/_Solo.svelte";

// (3:4) <Icon class="material-icons">
function create_default_slot_3$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("search");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "search");
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
		source: "(3:4) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (2:2) <Paper class="solo-paper" elevation={6}>
function create_default_slot_2$1(ctx) {
	let icon;
	let t;
	let input;
	let updating_value;
	let current;

	icon = new CommonIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	function input_value_binding(value) {
		/*input_value_binding*/ ctx[2](value);
	}

	let input_props = {
		placeholder: "Search",
		class: "solo-input"
	};

	if (/*value*/ ctx[0] !== void 0) {
		input_props.value = /*value*/ ctx[0];
	}

	input = new Input({ props: input_props, $$inline: true });
	binding_callbacks.push(() => bind(input, "value", input_value_binding));
	input.$on("keydown", /*keydown_handler*/ ctx[3]);

	const block = {
		c: function create() {
			create_component(icon.$$.fragment);
			t = space();
			create_component(input.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(icon.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(input.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(icon, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(input, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const icon_changes = {};

			if (dirty & /*$$scope*/ 16) {
				icon_changes.$$scope = { dirty, ctx };
			}

			icon.$set(icon_changes);
			const input_changes = {};

			if (!updating_value && dirty & /*value*/ 1) {
				updating_value = true;
				input_changes.value = /*value*/ ctx[0];
				add_flush_callback(() => updating_value = false);
			}

			input.$set(input_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(icon.$$.fragment, local);
			transition_in(input.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(icon.$$.fragment, local);
			transition_out(input.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(icon, detaching);
			if (detaching) detach_dev(t);
			destroy_component(input, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(2:2) <Paper class=\\\"solo-paper\\\" elevation={6}>",
		ctx
	});

	return block;
}

// (18:4) <Icon class="material-icons">
function create_default_slot_1$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("arrow_forward");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "arrow_forward");
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
		source: "(18:4) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (11:2) <Fab     on:click={doSearch}     disabled={value === ''}     color="primary"     mini     class="solo-fab"   >
function create_default_slot$1(ctx) {
	let icon;
	let current;

	icon = new CommonIcon({
			props: {
				class: "material-icons",
				$$slots: { default: [create_default_slot_1$1] },
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

			if (dirty & /*$$scope*/ 16) {
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
		id: create_default_slot$1.name,
		type: "slot",
		source: "(11:2) <Fab     on:click={doSearch}     disabled={value === ''}     color=\\\"primary\\\"     mini     class=\\\"solo-fab\\\"   >",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div;
	let paper;
	let t0;
	let fab;
	let t1;
	let pre;
	let t2;
	let t3;
	let current;

	paper = new Paper({
			props: {
				class: "solo-paper",
				elevation: 6,
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	fab = new Fab({
			props: {
				disabled: /*value*/ ctx[0] === "",
				color: "primary",
				mini: true,
				class: "solo-fab",
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	fab.$on("click", /*doSearch*/ ctx[1]);

	const block = {
		c: function create() {
			div = element("div");
			create_component(paper.$$.fragment);
			t0 = space();
			create_component(fab.$$.fragment);
			t1 = space();
			pre = element("pre");
			t2 = text("Value: ");
			t3 = text(/*value*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(paper.$$.fragment, div_nodes);
			t0 = claim_space(div_nodes);
			claim_component(fab.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t2 = claim_text(pre_nodes, "Value: ");
			t3 = claim_text(pre_nodes, /*value*/ ctx[0]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "solo-demo-container solo-container svelte-16up9rj");
			add_location(div, file$1, 0, 0, 0);
			attr_dev(pre, "class", "status svelte-16up9rj");
			add_location(pre, file$1, 21, 0, 487);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(paper, div, null);
			append_dev(div, t0);
			mount_component(fab, div, null);
			insert_dev(target, t1, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t2);
			append_dev(pre, t3);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const paper_changes = {};

			if (dirty & /*$$scope, value*/ 17) {
				paper_changes.$$scope = { dirty, ctx };
			}

			paper.$set(paper_changes);
			const fab_changes = {};
			if (dirty & /*value*/ 1) fab_changes.disabled = /*value*/ ctx[0] === "";

			if (dirty & /*$$scope*/ 16) {
				fab_changes.$$scope = { dirty, ctx };
			}

			fab.$set(fab_changes);
			if (!current || dirty & /*value*/ 1) set_data_dev(t3, /*value*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(paper.$$.fragment, local);
			transition_in(fab.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(paper.$$.fragment, local);
			transition_out(fab.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(paper);
			destroy_component(fab);
			if (detaching) detach_dev(t1);
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

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Solo", slots, []);
	let value = "";

	function doSearch() {
		alert("Search for " + value);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Solo> was created with unknown prop '${key}'`);
	});

	function input_value_binding(value$1) {
		value = value$1;
		$$invalidate(0, value);
	}

	const keydown_handler = event => event.key === "Enter" && doSearch();
	$$self.$capture_state = () => ({ Input, Paper, Fab, Icon: CommonIcon, value, doSearch });

	$$self.$inject_state = $$props => {
		if ("value" in $$props) $$invalidate(0, value = $$props.value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [value, doSearch, input_value_binding, keydown_handler];
}

class Solo extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Solo",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/textfield/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/textfield/index.svelte";

// (12:2) <Demo component={Standard} file="textfield/_Standard.svelte">
function create_default_slot_23(ctx) {
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
		id: create_default_slot_23.name,
		type: "slot",
		source: "(12:2) <Demo component={Standard} file=\\\"textfield/_Standard.svelte\\\">",
		ctx
	});

	return block;
}

// (14:2) <Demo component={Filled} file="textfield/_Filled.svelte">
function create_default_slot_22(ctx) {
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
		id: create_default_slot_22.name,
		type: "slot",
		source: "(14:2) <Demo component={Filled} file=\\\"textfield/_Filled.svelte\\\">",
		ctx
	});

	return block;
}

// (16:2) <Demo component={Outlined} file="textfield/_Outlined.svelte">
function create_default_slot_21(ctx) {
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
		id: create_default_slot_21.name,
		type: "slot",
		source: "(16:2) <Demo component={Outlined} file=\\\"textfield/_Outlined.svelte\\\">",
		ctx
	});

	return block;
}

// (18:2) <Demo component={ShapedFilled} file="textfield/_ShapedFilled.svelte">
function create_default_slot_20(ctx) {
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
		id: create_default_slot_20.name,
		type: "slot",
		source: "(18:2) <Demo component={ShapedFilled} file=\\\"textfield/_ShapedFilled.svelte\\\">",
		ctx
	});

	return block;
}

// (20:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot_3(ctx) {
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
		id: create_subtitle_slot_3.name,
		type: "slot",
		source: "(20:4) <svelte:fragment slot=\\\"subtitle\\\">",
		ctx
	});

	return block;
}

// (23:2) <Demo component={ShapedOutlined} file="textfield/_ShapedOutlined.svelte">
function create_default_slot_19(ctx) {
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
		id: create_default_slot_19.name,
		type: "slot",
		source: "(23:2) <Demo component={ShapedOutlined} file=\\\"textfield/_ShapedOutlined.svelte\\\">",
		ctx
	});

	return block;
}

// (25:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot_2(ctx) {
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
		id: create_subtitle_slot_2.name,
		type: "slot",
		source: "(25:4) <svelte:fragment slot=\\\"subtitle\\\">",
		ctx
	});

	return block;
}

// (28:2) <Demo component={Required} file="textfield/_Required.svelte">
function create_default_slot_18(ctx) {
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
		id: create_default_slot_18.name,
		type: "slot",
		source: "(28:2) <Demo component={Required} file=\\\"textfield/_Required.svelte\\\">",
		ctx
	});

	return block;
}

// (30:2) <Demo component={Disabled} file="textfield/_Disabled.svelte">
function create_default_slot_17(ctx) {
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
		id: create_default_slot_17.name,
		type: "slot",
		source: "(30:2) <Demo component={Disabled} file=\\\"textfield/_Disabled.svelte\\\">",
		ctx
	});

	return block;
}

// (32:2) <Demo component={Prefixed} file="textfield/_Prefixed.svelte">
function create_default_slot_16(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Prefixed");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Prefixed");
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
		id: create_default_slot_16.name,
		type: "slot",
		source: "(32:2) <Demo component={Prefixed} file=\\\"textfield/_Prefixed.svelte\\\">",
		ctx
	});

	return block;
}

// (34:2) <Demo component={Suffixed} file="textfield/_Suffixed.svelte">
function create_default_slot_15(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Suffixed");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Suffixed");
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
		id: create_default_slot_15.name,
		type: "slot",
		source: "(34:2) <Demo component={Suffixed} file=\\\"textfield/_Suffixed.svelte\\\">",
		ctx
	});

	return block;
}

// (36:2) <Demo     component={NoLabelOrHelperText}     file="textfield/_NoLabelOrHelperText.svelte"   >
function create_default_slot_14(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Without label or helper text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Without label or helper text");
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
		id: create_default_slot_14.name,
		type: "slot",
		source: "(36:2) <Demo     component={NoLabelOrHelperText}     file=\\\"textfield/_NoLabelOrHelperText.svelte\\\"   >",
		ctx
	});

	return block;
}

// (43:2) <Demo     component={PersistentHelperText}     file="textfield/_PersistentHelperText.svelte"   >
function create_default_slot_13(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("With persistent helper text");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "With persistent helper text");
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
		id: create_default_slot_13.name,
		type: "slot",
		source: "(43:2) <Demo     component={PersistentHelperText}     file=\\\"textfield/_PersistentHelperText.svelte\\\"   >",
		ctx
	});

	return block;
}

// (50:2) <Demo component={CharacterCount} file="textfield/_CharacterCount.svelte">
function create_default_slot_12(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("With character count");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "With character count");
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
		id: create_default_slot_12.name,
		type: "slot",
		source: "(50:2) <Demo component={CharacterCount} file=\\\"textfield/_CharacterCount.svelte\\\">",
		ctx
	});

	return block;
}

// (54:2) <Demo     component={HelperTextCharacterCount}     file="textfield/_HelperTextCharacterCount.svelte"   >
function create_default_slot_11(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("With helper text and character count");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "With helper text and character count");
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
		id: create_default_slot_11.name,
		type: "slot",
		source: "(54:2) <Demo     component={HelperTextCharacterCount}     file=\\\"textfield/_HelperTextCharacterCount.svelte\\\"   >",
		ctx
	});

	return block;
}

// (61:2) <Demo component={BothIcons} file="textfield/_BothIcons.svelte">
function create_default_slot_10(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Both icons");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Both icons");
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
		id: create_default_slot_10.name,
		type: "slot",
		source: "(61:2) <Demo component={BothIcons} file=\\\"textfield/_BothIcons.svelte\\\">",
		ctx
	});

	return block;
}

// (65:2) <Demo component={ConditionalIcons} file="textfield/_ConditionalIcons.svelte">
function create_default_slot_9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Conditional icons");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Conditional icons");
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
		source: "(65:2) <Demo component={ConditionalIcons} file=\\\"textfield/_ConditionalIcons.svelte\\\">",
		ctx
	});

	return block;
}

// (69:2) <Demo component={Textarea} file="textfield/_Textarea.svelte">
function create_default_slot_8(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Textarea");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Textarea");
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
		source: "(69:2) <Demo component={Textarea} file=\\\"textfield/_Textarea.svelte\\\">",
		ctx
	});

	return block;
}

// (71:2) <Demo     component={TextareaCharacterCount}     file="textfield/_TextareaCharacterCount.svelte"   >
function create_default_slot_7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Textarea with character count");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Textarea with character count");
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
		source: "(71:2) <Demo     component={TextareaCharacterCount}     file=\\\"textfield/_TextareaCharacterCount.svelte\\\"   >",
		ctx
	});

	return block;
}

// (78:2) <Demo component={FullWidth} file="textfield/_FullWidth.svelte">
function create_default_slot_6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Full width");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Full width");
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
		source: "(78:2) <Demo component={FullWidth} file=\\\"textfield/_FullWidth.svelte\\\">",
		ctx
	});

	return block;
}

// (82:2) <Demo     component={FullWidthTextarea}     file="textfield/_FullWidthTextarea.svelte"   >
function create_default_slot_5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Full width textarea");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Full width textarea");
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
		source: "(82:2) <Demo     component={FullWidthTextarea}     file=\\\"textfield/_FullWidthTextarea.svelte\\\"   >",
		ctx
	});

	return block;
}

// (89:2) <Demo     component={FixedSizeTextarea}     file="textfield/_FixedSizeTextarea.svelte"   >
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Fixed Size Textarea");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Fixed Size Textarea");
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
		source: "(89:2) <Demo     component={FixedSizeTextarea}     file=\\\"textfield/_FixedSizeTextarea.svelte\\\"   >",
		ctx
	});

	return block;
}

// (94:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Turn off the browser's native resize feature.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Turn off the browser's native resize feature.");
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
		source: "(94:4) <svelte:fragment slot=\\\"subtitle\\\">",
		ctx
	});

	return block;
}

// (99:2) <Demo component={ElementsInLabel} file="textfield/_ElementsInLabel.svelte">
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Elements in the label");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Elements in the label");
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
		source: "(99:2) <Demo component={ElementsInLabel} file=\\\"textfield/_ElementsInLabel.svelte\\\">",
		ctx
	});

	return block;
}

// (103:2) <Demo component={DifferentTypes} file="textfield/_DifferentTypes.svelte">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Different input types");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Different input types");
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
		source: "(103:2) <Demo component={DifferentTypes} file=\\\"textfield/_DifferentTypes.svelte\\\">",
		ctx
	});

	return block;
}

// (107:2) <Demo component={ManualSetup} file="textfield/_ManualSetup.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Manual setup");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Manual setup");
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
		source: "(107:2) <Demo component={ManualSetup} file=\\\"textfield/_ManualSetup.svelte\\\">",
		ctx
	});

	return block;
}

// (111:2) <Demo component={Solo} file="textfield/_Solo.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Solo style");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Solo style");
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
		source: "(111:2) <Demo component={Solo} file=\\\"textfield/_Solo.svelte\\\">",
		ctx
	});

	return block;
}

// (113:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Using Paper and an Input outside a Textfield to create a \"Solo\" input");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Using Paper and an Input outside a Textfield to create a \"Solo\" input");
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
		source: "(113:4) <svelte:fragment slot=\\\"subtitle\\\">",
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
	let t14;
	let demo10;
	let t15;
	let demo11;
	let t16;
	let demo12;
	let t17;
	let demo13;
	let t18;
	let demo14;
	let t19;
	let demo15;
	let t20;
	let demo16;
	let t21;
	let demo17;
	let t22;
	let demo18;
	let t23;
	let demo19;
	let t24;
	let demo20;
	let t25;
	let demo21;
	let t26;
	let demo22;
	let t27;
	let demo23;
	let t28;
	let demo24;
	let current;

	demo0 = new Demo({
			props: {
				component: Showcase,
				file: "textfield/_Showcase.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: Standard,
				file: "textfield/_Standard.svelte",
				$$slots: { default: [create_default_slot_23] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: Filled,
				file: "textfield/_Filled.svelte",
				$$slots: { default: [create_default_slot_22] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: Outlined,
				file: "textfield/_Outlined.svelte",
				$$slots: { default: [create_default_slot_21] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo4 = new Demo({
			props: {
				component: ShapedFilled,
				file: "textfield/_ShapedFilled.svelte",
				$$slots: {
					subtitle: [create_subtitle_slot_3],
					default: [create_default_slot_20]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo5 = new Demo({
			props: {
				component: ShapedOutlined,
				file: "textfield/_ShapedOutlined.svelte",
				$$slots: {
					subtitle: [create_subtitle_slot_2],
					default: [create_default_slot_19]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo6 = new Demo({
			props: {
				component: Required,
				file: "textfield/_Required.svelte",
				$$slots: { default: [create_default_slot_18] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo7 = new Demo({
			props: {
				component: Disabled,
				file: "textfield/_Disabled.svelte",
				$$slots: { default: [create_default_slot_17] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo8 = new Demo({
			props: {
				component: Prefixed,
				file: "textfield/_Prefixed.svelte",
				$$slots: { default: [create_default_slot_16] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo9 = new Demo({
			props: {
				component: Suffixed,
				file: "textfield/_Suffixed.svelte",
				$$slots: { default: [create_default_slot_15] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo10 = new Demo({
			props: {
				component: NoLabelOrHelperText,
				file: "textfield/_NoLabelOrHelperText.svelte",
				$$slots: { default: [create_default_slot_14] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo11 = new Demo({
			props: {
				component: PersistentHelperText,
				file: "textfield/_PersistentHelperText.svelte",
				$$slots: { default: [create_default_slot_13] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo12 = new Demo({
			props: {
				component: CharacterCount,
				file: "textfield/_CharacterCount.svelte",
				$$slots: { default: [create_default_slot_12] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo13 = new Demo({
			props: {
				component: HelperTextCharacterCount,
				file: "textfield/_HelperTextCharacterCount.svelte",
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo14 = new Demo({
			props: {
				component: BothIcons,
				file: "textfield/_BothIcons.svelte",
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo15 = new Demo({
			props: {
				component: ConditionalIcons,
				file: "textfield/_ConditionalIcons.svelte",
				$$slots: { default: [create_default_slot_9] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo16 = new Demo({
			props: {
				component: Textarea,
				file: "textfield/_Textarea.svelte",
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo17 = new Demo({
			props: {
				component: TextareaCharacterCount,
				file: "textfield/_TextareaCharacterCount.svelte",
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo18 = new Demo({
			props: {
				component: FullWidth,
				file: "textfield/_FullWidth.svelte",
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo19 = new Demo({
			props: {
				component: FullWidthTextarea,
				file: "textfield/_FullWidthTextarea.svelte",
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo20 = new Demo({
			props: {
				component: FixedSizeTextarea,
				file: "textfield/_FixedSizeTextarea.svelte",
				$$slots: {
					subtitle: [create_subtitle_slot_1],
					default: [create_default_slot_4]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo21 = new Demo({
			props: {
				component: ElementsInLabel,
				file: "textfield/_ElementsInLabel.svelte",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo22 = new Demo({
			props: {
				component: DifferentTypes,
				file: "textfield/_DifferentTypes.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo23 = new Demo({
			props: {
				component: ManualSetup,
				file: "textfield/_ManualSetup.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo24 = new Demo({
			props: {
				component: Solo,
				file: "textfield/_Solo.svelte",
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
			t1 = text("Text Field");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/textfield");
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
			t14 = space();
			create_component(demo10.$$.fragment);
			t15 = space();
			create_component(demo11.$$.fragment);
			t16 = space();
			create_component(demo12.$$.fragment);
			t17 = space();
			create_component(demo13.$$.fragment);
			t18 = space();
			create_component(demo14.$$.fragment);
			t19 = space();
			create_component(demo15.$$.fragment);
			t20 = space();
			create_component(demo16.$$.fragment);
			t21 = space();
			create_component(demo17.$$.fragment);
			t22 = space();
			create_component(demo18.$$.fragment);
			t23 = space();
			create_component(demo19.$$.fragment);
			t24 = space();
			create_component(demo20.$$.fragment);
			t25 = space();
			create_component(demo21.$$.fragment);
			t26 = space();
			create_component(demo22.$$.fragment);
			t27 = space();
			create_component(demo23.$$.fragment);
			t28 = space();
			create_component(demo24.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-j3ykwz\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Text Field");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/textfield");
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
			t14 = claim_space(section_nodes);
			claim_component(demo10.$$.fragment, section_nodes);
			t15 = claim_space(section_nodes);
			claim_component(demo11.$$.fragment, section_nodes);
			t16 = claim_space(section_nodes);
			claim_component(demo12.$$.fragment, section_nodes);
			t17 = claim_space(section_nodes);
			claim_component(demo13.$$.fragment, section_nodes);
			t18 = claim_space(section_nodes);
			claim_component(demo14.$$.fragment, section_nodes);
			t19 = claim_space(section_nodes);
			claim_component(demo15.$$.fragment, section_nodes);
			t20 = claim_space(section_nodes);
			claim_component(demo16.$$.fragment, section_nodes);
			t21 = claim_space(section_nodes);
			claim_component(demo17.$$.fragment, section_nodes);
			t22 = claim_space(section_nodes);
			claim_component(demo18.$$.fragment, section_nodes);
			t23 = claim_space(section_nodes);
			claim_component(demo19.$$.fragment, section_nodes);
			t24 = claim_space(section_nodes);
			claim_component(demo20.$$.fragment, section_nodes);
			t25 = claim_space(section_nodes);
			claim_component(demo21.$$.fragment, section_nodes);
			t26 = claim_space(section_nodes);
			claim_component(demo22.$$.fragment, section_nodes);
			t27 = claim_space(section_nodes);
			claim_component(demo23.$$.fragment, section_nodes);
			t28 = claim_space(section_nodes);
			claim_component(demo24.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Text Field - SMUI";
			attr_dev(h2, "class", "svelte-hf11sa");
			add_location(h2, file, 5, 2, 77);
			attr_dev(pre, "class", "demo-spaced svelte-hf11sa");
			add_location(pre, file, 7, 2, 100);
			attr_dev(section, "class", "svelte-hf11sa");
			add_location(section, file, 4, 0, 65);
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
			append_dev(section, t14);
			mount_component(demo10, section, null);
			append_dev(section, t15);
			mount_component(demo11, section, null);
			append_dev(section, t16);
			mount_component(demo12, section, null);
			append_dev(section, t17);
			mount_component(demo13, section, null);
			append_dev(section, t18);
			mount_component(demo14, section, null);
			append_dev(section, t19);
			mount_component(demo15, section, null);
			append_dev(section, t20);
			mount_component(demo16, section, null);
			append_dev(section, t21);
			mount_component(demo17, section, null);
			append_dev(section, t22);
			mount_component(demo18, section, null);
			append_dev(section, t23);
			mount_component(demo19, section, null);
			append_dev(section, t24);
			mount_component(demo20, section, null);
			append_dev(section, t25);
			mount_component(demo21, section, null);
			append_dev(section, t26);
			mount_component(demo22, section, null);
			append_dev(section, t27);
			mount_component(demo23, section, null);
			append_dev(section, t28);
			mount_component(demo24, section, null);
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
			const demo10_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo10_changes.$$scope = { dirty, ctx };
			}

			demo10.$set(demo10_changes);
			const demo11_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo11_changes.$$scope = { dirty, ctx };
			}

			demo11.$set(demo11_changes);
			const demo12_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo12_changes.$$scope = { dirty, ctx };
			}

			demo12.$set(demo12_changes);
			const demo13_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo13_changes.$$scope = { dirty, ctx };
			}

			demo13.$set(demo13_changes);
			const demo14_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo14_changes.$$scope = { dirty, ctx };
			}

			demo14.$set(demo14_changes);
			const demo15_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo15_changes.$$scope = { dirty, ctx };
			}

			demo15.$set(demo15_changes);
			const demo16_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo16_changes.$$scope = { dirty, ctx };
			}

			demo16.$set(demo16_changes);
			const demo17_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo17_changes.$$scope = { dirty, ctx };
			}

			demo17.$set(demo17_changes);
			const demo18_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo18_changes.$$scope = { dirty, ctx };
			}

			demo18.$set(demo18_changes);
			const demo19_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo19_changes.$$scope = { dirty, ctx };
			}

			demo19.$set(demo19_changes);
			const demo20_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo20_changes.$$scope = { dirty, ctx };
			}

			demo20.$set(demo20_changes);
			const demo21_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo21_changes.$$scope = { dirty, ctx };
			}

			demo21.$set(demo21_changes);
			const demo22_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo22_changes.$$scope = { dirty, ctx };
			}

			demo22.$set(demo22_changes);
			const demo23_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo23_changes.$$scope = { dirty, ctx };
			}

			demo23.$set(demo23_changes);
			const demo24_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo24_changes.$$scope = { dirty, ctx };
			}

			demo24.$set(demo24_changes);
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
			transition_in(demo10.$$.fragment, local);
			transition_in(demo11.$$.fragment, local);
			transition_in(demo12.$$.fragment, local);
			transition_in(demo13.$$.fragment, local);
			transition_in(demo14.$$.fragment, local);
			transition_in(demo15.$$.fragment, local);
			transition_in(demo16.$$.fragment, local);
			transition_in(demo17.$$.fragment, local);
			transition_in(demo18.$$.fragment, local);
			transition_in(demo19.$$.fragment, local);
			transition_in(demo20.$$.fragment, local);
			transition_in(demo21.$$.fragment, local);
			transition_in(demo22.$$.fragment, local);
			transition_in(demo23.$$.fragment, local);
			transition_in(demo24.$$.fragment, local);
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
			transition_out(demo10.$$.fragment, local);
			transition_out(demo11.$$.fragment, local);
			transition_out(demo12.$$.fragment, local);
			transition_out(demo13.$$.fragment, local);
			transition_out(demo14.$$.fragment, local);
			transition_out(demo15.$$.fragment, local);
			transition_out(demo16.$$.fragment, local);
			transition_out(demo17.$$.fragment, local);
			transition_out(demo18.$$.fragment, local);
			transition_out(demo19.$$.fragment, local);
			transition_out(demo20.$$.fragment, local);
			transition_out(demo21.$$.fragment, local);
			transition_out(demo22.$$.fragment, local);
			transition_out(demo23.$$.fragment, local);
			transition_out(demo24.$$.fragment, local);
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
			destroy_component(demo10);
			destroy_component(demo11);
			destroy_component(demo12);
			destroy_component(demo13);
			destroy_component(demo14);
			destroy_component(demo15);
			destroy_component(demo16);
			destroy_component(demo17);
			destroy_component(demo18);
			destroy_component(demo19);
			destroy_component(demo20);
			destroy_component(demo21);
			destroy_component(demo22);
			destroy_component(demo23);
			destroy_component(demo24);
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
	validate_slots("Textfield", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Textfield> was created with unknown prop '${key}'`);
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
		Prefixed,
		Suffixed,
		NoLabelOrHelperText,
		PersistentHelperText,
		CharacterCount,
		HelperTextCharacterCount,
		BothIcons,
		ConditionalIcons,
		Textarea,
		TextareaCharacterCount,
		FullWidth,
		FullWidthTextarea,
		FixedSizeTextarea,
		ElementsInLabel,
		DifferentTypes,
		ManualSetup,
		Solo
	});

	return [];
}

class Textfield extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Textfield",
			options,
			id: create_fragment.name
		});
	}
}

export default Textfield;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZGEzZjNjMmYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9jaGFyYWN0ZXItY291bnRlci9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90ZXh0ZmllbGQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvY2hhcmFjdGVyLWNvdW50ZXIvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9oZWxwZXItdGV4dC9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90ZXh0ZmllbGQvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90ZXh0ZmllbGQvaGVscGVyLXRleHQvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9pY29uL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL3RleHRmaWVsZC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RleHRmaWVsZC9pY29uL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy90ZXh0ZmllbGQvaWNvbi9JY29uLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL3RleHRmaWVsZC9oZWxwZXItdGV4dC9IZWxwZXJUZXh0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90ZXh0ZmllbGQvX1Nob3djYXNlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90ZXh0ZmllbGQvX1N0YW5kYXJkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90ZXh0ZmllbGQvX0ZpbGxlZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGV4dGZpZWxkL19PdXRsaW5lZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGV4dGZpZWxkL19TaGFwZWRGaWxsZWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fU2hhcGVkT3V0bGluZWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fUmVxdWlyZWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fUHJlZml4ZWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fU3VmZml4ZWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fTm9MYWJlbE9ySGVscGVyVGV4dC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGV4dGZpZWxkL19QZXJzaXN0ZW50SGVscGVyVGV4dC5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy90ZXh0ZmllbGQvY2hhcmFjdGVyLWNvdW50ZXIvQ2hhcmFjdGVyQ291bnRlci5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGV4dGZpZWxkL19DaGFyYWN0ZXJDb3VudC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGV4dGZpZWxkL19IZWxwZXJUZXh0Q2hhcmFjdGVyQ291bnQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fQm90aEljb25zLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90ZXh0ZmllbGQvX0NvbmRpdGlvbmFsSWNvbnMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fVGV4dGFyZWEuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fVGV4dGFyZWFDaGFyYWN0ZXJDb3VudC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdGV4dGZpZWxkL19GdWxsV2lkdGguc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fRnVsbFdpZHRoVGV4dGFyZWEuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fRml4ZWRTaXplVGV4dGFyZWEuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9fRWxlbWVudHNJbkxhYmVsLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90ZXh0ZmllbGQvX0RpZmZlcmVudFR5cGVzLnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL2Zsb2F0aW5nLWxhYmVsL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9mbG9hdGluZy1sYWJlbC9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2Zsb2F0aW5nLWxhYmVsL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZmxvYXRpbmctbGFiZWwvY29uc3RhbnRzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZmxvYXRpbmctbGFiZWwvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbC9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZmxvYXRpbmctbGFiZWwvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2Zsb2F0aW5nLWxhYmVsL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vY2xhc3NNYXAuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9mbG9hdGluZy1sYWJlbC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2Rpc3BhdGNoLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZmxvYXRpbmctbGFiZWwvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZmxvYXRpbmctbGFiZWwvRmxvYXRpbmdMYWJlbC5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9saW5lLXJpcHBsZS9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbGluZS1yaXBwbGUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24uanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9saW5lLXJpcHBsZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2xpbmUtcmlwcGxlL2NvbnN0YW50cy5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2xpbmUtcmlwcGxlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvbGluZS1yaXBwbGUvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2xpbmUtcmlwcGxlL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZm9yd2FyZEV2ZW50c0J1aWxkZXIuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9saW5lLXJpcHBsZS9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzTWFwLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbGluZS1yaXBwbGUvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbGluZS1yaXBwbGUvTGluZVJpcHBsZS5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9ub3RjaGVkLW91dGxpbmUvbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL25vdGNoZWQtb3V0bGluZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL25vdGNoZWQtb3V0bGluZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL25vdGNoZWQtb3V0bGluZS9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9ub3RjaGVkLW91dGxpbmUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL25vdGNoZWQtb3V0bGluZS9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHNCdWlsZGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbm90Y2hlZC1vdXRsaW5lL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vY2xhc3NNYXAuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9ub3RjaGVkLW91dGxpbmUvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi91c2VBY3Rpb25zLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbm90Y2hlZC1vdXRsaW5lL05vdGNoZWRPdXRsaW5lLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90ZXh0ZmllbGQvX01hbnVhbFNldHVwLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90ZXh0ZmllbGQvX1NvbG8uc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9kZW1vL3RleHRmaWVsZC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBST09UOiAnbWRjLXRleHQtZmllbGQtY2hhcmFjdGVyLWNvdW50ZXInLFxufTtcbnZhciBzdHJpbmdzID0ge1xuICAgIFJPT1RfU0VMRUNUT1I6IFwiLlwiICsgY3NzQ2xhc3Nlcy5ST09ULFxufTtcbmV4cG9ydCB7IHN0cmluZ3MsIGNzc0NsYXNzZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENUZXh0RmllbGRDaGFyYWN0ZXJDb3VudGVyQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRDb3VudGVyVmFsdWUgPSBmdW5jdGlvbiAoY3VycmVudExlbmd0aCwgbWF4TGVuZ3RoKSB7XG4gICAgICAgIGN1cnJlbnRMZW5ndGggPSBNYXRoLm1pbihjdXJyZW50TGVuZ3RoLCBtYXhMZW5ndGgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0Q29udGVudChjdXJyZW50TGVuZ3RoICsgXCIgLyBcIiArIG1heExlbmd0aCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgSEVMUEVSX1RFWFRfUEVSU0lTVEVOVDogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS1wZXJzaXN0ZW50JyxcbiAgICBIRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRzogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0LS12YWxpZGF0aW9uLW1zZycsXG4gICAgUk9PVDogJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0Jyxcbn07XG52YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX0hJRERFTjogJ2FyaWEtaGlkZGVuJyxcbiAgICBST0xFOiAncm9sZScsXG4gICAgUk9PVF9TRUxFQ1RPUjogXCIuXCIgKyBjc3NDbGFzc2VzLlJPT1QsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICByZXR1cm4gX3N1cGVyLmNhbGwodGhpcywgX19hc3NpZ24oX19hc3NpZ24oe30sIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ1RleHRGaWVsZEhlbHBlclRleHRBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBnZXRBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q29udGVudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0SWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0QXR0cignaWQnKTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZ2V0QXR0cihzdHJpbmdzLkFSSUFfSElEREVOKSAhPT0gJ3RydWUnO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY29udGVudCBvZiB0aGUgaGVscGVyIHRleHQgZmllbGQuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24ucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5pc1BlcnNpc3RlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSBpc1BlcnNpc3RlbnQgU2V0cyB0aGUgcGVyc2lzdGVuY3kgb2YgdGhlIGhlbHBlciB0ZXh0LlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRQZXJzaXN0ZW50ID0gZnVuY3Rpb24gKGlzUGVyc2lzdGVudCkge1xuICAgICAgICBpZiAoaXNQZXJzaXN0ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9QRVJTSVNURU5UKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIHdoZXRoZXIgdGhlIGhlbHBlciB0ZXh0IGFjdHMgYXMgYW4gZXJyb3IgdmFsaWRhdGlvbiBtZXNzYWdlLlxuICAgICAqL1xuICAgIE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uLnByb3RvdHlwZS5pc1ZhbGlkYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuaGFzQ2xhc3MoY3NzQ2xhc3Nlcy5IRUxQRVJfVEVYVF9WQUxJREFUSU9OX01TRyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXNWYWxpZGF0aW9uIFRydWUgdG8gbWFrZSB0aGUgaGVscGVyIHRleHQgYWN0IGFzIGFuIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZS5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2V0VmFsaWRhdGlvbiA9IGZ1bmN0aW9uIChpc1ZhbGlkYXRpb24pIHtcbiAgICAgICAgaWYgKGlzVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuSEVMUEVSX1RFWFRfVkFMSURBVElPTl9NU0cpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgaGVscGVyIHRleHQgdmlzaWJsZSB0byB0aGUgc2NyZWVuIHJlYWRlci5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuc2hvd1RvU2NyZWVuUmVhZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQXR0cihzdHJpbmdzLkFSSUFfSElEREVOKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbGlkaXR5IG9mIHRoZSBoZWxwZXIgdGV4dCBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsaWRpdHkuXG4gICAgICovXG4gICAgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24ucHJvdG90eXBlLnNldFZhbGlkaXR5ID0gZnVuY3Rpb24gKGlucHV0SXNWYWxpZCkge1xuICAgICAgICB2YXIgaGVscGVyVGV4dElzUGVyc2lzdGVudCA9IHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1BFUlNJU1RFTlQpO1xuICAgICAgICB2YXIgaGVscGVyVGV4dElzVmFsaWRhdGlvbk1zZyA9IHRoaXMuYWRhcHRlci5oYXNDbGFzcyhjc3NDbGFzc2VzLkhFTFBFUl9URVhUX1ZBTElEQVRJT05fTVNHKTtcbiAgICAgICAgdmFyIHZhbGlkYXRpb25Nc2dOZWVkc0Rpc3BsYXkgPSBoZWxwZXJUZXh0SXNWYWxpZGF0aW9uTXNnICYmICFpbnB1dElzVmFsaWQ7XG4gICAgICAgIGlmICh2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUb1NjcmVlblJlYWRlcigpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEF0dHIoc3RyaW5ncy5ST0xFLCAnYWxlcnQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVBdHRyKHN0cmluZ3MuUk9MRSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFoZWxwZXJUZXh0SXNQZXJzaXN0ZW50ICYmICF2YWxpZGF0aW9uTXNnTmVlZHNEaXNwbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVfKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBoZWxwIHRleHQgZnJvbSBzY3JlZW4gcmVhZGVycy5cbiAgICAgKi9cbiAgICBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbi5wcm90b3R5cGUuaGlkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyKHN0cmluZ3MuQVJJQV9ISURERU4sICd0cnVlJyk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ1RleHRGaWVsZEhlbHBlclRleHRGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIHN0cmluZ3MgPSB7XG4gICAgSUNPTl9FVkVOVDogJ01EQ1RleHRGaWVsZDppY29uJyxcbiAgICBJQ09OX1JPTEU6ICdidXR0b24nLFxufTtcbnZhciBjc3NDbGFzc2VzID0ge1xuICAgIFJPT1Q6ICdtZGMtdGV4dC1maWVsZF9faWNvbicsXG59O1xuZXhwb3J0IHsgc3RyaW5ncywgY3NzQ2xhc3NlcyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3Nlcywgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBJTlRFUkFDVElPTl9FVkVOVFMgPSBbJ2NsaWNrJywgJ2tleWRvd24nXTtcbnZhciBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2F2ZWRUYWJJbmRleF8gPSBudWxsO1xuICAgICAgICBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfID0gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gX3RoaXMuaGFuZGxlSW50ZXJhY3Rpb24oZXZ0KTsgfTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ3M7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2VlIHtAbGluayBNRENUZXh0RmllbGRJY29uQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdldEF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUF0dHI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRDb250ZW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJJbnRlcmFjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5SWNvbkFjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5zYXZlZFRhYkluZGV4XyA9IHRoaXMuYWRhcHRlci5nZXRBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICBJTlRFUkFDVElPTl9FVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZ0VHlwZSkge1xuICAgICAgICAgICAgX3RoaXMuYWRhcHRlci5yZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgSU5URVJBQ1RJT05fRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2dFR5cGUpIHtcbiAgICAgICAgICAgIF90aGlzLmFkYXB0ZXIuZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcihldnRUeXBlLCBfdGhpcy5pbnRlcmFjdGlvbkhhbmRsZXJfKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0RGlzYWJsZWQgPSBmdW5jdGlvbiAoZGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkVGFiSW5kZXhfKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cigndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVBdHRyKCdyb2xlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cigndGFiaW5kZXgnLCB0aGlzLnNhdmVkVGFiSW5kZXhfKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyKCdyb2xlJywgc3RyaW5ncy5JQ09OX1JPTEUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0QXJpYUxhYmVsID0gZnVuY3Rpb24gKGxhYmVsKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyKCdhcmlhLWxhYmVsJywgbGFiZWwpO1xuICAgIH07XG4gICAgTURDVGV4dEZpZWxkSWNvbkZvdW5kYXRpb24ucHJvdG90eXBlLnNldENvbnRlbnQgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0Q29udGVudChjb250ZW50KTtcbiAgICB9O1xuICAgIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgdmFyIGlzRW50ZXJLZXkgPSBldnQua2V5ID09PSAnRW50ZXInIHx8IGV2dC5rZXlDb2RlID09PSAxMztcbiAgICAgICAgaWYgKGV2dC50eXBlID09PSAnY2xpY2snIHx8IGlzRW50ZXJLZXkpIHtcbiAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIGNsaWNrIGZyb20gY2F1c2luZyBob3N0IGxhYmVsIHRvIGZvY3VzXG4gICAgICAgICAgICAvLyBpbnB1dFxuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeUljb25BY3Rpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ1RleHRGaWVsZEljb25Gb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCI8aVxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy10ZXh0LWZpZWxkX19pY29uJzogdHJ1ZSxcbiAgICAnbWRjLXRleHQtZmllbGRfX2ljb24tLWxlYWRpbmcnOiBsZWFkaW5nLFxuICAgICdtZGMtdGV4dC1maWVsZF9faWNvbi0tdHJhaWxpbmcnOiAhbGVhZGluZyxcbiAgfSl9XG4gIHt0YWJpbmRleH1cbiAgYXJpYS1oaWRkZW49e3RhYmluZGV4ID09PSAnLTEnID8gJ3RydWUnIDogJ2ZhbHNlJ31cbiAgYXJpYS1kaXNhYmxlZD17cm9sZSA9PT0gJ2J1dHRvbicgPyAoZGlzYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKSA6IG51bGx9XG4gIHtyb2xlfVxuICB7Li4uaW50ZXJuYWxBdHRyc31cbiAgey4uLiQkcmVzdFByb3BzfT48c2xvdCAvPjwvaVxuPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC90ZXh0ZmllbGQvaWNvbi9mb3VuZGF0aW9uLmpzJztcbiAgaW1wb3J0IHsgb25Nb3VudCwgZ2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCByb2xlID0gbnVsbDtcbiAgZXhwb3J0IGxldCB0YWJpbmRleCA9IHJvbGUgPT09ICdidXR0b24nID8gJzAnIDogJy0xJztcbiAgZXhwb3J0IGxldCBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgaW5zdGFuY2U7XG4gIGxldCBpbnRlcm5hbEF0dHJzID0ge307XG4gIGNvbnN0IGxlYWRpbmdTdG9yZSA9IGdldENvbnRleHQoJ1NNVUk6dGV4dGZpZWxkOmljb246bGVhZGluZycpO1xuICBjb25zdCBsZWFkaW5nID0gJGxlYWRpbmdTdG9yZTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpbnN0YW5jZSA9IG5ldyBNRENUZXh0RmllbGRJY29uRm91bmRhdGlvbih7XG4gICAgICBnZXRBdHRyLFxuICAgICAgc2V0QXR0cjogYWRkQXR0cixcbiAgICAgIHJlbW92ZUF0dHIsXG4gICAgICBzZXRDb250ZW50OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29udGVudCA9IHZhbHVlO1xuICAgICAgfSxcbiAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBkZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiAoZXZ0VHlwZSwgaGFuZGxlcikgPT5cbiAgICAgICAgZ2V0RWxlbWVudCgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0VHlwZSwgaGFuZGxlciksXG4gICAgICBub3RpZnlJY29uQWN0aW9uOiAoKSA9PiBkaXNwYXRjaChnZXRFbGVtZW50KCksICdNRENUZXh0RmllbGQ6aWNvbicpLFxuICAgIH0pO1xuXG4gICAgZGlzcGF0Y2goXG4gICAgICBnZXRFbGVtZW50KCksXG4gICAgICBsZWFkaW5nXG4gICAgICAgID8gJ1NNVUk6dGV4dGZpZWxkOmxlYWRpbmctaWNvbjptb3VudCdcbiAgICAgICAgOiAnU01VSTp0ZXh0ZmllbGQ6dHJhaWxpbmctaWNvbjptb3VudCcsXG4gICAgICBpbnN0YW5jZVxuICAgICk7XG5cbiAgICBpbnN0YW5jZS5pbml0KCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goXG4gICAgICAgIGdldEVsZW1lbnQoKSxcbiAgICAgICAgbGVhZGluZ1xuICAgICAgICAgID8gJ1NNVUk6dGV4dGZpZWxkOmxlYWRpbmctaWNvbjp1bm1vdW50J1xuICAgICAgICAgIDogJ1NNVUk6dGV4dGZpZWxkOnRyYWlsaW5nLWljb246dW5tb3VudCcsXG4gICAgICAgIGluc3RhbmNlXG4gICAgICApO1xuXG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gZ2V0QXR0cihuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgaW4gaW50ZXJuYWxBdHRyc1xuICAgICAgPyBpbnRlcm5hbEF0dHJzW25hbWVdXG4gICAgICA6IGdldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsQXR0cnNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICBpbnRlcm5hbEF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQXR0cihuYW1lKSB7XG4gICAgaWYgKCEobmFtZSBpbiBpbnRlcm5hbEF0dHJzKSB8fCBpbnRlcm5hbEF0dHJzW25hbWVdICE9IG51bGwpIHtcbiAgICAgIGludGVybmFsQXR0cnNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy10ZXh0LWZpZWxkLWhlbHBlci10ZXh0JzogdHJ1ZSxcbiAgICAnbWRjLXRleHQtZmllbGQtaGVscGVyLXRleHQtLXBlcnNpc3RlbnQnOiBwZXJzaXN0ZW50LFxuICAgICdtZGMtdGV4dC1maWVsZC1oZWxwZXItdGV4dC0tdmFsaWRhdGlvbi1tc2cnOiB2YWxpZGF0aW9uTXNnLFxuICAgIC4uLmludGVybmFsQ2xhc3NlcyxcbiAgfSl9XG4gIGFyaWEtaGlkZGVuPXtwZXJzaXN0ZW50ID8gbnVsbCA6ICd0cnVlJ31cbiAge2lkfVxuICB7Li4uaW50ZXJuYWxBdHRyc31cbiAgey4uLiQkcmVzdFByb3BzfVxuPlxuICB7I2lmIGNvbnRlbnQgPT0gbnVsbH08c2xvdCAvPns6ZWxzZX17Y29udGVudH17L2lmfVxuPC9kaXY+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBsZXQgY291bnRlciA9IDA7XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgTURDVGV4dEZpZWxkSGVscGVyVGV4dEZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2ZvdW5kYXRpb24uanMnO1xuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICB1c2VBY3Rpb25zLFxuICAgIGRpc3BhdGNoLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IGlkID0gJ1NNVUktdGV4dGZpZWxkLWhlbHBlci10ZXh0LScgKyBjb3VudGVyKys7XG4gIGV4cG9ydCBsZXQgcGVyc2lzdGVudCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHZhbGlkYXRpb25Nc2cgPSBmYWxzZTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgaW50ZXJuYWxDbGFzc2VzID0ge307XG4gIGxldCBpbnRlcm5hbEF0dHJzID0ge307XG4gIGxldCBjb250ZW50ID0gbnVsbDtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpbnN0YW5jZSA9IG5ldyBNRENUZXh0RmllbGRIZWxwZXJUZXh0Rm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzcyxcbiAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgaGFzQ2xhc3MsXG4gICAgICBnZXRBdHRyLFxuICAgICAgc2V0QXR0cjogYWRkQXR0cixcbiAgICAgIHJlbW92ZUF0dHIsXG4gICAgICBzZXRDb250ZW50OiAodmFsdWUpID0+IHtcbiAgICAgICAgY29udGVudCA9IHZhbHVlO1xuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChpZC5zdGFydHNXaXRoKCdTTVVJLXRleHRmaWVsZC1oZWxwZXItdGV4dC0nKSkge1xuICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnU01VSTp0ZXh0ZmllbGQ6aGVscGVyLXRleHQ6aWQnLCBpZCk7XG4gICAgfVxuICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ1NNVUk6dGV4dGZpZWxkOmhlbHBlci10ZXh0Om1vdW50JywgaW5zdGFuY2UpO1xuXG4gICAgaW5zdGFuY2UuaW5pdCgpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ1NNVUk6dGV4dGZpZWxkOmhlbHBlci10ZXh0OnVubW91bnQnLCBpbnN0YW5jZSk7XG5cbiAgICAgIGluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3Nlc1xuICAgICAgPyBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXVxuICAgICAgOiBnZXRFbGVtZW50KCkuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIWludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCEoY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3NlcykgfHwgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXR0cihuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgaW4gaW50ZXJuYWxBdHRyc1xuICAgICAgPyBpbnRlcm5hbEF0dHJzW25hbWVdXG4gICAgICA6IGdldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsQXR0cnNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICBpbnRlcm5hbEF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQXR0cihuYW1lKSB7XG4gICAgaWYgKCEobmFtZSBpbiBpbnRlcm5hbEF0dHJzKSB8fCBpbnRlcm5hbEF0dHJzW25hbWVdICE9IG51bGwpIHtcbiAgICAgIGludGVybmFsQXR0cnNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cIm1hcmdpbnNcIj5cbiAgPCEtLVxuICAgIE5vdGU6IHdoZW4geW91IGJpbmQgdG8gYGludmFsaWRgLCBidXQgeW91IG9ubHkgd2FudCB0b1xuICAgIG1vbml0b3IgaXQgaW5zdGVhZCBvZiB1cGRhdGluZyBpdCB5b3Vyc2VsZiwgeW91IGFsc29cbiAgICBzaG91bGQgaW5jbHVkZSBgdXBkYXRlSW52YWxpZGAuXG4gIC0tPlxuICA8VGV4dGZpZWxkXG4gICAgdHlwZT1cImVtYWlsXCJcbiAgICBiaW5kOmRpcnR5XG4gICAgYmluZDppbnZhbGlkXG4gICAgdXBkYXRlSW52YWxpZFxuICAgIGJpbmQ6dmFsdWVcbiAgICBsYWJlbD1cIlRvXCJcbiAgICBzdHlsZT1cIm1pbi13aWR0aDogMjUwcHg7XCJcbiAgICBpbnB1dCRhdXRvY29tcGxldGU9XCJlbWFpbFwiXG4gICAgb246Zm9jdXM9eygpID0+IChmb2N1c2VkID0gdHJ1ZSl9XG4gICAgb246Ymx1cj17KCkgPT4gKGZvY3VzZWQgPSBmYWxzZSl9XG4gICAgd2l0aFRyYWlsaW5nSWNvbj17IWRpc2FibGVkfVxuICA+XG4gICAgPCEtLVxuICAgICAgU2luY2UgdGhpcyBpY29uIGlzIGNvbmRpdGlvbmFsLCBpdCBuZWVkcyB0byBiZSB3cmFwcGVkXG4gICAgICBpbiBhIGZyYWdtZW50LCBhbmQgd2UgbmVlZCB0byBwcm92aWRlIHdpdGhUcmFpbGluZ0ljb24uXG4gICAgLS0+XG4gICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwidHJhaWxpbmdJY29uXCI+XG4gICAgICB7I2lmICFkaXNhYmxlZH1cbiAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHJvbGU9XCJidXR0b25cIiBvbjpjbGljaz17Y2xpY2tIYW5kbGVyfVxuICAgICAgICAgID5zZW5kPC9JY29uXG4gICAgICAgID5cbiAgICAgIHsvaWZ9XG4gICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gICAgPEhlbHBlclRleHQgdmFsaWRhdGlvbk1zZyBzbG90PVwiaGVscGVyXCI+XG4gICAgICBUaGF0J3Mgbm90IGEgdmFsaWQgZW1haWwgYWRkcmVzcy5cbiAgICA8L0hlbHBlclRleHQ+XG4gIDwvVGV4dGZpZWxkPlxuPC9kaXY+XG5cbjxwcmVcbiAgY2xhc3M9XCJzdGF0dXNcIj5Gb2N1c2VkOiB7Zm9jdXNlZH0sIERpcnR5OiB7ZGlydHl9LCBJbnZhbGlkOiB7aW52YWxpZH0sIFZhbHVlOiB7dmFsdWV9PC9wcmU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkJztcbiAgaW1wb3J0IEljb24gZnJvbSAnQHNtdWkvdGV4dGZpZWxkL2ljb24nO1xuICBpbXBvcnQgSGVscGVyVGV4dCBmcm9tICdAc211aS90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXgnO1xuXG4gIGxldCBmb2N1c2VkID0gZmFsc2U7XG4gIGxldCB2YWx1ZSA9IG51bGw7XG4gIGxldCBkaXJ0eSA9IGZhbHNlO1xuICBsZXQgaW52YWxpZCA9IGZhbHNlO1xuICAkOiBkaXNhYmxlZCA9IGZvY3VzZWQgfHwgIXZhbHVlIHx8ICFkaXJ0eSB8fCBpbnZhbGlkO1xuXG4gIGZ1bmN0aW9uIGNsaWNrSGFuZGxlcigpIHtcbiAgICBhbGVydChgU2VuZGluZyB0byAke3ZhbHVlfSFgKTtcbiAgICB2YWx1ZSA9IG51bGw7XG4gICAgZGlydHkgPSBmYWxzZTtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZCBiaW5kOnZhbHVlPXt2YWx1ZUF9IGxhYmVsPVwiTGFiZWxcIj5cbiAgICAgIDxIZWxwZXJUZXh0IHNsb3Q9XCJoZWxwZXJcIj5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQX08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZCBiaW5kOnZhbHVlPXt2YWx1ZUJ9IGxhYmVsPVwiTGVhZGluZyBJY29uXCI+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cImxlYWRpbmdJY29uXCI+ZXZlbnQ8L0ljb24+XG4gICAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgYmluZDp2YWx1ZT17dmFsdWVDfSBsYWJlbD1cIlRyYWlsaW5nIEljb25cIj5cbiAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzbG90PVwidHJhaWxpbmdJY29uXCI+ZGVsZXRlPC9JY29uPlxuICAgICAgPEhlbHBlclRleHQgc2xvdD1cImhlbHBlclwiPkhlbHBlciBUZXh0PC9IZWxwZXJUZXh0PlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVDfTwvcHJlPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkIGludmFsaWQgYmluZDp2YWx1ZT17dmFsdWVEfSBsYWJlbD1cIkludmFsaWRcIj5cbiAgICAgIDxIZWxwZXJUZXh0IHNsb3Q9XCJoZWxwZXJcIj5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlRH08L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuICBpbXBvcnQgSWNvbiBmcm9tICdAc211aS90ZXh0ZmllbGQvaWNvbic7XG4gIGltcG9ydCBIZWxwZXJUZXh0IGZyb20gJ0BzbXVpL3RleHRmaWVsZC9oZWxwZXItdGV4dC9pbmRleCc7XG5cbiAgbGV0IHZhbHVlQSA9ICcnO1xuICBsZXQgdmFsdWVCID0gJyc7XG4gIGxldCB2YWx1ZUMgPSAnJztcbiAgbGV0IHZhbHVlRCA9ICcnO1xuPC9zY3JpcHQ+XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZCB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVBfSBsYWJlbD1cIkxhYmVsXCI+XG4gICAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUF9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgdmFyaWFudD1cImZpbGxlZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlQn0gbGFiZWw9XCJMZWFkaW5nIEljb25cIj5cbiAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzbG90PVwibGVhZGluZ0ljb25cIj5ldmVudDwvSWNvbj5cbiAgICAgIDxIZWxwZXJUZXh0IHNsb3Q9XCJoZWxwZXJcIj5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQn08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZCB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVDfSBsYWJlbD1cIlRyYWlsaW5nIEljb25cIj5cbiAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzbG90PVwidHJhaWxpbmdJY29uXCI+ZGVsZXRlPC9JY29uPlxuICAgICAgPEhlbHBlclRleHQgc2xvdD1cImhlbHBlclwiPkhlbHBlciBUZXh0PC9IZWxwZXJUZXh0PlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVDfTwvcHJlPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkIGludmFsaWQgdmFyaWFudD1cImZpbGxlZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlRH0gbGFiZWw9XCJJbnZhbGlkXCI+XG4gICAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUR9PC9wcmU+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkJztcbiAgaW1wb3J0IEljb24gZnJvbSAnQHNtdWkvdGV4dGZpZWxkL2ljb24nO1xuICBpbXBvcnQgSGVscGVyVGV4dCBmcm9tICdAc211aS90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXgnO1xuXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgdmFsdWVDID0gJyc7XG4gIGxldCB2YWx1ZUQgPSAnJztcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgYmluZDp2YWx1ZT17dmFsdWVBfSBsYWJlbD1cIkxhYmVsXCI+XG4gICAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUF9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgYmluZDp2YWx1ZT17dmFsdWVCfSBsYWJlbD1cIkxlYWRpbmcgSWNvblwiPlxuICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHNsb3Q9XCJsZWFkaW5nSWNvblwiPmV2ZW50PC9JY29uPlxuICAgICAgPEhlbHBlclRleHQgc2xvdD1cImhlbHBlclwiPkhlbHBlciBUZXh0PC9IZWxwZXJUZXh0PlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVCfTwvcHJlPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlQ30gbGFiZWw9XCJUcmFpbGluZyBJY29uXCI+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cInRyYWlsaW5nSWNvblwiPmRlbGV0ZTwvSWNvbj5cbiAgICAgIDxIZWxwZXJUZXh0IHNsb3Q9XCJoZWxwZXJcIj5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQ308L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZCB2YXJpYW50PVwib3V0bGluZWRcIiBpbnZhbGlkIGJpbmQ6dmFsdWU9e3ZhbHVlRH0gbGFiZWw9XCJJbnZhbGlkXCI+XG4gICAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUR9PC9wcmU+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkJztcbiAgaW1wb3J0IEljb24gZnJvbSAnQHNtdWkvdGV4dGZpZWxkL2ljb24nO1xuICBpbXBvcnQgSGVscGVyVGV4dCBmcm9tICdAc211aS90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXgnO1xuXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgdmFsdWVDID0gJyc7XG4gIGxldCB2YWx1ZUQgPSAnJztcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIGNsYXNzPVwic2hhcGVkLWZpbGxlZFwiXG4gICAgICB2YXJpYW50PVwiZmlsbGVkXCJcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlQX1cbiAgICAgIGxhYmVsPVwiTGFiZWxcIlxuICAgID5cbiAgICAgIDxIZWxwZXJUZXh0IHNsb3Q9XCJoZWxwZXJcIj5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQX08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZFxuICAgICAgY2xhc3M9XCJzaGFwZWQtZmlsbGVkXCJcbiAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVCfVxuICAgICAgbGFiZWw9XCJMZWFkaW5nIEljb25cIlxuICAgID5cbiAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzbG90PVwibGVhZGluZ0ljb25cIj5ldmVudDwvSWNvbj5cbiAgICAgIDxIZWxwZXJUZXh0IHNsb3Q9XCJoZWxwZXJcIj5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQn08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZFxuICAgICAgY2xhc3M9XCJzaGFwZWQtZmlsbGVkXCJcbiAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVDfVxuICAgICAgbGFiZWw9XCJUcmFpbGluZyBJY29uXCJcbiAgICA+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cInRyYWlsaW5nSWNvblwiPmRlbGV0ZTwvSWNvbj5cbiAgICAgIDxIZWxwZXJUZXh0IHNsb3Q9XCJoZWxwZXJcIj5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQ308L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZFxuICAgICAgY2xhc3M9XCJzaGFwZWQtZmlsbGVkXCJcbiAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgaW52YWxpZFxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVEfVxuICAgICAgbGFiZWw9XCJJbnZhbGlkXCJcbiAgICA+XG4gICAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUR9PC9wcmU+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkJztcbiAgaW1wb3J0IEljb24gZnJvbSAnQHNtdWkvdGV4dGZpZWxkL2ljb24nO1xuICBpbXBvcnQgSGVscGVyVGV4dCBmcm9tICdAc211aS90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXgnO1xuXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgdmFsdWVDID0gJyc7XG4gIGxldCB2YWx1ZUQgPSAnJztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICogOmdsb2JhbCguc2hhcGVkLWZpbGxlZCkge1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHggMTZweCAwIDA7XG4gIH1cbjwvc3R5bGU+XG4iLCI8ZGl2IGNsYXNzPVwiY29sdW1ucyBtYXJnaW5zXCI+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZFxuICAgICAgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWRcIlxuICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlQX1cbiAgICAgIGxhYmVsPVwiTGFiZWxcIlxuICAgID5cbiAgICAgIDxIZWxwZXJUZXh0IHNsb3Q9XCJoZWxwZXJcIj5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQX08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZFxuICAgICAgY2xhc3M9XCJzaGFwZWQtb3V0bGluZWRcIlxuICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlQn1cbiAgICAgIGxhYmVsPVwiTGVhZGluZyBJY29uXCJcbiAgICA+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cImxlYWRpbmdJY29uXCI+ZXZlbnQ8L0ljb24+XG4gICAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIGNsYXNzPVwic2hhcGVkLW91dGxpbmVkXCJcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUN9XG4gICAgICBsYWJlbD1cIlRyYWlsaW5nIEljb25cIlxuICAgID5cbiAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzbG90PVwidHJhaWxpbmdJY29uXCI+ZGVsZXRlPC9JY29uPlxuICAgICAgPEhlbHBlclRleHQgc2xvdD1cImhlbHBlclwiPkhlbHBlciBUZXh0PC9IZWxwZXJUZXh0PlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVDfTwvcHJlPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkXG4gICAgICBjbGFzcz1cInNoYXBlZC1vdXRsaW5lZFwiXG4gICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgaW52YWxpZFxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVEfVxuICAgICAgbGFiZWw9XCJJbnZhbGlkXCJcbiAgICA+XG4gICAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUR9PC9wcmU+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkJztcbiAgaW1wb3J0IEljb24gZnJvbSAnQHNtdWkvdGV4dGZpZWxkL2ljb24nO1xuICBpbXBvcnQgSGVscGVyVGV4dCBmcm9tICdAc211aS90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXgnO1xuXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgdmFsdWVDID0gJyc7XG4gIGxldCB2YWx1ZUQgPSAnJztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gICpcbiAgICA6Z2xvYmFsKC5zaGFwZWQtb3V0bGluZWRcbiAgICAgIC5tZGMtbm90Y2hlZC1vdXRsaW5lXG4gICAgICAubWRjLW5vdGNoZWQtb3V0bGluZV9fbGVhZGluZykge1xuICAgIGJvcmRlci1yYWRpdXM6IDI4cHggMCAwIDI4cHg7XG4gICAgd2lkdGg6IDI4cHg7XG4gIH1cbiAgKlxuICAgIDpnbG9iYWwoLnNoYXBlZC1vdXRsaW5lZFxuICAgICAgLm1kYy1ub3RjaGVkLW91dGxpbmVcbiAgICAgIC5tZGMtbm90Y2hlZC1vdXRsaW5lX190cmFpbGluZykge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMjhweCAyOHB4IDA7XG4gIH1cbiAgKiA6Z2xvYmFsKC5zaGFwZWQtb3V0bGluZWQgLm1kYy1ub3RjaGVkLW91dGxpbmUgLm1kYy1ub3RjaGVkLW91dGxpbmVfX25vdGNoKSB7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAyOHB4ICogMik7XG4gIH1cbiAgKlxuICAgIDpnbG9iYWwoLnNoYXBlZC1vdXRsaW5lZC5tZGMtdGV4dC1maWVsZC0td2l0aC1sZWFkaW5nLWljb246bm90KC5tZGMtdGV4dC1maWVsZC0tbGFiZWwtZmxvYXRpbmcpXG4gICAgICAubWRjLWZsb2F0aW5nLWxhYmVsKSB7XG4gICAgbGVmdDogMTZweDtcbiAgfVxuICAqIDpnbG9iYWwoLnNoYXBlZC1vdXRsaW5lZCArIC5tZGMtdGV4dC1maWVsZC1oZWxwZXItbGluZSkge1xuICAgIHBhZGRpbmctbGVmdDogMzJweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyOHB4O1xuICB9XG48L3N0eWxlPlxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgYmluZDp2YWx1ZT17dmFsdWVBfSBsYWJlbD1cIlN0YW5kYXJkXCIgcmVxdWlyZWQgLz5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQX08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZCB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVCfSBsYWJlbD1cIkZpbGxlZFwiIHJlcXVpcmVkIC8+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUN9XG4gICAgICBsYWJlbD1cIk91dGxpbmVkXCJcbiAgICAgIHJlcXVpcmVkXG4gICAgLz5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQ308L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgdmFsdWVDID0gJyc7XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUF9XG4gICAgICBsYWJlbD1cIlN0YW5kYXJkXCJcbiAgICAgIHByZWZpeD1cIiRcIlxuICAgICAgaW5wdXQkcGF0dGVybj17J1xcXFxkKyhcXFxcLlxcXFxkezJ9KT8nfVxuICAgIC8+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUF9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVCfVxuICAgICAgbGFiZWw9XCJGaWxsZWRcIlxuICAgICAgcHJlZml4PVwiJFwiXG4gICAgICBpbnB1dCRwYXR0ZXJuPXsnXFxcXGQrKFxcXFwuXFxcXGR7Mn0pPyd9XG4gICAgLz5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQn08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZFxuICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlQ31cbiAgICAgIGxhYmVsPVwiT3V0bGluZWRcIlxuICAgICAgcHJlZml4PVwiJFwiXG4gICAgICBpbnB1dCRwYXR0ZXJuPXsnXFxcXGQrKFxcXFwuXFxcXGR7Mn0pPyd9XG4gICAgLz5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQ308L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgdmFsdWVDID0gJyc7XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUF9XG4gICAgICBsYWJlbD1cIlN0YW5kYXJkXCJcbiAgICAgIHN1ZmZpeD1cIuOOj1wiXG4gICAgICBpbnB1dCRwYXR0ZXJuPVwiXFxkK1wiXG4gICAgLz5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQX08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZFxuICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUJ9XG4gICAgICBsYWJlbD1cIkZpbGxlZFwiXG4gICAgICBzdWZmaXg9XCLjjo9cIlxuICAgICAgaW5wdXQkcGF0dGVybj1cIlxcZCtcIlxuICAgIC8+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUN9XG4gICAgICBsYWJlbD1cIk91dGxpbmVkXCJcbiAgICAgIHN1ZmZpeD1cIuOOj1wiXG4gICAgICBpbnB1dCRwYXR0ZXJuPVwiXFxkK1wiXG4gICAgLz5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQ308L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgdmFsdWVDID0gJyc7XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkIGJpbmQ6dmFsdWU9e3ZhbHVlQX0gLz5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQX08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZCB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVCfSAvPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVCfTwvcHJlPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlQ30gLz5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQ308L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgdmFsdWVDID0gJyc7XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJjb2x1bW5zIG1hcmdpbnNcIj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkIGJpbmQ6dmFsdWU9e3ZhbHVlQX0gbGFiZWw9XCJTdGFuZGFyZFwiPlxuICAgICAgPEhlbHBlclRleHQgcGVyc2lzdGVudCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUF9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgdmFyaWFudD1cImZpbGxlZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlQn0gbGFiZWw9XCJGaWxsZWRcIj5cbiAgICAgIDxIZWxwZXJUZXh0IHBlcnNpc3RlbnQgc2xvdD1cImhlbHBlclwiPkhlbHBlciBUZXh0PC9IZWxwZXJUZXh0PlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVCfTwvcHJlPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGJpbmQ6dmFsdWU9e3ZhbHVlQ30gbGFiZWw9XCJPdXRsaW5lZFwiPlxuICAgICAgPEhlbHBlclRleHQgcGVyc2lzdGVudCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUN9PC9wcmU+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkJztcbiAgaW1wb3J0IEhlbHBlclRleHQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2luZGV4JztcblxuICBsZXQgdmFsdWVBID0gJyc7XG4gIGxldCB2YWx1ZUIgPSAnJztcbiAgbGV0IHZhbHVlQyA9ICcnO1xuPC9zY3JpcHQ+XG4iLCI8ZGl2XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLXRleHQtZmllbGQtY2hhcmFjdGVyLWNvdW50ZXInOiB0cnVlLFxuICB9KX1cbiAgey4uLiQkcmVzdFByb3BzfVxuPlxuICB7I2lmIGNvbnRlbnQgPT0gbnVsbH08c2xvdCAvPns6ZWxzZX17Y29udGVudH17L2lmfVxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IE1EQ1RleHRGaWVsZENoYXJhY3RlckNvdW50ZXJGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL3RleHRmaWVsZC9jaGFyYWN0ZXItY291bnRlci9mb3VuZGF0aW9uLmpzJztcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgY29udGVudCA9IG51bGw7XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDVGV4dEZpZWxkQ2hhcmFjdGVyQ291bnRlckZvdW5kYXRpb24oe1xuICAgICAgc2V0Q29udGVudDogKHZhbHVlKSA9PiB7XG4gICAgICAgIGNvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOnRleHRmaWVsZDpjaGFyYWN0ZXItY291bnRlcjptb3VudCcsIGluc3RhbmNlKTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChcbiAgICAgICAgZ2V0RWxlbWVudCgpLFxuICAgICAgICAnU01VSTp0ZXh0ZmllbGQ6Y2hhcmFjdGVyLWNvdW50ZXI6dW5tb3VudCcsXG4gICAgICAgIGluc3RhbmNlXG4gICAgICApO1xuXG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgYmluZDp2YWx1ZT17dmFsdWVBfSBsYWJlbD1cIlN0YW5kYXJkXCIgaW5wdXQkbWF4bGVuZ3RoPVwiMThcIj5cbiAgICAgIDxDaGFyYWN0ZXJDb3VudGVyIHNsb3Q9XCJoZWxwZXJcIj4wIC8gMTg8L0NoYXJhY3RlckNvdW50ZXI+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUF9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVCfVxuICAgICAgbGFiZWw9XCJGaWxsZWRcIlxuICAgICAgaW5wdXQkbWF4bGVuZ3RoPVwiMThcIlxuICAgID5cbiAgICAgIDxDaGFyYWN0ZXJDb3VudGVyIHNsb3Q9XCJoZWxwZXJcIj4wIC8gMTg8L0NoYXJhY3RlckNvdW50ZXI+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUN9XG4gICAgICBsYWJlbD1cIk91dGxpbmVkXCJcbiAgICAgIGlucHV0JG1heGxlbmd0aD1cIjE4XCJcbiAgICA+XG4gICAgICA8Q2hhcmFjdGVyQ291bnRlciBzbG90PVwiaGVscGVyXCI+MCAvIDE4PC9DaGFyYWN0ZXJDb3VudGVyPlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVDfTwvcHJlPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVGV4dGZpZWxkIGZyb20gJ0BzbXVpL3RleHRmaWVsZCc7XG4gIGltcG9ydCBDaGFyYWN0ZXJDb3VudGVyIGZyb20gJ0BzbXVpL3RleHRmaWVsZC9jaGFyYWN0ZXItY291bnRlci9pbmRleCc7XG5cbiAgbGV0IHZhbHVlQSA9ICcnO1xuICBsZXQgdmFsdWVCID0gJyc7XG4gIGxldCB2YWx1ZUMgPSAnJztcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgYmluZDp2YWx1ZT17dmFsdWVBfSBsYWJlbD1cIlN0YW5kYXJkXCIgaW5wdXQkbWF4bGVuZ3RoPVwiMThcIj5cbiAgICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cImhlbHBlclwiPlxuICAgICAgICA8SGVscGVyVGV4dD5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICAgICAgPENoYXJhY3RlckNvdW50ZXI+MCAvIDE4PC9DaGFyYWN0ZXJDb3VudGVyPlxuICAgICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUF9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVCfVxuICAgICAgbGFiZWw9XCJGaWxsZWRcIlxuICAgICAgaW5wdXQkbWF4bGVuZ3RoPVwiMThcIlxuICAgID5cbiAgICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cImhlbHBlclwiPlxuICAgICAgICA8SGVscGVyVGV4dD5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgICAgICAgPENoYXJhY3RlckNvdW50ZXI+MCAvIDE4PC9DaGFyYWN0ZXJDb3VudGVyPlxuICAgICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZUN9XG4gICAgICBsYWJlbD1cIk91dGxpbmVkXCJcbiAgICAgIGlucHV0JG1heGxlbmd0aD1cIjE4XCJcbiAgICA+XG4gICAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJoZWxwZXJcIj5cbiAgICAgICAgPEhlbHBlclRleHQ+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gICAgICAgIDxDaGFyYWN0ZXJDb3VudGVyPjAgLyAxODwvQ2hhcmFjdGVyQ291bnRlcj5cbiAgICAgIDwvc3ZlbHRlOmZyYWdtZW50PlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVDfTwvcHJlPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVGV4dGZpZWxkIGZyb20gJ0BzbXVpL3RleHRmaWVsZCc7XG4gIGltcG9ydCBIZWxwZXJUZXh0IGZyb20gJ0BzbXVpL3RleHRmaWVsZC9oZWxwZXItdGV4dC9pbmRleCc7XG4gIGltcG9ydCBDaGFyYWN0ZXJDb3VudGVyIGZyb20gJ0BzbXVpL3RleHRmaWVsZC9jaGFyYWN0ZXItY291bnRlci9pbmRleCc7XG5cbiAgbGV0IHZhbHVlQSA9ICcnO1xuICBsZXQgdmFsdWVCID0gJyc7XG4gIGxldCB2YWx1ZUMgPSAnJztcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgYmluZDp2YWx1ZT17dmFsdWVBfSBsYWJlbD1cIlN0YW5kYXJkXCI+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cImxlYWRpbmdJY29uXCI+ZXZlbnQ8L0ljb24+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cInRyYWlsaW5nSWNvblwiPmRlbGV0ZTwvSWNvbj5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQX08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZCB2YXJpYW50PVwiZmlsbGVkXCIgYmluZDp2YWx1ZT17dmFsdWVCfSBsYWJlbD1cIkZpbGxlZFwiPlxuICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHNsb3Q9XCJsZWFkaW5nSWNvblwiPmV2ZW50PC9JY29uPlxuICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiIHNsb3Q9XCJ0cmFpbGluZ0ljb25cIj5kZWxldGU8L0ljb24+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgdmFyaWFudD1cIm91dGxpbmVkXCIgYmluZDp2YWx1ZT17dmFsdWVDfSBsYWJlbD1cIk91dGxpbmVkXCI+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cImxlYWRpbmdJY29uXCI+ZXZlbnQ8L0ljb24+XG4gICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCIgc2xvdD1cInRyYWlsaW5nSWNvblwiPmRlbGV0ZTwvSWNvbj5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQ308L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuICBpbXBvcnQgSWNvbiBmcm9tICdAc211aS90ZXh0ZmllbGQvaWNvbic7XG5cbiAgbGV0IHZhbHVlQSA9ICcnO1xuICBsZXQgdmFsdWVCID0gJyc7XG4gIGxldCB2YWx1ZUMgPSAnJztcbjwvc2NyaXB0PlxuIiwiPCEtLVxuICBJY29ucyBhcmUgbm9ybWFsbHkgZGlzY292ZXJlZCB0aHJvdWdoIHRoZWlyIHNsb3QsXG4gIGJ1dCBTdmVsdGUgc2xvdHMgY2Fubm90IGJlIGNvbmRpdGlvbmFsLCBzbyB5b3UgY2FuXG4gIHVzZSBhIGZyYWdtZW50IHdpdGggYSBjb25kaXRpb25hbCBpY29uIGluc2lkZSBhbmRcbiAgcGFzcyB0aGUgYHdpdGhMZWFkaW5nSWNvbmAgb3IgYHdpdGhUcmFpbGluZ0ljb25gXG4gIHByb3BzIHRvIHVzZSBjb25kaXRpb25hbCBpY29ucy5cbi0tPlxuPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIHdpdGhMZWFkaW5nSWNvbj17c2hvd0xlYWRpbmdJY29uc31cbiAgICAgIHdpdGhUcmFpbGluZ0ljb249e3Nob3dUcmFpbGluZ0ljb25zfVxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVBfVxuICAgICAgbGFiZWw9XCJTdGFuZGFyZFwiXG4gICAgPlxuICAgICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwibGVhZGluZ0ljb25cIj5cbiAgICAgICAgeyNpZiBzaG93TGVhZGluZ0ljb25zfVxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5ldmVudDwvSWNvbj5cbiAgICAgICAgey9pZn1cbiAgICAgIDwvc3ZlbHRlOmZyYWdtZW50PlxuICAgICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwidHJhaWxpbmdJY29uXCI+XG4gICAgICAgIHsjaWYgc2hvd1RyYWlsaW5nSWNvbnN9XG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZTwvSWNvbj5cbiAgICAgICAgey9pZn1cbiAgICAgIDwvc3ZlbHRlOmZyYWdtZW50PlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVBfTwvcHJlPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkXG4gICAgICB3aXRoTGVhZGluZ0ljb249e3Nob3dMZWFkaW5nSWNvbnN9XG4gICAgICB3aXRoVHJhaWxpbmdJY29uPXtzaG93VHJhaWxpbmdJY29uc31cbiAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVCfVxuICAgICAgbGFiZWw9XCJGaWxsZWRcIlxuICAgID5cbiAgICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cImxlYWRpbmdJY29uXCI+XG4gICAgICAgIHsjaWYgc2hvd0xlYWRpbmdJY29uc31cbiAgICAgICAgICA8SWNvbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZXZlbnQ8L0ljb24+XG4gICAgICAgIHsvaWZ9XG4gICAgICA8L3N2ZWx0ZTpmcmFnbWVudD5cbiAgICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cInRyYWlsaW5nSWNvblwiPlxuICAgICAgICB7I2lmIHNob3dUcmFpbGluZ0ljb25zfVxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5kZWxldGU8L0ljb24+XG4gICAgICAgIHsvaWZ9XG4gICAgICA8L3N2ZWx0ZTpmcmFnbWVudD5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlQn08L3ByZT5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPFRleHRmaWVsZFxuICAgICAgd2l0aExlYWRpbmdJY29uPXtzaG93TGVhZGluZ0ljb25zfVxuICAgICAgd2l0aFRyYWlsaW5nSWNvbj17c2hvd1RyYWlsaW5nSWNvbnN9XG4gICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgYmluZDp2YWx1ZT17dmFsdWVDfVxuICAgICAgbGFiZWw9XCJPdXRsaW5lZFwiXG4gICAgPlxuICAgICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwibGVhZGluZ0ljb25cIj5cbiAgICAgICAgeyNpZiBzaG93TGVhZGluZ0ljb25zfVxuICAgICAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5ldmVudDwvSWNvbj5cbiAgICAgICAgey9pZn1cbiAgICAgIDwvc3ZlbHRlOmZyYWdtZW50PlxuICAgICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwidHJhaWxpbmdJY29uXCI+XG4gICAgICAgIHsjaWYgc2hvd1RyYWlsaW5nSWNvbnN9XG4gICAgICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmRlbGV0ZTwvSWNvbj5cbiAgICAgICAgey9pZn1cbiAgICAgIDwvc3ZlbHRlOmZyYWdtZW50PlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVDfTwvcHJlPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2PlxuICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiAoc2hvd0xlYWRpbmdJY29ucyA9ICFzaG93TGVhZGluZ0ljb25zKX0+XG4gICAgVG9nZ2xlIExlYWRpbmcgSWNvbnNcbiAgPC9CdXR0b24+XG4gIDxCdXR0b24gb246Y2xpY2s9eygpID0+IChzaG93VHJhaWxpbmdJY29ucyA9ICFzaG93VHJhaWxpbmdJY29ucyl9PlxuICAgIFRvZ2dsZSBUcmFpbGluZyBJY29uc1xuICA8L0J1dHRvbj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVGV4dGZpZWxkIGZyb20gJ0BzbXVpL3RleHRmaWVsZCc7XG4gIGltcG9ydCBJY29uIGZyb20gJ0BzbXVpL3RleHRmaWVsZC9pY29uJztcbiAgaW1wb3J0IEJ1dHRvbiBmcm9tICdAc211aS9idXR0b24nO1xuXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgdmFsdWVDID0gJyc7XG5cbiAgbGV0IHNob3dMZWFkaW5nSWNvbnMgPSB0cnVlO1xuICBsZXQgc2hvd1RyYWlsaW5nSWNvbnMgPSB0cnVlO1xuPC9zY3JpcHQ+XG4iLCI8ZGl2IGNsYXNzPVwibWFyZ2luc1wiPlxuICA8VGV4dGZpZWxkIHRleHRhcmVhIGJpbmQ6dmFsdWUgbGFiZWw9XCJMYWJlbFwiPlxuICAgIDxIZWxwZXJUZXh0IHNsb3Q9XCJoZWxwZXJcIj5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dD5cbiAgPC9UZXh0ZmllbGQ+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuICBpbXBvcnQgSGVscGVyVGV4dCBmcm9tICdAc211aS90ZXh0ZmllbGQvaGVscGVyLXRleHQvaW5kZXgnO1xuXG4gIGxldCB2YWx1ZSA9ICcnO1xuPC9zY3JpcHQ+XG4iLCI8ZGl2IGNsYXNzPVwibWFyZ2luc1wiPlxuICA8VGV4dGZpZWxkIHRleHRhcmVhIGlucHV0JG1heGxlbmd0aD1cIjEwMFwiIGJpbmQ6dmFsdWUgbGFiZWw9XCJMYWJlbFwiPlxuICAgIDxDaGFyYWN0ZXJDb3VudGVyIHNsb3Q9XCJpbnRlcm5hbENvdW50ZXJcIj4wIC8gMTAwPC9DaGFyYWN0ZXJDb3VudGVyPlxuICA8L1RleHRmaWVsZD5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVGV4dGZpZWxkIGZyb20gJ0BzbXVpL3RleHRmaWVsZCc7XG4gIGltcG9ydCBDaGFyYWN0ZXJDb3VudGVyIGZyb20gJ0BzbXVpL3RleHRmaWVsZC9jaGFyYWN0ZXItY291bnRlci9pbmRleCc7XG5cbiAgbGV0IHZhbHVlID0gJyc7XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJtYXJnaW5zXCI+XG4gIDxUZXh0ZmllbGRcbiAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiXG4gICAgaGVscGVyTGluZSRzdHlsZT1cIndpZHRoOiAxMDAlO1wiXG4gICAgYmluZDp2YWx1ZVxuICAgIGxhYmVsPVwiTGFiZWxcIlxuICA+XG4gICAgPEhlbHBlclRleHQgc2xvdD1cImhlbHBlclwiPkhlbHBlciBUZXh0PC9IZWxwZXJUZXh0PlxuICA8L1RleHRmaWVsZD5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVGV4dGZpZWxkIGZyb20gJ0BzbXVpL3RleHRmaWVsZCc7XG4gIGltcG9ydCBIZWxwZXJUZXh0IGZyb20gJ0BzbXVpL3RleHRmaWVsZC9oZWxwZXItdGV4dC9pbmRleCc7XG5cbiAgbGV0IHZhbHVlID0gJyc7XG48L3NjcmlwdD5cbiIsIjxkaXYgY2xhc3M9XCJtYXJnaW5zXCI+XG4gIDxUZXh0ZmllbGRcbiAgICBzdHlsZT1cIndpZHRoOiAxMDAlO1wiXG4gICAgaGVscGVyTGluZSRzdHlsZT1cIndpZHRoOiAxMDAlO1wiXG4gICAgdGV4dGFyZWFcbiAgICBiaW5kOnZhbHVlXG4gICAgbGFiZWw9XCJMYWJlbFwiXG4gID5cbiAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gIDwvVGV4dGZpZWxkPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkJztcbiAgaW1wb3J0IEhlbHBlclRleHQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2luZGV4JztcblxuICBsZXQgdmFsdWUgPSAnJztcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cIm1hcmdpbnNcIj5cbiAgPFRleHRmaWVsZFxuICAgIHRleHRhcmVhXG4gICAgYmluZDp2YWx1ZVxuICAgIGxhYmVsPVwiTGFiZWxcIlxuICAgIGlucHV0JHJvd3M9XCI0XCJcbiAgICBpbnB1dCRjb2xzPVwiMjRcIlxuICAgIGlucHV0JHJlc2l6YWJsZT17ZmFsc2V9XG4gID5cbiAgICA8SGVscGVyVGV4dCBzbG90PVwiaGVscGVyXCI+SGVscGVyIFRleHQ8L0hlbHBlclRleHQ+XG4gIDwvVGV4dGZpZWxkPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBUZXh0ZmllbGQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkJztcbiAgaW1wb3J0IEhlbHBlclRleHQgZnJvbSAnQHNtdWkvdGV4dGZpZWxkL2hlbHBlci10ZXh0L2luZGV4JztcblxuICBsZXQgdmFsdWUgPSAnJztcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cIm1hcmdpbnNcIj5cbiAgPFRleHRmaWVsZCBiaW5kOnZhbHVlPXt2YWx1ZUVsZW1lbnRzTGFiZWx9IHR5cGU9XCJlbWFpbFwiPlxuICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cImxhYmVsXCI+XG4gICAgICA8Q29tbW9uSWNvblxuICAgICAgICBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCJcbiAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDFlbTsgbGluZS1oZWlnaHQ6IG5vcm1hbDsgdmVydGljYWwtYWxpZ246IHRvcDtcIlxuICAgICAgICA+ZW1haWw8L0NvbW1vbkljb25cbiAgICAgID4gRW1haWxcbiAgICA8L3N2ZWx0ZTpmcmFnbWVudD5cbiAgPC9UZXh0ZmllbGQ+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRleHRmaWVsZCBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuICBpbXBvcnQgeyBJY29uIGFzIENvbW1vbkljb24gfSBmcm9tICdAc211aS9jb21tb24nO1xuXG4gIGxldCB2YWx1ZUVsZW1lbnRzTGFiZWwgPSAnJztcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGQgYmluZDp2YWx1ZT17dmFsdWVUeXBlTnVtYmVyfSBsYWJlbD1cIk51bWJlclwiIHR5cGU9XCJudW1iZXJcIiAvPlxuICA8L2Rpdj5cblxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlVHlwZU51bWJlclN0ZXB9XG4gICAgICBsYWJlbD1cIk51bWJlciB3aXRoIFN0ZXBcIlxuICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICBpbnB1dCRzdGVwPVwiMlwiXG4gICAgLz5cbiAgPC9kaXY+XG5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkXG4gICAgICBiaW5kOnZhbHVlPXt2YWx1ZVR5cGVEYXRlfVxuICAgICAgbGFiZWw9XCJEYXRlVGltZS1Mb2NhbFwiXG4gICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgIC8+XG4gIDwvZGl2PlxuXG4gIDxkaXY+XG4gICAgPCEtLVxuICAgICAgTm90ZTogdGhlIGNoYW5nZSBhbmQgaW5wdXQgZXZlbnRzIGZpcmVcbiAgICAgIGJlZm9yZSB0aGUgYGZpbGVzYCBwcm9wIGlzIHVwZGF0ZWQuXG4gICAgLS0+XG4gICAgPFRleHRmaWVsZCBiaW5kOmZpbGVzPXt2YWx1ZVR5cGVGaWxlc30gbGFiZWw9XCJGaWxlXCIgdHlwZT1cImZpbGVcIiAvPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgVGV4dGZpZWxkIGZyb20gJ0BzbXVpL3RleHRmaWVsZCc7XG5cbiAgbGV0IHZhbHVlVHlwZU51bWJlciA9IDA7XG4gIGxldCB2YWx1ZVR5cGVOdW1iZXJTdGVwID0gMDtcbiAgbGV0IHZhbHVlVHlwZURhdGUgPSAnJztcbiAgbGV0IHZhbHVlVHlwZUZpbGVzID0gW107XG5cbiAgLy8gTm90ZTogdGhlIGNoYW5nZSBhbmQgaW5wdXQgZXZlbnRzIGZpcmUgYmVmb3JlIHRoZSBgZmlsZXNgIHByb3AgaXMgdXBkYXRlZC5cbiAgJDogaWYgKHZhbHVlVHlwZUZpbGVzLmxlbmd0aCkge1xuICAgIGFsZXJ0KCdTZWxlY3RlZCAnICsgdmFsdWVUeXBlRmlsZXMubGVuZ3RoICsgJyBmaWxlKHMpLicpO1xuICB9XG48L3NjcmlwdD5cbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNiBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBNRENGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1EQ0ZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICBpZiAoYWRhcHRlciA9PT0gdm9pZCAwKSB7IGFkYXB0ZXIgPSB7fTsgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIgPSBhZGFwdGVyO1xuICAgIH1cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGV2ZXJ5XG4gICAgICAgICAgICAvLyBDU1MgY2xhc3MgdGhlIGZvdW5kYXRpb24gY2xhc3MgbmVlZHMgYXMgYSBwcm9wZXJ0eS4gZS5nLiB7QUNUSVZFOiAnbWRjLWNvbXBvbmVudC0tYWN0aXZlJ31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcInN0cmluZ3NcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBzZW1hbnRpYyBzdHJpbmdzIGFzIGNvbnN0YW50cy4gZS5nLiB7QVJJQV9ST0xFOiAndGFibGlzdCd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJudW1iZXJzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gb2YgaXRzIHNlbWFudGljIG51bWJlcnMgYXMgY29uc3RhbnRzLiBlLmcuIHtBTklNQVRJT05fREVMQVlfTVM6IDM1MH1cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIG1heSBjaG9vc2UgdG8gaW1wbGVtZW50IHRoaXMgZ2V0dGVyIGluIG9yZGVyIHRvIHByb3ZpZGUgYSBjb252ZW5pZW50XG4gICAgICAgICAgICAvLyB3YXkgb2Ygdmlld2luZyB0aGUgbmVjZXNzYXJ5IG1ldGhvZHMgb2YgYW4gYWRhcHRlci4gSW4gdGhlIGZ1dHVyZSwgdGhpcyBjb3VsZCBhbHNvIGJlIHVzZWQgZm9yIGFkYXB0ZXJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb24uXG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChyZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICBNRENGb3VuZGF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdWJjbGFzc2VzIHNob3VsZCBvdmVycmlkZSB0aGlzIG1ldGhvZCB0byBwZXJmb3JtIGRlLWluaXRpYWxpemF0aW9uIHJvdXRpbmVzIChkZS1yZWdpc3RlcmluZyBldmVudHMsIGV0Yy4pXG4gICAgfTtcbiAgICByZXR1cm4gTURDRm91bmRhdGlvbjtcbn0oKSk7XG5leHBvcnQgeyBNRENGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5leHBvcnQgdmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTEFCRUxfRkxPQVRfQUJPVkU6ICdtZGMtZmxvYXRpbmctbGFiZWwtLWZsb2F0LWFib3ZlJyxcbiAgICBMQUJFTF9SRVFVSVJFRDogJ21kYy1mbG9hdGluZy1sYWJlbC0tcmVxdWlyZWQnLFxuICAgIExBQkVMX1NIQUtFOiAnbWRjLWZsb2F0aW5nLWxhYmVsLS1zaGFrZScsXG4gICAgUk9PVDogJ21kYy1mbG9hdGluZy1sYWJlbCcsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnRzLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgTURDRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9iYXNlL2ZvdW5kYXRpb24nO1xuaW1wb3J0IHsgY3NzQ2xhc3NlcyB9IGZyb20gJy4vY29uc3RhbnRzJztcbnZhciBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24oYWRhcHRlcikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc2hha2VBbmltYXRpb25FbmRIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmhhbmRsZVNoYWtlQW5pbWF0aW9uRW5kXygpOyB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiwgXCJjc3NDbGFzc2VzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gY3NzQ2xhc3NlcztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ0Zsb2F0aW5nTGFiZWxBZGFwdGVyfSBmb3IgdHlwaW5nIGluZm9ybWF0aW9uIG9uIHBhcmFtZXRlcnMgYW5kIHJldHVybiB0eXBlcy5cbiAgICAgICAgICovXG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzIE1ldGhvZHMgc2hvdWxkIGJlIGluIHRoZSBzYW1lIG9yZGVyIGFzIHRoZSBhZGFwdGVyIGludGVyZmFjZS5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYWRkQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIGdldFdpZHRoOiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIHRzbGludDplbmFibGU6b2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzXG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdhbmltYXRpb25lbmQnLCB0aGlzLnNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8pO1xuICAgIH07XG4gICAgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5kZXJlZ2lzdGVySW50ZXJhY3Rpb25IYW5kbGVyKCdhbmltYXRpb25lbmQnLCB0aGlzLnNoYWtlQW5pbWF0aW9uRW5kSGFuZGxlcl8pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgd2lkdGggb2YgdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAgICovXG4gICAgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24ucHJvdG90eXBlLmdldFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldFdpZHRoKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdHlsZXMgdGhlIGxhYmVsIHRvIHByb2R1Y2UgYSBzaGFrZSBhbmltYXRpb24gdG8gaW5kaWNhdGUgYW4gZXJyb3IuXG4gICAgICogQHBhcmFtIHNob3VsZFNoYWtlIElmIHRydWUsIGFkZHMgdGhlIHNoYWtlIENTUyBjbGFzczsgb3RoZXJ3aXNlLCByZW1vdmVzIHNoYWtlIGNsYXNzLlxuICAgICAqL1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLnByb3RvdHlwZS5zaGFrZSA9IGZ1bmN0aW9uIChzaG91bGRTaGFrZSkge1xuICAgICAgICB2YXIgTEFCRUxfU0hBS0UgPSBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzLkxBQkVMX1NIQUtFO1xuICAgICAgICBpZiAoc2hvdWxkU2hha2UpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhMQUJFTF9TSEFLRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTEFCRUxfU0hBS0UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdHlsZXMgdGhlIGxhYmVsIHRvIGZsb2F0IG9yIGRvY2suXG4gICAgICogQHBhcmFtIHNob3VsZEZsb2F0IElmIHRydWUsIGFkZHMgdGhlIGZsb2F0IENTUyBjbGFzczsgb3RoZXJ3aXNlLCByZW1vdmVzIGZsb2F0IGFuZCBzaGFrZSBjbGFzc2VzIHRvIGRvY2sgdGhlIGxhYmVsLlxuICAgICAqL1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLnByb3RvdHlwZS5mbG9hdCA9IGZ1bmN0aW9uIChzaG91bGRGbG9hdCkge1xuICAgICAgICB2YXIgX2EgPSBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbi5jc3NDbGFzc2VzLCBMQUJFTF9GTE9BVF9BQk9WRSA9IF9hLkxBQkVMX0ZMT0FUX0FCT1ZFLCBMQUJFTF9TSEFLRSA9IF9hLkxBQkVMX1NIQUtFO1xuICAgICAgICBpZiAoc2hvdWxkRmxvYXQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhMQUJFTF9GTE9BVF9BQk9WRSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoTEFCRUxfRkxPQVRfQUJPVkUpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU3R5bGVzIHRoZSBsYWJlbCBhcyByZXF1aXJlZC5cbiAgICAgKiBAcGFyYW0gaXNSZXF1aXJlZCBJZiB0cnVlLCBhZGRzIGFuIGFzdGVyaXNrIHRvIHRoZSBsYWJlbCwgaW5kaWNhdGluZyB0aGF0IGl0IGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRSZXF1aXJlZCA9IGZ1bmN0aW9uIChpc1JlcXVpcmVkKSB7XG4gICAgICAgIHZhciBMQUJFTF9SRVFVSVJFRCA9IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uLmNzc0NsYXNzZXMuTEFCRUxfUkVRVUlSRUQ7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoTEFCRUxfUkVRVUlSRUQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKExBQkVMX1JFUVVJUkVEKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVNoYWtlQW5pbWF0aW9uRW5kXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIExBQkVMX1NIQUtFID0gTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5MQUJFTF9TSEFLRTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKExBQkVMX1NIQUtFKTtcbiAgICB9O1xuICAgIHJldHVybiBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbjtcbn0oTURDRm91bmRhdGlvbikpO1xuZXhwb3J0IHsgTURDRmxvYXRpbmdMYWJlbEZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiaW1wb3J0IHtcbiAgYnViYmxlLFxuICBsaXN0ZW4sXG4gIHByZXZlbnRfZGVmYXVsdCxcbiAgc3RvcF9wcm9wYWdhdGlvbixcbn0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIERPTSBldmVudHMuXG5jb25zdCBvbGRNb2RpZmllclJlZ2V4ID0gL15bYS16XSsoPzo6KD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIG90aGVyIGV2ZW50cy5cbmNvbnN0IG5ld01vZGlmaWVyUmVnZXggPSAvXlteJF0rKD86XFwkKD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY29tcG9uZW50KSB7XG4gIC8vIFRoaXMgaXMgb3VyIHBzZXVkbyAkb24gZnVuY3Rpb24uIEl0IGlzIGRlZmluZWQgb24gY29tcG9uZW50IG1vdW50LlxuICBsZXQgJG9uO1xuICAvLyBUaGlzIGlzIGEgbGlzdCBvZiBldmVudHMgYm91bmQgYmVmb3JlIG1vdW50LlxuICBsZXQgZXZlbnRzID0gW107XG4gIC8vIFRoaXMgaXMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCAkb24gZnVuY3Rpb24uXG4gIGNvbnN0IGNvbXBvbmVudE9uID0gY29tcG9uZW50LiRvbjtcblxuICAvLyBBbmQgd2Ugb3ZlcnJpZGUgdGhlICRvbiBmdW5jdGlvbiB0byBmb3J3YXJkIGFsbCBib3VuZCBldmVudHMuXG4gIGNvbXBvbmVudC4kb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICBsZXQgZGVzdHJ1Y3RvciA9ICgpID0+IHt9O1xuICAgIGlmICgkb24pIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgIGRlc3RydWN0b3IgPSAkb24oZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgYmVmb3JlIG1vdW50IGJ5IFN2ZWx0ZS5cbiAgICAgIGV2ZW50cy5wdXNoKFtldmVudFR5cGUsIGNhbGxiYWNrXSk7XG4gICAgfVxuICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuXG4gICAgaWYgKG9sZE1vZGlmaWVyTWF0Y2ggJiYgY29uc29sZSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnRXZlbnQgbW9kaWZpZXJzIGluIFNNVUkgbm93IHVzZSBcIiRcIiBpbnN0ZWFkIG9mIFwiOlwiLCBzbyB0aGF0IGFsbCBldmVudHMgY2FuIGJlIGJvdW5kIHdpdGggbW9kaWZpZXJzLiBQbGVhc2UgdXBkYXRlIHlvdXIgZXZlbnQgYmluZGluZzogJyxcbiAgICAgICAgZXZlbnRUeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAvLyBSZW1vdmUgbW9kaWZpZXJzIGZyb20gdGhlIHJlYWwgZXZlbnQuXG4gICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICRvbiBmdW5jdGlvbi5cbiAgICBjb25zdCBjb21wb25lbnREZXN0cnVjdG9yID0gY29tcG9uZW50T24uY2FsbChcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGV2ZW50VHlwZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgZGVzdHJ1Y3RvcigpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudERlc3RydWN0b3IoLi4uYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGUpIHtcbiAgICAvLyBJbnRlcm5hbGx5IGJ1YmJsZSB0aGUgZXZlbnQgdXAgZnJvbSBTdmVsdGUgY29tcG9uZW50cy5cbiAgICBidWJibGUoY29tcG9uZW50LCBlKTtcbiAgfVxuXG4gIHJldHVybiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlc3RydWN0b3JzID0gW107XG4gICAgY29uc3QgZm9yd2FyZERlc3RydWN0b3JzID0ge307XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciBmb3J3YXJkaW5nIGFsbCBib3VuZCBldmVudHMuXG4gICAgJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICAgIGxldCBoYW5kbGVyID0gY2FsbGJhY2s7XG4gICAgICAvLyBET00gYWRkRXZlbnRMaXN0ZW5lciBvcHRpb25zIGFyZ3VtZW50LlxuICAgICAgbGV0IG9wdGlvbnMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcbiAgICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBldmVudCBtb2RpZmllcnMuXG4gICAgICAgIC8vIFN1cHBvcnRlZCBtb2RpZmllcnM6XG4gICAgICAgIC8vIC0gcHJldmVudERlZmF1bHRcbiAgICAgICAgLy8gLSBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgLy8gLSBwYXNzaXZlXG4gICAgICAgIC8vIC0gbm9ucGFzc2l2ZVxuICAgICAgICAvLyAtIGNhcHR1cmVcbiAgICAgICAgLy8gLSBvbmNlXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhwYXJ0cy5zbGljZSgxKS5tYXAoKG1vZCkgPT4gW21vZCwgdHJ1ZV0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9ucGFzc2l2ZSkge1xuICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLm5vbnBhc3NpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBoYW5kbGVyID0gcHJldmVudF9kZWZhdWx0KGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wX3Byb3BhZ2F0aW9uKGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBldmVudCBkaXJlY3RseSwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICAgIGNvbnN0IG9mZiA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGVzdHJ1Y3RvciA9ICgpID0+IHtcbiAgICAgICAgb2ZmKCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRlc3RydWN0b3JzLmluZGV4T2YoZGVzdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGRlc3RydWN0b3JzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkZXN0cnVjdG9ycy5wdXNoKGRlc3RydWN0b3IpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBldmVudCBmcm9tIFN2ZWx0ZS5cbiAgICAgIGlmICghZXZlbnRUeXBlIGluIGZvcndhcmREZXN0cnVjdG9ycykge1xuICAgICAgICBmb3J3YXJkRGVzdHJ1Y3RvcnNbZXZlbnRUeXBlXSA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGZvcndhcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzdHJ1Y3RvcjtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpc3RlbiB0byBhbGwgdGhlIGV2ZW50cyBhZGRlZCBiZWZvcmUgbW91bnQuXG4gICAgICAkb24oZXZlbnRzW2ldWzBdLCBldmVudHNbaV1bMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RydWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnNbaV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgZm9yd2FyZGVycy5cbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoZm9yd2FyZERlc3RydWN0b3JzKSkge1xuICAgICAgICAgIGVudHJ5WzFdKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGFzc01hcChjbGFzc09iaikge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmopXG4gICAgLmZpbHRlcigoW25hbWUsIHZhbHVlXSkgPT4gbmFtZSAhPT0gJycgJiYgdmFsdWUpXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKVxuICAgIC5qb2luKCcgJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goXG4gIGVsZW1lbnQsXG4gIGV2ZW50VHlwZSxcbiAgZGV0YWlsID0ge30sXG4gIGV2ZW50SW5pdCA9IHsgYnViYmxlczogdHJ1ZSB9XG4pIHtcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgZXZlbnRJbml0KTtcbiAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgY29uc3QgZWwgPSAnZ2V0RWxlbWVudCcgaW4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0RWxlbWVudCgpIDogZWxlbWVudDtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25zKG5vZGUsIGFjdGlvbnMpIHtcbiAgbGV0IG9iamVjdHMgPSBbXTtcblxuICBpZiAoYWN0aW9ucykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICBjb25zdCBhY3Rpb24gPSBpc0FycmF5ID8gYWN0aW9uc1tpXVswXSA6IGFjdGlvbnNbaV07XG4gICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlLCBhY3Rpb25zW2ldWzFdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShhY3Rpb25zKSB7XG4gICAgICBpZiAoKChhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoKSB8fCAwKSAhPSBvYmplY3RzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG5vdCBjaGFuZ2UgdGhlIGxlbmd0aCBvZiBhbiBhY3Rpb25zIGFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9ucykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAndXBkYXRlJyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZShhY3Rpb25zW2ldWzFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ2Rlc3Ryb3knIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICBvYmplY3RzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG4iLCJ7I2lmIHdyYXBwZWR9XG4gIDxzcGFuXG4gICAgYmluZDp0aGlzPXtlbGVtZW50fVxuICAgIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gICAgdXNlOmZvcndhcmRFdmVudHNcbiAgICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgICAnbWRjLWZsb2F0aW5nLWxhYmVsJzogdHJ1ZSxcbiAgICAgICdtZGMtZmxvYXRpbmctbGFiZWwtLWZsb2F0LWFib3ZlJzogZmxvYXRBYm92ZSxcbiAgICAgICdtZGMtZmxvYXRpbmctbGFiZWwtLXJlcXVpcmVkJzogcmVxdWlyZWQsXG4gICAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gICAgfSl9XG4gICAgc3R5bGU9e09iamVjdC5lbnRyaWVzKGludGVybmFsU3R5bGVzKVxuICAgICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgICAuY29uY2F0KFtzdHlsZV0pXG4gICAgICAuam9pbignICcpfVxuICAgIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3NwYW5cbiAgPlxuezplbHNlfVxuICA8bGFiZWxcbiAgICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgICdtZGMtZmxvYXRpbmctbGFiZWwnOiB0cnVlLFxuICAgICAgJ21kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmUnOiBmbG9hdEFib3ZlLFxuICAgICAgJ21kYy1mbG9hdGluZy1sYWJlbC0tcmVxdWlyZWQnOiByZXF1aXJlZCxcbiAgICAgIC4uLmludGVybmFsQ2xhc3NlcyxcbiAgICB9KX1cbiAgICBzdHlsZT17T2JqZWN0LmVudHJpZXMoaW50ZXJuYWxTdHlsZXMpXG4gICAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAgIC5jb25jYXQoW3N0eWxlXSlcbiAgICAgIC5qb2luKCcgJyl9XG4gICAgZm9yPXtmb3JJZCB8fCAoaW5wdXRQcm9wcyA/IGlucHV0UHJvcHMuaWQgOiBudWxsKX1cbiAgICB7Li4uJCRyZXN0UHJvcHN9PjxzbG90IC8+PC9sYWJlbFxuICA+XG57L2lmfVxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBNRENGbG9hdGluZ0xhYmVsRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9mbG9hdGluZy1sYWJlbCc7XG4gIGltcG9ydCB7IG9uTW91bnQsIGdldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIHVzZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgc3R5bGUgPSAnJztcbiAgbGV0IGZvcklkID0gbnVsbDtcbiAgZXhwb3J0IHsgZm9ySWQgYXMgZm9yIH07XG4gIGV4cG9ydCBsZXQgZmxvYXRBYm92ZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHJlcXVpcmVkID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgd3JhcHBlZCA9IGZhbHNlO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgaW5zdGFuY2U7XG4gIGxldCBpbnRlcm5hbENsYXNzZXMgPSB7fTtcbiAgbGV0IGludGVybmFsU3R5bGVzID0ge307XG4gIGxldCBpbnB1dFByb3BzID0gZ2V0Q29udGV4dCgnU01VSTpnZW5lcmljOmlucHV0OnByb3BzJykgfHwge307XG5cbiAgbGV0IHByZXZpb3VzRmxvYXRBYm92ZSA9IGZsb2F0QWJvdmU7XG4gICQ6IGlmIChwcmV2aW91c0Zsb2F0QWJvdmUgIT09IGZsb2F0QWJvdmUpIHtcbiAgICBwcmV2aW91c0Zsb2F0QWJvdmUgPSBmbG9hdEFib3ZlO1xuICAgIGluc3RhbmNlLmZsb2F0KGZsb2F0QWJvdmUpO1xuICB9XG5cbiAgbGV0IHByZXZpb3VzUmVxdWlyZWQgPSByZXF1aXJlZDtcbiAgJDogaWYgKHByZXZpb3VzUmVxdWlyZWQgIT09IHJlcXVpcmVkKSB7XG4gICAgcHJldmlvdXNSZXF1aXJlZCA9IHJlcXVpcmVkO1xuICAgIGluc3RhbmNlLnNldFJlcXVpcmVkKHJlcXVpcmVkKTtcbiAgfVxuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGluc3RhbmNlID0gbmV3IE1EQ0Zsb2F0aW5nTGFiZWxGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzLFxuICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICBnZXRXaWR0aDogKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGdldEVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgY2xvbmUgPSBlbC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIGVsLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKCdzbXVpLWZsb2F0aW5nLWxhYmVsLS1yZW1vdmUtdHJhbnNpdGlvbicpO1xuICAgICAgICBjbG9uZS5jbGFzc0xpc3QuYWRkKCdzbXVpLWZsb2F0aW5nLWxhYmVsLS1mb3JjZS1zaXplJyk7XG4gICAgICAgIGNsb25lLmNsYXNzTGlzdC5yZW1vdmUoJ21kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmUnKTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBjbG9uZS5zY3JvbGxXaWR0aDtcbiAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjbG9uZSk7XG4gICAgICAgIHJldHVybiBzY3JvbGxXaWR0aDtcbiAgICAgIH0sXG4gICAgICByZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgICAgZGVyZWdpc3RlckludGVyYWN0aW9uSGFuZGxlcjogKGV2dFR5cGUsIGhhbmRsZXIpID0+XG4gICAgICAgIGdldEVsZW1lbnQoKS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dFR5cGUsIGhhbmRsZXIpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgYWNjZXNzb3IgPSB7XG4gICAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnQoKTtcbiAgICAgIH0sXG4gICAgICBhZGRTdHlsZSxcbiAgICAgIHJlbW92ZVN0eWxlLFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChlbGVtZW50LCAnU01VSTpmbG9hdGluZy1sYWJlbDptb3VudCcsIGFjY2Vzc29yKTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChlbGVtZW50LCAnU01VSTpmbG9hdGluZy1sYWJlbDp1bm1vdW50JywgYWNjZXNzb3IpO1xuXG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGludGVybmFsU3R5bGVzW25hbWVdO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcyA9IGludGVybmFsU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVTdHlsZShuYW1lKSB7XG4gICAgaWYgKG5hbWUgaW4gaW50ZXJuYWxTdHlsZXMpIHtcbiAgICAgIGRlbGV0ZSBpbnRlcm5hbFN0eWxlc1tuYW1lXTtcbiAgICAgIGludGVybmFsU3R5bGVzID0gaW50ZXJuYWxTdHlsZXM7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNoYWtlKHNob3VsZFNoYWtlKSB7XG4gICAgaW5zdGFuY2Uuc2hha2Uoc2hvdWxkU2hha2UpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGZsb2F0KHNob3VsZEZsb2F0KSB7XG4gICAgZmxvYXRBYm92ZSA9IHNob3VsZEZsb2F0O1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIHNldFJlcXVpcmVkKGlzUmVxdWlyZWQpIHtcbiAgICByZXF1aXJlZCA9IGlzUmVxdWlyZWQ7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmdldFdpZHRoKCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XHJcbn1cclxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG52YXIgTURDRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNRENGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgaWYgKGFkYXB0ZXIgPT09IHZvaWQgMCkgeyBhZGFwdGVyID0ge307IH1cbiAgICAgICAgdGhpcy5hZGFwdGVyID0gYWRhcHRlcjtcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBldmVyeVxuICAgICAgICAgICAgLy8gQ1NTIGNsYXNzIHRoZSBmb3VuZGF0aW9uIGNsYXNzIG5lZWRzIGFzIGEgcHJvcGVydHkuIGUuZy4ge0FDVElWRTogJ21kYy1jb21wb25lbnQtLWFjdGl2ZSd9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBDbGFzc2VzIGV4dGVuZGluZyBNRENGb3VuZGF0aW9uIHNob3VsZCBpbXBsZW1lbnQgdGhpcyBtZXRob2QgdG8gcmV0dXJuIGFuIG9iamVjdCB3aGljaCBleHBvcnRzIGFsbFxuICAgICAgICAgICAgLy8gc2VtYW50aWMgc3RyaW5ncyBhcyBjb25zdGFudHMuIGUuZy4ge0FSSUFfUk9MRTogJ3RhYmxpc3QnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwibnVtYmVyc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIG9mIGl0cyBzZW1hbnRpYyBudW1iZXJzIGFzIGNvbnN0YW50cy4gZS5nLiB7QU5JTUFUSU9OX0RFTEFZX01TOiAzNTB9XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBtYXkgY2hvb3NlIHRvIGltcGxlbWVudCB0aGlzIGdldHRlciBpbiBvcmRlciB0byBwcm92aWRlIGEgY29udmVuaWVudFxuICAgICAgICAgICAgLy8gd2F5IG9mIHZpZXdpbmcgdGhlIG5lY2Vzc2FyeSBtZXRob2RzIG9mIGFuIGFkYXB0ZXIuIEluIHRoZSBmdXR1cmUsIHRoaXMgY291bGQgYWxzbyBiZSB1c2VkIGZvciBhZGFwdGVyXG4gICAgICAgICAgICAvLyB2YWxpZGF0aW9uLlxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBpbml0aWFsaXphdGlvbiByb3V0aW5lcyAocmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgTURDRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3ViY2xhc3NlcyBzaG91bGQgb3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gcGVyZm9ybSBkZS1pbml0aWFsaXphdGlvbiByb3V0aW5lcyAoZGUtcmVnaXN0ZXJpbmcgZXZlbnRzLCBldGMuKVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0ZvdW5kYXRpb247XG59KCkpO1xuZXhwb3J0IHsgTURDRm91bmRhdGlvbiB9O1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWRlZmF1bHQtZXhwb3J0IE5lZWRlZCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIE1EQyBXZWIgdjAuNDQuMCBhbmQgZWFybGllci5cbmV4cG9ydCBkZWZhdWx0IE1EQ0ZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIGNzc0NsYXNzZXMgPSB7XG4gICAgTElORV9SSVBQTEVfQUNUSVZFOiAnbWRjLWxpbmUtcmlwcGxlLS1hY3RpdmUnLFxuICAgIExJTkVfUklQUExFX0RFQUNUSVZBVElORzogJ21kYy1saW5lLXJpcHBsZS0tZGVhY3RpdmF0aW5nJyxcbn07XG5leHBvcnQgeyBjc3NDbGFzc2VzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25zdGFudHMuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIEluYy5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbiAqIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuICogVEhFIFNPRlRXQVJFLlxuICovXG5pbXBvcnQgeyBfX2Fzc2lnbiwgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBNRENGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbic7XG5pbXBvcnQgeyBjc3NDbGFzc2VzIH0gZnJvbSAnLi9jb25zdGFudHMnO1xudmFyIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENMaW5lUmlwcGxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENMaW5lUmlwcGxlRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5kZWZhdWx0QWRhcHRlciksIGFkYXB0ZXIpKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy50cmFuc2l0aW9uRW5kSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBfdGhpcy5oYW5kbGVUcmFuc2l0aW9uRW5kKGV2dCk7IH07XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBjc3NDbGFzc2VzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNlZSB7QGxpbmsgTURDTGluZVJpcHBsZUFkYXB0ZXJ9IGZvciB0eXBpbmcgaW5mb3JtYXRpb24gb24gcGFyYW1ldGVycyBhbmQgcmV0dXJuIHR5cGVzLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXMgTWV0aG9kcyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgb3JkZXIgYXMgdGhlIGFkYXB0ZXIgaW50ZXJmYWNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgaGFzQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIHNldFN0eWxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBkZXJlZ2lzdGVyRXZlbnRIYW5kbGVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gdHNsaW50OmVuYWJsZTpvYmplY3QtbGl0ZXJhbC1zb3J0LWtleXNcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmRlcmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLnRyYW5zaXRpb25FbmRIYW5kbGVyXyk7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0RFQUNUSVZBVElORyk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhjc3NDbGFzc2VzLkxJTkVfUklQUExFX0FDVElWRSk7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuc2V0UmlwcGxlQ2VudGVyID0gZnVuY3Rpb24gKHhDb29yZGluYXRlKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRTdHlsZSgndHJhbnNmb3JtLW9yaWdpbicsIHhDb29yZGluYXRlICsgXCJweCBjZW50ZXJcIik7XG4gICAgfTtcbiAgICBNRENMaW5lUmlwcGxlRm91bmRhdGlvbi5wcm90b3R5cGUuZGVhY3RpdmF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5hZGFwdGVyLmFkZENsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgICB9O1xuICAgIE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVUcmFuc2l0aW9uRW5kID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgbGluZSByaXBwbGUgdG8gYmUgZWl0aGVyIHRyYW5zcGFyZW50IG9yIG9wYXF1ZVxuICAgICAgICAvLyBiZWZvcmUgZW1pdHRpbmcgdGhlIGFuaW1hdGlvbiBlbmQgZXZlbnRcbiAgICAgICAgdmFyIGlzRGVhY3RpdmF0aW5nID0gdGhpcy5hZGFwdGVyLmhhc0NsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfREVBQ1RJVkFUSU5HKTtcbiAgICAgICAgaWYgKGV2dC5wcm9wZXJ0eU5hbWUgPT09ICdvcGFjaXR5Jykge1xuICAgICAgICAgICAgaWYgKGlzRGVhY3RpdmF0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlbW92ZUNsYXNzKGNzc0NsYXNzZXMuTElORV9SSVBQTEVfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3MoY3NzQ2xhc3Nlcy5MSU5FX1JJUFBMRV9ERUFDVElWQVRJTkcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTURDTGluZVJpcHBsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZGVmYXVsdC1leHBvcnQgTmVlZGVkIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IHdpdGggTURDIFdlYiB2MC40NC4wIGFuZCBlYXJsaWVyLlxuZXhwb3J0IGRlZmF1bHQgTURDTGluZVJpcHBsZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsImltcG9ydCB7XG4gIGJ1YmJsZSxcbiAgbGlzdGVuLFxuICBwcmV2ZW50X2RlZmF1bHQsXG4gIHN0b3BfcHJvcGFnYXRpb24sXG59IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG5cbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBET00gZXZlbnRzLlxuY29uc3Qgb2xkTW9kaWZpZXJSZWdleCA9IC9eW2Etel0rKD86Oig/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBvdGhlciBldmVudHMuXG5jb25zdCBuZXdNb2RpZmllclJlZ2V4ID0gL15bXiRdKyg/OlxcJCg/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFdmVudHNCdWlsZGVyKGNvbXBvbmVudCkge1xuICAvLyBUaGlzIGlzIG91ciBwc2V1ZG8gJG9uIGZ1bmN0aW9uLiBJdCBpcyBkZWZpbmVkIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgbGV0ICRvbjtcbiAgLy8gVGhpcyBpcyBhIGxpc3Qgb2YgZXZlbnRzIGJvdW5kIGJlZm9yZSBtb3VudC5cbiAgbGV0IGV2ZW50cyA9IFtdO1xuICAvLyBUaGlzIGlzIHRoZSBvcmlnaW5hbCBjb21wb25lbnQgJG9uIGZ1bmN0aW9uLlxuICBjb25zdCBjb21wb25lbnRPbiA9IGNvbXBvbmVudC4kb247XG5cbiAgLy8gQW5kIHdlIG92ZXJyaWRlIHRoZSAkb24gZnVuY3Rpb24gdG8gZm9yd2FyZCBhbGwgYm91bmQgZXZlbnRzLlxuICBjb21wb25lbnQuJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgbGV0IGRlc3RydWN0b3IgPSAoKSA9PiB7fTtcbiAgICBpZiAoJG9uKSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICBkZXN0cnVjdG9yID0gJG9uKGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIGJlZm9yZSBtb3VudCBieSBTdmVsdGUuXG4gICAgICBldmVudHMucHVzaChbZXZlbnRUeXBlLCBjYWxsYmFja10pO1xuICAgIH1cbiAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcblxuICAgIGlmIChvbGRNb2RpZmllck1hdGNoICYmIGNvbnNvbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ0V2ZW50IG1vZGlmaWVycyBpbiBTTVVJIG5vdyB1c2UgXCIkXCIgaW5zdGVhZCBvZiBcIjpcIiwgc28gdGhhdCBhbGwgZXZlbnRzIGNhbiBiZSBib3VuZCB3aXRoIG1vZGlmaWVycy4gUGxlYXNlIHVwZGF0ZSB5b3VyIGV2ZW50IGJpbmRpbmc6ICcsXG4gICAgICAgIGV2ZW50VHlwZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgLy8gUmVtb3ZlIG1vZGlmaWVycyBmcm9tIHRoZSByZWFsIGV2ZW50LlxuICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkb24gZnVuY3Rpb24uXG4gICAgY29uc3QgY29tcG9uZW50RGVzdHJ1Y3RvciA9IGNvbXBvbmVudE9uLmNhbGwoXG4gICAgICBjb21wb25lbnQsXG4gICAgICBldmVudFR5cGUsXG4gICAgICBjYWxsYmFja1xuICAgICk7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGRlc3RydWN0b3IoKTtcbiAgICAgIHJldHVybiBjb21wb25lbnREZXN0cnVjdG9yKC4uLmFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChlKSB7XG4gICAgLy8gSW50ZXJuYWxseSBidWJibGUgdGhlIGV2ZW50IHVwIGZyb20gU3ZlbHRlIGNvbXBvbmVudHMuXG4gICAgYnViYmxlKGNvbXBvbmVudCwgZSk7XG4gIH1cblxuICByZXR1cm4gKG5vZGUpID0+IHtcbiAgICBjb25zdCBkZXN0cnVjdG9ycyA9IFtdO1xuICAgIGNvbnN0IGZvcndhcmREZXN0cnVjdG9ycyA9IHt9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgZm9yd2FyZGluZyBhbGwgYm91bmQgZXZlbnRzLlxuICAgICRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgICBsZXQgaGFuZGxlciA9IGNhbGxiYWNrO1xuICAgICAgLy8gRE9NIGFkZEV2ZW50TGlzdGVuZXIgb3B0aW9ucyBhcmd1bWVudC5cbiAgICAgIGxldCBvcHRpb25zID0gZmFsc2U7XG4gICAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG4gICAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgICAvLyBQYXJzZSB0aGUgZXZlbnQgbW9kaWZpZXJzLlxuICAgICAgICAvLyBTdXBwb3J0ZWQgbW9kaWZpZXJzOlxuICAgICAgICAvLyAtIHByZXZlbnREZWZhdWx0XG4gICAgICAgIC8vIC0gc3RvcFByb3BhZ2F0aW9uXG4gICAgICAgIC8vIC0gcGFzc2l2ZVxuICAgICAgICAvLyAtIG5vbnBhc3NpdmVcbiAgICAgICAgLy8gLSBjYXB0dXJlXG4gICAgICAgIC8vIC0gb25jZVxuICAgICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuZnJvbUVudHJpZXMocGFydHMuc2xpY2UoMSkubWFwKChtb2QpID0+IFttb2QsIHRydWVdKSk7XG4gICAgICAgIGlmIChvcHRpb25zLm5vbnBhc3NpdmUpIHtcbiAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5ub25wYXNzaXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgaGFuZGxlciA9IHByZXZlbnRfZGVmYXVsdChoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcF9wcm9wYWdhdGlvbihoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5zdG9wUHJvcGFnYXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTGlzdGVuIGZvciB0aGUgZXZlbnQgZGlyZWN0bHksIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAgICBjb25zdCBvZmYgPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IGRlc3RydWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIG9mZigpO1xuICAgICAgICBjb25zdCBpZHggPSBkZXN0cnVjdG9ycy5pbmRleE9mKGRlc3RydWN0b3IpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICBkZXN0cnVjdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZGVzdHJ1Y3RvcnMucHVzaChkZXN0cnVjdG9yKTtcblxuICAgICAgLy8gRm9yd2FyZCB0aGUgZXZlbnQgZnJvbSBTdmVsdGUuXG4gICAgICBpZiAoIWV2ZW50VHlwZSBpbiBmb3J3YXJkRGVzdHJ1Y3RvcnMpIHtcbiAgICAgICAgZm9yd2FyZERlc3RydWN0b3JzW2V2ZW50VHlwZV0gPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBmb3J3YXJkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc3RydWN0b3I7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBMaXN0ZW4gdG8gYWxsIHRoZSBldmVudHMgYWRkZWQgYmVmb3JlIG1vdW50LlxuICAgICAgJG9uKGV2ZW50c1tpXVswXSwgZXZlbnRzW2ldWzFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0cnVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRlc3RydWN0b3JzW2ldKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGZvcndhcmRlcnMuXG4gICAgICAgIGZvciAobGV0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKGZvcndhcmREZXN0cnVjdG9ycykpIHtcbiAgICAgICAgICBlbnRyeVsxXSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xhc3NNYXAoY2xhc3NPYmopIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqKVxuICAgIC5maWx0ZXIoKFtuYW1lLCB2YWx1ZV0pID0+IG5hbWUgIT09ICcnICYmIHZhbHVlKVxuICAgIC5tYXAoKFtuYW1lXSkgPT4gbmFtZSlcbiAgICAuam9pbignICcpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbnMobm9kZSwgYWN0aW9ucykge1xuICBsZXQgb2JqZWN0cyA9IFtdO1xuXG4gIGlmIChhY3Rpb25zKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGlzQXJyYXkgPyBhY3Rpb25zW2ldWzBdIDogYWN0aW9uc1tpXTtcbiAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUsIGFjdGlvbnNbaV1bMV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlKGFjdGlvbnMpIHtcbiAgICAgIGlmICgoKGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGgpIHx8IDApICE9IG9iamVjdHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgbm90IGNoYW5nZSB0aGUgbGVuZ3RoIG9mIGFuIGFjdGlvbnMgYXJyYXkuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChvYmplY3RzW2ldICYmICd1cGRhdGUnIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKGFjdGlvbnNbaV1bMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAnZGVzdHJveScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgIG9iamVjdHNbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsIjxkaXZcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgICdtZGMtbGluZS1yaXBwbGUnOiB0cnVlLFxuICAgICdtZGMtbGluZS1yaXBwbGUtLWFjdGl2ZSc6IGFjdGl2ZSxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBzdHlsZT17T2JqZWN0LmVudHJpZXMoaW50ZXJuYWxTdHlsZXMpXG4gICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgLmNvbmNhdChbc3R5bGVdKVxuICAgIC5qb2luKCcgJyl9XG4gIHsuLi4kJHJlc3RQcm9wc31cbi8+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IE1EQ0xpbmVSaXBwbGVGb3VuZGF0aW9uIH0gZnJvbSAnQG1hdGVyaWFsL2xpbmUtcmlwcGxlJztcbiAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCBzdHlsZSA9ICcnO1xuICBleHBvcnQgbGV0IGFjdGl2ZSA9IGZhbHNlO1xuXG4gIGxldCBlbGVtZW50O1xuICBsZXQgaW5zdGFuY2U7XG4gIGxldCBpbnRlcm5hbENsYXNzZXMgPSB7fTtcbiAgbGV0IGludGVybmFsU3R5bGVzID0ge307XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgaW5zdGFuY2UgPSBuZXcgTURDTGluZVJpcHBsZUZvdW5kYXRpb24oe1xuICAgICAgYWRkQ2xhc3MsXG4gICAgICByZW1vdmVDbGFzcyxcbiAgICAgIGhhc0NsYXNzLFxuICAgICAgc2V0U3R5bGU6IGFkZFN0eWxlLFxuICAgICAgcmVnaXN0ZXJFdmVudEhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBnZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICAgIGRlcmVnaXN0ZXJFdmVudEhhbmRsZXI6IChldnRUeXBlLCBoYW5kbGVyKSA9PlxuICAgICAgICBnZXRFbGVtZW50KCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnRUeXBlLCBoYW5kbGVyKSxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFzQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXNcbiAgICAgID8gaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV1cbiAgICAgIDogZ2V0RWxlbWVudCgpLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFN0eWxlKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsU3R5bGVzW25hbWVdICE9IHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIGludGVybmFsU3R5bGVzW25hbWVdO1xuICAgICAgICBpbnRlcm5hbFN0eWxlcyA9IGludGVybmFsU3R5bGVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW50ZXJuYWxTdHlsZXNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gYWN0aXZhdGUoKSB7XG4gICAgaW5zdGFuY2UuYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBkZWFjdGl2YXRlKCkge1xuICAgIGluc3RhbmNlLmRlYWN0aXZhdGUoKTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBzZXRSaXBwbGVDZW50ZXIoeENvb3JkaW5hdGUpIHtcbiAgICBpbnN0YW5jZS5zZXRSaXBwbGVDZW50ZXIoeENvb3JkaW5hdGUpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbnZhciBzdHJpbmdzID0ge1xuICAgIE5PVENIX0VMRU1FTlRfU0VMRUNUT1I6ICcubWRjLW5vdGNoZWQtb3V0bGluZV9fbm90Y2gnLFxufTtcbnZhciBudW1iZXJzID0ge1xuICAgIC8vIFRoaXMgc2hvdWxkIHN0YXkgaW4gc3luYyB3aXRoICRtZGMtbm90Y2hlZC1vdXRsaW5lLXBhZGRpbmcgKiAyLlxuICAgIE5PVENIX0VMRU1FTlRfUEFERElORzogOCxcbn07XG52YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBOT19MQUJFTDogJ21kYy1ub3RjaGVkLW91dGxpbmUtLW5vLWxhYmVsJyxcbiAgICBPVVRMSU5FX05PVENIRUQ6ICdtZGMtbm90Y2hlZC1vdXRsaW5lLS1ub3RjaGVkJyxcbiAgICBPVVRMSU5FX1VQR1JBREVEOiAnbWRjLW5vdGNoZWQtb3V0bGluZS0tdXBncmFkZWQnLFxufTtcbmV4cG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIG51bWJlcnMsIHN0cmluZ3MgfSBmcm9tICcuL2NvbnN0YW50cyc7XG52YXIgTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24sIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24uZGVmYXVsdEFkYXB0ZXIpLCBhZGFwdGVyKSkgfHwgdGhpcztcbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiwgXCJzdHJpbmdzXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyaW5ncztcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24sIFwiY3NzQ2xhc3Nlc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc0NsYXNzZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1iZXJzO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiwgXCJkZWZhdWx0QWRhcHRlclwiLCB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTZWUge0BsaW5rIE1EQ05vdGNoZWRPdXRsaW5lQWRhcHRlcn0gZm9yIHR5cGluZyBpbmZvcm1hdGlvbiBvbiBwYXJhbWV0ZXJzIGFuZCByZXR1cm4gdHlwZXMuXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5cyBNZXRob2RzIHNob3VsZCBiZSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGUgYWRhcHRlciBpbnRlcmZhY2UuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXROb3RjaFdpZHRoUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVOb3RjaFdpZHRoUHJvcGVydHk6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlOm9iamVjdC1saXRlcmFsLXNvcnQta2V5c1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgLyoqXG4gICAgICogQWRkcyB0aGUgb3V0bGluZSBub3RjaGVkIHNlbGVjdG9yIGFuZCB1cGRhdGVzIHRoZSBub3RjaCB3aWR0aCBjYWxjdWxhdGVkIGJhc2VkIG9mZiBvZiBub3RjaFdpZHRoLlxuICAgICAqL1xuICAgIE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbi5wcm90b3R5cGUubm90Y2ggPSBmdW5jdGlvbiAobm90Y2hXaWR0aCkge1xuICAgICAgICB2YXIgT1VUTElORV9OT1RDSEVEID0gTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uLmNzc0NsYXNzZXMuT1VUTElORV9OT1RDSEVEO1xuICAgICAgICBpZiAobm90Y2hXaWR0aCA+IDApIHtcbiAgICAgICAgICAgIG5vdGNoV2lkdGggKz0gbnVtYmVycy5OT1RDSF9FTEVNRU5UX1BBRERJTkc7IC8vIEFkZCBwYWRkaW5nIGZyb20gbGVmdC9yaWdodC5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0Tm90Y2hXaWR0aFByb3BlcnR5KG5vdGNoV2lkdGgpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIuYWRkQ2xhc3MoT1VUTElORV9OT1RDSEVEKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgbm90Y2hlZCBvdXRsaW5lIHNlbGVjdG9yIHRvIGNsb3NlIHRoZSBub3RjaCBpbiB0aGUgb3V0bGluZS5cbiAgICAgKi9cbiAgICBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24ucHJvdG90eXBlLmNsb3NlTm90Y2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBPVVRMSU5FX05PVENIRUQgPSBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24uY3NzQ2xhc3Nlcy5PVVRMSU5FX05PVENIRUQ7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhPVVRMSU5FX05PVENIRUQpO1xuICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlTm90Y2hXaWR0aFByb3BlcnR5KCk7XG4gICAgfTtcbiAgICByZXR1cm4gTURDTm90Y2hlZE91dGxpbmVGb3VuZGF0aW9uO1xufShNRENGb3VuZGF0aW9uKSk7XG5leHBvcnQgeyBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENOb3RjaGVkT3V0bGluZUZvdW5kYXRpb247XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3VuZGF0aW9uLmpzLm1hcCIsImltcG9ydCB7XG4gIGJ1YmJsZSxcbiAgbGlzdGVuLFxuICBwcmV2ZW50X2RlZmF1bHQsXG4gIHN0b3BfcHJvcGFnYXRpb24sXG59IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG5cbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBET00gZXZlbnRzLlxuY29uc3Qgb2xkTW9kaWZpZXJSZWdleCA9IC9eW2Etel0rKD86Oig/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBvdGhlciBldmVudHMuXG5jb25zdCBuZXdNb2RpZmllclJlZ2V4ID0gL15bXiRdKyg/OlxcJCg/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFdmVudHNCdWlsZGVyKGNvbXBvbmVudCkge1xuICAvLyBUaGlzIGlzIG91ciBwc2V1ZG8gJG9uIGZ1bmN0aW9uLiBJdCBpcyBkZWZpbmVkIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgbGV0ICRvbjtcbiAgLy8gVGhpcyBpcyBhIGxpc3Qgb2YgZXZlbnRzIGJvdW5kIGJlZm9yZSBtb3VudC5cbiAgbGV0IGV2ZW50cyA9IFtdO1xuICAvLyBUaGlzIGlzIHRoZSBvcmlnaW5hbCBjb21wb25lbnQgJG9uIGZ1bmN0aW9uLlxuICBjb25zdCBjb21wb25lbnRPbiA9IGNvbXBvbmVudC4kb247XG5cbiAgLy8gQW5kIHdlIG92ZXJyaWRlIHRoZSAkb24gZnVuY3Rpb24gdG8gZm9yd2FyZCBhbGwgYm91bmQgZXZlbnRzLlxuICBjb21wb25lbnQuJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgbGV0IGRlc3RydWN0b3IgPSAoKSA9PiB7fTtcbiAgICBpZiAoJG9uKSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICBkZXN0cnVjdG9yID0gJG9uKGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIGJlZm9yZSBtb3VudCBieSBTdmVsdGUuXG4gICAgICBldmVudHMucHVzaChbZXZlbnRUeXBlLCBjYWxsYmFja10pO1xuICAgIH1cbiAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcblxuICAgIGlmIChvbGRNb2RpZmllck1hdGNoICYmIGNvbnNvbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ0V2ZW50IG1vZGlmaWVycyBpbiBTTVVJIG5vdyB1c2UgXCIkXCIgaW5zdGVhZCBvZiBcIjpcIiwgc28gdGhhdCBhbGwgZXZlbnRzIGNhbiBiZSBib3VuZCB3aXRoIG1vZGlmaWVycy4gUGxlYXNlIHVwZGF0ZSB5b3VyIGV2ZW50IGJpbmRpbmc6ICcsXG4gICAgICAgIGV2ZW50VHlwZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgLy8gUmVtb3ZlIG1vZGlmaWVycyBmcm9tIHRoZSByZWFsIGV2ZW50LlxuICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkb24gZnVuY3Rpb24uXG4gICAgY29uc3QgY29tcG9uZW50RGVzdHJ1Y3RvciA9IGNvbXBvbmVudE9uLmNhbGwoXG4gICAgICBjb21wb25lbnQsXG4gICAgICBldmVudFR5cGUsXG4gICAgICBjYWxsYmFja1xuICAgICk7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGRlc3RydWN0b3IoKTtcbiAgICAgIHJldHVybiBjb21wb25lbnREZXN0cnVjdG9yKC4uLmFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChlKSB7XG4gICAgLy8gSW50ZXJuYWxseSBidWJibGUgdGhlIGV2ZW50IHVwIGZyb20gU3ZlbHRlIGNvbXBvbmVudHMuXG4gICAgYnViYmxlKGNvbXBvbmVudCwgZSk7XG4gIH1cblxuICByZXR1cm4gKG5vZGUpID0+IHtcbiAgICBjb25zdCBkZXN0cnVjdG9ycyA9IFtdO1xuICAgIGNvbnN0IGZvcndhcmREZXN0cnVjdG9ycyA9IHt9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgZm9yd2FyZGluZyBhbGwgYm91bmQgZXZlbnRzLlxuICAgICRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgICBsZXQgaGFuZGxlciA9IGNhbGxiYWNrO1xuICAgICAgLy8gRE9NIGFkZEV2ZW50TGlzdGVuZXIgb3B0aW9ucyBhcmd1bWVudC5cbiAgICAgIGxldCBvcHRpb25zID0gZmFsc2U7XG4gICAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG4gICAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgICAvLyBQYXJzZSB0aGUgZXZlbnQgbW9kaWZpZXJzLlxuICAgICAgICAvLyBTdXBwb3J0ZWQgbW9kaWZpZXJzOlxuICAgICAgICAvLyAtIHByZXZlbnREZWZhdWx0XG4gICAgICAgIC8vIC0gc3RvcFByb3BhZ2F0aW9uXG4gICAgICAgIC8vIC0gcGFzc2l2ZVxuICAgICAgICAvLyAtIG5vbnBhc3NpdmVcbiAgICAgICAgLy8gLSBjYXB0dXJlXG4gICAgICAgIC8vIC0gb25jZVxuICAgICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuZnJvbUVudHJpZXMocGFydHMuc2xpY2UoMSkubWFwKChtb2QpID0+IFttb2QsIHRydWVdKSk7XG4gICAgICAgIGlmIChvcHRpb25zLm5vbnBhc3NpdmUpIHtcbiAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5ub25wYXNzaXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgaGFuZGxlciA9IHByZXZlbnRfZGVmYXVsdChoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcF9wcm9wYWdhdGlvbihoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5zdG9wUHJvcGFnYXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTGlzdGVuIGZvciB0aGUgZXZlbnQgZGlyZWN0bHksIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAgICBjb25zdCBvZmYgPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IGRlc3RydWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIG9mZigpO1xuICAgICAgICBjb25zdCBpZHggPSBkZXN0cnVjdG9ycy5pbmRleE9mKGRlc3RydWN0b3IpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICBkZXN0cnVjdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZGVzdHJ1Y3RvcnMucHVzaChkZXN0cnVjdG9yKTtcblxuICAgICAgLy8gRm9yd2FyZCB0aGUgZXZlbnQgZnJvbSBTdmVsdGUuXG4gICAgICBpZiAoIWV2ZW50VHlwZSBpbiBmb3J3YXJkRGVzdHJ1Y3RvcnMpIHtcbiAgICAgICAgZm9yd2FyZERlc3RydWN0b3JzW2V2ZW50VHlwZV0gPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBmb3J3YXJkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc3RydWN0b3I7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBMaXN0ZW4gdG8gYWxsIHRoZSBldmVudHMgYWRkZWQgYmVmb3JlIG1vdW50LlxuICAgICAgJG9uKGV2ZW50c1tpXVswXSwgZXZlbnRzW2ldWzFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0cnVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRlc3RydWN0b3JzW2ldKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGZvcndhcmRlcnMuXG4gICAgICAgIGZvciAobGV0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKGZvcndhcmREZXN0cnVjdG9ycykpIHtcbiAgICAgICAgICBlbnRyeVsxXSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xhc3NNYXAoY2xhc3NPYmopIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqKVxuICAgIC5maWx0ZXIoKFtuYW1lLCB2YWx1ZV0pID0+IG5hbWUgIT09ICcnICYmIHZhbHVlKVxuICAgIC5tYXAoKFtuYW1lXSkgPT4gbmFtZSlcbiAgICAuam9pbignICcpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbnMobm9kZSwgYWN0aW9ucykge1xuICBsZXQgb2JqZWN0cyA9IFtdO1xuXG4gIGlmIChhY3Rpb25zKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGlzQXJyYXkgPyBhY3Rpb25zW2ldWzBdIDogYWN0aW9uc1tpXTtcbiAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUsIGFjdGlvbnNbaV1bMV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlKGFjdGlvbnMpIHtcbiAgICAgIGlmICgoKGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGgpIHx8IDApICE9IG9iamVjdHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgbm90IGNoYW5nZSB0aGUgbGVuZ3RoIG9mIGFuIGFjdGlvbnMgYXJyYXkuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChvYmplY3RzW2ldICYmICd1cGRhdGUnIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKGFjdGlvbnNbaV1bMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAnZGVzdHJveScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgIG9iamVjdHNbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsIjxkaXZcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgICdtZGMtbm90Y2hlZC1vdXRsaW5lJzogdHJ1ZSxcbiAgICAnbWRjLW5vdGNoZWQtb3V0bGluZS0tbm90Y2hlZCc6IG5vdGNoZWQsXG4gICAgJ21kYy1ub3RjaGVkLW91dGxpbmUtLW5vLWxhYmVsJzogbm9MYWJlbCxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBvbjpTTVVJOmZsb2F0aW5nLWxhYmVsOm1vdW50PXsoZXZlbnQpID0+IChmbG9hdGluZ0xhYmVsID0gZXZlbnQuZGV0YWlsKX1cbiAgb246U01VSTpmbG9hdGluZy1sYWJlbDp1bm1vdW50PXsoKSA9PiAoZmxvYXRpbmdMYWJlbCA9IHVuZGVmaW5lZCl9XG4gIHsuLi4kJHJlc3RQcm9wc31cbj5cbiAgPGRpdiBjbGFzcz1cIm1kYy1ub3RjaGVkLW91dGxpbmVfX2xlYWRpbmdcIiAvPlxuICB7I2lmICFub0xhYmVsfVxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwibWRjLW5vdGNoZWQtb3V0bGluZV9fbm90Y2hcIlxuICAgICAgc3R5bGU9e09iamVjdC5lbnRyaWVzKG5vdGNoU3R5bGVzKVxuICAgICAgICAubWFwKChbbmFtZSwgdmFsdWVdKSA9PiBgJHtuYW1lfTogJHt2YWx1ZX07YClcbiAgICAgICAgLmpvaW4oJyAnKX1cbiAgICA+XG4gICAgICA8c2xvdCAvPlxuICAgIDwvZGl2PlxuICB7L2lmfVxuICA8ZGl2IGNsYXNzPVwibWRjLW5vdGNoZWQtb3V0bGluZV9fdHJhaWxpbmdcIiAvPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9ub3RjaGVkLW91dGxpbmUnO1xuICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICB1c2VBY3Rpb25zLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IG5vdGNoZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBub0xhYmVsID0gZmFsc2U7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnN0YW5jZTtcbiAgbGV0IGZsb2F0aW5nTGFiZWw7XG4gIGxldCBpbnRlcm5hbENsYXNzZXMgPSB7fTtcbiAgbGV0IG5vdGNoU3R5bGVzID0ge307XG5cbiAgJDogaWYgKGZsb2F0aW5nTGFiZWwpIHtcbiAgICBmbG9hdGluZ0xhYmVsLmFkZFN0eWxlKCd0cmFuc2l0aW9uLWR1cmF0aW9uJywgJzBzJyk7XG4gICAgYWRkQ2xhc3MoJ21kYy1ub3RjaGVkLW91dGxpbmUtLXVwZ3JhZGVkJyk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIGZsb2F0aW5nTGFiZWwucmVtb3ZlU3R5bGUoJ3RyYW5zaXRpb24tZHVyYXRpb24nKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcygnbWRjLW5vdGNoZWQtb3V0bGluZS0tdXBncmFkZWQnKTtcbiAgfVxuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGluc3RhbmNlID0gbmV3IE1EQ05vdGNoZWRPdXRsaW5lRm91bmRhdGlvbih7XG4gICAgICBhZGRDbGFzcyxcbiAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgc2V0Tm90Y2hXaWR0aFByb3BlcnR5OiAod2lkdGgpID0+IGFkZE5vdGNoU3R5bGUoJ3dpZHRoJywgd2lkdGggKyAncHgnKSxcbiAgICAgIHJlbW92ZU5vdGNoV2lkdGhQcm9wZXJ0eTogKCkgPT4gcmVtb3ZlTm90Y2hTdHlsZSgnd2lkdGgnKSxcbiAgICB9KTtcblxuICAgIGluc3RhbmNlLmluaXQoKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZE5vdGNoU3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgICBpZiAobm90Y2hTdHlsZXNbbmFtZV0gIT0gdmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgbm90Y2hTdHlsZXNbbmFtZV07XG4gICAgICAgIG5vdGNoU3R5bGVzID0gbm90Y2hTdHlsZXM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub3RjaFN0eWxlc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZU5vdGNoU3R5bGUobmFtZSkge1xuICAgIGlmIChuYW1lIGluIG5vdGNoU3R5bGVzKSB7XG4gICAgICBkZWxldGUgbm90Y2hTdHlsZXNbbmFtZV07XG4gICAgICBub3RjaFN0eWxlcyA9IG5vdGNoU3R5bGVzO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBub3RjaChub3RjaFdpZHRoKSB7XG4gICAgaW5zdGFuY2Uubm90Y2gobm90Y2hXaWR0aCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gY2xvc2VOb3RjaCgpIHtcbiAgICBpbnN0YW5jZS5jbG9zZU5vdGNoKCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8IS0tXG4gIFVzaW5nIGEgbWFudWFsIHNldHVwIGdpdmVzIHlvdSBtb3JlIGNvbnRyb2wgb3ZlciB0aGUgbGF5b3V0IGFuZFxuICBlbGVtZW50cyBpbnNpZGUgdGhlIFRleHRmaWVsZC5cbiAgXG4gIFdoZW4geW91IHNldHVwIHRoZSB0ZXh0ZmllbGQgbWFudWFsbHksIHlvdSBuZWVkIHRvIHByb3ZpZGUgZWFjaFxuICBvZiB0aGUgY29tcG9uZW50cyB1bmRlcm5lYXRoIHRvIHRoZSBUZXh0ZmllbGQgY29tcG9uZW50LiBJdCB3aWxsXG4gIGFsc28gbm90IGJlIHdyYXBwZWQgaW5zaWRlIGEgbGFiZWwgZWxlbWVudCwgc28geW91J2xsIG5lZWQgdG9cbiAgcHJvdmlkZSBgaWRgIGFuZCBgZm9yYCBhdHRyaWJ1dGVzIHlvdXJzZWxmLiBUaGUgSGVscGVyVGV4dCBkb2VzXG4gIG5vdCBwYXNzIGl0cyBJRCBvdmVyIHRvIHRoZSBJbnB1dCBlaXRoZXIsIHNvIHlvdSdsbCBuZWVkIHRob3NlXG4gIGFjY2Vzc2liaWxpdHkgYXR0cmlidXRlcyB0b28uXG4gIFxuICBUaGUgVGV4dGZpZWxkJ3MgZm91bmRhdGlvbiB3aWxsIG9ubHkgYmUgaW5pdGlhbGl6ZWQgYWZ0ZXIgYVxuICBTdmVsdGUgdGljaygpIGhhcyBwYXNzZWQsIGluIG9yZGVyIHRvIHByb3Blcmx5IHJlY2lldmUgdGhlXG4gIGNvbXBvbmVudHMuIChUaGlzIG1heSBoYXZlIHVuZm9yZXNlZW4gY29uc2VxdWVuY2VzLCBJREsuXG4gIFVzZSB0aGlzIGZlYXR1cmUgYXQgeW91ciBvd24gcmlzay4pXG4tLT5cblxuPGRpdiBjbGFzcz1cImNvbHVtbnMgbWFyZ2luc1wiPlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIGJpbmQ6aW5wdXQ9e2lucHV0QX1cbiAgICAgIGJpbmQ6ZmxvYXRpbmdMYWJlbD17ZmxvYXRpbmdMYWJlbEF9XG4gICAgICBiaW5kOmxpbmVSaXBwbGU9e2xpbmVSaXBwbGVBfVxuICAgID5cbiAgICAgIDxGbG9hdGluZ0xhYmVsXG4gICAgICAgIGJpbmQ6dGhpcz17ZmxvYXRpbmdMYWJlbEF9XG4gICAgICAgIGZvcj1cImlucHV0LW1hbnVhbC1hXCJcbiAgICAgICAgc2xvdD1cImxhYmVsXCI+U3RhbmRhcmQ8L0Zsb2F0aW5nTGFiZWxcbiAgICAgID5cbiAgICAgIDxJbnB1dFxuICAgICAgICBiaW5kOnRoaXM9e2lucHV0QX1cbiAgICAgICAgYmluZDp2YWx1ZT17dmFsdWVBfVxuICAgICAgICBpZD1cImlucHV0LW1hbnVhbC1hXCJcbiAgICAgICAgYXJpYS1jb250cm9scz1cImhlbHBlci10ZXh0LW1hbnVhbC1hXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImhlbHBlci10ZXh0LW1hbnVhbC1hXCJcbiAgICAgIC8+XG4gICAgICA8TGluZVJpcHBsZSBiaW5kOnRoaXM9e2xpbmVSaXBwbGVBfSBzbG90PVwicmlwcGxlXCIgLz5cbiAgICAgIDxIZWxwZXJUZXh0IGlkPVwiaGVscGVyLXRleHQtbWFudWFsLWFcIiBzbG90PVwiaGVscGVyXCJcbiAgICAgICAgPkhlbHBlciBUZXh0PC9IZWxwZXJUZXh0XG4gICAgICA+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUF9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIGJpbmQ6aW5wdXQ9e2lucHV0Qn1cbiAgICAgIGJpbmQ6ZmxvYXRpbmdMYWJlbD17ZmxvYXRpbmdMYWJlbEJ9XG4gICAgICBiaW5kOmxpbmVSaXBwbGU9e2xpbmVSaXBwbGVCfVxuICAgICAgdmFyaWFudD1cImZpbGxlZFwiXG4gICAgPlxuICAgICAgPEZsb2F0aW5nTGFiZWxcbiAgICAgICAgYmluZDp0aGlzPXtmbG9hdGluZ0xhYmVsQn1cbiAgICAgICAgZm9yPVwiaW5wdXQtbWFudWFsLWJcIlxuICAgICAgICBzbG90PVwibGFiZWxcIj5GaWxsZWQ8L0Zsb2F0aW5nTGFiZWxcbiAgICAgID5cbiAgICAgIDxJbnB1dFxuICAgICAgICBiaW5kOnRoaXM9e2lucHV0Qn1cbiAgICAgICAgYmluZDp2YWx1ZT17dmFsdWVCfVxuICAgICAgICBpZD1cImlucHV0LW1hbnVhbC1iXCJcbiAgICAgICAgYXJpYS1jb250cm9scz1cImhlbHBlci10ZXh0LW1hbnVhbC1iXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImhlbHBlci10ZXh0LW1hbnVhbC1iXCJcbiAgICAgIC8+XG4gICAgICA8TGluZVJpcHBsZSBiaW5kOnRoaXM9e2xpbmVSaXBwbGVCfSBzbG90PVwicmlwcGxlXCIgLz5cbiAgICAgIDxIZWxwZXJUZXh0IGlkPVwiaGVscGVyLXRleHQtbWFudWFsLWJcIiBzbG90PVwiaGVscGVyXCJcbiAgICAgICAgPkhlbHBlciBUZXh0PC9IZWxwZXJUZXh0XG4gICAgICA+XG4gICAgPC9UZXh0ZmllbGQ+XG5cbiAgICA8cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZUJ9PC9wcmU+XG4gIDwvZGl2PlxuICA8ZGl2PlxuICAgIDxUZXh0ZmllbGRcbiAgICAgIGJpbmQ6aW5wdXQ9e2lucHV0Q31cbiAgICAgIGJpbmQ6bm90Y2hlZE91dGxpbmU9e25vdGNoZWRPdXRsaW5lQ31cbiAgICAgIGJpbmQ6ZmxvYXRpbmdMYWJlbD17ZmxvYXRpbmdMYWJlbEN9XG4gICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgID5cbiAgICAgIDxOb3RjaGVkT3V0bGluZSBiaW5kOnRoaXM9e25vdGNoZWRPdXRsaW5lQ30gc2xvdD1cImxhYmVsXCI+XG4gICAgICAgIDxGbG9hdGluZ0xhYmVsIGJpbmQ6dGhpcz17ZmxvYXRpbmdMYWJlbEN9IGZvcj1cImlucHV0LW1hbnVhbC1jXCJcbiAgICAgICAgICA+T3V0bGluZWQ8L0Zsb2F0aW5nTGFiZWxcbiAgICAgICAgPlxuICAgICAgPC9Ob3RjaGVkT3V0bGluZT5cbiAgICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIiBzbG90PVwibGVhZGluZ0ljb25cIj5ldmVudDwvSWNvbj5cbiAgICAgIDxJbnB1dFxuICAgICAgICBiaW5kOnRoaXM9e2lucHV0Q31cbiAgICAgICAgYmluZDp2YWx1ZT17dmFsdWVDfVxuICAgICAgICBpZD1cImlucHV0LW1hbnVhbC1jXCJcbiAgICAgICAgYXJpYS1jb250cm9scz1cImhlbHBlci10ZXh0LW1hbnVhbC1jXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImhlbHBlci10ZXh0LW1hbnVhbC1jXCJcbiAgICAgIC8+XG4gICAgICA8SGVscGVyVGV4dCBpZD1cImhlbHBlci10ZXh0LW1hbnVhbC1jXCIgc2xvdD1cImhlbHBlclwiXG4gICAgICAgID5IZWxwZXIgVGV4dDwvSGVscGVyVGV4dFxuICAgICAgPlxuICAgIDwvVGV4dGZpZWxkPlxuXG4gICAgPHByZSBjbGFzcz1cInN0YXR1c1wiPlZhbHVlOiB7dmFsdWVDfTwvcHJlPlxuICA8L2Rpdj5cbiAgPGRpdj5cbiAgICA8VGV4dGZpZWxkXG4gICAgICBiaW5kOmlucHV0PXtpbnB1dER9XG4gICAgICBiaW5kOm5vdGNoZWRPdXRsaW5lPXtub3RjaGVkT3V0bGluZUR9XG4gICAgICBiaW5kOmZsb2F0aW5nTGFiZWw9e2Zsb2F0aW5nTGFiZWxEfVxuICAgICAgdGV4dGFyZWFcbiAgICA+XG4gICAgICA8Tm90Y2hlZE91dGxpbmUgYmluZDp0aGlzPXtub3RjaGVkT3V0bGluZUR9IHNsb3Q9XCJsYWJlbFwiPlxuICAgICAgICA8RmxvYXRpbmdMYWJlbCBiaW5kOnRoaXM9e2Zsb2F0aW5nTGFiZWxEfSBmb3I9XCJpbnB1dC1tYW51YWwtZFwiXG4gICAgICAgICAgPlRleHRhcmVhPC9GbG9hdGluZ0xhYmVsXG4gICAgICAgID5cbiAgICAgIDwvTm90Y2hlZE91dGxpbmU+XG4gICAgICA8VGV4dGFyZWFcbiAgICAgICAgYmluZDp0aGlzPXtpbnB1dER9XG4gICAgICAgIGJpbmQ6dmFsdWU9e3ZhbHVlRH1cbiAgICAgICAgaWQ9XCJpbnB1dC1tYW51YWwtZFwiXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJoZWxwZXItdGV4dC1tYW51YWwtZFwiXG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJoZWxwZXItdGV4dC1tYW51YWwtZFwiXG4gICAgICAvPlxuICAgICAgPEhlbHBlclRleHQgaWQ9XCJoZWxwZXItdGV4dC1tYW51YWwtZFwiIHNsb3Q9XCJoZWxwZXJcIlxuICAgICAgICA+SGVscGVyIFRleHQ8L0hlbHBlclRleHRcbiAgICAgID5cbiAgICA8L1RleHRmaWVsZD5cblxuICAgIDxwcmUgY2xhc3M9XCJzdGF0dXNcIj5WYWx1ZToge3ZhbHVlRH08L3ByZT5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IFRleHRmaWVsZCwgeyBJbnB1dCwgVGV4dGFyZWEgfSBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuICBpbXBvcnQgSWNvbiBmcm9tICdAc211aS90ZXh0ZmllbGQvaWNvbic7XG4gIGltcG9ydCBIZWxwZXJUZXh0IGZyb20gJ0BzbXVpL3RleHRmaWVsZC9oZWxwZXItdGV4dC9pbmRleCc7XG4gIGltcG9ydCBGbG9hdGluZ0xhYmVsIGZyb20gJ0BzbXVpL2Zsb2F0aW5nLWxhYmVsJztcbiAgaW1wb3J0IExpbmVSaXBwbGUgZnJvbSAnQHNtdWkvbGluZS1yaXBwbGUnO1xuICBpbXBvcnQgTm90Y2hlZE91dGxpbmUgZnJvbSAnQHNtdWkvbm90Y2hlZC1vdXRsaW5lJztcblxuICAvLyBNYW51YWwgU2V0dXAgcmVxdWlyZXMgcGFzc2luZyB0aGUgbG93ZXIgY29tcG9uZW50cyB1cCB0byB0aGUgVGV4dGZpZWxkXG4gIGxldCB2YWx1ZUEgPSAnJztcbiAgbGV0IGlucHV0QTtcbiAgbGV0IGZsb2F0aW5nTGFiZWxBO1xuICBsZXQgbGluZVJpcHBsZUE7XG5cbiAgbGV0IHZhbHVlQiA9ICcnO1xuICBsZXQgaW5wdXRCO1xuICBsZXQgZmxvYXRpbmdMYWJlbEI7XG4gIGxldCBsaW5lUmlwcGxlQjtcblxuICBsZXQgdmFsdWVDID0gJyc7XG4gIGxldCBpbnB1dEM7XG4gIGxldCBub3RjaGVkT3V0bGluZUM7XG4gIGxldCBmbG9hdGluZ0xhYmVsQztcblxuICBsZXQgdmFsdWVEID0gJyc7XG4gIGxldCBpbnB1dEQ7XG4gIGxldCBub3RjaGVkT3V0bGluZUQ7XG4gIGxldCBmbG9hdGluZ0xhYmVsRDtcbjwvc2NyaXB0PlxuIiwiPGRpdiBjbGFzcz1cInNvbG8tZGVtby1jb250YWluZXIgc29sby1jb250YWluZXJcIj5cbiAgPFBhcGVyIGNsYXNzPVwic29sby1wYXBlclwiIGVsZXZhdGlvbj17Nn0+XG4gICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPnNlYXJjaDwvSWNvbj5cbiAgICA8SW5wdXRcbiAgICAgIGJpbmQ6dmFsdWVcbiAgICAgIG9uOmtleWRvd249eyhldmVudCkgPT4gZXZlbnQua2V5ID09PSAnRW50ZXInICYmIGRvU2VhcmNoKCl9XG4gICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICBjbGFzcz1cInNvbG8taW5wdXRcIlxuICAgIC8+XG4gIDwvUGFwZXI+XG4gIDxGYWJcbiAgICBvbjpjbGljaz17ZG9TZWFyY2h9XG4gICAgZGlzYWJsZWQ9e3ZhbHVlID09PSAnJ31cbiAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgIG1pbmlcbiAgICBjbGFzcz1cInNvbG8tZmFiXCJcbiAgPlxuICAgIDxJY29uIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5hcnJvd19mb3J3YXJkPC9JY29uPlxuICA8L0ZhYj5cbjwvZGl2PlxuXG48cHJlIGNsYXNzPVwic3RhdHVzXCI+VmFsdWU6IHt2YWx1ZX08L3ByZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAc211aS90ZXh0ZmllbGQnO1xuICBpbXBvcnQgUGFwZXIgZnJvbSAnQHNtdWkvcGFwZXInO1xuICBpbXBvcnQgRmFiIGZyb20gJ0BzbXVpL2ZhYic7XG4gIGltcG9ydCB7IEljb24gfSBmcm9tICdAc211aS9jb21tb24nO1xuXG4gIGxldCB2YWx1ZSA9ICcnO1xuXG4gIGZ1bmN0aW9uIGRvU2VhcmNoKCkge1xuICAgIGFsZXJ0KCdTZWFyY2ggZm9yICcgKyB2YWx1ZSk7XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5zb2xvLWRlbW8tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzNnB4IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLWJhY2tncm91bmQsICNmOGY4ZjgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkXG4gICAgICB2YXIoLS1tZGMtdGhlbWUtdGV4dC1oaW50LW9uLWJhY2tncm91bmQsIHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gIH1cblxuICAuc29sby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICAqIDpnbG9iYWwoLnNvbG8tcGFwZXIpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luOiAwIDEycHg7XG4gICAgcGFkZGluZzogMCAxMnB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgfVxuICAqIDpnbG9iYWwoLnNvbG8tcGFwZXIgPiAqKSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAxMnB4O1xuICB9XG4gICogOmdsb2JhbCguc29sby1pbnB1dCkge1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UsICMwMDApO1xuICB9XG4gICogOmdsb2JhbCguc29sby1pbnB1dDo6cGxhY2Vob2xkZXIpIHtcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXN1cmZhY2UsICMwMDApO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgfVxuICAqIDpnbG9iYWwoLnNvbG8tZmFiKSB7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cbjwvc3R5bGU+XG4iLCI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5UZXh0IEZpZWxkIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPlRleHQgRmllbGQ8L2gyPlxuXG4gIDxwcmUgY2xhc3M9XCJkZW1vLXNwYWNlZFwiPm5wbSBpIC1EIEBzbXVpL3RleHRmaWVsZDwvcHJlPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U2hvd2Nhc2V9IGZpbGU9XCJ0ZXh0ZmllbGQvX1Nob3djYXNlLnN2ZWx0ZVwiIC8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtTdGFuZGFyZH0gZmlsZT1cInRleHRmaWVsZC9fU3RhbmRhcmQuc3ZlbHRlXCI+U3RhbmRhcmQ8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtGaWxsZWR9IGZpbGU9XCJ0ZXh0ZmllbGQvX0ZpbGxlZC5zdmVsdGVcIj5GaWxsZWQ8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtPdXRsaW5lZH0gZmlsZT1cInRleHRmaWVsZC9fT3V0bGluZWQuc3ZlbHRlXCI+T3V0bGluZWQ8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtTaGFwZWRGaWxsZWR9IGZpbGU9XCJ0ZXh0ZmllbGQvX1NoYXBlZEZpbGxlZC5zdmVsdGVcIj5cbiAgICBTaGFwZWQgRmlsbGVkXG4gICAgPHN2ZWx0ZTpmcmFnbWVudCBzbG90PVwic3VidGl0bGVcIj5TdHlsZWQgd2l0aCBDU1M8L3N2ZWx0ZTpmcmFnbWVudD5cbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U2hhcGVkT3V0bGluZWR9IGZpbGU9XCJ0ZXh0ZmllbGQvX1NoYXBlZE91dGxpbmVkLnN2ZWx0ZVwiPlxuICAgIFNoYXBlZCBPdXRsaW5lZFxuICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cInN1YnRpdGxlXCI+U3R5bGVkIHdpdGggQ1NTPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e1JlcXVpcmVkfSBmaWxlPVwidGV4dGZpZWxkL19SZXF1aXJlZC5zdmVsdGVcIj5SZXF1aXJlZDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0Rpc2FibGVkfSBmaWxlPVwidGV4dGZpZWxkL19EaXNhYmxlZC5zdmVsdGVcIj5EaXNhYmxlZDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e1ByZWZpeGVkfSBmaWxlPVwidGV4dGZpZWxkL19QcmVmaXhlZC5zdmVsdGVcIj5QcmVmaXhlZDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e1N1ZmZpeGVkfSBmaWxlPVwidGV4dGZpZWxkL19TdWZmaXhlZC5zdmVsdGVcIj5TdWZmaXhlZDwvRGVtbz5cblxuICA8RGVtb1xuICAgIGNvbXBvbmVudD17Tm9MYWJlbE9ySGVscGVyVGV4dH1cbiAgICBmaWxlPVwidGV4dGZpZWxkL19Ob0xhYmVsT3JIZWxwZXJUZXh0LnN2ZWx0ZVwiXG4gID5cbiAgICBXaXRob3V0IGxhYmVsIG9yIGhlbHBlciB0ZXh0XG4gIDwvRGVtbz5cblxuICA8RGVtb1xuICAgIGNvbXBvbmVudD17UGVyc2lzdGVudEhlbHBlclRleHR9XG4gICAgZmlsZT1cInRleHRmaWVsZC9fUGVyc2lzdGVudEhlbHBlclRleHQuc3ZlbHRlXCJcbiAgPlxuICAgIFdpdGggcGVyc2lzdGVudCBoZWxwZXIgdGV4dFxuICA8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtDaGFyYWN0ZXJDb3VudH0gZmlsZT1cInRleHRmaWVsZC9fQ2hhcmFjdGVyQ291bnQuc3ZlbHRlXCI+XG4gICAgV2l0aCBjaGFyYWN0ZXIgY291bnRcbiAgPC9EZW1vPlxuXG4gIDxEZW1vXG4gICAgY29tcG9uZW50PXtIZWxwZXJUZXh0Q2hhcmFjdGVyQ291bnR9XG4gICAgZmlsZT1cInRleHRmaWVsZC9fSGVscGVyVGV4dENoYXJhY3RlckNvdW50LnN2ZWx0ZVwiXG4gID5cbiAgICBXaXRoIGhlbHBlciB0ZXh0IGFuZCBjaGFyYWN0ZXIgY291bnRcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17Qm90aEljb25zfSBmaWxlPVwidGV4dGZpZWxkL19Cb3RoSWNvbnMuc3ZlbHRlXCI+XG4gICAgQm90aCBpY29uc1xuICA8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtDb25kaXRpb25hbEljb25zfSBmaWxlPVwidGV4dGZpZWxkL19Db25kaXRpb25hbEljb25zLnN2ZWx0ZVwiPlxuICAgIENvbmRpdGlvbmFsIGljb25zXG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e1RleHRhcmVhfSBmaWxlPVwidGV4dGZpZWxkL19UZXh0YXJlYS5zdmVsdGVcIj5UZXh0YXJlYTwvRGVtbz5cblxuICA8RGVtb1xuICAgIGNvbXBvbmVudD17VGV4dGFyZWFDaGFyYWN0ZXJDb3VudH1cbiAgICBmaWxlPVwidGV4dGZpZWxkL19UZXh0YXJlYUNoYXJhY3RlckNvdW50LnN2ZWx0ZVwiXG4gID5cbiAgICBUZXh0YXJlYSB3aXRoIGNoYXJhY3RlciBjb3VudFxuICA8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtGdWxsV2lkdGh9IGZpbGU9XCJ0ZXh0ZmllbGQvX0Z1bGxXaWR0aC5zdmVsdGVcIj5cbiAgICBGdWxsIHdpZHRoXG4gIDwvRGVtbz5cblxuICA8RGVtb1xuICAgIGNvbXBvbmVudD17RnVsbFdpZHRoVGV4dGFyZWF9XG4gICAgZmlsZT1cInRleHRmaWVsZC9fRnVsbFdpZHRoVGV4dGFyZWEuc3ZlbHRlXCJcbiAgPlxuICAgIEZ1bGwgd2lkdGggdGV4dGFyZWFcbiAgPC9EZW1vPlxuXG4gIDxEZW1vXG4gICAgY29tcG9uZW50PXtGaXhlZFNpemVUZXh0YXJlYX1cbiAgICBmaWxlPVwidGV4dGZpZWxkL19GaXhlZFNpemVUZXh0YXJlYS5zdmVsdGVcIlxuICA+XG4gICAgRml4ZWQgU2l6ZSBUZXh0YXJlYVxuICAgIDxzdmVsdGU6ZnJhZ21lbnQgc2xvdD1cInN1YnRpdGxlXCI+XG4gICAgICBUdXJuIG9mZiB0aGUgYnJvd3NlcidzIG5hdGl2ZSByZXNpemUgZmVhdHVyZS5cbiAgICA8L3N2ZWx0ZTpmcmFnbWVudD5cbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17RWxlbWVudHNJbkxhYmVsfSBmaWxlPVwidGV4dGZpZWxkL19FbGVtZW50c0luTGFiZWwuc3ZlbHRlXCI+XG4gICAgRWxlbWVudHMgaW4gdGhlIGxhYmVsXG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0RpZmZlcmVudFR5cGVzfSBmaWxlPVwidGV4dGZpZWxkL19EaWZmZXJlbnRUeXBlcy5zdmVsdGVcIj5cbiAgICBEaWZmZXJlbnQgaW5wdXQgdHlwZXNcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17TWFudWFsU2V0dXB9IGZpbGU9XCJ0ZXh0ZmllbGQvX01hbnVhbFNldHVwLnN2ZWx0ZVwiPlxuICAgIE1hbnVhbCBzZXR1cFxuICA8L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtTb2xvfSBmaWxlPVwidGV4dGZpZWxkL19Tb2xvLnN2ZWx0ZVwiPlxuICAgIFNvbG8gc3R5bGVcbiAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJzdWJ0aXRsZVwiPlxuICAgICAgVXNpbmcgUGFwZXIgYW5kIGFuIElucHV0IG91dHNpZGUgYSBUZXh0ZmllbGQgdG8gY3JlYXRlIGEgXCJTb2xvXCIgaW5wdXRcbiAgICA8L3N2ZWx0ZTpmcmFnbWVudD5cbiAgPC9EZW1vPlxuPC9zZWN0aW9uPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgRGVtbyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0RlbW8uc3ZlbHRlJztcbiAgaW1wb3J0IFNob3djYXNlIGZyb20gJy4vX1Nob3djYXNlLnN2ZWx0ZSc7XG4gIGltcG9ydCBTdGFuZGFyZCBmcm9tICcuL19TdGFuZGFyZC5zdmVsdGUnO1xuICBpbXBvcnQgRmlsbGVkIGZyb20gJy4vX0ZpbGxlZC5zdmVsdGUnO1xuICBpbXBvcnQgT3V0bGluZWQgZnJvbSAnLi9fT3V0bGluZWQuc3ZlbHRlJztcbiAgaW1wb3J0IFNoYXBlZEZpbGxlZCBmcm9tICcuL19TaGFwZWRGaWxsZWQuc3ZlbHRlJztcbiAgaW1wb3J0IFNoYXBlZE91dGxpbmVkIGZyb20gJy4vX1NoYXBlZE91dGxpbmVkLnN2ZWx0ZSc7XG4gIGltcG9ydCBSZXF1aXJlZCBmcm9tICcuL19SZXF1aXJlZC5zdmVsdGUnO1xuICBpbXBvcnQgRGlzYWJsZWQgZnJvbSAnLi9fRGlzYWJsZWQuc3ZlbHRlJztcbiAgaW1wb3J0IFByZWZpeGVkIGZyb20gJy4vX1ByZWZpeGVkLnN2ZWx0ZSc7XG4gIGltcG9ydCBTdWZmaXhlZCBmcm9tICcuL19TdWZmaXhlZC5zdmVsdGUnO1xuICBpbXBvcnQgTm9MYWJlbE9ySGVscGVyVGV4dCBmcm9tICcuL19Ob0xhYmVsT3JIZWxwZXJUZXh0LnN2ZWx0ZSc7XG4gIGltcG9ydCBQZXJzaXN0ZW50SGVscGVyVGV4dCBmcm9tICcuL19QZXJzaXN0ZW50SGVscGVyVGV4dC5zdmVsdGUnO1xuICBpbXBvcnQgQ2hhcmFjdGVyQ291bnQgZnJvbSAnLi9fQ2hhcmFjdGVyQ291bnQuc3ZlbHRlJztcbiAgaW1wb3J0IEhlbHBlclRleHRDaGFyYWN0ZXJDb3VudCBmcm9tICcuL19IZWxwZXJUZXh0Q2hhcmFjdGVyQ291bnQuc3ZlbHRlJztcbiAgaW1wb3J0IEJvdGhJY29ucyBmcm9tICcuL19Cb3RoSWNvbnMuc3ZlbHRlJztcbiAgaW1wb3J0IENvbmRpdGlvbmFsSWNvbnMgZnJvbSAnLi9fQ29uZGl0aW9uYWxJY29ucy5zdmVsdGUnO1xuICBpbXBvcnQgVGV4dGFyZWEgZnJvbSAnLi9fVGV4dGFyZWEuc3ZlbHRlJztcbiAgaW1wb3J0IFRleHRhcmVhQ2hhcmFjdGVyQ291bnQgZnJvbSAnLi9fVGV4dGFyZWFDaGFyYWN0ZXJDb3VudC5zdmVsdGUnO1xuICBpbXBvcnQgRnVsbFdpZHRoIGZyb20gJy4vX0Z1bGxXaWR0aC5zdmVsdGUnO1xuICBpbXBvcnQgRnVsbFdpZHRoVGV4dGFyZWEgZnJvbSAnLi9fRnVsbFdpZHRoVGV4dGFyZWEuc3ZlbHRlJztcbiAgaW1wb3J0IEZpeGVkU2l6ZVRleHRhcmVhIGZyb20gJy4vX0ZpeGVkU2l6ZVRleHRhcmVhLnN2ZWx0ZSc7XG4gIGltcG9ydCBFbGVtZW50c0luTGFiZWwgZnJvbSAnLi9fRWxlbWVudHNJbkxhYmVsLnN2ZWx0ZSc7XG4gIGltcG9ydCBEaWZmZXJlbnRUeXBlcyBmcm9tICcuL19EaWZmZXJlbnRUeXBlcy5zdmVsdGUnO1xuICBpbXBvcnQgTWFudWFsU2V0dXAgZnJvbSAnLi9fTWFudWFsU2V0dXAuc3ZlbHRlJztcbiAgaW1wb3J0IFNvbG8gZnJvbSAnLi9fU29sby5zdmVsdGUnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgKiA6Z2xvYmFsKC5tYXJnaW5zKSB7XG4gICAgbWFyZ2luOiAxOHB4IDAgMjRweDtcbiAgfVxuXG4gICogOmdsb2JhbCguY29sdW1ucykge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gICogOmdsb2JhbCguY29sdW1ucyA+ICopIHtcbiAgICBmbGV4LWJhc2lzOiAwO1xuICAgIG1pbi13aWR0aDogMjE4cHg7XG4gIH1cblxuICAqIDpnbG9iYWwoLmNvbHVtbnMgLm1kYy10ZXh0LWZpZWxkKSxcbiAgKiA6Z2xvYmFsKC5jb2x1bW5zIC5tZGMtdGV4dC1maWVsZCArIC5tZGMtdGV4dC1maWVsZC1oZWxwZXItbGluZSkge1xuICAgIHdpZHRoOiAyMThweDtcbiAgfVxuXG4gICogOmdsb2JhbCguY29sdW1ucyAuc3RhdHVzKSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOlsiY3NzQ2xhc3NlcyIsInN0cmluZ3MiLCJfX2V4dGVuZHMiLCJfX2Fzc2lnbiIsIk1EQ0ZvdW5kYXRpb24iLCJjbGFzc01hcCIsImZvcndhcmRFdmVudHNCdWlsZGVyIiwiZGlzcGF0Y2giLCJleHRlbmRTdGF0aWNzIiwib2xkTW9kaWZpZXJSZWdleCIsIm5ld01vZGlmaWVyUmVnZXgiLCJ1c2VBY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxZQUFVLEdBQUc7QUFDakIsSUFBSSxJQUFJLEVBQUUsa0NBQWtDO0FBQzVDLENBQUMsQ0FBQztBQUNGLElBQUlDLFNBQU8sR0FBRztBQUNkLElBQUksYUFBYSxFQUFFLEdBQUcsR0FBR0QsWUFBVSxDQUFDLElBQUk7QUFDeEMsQ0FBQzs7QUMzQkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUssSUFBSSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkM5QzNCLEdBQU07c0NBQU4sR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFPTixHQUFNO3NDQUFOLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBUU4sR0FBTTtzQ0FBTixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFRRSxHQUFNO3NDQUFOLEdBQU07Ozs7Ozs7Ozs7Ozs7O3dCQW5CVCxHQUFNOzs7Ozs7O3dCQVFOLEdBQU07Ozs7Ozs7eUJBUU4sR0FBTTs7Ozs7Ozt5QkFPTixHQUFNOzs7Ozs7Ozs7Ozs7OzBDQXZCTixHQUFNOzs7Ozs7Ozs7OzswQ0FRTixHQUFNOzs7Ozs7Ozs7OzsyQ0FRTixHQUFNOzs7Ozs7Ozs7OzsyQ0FPTixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0EzQlgsR0FBTTs7Ozs7cUVBSUQsR0FBTTs7Ozs7Ozs7OzBDQUdYLEdBQU07Ozs7O3FFQUtELEdBQU07Ozs7Ozs7OzswQ0FHWCxHQUFNOzs7OztzRUFLRCxHQUFNOzs7Ozs7Ozs7MENBR0gsR0FBTTs7Ozs7c0VBSVQsR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVNoQyxNQUFNLEdBQUcsRUFBRTtLQUNYLE1BQU0sR0FBRyxFQUFFO0tBQ1gsTUFBTSxHQUFHLEVBQUU7S0FDWCxNQUFNLEdBQUcsRUFBRTs7Ozs7Ozs7RUF2Q1UsTUFBTTs7Ozs7RUFPTixNQUFNOzs7OztFQVFOLE1BQU07Ozs7O0VBUUUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLaEIsR0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUFqQixHQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBaUJqQixHQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBQWhCLEdBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLaEIsR0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUFqQixHQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNBaUJqQixHQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7NEJBQWhCLEdBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FLaEIsR0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUFqQixHQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQXZEUCxHQUFnQjswQ0FDZixHQUFpQjs7Ozs7Ozs7O2dCQUN2QixHQUFNO3NDQUFOLEdBQU07Ozs7Ozs7Ozs7O3dDQW1CRCxHQUFnQjswQ0FDZixHQUFpQjs7Ozs7Ozs7OztnQkFFdkIsR0FBTTtzQ0FBTixHQUFNOzs7Ozs7Ozs7Ozt3Q0FtQkQsR0FBZ0I7MENBQ2YsR0FBaUI7Ozs7Ozs7Ozs7Z0JBRXZCLEdBQU07c0NBQU4sR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkE3QlEsR0FBTTs7Ozs7Ozt3QkFzQk4sR0FBTTs7Ozs7Ozt5QkFzQk4sR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQTVDTixHQUFNOzs7Ozs7Ozs7OzswQ0FzQk4sR0FBTTs7Ozs7Ozs7Ozs7MkNBc0JOLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUdBN0RmLEdBQWdCO3FHQUNmLEdBQWlCOzs7Ozs7OzswQ0FDdkIsR0FBTTs7Ozs7cUVBZVEsR0FBTTs7aUdBSWYsR0FBZ0I7cUdBQ2YsR0FBaUI7Ozs7Ozs7OzBDQUV2QixHQUFNOzs7OztxRUFlUSxHQUFNOztpR0FJZixHQUFnQjtxR0FDZixHQUFpQjs7Ozs7Ozs7MENBRXZCLEdBQU07Ozs7O3NFQWVRLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBa0JoQyxNQUFNLEdBQUcsRUFBRTtLQUNYLE1BQU0sR0FBRyxFQUFFO0tBQ1gsTUFBTSxHQUFHLEVBQUU7S0FFWCxnQkFBZ0IsR0FBRyxJQUFJO0tBQ3ZCLGlCQUFpQixHQUFHLElBQUk7Ozs7Ozs7O0VBbEZaLE1BQU07Ozs7O0VBc0JOLE1BQU07Ozs7O0VBc0JOLE1BQU07Ozs7NkNBb0JHLGdCQUFnQixJQUFJLGdCQUFnQjsrQ0FHcEMsaUJBQWlCLElBQUksaUJBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDckUzRCxLQUFLLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NBVixLQUFLLEdBQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDS1YsS0FBSyxHQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkE0Qk4sR0FBTTtpQ0FBTixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FBTixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkEwQk4sR0FBTTtvQ0FBTixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FBTixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQ3JHRCxDQUFDOzs7Ozs7Ozs7d0JBVzFCLEdBQUssUUFBSyxFQUFFOzs7Ozs7Ozs7OytCQURaLEdBQVE7Ozs7Ozs7Ozs7O3VCQVVNLEdBQUs7Ozs7Ozs7Ozs7Ozs7O3dDQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2REFUbkIsR0FBSyxRQUFLLEVBQUU7Ozs7Ozs7bUVBU0UsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBUTNCLEtBQUssR0FBRyxFQUFFOztVQUVMLFFBQVE7RUFDZixLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7O3lCQTNCWixLQUFLLElBQUssS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLElBQUksUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDSTNDLFFBQVE7Ozs7Ozs7O2VBRVIsUUFBUTs7Ozs7Ozs7OztlQUVSLE1BQU07Ozs7Ozs7Ozs7ZUFFTixRQUFROzs7Ozs7Ozs7O2VBRVIsWUFBWTs7Ozs7Ozs7Ozs7OztlQUtaLGNBQWM7Ozs7Ozs7Ozs7Ozs7ZUFLZCxRQUFROzs7Ozs7Ozs7O2VBRVIsUUFBUTs7Ozs7Ozs7OztlQUVSLFFBQVE7Ozs7Ozs7Ozs7ZUFFUixRQUFROzs7Ozs7Ozs7O2VBR1osbUJBQW1COzs7Ozs7Ozs7O2VBT25CLG9CQUFvQjs7Ozs7Ozs7OztlQU1oQixjQUFjOzs7Ozs7Ozs7O2VBS2xCLHdCQUF3Qjs7Ozs7Ozs7OztlQU1wQixTQUFTOzs7Ozs7Ozs7O2VBSVQsZ0JBQWdCOzs7Ozs7Ozs7O2VBSWhCLFFBQVE7Ozs7Ozs7Ozs7ZUFHWixzQkFBc0I7Ozs7Ozs7Ozs7ZUFNbEIsU0FBUzs7Ozs7Ozs7OztlQUtiLGlCQUFpQjs7Ozs7Ozs7OztlQU9qQixpQkFBaUI7Ozs7Ozs7Ozs7Ozs7ZUFTYixlQUFlOzs7Ozs7Ozs7O2VBSWYsY0FBYzs7Ozs7Ozs7OztlQUlkLFdBQVc7Ozs7Ozs7Ozs7ZUFJWCxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
