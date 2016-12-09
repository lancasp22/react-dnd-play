import React, { Component } from 'react';
import PostContainer from './PostContainer';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class PostApp extends Component {
  render() {
    let sourcePosts = 
      [{id: 1, text: 'Write a cool JS library', slug: 'amy-photo1'},
       {id: 2, text: 'Make it generic enough', slug: 'amy-photo2'},
       {id: 3, text: 'Write README', slug: 'amy-photo3'},
       {id: 4, text: 'Create some examples', slug: 'amy-photo1', slug: 'amy-photo4'},
       {id: 5, text: 'Spam in Twitter and IRC to promote it', slug: 'amy-photo5'},
       {id: 6, text: '???', slug: 'amy-photo6'},
       {id: 7, text: 'PROFIT', slug: 'amy-photo7'}
      ];

    let targetPosts = 
      [{id: 1, text: 'Target post 1', slug: 'amy-photo8'},
       {id: 2, text: 'Target post 2', slug: 'amy-photo9'},
       {id: 3, text: 'Target post 3', slug: 'amy-photo10'},
       {id: 4, text: 'Target post 4', slug: 'amy-photo11'},
       {id: 5, text: 'Target post 5', slug: 'amy-photo12'},
       {id: 6, text: 'Target post 6', slug: 'amy-photo13'},
       {id: 7, text: 'Target post 7', slug: 'amy-photo14'}
      ];

    let otherPosts = 
      [{id: 21, text: 'Other post 1', slug: 'amy-photo15'},
       {id: 22, text: 'Other post 2', slug: 'amy-photo16'},
       {id: 23, text: 'Other post 3', slug: 'amy-photo17'},
       {id: 24, text: 'Other post 4', slug: 'amy-photo18'},
       {id: 25, text: 'Other post 5', slug: 'amy-photo19'},
       {id: 26, text: 'Other post 6', slug: 'amy-photo20'},
       {id: 27, text: 'Other post 7', slug: 'amy-photo21'}
      ];

    return (
      <div>
        <p>
          <b><a href='https://github.com/gaearon/react-dnd/tree/master/examples/04%20Sortable/Cancel%20on%20Drop%20Outside'>Browse the Source</a></b>
        </p>
        <p>
          Because you write the logic instead of using the readymade components, you can tweak the behavior to the one your app needs.
          In this example, instead of moving the post inside the drop target's <code>drop()</code> handler, we do it inside the drag source's <code>endDrag()</code> handler. This let us check <code>monitor.didDrop()</code> and revert the drag operation if the post was dropped outside its container.
        </p>
        <PostContainer posts={sourcePosts} group="source" />
        <PostContainer posts={targetPosts} group="target" />
        <PostContainer posts={otherPosts}  group="other" />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(PostApp);