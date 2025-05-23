import styled from 'styled-components';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { images } from '../image';
import { useState } from 'react';
import Input from './Input';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text`
    flex: 1;
    font-size: 24px;
    color: ${({ theme, completed }) => (completed ? theme.done : theme.text)};
    text-decoration-line: ${({ completed }) => completed ? 'line-through' : 'none'};
`;

const Task = ({ item, deleteTask, checkTask, updateTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.text);

    const _handelUpdateButtonPress = () => {
        setIsEditing(true);
    }

    const _onSubmitEditing = () => {
        if (isEditing) {
            const editedTask = Object.assign({}, item, { text });
            setIsEditing(false);
            updateTask(editedTask);
        }
    };

    const _onBlur = () => {
        if (isEditing) {
            setIsEditing(false);
            setText(item.text);
        }
    }

    return isEditing ? (
        <Input
            value={text}
            onChangeText={(text) => setText(text)}
            onSubmitEditing={_onSubmitEditing}
            onBlur={_onBlur}
        />) : (
        <Container>
            {/* 넘어온 item의 completed 여부에 따라 체크된 체크박스 또는 체크가 안된 체크박스 보여주기 */}
            <IconButton
                type={item.completed ? images.completed : images.uncompleted}
                id={item.id}
                onPressOut={checkTask}
                completed={item.completed} />
            <Contents completed={item.completed}>{item.text}</Contents>
            {item.completed || (<IconButton type={images.update} onPressOut={_handelUpdateButtonPress} />)}
            <IconButton
                type={images.delete}
                id={item.id}
                onPressOut={deleteTask}
                completed={item.completed} />
        </Container>
    )
}

Task.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    deleteTask: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
};

export default Task;