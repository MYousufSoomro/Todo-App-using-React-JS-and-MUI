import { Button as BTN } from "@mui/material";

export default function Button({
  variant,
  label,
  color,
  sx,
  onClick,
  disabled,
}) {
  return (
    <BTN
      disabled={disabled || false}
      onClick={onClick}
      sx={sx}
      variant={variant || "contained"}
      color={color || "primary"}
    >
      {label || "Submit"}
    </BTN>
  );
}
