import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, q as create_component, A as claim_component, H as mount_component, J as transition_in, K as transition_out, M as destroy_component, ag as validate_each_argument, aC as validate_each_keys, o as space, w as claim_space, F as insert_dev, u as detach_dev, a1 as empty, a4 as group_outros, aD as update_keyed_each, a5 as check_outros, aE as outro_and_destroy_block, t as text, z as claim_text, aw as set_data_dev } from './client.ec94238b.js';
import { D as DataTable, H as Head, B as Body, R as Row, C as Cell } from './Cell.e79ca75d.js';

/* src/routes/demo/data-table/iframe.svelte generated by Svelte v3.37.0 */

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	return child_ctx;
}

// (4:6) <Cell numeric>
function create_default_slot_12(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("ID");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "ID");
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
		source: "(4:6) <Cell numeric>",
		ctx
	});

	return block;
}

// (5:6) <Cell style="width: 100%;">
function create_default_slot_11(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Name");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Name");
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
		source: "(5:6) <Cell style=\\\"width: 100%;\\\">",
		ctx
	});

	return block;
}

// (6:6) <Cell>
function create_default_slot_10(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Username");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Username");
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
		source: "(6:6) <Cell>",
		ctx
	});

	return block;
}

// (7:6) <Cell>
function create_default_slot_9(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Email");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Email");
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
		source: "(7:6) <Cell>",
		ctx
	});

	return block;
}

// (3:4) <Row>
function create_default_slot_8(ctx) {
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
				numeric: true,
				$$slots: { default: [create_default_slot_12] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell1 = new Cell({
			props: {
				style: "width: 100%;",
				$$slots: { default: [create_default_slot_11] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell2 = new Cell({
			props: {
				$$slots: { default: [create_default_slot_10] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell3 = new Cell({
			props: {
				$$slots: { default: [create_default_slot_9] },
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

			if (dirty & /*$$scope*/ 16) {
				cell0_changes.$$scope = { dirty, ctx };
			}

			cell0.$set(cell0_changes);
			const cell1_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cell1_changes.$$scope = { dirty, ctx };
			}

			cell1.$set(cell1_changes);
			const cell2_changes = {};

			if (dirty & /*$$scope*/ 16) {
				cell2_changes.$$scope = { dirty, ctx };
			}

			cell2.$set(cell2_changes);
			const cell3_changes = {};

			if (dirty & /*$$scope*/ 16) {
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
		id: create_default_slot_8.name,
		type: "slot",
		source: "(3:4) <Row>",
		ctx
	});

	return block;
}

// (2:2) <Head>
function create_default_slot_7(ctx) {
	let row;
	let current;

	row = new Row({
			props: {
				$$slots: { default: [create_default_slot_8] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(row.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(row.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(row, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const row_changes = {};

			if (dirty & /*$$scope*/ 16) {
				row_changes.$$scope = { dirty, ctx };
			}

			row.$set(row_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(row.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(row.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(row, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_7.name,
		type: "slot",
		source: "(2:2) <Head>",
		ctx
	});

	return block;
}

// (13:8) <Cell numeric>
function create_default_slot_6(ctx) {
	let t_value = /*item*/ ctx[1].id + "";
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
			if (dirty & /*items*/ 1 && t_value !== (t_value = /*item*/ ctx[1].id + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_6.name,
		type: "slot",
		source: "(13:8) <Cell numeric>",
		ctx
	});

	return block;
}

// (14:8) <Cell>
function create_default_slot_5(ctx) {
	let t_value = /*item*/ ctx[1].name + "";
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
			if (dirty & /*items*/ 1 && t_value !== (t_value = /*item*/ ctx[1].name + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_5.name,
		type: "slot",
		source: "(14:8) <Cell>",
		ctx
	});

	return block;
}

// (15:8) <Cell>
function create_default_slot_4(ctx) {
	let t_value = /*item*/ ctx[1].username + "";
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
			if (dirty & /*items*/ 1 && t_value !== (t_value = /*item*/ ctx[1].username + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_4.name,
		type: "slot",
		source: "(15:8) <Cell>",
		ctx
	});

	return block;
}

// (16:8) <Cell>
function create_default_slot_3(ctx) {
	let t_value = /*item*/ ctx[1].email + "";
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
			if (dirty & /*items*/ 1 && t_value !== (t_value = /*item*/ ctx[1].email + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(16:8) <Cell>",
		ctx
	});

	return block;
}

// (12:6) <Row>
function create_default_slot_2(ctx) {
	let cell0;
	let t0;
	let cell1;
	let t1;
	let cell2;
	let t2;
	let cell3;
	let t3;
	let current;

	cell0 = new Cell({
			props: {
				numeric: true,
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell1 = new Cell({
			props: {
				$$slots: { default: [create_default_slot_5] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell2 = new Cell({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	cell3 = new Cell({
			props: {
				$$slots: { default: [create_default_slot_3] },
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
			t3 = space();
		},
		l: function claim(nodes) {
			claim_component(cell0.$$.fragment, nodes);
			t0 = claim_space(nodes);
			claim_component(cell1.$$.fragment, nodes);
			t1 = claim_space(nodes);
			claim_component(cell2.$$.fragment, nodes);
			t2 = claim_space(nodes);
			claim_component(cell3.$$.fragment, nodes);
			t3 = claim_space(nodes);
		},
		m: function mount(target, anchor) {
			mount_component(cell0, target, anchor);
			insert_dev(target, t0, anchor);
			mount_component(cell1, target, anchor);
			insert_dev(target, t1, anchor);
			mount_component(cell2, target, anchor);
			insert_dev(target, t2, anchor);
			mount_component(cell3, target, anchor);
			insert_dev(target, t3, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const cell0_changes = {};

			if (dirty & /*$$scope, items*/ 17) {
				cell0_changes.$$scope = { dirty, ctx };
			}

			cell0.$set(cell0_changes);
			const cell1_changes = {};

			if (dirty & /*$$scope, items*/ 17) {
				cell1_changes.$$scope = { dirty, ctx };
			}

			cell1.$set(cell1_changes);
			const cell2_changes = {};

			if (dirty & /*$$scope, items*/ 17) {
				cell2_changes.$$scope = { dirty, ctx };
			}

			cell2.$set(cell2_changes);
			const cell3_changes = {};

			if (dirty & /*$$scope, items*/ 17) {
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
			if (detaching) detach_dev(t3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(12:6) <Row>",
		ctx
	});

	return block;
}

// (11:4) {#each items as item (item.id)}
function create_each_block(key_1, ctx) {
	let first;
	let row;
	let current;

	row = new Row({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			first = empty();
			create_component(row.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			first = empty();
			claim_component(row.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			this.first = first;
		},
		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(row, target, anchor);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const row_changes = {};

			if (dirty & /*$$scope, items*/ 17) {
				row_changes.$$scope = { dirty, ctx };
			}

			row.$set(row_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(row.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(row.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(first);
			destroy_component(row, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(11:4) {#each items as item (item.id)}",
		ctx
	});

	return block;
}

// (10:2) <Body>
function create_default_slot_1(ctx) {
	let each_blocks = [];
	let each_1_lookup = new Map();
	let each_1_anchor;
	let current;
	let each_value = /*items*/ ctx[0];
	validate_each_argument(each_value);
	const get_key = ctx => /*item*/ ctx[1].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
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
		p: function update(ctx, dirty) {
			if (dirty & /*items*/ 1) {
				each_value = /*items*/ ctx[0];
				validate_each_argument(each_value);
				group_outros();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, each_1_anchor.parentNode, outro_and_destroy_block, create_each_block, each_1_anchor, get_each_context);
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
			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d(detaching);
			}

			if (detaching) detach_dev(each_1_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(10:2) <Body>",
		ctx
	});

	return block;
}

// (1:0) <DataTable stickyHeader table$aria-label="User list" style="width: 100%;">
function create_default_slot(ctx) {
	let head;
	let t;
	let body;
	let current;

	head = new Head({
			props: {
				$$slots: { default: [create_default_slot_7] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	body = new Body({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(head.$$.fragment);
			t = space();
			create_component(body.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(head.$$.fragment, nodes);
			t = claim_space(nodes);
			claim_component(body.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(head, target, anchor);
			insert_dev(target, t, anchor);
			mount_component(body, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const head_changes = {};

			if (dirty & /*$$scope*/ 16) {
				head_changes.$$scope = { dirty, ctx };
			}

			head.$set(head_changes);
			const body_changes = {};

			if (dirty & /*$$scope, items*/ 17) {
				body_changes.$$scope = { dirty, ctx };
			}

			body.$set(body_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(head.$$.fragment, local);
			transition_in(body.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(head.$$.fragment, local);
			transition_out(body.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(head, detaching);
			if (detaching) detach_dev(t);
			destroy_component(body, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(1:0) <DataTable stickyHeader table$aria-label=\\\"User list\\\" style=\\\"width: 100%;\\\">",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let datatable;
	let current;

	datatable = new DataTable({
			props: {
				stickyHeader: true,
				"table$aria-label": "User list",
				style: "width: 100%;",
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			create_component(datatable.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(datatable.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(datatable, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const datatable_changes = {};

			if (dirty & /*$$scope, items*/ 17) {
				datatable_changes.$$scope = { dirty, ctx };
			}

			datatable.$set(datatable_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(datatable.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(datatable.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(datatable, detaching);
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
	validate_slots("Iframe", slots, []);
	let items = [];

	if (typeof fetch !== "undefined") {
		fetch("https://gist.githubusercontent.com/hperrin/e24a4ebd9afdf2a8c283338ae5160a62/raw/dcbf8e6382db49b0dcab70b22f56b1cc444f26d4/users.json").then(response => response.json()).then(json => $$invalidate(0, items = json));
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Iframe> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ DataTable, Head, Body, Row, Cell, items });

	$$self.$inject_state = $$props => {
		if ("items" in $$props) $$invalidate(0, items = $$props.items);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [items];
}

class Iframe extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Iframe",
			options,
			id: create_fragment.name
		});
	}
}

export default Iframe;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWZyYW1lLjBkMDg1NTkxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2RlbW8vZGF0YS10YWJsZS9pZnJhbWUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxEYXRhVGFibGUgc3RpY2t5SGVhZGVyIHRhYmxlJGFyaWEtbGFiZWw9XCJVc2VyIGxpc3RcIiBzdHlsZT1cIndpZHRoOiAxMDAlO1wiPlxuICA8SGVhZD5cbiAgICA8Um93PlxuICAgICAgPENlbGwgbnVtZXJpYz5JRDwvQ2VsbD5cbiAgICAgIDxDZWxsIHN0eWxlPVwid2lkdGg6IDEwMCU7XCI+TmFtZTwvQ2VsbD5cbiAgICAgIDxDZWxsPlVzZXJuYW1lPC9DZWxsPlxuICAgICAgPENlbGw+RW1haWw8L0NlbGw+XG4gICAgPC9Sb3c+XG4gIDwvSGVhZD5cbiAgPEJvZHk+XG4gICAgeyNlYWNoIGl0ZW1zIGFzIGl0ZW0gKGl0ZW0uaWQpfVxuICAgICAgPFJvdz5cbiAgICAgICAgPENlbGwgbnVtZXJpYz57aXRlbS5pZH08L0NlbGw+XG4gICAgICAgIDxDZWxsPntpdGVtLm5hbWV9PC9DZWxsPlxuICAgICAgICA8Q2VsbD57aXRlbS51c2VybmFtZX08L0NlbGw+XG4gICAgICAgIDxDZWxsPntpdGVtLmVtYWlsfTwvQ2VsbD5cbiAgICAgIDwvUm93PlxuICAgIHsvZWFjaH1cbiAgPC9Cb2R5PlxuPC9EYXRhVGFibGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBEYXRhVGFibGUsIHsgSGVhZCwgQm9keSwgUm93LCBDZWxsIH0gZnJvbSAnQHNtdWkvZGF0YS10YWJsZSc7XG5cbiAgbGV0IGl0ZW1zID0gW107XG5cbiAgaWYgKHR5cGVvZiBmZXRjaCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBmZXRjaChcbiAgICAgICdodHRwczovL2dpc3QuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2hwZXJyaW4vZTI0YTRlYmQ5YWZkZjJhOGMyODMzMzhhZTUxNjBhNjIvcmF3L2RjYmY4ZTYzODJkYjQ5YjBkY2FiNzBiMjJmNTZiMWNjNDQ0ZjI2ZDQvdXNlcnMuanNvbidcbiAgICApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChqc29uKSA9PiAoaXRlbXMgPSBqc29uKSk7XG4gIH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC8qIFJlc2V0IHNvbWUgb2YgdGhlIGRlbW8gYXBwIHN0eWxlcyB0aGF0IGludGVyZmVyZS4gKi9cbiAgOmdsb2JhbChodG1sKSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgOmdsb2JhbCgjc2FwcGVyLCBib2R5KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQVl1QixHQUFJLElBQUMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OERBQVAsR0FBSSxJQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUNmLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs4REFBVCxHQUFJLElBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQ1QsR0FBSSxJQUFDLFFBQVE7Ozs7Ozs7Ozs7Ozs7OzhEQUFiLEdBQUksSUFBQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFDYixHQUFJLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OERBQVYsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0QkFMZCxHQUFLOztpQ0FBVSxHQUFJLElBQUMsRUFBRTs7O2dDQUEzQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQUFDLEdBQUs7Ozs7Ozs7Ozs7O2tDQUFWLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FjSixLQUFLOztZQUVFLEtBQUssS0FBSyxXQUFXO0VBQzlCLEtBQUssQ0FDSCxxSUFBcUksRUFFcEksSUFBSSxDQUFFLFFBQVEsSUFBSyxRQUFRLENBQUMsSUFBSSxJQUNoQyxJQUFJLENBQUUsSUFBSSxvQkFBTSxLQUFLLEdBQUcsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=