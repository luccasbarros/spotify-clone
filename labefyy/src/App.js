import React from "react";
import axios from "axios";
import styled from "styled-components";
import CreatePlaylist from "./assets/CreatePlaylist/CreatePlaylist";
import PlaylistList from "./assets/PlaylistList/PlaylistList";
import PlaylistListDetail from "./assets/PlaylistDetail/PlaylistListDetail";
import CreateTrack from "./assets/CreateTrack/CreateTrack";

export default class App extends React.Component {
  state = {
    currentPage: "login",
    playlistName: "",
    idPlaylist: "",
    inputUrl: "",
  };

  onClickList = () => {
    this.setState({ currentPage: "list" });
  };

  onClickHome = () => {
    this.setState({ currentPage: "login" });
  };

  onClickPlaylistDetail = (name, id) => {
    this.setState({
      currentPage: "details",
      playlistName: name,
      idPlaylist: id,
    });
  };

  onClickCreateTrack = (idPlaylist) => {
    this.setState({ currentPage: "track", idPlaylist: idPlaylist });
  };

  onChangeUrl = (e) => {
    this.setState({ inputUrl: e.target.value });
    console.log(this.state.inputUrl);
  };

  render() {
    const renderPage = () => {
      if (this.state.currentPage === "login") {
        return (
          <CreatePlaylist
            onChangeUrl={this.onChangeUrl}
            listClick={this.onClickList}
          />
        );
      } else if (this.state.currentPage === "list") {
        return (
          <PlaylistList
            urlImage={this.state.inputUrl}
            onClickCreateTrack={this.onClickCreateTrack}
            detailClick={this.onClickPlaylistDetail}
            loginClick={this.onClickHome}
          />
        );
      } else if (this.state.currentPage === "details") {
        return (
          <PlaylistListDetail
            idPlaylist={this.state.idPlaylist}
            playlistName={this.state.playlistName}
            backlist={this.onClickList}
          />
        );
      } else {
        return (
          <CreateTrack
            backlist={this.onClickList}
            idPlaylist={this.state.idPlaylist}
          />
        );
      }
    };

    return <div>{renderPage()}</div>;
  }
}
