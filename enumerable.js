/** v1.0.0 **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Enumerable = (function (_super) {
    __extends(Enumerable, _super);
    function Enumerable() {
        _super.call(this);
        this._data = new Array();
    }
    Enumerable.prototype.Select = function (selector) {
        var _retVal = new Array();
        for (var i = 0; i < this._data.length; i++) {
            var _dd = this._data[i];
            _retVal.push(selector(_dd));
        }
        return _retVal;
    };
    Enumerable.prototype.Where = function (selector) {
        var _newList = new Enumerable();
        for (var i = 0; i < this._data.length; i++) {
            var _d = this._data[i];
            if (selector(_d)) {
                _newList._data.push(_d);
            }
        }
        return _newList;
    };
    Enumerable.prototype.OrderBy = function (selector) {
        var _newList = new Enumerable();
        var _origList = this._data;
        var _tempList = [];
        for (var i = 0; i < _origList.length; i++) {
            _tempList.push([selector(_origList[i]), _origList[i]]);
        }
        _tempList.sort(function (a, b) { return a[0] > b[0] ? 1 : 0; });
        for (var j = 0; j < _tempList.length; j++) {
            _newList._data.push(_tempList[j][1]);
        }
        return _newList;
    };
    Enumerable.prototype.OrderByDescending = function (selector) {
        var _newList = new Enumerable();
        var _origList = this._data;
        var _tempList = [];
        for (var i = 0; i < _origList.length; i++) {
            _tempList.push([selector(_origList[i]), _origList[i]]);
        }
        _tempList.sort(function (a, b) { return a[0] < b[0] ? 1 : 0; });
        for (var j = 0; j < _tempList.length; j++) {
            _newList._data.push(_tempList[j][1]);
        }
        return _newList;
    };
    return Enumerable;
}(Array));
var List = (function (_super) {
    __extends(List, _super);
    function List() {
        _super.apply(this, arguments);
    }
    List.prototype.Add = function (t) {
        this._data.push(t);
    };
    List.prototype.AddRange = function (ts) {
        for (var i = 0; i < ts.length; i++) {
            this._data.push(ts[i]);
        }
    };
    return List;
}(Enumerable));
//# sourceMappingURL=enumerable.js.map