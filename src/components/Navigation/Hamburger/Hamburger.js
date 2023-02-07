import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import "./Hamburger.css";

function Hamburger() {
  const items = [
    {
      label: (
        <Link to="/">
          Home
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="/projects">
          Projects
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link to="/skills">
          Skills
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link to="/contact">
          Contact
        </Link>
      ),
      key: "2",
    },
  ];

  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className="bars">
          
          <GiHamburgerMenu />
        </Space>
      </a>
    </Dropdown>
  );
}

export default Hamburger;
