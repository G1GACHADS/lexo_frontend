import React, { useState } from "react";
import { PanResponder } from "react-native";
import styled from "styled-components";
import { useWindowDimensions } from "react-native";

const ResizableDraggableView = React.forwardRef((props,ref)=>{
  // Set up state to track the current dimensions and position of the view
  const { width:maxWidth, height:maxHeight } = useWindowDimensions();
  const [startWidth,endWidth] = [0,0]
  const [dimensions, setDimensions] = useState({ width: 100, height: 100 });
  const [position, setPosition] = useState({
    x: (maxWidth - dimensions.width) / 2,
    y: (maxHeight - dimensions.height) / 2,
  });
  // Set up PanResponder to handle touch gestures
  const distanceToScale = Math.min(25,10000);
  const error_margin = 10
  const crossingBoundary = (x, y, w, h) => {
    let crossingBoundary =  x+error_margin < startWidth || y+error_margin < endWidth || x + w  > maxWidth+error_margin || y + h > maxHeight+error_margin;
    //update the position if it is crossing the boundary
    if (crossingBoundary) {
      let newX = x;
      let newY = y;
      if (x < 0) {
        newX = .2;
      } else if (x + w > maxWidth) {
        newX = maxWidth - w-.2;
      }
      if (y < 0) {
        newY = .2;
      } else if (y + h > maxHeight) {
        newY = maxHeight - h-.2;
      }
      setPosition({ x: newX, y: newY });
    }
    return crossingBoundary;
  };
  //!fix this
  ref.current = {
    getData: function(){return{originX:position.x,originY:position.y,width:dimensions.width,height:dimensions.height}}
  }
  const euclidDistance = (x, y, x1, y1) => {
    return Math.sqrt((x - x1) ** 2 + (y - y1) ** 2);
  };
  const panResponder = PanResponder.create({
    // When the user starts dragging the view, update the position state
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      return Math.abs(gestureState.dx) > .2 || Math.abs(gestureState.dy) > .2;
    },
    onPanResponderMove: (evt, gestureState) => {
      //find the 4 points of the view to scale
      //scale the view
      let possibility_distance = [
        { x: position.x, y: position.y }, //topLeft
        { x: position.x + dimensions.width, y: position.y }, //topRight
        { x: position.x, y: position.y + dimensions.height }, //bottomLeft
        { x: position.x + dimensions.width, y: position.y + dimensions.height }, //bottomRight
      ];

      let min_distance = Number.MAX_SAFE_INTEGER;
      let min_distance_index = -1;

      //find the closest distance
      for (const [index, anchor] of possibility_distance.entries()) {
        const distance = euclidDistance(
          gestureState.moveX,
          gestureState.moveY,
          anchor.x,
          anchor.y
        );
        if (distance < min_distance) {
          min_distance = distance;
          min_distance_index = index;
        }
      }
      // console.log(min_distance_index != -1 && min_distance < distanceToScale)
      if (min_distance_index != -1 && min_distance < distanceToScale) {
        if (
          !crossingBoundary(
            position.x,
            position.y,
            dimensions.width,
            dimensions.height
          )
        ) {
          switch (min_distance_index) {
            case 0: //topLeft bener
              setDimensions({
                width: dimensions.width - gestureState.dx,
                height: dimensions.height - gestureState.dy,
              });
              setPosition({
                x: position.x + gestureState.dx,
                y: position.y + gestureState.dy,
              });
              break;
            case 1: //topRight bener
              setDimensions({
                width: dimensions.width + gestureState.dx,
                height: dimensions.height - gestureState.dy,
              });
              setPosition({
                x: position.x,
                y: position.y + gestureState.dy,
              });
              break;
            case 2: //bottomLeft bener
              setDimensions({
                width: dimensions.width - gestureState.dx,
                height: dimensions.height + gestureState.dy,
              });
              setPosition({
                x: position.x + gestureState.dx,
                y: position.y,
              });
              break;
            case 3: //bottomRight bener
              setDimensions({
                width: dimensions.width + gestureState.dx,
                height: dimensions.height + gestureState.dy,
              });
              break;
          }
        }
      }
      //assign new position
      else {
        if (
          !crossingBoundary(
            position.x,
            position.y,
            dimensions.width,
            dimensions.height
          )
        )
          setPosition({
            x: position.x + gestureState.dx,
            y: position.y + gestureState.dy,
          });
      }
    },
  });

  // Render the view with the current dimensions and position, using the PanResponder to handle touch gestures
  return (
    <ViewStyles
      ref = {ref}
      style={[
        { width: dimensions.width, height: dimensions.height },
        { transform: [{ translateX: position.x }, { translateY: position.y }] },
      ]}
      {...panResponder.panHandlers}
    ></ViewStyles>
  );
})

const ViewStyles = styled.View`
  transform-origin: "center";
  border: 2px solid white;
  position: absolute;
`;

export default ResizableDraggableView;