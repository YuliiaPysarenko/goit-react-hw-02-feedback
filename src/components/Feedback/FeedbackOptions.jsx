import styled from 'styled-components';

const Button = styled.button`
    margin: 3px;
    padding: 2px 10px;
    background-color: #fff;
    border: 1px solid #b6b6b6;
    border-radius: 5px;
    cursor: pointer;
`

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
    <div>
        {options.map(name => (<Button onClick={onLeaveFeedback} key={name}>{name}</Button>))}
    </div>
    )
}

export default FeedbackOptions;