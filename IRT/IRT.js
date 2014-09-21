Blogpost = new Meteor.Collection('posts');

Router.map(function(){
    this.route('home', {path: '/'});
    this.route('hello', {path: '/this-is-the-new-path'});
    this.route('test', 
      {
        path: '/test',
        data: function() 
        {
          return Blogpost.findOne();
        }
      }
    );
    this.route('dynamic-test', 
    {
      path: '/dynamic-test/:someValue',
      data: function()
      {
        console.log(this.params)
      }
    });
    this.route('post',
      {
        path: '/:permalink',
        data: function()
        {
          var permalinkVar = this.params.permalink;
          console.log(permalinkVar);
          return Blogpost.findOne({permalink: permalinkVar});
        }
      });
});

if (Meteor.isClient)
{
  Template.home.autoredirect = function()
  {
    Router.go('hello');
  }
}