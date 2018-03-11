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

//Instantiate two Blog Models

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

//Backbone View for one Blog

var BlogView = Backbone.View.extend({
    model: new Blog(),
    tagName: 'tr',
    initialize: function() {
        this.template = _.template($('.blogs-list-template').html());
    },
    render: function() {
            var attributes = this.model.toJSON();
            this.$el.html(this.template(attributes));
            return this;
        }
});

//Backbone View for all Blogs

var BlogsView = Backbone.View.extend({
    model: blogs,
    el: $(".blogs-list"),
    initialize: function() {
        this.model.on('add', this.render, this);
    },
    render: function() {
        var self = this;
        this.$el.html("");
        _.each(this.model.toArray(), function(blog) {
            self.$el.append((new BlogView({model: blog})).render().$el);
        });
        return this;
    }
});





//Instantiate BlogsView

var blogsView = new BlogsView();

$(document).ready(function() {
    $('.add-blog').on('click', function(){
        var blog = new Blog({
            author: $('.author-input').val(),
            title: $('.title-input').val(),
            url: $('.url-input').val()
        });
        $('.author-input, .title-input, .url-input').val('');
        console.log(blog.toJSON());
        blogs.add(blog);
    });
});




