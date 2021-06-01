import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a7 as create_slot, v as validate_slots, Y as get_current_component, p as element, x as claim_element, y as children, u as detach_dev, E as attr_dev, D as add_location, F as insert_dev, aa as action_destroyer, a8 as update_slot, ab as is_function, J as transition_in, K as transition_out, ac as run_all, a6 as binding_callbacks, $ as assign, W as compute_rest_props, a0 as exclude_internal_props, q as create_component, A as claim_component, a9 as set_attributes, H as mount_component, a2 as get_spread_update, a3 as get_spread_object, M as destroy_component, ag as validate_each_argument, a1 as empty, O as noop, aj as destroy_each, t as text, o as space, z as claim_text, w as claim_space, G as append_dev, B as set_style, a4 as group_outros, a5 as check_outros, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';

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

/* packages/layout-grid/InnerGrid.svelte generated by Svelte v3.37.0 */

const file$9 = "packages/layout-grid/InnerGrid.svelte";

function create_fragment$9(ctx) {
	let div;
	let div_class_value;
	let useActions_action;
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
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", div_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-layout-grid__inner": true
			}));

			add_location(div, file$9, 0, 0, 0);
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
					action_destroyer(/*forwardEvents*/ ctx[3].call(null, div))
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

			if (!current || dirty & /*className*/ 2 && div_class_value !== (div_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-layout-grid__inner": true
			}))) {
				attr_dev(div, "class", div_class_value);
			}

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
		id: create_fragment$9.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$9($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("InnerGrid", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let element;

	function getElement() {
		return element;
	}

	const writable_props = ["use", "class"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<InnerGrid> was created with unknown prop '${key}'`);
	});

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(2, element);
		});
	}

	$$self.$$set = $$props => {
		if ("use" in $$props) $$invalidate(0, use = $$props.use);
		if ("class" in $$props) $$invalidate(1, className = $$props.class);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
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

	$$self.$inject_state = $$props => {
		if ("use" in $$props) $$invalidate(0, use = $$props.use);
		if ("className" in $$props) $$invalidate(1, className = $$props.className);
		if ("element" in $$props) $$invalidate(2, element = $$props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		element,
		forwardEvents,
		getElement,
		$$scope,
		slots,
		div_binding
	];
}

class InnerGrid extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$9, create_fragment$9, safe_not_equal, { use: 0, class: 1, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "InnerGrid",
			options,
			id: create_fragment$9.name
		});
	}

	get use() {
		throw new Error("<InnerGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<InnerGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<InnerGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<InnerGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<InnerGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/layout-grid/LayoutGrid.svelte generated by Svelte v3.37.0 */
const file$8 = "packages/layout-grid/LayoutGrid.svelte";

// (13:2) <InnerGrid {...prefixFilter($$restProps, 'innerGrid$')}>
function create_default_slot$7(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[8].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

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
				if (default_slot.p && dirty & /*$$scope*/ 1024) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, null, null);
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
		id: create_default_slot$7.name,
		type: "slot",
		source: "(13:2) <InnerGrid {...prefixFilter($$restProps, 'innerGrid$')}>",
		ctx
	});

	return block;
}

function create_fragment$8(ctx) {
	let div;
	let innergrid;
	let div_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const innergrid_spread_levels = [prefixFilter(/*$$restProps*/ ctx[6], "innerGrid$")];

	let innergrid_props = {
		$$slots: { default: [create_default_slot$7] },
		$$scope: { ctx }
	};

	for (let i = 0; i < innergrid_spread_levels.length; i += 1) {
		innergrid_props = assign(innergrid_props, innergrid_spread_levels[i]);
	}

	innergrid = new InnerGrid({ props: innergrid_props, $$inline: true });

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-layout-grid": true,
				"mdc-layout-grid--fixed-column-width": /*fixedColumnWidth*/ ctx[2],
				["mdc-layout-grid--align-" + /*align*/ ctx[3]]: /*align*/ ctx[3] != null
			})
		},
		exclude(/*$$restProps*/ ctx[6], ["innerGrid$"])
	];

	let div_data = {};

	for (let i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	const block = {
		c: function create() {
			div = element("div");
			create_component(innergrid.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(innergrid.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$8, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(innergrid, div, null);
			/*div_binding*/ ctx[9](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[5].call(null, div))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			const innergrid_changes = (dirty & /*prefixFilter, $$restProps*/ 64)
			? get_spread_update(innergrid_spread_levels, [get_spread_object(prefixFilter(/*$$restProps*/ ctx[6], "innerGrid$"))])
			: {};

			if (dirty & /*$$scope*/ 1024) {
				innergrid_changes.$$scope = { dirty, ctx };
			}

			innergrid.$set(innergrid_changes);

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*className, fixedColumnWidth, align*/ 14 && div_class_value !== (div_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-layout-grid": true,
					"mdc-layout-grid--fixed-column-width": /*fixedColumnWidth*/ ctx[2],
					["mdc-layout-grid--align-" + /*align*/ ctx[3]]: /*align*/ ctx[3] != null
				}))) && { class: div_class_value },
				dirty & /*$$restProps*/ 64 && exclude(/*$$restProps*/ ctx[6], ["innerGrid$"])
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 1) useActions_action.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(innergrid.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(innergrid.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(innergrid);
			/*div_binding*/ ctx[9](null);
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
	const omit_props_names = ["use","class","fixedColumnWidth","align","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("LayoutGrid", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { fixedColumnWidth = false } = $$props;
	let { align = null } = $$props;
	let element;

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
		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("fixedColumnWidth" in $$new_props) $$invalidate(2, fixedColumnWidth = $$new_props.fixedColumnWidth);
		if ("align" in $$new_props) $$invalidate(3, align = $$new_props.align);
		if ("$$scope" in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		classMap,
		exclude,
		prefixFilter,
		useActions,
		InnerGrid,
		forwardEvents,
		use,
		className,
		fixedColumnWidth,
		align,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("fixedColumnWidth" in $$props) $$invalidate(2, fixedColumnWidth = $$new_props.fixedColumnWidth);
		if ("align" in $$props) $$invalidate(3, align = $$new_props.align);
		if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		fixedColumnWidth,
		align,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		slots,
		div_binding,
		$$scope
	];
}

class LayoutGrid extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$8, create_fragment$8, safe_not_equal, {
			use: 0,
			class: 1,
			fixedColumnWidth: 2,
			align: 3,
			getElement: 7
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "LayoutGrid",
			options,
			id: create_fragment$8.name
		});
	}

	get use() {
		throw new Error("<LayoutGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<LayoutGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<LayoutGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<LayoutGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get fixedColumnWidth() {
		throw new Error("<LayoutGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fixedColumnWidth(value) {
		throw new Error("<LayoutGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get align() {
		throw new Error("<LayoutGrid>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set align(value) {
		throw new Error("<LayoutGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[7];
	}

	set getElement(value) {
		throw new Error("<LayoutGrid>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/layout-grid/Cell.svelte generated by Svelte v3.37.0 */

const file$7 = "packages/layout-grid/Cell.svelte";

function create_fragment$7(ctx) {
	let div;
	let div_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], null);

	let div_levels = [
		{
			class: div_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-layout-grid__cell": true,
				["mdc-layout-grid__cell--align-" + /*align*/ ctx[2]]: /*align*/ ctx[2] != null,
				["mdc-layout-grid__cell--order-" + /*order*/ ctx[3]]: /*order*/ ctx[3] != null,
				["mdc-layout-grid__cell--span-" + /*span*/ ctx[4]]: /*span*/ ctx[4] != null,
				...Object.fromEntries(Object.entries(/*spanDevices*/ ctx[5]).map(func))
			})
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
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(div, div_data);
			add_location(div, file$7, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			/*div_binding*/ ctx[12](div);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, div, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[7].call(null, div))
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

			set_attributes(div, div_data = get_spread_update(div_levels, [
				(!current || dirty & /*className, align, order, span, spanDevices*/ 62 && div_class_value !== (div_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-layout-grid__cell": true,
					["mdc-layout-grid__cell--align-" + /*align*/ ctx[2]]: /*align*/ ctx[2] != null,
					["mdc-layout-grid__cell--order-" + /*order*/ ctx[3]]: /*order*/ ctx[3] != null,
					["mdc-layout-grid__cell--span-" + /*span*/ ctx[4]]: /*span*/ ctx[4] != null,
					...Object.fromEntries(Object.entries(/*spanDevices*/ ctx[5]).map(func))
				}))) && { class: div_class_value },
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
			if (detaching) detach_dev(div);
			if (default_slot) default_slot.d(detaching);
			/*div_binding*/ ctx[12](null);
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

const func = ([device, span]) => [`mdc-layout-grid__cell--span-${span}-${device}`, true];

function instance$7($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","align","order","span","spanDevices","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Cell", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { align = null } = $$props;
	let { order = null } = $$props;
	let { span = null } = $$props;
	let { spanDevices = {} } = $$props;
	let element;

	function getElement() {
		return element;
	}

	function div_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(6, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("align" in $$new_props) $$invalidate(2, align = $$new_props.align);
		if ("order" in $$new_props) $$invalidate(3, order = $$new_props.order);
		if ("span" in $$new_props) $$invalidate(4, span = $$new_props.span);
		if ("spanDevices" in $$new_props) $$invalidate(5, spanDevices = $$new_props.spanDevices);
		if ("$$scope" in $$new_props) $$invalidate(10, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		forwardEvents,
		use,
		className,
		align,
		order,
		span,
		spanDevices,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("align" in $$props) $$invalidate(2, align = $$new_props.align);
		if ("order" in $$props) $$invalidate(3, order = $$new_props.order);
		if ("span" in $$props) $$invalidate(4, span = $$new_props.span);
		if ("spanDevices" in $$props) $$invalidate(5, spanDevices = $$new_props.spanDevices);
		if ("element" in $$props) $$invalidate(6, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		align,
		order,
		span,
		spanDevices,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		div_binding
	];
}

class Cell extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$7, create_fragment$7, safe_not_equal, {
			use: 0,
			class: 1,
			align: 2,
			order: 3,
			span: 4,
			spanDevices: 5,
			getElement: 9
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cell",
			options,
			id: create_fragment$7.name
		});
	}

	get use() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get align() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set align(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get order() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set order(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get span() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set span(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get spanDevices() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set spanDevices(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[9];
	}

	set getElement(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/demo/layout-grid/_Simple.svelte generated by Svelte v3.37.0 */
const file$6 = "src/routes/demo/layout-grid/_Simple.svelte";

function get_each_context$4(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[2] = i;
	return child_ctx;
}

// (3:4) <Cell>
function create_default_slot_1$6(ctx) {
	let div;
	let t0;
	let t1_value = /*i*/ ctx[2] + 1 + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("Cell ");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "Cell ");
			t1 = claim_text(div_nodes, t1_value);
			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$6, 3, 6, 63);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t0);
			append_dev(div, t1);
			insert_dev(target, t2, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$6.name,
		type: "slot",
		source: "(3:4) <Cell>",
		ctx
	});

	return block;
}

// (2:2) {#each Array(9) as _unused, i}
function create_each_block$4(ctx) {
	let cell;
	let current;

	cell = new Cell({
			props: {
				$$slots: { default: [create_default_slot_1$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell_changes = {};

			if (dirty & /*$$scope*/ 8) {
				cell_changes.$$scope = { dirty, ctx };
			}

			cell.$set(cell_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$4.name,
		type: "each",
		source: "(2:2) {#each Array(9) as _unused, i}",
		ctx
	});

	return block;
}

// (1:0) <LayoutGrid>
function create_default_slot$6(ctx) {
	let each_1_anchor;
	let current;
	let each_value = Array(9);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$4(get_each_context$4(ctx, each_value, i));
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
		id: create_default_slot$6.name,
		type: "slot",
		source: "(1:0) <LayoutGrid>",
		ctx
	});

	return block;
}

function create_fragment$6(ctx) {
	let layoutgrid;
	let current;

	layoutgrid = new LayoutGrid({
			props: {
				$$slots: { default: [create_default_slot$6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(layoutgrid.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(layoutgrid.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(layoutgrid, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const layoutgrid_changes = {};

			if (dirty & /*$$scope*/ 8) {
				layoutgrid_changes.$$scope = { dirty, ctx };
			}

			layoutgrid.$set(layoutgrid_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(layoutgrid.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(layoutgrid.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(layoutgrid, detaching);
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
	validate_slots("Simple", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Simple> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ LayoutGrid, Cell });
	return [];
}

class Simple extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Simple",
			options,
			id: create_fragment$6.name
		});
	}
}

/* src/routes/demo/layout-grid/_Span.svelte generated by Svelte v3.37.0 */
const file$5 = "src/routes/demo/layout-grid/_Span.svelte";

function get_each_context$3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[2] = i;
	return child_ctx;
}

function get_each_context_1$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[2] = i;
	return child_ctx;
}

function get_each_context_2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[2] = i;
	return child_ctx;
}

function get_each_context_3(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[2] = i;
	return child_ctx;
}

// (3:4) <Cell span={6}>
function create_default_slot_7(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Span 6");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Span 6");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$5, 3, 6, 73);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(3:4) <Cell span={6}>",
		ctx
	});

	return block;
}

// (2:2) {#each Array(2) as _unused, _i}
function create_each_block_3(ctx) {
	let cell;
	let current;

	cell = new Cell({
			props: {
				span: 6,
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell_changes = {};

			if (dirty & /*$$scope*/ 64) {
				cell_changes.$$scope = { dirty, ctx };
			}

			cell.$set(cell_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_3.name,
		type: "each",
		source: "(2:2) {#each Array(2) as _unused, _i}",
		ctx
	});

	return block;
}

// (8:4) <Cell span={3}>
function create_default_slot_6(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Span 3");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Span 3");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$5, 8, 6, 191);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(8:4) <Cell span={3}>",
		ctx
	});

	return block;
}

// (7:2) {#each Array(4) as _unused, _i}
function create_each_block_2(ctx) {
	let cell;
	let current;

	cell = new Cell({
			props: {
				span: 3,
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell_changes = {};

			if (dirty & /*$$scope*/ 64) {
				cell_changes.$$scope = { dirty, ctx };
			}

			cell.$set(cell_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_2.name,
		type: "each",
		source: "(7:2) {#each Array(4) as _unused, _i}",
		ctx
	});

	return block;
}

// (13:4) <Cell span={2}>
function create_default_slot_5(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Span 2");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Span 2");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$5, 13, 6, 309);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(13:4) <Cell span={2}>",
		ctx
	});

	return block;
}

// (12:2) {#each Array(6) as _unused, _i}
function create_each_block_1$1(ctx) {
	let cell;
	let current;

	cell = new Cell({
			props: {
				span: 2,
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell_changes = {};

			if (dirty & /*$$scope*/ 64) {
				cell_changes.$$scope = { dirty, ctx };
			}

			cell.$set(cell_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1$1.name,
		type: "each",
		source: "(12:2) {#each Array(6) as _unused, _i}",
		ctx
	});

	return block;
}

// (18:4) <Cell span={1}>
function create_default_slot_4$2(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Span 1");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Span 1");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$5, 18, 6, 428);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$2.name,
		type: "slot",
		source: "(18:4) <Cell span={1}>",
		ctx
	});

	return block;
}

// (17:2) {#each Array(12) as _unused, _i}
function create_each_block$3(ctx) {
	let cell;
	let current;

	cell = new Cell({
			props: {
				span: 1,
				$$slots: { default: [create_default_slot_4$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell_changes = {};

			if (dirty & /*$$scope*/ 64) {
				cell_changes.$$scope = { dirty, ctx };
			}

			cell.$set(cell_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$3.name,
		type: "each",
		source: "(17:2) {#each Array(12) as _unused, _i}",
		ctx
	});

	return block;
}

// (22:2) <Cell span={7}>
function create_default_slot_3$3(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Span 7");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Span 7");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$5, 22, 4, 508);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$3.name,
		type: "slot",
		source: "(22:2) <Cell span={7}>",
		ctx
	});

	return block;
}

// (25:2) <Cell span={5}>
function create_default_slot_2$3(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Span 5");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Span 5");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$5, 25, 4, 576);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$3.name,
		type: "slot",
		source: "(25:2) <Cell span={5}>",
		ctx
	});

	return block;
}

// (28:2) <Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }}>
function create_default_slot_1$5(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Span 6 on desktop, 4 on tablet, 2 on phone (always half)");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Span 6 on desktop, 4 on tablet, 2 on phone (always half)");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			set_style(div, "height", "80px");
			add_location(div, file$5, 28, 4, 685);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$5.name,
		type: "slot",
		source: "(28:2) <Cell spanDevices={{ desktop: 6, tablet: 4, phone: 2 }}>",
		ctx
	});

	return block;
}

// (1:0) <LayoutGrid>
function create_default_slot$5(ctx) {
	let t0;
	let t1;
	let t2;
	let t3;
	let cell0;
	let t4;
	let cell1;
	let t5;
	let cell2;
	let current;
	let each_value_3 = Array(2);
	validate_each_argument(each_value_3);
	let each_blocks_3 = [];

	for (let i = 0; i < each_value_3.length; i += 1) {
		each_blocks_3[i] = create_each_block_3(get_each_context_3(ctx, each_value_3, i));
	}

	let each_value_2 = Array(4);
	validate_each_argument(each_value_2);
	let each_blocks_2 = [];

	for (let i = 0; i < each_value_2.length; i += 1) {
		each_blocks_2[i] = create_each_block_2(get_each_context_2(ctx, each_value_2, i));
	}

	let each_value_1 = Array(6);
	validate_each_argument(each_value_1);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1$1(get_each_context_1$1(ctx, each_value_1, i));
	}

	let each_value = Array(12);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
	}

	cell0 = new Cell({
			props: {
				span: 7,
				$$slots: { default: [create_default_slot_3$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell1 = new Cell({
			props: {
				span: 5,
				$$slots: { default: [create_default_slot_2$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell2 = new Cell({
			props: {
				spanDevices: { desktop: 6, tablet: 4, phone: 2 },
				$$slots: { default: [create_default_slot_1$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].c();
			}

			t0 = space();

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].c();
			}

			t1 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			create_component(cell0.$$.fragment);
			t4 = space();
			create_component(cell1.$$.fragment);
			t5 = space();
			create_component(cell2.$$.fragment);
		},
		l: function claim(nodes) {
			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].l(nodes);
			}

			t0 = claim_space(nodes);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].l(nodes);
			}

			t1 = claim_space(nodes);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].l(nodes);
			}

			t2 = claim_space(nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(nodes);
			}

			t3 = claim_space(nodes);
			claim_component(cell0.$$.fragment, nodes);
			t4 = claim_space(nodes);
			claim_component(cell1.$$.fragment, nodes);
			t5 = claim_space(nodes);
			claim_component(cell2.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks_3.length; i += 1) {
				each_blocks_3[i].m(target, anchor);
			}

			insert_dev(target, t0, anchor);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				each_blocks_2[i].m(target, anchor);
			}

			insert_dev(target, t1, anchor);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(target, anchor);
			}

			insert_dev(target, t2, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert_dev(target, t3, anchor);
			mount_component(cell0, target, anchor);
			insert_dev(target, t4, anchor);
			mount_component(cell1, target, anchor);
			insert_dev(target, t5, anchor);
			mount_component(cell2, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell0_changes = {};

			if (dirty & /*$$scope*/ 64) {
				cell0_changes.$$scope = { dirty, ctx };
			}

			cell0.$set(cell0_changes);
			const cell1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				cell1_changes.$$scope = { dirty, ctx };
			}

			cell1.$set(cell1_changes);
			const cell2_changes = {};

			if (dirty & /*$$scope*/ 64) {
				cell2_changes.$$scope = { dirty, ctx };
			}

			cell2.$set(cell2_changes);
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value_3.length; i += 1) {
				transition_in(each_blocks_3[i]);
			}

			for (let i = 0; i < each_value_2.length; i += 1) {
				transition_in(each_blocks_2[i]);
			}

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks_1[i]);
			}

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			transition_in(cell0.$$.fragment, local);
			transition_in(cell1.$$.fragment, local);
			transition_in(cell2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			each_blocks_3 = each_blocks_3.filter(Boolean);

			for (let i = 0; i < each_blocks_3.length; i += 1) {
				transition_out(each_blocks_3[i]);
			}

			each_blocks_2 = each_blocks_2.filter(Boolean);

			for (let i = 0; i < each_blocks_2.length; i += 1) {
				transition_out(each_blocks_2[i]);
			}

			each_blocks_1 = each_blocks_1.filter(Boolean);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				transition_out(each_blocks_1[i]);
			}

			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			transition_out(cell0.$$.fragment, local);
			transition_out(cell1.$$.fragment, local);
			transition_out(cell2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks_3, detaching);
			if (detaching) detach_dev(t0);
			destroy_each(each_blocks_2, detaching);
			if (detaching) detach_dev(t1);
			destroy_each(each_blocks_1, detaching);
			if (detaching) detach_dev(t2);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t3);
			destroy_component(cell0, detaching);
			if (detaching) detach_dev(t4);
			destroy_component(cell1, detaching);
			if (detaching) detach_dev(t5);
			destroy_component(cell2, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$5.name,
		type: "slot",
		source: "(1:0) <LayoutGrid>",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let layoutgrid;
	let current;

	layoutgrid = new LayoutGrid({
			props: {
				$$slots: { default: [create_default_slot$5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(layoutgrid.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(layoutgrid.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(layoutgrid, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const layoutgrid_changes = {};

			if (dirty & /*$$scope*/ 64) {
				layoutgrid_changes.$$scope = { dirty, ctx };
			}

			layoutgrid.$set(layoutgrid_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(layoutgrid.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(layoutgrid.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(layoutgrid, detaching);
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
	validate_slots("Span", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Span> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ LayoutGrid, Cell });
	return [];
}

class Span extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Span",
			options,
			id: create_fragment$5.name
		});
	}
}

/* src/routes/demo/layout-grid/_Order.svelte generated by Svelte v3.37.0 */
const file$4 = "src/routes/demo/layout-grid/_Order.svelte";

function get_each_context$2(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[2] = i;
	return child_ctx;
}

// (3:4) <Cell order={10 - i}>
function create_default_slot_1$4(ctx) {
	let div;
	let t0;
	let t1_value = /*i*/ ctx[2] + 1 + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("Cell ");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "Cell ");
			t1 = claim_text(div_nodes, t1_value);
			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$4, 3, 6, 78);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t0);
			append_dev(div, t1);
			insert_dev(target, t2, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$4.name,
		type: "slot",
		source: "(3:4) <Cell order={10 - i}>",
		ctx
	});

	return block;
}

// (2:2) {#each Array(9) as _unused, i}
function create_each_block$2(ctx) {
	let cell;
	let current;

	cell = new Cell({
			props: {
				order: 10 - /*i*/ ctx[2],
				$$slots: { default: [create_default_slot_1$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell_changes = {};

			if (dirty & /*$$scope*/ 8) {
				cell_changes.$$scope = { dirty, ctx };
			}

			cell.$set(cell_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$2.name,
		type: "each",
		source: "(2:2) {#each Array(9) as _unused, i}",
		ctx
	});

	return block;
}

// (1:0) <LayoutGrid>
function create_default_slot$4(ctx) {
	let each_1_anchor;
	let current;
	let each_value = Array(9);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
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
		id: create_default_slot$4.name,
		type: "slot",
		source: "(1:0) <LayoutGrid>",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let layoutgrid;
	let current;

	layoutgrid = new LayoutGrid({
			props: {
				$$slots: { default: [create_default_slot$4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(layoutgrid.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(layoutgrid.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(layoutgrid, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const layoutgrid_changes = {};

			if (dirty & /*$$scope*/ 8) {
				layoutgrid_changes.$$scope = { dirty, ctx };
			}

			layoutgrid.$set(layoutgrid_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(layoutgrid.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(layoutgrid.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(layoutgrid, detaching);
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
	validate_slots("Order", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Order> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ LayoutGrid, Cell });
	return [];
}

class Order extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Order",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src/routes/demo/layout-grid/_FixedColumnWidth.svelte generated by Svelte v3.37.0 */
const file$3 = "src/routes/demo/layout-grid/_FixedColumnWidth.svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[2] = i;
	return child_ctx;
}

// (3:4) <Cell>
function create_default_slot_1$3(ctx) {
	let div;
	let t0;
	let t1_value = /*i*/ ctx[2] + 1 + "";
	let t1;
	let t2;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("Cell ");
			t1 = text(t1_value);
			t2 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "Cell ");
			t1 = claim_text(div_nodes, t1_value);
			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$3, 3, 6, 80);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t0);
			append_dev(div, t1);
			insert_dev(target, t2, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$3.name,
		type: "slot",
		source: "(3:4) <Cell>",
		ctx
	});

	return block;
}

// (2:2) {#each Array(9) as _unused, i}
function create_each_block$1(ctx) {
	let cell;
	let current;

	cell = new Cell({
			props: {
				$$slots: { default: [create_default_slot_1$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell_changes = {};

			if (dirty & /*$$scope*/ 8) {
				cell_changes.$$scope = { dirty, ctx };
			}

			cell.$set(cell_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block$1.name,
		type: "each",
		source: "(2:2) {#each Array(9) as _unused, i}",
		ctx
	});

	return block;
}

// (1:0) <LayoutGrid fixedColumnWidth>
function create_default_slot$3(ctx) {
	let each_1_anchor;
	let current;
	let each_value = Array(9);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
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
		id: create_default_slot$3.name,
		type: "slot",
		source: "(1:0) <LayoutGrid fixedColumnWidth>",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let layoutgrid;
	let current;

	layoutgrid = new LayoutGrid({
			props: {
				fixedColumnWidth: true,
				$$slots: { default: [create_default_slot$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(layoutgrid.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(layoutgrid.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(layoutgrid, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const layoutgrid_changes = {};

			if (dirty & /*$$scope*/ 8) {
				layoutgrid_changes.$$scope = { dirty, ctx };
			}

			layoutgrid.$set(layoutgrid_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(layoutgrid.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(layoutgrid.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(layoutgrid, detaching);
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
	validate_slots("FixedColumnWidth", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<FixedColumnWidth> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ LayoutGrid, Cell });
	return [];
}

class FixedColumnWidth extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "FixedColumnWidth",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/layout-grid/_Align.svelte generated by Svelte v3.37.0 */
const file$2 = "src/routes/demo/layout-grid/_Align.svelte";

// (6:2) <Cell span={1}>
function create_default_slot_4$1(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Tall Cell");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, style: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Tall Cell");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			set_style(div, "height", "120px");
			add_location(div, file$2, 6, 4, 133);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4$1.name,
		type: "slot",
		source: "(6:2) <Cell span={1}>",
		ctx
	});

	return block;
}

// (9:2) <Cell align="top" span={1}>
function create_default_slot_3$2(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Align Top");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Align Top");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$2, 9, 4, 239);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$2.name,
		type: "slot",
		source: "(9:2) <Cell align=\\\"top\\\" span={1}>",
		ctx
	});

	return block;
}

// (12:2) <Cell align="middle" span={1}>
function create_default_slot_2$2(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Align Middle");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Align Middle");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$2, 12, 4, 325);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2$2.name,
		type: "slot",
		source: "(12:2) <Cell align=\\\"middle\\\" span={1}>",
		ctx
	});

	return block;
}

// (15:2) <Cell align="bottom" span={1}>
function create_default_slot_1$2(ctx) {
	let div;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			t = text("Align Bottom");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t = claim_text(div_nodes, "Align Bottom");
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$2, 15, 4, 414);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$2.name,
		type: "slot",
		source: "(15:2) <Cell align=\\\"bottom\\\" span={1}>",
		ctx
	});

	return block;
}

// (1:0) <LayoutGrid   align="right"   fixedColumnWidth   style="border: 1px solid var(--mdc-theme-secondary, #333);" >
function create_default_slot$2(ctx) {
	let cell0;
	let t0;
	let cell1;
	let t1;
	let cell2;
	let t2;
	let cell3;
	let current;

	cell0 = new Cell({
			props: {
				span: 1,
				$$slots: { default: [create_default_slot_4$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell1 = new Cell({
			props: {
				align: "top",
				span: 1,
				$$slots: { default: [create_default_slot_3$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell2 = new Cell({
			props: {
				align: "middle",
				span: 1,
				$$slots: { default: [create_default_slot_2$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell3 = new Cell({
			props: {
				align: "bottom",
				span: 1,
				$$slots: { default: [create_default_slot_1$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell0.$$.fragment);
			t0 = space();
			create_component(cell1.$$.fragment);
			t1 = space();
			create_component(cell2.$$.fragment);
			t2 = space();
			create_component(cell3.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(cell1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(cell2.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(cell3.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(cell1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(cell2, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(cell3, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell0_changes = {};

			if (dirty & /*$$scope*/ 1) {
				cell0_changes.$$scope = { dirty, ctx };
			}

			cell0.$set(cell0_changes);
			const cell1_changes = {};

			if (dirty & /*$$scope*/ 1) {
				cell1_changes.$$scope = { dirty, ctx };
			}

			cell1.$set(cell1_changes);
			const cell2_changes = {};

			if (dirty & /*$$scope*/ 1) {
				cell2_changes.$$scope = { dirty, ctx };
			}

			cell2.$set(cell2_changes);
			const cell3_changes = {};

			if (dirty & /*$$scope*/ 1) {
				cell3_changes.$$scope = { dirty, ctx };
			}

			cell3.$set(cell3_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell0.$$.fragment, local);
			transition_in(cell1.$$.fragment, local);
			transition_in(cell2.$$.fragment, local);
			transition_in(cell3.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell0.$$.fragment, local);
			transition_out(cell1.$$.fragment, local);
			transition_out(cell2.$$.fragment, local);
			transition_out(cell3.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell0, detaching);
			if (detaching) detach_dev(t0);
			destroy_component(cell1, detaching);
			if (detaching) detach_dev(t1);
			destroy_component(cell2, detaching);
			if (detaching) detach_dev(t2);
			destroy_component(cell3, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$2.name,
		type: "slot",
		source: "(1:0) <LayoutGrid   align=\\\"right\\\"   fixedColumnWidth   style=\\\"border: 1px solid var(--mdc-theme-secondary, #333);\\\" >",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let layoutgrid;
	let current;

	layoutgrid = new LayoutGrid({
			props: {
				align: "right",
				fixedColumnWidth: true,
				style: "border: 1px solid var(--mdc-theme-secondary, #333);",
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(layoutgrid.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(layoutgrid.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(layoutgrid, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const layoutgrid_changes = {};

			if (dirty & /*$$scope*/ 1) {
				layoutgrid_changes.$$scope = { dirty, ctx };
			}

			layoutgrid.$set(layoutgrid_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(layoutgrid.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(layoutgrid.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(layoutgrid, detaching);
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
	validate_slots("Align", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Align> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ LayoutGrid, Cell });
	return [];
}

class Align extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Align",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/layout-grid/_Nested.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/layout-grid/_Nested.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[2] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[0] = list[i];
	child_ctx[4] = i;
	return child_ctx;
}

// (6:10) <Cell>
function create_default_slot_3$1(ctx) {
	let div;
	let t0;
	let t1_value = /*i*/ ctx[2] + 1 + "";
	let t1;
	let t2;
	let t3_value = /*j*/ ctx[4] + 1 + "";
	let t3;
	let t4;

	const block = {
		c: function create() {
			div = element("div");
			t0 = text("Cell ");
			t1 = text(t1_value);
			t2 = text(", ");
			t3 = text(t3_value);
			t4 = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			t0 = claim_text(div_nodes, "Cell ");
			t1 = claim_text(div_nodes, t1_value);
			t2 = claim_text(div_nodes, ", ");
			t3 = claim_text(div_nodes, t3_value);
			div_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "demo-cell svelte-6cujt");
			add_location(div, file$1, 6, 12, 143);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, t0);
			append_dev(div, t1);
			append_dev(div, t2);
			append_dev(div, t3);
			insert_dev(target, t4, anchor);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(6:10) <Cell>",
		ctx
	});

	return block;
}

// (5:8) {#each Array(3) as _unused, j}
function create_each_block_1(ctx) {
	let cell;
	let current;

	cell = new Cell({
			props: {
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell_changes = {};

			if (dirty & /*$$scope*/ 32) {
				cell_changes.$$scope = { dirty, ctx };
			}

			cell.$set(cell_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block_1.name,
		type: "each",
		source: "(5:8) {#each Array(3) as _unused, j}",
		ctx
	});

	return block;
}

// (4:6) <InnerGrid>
function create_default_slot_2$1(ctx) {
	let each_1_anchor;
	let current;
	let each_value_1 = Array(3);
	validate_each_argument(each_value_1);
	let each_blocks = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
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

			for (let i = 0; i < each_value_1.length; i += 1) {
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
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(4:6) <InnerGrid>",
		ctx
	});

	return block;
}

// (3:4) <Cell>
function create_default_slot_1$1(ctx) {
	let innergrid;
	let t;
	let current;

	innergrid = new InnerGrid({
			props: {
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(innergrid.$$.fragment);
			t = space();
		},
		l: function claim(nodes) {
			claim_component(innergrid.$$.fragment, nodes);
			t = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(innergrid, target, anchor);
			insert_dev(target, t, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const innergrid_changes = {};

			if (dirty & /*$$scope*/ 32) {
				innergrid_changes.$$scope = { dirty, ctx };
			}

			innergrid.$set(innergrid_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(innergrid.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(innergrid.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(innergrid, detaching);
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$1.name,
		type: "slot",
		source: "(3:4) <Cell>",
		ctx
	});

	return block;
}

// (2:2) {#each Array(9) as _unused, i}
function create_each_block(ctx) {
	let cell;
	let current;

	cell = new Cell({
			props: {
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(cell.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(cell.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell_changes = {};

			if (dirty & /*$$scope*/ 32) {
				cell_changes.$$scope = { dirty, ctx };
			}

			cell.$set(cell_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(cell.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(cell.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(cell, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(2:2) {#each Array(9) as _unused, i}",
		ctx
	});

	return block;
}

// (1:0) <LayoutGrid>
function create_default_slot$1(ctx) {
	let each_1_anchor;
	let current;
	let each_value = Array(9);
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
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
			if (dirty & /*Array*/ 0) {
				each_value = Array(9);
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
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
		id: create_default_slot$1.name,
		type: "slot",
		source: "(1:0) <LayoutGrid>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let layoutgrid;
	let current;

	layoutgrid = new LayoutGrid({
			props: {
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(layoutgrid.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(layoutgrid.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(layoutgrid, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const layoutgrid_changes = {};

			if (dirty & /*$$scope*/ 32) {
				layoutgrid_changes.$$scope = { dirty, ctx };
			}

			layoutgrid.$set(layoutgrid_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(layoutgrid.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(layoutgrid.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(layoutgrid, detaching);
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
	validate_slots("Nested", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Nested> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ LayoutGrid, Cell, InnerGrid });
	return [];
}

class Nested extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Nested",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/layout-grid/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/layout-grid/index.svelte";

// (13:2) <Demo component={Span} file="layout-grid/_Span.svelte">
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Span");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Span");
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
		source: "(13:2) <Demo component={Span} file=\\\"layout-grid/_Span.svelte\\\">",
		ctx
	});

	return block;
}

// (15:2) <Demo component={Order} file="layout-grid/_Order.svelte">
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Order");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Order");
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
		source: "(15:2) <Demo component={Order} file=\\\"layout-grid/_Order.svelte\\\">",
		ctx
	});

	return block;
}

// (17:2) <Demo     component={FixedColumnWidth}     file="layout-grid/_FixedColumnWidth.svelte"   >
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Fixed Column Width");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Fixed Column Width");
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
		source: "(17:2) <Demo     component={FixedColumnWidth}     file=\\\"layout-grid/_FixedColumnWidth.svelte\\\"   >",
		ctx
	});

	return block;
}

// (24:2) <Demo component={Align} file="layout-grid/_Align.svelte">
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Align");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Align");
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
		source: "(24:2) <Demo component={Align} file=\\\"layout-grid/_Align.svelte\\\">",
		ctx
	});

	return block;
}

// (26:2) <Demo component={Nested} file="layout-grid/_Nested.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Nested");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Nested");
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
		source: "(26:2) <Demo component={Nested} file=\\\"layout-grid/_Nested.svelte\\\">",
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
	let p;
	let t3;
	let t4;
	let pre;
	let t5;
	let t6;
	let demo0;
	let t7;
	let demo1;
	let t8;
	let demo2;
	let t9;
	let demo3;
	let t10;
	let demo4;
	let t11;
	let demo5;
	let current;

	demo0 = new Demo({
			props: {
				component: Simple,
				file: "layout-grid/_Simple.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: Span,
				file: "layout-grid/_Span.svelte",
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: Order,
				file: "layout-grid/_Order.svelte",
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: FixedColumnWidth,
				file: "layout-grid/_FixedColumnWidth.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo4 = new Demo({
			props: {
				component: Align,
				file: "layout-grid/_Align.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo5 = new Demo({
			props: {
				component: Nested,
				file: "layout-grid/_Nested.svelte",
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
			t1 = text("Layout Grid");
			t2 = space();
			p = element("p");
			t3 = text("Try resizing your window to see the cells adapt to the new size.");
			t4 = space();
			pre = element("pre");
			t5 = text("npm i -D @smui/layout-grid");
			t6 = space();
			create_component(demo0.$$.fragment);
			t7 = space();
			create_component(demo1.$$.fragment);
			t8 = space();
			create_component(demo2.$$.fragment);
			t9 = space();
			create_component(demo3.$$.fragment);
			t10 = space();
			create_component(demo4.$$.fragment);
			t11 = space();
			create_component(demo5.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-y1omqq\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Layout Grid");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "Try resizing your window to see the cells adapt to the new size.");
			p_nodes.forEach(detach_dev);
			t4 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t5 = claim_text(pre_nodes, "npm i -D @smui/layout-grid");
			pre_nodes.forEach(detach_dev);
			t6 = claim_space(section_nodes);
			claim_component(demo0.$$.fragment, section_nodes);
			t7 = claim_space(section_nodes);
			claim_component(demo1.$$.fragment, section_nodes);
			t8 = claim_space(section_nodes);
			claim_component(demo2.$$.fragment, section_nodes);
			t9 = claim_space(section_nodes);
			claim_component(demo3.$$.fragment, section_nodes);
			t10 = claim_space(section_nodes);
			claim_component(demo4.$$.fragment, section_nodes);
			t11 = claim_space(section_nodes);
			claim_component(demo5.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Layout Grid - SMUI";
			add_location(h2, file, 5, 2, 78);
			add_location(p, file, 6, 2, 101);
			attr_dev(pre, "class", "demo-spaced");
			add_location(pre, file, 8, 2, 176);
			add_location(section, file, 4, 0, 66);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t1);
			append_dev(section, t2);
			append_dev(section, p);
			append_dev(p, t3);
			append_dev(section, t4);
			append_dev(section, pre);
			append_dev(pre, t5);
			append_dev(section, t6);
			mount_component(demo0, section, null);
			append_dev(section, t7);
			mount_component(demo1, section, null);
			append_dev(section, t8);
			mount_component(demo2, section, null);
			append_dev(section, t9);
			mount_component(demo3, section, null);
			append_dev(section, t10);
			mount_component(demo4, section, null);
			append_dev(section, t11);
			mount_component(demo5, section, null);
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
		},
		i: function intro(local) {
			if (current) return;
			transition_in(demo0.$$.fragment, local);
			transition_in(demo1.$$.fragment, local);
			transition_in(demo2.$$.fragment, local);
			transition_in(demo3.$$.fragment, local);
			transition_in(demo4.$$.fragment, local);
			transition_in(demo5.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(demo0.$$.fragment, local);
			transition_out(demo1.$$.fragment, local);
			transition_out(demo2.$$.fragment, local);
			transition_out(demo3.$$.fragment, local);
			transition_out(demo4.$$.fragment, local);
			transition_out(demo5.$$.fragment, local);
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
	validate_slots("Layout_grid", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Layout_grid> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Simple,
		Span,
		Order,
		FixedColumnWidth,
		Align,
		Nested
	});

	return [];
}

class Layout_grid extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Layout_grid",
			options,
			id: create_fragment.name
		});
	}
}

export default Layout_grid;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjEwZDRjNmMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhY2thZ2VzL2xheW91dC1ncmlkL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vZm9yd2FyZEV2ZW50c0J1aWxkZXIuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9sYXlvdXQtZ3JpZC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzTWFwLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbGF5b3V0LWdyaWQvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9leGNsdWRlLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvbGF5b3V0LWdyaWQvbm9kZV9tb2R1bGVzL0BzbXVpL2NvbW1vbi9wcmVmaXhGaWx0ZXIuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9sYXlvdXQtZ3JpZC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9sYXlvdXQtZ3JpZC9Jbm5lckdyaWQuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvbGF5b3V0LWdyaWQvTGF5b3V0R3JpZC5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9sYXlvdXQtZ3JpZC9DZWxsLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9sYXlvdXQtZ3JpZC9fU2ltcGxlLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9sYXlvdXQtZ3JpZC9fU3Bhbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vbGF5b3V0LWdyaWQvX09yZGVyLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9sYXlvdXQtZ3JpZC9fRml4ZWRDb2x1bW5XaWR0aC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vbGF5b3V0LWdyaWQvX0FsaWduLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9sYXlvdXQtZ3JpZC9fTmVzdGVkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9sYXlvdXQtZ3JpZC9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYnViYmxlLFxuICBsaXN0ZW4sXG4gIHByZXZlbnRfZGVmYXVsdCxcbiAgc3RvcF9wcm9wYWdhdGlvbixcbn0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIERPTSBldmVudHMuXG5jb25zdCBvbGRNb2RpZmllclJlZ2V4ID0gL15bYS16XSsoPzo6KD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIG90aGVyIGV2ZW50cy5cbmNvbnN0IG5ld01vZGlmaWVyUmVnZXggPSAvXlteJF0rKD86XFwkKD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY29tcG9uZW50KSB7XG4gIC8vIFRoaXMgaXMgb3VyIHBzZXVkbyAkb24gZnVuY3Rpb24uIEl0IGlzIGRlZmluZWQgb24gY29tcG9uZW50IG1vdW50LlxuICBsZXQgJG9uO1xuICAvLyBUaGlzIGlzIGEgbGlzdCBvZiBldmVudHMgYm91bmQgYmVmb3JlIG1vdW50LlxuICBsZXQgZXZlbnRzID0gW107XG4gIC8vIFRoaXMgaXMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCAkb24gZnVuY3Rpb24uXG4gIGNvbnN0IGNvbXBvbmVudE9uID0gY29tcG9uZW50LiRvbjtcblxuICAvLyBBbmQgd2Ugb3ZlcnJpZGUgdGhlICRvbiBmdW5jdGlvbiB0byBmb3J3YXJkIGFsbCBib3VuZCBldmVudHMuXG4gIGNvbXBvbmVudC4kb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICBsZXQgZGVzdHJ1Y3RvciA9ICgpID0+IHt9O1xuICAgIGlmICgkb24pIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgIGRlc3RydWN0b3IgPSAkb24oZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgYmVmb3JlIG1vdW50IGJ5IFN2ZWx0ZS5cbiAgICAgIGV2ZW50cy5wdXNoKFtldmVudFR5cGUsIGNhbGxiYWNrXSk7XG4gICAgfVxuICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuXG4gICAgaWYgKG9sZE1vZGlmaWVyTWF0Y2ggJiYgY29uc29sZSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnRXZlbnQgbW9kaWZpZXJzIGluIFNNVUkgbm93IHVzZSBcIiRcIiBpbnN0ZWFkIG9mIFwiOlwiLCBzbyB0aGF0IGFsbCBldmVudHMgY2FuIGJlIGJvdW5kIHdpdGggbW9kaWZpZXJzLiBQbGVhc2UgdXBkYXRlIHlvdXIgZXZlbnQgYmluZGluZzogJyxcbiAgICAgICAgZXZlbnRUeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAvLyBSZW1vdmUgbW9kaWZpZXJzIGZyb20gdGhlIHJlYWwgZXZlbnQuXG4gICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICRvbiBmdW5jdGlvbi5cbiAgICBjb25zdCBjb21wb25lbnREZXN0cnVjdG9yID0gY29tcG9uZW50T24uY2FsbChcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGV2ZW50VHlwZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgZGVzdHJ1Y3RvcigpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudERlc3RydWN0b3IoLi4uYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGUpIHtcbiAgICAvLyBJbnRlcm5hbGx5IGJ1YmJsZSB0aGUgZXZlbnQgdXAgZnJvbSBTdmVsdGUgY29tcG9uZW50cy5cbiAgICBidWJibGUoY29tcG9uZW50LCBlKTtcbiAgfVxuXG4gIHJldHVybiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlc3RydWN0b3JzID0gW107XG4gICAgY29uc3QgZm9yd2FyZERlc3RydWN0b3JzID0ge307XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciBmb3J3YXJkaW5nIGFsbCBib3VuZCBldmVudHMuXG4gICAgJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICAgIGxldCBoYW5kbGVyID0gY2FsbGJhY2s7XG4gICAgICAvLyBET00gYWRkRXZlbnRMaXN0ZW5lciBvcHRpb25zIGFyZ3VtZW50LlxuICAgICAgbGV0IG9wdGlvbnMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcbiAgICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBldmVudCBtb2RpZmllcnMuXG4gICAgICAgIC8vIFN1cHBvcnRlZCBtb2RpZmllcnM6XG4gICAgICAgIC8vIC0gcHJldmVudERlZmF1bHRcbiAgICAgICAgLy8gLSBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgLy8gLSBwYXNzaXZlXG4gICAgICAgIC8vIC0gbm9ucGFzc2l2ZVxuICAgICAgICAvLyAtIGNhcHR1cmVcbiAgICAgICAgLy8gLSBvbmNlXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhwYXJ0cy5zbGljZSgxKS5tYXAoKG1vZCkgPT4gW21vZCwgdHJ1ZV0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9ucGFzc2l2ZSkge1xuICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLm5vbnBhc3NpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBoYW5kbGVyID0gcHJldmVudF9kZWZhdWx0KGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wX3Byb3BhZ2F0aW9uKGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBldmVudCBkaXJlY3RseSwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICAgIGNvbnN0IG9mZiA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGVzdHJ1Y3RvciA9ICgpID0+IHtcbiAgICAgICAgb2ZmKCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRlc3RydWN0b3JzLmluZGV4T2YoZGVzdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGRlc3RydWN0b3JzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkZXN0cnVjdG9ycy5wdXNoKGRlc3RydWN0b3IpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBldmVudCBmcm9tIFN2ZWx0ZS5cbiAgICAgIGlmICghZXZlbnRUeXBlIGluIGZvcndhcmREZXN0cnVjdG9ycykge1xuICAgICAgICBmb3J3YXJkRGVzdHJ1Y3RvcnNbZXZlbnRUeXBlXSA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGZvcndhcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzdHJ1Y3RvcjtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpc3RlbiB0byBhbGwgdGhlIGV2ZW50cyBhZGRlZCBiZWZvcmUgbW91bnQuXG4gICAgICAkb24oZXZlbnRzW2ldWzBdLCBldmVudHNbaV1bMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RydWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnNbaV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgZm9yd2FyZGVycy5cbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoZm9yd2FyZERlc3RydWN0b3JzKSkge1xuICAgICAgICAgIGVudHJ5WzFdKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGFzc01hcChjbGFzc09iaikge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmopXG4gICAgLmZpbHRlcigoW25hbWUsIHZhbHVlXSkgPT4gbmFtZSAhPT0gJycgJiYgdmFsdWUpXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKVxuICAgIC5qb2luKCcgJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZXhjbHVkZShvYmosIGtleXMpIHtcbiAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgY29uc3QgbmV3T2JqID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWUgPSBuYW1lc1tpXTtcbiAgICBjb25zdCBjYXNoSW5kZXggPSBuYW1lLmluZGV4T2YoJyQnKTtcbiAgICBpZiAoXG4gICAgICBjYXNoSW5kZXggIT09IC0xICYmXG4gICAgICBrZXlzLmluZGV4T2YobmFtZS5zdWJzdHJpbmcoMCwgY2FzaEluZGV4ICsgMSkpICE9PSAtMVxuICAgICkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChrZXlzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgbmV3T2JqW25hbWVdID0gb2JqW25hbWVdO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwcmVmaXhGaWx0ZXIob2JqLCBwcmVmaXgpIHtcbiAgbGV0IG5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKTtcbiAgY29uc3QgbmV3T2JqID0ge307XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG5hbWUgPSBuYW1lc1tpXTtcbiAgICBpZiAobmFtZS5zdWJzdHJpbmcoMCwgcHJlZml4Lmxlbmd0aCkgPT09IHByZWZpeCkge1xuICAgICAgbmV3T2JqW25hbWUuc3Vic3RyaW5nKHByZWZpeC5sZW5ndGgpXSA9IG9ialtuYW1lXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbnMobm9kZSwgYWN0aW9ucykge1xuICBsZXQgb2JqZWN0cyA9IFtdO1xuXG4gIGlmIChhY3Rpb25zKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGlzQXJyYXkgPyBhY3Rpb25zW2ldWzBdIDogYWN0aW9uc1tpXTtcbiAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUsIGFjdGlvbnNbaV1bMV0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXBkYXRlKGFjdGlvbnMpIHtcbiAgICAgIGlmICgoKGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGgpIHx8IDApICE9IG9iamVjdHMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgbm90IGNoYW5nZSB0aGUgbGVuZ3RoIG9mIGFuIGFjdGlvbnMgYXJyYXkuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhY3Rpb25zKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmIChvYmplY3RzW2ldICYmICd1cGRhdGUnIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKGFjdGlvbnNbaV1bMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAnZGVzdHJveScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgIG9iamVjdHNbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbiIsIjxkaXZcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgICdtZGMtbGF5b3V0LWdyaWRfX2lubmVyJzogdHJ1ZSxcbiAgfSl9XG4+XG4gIDxzbG90IC8+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICB1c2VBY3Rpb25zLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuXG4gIGxldCBlbGVtZW50O1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsIjxkaXZcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgICdtZGMtbGF5b3V0LWdyaWQnOiB0cnVlLFxuICAgICdtZGMtbGF5b3V0LWdyaWQtLWZpeGVkLWNvbHVtbi13aWR0aCc6IGZpeGVkQ29sdW1uV2lkdGgsXG4gICAgWydtZGMtbGF5b3V0LWdyaWQtLWFsaWduLScgKyBhbGlnbl06IGFsaWduICE9IG51bGwsXG4gIH0pfVxuICB7Li4uZXhjbHVkZSgkJHJlc3RQcm9wcywgWydpbm5lckdyaWQkJ10pfVxuPlxuICA8SW5uZXJHcmlkIHsuLi5wcmVmaXhGaWx0ZXIoJCRyZXN0UHJvcHMsICdpbm5lckdyaWQkJyl9PlxuICAgIDxzbG90IC8+XG4gIDwvSW5uZXJHcmlkPlxuPC9kaXY+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgZXhjbHVkZSxcbiAgICBwcmVmaXhGaWx0ZXIsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuICBpbXBvcnQgSW5uZXJHcmlkIGZyb20gJy4vSW5uZXJHcmlkLnN2ZWx0ZSc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IGZpeGVkQ29sdW1uV2lkdGggPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBhbGlnbiA9IG51bGw7XG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1sYXlvdXQtZ3JpZF9fY2VsbCc6IHRydWUsXG4gICAgWydtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLWFsaWduLScgKyBhbGlnbl06IGFsaWduICE9IG51bGwsXG4gICAgWydtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLW9yZGVyLScgKyBvcmRlcl06IG9yZGVyICE9IG51bGwsXG4gICAgWydtZGMtbGF5b3V0LWdyaWRfX2NlbGwtLXNwYW4tJyArIHNwYW5dOiBzcGFuICE9IG51bGwsXG4gICAgLi4uT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgT2JqZWN0LmVudHJpZXMoc3BhbkRldmljZXMpLm1hcCgoW2RldmljZSwgc3Bhbl0pID0+IFtcbiAgICAgICAgYG1kYy1sYXlvdXQtZ3JpZF9fY2VsbC0tc3Bhbi0ke3NwYW59LSR7ZGV2aWNlfWAsXG4gICAgICAgIHRydWUsXG4gICAgICBdKVxuICAgICksXG4gIH0pfVxuICB7Li4uJCRyZXN0UHJvcHN9XG4+XG4gIDxzbG90IC8+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHtcbiAgICBmb3J3YXJkRXZlbnRzQnVpbGRlcixcbiAgICBjbGFzc01hcCxcbiAgICB1c2VBY3Rpb25zLFxuICB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuICBsZXQgY2xhc3NOYW1lID0gJyc7XG4gIGV4cG9ydCB7IGNsYXNzTmFtZSBhcyBjbGFzcyB9O1xuICBleHBvcnQgbGV0IGFsaWduID0gbnVsbDtcbiAgZXhwb3J0IGxldCBvcmRlciA9IG51bGw7XG4gIGV4cG9ydCBsZXQgc3BhbiA9IG51bGw7XG4gIGV4cG9ydCBsZXQgc3BhbkRldmljZXMgPSB7fTtcblxuICBsZXQgZWxlbWVudDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8TGF5b3V0R3JpZD5cbiAgeyNlYWNoIEFycmF5KDkpIGFzIF91bnVzZWQsIGl9XG4gICAgPENlbGw+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jZWxsXCI+Q2VsbCB7aSArIDF9PC9kaXY+XG4gICAgPC9DZWxsPlxuICB7L2VhY2h9XG48L0xheW91dEdyaWQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBMYXlvdXRHcmlkLCB7IENlbGwgfSBmcm9tICdAc211aS9sYXlvdXQtZ3JpZCc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuZGVtby1jZWxsIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMzMzMpO1xuICAgIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5LCAjZmZmKTtcbiAgfVxuPC9zdHlsZT5cbiIsIjxMYXlvdXRHcmlkPlxuICB7I2VhY2ggQXJyYXkoMikgYXMgX3VudXNlZCwgX2l9XG4gICAgPENlbGwgc3Bhbj17Nn0+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jZWxsXCI+U3BhbiA2PC9kaXY+XG4gICAgPC9DZWxsPlxuICB7L2VhY2h9XG4gIHsjZWFjaCBBcnJheSg0KSBhcyBfdW51c2VkLCBfaX1cbiAgICA8Q2VsbCBzcGFuPXszfT5cbiAgICAgIDxkaXYgY2xhc3M9XCJkZW1vLWNlbGxcIj5TcGFuIDM8L2Rpdj5cbiAgICA8L0NlbGw+XG4gIHsvZWFjaH1cbiAgeyNlYWNoIEFycmF5KDYpIGFzIF91bnVzZWQsIF9pfVxuICAgIDxDZWxsIHNwYW49ezJ9PlxuICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2VsbFwiPlNwYW4gMjwvZGl2PlxuICAgIDwvQ2VsbD5cbiAgey9lYWNofVxuICB7I2VhY2ggQXJyYXkoMTIpIGFzIF91bnVzZWQsIF9pfVxuICAgIDxDZWxsIHNwYW49ezF9PlxuICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2VsbFwiPlNwYW4gMTwvZGl2PlxuICAgIDwvQ2VsbD5cbiAgey9lYWNofVxuICA8Q2VsbCBzcGFuPXs3fT5cbiAgICA8ZGl2IGNsYXNzPVwiZGVtby1jZWxsXCI+U3BhbiA3PC9kaXY+XG4gIDwvQ2VsbD5cbiAgPENlbGwgc3Bhbj17NX0+XG4gICAgPGRpdiBjbGFzcz1cImRlbW8tY2VsbFwiPlNwYW4gNTwvZGl2PlxuICA8L0NlbGw+XG4gIDxDZWxsIHNwYW5EZXZpY2VzPXt7IGRlc2t0b3A6IDYsIHRhYmxldDogNCwgcGhvbmU6IDIgfX0+XG4gICAgPGRpdiBjbGFzcz1cImRlbW8tY2VsbFwiIHN0eWxlPVwiaGVpZ2h0OiA4MHB4O1wiPlxuICAgICAgU3BhbiA2IG9uIGRlc2t0b3AsIDQgb24gdGFibGV0LCAyIG9uIHBob25lIChhbHdheXMgaGFsZilcbiAgICA8L2Rpdj5cbiAgPC9DZWxsPlxuPC9MYXlvdXRHcmlkPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgTGF5b3V0R3JpZCwgeyBDZWxsIH0gZnJvbSAnQHNtdWkvbGF5b3V0LWdyaWQnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmRlbW8tY2VsbCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMzMzKTtcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXNlY29uZGFyeSwgI2ZmZik7XG4gIH1cbjwvc3R5bGU+XG4iLCI8TGF5b3V0R3JpZD5cbiAgeyNlYWNoIEFycmF5KDkpIGFzIF91bnVzZWQsIGl9XG4gICAgPENlbGwgb3JkZXI9ezEwIC0gaX0+XG4gICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jZWxsXCI+Q2VsbCB7aSArIDF9PC9kaXY+XG4gICAgPC9DZWxsPlxuICB7L2VhY2h9XG48L0xheW91dEdyaWQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBMYXlvdXRHcmlkLCB7IENlbGwgfSBmcm9tICdAc211aS9sYXlvdXQtZ3JpZCc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuZGVtby1jZWxsIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMzMzMpO1xuICAgIGNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtb24tc2Vjb25kYXJ5LCAjZmZmKTtcbiAgfVxuPC9zdHlsZT5cbiIsIjxMYXlvdXRHcmlkIGZpeGVkQ29sdW1uV2lkdGg+XG4gIHsjZWFjaCBBcnJheSg5KSBhcyBfdW51c2VkLCBpfVxuICAgIDxDZWxsPlxuICAgICAgPGRpdiBjbGFzcz1cImRlbW8tY2VsbFwiPkNlbGwge2kgKyAxfTwvZGl2PlxuICAgIDwvQ2VsbD5cbiAgey9lYWNofVxuPC9MYXlvdXRHcmlkPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgTGF5b3V0R3JpZCwgeyBDZWxsIH0gZnJvbSAnQHNtdWkvbGF5b3V0LWdyaWQnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmRlbW8tY2VsbCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMzMzKTtcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXNlY29uZGFyeSwgI2ZmZik7XG4gIH1cbjwvc3R5bGU+XG4iLCI8TGF5b3V0R3JpZFxuICBhbGlnbj1cInJpZ2h0XCJcbiAgZml4ZWRDb2x1bW5XaWR0aFxuICBzdHlsZT1cImJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1kYy10aGVtZS1zZWNvbmRhcnksICMzMzMpO1wiXG4+XG4gIDxDZWxsIHNwYW49ezF9PlxuICAgIDxkaXYgY2xhc3M9XCJkZW1vLWNlbGxcIiBzdHlsZT1cImhlaWdodDogMTIwcHg7XCI+VGFsbCBDZWxsPC9kaXY+XG4gIDwvQ2VsbD5cbiAgPENlbGwgYWxpZ249XCJ0b3BcIiBzcGFuPXsxfT5cbiAgICA8ZGl2IGNsYXNzPVwiZGVtby1jZWxsXCI+QWxpZ24gVG9wPC9kaXY+XG4gIDwvQ2VsbD5cbiAgPENlbGwgYWxpZ249XCJtaWRkbGVcIiBzcGFuPXsxfT5cbiAgICA8ZGl2IGNsYXNzPVwiZGVtby1jZWxsXCI+QWxpZ24gTWlkZGxlPC9kaXY+XG4gIDwvQ2VsbD5cbiAgPENlbGwgYWxpZ249XCJib3R0b21cIiBzcGFuPXsxfT5cbiAgICA8ZGl2IGNsYXNzPVwiZGVtby1jZWxsXCI+QWxpZ24gQm90dG9tPC9kaXY+XG4gIDwvQ2VsbD5cbjwvTGF5b3V0R3JpZD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IExheW91dEdyaWQsIHsgQ2VsbCB9IGZyb20gJ0BzbXVpL2xheW91dC1ncmlkJztcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5kZW1vLWNlbGwge1xuICAgIGhlaWdodDogNjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWRjLXRoZW1lLXNlY29uZGFyeSwgIzMzMyk7XG4gICAgY29sb3I6IHZhcigtLW1kYy10aGVtZS1vbi1zZWNvbmRhcnksICNmZmYpO1xuICB9XG48L3N0eWxlPlxuIiwiPExheW91dEdyaWQ+XG4gIHsjZWFjaCBBcnJheSg5KSBhcyBfdW51c2VkLCBpfVxuICAgIDxDZWxsPlxuICAgICAgPElubmVyR3JpZD5cbiAgICAgICAgeyNlYWNoIEFycmF5KDMpIGFzIF91bnVzZWQsIGp9XG4gICAgICAgICAgPENlbGw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVtby1jZWxsXCI+Q2VsbCB7aSArIDF9LCB7aiArIDF9PC9kaXY+XG4gICAgICAgICAgPC9DZWxsPlxuICAgICAgICB7L2VhY2h9XG4gICAgICA8L0lubmVyR3JpZD5cbiAgICA8L0NlbGw+XG4gIHsvZWFjaH1cbjwvTGF5b3V0R3JpZD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IExheW91dEdyaWQsIHsgQ2VsbCwgSW5uZXJHcmlkIH0gZnJvbSAnQHNtdWkvbGF5b3V0LWdyaWQnO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgLmRlbW8tY2VsbCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tZGMtdGhlbWUtc2Vjb25kYXJ5LCAjMzMzKTtcbiAgICBjb2xvcjogdmFyKC0tbWRjLXRoZW1lLW9uLXNlY29uZGFyeSwgI2ZmZik7XG4gIH1cbjwvc3R5bGU+XG4iLCI8c3ZlbHRlOmhlYWQ+XG4gIDx0aXRsZT5MYXlvdXQgR3JpZCAtIFNNVUk8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNlY3Rpb24+XG4gIDxoMj5MYXlvdXQgR3JpZDwvaDI+XG4gIDxwPlRyeSByZXNpemluZyB5b3VyIHdpbmRvdyB0byBzZWUgdGhlIGNlbGxzIGFkYXB0IHRvIHRoZSBuZXcgc2l6ZS48L3A+XG5cbiAgPHByZSBjbGFzcz1cImRlbW8tc3BhY2VkXCI+bnBtIGkgLUQgQHNtdWkvbGF5b3V0LWdyaWQ8L3ByZT5cblxuICA8RGVtbyBjb21wb25lbnQ9e1NpbXBsZX0gZmlsZT1cImxheW91dC1ncmlkL19TaW1wbGUuc3ZlbHRlXCIgLz5cblxuICA8RGVtbyBjb21wb25lbnQ9e1NwYW59IGZpbGU9XCJsYXlvdXQtZ3JpZC9fU3Bhbi5zdmVsdGVcIj5TcGFuPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17T3JkZXJ9IGZpbGU9XCJsYXlvdXQtZ3JpZC9fT3JkZXIuc3ZlbHRlXCI+T3JkZXI8L0RlbW8+XG5cbiAgPERlbW9cbiAgICBjb21wb25lbnQ9e0ZpeGVkQ29sdW1uV2lkdGh9XG4gICAgZmlsZT1cImxheW91dC1ncmlkL19GaXhlZENvbHVtbldpZHRoLnN2ZWx0ZVwiXG4gID5cbiAgICBGaXhlZCBDb2x1bW4gV2lkdGhcbiAgPC9EZW1vPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17QWxpZ259IGZpbGU9XCJsYXlvdXQtZ3JpZC9fQWxpZ24uc3ZlbHRlXCI+QWxpZ248L0RlbW8+XG5cbiAgPERlbW8gY29tcG9uZW50PXtOZXN0ZWR9IGZpbGU9XCJsYXlvdXQtZ3JpZC9fTmVzdGVkLnN2ZWx0ZVwiPk5lc3RlZDwvRGVtbz5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZW1vLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaW1wbGUgZnJvbSAnLi9fU2ltcGxlLnN2ZWx0ZSc7XG4gIGltcG9ydCBTcGFuIGZyb20gJy4vX1NwYW4uc3ZlbHRlJztcbiAgaW1wb3J0IE9yZGVyIGZyb20gJy4vX09yZGVyLnN2ZWx0ZSc7XG4gIGltcG9ydCBGaXhlZENvbHVtbldpZHRoIGZyb20gJy4vX0ZpeGVkQ29sdW1uV2lkdGguc3ZlbHRlJztcbiAgaW1wb3J0IEFsaWduIGZyb20gJy4vX0FsaWduLnN2ZWx0ZSc7XG4gIGltcG9ydCBOZXN0ZWQgZnJvbSAnLi9fTmVzdGVkLnN2ZWx0ZSc7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQTtBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsdUZBQXVGLENBQUM7QUFDakg7QUFDQSxNQUFNLGdCQUFnQixHQUFHLHVGQUF1RixDQUFDO0FBQ2pIO0FBQ08sU0FBUyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUU7QUFDaEQ7QUFDQSxFQUFFLElBQUksR0FBRyxDQUFDO0FBQ1Y7QUFDQSxFQUFFLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztBQUNsQjtBQUNBLEVBQUUsTUFBTSxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQztBQUNwQztBQUNBO0FBQ0EsRUFBRSxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsS0FBSztBQUMvQyxJQUFJLElBQUksU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUNsQyxJQUFJLElBQUksVUFBVSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQzlCLElBQUksSUFBSSxHQUFHLEVBQUU7QUFDYjtBQUNBLE1BQU0sVUFB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Ozs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDQ1EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUFLRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQUtELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBS0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBaEJSLEtBQUssQ0FBQyxDQUFDOzs7O2tDQUFaLE1BQUk7Ozs7b0JBS0MsS0FBSyxDQUFDLENBQUM7Ozs7a0NBQVosTUFBSTs7OztvQkFLQyxLQUFLLENBQUMsQ0FBQzs7OztrQ0FBWixNQUFJOzs7O2tCQUtDLEtBQUssQ0FBQyxFQUFFOzs7O2dDQUFiLE1BQUk7Ozs7OztVQUtNLENBQUM7Ozs7Ozs7OztVQUdELENBQUM7Ozs7Ozs7OzttQkFHUSxPQUFPLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQTFCbEQsTUFBSTs7OztvQ0FLSixNQUFJOzs7O29DQUtKLE1BQUk7Ozs7a0NBS0osTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQ2IyQixHQUFDLE1BQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0FEdkIsRUFBRSxTQUFHLEdBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQURkLEtBQUssQ0FBQyxDQUFDOzs7O2dDQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkNFMkIsR0FBQyxNQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFGL0IsS0FBSyxDQUFDLENBQUM7Ozs7Z0NBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0lNLENBQUM7Ozs7Ozs7Ozs7VUFHVyxDQUFDOzs7Ozs7Ozs7O1VBR0UsQ0FBQzs7Ozs7Ozs7OztVQUdELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JDUlcsR0FBQyxNQUFHLENBQUM7OztzQkFBSSxHQUFDLE1BQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUZ4QyxLQUFLLENBQUMsQ0FBQzs7OztrQ0FBWixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBSEwsS0FBSyxDQUFDLENBQUM7Ozs7Z0NBQVosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQUFDLEtBQUssQ0FBQyxDQUFDOzs7OytCQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQ1NXLE1BQU07Ozs7Ozs7O2VBRU4sSUFBSTs7Ozs7Ozs7OztlQUVKLEtBQUs7Ozs7Ozs7Ozs7ZUFHVCxnQkFBZ0I7Ozs7Ozs7Ozs7ZUFNWixLQUFLOzs7Ozs7Ozs7O2VBRUwsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
