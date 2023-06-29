import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <Container component={Paper} elevation={8} sx={{height: 400}}>
            <Typography gutterBottom variant="h3">Não podemos encontrar oque está procurando</Typography>
            <Divider />
            <Button fullWidth component={Link} to={'/catalog'}>Volte para o catálogo de produtos</Button>
        </Container>
    )
}