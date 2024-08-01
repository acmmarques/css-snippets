import styled from 'styled-components';

const Breadcrumbs = ({
  children,
}) => {
  return (
    <nav area-label="Breadcrumb">
      <BreadcrumbList>
        {children}
      </BreadcrumbList>
    </nav>
  );
};

const Crumb = ({
  href,
  children,
}) => {
  return (
    <CrumbWrapper>
      <CrumbLink href={href}>
        {children}
      </CrumbLink>
    </CrumbWrapper>
  );
};

const BreadcrumbList = styled.ol`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const CrumbWrapper = styled.li`
  display: inline;
  --spacing: 8px;


  &:not(:first-of-type){
    margin-left: var(--spacing); 
    &:before{
      content: '/';
      margin-right: var(--spacing);
    }
  }

`;

const CrumbLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: revert;
  }
`;

const App = () => (
  <Breadcrumbs>
    <Crumb href="/">
      Home
    </Crumb>
    <Crumb href="/living">
      Living Room
    </Crumb>
    <Crumb href="/living/couch">
      Couches
    </Crumb>
    <Crumb href="/living/couch/sectional">
      Sectionals
    </Crumb>
  </Breadcrumbs>
);

export default App;
