var PostSearch = React.createClass({
    render: function () {
      return (
        <input className="js-search-field"
               placeholder="Поиск по релизам..."
        />
      )
    }
});

var PostContainer = React.createClass({
    getInitialState: function () {
      return {
      displayedPosts: RELEASES
      };
    },

    render: function () {
      return (
        <div className="js-post-container">
           <PostSearch />
           <PostInputForm />
             {this.state.displayedPosts.map(function(el) {
               return <PostRelease
                   key={el.id}
                   artist={el.artist}
                   album={el.album}
                   year={el.year}
                   genre={el.genre}
                   image={el.image}
               />
               })
              }

        </div>

      )
    }
});

var RELEASES = [
  { id: 1,
    artist: "Linkin Park",
    album: "The Hunting Party",
    year: 2014,
    genre: "Alternative Rock / Alternative Metal / Rap Rock" ,
    image: "images/LP-THP.jpg",
  }, {
    id: 2,
    artist: "Within Temptation",
    album: "Hydra",
    year: 2014,
    genre: "Symphonic / Gothic Metal" ,
    image: "images/WT-H.jpg",
  }, {
    id: 3,
    artist: "Aaron Lewis",
    album: "Town Line",
    year: 2011,
    genre: "Rock / Acoustic / Country" ,
    image: "images/AL-TL.jpg",
  }
];

var PostRelease = React.createClass({
    render: function () {
      return (
        <div>
          <div className="js-post-release clearfix">
          <img className="js-post-image" src={this.props.image} width="250" />
          <div className="js-post-info">
          <div className="js-post-header">{this.props.artist} - {this.props.album} ({this.props.year})</div>
          <div className="js-post-genre">{this.props.genre}</div>
          </div>
          </div>

        </div>
      )
    }
});

var PostInputForm = React.createClass({
    getInitialState: function () {
      return {
         id: '',
         artist: '',
         album: '',
         year: '',
         genre: '',
      };
    },

    render: function () {
      return (
        <div className="js-post-input-form">
          <input className="js-post-input" ref="artist" value={this.state.text} placeholder="Исполнитель" />
          <input className="js-post-input" ref="album" value={this.state.text} placeholder="Альбом" />
          <input className="js-post-input" ref="year" value={this.state.text} placeholder="Год" />
          <input className="js-post-input" ref="genre" value={this.state.text} placeholder="Жанр" />
          <input className="js-post-submit" type="submit" onClick={this.saveNewRelease} value="Добавить релиз" />
        </div>
        )
      },

    saveNewRelease: function () {
       var newData = {
          id: Date.now(),
          artist: this.refs.artist.value,
          album: this.refs.album.value,
          year: this.refs.year.value,
          genre: this.refs.genre.value,
        };

        var newReleases = PostContainer.state.displayedPosts.slice();
        newReleases.unshift(newData);
        PostContainer.setState({ displayedPosts: newReleases })
    }
});

ReactDOM.render(
  <PostContainer />,
  document.getElementById('jsx-post-container')
);
