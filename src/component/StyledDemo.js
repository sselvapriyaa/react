import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color:blue;
color: black;
font-size: 32px;
`;

function StyledDemo() {
    return (
        <div>
            <StyledButton>Submit</StyledButton>
        </div>
    );
}

export default StyledDemo;