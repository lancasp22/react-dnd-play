import React, { Component, PropTypes } from 'react';
import update from 'react/lib/update';
import Post from './Post';
import { DropTarget, DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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

  movePost(item, props) {
    const { posts } = this.state;

    // posts.splice(item.index, 0, posts.splice(props.index, 1)[0]);

    // dragging within the same list, i.e. sorting
    if (item.group === props.group) {
      const dragPost = posts[item.index];
      this.setState(update(this.state, {
        posts: {
          $splice: [
            [item.index, 1],
            [props.index, 0, dragPost]
          ]
        }
      }));
    } else {
      this.setState(update(this.state, {
        posts: {
          $splice: [[props.index, 0, item.post]]
        }
      }));
    }
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
                  post={post}
                  index={i}
                  movePost={this.movePost}
                  group={this.props.group}
                  dropGroups={this.props.dropGroups}
            />
          );
        })}
      </div>
    );
  }
}

export default PostContainer