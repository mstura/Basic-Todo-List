(function(window) {
  'use strict';

  function store(name){
    this._cont = name;

    if (!localStorage[this._cont]) {
      var data = {
        TDL: []
        };
        localStorage[this._cont] = JSON.stringify(data);
      }
      this._data = JSON.parse(localStorage[this._cont]);
    }

  store.prototype.addE = function (item) {
      var db = JSON.parse(localStorage[this._cont]);
      var data = db.TDL;

      data.push(item);
      localStorage[this._cont] = JSON.stringify(db);
    }

  store.prototype.delE = function (id) {
    var db = JSON.parse(localStorage[this._cont]);
    var data = db.TDL;
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data.splice(i,1);
        break;
      }
    }
    localStorage[this._cont] = JSON.stringify(db);
  }

  store.prototype.ce = function (id) {
    var db = JSON.parse(localStorage[this._cont]);
    var data = db.TDL;
    for (var i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        data[i].class = (data[i].class === "active") ? "completed" : "active";
        break;
      }
    }
    localStorage[this._cont] = JSON.stringify(db);
  };
  window = window || {};
  window.store = store;
})(window);
