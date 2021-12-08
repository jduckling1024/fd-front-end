import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const ResponsiveDialog = (props) => {
  const { visible, Page, point } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down(point));
  const [open, setOpen] = useState(visible);

  useEffect(() => {
    setOpen(visible);
  }, [visible]);

  const close = () => {
    setOpen(false);
  };

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={close}>
      {Page}
    </Dialog>
  );
};

ResponsiveDialog.PropTypes = {
  visible: PropTypes.node.isRequired,
};

export default ResponsiveDialog;
