import {
  Create,
  FiberManualRecord,
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header__info">
          <h2>Group Name</h2>
          <h3>
            <FiberManualRecord />
            Username
          </h3>
        </div>
        <Create />
      </div>

      <SidebarOption Icon={InsertComment} title="Title" />
      <SidebarOption Icon={Inbox} title="Inbox" />
      <SidebarOption Icon={Drafts} title="Drafts" />
      <SidebarOption Icon={BookmarkBorder} title="BookmarkBorder" />
      <SidebarOption Icon={PeopleAlt} title="PeopleAlt" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="FileCopy" />
      <SidebarOption Icon={ExpandLess} title="ExpandLess" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="ExpandMore" />
      <hr />
      <SidebarOption Icon={Add} title="Add" />
    </div>
  );
}

export default Sidebar;
