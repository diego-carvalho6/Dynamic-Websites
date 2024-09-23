import { Grid, TableFooter } from "@mui/material"
import {Paper, Box, Container, Typography, Link } from "@mui/material"
import { Image } from "@mui/icons-material"
import { Links, Colors } from "../../Constants"
const FooterComponent = () =>  {

    return  (<Container sx={{marginTop: 'calc(10% + 60px)',
    width: '100%',
    bottom: 0,
    backgroundColor: Colors.PrimaryColor,
    width: '100%',
    padding: "20px",
    margin: 0,
  }} 
  component={"footer"}  maxWidth="false"
  >
        <Grid  
            margin={"0 auto"} 
            container
            direction={"row"}
            justifyContent={"space-between"} xs={8} sx={{gap: "10px"}}>
              
        <Grid justifyContent={"center"} item xs={12}>
        
          <Image priority src="/Logo.svg" width={75} height={30} alt="Logo" />

          <Typography variant="caption" color="initial">
              Copyright 2024 © Todos os Direitos Reservados.
          </Typography>
          
        </Grid>

        <Grid item xs={12} md={4} sm={4} justifyContent="center">
        <Typography typography={"h6"} variant="caption" color="initial">
            {"Topic"}
          </Typography>
          {Links.FooterLinks.map((x, index) => <Grid key={index} item><Link href={x.Link} color="inherit">    
          <Typography variant="caption" color="initial">
            {x.Text}
          </Typography>
          </Link> </Grid>)}
        </Grid>

        <Grid item xs={12} md={4} sm={4} justifyContent="center">
          <Typography typography={"h6"} variant="caption" color="initial">
          {"Topic"}
          </Typography>

          {Links.FooterLinks.map((x, index) => <Grid key={index} item><Link href={x.Link} color="inherit">    
          <Typography variant="caption" color="initial">
            {x.Text}
          </Typography>
          </Link> </Grid>)}
        </Grid>

        </Grid>
      </Container>)
}

export default FooterComponent