import { useState } from "react";
import {
  TextField,
  Box,
  Stack,
  Button,
  Typography,
  useTheme,
  Grid,
} from "@mui/material";
import { formTitle } from "./style";

const Form = () => {
  const theme = useTheme();
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const { name, email, phone, city, message } = toSend;
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Stack direction="column">
        <Box sx={{ alignSelf: "center" }}>
          <Typography sx={formTitle}>Get in Touch</Typography>
        </Box>
        <Grid container rowSpacing={2}>
          <Grid item>
            {" "}
            <TextField
              label="Your Name"
              name="name"
              value={name}
              size="small"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            {" "}
            <TextField
              label="Email"
              name="email"
              value={email}
              size="small"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            {" "}
            <TextField
              label="Phone"
              name="phone"
              value={phone}
              size="small"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
          <Grid item>
            <TextField
              label="City"
              name="city"
              value={city}
              size="small"
              variant="outlined"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <TextField
          label="Message"
          name="message"
          value={message}
          rows={4}
          onChange={handleChange}
          sx={{ width: "1225px" }}
          fullWidth
          multiline
        />
      </Stack>
    </>
  );
};
export default Form;
