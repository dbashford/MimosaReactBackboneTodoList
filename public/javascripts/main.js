require({urlArgs:"b="+(new Date).getTime(),shim:{jquery:{exports:"$"}},paths:{react:"vendor/react/react",backbone:"vendor/backbone/backbone",underscore:"vendor/lodash/lodash.compat",bbLocalStorage:"vendor/backbone.localStorage/backbone.localStorage",jquery:"vendor/zepto/zepto"}},["app/app","app/todo-list-collection","react"],function(e,o,a){a.renderComponent(e({todos:new o}),document.getElementById("container"))});
/*
//@ sourceMappingURL=main.js.map
*/
