import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, ah as onMount, _ as onDestroy, a6 as binding_callbacks, ak as bind, q as create_component, o as space, p as element, A as claim_component, w as claim_space, x as claim_element, D as add_location, H as mount_component, F as insert_dev, J as transition_in, K as transition_out, M as destroy_component, u as detach_dev, t as text, z as claim_text, al as add_flush_callback, y as children, E as attr_dev, G as append_dev, O as noop, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { L as LinearProgress } from './LinearProgress.2a923d82.js';
import { C as Checkbox } from './Checkbox.52871e38.js';
import { F as FormField } from './FormField.2971fa15.js';
import { B as Button_1 } from './Button.d66ce348.js';

/* src/routes/demo/linear-progress/_Simple.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/linear-progress/_Simple.svelte";

// (5:0) <Button on:click={reset}>
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
		source: "(5:0) <Button on:click={reset}>",
		ctx
	});

	return block;
}

// (7:0) <FormField>
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
		source: "(7:0) <FormField>",
		ctx
	});

	return block;
}

// (9:2) 
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
			add_location(span, file$1, 8, 2, 140);
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
		source: "(9:2) ",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let linearprogress;
	let t0;
	let br;
	let t1;
	let button;
	let t2;
	let formfield;
	let current;

	linearprogress = new LinearProgress({
			props: {
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
			create_component(linearprogress.$$.fragment);
			t0 = space();
			br = element("br");
			t1 = space();
			create_component(button.$$.fragment);
			t2 = space();
			create_component(formfield.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			claim_component(linearprogress.$$.fragment, nodes);
			t0 = claim_space(nodes);
			br = claim_element(nodes, "BR", {});
			t1 = claim_space(nodes);
			claim_component(button.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(formfield.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(br, file$1, 2, 0, 40);
		},
		m: function mount(target, anchor) {
			mount_component(linearprogress, target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, br, anchor);
			insert_dev(target, t1, anchor);
			mount_component(button, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(formfield, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const linearprogress_changes = {};
			if (dirty & /*progress*/ 1) linearprogress_changes.progress = /*progress*/ ctx[0];
			if (dirty & /*closed*/ 2) linearprogress_changes.closed = /*closed*/ ctx[1];
			linearprogress.$set(linearprogress_changes);
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
			transition_in(linearprogress.$$.fragment, local);
			transition_in(button.$$.fragment, local);
			transition_in(formfield.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(linearprogress.$$.fragment, local);
			transition_out(button.$$.fragment, local);
			transition_out(formfield.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(linearprogress, detaching);
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
		LinearProgress,
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

/* src/routes/demo/linear-progress/_Buffered.svelte generated by Svelte v3.37.0 */

function create_fragment$3(ctx) {
	let linearprogress;
	let current;

	linearprogress = new LinearProgress({
			props: { progress: 0.5, buffer: 0.75 },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(linearprogress.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(linearprogress.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(linearprogress, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(linearprogress.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(linearprogress.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(linearprogress, detaching);
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
	validate_slots("Buffered", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Buffered> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ LinearProgress });
	return [];
}

class Buffered extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Buffered",
			options,
			id: create_fragment$3.name
		});
	}
}

/* src/routes/demo/linear-progress/_Indeterminate.svelte generated by Svelte v3.37.0 */

function create_fragment$2(ctx) {
	let linearprogress;
	let current;

	linearprogress = new LinearProgress({
			props: { indeterminate: true },
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(linearprogress.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(linearprogress.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(linearprogress, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(linearprogress.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(linearprogress.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(linearprogress, detaching);
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
	validate_slots("Indeterminate", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Indeterminate> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ LinearProgress });
	return [];
}

class Indeterminate extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Indeterminate",
			options,
			id: create_fragment$2.name
		});
	}
}

/* src/routes/demo/linear-progress/_Colored.svelte generated by Svelte v3.37.0 */

function create_fragment$1(ctx) {
	let linearprogress;
	let current;

	linearprogress = new LinearProgress({
			props: {
				class: "my-colored-bar",
				progress: 0.5,
				buffer: 0.75
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(linearprogress.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(linearprogress.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(linearprogress, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(linearprogress.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(linearprogress.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(linearprogress, detaching);
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

	$$self.$capture_state = () => ({ LinearProgress });
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

/* src/routes/demo/linear-progress/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/linear-progress/index.svelte";

// (12:2) <Demo component={Buffered} file="linear-progress/_Buffered.svelte">
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Buffered");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Buffered");
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
		source: "(12:2) <Demo component={Buffered} file=\\\"linear-progress/_Buffered.svelte\\\">",
		ctx
	});

	return block;
}

// (16:2) <Demo component={Indeterminate} file="linear-progress/_Indeterminate.svelte">
function create_default_slot_1(ctx) {
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
		id: create_default_slot_1.name,
		type: "slot",
		source: "(16:2) <Demo component={Indeterminate} file=\\\"linear-progress/_Indeterminate.svelte\\\">",
		ctx
	});

	return block;
}

// (20:2) <Demo     component={Colored}     files={['linear-progress/_Colored.svelte', 'linear-progress/_Colored.scss']}   >
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
		source: "(20:2) <Demo     component={Colored}     files={['linear-progress/_Colored.svelte', 'linear-progress/_Colored.scss']}   >",
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
				file: "linear-progress/_Simple.svelte"
			},
			$$inline: true
		});

	demo1 = new Demo({
			props: {
				component: Buffered,
				file: "linear-progress/_Buffered.svelte",
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo2 = new Demo({
			props: {
				component: Indeterminate,
				file: "linear-progress/_Indeterminate.svelte",
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	demo3 = new Demo({
			props: {
				component: Colored,
				files: ["linear-progress/_Colored.svelte", "linear-progress/_Colored.scss"],
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
			t1 = text("Linear Progress");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/linear-progress");
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1et0h80\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Linear Progress");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/linear-progress");
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
			document.title = "Linear Progress - SMUI";
			add_location(h2, file, 5, 2, 82);
			attr_dev(pre, "class", "demo-spaced");
			add_location(pre, file, 7, 2, 110);
			add_location(section, file, 4, 0, 70);
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
	validate_slots("Linear_progress", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Linear_progress> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		Demo,
		Simple,
		Buffered,
		Indeterminate,
		Colored
	});

	return [];
}

class Linear_progress extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Linear_progress",
			options,
			id: create_fragment.name
		});
	}
}

export default Linear_progress;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2ExODlhMDEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9saW5lYXItcHJvZ3Jlc3MvX1NpbXBsZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vbGluZWFyLXByb2dyZXNzL19CdWZmZXJlZC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vbGluZWFyLXByb2dyZXNzL19Db2xvcmVkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby9saW5lYXItcHJvZ3Jlc3MvaW5kZXguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxMaW5lYXJQcm9ncmVzcyB7cHJvZ3Jlc3N9IHtjbG9zZWR9IC8+XG5cbjxiciAvPlxuXG48QnV0dG9uIG9uOmNsaWNrPXtyZXNldH0+UmVzZXQ8L0J1dHRvbj5cblxuPEZvcm1GaWVsZD5cbiAgPENoZWNrYm94IGJpbmQ6Y2hlY2tlZD17Y2xvc2VkfSAvPlxuICA8c3BhbiBzbG90PVwibGFiZWxcIj5DbG9zZWQ8L3NwYW4+XG48L0Zvcm1GaWVsZD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BzbXVpL2xpbmVhci1wcm9ncmVzcyc7XG4gIGltcG9ydCBDaGVja2JveCBmcm9tICdAc211aS9jaGVja2JveCc7XG4gIGltcG9ydCBGb3JtRmllbGQgZnJvbSAnQHNtdWkvZm9ybS1maWVsZCc7XG4gIGltcG9ydCBCdXR0b24gZnJvbSAnQHNtdWkvYnV0dG9uJztcblxuICBsZXQgcHJvZ3Jlc3MgPSAwO1xuICBsZXQgY2xvc2VkID0gZmFsc2U7XG4gIGxldCB0aW1lcjtcblxuICBvbk1vdW50KHJlc2V0KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICB9KTtcblxuICBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBwcm9ncmVzcyA9IDA7XG4gICAgY2xvc2VkID0gZmFsc2U7XG4gICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBwcm9ncmVzcyArPSAwLjAxO1xuXG4gICAgICBpZiAocHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICBwcm9ncmVzcyA9IDE7XG4gICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgIH0sIDEwMCk7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPExpbmVhclByb2dyZXNzIHByb2dyZXNzPXswLjV9IGJ1ZmZlcj17MC43NX0gLz5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BzbXVpL2xpbmVhci1wcm9ncmVzcyc7XG48L3NjcmlwdD5cbiIsIjxMaW5lYXJQcm9ncmVzcyBjbGFzcz1cIm15LWNvbG9yZWQtYmFyXCIgcHJvZ3Jlc3M9ezAuNX0gYnVmZmVyPXswLjc1fSAvPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQHNtdWkvbGluZWFyLXByb2dyZXNzJztcbjwvc2NyaXB0PlxuIiwiPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+TGluZWFyIFByb2dyZXNzIC0gU01VSTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48c2VjdGlvbj5cbiAgPGgyPkxpbmVhciBQcm9ncmVzczwvaDI+XG5cbiAgPHByZSBjbGFzcz1cImRlbW8tc3BhY2VkXCI+bnBtIGkgLUQgQHNtdWkvbGluZWFyLXByb2dyZXNzPC9wcmU+XG5cbiAgPERlbW8gY29tcG9uZW50PXtTaW1wbGV9IGZpbGU9XCJsaW5lYXItcHJvZ3Jlc3MvX1NpbXBsZS5zdmVsdGVcIiAvPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17QnVmZmVyZWR9IGZpbGU9XCJsaW5lYXItcHJvZ3Jlc3MvX0J1ZmZlcmVkLnN2ZWx0ZVwiPlxuICAgIEJ1ZmZlcmVkXG4gIDwvRGVtbz5cblxuICA8RGVtbyBjb21wb25lbnQ9e0luZGV0ZXJtaW5hdGV9IGZpbGU9XCJsaW5lYXItcHJvZ3Jlc3MvX0luZGV0ZXJtaW5hdGUuc3ZlbHRlXCI+XG4gICAgSW5kZXRlcm1pbmF0ZVxuICA8L0RlbW8+XG5cbiAgPERlbW9cbiAgICBjb21wb25lbnQ9e0NvbG9yZWR9XG4gICAgZmlsZXM9e1snbGluZWFyLXByb2dyZXNzL19Db2xvcmVkLnN2ZWx0ZScsICdsaW5lYXItcHJvZ3Jlc3MvX0NvbG9yZWQuc2NzcyddfVxuICA+XG4gICAgQ29sb3JlZCAodXNpbmcgU2FzcyBtaXhpbnMpXG4gIDwvRGVtbz5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZW1vLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaW1wbGUgZnJvbSAnLi9fU2ltcGxlLnN2ZWx0ZSc7XG4gIGltcG9ydCBCdWZmZXJlZCBmcm9tICcuL19CdWZmZXJlZC5zdmVsdGUnO1xuICBpbXBvcnQgSW5kZXRlcm1pbmF0ZSBmcm9tICcuL19JbmRldGVybWluYXRlLnN2ZWx0ZSc7XG4gIGltcG9ydCBDb2xvcmVkIGZyb20gJy4vX0NvbG9yZWQuc3ZlbHRlJztcbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBTzBCLEdBQU07c0NBQU4sR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FBTixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBSGQsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBY2pCLFFBQVEsR0FBRyxDQUFDO0tBQ1osTUFBTSxHQUFHLEtBQUs7S0FDZCxLQUFLO0NBRVQsT0FBTyxDQUFDLEtBQUs7O0NBRWIsU0FBUztFQUNQLGFBQWEsQ0FBQyxLQUFLOzs7VUFHWixLQUFLO2tCQUNaLFFBQVEsR0FBRyxDQUFDO2tCQUNaLE1BQU0sR0FBRyxLQUFLO0VBQ2QsYUFBYSxDQUFDLEtBQUs7O0VBQ25CLEtBQUssR0FBRyxXQUFXOztvQkFDakIsUUFBUSxJQUFJLElBQUk7O1FBRVosUUFBUSxJQUFJLENBQUM7cUJBQ2YsUUFBUSxHQUFHLENBQUM7cUJBQ1osTUFBTSxHQUFHLElBQUk7S0FDYixhQUFhLENBQUMsS0FBSzs7O0dBRXBCLEdBQUc7Ozs7Ozs7Ozs7O0VBakNnQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JDUE4sR0FBRyxVQUFVLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2NDQU0sR0FBRztZQUFVLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDUy9DLE1BQU07Ozs7Ozs7O2VBRU4sUUFBUTs7Ozs7Ozs7OztlQUlSLGFBQWE7Ozs7Ozs7Ozs7ZUFLakIsT0FBTztZQUNWLGlDQUFpQyxFQUFFLCtCQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
