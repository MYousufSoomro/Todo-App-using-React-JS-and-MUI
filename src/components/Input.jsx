import { TextField } from "@mui/material";

export default function Input({ value, onChange }) {
  return (
    <TextField
      fullWidth
      value={value}
      onChange={onChange}
      variant="standard"
      label="What's on your mind?"
    />
  );
}
