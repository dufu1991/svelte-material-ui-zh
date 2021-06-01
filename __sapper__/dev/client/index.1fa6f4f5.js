import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, C as CommonIcon, a6 as binding_callbacks, ak as bind, p as element, q as create_component, o as space, t as text, x as claim_element, y as children, A as claim_component, w as claim_space, u as detach_dev, z as claim_text, B as set_style, D as add_location, E as attr_dev, F as insert_dev, H as mount_component, G as append_dev, aw as set_data_dev, J as transition_in, K as transition_out, M as destroy_component, al as add_flush_callback, r as query_selector_all } from './client.ec94238b.js';
import { D as Demo } from './Demo.9c515360.js';
import { W as Wrapper } from './Wrapper.fc581bd8.js';
import { B as Button_1 } from './Button.d66ce348.js';
import { F as Fab } from './Fab.5ce9de7b.js';
import { C as Chip, S as Set_1, T as Text } from './Text.abd87972.js';
import { C as Checkbox } from './Checkbox.52871e38.js';
import { R as Radio } from './Radio.52add3e3.js';
import { C as CommonLabel } from './CommonLabel.e3297b41.js';

/* src/routes/demo/touch-target/_Simple.svelte generated by Svelte v3.37.0 */
const file$1 = "src/routes/demo/touch-target/_Simple.svelte";

// (4:6) <Label>
function create_default_slot_12(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Button");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Button");
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
		source: "(4:6) <Label>",
		ctx
	});

	return block;
}

// (3:4) <Button on:click={() => clicked++} touch>
function create_default_slot_11(ctx) {
	let label;
	let current;

	label = new CommonLabel({
			props: {
				$$slots: { default: [create_default_slot_12] },
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

			if (dirty & /*$$scope*/ 1024) {
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
		id: create_default_slot_11.name,
		type: "slot",
		source: "(3:4) <Button on:click={() => clicked++} touch>",
		ctx
	});

	return block;
}

// (2:2) <Wrapper>
function create_default_slot_10(ctx) {
	let button;
	let current;

	button = new Button_1({
			props: {
				touch: true,
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*click_handler*/ ctx[3]);

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
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 1024) {
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
		id: create_default_slot_10.name,
		type: "slot",
		source: "(2:2) <Wrapper>",
		ctx
	});

	return block;
}

// (9:6) <Icon class="material-icons">
function create_default_slot_9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "favorite");
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
		source: "(9:6) <Icon class=\\\"material-icons\\\">",
		ctx
	});

	return block;
}

// (8:4) <Fab on:click={() => clicked++} mini touch>
function create_default_slot_8(ctx) {
	let icon;
	let current;

	icon = new CommonIcon({
			props: {
				class: "material-icons",
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

			if (dirty & /*$$scope*/ 1024) {
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
		source: "(8:4) <Fab on:click={() => clicked++} mini touch>",
		ctx
	});

	return block;
}

// (7:2) <Wrapper>
function create_default_slot_7(ctx) {
	let fab;
	let current;

	fab = new Fab({
			props: {
				mini: true,
				touch: true,
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	fab.$on("click", /*click_handler_1*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(fab.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(fab.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(fab, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const fab_changes = {};

			if (dirty & /*$$scope*/ 1024) {
				fab_changes.$$scope = { dirty, ctx };
			}

			fab.$set(fab_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(fab.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(fab.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(fab, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(7:2) <Wrapper>",
		ctx
	});

	return block;
}

// (15:8) <Text tabindex="0">
function create_default_slot_6(ctx) {
	let t_value = /*chip*/ ctx[9] + "";
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
			if (dirty & /*chip*/ 512 && t_value !== (t_value = /*chip*/ ctx[9] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(15:8) <Text tabindex=\\\"0\\\">",
		ctx
	});

	return block;
}

// (14:6) <Chip {chip} on:click={() => clicked++} touch>
function create_default_slot_5(ctx) {
	let text_1;
	let current;

	text_1 = new Text({
			props: {
				tabindex: "0",
				$$slots: { default: [create_default_slot_6] },
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

			if (dirty & /*$$scope, chip*/ 1536) {
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
		id: create_default_slot_5.name,
		type: "slot",
		source: "(14:6) <Chip {chip} on:click={() => clicked++} touch>",
		ctx
	});

	return block;
}

// (13:4) <Set chips={['Chip']} let:chip style="display: inline-flex;">
function create_default_slot_4(ctx) {
	let chip;
	let current;

	chip = new Chip({
			props: {
				chip: /*chip*/ ctx[9],
				touch: true,
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	chip.$on("click", /*click_handler_2*/ ctx[5]);

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
			if (dirty & /*chip*/ 512) chip_changes.chip = /*chip*/ ctx[9];

			if (dirty & /*$$scope, chip*/ 1536) {
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
		id: create_default_slot_4.name,
		type: "slot",
		source: "(13:4) <Set chips={['Chip']} let:chip style=\\\"display: inline-flex;\\\">",
		ctx
	});

	return block;
}

// (12:2) <Wrapper>
function create_default_slot_3(ctx) {
	let set;
	let current;

	set = new Set_1({
			props: {
				chips: ["Chip"],
				style: "display: inline-flex;",
				$$slots: {
					default: [
						create_default_slot_4,
						({ chip }) => ({ 9: chip }),
						({ chip }) => chip ? 512 : 0
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
		p: function update(ctx, dirty) {
			const set_changes = {};

			if (dirty & /*$$scope, chip, clicked*/ 1537) {
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
		id: create_default_slot_3.name,
		type: "slot",
		source: "(12:2) <Wrapper>",
		ctx
	});

	return block;
}

// (19:2) <Wrapper>
function create_default_slot_2(ctx) {
	let checkbox;
	let updating_checked;
	let current;

	function checkbox_checked_binding(value) {
		/*checkbox_checked_binding*/ ctx[6](value);
	}

	let checkbox_props = { touch: true };

	if (/*checked*/ ctx[1] !== void 0) {
		checkbox_props.checked = /*checked*/ ctx[1];
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

			if (!updating_checked && dirty & /*checked*/ 2) {
				updating_checked = true;
				checkbox_changes.checked = /*checked*/ ctx[1];
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
		id: create_default_slot_2.name,
		type: "slot",
		source: "(19:2) <Wrapper>",
		ctx
	});

	return block;
}

// (22:2) <Wrapper>
function create_default_slot_1(ctx) {
	let radio;
	let updating_group;
	let current;

	function radio_group_binding(value) {
		/*radio_group_binding*/ ctx[7](value);
	}

	let radio_props = { value: "on", touch: true };

	if (/*selected*/ ctx[2] !== void 0) {
		radio_props.group = /*selected*/ ctx[2];
	}

	radio = new Radio({ props: radio_props, $$inline: true });
	binding_callbacks.push(() => bind(radio, "group", radio_group_binding));

	const block = {
		c: function create() {
			create_component(radio.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(radio.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(radio, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const radio_changes = {};

			if (!updating_group && dirty & /*selected*/ 4) {
				updating_group = true;
				radio_changes.group = /*selected*/ ctx[2];
				add_flush_callback(() => updating_group = false);
			}

			radio.$set(radio_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(radio.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(radio.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(radio, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(22:2) <Wrapper>",
		ctx
	});

	return block;
}

// (25:2) <Wrapper>
function create_default_slot$1(ctx) {
	let radio;
	let updating_group;
	let current;

	function radio_group_binding_1(value) {
		/*radio_group_binding_1*/ ctx[8](value);
	}

	let radio_props = { value: "off", touch: true };

	if (/*selected*/ ctx[2] !== void 0) {
		radio_props.group = /*selected*/ ctx[2];
	}

	radio = new Radio({ props: radio_props, $$inline: true });
	binding_callbacks.push(() => bind(radio, "group", radio_group_binding_1));

	const block = {
		c: function create() {
			create_component(radio.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(radio.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(radio, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const radio_changes = {};

			if (!updating_group && dirty & /*selected*/ 4) {
				updating_group = true;
				radio_changes.group = /*selected*/ ctx[2];
				add_flush_callback(() => updating_group = false);
			}

			radio.$set(radio_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(radio.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(radio.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(radio, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot$1.name,
		type: "slot",
		source: "(25:2) <Wrapper>",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div;
	let wrapper0;
	let t0;
	let wrapper1;
	let t1;
	let wrapper2;
	let t2;
	let wrapper3;
	let t3;
	let wrapper4;
	let t4;
	let wrapper5;
	let t5;
	let pre;
	let t6;
	let t7;
	let t8;
	let t9;
	let t10;
	let t11;
	let current;

	wrapper0 = new Wrapper({
			props: {
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	wrapper1 = new Wrapper({
			props: {
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	wrapper2 = new Wrapper({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	wrapper3 = new Wrapper({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	wrapper4 = new Wrapper({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	wrapper5 = new Wrapper({
			props: {
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			create_component(wrapper0.$$.fragment);
			t0 = space();
			create_component(wrapper1.$$.fragment);
			t1 = space();
			create_component(wrapper2.$$.fragment);
			t2 = space();
			create_component(wrapper3.$$.fragment);
			t3 = space();
			create_component(wrapper4.$$.fragment);
			t4 = space();
			create_component(wrapper5.$$.fragment);
			t5 = space();
			pre = element("pre");
			t6 = text("Clicked: ");
			t7 = text(/*clicked*/ ctx[0]);
			t8 = text(", Checked: ");
			t9 = text(/*checked*/ ctx[1]);
			t10 = text(", Selected: ");
			t11 = text(/*selected*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true });
			var div_nodes = children(div);
			claim_component(wrapper0.$$.fragment, div_nodes);
			t0 = claim_space(div_nodes);
			claim_component(wrapper1.$$.fragment, div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(wrapper2.$$.fragment, div_nodes);
			t2 = claim_space(div_nodes);
			claim_component(wrapper3.$$.fragment, div_nodes);
			t3 = claim_space(div_nodes);
			claim_component(wrapper4.$$.fragment, div_nodes);
			t4 = claim_space(div_nodes);
			claim_component(wrapper5.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			pre = claim_element(nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t6 = claim_text(pre_nodes, "Clicked: ");
			t7 = claim_text(pre_nodes, /*clicked*/ ctx[0]);
			t8 = claim_text(pre_nodes, ", Checked: ");
			t9 = claim_text(pre_nodes, /*checked*/ ctx[1]);
			t10 = claim_text(pre_nodes, ", Selected: ");
			t11 = claim_text(pre_nodes, /*selected*/ ctx[2]);
			pre_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(div, "display", "flex");
			set_style(div, "flex-wrap", "wrap");
			set_style(div, "align-items", "center");
			add_location(div, file$1, 0, 0, 0);
			attr_dev(pre, "class", "status");
			add_location(pre, file$1, 29, 0, 755);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(wrapper0, div, null);
			append_dev(div, t0);
			mount_component(wrapper1, div, null);
			append_dev(div, t1);
			mount_component(wrapper2, div, null);
			append_dev(div, t2);
			mount_component(wrapper3, div, null);
			append_dev(div, t3);
			mount_component(wrapper4, div, null);
			append_dev(div, t4);
			mount_component(wrapper5, div, null);
			insert_dev(target, t5, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t6);
			append_dev(pre, t7);
			append_dev(pre, t8);
			append_dev(pre, t9);
			append_dev(pre, t10);
			append_dev(pre, t11);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const wrapper0_changes = {};

			if (dirty & /*$$scope, clicked*/ 1025) {
				wrapper0_changes.$$scope = { dirty, ctx };
			}

			wrapper0.$set(wrapper0_changes);
			const wrapper1_changes = {};

			if (dirty & /*$$scope, clicked*/ 1025) {
				wrapper1_changes.$$scope = { dirty, ctx };
			}

			wrapper1.$set(wrapper1_changes);
			const wrapper2_changes = {};

			if (dirty & /*$$scope, clicked*/ 1025) {
				wrapper2_changes.$$scope = { dirty, ctx };
			}

			wrapper2.$set(wrapper2_changes);
			const wrapper3_changes = {};

			if (dirty & /*$$scope, checked*/ 1026) {
				wrapper3_changes.$$scope = { dirty, ctx };
			}

			wrapper3.$set(wrapper3_changes);
			const wrapper4_changes = {};

			if (dirty & /*$$scope, selected*/ 1028) {
				wrapper4_changes.$$scope = { dirty, ctx };
			}

			wrapper4.$set(wrapper4_changes);
			const wrapper5_changes = {};

			if (dirty & /*$$scope, selected*/ 1028) {
				wrapper5_changes.$$scope = { dirty, ctx };
			}

			wrapper5.$set(wrapper5_changes);
			if (!current || dirty & /*clicked*/ 1) set_data_dev(t7, /*clicked*/ ctx[0]);
			if (!current || dirty & /*checked*/ 2) set_data_dev(t9, /*checked*/ ctx[1]);
			if (!current || dirty & /*selected*/ 4) set_data_dev(t11, /*selected*/ ctx[2]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(wrapper0.$$.fragment, local);
			transition_in(wrapper1.$$.fragment, local);
			transition_in(wrapper2.$$.fragment, local);
			transition_in(wrapper3.$$.fragment, local);
			transition_in(wrapper4.$$.fragment, local);
			transition_in(wrapper5.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(wrapper0.$$.fragment, local);
			transition_out(wrapper1.$$.fragment, local);
			transition_out(wrapper2.$$.fragment, local);
			transition_out(wrapper3.$$.fragment, local);
			transition_out(wrapper4.$$.fragment, local);
			transition_out(wrapper5.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(wrapper0);
			destroy_component(wrapper1);
			destroy_component(wrapper2);
			destroy_component(wrapper3);
			destroy_component(wrapper4);
			destroy_component(wrapper5);
			if (detaching) detach_dev(t5);
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
	validate_slots("Simple", slots, []);
	let clicked = 0;
	let checked = false;
	let selected = "on";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Simple> was created with unknown prop '${key}'`);
	});

	const click_handler = () => $$invalidate(0, clicked++, clicked);
	const click_handler_1 = () => $$invalidate(0, clicked++, clicked);
	const click_handler_2 = () => $$invalidate(0, clicked++, clicked);

	function checkbox_checked_binding(value) {
		checked = value;
		$$invalidate(1, checked);
	}

	function radio_group_binding(value) {
		selected = value;
		$$invalidate(2, selected);
	}

	function radio_group_binding_1(value) {
		selected = value;
		$$invalidate(2, selected);
	}

	$$self.$capture_state = () => ({
		Wrapper,
		Button: Button_1,
		Fab,
		Chip,
		Set: Set_1,
		Text,
		Checkbox,
		Radio,
		Label: CommonLabel,
		Icon: CommonIcon,
		clicked,
		checked,
		selected
	});

	$$self.$inject_state = $$props => {
		if ("clicked" in $$props) $$invalidate(0, clicked = $$props.clicked);
		if ("checked" in $$props) $$invalidate(1, checked = $$props.checked);
		if ("selected" in $$props) $$invalidate(2, selected = $$props.selected);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		clicked,
		checked,
		selected,
		click_handler,
		click_handler_1,
		click_handler_2,
		checkbox_checked_binding,
		radio_group_binding,
		radio_group_binding_1
	];
}

class Simple extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Simple",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/demo/touch-target/index.svelte generated by Svelte v3.37.0 */
const file = "src/routes/demo/touch-target/index.svelte";

// (10:2) <Demo component={Simple} file="touch-target/_Simple.svelte">
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Touch Target Wrapper");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Touch Target Wrapper");
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
		source: "(10:2) <Demo component={Simple} file=\\\"touch-target/_Simple.svelte\\\">",
		ctx
	});

	return block;
}

// (12:4) <svelte:fragment slot="subtitle">
function create_subtitle_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("These interactive components all have increased touch targets, and they\n      won't overlap because of the touch target wrapper.");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "These interactive components all have increased touch targets, and they\n      won't overlap because of the touch target wrapper.");
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
		source: "(12:4) <svelte:fragment slot=\\\"subtitle\\\">",
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
	let demo;
	let current;

	demo = new Demo({
			props: {
				component: Simple,
				file: "touch-target/_Simple.svelte",
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
			t1 = text("Touch Target");
			t2 = space();
			pre = element("pre");
			t3 = text("npm i -D @smui/touch-target");
			t4 = space();
			create_component(demo.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-154r17q\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Touch Target");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			pre = claim_element(section_nodes, "PRE", { class: true });
			var pre_nodes = children(pre);
			t3 = claim_text(pre_nodes, "npm i -D @smui/touch-target");
			pre_nodes.forEach(detach_dev);
			t4 = claim_space(section_nodes);
			claim_component(demo.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Touch Target - SMUI";
			add_location(h2, file, 5, 2, 79);
			attr_dev(pre, "class", "demo-spaced");
			add_location(pre, file, 7, 2, 104);
			add_location(section, file, 4, 0, 67);
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
			mount_component(demo, section, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const demo_changes = {};

			if (dirty & /*$$scope*/ 1) {
				demo_changes.$$scope = { dirty, ctx };
			}

			demo.$set(demo_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(demo.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(demo.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section);
			destroy_component(demo);
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
	validate_slots("Touch_target", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Touch_target> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Demo, Simple });
	return [];
}

class Touch_target extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Touch_target",
			options,
			id: create_fragment.name
		});
	}
}

export default Touch_target;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMWZhNmY0ZjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvZGVtby90b3VjaC10YXJnZXQvX1NpbXBsZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vdG91Y2gtdGFyZ2V0L2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICA8V3JhcHBlcj5cbiAgICA8QnV0dG9uIG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHRvdWNoPlxuICAgICAgPExhYmVsPkJ1dHRvbjwvTGFiZWw+XG4gICAgPC9CdXR0b24+XG4gIDwvV3JhcHBlcj5cbiAgPFdyYXBwZXI+XG4gICAgPEZhYiBvbjpjbGljaz17KCkgPT4gY2xpY2tlZCsrfSBtaW5pIHRvdWNoPlxuICAgICAgPEljb24gY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmZhdm9yaXRlPC9JY29uPlxuICAgIDwvRmFiPlxuICA8L1dyYXBwZXI+XG4gIDxXcmFwcGVyPlxuICAgIDxTZXQgY2hpcHM9e1snQ2hpcCddfSBsZXQ6Y2hpcCBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4O1wiPlxuICAgICAgPENoaXAge2NoaXB9IG9uOmNsaWNrPXsoKSA9PiBjbGlja2VkKyt9IHRvdWNoPlxuICAgICAgICA8VGV4dCB0YWJpbmRleD1cIjBcIj57Y2hpcH08L1RleHQ+XG4gICAgICA8L0NoaXA+XG4gICAgPC9TZXQ+XG4gIDwvV3JhcHBlcj5cbiAgPFdyYXBwZXI+XG4gICAgPENoZWNrYm94IGJpbmQ6Y2hlY2tlZCB0b3VjaCAvPlxuICA8L1dyYXBwZXI+XG4gIDxXcmFwcGVyPlxuICAgIDxSYWRpbyBiaW5kOmdyb3VwPXtzZWxlY3RlZH0gdmFsdWU9eydvbid9IHRvdWNoIC8+XG4gIDwvV3JhcHBlcj5cbiAgPFdyYXBwZXI+XG4gICAgPFJhZGlvIGJpbmQ6Z3JvdXA9e3NlbGVjdGVkfSB2YWx1ZT17J29mZid9IHRvdWNoIC8+XG4gIDwvV3JhcHBlcj5cbjwvZGl2PlxuXG48cHJlXG4gIGNsYXNzPVwic3RhdHVzXCI+Q2xpY2tlZDoge2NsaWNrZWR9LCBDaGVja2VkOiB7Y2hlY2tlZH0sIFNlbGVjdGVkOiB7c2VsZWN0ZWR9PC9wcmU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBXcmFwcGVyIGZyb20gJ0BzbXVpL3RvdWNoLXRhcmdldCc7XG4gIGltcG9ydCBCdXR0b24gZnJvbSAnQHNtdWkvYnV0dG9uJztcbiAgaW1wb3J0IEZhYiBmcm9tICdAc211aS9mYWInO1xuICBpbXBvcnQgQ2hpcCwgeyBTZXQsIFRleHQgfSBmcm9tICdAc211aS9jaGlwcyc7XG4gIGltcG9ydCBDaGVja2JveCBmcm9tICdAc211aS9jaGVja2JveCc7XG4gIGltcG9ydCBSYWRpbyBmcm9tICdAc211aS9yYWRpbyc7XG4gIGltcG9ydCB7IExhYmVsLCBJY29uIH0gZnJvbSAnQHNtdWkvY29tbW9uJztcblxuICBsZXQgY2xpY2tlZCA9IDA7XG4gIGxldCBjaGVja2VkID0gZmFsc2U7XG4gIGxldCBzZWxlY3RlZCA9ICdvbic7XG48L3NjcmlwdD5cbiIsIjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlRvdWNoIFRhcmdldCAtIFNNVUk8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPHNlY3Rpb24+XG4gIDxoMj5Ub3VjaCBUYXJnZXQ8L2gyPlxuXG4gIDxwcmUgY2xhc3M9XCJkZW1vLXNwYWNlZFwiPm5wbSBpIC1EIEBzbXVpL3RvdWNoLXRhcmdldDwvcHJlPlxuXG4gIDxEZW1vIGNvbXBvbmVudD17U2ltcGxlfSBmaWxlPVwidG91Y2gtdGFyZ2V0L19TaW1wbGUuc3ZlbHRlXCI+XG4gICAgVG91Y2ggVGFyZ2V0IFdyYXBwZXJcbiAgICA8c3ZlbHRlOmZyYWdtZW50IHNsb3Q9XCJzdWJ0aXRsZVwiPlxuICAgICAgVGhlc2UgaW50ZXJhY3RpdmUgY29tcG9uZW50cyBhbGwgaGF2ZSBpbmNyZWFzZWQgdG91Y2ggdGFyZ2V0cywgYW5kIHRoZXlcbiAgICAgIHdvbid0IG92ZXJsYXAgYmVjYXVzZSBvZiB0aGUgdG91Y2ggdGFyZ2V0IHdyYXBwZXIuXG4gICAgPC9zdmVsdGU6ZnJhZ21lbnQ+XG4gIDwvRGVtbz5cbjwvc2VjdGlvbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IERlbW8gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9EZW1vLnN2ZWx0ZSc7XG4gIGltcG9ydCBTaW1wbGUgZnJvbSAnLi9fU2ltcGxlLnN2ZWx0ZSc7XG48L3NjcmlwdD5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBYzRCLEdBQUk7Ozs7Ozs7Ozs7Ozs7OytEQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUZmLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFVaUIsSUFBSTs7a0JBQXJCLEdBQVE7bUNBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFHUyxLQUFLOztrQkFBdEIsR0FBUTttQ0FBUixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUFSLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQUtKLEdBQU87O3lCQUFhLEdBQU87OzJCQUFjLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQWpELEdBQU87OzBDQUFhLEdBQU87OzRDQUFjLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1RUFBakQsR0FBTzt1RUFBYSxHQUFPOzBFQUFjLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQVd0RSxPQUFPLEdBQUcsQ0FBQztLQUNYLE9BQU8sR0FBRyxLQUFLO0tBQ2YsUUFBUSxHQUFHLElBQUk7Ozs7Ozs7NkNBekNPLE9BQU87K0NBS1YsT0FBTzsrQ0FNRyxPQUFPOzs7Ozs7OztFQVNuQixRQUFROzs7OztFQUdSLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VDaEJaLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
