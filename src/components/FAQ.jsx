import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const handleClick = () => {
  console.log("pressed")
  return (
    <>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1">
      </script>
      <df-messenger
        df-cx="true"
        location="us-central1"
        chat-title="caradvise-chatbot"
        agent-id="02337e81-d79f-451e-80b2-d4ff63e13884"
        language-code="en"
      ></df-messenger>
     
     
    </>
  )
}


const FAQ = () => {
  return (
    <div style={{ justifyContent:"center", alignItems:"center" }}>
      <Stack spacing={2} direction="row">
        {/* <Button variant="text">Text</Button> */}
        <Button variant="contained" onClick={handleClick}>Press here for chatbot</Button>
        {/* <Button variant="outlined">Outlined</Button> */}
      </Stack>

    </div>

  );
};

export default FAQ;
