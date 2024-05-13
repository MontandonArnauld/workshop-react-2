import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar_top">
      <img className="logo_navbar" src="../../public/images/lognavbar.png" />
      <div className="title_navbar">
        <h1>LOS ANGELES LAKERS</h1>
        <div className="categories_navbar">
          <ul className="categories">
            <li>BIOGRAPHIE</li>
            <li>EQUIPE</li>
            <li>PALMARES</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
