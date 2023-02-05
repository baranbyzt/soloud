import React, { useEffect, useState } from "react";
import PageLayout from "../../components/templates/pageLayout";

import MediaBox from "../../components/organisms/mediaBox";
import Tabs from "../../components/organisms/tabs";
import Row from "../../components/atoms/row";
import Column from "../../components/atoms/column";
import { useStore } from "../../contexts/StoreContext";

const tabsData = [
  {
    id: "pop",
    label: "Pop",
    image: "genre-pop",
  },
  {
    id: "hiphop",
    label: "HipHop",
    image: "genre-hiphop",
  },
  {
    id: "rock",
    label: "Rock",
    image: "genre-rock",
  },
  {
    id: "latin",
    label: "Latin",
    image: "genre-latin",
  },
  {
    id: "dance",
    label: "Dance",
    image: "genre-dance",
  },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);
  const [mediaData, setMediaData] = useState([]);
  const store = useStore();

  useEffect(() => {
    getAllMedia();
  }, []);

  function getAllMedia() {
    fetch(`../../mediaData.json`)
      .then((response) => response.json())
      .then((data) => {
        setMediaData(data);
      });
  }

  return (
    <PageLayout>
      <Row padding="30px 30px 0px 30px">
        <Column xs={24} sm={24} md={24} lg={24}>
          <Tabs
            data={tabsData}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Column>
      </Row>
      <Row padding="0 30px" wrap="true">
        {mediaData
          .filter((item) => item.type === activeTab)
          .map((item, index) => (
            <MediaBox
              key={index}
              data={item}
              id={item.id}
              favorite={store.favorites.includes(item.id)}
              song={item.song}
              artist={item.artist}
            />
          ))}
      </Row>
    </PageLayout>
  );
};

export default Dashboard;
