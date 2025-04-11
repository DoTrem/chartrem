import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Grid,
} from '@mui/material';

function ChartSettings() {
  const [settings, setSettings] = useState({
    chartType: 'bar',
    title: '',
    xAxisLabel: '',
    yAxisLabel: '',
    color: '#1976d2',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Chart Settings
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Chart Type</InputLabel>
              <Select
                name="chartType"
                value={settings.chartType}
                label="Chart Type"
                onChange={handleChange}
              >
                <MenuItem value="bar">Bar Chart</MenuItem>
                <MenuItem value="pie">Pie Chart</MenuItem>
                <MenuItem value="line">Line Chart</MenuItem>
                <MenuItem value="scatter">Scatter Plot</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Chart Title"
              name="title"
              value={settings.title}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="X-Axis Label"
              name="xAxisLabel"
              value={settings.xAxisLabel}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Y-Axis Label"
              name="yAxisLabel"
              value={settings.yAxisLabel}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Chart Color"
              name="color"
              type="color"
              value={settings.color}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Apply Settings
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default ChartSettings; 