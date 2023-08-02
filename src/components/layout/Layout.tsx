import SideBar from "../sidebar/SideBar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <main className="font-bodyFont w-full h-screen max-h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-auto">
      <div className="container mx-auto flex flex-col md:flex-row gap-5 p-5">
        <div className="w-full md:h-[calc(100vh-40px)] md:w-1/6 bg-sidebarColor border dark:border-white">
          <SideBar />
        </div>
        <div className="w-full h-[calc(100vh-40px)] md:w-5/6 p-5 border overflow-y-auto dark:border-white">
          {children}
        </div>
      </div>
    </main>
  );
};
export default Layout;
