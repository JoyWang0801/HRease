import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const ProfileCard = ({ first_name, last_name, role, employment_type, imageUrl }) => {
  const cardStyle = {
    backgroundColor: "#6EB38E",
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  };

  const avatarStyle = {
    width: 64,
    height: 64,
    marginRight: "16px",
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Avatar style={avatarStyle} src={imageUrl} alt={`${first_name} ${last_name}`} />
          <Box>
            <Typography variant="h6" color="textPrimary">
              {`${first_name}`}
            </Typography>
            <Typography variant="h4" color="textPrimary">
              {`${last_name}`}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {`${role} • ${employment_type}`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
