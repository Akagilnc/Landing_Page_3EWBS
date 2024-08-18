import { Card, CardBody, CardTitle, FAIcon, Image } from "boot-cell";

import students from "../data/students";

export type Student = (typeof students)[0];

export const StudentCard = ({ name, avatar, title, desc }: Student) => (
  <Card className="card-cascade" style={{ minWidth: "30%" }}>
    <div className="view overlay z-depth-1-half">
      <Image fluid src={avatar} alt={name} />

      <div className="mask rgba-black-strong" />
    </div>
    <CardBody>
      <CardTitle className="my-3 font-weight-bold d-flex justify-content-between">
        {name}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4MzY0NDQxMg==&scene=126&bizpsid=0#wechat_redirect"
        >
          <FAIcon group="brands" name="weixin" />
        </a>
      </CardTitle>
      <p className="grey-text">{title}</p>
      <p className="grey-text">{desc}</p>
    </CardBody>
  </Card>
);
