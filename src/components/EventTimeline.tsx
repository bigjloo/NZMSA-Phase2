import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Box from "@material-ui/core/Box";

import { useAppSelector } from "../hooks/storeHooks";

const EventTimeline = () => {
  const events = useAppSelector((store) => store.events.events);

  return (
    <Box maxWidth="560">
      <Timeline align="alternate">
        {events.map((event) => (
          <TimelineItem>
            <TimelineOppositeContent>{event.name}</TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{event.caption}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default EventTimeline;
