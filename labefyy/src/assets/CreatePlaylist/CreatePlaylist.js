import React from "react";
import axios from "axios";
import styled from "styled-components";
import labefy from "./../../img/labefy.png";

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #1db954, #191414);
  height: 100vh;
`;

const ButtonList = styled.button`
  font-size: 16px;
  background-color: none;
  color: #2ebd59;
  width: 160px;
  height: 40px;
  border: none;
  background-color: white;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #f4f4f4;
  }
`;
const ButtonCreate = styled.button`
  font-size: 16px;
  background-color: #2ebd59;
  border: none;
  border-radius: 10px;
  color: white;
  width: 160px;
  height: 40px;
  margin-top: 30px;
  -webkit-box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  outline: none;
`;

const ImgLogo = styled.img`
  width: 20vw;
`;

const DivCreateTrack = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 80vh;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
  border-radius: 20px;
  background-color: white;
`;

const TextFieldCustom = styled.input`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.7778em;
  color: #574a43;
  background-color: #f1f1f3;
  -webkit-box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  border: none;
  width: 50%;
  height: 5vh;
  margin-top: 10px;
  outline: none;
`;

export default class CreatePlaylist extends React.Component {
  state = {
    inputName: "",
  };

  // Pegando valor do input
  onChangeCreatePlaylist = (e) => {
    this.setState({ inputName: e.target.value });
    console.log(this.state.inputName);
  };

  // Criando playlist

  playlistCreate = () => {
    const body = {
      name: this.state.inputName,
    };

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
      body,
      {
        headers: {
          Authorization: "luccas-barros-jackson",
        },
      }
    );

    request
      .then((response) => {
        alert(`Playlist ${this.state.inputName} cadastrada com sucesso!`);
        console.log(response);
        this.setState({ inputName: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <DivContainer>
        <DivCreateTrack>
          <ButtonList onClick={this.props.listClick}>
            Lista de Playlists
          </ButtonList>

          <ImgLogo src={labefy} />

          <TextFieldCustom
            placeholder="Insira o nome da sua playlist"
            onChange={this.onChangeCreatePlaylist}
          />
          <TextFieldCustom
            placeholder="Insira a Url da imagem da playlist"
            onChange={this.props.onChangeUrl}
          />
          <ButtonCreate onClick={this.playlistCreate}>
            Criar Playlist
          </ButtonCreate>
        </DivCreateTrack>
      </DivContainer>
    );
  }
}
