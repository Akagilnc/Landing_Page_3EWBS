import { Card, CardBody, CardTitle, Image } from "boot-cell";

import teachers from "../data/teachers";

export type Teacher = (typeof teachers)[0]["teachers"][0];

export const TeacherCard = ({ name, avatar, title }: Teacher) => (
  <Card className="card-cascade mb-1">
    <Image fluid src={avatar} alt={name} />

    {name && <CardTitle className="my-4 font-weight-bold">{name}</CardTitle>}

    <CardBody>
      {title && (
        <ul className="text-start">
          {title.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      )}
    </CardBody>
  </Card>
);
