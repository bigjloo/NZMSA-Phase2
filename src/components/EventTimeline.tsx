import { useAppSelector } from "../hooks/storeHooks";

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";

const EventTimeline = () => {
  const events = useAppSelector((store) => store.events.events);

  return (
    <Timeline align="alternate">
      {events.map((event) => (
        <TimelineItem>
          <TimelineOppositeContent>{event.name}</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{event.description}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default EventTimeline;
