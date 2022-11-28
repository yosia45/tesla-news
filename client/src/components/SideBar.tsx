import { Menu } from "antd";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <>
      <div className="news">
        <img
          src="https://precog.com/wp-content/uploads/2021/01/News-API-Logo.svg"
          alt=""
          style={{ width: 150, padding: "15px" }}
          className="margin-left: 80px"
        />
        <Menu theme="dark" mode="inline">
          <Menu.Item>
            <NavLink to={"/"}>Tesla News</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={"/apple"}>Apple News</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={"/usbusiness"}>US Business</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={"/techcrunch"}>Tech Crunch</NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink to={"/wallstreetjournal"}>Wall Street Journal</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </>
  );
};
