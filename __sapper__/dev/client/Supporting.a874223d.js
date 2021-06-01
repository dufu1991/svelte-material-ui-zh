import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, W as compute_rest_props, v as validate_slots, X as getContext, Y as get_current_component, Z as setContext, _ as onDestroy, $ as assign, a0 as exclude_internal_props, q as create_component, a1 as empty, A as claim_component, H as mount_component, F as insert_dev, a2 as get_spread_update, a3 as get_spread_object, a4 as group_outros, K as transition_out, M as destroy_component, a5 as check_outros, J as transition_in, u as detach_dev, a6 as binding_callbacks, a7 as create_slot, a8 as update_slot, p as element, x as claim_element, y as children, a9 as set_attributes, D as add_location, aa as action_destroyer, ab as is_function, ac as run_all, o as space, w as claim_space } from './client.ec94238b.js';

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

/* packages/image-list/node_modules/@smui/common/ClassAdder.svelte generated by Svelte v3.37.0 */

// (1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>
function create_default_slot(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[10].default;
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
		id: create_default_slot.name,
		type: "slot",
		source: "(1:0) <svelte:component   this={component}   bind:this={element}   use={[forwardEvents, ...use]}   class={classMap({     [className]: true,     [smuiClass]: true,     ...smuiClassMap,   })}   {...props}   {...$$restProps}>",
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
			use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
		},
		{
			class: classMap({
				[/*className*/ ctx[1]]: true,
				[/*smuiClass*/ ctx[5]]: true,
				.../*smuiClassMap*/ ctx[4]
			})
		},
		/*props*/ ctx[6],
		/*$$restProps*/ ctx[8]
	];

	var switch_value = /*component*/ ctx[2];

	function switch_props(ctx) {
		let switch_instance_props = {
			$$slots: { default: [create_default_slot] },
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
		/*switch_instance_binding*/ ctx[11](switch_instance);
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
			const switch_instance_changes = (dirty & /*forwardEvents, use, classMap, className, smuiClass, smuiClassMap, props, $$restProps*/ 499)
			? get_spread_update(switch_instance_spread_levels, [
					dirty & /*forwardEvents, use*/ 129 && {
						use: [/*forwardEvents*/ ctx[7], .../*use*/ ctx[0]]
					},
					dirty & /*classMap, className, smuiClass, smuiClassMap*/ 50 && {
						class: classMap({
							[/*className*/ ctx[1]]: true,
							[/*smuiClass*/ ctx[5]]: true,
							.../*smuiClassMap*/ ctx[4]
						})
					},
					dirty & /*props*/ 64 && get_spread_object(/*props*/ ctx[6]),
					dirty & /*$$restProps*/ 256 && get_spread_object(/*$$restProps*/ ctx[8])
				])
			: {};

			if (dirty & /*$$scope*/ 4096) {
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
					/*switch_instance_binding*/ ctx[11](switch_instance);
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
			/*switch_instance_binding*/ ctx[11](null);
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

const internals = {
	component: null,
	class: "",
	// The class map maps classes to contexts. The context
	// should resolve to a Svelte store, and the class
	// will be added if the Svelte store's value is true.
	classMap: {},
	contexts: {},
	props: {}
};

function instance$4($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","component","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ClassAdder", slots, ['default']);
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let element;
	const smuiClass = internals.class;
	const smuiClassMap = {};
	const smuiClassUnsubscribes = [];
	const contexts = internals.contexts;
	const props = internals.props;
	let { component = internals.component } = $$props;

	Object.entries(internals.classMap).forEach(([name, context]) => {
		const store = getContext(context);

		if (store && "subscribe" in store) {
			smuiClassUnsubscribes.push(store.subscribe(value => {
				$$invalidate(4, smuiClassMap[name] = value, smuiClassMap);
			}));
		}
	});

	const forwardEvents = forwardEventsBuilder(get_current_component());

	for (let context in contexts) {
		if (contexts.hasOwnProperty(context)) {
			setContext(context, contexts[context]);
		}
	}

	onDestroy(() => {
		for (const unsubscribe of smuiClassUnsubscribes) {
			unsubscribe();
		}
	});

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
		$$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("component" in $$new_props) $$invalidate(2, component = $$new_props.component);
		if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		internals,
		onDestroy,
		getContext,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		use,
		className,
		element,
		smuiClass,
		smuiClassMap,
		smuiClassUnsubscribes,
		contexts,
		props,
		component,
		forwardEvents,
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
		smuiClassMap,
		smuiClass,
		props,
		forwardEvents,
		$$restProps,
		getElement,
		slots,
		switch_instance_binding,
		$$scope
	];
}

class ClassAdder extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$4, create_fragment$4, safe_not_equal, {
			use: 0,
			class: 1,
			component: 2,
			getElement: 9
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ClassAdder",
			options,
			id: create_fragment$4.name
		});
	}

	get use() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get component() {
		throw new Error("<ClassAdder>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set component(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[9];
	}

	set getElement(value) {
		throw new Error("<ClassAdder>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

const defaults = { ...internals };

function classAdderBuilder(props) {
  function Component(...args) {
    Object.assign(internals, defaults, props);
    return new ClassAdder(...args);
  }

  Component.prototype = ClassAdder;

  // SSR support
  if (ClassAdder.$$render) {
    Component.$$render = (...args) =>
      Object.assign(internals, defaults, props) && ClassAdder.$$render(...args);
  }
  if (ClassAdder.render) {
    Component.render = (...args) =>
      Object.assign(internals, defaults, props) && ClassAdder.render(...args);
  }

  return Component;
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

/* packages/image-list/ImageList.svelte generated by Svelte v3.37.0 */

const file$3 = "packages/image-list/ImageList.svelte";

function create_fragment$3(ctx) {
	let ul;
	let ul_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

	let ul_levels = [
		{
			class: ul_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-image-list": true,
				"mdc-image-list--masonry": /*masonry*/ ctx[2],
				"mdc-image-list--with-text-protection": /*withTextProtection*/ ctx[3]
			})
		},
		/*$$restProps*/ ctx[6]
	];

	let ul_data = {};

	for (let i = 0; i < ul_levels.length; i += 1) {
		ul_data = assign(ul_data, ul_levels[i]);
	}

	const block = {
		c: function create() {
			ul = element("ul");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if (default_slot) default_slot.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(ul, ul_data);
			add_location(ul, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);

			if (default_slot) {
				default_slot.m(ul, null);
			}

			/*ul_binding*/ ctx[10](ul);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, ul, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[5].call(null, ul))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 256) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

			set_attributes(ul, ul_data = get_spread_update(ul_levels, [
				(!current || dirty & /*className, masonry, withTextProtection*/ 14 && ul_class_value !== (ul_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-image-list": true,
					"mdc-image-list--masonry": /*masonry*/ ctx[2],
					"mdc-image-list--with-text-protection": /*withTextProtection*/ ctx[3]
				}))) && { class: ul_class_value },
				dirty & /*$$restProps*/ 64 && /*$$restProps*/ ctx[6]
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
			if (detaching) detach_dev(ul);
			if (default_slot) default_slot.d(detaching);
			/*ul_binding*/ ctx[10](null);
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

function instance$3($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","masonry","withTextProtection","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("ImageList", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { masonry = false } = $$props;
	let { withTextProtection = false } = $$props;
	let element;
	setContext("SMUI:label:context", "image-list");

	function getElement() {
		return element;
	}

	function ul_binding($$value) {
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
		if ("masonry" in $$new_props) $$invalidate(2, masonry = $$new_props.masonry);
		if ("withTextProtection" in $$new_props) $$invalidate(3, withTextProtection = $$new_props.withTextProtection);
		if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		forwardEvents,
		use,
		className,
		masonry,
		withTextProtection,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("masonry" in $$props) $$invalidate(2, masonry = $$new_props.masonry);
		if ("withTextProtection" in $$props) $$invalidate(3, withTextProtection = $$new_props.withTextProtection);
		if ("element" in $$props) $$invalidate(4, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		masonry,
		withTextProtection,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		ul_binding
	];
}

class ImageList extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
			use: 0,
			class: 1,
			masonry: 2,
			withTextProtection: 3,
			getElement: 7
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "ImageList",
			options,
			id: create_fragment$3.name
		});
	}

	get use() {
		throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get masonry() {
		throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set masonry(value) {
		throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get withTextProtection() {
		throw new Error("<ImageList>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set withTextProtection(value) {
		throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[7];
	}

	set getElement(value) {
		throw new Error("<ImageList>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/image-list/node_modules/@smui/common/Li.svelte generated by Svelte v3.37.0 */
const file$2 = "packages/image-list/node_modules/@smui/common/Li.svelte";

function create_fragment$2(ctx) {
	let li;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], null);
	let li_levels = [/*$$restProps*/ ctx[3]];
	let li_data = {};

	for (let i = 0; i < li_levels.length; i += 1) {
		li_data = assign(li_data, li_levels[i]);
	}

	const block = {
		c: function create() {
			li = element("li");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", {});
			var li_nodes = children(li);
			if (default_slot) default_slot.l(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(li, li_data);
			add_location(li, file$2, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);

			if (default_slot) {
				default_slot.m(li, null);
			}

			/*li_binding*/ ctx[7](li);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, li, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[2].call(null, li))
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

			set_attributes(li, li_data = get_spread_update(li_levels, [dirty & /*$$restProps*/ 8 && /*$$restProps*/ ctx[3]]));
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
			if (detaching) detach_dev(li);
			if (default_slot) default_slot.d(detaching);
			/*li_binding*/ ctx[7](null);
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

function instance$2($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Li", slots, ['default']);
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let element = null;

	function getElement() {
		return element;
	}

	function li_binding($$value) {
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
		li_binding
	];
}

class Li extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Li",
			options,
			id: create_fragment$2.name
		});
	}

	get use() {
		throw new Error("<Li>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Li>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[4];
	}

	set getElement(value) {
		throw new Error("<Li>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var Item = classAdderBuilder({
  class: 'mdc-image-list__item',
  component: Li,
});

/* packages/image-list/node_modules/@smui/common/Div.svelte generated by Svelte v3.37.0 */
const file$1 = "packages/image-list/node_modules/@smui/common/Div.svelte";

function create_fragment$1(ctx) {
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
			add_location(div, file$1, 0, 0, 0);
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
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
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
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { use: 0, getElement: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Div",
			options,
			id: create_fragment$1.name
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

var ImageAspectContainer = classAdderBuilder({
  class: 'mdc-image-list__image-aspect-container',
  component: Div,
});

/* packages/image-list/node_modules/@smui/common/Img.svelte generated by Svelte v3.37.0 */
const file = "packages/image-list/node_modules/@smui/common/Img.svelte";

function create_fragment(ctx) {
	let img;
	let useActions_action;
	let t;
	let current;
	let mounted;
	let dispose;
	let img_levels = [{ alt: /*alt*/ ctx[0] }, /*$$restProps*/ ctx[4]];
	let img_data = {};

	for (let i = 0; i < img_levels.length; i += 1) {
		img_data = assign(img_data, img_levels[i]);
	}

	const default_slot_template = /*#slots*/ ctx[7].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

	const block = {
		c: function create() {
			img = element("img");
			t = space();
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { alt: true });
			t = claim_space(nodes);
			if (default_slot) default_slot.l(nodes);
			this.h();
		},
		h: function hydrate() {
			set_attributes(img, img_data);
			add_location(img, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
			/*img_binding*/ ctx[8](img);
			insert_dev(target, t, anchor);

			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, img, /*use*/ ctx[1])),
					action_destroyer(/*forwardEvents*/ ctx[3].call(null, img))
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			set_attributes(img, img_data = get_spread_update(img_levels, [
				(!current || dirty & /*alt*/ 1) && { alt: /*alt*/ ctx[0] },
				dirty & /*$$restProps*/ 16 && /*$$restProps*/ ctx[4]
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty & /*use*/ 2) useActions_action.update.call(null, /*use*/ ctx[1]);

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 64) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[6], dirty, null, null);
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
			if (detaching) detach_dev(img);
			/*img_binding*/ ctx[8](null);
			if (detaching) detach_dev(t);
			if (default_slot) default_slot.d(detaching);
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
	const omit_props_names = ["alt","use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Img", slots, ['default']);
	let { alt = "" } = $$props;
	let { use = [] } = $$props;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let element = null;

	function getElement() {
		return element;
	}

	function img_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(2, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("alt" in $$new_props) $$invalidate(0, alt = $$new_props.alt);
		if ("use" in $$new_props) $$invalidate(1, use = $$new_props.use);
		if ("$$scope" in $$new_props) $$invalidate(6, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		get_current_component,
		forwardEventsBuilder,
		useActions,
		alt,
		use,
		forwardEvents,
		element,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("alt" in $$props) $$invalidate(0, alt = $$new_props.alt);
		if ("use" in $$props) $$invalidate(1, use = $$new_props.use);
		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		alt,
		use,
		element,
		forwardEvents,
		$$restProps,
		getElement,
		$$scope,
		slots,
		img_binding
	];
}

class Img extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { alt: 0, use: 1, getElement: 5 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Img",
			options,
			id: create_fragment.name
		});
	}

	get alt() {
		throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set alt(value) {
		throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get use() {
		throw new Error("<Img>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[5];
	}

	set getElement(value) {
		throw new Error("<Img>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

var Image = classAdderBuilder({
  class: 'mdc-image-list__image',
  component: Img,
});

var Supporting = classAdderBuilder({
  class: 'mdc-image-list__supporting',
  component: Div,
});

export { ImageList as I, Supporting as S, Item as a, ImageAspectContainer as b, Image as c, classMap as d, forwardEventsBuilder as f, useActions as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VwcG9ydGluZy5hODc0MjIzZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcGFja2FnZXMvaW1hZ2UtbGlzdC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHNCdWlsZGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvaW1hZ2UtbGlzdC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzTWFwLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvaW1hZ2UtbGlzdC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0NsYXNzQWRkZXIuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvaW1hZ2UtbGlzdC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzQWRkZXJCdWlsZGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvaW1hZ2UtbGlzdC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9pbWFnZS1saXN0L0ltYWdlTGlzdC5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9pbWFnZS1saXN0L25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vTGkuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvaW1hZ2UtbGlzdC9JdGVtLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvaW1hZ2UtbGlzdC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0Rpdi5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9pbWFnZS1saXN0L0ltYWdlQXNwZWN0Q29udGFpbmVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvaW1hZ2UtbGlzdC9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL0ltZy5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9pbWFnZS1saXN0L0ltYWdlLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvaW1hZ2UtbGlzdC9TdXBwb3J0aW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGJ1YmJsZSxcbiAgbGlzdGVuLFxuICBwcmV2ZW50X2RlZmF1bHQsXG4gIHN0b3BfcHJvcGFnYXRpb24sXG59IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG5cbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBET00gZXZlbnRzLlxuY29uc3Qgb2xkTW9kaWZpZXJSZWdleCA9IC9eW2Etel0rKD86Oig/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcbi8vIE1hdGNoIG1vZGlmaWVycyBvbiBvdGhlciBldmVudHMuXG5jb25zdCBuZXdNb2RpZmllclJlZ2V4ID0gL15bXiRdKyg/OlxcJCg/OnByZXZlbnREZWZhdWx0fHN0b3BQcm9wYWdhdGlvbnxwYXNzaXZlfG5vbnBhc3NpdmV8Y2FwdHVyZXxvbmNlfHNlbGYpKSskLztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcndhcmRFdmVudHNCdWlsZGVyKGNvbXBvbmVudCkge1xuICAvLyBUaGlzIGlzIG91ciBwc2V1ZG8gJG9uIGZ1bmN0aW9uLiBJdCBpcyBkZWZpbmVkIG9uIGNvbXBvbmVudCBtb3VudC5cbiAgbGV0ICRvbjtcbiAgLy8gVGhpcyBpcyBhIGxpc3Qgb2YgZXZlbnRzIGJvdW5kIGJlZm9yZSBtb3VudC5cbiAgbGV0IGV2ZW50cyA9IFtdO1xuICAvLyBUaGlzIGlzIHRoZSBvcmlnaW5hbCBjb21wb25lbnQgJG9uIGZ1bmN0aW9uLlxuICBjb25zdCBjb21wb25lbnRPbiA9IGNvbXBvbmVudC4kb247XG5cbiAgLy8gQW5kIHdlIG92ZXJyaWRlIHRoZSAkb24gZnVuY3Rpb24gdG8gZm9yd2FyZCBhbGwgYm91bmQgZXZlbnRzLlxuICBjb21wb25lbnQuJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgbGV0IGRlc3RydWN0b3IgPSAoKSA9PiB7fTtcbiAgICBpZiAoJG9uKSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIHByb2dyYW1tYXRpY2FsbHkuXG4gICAgICBkZXN0cnVjdG9yID0gJG9uKGV2ZW50VHlwZSwgY2FsbGJhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUaGUgZXZlbnQgd2FzIGJvdW5kIGJlZm9yZSBtb3VudCBieSBTdmVsdGUuXG4gICAgICBldmVudHMucHVzaChbZXZlbnRUeXBlLCBjYWxsYmFja10pO1xuICAgIH1cbiAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgIGNvbnN0IG5ld01vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gobmV3TW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcblxuICAgIGlmIChvbGRNb2RpZmllck1hdGNoICYmIGNvbnNvbGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ0V2ZW50IG1vZGlmaWVycyBpbiBTTVVJIG5vdyB1c2UgXCIkXCIgaW5zdGVhZCBvZiBcIjpcIiwgc28gdGhhdCBhbGwgZXZlbnRzIGNhbiBiZSBib3VuZCB3aXRoIG1vZGlmaWVycy4gUGxlYXNlIHVwZGF0ZSB5b3VyIGV2ZW50IGJpbmRpbmc6ICcsXG4gICAgICAgIGV2ZW50VHlwZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgLy8gUmVtb3ZlIG1vZGlmaWVycyBmcm9tIHRoZSByZWFsIGV2ZW50LlxuICAgICAgY29uc3QgcGFydHMgPSBldmVudFR5cGUuc3BsaXQob2xkTW9kaWZpZXJNYXRjaCA/ICc6JyA6ICckJyk7XG4gICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSBvcmlnaW5hbCAkb24gZnVuY3Rpb24uXG4gICAgY29uc3QgY29tcG9uZW50RGVzdHJ1Y3RvciA9IGNvbXBvbmVudE9uLmNhbGwoXG4gICAgICBjb21wb25lbnQsXG4gICAgICBldmVudFR5cGUsXG4gICAgICBjYWxsYmFja1xuICAgICk7XG5cbiAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgIGRlc3RydWN0b3IoKTtcbiAgICAgIHJldHVybiBjb21wb25lbnREZXN0cnVjdG9yKC4uLmFyZ3MpO1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gZm9yd2FyZChlKSB7XG4gICAgLy8gSW50ZXJuYWxseSBidWJibGUgdGhlIGV2ZW50IHVwIGZyb20gU3ZlbHRlIGNvbXBvbmVudHMuXG4gICAgYnViYmxlKGNvbXBvbmVudCwgZSk7XG4gIH1cblxuICByZXR1cm4gKG5vZGUpID0+IHtcbiAgICBjb25zdCBkZXN0cnVjdG9ycyA9IFtdO1xuICAgIGNvbnN0IGZvcndhcmREZXN0cnVjdG9ycyA9IHt9O1xuXG4gICAgLy8gVGhpcyBmdW5jdGlvbiBpcyByZXNwb25zaWJsZSBmb3IgZm9yd2FyZGluZyBhbGwgYm91bmQgZXZlbnRzLlxuICAgICRvbiA9IChmdWxsRXZlbnRUeXBlLCBjYWxsYmFjaykgPT4ge1xuICAgICAgbGV0IGV2ZW50VHlwZSA9IGZ1bGxFdmVudFR5cGU7XG4gICAgICBsZXQgaGFuZGxlciA9IGNhbGxiYWNrO1xuICAgICAgLy8gRE9NIGFkZEV2ZW50TGlzdGVuZXIgb3B0aW9ucyBhcmd1bWVudC5cbiAgICAgIGxldCBvcHRpb25zID0gZmFsc2U7XG4gICAgICBjb25zdCBvbGRNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG9sZE1vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICAgIGNvbnN0IG1vZGlmaWVyTWF0Y2ggPSBvbGRNb2RpZmllck1hdGNoIHx8IG5ld01vZGlmaWVyTWF0Y2g7XG4gICAgICBpZiAobW9kaWZpZXJNYXRjaCkge1xuICAgICAgICAvLyBQYXJzZSB0aGUgZXZlbnQgbW9kaWZpZXJzLlxuICAgICAgICAvLyBTdXBwb3J0ZWQgbW9kaWZpZXJzOlxuICAgICAgICAvLyAtIHByZXZlbnREZWZhdWx0XG4gICAgICAgIC8vIC0gc3RvcFByb3BhZ2F0aW9uXG4gICAgICAgIC8vIC0gcGFzc2l2ZVxuICAgICAgICAvLyAtIG5vbnBhc3NpdmVcbiAgICAgICAgLy8gLSBjYXB0dXJlXG4gICAgICAgIC8vIC0gb25jZVxuICAgICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgICAgZXZlbnRUeXBlID0gcGFydHNbMF07XG4gICAgICAgIG9wdGlvbnMgPSBPYmplY3QuZnJvbUVudHJpZXMocGFydHMuc2xpY2UoMSkubWFwKChtb2QpID0+IFttb2QsIHRydWVdKSk7XG4gICAgICAgIGlmIChvcHRpb25zLm5vbnBhc3NpdmUpIHtcbiAgICAgICAgICBvcHRpb25zLnBhc3NpdmUgPSBmYWxzZTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5ub25wYXNzaXZlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgaGFuZGxlciA9IHByZXZlbnRfZGVmYXVsdChoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5wcmV2ZW50RGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgICBoYW5kbGVyID0gc3RvcF9wcm9wYWdhdGlvbihoYW5kbGVyKTtcbiAgICAgICAgICBkZWxldGUgb3B0aW9ucy5zdG9wUHJvcGFnYXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gTGlzdGVuIGZvciB0aGUgZXZlbnQgZGlyZWN0bHksIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAgICBjb25zdCBvZmYgPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgIGNvbnN0IGRlc3RydWN0b3IgPSAoKSA9PiB7XG4gICAgICAgIG9mZigpO1xuICAgICAgICBjb25zdCBpZHggPSBkZXN0cnVjdG9ycy5pbmRleE9mKGRlc3RydWN0b3IpO1xuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICBkZXN0cnVjdG9ycy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZGVzdHJ1Y3RvcnMucHVzaChkZXN0cnVjdG9yKTtcblxuICAgICAgLy8gRm9yd2FyZCB0aGUgZXZlbnQgZnJvbSBTdmVsdGUuXG4gICAgICBpZiAoIWV2ZW50VHlwZSBpbiBmb3J3YXJkRGVzdHJ1Y3RvcnMpIHtcbiAgICAgICAgZm9yd2FyZERlc3RydWN0b3JzW2V2ZW50VHlwZV0gPSBsaXN0ZW4obm9kZSwgZXZlbnRUeXBlLCBmb3J3YXJkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc3RydWN0b3I7XG4gICAgfTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBMaXN0ZW4gdG8gYWxsIHRoZSBldmVudHMgYWRkZWQgYmVmb3JlIG1vdW50LlxuICAgICAgJG9uKGV2ZW50c1tpXVswXSwgZXZlbnRzW2ldWzFdKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVzdHJveTogKCkgPT4ge1xuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZXN0cnVjdG9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGRlc3RydWN0b3JzW2ldKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgYWxsIGV2ZW50IGZvcndhcmRlcnMuXG4gICAgICAgIGZvciAobGV0IGVudHJ5IG9mIE9iamVjdC5lbnRyaWVzKGZvcndhcmREZXN0cnVjdG9ycykpIHtcbiAgICAgICAgICBlbnRyeVsxXSgpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH07XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xhc3NNYXAoY2xhc3NPYmopIHtcbiAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqKVxuICAgIC5maWx0ZXIoKFtuYW1lLCB2YWx1ZV0pID0+IG5hbWUgIT09ICcnICYmIHZhbHVlKVxuICAgIC5tYXAoKFtuYW1lXSkgPT4gbmFtZSlcbiAgICAuam9pbignICcpO1xufVxuIiwiPHN2ZWx0ZTpjb21wb25lbnRcbiAgdGhpcz17Y29tcG9uZW50fVxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZT17W2ZvcndhcmRFdmVudHMsIC4uLnVzZV19XG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgW3NtdWlDbGFzc106IHRydWUsXG4gICAgLi4uc211aUNsYXNzTWFwLFxuICB9KX1cbiAgey4uLnByb3BzfVxuICB7Li4uJCRyZXN0UHJvcHN9PjxzbG90IC8+PC9zdmVsdGU6Y29tcG9uZW50XG4+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBleHBvcnQgY29uc3QgaW50ZXJuYWxzID0ge1xuICAgIGNvbXBvbmVudDogbnVsbCxcbiAgICBjbGFzczogJycsXG4gICAgLy8gVGhlIGNsYXNzIG1hcCBtYXBzIGNsYXNzZXMgdG8gY29udGV4dHMuIFRoZSBjb250ZXh0XG4gICAgLy8gc2hvdWxkIHJlc29sdmUgdG8gYSBTdmVsdGUgc3RvcmUsIGFuZCB0aGUgY2xhc3NcbiAgICAvLyB3aWxsIGJlIGFkZGVkIGlmIHRoZSBTdmVsdGUgc3RvcmUncyB2YWx1ZSBpcyB0cnVlLlxuICAgIGNsYXNzTWFwOiB7fSxcbiAgICBjb250ZXh0czoge30sXG4gICAgcHJvcHM6IHt9LFxuICB9O1xuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uRGVzdHJveSwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyIH0gZnJvbSAnLi9mb3J3YXJkRXZlbnRzQnVpbGRlci5qcyc7XG4gIGltcG9ydCB7IGNsYXNzTWFwIH0gZnJvbSAnLi9jbGFzc01hcC5qcyc7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcblxuICBsZXQgZWxlbWVudDtcbiAgY29uc3Qgc211aUNsYXNzID0gaW50ZXJuYWxzLmNsYXNzO1xuICBjb25zdCBzbXVpQ2xhc3NNYXAgPSB7fTtcbiAgY29uc3Qgc211aUNsYXNzVW5zdWJzY3JpYmVzID0gW107XG4gIGNvbnN0IGNvbnRleHRzID0gaW50ZXJuYWxzLmNvbnRleHRzO1xuICBjb25zdCBwcm9wcyA9IGludGVybmFscy5wcm9wcztcblxuICBleHBvcnQgbGV0IGNvbXBvbmVudCA9IGludGVybmFscy5jb21wb25lbnQ7XG5cbiAgT2JqZWN0LmVudHJpZXMoaW50ZXJuYWxzLmNsYXNzTWFwKS5mb3JFYWNoKChbbmFtZSwgY29udGV4dF0pID0+IHtcbiAgICBjb25zdCBzdG9yZSA9IGdldENvbnRleHQoY29udGV4dCk7XG5cbiAgICBpZiAoc3RvcmUgJiYgJ3N1YnNjcmliZScgaW4gc3RvcmUpIHtcbiAgICAgIHNtdWlDbGFzc1Vuc3Vic2NyaWJlcy5wdXNoKFxuICAgICAgICBzdG9yZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgc211aUNsYXNzTWFwW25hbWVdID0gdmFsdWU7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBmb3IgKGxldCBjb250ZXh0IGluIGNvbnRleHRzKSB7XG4gICAgaWYgKGNvbnRleHRzLmhhc093blByb3BlcnR5KGNvbnRleHQpKSB7XG4gICAgICBzZXRDb250ZXh0KGNvbnRleHQsIGNvbnRleHRzW2NvbnRleHRdKTtcbiAgICB9XG4gIH1cblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGZvciAoY29uc3QgdW5zdWJzY3JpYmUgb2Ygc211aUNsYXNzVW5zdWJzY3JpYmVzKSB7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0RWxlbWVudCgpO1xuICB9XG48L3NjcmlwdD5cbiIsImltcG9ydCBDbGFzc0FkZGVyLCB7IGludGVybmFscyB9IGZyb20gJy4vQ2xhc3NBZGRlci5zdmVsdGUnO1xuXG5jb25zdCBkZWZhdWx0cyA9IHsgLi4uaW50ZXJuYWxzIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFzc0FkZGVyQnVpbGRlcihwcm9wcykge1xuICBmdW5jdGlvbiBDb21wb25lbnQoLi4uYXJncykge1xuICAgIE9iamVjdC5hc3NpZ24oaW50ZXJuYWxzLCBkZWZhdWx0cywgcHJvcHMpO1xuICAgIHJldHVybiBuZXcgQ2xhc3NBZGRlciguLi5hcmdzKTtcbiAgfVxuXG4gIENvbXBvbmVudC5wcm90b3R5cGUgPSBDbGFzc0FkZGVyO1xuXG4gIC8vIFNTUiBzdXBwb3J0XG4gIGlmIChDbGFzc0FkZGVyLiQkcmVuZGVyKSB7XG4gICAgQ29tcG9uZW50LiQkcmVuZGVyID0gKC4uLmFyZ3MpID0+XG4gICAgICBPYmplY3QuYXNzaWduKGludGVybmFscywgZGVmYXVsdHMsIHByb3BzKSAmJiBDbGFzc0FkZGVyLiQkcmVuZGVyKC4uLmFyZ3MpO1xuICB9XG4gIGlmIChDbGFzc0FkZGVyLnJlbmRlcikge1xuICAgIENvbXBvbmVudC5yZW5kZXIgPSAoLi4uYXJncykgPT5cbiAgICAgIE9iamVjdC5hc3NpZ24oaW50ZXJuYWxzLCBkZWZhdWx0cywgcHJvcHMpICYmIENsYXNzQWRkZXIucmVuZGVyKC4uLmFyZ3MpO1xuICB9XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb25zKG5vZGUsIGFjdGlvbnMpIHtcbiAgbGV0IG9iamVjdHMgPSBbXTtcblxuICBpZiAoYWN0aW9ucykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICBjb25zdCBhY3Rpb24gPSBpc0FycmF5ID8gYWN0aW9uc1tpXVswXSA6IGFjdGlvbnNbaV07XG4gICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlLCBhY3Rpb25zW2ldWzFdKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmplY3RzLnB1c2goYWN0aW9uKG5vZGUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHVwZGF0ZShhY3Rpb25zKSB7XG4gICAgICBpZiAoKChhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoKSB8fCAwKSAhPSBvYmplY3RzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtdXN0IG5vdCBjaGFuZ2UgdGhlIGxlbmd0aCBvZiBhbiBhY3Rpb25zIGFycmF5LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYWN0aW9ucykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAob2JqZWN0c1tpXSAmJiAndXBkYXRlJyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgICBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheShhY3Rpb25zW2ldKTtcbiAgICAgICAgICAgIGlmIChpc0FycmF5ICYmIGFjdGlvbnNbaV0ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZShhY3Rpb25zW2ldWzFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG9iamVjdHNbaV0udXBkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ2Rlc3Ryb3knIGluIG9iamVjdHNbaV0pIHtcbiAgICAgICAgICBvYmplY3RzW2ldLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gIH07XG59XG4iLCI8dWxcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgICdtZGMtaW1hZ2UtbGlzdCc6IHRydWUsXG4gICAgJ21kYy1pbWFnZS1saXN0LS1tYXNvbnJ5JzogbWFzb25yeSxcbiAgICAnbWRjLWltYWdlLWxpc3QtLXdpdGgtdGV4dC1wcm90ZWN0aW9uJzogd2l0aFRleHRQcm90ZWN0aW9uLFxuICB9KX1cbiAgey4uLiQkcmVzdFByb3BzfVxuPlxuICA8c2xvdCAvPlxuPC91bD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCBtYXNvbnJ5ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgd2l0aFRleHRQcm90ZWN0aW9uID0gZmFsc2U7XG5cbiAgbGV0IGVsZW1lbnQ7XG5cbiAgc2V0Q29udGV4dCgnU01VSTpsYWJlbDpjb250ZXh0JywgJ2ltYWdlLWxpc3QnKTtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8bGkgYmluZDp0aGlzPXtlbGVtZW50fSB1c2U6dXNlQWN0aW9ucz17dXNlfSB1c2U6Zm9yd2FyZEV2ZW50cyB7Li4uJCRyZXN0UHJvcHN9PlxuICA8c2xvdCAvPlxuPC9saT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgZ2V0X2N1cnJlbnRfY29tcG9uZW50IH0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcbiAgaW1wb3J0IHsgZm9yd2FyZEV2ZW50c0J1aWxkZXIsIHVzZUFjdGlvbnMgfSBmcm9tICcuL2ludGVybmFsLmpzJztcblxuICBleHBvcnQgbGV0IHVzZSA9IFtdO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsImltcG9ydCB7IGNsYXNzQWRkZXJCdWlsZGVyIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbmltcG9ydCBMaSBmcm9tICdAc211aS9jb21tb24vTGkuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1pbWFnZS1saXN0X19pdGVtJyxcbiAgY29tcG9uZW50OiBMaSxcbn0pO1xuIiwiPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIHsuLi4kJHJlc3RQcm9wc31cbj5cbiAgPHNsb3QgLz5cbjwvZGl2PlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQgeyBmb3J3YXJkRXZlbnRzQnVpbGRlciwgdXNlQWN0aW9ucyB9IGZyb20gJy4vaW50ZXJuYWwuanMnO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG5cbiAgY29uc3QgZm9yd2FyZEV2ZW50cyA9IGZvcndhcmRFdmVudHNCdWlsZGVyKGdldF9jdXJyZW50X2NvbXBvbmVudCgpKTtcblxuICBsZXQgZWxlbWVudCA9IG51bGw7XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgY2xhc3NBZGRlckJ1aWxkZXIgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuaW1wb3J0IERpdiBmcm9tICdAc211aS9jb21tb24vRGl2LnN2ZWx0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzQWRkZXJCdWlsZGVyKHtcbiAgY2xhc3M6ICdtZGMtaW1hZ2UtbGlzdF9faW1hZ2UtYXNwZWN0LWNvbnRhaW5lcicsXG4gIGNvbXBvbmVudDogRGl2LFxufSk7XG4iLCI8aW1nXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAge2FsdH1cbiAgey4uLiQkcmVzdFByb3BzfVxuLz5cbjxzbG90IC8+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7IGZvcndhcmRFdmVudHNCdWlsZGVyLCB1c2VBY3Rpb25zIH0gZnJvbSAnLi9pbnRlcm5hbC5qcyc7XG5cbiAgZXhwb3J0IGxldCBhbHQgPSAnJztcbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGxldCBlbGVtZW50ID0gbnVsbDtcblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgeyBjbGFzc0FkZGVyQnVpbGRlciB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5pbXBvcnQgSW1nIGZyb20gJ0BzbXVpL2NvbW1vbi9JbWcuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1pbWFnZS1saXN0X19pbWFnZScsXG4gIGNvbXBvbmVudDogSW1nLFxufSk7XG4iLCJpbXBvcnQgeyBjbGFzc0FkZGVyQnVpbGRlciB9IGZyb20gJ0BzbXVpL2NvbW1vbi9pbnRlcm5hbC5qcyc7XG5pbXBvcnQgRGl2IGZyb20gJ0BzbXVpL2NvbW1vbi9EaXYuc3ZlbHRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3NBZGRlckJ1aWxkZXIoe1xuICBjbGFzczogJ21kYy1pbWFnZS1saXN0X19zdXBwb3J0aW5nJyxcbiAgY29tcG9uZW50OiBEaXYsXG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQU9BO0FBQ0EsTUFBTSxnQkFBZ0IsR0FBRyx1RkFB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
