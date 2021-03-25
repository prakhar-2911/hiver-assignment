import React from 'react';
// import { debounce } from './Utility';
import { debounce } from 'lodash';
import ListData from './ListData';
import { makeBold } from './Utility';

class HomePage extends React.Component {
  state = {
    searchVal: '',
    results: null,
  };

  componentDidMount() {
    // let observer = new MutationObserver(() => makeBold('results'));
    // observer.observe(document.getElementById('results'), { childList: true });
  }

  inputChangeHandler = (e) => {
    fetch(
      `http://hn.algolia.com/api/v1/search?query=${e?.target?.value}&hitsPerPage=10`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ results: data });
      });
  };

  debounceChangeHandler = debounce(this.inputChangeHandler, 1000);

  render() {
    return (
      <div>
        <header>
          Search Hacker News
          <main>
            <input
              id='search'
              type='search'
              name='hacker_search'
              onChange={this.debounceChangeHandler}
              //value={searchVal}
            />
            <ListData data={this.state?.results?.hits} />
          </main>
        </header>
      </div>
    );
  }
}

export default HomePage;
