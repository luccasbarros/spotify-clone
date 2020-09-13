import React from "react";
import axios from "axios";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DivCreateTrack from "./../CreatePlaylist/CreatePlaylist";

export default class CreateTrack extends React.Component {
  state = {
    inputMusicName: "",
    inputArtistName: "",
    url: "",
  };

  onChangeMusicName = (e) => {
    this.setState({ inputMusicName: e.target.value });
    console.log(this.state.inputMusicName);
  };

  onChangeArtistName = (e) => {
    this.setState({ inputArtistName: e.target.value });
    console.log(this.state.inputArtistName);
  };

  onChangeUrl = (e) => {
    this.setState({ url: e.target.value });
    console.log(this.state.url);
  };

  createTrack = () => {
    const body = {
      name: this.state.inputMusicName,
      artist: this.state.inputArtistName,
      url: this.state.url,
    };
    const request = axios.post(
      `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`,
      body,
      {
        headers: {
          Authorization: "luccas-barros-jackson",
        },
      }
    );

    request
      .then((response) => {
        alert(`Musica adicionada com sucesso!`);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props.idPlaylist);

    return (
      <div>
        <Button onClick={this.props.backlist}>Voltar</Button>
        <p>
          Nome da música:{" "}
          <input
            onChange={this.onChangeMusicName}
            placeholder="Nome da música"
          />
        </p>
        <p>
          Nome do artista:{" "}
          <input onChange={this.onChangeArtistName} placeholder="Artista" />
        </p>
        <p>
          URL: <input onChange={this.onChangeUrl} placeholder="Url" />
        </p>
        <Button onClick={this.createTrack}>Adicionar Música</Button>
      </div>
    );
  }
}
