import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import Post from './Post';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import ItemTypes from './ItemTypes';
import { flow } from 'lodash';

const style = {
  width: "30%",
  display: "inline-block"
};

// const postTarget = {
//   drop() {
//   }
// };

class PostContainer extends Component {
  static propTypes = {
    //connectDropTarget: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.movePost = this.movePost.bind(this);
    // this.findPost = this.findPost.bind(this);
    this.state = {
      posts: props.posts
    };
  }

  movePost(dragIndex, hoverIndex) {
    const { posts } = this.state;
    const dragPost = posts[dragIndex];

    // posts.splice(dragIndex, 0, posts.splice(hoverIndex, 1)[0]);

    this.setState(update(this.state, {
      posts: {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, dragPost]
        ]
      }
    }));
  }
  // findPost(id) {
  //   const { posts } = this.state;
  //   const post = posts.filter(c => c.id === id)[0];

  //   return {
  //     post,
  //     index: posts.indexOf(post)
  //   };
  // }

  render() {
    // const { connectDropTarget } = this.props;
    const { posts } = this.state;
    // return connectDropTarget(
    return (
      <div style={style} >
        {posts.map((post, i) => {
          return (
            <Post key={post.id}
                  id={post.id}
                  index={i}
                  text={post.text}
                  slug={post.slug}
                  movePost={this.movePost}
            />
          );
        })}
      </div>
    );
  }
}

export default PostContainer