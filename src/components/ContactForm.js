import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function ContactForm({ setIsOpen }) {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "", // New state for the project type
  });

  // State to handle form submission result
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.message ||
      !formData.projectType
    ) {
      setSnackbarMessage("All fields are required!");
      setOpenSnackbar(true);
      return;
    }

    // Process the form submission (send data to server, etc.)
    setSnackbarMessage("Your message has been sent successfully!");
    setOpenSnackbar(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);

    // Clear form data
    setFormData({ name: "", email: "", message: "", projectType: "" });
  };

  // Handle Close button
  const handleClose = () => {
    setFormData({ name: "", email: "", message: "", projectType: "" });
    setIsOpen(false); // Reset form data
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "0 auto", padding: 3, color: "white" }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Name Input */}
          <Grid item xs={12}>
            <TextField
              required
              label="Full Name"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              sx={{
                color: "white",
              }}
              InputLabelProps={{ style: { color: "white" } }} // White label color
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                      color: "white", // White border color
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // White border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // White border when focused
                    },
                  },
                },
              }} // Apply border color change
            />
          </Grid>

          {/* Email Input */}
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              variant="outlined"
              fullWidth
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              type="email"
              InputLabelProps={{ sx: { color: "white" } }} // White label color
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // White border color
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // White border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // White border when focused
                    },
                  },
                },
              }} // Apply border color change
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth required>
              <InputLabel sx={{ color: "white" }}>Project Type</InputLabel>
              <Select
                label="Project Type"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // White border color
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // White border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // White border when focused
                    },
                  },
                  color: "white", // White text color for selected value
                }}
              >
                <MenuItem value="UI/UX Design">UI/UX Design</MenuItem>
                <MenuItem value="Development">Development</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* Message Input */}
          <Grid item xs={12}>
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              multiline
              rows={4}
              InputLabelProps={{ style: { color: "white" } }} // White label color
              InputProps={{
                sx: {
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white", // White border color
                    },
                    "&:hover fieldset": {
                      borderColor: "white", // White border on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "white", // White border when focused
                    },
                  },
                },
              }} // Apply border color change
            />
          </Grid>

          {/* Project Type Dropdown */}
        

          {/* Submit and Close Buttons */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {/* Close Button */}
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  onClick={handleClose}
                  sx={{
                    borderColor: "white",
                    color: "white",
                    "&:hover": {
                      borderColor: "#f0f0f0", // Slightly lighter border color on hover
                    },
                  }}
                >
                  Close
                </Button>
              </Grid>

              {/* Send Button */}
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  sx={{
                    backgroundColor: "white",
                    color: "black", // Button text color black to ensure visibility on white background
                    "&:hover": {
                      backgroundColor: "#f0f0f0", // Slightly darker color on hover
                    },
                  }}
                >
                  Send 
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>

      {/* Snackbar for showing success or error message */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarMessage.includes("success") ? "success" : "error"}
          sx={{ width: "100%", backgroundColor: "white", color: "black" }} // White background and black text
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
