/* eslint-disable camelcase */
// some API data identifiers are in camelcase
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// material
import { Box, Card, Typography, Stack, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fCurrency } from '../../../utils/formatNumber';
// components
import Label from '../../../components/Label';

// ----------------------------------------------------------------------

const ProjectImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default function ProjectCard({ project }) {
  const {
    id,
    postal,
    address,
    profile,
    created_at,
    user,
    buildingStatus,
    repairStatus,
    last_inspected,
    owner,
    buildingType,
    constructionYear,
    structureMaterial,
    professionalEngineer,
    facade_plan,
    heightAdjustment,
  } = project;

  return (
    <Card>
      <CardActionArea component={Link} to={`/projects/${id}`}>
        <Box sx={{ pt: '100%', position: 'relative' }}>
          {buildingStatus && (
            <Label
              variant="filled"
              color={(buildingStatus === 'New' && 'error') || (buildingStatus === 'Ongoing' && 'info') || 'success'}
              sx={{
                zIndex: 9,
                top: 16,
                right: 16,
                position: 'absolute',
                textTransform: 'uppercase',
              }}
            >
              {buildingStatus}
            </Label>
          )}
          <ProjectImgStyle alt={address} src={profile} />
        </Box>

        <Stack spacing={2} sx={{ p: 3 }}>
          <Typography variant="subtitle1">{address}</Typography>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle2" noWrap title={last_inspected}>
              {last_inspected}
            </Typography>
            <Typography variant="subtitle2">{postal}</Typography>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
