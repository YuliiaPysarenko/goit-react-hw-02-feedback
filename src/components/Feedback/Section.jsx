import styled from 'styled-components';

const StyledSection = styled.section`
    text-align: left;
    margin-left: 30px;
`

const StyledTitle = styled.h2`
    margin: 30px 0;
    font-weight: 500;
`

const Section = ({title, children}) => (
    <StyledSection>
        <StyledTitle>{title}</StyledTitle>
        {children}
    </StyledSection>
)

export default Section;