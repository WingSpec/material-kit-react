import PropTypes from 'prop-types';
// material
import {
  Radio,
  Stack,
  Button,
  Drawer,
  Divider,
  IconButton,
  Typography,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';

// ----------------------------------------------------------------------

const FILTER_CATEGORY_OPTIONS = ['All', 'New', 'Ongoing', 'Completed'];

// ----------------------------------------------------------------------

FilterSidebar.propTypes = {
  isOpenFilter: PropTypes.bool,
  value: PropTypes.string,
  onOpenFilter: PropTypes.func,
  onCloseFilter: PropTypes.func,
  onChangeFilter: PropTypes.func,
};

export default function FilterSidebar({ isOpenFilter, value, onOpenFilter, onCloseFilter, onChangeFilter }) {
  return (
    <>
      <Button disableRipple color="inherit" endIcon={<Iconify icon="ic:round-filter-list" />} onClick={onOpenFilter}>
        Filters&nbsp;
      </Button>

      <Drawer
        anchor="right"
        open={isOpenFilter}
        onClose={onCloseFilter}
        PaperProps={{
          sx: { width: 280, border: 'none', overflow: 'hidden' },
        }}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 1, py: 2 }}>
          <Typography variant="subtitle1" sx={{ ml: 1 }}>
            Filters
          </Typography>
          <IconButton onClick={onCloseFilter}>
            <Iconify icon="eva:close-fill" width={20} height={20} />
          </IconButton>
        </Stack>

        <Divider />

        <Scrollbar>
          <Stack spacing={3} sx={{ p: 3 }}>
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Category
              </Typography>
              <RadioGroup value={value} onChange={onChangeFilter}>
                {FILTER_CATEGORY_OPTIONS.map((item) => (
                  <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                ))}
              </RadioGroup>
            </div>
          </Stack>
        </Scrollbar>
      </Drawer>
    </>
  );
}
