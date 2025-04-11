import React from 'react';
import { Typography, Paper, Box, Grid, Button } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import ScatterPlotIcon from '@mui/icons-material/ScatterPlot';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import AreaChartIcon from '@mui/icons-material/AreaChart';
import RadarIcon from '@mui/icons-material/Radar';
import WaterfallChartIcon from '@mui/icons-material/WaterfallChart';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  const navigate = useNavigate();

  const chartTypes = [
    { icon: <BarChartIcon sx={{ fontSize: 60 }} />, name: 'Ραβδόγραμμα', description: 'Σύγκριση τιμών μεταξύ κατηγοριών' },
    { icon: <PieChartIcon sx={{ fontSize: 60 }} />, name: 'Διάγραμμα Πίτας', description: 'Εμφάνιση αναλογιών ενός συνόλου' },
    { icon: <ShowChartIcon sx={{ fontSize: 60 }} />, name: 'Γραμμικό Διάγραμμα', description: 'Παρακολούθηση αλλαγών με την πάροδο του χρόνου' },
    { icon: <BubbleChartIcon sx={{ fontSize: 60 }} />, name: 'Διάγραμμα Διασποράς', description: 'Εμφάνιση σχέσεων μεταξύ μεταβλητών' },
    { icon: <TimelineIcon sx={{ fontSize: 60 }} />, name: 'Χρονοσειρά', description: 'Ανάλυση δεδομένων με την πάροδο του χρόνου' },
    { icon: <DonutLargeIcon sx={{ fontSize: 60 }} />, name: 'Δακτύλιος', description: 'Εναλλακτική εμφάνιση αναλογιών' },
    { icon: <StackedBarChartIcon sx={{ fontSize: 60 }} />, name: 'Σωρευτικό Ραβδόγραμμα', description: 'Σύγκριση πολλαπλών κατηγοριών' },
    { icon: <AreaChartIcon sx={{ fontSize: 60 }} />, name: 'Διάγραμμα Περιοχής', description: 'Εμφάνιση συνολικών τιμών με την πάροδο του χρόνου' },
    { icon: <RadarIcon sx={{ fontSize: 60 }} />, name: 'Ραντάρ', description: 'Σύγκριση πολλαπλών μεταβλητών' },
    { icon: <WaterfallChartIcon sx={{ fontSize: 60 }} />, name: 'Καταρράκτης', description: 'Ανάλυση αλλαγών σε τιμές' },
    { icon: <CandlestickChartIcon sx={{ fontSize: 60 }} />, name: 'Κεριά', description: 'Ανάλυση χρηματιστηριακών δεδομένων' },
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