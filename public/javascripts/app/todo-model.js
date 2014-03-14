define(["backbone"],function(t){var e=t.Model.extend({defaults:{title:"",completed:!1},toggle:function(){this.save({completed:!this.get("completed")})}});return e});
/*
//@ sourceMappingURL=todo-model.js.map
*/
