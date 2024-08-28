import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu, toggleMenu } from "../utils/appSlice";
import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  // const params=useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const vid = searchParams.get("v");

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
      <div className="px-5">
        <iframe
          width="1100"
          height="500"
          src={"https://www.youtube.com/embed/"+vid}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{paddingTop:'5px', borderRadius: '10px',boxShadow: '0px 4px 10px rgba(100, 0, 0, 0.5)' }}
        ></iframe>
        
        <CommentsContainer/>
      </div> 
  );
};

export default WatchPage;
