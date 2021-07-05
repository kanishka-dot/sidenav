import React from "react";
import { Collapse } from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import { ListItemText } from "@material-ui/core";
import List from "@material-ui/core/List";
import SidebarListItem from "./SideNavListItem";

const useStyles = makeStyles(() => ({
  content: {
    paddingLeft: 15,
  },
}));

function SideNavItemGroup(props) {
  const classes = useStyles();
  let { title, items, icon } = props;
  const [open, setOpen] = React.useState(false);

  const handleInput = () => {
    setOpen(!open);
  };

  let itemGroup = items.map((item, index) => {
    if (item.items) {
      return (
        <SideNavItemGroup
          key={index}
          title={item.title}
          items={item.items}
          icon={item.icon}
        />
      );
    }
    return (
      <SidebarListItem
        key={index}
        text={item.title}
        icon={item.icon}
        route={item.path}
      />
    );
  });

  return (
    <List>
      <ListItem button onClick={handleInput}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText
          primary={title}
          style={{ textDecoration: "none", color: "#FFFFFF" }}
        />

        {open ? (
          <ExpandLess style={{ color: "#FFFFFF" }} />
        ) : (
          <ExpandMore style={{ color: "#FFFFFF" }} />
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List className={classes.content}>{itemGroup}</List>
      </Collapse>
    </List>
  );
}

export default SideNavItemGroup;
