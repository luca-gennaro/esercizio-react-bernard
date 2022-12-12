import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">LOGO</div>
        <ul className={classes.link}>
          <li>
            <a >Home</a>
          </li>
          <li>
            <a to="/addItem">Add Item</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
