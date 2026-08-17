import { getTopics } from "@/utils/api";

const Topics = async () => {
  const topics = await getTopics();

  return (
    <>
      <h2>Topics</h2>
      <ul>
        {topics.map((topic) => {
          console.log(topic, "<<<<<<<");
          return (
            <li key={topic.slug}>
              <h3>{topic.slug}</h3>
              <p>{topic.description}</p>
              <img
                src={
                  topic.img_url ? topic.img_url : "https://placehold.co/700x500"
                }
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Topics;
