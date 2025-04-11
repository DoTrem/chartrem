import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

function DataConfig() {
  const [data, setData] = useState([]);
  const [newData, setNewData] = useState({ label: '', value: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleAddData = () => {
    if (newData.label && newData.value) {
      setData([...data, newData]);
      setNewData({ label: '', value: '' });
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Data Configuration
      </Typography>
      <Paper sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <TextField
            label="Label"
            name="label"
            value={newData.label}
            onChange={handleInputChange}
          />
          <TextField
            label="Value"
            name="value"
            type="number"
            value={newData.value}
            onChange={handleInputChange}
          />
          <Button variant="contained" onClick={handleAddData}>
            Add Data
          </Button>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.label}</TableCell>
                  <TableCell>{item.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default DataConfig; 