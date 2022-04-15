import { Button, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { Fragment, useState } from 'react';
import IMaterialModal from './IMaterialModal';
import CloseIcon from '@mui/icons-material/Close';
import { buttonStyle, styleModal } from './MaterialModal.constants';

const MaterialModal = ({
  label,
  content,
  propsButton = { variant: 'contained' },
  style = {},
  propsCloseButton = { color: 'primary' },
  closeButton = false
}: IMaterialModal) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Button {...propsButton} onClick={handleOpen}>
        {label}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...styleModal, ...style }}>
          {closeButton ? (
            <button style={{ ...buttonStyle }} onClick={handleClose}>
              <CloseIcon {...propsCloseButton} />
            </button>
          ) : (
            ''
          )}
          {content}
        </Box>
      </Modal>
    </Fragment>
  );
};

export default MaterialModal;
