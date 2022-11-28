import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Layout, Button, Modal, Spin, Divider, Row } from "antd";
import { SideBar } from "./SideBar";

const { Column } = Table;
const { Sider, Content, Header, Footer } = Layout;

type resultNewsProps = {
  source: {
    id: string | number | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type teslaNewsProps = {
  api: string;
};

export const TeslaNews = (props: teslaNewsProps) => {
  const [news, setNews] = useState<resultNewsProps[] | null>([]);
  const [filteredNews, setFilteredNews] = useState<resultNewsProps[] | null>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<resultNewsProps | null>({
    source: {
      id: null,
      name: "test1",
    },
    author: "test",
    title: "test",
    description: "test",
    url: "test",
    urlToImage: "test",
    publishedAt: "test",
    content: "test",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(props.api);
        data.articles.map((el: any, index: number) => {
          el.index = index + 1;
          el.publishedAt = formatDate(el.publishedAt);
          return el;
        });
        setFilteredNews(data.articles);
        setNews(data.articles);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [props.api]);
  const filterInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value && news) {
      setFilteredNews(
        news?.filter((el) => {
          return el.title?.toLowerCase().includes(value.toLowerCase());
        })
      );
    } else if (!value && news) {
      setFilteredNews(news);
    }
  };

  const formatDate = (date: string) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  };

  const showModal = (record: any) => {
    // console.log(record);
    setModalData(record);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Layout>
        <Sider
          // breakpoint="lg"
          // collapsedWidth="0"
          // onBreakpoint={(broken) => {
          //   // console.log(broken);
          // }}
          // onCollapse={(collapsed, type) => {
          //   // console.log(collapsed, type);
          // }}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <SideBar />
        </Sider>
        <Layout style={{ marginLeft: 200, minHeight: "100vh" }}>
          <Header style={{ padding: "0", backgroundColor: "#e6f4ff" }}>
            <Divider orientation="left">
              <input
                type="text"
                onChange={filterInput}
                placeholder="search by title"
                name="title"
              />
            </Divider>
          </Header>
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial",
            }}
          >
            {loading ? (
              <Spin />
            ) : filteredNews ? (
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Table dataSource={filteredNews}>
                  <Column title="No" dataIndex="index" key="index" width="5%" />
                  <Column
                    title="Title"
                    dataIndex="title"
                    key="title"
                    width="40%"
                  />
                  <Column
                    title="Author"
                    dataIndex="author"
                    key="author"
                    width="20%"
                  />
                  <Column
                    title="Posted At"
                    dataIndex="publishedAt"
                    key="publishedAt"
                  />
                  <Column
                    title="Action"
                    key="action"
                    render={(record) => {
                      // console.log(record);
                      return (
                        <Button
                          type="primary"
                          onClick={() => showModal(record)}
                        >
                          Read Preview
                        </Button>
                      );
                    }}
                  />
                </Table>
              </Row>
            ) : (
              <h2>No Data</h2>
            )}
            <Modal
              title="Preview and Link"
              visible={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <img
                src={modalData?.urlToImage}
                style={{ height: "170px" }}
                alt="News"
              />
              <span>
                <p>{modalData?.content}</p>
              </span>

              <h1 style={{ fontWeight: "bold" }}>Source:</h1>
              <span>
                <p>{modalData?.url}</p>
              </span>
            </Modal>
          </Content>
          <Footer
            style={{
              textAlign: "center",
              position: "sticky",
              backgroundColor: "#e6f4ff",
              fontWeight: "bold",
            }}
          >
            This app made by Yosia Luther Marpaung using{" "}
            <span>
              <i className="fa-brands fa-react"></i>
            </span>
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};
