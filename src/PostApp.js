import React, { Component } from 'react';
import PostContainer from './PostContainer';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class PostApp extends Component {
  render() {
    let photoPosts = 
      [{id: 1, text: 'Amy 1', slug: 'amy-photo1'},
       {id: 2, text: 'Amy 2', slug: 'amy-photo2'},
       {id: 3, text: 'Amy 3', slug: 'amy-photo3'},
       {id: 6, text: 'Amy 6', slug: 'amy-photo6'},
       {id: 7, text: 'Amy 7', slug: 'amy-photo7'}
      ];

    let peoplePosts = 
      [{id: 11, text: 'amy', slug: 'amy'},
       {id: 12, text: 'pauline', slug: 'pauline'},
       {id: 15, text: 'roy', slug: 'roy'},
       {id: 16, text: 'ernest', slug: 'ernest'}
      ];

    let allPosts = 
      [{id: 1, text: 'Amy 1', slug: 'amy-photo1'},
       {id: 2, text: 'Amy 2', slug: 'amy-photo2'},
       {id: 3, text: 'Amy 3', slug: 'amy-photo3'},
       {id: 4, text: 'Amy 4', slug: 'amy-photo4'},
       {id: 5, text: 'Amy 5', slug: 'amy-photo5'},
       {id: 6, text: 'Amy 6', slug: 'amy-photo6'},
       {id: 7, text: 'Amy 7', slug: 'amy-photo7'},
       {id: 11, text: 'amy', slug: 'amy'},
       {id: 12, text: 'pauline', slug: 'pauline'},
       {id: 13, text: 'stephen', slug: 'stephen'},
       {id: 14, text: 'laura', slug: 'laura'},
       {id: 15, text: 'roy', slug: 'roy'},
       {id: 16, text: 'ernest', slug: 'ernest'},
       {id: 21, text: 'where did you meet?', slug: 'prompt-1'},
       {id: 22, text: 'how did he propose?', slug: 'prompt-2'},
       {id: 23, text: 'add more photos', slug: 'prompt-3'},
       {id: 24, text: 'add a person', slug: 'prompt-3'}
      ];

    return (
      <div>
        <p>
          Because you write the logic instead of using the readymade components, you can tweak the behavior to the one your app needs.
          In this example, we move the post inside the drop target's <code>drop()</code> handler. 
          We could do it inside the drag source's <code>endDrag()</code> handler if we were using the hover code as this would let us check <code>monitor.didDrop()</code> and revert the drag operation if the post was dropped outside its container.
          The first 2 lists are sortable. The 3rd list isn't sortable but its contents can be dragged onto either of the first 2 lists.
        </p>
        <PostContainer posts={photoPosts} group="photo" dropGroups={["photo", "post"]}/>
        <PostContainer posts={peoplePosts} group="person" dropGroups={["person", "post"]}/>
        <PostContainer posts={allPosts}  group="post" dropGroups={["photo", "person"]} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(PostApp);