import EventItem from "@/components/EventItem";
import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function EventsPage({ events }) {
  // console.log(events.attributes.image);
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events?populate=*`);
  const events1 = await res.json();

  const events = events1.data;
  // console.log(events[1].attributes.image.data.attributes.formats.medium.url);

  return {
    props: { events },
    revalidate: 1,
  };
}
