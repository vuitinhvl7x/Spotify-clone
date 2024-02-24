import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";
import { reducerCases } from "../utils/Constants";

export default function Body() {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      console.log(selectedPlaylistId);
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
    };
    getInitialPlaylist();
  }, [token, dispatch]);
  return <div>Body</div>;
}
