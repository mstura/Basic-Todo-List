(function (){
    'use strict'
  var app = {};
  app.storage = new store();
  app.$ = new $h();
  app.listeners = new listeners();

function listeners(){
  app.$.ael('click', ButtonIdentifier,app.$.listElements);
  app.$.ael('DOMContentLoaded',readSaved,document);
  app.$.ael('keypress',ButtonIdentifier,app.$._input);
}
function ButtonIdentifier (e){
  if (e.keyCode !== 13) {
    var target = app.$.bi(e);
    if(target){
        if (target.className === "deleteB") {
                removeElement(target.parentNode.id);
            } else if (target.className === "completeB") {
		            completeElement(target.parentNode.id);
	          }
          }
      } else if (e.keyCode === 13) {
        addElement();
      }
  }


function addElement(){
    var text = app.$._input.value;
        if (text){
          var item = app.$.buildTodo(text);
          app.$.ac(app.$.list,item);
          app.$._input.value = '';
          var data = {
            title: text,
            id: item.id,
            class: item.className
          };
        app.storage.addE(data);
    }
}

function removeElement(target){
    app.$.re(target);
    app.storage.delE(target);
}

function completeElement(target){
	var item = document.getElementById(target);
	item.className = (item.className === "active") ? "completed" : "active";
  app.storage.ce(item.id);
}

function readSaved(){
  var data = app.storage._data.TDL;
  if (data !== []){

    for (var i = 0; i < data.length; i++) {
      var item = app.$.ci('li', data[i].class, data[i].title);
      item.id = data[i].id;
      var completeB = app.$.ci('button', 'completeB', app.$.completeButton);
      var deleteB = app.$.ci('button', 'deleteB', app.$.deleteButton);
      app.$.ac(item,completeB,deleteB);
      app.$.ac(app.$.list,item);
    }
  }
}
}());
