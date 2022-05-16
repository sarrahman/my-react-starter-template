import { Box, IconButton, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";

function Copyright(props) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "95%",
                color: "#fff",
                p: { xs: 2, md: 4 },
                mt: { xs: 2, md: 0 },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: 3,
                    }}
                >
                    <IconButton sx={{ color: "primary.main" }}>
                        <InstagramIcon
                            sx={{
                                color: "secondary.main",
                                mr: 1,
                            }}
                        />
                    </IconButton>
                    <IconButton sx={{ color: "primary.main" }}>
                        <FacebookIcon
                            sx={{
                                color: "secondary.main",
                                mr: 1,
                            }}
                        />
                    </IconButton>
                    <IconButton sx={{ color: "primary.main" }}>
                        <GoogleIcon
                            sx={{
                                color: "secondary.main",
                                mr: 1,
                            }}
                        />
                    </IconButton>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography variant="body2" color="text.secondary" align="center">
                        Sarrahman © Copyright {new Date().getFullYear()}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Copyright;