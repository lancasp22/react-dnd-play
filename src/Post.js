import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import { flow } from 'lodash';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
};


const Types = {
  POST: 'post'
};

/**
 * Specifies the drag source contract.
 * Only `beginDrag` function is required.
 */
const postSource = {
  beginDrag(props) {
    // Return the data describing the dragged item
    const item = { id: props.id, index:props.index };
    return item;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // When dropped on a compatible target, do something
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    console.log("END DRAG ")
    console.log(item, dropResult)
  }
};

const postTarget = {
  hover(props, monitor, component) {
    //arguments are props, TargetMonitor, DragDropContainer
    // props are the props of the container being dropped onto
    // const dragIndex = monitor.getItem().index;
    // const hoverIndex = props.index;

    // // Don't replace items with themselves
    // if (dragIndex === hoverIndex) {
    //   return;
    // }

    // // Determine rectangle on screen
    // const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // // Get vertical middle
    // const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // // Determine mouse position
    // const clientOffset = monitor.getClientOffset();

    // // Get pixels to the top
    // const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // // Only perform the move when the mouse has crossed half of the items height
    // // When dragging downwards, only move when the cursor is below 50%
    // // When dragging upwards, only move when the cursor is above 50%

    // // Dragging downwards
    // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
    //   return;
    // }

    // // Dragging upwards
    // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
    //   return;
    // }

    // // Time to actually perform the action
    // props.moveCard(dragIndex, hoverIndex);

    // // Note: we're mutating the monitor item here!
    // // Generally it's better to avoid mutations,
    // // but it's good here for the sake of performance
    // // to avoid expensive index searches.
    // monitor.getItem().index = hoverIndex;
  },

  drop(props, monitor) {
    // Arguments are props, TargetMonitor, DragDropContainer
    // props are the props of the component that we dropped onto.
    const item = monitor.getItem();
    props.movePost(item.index, props.index);
    console.log("DROPPED");
    console.log(item);
    console.log(props);
  }
};

/**
 * Specifies which props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

function getType(props) {
  return props.group;
}

class Post extends Component {

  render() {
    const { id } = this.props;
    // These two props are injected by React DnD,
    // as defined by your `collect` function above:
    const { isDragging, connectDragSource, connectDropTarget } = this.props;

    return connectDragSource(connectDropTarget(
      <div style={{ ...style}}>
        {this.props.group} {this.props.text}
        {this.props.id && isDragging && ' (and I am being dragged now)'}
      </div>
    ));
  }
}

export default flow(
  DragSource(getType, postSource, collect),
  DropTarget(getType, postTarget, connect => ({
    connectDropTarget: connect.dropTarget()}))
  
)(Post)