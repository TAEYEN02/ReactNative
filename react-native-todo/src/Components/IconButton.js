import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { images } from '../image';

const Icon = styled.Image`
  tint-color: ${({ theme, completed }) => completed ? theme.done:theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = ({ type, onPressOut,id,completed }) => {
    
    const _onPressOut = () => {
        onPressOut(id);
    }
    
    return (
        <Pressable onPressOut={_onPressOut}>
            <Icon source={type} completed={completed} />
        </Pressable>
    );
};

IconButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired,
    onPressOut: PropTypes.func,
    id: PropTypes.string,
    completed:PropTypes.bool,
};

export default IconButton;