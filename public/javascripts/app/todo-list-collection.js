define(["backbone","bbLocalStorage","./todo-model"],function(t,e,o){var n=t.Collection.extend({model:o,localStorage:new e("todos-react-backbone"),completed:function(){return this.filter(function(t){return t.get("completed")})},remaining:function(){return this.without.apply(this,this.completed())},nextOrder:function(){return this.length?this.last().get("order")+1:1},comparator:function(t){return t.get("order")}});return n});
/*
//@ sourceMappingURL=todo-list-collection.js.map
*/
