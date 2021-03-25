import React from 'react';
import { makeBold } from './Utility';

export default function ListData(props) {
  const { data } = props;

  //   const ref = React.useRef('');

  function calcNumDays(date) {
    const todayDate = new Date();
    const givenDate = new Date(date);
    const sec = todayDate.getTime() - givenDate.getTime();
    const res = Math.floor(sec / (1000 * 60 * 60 * 24));
    if (res > 365) {
      return Math.floor(res / 365) + 'Years Ago';
    } else if (res >= 30) {
      return Math.floor(res / 30) + 'Months Ago';
    } else {
      return res + 'Days Ago';
    }
  }

  //   React.useEffect(() => {
  //     makeBold('results');
  //   }, []);

  return (
    <div id='results'>
      {data?.map((item) => {
        return (
          <div>
            <hr />
            <div>
              <span id={item?.title}>{item?.title}</span>{' '}
              <span>{item?.url}</span>
            </div>
            <div>
              <span id={item?.author}>{item?.author}</span> |
              <span id={item?.created_at}>{calcNumDays(item?.created_at)}</span>{' '}
              |<span id={item?.num_comments}>{item?.num_comments}</span>
            </div>
            <div> {item?.story_text}</div>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
