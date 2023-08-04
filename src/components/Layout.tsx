// import styled from "styled-components";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center max-w-4xl h-screen my-0 mx-auto">
      <h1 className="w-full pb-2.5 text-3xl font-extrabold border-b-2 border-black">
        TypeScirpt-TO DO LIST
      </h1>
      {children}
    </main>
  );
};

// const StMain = styled.main`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   max-width: 1200px;
//   min-width: 800px;
//   margin: 0 auto;
//   border-bottom: 2px solid;
// `;

// const StH1 = styled.h1`
//   width: 100%;
//   padding-bottom: 10px;
//   border-bottom: 2px solid;
// `;

export default Layout;
