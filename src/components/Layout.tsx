import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StMain>
      <StH1>TypeScirpt-TO DO LIST</StH1>
      {children}
    </StMain>
  );
};

const StMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  margin: 0 auto;
`;

const StH1 = styled.h1`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 2px solid;
`;

export default Layout;
