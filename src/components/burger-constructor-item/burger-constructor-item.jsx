import {
  ConstructorElement,
  DragIcon,
} from '@krgaa/react-developer-burger-ui-components';
import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';
import {
  removeIngredient,
  sortIngredient,
} from '../../services/burger-constructor/actions';

export const BurgerConstructorItem = ({ ingredient, index, key }) => {
  const ref = useRef(null);

  const dispatch = useDispatch();

  const handleRemove = (ingredient) => {
    dispatch(removeIngredient(ingredient));
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'ingredient',
    // item: ingredient,
    item: () => {
      return { ingredient, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // const handleSort = () => {
  //   console.log('sort');
  // };

  // const moveCard = useCallback((dragIndex, hoverIndex) => {
  //   setCards((prevCards) =>
  //     update(prevCards, {
  //       $splice: [
  //         [dragIndex, 1],
  //         [hoverIndex, 0, prevCards[dragIndex]],
  //       ],
  //     }),
  //   )
  // }, [])

  const [{ handlerId }, drop] = useDrop({
    accept: 'ingredient',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      const dragIndex = item.index;
      const hoverIndex = index;
      if (hoverIndex === dragIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      dispatch(sortIngredient(dragIndex, hoverIndex));
      item.index = hoverIndex;
    },
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div key={key} ref={ref} data-handler-id={handlerId} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => {
          handleRemove(ingredient);
        }}
      />
    </div>
  );
};
