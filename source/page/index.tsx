import {
  Button,
  Carousel,
  CarouselItem,
  Container,
  FAIcon,
  Image,
  Table,
} from "boot-cell";

import { MainNavigator } from "../component/MainNavigator";
import { StudentCard } from "../component/StudentCard";
import { TeacherCard } from "../component/TeacherCard";
import classes from "../data/classes";
import students from "../data/students";
import teachers from "../data/teachers";

const events = [
  {
    image: new URL("../img/events/官网-招募.jpg", import.meta.url) + "",
    link: "https://na6pe3xlrb1jajy5.mikecrm.com/q19wZQs",
  },
  {
    image: new URL("../img/events/官网banner创始人.jpg", import.meta.url) + "",
    link: "https://www.baidu.com/s?wd=李许珊珊",
  },
  {
    image: new URL("../img/events/官网集锦.jpeg", import.meta.url) + "",
    link: "https://mp.weixin.qq.com/s/xfqLOw6o8h6slB8bXV2T2w",
  },
];

export const IndexPage = () => (
  <>
    <MainNavigator />

    <header id="intro" className="view">
      <div className="mask rgba-black-strong">
        <Container
          fluid
          className="d-flex align-items-center justify-content-center h-100"
        >
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-10">
              <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">
                <span
                  className="font-weight-normal"
                  style={{ fontSize: "xx-large" }}
                >
                  初创女性
                </span>
                <br />
                训练营
              </h2>

              <hr className="hr-light" />

              <h4 className="white-text my-4 text-end">
                通过线下为期2个月的短期训练营，与后期陪伴式的创业圈层组织、
                个人咨询服务的方式，提高女性创业者的综合能力。
              </h4>
              <a href="#contact">
                <Button variant="outline-white">
                  了解更多
                  <FAIcon group="solid" name="award" className="ms-2" />
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </header>

    <main className="mt-5">
      <Container>
        <section id="courses" className="text-center">
          <Table
            responsive
            striped
            bordered
            className="table-fixed text-center"
          >
            <thead className="warning-color-dark text-white">
              <tr>
                <th scope="col">时间</th>
                <th scope="col">导师</th>
                <th scope="col">课题</th>
                <th scope="col">类型</th>
                <th scope="col">地址</th>
              </tr>
            </thead>

            <tbody>
              {classes.map(({ title, type, teacher, time, address }) => (
                <tr key={title}>
                  <td>{time}</td>
                  {teacher && (
                    <td>
                      <ul className="list-unstyled">
                        <li>{teacher.name}</li>
                        <li>{teacher.title}</li>
                      </ul>
                    </td>
                  )}
                  <td colSpan={teacher ? 1 : 2}>{title}</td>
                  <td>{type}</td>
                  <td>{address}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>

        <section id="teachers" className="text-center">
          <h2 className="mb-5 font-weight-bold">金牌导师阵容</h2>

          <div className="row d-flex justify-content-center mb-4">
            <p className="col-md-8 grey-text">
              3E女子商学院的导师均来自本土各行业拥有丰富创投经验的精英，平均相关从业行业在10年以上。
              他们在3E女子商学院的人、财、务系统课程体系设置之下，以输出带动输入的理念，将各自擅长领域的思维模式、
              实战经验指导创业女性边学边练，更快更有效的帮助大家吸收和成长，促进项目的发展和盈利。
            </p>
          </div>

          <div className="row">
            <Carousel className="col-md-12" interval={3000}>
              {teachers.map(({ teachers }) => (
                <CarouselItem>
                  <div className="d-flex gap-3">
                    {teachers.map((teacher) => (
                      <TeacherCard {...teacher} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        </section>

        <hr className="my-5" />

        <section id="events" className="text-center">
          <h2 className="mb-5 font-weight-bold ">精彩活动</h2>

          <video
            className="video-fluid z-depth-1 object-fit-cover"
            loop
            controls
            autoplay
            poster={new URL("../img/poster.jpeg", import.meta.url) + ""}
          >
            <source
              src={
                new URL("../../video/12.16至勇新生.ogg", import.meta.url) + ""
              }
              type="video/ogg"
            />
          </video>
        </section>

        <hr className="my-5" />

        <section id="students">
          <h2 className="mb-5 font-weight-bold text-center">明星学员</h2>

          <ul className="list-unstyled row g-4">
            {students.map((student) => (
              <li key={student.name} className="col-lg-4 col-md-12">
                <StudentCard {...student} />
              </li>
            ))}
          </ul>
        </section>

        <hr className="my-5" />

        <section id="gallery">
          <h2 className="mb-5 font-weight-bold text-center">课程介绍</h2>

          <div className="row">
            <div className="col-md-6 mb-4">
              <Carousel>
                {events.map(({ link, image }) => (
                  <CarouselItem key={link}>
                    <a href={link}>
                      <Image className="d-block w-100" src={image} />
                    </a>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>

            <div className="col-md-6">
              <a href="" className="teal-text">
                <h6 className="pb-1">
                  <FAIcon group="solid" name="school" />
                  初创女性训练营
                </h6>
              </a>
              <h4 className="mb-3 font-weight-bold">你将获得</h4>
              <p>
                基于人、财、务，从0到1系统的创业项目梳理
                <br />
                提升对个人和创业认知，全局观创业
                <br />
                少走弯路，降低经验不足带来的时间和资金成本
                <br />
                确定个人创业优势，提升个人综合实力
                <br />
                清晰的品牌定位和推广思路
                <br />
                建立商业闭环，更快实现盈利
                <br />
                个人魅力和创业项目，在1000人大会上的展示机会
                <br />
                志同道合的伙伴，让成长路上不孤单
              </p>
            </div>
          </div>
        </section>

        <hr className="my-5" />

        <section id="contact">
          <h2 className="mb-5 font-weight-bold text-center">联系我们</h2>

          <div className="row">
            <div className="col-lg-5 col-md-12 text-center">
              <h4>咨询小助手获得了解更多</h4>
              <Image
                src={new URL("../img/as_qrcode.jpeg", import.meta.url) + ""}
                fluid
                className="h-75"
              />
            </div>

            <div className="col-lg-7 col-md-12">
              <iframe
                className="z-depth-1-half w-100 mb-5"
                style={{ height: "400px" }}
                src="https://uri.amap.com/marker?src=3e-wbc&callnative=1&position=104.062617, 30.539173&name=3E女子商学院"
              />
            </div>
          </div>

          <div className="row text-center">
            <p className="col-lg-4 col-md-12 mb-3">
              <FAIcon group="solid" name="map" className="me-2 grey-text" />
              成都 四川 中国
            </p>

            <p className="col-lg-4 col-md-6 mb-3">
              <FAIcon
                group="solid"
                name="building"
                className="me-2 grey-text"
              />
              周一 - 周五, 10:00-19:00
            </p>

            <p className="col-lg-4 col-md-6 mb-3">
              <a href="tel:+8617308077367">
                <FAIcon group="solid" name="phone" className="me-2 grey-text" />
                +86 173 0807 7367
              </a>
            </p>
          </div>

          <div className="row text-center">
            <div className="col-lg-4 col-md-6 mb-3">
              <a href="http://www.beian.miit.gov.cn">蜀ICP备19022231号</a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  </>
);
