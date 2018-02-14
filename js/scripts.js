//Backbone Model

var Blog = Backbone.Model.extend({
    defaults: {
        author: "",
        title: "",
        url: ""
    }
});

//Backbone Collection

var Blogs = Backbone.Collection.extend({
    
});

//Instantiate two Blogs

var blog1 = new Blog({
    author: "Eduard",
    title: "Eduard's Blog",
    url: "http://www.eduard.com"
});
var blog2 = new Blog({
    author: "Marius",
    title: "Marius' Blog",
    url: "http://.www.marius.com"
});

//Instantiate a collection

var blogs = new Blogs([blog1, blog2]);