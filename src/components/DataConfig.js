import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ChartDisplay from './ChartDisplay';

function DataConfig() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [xValue, setXValue] = useState('');
  const [yValue, setYValue] = useState('');
  const [chartType, setChartType] = useState('bar');
  const [chartTitle, setChartTitle] = useState('');
  const [xAxisLabel, setXAxisLabel] = useState('');
  const [yAxisLabel, setYAxisLabel] = useState('');
  const [chartColor, setChartColor] = useState('#1976d2');
  const [showChart, setShowChart] = useState(false);

  const handleAddData = () => {
    if (xValue && yValue) {
      const newData = [...data, { x: xValue, y: parseFloat(yValue) }];
      setData(newData);
      setXValue('');
      setYValue('');
    }
  };

  const handleRemoveData = (index) => {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  };

  const handleGenerateChart = () => {
    if (data.length > 0) {
      setShowChart(true);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Ρύθμιση Δεδομένων
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Ρυθμίσεις Γραφήματος
            </Typography>
            
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Τύπος Γραφήματος</InputLabel>
              <Select
                value={chartType}
                label="Τύπος Γραφήματος"
                onChange={(e) => setChartType(e.target.value)}
              >
                <MenuItem value="bar">Ραβδόγραμμα</MenuItem>
                <MenuItem value="pie">Διάγραμμα Πίτας</MenuItem>
                <MenuItem value="line">Γραμμικό Διάγραμμα</MenuItem>
                <MenuItem value="scatter">Διάγραμμα Διασποράς</MenuItem>
                <MenuItem value="area">Διάγραμμα Περιοχής</MenuItem>
                <MenuItem value="bubble">Διάγραμμα Φυσαλίδων</MenuItem>
                <MenuItem value="radar">Ραντάρ</MenuItem>
                <MenuItem value="doughnut">Δακτύλιος</MenuItem>
                <MenuItem value="polarArea">Πολικό Διάγραμμα</MenuItem>
                <MenuItem value="funnel">Διάγραμμα Χωνιού</MenuItem>
                <MenuItem value="heatmap">Χάρτης Θερμότητας</MenuItem>
                <MenuItem value="treemap">Διάγραμμα Δέντρου</MenuItem>
                <MenuItem value="stackedBar">Σωρευτικό Ραβδόγραμμα</MenuItem>
                <MenuItem value="timeline">Χρονοσειρά</MenuItem>
                <MenuItem value="waterfall">Καταρράκτης</MenuItem>
                <MenuItem value="candlestick">Κεριά</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Τίτλος Γραφήματος"
              value={chartTitle}
              onChange={(e) => setChartTitle(e.target.value)}
              sx={{ mb: 2 }}
            />

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Ετικέτα Άξονα Χ</InputLabel>
              <Select
                value={xAxisLabel}
                label="Ετικέτα Άξονα Χ"
                onChange={(e) => setXAxisLabel(e.target.value)}
              >
                <MenuItem value="Ημερομηνία">Ημερομηνία</MenuItem>
                <MenuItem value="Έτος">Έτος</MenuItem>
                <MenuItem value="Ηλικία">Ηλικία</MenuItem>
                <MenuItem value="Θερμοκρασία (C)">Θερμοκρασία (C)</MenuItem>
                <MenuItem value="Θερμοκρασία (F)">Θερμοκρασία (F)</MenuItem>
                <MenuItem value="Θερμοκρασία (K)">Θερμοκρασία (K)</MenuItem>
                <MenuItem value="Ευρώ (€)">Ευρώ (€)</MenuItem>
                <MenuItem value="Δολάριο ($)">Δολάριο ($)</MenuItem>
                <MenuItem value="Ποσότητα">Ποσότητα</MenuItem>
                <MenuItem value="Ποσοστό (%)">Ποσοστό (%)</MenuItem>
                <MenuItem value="Μέτρα (m)">Μέτρα (m)</MenuItem>
                <MenuItem value="Εκατοστά (cm)">Εκατοστά (cm)</MenuItem>
                <MenuItem value="Χρόνος (δευτερόλεπτα)">Χρόνος (δευτερόλεπτα)</MenuItem>
                <MenuItem value="Χρόνος (λεπτά)">Χρόνος (λεπτά)</MenuItem>
                <MenuItem value="Χρόνος (ώρες)">Χρόνος (ώρες)</MenuItem>
                <MenuItem value="Βάρος (kg)">Βάρος (kg)</MenuItem>
                <MenuItem value="Βάρος (g)">Βάρος (g)</MenuItem>
                <MenuItem value="Όγκος (L)">Όγκος (L)</MenuItem>
                <MenuItem value="Όγκος (ml)">Όγκος (ml)</MenuItem>
                <MenuItem value="Ταχύτητα (km/h)">Ταχύτητα (km/h)</MenuItem>
                <MenuItem value="Ταχύτητα (m/s)">Ταχύτητα (m/s)</MenuItem>
                <MenuItem value="Άλλη τιμή">Άλλη τιμή</MenuItem>
              </Select>
            </FormControl>

            {xAxisLabel === 'Άλλη τιμή' && (
              <TextField
                fullWidth
                label="Εισαγωγή Ετικέτας Άξονα Χ"
                value={xAxisLabel}
                onChange={(e) => setXAxisLabel(e.target.value)}
                sx={{ mb: 2 }}
              />
            )}

            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel>Ετικέτα Άξονα Υ</InputLabel>
              <Select
                value={yAxisLabel}
                label="Ετικέτα Άξονα Υ"
                onChange={(e) => setYAxisLabel(e.target.value)}
              >
                <MenuItem value="Ημερομηνία">Ημερομηνία</MenuItem>
                <MenuItem value="Έτος">Έτος</MenuItem>
                <MenuItem value="Ηλικία">Ηλικία</MenuItem>
                <MenuItem value="Θερμοκρασία (C)">Θερμοκρασία (C)</MenuItem>
                <MenuItem value="Θερμοκρασία (F)">Θερμοκρασία (F)</MenuItem>
                <MenuItem value="Θερμοκρασία (K)">Θερμοκρασία (K)</MenuItem>
                <MenuItem value="Ευρώ (€)">Ευρώ (€)</MenuItem>
                <MenuItem value="Δολάριο ($)">Δολάριο ($)</MenuItem>
                <MenuItem value="Ποσότητα">Ποσότητα</MenuItem>
                <MenuItem value="Ποσοστό (%)">Ποσοστό (%)</MenuItem>
                <MenuItem value="Μέτρα (m)">Μέτρα (m)</MenuItem>
                <MenuItem value="Εκατοστά (cm)">Εκατοστά (cm)</MenuItem>
                <MenuItem value="Χρόνος (δευτερόλεπτα)">Χρόνος (δευτερόλεπτα)</MenuItem>
                <MenuItem value="Χρόνος (λεπτά)">Χρόνος (λεπτά)</MenuItem>
                <MenuItem value="Χρόνος (ώρες)">Χρόνος (ώρες)</MenuItem>
                <MenuItem value="Βάρος (kg)">Βάρος (kg)</MenuItem>
                <MenuItem value="Βάρος (g)">Βάρος (g)</MenuItem>
                <MenuItem value="Όγκος (L)">Όγκος (L)</MenuItem>
                <MenuItem value="Όγκος (ml)">Όγκος (ml)</MenuItem>
                <MenuItem value="Ταχύτητα (km/h)">Ταχύτητα (km/h)</MenuItem>
                <MenuItem value="Ταχύτητα (m/s)">Ταχύτητα (m/s)</MenuItem>
                <MenuItem value="Άλλη τιμή">Άλλη τιμή</MenuItem>
              </Select>
            </FormControl>

            {yAxisLabel === 'Άλλη τιμή' && (
              <TextField
                fullWidth
                label="Εισαγωγή Ετικέτας Άξονα Υ"
                value={yAxisLabel}
                onChange={(e) => setYAxisLabel(e.target.value)}
                sx={{ mb: 2 }}
              />
            )}

            <TextField
              fullWidth
              label="Χρώμα Γραφήματος"
              type="color"
              value={chartColor}
              onChange={(e) => setChartColor(e.target.value)}
              sx={{ mb: 2 }}
            />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Εισαγωγή Δεδομένων
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                label={`${xAxisLabel || 'Τιμή X'}`}
                value={xValue}
                onChange={(e) => setXValue(e.target.value)}
                type={xAxisLabel === 'Ημερομηνία' ? 'date' : 'number'}
                inputProps={{ 
                  step: xAxisLabel === 'Ημερομηνία' ? undefined : 1,
                  min: xAxisLabel === 'Ημερομηνία' ? undefined : 0
                }}
                fullWidth
              />
              <TextField
                label={`${yAxisLabel || 'Τιμή Y'}`}
                value={yValue}
                onChange={(e) => setYValue(e.target.value)}
                type="number"
                inputProps={{ step: 1, min: 0 }}
                fullWidth
              />
              <Button variant="contained" onClick={handleAddData}>
                Προσθήκη Δεδομένων
              </Button>
            </Box>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{xAxisLabel || "Άξονας Χ"}</TableCell>
                    <TableCell>{yAxisLabel || "Άξονας Υ"}</TableCell>
                    <TableCell>Ενέργειες</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.x}</TableCell>
                      <TableCell>{item.y}</TableCell>
                      <TableCell>
                        <Button
                          color="error"
                          onClick={() => handleRemoveData(index)}
                        >
                          Διαγραφή
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>

      {showChart && (
        <ChartDisplay
          data={data}
          chartType={chartType}
          chartTitle={chartTitle}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          chartColor={chartColor}
        />
      )}

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <Button variant="outlined" onClick={() => navigate('/')}>
          Επιστροφή
        </Button>
        <Button 
          variant="contained" 
          onClick={handleGenerateChart}
          disabled={data.length === 0}
        >
          Δημιουργία Γραφήματος
        </Button>
      </Box>
    </Box>
  );
}

export default DataConfig; 