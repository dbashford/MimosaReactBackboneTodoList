define(["react","./utils"],function(t,e){var o=t.createClass({displayName:"TodoFooter",render:function(){var o=e.pluralize(this.props.count,"todo"),n=null;return this.props.completedCount>0&&(n=t.DOM.button({id:"clear-completed",onClick:this.props.onClearCompleted},"Clear completed (",this.props.completedCount,")")),t.DOM.footer({id:"footer"},t.DOM.span({id:"todo-count"},t.DOM.strong(null,this.props.count)," ",o," ","left"),n)}});return o});
/*
//@ sourceMappingURL=todo-footer.js.map
*/
