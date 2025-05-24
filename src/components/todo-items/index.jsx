import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  rgbToHex,
} from "@mui/material";
import { lime } from "@mui/material/colors";

function TodoItems({ todo, fetchDetailsOfCurrentTodo }) {
  return (
    <Card
      sx={{
        maxWidth: 350,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography variant="h5" color={"text.secondary"}>
          {todo?.todo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => fetchDetailsOfCurrentTodo(todo?.id)}
          sx={{
            backgroundColor: "#787b28",
            color: "#fff",
            opacity: "0.75",
            "&:hover": {
              backgroundColor: "#4b4d19",
              color: "#fff",
              opacity: "1",
            },
          }}
        >
          DETAILS
        </Button>
      </CardActions>
    </Card>
  );
}

export default TodoItems;
