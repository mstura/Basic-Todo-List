(function (){
    'use strict'
  var app = {};
	app.listElements = document.querySelector(".TDLContainer");
	app.listElements.addEventListener('click',ButtonIdentifier,false);
  app.storage = new store();

  app.deleteButton = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect class="noFill" width="22" height="22"/><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';
  app.completeButton = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="noFill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>';
function ButtonIdentifier (e){
	if (e.target !== e.currentTarget) {
    var t = e.path.find(function (trg){
      if (trg.tagName) {
        return trg.tagName.toLowerCase() === 'button';
      }});

    if (t) {
        if (t.className === "deleteB") {
                removeElement(t.parentNode.id);
              } else if (t.className === "completeB") {
		              completeElement(t.parentNode.id);
	            }
            }
    }
	e.stopPropagation();
}

function determineTarget (t){
  if (t.tagName) {
    if (t.tagName.toLowerCase() === 'button') {
    return t;
    }
  }
}

function addElement(){
    var text = document.getElementById('input').value;
        if (text){

    var list = document.getElementById('tdk');
    var item = document.createElement('li');
    item.innerText = text;
    item.classList.add('active');
    item.id = Date.now();

     var completeB = document.createElement('button');
    completeB.classList.add('completeB');
    completeB.innerHTML = app.completeButton;

    var deleteB = document.createElement('button');
    deleteB.classList.add('deleteB');
    deleteB.innerHTML = app.deleteButton;

    item.appendChild(completeB);
    item.appendChild(deleteB);

    list.appendChild(item);
    document.getElementById('input').value = '';
    var data = {
      title: text,
      id: item.id,
      class: item.className
    };
    app.storage.addE(data);
    }
}

function removeElement(target){
    var item = document.getElementById(target);
    item.parentNode.removeChild(item);
    app.storage.delE(item.id);
}

function completeElement(target){
	var item = document.getElementById(target);
	//var list = document.getElementById('tdk');
  //(item.parentNode.id === 'tdk') ? document.getElementById('ctd') : document.getElementById('tdk');

	item.className = (item.className === "active") ? "completed" : "active";
	//list.appendChild(item);
  app.storage.ce(item.id);
}
document.addEventListener('DOMContentLoaded',function(){
  var data = app.storage._data.TDL;
  if (data !== []){

    for (var i = 0; i < data.length; i++) {
      var item = document.createElement('li');
      var list = document.getElementById('tdk');
      //(data[i].class === "active") ? document.getElementById('tdk') : document.getElementById('ctd');
      item.innerHTML = data[i].title;
      item.className = data[i].class;
      item.id = data[i].id;

      var completeB = document.createElement('button');
      completeB.classList.add('completeB');
      completeB.innerHTML = app.completeButton;

      var deleteB = document.createElement('button');
      deleteB.classList.add('deleteB');
      deleteB.innerHTML = app.deleteButton;

      item.appendChild(completeB);
      item.appendChild(deleteB);

      list.appendChild(item);
    }
  }
} ,false);
document.getElementById('input').addEventListener('keypress', function (e){
  if (e.keyCode === 13) {
      addElement();
    }
});
}());
