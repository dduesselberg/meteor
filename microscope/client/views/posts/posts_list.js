var postsData = [
{
title: 'Introducing Telescope',
author: 'Sacha Greif',
url: 'http://sachagreif.com/introducing-telescope/'
},
{
title: 'Meteor',
author: 'Tom Coleman',
url: 'http://meteor.com'
},
{
title: 'The Meteor Book',
author: 'Top Coleman',
url: 'http://themeteorbook.com'
}
];
Template.postsList.helpers({
posts: postsData
});