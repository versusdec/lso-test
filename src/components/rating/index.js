import styles from "./styles.module.scss"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Rating = ({rating}) => {
  const percentage = rating * 10;
  
  return <div className={styles.rating}>
    <svg style={{ height: 0, width: 0}}>
      <defs>
        <linearGradient id={'gradient'} gradientTransform={'rotate(90)'}>
          <stop offset="16.29%" stopColor="#FCC539" />
          <stop offset="85.56%" stopColor="#DC4A19" />
        </linearGradient>
      </defs>
    </svg>
    <CircularProgressbar
      value={percentage}
      text={rating}
      strokeWidth={7}
      styles={buildStyles({
        textSize: '30px',
        path: {stroke: `url(#gradient)`, height: "100%"},
        textColor: '#fff',
        trailColor: 'rgba(14, 18, 25, 0.44)',
      })}
    />
  </div>;
}