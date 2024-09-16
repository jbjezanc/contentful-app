import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "sxq1g1zjj4f8",
  environment: "master",
  accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
});

// custom hook
export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "projects",
      });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;

        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  // when the component mounts - []
  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
