import styled from 'styled-components';
import { AiOutlineHome } from 'react-icons/ai';
import { BiStore } from 'react-icons/bi';
import { MdOutlineGroups } from 'react-icons/md';
import { GrGamepad } from 'react-icons/gr';

const TabSections = ['Home', 'MarketPlace', 'Groups', 'Gaming'];

const Icons = {
  Home: AiOutlineHome,
  MarketPlace: BiStore,
  Groups: MdOutlineGroups,
  Gaming: GrGamepad,
};

const StyledTabSection = styled.div`
  display: flex;
`;

const tabStyle = {
  padding: '1rem',
  fontSize: '2rem',
};

const TabSection = () => {
  return (
    <StyledTabSection>
      {TabSections.map((tab, index) => {
        const ComponentToBeRendered = Icons[tab];
        return (
          <div key={index} title={tab}>
            <ComponentToBeRendered style={tabStyle} />
          </div>
        );
      })}
    </StyledTabSection>
  );
};

export default TabSection;
