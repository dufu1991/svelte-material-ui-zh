import { Q as listen, R as bubble, U as prevent_default, V as stop_propagation, S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, aF as globals, a7 as create_slot, $ as assign, W as compute_rest_props, v as validate_slots, Y as get_current_component, X as getContext, ay as validate_store, az as component_subscribe, Z as setContext, ah as onMount, _ as onDestroy, a0 as exclude_internal_props, aA as writable, aB as set_store_value, p as element, o as space, x as claim_element, y as children, u as detach_dev, w as claim_space, E as attr_dev, D as add_location, F as insert_dev, G as append_dev, a8 as update_slot, J as transition_in, K as transition_out, a9 as set_attributes, aa as action_destroyer, ax as listen_dev, a2 as get_spread_update, ab as is_function, a4 as group_outros, a5 as check_outros, ac as run_all, av as compute_slots, a6 as binding_callbacks, a1 as empty, t as text, z as claim_text, aw as set_data_dev } from './client.ec94238b.js';

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

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        if (matches(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
function matches(element, selector) {
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
    matches: matches,
    estimateScrollWidth: estimateScrollWidth
});

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
 * CSS class names used in component.
 */
var cssClasses = {
    CELL: 'mdc-data-table__cell',
    CELL_NUMERIC: 'mdc-data-table__cell--numeric',
    CONTENT: 'mdc-data-table__content',
    HEADER_CELL: 'mdc-data-table__header-cell',
    HEADER_CELL_LABEL: 'mdc-data-table__header-cell-label',
    HEADER_CELL_SORTED: 'mdc-data-table__header-cell--sorted',
    HEADER_CELL_SORTED_DESCENDING: 'mdc-data-table__header-cell--sorted-descending',
    HEADER_CELL_WITH_SORT: 'mdc-data-table__header-cell--with-sort',
    HEADER_CELL_WRAPPER: 'mdc-data-table__header-cell-wrapper',
    HEADER_ROW: 'mdc-data-table__header-row',
    HEADER_ROW_CHECKBOX: 'mdc-data-table__header-row-checkbox',
    IN_PROGRESS: 'mdc-data-table--in-progress',
    LINEAR_PROGRESS: 'mdc-data-table__linear-progress',
    PAGINATION_ROWS_PER_PAGE_LABEL: 'mdc-data-table__pagination-rows-per-page-label',
    PAGINATION_ROWS_PER_PAGE_SELECT: 'mdc-data-table__pagination-rows-per-page-select',
    PROGRESS_INDICATOR: 'mdc-data-table__progress-indicator',
    ROOT: 'mdc-data-table',
    ROW: 'mdc-data-table__row',
    ROW_CHECKBOX: 'mdc-data-table__row-checkbox',
    ROW_SELECTED: 'mdc-data-table__row--selected',
    SORT_ICON_BUTTON: 'mdc-data-table__sort-icon-button',
    SORT_STATUS_LABEL: 'mdc-data-table__sort-status-label',
    TABLE_CONTAINER: 'mdc-data-table__table-container',
};
/**
 * DOM attributes used in component.
 */
var attributes = {
    ARIA_SELECTED: 'aria-selected',
    ARIA_SORT: 'aria-sort',
};
/**
 * List of data attributes used in component.
 */
var dataAttributes = {
    COLUMN_ID: 'data-column-id',
    ROW_ID: 'data-row-id',
};
/**
 * CSS selectors used in component.
 */
var selectors = {
    CONTENT: "." + cssClasses.CONTENT,
    HEADER_CELL: "." + cssClasses.HEADER_CELL,
    HEADER_CELL_WITH_SORT: "." + cssClasses.HEADER_CELL_WITH_SORT,
    HEADER_ROW: "." + cssClasses.HEADER_ROW,
    HEADER_ROW_CHECKBOX: "." + cssClasses.HEADER_ROW_CHECKBOX,
    PROGRESS_INDICATOR: "." + cssClasses.PROGRESS_INDICATOR,
    ROW: "." + cssClasses.ROW,
    ROW_CHECKBOX: "." + cssClasses.ROW_CHECKBOX,
    ROW_SELECTED: "." + cssClasses.ROW_SELECTED,
    SORT_ICON_BUTTON: "." + cssClasses.SORT_ICON_BUTTON,
    SORT_STATUS_LABEL: "." + cssClasses.SORT_STATUS_LABEL,
};
/**
 * Attributes and selectors used in component.
 * @deprecated Use `attributes`, `dataAttributes` and `selectors` instead.
 */
var strings = {
    ARIA_SELECTED: attributes.ARIA_SELECTED,
    ARIA_SORT: attributes.ARIA_SORT,
    DATA_ROW_ID_ATTR: dataAttributes.ROW_ID,
    HEADER_ROW_CHECKBOX_SELECTOR: selectors.HEADER_ROW_CHECKBOX,
    ROW_CHECKBOX_SELECTOR: selectors.ROW_CHECKBOX,
    ROW_SELECTED_SELECTOR: selectors.ROW_SELECTED,
    ROW_SELECTOR: selectors.ROW,
};
/**
 * Sort values defined by ARIA.
 * See https://www.w3.org/WAI/PF/aria/states_and_properties#aria-sort
 */
var SortValue;
(function (SortValue) {
    // Items are sorted in ascending order by this column.
    SortValue["ASCENDING"] = "ascending";
    // Items are sorted in descending order by this column.
    SortValue["DESCENDING"] = "descending";
    // There is no defined sort applied to the column.
    SortValue["NONE"] = "none";
    // A sort algorithm other than ascending or descending has been applied.
    SortValue["OTHER"] = "other";
})(SortValue || (SortValue = {}));

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
 * The Foundation of data table component containing pure business logic, any
 * logic requiring DOM manipulation are delegated to adapter methods.
 */
var MDCDataTableFoundation = /** @class */ (function (_super) {
    __extends(MDCDataTableFoundation, _super);
    function MDCDataTableFoundation(adapter) {
        return _super.call(this, __assign(__assign({}, MDCDataTableFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCDataTableFoundation, "defaultAdapter", {
        get: function () {
            return {
                addClass: function () { return undefined; },
                addClassAtRowIndex: function () { return undefined; },
                getAttributeByHeaderCellIndex: function () { return ''; },
                getHeaderCellCount: function () { return 0; },
                getHeaderCellElements: function () { return []; },
                getRowCount: function () { return 0; },
                getRowElements: function () { return []; },
                getRowIdAtIndex: function () { return ''; },
                getRowIndexByChildElement: function () { return 0; },
                getSelectedRowCount: function () { return 0; },
                getTableContainerHeight: function () { return 0; },
                getTableHeaderHeight: function () { return 0; },
                isCheckboxAtRowIndexChecked: function () { return false; },
                isHeaderRowCheckboxChecked: function () { return false; },
                isRowsSelectable: function () { return false; },
                notifyRowSelectionChanged: function () { return undefined; },
                notifySelectedAll: function () { return undefined; },
                notifySortAction: function () { return undefined; },
                notifyUnselectedAll: function () { return undefined; },
                registerHeaderRowCheckbox: function () { return undefined; },
                registerRowCheckboxes: function () { return undefined; },
                removeClass: function () { return undefined; },
                removeClassAtRowIndex: function () { return undefined; },
                removeClassNameByHeaderCellIndex: function () { return undefined; },
                setAttributeAtRowIndex: function () { return undefined; },
                setAttributeByHeaderCellIndex: function () { return undefined; },
                setClassNameByHeaderCellIndex: function () { return undefined; },
                setHeaderRowCheckboxChecked: function () { return undefined; },
                setHeaderRowCheckboxIndeterminate: function () { return undefined; },
                setProgressIndicatorStyles: function () { return undefined; },
                setRowCheckboxCheckedAtIndex: function () { return undefined; },
                setSortStatusLabelByHeaderCellIndex: function () { return undefined; },
            };
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
     * Use this if registering checkbox is synchronous.
     */
    MDCDataTableFoundation.prototype.layout = function () {
        if (this.adapter.isRowsSelectable()) {
            this.adapter.registerHeaderRowCheckbox();
            this.adapter.registerRowCheckboxes();
            this.setHeaderRowCheckboxState();
        }
    };
    /**
     * Re-initializes header row checkbox and row checkboxes when selectable rows are added or removed from table.
     * Use this if registering checkbox is asynchronous.
     */
    MDCDataTableFoundation.prototype.layoutAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.adapter.isRowsSelectable()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.adapter.registerHeaderRowCheckbox()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.adapter.registerRowCheckboxes()];
                    case 2:
                        _a.sent();
                        this.setHeaderRowCheckboxState();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return Returns array of row elements.
     */
    MDCDataTableFoundation.prototype.getRows = function () {
        return this.adapter.getRowElements();
    };
    /**
     * @return Array of header cell elements.
     */
    MDCDataTableFoundation.prototype.getHeaderCells = function () {
        return this.adapter.getHeaderCellElements();
    };
    /**
     * Sets selected row ids. Overwrites previously selected rows.
     * @param rowIds Array of row ids that needs to be selected.
     */
    MDCDataTableFoundation.prototype.setSelectedRowIds = function (rowIds) {
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            var rowId = this.adapter.getRowIdAtIndex(rowIndex);
            var isSelected = false;
            if (rowId && rowIds.indexOf(rowId) >= 0) {
                isSelected = true;
            }
            this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isSelected);
            this.selectRowAtIndex(rowIndex, isSelected);
        }
        this.setHeaderRowCheckboxState();
    };
    /**
     * @return Returns array of all row ids.
     */
    MDCDataTableFoundation.prototype.getRowIds = function () {
        var rowIds = [];
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            rowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
        }
        return rowIds;
    };
    /**
     * @return Returns array of selected row ids.
     */
    MDCDataTableFoundation.prototype.getSelectedRowIds = function () {
        var selectedRowIds = [];
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            if (this.adapter.isCheckboxAtRowIndexChecked(rowIndex)) {
                selectedRowIds.push(this.adapter.getRowIdAtIndex(rowIndex));
            }
        }
        return selectedRowIds;
    };
    /**
     * Handles header row checkbox change event.
     */
    MDCDataTableFoundation.prototype.handleHeaderRowCheckboxChange = function () {
        var isHeaderChecked = this.adapter.isHeaderRowCheckboxChecked();
        for (var rowIndex = 0; rowIndex < this.adapter.getRowCount(); rowIndex++) {
            this.adapter.setRowCheckboxCheckedAtIndex(rowIndex, isHeaderChecked);
            this.selectRowAtIndex(rowIndex, isHeaderChecked);
        }
        if (isHeaderChecked) {
            this.adapter.notifySelectedAll();
        }
        else {
            this.adapter.notifyUnselectedAll();
        }
    };
    /**
     * Handles change event originated from row checkboxes.
     */
    MDCDataTableFoundation.prototype.handleRowCheckboxChange = function (event) {
        var rowIndex = this.adapter.getRowIndexByChildElement(event.target);
        if (rowIndex === -1) {
            return;
        }
        var selected = this.adapter.isCheckboxAtRowIndexChecked(rowIndex);
        this.selectRowAtIndex(rowIndex, selected);
        this.setHeaderRowCheckboxState();
        var rowId = this.adapter.getRowIdAtIndex(rowIndex);
        this.adapter.notifyRowSelectionChanged({ rowId: rowId, rowIndex: rowIndex, selected: selected });
    };
    /**
     * Handles sort action on sortable header cell.
     */
    MDCDataTableFoundation.prototype.handleSortAction = function (eventData) {
        var columnId = eventData.columnId, columnIndex = eventData.columnIndex, headerCell = eventData.headerCell;
        // Reset sort attributes / classes on other header cells.
        for (var index = 0; index < this.adapter.getHeaderCellCount(); index++) {
            if (index === columnIndex) {
                continue;
            }
            this.adapter.removeClassNameByHeaderCellIndex(index, cssClasses.HEADER_CELL_SORTED);
            this.adapter.removeClassNameByHeaderCellIndex(index, cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter.setAttributeByHeaderCellIndex(index, strings.ARIA_SORT, SortValue.NONE);
            this.adapter.setSortStatusLabelByHeaderCellIndex(index, SortValue.NONE);
        }
        // Set appropriate sort attributes / classes on target header cell.
        this.adapter.setClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED);
        var currentSortValue = this.adapter.getAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT);
        var sortValue = SortValue.NONE;
        // Set to descending if sorted on ascending order.
        if (currentSortValue === SortValue.ASCENDING) {
            this.adapter.setClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.DESCENDING);
            sortValue = SortValue.DESCENDING;
            // Set to ascending if sorted on descending order.
        }
        else if (currentSortValue === SortValue.DESCENDING) {
            this.adapter.removeClassNameByHeaderCellIndex(columnIndex, cssClasses.HEADER_CELL_SORTED_DESCENDING);
            this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.ASCENDING);
            sortValue = SortValue.ASCENDING;
        }
        else {
            // Set to ascending by default when not sorted.
            this.adapter.setAttributeByHeaderCellIndex(columnIndex, strings.ARIA_SORT, SortValue.ASCENDING);
            sortValue = SortValue.ASCENDING;
        }
        this.adapter.setSortStatusLabelByHeaderCellIndex(columnIndex, sortValue);
        this.adapter.notifySortAction({
            columnId: columnId,
            columnIndex: columnIndex,
            headerCell: headerCell,
            sortValue: sortValue,
        });
    };
    /**
     * Shows progress indicator blocking only the table body content when in
     * loading state.
     */
    MDCDataTableFoundation.prototype.showProgress = function () {
        var tableHeaderHeight = this.adapter.getTableHeaderHeight();
        // Calculate the height of table content (Not scroll content) excluding
        // header row height.
        var height = this.adapter.getTableContainerHeight() - tableHeaderHeight;
        var top = tableHeaderHeight;
        this.adapter.setProgressIndicatorStyles({
            height: height + "px",
            top: top + "px",
        });
        this.adapter.addClass(cssClasses.IN_PROGRESS);
    };
    /**
     * Hides progress indicator when data table is finished loading.
     */
    MDCDataTableFoundation.prototype.hideProgress = function () {
        this.adapter.removeClass(cssClasses.IN_PROGRESS);
    };
    /**
     * Updates header row checkbox state based on number of rows selected.
     */
    MDCDataTableFoundation.prototype.setHeaderRowCheckboxState = function () {
        if (this.adapter.getSelectedRowCount() === 0) {
            this.adapter.setHeaderRowCheckboxChecked(false);
            this.adapter.setHeaderRowCheckboxIndeterminate(false);
        }
        else if (this.adapter.getSelectedRowCount() === this.adapter.getRowCount()) {
            this.adapter.setHeaderRowCheckboxChecked(true);
            this.adapter.setHeaderRowCheckboxIndeterminate(false);
        }
        else {
            this.adapter.setHeaderRowCheckboxIndeterminate(true);
            this.adapter.setHeaderRowCheckboxChecked(false);
        }
    };
    /**
     * Sets the attributes of row element based on selection state.
     */
    MDCDataTableFoundation.prototype.selectRowAtIndex = function (rowIndex, selected) {
        if (selected) {
            this.adapter.addClassAtRowIndex(rowIndex, cssClasses.ROW_SELECTED);
            this.adapter.setAttributeAtRowIndex(rowIndex, strings.ARIA_SELECTED, 'true');
        }
        else {
            this.adapter.removeClassAtRowIndex(rowIndex, cssClasses.ROW_SELECTED);
            this.adapter.setAttributeAtRowIndex(rowIndex, strings.ARIA_SELECTED, 'false');
        }
    };
    return MDCDataTableFoundation;
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

/* packages/data-table/DataTable.svelte generated by Svelte v3.37.0 */

const { Error: Error_1 } = globals;

const file$4 = "packages/data-table/DataTable.svelte";
const get_paginate_slot_changes = dirty => ({});
const get_paginate_slot_context = ctx => ({});
const get_progress_slot_changes = dirty => ({});
const get_progress_slot_context = ctx => ({});

// (44:2) {#if $$slots.progress}
function create_if_block$1(ctx) {
	let div1;
	let div0;
	let t;
	let div1_style_value;
	let current;
	const progress_slot_template = /*#slots*/ ctx[32].progress;
	const progress_slot = create_slot(progress_slot_template, ctx, /*$$scope*/ ctx[31], get_progress_slot_context);

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			t = space();
			if (progress_slot) progress_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true, style: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t = claim_space(div1_nodes);
			if (progress_slot) progress_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "mdc-data-table__scrim");
			add_location(div0, file$4, 50, 6, 1583);
			attr_dev(div1, "class", "mdc-data-table__progress-indicator");
			attr_dev(div1, "style", div1_style_value = Object.entries(/*progressIndicatorStyles*/ ctx[13]).map(func).join(" "));
			add_location(div1, file$4, 44, 4, 1390);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div1, t);

			if (progress_slot) {
				progress_slot.m(div1, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (progress_slot) {
				if (progress_slot.p && dirty[1] & /*$$scope*/ 1) {
					update_slot(progress_slot, progress_slot_template, ctx, /*$$scope*/ ctx[31], dirty, get_progress_slot_changes, get_progress_slot_context);
				}
			}

			if (!current || dirty[0] & /*progressIndicatorStyles*/ 8192 && div1_style_value !== (div1_style_value = Object.entries(/*progressIndicatorStyles*/ ctx[13]).map(func).join(" "))) {
				attr_dev(div1, "style", div1_style_value);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(progress_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(progress_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (progress_slot) progress_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(44:2) {#if $$slots.progress}",
		ctx
	});

	return block;
}

function create_fragment$4(ctx) {
	let div1;
	let div0;
	let table;
	let table_class_value;
	let useActions_action;
	let div0_class_value;
	let useActions_action_1;
	let t0;
	let t1;
	let div1_class_value;
	let useActions_action_2;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[32].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[31], null);

	let table_levels = [
		{
			class: table_class_value = classMap({
				[/*table$class*/ ctx[6]]: true,
				"mdc-data-table__table": true
			})
		},
		prefixFilter(/*$$restProps*/ ctx[21], "table$")
	];

	let table_data = {};

	for (let i = 0; i < table_levels.length; i += 1) {
		table_data = assign(table_data, table_levels[i]);
	}

	let div0_levels = [
		{
			class: div0_class_value = classMap({
				[/*container$class*/ ctx[4]]: true,
				"mdc-data-table__table-container": true
			})
		},
		prefixFilter(/*$$restProps*/ ctx[21], "container$")
	];

	let div0_data = {};

	for (let i = 0; i < div0_levels.length; i += 1) {
		div0_data = assign(div0_data, div0_levels[i]);
	}

	let if_block = /*$$slots*/ ctx[20].progress && create_if_block$1(ctx);
	const paginate_slot_template = /*#slots*/ ctx[32].paginate;
	const paginate_slot = create_slot(paginate_slot_template, ctx, /*$$scope*/ ctx[31], get_paginate_slot_context);

	let div1_levels = [
		{
			class: div1_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-data-table": true,
				"mdc-data-table--sticky-header": /*stickyHeader*/ ctx[2],
				.../*internalClasses*/ ctx[12]
			})
		},
		exclude(/*$$restProps*/ ctx[21], ["container$", "table$"])
	];

	let div1_data = {};

	for (let i = 0; i < div1_levels.length; i += 1) {
		div1_data = assign(div1_data, div1_levels[i]);
	}

	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			table = element("table");
			if (default_slot) default_slot.c();
			t0 = space();
			if (if_block) if_block.c();
			t1 = space();
			if (paginate_slot) paginate_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			table = claim_element(div0_nodes, "TABLE", { class: true });
			var table_nodes = children(table);
			if (default_slot) default_slot.l(table_nodes);
			table_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div1_nodes);
			if (if_block) if_block.l(div1_nodes);
			t1 = claim_space(div1_nodes);
			if (paginate_slot) paginate_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(table, table_data);
			add_location(table, file$4, 31, 4, 1128);
			set_attributes(div0, div0_data);
			add_location(div0, file$4, 22, 2, 897);
			set_attributes(div1, div1_data);
			add_location(div1, file$4, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, table);

			if (default_slot) {
				default_slot.m(table, null);
			}

			/*div0_binding*/ ctx[33](div0);
			append_dev(div1, t0);
			if (if_block) if_block.m(div1, null);
			append_dev(div1, t1);

			if (paginate_slot) {
				paginate_slot.m(div1, null);
			}

			/*div1_binding*/ ctx[34](div1);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, table, /*table$use*/ ctx[5])),
					action_destroyer(useActions_action_1 = useActions.call(null, div0, /*container$use*/ ctx[3])),
					action_destroyer(useActions_action_2 = useActions.call(null, div1, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[15].call(null, div1)),
					listen_dev(div1, "SMUI:checkbox:mount", /*SMUI_checkbox_mount_handler*/ ctx[35], false, false, false),
					listen_dev(div1, "SMUI:data-table:header:mount", /*SMUI_data_table_header_mount_handler*/ ctx[36], false, false, false),
					listen_dev(div1, "SMUI:data-table:header:unmount", /*SMUI_data_table_header_unmount_handler*/ ctx[37], false, false, false),
					listen_dev(div1, "SMUI:data-table:body:mount", /*SMUI_data_table_body_mount_handler*/ ctx[38], false, false, false),
					listen_dev(div1, "SMUI:data-table:body:unmount", /*SMUI_data_table_body_unmount_handler*/ ctx[39], false, false, false),
					listen_dev(div1, "SMUI:data-table:header:checkbox:change", /*SMUI_data_table_header_checkbox_change_handler*/ ctx[40], false, false, false),
					listen_dev(div1, "SMUI:data-table:header:click", /*handleHeaderRowClick*/ ctx[19], false, false, false),
					listen_dev(div1, "SMUI:data-table:body:checkbox:change", /*SMUI_data_table_body_checkbox_change_handler*/ ctx[41], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty[1] & /*$$scope*/ 1) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[31], dirty, null, null);
				}
			}

			set_attributes(table, table_data = get_spread_update(table_levels, [
				(!current || dirty[0] & /*table$class*/ 64 && table_class_value !== (table_class_value = classMap({
					[/*table$class*/ ctx[6]]: true,
					"mdc-data-table__table": true
				}))) && { class: table_class_value },
				dirty[0] & /*$$restProps*/ 2097152 && prefixFilter(/*$$restProps*/ ctx[21], "table$")
			]));

			if (useActions_action && is_function(useActions_action.update) && dirty[0] & /*table$use*/ 32) useActions_action.update.call(null, /*table$use*/ ctx[5]);

			set_attributes(div0, div0_data = get_spread_update(div0_levels, [
				(!current || dirty[0] & /*container$class*/ 16 && div0_class_value !== (div0_class_value = classMap({
					[/*container$class*/ ctx[4]]: true,
					"mdc-data-table__table-container": true
				}))) && { class: div0_class_value },
				dirty[0] & /*$$restProps*/ 2097152 && prefixFilter(/*$$restProps*/ ctx[21], "container$")
			]));

			if (useActions_action_1 && is_function(useActions_action_1.update) && dirty[0] & /*container$use*/ 8) useActions_action_1.update.call(null, /*container$use*/ ctx[3]);

			if (/*$$slots*/ ctx[20].progress) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty[0] & /*$$slots*/ 1048576) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div1, t1);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			if (paginate_slot) {
				if (paginate_slot.p && dirty[1] & /*$$scope*/ 1) {
					update_slot(paginate_slot, paginate_slot_template, ctx, /*$$scope*/ ctx[31], dirty, get_paginate_slot_changes, get_paginate_slot_context);
				}
			}

			set_attributes(div1, div1_data = get_spread_update(div1_levels, [
				(!current || dirty[0] & /*className, stickyHeader, internalClasses*/ 4102 && div1_class_value !== (div1_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-data-table": true,
					"mdc-data-table--sticky-header": /*stickyHeader*/ ctx[2],
					.../*internalClasses*/ ctx[12]
				}))) && { class: div1_class_value },
				dirty[0] & /*$$restProps*/ 2097152 && exclude(/*$$restProps*/ ctx[21], ["container$", "table$"])
			]));

			if (useActions_action_2 && is_function(useActions_action_2.update) && dirty[0] & /*use*/ 1) useActions_action_2.update.call(null, /*use*/ ctx[0]);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			transition_in(if_block);
			transition_in(paginate_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			transition_out(if_block);
			transition_out(paginate_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (default_slot) default_slot.d(detaching);
			/*div0_binding*/ ctx[33](null);
			if (if_block) if_block.d();
			if (paginate_slot) paginate_slot.d(detaching);
			/*div1_binding*/ ctx[34](null);
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

const func = ([name, value]) => `${name}: ${value};`;

function instance_1($$self, $$props, $$invalidate) {
	const omit_props_names = [
		"use","class","stickyHeader","sortable","sort","sortDirection","sortAscendingAriaLabel","sortDescendingAriaLabel","container$use","container$class","table$use","table$class","layout","getElement"
	];

	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $sortStore;
	let $sortDirectionStore;
	let $progressClosed;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("DataTable", slots, ['default','progress','paginate']);
	const $$slots = compute_slots(slots);
	const { closest } = ponyfill;
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { stickyHeader = false } = $$props;
	let { sortable = false } = $$props;
	let { sort = null } = $$props;
	let { sortDirection = "ascending" } = $$props;
	let { sortAscendingAriaLabel = "sorted, ascending" } = $$props;
	let { sortDescendingAriaLabel = "sorted, descending" } = $$props;
	let { container$use = [] } = $$props;
	let { container$class = "" } = $$props;
	let { table$use = [] } = $$props;
	let { table$class = "" } = $$props;
	let element;
	let instance;
	let container;
	let header;
	let body;
	let internalClasses = {};
	let progressIndicatorStyles = {};
	let addLayoutListener = getContext("SMUI:addLayoutListener");
	let removeLayoutListener;
	let postMount = false;
	let progressClosed = writable(false);
	validate_store(progressClosed, "progressClosed");
	component_subscribe($$self, progressClosed, value => $$invalidate(30, $progressClosed = value));
	let sortStore = writable(sort);
	validate_store(sortStore, "sortStore");
	component_subscribe($$self, sortStore, value => $$invalidate(43, $sortStore = value));
	let sortDirectionStore = writable(sortDirection);
	validate_store(sortDirectionStore, "sortDirectionStore");
	component_subscribe($$self, sortDirectionStore, value => $$invalidate(44, $sortDirectionStore = value));
	setContext("SMUI:checkbox:context", "data-table");
	setContext("SMUI:linear-progress:context", "data-table");
	setContext("SMUI:linear-progress:closed", progressClosed);
	setContext("SMUI:data-table:sortable", sortable);
	setContext("SMUI:data-table:sort", sortStore);
	setContext("SMUI:data-table:sortDirection", sortDirectionStore);
	setContext("SMUI:data-table:sortAscendingAriaLabel", sortAscendingAriaLabel);
	setContext("SMUI:data-table:sortDescendingAriaLabel", sortDescendingAriaLabel);

	if (addLayoutListener) {
		removeLayoutListener = addLayoutListener(layout);
	}

	let previousProgressClosed = null;

	onMount(() => {
		$$invalidate(7, instance = new MDCDataTableFoundation({
				addClass,
				removeClass,
				getHeaderCellElements: () => header.cells.map(accessor => accessor.element),
				getHeaderCellCount: () => header.cells.length,
				getAttributeByHeaderCellIndex: (index, name) => {
					return header.orderedCells[index].getAttr(name);
				},
				setAttributeByHeaderCellIndex: (index, name, value) => {
					header.orderedCells[index].addAttr(name, value);
				},
				setClassNameByHeaderCellIndex: (index, className) => {
					header.orderedCells[index].addClass(className);
				},
				removeClassNameByHeaderCellIndex: (index, className) => {
					header.orderedCells[index].removeClass(className);
				},
				notifySortAction: data => {
					$$invalidate(22, sort = data.columnId);
					$$invalidate(23, sortDirection = data.sortValue);
					dispatch(getElement(), "MDCDataTable:sorted", data);
				},
				getTableContainerHeight: () => container.getBoundingClientRect().height,
				getTableHeaderHeight: () => {
					const tableHeader = getElement().querySelector(".mdc-data-table__header-row");

					if (!tableHeader) {
						throw new Error("MDCDataTable: Table header element not found.");
					}

					return tableHeader.getBoundingClientRect().height;
				},
				setProgressIndicatorStyles: styles => {
					$$invalidate(13, progressIndicatorStyles = styles);
				},
				addClassAtRowIndex: (rowIndex, className) => {
					body.orderedRows[rowIndex].addClass(className);
				},
				getRowCount: () => body.rows.length,
				getRowElements: () => body.rows.map(accessor => accessor.element),
				getRowIdAtIndex: rowIndex => body.orderedRows[rowIndex].rowId,
				getRowIndexByChildElement: el => {
					return body.orderedRows.map(accessor => accessor.element).indexOf(closest(el, ".mdc-data-table__row"));
				},
				getSelectedRowCount: () => body.rows.filter(accessor => accessor.selected).length,
				isCheckboxAtRowIndexChecked: rowIndex => {
					const checkbox = body.orderedRows[rowIndex].checkbox;

					if (checkbox) {
						return checkbox.checked;
					}

					return false;
				},
				isHeaderRowCheckboxChecked: () => {
					const checkbox = header.checkbox;

					if (checkbox) {
						return checkbox.checked;
					}

					return false;
				},
				isRowsSelectable: () => !!getElement().querySelector(".mdc-data-table__row-checkbox") || !!getElement().querySelector(".mdc-data-table__header-row-checkbox"),
				notifyRowSelectionChanged: data => {
					const row = body.orderedRows[data.rowIndex];

					dispatch(getElement(), "MDCDataTable:rowSelectionChanged", {
						row: row.element,
						rowId: row.rowId,
						rowIndex: data.rowIndex,
						selected: data.selected
					});
				},
				notifySelectedAll: () => {
					setHeaderRowCheckboxIndeterminate(false);
					dispatch(getElement(), "MDCDataTable:selectedAll");
				},
				notifyUnselectedAll: () => {
					setHeaderRowCheckboxIndeterminate(false);
					dispatch(getElement(), "MDCDataTable:unselectedAll");
				},
				registerHeaderRowCheckbox: () => {
					
				}, // Handled automatically.
				registerRowCheckboxes: () => {
					
				}, // Handled automatically.
				removeClassAtRowIndex: (rowIndex, className) => {
					body.orderedRows[rowIndex].removeClass(className);
				},
				setAttributeAtRowIndex: (rowIndex, name, value) => {
					body.orderedRows[rowIndex].addAttr(name, value);
				},
				setHeaderRowCheckboxChecked: checked => {
					const checkbox = header.checkbox;

					if (checkbox) {
						checkbox.checked = checked;
					}
				},
				setHeaderRowCheckboxIndeterminate,
				setRowCheckboxCheckedAtIndex: (rowIndex, checked) => {
					const checkbox = body.orderedRows[rowIndex].checkbox;

					if (checkbox) {
						checkbox.checked = checked;
					}
				},
				setSortStatusLabelByHeaderCellIndex: (_columnIndex, _sortValue) => {
					
				}, // Handled automatically.
				
			}));

		instance.init();
		instance.layout();
		$$invalidate(14, postMount = true);

		return () => {
			instance.destroy();
		};
	});

	onDestroy(() => {
		if (removeLayoutListener) {
			removeLayoutListener();
		}
	});

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(12, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(12, internalClasses[className] = false, internalClasses);
		}
	}

	function setHeaderRowCheckboxIndeterminate(indeterminate) {
		const checkbox = header.checkbox;

		if (checkbox) {
			checkbox.indeterminate = indeterminate;
		}
	}

	function handleHeaderRowClick(event) {
		if (!instance) {
			return;
		}

		const headerCell = closest(event.detail.target, ".mdc-data-table__header-cell--with-sort");

		if (!headerCell) {
			return;
		}

		const orderedCells = header.orderedCells;
		const columnIndex = orderedCells.map(accessor => accessor.element).indexOf(headerCell);

		if (columnIndex === -1) {
			return;
		}

		const columnId = orderedCells[columnIndex].columnId;
		instance.handleSortAction({ columnId, columnIndex, headerCell });
	}

	function layout() {
		return instance.layout();
	}

	function getElement() {
		return element;
	}

	function div0_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			container = $$value;
			$$invalidate(9, container);
		});
	}

	function div1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(8, element);
		});
	}

	const SMUI_checkbox_mount_handler = () => instance && postMount && instance.layout();
	const SMUI_data_table_header_mount_handler = event => $$invalidate(10, header = event.detail);
	const SMUI_data_table_header_unmount_handler = () => $$invalidate(10, header = undefined);
	const SMUI_data_table_body_mount_handler = event => $$invalidate(11, body = event.detail);
	const SMUI_data_table_body_unmount_handler = () => $$invalidate(11, body = undefined);
	const SMUI_data_table_header_checkbox_change_handler = () => instance && instance.handleHeaderRowCheckboxChange();
	const SMUI_data_table_body_checkbox_change_handler = event => instance && instance.handleRowCheckboxChange(event);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(21, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("stickyHeader" in $$new_props) $$invalidate(2, stickyHeader = $$new_props.stickyHeader);
		if ("sortable" in $$new_props) $$invalidate(24, sortable = $$new_props.sortable);
		if ("sort" in $$new_props) $$invalidate(22, sort = $$new_props.sort);
		if ("sortDirection" in $$new_props) $$invalidate(23, sortDirection = $$new_props.sortDirection);
		if ("sortAscendingAriaLabel" in $$new_props) $$invalidate(25, sortAscendingAriaLabel = $$new_props.sortAscendingAriaLabel);
		if ("sortDescendingAriaLabel" in $$new_props) $$invalidate(26, sortDescendingAriaLabel = $$new_props.sortDescendingAriaLabel);
		if ("container$use" in $$new_props) $$invalidate(3, container$use = $$new_props.container$use);
		if ("container$class" in $$new_props) $$invalidate(4, container$class = $$new_props.container$class);
		if ("table$use" in $$new_props) $$invalidate(5, table$use = $$new_props.table$use);
		if ("table$class" in $$new_props) $$invalidate(6, table$class = $$new_props.table$class);
		if ("$$scope" in $$new_props) $$invalidate(31, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		MDCDataTableFoundation,
		ponyfill,
		onMount,
		onDestroy,
		getContext,
		setContext,
		writable,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		exclude,
		prefixFilter,
		useActions,
		dispatch,
		closest,
		forwardEvents,
		use,
		className,
		stickyHeader,
		sortable,
		sort,
		sortDirection,
		sortAscendingAriaLabel,
		sortDescendingAriaLabel,
		container$use,
		container$class,
		table$use,
		table$class,
		element,
		instance,
		container,
		header,
		body,
		internalClasses,
		progressIndicatorStyles,
		addLayoutListener,
		removeLayoutListener,
		postMount,
		progressClosed,
		sortStore,
		sortDirectionStore,
		previousProgressClosed,
		addClass,
		removeClass,
		setHeaderRowCheckboxIndeterminate,
		handleHeaderRowClick,
		layout,
		getElement,
		$sortStore,
		$sortDirectionStore,
		$progressClosed
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("stickyHeader" in $$props) $$invalidate(2, stickyHeader = $$new_props.stickyHeader);
		if ("sortable" in $$props) $$invalidate(24, sortable = $$new_props.sortable);
		if ("sort" in $$props) $$invalidate(22, sort = $$new_props.sort);
		if ("sortDirection" in $$props) $$invalidate(23, sortDirection = $$new_props.sortDirection);
		if ("sortAscendingAriaLabel" in $$props) $$invalidate(25, sortAscendingAriaLabel = $$new_props.sortAscendingAriaLabel);
		if ("sortDescendingAriaLabel" in $$props) $$invalidate(26, sortDescendingAriaLabel = $$new_props.sortDescendingAriaLabel);
		if ("container$use" in $$props) $$invalidate(3, container$use = $$new_props.container$use);
		if ("container$class" in $$props) $$invalidate(4, container$class = $$new_props.container$class);
		if ("table$use" in $$props) $$invalidate(5, table$use = $$new_props.table$use);
		if ("table$class" in $$props) $$invalidate(6, table$class = $$new_props.table$class);
		if ("element" in $$props) $$invalidate(8, element = $$new_props.element);
		if ("instance" in $$props) $$invalidate(7, instance = $$new_props.instance);
		if ("container" in $$props) $$invalidate(9, container = $$new_props.container);
		if ("header" in $$props) $$invalidate(10, header = $$new_props.header);
		if ("body" in $$props) $$invalidate(11, body = $$new_props.body);
		if ("internalClasses" in $$props) $$invalidate(12, internalClasses = $$new_props.internalClasses);
		if ("progressIndicatorStyles" in $$props) $$invalidate(13, progressIndicatorStyles = $$new_props.progressIndicatorStyles);
		if ("addLayoutListener" in $$props) addLayoutListener = $$new_props.addLayoutListener;
		if ("removeLayoutListener" in $$props) removeLayoutListener = $$new_props.removeLayoutListener;
		if ("postMount" in $$props) $$invalidate(14, postMount = $$new_props.postMount);
		if ("progressClosed" in $$props) $$invalidate(16, progressClosed = $$new_props.progressClosed);
		if ("sortStore" in $$props) $$invalidate(17, sortStore = $$new_props.sortStore);
		if ("sortDirectionStore" in $$props) $$invalidate(18, sortDirectionStore = $$new_props.sortDirectionStore);
		if ("previousProgressClosed" in $$props) $$invalidate(29, previousProgressClosed = $$new_props.previousProgressClosed);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty[0] & /*sort*/ 4194304) {
			set_store_value(sortStore, $sortStore = sort, $sortStore);
		}

		if ($$self.$$.dirty[0] & /*sortDirection*/ 8388608) {
			set_store_value(sortDirectionStore, $sortDirectionStore = sortDirection, $sortDirectionStore);
		}

		if ($$self.$$.dirty[0] & /*instance, previousProgressClosed, $progressClosed*/ 1610612864) {
			if ($$slots.progress && instance && previousProgressClosed !== $progressClosed) {
				$$invalidate(29, previousProgressClosed = $progressClosed);

				if ($progressClosed) {
					instance.hideProgress();
				} else {
					instance.showProgress();
				}
			}
		}
	};

	return [
		use,
		className,
		stickyHeader,
		container$use,
		container$class,
		table$use,
		table$class,
		instance,
		element,
		container,
		header,
		body,
		internalClasses,
		progressIndicatorStyles,
		postMount,
		forwardEvents,
		progressClosed,
		sortStore,
		sortDirectionStore,
		handleHeaderRowClick,
		$$slots,
		$$restProps,
		sort,
		sortDirection,
		sortable,
		sortAscendingAriaLabel,
		sortDescendingAriaLabel,
		layout,
		getElement,
		previousProgressClosed,
		$progressClosed,
		$$scope,
		slots,
		div0_binding,
		div1_binding,
		SMUI_checkbox_mount_handler,
		SMUI_data_table_header_mount_handler,
		SMUI_data_table_header_unmount_handler,
		SMUI_data_table_body_mount_handler,
		SMUI_data_table_body_unmount_handler,
		SMUI_data_table_header_checkbox_change_handler,
		SMUI_data_table_body_checkbox_change_handler
	];
}

class DataTable extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(
			this,
			options,
			instance_1,
			create_fragment$4,
			safe_not_equal,
			{
				use: 0,
				class: 1,
				stickyHeader: 2,
				sortable: 24,
				sort: 22,
				sortDirection: 23,
				sortAscendingAriaLabel: 25,
				sortDescendingAriaLabel: 26,
				container$use: 3,
				container$class: 4,
				table$use: 5,
				table$class: 6,
				layout: 27,
				getElement: 28
			},
			[-1, -1]
		);

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "DataTable",
			options,
			id: create_fragment$4.name
		});
	}

	get use() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get stickyHeader() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set stickyHeader(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get sortable() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set sortable(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get sort() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set sort(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get sortDirection() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set sortDirection(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get sortAscendingAriaLabel() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set sortAscendingAriaLabel(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get sortDescendingAriaLabel() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set sortDescendingAriaLabel(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get container$use() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set container$use(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get container$class() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set container$class(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get table$use() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set table$use(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get table$class() {
		throw new Error_1("<DataTable>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set table$class(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get layout() {
		return this.$$.ctx[27];
	}

	set layout(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[28];
	}

	set getElement(value) {
		throw new Error_1("<DataTable>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/data-table/Head.svelte generated by Svelte v3.37.0 */

const file$3 = "packages/data-table/Head.svelte";

function create_fragment$3(ctx) {
	let thead;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);
	let thead_levels = [/*$$restProps*/ ctx[6]];
	let thead_data = {};

	for (let i = 0; i < thead_levels.length; i += 1) {
		thead_data = assign(thead_data, thead_levels[i]);
	}

	const block = {
		c: function create() {
			thead = element("thead");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			thead = claim_element(nodes, "THEAD", {});
			var thead_nodes = children(thead);
			if (default_slot) default_slot.l(thead_nodes);
			thead_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(thead, thead_data);
			add_location(thead, file$3, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, thead, anchor);

			if (default_slot) {
				default_slot.m(thead, null);
			}

			/*thead_binding*/ ctx[10](thead);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, thead, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[3].call(null, thead)),
					listen_dev(thead, "SMUI:checkbox:mount", /*SMUI_checkbox_mount_handler*/ ctx[11], false, false, false),
					listen_dev(thead, "SMUI:checkbox:unmount", /*SMUI_checkbox_unmount_handler*/ ctx[12], false, false, false),
					listen_dev(thead, "SMUI:data-table:cell:mount", /*handleCellMount*/ ctx[4], false, false, false),
					listen_dev(thead, "SMUI:data-table:cell:unmount", /*handleCellUnmount*/ ctx[5], false, false, false)
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

			set_attributes(thead, thead_data = get_spread_update(thead_levels, [dirty & /*$$restProps*/ 64 && /*$$restProps*/ ctx[6]]));
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
			if (detaching) detach_dev(thead);
			if (default_slot) default_slot.d(detaching);
			/*thead_binding*/ ctx[10](null);
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
	const omit_props_names = ["use","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Head", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let element;
	let checkbox;
	let cells = [];
	const cellAccessorMap = new WeakMap();
	setContext("SMUI:data-table:row:header", true);

	onMount(() => {
		const accessor = {
			get cells() {
				return cells;
			},
			get orderedCells() {
				return getOrderedCells();
			},
			get checkbox() {
				return checkbox;
			}
		};

		dispatch(getElement(), "SMUI:data-table:header:mount", accessor);

		return () => {
			dispatch(getElement(), "SMUI:data-table:header:unmount");
		};
	});

	function handleCellMount(event) {
		cells.push(event.detail);
		cellAccessorMap.set(event.detail.element, event.detail);
		event.stopPropagation();
	}

	function handleCellUnmount(event) {
		const idx = cells.indexOf(event.detail);

		if (idx !== -1) {
			cells.splice(idx, 1);
			cells = cells;
		}

		cellAccessorMap.delete(event.detail.element);
		event.stopPropagation();
	}

	function getOrderedCells() {
		return [...getElement().querySelectorAll(".mdc-data-table__header-cell")].map(element => cellAccessorMap.get(element)).filter(accessor => accessor && accessor._smui_data_table_header_cell_accessor);
	}

	function getElement() {
		return element;
	}

	function thead_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(1, element);
		});
	}

	const SMUI_checkbox_mount_handler = event => $$invalidate(2, checkbox = event.detail);
	const SMUI_checkbox_unmount_handler = () => $$invalidate(2, checkbox = undefined);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		onMount,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		useActions,
		dispatch,
		forwardEvents,
		use,
		element,
		checkbox,
		cells,
		cellAccessorMap,
		handleCellMount,
		handleCellUnmount,
		getOrderedCells,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("element" in $$props) $$invalidate(1, element = $$new_props.element);
		if ("checkbox" in $$props) $$invalidate(2, checkbox = $$new_props.checkbox);
		if ("cells" in $$props) cells = $$new_props.cells;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		element,
		checkbox,
		forwardEvents,
		handleCellMount,
		handleCellUnmount,
		$$restProps,
		getElement,
		$$scope,
		slots,
		thead_binding,
		SMUI_checkbox_mount_handler,
		SMUI_checkbox_unmount_handler
	];
}

class Head extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, { use: 0, getElement: 7 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Head",
			options,
			id: create_fragment$3.name
		});
	}

	get use() {
		throw new Error("<Head>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Head>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[7];
	}

	set getElement(value) {
		throw new Error("<Head>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/data-table/Body.svelte generated by Svelte v3.37.0 */

const file$2 = "packages/data-table/Body.svelte";

function create_fragment$2(ctx) {
	let tbody;
	let tbody_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

	let tbody_levels = [
		{
			class: tbody_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-data-table__content": true
			})
		},
		/*$$restProps*/ ctx[6]
	];

	let tbody_data = {};

	for (let i = 0; i < tbody_levels.length; i += 1) {
		tbody_data = assign(tbody_data, tbody_levels[i]);
	}

	const block = {
		c: function create() {
			tbody = element("tbody");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			tbody = claim_element(nodes, "TBODY", { class: true });
			var tbody_nodes = children(tbody);
			if (default_slot) default_slot.l(tbody_nodes);
			tbody_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(tbody, tbody_data);
			add_location(tbody, file$2, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, tbody, anchor);

			if (default_slot) {
				default_slot.m(tbody, null);
			}

			/*tbody_binding*/ ctx[10](tbody);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, tbody, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[3].call(null, tbody)),
					listen_dev(tbody, "SMUI:data-table:row:mount", /*handleRowMount*/ ctx[4], false, false, false),
					listen_dev(tbody, "SMUI:data-table:row:unmount", /*handleRowUnmount*/ ctx[5], false, false, false)
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

			set_attributes(tbody, tbody_data = get_spread_update(tbody_levels, [
				(!current || dirty & /*className*/ 2 && tbody_class_value !== (tbody_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-data-table__content": true
				}))) && { class: tbody_class_value },
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
			if (detaching) detach_dev(tbody);
			if (default_slot) default_slot.d(detaching);
			/*tbody_binding*/ ctx[10](null);
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
	const omit_props_names = ["use","class","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Body", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let element;
	let rows = [];
	const rowAccessorMap = new WeakMap();
	setContext("SMUI:data-table:row:header", false);

	onMount(() => {
		const accessor = {
			get rows() {
				return rows;
			},
			get orderedRows() {
				return getOrderedRows();
			}
		};

		dispatch(getElement(), "SMUI:data-table:body:mount", accessor);

		return () => {
			dispatch(getElement(), "SMUI:data-table:body:unmount");
		};
	});

	function handleRowMount(event) {
		rows.push(event.detail);
		rowAccessorMap.set(event.detail.element, event.detail);
		event.stopPropagation();
	}

	function handleRowUnmount(event) {
		const idx = rows.indexOf(event.detail);

		if (idx !== -1) {
			rows.splice(idx, 1);
			rows = rows;
		}

		rowAccessorMap.delete(event.detail.element);
		event.stopPropagation();
	}

	function getOrderedRows() {
		return [...getElement().querySelectorAll(".mdc-data-table__row")].map(element => rowAccessorMap.get(element)).filter(accessor => accessor && accessor._smui_data_table_row_accessor);
	}

	function getElement() {
		return element;
	}

	function tbody_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(2, element);
		});
	}

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("$$scope" in $$new_props) $$invalidate(8, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		onMount,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		dispatch,
		forwardEvents,
		use,
		className,
		element,
		rows,
		rowAccessorMap,
		handleRowMount,
		handleRowUnmount,
		getOrderedRows,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
		if ("rows" in $$props) rows = $$new_props.rows;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		element,
		forwardEvents,
		handleRowMount,
		handleRowUnmount,
		$$restProps,
		getElement,
		$$scope,
		slots,
		tbody_binding
	];
}

class Body extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { use: 0, class: 1, getElement: 7 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Body",
			options,
			id: create_fragment$2.name
		});
	}

	get use() {
		throw new Error("<Body>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Body>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Body>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Body>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[7];
	}

	set getElement(value) {
		throw new Error("<Body>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/data-table/Row.svelte generated by Svelte v3.37.0 */

const file$1 = "packages/data-table/Row.svelte";

function create_fragment$1(ctx) {
	let tr;
	let tr_class_value;
	let tr_aria_selected_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[13].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[12], null);

	let tr_levels = [
		{
			class: tr_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-data-table__header-row": /*header*/ ctx[7],
				"mdc-data-table__row": !/*header*/ ctx[7],
				"mdc-data-table__row--selected": !/*header*/ ctx[7] && /*checkbox*/ ctx[3] && /*checkbox*/ ctx[3].checked,
				.../*internalClasses*/ ctx[4]
			})
		},
		{
			"aria-selected": tr_aria_selected_value = /*checkbox*/ ctx[3]
			? /*checkbox*/ ctx[3].checked ? "true" : "false"
			: null
		},
		/*internalAttrs*/ ctx[5],
		/*$$restProps*/ ctx[9]
	];

	let tr_data = {};

	for (let i = 0; i < tr_levels.length; i += 1) {
		tr_data = assign(tr_data, tr_levels[i]);
	}

	const block = {
		c: function create() {
			tr = element("tr");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			tr = claim_element(nodes, "TR", { class: true, "aria-selected": true });
			var tr_nodes = children(tr);
			if (default_slot) default_slot.l(tr_nodes);
			tr_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(tr, tr_data);
			add_location(tr, file$1, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, tr, anchor);

			if (default_slot) {
				default_slot.m(tr, null);
			}

			/*tr_binding*/ ctx[14](tr);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, tr, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[6].call(null, tr)),
					listen_dev(tr, "click", /*click_handler*/ ctx[15], false, false, false),
					listen_dev(tr, "SMUI:checkbox:mount", /*SMUI_checkbox_mount_handler*/ ctx[16], false, false, false),
					listen_dev(tr, "SMUI:checkbox:unmount", /*SMUI_checkbox_unmount_handler*/ ctx[17], false, false, false)
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

			set_attributes(tr, tr_data = get_spread_update(tr_levels, [
				(!current || dirty & /*className, checkbox, internalClasses*/ 26 && tr_class_value !== (tr_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-data-table__header-row": /*header*/ ctx[7],
					"mdc-data-table__row": !/*header*/ ctx[7],
					"mdc-data-table__row--selected": !/*header*/ ctx[7] && /*checkbox*/ ctx[3] && /*checkbox*/ ctx[3].checked,
					.../*internalClasses*/ ctx[4]
				}))) && { class: tr_class_value },
				(!current || dirty & /*checkbox*/ 8 && tr_aria_selected_value !== (tr_aria_selected_value = /*checkbox*/ ctx[3]
				? /*checkbox*/ ctx[3].checked ? "true" : "false"
				: null)) && { "aria-selected": tr_aria_selected_value },
				dirty & /*internalAttrs*/ 32 && /*internalAttrs*/ ctx[5],
				dirty & /*$$restProps*/ 512 && /*$$restProps*/ ctx[9]
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
			if (detaching) detach_dev(tr);
			if (default_slot) default_slot.d(detaching);
			/*tr_binding*/ ctx[14](null);
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

let counter$1 = 0;

function instance$1($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","rowId","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Row", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { rowId = "SMUI-data-table-row-" + counter$1++ } = $$props;
	let element;
	let checkbox;
	let internalClasses = {};
	let internalAttrs = {};
	let header = getContext("SMUI:data-table:row:header");

	onMount(() => {
		const accessor = {
			_smui_data_table_row_accessor: !header,
			get element() {
				return getElement();
			},
			get checkbox() {
				return checkbox;
			},
			get rowId() {
				return rowId;
			},
			get selected() {
				return checkbox && checkbox.checked;
			},
			addClass,
			removeClass,
			getAttr,
			addAttr
		};

		dispatch(getElement(), "SMUI:data-table:row:mount", accessor);

		return () => {
			dispatch(getElement(), "SMUI:data-table:row:unmount");
		};
	});

	function addClass(className) {
		if (!internalClasses[className]) {
			$$invalidate(4, internalClasses[className] = true, internalClasses);
		}
	}

	function removeClass(className) {
		if (!(className in internalClasses) || internalClasses[className]) {
			$$invalidate(4, internalClasses[className] = false, internalClasses);
		}
	}

	function getAttr(name) {
		return name in internalAttrs
		? internalAttrs[name]
		: getElement().getAttribute(name);
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(5, internalAttrs[name] = value, internalAttrs);
		}
	}

	function notifyHeaderClick(event) {
		dispatch(getElement(), "SMUI:data-table:header:click", event);
	}

	function getElement() {
		return element;
	}

	function tr_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(2, element);
		});
	}

	const click_handler = event => header && notifyHeaderClick(event);
	const SMUI_checkbox_mount_handler = event => $$invalidate(3, checkbox = event.detail);
	const SMUI_checkbox_unmount_handler = () => $$invalidate(3, checkbox = undefined);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("rowId" in $$new_props) $$invalidate(10, rowId = $$new_props.rowId);
		if ("$$scope" in $$new_props) $$invalidate(12, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		counter: counter$1,
		onMount,
		getContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		dispatch,
		forwardEvents,
		use,
		className,
		rowId,
		element,
		checkbox,
		internalClasses,
		internalAttrs,
		header,
		addClass,
		removeClass,
		getAttr,
		addAttr,
		notifyHeaderClick,
		getElement
	});

	$$self.$inject_state = $$new_props => {
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("rowId" in $$props) $$invalidate(10, rowId = $$new_props.rowId);
		if ("element" in $$props) $$invalidate(2, element = $$new_props.element);
		if ("checkbox" in $$props) $$invalidate(3, checkbox = $$new_props.checkbox);
		if ("internalClasses" in $$props) $$invalidate(4, internalClasses = $$new_props.internalClasses);
		if ("internalAttrs" in $$props) $$invalidate(5, internalAttrs = $$new_props.internalAttrs);
		if ("header" in $$props) $$invalidate(7, header = $$new_props.header);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		element,
		checkbox,
		internalClasses,
		internalAttrs,
		forwardEvents,
		header,
		notifyHeaderClick,
		$$restProps,
		rowId,
		getElement,
		$$scope,
		slots,
		tr_binding,
		click_handler,
		SMUI_checkbox_mount_handler,
		SMUI_checkbox_unmount_handler
	];
}

class Row extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			use: 0,
			class: 1,
			rowId: 10,
			getElement: 11
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Row",
			options,
			id: create_fragment$1.name
		});
	}

	get use() {
		throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set use(value) {
		throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get class() {
		throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set class(value) {
		throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get rowId() {
		throw new Error("<Row>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set rowId(value) {
		throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[11];
	}

	set getElement(value) {
		throw new Error("<Row>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* packages/data-table/Cell.svelte generated by Svelte v3.37.0 */

const file = "packages/data-table/Cell.svelte";

// (39:0) {:else}
function create_else_block_1(ctx) {
	let td;
	let td_class_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

	let td_levels = [
		{
			class: td_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-data-table__cell": true,
				"mdc-data-table__cell--numeric": /*numeric*/ ctx[2],
				"mdc-data-table__cell--checkbox": /*checkbox*/ ctx[3],
				.../*internalClasses*/ ctx[7]
			})
		},
		/*internalAttrs*/ ctx[8],
		/*$$restProps*/ ctx[19]
	];

	let td_data = {};

	for (let i = 0; i < td_levels.length; i += 1) {
		td_data = assign(td_data, td_levels[i]);
	}

	const block = {
		c: function create() {
			td = element("td");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			td = claim_element(nodes, "TD", { class: true });
			var td_nodes = children(td);
			if (default_slot) default_slot.l(td_nodes);
			td_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(td, td_data);
			add_location(td, file, 39, 2, 1200);
		},
		m: function mount(target, anchor) {
			insert_dev(target, td, anchor);

			if (default_slot) {
				default_slot.m(td, null);
			}

			/*td_binding*/ ctx[25](td);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, td, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[11].call(null, td)),
					listen_dev(td, "change", /*change_handler_1*/ ctx[26], false, false, false)
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

			set_attributes(td, td_data = get_spread_update(td_levels, [
				(!current || dirty & /*className, numeric, checkbox, internalClasses*/ 142 && td_class_value !== (td_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-data-table__cell": true,
					"mdc-data-table__cell--numeric": /*numeric*/ ctx[2],
					"mdc-data-table__cell--checkbox": /*checkbox*/ ctx[3],
					.../*internalClasses*/ ctx[7]
				}))) && { class: td_class_value },
				dirty & /*internalAttrs*/ 256 && /*internalAttrs*/ ctx[8],
				dirty & /*$$restProps*/ 524288 && /*$$restProps*/ ctx[19]
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
			if (detaching) detach_dev(td);
			if (default_slot) default_slot.d(detaching);
			/*td_binding*/ ctx[25](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block_1.name,
		type: "else",
		source: "(39:0) {:else}",
		ctx
	});

	return block;
}

// (1:0) {#if header}
function create_if_block(ctx) {
	let th;
	let current_block_type_index;
	let if_block;
	let th_class_value;
	let th_aria_sort_value;
	let useActions_action;
	let current;
	let mounted;
	let dispose;
	const if_block_creators = [create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type_1(ctx, dirty) {
		if (/*sortable*/ ctx[5]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type_1(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	let th_levels = [
		{
			class: th_class_value = classMap({
				[/*className*/ ctx[1]]: true,
				"mdc-data-table__header-cell": true,
				"mdc-data-table__header-cell--numeric": /*numeric*/ ctx[2],
				"mdc-data-table__header-cell--checkbox": /*checkbox*/ ctx[3],
				"mdc-data-table__header-cell--with-sort": /*sortable*/ ctx[5],
				"mdc-data-table__header-cell--sorted": /*sortable*/ ctx[5] && /*$sort*/ ctx[9] === /*columnId*/ ctx[4],
				.../*internalClasses*/ ctx[7]
			})
		},
		{ role: "columnheader" },
		{ scope: "col" },
		{ "data-column-id": /*columnId*/ ctx[4] },
		{
			"aria-sort": th_aria_sort_value = /*sortable*/ ctx[5]
			? /*$sort*/ ctx[9] === /*columnId*/ ctx[4]
				? /*$sortDirection*/ ctx[10]
				: "none"
			: null
		},
		/*internalAttrs*/ ctx[8],
		/*$$restProps*/ ctx[19]
	];

	let th_data = {};

	for (let i = 0; i < th_levels.length; i += 1) {
		th_data = assign(th_data, th_levels[i]);
	}

	const block = {
		c: function create() {
			th = element("th");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			th = claim_element(nodes, "TH", {
				class: true,
				role: true,
				scope: true,
				"data-column-id": true,
				"aria-sort": true
			});

			var th_nodes = children(th);
			if_block.l(th_nodes);
			th_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_attributes(th, th_data);
			add_location(th, file, 1, 2, 15);
		},
		m: function mount(target, anchor) {
			insert_dev(target, th, anchor);
			if_blocks[current_block_type_index].m(th, null);
			/*th_binding*/ ctx[23](th);
			current = true;

			if (!mounted) {
				dispose = [
					action_destroyer(useActions_action = useActions.call(null, th, /*use*/ ctx[0])),
					action_destroyer(/*forwardEvents*/ ctx[11].call(null, th)),
					listen_dev(th, "change", /*change_handler*/ ctx[24], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type_1(ctx);

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
				if_block.m(th, null);
			}

			set_attributes(th, th_data = get_spread_update(th_levels, [
				(!current || dirty & /*className, numeric, checkbox, sortable, $sort, columnId, internalClasses*/ 702 && th_class_value !== (th_class_value = classMap({
					[/*className*/ ctx[1]]: true,
					"mdc-data-table__header-cell": true,
					"mdc-data-table__header-cell--numeric": /*numeric*/ ctx[2],
					"mdc-data-table__header-cell--checkbox": /*checkbox*/ ctx[3],
					"mdc-data-table__header-cell--with-sort": /*sortable*/ ctx[5],
					"mdc-data-table__header-cell--sorted": /*sortable*/ ctx[5] && /*$sort*/ ctx[9] === /*columnId*/ ctx[4],
					.../*internalClasses*/ ctx[7]
				}))) && { class: th_class_value },
				{ role: "columnheader" },
				{ scope: "col" },
				(!current || dirty & /*columnId*/ 16) && { "data-column-id": /*columnId*/ ctx[4] },
				(!current || dirty & /*sortable, $sort, columnId, $sortDirection*/ 1584 && th_aria_sort_value !== (th_aria_sort_value = /*sortable*/ ctx[5]
				? /*$sort*/ ctx[9] === /*columnId*/ ctx[4]
					? /*$sortDirection*/ ctx[10]
					: "none"
				: null)) && { "aria-sort": th_aria_sort_value },
				dirty & /*internalAttrs*/ 256 && /*internalAttrs*/ ctx[8],
				dirty & /*$$restProps*/ 524288 && /*$$restProps*/ ctx[19]
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
			if (detaching) detach_dev(th);
			if_blocks[current_block_type_index].d();
			/*th_binding*/ ctx[23](null);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(1:0) {#if header}",
		ctx
	});

	return block;
}

// (37:4) {:else}
function create_else_block(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

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
				if (default_slot.p && dirty & /*$$scope*/ 2097152) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[21], dirty, null, null);
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
		id: create_else_block.name,
		type: "else",
		source: "(37:4) {:else}",
		ctx
	});

	return block;
}

// (22:5) {#if sortable}
function create_if_block_1(ctx) {
	let div1;
	let t0;
	let div0;

	let t1_value = (/*$sort*/ ctx[9] === /*columnId*/ ctx[4]
	? /*$sortDirection*/ ctx[10] === "ascending"
		? /*sortAscendingAriaLabel*/ ctx[15]
		: /*sortDescendingAriaLabel*/ ctx[16]
	: "") + "";

	let t1;
	let div0_id_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[22].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[21], null);

	const block = {
		c: function create() {
			div1 = element("div");
			if (default_slot) default_slot.c();
			t0 = space();
			div0 = element("div");
			t1 = text(t1_value);
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (default_slot) default_slot.l(div1_nodes);
			t0 = claim_space(div1_nodes);

			div0 = claim_element(div1_nodes, "DIV", {
				class: true,
				"aria-hidden": true,
				id: true
			});

			var div0_nodes = children(div0);
			t1 = claim_text(div0_nodes, t1_value);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "mdc-data-table__sort-status-label");
			attr_dev(div0, "aria-hidden", "true");
			attr_dev(div0, "id", div0_id_value = "" + (/*columnId*/ ctx[4] + "-status-label"));
			add_location(div0, file, 24, 8, 822);
			attr_dev(div1, "class", "mdc-data-table__header-cell-wrapper");
			add_location(div1, file, 22, 6, 747);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, t1);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 2097152) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[21], dirty, null, null);
				}
			}

			if ((!current || dirty & /*$sort, columnId, $sortDirection*/ 1552) && t1_value !== (t1_value = (/*$sort*/ ctx[9] === /*columnId*/ ctx[4]
			? /*$sortDirection*/ ctx[10] === "ascending"
				? /*sortAscendingAriaLabel*/ ctx[15]
				: /*sortDescendingAriaLabel*/ ctx[16]
			: "") + "")) set_data_dev(t1, t1_value);

			if (!current || dirty & /*columnId*/ 16 && div0_id_value !== (div0_id_value = "" + (/*columnId*/ ctx[4] + "-status-label"))) {
				attr_dev(div0, "id", div0_id_value);
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
			if (detaching) detach_dev(div1);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(22:5) {#if sortable}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block_1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*header*/ ctx[12]) return 0;
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
			if_block.p(ctx, dirty);
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

let counter = 0;

function instance($$self, $$props, $$invalidate) {
	const omit_props_names = ["use","class","numeric","checkbox","columnId","sortable","getElement"];
	let $$restProps = compute_rest_props($$props, omit_props_names);
	let $sort;
	let $sortDirection;
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Cell", slots, ['default']);
	const forwardEvents = forwardEventsBuilder(get_current_component());
	let header = getContext("SMUI:data-table:row:header");
	let { use = [] } = $$props;
	let { class: className = "" } = $$props;
	let { numeric = false } = $$props;
	let { checkbox = false } = $$props;
	let { columnId = header ? "SMUI-data-table-column-" + counter++ : null } = $$props;
	let { sortable = getContext("SMUI:data-table:sortable") } = $$props;
	let element;
	let internalClasses = {};
	let internalAttrs = {};
	let sort = getContext("SMUI:data-table:sort");
	validate_store(sort, "sort");
	component_subscribe($$self, sort, value => $$invalidate(9, $sort = value));
	let sortDirection = getContext("SMUI:data-table:sortDirection");
	validate_store(sortDirection, "sortDirection");
	component_subscribe($$self, sortDirection, value => $$invalidate(10, $sortDirection = value));
	let sortAscendingAriaLabel = getContext("SMUI:data-table:sortAscendingAriaLabel");
	let sortDescendingAriaLabel = getContext("SMUI:data-table:sortDescendingAriaLabel");

	if (sortable) {
		setContext("SMUI:label:context", "data-table:sortable-header-cell");
		setContext("SMUI:icon-button:context", "data-table:sortable-header-cell");
		setContext("SMUI:icon-button:aria-describedby", columnId + "-status-label");
	}

	onMount(() => {
		const accessor = {
			_smui_data_table_header_cell_accessor: header,
			get element() {
				return getElement();
			},
			get columnId() {
				return columnId;
			},
			addClass,
			removeClass,
			getAttr,
			addAttr
		};

		dispatch(getElement(), "SMUI:data-table:cell:mount", accessor);

		return () => {
			dispatch(getElement(), "SMUI:data-table:cell:unmount");
		};
	});

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

	function getAttr(name) {
		return name in internalAttrs
		? internalAttrs[name]
		: getElement().getAttribute(name);
	}

	function addAttr(name, value) {
		if (internalAttrs[name] !== value) {
			$$invalidate(8, internalAttrs[name] = value, internalAttrs);
		}
	}

	function notifyHeaderChange(event) {
		dispatch(getElement(), "SMUI:data-table:header:checkbox:change", event);
	}

	function notifyBodyChange(event) {
		dispatch(getElement(), "SMUI:data-table:body:checkbox:change", event);
	}

	function getElement() {
		return element;
	}

	function th_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(6, element);
		});
	}

	const change_handler = event => checkbox && notifyHeaderChange(event);

	function td_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			element = $$value;
			$$invalidate(6, element);
		});
	}

	const change_handler_1 = event => checkbox && notifyBodyChange(event);

	$$self.$$set = $$new_props => {
		$$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
		$$invalidate(19, $$restProps = compute_rest_props($$props, omit_props_names));
		if ("use" in $$new_props) $$invalidate(0, use = $$new_props.use);
		if ("class" in $$new_props) $$invalidate(1, className = $$new_props.class);
		if ("numeric" in $$new_props) $$invalidate(2, numeric = $$new_props.numeric);
		if ("checkbox" in $$new_props) $$invalidate(3, checkbox = $$new_props.checkbox);
		if ("columnId" in $$new_props) $$invalidate(4, columnId = $$new_props.columnId);
		if ("sortable" in $$new_props) $$invalidate(5, sortable = $$new_props.sortable);
		if ("$$scope" in $$new_props) $$invalidate(21, $$scope = $$new_props.$$scope);
	};

	$$self.$capture_state = () => ({
		counter,
		onMount,
		getContext,
		setContext,
		get_current_component,
		forwardEventsBuilder,
		classMap,
		useActions,
		dispatch,
		forwardEvents,
		header,
		use,
		className,
		numeric,
		checkbox,
		columnId,
		sortable,
		element,
		internalClasses,
		internalAttrs,
		sort,
		sortDirection,
		sortAscendingAriaLabel,
		sortDescendingAriaLabel,
		addClass,
		removeClass,
		getAttr,
		addAttr,
		notifyHeaderChange,
		notifyBodyChange,
		getElement,
		$sort,
		$sortDirection
	});

	$$self.$inject_state = $$new_props => {
		if ("header" in $$props) $$invalidate(12, header = $$new_props.header);
		if ("use" in $$props) $$invalidate(0, use = $$new_props.use);
		if ("className" in $$props) $$invalidate(1, className = $$new_props.className);
		if ("numeric" in $$props) $$invalidate(2, numeric = $$new_props.numeric);
		if ("checkbox" in $$props) $$invalidate(3, checkbox = $$new_props.checkbox);
		if ("columnId" in $$props) $$invalidate(4, columnId = $$new_props.columnId);
		if ("sortable" in $$props) $$invalidate(5, sortable = $$new_props.sortable);
		if ("element" in $$props) $$invalidate(6, element = $$new_props.element);
		if ("internalClasses" in $$props) $$invalidate(7, internalClasses = $$new_props.internalClasses);
		if ("internalAttrs" in $$props) $$invalidate(8, internalAttrs = $$new_props.internalAttrs);
		if ("sort" in $$props) $$invalidate(13, sort = $$new_props.sort);
		if ("sortDirection" in $$props) $$invalidate(14, sortDirection = $$new_props.sortDirection);
		if ("sortAscendingAriaLabel" in $$props) $$invalidate(15, sortAscendingAriaLabel = $$new_props.sortAscendingAriaLabel);
		if ("sortDescendingAriaLabel" in $$props) $$invalidate(16, sortDescendingAriaLabel = $$new_props.sortDescendingAriaLabel);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		use,
		className,
		numeric,
		checkbox,
		columnId,
		sortable,
		element,
		internalClasses,
		internalAttrs,
		$sort,
		$sortDirection,
		forwardEvents,
		header,
		sort,
		sortDirection,
		sortAscendingAriaLabel,
		sortDescendingAriaLabel,
		notifyHeaderChange,
		notifyBodyChange,
		$$restProps,
		getElement,
		$$scope,
		slots,
		th_binding,
		change_handler,
		td_binding,
		change_handler_1
	];
}

class Cell extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance, create_fragment, safe_not_equal, {
			use: 0,
			class: 1,
			numeric: 2,
			checkbox: 3,
			columnId: 4,
			sortable: 5,
			getElement: 20
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Cell",
			options,
			id: create_fragment.name
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

	get numeric() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set numeric(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get checkbox() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set checkbox(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get columnId() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set columnId(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get sortable() {
		throw new Error("<Cell>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set sortable(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get getElement() {
		return this.$$.ctx[20];
	}

	set getElement(value) {
		throw new Error("<Cell>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Body as B, Cell as C, DataTable as D, Head as H, Row as R, classMap as c, exclude as e, forwardEventsBuilder as f, prefixFilter as p, useActions as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbC5lNzljYTc1ZC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcGFja2FnZXMvZGF0YS10YWJsZS9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGF0YS10YWJsZS9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL2Jhc2UvZm91bmRhdGlvbi5qcyIsIi4uLy4uLy4uL3BhY2thZ2VzL2RhdGEtdGFibGUvbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC9kb20vcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kYXRhLXRhYmxlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGF0YS10YWJsZS9jb25zdGFudHMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kYXRhLXRhYmxlL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwvZGF0YS10YWJsZS9mb3VuZGF0aW9uLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGF0YS10YWJsZS9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2ZvcndhcmRFdmVudHNCdWlsZGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGF0YS10YWJsZS9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2NsYXNzTWFwLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGF0YS10YWJsZS9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2Rpc3BhdGNoLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGF0YS10YWJsZS9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL2V4Y2x1ZGUuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kYXRhLXRhYmxlL25vZGVfbW9kdWxlcy9Ac211aS9jb21tb24vcHJlZml4RmlsdGVyLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvZGF0YS10YWJsZS9ub2RlX21vZHVsZXMvQHNtdWkvY29tbW9uL3VzZUFjdGlvbnMuanMiLCIuLi8uLi8uLi9wYWNrYWdlcy9kYXRhLXRhYmxlL0RhdGFUYWJsZS5zdmVsdGUiLCIuLi8uLi8uLi9wYWNrYWdlcy9kYXRhLXRhYmxlL0hlYWQuc3ZlbHRlIiwiLi4vLi4vLi4vcGFja2FnZXMvZGF0YS10YWJsZS9Cb2R5LnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL2RhdGEtdGFibGUvUm93LnN2ZWx0ZSIsIi4uLy4uLy4uL3BhY2thZ2VzL2RhdGEtdGFibGUvQ2VsbC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20pIHtcclxuICAgIGZvciAodmFyIGkgPSAwLCBpbCA9IGZyb20ubGVuZ3RoLCBqID0gdG8ubGVuZ3RoOyBpIDwgaWw7IGkrKywgaisrKVxyXG4gICAgICAgIHRvW2pdID0gZnJvbVtpXTtcclxuICAgIHJldHVybiB0bztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE2IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xudmFyIE1EQ0ZvdW5kYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTURDRm91bmRhdGlvbihhZGFwdGVyKSB7XG4gICAgICAgIGlmIChhZGFwdGVyID09PSB2b2lkIDApIHsgYWRhcHRlciA9IHt9OyB9XG4gICAgICAgIHRoaXMuYWRhcHRlciA9IGFkYXB0ZXI7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcImNzc0NsYXNzZXNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgZXZlcnlcbiAgICAgICAgICAgIC8vIENTUyBjbGFzcyB0aGUgZm91bmRhdGlvbiBjbGFzcyBuZWVkcyBhcyBhIHByb3BlcnR5LiBlLmcuIHtBQ1RJVkU6ICdtZGMtY29tcG9uZW50LS1hY3RpdmUnfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwic3RyaW5nc1wiLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gQ2xhc3NlcyBleHRlbmRpbmcgTURDRm91bmRhdGlvbiBzaG91bGQgaW1wbGVtZW50IHRoaXMgbWV0aG9kIHRvIHJldHVybiBhbiBvYmplY3Qgd2hpY2ggZXhwb3J0cyBhbGxcbiAgICAgICAgICAgIC8vIHNlbWFudGljIHN0cmluZ3MgYXMgY29uc3RhbnRzLiBlLmcuIHtBUklBX1JPTEU6ICd0YWJsaXN0J31cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENGb3VuZGF0aW9uLCBcIm51bWJlcnNcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gc2hvdWxkIGltcGxlbWVudCB0aGlzIG1ldGhvZCB0byByZXR1cm4gYW4gb2JqZWN0IHdoaWNoIGV4cG9ydHMgYWxsXG4gICAgICAgICAgICAvLyBvZiBpdHMgc2VtYW50aWMgbnVtYmVycyBhcyBjb25zdGFudHMuIGUuZy4ge0FOSU1BVElPTl9ERUxBWV9NUzogMzUwfVxuICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1EQ0ZvdW5kYXRpb24sIFwiZGVmYXVsdEFkYXB0ZXJcIiwge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIENsYXNzZXMgZXh0ZW5kaW5nIE1EQ0ZvdW5kYXRpb24gbWF5IGNob29zZSB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIgaW4gb3JkZXIgdG8gcHJvdmlkZSBhIGNvbnZlbmllbnRcbiAgICAgICAgICAgIC8vIHdheSBvZiB2aWV3aW5nIHRoZSBuZWNlc3NhcnkgbWV0aG9kcyBvZiBhbiBhZGFwdGVyLiBJbiB0aGUgZnV0dXJlLCB0aGlzIGNvdWxkIGFsc28gYmUgdXNlZCBmb3IgYWRhcHRlclxuICAgICAgICAgICAgLy8gdmFsaWRhdGlvbi5cbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKHJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIE1EQ0ZvdW5kYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFN1YmNsYXNzZXMgc2hvdWxkIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHBlcmZvcm0gZGUtaW5pdGlhbGl6YXRpb24gcm91dGluZXMgKGRlLXJlZ2lzdGVyaW5nIGV2ZW50cywgZXRjLilcbiAgICB9O1xuICAgIHJldHVybiBNRENGb3VuZGF0aW9uO1xufSgpKTtcbmV4cG9ydCB7IE1EQ0ZvdW5kYXRpb24gfTtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1kZWZhdWx0LWV4cG9ydCBOZWVkZWQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgd2l0aCBNREMgV2ViIHYwLjQ0LjAgYW5kIGVhcmxpZXIuXG5leHBvcnQgZGVmYXVsdCBNRENGb3VuZGF0aW9uO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91bmRhdGlvbi5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBBIFwicG9ueWZpbGxcIiBpcyBhIHBvbHlmaWxsIHRoYXQgZG9lc24ndCBtb2RpZnkgdGhlIGdsb2JhbCBwcm90b3R5cGUgY2hhaW4uXG4gKiBUaGlzIG1ha2VzIHBvbnlmaWxscyBzYWZlciB0aGFuIHRyYWRpdGlvbmFsIHBvbHlmaWxscywgZXNwZWNpYWxseSBmb3IgbGlicmFyaWVzIGxpa2UgTURDLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VzdChlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIGlmIChlbGVtZW50LmNsb3Nlc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuY2xvc2VzdChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBlbCA9IGVsZW1lbnQ7XG4gICAgd2hpbGUgKGVsKSB7XG4gICAgICAgIGlmIChtYXRjaGVzKGVsLCBzZWxlY3RvcikpIHtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuICAgICAgICBlbCA9IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgbmF0aXZlTWF0Y2hlcyA9IGVsZW1lbnQubWF0Y2hlc1xuICAgICAgICB8fCBlbGVtZW50LndlYmtpdE1hdGNoZXNTZWxlY3RvclxuICAgICAgICB8fCBlbGVtZW50Lm1zTWF0Y2hlc1NlbGVjdG9yO1xuICAgIHJldHVybiBuYXRpdmVNYXRjaGVzLmNhbGwoZWxlbWVudCwgc2VsZWN0b3IpO1xufVxuLyoqXG4gKiBVc2VkIHRvIGNvbXB1dGUgdGhlIGVzdGltYXRlZCBzY3JvbGwgd2lkdGggb2YgZWxlbWVudHMuIFdoZW4gYW4gZWxlbWVudCBpc1xuICogaGlkZGVuIGR1ZSB0byBkaXNwbGF5OiBub25lOyBiZWluZyBhcHBsaWVkIHRvIGEgcGFyZW50IGVsZW1lbnQsIHRoZSB3aWR0aCBpc1xuICogcmV0dXJuZWQgYXMgMC4gSG93ZXZlciwgdGhlIGVsZW1lbnQgd2lsbCBoYXZlIGEgdHJ1ZSB3aWR0aCBvbmNlIG5vIGxvbmdlclxuICogaW5zaWRlIGEgZGlzcGxheTogbm9uZSBjb250ZXh0LiBUaGlzIG1ldGhvZCBjb21wdXRlcyBhbiBlc3RpbWF0ZWQgd2lkdGggd2hlblxuICogdGhlIGVsZW1lbnQgaXMgaGlkZGVuIG9yIHJldHVybnMgdGhlIHRydWUgd2lkdGggd2hlbiB0aGUgZWxlbWVudCBpcyB2aXNibGUuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnQgdGhlIGVsZW1lbnQgd2hvc2Ugd2lkdGggdG8gZXN0aW1hdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVzdGltYXRlU2Nyb2xsV2lkdGgoZWxlbWVudCkge1xuICAgIC8vIENoZWNrIHRoZSBvZmZzZXRQYXJlbnQuIElmIHRoZSBlbGVtZW50IGluaGVyaXRzIGRpc3BsYXk6IG5vbmUgZnJvbSBhbnlcbiAgICAvLyBwYXJlbnQsIHRoZSBvZmZzZXRQYXJlbnQgcHJvcGVydHkgd2lsbCBiZSBudWxsIChzZWVcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSFRNTEVsZW1lbnQvb2Zmc2V0UGFyZW50KS5cbiAgICAvLyBUaGlzIGNoZWNrIGVuc3VyZXMgd2Ugb25seSBjbG9uZSB0aGUgbm9kZSB3aGVuIG5lY2Vzc2FyeS5cbiAgICB2YXIgaHRtbEVsID0gZWxlbWVudDtcbiAgICBpZiAoaHRtbEVsLm9mZnNldFBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gaHRtbEVsLnNjcm9sbFdpZHRoO1xuICAgIH1cbiAgICB2YXIgY2xvbmUgPSBodG1sRWwuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNsb25lLnN0eWxlLnNldFByb3BlcnR5KCdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xuICAgIGNsb25lLnN0eWxlLnNldFByb3BlcnR5KCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKC05OTk5cHgsIC05OTk5cHgpJyk7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICB2YXIgc2Nyb2xsV2lkdGggPSBjbG9uZS5zY3JvbGxXaWR0aDtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2xvbmUpO1xuICAgIHJldHVybiBzY3JvbGxXaWR0aDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbnlmaWxsLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBJbmMuXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqL1xuLyoqXG4gKiBDU1MgY2xhc3MgbmFtZXMgdXNlZCBpbiBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCB2YXIgY3NzQ2xhc3NlcyA9IHtcbiAgICBDRUxMOiAnbWRjLWRhdGEtdGFibGVfX2NlbGwnLFxuICAgIENFTExfTlVNRVJJQzogJ21kYy1kYXRhLXRhYmxlX19jZWxsLS1udW1lcmljJyxcbiAgICBDT05URU5UOiAnbWRjLWRhdGEtdGFibGVfX2NvbnRlbnQnLFxuICAgIEhFQURFUl9DRUxMOiAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsJyxcbiAgICBIRUFERVJfQ0VMTF9MQUJFTDogJ21kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC1sYWJlbCcsXG4gICAgSEVBREVSX0NFTExfU09SVEVEOiAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1zb3J0ZWQnLFxuICAgIEhFQURFUl9DRUxMX1NPUlRFRF9ERVNDRU5ESU5HOiAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1zb3J0ZWQtZGVzY2VuZGluZycsXG4gICAgSEVBREVSX0NFTExfV0lUSF9TT1JUOiAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS13aXRoLXNvcnQnLFxuICAgIEhFQURFUl9DRUxMX1dSQVBQRVI6ICdtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwtd3JhcHBlcicsXG4gICAgSEVBREVSX1JPVzogJ21kYy1kYXRhLXRhYmxlX19oZWFkZXItcm93JyxcbiAgICBIRUFERVJfUk9XX0NIRUNLQk9YOiAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1yb3ctY2hlY2tib3gnLFxuICAgIElOX1BST0dSRVNTOiAnbWRjLWRhdGEtdGFibGUtLWluLXByb2dyZXNzJyxcbiAgICBMSU5FQVJfUFJPR1JFU1M6ICdtZGMtZGF0YS10YWJsZV9fbGluZWFyLXByb2dyZXNzJyxcbiAgICBQQUdJTkFUSU9OX1JPV1NfUEVSX1BBR0VfTEFCRUw6ICdtZGMtZGF0YS10YWJsZV9fcGFnaW5hdGlvbi1yb3dzLXBlci1wYWdlLWxhYmVsJyxcbiAgICBQQUdJTkFUSU9OX1JPV1NfUEVSX1BBR0VfU0VMRUNUOiAnbWRjLWRhdGEtdGFibGVfX3BhZ2luYXRpb24tcm93cy1wZXItcGFnZS1zZWxlY3QnLFxuICAgIFBST0dSRVNTX0lORElDQVRPUjogJ21kYy1kYXRhLXRhYmxlX19wcm9ncmVzcy1pbmRpY2F0b3InLFxuICAgIFJPT1Q6ICdtZGMtZGF0YS10YWJsZScsXG4gICAgUk9XOiAnbWRjLWRhdGEtdGFibGVfX3JvdycsXG4gICAgUk9XX0NIRUNLQk9YOiAnbWRjLWRhdGEtdGFibGVfX3Jvdy1jaGVja2JveCcsXG4gICAgUk9XX1NFTEVDVEVEOiAnbWRjLWRhdGEtdGFibGVfX3Jvdy0tc2VsZWN0ZWQnLFxuICAgIFNPUlRfSUNPTl9CVVRUT046ICdtZGMtZGF0YS10YWJsZV9fc29ydC1pY29uLWJ1dHRvbicsXG4gICAgU09SVF9TVEFUVVNfTEFCRUw6ICdtZGMtZGF0YS10YWJsZV9fc29ydC1zdGF0dXMtbGFiZWwnLFxuICAgIFRBQkxFX0NPTlRBSU5FUjogJ21kYy1kYXRhLXRhYmxlX190YWJsZS1jb250YWluZXInLFxufTtcbi8qKlxuICogRE9NIGF0dHJpYnV0ZXMgdXNlZCBpbiBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCB2YXIgYXR0cmlidXRlcyA9IHtcbiAgICBBUklBX1NFTEVDVEVEOiAnYXJpYS1zZWxlY3RlZCcsXG4gICAgQVJJQV9TT1JUOiAnYXJpYS1zb3J0Jyxcbn07XG4vKipcbiAqIExpc3Qgb2YgZGF0YSBhdHRyaWJ1dGVzIHVzZWQgaW4gY29tcG9uZW50LlxuICovXG5leHBvcnQgdmFyIGRhdGFBdHRyaWJ1dGVzID0ge1xuICAgIENPTFVNTl9JRDogJ2RhdGEtY29sdW1uLWlkJyxcbiAgICBST1dfSUQ6ICdkYXRhLXJvdy1pZCcsXG59O1xuLyoqXG4gKiBDU1Mgc2VsZWN0b3JzIHVzZWQgaW4gY29tcG9uZW50LlxuICovXG5leHBvcnQgdmFyIHNlbGVjdG9ycyA9IHtcbiAgICBDT05URU5UOiBcIi5cIiArIGNzc0NsYXNzZXMuQ09OVEVOVCxcbiAgICBIRUFERVJfQ0VMTDogXCIuXCIgKyBjc3NDbGFzc2VzLkhFQURFUl9DRUxMLFxuICAgIEhFQURFUl9DRUxMX1dJVEhfU09SVDogXCIuXCIgKyBjc3NDbGFzc2VzLkhFQURFUl9DRUxMX1dJVEhfU09SVCxcbiAgICBIRUFERVJfUk9XOiBcIi5cIiArIGNzc0NsYXNzZXMuSEVBREVSX1JPVyxcbiAgICBIRUFERVJfUk9XX0NIRUNLQk9YOiBcIi5cIiArIGNzc0NsYXNzZXMuSEVBREVSX1JPV19DSEVDS0JPWCxcbiAgICBQUk9HUkVTU19JTkRJQ0FUT1I6IFwiLlwiICsgY3NzQ2xhc3Nlcy5QUk9HUkVTU19JTkRJQ0FUT1IsXG4gICAgUk9XOiBcIi5cIiArIGNzc0NsYXNzZXMuUk9XLFxuICAgIFJPV19DSEVDS0JPWDogXCIuXCIgKyBjc3NDbGFzc2VzLlJPV19DSEVDS0JPWCxcbiAgICBST1dfU0VMRUNURUQ6IFwiLlwiICsgY3NzQ2xhc3Nlcy5ST1dfU0VMRUNURUQsXG4gICAgU09SVF9JQ09OX0JVVFRPTjogXCIuXCIgKyBjc3NDbGFzc2VzLlNPUlRfSUNPTl9CVVRUT04sXG4gICAgU09SVF9TVEFUVVNfTEFCRUw6IFwiLlwiICsgY3NzQ2xhc3Nlcy5TT1JUX1NUQVRVU19MQUJFTCxcbn07XG4vKipcbiAqIE1lc3NhZ2VzIHVzZWQgaW4gY29tcG9uZW50LlxuICovXG5leHBvcnQgdmFyIG1lc3NhZ2VzID0ge1xuICAgIFNPUlRFRF9JTl9ERVNDRU5ESU5HOiAnU29ydGVkIGluIGRlc2NlbmRpbmcgb3JkZXInLFxuICAgIFNPUlRFRF9JTl9BU0NFTkRJTkc6ICdTb3J0ZWQgaW4gYXNjZW5kaW5nIG9yZGVyJyxcbn07XG4vKipcbiAqIEF0dHJpYnV0ZXMgYW5kIHNlbGVjdG9ycyB1c2VkIGluIGNvbXBvbmVudC5cbiAqIEBkZXByZWNhdGVkIFVzZSBgYXR0cmlidXRlc2AsIGBkYXRhQXR0cmlidXRlc2AgYW5kIGBzZWxlY3RvcnNgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCB2YXIgc3RyaW5ncyA9IHtcbiAgICBBUklBX1NFTEVDVEVEOiBhdHRyaWJ1dGVzLkFSSUFfU0VMRUNURUQsXG4gICAgQVJJQV9TT1JUOiBhdHRyaWJ1dGVzLkFSSUFfU09SVCxcbiAgICBEQVRBX1JPV19JRF9BVFRSOiBkYXRhQXR0cmlidXRlcy5ST1dfSUQsXG4gICAgSEVBREVSX1JPV19DSEVDS0JPWF9TRUxFQ1RPUjogc2VsZWN0b3JzLkhFQURFUl9ST1dfQ0hFQ0tCT1gsXG4gICAgUk9XX0NIRUNLQk9YX1NFTEVDVE9SOiBzZWxlY3RvcnMuUk9XX0NIRUNLQk9YLFxuICAgIFJPV19TRUxFQ1RFRF9TRUxFQ1RPUjogc2VsZWN0b3JzLlJPV19TRUxFQ1RFRCxcbiAgICBST1dfU0VMRUNUT1I6IHNlbGVjdG9ycy5ST1csXG59O1xuLyoqXG4gKiBTb3J0IHZhbHVlcyBkZWZpbmVkIGJ5IEFSSUEuXG4gKiBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1dBSS9QRi9hcmlhL3N0YXRlc19hbmRfcHJvcGVydGllcyNhcmlhLXNvcnRcbiAqL1xuZXhwb3J0IHZhciBTb3J0VmFsdWU7XG4oZnVuY3Rpb24gKFNvcnRWYWx1ZSkge1xuICAgIC8vIEl0ZW1zIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIG9yZGVyIGJ5IHRoaXMgY29sdW1uLlxuICAgIFNvcnRWYWx1ZVtcIkFTQ0VORElOR1wiXSA9IFwiYXNjZW5kaW5nXCI7XG4gICAgLy8gSXRlbXMgYXJlIHNvcnRlZCBpbiBkZXNjZW5kaW5nIG9yZGVyIGJ5IHRoaXMgY29sdW1uLlxuICAgIFNvcnRWYWx1ZVtcIkRFU0NFTkRJTkdcIl0gPSBcImRlc2NlbmRpbmdcIjtcbiAgICAvLyBUaGVyZSBpcyBubyBkZWZpbmVkIHNvcnQgYXBwbGllZCB0byB0aGUgY29sdW1uLlxuICAgIFNvcnRWYWx1ZVtcIk5PTkVcIl0gPSBcIm5vbmVcIjtcbiAgICAvLyBBIHNvcnQgYWxnb3JpdGhtIG90aGVyIHRoYW4gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcgaGFzIGJlZW4gYXBwbGllZC5cbiAgICBTb3J0VmFsdWVbXCJPVEhFUlwiXSA9IFwib3RoZXJcIjtcbn0pKFNvcnRWYWx1ZSB8fCAoU29ydFZhbHVlID0ge30pKTtcbi8qKlxuICogRXZlbnQgbmFtZXMgdXNlZCBpbiBjb21wb25lbnQuXG4gKi9cbmV4cG9ydCB2YXIgZXZlbnRzID0ge1xuICAgIFJPV19TRUxFQ1RJT05fQ0hBTkdFRDogJ01EQ0RhdGFUYWJsZTpyb3dTZWxlY3Rpb25DaGFuZ2VkJyxcbiAgICBTRUxFQ1RFRF9BTEw6ICdNRENEYXRhVGFibGU6c2VsZWN0ZWRBbGwnLFxuICAgIFVOU0VMRUNURURfQUxMOiAnTURDRGF0YVRhYmxlOnVuc2VsZWN0ZWRBbGwnLFxuICAgIFNPUlRFRDogJ01EQ0RhdGFUYWJsZTpzb3J0ZWQnLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgSW5jLlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbmltcG9ydCB7IF9fYXNzaWduLCBfX2F3YWl0ZXIsIF9fZXh0ZW5kcywgX19nZW5lcmF0b3IgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IE1EQ0ZvdW5kYXRpb24gfSBmcm9tICdAbWF0ZXJpYWwvYmFzZS9mb3VuZGF0aW9uJztcbmltcG9ydCB7IGNzc0NsYXNzZXMsIFNvcnRWYWx1ZSwgc3RyaW5ncyB9IGZyb20gJy4vY29uc3RhbnRzJztcbi8qKlxuICogVGhlIEZvdW5kYXRpb24gb2YgZGF0YSB0YWJsZSBjb21wb25lbnQgY29udGFpbmluZyBwdXJlIGJ1c2luZXNzIGxvZ2ljLCBhbnlcbiAqIGxvZ2ljIHJlcXVpcmluZyBET00gbWFuaXB1bGF0aW9uIGFyZSBkZWxlZ2F0ZWQgdG8gYWRhcHRlciBtZXRob2RzLlxuICovXG52YXIgTURDRGF0YVRhYmxlRm91bmRhdGlvbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoTURDRGF0YVRhYmxlRm91bmRhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBNRENEYXRhVGFibGVGb3VuZGF0aW9uKGFkYXB0ZXIpIHtcbiAgICAgICAgcmV0dXJuIF9zdXBlci5jYWxsKHRoaXMsIF9fYXNzaWduKF9fYXNzaWduKHt9LCBNRENEYXRhVGFibGVGb3VuZGF0aW9uLmRlZmF1bHRBZGFwdGVyKSwgYWRhcHRlcikpIHx8IHRoaXM7XG4gICAgfVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNRENEYXRhVGFibGVGb3VuZGF0aW9uLCBcImRlZmF1bHRBZGFwdGVyXCIsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgYWRkQ2xhc3NBdFJvd0luZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgZ2V0QXR0cmlidXRlQnlIZWFkZXJDZWxsSW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9LFxuICAgICAgICAgICAgICAgIGdldEhlYWRlckNlbGxDb3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRIZWFkZXJDZWxsRWxlbWVudHM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdOyB9LFxuICAgICAgICAgICAgICAgIGdldFJvd0NvdW50OiBmdW5jdGlvbiAoKSB7IHJldHVybiAwOyB9LFxuICAgICAgICAgICAgICAgIGdldFJvd0VsZW1lbnRzOiBmdW5jdGlvbiAoKSB7IHJldHVybiBbXTsgfSxcbiAgICAgICAgICAgICAgICBnZXRSb3dJZEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcnOyB9LFxuICAgICAgICAgICAgICAgIGdldFJvd0luZGV4QnlDaGlsZEVsZW1lbnQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDA7IH0sXG4gICAgICAgICAgICAgICAgZ2V0U2VsZWN0ZWRSb3dDb3VudDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRUYWJsZUNvbnRhaW5lckhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBnZXRUYWJsZUhlYWRlckhlaWdodDogZnVuY3Rpb24gKCkgeyByZXR1cm4gMDsgfSxcbiAgICAgICAgICAgICAgICBpc0NoZWNrYm94QXRSb3dJbmRleENoZWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIGlzSGVhZGVyUm93Q2hlY2tib3hDaGVja2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBpc1Jvd3NTZWxlY3RhYmxlOiBmdW5jdGlvbiAoKSB7IHJldHVybiBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlSb3dTZWxlY3Rpb25DaGFuZ2VkOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5U2VsZWN0ZWRBbGw6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBub3RpZnlTb3J0QWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgbm90aWZ5VW5zZWxlY3RlZEFsbDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlZ2lzdGVySGVhZGVyUm93Q2hlY2tib3g6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZWdpc3RlclJvd0NoZWNrYm94ZXM6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzQXRSb3dJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZUNsYXNzTmFtZUJ5SGVhZGVyQ2VsbEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0QXR0cmlidXRlQXRSb3dJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldEF0dHJpYnV0ZUJ5SGVhZGVyQ2VsbEluZGV4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB1bmRlZmluZWQ7IH0sXG4gICAgICAgICAgICAgICAgc2V0Q2xhc3NOYW1lQnlIZWFkZXJDZWxsSW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRIZWFkZXJSb3dDaGVja2JveENoZWNrZWQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRIZWFkZXJSb3dDaGVja2JveEluZGV0ZXJtaW5hdGU6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRQcm9ncmVzc0luZGljYXRvclN0eWxlczogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgICAgIHNldFJvd0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSxcbiAgICAgICAgICAgICAgICBzZXRTb3J0U3RhdHVzTGFiZWxCeUhlYWRlckNlbGxJbmRleDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIC8qKlxuICAgICAqIFJlLWluaXRpYWxpemVzIGhlYWRlciByb3cgY2hlY2tib3ggYW5kIHJvdyBjaGVja2JveGVzIHdoZW4gc2VsZWN0YWJsZSByb3dzIGFyZSBhZGRlZCBvciByZW1vdmVkIGZyb20gdGFibGUuXG4gICAgICogVXNlIHRoaXMgaWYgcmVnaXN0ZXJpbmcgY2hlY2tib3ggaXMgc3luY2hyb25vdXMuXG4gICAgICovXG4gICAgTURDRGF0YVRhYmxlRm91bmRhdGlvbi5wcm90b3R5cGUubGF5b3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmlzUm93c1NlbGVjdGFibGUoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnJlZ2lzdGVySGVhZGVyUm93Q2hlY2tib3goKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZWdpc3RlclJvd0NoZWNrYm94ZXMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0SGVhZGVyUm93Q2hlY2tib3hTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZS1pbml0aWFsaXplcyBoZWFkZXIgcm93IGNoZWNrYm94IGFuZCByb3cgY2hlY2tib3hlcyB3aGVuIHNlbGVjdGFibGUgcm93cyBhcmUgYWRkZWQgb3IgcmVtb3ZlZCBmcm9tIHRhYmxlLlxuICAgICAqIFVzZSB0aGlzIGlmIHJlZ2lzdGVyaW5nIGNoZWNrYm94IGlzIGFzeW5jaHJvbm91cy5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5sYXlvdXRBc3luYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFkYXB0ZXIuaXNSb3dzU2VsZWN0YWJsZSgpKSByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHRoaXMuYWRhcHRlci5yZWdpc3RlckhlYWRlclJvd0NoZWNrYm94KCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmFkYXB0ZXIucmVnaXN0ZXJSb3dDaGVja2JveGVzKCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEhlYWRlclJvd0NoZWNrYm94U3RhdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQHJldHVybiBSZXR1cm5zIGFycmF5IG9mIHJvdyBlbGVtZW50cy5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRSb3dzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldFJvd0VsZW1lbnRzKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIEFycmF5IG9mIGhlYWRlciBjZWxsIGVsZW1lbnRzLlxuICAgICAqL1xuICAgIE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24ucHJvdG90eXBlLmdldEhlYWRlckNlbGxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdldEhlYWRlckNlbGxFbGVtZW50cygpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBzZWxlY3RlZCByb3cgaWRzLiBPdmVyd3JpdGVzIHByZXZpb3VzbHkgc2VsZWN0ZWQgcm93cy5cbiAgICAgKiBAcGFyYW0gcm93SWRzIEFycmF5IG9mIHJvdyBpZHMgdGhhdCBuZWVkcyB0byBiZSBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRTZWxlY3RlZFJvd0lkcyA9IGZ1bmN0aW9uIChyb3dJZHMpIHtcbiAgICAgICAgZm9yICh2YXIgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IHRoaXMuYWRhcHRlci5nZXRSb3dDb3VudCgpOyByb3dJbmRleCsrKSB7XG4gICAgICAgICAgICB2YXIgcm93SWQgPSB0aGlzLmFkYXB0ZXIuZ2V0Um93SWRBdEluZGV4KHJvd0luZGV4KTtcbiAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAocm93SWQgJiYgcm93SWRzLmluZGV4T2Yocm93SWQpID49IDApIHtcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRSb3dDaGVja2JveENoZWNrZWRBdEluZGV4KHJvd0luZGV4LCBpc1NlbGVjdGVkKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Um93QXRJbmRleChyb3dJbmRleCwgaXNTZWxlY3RlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRIZWFkZXJSb3dDaGVja2JveFN0YXRlKCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgYXJyYXkgb2YgYWxsIHJvdyBpZHMuXG4gICAgICovXG4gICAgTURDRGF0YVRhYmxlRm91bmRhdGlvbi5wcm90b3R5cGUuZ2V0Um93SWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcm93SWRzID0gW107XG4gICAgICAgIGZvciAodmFyIHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCB0aGlzLmFkYXB0ZXIuZ2V0Um93Q291bnQoKTsgcm93SW5kZXgrKykge1xuICAgICAgICAgICAgcm93SWRzLnB1c2godGhpcy5hZGFwdGVyLmdldFJvd0lkQXRJbmRleChyb3dJbmRleCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dJZHM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBAcmV0dXJuIFJldHVybnMgYXJyYXkgb2Ygc2VsZWN0ZWQgcm93IGlkcy5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5nZXRTZWxlY3RlZFJvd0lkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGVjdGVkUm93SWRzID0gW107XG4gICAgICAgIGZvciAodmFyIHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCB0aGlzLmFkYXB0ZXIuZ2V0Um93Q291bnQoKTsgcm93SW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWRhcHRlci5pc0NoZWNrYm94QXRSb3dJbmRleENoZWNrZWQocm93SW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRSb3dJZHMucHVzaCh0aGlzLmFkYXB0ZXIuZ2V0Um93SWRBdEluZGV4KHJvd0luZGV4KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkUm93SWRzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBoZWFkZXIgcm93IGNoZWNrYm94IGNoYW5nZSBldmVudC5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVIZWFkZXJSb3dDaGVja2JveENoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzSGVhZGVyQ2hlY2tlZCA9IHRoaXMuYWRhcHRlci5pc0hlYWRlclJvd0NoZWNrYm94Q2hlY2tlZCgpO1xuICAgICAgICBmb3IgKHZhciByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgdGhpcy5hZGFwdGVyLmdldFJvd0NvdW50KCk7IHJvd0luZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRSb3dDaGVja2JveENoZWNrZWRBdEluZGV4KHJvd0luZGV4LCBpc0hlYWRlckNoZWNrZWQpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RSb3dBdEluZGV4KHJvd0luZGV4LCBpc0hlYWRlckNoZWNrZWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0hlYWRlckNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlTZWxlY3RlZEFsbCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeVVuc2VsZWN0ZWRBbGwoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBjaGFuZ2UgZXZlbnQgb3JpZ2luYXRlZCBmcm9tIHJvdyBjaGVja2JveGVzLlxuICAgICAqL1xuICAgIE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24ucHJvdG90eXBlLmhhbmRsZVJvd0NoZWNrYm94Q2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciByb3dJbmRleCA9IHRoaXMuYWRhcHRlci5nZXRSb3dJbmRleEJ5Q2hpbGRFbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgICAgIGlmIChyb3dJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2VsZWN0ZWQgPSB0aGlzLmFkYXB0ZXIuaXNDaGVja2JveEF0Um93SW5kZXhDaGVja2VkKHJvd0luZGV4KTtcbiAgICAgICAgdGhpcy5zZWxlY3RSb3dBdEluZGV4KHJvd0luZGV4LCBzZWxlY3RlZCk7XG4gICAgICAgIHRoaXMuc2V0SGVhZGVyUm93Q2hlY2tib3hTdGF0ZSgpO1xuICAgICAgICB2YXIgcm93SWQgPSB0aGlzLmFkYXB0ZXIuZ2V0Um93SWRBdEluZGV4KHJvd0luZGV4KTtcbiAgICAgICAgdGhpcy5hZGFwdGVyLm5vdGlmeVJvd1NlbGVjdGlvbkNoYW5nZWQoeyByb3dJZDogcm93SWQsIHJvd0luZGV4OiByb3dJbmRleCwgc2VsZWN0ZWQ6IHNlbGVjdGVkIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBzb3J0IGFjdGlvbiBvbiBzb3J0YWJsZSBoZWFkZXIgY2VsbC5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oYW5kbGVTb3J0QWN0aW9uID0gZnVuY3Rpb24gKGV2ZW50RGF0YSkge1xuICAgICAgICB2YXIgY29sdW1uSWQgPSBldmVudERhdGEuY29sdW1uSWQsIGNvbHVtbkluZGV4ID0gZXZlbnREYXRhLmNvbHVtbkluZGV4LCBoZWFkZXJDZWxsID0gZXZlbnREYXRhLmhlYWRlckNlbGw7XG4gICAgICAgIC8vIFJlc2V0IHNvcnQgYXR0cmlidXRlcyAvIGNsYXNzZXMgb24gb3RoZXIgaGVhZGVyIGNlbGxzLlxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5hZGFwdGVyLmdldEhlYWRlckNlbGxDb3VudCgpOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGNvbHVtbkluZGV4KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3NOYW1lQnlIZWFkZXJDZWxsSW5kZXgoaW5kZXgsIGNzc0NsYXNzZXMuSEVBREVSX0NFTExfU09SVEVEKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzc05hbWVCeUhlYWRlckNlbGxJbmRleChpbmRleCwgY3NzQ2xhc3Nlcy5IRUFERVJfQ0VMTF9TT1JURURfREVTQ0VORElORyk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cmlidXRlQnlIZWFkZXJDZWxsSW5kZXgoaW5kZXgsIHN0cmluZ3MuQVJJQV9TT1JULCBTb3J0VmFsdWUuTk9ORSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U29ydFN0YXR1c0xhYmVsQnlIZWFkZXJDZWxsSW5kZXgoaW5kZXgsIFNvcnRWYWx1ZS5OT05FKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTZXQgYXBwcm9wcmlhdGUgc29ydCBhdHRyaWJ1dGVzIC8gY2xhc3NlcyBvbiB0YXJnZXQgaGVhZGVyIGNlbGwuXG4gICAgICAgIHRoaXMuYWRhcHRlci5zZXRDbGFzc05hbWVCeUhlYWRlckNlbGxJbmRleChjb2x1bW5JbmRleCwgY3NzQ2xhc3Nlcy5IRUFERVJfQ0VMTF9TT1JURUQpO1xuICAgICAgICB2YXIgY3VycmVudFNvcnRWYWx1ZSA9IHRoaXMuYWRhcHRlci5nZXRBdHRyaWJ1dGVCeUhlYWRlckNlbGxJbmRleChjb2x1bW5JbmRleCwgc3RyaW5ncy5BUklBX1NPUlQpO1xuICAgICAgICB2YXIgc29ydFZhbHVlID0gU29ydFZhbHVlLk5PTkU7XG4gICAgICAgIC8vIFNldCB0byBkZXNjZW5kaW5nIGlmIHNvcnRlZCBvbiBhc2NlbmRpbmcgb3JkZXIuXG4gICAgICAgIGlmIChjdXJyZW50U29ydFZhbHVlID09PSBTb3J0VmFsdWUuQVNDRU5ESU5HKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0Q2xhc3NOYW1lQnlIZWFkZXJDZWxsSW5kZXgoY29sdW1uSW5kZXgsIGNzc0NsYXNzZXMuSEVBREVSX0NFTExfU09SVEVEX0RFU0NFTkRJTkcpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEF0dHJpYnV0ZUJ5SGVhZGVyQ2VsbEluZGV4KGNvbHVtbkluZGV4LCBzdHJpbmdzLkFSSUFfU09SVCwgU29ydFZhbHVlLkRFU0NFTkRJTkcpO1xuICAgICAgICAgICAgc29ydFZhbHVlID0gU29ydFZhbHVlLkRFU0NFTkRJTkc7XG4gICAgICAgICAgICAvLyBTZXQgdG8gYXNjZW5kaW5nIGlmIHNvcnRlZCBvbiBkZXNjZW5kaW5nIG9yZGVyLlxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRTb3J0VmFsdWUgPT09IFNvcnRWYWx1ZS5ERVNDRU5ESU5HKSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3NOYW1lQnlIZWFkZXJDZWxsSW5kZXgoY29sdW1uSW5kZXgsIGNzc0NsYXNzZXMuSEVBREVSX0NFTExfU09SVEVEX0RFU0NFTkRJTkcpO1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEF0dHJpYnV0ZUJ5SGVhZGVyQ2VsbEluZGV4KGNvbHVtbkluZGV4LCBzdHJpbmdzLkFSSUFfU09SVCwgU29ydFZhbHVlLkFTQ0VORElORyk7XG4gICAgICAgICAgICBzb3J0VmFsdWUgPSBTb3J0VmFsdWUuQVNDRU5ESU5HO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gU2V0IHRvIGFzY2VuZGluZyBieSBkZWZhdWx0IHdoZW4gbm90IHNvcnRlZC5cbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyaWJ1dGVCeUhlYWRlckNlbGxJbmRleChjb2x1bW5JbmRleCwgc3RyaW5ncy5BUklBX1NPUlQsIFNvcnRWYWx1ZS5BU0NFTkRJTkcpO1xuICAgICAgICAgICAgc29ydFZhbHVlID0gU29ydFZhbHVlLkFTQ0VORElORztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0U29ydFN0YXR1c0xhYmVsQnlIZWFkZXJDZWxsSW5kZXgoY29sdW1uSW5kZXgsIHNvcnRWYWx1ZSk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5ub3RpZnlTb3J0QWN0aW9uKHtcbiAgICAgICAgICAgIGNvbHVtbklkOiBjb2x1bW5JZCxcbiAgICAgICAgICAgIGNvbHVtbkluZGV4OiBjb2x1bW5JbmRleCxcbiAgICAgICAgICAgIGhlYWRlckNlbGw6IGhlYWRlckNlbGwsXG4gICAgICAgICAgICBzb3J0VmFsdWU6IHNvcnRWYWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTaG93cyBwcm9ncmVzcyBpbmRpY2F0b3IgYmxvY2tpbmcgb25seSB0aGUgdGFibGUgYm9keSBjb250ZW50IHdoZW4gaW5cbiAgICAgKiBsb2FkaW5nIHN0YXRlLlxuICAgICAqL1xuICAgIE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24ucHJvdG90eXBlLnNob3dQcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRhYmxlSGVhZGVySGVpZ2h0ID0gdGhpcy5hZGFwdGVyLmdldFRhYmxlSGVhZGVySGVpZ2h0KCk7XG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgaGVpZ2h0IG9mIHRhYmxlIGNvbnRlbnQgKE5vdCBzY3JvbGwgY29udGVudCkgZXhjbHVkaW5nXG4gICAgICAgIC8vIGhlYWRlciByb3cgaGVpZ2h0LlxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5hZGFwdGVyLmdldFRhYmxlQ29udGFpbmVySGVpZ2h0KCkgLSB0YWJsZUhlYWRlckhlaWdodDtcbiAgICAgICAgdmFyIHRvcCA9IHRhYmxlSGVhZGVySGVpZ2h0O1xuICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0UHJvZ3Jlc3NJbmRpY2F0b3JTdHlsZXMoe1xuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKyBcInB4XCIsXG4gICAgICAgICAgICB0b3A6IHRvcCArIFwicHhcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzcyhjc3NDbGFzc2VzLklOX1BST0dSRVNTKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEhpZGVzIHByb2dyZXNzIGluZGljYXRvciB3aGVuIGRhdGEgdGFibGUgaXMgZmluaXNoZWQgbG9hZGluZy5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5oaWRlUHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuYWRhcHRlci5yZW1vdmVDbGFzcyhjc3NDbGFzc2VzLklOX1BST0dSRVNTKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgaGVhZGVyIHJvdyBjaGVja2JveCBzdGF0ZSBiYXNlZCBvbiBudW1iZXIgb2Ygcm93cyBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZXRIZWFkZXJSb3dDaGVja2JveFN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5hZGFwdGVyLmdldFNlbGVjdGVkUm93Q291bnQoKSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEhlYWRlclJvd0NoZWNrYm94Q2hlY2tlZChmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0SGVhZGVyUm93Q2hlY2tib3hJbmRldGVybWluYXRlKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmFkYXB0ZXIuZ2V0U2VsZWN0ZWRSb3dDb3VudCgpID09PSB0aGlzLmFkYXB0ZXIuZ2V0Um93Q291bnQoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEhlYWRlclJvd0NoZWNrYm94Q2hlY2tlZCh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRIZWFkZXJSb3dDaGVja2JveEluZGV0ZXJtaW5hdGUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGFwdGVyLnNldEhlYWRlclJvd0NoZWNrYm94SW5kZXRlcm1pbmF0ZSh0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRIZWFkZXJSb3dDaGVja2JveENoZWNrZWQoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhdHRyaWJ1dGVzIG9mIHJvdyBlbGVtZW50IGJhc2VkIG9uIHNlbGVjdGlvbiBzdGF0ZS5cbiAgICAgKi9cbiAgICBNRENEYXRhVGFibGVGb3VuZGF0aW9uLnByb3RvdHlwZS5zZWxlY3RSb3dBdEluZGV4ID0gZnVuY3Rpb24gKHJvd0luZGV4LCBzZWxlY3RlZCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5hZGRDbGFzc0F0Um93SW5kZXgocm93SW5kZXgsIGNzc0NsYXNzZXMuUk9XX1NFTEVDVEVEKTtcbiAgICAgICAgICAgIHRoaXMuYWRhcHRlci5zZXRBdHRyaWJ1dGVBdFJvd0luZGV4KHJvd0luZGV4LCBzdHJpbmdzLkFSSUFfU0VMRUNURUQsICd0cnVlJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIucmVtb3ZlQ2xhc3NBdFJvd0luZGV4KHJvd0luZGV4LCBjc3NDbGFzc2VzLlJPV19TRUxFQ1RFRCk7XG4gICAgICAgICAgICB0aGlzLmFkYXB0ZXIuc2V0QXR0cmlidXRlQXRSb3dJbmRleChyb3dJbmRleCwgc3RyaW5ncy5BUklBX1NFTEVDVEVELCAnZmFsc2UnKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIE1EQ0RhdGFUYWJsZUZvdW5kYXRpb247XG59KE1EQ0ZvdW5kYXRpb24pKTtcbmV4cG9ydCB7IE1EQ0RhdGFUYWJsZUZvdW5kYXRpb24gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZvdW5kYXRpb24uanMubWFwIiwiaW1wb3J0IHtcbiAgYnViYmxlLFxuICBsaXN0ZW4sXG4gIHByZXZlbnRfZGVmYXVsdCxcbiAgc3RvcF9wcm9wYWdhdGlvbixcbn0gZnJvbSAnc3ZlbHRlL2ludGVybmFsJztcblxuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIERPTSBldmVudHMuXG5jb25zdCBvbGRNb2RpZmllclJlZ2V4ID0gL15bYS16XSsoPzo6KD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuLy8gTWF0Y2ggbW9kaWZpZXJzIG9uIG90aGVyIGV2ZW50cy5cbmNvbnN0IG5ld01vZGlmaWVyUmVnZXggPSAvXlteJF0rKD86XFwkKD86cHJldmVudERlZmF1bHR8c3RvcFByb3BhZ2F0aW9ufHBhc3NpdmV8bm9ucGFzc2l2ZXxjYXB0dXJlfG9uY2V8c2VsZikpKyQvO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9yd2FyZEV2ZW50c0J1aWxkZXIoY29tcG9uZW50KSB7XG4gIC8vIFRoaXMgaXMgb3VyIHBzZXVkbyAkb24gZnVuY3Rpb24uIEl0IGlzIGRlZmluZWQgb24gY29tcG9uZW50IG1vdW50LlxuICBsZXQgJG9uO1xuICAvLyBUaGlzIGlzIGEgbGlzdCBvZiBldmVudHMgYm91bmQgYmVmb3JlIG1vdW50LlxuICBsZXQgZXZlbnRzID0gW107XG4gIC8vIFRoaXMgaXMgdGhlIG9yaWdpbmFsIGNvbXBvbmVudCAkb24gZnVuY3Rpb24uXG4gIGNvbnN0IGNvbXBvbmVudE9uID0gY29tcG9uZW50LiRvbjtcblxuICAvLyBBbmQgd2Ugb3ZlcnJpZGUgdGhlICRvbiBmdW5jdGlvbiB0byBmb3J3YXJkIGFsbCBib3VuZCBldmVudHMuXG4gIGNvbXBvbmVudC4kb24gPSAoZnVsbEV2ZW50VHlwZSwgY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICBsZXQgZGVzdHJ1Y3RvciA9ICgpID0+IHt9O1xuICAgIGlmICgkb24pIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgIGRlc3RydWN0b3IgPSAkb24oZXZlbnRUeXBlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBldmVudCB3YXMgYm91bmQgYmVmb3JlIG1vdW50IGJ5IFN2ZWx0ZS5cbiAgICAgIGV2ZW50cy5wdXNoKFtldmVudFR5cGUsIGNhbGxiYWNrXSk7XG4gICAgfVxuICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgY29uc3QgbmV3TW9kaWZpZXJNYXRjaCA9IGV2ZW50VHlwZS5tYXRjaChuZXdNb2RpZmllclJlZ2V4KTtcbiAgICBjb25zdCBtb2RpZmllck1hdGNoID0gb2xkTW9kaWZpZXJNYXRjaCB8fCBuZXdNb2RpZmllck1hdGNoO1xuXG4gICAgaWYgKG9sZE1vZGlmaWVyTWF0Y2ggJiYgY29uc29sZSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnRXZlbnQgbW9kaWZpZXJzIGluIFNNVUkgbm93IHVzZSBcIiRcIiBpbnN0ZWFkIG9mIFwiOlwiLCBzbyB0aGF0IGFsbCBldmVudHMgY2FuIGJlIGJvdW5kIHdpdGggbW9kaWZpZXJzLiBQbGVhc2UgdXBkYXRlIHlvdXIgZXZlbnQgYmluZGluZzogJyxcbiAgICAgICAgZXZlbnRUeXBlXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAvLyBSZW1vdmUgbW9kaWZpZXJzIGZyb20gdGhlIHJlYWwgZXZlbnQuXG4gICAgICBjb25zdCBwYXJ0cyA9IGV2ZW50VHlwZS5zcGxpdChvbGRNb2RpZmllck1hdGNoID8gJzonIDogJyQnKTtcbiAgICAgIGV2ZW50VHlwZSA9IHBhcnRzWzBdO1xuICAgIH1cblxuICAgIC8vIENhbGwgdGhlIG9yaWdpbmFsICRvbiBmdW5jdGlvbi5cbiAgICBjb25zdCBjb21wb25lbnREZXN0cnVjdG9yID0gY29tcG9uZW50T24uY2FsbChcbiAgICAgIGNvbXBvbmVudCxcbiAgICAgIGV2ZW50VHlwZSxcbiAgICAgIGNhbGxiYWNrXG4gICAgKTtcblxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgZGVzdHJ1Y3RvcigpO1xuICAgICAgcmV0dXJuIGNvbXBvbmVudERlc3RydWN0b3IoLi4uYXJncyk7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBmb3J3YXJkKGUpIHtcbiAgICAvLyBJbnRlcm5hbGx5IGJ1YmJsZSB0aGUgZXZlbnQgdXAgZnJvbSBTdmVsdGUgY29tcG9uZW50cy5cbiAgICBidWJibGUoY29tcG9uZW50LCBlKTtcbiAgfVxuXG4gIHJldHVybiAobm9kZSkgPT4ge1xuICAgIGNvbnN0IGRlc3RydWN0b3JzID0gW107XG4gICAgY29uc3QgZm9yd2FyZERlc3RydWN0b3JzID0ge307XG5cbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGlzIHJlc3BvbnNpYmxlIGZvciBmb3J3YXJkaW5nIGFsbCBib3VuZCBldmVudHMuXG4gICAgJG9uID0gKGZ1bGxFdmVudFR5cGUsIGNhbGxiYWNrKSA9PiB7XG4gICAgICBsZXQgZXZlbnRUeXBlID0gZnVsbEV2ZW50VHlwZTtcbiAgICAgIGxldCBoYW5kbGVyID0gY2FsbGJhY2s7XG4gICAgICAvLyBET00gYWRkRXZlbnRMaXN0ZW5lciBvcHRpb25zIGFyZ3VtZW50LlxuICAgICAgbGV0IG9wdGlvbnMgPSBmYWxzZTtcbiAgICAgIGNvbnN0IG9sZE1vZGlmaWVyTWF0Y2ggPSBldmVudFR5cGUubWF0Y2gob2xkTW9kaWZpZXJSZWdleCk7XG4gICAgICBjb25zdCBuZXdNb2RpZmllck1hdGNoID0gZXZlbnRUeXBlLm1hdGNoKG5ld01vZGlmaWVyUmVnZXgpO1xuICAgICAgY29uc3QgbW9kaWZpZXJNYXRjaCA9IG9sZE1vZGlmaWVyTWF0Y2ggfHwgbmV3TW9kaWZpZXJNYXRjaDtcbiAgICAgIGlmIChtb2RpZmllck1hdGNoKSB7XG4gICAgICAgIC8vIFBhcnNlIHRoZSBldmVudCBtb2RpZmllcnMuXG4gICAgICAgIC8vIFN1cHBvcnRlZCBtb2RpZmllcnM6XG4gICAgICAgIC8vIC0gcHJldmVudERlZmF1bHRcbiAgICAgICAgLy8gLSBzdG9wUHJvcGFnYXRpb25cbiAgICAgICAgLy8gLSBwYXNzaXZlXG4gICAgICAgIC8vIC0gbm9ucGFzc2l2ZVxuICAgICAgICAvLyAtIGNhcHR1cmVcbiAgICAgICAgLy8gLSBvbmNlXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZXZlbnRUeXBlLnNwbGl0KG9sZE1vZGlmaWVyTWF0Y2ggPyAnOicgOiAnJCcpO1xuICAgICAgICBldmVudFR5cGUgPSBwYXJ0c1swXTtcbiAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5mcm9tRW50cmllcyhwYXJ0cy5zbGljZSgxKS5tYXAoKG1vZCkgPT4gW21vZCwgdHJ1ZV0pKTtcbiAgICAgICAgaWYgKG9wdGlvbnMubm9ucGFzc2l2ZSkge1xuICAgICAgICAgIG9wdGlvbnMucGFzc2l2ZSA9IGZhbHNlO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLm5vbnBhc3NpdmU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICBoYW5kbGVyID0gcHJldmVudF9kZWZhdWx0KGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnByZXZlbnREZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIgPSBzdG9wX3Byb3BhZ2F0aW9uKGhhbmRsZXIpO1xuICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLnN0b3BQcm9wYWdhdGlvbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBMaXN0ZW4gZm9yIHRoZSBldmVudCBkaXJlY3RseSwgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICAgIGNvbnN0IG9mZiA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgY29uc3QgZGVzdHJ1Y3RvciA9ICgpID0+IHtcbiAgICAgICAgb2ZmKCk7XG4gICAgICAgIGNvbnN0IGlkeCA9IGRlc3RydWN0b3JzLmluZGV4T2YoZGVzdHJ1Y3Rvcik7XG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgIGRlc3RydWN0b3JzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBkZXN0cnVjdG9ycy5wdXNoKGRlc3RydWN0b3IpO1xuXG4gICAgICAvLyBGb3J3YXJkIHRoZSBldmVudCBmcm9tIFN2ZWx0ZS5cbiAgICAgIGlmICghZXZlbnRUeXBlIGluIGZvcndhcmREZXN0cnVjdG9ycykge1xuICAgICAgICBmb3J3YXJkRGVzdHJ1Y3RvcnNbZXZlbnRUeXBlXSA9IGxpc3Rlbihub2RlLCBldmVudFR5cGUsIGZvcndhcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVzdHJ1Y3RvcjtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpc3RlbiB0byBhbGwgdGhlIGV2ZW50cyBhZGRlZCBiZWZvcmUgbW91bnQuXG4gICAgICAkb24oZXZlbnRzW2ldWzBdLCBldmVudHNbaV1bMV0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZXN0cm95OiAoKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlc3RydWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgZGVzdHJ1Y3RvcnNbaV0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnQgZm9yd2FyZGVycy5cbiAgICAgICAgZm9yIChsZXQgZW50cnkgb2YgT2JqZWN0LmVudHJpZXMoZm9yd2FyZERlc3RydWN0b3JzKSkge1xuICAgICAgICAgIGVudHJ5WzFdKCk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBjbGFzc01hcChjbGFzc09iaikge1xuICByZXR1cm4gT2JqZWN0LmVudHJpZXMoY2xhc3NPYmopXG4gICAgLmZpbHRlcigoW25hbWUsIHZhbHVlXSkgPT4gbmFtZSAhPT0gJycgJiYgdmFsdWUpXG4gICAgLm1hcCgoW25hbWVdKSA9PiBuYW1lKVxuICAgIC5qb2luKCcgJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goXG4gIGVsZW1lbnQsXG4gIGV2ZW50VHlwZSxcbiAgZGV0YWlsID0ge30sXG4gIGV2ZW50SW5pdCA9IHsgYnViYmxlczogdHJ1ZSB9XG4pIHtcbiAgaWYgKHR5cGVvZiBFdmVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudCkge1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50VHlwZSwgZXZlbnRJbml0KTtcbiAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG4gICAgY29uc3QgZWwgPSAnZ2V0RWxlbWVudCcgaW4gZWxlbWVudCA/IGVsZW1lbnQuZ2V0RWxlbWVudCgpIDogZWxlbWVudDtcbiAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICByZXR1cm4gZXZlbnQ7XG4gIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBleGNsdWRlKG9iaiwga2V5cykge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGNvbnN0IGNhc2hJbmRleCA9IG5hbWUuaW5kZXhPZignJCcpO1xuICAgIGlmIChcbiAgICAgIGNhc2hJbmRleCAhPT0gLTEgJiZcbiAgICAgIGtleXMuaW5kZXhPZihuYW1lLnN1YnN0cmluZygwLCBjYXNoSW5kZXggKyAxKSkgIT09IC0xXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGtleXMuaW5kZXhPZihuYW1lKSAhPT0gLTEpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBuZXdPYmpbbmFtZV0gPSBvYmpbbmFtZV07XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHByZWZpeEZpbHRlcihvYmosIHByZWZpeCkge1xuICBsZXQgbmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopO1xuICBjb25zdCBuZXdPYmogPSB7fTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmFtZSA9IG5hbWVzW2ldO1xuICAgIGlmIChuYW1lLnN1YnN0cmluZygwLCBwcmVmaXgubGVuZ3RoKSA9PT0gcHJlZml4KSB7XG4gICAgICBuZXdPYmpbbmFtZS5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCldID0gb2JqW25hbWVdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdXNlQWN0aW9ucyhub2RlLCBhY3Rpb25zKSB7XG4gIGxldCBvYmplY3RzID0gW107XG5cbiAgaWYgKGFjdGlvbnMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlzQXJyYXkgPSBBcnJheS5pc0FycmF5KGFjdGlvbnNbaV0pO1xuICAgICAgY29uc3QgYWN0aW9uID0gaXNBcnJheSA/IGFjdGlvbnNbaV1bMF0gOiBhY3Rpb25zW2ldO1xuICAgICAgaWYgKGlzQXJyYXkgJiYgYWN0aW9uc1tpXS5sZW5ndGggPiAxKSB7XG4gICAgICAgIG9iamVjdHMucHVzaChhY3Rpb24obm9kZSwgYWN0aW9uc1tpXVsxXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb2JqZWN0cy5wdXNoKGFjdGlvbihub2RlKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB1cGRhdGUoYWN0aW9ucykge1xuICAgICAgaWYgKCgoYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCkgfHwgMCkgIT0gb2JqZWN0cy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBub3QgY2hhbmdlIHRoZSBsZW5ndGggb2YgYW4gYWN0aW9ucyBhcnJheS4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFjdGlvbnMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKG9iamVjdHNbaV0gJiYgJ3VwZGF0ZScgaW4gb2JqZWN0c1tpXSkge1xuICAgICAgICAgICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkoYWN0aW9uc1tpXSk7XG4gICAgICAgICAgICBpZiAoaXNBcnJheSAmJiBhY3Rpb25zW2ldLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgb2JqZWN0c1tpXS51cGRhdGUoYWN0aW9uc1tpXVsxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmplY3RzW2ldLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChvYmplY3RzW2ldICYmICdkZXN0cm95JyBpbiBvYmplY3RzW2ldKSB7XG4gICAgICAgICAgb2JqZWN0c1tpXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuIiwiPGRpdlxuICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gIHVzZTp1c2VBY3Rpb25zPXt1c2V9XG4gIHVzZTpmb3J3YXJkRXZlbnRzXG4gIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgW2NsYXNzTmFtZV06IHRydWUsXG4gICAgJ21kYy1kYXRhLXRhYmxlJzogdHJ1ZSxcbiAgICAnbWRjLWRhdGEtdGFibGUtLXN0aWNreS1oZWFkZXInOiBzdGlja3lIZWFkZXIsXG4gICAgLi4uaW50ZXJuYWxDbGFzc2VzLFxuICB9KX1cbiAgb246U01VSTpjaGVja2JveDptb3VudD17KCkgPT4gaW5zdGFuY2UgJiYgcG9zdE1vdW50ICYmIGluc3RhbmNlLmxheW91dCgpfVxuICBvbjpTTVVJOmRhdGEtdGFibGU6aGVhZGVyOm1vdW50PXsoZXZlbnQpID0+IChoZWFkZXIgPSBldmVudC5kZXRhaWwpfVxuICBvbjpTTVVJOmRhdGEtdGFibGU6aGVhZGVyOnVubW91bnQ9eygpID0+IChoZWFkZXIgPSB1bmRlZmluZWQpfVxuICBvbjpTTVVJOmRhdGEtdGFibGU6Ym9keTptb3VudD17KGV2ZW50KSA9PiAoYm9keSA9IGV2ZW50LmRldGFpbCl9XG4gIG9uOlNNVUk6ZGF0YS10YWJsZTpib2R5OnVubW91bnQ9eygpID0+IChib2R5ID0gdW5kZWZpbmVkKX1cbiAgb246U01VSTpkYXRhLXRhYmxlOmhlYWRlcjpjaGVja2JveDpjaGFuZ2U9eygpID0+XG4gICAgaW5zdGFuY2UgJiYgaW5zdGFuY2UuaGFuZGxlSGVhZGVyUm93Q2hlY2tib3hDaGFuZ2UoKX1cbiAgb246U01VSTpkYXRhLXRhYmxlOmhlYWRlcjpjbGljaz17aGFuZGxlSGVhZGVyUm93Q2xpY2t9XG4gIG9uOlNNVUk6ZGF0YS10YWJsZTpib2R5OmNoZWNrYm94OmNoYW5nZT17KGV2ZW50KSA9PlxuICAgIGluc3RhbmNlICYmIGluc3RhbmNlLmhhbmRsZVJvd0NoZWNrYm94Q2hhbmdlKGV2ZW50KX1cbiAgey4uLmV4Y2x1ZGUoJCRyZXN0UHJvcHMsIFsnY29udGFpbmVyJCcsICd0YWJsZSQnXSl9XG4+XG4gIDxkaXZcbiAgICBiaW5kOnRoaXM9e2NvbnRhaW5lcn1cbiAgICB1c2U6dXNlQWN0aW9ucz17Y29udGFpbmVyJHVzZX1cbiAgICBjbGFzcz17Y2xhc3NNYXAoe1xuICAgICAgW2NvbnRhaW5lciRjbGFzc106IHRydWUsXG4gICAgICAnbWRjLWRhdGEtdGFibGVfX3RhYmxlLWNvbnRhaW5lcic6IHRydWUsXG4gICAgfSl9XG4gICAgey4uLnByZWZpeEZpbHRlcigkJHJlc3RQcm9wcywgJ2NvbnRhaW5lciQnKX1cbiAgPlxuICAgIDx0YWJsZVxuICAgICAgdXNlOnVzZUFjdGlvbnM9e3RhYmxlJHVzZX1cbiAgICAgIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgICAgIFt0YWJsZSRjbGFzc106IHRydWUsXG4gICAgICAgICdtZGMtZGF0YS10YWJsZV9fdGFibGUnOiB0cnVlLFxuICAgICAgfSl9XG4gICAgICB7Li4ucHJlZml4RmlsdGVyKCQkcmVzdFByb3BzLCAndGFibGUkJyl9XG4gICAgPlxuICAgICAgPHNsb3QgLz5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cblxuICB7I2lmICQkc2xvdHMucHJvZ3Jlc3N9XG4gICAgPGRpdlxuICAgICAgY2xhc3M9XCJtZGMtZGF0YS10YWJsZV9fcHJvZ3Jlc3MtaW5kaWNhdG9yXCJcbiAgICAgIHN0eWxlPXtPYmplY3QuZW50cmllcyhwcm9ncmVzc0luZGljYXRvclN0eWxlcylcbiAgICAgICAgLm1hcCgoW25hbWUsIHZhbHVlXSkgPT4gYCR7bmFtZX06ICR7dmFsdWV9O2ApXG4gICAgICAgIC5qb2luKCcgJyl9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19zY3JpbVwiIC8+XG4gICAgICA8c2xvdCBuYW1lPVwicHJvZ3Jlc3NcIiAvPlxuICAgIDwvZGl2PlxuICB7L2lmfVxuXG4gIDxzbG90IG5hbWU9XCJwYWdpbmF0ZVwiIC8+XG48L2Rpdj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgTURDRGF0YVRhYmxlRm91bmRhdGlvbiB9IGZyb20gJ0BtYXRlcmlhbC9kYXRhLXRhYmxlJztcbiAgaW1wb3J0IHsgcG9ueWZpbGwgfSBmcm9tICdAbWF0ZXJpYWwvZG9tJztcbiAgaW1wb3J0IHsgb25Nb3VudCwgb25EZXN0cm95LCBnZXRDb250ZXh0LCBzZXRDb250ZXh0IH0gZnJvbSAnc3ZlbHRlJztcbiAgaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIGNsYXNzTWFwLFxuICAgIGV4Y2x1ZGUsXG4gICAgcHJlZml4RmlsdGVyLFxuICAgIHVzZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcbiAgY29uc3QgeyBjbG9zZXN0IH0gPSBwb255ZmlsbDtcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG4gIGxldCBjbGFzc05hbWUgPSAnJztcbiAgZXhwb3J0IHsgY2xhc3NOYW1lIGFzIGNsYXNzIH07XG4gIGV4cG9ydCBsZXQgc3RpY2t5SGVhZGVyID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgc29ydGFibGUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBzb3J0ID0gbnVsbDtcbiAgZXhwb3J0IGxldCBzb3J0RGlyZWN0aW9uID0gJ2FzY2VuZGluZyc7XG4gIGV4cG9ydCBsZXQgc29ydEFzY2VuZGluZ0FyaWFMYWJlbCA9ICdzb3J0ZWQsIGFzY2VuZGluZyc7XG4gIGV4cG9ydCBsZXQgc29ydERlc2NlbmRpbmdBcmlhTGFiZWwgPSAnc29ydGVkLCBkZXNjZW5kaW5nJztcbiAgZXhwb3J0IGxldCBjb250YWluZXIkdXNlID0gW107XG4gIGV4cG9ydCBsZXQgY29udGFpbmVyJGNsYXNzID0gJyc7XG4gIGV4cG9ydCBsZXQgdGFibGUkdXNlID0gW107XG4gIGV4cG9ydCBsZXQgdGFibGUkY2xhc3MgPSAnJztcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IGluc3RhbmNlO1xuICBsZXQgY29udGFpbmVyO1xuICBsZXQgaGVhZGVyO1xuICBsZXQgYm9keTtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgcHJvZ3Jlc3NJbmRpY2F0b3JTdHlsZXMgPSB7fTtcbiAgbGV0IGFkZExheW91dExpc3RlbmVyID0gZ2V0Q29udGV4dCgnU01VSTphZGRMYXlvdXRMaXN0ZW5lcicpO1xuICBsZXQgcmVtb3ZlTGF5b3V0TGlzdGVuZXI7XG4gIGxldCBwb3N0TW91bnQgPSBmYWxzZTtcbiAgbGV0IHByb2dyZXNzQ2xvc2VkID0gd3JpdGFibGUoZmFsc2UpO1xuICBsZXQgc29ydFN0b3JlID0gd3JpdGFibGUoc29ydCk7XG4gIGxldCBzb3J0RGlyZWN0aW9uU3RvcmUgPSB3cml0YWJsZShzb3J0RGlyZWN0aW9uKTtcblxuICBzZXRDb250ZXh0KCdTTVVJOmNoZWNrYm94OmNvbnRleHQnLCAnZGF0YS10YWJsZScpO1xuICBzZXRDb250ZXh0KCdTTVVJOmxpbmVhci1wcm9ncmVzczpjb250ZXh0JywgJ2RhdGEtdGFibGUnKTtcbiAgc2V0Q29udGV4dCgnU01VSTpsaW5lYXItcHJvZ3Jlc3M6Y2xvc2VkJywgcHJvZ3Jlc3NDbG9zZWQpO1xuICBzZXRDb250ZXh0KCdTTVVJOmRhdGEtdGFibGU6c29ydGFibGUnLCBzb3J0YWJsZSk7XG4gIHNldENvbnRleHQoJ1NNVUk6ZGF0YS10YWJsZTpzb3J0Jywgc29ydFN0b3JlKTtcbiAgc2V0Q29udGV4dCgnU01VSTpkYXRhLXRhYmxlOnNvcnREaXJlY3Rpb24nLCBzb3J0RGlyZWN0aW9uU3RvcmUpO1xuICBzZXRDb250ZXh0KCdTTVVJOmRhdGEtdGFibGU6c29ydEFzY2VuZGluZ0FyaWFMYWJlbCcsIHNvcnRBc2NlbmRpbmdBcmlhTGFiZWwpO1xuICBzZXRDb250ZXh0KFxuICAgICdTTVVJOmRhdGEtdGFibGU6c29ydERlc2NlbmRpbmdBcmlhTGFiZWwnLFxuICAgIHNvcnREZXNjZW5kaW5nQXJpYUxhYmVsXG4gICk7XG5cbiAgJDogJHNvcnRTdG9yZSA9IHNvcnQ7XG4gICQ6ICRzb3J0RGlyZWN0aW9uU3RvcmUgPSBzb3J0RGlyZWN0aW9uO1xuXG4gIGlmIChhZGRMYXlvdXRMaXN0ZW5lcikge1xuICAgIHJlbW92ZUxheW91dExpc3RlbmVyID0gYWRkTGF5b3V0TGlzdGVuZXIobGF5b3V0KTtcbiAgfVxuXG4gIGxldCBwcmV2aW91c1Byb2dyZXNzQ2xvc2VkID0gbnVsbDtcbiAgJDogaWYgKFxuICAgICQkc2xvdHMucHJvZ3Jlc3MgJiZcbiAgICBpbnN0YW5jZSAmJlxuICAgIHByZXZpb3VzUHJvZ3Jlc3NDbG9zZWQgIT09ICRwcm9ncmVzc0Nsb3NlZFxuICApIHtcbiAgICBwcmV2aW91c1Byb2dyZXNzQ2xvc2VkID0gJHByb2dyZXNzQ2xvc2VkO1xuICAgIGlmICgkcHJvZ3Jlc3NDbG9zZWQpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVQcm9ncmVzcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5zaG93UHJvZ3Jlc3MoKTtcbiAgICB9XG4gIH1cblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpbnN0YW5jZSA9IG5ldyBNRENEYXRhVGFibGVGb3VuZGF0aW9uKHtcbiAgICAgIGFkZENsYXNzLFxuICAgICAgcmVtb3ZlQ2xhc3MsXG4gICAgICBnZXRIZWFkZXJDZWxsRWxlbWVudHM6ICgpID0+XG4gICAgICAgIGhlYWRlci5jZWxscy5tYXAoKGFjY2Vzc29yKSA9PiBhY2Nlc3Nvci5lbGVtZW50KSxcbiAgICAgIGdldEhlYWRlckNlbGxDb3VudDogKCkgPT4gaGVhZGVyLmNlbGxzLmxlbmd0aCxcbiAgICAgIGdldEF0dHJpYnV0ZUJ5SGVhZGVyQ2VsbEluZGV4OiAoaW5kZXgsIG5hbWUpID0+IHtcbiAgICAgICAgcmV0dXJuIGhlYWRlci5vcmRlcmVkQ2VsbHNbaW5kZXhdLmdldEF0dHIobmFtZSk7XG4gICAgICB9LFxuICAgICAgc2V0QXR0cmlidXRlQnlIZWFkZXJDZWxsSW5kZXg6IChpbmRleCwgbmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgaGVhZGVyLm9yZGVyZWRDZWxsc1tpbmRleF0uYWRkQXR0cihuYW1lLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgc2V0Q2xhc3NOYW1lQnlIZWFkZXJDZWxsSW5kZXg6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGhlYWRlci5vcmRlcmVkQ2VsbHNbaW5kZXhdLmFkZENsYXNzKGNsYXNzTmFtZSk7XG4gICAgICB9LFxuICAgICAgcmVtb3ZlQ2xhc3NOYW1lQnlIZWFkZXJDZWxsSW5kZXg6IChpbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGhlYWRlci5vcmRlcmVkQ2VsbHNbaW5kZXhdLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICB9LFxuICAgICAgbm90aWZ5U29ydEFjdGlvbjogKGRhdGEpID0+IHtcbiAgICAgICAgc29ydCA9IGRhdGEuY29sdW1uSWQ7XG4gICAgICAgIHNvcnREaXJlY3Rpb24gPSBkYXRhLnNvcnRWYWx1ZTtcbiAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDRGF0YVRhYmxlOnNvcnRlZCcsIGRhdGEpO1xuICAgICAgfSxcbiAgICAgIGdldFRhYmxlQ29udGFpbmVySGVpZ2h0OiAoKSA9PiBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0LFxuICAgICAgZ2V0VGFibGVIZWFkZXJIZWlnaHQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFibGVIZWFkZXIgPSBnZXRFbGVtZW50KCkucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAnLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItcm93J1xuICAgICAgICApO1xuICAgICAgICBpZiAoIXRhYmxlSGVhZGVyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNRENEYXRhVGFibGU6IFRhYmxlIGhlYWRlciBlbGVtZW50IG5vdCBmb3VuZC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFibGVIZWFkZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgfSxcbiAgICAgIHNldFByb2dyZXNzSW5kaWNhdG9yU3R5bGVzOiAoc3R5bGVzKSA9PiB7XG4gICAgICAgIHByb2dyZXNzSW5kaWNhdG9yU3R5bGVzID0gc3R5bGVzO1xuICAgICAgfSxcbiAgICAgIGFkZENsYXNzQXRSb3dJbmRleDogKHJvd0luZGV4LCBjbGFzc05hbWUpID0+IHtcbiAgICAgICAgYm9keS5vcmRlcmVkUm93c1tyb3dJbmRleF0uYWRkQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgIH0sXG4gICAgICBnZXRSb3dDb3VudDogKCkgPT4gYm9keS5yb3dzLmxlbmd0aCxcbiAgICAgIGdldFJvd0VsZW1lbnRzOiAoKSA9PiBib2R5LnJvd3MubWFwKChhY2Nlc3NvcikgPT4gYWNjZXNzb3IuZWxlbWVudCksXG4gICAgICBnZXRSb3dJZEF0SW5kZXg6IChyb3dJbmRleCkgPT4gYm9keS5vcmRlcmVkUm93c1tyb3dJbmRleF0ucm93SWQsXG4gICAgICBnZXRSb3dJbmRleEJ5Q2hpbGRFbGVtZW50OiAoZWwpID0+IHtcbiAgICAgICAgcmV0dXJuIGJvZHkub3JkZXJlZFJvd3NcbiAgICAgICAgICAubWFwKChhY2Nlc3NvcikgPT4gYWNjZXNzb3IuZWxlbWVudClcbiAgICAgICAgICAuaW5kZXhPZihjbG9zZXN0KGVsLCAnLm1kYy1kYXRhLXRhYmxlX19yb3cnKSk7XG4gICAgICB9LFxuICAgICAgZ2V0U2VsZWN0ZWRSb3dDb3VudDogKCkgPT5cbiAgICAgICAgYm9keS5yb3dzLmZpbHRlcigoYWNjZXNzb3IpID0+IGFjY2Vzc29yLnNlbGVjdGVkKS5sZW5ndGgsXG4gICAgICBpc0NoZWNrYm94QXRSb3dJbmRleENoZWNrZWQ6IChyb3dJbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGJvZHkub3JkZXJlZFJvd3Nbcm93SW5kZXhdLmNoZWNrYm94O1xuICAgICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgICByZXR1cm4gY2hlY2tib3guY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgaXNIZWFkZXJSb3dDaGVja2JveENoZWNrZWQ6ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBoZWFkZXIuY2hlY2tib3g7XG4gICAgICAgIGlmIChjaGVja2JveCkge1xuICAgICAgICAgIHJldHVybiBjaGVja2JveC5jaGVja2VkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBpc1Jvd3NTZWxlY3RhYmxlOiAoKSA9PlxuICAgICAgICAhIWdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yKCcubWRjLWRhdGEtdGFibGVfX3Jvdy1jaGVja2JveCcpIHx8XG4gICAgICAgICEhZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3IoJy5tZGMtZGF0YS10YWJsZV9faGVhZGVyLXJvdy1jaGVja2JveCcpLFxuICAgICAgbm90aWZ5Um93U2VsZWN0aW9uQ2hhbmdlZDogKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gYm9keS5vcmRlcmVkUm93c1tkYXRhLnJvd0luZGV4XTtcbiAgICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnTURDRGF0YVRhYmxlOnJvd1NlbGVjdGlvbkNoYW5nZWQnLCB7XG4gICAgICAgICAgcm93OiByb3cuZWxlbWVudCxcbiAgICAgICAgICByb3dJZDogcm93LnJvd0lkLFxuICAgICAgICAgIHJvd0luZGV4OiBkYXRhLnJvd0luZGV4LFxuICAgICAgICAgIHNlbGVjdGVkOiBkYXRhLnNlbGVjdGVkLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBub3RpZnlTZWxlY3RlZEFsbDogKCkgPT4ge1xuICAgICAgICBzZXRIZWFkZXJSb3dDaGVja2JveEluZGV0ZXJtaW5hdGUoZmFsc2UpO1xuICAgICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdNRENEYXRhVGFibGU6c2VsZWN0ZWRBbGwnKTtcbiAgICAgIH0sXG4gICAgICBub3RpZnlVbnNlbGVjdGVkQWxsOiAoKSA9PiB7XG4gICAgICAgIHNldEhlYWRlclJvd0NoZWNrYm94SW5kZXRlcm1pbmF0ZShmYWxzZSk7XG4gICAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ01EQ0RhdGFUYWJsZTp1bnNlbGVjdGVkQWxsJyk7XG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJIZWFkZXJSb3dDaGVja2JveDogKCkgPT4ge1xuICAgICAgICAvLyBIYW5kbGVkIGF1dG9tYXRpY2FsbHkuXG4gICAgICB9LFxuICAgICAgcmVnaXN0ZXJSb3dDaGVja2JveGVzOiAoKSA9PiB7XG4gICAgICAgIC8vIEhhbmRsZWQgYXV0b21hdGljYWxseS5cbiAgICAgIH0sXG4gICAgICByZW1vdmVDbGFzc0F0Um93SW5kZXg6IChyb3dJbmRleCwgY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGJvZHkub3JkZXJlZFJvd3Nbcm93SW5kZXhdLnJlbW92ZUNsYXNzKGNsYXNzTmFtZSk7XG4gICAgICB9LFxuICAgICAgc2V0QXR0cmlidXRlQXRSb3dJbmRleDogKHJvd0luZGV4LCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgICBib2R5Lm9yZGVyZWRSb3dzW3Jvd0luZGV4XS5hZGRBdHRyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0sXG4gICAgICBzZXRIZWFkZXJSb3dDaGVja2JveENoZWNrZWQ6IChjaGVja2VkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gaGVhZGVyLmNoZWNrYm94O1xuICAgICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldEhlYWRlclJvd0NoZWNrYm94SW5kZXRlcm1pbmF0ZSxcbiAgICAgIHNldFJvd0NoZWNrYm94Q2hlY2tlZEF0SW5kZXg6IChyb3dJbmRleCwgY2hlY2tlZCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2JveCA9IGJvZHkub3JkZXJlZFJvd3Nbcm93SW5kZXhdLmNoZWNrYm94O1xuICAgICAgICBpZiAoY2hlY2tib3gpIHtcbiAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNldFNvcnRTdGF0dXNMYWJlbEJ5SGVhZGVyQ2VsbEluZGV4OiAoX2NvbHVtbkluZGV4LCBfc29ydFZhbHVlKSA9PiB7XG4gICAgICAgIC8vIEhhbmRsZWQgYXV0b21hdGljYWxseS5cbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpbnN0YW5jZS5pbml0KCk7XG5cbiAgICBpbnN0YW5jZS5sYXlvdXQoKTtcblxuICAgIHBvc3RNb3VudCA9IHRydWU7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgIH07XG4gIH0pO1xuXG4gIG9uRGVzdHJveSgoKSA9PiB7XG4gICAgaWYgKHJlbW92ZUxheW91dExpc3RlbmVyKSB7XG4gICAgICByZW1vdmVMYXlvdXRMaXN0ZW5lcigpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEhlYWRlclJvd0NoZWNrYm94SW5kZXRlcm1pbmF0ZShpbmRldGVybWluYXRlKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBoZWFkZXIuY2hlY2tib3g7XG4gICAgaWYgKGNoZWNrYm94KSB7XG4gICAgICBjaGVja2JveC5pbmRldGVybWluYXRlID0gaW5kZXRlcm1pbmF0ZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVIZWFkZXJSb3dDbGljayhldmVudCkge1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJDZWxsID0gY2xvc2VzdChcbiAgICAgIGV2ZW50LmRldGFpbC50YXJnZXQsXG4gICAgICAnLm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0td2l0aC1zb3J0J1xuICAgICk7XG5cbiAgICBpZiAoIWhlYWRlckNlbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcmRlcmVkQ2VsbHMgPSBoZWFkZXIub3JkZXJlZENlbGxzO1xuXG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBvcmRlcmVkQ2VsbHNcbiAgICAgIC5tYXAoKGFjY2Vzc29yKSA9PiBhY2Nlc3Nvci5lbGVtZW50KVxuICAgICAgLmluZGV4T2YoaGVhZGVyQ2VsbCk7XG4gICAgaWYgKGNvbHVtbkluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBjb2x1bW5JZCA9IG9yZGVyZWRDZWxsc1tjb2x1bW5JbmRleF0uY29sdW1uSWQ7XG5cbiAgICBpbnN0YW5jZS5oYW5kbGVTb3J0QWN0aW9uKHsgY29sdW1uSWQsIGNvbHVtbkluZGV4LCBoZWFkZXJDZWxsIH0pO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGxheW91dCgpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UubGF5b3V0KCk7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuPC9zY3JpcHQ+XG4iLCI8dGhlYWRcbiAgYmluZDp0aGlzPXtlbGVtZW50fVxuICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICB1c2U6Zm9yd2FyZEV2ZW50c1xuICBvbjpTTVVJOmNoZWNrYm94Om1vdW50PXsoZXZlbnQpID0+IChjaGVja2JveCA9IGV2ZW50LmRldGFpbCl9XG4gIG9uOlNNVUk6Y2hlY2tib3g6dW5tb3VudD17KCkgPT4gKGNoZWNrYm94ID0gdW5kZWZpbmVkKX1cbiAgb246U01VSTpkYXRhLXRhYmxlOmNlbGw6bW91bnQ9e2hhbmRsZUNlbGxNb3VudH1cbiAgb246U01VSTpkYXRhLXRhYmxlOmNlbGw6dW5tb3VudD17aGFuZGxlQ2VsbFVubW91bnR9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3RoZWFkXG4+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uTW91bnQsIHNldENvbnRleHQgfSBmcm9tICdzdmVsdGUnO1xuICBpbXBvcnQgeyBnZXRfY3VycmVudF9jb21wb25lbnQgfSBmcm9tICdzdmVsdGUvaW50ZXJuYWwnO1xuICBpbXBvcnQge1xuICAgIGZvcndhcmRFdmVudHNCdWlsZGVyLFxuICAgIHVzZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2gsXG4gIH0gZnJvbSAnQHNtdWkvY29tbW9uL2ludGVybmFsLmpzJztcblxuICBjb25zdCBmb3J3YXJkRXZlbnRzID0gZm9yd2FyZEV2ZW50c0J1aWxkZXIoZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkpO1xuXG4gIGV4cG9ydCBsZXQgdXNlID0gW107XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBjaGVja2JveDtcbiAgbGV0IGNlbGxzID0gW107XG4gIGNvbnN0IGNlbGxBY2Nlc3Nvck1hcCA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgc2V0Q29udGV4dCgnU01VSTpkYXRhLXRhYmxlOnJvdzpoZWFkZXInLCB0cnVlKTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBjb25zdCBhY2Nlc3NvciA9IHtcbiAgICAgIGdldCBjZWxscygpIHtcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgICAgfSxcbiAgICAgIGdldCBvcmRlcmVkQ2VsbHMoKSB7XG4gICAgICAgIHJldHVybiBnZXRPcmRlcmVkQ2VsbHMoKTtcbiAgICAgIH0sXG4gICAgICBnZXQgY2hlY2tib3goKSB7XG4gICAgICAgIHJldHVybiBjaGVja2JveDtcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ1NNVUk6ZGF0YS10YWJsZTpoZWFkZXI6bW91bnQnLCBhY2Nlc3Nvcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnU01VSTpkYXRhLXRhYmxlOmhlYWRlcjp1bm1vdW50Jyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2VsbE1vdW50KGV2ZW50KSB7XG4gICAgY2VsbHMucHVzaChldmVudC5kZXRhaWwpO1xuICAgIGNlbGxBY2Nlc3Nvck1hcC5zZXQoZXZlbnQuZGV0YWlsLmVsZW1lbnQsIGV2ZW50LmRldGFpbCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDZWxsVW5tb3VudChldmVudCkge1xuICAgIGNvbnN0IGlkeCA9IGNlbGxzLmluZGV4T2YoZXZlbnQuZGV0YWlsKTtcbiAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgY2VsbHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICBjZWxscyA9IGNlbGxzO1xuICAgIH1cbiAgICBjZWxsQWNjZXNzb3JNYXAuZGVsZXRlKGV2ZW50LmRldGFpbC5lbGVtZW50KTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9yZGVyZWRDZWxscygpIHtcbiAgICByZXR1cm4gWy4uLmdldEVsZW1lbnQoKS5xdWVyeVNlbGVjdG9yQWxsKCcubWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsJyldXG4gICAgICAubWFwKChlbGVtZW50KSA9PiBjZWxsQWNjZXNzb3JNYXAuZ2V0KGVsZW1lbnQpKVxuICAgICAgLmZpbHRlcihcbiAgICAgICAgKGFjY2Vzc29yKSA9PiBhY2Nlc3NvciAmJiBhY2Nlc3Nvci5fc211aV9kYXRhX3RhYmxlX2hlYWRlcl9jZWxsX2FjY2Vzc29yXG4gICAgICApO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPHRib2R5XG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWRhdGEtdGFibGVfX2NvbnRlbnQnOiB0cnVlLFxuICB9KX1cbiAgb246U01VSTpkYXRhLXRhYmxlOnJvdzptb3VudD17aGFuZGxlUm93TW91bnR9XG4gIG9uOlNNVUk6ZGF0YS10YWJsZTpyb3c6dW5tb3VudD17aGFuZGxlUm93VW5tb3VudH1cbiAgey4uLiQkcmVzdFByb3BzfT48c2xvdCAvPjwvdGJvZHlcbj5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCwgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcblxuICBsZXQgZWxlbWVudDtcbiAgbGV0IHJvd3MgPSBbXTtcbiAgY29uc3Qgcm93QWNjZXNzb3JNYXAgPSBuZXcgV2Vha01hcCgpO1xuXG4gIHNldENvbnRleHQoJ1NNVUk6ZGF0YS10YWJsZTpyb3c6aGVhZGVyJywgZmFsc2UpO1xuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGNvbnN0IGFjY2Vzc29yID0ge1xuICAgICAgZ2V0IHJvd3MoKSB7XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgICAgfSxcbiAgICAgIGdldCBvcmRlcmVkUm93cygpIHtcbiAgICAgICAgcmV0dXJuIGdldE9yZGVyZWRSb3dzKCk7XG4gICAgICB9LFxuICAgIH07XG5cbiAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOmRhdGEtdGFibGU6Ym9keTptb3VudCcsIGFjY2Vzc29yKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRFbGVtZW50KCksICdTTVVJOmRhdGEtdGFibGU6Ym9keTp1bm1vdW50Jyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlUm93TW91bnQoZXZlbnQpIHtcbiAgICByb3dzLnB1c2goZXZlbnQuZGV0YWlsKTtcbiAgICByb3dBY2Nlc3Nvck1hcC5zZXQoZXZlbnQuZGV0YWlsLmVsZW1lbnQsIGV2ZW50LmRldGFpbCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVSb3dVbm1vdW50KGV2ZW50KSB7XG4gICAgY29uc3QgaWR4ID0gcm93cy5pbmRleE9mKGV2ZW50LmRldGFpbCk7XG4gICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgIHJvd3Muc3BsaWNlKGlkeCwgMSk7XG4gICAgICByb3dzID0gcm93cztcbiAgICB9XG4gICAgcm93QWNjZXNzb3JNYXAuZGVsZXRlKGV2ZW50LmRldGFpbC5lbGVtZW50KTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9yZGVyZWRSb3dzKCkge1xuICAgIHJldHVybiBbLi4uZ2V0RWxlbWVudCgpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZGMtZGF0YS10YWJsZV9fcm93JyldXG4gICAgICAubWFwKChlbGVtZW50KSA9PiByb3dBY2Nlc3Nvck1hcC5nZXQoZWxlbWVudCkpXG4gICAgICAuZmlsdGVyKChhY2Nlc3NvcikgPT4gYWNjZXNzb3IgJiYgYWNjZXNzb3IuX3NtdWlfZGF0YV90YWJsZV9yb3dfYWNjZXNzb3IpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIiwiPHRyXG4gIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgdXNlOmZvcndhcmRFdmVudHNcbiAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1yb3cnOiBoZWFkZXIsXG4gICAgJ21kYy1kYXRhLXRhYmxlX19yb3cnOiAhaGVhZGVyLFxuICAgICdtZGMtZGF0YS10YWJsZV9fcm93LS1zZWxlY3RlZCc6ICFoZWFkZXIgJiYgY2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZCxcbiAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gIH0pfVxuICBvbjpjbGljaz17KGV2ZW50KSA9PiBoZWFkZXIgJiYgbm90aWZ5SGVhZGVyQ2xpY2soZXZlbnQpfVxuICBvbjpTTVVJOmNoZWNrYm94Om1vdW50PXsoZXZlbnQpID0+IChjaGVja2JveCA9IGV2ZW50LmRldGFpbCl9XG4gIG9uOlNNVUk6Y2hlY2tib3g6dW5tb3VudD17KCkgPT4gKGNoZWNrYm94ID0gdW5kZWZpbmVkKX1cbiAgYXJpYS1zZWxlY3RlZD17Y2hlY2tib3ggPyAoY2hlY2tib3guY2hlY2tlZCA/ICd0cnVlJyA6ICdmYWxzZScpIDogbnVsbH1cbiAgey4uLmludGVybmFsQXR0cnN9XG4gIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3RyXG4+XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBsZXQgY291bnRlciA9IDA7XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCwgZ2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCByb3dJZCA9ICdTTVVJLWRhdGEtdGFibGUtcm93LScgKyBjb3VudGVyKys7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBjaGVja2JveDtcbiAgbGV0IGludGVybmFsQ2xhc3NlcyA9IHt9O1xuICBsZXQgaW50ZXJuYWxBdHRycyA9IHt9O1xuICBsZXQgaGVhZGVyID0gZ2V0Q29udGV4dCgnU01VSTpkYXRhLXRhYmxlOnJvdzpoZWFkZXInKTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBjb25zdCBhY2Nlc3NvciA9IHtcbiAgICAgIF9zbXVpX2RhdGFfdGFibGVfcm93X2FjY2Vzc29yOiAhaGVhZGVyLFxuICAgICAgZ2V0IGVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiBnZXRFbGVtZW50KCk7XG4gICAgICB9LFxuICAgICAgZ2V0IGNoZWNrYm94KCkge1xuICAgICAgICByZXR1cm4gY2hlY2tib3g7XG4gICAgICB9LFxuICAgICAgZ2V0IHJvd0lkKCkge1xuICAgICAgICByZXR1cm4gcm93SWQ7XG4gICAgICB9LFxuICAgICAgZ2V0IHNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gY2hlY2tib3ggJiYgY2hlY2tib3guY2hlY2tlZDtcbiAgICAgIH0sXG4gICAgICBhZGRDbGFzcyxcbiAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgZ2V0QXR0cixcbiAgICAgIGFkZEF0dHIsXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ1NNVUk6ZGF0YS10YWJsZTpyb3c6bW91bnQnLCBhY2Nlc3Nvcik7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnU01VSTpkYXRhLXRhYmxlOnJvdzp1bm1vdW50Jyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gYWRkQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSkge1xuICAgICAgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGNsYXNzTmFtZSkge1xuICAgIGlmICghKGNsYXNzTmFtZSBpbiBpbnRlcm5hbENsYXNzZXMpIHx8IGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEF0dHIobmFtZSkge1xuICAgIHJldHVybiBuYW1lIGluIGludGVybmFsQXR0cnNcbiAgICAgID8gaW50ZXJuYWxBdHRyc1tuYW1lXVxuICAgICAgOiBnZXRFbGVtZW50KCkuZ2V0QXR0cmlidXRlKG5hbWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkQXR0cihuYW1lLCB2YWx1ZSkge1xuICAgIGlmIChpbnRlcm5hbEF0dHJzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgaW50ZXJuYWxBdHRyc1tuYW1lXSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIG5vdGlmeUhlYWRlckNsaWNrKGV2ZW50KSB7XG4gICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnU01VSTpkYXRhLXRhYmxlOmhlYWRlcjpjbGljaycsIGV2ZW50KTtcbiAgfVxuXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50KCkge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG48L3NjcmlwdD5cbiIsInsjaWYgaGVhZGVyfVxuICA8dGhcbiAgICBiaW5kOnRoaXM9e2VsZW1lbnR9XG4gICAgdXNlOnVzZUFjdGlvbnM9e3VzZX1cbiAgICB1c2U6Zm9yd2FyZEV2ZW50c1xuICAgIGNsYXNzPXtjbGFzc01hcCh7XG4gICAgICBbY2xhc3NOYW1lXTogdHJ1ZSxcbiAgICAgICdtZGMtZGF0YS10YWJsZV9faGVhZGVyLWNlbGwnOiB0cnVlLFxuICAgICAgJ21kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0tbnVtZXJpYyc6IG51bWVyaWMsXG4gICAgICAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1jaGVja2JveCc6IGNoZWNrYm94LFxuICAgICAgJ21kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC0td2l0aC1zb3J0Jzogc29ydGFibGUsXG4gICAgICAnbWRjLWRhdGEtdGFibGVfX2hlYWRlci1jZWxsLS1zb3J0ZWQnOiBzb3J0YWJsZSAmJiAkc29ydCA9PT0gY29sdW1uSWQsXG4gICAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gICAgfSl9XG4gICAgb246Y2hhbmdlPXsoZXZlbnQpID0+IGNoZWNrYm94ICYmIG5vdGlmeUhlYWRlckNoYW5nZShldmVudCl9XG4gICAgcm9sZT1cImNvbHVtbmhlYWRlclwiXG4gICAgc2NvcGU9XCJjb2xcIlxuICAgIGRhdGEtY29sdW1uLWlkPXtjb2x1bW5JZH1cbiAgICBhcmlhLXNvcnQ9e3NvcnRhYmxlID8gKCRzb3J0ID09PSBjb2x1bW5JZCA/ICRzb3J0RGlyZWN0aW9uIDogJ25vbmUnKSA6IG51bGx9XG4gICAgey4uLmludGVybmFsQXR0cnN9XG4gICAgey4uLiQkcmVzdFByb3BzfVxuICAgID57I2lmIHNvcnRhYmxlfVxuICAgICAgPGRpdiBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19oZWFkZXItY2VsbC13cmFwcGVyXCI+XG4gICAgICAgIDxzbG90IC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cIm1kYy1kYXRhLXRhYmxlX19zb3J0LXN0YXR1cy1sYWJlbFwiXG4gICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICBpZD1cIntjb2x1bW5JZH0tc3RhdHVzLWxhYmVsXCJcbiAgICAgICAgPlxuICAgICAgICAgIHskc29ydCA9PT0gY29sdW1uSWRcbiAgICAgICAgICAgID8gJHNvcnREaXJlY3Rpb24gPT09ICdhc2NlbmRpbmcnXG4gICAgICAgICAgICAgID8gc29ydEFzY2VuZGluZ0FyaWFMYWJlbFxuICAgICAgICAgICAgICA6IHNvcnREZXNjZW5kaW5nQXJpYUxhYmVsXG4gICAgICAgICAgICA6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIHs6ZWxzZX08c2xvdCAvPnsvaWZ9PC90aFxuICA+XG57OmVsc2V9XG4gIDx0ZFxuICAgIGJpbmQ6dGhpcz17ZWxlbWVudH1cbiAgICB1c2U6dXNlQWN0aW9ucz17dXNlfVxuICAgIHVzZTpmb3J3YXJkRXZlbnRzXG4gICAgY2xhc3M9e2NsYXNzTWFwKHtcbiAgICAgIFtjbGFzc05hbWVdOiB0cnVlLFxuICAgICAgJ21kYy1kYXRhLXRhYmxlX19jZWxsJzogdHJ1ZSxcbiAgICAgICdtZGMtZGF0YS10YWJsZV9fY2VsbC0tbnVtZXJpYyc6IG51bWVyaWMsXG4gICAgICAnbWRjLWRhdGEtdGFibGVfX2NlbGwtLWNoZWNrYm94JzogY2hlY2tib3gsXG4gICAgICAuLi5pbnRlcm5hbENsYXNzZXMsXG4gICAgfSl9XG4gICAgb246Y2hhbmdlPXsoZXZlbnQpID0+IGNoZWNrYm94ICYmIG5vdGlmeUJvZHlDaGFuZ2UoZXZlbnQpfVxuICAgIHsuLi5pbnRlcm5hbEF0dHJzfVxuICAgIHsuLi4kJHJlc3RQcm9wc30+PHNsb3QgLz48L3RkXG4gID5cbnsvaWZ9XG5cbjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuICBsZXQgY291bnRlciA9IDA7XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IHsgb25Nb3VudCwgZ2V0Q29udGV4dCwgc2V0Q29udGV4dCB9IGZyb20gJ3N2ZWx0ZSc7XG4gIGltcG9ydCB7IGdldF9jdXJyZW50X2NvbXBvbmVudCB9IGZyb20gJ3N2ZWx0ZS9pbnRlcm5hbCc7XG4gIGltcG9ydCB7XG4gICAgZm9yd2FyZEV2ZW50c0J1aWxkZXIsXG4gICAgY2xhc3NNYXAsXG4gICAgdXNlQWN0aW9ucyxcbiAgICBkaXNwYXRjaCxcbiAgfSBmcm9tICdAc211aS9jb21tb24vaW50ZXJuYWwuanMnO1xuXG4gIGNvbnN0IGZvcndhcmRFdmVudHMgPSBmb3J3YXJkRXZlbnRzQnVpbGRlcihnZXRfY3VycmVudF9jb21wb25lbnQoKSk7XG5cbiAgbGV0IGhlYWRlciA9IGdldENvbnRleHQoJ1NNVUk6ZGF0YS10YWJsZTpyb3c6aGVhZGVyJyk7XG5cbiAgZXhwb3J0IGxldCB1c2UgPSBbXTtcbiAgbGV0IGNsYXNzTmFtZSA9ICcnO1xuICBleHBvcnQgeyBjbGFzc05hbWUgYXMgY2xhc3MgfTtcbiAgZXhwb3J0IGxldCBudW1lcmljID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgY2hlY2tib3ggPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBjb2x1bW5JZCA9IGhlYWRlciA/ICdTTVVJLWRhdGEtdGFibGUtY29sdW1uLScgKyBjb3VudGVyKysgOiBudWxsO1xuICBleHBvcnQgbGV0IHNvcnRhYmxlID0gZ2V0Q29udGV4dCgnU01VSTpkYXRhLXRhYmxlOnNvcnRhYmxlJyk7XG5cbiAgbGV0IGVsZW1lbnQ7XG4gIGxldCBpbnRlcm5hbENsYXNzZXMgPSB7fTtcbiAgbGV0IGludGVybmFsQXR0cnMgPSB7fTtcbiAgbGV0IHNvcnQgPSBnZXRDb250ZXh0KCdTTVVJOmRhdGEtdGFibGU6c29ydCcpO1xuICBsZXQgc29ydERpcmVjdGlvbiA9IGdldENvbnRleHQoJ1NNVUk6ZGF0YS10YWJsZTpzb3J0RGlyZWN0aW9uJyk7XG4gIGxldCBzb3J0QXNjZW5kaW5nQXJpYUxhYmVsID0gZ2V0Q29udGV4dChcbiAgICAnU01VSTpkYXRhLXRhYmxlOnNvcnRBc2NlbmRpbmdBcmlhTGFiZWwnXG4gICk7XG4gIGxldCBzb3J0RGVzY2VuZGluZ0FyaWFMYWJlbCA9IGdldENvbnRleHQoXG4gICAgJ1NNVUk6ZGF0YS10YWJsZTpzb3J0RGVzY2VuZGluZ0FyaWFMYWJlbCdcbiAgKTtcblxuICBpZiAoc29ydGFibGUpIHtcbiAgICBzZXRDb250ZXh0KCdTTVVJOmxhYmVsOmNvbnRleHQnLCAnZGF0YS10YWJsZTpzb3J0YWJsZS1oZWFkZXItY2VsbCcpO1xuICAgIHNldENvbnRleHQoJ1NNVUk6aWNvbi1idXR0b246Y29udGV4dCcsICdkYXRhLXRhYmxlOnNvcnRhYmxlLWhlYWRlci1jZWxsJyk7XG4gICAgc2V0Q29udGV4dCgnU01VSTppY29uLWJ1dHRvbjphcmlhLWRlc2NyaWJlZGJ5JywgY29sdW1uSWQgKyAnLXN0YXR1cy1sYWJlbCcpO1xuICB9XG5cbiAgb25Nb3VudCgoKSA9PiB7XG4gICAgY29uc3QgYWNjZXNzb3IgPSB7XG4gICAgICBfc211aV9kYXRhX3RhYmxlX2hlYWRlcl9jZWxsX2FjY2Vzc29yOiBoZWFkZXIsXG4gICAgICBnZXQgZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIGdldEVsZW1lbnQoKTtcbiAgICAgIH0sXG4gICAgICBnZXQgY29sdW1uSWQoKSB7XG4gICAgICAgIHJldHVybiBjb2x1bW5JZDtcbiAgICAgIH0sXG4gICAgICBhZGRDbGFzcyxcbiAgICAgIHJlbW92ZUNsYXNzLFxuICAgICAgZ2V0QXR0cixcbiAgICAgIGFkZEF0dHIsXG4gICAgfTtcblxuICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ1NNVUk6ZGF0YS10YWJsZTpjZWxsOm1vdW50JywgYWNjZXNzb3IpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldEVsZW1lbnQoKSwgJ1NNVUk6ZGF0YS10YWJsZTpjZWxsOnVubW91bnQnKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICBpZiAoIWludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdKSB7XG4gICAgICBpbnRlcm5hbENsYXNzZXNbY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCEoY2xhc3NOYW1lIGluIGludGVybmFsQ2xhc3NlcykgfHwgaW50ZXJuYWxDbGFzc2VzW2NsYXNzTmFtZV0pIHtcbiAgICAgIGludGVybmFsQ2xhc3Nlc1tjbGFzc05hbWVdID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZ2V0QXR0cihuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgaW4gaW50ZXJuYWxBdHRyc1xuICAgICAgPyBpbnRlcm5hbEF0dHJzW25hbWVdXG4gICAgICA6IGdldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRBdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGludGVybmFsQXR0cnNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICBpbnRlcm5hbEF0dHJzW25hbWVdID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gbm90aWZ5SGVhZGVyQ2hhbmdlKGV2ZW50KSB7XG4gICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnU01VSTpkYXRhLXRhYmxlOmhlYWRlcjpjaGVja2JveDpjaGFuZ2UnLCBldmVudCk7XG4gIH1cblxuICBmdW5jdGlvbiBub3RpZnlCb2R5Q2hhbmdlKGV2ZW50KSB7XG4gICAgZGlzcGF0Y2goZ2V0RWxlbWVudCgpLCAnU01VSTpkYXRhLXRhYmxlOmJvZHk6Y2hlY2tib3g6Y2hhbmdlJywgZXZlbnQpO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbjwvc2NyaXB0PlxuIl0sIm5hbWVzIjpbImNvdW50ZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxD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Q0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FB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
