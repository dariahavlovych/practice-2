import { EditForm, GridItem, Text } from 'components';
import style from './TodoListItem.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

export const TodoListItem = ({ text, counter, id, onDelete }) => {
  const handleEdit = () => {
    return <EditForm defaultValue={text} />;
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => onDelete(id)}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button" onClick={handleEdit}>
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
