import React from "react";
import useSound from "use-sound";
import { icons } from "../../assets/images";
import completedSound from '../../assets/sounds/leaf.mp3';
import deleteSound from '../../assets/sounds/pop.mp3';
import "./todo-item.scss";

export const TodoItem = ({ todos, onDelete, onToggle }) => {
  const [playCompleted] = useSound(completedSound, { volume: 0.3 });
  const [playDelete] = useSound(deleteSound, { volume: 0.5 });

  return (
    <>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`item ${todo.completed ? "item--completed" : ""}`}
        >
          {todo.text}
          <div className="item__control">
            <button
              onClick={() => {
                playCompleted();
                onToggle(todo.id);
              }}
              className="item__button item__button--toggle"
            >
              <img src={icons.leaf_icon} alt="leaf" className="item__image" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                playDelete(); 
                onDelete(todo.id);
              }}
              className="item__button item__button--delete"
            >
              <img src={icons.mushroom_icon} alt="mushroom" className="item__image" />
            </button>
          </div>
        </li>
      ))}
    </>
  );
};
