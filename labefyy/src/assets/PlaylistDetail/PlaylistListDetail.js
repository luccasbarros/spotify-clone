import React from "react";
import axios from "axios";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DivCreateTrack from "./../CreatePlaylist/CreatePlaylist";

export default class PlaylistListDetail extends React.Component {
  state = {
    playlistInfo: [],
    trackInfo: [],
    artistName: "",
    musicName: "",
    url: "",
  };

  componentDidMount() {
    const request = axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.props.playlistName}`,
      {
        headers: {
          Authorization: "luccas-barros-jackson",
        },
      }
    );

    request
      .then((response) => {
        this.setState({ playlistInfo: response.data.result.playlist });
      })
      .catch((err) => {
        console.log(err);
      });

    const request2 = axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`,
      {
        headers: {
          Authorization: "luccas-barros-jackson",
        },
      }
    );

    request2
      .then((response) => {
        this.setState({ trackInfo: response.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    console.log(this.state.trackInfo);
    return (
      <div>
        <Button onClick={this.props.backlist}>Voltar</Button>
        {this.state.playlistInfo.map((e) => {
          return (
            <div>
              <p>Nome da Playlist: {e.name}</p>
            </div>
          );
        })}

        {this.state.trackInfo.map((i) => {
          return (
            <div>
              <p>Nome da música: {i.name}</p>
              <p>Nome do artista: {i.artist}</p>
              <audio controls name="media">
                <source src={i.url} type="audio/mp3"></source>
              </audio>
            </div>
          );
        })}
      </div>
    );
  }
}
