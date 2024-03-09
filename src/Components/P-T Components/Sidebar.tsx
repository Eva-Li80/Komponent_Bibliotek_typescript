import NavigationBar from '../K-O Components/Navigation';


const Sidebar = () => {
  const links = [
    { text: "Home", url: "/" },
    { text: "About", url: "/about" },
    { text: "A-E Components", url: "/aepage" },
    { text: "F-J Components", url: "/fjpage" },
    { text: "K-O Components", url: "/kopage" },
    { text: "P-T Components", url: "/ptpage" },
    { text: "U-Z Components", url: "/uzpage" },
    { text: "Contact", url: "/contact" },
  ];

  return (
    <div className="sidebar">
      <h2>"Sidebar"</h2>
      <NavigationBar links={links}/>
    </div>
  );
};

export default Sidebar;
