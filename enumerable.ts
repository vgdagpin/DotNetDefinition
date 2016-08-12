/** v1.0.0 **/

/* Usage: 
 *   
    var _arr = new List<User>();

    _arr.Add(new User('6E699DB4-E877-43EA-88A3-EABE1A485C68', 'Vincent Dagpin'));
    _arr.Add(new User('E17A67D7-24B9-436D-A41F-E9AC681256CF', 'Enteng Dagpin'));

    var _ss = _arr
        .Where(a => a.ID == '6E699DB4-E877-43EA-88A3-EABE1A485C68')
        .Select(a => a.FullName);

    console.log('ss', _ss);
 *
 */



interface Array<T> {
    Select<T>(selector: (d: any) => any): Array<any>;
    Where<T>(selector: (d: any) => boolean): Enumerable<T>;
    OrderBy<T>(selector: (d: any) => any): Enumerable<T>;
    OrderByDescending<T>(selector: (d: any) => any): Enumerable<T>;
}

interface IList<T> extends  Array<T> {
    Add(t: T): void;
    AddRange(ts: Array<T>): void;
}

class Enumerable<T> extends Array<T> implements Array<T> {
    public _data: Array<T> = new Array<T>();

    constructor() {
        super();
    }

    public Select<T>(selector: (d: any) => any): Array<any> {
        var _retVal = new Array<any>();

        for (var i = 0; i < this._data.length; i++) {
            var _dd = this._data[i];
            _retVal.push(selector(_dd));
        }

        return _retVal;
    }

    public Where<T>(selector: (d: any) => boolean): Enumerable<T> {
        var _newList = new Enumerable<T>();

        for (var i = 0; i < this._data.length; i++) {
            var _d = this._data[i];

            if (selector(_d)) {
                _newList._data.push(<T><any>_d);
            }
        }

        return _newList;
    }

    public OrderBy<T>(selector: (d: any) => any): Enumerable<T> {
        var _newList = new Enumerable<T>();
        var _origList = this._data;
        var _tempList = [];

        for (var i = 0; i < _origList.length; i++) {
            _tempList.push([selector(_origList[i]), _origList[i]]);
        }

        _tempList.sort((a, b) => a[0] > b[0] ? 1 : 0);

        for (var j = 0; j < _tempList.length; j++) {
            _newList._data.push(_tempList[j][1]);
        }

        return _newList;
    }

    public OrderByDescending<T>(selector: (d: any) => any): Enumerable<T> {
        var _newList = new Enumerable<T>();
        var _origList = this._data;
        var _tempList = [];

        for (var i = 0; i < _origList.length; i++) {
            _tempList.push([selector(_origList[i]), _origList[i]]);
        }

        _tempList.sort((a, b) => a[0] < b[0] ? 1 : 0);

        for (var j = 0; j < _tempList.length; j++) {
            _newList._data.push(_tempList[j][1]);
        }

        return _newList;
    }
}

class List<T> extends Enumerable<T> implements IList<T> {
    public Add(t: T): void {
        this._data.push(t);
    }

    public AddRange(ts: Array<T>): void {
        for (var i = 0; i < ts.length; i++) {
            this._data.push(ts[i]);
        }
    }
}