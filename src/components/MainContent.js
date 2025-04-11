import React from 'react';
import { Typography, Paper, Box, Grid, Button } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const navigate = useNavigate();

  const chartTypes = [
    { icon: <BarChartIcon sx={{ fontSize: 60 }} />, name: 'Bar Chart', description: 'Compare values across categories' },
    { icon: <PieChartIcon sx={{ fontSize: 60 }} />, name: 'Pie Chart', description: 'Show proportions of a whole' },
    { icon: <ShowChartIcon sx={{ fontSize: 60 }} />, name: 'Line Chart', description: 'Track changes over time' },
    { icon: <BubbleChartIcon sx={{ fontSize: 60 }} />, name: 'Scatter Plot', description: 'Show relationships between variables' },
  ];

  const handleChartSelect = () => {
    navigate('/data-config');
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom align="center" sx={{ mb: 4 }}>
        Επιλέξτε Τύπο Γραφήματος
      </Typography>
      <Grid container spacing={3}>
        {chartTypes.map((chart, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
              onClick={handleChartSelect}
            >
              <Box sx={{ mb: 2, color: 'primary.main' }}>{chart.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {chart.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {chart.description}
              </Typography>
              <Button variant="contained" color="primary" onClick={handleChartSelect}>
                Επιλογή
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default MainContent; 