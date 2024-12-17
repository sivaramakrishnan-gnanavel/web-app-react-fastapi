import React, { useState, useEffect } from "react";
import BlogPost from "../../components/blog";
import { useLocation } from "react-router-dom";

const Patterns = () => {
  const location = useLocation();
  const [data, setData] = useState({
    title: String(location.pathname).replace("/activity/", ""),
    description: `This is a short summary or description of the blog post. It explains
          the key details or the theme of the post in an engaging manner. The
          explanation may span multiple lines.`,
    recommendedSpeed: "3 Seconds",
    recommendedSets: "10",
    timeGap: "15 Seconds",
    level: "1",
    frameworkLink: "https://www.google.com/",
    yourProgress: [
      { id: 1, title: "Speed", data: "5.2 Sec" },
      { id: 2, title: "Sets", data: "08" },
      { id: 3, title: "TimeGap", data: "10 Sec" },
      { id: 4, title: "Status", data: "Better" },
    ],
  });

  useEffect(() => {
    let newTitle = String(location.pathname).replace("/activity/", "");
    setData((prevData) => ({
      ...prevData,
      title: newTitle === "" ? "pattern-one" : newTitle,
    }));
  }, [location.pathname]);

  return <BlogPost title={data.title} {...data} />;
};

export default Patterns;
