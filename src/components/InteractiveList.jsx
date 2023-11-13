import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

export default function InteractiveList({
  text,
  secondaryText,
  onClickEdit,
  onClickDelete,
}) {
  return (
    <List>
      <ListItem
        sx={{ boxShadow: "0 0px 10px #e0e0e0" }}
        secondaryAction={
          <>
            <IconButton
              edge="end"
              style={{ marginRight: "2px" }}
              aria-label="edit"
              onClick={onClickEdit}
            >
              <EditNoteIcon color="primary" />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={onClickDelete}>
              <DeleteIcon color="error" />
            </IconButton>
          </>
        }
      >
        <ListItemText primary={text} secondary={secondaryText || ""} />
      </ListItem>
    </List>
  );
}
