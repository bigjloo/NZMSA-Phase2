import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { useAppSelector } from "../hooks/storeHooks";

import { EventListProps } from "../common/types_interfaces";

const EventList = (props: EventListProps) => {
  const events = useAppSelector((state) => state.events.events);

  return (
    <List>
      {events.map((event, index) => (
        <>
          <ListItem key={index}>
            <ListItemText primary={event.name} secondary={event.caption} />
            <button onClick={props.onRemoveEvent}>x</button>
          </ListItem>
          <Divider variant="middle" component="li" />
        </>
      ))}
    </List>
  );
};

export default EventList;
