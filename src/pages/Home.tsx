import React, { useEffect } from "react";
import Navbar from "../componets/Navbar";
import InfiniteScroll from "react-infinite-scroll-component";
import Sidebar from "../componets/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducers/getHomePageVideos";
import { HomePageVideos } from "../Types";
import Spinner from "../componets/Spinner";
import Card from "../componets/Card";


const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
    console.log(videos);
    
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
    <div style={{ height: "7.5vh" }}>
      <Navbar />
    </div>
    <div className="flex" style={{ height: "92.5vh" }}>
      <Sidebar />
      {videos.length ? (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => dispatch(getHomePageVideos(true))}
          hasMore={videos.length < 500}
          loader={<Spinner />}
          height={650}
        >
          <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
            {videos.map((item: HomePageVideos) => {
              return <Card data={item} key={item.videoId} />;
            })}
          </div>
        </InfiniteScroll>
      ) : (
        <Spinner />
      )}
    </div>
  </div>
  );
};

export default Home;