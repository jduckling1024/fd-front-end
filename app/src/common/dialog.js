import React, { useState } from "react";
import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const ResponsiveDialog = (props) => {
  // eslint-disable-next-line react/prop-types
  const { visible, Page } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState({ visible });

  const close = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={() => {
          close();
        }}
      >
        <Page></Page>
      </Dialog>
    </div>
  );
};

ResponsiveDialog.PropTypes = {
  visible: PropTypes.node.isRequired,
};

export default ResponsiveDialog;
