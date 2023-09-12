import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Api() {
  const [listData, setListData] = useState([]);
  let getData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res.data);
        setListData([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const navigate = useNavigate();
  let clickCard = (id) => {
    navigate(`/pages/singleApi/${id}`);
  };
  return (
    <>
      <Box>
        <Typography>Post</Typography>
        <Button onClick={getData} variant="contained">
          Get Post
        </Button>
        {listData.map((x, i) => (
          <Box
            onClick={() => clickCard(x.id)}
            key={i}
            style={{
              padding: 10,
              backgroundColor: "lightgrey",
              marginBottom: 10,
            }}
          >
            <Typography>{x.title}</Typography>
            <Typography>{x.body}</Typography>
            <Typography>{x.userId}</Typography>
          </Box>
        ))}
      </Box>
    </>
  );
        }

// import { Box, Typography, Button } from "@mui/material";
// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Api() {
//   const [listData, setListData] = useState([]);
//   let getData = () => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => {
//         console.log(res.data);
//         setListData([...res.data]);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const navigate = useNavigate();
//   let clickCard = (id) => {
//     navigate(`/pages/singleApi/${id}`);
//   };
//   return (
//     <>
//       <Box>
//         <Typography>Post Api</Typography>
//         <Button onClick={getData} variant="contained">
//           post Button
//         </Button>
//         {listData.map((x, i) => (
//           <Box
//             Onclick={() => clickCard(x.id)}
//             key={i}
//             style={{ padding: 10, backgroundColor: "cyan", marginBottom: 10 }}
//           >
//             <Typography>{x.body}</Typography>
//             <Typography>{x.title}</Typography>
//             <Typography>{x.userId}</Typography>
//           </Box>
//         ))}
//       </Box>
//     </>
//   );
// }
