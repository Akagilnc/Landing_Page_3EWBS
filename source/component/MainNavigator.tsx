import {
  Collapse,
  Container,
  FAIcon,
  Nav,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "boot-cell";

const menu = [
  { title: "课程简介", href: "#intro" },
  { title: "导师", href: "#teachers" },
  { title: "精彩活动", href: "#events" },
  { title: "明星学员", href: "#students" },
  { title: "课程介绍", href: "#gallery" },
  { title: "关于我们 & 报名咨询", href: "#contact" },
];

export const MainNavigator = () => (
  <Navbar expand="lg" fixed="top" className="scrolling-navbar">
    <Container>
      <NavbarBrand href=".">3E女子商学院</NavbarBrand>

      <NavbarToggle />

      <Collapse className="navbar-collapse" id="Nav">
        <Nav className="navbar-nav me-auto">
          {menu.map(({ title, href }) => (
            <NavLink key={title} href={href}>
              {title}
            </NavLink>
          ))}
        </Nav>

        <Nav className="navbar-nav nav-flex-icons">
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4MzY0NDQxMg==&scene=126&bizpsid=0#wechat_redirect"
          >
            <FAIcon group="brands" name="weixin" />
          </NavLink>
          <NavLink
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            href="https://www.weibo.com/u/6055886285?refer_flag=1001030103_"
          >
            <FAIcon group="brands" name="weibo" />
          </NavLink>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
);
