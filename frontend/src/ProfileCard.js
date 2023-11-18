import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const ProfileCard = ({ first_name, last_name, role, employment_type, imageUrl }) => {
  const cardStyle = {
    backgroundColor: "#6EB38E",
    borderRadius: "16px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  };

  const avatarStyle = {
    width: 188,
    height: 188,
    marginRight: "24px",
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Avatar style={avatarStyle} src={imageUrl} alt={`${first_name} ${last_name}`} />
          <Box>
            <Typography sx={{ fontSize: 25 }}>
              {`${first_name}`}
            </Typography>
            <Typography sx={{ fontSize: 30, fontWeight: 'bold' }}>
              {`${last_name}`}
            </Typography>
            <Typography sx={{ fontSize: 15 }}>
              {`${role} • ${employment_type}`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
